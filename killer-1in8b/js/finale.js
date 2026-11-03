// finale: after the last scene and before the case file — what the world called you, the life told as a story,
// the people you took and what they left behind, what people said, one closing line
'use strict';

function isCaught(kind) {
  const E = D.END[kind];
  return E.caught != null ? E.caught : !['unsolved', 'nocase', 'fight', 'none'].includes(kind);
}

// ------------------------------------------------------------------ the name the world gives you, and why
function verdict(S) {
  const V = S.victims, n = V.length, kind = S.ending, A = S.arc || {}, caught = isCaught(kind);
  const unf = V.filter(v => !v.found).length;
  const lover = V.find(v => v.lover || v.spouseKill);
  const friend = V.find(v => v.job === '형사' && v.sameDay);
  const same = V.filter(v => v.sameDay).length;
  const young = n ? V.reduce((a, v) => (v.age < a.age ? v : a)) : null;
  const parent = S.sex === 'm' ? '아버지' : '어머니';
  if (D.END[kind].happy) return happyVerdict(S, kind);
  const why = [];
  let t;
  if (!n) t = '아무것도 아니었던 사람';
  else if (A.kid === 'heir') { t = '괴물을 낳은 괴물'; why.push('자기 아이에게 매듭 묶는 법을 가르쳤다. 죽은 뒤에도 흑천의 실종은 멈추지 않았다.'); }
  else if (lover) { t = '사랑한 사람까지 죽인 인간쓰레기'; why.push(`${nj(lover.name, '은', '는')} 이 사람을 사랑했다. 그래서 가장 가까이 있었고, 그래서 죽었다.`); }
  else if (friend) { t = '친구를 판 인간쓰레기'; why.push(`${nj(friend.name, '은', '는')} 아홉 살 때부터 이 사람을 친구라고 불렀다. 마지막 술자리까지.`); }
  else if (A.scape) { t = '남의 인생까지 훔친 비겁자'; why.push(`${nj(A.scapeName, '이', '가')} 대신 감옥에 갔다. 이 사람은 그 선고를 방청석 맨 뒷줄에서 들었다.`); }
  else if (n >= 8) t = '흑천 최악의 인간쓰레기';
  else if (kind === 'confess' || kind === 'courtroom') { t = '끝내 겁먹은 살인자'; why.push('스스로 걸어 들어갔다. 용서받으려던 건 아니었다. 그냥 무서워졌다.'); }
  else if (n === 1 && caught) { t = '한 번 만에 잡힌 얼간이'; why.push('첫 번째에서 끝났다. 흑천경찰서는 이 사건을 신입 교육 자료로 쓴다.'); }
  else if (S.married && S.kids && !caught) { t = `좋은 ${parent}의 얼굴을 한 괴물`; why.push(`아이의 운동회에 빠짐없이 갔다. 같은 주에 사람을 묻은 적도 있다.`); }
  else if (unf >= 3) t = '저수지에 사람을 쌓은 자';
  else if (kind === 'stopped') { t = '멈췄지만 용서받지 못한 자'; why.push('어느 날 손을 멈췄다. 멈춘다고 돌아오는 사람은 없었다.'); }
  else t = n >= 4 ? '흑천의 인간쓰레기' : '평범한 얼굴의 인간쓰레기';
  if (!n) why.push('평생 손이 근질거렸지만 끝내 아무도 죽이지 않았다.', '세상은 이 사람을 기억하지 않는다. 그것이 이 사람이 세상에 한 유일한 친절이었다.');
  if (n) why.push(`${n}명을 죽였다. ${unf ? `그중 ${unf}명은 끝내 가족에게 돌아가지 못했다.` : '모두 발견됐다. 온전히 돌아온 사람은 없었다.'}`);
  if (young && young.age < 26) why.push(`가장 어린 피해자 ${nj(young.name, '은', '는')} ${young.age}살이었다.`);
  if (same) why.push(`같은 날 같은 병원에서 태어난 사람을 ${same}명 죽였다.`);
  if (S.trophies) why.push('사람을 냉동고에 넣어 두었다. 그 옆에서 밥을 먹었다.');
  if (S.married && n && !lover) why.push(`${nj(S.married.name, '은', '는')} 옆에서 자는 사람이 무엇인지 몰랐다.`);
  return { t, why: why.slice(0, 4) };
}

