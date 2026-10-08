// ===================== MAPLE DRUM STAGE =====================
// ---- 그래픽 아틀라스: 미리 그려둔 게임 그래픽(로고, 버튼, 판정 글자, 숫자, 노트, 패드) ----
const ATLAS={url:window.ATLAS_URL||'assets/ui/atlas.webp',w:ATLAS_DATA.w,h:ATLAS_DATA.h,s:ATLAS_DATA.s};
const AT=new Image();AT.crossOrigin='anonymous';let atOk=false;AT.onload=()=>{atOk=true;document.body.classList.add('gfx');document.querySelectorAll('[data-spr]').forEach(el=>sprEl(el));};AT.onerror=()=>{if(AT.crossOrigin){AT.onerror=null;AT.removeAttribute('crossorigin');AT.src=ATLAS.url}};   // CORS 로 못 받으면 예전처럼 받아요 (곱게 줄이기만 빠짐)
AT.src=ATLAS.url;
function sprEl(el,name){name=name||el.dataset.spr;el.dataset.spr=name;if(!atOk)return;const r=ATLAS.s[name];if(!r){const e=window.EXTRA_SPR&&EXTRA_SPR[name];if(e){const w=el.clientWidth||+el.dataset.w||e.w/2;Object.assign(el.style,{backgroundImage:`url(${e.url})`,backgroundSize:'100% 100%',backgroundPosition:'0 0',backgroundRepeat:'no-repeat',height:(w*e.h/e.w)+'px'})}return}const w=el.clientWidth||+el.dataset.w||r[2]/2,k=w/r[2];
  el.style.backgroundImage=`url(${ATLAS.url})`;el.style.backgroundSize=`${ATLAS.w*k}px ${ATLAS.h*k}px`;el.style.backgroundPosition=`${-r[0]*k}px ${-r[1]*k}px`;el.style.height=(r[3]*k)+'px';el.style.backgroundRepeat='no-repeat';
  // 큰 아틀라스를 한 번에 크게 줄이면 외곽선이 계단처럼 깨져요 → 실제 화면 픽셀 크기로 곱게 줄인 그림으로 바꿔 끼워요
  const dpr=Math.min(3,(devicePixelRatio||1)*(window.STAGE_K||1)),pw=Math.max(1,Math.round(w*dpr)),ph=Math.max(1,Math.round(r[3]*k*dpr)),key=name+'@'+pw+'x'+ph;el.__ck=key;
  crisp(name,pw,ph,key).then(u=>{if(u&&el.__ck===key){el.style.backgroundImage=`url(${u})`;el.style.backgroundSize='100% 100%';el.style.backgroundPosition='0 0'}})}
const CRISP={};
function crisp(name,pw,ph,key){if(CRISP[key])return CRISP[key];const r=ATLAS.s[name];
  return CRISP[key]=new Promise(res=>{try{let c=document.createElement('canvas');c.width=r[2];c.height=r[3];c.getContext('2d').drawImage(AT,r[0],r[1],r[2],r[3],0,0,r[2],r[3]);
    while(c.width>=pw*2&&c.height>=ph*2){const n=document.createElement('canvas');n.width=Math.ceil(c.width/2);n.height=Math.ceil(c.height/2);const x=n.getContext('2d');x.imageSmoothingQuality='high';x.drawImage(c,0,0,n.width,n.height);c=n}   // 반씩 줄여 내려가요
    const o=document.createElement('canvas');o.width=pw;o.height=ph;const x=o.getContext('2d');x.imageSmoothingQuality='high';x.drawImage(c,0,0,pw,ph);
    o.toBlob(b=>res(b?URL.createObjectURL(b):null),'image/png')}catch(e){res(null)}})}
function spr(name,cx,cy,h,alpha){const r=ATLAS.s[name];if(!atOk||!r)return false;const w=r[2]*h/r[3];if(alpha!=null)g.globalAlpha=alpha;g.drawImage(AT,r[0],r[1],r[2],r[3],cx-w/2,cy-h/2,w,h);return w}
let sprRT=0;addEventListener('resize',()=>{clearTimeout(sprRT);sprRT=setTimeout(()=>requestAnimationFrame(()=>document.querySelectorAll('[data-spr]').forEach(el=>sprEl(el))),250)});   // 무대 배율(resize)이 정해진 뒤에
function toast(msg){let t=document.getElementById('errToast');if(!t){t=document.createElement('div');t.id='errToast';t.setAttribute('role','alert');
  t.style.cssText='position:fixed;left:10px;right:10px;bottom:calc(10px + env(safe-area-inset-bottom,0px));z-index:99;background:#2B0A45;color:#FFF8FC;border:3px solid #FF4FA3;border-radius:14px;padding:10px 14px;font:14px/1.4 sans-serif;white-space:pre-wrap';document.body.appendChild(t)}
  t.textContent=msg;const m=document.getElementById('loadMsg');if(m)m.textContent=msg;
  if(window.MOB){t.style.display='';clearTimeout(t.__h);t.__h=setTimeout(()=>{t.style.display='none';if(m&&m.textContent===msg)m.textContent=''},6000)}}   // 모바일: 6초 뒤 사라져요 (아래 START 줄을 가리지 않게)
addEventListener('error',e=>{if(window.MOB&&!e.lineno&&/^Script error\.?$/i.test(e.message||'')){console.warn('Script error (다른 출처 스크립트 — 내용이 가려져 있어요)',e);return}   /* 모바일: 내용 없는 다른 출처 오류는 쪽지로 안 띄워요 */toast('오류: '+(e.message||e.type)+(e.lineno?' (줄 '+e.lineno+')':'')+(window.MOB&&e.filename?' · '+String(e.filename).split('/').pop().split('?')[0]:''))});
addEventListener('unhandledrejection',e=>toast('오류: '+((e.reason&&e.reason.message)||e.reason)));
const $=id=>document.getElementById(id);
const bg=$('bg'),bx=bg.getContext('2d'),fx=$('fx'),g=fx.getContext('2d'),stageEl=$('stage'),monBox=$('monBox');
// 창 전체를 덮는 틀(#vp): 무대(1920×1080)는 가운데에 비율 맞춰 두고, 배경(영상 · 무대 배경 · 화면 어두운 막)만 창 끝까지 넓혀요. 넘치는 건 창 끝에서만 잘려요 (스크롤 없음)
{const vp=document.createElement('div');vp.id='vp';stageEl.parentNode.insertBefore(vp,stageEl);vp.appendChild(stageEl)}
let BG_OX=0,BG_OY=0,HB=1080;   // HB: 창 맨 아래 (무대 좌표) — 창이 16:9 보다 길쭉하면 무대 아래로 남는 곳까지   // 무대 밖으로 넓힌 배경 폭 (무대 좌표, 한쪽)
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
let W=0,H=0,DPR=1,BDPR=1,VTOP=0;   // BDPR: 배경 캔버스 배율 (모바일은 절반) · VTOP: 플레이 중 영상 위 끝 (모바일)
const G={};// 원근 도로 기하
// 고정 무대 (2026-10-02 사용자: 창 크기에 따라 영역 · 물체가 바뀌지 않게): 무대는 늘 1920×1080 으로 배치하고 창에는 통째로 비율 맞춰 키우고 줄여요
//  캔버스는 실제 화면 화소에 맞게 (기기 배율 × 무대 배율) 그려서 또렷해요 · 마우스 좌표는 무대 배율로 나눠요
const MOB=!!window.MOB,LITE=MOB,TOUCH=MOB&&(!!window.MOB_TOUCH||matchMedia('(pointer: coarse)').matches||(navigator.maxTouchPoints>0&&/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)));
// 모바일 세로판 (2026-10-06 사용자: 「모바일에서 세로 화면 — 강제로 세로로 돌리게」): 무대 폭 1080 고정 · 높이는 폰 비율대로 1700~2400 (마우스 기기에선 폰 모양 2340)
//  · 폰이 가로로 누워 있으면(창이 가로) 무대 틀(#vp)을 ±90° 돌려 늘 세로로 보여요 — 돌아간 쪽은 화면 방향 각도로 (폰을 세우면 바로 똑바로)
//  · 손가락 · 마우스 좌표는 toStage(x, y) 로 무대 좌표로 (돌린 만큼 되돌려요)
let STAGE_W=MOB?1080:1920,STAGE_H=MOB?2340:1080,ROT=0;
let SAFE_P=null;function safeIn(){if(!SAFE_P){SAFE_P=document.createElement('div');SAFE_P.setAttribute('aria-hidden','true');SAFE_P.style.cssText='position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top,0px) env(safe-area-inset-right,0px) env(safe-area-inset-bottom,0px) env(safe-area-inset-left,0px)';document.body.appendChild(SAFE_P)}
  const cs=getComputedStyle(SAFE_P),v=n=>parseFloat(cs[n])||0;let t=v('paddingTop'),b=v('paddingBottom');if(ROT===-90){t=v('paddingLeft');b=v('paddingRight')}else if(ROT===90){t=v('paddingRight');b=v('paddingLeft')}return {t,b}}
window.toStage=(x,y)=>{const k=window.STAGE_K||1;let ux=x,uy=y,vw=innerWidth,vh=innerHeight;
  if(ROT){const dx=x-innerWidth/2,dy=y-innerHeight/2,c=ROT>0?1:-1;vw=window.VW;vh=window.VH;ux=c*dy+vw/2;uy=-c*dx+vh/2}
  return {x:(ux-(vw-STAGE_W*k)/2)/k,y:(uy-(vh-STAGE_H*k)/2)/k}};
function resize(){let iw=innerWidth,ih=innerHeight;
  if(MOB&&TOUCH&&window.STAGE_K&&iw===resize.w){const a=document.activeElement;if(a&&/^(INPUT|TEXTAREA)$/.test(a.tagName))return}resize.w=iw;   /* 폰 키보드가 올라와 창 높이만 줄면 무대는 그대로 (1위 한마디 입력) */
  if(MOB){ROT=0;if(TOUCH&&iw>ih){let a=null;try{a=screen.orientation&&typeof screen.orientation.angle==='number'?screen.orientation.angle:(typeof window.orientation==='number'?window.orientation:null)}catch(e){}if(a!==0&&a!==180){ROT=(a===270||a===-90)?90:-90;const t=iw;iw=ih;ih=t}}   /* 기기가 실제로 누웠을 때만 돌려요 — 폰은 세로인데 창만 가로(가로로 긴 틀 안)면 그대로 세로 무대를 가운데에 */
    STAGE_H=TOUCH?Math.max(1700,Math.min(2400,Math.round(1080*ih/iw))):2340;window.ROT=ROT;window.VW=iw;window.VH=ih;
    Object.assign(stageEl.parentNode.style,ROT?{inset:'auto',left:(innerWidth-iw)/2+'px',top:(innerHeight-ih)/2+'px',width:iw+'px',height:ih+'px',transform:'rotate('+ROT+'deg)'}:{inset:'',left:'',top:'',width:'',height:'',transform:''});
    stageEl.style.width=STAGE_W+'px';stageEl.style.height=STAGE_H+'px';document.documentElement.classList.toggle('rot',!!ROT)}
  const k=Math.min(iw/STAGE_W,ih/STAGE_H)||1;window.STAGE_K=k;stageEl.style.setProperty('--sk',k.toFixed(5));DPR=Math.min(MOB?.75:2,(devicePixelRatio||1)*k);   /* 모바일: 레인 캔버스 배율 0.75 (2026-10-07 사용자: 「부하 — 퀄리티 낮추던지」) */W=STAGE_W;H=STAGE_H;
  BG_OX=Math.max(0,(iw/k-W)/2);BG_OY=Math.max(0,(ih/k-H)/2);
  if(MOB){const sf=safeIn();window.SAFE={t:Math.round(Math.max(0,sf.t/k-BG_OY)),b:Math.round(Math.max(0,sf.b/k-BG_OY))};stageEl.style.setProperty('--sat',SAFE.t+'px');stageEl.style.setProperty('--sab',SAFE.b+'px');stageEl.style.setProperty('--sh',H+'px')}stageEl.style.setProperty('--ox',(BG_OX+2).toFixed(1)+'px');stageEl.style.setProperty('--oy',(BG_OY+2).toFixed(1)+'px');   /* +2: 창 끝까지 넓힌 배경 · 음영 판이 창 밖으로 2px 더 — 무대를 확대할 때 생기는 반 화소 틈 (2026-10-06 사용자: 「맨 위 1px 음영이 비어 보여」) */
  BDPR=LITE?Math.min(DPR,.5):DPR;bg.width=Math.round((W+2*BG_OX)*BDPR);bg.height=Math.round((H+2*BG_OY)*BDPR);HB=H+BG_OY;fx.width=W*DPR;fx.height=Math.round(HB*DPR);fx.style.height=HB+'px';   /* 레인 · 건반 받침을 창 맨 아래까지 이어 그려요 (2026-10-06 사용자: 「전체 화면이 아닐 때 아래에 여백」) */
  G.land=W/H>1.15;G.fs=G.land?Math.min(1,H/640):(MOB?1.35:Math.min(1,W/430));document.body.classList.toggle('land',G.land);G.sH=.17;G.D=1/G.sH-1;G.cx=W/2;
  if(G.land){// 가로: 가운데 도로, 오른쪽에 큰 신사 무대, 왼쪽에 점수판
    G.yH=H*.18;G.yJ=H*.84;const sBot=1+(H-G.yJ)/(G.yJ-G.yH)*(1-G.sH);G.wB=Math.min(H*1.1,W*.44)/sBot;
    const mh=H*.66,mw=Math.min(W*.34,mh*1.15);window.MON_RECT={x:W*.995-mw,y:H*.93-mh,w:mw,h:mh,W,H};
    G.mx=W*.995-mw/2;G.my=H*.93-mh*.45;G.gx=W*.025;G.gy=H*.5;G.gw=Math.min(W*.26,300)}
  else{const SB=MOB&&window.SAFE?SAFE.b:0;G.yH=H*(MOB?.34:.31);G.yJ=MOB?H-SB-Math.max(360,Math.min(470,H*.19)):H*.80;const sBot=1+(H-G.yJ)/(G.yJ-G.yH)*(1-G.sH);G.wB=(MOB?W*.97:Math.min(W*.97,620))/sBot;
    const mh=Math.min(H*.25,W*.62);window.MON_RECT={x:0,y:G.yH-mh*.93,w:W,h:mh,W,H};
    G.mx=G.cx;G.my=G.yH-H*.09;G.gx=14;G.gy=60;G.gw=W-28}
  // 댄서 캔버스는 무대 전체를 덮어요 (크기·위치를 바꿔도 네모나게 잘리지 않게). 원래 자리(MON_RECT)는 카메라가 그대로 맞춰요 — dancer.js size()
  if(MOB){VTOP=Math.round(Math.max((window.SAFE?SAFE.t:0)+250,G.yH-560));stageEl.style.setProperty('--vtop',VTOP+'px')}   /* 모바일: 곡 영상은 위쪽 하늘에 16:9 로 (css html.mob #bga) */
  Object.assign(monBox.style,{left:'0px',top:'0px',right:'auto',width:W+'px',height:H+'px'});window.dispatchEvent(new Event('monresize'))}
addEventListener('resize',resize);if(MOB)addEventListener('orientationchange',()=>setTimeout(resize,250));resize();
// 창 크기가 바뀌면(전체 화면 F11 등) 움직임용 층(will-change: 앨범 그림 묶음 · 타이틀 로고 조각)을 한 번 내렸다 올려서 새 크기로 다시 그리게 해요
//  — 안 그러면 처음 크기로 그려 둔 그림을 늘려 써서 다른 UI 보다 흐려 보여요 (2026-10-07 사용자: 「선명도가 다른 UI 랑 조금 다른 것 같아」) · css .rr
{let rr=0;addEventListener('resize',()=>{clearTimeout(rr);rr=setTimeout(()=>{const d=document.documentElement;d.classList.add('rr');requestAnimationFrame(()=>requestAnimationFrame(()=>d.classList.remove('rr')))},350)})}
const css=getComputedStyle(document.documentElement),CSSV={},C=k=>{let v=CSSV[k];if(v)return v;v=css.getPropertyValue(k).trim();if(v)CSSV[k]=v;return v};   // CSS 색 변수는 안 바뀌어요 → 한 번만 읽어 둬요 (매 프레임 읽으면 브라우저가 스타일을 다시 계산해서 버벅여요)
const LC=[C('--maple'),'#FF9A42','#7DD95C','#FFFFFF'];
const NIGHT_A=a=>{const n=parseInt(String(C('--night')||'#24104A').replace('#','').slice(0,6),16);return isNaN(n)?`rgba(36,16,74,${a})`:`rgba(${n>>16},${n>>8&255},${n&255},${a})`};   // 배경색(--night) 투명도만 바꿔서   // 레인 색: 노트 버튼에 맞춰 핑크빈 분홍 · 버섯 주황 · 슬라임 연두 · 예티 흰색
const LANES=4,KEYS=['d','f','j','k'],LANE_NAMES=['핑크빈','버섯','슬라임','예티'];
const PERFECT=.045,GREAT=.085,GOOD=.125,EARLY_MISS=.2;   // EARLY_MISS: 노트보다 0.125~0.2초 일찍 누르면 그 노트는 미스 — 마구 누르기로 콤보가 이어지지 않게 (2026-10-08 사용자: 「키 4개를 막 연타하면 콤보가 떠」)
const SPX_LIST=[.5,.75,1,1.25,1.5,1.75,2],SPX_DEF=1,SPX_BASE=.8;   // 배속: 노트가 지평선에서 판정선까지 오는 시간 = 0.8초 ÷ 배속 (×1.0 = 원래 속도 0.8초가 기본 · ×0.5 1.6초 · ×2.0 0.4초)
const DIFFS={easy:{jp:'쉬움',en:'EASY',name:'쉬움',lanes:[0,1,2,3]},normal:{jp:'보통',en:'NORMAL',name:'보통',lanes:[0,1,2,3]},hard:{jp:'어려움',en:'HARD',name:'어려움',lanes:[0,1,2,3]}};   // 채보: 쉬움 = 예전 보통 · 보통 = 예전 어려움 · 어려움 = 새로 (maple-drum-assets/chart/gen_hard.py)
const ls=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:v}catch(e){return d}},ss=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
let diff='normal';   // 게임을 켤 때마다 「보통」 (2026-10-06 사용자: 「기본 세팅은 난이도 보통」) — 판 사이 · 곡을 넘길 때는 고른 난이도 그대로
let spx=SPX_DEF;   // 배속·노트 스타일은 저장하지 않아요: 한 판 끝나면 기본으로 (resetPlayOpts)
let skin='gentle',offset=+ls('mds-off',0)||0,hitStyle=ls('mds-hitfx','flash')==='classic'?'classic':'flash',noteMix='lane',noteBlur='soft',chartVer='new',resultVer='new',finaleOn='on',noteMove='spin';   /* 출시 정리 (2026-10-06 사용자: 「게임 형태를 바꾸는 예전 옵션은 설정에서 제거」) — 노트 모양 · 노트 캐릭터 · 모션블러 · 채보 · 결과 화면 · 피날레는 이 값으로 고정 · 예전 저장값은 안 봐요 / 싱크 값이 깨져 있으면 0 */   // noteMove: spin 빙글빙글 / jump 크게 한 번 점프

   // hitStyle: flash 섬광 폭발(js/hitfx.js) / classic 기본 · noteMix: lane 버튼마다 캐릭터 고정 / mix 노트마다 섞기
const NOTE_LANE=[0,2,1,3];   // 레인(D·F·J·K) → 노트 모델 번호: D 분홍 뿔 몬스터(note) · F 주황버섯(note3) · J 연두 슬라임(note2) · K 하얀 꼬마(note4) — 레인 색에 맞춤
const NOTE_SCALE=[1,1,1,1.15];   // 모델별 화면 크기 배율 (발끝 기준): 하얀 꼬마(note4)만 조금 크게
let VOL={mix:100,k:100,s:100,h:100,p:100};try{Object.assign(VOL,JSON.parse(ls('mds-vol','{}')))}catch(e){}
const VK=['k','s','h','p'];
let APPROACH=SPX_BASE/spx,activeLanes=DIFFS[diff].lanes;
// 원근: z=0 판정선, z=1 지평선
const sOf=z=>1/(1+G.D*z);
const yOf=s=>G.yH+(G.yJ-G.yH)*(s-G.sH)/(1-G.sH);
G.sway=0;const xOf=(u,s)=>G.cx+G.sway*(1-(s-G.sH)/(1-G.sH))+(u/4-.5)*G.wB*s;
const sAtY=y=>G.sH+(y-G.yH)/(G.yJ-G.yH)*(1-G.sH);

