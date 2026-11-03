// romance, daily life, police evasion — plugged into game.js (EVENTS, idle actions)
'use strict';

const PSEX = () => (G.S.sex === 'm' ? 'f' : 'm');          // partner's sex
const PIMG = k => `r_${k}_${G.S.love ? G.S.love.sex : PSEX()}`;
const LN = () => G.S.love.name;
const roll = (base, tr, per = .09) => chance(clamp(base + trait(tr) * per, .05, .95));

// ================================================================== romance
function startLove() {
  const S = G.S;
  const sex = PSEX();
  const sp = S.others.find(o => o.role === 'spouse' && !o.dead && !o.met);
  const name = sp ? sp.name : rname(sex);
  if (sp) { sp.met = true; sp.face = sex === 'f' ? 'face_gf' : 'face_bf'; sp.status = '연인'; }
  (S.myLife = S.myLife || []).push([AGE(), `${name}${josa(name, '을', '를')} 만났다.`]);
  S.love = { name, sex, face: sex === 'f' ? 'face_gf' : 'face_bf', stage: 0, warmth: 1, met: S.t, hunts: 0, knows: 0, accomplice: false, sameDay: !!sp, job: pick(D.VJOB[sex]) };
  UI.born();
}
function endLove(why) {
  const S = G.S;
  if (S.love) (S.myLife = S.myLife || []).push([AGE(), why === 'dead' ? `${S.love.name}${josa(S.love.name, '이', '가')} 사라졌다.` : `${S.love.name}${josa(S.love.name, '이', '가')} 떠났다.`]);
  const p = S.others.find(o => o.name === S.love.name);
  if (p) { p.status = why === 'dead' ? '실종' : ''; }
  S.love = null;
  S.flags.loveCool = S.t;
  UI.born();
}

async function killPartner(img) {
  const S = G.S, L = S.love;
  const pr = L.sex;
  await UI.scene({ img: img || `k_home_${pr}`, trans: 'red', vcap: '', cap: `${L.name}${josa(L.name, '은', '는')} 끝까지 내 이름을 불렀다. 처음 만난 날 그랬던 것처럼.`, snd: pr === 'f' ? 'scream_f' : 'scream_m', shake: 2, splat: 2, sfx: '콱', sfxBig: 1, ins: ['i_eye', 'i_blade'] });
  setTimeout(() => SND.play('thud', .8), 900);
  await UI.next(4200);
  const dump = pick(['mountain', 'reservoir', 'river']);
  await UI.scene({ img: D.DUMP[dump].img, vcap: '', cap: pick(D.DUMP_TXT[dump]), snd: D.DUMP[dump].snd, ins: ['i_bagtie'] });
  await UI.next(3000);
  S.victims.push({ name: L.name, sex: pr, age: AGE(), job: L.job, t: S.t, year: YEAR(), site: 'theirs', cut: 'big', dump, reported: false, reportIn: 1, social: 3, found: false, trace: 1.3, seen: false, lover: 1, sameDay: L.sameDay, parts: 1, partsFound: 0 });
  const p = S.others.find(o => o.name === L.name);
  if (p) { p.dead = true; p.killedByMe = true; p.life.push([AGE(), '연인과 함께 살다가 실종됐다.']); }
  S.police = clamp(S.police + 16, 0, 100); S.susp = clamp(S.susp + 14, 0, 100); S.homeTraces += .8;
  S.urge = 0;
  bump({ cru: 1 });
  UI.diary(`${L.name}. 다들 떠났다고 생각할 것이다.`, 'red kill');
  endLove('dead');
  UI.status(); UI.renderDiary();
}

