// the rest of a life: money, health, people, emptiness; milestones; the world outside; the life review
'use strict';

// ------------------------------------------------------------------ the world, one line a year
D.WORLD = {
  1953: '휴전. 라디오에서 아무도 박수를 치지 않았다.', 1962: '쌀값이 올랐다고 어른들이 수군거렸다.', 1966: '동네에 처음으로 텔레비전이 들어왔다.',
  1970: '고속도로가 뚫렸다. 서울이 가까워졌다고 했다.', 1973: '기름값이 올랐다. 연탄 줄이 길어졌다.', 1977: '수출 100억 달러. 공장 굴뚝이 늘었다.',
  1983: '텔레비전이 밤새 이산가족을 찾았다. 우는 사람들을 오래 봤다.', 1986: '아시안게임. 거리에 태극기가 걸렸다.', 1988: '서울 올림픽. 온 나라가 들떠 있었다.',
  1993: '대전 엑스포. 꿈돌이 인형이 팔렸다.', 1997: '외환위기. 공장 사람들이 하나둘 사라졌다. 다른 의미로.', 1998: '금 모으기. 사람들이 반지를 빼서 줄을 섰다.',
  2002: '월드컵 4강. 모르는 사람들이 길에서 껴안았다.', 2004: 'KTX가 개통됐다. 흑천에서 서울까지 두 시간.', 2008: '금융위기. 뉴스가 숫자로 가득했다.',
  2009: '모두가 손안의 화면을 들여다본다. 아무도 옆 사람을 보지 않는다.', 2018: '평창 올림픽. 눈이 많이 왔다.', 2020: '전염병. 모두가 마스크를 썼다. 얼굴을 가린 사람들 속에서 처음으로 편했다.',
  2023: '마스크를 벗었다. 다시 얼굴들이 보인다.', 2030: '자율주행 택시가 흑천에도 들어왔다.', 2038: '정년이 일흔으로 늘었다.', 2045: '인구가 줄었다는 뉴스. 흑천의 빈집이 늘었다.',
  2055: '로봇이 요양병원 복도를 닦는다.', 2066: '인구 80억이 꺾였다는 뉴스. 그중 하나가 줄어드는 건 아무 일도 아니다.',
};

// ------------------------------------------------------------------ numbers of a life
function lifeInit(S) {
  if (S.life) return;
  const rich = S.family === 'rich' ? 30 : S.family === 'poor' || S.family === 'orphan' ? -10 : 0;
  S.life = { money: clamp(20 + rich, 0, 100), health: 92, bond: S.family === 'orphan' ? 10 : 25, void: 20 };
  S.yhist = S.yhist || [];
  S.myLife = S.myLife || [];
}
const L$ = () => G.S.life;
function addLife(k, v) { const L = L$(); if (L) L[k] = clamp(L[k] + v, 0, 100); }
function lifeLine(age, text) { (G.S.myLife = G.S.myLife || []).push([age, text]); }

function lifeSeason(S) {
  lifeInit(S);
  const L = S.life, age = AGE();
  if (age >= 18) {
    const pay = S.job ? (S.job === 'taxi' ? 1.2 : S.job === 'hospital' ? 1 : 1.4) : -.5;
    L.money = clamp(L.money + pay - (S.married ? .4 : 0) - (S.kids ? .4 : 0), 0, 100);
  }
  if (age >= 40) L.health = clamp(L.health - (age - 35) * .018, 0, 100);
  L.bond = clamp(L.bond + (S.married ? .3 : S.love ? .2 : -.25) + (S.kids ? .2 : 0), 0, 100);
  L.void = clamp(L.void + (L.bond < 25 ? .6 : -.3) + (S.urge > 70 ? .5 : 0), 0, 100);
}

function lifeYear(S) {
  lifeInit(S);
  const age = AGE(), L = S.life;
  const kills = S.victims.filter(v => ageOf(v.t) === age - 1).length;
  S.yhist.push([age, Math.round(S.urge), Math.round(S.police), Math.round(L.money), Math.round(L.health), Math.round(L.bond), Math.round(L.void), kills]);
  const w = D.WORLD[YEAR()];
  if (w) { UI.diary('세상. ' + w, 'hear'); if (S.flags) S.flags.worldShown = YEAR(); }
  if (YEAR() === 1997 && S.job && chance(.5)) { addLife('money', -25); lifeLine(age, '외환위기. 월급이 반으로 줄었다.'); }
  if (YEAR() === 2020) S.flags.pandemic = 1;
  if (YEAR() === 2023) S.flags.pandemic = 0;
}

