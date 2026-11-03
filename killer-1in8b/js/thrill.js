// thrill: the night clock, heartbeat tension, timed moments, hands-on beats
// (hold your breath, struggle, keep a straight face, hide things) and what can go wrong on a night out
'use strict';

// ------------------------------------------------------------------ tension: letterbox, red pulse, heartbeat
function tense(lv) {
  G.tense = lv;
  const p = $('#play');
  ['t1', 't2', 't3'].forEach((c, i) => p.classList.toggle(c, lv >= i + 1));
  const S = G.S;
  SND.heart(Math.max(lv > 0 ? [0, .3, .65, 1][lv] : 0, S && S.urge > 70 ? (S.urge - 70) / 30 : 0));
}

// big centred word over the picture
function slam(text, cls = '') {
  const s = el('div', 'slam ' + cls, text);
  $('#sfxbox').appendChild(s);
  UI.shake(2);
  SND.play('sting', .7);
  setTimeout(() => s.classList.add('out'), 1500);
  setTimeout(() => s.remove(), 2100);
}

// ------------------------------------------------------------------ the night clock (hunts start in the evening; dawn is 05:20)
const NIGHT = {
  DAWN: 500,
  start() { G.night = rint(30, 230); this.draw(); $('#clock').classList.add('on'); },
  add(m) { if (G.night == null) return; G.night += m; this.draw(); },
  left() { return G.night == null ? 999 : this.DAWN - G.night; },
  late() { return this.left() <= 0; },
  now() { const t = (21 * 60 + (G.night || 0)) % 1440; return `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`; },
  end() { G.night = null; const c = $('#clock'); if (c) c.classList.remove('on', 'late'); },
  draw() {
    const c = $('#clock');
    if (!c || G.night == null) return;
    const left = this.left();
    c.innerHTML = `${this.now()}<small>${left > 0 ? `해 뜨기까지 ${Math.floor(left / 60)}시간 ${left % 60}분` : '해가 떴다'}</small>`;
    c.classList.toggle('late', left < 90);
    c.classList.remove('tick'); void c.offsetWidth; c.classList.add('tick');
  },
};

// ------------------------------------------------------------------ hands-on moments
// each one draws into the choice area (always on screen and pressable) and resolves true = got away with it
function mgShell(kind, title, hint) {
  UI.clearIdle();
  const box = $('#choices');
  box.innerHTML = '';
  box.className = 'ask mg mg-' + kind;
  box.dataset.sig = '';
  const play = $('#play'); play.classList.add('ask', 'mgon'); play.classList.remove('tight');
  box.appendChild(el('div', 'ctitle', `<span class="go">▶</span> ${title}`));
  box.appendChild(el('div', 'mghint', hint));
  return box;
}
function mgDone() {
  G.lockUntil = performance.now() + 800;
  const box = $('#choices');
  box.innerHTML = ''; box.className = '';
  $('#play').classList.remove('ask', 'mgon', 'mg-dark');
  $('#mgfx').className = ''; $('#mgfx').innerHTML = '';
  tense(G.tense || 0);
}
// steps only while the game is not paused; dt in seconds
function mgLoop(step) {
  return new Promise(res => {
    let last = performance.now();
    const iv = setInterval(() => {
      const now = performance.now(), dt = Math.min(.1, (now - last) / 1000);
      last = now;
      if (G.speed === 0 || G.freeze || document.hidden || UI.cur !== 'play') return;
      const r = step(dt);
      if (r !== undefined) { clearInterval(iv); res(r); }
    }, 30);
  });
}
// a press button that works with mouse, touch and the keyboard (space / enter)
function mgButton(box, label, on) {
  const b = el('div', 'mgbtn', label);
  b.oncontextmenu = e => e.preventDefault();
  b.addEventListener('pointerdown', e => { e.preventDefault(); e.stopPropagation(); on.down && on.down(); });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach(t => b.addEventListener(t, e => { e.stopPropagation(); on.up && on.up(); }));
  b.addEventListener('click', e => e.stopPropagation());
  const kd = e => { if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) { e.preventDefault(); on.down && on.down(); } };
  const ku = e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); on.up && on.up(); } };
  document.addEventListener('keydown', kd); document.addEventListener('keyup', ku);
  b.off = () => { document.removeEventListener('keydown', kd); document.removeEventListener('keyup', ku); };
  box.appendChild(b);
  return b;
}
function mgBar(box, label, cls) {
  const g = el('div', 'mgbar ' + cls, `<span>${label}</span><b><i></i></b>`);
  box.appendChild(g);
  g.set = v => { g.querySelector('i').style.width = Math.max(0, Math.min(100, v)) + '%'; };
  return g;
}
function autoMg(kind, p) { cov('mg:' + kind); return sleep(20).then(() => chance(p)); }

