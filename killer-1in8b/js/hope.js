// hope: lives that never take anyone. Four threads (the doctor, the fire, the friend who became a detective,
// the far sea) and five endings where the hands stay clean
'use strict';

Object.assign(D.END, {
  family: { stamp: '평범한 일생', sub: 'AN ORDINARY LIFE', img: 'g_family', ph: 'g_family', caught: false, happy: 1, suspect: () => '해당 없음',
    head: '흑천경찰서에는 이 이름으로 된 사건 기록이 없다. 가족이 임종을 지켰다.',
    last: S => `${S.name}. ${S.deathYear}년, ${S.deathAge}세. 평생 무엇과 싸웠는지 가족은 끝내 몰랐다. 몰라도 되는 일이었다.`, det: '평생 그 동창과 명절 인사를 주고받았다.' },
  healed: { stamp: '치료 종결', sub: 'TREATMENT COMPLETE', img: 'a_therapy', ph: 'a_therapy', caught: false, happy: 1, suspect: () => '해당 없음',
    head: '정신건강의학과 진료 기록 마지막 줄: 「치료 종결. 재발 없음.」',
    last: S => `${S.name}. 매주 목요일 오후 세 시, 삼십 년 동안 같은 의자에 앉았다. 그 의자가 이 사람을 지켰다.`, det: '그 동창이 무엇과 싸웠는지 끝내 몰랐다.' },
  hero: { stamp: '의인', sub: 'CITIZEN HERO', img: 'g_hero', ph: 'g_hero', caught: false, happy: 1, suspect: () => '해당 없음',
    head: '흑천소방서 표창 기록: 화재 현장에 맨 먼저 뛰어들어 주민을 구조한 시민.',
    last: S => `${S.name}. 불길 속에 들어갈 때 손이 떨리지 않았다. 처음으로 그 손이 쓸모가 있었다.`, det: '표창식 사진을 수첩에 끼워 두었다.' },
  partner: { stamp: '수사 협조 — 표창', sub: 'COMMENDED', img: 'g_friends', ph: 'g_friends', caught: false, happy: 1, suspect: () => '해당 없음',
    head: '흑천 연쇄 실종 사건은 민간인 협조자의 결정적 제보로 해결됐다.',
    last: S => `${S.name}. 괴물이 어떻게 생각하는지 알았다. 그래서 괴물을 잡았다. 같은 날 태어난 친구와 함께.`, det: '은퇴하고도 매주 그 친구와 포장마차에 갔다.' },
  faraway: { stamp: '이민', sub: 'EMIGRATED', img: 'g_sea', ph: 'g_sea', caught: false, happy: 1, suspect: () => '해당 없음',
    head: '출입국 기록: 출국 후 귀국 기록 없음. 현지에서 자연사.',
    last: S => `${S.name}. 흑천에서 아주 먼 바다. 아무도 이 사람의 손을 무서워하지 않는 곳에서 늙었다.`, det: '그 동창의 소식을 한 번도 듣지 못했다.' },
});

