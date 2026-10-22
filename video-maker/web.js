'use strict';

// 웹 버전(GitHub Pages, 서버 없음)용으로 바꿔 끼우는 부분.
// - 템플릿·폰트 목록은 같은 폴더의 정적 파일, 게임 이름·화질은 브라우저 저장소에 기억
// - 영상은 업로드하지 않고 이 PC 안에서 바로 읽는다
// - 영상 만들기: 고른 구간을 실제 속도로 재생하며 매 장면을 1920×1080에 합성해
//   브라우저 내장 H.264 인코더(WebCodecs)로 인코딩하고 mp4-muxer로 MP4를 만든다 (소리는 AAC)
// app.js·simple.js 사이에 불러온다.

window.VT_WEB = true;
const WEB_KEY = 'vt_web_prefs_v1';
const WEB_FPS = 30;
const WEB_BITRATE = { 23: 6e6, 18: 10e6, 14: 16e6 };   // 화질(CRF 값)별 비트레이트 (영상 자리가 1208×680이라 이 정도면 충분)
const LONG_SEC = 150;   // 이보다 긴 구간은 메모리에 쌓지 않고 고른 파일에 바로 쓴다

api = async function (url, body) {
  if (url === '/api/template' && body === undefined) {
    const tpl = await (await fetch('template.json', { cache: 'no-cache' })).json();
    try {
      const p = JSON.parse(localStorage.getItem(WEB_KEY) || 'null');
      if (p) {
        if (typeof p.gameName === 'string') tpl.gameName = p.gameName;
        if (p.crf) tpl.render.crf = p.crf;
        if (typeof p.notice === 'boolean') tpl.notice = { on: p.notice };
        if (typeof p.mute === 'boolean') tpl.render.mute = p.mute;
        if (typeof p.lang === 'string') tpl.lang = p.lang;
        if (typeof p.rating === 'boolean') tpl.rating = { on: p.rating };
      }
    } catch (e) { /* 저장소를 못 쓰면 기본값 */ }
    tpl.lastVideo = null;
    return tpl;
  }
  if (url.startsWith('/api/fonts')) return (await fetch('fonts.json')).json();
  throw new Error('웹 버전에서는 쓰지 않는 기능입니다');
};

persist = function (body) {
  try {
    const t = JSON.parse(body);
    localStorage.setItem(WEB_KEY, JSON.stringify({ gameName: t.gameName, crf: t.render?.crf, notice: t.notice?.on, mute: !!t.render?.mute, lang: t.lang, rating: t.rating?.on }));
  } catch (e) { /* 저장소를 못 써도 계속 */ }
};

syncFromServer = async function () {};
restoreVideo = async function () {};

loadVideoFile = function (file) {
  if (S.video.url) URL.revokeObjectURL(S.video.url);
  if ($('#pcHelp')) $('#pcHelp').hidden = true;
  const url = URL.createObjectURL(file);
  S.video = { id: 'local', name: file.name, info: null, uploading: true, progress: 0, url, error: '', file };
  const V = videoLayer();
  V.trimStart = 0;
  V.trimDuration = 0;
  vid.src = url;
  vid.play().catch(() => {});
  updateVideoInfo();
  redraw();
  vid.addEventListener('loadedmetadata', () => {
    S.video.info = { duration: vid.duration, width: vid.videoWidth, height: vid.videoHeight, fpsValue: WEB_FPS, audio: true };
    S.video.uploading = false;
    // 소리·길이만 읽히고 화면은 못 그리는 형식 (HEVC 4:4:4·ProRes .mov 등, PC·브라우저마다 다르다)
    // → 브라우저 안에서 H.264로 바꿔서 쓴다
    const cannot = () => {
      if (S.video.url !== url || S.video.preparing) return;
      convertInBrowser(file, url);
    };
    if (!vid.videoWidth) cannot();
    else {
      // 크기는 읽혀도 실제 장면이 하나도 안 나오면 못 그리는 것
      let got = false;
      vid.requestVideoFrameCallback(() => { got = true; });
      setTimeout(() => { if (!got && !vid.paused) cannot(); }, 2500);
    }
    updateVideoInfo();
  }, { once: true });
  vid.addEventListener('error', () => {
    S.video.uploading = false;
    if (S.video.url === url) convertInBrowser(file, url);
  }, { once: true });
};

// ---------------------------------------------------------------- 브라우저 안 변환 (ffmpeg.wasm)

