// ===== 포인트 컷 (레인 좌우, 화면 아래쪽 절반) =====
// 배경 영상이 메인이에요. 대부분은 영상만 나오고, 몇 마디에 한 번 좌우에서 만화 컷이 2마디 동안 떴다가 빠져요.
// 16마디 한 바퀴: 4·8·12마디째에 한쪽, 15마디째에 양쪽(하이라이트). 피버 중엔 4마디마다 양쪽.
// 컷 크기 s/m/l, 모양: 기울인 네모 · 사선(평행사변형) · 삼각형 · 슬래시 · 레인 따라 비스듬한 칸(lane) · 두 칸 분할(split).
// 등장(intro): slide 옆에서 미끄러져 들어옴 / draw 테두리가 그려지고 → 그림이 쓸려 나오고 → 캐릭터 등장 / pop 칸이 톡 커지며 등장.
// 칸 내용: 그림(face=[x,y,머리 높이] 를 at 자리에, 그 세로줄 높이의 fill 만큼) / 배경 뺀 캐릭터(pop: 칸 밑에 서서 위 테두리 밖으로 튀어나옴) / 튀어나오는 캐릭터(brk).
// 레인에서 80px 이상 떨어지고, 화면 위쪽 절반엔 안 나와요(왼쪽은 클리어 게이지 아래부터).
// 그림: window.ART_SONGS[곡] = {cliff, forest, hug, run, rider, smile, sleep, side, ballgirl, slimeq} (art/cut_*, art/pictra)
// 설정 「비주얼 아트」: 끄기 / 포인트 컷 (localStorage mds-art). 켜져 있으면 그 곡에선 3D 캐릭터를 숨겨요.
(()=>{
const $=id=>document.getElementById(id),stage=$('stage'),ART=window.ART_SONGS||{};
const lsg=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:v}catch(e){return d}},lss=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
let mode='on';   /* 2026-10-06 사용자: 설정의 「비주얼 아트」 항목 제거 → 모두 기본(포인트 컷)으로 — 예전 저장값(mds-art)은 안 봐요 */
const cv=document.createElement('canvas');cv.className='artpanels';$('bg').after(cv);const ctx=cv.getContext('2d');
let PR=1,W=0,H=0;
let szDirty=true;function size(){if(!szDirty)return;szDirty=false;const w=stage.clientWidth,h=stage.clientHeight,pr=Math.min(1.5,(devicePixelRatio||1)*(window.STAGE_K||1));if(w===W&&h===H&&pr===PR)return;W=w;H=h;PR=pr;cv.width=Math.round(W*PR);cv.height=Math.round(H*PR)}   // 무대 좌표(1920×1080) · 화소는 실제 화면 배율
addEventListener('resize',()=>szDirty=true);if(window.ResizeObserver)new ResizeObserver(()=>szDirty=true).observe(stage);   // 크기는 바뀔 때만 다시 재요
// ---- 그림 불러오기 (곡마다 한 번) ----
const LOADED={};
// 곡을 고르는 순간 받아서 미리 풀어 둬요(ImageBitmap) — 컷이 처음 뜰 때 그림을 푸느라 툭 끊기지 않게
const OUTLINE=['side','slimeq'];   // 칸 밖으로 튀어나오는 캐릭터: 흰 외곽선 그림을 한 번만 만들어 둬요
function imgs(id){const a=ART[id];if(!a)return null;if(LOADED[id])return LOADED[id];const o={};
  for(const k in a){if(!a[k])continue;const im=new Image();im.crossOrigin='anonymous';
    im.onload=()=>{if(OUTLINE.includes(k))o[k+'_ol']=silhouette(im);if(window.createImageBitmap)createImageBitmap(im).then(bm=>{o[k]=bm}).catch(()=>{})};im.src=a[k];o[k]=im}
  return LOADED[id]=o}
const NW=im=>im.naturalWidth||im.width,NH=im=>im.naturalHeight||im.height;
const ok=im=>!!im&&(im.complete===undefined?im.width>0:im.complete&&im.naturalWidth>0);
// 흰 외곽선(실루엣을 사방으로 r 만큼 부풀린 흰 그림). 그릴 때는 그림보다 r 만큼 크게 깔아요
function silhouette(im){const w=im.naturalWidth,h=im.naturalHeight,r=Math.ceil(Math.max(w,h)/75),c=document.createElement('canvas');c.width=w+r*2;c.height=h+r*2;const x=c.getContext('2d');
  for(let i=0;i<16;i++){const a=i/16*Math.PI*2;x.drawImage(im,r+Math.cos(a)*r,r+Math.sin(a)*r)}x.globalCompositeOperation='source-in';x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);c.pad=r;return c}
