// 오늘의 뉴스 TV — 출입문 오른쪽 벽걸이 TV (윗선 = 문틀 윗선)
// 게임·AI·IT·연예·만화/애니 뉴스 제목을 8초마다 넘기고, 아래 「이 시각」 자막은 계속 흐른다. TV 를 누르면 뉴스 목록 → 제목을 누르면 원래 기사(새 창)
// 뉴스는 GitHub 자동 작업이 20분마다 모아 두는 news.json 하나만 읽는다 (gh-three/.github/team-news/fetch_news.py) — 기사 본문·사진은 안 씀
(function () {
  const NEWS_URL = "https://raw.githubusercontent.com/sukyonghyun-sudo/three/team-news/news.json";
  const CACHE_KEY = "teamOfficeNews";
  const CATS = ["게임", "AI", "IT", "연예", "만화·애니"];
  const COLOR = { 게임: "#4cd98a", AI: "#b79cff", IT: "#6cb6ff", 연예: "#ff8fbf", "만화·애니": "#ffb35c" };
  const PAGE_SEC = 8, CRAWL_PX_PER_SEC = 90;
  const FONT = '"Pretendard","Apple SD Gothic Neo","Malgun Gothic","Noto Sans KR",sans-serif';

  const css = document.createElement("style");
  css.textContent = `
  .tvn-wrap{position:fixed;inset:0;z-index:44;background:rgba(0,0,0,.28);display:flex;align-items:center;justify-content:center;padding:20px}
  .tvn-wrap[hidden]{display:none}
  .tvn-card{width:min(600px,100%);max-height:min(760px,100%);display:flex;flex-direction:column;background:#f2f2f7;border-radius:16px;box-shadow:0 24px 64px rgba(0,0,0,.28);overflow:hidden;font-family:${FONT}}
  .tvn-head{display:flex;align-items:center;gap:12px;padding:14px 16px;background:#fff;border-bottom:.5px solid rgba(60,60,67,.18)}
  .tvn-head .em{width:38px;height:38px;border-radius:10px;background:#13335c;color:#fff;display:flex;align-items:center;justify-content:center;font-size:19px;flex:none}
  .tvn-head b{display:block;font-size:17px;letter-spacing:-.01em;color:#1c1c1e}
  .tvn-head span{display:block;font-size:12.5px;color:#8e8e93;margin-top:2px}
  .tvn-x{margin-left:auto;width:30px;height:30px;border:0;border-radius:50%;background:rgba(118,118,128,.12);font-size:20px;line-height:30px;color:#8e8e93;cursor:pointer;padding:0;flex:none}
  .tvn-tabs{display:flex;gap:6px;padding:10px 16px 4px;overflow-x:auto;scrollbar-width:none;flex:none}
  .tvn-tabs::-webkit-scrollbar{display:none}
  .tvn-tabs button{flex:none;border:0;border-radius:999px;padding:6px 12px;font:inherit;font-size:13px;font-weight:600;background:rgba(118,118,128,.12);color:#3a3a3c;cursor:pointer}
  .tvn-tabs button.on{background:#1c1c1e;color:#fff}
  .tvn-list{list-style:none;margin:8px 12px 12px;padding:0;background:#fff;border-radius:12px;overflow:auto;flex:1;min-height:0}
  .tvn-list li{border-bottom:.5px solid rgba(60,60,67,.13)}
  .tvn-list li:last-child{border-bottom:0}
  .tvn-list a{display:flex;gap:10px;align-items:flex-start;padding:11px 12px;text-decoration:none;color:#1c1c1e}
  .tvn-list a:active,.tvn-list a:hover{background:#f7f7fa}
  .tvn-list i{flex:none;font-style:normal;font-size:11.5px;font-weight:700;color:#101828;border-radius:999px;padding:3px 8px;margin-top:1px}
  .tvn-list b{display:block;font-size:14.5px;font-weight:600;line-height:1.4;word-break:keep-all;overflow-wrap:anywhere}
  .tvn-list small{display:block;font-size:12px;color:#8e8e93;margin-top:3px}
  .tvn-empty{padding:28px 12px;text-align:center;color:#8e8e93;font-size:13.5px}
  .tvn-foot{padding:0 16px 12px;font-size:11.5px;color:#8e8e93;flex:none}
  @media (max-width:820px),(max-height:520px){.tvn-wrap{align-items:flex-end;padding:0}.tvn-card{width:100%;max-height:88%;border-radius:16px 16px 0 0;padding-bottom:env(safe-area-inset-bottom)}}
  @media (max-height:520px) and (orientation:landscape){.tvn-card{width:min(640px,100%);max-height:100%}.tvn-head{padding:10px 14px}.tvn-foot{display:none}} /* 휴대폰 가로: 목록이 두세 줄만 보이지 않게 위아래로 꽉 */
  @media (pointer:coarse){.tvn-list a{padding:13px 12px}}`;
  document.head.append(css);

  const ago = (ts) => {
    const m = Math.max(0, Math.round((Date.now() / 1000 - ts) / 60));
    return m < 1 ? "방금" : m < 60 ? `${m}분 전` : m < 1440 ? `${Math.floor(m / 60)}시간 전` : `${Math.floor(m / 1440)}일 전`;
  };
  const hhmm = (d) => `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;

  window.OfficeTV = (ctx) => {
    const { THREE, scene, camera, ROOM, DOOR } = ctx;
    const W = 1280, H = 720, CRAWL_H = 66, LABEL_W = 132, CRAWL_X = 150;
    let news = null, idx = 0, pageT = 0, lastMin = -1, dirty = true, visible = false, fontsOk = false;
    try { news = JSON.parse(localStorage.getItem(CACHE_KEY)) || null; } catch {}

    // ── 화면 그림 (1280×720) ──
    const cv = document.createElement("canvas");
    cv.width = W; cv.height = H;
    const g = cv.getContext("2d");
    const fit = (text, max, font) => { g.font = font; if (g.measureText(text).width <= max) return text; let t = text; while (t.length && g.measureText(t + "…").width > max) t = t.slice(0, -1); return t + "…"; };
    const wrap = (text, max, font, lines) => { // 띄어쓰기에서 줄을 바꾸고, 넘치면 마지막 줄 끝을 「…」
      g.font = font;
      const out = [], words = text.split(" ");
      let cur = "";
      for (let i = 0; i < words.length; i++) {
        const next = cur ? cur + " " + words[i] : words[i];
        if (g.measureText(next).width <= max || !cur) { cur = next; continue; }
        out.push(cur); cur = words[i];
        if (out.length === lines - 1) { cur = words.slice(i).join(" "); break; }
      }
      out.push(fit(cur, max, font));
      return out.slice(0, lines);
    };
    const rr = (x, y, w, h, r) => { g.beginPath(); if (g.roundRect) g.roundRect(x, y, w, h, r); else g.rect(x, y, w, h); };
    const items = () => news?.items || [];

    function draw() {
      dirty = false;
      const now = new Date();
      lastMin = now.getMinutes();
      const bg = g.createLinearGradient(0, 0, W, H);
      bg.addColorStop(0, "#0c1d38"); bg.addColorStop(1, "#13335c");
      g.fillStyle = bg; g.fillRect(0, 0, W, H);
      const glow = g.createRadialGradient(W * 0.85, -60, 10, W * 0.85, -60, 700);
      glow.addColorStop(0, "rgba(90,170,255,.28)"); glow.addColorStop(1, "rgba(90,170,255,0)");
      g.fillStyle = glow; g.fillRect(0, 0, W, H);
      g.textBaseline = "middle";
      // 위쪽 줄: 이름 · 분야 · 받은 시각 | 날씨 · 시계
      g.fillStyle = "#2fb38a"; rr(48, 34, 46, 46, 12); g.fill();
      g.fillStyle = "#fff"; g.font = `800 26px ${FONT}`; g.textAlign = "center"; g.fillText("뉴", 71, 58);
      g.textAlign = "left"; g.font = `800 32px ${FONT}`; g.fillText("오늘의 뉴스", 108, 58);
      const bw = g.measureText("오늘의 뉴스").width;
      g.font = `500 22px ${FONT}`; g.fillStyle = "#8fa8c8";
      g.fillText(`게임 · AI · IT · 연예 · 만화/애니${news?.at ? `   ${hhmm(new Date(news.at * 1000))} 기준` : ""}`, 108 + bw + 22, 60);
      g.textAlign = "right"; g.fillStyle = "#fff"; g.font = `700 40px ${FONT}`; g.fillText(hhmm(now), W - 48, 56);
      const cw = g.measureText(hhmm(now)).width, wx = ctx.weather?.();
      if (wx) { g.font = `600 24px ${FONT}`; g.fillStyle = "#cfe0f5"; g.fillText(`${wx.icon} 판교 ${wx.temp}°`, W - 48 - cw - 26, 58); }
      g.textAlign = "left";
      const list = items();
      if (!list.length) {
        g.fillStyle = "#cfe0f5"; g.font = `700 40px ${FONT}`; g.textAlign = "center";
        g.fillText(news === false ? "뉴스를 잠시 못 불러왔어요" : "뉴스를 불러오는 중이에요", W / 2, H / 2 - 10);
        g.font = `500 24px ${FONT}`; g.fillStyle = "#7f9cc2"; g.fillText("조금 뒤에 저절로 다시 받아요", W / 2, H / 2 + 44); g.textAlign = "left";
      } else {
        // 큰 기사 (제목이 한 줄이면 가운데로)
        const m = list[idx % list.length];
        const lines = wrap(m.t, W - 96, `800 60px ${FONT}`, 2), oy = lines.length === 1 ? 40 : 0;
        g.font = `700 24px ${FONT}`;
        const tw = g.measureText(m.c).width + 32;
        g.fillStyle = COLOR[m.c] || "#ffb020"; rr(48, 128 + oy, tw, 42, 21); g.fill();
        g.fillStyle = "#101828"; g.fillText(m.c, 64, 150 + oy);
        g.fillStyle = "#fff"; g.font = `800 60px ${FONT}`;
        lines.forEach((l, i) => g.fillText(l, 48, 228 + oy + i * 78));
        g.font = `500 26px ${FONT}`; g.fillStyle = "#9fb6d3";
        g.fillText(`${m.s} · ${ago(m.ts)}`, 48, 228 + oy + lines.length * 78 + 8);
        // 다음 기사 3개
        const y0 = 448;
        g.fillStyle = "rgba(255,255,255,.12)"; g.fillRect(48, y0 - 26, W - 96, 2);
        g.font = `700 22px ${FONT}`; g.fillStyle = "#7f9cc2"; g.fillText("다음 뉴스", 48, y0 + 8);
        g.textAlign = "right"; g.fillText(`${(idx % list.length) + 1} / ${list.length}`, W - 48, y0 + 8); g.textAlign = "left";
        for (let i = 1; i <= Math.min(3, list.length - 1); i++) {
          const it = list[(idx + i) % list.length], y = y0 + 8 + i * 50;
          g.font = `700 20px ${FONT}`;
          const cw2 = Math.max(56, g.measureText(it.c).width + 24);
          g.fillStyle = COLOR[it.c] || "#cfe0f5"; rr(48, y - 17, cw2, 34, 17); g.fill();
          g.fillStyle = "#101828"; g.textAlign = "center"; g.fillText(it.c, 48 + cw2 / 2, y + 1); g.textAlign = "left";
          g.font = `500 21px ${FONT}`;
          const meta = `${it.s} · ${ago(it.ts)}`, mw = g.measureText(meta).width;
          g.fillStyle = "#7f9cc2"; g.textAlign = "right"; g.fillText(meta, W - 48, y + 1); g.textAlign = "left";
          g.fillStyle = "#e8f0fa"; g.fillText(fit(it.t, W - 96 - cw2 - 18 - mw - 28, `600 29px ${FONT}`), 48 + cw2 + 16, y + 1);
        }
      }
      // 아래 자막 칸 (흐르는 글씨는 따로 띄운 띠 — 매 프레임 그림을 다시 올리지 않게)
      g.fillStyle = "#06101f"; g.fillRect(0, H - CRAWL_H, W, CRAWL_H);
      g.fillStyle = "#e5322d"; g.fillRect(0, H - CRAWL_H, LABEL_W, CRAWL_H);
      g.fillStyle = "#fff"; g.font = `800 28px ${FONT}`; g.textAlign = "center"; g.fillText("이 시각", LABEL_W / 2, H - CRAWL_H / 2); g.textAlign = "left";
      tex.needsUpdate = true;
    }

    // ── 흐르는 자막 띠 ──
    const cc = document.createElement("canvas");
    cc.width = 1024; cc.height = CRAWL_H;
    const cg = cc.getContext("2d");
    const crawlW = W - CRAWL_X;
    function drawCrawl() {
      const list = items();
      const pick = [];
      for (const c of CATS) { const it = list.find((x) => x.c === c && !pick.includes(x)); if (it) pick.push(it); } // 분야마다 가장 새 기사 하나씩
      const text = pick.length ? pick.map((x) => `[${x.c}] ${x.t}`).join("      ·      ") + "      ·      " : "오늘의 뉴스      ·      ";
      cg.font = `600 28px ${FONT}`;
      const tw = Math.min(4096, Math.ceil(cg.measureText(text).width));
      cc.width = Math.max(crawlW, tw); // 크기를 바꾸면 그림이 지워진다 → 다시 칠한다
      cg.fillStyle = "#06101f"; cg.fillRect(0, 0, cc.width, CRAWL_H);
      cg.font = `600 28px ${FONT}`; cg.fillStyle = "#fff"; cg.textBaseline = "middle";
      cg.fillText(text, 0, CRAWL_H / 2);
      crawlTex.dispose(); // 크기가 바뀐 그림은 새로 올려야 한다
      crawlTex.image = cc;
      crawlTex.repeat.x = crawlW / cc.width;
      crawlTex.needsUpdate = true;
    }

    // ── TV 몸체 ──
    const sw = 1.5, sh = (sw * 9) / 16, bz = 0.045, k = sw / W;
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = Math.min(8, ctx.renderer?.capabilities.getMaxAnisotropy?.() || 4);
    const crawlTex = new THREE.CanvasTexture(cc);
    crawlTex.colorSpace = THREE.SRGBColorSpace;
    crawlTex.wrapS = THREE.RepeatWrapping;
    crawlTex.anisotropy = tex.anisotropy; // 위 화면과 같은 거름 (밉맵을 끄면 자막만 각지고 뚜렷해 보였음)
    const grp = new THREE.Group();
    grp.name = "newsTV";
    const body = new THREE.Mesh(new THREE.BoxGeometry(sw + 0.06, sh + 0.06, bz), new THREE.MeshStandardMaterial({ color: "#16181c", roughness: 0.35, metalness: 0.3 }));
    // 화면 글씨: 줄여 보일 때 한 단계 덜 줄인 그림을 써서 조금 더 선명하게 (밉맵을 끄면 획이 끊기고 움직일 때 반짝임)
    const sharp = (m) => {
      m.onBeforeCompile = (s) => { s.fragmentShader = s.fragmentShader.replace("#include <map_fragment>", THREE.ShaderChunk.map_fragment.replace("texture2D( map, vMapUv )", "texture2D( map, vMapUv, -1.0 )")); };
      m.customProgramCacheKey = () => "tvSharp";
      return m;
    };
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(sw, sh), sharp(new THREE.MeshBasicMaterial({ map: tex, toneMapped: false })));
    screen.position.z = bz / 2 + 0.002;
    const crawl = new THREE.Mesh(new THREE.PlaneGeometry(crawlW * k, CRAWL_H * k), sharp(new THREE.MeshBasicMaterial({ map: crawlTex, toneMapped: false })));
    crawl.position.set((CRAWL_X + crawlW / 2 - W / 2) * k, -(H / 2 - CRAWL_H / 2) * k, bz / 2 + 0.003);
    const led = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.008, 0.004), new THREE.MeshBasicMaterial({ color: "#3aff9a" }));
    led.position.set(sw / 2 - 0.05, -sh / 2 - 0.018, bz / 2 + 0.001);
    grp.add(body, screen, crawl, led);
    // 왼쪽 벽 안쪽 면에 붙이고, 윗선은 문틀 윗선(문 높이 + 문틀 7cm)에 맞춘다 · 문에서 65cm 띄움
    const topY = DOOR.h + 0.07, bodyW = sw + 0.06, bodyH = sh + 0.06;
    grp.position.set(ROOM.x0 + bz / 2 + 0.004, topY - bodyH / 2, DOOR.z - DOOR.w / 2 - 0.07 - 0.65 - bodyW / 2);
    grp.rotation.y = Math.PI / 2;
    scene.add(grp);
    grp.updateMatrixWorld(true);
    grp.traverse((o) => { o.matrixAutoUpdate = false; });
    const box = new THREE.Box3().setFromObject(grp), frustum = new THREE.Frustum(), pv = new THREE.Matrix4();

    // ── 뉴스 받기 (20분마다 새로 모이니 10분마다 확인 · 못 받으면 30초 → 1분 → … 5분 간격으로 다시) ──
    let retryMs = 30e3, retryT = 0;
    async function load() {
      clearTimeout(retryT);
      try {
        const r = await fetch(NEWS_URL, { cache: "no-cache" });
        if (!r.ok) throw new Error(r.status);
        const d = await r.json();
        if (!Array.isArray(d?.items) || !d.items.length) throw new Error("empty");
        const changed = d.at !== news?.at;
        news = d;
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(d)); } catch {}
        if (changed) { idx = 0; pageT = 0; drawCrawl(); dirty = true; if (!wrapEl.hidden) renderList(); }
        retryMs = 30e3;
      } catch (e) {
        console.warn("news", e);
        if (!items().length) { news = false; dirty = true; }
        retryT = setTimeout(load, retryMs);
        retryMs = Math.min(retryMs * 2, 5 * 60e3);
      }
    }
    if (document.fonts?.ready) document.fonts.ready.then(() => { fontsOk = true; drawCrawl(); dirty = true; });
    drawCrawl();
    draw();
    load();
    setInterval(load, 10 * 60e3);

    // ── 뉴스 목록 창 ──
    const wrapEl = document.createElement("div");
    wrapEl.className = "tvn-wrap"; wrapEl.hidden = true;
    wrapEl.innerHTML = `<div class="tvn-card" role="dialog" aria-label="오늘의 뉴스"><div class="tvn-head"><div class="em">📺</div><div><b>오늘의 뉴스</b><span></span></div><button class="tvn-x" type="button" aria-label="닫기">×</button></div><div class="tvn-tabs"></div><ul class="tvn-list"></ul><div class="tvn-foot">제목을 누르면 원래 기사가 새 창으로 열려요 · 기사 내용은 각 언론사 것</div></div>`;
    document.body.append(wrapEl);
    const tabsEl = wrapEl.querySelector(".tvn-tabs"), listEl = wrapEl.querySelector(".tvn-list"), subEl = wrapEl.querySelector(".tvn-head span");
    let tab = "전체", pushed = false;
    function renderList() {
      subEl.textContent = news?.at ? `${hhmm(new Date(news.at * 1000))} 기준 · 20분마다 새로` : "불러오는 중";
      tabsEl.replaceChildren(...["전체", ...CATS].map((c) => {
        const b = document.createElement("button");
        b.type = "button"; b.textContent = c; b.className = c === tab ? "on" : "";
        b.onclick = () => { tab = c; renderList(); listEl.scrollTop = 0; };
        return b;
      }));
      const list = items().filter((x) => tab === "전체" || x.c === tab);
      if (!list.length) { const li = document.createElement("li"); li.className = "tvn-empty"; li.textContent = items().length ? "지금은 이 분야 기사가 없어요" : "뉴스를 불러오는 중이에요"; listEl.replaceChildren(li); return; }
      listEl.replaceChildren(...list.map((x) => {
        const li = document.createElement("li"), a = document.createElement("a"), i = document.createElement("i"), w = document.createElement("div"), b = document.createElement("b"), s = document.createElement("small");
        a.href = x.u; a.target = "_blank"; a.rel = "noopener noreferrer";
        i.textContent = x.c; i.style.background = COLOR[x.c] || "#e5e5ea";
        b.textContent = x.t; s.textContent = `${x.s} · ${ago(x.ts)}`;
        w.append(b, s); a.append(i, w); li.append(a);
        return li;
      }));
    }
    function open() {
      tab = "전체"; renderList(); wrapEl.hidden = false; listEl.scrollTop = 0;
      if (!pushed) { history.pushState({ tvNews: 1 }, ""); pushed = true; } // 휴대폰 뒤로가기로 닫기
    }
    function close(fromBack = false) {
      if (wrapEl.hidden) return;
      wrapEl.hidden = true;
      if (pushed) { pushed = false; if (!fromBack) history.back(); }
    }
    wrapEl.querySelector(".tvn-x").onclick = () => close();
    wrapEl.addEventListener("click", (e) => { if (e.target === wrapEl) close(); });
    addEventListener("keydown", (e) => { if (e.key === "Escape" && !wrapEl.hidden) close(); });
    addEventListener("popstate", (e) => { if (pushed && !e.state?.tvNews && !wrapEl.hidden) { pushed = false; close(true); } });

    // ── 매 프레임: 보일 때만 흐르게 · 8초마다 다음 기사 · 분이 바뀌면 시계 ──
    function tick(dt) {
      pv.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
      frustum.setFromProjectionMatrix(pv);
      visible = frustum.intersectsBox(box);
      if (document.hidden) return;
      const list = items();
      pageT += dt;
      if (pageT >= PAGE_SEC && list.length) { pageT = 0; idx = (idx + 1) % list.length; dirty = true; }
      if (new Date().getMinutes() !== lastMin) dirty = true;
      if (!visible) return;
      crawlTex.offset.x = (crawlTex.offset.x + (CRAWL_PX_PER_SEC * dt) / cc.width) % 1;
      if (dirty) draw();
    }
    const hit = (ray) => ray.intersectObject(grp, true).length > 0;
    const api = { tick, hit, open, close, isOpen: () => !wrapEl.hidden, group: grp, redraw: draw, state: () => ({ news, idx, visible, fontsOk, items: items().length }), next: () => { pageT = PAGE_SEC; }, reload: load };
    window.__tv = api; // 점검용
    return api;
  };
})();
