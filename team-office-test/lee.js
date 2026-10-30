// LEE 순찰 — 석용현이 ⚙ 설정에서 켜면 모두의 화면에 같은 순간 나타나 사무실을 돌며 감시 (흑백 저승사자, 모델 models3d/lee/lee.glb)
// 켠 시각(서버 시계)으로 길·멈출 자리·동작·대사를 정한다 → 누가 언제 열어도 같은 자리에서 같은 말 (위치를 따로 주고받지 않음)
// 모델은 켜졌을 때만 받는다 (꺼져 있으면 처음 열 때 로딩이 늘지 않음)
(function () {
  const LINES = {
    watch: ["일은 열심히 하고 있나요?", "그 화면… 업무 맞죠?", "명부에 이름이 적혀 있네요", "잡담 소리가 들리던데…", "잘하고 있네요. 계속하세요", "오늘 퇴근은… 제가 정합니다", "흠… 지켜보고 있습니다", "마감이 얼마 안 남았죠?"],
    angry: ["이게 지금 일하는 겁니까?", "또 딴짓이군요…", "이 속도면 명부 맨 위입니다", "회의 때 했던 말, 벌써 잊었나요?"],
    point: ["거기! 지금 뭐 하는 거죠?", "당신, 다음 차례입니다", "그 탭… 닫으세요"],
    empty: ["자리를 비웠군요… 적어 둡니다", "어디 갔죠, 이 사람?", "빈자리… 명부에 표시해 둡니다"],
    lunch: ["점심시간이군요… 1시 정각입니다", "밥은 먹고 해야죠. 1시까지만", "다들 어디 갔나… 아, 점심", "빈 사무실도 지켜봅니다"],
    reply: ["네! 열심히 하고 있습니다!", "(움찔)", "헉… 업무 맞습니다", "죄송합니다…", "지금 막 하려던 참이었어요", "(조용히 창 닫는 중)"],
    enter: "다들… 일은 잘하고 있나요?",
    leave: "수고하세요…",
  };
  const APPEAR = 2.2, FADE_OUT = 1.6, SPEED = 0.85, LINE_SEC = 4, TURN = 6;
  const STOP = { watch: 6.5, angry: 7.5, point: 5.5, empty: 4.5 };
  const ANIM = { watch: "idle", angry: "angry", point: "point", empty: "idle" };
  const KEY = "teamOfficeLee";
  const rng = (a) => () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const pick = (r, a) => a[(r() * a.length) | 0];
  const ease = (k) => k * k * (3 - 2 * k);

  window.OfficeLee = (ctx) => {
    const { THREE, scene, MAIN_Z } = ctx;
    const v = (x, z) => new THREE.Vector3(x, 0, z);
    const DOOR_IN = ctx.doorIn.clone();
    let flag = { on: false, at: 0, since: 0 }, plan = null, exit = null;
    let model = null, loading = null, mixer = null, acts = {}, cur = null, label = null, bubble = null, shown = "", replied = -1, lh = 1;

    // ── 길: 자리(의자 뒤에 서서 모니터를 들여다봄) ↔ 통로 ↔ 큰 통로(MAIN_Z) ──
    const behindOf = (s) => s.outPos.clone().add(s.outPos.clone().sub(s.inPos).setY(0).normalize().multiplyScalar(0.14));
    function makePlan(since) {
      const r = rng(since % 2147483647), stops = ctx.stops(), legs = [];
      let t = APPEAR, from = DOOR_IN.clone(), aisle = null, last = -1;
      const more = () => {
        let k;
        do k = (r() * stops.length) | 0; while (k === last && stops.length > 1);
        last = k;
        const { name, seat: s } = stops[k], b = behindOf(s), pts = [from.clone()];
        if (aisle == null) pts.push(v(s.aisleX, MAIN_Z));
        else {
          pts.push(v(aisle, from.z));
          if (Math.abs(aisle - s.aisleX) > 0.01) pts.push(v(aisle, MAIN_Z), v(s.aisleX, MAIN_Z));
        }
        pts.push(v(s.aisleX, b.z), b);
        const cum = [0];
        for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + pts[i].distanceTo(pts[i - 1]));
        const roll = r(), kind = roll < 0.55 ? "watch" : roll < 0.8 ? "angry" : "point";
        const named = r() < 0.5, line = pick(r, LINES[kind]), reply = pick(r, LINES.reply), empty = pick(r, LINES.empty), off = r() * 11, lunchLine = pick(r, LINES.lunch);
        const walk = cum[cum.length - 1] / SPEED;
        legs.push({ t0: t, walk, pts, cum, aisle: s.aisleX, name, face: s.desk.clone(), kind, named, line, reply, empty, lunchLine, off, stop: STOP[kind] });
        t += walk + STOP[kind];
        from = b; aisle = s.aisleX;
      };
      return { legs, more, at: 0 };
    }
    function legAt(p, t) { // t 초에 걸친 구간 (차례로 만들어 둔다)
      while (!p.legs.length || p.legs[p.legs.length - 1].t0 + p.legs[p.legs.length - 1].walk + p.legs[p.legs.length - 1].stop <= t) p.more();
      let i = Math.min(p.at, p.legs.length - 1);
      while (i > 0 && p.legs[i].t0 > t) i--;
      while (i < p.legs.length - 1 && p.legs[i + 1].t0 <= t) i++;
      p.at = i;
      return p.legs[i];
    }
    function along(L, d) { // 걸은 거리 d → 자리·방향
      let i = 1;
      while (i < L.pts.length - 1 && L.cum[i] < d) i++;
      const a = L.pts[i - 1], b = L.pts[i], k = Math.min(1, Math.max(0, (d - L.cum[i - 1]) / Math.max(1e-6, L.cum[i] - L.cum[i - 1])));
      return { p: a.clone().lerp(b, k), dir: Math.atan2(b.x - a.x, b.z - a.z), seg: i };
    }
    // 끄는 순간의 자리에서 문 앞까지 (통로 → 큰 통로 → 문)
    function exitFrom(st) {
      const pts = [st.p.clone()], onMain = Math.abs(st.p.z - MAIN_Z) < 0.05;
      if (st.leg && !onMain) {
        const L = st.leg, ax = st.stopped || st.seg === L.pts.length - 1 ? L.aisle : Math.abs(L.pts[st.seg].x - L.pts[st.seg - 1].x) < 1e-3 ? L.pts[st.seg].x : st.seg === 1 ? L.pts[1].x : L.aisle;
        if (Math.abs(st.p.x - ax) > 0.02) pts.push(v(ax, st.p.z));
        pts.push(v(ax, MAIN_Z));
      }
      pts.push(DOOR_IN.clone());
      const cum = [0];
      for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + pts[i].distanceTo(pts[i - 1]));
      return { pts, cum, walk: cum[cum.length - 1] / SPEED };
    }
    // t 초(켠 뒤) 의 상태: 자리·방향·동작·말
    function stateAt(t) {
      if (t < APPEAR) return { p: DOOR_IN.clone(), dir: Math.PI / 2, anim: "idle", fade: ease(Math.min(1, t / 1.4)), say: t > 0.3 ? LINES.enter : "" };
      const L = legAt(plan, t), lt = t - L.t0;
      if (lt < L.walk) { const a = along(L, lt * SPEED); return { ...a, anim: "walk", fade: 1, say: L === plan.legs[0] && t < APPEAR + 2.8 ? LINES.enter : "", leg: L }; }
      const st = lt - L.walk, who = ctx.person(L.name), here = !!who?.here;
      const kind = here ? L.kind : "empty";
      const text = !here ? (ctx.lunch?.() ? L.lunchLine : L.empty) : L.named ? `${L.name} 님, ${L.line}` : L.line;
      return { p: L.pts[L.pts.length - 1].clone(), dir: Math.atan2(L.face.x - L.pts[L.pts.length - 1].x, L.face.z - L.pts[L.pts.length - 1].z), anim: ANIM[kind], animOff: kind === "angry" ? L.off : 0, fade: 1,
        say: st > 0.6 && st < 0.6 + LINE_SEC ? text : "", reply: here && st > 0.8 + LINE_SEC ? L : null, leg: L, stopped: true, stopT: st };
    }

    // ── 모델 ──
    function ensureModel() {
      if (model || loading) return loading;
      loading = ctx.loadGLB(ctx.modelUrl).then((gl) => {
        const root = gl.scene;
        root.updateMatrixWorld(true);
        const b = new THREE.Box3();
        root.traverse((c) => { if (c.isBone) b.expandByPoint(c.getWorldPosition(new THREE.Vector3())); });
        lh = ctx.H * 1.16; // 사무실 사람보다 조금 크게 (문보다는 낮게)
        root.scale.setScalar(lh / Math.max(1e-6, b.max.y - b.min.y));
        root.traverse((c) => { if (c.isMesh) { c.frustumCulled = false; c.castShadow = false; c.material.transparent = true; c.material.depthWrite = true; } });
        mixer = new THREE.AnimationMixer(root);
        for (const clip of gl.animations) acts[clip.name] = mixer.clipAction(clip);
        model = new THREE.Group();
        model.add(root);
        // 발밑 옅은 그림자 (사무실 그림자는 두 프레임에 한 번이라 움직이는 LEE 는 따로)
        const sh = new THREE.Mesh(new THREE.CircleGeometry(0.26, 24), new THREE.MeshBasicMaterial({ color: "#000", transparent: true, opacity: 0.22, depthWrite: false }));
        sh.rotation.x = -Math.PI / 2; sh.position.y = 0.012; sh.renderOrder = 1;
        model.add(sh);
        model.visible = false;
        scene.add(model);
        label = ctx.makeLabel("LEE");
        label.draw("away");
        label.spr.visible = false;
        bubble = ctx.makeBubble();
        bubble.spr.visible = false;
        ctx.onReady?.();
      }).catch((e) => { console.warn("LEE", e); loading = null; });
      return loading;
    }
    function play(name, off = 0) {
      const a = acts[name] || acts.idle || acts.walk;
      if (!a || cur === a) return;
      a.reset(); a.time = off; a.enabled = true; a.setEffectiveWeight(1); a.play();
      if (cur) cur.crossFadeTo(a, 0.3, false);
      cur = a;
    }
    function setFade(k) {
      model.traverse((c) => { if (c.isMesh && c.material) { if (c.material.map) c.material.opacity = k; else c.material.opacity = 0.22 * k; } });
    }

    // ── 켜짐·꺼짐 받기 (실시간) ──
    function apply(val) {
      const nv = { on: !!val?.on, at: +val?.at || 0, since: +val?.since || +val?.at || 0 };
      const was = flag;
      flag = nv;
      if (nv.on) {
        exit = null;
        if (!plan || plan.since !== nv.since) { plan = makePlan(nv.since); plan.since = nv.since; replied = -1; }
        ensureModel();
      } else if (nv.since && Date.now() - nv.at < 60e3) { // 방금 껐다: 그 자리에서 문으로 걸어가 사라진다 (막 들어온 사람도 같은 장면)
        if (!plan || plan.since !== nv.since) { plan = makePlan(nv.since); plan.since = nv.since; }
        const st = stateAt((nv.at - nv.since) / 1000);
        exit = { ...exitFrom(st), t0: nv.at };
        ensureModel();
      } else exit = null;
      ctx.onChange?.(flag, was);
    }
    const sb = () => ctx.sb?.();
    let subscribed = false;
    async function fetchFlag() {
      const s = sb();
      if (!s) return;
      try { const { data, error } = await s.from("office_flags").select("*").eq("key", "lee"); if (!error) apply(data?.[0]?.val || null); } catch (e) { console.warn("LEE flag", e); }
    }
    function connect() {
      if (!ctx.live) { try { apply(JSON.parse(localStorage.getItem(KEY))); } catch {} addEventListener("storage", (e) => { if (e.key === KEY) try { apply(JSON.parse(e.newValue)); } catch {} }); return; }
      const s = sb();
      if (!s) return setTimeout(connect, 1000); // 저장소 연결을 기다린다
      if (subscribed) return;
      subscribed = true;
      fetchFlag();
      s.channel("office-flags").on("postgres_changes", { event: "*", schema: "public", table: "office_flags" }, (p) => { if (p.new?.key === "lee" || !p.new) fetchFlag(); }).subscribe();
      document.addEventListener("visibilitychange", () => { if (!document.hidden) fetchFlag(); }); // 백그라운드에서 놓쳤을 수 있으니 돌아오면 한 번
    }
    connect();
    async function setOn(on) {
      if (!ctx.live) { const val = { on, at: Date.now(), since: on ? Date.now() : flag.since }; try { localStorage.setItem(KEY, JSON.stringify(val)); } catch {} apply(val); return "ok"; }
      const me = ctx.me(), s = sb();
      if (!s || !me?.char || !me?.pin) return "no_login";
      try { const { data, error } = await s.rpc("office_flag_set", { p_char: me.char, p_pin: me.pin, p_key: "lee", p_on: on }); if (error) throw error; if (data === "ok") await fetchFlag(); return data; }
      catch (e) { console.warn(e); return /office_flag_set|function/i.test(String(e?.message || e)) ? "not_ready" : "error"; }
    }

    // ── 매 프레임 ──
    let yaw = 0;
    function tick(dt) {
      if (!model) return;
      let st = null;
      if (flag.on) st = stateAt((Date.now() - flag.since) / 1000);
      else if (exit) {
        const t = (Date.now() - exit.t0) / 1000;
        if (t > exit.walk + FADE_OUT) { exit = null; }
        else if (t < exit.walk) { const a = along(exit, t * SPEED); st = { ...a, anim: "walk", fade: 1, say: t < 3 ? LINES.leave : "" }; }
        else st = { p: exit.pts[exit.pts.length - 1].clone(), dir: -Math.PI / 2, anim: "idle", fade: 1 - ease(Math.min(1, (t - exit.walk) / FADE_OUT)), say: "" };
      }
      const vis = !!st;
      model.visible = vis; label.spr.visible = vis && st.fade > 0.5;
      if (!vis) { bubble.spr.visible = false; shown = ""; return; }
      model.position.copy(st.p);
      const d = ((st.dir - yaw + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
      yaw += d * Math.min(1, dt * TURN);
      model.rotation.y = yaw;
      play(st.anim, st.animOff || 0);
      mixer.update(dt);
      setFade(st.fade);
      label.spr.position.set(st.p.x, lh * 1.24, st.p.z); // 앉은 사람 바로 뒤에 서도 그 사람 이름표·말풍선과 겹치지 않게 조금 위
      const f = ctx.labelF?.() ?? 1; // 이름표 크기는 다른 사람들과 같게 (화면 모양·설정을 따른다)
      if (label.f !== f) { label.f = f; label.spr.scale.set(0.1 * f, 0.0281 * f, 1); bubble.fit(); }
      if (st.say !== shown) { shown = st.say; bubble.set(st.say, "lee"); }
      bubble.spr.visible = !!st.say && st.fade > 0.5;
      if (bubble.spr.visible) bubble.spr.position.copy(label.spr.position);
      if (st.reply && replied !== st.leg.t0) { replied = st.leg.t0; ctx.say(st.leg.name, st.leg.reply, 3); } // 들킨 사람의 한마디
    }
    const near = (p, r = 2.2) => !!model?.visible && Math.hypot(p.x - model.position.x, p.z - model.position.z) < r;
    const api = { tick, setOn, isOn: () => flag.on, flag: () => flag, near, pos: () => (model?.visible ? model.position : null), ready: () => !!model, state: (t) => (plan ? stateAt(t) : null) };
    window.__lee = api; // 점검용
    return api;
  };
})();
