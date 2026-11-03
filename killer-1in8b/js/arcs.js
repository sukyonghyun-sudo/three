// arcs: choices that come back years later. Six threads run through a life (the classmate who became a detective,
// letters to the paper, the child, the wrong man, the doctor, running), each with its own ending;
// chapter cards; "this will be remembered"; the endings collection
'use strict';

const nj = (w, a, b) => w + josa(w, a, b);
const KNUM = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구', '십', '십일', '십이'];

// ------------------------------------------------------------------ remembered choices
function remember(text) {
  const S = G.S;
  (S.marks = S.marks || []).push([AGE(), text]);
  cov('mark');
  const m = el('div', 'memo', `◆ ${text}`);
  $('#sfxbox').appendChild(m);
  SND.play('pen', .6);
  setTimeout(() => m.classList.add('out'), 3000);
  setTimeout(() => m.remove(), 3600);
}

// ------------------------------------------------------------------ chapter cards
async function chapter(title, line) {
  const S = G.S;
  S.chN = (S.chN || 0) + 1;
  (S.chapters = S.chapters || []).push([AGE(), title]);
  cov('ch:' + title);
  if (G.auto) return;
  const c = $('#chap');
  c.innerHTML = `<small>제${KNUM[S.chN] || S.chN}장</small><b>${title}</b><span>${line}</span>`;
  c.classList.remove('on'); void c.offsetWidth; c.classList.add('on');
  SND.play('sting', .55);
  await UI.next(3400);
  c.classList.remove('on');
}

async function chapterCheck(birthday) {
  const S = G.S, c = S.chap = S.chap || {}, age = AGE(), A = S.arc || {};
  const go = (k, t, line) => { c[k] = 1; return chapter(t, line); };
  if (!c.wake && birthday && age === 17) return go('wake', '눈뜨다', '열일곱. 손이 무엇을 원하는지 처음으로 알았다.');
  if (!c.first && S.victims.length >= 1) return go('first', '첫 번째', '그날 밤 이후로 나는 다른 것이 됐다.');
  if (!c.serial && S.serial) return go('serial', '이름이 생기다', `신문이 나를 「${S.nick}」이라고 불렀다.`);
  if (!c.family && S.married) return go('family', '가족', `${S.married.name}. 내 이름 옆에 다른 이름이 생겼다.`);
  if (!c.net && S.police >= 60) return go('net', '좁혀 오는 손', '발소리가 매일 조금씩 가까워진다.');
  if (!c.flee && A.flee) return go('flee', '도망자', '이제 모두가 내 얼굴을 안다.');
  if (!c.old && age >= 60) return go('old', '늙은 짐승', '손이 떨린다. 굶주림은 떨리지 않는다.');
}