function setLbl(t){const l=$('start').querySelector('.lbl');if(l)l.textContent=t;else $('start').textContent=t;$('start').setAttribute('aria-label',t)}
// ===================== 곡 =====================
// 채보 버전 (2026-10-02 주말: 기리기리 · 픽트라 · 픽몬을 4倍の世界 방식 드럼 채보로 새로 — 마음에 안 들면 설정 「채보」에서 예전 채보로 바로 되돌려요)
function chartOf(S){return chartVer==='prev'&&S.chartPrev?S.chartPrev:S.chart}
let cur=Math.max(0,Math.min(SONGS.length-1,+ls('mds-song',0)));CHART=chartOf(SONGS[cur]);
// ===================== 오디오 =====================
let drumBus,drumIn,revSend,pans=[],stemP=[],actx,buf,stemBufs=[],padBufs=[],master,padBus,muff,shelf,lowS,noiseBuf,mixG,src=null,stemSrc=[],stemG=[],t0=0,lat=0;
let initP=null;const ensure=()=>initP||(initP=init());
function b64buf(s){const b=atob(s),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u.buffer}
async function init(){dIn=null;   /* 오디오 장치를 다시 만들면 예전 드럼 입구는 버려요 */
  const AC=window.AudioContext||window.webkitAudioContext;try{actx=new AC({latencyHint:'interactive'})}catch(e){actx=new AC()}
  const lim=actx.createDynamicsCompressor();lim.threshold.value=-6;lim.knee.value=6;lim.ratio.value=12;lim.attack.value=.002;lim.release.value=.12;lim.connect(actx.destination);
  muff=actx.createBiquadFilter();muff.type='lowpass';muff.frequency.value=20000;muff.connect(lim);
  shelf=actx.createBiquadFilter();shelf.type='highshelf';shelf.frequency.value=6000;shelf.gain.value=0;shelf.connect(muff);
  lowS=actx.createBiquadFilter();lowS.type='lowshelf';lowS.frequency.value=110;lowS.gain.value=0;lowS.connect(shelf);
  const glue=actx.createDynamicsCompressor();glue.threshold.value=-14;glue.ratio.value=2;glue.attack.value=.012;glue.release.value=.18;glue.knee.value=8;glue.connect(lowS);
  master=actx.createGain();master.gain.value=.85;master.connect(glue);
  padBus=actx.createGain();padBus.connect(master);
  // ---- 드럼 버스: 새츄레이션(찌릿함) + 강한 컴프(펀치) + 짧은 룸 리버브(공간감) + 병렬 압축 ----
  drumBus=actx.createGain();drumBus.gain.value=1.25;drumBus.connect(master);
  const sh=actx.createWaveShaper(),cv=new Float32Array(2048);for(let i=0;i<2048;i++){const x=i/1023.5-1;cv[i]=Math.tanh(x*2.2)/Math.tanh(2.2)}sh.curve=cv;sh.oversample='2x';
  const comp=actx.createDynamicsCompressor();comp.threshold.value=-16;comp.ratio.value=4;comp.attack.value=.006;comp.knee.value=4;comp.release.value=.09;
  const crush=actx.createDynamicsCompressor();crush.threshold.value=-30;crush.ratio.value=20;crush.attack.value=.001;crush.release.value=.06;const crushG=actx.createGain();crushG.gain.value=.55;
  drumIn=actx.createGain();drumIn.connect(sh);sh.connect(comp);comp.connect(drumBus);drumIn.connect(crush);crush.connect(crushG);crushG.connect(drumBus);
  const room=actx.createConvolver(),ir=actx.createBuffer(2,actx.sampleRate*.7,actx.sampleRate);
  for(let c=0;c<2;c++){const d=ir.getChannelData(c);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/d.length,4)}
  room.buffer=ir;revSend=actx.createGain();revSend.gain.value=.16;drumIn.connect(revSend);revSend.connect(room);room.connect(drumBus);
  [0,0,.3,-.3].forEach((p,l)=>{const pn=actx.createStereoPanner?actx.createStereoPanner():actx.createGain();if(pn.pan)pn.pan.value=p;pn.connect(drumIn);pans[l]=pn});
  noiseBuf=actx.createBuffer(1,actx.sampleRate*.5,actx.sampleRate);const d=noiseBuf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
}
const SONG_CACHE={};
function loadSong(i){if(SONG_CACHE[i])return SONG_CACHE[i];const S=SONGS[i];
  const dec=ab=>new Promise((res,rej)=>{const p=actx.decodeAudioData(ab,res,rej);if(p&&p.then)p.then(res,rej)});
  Object.keys(SONG_CACHE).forEach(k=>{if(+k!==i)delete SONG_CACHE[k]}); // 다른 곡 소리는 메모리에서 비워요 (휴대폰 메모리 절약)
  return SONG_CACHE[i]=(async()=>{const all=[];const files=['mix.mp3',...['kick','snare','hat','clap'].map(n=>'stem_'+n+'.mp3'),...['kick','snare','hat','clap'].map(n=>'pad_'+n+'.wav')];
    // S.getAB: 메인 화면에서 미리 받아 둔 파일(바이트). 디코딩하면 버퍼가 비워져서 복사본을 넘겨요
    await Promise.all(files.map(async(f,k)=>{let ab;if(S.b64&&S.b64[f])ab=b64buf(S.b64[f]);else if(S.getAB)ab=(await S.getAB(f)).slice(0);else{const u=(S.urls&&S.urls[f])||S.dir+f,r=await fetch(u);if(!r.ok)throw new Error(S.id+'/'+f+' '+r.status);ab=await r.arrayBuffer()}all[k]=await dec(ab)}));return {buf:all[0],stems:all.slice(1,5),pads:all.slice(5,9)}})().catch(e=>{delete SONG_CACHE[i];throw e})}
async function useSong(i){await ensure();const d=await loadSong(i);if(i!==cur)return;buf=d.buf;stemBufs=d.stems;padBufs=d.pads}
const PADG=[1.1,1,.7,.8];
function pad(l,vel,noLayer){if(!actx||!padBufs[l])return;const s=actx.createBufferSource(),gn=actx.createGain();s.buffer=padBufs[l];
  s.playbackRate.value=1+(Math.random()-.5)*.02;gn.gain.value=PADG[l]*vel*VOL[VK[l]]/100;s.connect(gn).connect(pans[l]);s.start();if(!noLayer)layer(l,actx.currentTime,vel)}
// ---- 합성 레이어: 곡의 드럼에 펀치를 덧대요 ----
function nz(at,dur,vol,type,f,q,l){const n=actx.createBufferSource(),bf=actx.createBiquadFilter(),e=actx.createGain();n.buffer=noiseBuf;bf.type=type;bf.frequency.value=f;bf.Q.value=q;
  e.gain.setValueAtTime(0,at);e.gain.linearRampToValueAtTime(vol,at+.001);e.gain.exponentialRampToValueAtTime(.0001,at+dur);n.connect(bf).connect(e).connect(pans[l]);n.start(at,Math.random()*.3);n.stop(at+dur+.02)}
function tn(at,f1,f2,dur,vol,type,l){const o=actx.createOscillator(),e=actx.createGain();o.type=type;o.frequency.setValueAtTime(f1,at);o.frequency.exponentialRampToValueAtTime(f2,at+dur*.35);
  e.gain.setValueAtTime(0,at);e.gain.linearRampToValueAtTime(vol,at+.002);e.gain.exponentialRampToValueAtTime(.0001,at+dur);o.connect(e).connect(pans[l]);o.start(at);o.stop(at+dur+.02)}
function layer(l,at,vel){const v=vel*VOL[VK[l]]/100*(fever?1.25:1);
  if(l===0){tn(at,170,46,.32,.95*v,'sine',0);nz(at,.012,.35*v,'highpass',3500,.7,0);duck(at)}
  else if(l===1){nz(at,.17,.6*v,'bandpass',2600,.7,1);tn(at,215,175,.1,.4*v,'triangle',1);nz(at,.03,.3*v,'highpass',6000,.7,1)}
  else if(l===2){nz(at,.045,.32*v,'highpass',8500,.9,2);nz(at,.02,.18*v,'bandpass',12000,1,2)}
  else{[0,.009,.019].forEach((d,i)=>nz(at+d,i<2?.012:.13,.5*v,'bandpass',1500,1.1,3));nz(at,.04,.2*v,'highpass',5000,.8,3)}}
// ---- 드럼 키트 키음 (chart.mode 'full' + chart.hs.kit 'drum') — 누르는 버튼 = 드럼 한 방 ----
// 반주에서 곡의 킥·스네어를 빼 두고(하이햇·클랩은 그대로), 노트를 칠 때마다 그 노트의 드럼 한 타가 바로 나요 → 내가 친 드럼으로 곡이 완성돼요. 덧씌우는 소리 없음
// 소리: 진짜 드럼 머신 녹음 — TR-808(Michael Fischer, 사용 제한 없음) · TR-707(Francois Dion, 퍼블릭 도메인)으로 만든 키트 (maple-drum-assets/realkit/make_realkit.py, 리소스 kit2/*)
//  · 드럼 노트(n.r): k 킥 · s 스네어 · h 하이햇 / 멜로디 노트: 박 자리대로 — 1·3박 킥 · 2·4박 스네어 · 반 박 엇박 하이햇 · 16분 엇박 박수 (탐은 안 써요)
//  · 구간 키트: 잔잔·보통 = a(단단하게) · 후렴급·피버 = b(크고 굵게, 엇박 하이햇은 열린 하이햇)
//  · 쾅! 촤악: 후렴급 4마디 묶음의 첫 박 · 25콤보 달성 뒤 첫 강박은 킥+크래시
//  · 판정이 좋을수록 세게 (퍼펙트 100% · 그레이트 82% · 굿 62%), 사람이 친 것처럼 아주 살짝씩 다르게
const DRUMKIT=()=>CHART.mode==='full'&&CHART.hs&&CHART.hs.kit==='drum';
const KIT_NAMES=['kick_a','kick_b','snare_a','snare_b','clap','hat_c','hat_o','tom_l','tom_m','tom_h','crash','kick_crash'];
const KIT_G={kick_a:1,kick_b:1,snare_a:.85,snare_b:.9,clap:.8,hat_c:.42,hat_o:.4,tom_l:.85,tom_m:.82,tom_h:.8,crash:.6,kick_crash:1};
const KIT_VK=n=>/^kick/.test(n)?'k':/^snare/.test(n)?'s':/^hat/.test(n)?'h':'p';   // 키트 소리 → 볼륨 칸 (킥 · 스네어 · 하이햇, 박수 · 탐 · 크래시는 퍼커션)
let KIT={},kitLoading=null,dIn=null,kitCrashNext=false,kitCrashed={};
function kitLoad(){if(kitLoading||!actx||!window.KIT_URLS)return kitLoading;
  kitLoading=Promise.all(KIT_NAMES.map(async n=>{const u=KIT_URLS[n];if(!u)return;try{const ab=await (await fetch(u)).arrayBuffer();KIT[n]=await new Promise((res,rej)=>{const p=actx.decodeAudioData(ab,res,rej);if(p&&p.then)p.then(res,rej)})}catch(e){console.warn('kit',n,e)}}));return kitLoading}
function dInit(){if(dIn||!actx)return;dIn=actx.createGain();dIn.gain.value=1.6;const cp=actx.createDynamicsCompressor();cp.threshold.value=-6;cp.ratio.value=4;cp.attack.value=.006;cp.release.value=.12;cp.knee.value=3;   // 1.6: 리듬게임답게 노트 소리가 노래보다 확실히 크게(반주보다 약 +6dB) · 센 소리는 압축기로 눌러 찢어지지 않게 · 어택은 살려서 '탁' 하고
  const o=actx.createGain();o.gain.value=1;dIn.connect(cp).connect(o).connect(master)}
function kitPlay(name,at,v){const b=KIT[name];if(!b)return false;const vk=VOL[KIT_VK(name)]/100;if(!(vk>0))return true;   /* 설정 볼륨(킥 · 스네어 · 하이햇 · 퍼커션)을 키트 소리에도 — 0% 면 안 내요 (2026-10-07 테스터: 「볼륨 껐는데도 드럼 소리가 계속 나요」) */const s=actx.createBufferSource(),g=actx.createGain();s.buffer=b;s.playbackRate.value=1+(Math.random()-.5)*.012;
  g.gain.value=(KIT_G[name]||1)*v*vk*(.97+Math.random()*.06);s.connect(g).connect(dIn);s.start(Math.max(actx.currentTime,at));return true}
// 게임 밖(곡 선택 · 곡 화면)에서 조작키를 눌러 들어보는 소리 — 게임 안 드럼 게임 레인과 같은 드럼
const KIT_LANE=['kick_b','snare_b','hat_c','clap'];
function kitPreview(l){ensure().then(()=>{actx.resume().catch(()=>{});dInit();const go=()=>kitPlay(KIT_LANE[l],actx.currentTime,.9);if(KIT[KIT_LANE[l]])go();else (kitLoad()||Promise.resolve()).then(go)}).catch(()=>{})}
window.kitPreview=kitPreview;
// 드럼 기준 채보(hs.chart 'drum'): 노트가 곡의 실제 드럼 타격 순간에 있어서, 맞히면 반주에서 빼 둔 곡의 킥 · 스네어를 그 노트부터 다음 같은 드럼 노트까지 되살려요
//  → 내가 친 드럼 = 곡의 드럼 (+ 키트 한 방으로 손맛) · 쉬움처럼 노트를 덜어 낸 사이의 곡 드럼도 이어서 나와요 · 놓치면 다음에 맞힐 때까지 그 드럼이 비어요
function restoreStem(l,n){const gn=stemP[l];if(!gn)return;const c=actx.currentTime,at=Math.max(c,RT(n.t)-.012),grp=l===0?['k','x']:['s','c'];
  const nx=notes.find(m=>m.t>n.t+.01&&grp.includes(m.s)),gap=nx?nx.t-n.t:.6,end=at+Math.min(gap,1.6)/RATE+.02,pk=VOL[VK[l]]/100;
  gn.gain.cancelScheduledValues(c);gn.gain.setValueAtTime(gn.gain.value,c);if(at>c+.004)gn.gain.setValueAtTime(gn.gain.value,at);
  gn.gain.linearRampToValueAtTime(pk,at+.004);gn.gain.setTargetAtTime(0,end,.03)}
// 박자 지도: 곡 시각 ↔ 몇 번째 박(소수, 첫 박 = 0). CHART.beats 를 그대로 따라가요 — 템포가 조금씩 흔들리는 곡(4倍の世界)도 박이 안 밀려요. 처음 · 끝 밖은 가장 가까운 박 길이로 이어요
function beatAt(t){const B=CHART.beats,n=B.length;if(n<2)return (t-(B[0]||0))*CHART.bpm/60;if(t<=B[0])return (t-B[0])/(B[1]-B[0]);if(t>=B[n-1])return n-1+(t-B[n-1])/(B[n-1]-B[n-2]);
  let lo=0,hi=n-1;while(hi-lo>1){const m=(lo+hi)>>1;if(B[m]<=t)lo=m;else hi=m}return lo+(t-B[lo])/(B[lo+1]-B[lo])}
function beatTime(b){const B=CHART.beats,n=B.length;if(n<2)return (B[0]||0)+b*60/CHART.bpm;if(b<=0)return B[0]+b*(B[1]-B[0]);if(b>=n-1)return B[n-1]+(b-n+1)*(B[n-1]-B[n-2]);const i=Math.floor(b);return B[i]+(b-i)*(B[i+1]-B[i])}
function hsBar(t){return Math.floor((beatAt(t+.02)-CHART.db)/4)}
function hsLv(t){const L=CHART.hs.lv,b=hsBar(t);return b<0?0:L[Math.min(L.length-1,b)]}
function hsPos(t){const k=Math.round((beatAt(t)-CHART.db)*4);return {beat:((Math.floor(k/4)%4)+4)%4,sub:((k%4)+4)%4}}   // 마디 안 몇 번째 박 · 16분 위치
function hitSound(n,l,vel,k){if(!actx)return;if(!DRUMKIT()){hitTick(l,vel);return}dInit();kitLoad();
  if(!n){kitPlay(['kick_a','snare_a','hat_c','clap'][l],actx.currentTime,.45*vel);return}   // 노트 없는 곳: 레인마다 드럼 패드처럼
  const at=Math.max(actx.currentTime,RT(n.t)),lv=hsLv(n.t),P=hsPos(n.t),big=lv>=2||fever,v=(k==='p'?1:k==='gr'?.82:.62)*vel*(fever?1.08:1),bar=hsBar(n.t);
  // 드럼 게임 채보(n.s): 레인 = 드럼 — D 킥 · F 스네어 · J 하이햇 · K 박수/열린 하이햇/크래시(큰 노트). 누르는 버튼과 소리가 항상 같아요
  if(n.s){const S=n.s,str=P.sub===0&&(P.beat===0||P.beat===2);let nm;
    if(S==='x')nm='kick_crash';
    else if(S==='k'){if(kitCrashNext&&str){kitCrashNext=false;nm='kick_crash'}else nm=big?'kick_b':'kick_a'}   // 25콤보 보상: 다음 강박 킥이 '쾅! 촤악'
    else if(S==='s')nm=big?'snare_b':'snare_a';else if(S==='h')nm='hat_c';else if(S==='o')nm='hat_o';else nm='clap';
    const st=(S==='k'||S==='x')?0:(S==='s'||S==='c')?1:-1;if(st>=0&&CHART.hs.chart==='drum')restoreStem(st,n);   // 드럼 기준 채보: 곡의 원래 킥 · 스네어도 같이 되살려요
    kitPlay(nm,at,v*(st>=0&&CHART.hs.chart==='drum'?.8:1));return}
  let r=n.r;if(!r){if(P.sub===0&&(P.beat===0||P.beat===2))r='k';else if(P.sub===0)r='s';else if(P.sub===2)r='h';else r='c'}
  const strong=P.sub===0&&(P.beat===0||P.beat===2);
  if((lv>=2&&bar%4===0&&P.beat===0&&P.sub===0&&!kitCrashed[bar])||(kitCrashNext&&strong)){kitCrashed[bar]=1;kitCrashNext=false;kitPlay('kick_crash',at,v);return}   // 쾅! 촤악
  if(r==='k')kitPlay(big?'kick_b':'kick_a',at,v);
  else if(r==='s')kitPlay(big?'snare_b':'snare_a',at,v);
  else if(r==='h')kitPlay(big&&P.sub===2?'hat_o':'hat_c',at,v);
  else kitPlay('clap',at,v)}
// 음악 고정 모드 기본 타격음 (곡 분석 정보가 없을 때): 짧고 가벼운 '톡'
function hitTick(l,vel){if(!actx)return;const at=actx.currentTime,v=.2*vel*VOL[VK[l]]/100*(fever?1.2:1),f=[900,1050,1200,1380][l];
  const o=actx.createOscillator(),e=actx.createGain();o.type='triangle';o.frequency.setValueAtTime(f*1.6,at);o.frequency.exponentialRampToValueAtTime(f,at+.02);
  e.gain.setValueAtTime(0,at);e.gain.linearRampToValueAtTime(v,at+.002);e.gain.exponentialRampToValueAtTime(.0001,at+.045);o.connect(e).connect(pans[l]);o.start(at);o.stop(at+.06);
  nz(at,.018,v*.55,'highpass',5200,.7,l)}
// 킥이 들어가면 반주를 살짝 눌러서 킥이 더 튀어나오게 (펌핑)
function duck(at){if(!mixG)return;const base=VOL.mix/100;mixG.gain.cancelScheduledValues(at);mixG.gain.setValueAtTime(mixG.gain.value,at);
  mixG.gain.linearRampToValueAtTime(base*.62,at+.01);mixG.gain.setTargetAtTime(base,at+.06,.07)}
// 맞히면 반주에서 빼둔 곡의 진짜 드럼을 정확한 박자 위치에 되살려요
// 반주에선 원래 드럼을 빼두고(cancel), 맞히면 같은 드럼을 드럼 버스로 크게 틀어요(play)
function restore(l,n){const gn=stemP[l];if(!gn)return;const c=actx.currentTime,at=Math.max(c,RT(n.t)-.012);
  const nx=notes.find(m=>m.l===l&&m.t>n.t+.01),gap=nx?nx.t-n.t:.5,end=at+Math.min(gap,.5)+.02,pk=(fever?1.6:1.3)*VOL[VK[l]]/100;
  gn.gain.cancelScheduledValues(c);gn.gain.setValueAtTime(gn.gain.value,c);if(at>c+.004)gn.gain.setValueAtTime(gn.gain.value,at);
  gn.gain.linearRampToValueAtTime(pk,at+.004);gn.gain.setTargetAtTime(0,end,.03);layer(l,at,.75);if(l===0)duck(at)}
function muffle(){const c=actx.currentTime;muff.frequency.cancelScheduledValues(c);muff.frequency.setValueAtTime(muff.frequency.value,c);
  muff.frequency.exponentialRampToValueAtTime(600,c+.02);muff.frequency.setTargetAtTime(20000,c+.18,.12)}
function stick(at,acc){const o=actx.createOscillator(),e=actx.createGain();o.type='triangle';o.frequency.value=acc?2300:1750;
  e.gain.setValueAtTime(0,at);e.gain.linearRampToValueAtTime(.5,at+.001);e.gain.exponentialRampToValueAtTime(.0001,at+.06);o.connect(e).connect(padBus);o.start(at);o.stop(at+.08);
  const n=actx.createBufferSource(),f=actx.createBiquadFilter(),g2=actx.createGain();n.buffer=noiseBuf;f.type='bandpass';f.frequency.value=3500;f.Q.value=2;
  g2.gain.setValueAtTime(.6,at);g2.gain.exponentialRampToValueAtTime(.0001,at+.03);n.connect(f).connect(g2).connect(padBus);n.start(at,Math.random()*.3);n.stop(at+.05)}
function impact(at,big){if(!actx)return;at=at||actx.currentTime;const o=actx.createOscillator(),e=actx.createGain();o.type='sine';o.frequency.setValueAtTime(big?90:70,at);o.frequency.exponentialRampToValueAtTime(28,at+.5);
  e.gain.setValueAtTime(0,at);e.gain.linearRampToValueAtTime(big?.9:.6,at+.005);e.gain.exponentialRampToValueAtTime(.0001,at+(big?.9:.6));o.connect(e).connect(drumIn);o.start(at);o.stop(at+1);
  const n=actx.createBufferSource(),f=actx.createBiquadFilter(),g2=actx.createGain();n.buffer=noiseBuf;n.loop=true;f.type='lowpass';f.frequency.setValueAtTime(9000,at);f.frequency.exponentialRampToValueAtTime(300,at+.6);
  g2.gain.setValueAtTime(big?.5:.3,at);g2.gain.exponentialRampToValueAtTime(.0001,at+.7);n.connect(f).connect(g2).connect(drumIn);n.start(at);n.stop(at+.75)}
