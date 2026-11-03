// simulation + flow
'use strict';

const G = { S: null, speed: 1, auto: false, skipType: false, request: null, fast: false };
const R = () => Math.random();
const chance = p => Math.random() < p;
const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pick = a => a[Math.floor(Math.random() * a.length)];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const fill = (s, o) => s.replace(/\{(\w+)\}/g, (_, k) => o[k] != null ? o[k] : '');
const josa = (w, a, b) => { const c = w.charCodeAt(w.length - 1) - 0xac00; return (c >= 0 && c % 28) ? a : b; };

function yearOf(t) { const S = G.S; return S.born.y + Math.floor((S.born.q + t) / 4); }
function seasonOf(t) { return (G.S.born.q + t) % 4; }
function ageOf(t) { return Math.floor(t / 4); }
const AGE = () => ageOf(G.S.t);
const YEAR = () => yearOf(G.S.t);

function rname(sex) { return pick(D.SUR) + pick(sex === 'f' ? D.NAME_F : D.NAME_M); }

// ================================================================== new life
function newLife() {
  const sex = chance(.5) ? 'm' : 'f';
  const fam = pick(D.FAMILIES);
  const tr = {};
  D.TRAITS.forEach(([k]) => tr[k] = rint(0, 2));
  Object.entries(fam.mod).forEach(([k, v]) => tr[k] += v);
  const y = rint(1948, 1988);
  const q = rint(0, 3);
  const born = { y, q, m: [rint(3, 5), rint(6, 8), rint(9, 11), pick([12, 1, 2])][q], d: rint(1, 28), h: rint(0, 23), mi: rint(0, 59) };
  if (born.m < 3) born.y = y; // winter babies keep the year for simplicity
  const usedFaces = new Set();
  const face = s => { let f; do { f = `face_${s}${String(rint(0, 15)).padStart(2, '0')}`; } while (usedFaces.has(f)); usedFaces.add(f); return f; };
  const rest = ['reporter', 'doctor', 'abroad', 'spouse', 'early'].sort(() => R() - .5).slice(0, 2);
  const roles = ['det', 'target', ...rest].sort(() => R() - .5);
  const others = roles.map(role => {
    const s = role === 'spouse' ? (sex === 'm' ? 'f' : 'm') : role === 'det' ? 'm' : (chance(.5) ? 'm' : 'f');
    return { role, sex: s, name: rname(s), face: role === 'det' ? 'face_det' : face(s), dead: false, status: '', life: [], killedByMe: false };
  });
  return {
    v: 1, sex, name: rname(sex), family: fam.k, tr, born, t: 0, district: pick(D.DISTRICTS),
    job: null, car: false, married: null, kids: 0,
    urge: 0, susp: 0, police: 0, heat: 0,
    victims: [], evidence: [], serial: false, nick: null,
    trophies: 0, homeTraces: 0, alibiT: -99, lastHunt: -99, lastMove: -99, lastInterrog: -99,
    others, diary: [], flags: {}, idleImg: null, over: false, ending: null, montage: 0,
  };
}

// ================================================================== save
function save() { if (G.auto) return; try { localStorage.setItem('k8b_save', JSON.stringify(G.S)); } catch (e) {} }
function loadSave() { try { const s = JSON.parse(localStorage.getItem('k8b_save')); return s && !s.over ? s : null; } catch (e) { return null; } }
function clearSave() { try { localStorage.removeItem('k8b_save'); } catch (e) {} }
function records() { try { return JSON.parse(localStorage.getItem('k8b_records')) || []; } catch (e) { return []; } }
function addRecord(r) { if (G.auto) return; const a = records(); a.unshift(r); try { localStorage.setItem('k8b_records', JSON.stringify(a.slice(0, 30))); } catch (e) {} }

// ================================================================== helpers
const trait = k => G.S.tr[k];
function bump(mod) { Object.entries(mod).forEach(([k, v]) => G.S.tr[k] = clamp(G.S.tr[k] + v, 0, 5)); }
function hasJob(f) { const j = G.S.job && D.JOBS[G.S.job]; return !!(j && j[f]); }
function addEv(k, text) {
  const S = G.S;
  if (S.evidence.some(e => e.k === k && e.text === text)) return;
  S.evidence.push({ k, text, t: S.t });
  S.police = clamp(S.police + 6, 0, 100);
}
function strongEvidence() { return G.S.evidence.filter(e => !e.expired).length; }
function others(role) { return G.S.others.find(o => o.role === role); }
function who(v) { return v.old ? (v.sex === 'f' ? '노파' : '노인') : (v.sex === 'f' ? '그 여자' : '그 남자'); }

async function waitTick(ms) {
  G.est = (G.est || 0) + ms;
  if (G.auto) {
    document.title = `T:${G.S.t}:b${G.beats || 0}:age${AGE()}:u${Math.round(G.S.urge)}:p${Math.round(G.S.police)}`;
    G.log = (G.log || []).concat([`${Math.round(performance.now())} tick t=${G.S.t}`]).slice(-60);
    let pre = document.getElementById('dbglog'); if (!pre) { pre = document.createElement('pre'); pre.id = 'dbglog'; pre.style.display = 'none'; document.body.appendChild(pre); }
    pre.textContent = G.log.join(String.fromCharCode(10));
    return sleep(1);
  }
  let left = ms;
  while (left > 0) {
    await sleep(50);
    if (G.request) return;
    if (G.speed > 0 && !G.rotBlock && !document.hidden) left -= 50 * G.speed;
  }
}

// ================================================================== main loop
async function run() {
  const S = G.S;
  UI.show('play');
  UI.status(); UI.born(); UI.renderDiary(); UI.speedUI();
  SND.amb(AGE() < 17 ? 'amb_drone' : 'amb_drone', .35);
  if (S.t === 0) await birth();
  preload(['child_mother', 'child_father', 'child_bird', 'child_class', 'city_night', 'home_banjiha']);
  while (!S.over) {
    idleActions();
    await waitTick(AGE() < 17 ? 480 : 2200);
    if (S.over) break;
    if (G.auto && AGE() >= 18 && S.t - S.lastHunt >= 3 && (G.careful ? S.urge > 85 : chance(.12))) G.request = 'hunt';
    if (G.auto && !G.request && G.lastIdle && chance(.14)) {
      const ok = G.lastIdle.filter(o => !o.dis && o.k !== 'hunt' && (o.k !== 'confess' || chance(.03)));
      if (ok.length) G.request = pick(ok).k;
    }
    if (G.request) { const r = G.request; G.request = null; UI.clearIdle(); S.acted = S.acted || {}; S.acted[r] = S.t; cov('act:' + r); await request(r); if (S.over) break; }
    S.t++;
    S.hist = (S.hist || []).concat([[Math.round(S.urge), Math.round(S.police), Math.round(S.susp), 0]]).slice(-64);
    await season();
    UI.status(); UI.born(); UI.renderDiary();
    save();
  }
}

function idleActions() {
  const S = G.S;
  if (AGE() < 18 || S.over) { UI.clearIdle(); return; }
  const a = [];
  const used = k => S.acted && S.acted[k] != null && S.t - S.acted[k] < 3;
  const cool = S.t - S.lastHunt < 4;
  a.push({ k: 'hunt', t: '사냥하러 나간다', d: cool ? '아직 손에 냄새가 남았다' : `굶주림 ${Math.round(S.urge)}`, dis: cool, red: S.urge > 75 });
  if (S.t - S.lastMove >= 16) a.push({ k: 'move', t: '이 동네를 떠난다', d: '의심은 사라진다. 돈과 시간이 든다' });
  if (S.trophies > 0) a.push({ k: 'empty', t: '냉동고를 비운다', d: `${S.trophies}구가 들어 있다` });
  if (S.police >= 70) a.push({ k: 'confess', t: '자수한다', d: '끝낼 수 있다', red: 1 });
  storyActions(a);
  a.forEach(o => { if (o.k !== 'hunt' && used(o.k) && !o.dis) { o.dis = true; o.d = '얼마 전에 했다'; } });
  UI.idle(a);
}

async function request(r) {
  if (await storyRequest(r)) return;
  if (r === 'hunt') await hunt(false);
  else if (r === 'move') await moveAway();
  else if (r === 'empty') await emptyFreezer();
  else if (r === 'confess') await confess();
}

// ================================================================== birth
async function birth() {
  const S = G.S;
  const fam = D.FAMILIES.find(f => f.k === S.family);
  await UI.scene({ img: 'nursery', trans: 'cut', vcap: `새벽 ${S.born.h}시 ${S.born.mi}분`, cap: `${S.born.y}년 ${S.born.m}월 ${S.born.d}일. ${D.CITY} ${S.district}.`, snd: 'baby', amb: 'amb_drone' });
  await UI.next(3200);
  await UI.scene({ img: 'birth', vcap: '첫 숨', cap: '수많은 얼굴이 나를 들여다봤다. 아무도 내가 무엇인지 몰랐다.', ins: ['i_eye'] });
  await UI.next(3500);
  UI.diary(`${S.born.y}년 ${S.born.m}월 ${S.born.d}일 ${S.born.h}시 ${S.born.mi}분. 태어났다.`, '', '출생');
  UI.diary(fam.t + '. ' + fam.d);
  await card();
  UI.diary(`같은 날 같은 병원에서 넷이 더 태어났다.`);
  UI.born();
  await UI.choose([{ t: '첫 숨을 쉰다' }]);
}

async function card() {
  const S = G.S;
  const fam = D.FAMILIES.find(f => f.k === S.family);
  const c = $('#card');
  const tr = D.TRAITS.map(([k, t]) => `<div class="tr"><span>${t}</span><b>${'/'.repeat(S.tr[k]) || '·'}</b></div>`).join('');
  c.innerHTML = `<div class="ck">출생 기록</div>
    <div class="cn">${S.sex === 'm' ? '남' : '여'}아 · ${S.born.y}.${S.born.m}.${S.born.d}</div>
    <div class="cf">${fam.t}</div>
    <div class="ctr">${tr}</div>
    <div class="cs">80억 명 중 한 사람.<br>그리고 그중 단 한 명.</div>`;
  c.classList.add('on');
  SND.play('typewriter', .6);
  await UI.next(5200);
  c.classList.remove('on');
}

