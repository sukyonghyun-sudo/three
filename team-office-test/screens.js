// 사무실 모니터 화면 그림 — 바탕화면·엑셀·메신저·영상·애니·코드·웹·발표자료·게임을 캔버스에 코드로 그린다.
// 일반 <script> 로 읽는다 (파일로 열어도 되게). index.html 이 모니터 한 대마다 무엇을 띄울지 무작위로 고르고 이걸로 그린다.
//   ScreenArt.draw(종류, ctx, 폭, 높이, 씨앗, 시간초)   · ScreenArt.pick() → 무작위 종류   · ScreenArt.ANIM.has(종류) → 움직이는 화면
window.ScreenArt = (() => {
  const FONT = "'Malgun Gothic','Apple SD Gothic Neo',sans-serif";
  // 종류별 나오는 비율
  const KINDS = { desktop: 1.1, excel: 1.6, chat: 1.6, video: 1.2, anime: 1.0, code: 1.2, web: 1.0, slides: 0.7, game: 0.7 };
  const ANIM = new Set(["video", "anime", "game", "soccer", "dokdo", "cat", "banana"]); // 뒤 넷은 사람마다 정해 둔 화면 (무작위로는 안 나온다)
  const total = Object.values(KINDS).reduce((a, b) => a + b, 0);
  function pick() {
    let r = Math.random() * total;
    for (const [k, w] of Object.entries(KINDS)) if ((r -= w) <= 0) return k;
    return "excel";
  }
  // 씨앗 하나로 늘 같은 배치가 나오는 난수
  function rng(seed) {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const rr = (g, x, y, w, h, r, fill) => { g.fillStyle = fill; g.beginPath(); g.roundRect(x, y, w, h, r); g.fill(); };
  const text = (g, s, x, y, size, color, weight = 400, align = "left") => {
    g.font = `${weight} ${size}px ${FONT}`; g.fillStyle = color; g.textAlign = align; g.textBaseline = "middle"; g.fillText(s, x, y);
  };
  // 글자 대신 회색 막대 몇 줄 (작은 화면에선 글처럼 보인다)
  function lines(g, R, x, y, w, n, gap, color, h = 3) {
    for (let i = 0; i < n; i++) rr(g, x, y + i * gap, w * (0.45 + R() * 0.55), h, 1.5, color);
  }
  const PALETTE = ["#e8655a", "#f2a541", "#f5d547", "#5cc28a", "#4aa3df", "#7d6bd6", "#e46aa6", "#3fb8b0"];

  const D = {};
  D.off = (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, w, h);
    gr.addColorStop(0, "#1b1f26"); gr.addColorStop(0.55, "#0f1216"); gr.addColorStop(1, "#191d23");
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
  };

  // 윈도우 바탕화면
  D.desktop = (g, w, h, R) => {
    const hue = [212, 262, 192, 330, 160, 28][Math.floor(R() * 6)];
    const gr = g.createLinearGradient(0, 0, w, h);
    gr.addColorStop(0, `hsl(${hue},70%,18%)`); gr.addColorStop(1, `hsl(${hue + 25},75%,52%)`);
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 6; i++) { // 꽃잎처럼 겹친 빛 무늬
      g.fillStyle = `hsla(${hue + i * 10},90%,${62 + i * 4}%,0.22)`;
      g.beginPath(); g.ellipse(w * 0.62, h * 0.48, 62 - i * 8, 20 + i * 4, -0.5 + i * 0.35, 0, Math.PI * 2); g.fill();
    }
    const icons = ["#f6c343", "#3d8be3", "#eef1f5", "#33b26b", "#e2574c"];
    for (let i = 0; i < 4 + Math.floor(R() * 2); i++) {
      rr(g, 9, 8 + i * 24, 14, 12, 2, icons[(i + Math.floor(R() * 5)) % 5]);
      rr(g, 7, 22 + i * 24, 18, 2, 1, "rgba(255,255,255,.75)");
    }
    g.fillStyle = "rgba(238,242,248,.9)"; g.fillRect(0, h - 15, w, 15);
    const n = 6, x0 = w / 2 - n * 8;
    for (let i = 0; i < n; i++) rr(g, x0 + i * 16, h - 12, 10, 9, 2, i === 0 ? "#2b78d6" : PALETTE[(i * 3) % 8]);
    text(g, `오후 ${1 + Math.floor(R() * 5)}:${String(Math.floor(R() * 60)).padStart(2, "0")}`, w - 6, h - 7.5, 8, "#333", 400, "right");
  };

  // 엑셀 같은 표
  D.excel = (g, w, h, R) => {
    g.fillStyle = "#fff"; g.fillRect(0, 0, w, h);
    g.fillStyle = "#1f7246"; g.fillRect(0, 0, w, 12);
    text(g, ["주간_업무정리.xlsx", "매출_분석_10월.xlsx", "이벤트_보상표.xlsx", "QA_체크리스트.xlsx"][Math.floor(R() * 4)], 6, 6.5, 7, "#fff", 600);
    g.fillStyle = "#f3f4f5"; g.fillRect(0, 12, w, 15);
    for (let i = 0; i < 14; i++) rr(g, 6 + i * 13, 15, 9, 9, 1.5, i % 4 === 0 ? "#2f7d4f" : "#c5c9ce");
    g.fillStyle = "#fff"; g.fillRect(0, 27, w, 8);
    g.strokeStyle = "#d6d9dd"; g.lineWidth = 1; g.strokeRect(22, 28, w - 26, 6);
    const top = 36, cw = 26, ch = 9, cols = Math.ceil(w / cw), rows = Math.ceil((h - top - 10) / ch);
    g.fillStyle = "#eef0f2"; g.fillRect(0, top, w, ch); g.fillRect(0, top, 14, h - top);
    g.strokeStyle = "#e1e4e8";
    for (let c = 0; c <= cols; c++) { g.beginPath(); g.moveTo(14 + c * cw + 0.5, top); g.lineTo(14 + c * cw + 0.5, h - 10); g.stroke(); }
    for (let r = 0; r <= rows; r++) { g.beginPath(); g.moveTo(0, top + r * ch + 0.5); g.lineTo(w, top + r * ch + 0.5); g.stroke(); }
    for (let c = 0; c < cols; c++) text(g, String.fromCharCode(65 + c), 14 + c * cw + cw / 2, top + ch / 2, 6, "#666", 400, "center");
    const hl = ["#fff2b3", "#d9f2e2", "#fde0dc", "#dce9fb"][Math.floor(R() * 4)];
    for (let r = 1; r < rows; r++) {
      text(g, String(r), 7, top + r * ch + ch / 2, 5.5, "#888", 400, "center");
      for (let c = 0; c < Math.min(cols, 7); c++) {
        const x = 14 + c * cw, y = top + r * ch;
        if (r === 1) { g.fillStyle = "#e7efe9"; g.fillRect(x + 1, y + 1, cw - 1, ch - 1); rr(g, x + 3, y + 3, cw * 0.6, 3, 1, "#2f5e43"); continue; }
        if (R() < 0.12) { g.fillStyle = hl; g.fillRect(x + 1, y + 1, cw - 1, ch - 1); }
        if (R() < 0.8) text(g, c === 0 ? "▪▪▪" : String(Math.floor(R() * 9000 + 100)), x + cw - 3, y + ch / 2, 5.5, c === 0 ? "#444" : "#222", 400, "right");
      }
    }
    if (R() < 0.55) { // 막대그래프
      const bx = w * 0.56, by = top + 18, bw = w * 0.4, bh = h * 0.42;
      g.fillStyle = "#fff"; g.fillRect(bx, by, bw, bh); g.strokeStyle = "#c8ccd1"; g.strokeRect(bx + 0.5, by + 0.5, bw, bh);
      const col = PALETTE[Math.floor(R() * 8)];
      for (let i = 0; i < 6; i++) { const v = 0.2 + R() * 0.75; rr(g, bx + 8 + i * (bw - 14) / 6, by + bh - 6 - v * (bh - 14), (bw - 14) / 6 - 4, v * (bh - 14), 1, col); }
    }
    g.fillStyle = "#f3f4f5"; g.fillRect(0, h - 10, w, 10);
    rr(g, 18, h - 9, 28, 8, 1, "#fff"); g.fillStyle = "#1f7246"; g.fillRect(18, h - 2, 28, 2);
    rr(g, 48, h - 9, 28, 8, 1, "#e6e8ea");
  };

  // 사내 메신저 (왼쪽 채널 목록 + 대화)
  D.chat = (g, w, h, R) => {
    const side = Math.round(w * 0.28);
    g.fillStyle = "#3f1240"; g.fillRect(0, 0, side, h);
    g.fillStyle = "#350d36"; g.fillRect(0, 0, side, 14);
    text(g, "메이플W", 5, 7, 7, "#fff", 700);
    const chans = ["일반", "메이플-기획", "업데이트", "잡담", "점심", "qa-버그", "디자인"];
    for (let i = 0; i < 7; i++) {
      const y = 22 + i * 11, on = i === 1 + Math.floor(R() * 3);
      if (on) { g.fillStyle = "#1164a3"; g.fillRect(0, y - 5, side, 10); }
      text(g, "# " + chans[i], 6, y, 6.5, on ? "#fff" : "rgba(255,255,255,.72)", on ? 700 : 400);
    }
    g.fillStyle = "#fff"; g.fillRect(side, 0, w - side, h);
    g.fillStyle = "#f6f6f6"; g.fillRect(side, 0, w - side, 14);
    text(g, "# " + chans[1 + Math.floor(R() * 3)], side + 6, 7, 7, "#1d1c1d", 700);
    let y = 20;
    for (let i = 0; i < 4; i++) {
      rr(g, side + 6, y, 11, 11, 2.5, PALETTE[Math.floor(R() * 8)]);
      rr(g, side + 21, y + 1, 18 + R() * 14, 3.5, 1.5, "#1d1c1d");
      lines(g, R, side + 21, y + 7, w - side - 30, 1 + Math.floor(R() * 2), 6, "#9a9a9a");
      y += 26;
      if (i === 1 && R() < 0.4) { rr(g, side + 21, y - 8, 46, 22, 2, PALETTE[Math.floor(R() * 8)] + "aa"); y += 18; }
      if (y > h - 34) break;
    }
    g.strokeStyle = "#c9c9c9"; g.lineWidth = 1;
    g.beginPath(); g.roundRect(side + 5, h - 17, w - side - 10, 12, 3); g.stroke();
  };

  // 영상 사이트 (움직이는 영상 + 재생 막대)
  D.video = (g, w, h, R, t) => {
    const dark = R() < 0.55, bg = dark ? "#0f0f0f" : "#ffffff", fg = dark ? "#f1f1f1" : "#0f0f0f", sub = dark ? "#3d3d3d" : "#d9d9d9";
    g.fillStyle = bg; g.fillRect(0, 0, w, h);
    rr(g, w * 0.3, 3, w * 0.38, 8, 4, dark ? "#222" : "#f2f2f2");
    rr(g, 5, 4, 14, 7, 2, "#e03b2f"); // 사이트 단추 (그냥 빨간 둥근 칸)
    const vx = 5, vy = 15, vw = Math.round(w * 0.64), vh = Math.round(vw * 9 / 16);
    const scene = Math.floor(R() * 4), s2 = R();
    g.save(); g.beginPath(); g.rect(vx, vy, vw, vh); g.clip();
    if (scene === 0) { // 음악: 출렁이는 막대
      const gr = g.createLinearGradient(vx, vy, vx + vw, vy + vh);
      gr.addColorStop(0, `hsl(${(s2 * 360 + t * 20) % 360},70%,35%)`); gr.addColorStop(1, `hsl(${(s2 * 360 + 120 + t * 20) % 360},70%,25%)`);
      g.fillStyle = gr; g.fillRect(vx, vy, vw, vh);
      for (let i = 0; i < 16; i++) { const a = 0.25 + 0.7 * Math.abs(Math.sin(t * 3 + i * 0.7 + s2 * 9)); g.fillStyle = "rgba(255,255,255,.75)"; g.fillRect(vx + 6 + i * (vw - 12) / 16, vy + vh - 6 - a * (vh - 16), (vw - 12) / 16 - 2, a * (vh - 16)); }
    } else if (scene === 1) { // 여행: 하늘·구름·언덕
      const gr = g.createLinearGradient(0, vy, 0, vy + vh); gr.addColorStop(0, "#5fb4ef"); gr.addColorStop(1, "#cdeaff");
      g.fillStyle = gr; g.fillRect(vx, vy, vw, vh);
      for (let i = 0; i < 4; i++) { const x = vx + ((i * 47 + t * 9) % (vw + 40)) - 20; g.fillStyle = "rgba(255,255,255,.9)"; g.beginPath(); g.ellipse(x, vy + 14 + i * 6, 14, 5, 0, 0, Math.PI * 2); g.fill(); }
      g.fillStyle = "#5aa65a"; g.beginPath(); g.moveTo(vx, vy + vh); for (let x = 0; x <= vw; x += 8) g.lineTo(vx + x, vy + vh * 0.72 - Math.sin(x * 0.05 + 1) * 8); g.lineTo(vx + vw, vy + vh); g.fill();
      g.fillStyle = "#3f8a45"; g.beginPath(); g.moveTo(vx, vy + vh); for (let x = 0; x <= vw; x += 8) g.lineTo(vx + x, vy + vh * 0.85 - Math.sin(x * 0.08 + 3) * 5); g.lineTo(vx + vw, vy + vh); g.fill();
    } else if (scene === 2) { // 요리: 냄비에서 김
      g.fillStyle = "#c98a55"; g.fillRect(vx, vy, vw, vh);
      g.fillStyle = "#3a3a3a"; g.beginPath(); g.ellipse(vx + vw / 2, vy + vh * 0.62, vw * 0.32, vh * 0.24, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = "#e8b04a"; g.beginPath(); g.ellipse(vx + vw / 2, vy + vh * 0.6, vw * 0.26, vh * 0.17, 0, 0, Math.PI * 2); g.fill();
      for (let i = 0; i < 6; i++) { g.fillStyle = PALETTE[i]; g.beginPath(); g.arc(vx + vw / 2 + Math.cos(i * 1.7 + t) * vw * 0.15, vy + vh * 0.6 + Math.sin(i * 2.3 + t * 1.3) * vh * 0.08, 3, 0, Math.PI * 2); g.fill(); }
      for (let i = 0; i < 3; i++) { const k = (t * 0.6 + i / 3) % 1; g.fillStyle = `rgba(255,255,255,${0.5 * (1 - k)})`; g.beginPath(); g.arc(vx + vw * (0.42 + i * 0.08), vy + vh * (0.42 - k * 0.35), 4 + k * 6, 0, Math.PI * 2); g.fill(); }
    } else { // 게임 방송: 움직이는 블록
      g.fillStyle = "#1c2240"; g.fillRect(vx, vy, vw, vh);
      for (let i = 0; i < 9; i++) { const x = vx + ((i * 37 + t * (12 + i * 3)) % vw), y = vy + 8 + ((i * 23) % (vh - 16)); rr(g, x, y, 8, 8, 2, PALETTE[i % 8]); }
      rr(g, vx + vw - 30, vy + 4, 26, 18, 2, "#000a"); rr(g, vx + vw - 28, vy + 6, 22, 14, 2, "#e8b48a");
    }
    g.restore();
    const p = (s2 + t / 240) % 1;
    g.fillStyle = "rgba(255,255,255,.35)"; g.fillRect(vx, vy + vh - 2, vw, 2);
    g.fillStyle = "#e03b2f"; g.fillRect(vx, vy + vh - 2, vw * p, 2);
    rr(g, vx, vy + vh + 5, vw * 0.8, 4, 2, fg);
    g.fillStyle = PALETTE[Math.floor(s2 * 8)]; g.beginPath(); g.arc(vx + 5, vy + vh + 17, 5, 0, Math.PI * 2); g.fill();
    lines(g, R, vx + 14, vy + vh + 13, vw * 0.5, 2, 5, sub);
    const rx = vx + vw + 6, rw = w - rx - 5;
    for (let i = 0; i < 5; i++) {
      const y = vy + i * 25;
      if (y + 18 > h) break;
      rr(g, rx, y, rw * 0.5, 18, 2, `hsl(${Math.floor(R() * 360)},45%,${dark ? 35 : 70}%)`);
      lines(g, R, rx + rw * 0.55, y + 2, rw * 0.45, 3, 5, sub, 2.5);
    }
  };

  // 일본 애니 (전체 화면 재생: 하늘·벚꽃·인물 그림자·자막)
  D.anime = (g, w, h, R, t) => {
    const v = Math.floor(R() * 3), seed = Math.floor(R() * 1e6);
    const sky = [["#ff9a6b", "#ffd6a0", "#7b5aa6"], ["#0d1640", "#2a3a7a", "#0a0f26"], ["#5ab5f0", "#bfe6ff", "#3c8ed6"]][v];
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, sky[2]); gr.addColorStop(0.55, sky[0]); gr.addColorStop(1, sky[1]);
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    if (v === 1) { // 밤: 별·달
      const S = rng(seed);
      for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(255,255,255,${0.4 + 0.6 * Math.abs(Math.sin(t * 2 + i))})`; g.fillRect(S() * w, S() * h * 0.6, 1.2, 1.2); }
      g.fillStyle = "#fff6d0"; g.beginPath(); g.arc(w * 0.78, h * 0.22, 12, 0, Math.PI * 2); g.fill();
    } else {
      for (let i = 0; i < 4; i++) { const x = ((i * 83 + t * (4 + i)) % (w + 60)) - 30; g.fillStyle = v === 0 ? "rgba(255,226,200,.85)" : "rgba(255,255,255,.95)"; g.beginPath(); g.ellipse(x, 16 + i * 9, 22, 6, 0, 0, Math.PI * 2); g.fill(); }
    }
    // 멀리 도시/언덕
    g.fillStyle = v === 1 ? "#141a3a" : v === 0 ? "#5a3c6e" : "#4f9a5e";
    g.beginPath(); g.moveTo(0, h);
    for (let x = 0; x <= w; x += 10) g.lineTo(x, h * 0.66 - (v === 1 ? ((x * 7) % 23) : Math.sin(x * 0.04) * 6));
    g.lineTo(w, h); g.fill();
    if (v === 1) for (let i = 0; i < 18; i++) { g.fillStyle = "#ffd76a"; g.fillRect((i * 37) % w, h * 0.7 + ((i * 13) % 14), 1.5, 1.5); }
    // 인물 그림자 (긴 머리가 바람에 날림)
    const cx = w * (0.3 + (seed % 3) * 0.2), cy = h * 0.5, sway = Math.sin(t * 2) * 3;
    g.fillStyle = v === 1 ? "#05070f" : "#2a1d33";
    g.beginPath(); g.arc(cx, cy, 9, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.moveTo(cx - 8, cy - 2); g.quadraticCurveTo(cx - 20 + sway, cy + 14, cx - 28 + sway * 2, cy + 22); g.lineTo(cx - 6, cy + 10); g.fill();
    g.beginPath(); g.moveTo(cx - 9, cy + 10); g.lineTo(cx + 9, cy + 10); g.lineTo(cx + 14, h); g.lineTo(cx - 14, h); g.fill();
    // 벚꽃잎
    const P = rng(seed + 7);
    for (let i = 0; i < 22; i++) {
      const x = (P() * w + t * (10 + P() * 14)) % w, y = (P() * h + t * (14 + P() * 12)) % h;
      g.fillStyle = v === 1 ? "rgba(255,240,250,.8)" : "rgba(255,176,204,.95)";
      g.beginPath(); g.ellipse(x, y, 2.2, 1.3, t + i, 0, Math.PI * 2); g.fill();
    }
    const subs = ["「待って！」", "「また明日ね」", "「いくぞ！」", "「ありがとう」", "「本当に？」", "「約束だよ」"];
    const s = subs[(Math.floor(t / 3) + seed) % subs.length];
    g.font = `700 11px ${FONT}`; g.textAlign = "center"; g.textBaseline = "middle";
    g.lineWidth = 3; g.strokeStyle = "#000"; g.strokeText(s, w / 2, h - 16); g.fillStyle = "#fff"; g.fillText(s, w / 2, h - 16);
    g.fillStyle = "rgba(255,255,255,.3)"; g.fillRect(8, h - 5, w - 16, 2);
    g.fillStyle = "#4aa3df"; g.fillRect(8, h - 5, (w - 16) * ((seed % 100) / 100 + t / 1440) % (w - 16), 2);
  };

  // 코드 편집기
  D.code = (g, w, h, R) => {
    g.fillStyle = "#1e1e1e"; g.fillRect(0, 0, w, h);
    g.fillStyle = "#333"; g.fillRect(0, 0, 10, h);
    g.fillStyle = "#252526"; g.fillRect(10, 0, 46, h);
    lines(g, R, 14, 8, 36, 12, 8, "#6d6d6d", 3);
    g.fillStyle = "#2d2d2d"; g.fillRect(56, 0, w - 56, 11);
    rr(g, 57, 1, 44, 10, 1, "#1e1e1e");
    const C = ["#569cd6", "#ce9178", "#dcdcaa", "#9cdcfe", "#c586c0", "#6a9955", "#4ec9b0"];
    for (let i = 0; i < 15; i++) {
      const y = 16 + i * 8.4;
      text(g, String(i + 1), 66, y + 1.5, 5.5, "#858585", 400, "right");
      let x = 72 + (R() < 0.6 ? Math.floor(R() * 3) * 8 : 0);
      const n = 1 + Math.floor(R() * 4);
      for (let k = 0; k < n && x < w - 10; k++) { const ww = 8 + R() * 26; rr(g, x, y, ww, 3, 1.5, C[Math.floor(R() * C.length)]); x += ww + 4; }
    }
    g.fillStyle = "#007acc"; g.fillRect(0, h - 7, w, 7);
  };

  // 웹 브라우저 (뉴스 · 할 일 판 · 쇼핑)
  D.web = (g, w, h, R) => {
    g.fillStyle = "#dee1e6"; g.fillRect(0, 0, w, 22);
    rr(g, 6, 3, 52, 9, 3, "#fff"); rr(g, 60, 3, 52, 9, 3, "#cfd3d8");
    rr(g, 18, 13, w - 36, 7, 3.5, "#fff");
    g.fillStyle = "#f7f8fa"; g.fillRect(0, 22, w, h - 22);
    const v = Math.floor(R() * 3), col = PALETTE[Math.floor(R() * 8)];
    if (v === 0) {
      g.fillStyle = col; g.fillRect(0, 22, w, 12);
      const gr = g.createLinearGradient(8, 40, w * 0.6, 100); gr.addColorStop(0, col); gr.addColorStop(1, "#203040");
      g.fillStyle = gr; g.fillRect(8, 40, w * 0.58, 62);
      lines(g, R, 8, 108, w * 0.58, 5, 7, "#9aa3ad");
      for (let i = 0; i < 4; i++) { rr(g, w * 0.66, 40 + i * 27, 22, 20, 2, `hsl(${Math.floor(R() * 360)},40%,70%)`); lines(g, R, w * 0.66 + 26, 42 + i * 27, w * 0.24, 2, 6, "#9aa3ad"); }
    } else if (v === 1) {
      g.fillStyle = "#e9edf2"; g.fillRect(0, 22, w, h - 22);
      for (let c = 0; c < 3; c++) {
        const x = 8 + c * (w - 16) / 3;
        rr(g, x, 28, (w - 16) / 3 - 6, h - 34, 3, "#f4f5f7");
        for (let k = 0; k < 2 + Math.floor(R() * 3); k++) { rr(g, x + 3, 34 + k * 24, (w - 16) / 3 - 12, 20, 2, "#fff"); rr(g, x + 6, 37 + k * 24, 14, 3, 1.5, PALETTE[Math.floor(R() * 8)]); lines(g, R, x + 6, 43 + k * 24, (w - 16) / 3 - 20, 2, 5, "#a8b0ba", 2.5); }
      }
    } else {
      g.fillStyle = col; g.fillRect(0, 22, w, 12);
      for (let i = 0; i < 8; i++) { const x = 8 + (i % 4) * (w - 16) / 4, y = 40 + Math.floor(i / 4) * 54; rr(g, x, y, (w - 16) / 4 - 6, 34, 3, `hsl(${Math.floor(R() * 360)},50%,78%)`); lines(g, R, x, y + 38, (w - 16) / 4 - 8, 2, 6, "#8a929c", 2.5); }
    }
  };

  // 발표 자료
  D.slides = (g, w, h, R) => {
    g.fillStyle = "#e9e9e9"; g.fillRect(0, 0, w, h);
    g.fillStyle = "#c43e1c"; g.fillRect(0, 0, w, 12);
    g.fillStyle = "#f3f3f3"; g.fillRect(0, 12, w, 12);
    for (let i = 0; i < 5; i++) { rr(g, 5, 30 + i * 22, 34, 18, 1, i === 1 ? "#fff" : "#fafafa"); if (i === 1) { g.strokeStyle = "#c43e1c"; g.strokeRect(4.5, 29.5 + i * 22, 35, 19); } }
    const sx = 46, sy = 30, sw = w - 52, sh = sw * 9 / 16;
    g.fillStyle = "#fff"; g.fillRect(sx, sy, sw, sh);
    const col = PALETTE[Math.floor(R() * 8)];
    g.fillStyle = col; g.fillRect(sx, sy, sw, 4);
    rr(g, sx + 8, sy + 10, sw * 0.6, 7, 2, "#333");
    lines(g, R, sx + 14, sy + 24, sw * 0.42, 4, 8, "#9a9a9a");
    if (R() < 0.5) { const cx = sx + sw * 0.76, cy = sy + sh * 0.58, r = sh * 0.26; let a = -Math.PI / 2; for (let i = 0; i < 4; i++) { const b = a + (0.3 + R() * 0.4) * Math.PI; g.fillStyle = PALETTE[(i * 2 + 1) % 8]; g.beginPath(); g.moveTo(cx, cy); g.arc(cx, cy, r, a, i === 3 ? Math.PI * 1.5 : b); g.fill(); a = b; } }
    else for (let i = 0; i < 5; i++) { const v = 0.3 + R() * 0.65; rr(g, sx + sw * 0.6 + i * 10, sy + sh - 6 - v * sh * 0.55, 7, v * sh * 0.55, 1, col); }
  };

  // 옆으로 가는 게임 (발판·캐릭터·몬스터·데미지 숫자·체력 막대)
  D.game = (g, w, h, R, t) => {
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, "#7cc6ff"); gr.addColorStop(1, "#d8f0ff");
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.fillStyle = "#9ed39a"; g.beginPath(); g.moveTo(0, h * 0.7); for (let x = 0; x <= w; x += 12) g.lineTo(x, h * 0.62 - Math.sin(x * 0.05 + 2) * 9); g.lineTo(w, h); g.lineTo(0, h); g.fill();
    const plats = [[0.08, 0.5, 0.3], [0.5, 0.38, 0.32], [0.2, 0.74, 0.7]];
    for (const [px, py, pw] of plats) { rr(g, w * px, h * py, w * pw, 6, 2, "#8a5a32"); g.fillStyle = "#5cbf4f"; g.fillRect(w * px, h * py, w * pw, 2.5); }
    const hx = w * 0.25 + Math.sin(t * 0.8) * w * 0.12, hy = h * 0.74 - 14;
    rr(g, hx - 4, hy, 8, 10, 2, "#3d6fd6"); g.fillStyle = "#ffd9b5"; g.beginPath(); g.arc(hx, hy - 4, 5, 0, Math.PI * 2); g.fill();
    g.fillStyle = "#6a3b1f"; g.beginPath(); g.arc(hx, hy - 6, 5, Math.PI, 0); g.fill();
    for (let i = 0; i < 3; i++) {
      const mx = w * (0.55 + i * 0.14), my = h * 0.74 - 8 - Math.abs(Math.sin(t * 3 + i)) * 6;
      g.fillStyle = ["#f29b3c", "#8fd14f", "#e86aa0"][i]; g.beginPath(); g.ellipse(mx, my, 7, 6, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = "#222"; g.fillRect(mx - 3, my - 2, 1.5, 1.5); g.fillRect(mx + 2, my - 2, 1.5, 1.5);
    }
    const k = (t * 0.9) % 1;
    g.font = `800 10px ${FONT}`; g.textAlign = "center"; g.lineWidth = 2; g.strokeStyle = "#4a2300";
    const dmg = String(1000 + ((Math.floor(t * 0.9) * 7919) % 8999));
    g.strokeText(dmg, w * 0.6, h * 0.55 - k * 14); g.fillStyle = "#ffb52e"; g.fillText(dmg, w * 0.6, h * 0.55 - k * 14);
    g.fillStyle = "rgba(20,24,34,.85)"; g.fillRect(0, h - 12, w, 12);
    rr(g, 6, h - 9, 50, 3, 1.5, "#e2463b"); rr(g, 6, h - 5, 50, 3, 1.5, "#3a86e8");
    g.fillStyle = "#3a3a3a"; g.fillRect(62, h - 8, w - 70, 4); g.fillStyle = "#f5d547"; g.fillRect(62, h - 8, (w - 70) * ((t / 90) % 1), 4);
  };


  // ── 사람마다 정해 둔 화면 (무작위로는 안 나온다) ──
  // 영상 재생 막대 (아래쪽)
  const playBar = (g, w, h, p, col = "#e03b2f") => {
    g.fillStyle = "rgba(0,0,0,.45)"; g.fillRect(0, h - 9, w, 9);
    g.fillStyle = "rgba(255,255,255,.35)"; g.fillRect(6, h - 5, w - 12, 2);
    g.fillStyle = col; g.fillRect(6, h - 5, (w - 12) * (p % 1), 2);
  };
  // 축구 중계: 줄무늬 잔디·흰 선·뛰는 선수·공·점수판
  D.soccer = (g, w, h, R, t) => {
    const seed = Math.floor(R() * 1000);
    for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? "#3f9a45" : "#46a84c"; g.fillRect(0, (i * h) / 8, w, h / 8 + 1); }
    g.strokeStyle = "rgba(255,255,255,.85)"; g.lineWidth = 1.5;
    const pan = Math.sin(t * 0.25 + seed) * 30; // 카메라가 공을 따라 좌우로
    g.beginPath(); g.moveTo(w / 2 - pan, 0); g.lineTo(w / 2 - pan, h); g.stroke();
    g.beginPath(); g.ellipse(w / 2 - pan, h / 2, 26, 18, 0, 0, Math.PI * 2); g.stroke();
    g.strokeRect(-pan - 20, h * 0.25, 40, h * 0.5); g.strokeRect(w - pan - 20, h * 0.25, 40, h * 0.5);
    const S = rng(seed + 3);
    for (let i = 0; i < 14; i++) { // 선수들: 공 쪽으로 몰렸다 흩어졌다
      const bx = w * (0.5 + 0.3 * Math.sin(t * 0.7 + seed)), by = h * (0.5 + 0.25 * Math.sin(t * 1.1 + seed * 2));
      const hx = S() * w, hy = 14 + S() * (h - 30), k = 0.35 + 0.25 * Math.sin(t * 0.5 + i);
      const x = hx + (bx - hx) * k + Math.sin(t * 3 + i) * 3, y = hy + (by - hy) * k + Math.cos(t * 2.6 + i) * 2;
      g.fillStyle = "rgba(0,0,0,.25)"; g.beginPath(); g.ellipse(x, y + 5, 4, 1.5, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = i < 7 ? "#e8463c" : "#2f6fe0"; g.fillRect(x - 2.5, y - 4, 5, 7);
      g.fillStyle = "#f2d0b0"; g.beginPath(); g.arc(x, y - 6, 2.2, 0, Math.PI * 2); g.fill();
    }
    const bx = w * (0.5 + 0.3 * Math.sin(t * 0.7 + seed)) + Math.sin(t * 5) * 6, by = h * (0.5 + 0.25 * Math.sin(t * 1.1 + seed * 2));
    g.fillStyle = "#fff"; g.beginPath(); g.arc(bx, by, 2.6, 0, Math.PI * 2); g.fill();
    rr(g, 6, 6, 92, 14, 3, "rgba(15,20,35,.85)"); // 점수판
    text(g, "FC 서울", 10, 13.5, 7, "#fff", 700); text(g, `${1 + (seed % 2)} : ${seed % 3}`, 62, 13.5, 8, "#ffd84a", 800, "center");
    text(g, `${String(23 + Math.floor(t / 60) % 67).padStart(2, "0")}:${String(Math.floor(t) % 60).padStart(2, "0")}`, 94, 13.5, 6.5, "#cfd6e4", 400, "right");
    rr(g, w - 30, 6, 24, 10, 2, "#e03b2f"); text(g, "LIVE", w - 18, 11.5, 6.5, "#fff", 800, "center");
    playBar(g, w, h, 0.62 + t / 5400, "#e03b2f");
  };
  // 뉴스: 스튜디오 · 속보 띠 · 독도 그림 · 흐르는 자막
  D.dokdo = (g, w, h, R, t) => {
    const gr = g.createLinearGradient(0, 0, w, h); gr.addColorStop(0, "#0d2a5c"); gr.addColorStop(1, "#1a4f8f");
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 6; i++) { g.fillStyle = "rgba(255,255,255,.05)"; g.fillRect(i * 46 - 10, 0, 20, h); }
    // 오른쪽: 독도 그림 (바다 위 두 섬)
    const ix = w * 0.5, iy = 18, iw = w * 0.46, ih = h * 0.5;
    const sea = g.createLinearGradient(0, iy, 0, iy + ih); sea.addColorStop(0, "#9fd3f5"); sea.addColorStop(0.45, "#cfe9fb"); sea.addColorStop(0.46, "#2f7fc4"); sea.addColorStop(1, "#1d5f9e");
    g.fillStyle = sea; g.fillRect(ix, iy, iw, ih);
    const isl = (cx, bw, hh) => { g.fillStyle = "#5f6b52"; g.beginPath(); g.moveTo(cx - bw, iy + ih * 0.47); g.lineTo(cx - bw * 0.4, iy + ih * 0.47 - hh); g.lineTo(cx + bw * 0.1, iy + ih * 0.47 - hh * 0.75); g.lineTo(cx + bw * 0.5, iy + ih * 0.47 - hh * 0.9); g.lineTo(cx + bw, iy + ih * 0.47); g.fill(); };
    isl(ix + iw * 0.33, iw * 0.16, ih * 0.32); isl(ix + iw * 0.68, iw * 0.14, ih * 0.38);
    for (let i = 0; i < 5; i++) { g.strokeStyle = "rgba(255,255,255,.5)"; g.lineWidth = 1; g.beginPath(); const y = iy + ih * (0.6 + i * 0.08); g.moveTo(ix + ((t * 8 + i * 30) % iw), y); g.lineTo(ix + ((t * 8 + i * 30) % iw) + 12, y); g.stroke(); }
    g.strokeStyle = "rgba(255,255,255,.7)"; g.strokeRect(ix + 0.5, iy + 0.5, iw - 1, ih - 1);
    // 왼쪽: 앵커 (그림자 모양)
    g.fillStyle = "#0a1630"; g.beginPath(); g.arc(w * 0.22, h * 0.36, 11, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.moveTo(w * 0.22 - 22, h * 0.72); g.quadraticCurveTo(w * 0.22, h * 0.42, w * 0.22 + 22, h * 0.72); g.fill();
    rr(g, w * 0.06, h * 0.72 - 6, w * 0.36, 8, 2, "#c9d6ea");
    // 속보 띠 + 제목
    rr(g, 0, h - 44, w, 26, 0, "rgba(255,255,255,.95)");
    rr(g, 0, h - 44, 40, 26, 0, "#d62d2d"); text(g, "속보", 20, h - 31, 9, "#fff", 800, "center");
    text(g, "독도 영토 분쟁 관련 소식", 46, h - 31, 9.5, "#0d2a5c", 800);
    // 흐르는 자막
    g.fillStyle = "#0b1a38"; g.fillRect(0, h - 18, w, 18);
    const tick = "독도 영토 분쟁 관련 소식 · 동해 날씨 맑음 · 파고 1~2m · 오늘의 환율 · 내일 전국 대체로 맑음 · ";
    g.save(); g.beginPath(); g.rect(0, h - 18, w, 18); g.clip();
    g.font = `600 8px ${FONT}`; const tw = g.measureText(tick).width;
    const off = (t * 22) % tw;
    for (let x = -off; x < w; x += tw) text(g, tick, x, h - 9, 8, "#e8eef8", 600);
    g.restore();
    rr(g, w - 34, 4, 30, 10, 2, "rgba(255,255,255,.85)"); text(g, "NEWS", w - 19, 9.5, 6.5, "#0d2a5c", 800, "center");
  };
  // 고양이 영상: 방석 위 고양이 · 흔드는 꼬리 · 굴러가는 털실
  D.cat = (g, w, h, R, t) => {
    const fur = ["#f2a65a", "#8c8c8c", "#3a3a3a", "#f3efe6"][Math.floor(R() * 4)];
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, "#fbe9d7"); gr.addColorStop(1, "#f3d2b3");
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.fillStyle = "#c98a5a"; g.fillRect(0, h * 0.78, w, h * 0.22); // 마루
    const cx = w * 0.45, cy = h * 0.62, breathe = Math.sin(t * 2) * 1.2;
    g.fillStyle = "#e46a6a"; g.beginPath(); g.ellipse(cx, h * 0.78, 52, 10, 0, 0, Math.PI * 2); g.fill(); // 방석
    // 꼬리
    const sw = Math.sin(t * 3) * 10;
    g.strokeStyle = fur; g.lineWidth = 6; g.lineCap = "round";
    g.beginPath(); g.moveTo(cx + 30, cy + 10); g.quadraticCurveTo(cx + 55, cy - 5 + sw * 0.4, cx + 48 + sw, cy - 28); g.stroke();
    // 몸 · 머리 · 귀
    g.fillStyle = fur; g.beginPath(); g.ellipse(cx + 8, cy + 6, 36, 20 + breathe, 0, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.arc(cx - 22, cy - 12, 17, 0, Math.PI * 2); g.fill();
    const tw = Math.max(0, Math.sin(t * 1.7)) > 0.97 ? 3 : 0; // 귀 쫑긋
    for (const s of [-1, 1]) { g.beginPath(); g.moveTo(cx - 22 + s * 6, cy - 25); g.lineTo(cx - 22 + s * 15, cy - 39 - (s > 0 ? tw : 0)); g.lineTo(cx - 22 + s * 16, cy - 20); g.fill(); }
    // 눈 (가끔 깜박)
    const blink = (t % 4) < 0.15;
    g.fillStyle = "#2b2b2b";
    for (const s of [-1, 1]) { if (blink) g.fillRect(cx - 22 + s * 6 - 3, cy - 13, 6, 1.5); else { g.beginPath(); g.ellipse(cx - 22 + s * 6, cy - 13, 2.4, 3.4, 0, 0, Math.PI * 2); g.fill(); } }
    g.fillStyle = "#e88b9a"; g.beginPath(); g.arc(cx - 22, cy - 7, 1.8, 0, Math.PI * 2); g.fill();
    g.strokeStyle = "#5a5a5a"; g.lineWidth = 0.8;
    for (const s of [-1, 1]) for (const k of [-1, 1]) { g.beginPath(); g.moveTo(cx - 22 + s * 5, cy - 6); g.lineTo(cx - 22 + s * 17, cy - 7 + k * 3); g.stroke(); }
    // 털실
    const yx = ((t * 18) % (w + 40)) - 20;
    g.fillStyle = "#6aa8e8"; g.beginPath(); g.arc(yx, h * 0.74, 7, 0, Math.PI * 2); g.fill();
    g.strokeStyle = "#4a88c8"; g.lineWidth = 1; g.beginPath(); g.arc(yx, h * 0.74, 4, t * 4, t * 4 + 4); g.stroke();
    text(g, "🐾 냥이 브이로그", 6, 10, 8, "#7a4a2a", 700);
    playBar(g, w, h, 0.3 + t / 600);
  };
  // 바나나 영상: 크게 흔들리는 바나나 송이 · 껍질 반쯤 깐 바나나 · 굴러가는 작은 바나나
  // 바나나 하나 = 꼭지 쪽(0,0)에서 오른쪽으로 뻗어 위로 휘는 초승달 몸 + 초록빛 꼭지 + 갈색 끝 + 갈색 점
  const banana = (g, x, y, L, rot, opt = {}) => {
    g.save(); g.translate(x, y); g.rotate(rot);
    const T = L * 0.17; // 가운데 두께
    const body = () => {
      g.beginPath();
      g.moveTo(0, 0);
      g.bezierCurveTo(L * 0.3, T * 1.6, L * 0.75, T * 1.2, L, -T * 0.9); // 바깥(아래) 곡선
      g.bezierCurveTo(L * 0.72, T * 0.15, L * 0.3, T * 0.35, 0, -T * 0.55); // 안쪽(위) 곡선
      g.closePath();
    };
    const gr = g.createLinearGradient(0, -T, 0, T * 1.4);
    gr.addColorStop(0, opt.light || "#ffe96a"); gr.addColorStop(0.55, opt.col || "#f6cf2a"); gr.addColorStop(1, opt.dark || "#d9a414");
    g.fillStyle = gr; body(); g.fill();
    g.strokeStyle = "rgba(150,105,10,.85)"; g.lineWidth = Math.max(1, L * 0.025); body(); g.stroke();
    g.strokeStyle = "rgba(255,255,255,.55)"; g.lineWidth = Math.max(0.8, L * 0.02); // 반짝이는 등줄기
    g.beginPath(); g.moveTo(L * 0.12, -T * 0.05); g.bezierCurveTo(L * 0.35, T * 0.55, L * 0.65, T * 0.35, L * 0.88, -T * 0.45); g.stroke();
    g.strokeStyle = "rgba(170,120,15,.45)"; g.lineWidth = Math.max(0.6, L * 0.012); // 모서리 줄
    g.beginPath(); g.moveTo(L * 0.1, T * 0.35); g.bezierCurveTo(L * 0.35, T * 1.05, L * 0.68, T * 0.8, L * 0.93, -T * 0.6); g.stroke();
    g.fillStyle = "#6f8a2a"; g.beginPath(); g.moveTo(0, -T * 0.55); g.lineTo(-L * 0.12, -T * 0.4); g.lineTo(-L * 0.13, T * 0.05); g.lineTo(0, 0); g.fill(); // 꼭지
    g.fillStyle = "#4a3410"; g.beginPath(); g.arc(L, -T * 0.9, Math.max(1.2, T * 0.22), 0, Math.PI * 2); g.fill(); // 끝
    g.fillStyle = "rgba(120,80,20,.55)"; // 갈색 점
    for (const [u, v] of [[0.35, 0.5], [0.52, 0.65], [0.66, 0.3], [0.44, 0.15]]) { g.beginPath(); g.arc(L * u, T * v, Math.max(0.6, T * 0.09), 0, Math.PI * 2); g.fill(); }
    g.restore();
  };
  D.banana = (g, w, h, R, t) => {
    const gr = g.createRadialGradient(w * 0.45, h * 0.45, 10, w * 0.5, h * 0.5, w * 0.7);
    gr.addColorStop(0, "#fff9dc"); gr.addColorStop(1, "#ffd96b");
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.fillStyle = "#e9b75a"; g.fillRect(0, h * 0.8, w, h * 0.2); // 식탁
    g.fillStyle = "rgba(0,0,0,.08)"; g.beginPath(); g.ellipse(w * 0.4, h * 0.82, 62, 7, 0, 0, Math.PI * 2); g.fill();
    // 송이: 한 꼭지에서 다섯 개가 부채처럼 퍼지고 위로 휜다
    const cx = w * 0.18, cy = h * 0.62, sway = Math.sin(t * 1.5) * 0.06;
    for (let i = 0; i < 5; i++) banana(g, cx + i * 1.5, cy - i * 1.2, 92 - Math.abs(i - 2) * 4, -0.62 + i * 0.2 + sway, { dark: i % 2 ? "#cf9a12" : "#d9a414" });
    g.fillStyle = "#5c7424"; g.beginPath(); g.ellipse(cx - 6, cy + 1, 9, 6, -0.4, 0, Math.PI * 2); g.fill(); // 송이 꼭지
    // 반쯤 깐 바나나 (껍질이 천천히 벌어진다)
    const k = 0.5 + 0.5 * Math.sin(t * 0.9), bx = w * 0.8, by = h * 0.74;
    g.fillStyle = "#fff3cc"; g.strokeStyle = "#d8c08a"; g.lineWidth = 1;
    g.beginPath(); g.roundRect(bx - 6, by - 46, 12, 40, 6); g.fill(); g.stroke(); // 속살
    g.fillStyle = "#f6cf2a"; g.strokeStyle = "rgba(150,105,10,.85)";
    for (const s of [-1, 0, 1]) { // 껍질 세 갈래
      g.save(); g.translate(bx + s * 3, by - 10); g.rotate(s * (0.25 + k * 0.75) + (s === 0 ? Math.PI * k * 0.0 : 0));
      g.beginPath(); g.moveTo(-4, 0); g.quadraticCurveTo(-5, -18 + k * 6, 0, -24 + k * 8); g.quadraticCurveTo(5, -18 + k * 6, 4, 0); g.closePath();
      if (s !== 0 || k < 0.5) { g.fill(); g.stroke(); }
      g.restore();
    }
    g.fillStyle = "#f6cf2a"; g.beginPath(); g.roundRect(bx - 7, by - 12, 14, 14, 4); g.fill(); g.stroke(); // 아래 껍질
    // 굴러가는 작은 바나나
    const rx = ((t * 20) % (w + 60)) - 30;
    banana(g, rx, h * 0.86, 26, t * 2.2 % (Math.PI * 2));
    text(g, "바나나 먹방 🍌", 6, 10, 8, "#7a5a0a", 800);
    playBar(g, w, h, 0.5 + t / 900, "#e8b10a");
  };

  function draw(kind, g, w, h, seed, t = 0) {
    g.save();
    (D[kind] || D.off)(g, w, h, rng(seed), t);
    g.restore();
  }
  return { draw, pick, ANIM, KINDS: Object.keys(KINDS) };
})();
