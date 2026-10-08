// ===== 타격 이펙트 「섬광 폭발」 =====
// 노트를 맞힌 자리에서 하얀 섬광 + 가로 플레어, 퍼지는 링, 사방으로 튀는 별, 레인 위로 솟는 빛기둥, 알록달록 색종이가 터져요.
// 엔진의 burst() 가 설정(타격 이펙트 = 섬광 폭발)일 때 HITFX.spawn 을 부르고, draw() 가 판정 글자 바로 아래에 HITFX.draw 를 그려요.
// 화면은 흔들지 않아요. 시간 기준(초)으로 움직여서 화면 주사율이 달라도 같은 속도예요.
window.HITFX=(()=>{
const TAU=Math.PI*2,rnd=(a,b)=>a+Math.random()*(b-a);
const CONF=['#FFE36E','#7CF0FF','#FF9BD0','#A8FFB8','#C9A8FF','#FFFFFF'];
// ---- 미리 그려 두는 그림 (한 번만) ----
function cv(w,h,f){const c=document.createElement('canvas');c.width=w;c.height=h;f(c.getContext('2d'),w,h);return c}
const GLOW=cv(256,256,(x,w)=>{const r=x.createRadialGradient(w/2,w/2,0,w/2,w/2,w/2);
  r.addColorStop(0,'rgba(255,255,255,1)');r.addColorStop(.18,'rgba(255,255,255,.95)');r.addColorStop(.42,'rgba(255,190,235,.45)');r.addColorStop(1,'rgba(255,120,210,0)');x.fillStyle=r;x.fillRect(0,0,w,w)});
const FLARE=cv(512,64,(x,w,h)=>{x.translate(w/2,h/2);x.scale(1,h/w);const r=x.createRadialGradient(0,0,0,0,0,w/2);
  r.addColorStop(0,'rgba(255,255,255,1)');r.addColorStop(.25,'rgba(255,255,255,.7)');r.addColorStop(.6,'rgba(190,230,255,.25)');r.addColorStop(1,'rgba(160,210,255,0)');x.fillStyle=r;x.beginPath();x.arc(0,0,w/2,0,TAU);x.fill()});
const BLOOM=cv(256,256,(x,w)=>{const r=x.createRadialGradient(w/2,w/2,0,w/2,w/2,w/2);
  r.addColorStop(0,'rgba(255,170,225,.9)');r.addColorStop(.45,'rgba(255,120,200,.35)');r.addColorStop(1,'rgba(200,120,255,0)');x.fillStyle=r;x.fillRect(0,0,w,w)});
// 별: 하얀 5각 별 (가장자리 살짝 번짐)
const STAR=cv(96,96,(x,w)=>{x.translate(w/2,w/2);x.shadowColor='rgba(255,200,240,.9)';x.shadowBlur=10;x.fillStyle='rgba(255,255,255,.95)';x.beginPath();
  for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?14:34;x.lineTo(Math.cos(a)*r,Math.sin(a)*r)}x.closePath();x.fill()});
// 반짝이: 가는 4갈래 빛
const TWINK=cv(96,96,(x,w)=>{x.translate(w/2,w/2);const r=x.createRadialGradient(0,0,0,0,0,10);r.addColorStop(0,'#fff');r.addColorStop(1,'rgba(255,255,255,0)');
  x.fillStyle=r;x.fillRect(-10,-10,20,20);x.fillStyle='#fff';for(let i=0;i<4;i++){x.rotate(Math.PI/2);x.beginPath();x.moveTo(0,-3);x.lineTo(46,0);x.lineTo(0,3);x.closePath();x.fill()}});
const SIZE={p:1,gr:.8,g:.6};
let fx=[],last=0;
function spawn(l,k){const s=SIZE[k]||.6,x=xOf(l+.5,1),y=G.yJ,lw=xOf(l+1,1)-xOf(l,1),c=LC[l],t=performance.now()/1000,boost=fever?1.2:1,LT=!!window.MOB,zs=LT?.62:1;   // 모바일: 빛은 작게 · 조각은 적게 (넓은 더하기 섞기가 폰에서 무거워요)
  fx.push({type:'bloom',x,y,t,life:.5,size:lw*4.2*s*boost*zs});            // 넓게 번지는 분홍 빛
  fx.push({type:'core',x,y,t,life:.4,size:lw*2.7*s*boost*zs});              // 한가운데 하얀 섬광
  fx.push({type:'flare',x,y,t,life:.32,w:lw*(k==='p'?4.8:3.4)*boost*zs,h:lw*.46});
  fx.push({type:'pillar',l,t,life:.34,c,s});
  fx.push({type:'ring',x,y,t,life:.42,r0:lw*.35,r1:lw*(1.15+.45*s),c:'#fff',w:5*s+2});
  if(k==='p')fx.push({type:'ring',x,y,t:t+.05,life:.4,r0:lw*.2,r1:lw*1.1,c,w:4});
  const ns=Math.round((k==='p'?9:k==='gr'?6:4)*boost*(LT?.55:1));
  for(let i=0;i<ns;i++){const a=-Math.PI/2+rnd(-1.35,1.35),sp=lw*rnd(2.2,4.6)*s;
    fx.push({type:i%3?'star':'twink',x,y,t,life:rnd(.45,.7),vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,rot:rnd(0,TAU),vr:rnd(-5,5),sz:lw*rnd(.28,.46)*(i%3?1:1.3)})}
  const nc=Math.round((k==='p'?16:k==='gr'?10:6)*boost*(LT?.5:1));
  for(let i=0;i<nc;i++){const a=-Math.PI/2+rnd(-1.5,1.5),sp=lw*rnd(2,4.6)*s;
    fx.push({type:'conf',x:x+rnd(-lw*.3,lw*.3),y,t,life:rnd(.8,1.15),vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-lw*.8,rot:rnd(0,TAU),vr:rnd(-7,7),flip:rnd(0,TAU),vf:rnd(8,16),
      sz:lw*rnd(.09,.15),c:CONF[(Math.random()*CONF.length)|0]})}
  if(fx.length>600)fx.splice(0,fx.length-600)}
function draw(g){const now=performance.now()/1000,dt=Math.min(.05,last?now-last:.016);last=now;if(!fx.length)return;
  g.save();
  // 빛 종류는 더하기 섞기(밝게), 색종이는 보통 섞기
  for(const o of fx){const u=(now-o.t)/o.life;if(u<0||u>=1)continue;const fade=1-u;
    if(o.type==='conf'){o.vy+=G.wB*.9*dt;o.vx*=Math.pow(.25,dt);o.vy*=Math.pow(.5,dt);o.x+=o.vx*dt;o.y+=o.vy*dt;o.rot+=o.vr*dt;o.flip+=o.vf*dt;
      g.globalCompositeOperation='source-over';g.globalAlpha=Math.min(1,fade*2.2)*.92;g.fillStyle=o.c;g.setTransform(1,0,0,1,0,0);g.translate(o.x*DPR,o.y*DPR);g.rotate(o.rot);g.scale(DPR,DPR*Math.cos(o.flip));
      const z=o.sz;g.beginPath();g.moveTo(0,-z);g.lineTo(z*.7,0);g.lineTo(0,z);g.lineTo(-z*.7,0);g.closePath();g.fill();continue}
    g.setTransform(DPR,0,0,DPR,0,0);g.globalCompositeOperation='lighter';
    if(o.type==='core'){const e=1-Math.pow(fade,3),z=o.size*(.8+.6*e);g.globalAlpha=Math.pow(fade,1.3);g.drawImage(GLOW,o.x-z/2,o.y-z/2,z,z);if(u<.35){g.globalAlpha=1-u/.35;g.drawImage(GLOW,o.x-z/4,o.y-z/4,z/2,z/2)}}
    else if(o.type==='bloom'){const z=o.size*(.7+.5*(1-fade));g.globalAlpha=.55*fade*fade;g.drawImage(BLOOM,o.x-z/2,o.y-z/2*.8,z,z*.8)}
    else if(o.type==='flare'){const w=o.w*(.7+.45*(1-fade*fade)),h=o.h*(.35+.65*fade);g.globalAlpha=Math.pow(fade,.9);g.drawImage(FLARE,o.x-w/2,o.y-h/2,w,h);g.drawImage(FLARE,o.x-w/4,o.y-h,w/2,h*2)}
    else if(o.type==='ring'){const e=1-Math.pow(fade,2.2),r=o.r0+(o.r1-o.r0)*e;g.globalAlpha=fade*.95;g.strokeStyle=o.c;g.lineWidth=o.w*fade+1;if(!window.MOB){g.shadowColor=o.c;g.shadowBlur=12}
      g.beginPath();g.ellipse(o.x,o.y,r,r*.5,0,0,TAU);g.stroke();g.shadowBlur=0}
    else if(o.type==='pillar'){const y0=G.yJ,y1=G.yJ-(G.yJ-G.yH)*(.45+.4*o.s),s1=sAtY(y1),hw=.32*(.6+.4*fade);
      const gr=g.createLinearGradient(0,y0,0,y1);gr.addColorStop(0,'rgba(255,255,255,.95)');gr.addColorStop(.35,o.c);gr.addColorStop(1,'rgba(255,255,255,0)');
      g.globalAlpha=fade*.7;g.fillStyle=gr;g.beginPath();g.moveTo(xOf(o.l+.5-hw,1),y0);g.lineTo(xOf(o.l+.5+hw,1),y0);g.lineTo(xOf(o.l+.5+hw*.5,s1),y1);g.lineTo(xOf(o.l+.5-hw*.5,s1),y1);g.closePath();g.fill()}
    else{o.x+=o.vx*dt;o.y+=o.vy*dt;o.vx*=Math.pow(.12,dt);o.vy*=Math.pow(.12,dt);o.rot+=o.vr*dt;const z=o.sz*(o.type==='twink'?2:1.6)*(.7+.3*fade);
      g.globalAlpha=Math.min(1,fade*1.8);g.translate(o.x,o.y);g.rotate(o.rot);g.drawImage(o.type==='twink'?TWINK:STAR,-z/2,-z/2,z,z)}}
  g.restore();g.globalAlpha=1;g.globalCompositeOperation='source-over';
  fx=fx.filter(o=>now-o.t<o.life)}
function clear(){fx=[]}
return {spawn,draw,clear}})();
