// ===== 곡별 랭킹 (MSW.Ranking) — 일반적인 리듬게임 방식: 곡 · 난이도마다 따로 =====
// 리더보드: score_<곡id>_<easy|normal|hard> (4곡 × 3 = 12개 — 게임당 20개 상한 안)
// 곡 화면 오른쪽 #rankBox: 위쪽 탭(쉬움 · 보통 · 어려움)을 눌러 난이도별 TOP 5 + 내 기록을 봐요. 난이도 카드를 고르면 탭도 같이 바뀌어요
// 한 판 끝나면 그 곡 · 난이도에 점수를 올려요(게스트는 조회만). extras: 정확도(×10) · 최대 콤보 · 풀콤보 여부
(()=>{
const $=id=>document.getElementById(id),box=$('rankBox');if(!box)return;
const DK=['easy','normal','hard'],DN={easy:'쉬움',normal:'보통',hard:'어려움'};
const R=()=>window.MSW&&MSW.Ranking;
const MB=!!window.MOB;   // 모바일 랭킹은 따로 — 곡마다 하나(난이도 통합 · 줄마다 난이도) (2026-10-07 사용자: 「모바일 랭킹은 별도로」 → 「곡별 통합」)
//  모바일 랭킹은 리더보드 대신 공유 저장(MSW.GlobalStorage 'mrank-v1-<곡>', 위 30명)에 둬요 — 리더보드는 게임당 20개까지인데 PC 가 15개를 쓰고,
//  같은 판을 여러 명이 동시에 처음 열면 같은 이름 판이 하나 더 생겨요(미리보기에서 확인) → 모바일 판 5개를 더하면 여유가 없어 PC 랭킹 판까지 막힐 수 있어서
const bName=(sid,d)=>MB?'mrank:'+sid:'score_'+sid+'_'+d,kOf=(sid,d)=>sid+'_'+(MB?'m':d);
const boardOf=(sid,d)=>MB?mBoard(sid):R().board(bName(sid,d),{order:'desc',keep:'best'});
const NAME={};async function nameOf(uid){if(NAME[uid])return NAME[uid];try{const u=await MSW.Users.get(uid);NAME[uid]=(u&&u.nickname)||'플레이어'}catch(e){NAME[uid]='플레이어'}return NAME[uid]}
function me(){try{return MSW.Users.me}catch(e){return null}}
// ----- 모바일 랭킹 저장 (곡별 통합 · 위 30명 · 최고 기록만) — 리더보드와 같은 모양(getEntries · getEntry · submitScore · deleteScore)으로 흉내 내요 -----
const GS=()=>window.MSW&&MSW.GlobalStorage,MKEY=sid=>'mrank-v1-'+sid,MMAX=30,MCACHE={};
const mSort=a=>a.sort((x,y)=>y.s-x.s||(x.t||0)-(y.t||0));
function mList(sid,fresh){const c=MCACHE[sid],now=Date.now();if(!fresh&&c&&now-c.t<4000)return c.p;   // 4초 안에 또 읽으면 같은 답 (곡 하나에 한 번만 받게)
  const p=Promise.resolve().then(()=>GS().get(MKEY(sid))).then(v=>mSort((v&&Array.isArray(v.e)?v.e:[]).filter(x=>x&&x.u&&typeof x.s==='number'&&isFinite(x.s))));
  MCACHE[sid]={t:now,p};p.catch(()=>{if(MCACHE[sid]&&MCACHE[sid].p===p)delete MCACHE[sid]});return p}
const mEntry=(x,rank)=>({rank,userId:x.u,value:x.s,extras:{acc:x.a,combo:x.c,fc:x.f,d:x.d,msg:x.m},updatedAt:x.t,_name:x.n});
async function mPut(sid,e,force){for(let k=0;k<3;k++){const a=(await mList(sid,true)).slice(),i=a.findIndex(x=>x.u===e.u);
    if(!force&&i>=0&&(a[i].s>e.s||(a[i].s===e.s&&(a[i].m||'')===(e.m||''))))return false;   // 최고 기록만 남겨요
    if(i>=0)a.splice(i,1);a.push(e);const keep=mSort(a).slice(0,MMAX);if(!keep.some(x=>x.u===e.u))return false;   // 30위 밖
    await GS().set(MKEY(sid),{v:1,e:keep});delete MCACHE[sid];
    const chk=await mList(sid,true);if(chk.some(x=>x.u===e.u&&x.s===e.s&&(x.m||'')===(e.m||'')))return true}   // 그새 다른 사람이 덮었으면 다시 합쳐서 (3번까지)
  return false}
function mBoard(sid){return {
  getEntries:async({from=1,count=5}={})=>{const a=await mList(sid);return {total:a.length,entries:a.slice(from-1,from-1+count).map((x,i)=>mEntry(x,from+i))}},
  getEntry:async()=>{const m=me();if(!m||!m.userId)return null;const a=await mList(sid),i=a.findIndex(x=>x.u===m.userId);return i<0?null:mEntry(a[i],i+1)},
  submitScore:async({score,extras})=>{const m=me();if(!m||!m.userId||m.isGuest)throw new Error('guest');const x=extras||{};
    return {updated:await mPut(sid,{u:m.userId,n:m.nickname||'플레이어',s:score,a:x.acc,c:x.combo,f:x.fc,d:x.d,m:x.msg||undefined,t:Date.now()})}},
  deleteScore:async()=>{const m=me();if(!m||!m.userId)return;const a=(await mList(sid,true)).filter(x=>x.u!==m.userId);await GS().set(MKEY(sid),{v:1,e:a});delete MCACHE[sid]}}}
// 1위 한마디 (js/top1.js): 곡 · 난이도마다 1위 (이름 · 한마디) 를 기억해 둬요 — 곡 시작 카드(js/songintro.js)가 바로 꺼내 써요
const TOP={},safeMsg=m=>window.TOP1?TOP1.safe(m):'';
const topRec=(e,name)=>e?{userId:e.userId,name:name||'플레이어',value:e.value,msg:safeMsg(e.extras&&e.extras.msg),d:(e.extras&&e.extras.d)||''}:null;   // d: 모바일 판에서 그 기록의 난이도
async function topOf(sid,d,fresh){const k=kOf(sid,d);if(!fresh&&k in TOP)return TOP[k];if(!R())return null;
  try{const res=await boardOf(sid,d).getEntries({from:1,count:1}),e=res&&res.entries&&res.entries[0];return TOP[k]=e?topRec(e,await nameOf(e.userId)):null}catch(err){return TOP[k]||null}}
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// 예시 기록 (디자인 확인용): 그 랭킹에 진짜 기록이 없을 때만 가짜 TOP 5 + 내 순위를 보여 줘요. 「예시」 표시가 붙어요 — 2026-10-06 껐어요 (사용자 요청)
const DEMO=false,DEMO_NAMES=['리듬천재핑크빈','버섯은못참지','슬라임통통','예티의겨울','4배로크는중','둥짝둥짝','메이플드러머','칙칙폭폭하이햇'];
function demo(d){const n=(SONGS[cur].chart.sets[d]||[]).length||150,top=n*1620,o=DK.indexOf(d)*2,pick=i=>DEMO_NAMES[(i+o)%DEMO_NAMES.length];
  const A=[[998,1],[991,1],[976,0],[955,0],[931,0]],F=[1,.968,.931,.894,.857];
  return {list:A.map((a,i)=>({rank:i+1,userId:'demo'+i,_name:pick(i),value:Math.round(top*F[i]/10)*10,extras:{acc:a[0],fc:a[1]}})),
    mine:{rank:[9,12,27][DK.indexOf(d)],userId:'demo_me',_name:(me()&&me().nickname)||'나',value:Math.round(top*.71/10)*10,extras:{acc:884,fc:0}}}}
let view=null,seq=0;
// 판은 한 번만 만들고(머리: 랭킹 · 예시 · 탭), 탭을 누르면 아래 목록(.rklist)만 바꿔요 — 목록 칸 높이는 고정이라 화면이 들썩이지 않아요
function build(){if(box.querySelector('.rklist'))return;box.innerHTML=`<div class="rkh"><svg class="rkc" viewBox="0 0 32 26" aria-hidden="true"><defs><linearGradient id="rkcg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#D6C8FF"/></linearGradient></defs><path d="M4 9.5l6.2 5L16 5.5l5.8 9 6.2-5-2.6 11.5H6.6z"/><path d="M6.4 22h19.2v3H6.4z"/><circle cx="4" cy="8.2" r="2.3"/><circle cx="16" cy="4" r="2.3"/><circle cx="28" cy="8.2" r="2.3"/></svg><span class="rkt">${MB?'모바일 랭킹':'랭킹'}</span><span class="rkx" hidden>예시</span>${MB?'':`<span class="rktabs" role="tablist" aria-label="난이도">${DK.map(d=>`<button class="rktab rk-${d}" role="tab" data-d="${d}" aria-selected="false">${DN[d]}</button>`).join('')}</span>`}</div><div class="rklist" role="tabpanel"></div>`}
function tabs(){box.querySelectorAll('.rktab').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.d===view)))}
// 등급: 결과 화면과 같은 기준 (정확도 97 SS · 93 S · 85 A · 72 B · 그 밑 C)
const grade=a=>a==null?'':a>=970?'SS':a>=930?'S':a>=850?'A':a>=720?'B':'C';
// 줄: 순위(1~3위 메달) · 아바타 얼굴 · 이름(풀콤보 FC) · 점수 · 등급 — 정확도는 등급에 마우스를 올리면
function row(e,mine,i){const rk=e.rank,medal=rk<=3?' m'+rk:'',a=e.extras&&e.extras.acc!=null?e.extras.acc:null,acc=a!=null?(a/10).toFixed(1)+'%':'',fc=e.extras&&e.extras.fc?'<i class="rfc">FC</i>':'',g=grade(a);
  const dd=MB&&e.extras&&DN[e.extras.d]?`<i class="rdf rk-${e.extras.d}">${DN[e.extras.d]}</i>`:'';   /* 모바일 판: 그 기록의 난이도 */
  return `<li class="${mine?'me':''}"><b class="rn${medal}">${rk}</b><span class="av" data-uid="${esc(e.userId||'')}" data-i="${i|0}"><img alt="" decoding="async"></span><span class="nm">${esc(e._name||'')}${mine?'<i class="you">나</i>':''}${fc}${dd}</span><span class="sc">${Number(e.value).toLocaleString()}</span><i class="gr g-${g||'none'}"${acc?` title="정확도 ${acc}"`:''}>${g}</i></li>`}