// ================================================================== season
async function season() {
  const S = G.S;
  const age = AGE(), birthday = S.t % 4 === 0;
  const sea = seasonOf(S.t);

  // ambience
  if (sea === 1 && chance(.5)) SND.amb('amb_rain', .4); else if (sea !== 1) SND.amb('amb_drone', .35);

  // same-day people
  if (birthday) for (const p of S.others) {
    if (p.dead) continue;
    const r = D.ROLES[p.role];
    for (const [a, txt] of r.life) if (a === age) {
      const line = fill(txt, { n: p.name });
      p.life.push([age, line]);
      if (p.role !== 'det' || age >= 20) p.status = r.tag || p.status;
      if (chance(.8)) UI.diary(line, 'hear');
    }
    if (r.dies === age) { p.dead = true; p.status = '사망'; p.life.push([age, '죽었다.']); }
    if (p.role === 'det' && age === 27) p.status = '형사';
  }

  // childhood / youth scripts
  if (birthday && age < 18) {
    let ran = false;
    for (const ev of D.CHILD) {
      if (ev.age !== age) continue;
      const ctx = { family: S.family, flags: S.flags, R };
      if (ev.when && !ev.when(ctx)) continue;
      await childEvent(ev);
      if (ev.img === 'child_rabbit') S.flags.rabbit = 1;
      ran = true;
      break;
    }
    if (!ran && D.CHILD_QUIET[age]) UI.flow(D.CHILD_QUIET[age]);
    if (age === 17) await awaken();
    return;
  }
  if (birthday && age === 18) { await chooseJob(); return; }

  if (age < 18) return;

  // hunger
  const trophyDamp = 1 - Math.min(.5, S.trophies * .18);
  const ageDamp = age >= 75 ? .2 : age >= 65 ? .45 : age >= 50 ? .75 : 1;
  S.urge = clamp(S.urge + (1.0 + trait('imp') * .7 + trait('cru') * .4) * trophyDamp * ageDamp - (S.love ? .5 : 0), 0, 100);
  await madness();

  // suspicion decays
  S.susp = clamp(S.susp - (S.married ? 1.8 : 1.2), 0, 100);
  S.heat = Math.max(0, S.heat - 2);

  await investigate();
  if (S.over) return;
  await eras();

  // thresholds
  if (S.police >= 100) {
    if (strongEvidence() >= 2) { await arrest(); return; }
    S.police = 91;
    if (!S.flags.noEvid) { S.flags.noEvid = 1; UI.diary('결정적인 증거가 없다고 했다. 그들은 기다린다. 내가 실수하기를.', 'red'); }
  }
  if (S.police >= 90 && (S.trophies > 0 || S.homeTraces > 1.2) && !S.flags.searched) { await homeSearch(); if (S.over) return; }
  if (S.police >= 80 && !S.flags.watch) { await watched(); }
  if (S.police >= 60 && S.t - S.lastInterrog >= 14) { await interrogation(); if (S.over) return; }
  if (S.police >= 40 && !S.flags.door) { await door(); }
  if (S.montage > 0) { await montage(); }
  if (S.susp >= 70 && !S.flags.tip) { S.flags.tip = 1; S.police = clamp(S.police + 12, 0, 100); UI.diary('누군가 경찰에 내 이름을 댔다.', 'red'); }
  if (S.susp < 50) S.flags.tip = 0;

  // death of old age
  if (age >= 61) {
    const p = Math.min(.5, (age - 60) * .0042 + (age >= 88 ? .15 : 0));
    if (chance(p) || age >= 95) { await dieOld(); return; }
  }

  // frenzy
  if (S.urge >= 100) { await frenzy(); return; }

  // random life events
  if (chance(.34)) await randomEvent();
  if (S.over) return;


  // every season leaves a line; birthdays get a short summary of the year
  if (birthday) UI.flow(digest(), 'hear');
  else if (!S.diary.length || S.diary[S.diary.length - 1].t !== S.t) {
    const pool = age >= 62 ? D.QUIET.old : S.urge > 75 ? D.QUIET.high : S.urge > 40 ? D.QUIET.mid : null;
    const ord = [...D.SEASON_LINE[seasonOf(S.t)], ...(S.job ? D.JOB_LINE[S.job] : [])];
    UI.flow(pool && chance(.5) ? pick(pool) : pick(ord), S.urge > 75 ? 'shake' : '');
  }
  if (chance(.28)) await idlePicture();
}

// not killing has a price: the hands shake, people notice, the walls start talking
async function madness() {
  const S = G.S, u = S.urge;
  if (u < 70 || AGE() < 18) return;
  if (u >= 70 && chance(.3)) { S.susp = clamp(S.susp + 2, 0, 100); }
  if (u >= 85 && chance(.35)) {
    const i = Math.floor(R() * 4);
    if (i === 0) { S.susp = clamp(S.susp + 5, 0, 100); UI.diary('손이 떨려 커피를 쏟았다. 사람들이 봤다.', 'shake'); }
    else if (i === 1) { S.susp = clamp(S.susp + 4, 0, 100); UI.diary('새벽에 벽을 쳤다. 아랫집이 올라왔다.', 'shake'); }
    else if (i === 2) {
      await UI.scene({ img: 'life_coworker', vcap: '', cap: '동료가 어깨를 쳤다. 그 손목을 꺾을 뻔했다. 모두가 조용해졌다.', snd: 'sting', vol: .4 });
      const j = await UI.choose([{ t: '사과한다', d: '' }, { t: '그 손목을 끝까지 꺾는다', d: '', red: 1 }]);
      if (j === 1) { S.susp = clamp(S.susp + 14, 0, 100); S.police = clamp(S.police + 4, 0, 100); S.urge = clamp(S.urge - 10, 0, 100); UI.diary('동료 손목을 부러뜨렸다. 반장이 경찰을 부를 뻔했다.', 'red'); }
      else { S.susp = clamp(S.susp + 6, 0, 100); UI.diary('사과했다. 아무도 내 눈을 보지 않았다.', 'shake'); }
      await UI.next(1800);
    } else {
      await UI.scene({ img: 'nightmare', trans: 'red', vcap: '', cap: '사흘째 못 잤다. 벽지 무늬가 얼굴이 됐다. 그 얼굴들이 숫자를 센다.', snd: 'whisper', vol: .6, ins: ['i_wallfaces'] });
      UI.diary('잠을 못 잔다. 벽이 숫자를 센다.', 'shake');
      await UI.next(2000);
    }
  }
  if (u >= 95 && chance(.5)) { bump({ cal: -1 }); S.flags.sloppy = S.t; UI.diary('손이 말을 안 듣는다. 다음엔 실수할 것이다.', 'red shake'); }
}

function digest() {
  const S = G.S, a = AGE();
  const who = S.married ? `${S.married.name}${josa(S.married.name, '과', '와')} 산다` : S.love ? `${S.love.name}${josa(S.love.name, '을', '를')} 만난다` : '혼자 산다';
  const job = S.job ? D.JOBS[S.job].t : '일 없음';
  const u = S.urge > 85 ? '견딜 수 없다' : S.urge > 60 ? '커지고 있다' : S.urge > 30 ? '조용히 자란다' : '잠잠하다';
  const p = S.police > 70 ? '바로 뒤에 있다' : S.police > 40 ? '좁혀 온다' : S.police > 10 ? '멀리 있다' : '아무것도 모른다';
  return `${a}살. ${job}. ${who}. 굶주림은 ${u}. 경찰은 ${p}.`;
}

async function idlePicture() {
  const S = G.S;
  const pool = ['home_banjiha', 'city_night'];
  if (S.job) pool.push(D.JOBS[S.job].img);
  if (S.married) pool.push('home_dinner', 'life_wedding');
  if (S.heat > 20) pool.push('m_tv', 'm_newspaper');
  if (S.susp > 50) pool.push('city_day', 'neighbor_whisper');
  if (S.police >= 80) pool.push('p_watch');
  if (AGE() >= 60) pool.push('life_old', 'life_old');
  if (S.trophies) pool.push('x_freezer');
  const k = pick(pool);
  await UI.scene({ img: k, vcap: '', cap: '' });
}

async function childEvent(ev) {
  await UI.scene({ img: ev.img, vcap: ev.cap, cap: ev.txt, ins: ev.img === 'child_bird' ? ['i_eye'] : ev.img === 'teen_knife' ? ['i_clock'] : null });
  const i = await UI.choose(ev.ch.map(c => ({ t: c[0] })));
  const c = ev.ch[i];
  bump(c[2]);
  UI.diary(c[1]);
  await UI.hcap(c[1]);
  await UI.next(2400);
  UI.hcap('');
}

async function awaken() {
  const S = G.S;
  await UI.scene({ img: 'city_night', vcap: '열일곱', cap: '그해 겨울, 처음으로 배가 고팠다. 밥으로는 채워지지 않는 쪽이.', snd: 'heartbeat' });
  UI.diary('배가 고프다. 밥으로는 안 되는 쪽이.', 'red');
  S.urge = 25;
  await UI.next(3500);
}

async function chooseJob() {
  const S = G.S;
  await UI.scene({ img: 'city_day', vcap: '열여덟', cap: '집을 나왔다. 일을 구해야 한다. 밤에 일하는 곳이면 좋겠다.' });
  const keys = Object.keys(D.JOBS);
  const i = await UI.choose(keys.map(k => ({ t: D.JOBS[k].t, d: D.JOBS[k].d })));
  const j = D.JOBS[keys[i]];
  S.job = keys[i];
  if (j.car) S.car = true;
  bump(j.mod);
  await UI.scene({ img: j.img, vcap: j.t, cap: j.d });
  UI.diary(`${j.t}에 들어갔다. ${j.d}`);
  await UI.next(3000);
  await UI.scene({ img: 'home_banjiha', vcap: '반지하', cap: '창문 높이로 사람들의 발목이 지나간다. 이 방이 마음에 들었다.' });
  UI.diary('반지하 방을 얻었다. 창밖으로 발목들이 지나간다.');
  await UI.next(2800);
}

// ================================================================== hunting
function genTarget(forceSameDay) {
  const S = G.S;
  const sd = S.others.find(o => o.role === 'target' && !o.dead && !o.met);
  if (sd && (forceSameDay || (AGE() >= 24 && chance(.32)))) {
    sd.met = true;
    return mkTarget(sd.sex, AGE(), sd.name, sd);
  }
  const old = chance(.16);
  const sex = chance(.55) ? 'f' : 'm';
  const age = old ? rint(62, 78) : rint(19, 52);
  return mkTarget(sex, age, rname(sex), null, old);
}
function mkTarget(sex, age, name, person, old = false) {
  const S = G.S;
  if (age >= 60) old = true;
  const spots = Object.entries(D.SPOTS).filter(([k, s]) => s.sex === sex && !!s.old === old && (!s.need || (s.need === 'taxi' ? hasJob('taxi') : S.car)));
  const [spotK] = spots.length ? pick(spots) : [sex === 'f' ? 'alley' : 'bar'];
  const liv = person ? D.LIVING[0] : pick(D.LIVING);
  const job = old ? pick(D.VJOB[sex === 'f' ? 'oldf' : 'oldm']) : pick(D.VJOB[sex]);
  return {
    name, sex, age, old, job, spot: spotK, liv: liv.t, social: liv.social, delay: rint(...liv.delay),
    strong: sex === 'm' && !old && age < 45, sameDay: !!person, person,
  };
}

