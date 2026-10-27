'use strict';

// ---------------------------------------------------------------- 기본 도구

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function h(tag, attrs, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v === undefined || v === null || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else if (k === 'value' || (k in el && typeof v !== 'string')) el[k] = v;
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const kid of kids.flat()) {
    if (kid === null || kid === undefined || kid === false) continue;
    el.append(kid.nodeType ? kid : document.createTextNode(kid));
  }
  return el;
}

async function api(url, body) {
  const opt = body === undefined ? {} : { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) };
  const r = await fetch(url, opt);
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(j.error || `${r.status} ${r.statusText}`);
  return j;
}

function hexA(hex, a) {
  const n = parseInt(String(hex || '#000').slice(1, 7), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

function fmtTime(t) {
  t = Math.max(0, t || 0);
  const m = Math.floor(t / 60), s = t - m * 60;
  return `${m}:${s.toFixed(1).padStart(4, '0')}`;
}

let toastTimer;
function toast(msg, ms = 2600) {
  const t = $('#toast');
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, ms);
}

const ICON = {
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  eyeOff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4.2M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7a9.6 9.6 0 0 0 5.4-1.6"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  unlock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.7-1.5"/></svg>',
  up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 15l6-6 6 6"/></svg>',
  down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4.5" width="4" height="15" rx="1"/><rect x="14" y="4.5" width="4" height="15" rx="1"/></svg>',
  sound: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"/></svg>',
  mute: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"/><path d="M17 9l5 6M22 9l-5 6"/></svg>',
};
const TYPE_LABEL = { image: '이미지', text: '글자', video: '영상', shape: '도형', button: '버튼' };
const BUTTON_TEXT = '플레이 하러가기';

// 영상 언어: 배치는 같고 글씨만 바뀐다. 그림 레이어는 srcByLang[언어]의 그림·자리로, 버튼·안내 문구는 아래 글자로
// (notice가 없는 언어는 확률형 안내 문구를 넣지 않는다)
const LANGS = {
  ko: { label: '한국어', button: BUTTON_TEXT, notice: '확률형 아이템이 포함되어 있을 수 있습니다.' },
  zh: { label: '中文', button: '前往遊玩', buttonLs: 1.5, rating: true },   // 한자는 붙어 보여 버튼 자간을 조금 벌린다
};
const langOf = () => (LANGS[S.tpl?.lang] ? S.tpl.lang : 'ko');

// 지금 언어에서 그림 레이어가 쓸 그림과 자리
function imageOf(L) {
  const o = L.srcByLang?.[langOf()];
  return o ? { src: o.src, x: o.x ?? L.x, y: o.y ?? L.y, w: o.w ?? L.w, h: o.h ?? L.h } : L;
}

// 연령 표기 배지 (대만 「輔15級」, 중국어일 때): 영상 왼쪽 위, 안내 문구와 같이 처음 NOTICE.sec초 동안만
const RATING = { src: 'assets/rating/tw_15.png', size: 58, left: 24, top: 24 };

// ---------------------------------------------------------------- 상태

const S = {
  tpl: null,
  selId: null,
  images: {},
  alpha: {},
  faces: [],
  facesReady: null,
  fontLoads: {},
  fontReady: {},
  fontTargetId: null,
  tempFont: null,
  tempFrame: null,
  tempButton: null,
  styleClip: null,
  video: { id: null, name: '', info: null, uploading: false, progress: 0, url: null, error: '' },
  scale: 1,
  history: [],
  future: [],
  geom: {},
  renderQueued: false,
  rendering: false,
  results: [],
};

const over = $('#over');
const octx = over.getContext('2d');
const vid = $('#vid');
const measure = document.createElement('canvas').getContext('2d');

const layerById = (id) => S.tpl.layers.find((l) => l.id === id);
const selLayer = () => (S.selId ? layerById(S.selId) : null);
const videoLayer = () => S.tpl.layers.find((l) => l.type === 'video');
const textLayers = () => S.tpl.layers.filter((l) => l.type === 'text');
// bind가 있으면 위쪽 「게임 이름」 칸 값을 쓴다. 앞뒤 빈 줄·공백은 글자 크기 계산에서 뺀다.
// quote가 켜져 있으면 직접 친 따옴표는 떼고 “ ”로 감싼다
function textOf(L) {
  let t = ((L.bind ? S.tpl[L.bind] : L.text) || '').trim();
  if (L.quote) {
    t = t.replace(/^["“”'‘’]+|["“”'‘’]+$/g, '').trim();
    if (t) t = `“${t}”`;
  }
  return t;
}

const DEFAULT_FONT = { family: '메이플스토리', style: 'Bold', file: 'Maplestory Bold.ttf' };

function migrate(t) {
  t.render = Object.assign({ crf: 18, preset: 'medium', mute: false }, t.render);
  t.gameName = t.gameName ?? '';
  t.design = t.design || 'night';
  t.notice = Object.assign({ on: true }, t.notice);
  t.rating = Object.assign({ on: true }, t.rating);
  t.lang = LANGS[t.lang] ? t.lang : 'ko';
  for (const L of t.layers) {
    L.visible = L.visible ?? true;
    L.opacity = L.opacity ?? 1;
    if (L.type === 'shape') L.opacity2 = L.opacity2 ?? 1;
    if (L.type === 'text') {
      L.skew = L.skew ?? 0;
      L.weight = L.weight ?? 400;
      if (!L.font || typeof L.font === 'string') L.font = { ...DEFAULT_FONT };
      L.fill = L.fill || ['#ffffff', '#ffffff'];
      for (const k of ['stroke', 'depth', 'glow', 'shadow']) L[k] = L[k] || { on: false };
    }
    if (L.type === 'video') {
      L.border = L.border || { on: false, width: 6, color: '#000000' };
      L.shadow = L.shadow || { on: false, blur: 20, offset: 8, color: '#000000', opacity: 0.4 };
    }
  }
  return t;
}

// 저장·되돌리기 --------------------------------------------------------

const snapshot = () => JSON.stringify(S.tpl, (k, v) => (k.startsWith('_') ? undefined : v));

let saveTimer = 0;
let lastSynced = null; // 이 창이 마지막으로 저장했거나 불러온 내용

// 지금 내용을 저장한다 (웹 버전은 web.js가 브라우저 저장소로 바꿔 끼운다)
function persist(body) {
  return fetch('/api/template', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body })
    .catch(() => toast('저장하지 못했습니다. 서버 창이 켜져 있는지 확인하세요.'));
}

function saveSoon() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    saveTimer = 0;
    const body = snapshot();
    lastSynced = body;
    persist(body);
  }, 500);
}

// 편집기를 창 두 개로 열었을 때: 이 창으로 돌아오면 다른 창에서 저장한 내용을 불러온다
async function syncFromServer() {
  if (!S.tpl || drag || saveTimer) return;
  try {
    const tpl = await api('/api/template');
    const str = JSON.stringify(tpl);
    if (str === lastSynced || str === snapshot() || saveTimer) return;
    lastSynced = str;
    await setTemplate(tpl, true);
    pushHistory();
  } catch (e) { /* 서버가 꺼져 있으면 그대로 둔다 */ }
}

function pushHistory() {
  const s = snapshot();
  if (S.history[S.history.length - 1] === s) return;
  S.history.push(s);
  if (S.history.length > 150) S.history.shift();
  S.future = [];
}

let histTimer;
function commitSoon() {
  clearTimeout(histTimer);
  histTimer = setTimeout(pushHistory, 350);
}

function undo() {
  clearTimeout(histTimer);
  pushHistory();
  if (S.history.length < 2) return;
  S.future.push(S.history.pop());
  restore(S.history[S.history.length - 1]);
}

function redo() {
  const s = S.future.pop();
  if (!s) return;
  S.history.push(s);
  restore(s);
}

async function restore(s) {
  await setTemplate(JSON.parse(s), true);
  saveSoon();
}

// 값이 바뀔 때마다 부른다: 다시 그리고, 저장하고, 되돌리기 기록
function changed(opts = {}) {
  redraw();
  saveSoon();
  commitSoon();
  if (opts.geom) updateGeomInputs();
  if (opts.list) buildLayerList();
  if (opts.props) buildProps();
  refreshFontCardsSoon();
}

// ---------------------------------------------------------------- 이미지

function loadImages() {
  // 다른 언어 그림과 연령 표기도 미리 불러 둔다 (언어를 바꾸면 바로 보이게)
  const srcs = new Set([RATING.src]);
  for (const l of S.tpl.layers) {
    if (l.src) srcs.add(l.src);
    for (const o of Object.values(l.srcByLang || {})) srcs.add(o.src);
  }
  return Promise.all([...srcs].filter((s) => !S.images[s]).map((src) => new Promise((res) => {
    const im = new Image();
    im.onload = () => { S.images[src] = im; res(); };
    im.onerror = () => res();
    im.src = src;   // 상대 경로: 로컬 서버(/)와 웹 버전(GitHub Pages 폴더) 둘 다에서 열린다
  })));
}

// 투명한 부분은 클릭이 지나가도록 알파값을 본다
function alphaAt(L, p) {
  const im = S.images[L.src];
  if (!im) return true;
  let a = S.alpha[L.src];
  if (!a) {
    const k = Math.min(1, 512 / Math.max(im.naturalWidth, im.naturalHeight));
    const c = document.createElement('canvas');
    c.width = Math.max(1, Math.round(im.naturalWidth * k));
    c.height = Math.max(1, Math.round(im.naturalHeight * k));
    const g = c.getContext('2d', { willReadFrequently: true });
    g.drawImage(im, 0, 0, c.width, c.height);
    a = S.alpha[L.src] = { w: c.width, h: c.height, d: g.getImageData(0, 0, c.width, c.height).data };
  }
  const box = L.type === 'text' ? containBox(im, L) : L;
  const x = Math.floor((p.x - box.x) / box.w * a.w), y = Math.floor((p.y - box.y) / box.h * a.h);
  if (x < 0 || y < 0 || x >= a.w || y >= a.h) return false;
  return a.d[(y * a.w + x) * 4 + 3] > 24;
}

function containBox(im, L) {
  const k = Math.min(L.w / im.naturalWidth, L.h / im.naturalHeight);
  const w = im.naturalWidth * k, h = im.naturalHeight * k;
  return { x: L.x + (L.w - w) / 2, y: L.y + (L.h - h) / 2, w, h };
}

// ---------------------------------------------------------------- 폰트

function loadFaces(refresh) {
  S.facesReady = api('/api/fonts' + (refresh ? '?refresh=1' : ''))
    .then((list) => { S.faces = list; })
    .catch(() => { S.faces = []; toast('폰트 목록을 읽지 못했습니다'); })
    .then(() => {
      if (!S.tpl) return;
      buildFontGrid();
      updateFontCurrent();
      redraw();
      if (selLayer()?.type === 'text') buildProps();
    });
  return S.facesReady;
}

