// 테스트 판 전용: Supabase 흉내 (이 브라우저 localStorage 에만 저장) — build_artifact.py --test 가 넣는다
// 모두 출근한 상태로 시작, 아무 이름이나 「로그인」 + 아무 숫자 4자리. 탭 두 개면 서로 다른 사람으로 1:1 대화를 주고받을 수 있다
// 규칙(글자 수·하루 한 번·링크 모양)은 supabase_setup.sql / supabase_social.sql / supabase_more.sql 함수와 같게
(() => {
  const FIRST = new URLSearchParams(location.search).has("first"); // 첫 이용자 체험 판: 나(석용현)는 아직 등록 전
  const ME_NEW = "석용현";
  const KEY = FIRST ? "teamOfficeTestDbFirst" : "teamOfficeTestDb", VER = 7;
  const NAMES = window.__TEST_NAMES || [];
  window.__TEST_PW = "우리팀테스트비번"; // 테스트 판: 모두 이 비밀번호로 대화 열쇠를 만들어 둔다 (dmcrypt.js)
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
        dm("김현준", "석용현", "넵 👍", 37, false), dm("홍수연", "석용현", "피드에 사진 올려 봤어요 😊", 10, false),
      ],
      nextId: id.n,
    };
  }
  let db;
  const load = () => { try { const d = JSON.parse(localStorage.getItem(KEY)); return d && d.ver === VER ? d : null; } catch { return null; } };
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { console.warn("테스트 저장 실패 (사진이 너무 많으면 저장 공간이 찰 수 있어요)", e); } };
  db = load();
  if (!db) {
    db = seed();
    if (FIRST) { // 처음 온 사람: 내 캐릭터는 표에 없고, 나와 주고받은 대화·내 글도 없다 (남들이 남긴 방명록은 그대로)
      db.office_people = db.office_people.filter((r) => r.char !== ME_NEW);
      db.office_dms = db.office_dms.filter((d) => d.from_char !== ME_NEW && d.to_char !== ME_NEW);
      const mine = new Set(db.office_diary.filter((d) => d.char === ME_NEW).map((d) => d.id));
      db.office_diary = db.office_diary.filter((d) => !mine.has(d.id));
      db.office_diary_comments = db.office_diary_comments.filter((c) => !mine.has(c.post_id) && c.from_char !== ME_NEW);
      db.office_diary_likes = db.office_diary_likes.filter((l) => !mine.has(l.post_id) && l.char !== ME_NEW);
      db.office_hearts = db.office_hearts.filter((h) => h.from_char !== ME_NEW && h.to_char !== ME_NEW);
      db.pins = {};
    }
    save();
  }
  db.pins ||= {}; // 체험 판에서 직접 정한 비밀번호(확인값) — 이 사람은 이 값으로만 로그인
  db.office_pubkeys ||= []; db.office_privs ||= {}; // 대화 열쇠: 공개(모두 보기) · 잠근 비밀 열쇠(본인만)
  // 방문 기록 (이름 없이): 테스트 판은 지난 3주 가짜 방문을 넣어 둔다 — 평일 14~21명, 주말 2~5명
  const kstDay = (ms = Date.now()) => new Date(ms + 9 * 3600e3).toISOString().slice(0, 10);
  const kstHour = () => new Date(Date.now() + 9 * 3600e3).getUTCHours();
  if (!db.office_visits || !db.office_visits.some((v) => "char" in v)) { // 이름 없이 넣어 뒀던 예전 기록이면 새로
    const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1)), pick = (w) => { let r = Math.random() * w.reduce((a, x) => a + x[1], 0); for (const [v, n] of w) if ((r -= n) < 0) return v; return w[0][0]; };
    const HW = [[8, 2], [9, 9], [10, 7], [11, 4], [12, 3], [13, 6], [14, 4], [15, 3], [16, 3], [17, 5], [18, 3], [19, 1], [21, 1]];
    db.office_visits = [];
    for (let back = 20; back >= 0; back--) {
      const ms = Date.now() - back * 864e5, day = kstDay(ms), dow = new Date(ms + 9 * 3600e3).getUTCDay(), weekend = dow === 0 || dow === 6;
      const people = back === 0 ? rnd(9, 13) : weekend ? rnd(2, 5) : rnd(14, 21);
      for (let i = 0; i < people; i++) {
        const opens = rnd(1, weekend ? 1 : 4), hours = Array.from({ length: opens }, () => pick(HW)).filter((h) => back > 0 || h <= kstHour());
        const u = { feed: rnd(0, 4), like: rnd(0, 5), comment: rnd(0, 2), dm: rnd(0, 4), heart: rnd(0, 1), alerts: rnd(0, 2), post: Math.random() < 0.15 ? 1 : 0, note: Math.random() < 0.2 ? 1 : 0, snack: Math.random() < 0.06 ? 1 : 0, bg: Math.random() < 0.1 ? 1 : 0 };
        const who = Math.random() < 0.8 ? NAMES[(i * 7 + back * 3) % NAMES.length] : null; // 로그인한 사람은 이름 (날마다 다른 사람들)
        db.office_visits.push({ day, vid: "seed" + back + "x" + i, device: pick([["pc", 6], ["phone", 3], ["app", 1]]), logged_in: !!who, char: who, opens: hours.length || 1,
          minutes: rnd(3, weekend ? 20 : 140), hours: hours.length ? hours : [Math.min(kstHour(), 9)], uses: Object.fromEntries(Object.entries(u).filter(([, n]) => n)), last_at: new Date(ms - 3600e3).toISOString() });
      }
    }
    save();
  }
  // 처음 한 번: 모두의 대화 열쇠를 만들고, 넣어 둔 대화를 잠가 둔다 (dmcrypt.js 를 쓰므로 페이지가 다 읽힌 뒤에)
  let keysReady = null;
  function ensureKeys() {
    return (keysReady ||= (async () => {
      const C = window.DMCrypt;
      if (!C) return;
      const unlocked = new Map();
      for (const c of NAMES) {
        if (db.office_pubkeys.some((k) => k.char === c) || (FIRST && c === ME_NEW)) continue;
        const { wrap } = await C.fromPassword(c, window.__TEST_PW), k = await C.newPair(wrap);
        db.office_pubkeys.push({ char: c, pub: k.pub, updated_at: now() }); db.office_privs[c] = k.priv; unlocked.set(c, k.key);
      }
      const keyOf = async (c) => { if (!unlocked.has(c)) { const { wrap } = await C.fromPassword(c, window.__TEST_PW); unlocked.set(c, await C.unwrap(wrap, db.office_privs[c])); } return unlocked.get(c); };
      for (const d of db.office_dms) {
        if (C.isLocked(d.body)) continue;
        const pub = db.office_pubkeys.find((k) => k.char === d.to_char)?.pub;
        if (!pub || !db.office_privs[d.from_char]) continue;
        d.body = await C.lock(await C.pairKey(await keyOf(d.from_char), d.from_char, d.to_char, pub), d.body);
      }
      save();
    })().catch((e) => console.error("테스트 열쇠", e))); // 실패해도 다시 돌지 않게 (무한 반복 막기)
  }
  // 이름이 늘었으면 출근한 사람으로 채운다
  for (const c of NAMES) if (!(FIRST && c === ME_NEW && !db.pins[c]) && !db.office_people.some((p) => p.char === c)) db.office_people.push({ char: c, on_duty: true, msg: "", mode: "", birthday: "", updated_at: now() });

  const subs = [];
  function notify(table, payload) { for (const s of subs) if (s.table === table) try { s.cb(payload || { eventType: "UPDATE", new: {}, old: {} }); } catch (e) { console.error(e); } }
  const touchPerson = (c) => { const r = db.office_people.find((p) => p.char === c); r.updated_at = now(); notify("office_people", { eventType: "UPDATE", new: { ...r } }); };
  addEventListener("storage", (e) => { // 다른 탭에서 바뀌면 다시 읽고 모두에게 알린다 (실시간 흉내)
    if (e.key !== KEY) return;
    db = load() || db;
    for (const r of db.office_people) notify("office_people", { eventType: "UPDATE", new: { ...r } });
    for (const t of ["office_notes", "office_snacks", "office_hearts", "office_diary_comments", "office_diary_likes"]) notify(t);
    for (const r of db.office_flags || []) notify("office_flags", { eventType: "UPDATE", new: { ...r } });
  });
  // 테스트: 비밀번호는 아무 숫자 4자리
  const pinOk = (p) => /^(\d{4}|[0-9a-f]{64})$/.test(String(p || "")); // 테스트 판: 아무 숫자 4자리 또는 브라우저가 만든 확인값
  const verify = (c, p) => (!db.office_people.some((r) => r.char === c) ? "no_char" : db.pins[c] ? (p === db.pins[c] ? "ok" : "bad_pin") : pinOk(p) ? "ok" : "bad_pin");
  const nid = () => db.nextId++;
  const R = {
    office_flag_set: ({ p_char, p_pin, p_key, p_on }) => { // LEE 순찰: 석용현만 · 켠 시각(이 기기 시계)을 함께 저장
      if (p_key !== "lee") return "bad_input";
      if (p_char !== "석용현") return "not_admin";
      const v = verify(p_char, p_pin);
      if (v !== "ok") return v;
      db.office_flags = db.office_flags || [];
      const old = db.office_flags.find((r) => r.key === p_key), t = Date.now();
      const row = { key: p_key, val: { on: !!p_on, at: t, since: p_on ? t : old?.val?.since || t }, by_char: p_char, updated_at: now() };
      db.office_flags = db.office_flags.filter((r) => r.key !== p_key).concat(row);
      save(); notify("office_flags", { eventType: "UPDATE", new: { ...row } }); return "ok";
    },
    office_claim: ({ p_char, p_pin }) => {
      if (!/^[0-9a-f]{64}$/.test(String(p_pin || ""))) return "bad_input";
      if (!FIRST) return "ok";
      if (db.office_people.some((r) => r.char === p_char)) return "taken";
      db.pins[p_char] = p_pin;
      db.office_people.push({ char: p_char, on_duty: true, msg: "", mode: "", birthday: "", on_at: now(), updated_at: now() });
      db.office_pubkeys = db.office_pubkeys.filter((k) => k.char !== p_char); delete db.office_privs[p_char]; // 대화 열쇠는 새 비밀번호로 새로
      save(); touchPerson(p_char); return "ok";
    },
    office_change_pin: ({ p_char, p_pin, p_new }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return v;
      if (!/^[0-9a-f]{64}$/.test(String(p_new || ""))) return "bad_input";
      db.pins[p_char] = p_new; db.office_pubkeys = db.office_pubkeys.filter((k) => k.char !== p_char); delete db.office_privs[p_char]; save(); return "ok";
    },
    office_visit: ({ p_vid, p_device, p_login, p_open, p_uses, p_char, p_pin }) => {
      if (!/^[0-9a-z]{8,40}$/.test(String(p_vid || ""))) return "bad_input";
      const day = kstDay(), h = kstHour();
      let v = db.office_visits.find((x) => x.day === day && x.vid === p_vid);
      if (!v) { v = { day, vid: p_vid, device: "pc", logged_in: false, char: null, opens: 0, minutes: 0, hours: [], uses: {}, last_at: now() }; db.office_visits.push(v); }
      if (p_char && verify(p_char, p_pin) === "ok") { v.char = p_char; v.logged_in = true; }
      else if (!p_open && Date.parse(v.last_at) < Date.now() - 50000) v.minutes++;
      v.device = ["pc", "phone", "app"].includes(p_device) ? p_device : "pc"; v.logged_in ||= !!p_login;
      if (p_open) { v.opens++; if (v.hours.length < 48) v.hours.push(h); }
      for (const [k, n] of Object.entries(p_uses || {})) if (typeof n === "number") v.uses[k] = (v.uses[k] || 0) + Math.max(0, Math.min(50, n | 0));
      v.last_at = now(); save(); return "ok";
    },
    office_stats: ({ p_char, p_pin, p_days }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return { status: v };
      if (p_char !== "석용현") return { status: "not_allowed" };
      const n = Math.max(1, Math.min(90, p_days || 14)), today = kstDay(), from = kstDay(Date.now() - (n - 1) * 864e5);
      const rows = db.office_visits.filter((x) => x.day >= from && x.day <= today), td = rows.filter((x) => x.day === today);
      const days = Array.from({ length: n }, (_, i) => kstDay(Date.now() - (n - 1 - i) * 864e5)).map((day) => { const r = rows.filter((x) => x.day === day); return { day, people: r.length, login: r.filter((x) => x.logged_in).length }; });
      const add = (o, k, c = 1) => { o[k] = (o[k] || 0) + c; return o; };
      return {
        status: "ok",
        today: { people: td.length, login: td.filter((x) => x.logged_in).length, opens: td.reduce((a, x) => a + x.opens, 0), minutes: td.reduce((a, x) => a + x.minutes, 0) },
        now: db.office_visits.filter((x) => Date.parse(x.last_at) > Date.now() - 300000).length,
        days, hours: rows.reduce((o, x) => (x.hours.forEach((h) => add(o, h)), o), {}), devices: rows.reduce((o, x) => add(o, x.device), {}),
        uses: rows.reduce((o, x) => (Object.entries(x.uses).forEach(([k, c]) => add(o, k, c)), o), {}),
        minutes: rows.reduce((a, x) => a + x.minutes, 0), visits: rows.length,
        people: [...rows.filter((x) => x.char).reduce((m, x) => {
          const o = m.get(x.char) || { char: x.char, last_at: x.last_at, days: new Set(), opens: 0, minutes: 0, today: false, device: x.device };
          if (x.last_at > o.last_at) { o.last_at = x.last_at; o.device = x.device; }
          o.days.add(x.day); o.opens += x.opens; o.minutes += x.minutes; o.today ||= x.day === today;
          return m.set(x.char, o);
        }, new Map()).values()].map((o) => ({ ...o, days: o.days.size })).sort((a, b) => (a.last_at < b.last_at ? 1 : -1)),
      };
    },
    office_key_get: async ({ p_char, p_pin }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return { status: v };
      await ensureKeys();
      return { status: "ok", pub: db.office_pubkeys.find((k) => k.char === p_char)?.pub || null, priv: db.office_privs[p_char] || null };
    },
    office_key_set: ({ p_char, p_pin, p_pub, p_priv }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return v;
      if (!p_pub || !p_priv || p_pub.length > 200 || p_priv.length > 2000) return "bad_input";
      db.office_pubkeys = db.office_pubkeys.filter((k) => k.char !== p_char).concat({ char: p_char, pub: p_pub, updated_at: now() }); db.office_privs[p_char] = p_priv;
      save(); return "ok";
    },
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
      const b = String(p_body || "").trim(); if (!b || !p_to || p_to === p_char) return "empty";
      if (!b.startsWith("e1:")) return "not_locked"; if (b.length > 4000) return "too_long"; // 브라우저에서 잠근 것만 (주인도 못 읽게)
      db.office_dms.push({ id: nid(), from_char: p_char, to_char: p_to, body: b, created_at: now(), read_at: null }); save(); return "ok";
    },
    office_dm_thread: async ({ p_char, p_pin, p_with, p_after }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return { status: v };
      await ensureKeys();
      let changed = false;
      for (const d of db.office_dms) if (d.to_char === p_char && d.from_char === p_with && !d.read_at) { d.read_at = now(); changed = true; }
      if (changed) save();
      const rows = db.office_dms.filter((d) => ((d.from_char === p_char && d.to_char === p_with) || (d.from_char === p_with && d.to_char === p_char)) && d.id > (p_after || 0))
        .sort((a, b) => a.id - b.id).slice(-200).map(({ read_at, ...r }) => r);
      return { status: "ok", rows };
    },
    office_dm_inbox: async ({ p_char, p_pin }) => {
      const v = verify(p_char, p_pin); if (v !== "ok") return { status: v };
      await ensureKeys();
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
        if (table === "office_pubkeys" && !keysReady) return ensureKeys().then(() => q.then(res, rej));
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
      rpc: async (fn, args) => { await new Promise((r) => setTimeout(r, 80)); return R[fn] ? { data: await R[fn](args || {}), error: null } : { data: null, error: { message: `없는 함수 ${fn}` } }; },
      channel: () => {
        const ch = { on: (_t, filt, cb) => { subs.push({ table: filt.table, cb }); return ch; }, subscribe: () => ch };
        return ch;
      },
    }),
  };
  window.__testDb = () => db; // 점검용
})();
