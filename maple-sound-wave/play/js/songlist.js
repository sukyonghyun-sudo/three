// 곡 고르기 v2 (2026-10-06 사용자 요청) — 「시작!」 → 바로 곡 화면 · 왼쪽 세로 곡 목록(바퀴) · 목록 위 ▲ · 아래 ▼ · ↑↓ · W S 키 · 마우스 휠 · 클릭
// 참고: EZ2DJ · EZ2AC 선곡 화면 — 세로 곡 목록 바로 옆에 앨범 디스크, 턴테이블을 돌리면 목록이 돌아가요 / DJMAX RESPECT V — 고른 곡이 늘 가운데인 목록
//  · 목록: 고른 곡이 가운데 크게(분홍), 이웃 곡은 위 · 아래로 작아지며 살짝 안쪽으로(바퀴 곡면). ↓ = 다음 곡 → 목록이 위로 돌고 앨범 아트도 아래에서 올라와요 (engine wheelSwap)
//  · ▲ 는 목록 맨 위 줄 위 · ▼ 는 맨 아래 줄 아래, 목록 가운데 (2026-10-06 사용자: 「위 아래 버튼이 저기 있는 게 맞나」 → 「옮겨봐」 — 예전엔 목록과 앨범 아트 사이)
//    ▲ · 목록 · ▼ 묶음은 「SONG LIST」 제목 줄과 「오늘의 미션」 판 딱 가운데 (2026-10-06 사용자: 「답답하지 않게」) · 버튼은 얇은 테두리 동그라미 + 양옆 가는 선 · 마우스 휠은 목록 · 앨범 아트 위 어디서나 · 줄을 누르면 그 곡 · ←→ 난이도
//  · 앨범 아트 아래 알약에 「MUSIC COMPOSER : 석용현」 (모든 곡)
//  · CD 케이스 곡 선택 화면은 건너뛰어요: show('select') → 곡 화면 (메인 「시작!」 · 일시정지 · 결과의 「곡 선택」). 플레이어 카드 · 오늘의 미션은 곡 화면 왼쪽 위로 (profile.js)
//  · 예전 CD 화면으로 되돌리는 설정은 화면과 함께 지웠어요 (2026-10-06 사용자: 「아예 안 보이게 삭제」)
(function(){
if(typeof SONGS==='undefined'||typeof openSong!=='function'||typeof show!=='function')return;
const $=id=>document.getElementById(id),T=$('title');if(!T)return;
const LS=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:v}catch(e){return d}},SS=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
let SPIN=null,SPUN=false;   // 곡 룰렛 (아래 「곡 룰렛 · 안내 · 대기 데모」)
const on=()=>true,busy=()=>(typeof playing!=='undefined'&&playing)||!!(window.SINTRO&&SINTRO.on())||!!SPIN;   // 시작 카드가 떠 있는 동안도 곡 · 난이도를 못 바꿔요 (2026-10-06 출시 점검)
const N=()=>SONGS.length,wrap=i=>((i%N())+N())%N();
let sel=cur;   // 목록에서 고른 곡 (openSong 이 끝나면 cur 와 같아요)
// ---------------- 목록 ----------------
const box=document.createElement('div');box.id='slist';box.className='slist';box.setAttribute('aria-label','곡 목록');
box.innerHTML=`<div class="slh"><b>SONG LIST</b><span>${N()}곡</span></div><div class="slw"></div>`;   // 키 안내(↑↓ · W S · 마우스 휠)는 뺐어요 — 앨범 아트 밑 키보드 조작 안내로 (2026-10-06 사용자)
T.appendChild(box);const wl=box.querySelector('.slw');
// 키보드 조작 안내 (2026-10-06 사용자: 「앨범 아트 밑에 SONG LIST 줄 키 안내 같은 모양으로 키보드 조작 설명」) — 자리 · 크기: SEL_FIT kx · ky · ks (css #kGuide · 가운데 칸 축 974 기준)
const kg=document.createElement('div');kg.id='kGuide';kg.className='kguide';kg.setAttribute('aria-label','키보드 조작');T.appendChild(kg);
function keyGuide(){const esc=x=>String(x).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])),kb=x=>`<kbd>${esc(x)}</kbd>`,lb=k=>window.KEYCFG?KEYCFG.label(k):String(k).toUpperCase();
  const K=(typeof KEYS!=='undefined'?KEYS:['d','f','j','k']).map(lb);   /* 연주 키는 설정 「조작키」 에서 바꾼 키 그대로 */
  const h=`<span class="kg"><b>곡 고르기</b>${kb('↑')}${kb('↓')}<i>·</i>${kb('W')}${kb('S')}</span><i class="sep">·</i><span class="kg"><b>난이도</b>${kb('←')}${kb('→')}</span><i class="sep">·</i><span class="kg"><b>시작</b>${kb('Enter')}</span><i class="sep">·</i><span class="kg"><b>연주</b>${K.map(kb).join('')}</span>`;
  if(kg.__h!==h){kg.__h=h;kg.innerHTML=h}}
{const SD=$('settings');if(SD)SD.addEventListener('toggle',()=>{if(!SD.open)keyGuide()})}   // 설정에서 조작키를 바꾸고 닫으면 다시