// ---- 컷 모양 (칸 안 0~1 좌표: u 바깥→레인 쪽, v 위→아래. 오른쪽 컷은 좌우가 뒤집혀요. 첫 두 점이 윗변) ----
const SHAPES={rect:[[0,0],[1,0],[1,1],[0,1]],tilt:[[.03,.07],[1,0],[.97,.93],[0,1]],slant:[[.28,0],[1,0],[.72,1],[0,1]],tri:[[0,0],[1,1],[0,1]],slash:[[0,.22],[1,0],[1,.78],[0,1]]};
// 두 칸 분할: 비스듬한 흰 틈(바깥쪽 .62 → 레인 쪽 .46)으로 위·아래 칸을 나눠요
const SPLIT=g=>[[[0,0],[1,0],[1,.46-g],[0,.62-g]],[[0,.62+g],[1,.46+g],[1,1],[0,1]]];
// ---- 얼굴 자리 (그림 높이 기준 [x, y, 머리 높이]) ----
const F={
 girlC:{img:'cliff',face:[.572,.33,.15]},      // 절벽 소녀 얼굴 (위쪽 하늘 덧댄 그림)
 mushC:{img:'cliff',face:[.69,.8,.23]},        // 절벽 주황 버섯
 girlH:{img:'hug',face:[.5,.245,.17]},         // 슬라임 안은 소녀 얼굴
 pairH:{img:'hug',face:[.5,.33,.32]},          // 소녀 얼굴 + 안긴 슬라임
 slimeH:{img:'hug',face:[.51,.44,.15]},        // 안긴 슬라임 얼굴
 slimeF:{img:'forest',face:[.46,.74,.3]},      // 숲 슬라임
 smileF:{img:'smile',face:[.5,.31,.42]},       // 활짝 웃는 얼굴 (하늘 배경 그림)
 smileB:{img:'smile',face:[.5,.52,.95]},       // 웃는 얼굴 + 내미는 공
 sleep:{img:'sleep',face:[.4,.45,.6],flip:'L'},// 눈 감은 옆얼굴 (왼쪽을 봐요 → 왼쪽 컷에선 뒤집어 레인 쪽을 보게)
 ballGB:{img:'ballgirl',face:[.5,.4,.8]},      // 공 안은 소녀 상반신
 ballG:{img:'ballgirl',face:[.5,.14,.28]},     // 공 안은 소녀 얼굴
};
// 배경 뺀 캐릭터 (칸 밑에 서서 윗변 밖으로 튀어나와요). h: 칸 높이 배수, cx: 그림 안 가로 기준점, dy: 칸 밑으로 내려 앉는 정도
const POP={
 side:{pop:'side',h:1.2,ax:.52,cx:.56,dy:.05,flip:'R',bg:{k:'sky'}},
 slimeq:{pop:'slimeq',h:1.2,w:.92,top:-.22,ax:.5,cx:.47,bounce:1,jump:1,bg:{k:'dots',c:['#c9f7b8','#ffffff']}},
};
const sh=(o,p)=>Object.assign({},o,p);
// ---- 컷 종류 (같은 그림은 되도록 한 번만) ----
const L_POOL=[
 {size:'l',shape:'tilt',lane:1,intro:'slide',p:[sh(F.girlC,{fill:.4,at:[.45,.45]})],sfx:'와아!'},
 {size:'m',shape:'slash',intro:'pop',p:[sh(F.ballG,{fill:.6,at:[.5,.5],bg:{k:'sky'}})],sfx:'방긋!'},
 {size:'s',shape:'tri',intro:'slide',p:[sh(F.mushC,{fill:.55,at:[.3,.7]})],sfx:'뽀용!'},
 {size:'m',shape:'tilt',lane:1,intro:'slide',brk:'run',bg:['#ff9bd0','#ffe1f1'],sfx:'으아앗!'},
 {size:'l',split:1,lane:1,intro:'draw',p:[sh(F.smileF,{fill:.78,at:[.5,.5]}),sh(F.slimeH,{fill:.72,at:[.5,.55]})],sfx:'헤헤'},
 {size:'m',shape:'rect',lane:1,intro:'draw',p:[sh(F.sleep,{fill:.5,at:[.5,.47],bg:{k:'dots',c:['#ffd9ec','#ffffff']}})],sfx:'후훗♪'},
 {size:'s',shape:'slant',intro:'slide',p:[sh(F.slimeF,{fill:.6,at:[.5,.55]})],sfx:'말캉!'},
];
const R_POOL=[
 {size:'m',shape:'slant',intro:'slide',brk:'rider',bg:['#3ddcff','#d4f8ff'],sfx:'크앙!'},
 {size:'l',shape:'rect',lane:1,intro:'draw',p:[POP.side],sfx:'두근♡'},
 {size:'m',shape:'tilt',lane:1,intro:'pop',p:[POP.slimeq],sfx:'말랑!'},
 {size:'s',shape:'slash',intro:'pop',p:[sh(F.girlH,{fill:.62,at:[.5,.5]})],sfx:'헤헤'},
 {size:'m',shape:'tri',intro:'slide',p:[sh(F.pairH,{fill:.68,at:[.3,.64]})],sfx:'꼬옥♡'},
 {size:'l',shape:'rect',lane:1,intro:'draw',p:[sh(F.ballGB,{fit:1,fill:.8,at:[.5,.5],bg:{k:'dots',c:['#fff0a0','#ffffff']}})],sfx:'받아!'},
 {size:'m',shape:'slant',lane:1,intro:'pop',p:[sh(F.smileB,{fill:.95,at:[.5,.5]})],sfx:'에헤헤!'},
];
// ---- 일정: 이번 마디에 어떤 컷이 떠 있나 ----
// 반환: [{side,r,start(박자),len(박자),vy}]
function events(b,fv){const bar=Math.floor(b/4),out=[];
  const add=(bs,side,k)=>{const pool=side==='L'?L_POOL:R_POOL;out.push({side,r:pool[((k%pool.length)+pool.length)%pool.length],start:bs*4,len:8,vy:((bs*2654435761)>>>0)%100/100})};
  if(fv){const s=Math.floor(bar/4)*4;if(bar-s<2){const k=Math.floor(bar/4);add(s,'L',k+1);add(s,'R',k+2)}return out}
  for(const s of [bar,bar-1]){if(s<0)continue;const m=s%16,cyc=Math.floor(s/16);
    if(m===3)add(s,'L',cyc*3);else if(m===7)add(s,'R',cyc*3);else if(m===11)add(s,cyc%2?'L':'R',cyc*3+1);
    else if(m===14){add(s,'L',cyc*3+2);add(s,'R',cyc*3+2)}}
  return out}
