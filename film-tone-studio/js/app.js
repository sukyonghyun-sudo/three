/* 필름 톤 스튜디오 — 화면 · 재생 · 프리셋 · LUT · 내보내기 */
(function () {
'use strict';
const { MODULES, PRESETS, CATEGORIES, ORIGINAL, PMOD, presetState, clone } = window.FTS;
const $ = (s, r) => (r || document).querySelector(s);
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; };
const LS = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
};
const KEY = { state: 'fts.v1.state', user: 'fts.v1.userPresets', lut: 'fts.v1.lut', tab: 'fts.v2.tab', adv: 'fts.v2.adv' };
const USER_CAT = '내 설정';

const canvas = $('#view'), video = $('#vid'), viewer = $('#viewer');
// 손가락만 있는 기기 (휴대폰·태블릿)
const PHONE = matchMedia('(pointer: coarse)').matches && !matchMedia('(any-pointer: fine)').matches;
if (PHONE) document.body.classList.add('phone');
canvas.addEventListener('contextmenu', ev => ev.preventDefault());     // 꾹 누를 때 메뉴가 뜨지 않게
// 휴대폰 가로: 필름 띠를 오른쪽 조절 칸 맨 위로 (세로·PC 에선 제자리)
const LAND = matchMedia('(orientation: landscape) and (max-height: 500px) and (max-width: 1100px)');
function placeStrip() {
  const strip = $('#strip'), aside = $('aside'), stage = $('#stage');
  if (LAND.matches) { if (strip.parentNode !== aside) aside.insertBefore(strip, aside.firstChild); }
  else if (strip.parentNode !== stage) stage.appendChild(strip);
}
placeStrip();
LAND.addEventListener('change', () => { placeStrip(); setTimeout(layout, 50); });
let renderer;
try { renderer = new FilmRenderer(canvas); }
catch (e) { $('#fatal').textContent = e.message; $('#fatal').hidden = false; return; }

const app = {
  src: null, state: null, presetName: '', modified: false,
  splitOn: false, split: 0.5, original: false,
  dirty: true, needUpload: false, mediaTime: 0, fps: 30, lut: null, exporting: false,
  tab: LS.get(KEY.tab, 'cine'), base: null, hold: false,
};

/* ───────── 상태 저장 · 불러오기 ───────── */
function normalize(st) {
  const base = presetState(ORIGINAL);
  const out = { on: {}, p: {} };
  for (const m of MODULES) {
    out.on[m.id] = !!(st && st.on && st.on[m.id]);
    for (const d of m.params) {
      const v = st && st.p ? st.p[d.k] : undefined;
      const ok = d.type === 'wheel' ? Array.isArray(v) && v.length === 3 && v.every(Number.isFinite)
        : d.type === 'select' ? d.options.some(o => o[0] === v) : Number.isFinite(v);
      out.p[d.k] = ok ? clone(v) : base.p[d.k];
    }
  }
  return out;
}
let saveTimer = 0;
function saveSoon() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => { LS.set(KEY.state, { on: app.state.on, p: app.state.p, preset: app.presetName, modified: app.modified }); saveSegs(); }, 250);
}
function userPresets() { const v = LS.get(KEY.user, []); return Array.isArray(v) ? v : []; }
function setUserPresets(list) {
  if (!LS.set(KEY.user, list)) toast('브라우저 저장 공간에 저장하지 못했어요. 「파일로 내보내기」로 보관해 주세요.');
}

/* ───────── 조정 패널 ───────── */
const controls = [];
const decimals = step => { const s = String(step); return s.includes('.') ? s.split('.')[1].length : 0; };

function changed() { app.modified = true; app.dirty = true; presetLabel(); saveSoon(); syncSimple(); }
/* 필름을 바꿔도 남는 설정(원본 영상·필름 크기·화면비·효과 세기·LUT)은 '조절함'으로 치지 않고 작은 그림만 다시 */
function stickyChanged() { app.dirty = true; saveSoon(); syncSimple(); thumbsSoon(); }
function setParam(k, v) {
  app.state.p[k] = v;
  const mid = PMOD[k];
  if (mid === 'damage' && app.state.p.marks === 'off') { app.state.p.marks = 'on'; syncUI(); }   // 직접 먼지를 올리면 스위치도 켠다
  if (!app.state.on[mid]) { app.state.on[mid] = true; syncUI(); }
  if (MOD_OF(mid).sticky) stickyChanged(); else changed();
}
function syncUI() { for (const c of controls) c.sync(); }
function syncSimple() { for (const c of controls) if (c.simple) c.sync(); }

function rangeCtl(d) {
  const row = el('div', 'row');
  const lab = el('span', 'lbl', d.label);
  const rg = el('input'); rg.type = 'range'; rg.min = d.min; rg.max = d.max; rg.step = d.step;
  const num = el('input', 'num'); num.type = 'number'; num.step = d.step;
  const dec = decimals(d.step);
  const sync = () => { const v = app.state.p[d.k]; rg.value = v; num.value = (+v).toFixed(dec); };
  rg.addEventListener('input', () => { setParam(d.k, +rg.value); num.value = (+rg.value).toFixed(dec); });
  num.addEventListener('change', () => { const v = +num.value; if (Number.isFinite(v)) { setParam(d.k, v); rg.value = v; } });
  const reset = () => { setParam(d.k, clone(d.def)); sync(); };
  rg.addEventListener('dblclick', reset); lab.addEventListener('dblclick', reset);
  lab.title = '두 번 누르면 처음 값';
  controls.push({ sync });
  row.append(lab, rg, num);
  return row;
}

function selectCtl(d) {
  const row = el('div', 'row');
  const sel = el('select', 'sel');
  for (const [v, t] of d.options) { const o = el('option', '', t); o.value = String(v); sel.append(o); }
  const toVal = s => (typeof d.def === 'number' ? +s : s);
  sel.addEventListener('change', () => setParam(d.k, toVal(sel.value)));
  controls.push({ sync() { sel.value = String(app.state.p[d.k]); } });
  row.append(el('span', 'lbl', d.label), sel);
  return row;
}

/* 색 바퀴: 바퀴 = 색 방향과 세기, 아래 막대 = 밝기(평균). 값은 [R,G,B] 로 저장 */
const E1 = [2 / Math.sqrt(6), -1 / Math.sqrt(6), -1 / Math.sqrt(6)], E2 = [0, Math.SQRT1_2, -Math.SQRT1_2];
function decompose(d, v) {
  const m = (v[0] + v[1] + v[2]) / 3, s = d.invert ? -1 : 1;
  const off = v.map(x => (x - m) * s);
  return { m, c1: off[0] * E1[0] + off[1] * E1[1] + off[2] * E1[2], c2: off[1] * E2[1] + off[2] * E2[2] };
}
function compose(d, m, c1, c2) {
  const s = d.invert ? -1 : 1;
  return [0, 1, 2].map(i => Math.round((m + s * (c1 * E1[i] + c2 * E2[i])) * 10000) / 10000);
}
function hsv(h, s, v) {
  const f = n => { const k = (n + h / 60) % 6; return v - v * s * Math.max(0, Math.min(k, 4 - k, 1)); };
  return [f(5), f(3), f(1)];
}
function wheelBg(cv) {
  const g = cv.getContext('2d'), N = cv.width, R = N / 2 - 2, img = g.createImageData(N, N);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const dx = x - N / 2 + 0.5, dy = N / 2 - y - 0.5, r = Math.hypot(dx, dy) / R, i = (y * N + x) * 4;
    if (r > 1) { img.data[i + 3] = 0; continue; }
    const h = (Math.atan2(dy, dx) * 180 / Math.PI + 360) % 360, c = hsv(h, Math.min(1, r) * 0.75, 0.62);
    img.data[i] = c[0] * 255; img.data[i + 1] = c[1] * 255; img.data[i + 2] = c[2] * 255;
    img.data[i + 3] = r > 0.985 ? (1 - r) / 0.015 * 255 : 255;
  }
  g.putImageData(img, 0, 0);
}
function wheelCtl(d) {
  const box = el('div', 'wheel');
  const lab = el('div', 'wl', d.label);
  const wrap = el('div', 'wwrap');
  const cv = el('canvas'); cv.width = cv.height = 104; wheelBg(cv);
  const dot = el('div', 'wdot');
  wrap.append(cv, dot);
  const mr = el('input', 'wm'); mr.type = 'range'; mr.min = d.mMin; mr.max = d.mMax; mr.step = d.mStep;
  const val = el('div', 'wv'); val.title = 'R · G · B';
  const R = 50;
  const sync = () => {
    const v = app.state.p[d.k], q = decompose(d, v);
    let x = q.c1 / d.range, y = q.c2 / d.range; const L = Math.hypot(x, y); if (L > 1) { x /= L; y /= L; }
    dot.style.left = (52 + x * R) + 'px'; dot.style.top = (52 - y * R) + 'px';
    mr.value = q.m;
    val.textContent = v.map(x => (x < 0 ? '-' : '') + Math.abs(x).toFixed(3).replace(/^0/, '')).join(' · ');
  };
  const fromPointer = ev => {
    const r = cv.getBoundingClientRect();
    let x = (ev.clientX - r.left - r.width / 2) / (r.width / 2 - 2), y = -(ev.clientY - r.top - r.height / 2) / (r.height / 2 - 2);
    const L = Math.hypot(x, y); if (L > 1) { x /= L; y /= L; }
    const fine = ev.shiftKey ? 0.25 : 1;
    const q = decompose(d, app.state.p[d.k]);
    setParam(d.k, compose(d, q.m, x * d.range * fine, y * d.range * fine)); sync();
  };
  cv.addEventListener('pointerdown', ev => { cv.setPointerCapture(ev.pointerId); fromPointer(ev); });
  cv.addEventListener('pointermove', ev => { if (cv.hasPointerCapture(ev.pointerId)) fromPointer(ev); });
  cv.addEventListener('dblclick', () => { const q = decompose(d, app.state.p[d.k]); setParam(d.k, compose(d, q.m, 0, 0)); sync(); });
  mr.addEventListener('input', () => { const q = decompose(d, app.state.p[d.k]); setParam(d.k, compose(d, +mr.value, q.c1, q.c2)); sync(); });
  mr.addEventListener('dblclick', () => { const q = decompose(d, app.state.p[d.k]); setParam(d.k, compose(d, decompose(d, d.def).m, q.c1, q.c2)); sync(); });
  cv.title = '끌어서 색 방향·세기 (Shift = 미세), 두 번 누르면 색 없앰';
  mr.title = '밝기, 두 번 누르면 처음 값';
  controls.push({ sync });
  box.append(lab, wrap, mr, val);
  return box;
}

