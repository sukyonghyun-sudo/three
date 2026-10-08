// WHICK 좌우 화면 연출 「IDEA BUILDER」 (2026-10-06 사용자: 「휙에서는 3D 신사 말고 — 개발 스크립트 같은 게 막 써지면서 터지고 완료되는 느낌의 좌우 화면 이펙트」
//   · 「영어로 — 너와 아이디어 ~ 너만의 게임, 너만의 만화, 이런 것들을 상상력만으로 만들어 낸다는 느낌」 · 「창이 떠 있으니 UI 같아 — 창은 빼고 개발 텍스트만, 이펙트스럽게」)
//  · 창(테두리 · 제목 줄 · 바탕 상자) 없이 글자만: 네온 빛 글자가 비스듬히(왼쪽은 위로, 오른쪽은 아래로 기울어) 떠 있어요
//      새 줄은 하얗게 번쩍이며 옆에서 미끄러져 들어오고 · 위로 밀려 올라가며 흐려지고 · 박자마다 가끔 한 줄이 글리치(분홍 · 하늘 겹침)
//  · 왼쪽: 코드 — 노트를 맞힐 때마다 몇 글자씩 타이핑 (퍼펙트 > 그레이트 > 굿). 한 덩어리 = 하나의 창작물: GAME → COMIC → MUSIC → WORLD → 처음부터 (v2 · v3 …)
//  · 오른쪽: 빌드 로그 — 코드 줄이 끝날 때마다 한 줄씩 · 아래에 빛나는 진행 줄 / 덩어리가 끝나면 「YOUR GAME — CREATED!」 가 팡 (조각 · 별 · 빛 고리)
//  · 콤보가 끊기면 오른쪽에 빨간 ⚠ 줄 + 글리치 · 이 곡에선 3D 신사를 숨겨요 (window.VJ_CODE_ON → js/vj.js 가 body.art-hide3d)
//  · 글자 한 줄은 바뀔 때만 따로 그려 두고(빛 번짐 포함) 매 프레임엔 붙이기만 해요 (가볍게)
//  · 「개발 용어가 써질 때마다 탁탁 터지게」(2026-10-06 사용자): 노트를 칠 때마다 커서에서 불꽃이 탁 · imagine · make · publish · GAME 같은 용어(와 "문자열")가 완성되는 순간
//    그 단어가 튀어 올라 커지며 사라지고 작은 빛 고리 · 불꽃 · 줄이 끝나면 빛이 한 번 훑고 지나가요 · 오른쪽 로그 줄 끝에도 탁
(function(){
const $=id=>document.getElementById(id),stage=$('stage');if(!stage||!$('bg'))return;
const SONG='whick';
const cv=document.createElement('canvas');cv.className='artpanels code';$('bg').after(cv);const g=cv.getContext('2d');
let PR=1,cw=0,ch=0;
function size(){const pr=Math.min(2,(devicePixelRatio||1)*(window.STAGE_K||1));const w=Math.round(1920*pr),h=Math.round(1080*pr);if(w!==cw||h!==ch||pr!==PR){PR=pr;cw=cv.width=w;ch=cv.height=h;for(const L of lines)L.cs=null;for(const L of logs)L.cs=null}}
addEventListener('resize',()=>setTimeout(size,30));
// ---- 만들 것들 (영어) ----
const BLOCKS=[
 {k:'GAME',code:['const you  = new Creator("YOU");','const idea = you.imagine();','','// ✦ your own game','game = idea.make("GAME", {','  world: "HENESYS++",','  hero:  you,','  rules: "anything goes",','});','game.play();'],
  log:['$ imagine --game','▸ sketching the world','▸ spawning heroes','▸ writing the rules','▸ adding boss: PINK BEAN','▸ balancing fun = MAX']},
 {k:'COMIC',code:['// ✦ your own comic','comic = idea.make("COMIC", {','  panels: 4,','  style:  "POW! BAM!",','  star:   you,','});','comic.print();'],
  log:['$ imagine --comic','▸ drawing panels 1-4','▸ inking speech bubbles','▸ adding SFX: "POW!"','▸ coloring with joy']},
 {k:'MUSIC',code:['// ✦ your own song','song = idea.make("MUSIC", {','  bpm:   125,','  beat:  you.heart(),','  vibe:  "whick!",','});','song.drop();'],
  log:['$ imagine --music','▸ tapping the beat','▸ layering synths','▸ tuning the hook','▸ mixing at 125 BPM']},
 {k:'WORLD',code:['// ✦ your own world','world = Worlds.create({','  from: [game, comic, song],','  by:   you,','});','world.publish();','// every world begins with one idea'],
  log:['$ whick publish','▸ merging your ideas','▸ building the world','▸ inviting players','▸ opening the gates']}
];
const CHARS=BLOCKS.reduce((a,b)=>a+b.code.join('').length,0);
const nowS=()=>performance.now()/1000;
// ---- 상태 ----
let sparks=[],pops=[],scans=[],glows=[],rays=[],bi=0,ver=1,li=0,ci=0,lines=[],logs=[],stamps=[],parts=[],rings=[],scroll=0,rscroll=0,prog=0,flash=0,warn=0,prevCombo=0,live=false,K=4,lastT=performance.now(),blink=0,glL=null,glR=null,lastBeat=-1;
const NL=()=>({s:'',t0:nowS(),cs:null,cv:null,w:0});
function reset(){sparks=[];pops=[];scans=[];glows=[];rays=[];bi=0;ver=1;li=0;ci=0;lines=[NL()];logs=[];stamps=[];parts=[];rings=[];scroll=0;rscroll=0;prog=0;flash=0;warn=0;prevCombo=0;glL=glR=null;pushLog('$ whick --idea "YOU"','#E6DCFF');
  const n=typeof notes!=='undefined'&&notes?notes.length:300;K=Math.max(3,Math.min(10,Math.round(CHARS/Math.max(1,n)*2)))}
const B=()=>BLOCKS[bi];
function pushLog(t,c){logs.push({s:t,c:c||'#E6DCFF',t0:nowS(),cs:null,cv:null,w:0});if(logs.length>40)logs.splice(0,logs.length-40)}
// 한 글자씩 — 줄이 끝나면 다음 줄 · 덩어리가 끝나면 팡
function type(n){let typed=false;for(let i=0;i<n;i++){const L=B().code;if(li>=L.length){done();return}
  const s=L[li],cur_=lines[lines.length-1];if(ci<s.length){cur_.s+=s[ci];ci++;typed=true;prog=Math.min(1,prog+1/B().code.join('').length);wordFx(s,cur_)}
  if(ci>=s.length){if(s.trim())scans.push({L:cur_,t0:nowS()});li++;ci=0;const lg=B().log,j=Math.min(lg.length-1,Math.round(li/L.length*(lg.length-1)));if(s.trim()&&li%2===0&&lg[j])pushLog(lg[j]+' ...... ok','#9FF0CF');
    if(li<L.length)lines.push(NL());else{done();return}}}
  if(typed){const [x,y]=cursorXY(),c=lastCol(),t=nowS();spark(x,y,c,13,1.15);glows.push({x,y,c,t0:t,r:58,d:.2});rings.push({x,y,t0:t,small:1})}}   // 칠 때마다 커서에서 탁 — 섬광 · 고리 · 불꽃 (사용자: 「더 크게 터지게, 이펙트 느낌으로」)
function done(){const b=B();pushLog(`✔ ${b.k} CREATED${ver>1?' v'+ver:''}`,'#5BF0C6');
  stamps.push({k:b.k,t0:nowS()});burst(300,620,['#FFE27A','#FF8A2B','#FF4FA3','#3DDCFF','#FFFFFF']);burst(1620,560,['#5BF0C6','#FFFFFF','#3DDCFF']);flash=1;
  bi=(bi+1)%BLOCKS.length;if(bi===0)ver++;li=0;ci=0;prog=0;lines.push(NL(),NL());pushLog(`$ imagine --${B().k.toLowerCase()}${ver>1?' v'+ver:''}`,'#E6DCFF')}
function burst(x,y,C){const t=nowS();rings.push({x,y,t0:t});for(let i=0;i<28;i++){const a=Math.random()*6.283,sp=200+Math.random()*440;parts.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-120,s:5+Math.random()*9,c:C[i%C.length],t0:t,life:.7+Math.random()*.3,sq:i%3!==0,r:Math.random()*6})}}
// ---- 탁탁: 커서 자리 · 용어 완성 · 불꽃 ----
const LX=70,LY=400,SKL=-.07,RX=1390,RY=170,SKR=.07,TX=44;   // 왼쪽 · 오른쪽 덩어리 자리와 기울기 (글자는 덩어리 안 x=TX 부터)
const TERMS=new Set(['const','new','let','imagine','make','play','print','drop','publish','create','Creator','Worlds','idea','you','YOU','game','comic','song','world','heart','hero','rules','panels','style','star','bpm','beat','vibe','from','by']);
const wpx=t=>{OC.font=`700 ${FS}px ${MONO}`;return OC.measureText(t).width};
function lineXY(L,i0,sc,ox,oy,sk,x){const y=(i0-sc)*LH+LH/2;return [ox+x,oy+sk*x+y]}   // 덩어리 안 자리 → 화면 자리 (기울기 반영)
function cursorXY(){const i=lines.length-1,L=lines[i];return lineXY(L,i,SCL.v,LX,LY,SKL,TX+wpx(L.s))}
function colAt(s,k){let p=0;for(const [w,c] of tokens(s)){if(k<p+w.length)return c;p+=w.length}return '#F6F0FF'}
function lastCol(){const L=lines[lines.length-1];return L.s?colAt(L.s,L.s.length-1):'#FFE27A'}
function spark(x,y,c,n,pw){const t=nowS();for(let i=0;i<n;i++){const a=Math.random()*6.283,sp=(190+Math.random()*360)*pw;sparks.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-80*pw,c:i%3?c:'#FFFFFF',t0:t,life:.32+Math.random()*.32,w:2.6+Math.random()*2.8})}}
function wordFx(s,L){const ch=s[ci-1],nx=s[ci];let k=-1,w='';
  if(/\w/.test(ch)&&!(nx&&/\w/.test(nx))){k=ci-1;while(k>0&&/\w/.test(s[k-1]))k--;w=s.slice(k,ci);if(!TERMS.has(w))return}   // 용어 하나가 끝난 순간
  else if(ch==='"'&&(s.slice(0,ci).split('"').length%2===1)){k=s.lastIndexOf('"',ci-2);w=s.slice(k,ci)}   // "문자열" 이 닫힌 순간
  else return;
  const i=lines.length-1,x0=TX+wpx(L.s.slice(0,k)),ww=wpx(w),[x,y]=lineXY(L,i,SCL.v,LX,LY,SKL,x0+ww/2),c=colAt(s,k);
  const t=nowS();pops.push({w,c,x,y,t0:t});spark(x,y,c,28,2.1);rings.push({x,y,t0:t,mid:1});glows.push({x,y,c,t0:t,r:120,d:.32});rays.push({x,y,c,t0:t,a0:Math.random()*6.283})}