// ---- 자리 (레인에서 80px, 화면 아래쪽 절반) ----
// 반환: 바깥 x(xo), 레인 쪽 x 위/아래(xi0/xi1), y0/y1. lane 이 아니면 레인 쪽은 아래(레인이 제일 넓은 곳) 기준으로 똑바로 세워요
const SZ={s:[.25,.17],m:[.33,.24],l:[.39,.27]};
function box(side,sz,vy,lane){const gap=80,[fh,fw]=SZ[sz],top=side==='L'?H*.545:H*.52,bot=side==='L'?H*.915:H*.95,h=Math.min(fh*H,bot-top),y0=top+(bot-top-h)*(sz==='s'?.25+vy*.6:sz==='m'?.6:0),y1=y0+h;
  if(side==='L'){const lx=y=>xOf(0,sAtY(y))-gap,xi1=Math.min(W*.29,lx(y1)),xo=Math.max(18,xi1-fw*W),xi0=lane?Math.min(W*.35,lx(y0)):xi1;return {side,xo,xi0,xi1,y0,y1}}
  const rx=y=>xOf(4,sAtY(y))+gap,xi1=Math.max(W*.71,rx(y1)),xo=Math.min(W-18,xi1+fw*W),xi0=lane?Math.max(W*.65,rx(y0)):xi1;return {side,xo,xi0,xi1,y0,y1}}
// 칸 좌표(u,v) → 화면 좌표. u=0 바깥, u=1 레인 쪽 (그 높이의 레인 쪽 x)
const at=(bx,off,u,v)=>{const xi=bx.xi0+(bx.xi1-bx.xi0)*v;return [bx.xo+(xi-bx.xo)*u+off,bx.y0+(bx.y1-bx.y0)*v]};
// ---- 그리기 도우미 ----
const fr=x=>x-Math.floor(x),clamp=(x,a,b)=>x<a?a:x>b?b:x,lerp=(a,b,t)=>a+(b-a)*t;
const backOut=x=>{const c=1.70158;return 1+(c+1)*Math.pow(x-1,3)+c*Math.pow(x-1,2)},inBack=x=>{const c=1.70158;return (c+1)*x*x*x-c*x*x};
const path=P=>{ctx.beginPath();P.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath()};
const rectOf=P=>{const xs=P.map(p=>p[0]),ys=P.map(p=>p[1]),x0=Math.min(...xs),y0=Math.min(...ys),x1=Math.max(...xs),y1=Math.max(...ys);return {x0,y0,w:x1-x0,h:y1-y0}};
const perim=P=>P.reduce((s,p,i)=>{const q=P[(i+1)%P.length];return s+Math.hypot(q[0]-p[0],q[1]-p[1])},0);
function along(P,d){for(let i=0;i<P.length;i++){const p=P[i],q=P[(i+1)%P.length],l=Math.hypot(q[0]-p[0],q[1]-p[1]);if(d<=l){const k=d/l;return [p[0]+(q[0]-p[0])*k,p[1]+(q[1]-p[1])*k]}d-=l}return P[0]}
// 높이 y 에서 칸이 차지하는 가로 범위 / 가로 x 에서 세로 범위 (사다리꼴·평행사변형·삼각형은 자리마다 달라요)
function rowSpan(P,y){let a=Infinity,b=-Infinity;for(let i=0;i<P.length;i++){const p=P[i],q=P[(i+1)%P.length];if((p[1]-y)*(q[1]-y)>0||p[1]===q[1])continue;const x=p[0]+(q[0]-p[0])*(y-p[1])/(q[1]-p[1]);a=Math.min(a,x);b=Math.max(b,x)}return a<b?[a,b]:null}
function colSpan(P,x){let a=Infinity,b=-Infinity;for(let i=0;i<P.length;i++){const p=P[i],q=P[(i+1)%P.length];if((p[0]-x)*(q[0]-x)>0||p[0]===q[0])continue;const y=p[1]+(q[1]-p[1])*(x-p[0])/(q[0]-p[0]);a=Math.min(a,y);b=Math.max(b,y)}return a<b?[a,b]:null}
const flipOf=(p,side)=>p.flip===side;
function drawIm(im,x,y,w,h,flip){if(!flip){ctx.drawImage(im,x,y,w,h);return}ctx.save();ctx.translate(x+w,y);ctx.scale(-1,1);ctx.drawImage(im,0,0,w,h);ctx.restore()}
// 그림: 얼굴이 보이는 칸 안 at 자리에 오고, 그 자리 세로줄 높이의 fill 만큼 머리가 차게 (빈 곳이 안 생기게 가장자리는 붙여요)
function place(im,bb,P,p,side,zk){if(p.fit)return placeFit(im,bb,P,p,side,zk);const iw=NW(im),ih=NH(im),ax=side==='L'?p.at[0]:1-p.at[0],fl=flipOf(p,side),fx=fl?1-p.face[0]:p.face[0];
  let ty=bb.y0+bb.h*p.at[1],sp=rowSpan(P,ty)||[bb.x0,bb.x0+bb.w],tx=sp[0]+(sp[1]-sp[0])*ax;
  const cs=colSpan(P,tx)||[bb.y0,bb.y0+bb.h],ch=cs[1]-cs[0];ty=cs[0]+ch*p.at[1];sp=rowSpan(P,ty)||sp;tx=sp[0]+(sp[1]-sp[0])*ax;
  const c=Math.max(bb.w/iw,bb.h/ih),s=Math.max(c,p.fill*ch/(p.face[2]*ih))*zk,dw=iw*s,dh=ih*s;
  let x=tx-dw*fx,y=ty-dh*p.face[1];x=clamp(x,bb.x0+bb.w-dw,bb.x0);y=clamp(y,bb.y0+bb.h-dh,bb.y0);drawIm(im,x,y,dw,dh,fl)}
function placeFit(im,bb,P,p,side,zk){const iw=NW(im),ih=NH(im),ax=side==='L'?p.at[0]:1-p.at[0],fl=flipOf(p,side),fx=fl?1-p.face[0]:p.face[0],s=p.fill*bb.h/(p.face[2]*ih)*zk,dw=iw*s,dh=ih*s;
  const ty=bb.y0+bb.h*p.at[1],sp=rowSpan(P,ty)||[bb.x0,bb.x0+bb.w],tx=sp[0]+(sp[1]-sp[0])*ax;drawIm(im,tx-dw*fx,Math.min(ty-dh*p.face[1],bb.y0),dw,dh,fl)}   // 그림 윗변(원본이 잘린 곳)은 칸 위 테두리에 맞춰요