function resolveFace(ref) {
  if (!ref || !S.faces.length) return null;
  return S.faces.find((f) => ref.file && f.file === ref.file && f.style === ref.style && (!f.collection || f.family === ref.family))
    || S.faces.find((f) => f.family === ref.family && f.style === ref.style)
    || S.faces.find((f) => f.familyEn === ref.family && f.style === ref.style)
    || S.faces.find((f) => f.family === ref.family)
    || null;
}

function ensureFont(face) {
  if (!face) return Promise.resolve(null);
  if (S.fontLoads[face.id]) return S.fontLoads[face.id];
  const fam = 'vtf' + face.id;
  const srcs = [face.url ? `url("${face.url}")` : `url(/api/font/${face.id})`];
  if (face.full) srcs.push(`local("${face.full}")`);
  if (face.postscript) srcs.push(`local("${face.postscript}")`);
  const p = (async () => {
    for (const src of srcs) {
      try {
        // 굵기 범위를 열어 두면 가변 폰트는 굵기가 바뀌고, 일반 폰트는 가짜 굵게가 생기지 않는다
        const ff = new FontFace(fam, src, { weight: '1 1000' });
        await ff.load();
        document.fonts.add(ff);
        return fam;
      } catch (e) { /* 다음 방법으로 */ }
    }
    return null;
  })();
  S.fontLoads[face.id] = p;
  p.then((f) => { S.fontReady[face.id] = f; });
  return p;
}

// 고른 폰트에 없는 글자(메이플스토리 폰트의 한자 등)는 굵기 조절이 되는 Noto Sans KR로 그린다
const FALLBACK_FONT = { family: 'Noto Sans KR', style: '', file: 'NotoSansKR-VF.ttf' };

// 그릴 수 있으면 CSS 폰트 이름, 아직 불러오는 중이면 null
function famFor(L) {
  return famForFace(S.tempFont && S.tempFont.layerId === L.id ? S.tempFont.face : resolveFace(L.font));
}

// 버튼 글꼴: 'maple' = 메이플스토리 Bold, 그 밖에는 Noto Sans KR (굵기 조절)
function buttonFam(kind) {
  const file = kind === 'maple' ? 'Maplestory Bold.ttf' : FALLBACK_FONT.file;
  return famForFace(S.faces.find((f) => f.file === file) || null);
}

function famForFace(face) {
  if (!face) return S.faces.length ? 'sans-serif' : null;
  const back = S.faces.find((f) => f.file === FALLBACK_FONT.file) || null;
  const pending = [face, back].filter((f) => f && !(f.id in S.fontReady));
  if (pending.length) {
    Promise.all(pending.map(ensureFont)).then(() => redraw());
    return null;
  }
  const name = (f) => (f && S.fontReady[f.id] ? `"${S.fontReady[f.id]}", ` : '');
  // 두 폰트에 다 없는 한자(중국어 게임 이름의 번체 글자 등)는 번체 글꼴로
  return `${name(face)}${back && back !== face ? name(back) : ''}"Microsoft JhengHei", "PingFang TC", sans-serif`;
}

function fontLabel(ref) {
  if (ref && !S.faces.length) return `${ref.family} ${ref.style}`;
  const f = resolveFace(ref);
  if (f) return `${f.family} ${f.style}`;
  return ref ? `${ref.family} ${ref.style} (이 PC에 없음)` : '';
}

// ---------------------------------------------------------------- 글자 그리기

function fitText(text, fam, L, availW, availH, k, slope = 0) {
  // splitChars: 띄어쓰기 없는 한자·가나 덩어리를 글자 단위로 나눠도 되는지, forced: 이미 나눈 줄
  const make = (size, splitChars, forced) => {
    const font = `${L.weight || 400} ${size}px ${fam}`;
    const ls = ((L.letterSpacing || 0) / 1000) * size;
    measure.font = font;
    measure.letterSpacing = ls + 'px';
    const lines = forced ? [...forced] : [];
    const fitsW = (t) => measure.measureText(t.trimEnd()).width + slope * size <= availW;
    for (const para of forced ? [] : String(text).split('\n')) {
      if (!L.wrap) { lines.push(para); continue; }
      // 띄어쓰기·문장부호 뒤에서 나누고, 띄어쓰기 없는 한자·가나 이름은 글자 단위로 나눈다
      let cur = '';
      for (const tok of para.split(/(?<=[\s：:·,，、/\-])/)) {
        if (fitsW(cur + tok)) { cur += tok; continue; }
        if (cur) { lines.push(cur.trimEnd()); cur = ''; }
        if (!splitChars || fitsW(tok) || !/[぀-ヿ㐀-鿿豈-﫿]/.test(tok)) { cur = tok; continue; }
        for (const ch of tok) {
          if (cur && !fitsW(cur + ch)) { lines.push(cur.trimEnd()); cur = ''; }
          cur += ch;
        }
      }
      lines.push(cur.trimEnd());
    }
    const ms = lines.map((t) => measure.measureText(t || '가'));
    const ascs = ms.map((m) => m.actualBoundingBoxAscent);
    const descs = ms.map((m) => m.actualBoundingBoxDescent);
    const lh = size * (L.lineHeight || 1.1);
    const n = lines.length;
    const blockH = (n - 1) * lh + ascs[0] + descs[n - 1];
    const maxW = Math.max(...lines.map((t) => (t ? measure.measureText(t).width - ls : 0)));
    return { font, ls, lines, ascs, descs, asc: ascs[0], lh, blockH, maxW, size };
  };
  // 기울이면 위아래로 밀린 만큼 폭이 늘어난다
  const fitsIn = (l, aw, ah) => l.maxW + slope * l.blockH <= aw + 0.5 && l.blockH <= ah + 0.5;
  const fits = (l) => fitsIn(l, availW, availH);
  const top = Math.max(4, (L.maxSize || 60) * k);
  // 상자(aw × ah)에 들어가는 가장 큰 크기 (mk: 크기 -> 배치)
  const search = (mk, aw = availW, ah = availH) => {
    let best = mk(top);
    if (fitsIn(best, aw, ah)) return best;
    let lo = 4, hi = top;
    best = mk(lo);
    for (let i = 0; i < 14; i++) {
      const mid = (lo + hi) / 2;
      const l = mk(mid);
      if (fitsIn(l, aw, ah)) { lo = mid; best = l; } else hi = mid;
    }
    return best;
  };
  if (L.balance2) return fitOneOrTwo(text, make, search, L, availW, availH, top, k);
  // 먼저 띄어쓰기·문장부호에서만 끊어 본다. 그러면 너무 작아질 때만 글자 단위로 끊는다
  const whole = search((s) => make(s, false));
  if (fits(whole) && whole.size >= top * 0.6) return whole;
  const split = search((s) => make(s, true));
  return fits(whole) && whole.size >= split.size ? whole : split;
}

// 한 줄로 작아지다가, 두 줄로 나눴을 때 더 크게 들어가면 폭이 비슷한 두 줄로 나눈다.
// Enter로 직접 나눈 줄이 있으면 그대로 쓴다.
// grow2: 두 줄일 때 글자 칸(과 이어진 박스)을 아래로 늘리는 양, growSlope: 박스 사선 기울기(세로 1px당 가로 px),
// twoLineBelow: 한 줄 크기가 최대 크기의 이 비율보다 작아질 때만 두 줄로
function fitOneOrTwo(text, make, search, L, availW, availH, top, k) {
  const g = (L.grow2 || 0) * k;
  // 박스가 사선으로 늘어나면 늘어난 만큼 좌우 여유가 줄어든다
  const aw2 = availW - g * (L.growSlope || 0), ah2 = availH + g;
  const withGrow = (lay) => Object.assign(lay, { grow: g });
  const t = String(text);
  if (t.includes('\n')) {
    const lines = t.split('\n').map((x) => x.trim());
    return lines.length > 1 ? withGrow(search((s) => make(s, false, lines), aw2, ah2)) : search((s) => make(s, false, lines));
  }
  const one = search((s) => make(s, false, [t]));
  if (L.twoLineBelow && one.size >= top * L.twoLineBelow) return one;
  measure.font = make(100, false, [t]).font;
  const wOf = (x) => measure.measureText(x).width;
  // 두 줄 폭이 가장 비슷해지는 자리
  const bestOf = (cuts) => {
    let best = null, bestW = Infinity;
    for (const c of cuts) {
      const w = Math.max(wOf(t.slice(0, c).trimEnd()), wOf(t.slice(c).trimStart()));
      if (w < bestW) { bestW = w; best = c; }
    }
    return best === null ? null : search((s) => make(s, false, [t.slice(0, best).trimEnd(), t.slice(best).trimStart()]), aw2, ah2);
  };
  // 띄어쓰기·문장부호 뒤를 먼저 쓰고, 그 자리로는 글자가 많이 작아질 때만 글자 사이에서 나눈다 (따옴표만 남는 자리는 빼고)
  const natural = [], chars = [];
  for (let i = 1; i < t.length; i++) if (/[\s：:·,，、/\-]/.test(t[i - 1])) natural.push(i);
  for (let i = 2; i < t.length - 1; i++) chars.push(i);
  const nat = bestOf(natural);
  const chr = bestOf(chars);
  let two = nat;
  if (!two || (chr && chr.size * 0.7 > two.size)) two = chr;
  return two && two.size > one.size * 1.02 ? withGrow(two) : one;
}

const textCache = new Map();

