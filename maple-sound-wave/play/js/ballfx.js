// 픽몬 볼 모션그래픽 (2026-10-06 사용자: 「PICKMON BY MY SIDE 이펙트가 밋밋 — 중간중간 노트 성공할 때 공이 튀어올라 터지게 · 사이즈는 적당하게」
//   → 「노트에서 터지는 게 아니라 좌우 화면에서 · 모션그래픽으로 · 옆에서 가끔씩 밑에서 올라와서 빵빵 터지게」 → 「쪼개지는 것 같아 — 팡 하고 터지게」)
//  · 곡: PICKMON BY MY SIDE (id pictra) 플레이 중에만
//  · 언제: 퍼펙트 · 그레이트로 20콤보마다 — 왼쪽 · 오른쪽에서 한 개씩 0.16초 차이로 「팡 팡」, 50콤보마다는 양쪽 두 개씩
//  · 어디서: 레인 밖 좌우 빈자리 — 화면 아래 바깥에서 공(지름 약 110)이 빙글 돌며 쭉 올라와(0.6초 · 점점 느려지게, 꼬리 빛줄기 + 반짝이)
//  · 팡: 꼭대기에서 순간 빵빵하게 부풀며 하얗게 달아올랐다가(0.09초) 사라지면서 — 큰 하얀 번쩍 · 충격파 고리 두 겹 · 사방 빛줄기(만화 효과선) ·
//    주황 · 빨강 · 흰 조각 + 노란 반짝이 + 작은 방울 · 「팡!」 글자가 툭 튀어나와요 (공은 갈라지지 않고 통째로 터져요)
//  · engine.js: burst(l,k) 에서 BALLFX.hit · draw 에서 BALLFX.draw (타격 이펙트 위 · 왼쪽 위 점수 판 같은 화면 글자 판은 그 위에 있어요)
(function(){
const SONG='pictra',D=110,EVERY=20,BIG=50,GAP=.16,HOLD=.09;
let img=null,balls=[],bits=[],rings=[],flashes=[],rays=[],words=[],trail=[],lastCombo=-1;
function ready(){if(img)return img.complete&&img.naturalWidth>0;const u=window.PICKBALL_URL;if(!u)return false;img=new Image();img.crossOrigin='anonymous';img.src=u;return false}
const on=()=>typeof playing!=='undefined'&&playing&&window.SONGS&&SONGS[cur]&&SONGS[cur].id===SONG;
const nowS=()=>performance.now()/1000;
const clear=()=>{balls=[];bits=[];rings=[];flashes=[];rays=[];words=[];trail=[];lastCombo=-1};
// 공 한 개 쏘기 — side: -1 왼쪽 · 1 오른쪽 (레인 밖 빈자리), ts: 출발 시각
function launch(side,ts){const lx=xOf(0,1),rx=xOf(4,1),L0=W*.07,L1=Math.max(L0+80,lx-190),R0=Math.min(W*.93-80,rx+190),R1=W*.93;
  balls.push({x0:side<0?L0+Math.random()*(L1-L0):R0+Math.random()*(R1-R0),y0:H+70,dx:(Math.random()-.5)*90,yA:side<0?390+Math.random()*160:300+Math.random()*220,
    ts,T:.56+Math.random()*.12,spin:(Math.random()<.5?-1:1)*(4+Math.random()*3),r0:Math.random()*6.28,s:.92+Math.random()*.2})}
function volley(n){const t=nowS();let side=Math.random()<.5?-1:1;for(let i=0;i<n*2;i++){launch(side,t+i*GAP);side=-side}}
function hit(l,k){if(!on()||!ready())return;if(k!=='p'&&k!=='gr')return;const c=typeof combo!=='undefined'?combo:0;if(c<=0||c===lastCombo)return;
  if(c%BIG===0){lastCombo=c;volley(2)}else if(c%EVERY===0){lastCombo=c;volley(1)}}
// 팡! — t: 그리는 시각 그대로 (pop 안에서 시각을 다시 재면 이번 그림보다 늦어져 번쩍 반지름이 어긋나요)
function pop(b,t){const x=b.x0+b.dx,y=b.yA,s=b.s;
  flashes.push({x,y,t0:t,s});
  rings.push({x,y,t0:t,r0:40,r1:250*s,d:.36,c:'#FFFFFF',w:10},{x,y,t0:t+.04,r0:26,r1:175*s,d:.34,c:'#FF8A2B',w:5});
  const a0=Math.random()*6.283;for(let i=0;i<12;i++)rays.push({x,y,t0:t,a:a0+i/12*6.283+(Math.random()-.5)*.18,len:(150+Math.random()*90)*s,w:i%2?4:7});
  const C=['#FF8A2B','#E8402A','#FFFFFF','#FFB347','#FFFFFF'];
  for(let i=0;i<24;i++){const a=i/24*6.283+Math.random()*.26,sp=380+Math.random()*420;bits.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-150,rot:Math.random()*6.28,vr:(Math.random()-.5)*16,s:8+Math.random()*10,c:C[i%C.length],t0:t,life:.62+Math.random()*.25,k:'tri'})}
  for(let i=0;i<10;i++){const a=Math.random()*6.283,sp=180+Math.random()*280;bits.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-100,rot:0,vr:0,s:12+Math.random()*10,c:'#FFE27A',t0:t,life:.72,k:'star'})}
  for(let i=0;i<14;i++){const a=Math.random()*6.283,sp=260+Math.random()*380;bits.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-120,rot:0,vr:0,s:3+Math.random()*4,c:['#FFFFFF','#FFD1E8','#FFE27A'][i%3],t0:t,life:.5+Math.random()*.2,k:'dot'})}
  words.push({x:x+(Math.random()-.5)*30,y:y-8,t0:t+.02,rot:(Math.random()-.5)*.35,s})}