// ------------------------------------------------------------------ threads for a life without blood
const clean = S => !S.victims.length;
ARCS.push(
  // the doctor, before anything happens
  { k: 'cure1', when: (S, a) => a >= 20 && clean(S) && S.urge >= 50 && !S.arc.cure && !S.arc.heal, run: async S => {
    const d = others('doctor'), dn = d && !d.dead ? d.name : '정신과 의사';
    S.arc.docName = dn;
    await UI.scene({ img: 'a_therapy', vcap: '진료실', cap: `정신건강의학과. ${d && !d.dead ? `의사 ${d.name}. 같은 날 태어났다며 웃었다.` : '의사가 안경을 고쳐 썼다.'} “어떤 생각이 가장 괴로우세요?”` });
    const i = await UI.choose([{ t: '전부 말한다', d: '“사람을 해치는 상상이 멈추지 않아요. 아직은 아무도…”' }, { t: '“잠을 못 자요.”', d: '반만 말한다' }, { t: '진료실을 나온다' }], { title: '' });
    if (i === 0) { S.arc.cure = 1; S.urge = clamp(S.urge - 25, 0, 100); UI.diary('처음으로 남에게 말했다. 의사는 놀라지 않았다. 그게 이상하게 고마웠다.'); remember(`${nj(dn, '은', '는')} 이 고백을 비밀로 지킨다`); }
    else if (i === 1) { S.urge = clamp(S.urge - 5, 0, 100); UI.diary('수면제를 받았다. 잠은 왔다. 꿈도 왔다.'); }
    else UI.diary('진료실 문손잡이가 차가웠다.');
    if (d && i === 0) d.life.push([AGE(), '같은 날 태어난 환자를 오래 진료했다.']);
    await UI.next(2400);
  } },
  { k: 'cure2', after: 'cure1', gap: 10, when: S => S.arc.cure === 1 && clean(S), run: async S => {
    await UI.scene({ img: 'a_therapy', vcap: '이 년째', cap: `${nj(S.arc.docName, '이', '가')} 물었다. “요즘은 어떠세요?”` });
    const i = await UI.choose([{ t: '“손이 조용해지는 날이 늘었어요.”', d: '계속 다닌다' }, { t: '“이제 괜찮아요.”', d: '그만 다닌다' }], { title: '' });
    if (i === 0) { S.arc.cure = 2; S.urge = clamp(S.urge - 15, 0, 100); UI.diary('약을 계속 먹는다. 목요일 오후 세 시가 기다려진다.'); }
    else { S.arc.cure = -1; S.urge = clamp(S.urge + 20, 0, 100); UI.diary('약을 끊었다. 한 달 만에 손이 다시 근질거렸다.', 'red'); }
    await UI.next(2200);
  } },
  { k: 'cure3', after: 'cure2', gap: 24, when: S => S.arc.cure === 2 && clean(S), run: async S => {
    await UI.scene({ img: 'a_therapy', vcap: '십 년째', cap: `${nj(S.arc.docName, '이', '가')} 차트를 덮었다. “이제 한 달에 한 번만 오셔도 되겠어요.”` });
    await UI.choose([{ t: '고개를 숙여 인사한다' }], { title: '' });
    S.arc.cure = 3; S.urge = clamp(S.urge - 20, 0, 100);
    UI.diary('진료실을 나와 한참 걸었다. 아무도 따라가지 않았다. 그냥 걸었다.');
    remember('그 진료실 의자가 당신을 기억한다');
    await UI.next(2200);
  } },

  // the fire
  { k: 'hero1', when: (S, a) => a >= 19 && a <= 62 && clean(S) && !S.arc.hero && S.arc.far !== 1, run: async S => {
    await UI.scene({ img: 'g_hero', vcap: '새벽 두 시', cap: '골목 끝 집에 불이 났다. 안에서 기침 소리가 들린다. 소방차는 아직이다.', snd: 'fire', shake: 1 });
    const i = await UI.choose([{ t: '뛰어든다' }, { t: '119에 신고하고 기다린다' }], { title: '지금', time: 5000 });
    if (i !== 0) { S.arc.hero = -1; UI.diary(i < 0 ? '얼어붙었다. 소방차가 왔다. 노인은 연기를 많이 마셨다.' : '신고했다. 소방차가 왔다. 노인은 들것에 실려 나왔다.'); await UI.next(2000); return; }
    cov('arc:rescue');
    const ok = await mgMash({ title: '연기를 헤치고 끌어낸다', need: 16, dur: 4.5 });
    S.arc.hero = 1; S.susp = clamp(S.susp - 20, 0, 100); S.urge = clamp(S.urge - 20, 0, 100); addLife('bond', 15);
    if (!ok) addLife('health', -25);
    UI.diary(ok ? '노인을 업고 나왔다. 처음으로 이 손이 누군가를 살렸다.' : '노인을 끌어냈다. 등에 화상이 남았다. 아프지 않았다.');
    remember('노인의 손자는 당신의 이름을 평생 기억한다');
    await UI.next(2600);
  } },
  { k: 'hero2', after: 'hero1', gap: 6, when: S => S.arc.hero === 1, run: async S => {
    await UI.scene({ img: 'life_photo', vcap: '표창', cap: '구해 낸 노인의 가족이 떡을 들고 왔다. 소방서에서 표창장을 준다고 했다.', snd: 'page' });
    const i = await UI.choose([{ t: '표창식에 간다', d: '사진이 신문에 실린다' }, { t: '사양한다', d: '얼굴이 알려지는 게 싫다' }], { title: '' });
    S.arc.hero = 2; addLife('void', -15);
    UI.diary(i === 0 ? '표창장을 받았다. 신문에 내 얼굴이 실렸다. 이번엔 좋은 일로.' : '사양했다. 그래도 노인의 손자가 매년 명절에 찾아왔다.');
    await UI.next(2200);
  } },

  // the friend who became a detective: the real killer in town
  { k: 'part1', when: (S, a) => a >= 30 && clean(S) && S.arc.det === 'friend' && others('det') && !others('det').dead && !S.arc.partner && S.arc.far !== 1, run: async S => {
    const d = others('det');
    await UI.scene({ img: 'm_newspaper', vcap: '연쇄 실종', cap: `흑천에 연쇄 실종 사건이 났다. 범인은 내가 아니다. 밤늦게 ${nj(d.name, '이', '가')} 찾아왔다. “너… 이런 놈들 생각을 이상하게 잘 알잖아.”`, snd: 'knock' });
    const i = await UI.choose([{ t: '그놈이 어떻게 생각하는지 말해 준다', d: '내 안의 것을 처음으로 꺼낸다' }, { t: '모른다고 한다' }], { title: '' });
    if (i === 0) { S.arc.partner = 1; S.urge = clamp(S.urge + 8, 0, 100); UI.diary(`밤새 말했다. 놈이 어디서 기다리는지, 무엇을 고르는지. ${nj(d.name, '이', '가')} 받아 적다 말고 나를 봤다.`); remember(`${nj(d.name, '은', '는')} 그날 밤 받아 적은 것을 평생 간직한다`); }
    else { S.arc.partner = -1; UI.diary(`${nj(d.name, '은', '는')} 실망한 얼굴로 돌아갔다.`); }
    await UI.next(2400);
  } },
  { k: 'part2', after: 'part1', gap: 6, when: S => S.arc.partner === 1 && others('det') && !others('det').dead, run: async S => {
    const d = others('det');
    tense(2);
    await UI.scene({ img: 'h_fisher', vcap: '잠복', cap: `새벽. 저수지 둑. ${d.name}${josa(d.name, '과', '와')} 갈대 속에 엎드렸다. 내 말대로라면 놈은 오늘 온다.`, snd: 'amb_rain' });
    const ok = await mgHold({ title: '갈대 속에서 숨을 참는다', n: 2, dur: 7 });
    tense(0);
    S.arc.partner = 2;
    if (ok) { slam('잡았다'); UI.diary(`봉투를 든 남자가 둑을 내려왔다. ${nj(d.name, '이', '가')} 덮쳤다. 내가 말한 그대로였다.`); }
    else { UI.diary('놈이 우리를 보고 달아났다. 그래도 차 번호를 봤다. 사흘 뒤 잡혔다.'); }
    remember('흑천은 더 이상 사람을 잃지 않는다');
    d.life.push([AGE(), '동창의 도움으로 연쇄 실종 사건 범인을 잡았다.']);
    await UI.next(2600);
  } },

  // the far sea
  { k: 'far1', when: (S, a) => a >= 28 && a <= 55 && clean(S) && !S.arc.far && S.urge >= 40, run: async S => {
    const ab = others('abroad'), who = ab && !ab.dead ? ab.name : '원양어선 시절 알던 선장';
    await UI.scene({ img: 'g_sea', vcap: '엽서', cap: `${who}에게서 엽서가 왔다. 「여기 바다는 조용해. 아무도 너를 몰라. 와.」`, snd: 'page' });
    const i = await UI.choose([{ t: '떠난다', d: '흑천을 영영 떠난다' }, { t: '남는다' }], { title: '' });
    if (i === 0) { S.arc.far = 1; S.urge = clamp(S.urge - 30, 0, 100); S.district = '먼 바닷가 마을'; UI.diary('배를 탔다. 흑천의 불빛이 작아지다 사라졌다. 손이 조용했다.'); remember('흑천은 당신을 잊는다. 당신도 흑천을 잊는다'); }
    else { S.arc.far = -1; UI.diary('엽서를 서랍에 넣었다. 가끔 꺼내 본다.'); }
    await UI.next(2400);
  } },
);

