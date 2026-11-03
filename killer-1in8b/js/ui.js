// presentation: scenes, cut-ins, captions, choices, diary, sound
'use strict';

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const IMG = k => `img/${LAY.mode === 'm' ? 'm/' : ''}${k}.webp`;
// taps still landing from a mashing / holding moment must not pick the next thing on screen
const inputLocked = () => performance.now() < (G.lockUntil || 0);

// ------------------------------------------------------------------ background loader
// Everything is fetched in story order, 3 at a time, after the title is up.
// Pictures the current scene needs jump the queue. Only the browser cache keeps them (no decoded copies in memory).
const LOADER = {
  q: [], done: new Set(), busy: new Set(), max: /^https?:/.test(location.protocol) ? 4 : 3, started: false, total: 0,
  order() {
    const first = ['title', 'nursery', 'birth', 'i_eye', 'child_mother', 'child_father', 'child_bird', 'child_class', 'child_rabbit', 'child_fire', 'teen_roof', 'teen_knife', 'i_clock',
      'city_night', 'city_day', 'home_banjiha', 'job_butcher', 'job_taxi', 'job_hospital', 'face_det'];
    const rank = k => k.startsWith('face_') ? 1 : k.startsWith('t_') ? 2 : k.startsWith('i_') ? 3 : k.startsWith('k_') ? 4 : k.startsWith('d_') ? 5 : k.startsWith('x_') ? 6 : k.startsWith('p_') || k.startsWith('m_') ? 7 : k.startsWith('e_') ? 9 : 8;
    const rest = ASSET_IMG.filter(k => !first.includes(k)).sort((a, b) => rank(a) - rank(b));
    return [...first, ...rest];
  },
  start() {
    if (this.started) return;
    this.started = true;
    const c = navigator.connection;
    const all = this.order();
    this.total = all.length;
    if (c && c.saveData) { this.progress(); return; }   // data saver: only fetch what scenes ask for
    this.q.push(...all.filter(k => !this.done.has(k)));
    this.pump();
  },
  add(keys, front) {
    const ks = keys.filter(k => k && !this.done.has(k) && !this.busy.has(k));
    this.q = this.q.filter(k => !ks.includes(k));
    front ? this.q.unshift(...ks) : this.q.push(...ks);
    this.pump();
  },
  pump() {
    while (this.busy.size < this.max && this.q.length) {
      const k = this.q.shift();
      if (this.done.has(k) || this.busy.has(k)) continue;
      this.busy.add(k);
      const im = new Image();
      im.decoding = 'async';
      const fin = () => { this.busy.delete(k); this.done.add(k); this.progress(); this.pump(); };
      im.onload = fin; im.onerror = fin;
      im.src = IMG(k);
    }
    if (!this.q.length && !this.busy.size && !this.sndDone) this.sounds();
  },
  sounds() {
    this.sndDone = true;
    if (!/^https?:/.test(location.protocol)) return;
    ASSET_SND.forEach((k, i) => setTimeout(() => SND.ctx ? SND.load(k) : fetch(`snd/${k}.mp3`).catch(() => {}), i * 120));
  },
  progress() {
    const n = this.total ? Math.min(this.total, [...this.done].filter(k => ASSET_IMG.includes(k)).length) : 0;
    const p = this.total ? Math.round(n / this.total * 100) : 100;
    const e = document.getElementById('t-load');
    if (e) { e.textContent = p >= 100 ? '그림을 모두 받았어요' : `그림을 받는 중 ${p}% · 다 받지 않아도 시작할 수 있어요`; e.style.setProperty('--p', p + '%'); e.classList.toggle('fin', p >= 100); }
  },
};
const preload = keys => LOADER.add(keys, true);

// focus point of the person in each "target" picture (fractions of the picture)
const FOCUS = {
  t_alley_f: [.49, .36], t_bar_m: [.46, .27], t_busstop_f: [.55, .30], t_car_m: [.78, .32], t_delivery_f: [.47, .27],
  t_jogger_m: [.52, .32], t_laundry_f: [.27, .48], t_market_f: [.40, .40], t_motel_m: [.41, .36], t_stairs_m: [.43, .28], t_taxi_f: [.53, .44],
};