// 판정 → 타이핑 (vj · dancer 와 같은 monsterReact 고리)
const orig=window.monsterReact;window.monsterReact=k=>{orig&&orig(k);if(!live)return;if(k==='p')type(K);else if(k==='gr')type(Math.max(1,Math.round(K*.75)));else if(k==='g')type(Math.max(1,Math.round(K*.45)))};
// ---- 글자 한 줄 그려 두기 (빛 번짐 + 어두운 테두리) ----
const MONO='"Consolas","D2Coding","Menlo","Courier New",monospace',FS=19,LH=28;
const KW=/^(const|new|let|return|function)$/;
function tokens(s){if(s.trim().startsWith('//'))return [[s,'#B9A8FF']];const out=[],re=/("[^"]*"?|\d+|[A-Za-z_]\w*|\s+|.)/g;let m,prevDot=false;
  while((m=re.exec(s))){const w=m[0];let c='#F6F0FF';
    if(w[0]==='"')c='#9FF0A6';else if(/^\d+$/.test(w))c='#FFB86B';else if(KW.test(w))c='#FF79C6';else if(w==='you'||w==='YOU')c='#FFE27A';else if(prevDot&&/^[A-Za-z_]/.test(w))c='#7FE6FF';else if(/^[A-Z]/.test(w))c='#D3B5FF';else if(/^[{}()\[\],;:=.]$/.test(w))c='#C6B4FF';
    out.push([w,c]);if(!/^\s+$/.test(w))prevDot=w==='.'}return out}