// ------------------------------------------------------------------ the life as a story
function lifeStory(S) {
  const fam = D.FAMILIES.find(f => f.k === S.family), V = S.victims, A = S.arc || {}, d = others('det');
  const out = [];
  out.push(`${S.born.y}년 ${D.CITY} ${S.district}, ${fam ? fam.t : '평범한 집'}에서 ${S.sex === 'm' ? '남자' : '여자'} 아이가 태어났다. 이름은 ${S.name}.`);
  if (A.det === 'friend' || A.det === 'killed') out.push(`아홉 살, 괴롭힘당하던 같은 반 아이 대신 코피를 흘렸다. 그 아이 ${nj(d.name, '은', '는')} 커서 형사가 됐다.`);
  else if (A.det === 'rival') out.push(`아홉 살, 같은 반 아이를 웃음거리로 만들었다. 그 아이 ${nj(d.name, '은', '는')} 커서 형사가 됐다.`);
  out.push(S.job ? `열여덟에 ${D.JOBS[S.job] ? D.JOBS[S.job].t : '공장'} 일을 시작했다. 일은 성실했다.` : '열여덟에 집을 나왔다.');
  if (V.length) {
    const f = V[0];
    out.push(`${ageOf(f.t)}살, 첫 번째. ${f.name}(${f.age}${f.job ? ', ' + f.job : ''}). ${f.found ? `${D.DUMP[f.dump] ? D.DUMP[f.dump].s : '어딘가'}에서 발견됐다.` : '끝내 발견되지 않았다.'}`);
  }
  const wed = (S.myLife || []).find(l => /결혼했다/.test(l[1]));
  if (S.married) out.push(`${wed ? wed[0] + '살, ' : ''}${S.married.name}${josa(S.married.name, '과', '와')} 결혼했다.${S.kids ? ' 아이가 하나 태어났다.' : ''}${V.length ? ' 결혼식 날에도 손톱 밑을 오래 닦았다.' : ' 결혼식 날, 자기 손을 오래 내려다봤다. 이 손은 아무도 해치지 않을 거라고.'}`);
  if (S.nick) out.push(`신문은 이 사람을 「${S.nick}」이라고 불렀다. 이웃들은 그 기사를 읽고 이 사람에게 무섭다고 말했다.`);
  if (A.letter >= 2) out.push('신문사에 편지를 보냈다. 자기 문장이 1면에 실리는 걸 즐겼다.');
  if (A.scape) out.push(`${nj(A.scapeName, '이', '가')} 누명을 쓰고 끌려갈 때 아무 말도 하지 않았다.`);
  if (A.det === 'killed') out.push(`같은 날 태어난 친구 ${nj(d.name, '을', '를')} 술자리 끝에 죽였다.`);
  if (A.flee === 'new') out.push(`수배되자 얼굴을 바꾸고 ${S.name}이라는 새 이름으로 살았다.`);
  if (!V.length) out.push(...hopeStory(S));
  if (V.length > 1) {
    const l = V[V.length - 1];
    out.push(`마지막은 ${ageOf(l.t)}살, ${l.name}(${l.age}).${V.length > 2 ? ` 그 사이에 ${V.length - 2}명이 더 있었다.` : ''}`);
  }
  out.push(D.END[S.ending].head);
  return out;
}