const rows=SONGS.map((S,i)=>{const r=document.createElement('div');r.className='slr';r.dataset.i=i;r.setAttribute('role','button');r.setAttribute('aria-label',S.title);
  r.innerHTML=`<span class="jk"><img src="${S.jacket||''}" alt="" decoding="async" onerror="this.style.visibility='hidden'"></span><span class="tx"><b lang="ja">${S.title}</b><small>${S.sub||''}</small><span class="ld"></span></span><span class="bp"><b>${S.bpm}</b><small>BPM</small></span>`;
  r.onclick=()=>{if(i!==sel)go(i)};wl.appendChild(r);return r});
// 썸네일 또렷하게 (2026-10-07 사용자: 「곡 목록 화질이 구리고 잘 안 보여」): 큰 앨범 그림을 작은 칸에 그대로 줄이면 흐릿해서
//  실제 화면 크기(무대 배율 × 기기 배율)에 맞춰 반씩 곱게 줄인 그림으로 바꿔 끼워요 · 고른 줄 크기(116×65) 기준 · 창 크기가 바뀌면 다시 · 못 하면 원래 그림 그대로
const THUMB={w:116,h:65};
function crispThumb(im,src){if(!im||!src)return;const k=(window.STAGE_K||1)*(devicePixelRatio||1),W=Math.max(1,Math.round(THUMB.w*k)),H=Math.max(1,Math.round(THUMB.h*k)),key=src+'@'+W;if(im.__ck===key)return;im.__ck=key;
  const o=new Image();o.crossOrigin='anonymous';o.decoding='async';
  o.onload=()=>{try{const s=Math.max(W/o.naturalWidth,H/o.naturalHeight),sw=W/s,sh=H/s,sx=(o.naturalWidth-sw)/2,sy=(o.naturalHeight-sh)/2;   // 가운데를 칸 비율로 (object-fit: cover 와 같게)
      let c=document.createElement('canvas');c.width=Math.max(1,Math.round(sw));c.height=Math.max(1,Math.round(sh));c.getContext('2d').drawImage(o,sx,sy,sw,sh,0,0,c.width,c.height);
      while(c.width>=W*2&&c.height>=H*2){const n=document.createElement('canvas');n.width=Math.ceil(c.width/2);n.height=Math.ceil(c.height/2);const x=n.getContext('2d');x.imageSmoothingQuality='high';x.drawImage(c,0,0,n.width,n.height);c=n}   // 반씩 줄여 내려가요
      const f=document.createElement('canvas');f.width=W;f.height=H;const x=f.getContext('2d');x.imageSmoothingQuality='high';x.drawImage(c,0,0,W,H);
      f.toBlob(b=>{if(!b||im.__ck!==key)return;const old=im.__url;im.__url=URL.createObjectURL(b);im.src=im.__url;if(old)URL.revokeObjectURL(old)},'image/png')}catch(e){}};
  o.src=src}