// 배경 뺀 캐릭터: 칸 밑에 서 있고(밑은 칸에 가려요) 위는 윗변 밖으로. rise: 0→1 밑에서 솟아오르기
function popRect(im,bb,P,p,side,zk,rise,bob){const iw=NW(im),ih=NH(im),s=Math.min(p.h*bb.h/ih,(p.w||9)*bb.w/iw)*zk,h=ih*s,w=iw*s,ax=side==='L'?p.ax:1-p.ax,fl=flipOf(p,side),cx=fl?1-p.cx:p.cx;
  const y=p.top!=null?bb.y0+bb.h*p.top:bb.y0+bb.h*(1+p.dy)-h,sp=rowSpan(P,bb.y0+bb.h*.55)||[bb.x0,bb.x0+bb.w],tx=sp[0]+(sp[1]-sp[0])*ax;return {x:tx-w*cx,y:y+(1-rise)*h*.75-bob*bh0(bb),w,h,fl}}
const bh0=bb=>bb.h;
// 뛰어오른 캐릭터 밑: 바닥 그림자(높이 뛸수록 작고 옅게) + 세로 효과선
function jumpFx(bb,q,bob,rise){const cx=q.x+q.w*.5,gy=bb.y0+bb.h*.9,k=clamp(1-bob*3,.45,1)*rise;ctx.save();ctx.fillStyle=`rgba(40,90,30,${(.28*k).toFixed(3)})`;ctx.beginPath();ctx.ellipse(cx,gy,q.w*.36*k,q.w*.07*k,0,0,7);ctx.fill();
  ctx.strokeStyle='rgba(255,255,255,.85)';ctx.lineCap='round';ctx.lineWidth=3;for(let i=0;i<5;i++){const x=cx+(i-2)*q.w*.16,y0=q.y+q.h*.95+8+(i%2)*10,y1=Math.min(gy-10,y0+bb.h*(.14+.06*(i%3)));if(y1>y0){ctx.beginPath();ctx.moveTo(x,y0);ctx.lineTo(x,y1);ctx.stroke()}}ctx.restore()}
// 칸 배경: 하늘 / 망점 / 집중 햇살
const PAT={};
function dotPat(c){if(PAT[c])return PAT[c];const s=16,o=document.createElement('canvas');o.width=o.height=s;const x=o.getContext('2d');x.fillStyle=c;x.globalAlpha=.6;
  for(const [a,b,r] of [[4,4,2.6],[12,12,2.6]]){x.beginPath();x.arc(a,b,r,0,7);x.fill()}return PAT[c]=ctx.createPattern(o,'repeat')}
function cellBg(bb,g,t){if(g.k==='sky'){const gr=ctx.createLinearGradient(0,bb.y0,0,bb.y0+bb.h);gr.addColorStop(0,'#6fc3ff');gr.addColorStop(1,'#eaf8ff');ctx.fillStyle=gr;ctx.fillRect(bb.x0,bb.y0,bb.w,bb.h);
    ctx.fillStyle='rgba(255,255,255,.32)';for(let i=0;i<3;i++){const x=bb.x0+fr(t*.05+i*.37)*bb.w*1.6-bb.w*.3;ctx.beginPath();ctx.moveTo(x,bb.y0);ctx.lineTo(x+bb.w*.12,bb.y0);ctx.lineTo(x+bb.w*.12-bb.h*.5,bb.y0+bb.h);ctx.lineTo(x-bb.h*.5,bb.y0+bb.h);ctx.fill()}return}
  if(g.k==='dots'){ctx.fillStyle=g.c[0];ctx.fillRect(bb.x0,bb.y0,bb.w,bb.h);ctx.fillStyle=dotPat(g.c[1]);ctx.fillRect(bb.x0,bb.y0,bb.w,bb.h);return}
  burst(bb,g.c[0],g.c[1],t)}
function burst(bb,c1,c2,t){ctx.fillStyle=c1;ctx.fillRect(bb.x0,bb.y0,bb.w,bb.h);ctx.fillStyle=c2;const cx=bb.x0+bb.w/2,cy=bb.y0+bb.h*.6,R=Math.hypot(bb.w,bb.h);
  for(let k=0;k<22;k++){const a=k/22*Math.PI*2+t*.4;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(a-.07)*R,cy+Math.sin(a-.07)*R);ctx.lineTo(cx+Math.cos(a+.07)*R,cy+Math.sin(a+.07)*R);ctx.fill()}}
// 만화 집중선: 칸 가장자리에서 가운데로 모이는 가는 쐐기 (가운데 얼굴 자리는 비워요)
const hsh=x=>{const s=Math.sin(x*127.1+311.7)*43758.5453;return s-Math.floor(s)};
function focusLines(bb,a,seed,col){ctx.save();ctx.globalAlpha*=a;ctx.fillStyle=col;const cx=bb.x0+bb.w/2,cy=bb.y0+bb.h*.45,R=Math.hypot(bb.w,bb.h)*.75,r0=Math.min(bb.w,bb.h)*.34;
  for(let i=0;i<48;i++){const an=(i+hsh(seed+i)*.6)/48*Math.PI*2,w=.008+hsh(seed*3+i)*.016,r1=r0*(1+hsh(seed*7+i)*.7);
    ctx.beginPath();ctx.moveTo(cx+Math.cos(an)*r1,cy+Math.sin(an)*r1);ctx.lineTo(cx+Math.cos(an-w)*R,cy+Math.sin(an-w)*R);ctx.lineTo(cx+Math.cos(an+w)*R,cy+Math.sin(an+w)*R);ctx.fill()}ctx.restore()}