async function hunt(forced) {
  const S = G.S;
  S.lastHunt = S.t;
  UI.clearIdle();
  SND.amb('amb_rain', .35);

  // pick
  let T;
  if (forced) T = genTarget(false);
  else {
    const cands = [genTarget(false), genTarget(false), genTarget(false)];
    if (AGE() >= 26 && S.others.some(o => o.role === 'target' && !o.dead && !o.met) && chance(.45)) cands[rint(0, 2)] = genTarget(true);
    preload(cands.map(c => D.SPOTS[c.spot].img));
    await UI.scene({ img: 'city_night', vcap: '밤', cap: '도시는 80억 분의 몇백만. 그중 오늘 밤 하나.', snd: 'step1' });
    const i = await UI.choose([
      ...cands.map(c => ({ t: `${c.name} · ${c.age}`, d: `${c.job} · ${D.SPOTS[c.spot].t}${c.sameDay ? ' · <b>나와 같은 날 태어났다</b>' : ''}`, risk: { note: c.delay >= 4 ? '찾는 사람이 없다' : '금방 찾을 것이다' } })),
      { t: '오늘은 돌아간다', d: '굶주림이 더 깊어진다' },
    ], { title: '누구로 할까' });
    if (i === 3) { S.urge = clamp(S.urge + 4, 0, 100); UI.diary('골목을 세 바퀴 돌고 돌아왔다. 이가 갈린다.'); return; }
    T = cands[i];
  }
  const sp = D.SPOTS[T.spot];
  const KI = Object.values(D.KILL_IMG).flatMap(o => o[T.sex] || []);
  preload([sp.img, ...KI, 'd_tub', 'd_sink', 'd_table', 'd_bags', 'i_gloves', 'i_eye', 'i_blade', 'i_mouth', 'i_vhand', 'i_saw', 'i_bagtie', 'i_tilefinger', 'i_clock', 'cleanup']);

  // approach
  const lines = [T.name, `${T.age} · ${T.job}`, T.liv];
  if (T.sameDay) lines.push('나랑 같은 날 태어났다');
  await UI.scene({ img: sp.img, vcap: sp.cap, cap: forced ? '참을 수 없다. 아무나.' : `${T.name}. ${sp.t}.`, mark: { img: sp.img, lines }, sfx: sp.sfx, snd: 'step2', ins: ['i_gloves'] });
  const hows = sp.how.filter(h => !D.HOW[h].car || S.car || T.spot === 'car' || T.spot === 'taxi');
  const pmod = (S.urge > 90 || forced ? -.12 : 0) + (AGE() >= 60 ? -.15 : 0) + (S.flags.watch && S.police >= 80 ? -.08 : 0);
  const opts = hows.map(h => {
    const H = D.HOW[h];
    let p = clamp(H.p(S.tr) + pmod - (T.strong && H.phys ? .08 : 0), .05, .95);
    const w = clamp(H.w + eraWitness() * (S.flags.cctvAware ? .5 : 1) + (S.police >= 80 ? .2 : 0) - (S.flags.photoUse ? .06 : 0) + (S.urge >= 90 ? .12 : 0), 0, .9);
    return { t: H.t, d: H.d, risk: { eye: Math.min(3, Math.round(w * 7)), note: p > .7 ? '확실하다' : p > .5 ? '될 것 같다' : '어렵다' }, h, p, w };
  });
  const oi = await UI.choose([...opts, { t: '그만둔다', d: '아직은 아무도 모른다' }], { title: '어떻게' });
  if (oi === opts.length) { UI.diary(`${T.name}. 놓아줬다. 오늘은.`); return; }
  const O = opts[oi], H = D.HOW[O.h];
  const seen = H.seen && chance(.55 + O.w * .4);

  if (!chance(O.p)) { await huntFail(T, O); return; }

  // site
  let siteK;
  if (O.h === 'knock') siteK = 'theirs';
  else {
    const sites = Object.keys(D.SITES).filter(k => {
      if (k === 'theirs') return false;
      if (k === 'car') return !!H.car;
      if (k === 'here') return !H.car;
      if (D.SITES[k].need === 'freezer') return hasJob('freezer');
      return true;
    });
    if (T.spot === 'motel') sites.unshift('motel');
    await UI.scene({ img: sp.img, vcap: '', cap: `${T.name}${josa(T.name, '은', '는')} 아직 모른다. 어디서 할까.`, keepIns: true });
    const si = await UI.choose(sites.map(k => {
      const s = k === 'motel' ? { t: '그 방 안에서', d: '얇은 벽. 옆방 텔레비전 소리.', w: .12 } : D.SITES[k];
      return { t: s.t, d: s.d, risk: { eye: Math.min(3, Math.round((s.w + (k === 'bath' && !S.car ? .1 : 0)) * 12)), drop: k === 'bath' || k === 'theirs' ? 2 : 1 } };
    }), { title: '어디서' });
    siteK = sites[si];
  }
  const site = siteK === 'motel' ? { w: .12 } : D.SITES[siteK];
  let witness = seen;
  if (['bath', 'ruin', 'freezer'].includes(siteK) && !S.car && chance(.1)) witness = true;
  if (chance(site.w * .5)) witness = true;

  // kill
  const kimgs = D.KILL_IMG[siteK] || D.KILL_IMG.here;
  const kimg = pick(T.old ? (kimgs['old' + T.sex] || kimgs[T.sex]) : kimgs[T.sex]);
  await UI.scene({ img: kimg, trans: 'cut', vcap: '', cap: `${T.name}${josa(T.name, '이', '가')} 돌아봤다.`, snd: T.sex === 'f' ? 'scream_f' : 'scream_m', vol: .6, ins: ['i_eye'], shake: 1 });
  const ki = await UI.choose([
    { t: '단숨에 끝낸다', d: '소리 없이. 빨리.', risk: { drop: 1 } },
    { t: '천천히', d: '하나도 놓치고 싶지 않다', risk: { drop: 2, note: '굶주림이 오래 잠잠해진다' }, red: 1 },
  ], { title: '' });
  const slow = ki === 1;
  if (T.strong && trait('str') <= 1 && chance(.08)) {
    if (chance(.12)) { await fightDeath(T); return; }
    addEv(YEAR() >= 1992 ? 'DNA' : '혈흔', `${T.name} 손톱 밑의 피`);
    UI.diary(`${T.name}${josa(T.name, '이', '가')} 내 팔을 물어뜯었다. 내 피가 그 입에 남았다.`, 'red');
  }
  const ktxt = S.victims.length === 0 ? D.KILL.first : fill(pick(D.KILL[slow ? 'slow' : 'fast']), { n: T.name, who: who(T) });
  await UI.scene({ img: kimg, trans: 'red', keepIns: true, vcap: '', cap: ktxt, snd: pick(['stab1', 'stab2', 'chop1']), shake: 2, splat: 2, sfx: slow ? '푸욱' : '콱', sfxBig: 1, ins: [pick(['i_mouth', 'i_vhand']), 'i_blade'] });
  setTimeout(() => SND.play('thud', .8), 900);
  await UI.next(4200);

  // dismember
  const cimg = siteK === 'bath' ? pick(['d_tub', 'd_tub', 'd_sink']) : siteK === 'theirs' ? 'd_sink' : siteK === 'car' ? 'd_bags' : 'd_table';
  await UI.scene({ img: cimg, vcap: '토막', cap: '이제부터가 진짜 일이다.', snd: 'drip', ins: ['i_saw'] });
  const ck = ['big', 'small', 'whole'];
  const cut = ck[await UI.choose(ck.map(k => ({ t: D.CUT[k].t, d: D.CUT[k].d, risk: { drop: k === 'small' ? 2 : 1, note: k === 'small' ? '발견돼도 누군지 모른다' : k === 'whole' ? '버릴 곳이 줄어든다' : '' } })), { title: '어떻게 나눌까' })];
  await UI.scene({ img: cimg, keepIns: true, vcap: '', cap: pick(D.CUT_TXT[cut]), snd: cut === 'whole' ? 'bag' : 'saw', sfx: cut === 'small' ? '쓱싹 쓱싹' : cut === 'big' ? '콰직' : '질질', shake: cut === 'whole' ? 0 : 1, ins: cut === 'whole' ? ['i_bagtie'] : ['i_bagtie', 'i_tilefinger'] });
  if (cut !== 'whole') setTimeout(() => SND.play(pick(['chop1', 'chop2', 'chop3']), .9), 1200);
  if (cut === 'small' && chance(.15 + (siteK === 'bath' ? .1 : 0))) { S.susp = clamp(S.susp + 10, 0, 100); UI.diary('새벽에 옆집에서 벽을 두드렸다. 톱질 소리.', 'red'); }
  await UI.next(3800);

  // dispose
  const yr = YEAR();
  const dks = Object.keys(D.DUMP).filter(k => {
    const d = D.DUMP[k];
    if (d.need === 'burner' && !hasJob('burner')) return false;
    if (d.era && (yr < d.era[0] || yr > d.era[1])) return false;
    if (d.small && cut !== 'small') return false;
    if (cut === 'whole' && !['reservoir', 'river', 'mountain', 'keep', 'concrete'].includes(k)) return false;
    return true;
  });
  const shown = dks.length > 4 ? dks.sort(() => R() - .5).slice(0, 4) : dks;
  preload(shown.map(k => D.DUMP[k].img));
  await UI.scene({ img: 'd_bags', vcap: '유기', cap: `봉투가 ${cut === 'small' ? '열한' : cut === 'big' ? '여섯' : '하나'} 개. 해 뜨기 전에.`, snd: 'bag', ins: ['i_clock'] });
  const di = await UI.choose(shown.map(k => {
    const d = D.DUMP[k];
    const pr = d.keep ? 0 : d.p * (d.summer || 1);
    return { t: d.t, d: d.d, risk: { eye: d.witness ? 1 : 0, note: d.keep ? '집을 뒤지면 끝' : pr > .05 ? '곧 떠오를 수도' : pr < .01 ? '오래 묻힌다' : '' } };
  }), { title: '어디에 버릴까' });
  const dk = shown[di], DD = D.DUMP[dk];
  preload(['home_banjiha', 'x_burn', 'i_drain', 'i_shoes', 'i_drip', 'i_foot']);
  await UI.scene({ img: DD.img, vcap: '', cap: pick(D.DUMP_TXT[dk]), snd: DD.snd, sfx: DD.sfx, ins: dk === 'reservoir' || dk === 'river' ? ['i_drip'] : dk === 'mountain' ? ['i_foot'] : dk === 'keep' ? ['i_bagtie'] : null });
  if (dk === 'burn' && chance(DD.witness)) { S.susp = clamp(S.susp + 12, 0, 100); UI.diary('동료가 소각로 냄새 이야기를 했다. 돼지라고 했다.', 'red'); }
  await UI.next(3800);

  // after
  const ak = Object.keys(D.AFTER);
  await UI.scene({ img: 'home_banjiha', vcap: '새벽', cap: '집에 돌아왔다. 아직 할 일이 남았다.', snd: 'drip' });
  const ai = await UI.choose(ak.map(k => ({ t: D.AFTER[k].t, d: D.AFTER[k].d })), { title: '해가 뜨기 전에' });
  const A = ak[ai];
  await UI.scene({ img: D.AFTER[A].img, vcap: '', cap: D.AFTER[A].d, ins: [D.AFTER[A].ins], snd: A === 'burn' ? 'fire' : A === 'scrub' ? 'drip' : null });
  await UI.next(2600);

  // record
  const v = {
    name: T.name, sex: T.sex, age: T.age, old: T.old, job: T.job, t: S.t, year: YEAR(), site: siteK, how: O.h, cut, dump: dk,
    reported: false, reportIn: T.delay, social: T.social, found: false, identified: false,
    trace: (slow ? 1.4 : 1) * (A === 'scrub' ? .5 : 1) * (hasJob('clean') ? .7 : 1) * (S.flags.sloppy != null && S.t - S.flags.sloppy < 4 ? 1.5 : 1),
    burned: A === 'burn', seen: witness, car: !!H.car, sameDay: T.sameDay, parts: dk === 'scatter' ? 3 : 1, partsFound: 0,
  };
  S.victims.push(v);
  if (S.love) S.love.hunts++;
  if (dk === 'keep') S.trophies++;
  if (siteK === 'bath') S.homeTraces += A === 'scrub' ? .4 : 1;
  if (A === 'alibi') S.alibiT = S.t;
  S.urge = clamp(S.urge - (slow ? 92 : 62) - (cut === 'small' ? 10 : 0), 0, 100);
  S.susp = clamp(S.susp + 4 + (witness ? 6 : 0), 0, 100);
  S.police = clamp(S.police + 2 + (witness ? 4 : 0), 0, 100);
  if (T.person) { T.person.dead = true; T.person.killedByMe = true; T.person.status = '실종'; T.person.life.push([AGE(), '실종됐다. 마지막으로 본 사람은 없다.']); }
  bump(slow && chance(.5) ? { cru: 1 } : {});
  if (S.hist && S.hist.length) S.hist[S.hist.length - 1][3] = 1;
  UI.diary(`${T.name}. ${T.age}. ${DD.s}.`, 'red kill');
  if (T.sameDay) UI.diary(`같은 날 태어난 사람이 하나 줄었다.`, 'red');
  UI.status(); UI.born(); UI.renderDiary();
  SND.amb('amb_drone', .35);
  UI.decal(1);
}

async function huntFail(T, O) {
  const S = G.S;
  cov('huntFail');
  const roll = R();
  if (roll < .6) {
    await UI.scene({ img: T.sex === 'f' && !T.old ? 'k_field_f' : 'city_night', trans: 'flash', vcap: '', cap: `${T.name}${josa(T.name, '이', '가')} 비명을 지르며 달아났다. 하나둘 켜지는 창문을 셌다. 일곱 개.`, snd: T.sex === 'f' ? 'scream_f' : 'scream_m', ins: ['i_mouth'], shake: 2, sfx: '꺄악', sfxBig: 1 });
    S.police = clamp(S.police + 10, 0, 100); S.susp = clamp(S.susp + 8, 0, 100);
    if (chance(.55)) S.montage = 1;
    UI.diary(`${T.name}. 놓쳤다. 얼굴을 봤을까.`, 'red');
    setTimeout(() => SND.play('siren', .7), 1500);
  } else if (roll < .85) {
    await UI.scene({ img: 'k_alley_m', trans: 'red', vcap: '', cap: `${T.name}${josa(T.name, '이', '가')} 몸부림쳤다. 손등이 찢어졌다. 내 피가 바닥에 떨어졌다.`, snd: 'thud', ins: ['i_vhand'], shake: 2 });
    addEv(YEAR() >= 1992 ? 'DNA' : '혈흔', `${YEAR()}년 미수 현장의 피`);
    S.police = clamp(S.police + 6, 0, 100);
    UI.diary('손등에 붕대를 감았다. 누가 물으면 공장에서 다쳤다고 할 것이다.', 'red');
    if (T.strong && trait('str') <= 1 && chance(.06)) { await fightDeath(T); return; }
  } else {
    await UI.scene({ img: 'city_night', trans: 'flash', vcap: '', cap: '골목 끝에서 누가 손전등을 비췄다. 돌아서서 걸었다. 뛰지 않았다.', snd: 'siren', vol: .5 });
    S.susp = clamp(S.susp + 5, 0, 100);
    UI.diary('들킬 뻔했다. 심장이 아직 뛴다.');
  }
  await UI.next(3200);
  S.urge = clamp(S.urge + 6, 0, 100);
  UI.status();
}