// ------------------------------------------------------------------ the threads
// each beat runs once; `gap` = seasons since the previous beat of the same thread
const ARCS = [
  // ---- the classmate who became a detective
  { k: 'det1', child: true, when: (S, a) => a === 9 && !S.arc.det, run: async S => {
    const d = others('det');
    await UI.scene({ img: 'child_class', vcap: '아홉 살', cap: `같은 반에 ${d.name}${josa(d.name, '이', '가')} 있다. 같은 날 같은 병원에서 태어났다고 선생님이 말했다. 오늘 ${nj(d.name, '이', '가')} 상급생들에게 둘러싸였다.`, snd: 'whisper', vol: .4 });
    const i = await UI.choose([{ t: '끼어들어 도와준다', d: '맞는 건 처음이 아니다' }, { t: '구경한다' }, { t: '상급생들에게 그 애의 비밀을 일러 준다', d: '오줌을 쌌다는 것', red: 1 }], { title: '' });
    S.arc.det = ['friend', 'none', 'rival'][i];
    if (i === 0) { UI.diary(`${d.name} 대신 코피가 났다. ${nj(d.name, '이', '가')} 내 손을 잡고 보건실에 데려갔다.`); remember(`${nj(d.name, '은', '는')} 이 일을 평생 기억한다`); }
    else if (i === 2) { UI.diary(`그날부터 ${d.name}의 별명이 생겼다. ${nj(d.name, '이', '가')} 나를 봤다. 오래.`, 'red'); remember(`${nj(d.name, '은', '는')} 이 일을 평생 기억한다`); }
    else UI.diary('구경만 했다. 재미있었다.');
    d.life.push([9, i === 0 ? '같은 반 아이가 나를 도와줬다.' : i === 2 ? '같은 반 아이 때문에 놀림을 받았다.' : '상급생들에게 맞았다.']);
    await UI.next(2600);
  } },
  { k: 'det2', after: 'det1', gap: 4, when: (S, a) => a >= 27 && ['friend', 'rival'].includes(S.arc.det) && others('det') && !others('det').dead && S.victims.length >= 1, run: async S => {
    const d = others('det');
    if (S.arc.det === 'friend') {
      await UI.scene({ img: 'p_coffee', vcap: '동창회', cap: `${nj(d.name, '이', '가')} 먼저 알아보고 손을 흔들었다. “너 그때 나 도와준 애 맞지?” 그는 강력반 형사가 됐다.`, snd: 'step1' });
      const i = await UI.choose([{ t: '술을 사며 수사 얘기를 캐묻는다', d: '친구는 친구에게 말한다' }, { t: '적당히 웃고 일찍 일어난다' }], { title: '' });
      if (i === 0) { S.police = clamp(S.police - 10, 0, 100); S.arc.detInfo = 1; UI.diary(`${nj(d.name, '은', '는')} 취해서 다 말했다. 어디까지 알고 어디서 막혔는지.`); remember(`${nj(d.name, '은', '는')} 그날 한 말을 언젠가 후회한다`); }
      else UI.diary(`${d.name}. 좋은 놈이다. 아직도.`);
    } else {
      await UI.scene({ img: 'p_watch', vcap: '재회', cap: `동네 슈퍼에서 ${d.name}${josa(d.name, '과', '와')} 마주쳤다. 형사가 됐다고 했다. 그가 나를 오래 봤다. “너… 그때 그 애구나.”`, ins: ['i_cig'] });
      S.police = clamp(S.police + 5, 0, 100);
      const i = await UI.choose([{ t: '그때 일을 사과한다' }, { t: '웃는다', d: '그 별명을 불러 준다', red: 1 }], { title: '' });
      if (i === 0) { S.police = clamp(S.police - 3, 0, 100); UI.diary(`${nj(d.name, '은', '는')} 대답하지 않았다.`); }
      else { S.police = clamp(S.police + 6, 0, 100); S.arc.detGrudge = 1; UI.diary(`${d.name}의 귀가 빨개졌다. 그날부터 그가 내 사건만 판다는 소문이 돌았다.`, 'red'); remember(`${nj(d.name, '은', '는')} 이 웃음을 끝까지 쫓는다`); }
    }
    await UI.next(2400);
  } },
  { k: 'det3', after: 'det2', gap: 8, when: S => S.arc.det === 'friend' && S.serial && S.police >= 40 && others('det') && !others('det').dead, run: async S => {
    const d = others('det');
    await UI.scene({ img: 'city_night', vcap: '포장마차', cap: `${nj(d.name, '이', '가')} 술에 취해 털어놓았다. “범인이 이 동네 사람이야. 우리 또래. 냄새가 나.” 그의 눈이 잠깐 내 손에 머물렀다.`, snd: 'amb_rain', ins: ['i_cig'] });
    const i = await UI.choose([{ t: '다른 사람을 흘린다', d: '고물상 남자를 봤다고 한다' }, { t: '화제를 돌린다' }, { t: '집까지 바래다준다', d: '골목에서 둘만 남는다', red: 1 }], { title: '', time: 6000 });
    if (i === 0) { S.police = clamp(S.police - 15, 0, 100); S.arc.detLie = 1; UI.diary(`${nj(d.name, '은', '는')} 수첩에 고물상이라고 적었다. 고마워했다.`); remember(`${nj(d.name, '은', '는')} 이 거짓말을 언젠가 알게 된다`); }
    else if (i === 2) {
      cov('arc:killDet');
      await UI.scene({ img: 'k_alley_m', trans: 'red', vcap: '', cap: `${nj(d.name, '은', '는')} 마지막까지 웃고 있었다. 친구랑 걷는 줄 알았으니까.`, snd: 'stab1', shake: 2, splat: 2 });
      d.dead = true; d.killedByMe = true; d.status = '순직'; d.life.push([AGE(), '동창과 술을 마신 날 밤 실종됐다.']);
      S.victims.push({ name: d.name, sex: 'm', age: AGE(), job: '형사', t: S.t, year: YEAR(), site: 'here', cut: 'big', dump: pick(['mountain', 'reservoir']), reported: false, reportIn: 1, social: 3, found: false, trace: 1.2, seen: false, sameDay: true, parts: 1, partsFound: 0 });
      S.police = clamp(S.police + 18, 0, 100); S.urge = clamp(S.urge - 40, 0, 100); S.arc.det = 'killed';
      UI.diary(`${d.name}. 같은 날 태어난 친구. 하나 줄었다.`, 'red kill');
      remember('흑천경찰서 전체가 이 밤을 기억한다');
      UI.status(); UI.born();
    } else { S.police = clamp(S.police + 4, 0, 100); UI.diary(`${nj(d.name, '은', '는')} 계속 내 손을 봤다.`, 'red'); }
    await UI.next(2800);
  } },

  // ---- letters to the paper
  { k: 'let1', when: (S, a) => S.serial && a >= 20 && !S.arc.letter, run: async S => {
    await UI.scene({ img: 'a_letter', vcap: '편지', cap: `흑천일보가 「${S.nick}」 기사에서 나를 “겁 많은 짐승”이라고 썼다. 틀렸다.`, snd: 'pen' });
    const i = await UI.choose([{ t: '신문사에 편지를 쓴다', d: '틀린 걸 바로잡는다 · 필체가 남는다', red: 1 }, { t: '잊는다' }], { title: '' });
    if (i === 0) { S.arc.letter = 1; S.police = clamp(S.police + 4, 0, 100); S.urge = clamp(S.urge - 8, 0, 100); UI.diary('편지를 부쳤다. 다음 날 1면에 실렸다. 내 문장이.', 'red'); remember('흑천일보 사회부가 이 편지를 액자에 넣었다'); }
    else { S.arc.letter = -1; UI.diary('신문을 접었다. 손이 근질거렸다.'); }
    await UI.next(2400);
  } },
  { k: 'let2', after: 'let1', gap: 6, when: S => S.arc.letter === 1, run: async S => {
    const r = others('reporter'), rn = r && !r.dead ? r.name + ' 기자' : '사회부 기자';
    await UI.scene({ img: 'm_newspaper', vcap: '칼럼', cap: `${rn}의 칼럼. 「범인에게 묻는다. 왜 그들이었나.」 나에게 쓴 글이었다.`, ins: ['i_board'] });
    const i = await UI.choose([{ t: '답장을 쓴다 — 다음 장소를 암시한다', d: '흑천이 공포에 떤다', red: 1 }, { t: '답장을 쓴다 — 아무 단서 없이' }, { t: '이제 그만둔다' }], { title: '' });
    if (i === 0) { S.arc.letter = 2; S.police = clamp(S.police + 7, 0, 100); S.heat += 20; S.urge = clamp(S.urge - 12, 0, 100); UI.diary('그 동네 사람들이 밤에 나오지 않았다. 내 편지 한 장 때문에.', 'red'); remember(`${rn}${josa(rn, '은', '는')} 이 편지로 책을 쓴다`); }
    else if (i === 1) { S.arc.letter = 2; S.police = clamp(S.police + 2, 0, 100); UI.diary('답장을 보냈다. 연재가 시작됐다. 독자들이 나를 기다린다.'); remember(`${rn}${josa(rn, '은', '는')} 이 편지로 책을 쓴다`); }
    else { S.arc.letter = -1; UI.diary('편지를 그만뒀다. 신문은 금방 나를 잊었다.'); }
    if (r && i < 2) r.life.push([AGE(), '범인에게서 편지를 받았다.']);
    await UI.next(2400);
  } },
  { k: 'let3', after: 'let2', gap: 8, when: S => S.arc.letter === 2 && S.victims.length >= 3, run: async S => {
    await UI.scene({ img: 'm_tv', vcap: '특집', cap: `전국 방송 특집. 아나운서가 내 편지를 읽었다. 내 문장이 전국의 거실에 울렸다.`, snd: 'typewriter' });
    const i = await UI.choose([{ t: '마지막 편지 — 기념품을 동봉한다', d: '그들이 진짜라고 믿게', red: 1 }, { t: '침묵한다', d: '전설은 말이 없을 때 자란다' }], { title: '' });
    if (i === 0) { S.arc.letter = 3; S.police = clamp(S.police + 10, 0, 100); addEv('필적', '편지 다섯 통의 필적'); UI.diary('국과수가 편지 봉투의 침을 분석한다고 한다.', 'red'); remember('국과수 증거실이 이 봉투를 기억한다'); }
    else UI.diary('침묵했다. 방송은 나를 다섯 번 더 다뤘다.');
    await UI.next(2400);
  } },

  // ---- the child
  { k: 'kid1', when: S => S.kids && S.t - (S.kidT != null ? S.kidT : S.t) >= 24 && S.victims.length >= 2, run: async S => {
    const freezer = S.trophies > 0;
    await UI.scene({ img: freezer ? 'x_freezer' : 'home_banjiha', vcap: '새벽', ins: [freezer ? 'i_eye' : 'i_drain'], cap: freezer ? '부엌에서 냉동고 불빛이 새어 나왔다. 아이가 뚜껑을 열고 나를 돌아봤다.' : '욕실 불이 켜져 있었다. 아이가 배수구 덮개를 들고 나를 돌아봤다.', snd: 'freezer', vol: .5 });
    const i = await UI.choose([{ t: '“아무것도 아니야.” 닫고 안아 준다' }, { t: '아이 옆에 앉아 보여 준다', red: 1 }, { t: '소리를 지른다', d: '다시는 열지 못하게' }], { title: '', time: 6000 });
    S.arc.kid = ['hidden', 'shown', 'fear'][i < 0 ? 0 : i];
    UI.diary(['아이는 고개를 끄덕였다. 믿었는지는 모르겠다.', '아이는 울지 않았다. 오래 들여다봤다.', '아이가 오줌을 쌌다. 그날부터 나를 피한다.'][i < 0 ? 0 : i], i === 1 ? 'red' : '');
    remember('아이가 이 밤을 평생 기억한다');
    await UI.next(2400);
  } },
  { k: 'kid2', after: 'kid1', gap: 36, when: S => !!S.arc.kid, run: async S => {
    const A = S.arc;
    if (A.kid === 'shown') {
      await UI.scene({ img: 'i_gloves', vcap: '열다섯', cap: '아이가 내 장갑을 끼고 거울 앞에 서 있었다. 손가락이 이제 꼭 맞았다.' });
      const i = await UI.choose([{ t: '가르친다', red: 1 }, { t: '장갑을 빼앗는다' }], { title: '' });
      A.kid = i === 0 ? 'heir' : 'fear';
      UI.diary(i === 0 ? '아이에게 매듭 묶는 법을 가르쳤다.' : '장갑을 태웠다. 아이가 웃었다. 다른 장갑이 있다는 듯이.', 'red');
      if (i === 0) remember('흑천은 이 가르침을 다시 겪는다');
    } else if (A.kid === 'hidden') {
      await UI.scene({ img: 'life_photo', vcap: '열다섯', cap: `아이가 경찰대학 원서를 내밀었다. “나 형사 될 거야.”`, snd: 'page' });
      const i = await UI.choose([{ t: '도장을 찍어 준다' }, { t: '찢어 버린다', d: '“형사는 안 돼.”' }], { title: '' });
      A.kid = i === 0 ? 'cop' : 'hidden';
      if (i === 0) { UI.diary('도장을 찍었다. 손이 조금 떨렸다.'); remember('아이는 이 도장을 기억한다'); }
      else { addLife('bond', -10); UI.diary('아이가 방문을 잠갔다. 처음으로.'); }
    } else {
      await UI.scene({ img: 'home_banjiha', vcap: '가출', cap: '아이가 집을 나갔다. 식탁 위에 쪽지 한 장. 「다 알아.」', snd: 'page' });
      A.kid = 'gone'; S.susp = clamp(S.susp + 10, 0, 100); S.police = clamp(S.police + 6, 0, 100);
      UI.diary('아이가 집을 나갔다. 다 안다고 했다. 무엇을 아는지는 쓰지 않았다.', 'red');
      await UI.choose([{ t: '찾지 않는다' }], { title: '' });
    }
    await UI.next(2200);
  } },

  // ---- the wrong man
  { k: 'cop1', when: (S, a) => S.serial && S.police >= 25 && S.police < 85 && a >= 25 && !S.flags.wrong, run: async S => {
    S.flags.wrong = 1;
    const n = rname('m'), na = rint(30, 48);
    S.arc.scapeName = n;
    await UI.scene({ img: 'm_newspaper', vcap: '검거', cap: `「${S.nick}」 사건 용의자로 ${n}(${na}, 고물상)이 체포됐다. 자백했다고 한다. 그날 밤 나는 저수지에 있었다. 그는 아니다.`, ins: ['i_list'] });
    const i = await UI.choose([{ t: '아무 말도 하지 않는다', d: '수사가 끝난다' }, { t: '익명으로 그가 아니라고 제보한다', d: '그를 살린다 · 수사가 다시 시작된다' }], { title: '' });
    if (i === 0) { S.arc.scape = 1; S.police = clamp(S.police - 25, 0, 100); UI.diary(`${n}. 나 대신 들어갔다. 고마운 사람이다.`, 'red'); remember(`${n}의 어머니가 이 침묵을 기억한다`); }
    else { S.arc.saved = 1; S.police = clamp(S.police + 10, 0, 100); UI.diary(`${nj(n, '이', '가')} 풀려났다. 누가 자기를 살렸는지 모른다.`); remember(`${nj(n, '은', '는')} 누가 자기를 살렸는지 모른다`); }
    await UI.next(2600);
  } },
  { k: 'cop2', after: 'cop1', gap: 6, when: S => S.arc.scape === 1, run: async S => {
    const n = S.arc.scapeName;
    await UI.scene({ img: 'a_scapegoat', vcap: '선고', cap: `${n}의 선고 공판. 방청석 맨 뒷줄에 앉았다. 그가 뒤를 돌아 누군가를 찾았다.`, snd: 'whisper', vol: .5 });
    const i = await UI.choose([{ t: '끝까지 지켜본다' }, { t: '일어나서 “내가 했다”고 말한다', red: 1 }], { title: '', time: 7000 });
    if (i === 1) { cov('arc:courtroom'); await courtroomConfess(n); return; }
    S.arc.scape = 2;
    UI.diary(`${n}. 사형. 그의 어머니가 법정 바닥에 주저앉았다. 나는 버스를 타고 집에 왔다.`, 'red');
    await UI.next(2400);
  } },
  { k: 'cop3', after: 'cop2', gap: 20, when: S => S.arc.scape === 2, run: async S => {
    const n = S.arc.scapeName;
    SND.play('knock', 1);
    await UI.scene({ img: 'p_door', vcap: '탄원서', cap: `${n}의 어머니가 문을 두드렸다. 재심 탄원서 서명을 받으러 다닌다고 했다. “우리 애는 아니에요.”`, ins: ['i_knob'] });
    const i = await UI.choose([{ t: '서명한다' }, { t: '문을 닫는다' }], { title: '' });
    if (i === 0) { UI.diary(`서명했다. 내 이름 석 자. 그 어머니가 고맙다고 했다.`, 'red'); remember('그 어머니는 서명한 이웃들의 이름을 다 외운다'); }
    else { addLife('void', 10); UI.diary('문을 닫았다. 그 어머니는 다음 집 문을 두드렸다.'); }
    await UI.next(2400);
  } },

  // ---- the doctor
  { k: 'doc1', when: (S, a) => a >= 28 && S.urge >= 55 && S.victims.length >= 1 && !S.arc.heal, run: async S => {
    const d = others('doctor'), dn = d && !d.dead ? d.name : '정신과 의사';
    await UI.scene({ img: 'a_therapy', vcap: '진료실', cap: `정신건강의학과. ${d && !d.dead ? `의사 ${d.name}. 차트를 보더니 같은 날 태어났다며 웃었다.` : '의사가 안경을 고쳐 썼다.'} “무엇이 가장 힘드세요?”` });
    const i = await UI.choose([{ t: '“사람을 보면 손이 근질거려요.”', d: '반쯤 진실' }, { t: '“잠을 못 자요.”', d: '거짓말' }, { t: '진료실을 나온다' }], { title: '' });
    if (i === 2) { S.arc.heal = -1; UI.diary('진료실 문손잡이가 차가웠다. 다시 오지 않았다.'); await UI.next(1800); return; }
    S.arc.heal = i === 0 ? 2 : 1; S.arc.docName = dn;
    S.urge = clamp(S.urge - (i === 0 ? 18 : 8), 0, 100);
    UI.diary(i === 0 ? '약을 받았다. 손이 조금 조용해졌다.' : '수면제를 받았다. 잠은 왔다. 꿈도 왔다.');
    remember(`${nj(dn, '은', '는')} 당신의 차트를 오래 들여다본다`);
    if (d) d.life.push([AGE(), '같은 날 태어난 환자를 만났다.']);
    await UI.next(2200);
  } },
  { k: 'doc2', after: 'doc1', gap: 6, when: S => S.arc.heal >= 1, run: async S => {
    const dn = S.arc.docName;
    await UI.scene({ img: 'a_therapy', vcap: '상담', cap: `${nj(dn, '이', '가')} 펜을 내려놓았다. “혹시… 누군가를 해친 적이 있나요?”`, snd: 'buzz', vol: .4 });
    const i = await UI.choose([{ t: '고개를 젓는다' }, { t: '말한다. 전부', d: '처음으로 누군가에게', red: 1 }, { t: '다시는 오지 않는다' }], { title: '', time: 8000 });
    if (i === 1) {
      cov('arc:told');
      remember(`${nj(dn, '은', '는')} 이 고백을 평생 지고 간다`);
      if (chance(.5)) { S.police = clamp(S.police + 40, 0, 100); addEv('진술', `${dn}의 진술`); slam('신고했다'); UI.diary(`${nj(dn, '은', '는')} 비밀 유지 의무보다 다른 것을 골랐다.`, 'red'); }
      else { S.arc.heal = 3; S.urge = clamp(S.urge - 30, 0, 100); UI.diary(`${nj(dn, '은', '는')} 오래 울었다. 그리고 진료를 계속했다. 신고는 하지 않았다.`); }
    } else if (i === 2 || i < 0) { S.arc.heal = -1; UI.diary('약을 버렸다.'); }
    else UI.diary(`${nj(dn, '은', '는')} 고개를 끄덕였다. 차트에 무언가 적었다.`);
    await UI.next(2400);
  } },

  // ---- running
  { k: 'run1', when: S => S.arc.flee === 1, run: async S => {
    await UI.scene({ img: 'm_newspaper', vcap: '현상수배', cap: `수배 전단에 내 얼굴이 붙었다. 현상금 오천만 원. 편의점 유리에, 버스 정류장에, 내 집 앞 전봇대에.`, snd: 'page' });
    const i = await UI.choose([{ t: '불법 성형외과를 찾는다', d: '얼굴을 바꾼다 · 돈이 든다' }, { t: '밀항선을 알아본다', d: '바다 건너로' }, { t: '다리 밑에서 버틴다' }], { title: '' });
    if (i === 0) { S.arc.flee = 'face'; addLife('money', -35); UI.diary('붕대를 감은 채 여관방에서 한 달을 보냈다.'); remember('수술대의 의사는 붕대 아래 얼굴을 기억한다'); }
    else if (i === 1) { S.arc.flee = 'boat'; UI.diary('항구의 선장 하나가 돈만 맞으면 된다고 했다.'); }
    else { S.arc.flee = 'hide'; addLife('health', -20); S.police = clamp(S.police - 8, 0, 100); UI.diary('다리 밑. 신문지를 덮고 잤다. 내 얼굴이 실린 신문이었다.'); }
    await UI.next(2400);
  } },
  { k: 'run2', after: 'run1', gap: 3, when: S => S.arc.flee === 'face' || S.arc.flee === 'boat', run: async S => {
    if (S.arc.flee === 'face') {
      await UI.scene({ img: 'home_banjiha', vcap: '거울', cap: '붕대를 풀었다. 거울 속에 모르는 사람이 있다. 새 이름이 적힌 주민등록증.', snd: 'page' });
      const old = S.name;
      S.arc.oldName = old; S.name = rname(S.sex); S.arc.flee = 'new';
      S.police = 20; S.susp = 10; S.evidence.forEach(e => { if (e.k === '목격') e.expired = true; });
      UI.diary(`${old}${josa(old, '은', '는')} 죽었다. 나는 ${S.name}이다.`, 'red');
      remember(`지문만은 ${old}${josa(old, '을', '를')} 기억한다`);
      UI.status();
      await UI.next(2600);
      return;
    }
    await boatNight();
  } },
];

