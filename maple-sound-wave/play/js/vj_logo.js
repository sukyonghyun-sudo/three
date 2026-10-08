// ===== 기리기리 메이플월드 로고 연출 (레인 좌우) =====
// 「메이플스토리 월드」 로고(일본어·영어)가 쿵 떨어져 박히고, 로고와 같은 디자인(남색 굵은 테두리 + 글자마다 다른 색 + 아치형 배치)의
// 일본어 의성어·한마디가 박자에 맞춰 빵빵 터져요. 주제: 쉽게 만들고(つくる) · 같이 놀고(あそぶ) · 돈도 버는(かせぐ) 게임 플랫폼.
// 16마디 한 바퀴: 0·8마디 로고 쾅 + 「ジャンプ!」, 1~3 「つくる!·あそぶ!·かせぐ!」, 7·15 「ギリギリ!」 크게, 나머지는 의성어. 신나는 마디엔 반대쪽에 작은 의성어(ポン! 등)도.
// 판정: 퍼펙트 → 떠 있는 글자가 통통 뛰고 반짝 + 가끔 「キラッ!」 / 미스 → 글자가 흔들, 콤보가 끊기면 「ガーン!」
//       25콤보 「いいね!」 / 50콤보 「すごーい!」+ 동전 / 100콤보 「さいこう!」+ 로고 / 피버 시작 「フィーバー!!」+ 로고 둘 다
// 그림: window.ART_LOGO[곡] = {jp, en, leaf}. 설정 「비주얼 아트」가 끄기가 아니면 켜지고, 3D 신사는 숨겨요.
(()=>{
const $=id=>document.getElementById(id),stage=$('stage'),ART=window.ART_LOGO||{};
const cv=document.createElement('canvas');cv.className='artpanels';($('monBox')||$('bg')).after(cv);const ctx=cv.getContext('2d');   /* 3D 캐릭터 위 · 레인 아래 (4배의 세계: 머리 위 글자가 머리에 가려지지 않게) */
let PR=1,W=0,H=0,szDirty=true,SZ={S:40,M:60,L:84};
function size(){if(!szDirty)return;szDirty=false;const w=stage.clientWidth,h=stage.clientHeight,pr=Math.min(1.25,(devicePixelRatio||1)*(window.STAGE_K||1));if(w===W&&h===H&&pr===PR)return;W=w;H=h;PR=pr;cv.width=Math.round(W*PR);cv.height=Math.round(H*PR);PREV=[];
  SZ={S:Math.round(H*.05),M:Math.round(H*.072),L:Math.round(H*.1)};for(const k in CC)delete CC[k];for(const k in LAY)delete LAY[k]}
addEventListener('resize',()=>szDirty=true);if(window.ResizeObserver)new ResizeObserver(()=>szDirty=true).observe(stage);
// ---- 그림 ----
const LOADED={};
function imgs(id){const a=ART[id];if(!a)return null;if(LOADED[id])return LOADED[id];const o={};
  for(const k in a){if(!a[k])continue;const im=new Image();im.crossOrigin='anonymous';im.onload=()=>{if(window.createImageBitmap)createImageBitmap(im).then(bm=>{o[k]=bm}).catch(()=>{})};im.src=a[k];o[k]=im}
  return LOADED[id]=o}
const NW=im=>im.naturalWidth||im.width,NH=im=>im.naturalHeight||im.height,ok=im=>!!im&&(im.complete===undefined?im.width>0:im.complete&&im.naturalWidth>0);
// ---- 도우미 ----
const fr=x=>x-Math.floor(x),clamp=(x,a,b)=>x<a?a:x>b?b:x,lerp=(a,b,t)=>a+(b-a)*t,eOut=x=>1-(1-x)*(1-x);
const backOut=x=>{const c=1.70158;return 1+(c+1)*Math.pow(x-1,3)+c*Math.pow(x-1,2)},inBack=x=>{const c=1.70158;return (c+1)*x*x*x-c*x*x};
const hsh=x=>{const s=Math.sin(x*127.1+311.7)*43758.5453;return s-Math.floor(s)};
// ---- 로고 색 ----
const NAVY='#17183f',PAL=['#ff5ea8','#a9d13a','#ffdd18','#43c0f6','#c7b3e3','#f39a6a'],SAD=['#8fa6d6','#b3c2ea','#7c92c8'],GOLD=['#ffdd18','#ffb52e','#fff07a'];
// ---- 글자 (로고 스타일): 글자마다 뒤판(흰 테두리 + 남색 테두리 + 아래로 두께) / 앞판(색) 두 장을 만들어 두고, 단어는 뒤판을 먼저 다 깔아 테두리가 이어지게 그려요 ----
const FONT='"Mochiy Pop One","Jua",sans-serif',FONT_KO='"Black Han Sans","Jua",sans-serif',CC={},LAY={};let fontOK=false;   /* 한글은 굵은 Black Han Sans (판정 글자와 같은 글꼴) */
const isKo=ch=>ch>='ㄱ'&&ch<='힣';
try{Promise.all([document.fonts.load('64px "Mochiy Pop One"','ジャンプつくるあそぶかせぐカンタンドーンワクキラッギリピコポチャリズイェドキフィバいねすごさこうガナカ!?♪WOYEAHP'),document.fonts.load('64px "Black Han Sans"','쑥쭉뿅두근배')]).then(()=>{fontOK=true;for(const k in CC)delete CC[k];for(const k in LAY)delete LAY[k]}).catch(()=>{})}catch(e){}
setTimeout(()=>{fontOK=true},6000);
function charSpr(ch,sz,col){const felt=!!(CFG_NOW&&CFG_NOW.felt),k=ch+'|'+sz+'|'+col+(felt?'|f':'');let c=CC[k];if(c)return c;
  const f=`${sz}px ${isKo(ch)?FONT_KO:FONT}`,m=document.createElement('canvas'),x=m.getContext('2d');x.font=f;const w=Math.ceil(x.measureText(ch).width),pad=Math.ceil(sz*.3),ext=Math.round(sz*.09);
  m.width=w+pad*2;m.height=Math.ceil(sz*1.3)+pad*2+ext;const bk=document.createElement('canvas');bk.width=m.width;bk.height=m.height;const y=bk.getContext('2d'),ox=pad,oy=pad+Math.round(sz*1.0);
  for(const g of [x,y]){g.font=f;g.textBaseline='alphabetic';g.lineJoin='round';g.lineCap='round'}
  y.strokeStyle='#fff';y.lineWidth=sz*.44;y.strokeText(ch,ox,oy+ext);y.strokeText(ch,ox,oy);
  y.strokeStyle=NAVY;y.fillStyle=NAVY;y.lineWidth=sz*.24;y.strokeText(ch,ox,oy+ext);y.fillText(ch,ox,oy+ext);y.strokeText(ch,ox,oy);
  x.fillStyle=col;x.fillText(ch,ox,oy);x.globalCompositeOperation='source-atop';const gr=x.createLinearGradient(0,oy-sz*.9,0,oy-sz*.35);gr.addColorStop(0,'rgba(255,255,255,.38)');gr.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=gr;x.fillRect(0,0,m.width,m.height);
  if(felt){for(let i=0,N=m.width*m.height/9;i<N;i++){x.fillStyle=Math.random()<.5?'rgba(255,255,255,.16)':'rgba(70,20,60,.1)';x.fillRect(Math.random()*m.width,Math.random()*m.height,1.4,1.4)}   /* 펠트 보풀 */
    x.setLineDash([sz*.08,sz*.065]);x.lineCap='round';x.lineWidth=Math.max(2.4,sz*.075);x.strokeStyle='rgba(255,255,255,.9)';x.strokeText(ch,ox,oy);x.setLineDash([])}   /* 가장자리 바느질 땀 (글자 안쪽 반만 보여요) — 4배의 세계 펠트 패치 */
  c={back:bk,fill:m,w,cx:ox+w/2,cy:oy-sz*.4};if(fontOK)CC[k]=c;return c}
// 단어 배치: 글자 사이 살짝 좁게, 가운데가 올라간 아치
// 글자 간격: 곡 설정 track 이 있으면 글자 너비 + 크기×track 만큼 띄워요 (없으면 예전처럼 살짝 겹치게)
function layout(text,sz,pal,off){const tr=CFG_NOW&&CFG_NOW.track,k=text+'|'+sz+'|'+pal.join()+'|'+off+'|'+tr;if(LAY[k])return LAY[k];const chs=[...text],sp=[];let x=0,ci=0;
  for(const ch of chs){const col=ch===' '?null:pal[(ci++ +off)%pal.length],s=col?charSpr(ch,sz,col):null,w=s?s.w:sz*.4;sp.push({ch,s,x:x+w/2,w,j:hsh(sz+ch.charCodeAt(0)+x)*2-1});x+=tr!=null?w+sz*tr:w*.9}
  for(const c of sp)c.x-=x/2;const o={sp,w:x,sz};if(fontOK)LAY[k]=o;return o}
// 이번 프레임에 그린 곳 (왼쪽·오른쪽 두 상자, 화면 px). 다음 프레임엔 이 상자만 지워요 — 화면 전체를 지우지 않아도 그림은 그대로예요
let BX={},PREV=[];function ext(x0,y0,x1,y1){const k=(x0+x1)<W?'L':'R',b=BX[k];if(!b)BX[k]=[x0,y0,x1,y1];else{if(x0<b[0])b[0]=x0;if(y0<b[1])b[1]=y0;if(x1>b[2])b[2]=x1;if(y1>b[3])b[3]=y1}}
function blit(s,img,x,y,sc,rot){const R=Math.hypot(img.width,img.height)*sc;ext(x-R,y-R,x+R,y+R);const c=Math.cos(rot)*sc*PR,sn=Math.sin(rot)*sc*PR;ctx.setTransform(c,sn,-sn,c,x*PR,y*PR);ctx.drawImage(img,-s.cx,-s.cy)}
// ---- 장식 그림 (미리 한 번) ----
function mk(w,h,f){const c=document.createElement('canvas');c.width=w;c.height=h;f(c.getContext('2d'),w,h);return c}
function starPath(g,cx,cy,r,n,k){g.beginPath();for(let i=0;i<n*2;i++){const rr=i%2?r*k:r,a=-Math.PI/2+i*Math.PI/n;i?g.lineTo(cx+Math.cos(a)*rr,cy+Math.sin(a)*rr):g.moveTo(cx+Math.cos(a)*rr,cy+Math.sin(a)*rr)}g.closePath()}
const STAR=PAL.map(col=>mk(56,56,(g,w)=>{g.lineJoin='round';starPath(g,28,29,21,5,.48);g.strokeStyle='#fff';g.lineWidth=9;g.stroke();g.strokeStyle=NAVY;g.lineWidth=5;g.stroke();g.fillStyle=col;g.fill()}));
const COIN=mk(64,64,(g)=>{g.beginPath();g.arc(32,32,25,0,7);g.fillStyle='#fff';g.fill();g.beginPath();g.arc(32,32,22,0,7);g.fillStyle='#ffcc1f';g.fill();g.lineWidth=4;g.strokeStyle=NAVY;g.stroke();
  g.beginPath();g.arc(32,32,15,0,7);g.strokeStyle='#ffe87a';g.lineWidth=3;g.stroke();starPath(g,32,33,9,5,.45);g.fillStyle='#fff6c0';g.fill()});
const HEART=mk(56,52,(g)=>{const p=()=>{g.beginPath();g.moveTo(28,46);g.bezierCurveTo(4,30,6,8,20,8);g.bezierCurveTo(26,8,28,13,28,16);g.bezierCurveTo(28,13,30,8,36,8);g.bezierCurveTo(50,8,52,30,28,46);g.closePath()};
  g.lineJoin='round';p();g.strokeStyle='#fff';g.lineWidth=9;g.stroke();g.strokeStyle=NAVY;g.lineWidth=5;g.stroke();g.fillStyle='#ff5ea8';g.fill()});
const SPARK=mk(40,40,(g)=>{starPath(g,20,20,18,4,.22);g.fillStyle='#fff';g.fill()});
const SWEAT=mk(30,40,(g)=>{g.beginPath();g.moveTo(15,4);g.quadraticCurveTo(27,22,24,28);g.arc(15,27,9,0,Math.PI);g.quadraticCurveTo(3,22,15,4);g.closePath();g.lineWidth=4;g.strokeStyle=NAVY;g.stroke();g.fillStyle='#8fd8ff';g.fill()});
// ---- 파티클 (화면 좌표, 60fps 기준 속도 × dt) ----
const PT=[];
function add(p){if(PT.length<240)PT.push(Object.assign({vx:0,vy:0,g:0,rot:0,vr:0,life:1,dec:.02,sz:24},p))}
function burstFx(x,y,n,big){for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,v=(big?7:4.5)*(.5+Math.random());
  add({k:Math.random()<.45?'spark':'star',ci:i%6,x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-2,g:.16,rot:Math.random()*6,vr:(Math.random()-.5)*.3,dec:.018+Math.random()*.012,sz:(big?30:22)+Math.random()*14})}}
function leaves(x,y,n,I){if(!ok(I.leaf))return;for(let i=0;i<n;i++){const a=-Math.PI/2+(Math.random()-.5)*2.4,v=4+Math.random()*6;add({k:'leaf',x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,g:.12,rot:Math.random()*6,vr:(Math.random()-.5)*.25,dec:.008+Math.random()*.006,sz:H*.035+Math.random()*H*.03,fl:Math.random()*6})}}
function coins(x,y,n){for(let i=0;i<n;i++){const a=-Math.PI/2+(Math.random()-.5)*1.6,v=7+Math.random()*7;add({k:'coin',x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,g:.38,ph:Math.random()*6,dec:.012,sz:H*.034+Math.random()*H*.012,gy:H*.95})}}
function hearts(x,y,n){for(let i=0;i<n;i++)add({k:'heart',x:x+(Math.random()-.5)*120,y,vx:(Math.random()-.5)*1.5,vy:-2.5-Math.random()*2.5,g:-.02,dec:.012,sz:H*.03+Math.random()*H*.015,rot:(Math.random()-.5)*.6})}
function drawPT(I,step){for(let i=PT.length-1;i>=0;i--){const p=PT[i];
  if(step){p.x+=p.vx*step;p.y+=p.vy*step;p.vy+=p.g*step;p.vx*=Math.pow(.985,step);p.rot+=p.vr*step;p.life-=p.dec*step;
    if(p.k==='leaf'){p.vx+=Math.sin(p.fl+=.08*step)*.12*step;p.vy=Math.min(p.vy,2.2)}if(p.gy&&p.y>p.gy){p.y=p.gy;p.vy*=-.45;p.vx*=.7}}
  if(p.life<=0||p.y>H+60){PT.splice(i,1);continue}
  const a=Math.min(1,p.life*2.2),s=p.sz;ctx.globalAlpha=a;
  if(p.k==='leaf'){const im=I.leaf,w=s,h=s*NH(im)/NW(im);blitImg(im,p.x,p.y,w,h,p.rot,1)}
  else if(p.k==='coin'){p.ph+=.25*(step||0);blitImg(COIN,p.x,p.y,s,s,0,Math.max(.12,Math.abs(Math.cos(p.ph))))}
  else if(p.k==='star')blitImg(STAR[p.ci],p.x,p.y,s,s,p.rot,1);else if(p.k==='heart')blitImg(HEART,p.x,p.y,s,s*.93,p.rot,1);
  else if(p.k==='sweat')blitImg(SWEAT,p.x,p.y,s*.75,s,0,1);else blitImg(SPARK,p.x,p.y,s,s,p.rot,1)}ctx.globalAlpha=1}
function blitImg(im,x,y,w,h,rot,sx){const R=Math.hypot(w,h)*.5;ext(x-R,y-R,x+R,y+R);const c=Math.cos(rot)*PR,s=Math.sin(rot)*PR;ctx.setTransform(c*sx,s*sx,-s,c,x*PR,y*PR);ctx.drawImage(im,-w/2,-h/2,w,h)}
// ---- 자리: 레인에서 70px 이상. 왼쪽은 점수판·클리어 게이지를 피해 위(hi)·아래(lo) 두 칸, 오른쪽도 위·아래 ----
function slot(side,which){const gap=70,o=CFG_NOW&&CFG_NOW.slots&&CFG_NOW.slots[side+which];
  if(o){if(side==='L'){const y0=H*o[0],y1=H*o[1],x1=Math.min(W*.34,xOf(0,sAtY(y1))-gap);return {x0:18,x1,y0,y1}}const y0=H*o[0],y1=H*o[1],x0=Math.max(W*.66,xOf(4,sAtY(y1))+gap);return {x0,x1:W-18,y0,y1}}
  if(side==='L'){const y0=which==='hi'?H*.26:H*.6,y1=which==='hi'?H*.47:H*.93,x1=Math.min(W*.34,xOf(0,sAtY(y1))-gap);return {x0:18,x1,y0,y1}}
  const y0=which==='hi'?H*.1:H*.55,y1=which==='hi'?H*.47:H*.93,x0=Math.max(W*.66,xOf(4,sAtY(y1))+gap);return {x0,x1:W-18,y0,y1}}
// ---- 일정 ----
// 마디마다 [종류, 쪽, 칸, 글자/로고, 크기, 효과]
const SEQ=[
 [['logo','L','lo','jp'],['word','R','hi','ジャンプ!','M']],
 [['word','L','hi','つくる!','M']],[['word','R','hi','あそぶ!','M']],[['word','L','hi','かせぐ!','M','coins']],
 [['word','R','lo','ドーン!','L','burst']],[['word','L','lo','ワクワク','M']],[['word','R','hi','キラッ','M','spark']],[['word','L','hi','ギリギリ!','L','burst']],
 [['logo','R','lo','en'],['word','L','hi','ジャンプ!','M']],
 [['word','R','hi','ピコッ','M']],[['word','L','lo','ポチッ','M']],[['word','R','hi','チャリーン!','M','coins']],
 [['word','L','hi','ドキドキ','M','hearts']],[['word','R','lo','ズンズン','M']],[['word','L','lo','イェーイ!','M','spark']],[['word','R','hi','ギリギリ!','L','burst']]];
let ENV={},ENV_C=null;function barEnergy(s){if(typeof CHART!=='undefined'&&ENV_C!==CHART){ENV_C=CHART;ENV={}}if(ENV[s]!=null)return ENV[s];if(typeof CHART==='undefined'||!CHART.env)return .5;const t=beatTime(s*4),i=Math.max(0,Math.floor(t*20)),w=CHART.env.slice(i,i+Math.round((beatTime(s*4+4)-t)*20));
  return ENV[s]=w.length?w.reduce((a,b)=>a+b,0)/w.length:.5}
// 4倍の世界: 마디 하나 걸러 캐릭터 머리 위쪽에 한글 의성어 (로고·판정 반응 없음, 3D 캐릭터는 그대로) — 왼쪽은 점수판(클리어 게이지 아래 끝 316) 아래로 내렸어요 (2026-10-06 사용자: 「UI 에 가려」)
const SEQ_4X=[[],[['word','L','hi','쑥쑥!','M','spark']],[],[['word','R','hi','WOW!','M','burst']],
 [],[['word','L','hi','뿅!','M','spark']],[],[['word','R','hi','두근두근','M','hearts']],
 [],[['word','R','hi','YEAH!','M','burst']],[],[['word','L','hi','쭉쭉~','M','spark']],
 [],[['word','R','hi','POP!','M','spark']],[],[['word','R','hi','4배!','L','burst']]];   /* 한글 + 영어 (일본어 없이) */
// 곡별 설정 — slots: 칸 높이(화면 비율) 바꾸기, mute: 비워 둘 곡 시간(초), hide3d: 3D 캐릭터 숨기기, react: 판정 반응 글자
const CFG={maple:{seq:SEQ,small:true,hide3d:true,react:true},
  yonbai:{track:.12,seq:SEQ_4X,small:false,hide3d:false,react:false,noLo:true,felt:true,slots:{Lhi:[.305,.43],Rhi:[.1,.355]},mute:[[27.2,30.9]]}};
let CFG_NOW=null;
function events(b){const bar=Math.floor(b/4),out=[],C=CFG_NOW||CFG.maple,Q=C.seq,spb=60/CHART.bpm;
  for(let s=Math.max(0,bar-2);s<=bar;s++){const m=s%16,cyc=Math.floor(s/16),flip=cyc%2===1,e=barEnergy(s);
    const t0=beatTime(s*4),t1=beatTime(s*4+4);if(C.mute&&C.mute.some(w=>t1>w[0]&&t0<w[1]))continue;   /* 가사 말풍선 구간은 비워요 */
    for(const it of Q[m]){const [k,sd,sl,v,size,fx]=it,side=flip?(sd==='L'?'R':'L'):sd;
      if(k==='word'&&e<.3&&size!=='L')continue;   // 조용한 부분은 큰 글자만
      const len=k==='logo'?8:size==='L'?4:3.5;out.push({k,side,slot:sl,v,size:size||'M',fx,start:s*4,len,seed:s*7+m,pal:PAL,off:s%6})}
    // 신나는 마디: 반대쪽에 작은 의성어 하나 더 (3박째)
    const main=C.small&&Q[m].find(it=>it[0]==='word'&&it[4]!=='L');if(main&&e>.55&&m%8!==0){const ms=flip?(main[1]==='L'?'R':'L'):main[1],os=ms==='L'?'R':'L';
      out.push({k:'word',side:os,slot:'lo',v:SMALL[s%SMALL.length],size:'S',fx:'spark',start:s*4+2,len:1.8,seed:s*13+5,pal:PAL,off:(s+3)%6})}}
  return out}
const SMALL=['ポン!','ピョン','キラ','ルン♪','パッ!','トン!','ブン!','チュッ'];
// ---- 판정 연동 ----
const RX=[];let jump=0,shake=0,prevCombo=0,lastSmall=-9,lastSad=-9,liveOn=false,lastB=0,T=0,WORDS=[];
function rx(o){if(!liveOn||window.VJ_LOGO_FORCE)return;RX.push(Object.assign({start:lastB,seed:Math.floor(Math.random()*999),pal:PAL,off:Math.floor(Math.random()*6),size:'M',len:3},o))}
const pickSide=()=>Math.random()<.5?'L':'R';
const orig=window.monsterReact;window.monsterReact=k=>{orig&&orig(k);if(!liveOn||(CFG_NOW&&!CFG_NOW.react))return;const c=typeof combo!=='undefined'?combo:0,fv=typeof fever!=='undefined'&&fever;
  if(k==='p'){jump=1;for(const w of WORDS)if(Math.random()<.5)add({k:'spark',x:w.x+(Math.random()-.5)*w.w,y:w.y-w.sz*.4,vy:-1.5,dec:.04,sz:H*.025});
    if(T-lastSmall>1.4&&Math.random()<.22){lastSmall=T;rx({k:'word',side:pickSide(),slot:'hi',v:['キラッ!','ピカッ!','ナイス!'][Math.floor(Math.random()*3)],size:'S',len:2,fx:'spark'})}}
  else if(k==='gr')jump=Math.max(jump,.6);
  else if(k==='miss'){shake=1;if(prevCombo>=10&&T-lastSad>3){lastSad=T;rx({k:'word',side:pickSide(),slot:'hi',v:'ガーン!',size:'M',pal:SAD,off:0,len:3,fx:'sweat'})}}
  else if(k==='cheer'){if(fv&&c%50!==0){rx({k:'word',side:'R',slot:'hi',v:'フィーバー!!',size:'L',len:4,fx:'burst'});rx({k:'logo',side:'L',slot:'lo',v:'jp',len:6});rx({k:'logo',side:'R',slot:'lo',v:'en',len:6})}}
  if(k!=='miss'&&c>0&&c%25===0){const t=c%100===0?['さいこう!','L','burst']:c%50===0?['すごーい!','L','coins']:['いいね!','M','hearts'];rx({k:'word',side:pickSide(),slot:'hi',v:t[0],size:t[1],len:t[1]==='L'?4:3,fx:t[2]});
    if(c%100===0){rx({k:'logo',side:'L',slot:'lo',v:'jp',len:6});rx({k:'logo',side:'R',slot:'lo',v:'en',len:6})}}
  prevCombo=k==='miss'?0:c};
// ---- 그리기 ----
const SHINE={};
function drawLogo(o,el,dur,hit,I){const im=I[o.v];if(!ok(im))return null;const sl=slot(o.side,'lo'),iw=NW(im),ih=NH(im),w=Math.min((sl.x1-sl.x0)*.96,W*.3),h=w*ih/iw,cx=(sl.x0+sl.x1)/2,by=sl.y1-6,dir=o.side==='L'?-1:1;
  const k=clamp(el/.28,0,1),q=el-.28,sq=q>0&&q<.3?Math.sin(q/.3*Math.PI)*.13*(1-q/.3):0;let s=(1.35-.35*eOut(k))*(1+.025*hit),y=by-(1-eOut(k))*H*.22,rot=.04*dir+Math.sin(T*2.2)*.015;
  if(el>dur-.35){const e=(el-(dur-.35))/.35;s*=1-inBack(e);rot+=e*.7*dir}if(s<=.01)return null;
  if(q>0&&!o.landed){o.landed=1;const mark=o.side+o.start+o.v;if(!SEEN[mark]){SEEN[mark]=1;leaves(cx+w*.42*(o.side==='L'?1:-1),by-h*.85,4,I);burstFx(cx,by-h*.95,10,true);for(let i=0;i<10;i++){const a=Math.PI+i/9*Math.PI;add({k:'star',ci:i%6,x:cx+Math.cos(a)*w*.45,y:by,vx:Math.cos(a)*5,vy:-Math.random()*2,g:.05,dec:.03,sz:H*.025})}}}
  // 반짝 지나가기 (착지 뒤 잠깐)
  let src=im;const sh=q-.1;if(sh>0&&sh<.6){const key=o.v+'|'+Math.round(w);let c=SHINE[key];if(!c){c=SHINE[key]=document.createElement('canvas');c.width=Math.ceil(w);c.height=Math.ceil(h)}
    const g=c.getContext('2d');g.globalCompositeOperation='source-over';g.clearRect(0,0,c.width,c.height);g.drawImage(im,0,0,c.width,c.height);g.globalCompositeOperation='source-atop';
    const bx=(sh/.6)*(c.width+c.height)-c.height,gr=g.createLinearGradient(bx,0,bx+c.height*.35,c.height*.5);gr.addColorStop(0,'rgba(255,255,255,0)');gr.addColorStop(.5,'rgba(255,255,255,.5)');gr.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=gr;g.fillRect(0,0,c.width,c.height);src=c}
  {const R=Math.hypot(w*.5,h)*s*(1+Math.abs(sq));ext(cx-R,by-R,cx+R,by+R)}
  const cs=Math.cos(rot)*PR*s,sn=Math.sin(rot)*PR*s;ctx.setTransform(cs*(1+sq),sn*(1+sq),-sn*(1-sq),cs*(1-sq),cx*PR,by*PR);ctx.drawImage(src,-w/2,-h,w,h);
  return {x:cx,y:by-h/2,w,h}}
const SEEN={};
function drawWord(o,el,dur,hit,I,occ){const sz=SZ[o.size]||SZ.M,L=layout(o.v,sz,o.pal,o.off);let which=o.slot;
  if(occ[o.side+which]){if(CFG_NOW&&CFG_NOW.noLo)return null;which=which==='hi'?'lo':'hi'}if(occ[o.side+which]&&!o.rx)return null;occ[o.side+which]=1;
  const sl=slot(o.side,which),sw=sl.x1-sl.x0,sc=Math.min(1,sw*.92/L.w),cx=lerp(sl.x0+L.w*sc/2+10,sl.x1-L.w*sc/2-10,hsh(o.seed)),cy=lerp(sl.y0+sz*.9,sl.y1-sz*.7,hsh(o.seed*3.1));
  const n=L.sp.length,A=sz*.18,hw=L.w/2,tOut=dur-.34,big=o.size==='L';
  // 큰 글자: 뒤에 별 모양 폭발 + 집중선
  if(big){const k=backOut(clamp(el/.3,0,1))*(el>tOut?1-inBack(clamp((el-tOut)/.3,0,1)):1),r=L.w*sc*.62*k;if(r>2){const col=['#ffdd18','#ff5ea8','#43c0f6'][o.seed%3];ext(cx-r*2.1,cy-r*2.1,cx+r*2.1,cy+r*2.1);
    ctx.setTransform(PR,0,0,PR,0,0);if(el<.5){ctx.globalAlpha=1-el/.5;ctx.strokeStyle='#fff';ctx.lineWidth=3;for(let i=0;i<20;i++){const a=i/20*Math.PI*2+o.seed,r0=r*1.05,r1=r*(1.5+hsh(i+o.seed)*.5);ctx.beginPath();ctx.moveTo(cx+Math.cos(a)*r0,cy+Math.sin(a)*r0*.7);ctx.lineTo(cx+Math.cos(a)*r1,cy+Math.sin(a)*r1*.7);ctx.stroke()}ctx.globalAlpha=1}
    ctx.save();ctx.translate(cx,cy);ctx.rotate(T*.6+o.seed);ctx.scale(1,.72);ctx.lineJoin='round';starPath(ctx,0,0,r,12,.74);ctx.strokeStyle='#fff';ctx.lineWidth=r*.12;ctx.stroke();ctx.strokeStyle=NAVY;ctx.lineWidth=r*.06;ctx.stroke();ctx.fillStyle=col;ctx.globalAlpha=.92;ctx.fill();ctx.globalAlpha=1;ctx.restore()}}
  const P=[];
  for(let i=0;i<n;i++){const c=L.sp[i];if(!c.s)continue;const u=hw?c.x/hw:0,ti=el-i*.045;if(ti<=0)continue;let s=backOut(clamp(ti/.24,0,1))*sc*(1+.06*hit*(big?1.5:1));
    const to=el-tOut-i*.03;if(to>0)s*=1-inBack(clamp(to/.24,0,1));if(s<=.01)continue;
    const hop=jump*sz*.22*(.55+.45*Math.sin(i*1.7+o.seed)),wav=Math.sin(T*7+i*.9)*sz*.035,sk=shake*Math.sin(T*55+i*2);
    P.push({s:c.s,x:cx+c.x*sc+sk*sz*.06,y:cy+(-A*(1-u*u))*sc+wav-hop,sc:s,rot:Math.atan(2*A*u/(hw||1))*.9+c.j*.07+sk*.18})}
  for(const p of P)blit(p.s,p.s.back,p.x,p.y,p.sc,p.rot);for(const p of P)blit(p.s,p.s.fill,p.x,p.y,p.sc,p.rot);
  // 처음 나올 때 효과 (한 번만)
  const mark=o.side+o.start+o.v;if(el>.05&&!SEEN[mark]){SEEN[mark]=1;const ww=L.w*sc;
    if(o.fx==='coins')coins(cx,cy,12);else if(o.fx==='hearts')hearts(cx,cy-sz*.3,6);else if(o.fx==='sweat'){for(let i=0;i<3;i++)add({k:'sweat',x:cx+ww*.5+i*8,y:cy-sz*.6,vx:1+i,vy:-2,g:.2,dec:.03,sz:H*.03})}
    burstFx(cx,cy,o.fx==='burst'?14:o.fx==='spark'?9:5,o.fx==='burst');if(big)leaves(cx,cy-sz*.6,3,I)}
  return {x:cx,y:cy,w:L.w*sc,sz}}
// ---- 매 프레임 ----
let lastT=performance.now(),dirty=true,lastBi=-1;window.VJ_LOGO_FORCE=null;   // 확인용: VJ_LOGO_FORCE=[{k:'word',side:'L',slot:'hi',v:'つくる!',size:'M',start:박자,len:99},{k:'logo',side:'R',v:'en',start,len}]
function tick(){requestAnimationFrame(tick);
  const sid=typeof SONGS!=='undefined'&&SONGS[cur]?SONGS[cur].id:'',I=imgs(sid),songOn=!!I&&window.VJ_MODE!=='off';CFG_NOW=CFG[sid]||CFG.maple;window.VJ_LOGO_ON=songOn&&CFG_NOW.hide3d;   /* VJ_LOGO_ON: 3D 캐릭터를 숨길지 (js/vj.js) */
  const isPlay=typeof playing!=='undefined'&&playing,on=songOn&&isPlay&&typeof G!=='undefined'&&G.land;liveOn=on;
  cv.classList.toggle('on',on);if(!on){if(dirty&&W){ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,cv.width,cv.height)}RX.length=0;PT.length=0;prevCombo=0;dirty=false;for(const k in SEEN)delete SEEN[k];return}size();
  const pn=performance.now(),dt=Math.min(.05,(pn-lastT)/1000);lastT=pn;const isPaused=typeof paused!=='undefined'&&paused;let b=lastB;if(!isPaused){b=beatAt(now());T+=dt}
  if(b<lastB-1){RX.length=0;for(const k in SEEN)delete SEEN[k]}lastB=b;
  if(!isPaused){jump*=Math.exp(-dt*7);shake*=Math.exp(-dt*5)}
  const hit=Math.exp(-fr(b)*6),spb=60/CHART.bpm;
  for(let i=RX.length-1;i>=0;i--)if(b>RX[i].start+RX[i].len)RX.splice(i,1);
  // 박자마다 단풍잎 한 장 (신나는 부분)
  const bi=Math.floor(b);if(!isPaused&&bi!==lastBi){lastBi=bi;if(b>0&&barEnergy(Math.floor(b/4))>.42&&I.leaf&&Math.random()<.6){const sd=Math.random()<.5?'L':'R',sl=slot(sd,'hi');leaves(lerp(sl.x0,sl.x1,Math.random()),-20,1,I)}}
  const all=(window.VJ_LOGO_FORCE?VJ_LOGO_FORCE.map(f=>Object.assign({seed:7,pal:PAL,off:0,size:'M',slot:'hi',len:99,rx:1},f)):events(b).concat(RX.map(r=>Object.assign(r,{rx:1})))).filter(o=>b>=o.start&&b<=o.start+o.len);
  if(!all.length&&!PT.length&&!dirty)return;dirty=all.length||PT.length;
  ctx.setTransform(1,0,0,1,0,0);for(const b of PREV){const x0=Math.max(0,Math.floor((b[0]-6)*PR)),y0=Math.max(0,Math.floor((b[1]-6)*PR)),x1=Math.min(cv.width,Math.ceil((b[2]+6)*PR)),y1=Math.min(cv.height,Math.ceil((b[3]+6)*PR));if(x1>x0&&y1>y0)ctx.clearRect(x0,y0,x1-x0,y1-y0)}BX={};
  // 로고 먼저 (같은 쪽에 판정 로고가 있으면 일정 로고는 쉬어요), 그다음 글자
  const occ={},logos=all.filter(o=>o.k==='logo').sort((a,b2)=>(b2.rx||0)-(a.rx||0));
  for(const o of logos){if(occ[o.side+'lo'])continue;const r=drawLogo(o,(b-o.start)*spb,o.len*spb,hit,I);if(r)occ[o.side+'lo']=1}
  const hold4=CFG_NOW&&CFG_NOW.felt&&window.FX4_HOLD>performance.now();   /* 4배의 세계: 성장 배지(js/vj_4x.js)가 떠 있는 동안 의성어는 쉬어요 */
  WORDS=[];if(!hold4)for(const o of all.filter(o=>o.k==='word').sort((a,b2)=>(b2.rx||0)-(a.rx||0))){const r=drawWord(o,(b-o.start)*spb,o.len*spb,hit,I,occ);if(r)WORDS.push(r)}
  drawPT(I,isPaused?0:dt*60);ctx.setTransform(1,0,0,1,0,0);PREV=Object.values(BX)}
tick();
// 확인용
window.VJ_LOGO_TEST=k=>{if(k==='miss'){prevCombo=20;window.monsterReact('miss')}else window.monsterReact(k);return RX.length};
})();