// ▲▼ — 목록 위 · 아래 (목록 상자 안, 자리는 layout 이 맨 위 · 맨 아래 줄에 맞춰요)
const nav=document.createElement('div');nav.className='slnav';
nav.innerHTML='<button type="button" class="up" aria-label="이전 곡"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 15l7-7 7 7" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button><button type="button" class="dn" aria-label="다음 곡"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9l7 7 7-7" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';
box.appendChild(nav);
if(!window.MOB){const crispAll=()=>rows.forEach((r,i)=>crispThumb(r.querySelector('.jk img'),SONGS[i].jacket));crispAll();let rt=0;addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(crispAll,300)})}   // 썸네일 또렷하게 (위 crispThumb)
nav.querySelector('.up').onclick=e=>{e.currentTarget.blur();step(-1,true)};nav.querySelector('.dn').onclick=e=>{e.currentTarget.blur();step(1,true)};   /* blur: 버튼에 초점이 남으면 Enter 가 시작 대신 버튼을 눌러요 */
// 자리: 고른 곡이 가운데, 위 · 아래로 이웃 곡 (4곡이면 위 1 · 아래 2)
// 곡 화면 배치 값: index.html window.SEL_FIT — 제목 줄 hx · hy · hs / 목록 lx · ly · ls · lg(줄 사이) · lb(▲▼ 와 목록 사이) / 키 안내 kx · ky · ks / 알약 크기 ps
//  (ax · ay · as · gap 은 예전 「앨범 아트 모든 곡 같이」 값 — 지금은 곡마다 ART_FIT 으로 옮겨서 늘 0 · 1)
const SF=(k,d)=>{const v=(window.SEL_FIT||{})[k];return typeof v==='number'&&isFinite(v)?v:d};
const HS=96,HR=60,NB=44,HY=59,HH=24;   // 줄 높이(고른 곡 · 이웃) · ▲▼ 버튼 크기 · 제목 줄 위치 · 높이 (목록 상자 기준, 상자 위 끝 = 무대 140) — 줄 사이(12) · 버튼과 줄 사이(14)는 SEL_FIT lg · lb
let MY=724;   // 「오늘의 미션」 판 위 끝 (목록 상자 기준 = 무대 864) — 판이 보이면 실제 자리로 다시 재요
const slotY=k=>{const GAP=SF('lg',12);return !k?0:Math.sign(k)*(HS/2+GAP+HR/2+(Math.abs(k)-1)*(HR+GAP))};
const range=()=>{const n=N(),up=Math.floor((n-1)/2),dn=n-1-up;return [-Math.min(up,2),Math.min(dn,2)]};
const prevK={};
function layout(dir){const [lo,hi]=range(),n=N();
  rows.forEach((r,i)=>{let k=wrap(i-sel);if(k>hi)k-=n;const vis=k>=lo&&k<=hi,old=prevK[i];prevK[i]=k;
    const put=(kk,op)=>{r.style.transform=`translateY(${slotY(kk)}px) translateY(-50%)`;r.style.opacity=op};   /* 좌우 끝은 모든 줄이 같게 — 멀수록 흐리게만 */
    r.classList.toggle('sel',k===0);r.setAttribute('aria-current',k===0?'true':'false');r.style.pointerEvents=vis?'':'none';
    if(dir&&old!=null&&Math.abs(k-old)>1){r.style.transition='none';put(k+Math.sign(dir),'0');void r.offsetWidth;r.style.transition=''}   /* 바퀴 끝에서 반대쪽 끝으로 넘어가는 곡은 그쪽 바깥에서 들어와요 */
    put(k,vis?'1':'0')});   /* 보이는 줄은 모두 불투명 (2026-10-07 사용자: 「곡 목록이 잘 안 보여」 — 예전엔 멀수록 90% · 74% 로 흐려서 뒤 영상이 비쳤어요) */
  const mp=T.querySelector('.mpanel');if(mp&&mp.offsetParent){const k=window.STAGE_K||1,y=(mp.getBoundingClientRect().top-box.getBoundingClientRect().top)/k;if(y>300)MY=y}
  const BG=SF('lb',14),hy=SF('hy',0),hs=SF('hs',1);
  const t0=slotY(lo)-(lo?HR:HS)/2-BG-NB,b0=slotY(hi)+(hi?HR:HS)/2+BG+NB,wc=Math.round((HY+HH+MY)/2-(t0+b0)/2);   /* ▲ · 목록 · ▼ 묶음을 (처음 자리) 제목 줄 아래 끝과 미션 판 위 끝 사이 가운데로 — 제목 줄을 옮기거나 키워도 목록은 그대로 (2026-10-06 사용자: 「제목 줄 움직일 때 곡 목록은 따라서 안 움직이게」) · 목록 자리는 ly 로 따로 */
  box.style.setProperty('--wc',wc+'px');box.style.setProperty('--lo',Math.round(wc+(t0+b0)/2)+'px');   /* --lo: 목록 묶음 가운데 (크기 조절 기준점) */
  [['--hx',SF('hx',0)+'px'],['--hy',hy+'px'],['--hs',hs],['--lx',SF('lx',0)+'px'],['--ly',SF('ly',0)+'px'],['--ls',SF('ls',1)]].forEach(([k,v])=>box.style.setProperty(k,String(v)));   /* 제목 줄 · 목록 묶음 옮기기 · 크기 (css #slist) */
  nav.querySelector('.up').style.top=(wc+t0)+'px';nav.querySelector('.dn').style.top=(wc+b0-NB)+'px';
  const hd=box.querySelector('.slh');if(hd)hd.style.top=HY+'px';
  [['--kx',SF('kx',0)+'px'],['--ky',SF('ky',0)+'px'],['--ks',SF('ks',1)]].forEach(([k,v])=>T.style.setProperty(k,String(v)));keyGuide();   /* 키보드 조작 안내 자리 · 크기 */}
function lamps(){const R=window.RESULT2,ver=typeof chartVer!=='undefined'?chartVer:'new',DN={easy:'쉬움',normal:'보통',hard:'어려움'},LT=['기록 없음','플레이','클리어','풀 콤보','올 퍼펙트'];
  rows.forEach((r,i)=>{const S=SONGS[i];r.querySelector('.ld').innerHTML=Object.keys(DN).map(d=>{const x=R&&R.getRec(S.id,d,ver),l=x?x.lamp:0;return `<i class="lp${l}" title="${DN[d]} · ${LT[l]}"></i>`}).join('')})}
