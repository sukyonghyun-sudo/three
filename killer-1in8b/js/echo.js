// echo: what you did as a child comes back when you are grown. Each childhood choice that leaves a mark is
// remembered on the spot (◆) and returns once in adult life; the ending's life story tells it too
'use strict';

// childhood picture key -> choice index -> the mark it leaves
const KID_MARK = {
  child_mother: { 0: '그 손은 언젠가 다시 뻗어진다' },
  child_father: { 1: '손바닥 흉터는 평생 남는다' },
  child_bird: { 1: '그 참새는 잊히지 않는다' },
  child_class: { 0: '그 웃음은 평생의 가면이 된다' },
  child_rabbit: { 0: '교장은 그 아침을 평생 기억한다' },
  child_fire: { 0: '그 창고 화재는 미제로 남는다' },
  teen_roof: { 1: '그 남자는 그날 밤의 발소리를 기억한다' },
  teen_knife: { 1: '어머니는 그 새벽을 기억한다' },
};
function kidChoice(ev, i) {
  const S = G.S;
  (S.kid = S.kid || {})[ev.img] = i;
  const m = KID_MARK[ev.img] && KID_MARK[ev.img][i];
  if (m) remember(m);
}
const kidDid = (S, img, i) => !!S.kid && S.kid[img] === i;

const SIR = S => (S.sex === 'm' ? '아저씨' : '아줌마');
ARCS.push(
  { k: 'e_mother', when: (S, a) => a >= 30 && a <= 58 && kidDid(S, 'child_mother', 0), run: async S => {
    SND.play('knock', .9);
    await UI.scene({ img: 'p_door', vcap: '문 앞', cap: '늙은 여자가 문 앞에 서 있었다. 가방 하나. 다섯 살 때 골목을 내려가던 그 가방이었다. 어머니였다.', ins: ['i_knob'] });
    const i = await UI.choose([{ t: '손을 뻗는다', d: '그날처럼' }, { t: '문을 닫는다' }], { title: '' });
    if (i === 0) { addLife('bond', 15); addLife('void', -15); UI.diary('손을 뻗었다. 이번엔 무언가 잡혔다. 마르고 차가운 손.'); }
    else { addLife('void', 12); S.urge = clamp(S.urge + 6, 0, 100); UI.diary('문을 닫았다. 문 너머에서 오래 기침 소리가 났다.', 'red'); }
    await UI.next(2400);
  } },
  { k: 'e_father', when: (S, a) => a >= 30 && a <= 58 && kidDid(S, 'child_father', 1), run: async S => {
    SND.play('phone', .8);
    await UI.scene({ img: 'job_hospital', vcap: '요양병원', cap: '아버지가 나를 찾는다는 전화. 손바닥의 흉터가 욱신거렸다. 다섯 살, 깨진 소주병.' });
    const i = await UI.choose([{ t: '간다' }, { t: '가지 않는다' }], { title: '' });
    if (i === 0) { addLife('bond', 6); UI.diary('아버지가 내 손바닥 흉터를 만지며 울었다. 너무 늦었다. 둘 다.'); }
    else { addLife('void', 8); UI.diary('가지 않았다. 흉터는 그날 밤 내내 욱신거렸다.'); }
    await UI.next(2400);
  } },
  { k: 'e_bird', when: (S, a) => a >= 24 && a <= 50 && kidDid(S, 'child_bird', 1), run: async S => {
    await UI.scene({ img: 'child_bird', vcap: '참새', cap: `옆집 아이가 죽은 참새를 두 손에 들고 왔다. “${SIR(S)}, 이거 어떻게 해요?” 일곱 살의 복도가 생각났다.`, ins: ['i_eye'] });
    const i = await UI.choose([{ t: '같이 화단에 묻어 준다' }, { t: '날개 펴는 법을 보여 준다', red: 1 }], { title: '' });
    if (i === 0) { addLife('void', -8); UI.diary('같이 묻었다. 다음 날 파 보지 않았다. 처음으로.'); }
    else { S.urge = clamp(S.urge - 8, 0, 100); S.susp = clamp(S.susp + 10, 0, 100); UI.diary('아이 엄마가 달려와 아이 손을 잡아끌었다. 그 뒤로 그 집 창문은 늘 닫혀 있었다.', 'red'); }
    await UI.next(2400);
  } },
  { k: 'e_smile', when: (S, a) => a >= 22 && a <= 45 && kidDid(S, 'child_class', 0), run: async S => {
    await UI.scene({ img: 'life_coworker', vcap: '회식', cap: '다들 나를 잘 웃는 사람이라고 한다. 아홉 살, 빨간 도화지 앞에서 배운 웃음이다.' });
    const i = await UI.choose([{ t: '웃는다', d: '언제나처럼' }, { t: '오늘은 웃지 않는다' }], { title: '' });
    if (i === 0) { S.susp = clamp(S.susp - 10, 0, 100); UI.diary('웃었다. 다들 따라 웃었다. 아무도 내 눈을 보지 않았다.'); }
    else { S.susp = clamp(S.susp + 5, 0, 100); addLife('bond', -5); UI.diary('웃지 않았다. 자리가 조용해졌다. 누군가 내가 화났냐고 물었다.'); }
    await UI.next(2200);
  } },
  { k: 'e_rabbit', when: (S, a) => a >= 26 && a <= 48 && kidDid(S, 'child_rabbit', 0), run: async S => {
    await UI.scene({ img: 'city_day', vcap: '시장', cap: '시장에서 늙은 교장과 마주쳤다. 교장이 걸음을 멈췄다. 지팡이가 떨렸다. “너… 그 토끼장 아이구나.”' });
    const i = await UI.choose([{ t: '모른 척 지나간다' }, { t: '웃으며 인사한다', d: '“선생님, 건강하세요.”' }], { title: '', time: 5000 });
    if (i === 1 && chance(.4 + trait('cal') * .1)) UI.diary('교장은 고개를 끄덕였다. 사람을 잘못 봤다고 했다.');
    else { S.susp = clamp(S.susp + 8, 0, 100); if (S.serial) S.police = clamp(S.police + 4, 0, 100); UI.diary('교장이 한참 뒤에서 나를 봤다. 집에 가서 누군가에게 전화를 걸 것이다.', 'red'); }
    await UI.next(2400);
  } },
  { k: 'e_fire', when: (S, a) => a >= 25 && a <= 55 && kidDid(S, 'child_fire', 0), run: async S => {
    await UI.scene({ img: 'm_newspaper', vcap: '그때 그 사건', cap: '흑천일보 「그때 그 사건」 코너. 공터 창고 화재. 범인은 끝내 밝혀지지 않았다. 사진 속 구경꾼들 사이에 열한 살짜리가 서 있다.' });
    const i = await UI.choose([{ t: '신문을 오려 둔다', red: 1 }, { t: '넘긴다' }], { title: '' });
    if (i === 0) { S.urge = clamp(S.urge - 6, 0, 100); UI.diary('오려서 서랍에 넣었다. 첫 번째 기념품.', 'red'); }
    else UI.diary('넘겼다. 손가락에 잉크가 묻었다.');
    await UI.next(2200);
  } },
  { k: 'e_roof', when: (S, a) => a >= 22 && a <= 42 && kidDid(S, 'teen_roof', 1), run: async S => {
    await UI.scene({ img: 'life_bus', vcap: '버스', cap: '버스에서 낯익은 뒷모습을 봤다. 열네 살 때 집 대문까지 따라갔던 남자. 머리가 하얗게 셌다.' });
    const i = await UI.choose([{ t: '또 따라 내린다', red: 1 }, { t: '종점까지 간다' }], { title: '', time: 5000 });
    if (i === 0) { S.urge = clamp(S.urge - 10, 0, 100); S.susp = clamp(S.susp + 6, 0, 100); UI.diary('대문 앞에서 그가 돌아봤다. 나를 알아본 것 같았다. 이십 년 전에도.', 'red'); }
    else UI.diary('종점까지 갔다. 창에 비친 내 얼굴을 보지 않았다.');
    await UI.next(2400);
  } },
  { k: 'e_knife', when: (S, a) => a >= 28 && a <= 58 && kidDid(S, 'teen_knife', 1) && S.family !== 'orphan', run: async S => {
    await UI.scene({ img: 'c_room', vcap: '명절', cap: '명절에 본가에서 잤다. 새벽, 안방 문이 딸깍 잠기는 소리. 열여섯 그 새벽 이후로 어머니는 평생 그랬다고 동생이 말했다.' });
    const i = await UI.choose([{ t: '안방 문 앞에 선다', red: 1 }, { t: '돌아눕는다' }], { title: '' });
    if (i === 0) { S.susp = clamp(S.susp + 6, 0, 100); UI.diary('문 너머에서 숨소리가 멎었다. 어머니도 깨어 있었다. 아침까지 둘 다 움직이지 않았다.', 'red'); }
    else { addLife('void', 10); addLife('bond', -6); UI.diary('돌아누웠다. 잠긴 문 너머의 숨소리를 아침까지 셌다.'); }
    await UI.next(2400);
  } },
);