const LOVE_EVENTS = [
  { k: 'loveMeet', w: 5, when: S => !S.love && !S.married && AGE() >= 20 && AGE() <= 44 && (S.flags.loveCool == null || S.t - S.flags.loveCool >= 8), run: async S => {
    const sex = PSEX();
    const sp = S.others.find(o => o.role === 'spouse' && !o.dead && !o.met);
    const name = sp ? sp.name : rname(sex);
    const where = pick(['시장 국밥집', '공장 앞 분식집', '빨래방', '버스 정류장', '동네 병원 대기실']);
    await UI.scene({ img: `r_meet_${sex}`, vcap: '만남', cap: `${where}. ${name}${josa(name, '이', '가')} 먼저 웃었다. ${sp ? '나와 같은 날 태어났다고 했다. 운명이라고.' : '내 손이 따뜻하다고 했다.'}`, amb: 'amb_drone' });
    const i = await UI.choose([
      { t: '다시 만나자고 한다', d: '평범한 사람처럼. 평범한 사람의 가면이 하나 늘어난다' },
      { t: '밥만 먹고 헤어진다', d: '혼자가 편하다' },
      { t: '목덜미를 본다', d: '웃는 얼굴 아래 핏줄이 뛴다', red: 1 },
    ]);
    if (i === 0) { startLove(); UI.diary(`${name}. 다시 만나기로 했다. 이상한 기분이다.`, 'love'); S.susp = clamp(S.susp - 6, 0, 100); }
    else if (i === 1) { S.flags.loveCool = S.t; UI.diary(`${name}. 연락하지 않았다.`); }
    else { S.urge = clamp(S.urge + 8, 0, 100); S.flags.loveCool = S.t; UI.diary(`${name}의 목은 가늘었다. 밥값을 내고 나왔다.`, 'red'); }
    await UI.next(2200);
  } },
  { k: 'loveWalk', w: 6, when: S => S.love && S.love.stage === 0 && S.t - S.love.met >= 1, run: async S => {
    const L = S.love;
    await UI.scene({ img: PIMG('walk'), vcap: '강변', cap: `${L.name}${josa(L.name, '이', '가')} 앞서 걸으며 돌아봤다. "무슨 생각 해?" 아무 생각도 하지 않았다. 그게 처음이었다.`, amb: 'amb_rain' });
    const i = await UI.choose([
      { t: '손을 꼭 쥔다', d: '따뜻하다' },
      { t: '거리를 둔다', d: '너무 가까워지면 안 된다' },
      { t: '손목의 맥을 센다', d: '하나, 둘, 셋', red: 1 },
    ]);
    L.stage = 1;
    if (i === 0) { L.warmth += 2; bump({ cha: 1 }); UI.diary(`${L.name}${josa(L.name, '과', '와')} 강변을 걸었다. 손이 따뜻했다.`, 'love'); S.susp = clamp(S.susp - 8, 0, 100); }
    else if (i === 1) { L.warmth -= 1; UI.diary('손을 잡지 않았다. 잡으면 놓을 수 없을 것 같았다.', 'love'); }
    else { L.warmth -= 1; S.urge = clamp(S.urge - 6, 0, 100); UI.diary(`${L.name}의 맥박은 1분에 일흔둘. 세다가 들켰다. 웃어넘겼다.`, 'red'); }
    await UI.next(2200);
  } },
  { k: 'loveStay', w: 6, when: S => S.love && S.love.stage === 1 && S.t - S.love.met >= 2, run: async S => {
    const L = S.love;
    await UI.scene({ img: 'home_banjiha', vcap: '밤', cap: `"오늘 네 집에서 자도 돼?" ${L.name}${josa(L.name, '이', '가')} 물었다. 욕실 타일이 생각났다. 냉동고 소리가 생각났다.` });
    const risky = S.trophies > 0 || S.homeTraces > .4;
    const i = await UI.choose([
      { t: '들인다', d: risky ? '집에 보여서는 안 될 것이 있다' : '보여서 안 될 것은 아직 없다', risk: risky ? { eye: 3, note: '위험하다' } : null },
      { t: '모텔로 간다', d: '"집이 너무 좁아서."' },
      { t: '핑계를 댄다', d: '"야근이야." 세 번째 거짓말' },
    ]);
    if (i === 1) { L.warmth += 1; L.stage = 2; UI.diary('모텔. 벽이 얇았다. 옆방 사람의 기침을 세며 잤다.', 'love'); await UI.next(1800); return; }
    if (i === 2) { L.warmth -= 1; UI.diary('야근이라고 했다. 거짓말이 늘어 간다.', 'love'); await UI.next(1800); return; }
    // she comes in
    if (S.trophies > 0) { await loveFreezer(); return; }
    if (S.homeTraces > .4) { await loveBath(); return; }
    await loveSleep();
  } },
  { k: 'loveStrain', w: 5, when: S => S.love && S.love.stage >= 1 && S.love.hunts >= 1 && S.t - S.lastHunt <= 2, run: async S => {
    const L = S.love;
    await UI.scene({ img: PIMG('meet'), vcap: '', cap: `"어젯밤에 전화했는데." ${L.name}${josa(L.name, '이', '가')} 젓가락을 내려놓았다. "새벽 세 시까지 어디 있었어?"` });
    const i = await UI.choose([
      { t: '야근이었다고 한다', d: '웃으면서. 가면을 쓰고' },
      { t: '아무 말도 하지 않는다', d: '' },
      { t: '화를 낸다', d: '"내가 어디 있든 무슨 상관이야."', red: 1 },
    ]);
    if (i === 0) { if (roll(.4, 'cha')) { UI.diary(`${L.name}${josa(L.name, '은', '는')} 믿었다. 믿고 싶어 했다.`, 'love'); } else { L.warmth -= 2; UI.diary(`${L.name}${josa(L.name, '이', '가')} 공장에 전화해 봤다고 했다. 야근은 없었다.`, 'red'); } }
    else if (i === 1) { L.warmth -= 1; UI.diary('대답하지 않았다. 국이 식었다.', 'love'); }
    else { L.warmth -= 3; UI.diary(`${L.name}${josa(L.name, '이', '가')} 울었다. 손이 떨렸다. 화 때문이 아니었다.`, 'red'); }
    L.hunts = 0;
    await UI.next(2000);
    if (L.warmth <= -2) await loveCry();
  } },
  { k: 'loveSleepAgain', w: 3, when: S => S.love && S.love.stage >= 2 && S.urge > 60 && !S.married, run: async S => { await loveSleep(true); } },
  { k: 'loveDeep', w: 4, when: S => S.love && S.love.stage >= 2 && S.love.warmth >= 2 && !S.married && S.t - S.love.met >= 5, run: async S => {
    const L = S.love;
    await UI.scene({ img: PIMG('walk'), vcap: '', cap: `${L.name}${josa(L.name, '이', '가')} 말했다. "우리 결혼하자." 다리 위였다. 그 아래로 봉투를 몇 개나 던졌는지 세어 봤다.` });
    const i = await UI.choose([
      { t: '결혼한다', d: '가정이라는 가면. 의심이 줄고 눈이 하나 는다' },
      { t: '아직은', d: '' },
      { t: '헤어지자고 한다', d: '이 사람은 살려 두고 싶다' },
    ]);
    if (i === 0) {
      S.married = { name: L.name, sex: L.sex, sameDay: L.sameDay, face: L.face, accomplice: L.accomplice };
      const p = S.others.find(o => o.name === L.name); if (p) { p.status = '배우자'; p.life.push([AGE(), '결혼했다.']); }
      await UI.scene({ img: 'life_wedding', vcap: '결혼', cap: '사진사가 웃으라고 했다. 사진에서 내 얼굴은 나중에 오려 냈다.', snd: 'typewriter' });
      UI.diary(`${L.name}${josa(L.name, '과', '와')} 결혼했다.`, 'love');
      (S.myLife = S.myLife || []).push([AGE(), `${L.name}${josa(L.name, '과', '와')} 결혼했다.`]);
      S.susp = clamp(S.susp - 15, 0, 100); S.love.stage = 3;
    } else if (i === 1) { L.warmth -= 1; UI.diary('아직은, 이라고 했다. 아직은.', 'love'); }
    else { UI.diary(`${L.name}${josa(L.name, '을', '를')} 보냈다. 살려 두고 싶은 사람은 처음이었다.`, 'love'); endLove('left'); }
    await UI.next(2200);
  } },
  { k: 'loveAccPressure', w: 5, when: S => S.love && S.love.accomplice && S.police >= 60 && !S.flags.accPress, run: async S => {
    S.flags.accPress = 1;
    const L = S.love;
    await UI.scene({ img: 'p_interrogation', vcap: '', cap: `${L.name}${josa(L.name, '이', '가')} 경찰서에 불려 갔다. 여섯 시간. 돌아와서 아무 말도 하지 않았다.`, snd: 'buzz' });
    const i = await UI.choose([{ t: '믿는다', d: '그 사람은 내 것이다' }, { t: '끝낸다', d: '아는 사람은 둘이면 안 된다', red: 1 }]);
    if (i === 1) { await killPartner(); return; }
    if (L.warmth >= 3 || roll(.3, 'cha')) { S.police = clamp(S.police - 10, 0, 100); UI.diary(`${L.name}${josa(L.name, '은', '는')} 아무 말도 하지 않았다고 했다. 믿기로 했다.`, 'love'); }
    else { S.police = clamp(S.police + 40, 0, 100); addEv('증언', `${L.name}의 진술`); UI.diary(`${L.name}${josa(L.name, '이', '가')} 돌아오지 않았다. 다음 날 형사가 왔다.`, 'red'); endLove('left'); }
    await UI.next(2200);
  } },
];