// 아바타 얼굴: MSW.Avatar 로 그 유저 캐릭터를 그려 머리 쪽만 동그랗게 (한 번 그린 건 기억해요). 예시 기록 · 실패하면 픽몬 도트 캐릭터
const PIXAV=['av_pink','av_boy','av_wink','av_goggle','av_purple','av_black'],pixUrl=i=>{const P=window.ART_PIXEL&&ART_PIXEL.pickmon;return (P&&P[PIXAV[i%PIXAV.length]])||''};
const HEAD={};
function headshot(uid){if(HEAD[uid])return HEAD[uid];const A=window.MSW&&MSW.Avatar,m=me();if(!A)return Promise.reject(new Error('avatar 없음'));
  const self=uid==='demo_me'||(m&&m.userId===uid),o={state:'stand1',expression:'smile'};
  return HEAD[uid]=(self?A.fromSelf(o):A.fromUser(uid,o)).then(av=>{try{av.update(0);const hb=av.calcHitbox(0,0,1);if(!hb||!hb.width)throw new Error('hitbox 없음');
      const S=96,c=document.createElement('canvas');c.width=c.height=S;const x=c.getContext('2d'),k=S*.96/Math.max(hb.width,hb.height*.6),cx=hb.left+hb.width/2,cy=hb.top+hb.height*.3;
      x.imageSmoothingEnabled=false;av.draw(x,S/2-cx*k,S/2-cy*k,k);return c.toDataURL('image/png')}finally{try{av.dispose()}catch(e){}}}).catch(e=>{delete HEAD[uid];throw e})}
