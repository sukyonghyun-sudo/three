// 실시간 날씨 (판교 사옥) — 일반 <script> 로 읽는다. window.OfficeWeather(ctx) → { tick(dt), set(kind), state }
// Open-Meteo(무료 · 키 없음)에서 30분마다 지금 날씨를 받아: 비·눈은 사무실 바깥에만 내리고(지붕 없이 위에서 보는 모양이라 안은 마른 채),
// 흐림·비·안개는 화면을 살짝 어둡고 차분하게(안개도 뿌연 막 없이 흐린 날처럼), 천둥번개는 번쩍 + 조금 뒤 우르릉. 빗소리·천둥소리는 창이 활성화돼 있을 때만(audioCtx 가 켜져 있을 때).
// 위쪽 줄 날씨 칩(🌧️ 14°)을 누르면: 지금 날씨 · 효과 끄기 · 소리 끄기. 미리 보기: 주소 끝 ?weather=rain|heavy|snow|thunder|fog|cloudy|clear
window.OfficeWeather = function (ctx) {
  const { THREE, scene, ROOM } = ctx;
  const LAT = 37.4005, LON = 127.1066, PLACE = "판교 사옥";
  const PREF_KEY = "teamOfficeWeather";
  const pref = { fx: true, sound: true };
  try { Object.assign(pref, JSON.parse(localStorage.getItem(PREF_KEY)) || {}); } catch {}
  const savePref = () => { try { localStorage.setItem(PREF_KEY, JSON.stringify(pref)); } catch {} };
  const phone = matchMedia("(pointer: coarse)").matches;
  const KIND = { // [아이콘, 이름]
    clear: ["☀️", "맑음"], night: ["🌙", "맑은 밤"], cloudy: ["⛅", "구름 조금"], overcast: ["☁️", "흐림"], fog: ["🌫️", "안개"],
    drizzle: ["🌦️", "이슬비"], rain: ["🌧️", "비"], heavy: ["🌧️", "큰비"], snow: ["🌨️", "눈"], thunder: ["⛈️", "천둥번개"],
  };
  function fromCode(c, isDay) { // WMO 날씨 번호 → 우리 종류
    if (c === 0 || c === 1) return isDay ? "clear" : "night";
    if (c === 2) return "cloudy";
    if (c === 3) return "overcast";
    if (c === 45 || c === 48) return "fog";
    if (c >= 51 && c <= 57) return "drizzle";
    if ((c >= 61 && c <= 63) || c === 80 || c === 81 || c === 66) return "rain";
    if (c === 65 || c === 82 || c === 67) return "heavy";
    if ((c >= 71 && c <= 77) || c === 85 || c === 86) return "snow";
    if (c >= 95) return "thunder";
    return "cloudy";
  }
  const state = { kind: null, temp: null, wind: 0, hum: null, at: 0, ok: false, forced: null };

  // ── 비 · 눈: 사무실 바깥 둘레에만, 떨어지는 움직임은 그래픽 카드가 계산 (점 위치는 처음 한 번만) ──
  const OUT = 6.5, TOP = 8, CX = (ROOM.x0 + ROOM.x1) / 2, CZ = (ROOM.z0 + ROOM.z1) / 2;
  const outside = (x, z) => x < ROOM.x0 - 0.4 || x > ROOM.x1 + 0.4 || z < ROOM.z0 - 0.4 || z > ROOM.z1 + 0.4;
  function spots(n) {
    const a = [];
    while (a.length < n * 3) {
      const x = ROOM.x0 - OUT + Math.random() * (ROOM.x1 - ROOM.x0 + OUT * 2), z = ROOM.z0 - OUT + Math.random() * (ROOM.z1 - ROOM.z0 + OUT * 2);
      if (outside(x, z)) a.push(x, Math.random() * TOP, z);
    }
    return a;
  }
  const U = { uT: { value: 0 }, uSpeed: { value: 9 }, uSlant: { value: 0.12 }, uAlpha: { value: 0.5 }, uTop: { value: TOP } };
  const RAIN_N = phone ? 1800 : 3600;
  const rain = (() => {
    const base = spots(RAIN_N), pos = new Float32Array(RAIN_N * 6), end = new Float32Array(RAIN_N * 2);
    for (let i = 0; i < RAIN_N; i++) { for (const k of [0, 1]) { pos.set([base[i * 3], base[i * 3 + 1], base[i * 3 + 2]], (i * 2 + k) * 3); end[i * 2 + k] = k; } }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3)); g.setAttribute("aEnd", new THREE.BufferAttribute(end, 1));
    const m = new THREE.ShaderMaterial({
      uniforms: U, transparent: true, depthWrite: false,
      vertexShader: `attribute float aEnd; uniform float uT, uSpeed, uSlant, uTop; varying float vA;
        void main(){ vec3 p = position; float y = mod(p.y - uT * uSpeed, uTop);
          p.y = y + aEnd * 0.6; p.x += aEnd * 0.6 * uSlant; vA = 1.0 - aEnd * 0.6;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,
      fragmentShader: `uniform float uAlpha; varying float vA; void main(){ gl_FragColor = vec4(0.86, 0.91, 0.98, uAlpha * vA); }`,
    });
    const l = new THREE.LineSegments(g, m); l.frustumCulled = false; l.visible = false; l.renderOrder = 3; scene.add(l); return l;
  })();
  const SNOW_N = phone ? 900 : 1800, SNOW_PX = { value: 500 }, _v2 = new THREE.Vector2();
  const snow = (() => {
    const g = new THREE.BufferGeometry(), b = spots(SNOW_N), ph = new Float32Array(SNOW_N);
    for (let i = 0; i < SNOW_N; i++) ph[i] = Math.random() * 6.28;
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(b), 3)); g.setAttribute("aPh", new THREE.BufferAttribute(ph, 1));
    const m = new THREE.ShaderMaterial({
      uniforms: { ...U, uPx: SNOW_PX }, transparent: true, depthWrite: false,
      vertexShader: `attribute float aPh; uniform float uT, uTop, uPx; varying float vA;
        void main(){ vec3 p = position; p.y = mod(p.y - uT * 0.75, uTop); p.x += sin(uT * 0.8 + aPh) * 0.25; p.z += cos(uT * 0.6 + aPh * 1.3) * 0.2;
          vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = max(1.5, 0.055 * uPx / -mv.z); vA = 0.95; }`, // 눈송이 지름 5.5cm
      fragmentShader: `varying float vA; void main(){ vec2 c = gl_PointCoord - 0.5; float d = dot(c, c); if (d > 0.25) discard; gl_FragColor = vec4(1.0, 1.0, 1.0, vA * smoothstep(0.25, 0.08, d)); }`,
    });
    const p = new THREE.Points(g, m); p.frustumCulled = false; p.visible = false; p.renderOrder = 3; scene.add(p); return p;
  })();

  // ── 화면 분위기: 3D 화면 바로 위(글씨 층 아래)에 옅은 색 막 · 천둥 번쩍 ──
  const tint = document.createElement("div");
  tint.className = "wx-tint";
  tint.style.cssText = "position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity 2s ease,background 2s ease";
  ctx.renderer.domElement.after(tint);
  const flash = document.createElement("div");
  flash.style.cssText = "position:absolute;inset:0;pointer-events:none;background:#eef4ff;opacity:0;transition:opacity .08s";
  tint.after(flash);
  const MOOD = { // 막 색 · 진하기
    clear: ["rgba(0,0,0,0)", 0], night: ["rgba(0,0,0,0)", 0], cloudy: ["rgba(90,100,115,.10)", 1], overcast: ["rgba(80,90,105,.16)", 1],
    fog: ["rgba(80,90,105,.16)", 1], // 안개: 뿌연 막은 빼고(사용자) 흐린 날과 같은 분위기만
    drizzle: ["rgba(70,85,105,.16)", 1], rain: ["rgba(55,70,95,.22)", 1], heavy: ["rgba(40,52,75,.30)", 1], snow: ["rgba(200,214,232,.18)", 1], thunder: ["rgba(35,40,62,.34)", 1],
  };

  // ── 소리: 빗소리(걸러 낸 잡음) · 천둥(낮은 잡음 터짐) — audioCtx 가 켜져 있을 때만 ──
  let noiseBuf = null, rainSnd = null, thunderT = 0;
  function buf(a) {
    if (noiseBuf && noiseBuf.sampleRate === a.sampleRate) return noiseBuf;
    noiseBuf = a.createBuffer(1, a.sampleRate * 2, a.sampleRate);
    const d = noiseBuf.getChannelData(0); let last = 0;
    for (let i = 0; i < d.length; i++) { const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = w * 0.6 + last * 3; }
    return noiseBuf;
  }
  function rainSound(level) { // 0 = 끄기
    const a = ctx.audio?.();
    if (!level || !pref.sound || !a || a.state !== "running") { if (rainSnd) { const r = rainSnd; rainSnd = null; try { r.g.gain.setTargetAtTime(0, r.a.currentTime, 0.4); setTimeout(() => r.src.stop(), 1500); } catch {} } return; }
    if (rainSnd && rainSnd.a === a) { rainSnd.g.gain.setTargetAtTime(level, a.currentTime, 0.8); return; }
    const src = a.createBufferSource(), bp = a.createBiquadFilter(), hp = a.createBiquadFilter(), g = a.createGain();
    src.buffer = buf(a); src.loop = true;
    bp.type = "bandpass"; bp.frequency.value = 1600; bp.Q.value = 0.6; hp.type = "highpass"; hp.frequency.value = 300;
    g.gain.value = 0; src.connect(hp).connect(bp).connect(g).connect(a.destination); src.start();
    g.gain.setTargetAtTime(level, a.currentTime, 0.8);
    rainSnd = { a, src, g };
  }
  function rumble() {
    const a = ctx.audio?.();
    if (!pref.sound || !a || a.state !== "running") return;
    const t0 = a.currentTime + 0.4 + Math.random() * 1.4, src = a.createBufferSource(), lp = a.createBiquadFilter(), g = a.createGain();
    src.buffer = buf(a); lp.type = "lowpass"; lp.frequency.setValueAtTime(380, t0); lp.frequency.exponentialRampToValueAtTime(90, t0 + 3);
    g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(0.32, t0 + 0.12); g.gain.exponentialRampToValueAtTime(0.001, t0 + 3.4);
    src.connect(lp).connect(g).connect(a.destination); src.start(t0); src.stop(t0 + 3.6);
  }

  // ── 지금 날씨 적용 ──
  function apply() {
    const k = state.forced || state.kind;
    const on = pref.fx && !!k;
    const wet = on && ["drizzle", "rain", "heavy", "thunder"].includes(k);
    rain.visible = wet; snow.visible = on && k === "snow";
    U.uSpeed.value = k === "heavy" || k === "thunder" ? 12 : k === "drizzle" ? 6.5 : 9;
    U.uAlpha.value = k === "heavy" || k === "thunder" ? 0.85 : k === "drizzle" ? 0.45 : 0.7;
    U.uSlant.value = 0.08 + Math.min(0.5, (state.wind || 0) / 60);
    rain.geometry.setDrawRange(0, (k === "drizzle" ? 0.45 : 1) * RAIN_N * 2);
    const [bg, v] = (on && MOOD[k]) || MOOD.clear;
    tint.style.background = bg; tint.style.opacity = String(v);
    rainSound(wet ? (k === "heavy" || k === "thunder" ? 0.09 : k === "drizzle" ? 0.03 : 0.055) : 0);
    drawChip();
  }
  async function fetchNow() {
    try {
      const r = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,weather_code,wind_speed_10m,is_day,relative_humidity_2m&timezone=Asia%2FSeoul`);
      const j = await r.json(), c = j.current;
      Object.assign(state, { kind: fromCode(c.weather_code, c.is_day), temp: Math.round(c.temperature_2m), wind: c.wind_speed_10m, hum: c.relative_humidity_2m, at: Date.now(), ok: true });
      apply();
    } catch (e) { console.warn("날씨를 못 받았어요", e); }
  }

  // ── 날씨 칩 + 작은 창 ──
  const chip = document.createElement("button");
  chip.type = "button"; chip.className = "chip wxchip"; chip.hidden = true;
  chip.setAttribute("aria-haspopup", "true");
  const menu = document.createElement("div");
  menu.className = "wxmenu"; menu.hidden = true;
  const counts = ctx.hud?.querySelector(".counts");
  if (counts) counts.after(chip); else ctx.hud?.append(chip); // 근무 수 바로 옆
  (ctx.stage || document.body).append(menu);
  const agoText = () => { const m = Math.round((Date.now() - state.at) / 60000); return m < 1 ? "방금" : `${m}분 전`; };
  function drawChip() {
    const k = state.forced || state.kind;
    if (!k) { chip.hidden = true; return; }
    const [ic, name] = KIND[k];
    chip.hidden = false;
    chip.innerHTML = `<span class="ico">${ic}</span><span class="lbl"> ${name}</span>${state.temp != null ? ` <b>${state.temp}°</b>` : ""}`;
    chip.title = `${PLACE} 지금 날씨 — 누르면 효과·소리 설정`;
    chip.setAttribute("aria-label", `지금 날씨: ${name}${state.temp != null ? ` ${state.temp}도` : ""}`);
    if (!menu.hidden) drawMenu();
  }
  function drawMenu() {
    const k = state.forced || state.kind, [ic, name] = KIND[k] || ["", ""];
    const sw = (on) => `<i class="sw${on ? " on" : ""}"></i>`;
    menu.innerHTML = `<div class="wxnow"><span class="big">${ic}</span><div><b>${name}${state.temp != null ? ` · ${state.temp}°C` : ""}</b><span>${PLACE}${state.ok ? ` · ${agoText()} 업데이트` : ""}${state.forced ? " · 미리 보기" : ""}</span>${state.ok ? `<span>바람 ${(state.wind / 3.6).toFixed(1)}m/s · 습도 ${state.hum}%</span>` : ""}</div></div>
      <button type="button" data-p="fx"><span>🌦️</span><span>날씨 효과</span>${sw(pref.fx)}</button>
      <button type="button" data-p="sound"><span>🔊</span><span>빗소리 · 천둥소리</span>${sw(pref.sound)}</button>`;
  }
  chip.onclick = () => { menu.hidden = !menu.hidden; if (!menu.hidden) drawMenu(); };
  menu.onclick = (e) => { const b = e.target.closest("[data-p]"); if (!b) return; pref[b.dataset.p] = !pref[b.dataset.p]; savePref(); apply(); drawMenu(); };
  addEventListener("pointerdown", (e) => { if (!menu.hidden && !menu.contains(e.target) && !chip.contains(e.target)) menu.hidden = true; }, true);
  addEventListener("keydown", (e) => { if (e.key === "Escape") menu.hidden = true; });
  const css = document.createElement("style");
  css.textContent = `.wxchip{cursor:pointer;font:inherit;color:var(--ink)} .wxchip b{font-weight:700;margin-left:2px}
  .wxmenu{position:absolute;z-index:9;left:16px;top:56px;min-width:250px;background:rgba(249,249,251,.94);-webkit-backdrop-filter:saturate(180%) blur(24px);backdrop-filter:saturate(180%) blur(24px);border:.5px solid rgba(0,0,0,.08);border-radius:14px;box-shadow:0 16px 40px rgba(0,0,0,.18);padding:8px;display:flex;flex-direction:column;gap:2px}
  .wxmenu[hidden]{display:none}
  .wxnow{display:flex;gap:10px;align-items:center;padding:6px 8px 10px;border-bottom:.5px solid rgba(60,60,67,.14);margin-bottom:4px}
  .wxnow .big{font-size:34px;line-height:1}
  .wxnow b{display:block;font-size:15px;color:#1c1c1e}
  .wxnow span{display:block;font-size:12px;color:#6c6c70;margin-top:2px}
  .wxmenu button{display:flex;align-items:center;gap:10px;border:0;background:none;border-radius:9px;padding:10px 10px;font:inherit;font-size:14px;color:#1c1c1e;text-align:left;cursor:pointer;min-height:42px}
  .wxmenu button:hover{background:rgba(118,118,128,.1)}
  .wxmenu .sw{margin-left:auto;width:34px;height:20px;border-radius:20px;background:#e5e5ea;position:relative;flex:none;transition:background .2s}
  .wxmenu .sw::after{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.28);transition:transform .2s}
  .wxmenu .sw.on{background:#34c759}.wxmenu .sw.on::after{transform:translateX(14px)}
  @media (max-width:820px),(max-height:520px){.wxmenu{left:calc(10px + env(safe-area-inset-left));top:calc(56px + env(safe-area-inset-top))}}
  body.pip .wxchip,body.pip .wxmenu{display:none!important}`;
  document.head.append(css);

  // ── 매 프레임 ──
  let t = 0, retry = 0;
  function tick(dt) {
    t += dt; U.uT.value = t;
    if (snow.visible) SNOW_PX.value = ctx.renderer.getDrawingBufferSize(_v2).y * 0.5 * ctx.camera.projectionMatrix.elements[5]; // 눈송이 크기를 화면 해상도에 맞게
    const k = state.forced || state.kind;
    if (pref.fx && k === "thunder" && (thunderT -= dt) <= 0) { // 15~40초마다 번쩍 · 우르릉
      thunderT = 15 + Math.random() * 25;
      flash.style.opacity = "0.75"; setTimeout(() => { flash.style.opacity = "0"; }, 90);
      setTimeout(() => { flash.style.opacity = "0.45"; setTimeout(() => { flash.style.opacity = "0"; }, 70); }, 220);
      rumble();
    }
    // 소리: 창이 다시 활성화되면(audioCtx 다시 켜짐) 빗소리를 다시 건다
    if ((retry -= dt) <= 0) { retry = 2; const a = ctx.audio?.(); if (rain.visible && pref.sound && a && a.state === "running" && !rainSnd) apply(); }
  }
  const q = new URLSearchParams(location.search).get("weather");
  if (q && (KIND[q] || q === "heavy")) { state.forced = q; state.temp = state.temp ?? 12; apply(); }
  fetchNow();
  setInterval(() => { if (!document.hidden) fetchNow(); }, 30 * 60 * 1000);
  window.__weather = { state, set: (k) => { state.forced = k || null; apply(); }, pref, sound: () => !!rainSnd, thunder: () => { thunderT = 0; } }; // 점검용
  return { tick, state, set: (k) => { state.forced = k || null; apply(); } };
};