// 글자를 효과까지 입혀 별도 캔버스에 그린다 (k: 미리보기용 배율, box: 상자 크기 대신 쓸 값)
function renderText(L, text, fam, k = 1, box = null) {
  const W = Math.max(1, Math.round(box ? box.w : L.w));
  const H = Math.max(1, Math.round(box ? box.h : L.h));
  const key = JSON.stringify([text, fam, W, H, k, L.maxSize, L.lineHeight, L.letterSpacing, L.align, L.valign, L.wrap,
    L.weight, L.skew, L.balance2, L.grow2, L.growSlope, L.twoLineBelow, L.fill, L.stroke, L.depth, L.glow, L.shadow]);
  const hit = textCache.get(key);
  if (hit) return hit;

  const sw = L.stroke.on ? L.stroke.width * k : 0;
  const dp = L.depth.on ? Math.max(0, Math.round(L.depth.size * k)) : 0;
  const sh = L.shadow.on ? L.shadow : null;
  const shBlur = sh ? sh.blur * k : 0, shOff = sh ? sh.offset * k : 0;
  const slope = Math.tan(((L.skew || 0) * Math.PI) / 180);
  const pad = Math.ceil(sw + dp + shBlur * 2 + Math.abs(shOff) + Math.abs(slope) * H / 2 + 6);
  const availW = Math.max(4, W - sw * 2), availH = Math.max(4, H - sw * 2 - dp);
  const lay = fitText(text, fam, L, availW, availH, k, Math.abs(slope));
  const grow = lay.grow || 0;

  const mk = () => { const c = document.createElement('canvas'); c.width = W + pad * 2; c.height = H + grow + pad * 2; return c; };
  const c = mk(), ctx = c.getContext('2d');
  const align = L.align || 'center';
  const x = align === 'left' ? pad + sw : align === 'right' ? pad + W - sw : pad + W / 2;
  const free = availH + grow - lay.blockH;
  const top = pad + sw + (L.valign === 'top' ? 0 : L.valign === 'bottom' ? free : free / 2);
  const ys = lay.lines.map((_, i) => top + lay.asc + i * lay.lh);
  const prep = (g) => {
    g.font = lay.font;
    g.letterSpacing = lay.ls + 'px';
    g.textAlign = align;
    g.textBaseline = 'alphabetic';
    g.lineJoin = 'round';
    g.miterLimit = 2;
  };
  // 정렬 기준점이 자간만큼 밀리지 않게 보정, 기울여도 상자 안에 들어가게 보정
  const lean = Math.abs(slope) * lay.blockH / 2;
  const xs = align === 'center' ? x + lay.ls / 2 : align === 'right' ? x + lay.ls - lean : x + lean;
  const each = (fn) => lay.lines.forEach((t, i) => { if (t) fn(t, ys[i], i); });
  // 글자 덩어리 가운데를 기준으로 기울인다 (양수 = 오른쪽으로 기울임)
  const cy = top + lay.blockH / 2;
  const skew = (g) => g.setTransform(1, 0, -slope, 1, slope * cy, 0);
  const unskew = (g) => g.setTransform(1, 0, 0, 1, 0, 0);

  // 실루엣: 외곽선 + 입체 두께를 합친 모양
  const sil = mk(), s = sil.getContext('2d');
  prep(s);
  skew(s);
  s.fillStyle = s.strokeStyle = sw ? L.stroke.color : (dp ? L.depth.color : '#000');
  s.lineWidth = sw * 2;
  for (let d = 0; d <= dp; d++) each((t, y) => { if (sw) s.strokeText(t, xs, y + d); s.fillText(t, xs, y + d); });

  prep(ctx);
  if (sh) {
    const far = c.width + 200;
    ctx.save();
    ctx.shadowColor = hexA(sh.color, sh.opacity);
    ctx.shadowBlur = shBlur;
    ctx.shadowOffsetX = far;
    ctx.shadowOffsetY = shOff;
    ctx.drawImage(sil, -far, 0);
    ctx.restore();
  }
  if (sw) ctx.drawImage(sil, 0, 0);
  if (dp) {
    ctx.fillStyle = L.depth.color;
    skew(ctx);
    for (let d = dp; d >= 1; d--) each((t, y) => ctx.fillText(t, xs, y + d));
    unskew(ctx);
  }
  const fc = mk(), f = fc.getContext('2d');
  prep(f);
  skew(f);
  each((t, y, i) => {
    const g = f.createLinearGradient(0, y - lay.ascs[i], 0, y + lay.descs[i]);
    g.addColorStop(0, L.fill[0]);
    g.addColorStop(1, L.fill[1] || L.fill[0]);
    f.fillStyle = g;
    f.fillText(t, xs, y);
  });
  if (L.glow.on) {
    f.globalCompositeOperation = 'source-atop';
    f.globalAlpha = L.glow.opacity ?? 1;
    f.strokeStyle = L.glow.color;
    f.lineWidth = L.glow.width * 2 * k;
    each((t, y) => f.strokeText(t, xs, y));
  }
  ctx.drawImage(fc, 0, 0);

  const out = { canvas: c, pad, size: lay.size, lines: lay.lines.length, grow };
  if (textCache.size > 300) textCache.clear();
  textCache.set(key, out);
  return out;
}

// ---------------------------------------------------------------- 화면 그리기

function roundPath(g, x, y, w, h, r) {
  g.beginPath();
  g.roundRect(x, y, w, h, Math.max(0, Math.min(r, w / 2, h / 2)));
}

// 모서리가 둥근 다각형 (점은 시계 방향)
function polyPath(g, pts, r) {
  g.beginPath();
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const a = pts[(i + n - 1) % n], p = pts[i], b = pts[(i + 1) % n];
    const rr = Math.max(0, Math.min(r, Math.hypot(p[0] - a[0], p[1] - a[1]) / 2, Math.hypot(b[0] - p[0], b[1] - p[1]) / 2));
    const m = [(a[0] + p[0]) / 2, (a[1] + p[1]) / 2];
    if (i === 0) g.moveTo(m[0], m[1]);
    g.arcTo(p[0], p[1], b[0], b[1], rr);
  }
  g.closePath();
}

// 영상 틀: slant만큼 왼쪽 위 모서리를 안으로 들여 왼쪽 변만 사선이 된다
function framePath(g, x, y, w, h, r, slant) {
  if (!slant) return roundPath(g, x, y, w, h, r);
  polyPath(g, [[x + slant, y], [x + w, y], [x + w, y + h], [x, y + h]], r);
}

// 도형: slant만큼 윗변을 오른쪽으로 밀어 평행사변형이 된다
function shapePath(g, L) {
  const s = L.slant || 0;
  if (!s) return roundPath(g, L.x, L.y, L.w, L.h, L.radius || 0);
  polyPath(g, [[L.x + s, L.y], [L.x + L.w, L.y], [L.x + L.w - s, L.y + L.h], [L.x, L.y + L.h]], L.radius || 0);
}

// 두 줄로 늘어난 글자 칸의 늘어난 양 (shiftWith·growWith로 이어진 레이어가 쓴다)
// shiftK: 늘어난 양에 곱해 움직일 비율 (+ 아래로, - 위로, 없으면 1)
const growOf = (id) => (id && layerById(id)?._grow) || 0;
const shiftOf = (L) => growOf(L.shiftWith) * (L.shiftK ?? 1);

// 박스 그림을 사선 기울기를 지키며 세로로 g만큼 늘린다: 위 절반·아래 절반은 그대로,
// 가운데 한 줄을 아래로 내려갈수록 slope만큼씩 왼쪽으로 밀며 이어 붙인다 (좌우 가운데는 그대로)
function drawStretched(ctx, im, L, g, slope) {
  const nw = im.naturalWidth, nh = im.naturalHeight, sy = nh / L.h;
  const mid = Math.round(L.h / 2), smid = Math.round(mid * sy);
  const d = g * slope, x0 = L.x + d / 2;
  ctx.drawImage(im, 0, 0, nw, smid, x0, L.y, L.w, mid);
  for (let i = 0; i < g; i++) ctx.drawImage(im, 0, smid, nw, Math.max(1, sy), x0 - (i + 0.5) * slope, L.y + mid + i, L.w, 1.6);
  ctx.drawImage(im, 0, smid, nw, nh - smid, x0 - d, L.y + mid + g, L.w, L.h - mid);
}

function drawLayer(ctx, L) {
  if (!L.visible) return;
  ctx.save();
  ctx.globalAlpha = L.opacity ?? 1;
  const dy = shiftOf(L);
  if (dy) ctx.translate(0, dy);
  if (L.type === 'image') {
    const P = imageOf(L);
    const im = S.images[P.src];
    const g = growOf(L.growWith);
    if (im && g) drawStretched(ctx, im, L, g, layerById(L.growWith).growSlope || 0);
    else if (im) ctx.drawImage(im, P.x, P.y, P.w, P.h);
  } else if (L.type === 'shape') {
    if (L.gradient) {
      const g = ctx.createLinearGradient(L.x, 0, L.x + L.w, 0);
      g.addColorStop(0, hexA(L.color, 1));
      g.addColorStop(1, hexA(L.color2 || L.color, L.opacity2 ?? 1));
      ctx.fillStyle = g;
    } else ctx.fillStyle = L.color;
    shapePath(ctx, L);
    ctx.fill();
  } else if (L.type === 'button') {
    const st = VT.BUTTONS[(S.tempButton && S.tempButton.layerId === L.id && S.tempButton.style) || L.style] || VT.BUTTONS.white;
    const fam = buttonFam(st.font);
    const text = langOf() === 'ko' ? L.text || BUTTON_TEXT : LANGS[langOf()].button;
    if (fam) st.draw(ctx, { x: L.x, y: L.y, w: L.w, h: L.h, ls: LANGS[langOf()].buttonLs || 0 }, text, fam);
  } else if (L.type === 'text') {
    const trying = S.tempFont && S.tempFont.layerId === L.id;
    if (L.useImage && L.src && !trying) {
      const im = S.images[L.src];
      if (im) { const b = containBox(im, L); ctx.drawImage(im, b.x, b.y, b.w, b.h); }
    } else {
      const fam = famFor(L);
      if (fam) {
        const r = renderText(L, textOf(L), fam);
        ctx.drawImage(r.canvas, L.x - r.pad, L.y - r.pad);
        L._size = r.size;
      }
    }
  }
  ctx.restore();
}

// 영상 자리: 그림자를 깔고, 자리를 뚫고, 테두리를 두른다
function drawVideoFrame(ctx, V) {
  const styleId = S.tempFrame || V.frameStyle;
  const st = styleId && styleId !== 'custom' && VT.FRAMES[styleId];
  if (st) {
    const b = { x: V.x, y: V.y, w: V.w, h: V.h, r: V.radius || 0 };
    ctx.save();
    st.under(ctx, b);
    ctx.restore();
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    framePath(ctx, V.x, V.y, V.w, V.h, V.radius || 0, V.slant || 0);
    ctx.fill();
    ctx.restore();
    ctx.save();
    st.over(ctx, b);
    ctx.restore();
    return;
  }
  const bw = V.border.on ? V.border.width : 0;
  const r = V.radius || 0;
  const slope = (V.slant || 0) / V.h;
  // 테두리처럼 바깥으로 d만큼 키운 틀 (사선 기울기는 그대로)
  const grow = (d) => framePath(ctx, V.x - d * (1 + slope), V.y - d, V.w + d * (2 + slope), V.h + d * 2, r + d, slope * (V.h + d * 2));
  ctx.save();
  if (V.shadow.on) {
    ctx.save();
    ctx.shadowColor = hexA(V.shadow.color, V.shadow.opacity);
    ctx.shadowBlur = V.shadow.blur;
    ctx.shadowOffsetY = V.shadow.offset;
    ctx.fillStyle = '#000';
    grow(bw);
    ctx.fill();
    ctx.restore();
  }
  ctx.globalCompositeOperation = 'destination-out';
  framePath(ctx, V.x, V.y, V.w, V.h, r, V.slant || 0);
  ctx.fill();
  ctx.globalCompositeOperation = 'source-over';
  if (bw) {
    ctx.strokeStyle = V.border.color;
    ctx.lineWidth = bw;
    grow(bw / 2);
    ctx.stroke();
  }
  ctx.restore();
}