// the childhood lines of the ending's life story: [age, text]
function kidStory(S) {
  const K = S.kid || {}, out = [];
  if (K.child_mother === 0) out.push([5, '다섯 살, 새벽 골목을 내려가는 어머니에게 손을 뻗었다. 아무것도 잡히지 않았다.']);
  if (K.child_mother === 1) out.push([5, '다섯 살, 집을 나가는 어머니를 보고도 울지 않았다. 그 뒤로 운 적이 없다.']);
  if (K.child_father === 1) out.push([5, '다섯 살, 깨진 소주병 조각을 쥐었다. 손바닥이 찢어졌는데 아프지 않았다.']);
  if (K.child_bird === 1) out.push([7, '일곱 살, 죽은 참새의 날개를 하나씩 폈다.']);
  if (K.child_bird === 0) out.push([7, '일곱 살, 죽은 참새를 화단에 묻어 주었다. 다음 날 파 보았다.']);
  if (K.child_rabbit === 0) out.push([11, '열한 살, 학교 토끼장. 다음 날 아침 조회에서 교장이 울었다.']);
  if (K.child_rabbit === 1) out.push([11, '열한 살, 가위를 들고 토끼장 앞까지 갔다가 돌아섰다.']);
  if (K.child_fire === 0) out.push([11, '열한 살, 공터 창고에 불을 붙이고 소방차가 올 때까지 봤다.']);
  if (K.teen_knife === 1) out.push([16, '열여섯, 새벽 세 시에 식칼을 들고 부모의 방문 앞에서 동이 틀 때까지 서 있었다.']);
  if (K.teen_knife === 0) out.push([16, '열여섯, 새벽에 식칼을 들었다가 제자리에 걸어 두었다.']);
  // the ending keeps two of them: the earliest and the darkest
  if (out.length > 2) return [out[0], out[out.length - 1]];
  return out;
}