function lutRow() {
  const row = el('div', 'row lutrow');
  const btn = el('button', 'btn small', 'LUT 파일 열기');
  const name = el('span', 'lutname', '불러온 LUT 없음');
  const clr = el('button', 'btn small ghost', '빼기');
  btn.onclick = () => $('#lutFile').click();
  clr.onclick = () => { app.lut = null; renderer.setLut(null); try { localStorage.removeItem(KEY.lut); } catch (e) {} lutName(); app.dirty = true; };
  controls.push({ sync: lutName });
  function lutName() { name.textContent = app.lut ? app.lut.name + ' (' + app.lut.size + '³)' : '불러온 LUT 없음'; clr.hidden = !app.lut; }
  row.append(btn, name, clr);
  return row;
}

function buildPanel() {
  const host = $('#modules');
  for (const m of MODULES) {
    const sec = el('section', 'mod'); sec.dataset.id = m.id;
    const head = el('div', 'mod-h');
    const sw = el('label', 'sw'); const cb = el('input'); cb.type = 'checkbox'; sw.append(cb, el('span'));
    sw.title = '켜기 / 끄기';
    const title = el('button', 'mod-t', m.name);
    const rst = el('button', 'mod-r', '↺'); rst.title = '이 효과만 처음 값으로';
    head.append(sw, title, rst);
    const body = el('div', 'mod-b');
    if (m.id === 'lut') body.append(lutRow());
    const wheels = m.params.filter(d => d.type === 'wheel');
    if (wheels.length) { const wr = el('div', 'wheels'); for (const d of wheels) wr.append(wheelCtl(d)); body.append(wr); }
    for (const d of m.params) if (d.type !== 'wheel') body.append(d.type === 'select' ? selectCtl(d) : rangeCtl(d));
    cb.addEventListener('change', () => {
      app.state.on[m.id] = cb.checked; sec.classList.toggle('off', !cb.checked);
      if (m.id === 'damage' && cb.checked) app.state.p.marks = 'on';
      syncUI(); (m.sticky ? stickyChanged : changed)();
    });
    title.addEventListener('click', () => sec.classList.toggle('fold'));
    rst.addEventListener('click', () => {
      for (const d of m.params) app.state.p[d.k] = clone(d.def);
      app.state.on[m.id] = true; syncUI(); changed();
    });
    controls.push({ sync() { cb.checked = !!app.state.on[m.id]; sec.classList.toggle('off', !cb.checked); } });
    sec.append(head, body);
    host.append(sec);
  }
}
function foldByState() {
  for (const sec of document.querySelectorAll('.mod')) sec.classList.toggle('fold', !app.state.on[sec.dataset.id]);
}

/* ───────── 필름 고르기 (프리셋) ───────── */
const N_CAT = '컬러 네거 필름';
const CINE = /Vision3|Eterna/;
const GROUPS = [
  { id: 'cine', name: '영화 필름', test: p => p.cat === '영화 필름 (데이터)' || (p.cat === N_CAT && CINE.test(p.name)) || p.cat === '프린트·현상' },
  { id: 'photo', name: '사진 필름', test: p => p.cat === '사진 필름 (데이터)' || p.cat === '슬라이드 (데이터)' || (p.cat === N_CAT && !CINE.test(p.name)) || p.cat === '슬라이드 필름' },
  { id: 'bw', name: '흑백', test: p => p.cat === '흑백 필름' },
  { id: 'mood', name: '분위기', test: p => ['애니메이션 극장판', '영화', '광고', '레트로'].includes(p.cat) },
  { id: 'cam', name: '카메라', test: p => p.cat === '카메라' },
  { id: 'dehancer', name: '디핸서', test: p => p.cat === '디핸서' },
  { id: 'mine', name: '내 설정', user: true },
];
const hasLut = p => !p.p || !p.p.lutSrc || p.p.lutSrc === 'file' || (window.FTS_LUTS || {})[p.p.lutSrc];   // LUT 파일이 없는 PC 에선 숨김
/* 데이터시트 계산판이 있는 필름의 예전(손으로 맞춘) 판은 띠에서 뺀다 — 같은 이름이 두 번 보이지 않게. 「이전 판」 페이지에는 그대로 있다 */
const SUPERSEDED = new Set(['Kodak Vision3 50D · 2383 (실측 프린트)', 'Kodak Vision3 250D · 2383 (실측 프린트)', 'Kodak Vision3 200T · 2383 (실측 프린트)',
  'Kodak Vision3 500T · 2383 (실측 프린트)', 'Kodak Portra 160', 'Kodak Portra 400', 'Kodak Portra 800', 'Kodak Ektar 100', 'Kodak Gold 200', 'Kodak UltraMax 400',
  'Fuji Pro 400H', 'Fuji Superia 400', 'Fuji C200', 'CineStill 800T', 'Fuji Velvia 50', 'Fuji Provia 100F', 'Kodak Ektachrome E100', 'Kodachrome 64']);
const hasData = window.FTS.PRESETS.some(p => p.data);
function groupItems(g) { return g.user ? userPresets() : PRESETS.filter(p => g.test(p) && hasLut(p) && !(hasData && SUPERSEDED.has(p.name))); }
function groupOf(name) {
  if (userPresets().some(p => p.name === name)) return 'mine';
  const pr = PRESETS.find(p => p.name === name);
  const g = pr && GROUPS.find(g => !g.user && g.test(pr));
  return g ? g.id : GROUPS[0].id;
}
/* 'Kodak Vision3 250D · 2383 (실측 프린트)' → ['Kodak Vision3 250D', '2383 · 실측 프린트'] */
function splitName(n) {
  let main = n, sub = '';
  const m = n.match(/^(.*?)\s*\(([^()]*)\)\s*$/); if (m) { main = m[1]; sub = m[2]; }
  const i = main.indexOf(' · '); if (i > 0) { sub = main.slice(i + 3) + (sub ? ' · ' + sub : ''); main = main.slice(0, i); }
  return [main.replace(/\s*★$/, ''), sub];
}

/* 프리셋을 바꿔도 원본 영상 설정·LUT·필름 크기·화면비·효과 세기는 그대로 둔다 (프리셋이 직접 정하는 경우만 바꿈).
   「원본」은 원본 영상 설정만 남긴다. */
function stateFor(pr, prev) {
  const st = normalize(presetState(pr));
  if (prev) for (const m of MODULES) {
    if (!m.sticky || (pr === ORIGINAL && m.id !== 'input')) continue;
    if (m.id === 'lut' && prev.p.lutSrc !== 'file') continue;     // 프리셋이 고른 내장 LUT 는 따라가지 않는다
    if (pr.on.includes(m.id) || Object.keys(pr.p || {}).some(k => PMOD[k] === m.id)) continue;
    st.on[m.id] = prev.on[m.id];
    for (const d of m.params) st.p[d.k] = clone(prev.p[d.k]);
  }
  if (prev && prev.p.marks) st.p.marks = prev.p.marks;            // 먼지·스크래치 스위치는 무엇을 골라도 그대로
  return st;
}
function applyPreset(pr) {
  app.state = stateFor(pr, app.state);
  app.base = clone(app.state);
  app.presetName = pr.name; app.modified = false;
  syncUI(); foldByState(); presetLabel(); app.dirty = true; saveSoon();
}
function presetLabel() {
  const pr = PRESETS.find(p => p.name === app.presetName) || userPresets().find(p => p.name === app.presetName) || (app.presetName === ORIGINAL.name ? ORIGINAL : null);
  const [main, sub] = pr ? splitName(pr.name) : ['직접 조정', ''];
  const nn = $('#nowName'); nn.textContent = main;
  if (app.modified) nn.append(el('span', 'mod', '· 조절함'));
  $('#nowNote').textContent = pr && pr !== ORIGINAL ? (pr.note || sub || '') : pr === ORIGINAL ? '효과 없이 원본 그대로예요. 아래 필름 띠에서 골라 보세요.' : '';
  for (const b of document.querySelectorAll('.fr[data-name]')) b.classList.toggle('on', b.dataset.name === app.presetName);
  if (app.segs) segBar();
}

/* 필름 띠: 지금 장면에 각 필름을 입힌 작은 그림 */
function buildTabs() {
  const tabs = $('#tabs'); tabs.textContent = '';
  for (const g of GROUPS) {
    const n = groupItems(g).length;
    if (!g.user && !n) continue;
    const b = el('button', 'tab' + (g.id === app.tab ? ' on' : ''), g.name);
    if (n) b.append(el('span', 'n', String(n)));
    b.onclick = () => { app.tab = g.id; LS.set(KEY.tab, g.id); buildTabs(); buildFrames(); $('#frames').scrollLeft = 0; };
    tabs.append(b);
  }
  $('#userTools').hidden = app.tab !== 'mine';
}
function frameTile(pr, opts) {
  const b = el('button', 'fr'); b.dataset.name = pr.name; b.title = pr.note || pr.name;
  const pic = el('div', 'pic'); const cv = el('canvas'); cv.width = 320; cv.height = 180; pic.append(cv);
  const [main, sub] = opts && opts.label ? [opts.label, opts.sub || ''] : splitName(pr.name);
  b.append(pic, el('div', 'nm', main), el('div', 'sb', sub));
  b.onclick = () => applyPreset(pr);
  if (opts && opts.del) {
    const x = el('span', 'x', '×'); x.title = '이 설정 지우기';
    x.onclick = ev => { ev.stopPropagation(); setUserPresets(userPresets().filter(q => q.name !== pr.name)); buildTabs(); buildFrames(); };
    pic.append(x);
  }
  thumbJobs.push({ pr, cv });
  return b;
}
function buildFrames() {
  thumbJobs = []; thumbGen++;
  const orig = $('#stripOrig'); orig.textContent = '';
  orig.append(frameTile(ORIGINAL, { label: '원본', sub: '효과 없음' }));
  const host = $('#frames'); host.textContent = '';
  const g = GROUPS.find(g => g.id === app.tab) || GROUPS[0];
  if (g.user) {
    const add = el('button', 'fr add');
    const pic = el('div', 'pic'); pic.append(el('b', '', '+'), el('span', '', '지금 설정 저장'));
    add.append(pic, el('div', 'nm', '새로 저장'), el('div', 'sb', ''));
    add.onclick = openSave;
    host.append(add);
  }
  for (const pr of groupItems(g)) host.append(frameTile(pr, { del: !!g.user }));
  if (g.user && !userPresets().length) host.append(el('div', 'empty', '마음에 드는 설정을 만들고 「지금 설정 저장」을 눌러 이름을 붙여 두세요.'));
  presetLabel();
  thumbsSoon(0);
}
function stepPreset(dir) {
  const g = GROUPS.find(g => g.id === app.tab) || GROUPS[0];
  const items = groupItems(g); if (!items.length) return;
  let i = items.findIndex(p => p.name === app.presetName);
  i = i < 0 ? 0 : (i + dir + items.length) % items.length;
  applyPreset(items[i]);
  const t = $('#frames').querySelector('.fr[data-name="' + CSS.escape(items[i].name) + '"]');
  if (t) t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
}