// hold the button while the light (or the knocking) is on you; holding too long runs out of breath
async function mgHold(o = {}) {
  if (G.auto) return autoMg('hold', o.p || .6);
  const dur = o.dur || 7, n = o.n || 2, light = o.cue !== 'sound';
  const box = mgShell('hold', o.title || '숨을 참는다', light
    ? '빛이 오면 <b>누르고 버틴다</b>. 오래 누르면 숨이 찬다. 빛이 지나가면 손을 뗀다.'
    : '소리가 나면 <b>누르고 버틴다</b>. 오래 누르면 숨이 찬다. 조용해지면 손을 뗀다.');
  const breath = mgBar(box, '숨', 'breath');
  let held = false;
  const btn = mgButton(box, '누르고 버틴다', { down: () => { held = true; }, up: () => { held = false; } });
  if (light) $('#play').classList.add('mg-dark');
  const fx = $('#mgfx');
  fx.innerHTML = light ? '<div class="beam"></div><div class="warn">발소리</div>' : `<div class="knock">${o.word || '똑 똑'}</div><div class="warn">…</div>`;
  const wins = [], seg = (dur - 1.6) / n;
  for (let i = 0; i < n; i++) {
    const len = 1.1 + Math.random() * .6;
    const s = 1.3 + i * seg + Math.random() * Math.max(.1, seg - len - .3);
    wins.push([s, s + len]);
  }
  let b = 100, t = 0, bare = 0, was = false;
  const r = await mgLoop(dt => {
    t += dt;
    const w = wins.find(x => t >= x[0] && t < x[1]);
    const warn = !w && wins.find(x => t >= x[0] - .7 && t < x[0]);
    fx.className = w ? 'on' : warn ? 'warn' : '';
    if (w && !was) { SND.play(light ? 'step2' : 'knock', .8); if (!light) UI.shake(1); }
    was = !!w;
    b = clamp(b + (held ? -(o.drain || 24) : 42) * dt, 0, 100);
    breath.set(b); breath.classList.toggle('low', b < 30);
    btn.classList.toggle('held', held);
    btn.textContent = held ? (b < 30 ? '숨이… 찬다' : '숨을 참는 중') : '누르고 버틴다';
    if (b <= 0) return 'gasp';
    if (w && !held) { bare += dt; if (bare > .22) return 'seen'; } else bare = 0;
    if (t >= dur) return 'ok';
  });
  btn.off(); mgDone();
  cov('mg:hold' + (r === 'ok' ? '+' : '-'));
  if (r === 'gasp') slam('헉');
  else if (r === 'seen') slam(light ? '빛 속에 들어갔다' : '삐걱');
  return r === 'ok';
}

// tap as fast as you can
async function mgMash(o = {}) {
  if (G.auto) return autoMg('mash', o.p || .6);
  const need = Math.max(8, o.need || 18), dur = o.dur || 4.5;
  const box = mgShell('mash', o.title || '힘으로', `<b>빠르게 연타</b>한다 — ${dur}초 안에.`);
  const pow = mgBar(box, '힘', 'power'), tb = mgBar(box, '시간', 'time');
  let v = 0, t = 0;
  const btn = mgButton(box, o.btn || '연타!', { down: () => {
    v += 100 / need;
    btn.classList.remove('bump'); void btn.offsetWidth; btn.classList.add('bump');
    SND.play('thud', .22); buzz();
    if (Math.random() < .2) UI.shake(1);
  } });
  const r = await mgLoop(dt => {
    t += dt;
    v = Math.max(0, v - (o.decay || 9) * dt);
    pow.set(v); tb.set(100 - t / dur * 100);
    if (v >= 100) return true;
    if (t >= dur) return false;
  });
  btn.off(); mgDone();
  cov('mg:mash' + (r ? '+' : '-'));
  return r;
}

// keep the heart in the middle: it creeps up, a tap brings it down, too many taps and the face goes stiff
async function mgCalm(o = {}) {
  if (G.auto) return autoMg('calm', o.p || .6);
  const dur = o.dur || 6;
  const box = mgShell('calm', o.title || '태연한 척', '심장이 빨라지면 <b>눌러서 숨을 고른다</b>. 너무 누르면 얼굴이 굳는다.');
  const m = el('div', 'mgcalm', '<div class="zone"></div><div class="needle"></div><span class="lo">굳은 얼굴</span><span class="hi">떨림</span><em></em>');
  box.appendChild(m);
  const tb = mgBar(box, '시간', 'time');
  let x = 45, vel = 0, t = 0, hot = 0, cold = 0, gust = 0;
  const btn = mgButton(box, '숨을 고른다', { down: () => { x -= 13; btn.classList.remove('bump'); void btn.offsetWidth; btn.classList.add('bump'); } });
  const needle = m.querySelector('.needle'), bpm = m.querySelector('em');
  const r = await mgLoop(dt => {
    t += dt; gust -= dt;
    if (gust <= 0) { gust = .7 + Math.random() * 1.1; vel = (o.rise || 21) * (.55 + Math.random() * 1.1); }
    x = clamp(x + vel * dt, 0, 100);
    needle.style.left = x + '%';
    bpm.textContent = Math.round(64 + x * 1.05);
    m.classList.toggle('hot', x > 82); m.classList.toggle('cold', x < 12);
    tb.set(100 - t / dur * 100);
    if (x > 82) hot += dt; else hot = Math.max(0, hot - dt * .5);
    if (x < 12) cold += dt; else cold = 0;
    if (hot > .65) return 'shake';
    if (cold > .9) return 'stiff';
    if (t >= dur) return 'ok';
  });
  btn.off(); mgDone();
  cov('mg:calm' + (r === 'ok' ? '+' : '-'));
  if (r === 'shake') slam('목소리가 떨렸다');
  else if (r === 'stiff') slam('표정이 굳었다');
  return r === 'ok';
}