function fillAv(root){root.querySelectorAll('.av[data-uid]').forEach(el=>{const uid=el.dataset.uid,img=el.querySelector('img');if(!img||!uid)return;
  const fb=()=>{const u=pixUrl(+el.dataset.i||0);if(u&&img.isConnected){img.src=u;el.classList.add('pix')}};
  if(uid.startsWith('demo')&&uid!=='demo_me'){fb();return}
  headshot(uid).then(u=>{if(img.isConnected){img.src=u;el.classList.remove('pix')}}).catch(fb)})}
// 빈 자리: TOP 5 가 다 안 찼으면 남은 순위를 흐린 줄로 채워요 (판 높이가 늘 같고, 비어 보이지 않게)
const emptyRows=(n,from)=>Array.from({length:Math.max(0,n)},(_,i)=>`<li class="empty" aria-hidden="true"><b class="rn">${from+i}</b><span class="av"></span><span class="nm">기록을 기다리는 중</span><span class="sc">-</span><i class="gr g-none"></i></li>`).join('');
// 탭 누르기 (상자에 한 번만 걸어요)
box.addEventListener('click',e=>{const t=e.target.closest('.rktab');if(!t)return;e.stopPropagation();if(t.dataset.d===view)return;view=t.dataset.d;load()});
function refresh(){view=typeof diff!=='undefined'?diff:'normal';load()}   // 난이도 카드를 고르면 그 난이도 탭으로
let fitted=false;
async function load(){const my=++seq,d=view;if(!window.SONGS||!SONGS[cur])return;build();tabs();
  const L=box.querySelector('.rklist'),X=box.querySelector('.rkx');
  const body=(h,ex)=>{if(my!==seq)return;L.innerHTML=h;fillAv(L);L.classList.remove('wait');X.hidden=!ex;if(!fitted&&window.fitTitle){fitted=true;requestAnimationFrame(fitTitle)}};
  if(!R()){body('<p class="rkmsg">랭킹을 불러올 수 없어요</p>');return}
  L.classList.add('wait');   // 불러오는 동안엔 지금 목록을 흐리게만 (자리는 그대로)
  try{const b=boardOf(SONGS[cur].id,d),res=await b.getEntries({from:1,count:5});if(my!==seq)return;const list=(res&&res.entries)||[];
    const m=me();let mine=null;if(m&&m.userId){try{mine=await b.getEntry({})}catch(e){}}if(my!==seq)return;
    if(!list.length&&DEMO){const D=demo(d);body('<ol>'+D.list.map((e,i)=>row(e,false,i)).join('')+'</ol><ol class="mine">'+row(D.mine,true,1)+'</ol>',true);return}
    await Promise.all(list.concat(mine?[mine]:[]).map(async e=>{e._name=await nameOf(e.userId)}));if(my!==seq)return;
    const uid=m&&m.userId;let h='';TOP[kOf(SONGS[cur].id,d)]=list.length?topRec(list[0],list[0]._name):null;
    {const t=TOP[kOf(SONGS[cur].id,d)],mt=!!(t&&uid&&t.userId===uid&&!(m&&m.isGuest));   /* mt: 내가 1위 → 남기기 · 바꾸기 단추 */
     if(t&&t.msg)h+='<p class="rkbub"><b>1위의 한마디</b><span>'+esc(t.msg)+'</span>'+(mt?'<button type="button" class="rkedit">✎ 바꾸기</button>':'')+'</p>';
     else if(mt)h+='<p class="rkbub mine"><b>1위의 한마디</b><span>내가 1위예요! 한마디를 남겨 보세요</span><button type="button" class="rkedit">✎ 남기기</button></p>'}   /* 1위 줄 위 가로로 긴 말풍선 (2026-10-06 사용자) */
    if(!list.length)h+='<p class="rkmsg">아직 기록이 없어요.<br>첫 기록의 주인공이 되어 보세요!</p>';
    else h+='<ol>'+list.map((e,i)=>row(e,e.userId===uid,i)).join('')+emptyRows(5-list.length,list.length+1)+'</ol>';
    // 맨 아래 「내 순위」 줄은 늘 보여요 (TOP 5 안에 있어도) — 기록이 없으면 빈 줄, 게스트는 안내
    if(mine)h+='<ol class="mine">'+row(mine,true,1)+'</ol>';
    else if(m&&m.isGuest)h+='<p class="rkmsg sm">게스트는 기록이 저장되지 않아요</p>';
    else if(m&&m.userId)h+='<ol class="mine"><li class="me nomine"><b class="rn">-</b><span class="av" data-uid="'+esc(m.userId)+'" data-i="1"><img alt="" decoding="async"></span><span class="nm">'+esc(m.nickname||'나')+'<i class="you">나</i></span><span class="sc">기록 없음</span><i class="gr g-none"></i></li></ol>';
    body(h)}catch(e){body('<p class="rkmsg">랭킹을 불러오지 못했어요</p>');console.warn('rank',e)}}