const FF_CORE = 'vendor/ffmpeg-core/ffmpeg-core.js';
const FF_WASM = 'vendor/ffmpeg-core/ffmpeg-core.wasm';
let ffmpegReady = null;

// 변환 도구(약 32MB)를 한 번만 내려받는다. onProgress(0~1)
function getFFmpeg(onProgress) {
  if (!ffmpegReady) {
    ffmpegReady = (async () => {
      const res = await fetch(FF_WASM);
      if (!res.ok) throw new Error('변환 도구를 내려받지 못했어요');
      const total = +res.headers.get('content-length') || 32e6;
      const reader = res.body.getReader();
      const parts = [];
      let got = 0;
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        parts.push(value);
        got += value.length;
        onProgress(Math.min(0.99, got / total));
      }
      const wasmURL = URL.createObjectURL(new Blob(parts, { type: 'application/wasm' }));
      const ff = new FFmpegWASM.FFmpeg();
      await ff.load({ coreURL: new URL(FF_CORE, location.href).href, wasmURL });
      return ff;
    })().catch((e) => { ffmpegReady = null; throw e; });
  }
  return ffmpegReady;
}

async function convertInBrowser(file, url) {
  const v = S.video;
  if (v.url !== url) return;
  vid.pause();
  vid.removeAttribute('src');
  vid.load();
  const show = (label, p) => {
    if (S.video !== v) return;
    v.prepLabel = label;
    v.prepProgress = p;
    updateVideoInfo();
    redraw();
  };
  // 브라우저 안 변환은 원본 길이의 5배쯤 걸리고 파일 전체를 메모리에 올린다
  if (file.size > 1.6e9) {
    Object.assign(v, { preparing: false, error: '영상이 너무 커서 브라우저에서 바꿀 수 없어요' });
    showPcHelp();
    updateVideoInfo();
    redraw();
    return;
  }
  const estMin = Math.ceil(((v.info?.duration || 0) * 5) / 60);
  const convLabel = '브라우저에서 볼 수 있게 바꾸는 중' + (estMin >= 2 ? ` (약 ${estMin}분)` : '');
  Object.assign(v, { preparing: true, error: '' });
  show('변환 도구 준비 중 (처음 한 번)', 0);
  let ff;
  try {
    ff = await getFFmpeg((p) => show('변환 도구 내려받는 중 (처음 한 번)', p));
    if (S.video !== v) return;
    show(convLabel, 0);
    const onProg = ({ progress }) => show(convLabel, clamp(progress || 0, 0, 0.99));
    ff.on('progress', onProg);
    const inName = 'in' + ((file.name.match(/\.[A-Za-z0-9]+$/) || ['.mov'])[0]).toLowerCase();
    await ff.writeFile(inName, new Uint8Array(await file.arrayBuffer()));
    // 영상 자리가 1208×680이라 720p면 충분하다 (해독이 대부분의 시간이라 크기를 줄여도 크게 빨라지진 않음)
    const code = await ff.exec(['-i', inName, '-map', '0:v:0', '-map', '0:a:0?', '-vf', "scale=-2:'min(720,ih)',format=yuv420p",
      '-c:v', 'libx264', '-preset', 'ultrafast', '-crf', '18', '-c:a', 'aac', '-b:a', '160k', '-movflags', '+faststart', 'out.mp4']);
    ff.off('progress', onProg);
    await ff.deleteFile(inName).catch(() => {});
    if (code !== 0) throw new Error('변환하지 못했어요');
    const data = await ff.readFile('out.mp4');
    await ff.deleteFile('out.mp4').catch(() => {});
    if (S.video !== v) return;
    const nf = new File([data], file.name.replace(/\.[^.]+$/, '') + '.mp4', { type: 'video/mp4' });
    URL.revokeObjectURL(url);
    const nurl = URL.createObjectURL(nf);
    Object.assign(v, { url: nurl, file: nf, preparing: false, converted: true });
    vid.addEventListener('loadedmetadata', () => {
      v.info = { duration: vid.duration, width: vid.videoWidth, height: vid.videoHeight, fpsValue: WEB_FPS, audio: true };
      updateVideoInfo();
    }, { once: true });
    vid.src = nurl;
    vid.play().catch(() => {});
    updateVideoInfo();
    redraw();
  } catch (e) {
    if (S.video !== v) return;
    // 메모리가 모자라는 등 변환이 안 되면 다음 변환을 위해 도구를 다시 띄운다
    try { ff?.terminate(); } catch (er) { /* 무시 */ }
    ffmpegReady = null;
    Object.assign(v, { preparing: false, error: '이 영상은 브라우저에서 바꾸지 못했어요' });
    showPcHelp();
    updateVideoInfo();
    redraw();
  }
}