async function loveBath() {
  const S = G.S, L = S.love;
  L.knows = 1;
  await UI.scene({ img: PIMG('bath'), trans: 'cut', vcap: '욕실', cap: `${L.name}${josa(L.name, '이', '가')} 수건을 든 채 타일을 내려다봤다. "여기… 줄눈이 왜 이래?"`, snd: 'drip', ins: ['i_tilefinger'] });
  const i = await UI.choose([
    { t: '"염색약이야." 웃어넘긴다', d: '가면', risk: { note: trait('cha') >= 3 ? '될 것 같다' : '어렵다' } },
    { t: '집에 보낸다', d: '"내일 얘기하자."' },
    { t: '지금 끝낸다', d: '여기서. 타일은 어차피 닦아야 한다', red: 1 },
  ]);
  if (i === 0) {
    if (roll(.35, 'cha', .1) || S.job === 'hospital') { L.warmth += 1; L.stage = 2; UI.diary(`${L.name}${josa(L.name, '은', '는')} 웃었다. 염색약. 그걸 믿었다.`, 'love'); }
    else { S.police = clamp(S.police + 12, 0, 100); S.susp = clamp(S.susp + 10, 0, 100); UI.diary(`${L.name}${josa(L.name, '이', '가')} 새벽에 조용히 나갔다. 친구에게 말했다고 한다.`, 'red'); endLove('left'); }
  } else if (i === 1) { L.warmth -= 2; UI.diary('집에 보냈다. 택시 번호판을 외웠다.', 'love'); }
  else { await killPartner('k_bath_' + L.sex); return; }
  await UI.next(2200);
}
async function loveFreezer() {
  const S = G.S, L = S.love;
  SND.play('freezer', 1);
  await UI.scene({ img: PIMG('freezer'), trans: 'cut', vcap: '냉동고', cap: `${L.name}${josa(L.name, '이', '가')} 뚜껑을 열었다. 얼음 아래의 손가락. 돌아보는 얼굴에서 핏기가 빠져나갔다.`, snd: 'sting', shake: 1, ins: ['i_eye'] });
  const i = await UI.choose([
    { t: '"고기야. 도축장에서."', d: '뚜껑을 닫게 한다', risk: { note: S.job === 'butcher' ? '될지도 모른다' : '어렵다' } },
    { t: '지금 끝낸다', d: '봤다. 그걸로 충분하다', red: 1 },
  ]);
  if (i === 0 && (S.job === 'butcher' ? roll(.35, 'cha') : roll(.08, 'cha', .05))) { L.warmth -= 2; L.knows = 1; UI.diary(`${L.name}${josa(L.name, '은', '는')} 고기라는 말을 믿는 척했다. 그날 밤 잠들지 못했다. 둘 다.`, 'red'); await UI.next(2200); return; }
  if (i === 0) {
    await UI.scene({ img: 'city_night', trans: 'flash', vcap: '', cap: `${L.name}${josa(L.name, '이', '가')} 맨발로 뛰쳐나갔다. 비명이 골목을 다 깨웠다.`, snd: L.sex === 'f' ? 'scream_f' : 'scream_m', shake: 2 });
    S.police = clamp(S.police + 45, 0, 100); S.susp = clamp(S.susp + 30, 0, 100); S.montage = 1; addEv('증언', `${L.name}의 신고`);
    UI.diary(`${L.name}${josa(L.name, '이', '가')} 경찰서로 뛰어갔다. 냉동고를 비울 시간은 없다.`, 'red'); endLove('left');
    await UI.next(2200); return;
  }
  await killPartner();
}
async function loveSleep(again) {
  const S = G.S, L = S.love;
  await UI.scene({ img: PIMG('sleep'), trans: 'ink', vcap: '새벽', cap: `${L.name}${josa(L.name, '이', '가')} 잠들었다. 손이 저절로 목 위로 갔다. 손가락 하나 거리. ${again ? '또.' : '이 사람은 다르다. 다른가.'}`, snd: 'heartbeat', ins: ['i_clock'] });
  const i = await UI.choose([
    { t: '손을 거둔다', d: '굶주림이 더 커진다' },
    { t: '끝낸다', d: '지금 가장 조용하다', red: 1 },
    { t: '깨워서 전부 털어놓는다', d: '같이 가든가, 끝이든가', risk: { note: '도박' } },
  ]);
  if (i === 0) { S.urge = clamp(S.urge + 12, 0, 100); L.warmth += 1; L.stage = Math.max(L.stage, 2); UI.diary(`${L.name}의 숨소리를 아침까지 들었다. 손은 이불 밖에 두었다.`, 'love'); }
  else if (i === 1) { await killPartner('k_home_' + L.sex); return; }
  else {
    await UI.scene({ img: PIMG('cry'), vcap: '', cap: `전부 말했다. ${L.name}${josa(L.name, '은', '는')} 울지도 소리 지르지도 않았다. 아주 오래 나를 봤다.` });
    if (roll(.18, 'cha', .08) && L.warmth >= 2) { L.accomplice = true; L.stage = 2; S.susp = clamp(S.susp - 20, 0, 100); UI.diary(`${L.name}${josa(L.name, '이', '가')} 말했다. "다음엔 나한테 먼저 말해." 공범이 생겼다.`, 'red'); }
    else {
      S.police = clamp(S.police + 45, 0, 100); S.montage = 1; addEv('증언', `${L.name}의 진술`);
      UI.diary(`${L.name}${josa(L.name, '은', '는')} 아침에 나갔다. 경찰서 방향이었다.`, 'red'); endLove('left');
    }
  }
  await UI.next(2400);
}
async function loveCry() {
  const S = G.S, L = S.love;
  await UI.scene({ img: PIMG('cry'), vcap: '', cap: `${L.name}${josa(L.name, '이', '가')} 가방을 쌌다. "너 요즘 밤마다 어디 가?" 대답 대신 문을 열어 줬다.` });
  const i = await UI.choose([{ t: '보낸다' }, { t: '붙잡는다', d: '한 번만 더' }, { t: '못 가게 한다', d: '아는 게 너무 많다', red: 1 }]);
  if (i === 2) { await killPartner(); return; }
  if (i === 1 && roll(.3, 'cha')) { L.warmth = 0; UI.diary(`${L.name}${josa(L.name, '이', '가')} 가방을 내려놓았다. 마지막이라고 했다.`, 'love'); await UI.next(1800); return; }
  if (L.knows) { S.police = clamp(S.police + 10, 0, 100); }
  UI.diary(`${L.name}${josa(L.name, '이', '가')} 떠났다. 방이 넓어졌다.`, 'love');
  endLove('left');
  await UI.next(1800);
}