// ------------------------------------------------------------------ milestones (ordinary life)
const MILESTONES = [
  { age: 12, img: 'child_class', tag: '중학교', cap: '중학교에 들어갔다. 교복이 컸다. 첫 시험지를 받았다.',
    ch: [['공부한다', '혼자 하는 일은 잘한다.', () => { bump({ int: 1 }); lifeLine(12, '반에서 3등을 했다.'); }],
         ['맨 뒷자리에서 창밖을 본다', '아무도 말을 걸지 않았다.', () => { addLife('void', 8); lifeLine(12, '맨 뒷자리. 창밖만 봤다.'); }],
         ['싸움을 건다', '이겼다. 선생님이 부모를 불렀다.', () => { bump({ str: 1, imp: 1 }); lifeLine(12, '처음 싸워서 이겼다.'); }]] },
  { age: 17, img: 'city_day', tag: '진로', cap: '고3. 담임이 진로 상담 종이를 내밀었다. 대학에 갈 것인가.',
    ch: [['대학에 간다', '흑천전문대. 등록금은 빚이다.', () => { bump({ int: 1 }); addLife('money', -15); G.S.flags.college = 1; lifeLine(18, '흑천전문대에 들어갔다.'); }],
         ['바로 일한다', '공장은 언제나 사람을 구한다.', () => { addLife('money', 12); lifeLine(18, '졸업하자마자 일했다.'); }]] },
  { age: 20, when: S => S.sex === 'm', img: 'city_day', tag: '입대', cap: '입영 통지서가 왔다. 머리를 밀었다. 거울을 보지 않았다.',
    ch: [['사격장에서 만점을 받는다', '조교가 칭찬했다. 손이 떨리지 않았다.', () => { bump({ cal: 1 }); lifeLine(20, '군대. 사격 만점.'); }],
         ['조용히 2년을 버틴다', '아무 일도 없었다. 그게 제일 어려웠다.', () => { addLife('bond', 6); lifeLine(20, '군대. 아무 일도 없었다.'); }]],
    after: S => { S.urge = clamp(S.urge - 10, 0, 100); } },
  { age: 20, when: S => S.sex === 'f', img: 'c_jachi', tag: '자취', cap: '처음으로 혼자 사는 방. 문을 잠그는 소리가 좋았다.',
    ch: [['창문에 신문지를 바른다', '밖에서 안이 보이지 않게.', () => { addLife('void', 5); lifeLine(20, '첫 자취. 창에 신문지를 발랐다.'); }],
         ['화분을 하나 산다', '물을 줄 게 생겼다.', () => { addLife('bond', 5); lifeLine(20, '첫 자취. 화분 하나.'); }]] },
  { age: 31, img: 'city_day', tag: '집', cap: '은행 창구 직원이 대출 서류를 밀었다. 지하가 아닌 집.',
    ch: [['빚을 내서 산다', '마당이 있는 집. 땅을 팔 수 있다.', () => { addLife('money', -20); G.S.flags.house = 1; lifeLine(31, '마당 있는 집을 샀다.'); }],
         ['반지하에 남는다', '창밖의 발목들이 좋다.', () => { addLife('money', 5); lifeLine(31, '반지하에 남았다.'); }]] },
  { age: 43, when: S => S.family !== 'orphan', img: 'job_hospital', tag: '병원', cap: '어머니가 쓰러졌다는 전화. 요양병원 원무과가 비용을 불렀다.',
    ch: [['매주 찾아간다', '어머니는 나를 몰라봤다. 그래도 갔다.', () => { addLife('money', -12); addLife('bond', 10); lifeLine(43, '어머니 병간호.'); }],
         ['돈만 보낸다', '가지 않았다.', () => { addLife('money', -12); addLife('void', 6); lifeLine(43, '어머니에게 돈만 보냈다.'); }],
         ['연락을 끊는다', '전화번호를 바꿨다.', () => { addLife('void', 12); addLife('money', 4); lifeLine(43, '어머니와 연락을 끊었다.'); }]] },
  { age: 52, when: S => !!S.job, img: 'life_coworker', tag: '명예퇴직', cap: '회의실에 불려 갔다. 명예퇴직 서류. 스물몇 해를 한 장으로.',
    ch: [['서명한다', '퇴직금. 그리고 매일 비는 낮.', () => { addLife('money', 15); G.S.job = null; lifeLine(52, '명예퇴직.'); }],
         ['버틴다', '책상이 창가로 옮겨졌다.', () => { addLife('void', 8); lifeLine(52, '명예퇴직을 거부했다. 창가 자리.'); }]] },
  { age: 63, img: 'life_old', tag: '은퇴', cap: '이제 아무도 나를 찾지 않는다. 시간이 남는다. 너무 많이.',
    ch: [['공원에 나간다', '노인들이 장기를 둔다. 끼워 줬다.', () => { addLife('bond', 10); addLife('health', 4); lifeLine(63, '공원 장기판 친구들.'); }],
         ['텔레비전 앞에 앉는다', '옛날 사건을 다시 다룬다.', () => { addLife('void', 8); lifeLine(63, '텔레비전 앞의 날들.'); }]] },
];