async function frenzy() {
  const S = G.S;
  await UI.scene({ img: 'nightmare', trans: 'red', vcap: '굶주림', cap: '참을 수 없다. 천장에서 얼굴들이 내려다본다. 누구라도. 지금.', snd: 'sting', shake: 2, ins: ['i_wallfaces'] });
  UI.diary('누구라도. 지금.', 'red shake');
  await UI.next(2600);
  await hunt(true);
}

async function fightDeath(T) {
  const S = G.S;
  await UI.scene({ img: 'e_fightback', trans: 'red', vcap: '', cap: `${T.name}${josa(T.name, '이', '가')} 깨진 병을 쥐고 있었다. 배가 뜨거웠다. 손 사이로 내가 흘러나갔다.`, snd: 'stab2', shake: 2, splat: 3, ins: ['i_blade'] });
  await UI.next(4200);
  await ending('fight', { survivor: T.name });
}

// ================================================================== investigation
function eraWitness() { const y = YEAR(); return (y >= 2004 ? .12 : 0) + (y >= 2012 ? .08 : 0); }

function discoveryP(v) {
  const S = G.S;
  const d = D.DUMP[v.dump];
  if (!d || d.keep || v.dump === 'burn') return 0;
  const since = S.t - v.t;
  const sea = seasonOf(S.t);
  let p = d.p;
  if (d.early) p = since <= d.early ? p : p * .15;
  if (d.summer && sea === 1) p *= d.summer;
  if (d.spring && (sea === 0 || sea === 2)) p *= d.spring;
  if (v.cut === 'whole') p *= 1.6;
  if (d.late) p = since > 48 ? .03 : p;     // 재개발
  if (v.dump === 'scatter') p = .03;
  if (!d.late) p *= Math.pow(.95, since);   // the longer it lies, the less likely anyone stumbles on it
  return p;
}

async function investigate() {
  const S = G.S;
  for (const v of S.victims) {
    if (v.spouse) continue;
    if (!v.reported) {
      v.reportIn--;
      if (v.reportIn <= 0) {
        v.reported = true;
        S.police = clamp(S.police + 1 + v.social * .5, 0, 100);
        if (v.social > 0 || chance(.4)) UI.diary(`전봇대에 ${v.name} 실종 전단이 붙었다.`, 'hear');
      }
    }
    if (!v.found || (v.dump === 'scatter' && v.partsFound < v.parts)) {
      if (chance(discoveryP(v))) { await found(v); if (S.over) return; }
    }
  }
  // police drift
  const hot = S.victims.some(v => v.found && S.t - v.foundT < 16) || S.t - S.lastHunt < 6;
  if (S.serial && hot) S.police = clamp(S.police + .5 + (others('det') && !others('det').dead && AGE() >= 27 ? .3 : 0) - (S.married ? .15 : 0), 0, 100);
  else S.police = clamp(S.police - (S.serial ? .25 : .5), 0, 100);
}

async function found(v) {
  const S = G.S;
  const first = !v.found;
  if (v.dump === 'scatter') v.partsFound++;
  v.found = true; v.foundT = S.t;
  const d = D.DUMP[v.dump];
  if (first) v.identified = chance(D.CUT[v.cut].id * (d.idm || 1) * (v.dump === 'scatter' ? .5 : 1));
  else if (!v.identified) v.identified = chance(.4);
  S.police = clamp(S.police + 3 + (v.identified ? 2 : 0), 0, 100);
  S.heat += 14;
  const what = v.identified ? `${v.name}(${v.age})` : '신원 미상의 시신';
  const where = { reservoir: '흑천 저수지', river: '흑천강 하류', mountain: '뒷산 등산로', sewer: '하수처리장', trash: '쓰레기 매립장', concrete: '재개발 공사장', scatter: pick(['저수지', '야산', '하수처리장']) }[v.dump] || '어딘가';
  const img = pick(['p_bodyfound', 'm_newspaper', 'm_tv']);
  await UI.scene({ img, vcap: '발견', cap: `${where}에서 ${what}${v.dump === 'scatter' ? '의 일부' : ''}가 나왔다.`, snd: 'siren', vol: .6, ins: [v.dump === 'mountain' ? 'i_dog' : 'i_foot'] });
  UI.diary(`뉴스. ${where}. ${what}. ${YEAR() - v.year > 3 ? (YEAR() - v.year) + '년 만에.' : ''}`, 'red');
  // evidence
  const y = YEAR();
  if (v.trace > .6 && y >= 1992 && chance(.3 * v.trace)) addEv('DNA', `${v.name} 사건 현장의 DNA`);
  if (!v.burned && chance(.22)) addEv('섬유', `${v.name} 시신에서 나온 옷 섬유`);
  if (v.seen && v.identified && chance(.55)) addEv('목격', `${v.name}${josa(v.name, '과', '와')} 함께 있던 사람을 봤다는 증언`);
  if (v.car && chance(.3)) addEv('차량', `${v.name} 사건과 같은 차종`);
  if (y >= 2004 && v.site === 'here' && chance(S.flags.cctvAware ? .15 : .35)) addEv('CCTV', `${v.name} 실종 당일 골목 CCTV`);
  await UI.next(3800);
  // serial?
  const nFound = S.victims.filter(x => x.found).length;
  if (!S.serial && nFound >= 2) {
    S.serial = true;
    S.nick = `${S.district} ${D.NICK[v.dump] || '토막살인'}`;
    S.police = clamp(S.police + 8, 0, 100);
    S.heat += 30;
    const det = others('det');
    await UI.scene({ img: 'p_bodyfound', vcap: '연쇄', cap: `신문이 처음으로 그 말을 썼다. 「${S.nick}」. 나한테 이름이 생겼다.`, ins: ['i_board', 'i_cig'], snd: 'typewriter' });
    UI.diary(`「${S.nick}」. 나한테 이름이 생겼다.`, 'red');
    if (det && !det.dead && AGE() >= 27) { UI.diary(`전담팀에 ${det.name}${josa(det.name, '이', '가')} 들어갔다. 그도 ${String(S.born.y).slice(2)}년 ${S.born.m}월 ${S.born.d}일생.`, 'red'); det.status = '전담팀'; det.life.push([AGE(), `「${S.nick}」 전담팀에 들어갔다.`]); }
    await UI.next(4200);
  }
}

async function eras() {
  const S = G.S, y = YEAR(), f = S.flags;
  if (y >= 1992 && !f.dna) { f.dna = 1; if (AGE() >= 18) UI.diary('국과수가 DNA 감식을 시작했다고 한다.', 'hear'); if (S.victims.some(v => v.found && v.trace > 1)) S.police = clamp(S.police + 6, 0, 100); }
  if (y >= 2004 && !f.cctv) { f.cctv = 1; if (AGE() >= 18) UI.diary('골목마다 CCTV가 달리기 시작했다.', 'hear'); }
  if (y >= 2015 && !f.statute) { f.statute = 1; if (S.victims.length) UI.diary('살인죄 공소시효가 없어졌다. 이제 시간은 내 편이 아니다.', 'red'); }
  if (y < 2015) for (const v of S.victims) {
    const lim = v.year < 2000 ? 15 : 25;
    if (!v.expired && y - v.year >= lim) {
      v.expired = true;
      S.police = clamp(S.police - 6, 0, 100);
      S.evidence.forEach(e => { if (e.text.includes(v.name)) e.expired = true; });
      UI.diary(`${v.name} 사건의 공소시효가 끝났다.`, 'hear');
    }
  }
}

// ================================================================== police beats
async function door() {
  const S = G.S;
  S.flags.door = 1;
  SND.play('knock', 1);
  const det = others('det');
  await UI.scene({ img: 'p_door', trans: 'cut', vcap: '노크', cap: `${det && !det.dead ? det.name : '형사'}. 경찰 수첩. “몇 가지만 여쭤보겠습니다.”`, ins: ['i_knob'] });
  const i = await UI.choose([
    { t: '태연하게 대답한다', d: '모른다. 본 적 없다.' },
    { t: '문을 열지 않는다', d: '체인을 건 채로' },
    { t: '먼저 묻는다', d: '“무슨 일인데요?”' },
  ]);
  if (i === 0) { if (chance(.45 + trait('cal') * .09)) { S.police -= 6; UI.diary('형사가 고개를 끄덕이고 돌아갔다.'); } else { S.police += 8; UI.diary('대답이 너무 빨랐다. 형사가 수첩에 뭔가를 적었다.', 'red'); } }
  else if (i === 1) { S.police += 5; S.susp += 5; UI.diary('문을 열지 않았다. 발소리가 오래 문 앞에 있었다.', 'red'); }
  else { if (chance(.4 + trait('cha') * .09)) { S.police -= 4; UI.diary('웃으며 커피를 권했다. 형사는 사양했다.'); } else { S.police += 6; UI.diary('목소리가 떨렸다.', 'red'); } }
  S.police = clamp(S.police, 0, 100); S.susp = clamp(S.susp, 0, 100);
  await UI.next(2400);
}

async function interrogation() {
  const S = G.S;
  S.lastInterrog = S.t;
  const det = others('det');
  const dn = det && !det.dead ? det.name : '형사';
  const v = pick(S.victims.filter(x => x.found)) || pick(S.victims);
  await UI.scene({ img: 'p_interrogation', trans: 'cut', vcap: '조사실', cap: `${dn}${josa(dn, '이', '가')} 물었다. “${v ? v.year + '년' : '그해'} ${v && v.dump === 'reservoir' ? '저수지 근처에서' : '그날 밤'}, 어디 계셨습니까.”`, snd: 'buzz', ins: ['i_cig'] });
  const alibi = S.t - S.alibiT < 8 || (S.love && S.love.accomplice) || (S.married && S.married.accomplice);
  const a = await UI.choose([
    { t: '집에서 잤다', d: '혼자. 증명할 사람은 없다' },
    { t: '알리바이를 댄다', d: alibi ? '해장국집 주인이 기억할 것이다' : '만들어 둔 게 없다', dis: !alibi },
    { t: '변호사를 부른다', d: '아무 말도 하지 않는다' },
  ]);
  if (a === 2) { S.police += 4; UI.diary('변호사를 불렀다. 그 형사는 웃었다.'); await UI.next(2000); return; }
  if (a === 1) { S.police -= 12; UI.diary('해장국집 주인이 나를 기억했다. 고마운 사람이다.'); }
  else if (chance(.4 + trait('cal') * .08)) S.police -= 3; else { S.police += 7; UI.diary('같은 질문을 열한 번 받았다. 마지막엔 대답이 달라졌다.', 'red'); }
  await UI.scene({ img: 'p_interrogation', keepIns: false, vcap: '', cap: '형사가 사진을 한 장씩 밀었다. 손가락으로. 천천히.', ins: ['i_board', 'i_foot'] });
  const b = await UI.choose([
    { t: '사진을 똑바로 본다', d: '눈을 깜박이지 않는다' },
    { t: '고개를 돌린다', d: '“이런 거 못 봐요.”' },
    { t: '웃는다', d: '참을 수가 없다', red: 1 },
  ]);
  if (b === 0) { if (chance(.38 + trait('cal') * .1)) { S.police -= 6; UI.diary('사진 속 얼굴들을 끝까지 봤다. 아무것도 느껴지지 않았다. 그게 통했다.'); } else { S.police += 9; UI.diary('사진 한 장에서 눈이 멈췄다. 형사가 그걸 봤다.', 'red'); } }
  else if (b === 1) { S.police += 3; }
  else { S.police += 12; S.urge = clamp(S.urge - 10, 0, 100); UI.diary(`웃었다. ${dn}${josa(dn, '이', '가')} 처음으로 눈을 피했다.`, 'red'); }
  S.police = clamp(S.police, 0, 100);
  await UI.scene({ img: 'city_night', vcap: '', cap: '풀려났다. 증거가 없다고 했다. 아직은.' });
  await UI.next(2600);
}