// ================================================================== daily life
const LIFE_EVENTS = [
  { k: 'bus', w: 2, when: S => AGE() >= 18 && AGE() <= 65, run: async S => {
    await UI.scene({ img: 'life_bus', vcap: '막차', cap: '창에 비친 내 얼굴이 없었다. 검은 덩어리만 앉아 있었다. 옆자리 사람이 내 어깨에 기대 잠들었다.', amb: 'amb_rain' });
    const i = await UI.choose([{ t: '어깨를 빌려준다', d: '정류장까지' }, { t: '유리에 입김을 분다', d: '얼굴을 그려 본다' }, { t: '그 사람의 지갑을 본다', d: '주소를 외운다', red: 1 }]);
    if (i === 0) { S.susp = clamp(S.susp - 3, 0, 100); UI.diary('모르는 사람이 내 어깨에서 잤다. 깨우지 않았다.'); }
    else if (i === 1) { UI.diary('입김 위에 얼굴을 그렸다. 금방 사라졌다.'); }
    else { S.flags.busTarget = 1; S.urge = clamp(S.urge + 6, 0, 100); UI.diary('옆자리 사람 주소를 외웠다. 302호.', 'red'); }
    await UI.next(2000);
  } },
  { k: 'coworker', w: 3, when: S => S.job && AGE() >= 19 && AGE() <= 60, run: async S => {
    await UI.scene({ img: 'life_coworker', vcap: '회식', cap: '반장이 잔을 채웠다. "요즘 왜 그렇게 말랐어? 얼굴이 사람 같지가 않아." 웃음소리. 하나만 웃지 않았다.', snd: 'whisper', vol: .3 });
    const i = await UI.choose([{ t: '웃으며 잔을 비운다', d: '"야근이 많아서요."' }, { t: '먼저 일어난다', d: '' }, { t: '웃지 않는 동료의 눈을 똑바로 본다', d: '', red: 1 }]);
    if (i === 0) { if (roll(.45, 'cha')) { S.susp = clamp(S.susp - 7, 0, 100); UI.diary('회식. 반장이 내 어깨를 두드렸다. 좋은 사람이라고 했다.'); } else { S.susp = clamp(S.susp + 3, 0, 100); UI.diary('웃는 타이밍이 늦었다.'); } }
    else if (i === 1) { S.susp = clamp(S.susp + 4, 0, 100); UI.diary('먼저 일어났다. 등 뒤에서 말소리가 작아졌다.'); }
    else { if (roll(.35, 'cal')) { S.susp = clamp(S.susp - 2, 0, 100); UI.diary('그 동료가 먼저 눈을 내렸다. 그 뒤로 나를 피한다.'); } else { S.susp = clamp(S.susp + 8, 0, 100); S.flags.coworkerEye = 1; UI.diary('그 동료는 눈을 피하지 않았다. 뭔가 안다.', 'red'); } }
    await UI.next(2000);
  } },
  { k: 'cat', w: 2, when: S => !S.flags.cat && AGE() >= 18, run: async S => {
    S.flags.cat = 1;
    await UI.scene({ img: 'life_cat', vcap: '창문', cap: '창살 사이로 고양이가 들어왔다. 비쩍 말랐다. 나를 오래 봤다. 사람이 아니라서 괜찮았다.' });
    const i = await UI.choose([{ t: '북어를 준다', d: '매일 올 것이다' }, { t: '창을 닫는다' }, { t: '손을 뻗는다', d: '목이 가늘다', red: 1 }]);
    if (i === 0) { S.flags.catFed = 1; S.susp = clamp(S.susp - 4, 0, 100); UI.diary('고양이가 매일 온다. 이웃이 착한 사람이라고 했다.'); }
    else if (i === 1) UI.diary('창을 닫았다. 고양이는 사흘을 더 왔다.');
    else { bump({ cru: 1 }); S.urge = clamp(S.urge - 8, 0, 100); UI.diary('고양이는 다시 오지 않았다. 창살에 털이 남았다.', 'red'); }
    await UI.next(2000);
  } },
  { k: 'photo', w: 2, when: S => !S.flags.photo && AGE() >= 22 && AGE() <= 55, run: async S => {
    S.flags.photo = 1;
    await UI.scene({ img: 'life_photo', vcap: '취미', cap: '중고 카메라를 샀다. 사람들의 뒷모습을 찍었다. 뒷모습은 거짓말을 못 한다. 누가 혼자 사는지가 보인다.', ins: ['i_list'] });
    const i = await UI.choose([{ t: '계속 찍는다', d: '사냥이 쉬워진다. 사진은 증거가 된다' }, { t: '카메라를 판다' }]);
    if (i === 0) { S.flags.photoUse = 1; bump({ int: 1 }); UI.diary('신발 상자 하나가 뒷모습으로 찼다.'); }
    else UI.diary('카메라를 팔았다. 눈으로 찍는다.');
    await UI.next(2000);
  } },
  { k: 'car', w: 3, when: S => !S.car && AGE() >= 23 && AGE() <= 55 && S.job !== 'taxi', run: async S => {
    await UI.scene({ img: 'city_day', vcap: '중고차', cap: '공장 앞에 중고 포니가 나왔다. 트렁크가 넓었다. 그 생각부터 했다.' });
    const i = await UI.choose([{ t: '산다', d: '멀리 갈 수 있다. 번호판은 기억된다' }, { t: '사지 않는다' }]);
    if (i === 0) { S.car = true; UI.diary('차를 샀다. 트렁크에 담요를 깔았다.'); } else UI.diary('걷는 게 낫다. 발자국은 비가 지운다.');
    await UI.next(1800);
  } },
  { k: 'jobchange', w: 1, when: S => S.job && AGE() >= 25 && AGE() <= 52 && !S.flags.jobchange, run: async S => {
    S.flags.jobchange = 1;
    await UI.scene({ img: D.JOBS[S.job].img, vcap: '해고', cap: `${D.JOBS[S.job].t}${josa(D.JOBS[S.job].t, '이', '가')} 문을 닫았다. 열쇠를 반납했다. 하나는 돌려주지 않았다.` });
    const keys = Object.keys(D.JOBS).filter(k => k !== S.job);
    const i = await UI.choose(keys.map(k => ({ t: D.JOBS[k].t, d: D.JOBS[k].d })), { title: '새 일자리' });
    S.job = keys[i]; if (D.JOBS[S.job].car) S.car = true; bump(D.JOBS[S.job].mod);
    UI.diary(`${D.JOBS[S.job].t}. 다시 밤에 일한다.`);
    await UI.next(1800);
  } },
  { k: 'cctv', w: 2, when: S => YEAR() >= 2004 && S.victims.length >= 1 && !S.flags.cctvAware, run: async S => {
    await UI.scene({ img: 'p_cctv', vcap: 'CCTV', cap: '골목 전봇대에 카메라가 달렸다. 빨간 불. 내 집에서 큰길까지 네 대.', ins: ['i_eye'] });
    const i = await UI.choose([{ t: '카메라 없는 길을 외운다', d: '뒷산 쪽. 20분 더 걸린다' }, { t: '상관하지 않는다' }]);
    if (i === 0) { S.flags.cctvAware = 1; UI.diary('카메라 없는 길. 뒷산 쪽으로 20분.'); } else UI.diary('카메라는 얼굴을 못 본다. 모자를 샀다.');
    await UI.next(1800);
  } },
  { k: 'quietLove', w: 2, when: S => S.love && S.love.stage >= 1, run: async S => {
    const L = S.love;
    UI.diary(pick([`${L.name}${josa(L.name, '과', '와')} 시장에 갔다. 생선 가게 앞에서 오래 서 있었다.`, `${L.name}${josa(L.name, '이', '가')} 내 방 커튼을 바꿨다. 빛이 들어온다. 싫지 않았다.`, `${L.name}${josa(L.name, '이', '가')} 잠꼬대로 내 이름을 불렀다.`, `영화를 봤다. ${L.name}${josa(L.name, '은', '는')} 울었고 나는 화면 속 칼을 봤다.`, `${L.name}${josa(L.name, '이', '가')} 끓인 찌개. 피 냄새가 안 나는 저녁.`]), 'love');
    if (chance(.5)) await UI.scene({ img: PIMG(pick(['meet', 'walk'])), vcap: '', cap: '' });
  } },
];