// 영상 위에 덮이는 한 장(렌더링 때 그대로 PNG로 보낸다)
function drawOver(ctx) {
  const { w, h } = S.tpl.canvas;
  ctx.clearRect(0, 0, w, h);
  // 두 줄이 되면 늘어나는 글자 칸: 박스·카피가 먼저 그려지므로 늘어난 양을 미리 구해 둔다
  for (const L of S.tpl.layers) {
    if (L.type !== 'text' || !L.grow2) continue;
    L._grow = 0;
    if (!L.visible || (L.useImage && L.src)) continue;
    const fam = famFor(L);
    if (fam) L._grow = renderText(L, textOf(L), fam).grow || 0;
  }
  const V = videoLayer();
  const vi = S.tpl.layers.indexOf(V);
  S.tpl.layers.forEach((L, i) => { if (L !== V && (!V || i < vi)) drawLayer(ctx, L); });
  if (V && V.visible) drawVideoFrame(ctx, V);
  if (V) S.tpl.layers.forEach((L, i) => { if (i > vi) drawLayer(ctx, L); });
}

// 「확률형 아이템 포함」 문구: 영상 영역 오른쪽 아래, 영상 시작 후 NOTICE.sec초 동안만 (마지막 fade초에 사라짐)
// 글자는 언어별(LANGS[].notice)
const NOTICE = { sec: 3, fade: 0.3, size: 23, right: 38, bottom: 30 };

// 처음 몇 초만 보이는 것(안내 문구·연령 표기)을 투명한 판에 그린다. 그릴 게 없거나 글꼴을 아직 못 불러왔으면 false
function drawNotice(ctx) {
  const V = videoLayer();
  if (!V) return false;
  const lang = LANGS[langOf()];
  const text = !!(lang.notice && S.tpl.notice?.on);
  const fam = text ? buttonFam('noto') : '';
  if (text && !fam) return false;
  const badge = lang.rating && S.tpl.rating?.on ? S.images[RATING.src] : null;
  if (badge) {
    ctx.save();
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(badge, V.x + RATING.left, V.y + RATING.top, RATING.size, RATING.size);
    ctx.restore();
  }
  if (!text) return !!badge;
  ctx.save();
  ctx.font = `700 ${NOTICE.size}px ${fam}`;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'alphabetic';
  ctx.letterSpacing = '-0.3px';
  ctx.shadowColor = 'rgba(0,0,0,0.75)';
  ctx.shadowBlur = 6;
  ctx.shadowOffsetY = 1;
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(lang.notice, V.x + V.w - NOTICE.right, V.y + V.h - NOTICE.bottom);
  ctx.restore();
  return true;
}

// 영상 시작 후 t초일 때 문구 진하기 (0~1)
const noticeAlpha = (t) => clamp((NOTICE.sec - t) / NOTICE.fade, 0, 1);

// 창이 가려지면 requestAnimationFrame이 멈추므로 타이머로도 그린다 (먼저 오는 쪽 한 번)
let drawPending = false;
function redraw() {
  if (drawPending) return;
  drawPending = true;
  let raf = 0, timer = 0;
  const run = () => {
    if (!drawPending) return;
    drawPending = false;
    cancelAnimationFrame(raf);
    clearTimeout(timer);
    if (!S.tpl) return;
    drawOver(octx);
    const nc = $('#noticeCv');
    if (nc) {
      const g = nc.getContext('2d');
      g.clearRect(0, 0, nc.width, nc.height);
      drawNotice(g);
    }
    placeVideo();
    placeSel();
    updateSizeReadout();
  };
  raf = requestAnimationFrame(run);
  timer = setTimeout(run, 40);
}

function placeVideo() {
  const V = videoLayer();
  const s = S.scale;
  for (const el of [vid, $('#placeholder')]) {
    if (!V || !V.visible) { el.style.display = 'none'; continue; }
    Object.assign(el.style, { left: V.x * s + 'px', top: V.y * s + 'px', width: V.w * s + 'px', height: V.h * s + 'px', display: '' });
  }
  if (!V) return;
  vid.style.objectFit = { cover: 'cover', contain: 'contain', stretch: 'fill' }[V.fit] || 'cover';
  vid.style.background = V.bgColor || '#000';
  const has = !!vid.currentSrc && !S.video.error && !S.video.preparing;
  vid.style.visibility = has ? 'visible' : 'hidden';
  const ph = $('#placeholder');
  ph.style.display = V.visible && !has ? 'flex' : 'none';
  // 안내 문구: 미리보기 사본을 만드는 중이면 진행률, 못 여는 형식이면 그 안내
  if (!ph.dataset.idle) ph.dataset.idle = ph.innerHTML;
  if (S.video.preparing) ph.textContent = `${S.video.prepLabel || '미리보기 준비 중'}… ${Math.round((S.video.prepProgress || 0) * 100)}%`;
  else if (S.video.error && S.video.name) ph.textContent = S.video.error;
  else ph.innerHTML = ph.dataset.idle;
}

function fitStage() {
  if (!S.tpl) return;
  const r = $('#stageArea').getBoundingClientRect();
  const { w, h } = S.tpl.canvas;
  S.scale = Math.max(0.05, Math.min((r.width - 40) / w, (r.height - 40) / h));
  const st = $('#stage');
  st.style.width = Math.round(w * S.scale) + 'px';
  st.style.height = Math.round(h * S.scale) + 'px';
  redraw();
}

// ---------------------------------------------------------------- 선택·드래그

function placeSel() {
  const L = selLayer(), box = $('#selbox');
  if (!box) return;
  if (!L || !L.visible) { box.hidden = true; return; }
  const s = S.scale;
  box.hidden = false;
  const dy = shiftOf(L), dh = growOf(L.growWith) || (L.grow2 ? L._grow || 0 : 0);
  Object.assign(box.style, { left: L.x * s + 'px', top: (L.y + dy) * s + 'px', width: L.w * s + 'px', height: (L.h + dh) * s + 'px' });
  box.classList.toggle('ratio', !!L.keepRatio);
  box.classList.toggle('locked', !!L.locked);
}

function select(id) {
  if (S.selId === id) return;
  S.selId = id;
  const L = selLayer();
  if (L && L.type === 'text') {
    S.fontTargetId = L.id;
    refreshFontTarget();
  }
  buildLayerList();
  buildProps();
  redraw();
}

function toCanvas(e) {
  const r = $('#stage').getBoundingClientRect();
  return { x: (e.clientX - r.left) / S.scale, y: (e.clientY - r.top) / S.scale };
}

function hitTest(p) {
  for (let i = S.tpl.layers.length - 1; i >= 0; i--) {
    const L = S.tpl.layers[i];
    if (!L.visible || L.locked) continue;
    const dy = shiftOf(L), dh = growOf(L.growWith) || (L.grow2 ? L._grow || 0 : 0);
    if (p.x < L.x || p.x > L.x + L.w || p.y < L.y + dy || p.y > L.y + dy + L.h + dh) continue;
    const q = { x: p.x, y: p.y - dy };
    if ((L.type === 'image' || (L.type === 'text' && L.useImage)) && L.src && !dh && !alphaAt(L, q)) continue;
    return L;
  }
  return null;
}

let drag = null;

function snapMove(L, x, y, off) {
  if (off) { showGuides(null, null); return { x, y }; }
  const th = 7 / S.scale;
  const { w: cw, h: ch } = S.tpl.canvas;
  const xs = [0, cw / 2, cw], ys = [0, ch / 2, ch];
  for (const o of S.tpl.layers) {
    if (o === L || !o.visible || (o.w >= cw && o.h >= ch)) continue;
    xs.push(o.x, o.x + o.w / 2, o.x + o.w);
    ys.push(o.y, o.y + o.h / 2, o.y + o.h);
  }
  const pick = (pos, size, targets) => {
    let best = null;
    for (const part of [0, size / 2, size]) {
      for (const t of targets) {
        const d = t - (pos + part);
        if (Math.abs(d) < th && (!best || Math.abs(d) < Math.abs(best.d))) best = { d, t };
      }
    }
    return best;
  };
  const bx = pick(x, L.w, xs), by = pick(y, L.h, ys);
  if (bx) x += bx.d;
  if (by) y += by.d;
  showGuides(bx ? bx.t : null, by ? by.t : null);
  return { x, y };
}

function showGuides(gx, gy) {
  const s = S.scale;
  $('#guideX').hidden = gx === null;
  $('#guideY').hidden = gy === null;
  if (gx !== null) $('#guideX').style.left = gx * s + 'px';
  if (gy !== null) $('#guideY').style.top = gy * s + 'px';
}

function startDrag(e, mode, handle) {
  const L = selLayer();
  if (!L || L.locked) return;
  drag = { mode, handle, L, p0: toCanvas(e), o: { x: L.x, y: L.y, w: L.w, h: L.h }, moved: false };
  e.preventDefault();
}

function onDragMove(e) {
  if (!drag) return;
  const p = toCanvas(e);
  const { L, o } = drag;
  let dx = p.x - drag.p0.x, dy = p.y - drag.p0.y;
  if (!drag.moved && Math.hypot(dx, dy) * S.scale < 2) return;
  drag.moved = true;
  if (drag.mode === 'move') {
    const r = snapMove(L, o.x + dx, o.y + dy, e.altKey);
    L.x = Math.round(r.x);
    L.y = Math.round(r.y);
  } else {
    const hd = drag.handle;
    let { x, y, w, h } = o;
    if (hd.includes('e')) w = o.w + dx;
    if (hd.includes('s')) h = o.h + dy;
    if (hd.includes('w')) w = o.w - dx;
    if (hd.includes('n')) h = o.h - dy;
    const ratio = o.w / o.h;
    if (hd.length === 2 && (!!L.keepRatio !== e.shiftKey)) {
      if (w / o.w > h / o.h) h = w / ratio; else w = h * ratio;
    }
    w = Math.max(8, w);
    h = Math.max(8, h);
    if (hd.includes('w')) x = o.x + o.w - w;
    if (hd.includes('n')) y = o.y + o.h - h;
    Object.assign(L, { x: Math.round(x), y: Math.round(y), w: Math.round(w), h: Math.round(h) });
  }
  redraw();
  updateGeomInputs();
}

function onDragEnd() {
  if (!drag) return;
  const moved = drag.moved;
  drag = null;
  showGuides(null, null);
  if (moved) changed({ geom: true });
}

function nudge(dx, dy) {
  const L = selLayer();
  if (!L || L.locked) return;
  L.x += dx;
  L.y += dy;
  changed({ geom: true });
}

function updateGeomInputs() {
  const L = selLayer();
  if (!L) return;
  for (const [k, inp] of Object.entries(S.geom)) {
    if (document.activeElement !== inp) inp.value = Math.round(L[k] * 100) / 100;
  }
}

function updateSizeReadout() {
  const el = $('#sizeReadout');
  const L = selLayer();
  if (!el || !L || L.type !== 'text') return;
  el.textContent = L.useImage ? 'PSD 이미지 사용 중' : L._size ? `지금 ${Math.round(L._size)}px로 맞춰짐` : '';
}