const OC=document.createElement('canvas').getContext('2d');
function bake(L,code){if(L.cs===L.s&&L.cv)return L;L.cs=L.s;const tk=code?tokens(L.s):[[L.s,L.c]];OC.font=`700 ${FS}px ${MONO}`;const w=Math.ceil(OC.measureText(L.s||' ').width)+24,h=LH+12;
  const c=L.cv||document.createElement('canvas');c.width=Math.max(1,Math.round(w*PR));c.height=Math.round(h*PR);const x=c.getContext('2d');x.setTransform(PR,0,0,PR,0,0);x.clearRect(0,0,w,h);x.font=`700 ${FS}px ${MONO}`;x.textBaseline='middle';x.lineJoin='round';
  let cx=10;x.lineWidth=4;x.strokeStyle='rgba(10,0,26,.62)';for(const [s] of tk){x.strokeText(s,cx,h/2);cx+=x.measureText(s).width}   // 어두운 테두리 (영상 위에서도 읽히게)
  cx=10;for(const [s,col] of tk){x.shadowColor=col;x.shadowBlur=9;x.fillStyle=col;x.fillText(s,cx,h/2);cx+=x.measureText(s).width}x.shadowBlur=0;   // 네온 빛
  L.cv=c;L.w=cx-10;L.h=h;return L}