// ================================================================== police evasion
const EVADE_EVENTS = [
  { k: 'tail', w: 5, when: S => S.police >= 55 && (S.flags.tailCool == null || S.t - S.flags.tailCool >= 6), run: async S => {
    S.flags.tailCool = S.t;
    const det = others('det'), dn = det && !det.dead ? det.name : '형사';
    await UI.scene({ img: 'p_tail', trans: 'cut', vcap: '미행', cap: `쇼윈도에 비친 골목. 열 걸음 뒤에 ${dn}. 담배도 피우지 않고 서 있다.`, snd: 'step2', amb: 'amb_rain' });
    const i = await UI.choose([
      { t: '골목으로 꺾어 따돌린다', d: '뒷길을 안다', risk: { note: trait('int') >= 3 ? '될 것 같다' : '어렵다' } },
      { t: '택시를 잡는다', d: '', risk: { note: '기사가 기억한다' } },
      { t: '돌아서서 인사한다', d: '"형사님, 커피 한잔하시죠."', risk: { note: '냉정해야 한다' } },
      { t: '집으로 곧장 간다', d: '숨길 게 없는 사람처럼' },
    ]);
    if (i === 0) { if (roll(.3, 'int', .1)) { S.police = clamp(S.police - 5, 0, 100); UI.diary(`뒷골목 세 번. ${dn}${josa(dn, '을', '를')} 떼어 냈다.`); } else { S.police = clamp(S.police + 7, 0, 100); UI.diary('따돌리려 한 게 더 수상했다. 다음 날 수사관이 둘로 늘었다.', 'red'); } }
    else if (i === 1) { S.police = clamp(S.police + 2, 0, 100); UI.diary('택시를 탔다. 기사가 백미러로 나를 봤다.'); }
    else if (i === 2) { if (roll(.3, 'cal', .1)) { S.police = clamp(S.police - 9, 0, 100); UI.diary(`${dn}${josa(dn, '이', '가')} 당황했다. 커피는 내가 샀다.`); } else { S.police = clamp(S.police + 8, 0, 100); UI.diary(`"어떻게 아셨습니까, 제가 따라온 걸." ${dn}${josa(dn, '이', '가')} 웃지 않았다.`, 'red'); } }
    else { UI.diary('집까지 걸었다. 뒤돌아보지 않았다. 문 앞에서 발소리가 멈췄다.'); }
    await UI.next(2200);
  } },
  { k: 'coffee', w: 4, when: S => S.police >= 60 && others('det') && !others('det').dead && !S.flags.coffee && AGE() >= 27, run: async S => {
    S.flags.coffee = 1;
    const det = others('det');
    await UI.scene({ img: 'p_coffee', trans: 'ink', vcap: '새벽 다섯 시', cap: `${det.name}${josa(det.name, '이', '가')} 커피를 저었다. "저도 그날 태어났습니다. 같은 병원. 재밌죠." 서류철을 열지 않았다.`, snd: 'amb_rain', vol: .3, ins: ['i_cig'] });
    const i = await UI.choose([
      { t: '잠자코 듣는다', d: '눈을 피하지 않는다' },
      { t: '"증거 있으면 체포하시죠."', d: '먼저 찌른다' },
      { t: '커피값을 낸다', d: '"형사님 커피는 제가."' },
      { t: '"그 병원, 지금은 없어졌죠."', d: '같은 날 얘기를 받아 준다' },
    ]);
    if (i === 0) { if (roll(.4, 'cal')) { S.police = clamp(S.police - 6, 0, 100); UI.diary(`${det.name}${josa(det.name, '이', '가')} 한 시간을 말하고 일어섰다. 내가 한 말은 "네" 두 번.`); } else { S.police = clamp(S.police + 5, 0, 100); UI.diary('손이 컵을 너무 꽉 쥐었다. 그걸 봤다.', 'red'); } }
    else if (i === 1) { S.police = clamp(S.police + 6, 0, 100); UI.diary(`"있으면 여기 안 왔죠." ${det.name}${josa(det.name, '이', '가')} 웃었다. 그게 더 무서웠다.`, 'red'); }
    else if (i === 2) { if (roll(.35, 'cha')) { S.police = clamp(S.police - 4, 0, 100); UI.diary('커피값을 냈다. 형사가 고맙다고 했다. 진심 같았다.'); } else { S.police = clamp(S.police + 3, 0, 100); UI.diary('커피값을 냈다. 형사는 거스름돈을 챙기지 않았다. 영수증을 챙겼다.'); } }
    else { S.police = clamp(S.police - 3, 0, 100); det.life.push([AGE(), '용의자와 커피를 마셨다. 같은 날 태어난 사람.']); UI.diary(`${det.name}${josa(det.name, '과', '와')} 없어진 병원 얘기를 했다. 잠깐, 둘 다 그냥 사람이었다.`); }
    await UI.next(2400);
  } },
  { k: 'freezerHeat', w: 4, when: S => S.trophies > 0 && S.police >= 50 && !S.flags.truckAsk, run: async S => {
    S.flags.truckAsk = 1;
    await UI.scene({ img: 'x_freezer', vcap: '', cap: '수사망이 좁혀진다. 냉동고가 웅웅거린다. 집을 뒤지면 끝이다.', snd: 'freezer' });
    const i = await UI.choose([{ t: '냉동고를 통째로 옮긴다', d: '트럭. 밤. 이웃 창문', risk: { eye: 2 } }, { t: '비운다', d: '저수지로' }, { t: '그냥 둔다', d: '영장은 아직 없다', red: 1 }]);
    if (i === 0) await moveFreezer(); else if (i === 1) await emptyFreezer(); else UI.diary('냉동고를 그냥 뒀다. 밤마다 뚜껑을 연다.', 'red');
    await UI.next(1200);
  } },
];