// ---------------------------------------------------------------- 레이어 목록

function buildLayerList() {
  const list = $('#layerList');
  if (!list) return;
  list.innerHTML = '';
  const layers = S.tpl.layers;
  [...layers].reverse().forEach((L) => {
    const idx = layers.indexOf(L);
    const move = (dir) => (e) => {
      e.stopPropagation();
      const j = idx + dir;
      if (j < 0 || j >= layers.length) return;
      [layers[idx], layers[j]] = [layers[j], layers[idx]];
      changed({ list: true });
    };
    list.append(h('div', {
      class: 'lrow' + (L.id === S.selId ? ' sel' : '') + (L.visible ? '' : ' off'),
      onclick: () => select(L.id),
    },
    h('button', {
      class: 'ico', title: L.visible ? '숨기기' : '보이기', html: L.visible ? ICON.eye : ICON.eyeOff,
      onclick: (e) => { e.stopPropagation(); L.visible = !L.visible; changed({ list: true }); },
    }),
    h('span', { class: 'lname', title: L.name }, L.name),
    h('span', { class: 'ltype' }, TYPE_LABEL[L.type] || ''),
    h('button', {
      class: 'ico' + (L.locked ? '' : ' dim'), title: L.locked ? '잠금 풀기' : '잠그기 (화면에서 안 잡힘)', html: L.locked ? ICON.lock : ICON.unlock,
      onclick: (e) => { e.stopPropagation(); L.locked = !L.locked; changed({ list: true }); },
    }),
    h('button', { class: 'ico', title: '앞으로', html: ICON.up, onclick: move(1) }),
    h('button', { class: 'ico', title: '뒤로', html: ICON.down, onclick: move(-1) })));
  });
  if (!layers.some((l) => l.type === 'button')) {
    list.append(h('div', { class: 'row', style: 'padding:4px 10px' }, btn('+ 「플레이 하러가기」 버튼 넣기', addButton)));
  }
}

// 영상 아래 여백 가운데에 버튼을 넣는다
function addButton() {
  const { w: cw, h: ch } = S.tpl.canvas;
  const V = videoLayer();
  const w = 380, hh = 84;
  const x = V ? V.x + (V.w - w) / 2 : (cw - w) / 2;
  const y = V ? V.y + V.h + (ch - V.y - V.h - hh) / 2 : ch - hh - 60;
  S.tpl.layers.push({ id: 'play_button', name: '플레이 버튼', type: 'button', style: 'white', text: BUTTON_TEXT,
    x: Math.round(x), y: Math.round(y), w, h: hh, visible: true, opacity: 1, locked: false, keepRatio: true });
  changed({ list: true });
  select('play_button');
}

// 스타일 목록: 마우스를 올리면 화면에 미리 보이고, 누르면 바뀐다
function stylePicker(styles, current, preview, apply) {
  const wrap = h('div', { class: 'stylegrid' });
  for (const [id, st] of Object.entries(styles)) {
    const b = h('button', { class: id === current ? 'on' : '' }, st.name);
    b.addEventListener('mouseenter', () => { preview(id); redraw(); });
    b.addEventListener('mouseleave', () => { preview(null); redraw(); });
    b.addEventListener('click', (e) => { e.preventDefault(); preview(null); apply(id); });
    wrap.append(b);
  }
  return wrap;
}

// ---------------------------------------------------------------- 속성 패널 부품

function field(label, ...inputs) {
  return h('div', { class: 'f' }, h('span', {}, label), ...inputs);
}

function num(obj, key, label, o = {}) {
  const inp = h('input', { type: 'number', step: o.step ?? 1, value: Math.round(obj[key] * 100) / 100 });
  if (o.min !== undefined) inp.min = o.min;
  inp.addEventListener('input', () => {
    let v = parseFloat(inp.value);
    if (Number.isNaN(v)) return;
    if (o.min !== undefined) v = Math.max(o.min, v);
    if (o.max !== undefined) v = Math.min(o.max, v);
    if (o.ratio && obj.keepRatio && obj.w > 0 && obj.h > 0) {
      const r = obj.w / obj.h;
      if (key === 'w') obj.h = Math.round(v / r);
      if (key === 'h') obj.w = Math.round(v * r);
    }
    obj[key] = v;
    changed({ geom: o.geom });
  });
  if (o.geom) S.geom[key] = inp;
  return field(label, inp, o.suffix ? h('span', { class: 'val' }, o.suffix) : null);
}

function range(obj, key, label, min, max, step, fmt = (v) => v) {
  const val = h('span', { class: 'val' }, fmt(obj[key]));
  const inp = h('input', { type: 'range', min, max, step, value: obj[key] });
  inp.addEventListener('input', () => {
    obj[key] = parseFloat(inp.value);
    val.textContent = fmt(obj[key]);
    changed();
  });
  return field(label, inp, val);
}