async function submit(o){if(!R())return;const m=me();if(!m||m.isGuest)return;   // 게스트는 조회만
  const b=boardOf(o.sid,o.diff),score=Math.max(0,Math.round(o.score)),ex=Object.assign({acc:Math.round(o.acc*10),combo:o.combo|0,fc:o.fc?1:0},MB?{d:o.diff}:{});let msg='';   // 모바일: 난이도도 같이
  // 새 1위(1위 점수를 넘었거나 첫 기록)면 올리기 전에 폭죽 + 한마디 입력 (js/top1.js) — 한마디는 이 기록의 extras.msg 로 같이 올라가요 · 1위를 못 읽으면(통신 오류) 그냥 올려요
  if(score>0&&window.TOP1){try{const res=await b.getEntries({from:1,count:1}),t=res&&res.entries&&res.entries[0];
    if(!t||score>t.value)msg=await TOP1.ask({sid:o.sid,diff:o.diff,score,prev:t&&t.userId===m.userId&&t.extras&&t.extras.msg||''})}catch(e){console.warn('rank top',e)}}
  try{await b.submitScore({score,extras:msg?Object.assign({},ex,{msg}):ex})}catch(e){console.warn('rank submit',e);if(msg){try{await b.submitScore({score,extras:ex})}catch(e2){console.warn('rank submit',e2)}}}   /* 한마디 때문에 거절되면 점수만이라도 */
  delete TOP[kOf(o.sid,o.diff)];view=o.diff;load()}