async function watched() {
  const S = G.S;
  S.flags.watch = 1;
  const det = others('det');
  await UI.scene({ img: 'p_watch', trans: 'ink', vcap: '창밖', cap: `${det && !det.dead ? det.name : '그 형사'}${josa(det && !det.dead ? det.name : '형사', '이', '가')} 매일 밤 창문 아래 서 있다. 담배 하나가 다 탈 때까지.`, snd: 'amb_rain', ins: ['i_cig'] });
  UI.diary('창문 아래에 그 형사가 있다. 매일 밤.', 'red');
  const i = await UI.choose([{ t: '커튼을 닫는다' }, { t: '창문을 열고 손을 흔든다', d: '들키든 말든', red: 1 }]);
  if (i === 1) { if (chance(.3 + trait('cal') * .1)) { S.police -= 5; UI.diary('형사가 담배를 떨어뜨리고 돌아섰다.'); } else { S.police += 6; } }
  await UI.next(2000);
}

async function homeSearch() {
  const S = G.S;
  S.flags.searched = 1;
  SND.play('knock', 1);
  await UI.scene({ img: 'p_forensic', trans: 'cut', vcap: '압수수색', cap: '영장을 들고 왔다. 흰 옷 입은 사람들이 욕실 배수구를 뜯었다.', ins: ['i_drain', 'i_tilefinger'], snd: 'buzz' });
  await UI.next(3200);
  if (S.trophies > 0) {
    SND.play('freezer', 1);
    await UI.scene({ img: 'x_freezer', trans: 'flash', vcap: '', cap: '누군가 냉동고 뚜껑을 열었다. 아무도 소리를 내지 않았다. 아주 오랫동안.', snd: 'sting', shake: 2 });
    await UI.next(3800);
    addEv('물증', '냉동고'); addEv('물증', '냉동고 속 시신');
    S.police = 100;
    await arrest(true);
    return;
  }
  if (chance(Math.min(.85, S.homeTraces * .32))) {
    addEv('혈흔', '욕실 타일 줄눈의 혈흔');
    S.police = clamp(S.police + 15, 0, 100);
    await UI.scene({ img: 'p_forensic', keepIns: true, vcap: '', cap: '줄눈 사이에서 빛이 올라왔다. 형사가 나를 돌아봤다.' });
  } else {
    S.police = clamp(S.police - 15, 0, 100);
    await UI.scene({ img: 'home_banjiha', vcap: '', cap: '아무것도 나오지 않았다. 그들은 사과하지 않고 돌아갔다.' });
  }
  await UI.next(3000);
}

async function montage() {
  const S = G.S;
  S.montage = 0;
  await UI.scene({ img: 'p_montage', vcap: '몽타주', cap: '전봇대마다 내 몽타주가 붙었다. 얼굴이 없었다. 나도 내 얼굴을 모른다.', snd: 'whisper', vol: .5 });
  S.susp = clamp(S.susp + 10, 0, 100); S.police = clamp(S.police + 5, 0, 100);
  UI.diary('몽타주가 붙었다. 닮지 않았다. 아무도 닮지 않았다.', 'red');
  await UI.next(3000);
}

