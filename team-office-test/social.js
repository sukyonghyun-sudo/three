// 사람 카드(방명록 · 일상/육아일기 SNS · 칭찬 하트 · 내 상태) · 모두의 피드(새 글 알림) · 1:1 대화 · 간식 신청 — 실시간 판(Supabase)에서 읽고 쓴다
// 표·함수: ../supabase_social.sql, ../supabase_more.sql. 읽기는 누구나(1:1 대화는 두 사람만), 쓰기는 「나예요」/「로그인」한 직원만
// (4자리 비밀번호를 서버 함수가 확인). 남이 쓴 글은 늘 textContent 로만 넣는다
// window.Social(ctx) → { openPerson(name, tab), openSnacks(), openInbox(), openThread(name), openFeed(), heartCount(name), sync() }
window.Social = function Social(ctx) {
  const css = document.createElement("style");
  css.textContent = `
  .sx-wrap{position:fixed;inset:0;z-index:30;background:rgba(20,22,28,.32);display:flex;align-items:center;justify-content:center;padding:16px}
  .sx-wrap[hidden]{display:none}
  .sx-card{background:var(--panel);border-radius:16px;box-shadow:0 18px 50px rgba(0,0,0,.25);width:min(460px,100%);max-height:min(86vh,760px);display:flex;flex-direction:column;overflow:hidden}
  .sx-head{display:flex;gap:12px;align-items:center;padding:14px 10px 12px 16px;border-bottom:1px solid var(--line)}
  .sx-head img,.sx-head .em{width:48px;height:48px;border-radius:50%;object-fit:cover;object-position:50% 40%;background:#efe1d6;flex:none}
  .sx-head .em{display:flex;align-items:center;justify-content:center;font-size:26px;background:#fbe9cf}
  .sx-head .t{flex:1;min-width:0}
  .sx-head b{display:block;font-size:16px}
  .sx-head span{display:block;font-size:12px;color:var(--muted);margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .sx-x{border:0;background:none;font-size:24px;line-height:1;cursor:pointer;color:var(--muted);padding:4px 10px;border-radius:8px}
  .sx-x:hover{background:#f3eee6;color:var(--ink)}
  .sx-tabs{display:flex;gap:2px;padding:6px 12px 0;border-bottom:1px solid var(--line)}
  .sx-tabs button{border:0;background:none;padding:8px 12px;font-size:13px;cursor:pointer;color:var(--muted);border-bottom:2px solid transparent;margin-bottom:-1px}
  .sx-tabs button.on{color:var(--ink);font-weight:700;border-bottom-color:var(--ink)}
  .sx-body{overflow:auto;overflow-x:hidden;padding:12px 16px 16px;flex:1;min-height:140px}
  .sx-compose{display:flex;flex-direction:column;gap:8px;margin-bottom:14px}
  .sx-compose textarea,.sx-compose input[type=text]{font:inherit;font-size:13px;border:1px solid var(--line);border-radius:10px;padding:8px 10px;background:#fff;color:var(--ink);width:100%;min-width:0}
  .sx-compose textarea{resize:vertical;min-height:54px}
  .sx-row{display:flex;gap:6px;align-items:center;flex-wrap:wrap}
  .sx-row .sp{flex:1}
  .sx-hint{font-size:11px;color:var(--muted);line-height:1.5}
  .sx-msg{font-size:12px;color:var(--work)}
  .sx-msg.warn{color:var(--move)}
  .sx-msg:empty{display:none}
  .sx-empty{font-size:13px;color:var(--muted);text-align:center;padding:26px 0}
  .sx-gate{background:#f6f1e9;border-radius:10px;padding:10px 12px;font-size:12px;color:var(--muted);line-height:1.55;margin-bottom:14px}
  .sx-gate .btn{margin-top:8px}
  .sx-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}
  .sx-note{display:flex;gap:9px}
  .sx-av{width:30px;height:30px;border-radius:50%;object-fit:cover;object-position:50% 40%;background:#efe1d6;flex:none}
  .sx-note .c{flex:1;min-width:0;background:#f6f1e9;border-radius:4px 12px 12px 12px;padding:7px 10px 8px}
  .sx-meta{display:flex;gap:6px;align-items:baseline;font-size:12px;flex-wrap:wrap}
  .sx-meta time{color:var(--muted);font-size:11px}
  .sx-meta .sp{flex:1}
  .sx-del{border:0;background:none;color:var(--muted);font:inherit;font-size:11px;cursor:pointer;padding:0 2px}
  .sx-del:hover{color:var(--ink)}
  .sx-del.arm{color:#c0392b;font-weight:700}
  .sx-note p,.sx-post p{margin:4px 0 0;font-size:13px;line-height:1.55;white-space:pre-wrap;word-break:break-word}
  .sx-post{border:1px solid var(--line);border-radius:14px;padding:10px 12px 12px;background:#fff}
  .sx-post img{display:block;width:100%;max-height:62vh;object-fit:contain;border-radius:10px;margin-top:8px;background:#f3eee6}
  .sx-pv{position:relative;width:88px;height:88px}
  .sx-pv img{width:88px;height:88px;object-fit:cover;border-radius:10px;display:block}
  .sx-pv button{position:absolute;right:-7px;top:-7px;width:22px;height:22px;border-radius:50%;border:0;background:var(--ink);color:#fff;font-size:12px;cursor:pointer;line-height:22px;padding:0}
  .sx-snack{display:flex;gap:10px;align-items:flex-start;padding:9px 11px;border:1px solid var(--line);border-radius:12px;background:#fff}
  .sx-snack .n{font-size:12px;color:var(--muted);min-width:18px;padding-top:2px}
  .sx-snack .c{flex:1;min-width:0}
  .sx-snack .it{font-size:14px;font-weight:700;word-break:break-word}
  .sx-snack a{display:inline-block;font-size:12px;color:#2f6fe4;word-break:break-all;margin-top:2px}
  .sx-more{display:block;margin:12px auto 0}
  @media (max-width:820px),(max-height:520px){.sx-wrap{align-items:flex-end;padding:0 0 var(--kb,0px)}.sx-card{width:100%;max-height:92%;border-radius:16px 16px 0 0}}
  .sx-who{display:inline-flex;align-items:center;gap:6px;border:0;background:none;padding:0;font:inherit;font-size:13px;cursor:pointer;color:var(--ink)}
  .sx-who .sx-av{width:26px;height:26px}
  .sx-toast{position:fixed;left:50%;top:64px;transform:translateX(-50%);z-index:25;display:flex;align-items:center;gap:8px;max-width:calc(100% - 24px);
    background:rgba(255,255,255,.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);border:.5px solid rgba(0,0,0,.08);
    border-radius:999px;padding:6px 16px 6px 6px;box-shadow:0 10px 30px rgba(0,0,0,.16);font-size:13px;font-weight:600;cursor:pointer;animation:sxIn .35s ease}
  .sx-toast[hidden]{display:none}
  .sx-toast .sx-av{width:30px;height:30px}
  .sx-toast span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .sx-toast b{color:#007aff;flex:none}
  @keyframes sxIn{from{opacity:0;transform:translate(-50%,-8px)}to{opacity:1;transform:translate(-50%,0)}}
  @media (max-width:820px),(max-height:520px){.sx-toast{top:calc(96px + env(safe-area-inset-top))}}
  .sx-like{display:flex;align-items:center;gap:8px;margin-top:10px;flex-wrap:wrap}
  .sx-likebtn{border:0;background:rgba(118,118,128,.12);border-radius:999px;padding:6px 13px;font:inherit;font-size:12.5px;font-weight:600;color:#3a3a3c;cursor:pointer}
  .sx-likebtn:disabled{cursor:default;opacity:.8}
  .sx-likebtn.on{background:#ffe3ea;color:#ff2d55}
  .sx-likebtn:active{transform:scale(.95)}
  .sx-likers{font-size:12px;color:var(--muted)}
  .sx-cmts{margin-top:10px;border-top:1px solid var(--line);padding-top:9px;display:flex;flex-direction:column;gap:8px}
  .sx-cmts:empty{display:none}
  .sx-cmt{display:flex;gap:8px}
  .sx-cmt .sx-av{width:24px;height:24px}
  .sx-cmt .c{flex:1;min-width:0}
  .sx-cmt p{margin:1px 0 0;font-size:12.5px;line-height:1.5;white-space:pre-wrap;word-break:break-word}
  .sx-cmtin{display:flex;gap:6px;align-items:center}
  .sx-cmtin input{flex:1;min-width:0;font:inherit;font-size:12.5px;border:0;border-radius:999px;padding:7px 12px;background:rgba(118,118,128,.12);color:var(--ink)}
  .sx-cmtin .btn{padding:6px 12px;font-size:12px}
  .sx-acts{display:flex;gap:6px;padding:10px 16px 0;flex-wrap:wrap}
  .sx-acts .btn{padding:6px 11px;font-size:12px}
  .sx-acts .btn.heart{color:#c2185b}
  .sx-acts .btn.heart.on{background:#ffe1ea;border-color:#f3b6c6}
  .sx-bday{margin:10px 16px 0;padding:8px 12px;border-radius:10px;background:#fff1d6;font-size:13px;line-height:1.5}
  .sx-h{margin:14px 0 8px;font-size:12px;color:var(--muted);font-weight:600}
  .sx-h:first-child{margin-top:0}
  .sx-people{display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:6px}
  .sx-person{display:flex;flex-direction:column;align-items:center;gap:4px;border:1px solid var(--line);background:#fff;border-radius:10px;padding:8px 4px;font:inherit;font-size:12px;cursor:pointer;color:var(--ink)}
  .sx-person:hover{border-color:#c9c0b2}
  .sx-person .sx-av{width:36px;height:36px}
  .sx-inbox li{display:flex;gap:10px;align-items:center;padding:8px 10px;border:1px solid var(--line);border-radius:12px;background:#fff;cursor:pointer}
  .sx-inbox li:hover{border-color:#c9c0b2}
  .sx-inbox .sx-av{width:38px;height:38px}
  .sx-inbox .c{flex:1;min-width:0}
  .sx-inbox .c b{font-size:13px}
  .sx-inbox .c span{display:block;font-size:12px;color:var(--muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:1px}
  .sx-inbox time{font-size:11px;color:var(--muted);white-space:nowrap}
  .sx-badge{min-width:20px;height:20px;border-radius:10px;background:#e5484d;color:#fff;font-size:11px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;padding:0 6px;flex:none}
  .sx-chat{background:#f6f1e9}
  .sx-msgs{display:flex;flex-direction:column;gap:6px}
  .sx-m{max-width:80%;align-self:flex-start;background:#fff;border-radius:4px 14px 14px 14px;padding:7px 11px 5px;font-size:13px;line-height:1.5;white-space:pre-wrap;word-break:break-word;box-shadow:0 1px 2px rgba(0,0,0,.06)}
  .sx-m.me{align-self:flex-end;background:var(--ink);color:#fff;border-radius:14px 4px 14px 14px}
  .sx-m time{display:block;font-size:10px;opacity:.6;margin-top:1px;text-align:right}
  .sx-day{align-self:center;font-size:11px;color:var(--muted);background:rgba(255,255,255,.75);border-radius:999px;padding:2px 10px;margin:6px 0}
  .sx-foot{display:flex;gap:6px;padding:10px 12px;border-top:1px solid var(--line);align-items:flex-end;background:var(--panel)}
  .sx-foot textarea{flex:1;min-width:0;font:inherit;font-size:13px;border:1px solid var(--line);border-radius:10px;padding:8px 10px;resize:none;max-height:110px;background:#fff;color:var(--ink)}
  .sx-back{border:0;background:none;font-size:28px;line-height:1;cursor:pointer;color:var(--muted);padding:0 4px 4px 0}
  .sx-opts{display:flex;flex-direction:column;gap:6px}
  .sx-opt{display:block;width:100%;text-align:left;border:1px solid var(--line);background:#fff;border-radius:12px;padding:8px 10px;font:inherit;cursor:pointer;color:var(--ink);position:relative;overflow:hidden}
  .sx-opt:disabled{cursor:default}
  .sx-opt.on{border-color:var(--work);box-shadow:0 0 0 1px var(--work) inset}
  .sx-opt .bar{position:absolute;left:0;top:0;bottom:0;background:rgba(47,158,98,.13)}
  .sx-opt .row{position:relative;display:flex;align-items:center;gap:8px;font-size:13px}
  .sx-opt .row b{flex:1;font-weight:600}
  .sx-opt .fs{display:flex;padding-left:5px}
  .sx-opt .fs img{width:20px;height:20px;border-radius:50%;object-fit:cover;object-position:50% 40%;margin-left:-5px;border:2px solid #fff;background:#efe1d6}
  .sx-chips{display:flex;gap:6px;flex-wrap:wrap}
  .sx-chip{border:1px solid var(--line);background:#fff;border-radius:999px;padding:6px 12px;font:inherit;font-size:13px;cursor:pointer;color:var(--ink)}
  .sx-chip.on{background:var(--ink);color:#fff;border-color:var(--ink)}
  .sx-compose select{font:inherit;font-size:13px;border:1px solid var(--line);border-radius:8px;padding:5px 6px;background:#fff;color:var(--ink)}
  .sx-hb{position:relative;border:1px solid var(--line);background:rgba(255,253,249,.95);border-radius:10px;padding:6px 11px;font:inherit;font-size:12px;cursor:pointer;color:var(--ink)}
  .sx-hb:hover{border-color:#c9c0b2}
  .sx-hb .sx-badge{position:absolute;top:-7px;right:-7px;height:18px;min-width:18px;font-size:10px;padding:0 5px}
  .sx-hb .sx-badge[hidden]{display:none}
  @media (max-height:520px) and (orientation:landscape){.sx-wrap{align-items:center;padding:8px}.sx-card{width:min(560px,100%);max-height:100%;border-radius:14px}}`;
  document.head.append(css);

  const wrap = document.createElement("div");
  wrap.className = "sx-wrap";
  wrap.hidden = true;
  const card = document.createElement("div");
  card.className = "sx-card";
  card.setAttribute("role", "dialog");
  wrap.append(card);
  document.body.append(wrap);
  wrap.addEventListener("click", (e) => { if (e.target === wrap) close(); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !wrap.hidden) close(); });

  let view = null; // { kind: "person", name, tab: "notes" | "diary" } | { kind: "snacks" }
  let seq = 0, busy = false, msgEl = null, diaryPhoto = null, diaryShown = 0;
  const PAGE = 8;
  const NOT_READY = "아직 준비 중이에요 (설정을 마치면 열려요)";
  const MSG = {
    bad_pin: "비밀번호가 달라요 — 사원 목록에서 다시 로그인해 주세요", locked: "여러 번 틀려서 10분 동안 잠겼어요", no_char: "아직 연결 안 된 캐릭터예요",
    empty: "내용을 써 주세요", too_long: "글이 너무 길어요", bad_photo: "사진을 올리지 못했어요 (용량)", too_many: "오늘은 더 올릴 수 없어요",
    bad_link: "링크는 http:// 나 https:// 로 시작하는 주소만 돼요", not_allowed: "지울 수 없는 글이에요",
    already: "오늘은 이미 보냈어요 (하루 한 번)", bad_input: "입력이 올바르지 않아요",
  };
  const today = () => new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 10); // 한국 날짜 (생일·하트는 하루 단위)
  const isBday = (name) => (ctx.people(name).birthday || "") === today().slice(5);

  // ───────── 작은 도구 ─────────
  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function btn(text, cls, onclick) { const b = el("button", "btn" + (cls ? " " + cls : ""), text); b.type = "button"; b.onclick = onclick; return b; }
  const DAYS = "일월화수목금토";
  function when(iso) { // 10월 28일 (화) 오후 4:12
    const d = new Date(iso), h = d.getHours(), y = d.getFullYear() !== new Date().getFullYear() ? `${d.getFullYear()}년 ` : "";
    return `${y}${d.getMonth() + 1}월 ${d.getDate()}일 (${DAYS[d.getDay()]}) ${h < 12 ? "오전" : "오후"} ${h % 12 || 12}:${String(d.getMinutes()).padStart(2, "0")}`;
  }
  function face(name) { const i = el("img", "sx-av"); i.alt = ""; i.src = ctx.face(name); return i; }
  function say(text, warn = false) { if (msgEl) { msgEl.textContent = text; msgEl.className = warn ? "sx-msg warn" : "sx-msg"; } }
  const missing = (e) => /42P01|PGRST20[025]|does not exist|Could not find/i.test(`${e?.code} ${e?.message}`);
  function delBtn(onOk) { // 두 번 눌러야 지운다 (claude.ai·휴대폰에서 confirm 창이 안 뜨는 곳이 있어서)
    const b = el("button", "sx-del", "삭제");
    b.type = "button";
    let t = 0;
    b.onclick = () => {
      if (!b.classList.contains("arm")) { b.classList.add("arm"); b.textContent = "한 번 더 누르면 삭제"; clearTimeout(t); t = setTimeout(() => { b.classList.remove("arm"); b.textContent = "삭제"; }, 3000); return; }
      clearTimeout(t); onOk();
    };
    return b;
  }
  async function call(fn, args) {
    const sb = ctx.sb(), me = ctx.me();
    if (!sb || !me) { say("먼저 사원 목록에서 로그인해 주세요", true); return null; }
    if (busy) return null;
    busy = true;
    try {
      const { data, error } = await sb.rpc(fn, { p_char: me.char, p_pin: me.pin, ...args });
      if (error) throw error;
      if (data !== "ok") say(MSG[data] || String(data), true);
      return data;
    } catch (e) {
      console.error(e);
      say(missing(e) ? NOT_READY : `저장하지 못했어요 (${e.message || e})`, true);
      return null;
    } finally { busy = false; }
  }
  async function fetchRows(q) { const { data, error } = await q; if (error) throw error; return data || []; }

  // ───────── 창 ─────────
  function show() { wrap.hidden = false; }
  function close() { wrap.hidden = true; view = null; seq++; clearInterval(dmTimer); }
  function header(img, title, sub) {
    const h = el("div", "sx-head"), t = el("div", "t");
    t.append(el("b", null, title), el("span", null, sub));
    const x = el("button", "sx-x", "×");
    x.type = "button"; x.title = "닫기"; x.onclick = close;
    h.append(img, t, x);
    return h;
  }
  // 쓰는 칸 위: 실시간 판이 아니거나 로그인 전이면 안내
  function gate(body, what) {
    if (!ctx.live) { body.append(el("div", "sx-gate", `${what}은(는) 실시간 판(GitHub 링크)에서 열려요`)); return false; }
    if (ctx.me()) return true;
    const g = el("div", "sx-gate", `${what}을(를) 쓰려면 사원 목록의 내 이름 줄에서 「나예요」(처음 한 번) 또는 「로그인」을 눌러 주세요. 읽기는 누구나 할 수 있어요.`);
    g.append(el("br"), btn("사원 목록 열기", "", () => { close(); ctx.openList(); }));
    body.append(g);
    return false;
  }

  // ───────── 사람 카드: 방명록 · 육아일기 ─────────
  function openPerson(name, tab = "notes") {
    clearInterval(dmTimer);
    view = { kind: "person", name, tab: tab === "me" && ctx.me()?.char !== name ? "notes" : tab || "notes" };
    diaryPhoto = null;
    show();
    renderPerson();
  }
  function renderPerson() {
    const my = ++seq, { name, tab } = view, d = feedOf(name), st = ctx.status(name);
    const head = el("img");
    head.alt = ""; head.src = ctx.face(name);
    card.replaceChildren(header(head, name, st.msg ? `${st.text} · “${st.msg}”` : st.text));
    const me = ctx.me()?.char, acts = el("div", "sx-acts"), n = hearts.get(name) || 0;
    if (ctx.live) {
      if (me && me !== name) {
        const sent = heartsMine.has(name), hb = btn(sent ? `❤ 오늘 보냈어요 · ${n}` : `❤ 칭찬하기 · ${n}`, "heart" + (sent ? " on" : ""), async () => { // 한 사람에게 하루 한 번, 숫자는 오늘 받은 수
          if ((await call("office_heart", { p_to: name })) === "ok") { heartsMine.add(name); hearts.set(name, n + 1); ctx.onChange?.(); renderPerson(); }
        });
        hb.disabled = sent;
        acts.append(hb, btn("💬 1:1 대화", "", () => openThread(name)));
        if (ctx.test) acts.append(btn("🧪 이 사람으로 보기", "", () => ctx.switchTo(name))); // 테스트 판: 그 사람이 돼서 써 보기
      } else acts.append(Object.assign(btn(`❤ 오늘 받은 칭찬 ${n}`, "heart", () => {}), { disabled: true }));
      card.append(acts);
    }
    if (isBday(name)) card.append(el("div", "sx-bday", `🎂 오늘은 ${name} 님 생일이에요! 방명록에 축하 한마디 남겨 주세요`));
    const tabList = [["notes", "방명록"], ["diary", `${d.icon} ${d.title}`], me === name && ctx.live && ["me", "⚙️ 내 상태"]].filter(Boolean);
    if (tabList.length > 1) {
      const tabs = el("div", "sx-tabs");
      for (const [k, label] of tabList) {
        const b = el("button", k === tab ? "on" : "", label);
        b.type = "button";
        b.onclick = () => { if (view.tab !== k) { view.tab = k; renderPerson(); } };
        tabs.append(b);
      }
      card.append(tabs);
    }
    const body = el("div", "sx-body");
    card.append(body);
    if (tab === "diary") renderFeed(body, name, d, my); else if (tab === "me") renderMe(body, name); else renderNotes(body, name, my);
  }
  // 내 상태: 회의 중 · 집중 · 재택 · 휴가 (재택·휴가면 사무실 자리를 비운다) + 생일
  function renderMe(body, name) {
    const p = ctx.people(name);
    msgEl = el("div", "sx-msg");
    body.append(el("h4", "sx-h", "지금 상태 (머리 위에 아이콘으로 보여요)"));
    const chips = el("div", "sx-chips");
    for (const [k, [icon, label]] of [["", ["", "없음"]], ...Object.entries(ctx.modes)]) {
      const b = el("button", "sx-chip" + ((p.mode || "") === k ? " on" : ""), icon ? `${icon} ${label}` : label);
      b.type = "button";
      b.onclick = async () => { if ((await call("office_set_profile", { p_mode: k })) === "ok") { ctx.patchPerson(name, { mode: k }); renderPerson(); say(k ? `${label}(으)로 바꿨어요` : "상태를 지웠어요"); } };
      chips.append(b);
    }
    body.append(chips, el("div", "sx-hint", "재택·휴가로 두면 출근해 있어도 사무실 자리를 비워요"));
    body.append(el("h4", "sx-h", "생일"));
    const c = el("div", "sx-compose"), row = el("div", "sx-row"), mm = el("select"), dd = el("select");
    mm.append(el("option", null, "월"), ...Array.from({ length: 12 }, (_, i) => Object.assign(el("option", null, `${i + 1}월`), { value: String(i + 1).padStart(2, "0") })));
    dd.append(el("option", null, "일"), ...Array.from({ length: 31 }, (_, i) => Object.assign(el("option", null, `${i + 1}일`), { value: String(i + 1).padStart(2, "0") })));
    if (p.birthday) { mm.value = p.birthday.slice(0, 2); dd.value = p.birthday.slice(3); }
    const save = async (v) => { if ((await call("office_set_profile", { p_birthday: v })) === "ok") { ctx.patchPerson(name, { birthday: v }); renderPerson(); } };
    row.append(mm, dd, btn("저장", "dark", () => (mm.selectedIndex && dd.selectedIndex ? save(`${mm.value}-${dd.value}`) : say("월과 일을 골라 주세요", true))), btn("지우기", "", () => save("")));
    c.append(row, el("div", "sx-hint", "생일엔 머리 위에 🎂 가 뜨고, 카드에 축하 알림이 나와요"));
    body.append(c, msgEl);
  }
  async function renderNotes(body, name, my) {
    if (gate(body, "방명록")) {
      const c = el("div", "sx-compose"), ta = el("textarea");
      ta.maxLength = 200; ta.rows = 2; ta.placeholder = `${name} 님에게 한마디 (200자)`;
      const row = el("div", "sx-row");
      msgEl = el("span", "sx-msg");
      row.append(msgEl, el("span", "sp"), btn("남기기", "dark", async () => {
        const body = ta.value.trim();
        if (!body) return say("내용을 써 주세요", true);
        if ((await call("office_note_add", { p_to: name, p_body: body })) === "ok") { ta.value = ""; say("남겼어요"); load(); }
      }));
      c.append(ta, row);
      body.append(c);
    } else { msgEl = el("div", "sx-msg"); body.append(msgEl); }
    const list = el("ul", "sx-list");
    body.append(list);
    async function load() {
      if (!ctx.live) return;
      const sb = ctx.sb();
      if (!sb) { list.replaceChildren(el("li", "sx-empty", "불러오는 중…")); return; }
      try {
        const rows = await fetchRows(sb.from("office_notes").select("id,to_char,from_char,body,created_at").eq("to_char", name).order("created_at", { ascending: false }).limit(100));
        if (my !== seq) return;
        const me = ctx.me()?.char;
        list.replaceChildren(...(rows.length ? rows.map((r) => {
          const li = el("li", "sx-note"), c = el("div", "c"), meta = el("div", "sx-meta");
          const t = el("time", null, when(r.created_at));
          t.dateTime = r.created_at;
          meta.append(el("b", null, r.from_char), t, el("span", "sp"));
          if (me && (me === r.from_char || me === r.to_char)) meta.append(delBtn(async () => { if ((await call("office_note_delete", { p_id: r.id })) === "ok") load(); }));
          c.append(meta, el("p", null, r.body));
          li.append(face(r.from_char), c);
          return li;
        }) : [el("li", "sx-empty", "아직 방명록이 비어 있어요. 첫 글을 남겨 보세요")]));
      } catch (e) {
        console.error(e);
        if (my === seq) list.replaceChildren(el("li", "sx-empty", missing(e) ? NOT_READY : "방명록을 불러오지 못했어요"));
      }
    }
    view.reload = load;
    load();
  }
  // 글 목록 (SNS): owner 한 사람의 글, 또는 owner 가 없으면 모두의 글(피드). 쓰기는 내 글로만
  async function renderFeed(body, owner, d, my) {
    diaryShown = 0;
    const name = owner, me0 = ctx.me()?.char, mine = owner ? me0 === owner : !!me0;
    if (!ctx.live) body.append(el("div", "sx-gate", "글은 실시간 판(GitHub 링크)에서 열려요"));
    else if (mine) {
      const c = el("div", "sx-compose"), ta = el("textarea");
      ta.maxLength = 1000; ta.rows = 3; ta.placeholder = ctx.diary[me0] ? `오늘의 ${ctx.diary[me0].title} (1000자)` : "지금 무슨 일이 있나요? 사진도 올릴 수 있어요 (1000자)";
      const file = el("input");
      file.type = "file"; file.accept = "image/*"; file.hidden = true;
      const pv = el("div", "sx-row");
      const drawPv = () => {
        pv.replaceChildren();
        if (!diaryPhoto) return;
        const box = el("div", "sx-pv"), im = el("img"), x = el("button", null, "×");
        im.src = diaryPhoto; im.alt = ""; x.type = "button"; x.title = "사진 빼기";
        x.onclick = () => { diaryPhoto = null; drawPv(); };
        box.append(im, x);
        pv.append(box);
      };
      file.onchange = async () => {
        const f = file.files?.[0];
        file.value = "";
        if (!f) return;
        say("사진 줄이는 중…");
        diaryPhoto = await shrink(f);
        say(diaryPhoto ? "" : "이 사진은 열 수 없어요", !diaryPhoto);
        drawPv();
      };
      const row = el("div", "sx-row");
      msgEl = el("span", "sx-msg");
      row.append(btn("📷 사진", "", () => file.click()), msgEl, el("span", "sp"), btn("올리기", "dark", async () => {
        const text = ta.value.trim();
        if (!text && !diaryPhoto) return say("글이나 사진을 넣어 주세요", true);
        say("올리는 중…");
        if ((await call("office_diary_post", { p_body: text, p_photo: diaryPhoto })) === "ok") { ta.value = ""; diaryPhoto = null; drawPv(); say("올렸어요"); load(true); pollFeed(); }
      }));
      c.append(ta, pv, row, file, el("div", "sx-hint", "올린 글과 사진은 링크를 아는 누구나 볼 수 있어요. 사진은 올릴 때 알맞은 크기로 줄여요."));
      body.append(c);
      drawPv();
    } else if (!owner) gate(body, "글"); // 피드: 로그인 전엔 안내
    else { msgEl = el("div", "sx-msg"); body.append(msgEl); }
    if (!msgEl || !body.contains(msgEl)) { msgEl = el("div", "sx-msg"); body.append(msgEl); }
    const list = el("div", "sx-list"), more = btn("더 보기", "sx-more", () => load(false));
    more.hidden = true;
    body.append(list, more);
    async function load(reset = true) {
      if (!ctx.live) return;
      const sb = ctx.sb();
      if (!sb) { list.replaceChildren(el("div", "sx-empty", "불러오는 중…")); return; }
      if (reset) diaryShown = 0;
      try {
        let q = sb.from("office_diary").select("id,char,body,photo,created_at");
        if (owner) q = q.eq("char", owner);
        const rows = await fetchRows(q.order("created_at", { ascending: false }).range(diaryShown, diaryShown + PAGE - 1));
        if (my !== seq) return;
        markSeen(owner, rows);
        const items = rows.map((r) => {
          const a = el("article", "sx-post"), meta = el("div", "sx-meta"), t = el("time", null, when(r.created_at));
          t.dateTime = r.created_at;
          if (!owner) { // 피드: 누가 올렸는지 (누르면 그 사람 글로)
            const who = el("button", "sx-who");
            who.type = "button"; who.append(face(r.char), el("b", null, r.char));
            who.onclick = () => openPerson(r.char, "diary");
            meta.append(who);
          }
          meta.append(t, el("span", "sp"));
          if (ctx.me()?.char === r.char) meta.append(delBtn(async () => { if ((await call("office_diary_delete", { p_id: r.id })) === "ok") load(true); }));
          a.append(meta);
          if (r.photo && /^data:image\/(jpeg|png|webp);base64,/.test(r.photo)) { const im = el("img"); im.alt = `${r.char} 님이 올린 사진`; im.loading = "lazy"; im.src = r.photo; a.append(im); }
          if (r.body) a.append(el("p", null, r.body));
          const lk = el("div", "sx-like"), cb = el("div", "sx-cmts"); // 좋아요 · 댓글
          likeBoxes.set(r.id, lk); boxes.set(r.id, cb); owners.set(r.id, r.char); a.append(lk, cb);
          return a;
        });
        if (reset) list.replaceChildren(...(items.length ? items : [el("div", "sx-empty", owner ? "아직 올린 글이 없어요" : "아직 아무도 글을 안 올렸어요 — 첫 글을 올려 보세요")]));
        else list.append(...items);
        diaryShown += rows.length;
        loadCmts(rows.map((r) => r.id));
        more.hidden = rows.length < PAGE;
      } catch (e) {
        console.error(e);
        if (my === seq) list.replaceChildren(el("div", "sx-empty", missing(e) ? NOT_READY : "글을 불러오지 못했어요"));
      }
    }
    // 댓글: 누구나 읽고, 로그인한 직원이 쓰고, 쓴 사람·일기 주인이 지운다
    const boxes = new Map(), owners = new Map(), likeBoxes = new Map(); // 글 id → 댓글 칸 · 글쓴이 · 좋아요 칸
    async function loadCmts(ids) { // 댓글과 좋아요를 같이
      const sb = ctx.sb();
      if (!sb || !ids.length) return;
      const [cs, ls] = await Promise.all([
        fetchRows(sb.from("office_diary_comments").select("id,post_id,from_char,body,created_at").in("post_id", ids).order("id", { ascending: true })).catch((e) => (missing(e) || console.error(e), null)),
        fetchRows(sb.from("office_diary_likes").select("post_id,char").in("post_id", ids)).catch((e) => (missing(e) || console.error(e), null)),
      ]);
      if (my !== seq) return;
      for (const id of ids) {
        if (cs) drawCmts(id, cs.filter((c) => c.post_id === id));
        if (ls) drawLikes(id, ls.filter((l) => l.post_id === id).map((l) => l.char));
      }
    }
    function drawLikes(id, who) { // ♡ 좋아요 N — 누르면 좋아요, 다시 누르면 취소
      const box = likeBoxes.get(id), me = ctx.me()?.char;
      if (!box) return;
      const on = !!me && who.includes(me), b = el("button", "sx-likebtn" + (on ? " on" : ""), `${on ? "❤" : "♡"} 좋아요${who.length ? " " + who.length : ""}`);
      b.type = "button";
      b.disabled = !me;
      b.title = me ? (on ? "좋아요 취소" : "좋아요") : "로그인하면 누를 수 있어요";
      b.onclick = async () => { if ((await call("office_diary_like", { p_post: id })) === "ok") loadCmts([id]); };
      const names = who.length ? el("span", "sx-likers", who.length <= 3 ? `${who.join(", ")} 님이 좋아해요` : `${who.slice(0, 2).join(", ")} 님 외 ${who.length - 2}명이 좋아해요`) : null;
      if (names) names.title = who.join(", ");
      box.replaceChildren(...[b, names].filter(Boolean));
    }
    function drawCmts(id, cs) {
      const box = boxes.get(id), me = ctx.me()?.char;
      if (!box) return;
      box.replaceChildren(...cs.map((c) => {
        const row = el("div", "sx-cmt"), body = el("div", "c"), meta = el("div", "sx-meta"), t = el("time", null, when(c.created_at));
        t.dateTime = c.created_at;
        meta.append(el("b", null, c.from_char), t, el("span", "sp"));
        if (me && (me === c.from_char || me === owners.get(id))) meta.append(delBtn(async () => { if ((await call("office_diary_comment_delete", { p_id: c.id })) === "ok") loadCmts([id]); }));
        body.append(meta, el("p", null, c.body));
        row.append(face(c.from_char), body);
        return row;
      }));
      if (!me) return;
      const f = el("div", "sx-cmtin"), inp = el("input");
      inp.type = "text"; inp.maxLength = 300; inp.placeholder = "댓글 달기…";
      const go = async () => { const b = inp.value.trim(); if (b && (await call("office_diary_comment", { p_post: id, p_body: b })) === "ok") { inp.value = ""; loadCmts([id]); } };
      inp.onkeydown = (e) => { if (e.key === "Enter" && !e.isComposing) go(); };
      f.append(inp, btn("등록", "dark", go));
      box.append(f);
    }
    view.reloadCmts = () => loadCmts([...boxes.keys()]);
    view.reload = () => load(true);
    load(true);
  }
  // 사진은 올리기 전에 긴 변 1280px · JPEG 로 줄인다 (약 0.45MB 이하가 될 때까지 조금씩 더)
  async function shrink(file) {
    let img = null;
    try { img = await createImageBitmap(file, { imageOrientation: "from-image" }); } catch {
      img = await new Promise((ok) => { const i = new Image(); i.onload = () => ok(i); i.onerror = () => ok(null); i.src = URL.createObjectURL(file); });
    }
    if (!img || !img.width) return null;
    let max = 1280, q = 0.82, out = null;
    for (let i = 0; i < 7; i++) {
      const k = Math.min(1, max / Math.max(img.width, img.height)), c = document.createElement("canvas");
      c.width = Math.max(1, Math.round(img.width * k));
      c.height = Math.max(1, Math.round(img.height * k));
      const g = c.getContext("2d");
      g.fillStyle = "#fff"; g.fillRect(0, 0, c.width, c.height);
      g.drawImage(img, 0, 0, c.width, c.height);
      out = c.toDataURL("image/jpeg", q);
      if (out.length < 450000) return out;
      max *= 0.82; q = Math.max(0.55, q - 0.06);
    }
    return out && out.length < 650000 ? out : null;
  }

  // ───────── 모두의 피드 · 새 글 알림 ─────────
  // 새 글은 사진 빼고 번호만 몇 초마다 확인 (사진까지 실시간으로 받으면 무겁다). 처음 연 사람은 지금까지를 다 본 것으로
  const FEED_DEFAULT = { icon: "📷", title: "일상" };
  const feedOf = (n) => ctx.diary[n] || FEED_DEFAULT;
  const SEEN_KEY = "teamOfficeFeedSeen";
  let seen = { all: 0, by: {} }, feedRows = [], feedMax = 0, feedInit = false;
  const seenKey = () => `${SEEN_KEY}:${ctx.me()?.char || ""}`; // 본 글은 사람마다 (테스트 판에서 사람을 바꿔도 따로)
  const saveSeen = () => { try { localStorage.setItem(seenKey(), JSON.stringify(seen)); } catch {} };
  function loadSeen() {
    seen = { all: 0, by: {} };
    try { seen = { ...seen, ...JSON.parse(localStorage.getItem(seenKey())) }; } catch {}
    if (!seen.all && feedInit) { seen.all = feedMax; saveSeen(); } // 처음 보는 사람은 지금까지를 다 본 것으로
  }
  loadSeen();
  function markSeen(owner, rows) {
    const top = Math.max(0, ...rows.map((r) => +r.id));
    if (!top) return;
    if (owner) seen.by[owner] = Math.max(seen.by[owner] || 0, top); else seen.all = Math.max(seen.all, top);
    saveSeen(); setFeedBadge(); ctx.onChange?.();
  }
  const unseen = () => { const me = ctx.me()?.char; return feedRows.filter((r) => r.char !== me && r.id > Math.max(seen.all, seen.by[r.char] || 0)); };
  function feedNew(name) { // 머리 위 「새 글」: 하루 안에 올라온 안 본 글이 있으면
    const day = Date.now() - 864e5;
    return unseen().some((r) => r.char === name && Date.parse(r.created_at) > day);
  }
  async function pollFeed() {
    const sb = ctx.sb();
    if (!sb) return;
    try {
      const q = sb.from("office_diary").select("id,char,created_at");
      const rows = feedInit ? await fetchRows(q.gt("id", feedMax).order("id", { ascending: true }).limit(50))
        : await fetchRows(q.order("id", { ascending: false }).limit(200));
      const me = ctx.me()?.char;
      if (!feedInit) { feedInit = true; if (!seen.all) { seen.all = Math.max(0, ...rows.map((r) => +r.id)); saveSeen(); } }
      else for (const r of rows) if (r.char !== me) toast(r);
      feedRows = [...feedRows, ...rows].sort((a, b) => a.id - b.id).slice(-200);
      feedMax = Math.max(feedMax, ...rows.map((r) => +r.id));
      setFeedBadge(); ctx.onChange?.();
    } catch (e) { if (!missing(e)) console.error(e); }
  }
  function setFeedBadge() { if (!hud.feedBadge) return; const n = unseen().length; hud.feedBadge.hidden = !n; hud.feedBadge.textContent = n > 99 ? "99+" : String(n); }
  const toastEl = el("div", "sx-toast");
  toastEl.hidden = true;
  document.body.append(toastEl);
  function toast(r) { // 「○○ 님이 새 글을 올렸어요」 — 누르면 그 사람 글로
    toastEl.replaceChildren(face(r.char), el("span", null, `${r.char} 님이 새 ${feedOf(r.char).title === "일상" ? "글" : feedOf(r.char).title}을 올렸어요`), el("b", null, "보기"));
    toastEl.onclick = () => { toastEl.hidden = true; openPerson(r.char, "diary"); };
    toastEl.hidden = false;
    clearTimeout(toast.t); toast.t = setTimeout(() => { toastEl.hidden = true; }, 7000);
  }
  function openFeed() { clearInterval(dmTimer); view = { kind: "feed" }; show(); renderFeedView(); }
  function renderFeedView() {
    const my = ++seq;
    card.replaceChildren(header(el("div", "em", "📷"), "모두의 피드", "직원들이 올린 글·사진 — 댓글도 남겨 보세요"));
    const body = el("div", "sx-body");
    card.append(body);
    renderFeed(body, null, FEED_DEFAULT, my);
  }

  // ───────── 칭찬 하트: 받은 수(모두) · 오늘 내가 보낸 사람 ─────────
  const hearts = new Map();
  let heartsMine = new Set(), heartsDay = "";
  setInterval(() => { if (heartsDay && today() !== heartsDay && ctx.sb()) loadHearts().then(() => { if (view?.kind === "person") renderPerson(); }); }, 60000); // 자정이 지나면 0부터
  async function loadHearts() {
    const sb = ctx.sb();
    if (!sb) return;
    try {
      const d = today(), rows = await fetchRows(sb.from("office_hearts").select("from_char,to_char,day").eq("day", d).limit(20000));
      hearts.clear(); heartsDay = d;
      for (const r of rows) hearts.set(r.to_char, (hearts.get(r.to_char) || 0) + 1); // 오늘 받은 칭찬만 (다음 날엔 0부터)
      const me = ctx.me()?.char;
      heartsMine = new Set(rows.filter((r) => r.from_char === me).map((r) => r.to_char));
      ctx.onChange?.();
    } catch (e) { if (!missing(e)) console.error(e); }
  }
  // 함수가 표(jsonb {status, rows})를 돌려줄 때
  async function rpcRows(fn, args) {
    const sb = ctx.sb(), me = ctx.me();
    if (!sb || !me) return null;
    try {
      const { data, error } = await sb.rpc(fn, { p_char: me.char, p_pin: me.pin, ...args });
      if (error) throw error;
      if (data?.status !== "ok") { say(MSG[data?.status] || String(data?.status), true); return null; }
      return data.rows || [];
    } catch (e) {
      console.error(e);
      say(missing(e) ? NOT_READY : `불러오지 못했어요 (${e.message || e})`, true);
      return null;
    }
  }

  // ───────── 1:1 대화 (두 사람만: 열려 있는 동안 4초마다 새 말 읽기, 안 읽은 수는 20초마다) ─────────
  let dmTimer = 0, unreadTimer = 0;
  function face48(name) { const i = el("img"); i.alt = ""; i.src = ctx.face(name); return i; }
  function openInbox() { clearInterval(dmTimer); view = { kind: "inbox" }; show(); renderInbox(); }
  async function renderInbox() {
    const my = ++seq;
    card.replaceChildren(header(el("div", "em", "💬"), "1:1 대화", "보낸 사람과 받은 사람만 볼 수 있어요"));
    const body = el("div", "sx-body");
    card.append(body);
    if (!gate(body, "1:1 대화")) return;
    msgEl = el("div", "sx-msg");
    const list = el("ul", "sx-list sx-inbox"), grid = el("div", "sx-people"), me = ctx.me().char;
    body.append(msgEl, list, el("h4", "sx-h", "새 대화 — 이야기할 사람을 고르세요"), grid);
    for (const n of ctx.names) if (n !== me) { const b = el("button", "sx-person"); b.type = "button"; b.append(face(n), el("span", null, n)); b.onclick = () => openThread(n); grid.append(b); }
    list.replaceChildren(el("li", "sx-empty", "불러오는 중…"));
    const rows = await rpcRows("office_dm_inbox", {});
    if (my !== seq) return;
    if (!rows) { list.replaceChildren(); return; }
    setUnread(rows.reduce((a, r) => a + (+r.unread || 0), 0));
    list.replaceChildren(...(rows.length ? rows.map((r) => {
      const li = el("li"), c = el("div", "c"), t = el("time", null, when(r.last_at).replace(/^\S+ \S+ /, ""));
      c.append(el("b", null, r.with), el("span", null, (r.last_from === me ? "나: " : "") + r.last));
      li.append(face(r.with), c, t);
      if (+r.unread) li.append(el("span", "sx-badge", String(r.unread)));
      li.onclick = () => openThread(r.with);
      return li;
    }) : [el("li", "sx-empty", "아직 나눈 대화가 없어요")]));
  }
  function openThread(name) { clearInterval(dmTimer); view = { kind: "dm", name, last: 0, day: "" }; show(); renderThread(); }
  function renderThread() {
    const my = ++seq, name = view.name;
    const head = header(face48(name), name, "1:1 대화 · 두 사람만 볼 수 있어요"), back = el("button", "sx-back", "‹");
    back.type = "button"; back.title = "대화 목록"; back.onclick = openInbox;
    head.prepend(back);
    if (ctx.test && ctx.me()) { // 테스트 판: 상대가 돼서 답장해 보기
      const sw = btn("🧪 상대로 답장", "", () => ctx.switchTo(name));
      sw.style.cssText = "padding:5px 9px;font-size:12px;flex:none";
      head.querySelector(".sx-x").before(sw);
    }
    card.replaceChildren(head);
    const body = el("div", "sx-body sx-chat");
    card.append(body);
    if (!gate(body, "1:1 대화")) return;
    const list = el("div", "sx-msgs"), foot = el("div", "sx-foot"), ta = el("textarea");
    msgEl = el("div", "sx-msg");
    body.append(list, msgEl);
    ta.rows = 1; ta.maxLength = 500; ta.placeholder = "메시지 (Enter 보내기 · Shift+Enter 줄바꿈)";
    const send = btn("보내기", "dark", async () => {
      const t = ta.value.trim();
      if (!t) return;
      ta.value = "";
      if ((await call("office_dm_send", { p_to: name, p_body: t })) === "ok") load(); else ta.value = t;
    });
    ta.onkeydown = (e) => { if (e.key === "Enter" && !e.shiftKey && !e.isComposing) { e.preventDefault(); send.click(); } };
    foot.append(ta, send);
    card.append(foot);
    const me = ctx.me().char;
    async function load() {
      const rows = await rpcRows("office_dm_thread", { p_with: name, p_after: view?.last || 0 });
      if (my !== seq || !rows) return;
      if (!view.last && !rows.length) list.replaceChildren(el("div", "sx-empty", `${name} 님에게 첫 메시지를 보내 보세요`));
      if (!rows.length) return;
      if (!view.last) list.replaceChildren();
      const atEnd = body.scrollHeight - body.scrollTop - body.clientHeight < 60;
      for (const r of rows) {
        const day = when(r.created_at).replace(/ 오[전후].*$/, "");
        if (day !== view.day) { view.day = day; list.append(el("div", "sx-day", day)); }
        const m = el("div", "sx-m" + (r.from_char === me ? " me" : ""), r.body), t = el("time", null, when(r.created_at).replace(/^.* (오[전후])/, "$1"));
        t.dateTime = r.created_at;
        m.append(t);
        list.append(m);
        view.last = Math.max(view.last, +r.id);
      }
      if (atEnd || rows.length) body.scrollTop = body.scrollHeight;
      pollUnread();
    }
    view.reload = load;
    load();
    dmTimer = setInterval(() => { if (view?.kind === "dm" && view.name === name && !wrap.hidden && !document.hidden) load(); }, 4000);
    setTimeout(() => ta.focus(), 50);
  }
  // 위 단추(💬)의 빨간 숫자
  function setUnread(n) { hud.badge.hidden = !n; hud.badge.textContent = n > 99 ? "99+" : String(n); }
  async function pollUnread() {
    if (!ctx.me() || !ctx.sb()) return setUnread(0);
    const sb = ctx.sb(), me = ctx.me();
    try {
      const { data, error } = await sb.rpc("office_dm_inbox", { p_char: me.char, p_pin: me.pin });
      if (!error && data?.status === "ok") setUnread(data.rows.reduce((a, r) => a + (+r.unread || 0), 0));
    } catch {}
  }

  // ───────── 위쪽 단추: 📷 피드 · 💬 대화 (실시간 판에서만) ─────────
  const hud = {};
  if (ctx.live && ctx.hud) {
    hud.feed = el("button", "sx-hb");
    hud.feed.innerHTML = '<span class="ico">📷</span><span class="lbl"> 피드</span>';
    hud.feed.title = "모두의 피드";
    hud.feedBadge = el("span", "sx-badge");
    hud.feedBadge.hidden = true;
    hud.feed.append(hud.feedBadge);
    hud.feed.type = "button";
    hud.feed.onclick = () => { listen(); openFeed(); };
    hud.dm = el("button", "sx-hb");
    hud.dm.innerHTML = '<span class="ico">💬</span><span class="lbl"> 대화</span>'; // 휴대폰은 아이콘만
    hud.dm.title = "1:1 대화";
    hud.badge = el("span", "sx-badge");
    hud.badge.hidden = true;
    hud.dm.append(hud.badge);
    hud.dm.type = "button";
    hud.dm.onclick = () => { listen(); openInbox(); };
    ctx.hud.append(hud.feed, hud.dm);
  } else hud.badge = el("span");

  // ───────── 간식 신청 ─────────
  function openSnacks() { view = { kind: "snacks" }; show(); renderSnacks(); }
  function renderSnacks() {
    const my = ++seq, ic = el("div", "em", "🍪");
    card.replaceChildren(header(ic, "간식 신청", "먹고 싶은 간식이나 구매 링크를 남겨 주세요. 모아서 한 번에 사요"));
    const body = el("div", "sx-body");
    card.append(body);
    if (gate(body, "간식 신청")) {
      const c = el("div", "sx-compose"), item = el("input"), link = el("input");
      item.type = "text"; item.maxLength = 60; item.placeholder = "간식 이름 (예: 허니버터칩 2봉)";
      link.type = "text"; link.maxLength = 500; link.placeholder = "구매 링크 (있으면) https://…"; link.inputMode = "url";
      const row = el("div", "sx-row");
      msgEl = el("span", "sx-msg");
      const add = async () => {
        const it = item.value.trim(), ln = link.value.trim();
        if (!it) return say("간식 이름을 써 주세요", true);
        if (ln && !/^https?:\/\/\S+$/i.test(ln)) return say(MSG.bad_link, true);
        if ((await call("office_snack_add", { p_item: it, p_link: ln })) === "ok") { item.value = ""; link.value = ""; say("올렸어요"); load(); }
      };
      item.onkeydown = link.onkeydown = (e) => { if (e.key === "Enter" && !e.isComposing) add(); };
      row.append(msgEl, el("span", "sp"), btn("올리기", "dark", add));
      c.append(item, link, row);
      body.append(c);
    } else { msgEl = el("div", "sx-msg"); body.append(msgEl); }
    const bar = el("div", "sx-row"), count = el("span", "sx-hint");
    bar.style.marginBottom = "8px";
    const list = el("ol", "sx-list");
    let rows = [];
    bar.append(count, el("span", "sp"), btn("목록 복사", "", async () => {
      if (!rows.length) return say("아직 신청한 간식이 없어요", true);
      const text = rows.map((r, i) => `${i + 1}. ${r.item}${r.link ? " — " + r.link : ""} (${r.who})`).join("\n");
      try { // 클립보드가 응답 없이 멈추는 브라우저도 있어서 1.5초 넘으면 옛 방식으로
        await Promise.race([navigator.clipboard.writeText(text), new Promise((_, no) => setTimeout(() => no(new Error("timeout")), 1500))]);
        say(`${rows.length}개를 복사했어요 — 메신저·메모에 붙여 넣으세요`);
      } catch {
        const ta = el("textarea"); ta.value = text; ta.style.cssText = "position:fixed;opacity:0"; document.body.append(ta); ta.select();
        const ok = document.execCommand("copy"); ta.remove();
        say(ok ? `${rows.length}개를 복사했어요` : "복사하지 못했어요", !ok);
      }
    }));
    const admin = ctx.me()?.char === ctx.snackAdmin;
    if (admin) bar.append(delBtnLike("다 샀어요 (목록 비우기)", async () => { if ((await call("office_snack_clear", {})) === "ok") { say("목록을 비웠어요"); load(); } }));
    if (ctx.live) body.append(bar);
    body.append(list);
    async function load() {
      if (!ctx.live) return;
      const sb = ctx.sb();
      if (!sb) { list.replaceChildren(el("li", "sx-empty", "불러오는 중…")); return; }
      try {
        rows = await fetchRows(sb.from("office_snacks").select("id,who,item,link,created_at").order("created_at", { ascending: true }).limit(300));
        if (my !== seq) return;
        count.textContent = `${rows.length}개 신청`;
        const me = ctx.me()?.char;
        list.replaceChildren(...(rows.length ? rows.map((r, i) => {
          const li = el("li", "sx-snack"), c = el("div", "c"), meta = el("div", "sx-meta"), t = el("time", null, when(r.created_at));
          t.dateTime = r.created_at;
          c.append(el("div", "it", r.item));
          const url = safeUrl(r.link);
          if (url) { const a = el("a", null, url.hostname.replace(/^www\./, "") + " 에서 보기 ↗"); a.href = url.href; a.target = "_blank"; a.rel = "noopener noreferrer"; c.append(a); }
          meta.append(el("b", null, r.who), t, el("span", "sp"));
          if (me && (me === r.who || me === ctx.snackAdmin)) meta.append(delBtn(async () => { if ((await call("office_snack_delete", { p_id: r.id })) === "ok") load(); }));
          c.append(meta);
          li.append(el("span", "n", `${i + 1}.`), c);
          return li;
        }) : [el("li", "sx-empty", "아직 신청한 간식이 없어요")]));
      } catch (e) {
        console.error(e);
        if (my === seq) list.replaceChildren(el("li", "sx-empty", missing(e) ? NOT_READY : "목록을 불러오지 못했어요"));
      }
    }
    view.reload = load;
    load();
  }
  function delBtnLike(text, onOk) { // 목록 비우기: 두 번 눌러야
    const b = btn(text, "", () => {});
    let t = 0;
    b.onclick = () => {
      if (!b.dataset.arm) { b.dataset.arm = 1; b.textContent = "한 번 더 누르면 비워요"; clearTimeout(t); t = setTimeout(() => { delete b.dataset.arm; b.textContent = text; }, 3000); return; }
      clearTimeout(t); delete b.dataset.arm; b.textContent = text; onOk();
    };
    return b;
  }
  function safeUrl(s) { try { const u = new URL(s); return /^https?:$/.test(u.protocol) ? u : null; } catch { return null; } }

  // 다른 사람이 쓰면 열려 있는 창을 새로 (방명록·간식만 — 육아일기는 사진이 커서 열 때 읽는다)
  let live = null;
  function listen() {
    const sb = ctx.sb();
    if (live || !sb) return;
    live = sb.channel("office-social");
    const poke = (kind) => () => { if (view && view.reload && (kind === "snacks" ? view.kind === "snacks" : view.kind === "person" && view.tab === "notes")) clearTimeout(listen.t), (listen.t = setTimeout(() => view?.reload?.(), 300)); };
    live.on("postgres_changes", { event: "*", schema: "public", table: "office_notes" }, poke("notes"))
      .on("postgres_changes", { event: "*", schema: "public", table: "office_snacks" }, poke("snacks"))
      .on("postgres_changes", { event: "*", schema: "public", table: "office_diary_likes" }, () => { if (view?.kind === "feed" || (view?.kind === "person" && view.tab === "diary")) { clearTimeout(listen.c); listen.c = setTimeout(() => view?.reloadCmts?.(), 300); } })
      .on("postgres_changes", { event: "*", schema: "public", table: "office_diary_comments" }, () => { if (view?.kind === "feed" || (view?.kind === "person" && view.tab === "diary")) { clearTimeout(listen.c); listen.c = setTimeout(() => view?.reloadCmts?.(), 300); } })
      .on("postgres_changes", { event: "*", schema: "public", table: "office_hearts" }, () => { clearTimeout(listen.h); listen.h = setTimeout(async () => { await loadHearts(); if (view?.kind === "person") renderPerson(); }, 300); })
      .subscribe();
    loadHearts();
    pollFeed();
    setInterval(() => { if (!document.hidden) pollFeed(); }, ctx.test ? 8000 : 30000);
  }

  return {
    openPerson(name, tab) { listen(); openPerson(name, tab); },
    openSnacks() { listen(); openSnacks(); },
    openInbox() { listen(); openInbox(); },
    openThread(name) { listen(); openThread(name); },
    openFeed() { listen(); openFeed(); },
    feedNew,
    heartCount: (name) => hearts.get(name) || 0,
    isBday,
    get open() { return !wrap.hidden; },
    sync() { // 로그인·사람 바꾸기·저장소 준비가 되면 열린 창을 다시 그리고, 하트·안 읽은 대화를 다시 센다
      listen();
      const me = ctx.me()?.char || null, key = `${me}|${!!ctx.sb()}`;
      if (key === sync.key) return;
      const prev = sync.me;
      sync.key = key; sync.me = me;
      if (prev !== me) { loadSeen(); setFeedBadge(); ctx.onChange?.(); } // 사람이 바뀌면 그 사람이 본 글 기준으로
      clearInterval(unreadTimer);
      if (me) { unreadTimer = setInterval(() => { if (!document.hidden) pollUnread(); }, 20000); pollUnread(); } else setUnread(0);
      loadHearts();
      if (!view || busy) return;
      if (prev === me) return view.reload?.(); // 저장소만 막 준비됨
      // 대화방에서 상대로 바뀌면(테스트 판) 방금까지의 나와 이어서
      const dm = () => (view.name === me ? (prev ? openThread(prev) : openInbox()) : openThread(view.name));
      ({ snacks: renderSnacks, inbox: renderInbox, dm, feed: renderFeedView }[view.kind] || renderPerson)();
    },
  };
  function sync() {}
};