// 지금 1위인 사람이 언제든 한마디를 남기거나 바꾸기 (2026-10-06 사용자: 「지금 1위하면 메시지 띄울 수 있게 — 서버 연동」)
//  · 랭킹은 최고 점수 유지라 같은 점수로는 기록이 안 바뀌어요 → 내 기록을 지우고 같은 점수 · 정확도 · 콤보 + 한마디로 바로 다시 올려요 (남이 못 바꾸는 건 그대로 · 1위 본인만)
//  · 다시 올리기는 3번까지 · 그래도 안 되면 기기에 적어 두고(mds-rk-fix) 다음 실행 때 되살려요
const FIXK='mds-rk-fix',sleep=ms=>new Promise(r=>setTimeout(r,ms));
const fixGet=()=>{try{return JSON.parse(localStorage.getItem(FIXK)||'null')}catch(e){return null}},fixSet=v=>{try{v?localStorage.setItem(FIXK,JSON.stringify(v)):localStorage.removeItem(FIXK)}catch(e){}};
async function resubmit(b,score,extras){for(let i=0;i<3;i++){try{await b.submitScore({score,extras});return true}catch(e){console.warn('rank resubmit',e);await sleep(400*(i+1))}}return false}
async function setMsg(sid,d,msg){if(!R())return false;const m=me();if(!m||!m.userId||m.isGuest)return false;
  if(MB){try{const t=(await mList(sid,true))[0];if(!t||t.u!==m.userId)return false;if((t.m||'')===(msg||''))return true;   // 모바일: 1위 본인 기록의 한마디만 바꿔서 한 번에 저장
    const ok=await mPut(sid,Object.assign({},t,{m:msg||undefined}),true);delete TOP[kOf(sid,d)];if(SONGS[cur]&&SONGS[cur].id===sid)load();return ok}catch(e){console.warn('mrank msg',e);return false}}
  const b=boardOf(sid,d);
  let t=null;try{const res=await b.getEntries({from:1,count:1});t=res&&res.entries&&res.entries[0]}catch(e){return false}
  if(!t||t.userId!==m.userId)return false;   // 1위 본인만
  const old=t.extras||{},ex=Object.assign({},old);if(msg)ex.msg=msg;else delete ex.msg;if((old.msg||'')===(msg||''))return true;
  fixSet({sid,d,bn:bName(sid,d),score:t.value,extras:ex,old});   // bn: 어느 판인지 (PC · 모바일 판이 달라요)
  try{await b.deleteScore({})}catch(e){fixSet(null);console.warn('rank delete',e);return false}   // 못 지웠으면 기록은 그대로 (안전)
  let ok=await resubmit(b,t.value,ex);const saved=ok;if(!ok&&msg)ok=await resubmit(b,t.value,old);   // 한마디 때문에 막히면 원래 기록이라도
  if(ok)fixSet(null);delete TOP[kOf(sid,d)];if(SONGS[cur]&&SONGS[cur].id===sid&&(MB||view===d))load();return saved}