const SFXC={};
function sfxSprite(text,sz){const key=text+'|'+sz;if(SFXC[key])return SFXC[key];const c=document.createElement('canvas'),x=c.getContext('2d'),f=`${sz}px "Mochiy Pop One","Black Han Sans","Jua",sans-serif`;
  x.font=f;const w=Math.ceil(x.measureText(text).width+sz*.7),h=Math.ceil(sz*1.6);c.width=Math.ceil(w*PR);c.height=Math.ceil(h*PR);x.scale(PR,PR);x.font=f;
  x.textAlign='center';x.textBaseline='middle';x.lineJoin='round';x.lineWidth=sz*.3;x.strokeStyle='#2b0a45';x.strokeText(text,w/2,h/2);x.lineWidth=sz*.15;x.strokeStyle='#fff';x.strokeText(text,w/2,h/2);
  const g=x.createLinearGradient(0,h/2-sz/2,0,h/2+sz/2);g.addColorStop(0,'#fff36b');g.addColorStop(1,'#ff4fa3');x.fillStyle=g;x.fillText(text,w/2,h/2);c.w=w;c.h=h;
  if(document.fonts&&document.fonts.status!=='loaded')return c;   // 글꼴이 다 오기 전엔 저장하지 않아요
  return SFXC[key]=c}
function sfx(text,x,y,sz,ang,k,pop,side){sz=Math.round(sz/2)*2;const c=sfxSprite(text,sz),hw=c.w/2,minY=side==='L'?H*.525+sz*.45:H*.5;ctx.save();
  ctx.translate(clamp(x,hw+6,W-hw-6),clamp(y,minY,H-sz));ctx.rotate(ang);const sc=(k<.18?.4+.6*backOut(k/.18):1)*(1+.12*pop);ctx.scale(sc,sc);ctx.globalAlpha*=k>.85?(1-k)/.15:1;
  ctx.drawImage(c,-c.w/2,-c.h/2,c.w,c.h);ctx.restore()}
const pickTxt=(s,seed)=>Array.isArray(s)?s[Math.floor(hsh(seed)*s.length)]:s;
function star4(x,y,s,c){ctx.save();ctx.translate(x,y);ctx.fillStyle=c;ctx.beginPath();for(let k=0;k<8;k++){const r=k%2?s*.22:s,a=k/8*Math.PI*2;k?ctx.lineTo(Math.cos(a)*r,Math.sin(a)*r):ctx.moveTo(r,0)}ctx.closePath();ctx.fill();ctx.restore()}
// ---- 반짝이 조각 (퍼펙트·축하 때 컷에서 튀어나와요. 레인 반대쪽·위로만) ----
const PT=[];
function sparkle(n,rects,big){for(const o of rects)for(let i=0;i<n&&PT.length<160;i++){const out=o.side==='L'?-1:1,x=o.ob.x0+o.ob.w*(o.side==='L'?.2+Math.random()*.8:Math.random()*.8),y=o.ob.y0+Math.random()*o.ob.h*.4;
  PT.push({x,y,vx:out*(.6+Math.random()*2.6),vy:-1.5-Math.random()*3.2,life:1,dec:.012+Math.random()*.014,sz:(big?9:6)+Math.random()*7,rot:Math.random()*6,vr:(Math.random()-.5)*.3,c:['#fff','#fff36b','#ff9bd0','#9ff3ff'][Math.floor(Math.random()*4)],star:Math.random()<.55})}}
function drawPT(move){if(!PT.length)return;ctx.save();ctx.globalCompositeOperation='lighter';
  for(let i=PT.length-1;i>=0;i--){const p=PT[i];if(move){p.x+=p.vx;p.y+=p.vy;p.vy+=.07;p.vx*=.985;p.rot+=p.vr;p.life-=p.dec}if(p.life<=0||p.y>H+20){PT.splice(i,1);continue}
    ctx.globalAlpha=Math.min(1,p.life*1.6);ctx.fillStyle=p.c;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);const s=p.sz*(.6+.4*p.life);ctx.beginPath();
    if(p.star){for(let k=0;k<8;k++){const r=k%2?s*.22:s,a=k/8*Math.PI*2;k?ctx.lineTo(Math.cos(a)*r,Math.sin(a)*r):ctx.moveTo(r,0)}ctx.closePath()}else ctx.arc(0,0,s*.3,0,7);
    ctx.fill();ctx.restore()}ctx.restore()}
// ---- 판정 연동 ----
// 퍼펙트·그레이트: 떠 있는 컷이 툭 튀고 테두리가 번쩍, 반짝이가 튀어나와요
// 미스: 떠 있는 컷이 잠깐 흑백으로 바래며 흔들리고, 콤보가 끊기면 「으아앗!」 반응 컷이 비어 있는 쪽에 떠요
// 25·75… 콤보: 「나이스!」 작은 컷 / 50콤보·피버 시작(cheer): 「최고야!」 축하 컷 + 반짝이 많이
const RX=[];let react=0,jfP=0,jfM=0,prevCombo=0,lastRx=-99,lastRects=[],busy={L:0,R:0},liveOn=false;
const MISS_R={size:'s',shape:'tilt',intro:'pop',brk:'run',bg:['#8fa6d6','#e1e9ff'],sfx:['으아앗!','히익!','앗!'],kind:'miss'};
const NICE_R={L:{size:'s',shape:'slash',intro:'pop',p:[sh(F.girlH,{fill:.62,at:[.5,.5]})],sfx:'나이스!',kind:'nice'},R:{size:'s',shape:'tilt',intro:'pop',p:[sh(POP.slimeq,{w:.95,top:-.26})],sfx:'좋아!',kind:'nice'}};
const CHEER_R={L:{size:'m',shape:'slant',lane:1,intro:'pop',p:[sh(F.smileF,{fill:.55,at:[.5,.45]})],sfx:'최고야!',kind:'cheer'},R:{size:'l',shape:'rect',lane:1,intro:'draw',p:[POP.side],sfx:'대단해!',kind:'cheer'}};
// 이 쪽이 지금부터 len 박자 동안 비어 있나 (예정된 컷·반응 컷 모두)
function free(side,b,len){if(busy[side])return false;const fv=typeof fever!=='undefined'&&fever;for(const x of [b,b+len*.5,b+len])if(events(x,fv).some(e=>e.side===side))return false;return !RX.some(e=>e.side===side&&b<e.start+e.len)}
function spawn(r,b,len,prefer){if(!liveOn||window.VJ_FORCE)return false;const order=prefer?[prefer,prefer==='L'?'R':'L']:Math.random()<.5?['L','R']:['R','L'];
  for(const side of order){const rr=r[side]||r;if(free(side,b,len)){RX.push({side,r:rr,start:b,len,vy:Math.random(),rx:1});return true}}return false}
