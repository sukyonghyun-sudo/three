// 기록 서버 동기화 (2026-10-06) — 내 기록 · 플레이어 레벨 · 업적 · 오늘의 미션을 MSW 서버(개인 저장 MSW.UserStorage)에 둬요
// 전에는 이 기기 localStorage 에만 있어서 기기 · 브라우저가 바뀌면 기록이 따로 놀았어요. 이제 어디서 열어도 같은 기록이에요
//  · 처음 열 때: 서버 기록 + 이 기기 기록 + 랭킹 서버의 내 최고 점수(곡 × 난이도 — 예전 기록은 랭킹에만 있어서)를 합쳐요
//     합치는 법 — 점수 · 정확도 · 램프 · 콤보 · 판 수 · EXP 같은 숫자는 큰 쪽, 업적은 양쪽 다, 칭호는 최근에 바꾼 쪽, 오늘의 미션은 같은 날이면 진행이 큰 쪽
//  · 한 판 끝날 때마다(연습 포함): 서버 것을 다시 읽어 합친 뒤 저장 — 기기 두 대에서 번갈아 해도 서로 덮어쓰지 않아요
//  · 서버에서 읽기에 실패하면 쓰지 않아요 (빈 값으로 서버 기록을 덮지 않게) — 다음 판에 다시 해 봐요. 게스트는 이 기기에만
//  · 서버 키: rec-v1 (내 기록 · RESULT2) · prof-v1 (레벨 · 업적 · 미션 · PROFILE). localStorage 는 빠른 첫 화면 · 오프라인용으로 그대로 써요
(function(){
if(!window.RESULT2||!window.PROFILE||!RESULT2.replace||!PROFILE.replace)return;
const KR='rec-v1',KP='prof-v1',DK=['easy','normal','hard'];
const US=()=>window.MSW&&MSW.UserStorage;
const me=()=>{try{return MSW.Users.me}catch(e){return null}};
const isObj=o=>!!o&&typeof o==='object'&&!Array.isArray(o);
const num=v=>Number.isFinite(+v)?+v:0;
const grade=a=>a>=97?'SS':a>=93?'S':a>=85?'A':a>=72?'B':'C';   // 결과 화면과 같은 기준
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
// ---------------- 합치기 ----------------
function one(x,y){if(!isObj(x))return isObj(y)?Object.assign({},y):null;if(!isObj(y))return Object.assign({},x);const hi=num(y.best)>num(x.best)?y:x;
  return {best:Math.max(num(x.best),num(y.best)),acc:Math.max(num(x.acc),num(y.acc)),lamp:Math.max(num(x.lamp),num(y.lamp)),combo:Math.max(num(x.combo),num(y.combo)),
    plays:Math.max(num(x.plays),num(y.plays)),rank:hi.rank||x.rank||y.rank||'',last:Math.max(num(x.last),num(y.last))}}
function mergeRec(a,b){a=isObj(a)?a:{};b=isObj(b)?b:{};const o={};
  for(const k of new Set([...Object.keys(a),...Object.keys(b)]))if(/^[\w-]+\|(easy|normal|hard)(\|prev)?$/.test(k)){const v=one(a[k],b[k]);if(v)o[k]=v}
  return o}
const NUMS=['exp','plays','clears','fcs','aps','adlibs','prac','maxCombo'];
function mergeDaily(x,y){if(!isObj(x))return isObj(y)?y:null;if(!isObj(y))return x;if(x.date!==y.date)return String(x.date)>String(y.date)?x:y;
  const d={date:x.date,ids:x.ids||[],prog:{},done:{},songs:[...new Set([...(x.songs||[]),...(y.songs||[])])],bonus:!!(x.bonus||y.bonus)};
  for(const id of d.ids){d.prog[id]=Math.max(num(x.prog&&x.prog[id]),num(y.prog&&y.prog[id]));if((x.done&&x.done[id])||(y.done&&y.done[id]))d.done[id]=true}
  return d}
function mergeProf(a,b){if(!isObj(b))return a;if(!isObj(a))return b;const o={};NUMS.forEach(k=>o[k]=Math.max(num(a[k]),num(b[k])));
  o.un=Object.assign({},isObj(b.un)?b.un:{});for(const [k,t] of Object.entries(isObj(a.un)?a.un:{}))o.un[k]=o.un[k]?Math.min(num(o.un[k]),num(t)):t;
  const nw=num(a.upd)>=num(b.upd)?a:b,ol=nw===a?b:a;o.title=nw.title&&o.un[nw.title]?nw.title:ol.title&&o.un[ol.title]?ol.title:'';
  const dy=mergeDaily(a.daily,b.daily);if(dy)o.daily=dy;o.upd=Math.max(num(a.upd),num(b.upd));
  return o}
const emptyP=p=>!isObj(p)||(!num(p.exp)&&!num(p.plays)&&!num(p.prac)&&!Object.keys(isObj(p.un)?p.un:{}).length);
// ---------------- 랭킹 서버의 내 최고 점수 → 내 기록 (새 채보 칸) — 세션마다 한 번 ----------------
let ranked=false;
async function fromRank(){if(ranked||!window.RANK||!RANK.myBest||!window.SONGS)return {};const o={},J=[];SONGS.forEach(S=>DK.forEach(d=>J.push([S.id,d])));
  for(let i=0;i<J.length;i+=4)await Promise.all(J.slice(i,i+4).map(async([sid,d])=>{let e=null;try{e=await RANK.myBest(sid,d)}catch(err){}if(!e||!(num(e.score)>0))return;
    const x=e.extras||{},a=num(x.acc)/10,fc=!!num(x.fc);   /* extras.acc = 정확도 ×10 · fc = 미스 0 */
    o[sid+'|'+d]={best:Math.round(num(e.score)),acc:Math.round(a*10)/10,lamp:fc?(a>=100?4:3):a>=72?2:1,combo:num(x.combo)|0,plays:1,rank:grade(a),last:0}}));
  ranked=true;return o}
// ---------------- 상태 (설정 「내 기록」 탭 위 한 줄) ----------------
let st='wait',at=0;
function paint(){const el=document.getElementById('recSync');if(!el)return;const hm=at?new Date(at).toTimeString().slice(0,5):'';
  el.className='recsync '+st;
  el.textContent=st==='ok'?`MSW 서버와 동기화됨 — 다른 기기에서 열어도 같은 기록이에요${hm?' · '+hm:''}`:st==='guest'?'게스트는 이 기기에만 저장돼요 — 넥슨 로그인하면 서버에 저장돼요':st==='err'?'서버에 연결하지 못해 이 기기에 저장해 뒀어요 — 다음 판이 끝나면 다시 올려요':'서버 기록을 불러오는 중…'}
const set=s=>{st=s;paint()};
const guestErr=e=>!!e&&(e.code==='GUEST_NOT_ALLOWED'||/GUEST/.test(String(e.message||e)));
// ---------------- 읽기 · 합치기 · 쓰기 ----------------
function usable(){const m=me();if(!US()){set('err');return false}if(!m||!m.userId||m.isGuest===true){set('guest');return false}return true}   /* 미리보기는 isGuest 가 null — 시도해 보고 오류로 갈라요 */
async function read(){const u=US(),[r,p]=await Promise.all([u.get(KR),u.get(KP)]);return [isObj(r)?r:{},isObj(p)?p:null]}
function redraw(){if(typeof playing!=='undefined'&&playing)return;   /* 플레이 중엔 안 그려요 — 다음 화면 전환 때 저절로 */
  try{if(window.SONGINFO){SONGINFO.update();SONGINFO.songs()}}catch(e){}try{PROFILE.card()}catch(e){}
  try{const D=document.getElementById('settings');if(D&&D.open&&window.SETTINGS2)SETTINGS2.records()}catch(e){}}
function apply(r,p){   // 동기 — 기다리는 사이 끝난 판도 안 잃게 지금 이 기기 기록과 합쳐서 바로 바꿔 끼워요
  const lr=RESULT2.all(),lp=PROFILE.get(),mr=mergeRec(lr,r),mp=mergeProf(lp,p);
  const ch=!same(mr,lr)||!same(mp,lp);if(ch){RESULT2.replace(mr);PROFILE.replace(mp);redraw()}
  return [mr,mp]}
async function write(mr,mp,sr,sp){const u=US(),J=[];if(!same(mr,sr))J.push(u.set(KR,mr));if(!emptyP(mp)&&!same(mp,sp))J.push(u.set(KP,mp));
  if(J.length)await Promise.all(J);at=Date.now()}
let ok=false;   // 서버에서 한 번이라도 읽었나 — 못 읽었으면 쓰지 않아요
async function pull(){if(!usable())return;let sr,sp;
  try{[sr,sp]=await read()}catch(e){console.warn('cloud get',e);ok=false;set(guestErr(e)?'guest':'err');return}
  const [mr,mp]=apply(mergeRec(sr,await fromRank()),sp);ok=true;
  try{await write(mr,mp,sr,sp);set('ok')}catch(e){console.warn('cloud set',e);set(guestErr(e)?'guest':'err')}}
async function push(){if(!ok)return pull();if(!usable())return;let sr,sp;
  try{[sr,sp]=await read()}catch(e){console.warn('cloud get',e);set('err');return}
  const [mr,mp]=apply(sr,sp);
  try{await write(mr,mp,sr,sp);set('ok')}catch(e){console.warn('cloud set',e);set(guestErr(e)?'guest':'err')}}
let chain=Promise.resolve(),timer=0;
const run=f=>(chain=chain.then(f).catch(e=>console.warn('cloud',e)));   // 한 번에 하나씩 (읽기 · 쓰기가 엇갈리지 않게)
function dirty(){clearTimeout(timer);timer=setTimeout(()=>{timer=0;run(push)},800)}   // 결과 화면의 기록 · EXP 저장을 한 번에 모아서
addEventListener('pagehide',()=>{if(timer){clearTimeout(timer);timer=0;run(push)}});
window.CLOUD={dirty,pull:()=>run(pull),state:()=>({st,at,ok}),paint,_merge:{rec:mergeRec,prof:mergeProf}};
paint();run(pull);
})();
