// 한아린 책상 둘레에서 노는 고양이 두 마리 (치즈 · 회색) — 일반 <script> 로 읽는다. window.OfficeCats(ctx) → { tick(dt), hit(ray), pet(cat), objects }
// 도형을 이어 만든 3D 고양이: 볼살·하얀 주둥이·삼각 코·수염·색 있는 눈동자(세로 동공), 가슴·허리·엉덩이 몸매, 줄무늬·이마 M·턱받이·양말(점마다 색),
// 무릎이 굽는 다리 · 분홍 젤리 · 마디 10개 꼬리. 걷기 · 앉기(꼬리 감기) · 식빵 · 그루밍 · 서로 쫓기 · 벌러덩(배 보여 주기),
// 눈 깜빡 · 귀 쫑긋 · 숨 쉬기 · 앉아서 화면 쪽 쳐다보기. 누르면 「냐옹~」 하고 벌러덩 (소리는 창이 활성화돼 있을 때만)
// 같은 색 조각은 한 덩어리로 합쳐 고양이 한 마리에 그리기 20번 남짓
window.OfficeCats = function (ctx) {
  const { THREE, scene, seat, aisleX } = ctx;
  const k = 1.35 * (ctx.H || 1.25) / 1.25; // 사람 크기에 맞춘 고양이 크기 (머리 큰 캐릭터 옆에서도 잘 보이게 조금 크게)
  const rnd = (a, b) => a + Math.random() * (b - a);
  const f = Math.sign(seat.desk.x - seat.inPos.x) || 1; // 책상 쪽 방향
  // 노는 곳: 의자 등받이 뒤 ~ 통로 가운데, 자리 앞뒤 1m
  let xa = seat.inPos.x - f * 0.32, xb = aisleX;
  if (Math.abs(xb - xa) < 0.45) xb = xa - f * 0.45;
  const X0 = Math.min(xa, xb), X1 = Math.max(xa, xb), Z0 = seat.desk.z - 1.0, Z1 = seat.desk.z + 1.0;
  const inside = (x, z) => [THREE.MathUtils.clamp(x, X0, X1), THREE.MathUtils.clamp(z, Z0, Z1)];

  // ── 조각 만들기: 도형을 옮기고 · 늘리고 · 점마다 색을 칠한 뒤 한 덩어리로 ──
  const MAT = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.82 });
  // 몸통: 엉덩이 · 허리 · 가슴이 매끄럽게 이어지는 한 덩어리 (옆모습 윤곽을 앞뒤 축으로 돌려 만든다)
  const TORSO = (() => {
    const pts = new THREE.SplineCurve([[0, -0.136], [0.046, -0.126], [0.066, -0.098], [0.07, -0.062], [0.064, -0.018], [0.062, 0.022], [0.066, 0.058], [0.061, 0.092], [0.038, 0.116], [0, 0.124]].map(([r, z]) => new THREE.Vector2(r, z))).getPoints(30);
    pts[0].x = 0; pts[pts.length - 1].x = 0;
    return new THREE.LatheGeometry(pts, 32).rotateX(Math.PI / 2);
  })();
  const SPH = new THREE.SphereGeometry(1, 28, 20), CONE = new THREE.ConeGeometry(1, 1, 14), CAP = new THREE.CapsuleGeometry(1, 1, 6, 12), CYL = new THREE.CylinderGeometry(1, 1, 1, 5);
  const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3(), _c = new THREE.Color(), _w = new THREE.Vector3();
  function piece(geo, s, p, r, color) { // color: "#hex" 또는 (점 위치) → "#hex"
    _e.set(...(r || [0, 0, 0])); _q.setFromEuler(_e); _m.compose(_p.set(...p), _q, _s.set(...s));
    const g = geo.clone().applyMatrix4(_m), out = g.index ? g.toNonIndexed() : g, pos = out.attributes.position, col = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) { _c.set(typeof color === "function" ? color(_w.fromBufferAttribute(pos, i)) : color); col.set([_c.r, _c.g, _c.b], i * 3); }
    out.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return out;
  }
  function lump(list, parent, shadow) {
    const n = list.reduce((a, g) => a + g.attributes.position.count, 0), P = new Float32Array(n * 3), N = new Float32Array(n * 3), C = new Float32Array(n * 3);
    let o = 0;
    for (const g of list) { P.set(g.attributes.position.array, o * 3); N.set(g.attributes.normal.array, o * 3); C.set(g.attributes.color.array, o * 3); o += g.attributes.position.count; g.dispose(); }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(P, 3)); geo.setAttribute("normal", new THREE.BufferAttribute(N, 3)); geo.setAttribute("color", new THREE.BufferAttribute(C, 3));
    geo.computeBoundingSphere();
    const m = new THREE.Mesh(geo, MAT); m.castShadow = !!shadow; parent.add(m);
    return m;
  }
  const grp = (parent, p) => { const g = new THREE.Group(); if (p) g.position.set(...p); parent.add(g); return g; };
  const PINK = "#f4a7b5", NOSE = "#e98a9b", DARK = "#2a2522";

  function makeCat(C) {
    const root = new THREE.Group();
    root.scale.setScalar(k);
    const body = grp(root, [0, 0.13, 0]);
    // 몸: 가슴 · 허리 · 엉덩이 (위·옆은 털 무늬, 아래는 배 색, 회색이는 가슴에 하얀 턱받이)
    const fur = (v) => {
      if (v.y < -0.046 + 0.006 * Math.cos(v.z * 18)) return C.belly; // 배 (아래쪽만)
      if (C.bib && v.z > 0.085 && v.y < 0.03) return C.belly; // 턱받이
      if (C.stripe && v.y > -0.022 && Math.sin(v.z * 95 + Math.abs(v.x) * 30) > 0.45) return C.stripe; // 줄무늬 (등에서 옆으로 흐름)
      return C.fur;
    };
    lump([
      piece(TORSO, [1, 0.96, 1], [0, 0, 0], 0, fur), // 엉덩이 · 허리 · 가슴
      piece(SPH, [0.042, 0.05, 0.045], [0, 0.048, 0.098], [0.5, 0, 0], (v) => (C.bib && v.z > 0.11 ? C.belly : C.fur)), // 목
    ], body, true);
    // 머리: 볼살 · 주둥이 · 턱 · 코 · 귀 · 수염 · 이마 M (치즈)
    const head = grp(body, [0, 0.088, 0.128]);
    const skull = (v) => (C.stripe && v.y > 0.03 && v.z > 0.02 && Math.abs(Math.sin(v.x * 70)) > 0.82 && Math.abs(v.x) < 0.035 ? C.stripe : C.fur);
    const earL = grp(head, [-0.042, 0.052, -0.006]), earR = grp(head, [0.042, 0.052, -0.006]);
    lump([
      piece(SPH, [0.071, 0.062, 0.064], [0, 0, 0], 0, skull),
      piece(SPH, [0.04, 0.034, 0.038], [-0.038, -0.02, 0.016], 0, C.fur), piece(SPH, [0.04, 0.034, 0.038], [0.038, -0.02, 0.016], 0, C.fur), // 볼살
      piece(SPH, [0.021, 0.017, 0.017], [-0.014, -0.029, 0.057], 0, C.muzzle), piece(SPH, [0.021, 0.017, 0.017], [0.014, -0.029, 0.057], 0, C.muzzle), // 수염 자리
      piece(SPH, [0.017, 0.012, 0.016], [0, -0.044, 0.049], 0, C.muzzle), // 턱
      piece(CONE, [0.0095, 0.009, 0.006], [0, -0.013, 0.07], [Math.PI, 0, 0], NOSE), // 코 (아래로 뾰족한 삼각)
      piece(CYL, [0.0013, 0.012, 0.0013], [0, -0.026, 0.07], 0, DARK), // 코 밑 선
      ...[-1, 1].flatMap((s) => [0.012, 0, -0.012].map((dy, j) => piece(CYL, [0.0011, 0.07, 0.0011], [s * 0.05, -0.03 + dy, 0.052], [0, s * (0.3 + j * 0.08), Math.PI / 2 + s * (0.12 - j * 0.12)], "#ffffff"))), // 수염
    ], head, true);
    for (const [ear, s] of [[earL, -1], [earR, 1]]) {
      ear.rotation.set(-0.12, 0, -s * 0.36);
      lump([piece(CONE, [0.031, 0.056, 0.019], [0, 0.026, 0], 0, C.fur), piece(CONE, [0.019, 0.04, 0.009], [0, 0.022, 0.009], 0, PINK)], ear);
    }
    const eyes = [-1, 1].map((s) => {
      const e = grp(head, [s * 0.03, 0.006, 0.054]);
      e.rotation.y = s * 0.32;
      lump([
        piece(SPH, [0.018, 0.02, 0.009], [0, 0, 0], 0, C.eye), // 눈동자 색
        piece(SPH, [0.006, 0.016, 0.004], [0, 0, 0.0065], 0, "#15120f"), // 세로 동공
        piece(SPH, [0.0045, 0.0045, 0.003], [s * -0.005, 0.008, 0.0095], 0, "#ffffff"), // 반짝
      ], e);
      return e;
    });
    // 다리: 허벅지 → 무릎 → 정강이 · 발 · 분홍 젤리 (회색이는 하얀 양말)
    const legs = [];
    for (const [x, z, back] of [[-0.04, 0.07, 0], [0.04, 0.07, 0], [-0.043, -0.068, 1], [0.043, -0.068, 1]]) {
      const hip = grp(body, [x, -0.026, z]);
      lump([piece(CAP, back ? [0.027, 0.032, 0.03] : [0.021, 0.034, 0.022], [0, -0.022, back ? -0.004 : 0], 0, C.fur)], hip, true);
      const knee = grp(hip, [0, -0.05, 0]);
      const sock = C.socks ? C.belly : C.fur;
      lump([
        piece(CAP, [0.017, 0.03, 0.018], [0, -0.02, 0], 0, (v) => (v.y < -0.012 ? sock : C.fur)),
        piece(SPH, [0.023, 0.015, 0.029], [0, -0.048, 0.008], 0, sock), // 발
        piece(SPH, [0.011, 0.004, 0.01], [0, -0.062, 0.003], 0, PINK), // 큰 젤리
        ...[-1, 0, 1].map((t) => piece(SPH, [0.0055, 0.0035, 0.0055], [t * 0.009, -0.06, 0.02 - Math.abs(t) * 0.003], 0, PINK)), // 발가락 젤리
      ], knee, true);
      legs.push({ hip, knee, back: !!back });
    }
    // 꼬리: 마디 10개 (끝은 다른 색 · 치즈는 고리 무늬)
    const tail = [];
    let parent = grp(body, [0, 0.03, -0.122]);
    for (let i = 0; i < 10; i++) {
      const seg = grp(parent, i ? [0, 0, -0.019] : null);
      const r = 0.0135 - i * 0.0006, ring = C.stripe && i % 2 ? C.stripe : C.fur, col = i >= 8 && C.tip ? C.tip : ring;
      lump([piece(CAP, [r, 0.012, r], [0, 0, -0.0095], [Math.PI / 2, 0, 0], col)], seg);
      tail.push(seg);
      parent = seg;
    }
    scene.add(root);
    const cat = { root, body, head, eyes, ears: [earL, earR], legs, tail, name: C.name, phase: rnd(0, 6), state: "sit", t: rnd(1, 3), target: null, roll: 0, rollTo: 0, sitA: 0, loaf: 0, hop: 0, speed: 0,
      blink: rnd(1, 4), blinkT: 0, twitch: [0, 0], twitchT: rnd(2, 6), look: 0, lookT: rnd(2, 5), tailSide: Math.random() < 0.5 ? -1 : 1, breath: rnd(0, 6), guest: null, heartT: 0, notice: rnd(3, 8), watch: null, watchT: 0 };
    root.traverse((o) => { if (o.isMesh) o.userData.cat = cat; });
    return cat;
  }
  const cats = [
    makeCat({ name: "치즈", fur: "#f2a65c", stripe: "#d9782f", belly: "#fff3e3", muzzle: "#fff7ee", eye: "#d9a21b", tip: "#d9782f" }),
    makeCat({ name: "회색", fur: "#98a2ad", belly: "#f7f7f5", muzzle: "#ffffff", eye: "#7fbf63", tip: "#f7f7f5", bib: true, socks: true }),
  ];
  cats.forEach((c, i) => {
    const [x, z] = inside(rnd(X0, X1), seat.desk.z + (i ? 0.45 : -0.45));
    c.root.position.set(x, 0, z);
    c.root.rotation.y = rnd(0, Math.PI * 2);
  });
  const objects = [];
  cats.forEach((c) => c.root.traverse((o) => o.isMesh && objects.push(o)));

  // 하는 일 고르기: 걷기 · 앉기 · 식빵 · 그루밍 · 벌러덩 · 쫓기
  function next(c) {
    const other = cats.find((o) => o !== c), r = Math.random();
    c.target = null; c.rollTo = 0; c.chase = null; c.guest = null; c.fleeFrom = null;
    if (r < 0.34) { c.state = "walk"; c.t = rnd(2, 5); const [x, z] = inside(rnd(X0, X1), rnd(Z0, Z1)); c.target = new THREE.Vector3(x, 0, z); c.speed = 0.22; }
    else if (r < 0.52) { c.state = "sit"; c.t = rnd(3, 6); c.tailSide = Math.random() < 0.5 ? -1 : 1; }
    else if (r < 0.64) { c.state = "loaf"; c.t = rnd(4, 8); }
    else if (r < 0.74) { c.state = "groom"; c.t = rnd(3, 5); }
    else if (r < 0.86) { c.state = "belly"; c.t = rnd(3, 5); c.rollTo = Math.PI * 0.92; }
    else if (other.state !== "belly") { c.state = "chase"; c.t = rnd(2.5, 4); c.chase = other; c.speed = 0.42; if (other.state !== "chase") { other.state = "flee"; other.t = c.t; other.speed = 0.4; other.target = null; other.rollTo = 0; } }
    else { c.state = "sit"; c.t = rnd(2, 4); }
  }
  const tmp = new THREE.Vector3(), camL = new THREE.Vector3();
  function tick(dt) {
    dt = Math.min(dt, 0.05);
    for (const c of cats) {
      const other = cats.find((o) => o !== c);
      if ((c.t -= dt) <= 0) next(c);
      // LEE(저승사자)가 가까이 오면 하던 걸 멈추고 냅다 도망
      const sc = ctx.scary?.();
      if (sc && c.state !== "flee" && Math.hypot(sc.x - c.root.position.x, sc.z - c.root.position.z) < 1.4 * k) {
        c.state = "flee"; c.fleeFrom = sc; c.t = rnd(2.5, 3.5); c.speed = 0.6; c.target = null; c.rollTo = 0; c.chase = null; c.guest = null; c.hop = 1;
      }
      // 움직일 곳
      let goal = null;
      if (c.state === "walk") goal = c.target;
      else if (c.state === "chase") goal = c.chase.root.position;
      else if (c.state === "greet" || c.state === "follow") goal = c.guest; // 찾아온 사람 · 지나가는 사람에게
      else if (c.state === "flee") { tmp.copy(c.root.position).sub(c.fleeFrom || other.root.position).setY(0).normalize().multiplyScalar(0.5).add(c.root.position); const [x, z] = inside(tmp.x, tmp.z); goal = tmp.set(x, 0, z); }
      let moving = false;
      if (goal) {
        const dx = goal.x - c.root.position.x, dz = goal.z - c.root.position.z, d = Math.hypot(dx, dz);
        const stopAt = c.state === "chase" ? 0.16 * k : c.state === "greet" ? 0.2 * k : c.state === "follow" ? 0.3 * k : 0.03;
        if (d > stopAt) {
          moving = true;
          const want = Math.atan2(dx, dz);
          let da = want - c.root.rotation.y; da = Math.atan2(Math.sin(da), Math.cos(da));
          c.root.rotation.y += da * Math.min(1, dt * 6);
          const step = Math.min(d - stopAt, c.speed * k * dt);
          c.root.position.x += Math.sin(c.root.rotation.y) * step;
          c.root.position.z += Math.cos(c.root.rotation.y) * step;
        } else if (c.state === "chase") { c.hop = 1; c.state = "sit"; c.t = rnd(1.5, 3); other.state = "belly"; other.t = rnd(2.5, 4); other.rollTo = Math.PI * 0.92; } // 잡았다 → 덮치기 · 상대는 벌러덩
        else if (c.state === "walk") { c.state = "sit"; c.t = rnd(2, 4); }
        else if (c.state === "greet") { if (Math.random() < 0.6) { c.state = "rub"; } else { c.state = "belly"; c.rollTo = Math.PI * 0.92; } c.heartT = 0.2; } // 다가와서 비비거나 벌러덩
        else if (c.state === "follow") { c.state = "sit"; c.t = rnd(1.5, 3); }
      }
      // 지나가는 사람: 쳐다보다가 가끔 몇 걸음 따라간다
      c.notice -= dt; c.watchT = Math.max(0, c.watchT - dt);
      if (c.notice <= 0 && ctx.people && !["greet", "rub", "belly", "chase", "flee", "follow"].includes(c.state)) {
        c.notice = 0.5;
        const near = ctx.people().find((p) => p.moving && Math.hypot(p.pos.x - c.root.position.x, p.pos.z - c.root.position.z) < 0.9 * k);
        if (near) {
          c.watch = near.pos; c.watchT = 2.5; c.notice = rnd(8, 15);
          if (Math.random() < 0.35) { c.state = "follow"; c.guest = near.pos; c.t = rnd(2, 3); c.speed = 0.3; c.target = null; c.rollTo = 0; }
        }
      }
      // 반기기: 하트 뿅뿅
      if (c.state === "rub" || (c.state === "belly" && c.guest)) { if ((c.heartT -= dt) <= 0) { c.heartT = rnd(0.7, 1.2); heart(c); } }
      // 둘이 겹치지 않게
      const sep = c.root.position.distanceTo(other.root.position), minD = 0.17 * k;
      if (sep < minD && sep > 1e-4) { tmp.copy(c.root.position).sub(other.root.position).setY(0).normalize().multiplyScalar((minD - sep) * 0.5); c.root.position.add(tmp); }
      const [cx, cz] = inside(c.root.position.x, c.root.position.z); c.root.position.x = cx; c.root.position.z = cz;
      // 자세
      c.phase += dt * (moving ? 9 + c.speed * 20 : 2);
      const sitting = c.state === "sit" || c.state === "groom" || c.state === "rub", loafing = c.state === "loaf", rolled = Math.min(1, c.roll / 2);
      c.sitA += ((sitting ? 1 : 0) - c.sitA) * Math.min(1, dt * 5);
      c.loaf += ((loafing ? 1 : 0) - c.loaf) * Math.min(1, dt * 4);
      c.roll += (c.rollTo - c.roll) * Math.min(1, dt * 4);
      c.hop = Math.max(0, c.hop - dt * 2.5);
      const b = c.body, sw = Math.sin(c.phase);
      b.rotation.z = c.roll; // 벌러덩: 옆으로 굴러 등을 바닥에
      b.rotation.x = -0.52 * c.sitA; // 앉기: 엉덩이는 바닥에, 가슴은 세우고
      b.position.y = 0.13 - 0.05 * c.loaf - 0.055 * rolled + (moving ? Math.abs(sw) * 0.006 : 0) + Math.sin(c.hop * Math.PI) * 0.06 - 0.022 * c.sitA;
      b.position.z = -0.035 * c.sitA;
      c.breath += dt * (moving ? 6 : 2.2);
      b.scale.set(1 + Math.sin(c.breath) * 0.012, 1 + Math.sin(c.breath) * 0.02, 1); // 숨 쉬기
      c.legs.forEach((L, i) => {
        const diag = i === 0 || i === 3 ? 1 : -1, ph = c.phase + (diag > 0 ? 0 : Math.PI), lift = Math.max(0, Math.sin(ph + Math.PI / 2));
        let up = moving ? Math.sin(ph) * 0.6 : 0, kn = moving ? (L.back ? 0.7 : -0.8) * lift : 0;
        if (c.roll > 0.5) { up = Math.sin(c.phase * 2.2 + i) * 0.3 - 0.35; kn = (L.back ? 0.5 : -0.7) + Math.sin(c.phase * 3 + i) * 0.15; } // 벌러덩: 발 꼼지락
        else if (L.back && c.sitA > 0.05) { up = 1.25 * c.sitA; kn = -1.9 * c.sitA; } // 앉으면 뒷다리를 접어 엉덩이 옆으로
        else if (!L.back && c.sitA > 0.05) { up = 0.52 * c.sitA; kn = 0; } // 앞다리는 곧게 바닥까지
        if (!L.back && i === 1 && c.state === "groom") { up = -1.25 + Math.sin(c.phase * 3) * 0.15; kn = -1.3; } // 앞발 들어 핥기
        if (c.loaf > 0.05) { up = up * (1 - c.loaf) + (L.back ? 1.2 : -1.1) * c.loaf; kn = kn * (1 - c.loaf) + (L.back ? -2.2 : 2.1) * c.loaf; } // 식빵: 다리 접어 넣기
        L.hip.rotation.x = up; L.knee.rotation.x = kn;
        L.hip.scale.y = L.back ? 1 : 1 + 0.32 * c.sitA * (c.state === "groom" && i === 1 ? 0 : 1); // 몸을 세운 만큼 앞다리를 늘여 바닥에
      });
      // 머리: 그루밍 · 앉아서 가끔 화면(카메라) 쪽 보기
      if ((c.lookT -= dt) <= 0) { c.look = c.look ? 0 : sitting || loafing ? 1 : 0; c.lookT = c.look ? rnd(2, 4) : rnd(3, 7); }
      let yaw = moving ? 0 : Math.sin(c.phase * 0.35 + c.root.position.x) * 0.45, pitch = c.state === "groom" ? 0.5 + Math.sin(c.phase * 3) * 0.12 : 0.36 * c.sitA + 0.12 * c.loaf - 0.25 * rolled;
      const lookAt = (c.state === "rub" || c.state === "greet") && c.guest ? c.guest : c.watchT > 0 ? c.watch : c.look && ctx.camera ? ctx.camera.position : null;
      if (lookAt && c.roll < 0.3 && !(moving && !c.watchT)) {
        camL.copy(lookAt); if (lookAt !== ctx.camera?.position) camL.y += 0.9 * k; c.root.worldToLocal(camL);
        yaw = THREE.MathUtils.clamp(Math.atan2(camL.x, camL.z), -1.0, 1.0); pitch = THREE.MathUtils.clamp(-Math.atan2(camL.y - 0.25, Math.hypot(camL.x, camL.z)) * 0.6, -0.5, 0.2) + 0.36 * c.sitA;
      }
      c.head.rotation.y += (yaw - c.head.rotation.y) * Math.min(1, dt * 6);
      c.head.rotation.x += (pitch - c.head.rotation.x) * Math.min(1, dt * 6);
      c.head.rotation.z = c.roll > 0.5 ? -0.5 : c.state === "rub" ? 0.3 * Math.sin(c.phase * 1.2) : (c.look ? 0.15 * Math.sin(c.phase * 0.5) : 0); // 갸웃 · 비비며 고개 기울이기
      // 눈 깜빡 · 귀 쫑긋
      if ((c.blink -= dt) <= 0) { c.blinkT = 0.13; c.blink = rnd(2.5, 6); }
      c.blinkT = Math.max(0, c.blinkT - dt);
      const lid = c.state === "loaf" && Math.sin(c.phase * 0.2) > 0.6 ? 0.25 : c.blinkT > 0 ? 0.1 : 1; // 식빵 굽다 가끔 실눈
      c.eyes.forEach((e) => { e.scale.y += (lid - e.scale.y) * Math.min(1, dt * 30); });
      if ((c.twitchT -= dt) <= 0) { c.twitch[(Math.random() * 2) | 0] = 1; c.twitchT = rnd(2, 7); }
      c.ears.forEach((e, j) => { c.twitch[j] = Math.max(0, c.twitch[j] - dt * 5); e.rotation.x = -0.12 - Math.sin(c.twitch[j] * Math.PI) * 0.5; });
      // 꼬리: 걸을 땐 세우고 끝만 갈고리 · 앉으면 몸 옆으로 감기 · 벌러덩이면 탁탁
      c.tail.forEach((s, i) => {
        let rx, ry;
        if (moving || c.state === "rub") { rx = i === 0 ? -1.05 : i < 7 ? 0.04 : 0.28 + (c.state === "rub" ? Math.sin(c.phase * 2) * 0.15 : 0); ry = Math.sin(c.phase * 0.6 - i * 0.5) * 0.05; }
        else if (sitting || loafing) { rx = i === 0 ? 0.55 : 0.02; ry = c.tailSide * (i < 2 ? 0.35 : 0.33) + (i > 7 ? Math.sin(c.phase * 1.3) * 0.25 : 0); }
        else { rx = i === 0 ? 0.25 : 0.03; ry = Math.sin(c.phase * (c.roll > 0.5 ? 1.6 : 0.7) - i * 0.55) * (0.08 + i * 0.03); }
        s.rotation.x += (rx - s.rotation.x) * Math.min(1, dt * 5);
        s.rotation.y += (ry - s.rotation.y) * Math.min(1, dt * 5);
      });
    }
    for (let i = words.length - 1; i >= 0; i--) { const w = words[i]; w.age += dt; const t = w.age / 1.6; if (t >= 1) { w.spr.removeFromParent(); w.spr.material.dispose(); words.splice(i, 1); continue; } w.spr.position.y = w.y0 + t * 0.25 * k; w.spr.material.opacity = t < 0.15 ? t / 0.15 : 1 - Math.max(0, (t - 0.6) / 0.4); const s = w.s0 * (t < 0.15 ? 0.6 + t / 0.15 * 0.4 : 1); w.spr.scale.set(s, w.sq ? s : s * 0.45, 1); }
  }

  // 누르면 「냐옹~」 + 벌러덩
  const WORD = (() => {
    const c = document.createElement("canvas"); c.width = 256; c.height = 116;
    const g = c.getContext("2d");
    g.font = "900 60px Pretendard, 'Malgun Gothic', sans-serif"; g.textAlign = "center"; g.textBaseline = "middle";
    g.lineWidth = 12; g.strokeStyle = "#ffffff"; g.lineJoin = "round"; g.strokeText("냐옹~", 128, 60);
    g.fillStyle = "#e0702a"; g.fillText("냐옹~", 128, 60);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  const words = [];
  function meow() {
    const a = ctx.audio?.();
    if (!a || a.state !== "running") return;
    const t0 = a.currentTime, o = a.createOscillator(), bp = a.createBiquadFilter(), g = a.createGain();
    o.type = "sawtooth";
    o.frequency.setValueAtTime(520, t0); o.frequency.linearRampToValueAtTime(860, t0 + 0.12); o.frequency.exponentialRampToValueAtTime(480, t0 + 0.45);
    bp.type = "bandpass"; bp.Q.value = 5; bp.frequency.setValueAtTime(1100, t0); bp.frequency.linearRampToValueAtTime(1500, t0 + 0.12); bp.frequency.linearRampToValueAtTime(900, t0 + 0.45);
    g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(0.16, t0 + 0.05); g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.5);
    o.connect(bp).connect(g).connect(a.destination); o.start(t0); o.stop(t0 + 0.55);
  }
  function pet(c) {
    c.state = "belly"; c.t = rnd(3.5, 5); c.rollTo = Math.PI * 0.92; c.target = null; c.chase = null;
    const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: WORD, transparent: true, depthTest: false, sizeAttenuation: false, opacity: 0 }));
    spr.renderOrder = 12;
    const y0 = c.root.position.y + 0.32 * k;
    spr.position.set(c.root.position.x, y0, c.root.position.z);
    (ctx.uiScene || scene).add(spr);
    words.push({ spr, age: 0, y0, s0: 0.075 * (ctx.scr?.() || 1) });
    meow();
  }
  // 하트: 고양이 머리 위로 뿅 (반길 때)
  const HEART = (() => {
    const c = document.createElement("canvas"); c.width = c.height = 96;
    const g = c.getContext("2d");
    g.translate(48, 52); g.scale(1.6, 1.6);
    g.beginPath(); g.moveTo(0, 12); g.bezierCurveTo(-26, -6, -12, -26, 0, -12); g.bezierCurveTo(12, -26, 26, -6, 0, 12); g.closePath();
    g.lineWidth = 4; g.strokeStyle = "#ffffff"; g.stroke(); g.fillStyle = "#ff5c8a"; g.fill();
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  function heart(c) {
    const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: HEART, transparent: true, depthTest: false, sizeAttenuation: false, opacity: 0 }));
    spr.renderOrder = 12;
    const y0 = c.root.position.y + 0.3 * k;
    spr.position.set(c.root.position.x + rnd(-0.04, 0.04), y0, c.root.position.z + rnd(-0.04, 0.04));
    (ctx.uiScene || scene).add(spr);
    words.push({ spr, age: 0, y0, s0: 0.032 * (ctx.scr?.() || 1), sq: true });
  }
  // 사람이 찾아오면: 그 사람에게 가서 비비거나 벌러덩 (몇 초)
  function visit(c, pos, sec = 7) { c.state = "greet"; c.t = sec; c.guest = pos; c.target = null; c.chase = null; c.rollTo = 0; c.speed = 0.3; }
  const nearest = (p) => cats.slice().sort((a, b) => a.root.position.distanceTo(p) - b.root.position.distanceTo(p))[0];
  function hit(ray) { const h = ray.intersectObjects(objects, false)[0]; return h ? h.object.userData.cat : null; }
  window.__cats = cats; // 점검용
  return { tick, hit, pet, visit, nearest, objects, cats, zone: { X0, X1, Z0, Z1 }, inside };
};