async function heal(){const f=fixGet();if(!f||!R())return;if(String(f.bn||'').startsWith('mrank:')){fixSet(null);return}const m=me();if(!m||!m.userId||m.isGuest)return;   // 지난번에 다시 올리기를 못 마쳤으면 되살려요
  try{const b=f.bn?R().board(f.bn,{order:'desc',keep:'best'}):boardOf(f.sid,f.d),e=await b.getEntry({});if(e&&e.value>=f.score){fixSet(null);return}if(await resubmit(b,f.score,f.extras||f.old||{}))fixSet(null)}catch(e){console.warn('rank heal',e)}}
// 랭킹 판 말풍선의 「✎ 남기기 · 바꾸기」 (내가 1위일 때만 보여요)
box.addEventListener('click',async e=>{const btn=e.target.closest('.rkedit');if(!btn||!window.TOP1||!SONGS[cur])return;e.stopPropagation();btn.blur();
  const sid=SONGS[cur].id,d=view,t=TOP[kOf(sid,d)];const v=await TOP1.ask({sid,diff:d,score:t?t.value:0,prev:t?t.msg:'',edit:true,delay:0});if(v===null)return;   // 취소
  btn.disabled=true;btn.textContent='저장 중…';const ok=await setMsg(sid,d,v);if(!ok){btn.disabled=false;btn.textContent='✎ 다시';if(window.toast)toast('한마디를 저장하지 못했어요. 잠시 뒤 다시 해 주세요')}});
async function myBest(sid,d){if(!R())return null;const m=me();if(!m||!m.userId||m.isGuest)return null;   // 내 최고 기록 (판 시작할 때 미리 받아 둬요 — 결과 화면의 「최고 기록」 · NEW RECORD)
  try{const e=await boardOf(sid,d).getEntry({});if(e&&MB&&(e.extras||{}).d!==d)return null;return e?{score:e.value,extras:e.extras||{}}:null}catch(e){return null}}   // 모바일 판은 난이도 통합 — 같은 난이도 기록일 때만 「내 최고 기록」
window.RANK={refresh,submit,myBest,me,headshot,top:(sid,d)=>TOP[kOf(sid,d)]||null,topOf,setMsg,mobile:MB};
setTimeout(heal,1500);   // 지난번에 못 마친 다시 올리기 되살리기   // me · headshot: 플레이어 카드(js/profile.js)도 같이 써요
refresh();
})();
