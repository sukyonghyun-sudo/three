'use strict';

// 간단 화면: ① 영상 ② 게임 이름 ③ 쓸 구간 ④ 화질 → 영상 만들기.
// 배치·스타일은 편집기(/advanced)에서 정한 지금 값으로 고정한다. 그리기·렌더링은 app.js를 그대로 쓴다.

const QUALITY = [
  { name: '표준', crf: 23, note: '파일이 가벼워요' },
  { name: '고화질', crf: 18, note: '추천' },
  { name: '최고화질', crf: 14, note: '파일이 커요' },
];
const MIN_TRIM = 0.3;

// 사내 다른 PC에서 이 프로그램(내 PC 버전)에 접속한 사람: 배치는 그대로 쓰고,
// 게임 이름·화질·문구 설정은 각자 브라우저에 기억하며, 결과는 내려받기로 받는다
const REMOTE = !window.VT_WEB && !/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
const REMOTE_KEY = 'vt_remote_prefs_v1';
if (REMOTE) {
  persist = function (body) {
    try {
      const t = JSON.parse(body);
      localStorage.setItem(REMOTE_KEY, JSON.stringify({ gameName: t.gameName, crf: t.render?.crf, notice: t.notice?.on, mute: !!t.render?.mute }));
    } catch (e) { /* 저장소를 못 써도 계속 */ }
  };
  syncFromServer = async function () {};
}

function applyRemotePrefs(tpl) {
  try {
    const p = JSON.parse(localStorage.getItem(REMOTE_KEY) || 'null');
    if (!p) return;
    if (typeof p.gameName === 'string') tpl.gameName = p.gameName;
    if (p.crf) tpl.render.crf = p.crf;
    if (typeof p.notice === 'boolean') tpl.notice = { on: p.notice };
    if (typeof p.mute === 'boolean') tpl.render.mute = p.mute;
  } catch (e) { /* 기본값 */ }
}

// 이 PC에서 켠 사람에게만: 사내 다른 사람이 접속할 주소
async function showShareAddress() {
  if (REMOTE || window.VT_WEB) return;
  let share;
  try { share = await api('/api/share'); } catch (e) { return; }
  if (!share?.url || !share.host) return;
  const box = $('#share');
  if (!box) return;
  $('#shareUrl').textContent = share.url;
  $('#shareCopy').onclick = () => {
    navigator.clipboard?.writeText(share.url).then(() => toast('주소를 복사했어요'), () => toast(share.url, 5000));
  };
  box.hidden = false;
}

// ---------------------------------------------------------------- 인트로: 컬러 아스키 댄서

const BPM = 128;
const BEAT = 60 / BPM;
const DANCER = {
  rows: 140,          // 글자 줄 수 (많을수록 세밀)
  cw: 6, ch: 10,      // 글자 한 칸 크기 (px)
  ramp: '@%#&8BWMQ0OZmwqpdbkhao*+=~-:.',
  beat: BEAT,         // 음악 박자에 맞춰 착지
  decode: 2 * BEAT,   // 처음 두 박자 동안 글자가 모여들고, 그다음 박자부터 춤
};
const INTRO_SEC = 2 * BEAT + 6 * BEAT + 0.85;   // 반짝 2박 + 춤 6박 + 마무리 화음

// ---------------------------------------------------------------- 인트로 음악 (직접 만든 짧은 칩튠)

const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);