// ------------------------------------------------------------------ sound
// Web Audio on http(s) (works on iPhone after the first tap); plain <audio> on file:// where fetch is blocked
const AC = window.AudioContext || window.webkitAudioContext;
const SND = {
  on: true, vol: .8, web: /^https?:/.test(location.protocol) && !!AC,
  ctx: null, master: null, buf: {}, loading: {},
  ambKey: null, ambNode: null, heartNode: null, heartLevel: 0,
  cache: {}, ambEl: null, heartEl: null,

  unlock() {
    if (!this.web) return;
    if (!this.ctx) {
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.on ? this.vol : 0;
      this.master.connect(this.ctx.destination);
      ['ui', 'pen', 'step1', 'amb_drone', 'heartbeat', 'stab1', 'chop1', 'thud'].forEach(k => this.load(k));
      if (this.ambKey) { const k = this.ambKey; this.ambKey = null; this.amb(k); }
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  },
  load(k) {
    if (this.buf[k]) return Promise.resolve(this.buf[k]);
    if (!this.loading[k]) {
      this.loading[k] = fetch(`snd/${k}.mp3`).then(r => r.arrayBuffer())
        .then(a => new Promise((res, rej) => this.ctx.decodeAudioData(a, res, rej)))
        .then(b => (this.buf[k] = b)).catch(() => null);
    }
    return this.loading[k];
  },
  src(b, loop, v) {
    const s = this.ctx.createBufferSource();
    s.buffer = b; s.loop = !!loop;
    const g = this.ctx.createGain();
    g.gain.value = v;
    s.connect(g); g.connect(this.master);
    s.start();
    return { s, g };
  },
  ramp(g, to, ms) {
    const t = this.ctx.currentTime;
    g.gain.cancelScheduledValues(t);
    g.gain.setValueAtTime(g.gain.value, t);
    g.gain.linearRampToValueAtTime(to, t + ms / 1000);
  },

  play(k, v = 1) {
    if (!this.on || !k) return;
    if (this.web) {
      if (!this.ctx) return;
      this.load(k).then(b => { if (b && this.on) this.src(b, false, Math.min(1.2, v)); });
      return;
    }
    if (!this.cache[k]) { const a = new Audio(`snd/${k}.mp3`); a.preload = 'auto'; this.cache[k] = a; }
    const a = this.cache[k].cloneNode();
    a.volume = Math.min(1, v * this.vol);
    a.play().catch(() => {});
  },
  amb(k, v = .45) {
    if (this.ambKey === k) return;
    this.ambKey = k;
    if (this.web) {
      if (!this.ctx) return;
      const old = this.ambNode;
      if (old) { this.ramp(old.g, 0, 1200); setTimeout(() => { try { old.s.stop(); } catch (e) {} }, 1300); }
      this.ambNode = null;
      if (!k) return;
      this.load(k).then(b => {
        if (!b || this.ambKey !== k) return;
        this.ambNode = this.src(b, true, 0);
        this.ramp(this.ambNode.g, v, 1500);
      });
      return;
    }
    const old = this.ambEl;
    if (old) this.fade(old, 0, 1200, true);
    if (!k) { this.ambEl = null; return; }
    const a = new Audio(`snd/${k}.mp3`);
    a.loop = true; a.volume = 0;
    this.ambEl = a;
    if (this.on) a.play().catch(() => {});
    this.fade(a, v * this.vol, 1500);
  },
  heart(level) { // 0..1
    this.heartLevel = level;
    const v = level <= 0 ? 0 : .15 + .6 * level;
    if (this.web) {
      if (!this.ctx) return;
      if (!this.heartNode && v > 0) {
        this.load('heartbeat').then(b => { if (b && !this.heartNode && this.heartLevel > 0) { this.heartNode = this.src(b, true, 0); this.heart(this.heartLevel); } });
        return;
      }
      if (this.heartNode) { this.heartNode.s.playbackRate.value = 1 + level * .5; this.ramp(this.heartNode.g, v, 800); }
      return;
    }
    if (!this.heartEl) { this.heartEl = new Audio('snd/heartbeat.mp3'); this.heartEl.loop = true; this.heartEl.volume = 0; }
    const h = this.heartEl;
    if (v > 0 && h.paused && this.on) h.play().catch(() => {});
    h.playbackRate = 1 + level * .5;
    this.fade(h, v * this.vol, 800, v === 0);
  },
  fade(a, to, ms, stop) {
    const from = a.volume, t0 = performance.now();
    const step = () => {
      const k = Math.min(1, (performance.now() - t0) / ms);
      a.volume = Math.max(0, Math.min(1, from + (to - from) * k));
      if (k < 1) requestAnimationFrame(step); else if (stop) a.pause();
    };
    step();
  },
  toggle() {
    this.on = !this.on;
    if (this.web) { if (this.master) this.master.gain.value = this.on ? this.vol : 0; }
    else if (!this.on) { this.ambEl && this.ambEl.pause(); this.heartEl && this.heartEl.pause(); }
    else { this.ambEl && this.ambEl.play().catch(() => {}); }
    $('#mute').classList.toggle('off', !this.on);
    try { localStorage.setItem('k8b_mute', this.on ? '0' : '1'); } catch (e) {}
  },
  pauseAll(p) {
    if (this.web && this.ctx) { p ? this.ctx.suspend() : this.ctx.resume(); return; }
    if (p) { this.ambEl && this.ambEl.pause(); this.heartEl && this.heartEl.pause(); }
    else if (this.on) { this.ambEl && this.ambEl.play().catch(() => {}); }
  },
};

// layout: 'pc' (1920x1080 landscape) or 'm' (1080 x H portrait)
const LAY = { mode: 'pc', W: 1920, H: 1080 };

// ------------------------------------------------------------------ jagged hand-cut edges
let jseed = 1;
const jr = () => { jseed = (jseed * 16807) % 2147483647; return jseed / 2147483647; };
function jag(w, h, amp = 5, slant = 0, seed = 7) {
  jseed = seed;
  const pts = [];
  const edge = (x0, y0, x1, y1, n) => { for (let i = 0; i < n; i++) { const t = i / n; pts.push([x0 + (x1 - x0) * t + (jr() - .5) * amp, y0 + (y1 - y0) * t + (jr() - .5) * amp]); } };
  edge(0, 0, w, 0, 40); edge(w, 0, w, h - slant, 24); edge(w, h - slant, 0, h, 40); edge(0, h, 0, 0, 24);
  return 'polygon(' + pts.map(p => `${p[0].toFixed(1)}px ${p[1].toFixed(1)}px`).join(',') + ')';
}

// ------------------------------------------------------------------ text helpers
async function typeInto(node, text, cps = 38) {
  node.textContent = '';
  if (G.skipType) { node.textContent = text; return; }
  const chars = [...text];
  for (let i = 0; i < chars.length; i++) {
    node.textContent += chars[i];
    if (G.skipType) { node.textContent = text; return; }
    await sleep(chars[i] === ' ' ? 8 : 1000 / cps);
  }
}

// ------------------------------------------------------------------ UI
const UI = {
  cur: null,
  show(id) {
    $$('.screen').forEach(s => s.classList.toggle('on', s.id === id));
    this.cur = id;
    document.body.classList.toggle('inplay', id === 'play');
    if (id !== 'play') {
      this.sid = (this.sid || 0) + 1; $('#cutins').innerHTML = ''; $('#nextcue').classList.remove('on');
      G.tense = 0; G.night = null; $('#play').classList.remove('t1', 't2', 't3', 'mgon', 'mg-dark');
      const c = $('#clock'); if (c) c.classList.remove('on', 'late');
    }
  },

  // ---- scene picture with transitions
  async pic(key, mode = 'ink') {
    const box = $('#scene');
    const top = box.querySelector('.layer.top');
    if (top && top.dataset.k === key) return;
    const L = el('div', 'layer');
    L.dataset.k = key;
    const im = new Image();
    im.src = IMG(key);
    const s0 = 1.03 + Math.random() * .04, s1 = s0 + .06 + Math.random() * .06;
    const dx = (Math.random() - .5) * 3, dy = (Math.random() - .5) * 2;
    im.style.cssText = `--s0:${s0};--s1:${s1};--x0:${-dx}%;--y0:${-dy}%;--x1:${dx}%;--y1:${dy}%`;
    L.appendChild(im);
    if (G.auto) G.log = (G.log || []).concat([`${Math.round(performance.now())} pic ${key} start`]).slice(-60);
    LOADER.add([key], true);
    const t0 = performance.now();
    const mark = setTimeout(() => box.classList.add('loading'), 250);
    await new Promise(r => { if (im.complete && im.naturalWidth) r(); else { im.onload = r; im.onerror = r; setTimeout(r, G.auto ? 50 : 8000); } });
    clearTimeout(mark); box.classList.remove('loading');
    if (G.auto) G.log = (G.log || []).concat([`${Math.round(performance.now())} pic ${key} loaded`]).slice(-60);
    if (im.decode && !G.auto) { try { await Promise.race([im.decode(), sleep(400)]); } catch (e) {} }
    G.waited = (G.waited || 0) + (performance.now() - t0);
    const fx = 20 + Math.random() * 60, fy = 20 + Math.random() * 60;
    if (mode === 'ink') {
      L.style.clipPath = `circle(0% at ${fx}% ${fy}%)`;
      L.classList.add('inking');
    }
    box.querySelectorAll('.layer.top').forEach(o => o.classList.remove('top'));
    L.classList.add('top');
    box.insertBefore(L, box.querySelector('.over'));
    if (mode === 'ink') {
      L.getBoundingClientRect();
      L.style.clipPath = `circle(150% at ${fx}% ${fy}%)`;
    } else if (mode === 'flash') {
      this.flash('#fff', 260);
    } else if (mode === 'red') {
      this.flash('#a00', 380);
    }
    setTimeout(() => box.querySelectorAll('.layer:not(.top)').forEach(o => o.remove()), 1400);
  },

  // full beat: picture + captions + effects. resolves when text is out.
  async scene(o) {
    G.beats = (G.beats || 0) + 1;
    if (G.auto) G.log = (G.log || []).concat([`${Math.round(performance.now())} scene ${o.img}`]).slice(-60);
    if (G.stopAt && G.beats > G.stopAt) { const d = $('#dlines'); document.body.dataset.dbg = [d.clientHeight, d.scrollHeight, $('#diary .txt').clientHeight, $('#dyear').offsetHeight, UI.cur, $('#play').className, G.S.diary.length].join('|'); await new Promise(() => {}); }
    if (o.amb !== undefined) SND.amb(o.amb);
    this.clearMarks();
    if (!o.keepIns) this.clearCutins();
    if (o.img) await this.pic(o.img, o.trans || 'ink');
    if (o.snd) SND.play(o.snd, o.vol || 1);
    if (o.shake) this.shake(o.shake);
    if (o.splat) this.decal(o.splat);
    if (o.mark) this.mark(o.mark);
    const jobs = [];
    if (o.vcap !== undefined) jobs.push(this.vcap(o.vcap));
    const sid = this.sid = (this.sid || 0) + 1;
    const live = () => this.sid === sid && this.cur === 'play';
    if (o.sfx) setTimeout(() => live() && this.sfx(o.sfx, o.sfxBig), 350);
    if (o.ins && !o.mark) o.ins.forEach((k, i) => setTimeout(() => live() && this.cutin(k, i, o.ins.length), 500 + i * 650));
    if (o.cap !== undefined) jobs.push(this.hcap(o.cap));
    await Promise.all(jobs);
  },

  async vcap(t) {
    const v = $('#vcap');
    $('#hcapbox').dataset.tag = t || '';
    if (!t) { v.classList.remove('on'); return; }
    v.classList.add('on');
    await typeInto(v, t, 34);
  },
  async hcap(t) {
    const h = LAY.mode === 'm' ? $('#hcapbox') : $('#hcap');
    (LAY.mode === 'm' ? $('#hcap') : $('#hcapbox')).textContent = '';
    if (!t) { h.classList.remove('on'); h.textContent = ''; return; }
    h.classList.add('on');
    G.est = (G.est || 0) + t.length * 25;
    h.classList.remove('wait', 'in'); void h.offsetWidth; h.classList.add('typing', 'in');
    await typeInto(h, t, 40);
    h.classList.remove('typing');
  },

  sfx(text, big) {
    const box = $('#sfxbox');
    const s = el('div', 'sfx', text);
    const size = big ? 200 + Math.random() * 60 : 110 + Math.random() * 70;
    s.style.fontSize = size + 'px';
    s.style.left = (45 + Math.random() * 40) + '%';
    s.style.top = (15 + Math.random() * 55) + '%';
    s.style.setProperty('--r', ((Math.random() - .5) * 26).toFixed(1) + 'deg');
    box.appendChild(s);
    setTimeout(() => s.classList.add('out'), 2600);
    setTimeout(() => s.remove(), 3400);
  },

  // close-up insert panels: corners only (the middle of the picture is where the subject is),
  // and they leave on their own so the picture is never covered for long
  cutin(key, i = 0, n = 1) {
    const st = $('#scene').offsetTop;
    const SLOTS = LAY.mode === 'm'
      ? [[566, st + 10, 172, 172, 3.5], [12, st + 240, 172, 172, -4], [566, st + 240, 172, 172, 2.5]]
      : [[1000, 40, 260, 260, 3.5], [44, 420, 240, 240, -4], [1010, 360, 240, 240, 2]];
    if (i >= (LAY.mode === 'm' ? 2 : 3)) return;
    const pick = n === 1 ? SLOTS[Math.floor(Math.random() * SLOTS.length)] : SLOTS[i % SLOTS.length];
    const [x, y, w, h, r] = pick;
    const c = el('div', 'cutin');
    c.style.cssText = `left:${x}px;top:${y}px;width:${w}px;height:${h}px;--r:${r}deg`;
    const inner = el('div', 'ci');
    inner.style.clipPath = jag(w - 16, h - 16, 6, 0, (x * 7 + y) | 0);
    const im = new Image();
    im.src = IMG(key);
    inner.appendChild(im);
    c.appendChild(inner);
    $('#cutins').appendChild(c);
    SND.play('ui', .5);
    this.shake(1);
    setTimeout(() => { c.classList.add('out'); setTimeout(() => c.remove(), 400); }, LAY.mode === 'm' ? 2200 : 3200);
  },
  clearCutins() {
    $$('#cutins .cutin').forEach(c => { c.classList.add('out'); setTimeout(() => c.remove(), 400); });
  },

  // red marker circle + scrawl on the target
  mark(m) {
    const f = FOCUS[m.img] || [.5, .4];
    const box = $('#scene');
    const W = box.offsetWidth, H = box.offsetHeight;
    // the picture is 16:9 and object-fit: cover
    const iw = Math.max(W, H * 16 / 9), ih = Math.max(H, W * 9 / 16);
    const cx = f[0] * iw - (iw - W) / 2, cy = f[1] * ih - (ih - H) / 2, rx = 92, ry = 104;
    const svg = $('#mark');
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const p = [];
    for (let i = 0; i <= 26; i++) {
      const a = -1.9 + i / 26 * 6.9;
      const k = 1 + (Math.random() - .5) * .08;
      p.push([(cx + Math.cos(a) * rx * k).toFixed(1), (cy + Math.sin(a) * ry * k).toFixed(1)]);
    }
    const right = f[0] < .55;
    const tx = right ? Math.min(cx + rx + 150, W - 300) : Math.max(cx - rx - 150, 300);
    const ty = Math.max(70, cy - 90);
    const ax = right ? cx + rx * .9 : cx - rx * .9;
    svg.innerHTML = `<path class="draw" d="M${p.map(q => q.join(' ')).join(' L')}" />
      <path class="draw d2" d="M${ax} ${cy - 20} Q ${(ax + tx) / 2} ${cy - 60}, ${right ? tx - 20 : tx + 20} ${ty + 30}" />`;
    const s = $('#scrawl');
    s.innerHTML = m.lines.map((l, i) => `<div class="l${i}">${l}</div>`).join('');
    s.style.left = right ? (tx - 10) + 'px' : 'auto';
    s.style.right = right ? 'auto' : (W - tx - 10) + 'px';
    s.style.top = ty + 'px';
    s.style.textAlign = right ? 'left' : 'right';
    s.classList.add('on');
    SND.play('pen', .7);
  },
  clearMarks() {
    $('#mark').innerHTML = '';
    $('#scrawl').classList.remove('on');
  },

  flash(color = '#fff', ms = 300) {
    const f = $('#flash');
    f.style.background = color;
    f.classList.remove('go'); f.getBoundingClientRect(); f.classList.add('go');
    f.style.animationDuration = ms + 'ms';
  },
  shake(n = 1) {
    const s = $('#stage');
    s.classList.remove('shake', 'shake2'); s.getBoundingClientRect();
    s.classList.add(n > 1 ? 'shake2' : 'shake');
  },
  decal(n = 1) {
    for (let i = 0; i < n; i++) {
      const d = el('img', 'decal');
      const onPage = Math.random() < .35;
      d.src = (onPage ? 'img/decal_' : 'img/splat_') + (Math.random() < .5 ? 'a' : 'b') + '.webp';
      d.className = 'decal ' + (onPage ? 'mult' : 'scr');
      const w = 380 + Math.random() * 520;
      d.style.cssText = `width:${w}px;left:${Math.random() * (LAY.W - 220) - 100}px;top:${Math.random() * (LAY.H - 180) - 80}px;transform:rotate(${Math.random() * 360}deg)`;
      $('#decals').appendChild(d);
      const all = $$('#decals .decal');
      while (all.length > (LAY.mode === 'm' ? 5 : 14)) all.shift().remove();
    }
  },

  // ---- choices
  choose(opts, o = {}) {
    G.est = (G.est || 0) + 2500 + opts.length * 600;
    return new Promise(res => {
      const box = $('#choices');
      box.innerHTML = '';
      box.classList.remove('idle');
      box.classList.add('ask');
      box.classList.toggle('many', opts.length + (o.title ? 1 : 0) > 4);
      const play = $('#play'); play.classList.add('ask'); play.classList.remove('tight');
      box.dataset.sig = '';
      box.appendChild(el('div', 'ctitle', `<span class="go">▶</span> ${o.title || '고른다'}`));
      const rows = [];
      let settled = false;
      const pick = i => {
        if (opts[i].dis || settled) return;
        settled = true;
        SND.play('ui', .8); buzz();
        document.removeEventListener('keydown', key);
        rows.forEach((r, j) => r.classList.add(j === i ? 'picked' : 'gone'));
        setTimeout(() => { box.innerHTML = ''; box.classList.remove('ask'); $('#play').classList.remove('ask', 'tight'); res(i); }, 420);
      };
      opts.forEach((op, i) => {
        const r = el('div', 'ch' + (op.dis ? ' dis' : '') + (op.red ? ' red' : ''));
        r.innerHTML = `<span class="d">${i + 1}</span><span class="t">${op.t}<svg class="ul" viewBox="0 0 420 22" preserveAspectRatio="none"><path d="M2 12 C 80 4, 160 18, 250 9 S 380 14, 418 6"/><path class="u2" d="M30 18 C 120 12, 220 20, 330 14"/></svg></span>` +
          (op.d ? `<span class="sub">${op.d}</span>` : '') + (op.risk ? riskHTML(op.risk) : '');
        r.style.animationDelay = (i * .07) + 's';
        r.onclick = () => { if (!inputLocked()) pick(i); };
        r.onmouseenter = () => { if (!op.dis) SND.play('ui', .25); };
        box.appendChild(r);
        rows.push(r);
      });
      const key = e => {
        const n = parseInt(e.key, 10);
        if (n >= 1 && n <= opts.length) { e.preventDefault(); pick(n - 1); }
      };
      document.addEventListener('keydown', key);
      const guard = setInterval(() => {
        if (settled) { clearInterval(guard); return; }
        if (!box.querySelector('.ch')) { box.classList.add('ask'); box.classList.remove('idle'); rows.forEach(r => box.appendChild(r)); }
      }, 400);
      if (LAY.mode === 'm') { const b = $('#born'); if (b.offsetTop + b.offsetHeight > LAY.H - 8) play.classList.add('tight'); }
      // timed: a draining bar; when it runs out you froze (resolves -1). Pausing stops the clock.
      const late = () => {
        if (settled) return;
        settled = true;
        document.removeEventListener('keydown', key);
        rows.forEach(r => r.classList.add('gone'));
        box.classList.remove('hurry');
        if (typeof slam === 'function') slam('늦었다');
        setTimeout(() => { box.innerHTML = ''; box.classList.remove('ask', 'timed'); $('#play').classList.remove('ask', 'tight'); res(-1); }, 520);
      };
      if (o.time) {
        const total = o.time * (G.S && G.S.urge >= 90 ? .8 : 1);
        let left = total, last = performance.now(), beat = 0;
        box.classList.add('timed');
        const bar = el('div', 'ctime', '<i></i>');
        box.insertBefore(bar, box.children[1]);
        const iv = setInterval(() => {
          const now = performance.now(), dt = Math.min(100, now - last); last = now;
          if (settled) { clearInterval(iv); box.classList.remove('hurry', 'timed'); return; }
          if (G.speed === 0 || G.freeze || document.hidden || inputLocked()) return;
          left -= dt;
          bar.firstChild.style.transform = `scaleX(${Math.max(0, left / total)})`;
          box.classList.toggle('hurry', left < 1200);
          if ((beat -= dt) <= 0) { beat = left < 1200 ? 250 : 500; SND.play('ui', left < 1200 ? .5 : .25); }
          if (left <= 0) { clearInterval(iv); late(); }
        }, 30);
      }
      if (G.auto && o.time && Math.random() < .12) setTimeout(late, 30);
      else if (G.auto) setTimeout(() => {
        const ok = opts.map((o, i) => o.dis ? -1 : i).filter(i => i >= 0);
        if (G.careful) {
          const sc = i => { const o = opts[i], r = o.risk || {}, n = r.note || ''; return (r.eye || 0) * 2 + (r.drop || 0) + (o.red ? 3 : 0) + (/곧|집을 뒤지면|금방|어렵다/.test(n) ? 3 : 0) - (/오래 묻힌다|확실|찾는 사람이 없다|누군지 모른다/.test(n) ? 2 : 0) + (/돌아간다|그만둔다/.test(o.t) ? 6 : 0) + Math.random() * .5; };
          ok.sort((a, b) => sc(a) - sc(b));
          pick(ok[0]);
        } else pick(ok[Math.floor(Math.random() * ok.length)]);
      }, 30);
    });
  },

  // idle actions shown while time flows (non-blocking)
  idle(opts) {
    G.lastIdle = opts;
    const box = $('#choices');
    if (box.classList.contains('ask')) return;
    const sig = JSON.stringify(opts.map(o => [o.k, o.t, o.d, !!o.dis]));
    if (box.classList.contains('idle') && box.dataset.sig === sig && box.children.length) return;
    box.dataset.sig = sig;
    box.innerHTML = '';
    box.classList.add('idle');
    if (opts.length) box.appendChild(el('div', 'ctitle', '<span class="go">▶</span> 할 수 있는 일'));
    opts.forEach((op, i) => {
      const r = el('div', 'ch' + (op.dis ? ' dis' : '') + (op.red ? ' red' : ''));
      r.innerHTML = `<span class="d">—</span><span class="t">${op.t}</span>${op.d ? `<span class="sub">${op.d}</span>` : ''}`;
      r.style.animationDelay = (i * .06) + 's';
      // only flag the request; the main loop clears the list itself (a delayed clear here could wipe the next question's buttons)
      r.onclick = () => { if (!op.dis && !G.request && !inputLocked()) { SND.play('ui', .8); buzz(); r.classList.add('picked'); G.request = op.k; } };
      box.appendChild(r);
    });
  },
  clearIdle() { const b = $('#choices'); if (b.classList.contains('idle')) { b.innerHTML = ''; b.classList.remove('idle'); b.dataset.sig = ''; } },

  // click / key / timeout to go on
  next(ms) {
    G.est = (G.est || 0) + (ms || 3000) * .8;
    if (G.auto) return sleep(20);
    return new Promise(res => {
      const box = $('#nextcue'), cap = LAY.mode === 'm' ? $('#hcapbox') : $('#hcap');
      box.classList.add('on'); cap.classList.add('wait');
      let done = false;
      const fin = () => {
        if (done) return; done = true;
        box.classList.remove('on'); cap.classList.remove('wait');
        $('#stage').removeEventListener('click', tap);
        document.removeEventListener('keydown', kd);
        res();
      };
      const tap = () => { if (!inputLocked()) fin(); };
      const kd = e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); if (!inputLocked()) fin(); } };
      setTimeout(() => {
        $('#stage').addEventListener('click', tap);
        document.addEventListener('keydown', kd);
      }, 250);
      if (ms) setTimeout(fin, ms / Math.max(1, G.speed));
    });
  },

  // ---- a line of the life: diary + main caption
  flow(text, cls = '') {
    this.diary(text, cls);
    if (!$('#choices').classList.contains('ask')) this.hcap(text);
  },

  // ---- diary
  diary(text, cls = '', date) {
    const S = G.S;
    S.diary.push({ t: S.t, text, cls, date });
    if (S.diary.length > 400) S.diary.shift();
    this.renderDiary(true);
    SND.play('pen', .35);
  },
  renderDiary(anim) {
    const S = G.S;
    const box = $('#dlines');
    box.innerHTML = '';
    const items = S.diary.slice(-9);
    items.forEach((d, i) => {
      const yy = String(yearOf(d.t)).slice(2);
      const mm = [3, 6, 9, 12][seasonOf(d.t)];
      const e = el('div', 'ent ' + d.cls);
      e.style.transform = `rotate(${(((d.t * 37 + i * 11) % 15) - 7) / 10}deg)`;
      e.innerHTML = `<span class="dt">${d.date || yy + '.' + mm}</span>${d.text}`;
      if (anim && i === items.length - 1) e.classList.add('new');
      box.appendChild(e);
    });
    // trim from the top until the entries fit (measure the entries, not scrollHeight: rotated lines overflow a few px)
    const fits = () => { const f = box.firstElementChild, l = box.lastElementChild; return !f || l.offsetTop + l.offsetHeight - f.offsetTop <= box.clientHeight; };
    if (box.clientHeight > 0) while (!fits() && box.children.length > 1) box.removeChild(box.firstChild);
    const LF = S.life;
    $('#dyear').innerHTML = `${yearOf(S.t)}<small>${S.sex === 'm' ? '남' : '여'} · ${ageOf(S.t)}살</small>` + (LF && ageOf(S.t) >= 12 ? `<span class="lst">돈 ${Math.round(LF.money)} · 건강 ${Math.round(LF.health)} · 사람 ${Math.round(LF.bond)} · 공허 ${Math.round(LF.void)}</span>` : '');
    const tl = $('#tally');
    const n = S.victims.length;
    let h = '';
    for (let i = 0; i < Math.min(n, 30); i++) {
      const g = Math.floor(i / 5), k = i % 5;
      const x = 10 + g * 46 + k * 8, y = 6 + (g % 2) * 3;
      h += k === 4 ? `<path d="M${x - 36} ${y + 40} L${x + 4} ${y + 6}"/>` : `<path d="M${x} ${y} L${x + (k % 2 ? 2 : -1)} ${y + 50}"/>`;
    }
    tl.innerHTML = h;
    $('#diary').classList.toggle('shaky', S.urge > 75);
  },

  // ---- hunger vs police graph, drawn like a pen chart in the diary
  graph() {
    const S = G.S, c = $('#graph');
    if (!c || !S) return;
    const m = LAY.mode === 'm';
    const W = c.width, H = c.height, ctx = c.getContext('2d');
    ctx.clearRect(0, 0, W, H);
    const hist = (S.hist || []).slice(-40);
    const pad = { l: 8, r: 8, t: m ? 34 : 26, b: 14 };
    const x0 = pad.l, x1 = W - pad.r, y0 = pad.t, y1 = H - pad.b;
    const X = i => x0 + (x1 - x0) * (hist.length <= 1 ? 1 : i / (hist.length - 1));
    const Y = v => y1 - (y1 - y0) * v / 100;
    const inkc = m ? 'rgba(236,233,228,.5)' : 'rgba(27,29,46,.45)';
    // frame + 100 line
    ctx.lineWidth = 1; ctx.strokeStyle = inkc; ctx.setLineDash([3, 4]);
    ctx.beginPath(); ctx.moveTo(x0, Y(100)); ctx.lineTo(x1, Y(100)); ctx.stroke(); ctx.setLineDash([]);
    ctx.beginPath(); ctx.moveTo(x0, y1); ctx.lineTo(x1, y1); ctx.stroke();
    const line = (idx, color, w, jit) => {
      if (hist.length < 2) return;
      ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
      ctx.beginPath();
      hist.forEach((h, i) => { const y = Y(h[idx]) + ((i * 7 + idx * 3) % 3 - 1) * jit; i ? ctx.lineTo(X(i), y) : ctx.moveTo(X(i), y); });
      ctx.stroke();
    };
    line(2, m ? 'rgba(236,233,228,.35)' : 'rgba(27,29,46,.35)', 1.5, .6);   // 의심
    line(1, m ? '#cfcac0' : '#1b1d2e', 2.2, .7);                               // 수사망
    line(0, '#b01010', 2.6, .9);                                               // 굶주림
    // kills
    ctx.fillStyle = '#b01010';
    hist.forEach((h, i) => { if (h[3]) { ctx.beginPath(); ctx.moveTo(X(i) - 4, y1 + 2); ctx.lineTo(X(i) + 4, y1 + 10); ctx.moveTo(X(i) + 4, y1 + 2); ctx.lineTo(X(i) - 4, y1 + 10); ctx.strokeStyle = '#b01010'; ctx.lineWidth = 2; ctx.stroke(); } });
    // legend: big numbers top-left
    const last = [Math.round(S.urge), Math.round(S.police), Math.round(S.susp)];
    ctx.textBaseline = 'alphabetic';
    let x = x0;
    const chip = (name, v, color) => {
      ctx.fillStyle = color; ctx.fillRect(x, (m ? 14 : 10), m ? 14 : 11, 4);
      x += m ? 20 : 16;
      ctx.font = `700 ${m ? 22 : 17}px 'Nanum Myeongjo', serif`; ctx.fillText(name, x, m ? 24 : 19); x += ctx.measureText(name).width + 6;
      ctx.font = `800 ${m ? 26 : 20}px 'Nanum Myeongjo', serif`; ctx.fillText(String(v), x, m ? 25 : 20); x += ctx.measureText(String(v)).width + (m ? 26 : 18);
    };
    chip('굶주림', last[0], '#c01818');
    chip('수사망', last[1], m ? '#e6e1d6' : '#1b1d2e');
    chip('의심', last[2], m ? 'rgba(236,233,228,.55)' : 'rgba(27,29,46,.5)');
    ctx.fillStyle = m ? 'rgba(236,233,228,.5)' : 'rgba(27,29,46,.5)';
    ctx.font = `700 ${m ? 17 : 13}px Gaegu, sans-serif`;
    const note = '100 = 미친다 / 잡힌다';
    ctx.fillText(note, x1 - ctx.measureText(note).width, m ? 24 : 19);
  },

  // ---- side panels
  status() {
    const S = G.S;
    const parts = [`${D.CITY} ${S.district}`, `<b>${yearOf(S.t)}.${[3, 6, 9, 12][seasonOf(S.t)]}</b>`, `<b class="sex">${S.sex === 'm' ? '남' : '여'}</b> ${ageOf(S.t)}세`];
    if (ageOf(S.t) < 17 && !S.over) parts.push('<i class="flow">시간이 흐른다</i>');
    if (ageOf(S.t) >= 17) {
      parts.push(`피해자 <i>${S.victims.length}</i>`);
      parts.push(`굶주림 <b class="${S.urge > 75 ? 'hot' : ''}">${Math.round(S.urge)}</b>`);
      parts.push(`의심 <b>${Math.round(S.susp)}</b>`);
      parts.push(`수사망 <b class="${S.police > 70 ? 'hot' : ''}">${Math.round(S.police)}</b>`);
    }
    $('#status').innerHTML = LAY.mode === 'm'
      ? `<span class="ln">${parts[1]} · ${parts[0]}</span><span class="ln chips"><em>${S.sex === 'm' ? '남자' : '여자'} ${ageOf(S.t)}세</em>${S.job ? `<em>${D.JOBS[S.job].t}</em>` : ''}${ageOf(S.t) >= 17 ? `<em class="r">피해자 ${S.victims.length}</em>` : ''}${S.love ? `<em>연인 ${S.love.name}</em>` : S.married ? `<em>배우자 ${S.married.name}</em>` : ''}</span>`
      : parts.join(' · ');
    this.graph();
    const st = $('#status'); st.classList.remove('tick'); void st.offsetWidth; st.classList.add('tick');
    this.eyes(Math.min(10, Math.round(S.susp / 10)), S.police);
    SND.heart(Math.max(G.tense ? [0, .3, .65, 1][G.tense] : 0, S.urge > 70 ? (S.urge - 70) / 30 : 0));
    $('#play').classList.toggle('hunger', S.urge > 85);
  },
  speedUI() {
    $$('#speed span').forEach(s => s.classList.toggle('on', +s.dataset.s === G.speed));
    $('#play').classList.toggle('paused', G.speed === 0);
  },
  born() {
    const S = G.S;
    const box = $('#bornrow');
    box.innerHTML = '';
    // a baby doesn't know them yet: dark blurred shapes until six, then the faces come up once
    const known = ageOf(S.t) >= 6;
    const reveal = known && S.flags && !S.flags.facesShown;
    S.others.forEach((p, i) => {
      const sn = el('div', 'snap' + (known ? '' : ' unk'));
      sn.style.setProperty('--r', [-3, 2.5, -1, 3.5][i] + 'deg');
      const dead = p.dead;
      const f = `background-image:url(${IMG(p.face)})`;
      sn.innerHTML = `<span class="tape"></span>` +
        (known ? `<div class="ph" style="${f}">${reveal ? `<i class="fade" style="${f};animation-delay:${.3 + i * .35}s"></i>` : ''}</div>` : `<div class="ph"><i style="${f}"></i></div><b class="q">?</b>`) +
        (dead ? scribble(i) : '') +
        `<div class="nm">${known ? p.name : '???'}<em>${known ? (p.status || '') : ''}</em></div>`;
      box.appendChild(sn);
    });
    if (reveal) S.flags.facesShown = 1;
    $('#bornhd').innerHTML = `${String(S.born.y).slice(2)}.${S.born.m}.${S.born.d} — <b>같은 날 태어난 것들</b>`;
  },
  eyes(open, police) {
    const svg = $('#eyes');
    const key = LAY.mode + LAY.H;
    if (svg.dataset.built !== key) {
      const H = LAY.H;
      const spots = LAY.mode === 'm'
        ? [[14, 560, 30, 80], [736, 600, 28, -84], [12, 700, 24, 92], [738, 760, 32, -78], [14, H - 520, 28, 84], [736, H - 440, 26, -88], [12, H - 330, 30, 76], [738, 240, 24, -90], [12, 300, 26, 88], [736, H - 190, 28, -82]]
        : [[1120, 858, 60, -6], [1232, 914, 44, 8], [1146, 990, 66, -3], [1250, 1046, 38, 10], [1060, 1052, 40, 4], [20, 520, 34, 80], [14, 300, 28, 92], [1286, 610, 30, -70], [1290, 420, 24, -84], [1206, 800, 30, 0]];
      svg.setAttribute('viewBox', `0 0 ${LAY.W} ${LAY.H}`);
      svg.innerHTML = spots.map(([x, y, s, r], i) =>
        `<use data-i="${i}" href="#eyeC" x="${x - s / 2}" y="${y - s / 4}" width="${s}" height="${s / 2}" transform="rotate(${r} ${x} ${y})"/>`).join('');
      svg.dataset.built = key;
    }
    svg.querySelectorAll('use').forEach((u, i) => {
      const o = i < open;
      u.setAttribute('href', o ? '#eyeO' : '#eyeC');
      u.classList.toggle('open', o);
    });
    $('#watcher').classList.toggle('on', police >= 80);
  },
};