function whoosh(){const c=actx.currentTime,n=actx.createBufferSource(),f=actx.createBiquadFilter(),e=actx.createGain();n.buffer=noiseBuf;n.loop=true;
  f.type='bandpass';f.Q.value=3;f.frequency.setValueAtTime(400,c);f.frequency.exponentialRampToValueAtTime(9000,c+.5);
  e.gain.setValueAtTime(0,c);e.gain.linearRampToValueAtTime(.35,c+.4);e.gain.exponentialRampToValueAtTime(.001,c+.7);n.connect(f).connect(e).connect(padBus);n.start(c);n.stop(c+.75)}

// ===================== 게임 상태 =====================
let PADI=null;   // 노트 버튼 그림 (ui/pads)
// 노트 모션블러 설정: 셔터 시간(지나온 시간만큼 잔상) · 잔상 장수 · 첫 잔상 진하기
const NBLUR={off:null,soft:{sh:1/60,n:4,a:.46},strong:{sh:2.4/60,n:7,a:.56}};   // 잔상이 많을수록 매끈해요 (강하게 7장)
const NOTE_DRAW=[],LANDS=[];   // LANDS: 친 노트의 착지 모습 (판정선 위에서 0.2초, 보통·점프 모두)
// 착지 찌그러짐 [가로, 세로]: 닿는 순간 납작(탁) → 0.07초에 살짝 길쭉하게 튀고 → 0.16초면 제모양
// 노트 회전 프레임: 노트마다 처음 그릴 때 정해요 — 방향(시계/반시계) · 초당 0.3~0.55바퀴 · 시작 각도. 판마다 노트를 새로 만들어서 매번 달라져요
function spinF(n,N){if(n.sd==null){n.sd=Math.random()<.5?-1:1;n.sv=.3+Math.random()*.25;n.sp=Math.random()}const tm=performance.now()/1000;return ((Math.floor((tm*n.sv*n.sd+n.sp)*N)%N)+N)%N}
function landSq(t){if(t<0)return [1,1];if(t<.04){const k=t/.04;return [1.34-.06*k,.64+.04*k]}if(t<.16){const k=(t-.04)/.12,w=Math.sin(k*Math.PI)*(1-k);return [1.28-.28*k-.1*w,.68+.32*k+.14*w]}return [1,1]}   // 노트 캐릭터 그리기 목록 (받침을 먼저 다 깔고 나중에 그려요)
let playing=false,notes=[],score=0,dispScore=0,combo=0,maxCombo=0,cnt={p:0,gr:0,g:0,m:0},gauge=0,fever=false;
let RATE=1,PRAC=null,pracIv=null,autoIv=null;   // 연습 모드 (js/practice.js): RATE 재생 속도 · PRAC {s0 시작, e 끝, pre 앞 여유, loop 반복, auto 자동 플레이, label}
const now=()=>actx?(actx.currentTime-t0-lat)*RATE+offset/1000:0;
const RT=x=>t0+x/RATE;   // 곡 시각 → 오디오 시계 시각
// 판정 기록 (결과 화면 v2: 타이밍 분포 · 판정 흐름): [노트 시각, 오차(초, +면 늦게) 또는 null(미스), 판정, 레인]
let HITLOG=[],finaleDone=false,PLAYOPT={move:'spin',spx:1},serverBestP=null;
// 점프 노트 보너스 (2026-10-06 사용자: 「점프 노트로 플레이하는 사람은 점수를 더」): 점프로 시작한 판은 노트 점수 ×1.1 — 등급(SS·S…)은 정확도로 정해져서 그대로, 점수(랭킹 · 최고 기록)만 더
const JUMP_BONUS=1.1,scoreMul=()=>PLAYOPT.move==='jump'?JUMP_BONUS:1;window.SCORE_MUL=scoreMul;window.JUMP_BONUS=JUMP_BONUS;
function checkFinale(){if(finaleDone||!playing||!notes.length)return;if(cnt.p+cnt.gr+cnt.g+cnt.m<notes.length)return;finaleDone=true;if(cnt.m===0&&finaleOn!=='off'&&!PRAC&&window.RESULT2)RESULT2.finale(cnt.gr+cnt.g===0?'ap':'fc')}   // 마지막 노트까지 판정이 끝나면: 미스 없으면 풀콤보 · 전부 퍼펙트면 올퍼펙트 연출
let lastScTxt='',tapHint=0,laserHit=0,gridScroll=0,banners=[],flares=[],hexes=[],fw=[],shards=[],parts=[],rings=[],beams=[],texts=[],flashes=[0,0,0,0],down=[false,false,false,false],beatGlow=0,lastBeat=-1,comboBounce=0,whiteFlash=0,redFlash=0,feverA=0,judge=null;
function updHud(){$('maxc').textContent=maxCombo}
function setFever(on){if(on===fever)return;fever=on;if(!actx)return;const c=actx.currentTime;drumBus.gain.setTargetAtTime(on?1.5:1.25,c,.1);revSend.gain.setTargetAtTime(on?.26:.16,c,.1);shelf.gain.setTargetAtTime(on?4:0,c,.1);lowS.gain.setTargetAtTime(on?3:0,c,.1);
  if(on){whiteFlash=.35;whoosh();impact(actx.currentTime+.35,true);confetti(90);banner('피버 타임!!','점수 2배!','fever');window.monsterReact&&monsterReact('cheer')}}
// 휴대폰은 '누른 그 순간'에 오디오를 깨워야 소리가 나요
function unlock(){if(!actx||paused)return;   // 일시정지 중엔 소리를 다시 켜지 않아요
try{actx.resume();const b=actx.createBuffer(1,1,22050),s=actx.createBufferSource();s.buffer=b;s.connect(actx.destination);s.start(0)}catch(e){}}
const CD_T=[];   // 카운트다운 글자 예약 (다시 시작하면 지워요)
// 고른 곡 영상 기다리기 (2026-10-06 사용자: 「영상 없이 하는 건 좀 그렇고」) — 곡 시작 카드에 「영상 준비 중 63%」 (연습 · 자동 플레이는 곡 화면 아래 글씨) · 받다가 오류가 나면 그때만 영상 없이
function vidWait(S,card){const say=(t,k)=>{if(card&&window.SINTRO&&SINTRO.status)SINTRO.status(t,k);else $('loadMsg').textContent=t||''};
  const tick=()=>{const k=window.BGA_PROG?BGA_PROG(S.id):0;say('영상 준비 중 '+Math.floor(k*100)+'%',k)};tick();const iv=setInterval(tick,150);
  return S.bgaLoad().then(u=>{S.bga=u;if(SONGS[cur]===S)setBga(u)},err=>console.warn('bga',S.id,err)).then(()=>{clearInterval(iv);say(null)})}
async function start(pr){if(!(pr&&pr.s0!=null))pr=null;if(!pr&&window.SINTRO&&SINTRO.on())return;const c0=cur,d0=diff;   /* 인트로 카드가 떠 있는 동안 또 누르면(엔터 연타) 무시 */window.UISFX&&UISFX.play('start');   /* 시작 효과음 (js/uisfx.js) */const intro=!pr&&!playing&&window.SINTRO?SINTRO.play(SONGS[cur],diff):null;   /* 곡 시작 인트로 (js/songintro.js) — 연습 · 자동 플레이는 건너뛰어요 */try{vid.pause()}catch(e){}stopPreview();unlock();clearInterval(pracIv);clearInterval(autoIv);CD_T.forEach(clearTimeout);CD_T.length=0;
  if(!buf){$('start').disabled=true;setLbl('LOADING');try{await useSong(cur)}catch(e){if(!actx)initP=null;window.SINTRO&&SINTRO.cancel();$('start').disabled=false;setLbl('다시 시도');$('loadMsg').textContent='소리를 불러오지 못했어요: '+e.message;return}}
  if(intro)await intro;   // 인트로 카드를 최소 1.25초는 보여 줘요 (소리를 받는 동안도 이 카드가 덮어요)
  {const S0=SONGS[cur];if(S0&&S0.bgaLoad&&bgaMode!=='off'&&!S0.bga)await vidWait(S0,!!intro)}   /* 그 곡 영상을 다 받을 때까지 기다려요 — 플레이 중엔 아무것도 받지 않게 */
  // 사파리는 resume()이 끝나지 않고 멈춰 있을 수 있어서 최대 0.6초만 기다리고 그냥 진행해요
  await Promise.race([actx.resume().catch(()=>{}),new Promise(r=>setTimeout(r,600))]);
  $('loadMsg').textContent='';
  if(cur!==c0||diff!==d0||!buf){window.SINTRO&&SINTRO.cancel();$('start').disabled=false;setLbl('START');try{playPreview()}catch(e){}return}   /* 기다리는 사이 곡 · 난이도가 바뀌었거나 소리가 없으면 시작하지 않아요 (2026-10-06 출시 점검) */
  lat=(actx.outputLatency||0)+(actx.baseLatency||0);
  activeLanes=DIFFS[diff].lanes;$('hudDiff').textContent=DIFFS[diff].jp+' · '+DIFFS[diff].en;
  PRAC=pr;RATE=pr?pr.rate||1:1;document.body.classList.toggle('practice',!!pr);document.body.classList.toggle('autoplay',!!(pr&&pr.auto));
  notes=CHART.sets[diff].map(n=>({t:n.t,l:n.l,m:n.m,r:n.r,s:n.s,hit:false,dead:false})).filter(n=>!pr||(n.t>=pr.s0-.03&&n.t<=pr.e)).sort((a,b)=>a.t-b.t);if(window.PLAYOPTS)PLAYOPTS.apply(notes);   /* 플레이 옵션: 미러 · 랜덤 레인, 가림막 (js/options.js) */
  score=dispScore=combo=maxCombo=0;cnt={p:0,gr:0,g:0,m:0};gauge=0;fever=false;HITLOG=[];finaleDone=false;PLAYOPT={move:noteMove,spx,popt:window.PLAYOPTS?PLAYOPTS.get():null};window.HMETER&&HMETER.reset(G.yJ);window.ADLIB&&ADLIB.start(CHART,diff);serverBestP=window.RANK&&RANK.myBest?RANK.myBest(SONGS[cur].id,diff).catch(()=>null):null;shelf.gain.value=0;lowS.gain.value=0;parts=[];rings=[];beams=[];texts=[];judge=null;window.HITFX&&HITFX.clear();updHud();
  [src,...stemSrc].forEach(s=>{if(s){s.onended=null;try{s.stop()}catch(e){}}});
  const per=60/CHART.bpm,a0=pr?Math.max(0,pr.s0-pr.pre):0,lead=pr?Math.max(0,pr.pre-(pr.s0-a0)):0;t0=pr?actx.currentTime+.35+(lead-a0)/RATE:actx.currentTime+.35+4*per;   /* 연습: 구간 한 마디 앞(a0)부터 소리를 틀고 그 마디에 카운트다운 (곡 맨 앞이면 모자란 만큼 기다렸다가) */
  mixG=actx.createGain();mixG.gain.value=VOL.mix/100*(DRUMKIT()?.8:1);   /* 드럼 키트 곡: 노트 소리가 도드라지게 반주를 살짝 낮춰요 */mixG.connect(master);
  src=actx.createBufferSource();src.buffer=buf;src.playbackRate.value=RATE;src.connect(mixG);src.start(RT(a0),a0);src.onended=()=>{if(playing)finish()};
  stemBufs.forEach((sb,l)=>{const act=activeLanes.includes(l)&&(CHART.mode!=='full'||(DRUMKIT()&&l<2));   /* full: 곡 전체를 따라가는 채보 — 드럼 키트면 곡의 킥·스네어를 빼 두고(내가 쳐서 채워요), 하이햇·클랩은 그대로 깔아 둬요 */const gn=actx.createGain();gn.gain.value=act?-.95:0;gn.connect(mixG);const pg=actx.createGain();pg.gain.value=0;pg.connect(pans[l]);
    const s=actx.createBufferSource();s.buffer=sb;s.playbackRate.value=RATE;s.connect(gn);if(act)s.connect(pg);s.start(RT(a0),a0);stemG[l]=gn;stemP[l]=pg;stemSrc[l]=s});
  const b0=pr?Math.round(beatAt(pr.s0)):0;for(let k=4;k>=1;k--){const at=RT(beatTime(b0-k));stick(at,k===4);
    CD_T.push(setTimeout(()=>{if(!playing)return;texts=texts.filter(o=>!o.cd);texts.push({cd:1,spr:k===1?'go':k===4?'ready':'c'+(k-1),txt:k===1?'시작!':k===4?'준비!':String(k-1),sub:'',c:k===1?'--leaf':'--gold',a:1,s:1.8,size:k===4?46:70,y:G.yH+(G.yJ-G.yH)*.42});flashes.fill(.8)},Math.max(0,(at-actx.currentTime)*1000)))}
  kitCrashNext=false;kitCrashed={};if(DRUMKIT()){dInit();kitLoad()}impact(RT(pr?pr.s0:CHART.beats[0]),true);setTimeout(()=>pr?banner(pr.auto?'AUTO PLAY':'PRACTICE',SONGS[cur].title+(pr.label?' · '+pr.label:''),'stage'):intro?0:banner("LET'S GO!",SONGS[cur].title,'stage'),150);   /* 인트로 카드가 곡 이름을 보여 줬으면 LET'S GO 띠는 건너뛰어요 */   /* 스테이지 개념은 없어요 — 곡 이름만 */
  if(bgaReady&&bgaMode!=='off'){vid.loop=false;vid.pause();vid.currentTime=VOFF+a0}
  if(pr){pracIv=setInterval(()=>{if(!playing||paused||PRAC!==pr)return;if(now()>pr.e+.9){if(pr.loop)abortSong().then(()=>start(pr));else endPractice()}},100);   /* 구간 끝: 반복이면 처음으로, 아니면 곡 화면으로 */
    if(pr.auto)autoIv=setInterval(()=>{if(!playing||paused||PRAC!==pr)return;const t=now();for(const n of notes){if(n.hit||n.dead)continue;if(n.t-t<.006&&n.t-t>-.04){press(n.l);setTimeout(()=>release(n.l),70)}if(n.t-t>.1)break}},3)}   /* 자동 플레이: 노트 시각에 맞춰 대신 눌러요 (기록 · 랭킹에는 안 남아요) */
  playing=true;paused=false;show(null);window.SINTRO&&SINTRO.out();$('pauseBtn').classList.remove('hidden');$('start').disabled=false;setLbl('START');if(document.hidden)pauseGame()}   // 인트로 카드가 쓸려 나가며 플레이 화면
function endPractice(){const pr=PRAC;clearInterval(pracIv);clearInterval(autoIv);playing=false;[src,...stemSrc].forEach(s=>{if(s){s.onended=null;try{s.stop()}catch(e){}}});setFever(false);$('pauseBtn').classList.add('hidden');banners=[];texts=[];judge=null;window.HITFX&&HITFX.clear();
  PRAC=null;RATE=1;document.body.classList.remove('practice','autoplay');const tot=cnt.p+cnt.gr+cnt.g+cnt.m,acc=tot?(cnt.p+cnt.gr*.8+cnt.g*.5)/tot*100:0;
  show('title');applyBga();playPreview();window.PRACTICE_UI&&PRACTICE_UI.done({pr,cnt:Object.assign({},cnt),acc,maxCombo,total:tot})}   // 연습 끝: 랭킹 · 내 기록에는 아무것도 안 남겨요
function finish(){if(PRAC){endPractice();return}if(paused){paused=false;$('pauseMenu').classList.add('hidden');try{actx.resume()}catch(e){}}playing=false;resetPlayOpts();setTimeout(applyBga,1200);[src,...stemSrc].forEach(s=>{if(s){s.onended=null;try{s.stop()}catch(e){}}});setFever(false);$('live').classList.add('hidden');$('pauseBtn').classList.add('hidden');
  const total=notes.length,acc=(cnt.p+cnt.gr*.8+cnt.g*.5)/total*100,rank=acc>=97?'SS':acc>=93?'S':acc>=85?'A':acc>=72?'B':'C';
  $('rRank').textContent=rank;$('rFc').classList.toggle('hidden',cnt.m>0);$('rFcImg').classList.toggle('hidden',cnt.m>0);$('rRankImg').dataset.spr='rank_'+rank;
  $('rStats').innerHTML=[['퍼펙트',cnt.p],['그레이트',cnt.gr],['굿',cnt.g],['미스',cnt.m],['최대 콤보',maxCombo],['정확도',acc.toFixed(1)+'%']].map(([a,b])=>`<span>${a}<b>${b}</b></span>`).join('');
  const fin=score;let st=performance.now();(function up(){const k=Math.min(1,(performance.now()-st)/900);$('rScore').textContent=Math.round(fin*k*(2-k)).toLocaleString();if(k<1)requestAnimationFrame(up)})();
  if(cnt.m===0){confetti(120);whiteFlash=.8;impact(0,true)}
  window.RANK&&RANK.submit({sid:SONGS[cur].id,diff,score:fin,acc,combo:maxCombo,fc:cnt.m===0});   /* 곡 · 난이도 랭킹에 올려요 (게스트 제외, 실패해도 결과 화면은 떠요) */
  const S=SONGS[cur],R2={sid:S.id,title:S.title,sub:S.sub,kana:S.kana,art:S.jacket||'',diff,ver:chartVer,score:fin,acc,rank,cnt:Object.assign({},cnt),maxCombo,total,log:HITLOG.slice(),dur:buf?buf.duration:60,off:offset,move:PLAYOPT.move,spx:PLAYOPT.spx,popt:PLAYOPT.popt,serverBest:0,adlib:window.ADLIB?ADLIB.stat():null};
  const go2=()=>{if(window.RESULT2&&RESULT2.show(R2)){show('result2');return true}return false};   /* 결과 화면 v2 (js/result2.js) — 설정 「결과 화면」에서 예전 화면으로 */
  if(resultVer!=='old'&&window.RESULT2){Promise.race([serverBestP||Promise.resolve(null),new Promise(r=>setTimeout(r,700))]).then(b=>{R2.serverBest=b&&b.score||0;if(!go2())show('result')});return}
  if(window.RESULT2)try{RESULT2.recordOnly(R2)}catch(e){console.warn('record',e)}   /* 예전 결과 화면이어도 기록 · EXP 는 쌓아요 */
  show('result')}
function show(id){if(id==='select'){openSong(cur);return}   /* 예전 CD 케이스 곡 선택 화면은 지웠어요 (2026-10-06) — 곡 선택은 늘 곡 화면 */['main','select','title','cal','result','result2'].forEach(s=>{const e=$(s);if(e)e.classList.toggle('hidden',s!==id)});requestAnimationFrame(()=>document.querySelectorAll('[data-spr]').forEach(el=>sprEl(el)));document.querySelector('.hud').style.visibility=id?'hidden':'visible';document.body.classList.toggle('menu',!!id&&id!=='cal')}   // menu: 노트 레인 숨김 (css #fx)

// ===================== 판정 =====================
const judgeOf=d=>d<=PERFECT?'p':d<=GREAT?'gr':d<=GOOD?'g':null;
const JT={p:['PERFECT','--gold',300,2.2,'퍼펙트!'],gr:['GREAT','--mint',200,1.4,'그레이트'],g:['GOOD','--maple',100,.5,'굿']};
function press(l){if(paused)return;down[l]=true;flashes[l]=1;if(!playing){unlock();if(window.KIT_URLS)kitPreview(l);else if(buf)pad(l,.9);return}   /* 게임 밖: 그 레인의 드럼 키트 소리 (D 킥 · F 스네어 · J 하이햇 · K 박수) */
  const t=now();let best=null,bd=9;for(const n of notes){if(n.hit||n.dead||n.l!==l)continue;const d=Math.abs(n.t-t);if(d<bd){bd=d;best=n}if(n.t-t>EARLY_MISS)break}
  const k=best&&judgeOf(bd);if(!k){if(window.ADLIB&&ADLIB.tryHit(l,t))return;/* 애드리브(숨은 노트) 자리면 그 드럼 + 보너스 (js/adlib.js) */if(CHART.mode==='full')hitSound(null,l,.45);else pad(l,.85);
    if(best&&best.t-t>GOOD&&best.t-t<=EARLY_MISS){best.dead=true;miss(best);judge.fs='FAST'}}   /* 너무 일찍 누름(0.125~0.2초 전) = 그 노트 미스 (마구 누르기 방지) */
  if(!k)return;best.hit=true;HITLOG.push([best.t,t-best.t,k,l]);window.HMETER&&HMETER.add(t-best.t,k);if(skin!=='bar'&&window.NOTE_SPR)LANDS.push({l,n:best,t0:now()});/* 친 노트 캐릭터가 판정선에서 탁 찌그러졌다 튀어요 (보통·점프 모두). 곡 시간 기준: 일시정지하면 같이 멈춰요 */if(CHART.mode==='full')hitSound(best,l,1,k);else{restore(best.ol??l,best);pad(best.ol??l,.3,true)}const [txt,c,pts,gg,jp]=JT[k];
  combo++;maxCombo=Math.max(maxCombo,combo);cnt[k]++;score+=Math.round(pts*(1+Math.min(combo,100)/100)*(fever?2:1)*scoreMul());
  gauge=Math.min(100,gauge+gg);if(gauge>=100)setFever(true);
  const fs=k==='p'?'':best.t-t>0?'FAST':'SLOW';judge={txt,c,fs,jp,a:1,s:1.5};comboBounce=1;
  if(combo%25===0&&DRUMKIT())kitCrashNext=true;   /* 25콤보 달성 → 다음 강박을 '쾅! 촤악' 으로 */
  burst(l,k);if(combo%50===0){confetti(60);whiteFlash=.2;impact(0,false);banner(combo+' 콤보!',combo>=150?'멈출 수 없어!':combo>=100?'최고야!':'대단해!','combo')}
  window.monsterReact&&monsterReact(combo%50===0?'cheer':k);updHud();checkFinale()}