// dying old with clean hands: which life was it
function happyKind(S) {
  const A = S.arc || {};
  if (A.far === 1) return 'faraway';
  if (A.partner === 2) return 'partner';
  if (A.hero === 2 || A.hero === 1) return 'hero';
  if (A.cure >= 3) return 'healed';
  if (S.married || S.kids) return 'family';
  return null;
}

Object.assign(EPI, {
  family: [['g_family', '침대 둘레에 손이 많았다. 아들, 딸, 이름을 다 외우지 못한 손주들.'], ['e_funeral', '조문객이 줄을 섰다. 다들 좋은 사람이었다고 했다. 그 말이 처음부터 끝까지 사실이었다.']],
  healed: [['a_therapy', () => `삼십 년. 같은 의자, 같은 시간. ${nj(G.S.arc.docName || '의사', '은', '는')} 은퇴하던 날 차트 맨 아래에 적었다. 「재발 없음」.`], ['life_old', '손은 끝까지 아무도 해치지 않았다. 이기는 데 평생이 걸렸다. 그래도 이겼다.']],
  hero: [['g_hero', '그날 구한 노인의 손자가 소방관이 됐다. 임관식에 이 사람을 불렀다.'], ['e_funeral', '영정 앞에 소방관 제복을 입은 청년이 오래 서 있었다.']],
  partner: [['g_friends', () => `은퇴한 ${others('det').name}${josa(others('det').name, '과', '와')} 매주 포장마차에서 만났다. 그는 끝까지 묻지 않았다. 어떻게 그렇게 잘 알았냐고.`], ['m_newspaper', '흑천 연쇄 실종 사건 해결 30주년 기사. 사진 구석에 노인 둘이 웃고 있다.']],
  faraway: [['g_sea', '먼 나라의 바닷가. 그물을 기우며 늙었다. 이웃들은 이 사람을 조용한 동양인이라고 불렀다.'], ['g_sea', '흑천이라는 이름을 마지막으로 떠올린 게 언제였는지 기억나지 않았다.']],
});