// ================================================================== random events
const EVENTS = [
  { k: 'tv', w: 3, when: S => S.serial && S.heat > 15, run: async S => {
    await UI.scene({ img: 'm_tv', vcap: '뉴스', cap: `텔레비전이 「${S.nick}」 이야기를 한다. 범인은 평범한 이웃일 수 있다고 했다. 맥주를 땄다.`, ins: ['i_cig'] });
    UI.diary('뉴스에 또 나왔다. 평범한 이웃. 맞는 말이다.'); await UI.next(2600);
  } },
  { k: 'neighbor', w: 3, when: S => S.susp >= 35, run: async S => {
    await UI.scene({ img: 'neighbor_whisper', vcap: '복도', cap: '아랫집 여자들이 내가 지나가자 입을 다물었다.', snd: 'whisper', vol: .5, ins: ['i_eye'] });
    const i = await UI.choose([{ t: '웃으며 인사한다' }, { t: '오래 노려본다', red: 1 }, { t: '그냥 지나간다' }]);
    if (i === 0) { if (chance(.35 + trait('cha') * .1)) { S.susp -= 12; UI.diary('웃으며 귤을 나눠 줬다. 그 여자들도 웃었다.'); } else { S.susp += 4; UI.diary('웃음이 이상했나 보다.'); } }
    else if (i === 1) { S.susp += 6; UI.diary('먼저 고개를 돌린 건 그쪽이었다.', 'red'); }
    S.susp = clamp(S.susp, 0, 100); await UI.next(1800);
  } },
  { k: 'nightmare', w: 2, when: S => S.victims.length >= 2 && trait('cal') <= 3, run: async S => {
    await UI.scene({ img: 'nightmare', trans: 'red', vcap: '꿈', cap: '천장이 부풀었다. 아는 얼굴들이 벽지를 뚫고 내려왔다. 다 내가 아는 얼굴이었다.', snd: 'sting', ins: ['i_wallfaces'], shake: 1 });
    const i = await UI.choose([{ t: '불을 켠다' }, { t: '다시 눈을 감는다' }]);
    if (i === 0) { S.urge = clamp(S.urge + 8, 0, 100); UI.diary('불을 켜 두고 잤다. 손이 근질거렸다.'); }
    else if (!chance(.4 + trait('cal') * .1)) { S.susp = clamp(S.susp + 7, 0, 100); UI.diary('잠결에 비명을 질렀다고 옆방에서 그랬다.', 'red'); }
    else UI.diary('눈을 감았다. 얼굴들은 아침까지 기다려 주었다.');
    await UI.next(1800);
  } },
  { k: 'marry', w: 1, when: S => !S.married && !S.love && !S.flags.marry && AGE() >= 30 && AGE() <= 42 && S.flags.loveCool != null, run: async S => {
    S.flags.marry = 1;
    const sp = S.others.find(o => o.role === 'spouse' && !o.dead);
    const sex = S.sex === 'm' ? 'f' : 'm';
    const name = sp ? sp.name : rname(sex);
    await UI.scene({ img: 'city_day', vcap: '만남', cap: `${name}. ${sp ? '나와 같은 날 태어났다고 했다. 운명이라고 웃었다.' : '다방에서 만났다. 내 손이 따뜻하다고 했다.'}` });
    const i = await UI.choose([{ t: '결혼한다', d: '가장이라는 가면. 집에 눈이 하나 늘어난다' }, { t: '혼자 산다' }]);
    if (i === 0) {
      S.married = { name, sex, sameDay: !!sp };
      if (sp) { sp.status = '배우자'; sp.life.push([AGE(), '결혼했다.']); }
      await UI.scene({ img: 'life_wedding', vcap: '결혼', cap: '사진사가 웃으라고 했다. 사진에서 내 얼굴은 나중에 오려 냈다.' });
      UI.diary(`${name}${josa(name, '과', '와')} 결혼했다.`);
      S.susp = clamp(S.susp - 15, 0, 100);
    } else UI.diary(`${name}${josa(name, '을', '를')} 다시 만나지 않았다.`);
    await UI.next(2400);
  } },
  { k: 'baby', w: 2, when: S => S.married && !S.kids && AGE() < 46, run: async S => {
    S.kids = 1;
    await UI.scene({ img: 'life_baby', vcap: '아이', cap: '아이가 내 엄지를 쥐었다. 손톱 밑에 검붉은 선이 아직 남아 있었다.', snd: 'baby', vol: .5 });
    UI.diary('아이가 태어났다. 손가락이 작다. 아주 작다.'); await UI.next(2800);
  } },
  { k: 'spouseFind', w: 4, when: S => S.married && S.victims.length >= 1 && (S.homeTraces > .5 || S.trophies) && !S.flags.spouseFind, run: async S => {
    S.flags.spouseFind = 1;
    const sp = S.married;
    await UI.scene({ img: 'spouse_find', trans: 'cut', vcap: '세탁기', cap: `${sp.name}${josa(sp.name, '이', '가')} 셔츠를 들고 서 있었다. 빳빳하게 굳은 검붉은 얼룩.`, snd: 'sting', ins: ['i_tilefinger'] });
    const i = await UI.choose([{ t: '“짐승 피야. 도축장에서.”', d: '웃으면서' }, { t: '아무 말도 하지 않는다' }, { t: '천천히 다가가 안는다', d: '그리고', red: 1 }]);
    if (i === 0) {
      if (chance(.38 + trait('cha') * .09 + (S.job === 'butcher' ? .25 : 0))) UI.diary(`${sp.name}${josa(sp.name, '은', '는')} 믿었다. 아니, 믿기로 했다.`);
      else { S.police = clamp(S.police + 35, 0, 100); addEv('증언', `배우자 ${sp.name}의 신고`); UI.diary(`${sp.name}${josa(sp.name, '이', '가')} 아이를 데리고 나갔다. 그리고 경찰서로 갔다.`, 'red'); S.married = null; if (S.love) endLove('left'); }
    } else if (i === 1) { S.susp = clamp(S.susp + 15, 0, 100); S.police = clamp(S.police + 8, 0, 100); UI.diary(`${sp.name}${josa(sp.name, '이', '가')} 짐을 쌌다. 이혼 서류에는 이유가 적혀 있지 않았다.`, 'red'); S.married = null; if (S.love) endLove('left'); }
    else {
      await UI.scene({ img: 'k_home_' + sp.sex, trans: 'red', vcap: '', cap: `${sp.name}${josa(sp.name, '은', '는')} 끝까지 내 이름을 불렀다. 결혼할 때 그랬던 것처럼.`, snd: sp.sex === 'f' ? 'scream_f' : 'scream_m', shake: 2, splat: 2, ins: ['i_eye'] });
      S.victims.push({ name: sp.name, sex: sp.sex, age: AGE(), job: '배우자', t: S.t, year: YEAR(), site: 'theirs', cut: 'big', dump: pick(['mountain', 'reservoir']), reported: false, reportIn: 1, social: 3, found: false, trace: 1.3, seen: false, spouseKill: 1, parts: 1, partsFound: 0 });
      S.police = clamp(S.police + 18, 0, 100); S.susp = clamp(S.susp + 20, 0, 100);
      const p = S.others.find(o => o.name === sp.name); if (p) { p.dead = true; p.killedByMe = true; p.status = '실종'; }
      UI.diary(`${sp.name}. 처가에는 집을 나갔다고 했다.`, 'red kill'); S.married = null; S.urge = 0; if (S.love) endLove('dead');
    }
    await UI.next(3000);
  } },
  { k: 'copycat', w: 1, when: S => S.serial && !S.flags.copy, run: async S => {
    S.flags.copy = 1; S.police = clamp(S.police - 12, 0, 100);
    await UI.scene({ img: 'm_newspaper', vcap: '모방', cap: '누가 나를 흉내 냈다. 서툴렀다. 바로 잡혔다. 경찰은 헷갈리고 있다.' });
    UI.diary('모방범이 잡혔다. 엉성한 놈.'); await UI.next(2400);
  } },
  { k: 'wrong', w: 2, when: S => S.serial && S.police > 25 && S.police < 80 && !S.flags.wrong, run: async S => {
    S.flags.wrong = 1;
    const n = rname('m');
    await UI.scene({ img: 'm_newspaper', vcap: '검거', cap: `「${S.nick}」 범인 검거. ${n}(${rint(28, 45)}, 고물상). 자백했다고 한다.`, ins: ['i_list'] });
    S.police = clamp(S.police - 35, 0, 100);
    const i = await UI.choose([{ t: '신문을 접는다' }, { t: '경찰서에 편지를 보낸다', d: '“내가 아니야.”', red: 1 }, { t: '그 사람 재판을 보러 간다' }]);
    if (i === 1) { S.police = clamp(S.police + 22, 0, 100); S.heat += 30; S.urge = clamp(S.urge - 25, 0, 100); UI.diary(`편지를 보냈다. 「${n}은 아무것도 모른다」. 다음 날 1면에 실렸다.`, 'red'); }
    else if (i === 2) UI.diary(`${n}${josa(n, '은', '는')} 법정에서 울었다. 나는 방청석 맨 뒤에 앉아 있었다.`);
    else UI.diary(`${n}. 이름을 외워 두었다.`);
    await UI.next(2600);
  } },
  { k: 'parent', w: 1, when: S => AGE() >= 34 && AGE() <= 55 && !S.flags.parent && S.family !== 'orphan', run: async S => {
    S.flags.parent = 1;
    SND.play('phone', .9);
    await UI.scene({ img: 'home_banjiha', vcap: '전화', cap: S.family === 'abuse' ? '아버지가 죽었다. 술 때문이었다. 혁대는 관에 넣지 않았다.' : '어머니가 죽었다. 마지막에 내 이름을 불렀다고 한다.', ins: ['i_phone'] });
    const i = await UI.choose([{ t: '장례식에 간다' }, { t: '가지 않는다' }]);
    UI.diary(i === 0 ? '장례식에서 울지 않았다. 울어야 하는 줄 알았는데.' : '가지 않았다. 그날 밤 아주 잘 잤다.'); await UI.next(1800);
  } },
  { k: 'smell', w: 2, when: S => S.trophies > 0 || (S.homeTraces > 1 && S.t - S.lastHunt < 8), run: async S => {
    await UI.scene({ img: 'neighbor_whisper', vcap: '냄새', cap: '“이 집에서 무슨 냄새 안 나요?” 관리인이 코를 킁킁거렸다.', ins: ['i_drain'] });
    const i = await UI.choose([{ t: '하수구 탓을 한다' }, { t: '향을 피운다', d: '방 안 가득' }]);
    if (i === 0 && chance(.4 + trait('cha') * .1)) UI.diary('배관공을 부르겠다고 했다. 부르지 않았다.');
    else { S.susp = clamp(S.susp + 8, 0, 100); UI.diary('향 냄새가 더 이상했다.'); }
    await UI.next(1800);
  } },
  { k: 'paranoia', w: 2, when: S => S.susp >= 55, run: async S => {
    await UI.scene({ img: 'city_day', vcap: '대낮', cap: '시장 골목. 모든 사람이 동시에 나를 돌아봤다. 눈을 감았다 뜨니 아무도 보고 있지 않았다.', snd: 'whisper', vol: .6, ins: ['i_eye'] });
    UI.diary('사람들이 쳐다본다. 아니, 안 쳐다본다.', 'shake'); await UI.next(2200);
  } },
  { k: 'reporter', w: 2, when: S => S.serial && S.others.some(o => o.role === 'reporter' && !o.dead) && !S.flags.reporter, run: async S => {
    S.flags.reporter = 1;
    const r = others('reporter');
    await UI.scene({ img: 'city_night', vcap: '기자', cap: `${r.name} 기자가 공장 앞에서 사람들에게 묻고 다녔다. 같은 날 태어난 사람.`, ins: ['i_board'] });
    const i = await UI.choose([{ t: '먼저 다가가 인터뷰를 해 준다', d: '“무섭네요. 우리 동네에서.”' }, { t: '피한다' }]);
    if (i === 0) { if (chance(.35 + trait('cha') * .1)) { S.susp = clamp(S.susp - 10, 0, 100); UI.diary(`${r.name}의 기사에 내 말이 실렸다. 「주민 A씨」.`); } else { S.police = clamp(S.police + 8, 0, 100); UI.diary(`${r.name}${josa(r.name, '이', '가')} 내 얼굴을 오래 봤다.`, 'red'); } }
    r.life.push([AGE(), `「${S.nick}」 연재 기사를 썼다.`]);
    await UI.next(2000);
  } },
  { k: 'detAlone', w: 3, when: S => S.police >= 70 && others('det') && !others('det').dead && !S.flags.detAlone && AGE() >= 28, run: async S => {
    S.flags.detAlone = 1;
    const d = others('det');
    SND.play('knock', 1);
    await UI.scene({ img: 'p_door', trans: 'cut', vcap: '자정', cap: `${d.name}${josa(d.name, '이', '가')} 혼자 왔다. 영장은 없다. “같은 날 태어났더군요. 얘기 좀 합시다.”`, ins: ['i_knob', 'i_cig'] });
    const i = await UI.choose([{ t: '문을 열지 않는다' }, { t: '들여서 커피를 내준다', d: '아무 일 없다는 듯' }, { t: '들인다. 그리고 문을 잠근다', d: '경찰을 죽이면 모든 게 바뀐다', red: 1 }]);
    if (i === 0) { S.police = clamp(S.police + 3, 0, 100); UI.diary(`${d.name}${josa(d.name, '은', '는')} 한 시간 동안 문 앞에 있었다.`); }
    else if (i === 1) {
      if (chance(.35 + trait('cal') * .1)) { S.police = clamp(S.police - 12, 0, 100); UI.diary(`${d.name}${josa(d.name, '은', '는')} 커피를 다 마시고 갔다. “내가 틀렸나 봅니다.” 틀리지 않았다.`); }
      else { S.police = clamp(S.police + 10, 0, 100); UI.diary(`${d.name}${josa(d.name, '이', '가')} 욕실 문을 오래 봤다.`, 'red'); }
    } else {
      await UI.scene({ img: 'k_home_m', trans: 'red', vcap: '', cap: `${d.name}${josa(d.name, '은', '는')} 총을 꺼내지 못했다. 마지막까지 나를 형사의 눈으로 봤다.`, snd: 'stab1', shake: 2, splat: 3, ins: ['i_eye', 'i_blade'] });
      d.dead = true; d.killedByMe = true; d.status = '순직'; d.life.push([AGE(), '혼자 수사하러 갔다가 실종됐다.']);
      S.victims.push({ name: d.name, sex: 'm', age: AGE(), job: '형사', t: S.t, year: YEAR(), site: 'bath', cut: 'small', dump: pick(['mountain', 'reservoir', 'sewer']), reported: false, reportIn: 0, social: 3, found: false, trace: 1.2, seen: false, sameDay: true, parts: 1, partsFound: 0 });
      S.police = clamp(S.police + 30, 0, 100); S.heat += 50; S.homeTraces += 1;
      UI.diary(`${d.name}. 형사. 같은 날 태어났다.`, 'red kill');
      UI.born();
    }
    await UI.next(3000);
  } },
  { k: 'ill', w: 1, when: S => AGE() >= 55 && !S.flags.ill, run: async S => {
    S.flags.ill = 1; bump({ str: -1 });
    await UI.scene({ img: 'job_hospital', vcap: '병원', cap: '의사가 사진을 오래 들여다봤다. 내 몸 안에도 무언가 자라고 있었다.', ins: ['i_clock'] });
    UI.diary('몸이 예전 같지 않다. 칼이 무겁다.'); await UI.next(2000);
  } },
  { k: 'dog', w: 1, when: S => S.trophies > 0 && !S.flags.dog, run: async S => {
    S.flags.dog = 1;
    await UI.scene({ img: 'x_freezer', vcap: '개', cap: '옆집 개가 밤새 우리 집 벽을 보고 짖었다. 냉동고가 있는 쪽 벽을.', ins: ['i_dog'] });
    const i = await UI.choose([{ t: '개를 조용히 시킨다', red: 1 }, { t: '냉동고를 비운다' }]);
    if (i === 0) { S.susp = clamp(S.susp + 6, 0, 100); UI.diary('옆집 개가 없어졌다. 옆집 아이가 전단을 붙였다.', 'red'); }
    else await emptyFreezer();
    await UI.next(1800);
  } },
  { k: 'meet', w: 2, when: S => S.others.some(o => o.role === 'target' && !o.dead && !o.met && !o.seen) && AGE() >= 22, run: async S => {
    const p = S.others.find(o => o.role === 'target' && !o.dead && !o.met);
    p.seen = 1;
    await UI.scene({ img: 'city_day', vcap: '마주침', cap: `시장에서 ${p.name}${josa(p.name, '과', '와')} 어깨를 부딪쳤다. 같은 날 태어난 사람. 냄새를 기억해 두었다.` });
    UI.diary(`${p.name}. 오동시장. 화요일마다.`); await UI.next(2200);
  } },
];

async function randomEvent() {
  const S = G.S;
  if (!EVENTS.storyAdded) { EVENTS.push(...STORY_EVENTS); EVENTS.storyAdded = 1; }
  const ok = EVENTS.filter(e => e.when(S) && (!e.cool || (S.flags['ev_' + e.k] == null || S.t - S.flags['ev_' + e.k] >= e.cool)));
  if (!ok.length) return;
  let tw = ok.reduce((a, e) => a + e.w, 0), r = R() * tw;
  for (const e of ok) { r -= e.w; if (r <= 0) { S.flags['ev_' + e.k] = S.t; cov('ev:' + e.k); await e.run(S); return; } }
}

// ================================================================== actions
async function moveAway() {
  const S = G.S;
  S.lastMove = S.t;
  const old = S.district;
  S.district = pick(D.DISTRICTS.filter(d => d !== old));
  await UI.scene({ img: 'city_day', vcap: '이사', cap: `${old}를 떠나 ${S.district}로 왔다. 아무도 나를 모른다.`, snd: 'bag' });
  S.susp = Math.min(S.susp, 8);
  if (!S.serial) S.police = clamp(S.police - 12, 0, 100); else S.police = clamp(S.police - 5, 0, 100);
  S.homeTraces = S.homeTraces * .3;
  S.flags.door = 0; S.flags.searched = 0;
  UI.diary(`${S.district}로 이사했다.`);
  await UI.next(2000);
}

async function emptyFreezer() {
  const S = G.S;
  if (!S.trophies) return;
  SND.play('freezer', 1);
  await UI.scene({ img: 'x_freezer', vcap: '냉동고', cap: `${S.trophies}구. 얼어붙은 손가락이 나를 가리킨다.`, ins: ['i_bagtie'] });
  await UI.next(2000);
  const k = pick(['reservoir', 'mountain', 'river']);
  await UI.scene({ img: D.DUMP[k].img, vcap: '', cap: pick(D.DUMP_TXT[k]), snd: D.DUMP[k].snd });
  S.victims.filter(v => v.dump === 'keep').forEach(v => { v.dump = k; v.t = S.t; });
  S.trophies = 0;
  S.urge = clamp(S.urge + 10, 0, 100);
  UI.diary('냉동고가 비었다. 허전하다.');
  await UI.next(2000);
}

async function confess() {
  const S = G.S;
  await UI.scene({ img: 'e_confess', trans: 'cut', vcap: '파출소', cap: '신문지에 싼 칼을 카운터에 올려놓았다. 당직 순경이 하품을 하다 멈췄다.', snd: 'thud' });
  await UI.next(3800);
  await courtAndCell('confess');
}