const orig=window.monsterReact;window.monsterReact=k=>{orig&&orig(k);const c=typeof combo!=='undefined'?combo:0;
  if(k==='p'){react=1;jfP=1;sparkle(3,lastRects)}
  else if(k==='gr'){react=Math.max(react,.6);jfP=Math.max(jfP,.55);sparkle(1,lastRects)}
  else if(k==='g'){jfP=Math.max(jfP,.25)}
  else if(k==='miss'){jfM=1;if(lastB-lastRx>6&&(prevCombo>=8||Math.random()<.3)&&spawn(MISS_R,lastB,4))lastRx=lastB}
  else if(k==='cheer'){react=1;jfP=1;sparkle(10,lastRects,true);if(spawn(CHEER_R,lastB,6))lastRx=lastB}
  if(k!=='miss'&&k!=='cheer'&&c>0&&c%25===0&&lastB-lastRx>4&&spawn(NICE_R,lastB,4))lastRx=lastB;
  prevCombo=k==='miss'?0:c};
// ---- 컷 하나 ----
const DELAY={slide:.12,pop:.2,draw:.42};   // 캐릭터·효과음이 나오기까지 (초)
function drawCut(ev,b,t,hit,fv,I){
  const r=ev.r,bx=box(ev.side,r.size||'m',ev.vy||0,r.lane),bh=bx.y1-bx.y0,bw=Math.abs(Math.max(bx.xi0,bx.xi1)-bx.xo),spb=60/CHART.bpm,el=(b-ev.start)*spb,dur=ev.len*spb;if(el<0||el>dur)return null;
  const intro=r.intro||'slide',dl=DELAY[intro],k=el/dur,dir=ev.side==='L'?-1:1,kind=r.kind||'',zk=lerp(1,1.06,k)*(1+.03*hit+.05*jfP),tOut=clamp((el-(dur-.3))/.3,0,1);
  // 등장·퇴장: slide 는 옆으로 밀려 들어오고 나가요 / pop·draw 는 제자리에서 커지고, 작아지며 사라져요
  const offOf=d=>intro!=='slide'?0:((1-backOut(clamp((el-d)/.38,0,1)))+inBack(tOut)*1.2)*(bw+60)*dir;
  const off=offOf(0),outer=(r.split?SHAPES.rect:SHAPES[r.shape]).map(([u,v])=>at(bx,off,u,v)),ob=rectOf(outer),cx=ob.x0+ob.w/2,cy=ob.y0+ob.h/2;
  const sc=(intro==='pop'?.25+.75*backOut(clamp(el/.32,0,1)):1)*(intro==='slide'?1:1-.18*inBack(tOut)),alpha=intro==='slide'?1:1-tOut;
  const drawP=intro==='draw'?clamp(el/.34,0,1):1,fillA=intro==='draw'?clamp((el-.06)/.2,0,1):1;
  ctx.save();ctx.globalAlpha=alpha;
  // 흔들림: 미스 때 떠 있는 컷 전부 + 미스 반응 컷은 들어올 때 덜덜 (화면은 안 흔들어요, 컷만)
  const shk=jfM*.035+(kind==='miss'?Math.exp(-el*2.5)*.06:0);
  if(shk>.002||sc!==1){ctx.translate(cx,cy);if(shk>.002)ctx.rotate(Math.sin(t*47)*shk);if(sc!==1)ctx.scale(sc,sc);ctx.translate(-cx,-cy)}
  // 축하 컷: 뒤에서 도는 금빛 햇살 (화면 아래쪽 + 컷 옆에서만)
  if(kind==='cheer'){ctx.save();ctx.beginPath();if(ev.side==='L')ctx.rect(0,H*.53,Math.max(bx.xi0,bx.xi1)+30,H);else{const x=Math.min(bx.xi0,bx.xi1)-30;ctx.rect(x,H*.53,W-x,H)}ctx.clip();ctx.globalCompositeOperation='lighter';
    const R=Math.max(ob.w,ob.h)*.95,a0=t*.6,al=Math.min(1,el/.3)*(1-tOut);
    const g=ctx.createRadialGradient(cx,cy,0,cx,cy,R);g.addColorStop(0,`rgba(255,220,90,${.55*al})`);g.addColorStop(1,'rgba(255,220,90,0)');ctx.fillStyle=g;
    for(let i=0;i<14;i++){const a=a0+i/14*Math.PI*2;
      ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(a-.09)*R,cy+Math.sin(a-.09)*R);ctx.lineTo(cx+Math.cos(a+.09)*R,cy+Math.sin(a+.09)*R);ctx.fill()}ctx.restore()}
  // 그림자 + 흰 바탕 (분할 컷은 이 흰 바탕이 칸 사이 틈이 돼요)
  if(fillA>0){ctx.save();ctx.globalAlpha*=fillA;ctx.translate(9,13);path(outer);ctx.fillStyle='rgba(20,6,40,.16)';ctx.fill();ctx.translate(-4,-5);path(outer);ctx.fillStyle='rgba(20,6,40,.3)';ctx.fill();ctx.translate(-5,-8);path(outer);ctx.fillStyle='#fff';ctx.fill();ctx.restore()}
  const cells=r.split?SPLIT(7/bh).map((P,i)=>{const o=offOf(i*.12);return {P:P.map(([u,v])=>at(bx,o,u,v)),p:r.p[i],d:i*.12}}):[{P:outer,p:r.p&&r.p[0],d:0}];
  const gold=fv||kind==='cheer',line=gold?'#ffb800':kind==='miss'?'#3b4fa8':'#2b0a45',gray=Math.max(jfM*.9,kind==='miss'?.35:0),pops=[];
  for(const c of cells){const bb=rectOf(c.P),ce=el-dl-c.d,rev=intro==='draw'?clamp((el-.16-c.d)/.3,0,1):1,p=c.p;
    if(rev>0){ctx.save();path(c.P);ctx.clip();
      // draw 등장: 바깥 위 모서리에서 레인 쪽 아래로 그림이 쓸려 나와요
      if(rev<1){const dx=ev.side==='L'?1:-1,n=Math.SQRT1_2,ox=ev.side==='L'?bb.x0:bb.x0+bb.w,oy=bb.y0,s=(bb.w+bb.h)*n*rev,R=bb.w+bb.h,d=[dx*n,n],q=[-d[1],d[0]];
        ctx.beginPath();ctx.moveTo(ox+d[0]*s+q[0]*R,oy+d[1]*s+q[1]*R);ctx.lineTo(ox+d[0]*s-q[0]*R,oy+d[1]*s-q[1]*R);ctx.lineTo(ox-d[0]*R-q[0]*R,oy-d[1]*R-q[1]*R);ctx.lineTo(ox-d[0]*R+q[0]*R,oy-d[1]*R+q[1]*R);ctx.closePath();ctx.clip()}
      if(p&&p.bg)cellBg(bb,p.bg,t);
      if(p&&p.pop&&ok(I[p.pop])){const rise=backOut(clamp(ce/.36,0,1));if(ce>0){const ph=fr(b),bob=p.bounce?Math.sin(ph*Math.PI)*.1+react*.08:0,q=popRect(I[p.pop],bb,c.P,p,ev.side,zk,rise,bob);if(p.jump)jumpFx(bb,q,bob,rise);drawIm(I[p.pop],q.x,q.y,q.w,q.h,q.fl);pops.push({c,q,im:I[p.pop],key:p.pop})}}
      else if(p&&p.img&&ok(I[p.img]))place(I[p.img],bb,c.P,p,ev.side,zk);
      else if(r.brk)burst(bb,r.bg[0],r.bg[1],t);
      if(gray>.03){ctx.save();ctx.globalCompositeOperation='saturation';ctx.globalAlpha*=gray;ctx.fillStyle='#808080';ctx.fillRect(bb.x0,bb.y0,bb.w,bb.h);ctx.globalCompositeOperation='multiply';ctx.globalAlpha=1;ctx.fillStyle=`rgba(0,0,0,${(.18*gray).toFixed(3)})`;ctx.fillRect(bb.x0,bb.y0,bb.w,bb.h);ctx.restore()}
      // 들어오는 순간: 집중선 + 하얀 번쩍
      const fe=el-(intro==='draw'?.3:0)-c.d;if(fe>0&&fe<.7)focusLines(bb,.75*(1-fe/.7),ev.start*3.1+c.d*9,kind==='miss'?'#24305e':'#fff');
      if(gold)focusLines(bb,.22+.18*hit,ev.start*5.7+c.d*9+Math.floor(b*2),'#fff6c8');
      if(fe>0&&fe<.16){ctx.fillStyle=`rgba(255,255,255,${(1-fe/.16)*.9})`;ctx.fillRect(bb.x0,bb.y0,bb.w,bb.h)}
      if(rev<1){ctx.globalCompositeOperation='lighter';ctx.fillStyle=`rgba(255,255,255,${(.45*(1-rev)).toFixed(3)})`;ctx.fillRect(bb.x0,bb.y0,bb.w,bb.h);ctx.globalCompositeOperation='source-over'}
      if(jfP>.05&&!gray){ctx.globalCompositeOperation='lighter';ctx.fillStyle=`rgba(255,235,250,${.16*jfP})`;ctx.fillRect(bb.x0,bb.y0,bb.w,bb.h);ctx.globalCompositeOperation='source-over'}
      ctx.restore()}
    // 테두리 (draw 등장은 펜으로 그리듯 한 바퀴)
    path(c.P);ctx.lineJoin='round';const L=perim(c.P),pd=intro==='draw'?clamp(drawP*1.15-c.d,0,1):1;if(pd<1)ctx.setLineDash([L*pd,L+1]);
    if(!r.split){ctx.lineWidth=8;ctx.strokeStyle='#fff';ctx.stroke()}ctx.lineWidth=3;ctx.strokeStyle=line;ctx.stroke();ctx.setLineDash([]);
    if(pd>0&&pd<1){const tp=along(c.P,L*pd);ctx.save();ctx.globalCompositeOperation='lighter';star4(tp[0],tp[1],13,'#fff');star4(tp[0],tp[1],7,'#fff36b');ctx.restore()}}
  if(r.split&&drawP>=1){path(outer);ctx.lineJoin='round';ctx.lineWidth=4;ctx.strokeStyle='#fff';ctx.stroke()}
  // 퍼펙트 때 테두리가 번쩍
  if(jfP>.05){ctx.save();path(outer);ctx.globalCompositeOperation='lighter';ctx.lineJoin='round';ctx.lineWidth=16;ctx.strokeStyle=gold?`rgba(255,215,90,${(.3*jfP).toFixed(3)})`:`rgba(255,155,208,${(.3*jfP).toFixed(3)})`;ctx.stroke();ctx.lineWidth=5;ctx.strokeStyle=`rgba(255,250,255,${(.85*jfP).toFixed(3)})`;ctx.stroke();ctx.restore()}
  // 컷 밖으로 튀어나오기: 윗변 위로 나온 부분을 테두리 위에 한 번 더 (흰 외곽선을 둘러 만화처럼)
  for(const o of pops){const P=o.c.P,a=P[0],b2=P[1];
    ctx.save();ctx.beginPath();ctx.moveTo(a[0],a[1]+7);ctx.lineTo(b2[0],b2[1]+7);ctx.lineTo(b2[0],b2[1]-H);ctx.lineTo(a[0],a[1]-H);ctx.closePath();ctx.clip();ctx.beginPath();ctx.rect(0,ev.side==='L'?H*.525:H*.42,W,H);ctx.clip();
    const ol=I[o.key+'_ol'];if(ol){const k2=o.q.w/(ol.width-ol.pad*2),pp=ol.pad*k2;drawIm(ol,o.q.x-pp,o.q.y-pp,o.q.w+pp*2,o.q.h+pp*2,o.q.fl)}
    drawIm(o.im,o.q.x,o.q.y,o.q.w,o.q.h,o.q.fl);ctx.restore()}
  // 튀어나오는 캐릭터: 발은 칸 아래, 머리는 칸 위로 (박자마다 통통, 판정에 맞춰 더 높이)
  const ce0=el-dl;
  if(r.brk&&ok(I[r.brk])&&ce0>0){const im=I[r.brk],h=bh*(r.brk==='rider'?1.05:ev.side==='L'?1.12:1.3),w=h*NW(im)/NH(im),ph=fr(b),sq=.07*Math.exp(-ph*10)*(1+react),hop=Math.sin(ph*Math.PI)*bh*.04+react*bh*.06,app=.3+.7*backOut(clamp(ce0/.3,0,1));
    ctx.save();ctx.beginPath();ctx.rect(0,ev.side==='L'?H*.525:H*.42,W,H);ctx.clip();ctx.translate(ob.x0+ob.w/2,bx.y1-4-hop);ctx.scale((1+sq*.6)*app*(ev.side==='R'&&r.brk==='rider'?-1:1),(1-sq)*app);ctx.drawImage(im,-w/2,-h,w,h);ctx.restore()}
  // 효과음: 캐릭터가 나올 때 + 4박째 (반응 컷은 처음만)
  for(const a of (ev.rx?[0]:[0,4])){const q=a?((b-ev.start)-4)/2.4:ce0/(2.4*spb);if(q>=0&&q<1){const txt=fv&&!kind?'피버!':pickTxt(r.sfx,ev.start),u=r.brk?.9:.62,inner=ev.side==='L'?u:1-u;
    sfx(txt,ob.x0+ob.w*inner,bx.y0+(r.brk?bh*.1:-bh*.02)+(a?bh*.12:0),Math.max(32,Math.min(66,bh*.22))*(kind==='cheer'?1.15:1),-dir*(a?-.1:.12),q,jfP,ev.side)}}
  ctx.restore();
  return {side:ev.side,ob,start:ev.start}}
