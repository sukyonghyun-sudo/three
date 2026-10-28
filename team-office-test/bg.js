// 사무실 바깥 배경 — 기본 · 하늘 위 · 바다 위 · 숲속 (우주는 사용자 요청으로 뺌, 10-28). 그림 파일 없이 캔버스·셰이더로만 그린다
// 일반 <script> 로 읽는다. window.OfficeBg(ctx) → { kinds, set(id), id, tick(dt) }
//   ctx = { THREE, scene, renderer, camera, center(사무실 바닥 가운데), size:{w,d}, baseBg(「기본」 배경색) }
// 그림자 없음 · 배경 하나에 그리기 5번 이하 · scene.fog 는 안 쓴다 (고르면 null, 「기본」이면 처음 값) — 배경 재질이 멀수록 스스로 흐려진다
// 배경 셰이더는 사무실 조명·톤매핑을 안 받는다 (색이 늘 같다). 숲·바다의 나무·섬이 사무실을 가리면 점점이 비워 속이 보이게 한다
// 하늘 공·별·땅·바다는 카메라를 따라다녀 끝이 안 보인다. 매 프레임 tick(dt) 를 불러야 구름·물결·별이 움직인다
window.OfficeBg = function OfficeBg(ctx) {
  const { THREE, scene, camera, renderer } = ctx;
  const C = ctx.center.clone();
  const HW = (ctx.size?.w ?? 13.5) / 2 + 0.15, HD = (ctx.size?.d ?? 13.3) / 2 + 0.15; // 바닥판 반폭 (판은 사무실보다 0.3 넓다)
  const BASE = ctx.baseBg ?? (scene.background?.isColor ? "#" + scene.background.getHexString() : "#eef1f4");
  const FOG0 = scene.fog ?? null, FAR0 = camera.far;
  const R_SKY = 170, R_GROUND = 165; // 하늘 공·바닥 원판 반지름 (카메라 기준, camera.far 200 안쪽)
  const SUN = new THREE.Vector3(5, 13, 7).normalize(); // 사무실 해와 같은 쪽
  const U = { uTime: { value: 0 } }; // 모든 셰이더가 같이 쓰는 시간(초)
  const kinds = [
    { id: "none", label: "기본", emoji: "🏢" },
    { id: "sky", label: "하늘 위", emoji: "☁️" },
    { id: "sea", label: "바다 위", emoji: "🌊" },
    { id: "forest", label: "숲속", emoji: "🌲" },
  ];
  let cur = "none", world = null, time = 0, bin = [];

  // ───────────── 공용 ─────────────
  const keep = (x) => (bin.push(x), x); // 바꿀 때 dispose 할 것
  const col = (h) => ({ value: new THREE.Color(h) });
  const vec = (x, y, z) => ({ value: new THREE.Vector3(x, y, z) });
  const rng = (s) => () => { s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const shader = (o) => keep(new THREE.ShaderMaterial({ toneMapped: false, fog: false, ...o, uniforms: { ...U, ...o.uniforms } }));
  const quiet = (o) => { o.castShadow = o.receiveShadow = false; return o; };
  // 카메라 따라가기 (하늘 공은 xyz, 땅·바다는 xz 만)
  function follow(o, y) {
    o.frustumCulled = false;
    o.onBeforeRender = (r, s, cam) => { const e = cam.matrixWorld.elements; o.position.set(e[12], y ? e[13] : o.position.y, e[14]); o.updateMatrixWorld(); };
    return o;
  }
  const HEAD = `uniform float uTime;
float h21(vec2 p){ vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float h31(vec3 p){ p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y); }
float vn3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h31(i), h31(i + vec3(1.0, 0.0, 0.0)), f.x), mix(h31(i + vec3(0.0, 1.0, 0.0)), h31(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(h31(i + vec3(0.0, 0.0, 1.0)), h31(i + vec3(1.0, 0.0, 1.0)), f.x), mix(h31(i + vec3(0.0, 1.0, 1.0)), h31(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z); }
float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * vn(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 7.3; a *= 0.5; } return s; }
float fbm3(vec3 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * vn3(p); p = p * 2.03 + 5.1; a *= 0.5; } return s; }
float slabD(vec2 p, vec3 c, vec2 h){ vec2 q = abs(p - c.xz) - h; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0); }
`;
  const VERT_W = `varying vec3 vW;
void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`;

  // 하늘 공: 카메라를 감싸고, 깊이는 맨 뒤 (사무실을 절대 덮지 않는다). 빈 곳만 칠한다
  function dome(frag, uniforms) {
    const m = new THREE.Mesh(keep(new THREE.SphereGeometry(R_SKY, 40, 20)), shader({
      uniforms, side: THREE.BackSide, depthWrite: false,
      vertexShader: `varying vec3 vDir;
void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position.z = gl_Position.w * 0.99999; }`,
      fragmentShader: HEAD + "varying vec3 vDir;\n" + frag,
    }));
    m.renderOrder = 10; // 불투명 중 맨 나중 — 사무실·땅이 덮은 곳은 아예 안 칠한다
    return follow(quiet(m), true);
  }
  const SKY = `uniform vec3 uTop, uMid, uHor, uLow, uDeep, uSunC, uSun; uniform float uSunK;
void main(){
  vec3 d = normalize(vDir); float e = d.y;
  vec3 c = mix(uHor, uMid, smoothstep(0.0, 0.22, e));
  c = mix(c, uTop, smoothstep(0.18, 0.85, e));
  vec3 lo = mix(uHor, uLow, smoothstep(0.0, 0.07, -e));
  lo = mix(lo, uDeep, smoothstep(0.07, 0.8, -e));
  c = e >= 0.0 ? c : lo;
  float s = max(dot(d, normalize(uSun)), 0.0);
  c += uSunC * uSunK * (0.22 * pow(s, 6.0) + 0.45 * pow(s, 60.0) + smoothstep(0.9990, 0.9994, s));
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`;
  const skyDome = (o) => dome(SKY, {
    uTop: col(o.top), uMid: col(o.mid), uHor: col(o.hor), uLow: col(o.low), uDeep: col(o.deep),
    uSun: vec(-0.42, 0.16, -1), uSunC: col(o.sun ?? "#fff0d2"), uSunK: { value: o.sunK ?? 0.7 },
  });
  // 바닥 원판 (구름바다·물·풀밭) — 무늬는 세계 좌표라 따라다녀도 안 미끄러진다
  function ground(y, frag, uniforms) {
    const m = new THREE.Mesh(keep(new THREE.CircleGeometry(R_GROUND, 64).rotateX(-Math.PI / 2)), shader({
      uniforms: { uC: { value: C }, uHalf: { value: new THREE.Vector2(HW, HD) }, ...uniforms },
      vertexShader: VERT_W, fragmentShader: HEAD + "varying vec3 vW; uniform vec3 uC; uniform vec2 uHalf;\n" + frag,
    }));
    m.position.y = y;
    return follow(quiet(m), false);
  }

  // ───────────── 하늘 위 ─────────────
  // 뭉게구름 그림 4장 (512칸 2×2). R = 밝기, A = 모양 — 미리 곱한 알파로 올려 가장자리 회색 띠가 안 생기게
  function cloudAtlas() {
    const S = 512, K = S / 256, cv = document.createElement("canvas"); // 칸 하나 512 (아래 좌표는 256 기준 × K)
    cv.width = cv.height = S * 2;
    const g = cv.getContext("2d"), r = rng(7);
    for (let k = 0; k < 4; k++) {
      const ox = (k % 2) * S, oy = Math.floor(k / 2) * S, blobs = [];
      const n = 4 + Math.floor(r() * 3);
      for (let i = 0; i < n; i++) {
        const t = (i + 0.5) / n, sn = Math.sin(t * Math.PI);
        blobs.push([46 + t * 164 + (r() - 0.5) * 14, 166 - sn * (34 + r() * 38), 26 + sn * (24 + r() * 22)]);
      }
      for (let i = 0; i < 5; i++) blobs.push([52 + i * 38 + (r() - 0.5) * 10, 170, 22 + r() * 8]);
      blobs.sort((a, b) => a[1] - b[1]); // 위(뒤) 혹부터, 아래 줄이 앞에 겹친다
      g.save();
      g.beginPath(); g.rect(ox, oy, S, S); g.clip();
      g.filter = `blur(${1.4 * K}px)`;
      for (let [x, y, rad] of blobs) {
        x = ox + x * K; y = oy + y * K; rad *= K;
        const gr = g.createRadialGradient(x - rad * 0.35, y - rad * 0.42, 0, x - rad * 0.35, y - rad * 0.42, rad * 1.45);
        gr.addColorStop(0, "#ffffff"); gr.addColorStop(0.5, "#f4f4f4"); gr.addColorStop(1, "#b0b0b0");
        g.fillStyle = gr;
        g.beginPath(); g.arc(x, y, rad, 0, Math.PI * 2); g.fill();
      }
      g.filter = "none";
      // 아래는 납작하게 자르고, 아래쪽을 조금 어둡게
      g.globalCompositeOperation = "destination-out";
      const cut = g.createLinearGradient(0, oy + 176 * K, 0, oy + 190 * K);
      cut.addColorStop(0, "rgba(0,0,0,0)"); cut.addColorStop(1, "rgba(0,0,0,1)");
      g.fillStyle = cut; g.fillRect(ox, oy + 176 * K, S, S - 176 * K);
      g.globalCompositeOperation = "source-atop";
      const sh = g.createLinearGradient(0, oy + 100 * K, 0, oy + 190 * K);
      sh.addColorStop(0, "rgba(0,0,0,0)"); sh.addColorStop(1, "rgba(0,0,0,0.16)");
      g.fillStyle = sh; g.fillRect(ox, oy, S, S);
      g.restore();
    }
    const t = new THREE.CanvasTexture(cv);
    t.premultiplyAlpha = true;
    t.anisotropy = 4;
    return keep(t);
  }
  // 구름 덩이: 사무실 둘레·아래(y -9~-1.4)는 흘러가고, 먼 지평선 구름은 천천히 돈다. 사무실을 가리지 않게 가까운 구름은 판(-0.3)보다 낮게,
  // 아래 구름바다(-16)에 잘리지 않게 밑동은 그보다 높게
  function cloudPuffs(L) {
    const r = rng(11), list = [], R = 72;
    for (let i = 0; i < 150; i++) {
      const y = -1.4 - 7.6 * Math.pow(r(), 0.8), hsMax = Math.min(9, (-0.35 - y) / 0.9);
      list.push({ x: C.x + (r() * 2 - 1) * R, y, z: C.z + (r() * 2 - 1) * (R - 6), hs: hsMax * (0.5 + 0.5 * r()), tile: Math.floor(r() * 4), flip: r() < 0.5 ? -1 : 1, a: 0.9 + r() * 0.1, mode: 0, sp: 0.22 + r() * 0.16 });
    }
    for (let i = 0; i < 44; i++) {
      const ang = r() * Math.PI * 2, rad = 95 + r() * 55;
      const hs = 6 + r() * 9;
      list.push({ x: C.x + Math.cos(ang) * rad, y: -15 + hs * 0.5 + r() * 4, z: C.z + Math.sin(ang) * rad, hs, tile: Math.floor(r() * 4), flip: r() < 0.5 ? -1 : 1, a: 1, mode: 1, sp: 0.003 });
    }
    const N = list.length, base = new THREE.PlaneGeometry(1, 1), geo = new THREE.InstancedBufferGeometry();
    geo.index = base.index;
    geo.setAttribute("position", base.attributes.position);
    geo.setAttribute("uv", base.attributes.uv);
    const aPos = new THREE.InstancedBufferAttribute(new Float32Array(N * 3), 3), aVar = new THREE.InstancedBufferAttribute(new Float32Array(N * 4), 4), aMove = new THREE.InstancedBufferAttribute(new Float32Array(N * 2), 2);
    [aPos, aVar, aMove].forEach((a) => a.setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute("aPos", aPos); geo.setAttribute("aVar", aVar); geo.setAttribute("aMove", aMove);
    geo.instanceCount = N;
    const mat = shader({
      uniforms: { uMap: { value: cloudAtlas() }, uC: { value: C }, uR: { value: R }, ...L },
      transparent: true, premultipliedAlpha: true, depthWrite: false,
      vertexShader: `uniform float uTime; uniform vec3 uC; uniform float uR;
attribute vec3 aPos; attribute vec4 aVar; attribute vec2 aMove;
varying vec2 vUv; varying float vA, vFog;
void main(){
  vec3 p = aPos; float edge = 1.0;
  if (aMove.x > 0.5) { float a = aMove.y * uTime, c = cos(a), s = sin(a); vec2 d = p.xz - uC.xz; p.xz = uC.xz + vec2(c * d.x - s * d.y, s * d.x + c * d.y); }
  else { p.x = uC.x + mod(p.x - uC.x + uTime * aMove.y + uR, 2.0 * uR) - uR; edge = 1.0 - smoothstep(uR - 26.0, uR - 4.0, length(p.xz - uC.xz)); }
  vec4 mv = viewMatrix * vec4(p, 1.0);
  mv.xy += position.xy * 2.0 * abs(aVar.x);
  gl_Position = projectionMatrix * mv;
  vec2 t = vec2(mod(aVar.y, 2.0), floor(aVar.y * 0.5));
  vUv = (vec2(aVar.z > 0.0 ? uv.x : 1.0 - uv.x, uv.y) + t) * 0.5;
  float dist = length(mv.xyz);
  vA = aVar.w * edge * smoothstep(3.0, 9.0, dist);
  vFog = smoothstep(55.0, 230.0, dist);
}`,
      fragmentShader: `uniform sampler2D uMap; uniform vec3 uLite, uShade, uHaze;
varying vec2 vUv; varying float vA, vFog;
void main(){
  vec4 t = texture2D(uMap, vUv);
  float a = t.a * vA;
  if (a < 0.004) discard;
  vec3 c = mix(uShade, uLite, clamp(t.r / max(t.a, 0.001), 0.0, 1.0));
  gl_FragColor = vec4(mix(c, uHaze, vFog), a);
  #include <colorspace_fragment>
  gl_FragColor.rgb *= gl_FragColor.a;
}`,
    });
    const m = quiet(new THREE.Mesh(keep(geo), mat));
    m.frustumCulled = false;
    m.renderOrder = -1; // 사무실의 반투명(유리·잎·이름표)보다 먼저
    // 뒤에서 앞으로 그리게 가끔 다시 줄 세운다 (셰이더와 같은 식으로 지금 자리를 계산)
    const cam = new THREE.Vector3(), d2 = new Float32Array(N), idx = [...list.keys()];
    const md = (x, y) => x - y * Math.floor(x / y);
    function sort() {
      camera.getWorldPosition(cam);
      const t = U.uTime.value;
      list.forEach((p, i) => {
        let x = p.x, z = p.z;
        if (p.mode) { const a = p.sp * t, c = Math.cos(a), s = Math.sin(a), dx = x - C.x, dz = z - C.z; x = C.x + c * dx - s * dz; z = C.z + s * dx + c * dz; }
        else x = C.x + md(x - C.x + t * p.sp + R, 2 * R) - R;
        d2[i] = (x - cam.x) ** 2 + (p.y - cam.y) ** 2 + (z - cam.z) ** 2;
      });
      idx.sort((a, b) => d2[b] - d2[a]);
      idx.forEach((k, i) => {
        const p = list[k];
        aPos.setXYZ(i, p.x, p.y, p.z); aVar.setXYZW(i, p.hs, p.tile, p.flip, p.a); aMove.setXY(i, p.mode, p.sp);
      });
      aPos.needsUpdate = aVar.needsUpdate = aMove.needsUpdate = true;
    }
    sort();
    let acc = 0;
    return { mesh: m, tick(dt) { if ((acc += dt) > 0.25) { acc = 0; sort(); } } };
  }
  function buildSky() {
    const L = { uLite: col("#ffffff"), uShade: col("#adc0e8"), uHaze: col("#e2eaf8") };
    const d = skyDome({ top: "#5a9fe4", mid: "#98c7f1", hor: "#fbf1e6", low: "#e2eaf8", deep: "#c6d8f2" });
    // 아래 구름바다: 흰 구름 사이로 파란 하늘이 비친다
    const sea = ground(-16, `uniform vec3 uLite, uShade, uHaze, uSunD, uBlue;
void main(){
  vec2 p = vW.xz * 0.04 + vec2(uTime * 0.004, uTime * 0.0015);
  float n = fbm(p), e = 0.06;
  vec2 g = vec2(fbm(p + vec2(e, 0.0)) - n, fbm(p + vec2(0.0, e)) - n) / e;
  float lit = clamp(0.8 - dot(g, normalize(uSunD.xz)) * 0.3, 0.0, 1.0);
  vec3 cl = mix(uShade, uLite, clamp(lit * (0.5 + 0.5 * smoothstep(0.45, 0.75, n)) + 0.1, 0.0, 1.0));
  vec3 c = mix(uBlue, cl, smoothstep(0.4, 0.55, n));
  c = mix(c, uHaze, smoothstep(30.0, 150.0, length(vW - cameraPosition)));
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`, { ...L, uSunD: { value: SUN }, uBlue: col("#8dbbea") });
    const puffs = cloudPuffs(L);
    return { objs: [d, sea, puffs.mesh], bg: "#e2eaf8", tick: puffs.tick };
  }

  // ───────────── 바다 위 ─────────────
  function buildSea() {
    const HAZE = "#cde9f1", WY = -0.42;
    const d = skyDome({ top: "#5eaee8", mid: "#9cd0f1", hor: "#e6f4f7", low: HAZE, deep: "#b5ddeb" });
    const uBoat = { value: new THREE.Vector4(0, 0, 1, 0) }; // 배 x, z, 방향 cos, sin
    const water = ground(WY, `uniform vec3 uShal, uMid, uDeep, uLine, uFoam, uHaze; uniform vec4 uBoat;
void main(){
  vec2 p = vW.xz; float t = uTime;
  float sd = slabD(p, uC, uHalf), dist = length(vW - cameraPosition);
  vec3 c = mix(uShal, uMid, smoothstep(0.0, 10.0, sd));
  c = mix(c, uDeep, smoothstep(8.0, 55.0, sd));
  c *= 0.93 + 0.14 * fbm(p * 0.05 + vec2(t * 0.01, -t * 0.008));
  // 물빛 그물: 흘러가는 노이즈 두 겹이 만나는 곳 (군데군데만)
  float w = abs(vn(p * 0.34 + vec2(t * 0.12, t * 0.05)) - vn(p * 0.29 + vec2(-t * 0.07, t * 0.11) + 5.0));
  float line = (1.0 - smoothstep(0.01, 0.035 + fwidth(w) * 1.5, w)) * (1.0 - smoothstep(22.0, 60.0, dist));
  line *= smoothstep(0.3, 0.7, vn(p * 0.06 + vec2(t * 0.015, 3.0)));
  c = mix(c, uLine, line * 0.38);
  // 반짝이: 칸마다 하나, 제각각 깜빡인다
  vec2 q = p * 1.1 + vec2(t * 0.12, 0.0), cl = floor(q), f = fract(q) - 0.5;
  float h = h21(cl), tw = max(0.0, sin(t * (1.2 + h * 2.0) + h * 40.0));
  vec2 o = vec2(h21(cl + 3.1), h21(cl + 8.7)) - 0.5;
  float gl = (1.0 - smoothstep(0.045, 0.1, length((f - o * 0.6) * vec2(1.0, 2.0)))) * step(h, 0.4) * tw * tw;
  c = mix(c, vec3(1.0), gl * (1.0 - smoothstep(14.0, 40.0, dist)));
  // 판 둘레 거품 + 퍼져 나가는 물결 고리
  float fn = vn(p * 2.2 + t * 0.3);
  float foam = 1.0 - smoothstep(0.06, 0.28 + 0.22 * fn, sd);
  float ph = fract(sd * 0.22 - t * 0.12);
  float ring = smoothstep(0.0, 0.04, ph) * (1.0 - smoothstep(0.05, 0.13, ph)) * (1.0 - smoothstep(1.0, 10.0, sd)) * step(0.0, sd);
  foam = max(foam, ring * 0.38 * (0.55 + 0.45 * fn));
  // 배 둘레 거품 + 뒤로 벌어지는 물살
  vec2 b = p - uBoat.xy; float al = dot(b, uBoat.zw), si = dot(b, vec2(-uBoat.w, uBoat.z));
  foam = max(foam, (1.0 - smoothstep(0.75, 1.05, length(vec2(al / 1.25, si / 0.55)))) * (0.6 + 0.4 * fn));
  float wk = (1.0 - smoothstep(0.05, 0.16, abs(abs(si) - 0.35 - max(-al, 0.0) * 0.3))) * step(al, -0.4) * (1.0 - smoothstep(1.0, 8.0, -al));
  foam = max(foam, wk * 0.7 * (0.5 + 0.5 * fn));
  c = mix(c, uFoam, foam);
  c = mix(c, uHaze, smoothstep(35.0, 160.0, dist));
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`, { uShal: col("#7fd9de"), uMid: col("#45b7d6"), uDeep: col("#2b8fc9"), uLine: col("#d4f6f6"), uFoam: col("#ffffff"), uHaze: col(HAZE), uBoat });

    // 작은 섬 (모래 + 풀 + 야자수 + 돌) — 멀리 지평선 쪽에 몇 개
    const leaves = [];
    for (let k = 0; k < 5; k++) leaves.push([new THREE.ConeGeometry(0.24, 1.5, 4).scale(1, 1, 0.35).translate(0, 0.75, 0).rotateZ(-1.95).rotateY(k * 1.2566 + 0.3), "#5aa94c", 0, 0.57, 3.1, 0]);
    const isleGeo = merge([
      [new THREE.CylinderGeometry(2.4, 3.0, 0.8, 9), "#f3e2b3", 0, 0, 0, 0],
      [new THREE.CylinderGeometry(1.5, 2.0, 0.35, 9), "#ffffff", 1, -0.3, 0.55, 0.2],
      [new THREE.CylinderGeometry(0.09, 0.14, 2.6, 5).rotateZ(-0.22), "#9a7350", 0, 0.284, 1.87, 0],
      ...leaves,
      [new THREE.IcosahedronGeometry(0.45, 0).scale(1.3, 0.8, 1), "#bdb5a8", 0, -1.6, 0.45, 0.9],
    ]);
    const r = rng(9), isles = [];
    for (let k = 0; k < 6; k++) {
      const ang = k * 1.047 + r() * 0.7, rad = 42 + r() * 60, s = 1.2 + rad / 45;
      isles.push({ x: C.x + Math.cos(ang) * rad, z: C.z + Math.sin(ang) * rad, s, sx: 0.9 + r() * 0.3, sy: 1, rot: r() * 6.28, col: ["#93cf68", "#86c45e", "#a1d572"][k % 3] });
    }
    const islands = instanced(isleGeo, lowpolyMat(3.4, HAZE), isles, WY - 0.05);

    // 돛단배 한 척 — 사무실 둘레를 천천히 돈다
    const boat = quiet(new THREE.Mesh(merge([
      [new THREE.CylinderGeometry(0.62, 0.42, 0.36, 4).rotateY(Math.PI / 4).scale(1.7, 1, 0.75), "#ee6e55", 0, 0, 0.12, 0],
      [new THREE.BoxGeometry(1.3, 0.06, 0.5), "#fff6ea", 0, 0, 0.31, 0],
      [new THREE.CylinderGeometry(0.035, 0.045, 1.7, 5), "#8a6446", 0, 0.1, 1.15, 0],
      [new THREE.ConeGeometry(0.62, 1.35, 3).scale(1, 1, 0.12), "#fffdf6", 0, 0.45, 1.2, 0],
      [new THREE.BoxGeometry(0.28, 0.16, 0.02), "#f6c94a", 0, 0.24, 1.95, 0],
    ]), lowpolyMat(2.0, HAZE)));
    const BR = 19;
    let ba = 2.2;
    const place = (dt) => {
      ba += dt * 0.022;
      const t = U.uTime.value, x = C.x + Math.cos(ba) * BR, z = C.z + Math.sin(ba) * BR, hx = -Math.sin(ba), hz = Math.cos(ba);
      boat.position.set(x, WY + 0.04 * Math.sin(t * 1.7), z);
      boat.rotation.set(0.05 * Math.sin(t * 1.3), Math.atan2(-hz, hx), 0.04 * Math.sin(t * 1.1));
      uBoat.value.set(x, z, hx, hz);
    };
    place(0);
    return { objs: [d, water, islands, boat], bg: HAZE, tick: place };
  }

  // ───────────── 숲속 ─────────────
  // 낮은 다각형 셰이더 (나무·덤불·바위): 면마다 평평한 빛, 사무실을 가리면 점점이 비워 속이 보이게
  function lowpolyMat(topH, haze) {
    return shader({
      uniforms: {
        uSunD: { value: SUN }, uHaze: col(haze), uTop: { value: topH },
        uBoxMin: vec(C.x - HW - 0.7, -0.4, C.z - HD - 0.7), uBoxMax: vec(C.x + HW + 0.7, 3.2, C.z + HD + 0.7),
      },
      vertexShader: `uniform vec3 uBoxMin, uBoxMax; uniform float uTop; attribute vec4 aCol;
varying vec3 vW, vCol; varying float vFade;
float hitBox(vec3 ro, vec3 rd){ vec3 inv = 1.0 / rd, t0 = (uBoxMin - ro) * inv, t1 = (uBoxMax - ro) * inv, a = min(t0, t1), b = max(t0, t1);
  return min(min(b.x, b.y), b.z) - max(max(a.x, a.y), max(a.z, 0.0)); }
void main(){
  vec3 c = aCol.rgb;
  #ifdef USE_INSTANCING_COLOR
  c = mix(c, c * instanceColor, aCol.a);
  #endif
  vCol = c;
  vec4 p = vec4(position, 1.0); vec3 base = vec3(0.0); float hs = 1.0;
  #ifdef USE_INSTANCING
  p = instanceMatrix * p; base = instanceMatrix[3].xyz; hs = length(instanceMatrix[1].xyz);
  #endif
  vec4 w = modelMatrix * p; vW = w.xyz;
  base = (modelMatrix * vec4(base, 1.0)).xyz;
  vec3 top = base + vec3(0.0, uTop * hs * 0.85, 0.0), mid = base + vec3(0.0, uTop * hs * 0.45, 0.0);
  float o = max(hitBox(top, normalize(top - cameraPosition) + 1e-4), hitBox(mid, normalize(mid - cameraPosition) + 1e-4));
  vFade = max(smoothstep(0.0, 1.2, o), 1.0 - smoothstep(4.0, 10.0, distance(cameraPosition, mid)));
  gl_Position = projectionMatrix * viewMatrix * w;
}`,
      fragmentShader: `uniform vec3 uSunD, uHaze; varying vec3 vW, vCol; varying float vFade;
void main(){
  if (vFade > 0.002 && fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) < vFade) discard;
  vec3 n = normalize(cross(dFdx(vW), dFdy(vW)));
  vec3 c = vCol * (0.52 + 0.6 * max(dot(n, uSunD), 0.0) + 0.1 * n.y);
  c = mix(c, uHaze, smoothstep(45.0, 165.0, length(vW - cameraPosition)));
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`,
    });
  }
  // 조각을 한 덩어리로 (aCol.rgb = 색, aCol.a = 1 이면 그루마다 색을 곱한다)
  function merge(parts) {
    const pos = [], ca = [];
    for (const [geo, hex, tint, x = 0, y = 0, z = 0] of parts) {
      const g = geo.index ? geo.toNonIndexed() : geo, a = g.attributes.position.array, c = new THREE.Color(hex);
      for (let i = 0; i < a.length; i += 3) { pos.push(a[i] + x, a[i + 1] + y, a[i + 2] + z); ca.push(c.r, c.g, c.b, tint); }
      geo.dispose(); g.dispose();
    }
    const out = new THREE.BufferGeometry();
    out.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    out.setAttribute("aCol", new THREE.Float32BufferAttribute(ca, 4));
    return keep(out);
  }
  function instanced(geo, mat, list, y) {
    const m = quiet(new THREE.InstancedMesh(geo, mat, list.length));
    const mx = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), s = new THREE.Vector3(), p = new THREE.Vector3(), c = new THREE.Color();
    list.forEach((t, i) => {
      mx.compose(p.set(t.x, y, t.z), q.setFromEuler(e.set(0, t.rot, 0)), s.set(t.s * t.sx, t.s * t.sy, t.s * t.sx));
      m.setMatrixAt(i, mx);
      m.setColorAt(i, c.set(t.col));
    });
    m.frustumCulled = false;
    return m;
  }
  function buildForest() {
    const HAZE = "#dfead6", GY = -0.31;
    const d = skyDome({ top: "#7cc0ee", mid: "#b8e0f4", hor: "#f3f6e8", low: HAZE, deep: "#cbdcbf", sunK: 0.5 });
    const grass = ground(GY, `uniform vec3 uG1, uG2, uG3, uHaze;
void main(){
  vec2 p = vW.xz; float dist = length(vW - cameraPosition), sd = slabD(p, uC, uHalf);
  vec3 c = mix(uG1, uG2, smoothstep(0.38, 0.62, fbm(p * 0.06)));
  c = mix(c, uG3, smoothstep(0.55, 0.85, vn(p * 0.8)) * 0.35 * (1.0 - smoothstep(20.0, 50.0, dist)));
  // 들꽃 점
  vec2 q = p * 1.3, cell = floor(q), f = fract(q) - 0.5;
  float h = h21(cell); vec2 o = vec2(h21(cell + 7.1), h21(cell + 3.7)) - 0.5;
  float fl = step(h, 0.06) * (1.0 - smoothstep(0.07, 0.11, length(f - o * 0.6))) * (1.0 - smoothstep(16.0, 36.0, dist)) * smoothstep(0.4, 1.2, sd);
  vec3 fc = h < 0.02 ? vec3(1.0, 0.98, 0.92) : (h < 0.04 ? vec3(1.0, 0.82, 0.3) : vec3(1.0, 0.62, 0.75));
  c = mix(c, fc, fl);
  c *= mix(0.74, 1.0, smoothstep(0.0, 1.3, sd)); // 판 둘레 그늘
  c = mix(c, uHaze, smoothstep(40.0, 160.0, dist));
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`, { uG1: col("#86c062"), uG2: col("#9fce6c"), uG3: col("#6faa52"), uHaze: col(HAZE) });

    // 자리 뽑기: 사무실 판에서 떨어진 고리(11~80)에, 서로 안 겹치게. 가까이는 촘촘·작게, 멀리는 듬성·크게
    const r = rng(5), cell = 6, grid = new Map();
    const near = (x, z, rad) => {
      const ix = Math.floor(x / cell), iz = Math.floor(z / cell);
      for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (const o of grid.get(`${ix + a},${iz + b}`) ?? []) if ((o.x - x) ** 2 + (o.z - z) ** 2 < ((o.r + rad) * 0.85) ** 2) return true;
      return false;
    };
    function scatter(n, rMin, rMax, pow, gap, make) {
      const out = [];
      for (let k = 0; out.length < n && k < n * 30; k++) {
        const rad = rMin + (rMax - rMin) * Math.pow(r(), pow), ang = r() * Math.PI * 2;
        const x = C.x + Math.cos(ang) * rad, z = C.z + Math.sin(ang) * rad, o = make(rad);
        const qx = Math.abs(x - C.x) - HW, qz = Math.abs(z - C.z) - HD;
        if (Math.hypot(Math.max(qx, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, qz), 0) < o.r + gap) continue;
        if (near(x, z, o.r)) continue;
        Object.assign(o, { x, z, rot: r() * Math.PI * 2 });
        const key = `${Math.floor(x / cell)},${Math.floor(z / cell)}`;
        if (!grid.has(key)) grid.set(key, []);
        grid.get(key).push(o); out.push(o);
      }
      return out;
    }
    const grow = (rad) => (0.8 + Math.min(1, (rad - 11) / 60) * 0.95) * (0.85 + r() * 0.3);
    const pick = (a) => a[Math.floor(r() * a.length)];
    const PINE = ["#3f8f5a", "#4a9c5e", "#357f52", "#5aa765"];
    const ROUND = ["#79c05a", "#8acb5c", "#6db457", "#9ccf5f", "#79c05a", "#8acb5c"];
    const pines = scatter(170, 11, 80, 1.5, 1.6, (rad) => { const s = grow(rad); return { s, sx: 0.9 + r() * 0.2, sy: 0.9 + r() * 0.25, r: 0.95 * s, col: pick(PINE) }; });
    const rounds = scatter(150, 11, 80, 1.5, 1.6, (rad) => { const s = grow(rad); const k = r(); return { s, sx: 0.9 + r() * 0.25, sy: 0.9 + r() * 0.2, r: 1.0 * s, col: k < 0.06 ? "#f2a9c4" : k < 0.11 ? "#e8b64e" : pick(ROUND) }; });
    const bush = scatter(120, 9.6, 60, 1.3, 0.5, () => { const s = 0.45 + r() * 0.5; return { s, sx: 1 + r() * 0.4, sy: 0.65 + r() * 0.2, r: 0.6 * s, col: pick(["#6cb556", "#7fc05c", "#5ea94f", "#8cc65f"]) }; });
    const rock = scatter(45, 10, 60, 1.2, 0.5, () => { const s = 0.35 + r() * 0.55; return { s, sx: 1 + r() * 0.5, sy: 0.45 + r() * 0.25, r: 0.6 * s, col: pick(["#bdb7ad", "#a9a49b", "#c9c2b6"]) }; });

    const TRUNK = "#8a6446";
    const pineGeo = merge([
      [new THREE.CylinderGeometry(0.11, 0.15, 0.7, 6, 1, true), TRUNK, 0, 0, 0.35, 0],
      [new THREE.ConeGeometry(0.95, 1.4, 7), "#ffffff", 1, 0, 1.15, 0],
      [new THREE.ConeGeometry(0.74, 1.2, 7), "#ffffff", 1, 0, 1.85, 0],
      [new THREE.ConeGeometry(0.5, 1.0, 7), "#ffffff", 1, 0, 2.45, 0],
    ]);
    const roundGeo = merge([
      [new THREE.CylinderGeometry(0.12, 0.17, 1.0, 6, 1, true), TRUNK, 0, 0, 0.5, 0],
      [new THREE.IcosahedronGeometry(0.95, 1).scale(1, 1.08, 1), "#ffffff", 1, 0, 1.6, 0],
    ]);
    const lumpGeo = merge([[new THREE.IcosahedronGeometry(0.6, 1).translate(0, 0.35, 0), "#ffffff", 1]]);
    const objs = [d, grass,
      instanced(pineGeo, lowpolyMat(2.95, HAZE), pines, GY - 0.05),
      instanced(roundGeo, lowpolyMat(2.6, HAZE), rounds, GY - 0.05),
      instanced(lumpGeo, lowpolyMat(0.9, HAZE), [...bush, ...rock], GY - 0.08),
    ];
    return { objs, bg: HAZE };
  }

  // ───────────── 바꾸기 ─────────────
  const BUILD = { sky: buildSky, sea: buildSea, forest: buildForest };
  function clear() {
    if (world) {
      world.group.removeFromParent();
      world.group.traverse((o) => o.isInstancedMesh && o.dispose()); // 그루별 행렬·색 버퍼
      world = null;
    }
    bin.forEach((x) => x.dispose());
    bin = [];
  }
  function set(id) {
    if (!BUILD[id]) id = "none";
    if (id === cur) return;
    clear();
    cur = id;
    if (id === "none") {
      scene.background = new THREE.Color(BASE);
      scene.fog = FOG0;
      if (camera.far !== FAR0) { camera.far = FAR0; camera.updateProjectionMatrix(); }
      return;
    }
    const w = BUILD[id]();
    const group = new THREE.Group();
    group.name = "officeBg";
    w.objs.forEach((o) => group.add(o));
    group.traverse((o) => { o.raycast = () => {}; }); // 클릭(사람 고르기)에 안 걸리게
    scene.add(group);
    world = { group, tick: w.tick };
    scene.background = new THREE.Color(w.bg);
    scene.fog = null;
    if (camera.far < 190) { camera.far = 200; camera.updateProjectionMatrix(); } // 바닥 원판 끝(165)까지 보이게 — 「기본」이면 되돌린다
  }
  return {
    kinds,
    set,
    get id() { return cur; },
    tick(dt) {
      if (cur === "none" || !world) return;
      time += Math.min(dt || 0, 0.1);
      U.uTime.value = time;
      world.tick?.(dt || 0);
    },
  };
};