function release(l){down[l]=false}
function miss(n){HITLOG.push([n.t,null,'m',n.l]);setTimeout(checkFinale,0);if(combo>=20){const y=G.yH+(G.yJ-G.yH)*.3;for(let i=0,N=LITE?12:24;i<N;i++)shards.push({x:G.cx+(Math.random()-.5)*80,y:y+(Math.random()-.5)*50,vx:(Math.random()-.5)*9,vy:-Math.random()*6,r:6+Math.random()*10,rot:Math.random()*6,vr:(Math.random()-.5)*.5,life:1});texts.push({txt:'콤보 끊김',sub:'',c:'--leaf',a:1,s:1.3,size:24,y:y+50})}combo=0;cnt.m++;if(CHART.mode!=='full')muffle();gauge=Math.max(0,gauge-9);setFever(false);judge={txt:'MISS',c:'--leaf',fs:'',jp:'미스',a:1,s:1.3};/* 미스 때 화면 가장자리 붉은 번쩍임(redFlash)은 뺐어요 — 잘 안 보이고 연달아 놓치면 깜빡이기만 해서 */window.monsterReact&&monsterReact('miss')}

// ===================== 이펙트 =====================
function banner(txt,sub,kind){banners.push({txt,sub,kind,t0:performance.now()})}
function firework(){const x=W*(.12+Math.random()*.76),y=G.yH*(.25+Math.random()*.6),c=[C('--gold'),C('--leaf'),C('--mint'),C('--maple'),'#fff'][Math.floor(Math.random()*5)];
  for(let i=0,N=LITE?24:46;i<N;i++){const a=i/N*Math.PI*2,sp=1.5+Math.random()*2.6;fw.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,life:1,c})}}
function burst(l,k){window.BALLFX&&BALLFX.hit(l,k);window.FX4&&FX4.hit(l,k);if(hitStyle==='flash'&&window.HITFX){HITFX.spawn(l,k);return}const x=xOf(l+.5,1),y=G.yJ,c=LC[l],n=k==='p'?30:k==='gr'?20:12;
  for(let i=0;i<n;i++){const a=-Math.PI*Math.random(),sp=(4+Math.random()*10)*(k==='p'?1.2:1);parts.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,life:1,dec:.02+Math.random()*.02,r:2+Math.random()*3.5,c:Math.random()<.35?'#fff':c,t:'s'})}
  for(let i=0;i<(k==='p'?6:3);i++)parts.push({x,y,vx:(Math.random()-.5)*8,vy:-5-Math.random()*7,life:1,dec:.012,r:8+Math.random()*6,c:k==='p'?(i%2?C('--gold'):'#fff'):c,t:i%3===0?'heart':'star',rot:Math.random()*6,vr:(Math.random()-.5)*.3,gv:.18})
  rings.push({x,y,r:G.wB/8*.6,a:1,c,w:k==='p'?8:5});flares.push({x,y,a:1,c,w:k==='p'?1:.6});if(k==='p')hexes.push({x,y,r:10,a:1,c});if(k==='p')rings.push({x,y,r:8,a:.9,c:'#fff',w:3,sp:1.8});beams.push({l,a:1,c})}
function confetti(n){if(LITE)n=Math.round(n*.5);const xL=Math.max(0,xOf(-.15,1)),xR=Math.min(W,xOf(4.15,1));   // 플레이 중엔 레인 바깥 양옆에서만 떨어져요
  // 쏟아지는 단풍잎 (2026-10-06 사용자: 「별 · 하트 쏟아지는 것도 단풍으로, 기본은 갈색 많게」 — 예전엔 별 · 하트 · 잎 색종이) · 좌우로 살랑 · 빙글 뒤집히며 떨어져요
  const cx=()=>!playing?Math.random()*W:Math.random()<xL/(xL+W-xR)?Math.random()*xL:xR+Math.random()*(W-xR);
  for(let i=0;i<n;i++){const ci=Math.floor(Math.random()*LEAFC.length);parts.push({x:cx(),y:-20-Math.random()*H*.3,vx:(Math.random()-.5)*2,vy:1.5+Math.random()*2.5,life:1,dec:.0045,r:9+Math.random()*8,
  c:LEAFC[ci],ci,t:'maple',rot:Math.random()*6,vr:(Math.random()-.5)*.06,gv:.02,ph:Math.random()*6.28,fq:.04+Math.random()*.03,sw:.6+Math.random()*.6,fl:Math.random()*6.28,fv:.04+Math.random()*.08})}}
function leafPath(ctx,x,y,r,rot){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.beginPath();
  for(let i=0;i<5;i++){const a=-Math.PI/2+i*2*Math.PI/5,a1=a-.42,a2=a+.42;const tip=i===0?1:i===1||i===4?.86:.7;
    ctx.lineTo(Math.cos(a1)*r*.42,Math.sin(a1)*r*.42);ctx.lineTo(Math.cos(a-.16)*r*tip*.78,Math.sin(a-.16)*r*tip*.78);ctx.lineTo(Math.cos(a)*r*tip,Math.sin(a)*r*tip);
    ctx.lineTo(Math.cos(a+.16)*r*tip*.78,Math.sin(a+.16)*r*tip*.78);ctx.lineTo(Math.cos(a2)*r*.42,Math.sin(a2)*r*.42)}
  ctx.closePath();ctx.restore()}

// ===================== 배경 영상 (BGA) =====================
// 영상 속 음악이 곡보다 0.0213초 늦게 시작해요 → 곡 시간 + VOFF = 영상 시간
let VOFF=SONGS[cur].voff;const vid=$('bga');let bgaMode=ls('mds-bga','video')==='off'?'off':'video',bgaReady=false;
vid.addEventListener('loadeddata',()=>{if(!vid.getAttribute('src'))return;bgaReady=true;applyBga()});
// 창이 가려지면 브라우저가 소리 없는 영상을 멈춰요. 다시 보일 때 곡 선택·결과 화면 영상도 다시 틀어요 (플레이 중엔 syncBga 가 맞춰요)
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&!playing)applyBga()});
function setBga(url){if(url&&vid.src===url&&bgaReady){applyBga();return}bgaReady=false;vid.classList.remove('on');if(url){vid.src=url;vid.load()}else{vid.removeAttribute('src');try{vid.load()}catch(e){}}}   // 받던 이전 곡 영상은 멈춰요 (늦게 와서 다른 곡에 남지 않게)
function applyBga(){const on=bgaReady&&bgaMode!=='off';vid.classList.toggle('on',on);monBox.style.visibility=bgaMode==='video'||bgaMode==='off'?'visible':'hidden';
  if(on&&!playing){vid.loop=true;vid.playbackRate=1;vid.play().catch(()=>{})}if(!on)vid.pause()}
function syncBga(){if(!bgaReady||bgaMode==='off')return;if(paused){if(!vid.paused)vid.pause();return}   // 일시정지 중엔 영상도 멈춰 둬요

  if(!playing){return}
  const target=(actx.currentTime-t0-lat)*RATE+VOFF;
  if(target<0){if(!vid.paused)vid.pause();if(Math.abs(vid.currentTime-VOFF)>.05)vid.currentTime=VOFF;return}
  if(target>vid.duration-.05){vid.pause();return}
  if(vid.paused){vid.currentTime=target;vid.play().catch(()=>{});return}
  const d=target-vid.currentTime;
  if(Math.abs(d)>.15){vid.currentTime=target;vid.playbackRate=RATE}else{const pr=RATE*Math.max(.94,Math.min(1.06,1+d*.8));if(!LITE||Math.abs(vid.playbackRate-pr)>.012)vid.playbackRate=pr}}   // 모바일: 재생 속도는 꽤 달라질 때만 바꿔요
// ===================== 배경 (밤하늘 무대) =====================
const stars=Array.from({length:70},()=>({x:Math.random(),y:Math.random()*.34,r:Math.random()*1.4+.3,p:Math.random()*6}));
// 떠다니는 단풍잎 (2026-10-06 사용자: 「떠다니는 음표 · 별을 단풍잎으로」 — 예전엔 하트 · 음표 · 별) · 모양: 정통 단풍잎 윤곽(높이 4030 단위, 가운데 0) · 색: 갈색 위주 + 주황 · 빨강 · 금색 (쏟아지는 단풍 confetti 도 같이 써요)
const LEAF2D=typeof Path2D!=='undefined'?new Path2D('m-90 2030 45-863a95 95 0 0 0-111-98l-859 151 116-320a65 65 0 0 0-20-73l-941-762 212-99a65 65 0 0 0 34-79l-186-572 542 115a65 65 0 0 0 73-38l105-247 423 454a65 65 0 0 0 111-57l-204-1052 327 189a65 65 0 0 0 91-27l332-652 332 652a65 65 0 0 0 91 27l327-189-204 1052a65 65 0 0 0 111 57l423-454 105 247a65 65 0 0 0 73 38l542-115-186 572a65 65 0 0 0 34 79l212 99-941 762a65 65 0 0 0-20 73l116 320-859-151a95 95 0 0 0-111 98l45 863z'):null,
  LEAFL=typeof Path2D!=='undefined'?new Path2D('m-90 2030 45-863a95 95 0 0 0-111-98l-859 151 116-320a65 65 0 0 0-20-73l-941-762 212-99a65 65 0 0 0 34-79l-186-572 542 115a65 65 0 0 0 73-38l105-247 423 454a65 65 0 0 0 111-57l-204-1052 327 189a65 65 0 0 0 91-27l332-652L0 2030z'):null,   // 왼쪽 반 (살짝 밝게 — 접힌 잎 느낌)
  LEAFV=typeof Path2D!=='undefined'?new Path2D('M0 1050V-1700M0 1050L-1530-420M0 1050L1530-420M0 1050L-1450 280M0 1050L1450 280'):null,   // 잎맥 다섯 갈래
  LEAFC=['#8B4A2B','#7A3E24','#A0562F','#6A3520','#93502F','#B0653A','#82462A','#D2732F','#B8452E','#CF9A3E'],   // 갈색 일곱 · 주황 · 빨강 · 금색 (붉은 기 있는 갈색 — 노란 갈색은 보라 배경 위에서 금빛 · 회갈색은 올리브색으로 보여요) (2026-10-06 사용자: 「기본은 갈색 많게」)
  LEAFB=LEAFC.map(h=>{const n=parseInt(h.slice(1),16);return 'rgb('+[n>>16,n>>8&255,n&255].map(v=>Math.round(v*.8)).join(',')+')'});   // 뒷면 (조금 어둡게)
// 단풍잎 한 장: 바탕색 · 왼쪽 반 밝게 · 잎맥 / fx = 뒤집힘 (-1 ~ 1 · 0 이면 옆으로 선 잎 · 음수면 뒷면)
function mapleLeaf(ctx,x,y,r,rot,fx,col,colB){if(!LEAF2D){leafPath(ctx,x,y,r,rot);ctx.fillStyle=col;ctx.fill();return}
  const k=r*1.2/2000,ax=Math.max(.16,Math.abs(fx));ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(fx<0?-k*ax:k*ax,k);
  ctx.fillStyle=fx<0?colB:col;ctx.fill(LEAF2D);ctx.fillStyle='rgba(255,226,200,.14)';ctx.fill(LEAFL);ctx.strokeStyle='rgba(255,214,180,.34)';ctx.lineWidth=110;ctx.lineCap='round';ctx.stroke(LEAFV);ctx.restore()}
const leaves=Array.from({length:LITE?10:18},(_,i)=>({x:Math.random(),y:Math.random(),r:6+Math.random()*12,sp:.02+Math.random()*.05,rot:Math.random()*6,vr:(Math.random()-.5)*.8,c:i%LEAFC.length}));
function drawBg(tm,bp){const ox=BG_OX,oy=BG_OY,FW=W+2*ox,FH=H+2*oy;bx.setTransform(BDPR,0,0,BDPR,ox*BDPR,oy*BDPR);   /* 배경은 창 끝까지 (무대 밖 ox · oy 만큼 넓게) */
  const vOn=bgaReady&&bgaMode!=='off';if(MOB&&vOn!==drawBg.v){drawBg.v=vOn;document.body.classList.toggle('von',vOn)}
  if(vOn){// 영상 위에 어두운 막을 깔아 노트가 잘 보이게, 박자마다 살짝 밝아지고 FEVER 땐 더 환하게
    bx.clearRect(-ox,-oy,FW,FH);if(LITE&&VTOP&&!document.body.classList.contains('menu')){const v0=VTOP+380,v1=VTOP+610,vf=bx.createLinearGradient(0,v0,0,v1);vf.addColorStop(0,NIGHT_A(0));vf.addColorStop(1,NIGHT_A(1));bx.fillStyle=vf;bx.fillRect(-ox,v0,FW,v1-v0)}   /* 모바일: 영상 아래 끝을 배경색으로 스르륵 (영상에 css 마스크를 씌우면 폰에서 매 프레임 무거워요) */const dim=(playing?(fever?.36:.6):.4)-beatGlow*.1;const vg=bx.createLinearGradient(0,0,0,H);
    vg.addColorStop(0,`rgba(91,35,145,${dim*.75})`);vg.addColorStop(.45,`rgba(36,16,74,${dim})`);vg.addColorStop(1,`rgba(43,10,69,${Math.min(.9,dim+.25)})`);bx.fillStyle=vg;bx.fillRect(-ox,-oy,FW,FH)}
  else{
  const sky=bx.createLinearGradient(0,0,0,H);sky.addColorStop(0,C('--night'));sky.addColorStop(G.yH/H*.85,C('--dusk'));sky.addColorStop(G.yH/H,C('--horizon'));/*candy*/sky.addColorStop(Math.min(1,G.yH/H+.02),C('--shade'));sky.addColorStop(1,C('--shade'));
  bx.fillStyle=sky;bx.fillRect(-ox,-oy,FW,FH);}
  if(!vOn)for(const s of stars){bx.globalAlpha=.35+.35*Math.sin(tm*1.5+s.p)+(fever?.25:0);bx.fillStyle=C('--cream');bx.beginPath();bx.arc(-ox+s.x*FW,s.y*H,s.r,0,7);bx.fill()}
  bx.globalAlpha=1;
  // 레이저 (지평선에서 하늘로)
  bx.globalCompositeOperation='lighter';const lz=((fever?.55:.18)+laserHit*.45)*(bgaReady&&bgaMode!=='off'?.6:1);laserHit*=.93;
  for(let i=0;i<8;i++){const a=-Math.PI/2+Math.sin(tm*.7+i*.8)*.9+(i-3.5)*.12,len=H*.9,x0=G.cx+G.sway,y0=G.yH;
    bx.strokeStyle=fever?`hsla(${(tm*60+i*45)%360},100%,65%,${lz*.5})`:`rgba(255,${120+i*12},60,${lz*.35})`;bx.lineWidth=2+laserHit*3;
    bx.beginPath();bx.moveTo(x0,y0);bx.lineTo(x0+Math.cos(a)*len,y0+Math.sin(a)*len);bx.stroke()}
  // 불꽃놀이
  fw=fw.filter(p=>p.life>0);for(const p of fw){p.x+=p.vx;p.y+=p.vy;p.vy+=.03;p.vx*=.985;p.life-=.012;bx.globalAlpha=p.life;bx.fillStyle=p.c;bx.fillRect(p.x-1.5,p.y-1.5,3,3)}
  bx.globalAlpha=1;bx.globalCompositeOperation='source-over';
  // 신스웨이브 바닥 격자 (박자 속도로 흘러와요)
  if(!vOn){gridScroll=(bp%1+1)%1;bx.strokeStyle=fever?`hsl(${(tm*70)%360},90%,60%)`:C('--horizon');
  for(let i=0;i<14;i++){const z=((i+1-gridScroll)/14);if(z<=0)continue;const sz=sOf(z*1.0),y=yOf(sz);if(y<G.yH||y>H)continue;bx.globalAlpha=(1-z)*.55+.05;bx.lineWidth=1+(1-z)*1.5;bx.beginPath();bx.moveTo(-ox,y);bx.lineTo(W+ox,y);bx.stroke()}
  for(let u=-14;u<=18;u+=2){bx.globalAlpha=.22;bx.lineWidth=1;bx.beginPath();bx.moveTo(xOf(u,G.sH),G.yH);bx.lineTo(xOf(u,2.2),yOf(2.2));bx.stroke()}
  bx.globalAlpha=1;}
  // 비트마다 퍼지는 링 (신사 뒤) — 포인트 컷 곡에선 신사가 없으니 링·조명 빔도 꺼요
  const noMon=G.land&&document.body.classList.contains('art-hide3d');
  const ph=bp-Math.floor(bp),cy=G.my,rcx=G.mx,rw=G.land?W*.07:W*.12,rg=G.land?W*.2:W*.45;
  if(!noMon)for(let i=0;i<3;i++){const k=(ph+i)/3;bx.strokeStyle=fever?`hsl(${(tm*80+i*60)%360},90%,65%)`:C('--maple');bx.globalAlpha=(1-k)*.35*(playing?1:.5);bx.lineWidth=3;
    bx.beginPath();bx.ellipse(rcx,cy,rw+k*rg,(rw+k*rg)*(G.land?.9:.42),0,0,7);bx.stroke()}
  // 무대 조명 빔
  bx.globalCompositeOperation='lighter';
  if(!noMon)for(let i=0;i<2;i++){const side=i?1:-1,sw=Math.sin(tm*.9+i*2)*.35,ox=(G.land?G.mx:G.cx)+side*W*(G.land?.25:.55),oy=H*.98,tx=(G.land?G.mx:G.cx)+side*W*.05+sw*W*(G.land?.08:.25),ty=G.land?H*.12:G.yH-H*.18;
    const gr=bx.createLinearGradient(ox,oy,tx,ty);gr.addColorStop(0,'rgba(255,201,60,0)');gr.addColorStop(1,fever?'rgba(255,120,200,.22)':'rgba(255,201,60,.13)');
    bx.fillStyle=gr;bx.beginPath();bx.moveTo(ox-20,oy);bx.lineTo(ox+20,oy);bx.lineTo(tx+W*.07,ty);bx.lineTo(tx-W*.07,ty);bx.closePath();bx.fill()}
  const hg=bx.createRadialGradient(G.cx,G.yH,0,G.cx,G.yH,W*.6);hg.addColorStop(0,`rgba(255,107,26,${(.35+beatGlow*.35)*(vOn?.35:1)})`);hg.addColorStop(1,'rgba(255,107,26,0)');
  bx.fillStyle=hg;bx.fillRect(-ox,G.yH-W*.6,FW,W*1.2);bx.globalCompositeOperation='source-over';
  // 떨어지는 단풍
  for(const f of leaves){f.y+=f.sp*.016*(fever?2:1);f.x+=Math.sin(tm+f.rot)*.0006;f.rot+=f.vr*.016;if(f.y>1.05){f.y=-.05;f.x=Math.random()}
    bx.globalAlpha=.9;const gd=fever&&C('--gold');mapleLeaf(bx,f.x*W,f.y*H,f.r,f.rot,1,gd||LEAFC[f.c],gd||LEAFB[f.c])}
  bx.globalAlpha=1}

// ===================== 도로 + 노트 =====================
function quad(ctx,u0,u1,s0,s1){ctx.beginPath();ctx.moveTo(xOf(u0,s0),yOf(s0));ctx.lineTo(xOf(u1,s0),yOf(s0));ctx.lineTo(xOf(u1,s1),yOf(s1));ctx.lineTo(xOf(u0,s1),yOf(s1));ctx.closePath()}
// 스티커 글씨: 흰 테두리 + 진보라 테두리 + 색 채우기 + 아래 그림자
function pop(txt,x,y,size,fill,sub){const hf=/[\uac00-\ud7a3]/.test(txt)?'"Black Han Sans","Jua"':'"Mochiy Pop One"';g.font=size+'px '+hf+',sans-serif';g.textAlign='center';g.textBaseline='middle';g.lineJoin='round';
  g.fillStyle=C('--shade');g.fillText(txt,x+size*.06,y+size*.1);g.strokeStyle='#fff';g.lineWidth=size*.34;g.strokeText(txt,x,y);g.strokeStyle=C('--shade');g.lineWidth=size*.18;g.strokeText(txt,x,y);
  g.fillStyle=fill;g.fillText(txt,x,y);if(sub){const ss2=Math.max(12,size*.38);g.font=ss2+'px '+(/[가-힣]/.test(sub)?'"Jua"':'"Mochiy Pop One"')+',sans-serif';g.strokeStyle=C('--shade');g.lineWidth=ss2*.35;g.strokeText(sub,x,y+size*.72);g.fillStyle='#fff';g.fillText(sub,x,y+size*.72)}}