function buzz() {
  // only right after a real tap (the browser blocks and logs it otherwise)
  const ua = navigator.userActivation;
  if (!navigator.vibrate || (ua && !ua.isActive)) return;
  try { navigator.vibrate(12); } catch (e) {}
}

function riskHTML(r) {
  let h = '<span class="r">';
  if (r.eye != null) {
    h += '<span>보는 눈 ';
    for (let i = 0; i < 3; i++) h += `<svg class="eye"><use href="#${i < r.eye ? 'eyeO' : 'eyeC'}"/></svg>`;
    h += '</span>';
  }
  if (r.drop != null) {
    h += '<span>흔적 ';
    for (let i = 0; i < 3; i++) h += `<svg class="drop"><use href="#${i < r.drop ? 'dropF' : 'dropE'}"/></svg>`;
    h += '</span>';
  }
  if (r.note) h += `<span class="note">${r.note}</span>`;
  return h + '</span>';
}
function scribble(i) {
  return `<svg class="scr" viewBox="0 0 128 128"><path d="M10 22 C 50 14, 80 40, 118 18 C 84 44, 30 36, 8 52 C 50 46, 96 60, 120 40 C 90 70, 40 60, 10 80 C 54 74, 98 88, 118 70 C 88 98, 44 90, 12 110 C 50 106, 90 118, 120 102 M20 10 C 40 60, 30 90, 44 122 M70 6 C 84 50, 66 92, 82 124 M104 12 C 96 60, 112 90, 100 120" filter="url(#wob)"/></svg>`;
}