async function arrest(atHome) {
  const S = G.S;
  SND.play('siren', 1);
  await UI.scene({ img: 'e_arrest', trans: 'flash', vcap: '검거', cap: atHome ? '수갑 소리가 냉동고 모터 소리를 덮었다.' : `손전등이 한꺼번에 켜졌다. “${S.name}! 손 들어!”`, shake: 2, ins: ['i_eye'] });
  if (atHome) { await UI.next(3200); await courtAndCell(); return; }
  const i = await UI.choose([{ t: '손을 든다' }, { t: '칼을 꺼낸다', red: 1 }, { t: '옥상으로 달린다' }]);
  if (i === 1) {
    SND.play('gunshot', 1);
    await UI.scene({ img: 'e_shot', trans: 'red', vcap: '', cap: '탕. 아스팔트가 뺨에 닿았다. 빗물이 눈으로 떨어졌다. 따뜻한 게 나를 둘러쌌다. 내가 수없이 봤던 것.', shake: 2, splat: 2 });
    setTimeout(() => SND.play('gunshot', .7), 600);
    await UI.next(4200);
    await ending('shot');
  } else if (i === 2) {
    await UI.scene({ img: 'e_roof', trans: 'ink', vcap: '옥상', cap: '도시가 소용돌이처럼 아래로 감겨 있었다. 80억 개의 불빛. 그중 하나가 꺼진다.', snd: 'siren' });
    const j = await UI.choose([{ t: '뛰어내린다', red: 1 }, { t: '돌아선다' }]);
    if (j === 0) { SND.play('thud', 1); await UI.next(1600); await ending('roof'); }
    else { await UI.scene({ img: 'e_arrest', vcap: '', cap: '돌아서자 수갑이 기다리고 있었다.' }); await UI.next(2400); await courtAndCell(); }
  } else {
    await UI.next(1600);
    await courtAndCell();
  }
}

async function courtAndCell(kind) {
  const S = G.S;
  await UI.scene({ img: 'e_court', trans: 'ink', vcap: '법정', cap: '방청석에서 영정 사진들이 나를 봤다. 어떤 얼굴은 기억나지 않았다.', snd: 'whisper', vol: .7, ins: ['i_mouth'] });
  await UI.next(4200);
  const death = S.victims.length >= 3 || trait('cru') >= 4;
  SND.play('cell', 1);
  await UI.scene({ img: 'e_cell', trans: 'cut', vcap: death ? '사형' : '무기징역', cap: death ? '사형이 선고됐다. 이 나라는 사형을 집행하지 않는다. 벽에 줄을 긋기 시작했다.' : '무기징역. 벽에 줄을 긋기 시작했다. 하루에 하나.', shake: 1 });
  await UI.next(4200);
  S.prison = pick(['shower', 'family', 'mad', 'old']);
  const PR = {
    shower: ['e_cell', '수감 3년째 샤워실. 누군가 칫솔을 갈아 만든 날로 내 목을 그었다. 바닥 배수구로 내가 빙글빙글 빠져나갔다. 내가 수없이 본 모양으로.', 'i_drain'],
    family: ['e_court', '피해자 가족들이 매년 면회를 신청했다. 한 번도 나가지 않았다. 그들은 교도소 정문 앞에서 내 이름을 부르며 늙어 갔다.', 'i_mouth'],
    mad: ['nightmare', '독방 천장에서 매일 밤 얼굴들이 내려왔다. 하나씩 세다가 숫자를 잊었다. 간수들은 내가 벽에 머리를 박는 소리로 시간을 쟀다.', 'i_wallfaces'],
    old: ['e_cell', '아무도 오지 않았다. 아무도 편지를 쓰지 않았다. 벽의 줄이 벽을 다 덮었을 때, 나는 그 위에 다시 그었다.', 'i_clock'],
  }[S.prison];
  await UI.scene({ img: PR[0], trans: 'ink', vcap: '', cap: PR[1], ins: [PR[2]], snd: S.prison === 'shower' ? 'stab1' : 'drip', shake: S.prison === 'shower' ? 2 : 0, splat: S.prison === 'shower' ? 2 : 0 });
  await UI.next(5200);
  await ending(kind || (death ? 'death' : 'life'));
}

async function dieOld() {
  const S = G.S;
  SND.play('flatline', .8);
  await UI.scene({ img: 'e_oldbed', trans: 'ink', vcap: `${AGE()}세`, cap: '침대 끝에 사람들이 서 있었다. 하나, 둘, … 다 셀 수 없었다. 모니터가 길게 울렸다.', ins: ['i_clock'] });
  await UI.next(4800);
  const det = others('det');
  await UI.scene({ img: 'e_funeral', trans: 'ink', vcap: '빈소', cap: det && !det.dead && S.police >= 30 ? `조문객은 한 사람뿐이었다. 은퇴한 형사 ${det.name}.` : '조문객은 없었다.', snd: 'whisper', vol: .3 });
  await UI.next(4200);
  await ending(S.police >= 70 ? 'nocase' : 'unsolved');
}

// ================================================================== ending
async function ending(kind, extra = {}) {
  const S = G.S;
  S.over = true; S.ending = kind; S.deathAge = AGE(); S.deathYear = YEAR(); cov('end:' + kind);
  clearSave();
  UI.clearIdle();
  SND.heart(0);
  const det = others('det');
  for (const p of S.others) if (!p.dead) p.fate = D.ROLES[p.role].fate;
  if (det && !det.dead) {
    det.fate = { unsolved: '은퇴할 때까지 그 사건 하나를 쫓았다. 끝내 잡지 못했다.', nocase: '용의자의 장례식에 갔다. 혼자서.', death: '수갑을 직접 채웠다.', life: '수갑을 직접 채웠다.', shot: '방아쇠를 당긴 건 그였다.', roof: '옥상 난간에서 한 발 늦었다.', confess: '자수 소식을 듣고 한참 웃었다. 울었는지도 모른다.', fight: '사건 기록 맨 끝에 「종결」이라고 적었다.' }[kind];
  }
  const nf = S.victims.filter(v => v.found).length;
  const title = titleOf(S);
  addRecord({ ending: kind, n: S.victims.length, unf: S.victims.length - nf, age: S.deathAge, y: S.deathYear, nick: S.nick, title, name: S.name, born: S.born.y, at: Date.now() });
  buildEnd(kind, extra, title);
  if (G.auto) document.title = `END:${kind}:v${S.victims.length}:found${S.victims.filter(v => v.found).length}:age${S.deathAge}:ev${S.evidence.length}:pol${Math.round(S.police)}:serial${S.serial ? 1 : 0}:beats${G.beats || 0}:min${Math.round((G.est || 0) / 60000)}`;
  SND.amb('amb_drone', .3);
  UI.show('end');
  setTimeout(() => SND.play('typewriter', .7), 400);
  setTimeout(() => SND.play('stamp', 1), 1700);
}

function titleOf(S) {
  const n = S.victims.length, unf = S.victims.filter(v => !v.found).length;
  if (S.ending === 'unsolved' && n >= 8) return '흑천의 그림자';
  if (S.ending === 'unsolved' && n >= 4) return '아무도 모르는 이웃';
  if (S.ending === 'unsolved') return '조용한 사람';
  if (n >= 10) return '백정';
  if (unf >= 5) return '저수지의 주인';
  if (n === 0) return '아무것도 하지 못한 자';
  if (S.ending === 'fight') return '마지막 실수';
  return '평범한 괴물';
}

function buildEnd(kind, extra, title) {
  const S = G.S, E = D.END[kind];
  const det = others('det');
  const nf = S.victims.filter(v => v.found).length;
  const list = S.victims.slice(0, 7).map((v, i) => {
    const nm = v.found && v.identified ? v.name : (kind === 'unsolved' || kind === 'nocase') ? v.name[0] + '<s>○○</s>' : v.name;
    const st = v.found ? (v.identified ? { reservoir: '저수지', river: '강 하류', mountain: '야산', sewer: '하수처리장', trash: '매립장', concrete: '공사장', scatter: '여러 곳', burn: '-', keep: '냉동고' }[v.dump] + ' · 발견' : '신원 미상으로 발견') : (kind === 'unsolved' || kind === 'nocase' ? '실종 · 시신 미발견' : '자백으로 확인 · 미발견');
    return `<div><span>${i + 1}</span><span>${nm}</span><span>${v.age}</span><span>${v.year}</span><span class="${v.found ? '' : 'nf'}">${st}</span></div>`;
  }).join('') + (S.victims.length > 7 ? `<div><span>…</span><span></span><span></span><span></span><span>외 ${S.victims.length - 7}명</span></div>` : '');
  const caught = !['unsolved', 'nocase', 'fight'].includes(kind);
  const suspect = caught ? `피의자 ${S.name} (${S.sex === 'm' ? '남' : '여'}, ${S.deathAge}세)` : kind === 'fight' ? `범인 ${S.name} — 사망` : '피의자 미상';
  const caseName = S.nick ? `「${S.nick}」 사건` : `${S.district} 연쇄 실종 사건`;
  const photo = pick(S.victims.filter(v => v.found).map(v => D.DUMP[v.dump] && D.DUMP[v.dump].img).filter(Boolean)) || E.ph;
  const lastLine = {
    unsolved: `당신의 이름은 ${S.name}였다. ${S.deathYear}년, ${S.deathAge}세에 요양병원 침대에서 숨을 거뒀다. 아무도 몰랐다.`,
    nocase: `${S.name}. ${S.deathYear}년 ${S.deathAge}세 사망. 「유력 용의자」라는 말만 남았다.`,
    death: S.prison === 'shower' ? `${S.name}. 수감 3년째 샤워실에서 살해됐다. 범인은 끝내 밝혀지지 않았다.` : `${S.name}. 독방 벽의 줄은 ${rint(4000, 9000)}개에서 멈췄다.`,
    life: S.prison === 'shower' ? `${S.name}. 수감 3년째 샤워실에서 살해됐다. 아무도 슬퍼하지 않았다.` : `${S.name}. 교도소 안에서 ${S.deathAge + rint(10, 25)}세에 죽었다. 면회는 한 번도 없었다.`,
    shot: `${S.name}. ${S.deathYear}년, 골목에서 사살됐다. 시신은 무연고자 묘지에 묻혔다. 비석에는 번호만 있다.`,
    roof: `${S.name}. ${S.deathYear}년, 옥상에서 떨어졌다. 떨어지는 3초 동안 ${S.victims.length}개의 얼굴이 지나갔다. 마지막 비명은 자기 것이었다.`,
    confess: `${S.name}. 왜 자수했냐는 질문에 대답하지 않았다.`,
    fight: `${S.name}. ${extra.survivor || '마지막 대상'}${josa(extra.survivor || '대상', '은', '는')} 살아남았다. 내 배를 가른 깨진 병은 증거물 봉투에 담겼다.`,
  }[kind];
  const acc = (S.love && S.love.accomplice && S.love.name) || (S.married && S.married.accomplice && S.married.name);
  const note = det && !det.dead && !['fight'].includes(kind)
    ? { unsolved: `이 새끼는 아직<br>이 동네에 산다 — ${det.name[0]}`, nocase: `늦었다 — ${det.name[0]}`, death: '끝. — ' + det.name[0], life: '끝. — ' + det.name[0], shot: '내가 쐈다 — ' + det.name[0], roof: '한 발 늦었다 — ' + det.name[0], confess: '왜 이제야 — ' + det.name[0] }[kind]
    : '';
  $('#x-sheet').innerHTML = `<div class="x-pad">
      <div class="x-top"><span>흑천경찰서 강력1반 · 수사기록 (사본)</span><span>${S.victims[0] ? S.victims[0].year : S.deathYear}-흑-${String(rint(100, 999)).padStart(4, '0')} · 최종 ${S.deathYear}</span></div>
      <div class="x-h">${caseName}</div>
      <div class="x-sus">${suspect}</div>
      <div class="x-grid">
        <div><div class="x-photo"><img src="${IMG(photo)}" alt=""></div><div class="x-cap">증거사진 — ${title}</div></div>
        <div>
          <div class="x-list">${list || '<div><span></span><span>피해자 없음</span></div>'}</div>
          <div class="x-sum">피해자 <b>${S.victims.length}</b> · 발견 <b>${nf}</b> · 끝내 못 찾음 <b>${S.victims.length - nf}</b> · 증거 <b>${S.evidence.length}</b></div>
        </div>
      </div>
      <div class="x-final">${E.head}<br><span>${lastLine}</span>${acc && caught ? `<br><span>${acc}${josa(acc, '은', '는')} 범인은닉 및 사체유기 방조로 함께 기소됐다.</span>` : ''}</div>
    </div>
    ${note ? `<div class="x-note">${note}</div>` : ''}
    <div class="x-stamp">${E.stamp}<small>${E.sub}</small></div>`;
  $('#e-title').textContent = `「${title}」`;
}