/* 작은 그림 그리기: 따로 둔 작은 렌더러로 몇 개씩 나눠 그려 화면이 멈추지 않게 */
let thumbGen = 0, thumbJobs = [], thumbR = null, thumbC = null, thumbTimer = 0, thumbFrame = 0, thumbUploaded = -1;
function thumbsSoon(ms) { clearTimeout(thumbTimer); thumbTimer = setTimeout(runThumbs, ms === undefined ? 250 : ms); }
function frameChanged() { thumbFrame++; thumbsSoon(); }
function runThumbs() {
  if (!app.src || app.exporting) return;
  if (app.src.kind === 'video' && (!video.paused || video.readyState < 2)) { thumbsSoon(400); return; }
  try {
    if (!thumbR) { thumbC = el('canvas'); thumbR = new FilmRenderer(thumbC); }
    thumbR.setLut(app.lut);
    const sw = app.src.w, sh = app.src.h, H = 180, W = Math.max(2, Math.round(Math.min(640, sw * H / sh)));
    if (thumbC.width !== W || thumbC.height !== H) { thumbC.width = W; thumbC.height = H; }
    if (thumbUploaded !== thumbFrame) { thumbR.upload(app.src.kind === 'video' ? video : app.src.el, sw, sh); thumbUploaded = thumbFrame; }
  } catch (e) { return; }
  const jobs = thumbJobs, gen = thumbGen, t = curTime(), stamp = thumbFrame + '|' + stickyKey();
  let i = 0;
  const step = () => {
    if (gen !== thumbGen) return;           // 띠를 새로 그렸으면 그쪽이 이어 받는다
    const t0 = performance.now();
    while (i < jobs.length && performance.now() - t0 < 12) {
      const j = jobs[i++];
      if (j.stamp === stamp || !j.cv.isConnected) continue;
      thumbR.render(stateFor(j.pr, app.state), { time: t, seed: 7 });
      const g = j.cv.getContext('2d'), cw = j.cv.width, ch = j.cv.height, k = Math.max(cw / thumbC.width, ch / thumbC.height);
      const dw = thumbC.width * k, dh = thumbC.height * k;
      g.fillStyle = '#000'; g.fillRect(0, 0, cw, ch);
      g.drawImage(thumbC, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
      j.stamp = stamp;
    }
    if (i < jobs.length) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
/* 작은 그림에 영향을 주는 '필름을 바꿔도 남는' 설정 */
function stickyKey() {
  const o = {};
  for (const m of MODULES) if (m.sticky) { o[m.id] = app.state.on[m.id]; for (const d of m.params) o[d.k] = app.state.p[d.k]; }
  return JSON.stringify(o) + (app.lut ? app.lut.name : '');
}

/* ───────── 간단 조절 ───────── */
const pct = v => Math.round(v * 100);
const sgn = v => (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v);
const SIMPLE = [
  { k: 'mixAll', label: '효과 세기', min: 0, max: 1, step: 0.01, fmt: v => pct(v) + '%', ends: ['원본', '필름'] },
  { k: 'exposure', label: '밝기', min: -2, max: 2, step: 0.05, fmt: v => sgn(+v.toFixed(2)) },
  { k: 'contrast', label: '대비', min: 0.6, max: 1.5, step: 0.01, fmt: v => sgn(pct(v - 1)) },
  { k: 'temp', label: '따뜻함', min: -1, max: 1, step: 0.01, fmt: v => sgn(pct(v)), ends: ['차갑게', '따뜻하게'] },
  { k: 'sat', label: '색 진하기', min: 0, max: 2, step: 0.01, fmt: v => pct(v) + '%' },
  { k: 'grainAmt', label: '입자', min: 0, max: 0.05, step: 0.0005, fmt: v => String(Math.round(v / 0.05 * 100)) },
  { k: 'halAmt', label: '빛 번짐', min: 0, max: 0.4, step: 0.005, fmt: v => String(Math.round(v / 0.4 * 100)), tip: '할레이션 — 밝은 불빛 둘레가 주황빛으로 번져요' },
  { k: 'difAmt', label: '뽀얗게', min: 0, max: 1, step: 0.01, fmt: v => String(pct(v)), tip: '디퓨전 — 밝은 곳이 뽀얗게 퍼져요' },
];
const MOD_OF = id => MODULES.find(m => m.id === id);
function effVal(st, k) { return st.on[PMOD[k]] ? st.p[k] : window.FTS.PDEF[k].neutral; }
function simpleSet(k, v) {
  const mid = PMOD[k];
  if (!app.state.on[mid]) {   // 꺼져 있던 효과는 '효과 없음' 값에서 시작해 이 값만 바꾼다
    for (const d of MOD_OF(mid).params) app.state.p[d.k] = clone(d.neutral);
    app.state.on[mid] = true; syncUI();
  }
  setParam(k, v);
}
function buildSimple() {
  const host = $('#simple');
  for (const s of SIMPLE) {
    const row = el('div', 'srow');
    const lab = el('span', 'lbl', s.label); if (s.tip) lab.title = s.tip;
    const rg = el('input'); rg.type = 'range'; rg.min = s.min; rg.max = s.max; rg.step = s.step;
    const val = el('span', 'val');
    rg.addEventListener('input', () => { simpleSet(s.k, +rg.value); val.textContent = s.fmt(+rg.value); });
    const reset = () => { const b = app.base ? effVal(app.base, s.k) : window.FTS.PDEF[s.k].neutral; simpleSet(s.k, b); syncUI(); };
    rg.addEventListener('dblclick', reset); lab.addEventListener('dblclick', reset);
    row.append(lab, rg, val);
    if (s.ends) { const e = el('div', 'ends'); e.append(el('span', '', s.ends[0]), el('span', '', s.ends[1])); row.append(el('span'), e); }
    host.append(row);
    controls.push({ simple: true, sync() {
      const v = effVal(app.state, s.k); rg.value = v; val.textContent = s.fmt(+v);
      const b = app.base ? effVal(app.base, s.k) : v;
      row.classList.toggle('chg', Math.abs(v - b) > 1e-6);
    } });
  }
}

/* 필름 크기 · 화면비 · 원본 영상 */
const GAUGE_CHIPS = [['', '디지털'], ['8mm', '8mm'], ['s8', 'S8'], ['16mm', '16mm'], ['s16', 'S16'], ['35mm', '35mm'], ['65mm', '65mm'], ['imax', 'IMAX']];
const GAUGE_NOTE = {
  '': '필름 크기 효과 없음 — 고른 필름의 입자만 보여요.',
  '8mm': '집에서 찍던 홈무비 — 굵은 입자, 무른 화면, 흔들림.',
  's8': 'Super 8 — 8mm 보다 조금 고와요. 뮤직비디오·추억 영상.',
  '16mm': '16mm — 다큐·독립영화. 입자가 눈에 띄고 조금 흔들려요.',
  's16': 'Super 16 — TV 드라마·광고에 많이 쓴 크기.',
  '35mm': '35mm — 극장 영화의 표준. 고운 입자, 아주 살짝 흔들림.',
  '65mm': '65mm — 대작 영화. 입자가 거의 안 보이게 고와요.',
  'imax': 'IMAX — 가장 큰 필름. 매끈하고 깨끗해요.',
};
function gaugeSeg() {
  const host = $('#gaugeSeg'); host.textContent = '';
  const cur = app.state.on.gauge ? app.state.p.gauge : '';
  for (const [v, t] of GAUGE_CHIPS) {
    const b = el('button', v === cur ? 'on' : '', t);
    b.onclick = () => { if (v) { app.state.on.gauge = true; app.state.p.gauge = v; } else app.state.on.gauge = false; syncUI(); changed(); };
    host.append(b);
  }
  $('#gaugeNote').textContent = GAUGE_NOTE[cur] || '';
}
/* 먼지·스크래치 전체 스위치 (필름 크기·필름 종류가 넣는 먼지·스크래치·깜빡임) */
function marksSeg() {
  const host = $('#marksSeg'); host.textContent = '';
  const cur = app.state.p.marks === 'off' ? 'off' : 'on';
  for (const [v, t] of [['on', '켜기'], ['off', '끄기']]) {
    const b = el('button', v === cur ? 'on' : '', t);
    b.onclick = () => { app.state.p.marks = v; syncUI(); stickyChanged(); };
    host.append(b);
  }
}
const LB_CHIPS = [[0, '원본'], [1.85, '1.85'], [2.0, '2 : 1'], [2.39, '2.39 시네마스코프']];
function lbSeg() {
  const host = $('#lbSeg'); host.textContent = '';
  const cur = app.state.on.letterbox ? app.state.p.lbRatio : 0;
  for (const [v, t] of LB_CHIPS) {
    const b = el('button', v === cur ? 'on' : '', t);
    b.onclick = () => { if (v) { app.state.on.letterbox = true; app.state.p.lbRatio = v; } else app.state.on.letterbox = false; syncUI(); changed(); };
    host.append(b);
  }
}
function srcLogSel() {
  const sel = $('#srcLog');
  if (!sel.options.length) {
    const d = window.FTS.PDEF.logType;
    sel.append(Object.assign(el('option', '', '일반 영상 (보통 카메라·폰·편집본)'), { value: 'none' }));
    for (const [v, t] of d.options) sel.append(Object.assign(el('option', '', t), { value: v }));
    sel.onchange = () => {
      if (sel.value === 'none') app.state.on.input = false; else { app.state.on.input = true; app.state.p.logType = sel.value; }
      syncUI(); changed();
    };
  }
  sel.value = app.state.on.input ? app.state.p.logType : 'none';
}

/* ───────── 내 설정 ───────── */
function openSave() { $('#upName').value = app.presetName && !PRESETS.some(p => p.name === app.presetName) && app.presetName !== ORIGINAL.name ? app.presetName : ''; $('#saveDlg').showModal(); $('#upName').focus(); }
function saveUserPreset() {
  const name = $('#upName').value.trim();
  if (!name) { toast('이름을 적어 주세요.'); $('#upName').focus(); return; }
  const pr = { cat: USER_CAT, name, note: '내가 저장한 설정', on: MODULES.filter(m => app.state.on[m.id]).map(m => m.id), p: clone(app.state.p) };
  const list = userPresets().filter(q => q.name !== name); list.push(pr);
  setUserPresets(list);
  app.presetName = name; app.modified = false; app.base = clone(app.state);
  $('#saveDlg').close();
  app.tab = 'mine'; LS.set(KEY.tab, 'mine'); buildTabs(); buildFrames(); syncUI(); saveSoon(); toast('「' + name + '」 저장했어요.');
}
function exportPresets() {
  let list = userPresets();
  if (!list.length) list = [{ cat: USER_CAT, name: app.presetName || '내 설정', on: MODULES.filter(m => app.state.on[m.id]).map(m => m.id), p: clone(app.state.p) }];
  download(new Blob([JSON.stringify({ app: '필름 톤 스튜디오', version: 1, presets: list }, null, 1)], { type: 'application/json' }), '필름톤_내설정.json');
}
async function importPresetFile(file) {
  try {
    const j = JSON.parse(await file.text());
    const arr = Array.isArray(j) ? j : Array.isArray(j.presets) ? j.presets : [j];
    const good = arr.filter(p => p && typeof p.name === 'string' && Array.isArray(p.on) && p.p && typeof p.p === 'object')
      .map(p => ({ cat: USER_CAT, name: p.name, note: p.note || '불러온 설정', on: p.on, p: normalize({ on: {}, p: p.p }).p }));
    if (!good.length) throw new Error('설정이 들어 있지 않은 파일이에요.');
    const names = new Set(good.map(p => p.name));
    setUserPresets(userPresets().filter(q => !names.has(q.name)).concat(good));
    app.tab = 'mine'; buildTabs(); buildFrames();
    toast('설정 ' + good.length + '개를 「내 설정」에 넣었어요.');
  } catch (e) { toast('설정 파일을 읽지 못했어요: ' + e.message); }
}

/* ───────── LUT ───────── */
function parseCube(text, name) {
  let n3 = 0, n1 = 0, min = [0, 0, 0], max = [1, 1, 1];
  const vals = [];
  for (let line of text.split(/\r?\n/)) {
    line = line.trim();
    if (!line || line[0] === '#') continue;
    const parts = line.split(/\s+/), key = parts[0].toUpperCase();
    if (key === 'LUT_3D_SIZE') { n3 = parseInt(parts[1], 10); continue; }
    if (key === 'LUT_1D_SIZE') { n1 = parseInt(parts[1], 10); continue; }
    if (key === 'DOMAIN_MIN') { min = parts.slice(1, 4).map(Number); continue; }
    if (key === 'DOMAIN_MAX') { max = parts.slice(1, 4).map(Number); continue; }
    if (key === 'LUT_3D_INPUT_RANGE' || key === 'LUT_1D_INPUT_RANGE') { const a = +parts[1], b = +parts[2]; min = [a, a, a]; max = [b, b, b]; continue; }
    if (/^[A-Z_]/.test(key)) continue;
    if (parts.length >= 3) { const v = parts.slice(0, 3).map(Number); if (v.every(Number.isFinite)) vals.push(v[0], v[1], v[2]); }
  }
  if (n3 >= 2) {
    if (vals.length < n3 * n3 * n3 * 3) throw new Error('LUT 값 개수가 모자라요.');
    return { name, size: n3, data: new Float32Array(vals.slice(0, n3 * n3 * n3 * 3)), min, max };
  }
  if (n1 >= 2) {   // 1D LUT → 33³ 로 펼침
    if (vals.length < n1 * 3) throw new Error('LUT 값 개수가 모자라요.');
    const N = 33, data = new Float32Array(N * N * N * 3);
    const lk = (ch, t) => { const x = t * (n1 - 1), i = Math.min(Math.floor(x), n1 - 2), f = x - i; return vals[i * 3 + ch] * (1 - f) + vals[(i + 1) * 3 + ch] * f; };
    for (let b = 0; b < N; b++) for (let g = 0; g < N; g++) for (let r = 0; r < N; r++) {
      const o = (r + g * N + b * N * N) * 3;
      data[o] = lk(0, r / (N - 1)); data[o + 1] = lk(1, g / (N - 1)); data[o + 2] = lk(2, b / (N - 1));
    }
    return { name, size: N, data, min, max };
  }
  throw new Error('LUT_3D_SIZE 줄을 찾지 못했어요.');
}
async function loadLutFile(file) {
  try {
    const lut = parseCube(await file.text(), file.name.replace(/\.cube$/i, ''));
    useLut(lut);
    if (!LS.set(KEY.lut, { name: lut.name, size: lut.size, min: lut.min, max: lut.max, data: Array.from(lut.data, v => Math.round(v * 1e5) / 1e5) }))
      toast('LUT가 커서 다음에 열 때는 다시 불러와야 해요.');
    app.state.p.lutSrc = 'file'; app.state.on.lut = true; syncUI(); changed();
    toast('LUT 「' + lut.name + '」를 불러왔어요. 필름 프린트 LUT 면 「파일 LUT 입력」을 시네온 로그로 바꿔 주세요.');
  } catch (e) { toast('LUT를 읽지 못했어요: ' + e.message); }
}
function useLut(lut) { app.lut = lut; renderer.setLut(lut); if (exportR) exportR.r.setLut(lut); syncUI(); app.dirty = true; thumbsSoon(); }

/* ───────── 원본 불러오기 · 재생 ───────── */
const VID_EXT = ['mp4', 'mov', 'm4v', 'webm', 'mkv'], IMG_EXT = ['png', 'jpg', 'jpeg', 'webp', 'bmp', 'gif'];
async function loadFile(file) {
  if (!file) return;
  const ext = (file.name.split('.').pop() || '').toLowerCase();
  if (ext === 'cube') return loadLutFile(file);
  if (ext === 'json') return importPresetFile(file);
  const isImg = file.type.startsWith('image/') || IMG_EXT.includes(ext);
  const isVid = file.type.startsWith('video/') || VID_EXT.includes(ext);
  if (!isImg && !isVid) { toast('영상(mp4·mov·webm)이나 그림(png·jpg) 파일을 넣어 주세요.'); return; }
  if (app.src && app.src.url) { video.pause(); URL.revokeObjectURL(app.src.url); }
  const url = URL.createObjectURL(file);
  try {
    if (isImg) {
      const img = new Image(); img.src = url; await img.decode();
      app.src = { kind: 'image', el: img, w: img.naturalWidth, h: img.naturalHeight, file, url, name: file.name };
      renderer.upload(img, img.naturalWidth, img.naturalHeight);
      video.removeAttribute('src'); video.load();
    } else {
      await new Promise((res, rej) => {
        // 소리만 풀리고 화면은 못 푸는 영상(ProRes MOV 등)은 크기가 0 으로 열린다
        video.onloadeddata = () => (video.videoWidth > 0 ? res() : rej(new Error('영상 화면을 풀 수 없어요.')));
        video.onerror = () => rej(new Error('이 영상을 열 수 없어요. (지원하지 않는 코덱일 수 있어요)'));
        video.src = url; video.load();
      });
      app.src = { kind: 'video', el: video, w: video.videoWidth, h: video.videoHeight, file, url, name: file.name };
      app.fps = 30; app.fpsKnown = false; app.mediaTime = 0; app.needUpload = true;
      armVFC(); probeFps(file);
    }
  } catch (e) {
    URL.revokeObjectURL(url);
    let msg = e.message || String(e);
    if (isVid) try {   // 어떤 코덱이라 안 열리는지 알려 준다 (ProRes·DNxHD MOV 등은 브라우저가 못 푼다)
      const MB = window.Mediabunny, input = new MB.Input({ formats: MB.ALL_FORMATS, source: new MB.BlobSource(file) });
      const vt = await input.getPrimaryVideoTrack(), c = vt && await vt.getCodec();
      msg = '이 영상을 열 수 없어요' + (c ? ' (코덱: ' + c + ')' : vt ? ' (브라우저가 모르는 코덱)' : '') + '. H.264 · HEVC · VP9 · AV1 영상으로 바꿔서 넣어 주세요.';
    } catch (e2) {}
    toast(msg); return;
  }
  document.body.classList.add('has-src');
  document.body.classList.toggle('is-video', app.src.kind === 'video');
  // 미리보기 크기 상한 (휴대폰은 GPU 가 약해 1280) — 저장할 땐 원본 크기로 따로 그린다
  let w = app.src.w, h = app.src.h; const L = Math.max(w, h), cap = PHONE ? 1280 : 1920;
  if (L > cap) { w = Math.round(w * cap / L); h = Math.round(h * cap / L); }
  canvas.width = w; canvas.height = h;
  srcInfo();
  $('#btnExport').hidden = app.src.kind !== 'video';
  $('#seek').max = app.src.kind === 'video' ? (video.duration || 0) : 0;
  initSegs();
  layout(); app.dirty = true; frameChanged();
}
async function probeFps(file) {
  try {
    const MB = window.Mediabunny;
    const input = new MB.Input({ formats: MB.ALL_FORMATS, source: new MB.BlobSource(file) });
    const vt = await input.getPrimaryVideoTrack();
    if (!vt) return;
    const st = await vt.computePacketStats(120);
    if (st.averagePacketRate > 1 && app.src && app.src.file === file) { app.fps = st.averagePacketRate; app.fpsKnown = true; srcInfo(); }
  } catch (e) { /* fps 는 30 으로 둔다 */ }
}
function srcInfo() {
  const s = app.src; if (!s) return;
  $('#srcInfo').textContent = s.name + ' · ' + s.w + '×' + s.h + (s.kind === 'image' ? ' · 그림'
    : ' · ' + fmtLen(video.duration) + (app.fpsKnown ? ' · ' + Math.round(app.fps * 100) / 100 + 'fps' : ''));
}
let vfcToken = 0;
function armVFC() {
  if (!video.requestVideoFrameCallback) return;
  const tok = ++vfcToken;
  const cb = (now, meta) => { if (tok !== vfcToken) return; app.mediaTime = meta.mediaTime; app.needUpload = true; video.requestVideoFrameCallback(cb); };
  video.requestVideoFrameCallback(cb);
}
video.addEventListener('seeked', () => { app.mediaTime = video.currentTime; app.needUpload = true; frameChanged(); });
video.addEventListener('play', () => { $('#btnPlay').textContent = '❚❚'; });
video.addEventListener('pause', () => { $('#btnPlay').textContent = '▶'; frameChanged(); });
video.addEventListener('durationchange', () => { $('#seek').max = video.duration || 0; });

function curTime() { return app.src && app.src.kind === 'video' ? (app.mediaTime || video.currentTime) : 0; }
function draw() {
  const orig = app.original || app.hold;
  $('#origTag').hidden = !orig || !app.src;
  const t = curTime(), sp = liveSpec(t);
  renderer.render(sp.state, { time: t, split: app.splitOn && !app.hold ? app.split : -1, original: orig, blend: sp.blend });
}
const fmt = t => { t = Math.max(0, t || 0); const m = Math.floor(t / 60), s = t - m * 60; return String(m).padStart(2, '0') + ':' + s.toFixed(2).padStart(5, '0'); };
let seeking = false;
function loop() {
  requestAnimationFrame(loop);
  if (!app.src || app.exporting) return;   // 내보내는 동안은 미리보기를 쉬어 GPU 를 비워 둔다
  if (app.src.kind === 'video') {
    if (!video.requestVideoFrameCallback && !video.paused) { app.mediaTime = video.currentTime; app.needUpload = true; }
    if (app.needUpload && video.readyState >= 2) { renderer.upload(video, app.src.w, app.src.h); app.needUpload = false; app.dirty = true; }
    if (!seeking) $('#seek').value = video.currentTime;
    $('#time').textContent = fmt(video.currentTime) + ' / ' + fmt(video.duration);
    if (app.segs) {   // 조절 화면은 늘 지금 보이는 구간을 고친다
      const i = segOf(curTime(), app.segs);
      if (i !== app.segIdx) selectSeg(i, true);
      segHead();
      if (app.segs.length > 1 && liveSpec(curTime()).blend) app.dirty = true;
    }
  }
  if (app.dirty) { app.dirty = false; draw(); }
}

function togglePlay() { if (!app.src || app.src.kind !== 'video') return; if (video.paused) video.play().catch(() => {}); else video.pause(); }
function step(n) {
  if (!app.src || app.src.kind !== 'video') return;
  video.pause();
  video.currentTime = Math.min(Math.max(0, video.currentTime + n / app.fps), video.duration || 0);
}

/* ───────── 화면 맞춤 · 비교 막대 ───────── */
function layout() {
  const r = viewer.getBoundingClientRect(), pad = r.width < 700 ? 4 : 18;
  const k = Math.min((r.width - pad * 2) / canvas.width, (r.height - pad * 2) / canvas.height);
  if (!(k > 0)) return;
  canvas.style.width = Math.floor(canvas.width * k) + 'px';
  canvas.style.height = Math.floor(canvas.height * k) + 'px';
  placeDivider();
}
function placeDivider() {
  const d = $('#divider');
  d.hidden = !app.splitOn || !app.src;
  if (d.hidden) return;
  const vr = viewer.getBoundingClientRect(), cr = canvas.getBoundingClientRect();
  d.style.left = (cr.left - vr.left + cr.width * app.split) + 'px';
  d.style.top = (cr.top - vr.top) + 'px';
  d.style.height = cr.height + 'px';
}
function setSplitFromX(x) {
  const cr = canvas.getBoundingClientRect();
  app.split = Math.min(1, Math.max(0, (x - cr.left) / cr.width));
  placeDivider(); app.dirty = true;
}
new ResizeObserver(layout).observe(viewer);
$('#divider').addEventListener('pointerdown', ev => { ev.target.setPointerCapture(ev.pointerId); });
$('#divider').addEventListener('pointermove', ev => { if (ev.target.hasPointerCapture(ev.pointerId)) setSplitFromX(ev.clientX); });
canvas.addEventListener('pointerdown', ev => {
  canvas.setPointerCapture(ev.pointerId);
  if (app.splitOn) setSplitFromX(ev.clientX); else { app.hold = true; app.dirty = true; }
});
const endHold = () => { if (app.hold) { app.hold = false; app.dirty = true; } };
canvas.addEventListener('pointerup', endHold); canvas.addEventListener('pointercancel', endHold); canvas.addEventListener('lostpointercapture', endHold);
canvas.addEventListener('pointermove', ev => { if (app.splitOn && canvas.hasPointerCapture(ev.pointerId)) setSplitFromX(ev.clientX); });
function setSplit(on) { app.splitOn = on; $('#btnSplit').classList.toggle('on', on); placeDivider(); app.dirty = true; }
function setOriginal(on) { app.original = on; $('#btnOrig').classList.toggle('on', on); app.dirty = true; }

/* ───────── 저장 · 내보내기 ───────── */
function download(blob, name) {
  const a = el('a'); a.href = URL.createObjectURL(blob); a.download = name;
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 120000);
}
const baseName = () => (app.src ? app.src.name.replace(/\.[^.]+$/, '') : '필름톤');
let exportR = null;
function exportRenderer(W, H) {
  if (!exportR) { const c = el('canvas'); c.width = W; c.height = H; exportR = { c, r: new FilmRenderer(c) }; exportR.r.setLut(app.lut); }
  if (exportR.c.width !== W || exportR.c.height !== H) { exportR.c.width = W; exportR.c.height = H; }
  return exportR;
}
async function savePng() {
  if (!app.src) return;
  const W = app.src.w, H = app.src.h, ex = exportRenderer(W, H);
  ex.r.upload(app.src.kind === 'video' ? video : app.src.el, W, H);
  const sp = liveSpec(curTime());
  ex.r.render(sp.state, { time: curTime(), blend: sp.blend });
  const blob = await new Promise(res => ex.c.toBlob(res, 'image/png'));
  download(blob, baseName() + '_필름톤' + (app.src.kind === 'video' ? '_' + fmt(curTime()).replace(':', '분') + '초' : '') + '.png');
  toast('PNG를 다운로드 폴더에 저장했어요.');
}
const even = v => Math.max(2, Math.round(v / 2) * 2);
function outSize(w, h, mode) {
  if (mode === 'src') return [even(w), even(h)];
  const S = mode === '2160' ? 2160 : mode === '1440' ? 1440 : 1080, k = S / Math.min(w, h);
  let W = w * k, H = h * k;
  // 16:9 에서 1% 안쪽으로 어긋난 영상(854×480 등)은 표준 크기(1920×1080 등)로 맞춘다
  if (Math.abs(Math.max(w, h) / Math.min(w, h) / (16 / 9) - 1) < 0.01) { if (w >= h) W = S * 16 / 9; else H = S * 16 / 9; }
  return [even(W), even(H)];
}
let conv = null;
/* 소리: AAC·MP3 는 그대로 복사, 그 밖(Opus·PCM 등)은 어느 플레이어에서나 나오게 AAC 로 바꾼다 */
async function audioPlan(MB, at, want) {
  if (!at || !want) return { opts: { discard: true }, note: '' };
  const ac = await at.getCodec();
  if (ac === 'aac' || ac === 'mp3') return { opts: {}, note: '' };
  const ch = Math.min(2, await at.getNumberOfChannels()), sr = (await at.getSampleRate()) === 44100 ? 44100 : 48000;
  const quality = new MB.Quality({ bitrate: 192000 });
  if (await MB.canEncodeAudio('aac', { numberOfChannels: ch, sampleRate: sr, quality }))
    return { opts: { codec: 'aac', numberOfChannels: ch, sampleRate: sr, quality }, note: (ac || '?') + ' → AAC' };
  return { opts: {}, note: '' };
}
async function exportVideo(opt) {
  const MB = window.Mediabunny;
  if (!MB) throw new Error('영상 라이브러리(lib/mediabunny.min.js)를 불러오지 못했어요.');
  if (typeof VideoEncoder === 'undefined') throw new Error('이 브라우저는 영상 인코딩(WebCodecs)을 지원하지 않아요. 최신 크롬이나 엣지로 열어 주세요.');
  const input = new MB.Input({ formats: MB.ALL_FORMATS, source: new MB.BlobSource(app.src.file) });
  const vt = await input.getPrimaryVideoTrack();
  if (!vt) throw new Error('영상 트랙이 없어요.');
  if (!(await vt.canDecode())) throw new Error('이 영상의 코덱(' + ((await vt.getCodec()) || '알 수 없음') + ')은 브라우저가 풀 수 없어요. H.264 · HEVC · VP9 · AV1 영상으로 바꿔서 넣어 주세요.');
  const hdr = await vt.hasHighDynamicRange().catch(() => false);
  const [W, H] = outSize(await vt.getDisplayWidth(), await vt.getDisplayHeight(), opt.size);
  let fps = 30;
  try { const st = await vt.computePacketStats(120); if (st.averagePacketRate > 1) fps = st.averagePacketRate; } catch (e) {}
  const bitrate = Math.round(Math.min(1.2e8, Math.max(2e6, W * H * fps * opt.bpp)));
  const quality = new MB.Quality({ bitrate });
  let codec = null;
  for (const c of ['avc', 'hevc', 'vp9', 'av1']) if (await MB.canEncodeVideo(c, { width: W, height: H, quality })) { codec = c; break; }
  if (!codec) throw new Error(W + '×' + H + ' 크기로 영상을 인코딩할 수 없어요. 더 작은 크기로 해 보세요.');
  // 구간마다의 톤을 이 순간 값으로 굳힌다 (내보내는 동안 고쳐도 영향 없게)
  flushSeg();
  const g = clone(app.state);
  const segs = app.segs ? app.segs.map(s => ({ start: s.start, fade: s.fade, st: clone(withGlobals(s.state, g)) })) : [{ start: 0, fade: 0, st: g }];
  const ex = exportRenderer(W, H), stOf = i => segs[i].st;
  const at = await input.getPrimaryAudioTrack(), ap = await audioPlan(MB, at, opt.audio);
  // 저장할 곳을 골랐으면 파일에 바로 써서 몇 분짜리 4K 도 메모리에 쌓이지 않게, 아니면 메모리에 모아 다운로드
  const writable = opt.handle ? await opt.handle.createWritable() : null;
  const target = writable ? new MB.StreamTarget(writable, { chunked: true, chunkSize: 8 * 1048576 }) : new MB.BufferTarget();
  const output = new MB.Output({ format: new MB.Mp4OutputFormat(), target });
  conv = await MB.Conversion.init({
    input, output, tracks: 'primary', showWarnings: false,
    video: {
      codec, quality, forceTranscode: true, allowTransformationMetadata: false, processedWidth: W, processedHeight: H,
      process: sample => {
        const vf = sample.toVideoFrame();
        try { ex.r.upload(vf, vf.displayWidth, vf.displayHeight); } finally { vf.close(); }
        const sp = specAt(sample.timestamp, segs, stOf);
        ex.r.render(sp.state, { time: sample.timestamp, blend: sp.blend });
        return ex.c;
      },
    },
    audio: ap.opts,
  });
  if (!conv.isValid) throw new Error('이 파일은 내보낼 수 없어요. (' + conv.discardedTracks.map(d => d.reason).join(', ') + ')');
  conv.onProgress = p => opt.onProgress && opt.onProgress(p);
  const t0 = performance.now(), c = conv;
  try { await c.execute(); }
  catch (e) { if (opt.handle && opt.handle.remove) opt.handle.remove().catch(() => {}); throw e; }
  finally { conv = null; }
  const hasAudio = c.utilizedTracks.some(t => t.type === 'audio');
  const res = { W, H, fps, bitrate, codec, hdr, audioIn: !!at, hasAudio, audioNote: ap.note, secs: (performance.now() - t0) / 1000 };
  if (writable) res.file = await opt.handle.getFile();
  else res.blob = new Blob([output.target.buffer], { type: 'video/mp4' });
  return res;
}

const dlg = $('#exportDlg');
let lastExport = null;
function openExport() {
  if (!app.src) { toast('먼저 영상이나 그림을 넣어 주세요.'); return; }
  if (app.src.kind === 'image') { savePng(); return; }
  video.pause();
  const sel = $('#exSize'); sel.textContent = '';
  const w = app.src.w, h = app.src.h;
  const opts = [['src', '원본 크기']];
  if (Math.min(w, h) !== 1080) opts.push(['1080', Math.min(w, h) < 1080 ? '1080p로 키우기' : '1080p로 줄이기']);
  if (Math.min(w, h) < 1440) opts.push(['1440', '1440p로 키우기']);
  if (Math.min(w, h) < 2160) opts.push(['2160', '4K(2160p)로 키우기']);
  for (const [v, t] of opts) { const [W, H] = outSize(w, h, v); const o = el('option', '', t + ' — ' + W + '×' + H); o.value = v; sel.append(o); }
  $('#exBar').style.width = '0%'; $('#exStatus').textContent = ''; $('#exResult').hidden = true; $('#exSave').hidden = true;
  $('#exStart').disabled = false; $('#exStart').hidden = false; $('#exCancel').hidden = true;
  exportInfo();
  dlg.showModal();
}
const fmtLen = t => { t = Math.round(t || 0); const h = Math.floor(t / 3600), m = Math.floor(t / 60) % 60, s = t % 60; return (h ? h + '시간 ' : '') + (h || m ? m + '분 ' : '') + s + '초'; };
function exportInfo() {
  if (!app.src || app.src.kind !== 'video') return;
  const [W, H] = outSize(app.src.w, app.src.h, $('#exSize').value);
  const bitrate = Math.min(1.2e8, Math.max(2e6, W * H * app.fps * +$('#exQual').value));
  const mb = bitrate * (video.duration || 0) / 8 / 1048576;
  $('#exInfo').textContent = '길이 ' + fmtLen(video.duration) + ' · 예상 크기 약 ' + (mb > 1024 ? (mb / 1024).toFixed(1) + 'GB' : Math.max(1, Math.round(mb)) + 'MB')
    + (typeof window.showSaveFilePicker === 'function' ? ''
      : PHONE ? ' · 휴대폰은 다 만든 뒤 한 번에 저장해요' + (mb > 400 ? ' — 이 크기는 메모리가 모자랄 수 있어요. 크기를 줄이거나 PC에서 해 주세요' : '')
      : ' · 이 브라우저는 다운로드 폴더로 저장해요 (아주 긴 영상은 크롬·엣지 권장)');
}
async function startExport() {
  const opt = { size: $('#exSize').value, bpp: +$('#exQual').value, audio: $('#exAudio').checked, handle: null };
  const name = baseName() + '_필름톤.mp4';
  // 저장할 곳을 먼저 고른다 (크롬·엣지). 고르는 창을 닫으면 시작하지 않는다.
  if (typeof window.showSaveFilePicker === 'function') {
    try {
      opt.handle = await window.showSaveFilePicker({ id: 'fts-export', startIn: 'videos', suggestedName: name,
        types: [{ description: 'MP4 영상', accept: { 'video/mp4': ['.mp4'] } }] });
    } catch (e) {
      if (e && e.name === 'AbortError') { $('#exStatus').textContent = '저장할 곳을 고르지 않아 시작하지 않았어요.'; return; }
      opt.handle = null;
    }
  }
  $('#exStart').disabled = true; $('#exCancel').hidden = false; app.exporting = true;
  const t0 = performance.now();
  opt.onProgress = p => {
    $('#exBar').style.width = (p * 100).toFixed(1) + '%';
    const el2 = (performance.now() - t0) / 1000, left = p > 0.02 ? el2 / p - el2 : 0;
    $('#exStatus').textContent = '만드는 중 ' + Math.round(p * 100) + '%' + (left > 0 ? ' · 약 ' + fmtLen(left) + ' 남음' : '');
  };
  try {
    const r = await exportVideo(opt);
    lastExport = r; r.name = name;
    if (r.blob) download(r.blob, name);
    $('#exBar').style.width = '100%';
    const data = r.blob || r.file, mb = data.size / 1048576;
    const audio = r.hasAudio ? '소리 포함' + (r.audioNote ? ' (' + r.audioNote + ')' : '') : !r.audioIn ? '원본에 소리 없음' : !opt.audio ? '소리 뺌' : '소리를 넣지 못했어요';
    $('#exStatus').textContent = '완료 — ' + (r.file ? '「' + r.file.name + '」에 저장' : '다운로드 폴더에 「' + name + '」 저장') + ' · ' + r.W + '×' + r.H + ' · '
      + (mb > 1024 ? (mb / 1024).toFixed(2) + 'GB' : mb.toFixed(1) + 'MB') + ' · ' + audio + ' · ' + fmtLen(r.secs) + ' 걸림'
      + (r.hdr ? ' · HDR 원본이라 일반(SDR) 색으로 바뀌었어요' : '');
    const v = $('#exResult'); if (v.src) URL.revokeObjectURL(v.src);
    v.src = URL.createObjectURL(data); v.hidden = false;
    $('#exSave').hidden = !r.blob; $('#exStart').hidden = true;
  } catch (e) {
    const canceled = e && e.name === 'ConversionCanceledError' || /cancel/i.test(String(e && e.message));
    $('#exStatus').textContent = canceled ? '취소했어요.' : '내보내기 실패: ' + (e && e.message || e);
    $('#exStart').disabled = false;
    if (!canceled) console.error(e);
  } finally { app.exporting = false; $('#exCancel').hidden = true; }
}

/* ───────── 구간: 영상을 잘라 구간마다 다른 톤 ─────────
   app.segs = [{ start(초), fade(앞 구간에서 넘어오는 시간), state, presetName, modified, base }], app.segIdx = 지금 고친 구간.
   지금 구간의 값은 app.state 에 살아 있고(조절 화면이 그대로 씀), 다른 구간으로 옮길 때 flushSeg 로 돌려 넣는다.
   로그 입력·효과 세기·필름 크기·먼지 스위치·화면비는 영상 전체에 하나 — 늘 app.state 의 값을 쓴다. */
const GLOBAL_MODS = MODULES.filter(m => m.sticky && m.id !== 'lut').map(m => m.id);
function withGlobals(st, g) {
  const o = { on: Object.assign({}, st.on), p: Object.assign({}, st.p) };
  for (const id of GLOBAL_MODS) { o.on[id] = g.on[id]; for (const d of MOD_OF(id).params) o.p[d.k] = g.p[d.k]; }
  return o;
}
function segOf(t, segs) { let i = 0; while (i + 1 < segs.length && segs[i + 1].start <= t + 1e-4) i++; return i; }
const segEnd = (segs, i) => (i + 1 < segs.length ? segs[i + 1].start : Math.max(segs[i].start, video.duration || 0));
function fadeOf(segs, i) {   // 전환 길이: 양옆 구간 길이를 넘지 않게
  if (i === 0 || !(segs[i].fade > 0)) return 0;
  return Math.min(segs[i].fade, segs[i].start - segs[i - 1].start, segEnd(segs, i) - segs[i].start);
}
const ease = x => x * x * (3 - 2 * x);
/* 시간 t 에 그릴 톤 { state, blend } — 전환 구간이면 이웃 구간과 섞는다 (경계를 가운데 두고 앞뒤 반씩) */
function specAt(t, segs, stOf) {
  const i = segOf(t, segs), st = stOf(i), f = fadeOf(segs, i);
  if (f > 0 && t < segs[i].start + f / 2) {
    const w = ease(Math.min(1, Math.max(0, (t - segs[i].start + f / 2) / f)));
    return { state: st, blend: { state: stOf(i - 1), amount: 1 - w } };
  }
  if (i + 1 < segs.length) {
    const fn = fadeOf(segs, i + 1), ns = segs[i + 1].start;
    if (fn > 0 && t >= ns - fn / 2) return { state: st, blend: { state: stOf(i + 1), amount: ease(Math.min(1, Math.max(0, (t - ns + fn / 2) / fn))) } };
  }
  return { state: st, blend: null };
}
const liveStateOf = i => (i === app.segIdx ? app.state : withGlobals(app.segs[i].state, app.state));
function liveSpec(t) {
  return app.segs && app.src && app.src.kind === 'video' ? specAt(t, app.segs, liveStateOf) : { state: app.state, blend: null };
}
function baseFor(name, st) {
  const pr = PRESETS.find(p => p.name === name) || userPresets().find(p => p.name === name) || (name === ORIGINAL.name ? ORIGINAL : null);
  return pr ? stateFor(pr, st) : clone(st);
}
function flushSeg() {
  if (!app.segs || !app.segs[app.segIdx]) return;
  const s = app.segs[app.segIdx];
  s.state = clone(app.state); s.presetName = app.presetName; s.modified = app.modified; s.base = app.base ? clone(app.base) : null;
}
function seekTo(t) { video.currentTime = t; app.mediaTime = t; app.needUpload = true; }
function selectSeg(i, fromPlayhead) {
  if (!app.segs || !app.segs[i]) return;
  if (i !== app.segIdx) {
    flushSeg();
    const s = app.segs[i], g = app.state;
    app.segIdx = i;
    app.state = clone(withGlobals(s.state, g));
    app.presetName = s.presetName; app.modified = !!s.modified;
    app.base = s.base ? clone(withGlobals(s.base, g)) : baseFor(s.presetName, app.state);
    syncUI(); foldByState(); presetLabel(); thumbsSoon(); app.dirty = true;
  }
  if (!fromPlayhead) { const t = curTime(); if (t < app.segs[i].start - 1e-4 || t >= segEnd(app.segs, i) - 1e-4) { video.pause(); seekTo(app.segs[i].start); } }
  segBar();
}
function newSeg(start, from) {
  return { start, fade: 0, state: clone(from.state), presetName: from.presetName, modified: from.modified, base: from.base ? clone(from.base) : null };
}
const minSegLen = () => Math.max(2 / (app.fps || 30), 0.05);
const snapT = t => (app.fpsKnown ? Math.round(t * app.fps) / app.fps : t);
function cutAt(t, quiet) {
  if (!app.segs) return false;
  t = snapT(t); flushSeg();
  const i = segOf(t, app.segs), s = app.segs[i];
  if (t - s.start < minSegLen() || segEnd(app.segs, i) - t < minSegLen()) { if (!quiet) toast('구간 끝에 너무 가까워요. 조금 옮겨서 잘라 주세요.'); return false; }
  app.segs.splice(i + 1, 0, newSeg(t, s));
  if (i < app.segIdx) app.segIdx++;
  else if (i === app.segIdx && curTime() >= t - 1e-4) app.segIdx = i + 1;   // 같은 톤이라 조절 화면은 그대로
  if (!quiet) { segBar(); saveSoon(); }
  return true;
}
function mergePrev() {
  const i = app.segIdx;
  if (!app.segs || i <= 0) return;
  app.segs.splice(i, 1); app.segIdx = -1;          // 지운 구간은 돌려 넣지 않는다
  selectSeg(i - 1, true); saveSoon();
  toast('앞 구간과 합쳤어요. 앞 구간의 톤으로 이어져요.');
}
function clearCuts() {
  if (!app.segs || app.segs.length < 2) return;
  flushSeg();
  app.segs = [Object.assign(newSeg(0, app.segs[app.segIdx]), { start: 0 })]; app.segIdx = 0;
  segBar(); saveSoon(); toast('자른 곳을 모두 지웠어요. 지금 톤 하나로 이어져요.');
}
/* 구간 저장: 같은 파일(이름+크기)을 다시 열면 이어서 작업 */
const segKey = () => (app.src && app.src.kind === 'video' ? 'fts.v2.segs:' + app.src.name + '|' + app.src.file.size : '');
function saveSegs() {
  if (!app.segs || !segKey()) return;
  flushSeg();
  LS.set(segKey(), { dur: video.duration, idx: app.segIdx,
    segs: app.segs.map(s => ({ start: s.start, fade: s.fade, state: s.state, presetName: s.presetName, modified: s.modified })) });
}
function initSegs() {
  app.segs = null; app.segIdx = 0;
  if (!app.src || app.src.kind !== 'video') { segBar(); return; }
  const sv = LS.get(segKey(), null);
  if (sv && Array.isArray(sv.segs) && sv.segs.length && Math.abs((sv.dur || 0) - (video.duration || 0)) < 0.05) {
    app.segs = sv.segs.map(s => ({ start: +s.start || 0, fade: +s.fade || 0, state: normalize(s.state), presetName: s.presetName || '', modified: !!s.modified, base: null }));
    app.segs[0].start = 0; app.segIdx = -1;
    selectSeg(Math.min(Math.max(0, sv.idx | 0), app.segs.length - 1), true);
    if (app.segs.length > 1) toast('이 영상에 나눠 둔 구간 ' + app.segs.length + '개를 불러왔어요.');
  } else {
    app.segs = [{ start: 0, fade: 0, state: clone(app.state), presetName: app.presetName, modified: app.modified, base: app.base ? clone(app.base) : null }];
  }
  segBar();
}

/* 구간 막대 */
const segBarEl = $('#segBar');
function tToX(t) { const d = video.duration || 1; return (t / d) * 100; }
function xToT(clientX) { const r = segBarEl.getBoundingClientRect(); return Math.min(1, Math.max(0, (clientX - r.left) / r.width)) * (video.duration || 0); }
/* 구간 수가 바뀔 때만 다시 만들고, 나머지는 자리·이름만 고친다 (경계를 끄는 동안 손잡이가 사라지지 않게) */
function segBar() {
  const on = !!app.segs;
  $('#segRow').hidden = !on;
  if (!on) { for (const n of [...segBarEl.querySelectorAll('.sg, .sgh')]) n.remove(); return; }
  const segs = app.segs;
  if (segBarEl.querySelectorAll('.sg').length !== segs.length) {
    for (const n of [...segBarEl.querySelectorAll('.sg, .sgh')]) n.remove();
    segs.forEach((s, i) => {
      const b = el('div', 'sg'); b.append(el('span', 'nm'), el('i', 'fade')); segBarEl.append(b);
      if (i === 0) return;
      const h = el('div', 'sgh'); h.dataset.i = i; h.title = '끌어서 자르는 곳 옮기기';
      h.addEventListener('pointerdown', ev => { ev.stopPropagation(); h.setPointerCapture(ev.pointerId); video.pause(); });
      h.addEventListener('pointermove', ev => {
        if (!h.hasPointerCapture(ev.pointerId)) return;
        const S = app.segs, lo = S[i - 1].start + minSegLen(), hi = segEnd(S, i) - minSegLen();
        S[i].start = Math.min(hi, Math.max(lo, snapT(xToT(ev.clientX))));
        seekTo(S[i].start); segBar();
      });
      h.addEventListener('pointerup', () => saveSoon());
      segBarEl.append(h);
    });
  }
  const bs = segBarEl.querySelectorAll('.sg'), hs = segBarEl.querySelectorAll('.sgh');
  segs.forEach((s, i) => {
    const b = bs[i], name = i === app.segIdx ? app.presetName : s.presetName, mod = i === app.segIdx ? app.modified : s.modified;
    b.className = 'sg' + (i === app.segIdx ? ' on' : '');
    b.style.left = tToX(s.start) + '%'; b.style.width = (tToX(segEnd(segs, i)) - tToX(s.start)) + '%';
    b.firstChild.textContent = (splitName(name || '')[0] || '원본') + (mod ? ' *' : '');
    const f = fadeOf(segs, i);
    b.lastChild.style.width = f > 0 ? Math.min(100, f / 2 / Math.max(1e-3, segEnd(segs, i) - s.start) * 100) + '%' : '0';
    b.title = (i + 1) + '번 구간 · ' + fmt(s.start) + ' ~ ' + fmt(segEnd(segs, i)) + ' · ' + (name || '');
    if (i > 0) hs[i - 1].style.left = tToX(s.start) + '%';
  });
  const sel = segs[app.segIdx];
  $('#segFade').value = String(sel && app.segIdx > 0 ? sel.fade || 0 : 0);
  $('#segFade').disabled = app.segIdx <= 0;
  $('#btnMerge').disabled = app.segIdx <= 0;
  $('#btnCutClear').disabled = segs.length < 2;
  $('#segInfo').textContent = segs.length < 2 ? '자르면 구간마다 다른 필름을 고를 수 있어요' : (app.segIdx + 1) + ' / ' + segs.length + ' 구간';
  segHead();
}
function segHead() { if (app.segs) $('#segHead').style.left = tToX(curTime()) + '%'; }
segBarEl.addEventListener('pointerdown', ev => {
  if (!app.segs) return;
  segBarEl.setPointerCapture(ev.pointerId);
  const t = xToT(ev.clientX); seekTo(t);
  selectSeg(segOf(t, app.segs), true);
});
segBarEl.addEventListener('pointermove', ev => { if (segBarEl.hasPointerCapture(ev.pointerId)) seekTo(xToT(ev.clientX)); });

/* 장면 전환 자동 찾기: 작게 줄인 프레임끼리 색·밝기 차이를 재서, 주변보다 툭 튀는 곳을 자른다 */
// abs = 최소 점수, rel = 주변 보통 값의 몇 배, nb = 바로 앞뒤 프레임의 몇 배 (빠른 카메라 이동은 여러 프레임에 걸쳐 오르므로 걸러진다)
const SENS = { low: { abs: 0.3, rel: 4, nb: 2.0 }, mid: { abs: 0.2, rel: 3, nb: 1.6 }, high: { abs: 0.12, rel: 2.2, nb: 1.3 } };
let finding = false;
async function findCuts() {
  if (!app.segs || finding) return;
  const MB = window.Mediabunny, btn = $('#btnAutoCut'), label = btn.textContent;
  finding = true; btn.disabled = true; video.pause();
  try {
    const input = new MB.Input({ formats: MB.ALL_FORMATS, source: new MB.BlobSource(app.src.file) });
    const vt = await input.getPrimaryVideoTrack();
    if (!vt || !(await vt.canDecode())) throw new Error('이 영상은 장면을 찾을 수 없어요.');
    const W = 64, H = 36, sink = new MB.CanvasSink(vt, { width: W, height: H, fit: 'fill', poolSize: 2 });
    const c = new OffscreenCanvas(W, H), g = c.getContext('2d', { willReadFrequently: true });
    const dur = video.duration || 1, ts = [], sc = [];
    let prev = null, prevH = null, last = 0;
    for await (const wc of sink.canvases()) {
      g.drawImage(wc.canvas, 0, 0, W, H);
      const px = g.getImageData(0, 0, W, H).data, hist = new Float32Array(48);
      for (let i = 0; i < px.length; i += 4) { hist[px[i] >> 4]++; hist[16 + (px[i + 1] >> 4)]++; hist[32 + (px[i + 2] >> 4)]++; }
      let s = 0;
      if (prev) {
        let d = 0; for (let i = 0; i < px.length; i += 4) d += Math.abs(px[i] - prev[i]) + Math.abs(px[i + 1] - prev[i + 1]) + Math.abs(px[i + 2] - prev[i + 2]);
        let hd = 0; for (let i = 0; i < 48; i++) hd += Math.abs(hist[i] - prevH[i]);
        s = 0.5 * d / (W * H * 3 * 255) * 2.5 + 0.5 * hd / (3 * 2 * W * H);    // 둘 다 대략 0~1
      }
      ts.push(wc.timestamp); sc.push(s); prev = px; prevH = hist;
      if (performance.now() - last > 120) { last = performance.now(); btn.textContent = '찾는 중 ' + Math.min(99, Math.round(wc.timestamp / dur * 100)) + '%'; await new Promise(r => setTimeout(r)); }
    }
    const S = SENS[$('#cutSens').value] || SENS.mid, cuts = [];
    for (let k = 1; k < sc.length; k++) {
      const win = []; for (let j = Math.max(1, k - 12); j <= Math.min(sc.length - 1, k + 12); j++) if (Math.abs(j - k) > 1) win.push(sc[j]);
      win.sort((a, b) => a - b);
      const med = win.length ? win[win.length >> 1] : 0;
      let peak = true; for (let j = Math.max(1, k - 3); j <= Math.min(sc.length - 1, k + 3); j++) if (j !== k && sc[j] > sc[k]) peak = false;
      const nmax = Math.max(sc[k - 1] || 0, sc[k + 1] || 0);
      if (peak && sc[k] > S.abs && sc[k] > med * S.rel + 0.02 && sc[k] > nmax * S.nb && (!cuts.length || ts[k] - cuts[cuts.length - 1] > 0.2)) cuts.push(ts[k]);
    }
    flushSeg();
    let added = 0;
    for (const t of cuts) {
      if (app.segs.some(s => Math.abs(s.start - t) < minSegLen())) continue;
      const i = segOf(t, app.segs), s = app.segs[i];
      if (t - s.start < minSegLen() || segEnd(app.segs, i) - t < minSegLen()) continue;
      app.segs.splice(i + 1, 0, newSeg(t, s)); if (i < app.segIdx) app.segIdx++; added++;
    }
    const cur = segOf(curTime(), app.segs);
    if (cur !== app.segIdx) selectSeg(cur, true);
    segBar(); saveSoon();
    app.lastCuts = cuts;
    toast(cuts.length ? '장면 전환 ' + cuts.length + '곳을 찾아 ' + (added ? added + '곳을 새로 잘랐어요.' : '이미 다 잘려 있어요.') + ' 구간을 눌러 필름을 고르세요.' : '장면이 바뀌는 곳을 찾지 못했어요. 「예민하게」로 다시 해 보세요.');
  } catch (e) { toast('장면 찾기 실패: ' + (e.message || e)); console.error(e); }
  finally { finding = false; btn.disabled = false; btn.textContent = label; }
}

/* ───────── 알림 · 단축키 · 끌어 놓기 ───────── */
let toastTimer = 0;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 3800);
}
document.addEventListener('keydown', ev => {
  if (ev.target.closest('input, select, textarea') && ev.target.type !== 'range' && ev.target.type !== 'checkbox') return;
  if (dlg.open || $('#saveDlg').open || $('#help').open) return;
  if (ev.code === 'Space') { ev.preventDefault(); togglePlay(); }
  else if (ev.code === 'ArrowLeft') { ev.preventDefault(); step(-1); }
  else if (ev.code === 'ArrowRight') { ev.preventDefault(); step(1); }
  else if (ev.key === 'b' || ev.key === 'B' || ev.key === 'ㅠ') setOriginal(!app.original);
  else if (ev.key === 's' || ev.key === 'S' || ev.key === 'ㄴ') setSplit(!app.splitOn);
  else if ((ev.key === 'c' || ev.key === 'C' || ev.key === 'ㅊ') && app.segs) cutAt(curTime());
  else if (ev.key === '[') stepPreset(-1);
  else if (ev.key === ']') stepPreset(1);
});
let dragDepth = 0;
window.addEventListener('dragenter', ev => { ev.preventDefault(); dragDepth++; document.body.classList.add('dragging'); });
window.addEventListener('dragleave', ev => { ev.preventDefault(); if (--dragDepth <= 0) { dragDepth = 0; document.body.classList.remove('dragging'); } });
window.addEventListener('dragover', ev => ev.preventDefault());
window.addEventListener('drop', ev => {
  ev.preventDefault(); dragDepth = 0; document.body.classList.remove('dragging');
  for (const f of ev.dataTransfer.files) loadFile(f);
});