// ------------------------------------------------------------------ finale texts for a clean life
const HAPPY = {
  family: { t: '끝까지 사람으로 산 사람', why: S => ['평생 손이 근질거렸다. 한 번도 그 손을 쓰지 않았다.', `${S.married ? nj(S.married.name, '은', '는') : '가족은'} 옆에서 자는 사람이 무엇과 싸우는지 몰랐다. 몰라도 됐다.`, '아이의 운동회에 빠짐없이 갔다. 그 주에도, 그다음 주에도 아무도 사라지지 않았다.'] },
  healed: { t: '스스로 이긴 사람', why: () => ['괴물이 있다는 걸 처음으로 남에게 말했다. 그게 시작이었다.', '삼십 년 동안 매주 같은 의자에 앉았다.', '흑천에서 이 사람 때문에 사라진 사람은 없다.'] },
  hero: { t: '괴물 대신 사람을 구한 사람', why: () => ['불길 속에 맨 먼저 들어갔다.', '사람을 해치려고 태어난 것 같던 손으로 사람을 끌어냈다.', '그 손을 평생 그렇게만 썼다.'] },
  partner: { t: '괴물을 알아본 사람', why: () => ['괴물이 어떻게 생각하는지 알았다. 자기 안에도 같은 것이 있었으니까.', '그 앎을 친구에게 건넸다. 범인은 저수지 둑에서 잡혔다.', '그 뒤로 흑천에서 사라진 사람은 없었다.'] },
  faraway: { t: '먼 바다에서 평온을 찾은 사람', why: () => ['흑천을 떠났다. 이 손이 무엇을 원하는지 아무도 모르는 곳으로.', '바다는 아무것도 묻지 않았다.', '마지막까지 아무도 해치지 않았다.'] },
};
function happyVerdict(S, kind) { const h = HAPPY[kind]; return { t: h.t, why: h.why(S) }; }