// 브라우저로는 안 되는 영상: 사내 PC 버전 주소로 안내 (share.json에 주소가 있을 때)
async function showPcHelp() {
  const box = $('#pcHelp');
  if (!box) return;
  let share = null;
  try { share = await (await fetch('share.json', { cache: 'no-cache' })).json(); } catch (e) { /* 없음 */ }
  $('#pcHelpLink').hidden = !share?.url;
  if (share?.url) {
    $('#pcHelpLink').href = share.url;
    $('#pcHelpLink').textContent = share.url;
  }
  box.hidden = false;
}

showResult = function (name, url) {
  const dlg = $('#resultDlg');
  $('#resultVid').src = url || S.lastResult?.url || '';
  $('#resultName').textContent = name;
  $('#resultReveal').textContent = '다시 받기';
  $('#resultReveal').onclick = () => h('a', { href: url || S.lastResult?.url, download: name }).click();
  dlg.showModal();
  vid.pause();
  $('#resultVid').play().catch(() => {});
};

// ---------------------------------------------------------------- 브라우저에서 영상 만들기

function webStamp() {
  const d = new Date(), p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}

function webSafeName(s) {
  return (String(s || '').replace(/[\\/:*?"<>|\r\n\t]+/g, ' ').trim().slice(0, 60)) || 'video';
}

// 영상 자리에 맞춤 방식대로 그린다 (테두리·둥근 모서리는 위에 덮는 그림이 처리)
function drawVideoFit(g, src, V) {
  const vw = src.videoWidth || src.displayWidth, vh = src.videoHeight || src.displayHeight;   // 영상 요소 또는 VideoFrame
  if (!vw || !vh) return;
  if (V.fit === 'stretch') { g.drawImage(src, V.x, V.y, V.w, V.h); return; }
  if (V.fit === 'contain') {
    g.fillStyle = V.bgColor || '#000';
    g.fillRect(V.x, V.y, V.w, V.h);
    const k = Math.min(V.w / vw, V.h / vh), w = vw * k, hh = vh * k;
    g.drawImage(src, V.x + (V.w - w) / 2, V.y + (V.h - hh) / 2, w, hh);
    return;
  }
  const k = Math.max(V.w / vw, V.h / vh), sw = V.w / k, sh = V.h / k;
  g.drawImage(src, (vw - sw) / 2, (vh - sh) / 2, sw, sh, V.x, V.y, V.w, V.h);
}

// 파일에서 소리만 꺼내 고른 구간을 자른다 (소리가 없으면 null)
async function webAudio(file, s, e) {
  try {
    const ctx = new OfflineAudioContext(2, 1, 48000);
    const ab = await ctx.decodeAudioData(await file.arrayBuffer());
    const sr = ab.sampleRate, ch = Math.min(2, ab.numberOfChannels);
    const from = Math.floor(s * sr), to = Math.min(ab.length, Math.floor(e * sr));
    if (to <= from) return null;
    return { sr, ch, chans: [...Array(ch)].map((_, i) => ab.getChannelData(i).subarray(from, to)), n: to - from };
  } catch (err) {
    return null;
  }
}

async function pickConfig(Enc, list) {
  for (const c of list) {
    try { if ((await Enc.isConfigSupported(c)).supported) return c; } catch (e) { /* 다음 */ }
  }
  return null;
}

let renderSrc = null;   // 만드는 동안 페이지에 붙여 두는 재생용 영상

startRender = async function () {
  if (S.rendering) return;
  if (!S.video.file) { toast('먼저 영상을 넣어 주세요'); return; }
  if (S.video.preparing) { toast('영상을 바꾸는 중이에요. 끝나면 만들 수 있어요'); return; }
  if (S.video.error) { toast(S.video.error, 5000); return; }
  if (!('VideoEncoder' in window) || !window.Mp4Muxer) {
    setRenderUI('error', 0, { error: '이 브라우저는 영상 만들기를 지원하지 않아요. 크롬이나 엣지 최신 버전으로 열어 주세요.' });
    return;
  }
  // 긴 영상: 만든 영상이 1GB를 넘을 수 있어 메모리에 쌓지 않고, 저장할 파일을 먼저 골라 거기에 바로 쓴다
  // (버튼을 누른 직후여야 저장 창을 띄울 수 있어서 맨 먼저 묻는다)
  const V0 = videoLayer(), dur0 = S.video.info?.duration || vid.duration || 0;
  const len0 = V0.trimDuration > 0 ? Math.min(V0.trimDuration, dur0 - (V0.trimStart || 0)) : dur0 - (V0.trimStart || 0);
  let handle = null;
  if (len0 > LONG_SEC && window.showSaveFilePicker) {
    try {
      handle = await window.showSaveFilePicker({
        suggestedName: `${webSafeName(S.tpl.gameName)}_${webStamp()}.mp4`,
        types: [{ description: 'MP4 영상', accept: { 'video/mp4': ['.mp4'] } }],
      });
    } catch (err) {
      if (err.name === 'AbortError') return;   // 저장할 곳을 고르지 않음
      handle = null;
    }
  }
  S.rendering = true;
  $('#btnRender').disabled = true;
  setRenderUI('running', 0);
  let encErr = null, writable = null, onVis = null;
  try {
    await S.facesReady;
    S.tempFont = null;
    const want = textLayers().filter((l) => l.visible && !l.useImage).map((l) => resolveFace(l.font));
    want.push(...S.faces);   // 버튼·한자 대체 글꼴까지
    await Promise.all(want.filter(Boolean).map(ensureFont));
    const W = S.tpl.canvas.w, H = S.tpl.canvas.h, V = videoLayer();
    const over = document.createElement('canvas');
    over.width = W; over.height = H;
    drawOver(over.getContext('2d'));
    const notice = document.createElement('canvas');
    notice.width = W; notice.height = H;
    const hasNotice = drawNotice(notice.getContext('2d'));
    const out = document.createElement('canvas');
    out.width = W; out.height = H;
    const g = out.getContext('2d');
    const withNotice = document.createElement('canvas');
    withNotice.width = W; withNotice.height = H;
    const wg = withNotice.getContext('2d');

    const src = document.createElement('video');
    src.muted = true;
    src.playsInline = true;
    src.preload = 'auto';
    // 페이지에 붙여 둬야(보이지 않게) 크롬이 장면 신호를 계속 보낸다 — 떼어 두면 몇 초 뒤 신호가 끊긴다
    src.style.cssText = 'position:fixed;left:0;top:0;width:2px;height:2px;opacity:0.01;pointer-events:none;z-index:-1';
    document.body.append(src);
    renderSrc = src;
    src.src = S.video.url;
    await new Promise((res, rej) => { src.onloadeddata = res; src.onerror = () => rej(new Error('영상을 읽지 못했어요')); });
    const dur = src.duration;
    const s = clamp(V.trimStart || 0, 0, dur);
    const e = V.trimDuration > 0 ? Math.min(dur, s + V.trimDuration) : dur;
    const total = Math.max(1, Math.round((e - s) * WEB_FPS));

    const bitrate = WEB_BITRATE[S.tpl.render.crf] || 16e6;
    const vcfg = await pickConfig(VideoEncoder, ['avc1.640028', 'avc1.4d0028', 'avc1.640033', 'avc1.42e032']
      .map((codec) => ({ codec, width: W, height: H, bitrate, framerate: WEB_FPS, latencyMode: 'quality' })));
    if (!vcfg) throw new Error('이 PC의 브라우저에서 H.264 인코딩을 쓸 수 없어요');
    const audio = S.tpl.render.mute ? null : await webAudio(S.video.file, s, e);
    const acfg = audio && 'AudioEncoder' in window ? await pickConfig(AudioEncoder, ['mp4a.40.2', 'opus']
      .map((codec) => ({ codec, sampleRate: audio.sr, numberOfChannels: audio.ch, bitrate: 192000 }))) : null;

    if (handle) writable = await handle.createWritable();
    const muxer = new Mp4Muxer.Muxer({
      target: writable ? new Mp4Muxer.FileSystemWritableFileStreamTarget(writable) : new Mp4Muxer.ArrayBufferTarget(),
      video: { codec: 'avc', width: W, height: H },
      audio: acfg ? { codec: acfg.codec === 'opus' ? 'opus' : 'aac', sampleRate: acfg.sampleRate, numberOfChannels: acfg.numberOfChannels } : undefined,
      fastStart: writable ? false : 'in-memory',
      firstTimestampBehavior: 'offset',
    });
    // 영상 인코더: 브라우저는 노는(탭이 가려진 동안 등) 인코더를 회수해 가므로(「Codec reclaimed」),
    // 회수되거나 닫혀 있으면 새로 만들어 이어 간다. 새 인코더의 첫 장면은 키프레임으로.
    let venc = null, needKey = true;
    const isReclaim = (er) => er && (er.name === 'QuotaExceededError' || /reclaim/i.test(er.message || ''));
    const makeEncoder = () => {
      const enc = new VideoEncoder({
        output: (c, m) => muxer.addVideoChunk(c, m),
        error: (er) => { if (!isReclaim(er)) encErr = er; },   // 회수는 다음 장면에서 새 인코더로 이어 감
      });
      enc.configure(vcfg);
      needKey = true;
      return enc;
    };
    const encoder = () => {
      if (!venc || venc.state === 'closed') venc = makeEncoder();
      return venc;
    };
    // 지금 인코더에 쌓인 것을 내보내고 닫는다 (탭이 가려질 때 — 회수되기 전에 안전하게)
    const parkEncoder = () => {
      const old = venc;
      venc = null;
      if (old && old.state === 'configured') old.flush().then(() => old.close(), () => {});
    };

    // 소리: 1024 샘플씩 AAC로
    if (acfg) {
      const aenc = new AudioEncoder({ output: (c, m) => muxer.addAudioChunk(c, m), error: (er) => { encErr = er; } });
      aenc.configure(acfg);
      for (let i = 0; i < audio.n; i += 1024) {
        const n = Math.min(1024, audio.n - i);
        const data = new Float32Array(n * audio.ch);
        audio.chans.forEach((c, k) => data.set(c.subarray(i, i + n), k * n));
        const ad = new AudioData({ format: 'f32-planar', sampleRate: audio.sr, numberOfFrames: n, numberOfChannels: audio.ch, timestamp: Math.round((i / audio.sr) * 1e6), data });
        aenc.encode(ad);
        ad.close();
      }
      await aenc.flush();
      aenc.close();
    }

    // 화면: 고른 구간을 실제 속도로 재생하며, 30fps 칸마다 그때의 장면을 합성해 넣는다
    const compose = (pic = src) => {
      g.fillStyle = '#000';
      g.fillRect(0, 0, W, H);
      drawVideoFit(g, pic, V);
      g.drawImage(over, 0, 0);
    };
    let k = 0;
    const emit = () => {
      // 문구는 칸마다 그 시각의 진하기로 얹는다 (영상 시작 후 3초, 마지막 0.3초에 사라짐)
      const a = hasNotice ? noticeAlpha(k / WEB_FPS) : 0;
      let fsrc = out;
      if (a > 0) {
        fsrc = withNotice;
        wg.drawImage(out, 0, 0);
        wg.globalAlpha = a;
        wg.drawImage(notice, 0, 0);
        wg.globalAlpha = 1;
      }
      const f = new VideoFrame(fsrc, { timestamp: Math.round((k / WEB_FPS) * 1e6), duration: Math.round(1e6 / WEB_FPS) });
      const enc = encoder();
      enc.encode(f, { keyFrame: needKey || k % (WEB_FPS * 2) === 0 });
      needKey = false;
      f.close();
      k++;
    };
    src.currentTime = s;
    await new Promise((res) => { src.onseeked = res; });
    compose();
    await new Promise((res, rej) => {
      // 장면 신호(requestVideoFrameCallback)가 오면 그 장면의 정확한 시각으로 찍는다.
      // 신호가 끊기면(0.3초 넘게 없으면) 그동안만 타이머가 지금 재생 위치로 대신 찍는다.
      // 끝까지 재생되면 신호가 더 오지 않으므로 끝남 신호로도 마치고, 끝난 뒤 온 신호는 무시한다.
      let finished = false, cb = 0, waitEnc = false;
      let lastFrame = performance.now(), rvfcSeen = false;   // 장면 신호가 한 번도 안 왔으면 처음부터 타이머로 찍는다
      const finish = () => {
        if (finished) return;
        finished = true;
        src.cancelVideoFrameCallback(cb);
        clearInterval(guard);
        res();
      };
      const resume = () => {
        if (finished || waitEnc || document.hidden) return;
        lastFrame = performance.now();
        src.play().catch(() => {});
      };
      // 다른 탭으로 가면 장면이 안 들어오므로 멈췄다가, 돌아오면 이어서 만든다
      onVis = () => {
        if (document.hidden) {
          src.pause();
          parkEncoder();
          setRenderUI('running', (k / total) * 0.97, { note: '이 탭으로 돌아오면 이어서 만들어요' });
        } else resume();
      };
      document.addEventListener('visibilitychange', onVis);
      src.onended = finish;
      const step = (t, pic) => {
        if (finished) return;
        if (encErr) { finished = true; clearInterval(guard); rej(encErr); return; }
        // 이 장면보다 앞선 칸들은 직전 장면으로 채우고(그 시각에 실제로 보이던 장면), 그다음 새 장면을 그려 둔다
        while (k < total && s + k / WEB_FPS < t - 0.001) emit();
        compose(pic);
        const left = Math.max(0, e - t);
        setRenderUI('running', (k / total) * 0.97, { note: left >= 60 ? `약 ${Math.ceil(left / 60)}분 남음` : '' });
        if (k >= total || t >= e - 0.001 || src.ended) { finish(); return; }
        // 인코더가 밀리면(이 PC가 실시간보다 느리면) 재생을 잠깐 멈추고 따라잡게 한다 — 메모리가 끝없이 쌓이지 않게
        const enc = venc;
        if (enc && enc.state === 'configured' && enc.encodeQueueSize > 30 && !waitEnc) {
          waitEnc = true;
          src.pause();
          const drain = () => {
            if (enc.state === 'configured' && enc.encodeQueueSize > 8 && !encErr) return;
            enc.removeEventListener('dequeue', drain);
            clearTimeout(drainGuard);
            waitEnc = false;
            resume();
          };
          // 그사이 인코더가 회수되면 dequeue가 안 오므로 시간으로도 풀어 준다
          const drainGuard = setTimeout(drain, 3000);
          enc.addEventListener('dequeue', drain);
        }
      };
      const onFrame = (now, meta) => {
        if (finished) return;
        lastFrame = performance.now();
        rvfcSeen = true;
        step(meta.mediaTime);
        if (!finished) cb = src.requestVideoFrameCallback(onFrame);
      };
      const guard = setInterval(() => {
        if (finished || waitEnc || src.paused || (rvfcSeen && performance.now() - lastFrame < 300)) return;
        // 화면에 그려지지 않는 동안은 지금 장면을 VideoFrame으로 뽑아 그 장면의 정확한 시각으로 찍는다
        let vf = null;
        try { vf = new VideoFrame(src); } catch (er) { vf = null; }
        if (vf) { step(vf.timestamp / 1e6, vf); vf.close(); } else step(src.currentTime);
      }, 15);
      cb = src.requestVideoFrameCallback(onFrame);
      if (document.hidden) onVis(); else src.play().catch(rej);
    });
    src.pause();
    while (k < total) emit();   // 끝에 모자란 칸은 마지막 장면으로
    const last = encoder();
    await last.flush();
    last.close();
    if (encErr) throw encErr;
    muxer.finalize();
    if (S.lastResult?.url) URL.revokeObjectURL(S.lastResult.url);
    if (writable) {
      // 고른 파일에 이미 다 써졌다
      await writable.close();
      writable = null;
      const file = await handle.getFile();
      S.lastResult = { url: URL.createObjectURL(file), name: handle.name };
      setRenderUI('done', 1, { output: handle.name, url: S.lastResult.url, saved: true });
      toast('저장했어요: ' + handle.name, 4000);
    } else {
      const blob = new Blob([muxer.target.buffer], { type: 'video/mp4' });
      const output = `${webSafeName(S.tpl.gameName)}_${webStamp()}.mp4`;
      S.lastResult = { url: URL.createObjectURL(blob), name: output };
      h('a', { href: S.lastResult.url, download: output }).click();   // 다운로드 폴더에 저장
      setRenderUI('done', 1, { output, url: S.lastResult.url });
      toast('다운로드 폴더에 저장했어요: ' + output, 4000);
    }
  } catch (err) {
    const msg = /allocation|memory|Array buffer/i.test(String(err))
      ? '영상이 너무 길어 메모리가 모자라요. 크롬·엣지 최신 버전에서 다시 하거나 구간을 나눠 주세요'
      : err.message || String(err);
    setRenderUI('error', 0, { error: msg });
    if (writable) { try { await writable.abort(); } catch (er) { /* 무시 */ } }
  } finally {
    if (onVis) document.removeEventListener('visibilitychange', onVis);
    if (renderSrc) { renderSrc.pause(); renderSrc.removeAttribute('src'); renderSrc.load(); renderSrc.remove(); renderSrc = null; }
    S.rendering = false;
    $('#btnRender').disabled = false;
  }
};