/* ───────── 버튼 연결 ───────── */
$('#btnOpen').onclick = () => $('#srcFile').click();
$('#dropOpen').onclick = () => $('#srcFile').click();
$('#srcFile').onchange = ev => { loadFile(ev.target.files[0]); ev.target.value = ''; };
$('#lutFile').onchange = ev => { loadLutFile(ev.target.files[0]); ev.target.value = ''; };
$('#presetFile').onchange = ev => { importPresetFile(ev.target.files[0]); ev.target.value = ''; };
$('#btnPlay').onclick = togglePlay;
$('#btnPrev').onclick = () => step(-1);
$('#btnNext').onclick = () => step(1);
$('#seek').addEventListener('pointerdown', () => { seeking = true; });
$('#seek').addEventListener('pointerup', () => { seeking = false; });
$('#seek').addEventListener('input', () => { video.currentTime = +$('#seek').value; });
$('#btnLoop').onclick = () => { video.loop = !video.loop; $('#btnLoop').classList.toggle('on', video.loop); };
$('#btnMute').onclick = () => { video.muted = !video.muted; $('#btnMute').classList.toggle('on', video.muted); $('#btnMute').textContent = video.muted ? '소리 꺼짐' : '소리'; };
$('#btnSplit').onclick = () => setSplit(!app.splitOn);
$('#btnOrig').onclick = () => setOriginal(!app.original);
$('#btnPng').onclick = savePng;
$('#btnExport').onclick = openExport;
$('#btnHelp').onclick = () => $('#help').showModal();
$('#helpClose').onclick = () => $('#help').close();
$('#upSave').onclick = saveUserPreset;
$('#upCancel').onclick = () => $('#saveDlg').close();
$('#upName').addEventListener('keydown', ev => { if (ev.key === 'Enter') saveUserPreset(); });
$('#btnSimpleReset').onclick = () => { const pr = PRESETS.find(p => p.name === app.presetName) || userPresets().find(p => p.name === app.presetName); if (pr) applyPreset(pr); };
$('#advHead').onclick = () => { const on = !document.body.classList.contains('adv'); document.body.classList.toggle('adv', on); LS.set(KEY.adv, on); };
$('#frames').addEventListener('wheel', ev => { if (Math.abs(ev.deltaY) > Math.abs(ev.deltaX)) { ev.preventDefault(); $('#frames').scrollLeft += ev.deltaY; } }, { passive: false });
$('#upExport').onclick = exportPresets;
$('#upImport').onclick = () => $('#presetFile').click();
$('#btnCut').onclick = () => cutAt(curTime());
$('#btnAutoCut').onclick = findCuts;
$('#btnMerge').onclick = mergePrev;
$('#btnCutClear').onclick = clearCuts;
$('#segFade').onchange = () => { const s = app.segs && app.segs[app.segIdx]; if (s && app.segIdx > 0) { s.fade = +$('#segFade').value; segBar(); app.dirty = true; saveSoon(); } };
$('#exStart').onclick = startExport;
$('#exSize').onchange = exportInfo;
$('#exQual').onchange = exportInfo;
$('#exCancel').onclick = () => { if (conv) conv.cancel(); };
$('#exSave').onclick = () => { if (lastExport) download(lastExport.blob, lastExport.name); };
$('#exClose').onclick = () => { if (conv) conv.cancel(); const v = $('#exResult'); v.pause(); dlg.close(); };
dlg.addEventListener('cancel', ev => { if (app.exporting) ev.preventDefault(); });

