// 테스트 판 전용: Supabase 흉내 (이 브라우저 localStorage 에만 저장) — build_artifact.py --test 가 넣는다
// 모두 출근한 상태로 시작, 아무 이름이나 「로그인」 + 아무 숫자 4자리. 탭 두 개면 서로 다른 사람으로 1:1 대화를 주고받을 수 있다
// 규칙(글자 수·하루 한 번·링크 모양)은 supabase_setup.sql / supabase_social.sql / supabase_more.sql 함수와 같게
(() => {
  const KEY = "teamOfficeTestDb", VER = 7;
  const NAMES = window.__TEST_NAMES || [];
  const now = () => new Date().toISOString();
  const ago = (min) => new Date(Date.now() - min * 60000).toISOString();
  const kst = () => new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 10);
  function photo(a, b, text) {
    const c = document.createElement("canvas"); c.width = 480; c.height = 340;
    const g = c.getContext("2d"), gr = g.createLinearGradient(0, 0, 480, 340);
    gr.addColorStop(0, a); gr.addColorStop(1, b); g.fillStyle = gr; g.fillRect(0, 0, 480, 340);
    g.fillStyle = "rgba(255,255,255,.9)"; g.font = "bold 44px sans-serif"; g.textAlign = "center"; g.fillText(text, 240, 185);
    return c.toDataURL("image/jpeg", 0.8);
  }
  function seed() {
    const md = kst().slice(5), id = { n: 1 };
    const people = NAMES.map((c) => ({ char: c, on_duty: true, msg: "", mode: "", birthday: "", on_at: now(), updated_at: now() }));
    const P = (c) => people.find((p) => p.char === c) || {};
    P("김현준").msg = "국밥 먹고 싶다";
    P("오누리").msg = "오늘 축구 결승!";
    P("손주용").mode = "meeting";
    P("허지용").mode = "focus";
    P("송나정").birthday = md;
    P("석용현").birthday = "03-14";
    const note = (to, from, body, min) => ({ id: id.n++, to_char: to, from_char: from, body, created_at: ago(min) });
    const dm = (from, to, body, min, read = true) => ({ id: id.n++, from_char: from, to_char: to, body, created_at: ago(min), read_at: read ? ago(min - 1) : null });
    const post = (char, body, ph, min) => ({ id: id.n++, char, body, photo: ph, created_at: ago(min) });
    const D = [
      post("홍수연", "오늘 처음으로 뒤집기 성공! 👏", photo("#ffd1dc", "#bde0fe", "뒤집기 성공 👶"), 60 * 26),
      post("석용현", "팀 사무실 페이지 테스트 중 🧪 마음껏 눌러 보세요", null, 60 * 5),
      post("홍수연", "이유식 첫날. 반은 먹고 반은 얼굴에…", null, 60 * 3),
      post("김현준", "오늘 점심 국밥 성공 🍲 역시 1층 국밥집", photo("#f6d365", "#fda085", "국밥 🍲"), 60 * 2),
      post("오누리", "어제 축구 보신 분? 마지막 골 미쳤다 ⚽", null, 70),
      post("원효인", "책상 피규어 친구가 생겼어요", photo("#a1c4fd", "#c2e9fb", "피규어 ✨"), 35),
    ];
    return {
      ver: VER,
      office_people: people,
      office_notes: [
        note("송나정", "홍수연", "나정님 생일 축하해요!! 🎉", 50), note("송나정", "김현준", "생일 축하합니다 🎂 맛있는 거 드세요", 20),
        note("김현준", "홍수연", "어제 회의 자료 고마웠어요!", 300), note("석용현", "원효인", "사무실 페이지 너무 귀여워요 ㅋㅋ", 120),
      ],
      office_diary: D,
      office_diary_comments: [
        { id: id.n++, post_id: D[0].id, from_char: "송나정", body: "와 벌써 뒤집기라니 대단해요 👏", created_at: ago(60 * 20) },
        { id: id.n++, post_id: D[0].id, from_char: "홍수연", body: "감사해요 ㅎㅎ 하루 종일 뒤집어요", created_at: ago(60 * 19) },
        { id: id.n++, post_id: D[1].id, from_char: "김현준", body: "오 이거 재밌네요 ㅋㅋ 국밥 버튼도 만들어 주세요", created_at: ago(25) },
      ],
      office_snacks: [
        { id: id.n++, who: "김현준", item: "허니버터칩 2봉", link: "https://www.example.com/honey", created_at: ago(200) },
        { id: id.n++, who: "한아린", item: "초코파이", link: "", created_at: ago(90) },
      ],
      office_hearts: [["홍수연", "석용현"], ["김현준", "석용현"], ["원효인", "송나정"], ["한아린", "송나정"], ["석용현", "홍수연"], ["오누리", "김현준"]]
        .map(([f, t]) => ({ id: id.n++, from_char: f, to_char: t, day: kst(), created_at: ago(30) })),
      office_diary_likes: [[0, "송나정"], [0, "김현준"], [0, "원효인"], [0, "석용현"], [3, "오누리"], [3, "손주용"], [1, "송나정", 12], [1, "원효인", 50]]
        .map(([i, c, min]) => ({ post_id: D[i].id, char: c, created_at: ago(min || 20) })),
      office_dms: [
        dm("김현준", "석용현", "용현님 오늘 점심 국밥 어때요?", 40), dm("석용현", "김현준", "좋아요 12시에 1층에서 봐요", 38),
        dm("김현준", "석용현", "넵 👍", 37, false), dm("홍수연", "석용현", "육아일기 기능 고마워요 😊", 10, false),
      ],
      nextId: id.n,
    };
  }
  let db;
  const load = () => { try { const d = JSON.parse(localStorage.getItem(KEY)); return d && d.ver === VER ? d : null; } catch { return null; } };
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { console.warn("테스트 저장 실패 (사진이 너무 많으면 저장 공간이 찰 수 있어요)", e); } };
  db = load();
  if (!db) { db = seed(); save(); }
  // 이름이 늘었으면 출근한 사람으로 채운다
  for (const c of NAMES) if (!db.office_people.some((p) => p.char === c)) db.office_people.push({ char: c, on_duty: true, msg: "", mode: "", birthday: "", updated_at: now() });

  const subs = [];
  function notify(table, payload) { for (const s of subs) if (s.table === table) try { s.cb(payload || { eventType: "UPDATE", new: {}, old: {} }); } catch (e) { console.error(e); } }
  const touchPerson = (c) => { const r = db.office_people.find((p) => p.char === c); r.updated_at = now(); notify("office_people", { eventType: "UPDATE", new: { ...r } }); };
  addEventListener("storage", (e) => { // 다른 탭에서 바뀌면 다시 읽고 모두에게 알린다 (실시간 흉내)
    if (e.key !== KEY) return;
    db = load() || db;
    for (const r of db.office_people) notify("office_people", { eventType: "UPDATE", new: { ...r } });
    for (const t of ["office_notes", "office_snacks", "office_hearts", "office_diary_comments", "office_diary_likes"]) notify(t);
  });
  // 테스트: 비밀번호는 아무 숫자 4자리
  const pinOk = (p) => /^\d{4}$/.test(String(p || ""));
  const verify = (c, p) => (!db.office_people.some((r) => r.char === c) ? "no_char" : pinOk(p) ? "ok" : "bad_pin");
  const nid = () => db.nextId++;
  const R = {
    office_claim: ({ p_char, p_pin }) => (pinOk(p_pin) ? "ok" : "bad_input"),
    office_login: ({ p_char, p_pin }) => verify(p_char, p_pin),
    office_set: ({ p_char, p_pin, p_on, p_msg }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return v;
      const r = db.office_people.find((x) => x.char === p_char);
      if (p_on != null) { r.on_duty = p_on; r.on_at = now(); }
      if (p_msg != null) r.msg = String(p_msg).slice(0, 40);
      save(); touchPerson(p_char); return "ok";
    },
    office_set_profile: ({ p_char, p_pin, p_mode, p_birthday }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return v;
      if (p_mode != null && !["", "meeting", "focus", "home", "vacation"].includes(p_mode)) return "bad_input";
      if (p_birthday && !/^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(p_birthday)) return "bad_input";
      const r = db.office_people.find((x) => x.char === p_char);
      if (p_mode != null) r.mode = p_mode;
      if (p_birthday != null) r.birthday = p_birthday;
      save(); touchPerson(p_char); return "ok";
    },
    office_note_add: ({ p_char, p_pin, p_to, p_body }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return v;
      const b = String(p_body || "").trim(); if (!b) return "empty"; if (b.length > 200) return "too_long";
      db.office_notes.push({ id: nid(), to_char: p_to, from_char: p_char, body: b, created_at: now() }); save(); notify("office_notes"); return "ok";
    },
    office_note_delete: ({ p_char, p_pin, p_id }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return v;
      const i = db.office_notes.findIndex((n) => n.id === p_id && (n.from_char === p_char || n.to_char === p_char)); if (i < 0) return "not_allowed";
      db.office_notes.splice(i, 1); save(); notify("office_notes"); return "ok";
    },
    office_diary_post: ({ p_char, p_pin, p_body, p_photo }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return v;
      const b = String(p_body || "").trim(); if (!b && !p_photo) return "empty"; if (b.length > 1000) return "too_long";
      if (p_photo && (p_photo.length > 700000 || !/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(p_photo))) return "bad_photo";
      db.office_diary.push({ id: nid(), char: p_char, body: b, photo: p_photo || null, created_at: now() }); save(); return "ok";
    },
    office_diary_comment: ({ p_char, p_pin, p_post, p_body }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return v;
      const b = String(p_body || "").trim(); if (!b) return "empty"; if (b.length > 300) return "too_long";
      if (!db.office_diary.some((d) => d.id === p_post)) return "not_allowed";
      db.office_diary_comments.push({ id: nid(), post_id: p_post, from_char: p_char, body: b, created_at: now() }); save(); notify("office_diary_comments"); return "ok";
    },
    office_diary_comment_delete: ({ p_char, p_pin, p_id }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return v;
      const i = db.office_diary_comments.findIndex((c) => c.id === p_id && (c.from_char === p_char || db.office_diary.some((d) => d.id === c.post_id && d.char === p_char)));
      if (i < 0) return "not_allowed";
      db.office_diary_comments.splice(i, 1); save(); notify("office_diary_comments"); return "ok";
    },
    office_diary_delete: ({ p_char, p_pin, p_id }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return v;
      const i = db.office_diary.findIndex((n) => n.id === p_id && n.char === p_char); if (i < 0) return "not_allowed";
      db.office_diary.splice(i, 1); db.office_diary_comments = db.office_diary_comments.filter((c) => c.post_id !== p_id); db.office_diary_likes = db.office_diary_likes.filter((l) => l.post_id !== p_id); save(); return "ok";
    },
    office_snack_add: ({ p_char, p_pin, p_item, p_link }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return v;
      const it = String(p_item || "").trim(), ln = String(p_link || "").trim();
      if (!it) return "empty"; if (it.length > 60) return "too_long"; if (ln && (ln.length > 500 || !/^https?:\/\/\S+$/i.test(ln))) return "bad_link";
      db.office_snacks.push({ id: nid(), who: p_char, item: it, link: ln, created_at: now() }); save(); notify("office_snacks"); return "ok";
    },
    office_snack_delete: ({ p_char, p_pin, p_id }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return v;
      const i = db.office_snacks.findIndex((n) => n.id === p_id && (n.who === p_char || p_char === "석용현")); if (i < 0) return "not_allowed";
      db.office_snacks.splice(i, 1); save(); notify("office_snacks"); return "ok";
    },
    office_snack_clear: ({ p_char, p_pin }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return v;
      if (p_char !== "석용현") return "not_allowed";
      db.office_snacks.length = 0; save(); notify("office_snacks"); return "ok";
    },
    office_heart: ({ p_char, p_pin, p_to }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return v;
      if (!p_to || p_to === p_char) return "bad_input";
      if (db.office_hearts.some((h) => h.from_char === p_char && h.to_char === p_to && h.day === kst())) return "already";
      db.office_hearts.push({ id: nid(), from_char: p_char, to_char: p_to, day: kst(), created_at: now() }); save(); notify("office_hearts"); return "ok";
    },
    office_diary_like: ({ p_char, p_pin, p_post }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return v;
      if (!db.office_diary.some((d) => d.id === p_post)) return "not_allowed";
      const i = db.office_diary_likes.findIndex((l) => l.post_id === p_post && l.char === p_char);
      if (i >= 0) db.office_diary_likes.splice(i, 1); else db.office_diary_likes.push({ post_id: p_post, char: p_char, created_at: now() });
      save(); notify("office_diary_likes"); return "ok";
    },
    office_dm_send: ({ p_char, p_pin, p_to, p_body }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return v;
      const b = String(p_body || "").trim(); if (!b || !p_to || p_to === p_char) return "empty"; if (b.length > 500) return "too_long";
      db.office_dms.push({ id: nid(), from_char: p_char, to_char: p_to, body: b, created_at: now(), read_at: null }); save(); return "ok";
    },
    office_dm_thread: ({ p_char, p_pin, p_with, p_after }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return { status: v };
      let changed = false;
      for (const d of db.office_dms) if (d.to_char === p_char && d.from_char === p_with && !d.read_at) { d.read_at = now(); changed = true; }
      if (changed) save();
      const rows = db.office_dms.filter((d) => ((d.from_char === p_char && d.to_char === p_with) || (d.from_char === p_with && d.to_char === p_char)) && d.id > (p_after || 0))
        .sort((a, b) => a.id - b.id).slice(-200).map(({ read_at, ...r }) => r);
      return { status: "ok", rows };
    },
    office_dm_inbox: ({ p_char, p_pin }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return { status: v };
      const by = new Map();
      for (const d of [...db.office_dms].sort((a, b) => a.id - b.id)) {
        if (d.from_char !== p_char && d.to_char !== p_char) continue;
        const w = d.from_char === p_char ? d.to_char : d.from_char, r = by.get(w) || { with: w, unread: 0 };
        Object.assign(r, { last: d.body, last_at: d.created_at, last_from: d.from_char });
        if (d.to_char === p_char && !d.read_at) r.unread++;
        by.set(w, r);
      }
      return { status: "ok", rows: [...by.values()].sort((a, b) => (a.last_at < b.last_at ? 1 : -1)) };
    },
  };
  function query(table) {
    const f = []; let ord = null, lim = null, rng = null;
    const q = {
      select() { return q; }, eq(c, v) { f.push((r) => r[c] === v); return q; }, in(c, vs) { f.push((r) => vs.includes(r[c])); return q; }, gt(c, v) { f.push((r) => r[c] > v); return q; },
      order(c, o) { ord = [c, o?.ascending !== false]; return q; }, limit(n) { lim = n; return q; }, range(a, b) { rng = [a, b]; return q; },
      then(res, rej) {
        if (table === "office_dms" || table === "office_pins") return Promise.resolve({ data: [], error: null }).then(res, rej); // 실제처럼 직접 읽기 막힘
        let d = (db[table] || []).filter((r) => f.every((fn) => fn(r))).map((r) => ({ ...r }));
        if (ord) d.sort((a, b) => (a[ord[0]] < b[ord[0]] ? -1 : a[ord[0]] > b[ord[0]] ? 1 : 0) * (ord[1] ? 1 : -1));
        if (rng) d = d.slice(rng[0], rng[1] + 1);
        if (lim) d = d.slice(0, lim);
        return new Promise((r) => setTimeout(r, 60)).then(() => ({ data: d, error: null })).then(res, rej);
      },
    };
    return q;
  }
  window.supabase = {
    createClient: () => ({
      from: query,
      rpc: async (fn, args) => { await new Promise((r) => setTimeout(r, 80)); return R[fn] ? { data: R[fn](args || {}), error: null } : { data: null, error: { message: `없는 함수 ${fn}` } }; },
      channel: () => {
        const ch = { on: (_t, filt, cb) => { subs.push({ table: filt.table, cb }); return ch; }, subscribe: () => ch };
        return ch;
      },
    }),
  };
  window.__testDb = () => db; // 점검용
})();