function starPath(ctx,x,y,r,rot){ctx.beginPath();for(let i=0;i<10;i++){const a=rot+i*Math.PI/5-Math.PI/2,rad=i%2?r*.45:r;ctx.lineTo(x+Math.cos(a)*rad,y+Math.sin(a)*rad)}ctx.closePath()}
function heartPath(ctx,x,y,r,rot){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.beginPath();ctx.moveTo(0,r*.35);ctx.bezierCurveTo(r*1.1,-r*.35,r*.45,-r*1.05,0,-r*.45);ctx.bezierCurveTo(-r*.45,-r*1.05,-r*1.1,-r*.35,0,r*.35);ctx.closePath();ctx.restore()}
function rr(x,y,w,h,r){g.beginPath();g.roundRect?g.roundRect(x,y,w,h,r):g.rect(x,y,w,h)}
// ===== 새 플레이 화면 (2026-10-06 사용자: 곡 화면과 같은 톤 · 건반은 레인 각도에 맞게 · 누르면 눌리게 · 원복 가능하게) =====
// js/playui.js 가 PLAYUI.hud2 · PLAYUI.pad2 를 켜고 꺼요 (설정 → 화면 → 「플레이 화면 UI」 · 「건반 모양」 = 예전으로 되돌리기)
function ui2On(k){return !!(window.PLAYUI&&PLAYUI[k])}
function rrp(c,x,y,w,h,r){c.beginPath();if(c.roundRect)c.roundRect(x,y,w,h,r);else c.rect(x,y,w,h)}
// 클리어 게이지 판: 왼쪽 칸 점수 카드 아래 252~316 — 위 두 판(곡 · 점수)과 같은 HTML 판 (index.html .hud .gauge2 · css/weekend.css)
//  예전엔 이 캔버스에 그려서 창 크기에 맞춰 늘어나며 글자 · 테두리가 흐렸어요 (2026-10-06 사용자: 「가장 하단 ui는 위의 2개에 비해서 화질이 떨어지네」)
//  값이 바뀔 때만 고쳐요: 퍼센트(정수) → --p · .g0 · .full / 피버 → .fever (무지개 막대 · FEVER ×2 알약) / 곡 진행(아래 얇은 선, 1/400 단위) → --pr
const GZ={p:-1,f:null,r:-1};
function drawGauge2(t){const el=GZ.el||(GZ.el=$('gauge2'));if(!el)return;const pct=Math.max(0,Math.min(100,Math.round(gauge))),pr=buf&&buf.duration?Math.max(0,Math.min(1,t/buf.duration)):0,rk=Math.round(pr*400);
  if(pct!==GZ.p){GZ.p=pct;(GZ.pe||(GZ.pe=$('g2p'))).textContent=pct+'%';el.style.setProperty('--p',pct+'%');el.classList.toggle('g0',pct<=0);el.classList.toggle('full',pct>=100)}
  if(!!fever!==GZ.f){GZ.f=!!fever;el.classList.toggle('fever',GZ.f)}
  if(rk!==GZ.r){GZ.r=rk;el.style.setProperty('--pr',(rk/400).toFixed(4))}}
// 콤보: 숫자는 Nunito 굵게 (흰 글자 · 보라 테두리 · 분홍 빛), 위에 분홍 「COMBO」 알약 — 곡 화면 고른 곡 카드 색
function drawCombo2(hue){const y=G.yH+(G.yJ-G.yH)*.3,sc=(1+comboBounce*.3)*G.fs,s=String(combo);g.save();g.translate(G.cx,y);g.scale(sc,sc);
  g.textAlign='center';g.textBaseline='middle';g.lineJoin='round';g.font='900 92px "Nunito",sans-serif';
  g.lineWidth=14;g.strokeStyle='rgba(43,10,69,.92)';g.strokeText(s,0,10);
  let fl;if(fever){fl=g.createLinearGradient(-120,0,120,0);fl.addColorStop(0,`hsl(${hue%360},95%,72%)`);fl.addColorStop(1,`hsl(${(hue+140)%360},95%,72%)`)}else{fl=g.createLinearGradient(0,-36,0,52);fl.addColorStop(0,'#FFFFFF');fl.addColorStop(1,'#FFD3EA')}
  g.fillStyle=fl;if(!LITE){g.shadowColor='rgba(255,79,163,.6)';g.shadowBlur=20}g.fillText(s,0,10);g.shadowBlur=0;
  const pw=100,ph=26,py=-58,pg=g.createLinearGradient(0,py-ph/2,0,py+ph/2);pg.addColorStop(0,'#FF73B9');pg.addColorStop(1,'#E9318A');
  rrp(g,-pw/2,py-ph/2,pw,ph,13);g.fillStyle=pg;g.fill();g.lineWidth=2.5;g.strokeStyle='#fff';g.stroke();
  g.font='900 13px "Nunito",sans-serif';if('letterSpacing' in g)g.letterSpacing='2px';g.fillStyle='#fff';g.fillText('COMBO',1,py+1);if('letterSpacing' in g)g.letterSpacing='0px';
  g.restore()}
// 새 건반 — 아케이드 v2 (2026-10-06 사용자: 「파스텔 말고 디테일 살려서 아케이드 느낌」 → 「게이지(타이밍 미터)가 건반 위에 겹쳐 · 건반 색은 캐릭터 색이었으니 건반에 어울리는 색으로 · 건반 테두리와 노트 레인이 딱 안 맞아」 · 되돌리기: 설정 → 화면 → 「건반 모양」 = 예전 버튼)
//  · 받침: 노트 레인과 똑같은 폭 — 레인 0~4 가장자리를 그대로 이어서 판정선 바로 아래부터 화면 끝까지 검보라 금속판. 레인 네온 가장자리 · 칸 구분선도 받침 끝까지 이어 그려요
//    위쪽 띠(판정선 ~ 건반, 34px): 크롬 테두리 + 타이밍 미터 자리(FAST · SLOW 글자는 막대 양옆 — css/weekend.css body.pad2) · 양끝 리벳
//  · 키: 레인 칸마다 홈 → 홈 안 LED 테두리(평소엔 박자 따라 은은하게 · 누르면 환하게, 피버 땐 무지개) → 옆면(두께) → 윗면 → 조작키 글자 + 캐릭터 이름판
//    윗면: 진한 색 그러데이션 · 양옆 그늘(볼록) · 위쪽 광택 · 안쪽 베벨 — 레인 가장자리(원근)를 그대로 따라가는 사다리꼴
//  · 색: 그 레인으로 내려오는 캐릭터 색 — 핑크빈 분홍 · 버섯 주황 · 슬라임 초록 · 예티 흰색 (2026-10-06 사용자: 「디자인은 그대로, 색만 캐릭터 색으로 지금 톤에 맞게」)
//    흰 건반(예티)은 흰 글자가 묻히지 않게 글자 테두리만 진한 보라 (6번째 값)
//  · 누르면: 윗면이 두께만큼 쑥 내려가고 안에서 빛나요(백라이트 — 글자는 읽히게 은은히) · LED 가 번지고 · 레인 위로 짧은 빛 기둥
const PAD2C=[['#FF6FB8','#F21C83','#A1084F','#5C0430','#FF4FAE'],['#FFB866','#FF7A1A','#B8460A','#5C2004','#FF9A3D'],['#9CF59A','#3CCB5A','#178A3A','#08421D','#5CF283'],['#FFFFFF','#E7E4F8','#A8A2D2','#48427A','#F2F6FF','#5D5799']],   // 윗면 밝은 · 기본 · 어두운 · 옆면 · LED (· 글자 테두리)
  PAD2N=['핑크빈','버섯','슬라임','예티'];
function trapPath(c,u0,u1,y0,y1,r){const s0=sAtY(y0),s1=sAtY(y1),ax=xOf(u0,s0),bx=xOf(u1,s0),dx=xOf(u1,s1),ex=xOf(u0,s1);
  c.beginPath();c.moveTo((ax+bx)/2,y0);c.arcTo(bx,y0,dx,y1,r);c.arcTo(dx,y1,ex,y1,r);c.arcTo(ex,y1,ax,y0,r);c.arcTo(ax,y0,bx,y0,r);c.closePath()}
function lanePoly(c,u0,u1,y0,y1){const s0=sAtY(y0),s1=sAtY(y1);c.beginPath();c.moveTo(xOf(u0,s0),y0);c.lineTo(xOf(u1,s0),y0);c.lineTo(xOf(u1,s1),y1);c.lineTo(xOf(u0,s1),y1);c.closePath()}
function rivet(c,x,y,r){const sg=c.createRadialGradient(x-r*.35,y-r*.4,r*.1,x,y,r);sg.addColorStop(0,'#F1ECFF');sg.addColorStop(.5,'#8F84BC');sg.addColorStop(1,'#2C2350');
  c.beginPath();c.arc(x,y,r,0,6.283);c.fillStyle=sg;c.fill();c.lineWidth=1.2;c.strokeStyle='rgba(0,0,0,.7)';c.stroke()}
function drawPads2(hue){const P=drawPads2.p||(drawPads2.p=[0,0,0,0]);
  const yD=G.yJ+8,yT=G.yJ+(MOB?52:42),yB=H-12-(MOB&&window.SAFE?SAFE.b:0),TH=MOB?16:12,R=MOB?20:13,bg=Math.min(1,beatGlow);   // 받침 위 끝(판정선 바로 아래) · 건반 위 끝(타이밍 미터 띠 아래) · 아래 끝 · 두께 · 모서리
  for(let l=0;l<4;l++){const tg=down[l]?1:0;P[l]+=(tg-P[l])*(tg?.65:.3)}
  g.save();
  // 누른 레인: 받침 위로 짧은 빛 기둥
  g.globalCompositeOperation='lighter';
  for(let l=0;l<4;l++){const p=P[l];if(p<.03)continue;const yb=G.yJ-(MOB?300:190),bm=g.createLinearGradient(0,yb,0,yD);bm.addColorStop(0,'rgba(0,0,0,0)');bm.addColorStop(1,PAD2C[l][4]);
    lanePoly(g,l+.04,l+.96,yb,yD);g.globalAlpha=.36*p*(activeLanes.includes(l)?1:.45);g.fillStyle=bm;g.fill()}
  g.globalCompositeOperation='source-over';g.globalAlpha=1;
  // 받침 (레인과 같은 폭) · 위쪽 띠 아래 홈 · 크롬 테두리 · 리벳 · 칸 구분선
  const sD=sAtY(yD),sE=sAtY(HB+10);
  lanePoly(g,0,4,yD,HB+10);const dg=g.createLinearGradient(0,yD,0,H);dg.addColorStop(0,'#2C1B4C');dg.addColorStop(.14,'#190E30');dg.addColorStop(1,'#0B0518');g.fillStyle=dg;g.fill();
  lanePoly(g,0,4,yT-10,yT-8);g.fillStyle='rgba(0,0,0,.45)';g.fill();
  {const x0=xOf(0,sD),x1=xOf(4,sD),cg=g.createLinearGradient(x0,0,x1,0);cg.addColorStop(0,'rgba(140,120,210,.6)');cg.addColorStop(.5,'#F6F2FF');cg.addColorStop(1,'rgba(140,120,210,.6)');
   g.beginPath();g.moveTo(x0,yD);g.lineTo(x1,yD);g.lineWidth=3;g.strokeStyle=cg;g.stroke();
   g.beginPath();g.moveTo(x0,yD+2.5);g.lineTo(x1,yD+2.5);g.lineWidth=1.5;g.strokeStyle='rgba(0,0,0,.55)';g.stroke()}
  {const y=(yD+yT-10)/2;for(const u of [.08,3.92])rivet(g,xOf(u,sAtY(y)),y,4.5)}
  for(let u=1;u<4;u++){g.beginPath();g.moveTo(xOf(u,sAtY(yT-8)),yT-8);g.lineTo(xOf(u,sE),HB+10);g.lineWidth=1;g.strokeStyle='rgba(198,180,255,.16)';g.stroke()}
  // 키
  for(let l=0;l<4;l++){const p=P[l],c=PAD2C[l],A=activeLanes.includes(l)?1:.45,u0=l+.055,u1=l+.945,th=TH*(1-.72*p),t0=yT+(TH-th),t1=yB-th,led=fever?`hsl(${(hue+l*70)%360},95%,62%)`:c[4];
    g.globalAlpha=A;
    // 홈 (판에 파인 자리)
    trapPath(g,l+.025,l+.975,yT-5,yB+5,R+3);const wg=g.createLinearGradient(0,yT-5,0,yB+5);wg.addColorStop(0,'#030108');wg.addColorStop(1,'#140B26');g.fillStyle=wg;g.fill();
    g.lineWidth=1.5;g.strokeStyle='rgba(255,255,255,.1)';g.stroke();
    // LED 테두리 (홈 안쪽)
    const la=Math.min(1,.32+.28*bg+.8*p);g.globalCompositeOperation='lighter';g.strokeStyle=led;
    trapPath(g,l+.04,l+.96,yT-2,yB+2,R+1);g.lineWidth=7;g.globalAlpha=A*la*.3;g.stroke();g.lineWidth=2.5;g.globalAlpha=A*la;g.stroke();
    if(p>.05){g.shadowColor=led;g.shadowBlur=22*p;g.stroke();g.shadowBlur=0}
    g.globalCompositeOperation='source-over';g.globalAlpha=A;
    // 옆면 (두께)
    trapPath(g,u0,u1,t1-R,yB,R);const sg=g.createLinearGradient(0,t1,0,yB);sg.addColorStop(0,c[3]);sg.addColorStop(1,'#12061E');g.fillStyle=sg;g.fill();g.lineWidth=1.5;g.strokeStyle='rgba(0,0,0,.55)';g.stroke();
    // 윗면
    trapPath(g,u0,u1,t0,t1,R);const fg=g.createLinearGradient(0,t0,0,t1);fg.addColorStop(0,c[0]);fg.addColorStop(.45,c[1]);fg.addColorStop(1,c[2]);g.fillStyle=fg;g.fill();
    const cy=(t0+t1)/2,sc=sAtY(cy),xa=xOf(u0,sc),xb=xOf(u1,sc),cx=(xa+xb)/2,kw=xb-xa,kh=t1-t0;
    g.save();g.clip();
    const hg=g.createLinearGradient(xa,0,xb,0);hg.addColorStop(0,'rgba(0,0,0,.3)');hg.addColorStop(.17,'rgba(0,0,0,0)');hg.addColorStop(.83,'rgba(0,0,0,0)');hg.addColorStop(1,'rgba(0,0,0,.3)');g.fillStyle=hg;g.fillRect(xa-30,t0,kw+60,kh);   // 양옆 그늘 (볼록)
    trapPath(g,u0+.08,u1-.08,t0+6,t0+kh*.4,10);const gl=g.createLinearGradient(0,t0+6,0,t0+kh*.4);gl.addColorStop(0,'rgba(255,255,255,.5)');gl.addColorStop(1,'rgba(255,255,255,.04)');g.fillStyle=gl;g.fill();   // 위쪽 광택
    g.translate(0,3);trapPath(g,u0,u1,t0,t1,R);g.lineWidth=5;g.strokeStyle='rgba(255,255,255,.4)';g.stroke();   // 안쪽 베벨: 위 가장자리 빛
    g.translate(0,-6);trapPath(g,u0,u1,t0,t1,R);g.strokeStyle='rgba(0,0,0,.32)';g.stroke();g.translate(0,3);   // 아래 가장자리 그늘
    if(p>.03){g.globalCompositeOperation='lighter';g.save();g.translate(cx,cy);g.scale(1,kh/kw);const rg=g.createRadialGradient(0,0,0,0,0,kw*.62);rg.addColorStop(0,`rgba(255,255,255,${(.22*p).toFixed(3)})`);rg.addColorStop(.4,led);rg.addColorStop(1,'rgba(0,0,0,0)');
      g.globalAlpha=A*.55*p;g.fillStyle=rg;g.fillRect(-kw,-kw,kw*2,kw*2);g.restore();g.globalAlpha=A}   // 백라이트
    if(flashes[l]>.05){g.globalCompositeOperation='lighter';g.globalAlpha=A*flashes[l]*.25;g.fillStyle='#fff';g.fillRect(xa-30,t0,kw+60,kh);g.globalAlpha=A}   // 친 순간 번쩍
    g.globalCompositeOperation='source-over';g.restore();
    flashes[l]*=.84;
    trapPath(g,u0,u1,t0,t1,R);g.lineWidth=2;g.strokeStyle=p>.05?'rgba(255,255,255,.9)':'rgba(24,4,40,.7)';g.stroke();   // 테두리
    // 글자: 조작키 (크게 · 키를 바꾸면 그 키) + 캐릭터 이름판
    if(MOB){g.textAlign='center';g.textBaseline='middle';g.lineJoin='round';g.font='900 44px "NanumSquareRound","Nunito",sans-serif';const nm=PAD2N[l];   /* 모바일: 손가락으로 누르니 조작키 글자 대신 캐릭터 이름 */
      g.fillStyle='rgba(30,0,25,.35)';g.fillText(nm,cx,cy+4);g.lineWidth=9;g.strokeStyle=c[5]||c[2];g.strokeText(nm,cx,cy);g.fillStyle='#FFFFFF';g.fillText(nm,cx,cy)}else{
    const ks=window.KEYCFG?KEYCFG.label(KEYS[l]):String(KEYS[l]).toUpperCase();
    g.textAlign='center';g.textBaseline='middle';g.lineJoin='round';let fs=40;g.font=`900 ${fs}px "Nunito",sans-serif`;const mw=g.measureText(ks).width;if(mw>kw*.62){fs=Math.max(18,fs*kw*.62/mw);g.font=`900 ${fs.toFixed(1)}px "Nunito",sans-serif`}
    const ly=cy-12;g.fillStyle='rgba(30,0,25,.35)';g.fillText(ks,cx,ly+2.5);g.lineWidth=4;g.strokeStyle=c[5]||c[2];g.strokeText(ks,cx,ly);g.fillStyle='#FFFFFF';g.fillText(ks,cx,ly);
    g.font='900 14px "NanumSquareRound","Nunito",sans-serif';const nm=PAD2N[l],nw=g.measureText(nm).width+20,ny=cy+22;rrp(g,cx-nw/2,ny-11,nw,22,11);g.fillStyle='rgba(20,4,34,.42)';g.fill();g.fillStyle='rgba(255,255,255,.92)';g.fillText(nm,cx,ny+1)}
    g.globalAlpha=1}
  // 레인 네온 가장자리: 받침 끝까지 이어서 (레인과 같은 색 · 굵기 — engine draw 「레인 경계 + 가장자리 네온」)
  for(const u of [0,4]){g.beginPath();g.moveTo(xOf(u,sD),yD);g.lineTo(xOf(u,sE),HB+10);g.strokeStyle=fever?`hsl(${(hue+u*40)%360},95%,62%)`:(u?C('--mint'):C('--maple'));g.lineWidth=3+beatGlow*3;g.shadowColor=g.strokeStyle;g.shadowBlur=14;g.stroke()}
  g.shadowBlur=0;
  g.restore()}
// ===== 모바일: 건반 미리 그려 두기 (2026-10-07 사용자: 「게임 플레이 시 좀 버벅이니까 … 여러 가지 최적화 — 모바일 시에만」) =====
//  · 판 · 홈 · 키 몸통 · 캐릭터 이름은 무대 크기가 바뀔 때만 두 장(아래: 판 · 홈 / 위: 키 몸통 · 이름)으로 그려 두고, 매 프레임엔 그 두 장 + LED 테두리만
//  · 누르고 있거나 번쩍이는 키만 그 프레임에 새로 그려요 · 그림자 번짐(shadowBlur) 없이 · 모양은 drawPads2 와 같아요
const PADC={key:'',u:null,o:null,top:0,h:0};
function padGeo(){const yD=G.yJ+8,yT=G.yJ+52,yB=H-12-(window.SAFE?SAFE.b:0);return {yD,yT,yB,TH:16,R:20,sD:sAtY(yD),sE:sAtY(HB+10)}}
function padPlate(c,Q){const yD=Q.yD,yT=Q.yT,sD=Q.sD,sE=Q.sE;
  lanePoly(c,0,4,yD,HB+10);const dg=c.createLinearGradient(0,yD,0,H);dg.addColorStop(0,'#2C1B4C');dg.addColorStop(.14,'#190E30');dg.addColorStop(1,'#0B0518');c.fillStyle=dg;c.fill();
  lanePoly(c,0,4,yT-10,yT-8);c.fillStyle='rgba(0,0,0,.45)';c.fill();
  {const x0=xOf(0,sD),x1=xOf(4,sD),cg=c.createLinearGradient(x0,0,x1,0);cg.addColorStop(0,'rgba(140,120,210,.6)');cg.addColorStop(.5,'#F6F2FF');cg.addColorStop(1,'rgba(140,120,210,.6)');
   c.beginPath();c.moveTo(x0,yD);c.lineTo(x1,yD);c.lineWidth=3;c.strokeStyle=cg;c.stroke();
   c.beginPath();c.moveTo(x0,yD+2.5);c.lineTo(x1,yD+2.5);c.lineWidth=1.5;c.strokeStyle='rgba(0,0,0,.55)';c.stroke()}
  {const y=(yD+yT-10)/2;for(const u of [.08,3.92])rivet(c,xOf(u,sAtY(y)),y,4.5)}
  for(let u=1;u<4;u++){c.beginPath();c.moveTo(xOf(u,sAtY(yT-8)),yT-8);c.lineTo(xOf(u,sE),HB+10);c.lineWidth=1;c.strokeStyle='rgba(198,180,255,.16)';c.stroke()}}