function playJingle(ac) {
  const t0 = ac.currentTime + 0.05;
  const e = BEAT / 2;
  const master = ac.createGain();
  master.gain.value = 0.22;
  master.connect(ac.destination);
  const note = (freq, at, len, type = 'square', vol = 0.3) => {
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t0 + at);
    g.gain.setValueAtTime(0, t0 + at);
    g.gain.linearRampToValueAtTime(vol, t0 + at + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + len);
    o.connect(g).connect(master);
    o.start(t0 + at);
    o.stop(t0 + at + len + 0.05);
  };
  const kick = (at) => {
    const o = ac.createOscillator(), g = ac.createGain();
    o.frequency.setValueAtTime(160, t0 + at);
    o.frequency.exponentialRampToValueAtTime(45, t0 + at + 0.13);
    g.gain.setValueAtTime(0.9, t0 + at);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + 0.18);
    o.connect(g).connect(master);
    o.start(t0 + at);
    o.stop(t0 + at + 0.2);
  };
  const noise = ac.createBuffer(1, ac.sampleRate * 0.1, ac.sampleRate);
  noise.getChannelData(0).forEach((_, i, d) => { d[i] = Math.random() * 2 - 1; });
  const hat = (at, vol = 0.16) => {
    const s = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
    s.buffer = noise;
    f.type = 'highpass';
    f.frequency.value = 7000;
    g.gain.setValueAtTime(vol, t0 + at);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + 0.05);
    s.connect(f).connect(g).connect(master);
    s.start(t0 + at);
    s.stop(t0 + at + 0.06);
  };
  // 0~2박: 반짝이는 아르페지오 (글자가 모여드는 동안)
  [84, 88, 91, 96, 100, 103, 108, 103].forEach((m, i) => note(midi(m), i * (2 * BEAT / 8), 0.28, 'triangle', 0.22));
  // 2~8박: 쿵짝 리듬 + 베이스 + 멜로디 (댄서가 쿵에 맞춰 착지)
  const g0 = 2 * BEAT;
  [48, 48, 45, 45, 41, 43].forEach((m, b) => {
    kick(g0 + b * BEAT);
    hat(g0 + b * BEAT + e);
    note(midi(m), g0 + b * BEAT, BEAT * 0.85, 'square', 0.13);
  });
  [76, 79, 81, 79, 76, 74, 72, 74, 76, 79, 84, 83].forEach((m, i) => note(midi(m), g0 + i * e, e * 0.9, 'square', 0.16));
  // 마무리: 도미솔도 화음 + 반짝
  const end = g0 + 6 * BEAT;
  kick(end);
  [72, 76, 79, 84].forEach((m, i) => note(midi(m), end + i * 0.03, 0.8, 'triangle', 0.2));
  note(midi(96), end + 0.12, 0.6, 'sine', 0.14);
  return { t0, stop: () => master.gain.setTargetAtTime(0, ac.currentTime, 0.08) };
}

function glyphMasks(chars, cw, ch) {
  const c = document.createElement('canvas');
  c.width = cw;
  c.height = ch;
  const g = c.getContext('2d', { willReadFrequently: true });
  g.font = `bold ${ch}px Consolas, "D2Coding", monospace`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  return [...chars].map((t) => {
    g.clearRect(0, 0, cw, ch);
    g.fillStyle = '#fff';
    g.fillText(t, cw / 2, ch / 2 + 0.5);
    const d = g.getImageData(0, 0, cw, ch).data;
    const m = new Uint8Array(cw * ch);
    for (let i = 0; i < m.length; i++) m[i] = d[i * 4 + 3];
    return m;
  });
}