// ---- 설정 칩 ----
// ---- 매 프레임 ----
let lastB=0,lastT=performance.now(),seen={},dirty=true;const clock0=performance.now();window.VJ_FORCE=null;   // 확인용: VJ_FORCE=[{side:'L',k:0,start:박자,vy:0~1},…] 이면 그 컷을 계속 띄워요 (rx:{…} 로 직접 만든 컷도)
function tick(){requestAnimationFrame(tick);
  const sid=typeof SONGS!=='undefined'&&SONGS[cur]?SONGS[cur].id:'',full=false,I=imgs(sid),songOn=!!I&&mode==='on';
  window.VJ_MODE=mode;document.body.classList.toggle('art-hide3d',songOn||full||!!window.VJ_PIXEL_ON||!!window.VJ_LOGO_ON||!!window.VJ_CODE_ON);   /* VJ_CODE_ON: WHICK 「IDEA BUILDER」 (js/vj_code.js) */   // 이 곡에선 3D 캐릭터 대신 그림 연출 (픽몬은 js/vj_pixel.js)
  const isPlay=typeof playing!=='undefined'&&playing,on=songOn&&isPlay&&typeof G!=='undefined'&&G.land;liveOn=on;
  cv.classList.toggle('on',on);if(!on){RX.length=0;PT.length=0;lastRects=[];prevCombo=0;lastRx=-99;seen={};dirty=true;return}size();
  const pn=performance.now(),dt=Math.min(.05,(pn-lastT)/1000);lastT=pn;
  const t=(pn-clock0)/1000,isPaused=typeof paused!=='undefined'&&paused;let b=lastB;if(!isPaused)b=beatAt(now());
  if(b<lastB-1){RX.length=0;lastRx=-99}lastB=b;   // 처음부터 다시 하면 반응 컷도 비워요
  const fv=typeof fever!=='undefined'&&fever,hit=Math.exp(-fr(b)*6);if(!isPaused){react*=Math.exp(-dt*5);jfP*=Math.exp(-dt*6);jfM*=Math.exp(-dt*4.5)}
  for(let i=RX.length-1;i>=0;i--)if(b>RX[i].start+RX[i].len)RX.splice(i,1);
  const evs=window.VJ_FORCE?VJ_FORCE.map(f=>({side:f.side,r:f.rx?f.rx:(f.side==='L'?L_POOL:R_POOL)[f.k],start:f.start!=null?f.start:Math.floor(b)-3,len:f.len||99,vy:f.vy||0,rx:f.rx?1:0})):events(b,fv).concat(RX);
  ctx.setTransform(PR,0,0,PR,0,0);
  const idle=!PT.length&&!evs.some(e=>b>=e.start&&b<=e.start+e.len);if(idle&&!dirty)return;ctx.clearRect(0,0,W,H);dirty=!idle;
  const rects=[],nb={L:0,R:0};
  for(const ev of evs){const o=drawCut(ev,b,t,hit,fv,I);if(o){rects.push(o);nb[o.side]=1;const key=o.side+o.start;if(!seen[key]){seen[key]=1;sparkle(ev.r.kind==='cheer'?14:5,[o],ev.r.kind==='cheer')}}}
  lastRects=rects;busy=nb;drawPT(!isPaused)}
tick();
// 확인용: VJ_TEST('miss'|'nice'|'cheer') 로 반응 컷을 바로 띄워 봐요 / VJ_POOLS 로 컷 목록을 봐요
window.VJ_TEST=k=>{if(k==='miss'){prevCombo=20;window.monsterReact('miss')}else if(k==='cheer')window.monsterReact('cheer');else if(k==='nice'){lastRx=-99;spawn(NICE_R,lastB,4)}return RX.length};
window.VJ_POOLS={L:L_POOL,R:R_POOL,MISS_R,NICE_R,CHEER_R};
})();