// 앨범 아트 아래 알약: BPM · 길이 다음에 작곡가
function composer(){const m=$('lgMeta');if(!m||m.querySelector('.mp-cmp'))return;const S=SONGS[cur];
  m.insertAdjacentHTML('beforeend',`<span class="mp mp-cmp"><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 17.5V5.2l11-2.4v12.1" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><ellipse cx="6.4" cy="17.6" rx="3.4" ry="2.7" fill="currentColor"/><ellipse cx="17.4" cy="15.1" rx="3.4" ry="2.7" fill="currentColor"/></svg>MUSIC COMPOSER : <b>${S.composer||'석용현'}</b></span>`)}
function sync(dir){sel=cur;layout(dir||0);lamps();composer()}
// ---------------- 곡 넘기기 ----------------
let last=0;
function step(d,click){const t=performance.now();if(!click&&t-last<120)return;last=t;go(wrap(sel+d),d)}
function go(i,d){if(busy()||i===sel)return;if(d==null){const n=N(),f=wrap(i-sel);d=f<=n/2?f:f-n}
  sel=i;layout(d);try{stopPreview()}catch(e){}window.UISFX&&UISFX.play('tick',d);   /* 곡 넘김 딸깍 (js/uisfx.js) */
  if(typeof wheelSwap==='function')wheelSwap(-Math.sign(d),()=>openSong(i));else openSong(i)}   // ↓(다음) 이면 앨범 아트도 아래에서 올라와요
addEventListener('keydown',e=>{if(!on()||T.classList.contains('hidden')||busy())return;if(/^(INPUT|TEXTAREA|SELECT)$/.test((e.target&&e.target.tagName)||''))return;   /* 조정 패널 슬라이더에서 화살표는 슬라이더만 */
  if(document.querySelector('.prpop:not([hidden]),#settings[open]'))return;
  const k=e.key;if(typeof KEYS!=='undefined'&&KEYS.includes(window.keyOf?keyOf(e):k.toLowerCase()))return;   // 조작키에 화살표를 쓴 사람은 그대로
  const md=e.ctrlKey||e.metaKey||e.altKey,kw=!md&&e.code==='KeyW'&&!(typeof KEYS!=='undefined'&&KEYS.includes('w')),ks2=!md&&e.code==='KeyS'&&!(typeof KEYS!=='undefined'&&KEYS.includes('s'));   /* W · S = ↑ · ↓ (2026-10-06 사용자) — 한글 입력 상태여도 되게 자판 자리(e.code)로 · 조작키로 쓰는 글자면 그대로 */
  if(k==='ArrowUp'||k==='ArrowDown'||kw||ks2){e.preventDefault();step(k==='ArrowUp'||kw?-1:1);return}
  if((k==='ArrowLeft'||k==='ArrowRight')&&!e.repeat&&typeof DIFFS!=='undefined'){e.preventDefault();const ks=Object.keys(DIFFS),j=ks.indexOf(diff),nx=ks[Math.max(0,Math.min(ks.length-1,j+(k==='ArrowLeft'?-1:1)))];
    if(nx!==diff){const b=document.querySelector('#diffs .diff-'+nx);if(b){b.click();b.blur()}}}});
let acc=0,wt=0;
function onWheel(e){if(!on()||T.classList.contains('hidden')||busy())return;e.preventDefault();const t=performance.now();if(t-wt>260)acc=0;wt=t;acc+=e.deltaY;
  if(Math.abs(acc)>=40){step(Math.sign(acc));acc=0}}
