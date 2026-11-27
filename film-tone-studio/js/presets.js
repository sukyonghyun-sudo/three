/* 필름 톤 스튜디오 — 모듈(효과) 정의와 기본 프리셋.
   길이 단위(px)는 모두 '가로 1920 화면 기준'이다. 렌더러가 실제 해상도에 맞춰 늘리고 줄인다.
   def = 모듈을 처음 켰을 때 값, neutral = 모듈이 꺼졌을 때(효과 없음) 값. */
(function () {
'use strict';

const r = (k, label, min, max, step, def, neutral, extra) =>
  Object.assign({ k, label, min, max, step, def, neutral: neutral === undefined ? def : neutral }, extra || {});
const wheel = (k, label, def, extra) => Object.assign({ k, label, type: 'wheel', def, neutral: def }, extra);

const MODULES = [
  // 로그로 찍은 영상을 일반(Rec.709) 화면으로 — 원본에 관한 설정이라 프리셋을 바꿔도 유지된다(sticky)
  { id: 'input', name: '카메라 로그 입력', sticky: true, params: [
    r('logType', '찍은 방식', 0, 0, 1, 'slog3', 'none', { type: 'select', options: [
      ['slog3', 'Sony S-Log3 (S-Gamut3.Cine)'], ['logc3', 'ARRI LogC3 (Alexa)'], ['vlog', 'Panasonic V-Log'], ['flog', 'Fujifilm F-Log']] }),
    r('logRange', '신호 범위', 0, 0, 1, 'legal', 'legal', { type: 'select', options: [['legal', '보통 (영상 파일)'], ['full', '전체 범위']] }),
  ] },
  // 효과 전체를 원본과 섞는 양 — 필름을 바꿔도 그대로(sticky)
  { id: 'master', name: '효과 세기', sticky: true, params: [
    r('mixAll', '효과 세기', 0, 1, 0.01, 1, 1),
  ] },
  { id: 'tone', name: '노출·톤 곡선', params: [
    r('exposure', '노출 (EV)', -2, 2, 0.01, 0, 0),
    r('contrast', '대비', 0.5, 1.6, 0.01, 1, 1),
    r('scurve', '부드러운 S커브', -0.5, 1, 0.01, 0.15, 0),
    r('rolloff', '하이라이트 롤오프', 0, 1, 0.01, 0.3, 0),
  ] },
  { id: 'wb', name: '색온도·채도', params: [
    r('temp', '색온도 (차게↔따뜻)', -1, 1, 0.01, 0, 0),
    r('tint', '색조 (초록↔자홍)', -1, 1, 0.01, 0, 0),
    r('sat', '채도', 0, 2, 0.01, 1, 1),
    r('vib', '자연 채도', -1, 1, 0.01, 0, 0),
  ] },
  { id: 'wheels', name: '리프트·감마·게인', params: [
    wheel('lift', '그림자 (리프트)', [0, 0, 0], { base: 0, range: 0.08, mMin: -0.1, mMax: 0.15, mStep: 0.001 }),
    wheel('gamma', '중간 (감마)', [1, 1, 1], { base: 1, range: 0.25, mMin: 0.5, mMax: 1.6, mStep: 0.005, invert: true }),
    wheel('gain', '밝은 곳 (게인)', [1, 1, 1], { base: 1, range: 0.15, mMin: 0.6, mMax: 1.5, mStep: 0.005 }),
  ] },
  { id: 'split', name: '스플릿 톤', params: [
    wheel('shadow', '그림자 색', [0, 0, 0], { base: 0, range: 0.08, mMin: -0.08, mMax: 0.08, mStep: 0.001 }),
    wheel('high', '밝은 곳 색', [0, 0, 0], { base: 0, range: 0.08, mMin: -0.08, mMax: 0.08, mStep: 0.001 }),
  ] },
  { id: 'comp', name: '필름 압축', params: [
    r('comp', '명암 압축', 0, 1, 0.01, 0.25, 0),
    r('hiDesat', '밝은 곳 채도 빼기', 0, 1, 0.01, 0.3, 0),
    r('density', '색 밀도', 0, 1, 0.01, 0.25, 0),
  ] },
  { id: 'bw', name: '흑백', params: [
    r('bwAmt', '흑백 정도', 0, 1, 0.01, 1, 0),
    r('bwFilter', '렌즈 필터', 0, 0, 1, 'neutral', 'neutral', { type: 'select', options: [
      ['neutral', '없음 (보통 흑백)'], ['red', '빨강 — 하늘 진하게, 피부 밝게'], ['orange', '주황'], ['yellow', '노랑'], ['green', '초록 — 나뭇잎 밝게'], ['blue', '파랑']] }),
    r('bwTone', '인화 색', 0, 0, 1, 'none', 'none', { type: 'select', options: [
      ['none', '없음'], ['sepia', '세피아 (갈색)'], ['selenium', '셀레늄 (보랏빛 검정)'], ['cyan', '청사진 (파랑)'], ['warm', '따뜻한 종이']] }),
    r('bwToneAmt', '인화 색 세기', 0, 1, 0.01, 0.6, 0),
  ] },
  // 내장 LUT = 이 PC 의 다빈치 리졸브에서 가져온 실측·공식 LUT (luts/resolve_luts.js). 'file' = 직접 불러온 .cube
  { id: 'lut', name: 'LUT (실측 필름·카메라 / .cube)', sticky: true, params: [
    r('lutSrc', 'LUT', 0, 0, 1, 'file', 'file', { type: 'select', options: [['file', '불러온 .cube 파일']].concat(
      Object.entries(window.FTS_LUTS || {}).map(([k, v]) => [k, v.name])) }),
    r('lutIn', '파일 LUT 입력', 0, 0, 1, 'display', 'display', { type: 'select', options: [
      ['display', '일반 영상 (Rec.709)'], ['cineon', '시네온 로그 (필름 프린트 LUT)'], ['logc3', 'ARRI LogC3'], ['slog3', 'Sony S-Log3'], ['vlog', 'Panasonic V-Log']] }),
    r('lutMix', '섞는 양', 0, 1, 0.01, 1, 0),
    r('lutPos', '적용 위치', 0, 0, 1, 'after', 'after', { type: 'select', options: [['after', '색보정 뒤'], ['before', '색보정 앞']] }),
  ] },
  { id: 'bloom', name: '블룸', params: [
    r('bloomAmt', '세기', 0, 1.5, 0.01, 0.4, 0),
    r('bloomThr', '시작 밝기', 0, 0.98, 0.01, 0.75),
    r('bloomRad', '퍼짐 (px)', 2, 60, 0.5, 18),
    r('bloomWarm', '따뜻한 색', 0, 1, 0.01, 0, 0),
  ] },
  { id: 'halation', name: '할레이션', params: [
    r('halAmt', '세기', 0, 0.6, 0.005, 0.12, 0),
    r('halThr', '시작 밝기', 0, 0.98, 0.01, 0.8),
    r('halRad', '퍼짐 (px)', 1, 30, 0.5, 7),
  ] },
  { id: 'diffusion', name: '디퓨전', params: [
    r('difAmt', '세기', 0, 1, 0.01, 0.2, 0),
    r('difRad', '퍼짐 (px)', 1, 40, 0.5, 10),
  ] },
  { id: 'toplight', name: '위에서 내리는 빛', params: [
    r('topAmt', '세기', 0, 0.3, 0.005, 0.07, 0),
    r('topLen', '내려오는 길이', 0.15, 1, 0.01, 1),
    r('topWarm', '따뜻한 색', 0, 1, 0.01, 1),
  ] },
  { id: 'vignette', name: '비네트', params: [
    r('vigAmt', '세기 (음수면 밝게)', -0.6, 1, 0.01, 0.25, 0),
    r('vigSoft', '부드러움', 0.1, 1, 0.01, 0.6),
  ] },
  { id: 'chroma', name: '색수차', params: [
    r('caPx', '어긋남 (px)', 0, 8, 0.05, 1.5, 0),
  ] },
  { id: 'vhs', name: '비디오테이프 질감', params: [
    r('vhsBleed', '색 번짐 (px)', 0, 10, 0.1, 3, 0),
    r('vhsSoft', '흐림 (px)', 0, 4, 0.05, 1, 0),
    r('vhsScan', '주사선', 0, 1, 0.01, 0.2, 0),
    r('vhsTrack', '트래킹 노이즈', 0, 1, 0.01, 0.3, 0),
  ] },
  { id: 'grain', name: '그레인', params: [
    r('grainAmt', '양', 0, 0.08, 0.001, 0.012, 0),
    r('grainSize', '크기 (px)', 0.3, 3, 0.05, 0.9),
    r('grainRough', '거칠기', 0, 1, 0.01, 0, 0),
    r('grainColor', '색 입자', 0, 1, 0.01, 0, 0),
  ] },
  { id: 'weave', name: '게이트 위브 (흔들림)', params: [
    r('weaveAmt', '세기 (px)', 0, 4, 0.05, 0.8, 0),
    r('weaveSpeed', '속도', 0.2, 3, 0.05, 1),
  ] },
  { id: 'damage', name: '필름 손상', params: [
    r('dust', '먼지', 0, 1, 0.01, 0.25, 0),
    r('scratch', '스크래치', 0, 1, 0.01, 0.2, 0),
    r('flicker', '깜빡임', 0, 1, 0.01, 0.2, 0),
  ] },
  // 필름 폭(몇 mm): 입자 굵기·흐림·흔들림·깜빡임을 함께 바꾼다. 필름 종류 프리셋과 따로 고르게 프리셋을 바꿔도 유지(sticky)
  // marks = 먼지·스크래치·깜빡임 전체 스위치 — 필름 크기를 꺼도 따른다(렌더러가 st.p 에서 바로 읽음)
  { id: 'gauge', name: '필름 규격 (mm)', sticky: true, params: [
    r('gauge', '규격', 0, 0, 1, '35mm', 'none', { type: 'select', options: [
      ['8mm', '8mm (홈무비)'], ['s8', 'Super 8'], ['16mm', '16mm'], ['s16', 'Super 16'], ['35mm', '35mm (극장 영화)'], ['65mm', '65mm / 70mm'], ['imax', 'IMAX 70mm']] }),
    r('gaugeAmt', '세기', 0, 1.5, 0.01, 1, 0),
    r('marks', '먼지·스크래치', 0, 0, 1, 'on', 'on', { type: 'select', options: [['on', '켜기'], ['off', '끄기']] }),
    r('shake', '화면 떨림', 0, 0, 1, 'on', 'on', { type: 'select', options: [['on', '켜기'], ['off', '끄기']] }),
  ] },
  { id: 'letterbox', name: '레터박스', sticky: true, params: [
    r('lbRatio', '화면비', 0, 0, 1, 2.39, 0, { type: 'select', options: [[2.76, '2.76 : 1'], [2.39, '2.39 : 1 (시네마스코프)'], [2.0, '2 : 1'], [1.85, '1.85 : 1']] }),
  ] },
];


/* 보이는 이름·설명 — 전문 용어를 쉬운 말로. (내부 키는 그대로라 저장한 설정·프리셋에 영향 없음) */
const FRIENDLY = {
  input:    ['원본 영상이 회색빛(로그)일 때', '카메라가 로그로 찍어 화면이 뿌옇고 회색이면 여기서 맞는 방식을 고르세요. 평범한 영상이면 꺼 두세요.'],
  master:   ['효과 세기', '필름 효과 전체를 원본과 섞는 양이에요. 0이면 원본, 100%면 필름 그대로.'],
  tone:     ['밝기·대비', '화면 전체의 밝기와 명암 차이를 맞춰요.'],
  wb:       ['색 온도·색 진하기', '따뜻한/차가운 색감과 색의 진하기를 맞춰요.'],
  wheels:   ['어두운·중간·밝은 곳 색 입히기', '그림자·중간 밝기·밝은 곳에 각각 다른 색을 살짝 입혀요. 바퀴를 끌어 색을 고르세요.'],
  split:    ['그림자·밝은 곳 색 나누기', '어두운 곳은 푸르게, 밝은 곳은 주황빛으로 — 영화 같은 색 대비를 만들어요.'],
  comp:     ['필름처럼 부드럽게 눌러 주기', '아주 밝거나 어두운 곳을 부드럽게 눌러 필름 특유의 여유 있는 톤을 만들어요.'],
  bw:       ['흑백', '흑백으로 바꿔요. 렌즈 필터와 인화 색(갈색·푸른빛 등)도 고를 수 있어요.'],
  lut:      ['색 프리셋 파일 (LUT)', '실제 필름·카메라 색을 담은 데이터예요. 내장 목록에서 고르거나 .cube 파일을 불러오세요.'],
  bloom:    ['빛 번짐 (은은하게 퍼지는 빛)', '밝은 곳 주변으로 빛이 은은하게 퍼져요.'],
  halation: ['불빛 둘레 붉은 번짐', '아주 밝은 불빛 둘레가 주황·붉은 빛으로 번져요. 필름 특유의 느낌이에요.'],
  diffusion:['뽀얀 안개 느낌', '화면 전체가 부드럽고 뽀얗게 보이게 해요.'],
  toplight: ['위에서 쏟아지는 빛', '화면 위쪽에서 따뜻한 빛이 내려오는 듯한 효과예요.'],
  vignette: ['가장자리 어둡게', '화면 네 귀퉁이를 어둡게 해서 가운데로 시선을 모아요. 음수로 하면 밝아져요.'],
  chroma:   ['색 어긋남 (가장자리 무지개 테)', '렌즈가 만드는 가장자리의 붉은·푸른 테두리를 흉내 내요.'],
  vhs:      ['비디오테이프 느낌', '옛 비디오테이프처럼 색이 번지고 줄무늬·노이즈가 생겨요.'],
  grain:    ['필름 입자 (자글자글한 알갱이)', '필름 특유의 알갱이 질감이에요. 매 프레임 새로 움직여요.'],
  weave:    ['화면 떨림 (게이트 위브)', '필름이 영사기를 지날 때 생기는 미세한 흔들림이에요. 위의 「화면 떨림」 스위치로 한 번에 끌 수도 있어요.'],
  damage:   ['먼지·긁힘·깜빡임', '필름에 앉은 먼지 점, 세로 긁힘 줄, 밝기가 깜빡이는 효과예요.'],
  gauge:    ['필름 크기 (8mm~IMAX)', '필름 폭이에요. 작을수록 입자가 굵고 화면이 무르고 더 흔들려요.'],
  letterbox:['위아래 검은 띠 (영화 화면비)', '위아래에 검은 띠를 넣어 영화관 화면처럼 보이게 해요.'],
};
const LABELS = {
  exposure: '밝기 (EV)', scurve: '명암 부드럽게', rolloff: '밝은 곳 눌러 주기', tint: '색조 (초록↔자홍)', vib: '탁한 색만 진하게',
  hiDesat: '밝은 곳 색 빼기', density: '색 깊이', comp: '눌러 주는 정도', lutSrc: '쓸 LUT', lutIn: '불러온 파일의 입력 방식', lutMix: '섞는 양', lutPos: '적용 순서',
  bloomAmt: '세기', bloomThr: '어느 밝기부터', bloomRad: '퍼지는 크기', bloomWarm: '따뜻한 빛깔', halAmt: '세기', halThr: '어느 밝기부터', halRad: '번지는 크기',
  difAmt: '세기', difRad: '퍼지는 크기', topAmt: '세기', topLen: '빛이 내려오는 길이', topWarm: '따뜻한 빛깔', vigAmt: '어둡게 하는 정도 (음수면 밝게)', vigSoft: '경계 부드러움',
  caPx: '어긋나는 정도', vhsBleed: '색 번짐', vhsSoft: '흐릿하게', vhsScan: '가로 줄무늬', vhsTrack: '노이즈 띠', grainAmt: '알갱이 양', grainSize: '알갱이 크기',
  grainRough: '거칠기', grainColor: '알갱이에 색 넣기', weaveAmt: '떨리는 정도', weaveSpeed: '떨리는 속도', dust: '먼지', scratch: '긁힘 줄', flicker: '밝기 깜빡임',
  gauge: '필름 크기', gaugeAmt: '효과 정도', marks: '먼지·긁힘', shake: '화면 떨림', lbRatio: '화면 비율', bwAmt: '흑백 정도', bwFilter: '렌즈 필터', bwTone: '인화 색', bwToneAmt: '인화 색 정도',
  logType: '찍은 방식', logRange: '신호 범위', temp: '색 온도 (차게↔따뜻)',
};
for (const m of MODULES) {
  const f = FRIENDLY[m.id]; if (f) { m.name = f[0]; m.desc = f[1]; }
  for (const d of m.params) if (LABELS[d.k]) d.label = LABELS[d.k];
}

const PDEF = {}, PMOD = {};
for (const m of MODULES) for (const d of m.params) { PDEF[d.k] = d; PMOD[d.k] = m.id; }
const clone = v => JSON.parse(JSON.stringify(v));

/* 프리셋 → 상태. 켜진 모듈은 '효과 없음'에서 시작해 프리셋 값만 얹고, 꺼진 모듈은 처음 켰을 때 값으로 둔다. */
function presetState(pr) {
  const on = {}, p = {};
  for (const m of MODULES) {
    on[m.id] = pr.on.includes(m.id);
    for (const d of m.params) p[d.k] = clone(on[m.id] ? d.neutral : d.def);
  }
  for (const k in pr.p || {}) if (k in PDEF) p[k] = clone(pr.p[k]);
  return { on, p };
}

/* 렌더러가 쓰는 값: 꺼진 모듈은 neutral */
function effective(st) {
  const e = {};
  for (const m of MODULES) for (const d of m.params) {
    const v = st.p[d.k] === undefined ? d.def : st.p[d.k];
    e[d.k] = st.on[m.id] ? v : d.neutral;
  }
  return e;
}

const A = '애니메이션 극장판', F = '영화', C = '광고', R = '레트로';
const PRESETS = [
  // ── 애니메이션 극장판 (앞의 넷은 film_filters.py / finish_filters.py 값 그대로) ──
  { cat: A, name: '몽글몽글 디퓨전 ★', note: '원래 쓰던 극장판 필터 (5_몽글몽글디퓨전)',
    on: ['bloom', 'diffusion', 'wheels', 'wb', 'tone', 'vignette', 'grain'],
    p: { bloomThr: 0.6, bloomAmt: 0.6, bloomRad: 24, difAmt: 0.35, difRad: 10, lift: [0.05, 0.04, 0.06], sat: 0.95,
      contrast: 0.9, vigAmt: 0.15, vigSoft: 0.6, grainAmt: 0.01, grainSize: 0.8 } },
  { cat: A, name: '필름 살짝 (낮)', note: '낮 장면용 가벼운 필름 (2_필름살짝)',
    on: ['bloom', 'halation', 'wheels', 'wb', 'tone', 'vignette', 'grain'],
    p: { bloomThr: 0.8, bloomAmt: 0.3, bloomRad: 14, halThr: 0.85, halAmt: 0.08, halRad: 6, lift: [0.02, 0.015, 0.025],
      gain: [1.01, 1.0, 0.98], sat: 1.02, contrast: 1.02, vigAmt: 0.2, vigSoft: 0.6, grainAmt: 0.009, grainSize: 1.0 } },
  { cat: A, name: '디퓨전 약하게 (노을)', note: '몽글몽글을 가볍게 (3_디퓨전약하게)',
    on: ['bloom', 'diffusion', 'wheels', 'wb', 'tone', 'vignette', 'grain'],
    p: { bloomThr: 0.7, bloomAmt: 0.35, bloomRad: 20, difAmt: 0.15, difRad: 8, lift: [0.025, 0.02, 0.03], sat: 0.98,
      contrast: 0.97, vigAmt: 0.15, vigSoft: 0.6, grainAmt: 0.006, grainSize: 0.8 } },
  { cat: A, name: '여름 햇빛', note: '맑은 낮, 위에서 쏟아지는 빛 (1_맑은햇빛)',
    on: ['bloom', 'tone', 'toplight', 'vignette', 'grain'],
    p: { bloomThr: 0.82, bloomAmt: 0.35, bloomRad: 16, scurve: 0.08, topAmt: 0.07, topLen: 1, topWarm: 1,
      vigAmt: 0.18, vigSoft: 0.6, grainAmt: 0.006, grainSize: 0.8 } },
  { cat: A, name: '노을 드라마', note: '해 질 녘 역광, 주황 빛과 보랏빛 그림자',
    on: ['tone', 'wb', 'wheels', 'split', 'bloom', 'halation', 'diffusion', 'toplight', 'vignette', 'grain'],
    p: { contrast: 1.03, rolloff: 0.3, temp: 0.3, sat: 1.05, lift: [0.03, 0.02, 0.045], shadow: [0.0, -0.01, 0.04],
      high: [0.05, 0.02, -0.04], bloomThr: 0.65, bloomAmt: 0.55, bloomRad: 26, bloomWarm: 0.5, halThr: 0.78, halAmt: 0.14,
      halRad: 8, difAmt: 0.12, difRad: 8, topAmt: 0.1, topLen: 0.8, topWarm: 1, vigAmt: 0.3, vigSoft: 0.6,
      grainAmt: 0.008, grainSize: 0.9 } },
  { cat: A, name: '부드러운 빛', note: '빛 막이 고르게 덮이는 몽환적인 화면',
    on: ['tone', 'wb', 'wheels', 'bloom', 'diffusion', 'vignette', 'grain'],
    p: { contrast: 0.94, rolloff: 0.3, sat: 0.97, lift: [0.035, 0.03, 0.04], bloomThr: 0.62, bloomAmt: 0.5, bloomRad: 30,
      difAmt: 0.28, difRad: 14, vigAmt: 0.12, vigSoft: 0.6, grainAmt: 0.006, grainSize: 0.8 } },
  { cat: A, name: '극장판 기본', note: '블룸 + 할레이션 기본형 (1_극장판기본)',
    on: ['bloom', 'halation', 'wheels', 'wb', 'tone', 'vignette', 'grain'],
    p: { bloomThr: 0.72, bloomAmt: 0.55, bloomRad: 18, halThr: 0.8, halAmt: 0.1, halRad: 6, lift: [0.015, 0.012, 0.02],
      gain: [1.02, 1.0, 0.98], sat: 1.06, contrast: 1.04, vigAmt: 0.22, vigSoft: 0.6, grainAmt: 0.012, grainSize: 0.9 } },

  // ── 영화 ──
  { cat: F, name: '따뜻한 35mm 네거', note: '코닥 네거티브 느낌의 따뜻한 필름 (2_따뜻한35mm필름)',
    on: ['diffusion', 'halation', 'wheels', 'wb', 'tone', 'vignette', 'grain'],
    p: { difAmt: 0.15, difRad: 6, halThr: 0.75, halAmt: 0.18, halRad: 8, lift: [0.06, 0.045, 0.03], gain: [1.03, 0.99, 0.9],
      gamma: [0.98, 0.98, 0.98], sat: 0.9, contrast: 0.94, vigAmt: 0.28, vigSoft: 0.6, grainAmt: 0.016, grainSize: 1.1 } },
  { cat: F, name: '청록·주황 블록버스터', note: '그림자는 청록, 피부·빛은 주황 (3_시네마청록주황)',
    on: ['bloom', 'split', 'wb', 'tone', 'vignette', 'grain'],
    p: { bloomThr: 0.78, bloomAmt: 0.35, bloomRad: 14, shadow: [-0.04, 0.02, 0.06], high: [0.05, 0.01, -0.05], sat: 1.08,
      contrast: 1.1, vigAmt: 0.32, vigSoft: 0.6, grainAmt: 0.016, grainSize: 1.0 } },
  { cat: F, name: '차가운 스릴러', note: '푸르고 채도 빠진 긴장감',
    on: ['tone', 'wb', 'split', 'comp', 'bloom', 'vignette', 'grain'],
    p: { exposure: -0.2, contrast: 1.1, scurve: 0.1, rolloff: 0.4, temp: -0.35, tint: -0.12, sat: 0.72, shadow: [-0.03, 0.01, 0.04],
      high: [-0.02, 0.0, 0.01], comp: 0.1, hiDesat: 0.2, bloomThr: 0.88, bloomAmt: 0.12, bloomRad: 12, vigAmt: 0.35,
      vigSoft: 0.6, grainAmt: 0.014, grainSize: 1.0 } },
  { cat: F, name: '흑백 필름', note: '단단한 흑백, 굵은 입자',
    on: ['tone', 'wb', 'bloom', 'vignette', 'grain', 'weave', 'damage'],
    p: { contrast: 1.18, scurve: 0.2, rolloff: 0.35, sat: 0, bloomThr: 0.8, bloomAmt: 0.22, bloomRad: 14, vigAmt: 0.32,
      vigSoft: 0.7, grainAmt: 0.028, grainSize: 1.25, grainRough: 0.25, weaveAmt: 0.6, weaveSpeed: 1, dust: 0.25,
      scratch: 0.15, flicker: 0.25 } },

  // ── 광고 ──
  { cat: C, name: '깨끗하고 밝은 광고', note: '밝고 산뜻, 흰색이 부드럽게',
    on: ['tone', 'wb', 'wheels', 'bloom', 'grain'],
    p: { exposure: 0.18, contrast: 1.05, scurve: 0.1, rolloff: 0.45, temp: 0.04, sat: 1.06, vib: 0.2,
      lift: [0.012, 0.012, 0.015], bloomThr: 0.85, bloomAmt: 0.22, bloomRad: 18, grainAmt: 0.003, grainSize: 0.7 } },
  { cat: C, name: '광택 뷰티 소프트', note: '피부가 매끈하게 빛나는 화장품 광고',
    on: ['tone', 'wb', 'wheels', 'split', 'diffusion', 'bloom', 'vignette', 'grain'],
    p: { exposure: 0.1, contrast: 0.95, rolloff: 0.5, temp: 0.1, tint: 0.06, sat: 0.97, vib: 0.1, lift: [0.03, 0.022, 0.026],
      gain: [1.02, 1.0, 0.99], high: [0.02, 0.005, -0.01], difAmt: 0.3, difRad: 12, bloomThr: 0.65, bloomAmt: 0.45,
      bloomRad: 26, bloomWarm: 0.3, vigAmt: 0.1, vigSoft: 0.7, grainAmt: 0.003, grainSize: 0.7 } },
  { cat: C, name: '강렬한 고대비', note: '선명하고 힘 있는 색',
    on: ['tone', 'wb', 'split', 'comp', 'bloom', 'halation', 'vignette', 'grain'],
    p: { contrast: 1.22, scurve: 0.35, rolloff: 0.3, sat: 1.18, vib: 0.2, shadow: [-0.02, 0, 0.03], high: [0.03, 0.01, -0.02],
      density: 0.35, bloomThr: 0.85, bloomAmt: 0.2, bloomRad: 14, halThr: 0.85, halAmt: 0.05, halRad: 6, vigAmt: 0.25,
      vigSoft: 0.6, grainAmt: 0.006, grainSize: 0.9 } },

  // ── 레트로 ──
  { cat: R, name: '80년대 VHS', note: '번지는 색, 주사선, 흔들리는 테이프',
    on: ['tone', 'wb', 'wheels', 'bloom', 'chroma', 'vhs', 'grain', 'weave', 'vignette'],
    p: { contrast: 0.92, temp: 0.05, tint: 0.1, sat: 1.12, lift: [0.05, 0.04, 0.06], gain: [1.0, 0.97, 1.0], bloomThr: 0.7,
      bloomAmt: 0.3, bloomRad: 10, caPx: 2.5, vhsBleed: 4, vhsSoft: 1.2, vhsScan: 0.25, vhsTrack: 0.35, grainAmt: 0.03,
      grainSize: 0.6, grainRough: 0.6, grainColor: 0.5, weaveAmt: 1.0, weaveSpeed: 2, vigAmt: 0.2, vigSoft: 0.7 } },
  { cat: R, name: '70년대 바랜 필름', note: '누렇게 바랜 색, 먼지와 스크래치',
    on: ['tone', 'wb', 'wheels', 'split', 'comp', 'halation', 'grain', 'weave', 'damage', 'vignette'],
    p: { contrast: 0.92, rolloff: 0.3, temp: 0.2, sat: 0.75, lift: [0.05, 0.038, 0.025], gain: [1.02, 0.98, 0.9],
      gamma: [0.97, 0.97, 0.97], shadow: [0.015, 0.004, -0.012], high: [0.025, 0.015, -0.02], comp: 0.2, hiDesat: 0.3,
      halThr: 0.75, halAmt: 0.12, halRad: 8, grainAmt: 0.018, grainSize: 1.2, grainRough: 0.2, weaveAmt: 0.8,
      weaveSpeed: 1, dust: 0.3, scratch: 0.2, flicker: 0.25, vigAmt: 0.35, vigSoft: 0.7 } },
  { cat: R, name: '90년대 캠코더', note: '살짝 초록빛 도는 가정용 비디오',
    on: ['tone', 'wb', 'wheels', 'bloom', 'chroma', 'vhs', 'grain', 'vignette'],
    p: { exposure: 0.12, contrast: 1.12, temp: -0.12, tint: -0.14, sat: 1.12, lift: [0.025, 0.03, 0.03], bloomThr: 0.75,
      bloomAmt: 0.35, bloomRad: 8, caPx: 1.6, vhsBleed: 2.5, vhsSoft: 0.8, vhsScan: 0.16, vhsTrack: 0.15, grainAmt: 0.026,
      grainSize: 0.5, grainRough: 0.7, grainColor: 0.6, vigAmt: 0.12, vigSoft: 0.6 } },
];

/* 필름·카메라 프리셋 — 실제 필름의 공개 특성(대비·채도·색 기울기·입자)을 흉내 낸 것. 디핸서의 실측 프로필과 같지는 않다.
   on 은 적은 값이 속한 모듈에서 자동으로 정한다. 필름 규격(mm)은 따로 고른다. */
const N = '컬러 네거 필름', S = '슬라이드 필름', B = '흑백 필름', P = '프린트·현상', K = '카메라';
const STOCKS = [
  // ── 컬러 네거티브 ──
  // 영화 필름은 「네거(입자·할레이션) + 실측 프린트 LUT」 — 디핸서와 같은 짜임
  [N, 'Kodak Vision3 50D · 2383 (실측 프린트)', '가장 고운 입자의 낮 영화 필름 + 리졸브 실측 Kodak 2383 프린트',
    { lutSrc: 'kodak2383', lutMix: 1, halAmt: 0.04, halThr: 0.82, halRad: 6, grainAmt: 0.006, grainSize: 0.7 }],
  [N, 'Kodak Vision3 250D · 2383 (실측 프린트)', '낮 영화 필름 + 실측 2383 프린트. 극장 영화의 기본 톤',
    { lutSrc: 'kodak2383', lutMix: 1, temp: 0.03, halAmt: 0.07, halThr: 0.8, halRad: 7, grainAmt: 0.011, grainSize: 0.9 }],
  [N, 'Kodak Vision3 200T · 2383 (실측 프린트)', '텅스텐 영화 필름 + 실측 2383 프린트. 살짝 차가운 그림자',
    { lutSrc: 'kodak2383', lutMix: 1, temp: -0.06, shadow: [-0.008, 0.003, 0.012], halAmt: 0.09, halThr: 0.78, halRad: 8, grainAmt: 0.013, grainSize: 0.95 }],
  [N, 'Kodak Vision3 500T · 2383 (실측 프린트)', '밤·실내 고감도 영화 필름 + 실측 2383 프린트. 붉은 할레이션, 굵은 입자',
    { lutSrc: 'kodak2383', lutMix: 1, temp: -0.08, comp: 0.1, shadow: [-0.012, 0.005, 0.018], halAmt: 0.13, halThr: 0.75, halRad: 9, bloomThr: 0.78, bloomAmt: 0.18, bloomRad: 16, grainAmt: 0.018, grainSize: 1.1 }],
  [N, 'Kodak Portra 160', '파스텔 같은 부드러운 인물 사진 필름',
    { contrast: 0.9, rolloff: 0.55, temp: 0.06, tint: 0.03, sat: 0.86, lift: [0.035, 0.03, 0.028], gain: [1.02, 1.0, 0.97], high: [0.015, 0.008, -0.005], comp: 0.15, hiDesat: 0.3, halAmt: 0.05, grainAmt: 0.008, grainSize: 0.8 }],
  [N, 'Kodak Portra 400', '따뜻하고 자연스러운 피부, 크림 같은 밝은 곳',
    { contrast: 0.93, rolloff: 0.55, temp: 0.1, tint: 0.03, sat: 0.9, lift: [0.03, 0.024, 0.02], gain: [1.03, 1.0, 0.95], high: [0.02, 0.01, -0.01], comp: 0.15, hiDesat: 0.3, halAmt: 0.07, grainAmt: 0.012, grainSize: 0.95 }],
  [N, 'Kodak Portra 800', '어두운 곳용 인물 필름. 더 따뜻하고 진함',
    { contrast: 0.96, rolloff: 0.5, temp: 0.14, sat: 0.96, lift: [0.03, 0.022, 0.016], gain: [1.04, 1.0, 0.94], comp: 0.12, halAmt: 0.1, halThr: 0.78, grainAmt: 0.017, grainSize: 1.1 }],
  [N, 'Kodak Ektar 100', '아주 고운 입자, 빨강·파랑이 선명한 컬러 네거',
    { contrast: 1.08, scurve: 0.1, rolloff: 0.4, sat: 1.18, vib: 0.1, lift: [0.005, 0.006, 0.012], shadow: [-0.008, 0, 0.014], density: 0.25, halAmt: 0.04, grainAmt: 0.005, grainSize: 0.65 }],
  [N, 'Kodak Gold 200', '노랗고 따뜻한 추억의 사진 필름',
    { contrast: 1.03, rolloff: 0.4, temp: 0.2, sat: 1.04, lift: [0.03, 0.026, 0.012], gain: [1.03, 1.01, 0.9], high: [0.025, 0.018, -0.02], halAmt: 0.07, grainAmt: 0.014, grainSize: 1.0, vigAmt: 0.15 }],
  [N, 'Kodak UltraMax 400', '진하고 따뜻한 일상 사진 필름',
    { contrast: 1.06, rolloff: 0.35, temp: 0.16, sat: 1.1, lift: [0.025, 0.02, 0.012], gain: [1.03, 1.0, 0.92], density: 0.2, halAmt: 0.08, grainAmt: 0.017, grainSize: 1.1, vigAmt: 0.18 }],
  [N, 'Kodak ColorPlus 200', '살짝 바랜 듯 따뜻한 저가 사진 필름',
    { contrast: 0.97, rolloff: 0.4, temp: 0.18, sat: 0.92, lift: [0.045, 0.035, 0.02], gain: [1.02, 0.99, 0.9], comp: 0.12, grainAmt: 0.016, grainSize: 1.05, vigAmt: 0.2 }],
  [N, 'Fuji Eterna 250D · 3513 (실측 프린트)', '채도 낮은 차분한 영화 필름 + 리졸브 실측 Fujifilm 3513 프린트',
    { lutSrc: 'fuji3513', lutMix: 1, sat: 0.86, comp: 0.1, halAmt: 0.05, grainAmt: 0.01, grainSize: 0.9 }],
  [N, 'Fuji Eterna 500T · 3513 (실측 프린트)', '밤 장면용 영화 필름 + 실측 3513 프린트. 서늘하고 차분함',
    { lutSrc: 'fuji3513', lutMix: 1, sat: 0.83, temp: -0.08, comp: 0.12, halAmt: 0.08, grainAmt: 0.016, grainSize: 1.05 }],
  [N, 'Fuji Eterna Vivid 160 · 3513 (실측 프린트)', 'Eterna 보다 색이 사는 영화 필름 + 실측 3513 프린트',
    { lutSrc: 'fuji3513', lutMix: 1, halAmt: 0.05, grainAmt: 0.008, grainSize: 0.8 }],
  [N, 'Fuji Pro 400H', '공기 같은 파스텔, 살짝 초록·하늘빛',
    { contrast: 0.9, rolloff: 0.6, temp: -0.05, tint: -0.06, sat: 0.85, lift: [0.04, 0.045, 0.045], high: [-0.005, 0.01, 0.01], comp: 0.15, hiDesat: 0.35, halAmt: 0.05, grainAmt: 0.012, grainSize: 0.95 }],
  [N, 'Fuji Superia 400', '초록빛 그림자, 생생한 일상 사진 필름',
    { contrast: 1.04, rolloff: 0.35, tint: -0.08, sat: 1.06, lift: [0.018, 0.03, 0.022], shadow: [-0.01, 0.02, 0.0], gain: [1.0, 1.0, 0.98], halAmt: 0.06, grainAmt: 0.017, grainSize: 1.1, vigAmt: 0.15 }],
  [N, 'Fuji C200', '맑고 서늘한 초록·파랑',
    { contrast: 1.0, rolloff: 0.4, temp: -0.08, tint: -0.06, sat: 0.98, lift: [0.02, 0.03, 0.032], halAmt: 0.05, grainAmt: 0.015, grainSize: 1.0 }],
  [N, 'CineStill 800T', '영화 필름을 사진용으로: 차가운 색 + 불빛 둘레 붉은 번짐',
    { contrast: 1.0, rolloff: 0.5, temp: -0.28, tint: 0.02, sat: 0.98, lift: [0.015, 0.02, 0.035], shadow: [-0.015, 0.01, 0.03], halAmt: 0.3, halThr: 0.68, halRad: 12, bloomThr: 0.75, bloomAmt: 0.3, bloomRad: 18, grainAmt: 0.02, grainSize: 1.15 }],
  [N, 'CineStill 50D', '맑은 낮, 고운 입자, 은은한 할레이션',
    { contrast: 1.02, rolloff: 0.45, temp: 0.03, sat: 1.02, lift: [0.01, 0.01, 0.014], halAmt: 0.14, halThr: 0.72, halRad: 9, grainAmt: 0.006, grainSize: 0.7 }],
  [N, 'Agfa Vista 200', '빨강이 진하고 살짝 서늘한 유럽 필름',
    { contrast: 1.06, rolloff: 0.35, temp: -0.03, sat: 1.1, lift: [0.02, 0.022, 0.026], shadow: [-0.006, 0.006, 0.012], density: 0.2, halAmt: 0.06, grainAmt: 0.015, grainSize: 1.0 }],
  [N, 'Lomography 400', '진한 색, 강한 비네트, 장난스러운 색 틀어짐',
    { contrast: 1.15, rolloff: 0.2, temp: 0.05, sat: 1.25, shadow: [-0.01, 0.0, 0.04], high: [0.04, 0.03, -0.03], density: 0.2, halAmt: 0.1, grainAmt: 0.02, grainSize: 1.1, vigAmt: 0.5, vigSoft: 0.75, caPx: 1.2 }],

  // ── 슬라이드(리버설) ──
  [S, 'Kodak Ektachrome E100', '깨끗하고 살짝 차가운 슬라이드, 깊은 검정',
    { contrast: 1.14, scurve: 0.15, rolloff: 0.3, temp: -0.05, sat: 1.08, lift: [-0.01, -0.008, 0], density: 0.2, halAmt: 0.04, grainAmt: 0.006, grainSize: 0.7 }],
  [S, 'Kodachrome 64', '진한 빨강·노랑, 깊은 그림자의 전설적인 슬라이드',
    { contrast: 1.18, scurve: 0.15, rolloff: 0.3, temp: 0.1, sat: 1.15, lift: [-0.012, -0.012, -0.008], gain: [1.03, 1.01, 0.95], high: [0.02, 0.015, -0.01], density: 0.35, halAmt: 0.05, grainAmt: 0.009, grainSize: 0.8, vigAmt: 0.15 }],
  [S, 'Fuji Velvia 50', '풍경용: 초록·파랑이 아주 진하고 대비가 강함',
    { contrast: 1.2, scurve: 0.2, rolloff: 0.3, tint: 0.04, sat: 1.35, vib: 0.2, lift: [-0.015, -0.012, -0.008], density: 0.35, grainAmt: 0.005, grainSize: 0.65 }],
  [S, 'Fuji Provia 100F', '정확하고 선명한 표준 슬라이드',
    { contrast: 1.1, scurve: 0.1, rolloff: 0.35, sat: 1.12, lift: [-0.006, -0.005, -0.002], density: 0.15, grainAmt: 0.006, grainSize: 0.7 }],
  [S, 'Fuji Astia 100F', '피부가 부드러운 인물용 슬라이드',
    { contrast: 1.03, rolloff: 0.45, temp: 0.03, sat: 1.02, lift: [0, 0, 0.004], grainAmt: 0.006, grainSize: 0.7 }],
  [S, 'Agfa CT Precisa 100', '푸르스름하고 맑은 슬라이드',
    { contrast: 1.1, rolloff: 0.35, temp: -0.15, sat: 1.1, lift: [-0.004, 0, 0.012], shadow: [-0.01, 0, 0.02], grainAmt: 0.008, grainSize: 0.75 }],
  [S, '크로스 프로세스', '슬라이드를 네거로 현상한 듯: 노란 밝은 곳, 파란 그림자, 강한 대비',
    { contrast: 1.25, scurve: 0.2, rolloff: 0.2, sat: 1.25, lift: [0, 0.01, 0.05], gain: [1.02, 1.04, 0.9], shadow: [-0.02, 0, 0.07], high: [0.04, 0.06, -0.06], halAmt: 0.06, grainAmt: 0.014, grainSize: 1.0, vigAmt: 0.25 }],

  // ── 흑백 ──
  [B, 'Kodak Tri-X 400', '대비 강하고 입자 살아 있는 고전 흑백',
    { bwAmt: 1, contrast: 1.16, scurve: 0.15, rolloff: 0.3, grainAmt: 0.03, grainSize: 1.2, grainRough: 0.2, vigAmt: 0.2 }],
  [B, 'Kodak T-Max 100', '아주 고운 입자의 매끈한 흑백',
    { bwAmt: 1, contrast: 1.06, rolloff: 0.4, grainAmt: 0.01, grainSize: 0.7, vigAmt: 0.1 }],
  [B, 'Kodak T-Max P3200', '어두운 곳용: 굵은 입자, 들뜬 검정',
    { bwAmt: 1, contrast: 1.12, scurve: 0.1, lift: [0.02, 0.02, 0.02], grainAmt: 0.055, grainSize: 1.5, grainRough: 0.3, vigAmt: 0.25 }],
  [B, 'Kodak Double-X 5222', '고전 흑백 영화 촬영 필름',
    { bwAmt: 1, contrast: 1.2, scurve: 0.15, rolloff: 0.35, grainAmt: 0.026, grainSize: 1.1, vigAmt: 0.25, weaveAmt: 0.5, flicker: 0.15 }],
  [B, 'Ilford HP5 Plus', '부드러운 대비, 넉넉한 입자',
    { bwAmt: 1, contrast: 1.02, rolloff: 0.4, lift: [0.015, 0.015, 0.015], grainAmt: 0.028, grainSize: 1.15, vigAmt: 0.15 }],
  [B, 'Ilford FP4 Plus', '고운 입자, 중간 대비',
    { bwAmt: 1, contrast: 1.08, rolloff: 0.4, grainAmt: 0.013, grainSize: 0.8, vigAmt: 0.12 }],
  [B, 'Ilford Delta 3200', '아주 굵은 입자, 흐린 검정',
    { bwAmt: 1, contrast: 0.96, lift: [0.03, 0.03, 0.03], grainAmt: 0.05, grainSize: 1.45, grainRough: 0.25, vigAmt: 0.2 }],
  [B, 'Ilford Pan F Plus 50', '아주 고운 입자, 진한 검정',
    { bwAmt: 1, contrast: 1.22, scurve: 0.2, lift: [-0.015, -0.015, -0.015], grainAmt: 0.006, grainSize: 0.6, vigAmt: 0.12 }],
  [B, 'Fomapan 400', '거칠고 대비 강한 동유럽 흑백',
    { bwAmt: 1, contrast: 1.2, grainAmt: 0.038, grainSize: 1.3, grainRough: 0.35, vigAmt: 0.3, dust: 0.2 }],
  [B, '흑백 + 빨강 필터', '하늘은 진하게, 피부는 밝게',
    { bwAmt: 1, bwFilter: 'red', contrast: 1.15, grainAmt: 0.022, grainSize: 1.0, vigAmt: 0.15 }],
  [B, '흑백 + 초록 필터', '나뭇잎은 밝게, 입술·피부는 진하게',
    { bwAmt: 1, bwFilter: 'green', contrast: 1.08, grainAmt: 0.02, grainSize: 1.0, vigAmt: 0.15 }],
  [B, '세피아 인화', '갈색으로 물들인 오래된 사진',
    { bwAmt: 1, bwTone: 'sepia', bwToneAmt: 0.8, contrast: 1.05, lift: [0.03, 0.03, 0.03], grainAmt: 0.022, grainSize: 1.1, vigAmt: 0.3, dust: 0.2 }],
  [B, '셀레늄 인화', '검정이 보랏빛으로 깊어진 인화',
    { bwAmt: 1, bwTone: 'selenium', bwToneAmt: 0.7, contrast: 1.15, grainAmt: 0.018, grainSize: 1.0, vigAmt: 0.15 }],
  [B, '청사진 (시아노타입)', '파란색으로 인화한 사진',
    { bwAmt: 1, bwTone: 'cyan', bwToneAmt: 1, contrast: 1.05, lift: [0.02, 0.02, 0.02], grainAmt: 0.015, grainSize: 1.0, vigAmt: 0.2 }],

  // ── 프린트·현상 ──
  [P, 'Kodak 2383 프린트 (실측)', '극장 상영용 프린트 — 리졸브의 실측 Kodak 2383 LUT 그대로',
    { lutSrc: 'kodak2383', lutMix: 1 }],
  [P, 'Kodak 2393 프린트 (2383 실측 기반)', '2383 실측에 대비·채도를 조금 더한 2393 느낌',
    { lutSrc: 'kodak2383', lutMix: 1, contrast: 1.06, sat: 1.08 }],
  [P, 'Fuji 3513 프린트 (실측)', '서늘하고 부드러운 프린트 — 리졸브의 실측 Fujifilm 3513DI LUT 그대로',
    { lutSrc: 'fuji3513', lutMix: 1 }],
  [P, '은잔존 (블리치 바이패스)', '은을 남긴 현상: 채도 빠지고 대비 강한 금속성 화면',
    { contrast: 1.3, scurve: 0.2, rolloff: 0.2, sat: 0.45, hiDesat: 0.4, density: 0.3, grainAmt: 0.02, grainSize: 1.0, vigAmt: 0.25 }],
  [P, '테크니컬러 3원색', '1950년대 할리우드: 진하고 화사한 원색',
    { contrast: 1.1, rolloff: 0.45, temp: 0.06, sat: 1.35, vib: 0.15, density: 0.35, lift: [0, 0, 0.006], halAmt: 0.06, grainAmt: 0.01, grainSize: 0.9 }],
  [P, '데이 포 나이트', '낮에 찍어 밤처럼 만드는 고전 기법: 어둡고 푸름',
    { exposure: -1.2, contrast: 1.15, temp: -0.6, sat: 0.55, shadow: [-0.02, 0.0, 0.04], vigAmt: 0.4, grainAmt: 0.014, grainSize: 1.0 }],

  // ── 카메라 ──
  // 카메라 회사 공식 LUT: 영상을 그 카메라의 로그로 바꾼 뒤 공식 Rec.709 LUT 를 건다
  [K, 'ARRI Alexa (ARRI 공식 LUT)', 'ARRI 의 LogC → Rec.709 공식 LUT. 부드러운 밝은 곳, 자연스러운 피부',
    { lutSrc: 'arri709', lutMix: 1 }],
  [K, 'Sony LC-709 TypeA (소니 공식, 알렉사풍)', '소니가 알렉사 색에 맞춰 만든 공식 룩',
    { lutSrc: 'sonyLC709A', lutMix: 1 }],
  [K, 'Sony LC-709 (소니 공식 LUT)', '소니 S-Log3 공식 룩: 낮은 대비, 넓은 계조',
    { lutSrc: 'sonyLC709', lutMix: 1 }],
  [K, 'Sony Cine+709 (소니 공식 LUT)', '소니 S-Log3 공식 룩: 영화풍 대비',
    { lutSrc: 'sonyCine709', lutMix: 1 }],
  [K, 'RED IPP2 (RED 공식 LUT)', 'RED 의 IPP2 공식 변환 (낮은 대비·부드러운 밝은 곳)',
    { lutSrc: 'redIPP2', lutMix: 1 }],
  [K, 'Panasonic V-709 (파나소닉 공식 LUT)', '파나소닉 Varicam 의 V-Log → V-709 공식 LUT',
    { lutSrc: 'panaV709', lutMix: 1 }],
  [K, 'Canon 시네마 느낌', '혈색 좋은 피부, 따뜻하고 부드러운 색',
    { contrast: 1.02, rolloff: 0.55, temp: 0.08, tint: 0.06, sat: 1.04, high: [0.01, 0.0, -0.004] }],
  [K, 'Blackmagic 느낌', '살짝 초록빛, 평평하고 필름 같은 디지털',
    { contrast: 0.97, rolloff: 0.5, tint: -0.06, sat: 0.95, lift: [0.012, 0.016, 0.012], comp: 0.1 }],
  [K, '스마트폰 느낌', '밝은 그림자, 선명하고 진한 색',
    { exposure: 0.08, contrast: 1.04, scurve: 0.12, rolloff: 0.35, temp: -0.03, sat: 1.15, vib: 0.25, lift: [0.02, 0.02, 0.022], comp: 0.1 }],
  [K, '액션캠 느낌', '아주 진한 하늘색, 강한 대비, 렌즈 가장자리 색 어긋남',
    { contrast: 1.12, scurve: 0.15, rolloff: 0.3, temp: -0.05, sat: 1.25, vib: 0.2, caPx: 1.6, vigAmt: 0.2 }],
  [K, 'DSLR 영상 (2010년대)', '따뜻하고 붉은 피부, 하얗게 날아가는 밝은 곳',
    { contrast: 1.08, temp: 0.08, tint: 0.05, sat: 1.1, grainAmt: 0.004, grainSize: 0.6 }],
  [K, '초기 디지털 시네마 (2000년대 HD)', '날카롭고 초록빛, 쉽게 날아가는 밝은 곳',
    { contrast: 1.15, tint: -0.1, sat: 1.05, lift: [-0.005, 0, -0.005], grainAmt: 0.006, grainSize: 0.5, grainRough: 0.6 }],
  [K, '방송 ENG 카메라', '뉴스 화면처럼 밝고 평평한 비디오',
    { exposure: 0.1, contrast: 0.95, rolloff: 0.1, sat: 1.05, vhsSoft: 0.4, grainAmt: 0.008, grainSize: 0.5, grainColor: 0.4 }],
  [K, '보안카메라 (CCTV)', '채도 빠진 초록빛, 거친 잡음',
    { contrast: 1.1, tint: -0.25, sat: 0.3, lift: [0.03, 0.04, 0.03], vhsSoft: 1.2, vhsScan: 0.1, grainAmt: 0.035, grainSize: 0.6, grainRough: 0.8, grainColor: 0.3, vigAmt: 0.3 }],
  [K, '웹캠', '어둡고 잡음 많은 노트북 카메라',
    { exposure: -0.1, contrast: 0.92, temp: -0.12, sat: 0.85, lift: [0.02, 0.02, 0.03], vhsSoft: 0.8, grainAmt: 0.03, grainSize: 0.5, grainRough: 0.8, grainColor: 0.6 }],
];
for (const [cat, name, note, p] of STOCKS) PRESETS.push({ cat, name, note, on: [...new Set(Object.keys(p).map(k => PMOD[k]))], p });

/* 필름 데이터시트 시뮬레이션 (luts/film_sim.py → luts/film_luts.js).
   색은 코닥·후지 데이터시트(spektrafilm 프로필, CC BY-SA 4.0)로 네거→인화→영사를 계산한 LUT,
   입자·할레이션은 필름 감도와 할레이션 방지층(있음/약함)에 맞춘 값. 앞에 넣어 각 탭 맨 앞에 보이게 한다. */
const DATA_FILMS = [
  // key, 무리(cat), 이름, 부제, 입자 양, 입자 크기, 할레이션 세기, 할레이션 시작, 할레이션 퍼짐
  ['sim_v3_50d', 'cine', 'Kodak Vision3 50D', '데이터 → 2383 프린트', 0.006, 0.7, 0.03, 0.82, 6],
  ['sim_v3_250d', 'cine', 'Kodak Vision3 250D', '데이터 → 2383 프린트', 0.011, 0.9, 0.05, 0.8, 7],
  ['sim_v3_200t', 'cine', 'Kodak Vision3 200T', '데이터 → 2383 프린트', 0.012, 0.95, 0.06, 0.78, 8],
  ['sim_v3_500t', 'cine', 'Kodak Vision3 500T', '데이터 → 2383 프린트', 0.016, 1.05, 0.08, 0.75, 9],
  ['sim_v3_250d_2393', 'cine', 'Kodak Vision3 250D', '데이터 → 2393 프린트', 0.011, 0.9, 0.05, 0.8, 7],
  ['sim_v3_500t', 'cine', 'CineStill 800T', '500T 데이터 · 할레이션 방지층 없음', 0.018, 1.1, 0.32, 0.66, 12],
  ['sim_portra160', 'photo', 'Kodak Portra 160', '데이터 → 포트라 인화지', 0.008, 0.8, 0.04, 0.8, 7],
  ['sim_portra400', 'photo', 'Kodak Portra 400', '데이터 → 포트라 인화지', 0.012, 0.95, 0.05, 0.8, 7],
  ['sim_portra800', 'photo', 'Kodak Portra 800', '데이터 → 포트라 인화지', 0.017, 1.1, 0.06, 0.78, 8],
  ['sim_ektar100', 'photo', 'Kodak Ektar 100', '데이터 → 포트라 인화지', 0.006, 0.7, 0.03, 0.82, 6],
  ['sim_gold200', 'photo', 'Kodak Gold 200', '데이터 → 수프라 인화지', 0.013, 1.0, 0.1, 0.76, 9],
  ['sim_ultramax400', 'photo', 'Kodak UltraMax 400', '데이터 → 수프라 인화지', 0.016, 1.1, 0.1, 0.76, 9],
  ['sim_fuji_c200', 'photo', 'Fujifilm C200', '데이터 → 후지 인화지', 0.013, 1.0, 0.1, 0.76, 9],
  ['sim_fuji_400h', 'photo', 'Fujifilm Pro 400H', '데이터 → 후지 인화지', 0.012, 0.95, 0.05, 0.8, 7],
  ['sim_fuji_xtra400', 'photo', 'Fujifilm Superia X-TRA 400', '데이터 → 후지 인화지', 0.016, 1.1, 0.1, 0.76, 9],
  ['sim_velvia100', 'slide', 'Fujifilm Velvia 100', '데이터 · 슬라이드', 0.005, 0.65, 0.03, 0.82, 6],
  ['sim_provia100f', 'slide', 'Fujifilm Provia 100F', '데이터 · 슬라이드', 0.005, 0.65, 0.03, 0.82, 6],
  ['sim_ektachrome100', 'slide', 'Kodak Ektachrome 100', '데이터 · 슬라이드', 0.005, 0.65, 0.03, 0.82, 6],
  ['sim_kodachrome64', 'slide', 'Kodak Kodachrome 64', '데이터 · 슬라이드', 0.006, 0.7, 0.06, 0.78, 8],
];
const DATA_CAT = { cine: '영화 필름 (데이터)', photo: '사진 필름 (데이터)', slide: '슬라이드 (데이터)' };
const dataPresets = [];
for (const [key, grp, name, sub, gA, gS, hA, hT, hR] of DATA_FILMS) {
  const L = (window.FTS_LUTS || {})[key];
  if (!L) continue;
  const p = { lutSrc: key, lutMix: 1, grainAmt: gA, grainSize: gS, grainColor: 0.35, halAmt: hA, halThr: hT, halRad: hR };
  if (name === 'CineStill 800T') Object.assign(p, { temp: -0.06 });
  dataPresets.push({ cat: DATA_CAT[grp], name: name + ' · ' + sub, note: (L.note || '') + ' — 코닥·후지 데이터시트로 계산한 색', data: true, on: [...new Set(Object.keys(p).map(k => PMOD[k]))], p });
}
PRESETS.unshift(...dataPresets);

/* 디핸서에서 내보낸 LUT (luts/make_dehancer_luts.py → luts/dehancer_luts.js). 색은 디핸서 그대로, 입자·할레이션은 이름의 감도에 맞춰 */
for (const [key, L] of Object.entries(window.FTS_DEHANCER_LUTS || {})) {
  const [gA, gS] = L.grain || [0.011, 0.9];
  const p = { lutSrc: key, lutMix: 1, grainAmt: gA, grainSize: gS, grainColor: 0.35, halAmt: L.hal || 0.05, halThr: 0.8, halRad: 7 };
  PRESETS.push({ cat: '디핸서', name: L.name + ' (디핸서)', note: '디핸서에서 내보낸 LUT — 색은 디핸서 그대로, 입자·할레이션은 이 프로그램', on: [...new Set(Object.keys(p).map(k => PMOD[k]))], p });
}

/* 필름 규격(mm): 35mm 를 1 로 둔 입자 굵기·양 배율과, 흐림(px)·흔들림(px)·깜빡임·먼지·스크래치·비네트 */
const GAUGES = {
  '8mm':  { grainSize: 2.3, grainAmt: 1.9, soft: 2.2, weave: 2.4, flicker: 0.5, dust: 0.35, scratch: 0.2, vig: 0.35 },
  's8':   { grainSize: 2.0, grainAmt: 1.7, soft: 1.8, weave: 1.9, flicker: 0.4, dust: 0.3, scratch: 0.15, vig: 0.3 },
  '16mm': { grainSize: 1.6, grainAmt: 1.55, soft: 1.1, weave: 1.0, flicker: 0.2, dust: 0.15, scratch: 0.1, vig: 0.2 },
  's16':  { grainSize: 1.45, grainAmt: 1.4, soft: 0.9, weave: 0.8, flicker: 0.15, dust: 0.12, scratch: 0.08, vig: 0.15 },
  '35mm': { grainSize: 1.0, grainAmt: 1.0, soft: 0.35, weave: 0.35, flicker: 0.05, dust: 0.05, scratch: 0, vig: 0 },
  '65mm': { grainSize: 0.65, grainAmt: 0.6, soft: 0, weave: 0.15, flicker: 0, dust: 0, scratch: 0, vig: 0 },
  'imax': { grainSize: 0.5, grainAmt: 0.45, soft: 0, weave: 0.08, flicker: 0, dust: 0, scratch: 0, vig: 0 },
};

const CATEGORIES = [A, F, C, R, N, S, B, P, K, '내 프리셋'];
const ORIGINAL = { cat: '', name: '원본 (효과 없음)', on: [], p: {} };

window.FTS = { MODULES, PRESETS, CATEGORIES, ORIGINAL, PDEF, PMOD, GAUGES, presetState, effective, clone };
})();