// tap things to hide them before the door opens; one at a time, each takes a while. returns the set of hidden keys
async function mgHide(items, o = {}) {
  const dur = o.dur || 5.5;
  if (G.auto) {
    cov('mg:hide');
    const s = new Set(); let left = dur * 1000 * .8;
    [...items].sort(() => Math.random() - .5).forEach(it => { if (it.cost <= left) { s.add(it.k); left -= it.cost; } });
    await sleep(20);
    return s;
  }
  const box = mgShell('hide', o.title || '숨긴다', '<b>눌러서 숨긴다</b>. 한 번에 하나씩. 큰 것일수록 오래 걸린다.');
  const grid = el('div', 'mghide');
  box.appendChild(grid);
  const tb = mgBar(box, '문', 'time');
  const done = new Set();
  let busy = null, prog = 0, t = 0, knock = 0;
  items.forEach(it => {
    const b = el('div', 'hi', `<img src="${IMG(it.img)}" alt=""><span>${it.t}<small>${(it.cost / 1000).toFixed(1)}초</small></span><i></i>`);
    b.addEventListener('pointerdown', e => {
      e.preventDefault(); e.stopPropagation();
      if (busy || done.has(it.k)) return;
      busy = { it, b }; prog = 0; b.classList.add('doing'); SND.play('ui', .6); buzz();
    });
    b.addEventListener('click', e => e.stopPropagation());
    it.b = b;
    grid.appendChild(b);
  });
  await mgLoop(dt => {
    t += dt; knock -= dt;
    if (knock <= 0) { knock = 1.3; SND.play('knock', .7); UI.shake(1); }
    tb.set(100 - t / dur * 100);
    if (busy) {
      prog += dt * 1000;
      busy.b.querySelector('i').style.width = Math.min(100, prog / busy.it.cost * 100) + '%';
      if (prog >= busy.it.cost) { done.add(busy.it.k); busy.b.classList.remove('doing'); busy.b.classList.add('done'); SND.play('bag', .4); busy = null; }
    }
    if (t >= dur) return true;
  });
  mgDone();
  cov('mg:hide' + done.size);
  slam('문이 열렸다');
  return done;
}