function padHole(c,l,Q){trapPath(c,l+.025,l+.975,Q.yT-5,Q.yB+5,Q.R+3);const wg=c.createLinearGradient(0,Q.yT-5,0,Q.yB+5);wg.addColorStop(0,'#030108');wg.addColorStop(1,'#140B26');c.fillStyle=wg;c.fill();c.lineWidth=1.5;c.strokeStyle='rgba(255,255,255,.1)';c.stroke()}
function padLed(c,l,Q,la,led){c.globalCompositeOperation='lighter';c.strokeStyle=led;trapPath(c,l+.04,l+.96,Q.yT-2,Q.yB+2,Q.R+1);c.lineWidth=7;c.globalAlpha=la*.3;c.stroke();c.lineWidth=2.5;c.globalAlpha=la;c.stroke();c.globalCompositeOperation='source-over';c.globalAlpha=1}
function padBody(c,l,Q,p,fl,led){const k=PAD2C[l],R=Q.R,yB=Q.yB,u0=l+.055,u1=l+.945,th=Q.TH*(1-.72*p),t0=Q.yT+(Q.TH-th),t1=yB-th;
  trapPath(c,u0,u1,t1-R,yB,R);const sg=c.createLinearGradient(0,t1,0,yB);sg.addColorStop(0,k[3]);sg.addColorStop(1,'#12061E');c.fillStyle=sg;c.fill();c.lineWidth=1.5;c.strokeStyle='rgba(0,0,0,.55)';c.stroke();
  trapPath(c,u0,u1,t0,t1,R);const fg=c.createLinearGradient(0,t0,0,t1);fg.addColorStop(0,k[0]);fg.addColorStop(.45,k[1]);fg.addColorStop(1,k[2]);c.fillStyle=fg;c.fill();
  const cy=(t0+t1)/2,sc=sAtY(cy),xa=xOf(u0,sc),xb=xOf(u1,sc),cx=(xa+xb)/2,kw=xb-xa,kh=t1-t0;
  c.save();c.clip();
  const hg=c.createLinearGradient(xa,0,xb,0);hg.addColorStop(0,'rgba(0,0,0,.3)');hg.addColorStop(.17,'rgba(0,0,0,0)');hg.addColorStop(.83,'rgba(0,0,0,0)');hg.addColorStop(1,'rgba(0,0,0,.3)');c.fillStyle=hg;c.fillRect(xa-30,t0,kw+60,kh);
  trapPath(c,u0+.08,u1-.08,t0+6,t0+kh*.4,10);const gl=c.createLinearGradient(0,t0+6,0,t0+kh*.4);gl.addColorStop(0,'rgba(255,255,255,.5)');gl.addColorStop(1,'rgba(255,255,255,.04)');c.fillStyle=gl;c.fill();
  c.translate(0,3);trapPath(c,u0,u1,t0,t1,R);c.lineWidth=5;c.strokeStyle='rgba(255,255,255,.4)';c.stroke();
  c.translate(0,-6);trapPath(c,u0,u1,t0,t1,R);c.strokeStyle='rgba(0,0,0,.32)';c.stroke();c.translate(0,3);
  if(p>.03){c.globalCompositeOperation='lighter';c.save();c.translate(cx,cy);c.scale(1,kh/kw);const rg=c.createRadialGradient(0,0,0,0,0,kw*.62);rg.addColorStop(0,`rgba(255,255,255,${(.22*p).toFixed(3)})`);rg.addColorStop(.4,led);rg.addColorStop(1,'rgba(0,0,0,0)');
    c.globalAlpha=.55*p;c.fillStyle=rg;c.fillRect(-kw,-kw,kw*2,kw*2);c.restore();c.globalAlpha=1}   // 백라이트
  if(fl>.05){c.globalCompositeOperation='lighter';c.globalAlpha=fl*.25;c.fillStyle='#fff';c.fillRect(xa-30,t0,kw+60,kh);c.globalAlpha=1}   // 친 순간 번쩍
  c.globalCompositeOperation='source-over';c.restore();
  trapPath(c,u0,u1,t0,t1,R);c.lineWidth=2;c.strokeStyle=p>.05?'rgba(255,255,255,.9)':'rgba(24,4,40,.7)';c.stroke();
  c.textAlign='center';c.textBaseline='middle';c.lineJoin='round';c.font='900 44px "NanumSquareRound","Nunito",sans-serif';const nm=PAD2N[l];
  c.fillStyle='rgba(30,0,25,.35)';c.fillText(nm,cx,cy+4);c.lineWidth=9;c.strokeStyle=k[5]||k[2];c.strokeText(nm,cx,cy);c.fillStyle='#FFFFFF';c.fillText(nm,cx,cy)}
function padCache(Q){const fr=!document.fonts||document.fonts.check('900 44px "NanumSquareRound"')?1:0,key=[fx.width,DPR,W,H,HB,G.yJ,G.wB,G.cx,Q.yB,fr].join('|');if(PADC.key===key&&PADC.u)return;
  const top=Math.floor(Q.yD-12),h=Math.ceil(HB+12-top),mk=()=>{const c=document.createElement('canvas');c.width=Math.round(W*DPR);c.height=Math.round(h*DPR);const x=c.getContext('2d');x.setTransform(DPR,0,0,DPR,0,-top*DPR);return [c,x]};
  const [cu,xu]=mk(),[co,xo]=mk();padPlate(xu,Q);for(let l=0;l<4;l++){padHole(xu,l,Q);padBody(xo,l,Q,0,0,'#fff')}
  Object.assign(PADC,{key,u:cu,o:co,top,h})}
function drawPads2Lite(hue){if(activeLanes.length<4){drawPads2(hue);return}
  const P=drawPads2.p||(drawPads2.p=[0,0,0,0]),Q=padGeo(),bg=Math.min(1,beatGlow),ledOf=l=>fever?`hsl(${(hue+l*70)%360},95%,62%)`:PAD2C[l][4];
  for(let l=0;l<4;l++){const tg=down[l]?1:0;P[l]+=(tg-P[l])*(tg?.65:.3)}
  padCache(Q);g.save();
  g.globalCompositeOperation='lighter';   // 누른 레인: 받침 위로 짧은 빛 기둥
  for(let l=0;l<4;l++){const p=P[l];if(p<.03)continue;const yb=G.yJ-300,bm=g.createLinearGradient(0,yb,0,Q.yD);bm.addColorStop(0,'rgba(0,0,0,0)');bm.addColorStop(1,PAD2C[l][4]);lanePoly(g,l+.04,l+.96,yb,Q.yD);g.globalAlpha=.36*p;g.fillStyle=bm;g.fill()}
  g.globalCompositeOperation='source-over';g.globalAlpha=1;
  g.drawImage(PADC.u,0,PADC.top,W,PADC.h);
  for(let l=0;l<4;l++)padLed(g,l,Q,Math.min(1,.32+.28*bg+.8*P[l]),ledOf(l));
  g.drawImage(PADC.o,0,PADC.top,W,PADC.h);
  for(let l=0;l<4;l++){const p=P[l],fl=flashes[l];if(p>.03||fl>.05){const led=ledOf(l);padHole(g,l,Q);padLed(g,l,Q,Math.min(1,.32+.28*bg+.8*p),led);padBody(g,l,Q,p,fl,led)}flashes[l]*=.84}
  for(const u of [0,4]){g.beginPath();g.moveTo(xOf(u,Q.sD),Q.yD);g.lineTo(xOf(u,Q.sE),HB+10);g.strokeStyle=fever?`hsl(${(hue+u*40)%360},95%,62%)`:(u?C('--mint'):C('--maple'));const lw=3+beatGlow*3;g.globalAlpha=.3;g.lineWidth=lw*3.2;g.stroke();g.globalAlpha=1;g.lineWidth=lw;g.stroke()}   // 레인 네온 가장자리 (번짐 대신 굵고 옅은 선 한 번 더)
  g.restore()}
