'use strict';

// 영상 틀과 「플레이 하러가기」 버튼의 스타일 모음. 편집기(app.js)가 캔버스에 그릴 때 쓴다.
// 틀: under()는 영상 자리를 뚫기 전(그림자·빛·유리), over()는 뚫은 뒤(테두리·장식)에 그린다.
// b = { x, y, w, h, r } 영상 자리. 버튼: draw(g, b, 글자, 폰트) b = { x, y, w, h }.
const VT = (() => {
  const WORLDS = ['#FF6FAE', '#FFC93C', '#7BE36B', '#45C8FF', '#A98BFF'];

  function rr(g, x, y, w, h, r) {
    g.beginPath();
    g.roundRect(x, y, w, h, Math.max(0, Math.min(r, w / 2, h / 2)));
  }

  // 영상 자리를 바깥으로 d만큼 키운 둥근 사각형
  function grow(g, b, d) {
    rr(g, b.x - d, b.y - d, b.w + d * 2, b.h + d * 2, b.r + d);
  }

  function rainbow(g, x, y, w, h) {
    const gr = g.createLinearGradient(x, y, x + w, y + h);
    WORLDS.forEach((c, i) => gr.addColorStop(i / (WORLDS.length - 1), c));
    return gr;
  }

  function neon(g, b) {
    const gr = g.createLinearGradient(b.x, b.y, b.x + b.w, b.y + b.h);
    gr.addColorStop(0, '#3FE0FF');
    gr.addColorStop(0.5, '#8A7CFF');
    gr.addColorStop(1, '#FF5FB5');
    return gr;
  }

  // 모양은 화면 밖으로 보내고 그림자만 제자리에 남긴다
  function shadowOnly(g, path, color, blur, dy) {
    const far = 20000;
    g.save();
    g.shadowColor = color;
    g.shadowBlur = blur;
    g.shadowOffsetX = far;
    g.shadowOffsetY = dy;
    g.translate(-far, 0);
    path();
    g.fillStyle = '#000';
    g.fill();
    g.restore();
  }

  // path 안쪽만 지금까지 그린 그림을 흐리게 (유리 느낌)
  function frost(g, path, blur, evenodd) {
    g.save();
    path();
    g.clip(evenodd ? 'evenodd' : 'nonzero');
    g.filter = `blur(${blur}px)`;
    g.drawImage(g.canvas, 0, 0);
    g.restore();
  }

  function stroke(g, style, width, path) {
    g.save();
    g.strokeStyle = style;
    g.lineWidth = width;
    path();
    g.stroke();
    g.restore();
  }

  // ---------------------------------------------------------------- 영상 틀

  const FRAMES = {
    clean: {
      name: '깔끔한 흰 테두리',
      under(g, b) { shadowOnly(g, () => grow(g, b, 3), 'rgba(3,10,38,0.55)', 34, 10); },
      over(g, b) { stroke(g, '#FFFFFF', 3, () => grow(g, b, 1.5)); },
    },
    glow: {
      name: '하늘빛 글로우',
      under(g, b) {
        shadowOnly(g, () => grow(g, b, 2), 'rgba(54,201,255,0.95)', 44, 0);
        shadowOnly(g, () => grow(g, b, 2), 'rgba(120,225,255,0.7)', 14, 0);
      },
      over(g, b) {
        stroke(g, '#DDF8FF', 2.5, () => grow(g, b, 1.25));
        stroke(g, 'rgba(255,255,255,0.35)', 1, () => grow(g, b, -1.5));
      },
    },
    double: {
      name: '이중 라인',
      under(g, b) { shadowOnly(g, () => grow(g, b, 3), 'rgba(3,10,38,0.5)', 30, 8); },
      over(g, b) {
        stroke(g, '#FFFFFF', 3, () => grow(g, b, 1.5));
        stroke(g, 'rgba(255,255,255,0.6)', 1.5, () => grow(g, b, 15));
        // 바깥 선 네 귀퉁이의 작은 점
        g.save();
        g.fillStyle = '#FFFFFF';
        const d = 15, k = (b.r + d) * 0.293;
        for (const [x, y] of [[b.x - d + k, b.y - d + k], [b.x + b.w + d - k, b.y - d + k],
          [b.x - d + k, b.y + b.h + d - k], [b.x + b.w + d - k, b.y + b.h + d - k]]) {
          g.beginPath();
          g.arc(x, y, 3.5, 0, Math.PI * 2);
          g.fill();
        }
        g.restore();
      },
    },
    bracket: {
      name: '코너 브래킷',
      under(g, b) { shadowOnly(g, () => grow(g, b, 2), 'rgba(3,10,38,0.45)', 26, 8); },
      over(g, b) {
        stroke(g, 'rgba(255,255,255,0.85)', 2, () => grow(g, b, 1));
        const d = 16, L = 60, rc = Math.min(b.r + d, 22);
        const x0 = b.x - d, y0 = b.y - d, x1 = b.x + b.w + d, y1 = b.y + b.h + d;
        g.save();
        g.strokeStyle = '#62E2FF';
        g.lineWidth = 5;
        g.lineCap = 'round';
        g.shadowColor = 'rgba(80,220,255,0.85)';
        g.shadowBlur = 14;
        g.beginPath();
        g.moveTo(x0, y0 + L); g.arcTo(x0, y0, x0 + L, y0, rc); g.lineTo(x0 + L, y0);
        g.moveTo(x1 - L, y0); g.arcTo(x1, y0, x1, y0 + L, rc); g.lineTo(x1, y0 + L);
        g.moveTo(x1, y1 - L); g.arcTo(x1, y1, x1 - L, y1, rc); g.lineTo(x1 - L, y1);
        g.moveTo(x0 + L, y1); g.arcTo(x0, y1, x0, y1 - L, rc); g.lineTo(x0, y1 - L);
        g.stroke();
        g.restore();
      },
    },
    rainbow: {
      name: '월드 레인보우',
      under(g, b) { shadowOnly(g, () => grow(g, b, 4), 'rgba(3,10,38,0.5)', 30, 10); },
      over(g, b) {
        stroke(g, rainbow(g, b.x, b.y, b.w, b.h), 6, () => grow(g, b, 3));
        stroke(g, 'rgba(255,255,255,0.95)', 1.5, () => grow(g, b, 0.75));
      },
    },
    glass: {
      name: '유리 프레임',
      under(g, b) {
        const t = 18;
        shadowOnly(g, () => grow(g, b, t), 'rgba(3,10,38,0.45)', 36, 12);
        const ring = () => {
          g.beginPath();
          g.roundRect(b.x - t, b.y - t, b.w + t * 2, b.h + t * 2, b.r + t);
          g.roundRect(b.x, b.y, b.w, b.h, b.r);
        };
        frost(g, ring, 10, true);
        g.save();
        ring();
        g.clip('evenodd');
        const gr = g.createLinearGradient(0, b.y - t, 0, b.y + b.h + t);
        gr.addColorStop(0, 'rgba(255,255,255,0.30)');
        gr.addColorStop(1, 'rgba(255,255,255,0.12)');
        g.fillStyle = gr;
        g.fillRect(b.x - t - 2, b.y - t - 2, b.w + t * 2 + 4, b.h + t * 2 + 4);
        g.restore();
      },
      over(g, b) {
        stroke(g, 'rgba(255,255,255,0.6)', 1.5, () => grow(g, b, 18));
        stroke(g, '#FFFFFF', 2, () => grow(g, b, 1));
      },
    },
    neon: {
      name: '네온 그라데이션',
      under(g, b) {
        g.save();
        g.filter = 'blur(16px)';
        stroke(g, neon(g, b), 12, () => grow(g, b, 3));
        g.restore();
      },
      over(g, b) {
        stroke(g, neon(g, b), 3.5, () => grow(g, b, 1.75));
        stroke(g, 'rgba(255,255,255,0.55)', 1, () => grow(g, b, 0.5));
      },
    },
    none: {
      name: '테두리 없음',
      under() {},
      over() {},
    },
  };

  // ---------------------------------------------------------------- 버튼

  // 글자 + 오른쪽 ▶ 를 한 덩어리로 가운데 정렬
  function label(g, b, text, fam, weight, color, opt = {}) {
    const size = Math.round(b.h * (opt.scale || 0.36));
    g.save();
    g.font = `${weight} ${size}px ${fam}`;
    g.textBaseline = 'middle';
    g.letterSpacing = (opt.ls ?? -0.5) + 'px';
    const tw = g.measureText(text).width;
    const icon = size * 0.62;
    const gap = size * 0.42;
    const x = b.x + (b.w - (tw + gap + icon)) / 2;
    const cy = b.y + b.h / 2 + (opt.dy || 0);
    if (opt.textShadow) {
      g.shadowColor = opt.textShadow;
      g.shadowOffsetY = Math.max(1, size * 0.07);
    }
    g.fillStyle = color;
    g.fillText(text, x, cy + size * 0.05);
    const ix = x + tw + gap;
    g.beginPath();
    g.moveTo(ix, cy - icon * 0.55);
    g.lineTo(ix + icon * 0.9, cy);
    g.lineTo(ix, cy + icon * 0.55);
    g.closePath();
    g.lineJoin = 'round';
    g.lineWidth = size * 0.1;
    g.strokeStyle = color;
    g.fill();
    g.stroke();
    g.restore();
  }

  // 위쪽 절반에 옅은 하이라이트
  function gloss(g, x, y, w, h, r, a) {
    g.save();
    rr(g, x, y, w, h, r);
    g.clip();
    const gr = g.createLinearGradient(0, y, 0, y + h * 0.55);
    gr.addColorStop(0, `rgba(255,255,255,${a})`);
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr;
    g.fillRect(x, y, w, h * 0.55);
    g.restore();
  }

  const BUTTONS = {
    white: {
      name: '화이트',
      font: 'noto',
      draw(g, b, text, fam) {
        const r = b.h / 2;
        shadowOnly(g, () => rr(g, b.x, b.y, b.w, b.h, r), 'rgba(3,10,38,0.5)', 22, 8);
        rr(g, b.x, b.y, b.w, b.h, r);
        g.fillStyle = '#FFFFFF';
        g.fill();
        const gr = g.createLinearGradient(0, b.y, 0, b.y + b.h);
        gr.addColorStop(0, 'rgba(16,28,68,0)');
        gr.addColorStop(1, 'rgba(16,28,68,0.10)');
        g.fillStyle = gr;
        g.fill();
        label(g, b, text, fam, 800, '#101C44');
      },
    },
    sky: {
      name: '스카이 그라데이션',
      font: 'noto',
      draw(g, b, text, fam) {
        const r = b.h / 2;
        shadowOnly(g, () => rr(g, b.x, b.y, b.w, b.h, r), 'rgba(47,184,255,0.75)', 30, 6);
        const gr = g.createLinearGradient(b.x, 0, b.x + b.w, 0);
        gr.addColorStop(0, '#4ADCFF');
        gr.addColorStop(1, '#2F68FF');
        rr(g, b.x, b.y, b.w, b.h, r);
        g.fillStyle = gr;
        g.fill();
        gloss(g, b.x, b.y, b.w, b.h, r, 0.35);
        stroke(g, 'rgba(255,255,255,0.55)', 1.5, () => rr(g, b.x + 0.75, b.y + 0.75, b.w - 1.5, b.h - 1.5, r));
        label(g, b, text, fam, 800, '#FFFFFF', { textShadow: 'rgba(0,40,140,0.35)' });
      },
    },
    orange: {
      name: '메이플 오렌지',
      font: 'noto',
      draw(g, b, text, fam) {
        const dep = Math.round(b.h * 0.08), h = b.h - dep, r = h / 2;
        shadowOnly(g, () => rr(g, b.x, b.y + dep, b.w, h, r), 'rgba(3,10,38,0.5)', 20, 8);
        rr(g, b.x, b.y + dep, b.w, h, r);
        g.fillStyle = '#B9480A';
        g.fill();
        const gr = g.createLinearGradient(0, b.y, 0, b.y + h);
        gr.addColorStop(0, '#FFC54D');
        gr.addColorStop(1, '#FF7A1A');
        rr(g, b.x, b.y, b.w, h, r);
        g.fillStyle = gr;
        g.fill();
        gloss(g, b.x, b.y, b.w, h, r, 0.45);
        label(g, { x: b.x, y: b.y, w: b.w, h }, text, fam, 800, '#FFFFFF', { textShadow: 'rgba(150,50,0,0.55)' });
      },
    },
    glass: {
      name: '유리',
      font: 'noto',
      draw(g, b, text, fam) {
        const r = b.h / 2;
        shadowOnly(g, () => rr(g, b.x, b.y, b.w, b.h, r), 'rgba(3,10,38,0.35)', 24, 8);
        frost(g, () => rr(g, b.x, b.y, b.w, b.h, r), 12);
        rr(g, b.x, b.y, b.w, b.h, r);
        g.fillStyle = 'rgba(255,255,255,0.16)';
        g.fill();
        gloss(g, b.x, b.y, b.w, b.h, r, 0.22);
        stroke(g, 'rgba(255,255,255,0.92)', 2, () => rr(g, b.x + 1, b.y + 1, b.w - 2, b.h - 2, r));
        label(g, b, text, fam, 700, '#FFFFFF', { textShadow: 'rgba(3,10,38,0.35)' });
      },
    },
    game: {
      name: '게임 버튼',
      font: 'maple',
      draw(g, b, text, fam) {
        const dep = Math.round(b.h * 0.09), o = 4, h = b.h - dep, r = h * 0.32;
        shadowOnly(g, () => rr(g, b.x - o, b.y - o, b.w + o * 2, b.h + o * 2, r + o), 'rgba(3,10,38,0.45)', 18, 6);
        rr(g, b.x - o, b.y - o, b.w + o * 2, b.h + o * 2, r + o);
        g.fillStyle = '#101C44';
        g.fill();
        const gr = g.createLinearGradient(0, b.y, 0, b.y + h);
        gr.addColorStop(0, '#FFE65C');
        gr.addColorStop(1, '#FFB300');
        rr(g, b.x, b.y, b.w, h, r);
        g.fillStyle = gr;
        g.fill();
        gloss(g, b.x, b.y, b.w, h, r, 0.5);
        label(g, { x: b.x, y: b.y, w: b.w, h }, text, fam, 400, '#101C44', { scale: 0.42, ls: 0 });
      },
    },
    rainbow: {
      name: '레인보우 테두리',
      font: 'noto',
      draw(g, b, text, fam) {
        const r = b.h / 2;
        shadowOnly(g, () => rr(g, b.x, b.y, b.w, b.h, r), 'rgba(120,150,255,0.55)', 26, 4);
        rr(g, b.x, b.y, b.w, b.h, r);
        g.fillStyle = 'rgba(14,26,68,0.9)';
        g.fill();
        stroke(g, rainbow(g, b.x, b.y, b.w, b.h), 3, () => rr(g, b.x + 1.5, b.y + 1.5, b.w - 3, b.h - 3, r));
        label(g, b, text, fam, 800, '#FFFFFF');
      },
    },
  };

  return { FRAMES, BUTTONS };
})();