// ------------------------------------------------------------------ who they were, what they left behind (never about the body)
const LEFT = [
  v => v.found ? '어머니는 그 뒤로 집 밖에 나오지 않았다.' : `어머니는 실종 전단을 ${8 + v.age % 20}년 동안 새로 붙였다.`,
  v => v.age < 35 ? '결혼을 두 달 앞두고 있었다. 청첩장은 이미 돌려진 뒤였다.' : '퇴근길이었다. 식탁에는 식은 저녁이 차려져 있었다.',
  v => v.age >= 28 ? `${v.age % 2 ? '딸' : '아들'} 하나가 남았다. 그 아이는 커서 ${['형사', '기자', '법의학자'][v.age % 3]}가 됐다.` : '친구들은 그해 졸업 앨범에 빈자리를 하나 남겨 두었다.',
  v => v.found ? '장례식장에는 영정 사진만 있었다. 관은 끝내 열리지 않았다.' : '가족은 사망 신고를 하지 않았다. 서류상으로는 아직 살아 있다.',
  () => '직장 동료들은 그 책상을 일 년 동안 치우지 않았다.',
  () => '아버지는 그해 겨울 술을 끊었다가, 이듬해 봄에 다시 마셨다. 다시는 끊지 않았다.',
  () => '동생은 지금도 그 골목으로 다니지 않는다. 먼 길로 돌아서 간다.',
  v => v.found && !v.identified ? '신원 미상으로 묻혔다. 묘비에는 번호만 있다.' : '생일 케이크가 냉장고에 그대로 있었다. 아무도 버리지 못했다.',
];
function victimsAfter(S) {
  const V = S.victims;
  if (!V.length) return [];
  const pickOut = [];
  const add = v => { if (v && !pickOut.includes(v)) pickOut.push(v); };
  add(V.find(v => v.lover || v.spouseKill)); add(V.find(v => v.sameDay)); add(V[0]); add(V[V.length - 1]);
  V.forEach(v => { if (pickOut.length < 4) add(v); });
  const used = new Set();
  return pickOut.slice(0, 4).map((v, i) => {
    let line;
    if (v.lover || v.spouseKill) line = '이 사람을 사랑했다. 마지막 순간까지 무슨 일인지 몰랐다.';
    else if (v.job === '형사') line = '순직 처리되지 못했다. 시신이 없어서. 동료들이 매년 그날 술을 마신다.';
    else if (v.how === 'extra') line = '그날 새벽 그 자리에 있었다는 이유 하나로.';
    else if (v.sameDay) line = '같은 날 같은 병원에서 태어났다. 신생아실 바로 옆 침대였을지도 모른다.';
    else {
      let k = ([...v.name].reduce((a, c) => a + c.charCodeAt(0), 0) + i) % LEFT.length;
      while (used.has(k)) k = (k + 1) % LEFT.length;
      used.add(k);
      line = LEFT[k](v);
    }
    return { name: v.name, sub: `${v.age}${v.job ? ' · ' + v.job : ''} · ${v.year}년`, line, img: v.found && D.DUMP[v.dump] ? D.DUMP[v.dump].img : null };
  });
}

// ------------------------------------------------------------------ what people said
function quotes(S) {
  const kind = S.ending, caught = isCaught(kind), A = S.arc || {}, V = S.victims, out = [];
  if (D.END[kind].happy) return happyQuotes(S, kind);
  const parent = S.sex === 'm' ? '아버지' : '어머니';
  out.push(S.susp < 45
    ? ['인사 잘하던 사람이었어요. 쓰레기도 꼬박꼬박 분리수거하고. 그런 사람인 줄 정말 몰랐어요.', '같은 골목 이웃']
    : ['눈빛이 이상하다고 몇 번이나 말했잖아요. 아무도 안 믿었지.', '같은 골목 이웃']);
  const JQ = { butcher: ['칼질이 깔끔했어요. 그것뿐이에요.', '도축장 반장'], taxi: ['밤 운전을 유독 좋아했어요. 손님 없는 새벽에도요.', '택시 회사 배차 담당'], hospital: ['영안실 청소를 자원하는 사람은 그 사람뿐이었어요.', '병원 시설과장'], factory: ['냉동창고 열쇠를 늘 몸에 지니고 다녔어요.', '공장 반장'] };
  if (S.job && JQ[S.job]) out.push(JQ[S.job]);
  const spouseDead = V.some(v => v.spouseKill);
  if (S.married && !spouseDead) out.push(caught || kind === 'diary' ? ['같이 산 세월이 전부 거짓말이었어요. 그런데 이상하죠. 좋았던 기억도 진짜예요.', `배우자 ${S.married.name}`] : ['좋은 사람이었어요. 정말로요.', `배우자 ${S.married.name}`]);
  if (A.kid === 'heir') out.push([`${parent}는 좋은 선생이었어요.`, '자녀']);
  else if (A.kid === 'cop') out.push(['제 손으로 채웠어요. 그게 제가 할 수 있는 마지막 효도였어요.', '자녀 · 흑천경찰서 순경']);
  else if (kind === 'diary') out.push(['일기장을 다 읽는 데 사흘이 걸렸어요. 제 생일도 적혀 있었어요. 그날도 누가 사라졌더라고요.', '자녀']);
  const fv = V.find(v => !v.lover && !v.spouseKill && v.job !== '형사');
  if (fv) out.push(caught ? ['그 사람 얼굴을 꼭 보고 싶었어요. 보니까 그냥… 사람이더라고요. 그게 더 무서웠어요.', `${fv.name}의 어머니`] : ['범인이 아직 이 동네 어딘가에 살고 있을 거예요. 장 보러 가면 그 사람이랑 줄을 서 있을지도 몰라요.', `${fv.name}의 어머니`]);
  const d = others('det'), r = others('reporter');
  if (d && !d.dead && V.length) out.push(caught ? ['평범했어요. 너무 평범해서 열두 번을 그냥 지나쳤죠.', `형사 ${d.name}`] : ['그놈은 아직 살아 있어요. 적어도 내가 죽기 전까지는.', `형사 ${d.name}`]);
  else if (r && !r.dead && S.serial) out.push(['그는 특별하지 않았다. 그게 가장 끔찍했다.', `${r.name} 기자, 『흑천의 그림자』에서`]);
  return out.slice(0, 5);
}

