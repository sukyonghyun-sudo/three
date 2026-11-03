// 책상 라디오 — 홍수연 책상 위에만 하나. 누구든 누르면 그 사람 화면(기기)에서만 들린다 (남에게 소리가 가지 않음)
// - 라디오 방송: KBS·SBS 는 방송사 주소를 그때그때 받아 오고(열쇠가 바뀌므로), 나머지는 고정 주소 (모두 HLS — hls.js 로 재생)
// - 24시간 음악: 광고 없는 해외 인터넷 음악 방송 (mp3/aac 그대로)
// - 소리만 받으므로 앱을 내리거나 다른 창을 봐도 계속 나온다 (안드로이드·PC). 잠금 화면에서 멈추고 켜기 (Media Session)
// - MBC 는 다른 사이트에서 트는 걸 막아 둬서(주소 받는 곳이 허락 안 함) 넣지 못함
// ctx: { THREE, scene, renderer, box, cyl, DH, stage, seat: () => 홍수연 seat | null }
window.OfficeRadio = function (ctx) {
  const { THREE } = ctx;
  const KBS = (code) => async () => (await (await fetch(`https://cfpwwwapi.kbs.co.kr/api/v1/landing/live/channel_code/${code}`)).json()).channel_item[0].service_url;
  const SBS = (pc, ch) => async () => (await (await fetch(`https://apis.sbs.co.kr/play-api/1.0/livestream/${pc}/${ch}?protocol=hls&ssl=Y`)).text()).trim();
  const CH = {
    radio: [
      ["kbs1r", "KBS 1라디오", KBS(21)], ["kbs2r", "KBS 해피FM", KBS(22)], ["kbs1fm", "KBS 클래식FM", KBS(24)], ["kbs2fm", "KBS 쿨FM", KBS(25)],
      ["sbspw", "SBS 파워FM", SBS("powerpc", "powerfm")], ["sbslv", "SBS 러브FM", SBS("lovepc", "lovefm")],
      ["cbsm", "CBS 음악FM", "https://m-aac.cbs.co.kr/mweb_cbs939/_definst_/cbs939.stream/playlist.m3u8"],
      ["cbss", "CBS 표준FM", "https://m-aac.cbs.co.kr/mweb_cbs981/_definst_/cbs981.stream/playlist.m3u8"],
      ["ytn", "YTN 라디오", "https://radiolive.ytn.co.kr/radio/_definst_/20211118_fmlive/playlist.m3u8"],
      ["ebs", "EBS FM", "https://ebsonair.ebs.co.kr/fmradiofamilypc/familypc1m/playlist.m3u8"],
      ["gugak", "국악방송", "https://mgugaklive.nowcdn.co.kr/gugakradio/gugakradio.stream/playlist.m3u8"],
      ["tbs", "TBS", "https://cdnfm.tbs.seoul.kr/tbs/_definst_/tbs_fm_web_360.smil/chunklist.m3u8"],
      ["ifm", "경인방송", "https://stream.ifm.kr/live/aod1/playlist.m3u8"],
      ["obs", "OBS 라디오", "https://vod3.obs.co.kr:444/live/obsstream1/radio.stream/playlist.m3u8"],
      ["army", "국방FM", "https://mediaworks.dema.mil.kr/live_edge/audio.sdp/playlist.m3u8"],
    ],
    music: [
      ["lofi", "로파이", "https://stream.0nlineradio.com/lo-fi"],
      ["jazzbar", "피아노 & 재즈 바", "https://stream.epic-lounge.com/piano-jazz-bar"],
      ["chillpiano", "칠아웃 피아노", "https://stream.epic-piano.com/chillout-piano"],
      ["solopiano", "솔로 피아노", "https://pianosolo.streamguys1.com/live"],
      ["smooth", "스무스 재즈", "https://0n-smoothjazz.radionetz.de/0n-smoothjazz.aac"],
      ["bossa", "보사노바", "https://mc-mcbossa.hostingradio.ru/mcbossa96.aacp"],
      ["citypop", "시티팝", "https://play.streamafrica.net/japancitypop"],
      ["kpop", "케이팝", "https://listen.moe/kpop/fallback"],
    ],
  };
  const ALL = [...CH.radio, ...CH.music];
  const KEY = "teamOfficeRadio"; // 마지막 채널·소리 크기 (이 기기에만)
  let P = { ch: "kbs2fm", vol: 0.7, tab: "radio" };
  try { P = { ...P, ...JSON.parse(localStorage.getItem(KEY)) }; } catch {}
  const keep = () => { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch {} };

  // ───────── 3D 라디오 (옛날 휴대용 라디오: 가죽 몸통 · 은색 스피커 망 · 둥근 주파수 다이얼 · 가죽 손잡이 · 마디 안테나) ─────────
  const tex = (w, h, draw) => { const c = document.createElement("canvas"); c.width = w; c.height = h; draw(c.getContext("2d"), w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; };
  const flat = (map, extra = {}) => new THREE.MeshStandardMaterial({ map, roughness: 0.7, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2, ...extra });
  const M = (color, extra) => new THREE.MeshStandardMaterial({ color, roughness: 0.6, ...extra });
  const CHROME = M("#d7dbe0", { metalness: 0.85, roughness: 0.28 }), LEATHER = M("#7a4730", { roughness: 0.85 });
  const W = 0.16, HH = 0.1, D = 0.058;           // 몸통 (책상 1.4 · 모니터보다 한참 작게)
  const PW = W - 0.014, PHh = HH - 0.016;          // 앞판
  const DX = 0.036, DY = HH / 2, DR = 0.027;       // 다이얼 가운데(앞판 오른쪽) · 반지름
  const cx = (x) => 256 + (x / PW) * 512, cr = (r) => (r / PW) * 512; // 앞판 좌표 → 그림 좌표
  const front = tex(512, Math.round((512 * PHh) / PW), (g, w, h) => {
    const rr = (x, y, ww, hh, r) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + ww, y, x + ww, y + hh, r); g.arcTo(x + ww, y + hh, x, y + hh, r); g.arcTo(x, y + hh, x, y, r); g.arcTo(x, y, x + ww, y, r); g.closePath(); };
    g.fillStyle = "#f1e5cc"; g.fillRect(0, 0, w, h);
    // 스피커 망: 은색 판에 촘촘한 구멍
    const gx = 20, gy = 22, gw = cx(DX - DR) - 44, gh = h - 44;
    const lg = g.createLinearGradient(0, gy, 0, gy + gh); lg.addColorStop(0, "#e6e8eb"); lg.addColorStop(1, "#b9bdc3");
    rr(gx, gy, gw, gh, 22); g.fillStyle = lg; g.fill();
    g.fillStyle = "#40454c";
    for (let y = gy + 14, row = 0; y < gy + gh - 8; y += 13, row++) for (let x = gx + 14 + (row % 2) * 6.5; x < gx + gw - 8; x += 13) { g.beginPath(); g.arc(x, y, 3.6, 0, Math.PI * 2); g.fill(); }
    g.strokeStyle = "#9aa0a7"; g.lineWidth = 4; rr(gx, gy, gw, gh, 22); g.stroke();
    // 다이얼: 크림색 원판 · 주파수 숫자 · 눈금
    const X = cx(DX), Y = h / 2, R = cr(DR);
    g.fillStyle = "#fbf6ea"; g.beginPath(); g.arc(X, Y, R, 0, Math.PI * 2); g.fill();
    g.strokeStyle = "#7a5a44"; g.fillStyle = "#6b4a36"; g.textAlign = "center"; g.textBaseline = "middle"; g.font = "bold 15px sans-serif";
    const nums = ["88", "92", "96", "100", "104", "108"];
    for (let i = 0; i <= 30; i++) { const a = Math.PI * (0.8 + (1.4 * i) / 30); const r0 = R * (i % 6 === 0 ? 0.74 : 0.8); g.lineWidth = i % 6 === 0 ? 3 : 1.5; g.beginPath(); g.moveTo(X + Math.cos(a) * r0, Y + Math.sin(a) * r0); g.lineTo(X + Math.cos(a) * R * 0.88, Y + Math.sin(a) * R * 0.88); g.stroke(); }
    nums.forEach((n, i) => { const a = Math.PI * (0.8 + (1.4 * i) / 5); g.fillText(n, X + Math.cos(a) * R * 0.56, Y + Math.sin(a) * R * 0.56); });
    g.font = "bold 13px sans-serif"; g.fillStyle = "#c0533f"; g.fillText("FM", X, Y + R * 0.5);
    g.font = "bold 15px sans-serif"; g.fillStyle = "#7a4730"; g.fillText("우리팀 RADIO", (gx + gw + X - R) / 2 + 2, h - 14);
  });
  const radio = new THREE.Group(), body = new THREE.Group();
  radio.add(body);
  const add = (geo, mat, pos, rot, parent = body) => { const m = new THREE.Mesh(geo, mat); m.position.set(...pos); if (rot) m.rotation.set(...rot); m.castShadow = true; parent.add(m); return m; };
  add(ctx.box(W, HH, D, 0.012), LEATHER, [0, HH / 2, 0]);                                   // 가죽 몸통
  add(new THREE.PlaneGeometry(PW, PHh), flat(front), [0, HH / 2, D / 2 + 0.0012]);         // 앞판 (망·다이얼 그림)
  add(new THREE.TorusGeometry(DR, 0.0026, 8, 40), CHROME, [DX, DY, D / 2 + 0.0016]);        // 다이얼 은색 테
  add(ctx.cyl(0.0085, 0.0085, 0.009), M("#5b3726"), [DX, DY, D / 2 + 0.0045], [Math.PI / 2, 0, 0]); // 가운데 꼭지
  const needle = new THREE.Group();                                                          // 다이얼 바늘 (채널 따라 돈다)
  needle.position.set(DX, DY, D / 2 + 0.0024);
  body.add(needle);
  const nm = add(new THREE.PlaneGeometry(0.0022, DR * 0.82), flat(null, { color: "#e0452c" }), [0, DR * 0.41, 0], null, needle);
  nm.material.polygonOffsetFactor = -2; nm.material.polygonOffsetUnits = -4; nm.castShadow = false;
  const led = add(new THREE.SphereGeometry(0.0035, 12, 8), M("#5a1d14", { emissive: "#ff3b30", emissiveIntensity: 0 }), [DX - DR - 0.006, HH - 0.012, D / 2 + 0.0018]);
  for (const x of [0.03, 0.054]) add(ctx.cyl(0.0068, 0.0068, 0.008), CHROME, [x, HH + 0.004, 0.004]); // 위쪽 꼭지 둘
  const strap = add(new THREE.TorusGeometry(0.046, 0.0042, 6, 24, Math.PI), M("#5e3523", { roughness: 0.9 }), [-0.018, HH, -0.004]); // 가죽 손잡이
  strap.scale.z = 1.8;
  for (const x of [-0.064, 0.028]) add(ctx.box(0.008, 0.008, 0.012, 0.002), CHROME, [x, HH + 0.002, -0.004]); // 손잡이 고리
  const ant = new THREE.Group();                                                               // 마디 안테나 (뒤 오른쪽 모서리에서 비스듬히)
  ant.position.set(W / 2 - 0.012, HH, -D / 2 + 0.01);
  ant.rotation.set(-0.32, 0, 0.62);
  body.add(ant);
  let ay = 0;
  for (const [r, len] of [[0.0026, 0.06], [0.002, 0.06], [0.0015, 0.058]]) { add(ctx.cyl(r, r, len), CHROME, [0, ay + len / 2, 0], null, ant); ay += len; }
  add(new THREE.SphereGeometry(0.0034, 10, 8), CHROME, [0, ay, 0], null, ant);
  const hitBox = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.26, 0.22), new THREE.MeshBasicMaterial());
  hitBox.visible = false; hitBox.position.y = 0.09; radio.add(hitBox); // 위에서 멀리 볼 땐 아주 작으니 누르는 곳은 넉넉히
  radio.scale.setScalar(1.2);
  radio.visible = false;
  ctx.scene.add(radio);

  // 책상 위 자리: 전체 화면에서 홍수연 왼쪽 · 모니터와 사람 사이 빈자리 (칸막이·모니터·머리에 안 가리는 곳을 재서 고름) — 자리 지정이 바뀌면 따라간다
  let placedNo = null;
  function place() {
    const s = ctx.seat();
    if (!s) { radio.visible = false; placedNo = null; return; }
    if (placedNo === s.no) return;
    placedNo = s.no;
    const local = new THREE.Vector3(-0.44, ctx.DH, -0.02).applyAxisAngle(new THREE.Vector3(0, 1, 0), s.rot);
    radio.position.copy(s.desk).add(local);
    radio.rotation.y = s.rot + 2.2; // 앞면이 앉은 사람과 사무실 전체 화면 쪽 사이를 보게
    radio.visible = true;
    ctx.renderer.shadowMap.needsUpdate = true;
  }

  // ───────── 음표 (트는 사람 화면에서만) ─────────
  const noteTex = ["♪", "♫"].map((ch) => tex(64, 64, (g) => { g.font = "bold 50px sans-serif"; g.textAlign = "center"; g.textBaseline = "middle"; g.lineWidth = 6; g.strokeStyle = "#fff"; g.strokeText(ch, 32, 34); g.fillStyle = "#ff6f8a"; g.fillText(ch, 32, 34); }));
  const notes = [];
  function spawnNote(faint) {
    const m = new THREE.Sprite(new THREE.SpriteMaterial({ map: noteTex[notes.length % 2], transparent: true, depthWrite: false }));
    m.scale.setScalar(0.042);
    m.position.copy(radio.position).add(new THREE.Vector3((Math.random() - 0.5) * 0.08, HH * radio.scale.y + 0.05, (Math.random() - 0.5) * 0.04));
    m.userData = { t: 0, dx: (Math.random() - 0.5) * 0.06, faint };
    ctx.scene.add(m); notes.push(m);
  }

  // ───────── 소리 ─────────
  const audio = new Audio();
  audio.preload = "none";
  audio.volume = P.vol;
  let hls = null, cur = null, state = "off", stallT = 0, seq = 0; // state: off | loading | on | paused | error
  const MSG = { off: "", loading: "연결하는 중…", on: "듣는 중 · ■ 누르면 꺼져요", paused: "꺼짐", error: "지금 이 채널이 안 나와요 — 다른 채널을 골라 보세요" };
  function loadHls() {
    if (window.Hls) return Promise.resolve();
    return new Promise((ok, no) => { const s = document.createElement("script"); s.src = "https://cdn.jsdelivr.net/npm/hls.js@1.5.15/dist/hls.min.js"; s.onload = ok; s.onerror = () => no(new Error("hls.js")); document.head.append(s); });
  }
  function stopMedia() {
    if (hls) { hls.destroy(); hls = null; }
    audio.pause(); audio.removeAttribute("src"); audio.load();
  }
  async function play(id) {
    const c = ALL.find((x) => x[0] === id) || ALL[0], my = ++seq;
    cur = c; P.ch = c[0]; keep();
    stopMedia(); setState("loading");
    try {
      const url = typeof c[2] === "function" ? await c[2]() : c[2];
      if (my !== seq) return;
      if (/\.m3u8/.test(url)) {
        await loadHls();
        if (my !== seq) return;
        if (window.Hls?.isSupported()) {
          hls = new window.Hls({ lowLatencyMode: false });
          hls.on(window.Hls.Events.ERROR, (e, d) => { if (d.fatal && my === seq) { stopMedia(); setState("error"); } });
          hls.loadSource(url); hls.attachMedia(audio);
        } else audio.src = url; // 아이폰 등: 브라우저가 직접
      } else audio.src = url;
      await audio.play();
    } catch (e) { if (my === seq) { stopMedia(); setState("error"); } return; }
    stallT = performance.now();
    mediaSession();
  }
  audio.addEventListener("playing", () => { if (cur) setState("on"); });
  audio.addEventListener("waiting", () => { if (state === "on") setState("loading"); });
  audio.addEventListener("error", () => { // 방금 지운 주소·잠금 풀기용 빈 소리에서 난 오류는 무시
    const src = audio.getAttribute("src") || "";
    if (cur && state !== "off" && src && !src.startsWith("data:")) { stopMedia(); setState("error"); }
  });
  function pause() { if (!cur) return; seq++; stopMedia(); setState("paused"); } // 생방송: 멈췄다 다시 켜면 지금 방송부터
  // 아이폰: 누른 그 순간에 한 번 틀어 둬야(소리 없는 짧은 파일) 주소를 받아 온 뒤에도 소리를 낼 수 있다
  let unlocked = false;
  function unlock() { if (unlocked) return; unlocked = true; audio.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA="; audio.play().catch(() => {}); }
  function choose(id) { unlock(); play(id); }
  function toggle() { if (state === "on" || state === "loading") pause(); else choose(cur ? cur[0] : P.ch); }
  function mediaSession() {
    if (!("mediaSession" in navigator) || !cur) return;
    try {
      navigator.mediaSession.metadata = new MediaMetadata({ title: cur[1], artist: "우리팀 라디오", album: "홍수연 님 책상", artwork: [{ src: "app/icon-192.png", sizes: "192x192", type: "image/png" }] });
      navigator.mediaSession.setActionHandler("play", () => play(cur[0]));
      navigator.mediaSession.setActionHandler("pause", pause);
      navigator.mediaSession.setActionHandler("stop", pause);
    } catch {}
  }

  // ───────── 화면: 채널 고르는 창 · 듣는 중 알약 ─────────
  const css = document.createElement("style");
  css.textContent = `
  .rd-panel{position:absolute;left:calc(16px + env(safe-area-inset-left));bottom:calc(16px + env(safe-area-inset-bottom));z-index:8;width:min(360px,calc(100% - 32px));max-height:min(560px,calc(100% - 90px));display:flex;flex-direction:column;
    background:rgba(255,255,255,.94);-webkit-backdrop-filter:saturate(180%) blur(24px);backdrop-filter:saturate(180%) blur(24px);border:.5px solid rgba(0,0,0,.08);border-radius:18px;box-shadow:0 18px 44px rgba(0,0,0,.2);overflow:hidden}
  .rd-panel[hidden],.rd-pill[hidden]{display:none}
  .rd-head{display:flex;align-items:center;gap:10px;padding:12px 10px 10px 14px}
  .rd-head .ic{width:38px;height:38px;border-radius:12px;background:#ffe3dc;display:flex;align-items:center;justify-content:center;font-size:21px;flex:none}
  .rd-head b{display:block;font-size:15px;color:#1c1c1e}
  .rd-head span{display:block;font-size:11.5px;color:#8e8e93;margin-top:1px}
  .rd-head .t{flex:1;min-width:0}
  .rd-x{border:0;background:rgba(118,118,128,.12);width:30px;height:30px;border-radius:50%;font-size:17px;line-height:30px;color:#6c6c70;cursor:pointer;padding:0;flex:none}
  .rd-now{display:flex;align-items:center;gap:12px;margin:0 12px;padding:10px 12px;border-radius:14px;background:#fff4f1}
  .rd-play{width:44px;height:44px;border-radius:50%;border:0;background:#ee6b55;color:#fff;font-size:17px;cursor:pointer;flex:none;box-shadow:0 4px 12px rgba(238,107,85,.35)}
  .rd-play:disabled{opacity:.4;cursor:default}
  .rd-now .c{flex:1;min-width:0}
  .rd-now b{display:block;font-size:14.5px;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .rd-now em{display:block;font-style:normal;font-size:11.5px;color:#8e8e93;margin-top:2px}
  .rd-now em.on{color:#ee6b55;font-weight:700}.rd-now em.err{color:#c0392b}
  .rd-vol{display:flex;align-items:center;gap:6px;margin-top:6px;font-size:12px;color:#8e8e93}
  .rd-vol input{flex:1;accent-color:#ee6b55;min-width:0}
  .rd-seg{display:flex;margin:12px 12px 8px;background:rgba(118,118,128,.12);border-radius:10px;padding:2px}
  .rd-seg button{flex:1;border:0;background:none;border-radius:8px;padding:7px 0;font:inherit;font-size:13px;font-weight:600;color:#3a3a3c;cursor:pointer}
  .rd-seg button.on{background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.12);color:#1c1c1e}
  .rd-list{overflow:auto;padding:0 12px 6px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}
  .rd-list button{border:1px solid rgba(0,0,0,.08);background:#fff;border-radius:11px;padding:9px 10px;font:inherit;font-size:13px;color:#1c1c1e;cursor:pointer;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .rd-list button.on{border-color:#ee6b55;background:#fff4f1;color:#c0452f;font-weight:700}
  .rd-foot{padding:6px 14px 12px;font-size:11px;line-height:1.5;color:#8e8e93}
  .rd-pill{position:absolute;left:calc(16px + env(safe-area-inset-left));bottom:calc(16px + env(safe-area-inset-bottom));z-index:8;display:flex;align-items:center;gap:8px;padding:6px 6px 6px 12px;border-radius:999px;
    background:rgba(255,255,255,.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);border:.5px solid rgba(0,0,0,.08);box-shadow:0 8px 22px rgba(0,0,0,.14);cursor:pointer;max-width:calc(100% - 32px)}
  .rd-pill b{font-size:13px;color:#1c1c1e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .rd-pill .eq{display:inline-flex;gap:2px;align-items:flex-end;height:14px;flex:none}
  .rd-pill .eq i{width:3px;background:#ee6b55;border-radius:2px;animation:rdEq .9s ease-in-out infinite}
  .rd-pill .eq i:nth-child(2){animation-delay:-.3s}.rd-pill .eq i:nth-child(3){animation-delay:-.6s}
  .rd-pill.paused .eq i{animation:none;height:4px}
  .rd-pill button{width:30px;height:30px;border-radius:50%;border:0;background:#ee6b55;color:#fff;font-size:12px;cursor:pointer;flex:none}
  @keyframes rdEq{0%,100%{height:4px}50%{height:14px}}
  .rd-shift .rd-panel,.rd-shift .rd-pill{left:calc(96px + env(safe-area-inset-left))}
  @media (max-width:820px),(max-height:520px){
    .rd-panel{left:calc(10px + env(safe-area-inset-left));right:calc(10px + env(safe-area-inset-right));width:auto;bottom:calc(66px + env(safe-area-inset-bottom));max-height:calc(100% - 150px)}
    .rd-pill{left:calc(12px + env(safe-area-inset-left));bottom:calc(66px + env(safe-area-inset-bottom))}
    .rd-shift .rd-pill{left:calc(76px + env(safe-area-inset-left))}
    .rd-shift .rd-panel{left:calc(10px + env(safe-area-inset-left))}}
  html body.pip .rd-panel,html body.pip .rd-pill{display:none!important}`;
  document.head.append(css);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const host = el("div", "rd-host");
  host.style.cssText = "position:absolute;inset:0;pointer-events:none;z-index:8";
  const panel = el("div", "rd-panel"), pill = el("div", "rd-pill");
  panel.hidden = pill.hidden = true;
  panel.style.pointerEvents = pill.style.pointerEvents = "auto";
  panel.setAttribute("role", "dialog"); panel.setAttribute("aria-label", "책상 라디오");
  host.append(panel, pill);
  ctx.stage.append(host);
  panel.innerHTML = `<div class="rd-head"><div class="ic">📻</div><div class="t"><b>책상 라디오</b><span>홍수연 님 책상 · 튼 사람 화면에서만 들려요</span></div><button type="button" class="rd-x" aria-label="창 닫기 (소리는 계속)" title="창 닫기 (소리는 계속)">×</button></div>
    <div class="rd-now"><button type="button" class="rd-play" aria-label="켜기">▶</button><div class="c"><b></b><em></em><label class="rd-vol">🔈<input type="range" min="0" max="1" step="0.05" aria-label="소리 크기">🔊</label></div></div>
    <div class="rd-seg"><button type="button" data-tab="radio">라디오 방송</button><button type="button" data-tab="music">24시간 음악</button></div>
    <div class="rd-list"></div><div class="rd-foot"></div>`;
  const q = (s) => panel.querySelector(s), playBtn = q(".rd-play"), vol = q(".rd-vol input");
  vol.value = String(P.vol);
  vol.oninput = () => { audio.volume = P.vol = +vol.value; keep(); };
  playBtn.onclick = toggle;
  q(".rd-x").onclick = () => { panel.hidden = true; draw(); };
  panel.querySelectorAll(".rd-seg button").forEach((b) => { b.onclick = () => { P.tab = b.dataset.tab; keep(); draw(); }; });
  pill.onclick = (e) => { if (e.target.closest("button")) return; open(); };
  function draw() {
    const c = cur || ALL.find((x) => x[0] === P.ch) || ALL[0], live = state === "on" || state === "loading";
    q(".rd-now b").textContent = c[1];
    const em = q(".rd-now em");
    em.textContent = MSG[state] || "누르면 켜져요";
    em.className = state === "on" ? "on" : state === "error" ? "err" : "";
    playBtn.textContent = live ? "■" : "▶"; playBtn.setAttribute("aria-label", live ? "끄기" : "켜기");
    panel.querySelectorAll(".rd-seg button").forEach((b) => b.classList.toggle("on", b.dataset.tab === P.tab));
    const list = q(".rd-list");
    list.replaceChildren(...CH[P.tab].map(([id, name]) => { const b = el("button", cur?.[0] === id && live ? "on" : ""); b.type = "button"; b.textContent = name; b.onclick = () => choose(id); return b; }));
    q(".rd-foot").textContent = P.tab === "radio" ? "방송사 사정에 따라 가끔 안 나올 수 있어요. MBC는 방송사가 다른 사이트에서 틀 수 없게 막아 두어 넣지 못했어요." : "광고 없는 해외 인터넷 음악 방송이에요 (24시간). 휴대폰 데이터로 들으면 한 시간에 50~90MB쯤 써요.";
    pill.hidden = !panel.hidden || !(live || state === "error"); // 끄면 알약도 사라진다 (다시 들으려면 책상 라디오를 누름)
    pill.classList.toggle("paused", !live);
    pill.innerHTML = `<span class="eq"><i></i><i></i><i></i></span><b>📻 ${c[1]}</b><button type="button" aria-label="${live ? "끄기" : "켜기"}" title="${live ? "끄기" : "켜기"}">${live ? "■" : "▶"}</button>`;
    pill.querySelector("button").onclick = toggle;
    shift();
  }
  const shift = () => host.classList.toggle("rd-shift", !!document.querySelector(".mom-btn:not([hidden])")); // 홍수연 화면: 아기 단추 옆으로
  function setState(s) { state = s; led.material.emissiveIntensity = s === "on" ? 2.2 : 0; draw(); }
  function open() { panel.hidden = false; draw(); }
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) { panel.hidden = true; draw(); } });

  // ───────── 누르기 · 매 프레임 ─────────
  function hit(ray) { return radio.visible && ray.intersectObject(radio, true).length > 0; }
  let t = 0, noteT = 0, placeT = 0;
  function tick(dt) {
    t += dt;
    if ((placeT -= dt) <= 0) { placeT = 1; place(); shift(); }
    if (!radio.visible) return;
    const on = state === "on";
    body.scale.y = on ? 1 + 0.025 * Math.max(0, Math.sin(t * 9)) : 1; // 켜져 있으면 들썩들썩
    needle.rotation.z += ((cur ? 1.1 - (ALL.indexOf(cur) / (ALL.length - 1)) * 2.2 : 0) - needle.rotation.z) * Math.min(1, dt * 4); // 채널 따라 바늘이 스르륵
    if ((noteT -= dt) <= 0) { noteT = on ? 0.55 : 7; if (on || Math.random() < 0.5) spawnNote(!on); } // 꺼져 있을 땐 가끔 흐린 음표 (누를 수 있다는 표시)
    for (let i = notes.length - 1; i >= 0; i--) {
      const m = notes[i], u = (m.userData.t += dt) / 1.8;
      m.position.y += dt * 0.09; m.position.x += Math.sin(m.userData.t * 4) * dt * 0.02 + m.userData.dx * dt;
      m.material.opacity = (m.userData.faint ? 0.45 : 1) * Math.min(1, u * 4) * (1 - u);
      if (u >= 1) { ctx.scene.remove(m); m.material.dispose(); notes.splice(i, 1); }
    }
    if (state === "on" && audio.paused && performance.now() - stallT > 4000) setState("paused"); // 다른 앱이 소리를 가져가 멈춘 경우
  }
  draw();
  return { hit, open, tick, play, pause, group: radio, state: () => ({ state, ch: cur?.[0] || P.ch, vol: P.vol, playing: !audio.paused, t: audio.currentTime }) };
};