let MENU_T=0,FX_IDLE=false;const MAIN_EL=$('main');   // 메뉴에서 레인 캔버스 쉬기 (draw)
function draw(){requestAnimationFrame(draw);g.imageSmoothingQuality=bx.imageSmoothingQuality=LITE?'low':'high';const tm=performance.now()/1000;if(playing&&!paused&&actx&&actx.state!=='running'){actx.resume().catch(()=>{});tapHint=1}else tapHint=0;
  const t=playing?now():-9,per=60/CHART.bpm,bp=playing?beatAt(t):tm/per*.5;
  if(playing){const bi=Math.floor(bp);if(bi>=0&&bi!==lastBeat){lastBeat=bi;const dn=(bi-CHART.db)%4===0;beatGlow=dn?1:.55;if(fever&&(dn||Math.random()<.35))firework();if(dn)laserHit=1}}
  G.sway=RM||LITE?0:Math.sin(bp*Math.PI/8)*W*(G.land?.012:.02)*(playing?1:.5);
  beatGlow*=.9;syncBga();
  const MENU=document.body.classList.contains('menu');   /* 메뉴(첫 화면 · 곡 화면 · 결과): 레인 캔버스(#fx)는 css 로 투명 — 사라지는 0.45초 뒤엔 그리지 않아요 (2026-10-06 출시 점검) */
  if(!(MENU&&MAIN_EL&&!MAIN_EL.classList.contains('hidden')&&MAIN_EL.querySelector('canvas.tintro')))drawBg(tm,bp);   /* 첫 화면은 인트로 그림이 배경을 덮어서 배경도 쉬어요 */
  if(MENU){if(!MENU_T)MENU_T=tm;if(tm-MENU_T>.45){if(!FX_IDLE){g.setTransform(1,0,0,1,0,0);g.clearRect(0,0,fx.width,fx.height);FX_IDLE=true}return}}else{MENU_T=0;FX_IDLE=false}
  g.setTransform(DPR,0,0,DPR,0,0);g.clearRect(0,0,W,HB+2);
  const sB=sAtY(HB+10),hue=tm*90,sT=G.sH*.45;   // sT: 레인 꼭대기 — 지평선(노트가 나타나는 곳)보다 조금 위까지 그리고 위쪽은 흐려지며 배경에 녹아요
  // 도로 바닥
  quad(g,0,4,sT,sB);const road=g.createLinearGradient(0,G.yH,0,H);road.addColorStop(0,'rgba(43,10,69,.5)');road.addColorStop(.7,'rgba(36,12,60,.88)');road.addColorStop(1,'rgba(30,8,50,.95)');g.fillStyle=road;g.fill();
  for(let l=0;l<4;l++){const act=activeLanes.includes(l);quad(g,l,l+1,sT,sB);const lg=g.createLinearGradient(0,G.yH,0,G.yJ);
    lg.addColorStop(0,'rgba(0,0,0,0)');lg.addColorStop(1,LC[l]);g.globalAlpha=(act?.1+beatGlow*.08+flashes[l]*.3+(down[l]?.1:0):.03)+(fever?.08:0);g.fillStyle=lg;g.fill()}
  g.globalAlpha=1;
  // 레인 빔
  beams=beams.filter(b=>b.a>.03);g.globalCompositeOperation='lighter';
  for(const b of beams){quad(g,b.l+.1,b.l+.9,G.sH,1);const lg=g.createLinearGradient(0,G.yJ,0,G.yH);lg.addColorStop(0,b.c);lg.addColorStop(1,'rgba(0,0,0,0)');g.globalAlpha=b.a*.7;g.fillStyle=lg;g.fill();b.a*=.86}
  g.globalCompositeOperation='source-over';g.globalAlpha=1;
  // 마디선
  for(let i=0;i<CHART.beats.length;i++){const z=(CHART.beats[i]-t)/APPROACH;if(z<0||z>1)continue;const s=sOf(z),y=yOf(s),down=(i-CHART.db)%4===0;
    g.strokeStyle=down?'rgba(255,243,224,.35)':'rgba(255,243,224,.1)';g.lineWidth=down?2*s+.5:1;g.beginPath();g.moveTo(xOf(0,s),y);g.lineTo(xOf(4,s),y);g.stroke()}
  // 레인 경계 + 가장자리 네온
  for(let u=0;u<=4;u++){g.beginPath();g.moveTo(xOf(u,sT),yOf(sT));g.lineTo(xOf(u,sB),HB+10);
    if(u===0||u===4){g.strokeStyle=fever?`hsl(${(hue+u*40)%360},95%,62%)`:(u?C('--mint'):C('--maple'));g.lineWidth=3+beatGlow*3;if(LITE){g.globalAlpha=.3;g.lineWidth*=3.2;g.stroke();g.globalAlpha=1;g.lineWidth=3+beatGlow*3}else{g.shadowColor=g.strokeStyle;g.shadowBlur=14}}
    else{g.strokeStyle='rgba(255,243,224,.14)';g.lineWidth=1;g.shadowBlur=0}g.stroke()}
  g.shadowBlur=0;
  // 레인 꼭대기: 위로 갈수록 지워서 배경에 스며들게 (뚝 끊기지 않게)
  {const yT=yOf(sT),yF=G.yH,fg=g.createLinearGradient(0,yT,0,yF);fg.addColorStop(0,'rgba(0,0,0,1)');fg.addColorStop(.55,'rgba(0,0,0,.55)');fg.addColorStop(1,'rgba(0,0,0,0)');   /* 지평선 위로 새로 늘린 부분만 흐려지고, 원래 레인(지평선 아래)은 그대로 진하게 */
   g.globalCompositeOperation='destination-out';g.fillStyle=fg;g.fillRect(0,yT-40,W,yF-yT+40);g.globalCompositeOperation='source-over'}
  // 판정선
  {const x0=xOf(0,1),x1=xOf(4,1);g.fillStyle=C('--shade');rr(x0-4,G.yJ-7,x1-x0+8,14,7);g.fill();if(LITE){g.globalAlpha=.32+beatGlow*.3;g.fillStyle=C('--maple');rr(x0-6,G.yJ-11,x1-x0+12,22,11);g.fill();g.globalAlpha=1;g.fillStyle='#fff';rr(x0,G.yJ-4,x1-x0,8,4);g.fill()}else{g.fillStyle='#fff';g.shadowColor=C('--maple');g.shadowBlur=12+beatGlow*16;rr(x0,G.yJ-4,x1-x0,8,4);g.fill();g.shadowBlur=0}
   [x0,x1].forEach(x=>{g.fillStyle=C('--gold');g.strokeStyle=C('--shade');g.lineWidth=2.5;starPath(g,x,G.yJ,11+beatGlow*3,tm*1.5);g.fill();g.stroke()})}
  // 판정선 LED + 렌즈 플레어
  {const n=24;for(let i=0;i<n;i++){const u=(i+.5)/n*4,x=xOf(u,1),on=(Math.floor(tm*8)+i)%6===0||beatGlow>.6;g.fillStyle=on?C('--gold'):'rgba(255,243,224,.25)';g.globalAlpha=on?.95:.5;g.fillRect(x-2,G.yJ+4,4,3)}g.globalAlpha=1}
  g.globalCompositeOperation='lighter';flares=flares.filter(f=>f.a>.03);for(const f of flares){const fw2=G.wB*.9*f.w*(1.3-f.a*.3);const fg=g.createRadialGradient(f.x,f.y,0,f.x,f.y,fw2);
    fg.addColorStop(0,`rgba(255,255,255,${f.a*.9})`);fg.addColorStop(.12,f.c);fg.addColorStop(1,'rgba(0,0,0,0)');g.save();g.translate(f.x,f.y);g.scale(1,.07);g.translate(-f.x,-f.y);g.globalAlpha=f.a;g.fillStyle=fg;
    g.beginPath();g.arc(f.x,f.y,fw2,0,7);g.fill();g.restore();f.a*=.84}
  hexes=hexes.filter(o=>o.a>.03);for(const o of hexes){g.strokeStyle=o.c;g.globalAlpha=o.a;g.lineWidth=3;g.beginPath();for(let i=0;i<6;i++){const a=i/6*Math.PI*2+o.r*.01;g.lineTo(o.x+Math.cos(a)*o.r,o.y+Math.sin(a)*o.r*.45)}g.closePath();g.stroke();o.r+=9;o.a*=.86}
  g.globalCompositeOperation='source-over';g.globalAlpha=1;
  // 콤보 (도로 위쪽)
  if(combo>=5&&playing&&ui2On('hud2'))drawCombo2(hue);   // 새 플레이 화면: Nunito 숫자 + 분홍 COMBO 알약
  else if(combo>=5&&playing){const y=G.yH+(G.yJ-G.yH)*.3,sc=(1+comboBounce*.3)*G.fs;g.save();g.translate(G.cx,y);g.scale(sc,sc);
    const fc=fever?`hsl(${hue%360},95%,68%)`:C('--gold');
    if(atOk){const ds=String(combo).split(''),dh=86,ws=ds.map(d=>ATLAS.s['d'+d][2]*dh/ATLAS.s['d'+d][3]*.8);let x=-ws.reduce((a,b)=>a+b,0)/2;
      if(fever){g.save();g.filter=`hue-rotate(${hue%360}deg) saturate(1.4)`}ds.forEach((d,i)=>{spr('d'+d,x+ws[i]/2,0,dh);x+=ws[i]});if(fever)g.restore();spr('combo',0,-58,34)}
    else pop(String(combo),0,0,70,fc);
    if(!atOk){g.rotate(-.06);g.fillStyle=C('--maple');rr(-44,-66,88,24,12);g.fill();g.strokeStyle=C('--shade');g.lineWidth=3;g.stroke();g.font='13px "Mochiy Pop One",sans-serif';g.fillStyle='#fff';g.textAlign='center';g.textBaseline='middle';g.fillText('コンボ',0,-54)}g.restore()}
  comboBounce*=.85;
  // 노트
  const SPR=NOTE_DRAW;if(playing){for(const n of notes){if(n.hit||n.dead)continue;const dt=n.t-t;if(dt<-GOOD){n.dead=true;miss(n);continue}const z=dt/APPROACH;if(z>1)break;
    const s=sOf(z),y=yOf(s),c=LC[n.l],na=Math.min(1,(1-z)/.14);if(!(s>0)||y>H+300)continue;g.globalAlpha=na;   // na: 지평선에서 스르륵 나타나게 · 판정선을 지나 화면 밖으로 나간 노트는 안 그려요 — 원근 크기 1/(1+D·z)가 z<−0.205 에서 음수로 뒤집혀서 배속 ×1.5 이상에서 놓친 노트가 ellipse 오류(음수 반지름)를 내고 그 프레임 그리기가 끊겼어요 (2026-10-06 사용자 신고) · 판정은 그대로 (−0.125초까지)
    if((skin==='bar'||!window.NOTE_SPR)&&atOk){const x0=xOf(n.l+.04,s),x1=xOf(n.l+.96,s),r=ATLAS.s['note'+n.l],nh=(x1-x0)*r[3]/r[2];g.drawImage(AT,r[0],r[1],r[2],r[3],x0,y-nh/2,x1-x0,nh)}
    else if(skin==='bar'||!window.NOTE_SPR){const th=Math.max(4,18*s),s0=sAtY(y+th/2),s1=sAtY(y-th/2);quad(g,n.l+.06,n.l+.94,s1,s0);
      const ng=g.createLinearGradient(0,y-th/2,0,y+th/2);ng.addColorStop(0,'#fff');ng.addColorStop(.35,c);ng.addColorStop(1,c);g.fillStyle=ng;g.shadowColor=c;g.shadowBlur=fever?18:10;g.fill();g.shadowBlur=0;
      g.strokeStyle=C('--shade');g.lineWidth=Math.max(1.5,3*s);g.stroke()}
    else{// 노트 한 장의 자리 (dq: 판정까지 남은 시간) — 모션블러 잔상도 같은 식으로 '조금 전' 자리를 다시 계산해 그려요 (원근 따라 판정선 가까이일수록 빠르고 길게)
      const at=dq=>{const sq=sOf(dq/APPROACH),yq=yOf(sq),xq=xOf(n.l+.5,sq),rwq=G.wB/4*sq*.46;let air=0,sx=1,sy=1;
        if(noteMove==='jump'){   // 점프: 나타나서 판정선까지 크게 한 번 뛰고, 판정 시각(dt=0)에 판정선에 딱 착지
          // 높이: 끝으로 갈수록 빨리 떨어지는 포물선 (중력처럼). 착지 직전엔 아래로 길쭉, 착지 순간 납작하게 찌그러졌다 통 하고 튀어 돌아와요
          const ph=dq>0?Math.min(1,Math.max(0,1-dq/APPROACH)):1;air=dq>0?Math.sin(Math.PI*Math.pow(ph,.85)):0;
          if(dq>0){const k=Math.max(0,(ph-.82)/.18);sy=1+.16*k*k;sx=1-.08*k*k;if(ph<.1){const u=1-ph/.1;sy=1-.12*u;sx=1+.1*u}}   // 떨어질 때 길쭉 / 뛰기 직전 웅크림
          else{const L=landSq(-dq);sx=L[0];sy=L[1]}}   // 착지: 판정선에 닿는 순간 탁
        return {x:xq,y:yq,rw:rwq,air,sx,sy}};
      const P=at(dt),x=P.x,rw=P.rw,air=P.air;
      const br=rw*(1-.35*air);g.globalAlpha=noteMove==='jump'?.42*(1-.55*air):1;g.fillStyle=c;g.globalAlpha*=na;if(LITE){}else{g.shadowColor=c;g.shadowBlur=noteMove==='jump'?0:12}g.beginPath();g.ellipse(x,y,br,br*.36,0,0,7);g.fill();g.shadowBlur=0;g.globalAlpha=1;   // 레인 색 받침 (점프는 옅게, 공중에선 더 작고 옅게)
      const SS=window.NOTE_SPRS,mi=SS&&SS.length>1?(noteMix==='mix'?(n.mv??(n.mv=Math.floor(Math.abs(Math.sin(n.t*12.9898+n.l*78.233)*43758.5453))%SS.length)):NOTE_LANE[n.l]%SS.length):-1,
        F=(mi>=0&&SS[mi])||NOTE_SPR,N=F.length,fi=spinF(n,N),   // 빙글빙글: 노트마다 방향·빠르기·시작 각도가 판마다 무작위 (spinF)
        scl=((window.TUNE&&TUNE.notes[mi]?TUNE.notes[mi].s:NOTE_SCALE[mi])||1)*(n.s==='x'?1.35:1),
        rect=(Q,ex,ey)=>{const sz0=Q.rw*2.7,sz=sz0*scl,foot=Q.y+.07*sz0-Q.air*Q.rw*3.4,w2=sz*Q.sx*ex,h2=sz*Q.sy*ey;return [F[fi],Q.x-w2/2,foot-.95*h2,w2,h2]};   // 발끝 기준으로 늘이고 줄여요
      const MB=LITE?null:NBLUR[noteBlur];   // 모바일: 잔상 없이 한 장만
      if(MB&&dt>0){const Q=at(dt+MB.sh),v=Math.hypot(P.x-Q.x,P.y-Q.y),st=Math.min(.14,v/Math.max(1,rw*2.7*scl)*.3);   // 노트 모션블러: 빠를수록 진행 방향으로 살짝 늘이고
        const m=rect(P,1-st*.3,1+st);m.push(na);SPR.push(m);
        for(let k=1;k<=MB.n;k++){const e=rect(at(dt+MB.sh*k/MB.n),1,1+st*(1-k/MB.n));e.push(na*MB.a*Math.pow(1-k/(MB.n+1),1.4));SPR.push(e)}}   // 지나온 자리에 옅어지는 잔상 (본 노트 뒤에 그려져요)
      else{const m=rect(P,1,1);m.push(na);SPR.push(m)}}g.globalAlpha=1}   // 발끝 기준으로 늘이고 줄여요
    for(let i=SPR.length-1;i>=0;i--){const d=SPR[i];g.globalAlpha=d[5];g.drawImage(d[0],d[1],d[2],d[3],d[4])}g.globalAlpha=1;SPR.length=0}
   // 받침(그림자)을 다 깐 뒤 캐릭터는 먼 노트부터 (그림자가 노트를 덮지 않고, 가까운 노트가 앞에 와요)
  // 드럼 패드 (판정선 아래)
  /* 노트 버튼: 새 버튼 그림(ui/pads: 핑크빈·버섯·슬라임·예티)이 오면 그걸, 아니면 아틀라스의 예전 버튼 */
  if(!PADI&&window.PADS_URL){PADI=new Image();PADI.crossOrigin='anonymous';PADI.src=PADS_URL}const padOk=PADI&&PADI.complete&&PADI.naturalWidth>0;
  if((G.land||MOB)&&ui2On('pad2'))(LITE?drawPads2Lite:drawPads2)(hue);   // 새 건반: 아케이드 키 (레인 폭 금속 받침 · 타이밍 미터 띠 · LED · 누르면 쑥 · 빛 기둥)
  else if(atOk||padOk){for(let l=0;l<4;l++){const my=(G.yJ+H)/2+6,sm=sAtY(my),x0=xOf(l+.03,sm),x1=xOf(l+.97,sm),SRC=padOk?PADI:AT,r=padOk?[l*282,0,282,182]:ATLAS.s['pad'+l],pw=x1-x0,ph=Math.min(pw*r[3]/r[2],(H-G.yJ)-14),py=my-ph/2+(down[l]?3:0);
      g.globalAlpha=1;g.drawImage(SRC,r[0],r[1],r[2],r[3],x0,py,pw,ph);if(flashes[l]>.05){g.globalCompositeOperation='lighter';g.globalAlpha=flashes[l]*.7;g.drawImage(SRC,r[0],r[1],r[2],r[3],x0,py,pw,ph);g.globalCompositeOperation='source-over'}g.globalAlpha=1;flashes[l]*=.84;if(KEYS[l]!=='dfjk'[l])keyBadge(g,x0+pw/2,py+ph*.648,ph*.27,window.KEYCFG?KEYCFG.label(KEYS[l]):KEYS[l].toUpperCase())}}
  else for(let l=0;l<4;l++){const act=activeLanes.includes(l),s0=1.02,s1=sAtY(H-8);quad(g,l+.05,l+.95,s0,s1);
    const pg=g.createLinearGradient(0,G.yJ,0,H);pg.addColorStop(0,LC[l]);pg.addColorStop(1,'rgba(13,6,32,.9)');g.globalAlpha=act?(.35+flashes[l]*.65+(down[l]?.15:0)):.12;g.fillStyle=pg;g.fill();
    g.globalAlpha=act?1:.4;g.strokeStyle=LC[l];g.lineWidth=2;g.stroke();
    const my=(G.yJ+H)/2,mx=xOf(l+.5,sAtY(my));g.textAlign='center';g.textBaseline='middle';g.fillStyle=C('--cream');
    g.font='19px "Jua",sans-serif';g.lineWidth=4;g.strokeStyle=C('--shade');g.strokeText(LANE_NAMES[l],mx,my-10);g.fillStyle='#fff';g.fillText(LANE_NAMES[l],mx,my-10);g.font='13px "Mochiy Pop One",sans-serif';g.globalAlpha*=.75;g.fillText(act?KEYS[l].toUpperCase():'AUTO',mx,my+12);g.globalAlpha=1;flashes[l]*=.84}
  // 링
  rings=rings.filter(o=>o.a>.03);for(const o of rings){g.strokeStyle=o.c;g.globalAlpha=o.a;g.lineWidth=o.w*o.a+1;g.beginPath();g.ellipse(o.x,o.y,o.r,o.r*.38,0,0,7);g.stroke();o.r+=6*(o.sp||1);o.a*=.87}
  g.globalAlpha=1;
  // 파티클
  parts=parts.filter(p=>p.life>0&&p.y<H+40);for(const p of parts){p.x+=p.vx;p.y+=p.vy;p.vy+=p.gv??.4;p.vx*=.98;p.life-=p.dec;g.globalAlpha=Math.max(0,Math.min(1,p.life*1.4));g.fillStyle=p.c;
    if(p.t==='maple'){p.ph+=p.fq;p.x+=Math.sin(p.ph)*p.sw;p.rot+=p.vr;p.fl+=p.fv;mapleLeaf(g,p.x,p.y,p.r,p.rot+Math.cos(p.ph)*.3,Math.cos(p.fl),LEAFC[p.ci],LEAFB[p.ci])}
    else if(p.t==='leaf'||p.t==='star'||p.t==='heart'){p.rot+=p.vr;(p.t==='star'?starPath:p.t==='heart'?heartPath:leafPath)(g,p.x,p.y,p.r,p.rot);g.fill();if(p.t!=='leaf'){g.strokeStyle=C('--shade');g.lineWidth=1.8;g.stroke()}}else{g.beginPath();g.arc(p.x,p.y,p.r*p.life+.4,0,7);g.fill()}}
  g.globalAlpha=1;
  window.HITFX&&HITFX.draw(g);
  window.BALLFX&&BALLFX.draw(g);   // PICKMON BY MY SIDE: 픽몬 볼 튀어올라 팡 (js/ballfx.js)
  // 친 노트가 판정선에 탁 착지하는 모습 (보통·점프 모두) — 타격 이펙트 위에 그려서 번쩍임에 가려지지 않게 (찌그러졌다 튀고 사라져요)
  {const pn=playing?now():0,SS=window.NOTE_SPRS;for(let i=LANDS.length-1;i>=0;i--){const L=LANDS[i],tl=pn-L.t0;if(tl>.2||!playing){LANDS.splice(i,1);continue}
    const n=L.n,mi=SS&&SS.length>1?(noteMix==='mix'?(n.mv??0):NOTE_LANE[n.l]%SS.length):-1,F=(mi>=0&&SS[mi])||window.NOTE_SPR;if(!F)continue;const N=F.length,fi=spinF(n,N);
    const rw=G.wB/4*.46,x=xOf(n.l+.5,1),sz0=rw*2.7,sz=sz0*((window.TUNE&&TUNE.notes[mi]?TUNE.notes[mi].s:NOTE_SCALE[mi])||1)*(n.s==='x'?1.35:1),q=landSq(tl),w2=sz*q[0],h2=sz*q[1],foot=G.yJ+.07*sz0;
    g.globalAlpha=tl<.12?1:1-(tl-.12)/.08;g.drawImage(F[fi],x-w2/2,foot-.95*h2,w2,h2);g.globalAlpha=1}}
  // 판정 글자
  if(judge&&judge.a>.03){const y=G.yH+(G.yJ-G.yH)*.62,sc=(1+(judge.s-1)*Math.pow(judge.a,4))*G.fs;g.save();g.translate(G.cx,y);g.scale(sc,sc);g.rotate(-.05);g.globalAlpha=Math.min(1,judge.a*1.6);
    if(!spr('j_'+judge.txt.toLowerCase(),0,8,96))pop(judge.jp,0,0,40,C(judge.c),judge.txt);if(judge.fs&&spr(judge.fs.toLowerCase(),0,64,26));else if(judge.fs){g.font='14px "Mochiy Pop One",sans-serif';g.fillStyle=judge.fs==='FAST'?C('--mint'):C('--maple');g.strokeStyle=C('--shade');g.lineWidth=4;g.strokeText(judge.fs,0,52);g.fillText(judge.fs,0,52)}
    g.restore();judge.a*=.94}
  texts=texts.filter(o=>o.a>.03).slice(-3);for(const o of texts){g.save();g.translate(G.cx,o.y);const sc=1+(o.s-1)*o.a*o.a;g.scale(sc,sc);g.rotate(-.04);g.globalAlpha=Math.min(1,o.a*1.5);
    if(!(o.spr&&spr(o.spr,0,0,o.size*1.6*G.fs)))pop(o.txt,0,0,Math.round(o.size*G.fs),C(o.c),o.sub);g.restore();o.a*=.955}
  g.globalAlpha=1;
  // 그루브 게이지
  if((G.land||MOB)&&ui2On('hud2'))drawGauge2(t);   // 새 플레이 화면: 왼쪽 칸 게이지 판 (HTML — 값만 넣어요 · 판은 .hud 와 함께 보였다 숨어요)
  else if(playing){const gx=G.gx,gy=G.gy,gw=G.gw,gh=G.land?10:7;g.fillStyle='rgba(255,243,224,.12)';rr(gx,gy,gw,gh,4);g.fill();
    const gg=g.createLinearGradient(gx,0,gx+gw,0);if(fever){gg.addColorStop(0,`hsl(${hue%360},95%,62%)`);gg.addColorStop(1,`hsl(${(hue+180)%360},95%,62%)`)}else{gg.addColorStop(0,C('--mint'));gg.addColorStop(.75,C('--gold'));gg.addColorStop(1,C('--leaf'))}
    if(atOk){const r=ATLAS.s.gauge_frame;g.drawImage(AT,r[0],r[1],r[2],r[3],gx-8,gy-8,gw+16,gh+20)}const cells=24,cw=gw/cells;for(let i=0;i<cells;i++){const on=gauge/100*cells>i;g.fillStyle=on?gg:'rgba(255,243,224,.08)';g.globalAlpha=on?(fever?.7+.3*Math.sin(tm*12+i):1):1;rr(gx+i*cw+1,gy,cw-2,gh,2);g.fill()}g.globalAlpha=1;g.font='11px "Mochiy Pop One",sans-serif';g.textAlign='left';g.textBaseline='top';g.fillStyle='rgba(255,243,224,.75)';
    g.font='13px "Jua",sans-serif';g.fillText('클리어 게이지',gx,gy+12);if(fever)spr('fever_badge',gx+gw-60,gy+26,30);
    const pr=Math.max(0,Math.min(1,t/buf.duration));g.fillStyle='rgba(255,243,224,.5)';g.fillRect(gx,gy-5,gw*pr,2)}
  // 콤보 브레이크 파편
  shards=shards.filter(p=>p.life>0);for(const p of shards){p.x+=p.vx;p.y+=p.vy;p.vy+=.35;p.rot+=p.vr;p.life-=.025;g.save();g.translate(p.x,p.y);g.rotate(p.rot);g.globalAlpha=p.life;g.fillStyle=C('--gold');
    g.beginPath();g.moveTo(0,-p.r);g.lineTo(p.r*.6,p.r*.4);g.lineTo(-p.r*.5,p.r*.5);g.closePath();g.fill();g.restore()}g.globalAlpha=1;
  // 컷인 배너 (사선 띠가 휙 지나가요)
  // 컷인 배너: 레인을 가리지 않게 지평선 위 하늘에만 (화면 절반 폭 리본)
  banners=banners.filter(b=>performance.now()-b.t0<1500);for(const b of banners){const e=(performance.now()-b.t0)/1500,bh=Math.min(120,G.yH*.78),cy=Math.max(bh/2+9,G.yH*.47),bw=Math.min(W*.58,820);   // 하늘(지평선 위) 안에서 최대한 크게
    let off=e<.16?1-e/.16:e>.8?-(e-.8)/.2:0;off=Math.sign(off)*Math.pow(Math.abs(off),2);g.save();g.translate(off*W*1.2,0);g.translate(W/2,cy);g.rotate(-.04);{const k=e>.16&&e<.34?1+.07*Math.sin((e-.16)/.18*Math.PI):1;g.scale(k,k)}   // 자리 잡을 때 살짝 '통'
    const col=b.kind==='fever'?`hsl(${(tm*140)%360},95%,62%)`:b.kind==='combo'?C('--maple'):C('--mint');
    g.fillStyle=C('--shade');g.fillRect(-bw/2-7,-bh/2-7,bw+14,bh+14);g.fillStyle=col;g.fillRect(-bw/2,-bh/2,bw,bh);
    g.save();g.beginPath();g.rect(-bw/2,-bh/2,bw,bh);g.clip();
    g.fillStyle='rgba(255,255,255,.22)';for(let i=-Math.ceil(bw/92)-2;i<Math.ceil(bw/92)+2;i++){g.save();g.translate(i*46+((tm*260)%46),0);g.rotate(.5);g.fillRect(-9,-bh,18,bh*2);g.restore()}
    g.fillStyle='rgba(43,10,69,.16)';for(let yy=-bh/2+8;yy<bh/2;yy+=12)for(let xx=-bw/2;xx<bw/2;xx+=12){g.beginPath();g.arc(xx+(yy%24?6:0),yy,2,0,7);g.fill()}
    g.restore();
    for(let i=0;i<6;i++){const sx=(i-2.5)*bw*.19,sy=(i%2?-1:1)*bh*.42;g.fillStyle=i%2?C('--gold'):'#fff';g.strokeStyle=C('--shade');g.lineWidth=2.5;starPath(g,sx,sy,10+(i%3)*4,tm*2+i);g.fill();g.stroke()}
    pop(b.txt,0,-bh*.13,Math.round(bh*.4),'#fff');   // 큰 글자
    if(b.sub){const s2=Math.round(bh*.23);g.font=s2+'px '+(/[가-힣]/.test(b.sub)?'"Jua"':'"Mochiy Pop One"')+',sans-serif';g.lineWidth=s2*.32;g.strokeStyle=C('--shade');g.strokeText(b.sub,0,bh*.27);g.fillStyle='#fff';g.fillText(b.sub,0,bh*.27)}   // 부제: 배너에선 크게
    g.restore()}
  if(tapHint){g.fillStyle='rgba(43,10,69,.75)';g.fillRect(0,H*.4,W,H*.14);pop('TAP!',G.cx,H*.45,34*G.fs,C('--gold'),'화면을 한 번 눌러 소리를 켜주세요')}
  // 화면 플래시
  if(whiteFlash>.02){g.fillStyle='#fff';g.globalAlpha=whiteFlash*.45;g.fillRect(0,0,W,H);whiteFlash*=.86}
  if(redFlash>.02){const gr=g.createRadialGradient(G.cx,H/2,H*.25,G.cx,H/2,H*.8);gr.addColorStop(0,'rgba(242,58,94,0)');gr.addColorStop(1,'rgba(242,58,94,.7)');g.globalAlpha=redFlash;g.fillStyle=gr;g.fillRect(0,0,W,H);redFlash*=.88}
  g.globalAlpha=1;
  if(playing){dispScore+=(score-dispScore)*.25;const sc=String(Math.round(dispScore)).padStart(7,'0');if(sc!==lastScTxt){lastScTxt=sc;$('score').textContent=sc}}}   // 숫자가 바뀔 때만 글자를 바꿔요
draw();

// ===================== 입력 =====================
let calib=null,calibEnd=0;
// 레인 키: 영문 글자 · 숫자면 그대로, 아니면(한/영이 한글일 때의 ㅇ · Process 등) 자판 자리(e.code)로 — 한글 입력 상태여도 D F J K 가 먹어요 (2026-10-06 출시 점검)
function keyOf(e){const k=(e.key||'').toLowerCase();if(k.length===1&&((k>='a'&&k<='z')||(k>='0'&&k<='9')))return k;const c=e.code||'';if(/^Key[A-Z]$/.test(c))return c.slice(3).toLowerCase();if(/^Digit[0-9]$/.test(c))return c.slice(5);return k}
window.keyOf=keyOf;
addEventListener('keydown',e=>{if(e.repeat)return;const k=keyOf(e);
  if(e.key==='Escape'&&playing){e.preventDefault();paused?resumeGame():pauseGame();return}   // Esc: 일시정지 / 계속 (조절 패널이 열려 있으면 패널만 닫아요)
  if(calib&&e.key==='Escape'){e.preventDefault();endCalib();return}   // 싱크 맞추기 그만두기
  if(paused)return;
  if(calib&&(e.key===' '||KEYS.includes(k))){e.preventDefault();calibTap();return}
  /* 플레이 중 싱크 키(←/→ · −/=)와 화면 아래 −/+ 버튼은 뺐어요 (2026-10-02 사용자 요청) — 채보 타이밍은 박자 지도로 맞춰 두고, 기기 소리 지연은 설정의 「싱크」에서만 */
  const i=KEYS.indexOf(k);if(i>=0){e.preventDefault();press(i);return}
  if((e.key===' '||e.key==='Enter')&&!playing&&performance.now()-calibEnd>1500&&!$('title').classList.contains('hidden')&&!document.querySelector('.prpop:not([hidden]),#settings[open]')&&document.activeElement.tagName!=='BUTTON'&&document.activeElement.tagName!=='SUMMARY'&&document.activeElement.tagName!=='INPUT'){e.preventDefault();start()}});
addEventListener('keyup',e=>{const i=KEYS.indexOf(keyOf(e));if(i>=0)release(i)});
const ptr={};
fx.addEventListener('pointerdown',e=>{if(!playing||paused)return;const P=toStage(e.clientX,e.clientY),x=P.x,y=Math.max(G.yH+20,P.y),s=sAtY(y);
  const u=((x-G.cx)/(G.wB*s)+.5)*4,l=Math.max(0,Math.min(3,Math.floor(u)));ptr[e.pointerId]=l;fx.setPointerCapture?.(e.pointerId);press(l)});
['pointerup','pointercancel'].forEach(ev=>fx.addEventListener(ev,e=>{if(ptr[e.pointerId]!=null){release(ptr[e.pointerId]);delete ptr[e.pointerId]}}));

// ===================== 싱크 / 설정 UI =====================
function setOff(v){offset=Math.max(-300,Math.min(300,Math.round(v/5)*5));$('off').value=offset;const s=(offset>0?'+':'')+offset+'ms';$('offV').textContent=s;$('liveV').textContent=s;ss('mds-off',offset)}
if(ls('mds-off-reset','')!=='1'){offset=0;ss('mds-off-reset','1')}   /* 한 번만: 예전 플레이 중 −/+ 버튼 · ←/→ 키로 바뀌어 저장된 싱크를 기본 0ms 로 되돌려요 (2026-10-02 사용자 요청) */
setOff(offset);$('off').oninput=e=>setOff(+e.target.value);$('mi').onclick=()=>setOff(offset-5);$('pl').onclick=()=>setOff(offset+5);
async function startCalib(){await ensure();await actx.resume();if(!buf){try{await useSong(cur)}catch(e){return}if(!buf)return}stopPreview();try{vid.pause()}catch(e){}lat=(actx.outputLatency||0)+(actx.baseLatency||0);
  const from=CHART.beats[CHART.db+4*8]||CHART.beats[0],s=actx.createBufferSource();s.buffer=buf;s.connect(master);const st=actx.currentTime+.3;s.start(st,from);s.onended=()=>{if(calib&&calib.src===s)endCalib()};   /* 음원이 끝나면 지금까지 친 걸로 마무리하고 돌아가요 · Esc 로도 그만둬요 */
 
  calib={src:s,st,from,taps:[]};$('calBig').textContent='0 / 16';show('cal')}
function calibTap(){if(!calib)return;const songT=actx.currentTime-calib.st+calib.from-lat;let bd=9;for(const b of CHART.beats){const d=songT-b;if(Math.abs(d)<Math.abs(bd))bd=d}
  if(Math.abs(bd)<.2)calib.taps.push(bd);flashes.fill(1);$('calBig').textContent=calib.taps.length+' / 16';if(calib.taps.length>=16)endCalib()}
function endCalib(){calibEnd=performance.now();const t=calib.taps.slice(3).sort((a,b)=>a-b);try{calib.src.stop()}catch(e){}calib=null;
  if(t.length>=5)setOff(-t[t.length>>1]*1000);show('title');$('settings').open=true;try{playPreview()}catch(e){}}
$('calib').onclick=startCalib;$('cal').addEventListener('pointerdown',()=>calibTap());
function renderDiffs(){$('diffs').innerHTML='';Object.entries(DIFFS).forEach(([k,v])=>{const b=document.createElement('button');b.className='diff diff-'+k;b.setAttribute('aria-pressed',k===diff);
  b.innerHTML=`<i>${v.name}</i><b>${CHART.sets[k].length}</b><span>NOTES</span>`;b.setAttribute('aria-label',`${v.name} — 노트 ${CHART.sets[k].length}개`);b.onclick=()=>{if(window.SINTRO&&SINTRO.on())return;b.blur();if(diff!==k&&window.UISFX)UISFX.play('diff');diff=k;activeLanes=v.lanes;renderDiffs()};$('diffs').appendChild(b)});window.RANK&&RANK.refresh();window.SONGINFO&&SONGINFO.update()}   /* 카드: 흰 카드 + 색 라벨 + 큰 노트 수 (그림 대신 CSS — 곡 화면 디자인 v3) */   // 난이도를 바꾸면 그 난이도 랭킹으로