async function makeDancer(canvas) {
  const img = new Image();
  img.src = 'assets/intro/dancer.png';
  try { await img.decode(); } catch (e) { return null; }
  const { rows, cw, ch, ramp } = DANCER;
  const cols = Math.round(rows * (img.naturalWidth / img.naturalHeight) * (ch / cw) * 1.25);
  canvas.width = cols * cw;
  canvas.height = rows * ch;
  const out = canvas.getContext('2d');
  const frame = out.createImageData(canvas.width, canvas.height);
  const small = document.createElement('canvas');
  small.width = cols;
  small.height = rows;
  const sg = small.getContext('2d', { willReadFrequently: true });
  const masks = glyphMasks(ramp, cw, ch);
  const reveal = new Float32Array(cols * rows).map((_, i) => (Math.floor(i / cols) / rows) * 0.55 + Math.random() * 0.35);
  const baseW = cols / 1.25, x0 = (cols - baseW) / 2;

  function draw(t) {
    const { beat, decode } = DANCER;
    const p = (t - decode) / beat;                                  // 정수 = 쿵 (착지)
    const hop = Math.abs(Math.sin(Math.PI * p));                  // 박자마다 통통
    const sway = Math.sin(Math.PI * p / 2);                         // 두 박자에 한 번 좌우로
    const dancing = Math.min(1, Math.max(0, (t - decode * 0.7) / (decode * 0.3)));   // 모여든 뒤 첫 박자에 맞춰 춤 시작
    sg.clearRect(0, 0, cols, rows);
    const lift = hop * 3.2 * dancing;
    const squash = 1 - 0.035 * (1 - hop) * dancing;
    for (let r = 0; r < rows; r++) {
      const v = r / rows;
      const sr = (r - (rows * (1 - squash)) + lift) / squash;      // 아래(발)를 기준으로 위아래로 늘었다 줄었다
      if (sr < 0 || sr >= rows) continue;
      const top = 1 - v;
      let dx = sway * 7 * top * top;                                // 위로 갈수록 크게 흔들림
      dx += Math.sin(2 * Math.PI * p - v * 4) * 1.6;               // 몸 물결
      if (v < 0.3) dx += Math.sin(2 * Math.PI * p + 0.8) * 1.8;    // 고개 까딱
      dx *= dancing;
      sg.drawImage(img, 0, (sr / rows) * img.naturalHeight, img.naturalWidth, img.naturalHeight / rows, x0 + dx, r, baseW, 1);
    }
    const px = sg.getImageData(0, 0, cols, rows).data;
    const buf = frame.data;
    buf.fill(0);
    const W = canvas.width;
    for (let cy = 0; cy < rows; cy++) {
      for (let cx = 0; cx < cols; cx++) {
        const i = (cy * cols + cx) * 4;
        if (px[i + 3] < 110) continue;
        let r = px[i], g = px[i + 1], b = px[i + 2];
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        let m, bgA = 0, br = 0, bgc = 0, bb = 0;
        const k = cy * cols + cx;
        if (t < reveal[k] + 0.05) {
          // 아직 자리를 찾는 중: 아무 글자나 분홍·보라로 반짝
          if (Math.random() < 0.55) continue;
          m = masks[(Math.random() * ramp.length) | 0];
          const q = Math.random();
          r = 255 - q * 80; g = 130 + q * 20; b = 200 + q * 55;
        } else {
          // 밝은 곳도 너무 성긴 글자는 쓰지 않는다 (램프의 앞 80%만)
          m = masks[Math.min(ramp.length - 1, Math.floor(Math.pow(lum / 256, 1.1) * ramp.length * 0.8))];
          // 칸 바탕은 원래 색을 옅게, 글자는 채도를 살려 진하게 (밝은 배경에서도 얼굴이 또렷하게)
          const gray = lum;
          r = gray + (r - gray) * 1.3; g = gray + (g - gray) * 1.3; b = gray + (b - gray) * 1.3;
          br = r; bgc = g; bb = b; bgA = 120;
          r *= 0.58; g *= 0.58; b *= 0.58;
        }
        const ox = cx * cw, oy = cy * ch;
        for (let yy = 0; yy < ch; yy++) {
          const row = (oy + yy) * W + ox;
          for (let xx = 0; xx < cw; xx++) {
            const a = m[yy * cw + xx];
            const o = (row + xx) * 4;
            if (bgA) {
              // 바탕색 위에 글자 색을 글자 모양(알파)만큼 섞는다
              const f = a / 255;
              buf[o] = br + (r - br) * f; buf[o + 1] = bgc + (g - bgc) * f; buf[o + 2] = bb + (b - bb) * f;
              buf[o + 3] = bgA + (255 - bgA) * f;
            } else if (a) {
              buf[o] = r; buf[o + 1] = g; buf[o + 2] = b; buf[o + 3] = a;
            }
          }
        }
      }
    }
    out.putImageData(frame, 0, 0);
  }
  return draw;
}

function sparkles() {
  const fx = $('#introFx');
  const marks = ['♥', '✦', '✧', '♡', '✦'];
  for (let i = 0; i < 22; i++) {
    const e = h('i', {}, marks[i % marks.length]);
    e.style.left = Math.random() * 100 + 'vw';
    e.style.fontSize = 14 + Math.random() * 26 + 'px';
    e.style.animationDuration = 3 + Math.random() * 3 + 's';
    e.style.animationDelay = Math.random() * 2.2 + 's';
    e.style.color = ['#ff8cc2', '#b18cff', '#ffb38a', '#8cb8ff'][i % 4];
    fx.append(e);
  }
}

// 소리를 켤 수 있는지 (앱 창은 자동 재생이 허용되어 바로 켜진다)
async function audioReady() {
  let ac;
  try { ac = new AudioContext(); } catch (e) { return null; }
  if (ac.state !== 'running') {
    ac.resume().catch(() => {});
    await sleep(120);
  }
  return ac;
}