// ================================================================== what can go wrong on a night out
// while following: the target turns, a patrol car, a phone call, a stranger, a dog
async function stalkTwist(T) {
  const S = G.S;
  NIGHT.add(rint(30, 70));
  if (!chance(.6)) return 'go';
  const k = pick(['look', 'look', 'patrol', 'call', 'drunk', 'dog']);
  cov('tw:' + k);
  const N = T.name, i_ = josa(N, '이', '가');
  if (k === 'look') {
    await UI.scene({ img: T.sex === 'f' ? 'h_look_f' : 'h_look_m', trans: 'cut', vcap: '', cap: `${N}${i_} 걸음을 멈췄다. 뒤를 돌아본다.`, snd: 'sting', vol: .6, shake: 1 });
    const i = await UI.choose([{ t: '휴대폰을 보는 척한다' }, { t: '가게 유리창 앞에 선다' }, { t: '그대로 앞질러 걷는다', d: '등을 보인다' }], { title: '지금', time: 3200 });
    if (i >= 0 && chance([.55, .6, .45][i] + trait('cal') * .07)) { UI.diary(`${N}${josa(N, '은', '는')} 다시 걷기 시작했다. 아무것도 못 봤다.`); return 'go'; }
    T.alert = true;
    slam(i < 0 ? '눈이 마주쳤다' : '눈치챘다');
    await UI.hcap(`${N}${i_} 걸음을 빨리했다. 휴대폰을 꺼낸다.`);
    const j = await UI.choose([{ t: '지금 따라붙는다', d: '눈치챈 사람은 더 어렵다', red: 1 }, { t: '보내 준다', d: '얼굴을 봤을지도 모른다' }], { title: '', time: 2800 });
    if (j !== 0) { S.susp = clamp(S.susp + 5, 0, 100); UI.diary(`${N}. 얼굴을 봤을까. 놓아줬다.`, 'red'); return 'abort'; }
    return 'go';
  }
  if (k === 'patrol') {
    await UI.scene({ img: 'h_flash', trans: 'cut', vcap: '순찰', cap: '골목 입구에 순찰차가 멈췄다. 손전등이 쓰레기봉투 더미를 훑는다.', snd: 'siren', vol: .35 });
    if (await mgHold({ title: '쓰레기 더미 뒤에서 숨을 참는다', n: 2, dur: 7 })) { UI.diary('손전등이 내 머리 위를 두 번 지나갔다. 숨을 참았다.'); await UI.hcap('순찰차가 떠났다. 다시 따라간다.'); return 'go'; }
    await UI.hcap('“거기 누구야.” 빛이 내 얼굴에 멈췄다.');
    const j = await UI.choose([{ t: '태연하게 걸어 나온다', d: '“담배 피우다가요.”' }, { t: '뛴다', red: 1 }], { title: '', time: 2600 });
    if (j === 0) {
      if (await mgCalm({ title: '“신분증 좀 봅시다.”', dur: 5 })) { S.police = clamp(S.police + 3, 0, 100); UI.diary('경찰이 내 신분증을 오래 봤다. 이름을 적어 갔다.', 'red'); }
      else { S.police = clamp(S.police + 7, 0, 100); S.susp = clamp(S.susp + 6, 0, 100); UI.diary('목소리가 떨렸다. 경찰이 내 이름을 두 번 불렀다.', 'red'); }
      return 'abort';
    }
    const r = await policeChase({});
    if (r === 'caught') await caughtEmpty();
    return 'abort';
  }
  if (k === 'call') {
    await UI.scene({ img: D.SPOTS[T.spot].img, keepIns: true, vcap: '', cap: `${N}${i_} 전화를 받았다. “응. 거의 다 왔어. 오 분.”`, snd: 'phone', vol: .5 });
    const j = await UI.choose([{ t: '오 분이면 된다', d: '기다리는 사람이 있다 — 금방 찾을 것이다', red: 1 }, { t: '오늘은 보낸다' }], { title: '' });
    if (j === 1) { UI.diary(`${N}. 누군가 기다리고 있었다. 보냈다.`); return 'abort'; }
    T.delay = 1; T.social = (T.social || 0) + 1;
    return 'go';
  }
  if (k === 'drunk') {
    await UI.scene({ img: 'city_night', vcap: '', cap: `${N} 뒤로 술 취한 남자가 비틀비틀 따라붙었다. 둘이 같은 방향이다.`, snd: 'step1' });
    const j = await UI.choose([{ t: '기다린다', d: '한 시간쯤 · 날이 밝아 온다' }, { t: '둘 다 따라간다', d: '취한 사람은 기억을 못 한다', red: 1 }, { t: '포기한다' }], { title: '' });
    if (j === 2) { UI.diary('술 취한 남자 때문에 돌아왔다. 이가 갈린다.'); S.urge = clamp(S.urge + 3, 0, 100); return 'abort'; }
    if (j === 0) { NIGHT.add(60); return 'go'; }
    if (chance(.45)) T.seenBy = true;
    return 'go';
  }
  // dog
  await UI.scene({ img: 'city_night', vcap: '', cap: '어느 집 개가 짖기 시작했다. 멈추지 않는다. 창문 하나에 불이 켜졌다.', snd: 'sting', vol: .5, ins: ['i_dog'] });
  const j = await UI.choose([{ t: '그늘로 들어간다' }, { t: '걸음을 늦춘다' }], { title: '지금', time: 2800 });
  if (j < 0 || chance(.35)) { T.seenBy = true; UI.diary('불 켜진 창문에서 누가 내려다봤다. 나를 봤을까.', 'red'); }
  return 'go';
}

// at the moment: they fight back, they get away, they scream
async function killTwist(T) {
  const S = G.S;
  tense(2);
  const N = T.name, i_ = josa(N, '이', '가');
  if (chance(.26 + (T.strong ? .22 : 0) - trait('str') * .04 + (T.alert ? .15 : 0))) {
    cov('tw:struggle');
    await UI.scene({ img: null, keepIns: true, cap: `${N}${i_} 팔을 뿌리쳤다. 생각보다 힘이 세다.`, snd: 'thud', shake: 2, sfx: '퍽', sfxBig: 1 });
    const ok = await mgMash({ title: '제압한다', need: 15 + (T.strong ? 6 : 0) + (T.alert ? 3 : 0) - trait('str') * 2, dur: 4.5 });
    if (!ok) {
      await UI.scene({ img: 'h_chase', trans: 'cut', vcap: '', cap: `${N}${i_} 빠져나갔다. 달린다. 골목 끝에 불 켜진 큰길이 있다.`, snd: 'step2', shake: 1 });
      if (!await victimChase(T)) return 'lost';
      tense(2);
    }
  }
  if (chance(.22 + (T.alert ? .15 : 0))) {
    cov('tw:scream');
    SND.play(T.sex === 'f' ? 'scream_f' : 'scream_m', .9);
    slam('비명');
    await UI.hcap('비명이 터졌다. 위층 창문에 불이 켜졌다.');
    const i = await UI.choose([{ t: '입을 막는다' }, { t: '서둘러 끝낸다', d: '누가 내다볼지도 모른다' }], { title: '', time: 2400 });
    if (i === 0) {
      if (!await mgMash({ title: '입을 막는다', need: 11, dur: 3 })) { addEv(YEAR() >= 1992 ? 'DNA' : '혈흔', `${N}에게 물린 손의 피`); UI.diary('손바닥을 물렸다. 장갑이 찢어졌다.', 'red'); }
    } else if (i < 0 || chance(.5)) return 'witness';
  }
  return 'go';
}