async function moveFreezer() {
  const S = G.S;
  await UI.scene({ img: 'p_truck', trans: 'cut', vcap: '새벽 두 시', cap: '냉동고는 사람 둘 무게였다. 안에 든 것까지 셋. 위층 커튼이 움직였다.', snd: 'bag', shake: 1 });
  if (chance(.45)) { S.susp = clamp(S.susp + 14, 0, 100); UI.diary('위층 여자가 냉동고를 봤다. "이사 가세요?"', 'red'); }
  await UI.next(2400);
  const k = pick(['reservoir', 'river']);
  await UI.scene({ img: D.DUMP[k].img, vcap: '', cap: '냉동고째 가라앉혔다. 거품이 오래 올라왔다.', snd: 'splash' });
  S.victims.filter(v => v.dump === 'keep').forEach(v => { v.dump = k; v.t = S.t; v.cut = 'whole'; });
  S.trophies = 0; S.homeTraces = Math.max(0, S.homeTraces - .5);
  UI.diary('냉동고가 없어진 자리에 먼지 네모가 남았다.');
  await UI.next(2000);
}

async function destroyEvidence() {
  const S = G.S;
  const can = S.evidence.filter(e => !e.expired && ['섬유', '혈흔', '물증', '차량'].includes(e.k));
  if (!can.length) return;
  await UI.scene({ img: 'x_burn', vcap: '증거', cap: `태울 수 있는 건 태운다. ${can.map(e => e.k).join(', ')}.`, snd: 'fire', ins: ['i_shoes'] });
  let n = 0;
  for (const e of can) {
    const ok = e.k === '섬유' ? .8 : e.k === '혈흔' ? .55 : e.k === '차량' ? .9 : .4;
    if (chance(ok)) { S.evidence = S.evidence.filter(x => x !== e); n++; if (e.k === '차량') S.car = false; }
  }
  S.police = clamp(S.police - 7 * n, 0, 100); S.susp = clamp(S.susp + 5, 0, 100);
  UI.diary(n ? `증거 ${n}개를 없앴다. 드럼통 연기를 누가 봤을까.` : '태웠지만 늦었다. 이미 그들 손에 있다.', n ? '' : 'red');
  await UI.next(2200);
}