// 열 때마다(새로고침 포함) 나온다. 확인용으로 ?intro=0 을 붙이면 건너뜀
async function playIntro() {
  const el = $('#intro');
  if (new URLSearchParams(location.search).get('intro') === '0') { el.remove(); document.body.classList.add('ready'); return; }
  sparkles();
  const canvas = h('canvas', { id: 'dancer' });
  el.insertBefore(canvas, $('.intro-card', el));
  const [draw, ac] = await Promise.all([makeDancer(canvas), audioReady()]);
  if (!draw) canvas.remove();
  else draw(0);
  // 브라우저가 소리를 막으면 한 번 눌러서 시작 (누르는 순간 음악과 춤이 같이 시작)
  if (ac && ac.state !== 'running') {
    el.classList.add('wait');
    await new Promise((res) => el.addEventListener('click', res, { once: true }));
    await ac.resume().catch(() => {});
    el.classList.remove('wait');
  }
  const music = ac && ac.state === 'running' ? playJingle(ac) : null;
  const t0 = performance.now();
  const now = () => (music ? ac.currentTime - music.t0 : (performance.now() - t0) / 1000);
  const total = draw ? INTRO_SEC : 3.2;
  await new Promise((res) => {
    let done = false;
    const end = () => {
      if (done) return;
      done = true;
      if (music) music.stop();
      el.classList.add('out');
      document.body.classList.add('ready');
      setTimeout(() => { el.remove(); if (ac) ac.close().catch(() => {}); res(); }, 600);
    };
    setTimeout(() => el.addEventListener('click', end), 50);
    window.addEventListener('keydown', end, { once: true });
    const tick = () => {
      if (done) return;
      const t = now();
      if (draw) draw(Math.max(0, t));
      if (t >= total) end(); else requestAnimationFrame(tick);
    };
    // 창이 가려져 requestAnimationFrame이 멈춰도 끝나도록
    setTimeout(end, total * 1000 + 900);
    requestAnimationFrame(tick);
  });
}

// ---------------------------------------------------------------- 영상·구간

const fmt = (s) => `${(Math.max(0, s) || 0).toFixed(1)}초`;

function duration() {
  return S.video.info?.duration || vid.duration || 0;
}

function trimVals() {
  const V = videoLayer();
  const dur = duration();
  const s = clamp(V.trimStart || 0, 0, dur);
  const e = V.trimDuration > 0 ? Math.min(dur, s + V.trimDuration) : dur;
  return { s, e, dur };
}

function setTrim(s, e) {
  const V = videoLayer();
  const dur = duration();
  if (!dur) return;
  s = clamp(s, 0, dur - MIN_TRIM);
  e = clamp(e, s + MIN_TRIM, dur);
  V.trimStart = Math.round(s * 10) / 10;
  V.trimDuration = e >= dur - 0.05 ? 0 : Math.round((e - V.trimStart) * 10) / 10;
  saveSoon();
  updateTrimUI();
}

function updateTrimUI() {
  const track = $('#track');
  const { s, e, dur } = trimVals();
  track.classList.toggle('off', !dur);
  if (!dur) {
    $('#trimInfo').textContent = '영상을 넣으면 고를 수 있어요';
    return;
  }
  const pct = (v) => (v / dur) * 100 + '%';
  $('#trackSel').style.left = pct(s);
  $('#trackSel').style.width = `calc(${pct(e)} - ${pct(s)})`;
  $('#hStart').style.left = pct(s);
  $('#hEnd').style.left = pct(e);
  $('#hStart span').textContent = fmt(s);
  $('#hEnd span').textContent = fmt(e);
  $('#trimInfo').textContent = `${fmt(s)} ~ ${fmt(e)} · 길이 ${fmt(e - s)}`;
  $('#playhead').style.left = pct(clamp(vid.currentTime || 0, 0, dur));
}

function bindTrim() {
  const track = $('#track');
  const timeAt = (e) => {
    const r = track.getBoundingClientRect();
    return clamp((e.clientX - r.left) / r.width, 0, 1) * duration();
  };
  let dragging = null;
  for (const hd of [$('#hStart'), $('#hEnd')]) {
    hd.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      dragging = hd.dataset.k;
      hd.setPointerCapture(e.pointerId);
      vid.pause();
    });
    hd.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const t = timeAt(e);
      const { s, e: end } = trimVals();
      if (dragging === 's') setTrim(t, end); else setTrim(s, t);
      vid.currentTime = dragging === 's' ? trimVals().s : Math.max(0, trimVals().e - 0.05);
    });
    hd.addEventListener('pointerup', () => { dragging = null; commitSoon(); });
  }
  track.addEventListener('pointerdown', (e) => {
    const { s, e: end } = trimVals();
    vid.currentTime = clamp(timeAt(e), s, end);
    updateTrimUI();
  });
  $('#btnTrimReset').addEventListener('click', () => setTrim(0, duration()));
  vid.addEventListener('timeupdate', () => {
    const { s, e, dur } = trimVals();
    if (dur && (vid.currentTime < s - 0.05 || vid.currentTime > e + 0.02)) vid.currentTime = s;
    updateTrimUI();
  });
  vid.addEventListener('loadedmetadata', () => { updateTrimUI(); vid.currentTime = trimVals().s; });
  // 영상이 준비되거나 못 열면 미리보기를 다시 그려 안내 칸과 영상을 바꿔 보여 준다
  vid.addEventListener('loadeddata', () => { S.video.error = ''; redraw(); });
  vid.addEventListener('error', () => {
    if (!vid.currentSrc) return;
    if (!S.video.error) S.video.error = '이 브라우저에서 미리보기가 안 되는 형식이에요';
    updateVideoInfo();
    redraw();
  });
  vid.addEventListener('play', updatePlay);
  vid.addEventListener('pause', updatePlay);
  $('#btnPlay').addEventListener('click', () => { if (!vid.currentSrc) return; if (vid.paused) vid.play().catch(() => {}); else vid.pause(); });
}