async function milestone(age) {
  const S = G.S;
  for (const m of MILESTONES) {
    if (m.age !== age || (m.when && !m.when(S))) continue;
    cov('ms:' + m.tag);
    S.flags.msAge = age;
    await UI.scene({ img: m.img, vcap: m.tag, cap: m.cap });
    const i = await UI.choose(m.ch.map(c => ({ t: c[0] })));
    const c = m.ch[i];
    c[2]();
    if (m.after) m.after(S);
    UI.diary(c[1]);
    await UI.hcap(c[1]);
    await UI.next(2200);
    return;
  }
}

// ------------------------------------------------------------------ things to do besides hunting
function lifeActions(a) {
  const S = G.S;
  if (AGE() < 18) return;
  if (S.job) a.push({ k: 'work', t: '일에 매달린다', d: '돈이 모인다. 손이 바쁘면 덜 배고프다' });
  a.push({ k: 'people', t: '사람들과 어울린다', d: '의심이 줄고 덜 공허하다' });
  if (L$() && L$().health < 70) a.push({ k: 'rest', t: '병원에 간다', d: '몸부터 챙긴다' });
  a.push({ k: 'walk', t: '밤거리를 걷는다', d: '보기만 한다. 굶주림이 조금 잦아든다' });
}
async function lifeRequest(r) {
  const S = G.S;
  if (r === 'work') {
    await UI.scene({ img: D.JOBS[S.job] ? D.JOBS[S.job].img : 'city_day', vcap: '일', cap: pick(['야근을 자청했다. 반장이 어깨를 두드렸다.', '쉬는 날에도 나갔다. 일하는 동안엔 아무 생각도 나지 않는다.', '월급봉투가 두꺼워졌다. 쓸 데가 없다.']) });
    addLife('money', 8); addLife('health', -2); S.urge = clamp(S.urge - 2, 0, 100); S.susp = clamp(S.susp - 2, 0, 100);
    UI.diary('일만 했다.'); await UI.next(2000); return true;
  }
  if (r === 'people') {
    await UI.scene({ img: 'life_coworker', vcap: '사람들', cap: pick(['동창회에 나갔다. 다들 나를 착한 아이로 기억했다.', '이웃 할머니 짐을 날라 드렸다. 떡을 받았다.', '조기축구회에 들었다. 패스를 받으면 다들 박수를 쳤다.']) });
    addLife('bond', 8); addLife('void', -6); addLife('money', -3); S.susp = clamp(S.susp - 3, 0, 100);
    UI.diary('사람들 틈에 있었다. 다들 나를 좋은 사람이라고 한다.'); await UI.next(2000); return true;
  }
  if (r === 'rest') {
    await UI.scene({ img: 'job_hospital', vcap: '병원', cap: '의사가 혈압을 쟀다. 숫자가 높다고 했다. 약을 받아 왔다.' });
    addLife('health', 12); addLife('money', -6);
    UI.diary('병원. 약 봉투.'); await UI.next(1800); return true;
  }
  if (r === 'walk') {
    await UI.scene({ img: pick(['city_night', 'life_bus', 'p_cctv']), vcap: '밤', cap: pick(['아무도 따라가지 않았다. 그냥 걸었다. 창문의 불빛을 셌다.', '골목마다 누군가 혼자 걷고 있었다. 보기만 했다.', '막차를 타고 종점까지 갔다가 걸어서 돌아왔다.']) });
    S.urge = clamp(S.urge - 6, 0, 100); S.susp = clamp(S.susp + 3, 0, 100); addLife('void', 2);
    UI.diary('밤거리를 걸었다. 보기만 했다.'); await UI.next(1800); return true;
  }
  return false;
}