async function frameSomeone() {
  const S = G.S;
  S.flags.framed = S.t;
  const n = rname('m');
  await UI.scene({ img: 'p_plant', trans: 'cut', vcap: '누명', cap: `옆 동 고물상 ${n}. 혼자 살고 전과가 있다. 그 집 창고 페인트 통 뒤에 칼을 두고 왔다.`, snd: 'step1', ins: ['i_blade'] });
  await UI.next(2400);
  if (roll(.25, 'int', .12)) {
    S.police = clamp(S.police - 25, 0, 100); S.heat += 20; S.flags.frameVictim = n;
    await UI.scene({ img: 'm_newspaper', vcap: '검거', cap: `「${S.nick || '연쇄 살인'}」 용의자 검거. ${n}(${rint(35, 55)}). 창고에서 흉기 발견.`, snd: 'typewriter' });
    UI.diary(`${n}${josa(n, '이', '가')} 잡혀갔다. 텔레비전에서 그가 울었다.`, 'red');
  } else {
    S.police = clamp(S.police + 18, 0, 100); addEv('물증', '고물상 창고의 칼에서 나온 제3자 흔적');
    await UI.scene({ img: 'p_interrogation', vcap: '', cap: `칼은 ${n}의 것이 아니었다. 그건 금방 밝혀졌다. 그럼 누가 놓았나. 형사가 나를 봤다.`, snd: 'buzz' });
    UI.diary('누명이 안 먹혔다. 칼이 나를 가리킨다.', 'red');
  }
  await UI.next(2400);
}

