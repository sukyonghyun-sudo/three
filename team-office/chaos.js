// 어항 모드 — 켜 두면 사무실에 가끔 갑자기 일이 벌어지는 자동 연출 26가지: 재난 13(만화식: 날아가고, 기절해 별이 돌고, 얼고, 그을린다.
// 피·잔혹 묘사는 없다) + 힐링·따뜻한 이야기·즐거움 13. 메뉴에서 골라 바로 볼 수도 있다
// 일반 <script> 로 읽고, 사무실이 다 만들어진 뒤 window.Chaos(ctx) 로 붙인다 (ctx = 사무실 안쪽 값들 — index.html 참고).
// 연출이 도는 동안 사람들은 이 파일이 조종한다 (m.chaos = true → Person.update 를 건너뜀). 끝나면 모두 원래대로 (ctx.restorePeople).
window.Chaos = function (ctx) {
  const { THREE, scene, camera, crew, H, DH, PH, WALL_H, ROOM, DOOR_IN, DOOR_OUT, MAIN_Z, RCX } = ctx;
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  const rnd = (a, b) => a + Math.random() * (b - a);
  const pick = (a) => a[(Math.random() * a.length) | 0];
  const K = H / 1.25; // 캐릭터 키 기준 배율

  // ───────── 그림 (캔버스로 만든 텍스처) ─────────
  const texCache = {};
  function canvasTex(key, w, h, draw) {
    if (texCache[key]) return texCache[key];
    const c = document.createElement("canvas");
    c.width = w; c.height = h;
    draw(c.getContext("2d"), w, h);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return (texCache[key] = t);
  }
  const TEX = {
    soft: () => canvasTex("soft", 64, 64, (g) => { const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, "rgba(255,255,255,1)"); gr.addColorStop(0.4, "rgba(255,255,255,.6)"); gr.addColorStop(1, "rgba(255,255,255,0)"); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); }),
    puff: () => canvasTex("puff", 96, 96, (g) => { for (const [x, y, r] of [[48, 52, 34], [32, 58, 22], [66, 46, 24], [46, 34, 22]]) { const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, "rgba(255,255,255,.9)"); gr.addColorStop(0.6, "rgba(255,255,255,.4)"); gr.addColorStop(1, "rgba(255,255,255,0)"); g.fillStyle = gr; g.fillRect(0, 0, 96, 96); } }),
    flame: () => canvasTex("flame", 64, 96, (g) => { const gr = g.createRadialGradient(32, 64, 2, 32, 58, 34); gr.addColorStop(0, "rgba(255,255,220,1)"); gr.addColorStop(0.3, "rgba(255,200,60,.95)"); gr.addColorStop(0.65, "rgba(255,90,20,.7)"); gr.addColorStop(1, "rgba(200,30,0,0)"); g.fillStyle = gr; g.beginPath(); g.moveTo(32, 2); g.bezierCurveTo(52, 34, 62, 60, 50, 84); g.quadraticCurveTo(32, 98, 14, 84); g.bezierCurveTo(2, 60, 12, 34, 32, 2); g.fill(); }),
    star: () => canvasTex("star", 64, 64, (g) => { g.fillStyle = "#ffd84a"; g.strokeStyle = "#a8780a"; g.lineWidth = 3; g.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? 12 : 28; g.lineTo(32 + Math.cos(a) * r, 32 + Math.sin(a) * r); } g.closePath(); g.fill(); g.stroke(); }),
    snow: () => canvasTex("snow", 32, 32, (g) => { const gr = g.createRadialGradient(16, 16, 0, 16, 16, 15); gr.addColorStop(0, "rgba(255,255,255,1)"); gr.addColorStop(0.5, "rgba(240,248,255,.8)"); gr.addColorStop(1, "rgba(240,248,255,0)"); g.fillStyle = gr; g.fillRect(0, 0, 32, 32); }),
    drop: () => canvasTex("drop", 16, 64, (g) => { const gr = g.createLinearGradient(0, 0, 0, 64); gr.addColorStop(0, "rgba(180,215,255,0)"); gr.addColorStop(1, "rgba(200,230,255,.9)"); g.fillStyle = gr; g.fillRect(6, 0, 4, 64); }),
    paper: () => canvasTex("paper", 48, 64, (g) => { g.fillStyle = "#fbfbf6"; g.fillRect(4, 4, 40, 56); g.fillStyle = "#9aa3ad"; for (let i = 0; i < 6; i++) g.fillRect(9, 12 + i * 8, 22 + (i % 3) * 5, 2); }),
    ghost: () => canvasTex("ghost", 128, 160, (g) => {
      g.fillStyle = "rgba(250,252,255,.95)"; g.beginPath(); g.moveTo(14, 150); g.lineTo(14, 64); g.arc(64, 64, 50, Math.PI, 0); g.lineTo(114, 150);
      for (let i = 0; i < 5; i++) g.quadraticCurveTo(104 - i * 20, 130, 94 - i * 20, 150); g.fill();
      g.fillStyle = "#1c1f2a"; g.beginPath(); g.ellipse(46, 66, 9, 13, 0, 0, Math.PI * 2); g.ellipse(82, 66, 9, 13, 0, 0, Math.PI * 2); g.fill();
      g.beginPath(); g.ellipse(64, 100, 12, 16, 0, 0, Math.PI * 2); g.fill();
    }),
    crack: () => canvasTex("crack", 256, 256, (g) => {
      g.strokeStyle = "rgba(30,30,34,.85)"; g.lineCap = "round";
      const branch = (x, y, a, len, w) => { if (len < 8 || w < 0.6) return; const x2 = x + Math.cos(a) * len, y2 = y + Math.sin(a) * len; g.lineWidth = w; g.beginPath(); g.moveTo(x, y); g.lineTo(x2, y2); g.stroke(); branch(x2, y2, a + rnd(-0.6, 0.6), len * 0.75, w * 0.75); if (Math.random() < 0.55) branch(x2, y2, a + rnd(-1.4, 1.4), len * 0.55, w * 0.6); };
      for (let i = 0; i < 6; i++) branch(128, 128, (i / 6) * Math.PI * 2 + rnd(-0.3, 0.3), 34, 5);
    }),
    scorch: () => canvasTex("scorch", 128, 128, (g) => { const gr = g.createRadialGradient(64, 64, 4, 64, 64, 62); gr.addColorStop(0, "rgba(10,8,6,.95)"); gr.addColorStop(0.6, "rgba(30,22,16,.7)"); gr.addColorStop(1, "rgba(40,30,20,0)"); g.fillStyle = gr; g.fillRect(0, 0, 128, 128); }),
    ring: () => canvasTex("ring", 128, 128, (g) => { const gr = g.createRadialGradient(64, 64, 40, 64, 64, 63); gr.addColorStop(0, "rgba(255,255,255,0)"); gr.addColorStop(0.75, "rgba(255,240,200,.9)"); gr.addColorStop(1, "rgba(255,240,200,0)"); g.fillStyle = gr; g.fillRect(0, 0, 128, 128); }),
    banana: () => canvasTex("banana", 64, 48, (g) => { g.fillStyle = "#f6cf2a"; g.strokeStyle = "#9a7010"; g.lineWidth = 2; g.beginPath(); g.moveTo(6, 14); g.bezierCurveTo(16, 44, 46, 44, 58, 10); g.bezierCurveTo(46, 30, 20, 30, 6, 14); g.fill(); g.stroke(); g.fillStyle = "#4a3410"; g.fillRect(56, 6, 5, 5); }),
  };
  const WORD_TEX = {};
  // 글씨 그림: 폭은 글 길이에 맞춘다 (긴 문장이 잘리지 않게) — tex.userData.aspect = 폭/높이
  const WORD_FONT = "900 72px Pretendard, 'Malgun Gothic', sans-serif", measureCtx = document.createElement("canvas").getContext("2d");
  function wordTex(text, color = "#ffffff", stroke = "#23252a") {
    const key = text + color + stroke;
    if (WORD_TEX[key]) return WORD_TEX[key];
    measureCtx.font = WORD_FONT;
    const w = Math.ceil(measureCtx.measureText(text).width + 40);
    const t = canvasTex("w:" + key, w, 128, (g) => {
      g.font = WORD_FONT; g.textAlign = "center"; g.textBaseline = "middle"; g.lineJoin = "round";
      g.lineWidth = 16; g.strokeStyle = stroke; g.strokeText(text, w / 2, 66); g.fillStyle = color; g.fillText(text, w / 2, 66);
    });
    t.userData.aspect = w / 128;
    return (WORD_TEX[key] = t);
  }
  const TXT = 0.62; // 화면 글씨 크기 배율 (전체적으로 크다는 의견 — 이름표보다 조금 큰 정도)

  // ───────── 입자 ─────────
  const ROOT = new THREE.Group();
  scene.add(ROOT);
  const PARTS = [];
  // p: { tex, at, vel, life, size, grow, color, alpha, gravity, drag, spin, add(가산 혼합), screen(화면 크기 고정), fadeIn }
  function emit(p) {
    const mat = new THREE.SpriteMaterial({ map: p.tex, color: p.color ?? 0xffffff, transparent: true, depthWrite: false, opacity: 0,
      blending: p.add ? THREE.AdditiveBlending : THREE.NormalBlending, sizeAttenuation: !p.screen, depthTest: p.depthTest ?? true });
    const s = new THREE.Sprite(mat);
    s.position.copy(p.at);
    s.renderOrder = p.order ?? 5;
    mat.rotation = p.rot ?? Math.random() * Math.PI * 2;
    ROOT.add(s);
    const q = { s, vel: p.vel ? p.vel.clone() : V(0, 0, 0), age: -(p.delay || 0), life: p.life ?? 1, size: p.size ?? 0.2, grow: p.grow ?? 0, alpha: p.alpha ?? 1,
      gravity: p.gravity ?? 0, drag: p.drag ?? 0, spin: p.spin ?? 0, fadeIn: p.fadeIn ?? 0.1, aspect: p.aspect ?? 1, floor: p.floor, onEnd: p.onEnd, follow: p.follow };
    PARTS.push(q);
    return q;
  }
  function tickParts(dt) {
    for (let i = PARTS.length - 1; i >= 0; i--) {
      const q = PARTS[i];
      q.age += dt;
      if (q.age < 0) { q.s.visible = false; continue; }
      q.s.visible = true;
      const t = q.age / q.life;
      if (t >= 1) { ROOT.remove(q.s); q.s.material.dispose(); PARTS.splice(i, 1); q.onEnd?.(q); continue; }
      q.vel.y -= q.gravity * dt;
      if (q.drag) q.vel.multiplyScalar(Math.pow(1 - q.drag, dt * 60));
      q.s.position.addScaledVector(q.vel, dt);
      if (q.follow) q.s.position.copy(q.follow());
      if (q.floor != null && q.s.position.y < q.floor) { q.s.position.y = q.floor; q.vel.set(q.vel.x * 0.4, Math.abs(q.vel.y) * 0.25, q.vel.z * 0.4); }
      const sz = q.size * (1 + q.grow * t);
      q.s.scale.set(sz * q.aspect, sz, 1);
      q.s.material.rotation += q.spin * dt;
      q.s.material.opacity = q.alpha * Math.min(1, q.age / Math.max(q.fadeIn * Math.min(q.life, 1), 1e-3)) * (t > 0.6 ? 1 - (t - 0.6) / 0.4 : 1); // fadeIn: 1초 넘게 사는 입자는 초, 짧은 입자는 수명 비율
    }
  }
  // 바닥·책상 위 자국 (그을음·금): 끝나면 지운다
  const DECALS = [];
  function decal(tex, x, z, size, y = 0.012, alpha = 1, rot = Math.random() * 6.28) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0, polygonOffset: true, polygonOffsetFactor: -2 }));
    m.rotation.set(-Math.PI / 2, 0, rot);
    m.position.set(x, y, z);
    m.renderOrder = 2;
    ROOT.add(m);
    const d = { m, alpha, t: 0 };
    DECALS.push(d);
    return d;
  }
  // 일반 물체 (상자·공 등) — 끝나면 지운다
  const PROPS = [];
  function prop(obj) { ROOT.add(obj); PROPS.push(obj); return obj; }
  const LIGHTS = [];
  function light(l) { ROOT.add(l); LIGHTS.push(l); return l; }

  // ───────── 소리 (즉석 합성 — 페이지를 한 번 누른 뒤에만 난다) ─────────
  function ac() { const a = ctx.audio(); return a && a.state === "running" ? a : null; }
  function noise(a, dur) { const b = a.createBuffer(1, a.sampleRate * dur, a.sampleRate), d = b.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; const s = a.createBufferSource(); s.buffer = b; return s; }
  const SND = {
    boom(vol = 0.35) { const a = ac(); if (!a) return; const t = a.currentTime, n = noise(a, 1.2), f = a.createBiquadFilter(), g = a.createGain(); f.type = "lowpass"; f.frequency.setValueAtTime(900, t); f.frequency.exponentialRampToValueAtTime(60, t + 1.1); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 1.2); n.connect(f).connect(g).connect(a.destination); n.start(t); },
    whoosh(vol = 0.12) { const a = ac(); if (!a) return; const t = a.currentTime, n = noise(a, 0.8), f = a.createBiquadFilter(), g = a.createGain(); f.type = "bandpass"; f.frequency.setValueAtTime(300, t); f.frequency.exponentialRampToValueAtTime(1800, t + 0.7); g.gain.setValueAtTime(0.001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.2); g.gain.exponentialRampToValueAtTime(0.001, t + 0.8); n.connect(f).connect(g).connect(a.destination); n.start(t); },
    zap(vol = 0.18) { const a = ac(); if (!a) return; const t = a.currentTime, o = a.createOscillator(), g = a.createGain(); o.type = "square"; o.frequency.setValueAtTime(1400, t); o.frequency.exponentialRampToValueAtTime(80, t + 0.35); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.4); o.connect(g).connect(a.destination); o.start(t); o.stop(t + 0.42); },
    pop(vol = 0.15, f0 = 600) { const a = ac(); if (!a) return; const t = a.currentTime, o = a.createOscillator(), g = a.createGain(); o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f0 * 0.4, t + 0.15); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.18); o.connect(g).connect(a.destination); o.start(t); o.stop(t + 0.2); },
    siren(dur = 4, vol = 0.07) { const a = ac(); if (!a) return; const t = a.currentTime, o = a.createOscillator(), g = a.createGain(); o.type = "triangle"; for (let i = 0; i < dur * 2; i++) o.frequency.setValueAtTime(i % 2 ? 660 : 880, t + i * 0.5); g.gain.setValueAtTime(vol, t); g.gain.setValueAtTime(vol, t + dur - 0.2); g.gain.exponentialRampToValueAtTime(0.001, t + dur); o.connect(g).connect(a.destination); o.start(t); o.stop(t + dur); },
    groan(vol = 0.08) { const a = ac(); if (!a) return; const t = a.currentTime, o = a.createOscillator(), g = a.createGain(), f = a.createBiquadFilter(); o.type = "sawtooth"; o.frequency.setValueAtTime(110, t); o.frequency.linearRampToValueAtTime(80, t + 1.1); f.type = "lowpass"; f.frequency.value = 500; g.gain.setValueAtTime(0.001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.2); g.gain.exponentialRampToValueAtTime(0.001, t + 1.2); o.connect(f).connect(g).connect(a.destination); o.start(t); o.stop(t + 1.25); },
    splash(vol = 0.12) { const a = ac(); if (!a) return; const t = a.currentTime, n = noise(a, 0.6), f = a.createBiquadFilter(), g = a.createGain(); f.type = "highpass"; f.frequency.value = 900; g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.6); n.connect(f).connect(g).connect(a.destination); n.start(t); },
  };

  // ───────── 화면 위 글 (배너·외침·번쩍임) ─────────
  const stage = ctx.stage;
  const css = document.createElement("style");
  css.textContent = `
  .cx-banner{position:absolute;left:50%;top:58px;transform:translateX(-50%);z-index:6;pointer-events:none;text-align:center;
    background:rgba(20,22,28,.82);color:#fff;border-radius:14px;padding:10px 22px 12px;min-width:260px;box-shadow:0 8px 30px rgba(0,0,0,.25);animation:cxIn .5s ease both}
  .cx-banner b{display:block;font-size:22px;letter-spacing:-.01em}
  .cx-banner span{display:block;font-size:12px;opacity:.8;margin-top:3px}
  .cx-banner i{display:block;height:4px;border-radius:4px;background:rgba(255,255,255,.18);margin-top:8px;overflow:hidden}
  .cx-banner i::after{content:"";display:block;height:100%;width:var(--p,0%);background:#ffb03a;border-radius:4px}
  @keyframes cxIn{from{opacity:0;transform:translate(-50%,-10px)}to{opacity:1;transform:translate(-50%,0)}}
  .cx-flash{position:absolute;inset:0;z-index:5;pointer-events:none;opacity:0;transition:opacity .08s}
  .cx-vignette{position:absolute;inset:0;z-index:4;pointer-events:none;opacity:0;transition:opacity 1.2s}
  .cx-menu{position:absolute;left:16px;top:52px;z-index:7;background:rgba(255,253,249,.97);border:1px solid var(--line);border-radius:14px;padding:12px;width:min(420px,calc(100% - 32px));box-shadow:0 10px 30px rgba(0,0,0,.18)}
  .cx-menu h3{margin:0 0 4px;font-size:14px}
  .cx-menu p{margin:0 0 10px;font-size:11px;color:var(--muted)}
  .cx-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(122px,1fr));gap:6px}
  .cx-grid button{border:1px solid var(--line);background:var(--panel);border-radius:10px;padding:8px 6px;font:inherit;font-size:12px;cursor:pointer;text-align:left;color:var(--ink)}
  .cx-grid button:hover{border-color:#c9c0b2;background:#fbf6ee}
  .cx-grid button em{font-style:normal;font-size:16px;margin-right:4px}
  .cx-row{display:flex;gap:6px;margin-top:10px}
  .cx-btn{border:1px solid var(--line);background:var(--panel);border-radius:9px;padding:6px 11px;font:inherit;font-size:12px;cursor:pointer;color:var(--ink)}
  .cx-btn.dark{background:var(--ink);color:#fff;border-color:var(--ink)}
  .cx-stop{position:absolute;right:12px;top:14px;z-index:7}`;
  document.head.append(css);
  const banner = document.createElement("div"); banner.className = "cx-banner"; banner.hidden = true; stage.append(banner);
  const flashEl = document.createElement("div"); flashEl.className = "cx-flash"; stage.append(flashEl);
  const vig = document.createElement("div"); vig.className = "cx-vignette"; stage.append(vig);
  function flash(color = "#fff", ms = 120, op = 0.85) { flashEl.style.background = color; flashEl.style.opacity = op; setTimeout(() => (flashEl.style.opacity = 0), ms); }
  function vignette(bg, op) { vig.style.background = bg; vig.style.opacity = op; }

  // 외침 (틀 없는 굵은 글씨, 머리 위로 툭 튀어나와 떠오른다)
  function shout(m, text, color = "#ffffff", stroke = "#23252a", life = 1.6) {
    const at = headPos(m).add(V(0, 0.18 * K, 0));
    const tex = wordTex(text, color, stroke);
    const q = emit({ tex, at, vel: V(0, 0.35 * K, 0), life, size: 0.05 * TXT, aspect: tex.userData.aspect, screen: true, fadeIn: 0.05, order: 12, depthTest: false, rot: 0 });
    return q;
  }
  function word(text, at, size = 0.07, color = "#ffd84a", stroke = "#5a2a00", life = 1.4) {
    const tex = wordTex(text, color, stroke);
    return emit({ tex, at, vel: V(0, 0.4, 0), life, size: size * TXT, aspect: tex.userData.aspect, screen: true, fadeIn: 0.04, order: 12, depthTest: false, rot: 0 });
  }

  // ───────── 사람 조종 ─────────
  const P = new Map(); // m → 상태 { mode, path, speed, t, ... }
  const tmpV = V(0, 0, 0);
  function headPos(m) { if (m.head) return m.head.getWorldPosition(V(0, 0, 0)); return m.root.position.clone().add(V(0, H, 0)); }
  const present = () => crew.filter((m) => m.root.visible && m.c);
  function take(m) { // 조종 시작: 앉아 있던 사람은 의자 앞에 선다
    if (P.has(m)) return P.get(m);
    m.chaos = true;
    const r = m.root;
    const st = { m, mode: "idle", t: 0, speed: 1.6 * K, tint: null, anim: null };
    P.set(m, st);
    if (["work", "workLeave", "slideIn", "slideOut", "sitDown", "standUp"].includes(m.state)) { // 앉아 있던 사람: 벌떡 일어난다
      r.position.set(m.seat.approach.x, 0, m.seat.approach.z);
      r.rotation.y = m.seat.rot + Math.PI;
    } else r.position.y = Math.max(0, r.position.y);
    m.c.play("idle", 0.2);
    m.label.draw("move");
    return st;
  }
  function anim(m, name, fade = 0.2, speed = 1) {
    const a = m.c.play(name, fade) || m.c.actions[name];
    if (a) a.timeScale = speed;
    for (const [n, act] of Object.entries(m.c.actions)) if (n !== name) act.timeScale = 1;
  }
  // 길 따라 뛰기: 사람마다 자기 줄 통로 → 큰 통로 → …
  function routeFrom(m, to, viaDoor = false) {
    const p = m.root.position, ax = m.seat.aisleX, pts = [V(ax, 0, p.z), V(ax, 0, MAIN_Z)];
    if (viaDoor) pts.push(DOOR_IN.clone(), DOOR_OUT.clone());
    else if (to) pts.push(V(to.x, 0, MAIN_Z), V(to.x, 0, to.z));
    return pts;
  }
  function runPath(m, pts, speed = 2.2, then) {
    const st = take(m);
    Object.assign(st, { mode: "run", path: pts.map((q) => q.clone()), pi: 0, speed: speed * K, then });
    anim(m, "walk", 0.15, speed / 1.0);
  }
  function knock(m, dir, stars = true) { // 넘어져 기절 (별이 돈다)
    const st = take(m);
    Object.assign(st, { mode: "ko", t: 0, fall: dir ?? (Math.random() < 0.5 ? 1 : -1), fallAxis: Math.random() < 0.5 ? "x" : "z" });
    anim(m, "idle", 0.1);
    if (stars) st.stars = [0, 1, 2].map((i) => emit({ tex: TEX.star(), at: headPos(m), life: 9999, size: 0.13 * K, fadeIn: 0.2, order: 9, follow: () => {
      const r = m.root.position, a = st.t * 4 + (i * Math.PI * 2) / 3;
      return V(r.x + Math.cos(a) * 0.22 * K, 0.42 * K, r.z + Math.sin(a) * 0.22 * K);
    } }));
  }
  function flyArc(m, to, height = 2, dur = 1.2, then) { // 포물선으로 날아간다 (빙글빙글)
    const st = take(m);
    Object.assign(st, { mode: "fly", t: 0, from: m.root.position.clone(), to: to.clone(), h: height * K, dur, spinA: rnd(4, 9), then });
    anim(m, "idle", 0.1);
  }
  function setTint(m, color, amount) { // 몸 색 바꾸기 (그을음·얼음·좀비): 원래 색은 기억해 두었다 되돌린다
    m.c.root.traverse((o) => {
      if (!o.isMesh) return;
      const mt = o.material;
      if (!mt.userData.cxOrig) mt.userData.cxOrig = { c: mt.color.clone(), e: mt.emissive ? mt.emissive.clone() : null };
      const o0 = mt.userData.cxOrig;
      mt.color.copy(o0.c).lerp(new THREE.Color(color), amount);
      if (mt.emissive && o0.e) mt.emissive.copy(o0.e).lerp(new THREE.Color(color).multiplyScalar(0.3), amount);
    });
    P.get(m) && (P.get(m).tinted = true);
  }
  function clearTint(m) {
    m.c.root.traverse((o) => {
      if (!o.isMesh || !o.material.userData.cxOrig) return;
      const o0 = o.material.userData.cxOrig;
      o.material.color.copy(o0.c);
      if (o0.e) o.material.emissive.copy(o0.e);
      delete o.material.userData.cxOrig;
    });
  }
  function tickPeople(dt) {
    for (const st of P.values()) {
      const m = st.m, r = m.root;
      st.t += dt;
      if (st.mode === "run") {
        let stepLen = st.speed * dt;
        while (stepLen > 0 && st.pi < st.path.length) {
          tmpV.copy(st.path[st.pi]).sub(r.position).setY(0);
          const len = tmpV.length();
          if (len < 1e-3) { st.pi++; continue; }
          r.rotation.y = Math.atan2(tmpV.x, tmpV.z);
          const s = Math.min(len, stepLen);
          r.position.addScaledVector(tmpV.normalize(), s);
          stepLen -= s;
        }
        if (st.pi >= st.path.length) { st.mode = "idle"; anim(m, "idle", 0.2); const f = st.then; st.then = null; f?.(m); }
      } else if (st.mode === "ko") {
        const k = Math.min(st.t / 0.45, 1), e = 1 - (1 - k) * (1 - k);
        r.rotation[st.fallAxis] = st.fall * (Math.PI / 2) * e * 0.96;
        r.position.y = 0.06 * K * e;
      } else if (st.mode === "fly") {
        const k = Math.min(st.t / st.dur, 1);
        r.position.lerpVectors(st.from, st.to, k);
        r.position.y = st.from.y + (st.to.y - st.from.y) * k + st.h * 4 * k * (1 - k);
        r.rotation.x = st.spinA * k * Math.PI;
        if (k >= 1) { r.rotation.x = 0; st.mode = "idle"; const f = st.then; st.then = null; if (f) f(m); else knock(m); }
      } else if (st.mode === "float") { // 둥둥 (물·우주선·회오리) — st.at() 가 위치를 준다
        const p = st.at(st.t);
        r.position.copy(p);
        r.rotation.y += (st.spin ?? 0.6) * dt;
        if (st.lie) r.rotation.x = -Math.PI / 2 * Math.min(1, st.t);
      } else if (st.mode === "shiver") {
        r.position.x += Math.sin(st.t * 60) * 0.004;
      } else if (st.mode === "zombie") {
        zombieStep(st, dt);
      }
    }
  }

  // ───────── 카메라 흔들기 ─────────
  let shakeAmp = 0, shakeOff = V(0, 0, 0);
  function shake(amp) { shakeAmp = Math.max(shakeAmp, amp); }
  function tickShake(dt) {
    camera.position.sub(shakeOff);
    shakeAmp *= Math.pow(0.04, dt);
    if (shakeAmp < 0.002) { shakeAmp = 0; shakeOff.set(0, 0, 0); return; }
    shakeOff.set(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1)).multiplyScalar(shakeAmp);
    camera.position.add(shakeOff);
  }

  // ───────── 조명 ─────────
  const L0 = { hemi: ctx.lights.hemi.intensity, sun: ctx.lights.sun.intensity, fill: ctx.lights.fill.intensity, hemiC: ctx.lights.hemi.color.clone(), sunC: ctx.lights.sun.color.clone(), bg: scene.background.clone(), exp: ctx.renderer.toneMappingExposure, env: scene.environmentIntensity };
  let lightGoal = null;
  function lightTo(goal, speed = 1.5) { lightGoal = { ...goal, speed }; }
  function tickLight(dt) {
    if (!lightGoal) return;
    const g = lightGoal, k = 1 - Math.exp(-g.speed * dt), lt = ctx.lights;
    lt.hemi.intensity += ((g.hemi ?? L0.hemi) - lt.hemi.intensity) * k;
    lt.sun.intensity += ((g.sun ?? L0.sun) - lt.sun.intensity) * k;
    lt.fill.intensity += ((g.fill ?? L0.fill) - lt.fill.intensity) * k;
    // 주변 반사광(환경광)도 같이 — 안 줄이면 불을 꺼도 사무실이 환하다
    const envGoal = g.env ?? L0.env * Math.min(1.1, (g.hemi ?? L0.hemi) / L0.hemi);
    scene.environmentIntensity += (envGoal - scene.environmentIntensity) * k;
    lt.hemi.color.lerp(new THREE.Color(g.hemiC ?? L0.hemiC), k);
    lt.sun.color.lerp(new THREE.Color(g.sunC ?? L0.sunC), k);
    scene.background.lerp(new THREE.Color(g.bg ?? L0.bg), k);
  }

  // ───────── 시나리오 ─────────
  const S = []; // { id, emoji, name, desc, dur, cam, start, tick, end }
  let cur = null, curT = 0, auto = false, idleTimer = 0;
  const ui = { menu: null, stop: null };

  function beginScenario(sc) {
    if (cur) endScenario(true);
    cur = sc; curT = 0;
    ctx.setPaused(true);
    banner.hidden = false;
    banner.innerHTML = `<b>${sc.emoji} ${sc.name}</b><span>${sc.desc}</span><i></i>`;
    banner.style.animation = "none"; void banner.offsetWidth; banner.style.animation = "";
    if (sc.cam) ctx.flyTo(sc.cam[0], sc.cam[1]);
    ui.stop.hidden = false;
    sc.state = {};
    sc.start(sc.state);
  }
  function endScenario(silent = false) {
    if (!cur) return;
    try { cur.end?.(cur.state); } catch (e) { console.warn(e); }
    flash("#ffffff", 260, silent ? 0 : 0.9);
    cleanup();
    cur = null;
    banner.hidden = true;
    ui.stop.hidden = !auto;
    if (auto && !silent) idleTimer = 3;
  }
  function cleanup() {
    for (const q of PARTS.splice(0)) { ROOT.remove(q.s); q.s.material.dispose(); }
    for (const d of DECALS.splice(0)) { ROOT.remove(d.m); d.m.geometry.dispose(); d.m.material.dispose(); }
    for (const o of PROPS.splice(0)) { ROOT.remove(o); o.traverse?.((c) => { c.geometry?.dispose?.(); }); }
    for (const l of LIGHTS.splice(0)) ROOT.remove(l);
    for (const st of P.values()) {
      const m = st.m;
      clearTint(m);
      m.chaos = false; m.frozen = false;
      m.root.rotation.set(0, m.root.rotation.y, 0);
      m.root.scale.setScalar(1);
      m.root.visible = true;
      for (const a of Object.values(m.c.actions)) a.timeScale = 1;
    }
    P.clear();
    for (const ch of ctx.chairs()) { if (ch.userData.cxHome) { ch.position.copy(ch.userData.cxHome.p); ch.rotation.copy(ch.userData.cxHome.r); delete ch.userData.cxHome; } }
    lightGoal = { ...(dayBase() || {}), speed: 1.2 }; // 조명은 한 번에 말고 천천히 원래(그 시각의 밝기)대로
    vignette("transparent", 0);
    shakeAmp = 0; camera.position.sub(shakeOff); shakeOff.set(0, 0, 0);
    ctx.office.position.set(0, 0, 0);
    ctx.setPaused(false);
    ctx.restorePeople();
  }
  function tick(dt) {
    if (!cur) {
      if (auto && (idleTimer -= dt) <= 0) beginScenario(pick(S.filter((s) => s !== C.last)));
      return;
    }
    curT += dt;
    banner.style.setProperty("--p", `${Math.min(100, (curT / cur.dur) * 100)}%`);
    banner.querySelector("i")?.style.setProperty("--p", `${Math.min(100, (curT / cur.dur) * 100)}%`);
    try { cur.tick(cur.state, dt, curT); } catch (e) { console.warn("재난 모드 오류", e); curT = cur.dur; }
    tickPeople(dt);
    tickParts(dt);
    for (const d of DECALS) { d.t += dt; d.m.material.opacity = Math.min(d.alpha, d.t * 2 * d.alpha); }
    tickLight(dt);
    tickShake(dt);
    if (curT >= cur.dur) { C.last = cur; endScenario(); }
  }

  // ── 쓰는 도구 모음 ──
  const desks = () => ctx.seats().filter((s) => s.desk);
  const inRoom = (x, z) => V(THREE.MathUtils.clamp(x, ROOM.x0 + 0.6, ROOM.x1 - 0.6), 0, THREE.MathUtils.clamp(z, ROOM.z0 + 0.6, ROOM.z1 - 0.6));
  const randomFloor = () => V(rnd(ROOM.x0 + 1, ROOM.x1 - 1), 0, MAIN_Z + rnd(-0.3, 0.3));
  function explode(at, power = 1, color = 0xffb040) { // 번쩍 + 불덩이 + 연기 + 파편 + 충격파
    flash("#fff3d0", 90, 0.5 * power);
    shake(0.25 * power);
    SND.boom(0.3 * power);
    emit({ tex: TEX.soft(), at: at.clone().add(V(0, 0.3, 0)), life: 0.5, size: 1.6 * power, grow: 1.2, color, add: true, fadeIn: 0.02 });
    emit({ tex: TEX.ring(), at: at.clone().add(V(0, 0.15, 0)), life: 0.6, size: 0.6, grow: 5 * power, add: true, fadeIn: 0.01 });
    for (let i = 0; i < 14 * power; i++) emit({ tex: TEX.flame(), at: at.clone().add(V(rnd(-0.3, 0.3), rnd(0, 0.4), rnd(-0.3, 0.3))), vel: V(rnd(-2, 2), rnd(1, 4), rnd(-2, 2)), life: rnd(0.4, 0.9), size: rnd(0.3, 0.6), grow: 1, add: true, drag: 0.04, aspect: 0.7 });
    for (let i = 0; i < 10 * power; i++) emit({ tex: TEX.puff(), at: at.clone().add(V(0, 0.3, 0)), vel: V(rnd(-1.2, 1.2), rnd(0.5, 1.8), rnd(-1.2, 1.2)), life: rnd(1.5, 2.8), size: rnd(0.5, 0.9), grow: 2, color: 0x3a3632, alpha: 0.8, drag: 0.03, delay: 0.1 });
    for (let i = 0; i < 12 * power; i++) { // 파편 (작은 상자)
      const b = prop(new THREE.Mesh(new THREE.BoxGeometry(rnd(0.04, 0.12), rnd(0.03, 0.08), rnd(0.04, 0.12)), new THREE.MeshStandardMaterial({ color: pick([0x8a8f96, 0x5a5550, 0xd9dde2, 0x3a3d42]) })));
      b.position.copy(at).add(V(0, 0.2, 0));
      b.userData.v = V(rnd(-3, 3), rnd(2, 5), rnd(-3, 3)); b.userData.spin = V(rnd(-9, 9), rnd(-9, 9), rnd(-9, 9)); b.castShadow = true;
      DEBRIS.push(b);
    }
  }
  const DEBRIS = [];
  function tickDebris(dt) {
    for (const b of DEBRIS) {
      const v = b.userData.v; if (!v) continue;
      v.y -= 9.8 * dt;
      b.position.addScaledVector(v, dt);
      b.rotation.x += b.userData.spin.x * dt; b.rotation.y += b.userData.spin.y * dt; b.rotation.z += b.userData.spin.z * dt;
      const floorY = (b.userData.h ?? 0.03);
      if (b.position.y < floorY) { b.position.y = floorY; v.set(v.x * 0.3, Math.abs(v.y) * 0.2, v.z * 0.3); b.userData.spin.multiplyScalar(0.4); if (v.length() < 0.2) b.userData.v = null; }
    }
  }
  const nearPeople = (at, r) => present().filter((m) => m.root.position.distanceTo(at) < r);
  function fleeToDoor(m, delay = 0) {
    setTimeout(() => { if (!cur) return; runPath(m, routeFrom(m, null, true), rnd(2.2, 3), (mm) => { mm.root.visible = false; }); if (Math.random() < 0.5) shout(m, pick(["으악!", "살려줘!", "도망쳐!", "비켜요!"])); }, delay * 1000);
  }

  // ── 1. 화재 ──
  S.push({ id: "fire", emoji: "🔥", name: "화재 발생", desc: "책상에서 불이 나 번진다 — 모두 문으로 대피, 스프링클러 작동", dur: 34,
    start(s) {
      s.fires = []; s.next = 0.5; s.spr = false;
      const d = pick(desks().filter((x) => x.desk && x.tiles?.length));
      s.origin = d ?? pick(desks());
      SND.siren(6);
      lightTo({ hemiC: "#ffd2c0", sunC: "#ffb48a", hemi: L0.hemi * 0.85 }, 0.8);
      vignette("radial-gradient(ellipse at center, transparent 55%, rgba(255,60,20,.35))", 1);
    },
    tick(s, dt, t) {
      if ((s.next -= dt) <= 0 && s.fires.length < 9 && t < 18) { // 가까운 책상으로 번진다
        s.next = 1.6;
        const last = s.fires.length ? s.fires[s.fires.length - 1].at : s.origin.desk;
        const cand = desks().filter((d) => !s.fires.some((f) => f.seat === d)).sort((a, b) => a.desk.distanceTo(last) - b.desk.distanceTo(last));
        const seat = s.fires.length ? cand[(Math.random() * Math.min(3, cand.length)) | 0] : s.origin;
        if (seat) {
          const at = seat.desk.clone().setY(DH);
          const pl = light(new THREE.PointLight(0xff7a2a, 3, 4 * K, 1.6)); pl.position.copy(at).add(V(0, 0.5, 0));
          s.fires.push({ seat, at, pl, size: 0.2 });
          decal(TEX.scorch(), at.x, at.z, 1.4, DH + 0.006, 0.9);
          decal(TEX.scorch(), at.x + rnd(-0.5, 0.5), at.z + rnd(-0.5, 0.5), 1.6, 0.013, 0.7);
          for (const m of nearPeople(at, 2.6)) if (!P.has(m) || P.get(m).mode === "idle") { setTint(m, "#2a2420", 0.45); shout(m, pick(["앗 뜨거!", "불이야!!"]), "#ffdd55", "#7a1a00"); fleeToDoor(m); }
        }
      }
      if (t > 1.5 && !s.evac) { s.evac = true; present().forEach((m, i) => { if (!P.has(m)) fleeToDoor(m, 0.4 + i * 0.25); }); }
      if (t > 19 && !s.spr) { s.spr = true; SND.splash(0.08); }
      for (const f of s.fires) {
        const k = s.spr ? Math.max(0, 1 - (t - 19) / 9) : Math.min(1, f.size += dt * 0.25);
        f.pl.intensity = (2.5 + Math.random() * 1.5) * k;
        for (let n = 0; n < 2; n++) if (Math.random() < 0.95 * k) emit({ tex: TEX.flame(), at: f.at.clone().add(V(rnd(-0.5, 0.5), 0.05, rnd(-0.32, 0.32))), vel: V(rnd(-0.1, 0.1), rnd(0.9, 1.8), rnd(-0.1, 0.1)), life: rnd(0.5, 0.9), size: rnd(0.35, 0.65) * (0.6 + k), grow: -0.3, add: true, aspect: 0.7 });
        if (Math.random() < 0.18 * (s.spr ? 1.5 : k)) emit({ tex: TEX.puff(), at: f.at.clone().add(V(rnd(-0.3, 0.3), 0.9, rnd(-0.3, 0.3))), vel: V(rnd(-0.2, 0.2), rnd(0.6, 1), rnd(-0.2, 0.2)), life: rnd(2, 3), size: 0.4, grow: 2.2, color: s.spr ? 0xd8d8d8 : 0x4a4440, alpha: 0.35 });
      }
      if (s.spr && t < 31) for (let i = 0; i < 6; i++) emit({ tex: TEX.drop(), at: V(rnd(ROOM.x0, ROOM.x1), WALL_H, rnd(ROOM.z0, ROOM.z1)), vel: V(0, -7, 0), life: 0.45, size: 0.18, aspect: 0.25, alpha: 0.7 });
    } });

  // ── 2. 지진 ──
  S.push({ id: "quake", emoji: "🌋", name: "대지진", desc: "땅이 흔들리고 천장 판이 떨어진다 — 바닥이 갈라지고 사람들이 넘어진다", dur: 30,
    start(s) { s.next = 0; s.cracks = 0; SND.boom(0.4); },
    tick(s, dt, t) {
      const amp = t < 3 ? t / 3 : t < 20 ? 1 : Math.max(0, 1 - (t - 20) / 5);
      shake(0.12 * amp);
      ctx.office.position.set(Math.sin(t * 37) * 0.03 * amp, 0, Math.cos(t * 29) * 0.03 * amp);
      if (t > 1 && (s.next -= dt) <= 0 && amp > 0.3) {
        s.next = rnd(0.25, 0.6);
        const tile = prop(new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.03, 0.6), new THREE.MeshStandardMaterial({ color: 0xe9ebec, roughness: 0.9 })));
        tile.position.set(rnd(ROOM.x0 + 1, ROOM.x1 - 1), WALL_H + 0.5, rnd(ROOM.z0 + 1, ROOM.z1 - 1));
        tile.castShadow = true;
        tile.userData = { v: V(0, -1, 0), spin: V(rnd(-3, 3), 0, rnd(-3, 3)), h: 0.02 };
        DEBRIS.push(tile);
        setTimeout(() => { if (!cur) return; emit({ tex: TEX.puff(), at: tile.position.clone(), vel: V(0, 0.4, 0), life: 1.5, size: 0.5, grow: 2, color: 0xcfc8bd, alpha: 0.7 }); SND.pop(0.08, 140); }, 900);
        for (const m of nearPeople(tile.position.clone().setY(0), 0.8)) if (!P.has(m) || P.get(m).mode !== "ko") { take(m); setTimeout(() => cur && knock(m), 700); }
      }
      if (t > 4 && s.cracks < 8 && Math.random() < dt * 0.8) { s.cracks++; const p = randomFloor(); decal(TEX.crack(), p.x + rnd(-3, 3), p.z + rnd(-4, 4), rnd(1.6, 2.6), 0.014, 0.95); SND.boom(0.15); shake(0.3); }
      if (t > 2 && !s.panic) { s.panic = true; present().forEach((m) => { if (Math.random() < 0.55) { const st = take(m); st.mode = "shiver"; shout(m, pick(["흔들려!", "책상 밑으로!", "어어어"]), "#fff", "#333"); } }); }
      if (t > 6 && Math.random() < dt * 1.2) { const v = present().filter((m) => P.get(m)?.mode === "shiver"); if (v.length) knock(pick(v)); }
    },
    end() { ctx.office.position.set(0, 0, 0); } });

  // ── 3. 홍수 ──
  S.push({ id: "flood", emoji: "🌊", name: "사무실 홍수", desc: "물이 차오른다 — 의자·쓰레기통이 떠다니고 사람들이 둥둥", dur: 34,
    start(s) {
      const g = new THREE.PlaneGeometry(ROOM.x1 - ROOM.x0, ROOM.z1 - ROOM.z0, 60, 60);
      g.rotateX(-Math.PI / 2);
      s.water = prop(new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color: 0x3f8fd0, transparent: true, opacity: 0.62, roughness: 0.15, metalness: 0.1 })));
      s.water.position.set(RCX, 0, 0);
      s.base = g.attributes.position.array.slice();
      s.floaters = [];
      for (let i = 0; i < 26; i++) { // 떠다니는 것: 쓰레기통·과자 봉지·종이컵·서류
        const kind = i % 4, mesh = kind === 0 ? new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.12, 0.3, 12), new THREE.MeshStandardMaterial({ color: 0x2b2e33 }))
          : kind === 1 ? new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.05, 0.27), new THREE.MeshStandardMaterial({ color: pick([0xe63b2e, 0xf5c242, 0x2f7de1, 0x3aa655]) }))
          : kind === 2 ? new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.035, 0.1, 10), new THREE.MeshStandardMaterial({ color: 0xffffff }))
          : new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.01, 0.3), new THREE.MeshStandardMaterial({ color: 0xfbfbf6 }));
        prop(mesh);
        s.floaters.push({ mesh, x: rnd(ROOM.x0 + 0.5, ROOM.x1 - 0.5), z: rnd(ROOM.z0 + 0.5, ROOM.z1 - 0.5), ph: rnd(0, 6), vx: rnd(-0.15, 0.15), vz: rnd(-0.15, 0.15), rot: rnd(-1, 1) });
      }
      s.duck = prop(makeDuck()); s.duck.scale.setScalar(2.2 * K);
      s.level = 0;
      SND.splash(0.15);
    },
    tick(s, dt, t) {
      const top = DH + 0.25 * K;
      s.level = t < 14 ? (t / 14) * top : t < 26 ? top : Math.max(0, top * (1 - (t - 26) / 6));
      s.water.position.y = s.level;
      const a = s.water.geometry.attributes.position, arr = a.array;
      for (let i = 0; i < arr.length; i += 3) arr[i + 1] = s.base[i + 1] + Math.sin(arr[i] * 1.7 + t * 2) * 0.03 + Math.cos(arr[i + 2] * 1.3 + t * 1.6) * 0.03;
      a.needsUpdate = true; s.water.geometry.computeVertexNormals();
      for (const f of s.floaters) { f.x += f.vx * dt; f.z += f.vz * dt; f.mesh.position.set(f.x, Math.max(0.05, s.level + Math.sin(t * 2 + f.ph) * 0.03), f.z); f.mesh.rotation.y += f.rot * dt * 0.3; f.mesh.visible = s.level > 0.08; }
      s.duck.position.set(RCX + Math.sin(t * 0.25) * 4, s.level, MAIN_Z + Math.cos(t * 0.2) * 1.2); s.duck.rotation.y = t * 0.3; s.duck.visible = s.level > 0.2;
      if (t > 4 && !s.lift) { // 물에 뜬 사람들: 누워서 둥둥, 천천히 떠내려간다
        s.lift = true;
        present().forEach((m, i) => {
          const st = take(m), x0 = m.root.position.x, z0 = m.root.position.z, ph = rnd(0, 6), dx = rnd(-0.15, 0.15), dz = rnd(-0.1, 0.1);
          Object.assign(st, { mode: "float", lie: i % 3 !== 0, spin: rnd(-0.4, 0.4), at: (tt) => V(x0 + dx * tt, Math.max(0, s.level - 0.15 * K) + Math.sin(tt * 2 + ph) * 0.04, z0 + dz * tt) });
          if (i % 4 === 0) setTimeout(() => cur && shout(m, pick(["어푸어푸", "수영 못해요!", "튜브 주세요!", "물이 차가워"]), "#e6f4ff", "#174a7a"), rnd(1, 6) * 1000);
        });
      }
      if (Math.random() < dt * 3 && s.level > 0.1) emit({ tex: TEX.soft(), at: V(rnd(ROOM.x0, ROOM.x1), s.level + 0.02, rnd(ROOM.z0, ROOM.z1)), life: 0.8, size: 0.25, grow: 2.5, color: 0xd8efff, alpha: 0.6 });
    } });
  function makeDuck() {
    const g = new THREE.Group(), y = new THREE.MeshStandardMaterial({ color: 0xffd23a, roughness: 0.5 }), o = new THREE.MeshStandardMaterial({ color: 0xff8a1a });
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.22, 20, 14), y); body.scale.set(1.2, 0.8, 1); body.position.y = 0.12; g.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.13, 18, 12), y); head.position.set(0.18, 0.32, 0); g.add(head);
    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.12, 10), o); beak.rotation.z = -Math.PI / 2; beak.position.set(0.32, 0.3, 0); g.add(beak);
    for (const s of [-1, 1]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 6), new THREE.MeshBasicMaterial({ color: 0x111111 })); e.position.set(0.27, 0.36, s * 0.07); g.add(e); }
    return g;
  }

  // ── 4. 한파 ──
  S.push({ id: "freeze", emoji: "🥶", name: "기록적 한파", desc: "사무실에 눈이 내리고 하나둘 꽁꽁 얼어붙는다", dur: 34,
    start(s) {
      lightTo({ hemiC: "#cfe6ff", sunC: "#bfe0ff", hemi: L0.hemi * 1.1, sun: L0.sun * 0.7, bg: "#dfeaf3" }, 0.6);
      vignette("radial-gradient(ellipse at center, transparent 50%, rgba(200,230,255,.75))", 1);
      s.snowCover = prop(new THREE.Mesh(new THREE.PlaneGeometry(ROOM.x1 - ROOM.x0, ROOM.z1 - ROOM.z0), new THREE.MeshStandardMaterial({ color: 0xf6faff, transparent: true, opacity: 0, roughness: 1 })));
      s.snowCover.rotation.x = -Math.PI / 2; s.snowCover.position.set(RCX, 0.016, 0);
      s.order = present().sort(() => Math.random() - 0.5); s.next = 6; s.ice = [];
      SND.whoosh(0.14);
    },
    tick(s, dt, t) {
      for (let i = 0; i < 10; i++) emit({ tex: TEX.snow(), at: V(rnd(ROOM.x0, ROOM.x1), WALL_H + 0.5, rnd(ROOM.z0, ROOM.z1)), vel: V(rnd(-0.3, 0.3), rnd(-1.1, -0.6), rnd(-0.2, 0.2)), life: 3.2, size: rnd(0.05, 0.1), alpha: 0.95, fadeIn: 0.05 });
      s.snowCover.material.opacity = Math.min(0.85, t / 18);
      if (t > 2 && !s.shiver) { s.shiver = true; present().forEach((m) => { const st = take(m); st.mode = "shiver"; setTint(m, "#9fd0ff", 0.25); if (Math.random() < 0.3) shout(m, pick(["추워…", "덜덜덜", "히터 켜요!", "손 시려"]), "#e8f6ff", "#1d4f80"); }); }
      if (t > 5 && (s.next -= dt) <= 0 && s.order.length) { // 하나씩 얼음 덩어리 속으로
        s.next = rnd(0.6, 1.4);
        const m = s.order.shift(), st = take(m);
        st.mode = "idle"; m.frozen = true; setTint(m, "#7fc0ff", 0.55);
        const box = prop(new THREE.Mesh(new THREE.BoxGeometry(0.62 * K, H * 1.08, 0.55 * K), new THREE.MeshPhysicalMaterial({ color: 0x9fd8ff, transparent: true, opacity: 0.62, roughness: 0.05, metalness: 0, clearcoat: 1, emissive: 0x2a6a9a, emissiveIntensity: 0.35 })));
        box.position.copy(m.root.position).add(V(0, H * 0.54, 0)); box.rotation.y = m.root.rotation.y + rnd(-0.2, 0.2);
        box.scale.set(0.01, 0.01, 0.01); s.ice.push({ box, t: 0 });
        SND.zap(0.06);
        for (let i = 0; i < 8; i++) emit({ tex: TEX.star(), at: box.position.clone().add(V(rnd(-0.3, 0.3), rnd(-0.4, 0.5), rnd(-0.3, 0.3))), life: 0.8, size: 0.08, color: 0xdff4ff, add: true });
      }
      for (const i of s.ice) { i.t += dt; const k = Math.min(1, i.t / 0.35); i.box.scale.setScalar(1 - Math.pow(1 - k, 3)); }
    } });

  // ── 5. 운석 ──
  S.push({ id: "meteor", emoji: "☄️", name: "운석 낙하", desc: "하늘에서 불덩이가 쏟아진다 — 쾅! 근처 사람들은 날아간다", dur: 30,
    start(s) { s.rocks = []; s.next = 1; lightTo({ hemiC: "#ffc8a0", bg: "#3a2a2a", hemi: L0.hemi * 0.7, sun: L0.sun * 0.6, sunC: "#ff9a6a" }, 0.8); vignette("radial-gradient(ellipse at center, transparent 50%, rgba(80,20,0,.4))", 1); },
    tick(s, dt, t) {
      if ((s.next -= dt) <= 0 && t < 24) {
        s.next = rnd(1.2, 2.6);
        const target = Math.random() < 0.6 && present().length ? pick(present()).root.position.clone().add(V(rnd(-0.8, 0.8), 0, rnd(-0.8, 0.8))) : randomFloor().add(V(rnd(-3, 3), 0, rnd(-4, 4)));
        const at = inRoom(target.x, target.z), from = at.clone().add(V(rnd(-6, 6), 14, rnd(-6, 6)));
        const rock = prop(new THREE.Mesh(new THREE.IcosahedronGeometry(0.28 * K, 0), new THREE.MeshStandardMaterial({ color: 0x5a3a2a, emissive: 0xff4a10, emissiveIntensity: 0.9, flatShading: true })));
        rock.position.copy(from);
        const pl = light(new THREE.PointLight(0xff7a2a, 4, 6, 1.5));
        s.rocks.push({ rock, pl, from, at, t: 0, dur: rnd(0.9, 1.3) });
        SND.whoosh(0.16);
      }
      for (let i = s.rocks.length - 1; i >= 0; i--) {
        const r = s.rocks[i]; r.t += dt;
        const k = Math.min(1, r.t / r.dur);
        r.rock.position.lerpVectors(r.from, r.at, k * k);
        r.rock.rotation.x += dt * 6; r.rock.rotation.y += dt * 4;
        r.pl.position.copy(r.rock.position);
        emit({ tex: TEX.flame(), at: r.rock.position.clone(), vel: V(0, 0.4, 0), life: 0.5, size: 0.45, grow: 0.6, add: true, aspect: 0.8 });
        emit({ tex: TEX.puff(), at: r.rock.position.clone(), life: 1.2, size: 0.35, grow: 2, color: 0x3a3330, alpha: 0.6 });
        if (k >= 1) {
          explode(r.at, 1.2);
          decal(TEX.scorch(), r.at.x, r.at.z, 2.4, 0.015, 0.95); decal(TEX.crack(), r.at.x, r.at.z, 2.2, 0.017, 0.9);
          r.rock.position.copy(r.at).setY(0.18); r.rock.material.emissiveIntensity = 0.4;
          for (const m of nearPeople(r.at, 2.4 * K)) {
            const away = m.root.position.clone().sub(r.at).setY(0); if (away.lengthSq() < 1e-4) away.set(rnd(-1, 1), 0, rnd(-1, 1));
            away.normalize().multiplyScalar(rnd(1.8, 3.2) * K);
            setTint(m, "#2a2420", 0.4);
            flyArc(m, inRoom(m.root.position.x + away.x, m.root.position.z + away.z), rnd(1.5, 2.5), rnd(0.9, 1.3));
            if (Math.random() < 0.6) shout(m, pick(["으아악!", "날아간다~", "쾅!?"]), "#ffe066", "#6a2a00");
          }
          ROOT.remove(r.pl); s.rocks.splice(i, 1);
        }
      }
      if (t > 3 && !s.run) { s.run = true; present().forEach((m) => { if (!P.has(m) && Math.random() < 0.5) runPath(m, [m.seat.approach.clone(), V(m.seat.aisleX, 0, m.seat.approach.z), V(m.seat.aisleX, 0, MAIN_Z + rnd(-0.3, 0.3))], rnd(2, 2.8)); }); }
    } });

  // ── 6. 토네이도 ──
  S.push({ id: "tornado", emoji: "🌪️", name: "실내 토네이도", desc: "회오리가 사무실을 휩쓸고 지나간다 — 의자·서류·사람이 빙글빙글", dur: 30,
    start(s) {
      s.funnel = new THREE.Group(); prop(s.funnel);
      for (let i = 0; i < 9; i++) { const r = 0.25 + i * 0.22, ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.06 + i * 0.02, 6, 28), new THREE.MeshBasicMaterial({ color: 0x8f969c, transparent: true, opacity: 0.45, depthWrite: false })); ring.rotation.x = Math.PI / 2; ring.position.y = 0.2 + i * 0.36; s.funnel.add(ring); }
      s.x = ROOM.x0 + 1.5; s.z = ROOM.z0 + 2; s.caught = new Set(); s.chairs = [];
      SND.whoosh(0.2);
    },
    tick(s, dt, t) {
      const k = t / 26;
      s.x = THREE.MathUtils.lerp(ROOM.x0 + 1.5, ROOM.x1 - 1.5, k); s.z = Math.sin(t * 0.5) * (ROOM.z1 - 2);
      s.funnel.position.set(s.x, 0, s.z);
      s.funnel.children.forEach((r, i) => { r.rotation.z += dt * (6 - i * 0.4); r.position.x = Math.sin(t * 3 + i) * 0.08 * i; });
      if (Math.random() < 0.9) SND && Math.random() < dt && SND.whoosh(0.08);
      for (let i = 0; i < 4; i++) { const a = rnd(0, 6.28), h = rnd(0, 3), r = 0.3 + h * 0.6; emit({ tex: Math.random() < 0.5 ? TEX.paper() : TEX.puff(), at: V(s.x + Math.cos(a) * r, h, s.z + Math.sin(a) * r), vel: V(-Math.sin(a) * 4, 1.2, Math.cos(a) * 4), life: 0.9, size: rnd(0.08, 0.2), color: 0xffffff, alpha: 0.9, spin: 6, aspect: 0.75 }); }
      for (const ch of ctx.chairs()) { // 근처 의자는 빨려 올라가 빙글빙글
        if (!ch.userData.cxHome && ch.position.distanceTo(V(s.x, 0, s.z)) < 1.6) { ch.userData.cxHome = { p: ch.position.clone(), r: ch.rotation.clone() }; s.chairs.push({ ch, a: rnd(0, 6.28), h: rnd(0.5, 2.6), r: rnd(0.6, 1.2) }); }
      }
      for (const c of s.chairs) { c.a += dt * 5; c.ch.position.set(s.x + Math.cos(c.a) * c.r, c.h + Math.sin(c.a * 2) * 0.2, s.z + Math.sin(c.a) * c.r); c.ch.rotation.y += dt * 8; c.ch.rotation.x = Math.sin(c.a) * 0.6; }
      for (const m of present()) {
        if (s.caught.has(m) || m.root.position.distanceTo(V(s.x, 0, s.z)) > 1.4) continue;
        s.caught.add(m);
        const st = take(m), a0 = rnd(0, 6.28), r0 = rnd(0.5, 1), h0 = rnd(0.8, 2.6);
        shout(m, pick(["으아아아", "빙글빙글~", "멀미나!"]), "#fff", "#333");
        Object.assign(st, { mode: "float", spin: 9, at: (tt) => V(s.x + Math.cos(a0 + tt * 5) * r0, Math.min(h0, tt * 1.5), s.z + Math.sin(a0 + tt * 5) * r0) });
        setTimeout(() => { if (!cur) return; const out = V(rnd(-1, 1), 0, rnd(-1, 1)).normalize().multiplyScalar(rnd(2.5, 4)); P.get(m).from = null; m.root.position.y = h0; flyArc(m, inRoom(s.x + out.x, s.z + out.z), 1.2, 1.1); }, rnd(2.5, 4.5) * 1000);
      }
      if (t > 1 && !s.flee) { s.flee = true; present().forEach((m) => { if (!P.has(m) && Math.random() < 0.4) runPath(m, [m.seat.approach.clone(), V(m.seat.aisleX, 0, m.seat.approach.z)], 2.4); }); }
    } });

  // ── 7. 좀비 ──
  function zombieStep(st, dt) {
    const m = st.m, r = m.root;
    const prey = present().filter((o) => !o.zombie && o !== m);
    if (!prey.length) return;
    const tgt = prey.reduce((a, b) => (a.root.position.distanceTo(r.position) < b.root.position.distanceTo(r.position) ? a : b));
    tmpV.copy(tgt.root.position).sub(r.position).setY(0);
    const d = tmpV.length();
    r.rotation.y = Math.atan2(tmpV.x, tmpV.z) + Math.sin(st.t * 3) * 0.15;
    if (d > 0.45 * K) r.position.addScaledVector(tmpV.normalize(), Math.min(d, 1.05 * K * dt));
    else if (!tgt.zombie) infect(tgt);
    if (Math.random() < dt * 0.15) { shout(m, pick(["으어어…", "커피…", "야근…", "결재…"]), "#c8f0a0", "#1e3a10"); SND.groan(0.05); }
  }
  function infect(m) {
    m.zombie = true;
    const st = take(m);
    shout(m, "으악! 물렸다!", "#fff", "#333");
    setTimeout(() => { if (!cur || !P.has(m)) return; setTint(m, "#5fd03a", 0.75); st.mode = "zombie"; anim(m, "walk", 0.3, 0.55); for (let i = 0; i < 6; i++) emit({ tex: TEX.puff(), at: headPos(m), vel: V(rnd(-0.3, 0.3), 0.5, rnd(-0.3, 0.3)), life: 1.2, size: 0.25, grow: 2, color: 0x7fe050, alpha: 0.6 }); }, 900);
  }
  S.push({ id: "zombie", emoji: "🧟", name: "좀비 사태", desc: "누군가 초록색으로 변했다… 닿으면 옮는다! 마지막엔 백신 투하", dur: 36,
    start(s) { const p = present().sort(() => Math.random() - 0.5); if (!p.length) return; p.slice(0, 2).forEach(infect); lightTo({ hemiC: "#c8f0b0", hemi: L0.hemi * 0.6, sun: L0.sun * 0.6, bg: "#2a3a24" }, 0.8); vignette("radial-gradient(ellipse at center, transparent 45%, rgba(40,90,20,.5))", 1); SND.groan(0.08); },
    tick(s, dt, t) {
      if (t > 3 && !s.flee) { s.flee = true; }
      for (const m of present()) { // 사람들은 가장 가까운 좀비에게서 멀어진다
        if (m.zombie) continue;
        const zs = present().filter((o) => o.zombie);
        if (!zs.length) break;
        const z = zs.reduce((a, b) => (a.root.position.distanceTo(m.root.position) < b.root.position.distanceTo(m.root.position) ? a : b));
        const d = z.root.position.distanceTo(m.root.position);
        if (d < 2.4 * K && (!P.has(m) || P.get(m).mode === "idle")) {
          const away = m.root.position.clone().sub(z.root.position).setY(0).normalize().multiplyScalar(rnd(2, 3.5));
          runPath(m, [inRoom(m.root.position.x + away.x, m.root.position.z + away.z)], rnd(1.8, 2.4));
          if (Math.random() < 0.25) shout(m, pick(["좀비다!", "오지 마!", "꺄악!"]), "#fff", "#333");
        }
      }
      if (t > 29 && !s.cure) { // 백신 투하: 초록빛이 걷히고 모두 털썩
        s.cure = true; flash("#e8fff0", 400, 0.9); SND.pop(0.2, 900);
        word("💉 백신 투하!", V(RCX, 2.5, 0), 0.1, "#ffffff", "#1a7a3a", 3);
        for (const m of present()) { if (m.zombie) { m.zombie = false; clearTint(m); knock(m); } }
      }
    },
    end() { for (const m of crew) m.zombie = false; } });

  // ── 8. UFO ──
  S.push({ id: "ufo", emoji: "🛸", name: "UFO 납치", desc: "외계인이 한 명씩 빨아올린다… 그리고 하늘에서 돌려보낸다", dur: 34,
    start(s) {
      s.ufo = prop(makeUFO()); s.ufo.position.set(RCX, 9, -2);
      s.beam = prop(new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.9, 1, 24, 1, true), new THREE.MeshBasicMaterial({ color: 0x9dff9a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })));
      s.pl = light(new THREE.PointLight(0x9dff9a, 0, 6, 1.4));
      s.queue = present().sort(() => Math.random() - 0.5).slice(0, 6); s.taken = []; s.phase = "arrive"; s.pt = 0;
      lightTo({ hemi: L0.hemi * 0.6, sun: L0.sun * 0.5, bg: "#1b2433", hemiC: "#c8d8ff" }, 0.8);
      SND.whoosh(0.15);
    },
    tick(s, dt, t) {
      const u = s.ufo;
      u.rotation.y += dt * 1.5;
      u.children.forEach((c, i) => { if (c.userData.blink) c.material.emissiveIntensity = 0.5 + 0.5 * Math.sin(t * 8 + i); });
      s.pt += dt;
      if (s.phase === "arrive") { u.position.y = THREE.MathUtils.lerp(9, WALL_H + 1.3, Math.min(1, s.pt / 3)); if (s.pt > 3) { s.phase = "seek"; s.pt = 0; } }
      else if (s.phase === "seek") {
        const m = s.queue[0];
        if (!m || t > 24) { s.phase = "return"; s.pt = 0; return; }
        const goal = m.root.position.clone().setY(WALL_H + 1.3);
        u.position.lerp(goal, 1 - Math.exp(-2.5 * dt));
        if (u.position.distanceTo(goal) < 0.1 || s.pt > 2.5) {
          s.phase = "beam"; s.pt = 0; const st = take(m); const p0 = m.root.position.clone();
          shout(m, pick(["어어어?", "내려줘요!", "외계인이다!"]), "#d8ffd0", "#0a3a10");
          SND.zap(0.1);
          Object.assign(st, { mode: "float", spin: 3, at: (tt) => V(p0.x, Math.min(WALL_H + 0.9, tt * tt * 0.9), p0.z) });
          s.cur = m;
        }
      } else if (s.phase === "beam") {
        const m = s.cur;
        s.beam.material.opacity = 0.35; s.pl.intensity = 3;
        const top = u.position.y - 0.2, h = top;
        s.beam.scale.set(1, h, 1); s.beam.position.set(u.position.x, h / 2, u.position.z); s.pl.position.set(u.position.x, 1, u.position.z);
        if (m.root.position.y > WALL_H + 0.8 || s.pt > 3.5) { m.root.visible = false; s.taken.push(m); s.queue.shift(); s.phase = "seek"; s.pt = 0; s.beam.material.opacity = 0; s.pl.intensity = 0; SND.pop(0.12, 1200); }
      } else if (s.phase === "return") { // 다 데려갔다가 하늘에서 돌려보낸다 (털썩)
        if (!s.dropped) {
          s.dropped = true;
          s.taken.forEach((m, i) => setTimeout(() => {
            if (!cur) return; const st = P.get(m); m.root.visible = true; const x = m.seat.approach.x, z = m.seat.approach.z;
            Object.assign(st, { mode: "float", spin: 6, at: (tt) => V(x, Math.max(0, 5 - tt * tt * 5), z) });
            setTimeout(() => { if (!cur) return; m.root.position.y = 0; knock(m); SND.pop(0.1, 200); emit({ tex: TEX.puff(), at: V(x, 0.1, z), life: 1, size: 0.5, grow: 2, color: 0xdddddd, alpha: 0.7 }); }, 1000);
          }, i * 500));
        }
        if (s.pt > 4) u.position.y += dt * 6;
      }
    } });
  function makeUFO() {
    const g = new THREE.Group();
    const hull = new THREE.Mesh(new THREE.SphereGeometry(1.1, 32, 12), new THREE.MeshStandardMaterial({ color: 0x9aa4b0, metalness: 0.8, roughness: 0.3 })); hull.scale.set(1, 0.22, 1); g.add(hull);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.5, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshPhysicalMaterial({ color: 0x9dffda, transparent: true, opacity: 0.55, roughness: 0.05 })); dome.position.y = 0.12; g.add(dome);
    for (let i = 0; i < 10; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: [0xff4a4a, 0x4aff7a, 0x4ab0ff][i % 3], emissiveIntensity: 1 })); const a = (i / 10) * Math.PI * 2; b.position.set(Math.cos(a) * 0.95, -0.02, Math.sin(a) * 0.95); b.userData.blink = true; g.add(b); }
    return g;
  }

  // ── 9. 정전·귀신 ──
  S.push({ id: "ghost", emoji: "👻", name: "정전과 귀신", desc: "불이 꺼지고 모니터 빛만… 하얀 무언가가 떠다닌다", dur: 32,
    start(s) {
      lightTo({ hemi: 0.05, sun: 0.02, fill: 0.02, bg: "#07090f", hemiC: "#5a6a9a" }, 3);
      vignette("radial-gradient(ellipse at center, transparent 35%, rgba(0,0,10,.75))", 1);
      s.ghosts = [0, 1, 2].map((i) => emit({ tex: TEX.ghost(), at: V(rnd(ROOM.x0 + 2, ROOM.x1 - 2), 1.2, rnd(-4, 4)), life: 9999, size: 0.9 * K, aspect: 0.8, alpha: 0.85, fadeIn: 0.001, delay: 3 + i * 4 }));
      s.gp = s.ghosts.map(() => ({ x: rnd(ROOM.x0 + 2, ROOM.x1 - 2), z: rnd(-4, 4), tx: 0, tz: 0, t: 0 }));
      s.scared = new Set(); s.flick = 0;
      SND.groan(0.06);
    },
    tick(s, dt, t) {
      if ((s.flick -= dt) <= 0) { s.flick = rnd(2, 6); if (Math.random() < 0.5) { flash("#cfd8ff", 70, 0.5); setTimeout(() => flash("#cfd8ff", 60, 0.35), 160); } }
      s.ghosts.forEach((g, i) => {
        const q = s.gp[i];
        q.t -= dt;
        if (q.t <= 0) { q.t = rnd(2, 4); const v = pick(present()); if (v) { q.tx = v.root.position.x; q.tz = v.root.position.z; } else { q.tx = rnd(ROOM.x0, ROOM.x1); q.tz = rnd(-4, 4); } }
        q.x += (q.tx - q.x) * Math.min(1, dt * 0.8); q.z += (q.tz - q.z) * Math.min(1, dt * 0.8);
        g.s.position.set(q.x, 1.1 + Math.sin(t * 2 + i) * 0.15, q.z);
        if (g.age > 0) for (const m of nearPeople(V(q.x, 0, q.z), 1.1 * K)) {
          if (s.scared.has(m)) continue;
          s.scared.add(m);
          shout(m, pick(["으아아악!!", "귀, 귀신!", "엄마!!", "히익"]), "#ffffff", "#000000");
          if (Math.random() < 0.5) knock(m); else fleeToDoor(m);
        }
      });
    } });

  // ── 10. 킹 염숭이 ──
  S.push({ id: "kong", emoji: "🦍", name: "킹 염숭이", desc: "염숭이가 거대해졌다! 쿵쿵 걸을 때마다 사람들이 날아간다", dur: 32,
    start(s) {
      s.k = crew.find((m) => m.name === "염숭이" && m.c);
      if (!s.k) { s.k = pick(present()); }
      const st = take(s.k);
      s.k.root.visible = true;
      s.path = [V(ROOM.x0 + 2, 0, MAIN_Z), V(-1, 0, MAIN_Z + 2.5), V(2.5, 0, MAIN_Z - 2.5), V(ROOM.x1 - 2, 0, MAIN_Z)];
      s.k.root.position.copy(s.path[0]); s.pi = 1; s.step = 0; s.scale = 1;
      anim(s.k, "walk", 0.2, 0.5);
      st.mode = "kong";
      SND.boom(0.3);
      lightTo({ hemiC: "#ffe2c8", hemi: L0.hemi * 0.9 }, 1);
    },
    tick(s, dt, t) {
      const k = s.k, r = k.root;
      s.scale = Math.min(6, s.scale + dt * 2.5);
      r.scale.setScalar(s.scale);
      if (t > 2) {
        const goal = s.path[s.pi];
        if (goal) {
          tmpV.copy(goal).sub(r.position).setY(0);
          const d = tmpV.length();
          r.rotation.y = Math.atan2(tmpV.x, tmpV.z);
          r.position.addScaledVector(tmpV.normalize(), Math.min(d, 1.1 * dt));
          if (d < 0.2) s.pi++;
        }
        if ((s.step -= dt) <= 0) { // 쿵!
          s.step = 1.0;
          shake(0.35); SND.boom(0.25);
          const foot = r.position.clone();
          emit({ tex: TEX.ring(), at: foot.clone().setY(0.1), life: 0.6, size: 1, grow: 4, add: true, fadeIn: 0.01 });
          for (let i = 0; i < 6; i++) emit({ tex: TEX.puff(), at: foot.clone().add(V(rnd(-1, 1), 0.1, rnd(-1, 1))), vel: V(rnd(-1, 1), 0.6, rnd(-1, 1)), life: 1.4, size: 0.6, grow: 2, color: 0xcfc8bd, alpha: 0.7 });
          decal(TEX.crack(), foot.x, foot.z, 2, 0.015, 0.8);
          for (const m of nearPeople(foot, 2.6)) {
            if (m === k || (P.get(m)?.mode && P.get(m).mode !== "idle" && P.get(m).mode !== "run")) continue;
            const away = m.root.position.clone().sub(foot).setY(0).normalize().multiplyScalar(rnd(2, 3.5));
            flyArc(m, inRoom(m.root.position.x + away.x, m.root.position.z + away.z), rnd(1.5, 2.6), 1.1);
            if (Math.random() < 0.5) shout(m, pick(["으악!", "염숭이 진정해!", "바나나 줄게!"]), "#fff", "#333");
          }
        }
        if (Math.random() < dt * 0.5) word("우끼끼!!", headPos(k).add(V(0, 0.5, 0)), 0.11, "#ffe066", "#5a3000", 1.6);
      }
      if (t > 4 && !s.flee) { s.flee = true; present().forEach((m) => { if (m !== k && !P.has(m) && Math.random() < 0.6) runPath(m, [m.seat.approach.clone(), V(m.seat.aisleX, 0, m.seat.approach.z), V(m.seat.aisleX, 0, MAIN_Z)], rnd(2, 3)); }); }
      if (t > 27) { s.scale = Math.max(1, s.scale - dt * 6); r.scale.setScalar(s.scale); }
    } });

  // ── 11. 종이공 대난투 ──
  S.push({ id: "paper", emoji: "📄", name: "종이공 대난투", desc: "두 편으로 갈라져 종이공을 던진다 — 세 번 맞으면 기절! 끝까지 남는 편이 이긴다", dur: 40,
    start(s) {
      const p = present();
      s.team = new Map(); s.hits = new Map(); s.balls = [];
      p.forEach((m) => { s.team.set(m, m.seat.desk.x < RCX ? "A" : "B"); s.hits.set(m, 0); });
      p.forEach((m, i) => { const t2 = s.team.get(m), x = t2 === "A" ? rnd(ROOM.x0 + 1.5, RCX - 2) : rnd(RCX + 2, ROOM.x1 - 1.5); runPath(m, [m.seat.approach.clone(), V(m.seat.aisleX, 0, m.seat.approach.z), V(m.seat.aisleX, 0, MAIN_Z), V(x, 0, MAIN_Z + rnd(-1.2, 1.2))], rnd(2, 2.6)); });
      s.cool = new Map();
      word("A팀 vs B팀!", V(RCX, 2.6, MAIN_Z), 0.1, "#ffffff", "#2b4a8a", 3);
    },
    tick(s, dt, t) {
      if (t < 4) return;
      const alive = [...s.team.keys()].filter((m) => s.hits.get(m) < 3);
      const A = alive.filter((m) => s.team.get(m) === "A"), B = alive.filter((m) => s.team.get(m) === "B");
      if ((!A.length || !B.length) && !s.done) {
        s.done = true;
        const win = A.length ? "A팀" : "B팀";
        word(`🏆 ${win} 승리!`, V(RCX, 2.4, MAIN_Z), 0.12, "#ffd84a", "#5a3a00", 6);
        for (const m of alive) { shout(m, pick(["이겼다!", "만세!", "예스!"]), "#ffe066", "#5a3a00", 2.5); }
        SND.pop(0.2, 900);
      }
      if (s.done) return;
      for (const m of alive) { // 서서 상대를 보며 던진다
        const st = P.get(m); if (!st || st.mode !== "idle") continue;
        const foes = s.team.get(m) === "A" ? B : A;
        if (!foes.length) continue;
        const f = foes.reduce((a, b) => (a.root.position.distanceTo(m.root.position) < b.root.position.distanceTo(m.root.position) ? a : b));
        tmpV.copy(f.root.position).sub(m.root.position);
        m.root.rotation.y = Math.atan2(tmpV.x, tmpV.z);
        const c = (s.cool.get(m) ?? rnd(0.5, 2.5)) - dt;
        s.cool.set(m, c);
        if (c <= 0) {
          s.cool.set(m, rnd(1.2, 2.6));
          const from = m.root.position.clone().add(V(0, 0.75 * K, 0)), to = f.root.position.clone().add(V(rnd(-0.25, 0.25), 0.7 * K, rnd(-0.25, 0.25)));
          const ball = prop(new THREE.Mesh(new THREE.IcosahedronGeometry(0.06 * K, 1), new THREE.MeshStandardMaterial({ color: 0xf8f8f2, flatShading: true, roughness: 1 })));
          ball.position.copy(from);
          s.balls.push({ ball, from, to, t: 0, dur: from.distanceTo(to) / 6 + 0.25, target: f, hit: Math.random() < 0.65 });
          SND.pop(0.04, 500);
        }
      }
      for (let i = s.balls.length - 1; i >= 0; i--) {
        const b = s.balls[i]; b.t += dt;
        const k = Math.min(1, b.t / b.dur);
        b.ball.position.lerpVectors(b.from, b.hit ? b.to : b.to.clone().add(V(0.6, -0.3, 0.4)), k); b.ball.position.y += 0.8 * 4 * k * (1 - k);
        b.ball.rotation.x += dt * 12;
        if (k >= 1) {
          if (b.hit && s.hits.get(b.target) < 3 && P.get(b.target)?.mode === "idle") {
            const n = s.hits.get(b.target) + 1; s.hits.set(b.target, n);
            word(pick(["퍽!", "팍!", "뽁!"]), b.to.clone(), 0.05, "#ffffff", "#c0392b", 0.8);
            SND.pop(0.08, 300);
            if (n >= 3) { knock(b.target); shout(b.target, pick(["으윽… 당했다", "나 빠질게…", "억!"]), "#fff", "#333"); }
            else { b.target.root.position.x += rnd(-0.08, 0.08); }
          }
          b.ball.position.y = 0.05;
          s.balls.splice(i, 1);
        }
      }
      // 가끔 자리 옮기기
      if (Math.random() < dt * 0.6 && alive.length) { const m = pick(alive); if (P.get(m)?.mode === "idle") { const x = s.team.get(m) === "A" ? rnd(ROOM.x0 + 1.5, RCX - 2) : rnd(RCX + 2, ROOM.x1 - 1.5); runPath(m, [V(x, 0, MAIN_Z + rnd(-1.2, 1.2))], 2.2); } }
    } });

  // ── 12. 낙뢰 폭풍 ──
  S.push({ id: "storm", emoji: "⚡", name: "낙뢰 폭풍", desc: "천둥 번개가 사무실을 때린다 — 맞으면 찌릿! 머리가 부스스 까매진다", dur: 30,
    start(s) {
      lightTo({ hemi: L0.hemi * 0.35, sun: L0.sun * 0.25, bg: "#1d2230", hemiC: "#a8b4d8" }, 1.2);
      vignette("radial-gradient(ellipse at center, transparent 45%, rgba(10,15,30,.6))", 1);
      s.next = 2;
    },
    tick(s, dt, t) {
      for (let i = 0; i < 8; i++) emit({ tex: TEX.drop(), at: V(rnd(ROOM.x0, ROOM.x1), WALL_H + 1, rnd(ROOM.z0, ROOM.z1)), vel: V(-0.6, -9, 0), life: 0.4, size: 0.22, aspect: 0.2, alpha: 0.55 });
      if ((s.next -= dt) <= 0 && t < 26) {
        s.next = rnd(1.2, 2.6);
        const v = Math.random() < 0.65 ? pick(present().filter((m) => P.get(m)?.mode !== "ko")) : null;
        const at = v ? v.root.position.clone() : randomFloor().add(V(rnd(-3, 3), 0, rnd(-4, 4)));
        bolt(at);
        flash("#e8eeff", 90, 0.9); setTimeout(() => flash("#e8eeff", 60, 0.6), 150);
        setTimeout(() => SND.boom(0.35), 300); SND.zap(0.15);
        for (let i = 0; i < 18; i++) emit({ tex: TEX.soft(), at: at.clone().add(V(0, 0.4, 0)), vel: V(rnd(-3, 3), rnd(1, 4), rnd(-3, 3)), life: rnd(0.3, 0.7), size: 0.08, color: 0xbfe0ff, add: true, gravity: 6 });
        decal(TEX.scorch(), at.x, at.z, 1.2, 0.015, 0.9);
        if (v) { setTint(v, "#1e1a18", 0.6); knock(v); shout(v, pick(["찌릿!!", "으바바바", "번쩍!"]), "#fff59a", "#2a2a00"); for (let i = 0; i < 10; i++) emit({ tex: TEX.puff(), at: headPos(v), vel: V(rnd(-0.3, 0.3), rnd(0.5, 1), rnd(-0.3, 0.3)), life: 2, size: 0.25, grow: 2, color: 0x333333, alpha: 0.6, delay: 0.4 }); }
      }
    } });
  function bolt(at) {
    const pts = [], top = at.clone().setY(9);
    for (let i = 0; i <= 12; i++) { const k = i / 12; pts.push(V(top.x + (i && i < 12 ? rnd(-0.5, 0.5) : 0), 9 - k * 9, top.z + (i && i < 12 ? rnd(-0.5, 0.5) : 0))); }
    pts[12].copy(at).setY(0);
    const g = new THREE.BufferGeometry().setFromPoints(pts);
    const line = prop(new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0xe8f0ff, transparent: true, opacity: 1 })));
    const glow = prop(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, false, "catmullrom", 0), 40, 0.05, 5, false), new THREE.MeshBasicMaterial({ color: 0xbfd8ff, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false })));
    const pl = light(new THREE.PointLight(0xcfe0ff, 30, 12, 1.2)); pl.position.copy(at).add(V(0, 1, 0));
    let k = 1;
    const fade = () => { k -= 0.12; line.material.opacity = glow.material.opacity = Math.max(0, k); pl.intensity = 30 * Math.max(0, k); if (k > 0 && cur) requestAnimationFrame(fade); };
    setTimeout(fade, 60);
  }

  // ── 13. 바나나 비 ──
  S.push({ id: "banana", emoji: "🍌", name: "바나나 비", desc: "천장에서 바나나가 쏟아진다 — 밟으면 미끄러져 꽈당! 염숭이만 신났다", dur: 30,
    start(s) {
      s.peels = []; s.walk = new Set();
      present().forEach((m) => { if (Math.random() < 0.6) { s.walk.add(m); wander(m); } });
      lightTo({ hemiC: "#fff4c8", hemi: L0.hemi * 1.05, bg: "#fbf3d6" }, 1);
    },
    tick(s, dt, t) {
      if (t < 22) for (let i = 0; i < 3; i++) emit({ tex: TEX.banana(), at: V(rnd(ROOM.x0, ROOM.x1), WALL_H + rnd(0, 2), rnd(ROOM.z0, ROOM.z1)), vel: V(0, -3, 0), life: 1.4, size: 0.18, aspect: 1.3, spin: rnd(-6, 6), gravity: 3, floor: 0.04, fadeIn: 0.05 });
      if (t < 22 && Math.random() < dt * 4) { const p = V(rnd(ROOM.x0 + 1, ROOM.x1 - 1), 0, MAIN_Z + rnd(-1, 1)); s.peels.push(p); decal(TEX.banana(), p.x, p.z, 0.32, 0.02, 1); }
      for (const m of s.walk) { // 걷다가 바나나 껍질 밟으면 꽈당
        const st = P.get(m); if (!st) continue;
        if (st.mode === "idle" && Math.random() < dt * 0.8) wander(m);
        if (st.mode === "run" && s.peels.some((p) => p.distanceTo(m.root.position) < 0.25)) {
          st.mode = "idle"; knock(m, -1);
          word("꽈당!", m.root.position.clone().add(V(0, 0.6, 0)), 0.07, "#ffe066", "#6a4a00", 1.2); SND.pop(0.1, 220);
          s.walk.delete(m);
        }
      }
      const yeom = crew.find((m) => m.name === "염숭이" && m.root.visible && m.c);
      if (yeom && !s.happy) { s.happy = true; const st = take(yeom); st.mode = "idle"; anim(yeom, "walk", 0.2, 1.8); }
      if (yeom && Math.random() < dt * 0.7) shout(yeom, pick(["바나나다!!", "우끼끼~", "냠냠"]), "#ffe066", "#6a4a00");
      if (yeom) yeom.root.rotation.y += dt * 4;
    } });
  function wander(m) {
    const p = m.root.position;
    runPath(m, [V(m.seat.aisleX, 0, p.z), V(m.seat.aisleX, 0, MAIN_Z), V(rnd(ROOM.x0 + 1, ROOM.x1 - 1), 0, MAIN_Z + rnd(-1, 1))], rnd(1.4, 2));
  }

  // ═══════════════ 힐링 · 따뜻한 이야기 · 즐거움 ═══════════════
  for (const s of S) s.cat = "재난";
  const TEX2 = {
    heart: () => canvasTex("heart", 64, 64, (g) => { g.fillStyle = "#ff5d8a"; g.strokeStyle = "#b8264f"; g.lineWidth = 3; g.beginPath(); g.moveTo(32, 54); g.bezierCurveTo(4, 34, 8, 8, 32, 20); g.bezierCurveTo(56, 8, 60, 34, 32, 54); g.fill(); g.stroke(); g.fillStyle = "rgba(255,255,255,.6)"; g.beginPath(); g.ellipse(22, 22, 5, 3, -0.6, 0, Math.PI * 2); g.fill(); }),
    petal: () => canvasTex("petal", 48, 48, (g) => { const gr = g.createRadialGradient(24, 30, 2, 24, 26, 22); gr.addColorStop(0, "#fff3f7"); gr.addColorStop(1, "#ffb2cb"); g.fillStyle = gr; g.beginPath(); g.moveTo(24, 44); g.bezierCurveTo(4, 30, 10, 6, 20, 6); g.lineTo(24, 12); g.lineTo(28, 6); g.bezierCurveTo(38, 6, 44, 30, 24, 44); g.fill(); }),
    note: () => canvasTex("note", 48, 64, (g) => { g.fillStyle = "#ffffff"; g.strokeStyle = "#2a2d33"; g.lineWidth = 3; g.beginPath(); g.ellipse(16, 50, 10, 7, -0.4, 0, Math.PI * 2); g.fill(); g.stroke(); g.fillRect(24, 8, 4, 42); g.strokeRect(24, 8, 4, 42); g.beginPath(); g.moveTo(28, 8); g.quadraticCurveTo(44, 16, 38, 30); g.stroke(); }),
    confetti: () => canvasTex("confetti", 16, 16, (g) => { g.fillStyle = "#fff"; g.fillRect(2, 5, 12, 6); }),
    zzz: () => wordTex("Z z z", "#ffffff", "#3a4a7a"),
    fly: () => canvasTex("firefly", 32, 32, (g) => { const gr = g.createRadialGradient(16, 16, 0, 16, 16, 16); gr.addColorStop(0, "rgba(255,255,200,1)"); gr.addColorStop(0.3, "rgba(220,255,120,.8)"); gr.addColorStop(1, "rgba(160,255,80,0)"); g.fillStyle = gr; g.fillRect(0, 0, 32, 32); }),
    bubble: () => canvasTex("bubble", 48, 48, (g) => { g.strokeStyle = "rgba(220,240,255,.9)"; g.lineWidth = 3; g.beginPath(); g.arc(24, 24, 18, 0, Math.PI * 2); g.stroke(); g.fillStyle = "rgba(255,255,255,.7)"; g.beginPath(); g.ellipse(17, 16, 5, 3, -0.6, 0, Math.PI * 2); g.fill(); }),
  };
  const COLORS = [0xff6b6b, 0xffd166, 0x06d6a0, 0x4cc9f0, 0xb388eb, 0xff8fab, 0xf4a261];
  // 여럿을 한 곳에 모은다 (반원으로 둘러서서 가운데를 본다)
  function gather(people, center, radius = 1.2, then) {
    people.forEach((m, i) => {
      const a = Math.PI * (0.15 + 0.7 * (people.length > 1 ? i / (people.length - 1) : 0.5)) + (center.z > MAIN_Z ? Math.PI : 0);
      const spot = inRoom(center.x + Math.cos(a) * radius, center.z + Math.sin(a) * radius);
      const p = m.root.position;
      runPath(m, [V(m.seat.aisleX, 0, p.z), V(m.seat.aisleX, 0, MAIN_Z), V(spot.x, 0, MAIN_Z), spot], rnd(1.6, 2.1), (mm) => { tmpV.copy(center).sub(mm.root.position); mm.root.rotation.y = Math.atan2(tmpV.x, tmpV.z); then?.(mm); });
    });
  }
  const hearts = (at, n = 5) => { for (let i = 0; i < n; i++) emit({ tex: TEX2.heart(), at: at.clone().add(V(rnd(-0.3, 0.3), rnd(0, 0.3), rnd(-0.3, 0.3))), vel: V(rnd(-0.2, 0.2), rnd(0.5, 0.9), rnd(-0.2, 0.2)), life: rnd(1.4, 2.2), size: rnd(0.12, 0.2), delay: i * 0.12 }); };
  function confetti(at, n = 40) { for (let i = 0; i < n; i++) emit({ tex: TEX2.confetti(), at: at.clone(), vel: V(rnd(-2, 2), rnd(2.5, 5), rnd(-2, 2)), life: rnd(1.8, 2.8), size: 0.06, color: pick(COLORS), gravity: 4, drag: 0.03, spin: rnd(-10, 10), floor: 0.02, aspect: 1.8 }); SND.pop(0.12, 700); }
  const seatedNow = () => present().filter((m) => m.state === "work" && !P.has(m));

  // ── 힐링 1. 벚꽃 비 ──
  S.push({ id: "sakura", cat: "힐링", emoji: "🌸", name: "벚꽃 비", desc: "사무실에 벚꽃잎이 흩날린다 — 잠깐 일손을 놓고 봄 구경", dur: 34,
    start(s) { lightTo({ hemiC: "#ffe6ef", sunC: "#fff0f4", hemi: L0.hemi * 1.05, bg: "#fbeef2" }, 0.7); vignette("radial-gradient(ellipse at center, transparent 55%, rgba(255,190,215,.35))", 1); s.n = 0; },
    tick(s, dt, t) {
      for (let i = 0; i < 4; i++) emit({ tex: TEX2.petal(), at: V(rnd(ROOM.x0, ROOM.x1), WALL_H + 0.5, rnd(ROOM.z0, ROOM.z1)), vel: V(rnd(0.1, 0.5), rnd(-0.7, -0.4), rnd(-0.2, 0.2)), life: 5, size: rnd(0.06, 0.1), spin: rnd(-3, 3), floor: 0.02, alpha: 0.95 });
      if (Math.random() < dt * 1.5) decal(TEX2.petal(), rnd(ROOM.x0 + 0.5, ROOM.x1 - 0.5), rnd(ROOM.z0 + 0.5, ROOM.z1 - 0.5), 0.12, 0.02, 0.9);
      if (t > 4 && s.n < 7 && Math.random() < dt * 0.9) { const m = pick(seatedNow()); if (m) { s.n++; gather([m], V(rnd(ROOM.x0 + 2, ROOM.x1 - 2), 0, MAIN_Z), 0.4, (mm) => { mm.root.rotation.y += rnd(-1, 1); shout(mm, pick(["와 예쁘다~", "봄이다!", "꽃잎 잡았다", "사진 찍자!"]), "#fff", "#c2557a", 2.2); hearts(headPos(mm), 3); }); } }
    } });

  // ── 힐링 2. 첫눈과 코코아 ──
  S.push({ id: "firstsnow", cat: "힐링", emoji: "☃️", name: "첫눈과 코코아", desc: "창밖도 안도 하얗게 — 눈사람을 만들고 따뜻한 코코아 한 잔", dur: 34,
    start(s) {
      lightTo({ hemiC: "#fff0dc", sunC: "#ffe2b8", hemi: L0.hemi * 1.05, bg: "#eef2f6" }, 0.7);
      s.man = prop(makeSnowman()); s.man.position.set(RCX + 1, 0, MAIN_Z); s.man.scale.setScalar(0.01); s.mt = 0;
      SND.whoosh(0.05);
    },
    tick(s, dt, t) {
      for (let i = 0; i < 3; i++) emit({ tex: TEX.snow(), at: V(rnd(ROOM.x0, ROOM.x1), WALL_H + 0.5, rnd(ROOM.z0, ROOM.z1)), vel: V(rnd(-0.15, 0.15), rnd(-0.5, -0.3), rnd(-0.1, 0.1)), life: 6, size: rnd(0.07, 0.13), alpha: 0.95 });
      if (t > 4 && !s.g) { s.g = true; const ppl = seatedNow().sort(() => Math.random() - 0.5).slice(0, 6); gather(ppl, s.man.position, 1.1, (mm) => { if (Math.random() < 0.6) shout(mm, pick(["첫눈이다!", "눈사람 귀여워", "코 당근 누가 했어요ㅋㅋ", "코코아 마셔요~"]), "#fff", "#5a6a8a", 2.4); }); }
      if (t > 7) { s.mt += dt; s.man.scale.setScalar(Math.min(1, s.mt / 4) * K); }
      for (const m of seatedNow()) if (Math.random() < dt * 0.25) emit({ tex: TEX.puff(), at: m.seat.desk.clone().setY(DH + 0.08).add(V(rnd(-0.2, 0.2), 0, rnd(-0.1, 0.1))), vel: V(0, 0.25, 0), life: 2, size: 0.1, grow: 2, color: 0xffffff, alpha: 0.6 }); // 컵에서 김
    } });
  function makeSnowman() {
    const g = new THREE.Group(), w = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 });
    [[0.32, 0.3], [0.23, 0.78], [0.16, 1.12]].forEach(([r, y]) => { const b = new THREE.Mesh(new THREE.SphereGeometry(r, 20, 14), w); b.position.y = y; b.castShadow = true; g.add(b); });
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.16, 10), new THREE.MeshStandardMaterial({ color: 0xff8a2a })); nose.rotation.x = Math.PI / 2; nose.position.set(0, 1.12, 0.2); g.add(nose);
    for (const x of [-0.06, 0.06]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 6), new THREE.MeshBasicMaterial({ color: 0x111111 })); e.position.set(x, 1.18, 0.14); g.add(e); }
    const scarf = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.04, 8, 20), new THREE.MeshStandardMaterial({ color: 0xd94b4b })); scarf.rotation.x = Math.PI / 2; scarf.position.y = 0.97; g.add(scarf);
    const hat = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.16, 16), new THREE.MeshStandardMaterial({ color: 0x23252a })); hat.position.y = 1.32; g.add(hat);
    return g;
  }

  // ── 힐링 3. 반딧불 밤 ──
  S.push({ id: "firefly", cat: "힐링", emoji: "✨", name: "반딧불 야근", desc: "불 꺼진 밤 사무실, 모니터 빛 사이로 반딧불이 떠다닌다", dur: 34,
    start(s) {
      lightTo({ hemi: 0.18, sun: 0.05, fill: 0.05, bg: "#0b1222", hemiC: "#7a8ac0" }, 1.2);
      vignette("radial-gradient(ellipse at center, transparent 40%, rgba(5,10,25,.6))", 1);
      s.flies = []; for (let i = 0; i < 46; i++) s.flies.push({ q: emit({ tex: TEX2.fly(), at: V(0, 1, 0), life: 9999, size: rnd(0.18, 0.3), add: true, fadeIn: 0.3 }), x: rnd(ROOM.x0, ROOM.x1), y: rnd(0.4, 2.2), z: rnd(ROOM.z0, ROOM.z1), ph: rnd(0, 6), sp: rnd(0.2, 0.6) });
      s.lamps = desks().filter((d) => d.tiles?.length).sort(() => Math.random() - 0.5).slice(0, 5).map((d) => { const l = light(new THREE.PointLight(0xffc27a, 1.6, 3 * K, 1.6)); l.position.copy(d.desk).setY(DH + 0.6); return l; });
    },
    tick(s, dt, t) {
      for (const f of s.flies) {
        f.x += Math.sin(t * f.sp + f.ph) * dt * 0.3; f.z += Math.cos(t * f.sp * 0.8 + f.ph) * dt * 0.3; f.y += Math.sin(t * 1.3 + f.ph) * dt * 0.1;
        f.q.s.position.set(f.x, f.y, f.z);
        f.q.alpha = 0.4 + 0.6 * Math.max(0, Math.sin(t * 2 + f.ph));
      }
      if (Math.random() < dt * 0.25) { const m = pick(seatedNow()); if (m) shout(m, pick(["조용하다…", "반딧불이다", "오늘도 수고했어요", "별이 예쁘네"]), "#fff6c8", "#2a3050", 2.5); }
    } });

  // ── 힐링 4. 사무실 수족관 ──
  S.push({ id: "aquarium", cat: "힐링", emoji: "🐠", name: "사무실 수족관", desc: "사무실이 커다란 어항이 됐다 — 물고기 떼와 해파리가 머리 위를 헤엄친다", dur: 36,
    start(s) {
      lightTo({ hemiC: "#bfe8ff", sunC: "#9fd8ff", hemi: L0.hemi * 0.95, sun: L0.sun * 0.7, bg: "#0e3a5a" }, 0.8);
      vignette("radial-gradient(ellipse at center, rgba(0,60,120,.05) 40%, rgba(0,40,90,.45))", 1);
      s.fish = [];
      for (let k = 0; k < 4; k++) { // 무리 넷, 무리마다 6~10마리
        const col = pick(COLORS), n = 6 + ((Math.random() * 5) | 0), cx = rnd(ROOM.x0 + 3, ROOM.x1 - 3), cz = rnd(-3, 3), r = rnd(2, 4), h = rnd(1.2, 2.2), sp = rnd(0.15, 0.3) * (Math.random() < 0.5 ? 1 : -1);
        for (let i = 0; i < n; i++) { const f = prop(makeFish(col)); f.scale.setScalar(rnd(0.7, 1.2)); s.fish.push({ f, cx, cz, r: r + rnd(-0.4, 0.4), h: h + rnd(-0.3, 0.3), a: (i / n) * 0.9 + k, sp, ph: rnd(0, 6) }); }
      }
      s.jelly = [0, 1].map(() => { const j = prop(makeJelly()); return { j, x: rnd(ROOM.x0 + 2, ROOM.x1 - 2), z: rnd(-4, 4), ph: rnd(0, 6) }; });
    },
    tick(s, dt, t) {
      for (const o of s.fish) { o.a += o.sp * dt; const x = o.cx + Math.cos(o.a) * o.r, z = o.cz + Math.sin(o.a) * o.r * 0.6, y = o.h + Math.sin(t * 1.5 + o.ph) * 0.12; o.f.position.set(x, y, z); o.f.rotation.y = -o.a + (o.sp > 0 ? 0 : Math.PI); o.f.children[1].rotation.y = Math.sin(t * 10 + o.ph) * 0.5; }
      for (const o of s.jelly) { o.j.position.set(o.x + Math.sin(t * 0.2 + o.ph) * 1.5, 1.8 + Math.sin(t * 0.9 + o.ph) * 0.3, o.z); o.j.scale.y = 1 + Math.sin(t * 2.2 + o.ph) * 0.12; }
      if (Math.random() < dt * 6) emit({ tex: TEX2.bubble(), at: V(rnd(ROOM.x0, ROOM.x1), 0.1, rnd(ROOM.z0, ROOM.z1)), vel: V(rnd(-0.05, 0.05), rnd(0.4, 0.8), 0), life: 4, size: rnd(0.04, 0.1), alpha: 0.8 });
      if (Math.random() < dt * 0.35) { const m = pick(present()); if (m) shout(m, pick(["물고기다!", "니모 찾았다", "해파리 조심~", "어항 속 같아"]), "#e0f6ff", "#0a4a7a", 2.2); }
    } });
  function makeFish(col) {
    const g = new THREE.Group(), m = new THREE.MeshStandardMaterial({ color: col, roughness: 0.4, metalness: 0.1 });
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 8), m); body.scale.set(1.6, 1, 0.6); g.add(body);
    const tail = new THREE.Group(); const fin = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.12, 4), m); fin.rotation.z = Math.PI / 2; fin.position.x = -0.06; tail.add(fin); tail.position.x = -0.15; g.add(tail);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 4), new THREE.MeshBasicMaterial({ color: 0x111111 })); eye.position.set(0.11, 0.03, 0.045); g.add(eye);
    return g;
  }
  function makeJelly() {
    const g = new THREE.Group(), m = new THREE.MeshPhysicalMaterial({ color: 0xf2b8ff, transparent: true, opacity: 0.5, roughness: 0.1, emissive: 0x803a90, emissiveIntensity: 0.3 });
    const bell = new THREE.Mesh(new THREE.SphereGeometry(0.3, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), m); g.add(bell);
    for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2, pts = []; for (let k = 0; k < 6; k++) pts.push(V(Math.cos(a) * 0.2 + Math.sin(k) * 0.03, -k * 0.12, Math.sin(a) * 0.2)); g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0xf6d0ff, transparent: true, opacity: 0.7 }))); }
    return g;
  }

  // ── 힐링 5. 햇살 낮잠 ──
  S.push({ id: "nap", cat: "힐링", emoji: "🌤️", name: "햇살 낮잠", desc: "창으로 따뜻한 햇살이 들고, 다들 꾸벅꾸벅 졸기 시작한다", dur: 32,
    start(s) {
      lightTo({ hemiC: "#fff1d6", sunC: "#ffd9a0", hemi: L0.hemi * 1.1, sun: L0.sun * 1.25, bg: "#fbf3e2" }, 0.6);
      vignette("linear-gradient(115deg, rgba(255,226,160,.35), transparent 45%)", 1);
      s.beams = [];
      for (let i = 0; i < 6; i++) { const b = prop(new THREE.Mesh(new THREE.PlaneGeometry(1.2, 6), new THREE.MeshBasicMaterial({ color: 0xffe6a8, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }))); b.position.set(ROOM.x0 + 2 + i * 2.2, 2, ROOM.z0 + 2); b.rotation.set(-0.5, 0.3, 0.35); s.beams.push(b); }
      s.sleepers = []; s.next = 3;
    },
    tick(s, dt, t) {
      s.beams.forEach((b, i) => (b.material.opacity = 0.09 + 0.04 * Math.sin(t * 0.6 + i)));
      if (Math.random() < dt * 4) emit({ tex: TEX.soft(), at: V(rnd(ROOM.x0, ROOM.x1), rnd(0.5, 2.5), rnd(ROOM.z0, ROOM.z1)), vel: V(rnd(-0.05, 0.05), rnd(-0.02, 0.05), rnd(-0.05, 0.05)), life: 5, size: 0.025, color: 0xfff2c0, add: true });
      if ((s.next -= dt) <= 0 && t < 26) { s.next = rnd(0.6, 1.5); const m = pick(seatedNow().filter((x) => !x.frozen)); if (m) { m.frozen = true; s.sleepers.push(m); } }
      for (const m of s.sleepers) if (Math.random() < dt * 0.8) emit({ tex: TEX2.zzz(), at: headPos(m).add(V(0.1, 0.15, 0)), vel: V(0.1, 0.25, 0), life: 2.2, size: 0.035 * TXT, aspect: TEX2.zzz().userData.aspect, screen: true, order: 12, depthTest: false, rot: 0 });
    },
    end(s) { for (const m of s.sleepers) m.frozen = false; } });

  // ── 이야기 1. 깜짝 생일 파티 ──
  S.push({ id: "birthday", cat: "따뜻한 이야기", emoji: "🎂", name: "깜짝 생일 파티", desc: "오늘 생일인 동료 자리로 모두 살금살금… 케이크와 축하!", dur: 36,
    start(s) {
      const cand = seatedNow(); if (!cand.length) return;
      s.hero = pick(cand); s.desk = s.hero.seat.desk.clone();
      word(`🎉 오늘은 ${s.hero.name} 님 생일!`, V(RCX, 2.6, MAIN_Z), 0.1, "#ffffff", "#c2557a", 4);
      s.cake = prop(makeCake()); s.cake.position.copy(s.desk).setY(DH); s.cake.scale.setScalar(0.01);
      s.guests = cand.filter((m) => m !== s.hero).sort(() => Math.random() - 0.5).slice(0, 7);
      gather(s.guests, s.hero.seat.approach.clone(), 1.0);
      s.flames = [];
    },
    tick(s, dt, t) {
      if (!s.hero) return;
      if (t > 8 && !s.c) { s.c = true; s.cake.scale.setScalar(1); s.cake.children.filter((c) => c.userData.wick).forEach((w) => s.flames.push(emit({ tex: TEX.flame(), at: w.getWorldPosition(V(0, 0, 0)).add(V(0, 0.04, 0)), life: 9999, size: 0.06, add: true, aspect: 0.6 }))); }
      if (t > 10 && !s.song) { s.song = true; s.guests.forEach((m, i) => setTimeout(() => cur && shout(m, pick(["생일 축하해요!", "Happy birthday~", "축하축하!", "선물은 비밀~"]), "#fff", "#c2557a", 2.4), i * 400)); }
      if (t > 16 && !s.blow) { s.blow = true; for (const f of s.flames) f.life = f.age + 0.2; confetti(s.desk.clone().setY(DH + 0.4), 70); shout(s.hero, "감동이에요 ㅠㅠ", "#fff", "#c2557a", 3); hearts(headPos(s.hero), 8); }
      if (t > 17 && Math.random() < dt * 2) hearts(s.desk.clone().setY(DH + 0.5), 1);
    } });
  function makeCake() {
    const g = new THREE.Group();
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.1, 24), new THREE.MeshStandardMaterial({ color: 0xffffff })); base.position.y = 0.05; g.add(base);
    const top = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.08, 24), new THREE.MeshStandardMaterial({ color: 0xffc2d6 })); top.position.y = 0.14; g.add(top);
    for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2, b = new THREE.Mesh(new THREE.SphereGeometry(0.018, 8, 6), new THREE.MeshStandardMaterial({ color: 0xe0303a })); b.position.set(Math.cos(a) * 0.14, 0.1, Math.sin(a) * 0.14); g.add(b); }
    for (let i = 0; i < 5; i++) { const a = (i / 5) * Math.PI * 2, c = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.07, 6), new THREE.MeshStandardMaterial({ color: pick([0x4cc9f0, 0xffd166, 0x06d6a0]) })); c.position.set(Math.cos(a) * 0.07, 0.21, Math.sin(a) * 0.07); c.userData.wick = true; g.add(c); }
    return g;
  }

  // ── 이야기 2. 칭찬 릴레이 ──
  S.push({ id: "praise", cat: "따뜻한 이야기", emoji: "💌", name: "칭찬 릴레이", desc: "하트가 사람에서 사람으로 건너가며 한마디씩 고마움을 전한다", dur: 38,
    start(s) {
      s.line = present().sort(() => Math.random() - 0.5).slice(0, 9);
      s.i = 0; s.t = 0; s.size = 0.042;
      s.heart = emit({ tex: TEX2.heart(), at: headPos(s.line[0] ?? crew[0]).add(V(0, 0.4, 0)), life: 9999, size: 0.042, fadeIn: 0.3, screen: true, depthTest: false, order: 11, rot: 0 }); // 화면에서 늘 보이는 크기
      s.from = s.heart.s.position.clone();
      s.words = ["오늘 도와줘서 고마워요", "덕분에 살았어요!", "항상 웃어줘서 좋아요", "코드 리뷰 최고였어요", "커피 고마웠어요 ☕", "같이 일해서 든든해요", "아이디어 멋졌어요!", "오늘도 수고 많았어요", "늘 고마워요 💛"];
    },
    tick(s, dt, t) {
      if (!s.line.length) return;
      s.t += dt;
      const to = headPos(s.line[s.i]).add(V(0, 0.4, 0)), k = Math.min(1, s.t / 1.6);
      s.heart.s.position.lerpVectors(s.from, to, k); s.heart.s.position.y += Math.sin(k * Math.PI) * 0.8;
      s.heart.size = s.size;
      if (k >= 1 && s.t > 3.2) {
        const got = s.line[s.i];
        shout(got, s.words[s.i % s.words.length], "#fff", "#c2557a", 3.4); hearts(to, 3); SND.pop(0.06, 900);
        emit({ tex: TEX2.heart(), at: to, life: 9999, size: 0.018, fadeIn: 0.3, screen: true, depthTest: false, order: 11, rot: 0, follow: () => headPos(got).add(V(0, 0.32 * K, 0)) }); // 받은 사람 머리 위에 작은 하트가 남는다
        s.from = to.clone(); s.t = 0; s.i++; s.size += 0.003;
        if (s.i >= s.line.length) { s.i = s.line.length - 1; s.heart.life = s.heart.age + 0.5; for (const m of present()) hearts(headPos(m), 2); word("💛 오늘도 고마워요", V(RCX, 2.5, MAIN_Z), 0.1, "#fff", "#c2557a", 4); s.line = []; }
      }
    } });

  // ── 이야기 3. 사무실 고양이 ──
  S.push({ id: "cat", cat: "따뜻한 이야기", emoji: "🐈", name: "사무실 고양이", desc: "어디선가 고양이 한 마리가 들어와 책상 사이를 돌아다닌다", dur: 40,
    start(s) {
      s.cat = prop(makeCat()); s.cat.position.copy(DOOR_OUT); s.cat.scale.setScalar(1.8 * K);
      const tour = desks().sort(() => Math.random() - 0.5).slice(0, 4).map((d) => d.approach.clone());
      s.path = [DOOR_IN.clone(), ...tour.flatMap((p) => [V(p.x, 0, MAIN_Z), p])];
      s.pi = 0; s.sleep = false; s.seen = new Set();
    },
    tick(s, dt, t) {
      const c = s.cat;
      if (!s.sleep) {
        const goal = s.path[s.pi];
        if (goal) {
          tmpV.copy(goal).sub(c.position).setY(0); const d = tmpV.length();
          c.rotation.y = Math.atan2(tmpV.x, tmpV.z);
          c.position.addScaledVector(tmpV.normalize(), Math.min(d, 0.8 * dt));
          c.position.y = Math.abs(Math.sin(t * 9)) * 0.015;
          c.userData.tail.rotation.z = Math.sin(t * 4) * 0.5;
          if (d < 0.05) s.pi++;
        } else { s.sleep = true; const d = desks().reduce((a, b) => (a.desk.distanceTo(c.position) < b.desk.distanceTo(c.position) ? a : b)); c.position.copy(d.desk).setY(DH); c.scale.y = 0.7 * 1.8 * K; }
      } else if (Math.random() < dt * 0.8) emit({ tex: TEX2.zzz(), at: c.position.clone().add(V(0, 0.3, 0)), vel: V(0.05, 0.2, 0), life: 2, size: 0.03 * TXT, aspect: TEX2.zzz().userData.aspect, screen: true, order: 12, depthTest: false, rot: 0 });
      for (const m of nearPeople(c.position, 1.3)) { if (s.seen.has(m)) continue; s.seen.add(m); shout(m, pick(["고양이다!", "귀여워ㅠㅠ", "야옹~", "츄르 있는 사람?"]), "#fff", "#7a4a2a", 2.2); hearts(headPos(m), 3); }
      if (Math.random() < dt * 0.3) word(pick(["야옹", "냐앙~", "골골"]), c.position.clone().add(V(0, 0.4, 0)), 0.04, "#ffffff", "#7a4a2a", 1.4);
    } });
  function makeCat() {
    const g = new THREE.Group(), fur = new THREE.MeshStandardMaterial({ color: 0xf2a65a, roughness: 0.9 });
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 10), fur); body.scale.set(0.9, 0.8, 1.5); body.position.y = 0.13; g.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.085, 14, 10), fur); head.position.set(0, 0.22, 0.17); g.add(head);
    for (const x of [-0.045, 0.045]) { const ear = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.06, 4), fur); ear.position.set(x, 0.3, 0.17); g.add(ear); const eye = new THREE.Mesh(new THREE.SphereGeometry(0.012, 6, 4), new THREE.MeshBasicMaterial({ color: 0x1a1a1a })); eye.position.set(x * 0.8, 0.235, 0.245); g.add(eye); }
    for (const [x, z] of [[-0.06, 0.1], [0.06, 0.1], [-0.06, -0.1], [0.06, -0.1]]) { const l = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.1, 6), fur); l.position.set(x, 0.05, z); g.add(l); }
    const tail = new THREE.Group(); const tl = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.02, 0.2, 6), fur); tl.position.y = 0.1; tail.add(tl); tail.position.set(0, 0.16, -0.17); tail.rotation.x = -0.6; g.add(tail); g.userData.tail = tail;
    g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    return g;
  }

  // ── 이야기 4. 피자 파티 ──
  S.push({ id: "pizza", cat: "따뜻한 이야기", emoji: "🍕", name: "피자 파티", desc: "누군가 피자를 쐈다! 간식 책상으로 모두 모여 한 조각씩", dur: 36,
    start(s) {
      const snack = ctx.snackSeats();
      s.at = (snack[1] ?? snack[0] ?? pick(desks())).desk.clone();
      s.boxes = [0, 1, 2].map((i) => { const b = prop(makePizza(i === 1)); b.position.copy(s.at).add(V(0, DH + 0.02 + i * 0.0, (i - 1) * 0.42)); b.rotation.y = rnd(-0.2, 0.2); return b; });
      word("🍕 피자 왔어요~", V(s.at.x, 2.4, s.at.z), 0.1, "#ffffff", "#c0392b", 3);
      s.ppl = present().sort(() => Math.random() - 0.5).slice(0, 10);
      gather(s.ppl, s.at.clone(), 1.6, (m) => { if (Math.random() < 0.7) shout(m, pick(["피자다!!", "치즈 늘어난다~", "페퍼로니 내꺼", "누가 쏜 거예요?", "잘 먹겠습니다!"]), "#fff", "#c0392b", 2.4); });
    },
    tick(s, dt, t) { if (Math.random() < dt * 3) emit({ tex: TEX.puff(), at: s.at.clone().setY(DH + 0.1).add(V(rnd(-0.2, 0.2), 0, rnd(-0.5, 0.5))), vel: V(0, 0.3, 0), life: 1.8, size: 0.1, grow: 2, color: 0xffffff, alpha: 0.5 }); if (t > 12 && Math.random() < dt * 1) { const m = pick(s.ppl); if (m && P.get(m)?.mode === "idle") hearts(headPos(m), 1); } } });
  function makePizza(open) {
    const g = new THREE.Group();
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.035, 0.36), new THREE.MeshStandardMaterial({ color: 0xd9b07a })); box.position.y = 0.018; g.add(box);
    if (open) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.015, 24), new THREE.MeshStandardMaterial({ color: 0xf4c25a })); p.position.y = 0.045; g.add(p); for (let i = 0; i < 7; i++) { const a = rnd(0, 6.28), r = rnd(0.02, 0.12), pe = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.006, 10), new THREE.MeshStandardMaterial({ color: 0xc0392b })); pe.position.set(Math.cos(a) * r, 0.054, Math.sin(a) * r); g.add(pe); } }
    return g;
  }

  // ── 즐거움 1. 불꽃놀이 ──
  S.push({ id: "fireworks", cat: "즐거움", emoji: "🎆", name: "불꽃놀이", desc: "밤하늘에 불꽃이 터진다 — 다들 통로로 나와 올려다본다", dur: 34,
    start(s) { lightTo({ hemi: L0.hemi * 0.4, sun: 0.1, bg: "#0c1020", hemiC: "#8090c0" }, 1.2); s.next = 2; s.rockets = []; const ppl = seatedNow().sort(() => Math.random() - 0.5).slice(0, 10); gather(ppl, V(RCX, 0, MAIN_Z), 2.4, (m) => { m.root.rotation.y += rnd(-0.5, 0.5); }); },
    tick(s, dt, t) {
      if ((s.next -= dt) <= 0 && t < 30) { s.next = rnd(0.5, 1.4); const x = rnd(ROOM.x0 + 1, ROOM.x1 - 1), z = rnd(-5, 5); s.rockets.push({ q: emit({ tex: TEX.soft(), at: V(x, 0.5, z), vel: V(0, 6, 0), life: 0.75, size: 0.14, add: true, color: 0xfff0c0 }), x, z, t: 0, col: pick(COLORS) }); SND.whoosh(0.05); }
      for (let i = s.rockets.length - 1; i >= 0; i--) {
        const r = s.rockets[i]; r.t += dt;
        if (Math.random() < 0.8) emit({ tex: TEX.soft(), at: r.q.s.position.clone(), life: 0.4, size: 0.05, add: true, color: 0xffd080 });
        if (r.t > 0.7) {
          const at = r.q.s.position.clone(), n = 60;
          for (let k = 0; k < n; k++) { const a = rnd(0, 6.28), b = Math.acos(rnd(-1, 1)), sp = rnd(2.5, 3.5); emit({ tex: TEX.soft(), at, vel: V(Math.sin(b) * Math.cos(a) * sp, Math.cos(b) * sp, Math.sin(b) * Math.sin(a) * sp), life: rnd(1.2, 1.8), size: 0.09, color: r.col, add: true, gravity: 1.5, drag: 0.02 }); }
          const pl = light(new THREE.PointLight(r.col, 8, 14, 1.5)); pl.position.copy(at); let k = 1; const fade = () => { k -= 0.05; pl.intensity = 8 * Math.max(0, k); if (k > 0 && cur) requestAnimationFrame(fade); }; fade();
          SND.boom(0.12); s.rockets.splice(i, 1);
          if (Math.random() < 0.4) { const m = pick(present()); if (m) shout(m, pick(["와~!!", "예쁘다", "한 번 더!", "대박"]), "#fff", "#30307a", 1.8); }
        }
      }
    } });

  // ── 즐거움 2. 댄스 파티 ──
  S.push({ id: "disco", cat: "즐거움", emoji: "🪩", name: "댄스 파티", desc: "미러볼이 내려오고 조명이 돈다 — 다 같이 신나게!", dur: 36,
    start(s) {
      lightTo({ hemi: L0.hemi * 0.35, sun: 0.15, bg: "#140c24", hemiC: "#b090ff" }, 1.5);
      s.ball = prop(new THREE.Mesh(new THREE.IcosahedronGeometry(0.4, 2), new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.15, flatShading: true })));
      s.ball.position.set(RCX, WALL_H + 2, MAIN_Z);
      s.spots = COLORS.slice(0, 5).map((c) => light(new THREE.PointLight(c, 6, 9, 1.4)));
      s.dancers = present().sort(() => Math.random() - 0.5).slice(0, 14);
      gather(s.dancers, V(RCX, 0, MAIN_Z), 2.2, (m) => { const st = P.get(m); st.mode = "dance"; st.ph = rnd(0, 6); });
    },
    tick(s, dt, t) {
      s.ball.position.y = Math.max(WALL_H - 0.3, s.ball.position.y - dt * 1.2); s.ball.rotation.y += dt * 1.2;
      s.spots.forEach((l, i) => { const a = t * (0.8 + i * 0.2) + i; l.position.set(RCX + Math.cos(a) * 4, 2.2, MAIN_Z + Math.sin(a) * 3); });
      for (const m of s.dancers) { const st = P.get(m); if (st?.mode !== "dance") continue; const r = m.root; r.position.y = Math.abs(Math.sin(t * 6 + st.ph)) * 0.08 * K; r.rotation.y += Math.sin(t * 2 + st.ph) * dt * 3; r.rotation.z = Math.sin(t * 6 + st.ph) * 0.12; }
      if (Math.random() < dt * 5) { const m = pick(s.dancers); if (m) emit({ tex: TEX2.note(), at: headPos(m).add(V(rnd(-0.2, 0.2), 0.2, 0)), vel: V(rnd(-0.2, 0.2), 0.6, 0), life: 1.6, size: 0.12, aspect: 0.75, color: pick(COLORS) }); }
      if (Math.random() < dt * 0.4) { const m = pick(s.dancers); if (m) shout(m, pick(["신난다!", "오늘은 불금!", "춤춰요~", "이 노래 좋아"]), "#fff", "#5a2a8a", 1.8); }
    } });

  // ── 즐거움 3. 풍선 날리기 ──
  S.push({ id: "balloons", cat: "즐거움", emoji: "🎈", name: "풍선 날리기", desc: "책상마다 알록달록 풍선이 피어올라 천장으로 둥실둥실", dur: 30,
    start(s) { s.b = []; s.next = 0.5; },
    tick(s, dt, t) {
      if ((s.next -= dt) <= 0 && t < 18) {
        s.next = rnd(0.12, 0.3);
        const d = pick(desks()), g = new THREE.Group(), col = pick(COLORS);
        const ball = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 12), new THREE.MeshStandardMaterial({ color: col, roughness: 0.25, metalness: 0.05 })); ball.scale.y = 1.15; g.add(ball);
        g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([V(0, -0.18, 0), V(0.02, -0.5, 0), V(-0.02, -0.8, 0)]), new THREE.LineBasicMaterial({ color: 0x777777 })));
        prop(g); g.position.copy(d.desk).setY(DH + 0.3).add(V(rnd(-0.3, 0.3), 0, rnd(-0.2, 0.2)));
        s.b.push({ g, vy: rnd(0.35, 0.6), ph: rnd(0, 6), top: WALL_H + rnd(-0.5, 0.3) });
        if (Math.random() < 0.15) { const m = pick(present()); if (m) shout(m, pick(["풍선이다!", "와 알록달록", "하나 가져갈래", "둥실둥실~"]), "#fff", "#2a6a8a", 1.8); }
      }
      for (const o of s.b) { o.g.position.y = Math.min(o.top, o.g.position.y + o.vy * dt); o.g.position.x += Math.sin(t * 1.3 + o.ph) * dt * 0.1; o.g.rotation.z = Math.sin(t * 1.7 + o.ph) * 0.15; }
    } });

  // ── 즐거움 4. 다 같이 체조 ──
  S.push({ id: "stretch", cat: "즐거움", emoji: "🙆", name: "다 같이 체조", desc: "오후 3시, 국민체조 시간! 모두 일어나 하나 둘 셋 넷", dur: 32,
    start(s) {
      s.ppl = present().filter((m) => m.state === "work");
      for (const m of s.ppl) { const st = take(m); st.mode = "gym"; }
      s.leader = pick(s.ppl); s.beat = 0; s.count = 0;
      word("🙆 체조 시간!", V(RCX, 2.6, MAIN_Z), 0.1, "#ffffff", "#2a7a4a", 3);
    },
    tick(s, dt, t) {
      if (t < 2) return;
      const ph = Math.floor((t - 2) / 6) % 4, b = (t - 2) * Math.PI;
      for (const m of s.ppl) {
        const r = m.root; if (P.get(m)?.mode !== "gym") continue;
        r.rotation.z = ph === 0 ? Math.sin(b) * 0.3 : 0; // 옆구리 늘리기
        r.position.y = ph === 1 ? -Math.abs(Math.sin(b)) * 0.12 * K : 0; // 무릎 굽히기
        r.rotation.x = ph === 2 ? Math.max(0, Math.sin(b)) * 0.45 : 0; // 허리 숙이기
        if (ph === 3) r.rotation.y += dt * 4; // 제자리 돌기
      }
      if ((s.beat -= dt) <= 0) { s.beat = 1; s.count = (s.count % 8) + 1; if (s.leader) word(["하나!", "둘!", "셋!", "넷!", "다섯!", "여섯!", "일곱!", "여덟!"][s.count - 1], headPos(s.leader).add(V(0, 0.3, 0)), 0.05, "#ffffff", "#2a7a4a", 0.9); }
      if (t > 28 && !s.end) { s.end = true; for (const m of s.ppl) if (Math.random() < 0.5) shout(m, pick(["개운하다~", "시원해!", "허리 펴졌다"]), "#fff", "#2a7a4a", 2); }
    } });

  // ═══════════════ 어항 모드: 켜 두면 알아서 ═══════════════
  // 사람들은 알아서 지내고(구경용과 같음), 가끔 갑자기 이벤트가 벌어진다. 실제 시각에 따라 낮·저녁·밤, 손대지 않으면 카메라가 천천히 둘러본다
  const CATS = ["힐링", "따뜻한 이야기", "즐거움", "재난"];
  const PREF_KEY = "teamOfficeAquarium";
  const pref = { cats: { 힐링: true, "따뜻한 이야기": true, 즐거움: true, 재난: true }, freq: "보통", autoEvt: true, tour: true, wide: true };
  try { Object.assign(pref, JSON.parse(localStorage.getItem(PREF_KEY)) || {}); } catch {}
  const savePref = () => { try { localStorage.setItem(PREF_KEY, JSON.stringify(pref)); } catch {} };
  const FREQ = { 자주: [40, 90], 보통: [110, 220], 가끔: [240, 420] };
  let nextEvt = rnd(20, 40);
  function pickEvent() {
    const pool = S.filter((s) => pref.cats[s.cat] && s !== C.last);
    if (!pool.length) return null;
    const w = pool.map((s) => (s.cat === "재난" ? 0.6 : 1)); // 재난은 조금 덜 자주
    let r = Math.random() * w.reduce((a, b) => a + b, 0);
    for (let i = 0; i < pool.length; i++) if ((r -= w[i]) <= 0) return pool[i];
    return pool[0];
  }
  // 실제 시각에 따른 바탕 밝기 (낮·저녁·밤)
  function dayBase() {
    const h = new Date().getHours() + new Date().getMinutes() / 60;
    if (h >= 7 && h < 17) return null; // 낮: 원래 조명
    if (h >= 17 && h < 19.5) return { hemiC: "#ffe2c4", sunC: "#ffb070", hemi: L0.hemi * 0.85, sun: L0.sun * 0.7, bg: "#f3dcc8" }; // 저녁노을
    return { hemiC: "#9fb0d8", sunC: "#8fa0d0", hemi: L0.hemi * 0.45, sun: L0.sun * 0.25, fill: L0.fill * 0.5, bg: "#141a2a" }; // 밤
  }
  let dayTimer = 0;
  // 천천히 둘러보기: 30초 동안 손대지 않으면 사무실을 크게 돈다
  let idle = 0, tourA = 0;
  ctx.controls.addEventListener("start", () => { idle = 0; });
  ctx.stage.addEventListener("wheel", () => { idle = 0; }, { passive: true });
  ctx.stage.addEventListener("pointerdown", () => { idle = 0; });
  function tickTour(dt) {
    idle += dt;
    if (!pref.tour || idle < 30) { tourA = Math.atan2(camera.position.x - RCX, camera.position.z - MAIN_Z); return; }
    tourA += dt * 0.035;
    const R = 15.5, goal = V(RCX + Math.sin(tourA) * R, 11 + Math.sin(tourA * 0.7) * 2.5, MAIN_Z + Math.cos(tourA) * R);
    camera.position.lerp(goal, 1 - Math.exp(-0.6 * dt));
    ctx.controls.target.lerp(V(RCX, 0.3, MAIN_Z), 1 - Math.exp(-0.6 * dt));
  }

  // ───────── 메뉴 ─────────
  const btn = document.createElement("button");
  btn.className = "cx-btn"; btn.textContent = "🐠 어항 모드";
  ctx.hud.append(btn);
  const menu = document.createElement("div");
  menu.className = "cx-menu"; menu.hidden = true;
  const sect = (cat) => `<h4 style="margin:10px 0 6px;font-size:12px;color:var(--muted)">${cat}</h4><div class="cx-grid">${S.map((s, i) => (s.cat === cat ? `<button data-i="${i}" title="${s.desc}"><em>${s.emoji}</em>${s.name}</button>` : "")).join("")}</div>`;
  menu.innerHTML = `<h3>🐠 어항 모드</h3><p>켜 두면 사람들이 알아서 지내다가, 가끔 갑자기 아래 일들이 벌어져요. 골라서 바로 볼 수도 있어요. 소리는 화면을 한 번 누른 뒤부터 나요.</p>
    <div class="cx-row" style="flex-wrap:wrap;align-items:center;font-size:12px">
      <label><input type="checkbox" data-pref="autoEvt"> 갑자기 일어나기</label>
      <select data-freq style="font:inherit;font-size:12px;border:1px solid var(--line);border-radius:8px;padding:3px 6px"><option>자주</option><option>보통</option><option>가끔</option></select>
      <label><input type="checkbox" data-pref="tour"> 손 안 대면 천천히 둘러보기</label>
      <label><input type="checkbox" data-pref="wide"> 사람 목록 숨기고 크게 보기</label>
    </div>
    <div class="cx-row" style="flex-wrap:wrap;font-size:12px">${CATS.map((c) => `<label><input type="checkbox" data-cat="${c}"> ${c}</label>`).join("")}</div>
    ${CATS.map(sect).join("")}
    <div class="cx-row"><button class="cx-btn dark" data-now>🎲 아무거나 지금</button><button class="cx-btn" data-close>닫기</button></div>`;
  stage.append(menu);
  ui.menu = menu;
  const wideCss = document.createElement("style");
  wideCss.textContent = "#app.aq-wide{grid-template-columns:minmax(0,1fr) 0}#app.aq-wide #panel{display:none}";
  document.head.append(wideCss);
  const applyWide = () => document.getElementById("app")?.classList.toggle("aq-wide", !!pref.wide);
  applyWide();
  const syncMenu = () => {
    menu.querySelectorAll("[data-pref]").forEach((el) => (el.checked = !!pref[el.dataset.pref]));
    menu.querySelectorAll("[data-cat]").forEach((el) => (el.checked = !!pref.cats[el.dataset.cat]));
    menu.querySelector("[data-freq]").value = pref.freq;
  };
  syncMenu();
  menu.onchange = (e) => {
    const el = e.target;
    if (el.dataset.pref) { pref[el.dataset.pref] = el.checked; applyWide(); }
    else if (el.dataset.cat) pref.cats[el.dataset.cat] = el.checked;
    else if (el.dataset.freq != null) { pref.freq = el.value; nextEvt = rnd(...FREQ[pref.freq]); }
    savePref();
  };
  const stopBtn = document.createElement("button");
  stopBtn.className = "cx-btn dark cx-stop"; stopBtn.textContent = "■ 그만 보기"; stopBtn.hidden = true;
  stage.append(stopBtn);
  ui.stop = stopBtn;
  btn.onclick = () => { menu.hidden = !menu.hidden; syncMenu(); };
  menu.onclick = (e) => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.i) { menu.hidden = true; beginScenario(S[+b.dataset.i]); }
    else if (b.dataset.now != null) { menu.hidden = true; const sc = pickEvent(); if (sc) beginScenario(sc); }
    else if (b.dataset.close != null) menu.hidden = true;
  };
  stopBtn.onclick = () => { endScenario(); stopBtn.hidden = true; };

  const C = {
    get active() { return !!cur; },
    tick(dt) {
      if (!cur && pref.autoEvt && (nextEvt -= dt) <= 0) { nextEvt = rnd(...FREQ[pref.freq]); const sc = pickEvent(); if (sc) beginScenario(sc); }
      tick(dt);
      if (cur) tickDebris(dt);
      if (!cur && (dayTimer -= dt) <= 0) { dayTimer = 5; const b = dayBase(); lightGoal = b ? { ...b, speed: 0.3 } : { speed: 0.3 }; }
      if (!cur) tickLight(dt);
      tickTour(dt);
    },
    list: S.map((s) => s.id),
    info: S.map((s) => ({ id: s.id, cat: s.cat, name: s.name })),
    play(id) { const sc = S.find((s) => s.id === id); if (sc) beginScenario(sc); },
    stop() { endScenario(true); },
    debug: () => cur && { id: cur.id, t: curT, parts: PARTS.length, state: Object.fromEntries(Object.entries(cur.state).filter(([, v]) => typeof v !== "object")) },
  };
  return C;
};