function color(obj, key, label) {
  const inp = h('input', { type: 'color', value: obj[key] || '#000000' });
  const hex = h('input', { type: 'text', value: obj[key] || '', spellcheck: false });
  inp.addEventListener('input', () => { obj[key] = inp.value; hex.value = inp.value; changed(); });
  hex.addEventListener('change', () => {
    if (/^#[0-9a-f]{6}$/i.test(hex.value)) { obj[key] = hex.value; inp.value = hex.value; changed(); } else hex.value = obj[key];
  });
  return field(label, inp, hex);
}

function check(obj, key, label, after) {
  const inp = h('input', { type: 'checkbox', checked: !!obj[key] });
  inp.addEventListener('change', () => { obj[key] = inp.checked; changed(); if (after) after(); });
  return h('label', { class: 'chk' }, inp, label);
}

function seg(obj, key, label, options) {
  const wrap = h('div', { class: 'seg' });
  for (const [v, text] of options) {
    wrap.append(h('button', {
      class: obj[key] === v ? 'on' : '',
      onclick: (e) => {
        e.preventDefault();
        obj[key] = v;
        $$('button', wrap).forEach((b) => b.classList.remove('on'));
        e.currentTarget.classList.add('on');
        changed();
      },
    }, text));
  }
  return field(label, wrap);
}

// 켜고 끄는 효과 묶음
function sec(title, toggle) {
  const s = h('div', { class: 'sec' });
  const head = h('div', { class: 'sec-h' }, h('span', {}, title));
  if (toggle) {
    const inp = h('input', { type: 'checkbox', checked: !!toggle.on });
    inp.addEventListener('change', () => { toggle.on = inp.checked; s.classList.toggle('off', !inp.checked); changed(); });
    head.append(h('div', { class: 'spacer' }), h('label', { class: 'chk' }, inp, '사용'));
    s.classList.toggle('off', !toggle.on);
  }
  s.append(head);
  return s;
}

const btn = (text, fn, cls) => h('button', { class: cls, onclick: (e) => { e.preventDefault(); fn(); } }, text);

// ---------------------------------------------------------------- 속성 패널

function buildProps() {
  const P = $('#props');
  if (!P) return;
  P.innerHTML = '';
  S.geom = {};
  const L = selLayer();
  if (!L) {
    P.append(h('div', { class: 'hint' },
      '화면에서 요소를 누르거나 위 목록에서 고르면 위치·크기와 모양을 바꿀 수 있습니다.',
      h('br'), h('br'),
      '· 요소를 끌면 이동, 모서리 점을 끌면 크기 조절', h('br'),
      '· 가운데선·다른 요소 끝에 자동으로 붙습니다 (Alt를 누르면 안 붙음)', h('br'),
      '· 모든 변경은 바로 저장됩니다'));
    return;
  }
  const { w: cw, h: ch } = S.tpl.canvas;
  P.append(h('div', { class: 'ptitle' }, L.name));

  const g = sec('위치·크기');
  g.append(h('div', { class: 'g2' },
    num(L, 'x', 'X', { geom: true }), num(L, 'y', 'Y', { geom: true }),
    num(L, 'w', '가로', { geom: true, ratio: true, min: 1 }), num(L, 'h', '세로', { geom: true, ratio: true, min: 1 })));
  g.append(h('div', { class: 'row' },
    check(L, 'keepRatio', '비율 고정', placeSel),
    h('div', { class: 'spacer' }),
    btn('가로 가운데', () => { L.x = Math.round((cw - L.w) / 2); changed({ geom: true }); }),
    btn('세로 가운데', () => { L.y = Math.round((ch - L.h) / 2); changed({ geom: true }); })));
  if (L.type === 'image') {
    g.append(h('div', { class: 'row' },
      btn('원본 크기로', () => {
        const im = S.images[L.src];
        if (im) { L.w = im.naturalWidth; L.h = im.naturalHeight; changed({ geom: true }); }
      }),
      btn('화면 꽉 채우기', () => { Object.assign(L, { x: 0, y: 0, w: cw, h: ch }); changed({ geom: true }); })));
  }
  if (L.type !== 'video') g.append(range(L, 'opacity', '불투명도', 0, 1, 0.01, (v) => Math.round(v * 100) + '%'));
  P.append(g);

  if (L.type === 'video') videoProps(P, L);
  if (L.type === 'text') textProps(P, L);
  if (L.type === 'button') {
    const s = sec('버튼 스타일');
    s.append(stylePicker(VT.BUTTONS, L.style,
      (id) => { S.tempButton = id ? { layerId: L.id, style: id } : null; },
      (id) => { L.style = id; changed({ props: true }); }),
    h('div', { class: 'note' }, '마우스를 올리면 화면에 미리 보이고, 누르면 바뀝니다.'));
    const inp = h('input', { type: 'text', value: L.text || BUTTON_TEXT });
    inp.addEventListener('input', () => { L.text = inp.value; changed(); });
    s.append(field('글자', inp), h('div', { class: 'row' }, btn('영상 아래 가운데로', () => {
      const V = videoLayer();
      if (!V) return;
      L.x = Math.round(V.x + (V.w - L.w) / 2);
      L.y = Math.round(V.y + V.h + (S.tpl.canvas.h - V.y - V.h - L.h) / 2);
      changed({ geom: true });
    })));
    P.append(s);
  }
  if (L.type === 'shape') {
    const s = sec('모양');
    s.append(color(L, 'color', L.gradient ? '왼쪽 색' : '색'));
    s.append(h('div', { class: 'row' }, check(L, 'gradient', '오른쪽으로 그라데이션', buildProps)));
    if (L.gradient) {
      s.append(color(L, 'color2', '오른쪽 색'),
        range(L, 'opacity2', '오른쪽 진하기', 0, 1, 0.01, (v) => Math.round((v ?? 1) * 100) + '%'));
    }
    s.append(num(L, 'radius', '둥글기', { min: 0 }), num(L, 'slant', '사선', { suffix: 'px' }),
      h('div', { class: 'note' }, '사선: 윗변을 오른쪽으로 민 만큼 평행사변형이 됩니다.'));
    P.append(s);
  }
}

function videoProps(P, V) {
  const custom = !V.frameStyle || V.frameStyle === 'custom';
  const fs = sec('틀 스타일');
  fs.append(stylePicker({ custom: { name: '직접 설정' }, ...VT.FRAMES }, V.frameStyle || 'custom',
    (id) => { S.tempFrame = id; },
    (id) => { V.frameStyle = id; changed({ props: true }); }),
  h('div', { class: 'note' }, '마우스를 올리면 화면에 미리 보이고, 누르면 바뀝니다. 「직접 설정」은 아래 테두리·그림자 값을 씁니다.'));
  P.append(fs);

  const s = sec('영상 맞춤');
  s.append(seg(V, 'fit', '맞춤', [['cover', '꽉 채우기'], ['contain', '전체 보이기'], ['stretch', '늘리기']]));
  s.append(h('div', { class: 'note' }, '꽉 채우기: 비율이 다르면 넘치는 부분을 자름 · 전체 보이기: 남는 곳을 아래 색으로 채움'));
  s.append(color(V, 'bgColor', '여백 색'), num(V, 'radius', '모서리', { min: 0, suffix: 'px' }),
    num(V, 'slant', '왼쪽 사선', { min: 0, suffix: 'px' }),
    h('div', { class: 'note' }, '왼쪽 사선: 왼쪽 위 모서리를 안으로 들인 만큼 왼쪽 변만 비스듬해집니다. 영상은 찌그러지지 않고 잘리기만 합니다. 0이면 반듯한 사각형.'));
  const info = S.video.info;
  s.append(h('div', { class: 'row' },
    btn('16:9로 맞추기', () => { V.h = Math.round(V.w * 9 / 16); changed({ geom: true }); }),
    info ? btn('영상 비율로 맞추기', () => { V.h = Math.round(V.w * info.height / info.width); changed({ geom: true }); }) : null));
  P.append(s);

  if (custom) {
    const b = sec('테두리', V.border);
    b.append(num(V.border, 'width', '두께', { min: 0, suffix: 'px' }), color(V.border, 'color', '색'));
    P.append(b);

    const sh = sec('그림자', V.shadow);
    sh.append(num(V.shadow, 'blur', '번짐', { min: 0 }), num(V.shadow, 'offset', '아래로'),
      color(V.shadow, 'color', '색'), range(V.shadow, 'opacity', '진하기', 0, 1, 0.01, (v) => Math.round(v * 100) + '%'));
    P.append(sh);
  }

  const t = sec('쓸 구간');
  t.append(num(V, 'trimStart', '시작', { min: 0, step: 0.1, suffix: '초' }),
    num(V, 'trimDuration', '길이', { min: 0, step: 0.1, suffix: '초' }),
    h('div', { class: 'note' }, '길이 0 = 끝까지' + (info ? ` · 원본 ${info.duration.toFixed(1)}초` : '')));
  P.append(t);
}

function textProps(P, L) {
  const s = sec('글자');
  const isName = L.bind === 'gameName';
  const ta = h('textarea', { rows: 2, spellcheck: false, value: (isName ? S.tpl.gameName : L.text) || '' });
  ta.addEventListener('input', () => {
    if (isName) { S.tpl.gameName = ta.value; $('#gameName').value = ta.value; } else L.text = ta.value;
    changed();
  });
  ta.id = 'propText';
  s.append(field(isName ? '게임 이름' : '내용', ta));
  if (isName) s.append(h('div', { class: 'note' }, '위쪽 「게임 이름」 칸과 같은 내용입니다. Enter로 줄을 직접 나눌 수 있습니다.'));
  if (L.src) {
    s.append(h('div', { class: 'row' }, check(L, 'useImage', 'PSD 글자 이미지 그대로 쓰기', buildProps)));
    if (L.useImage) s.append(h('div', { class: 'note' }, '끄면 아래 폰트·효과로 직접 글자를 그립니다.'));
  }
  const face = resolveFace(L.font);
  s.append(field('폰트', h('div', { class: 'fontpick' },
    h('b', { title: fontLabel(L.font) }, fontLabel(L.font)),
    btn('폰트 바꾸기', () => { S.fontTargetId = L.id; refreshFontTarget(); switchTab('fonts'); }))));
  if (S.faces.length && !face) s.append(h('div', { class: 'note warn' }, '이 폰트가 PC에 없어 기본 글꼴로 그립니다.'));
  s.append(num(L, 'maxSize', '최대 크기', { min: 4, suffix: 'px' }),
    h('div', { class: 'note', id: 'sizeReadout' }),
    range(L, 'lineHeight', '줄 간격', 0.7, 2, 0.01, (v) => v.toFixed(2)),
    range(L, 'letterSpacing', '자간', -200, 300, 5, (v) => String(v)),
    range(L, 'skew', '기울임', -20, 30, 1, (v) => `${v || 0}°`),
    range(L, 'weight', '굵기', 100, 900, 100, (v) => String(v || 400)),
    h('div', { class: 'note' }, '굵기는 굵기 조절이 되는 폰트(Noto Sans KR 등)에서만 바뀝니다.'),
    seg(L, 'align', '가로 정렬', [['left', '왼쪽'], ['center', '가운데'], ['right', '오른쪽']]),
    seg(L, 'valign', '세로 정렬', [['top', '위'], ['middle', '가운데'], ['bottom', '아래']]),
    h('div', { class: 'row' }, check(L, 'wrap', '상자 폭에 맞춰 자동 줄바꿈')),
    h('div', { class: 'row' }, check(L, 'balance2', '길면 작아지다가 폭이 비슷한 두 줄로')),
    h('div', { class: 'row' }, check(L, 'quote', '따옴표 “ ” 자동으로 붙이기')),
    h('div', { class: 'note' }, '글자는 상자 안에 들어가도록 최대 크기에서 자동으로 줄어듭니다.'));
  P.append(s);

  const fill = sec('채우기 (위→아래 그라데이션)');
  fill.append(color(L.fill, 0, '위 색'), color(L.fill, 1, '아래 색'));
  P.append(fill);

  const st = sec('외곽선', L.stroke);
  st.append(num(L.stroke, 'width', '두께', { min: 0, step: 0.5, suffix: 'px' }), color(L.stroke, 'color', '색'));
  P.append(st);

  const dp = sec('입체 (아래 두께)', L.depth);
  dp.append(num(L.depth, 'size', '두께', { min: 0, suffix: 'px' }), color(L.depth, 'color', '색'));
  P.append(dp);

  const gl = sec('안쪽 빛', L.glow);
  gl.append(num(L.glow, 'width', '두께', { min: 0, step: 0.5, suffix: 'px' }), color(L.glow, 'color', '색'),
    range(L.glow, 'opacity', '진하기', 0, 1, 0.01, (v) => Math.round(v * 100) + '%'));
  P.append(gl);

  const sh = sec('그림자', L.shadow);
  sh.append(num(L.shadow, 'blur', '번짐', { min: 0 }), num(L.shadow, 'offset', '아래로'),
    color(L.shadow, 'color', '색'), range(L.shadow, 'opacity', '진하기', 0, 1, 0.01, (v) => Math.round(v * 100) + '%'));
  P.append(sh);

  const STYLE_KEYS = ['font', 'maxSize', 'lineHeight', 'letterSpacing', 'fill', 'stroke', 'depth', 'glow', 'shadow'];
  P.append(h('div', { class: 'sec' }, h('div', { class: 'row' },
    btn('스타일 복사', () => {
      S.styleClip = JSON.parse(JSON.stringify(Object.fromEntries(STYLE_KEYS.map((k) => [k, L[k]]))));
      toast('스타일을 복사했습니다. 다른 글자를 고르고 「붙여넣기」를 누르세요.');
    }),
    btn('스타일 붙여넣기', () => {
      if (!S.styleClip) return toast('먼저 다른 글자에서 「스타일 복사」를 누르세요');
      Object.assign(L, JSON.parse(JSON.stringify(S.styleClip)));
      changed({ props: true });
    }))));
  updateSizeReadout();
}

// ---------------------------------------------------------------- 폰트 탭

function fontTarget() {
  return layerById(S.fontTargetId) || layerById('game_name') || textLayers()[0] || null;
}

function refreshFontTarget() {
  const sel = $('#fontTarget');
  if (!sel) return;
  const T = fontTarget();
  sel.innerHTML = '';
  for (const L of textLayers()) sel.append(h('option', { value: L.id, selected: T && L.id === T.id }, L.name));
  updateFontCurrent();
  if ($('#tab-fonts').classList.contains('on')) buildFontGrid();
}

function updateFontCurrent() {
  if (!$('#fontCurrent')) return;
  const T = fontTarget();
  $('#fontCurrent').textContent = T ? `지금: ${fontLabel(T.font)}${T.useImage ? ' · PSD 이미지 사용 중 (폰트를 고르면 글자로 바뀝니다)' : ''}` : '';
}

const fontObserver = new IntersectionObserver((entries) => {
  for (const en of entries) {
    if (!en.isIntersecting) continue;
    fontObserver.unobserve(en.target);
    drawFontCard(en.target);
  }
}, { root: $('#fontGrid'), rootMargin: '300px' });

function buildFontGrid() {
  const grid = $('#fontGrid');
  if (!grid) return;
  grid.innerHTML = '';
  fontObserver.disconnect();
  if (!S.faces.length) {
    grid.append(h('div', { class: 'hint' }, '폰트 목록을 읽는 중입니다…'));
    return;
  }
  const q = $('#fontSearch').value.trim().toLowerCase();
  const onlyKo = $('#fontHangul').checked;
  const T = fontTarget();
  const cur = T && resolveFace(T.font);
  const list = S.faces.filter((f) => (!onlyKo || f.hangul)
    && (!q || `${f.family} ${f.familyEn} ${f.style} ${f.full}`.toLowerCase().includes(q)));
  $('#fontCount').textContent = `${list.length}개`;
  for (const f of list) {
    const card = h('div', { class: 'fcard' + (cur && cur.id === f.id ? ' cur' : '') },
      h('div', { class: 'fname' }, h('b', {}, f.family), h('span', {}, f.style), f.origin === 'custom' ? h('em', {}, '추가한 폰트') : null),
      h('canvas', { width: 700, height: 132 }));
    card.dataset.id = f.id;
    card.addEventListener('mouseenter', () => {
      const t = fontTarget();
      if (!t) return;
      S.tempFont = { layerId: t.id, face: f };
      ensureFont(f).then(redraw);
      redraw();
    });
    card.addEventListener('mouseleave', () => { S.tempFont = null; redraw(); });
    card.addEventListener('click', () => applyFont(f));
    grid.append(card);
    fontObserver.observe(card);
  }
}

async function drawFontCard(card) {
  const f = S.faces.find((x) => String(x.id) === card.dataset.id);
  const cv = $('canvas', card);
  const g = cv.getContext('2d');
  const fam = await ensureFont(f);
  g.clearRect(0, 0, cv.width, cv.height);
  card.classList.add('drawn');
  if (!fam) {
    g.fillStyle = '#8b92a5';
    g.font = '26px sans-serif';
    g.fillText('이 폰트는 불러올 수 없습니다', 20, 76);
    return;
  }
  const T = fontTarget();
  if (!T) return;
  const k = Math.min(1.4, 84 / (T.maxSize || 60));
  const sample = textOf(T).replace(/\n/g, ' ') || '게임 이름';
  const r = renderText({ ...T, wrap: false, align: 'center', valign: 'middle' }, sample, `"${fam}"`, k, { w: cv.width - 30, h: cv.height - 16 });
  g.drawImage(r.canvas, 15 - r.pad, 8 - r.pad);
}

let cardsTimer;
function refreshFontCardsSoon() {
  if (!$('#tab-fonts')?.classList.contains('on')) return;
  clearTimeout(cardsTimer);
  cardsTimer = setTimeout(() => $$('#fontGrid .fcard.drawn').forEach(drawFontCard), 250);
}

function applyFont(f) {
  const T = fontTarget();
  if (!T) return;
  T.font = { family: f.family, style: f.style, file: f.file };
  T.useImage = false;
  S.tempFont = null;
  $$('#fontGrid .fcard').forEach((c) => c.classList.toggle('cur', c.dataset.id === String(f.id)));
  updateFontCurrent();
  changed({ props: selLayer() === T });
  ensureFont(f).then(redraw);
  toast(`${T.name} → ${f.family} ${f.style}`);
}

function uploadFonts(files) {
  const list = [...files].filter((f) => /\.(ttf|otf|ttc)$/i.test(f.name));
  if (!list.length) return;
  Promise.all(list.map((file) => fetch('/api/font-upload?name=' + encodeURIComponent(file.name), { method: 'POST', body: file })
    .then((r) => r.json())))
    .then(async () => {
      await loadFaces(true);
      $('#fontSearch').value = '';
      switchTab('fonts');
      buildFontGrid();
      toast(`폰트 ${list.length}개를 추가했습니다. 목록 맨 위에 있습니다.`);
    })
    .catch(() => toast('폰트를 추가하지 못했습니다'));
}

// ---------------------------------------------------------------- 디자인 선택

async function loadDesigns() {
  try { S.designs = await api('/api/designs'); } catch (e) { S.designs = []; }
  const sel = $('#designSel');
  if (!sel) return;
  sel.innerHTML = '';
  for (const d of S.designs) sel.append(h('option', { value: d.id, selected: d.id === S.tpl.design }, d.name));
}

// 디자인을 바꿀 때 지금 디자인의 배치는 따로 보관해 두고, 다시 고르면 그대로 꺼낸다
async function loadDesign(id, fresh) {
  const keep = { gameName: S.tpl.gameName, lastVideo: S.tpl.lastVideo, render: S.tpl.render };
  if (!fresh && id !== S.tpl.design) await api('/api/design-state/' + S.tpl.design, JSON.parse(snapshot())).catch(() => {});
  let tpl = fresh ? null : await api('/api/design-state/' + id).catch(() => null);
  if (!tpl || !Array.isArray(tpl.layers)) tpl = await api('/api/design/' + id);
  Object.assign(tpl, keep, { design: id });
  S.selId = null;
  await setTemplate(tpl, false);
  changed();
}

// ---------------------------------------------------------------- 출력 탭

function buildOutputTab() {
  const P = $('#outputPanel');
  if (!P) return;
  P.innerHTML = '';
  const R = S.tpl.render;
  const q = sec('영상 파일');
  q.append(range(R, 'crf', '화질', 12, 30, 1, (v) => `CRF ${v}`),
    h('div', { class: 'note' }, '숫자가 낮을수록 화질이 좋고 파일이 커집니다. 18이면 눈으로 구분하기 어려운 수준입니다.'),
    seg(R, 'preset', '인코딩', [['veryfast', '빠르게'], ['medium', '보통'], ['slow', '느리게·고화질']]),
    h('div', { class: 'row' }, check(R, 'mute', '영상 소리 빼기')),
    h('div', { class: 'note' }, '결과물: MP4 (H.264), 1920×1080, 원본 영상과 같은 프레임 수'));
  P.append(q);

  const r = sec('만든 영상');
  r.append(h('div', { class: 'row' }, btn('출력 폴더 열기', () => api('/api/open-output', {}))));
  if (!S.results.length) r.append(h('div', { class: 'note' }, '이번에 만든 영상이 여기에 쌓입니다.'));
  for (const name of S.results) {
    r.append(h('div', { class: 'result' }, h('span', { class: 'mono', title: name }, name),
      btn('보기', () => showResult(name)),
      btn('폴더', () => api('/api/open-output?file=' + encodeURIComponent(name), {}))));
  }
  P.append(r);

  const t = sec('템플릿');
  const fileIn = h('input', { type: 'file', accept: '.json', hidden: true });
  fileIn.addEventListener('change', async () => {
    const f = fileIn.files[0];
    if (!f) return;
    try {
      const tpl = JSON.parse(await f.text());
      if (!Array.isArray(tpl.layers)) throw new Error();
      tpl.lastVideo = S.tpl.lastVideo;
      await setTemplate(tpl, false);
      changed();
      toast('템플릿을 불러왔습니다');
    } catch (e) { toast('템플릿 파일이 아닙니다'); }
  });
  t.append(h('div', { class: 'row' },
    btn('템플릿 파일로 저장', () => {
      const a = h('a', { href: URL.createObjectURL(new Blob([snapshot()], { type: 'application/json' })), download: '영상템플릿.json' });
      a.click();
    }),
    btn('파일 불러오기', () => fileIn.click()), fileIn),
  h('div', { class: 'row' }, btn('이 디자인을 처음 배치로 되돌리기', async () => {
    if (!confirm('지금 디자인의 배치와 스타일을 처음 상태로 되돌릴까요? (Ctrl+Z로 다시 돌아올 수 있습니다)')) return;
    await loadDesign(S.tpl.design, true);
  }, 'danger')),
  h('div', { class: 'note' }, '배치·스타일은 바꿀 때마다 자동 저장되어 다음에 열어도 그대로입니다.'));
  P.append(t);
}

// ---------------------------------------------------------------- 영상

function updateVideoInfo() {
  const el = $('#videoInfo');
  if (!el) return;
  const v = S.video;
  el.innerHTML = '';
  if (!v.name) return;
  const parts = [v.name];
  if (v.info) parts.push(`${v.info.width}×${v.info.height}`, `${v.info.fpsValue}fps`, `${v.info.duration.toFixed(1)}초`, v.info.audio ? '소리 있음' : '소리 없음');
  el.append(parts.join(' · '));
  if (v.uploading) el.append(` · 준비 중 ${Math.round(v.progress * 100)}%`);
  if (v.error) el.append(' · ', h('span', { class: 'err' }, v.error));
  el.title = el.textContent;
}

function loadVideoFile(file) {
  if (S.video.url) URL.revokeObjectURL(S.video.url);
  S.video = { id: null, name: file.name, info: null, uploading: true, progress: 0, url: URL.createObjectURL(file), error: '' };
  vid.src = S.video.url;
  vid.play().catch(() => {});
  updateVideoInfo();
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/upload?name=' + encodeURIComponent(file.name));
  xhr.upload.onprogress = (e) => { if (e.lengthComputable) { S.video.progress = e.loaded / e.total; updateVideoInfo(); } };
  xhr.onload = () => {
    let j = {};
    try { j = JSON.parse(xhr.responseText); } catch (e) { j = { error: '서버 응답을 읽지 못했습니다' }; }
    S.video.uploading = false;
    if (xhr.status !== 200) {
      S.video.error = j.error || '업로드 실패';
      S.renderQueued = false;
      updateVideoInfo();
      setRenderUI('idle');
      return;
    }
    S.video.id = j.id;
    S.video.info = j.info;
    S.tpl.lastVideo = { id: j.id, name: file.name };
    saveSoon();
    if (j.info.needsPreview) usePreviewCopy(j.id);
    updateVideoInfo();
    if (selLayer()?.type === 'video') buildProps();
    if (S.renderQueued) startRender();
  };
  xhr.onerror = () => { S.video.uploading = false; S.video.error = '업로드 실패'; updateVideoInfo(); };
  xhr.send(file);
}

async function restoreVideo(lv) {
  try {
    const info = await api(`/api/video/${lv.id}/info`);
    S.video = { id: lv.id, name: lv.name, info, uploading: false, progress: 1, url: null, error: '' };
    if (info.needsPreview) usePreviewCopy(lv.id);
    else vid.src = `/api/video/${lv.id}`;
    updateVideoInfo();
  } catch (e) {
    S.tpl.lastVideo = null;
  }
}

// 브라우저가 못 여는 영상(HEVC 4:4:4 .mov 등): 서버가 만드는 미리보기용 사본이 준비되면 그걸로 보여 준다.
// 최종 영상은 서버가 원본으로 만든다.
async function usePreviewCopy(id) {
  vid.removeAttribute('src');
  vid.load();
  S.video.preparing = true;
  S.video.prepProgress = 0;
  redraw();
  for (;;) {
    if (S.video.id !== id) return;   // 그사이 다른 영상을 넣었으면 그만
    let info;
    try { info = await api(`/api/video/${id}/info`); } catch (e) { info = null; }
    const pv = info?.preview || {};
    if (pv.state === 'done') break;
    if (pv.state === 'error') {
      S.video.preparing = false;
      S.video.error = '미리보기를 만들지 못했어요 (영상 만들기는 됩니다)';
      updateVideoInfo();
      redraw();
      return;
    }
    S.video.prepProgress = pv.progress || 0;
    updateVideoInfo();
    redraw();
    await sleep(400);
  }
  S.video.preparing = false;
  S.video.prepProgress = 1;
  vid.src = `/api/video/${id}/preview`;
  vid.play().catch(() => {});
  updateVideoInfo();
}

function togglePlay() {
  if (!vid.currentSrc) return;
  if (vid.paused) vid.play().catch(() => {}); else vid.pause();
}

function updateTransport() {
  if (!$('#btnPlay')) return;
  $('#btnPlay').innerHTML = vid.paused ? ICON.play : ICON.pause;
  $('#btnSound').innerHTML = vid.muted ? ICON.mute : ICON.sound;
}

function trimRange() {
  const V = videoLayer();
  const dur = vid.duration || 0;
  const s = clamp(V?.trimStart || 0, 0, dur);
  const d = V?.trimDuration > 0 ? Math.min(V.trimDuration, dur - s) : dur - s;
  return { s, e: s + Math.max(0, d) };
}

// ---------------------------------------------------------------- 렌더링

function setRenderUI(state, progress = 0, info = {}) {
  const el = $('#renderStatus');
  if (!el) return;
  el.innerHTML = '';
  const b = $('#btnRender');
  b.disabled = state === 'running';
  if (state === 'waiting') el.append(h('span', { class: 'muted' }, '영상 준비가 끝나면 시작합니다…'));
  if (state === 'running') {
    el.append(h('div', { class: 'pbar' }, h('div', { style: `width:${Math.round(progress * 100)}%` })),
      h('span', { class: 'mono' }, `${Math.round(progress * 100)}%`),
      btn('취소', () => api(`/api/job/${S.job}/cancel`, {})));
  }
  if (state === 'done') {
    el.append(h('span', { class: 'st-ok' }, '완료'), btn('보기', () => showResult(info.output)),
      btn('폴더', () => api('/api/open-output?file=' + encodeURIComponent(info.output), {})));
  }
  if (state === 'error') el.append(h('span', { class: 'st-err', title: info.error || '' }, '실패: ' + String(info.error || '').split('\n').filter(Boolean).slice(-1)[0]));
  if (state === 'cancelled') el.append(h('span', { class: 'muted' }, '취소했습니다'));
}

async function startRender() {
  if (S.rendering) return;
  if (!S.video.id) {
    if (S.video.uploading) { S.renderQueued = true; setRenderUI('waiting'); return; }
    toast('먼저 영상을 불러오세요');
    return;
  }
  S.renderQueued = false;
  S.rendering = true;
  try {
    setRenderUI('running', 0);
    await S.facesReady;
    S.tempFont = null;
    await Promise.all(textLayers().filter((l) => l.visible && !l.useImage).map((l) => ensureFont(resolveFace(l.font))));
    await Promise.all(S.faces.filter((f) => f.file === FALLBACK_FONT.file).map(ensureFont));
    const V = videoLayer();
    const c = document.createElement('canvas');
    c.width = S.tpl.canvas.w;
    c.height = S.tpl.canvas.h;
    drawOver(c.getContext('2d'));
    const nc = document.createElement('canvas');
    nc.width = c.width;
    nc.height = c.height;
    const hasNotice = drawNotice(nc.getContext('2d'));
    const body = {
      videoId: S.video.id,
      overlay: c.toDataURL('image/png'),
      notice: hasNotice ? nc.toDataURL('image/png') : null,
      noticeSec: NOTICE.sec,
      noticeFade: NOTICE.fade,
      canvas: S.tpl.canvas,
      region: { x: V.x, y: V.y, w: V.w, h: V.h },
      fit: V.fit,
      bgColor: V.bgColor,
      trimStart: V.trimStart || 0,
      trimDuration: V.trimDuration || 0,
      name: (S.tpl.gameName || 'video').replace(/\n/g, ' '),
      render: S.tpl.render,
    };
    const { job } = await api('/api/render', body);
    S.job = job;
    for (;;) {
      await sleep(400);
      const j = await api('/api/job/' + job);
      if (j.state === 'running' || j.state === 'queued') { setRenderUI('running', j.progress || 0); continue; }
      setRenderUI(j.state, 1, j);
      if (j.state === 'done') {
        S.results.unshift(j.output);
        buildOutputTab();
        toast('영상을 만들었습니다: ' + j.output, 4000);
      }
      break;
    }
  } catch (e) {
    setRenderUI('error', 0, { error: e.message });
  } finally {
    S.rendering = false;
    $('#btnRender').disabled = false;
  }
}

function showResult(name) {
  const dlg = $('#resultDlg');
  $('#resultVid').src = '/output/' + encodeURIComponent(name);
  $('#resultName').textContent = name;
  $('#resultReveal').onclick = () => api('/api/open-output?file=' + encodeURIComponent(name), {});
  dlg.showModal();
  vid.pause();
  $('#resultVid').play().catch(() => {});
}

// ---------------------------------------------------------------- 탭·시작

function switchTab(name) {
  $$('#tabs button').forEach((b) => b.classList.toggle('on', b.dataset.tab === name));
  $$('.tab').forEach((t) => t.classList.toggle('on', t.id === 'tab-' + name));
  if (name === 'fonts') { refreshFontTarget(); buildFontGrid(); }
  if (name === 'output') buildOutputTab();
}

async function setTemplate(tpl, keepSel) {
  S.tpl = migrate(tpl);
  if (!keepSel || !layerById(S.selId)) S.selId = null;
  textCache.clear();
  await loadImages();
  $('#gameName').value = S.tpl.gameName;
  if ($('#designSel')?.options.length) $('#designSel').value = S.tpl.design;
  buildLayerList();
  buildProps();
  if ($('#tab-output')?.classList.contains('on')) buildOutputTab();
  refreshFontTarget();
  fitStage();
  if (S.tpl.lastVideo && S.tpl.lastVideo.id !== S.video.id && !S.video.uploading) restoreVideo(S.tpl.lastVideo);
}

function bindUI() {
  $('#gameName').addEventListener('input', (e) => {
    S.tpl.gameName = e.target.value;
    const ta = $('#propText');
    if (ta && selLayer()?.bind === 'gameName') ta.value = e.target.value;
    changed();
  });
  $('#designSel').addEventListener('change', (e) => loadDesign(e.target.value).catch((err) => toast('디자인을 불러오지 못했습니다: ' + err.message)));
  $('#btnVideo').addEventListener('click', () => $('#fileVideo').click());
  $('#fileVideo').addEventListener('change', (e) => { if (e.target.files[0]) loadVideoFile(e.target.files[0]); e.target.value = ''; });
  $('#btnRender').addEventListener('click', startRender);
  $$('#tabs button').forEach((b) => b.addEventListener('click', () => switchTab(b.dataset.tab)));

  // 화면 조작
  const hit = $('#hit');
  hit.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    const L = hitTest(toCanvas(e));
    select(L ? L.id : null);
    if (L) startDrag(e, 'move');
  });
  hit.addEventListener('pointermove', (e) => {
    if (drag) return;
    hit.classList.toggle('grab', !!hitTest(toCanvas(e)));
  });
  hit.addEventListener('dblclick', (e) => {
    const L = hitTest(toCanvas(e));
    if (L && L.type === 'text') { switchTab('layers'); const ta = $('#propText'); if (ta) { ta.focus(); ta.select(); } }
  });
  $$('#selbox i').forEach((i) => i.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    e.stopPropagation();
    startDrag(e, 'resize', i.dataset.h);
  }));
  window.addEventListener('pointermove', onDragMove);
  window.addEventListener('pointerup', onDragEnd);
  window.addEventListener('blur', onDragEnd);

  window.addEventListener('keydown', (e) => {
    const typing = e.target.matches('input, textarea, select');
    const mod = e.ctrlKey || e.metaKey;
    if (mod && e.key.toLowerCase() === 'z' && !typing) { e.preventDefault(); if (e.shiftKey) redo(); else undo(); return; }
    if (mod && e.key.toLowerCase() === 'y' && !typing) { e.preventDefault(); redo(); return; }
    if (typing) return;
    const step = e.shiftKey ? 10 : 1;
    const arrows = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
    if (arrows[e.key] && selLayer()) { e.preventDefault(); nudge(...arrows[e.key]); return; }
    if (e.key === ' ') { e.preventDefault(); togglePlay(); return; }
    if (e.key === 'Escape') select(null);
  });

  // 끌어다 놓기: 영상·폰트
  let dragDepth = 0;
  window.addEventListener('dragenter', (e) => { e.preventDefault(); dragDepth++; document.body.classList.add('drop'); });
  window.addEventListener('dragleave', () => { if (--dragDepth <= 0) { dragDepth = 0; document.body.classList.remove('drop'); } });
  window.addEventListener('dragover', (e) => e.preventDefault());
  window.addEventListener('drop', (e) => {
    e.preventDefault();
    dragDepth = 0;
    document.body.classList.remove('drop');
    const files = [...e.dataTransfer.files];
    uploadFonts(files);
    const v = files.find((f) => f.type.startsWith('video/') || /\.(mp4|mov|webm|mkv|avi|m4v)$/i.test(f.name));
    if (v) loadVideoFile(v);
  });

  // 폰트 탭
  $('#fontTarget').addEventListener('change', (e) => { S.fontTargetId = e.target.value; updateFontCurrent(); buildFontGrid(); });
  let searchTimer;
  $('#fontSearch').addEventListener('input', () => { clearTimeout(searchTimer); searchTimer = setTimeout(buildFontGrid, 200); });
  $('#fontHangul').addEventListener('change', buildFontGrid);
  $('#fontAdd').addEventListener('click', () => $('#fontFile').click());
  $('#fontFile').addEventListener('change', (e) => { uploadFonts(e.target.files); e.target.value = ''; });

  // 재생 막대
  $('#btnPlay').addEventListener('click', togglePlay);
  $('#btnSound').addEventListener('click', () => { vid.muted = !vid.muted; updateTransport(); });
  vid.addEventListener('play', updateTransport);
  vid.addEventListener('pause', updateTransport);
  vid.addEventListener('loadeddata', () => { S.video.error = ''; const { s } = trimRange(); if (s) vid.currentTime = s; redraw(); });
  vid.addEventListener('error', () => {
    if (!vid.currentSrc) return;
    S.video.error = '이 브라우저에서 미리보기가 안 되는 형식입니다 (렌더링은 됩니다)';
    updateVideoInfo();
    redraw();
  });
  vid.addEventListener('timeupdate', () => {
    const { s, e } = trimRange();
    if (vid.duration && (vid.currentTime < s - 0.05 || vid.currentTime > e + 0.02)) vid.currentTime = s;
    $('#timeLabel').textContent = `${fmtTime(vid.currentTime - s)} / ${fmtTime(e - s)}`;
    if (document.activeElement !== $('#scrub')) $('#scrub').value = e > s ? ((vid.currentTime - s) / (e - s)) * 1000 : 0;
  });
  $('#scrub').addEventListener('input', (e) => {
    const { s, e: end } = trimRange();
    vid.currentTime = s + (end - s) * (e.target.value / 1000);
  });
  $('#resultClose').addEventListener('click', () => { $('#resultVid').pause(); $('#resultDlg').close(); });
  $('#resultDlg').addEventListener('close', () => $('#resultVid').pause());

  new ResizeObserver(fitStage).observe($('#stageArea'));
  updateTransport();
}

async function init() {
  bindUI();
  const tpl = await api('/api/template');
  lastSynced = JSON.stringify(tpl);
  await setTemplate(tpl, false);
  pushHistory();
  loadFaces();
  loadDesigns();
  window.addEventListener('focus', syncFromServer);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) syncFromServer(); });
}

// 간단 화면(index.html)은 simple.js가 따로 시작한다. 이 init은 편집기(advanced.html)용
if (document.body.dataset.app !== 'simple') init().catch((e) => {
  document.body.innerHTML = '';
  document.body.append(h('div', { class: 'hint' }, '편집기를 시작하지 못했습니다: ' + e.message));
});