async function arcTick(birthday) {
  const S = G.S, age = AGE();
  S.arc = S.arc || {};
  for (const b of ARCS) {
    if (S.flags['arc_' + b.k] != null) continue;
    if (b.child && !(birthday && age < 18)) continue;
    if (!b.child && age < 18) continue;
    if (b.after && (S.flags['arc_' + b.after] == null || S.t - S.flags['arc_' + b.after] < b.gap)) continue;
    if (!b.when(S, age)) continue;
    if (!b.child && (S.t - (S.arcT || -99) < 6 || !chance(.5))) continue;
    S.flags['arc_' + b.k] = S.t; S.arcT = S.t;
    cov('arc:' + b.k);
    await b.run(S);
    return;
  }
}

// ------------------------------------------------------------------ finales
async function courtroomConfess(n) {
  const S = G.S;
  await UI.scene({ img: 'a_scapegoat', trans: 'flash', vcap: '', cap: `법정이 조용해졌다. ${nj(n, '이', '가')} 나를 봤다. 처음 보는 사람을 보는 눈으로. 판사가 의사봉을 내려놓았다.`, shake: 1 });
  await UI.next(3600);
  await courtAndCell('courtroom');
}

async function boatNight() {
  const S = G.S;
  await UI.scene({ img: 'a_boat', vcap: '밀항', cap: '새벽 세 시, 작은 항구. 선장이 등불을 흔들었다. “돈부터.”', snd: 'amb_rain' });
  const i = await UI.choose([{ t: '돈을 건넨다' }, { t: '선장을 덮치고 배를 빼앗는다', red: 1 }], { title: '', time: 6000 });
  if (i === 1) {
    if (await mgMash({ title: '선장을 제압한다', need: 18, dur: 4.5 })) { await epilogue('sea'); return; }
    await UI.scene({ img: 'a_boat', trans: 'red', vcap: '', cap: '선장이 먼저 칼을 꺼냈다. 등불이 바다로 떨어졌다.', shake: 2 });
    await UI.next(2600);
    await epilogue('sea');
    return;
  }
  if (chance(.6)) { await epilogue('abroad'); return; }
  SND.play('siren', 1);
  await UI.scene({ img: 'e_arrest', trans: 'flash', vcap: '해경', cap: '탐조등이 배를 비췄다. 선장이 나를 가리켰다. 처음부터 그럴 생각이었다.', shake: 2 });
  await UI.next(2600);
  await courtAndCell();
}

