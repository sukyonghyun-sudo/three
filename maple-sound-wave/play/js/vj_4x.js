// 4배의 세계 연출 「쑥쑥 펠트 월드」 (2026-10-06 사용자: 「4배의 세계 이펙트가 밋밋 — 3D 캐릭터 · 속도 네가 조절하고, 컨셉에 어울리게 이펙트 더」)
//  컨셉: 메이플 플래닛 ~ 네 배로 크는 법 · 펠트 인형 세계 · EXP ×4
//  · 성장(js/dancer.js window.GROW4 와 같은 단계): 콤보 4 · 16 · 64 · 256 (4배씩!) — 캐릭터가 한 단계씩 쑥 클 때 발밑에 빛 고리 + 펠트 별 분수
//    (머리 옆 「×4 · ×16 · GROW UP!」 배지는 2026-10-06 사용자: 「이상해 — 빼줘」로 뺐어요) / 콤보가 끊기면 발밑에 펠트 먼지 뭉치가 퐁
//  · EXP 별: 퍼펙트 · 그레이트마다 레인 옆 판정선에서 펠트 별이 튀어 올라 캐릭터 가슴으로 쏙 (D · F → 왼쪽 소년, J · K → 오른쪽 신사) — 닿으면 반짝
//  · 단추 비: 신나는 마디(후렴 — 채보 hs.lv 2)엔 박자마다 4구멍 단추 · 하트 · 별 · 동그라미 펠트 조각이 좌우 하늘에서 살랑살랑
//  · 「4배가 좋아 · 4배가 최고」 가사 때 머리 위로 펠트 하트 · 피버 · 50콤보 때 발밑에서 펠트 폭죽
//  · 캔버스 두 장: 뒤(#monBox 바로 앞 — 단추 비 · 분수 · 먼지: 캐릭터 뒤로 지나가서 얼굴을 안 가려요) · 앞(#monBox 바로 다음 — EXP 별 · 고리 · 반짝이 · 가사 하트)
//  · engine.js burst(l,k) 에서 FX4.hit (몇 번 레인인지 알아야 해서) · 일시정지 땐 멈춰요 (자체 시계 T)
(function(){
const $=id=>document.getElementById(id),mb=$('monBox');if(!mb||!$('stage'))return;
const SONG='yonbai';
const cv=document.createElement('canvas');cv.className='artpanels f4x';mb.after(cv);const gF=cv.getContext('2d');
const cvB=document.createElement('canvas');cvB.className='artpanels f4x';mb.before(cvB);const gB=cvB.getContext('2d');let g=gF;
let PR=1,cw=0,ch=0;
function size(){const pr=Math.min(1.5,(devicePixelRatio||1)*(window.STAGE_K||1)),w=Math.round(1920*pr),h=Math.round(1080*pr);if(w!==cw||h!==ch){PR=pr;cw=cv.width=cvB.width=w;ch=cv.height=cvB.height=h}}
addEventListener('resize',()=>setTimeout(size,30));
const rnd=(a,b)=>a+Math.random()*(b-a),clamp=(x,a,b)=>x<a?a:x>b?b:x;
const backOut=x=>{const c=1.70158;return 1+(c+1)*Math.pow(x-1,3)+c*Math.pow(x-1,2)},inBack=x=>{const c=1.70158;return (c+1)*x*x*x-c*x*x};
// ---- 펠트 조각 그림 (한 번만 그려 둬요) ----
const FELT=['#FF8FB8','#FFD54A','#7FD0FF','#86E0A8','#C3A6FF','#FF9E7A'];
function shade(hex,k){const n=parseInt(hex.slice(1),16),c=[n>>16,n>>8&255,n&255].map(v=>Math.round(k<0?v*(1+k):v+(255-v)*k));return `rgb(${c[0]},${c[1]},${c[2]})`}
function mk(w,h,f){const c=document.createElement('canvas');c.width=Math.ceil(w);c.height=Math.ceil(h);f(c.getContext('2d'),c.width,c.height);return c}
function starP(x,cx,cy,r,n,k){x.beginPath();for(let i=0;i<n*2;i++){const rr=i%2?r*k:r,a=-Math.PI/2+i*Math.PI/n,px=cx+Math.cos(a)*rr,py=cy+Math.sin(a)*rr;i?x.lineTo(px,py):x.moveTo(px,py)}x.closePath()}
function heartP(x,cx,cy,r){x.beginPath();x.moveTo(cx,cy+r*.9);x.bezierCurveTo(cx-r*1.25,cy+r*.05,cx-r*1.05,cy-r,cx,cy-r*.42);x.bezierCurveTo(cx+r*1.05,cy-r,cx+r*1.25,cy+r*.05,cx,cy+r*.9);x.closePath()}
function circP(x,cx,cy,r){x.beginPath();x.arc(cx,cy,r,0,6.2832)}
// 펠트: 색 · 보풀 점 · 가장자리 그늘 · 안쪽 바느질 땀 · 바깥 선 (u = 모양 크기 기준)
function feltFill(x,P,col,stitch,u){const w=x.canvas.width,h=x.canvas.height;x.save();P(1);x.fillStyle=col;x.fill();x.clip();
  const N=w*h/10;for(let i=0;i<N;i++){x.fillStyle=Math.random()<.5?'rgba(255,255,255,.14)':'rgba(70,20,60,.09)';x.fillRect(Math.random()*w,Math.random()*h,1.3,1.3)}
  P(1);x.lineWidth=Math.max(4,u*.13);x.strokeStyle='rgba(70,20,70,.2)';x.stroke();x.restore();
  if(stitch){x.save();P(.72);x.setLineDash([Math.max(3,u*.075),Math.max(2.5,u*.06)]);x.lineCap='round';x.lineWidth=Math.max(1.4,u*.034);x.strokeStyle=stitch;x.stroke();x.restore()}
  P(1);x.lineWidth=Math.max(1.2,u*.026);x.strokeStyle=shade(col,-.32);x.stroke()}
const SP={};
function piece(kind,ci){const key=kind+ci;if(SP[key])return SP[key];const col=FELT[ci%FELT.length],S=kind==='dot'?30:48;
  return SP[key]=mk(S,S,(x,w,h)=>{const cx=w/2,cy=h/2,r=w*.4;x.lineJoin='round';
    if(kind==='button'){   // 4구멍 단추 (4배!): 테 · 구멍 넷 · 십자 실 · 반들반들
      circP(x,cx,cy,r);x.fillStyle=col;x.fill();x.lineWidth=2;x.strokeStyle=shade(col,-.35);x.stroke();
      circP(x,cx,cy,r*.72);x.lineWidth=2.4;x.strokeStyle=shade(col,-.18);x.stroke();
      const gr=x.createRadialGradient(cx-r*.35,cy-r*.4,1,cx,cy,r);gr.addColorStop(0,'rgba(255,255,255,.55)');gr.addColorStop(.5,'rgba(255,255,255,0)');circP(x,cx,cy,r);x.fillStyle=gr;x.fill();
      const d=r*.26,H=[[-d,-d],[d,-d],[d,d],[-d,d]];x.strokeStyle='#FFFFFF';x.lineWidth=2.4;x.lineCap='round';x.beginPath();x.moveTo(cx+H[0][0],cy+H[0][1]);x.lineTo(cx+H[2][0],cy+H[2][1]);x.moveTo(cx+H[1][0],cy+H[1][1]);x.lineTo(cx+H[3][0],cy+H[3][1]);x.stroke();
      for(const [a,b] of H){circP(x,cx+a,cy+b,r*.1);x.fillStyle=shade(col,-.5);x.fill()}return}
    if(kind==='puff'){circP(x,cx,cy,r);const gr=x.createRadialGradient(cx-r*.3,cy-r*.3,1,cx,cy,r);gr.addColorStop(0,'#FFFFFF');gr.addColorStop(1,'#E6DDF2');x.fillStyle=gr;x.fill();return}   // 먼지 뭉치 (솜)
    const P=s=>kind==='star'?starP(x,cx,cy+r*.06,r*s*1.05,5,.5):kind==='heart'?heartP(x,cx,cy+r*.05,r*s):circP(x,cx,cy,r*s);
    feltFill(x,P,col,kind==='dot'?null:'rgba(255,255,255,.92)',w)})}
const BCOL=['#FF8FB8','#FFD54A','#86E0A8','#C3A6FF'];   // 성장 단계 색 (발밑 고리)
// ---- 상태 ----
let T=0,lastT=performance.now(),live=false,dirty=false,lastBeat=-1,stage=0,prevCombo=0,pt=[],stars=[],rings=[],rain=[],sparks=[];
const MAXP=180;
function reset(){T=0;pt=[];stars=[];rings=[];rain=[];sparks=[];stage=0;prevCombo=0;lastBeat=-1}
// 캐릭터 자리 (무대 px) — js/dancer.js window.DANCER_POS, 없으면 기본 자리
function pos(who){const D=window.DANCER_POS,p=D&&D[who];return p||(who==='b'?{x:345,head:450,feet:1000}:{x:1565,head:350,feet:1000})}
const chest=p=>[p.x,p.feet-(p.feet-p.head)*.55];
const laneX=(u,y)=>typeof xOf==='function'&&typeof sAtY==='function'?xOf(u,sAtY(y)):(u<2?700:1220);
function addP(o){if(pt.length<MAXP)pt.push(Object.assign({vx:0,vy:0,gr:0,rot:rnd(0,6.28),vr:rnd(-5,5),s:1,t0:T,life:1,fade:.35},o))}
function fountain(who,n,kinds,pw){const p=pos(who);for(let i=0;i<n;i++){const k=kinds[i%kinds.length],side=who==='b'?-1:1;addP({k,ci:Math.floor(rnd(0,6)),x:p.x+rnd(-60,60),y:p.feet-10,vx:(rnd(-120,260)*side)*pw,vy:-rnd(420,700)*pw,gr:950,s:rnd(.75,1.15),life:rnd(1,1.4),back:1})}}   /* 바깥쪽(화면 가장자리 쪽)으로 더 퍼지게 · 캐릭터 뒤로 */
function grow(n){const t=T;for(const w of ['b','g']){rings.push({who:w,t0:t+(w==='g'?.1:0),col:BCOL[(n-1)%4]});fountain(w,12,['star','star','dot','button'],1)}}
function puff(){for(const w of ['b','g']){const p=pos(w);for(let i=0;i<9;i++){const a=rnd(Math.PI*.95,Math.PI*2.05);addP({k:'puff',ci:0,x:p.x+rnd(-40,40),y:p.feet-14,vx:Math.cos(a)*rnd(60,170),vy:Math.sin(a)*rnd(20,90)-30,gr:-20,vr:rnd(-1,1),s:rnd(.8,1.4),life:rnd(.6,.9),fade:.6,back:1})}}}
// 노트 맞힘 → EXP 별 (레인 옆 판정선 → 캐릭터 가슴)
const LCI=[0,4,2,3];
function hit(l,k){if(!live||(k!=='p'&&k!=='gr')||stars.length>14)return;const left=l<2,y0=(typeof G!=='undefined'?G.yJ:907)-26,x0=laneX(left?0:4,y0)+(left?-16:16);
  stars.push({who:left?'b':'g',x0,y0,t0:T,dur:k==='p'?.44:.5,ci:LCI[l]||0,s:k==='p'?1:.78,rot:rnd(0,6.28),vr:rnd(-9,9)})}
// 판정 반응 (피버 · 50콤보)
const orig=window.monsterReact;window.monsterReact=k=>{orig&&orig(k);if(!live)return;if(k==='cheer'){fountain('b',12,['heart','star','button','dot'],1.15);fountain('g',12,['heart','star','button','dot'],1.15)}};
// ---- 그리기 ----
function blit(img,x,y,s,rot,a){if(a<=0||s<=0)return;const c=Math.cos(rot)*s*PR,sn=Math.sin(rot)*s*PR;g.setTransform(c,sn,-sn,c,x*PR,y*PR);g.globalAlpha=a;g.drawImage(img,-img.width/2,-img.height/2)}
function spark4(x,y,r,a){g.setTransform(PR,0,0,PR,x*PR,y*PR);g.globalAlpha=a;g.beginPath();for(let i=0;i<8;i++){const rr=i%2?r*.28:r,an=i/8*6.2832-1.5708;g.lineTo(Math.cos(an)*rr,Math.sin(an)*rr)}g.closePath();g.fillStyle='#FFFFFF';g.fill()}
function tick(){requestAnimationFrame(tick);
  const sid=typeof SONGS!=='undefined'&&SONGS[cur]?SONGS[cur].id:'',isPlay=typeof playing!=='undefined'&&playing,on=sid===SONG&&isPlay&&typeof G!=='undefined'&&G.land&&window.VJ_MODE!=='off';
  if(on&&!live)reset();live=on;cv.classList.toggle('on',on);cvB.classList.toggle('on',on);
  if(!on){if(dirty){for(const c of [gF,gB]){c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height)}dirty=false}return}size();
  const pn=performance.now(),dt=Math.min(.05,(pn-lastT)/1000);lastT=pn;if(typeof paused!=='undefined'&&paused)return;T+=dt;
  // 성장 단계 (dancer.js 와 같은 단계 — 없으면 콤보로)
  const c=typeof combo!=='undefined'?combo:0,GR=window.GROW4;let n=0;if(GR&&GR.st&&GR.st.on)n=GR.st.stage;else for(const x of (GR?GR.th:[4,16,64,256]))if(c>=x)n++;
  if(n>stage)grow(n);else if(n<stage&&stage>0)puff();stage=n;prevCombo=c;
  // 박자마다: 후렴엔 펠트 단추 비 · 가사 구간엔 머리 위 하트
  const st=typeof now==='function'?now():0,bt=typeof beatAt==='function'?beatAt(st):T*1.7,bi=Math.floor(bt*2);
  if(bi!==lastBeat&&bt>0){lastBeat=bi;const dw=GR&&GR.st?GR.st.dw:0;
    if(dw>.5&&bi%2===0&&rain.length<30)for(let i=0,nn=bi%8===0?2:1;i<nn;i++){const left=Math.random()<.5,x=left?rnd(40,560):rnd(1360,1880),kinds=['button','heart','star','dot','button'];rain.push({k:kinds[Math.floor(rnd(0,kinds.length))],ci:Math.floor(rnd(0,6)),x,y:-30,vy:rnd(110,175),sw:rnd(14,30),ph:rnd(0,6.28),fq:rnd(.8,1.4),rot:rnd(0,6.28),vr:rnd(-2.5,2.5),s:rnd(.75,1.15)})}
    if(st>27.85&&st<30.45)for(const w of ['b','g']){const p=pos(w);addP({k:'heart',ci:Math.random()<.6?0:5,x:p.x+rnd(-70,70),y:p.head-10,vx:rnd(-40,40),vy:-rnd(130,200),gr:-30,vr:rnd(-1.5,1.5),s:rnd(.8,1.25),life:1.3,fade:.5})}}
  dirty=true;for(const c of [gF,gB]){c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height)}g=gB;   /* 뒤 캔버스 먼저: 단추 비 · 분수 · 먼지 */
  const hitP=Math.exp(-(bt-Math.floor(bt))*6);
  // 단추 비
  for(let i=rain.length-1;i>=0;i--){const r=rain[i];r.y+=r.vy*dt;r.rot+=r.vr*dt;if(r.y>1120){rain.splice(i,1);continue}blit(piece(r.k,r.ci),r.x+Math.sin(T*r.fq*6.2832+r.ph)*r.sw,r.y,r.s,r.rot+Math.sin(T*2+r.ph)*.3,.95)}
  for(let i=pt.length-1;i>=0;i--){const p=pt[i];if(!p.back)continue;const u=(T-p.t0)/p.life;if(u>=1){pt.splice(i,1);continue}const tt=T-p.t0,x=p.x+p.vx*tt,y=p.y+p.vy*tt+p.gr*tt*tt/2,a=u<1-p.fade?1:(1-u)/p.fade,s=p.s*(p.k==='puff'?1+u*.8:1);blit(piece(p.k,p.ci),x,y,s,p.rot+p.vr*tt,a)}
  g.globalAlpha=1;g=gF;   /* 앞 캔버스: 고리 · EXP 별 · 앞 조각 · 반짝이 */
  // 발밑 빛 고리
  for(let i=rings.length-1;i>=0;i--){const r=rings[i],u=(T-r.t0)/.65;if(u<0)continue;if(u>=1){rings.splice(i,1);continue}const p=pos(r.who),e=1-Math.pow(1-u,3),rx=50+250*e*(window.DANCER_POS?DANCER_POS.sc:1);
    g.setTransform(PR,0,0,PR,0,0);g.globalAlpha=1-u;g.lineWidth=7*(1-u)+1.5;g.strokeStyle='#FFFFFF';g.beginPath();g.ellipse(p.x,p.feet-6,rx,rx*.22,0,0,6.2832);g.stroke();g.lineWidth=4*(1-u)+1;g.strokeStyle=r.col;g.beginPath();g.ellipse(p.x,p.feet-6,rx*.78,rx*.17,0,0,6.2832);g.stroke()}
  // EXP 별: 포물선으로 날아가 가슴에 쏙
  for(let i=stars.length-1;i>=0;i--){const q=stars[i],u=(T-q.t0)/q.dur;const [x1,y1]=chest(pos(q.who));
    if(u>=1){stars.splice(i,1);for(let j=0;j<6;j++)sparks.push({x:x1+rnd(-26,26),y:y1+rnd(-26,26),t0:T,life:rnd(.25,.4),r:rnd(7,13)});addP({k:'dot',ci:q.ci,x:x1,y:y1,vx:rnd(-90,90),vy:rnd(-140,-40),gr:500,s:.7,life:.45});continue}
    const cx=(q.x0+x1)/2,cy=Math.min(q.y0,y1)-170,a=1-u,x=a*a*q.x0+2*a*u*cx+u*u*x1,y=a*a*q.y0+2*a*u*cy+u*u*y1,s=q.s*(u<.2?.6+2*u:u>.8?1-(u-.8)*2.5:1);
    if(Math.random()<.6)sparks.push({x:x+rnd(-6,6),y:y+rnd(-6,6),t0:T,life:.22,r:rnd(3,6)});blit(piece('star',q.ci),x,y,s,q.rot+q.vr*(T-q.t0),1)}
  // 펠트 조각 (분수 · 하트 · 먼지)
  for(let i=pt.length-1;i>=0;i--){const p=pt[i];if(p.back)continue;const u=(T-p.t0)/p.life;if(u>=1){pt.splice(i,1);continue}const tt=T-p.t0,x=p.x+p.vx*tt,y=p.y+p.vy*tt+p.gr*tt*tt/2,a=u<1-p.fade?1:(1-u)/p.fade,s=p.s*(p.k==='puff'?1+u*.8:1);blit(piece(p.k,p.ci),x,y,s,p.rot+p.vr*tt,a)}
  // 반짝이
  g.globalCompositeOperation='lighter';for(let i=sparks.length-1;i>=0;i--){const k=sparks[i],u=(T-k.t0)/k.life;if(u>=1){sparks.splice(i,1);continue}spark4(k.x,k.y,k.r*(1-u*.5),1-u)}g.globalCompositeOperation='source-over';
  g.globalAlpha=1;g.setTransform(1,0,0,1,0,0)}
requestAnimationFrame(tick);
window.FX4={hit,test:n=>grow(n||1),state:()=>({stage,stars:stars.length,pt:pt.length,rain:rain.length})};   // test: 확인용 (성장 고리 · 분수 바로)
})();