function star4(x,y,s){g.beginPath();for(let i=0;i<8;i++){const r=i%2?s*.32:s,a=i/8*6.283-1.571;g.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r)}g.closePath()}
// 한 덩어리(왼쪽 코드 · 오른쪽 로그) 그리기: 기울기 · 위로 밀려 흐려짐 · 새 줄 번쩍 · 글리치
function block(arr,code,ox,oy,skew,maxL,sc,glitch,t,showNum){const want=Math.max(0,arr.length-maxL);sc.v+=(want-sc.v)*Math.min(1,1/60*9);
  g.setTransform(PR,PR*skew,0,PR,PR*ox,PR*oy);
  arr.forEach((L,i)=>{const y=(i-sc.v)*LH;if(y<-LH*1.5||y>maxL*LH+LH)return;const age=t-L.t0,fin=Math.min(1,age/.22),top=Math.max(0,Math.min(1,(y+LH*1.2)/(LH*3.2))),a=fin*top;if(a<=.01)return;
    bake(L,code);const dx=(1-fin)*-26;g.globalAlpha=a;
    if(showNum){g.font=`600 14px ${MONO}`;g.fillStyle='rgba(198,180,255,.45)';g.textAlign='right';g.textBaseline='middle';g.fillText(String(i+1),24,y+LH/2);g.textAlign='left'}
    g.drawImage(L.cv,34+dx,y-6,L.cv.width/PR,L.cv.height/PR);
    if(age<.16){g.globalCompositeOperation='lighter';g.globalAlpha=(1-age/.16)*.8*top;g.drawImage(L.cv,34+dx,y-6,L.cv.width/PR,L.cv.height/PR);g.globalCompositeOperation='source-over'}   // 새 줄 번쩍
    const sn=code&&scans.find(q=>q.L===L);if(sn){const u=(t-sn.t0)/.26;if(u>=1)scans.splice(scans.indexOf(sn),1);else{const bw=L.w+40,bx=34+dx+bw*u-30,gg=g.createLinearGradient(bx,0,bx+60,0);gg.addColorStop(0,'rgba(255,255,255,0)');gg.addColorStop(.5,'rgba(255,255,255,.85)');gg.addColorStop(1,'rgba(255,255,255,0)');
      g.globalCompositeOperation='lighter';g.globalAlpha=(1-u)*top;g.fillStyle=gg;g.fillRect(bx,y+2,60,LH-4);g.globalCompositeOperation='source-over';g.globalAlpha=a}}   // 줄이 끝나면 빛이 한 번 훑고 지나가요
    if(!code&&!L.sp&&age>.05){L.sp=1;const [sx,sy]=lineXY(L,i,sc.v,ox,oy,skew,44+L.w);spark(sx,sy,L.c,14,1.4);glows.push({x:sx,y:sy,c:L.c,t0:t,r:46,d:.2})}   // 로그 줄 끝에도 탁
    if(glitch&&glitch.i===i&&t-glitch.t0<.13){g.globalCompositeOperation='lighter';g.globalAlpha=.55*top;g.filter='hue-rotate(-60deg)';g.drawImage(L.cv,34+dx-5,y-6,L.cv.width/PR,L.cv.height/PR);g.filter='hue-rotate(120deg)';g.drawImage(L.cv,34+dx+5,y-5,L.cv.width/PR,L.cv.height/PR);g.filter='none';g.globalCompositeOperation='source-over'}
  });g.globalAlpha=1}