function updatePlay() {
  $('#btnPlay').innerHTML = vid.paused ? ICON.play : ICON.pause;
}

// 미리보기 소리: 브라우저는 사용자가 화면을 한 번 누르기 전에는 소리 나는 자동 재생을 막으므로,
// 처음엔 음소거로 재생하다가 아무 데나 누르거나 키를 누르면 (소리 켬 상태일 때) 소리를 켠다
let soundOn = true, userActed = false;
try { soundOn = localStorage.getItem('vt_sound') !== 'off'; } catch (e) { /* 기본 켬 */ }

function applySound() {
  vid.muted = !(soundOn && userActed);
  const b = $('#btnSound');
  b.innerHTML = soundOn ? ICON.sound : ICON.mute;
  b.classList.toggle('off', !soundOn);
  b.title = soundOn ? '미리보기 소리 끄기 (M)' : '미리보기 소리 켜기 (M)';
}

function bindSound() {
  const acted = () => { if (!userActed) { userActed = true; applySound(); } };
  window.addEventListener('pointerdown', acted, true);
  window.addEventListener('keydown', acted, true);
  window.addEventListener('drop', acted, true);
  $('#btnSound').addEventListener('click', () => {
    soundOn = !soundOn;
    try { localStorage.setItem('vt_sound', soundOn ? 'on' : 'off'); } catch (e) { /* 무시 */ }
    applySound();
  });
  window.addEventListener('keydown', (e) => {
    if ((e.key === 'm' || e.key === 'M') && !e.target.matches('input, textarea')) $('#btnSound').click();
  });
  applySound();
}

// app.js가 영상 상태가 바뀔 때 부르는 함수를 이 화면에 맞게 바꾼다
updateVideoInfo = function () {
  const v = S.video;
  const drop = $('#drop');
  drop.classList.toggle('has', !!v.name);
  if (!v.name) return;
  $('#dropText').textContent = v.name;
  const sub = [];
  if (v.info) sub.push(`${v.info.width}×${v.info.height}`, fmt(v.info.duration));
  if (v.uploading) sub.push(`준비 중 ${Math.round(v.progress * 100)}%`);
  if (v.preparing) sub.push(`${v.prepLabel || '미리보기 준비 중'} ${Math.round((v.prepProgress || 0) * 100)}%`);
  if (v.error) sub.push(v.error);
  sub.push('눌러서 다른 영상으로 바꾸기');
  $('#dropSub').textContent = sub.join(' · ');
  updateTrimUI();
};

// ---------------------------------------------------------------- 만들기

setRenderUI = function (state, progress = 0, info = {}) {
  const label = $('#makeLabel'), fill = $('#makeFill');
  $('#renderError').hidden = state !== 'error';
  fill.style.width = state === 'running' ? Math.round(progress * 100) + '%' : '0';
  if (state === 'waiting') label.textContent = '영상 준비가 끝나면 시작해요…';
  else if (state === 'running') label.textContent = `만드는 중… ${Math.round(progress * 100)}%`;
  else label.textContent = '영상 만들기 ✨';
  if (state === 'running') $('#result').hidden = true;
  if (state === 'done') {
    $('#result').hidden = false;
    $('#resultFile').textContent = info.output;
    $('#btnView').onclick = () => showResult(info.output, info.url);
    if (info.url) {
      // 웹 버전: 파일은 다운로드 폴더로
      $('#btnFolder').textContent = '다시 받기';
      $('#btnFolder').onclick = () => h('a', { href: info.url, download: info.output }).click();
    } else if (REMOTE) {
      // 사내 다른 PC에서 접속: 만든 영상은 내 PC에 있으니 내려받기로
      const href = '/output/' + encodeURIComponent(info.output);
      $('#btnFolder').textContent = '내려받기';
      $('#btnFolder').onclick = () => h('a', { href, download: info.output }).click();
      h('a', { href, download: info.output }).click();
    } else {
      $('#btnFolder').onclick = () => api('/api/open-output?file=' + encodeURIComponent(info.output), {});
    }
  }
  if (state === 'error') $('#renderError').textContent = '영상을 만들지 못했어요: ' + String(info.error || '').split('\n').filter(Boolean).slice(-1)[0];
  if (state === 'cancelled') label.textContent = '영상 만들기 ✨';
};