function buildLives() {
  const S = G.S;
  const col = (face, name, sub, lines, fate, me) => `<div class="lv${me ? ' me' : ''}">
    <div class="lph" style="${face ? `background-image:url(${IMG(face)})` : ''}">${me ? '<b>?</b>' : ''}</div>
    <div class="lnm">${name}</div><div class="lsub">${sub}</div>
    <div class="lls">${lines.map(l => `<div><i>${l[0]}</i>${l[1]}</div>`).join('')}</div>
    <div class="lfate">${fate}</div></div>`;
  const myLines = [];
  const firstKill = S.victims[0];
  myLines.push([0, '태어났다.']);
  if (S.job) myLines.push([18, D.JOBS[S.job].t + '.']);
  if (firstKill) myLines.push([ageOf(firstKill.t), `${firstKill.name}. 처음.`]);
  if (S.nick) myLines.push(['', `「${S.nick}」라고 불렸다.`]);
  myLines.push([S.deathAge, D.END[S.ending].stamp + '.']);
  let h = col(null, S.name, `${S.born.y}.${S.born.m}.${S.born.d} · 나`, myLines, `피해자 ${S.victims.length}명.`, true);
  for (const p of S.others) {
    const lines = [[0, '태어났다.'], ...p.life];
    const fate = p.killedByMe ? '나에게 죽었다.' : p.dead ? '일찍 죽었다.' : (p.fate || D.ROLES[p.role].fate);
    h += col(p.face, p.name, D.ROLES[p.role].tag || '같은 날 태어남', lines, fate);
  }
  $('#lives-row').innerHTML = h;
}

// ================================================================== title / boot
function titleScreen() {
  UI.show('title');
  $('#t-img img').src = IMG('title');
  preload(['nursery', 'birth', 'i_eye']);
  $('#t-cont').style.display = loadSave() ? '' : 'none';
  $('#t-rec').style.display = records().length ? '' : 'none';
}

function showRecords() {
  const a = records();
  $('#rec-list').innerHTML = a.map(r => `<div class="rc"><span class="st">${D.END[r.ending].stamp}</span><span class="nm">${r.name} · ${r.born}–${r.y}</span><span>${r.nick ? '「' + r.nick + '」' : ''}</span><span>피해자 ${r.n} · 못 찾음 ${r.unf}</span><span class="tt">${r.title}</span></div>`).join('') || '<div class="rc">기록 없음</div>';
  UI.show('records');
}

// one life at a time: a double tap on the start button must not start two loops
async function newGame() {
  if (G.running) return;
  G.running = true;
  clearSave();
  G.S = newLife();
  $('#decals').innerHTML = '';
  try { await run(); } finally { G.running = false; }
}
async function continueGame() {
  if (G.running) return;
  const s = loadSave();
  if (!s) return newGame();
  G.running = true;
  G.S = s;
  try { await run(); } finally { G.running = false; }
}

// ---- test coverage (auto runs write which events, actions and endings happened)
function cov(k) {
  if (!G.auto) return;
  G.cov = G.cov || {}; G.cov[k] = (G.cov[k] || 0) + 1;
  let pre = document.getElementById('covlog');
  if (!pre) { pre = document.createElement('pre'); pre.id = 'covlog'; pre.style.display = 'none'; document.body.appendChild(pre); }
  pre.textContent = Object.entries(G.cov).map(([a, b]) => a + '=' + b).join(' ');
}

// ---- debug: every button must be hit by a tap at its centre (?hit=1)
async function hitTest() {
  const out = [];
  const check = (sel, name) => {
    $$(sel).forEach((e, i) => {
      const r = e.getBoundingClientRect();
      if (!r.width || getComputedStyle(e).display === 'none') return;
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const off = cx < 0 || cy < 0 || cx > innerWidth || cy > innerHeight;
      const hit = document.elementFromPoint(cx, cy);
      const ok = !off && hit && (hit === e || e.contains(hit));
      out.push(`${ok ? 'OK' : 'BAD'} ${name}${i} ${Math.round(r.width)}x${Math.round(r.height)}${ok ? '' : ' hit=' + (hit ? (hit.id || hit.className || hit.tagName) : 'none') + (off ? ' OFF' : '')}`);
    });
  };
  await sleep(300);
  titleScreen(); $('#t-cont').style.display = ''; $('#t-rec').style.display = '';
  await sleep(200);
  check('#t-start', 'start'); check('#t-sub span', 'sub'); check('#sys span', 'sys');
  G.S = newLife(); G.S.t = 100;
  for (let i = 0; i < 12; i++) G.S.diary.push({ t: 90 + i, text: '시험 문장입니다. 손이 근질거린다. 버스에서 앞사람의 목덜미를 오래 봤다.', cls: i % 3 ? '' : 'red' });
  G.S.victims = [1, 2, 3, 4, 5, 6, 7, 8].map(i => ({ name: rname('f'), age: 20 + i, year: 1990 + i, dump: 'reservoir', found: i % 2, identified: 1, t: 80 + i }));
  UI.show('play'); UI.status(); UI.born(); UI.renderDiary(); UI.speedUI();
  await UI.scene({ img: 't_alley_f', vcap: '골목 끝. 가로등이 한 번 깜박였다.', cap: '그 여자가 뒤를 돌아봤다.', mark: { img: 't_alley_f', lines: ['오수진', '24 · 보험 설계사', '혼자 산다', '나랑 같은 날 태어났다'] } });
  UI.choose([1, 2, 3, 4, 5].map(i => ({ t: '선택지 문장 ' + i + ' 조금 길게', d: '설명 문장이 여기에 들어간다', risk: { eye: 2, drop: 1, note: '될 것 같다' } })), { title: '어떻게' });
  await sleep(100);
  check('#choices .ch', 'choice'); check('#speed span', 'speed');
  const cb = $('#choices').getBoundingClientRect();
  out.push(`choicesBox bottom=${Math.round(cb.bottom)} vh=${innerHeight} scroll=${$('#choices').scrollHeight}/${$('#choices').clientHeight}`);
  $('#choices').innerHTML = ''; $('#choices').classList.remove('ask');
  UI.idle([{ k: 'a', t: '사냥하러 나간다', d: '굶주림 80' }, { k: 'b', t: '이 동네를 떠난다', d: '의심은 사라진다' }, { k: 'c', t: '냉동고를 비운다' }, { k: 'd', t: '자수한다', red: 1 }]);
  await sleep(100);
  check('#choices .ch', 'idle');
  G.S.ending = 'unsolved'; G.S.deathAge = 74; G.S.deathYear = 2040; G.S.nick = '오동구 저수지 토막살인';
  buildEnd('unsolved', {}, '흑천의 그림자'); UI.show('end');
  await sleep(2200);
  check('#e-btns .a, #e-btns .b', 'endbtn');
  buildLives(); UI.show('lives'); await sleep(100);
  check('#lives-back', 'livesback');
  showRecords(); await sleep(100); check('#rec-back', 'recback');
  const bad = out.filter(l => l.startsWith('BAD'));
  document.title = `HIT ${LAY.mode} ${innerWidth}x${innerHeight} bad=${bad.length}`;
  const pre = el('pre', '', out.join('\n')); pre.id = 'hitlog'; pre.style.display = 'none'; document.body.appendChild(pre);
}

window.onerror = (m, src, l) => { document.title = 'ERR:' + m + ' @' + (src || '').split('/').pop() + ':' + l; };
window.onunhandledrejection = e => { document.title = 'ERR:' + (e.reason && (e.reason.stack || e.reason.message) || e.reason); };
function boot() {
  const q = new URLSearchParams(location.search);
  G.auto = q.has('auto');
  G.careful = q.get('auto') === 'careful';
  G.stopAt = +q.get('stop') || 0;
  if (G.auto) { G.skipType = true; G.speed = 4; SND.on = false; }
  try { if (localStorage.getItem('k8b_mute') === '1') { SND.on = false; $('#mute').classList.add('off'); } } catch (e) {}
  // stage scaling: landscape -> 1920x1080, portrait -> 1080 x H (H follows the screen ratio)
  const fit = () => {
    const w = innerWidth, h = innerHeight;
    const portrait = h > w * 1.05;
    const touch = matchMedia('(pointer: coarse)').matches;
    G.rotBlock = !portrait && touch && h < 560;
    document.body.classList.toggle('rot', G.rotBlock);
    const was = LAY.mode + LAY.H;
    if (portrait) { LAY.mode = 'm'; LAY.W = 750; LAY.H = Math.round(clamp(750 * h / w, 1180, 1700)); }
    else { LAY.mode = 'pc'; LAY.W = 1920; LAY.H = 1080; }
    document.body.classList.toggle('m', LAY.mode === 'm');
    // the graph lives in the diary on PC and in its own strip on phones
    const gc = $('#graph'), gw = $('#gwrap'), dy = $('#dyear');
    if (gc && gw && dy) {
      if (LAY.mode === 'm') { if (gc.parentNode !== gw) gw.appendChild(gc); gc.width = 718; gc.height = 110; }
      else { if (gc.parentNode === gw) dy.after(gc); gc.width = 480; gc.height = 96; }
    }
    const st = $('#stage');
    st.style.width = LAY.W + 'px'; st.style.height = LAY.H + 'px';
    st.style.setProperty('--H', LAY.H + 'px');
    const sc = Math.min(w / LAY.W, h / LAY.H);
    st.style.transform = `translate(-50%,-50%) scale(${sc})`;
    if (was !== LAY.mode + LAY.H && G.S && UI.cur === 'play') { UI.status(); UI.renderDiary(); }
  };
  addEventListener('resize', fit); addEventListener('orientationchange', () => setTimeout(fit, 200)); fit();
  // sound needs a first touch on phones
  const unlock = () => SND.unlock();
  ['pointerdown', 'touchend', 'keydown', 'click'].forEach(ev => document.addEventListener(ev, unlock, { passive: true }));
  document.addEventListener('visibilitychange', () => SND.pauseAll(document.hidden));
  const fsOk = !!(document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen) && matchMedia('(pointer: coarse)').matches;
  $('#fs').style.display = fsOk ? '' : 'none';
  $('#fs').onclick = () => { const d = document.documentElement; (d.requestFullscreen || d.webkitRequestFullscreen).call(d).catch?.(() => {}); };
  // population counter
  const t0 = Date.now(), p0 = 8142371906;
  setInterval(() => { const n = p0 + Math.floor((Date.now() - t0) / 1000 * 4.3); $('#t-popn').textContent = n.toLocaleString('en-US'); }, 230);

  $('#t-start').onclick = () => { SND.play('ui'); newGame(); };
  $('#t-cont').onclick = () => { SND.play('ui'); continueGame(); };
  $('#t-rec').onclick = () => showRecords();
  $('#rec-back').onclick = () => titleScreen();
  $('#e-again').onclick = () => { titleScreen(); };
  $('#e-lives').onclick = () => { buildLives(); UI.show('lives'); };
  $('#lives-back').onclick = () => UI.show('end');
  $('#mute').onclick = () => SND.toggle();
  $('#home').onclick = () => { if (G.S && !G.S.over) save(); location.href = location.pathname; };
  $$('#speed span[data-s]').forEach(s => s.onclick = () => { G.speed = +s.dataset.s; UI.speedUI(); });
  document.addEventListener('keydown', e => {
    if (UI.cur !== 'play') return;
    if (e.key === 'p' || e.key === 'P') { G.speed = G.speed ? 0 : 1; UI.speedUI(); }
    if (e.key === 'f' || e.key === 'F') { G.speed = { 0: 1, 1: 2, 2: 4, 4: 1 }[G.speed]; UI.speedUI(); }
  });
  // hold Shift/Ctrl to see text at once
  document.addEventListener('keydown', e => { if (e.key === 'Shift') G.skipType = true; });
  document.addEventListener('keyup', e => { if (e.key === 'Shift' && !G.auto) G.skipType = false; });

  // cache everything on the phone after the first visit (https only)
  if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
  setTimeout(() => LOADER.start(), G.auto ? 99999999 : 600);
  if (q.has('hit')) { hitTest(); return; }
  if (q.has('go')) { setTimeout(() => { SND.unlock(); newGame(); }, 300); return; }
  if (G.auto) { newGame(); return; }
  titleScreen();
}
document.addEventListener('DOMContentLoaded', boot);