[box,nav,$('artWrap')].forEach(el=>el&&el.addEventListener('wheel',onWheel,{passive:false}));
// ---------------- CD 화면 건너뛰기 · 켜고 끄기 ----------------
const _show=window.show;
window.show=function(id){if(id==='select'&&on()){openSong(cur);return}const r=_show.apply(this,arguments);if(id==='title'&&on()){sync();if(!SPUN){SPUN=true;spin()}else arm()}return r};   /* 처음 곡 화면에 들어올 때 한 번 룰렛 */
if(window.SONGINFO&&SONGINFO.songs){const o=SONGINFO.songs;SONGINFO.songs=function(){const r=o.apply(this,arguments);try{lamps()}catch(e){}return r}}   // 기록 동기화 뒤 램프 다시
// 앨범 아트 자리 · 크기 (2026-10-06 사용자 가이드 예시: 모든 곡이 같은 크기로 보이게)
//  그림 파일마다 투명 여백이 달라서, 실제 그림 영역(불투명 상자 — 알파 64 이상)을 재서 같은 영역에 맞춰요. 그림을 바꿔도 저절로 다시 재요
//  · 영역 (무대 px): 좌우 607~1341 (폭 734 · 축 974) · 위 238 · 아래 716 (알약 736~770 위로 20)
//  · 로고만 있는 그림 (ギリギリ · 픽몬): 영역 안에 꽉 차게 — 좌우나 위아래 중 먼저 닿는 쪽
//  · 캐릭터가 위로 솟은 그림 (SONG_ART_KIND 'char' — 4배의 세계 · PICKMON BY MY SIDE): 좌우는 영역 폭에 · 위로는 솟아도 돼요 (위 줄 40 까지)
//  · 아래 끝: 모든 그림이 영역 아래(716 = 알약 위 20)에 붙어요 — 2026-10-06 사용자 「PICKMON BY MY SIDE 기준으로 여백」: 크기를 줄여도 알약과의 간격이 같게
//  · 곡마다 크기 · 위치: index.html window.ART_FIT (s = 배율 · x/y = 무대 px)
let AB={L:607,R:1341,T:238,B:716,TOP:40},COLA={x:548,y:120};
window.ART_AREA_SET=(a,c)=>{AB=a;COLA=c;window.ART_AREA=a;const A=$('songArt'),im=$('songArtImg');if(A&&im&&im.complete&&im.naturalWidth&&SONGS[cur])layoutArt(A,im,SONGS[cur])};   // 모바일 세로판: 그림 영역을 화면 크기에 맞춰 (js/mobile.js)   // COLA: 그림이 들어 있는 칸(.colA) 자리 — css 격자 v4
const BBOX=new Map();
function bboxOf(im){const k=im.currentSrc||im.src;if(BBOX.has(k))return BBOX.get(k);let r=null;
  try{const nw=im.naturalWidth,nh=im.naturalHeight,sc=Math.min(1,400/Math.max(nw,nh)),w=Math.max(1,Math.round(nw*sc)),h=Math.max(1,Math.round(nh*sc)),c=document.createElement('canvas');c.width=w;c.height=h;
    const x=c.getContext('2d',{willReadFrequently:true});x.drawImage(im,0,0,w,h);const d=x.getImageData(0,0,w,h).data;let x0=w,y0=h,x1=-1,y1=-1;
    for(let yy=0;yy<h;yy++)for(let xx=0;xx<w;xx++)if(d[(yy*w+xx)*4+3]>=64){if(xx<x0)x0=xx;if(xx>x1)x1=xx;if(yy<y0)y0=yy;if(yy>y1)y1=yy}
    if(x1>=0)r={x0:x0/w,y0:y0/h,x1:(x1+1)/w,y1:(y1+1)/h}}catch(e){console.warn('art bbox',e)}   /* 그림 서버가 CORS 를 안 주면 여기서 막혀요 → 그림 전체로 */
  r=r||{x0:0,y0:0,x1:1,y1:1};BBOX.set(k,r);return r}
function layoutArt(A,im,S,dots){if(!on())return false;const nw=im.naturalWidth,nh=im.naturalHeight;if(!nw||!nh)return false;
  const b=bboxOf(im),cw=(b.x1-b.x0)*nw,ch=(b.y1-b.y0)*nh,char=(window.SONG_ART_KIND||{})[S.id]==='char',W=AB.R-AB.L,H=AB.B-AB.T;
  const F=(window.ART_FIT||{})[S.id],k=(F&&F.s!=null?F.s:1)*SF('as',1);   /* ART_FIT (index.html): 곡마다 크기 배율 · 위치 / SEL_FIT as: 모든 곡 그림 크기 배율 */
  let s=(char?Math.min(W/cw,(AB.B-AB.TOP)/ch):Math.min(W/cw,H/ch))*k;
  if(dots){const dp=(window.STAGE_K||1)*(devicePixelRatio||1),n=Math.max(1,Math.floor(nw*s*dp/dots+.02));s=n*dots/dp/nw}   /* 도트 그림: 칸 하나 = 정수 화소 */
  const w=nw*s,h=nh*s,left=(AB.L+AB.R)/2-(b.x0+b.x1)/2*w+(F&&F.x||0),top=AB.B-b.y1*h+(F&&F.y||0)-SF('gap',0);   /* SEL_FIT gap: 그림만 위로 (알약과 간격) */
  Object.assign(A.style,{left:(left-COLA.x).toFixed(2)+'px',top:(top-COLA.y).toFixed(2)+'px',width:w.toFixed(2)+'px',height:h.toFixed(2)+'px'});
  window.ART_LAST={id:S.id,L:left+b.x0*w,T:top+b.y0*h,R:left+b.x1*w,B:top+b.y1*h};   /* ART_LAST: 보이는 그림 영역 (무대 px, 묶음 옮기기 전) */
  T.style.setProperty('--ps',String(SF('ps',1)));   /* 알약 줄 크기 (css #lgMeta) */
  const aw=A.parentElement,gx=window.MOB?0:(F&&F.gx||0)+SF('ax',0),gy=window.MOB?0:(F&&F.gy||0)+SF('ay',0);   /* SEL_FIT ax · ay: 모든 곡 그림 + 알약 줄 함께 */if(aw)aw.style.translate=gx||gy?`${gx}px ${gy}px`:'';   /* 묶음: 그림 + 알약 줄 통째로 (곡마다 ART_FIT gx · gy — 2026-10-06 사용자). transform 이 아니라 translate 속성 — 곡 넘김 회전(engine wheelSwap)이 같은 상자의 transform 을 써요 */
  return true}