/* ───────── 시작 ───────── */
buildPanel(); buildSimple();
controls.push({ sync: gaugeSeg }, { sync: marksSeg }, { sync: lbSeg }, { sync: srcLogSel });
const saved = LS.get(KEY.state, null);
const firstPreset = PRESETS.find(p => p.name === 'Kodak Vision3 250D · 데이터 → 2383 프린트' && hasLut(p)) || PRESETS.find(p => p.name === 'Kodak Vision3 250D · 2383 (실측 프린트)' && hasLut(p)) || PRESETS[0];
if (saved && saved.on && saved.p) {
  app.state = normalize(saved); app.presetName = saved.preset || ''; app.modified = !!saved.modified;
  const pr = PRESETS.find(p => p.name === app.presetName) || userPresets().find(p => p.name === app.presetName);
  app.base = pr ? stateFor(pr, app.state) : clone(app.state);
} else { app.state = normalize(presetState(firstPreset)); app.presetName = firstPreset.name; app.base = clone(app.state); }
if (!GROUPS.some(g => g.id === app.tab && (g.user || groupItems(g).length))) app.tab = groupOf(app.presetName);
const savedLut = LS.get(KEY.lut, null);
if (savedLut && savedLut.size && Array.isArray(savedLut.data)) {
  try { useLut({ name: savedLut.name, size: savedLut.size, min: savedLut.min, max: savedLut.max, data: new Float32Array(savedLut.data) }); } catch (e) {}
}
document.body.classList.toggle('adv', !!LS.get(KEY.adv, false));
video.loop = true; $('#btnLoop').classList.add('on');
buildTabs(); buildFrames(); syncUI(); foldByState(); presetLabel();
requestAnimationFrame(loop);

// 확인·자동 시험용
window.FTS_APP = {
  app, loadFile, applyPreset, setParam, exportVideo, savePng, parseCube, useLut, draw,
  presetByName: n => PRESETS.find(p => p.name === n) || (n === ORIGINAL.name ? ORIGINAL : null),
  stateFor, simpleSet, stepPreset, GROUPS, groupItems, runThumbs,
  readPixels: () => { draw(); return renderer.readPixels(); },
  renderer, video, setSplit, setOriginal,
  cutAt, findCuts, mergePrev, clearCuts, selectSeg, specAt, liveSpec, flushSeg, seekTo, segOf,
};
})();
