// ===== 타이틀 로고 박자 연출 (첫 화면 · 곡 선택) =====
// 「SOUND WAVE」 판: 글자와 그 둘레 테두리(남색 판 · 흰 외곽선)가 한 덩어리로 물결쳐요 — 판을 세로 띠로 나눠, 띠마다 가까운 글자의 높이를 이어 붙여 그려요 (캔버스)
// maple · ♫ 는 CSS (.tp-maple · .tp-note), 판 전체가 박마다 쿵 눌리는 것도 CSS (.tp-sw)
// 박자: 120 BPM (--bp .5s). 조각 그림·자리: maple-drum-assets/title/split.py → ui/title_parts + TP 표
window.TITLE_FX=(url,TP)=>{
const BP=.5,SW=4;   // 박 길이(초) · 띠 폭(원본 px)
const im=new Image();im.crossOrigin='anonymous';im.onload=()=>{try{start()}catch(e){console.warn('title fx',e)}};im.src=url;
function start(){
  const P=Object.fromEntries(TP.p.map(a=>[a[0],a])),pl=P.plate,PX=pl[1],PY=pl[2],PW=pl[3],PH=pl[4];
  // 판 + 글자를 원래 자리로 합친 한 장 (판 좌표)
  const off=document.createElement('canvas');off.width=PW;off.height=PH;const o=off.getContext('2d');o.drawImage(im,pl[5],pl[6],PW,PH,0,0,PW,PH);
  const L=TP.p.filter(a=>a[0][0]==='L').map(a=>{o.drawImage(im,a[5],a[6],a[3],a[4],a[1]-PX,a[2]-PY,a[3],a[4]);return {cx:a[1]-PX+a[3]/2,h:a[4]}});
  const A=L.reduce((t,l)=>t+l.h,0)/L.length*.13,PT=Math.ceil(A*1.25),PB=Math.ceil(A*.5);   // 뛰는 높이 · 위아래 여유
  // 띠마다 글자별 무게 (가우스, 합 1) — 띠 높이 = 가까운 글자 높이를 부드럽게 이은 값
  const NS=Math.ceil(PW/SW),SG=62,WT=[];
  for(let s=0;s<NS;s++){const x=s*SW+SW/2;let w=L.map(l=>Math.exp(-(((x-l.cx)/SG)**2)));const t=w.reduce((a,b)=>a+b,0)||1;WT.push(w.map(v=>v/t))}
  const T0=performance.now()/1000,dl=-(T0%(BP*2))+'s',pct=(v,b)=>v/b*100+'%';
  const piece=(n,cls)=>{const [,x,y,w,h,ax,ay]=P[n];return `<i class="tp ${cls}" style="animation-delay:${dl};left:${pct(x,TP.W)};top:${pct(y,TP.H)};width:${pct(w,TP.W)};height:${pct(h,TP.H)};background-image:url(${url});background-size:${TP.AW/w*100}% ${TP.AH/h*100}%;background-position:${ax/(TP.AW-w)*100}% ${ay/(TP.AH-h)*100}%"></i>`};
  const CV=[];
  document.querySelectorAll('.titleimg').forEach(e=>{if(e.classList.contains('parts'))return;
    e.innerHTML=`<canvas class="tp tp-sw" style="animation-delay:${dl};left:${pct(PX,TP.W)};top:${pct(PY-PT,TP.H)};width:${pct(PW,TP.W)};height:${pct(PH+PT+PB,TP.H)}"></canvas>`+piece('maple','tp-maple')+piece('note','tp-note');
    e.classList.add('parts');CV.push(e.querySelector('canvas'))});
  const still=matchMedia('(prefers-reduced-motion: reduce)').matches;
  // 한 글자의 높이 (2박 한 바퀴): 위로 통 → 내려와서 → 살짝 눌림
  const hop=p=>p<.1?1-(1-p/.1)**2:p<.21?1-((p-.1)/.11)**2:p<.34?-.22*Math.sin((p-.21)/.13*Math.PI):0;
  const D=new Float32Array(L.length);
  function frame(){requestAnimationFrame(frame);if(CV.every(c=>!c.isConnected||c.closest('.hidden')))return;   /* 첫 화면이 숨으면 쉬어요 (예전엔 매 프레임 레이아웃을 읽었어요) */const t=performance.now()/1000-T0;
    for(let i=0;i<L.length;i++){const q=t-i*BP/8,p=((q%(BP*2))+BP*2)%(BP*2)/(BP*2);D[i]=still?0:-hop(p)*A}
    for(const c of CV){if(!c.offsetParent)continue;const dpr=Math.min(2,(devicePixelRatio||1)*(window.STAGE_K||1)),cw=Math.round(c.clientWidth*dpr),ch=Math.round(c.clientHeight*dpr);if(!cw)continue;
      if(c.width!==cw||c.height!==ch){c.width=cw;c.height=ch}const g=c.getContext('2d'),k=cw/PW;g.clearRect(0,0,cw,ch);g.imageSmoothingQuality='high';
      for(let s=0;s<NS;s++){const w=WT[s];let d=0;for(let i=0;i<w.length;i++)d+=w[i]*D[i];const x=s*SW,sw=Math.min(SW,PW-x);
        g.drawImage(off,x,0,sw,PH,x*k,(PT+d)*k,sw*k+.6,PH*k)}}}
  requestAnimationFrame(frame)}
};