// arrest, but the thread decides who comes through the door. true = handled
async function arcArrest() {
  const S = G.S, A = S.arc || {}, d = others('det');
  if (G.withBags) return false;   // stopped on the road: no time for anyone's story
  if (A.kid === 'cop' && S.kids) {
    cov('arc:kidCop');
    SND.play('siren', 1);
    await UI.scene({ img: 'e_arrest', trans: 'flash', vcap: '검거', cap: '수갑을 채운 손이 떨렸다. 고개를 들었다. 내 아이였다. 경찰대 졸업식 때 맨 넥타이를 아직 매고 있었다.', shake: 1 });
    await UI.next(4200);
    await courtAndCell('kidCop');
    return true;
  }
  if (A.det === 'friend' && d && !d.dead && S.flags.arc_det2 != null && chance(A.detInfo ? .7 : .45)) {
    cov('arc:friendGun');
    await UI.scene({ img: 'a_friendgun', trans: 'flash', vcap: '옥상', cap: `${nj(d.name, '이', '가')} 혼자 왔다. 총구가 떨렸다. 주머니에서 낡은 단체 사진이 비죽 나와 있었다.${A.detLie ? ' “고물상 아저씨, 다시 조사했어. 너였어.”' : ''}`, snd: 'amb_rain', shake: 1 });
    const i = await UI.choose([{ t: '“그때 너 도와준 거, 기억나?”' }, { t: '손을 든다' }, { t: '총구를 향해 걸어간다', red: 1 }], { title: '', time: 7000 });
    if (i === 2 || i < 0) { SND.play('gunshot', 1); await UI.scene({ img: 'a_friendgun', trans: 'red', vcap: '', cap: '탕. 그는 쏘고 나서야 울었다. 빗물이 내 눈으로 들어왔다.', shake: 2, splat: 2 }); await UI.next(4200); await ending('friendShot'); return true; }
    if (i === 0 && chance(A.detLie ? .15 : .55)) {
      await UI.scene({ img: 'a_friendgun', vcap: '', cap: `${nj(d.name, '이', '가')} 총을 내렸다. “가. 다시는 내 눈앞에 나타나지 마.” 다음 날 그는 사표를 냈다.` });
      await UI.next(4200);
      await ending('vanish');
      return true;
    }
    await UI.scene({ img: 'e_arrest', vcap: '', cap: `${nj(d.name, '이', '가')} 직접 수갑을 채웠다. 한마디도 하지 않았다. 손목에 닿은 그의 손이 차가웠다.` });
    await UI.next(3600);
    await courtAndCell('friendCuff');
    return true;
  }
  return false;
}