function closingLine(S) {
  const n = S.victims.length;
  if (!n && D.END[S.ending].happy) return happyClosing();
  if (!n) return '80억 명 중 한 사람이 조용히 살다 갔다. 아무도 다치지 않았다. 아무도 기억하지 않았다.';
  return `80억 명 중 한 사람이 사라졌다. 세상은 조금도 달라지지 않았다. 다만 ${n}명의 세상은 그날 끝났다.`;
}

// ------------------------------------------------------------------ the sequence
async function finale(kind) {
  const S = G.S;
  const v = verdict(S);
  S.epithet = v.t;
  const life = lifeStory(S), vic = victimsAfter(S), qs = quotes(S);
  if (G.auto) { cov('fin:' + v.t); return; }
  const E = D.END[kind];
  const pages = [
    { bg: E.img, cls: 'verdict', snd: 'stamp', html: `<small>세상은 이 사람을 이렇게 불렀다</small><b>「${v.t}」</b><ul>${v.why.map(w => `<li>${w}</li>`).join('')}</ul>` },
    { bg: 'nursery', cls: 'life', snd: 'page', html: `<small>${S.name}의 일생</small><div class="lines">${life.map((l, i) => `<p style="animation-delay:${.15 + i * .35}s">${l}</p>`).join('')}</div>` },
  ];
  if (vic.length) pages.push({ bg: vic.find(x => x.img) ? vic.find(x => x.img).img : 'city_night', cls: 'vic', snd: 'whisper', html: `<small>남겨진 사람들</small><div class="vl">${vic.map((x, i) => `<div style="animation-delay:${.2 + i * .45}s"><b>${x.name}</b><em>${x.sub}</em><span>${x.line}</span></div>`).join('')}</div>` });
  pages.push({ bg: 'm_tv', cls: 'qs', snd: 'typewriter', html: `<small>사람들의 말</small><div class="ql">${qs.map((q, i) => `<div style="animation-delay:${.2 + i * .5}s"><q>${q[0]}</q><i>— ${q[1]}</i></div>`).join('')}</div>` });
  pages.push({ bg: 'e_funeral', cls: 'close', snd: 'flatline', html: `<b>${S.name}</b><em>${S.born.y} – ${S.deathYear}</em><p>${closingLine(S)}</p>` });
  UI.show('fin');
  SND.heart(0);
  let skip = false;
  $('#fin-skip').onclick = e => { e.stopPropagation(); skip = true; if (G.finTap) G.finTap(); };
  for (const p of pages) {
    if (skip) break;
    $('#fin-bg').style.backgroundImage = `url(${IMG(p.bg)})`;
    const box = $('#fin-box');
    box.className = p.cls; box.innerHTML = p.html; box.scrollTop = 0;
    void box.offsetWidth; box.classList.add('in');
    SND.play(p.snd, .6);
    await new Promise(res => {
      const t0 = performance.now();
      G.finTap = () => { G.finTap = null; res(); };
      $('#fin').onclick = () => { if (performance.now() - t0 > 900 && G.finTap) G.finTap(); };
    });
  }
  $('#fin').onclick = null;
}