// they get away and run; follow the sound
async function victimChase(T) {
  const S = G.S;
  cov('tw:vchase');
  tense(3);
  const N = T.name;
  let gap = 50;
  const SETS = [['왼쪽 골목', '계단 아래', '담장 너머'], ['시장 안', '주차장', '철길 옆'], ['공사장', '빌라 사이', '다리 밑']];
  for (let r = 0; r < 2; r++) {
    const set = pick(SETS), good = rint(0, 2), hint = chance(.75) ? good : (good + 1 + rint(0, 1)) % 3;
    await UI.hcap(`${set[hint]} 쪽에서 무언가 넘어지는 소리.`);
    const i = await UI.choose(set.map(t => ({ t })), { title: `${N}${josa(N, '은', '는')} 어디로`, time: 2600 });
    if (i === good) { gap += 25; await UI.hcap('발소리가 가까워졌다.'); }
    else { gap -= 20; await UI.hcap(i < 0 ? '머뭇거렸다. 발소리가 멀어진다.' : '아니다. 발소리는 반대쪽이다.'); }
  }
  const ok = gap >= 95 || await mgMash({ title: '따라잡는다', need: Math.round(Math.max(10, 28 - gap / 5)), dur: 4 });
  if (ok) { slam('잡았다'); return true; }
  slam('놓쳤다');
  SND.play('siren', .7);
  S.police = clamp(S.police + 12, 0, 100); S.susp = clamp(S.susp + 8, 0, 100); S.montage = 1;
  addEv('목격', `살아남은 ${N}의 진술`);
  if (T.person) { T.person.met = true; T.person.life.push([AGE(), '골목에서 누군가에게 쫓겼다. 살아남았다.']); }
  await UI.scene({ img: 'city_night', trans: 'flash', vcap: '', cap: `${N}${josa(N, '이', '가')} 큰길로 뛰쳐나갔다. 택시 불빛 속으로. 살아남은 사람이 생겼다.`, shake: 1 });
  UI.diary(`${N}. 놓쳤다. 내 얼굴을 봤다. 살아남은 사람이 생겼다.`, 'red');
  await UI.next(3000);
  S.urge = clamp(S.urge + 8, 0, 100);
  return false;
}

// someone is chasing you: pick the dark way, then climb
async function policeChase(o = {}) {
  const S = G.S;
  cov('tw:pchase');
  tense(3);
  const n = S.flags.escapes || 0;
  await UI.scene({ img: 'h_pursuit', trans: 'flash', vcap: '추격', cap: o.car ? '사이렌이 백미러를 가득 채웠다. 핸들을 꺾는다.' : '호루라기. “거기 서!” 손전등 두 개가 등 뒤에서 흔들린다.', snd: 'siren', shake: 2, sfx: o.car ? '끼이익' : '삐익' });
  let gap = 45 - n * 8;
  const SETS = o.car ? [['골목으로 꺾는다', '고가 밑으로', '시장 길로'], ['신호를 무시한다', '공사장으로', '주택가로']]
    : [['왼쪽 골목', '건물 안으로', '지붕 위로'], ['지하 주차장', '시장 좌판 사이', '빌라 계단'], ['철길을 건넌다', '하수구 옆길', '교회 뒤']];
  for (let r = 0; r < 3 && gap > 0 && gap < 100; r++) {
    const set = pick(SETS), good = rint(0, 2), hint = chance(.7) ? good : (good + 1 + rint(0, 1)) % 3;
    await UI.hcap(`${set[hint]} 쪽이 어둡다. 거리 ${Math.max(0, Math.round(gap))}미터.`);
    const i = await UI.choose(set.map(t => ({ t })), { title: '어디로', time: 2300 - r * 200 });
    if (i === good) { gap += 22; SND.play('step2', .7); }
    else { gap -= i < 0 ? 28 : 18; SND.play('siren', .5); UI.shake(1); }
  }
  if (gap > 0 && gap < 100) gap += await mgMash({ title: o.car ? '액셀을 끝까지' : '담을 넘는다', need: 18 + n * 2, dur: 4 }) ? 40 : -40;
  if (gap >= 60) {
    S.flags.escapes = n + 1;
    S.police = clamp(S.police + 8, 0, 100); S.susp = clamp(S.susp + 6, 0, 100);
    slam('따돌렸다');
    await UI.hcap('사이렌이 멀어졌다. 숨이 돌아오지 않는다.');
    UI.diary('쫓겼다. 따돌렸다. 다리가 아직 떨린다.', 'red');
    await UI.next(2400);
    return 'escaped';
  }
  slam('잡혔다');
  return 'caught';
}