function happyQuotes(S, kind) {
  const out = [['좋은 사람이었어요. 인사도 잘하고. 가끔 손을 오래 내려다보곤 했지만요.', '같은 골목 이웃']];
  const child = S.sex === 'm' ? '아버지' : '어머니';
  const d = others('det');
  if (kind === 'family') out.push([`${child}는 가끔 손을 오래 내려다봤어요. 왜 그러냐고 물으면 웃기만 했어요.`, '자녀']);
  if (kind === 'healed') out.push(['제가 만난 가장 용감한 환자였어요. 무엇과 싸웠는지는 말씀드릴 수 없습니다.', `정신과 의사 ${S.arc.docName || ''}`.trim()]);
  if (kind === 'hero') out.push(['불 속에서 누가 저를 업고 나왔어요. 그 손이 그렇게 따뜻할 줄 몰랐어요.', '구조된 노인'], ['그분 때문에 소방관이 됐습니다.', '구조된 노인의 손자 · 소방관']);
  if (kind === 'partner' && d) out.push(['그 친구 아니었으면 못 잡았어요. 어떻게 그렇게 잘 아냐고 물은 적이 있는데… 대답을 안 하더라고요.', `형사 ${d.name}`]);
  if (kind === 'faraway') out.push(['조용한 사람이었어요. 그물을 정말 꼼꼼히 기웠죠. 고향 얘기는 한 번도 안 했어요.', '바닷가 마을 이웃']);
  if (S.married) out.push(['좋은 사람이었어요. 정말로요.', `배우자 ${S.married.name}`]);
  return out.slice(0, 4);
}

function hopeStory(S) {
  const A = S.arc || {}, out = [];
  if (A.cure >= 1) out.push('정신과 문을 열었다. 아직 아무도 다치게 하지 않은 채로.');
  if (A.hero >= 1) out.push('어느 새벽, 불난 집에 뛰어들어 노인을 업고 나왔다.');
  if (A.partner === 2) out.push('흑천에 진짜 괴물이 나타났을 때, 형사가 된 친구에게 그놈의 생각을 들려줬다. 범인은 저수지 둑에서 잡혔다.');
  if (A.far === 1) out.push('엽서 한 장을 받고 흑천을 떠났다. 다시는 돌아가지 않았다.');
  if (S.flags.held) out.push(`굶주림에 끌려 밤거리에 나간 날이 ${S.flags.held}번 있었다. 그때마다 돌아왔다.`);
  return out;
}
function happyClosing() {
  return '80억 명 중 한 사람이 살다 갔다. 아무도 다치지 않았다. 흑천의 누군가는 오늘도 아무 일 없이 집에 돌아간다. 그게 이 사람이 평생 한 일이다.';
}
