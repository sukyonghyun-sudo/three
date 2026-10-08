// 타이틀 인트로 (2026-10-06 사용자: 「타이틀 화면에서 배경에 동영상 나오는 것 말고 비트게임 같은 인트로 없나」)
//  · 첫 화면 배경: 곡 영상 대신 모션그래픽 (js/main.js 는 이제 첫 화면에 영상을 안 틀어요)
//      로고 뒤 빛줄기(천천히 돌고 박자마다 번쩍) · 네온 바닥 격자(박자마다 한 칸씩 다가와요) · 지평선 양쪽 이퀄라이저 · 떠오르는 반짝이
//  · 처음 열 때 짧은 등장: 어둠 → 빛줄기가 번쩍 켜지고 → 바닥 격자가 지평선에서 펼쳐지고 → 로고가 쾅(css tiSlam) — 그 순간 충격파 고리 + 흰 번쩍(css)
//  · 박자: 120 BPM (--bp .5s — 타이틀 로고 · 시작 버튼과 같은 시계) · 첫 화면이 안 보이면 그리지 않아요
(function(){
const main=document.getElementById('main'),stage=document.getElementById('stage');if(!main||!stage)return;
const cv=document.createElement('canvas');cv.className='tintro';cv.setAttribute('aria-hidden','true');main.insertBefore(cv,main.firstChild);
const g=cv.getContext('2d');
const BEAT=.5,MOB=!!window.MOB;let SW=1920,SH=1080,CX=960,CY=430,HZ=800,EQ0=760,EQ1=1160,EQD=36,EQW=24;   // 박 길이 · 무대 크기 · 로고 가운데 · 지평선 · 이퀄라이저 자리 (무대 px)
// 모바일 세로판: 무대 1080 × 폰 높이 — 로고는 위쪽 1/4 쯤, 지평선은 60% 쯤, 이퀄라이저는 양쪽 10칸씩 (js/engine.js STAGE_W · STAGE_H)
function dims(){if(!MOB)return;SW=typeof STAGE_W==='number'?STAGE_W:1080;SH=typeof STAGE_H==='number'?STAGE_H:Math.round(1080*Math.max(1.57,Math.min(2.22,innerHeight/Math.max(1,innerWidth))));
  CX=SW/2;CY=Math.round(SH*.275);HZ=Math.round(SH*.6);EQD=46;EQW=30;EQ0=CX-70;EQ1=CX+70}
let ox=0,oy=0,dpr=1,cw=0,ch=0,T0=performance.now()/1000,slamAt=-1;
function size(){const cs=getComputedStyle(stage);ox=Math.max(0,parseFloat(cs.getPropertyValue('--ox'))||0);oy=Math.max(0,parseFloat(cs.getPropertyValue('--oy'))||0);
  dims();dpr=Math.min(MOB?1:1.5,(devicePixelRatio||1)*(window.STAGE_K||1));const w=Math.round((SW+2*ox)*dpr),h=Math.round((SH+2*oy)*dpr);if(w!==cw||h!==ch){cw=cv.width=w;ch=cv.height=h}}
addEventListener('resize',()=>setTimeout(size,30));
// 로고가 나타나는 순간(타이틀 그림을 받아 body.has-title) → 쾅 시각 = css tiSlam 의 .25초 늦춤 + 0.42초 (튀어 들어와 닿는 순간)
const mark=()=>{if(slamAt<0&&document.body.classList.contains('has-title'))slamAt=performance.now()/1000+.25+.42};
new MutationObserver(mark).observe(document.body,{attributes:true,attributeFilter:['class']});mark();
dims();const SP=Array.from({length:46},()=>({x:Math.random()*SW,y:Math.random()*SH,s:1.5+Math.random()*3.5,v:12+Math.random()*30,ph:Math.random()*6.28}));
const EQN=MOB?10:18,eqv=new Float32Array(EQN*2);
const ease=u=>u<=0?0:u>=1?1:1-Math.pow(1-u,3);
function frame(){requestAnimationFrame(frame);if(main.classList.contains('hidden'))return;if(!cw||(MOB&&typeof STAGE_H==='number'&&STAGE_H!==SH))size();
  const now=performance.now()/1000,t=now-T0,bt=t/BEAT,bi=Math.floor(bt),bp=bt-bi,pulse=Math.exp(-bp*5),bar=bi%4===0?pulse:0;
  const inB=ease((t-.15)/.5),inG=ease((t-.45)/.7),inE=ease((t-.8)/.6);   // 등장: 빛줄기 → 바닥 → 이퀄라이저
  g.setTransform(dpr,0,0,dpr,dpr*ox,dpr*oy);
  // 바탕
  const bgG=g.createLinearGradient(0,-oy,0,SH+oy);bgG.addColorStop(0,'#160733');bgG.addColorStop(.55,'#2A0F58');bgG.addColorStop(.74,'#3A1468');bgG.addColorStop(1,'#12052A');g.fillStyle=bgG;g.fillRect(-ox,-oy,SW+2*ox,SH+2*oy);
  const rg=g.createRadialGradient(CX,CY,0,CX,CY,MOB?900:760);rg.addColorStop(0,`rgba(255,92,190,${(.28+.14*pulse)*inB})`);rg.addColorStop(.45,`rgba(150,80,255,${.14*inB})`);rg.addColorStop(1,'rgba(20,6,46,0)');g.fillStyle=rg;g.fillRect(-ox,-oy,SW+2*ox,SH+2*oy);
  // 빛줄기
  g.save();g.translate(CX,CY);g.rotate(t*.06);g.globalCompositeOperation='lighter';
  for(let i=0;i<18;i++){const a=i/18*Math.PI*2,w=.07+.03*Math.sin(t*.7+i);g.globalAlpha=(.06+.07*pulse)*inB*(i%2?.8:1);
    const lg=g.createLinearGradient(0,0,Math.cos(a)*(MOB?2200:1400),Math.sin(a)*(MOB?2200:1400));lg.addColorStop(0,i%2?'#B58CFF':'#FF6FC0');lg.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=lg;
    const RL=MOB?2200:1400;g.beginPath();g.moveTo(0,0);g.lineTo(Math.cos(a-w)*RL,Math.sin(a-w)*RL);g.lineTo(Math.cos(a+w)*RL,Math.sin(a+w)*RL);g.closePath();g.fill()}
  g.restore();g.globalAlpha=1;g.globalCompositeOperation='source-over';
  // 반짝이
  for(const p of SP){p.y-=p.v/60;if(p.y<-20){p.y=SH+20;p.x=Math.random()*SW}const tw=.45+.55*Math.sin(t*3+p.ph);g.globalAlpha=Math.max(0,tw)*.8*inB;g.fillStyle=p.s>3.6?'#FFD1EC':'#FFFFFF';
    g.beginPath();g.arc(p.x,p.y,p.s*(.6+.4*tw),0,6.283);g.fill()}
  g.globalAlpha=1;
  // 네온 바닥 격자 (지평선 아래) — 지평선에서 가운데부터 펼쳐져요
  if(inG>0){const bot=SH+oy,span=(SW/2+ox+200)*inG;g.save();g.beginPath();g.rect(CX-span,HZ,span*2,bot-HZ);g.clip();
    const fg=g.createLinearGradient(0,HZ,0,bot);fg.addColorStop(0,'rgba(40,10,80,.0)');fg.addColorStop(1,'rgba(30,6,60,.85)');g.fillStyle=fg;g.fillRect(CX-span,HZ,span*2,bot-HZ);
    g.globalCompositeOperation='lighter';g.lineWidth=2;
    for(let k=-16;k<=16;k++){g.strokeStyle=`rgba(255,90,190,${.42+.2*pulse})`;g.beginPath();g.moveTo(CX+k*14,HZ);g.lineTo(CX+k*(MOB?150:260),bot+40);g.stroke()}   // 세로선: 지평선 한 점으로
    for(let k=0;k<14;k++){const z=((k+bp)/14),y=HZ+(bot-HZ)*Math.pow(z,2.1);g.strokeStyle=`rgba(120,200,255,${(.15+.55*z)*(.8+.3*pulse)})`;g.lineWidth=1+2*z;g.beginPath();g.moveTo(CX-span,y);g.lineTo(CX+span,y);g.stroke()}   // 가로선: 박자마다 한 칸씩 다가와요
    g.restore();g.globalCompositeOperation='source-over';
    const hl=g.createLinearGradient(CX-span,0,CX+span,0);hl.addColorStop(0,'rgba(255,79,163,0)');hl.addColorStop(.5,`rgba(255,${200+55*bar|0},240,${.85*inG})`);hl.addColorStop(1,'rgba(61,220,255,0)');
    g.fillStyle=hl;g.fillRect(CX-span,HZ-2,span*2,4+3*bar);   // 지평선 빛 (마디 첫 박에 더 굵게)
  }
  // 이퀄라이저 (지평선 양쪽)
  if(inE>0)for(let side=0;side<2;side++)for(let i=0;i<EQN;i++){const j=side*EQN+i,d=i/(EQN-1),tgt=(.25+.55*Math.abs(Math.sin(t*1.7+i*.55+side))+.6*pulse*(1-d*.6)*(i%3?1:.6))*(.6+.4*Math.sin(t*.9+i));
    eqv[j]+=(tgt-eqv[j])*(tgt>eqv[j]?.45:.12);const h=Math.max(4,eqv[j]*(MOB?150:120)*inE),x=side?EQ1+i*EQD:EQ0-i*EQD,col=side?`hsl(${190+d*90},95%,66%)`:`hsl(${330-d*60},95%,66%)`;
    g.fillStyle=col;g.globalAlpha=.85;g.fillRect(x-EQW/2,HZ-6-h,EQW,h);g.globalAlpha=.22;g.fillRect(x-EQW/2,HZ+6,EQW,h*.5)}   // 막대 + 바닥에 비친 그림자
  g.globalAlpha=1;
  // 로고 쾅: 충격파 고리
  if(slamAt>0){const u=(now-slamAt)/.6;if(u>=0&&u<1){g.globalCompositeOperation='lighter';g.globalAlpha=(1-u)*.9;g.lineWidth=14*(1-u)+2;g.strokeStyle='#FFFFFF';g.beginPath();g.arc(CX,CY,60+780*ease(u),0,6.283);g.stroke();
    g.globalAlpha=(1-u)*.6;g.strokeStyle='#FF6FC0';g.lineWidth=6;g.beginPath();g.arc(CX,CY,40+600*ease(u),0,6.283);g.stroke();g.globalAlpha=1;g.globalCompositeOperation='source-over'}}
  // 처음 어둠에서 밝아지기
  if(t<.6){g.globalAlpha=1-ease(t/.6);g.fillStyle='#07020F';g.fillRect(-ox,-oy,SW+2*ox,SH+2*oy);g.globalAlpha=1}
}
size();requestAnimationFrame(frame);
window.TINTRO={size};
})();