// ================================================================== hooks
const STORY_EVENTS = [...LOVE_EVENTS, ...LIFE_EVENTS, ...EVADE_EVENTS];

function storyActions(a) {
  const S = G.S;
  if (S.evidence.some(e => !e.expired && ['섬유', '혈흔', '물증', '차량'].includes(e.k))) a.push({ k: 'evidence', t: '증거를 없앤다', d: '태울 수 있는 것만. 연기를 누가 본다' });
  if (S.serial && S.police >= 45 && (S.flags.framed == null || S.t - S.flags.framed >= 20)) a.push({ k: 'frame', t: '누명을 씌운다', d: '옆 동 고물상. 머리가 좋아야 한다', red: 1 });
  if (S.love && S.love.stage >= 1 && !S.married) a.push({ k: 'date', t: `${S.love.name}${josa(S.love.name, '을', '를')} 만난다`, d: '굶주림이 조금 잦아든다. 의심도' });
}
async function storyRequest(r) {
  const S = G.S;
  if (r === 'evidence') { await destroyEvidence(); return true; }
  if (r === 'frame') { await frameSomeone(); return true; }
  if (r === 'date') {
    const L = S.love;
    await UI.scene({ img: PIMG(pick(['meet', 'walk'])), vcap: '', cap: pick([`${L.name}${josa(L.name, '과', '와')} 저녁을 먹었다. 평범한 사람의 저녁.`, `${L.name}${josa(L.name, '이', '가')} 내 손금을 봤다. "오래 살겠네." 웃었다.`, `강변. ${L.name}${josa(L.name, '은', '는')} 말이 많고 나는 듣는다. 그게 좋다.`]) });
    S.urge = clamp(S.urge - 6, 0, 100); S.susp = clamp(S.susp - 4, 0, 100); L.warmth += .5;
    UI.diary(`${L.name}${josa(L.name, '을', '를')} 만났다.`, 'love');
    await UI.next(2200);
    return true;
  }
  return false;
}