const SCL={v:0},SCR={v:0};   // (위에서도 써요 — 커서 자리)
// ---- 매 프레임 ----
function tick(){requestAnimationFrame(tick);
  const sid=typeof SONGS!=='undefined'&&SONGS[cur]?SONGS[cur].id:'',songOn=sid===SONG&&window.VJ_MODE!=='off';window.VJ_CODE_ON=songOn;
  const isPlay=typeof playing!=='undefined'&&playing,on=songOn&&isPlay&&typeof G!=='undefined'&&G.land;
  if(on&&!live){reset();SCL.v=0;SCR.v=0}live=on;cv.classList.toggle('on',on);if(!on)return;size();
  const pn=performance.now(),dt=Math.min(.05,(pn-lastT)/1000);lastT=pn;const t=pn/1000;
  const c=typeof combo!=='undefined'?combo:0;if(c<prevCombo&&prevCombo>=5){warn=1;pushLog(`⚠ idea dropped — retrying… (combo ${prevCombo})`,'#FF8EA5');glR={i:logs.length-1,t0:t}}prevCombo=c;
  // 박자마다 가끔 글리치
  const bb=typeof beatAt==='function'&&typeof now==='function'?Math.floor(beatAt(now())):Math.floor(t*2);
  if(bb!==lastBeat){lastBeat=bb;if(Math.random()<.35&&lines.length)glL={i:Math.max(0,lines.length-1-Math.floor(Math.random()*Math.min(6,lines.length))),t0:t};if(Math.random()<.2&&logs.length)glR={i:Math.max(0,logs.length-1-Math.floor(Math.random()*Math.min(6,logs.length))),t0:t}}
  flash*=Math.exp(-dt*4);warn*=Math.exp(-dt*3);blink+=dt;
  g.setTransform(PR,0,0,PR,0,0);g.clearRect(0,0,1920,1080);
  // 왼쪽: 코드 (비스듬히 위로)
  const ML=18;block(lines,true,LX,LY,SKL,ML,SCL,glL,t,true);
  // 커서: 마지막 줄 끝에서 빛나는 블록
  {const i=lines.length-1,L=lines[i],y=(i-SCL.v)*LH;bake(L,true);g.setTransform(PR,PR*-.07,0,PR,PR*LX,PR*LY);if((blink%.5)<.32){g.shadowColor='#FFE27A';g.shadowBlur=14;g.fillStyle='#FFE27A';g.fillRect(34+10+L.w+3,y+4,10,LH-8);g.shadowBlur=0}}
  // 오른쪽: 빌드 로그 (비스듬히 아래로) + 빛나는 진행 줄
  const MR=24;block(logs,false,RX,RY,SKR,MR,SCR,glR,t,false);
  {g.setTransform(PR,PR*.07,0,PR,PR*RX,PR*RY);const py=MR*LH+30,pw=420;g.globalAlpha=1;
   g.fillStyle='rgba(255,255,255,.14)';g.fillRect(40,py,pw,5);const pgr=g.createLinearGradient(40,0,40+pw,0);pgr.addColorStop(0,'#3DDCFF');pgr.addColorStop(.5,'#B58CFF');pgr.addColorStop(1,'#FF4FA3');
   g.shadowColor=warn>.1?'#FF6F8A':'#B58CFF';g.shadowBlur=16;g.fillStyle=pgr;g.fillRect(40,py,Math.max(6,pw*prog),5);g.shadowBlur=0;
   g.font='900 15px "Nunito",sans-serif';g.textAlign='left';g.textBaseline='bottom';g.lineWidth=4;g.strokeStyle='rgba(10,0,26,.6)';const lb=`BUILDING ${B().k}  ${Math.round(prog*100)}%`;g.strokeText(lb,40,py-8);g.shadowColor='#FFFFFF';g.shadowBlur=8;g.fillStyle='#FFFFFF';g.fillText(lb,40,py-8);g.shadowBlur=0}
  g.setTransform(PR,0,0,PR,0,0);
  // 탁탁: 섬광 · 방사형 빛줄기 · 불꽃 (빛 줄무늬) · 튀어 오르는 용어
  g.globalCompositeOperation='lighter';
  for(let i=glows.length-1;i>=0;i--){const q=glows[i],u=(t-q.t0)/q.d;if(u>=1){glows.splice(i,1);continue}const r=q.r*(.5+.5*u),gr=g.createRadialGradient(q.x,q.y,0,q.x,q.y,r);
    gr.addColorStop(0,`rgba(255,255,255,${(.9*(1-u)).toFixed(3)})`);gr.addColorStop(.35,q.c);gr.addColorStop(1,'rgba(0,0,0,0)');g.globalAlpha=(1-u)*.85;g.fillStyle=gr;g.beginPath();g.arc(q.x,q.y,r,0,6.283);g.fill()}
  for(let i=rays.length-1;i>=0;i--){const q=rays[i],u=(t-q.t0)/.32;if(u>=1){rays.splice(i,1);continue}const e=1-Math.pow(1-u,2);g.globalAlpha=1-u;g.strokeStyle=q.c;g.lineCap='round';
    for(let k=0;k<10;k++){const a=q.a0+k/10*6.283,r0=14+50*e,r1=30+120*e;g.lineWidth=(k%2?3:5)*(1-u*.6);g.beginPath();g.moveTo(q.x+Math.cos(a)*r0,q.y+Math.sin(a)*r0);g.lineTo(q.x+Math.cos(a)*r1,q.y+Math.sin(a)*r1);g.stroke()}}
  for(let i=sparks.length-1;i>=0;i--){const p=sparks[i],u=t-p.t0;if(u>=p.life){sparks.splice(i,1);continue}const x=p.x+p.vx*u,y=p.y+p.vy*u+300*u*u,a=1-u/p.life;
    g.globalAlpha=a;g.strokeStyle=p.c;g.lineWidth=p.w*(.4+.6*a);g.lineCap='round';g.beginPath();g.moveTo(x,y);g.lineTo(x-p.vx*.05,y-(p.vy+600*u)*.05);g.stroke()}
  g.globalAlpha=1;g.globalCompositeOperation='source-over';
  for(let i=pops.length-1;i>=0;i--){const q=pops[i],u=(t-q.t0)/.75;if(u>=1){pops.splice(i,1);continue}const e=1-Math.pow(1-u,3),sc2=(u<.12?.6+.9*(u/.12):1.5)+.35*e,al=u<.55?1:1-(u-.55)/.45;
    g.save();g.translate(q.x,q.y-64*e);g.scale(sc2,sc2);g.globalAlpha=al;g.font=`900 ${FS+9}px ${MONO}`;g.textAlign='center';g.textBaseline='middle';g.lineJoin='round';
    g.lineWidth=7;g.strokeStyle='rgba(10,0,26,.75)';g.strokeText(q.w,0,0);g.shadowColor=q.c;g.shadowBlur=28;g.fillStyle=q.c;g.fillText(q.w,0,0);g.shadowBlur=0;if(u<.18){g.globalCompositeOperation='lighter';g.globalAlpha=(1-u/.18)*.9;g.fillStyle='#FFFFFF';g.fillText(q.w,0,0);g.globalCompositeOperation='source-over'}g.restore()}
  g.globalAlpha=1;
  // 터짐: 빛 고리 · 조각
  g.globalCompositeOperation='lighter';
  for(let i=rings.length-1;i>=0;i--){const r=rings[i],u=(t-r.t0)/(r.small?.3:r.mid?.4:.5);if(u>=1){rings.splice(i,1);continue}const e=1-Math.pow(1-u,3);g.globalAlpha=1-u;g.lineWidth=(r.small?4:r.mid?6:10)*(1-u)+1.5;g.strokeStyle='#FFFFFF';g.beginPath();g.arc(r.x,r.y,r.small?8+54*e:r.mid?12+110*e:40+260*e,0,6.283);g.stroke()}
  g.globalCompositeOperation='source-over';g.globalAlpha=1;
  for(let i=parts.length-1;i>=0;i--){const p=parts[i],u=t-p.t0;if(u>=p.life){parts.splice(i,1);continue}const x=p.x+p.vx*u,y=p.y+p.vy*u+600*u*u/2,a=1-u/p.life;g.globalAlpha=Math.min(1,a*1.5);g.fillStyle=p.c;
    if(p.sq){g.save();g.translate(x,y);g.rotate(p.r+u*6);g.fillRect(-p.s/2,-p.s/2,p.s,p.s);g.restore()}else{star4(x,y,p.s*1.3);g.fill()}}
  g.globalAlpha=1;
  // 「YOUR GAME — CREATED!」 (상자 없이 빛나는 글자)
  for(let i=stamps.length-1;i>=0;i--){const s=stamps[i],u=(t-s.t0)/1.4;if(u>=1){stamps.splice(i,1);continue}
    const sc=u<.14?.4+.85*(u/.14):u<.24?1.25-.25*((u-.14)/.1):1,al=u<.75?1:1-(u-.75)/.25;g.save();g.translate(300,620);g.rotate(-.08);g.scale(sc,sc);g.globalAlpha=al;g.textAlign='center';g.textBaseline='middle';g.lineJoin='round';
    g.font='900 24px "Nunito",sans-serif';g.lineWidth=6;g.strokeStyle='rgba(20,4,40,.75)';g.strokeText(`YOUR ${s.k}`,0,-46);g.shadowColor='#7FE6FF';g.shadowBlur=14;g.fillStyle='#E6F9FF';g.fillText(`YOUR ${s.k}`,0,-46);g.shadowBlur=0;
    g.font='900 64px "Nunito",sans-serif';g.lineWidth=12;g.strokeStyle='#2B0A45';g.strokeText('CREATED!',0,8);const tg=g.createLinearGradient(0,-24,0,40);tg.addColorStop(0,'#FFF3A0');tg.addColorStop(.6,'#FFB13B');tg.addColorStop(1,'#FF6A1F');
    g.shadowColor='#FFB13B';g.shadowBlur=24;g.fillStyle=tg;g.fillText('CREATED!',0,8);g.shadowBlur=0;
    g.font='800 16px "Nunito",sans-serif';g.lineWidth=5;g.strokeStyle='rgba(20,4,40,.7)';g.strokeText('✔ built with imagination',0,56);g.fillStyle='#9FF0CF';g.fillText('✔ built with imagination',0,56);g.restore()}
}
requestAnimationFrame(tick);
window.VJ_CODE={type,done,state:()=>({bi,li,ci,ver,K,prog,lines:lines.length,logs:logs.length})};
})();