window.ART_LAYOUT=layoutArt;window.ART_AREA=AB;
// 곡 그림 미리 받기: 처음 넘기는 곡도 그림이 바로 바뀌게 (안 받아 둔 그림은 받는 동안 이전 곡 그림이 그대로 보여서 늦게 사라지는 것처럼 보였어요)
//  표시용 그림과 같은 CORS 방식(anonymous)으로 받아야 같은 그림으로 쳐요 — 그림 영역을 재려면 CORS 도 필요해요
const PRE=new Map();
function preloadArts(){const M=window.SONG_ART||{};for(const u of Object.values(M)){if(!u||PRE.has(u))continue;const p=new Image();p.crossOrigin='anonymous';p.decoding='async';p.src=u;PRE.set(u,p);if(p.decode)p.decode().catch(()=>{})}}
(function(){const im=$('songArtImg');if(im&&im.crossOrigin!=='anonymous'){im.crossOrigin='anonymous';const u=im.getAttribute('src');if(u){im.removeAttribute('src');if(window.applySongArt)applySongArt()}}})();   /* 이미 그린 그림도 CORS 로 다시 */
if(window.applySongArt){const o=window.applySongArt;window.applySongArt=function(){preloadArts();return o.apply(this,arguments)}}   // 곡 그림 주소가 늦게 오면 그때마다 미리 받기
preloadArts();
function artFit(){const A=$('songArt'),im=$('songArtImg');if(!A||!im)return;
  if(!on()){['left','top','width','height'].forEach(k=>A.style[k]='');if(im.complete&&im.naturalWidth&&im.onload)im.onload();return}   /* 예전 화면: 엔진 원래 크기 계산으로 */
  if(typeof fitPixelArt==='function')fitPixelArt()}
function apply(){const u=on();document.body.classList.toggle('ui2',u);artFit();try{window.PROFILE&&PROFILE.card()}catch(e){}
  if(u){sync();const S=$('select');if(S&&!S.classList.contains('hidden'))openSong(cur)}}
apply();
// ---------------- 곡 룰렛 · 안내 · 대기 데모 (2026-10-06 사용자: 「사람들이 곡이 여러 개인 걸 모르네 — 처음에 한 바퀴 다다다닥 돌았다가 멈추고 고르게」 → 「덤까지」) ----------------
//  · 룰렛: 타이틀에서 곡 화면에 처음 들어올 때 한 번 — 목록이 두 바퀴 다다다닥(빠름 → 느림) 돌고 가운데 앨범 그림도 칸마다 바뀌다가, 고른 곡에서 탁 멈춰요 (약 1.6초)
//    도는 동안은 그림 · 글자만 바꿔요 (소리 · 영상은 멈춘 곡만 — engine SL_HOLD 로 미리 듣기도 멈춘 뒤에) · 도는 중 아무 키 · 클릭 · 휠이면 바로 멈춰요 (그 키는 멈추는 데만 — 클릭은 그대로 눌려요)
//  · 안내 한 줄: 멈춘 뒤 고른 곡 옆에 「곡 바꾸기 ↑↓ · W S」 2.6초 + ▲▼ 가 살짝 빛나요
//  · 대기 데모: 곡 화면에서 15초 동안 입력이 없으면 5초마다 다음 곡 (미리 듣기와 함께) — 키 · 클릭 · 휠 · 마우스 움직임이면 멈춰요 · 창이 가려졌거나 설정 · 연습 창이 떠 있으면 쉬어요
// 룰렛 모션 (2026-10-06 사용자: 「룰렛 바뀌는 모션 부드럽고 모션감 있게」): 칸마다 끊지 않고 매 프레임 이어서 — 곡 넘김(engine wheelSwap)과 같은 큰 바퀴
//  · 위치 p (몇 칸째, 소수): 처음엔 초당 약 15칸으로 빠르게 → 점점 느려져 목표를 0.12칸 지나쳤다가 되돌아와 탁 (1.35초 + 0.22초)
//  · 목록: 줄마다 p 에 맞춰 이어서 위로 굴러가요 (바퀴 끝에서 넘어가는 줄은 흐려졌다가 반대쪽에서) · 빠를수록 세로 모션 블러
//  · 앨범 그림: 지금 곡 · 다음 곡 두 장이 화면 왼쪽 먼 곳을 축으로 도는 바퀴에 붙어 위로 지나가요 — 속도만큼 세로 블러 · 살짝 늘어나요
const LAY=[0,1].map(()=>{const w=document.createElement('div');w.className='awrap spinwrap';w.setAttribute('aria-hidden','true');
  const a=document.createElement('div');a.className='songart spinart';const im=document.createElement('img');im.alt='';im.decoding='async';im.crossOrigin='anonymous';a.appendChild(im);w.appendChild(a);
  (T.querySelector('.colA')||T).appendChild(w);return {w,a,img:im,song:-1,ok:false}});