// ------------------------------------------------------------------ the life review (ending)
function othersLifespan(p) {
  const S = G.S;
  if (p.killedByMe || p.dead) { const d = p.life.find(l => /실종|죽었다|사망/.test(l[1])); return d ? d[0] : (D.ROLES[p.role].dies || ageOf(S.t)); }
  if (p.span == null) p.span = { det: rint(72, 86), reporter: rint(66, 84), doctor: rint(78, 92), abroad: rint(80, 95), spouse: rint(70, 88), target: rint(74, 90), early: 17 }[p.role] || rint(70, 85);
  return p.span;
}

function buildReview() {
  const S = G.S, L = S.life || { money: 0, health: 0, bond: 0, void: 0 };
  const born = `${S.born.y}.${S.born.m}.${S.born.d}`;
  const days = Math.round(S.deathAge * 365.25 + rint(0, 360));
  const nf = S.victims.filter(v => v.found).length;
  const lovers = (S.myLife || []).filter(l => /만났다\./.test(l[1])).length;
  const moves = S.diary.filter(d => /로 이사했다/.test(d.text)).length;
  const ppl = [{ me: 1, name: S.name, role: '나', span: S.deathAge, face: null, fate: D.END[S.ending] ? D.END[S.ending].stamp : '' },
    ...S.others.map(p => ({ name: p.name, role: D.ROLES[p.role].tag || '같은 날 태어남', span: othersLifespan(p), face: p.face, fate: p.killedByMe ? '나에게 죽었다' : p.dead ? '일찍 죽었다' : (p.fate || D.ROLES[p.role].fate) }))];
  const longest = ppl.reduce((a, b) => (b.span > a.span ? b : a));
  const myRank = [...ppl].sort((a, b) => b.span - a.span).findIndex(p => p.me) + 1;
  const tiles = [
    ['산 날', days.toLocaleString() + '일'], ['피해자', S.victims.length + '명'], ['끝내 못 찾은 시신', (S.victims.length - nf) + '구'],
    ['연인', lovers + '명'], ['결혼', S.myLife && S.myLife.some(l => /결혼했다/.test(l[1])) ? '했다' : '안 했다'], ['이사', moves + '번'],
    ['마지막 돈', Math.round(L.money)], ['마지막 건강', Math.round(L.health)], ['곁에 남은 사람', Math.round(L.bond)],
  ];
  const tl = [...(S.myLife || [])];
  S.victims.forEach(v => tl.push([ageOf(v.t), `${v.name}${josa(v.name, '이', '가')} 사라졌다.`, 'k']));
  Object.entries(D.WORLD).forEach(([y, t]) => { const a = +y - S.born.y; if (a >= 0 && a <= S.deathAge) tl.push([a, t.split('.')[0] + '.', 'w']); });
  tl.sort((a, b) => a[0] - b[0]);
  const sum = [
    `${S.born.y}년 ${D.CITY}에서 태어난 ${S.sex === 'm' ? '남자' : '여자'} 아이.`,
    `${S.deathAge}년을 살았다. 같은 날 태어난 다섯 명 중 ${myRank}번째로 오래 살았다.`,
    S.victims.length ? `그 사이 ${S.victims.length}명이 사라졌고, ${S.victims.length - nf}명은 끝내 돌아오지 않았다.` : '끝내 아무도 죽이지 않았다.',
    `80억 명 중 한 사람. 그리고 그중 단 한 명.`,
  ];
  if (S.epithet) sum.splice(3, 0, `세상은 이 사람을 「${S.epithet}」${josa(S.epithet, '이라고', '라고')} 불렀다.`);
  $('#rv').innerHTML = `
    <div class="rv-hd"><div class="rv-k">80억분의 1 · 일생 돌아보기</div><div class="rv-n">${S.name}</div><div class="rv-d">${born} – ${S.deathYear} · ${S.deathAge}세 · ${S.sex === 'm' ? '남' : '여'} · ${D.END[S.ending].stamp}</div></div>
    <div class="rv-sum">${sum.map(x => `<p>${x}</p>`).join('')}</div>
    ${(S.marks || []).length ? `<div class="rv-sec">이 결말에 이른 갈림길</div><div class="rv-marks">${S.marks.map(m => `<div><i>${m[0]}세</i>◆ ${m[1]}</div>`).join('')}<div class="end"><i>${S.deathAge}세</i>${D.END[S.ending].stamp}</div></div>` : ''}
    ${(S.chapters || []).length ? `<div class="rv-chs">${S.chapters.map((c, i) => `<span><small>${i + 1}장 · ${c[0]}세</small>${c[1]}</span>`).join('')}</div>` : ''}
    <div class="rv-sec">일생의 곡선</div>
    <div class="rv-leg"><span class="u">굶주림</span><span class="p">수사망</span><span class="m">돈</span><span class="h">건강</span><span class="b">사람</span></div>
    <canvas id="rvgraph" width="1100" height="380"></canvas>
    <div class="rv-sec">숫자로 본 일생</div>
    <div class="rv-tiles">${tiles.map(t => `<div><i>${t[0]}</i><b>${t[1]}</b></div>`).join('')}</div>
    <div class="rv-sec">같은 날, 같은 병원에서 태어난 다섯</div>
    <div class="rv-cmp">${ppl.map(p => `<div class="rv-p${p.me ? ' me' : ''}">
        <div class="rv-ph" style="${p.face ? `background-image:url(${IMG(p.face)})` : ''}">${p.me ? '<b>?</b>' : ''}</div>
        <div class="rv-pi"><div class="rv-pn">${p.name}<em>${p.role}</em></div>
        <div class="rv-bar"><i style="width:${Math.min(100, p.span)}%"></i><span>${p.span}세${p === longest ? ' · 가장 오래' : ''}</span></div>
        <div class="rv-pf">${p.fate}</div></div></div>`).join('')}</div>
    <div class="rv-sec">연표</div>
    <div class="rv-tl">${tl.map(t => `<div class="${t[2] || ''}"><i>${t[0]}세</i>${t[1]}</div>`).join('')}</div>
    <div class="rv-sec">결말 수집 ${endingsSeen().length} / ${Object.keys(D.END).length}</div>
    <div class="rv-ends">${Object.entries(D.END).map(([k, e]) => endingsSeen().includes(k) || k === S.ending ? `<span class="${k === S.ending ? 'now' : ''}">${e.stamp}</span>` : '<span class="no">？？？</span>').join('')}</div>`;
  drawReviewGraph();
}