// court: the thread can name the sentence
function arcCourtKind() {
  const A = G.S.arc || {};
  if (A.letter >= 2) return 'letter';
  return null;
}

// dying old: which story was this
async function oldEnding() {
  const S = G.S, A = S.arc || {};
  const base = !S.victims.length ? 'none' : S.police >= 70 ? 'nocase' : 'unsolved';
  if (base === 'none') { const h = happyKind(S); return h ? epilogue(h) : ending('none'); }
  if (A.kid === 'heir') return epilogue('heir');
  if (A.scape === 2 || A.scape === 1) return epilogue('scapegoat');
  if (A.flee === 'new') return epilogue('newname');
  if (A.letter >= 2) return epilogue('legend');
  if (S.kids && A.kid !== 'heir' && chance(.6)) return epilogue('diary');
  if (S.t - S.lastHunt >= 80) return epilogue('stopped');
  return ending(base);
}

const EPI = {
  heir: [['e_funeral', '장례식에서 아이는 울지 않았다. 내 장갑을 끼고 있었다.'], ['city_night', '이듬해 봄, 흑천에서 다시 사람이 사라지기 시작했다. 같은 매듭. 같은 저수지.']],
  scapegoat: [['a_scapegoat', () => `${G.S.arc.scapeName}${josa(G.S.arc.scapeName, '은', '는')} 교도소에서 늙어 죽었다. 재심 청구는 세 번 기각됐다.`], ['e_funeral', '내 장례식에 그의 어머니가 왔다. 이웃이었으니까. 국화를 놓고 고개를 숙였다.']],
  newname: [['e_oldbed', () => `${G.S.name}. 다른 이름으로 늙었다. 아무도 ${G.S.arc.oldName}${josa(G.S.arc.oldName, '을', '를')} 찾지 않았다.`], ['p_forensic', '시신의 지문을 조회한 검시관이 의자에서 일어났다. 삼십 년 묵은 수배자.']],
  legend: [['m_tv', '편지는 다큐멘터리 열두 편과 책 세 권이 됐다. 범인의 정체에 대한 가설은 마흔 개가 넘는다.'], ['e_funeral', '그 마흔 개 중에 내 이름은 없었다.']],
  diary: [['e_funeral', '장례식이 끝나고 아이가 내 방을 정리했다.'], ['a_diary', '서랍 맨 아래, 일기장이 있었다. 날짜와 이름과 장소. 아이는 그날 밤 경찰서로 갔다.']],
  stopped: [['e_oldbed', () => `마지막 그날 이후 ${Math.floor((G.S.t - G.S.lastHunt) / 4)}년. 아무도 죽이지 않았다. 매년 그날이면 저수지에 갔다.`], ['x_reservoir', '물은 아무것도 돌려주지 않았다. 나도 아무것도 돌려주지 않았다.']],
  abroad: [['a_boat', '배는 사흘 밤을 달렸다. 바다 건너 낯선 항구에서 새 이름을 샀다.'], ['city_night', '흑천의 수배 전단은 비에 젖어 떨어졌다. 아무도 다시 붙이지 않았다.']],
  sea: [['a_boat', '밤바다. 등불도 없이. 엔진이 멈췄다.'], ['x_river', '배는 사흘 뒤 빈 채로 발견됐다. 나는 발견되지 않았다. 내가 버린 것들처럼.']],
};
async function epilogue(kind) {
  cov('epi:' + kind);
  for (const [img, cap] of EPI[kind]) {
    await UI.scene({ img, trans: 'ink', vcap: '그 후', cap: typeof cap === 'function' ? cap() : cap, snd: 'whisper', vol: .25 });
    await UI.next(4200);
  }
  await ending(kind);
}

// ------------------------------------------------------------------ the endings collection
function endingsSeen() { try { return JSON.parse(localStorage.getItem('k8b_ends')) || []; } catch (e) { return []; } }
function markEnding(kind) {
  const a = endingsSeen(), isNew = !a.includes(kind);
  if (isNew && !G.auto) { a.push(kind); try { localStorage.setItem('k8b_ends', JSON.stringify(a)); } catch (e) {} }
  return isNew;
}