// caught running with nothing on you
async function caughtEmpty() {
  const S = G.S;
  S.police = clamp(S.police + 15, 0, 100);
  await UI.scene({ img: 'p_interrogation', trans: 'cut', vcap: '지구대', cap: '밤새 지구대 의자에 앉아 있었다. 왜 뛰었냐고 열두 번 물었다. 아무것도 나오지 않았다. 이름이 서류에 남았다.', snd: 'buzz' });
  UI.diary('지구대에서 밤을 새웠다. 내 이름이 서류에 남았다.', 'red');
  await UI.next(3000);
}

// while working: the doorbell, a phone call, the lights go out, the drain
async function workTwist(siteK, cut) {
  const S = G.S;
  NIGHT.add({ small: 150, big: 90, whole: 30 }[cut] || 60);
  if (!chance(.42)) return;
  const pool = [];
  if (['bath', 'theirs', 'motel', 'here'].includes(siteK)) pool.push('bell', 'bell');
  if (['bath', 'theirs', 'motel'].includes(siteK)) pool.push('drain');
  if (siteK !== 'car') pool.push('dark');
  if (S.love || S.married) pool.push('phone', 'phone');
  if (!pool.length) return;
  const k = pick(pool);
  cov('tw:' + k);
  if (k === 'bell') {
    const who = siteK === 'motel' ? '모텔 주인' : '옆집 할머니';
    await UI.scene({ img: 'h_peep', trans: 'cut', vcap: '초인종', cap: `새벽 ${NIGHT.now()}. 초인종. 문구멍 너머에 ${who}${josa(who, '이', '가')} 서 있다.`, snd: 'knock' });
    const i = await UI.choose([{ t: '숨죽인다', d: '없는 척' }, { t: '문을 조금 연다', d: '체인을 건 채로' }, { t: '샤워기를 튼다', d: '씻는 중이라고' }], { title: '', time: 3600 });
    if (i <= 0) {
      if (await mgHold({ cue: 'sound', word: '똑 똑', title: '없는 척 숨죽인다', n: 3, dur: 7 })) UI.diary('발소리가 멀어졌다. 한참 뒤에야 숨을 쉬었다.');
      else { S.susp = clamp(S.susp + 10, 0, 100); UI.diary(`“안에 있는 거 다 알아요.” ${who}${josa(who, '이', '가')} 한참 서 있다가 갔다.`, 'red'); }
    } else if (i === 1) {
      if (await mgCalm({ title: '“떡 좀 드시라고…”', dur: 5 })) { S.susp = clamp(S.susp - 2, 0, 100); UI.diary('떡을 받았다. 내 손은 보지 않았다.'); }
      else { S.susp = clamp(S.susp + 12, 0, 100); S.homeTraces += .3; UI.diary(`${who}의 코가 움찔했다. 내 소매를 봤다.`, 'red'); }
    } else { NIGHT.add(20); S.susp = clamp(S.susp + 3, 0, 100); UI.diary('물소리 너머로 발소리가 돌아갔다.'); }
    return;
  }
  if (k === 'phone') {
    const nm = (S.love || S.married).name;
    await UI.scene({ img: null, keepIns: true, vcap: '', cap: `전화가 울린다. ${nm}.`, snd: 'phone', ins: ['i_phone'] });
    const i = await UI.choose([{ t: '받는다', d: '목소리를 가다듬고' }, { t: '받지 않는다' }], { title: '', time: 3400 });
    if (i === 0) {
      if (await mgCalm({ title: '“어디야? 왜 이렇게 숨이 차?”', dur: 5 })) UI.diary(`${nm}에게 야근이라고 했다. 믿었다.`, 'love');
      else { if (S.love) { S.love.warmth -= 1; S.love.knows = (S.love.knows || 0) + 1; } S.susp = clamp(S.susp + 5, 0, 100); UI.diary(`${nm}${josa(nm, '이', '가')} 물었다. “거기 물소리 뭐야?”`, 'red'); }
    } else { if (S.love) S.love.warmth -= 1; S.susp = clamp(S.susp + 3, 0, 100); UI.diary(`${nm}에게서 부재중 전화 일곱 통.`, 'love'); }
    return;
  }
  if (k === 'dark') {
    await UI.scene({ img: null, keepIns: true, trans: 'flash', vcap: '정전', cap: '정전. 건물 전체가 꺼졌다. 어둠 속에서 손에 든 것의 무게만 느껴진다.', snd: 'buzz', shake: 1 });
    $('#play').classList.add('mg-dark');
    const i = await UI.choose([{ t: '더듬어서 계속한다', d: '손끝에 남는 게 많아진다' }, { t: '불이 들어올 때까지 기다린다', d: '한 시간 · 날이 밝아 온다' }], { title: '어둠 속에서' });
    $('#play').classList.remove('mg-dark');
    if (i === 0) G.huntTrace = (G.huntTrace || 1) * 1.3; else NIGHT.add(60);
    return;
  }
  // drain
  await UI.scene({ img: null, keepIns: true, vcap: '', cap: '배수구가 막혔다. 물이 발목까지 차오른다. 아래층에 사람이 산다.', snd: 'drip', ins: ['i_drain'] });
  const i = await UI.choose([{ t: '손으로 뚫는다' }, { t: '물을 잠그고 퍼낸다', d: '시간이 걸린다' }], { title: '지금', time: 3000 });
  if (i === 0) G.huntTrace = (G.huntTrace || 1) * 1.2;
  else if (i === 1) { NIGHT.add(40); S.homeTraces += .4; }
  else { S.susp = clamp(S.susp + 10, 0, 100); S.homeTraces += .6; slam('넘쳤다'); UI.diary('아래층 천장으로 물이 샜다. 새벽에 아래층 남자가 올라왔다.', 'red'); }
}

