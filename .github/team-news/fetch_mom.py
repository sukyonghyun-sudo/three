"""아기 수첩 「새 소식」 — 임신·출산·육아 지원 정책 기사 제목을 모아 mom_news.json 하나로
fetch_news.py 와 같은 자동 작업(team-news.yml)이 20분마다 돌려 team-news 가지에 함께 올린다.
제목·언론사·링크·시각만 (본문·사진 없음). 연예인 임신 소식·사건사고·정쟁·외국 정책·보험 광고는 뺀다.
usage: python fetch_mom.py <out.json>"""
import json, re, sys, time
import xml.etree.ElementTree as ET
from urllib.parse import quote, urlparse

from fetch_news import G, GQ, clean, get, grams, same, when

QUERIES = ["임산부 지원", "출산 지원 OR 출산지원금", "육아휴직 OR 출산휴가", "부모급여 OR 첫만남이용권 OR 아동수당", "임신 출산 정책 OR 저출생 대책"]
FEEDS = [(f"{G}/search?q={quote(q + ' when:7d')}&{GQ}", "") for q in QUERIES]
MAX_AGE_H = 24 * 7
MAX_ITEMS = 20
NEED = re.compile(r"임신|임산부|출산|출생|육아휴직|육아기|부모급여|첫만남|아동수당|산후|산모|난임|태아|신생아|모성|맘편한|국민행복카드|아이돌봄|배우자 출산")
POLICY = re.compile(r"지원|급여|제도|정책|휴가|휴직|수당|바우처|신청|확대|개편|인상|혜택|보건소|정부|복지부|노동부|지자체|시행|대책|법|예산|무료|감면|할인|개정")
DROP = re.compile(r"사망|숨져|숨진|살해|학대|폭행|유기|사건|사고|구속|기소|혐의|재판|징역|경찰|검찰|참사|화재|추락"
                  r"|득녀|득남|임신 소식|출산 소식|임신 발표|태명|♥|열애|결혼식|아이돌|배우(?!자)|가수|걸그룹|보이그룹|방송인|개그맨|개그우먼|유튜버|셀럽"
                  r"|국힘|국민의힘|민주당|탄핵|선거|공천"
                  r"|중국|일본|미국|대만|中|日|美|프랑스|독일|영국"
                  r"|보험|코인|대출|분양|주가|증시|부동산"
                  r"|체험|출시|업데이트|솔루션|공모전|표창|시상|협약|MOU|특집|홍보|기능|계정|축협|농협|수협|원자력|수상"  # 업체 홍보·행사 소식
                  r"|낙태|위조|수사")
# 한 지역 소식: 「아산시 …」「영양군, …」 또는 시·도 이름 (전국 제도만 남긴다)
LOCAL = re.compile(r"^(\[[^\]]*\]\s*)?[가-힣]{1,5}(특별시|광역시|시|군|구)(,|\s|보건소|청)"
                   r"|(서울|부산|대구|인천|광주|대전|울산|세종|경기|강원|충북|충남|전북|전남|경북|경남|제주)(\s|·|,|광주|도|시|특별)"
                   r"|(^|\s)(?!즉시|동시|당시|수시|임시|역시|다시|잠시|일시|상시|항시)[가-힣]{1,3}(군|시)\s")  # 「기장군 임산부」
FOREIGN_SRC = re.compile(r"\.vn\b|laodong|vietnam|xinhua|people\.cn", re.I)


def main(out):
    now = time.time()
    items, seen, ok = [], [], 0
    for url, name in FEEDS:
        try:
            root = ET.fromstring(get(url))
            ok += 1
        except Exception as e:
            print("skip", url[:70], repr(e)[:80])
            continue
        for it in root.iter("item"):
            src = (it.findtext("source") or name or "").strip()
            t = clean(it.findtext("title"), src)
            ts = when(it.findtext("pubDate"))
            u = (it.findtext("link") or "").strip()
            if not t or not ts or not u.startswith("http") or now - ts > MAX_AGE_H * 3600 or ts - now > 3600:
                continue
            if DROP.search(t) or LOCAL.search(t) or FOREIGN_SRC.search(src) or not NEED.search(t) or not POLICY.search(t):
                continue
            if src.startswith("http"):  # 언론사 이름 대신 주소가 온 것
                src = (urlparse(src).hostname or "").removeprefix("www.")
            g = grams(t)
            if any(same(g, s) for s in seen):
                continue
            seen.append(g)
            items.append({"t": t, "s": src or "뉴스", "u": u, "ts": int(ts)})
    items.sort(key=lambda x: -x["ts"])
    print("feeds ok", ok, "/", len(FEEDS), "items", len(items))
    if not ok:
        sys.exit("no feed — keep the old file")
    json.dump({"v": 1, "at": int(now), "items": items[:MAX_ITEMS]}, open(out, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "mom_news.json")