function tri(g,s){g.beginPath();g.moveTo(0,-s);g.lineTo(s*.87,s*.5);g.lineTo(-s*.87,s*.5);g.closePath()}
function star4(g,s){g.beginPath();for(let i=0;i<8;i++){const r=i%2?s*.32:s,a=i/8*6.283-1.571;g.lineTo(Math.cos(a)*r,Math.sin(a)*r)}g.closePath()}
function draw(g){if(!on()){if(balls.length||bits.length||rings.length||rays.length||flashes.length||words.length||trail.length)clear();return}
  if(!img)ready();if(!img||!img.complete||!img.naturalWidth)return;
  const t=nowS(),K=D/Math.max(img.naturalWidth,img.naturalHeight);g.save();
  // 꼬리 반짝이
  g.globalCompositeOperation='lighter';
  for(let i=trail.length-1;i>=0;i--){const p=trail[i],u=(t-p.t0)/p.life;if(u>=1){trail.splice(i,1);continue}g.globalAlpha=(1-u)*.85;g.fillStyle=i%3?'#FFE6B0':'#FFFFFF';g.beginPath();g.arc(p.x,p.y+u*18,p.s*(1-u*.6),0,6.283);g.fill()}
  g.globalCompositeOperation='source-over';g.globalAlpha=1;
  // 공: 아래에서 쭉 올라와 꼭대기에서 빵빵하게 부풀며 하얗게 달아올랐다가 팡
  for(let i=balls.length-1;i>=0;i--){const b=balls[i],u=t-b.ts;if(u<0)continue;
    if(u>b.T+HOLD){pop(b,t);balls.splice(i,1);continue}
    const p=Math.min(1,u/b.T),e=1-Math.pow(1-p,3),x=b.x0+b.dx*e,y=b.y0+(b.yA-b.y0)*e;let sc=b.s*(.82+.18*e)*K,sx=1,sy=1,fl=0;
    if(p<1){const v=1-e;sy=1+.18*v;sx=1-.09*v;   // 빠르게 올라올 때 세로로 쭉
      const tl=40+170*(1-e),tg=g.createLinearGradient(0,y,0,y+tl);tg.addColorStop(0,'rgba(255,186,110,.6)');tg.addColorStop(1,'rgba(255,186,110,0)');   // 꼬리 빛줄기
      g.globalCompositeOperation='lighter';g.fillStyle=tg;g.beginPath();g.ellipse(x,y+tl/2,D*.2*b.s,tl/2,0,0,6.283);g.fill();g.globalCompositeOperation='source-over';
      if(Math.random()<.7)trail.push({x:x+(Math.random()-.5)*D*.45,y:y+D*.3,t0:t,life:.32+Math.random()*.22,s:2.5+Math.random()*3.5})}
    else{const q=(u-b.T)/HOLD,w2=q<.55?q/.55:1;sc*=1+.42*w2;fl=q;sx=1+.06*Math.sin(q*40);sy=2-sx}   // 꼭대기: 빵빵하게 부풀며 부르르 · 하얗게
    const w=img.naturalWidth*sc,h=img.naturalHeight*sc;g.save();g.translate(x,y);g.scale(sx,sy);g.rotate(b.r0+b.spin*u);
    if(!window.MOB){g.shadowColor=fl>0?'rgba(255,240,200,.9)':'rgba(255,138,43,.6)';g.shadowBlur=22+30*fl}g.drawImage(img,-w/2,-h/2,w,h);g.shadowBlur=0;   // 모바일: 그림자 번짐 없이
    if(fl>0){g.globalCompositeOperation='lighter';g.globalAlpha=Math.min(1,fl*1.1);g.drawImage(img,-w/2,-h/2,w,h)}
    g.restore()}
  g.globalCompositeOperation='lighter';
  // 큰 하얀 번쩍
  for(let i=flashes.length-1;i>=0;i--){const f=flashes[i],u=(t-f.t0)/.2;if(u<0)continue;if(u>=1){flashes.splice(i,1);continue}const r=(70+170*Math.pow(u,.45))*f.s,rg=g.createRadialGradient(f.x,f.y,0,f.x,f.y,r);
    rg.addColorStop(0,`rgba(255,255,255,${(1-u).toFixed(3)})`);rg.addColorStop(.4,`rgba(255,214,150,${(.6*(1-u)).toFixed(3)})`);rg.addColorStop(1,'rgba(255,160,60,0)');g.globalAlpha=1;g.fillStyle=rg;g.beginPath();g.arc(f.x,f.y,r,0,6.283);g.fill()}
  // 사방 빛줄기 (만화 효과선)
  for(let i=rays.length-1;i>=0;i--){const r=rays[i],u=(t-r.t0)/.26;if(u<0)continue;if(u>=1){rays.splice(i,1);continue}const e=1-Math.pow(1-u,2),r0=24+r.len*.45*e,r1=40+r.len*e,c=Math.cos(r.a),sn=Math.sin(r.a);
    g.globalAlpha=1-u;g.strokeStyle=i%3?'#FFF3C4':'#FFFFFF';g.lineWidth=r.w*(1-u*.7);g.lineCap='round';g.beginPath();g.moveTo(r.x+c*r0,r.y+sn*r0);g.lineTo(r.x+c*r1,r.y+sn*r1);g.stroke()}
  g.globalCompositeOperation='source-over';
  // 충격파 고리
  for(let i=rings.length-1;i>=0;i--){const r=rings[i],u=(t-r.t0)/r.d;if(u<0)continue;if(u>=1){rings.splice(i,1);continue}const e=1-Math.pow(1-u,3);
    g.globalAlpha=(1-u)*.95;g.lineWidth=r.w*(1-u)+1.5;g.strokeStyle=r.c;g.beginPath();g.arc(r.x,r.y,r.r0+(r.r1-r.r0)*e,0,6.283);g.stroke()}
  g.globalAlpha=1;
  // 조각 · 반짝이 · 방울
  for(let i=bits.length-1;i>=0;i--){const p=bits[i],u=t-p.t0;if(u>=p.life){bits.splice(i,1);continue}
    const dr=Math.exp(-2.2*u),x=p.x+p.vx*(1-dr)/2.2,y=p.y+p.vy*(1-dr)/2.2+700*u*u/2,a=1-u/p.life;g.save();g.translate(x,y);g.rotate(p.rot+p.vr*u);g.globalAlpha=Math.min(1,a*1.4);   // 처음엔 빠르게 퍼졌다가 공기 저항으로 느려지며 떨어져요
    if(p.k==='star'){star4(g,p.s*(.6+.4*a));g.fillStyle=p.c;g.fill()}else if(p.k==='dot'){g.beginPath();g.arc(0,0,p.s*(.5+.5*a),0,6.283);g.fillStyle=p.c;g.fill()}
    else{tri(g,p.s);g.fillStyle=p.c;g.fill();g.lineWidth=1.6;g.strokeStyle='rgba(43,10,69,.55)';g.stroke()}
    g.restore()}
  // 「팡!」 글자
  for(let i=words.length-1;i>=0;i--){const w=words[i],u=(t-w.t0)/.55;if(u<0)continue;if(u>=1){words.splice(i,1);continue}
    const sc=(u<.18?.35+.95*(u/.18):u<.3?1.3-.3*((u-.18)/.12):1)*w.s,al=u<.62?1:1-(u-.62)/.38;g.save();g.translate(w.x,w.y-26*u);g.rotate(w.rot);g.scale(sc,sc);g.globalAlpha=al;
    g.font='48px "Jua","NanumSquareRound",sans-serif';g.textAlign='center';g.textBaseline='middle';g.lineJoin='round';
    g.lineWidth=11;g.strokeStyle='#2B0A45';g.strokeText('팡!',0,0);g.lineWidth=5;g.strokeStyle='#FFFFFF';g.strokeText('팡!',0,0);
    const tg=g.createLinearGradient(0,-22,0,22);tg.addColorStop(0,'#FFF3A0');tg.addColorStop(.55,'#FFB13B');tg.addColorStop(1,'#FF6A1F');g.fillStyle=tg;g.fillText('팡!',0,0);g.restore()}
  g.restore()}
window.BALLFX={hit,draw,clear,volley:n=>{if(on()&&ready())volley(n||1)}};   // volley: 확인용 (바로 쏘기)
})();