function setSong(L,i){if(L.song===i)return;L.song=i;L.ok=false;const S=SONGS[i],u=(window.SONG_ART||{})[S.id],im=L.img;if(!u)return;   /* 그림 자리 · 크기는 진짜 그림 계산 그대로 (layoutArt — 묶음 위치는 각 장의 바깥 상자에) */
  const lay=()=>{if(L.song===i)L.ok=layoutArt(L.a,im,S)};
  if(im.getAttribute('src')!==u){im.onload=lay;im.src=u;if(im.complete&&im.naturalWidth)lay()}else lay()}
function mkBlur(){if($('slR'))return;const ns='http://www.w3.org/2000/svg',sv=document.createElementNS(ns,'svg');sv.setAttribute('width','0');sv.setAttribute('height','0');sv.setAttribute('aria-hidden','true');sv.style.position='absolute';
  sv.innerHTML=['slR','slL'].map(id=>`<filter id="${id}" x="-12%" y="-45%" width="124%" height="190%" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="0 0"/></filter>`).join('');document.body.appendChild(sv)}
const STEP_DEG=24,D2R=Math.PI/180,sstep=(a,b,x)=>{const t=Math.max(0,Math.min(1,(x-a)/(b-a)));return t*t*(3-2*t)};
function render(p,v){const n=N(),c=SPIN.start+p;   // c: 가운데 오는 곡 (소수) · v: 칸/ms
  rows.forEach((r,i)=>{let x=((i-c)%n+n)%n;if(x>n/2)x-=n;const i0=Math.floor(x),y=slotY(i0)+(slotY(i0+1)-slotY(i0))*(x-i0),ax=Math.abs(x);
    const op=ax<=2?1:Math.max(0,1-(ax-2)/.5);
    r.style.transform=`translateY(${y.toFixed(1)}px) translateY(-50%)`;r.style.opacity=op.toFixed(3);
    const s=ax<.5;if(s!==r.classList.contains('sel')){r.classList.toggle('sel',s);r.setAttribute('aria-current',s?'true':'false')}});
  const ls=Math.min(6,Math.abs(v)*(HR+SF('lg',12))*16.7*.28);$('slL').firstChild.setAttribute('stdDeviation','0 '+ls.toFixed(2));wl.style.filter=ls>.5?'url(#slL)':'';
  const a=Math.floor(p),f=p-a,ia=wrap(SPIN.start+a),ib=wrap(ia+1);
  const A=LAY.find(L=>L.song===ia)||LAY.find(L=>L.song!==ib)||LAY[0],B=A===LAY[0]?LAY[1]:LAY[0];setSong(A,ia);setSong(B,ib);
  const sig=Math.min(24,Math.abs(v)*STEP_DEG*D2R*SPIN.R*16.7*.28),st=Math.min(.06,sig/24*.06),sc=`scale(${(1-st*.3).toFixed(4)},${(1+st).toFixed(4)})`;   /* 한 프레임 움직임의 0.28배만큼 세로 블러 (wheelSwap 과 같은 식) */
  $('slR').firstChild.setAttribute('stdDeviation','0 '+sig.toFixed(2));
  [[A,-f*STEP_DEG,1-sstep(.15,.85,f)],[B,(1-f)*STEP_DEG,sstep(.15,.85,f)]].forEach(([L,ang,op])=>{L.w.style.transform=`rotate(${ang.toFixed(3)}deg) ${sc}`;L.w.style.opacity=L.ok?op.toFixed(3):'0';L.w.style.filter=sig>.6?'url(#slR)':''})}