// on the way: a checkpoint, a torn bag, a taxi driver, a night guard. returns 'go' | 'over'
async function moveTwist(cut) {
  const S = G.S;
  NIGHT.add(rint(25, 50));
  if (!chance(S.victims.length ? .45 : .2)) return 'go';
  const car = !!S.car || S.job === 'taxi';
  const k = car ? pick(['check', 'check', 'tear']) : pick(['tear', 'taxi', 'guard']);
  cov('tw:' + k);
  const nb = cut === 'small' ? '열한' : cut === 'big' ? '여섯' : '한';
  if (k === 'check') {
    await UI.scene({ img: 'h_check', trans: 'cut', vcap: '검문', cap: `음주 단속. 경광봉이 창문을 두드린다. 트렁크에 봉투가 ${nb} 개.`, snd: 'siren', vol: .4 });
    if (await mgCalm({ title: '“한 번 불어 보세요.”', dur: 6 })) { await UI.hcap('“가셔도 됩니다.” 경관이 손전등을 내렸다.'); UI.diary('음주 단속을 지나갔다. 트렁크는 열지 않았다.'); return 'go'; }
    slam('트렁크 좀 열어 보시죠');
    const i = await UI.choose([{ t: '트렁크를 연다', d: '쓰레기라고 한다' }, { t: '액셀을 밟는다', red: 1 }, { t: '웃으며 농담을 던진다', d: '“술은 입에도 안 댔는데요.”' }], { title: '', time: 3000 });
    if (i === 1) {
      const r = await policeChase({ car: true });
      if (r === 'caught') { await arrestWithBags(); return 'over'; }
      addEv('차량', `${YEAR()}년 검문 도주 차량`);
      return 'go';
    }
    if (i === 2 && chance(.35 + trait('cha') * .1)) { await UI.hcap('경관이 웃었다. “조심히 가세요.”'); return 'go'; }
    if (i >= 0 && chance(S.victims.length >= 2 ? .55 : .8)) {
      await UI.hcap('경관이 봉투 하나를 손전등으로 툭 쳤다. 코를 막고 손을 저었다. “가세요.”');
      S.police = clamp(S.police + 4, 0, 100); addEv('목격', `${YEAR()}년 새벽 검문소 경관의 기억`);
      UI.diary('경관이 봉투를 손전등으로 쳤다. 열지는 않았다. 내 얼굴은 봤다.', 'red');
      return 'go';
    }
    await UI.scene({ img: 'h_check', keepIns: true, trans: 'red', vcap: '', cap: '봉투 매듭이 풀렸다. 경관의 손전등이 떨렸다.', shake: 2 });
    await UI.next(1800);
    await arrestWithBags();
    return 'over';
  }
  if (k === 'tear') {
    await UI.scene({ img: 'd_bags', trans: 'cut', vcap: '', cap: '봉투 하나가 터졌다. 가로등 바로 아래에서.', snd: 'bag', shake: 1, sfx: '투둑' });
    const i = await UI.choose([{ t: '주워 담는다', d: '시간이 걸린다' }, { t: '그대로 두고 간다', d: '빠르다. 하지만 남는다' }], { title: '지금', time: 2800 });
    if (i === 0) { NIGHT.add(25); G.huntTrace = (G.huntTrace || 1) * 1.15; }
    else { G.leak = true; UI.diary('가로등 아래에 두고 왔다. 아침이면 누가 볼 것이다.', 'red'); }
    return 'go';
  }
  if (k === 'taxi') {
    await UI.scene({ img: 'job_taxi', vcap: '택시', cap: '기사가 룸미러로 봉투를 봤다. “뭐가 이렇게 무거워요? 냄새가 좀…”', snd: 'step1' });
    if (await mgCalm({ title: '“김장했어요.”', dur: 5 })) UI.diary('기사는 라디오 볼륨을 올렸다.');
    else { addEv('목격', `${YEAR()}년 새벽 택시 기사의 기억`); S.police = clamp(S.police + 4, 0, 100); UI.diary('기사가 내 얼굴을 룸미러로 오래 봤다.', 'red'); }
    return 'go';
  }
  // guard
  await UI.scene({ img: 'h_flash', vcap: '경비', cap: '수레를 끄는 새벽. 공사장 경비원의 손전등이 담벼락을 훑는다.', snd: 'step2' });
  if (await mgHold({ title: '수레 뒤에서 숨을 참는다', n: 2, dur: 6 })) return 'go';
  await UI.hcap('“거기 뭐요?” 경비원이 다가온다.');
  const i = await UI.choose([{ t: '수레를 끌고 걸어간다', d: '“고물이요.”' }, { t: '수레를 두고 뛴다', red: 1 }], { title: '', time: 2600 });
  if (i === 0) { addEv('목격', `${YEAR()}년 공사장 경비원의 기억`); S.police = clamp(S.police + 3, 0, 100); return 'go'; }
  if (S.victims.length < 2 || await mgMash({ title: '달린다', need: 16, dur: 4 })) { G.leak = true; slam('따돌렸다'); UI.diary('수레를 두고 왔다. 경찰이 수레를 열 것이다.', 'red'); S.police = clamp(S.police + 8, 0, 100); return 'go'; }
  await arrestWithBags();
  return 'over';
}

