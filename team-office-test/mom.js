// 아기 수첩 — 홍수연(임산부) 화면에만 보이는 아기 얼굴 단추 · 말풍선 알림 · 자세히 보는 창
// - 보이는 조건: 이 기기에서 로그인한 사람이 홍수연 (테스트 판은 「🧪 나」에서 홍수연을 고르면)
// - 예정일·알림 설정은 이 기기(localStorage)에만 둔다 — 서버로 보내지 않는다 (다른 사람·관리 화면에 안 보임)
// - 아기가 말풍선으로 하나씩: 이번 주 아기 크기 · 엄마 몸 · 검사 · 지금 받을 수 있는 국가 지원 · 생활 도움말
// - 국가 지원은 2026년 10월 기준 공개 자료로 정리 — 금액·조건은 바뀔 수 있어 공식 사이트 링크를 같이 둔다 (회사 제도는 넣지 않음)
// ctx: { who, me: () => MY, test, stage }
window.OfficeMom = function (ctx) {
  const KEY = "teamOfficeMom:" + ctx.who;
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  let S = { every: 60, ...load() }; // { due: "2027-02-16", every: 분 (0 = 끄기), seenWeek, shown: { id: ms } }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} };

  // ───────── 주수별 아기 (크기는 평균 — 19주까지 머리~엉덩이, 20주부터 머리~발) ─────────
  const BABY = {
    4: ["🌱", "양귀비씨", "약 0.1cm", "", "엄마 배 속에 자리를 잡았어요"],
    5: ["⚪", "참깨", "약 0.2cm", "", "심장이 될 작은 관이 생겨요"],
    6: ["🫘", "렌틸콩", "약 0.5cm", "", "작은 심장이 뛰기 시작해요"],
    7: ["🫐", "블루베리", "약 1.3cm", "", "팔다리가 될 싹이 돋아요"],
    8: ["🫘", "강낭콩", "약 1.6cm", "약 1g", "손가락·발가락이 갈라지기 시작해요"],
    9: ["🍇", "포도알", "약 2.3cm", "약 2g", "꼬리가 없어지고 사람 모습이 돼요"],
    10: ["🍊", "금귤", "약 3cm", "약 4g", "중요한 기관이 거의 다 만들어졌어요"],
    11: ["🍓", "큰 딸기", "약 4cm", "약 7g", "손을 폈다 쥐었다 해요"],
    12: ["🍋", "라임", "약 5cm", "약 14g", "손톱이 생기고 깜짝 놀라는 반사를 해요"],
    13: ["🍋", "레몬", "약 7cm", "약 23g", "손가락에 지문이 생겨요"],
    14: ["🍑", "복숭아", "약 9cm", "약 43g", "찡그리고 웃는 표정을 지어요"],
    15: ["🍎", "사과", "약 10cm", "약 70g", "눈꺼풀 너머로 빛을 느껴요"],
    16: ["🥑", "아보카도", "약 12cm", "약 100g", "팔다리를 힘차게 움직여요"],
    17: ["🍐", "배", "약 13cm", "약 140g", "몸에 지방이 쌓이기 시작해요"],
    18: ["🫑", "피망", "약 14cm", "약 190g", "귀가 자리를 잡아 소리를 들어요"],
    19: ["🍅", "토마토", "약 15cm", "약 240g", "피부를 지켜 주는 하얀 태지가 생겨요"],
    20: ["🍌", "바나나", "약 25cm", "약 300g", "절반 왔어요! 태동이 또렷해져요"],
    21: ["🥕", "당근", "약 27cm", "약 360g", "양수를 삼키며 맛을 느껴요"],
    22: ["🥭", "망고", "약 28cm", "약 430g", "눈썹과 속눈썹이 생겨요"],
    23: ["🍊", "자몽", "약 29cm", "약 500g", "엄마 목소리를 알아들어요"],
    24: ["🌽", "옥수수", "약 30cm", "약 600g", "숨쉬기 연습을 시작해요"],
    25: ["🥦", "브로콜리 큰 송이", "약 35cm", "약 660g", "머리카락이 자라요"],
    26: ["🥗", "상추 한 포기", "약 36cm", "약 760g", "눈을 뜨기 시작해요"],
    27: ["🥦", "콜리플라워", "약 37cm", "약 880g", "자고 깨는 리듬이 생겨요"],
    28: ["🍆", "가지", "약 38cm", "약 1kg", "눈을 깜빡여요 — 이제 임신 후기예요"],
    29: ["🎃", "단호박", "약 39cm", "약 1.2kg", "뼈가 단단해져요"],
    30: ["🥬", "양배추", "약 40cm", "약 1.3kg", "뇌가 빠르게 자라요"],
    31: ["🥥", "코코넛", "약 41cm", "약 1.5kg", "고개를 이리저리 돌려요"],
    32: ["🥬", "배추 한 통", "약 42cm", "약 1.7kg", "손톱·발톱이 다 자랐어요"],
    33: ["🍍", "파인애플", "약 44cm", "약 1.9kg", "면역력을 엄마에게서 받아요"],
    34: ["🍈", "멜론", "약 45cm", "약 2.1kg", "폐가 거의 다 자랐어요"],
    35: ["🍈", "허니듀 멜론", "약 46cm", "약 2.4kg", "자리가 좁아 꼼지락거려요"],
    36: ["🥬", "로메인 한 다발", "약 47cm", "약 2.6kg", "머리를 아래로 두고 나올 준비를 해요"],
    37: ["🌿", "근대 한 단", "약 49cm", "약 2.9kg", "언제 나와도 괜찮을 만큼 자랐어요"],
    38: ["🧅", "대파 한 단", "약 50cm", "약 3.1kg", "숨쉬기·빨기 연습을 해요"],
    39: ["🍉", "작은 수박", "약 51cm", "약 3.3kg", "곧 만나요!"],
    40: ["🎃", "호박", "약 51cm", "약 3.5kg", "엄마를 만날 준비가 끝났어요"],
  };
  const MOM = [ // 엄마 몸 (주수 범위)
    [0, 6, "생리가 늦어지고 쉽게 피곤해요. 가슴이 뻐근하기도 해요. 엽산을 꼭 챙겨요."],
    [7, 10, "입덧이 가장 심한 때예요. 빈속이 더 울렁거리니 조금씩 자주 먹어요."],
    [11, 13, "입덧이 조금씩 줄어요. 아랫배가 살짝 나오기 시작해요."],
    [14, 17, "안정기예요. 컨디션이 나아지고 배가 조금씩 불러와요."],
    [18, 22, "태동을 느끼기 시작해요. 허리가 뻐근할 수 있어요."],
    [23, 27, "배가 커지면서 다리가 붓고 저려요. 자주 일어나 걸어요."],
    [28, 31, "후기예요. 숨이 차고 속이 쓰릴 수 있어요. 잠은 왼쪽으로 누워서."],
    [32, 35, "배가 많이 무거워요. 자주 쉬고, 배가 자주 뭉치면 병원에 물어봐요."],
    [36, 99, "출산 준비! 입원 가방을 싸 두고 진통 간격을 재는 법을 알아 둬요."],
  ];
  const CHECK = [ // 주수별 검사 (일반적인 시기 — 병원마다 조금씩 달라요)
    [11, 13, "1차 기형아 검사 (목덜미 투명대)"],
    [15, 20, "2차 기형아 검사 (피검사)"],
    [20, 24, "정밀 초음파"],
    [24, 28, "임신성 당뇨 검사"],
    [36, 40, "막달 검사"],
  ];

  // ───────── 국가 지원 (2026년 10월 기준 · 회사 제도 제외) ─────────
  // w: 「지금 챙길 것」으로 보일 주수 범위들 · tip: 그때 아기가 말풍선으로 알려 줄 말
  const GOV = "https://www.gov.kr", BOKJI = "https://www.bokjiro.go.kr", WORK = "https://www.work24.go.kr", MOEL = "https://www.moel.go.kr";
  const SUP = [
    { id: "card", g: 0, em: "💳", t: "임신·출산 진료비 (국민행복카드)", amt: "100만 원", w: [[4, 20]],
      d: "진료비·약값에 쓰는 바우처예요. 쌍둥이 이상은 아기 한 명당 100만 원, 분만 취약지에 살면 20만 원 더. 아기가 2살 되기 전 아기 진료비에도 써요.",
      how: "병원에서 임신확인서를 받아 카드사·국민건강보험공단·정부24에서 신청 · 분만 예정일(출산일)부터 2년 안에 써요", url: "https://www.nhis.or.kr", site: "국민건강보험공단",
      tip: "국민행복카드로 진료비 100만 원을 받을 수 있어요. 아직이면 신청해요!" },
    { id: "onestop", g: 0, em: "📝", t: "「맘편한 임신」 한 번에 신청", amt: "", w: [[4, 16]],
      d: "엽산제·철분제, KTX 할인 같은 임신 지원을 정부24에서 한 번에 신청해요. 사는 지역에 따라 묶인 항목이 조금씩 달라요.",
      how: "정부24에서 「맘편한 임신」 검색", url: GOV, site: "정부24", tip: "정부24 「맘편한 임신」으로 여러 지원을 한 번에 신청할 수 있어요" },
    { id: "pills", g: 0, em: "💊", t: "엽산제·철분제 무료 (보건소)", amt: "", w: [[4, 12], [16, 24]],
      d: "보건소에 임산부로 등록하면 엽산제(임신 12주까지)와 철분제(16주부터)를 받아요. 주는 양과 받는 방법(택배 등)은 보건소마다 달라요.",
      how: "사는 곳 보건소에 임산부 등록 (「맘편한 임신」으로도 돼요)", url: GOV, site: "정부24",
      tip: (wk) => wk <= 12 ? "보건소에 등록하면 엽산제를 무료로 받아요" : "16주부터는 보건소에서 철분제를 무료로 받아요" },
    { id: "ktx", g: 0, em: "🚄", t: "맘편한 KTX", amt: "특실을 일반실 값에", w: [[4, 40]],
      d: "KTX 특실을 일반실 값으로 타요 (보호자 1명도 같이). 신청한 날부터 출산 예정일 뒤 1년까지 써요.",
      how: "정부24 「맘편한 임신」 또는 코레일 멤버십에서 임산부 등록", url: "https://www.letskorail.com", site: "코레일",
      tip: "KTX 탈 일 있으면 「맘편한 KTX」 — 특실을 일반실 값으로 타요" },
    { id: "short", g: 1, em: "⏰", t: "임신기 근로시간 단축", amt: "하루 2시간 · 월급 그대로", w: [[4, 12], [31, 40]],
      d: "임신 12주까지, 그리고 32주부터는 하루 2시간 덜 일해도 월급이 줄지 않아요. 의사가 고위험 임신이라고 하면 임신 기간 내내 쓸 수 있어요.",
      how: "시작하기 3일 전까지 회사에 서면으로 신청 (의사 진단서 첨부)", url: MOEL, site: "고용노동부",
      tip: (wk) => wk <= 12 ? "12주까지는 하루 2시간 덜 일해도 월급 그대로예요 — 근로시간 단축" : wk < 32 ? "곧 32주! 그때부터 하루 2시간 단축을 다시 쓸 수 있어요 (3일 전 신청)" : "지금은 하루 2시간 덜 일해도 월급 그대로예요 — 근로시간 단축" },
    { id: "check", g: 1, em: "🩺", t: "태아 검진 시간", amt: "검진 시간도 월급 그대로", w: [[4, 42]],
      d: "정기검진 받으러 가는 시간을 회사에 청구할 수 있고, 그 시간 때문에 월급이 깎이지 않아요. 28주까지 4주에 1번, 29~36주 2주에 1번, 37주부터 매주.",
      how: "검진 날 회사에 검진 시간 청구", url: MOEL, site: "고용노동부",
      tip: (wk) => `지금은 정기검진이 ${wk <= 28 ? "4주에 1번" : wk <= 36 ? "2주에 1번" : "매주"}이에요. 검진 시간은 월급이 안 깎여요` },
    { id: "clock", g: 1, em: "🕙", t: "출퇴근 시각 바꾸기", amt: "", w: [[4, 42]],
      d: "하루 일하는 시간은 그대로 두고 출근·퇴근 시각을 바꿔 달라고 하면 회사는 들어줘야 해요. 붐비는 출퇴근길을 피할 때 좋아요.",
      how: "회사에 신청", url: MOEL, site: "고용노동부", tip: "출근 시각을 늦추거나 당겨 달라고 할 수 있어요 — 붐비는 지하철 피하기" },
    { id: "night", g: 1, em: "🌙", t: "야근·휴일 근무 보호", amt: "", w: [],
      d: "임신 중에는 연장 근무를 시킬 수 없어요. 밤 10시~아침 6시와 휴일 근무는 본인이 원해서 청구하고 노동부 인가가 있을 때만 해요.",
      how: "", url: MOEL, site: "고용노동부" },
    { id: "leave", g: 1, em: "🏖", t: "출산전후휴가", amt: "90일 (쌍둥이 120일)", w: [[28, 40]],
      d: "출산 앞뒤로 90일 쉬어요 (미숙아 100일, 쌍둥이 이상 120일). 출산 뒤에 45일 이상(쌍둥이 60일)이 남게 시작일을 정해요. 대기업은 앞 60일은 회사가, 뒤 30일은 고용보험이 줘요 (2026년 30일에 최대 220만 원).",
      how: "회사에 휴가 신청 → 고용24에서 급여 신청", url: WORK, site: "고용24", tip: "출산휴가는 90일 — 시작일을 회사와 미리 정해 두면 마음이 편해요" },
    { id: "spouse", g: 1, em: "🤝", t: "배우자 출산휴가", amt: "20일 (유급)", w: [[34, 42]],
      d: "아빠가 출산 뒤 120일 안에 20일을 쉬어요. 3번까지 나눠 쓸 수 있어요.",
      how: "아빠 회사에 신청", url: WORK, site: "고용24", tip: "아빠는 출산 뒤 20일 출산휴가를 쓸 수 있어요 — 미리 알려 줘요" },
    { id: "onestop2", g: 2, em: "📮", t: "「행복출산 원스톱」", amt: "", w: [[36, 42]],
      d: "출생신고 할 때 정부24·주민센터에서 첫만남이용권·부모급여·아동수당 등을 한 번에 신청해요. 태어난 날 포함 60일 안에 신청하면 태어난 달 것부터 받아요.",
      how: "출생신고 때 함께", url: GOV, site: "정부24", tip: "출생신고 때 「행복출산 원스톱」으로 지원금을 한 번에 — 60일 안에!" },
    { id: "meet", g: 2, em: "🎁", t: "첫만남이용권", amt: "첫째 200만 원 · 둘째부터 300만 원", w: [[36, 42]],
      d: "국민행복카드 바우처로 받아요. 태어난 날부터 2년 안에 써요.", how: "「행복출산 원스톱」으로", url: BOKJI, site: "복지로",
      tip: "태어나면 첫만남이용권 200만 원을 받아요 (둘째부터 300만 원)" },
    { id: "parent", g: 2, em: "👶", t: "부모급여", amt: "0세 월 100만 원 · 1세 월 50만 원", w: [[36, 42]],
      d: "어린이집에 다니면 보육료만큼 빼고 받아요.", how: "「행복출산 원스톱」으로", url: BOKJI, site: "복지로", tip: "부모급여는 0세 때 매달 100만 원이에요" },
    { id: "child", g: 2, em: "🧒", t: "아동수당", amt: "월 10만 원 (9세 미만)", w: [[36, 42]],
      d: "2026년부터 9세 미만까지 받아요. 사는 지역에 따라 조금 더 받기도 해요.", how: "「행복출산 원스톱」으로", url: BOKJI, site: "복지로" },
    { id: "care", g: 2, em: "🏠", t: "산모·신생아 건강관리 (산후도우미)", amt: "", w: [[34, 42]],
      d: "건강관리사가 집에 와서 엄마와 아기를 돌봐요. 소득·지역에 따라 대상과 내는 돈이 달라요.",
      how: "출산 예정 40일 전부터 보건소·복지로에서 신청", url: BOKJI, site: "복지로", tip: "산후도우미 지원은 출산 예정 40일 전부터 신청할 수 있어요" },
    { id: "pleave", g: 2, em: "🍼", t: "육아휴직", amt: "엄마·아빠 각 1년 (+6개월)", w: [[34, 42]],
      d: "엄마·아빠 각각 1년, 둘 다 3개월 이상 쓰면 1년 6개월까지. 급여는 1~3개월 월 최대 250만 원, 4~6개월 200만 원, 그 뒤 160만 원.",
      how: "회사에 신청 → 고용24에서 급여 신청", url: WORK, site: "고용24" },
  ];
  const GROUP = ["임신 중에 받아요", "회사 다니면서 (법으로 보장)", "아기가 태어나면"];
  const TIPS = [ // 생활 도움말 [아이디, 시작 주, 끝 주, 말]
    ["water", 0, 42, "💧 물 한 잔 마셔요 — 붓기와 변비에 좋아요"],
    ["stretch", 12, 42, "🧘 한 시간에 한 번은 일어나 기지개 — 허리·다리가 덜 부어요"],
    ["nausea", 0, 14, "🍽 입덧엔 조금씩 자주 — 빈속이 더 울렁거려요"],
    ["feet", 20, 42, "🦵 다리가 부으면 앉을 때 발을 살짝 올려 두세요"],
    ["left", 24, 42, "🛌 누울 땐 왼쪽으로 — 아기에게 피가 잘 돌아요"],
    ["walk", 14, 36, "🚶 가볍게 걷기 — 컨디션 좋은 날 20~30분"],
    ["coffee", 0, 42, "☕ 커피는 하루 한두 잔까지 (카페인 200mg 아래)"],
    ["nap", 0, 42, "😴 피곤하면 잠깐 눈 붙이기 — 몸이 쉬라는 신호예요"],
    ["bag", 32, 42, "👜 입원 가방을 미리 싸 두면 마음이 편해요"],
    ["sos", 0, 42, "🚑 이럴 땐 바로 병원: 피가 비침 · 심한 배 통증 · 양수가 샘 · 태동이 확 줄 때"],
  ];

  // ───────── 날짜 ─────────
  const DAY = 86400e3, KDAY = "일월화수목금토";
  const midnight = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const parse = (s) => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s || ""); return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null; };
  const ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const nice = (d) => `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 (${KDAY[d.getDay()]})`;
  const sample = () => !!ctx.test && !S.due; // 테스트 판: 예정일을 안 넣었으면 보기용 날짜 (24주 3일)
  const dueDate = () => parse(S.due) || (sample() ? new Date(midnight(new Date()).getTime() + 109 * DAY) : null);
  function now() { // { due, left: 예정일까지 며칠, days: 임신 며칠째, wk, d }
    const due = dueDate();
    if (!due) return null;
    const left = Math.round((due - midnight(new Date())) / DAY), days = 280 - left;
    return { due, left, days, wk: Math.floor(days / 7), d: ((days % 7) + 7) % 7 };
  }
  const inW = (w, wk) => w.some(([a, b]) => wk >= a && wk <= b);
  const babyOf = (wk) => BABY[Math.max(4, Math.min(40, wk))];
  const momOf = (wk) => MOM.find(([a, b]) => wk >= a && wk <= b)?.[2] || "";
  const tipOf = (s, wk) => typeof s.tip === "function" ? s.tip(wk) : s.tip;

  // ───────── 모양 ─────────
  const FACE = `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="9" cy="35" r="6" fill="#ffc9ad"/><circle cx="55" cy="35" r="6" fill="#ffc9ad"/><circle cx="32" cy="34" r="24" fill="#ffdcc6"/>
    <path d="M27 12c1-5 9-6 10-1-3-2-6-1-6 3" fill="none" stroke="#9a6648" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M20 34q4.5-4.5 9 0M35 34q4.5-4.5 9 0" fill="none" stroke="#4b3527" stroke-width="2.6" stroke-linecap="round"/>
    <ellipse cx="18.5" cy="42" rx="5" ry="3.2" fill="#ff9c9c" opacity=".55"/><ellipse cx="45.5" cy="42" rx="5" ry="3.2" fill="#ff9c9c" opacity=".55"/>
    <path d="M28.5 44q3.5 3.5 7 0" fill="none" stroke="#c45d55" stroke-width="2.4" stroke-linecap="round"/></svg>`;
  const css = document.createElement("style");
  css.textContent = `
  .mom-btn{position:absolute;left:calc(16px + env(safe-area-inset-left));bottom:calc(16px + env(safe-area-inset-bottom));z-index:7;width:62px;height:62px;border-radius:50%;border:0;padding:5px;cursor:pointer;
    background:#fff;box-shadow:0 0 0 3px #ffd3df,0 10px 24px rgba(214,92,130,.28);transition:transform .2s;animation:momBob 4.8s ease-in-out infinite}
  .mom-btn[hidden]{display:none}
  .mom-btn:hover{transform:scale(1.06)}
  .mom-btn svg{width:100%;height:100%;display:block}
  .mom-btn .wk{position:absolute;left:50%;bottom:-9px;transform:translateX(-50%);background:#ff6f96;color:#fff;font-size:11px;font-weight:800;line-height:1;padding:4px 7px;border-radius:999px;white-space:nowrap;box-shadow:0 2px 6px rgba(214,92,130,.35)}
  .mom-btn .wk:empty{display:none}
  .mom-btn.talk{animation:momWiggle .9s ease-in-out 2}
  @keyframes momBob{0%,100%{translate:0 0}50%{translate:0 -3px}}
  @keyframes momWiggle{0%,100%{rotate:0deg}25%{rotate:-9deg}75%{rotate:9deg}}
  .mom-bub{position:absolute;left:calc(92px + env(safe-area-inset-left));bottom:calc(26px + env(safe-area-inset-bottom));z-index:7;width:max-content;max-width:min(330px,calc(100% - 120px));
    background:#fff;border-radius:16px 16px 16px 4px;box-shadow:0 12px 32px rgba(0,0,0,.16);border:.5px solid rgba(0,0,0,.06);padding:11px 14px 10px;cursor:pointer;
    animation:momIn .35s cubic-bezier(.2,1.4,.4,1)}
  .mom-bub[hidden]{display:none}
  .mom-bub small{display:block;font-size:11px;font-weight:700;color:#ff5c8a;margin-bottom:3px}
  .mom-bub p{margin:0;font-size:13.5px;line-height:1.5;color:#1c1c1e;word-break:keep-all}
  .mom-bub .row{display:flex;align-items:center;gap:10px;margin-top:6px;font-size:12px}
  .mom-bub .more{color:#ff5c8a;font-weight:700}
  .mom-bub .x{margin-left:auto;border:0;background:none;color:#8e8e93;font:inherit;font-size:12px;cursor:pointer;padding:2px 4px}
  @keyframes momIn{from{opacity:0;transform:translateY(8px) scale(.96)}to{opacity:1;transform:none}}
  @media (max-width:820px),(max-height:520px){
    .mom-btn{width:54px;height:54px;bottom:calc(66px + env(safe-area-inset-bottom));left:calc(12px + env(safe-area-inset-left))}
    .mom-bub{left:calc(76px + env(safe-area-inset-left));bottom:calc(74px + env(safe-area-inset-bottom));max-width:calc(100% - 96px)}}
  html body.pip .mom-btn,html body.pip .mom-bub{display:none!important}
  .mom-card .sx-head .em{background:#fff0f4;padding:4px}
  .mom-card .sx-head .em svg{width:100%;height:100%}
  .mom-card .sx-tabs button.on{border-bottom-color:#ff6f96}
  .mom-hero{background:linear-gradient(135deg,#fff1f5,#fff8ec);border-radius:16px;padding:14px 16px;margin-bottom:12px}
  .mom-hero .big{font-size:26px;font-weight:800;letter-spacing:-.02em;color:#1c1c1e}
  .mom-hero .big span{font-size:15px;font-weight:700;color:#ff5c8a;margin-left:8px}
  .mom-hero .sub{font-size:12.5px;color:#6c6c70;margin-top:3px}
  .mom-bar{height:8px;border-radius:8px;background:rgba(255,111,150,.16);margin-top:10px;overflow:hidden}
  .mom-bar i{display:block;height:100%;border-radius:8px;background:linear-gradient(90deg,#ffb0c4,#ff6f96)}
  .mom-hero .sample{display:inline-block;margin-top:8px;font-size:11px;color:#8e8e93;background:rgba(0,0,0,.05);border-radius:6px;padding:2px 7px}
  .mom-nav{display:flex;align-items:center;justify-content:space-between;margin:2px 0 8px}
  .mom-nav b{font-size:14px}
  .mom-nav button{border:1px solid var(--line);background:#fff;border-radius:999px;font:inherit;font-size:12.5px;padding:4px 11px;cursor:pointer;color:var(--ink)}
  .mom-nav button:disabled{opacity:.35;cursor:default}
  .mom-baby{display:flex;gap:12px;align-items:center;border:1px solid var(--line);border-radius:14px;padding:12px;background:#fff;margin-bottom:10px}
  .mom-baby .fr{font-size:40px;line-height:1;flex:none;width:52px;text-align:center}
  .mom-baby b{display:block;font-size:15px}
  .mom-baby span{display:block;font-size:12.5px;color:var(--muted);margin-top:2px}
  .mom-baby p{margin:5px 0 0;font-size:13px;line-height:1.5}
  .mom-sec{margin:14px 0 6px;font-size:12px;font-weight:700;color:var(--muted)}
  .mom-txt{font-size:13px;line-height:1.6;margin:0}
  .mom-todo{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}
  .mom-todo li{display:flex;gap:9px;align-items:flex-start;font-size:13px;line-height:1.5;background:#fff7f9;border-radius:10px;padding:8px 10px;cursor:default}
  .mom-todo li.go{cursor:pointer}.mom-todo li.go:hover{background:#ffeef3}
  .mom-todo li em{font-style:normal;flex:none}
  .mom-sos{margin-top:12px;font-size:12px;line-height:1.55;color:#b4233c;background:#fff1f1;border-radius:10px;padding:8px 10px}
  .mom-foot{margin-top:12px;font-size:11px;line-height:1.55;color:var(--muted)}
  .mom-sup{border:1px solid var(--line);border-radius:14px;padding:11px 12px;background:#fff;margin-bottom:8px}
  .mom-sup.now{border-color:#ffb0c4;box-shadow:0 0 0 2px #fff0f4}
  .mom-sup .h{display:flex;gap:9px;align-items:flex-start}
  .mom-sup .h em{font-style:normal;font-size:20px;line-height:1.2;flex:none}
  .mom-sup .h b{font-size:14px;display:block}
  .mom-sup .amt{display:inline-block;margin-top:4px;font-size:11.5px;font-weight:700;color:#d6336c;background:#fff0f4;border-radius:6px;padding:2px 7px}
  .mom-sup .nowt{display:inline-block;margin-left:6px;font-size:10.5px;font-weight:800;color:#fff;background:#ff6f96;border-radius:6px;padding:2px 6px;vertical-align:1px}
  .mom-sup p{margin:7px 0 0;font-size:12.5px;line-height:1.6}
  .mom-sup .how{color:var(--muted)}
  .mom-sup a{display:inline-block;margin-top:6px;font-size:12px;color:#2f6fe4;text-decoration:none}
  .mom-set label{display:block;font-size:13px;font-weight:700;margin:14px 0 6px}
  .mom-set label:first-child{margin-top:2px}
  .mom-set input[type=date]{font:inherit;font-size:14px;border:1px solid var(--line);border-radius:10px;padding:7px 10px;background:#fff;color:var(--ink)}
  .mom-set .chips{display:flex;gap:6px;flex-wrap:wrap}
  .mom-set .chips button{border:1px solid var(--line);background:#fff;border-radius:999px;padding:6px 13px;font:inherit;font-size:13px;cursor:pointer;color:var(--ink)}
  .mom-set .chips button.on{background:#ff6f96;border-color:#ff6f96;color:#fff}
  .mom-set p{font-size:12px;line-height:1.55;color:var(--muted);margin:6px 0 0}
  .mom-set .row{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}
  .mom-set .row button{border:1px solid var(--line);background:#fff;border-radius:10px;padding:7px 12px;font:inherit;font-size:12.5px;cursor:pointer;color:var(--ink)}
  .mom-set .ok{font-size:12px;color:#ff5c8a;margin-top:8px;min-height:1em}`;
  document.head.append(css);

  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  // ───────── 단추 · 말풍선 ─────────
  const btn = el("button", "mom-btn", FACE + '<span class="wk"></span>');
  btn.type = "button"; btn.title = "아기 수첩"; btn.setAttribute("aria-label", "아기 수첩");
  btn.hidden = true;
  const bub = el("div", "mom-bub");
  bub.hidden = true; bub.setAttribute("role", "status");
  ctx.stage.append(btn, bub);
  let bubTimer = 0, bubGo = null;
  function say(m, sec = 16) {
    bub.innerHTML = `<small>${esc(m.who || "아기가 알려 줘요")}</small><p>${esc(m.text)}</p><div class="row"><span class="more">자세히 ›</span><button type="button" class="x">닫기</button></div>`;
    bub.hidden = false; bubGo = m.go || null;
    bub.querySelector(".x").onclick = (e) => { e.stopPropagation(); hideBub(); };
    btn.classList.remove("talk"); void btn.offsetWidth; btn.classList.add("talk");
    clearTimeout(bubTimer); bubTimer = setTimeout(hideBub, sec * 1000);
  }
  function hideBub() { bub.hidden = true; clearTimeout(bubTimer); }
  bub.onclick = () => { const go = bubGo; hideBub(); open(go?.tab || "week", go?.id); };
  btn.onclick = () => { hideBub(); open("week"); };

  // 알려 줄 말 고르기: 이번 주가 처음이면 「이번 주」, 아니면 그 주에 맞는 것 중 가장 오래 안 보여 준 것
  function pool(n) {
    const out = [], wk = n.wk, b = babyOf(wk);
    out.push({ id: "baby" + wk, who: `${wk}주 아기`, text: `엄마, 저 이번 주엔 ${b[1]}만 해요 ${b[0]} ${b[4]}!`, go: { tab: "week" } });
    out.push({ id: "mom" + wk, who: "엄마 몸", text: momOf(wk), go: { tab: "week" } });
    for (const [a, z, t] of CHECK) if (wk >= a - 1 && wk <= z) out.push({ id: "chk" + a, who: "검사", text: `${a}~${z}주는 ${t} 시기예요. 병원 일정 확인해요`, go: { tab: "week" } });
    for (const s of SUP) if (s.tip && inW(s.w, wk)) out.push({ id: "sup:" + s.id + (typeof s.tip === "function" ? ":" + tipOf(s, wk).length : ""), who: "받을 수 있어요", text: tipOf(s, wk), go: { tab: "sup", id: s.id } });
    for (const [id, a, z, t] of TIPS) if (wk >= a && wk <= z) out.push({ id: "tip:" + id, who: "오늘의 도움말", text: t, go: { tab: "week" } });
    return out;
  }
  function next() {
    const n = now();
    if (!n) return { id: "setup", who: "아기 수첩", text: "엄마, 예정일을 알려 주면 이번 주 저의 크기랑 받을 수 있는 지원을 알려 줄게요!", go: { tab: "set" } };
    if (n.wk > 42) return { id: "born", who: "아기 수첩", text: "저 태어났나요? 🎉 첫만남이용권·부모급여·아동수당은 60일 안에 신청해요", go: { tab: "sup", id: "onestop2" } };
    if ((S.seenWeek || 0) !== n.wk) { S.seenWeek = n.wk; save(); return pool(n)[0]; }
    const shown = S.shown || {}, list = pool(n);
    list.sort((a, b) => (shown[a.id] || 0) - (shown[b.id] || 0));
    return list[0];
  }
  function talk() {
    const m = next();
    S.shown = { ...(S.shown || {}), [m.id]: Date.now() };
    save(); say(m);
  }

  // ───────── 자세히 보는 창 ─────────
  const wrap = el("div", "sx-wrap");
  wrap.hidden = true;
  const card = el("div", "sx-card mom-card");
  card.setAttribute("role", "dialog"); card.setAttribute("aria-modal", "true"); card.setAttribute("aria-label", "아기 수첩");
  wrap.append(card); document.body.append(wrap);
  let tab = "week", viewWk = null, pushed = false;
  function open(t = "week", focus) {
    tab = t; viewWk = null; render(focus);
    wrap.hidden = false;
    if (!pushed) { history.pushState({ momCard: 1 }, ""); pushed = true; } // 휴대폰 뒤로가기로 닫기
  }
  function close(fromBack = false) {
    if (wrap.hidden) return;
    wrap.hidden = true;
    if (pushed) { pushed = false; if (!fromBack) history.back(); }
  }
  wrap.addEventListener("click", (e) => { if (e.target === wrap) close(); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !wrap.hidden) close(); });
  addEventListener("popstate", (e) => { if (pushed && !e.state?.momCard && !wrap.hidden) { pushed = false; close(true); } });

  function render(focus) {
    const n = now(), head = el("div", "sx-head"), em = el("div", "em", FACE), t = el("div", "t");
    t.append(el("b", null, "아기 수첩"), el("span", null, n ? (n.wk > 42 ? "출산을 축하해요" : `${n.wk}주 ${n.d}일 · 출산까지 ${n.left > 0 ? n.left + "일" : n.left === 0 ? "오늘!" : "지났어요"}`) : "홍수연 님 화면에만 보여요"));
    const x = el("button", "sx-x", "×");
    x.type = "button"; x.title = "닫기"; x.setAttribute("aria-label", "닫기"); x.onclick = () => close();
    head.append(em, t, x);
    const tabs = el("div", "sx-tabs");
    for (const [k, label] of [["week", "이번 주"], ["sup", "국가 지원"], ["set", "설정"]]) {
      const b = el("button", k === tab ? "on" : "", label);
      b.type = "button"; b.onclick = () => { tab = k; render(); };
      tabs.append(b);
    }
    const body = el("div", "sx-body");
    if (tab === "week") weekTab(body, n);
    else if (tab === "sup") supTab(body, n);
    else setTab(body);
    card.replaceChildren(head, tabs, body);
    if (focus) { const f = body.querySelector(`[data-id="${focus}"]`); if (f) requestAnimationFrame(() => f.scrollIntoView({ block: "center" })); }
  }
  function weekTab(body, n) {
    if (!n) {
      const h = el("div", "mom-hero", `<div class="big" style="font-size:19px">예정일을 알려 주세요</div><div class="sub">이번 주 아기 크기·엄마 몸·검사·받을 수 있는 지원을 주마다 알려 드려요. 예정일은 이 기기에만 저장돼요.</div>`);
      const go = el("button", "btn", "예정일 넣기");
      go.type = "button"; go.style.marginTop = "10px"; go.onclick = () => { tab = "set"; render(); };
      h.append(go); body.append(h); return;
    }
    const pct = Math.max(0, Math.min(100, (n.days / 280) * 100));
    body.append(el("div", "mom-hero", `<div class="big">${n.wk > 42 ? "출산 축하해요 🎉" : `${n.wk}주 ${n.d}일<span>${n.wk < 14 ? "초기" : n.wk < 28 ? "중기" : "후기"}</span>`}</div>
      <div class="sub">출산 예정일 ${nice(n.due)} · ${n.left > 0 ? `${n.left}일 남았어요` : n.left === 0 ? "바로 오늘이에요" : `${-n.left}일 지났어요`}</div>
      <div class="mom-bar"><i style="width:${pct.toFixed(1)}%"></i></div>${sample() ? '<span class="sample">테스트 판 보기용 날짜예요 — 설정에서 바꿀 수 있어요</span>' : ""}`));
    const wk = viewWk ?? Math.max(4, Math.min(40, n.wk)), b = babyOf(wk), cur = wk === Math.max(4, Math.min(40, n.wk));
    const nav = el("div", "mom-nav"), prev = el("button", null, "‹ " + (wk - 1) + "주"), nxt = el("button", null, wk + 1 + "주 ›");
    prev.type = nxt.type = "button";
    prev.disabled = wk <= 4; nxt.disabled = wk >= 40;
    prev.onclick = () => { viewWk = wk - 1; render(); };
    nxt.onclick = () => { viewWk = wk + 1; render(); };
    nav.append(prev, el("b", null, cur ? `이번 주 (${wk}주)` : `${wk}주`), nxt);
    body.append(nav);
    body.append(el("div", "mom-baby", `<div class="fr">${b[0]}</div><div><b>${esc(b[1])}만 해요</b><span>키 ${b[2]}${b[3] ? " · 몸무게 " + b[3] : ""}</span><p>${esc(b[4])}</p></div>`));
    body.append(el("div", "mom-sec", "엄마 몸"), el("p", "mom-txt", esc(momOf(wk))));
    const todo = el("ul", "mom-todo");
    for (const [a, z, t] of CHECK) if (wk >= a - 1 && wk <= z) todo.append(el("li", null, `<em>🩺</em><span>${esc(t)} — ${a}~${z}주</span>`));
    for (const s of SUP) if (inW(s.w, wk)) {
      const li = el("li", "go", `<em>${s.em}</em><span><b>${esc(s.t)}</b>${s.amt ? " · " + esc(s.amt) : ""}</span>`);
      li.onclick = () => { tab = "sup"; render(s.id); };
      todo.append(li);
    }
    if (todo.children.length) body.append(el("div", "mom-sec", "이번 주 챙길 것"), todo);
    body.append(el("div", "mom-sos", "🚑 이럴 땐 바로 병원에 연락해요 — 피가 비칠 때 · 배가 심하게 아플 때 · 양수가 샐 때 · 태동이 갑자기 줄 때"));
    body.append(el("div", "mom-foot", "아기 크기는 평균이에요 — 아기마다 달라요. 19주까지는 머리~엉덩이, 20주부터는 머리~발 길이. 검사 시기는 병원마다 조금씩 달라요."));
  }
  function supTab(body, n) {
    const wk = n ? n.wk : -1;
    GROUP.forEach((g, gi) => {
      body.append(el("div", "mom-sec", g));
      for (const s of SUP.filter((x) => x.g === gi)) {
        const on = n && inW(s.w, wk);
        const c = el("div", "mom-sup" + (on ? " now" : ""));
        c.dataset.id = s.id;
        c.innerHTML = `<div class="h"><em>${s.em}</em><div><b>${esc(s.t)}${on ? '<span class="nowt">지금</span>' : ""}</b>${s.amt ? `<span class="amt">${esc(s.amt)}</span>` : ""}</div></div>
          <p>${esc(s.d)}</p>${s.how ? `<p class="how">신청 · ${esc(s.how)}</p>` : ""}${s.url ? `<a href="${s.url}" target="_blank" rel="noopener">${esc(s.site)} 열기 ↗</a>` : ""}`;
        body.append(c);
      }
    });
    body.append(el("div", "mom-foot", "2026년 10월 기준 공개 자료로 정리했어요. 금액·조건은 바뀔 수 있으니 신청 전에 공식 사이트에서 꼭 확인해요. 사는 곳(시·구) 지원은 보건소·지자체에 따로 있어요. 2027년부터 출산 지원금 이름과 방식을 바꾸는 정부안이 국회에서 논의 중이에요 (확정 아님)."));
  }
  function setTab(body) {
    const f = el("div", "mom-set");
    f.innerHTML = `<label>출산 예정일</label><input type="date" data-due><p>병원에서 알려 준 예정일을 넣어 주세요. 한 번만 넣으면 돼요.</p>
      <label>아기가 알려 주는 간격</label><div class="chips" data-every></div><p>페이지를 보고 있을 때만 말풍선이 떠요.</p>
      <div class="row"><button type="button" data-try>지금 하나 들어 보기</button><button type="button" data-clear>기록 지우기</button></div>
      <div class="ok"></div>
      <p>예정일과 설정은 이 기기에만 저장돼요. 서버로 보내지 않아서 다른 사람이나 관리 화면에서는 볼 수 없어요. 다른 기기에서는 한 번 더 넣어 주세요.</p>`;
    const due = f.querySelector("[data-due]"), chips = f.querySelector("[data-every]");
    due.value = S.due || "";
    due.onchange = () => { const d = parse(due.value); if (!d) return; S.due = ymd(d); save(); render(); card.querySelector(".mom-set .ok").textContent = "예정일을 저장했어요"; };
    for (const [v, label] of [[30, "30분마다"], [60, "1시간마다"], [120, "2시간마다"], [0, "끄기"]]) {
      const b = el("button", S.every === v ? "on" : "", label);
      b.type = "button";
      b.onclick = () => { S.every = v; save(); lastTalk = Date.now(); render(); };
      chips.append(b);
    }
    f.querySelector("[data-try]").onclick = () => { close(); setTimeout(talk, 250); };
    f.querySelector("[data-clear]").onclick = () => { S = { every: 60 }; save(); render(); };
    body.append(f);
    if (sample()) body.append(el("div", "mom-foot", "테스트 판: 예정일을 넣지 않으면 24주 3일 보기용 날짜로 보여요."));
  }

  // ───────── 보이기 · 정해진 간격으로 말하기 ─────────
  let shownFor = null, lastTalk = 0;
  function tick() {
    const me = ctx.me(), on = me?.char === ctx.who && (!!me.pin || !!ctx.test);
    if (on !== !btn.hidden) { btn.hidden = !on; if (!on) { hideBub(); close(); } }
    if (!on) { shownFor = null; return; }
    const n = now();
    btn.querySelector(".wk").textContent = n && n.wk <= 42 ? `${n.wk}주` : "";
    if (shownFor !== me.char) { shownFor = me.char; lastTalk = Date.now(); setTimeout(() => { if (!btn.hidden) talk(); }, 5000); return; } // 들어오면 5초 뒤 한마디
    if (S.every > 0 && !document.hidden && wrap.hidden && bub.hidden && Date.now() - lastTalk > S.every * 60e3) { lastTalk = Date.now(); talk(); }
  }
  setInterval(tick, 1500);
  tick();
  return { open, close, talk, state: () => ({ ...S, now: now(), visible: !btn.hidden }) };
};
