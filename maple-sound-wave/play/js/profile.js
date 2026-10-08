// 플레이어 레벨 · EXP · 업적(칭호) (2026-10-03 주말 작업)
// 참고: 프로젝트 세카이 플레이어 랭크 · 프로필, DJMAX RESPECT V 레벨 · 칭호, maimai DX 칭호, 태고의 달인 배지
//  · 한 판(연습 제외) 끝날 때 EXP: 퍼펙트 3 · 그레이트 2 · 굿 1 + 클리어 50 / 풀 콤보 150 / 올 퍼펙트 300 + 신기록 100 + 애드리브 하나에 10
//  · 레벨 L → L+1 에 필요한 EXP = 300 + 120 × (L − 1)
//  · 업적 16개 — 달성하면 칭호로 고를 수 있어요 (프로필 창)
//  · 저장: MSW 서버 개인 저장 prof-v1 (js/cloud.js — 어느 기기에서나 같은 레벨) + 이 기기 localStorage mds-prof-v1 (빠른 첫 화면 · 오프라인용)
(function(){
const $=id=>document.getElementById(id),KEY='mds-prof-v1';
const BASE={exp:0,plays:0,clears:0,fcs:0,aps:0,adlibs:0,prac:0,maxCombo:0,un:{},title:''};
let P=load();
function load(){try{return Object.assign({},BASE,JSON.parse(localStorage.getItem(KEY)||'{}'))}catch(e){return Object.assign({},BASE)}}
function save(touch){if(touch!==false){P.upd=Date.now();window.CLOUD&&CLOUD.dirty()}try{localStorage.setItem(KEY,JSON.stringify(P))}catch(e){}}   // upd: 서버와 합칠 때 칭호는 최근에 바꾼 쪽 (날짜 바뀜만으로는 안 올려요)
function replace(o){if(!o||typeof o!=='object')return;P=Object.assign({},BASE,o);save(false);card()}   // 서버 기록과 합친 걸로 바꿔 끼우기 (js/cloud.js)
const need=lv=>300+120*(lv-1);
function lvOf(exp){let lv=1,e=exp;while(e>=need(lv)&&lv<99){e-=need(lv);lv++}return {lv,cur:e,next:need(lv)}}
const rec=(sid,d)=>window.RESULT2?RESULT2.getRec(sid,d,'new'):null;
const allSongs=(ds,lp)=>window.SONGS&&SONGS.every(S=>ds.some(d=>{const r=rec(S.id,d);return r&&r.lamp>=lp}));
const anyDiff=(d,lp)=>window.SONGS&&SONGS.some(S=>{const r=rec(S.id,d);return r&&r.lamp>=lp});
const ACH=[
 {id:'first',ic:'🎵',t:'첫 걸음',d:'곡을 처음으로 끝까지',ok:s=>s.plays>=1},
 {id:'clear10',ic:'🎶',t:'클리어 메이커',d:'클리어 10번',ok:s=>s.clears>=10},
 {id:'fc1',ic:'⭐',t:'풀 콤보!',d:'처음으로 미스 없이',ok:s=>s.fcs>=1},
 {id:'ap1',ic:'🌈',t:'완벽주의자',d:'처음으로 올 퍼펙트',ok:s=>s.aps>=1},
 {id:'all4',ic:'🗺️',t:'전곡 정복',d:'모든 곡 클리어 (난이도 상관없이)',ok:()=>allSongs(['easy','normal','hard'],2)},
 {id:'hard1',ic:'🔥',t:'어려움 도전자',d:'어려움 클리어',ok:()=>anyDiff('hard',2)},
 {id:'hard4',ic:'👑',t:'어려움 정복자',d:'어려움 모든 곡 클리어',ok:()=>allSongs(['hard'],2)},
 {id:'fc4',ic:'💎',t:'풀 콤보 컬렉터',d:'모든 곡 풀 콤보 (난이도 상관없이)',ok:()=>allSongs(['easy','normal','hard'],3)},
 {id:'c100',ic:'💯',t:'콤보 100',d:'최대 콤보 100 이상',ok:s=>s.maxCombo>=100},
 {id:'c200',ic:'🚀',t:'콤보 200',d:'최대 콤보 200 이상',ok:s=>s.maxCombo>=200},
 {id:'ad10',ic:'🔍',t:'애드리브 탐험가',d:'숨은 노트 누적 10개',ok:s=>s.adlibs>=10},
 {id:'adall',ic:'🕵️',t:'애드리브 마스터',d:'한 판에 숨은 노트 전부',ok:(s,o)=>!!(o&&o.adlib&&o.adlib.total>0&&o.adlib.hit===o.adlib.total)},
 {id:'acc98',ic:'🎯',t:'박자 장인',d:'정확도 98% 이상',ok:(s,o)=>!!(o&&o.acc>=98)},
 {id:'steady',ic:'⏱️',t:'흔들림 없는 손',d:'100노트 이상 · 타이밍 흔들림 15ms 이하',ok:(s,o)=>!!(o&&o.hits>=100&&o.sd<=15)},
 {id:'prac10',ic:'📚',t:'연습벌레',d:'연습 모드 10번',ok:s=>s.prac>=10},
 {id:'p30',ic:'🎪',t:'단골 손님',d:'30판 플레이',ok:s=>s.plays>=30},
];
// ---- 오늘의 미션 (날짜마다 3개 · 하나 깨면 EXP 100, 셋 다 깨면 보너스 200) — 참고: 프로젝트 세카이 · 원신식 데일리 미션 ----
const MPOOL=[
 {id:'play2',t:'아무 곡이나 2판 끝까지',n:2,f:o=>o?1:0},
 {id:'fc1',t:'풀 콤보 1번',n:1,f:o=>o&&o.lamp>=3?1:0},
 {id:'ad3',t:'애드리브(숨은 노트) 3개 찾기',n:3,f:o=>o&&o.adlib?o.adlib.hit:0},
 {id:'p300',t:'퍼펙트 300개',n:300,f:o=>o?o.cnt.p:0},
 {id:'acc95',t:'정확도 95% 이상으로 1판',n:1,f:o=>o&&o.acc>=95?1:0},
 {id:'hard1',t:'어려움 1판',n:1,f:o=>o&&o.diff==='hard'?1:0},
 {id:'c100',t:'한 판에 콤보 100',n:1,f:o=>o&&o.maxCombo>=100?1:0},
 {id:'prac1',t:'연습 모드 1번',n:1,f:(o,pr)=>pr?1:0},
 {id:'songs3',t:'서로 다른 곡 3곡',n:3,f:o=>0,u:1},
 {id:'easyap',t:'쉬움에서 올 퍼펙트',n:1,f:o=>o&&o.diff==='easy'&&o.lamp>=4?1:0},
];
const today=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
function daily(){const t=today();if(!P.daily||P.daily.date!==t){let h=0;for(const c of t)h=(h*31+c.charCodeAt(0))>>>0;const pool=MPOOL.slice(),ids=[];while(ids.length<3&&pool.length){h=(h*1103515245+12345)>>>0;ids.push(pool.splice(h%pool.length,1)[0].id)}
  P.daily={date:t,ids,prog:{},done:{},songs:[],bonus:false};save(false)}return P.daily}
function mprog(o,pr){if(window.MOB)return [];   /* 모바일: 오늘의 미션 없음 */const D=daily(),got=[];for(const id of D.ids){if(D.done[id])continue;const m=MPOOL.find(x=>x.id===id);if(!m)continue;
    if(m.u){if(o&&o.sid&&!D.songs.includes(o.sid))D.songs.push(o.sid);D.prog[id]=D.songs.length}else D.prog[id]=(D.prog[id]||0)+m.f(o,pr);
    if(D.prog[id]>=m.n){D.prog[id]=m.n;D.done[id]=true;P.exp+=100;got.push(m)}}
  if(!D.bonus&&D.ids.every(i=>D.done[i])){D.bonus=true;P.exp+=200;got.push({t:'오늘의 미션 전부 완료!',bonus:1})}
  return got}
function check(o){const out=[];for(const a of ACH){if(P.un[a.id])continue;let ok=false;try{ok=a.ok(P,o)}catch(e){}if(ok){P.un[a.id]=Date.now();out.push(a);if(!P.title)P.title=a.id}}return out}
// 한 판 끝: EXP 주고, 새 업적 알려요 (result2.js 가 불러요)
function award(o){const before=lvOf(P.exp),lamp=o.lamp||1;
  const gain=Math.round((o.cnt.p*3+o.cnt.gr*2+o.cnt.g)+(lamp>=4?300:lamp>=3?150:lamp>=2?50:0)+(o.isNew?100:0)+((o.adlib&&o.adlib.hit)||0)*10);
  P.exp+=gain;P.plays++;if(lamp>=2)P.clears++;if(lamp>=3)P.fcs++;if(lamp>=4)P.aps++;P.adlibs+=(o.adlib&&o.adlib.hit)||0;P.maxCombo=Math.max(P.maxCombo,o.maxCombo||0);
  const ach=check(o),mis=mprog(o,false);save();card();mis.forEach((m,i)=>setTimeout(()=>mtoast(m),2600+i*900));return {gain,before,after:lvOf(P.exp),ach,mis}}
function practice(){P.prac++;const ach=check(null),mis=mprog(null,true);save();card();ach.forEach((a,i)=>setTimeout(()=>toast(a),400+i*900));mis.forEach((m,i)=>setTimeout(()=>mtoast(m),900+i*900))}
function mtoast(m){toast({ic:m.bonus?'🎁':'✅',t:m.bonus?m.t:'미션 완료!',d:m.bonus?'보너스 EXP +200':m.t+' · EXP +100'})}
// 업적 쪽지 (화면 오른쪽 위)
function toast(a){const st=$('stage');if(!st)return;let box=st.querySelector('.achbox');if(!box){box=document.createElement('div');box.className='achbox';st.appendChild(box)}
  const e=document.createElement('div');e.className='achtoast';e.innerHTML=`<i>${a.ic}</i><span><small>업적 달성!</small><b>${a.t}</b><em>${a.d}</em></span>`;box.appendChild(e);
  setTimeout(()=>e.classList.add('out'),3800);setTimeout(()=>e.remove(),4400)}
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function who(){try{return window.RANK&&RANK.me?RANK.me():null}catch(e){return null}}
function titleOf(){const a=ACH.find(x=>x.id===P.title&&P.un[x.id]);return a?a.ic+' '+a.t:'칭호 없음'}
// 곡 선택 화면 왼쪽 위 플레이어 카드
const host=()=>$('title');   // 곡 고르기 새 화면(js/songlist.js)이면 곡 화면 왼쪽 위에
function card(){const sel=host();if(!sel)return;let c=$('pcard');
  if(!c){c=document.createElement('button');c.id='pcard';c.className='pcard';c.type='button';c.onclick=openProfile;sel.appendChild(c)}else if(!sel.contains(c))sel.appendChild(c)
  const L=lvOf(P.exp),m=who(),nm=m&&m.nickname?m.nickname:'플레이어';
  c.innerHTML=`<span class="pav"><img alt="" decoding="async"></span><span class="pinfo"><span class="pname"><b>${esc(nm)}</b><em>Lv.${L.lv}</em></span><span class="ptitle">${esc(titleOf())}</span><span class="pexp"><i style="--w:${(L.cur/L.next*100).toFixed(1)}%"></i></span></span>`;
  avatar(c.querySelector('.pav img'));
  if(window.MOB)return;   // 모바일: 오늘의 미션 판 없음
  let mb=$('mpanel');if(!mb){mb=document.createElement('div');mb.id='mpanel';mb.className='mpanel';sel.appendChild(mb)}else if(!sel.contains(mb))sel.appendChild(mb)
  const D=daily();mb.innerHTML=`<p class="mh"><b>오늘의 미션</b><small>${D.ids.filter(i=>D.done[i]).length} / 3 · 하나에 EXP 100</small></p>`+D.ids.map(id=>{const m=MPOOL.find(x=>x.id===id);if(!m)return '';const v=Math.min(m.n,D.prog[id]||0),ok=D.done[id];
    return `<div class="mrow${ok?' ok':''}"><i>${ok?'✔':''}</i><span class="mt">${esc(m.t)}</span><span class="mp"><b>${v}</b>/${m.n}</span><span class="mbar"><u style="--w:${(v/m.n*100).toFixed(0)}%"></u></span></div>`}).join('')}
function avatar(img){const m=who();if(!img||!m||!m.userId||!window.RANK||!RANK.headshot)return;RANK.headshot(m.userId).then(u=>{if(u)img.src=u}).catch(()=>{})}
// 프로필 창: 레벨 · 칭호 고르기 · 업적 16개 · 통계
function openProfile(){const sel=host();let p=$('profPop');if(!p){p=document.createElement('div');p.id='profPop';p.className='prpop pfpop';sel.appendChild(p)}else if(p.parentNode!==sel)sel.appendChild(p)
  const L=lvOf(P.exp),m=who(),nm=m&&m.nickname?m.nickname:'플레이어',n=Object.keys(P.un).length;
  p.innerHTML=`<i class="prbd"></i><div class="prbox pfbox" role="dialog" aria-label="플레이어 프로필">
    <div class="prh"><b>프로필</b><span>PLAYER</span><button class="prx" aria-label="닫기">✕</button></div>
    <div class="pfhead"><span class="pav big"><img alt=""></span><div class="pfn"><b>${esc(nm)}</b><span class="ptitle">${esc(titleOf())}</span>
      <div class="pflv"><em>Lv.${L.lv}</em><span class="pexp big"><i style="--w:${(L.cur/L.next*100).toFixed(1)}%"></i></span><small>${L.cur} / ${L.next} EXP</small></div></div>
      <dl class="pfst"><div><dt>플레이</dt><dd>${P.plays}</dd></div><div><dt>클리어</dt><dd>${P.clears}</dd></div><div><dt>풀 콤보</dt><dd>${P.fcs}</dd></div><div><dt>올 퍼펙트</dt><dd>${P.aps}</dd></div><div><dt>애드리브</dt><dd>${P.adlibs}</dd></div><div><dt>최대 콤보</dt><dd>${P.maxCombo}</dd></div></dl></div>
    <p class="pfh">업적 <b>${n}</b> / ${ACH.length} <small>달성한 업적을 누르면 칭호로 달아요</small></p>
    <div class="achgrid">${ACH.map(a=>{const u=P.un[a.id];return `<button class="ach${u?' un':''}${P.title===a.id?' on':''}" data-id="${a.id}" ${u?'':'disabled'}><i>${u?a.ic:'🔒'}</i><b>${a.t}</b><small>${a.d}</small></button>`}).join('')}</div></div>`;
  p.hidden=false;avatar(p.querySelector('.pav img'));
  p.querySelector('.prx').onclick=()=>p.hidden=true;p.querySelector('.prbd').onclick=()=>p.hidden=true;
  p.querySelectorAll('.ach.un').forEach(b=>b.onclick=()=>{P.title=b.dataset.id;save();card();openProfile()})}
window.PROFILE={award,practice,card,open:openProfile,get:()=>P,lvOf,ACH,toast,replace};
card();
})();