function spin(){if(SPIN)return;const n=N();if(n<2||matchMedia('(prefers-reduced-motion: reduce)').matches){hint();arm();return}
  const S=n<=6?n*2:n+4,T1=1350,OV=.12,T2=220,t0=performance.now()+260;mkBlur();   /* 두 바퀴 = 고른 곡에서 출발해 고른 곡에서 멈춰요 · 곡 화면이 그려진 뒤 0.26초 있다가 출발 */
  const kk=window.STAGE_K||1,r0w=window.MOB?LAY[0].w.offsetWidth:LAY[0].w.getBoundingClientRect().width/kk,off=Math.round((typeof STAGE_W!=='undefined'?STAGE_W:1920)*.7);
  LAY.forEach(L=>{L.w.style.transformOrigin=`${-off}px 50%`;L.song=-1});
  SPIN={raf:0,last:0,start:wrap(cur-S),R:off+r0w/2};window.SL_HOLD=true;try{stopPreview()}catch(e){}
  T.classList.add('slspin');box.classList.add('spin');render(0,0);
  const frame=now=>{if(!SPIN)return;const t=now-t0;let p,v;
    if(t<=0){p=0;v=0}
    else if(t<T1){const u=t/T1;p=(S+OV)*(1-(1-u)*(1-u));v=(S+OV)*2*(1-u)/T1}   // 빠르게 출발 → 점점 느리게 (목표를 살짝 지나쳐요)
    else if(t<T1+T2){const u=(t-T1)/T2;p=S+OV*(1-u*u*(3-2*u));v=-OV*6*u*(1-u)/T2}   // 되돌아와 딱
    else{p=S;v=0}
    render(p,v);const fl=Math.min(S,Math.floor(p+1e-6));if(fl>SPIN.last){SPIN.last=fl;window.UISFX&&UISFX.play('roll',fl)}   /* 칸을 넘을 때마다 딸깍 — 저절로 다다다닥 → 딸깍 · 딸깍 */
    if(t>=T1+T2){endSpin();return}SPIN.raf=requestAnimationFrame(frame)};
  SPIN.raf=requestAnimationFrame(frame)}
function endSpin(){if(!SPIN)return;cancelAnimationFrame(SPIN.raf);SPIN=null;wl.style.filter='';LAY.forEach(L=>{L.w.style.transform='';L.w.style.filter='';L.w.style.opacity='0'});
  sel=cur;layout(0);box.classList.remove('spin');T.classList.remove('slspin');artFit();
  const r=rows[cur];if(r){r.classList.remove('land');void r.offsetWidth;r.classList.add('land');r.addEventListener('animationend',()=>r.classList.remove('land'),{once:true})}
  window.UISFX&&UISFX.play('land');window.SL_HOLD=false;
  if(typeof playing!=='undefined'&&!playing&&!T.classList.contains('hidden')&&typeof buf!=='undefined'&&buf){try{playPreview()}catch(e){}}   /* 소리를 아직 푸는 중이면 다 푼 뒤 엔진이 틀어요 */
  hint();arm()}
// 도는 중 입력은 막아요 — 룰렛은 끝까지 돌아요 (2026-10-06 사용자: 「마우스나 키보드 누르면 캔슬되는 게 캔슬 안 되게」) · 브라우저 단축키(Ctrl · Alt · F키)는 그대로
function skip(e){if(!SPIN)return;if(e.type==='keydown'&&(e.ctrlKey||e.metaKey||e.altKey||/^F\d+$/.test(e.key)))return;e.preventDefault();e.stopPropagation()}
addEventListener('keydown',skip,true);addEventListener('pointerdown',skip,true);addEventListener('click',skip,true);addEventListener('wheel',skip,{capture:true,passive:false});
let HINT=null;
function hint(){hideHint(true);if(window.MOB)return;   /* 모바일은 js/mobile.js 의 「옆으로 밀어서」 안내 */const h=document.createElement('div');h.className='slhint';h.setAttribute('aria-hidden','true');
  h.innerHTML='<b>곡 바꾸기</b><span><kbd>↑</kbd><kbd>↓</kbd><i>·</i><kbd>W</kbd><kbd>S</kbd></span>';wl.appendChild(h);nav.classList.add('hint');HINT={h,t:setTimeout(()=>hideHint(),2600)}}
function hideHint(now){if(!HINT)return;clearTimeout(HINT.t);const h=HINT.h;HINT=null;nav.classList.remove('hint');if(now){h.remove();return}h.classList.add('out');setTimeout(()=>h.remove(),420)}
// 대기 데모
const IDLE=15000,DEMO_STEP=5000;let idleT=0;
function canDemo(){return !SPIN&&!T.classList.contains('hidden')&&!busy()&&!document.hidden&&(!document.hasFocus||document.hasFocus())&&!document.querySelector('.prpop:not([hidden]),#settings[open],.t1pop')}
function demo(){if(!canDemo()){idleT=setTimeout(demo,(typeof playing!=='undefined'&&playing)?6000:2000);return}step(1,true);idleT=setTimeout(demo,DEMO_STEP)}
function arm(){clearTimeout(idleT);if(window.MOB)return;idleT=setTimeout(demo,IDLE)}   // 모바일은 대기 데모를 안 해요 (배터리 · 데이터)
function poke(){if(HINT&&!SPIN)hideHint();arm()}
['keydown','pointerdown','wheel'].forEach(t=>addEventListener(t,poke,{capture:true,passive:true}));
{let lm=0;addEventListener('pointermove',()=>{const n=performance.now();if(n-lm>400){lm=n;arm()}},{passive:true})}   // 마우스만 움직여도 데모는 쉬어요
window.SL_DEMO={spin,endSpin,demo:()=>{clearTimeout(idleT);demo()}};   // 확인용
window.SONGLIST={go,step,sync,apply,on};
})();