// at the water / the hill: someone is there. returns 'go' | 'seen' | 'extra'
async function dumpTwist(dk) {
  const S = G.S;
  NIGHT.add(rint(30, 60));
  if (dk === 'keep' || dk === 'burn') return 'go';
  const late = NIGHT.late();
  if (!chance(late ? .6 : .3)) return 'go';
  const water = ['reservoir', 'river'].includes(dk);
  cov('tw:' + (water ? 'fisher' : 'hiker'));
  await UI.scene({ img: water ? 'h_fisher' : 'h_flash', trans: 'cut', vcap: '', cap: water ? `${late ? '해가 올라온다. ' : ''}물안개 너머에 낚시꾼 노인이 자리를 편다. 이쪽으로 고개를 돌린다.` : `${late ? '날이 밝아 온다. ' : ''}새벽 등산객의 헤드랜턴이 오솔길을 내려온다.`, snd: 'step1' });
  if (await mgHold({ title: water ? '갈대 속에서 숨을 참는다' : '덤불 속에서 숨을 참는다', n: late ? 3 : 2, dur: 7 })) { UI.diary(water ? '낚시꾼은 찌만 봤다.' : '랜턴 불빛이 지나갔다.'); return 'go'; }
  slam('봤다');
  const i = await UI.choose([{ t: water ? '노인에게 다가간다' : '뒤따라간다', d: '목격자를 남길 수는 없다', red: 1 }, { t: '돌아서서 걷는다', d: '얼굴을 봤을까' }], { title: '', time: 3000 });
  if (i !== 0) return 'seen';
  cov('tw:extra');
  await UI.scene({ img: water ? 'h_fisher' : 'h_flash', keepIns: true, trans: 'red', vcap: '', cap: water ? '노인은 소리를 내지 않았다. 낚싯대가 천천히 물에 떠내려갔다.' : '랜턴이 비탈 아래로 굴러갔다. 한참 동안 빛이 돌았다.', shake: 2, splat: 1 });
  S.victims.push({ name: rname('m'), sex: 'm', age: rint(58, 78), old: true, job: water ? '낚시꾼' : '등산객', t: S.t, year: YEAR(), site: 'here', how: 'extra', cut: 'whole', dump: dk, reported: false, reportIn: 1, social: 1, found: false, identified: false, trace: 1.2, seen: false, parts: 1, partsFound: 0 });
  S.police = clamp(S.police + 4, 0, 100); S.urge = clamp(S.urge - 15, 0, 100);
  UI.diary('계획에 없던 사람. 하나가 더 늘었다.', 'red kill');
  await UI.next(3000);
  return 'extra';
}

// home search: hide what you can before they come in. returns the set of hidden things
async function searchHide() {
  const S = G.S;
  const items = [
    { k: 'saw', t: '톱', img: 'i_saw', cost: 700 },
    { k: 'shoes', t: '젖은 신발', img: 'i_shoes', cost: 600 },
    { k: 'list', t: '수첩', img: 'i_list', cost: 500 },
    { k: 'gloves', t: '장갑', img: 'i_gloves', cost: 500 },
    { k: 'tile', t: '욕실 줄눈 닦기', img: 'i_tilefinger', cost: 1600 },
  ];
  if (S.trophies > 0) items.unshift({ k: 'freezer', t: '냉동고 위에 이불', img: 'x_freezer', cost: 3200 });
  await UI.scene({ img: 'h_peep', trans: 'cut', vcap: '압수수색', cap: '문구멍 너머에 사람이 여럿. 흰 옷. “영장 있습니다. 문 여세요.”', snd: 'knock', shake: 1 });
  return mgHide(items, { dur: 5.5, title: '문이 열리기 전에' });
}

// stopped on the way: what is in the bags goes on the record first
async function arrestWithBags() {
  if (G.pending) { G.pending(); G.pending = null; }
  G.withBags = true;
  try { await arrest(); } finally { G.withBags = false; }
}