renderDiffs();
function chips(el,items,cur,on){if(!$(el))return;$(el).innerHTML='';   /* 그 칸이 없으면(설정에서 뺀 항목) 그냥 넘어가요 */items.forEach(([k,nm],i)=>{const b=document.createElement('button');b.className='chip';b.textContent=nm;b.setAttribute('aria-pressed',k===cur());
  b.onclick=()=>{on(k,i);[...$(el).children].forEach((c,j)=>c.setAttribute('aria-pressed',items[j][0]===cur()));b.blur()};$(el).appendChild(b)})}
const NOTE_TIPS={spin:'노트가 빙글빙글 돌면서 내려옵니다',jump:'노트가 점프로 날아서 등장합니다 · 점수 10% 더!'};   // 노트 스타일 말풍선 설명 (마우스를 올리면)
const SPX_TIPS={.5:'노트가 아주 천천히 내려옵니다',.75:'노트가 조금 천천히 내려옵니다',1:'기본 속도입니다',1.25:'노트가 조금 빠르게 내려옵니다',1.5:'노트가 빠르게 내려옵니다',1.75:'노트가 더 빠르게 내려옵니다',2:'노트가 아주 빠르게 내려옵니다'};   // 배속 말풍선 설명
function tips(id,keys,T){const e=$(id);e.classList.add('seg');[...e.children].forEach((b,i)=>{const t=T[keys[i]];if(!t)return;b.dataset.tip=t;b.setAttribute('aria-label',b.textContent+' — '+t)})}
function playOpts(){chips('notemove',[['spin','보통'],['jump','점프!']],()=>noteMove,(k)=>{noteMove=k});tips('notemove',['spin','jump'],NOTE_TIPS);{const b=$('notemove')&&$('notemove').children[1];if(b&&!b.querySelector('.bonus')){const s=document.createElement('small');s.className='bonus';s.textContent='+'+Math.round((JUMP_BONUS-1)*100)+'%';b.appendChild(s)}}   /* 「점프!」 옆 보너스 표시 */
  chips('spxs',SPX_LIST.map(v=>[v,'x'+(v*4%2?v.toFixed(2):v.toFixed(1))]),()=>spx,(k)=>{spx=k;APPROACH=SPX_BASE/spx});tips('spxs',SPX_LIST,SPX_TIPS)}
// 조작키를 바꾸면(js/keys.js) 버튼 그림에 박힌 D F J K 글자 위에 흰 키캡으로 새 글자를 덮어요
function keyBadge(g,cx,cy,h,t){g.save();g.font=`900 ${Math.round(h*.62)}px "Nunito","Pretendard Variable",sans-serif`;const w=Math.max(h*1.12,g.measureText(t).width+h*.5),x=cx-w/2,y=cy-h/2,r=h*.28;
  g.beginPath();g.moveTo(x+r,y);g.arcTo(x+w,y,x+w,y+h,r);g.arcTo(x+w,y+h,x,y+h,r);g.arcTo(x,y+h,x,y,r);g.arcTo(x,y,x+w,y,r);g.closePath();
  g.fillStyle='#fff';g.fill();g.lineWidth=Math.max(2,h*.09);g.strokeStyle='#2B0A45';g.stroke();g.fillStyle='#2B0A45';g.textAlign='center';g.textBaseline='middle';g.fillText(t,cx,cy+h*.04);g.restore()}
var LASTOPT=null;   // 방금 판의 옵션 — 결과 화면 「다시 하기」는 같은 옵션(점프 · 배속 · 레인 섞기 · 가리개)으로 다시 해요 (2026-10-07 테스터: 「점프 모드로 깬 뒤 다시 하기를 누르면 일반 모드로 돼요」)
function againOpts(){const o=LASTOPT;if(!o)return;noteMove=o.noteMove;spx=o.spx;APPROACH=SPX_BASE/spx;playOpts();if(o.popt&&window.PLAYOPTS)for(const k in o.popt)PLAYOPTS.set(k,o.popt[k])}
function resetPlayOpts(){LASTOPT={noteMove,spx,popt:window.PLAYOPTS?PLAYOPTS.get():null};noteMove='spin';spx=SPX_DEF;APPROACH=SPX_BASE/spx;playOpts();window.PLAYOPTS&&PLAYOPTS.reset()}   // 한 판 끝나면(결과 화면 · 그만두고 곡 선택) 배속·노트 스타일은 기본으로
playOpts();
chips('bgas',[['video','켜기'],['off','끄기']],()=>bgaMode,(k)=>{bgaMode=k;ss('mds-bga',k);applyBga()});
chips('hitfx',[['flash','섬광 폭발'],['classic','기본']],()=>hitStyle,(k)=>{hitStyle=k;ss('mds-hitfx',k)});
chips('hmeter',[['on','켜기'],['off','끄기']],()=>ls('mds-hmeter','on'),(k)=>{ss('mds-hmeter',k);window.HMETER&&HMETER.set(k==='on')});   // 판정선 아래 타이밍 미터 (빠름 · 늦음 눈금)
[['mix','반주 음악',150],['k','킥',300],['s','스네어',300],['h','하이햇',300],['p','퍼커션',300]].forEach(([k,nm,mx])=>{
  const row=document.createElement('label');row.className='vrow';row.innerHTML=`<span class="vl">${nm}<b>${VOL[k]}%</b></span><input type="range" min="0" max="${mx}" step="5" value="${VOL[k]}">`;
  const inp=row.querySelector('input'),out=row.querySelector('b');inp.oninput=()=>{VOL[k]=+inp.value;out.textContent=VOL[k]+'%';if(k==='mix'&&mixG)mixG.gain.value=VOL.mix/100*(DRUMKIT()?.8:1);ss('mds-vol',JSON.stringify(VOL))};
  $('vols').appendChild(row)});
$('start').onclick=start;$('again').onclick=()=>{againOpts();start()};   /* 다시 하기: 방금 판 옵션 그대로 */
// ---- 일시정지 (⏸ 버튼 / Esc): 소리 시계(actx)를 멈추면 노트·판정·영상 싱크가 같이 멈춰요 ----
var paused=false;
function pauseGame(){if(!playing||paused)return;paused=true;try{actx.suspend()}catch(e){}try{vid.pause()}catch(e){}down.fill(false);$('pauseMenu').classList.remove('hidden')}
function resumeGame(){if(!paused)return;paused=false;$('pauseMenu').classList.add('hidden');actx.resume().catch(()=>{})}   // 영상은 syncBga 가 다시 맞춰요
function abortSong(){clearInterval(pracIv);clearInterval(autoIv);paused=false;$('pauseMenu').classList.add('hidden');playing=false;[src,...stemSrc].forEach(s=>{if(s){s.onended=null;try{s.stop()}catch(e){}}});
  setFever(false);$('live').classList.add('hidden');$('pauseBtn').classList.add('hidden');banners=[];texts=[];judge=null;window.HITFX&&HITFX.clear();return actx.resume().catch(()=>{})}
$('pauseBtn').onclick=pauseGame;$('pmResume').onclick=resumeGame;$('pmRetry').onclick=()=>{const pr=PRAC;abortSong().then(()=>start(pr||undefined))};
$('pmSelect').onclick=()=>{abortSong();PRAC=null;RATE=1;document.body.classList.remove('practice','autoplay');resetPlayOpts();show('select');applyBga()};
document.addEventListener('visibilitychange',()=>{if(document.hidden)pauseGame()});   // 창을 벗어나면 저절로 멈춰요
// 페이지를 열자마자 미리 소리를 풀어둬요 (누르기 전까지는 조용히 대기)
// ---- 곡 선택 / 미리듣기 ----
let prev=null;
function stopPreview(){if(prev){const p=prev;prev=null;try{p.g.gain.setTargetAtTime(0,actx.currentTime,.15);setTimeout(()=>{try{p.s.stop()}catch(e){}},600)}catch(e){}}}
function playPreview(){if(!actx||!buf)return;stopPreview();const s=actx.createBufferSource(),gn=actx.createGain();s.buffer=buf;s.loop=true;s.loopStart=SONGS[cur].prev;s.loopEnd=Math.min(buf.duration,SONGS[cur].prev+14);
  gn.gain.setValueAtTime(0,actx.currentTime);gn.gain.linearRampToValueAtTime(.55,actx.currentTime+.8);s.connect(gn).connect(master);s.start(0,SONGS[cur].prev);prev={s,g:gn,t0:actx.currentTime,a:s.loopStart,b:s.loopEnd}}
function openSong(i){cur=i;ss('mds-song',i);const S=SONGS[i];CHART=chartOf(S);VOFF=S.voff;lastBeat=-1;buf=null;stemBufs=[];padBufs=[];
  $('lgA').textContent=S.title;$('lgB').textContent=S.kana;$('lgC').textContent=S.sub;sprEl($('lgImg'),S.logo);$('lgImg').parentElement.classList.toggle('nolg',!ATLAS.s[S.logo]);$('lgMeta').innerHTML=`<span class="mp mp-bpm">♪ ${S.bpm} BPM</span><span class="mp mp-len"><svg class="ic" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 4.6V8l2.4 1.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>${S.len}</span>`;applySongArt();$('hudSong').textContent=S.title;
  renderDiffs();setBga(S.bga);if(!S.bga&&S.bgaLoad)S.bgaLoad().then(u=>{S.bga=u;if(cur===i)setBga(u)}).catch(e=>console.warn('bga',S.id,e));show('title');
  $('start').disabled=true;setLbl('LOADING');
  useSong(i).then(()=>{if(cur!==i)return;$('start').disabled=false;setLbl('START');$('loadMsg').textContent='';if(!playing&&!window.SL_HOLD&&!$('title').classList.contains('hidden'))playPreview()})   /* SL_HOLD: 곡 화면 룰렛이 도는 동안은 미리 듣기를 미뤄요 (js/songlist.js) */
    .catch(e=>{$('start').disabled=false;setLbl('START');$('loadMsg').textContent='불러오기 실패, START를 누르면 다시 시도해요 ('+e.message+')'})}
// 곡 화면 왼쪽 큰 그림: 곡 전용 로고 그림(4倍の世界 펠트 로고)이 있으면 글자 로고 대신 크게 보여 줘요 (그림은 index.html 이 따로 받아요 — 늦게 오면 그때 다시)
function applySongArt(){const S=SONGS&&SONGS[cur],u=S&&window.SONG_ART&&SONG_ART[S.id],A=$('songArt'),im=$('songArtImg');if(!A||!im)return;
  if(u&&im.getAttribute('src')!==u){im.onload=()=>{const r=im.naturalWidth/im.naturalHeight;A.style.aspectRatio=im.naturalWidth+'/'+im.naturalHeight;A.style.width=r<1.213?`calc(min(38*var(--vw),60*var(--vh)) * ${(r/1.213).toFixed(3)})`:'';fitPixelArt()};im.src=u;if(im.complete&&im.naturalWidth)im.onload()}   /* 곡마다 그림 비율이 달라요 — 세로가 긴 그림은 폭을 줄여서 4倍の世界 그림과 높이가 비슷하게 */
  im.alt=u?`${S.title} — ${S.sub}`:'';A.hidden=!u;$('title').classList.toggle('has-art',!!u)}
window.applySongArt=applySongArt;
// 도트 그림(SONG_ART_DOTS 에 원래 도트 폭이 있는 곡 — 지금은 픽몬)은 화면 화소에 딱 맞는 정수 배율로: 칸 하나 = 정확히 n×n 화소라 도트가 깨지지 않아요
//  상자 폭을 「n × 도트 폭 ÷ (무대 배율 × 기기 배율)」로 맞추고 image-rendering: pixelated · 창 크기가 바뀌면 다시
function fitPixelArt(){const S=SONGS&&SONGS[cur],A=$('songArt'),im=$('songArtImg');if(!A||!im||!S)return;const dots=window.SONG_ART_DOTS&&SONG_ART_DOTS[S.id];
  A.classList.toggle('pix',!!dots);if(!im.naturalWidth||A.hidden)return;
  if(window.ART_LAYOUT&&ART_LAYOUT(A,im,S,dots))return;   // 새 곡 고르기 화면(js/songlist.js): 그림마다 실제 그림 영역을 재서 같은 상자에 맞춰요
  if(!dots)return;const K=window.STAGE_K||1,dp=K*(devicePixelRatio||1);A.style.width='';let w=A.getBoundingClientRect().width/K;if(!w)return;
  const n=Math.max(1,Math.floor(w*dp/dots+.02));w=n*dots/dp;A.style.width=w.toFixed(3)+'px'}
addEventListener('resize',()=>requestAnimationFrame(fitPixelArt));
function renderSongs(){if(!$('songs'))return;   /* 예전 CD 화면 카드 칸 — 지금은 없어요 */$('songs').innerHTML='';SONGS.forEach((S,i)=>{const b=document.createElement('button');b.className='card';b.style.setProperty('--cc',['var(--mint)','var(--maple)','var(--gold)','var(--grape)'][i%4]);   // 카드마다 빛나는 테두리 색
  b.innerHTML=`<span class="cdw"><span class="disc" aria-hidden="true"><i></i></span><span class="case"><span class="hinge" aria-hidden="true"></span><span class="obi" lang="ja" aria-hidden="true">${S.title}</span><span class="cover"><span class="art"><img class="jk" alt="" src="${S.jacket}" onerror="this.style.visibility='hidden'"><span class="len"><svg class="ic" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 4.6V8l2.4 1.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>${S.len}</span></span><span class="tx"><span class="t" lang="ja">${S.title}</span><span class="k">${S.kana} · ${S.sub}</span><span class="cp"><span class="cpi" aria-hidden="true">♫</span>MUSIC COMPOSER : ${S.composer||'석용현'}</span></span></span><span class="shine" aria-hidden="true"></span><span class="stk"><b>${S.bpm}</b><i>BPM</i></span></span></span>`;   // 투명 CD 케이스 — 곡 정보가 표지에 인쇄된 앨범: 위 재킷 그림(오른쪽 아래 곡 길이) · 아래 흰 인쇄면(제목 · 부제 · 작곡가) · 왼쪽 띠지 · 케이스 오른쪽 위 BPM 스티커 · 뒤로 빼꼼 나온 CD
  b.onclick=()=>{unlock();openSong(i)};
  // 카드에 마우스를 올리면 그 곡 소리를 미리 풀어둬요 (누를 때 바로 시작)
  b.onpointerenter=b.onfocus=()=>{ensure().then(()=>loadSong(i)).catch(()=>{})};$('songs').appendChild(b);b.querySelectorAll('[data-spr]').forEach(e=>sprEl(e))})}
renderSongs();$('hudSong').textContent=SONGS[cur].title;show($('main')?'main':'select');ensure().catch(()=>{});
$('back').onclick=()=>{stopPreview();try{vid.pause()}catch(e){}show('select')};
// 곡 화면 « » : 앞 · 뒤 곡으로 바로 넘어가요 (곡 선택 화면에 다녀오지 않고)
// 곡 넘기기 애니메이션 (사용자 2026-10-02): 시계 방향으로 도는 바퀴처럼 — 새 곡 그림은 12시 → 3시(제자리)로 내려오고, 이전 곡 그림은 3시 → 6시로 빠져요 (« 는 반대로 6시 → 3시, 3시 → 12시)
//  · 바퀴 중심은 그림 왼쪽 화면 밖(화면 폭 70% 거리) · 이전 곡은 복제본으로 그대로 얼려서 돌려 보내요
//  · 모션블러: 바퀴를 따라 움직이는 방향은 그림 기준으로 늘 세로라, 세로로만 흐리는 SVG 필터를 속도만큼 (멈추면 꺼요)
//  · 타이밍 (2026-10-06 사용자: 「이전 곡 그림이 약간 늦게 사라져서 밀려 넘어가는 느낌」): 이전 그림은 누르는 순간 바로 빠지며 흐려져 0.2초면 사라지고,
//    새 그림은 0.04초 뒤 흐린 데서 나타나며 스프링처럼 들어와 멈춰요 · 움직이는 각도 90° → 24° (덜 휙 날아가게) · 빠를 땐 진행 방향으로 늘어나고 모션블러
//    (예전엔 나가는 그림이 반대로 먼저 당겼다가 천천히 빠지고, 절반이 지나서야 흐려지기 시작해서 새 그림과 오래 겹쳤어요)
function wheelBlur(){let f=document.getElementById('wbIn');if(f)return;const ns='http://www.w3.org/2000/svg',sv=document.createElementNS(ns,'svg');sv.setAttribute('width','0');sv.setAttribute('height','0');sv.setAttribute('aria-hidden','true');sv.style.position='absolute';
  sv.innerHTML=['wbIn','wbOut'].map(id=>`<filter id="${id}" x="-12%" y="-45%" width="124%" height="190%" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="0 0"/></filter>`).join('');document.body.appendChild(sv)}
const sstep=(e0,e1,x)=>{const t=Math.min(1,Math.max(0,(x-e0)/(e1-e0)));return t*t*(3-2*t)};
function wheelSwap(d,swap){const W=$('artWrap'),T=$('title');if(!W||matchMedia('(prefers-reduced-motion: reduce)').matches){swap();return}
  wheelBlur();const tok=wheelSwap.tok=(wheelSwap.tok||0)+1;T.querySelectorAll('.awrap.ghost').forEach(e=>e.remove());
  const kk=window.STAGE_K||1,tr=T.getBoundingClientRect(),r0=W.getBoundingClientRect(),r={left:(r0.left-tr.left)/kk,top:(r0.top-tr.top)/kk,width:r0.width/kk,height:r0.height/kk},c=W.cloneNode(true);c.removeAttribute('id');c.classList.add('ghost');c.style.translate='none';   /* 무대 좌표 (무대는 통째로 배율이 걸려 있어요) · 묶음 이동(translate)은 잰 자리에 이미 들어 있어서 복제본에선 빼요 */c.querySelectorAll('[id]').forEach(e=>e.removeAttribute('id'));
  [...W.children].forEach((e,i)=>{c.children[i].style.display=getComputedStyle(e).display});   /* 곡이 바뀌어도 복제본 모습은 그대로 (그림 · 글자 로고 보이기) */
  Object.assign(c.style,{position:'absolute',left:r.left+'px',top:r.top+'px',width:r.width+'px',height:r.height+'px',margin:'0',pointerEvents:'none',zIndex:'3'});T.appendChild(c);
  const off=Math.round(STAGE_W*.7),Rp=off+r.width/2,piv=`${-off}px 50%`,a=d>0?90:-90;c.style.transformOrigin=W.style.transformOrigin=piv;
  const bIn=document.querySelector('#wbIn feGaussianBlur'),bOut=document.querySelector('#wbOut feGaussianBlur');
  swap();
  const DO=200,D0=40,DI=520,TAU=95,OMG=.0068,A=Math.sign(a)*24,t0=performance.now(),D2R=Math.PI/180;
  const angIn=t=>{const u=Math.max(0,t-D0);return -A*Math.exp(-u/TAU)*Math.cos(OMG*u)*(1-sstep(.8,1,u/DI))};   // 감쇠 스프링: 0.04초 뒤 출발, 0.23초쯤 제자리
  const angOut=t=>{const p=Math.min(1,t/DO);return A*p*p};   // 바로 출발해서 빨라지며 빠져요
  const sig=(f,t)=>Math.min(24,Math.abs(f(t+4)-f(t))/4*D2R*Rp*16.7*.28);   // 한 프레임에 움직이는 거리의 0.28배 (최대 24px)
  const put=(el,b,id,ang,s,sx,sy)=>{el.style.transform=`rotate(${ang.toFixed(3)}deg) scale(${sx.toFixed(4)},${sy.toFixed(4)})`;b.setAttribute('stdDeviation','0 '+s.toFixed(2));el.style.filter=s>.6?`url(#${id})`:''};
  (function frame(now){if(tok!==wheelSwap.tok){c.remove();return}const t=now-t0;
    {const s=sig(angIn,t),st=Math.min(.06,s/24*.06);put(W,bIn,'wbIn',angIn(t),s,1-st*.3,1+st);W.style.opacity=String(Math.max(0,Math.min(1,(t-D0)/130)))}   /* 새 그림: 흐린 데서 0.13초에 걸쳐 나타나요 */
    if(t<DO){const s=sig(angOut,t),st=Math.min(.06,s/24*.06),p=t/DO;put(c,bOut,'wbOut',angOut(t),s,1-st*.3,1+st);c.style.opacity=String(Math.pow(1-p,1.6))}else if(c.isConnected)c.remove();   /* 이전 그림: 처음부터 흐려져 절반 시간에 1/3 */
    if(t<DI+D0)requestAnimationFrame(frame);else{W.style.transform='';W.style.filter='';W.style.opacity='';bIn.setAttribute('stdDeviation','0 0')}})(t0)}
[['songPrev',-1],['songNext',1]].forEach(([id,d])=>{const b=$(id);if(b)b.onclick=()=>{if(playing)return;stopPreview();wheelSwap(d,()=>openSong((cur+d+SONGS.length)%SONGS.length))}});
$('toSelect').onclick=()=>{stopPreview();show('select')};
['pointerdown','keydown','touchend'].forEach(ev=>addEventListener(ev,unlock,{passive:true}));$('toTitle').onclick=()=>{show('title');applyBga();playPreview()};
