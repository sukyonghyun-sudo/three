"""우리팀 뉴스 TV — 다섯 분야(게임·AI·IT·연예·만화/애니) 뉴스 제목을 모아 news.json 하나로
GitHub 자동 작업(.github/workflows/team-news.yml)이 20분마다 돌려 team-news 가지에 올린다. 페이지는 그 파일만 읽는다.
기사 본문·사진은 안 가져온다 — 제목·언론사·링크·시각만.
usage: python fetch_news.py <out.json>"""
import html, json, re, sys, time, urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime

KST = timezone(timedelta(hours=9))
G = "https://news.google.com/rss"
GQ = "hl=ko&gl=KR&ceid=KR:ko"
# (분야, 주소, 이 주소에 언론사 이름이 없을 때 붙일 이름)
FEEDS = [
    ("게임", "https://www.khgames.co.kr/rss/allArticle.xml", "경향게임스"),
    ("게임", f"{G}/search?q=%EA%B2%8C%EC%9E%84%EC%97%85%EA%B3%84+OR+%EA%B2%8C%EC%9E%84%EC%82%AC+OR+%EC%8B%A0%EC%9E%91+%EA%B2%8C%EC%9E%84+when:1d&{GQ}", ""),
    ("AI", "https://www.aitimes.com/rss/allArticle.xml", "AI타임스"),
    ("IT", f"{G}/headlines/section/topic/TECHNOLOGY?{GQ}", ""),
    ("IT", "https://it.donga.com/feeds/rss/", "IT동아"),
    ("연예", "https://www.yna.co.kr/rss/entertainment.xml", "연합뉴스"),
    ("연예", f"{G}/headlines/section/topic/ENTERTAINMENT?{GQ}", ""),
    ("만화·애니", f"{G}/search?q=%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98+OR+%EC%95%A0%EB%8B%88+OR+%EB%A7%8C%ED%99%94+OR+%EC%9B%B9%ED%88%B0+when:2d&{GQ}", ""),
]
ORDER = ["게임", "AI", "IT", "연예", "만화·애니"]
PER_CAT = 8
MAX_AGE_H = 48
# 모든 분야에서 빼는 것: 정치·사건사고·전쟁 (사무실 TV 는 가볍게) · 코인·투자
DROP = re.compile(r"대통령|총리|국힘|국민의힘|민주당|국회|與|野|尹|선거|선관위|탄핵|검찰|기소|재판|구속|징역|살인|참사|전쟁|폭격|공습|우크라|북한|김정은|트럼프|원전"
                  r"|사망|숨져|숨진|피살|자살"
                  r"|코인|비트코인|이더리움|가상자산|암호화폐|디지털 ?자산|업비트|빗썸|코인베이스|리플|XRP|ETF|토큰|블록체인|하이퍼리퀴드|테더|바이낸스|스테이블")
# 분야별: 꼭 있어야 하는 낱말 / 빼는 낱말
NEED = {"AI": re.compile(r"AI|인공지능|GPT|LLM|오픈AI|앤트로픽|클로드|제미나이|딥시크|엔비디아|에이전트|로봇|휴머노이드|모델|챗봇|구글|메타|MS|마이크로소프트|xAI|그록|미스트랄|데이터센터|반도체")}
SKIP = {"만화·애니": re.compile(r"지방세|세금|할인|아울렛|분양|보험|대출|포토\]|협약|진로|대학|고교|교육청"), "IT": re.compile(r"보병|드론 공격|군 |미사일")}


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (team-news bot; +https://sukyonghyun-sudo.github.io/three/team-office/)"})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read()


def when(s):
    s = (s or "").strip()
    if not s:
        return None
    try:
        d = parsedate_to_datetime(s)
    except Exception:
        try:
            d = datetime.strptime(s[:19], "%Y-%m-%d %H:%M:%S").replace(tzinfo=KST)  # 한국 언론사 RSS (시간대 없이 한국 시각)
        except Exception:
            return None
    if d.tzinfo is None:
        d = d.replace(tzinfo=KST)
    return d.timestamp()


def clean(t, src):
    t = html.unescape(re.sub(r"<[^>]+>", "", t or "")).strip()
    while src and t.endswith(" - " + src):
        t = t[: -len(src) - 3].strip()  # 구글 뉴스: 「제목 - 언론사」 (가끔 두 번 붙어 옴)
    return re.sub(r"\s+", " ", t)


def grams(t):
    t = re.sub(r"\[[^\]]*\]|[^0-9A-Za-z가-힣]", "", t)
    return {t[i:i + 2] for i in range(len(t) - 1)}, {t[i:i + 3] for i in range(len(t) - 2)}


def same(a, b):  # 같은 소식을 다른 언론사가 쓴 것: 두 글자 조각이 작은 쪽의 절반 넘게 겹치거나, 세 글자 조각이 5개 넘게 같으면
    (a2, a3), (b2, b3) = a, b
    if not a2 or not b2:
        return False
    return len(a2 & b2) / min(len(a2), len(b2)) >= 0.5 or len(a3 & b3) >= 5


def main(out):
    now = time.time()
    items, seen, ok = [], [], 0
    for cat, url, name in FEEDS:
        try:
            root = ET.fromstring(get(url))
            ok += 1
        except Exception as e:
            print("skip", cat, url[:60], repr(e)[:80])
            continue
        for it in root.iter("item"):
            src = (it.findtext("source") or name or "").strip()
            t = clean(it.findtext("title"), src)
            ts = when(it.findtext("pubDate"))
            u = (it.findtext("link") or "").strip()
            if not t or not ts or not u.startswith("http") or now - ts > MAX_AGE_H * 3600 or ts - now > 3600:
                continue
            if DROP.search(t) or (cat in NEED and not NEED[cat].search(t)) or (cat in SKIP and SKIP[cat].search(t)):
                continue
            g = grams(t)
            if any(same(g, s) for s in seen):
                continue
            seen.append(g)
            items.append({"c": cat, "t": t, "s": src or "뉴스", "u": u, "ts": int(ts)})
    by = {c: sorted([x for x in items if x["c"] == c], key=lambda x: -x["ts"])[:PER_CAT] for c in ORDER}
    mixed = []  # 분야를 번갈아 (게임 → AI → IT → 연예 → 만화·애니 → 게임 …), 분야 안에선 최신 먼저
    for i in range(PER_CAT):
        for c in ORDER:
            if i < len(by[c]):
                mixed.append(by[c][i])
    print("feeds ok", ok, "/", len(FEEDS), {c: len(by[c]) for c in ORDER})
    if len(mixed) < 5:
        sys.exit("too few items — keep the old file")
    json.dump({"v": 1, "at": int(now), "items": mixed}, open(out, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "news.json")