function drawReviewGraph() {
  const S = G.S, c = $('#rvgraph');
  if (!c) return;
  const ctx = c.getContext('2d'), W = c.width, H = c.height;
  const h = S.yhist || [];
  ctx.clearRect(0, 0, W, H);
  const x0 = 50, x1 = W - 20, y0 = 20, y1 = H - 40, maxA = Math.max(S.deathAge || 1, 1);
  const X = a => x0 + (x1 - x0) * a / maxA, Y = v => y1 - (y1 - y0) * v / 100;
  ctx.strokeStyle = 'rgba(236,233,228,.18)'; ctx.lineWidth = 1;
  ctx.font = '16px "Nanum Gothic Coding", monospace'; ctx.fillStyle = 'rgba(236,233,228,.55)';
  for (let a = 0; a <= maxA; a += 10) { ctx.beginPath(); ctx.moveTo(X(a), y0); ctx.lineTo(X(a), y1); ctx.stroke(); ctx.fillText(a + '세', X(a) - 12, y1 + 24); }
  [0, 50, 100].forEach(v => { ctx.beginPath(); ctx.moveTo(x0, Y(v)); ctx.lineTo(x1, Y(v)); ctx.stroke(); ctx.fillText(v, 8, Y(v) + 5); });
  const line = (i, color, w, dash) => {
    if (h.length < 2) return;
    ctx.setLineDash(dash || []); ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath();
    h.forEach((r, k) => { k ? ctx.lineTo(X(r[0]), Y(r[i])) : ctx.moveTo(X(r[0]), Y(r[i])); });
    ctx.stroke(); ctx.setLineDash([]);
  };
  line(3, '#c9a64a', 2, [6, 5]);      // 돈
  line(4, '#6f9a6a', 2, [2, 4]);      // 건강
  line(5, '#8a93c9', 2);              // 사람
  line(2, '#ece9e4', 2.6);            // 수사망
  line(1, '#c01818', 3);              // 굶주림
  ctx.strokeStyle = '#c01818'; ctx.lineWidth = 2.5;
  S.victims.forEach(v => { const x = X(ageOf(v.t)); ctx.beginPath(); ctx.moveTo(x - 6, y1 + 4); ctx.lineTo(x + 6, y1 + 16); ctx.moveTo(x + 6, y1 + 4); ctx.lineTo(x - 6, y1 + 16); ctx.stroke(); });
}