function buildQuality() {
  const box = $('#quality');
  box.innerHTML = '';
  const cur = S.tpl.render.crf;
  for (const q of QUALITY) {
    box.append(h('button', {
      class: q.crf === cur ? 'on' : '',
      onclick: () => { S.tpl.render.crf = q.crf; S.tpl.render.preset = 'medium'; saveSoon(); buildQuality(); },
    }, h('b', {}, q.name), h('small', {}, q.note)));
  }
}

// ---------------------------------------------------------------- 시작

// 미리보기: 문구는 고른 구간의 처음 3초 동안만 보인다 (영상이 없으면 위치를 보여 주려고 계속 표시)
function noticeLoop() {
  const nc = $('#noticeCv');
  if (nc) {
    const rel = vid.currentSrc && duration() ? (vid.currentTime || 0) - trimVals().s : 0;
    nc.style.opacity = S.tpl?.notice?.on ? noticeAlpha(rel) : 0;
  }
  requestAnimationFrame(noticeLoop);
}

function bindSimple() {
  $('#noticeOn').addEventListener('change', (e) => { S.tpl.notice = { on: e.target.checked }; changed(); });
  $('#muteOut').addEventListener('change', (e) => { S.tpl.render.mute = e.target.checked; saveSoon(); });
  $('#gameName').addEventListener('input', (e) => { S.tpl.gameName = e.target.value; changed(); });
  $('#drop').addEventListener('click', () => $('#fileVideo').click());
  $('#fileVideo').addEventListener('change', (e) => { if (e.target.files[0]) loadVideoFile(e.target.files[0]); e.target.value = ''; });
  $('#btnRender').addEventListener('click', () => {
    if (!S.video.id && !S.video.uploading) { toast('먼저 영상을 넣어 주세요'); return; }
    startRender();
  });
  let depth = 0;
  window.addEventListener('dragenter', (e) => { e.preventDefault(); depth++; document.body.classList.add('dragging'); });
  window.addEventListener('dragleave', () => { if (--depth <= 0) { depth = 0; document.body.classList.remove('dragging'); } });
  window.addEventListener('dragover', (e) => e.preventDefault());
  window.addEventListener('drop', (e) => {
    e.preventDefault();
    depth = 0;
    document.body.classList.remove('dragging');
    const f = [...e.dataTransfer.files].find((x) => x.type.startsWith('video/') || /\.(mp4|mov|webm|mkv|avi|m4v)$/i.test(x.name));
    if (f) loadVideoFile(f);
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === ' ' && !e.target.matches('input, textarea')) { e.preventDefault(); $('#btnPlay').click(); }
  });
  $('#resultClose').addEventListener('click', () => { $('#resultVid').pause(); $('#resultDlg').close(); });
  $('#resultDlg').addEventListener('close', () => $('#resultVid').pause());
  bindTrim();
  bindSound();
  new ResizeObserver(fitStage).observe($('#stageArea'));
}

async function simpleInit() {
  const intro = playIntro();
  bindSimple();
  const tpl = await api('/api/template');
  lastSynced = JSON.stringify(tpl);
  if (REMOTE) applyRemotePrefs(tpl);
  await setTemplate(tpl, false);
  showShareAddress();
  pushHistory();
  loadFaces();
  buildQuality();
  $('#noticeOn').checked = !!S.tpl.notice?.on;
  $('#muteOut').checked = !!S.tpl.render.mute;
  noticeLoop();
  updatePlay();
  updateVideoInfo();
  updateTrimUI();
  window.addEventListener('focus', syncFromServer);
  await intro;
  fitStage();
}

simpleInit().catch((e) => toast('시작하지 못했어요: ' + e.message, 8000));
