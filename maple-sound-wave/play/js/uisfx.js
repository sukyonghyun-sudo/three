// UI 효과음 (2026-10-06 사용자: 「곡 바꿀 때나 게임 시작할 때나 게임 끝났을 때나 비트 게임처럼 UI 사운드가 있어야 할 것 같아」)
//  · 소리 파일 없이 Web Audio 로 바로 만들어요 (엔진과 같은 actx — 소리가 켜진 뒤에만 나요)
//  · tick: 곡 넘길 때 — DJ 스크래치 (위 곡이면 반대 방향) · diff: 난이도 바꿀 때 — 톡톡 두 음
//  · start: 게임 시작 — 쿵 + 화음 한 방 + 위로 쓸어 올리는 바람 소리 · back: 결과에서 곡 선택으로 — 내려가는 두 음
//  · result: 결과 화면 — 판이 들어올 때 바람 소리 → 등급 도장(쿵 + 띵, 0.8초) → 램프(1.2초: 클리어 올라가는 아르페지오 · 풀콤보 · 올퍼펙트는 반짝 종소리까지 · 실패는 부드럽게 내려가는 두 음) → 신기록 반짝(1.8초)
//    시각은 결과 화면 등장 애니메이션(css/weekend.css r2Stamp2 · r2Pop · r2New)에 맞췄어요
//  · 설정 → 소리 → 「UI 효과음」 켜기 · 작게 · 끄기 (localStorage mds-uisfx)
(function(){
const $=id=>document.getElementById(id);
const LS=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:v}catch(e){return d}},SS=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const LEVEL={on:.55,low:.26,off:0};let mode=LEVEL[LS('mds-uisfx','on')]!=null?LS('mds-uisfx','on'):'on';
let bus=null,busCtx=null,nb=null;
function ctx(){const c=typeof actx!=='undefined'?actx:null;if(!c)return null;if(c.state==='suspended'){try{c.resume()}catch(e){}}return c.state==='running'?c:null}
function out(c){if(busCtx!==c){const comp=c.createDynamicsCompressor();comp.threshold.value=-10;comp.ratio.value=4;comp.attack.value=.003;comp.release.value=.15;comp.connect(c.destination);bus=c.createGain();bus.connect(comp);busCtx=c}
  bus.gain.value=LEVEL[mode];return bus}
function noise(c){if(nb&&nb.sampleRate===c.sampleRate)return nb;const n=c.sampleRate|0;nb=c.createBuffer(1,n,c.sampleRate);const d=nb.getChannelData(0);for(let i=0;i<n;i++)d[i]=Math.random()*2-1;return nb}
// 음 하나: 높이(f0 → f1) · 길이 · 크기 · 파형 · 저역 통과
function tone(c,o,at,{type='sine',f0,f1,dur,g=.3,a=.004,det=0,lp=0}){const osc=c.createOscillator(),gn=c.createGain();osc.type=type;osc.frequency.setValueAtTime(f0,at);
  if(f1&&f1!==f0)osc.frequency.exponentialRampToValueAtTime(f1,at+dur*.85);if(det)osc.detune.value=det;
  gn.gain.setValueAtTime(0,at);gn.gain.linearRampToValueAtTime(g,at+a);gn.gain.exponentialRampToValueAtTime(.0001,at+dur);osc.connect(gn);
  if(lp){const f=c.createBiquadFilter();f.type='lowpass';f.frequency.value=lp;gn.connect(f);f.connect(o)}else gn.connect(o);osc.start(at);osc.stop(at+dur+.03)}
// 바람 · 딸깍: 잡음을 필터로 걸러서
function hiss(c,o,at,{dur,g=.2,f0=2000,f1=f0,q=1,type='bandpass'}){const s=c.createBufferSource(),f=c.createBiquadFilter(),gn=c.createGain();s.buffer=noise(c);f.type=type;f.Q.value=q;
  f.frequency.setValueAtTime(f0,at);if(f1!==f0)f.frequency.exponentialRampToValueAtTime(f1,at+dur);
  gn.gain.setValueAtTime(0,at);gn.gain.linearRampToValueAtTime(g,at+Math.min(.012,dur*.2));gn.gain.exponentialRampToValueAtTime(.0001,at+dur);s.connect(f);f.connect(gn);gn.connect(o);s.start(at,Math.random()*.5);s.stop(at+dur+.03)}
const N=m=>440*Math.pow(2,(m-69)/12);   // 미디 음 번호 → 주파수
const S={
  tick(c,o,t,d){const up=d<0,dur=.16;   // DJ 스크래치 (2026-10-06 사용자: 「띡띡 말고 비트게임처럼 스크래치 소리」) — 레코드 긁는 잡음 + 판 음이 공명 필터 속에서 빠르게 올라갔다 내려와요 (위 곡이면 반대로)
    const ff=up?[900,2700,700]:[700,2700,900],s=c.createBufferSource(),bp=c.createBiquadFilter(),gn=c.createGain();s.buffer=noise(c);bp.type='bandpass';bp.Q.value=5;
    bp.frequency.setValueAtTime(ff[0],t);bp.frequency.exponentialRampToValueAtTime(ff[1],t+.055);bp.frequency.exponentialRampToValueAtTime(ff[2],t+dur);
    gn.gain.setValueAtTime(0,t);gn.gain.linearRampToValueAtTime(.45,t+.012);gn.gain.setValueAtTime(.45,t+.07);gn.gain.exponentialRampToValueAtTime(.001,t+dur);s.connect(bp);bp.connect(gn);gn.connect(o);s.start(t,Math.random()*.5);s.stop(t+dur+.03);
    const p=up?[270,580,180]:[180,580,270],os=c.createOscillator(),lp=c.createBiquadFilter(),g2=c.createGain();os.type='sawtooth';lp.type='lowpass';lp.frequency.value=2300;lp.Q.value=2;
    os.frequency.setValueAtTime(p[0],t);os.frequency.exponentialRampToValueAtTime(p[1],t+.055);os.frequency.exponentialRampToValueAtTime(p[2],t+dur);
    g2.gain.setValueAtTime(0,t);g2.gain.linearRampToValueAtTime(.09,t+.012);g2.gain.exponentialRampToValueAtTime(.001,t+dur);os.connect(lp);lp.connect(g2);g2.connect(o);os.start(t);os.stop(t+dur+.03);
    hiss(c,o,t,{dur:.012,g:.12,f0:5000,q:1.5,type:'highpass'})},   // 바늘 딸깍
  roll(c,o,t,k){const j=(k||0)%4;hiss(c,o,t,{dur:.028,g:.2,f0:2600+j*180,q:5});tone(c,o,t,{type:'square',f0:N(81+j),dur:.03,g:.03,lp:3800})},   // 곡 룰렛 한 칸: 짧은 딸깍 (다다다닥 — js/songlist.js)
  land(c,o,t){tone(c,o,t,{f0:150,f1:58,dur:.2,g:.34,a:.003});hiss(c,o,t,{dur:.05,g:.16,f0:2800,q:2});tone(c,o,t+.02,{type:'triangle',f0:N(84),dur:.16,g:.09});tone(c,o,t+.1,{type:'triangle',f0:N(91),dur:.34,g:.09})},   // 룰렛 멈춤: 탁 + 띵딩
  fw(c,o,t){hiss(c,o,t,{dur:.34,g:.2,f0:2600,f1:600,q:.7});tone(c,o,t,{f0:120,f1:48,dur:.18,g:.2,a:.002});for(let i=0;i<5;i++)hiss(c,o,t+.12+i*.045+Math.random()*.03,{dur:.03,g:.07,f0:5000+Math.random()*3000,q:3})},   // 폭죽 한 발: 팡 + 타닥타닥 (js/top1.js)
  top1(c,o,t){[72,76,79,84,88].forEach((m,i)=>tone(c,o,t+i*.08,{type:'triangle',f0:N(m),dur:.3,g:.11}));for(const m of [84,88,91,96])tone(c,o,t+.42,{type:'sawtooth',f0:N(m),dur:.9,g:.04,a:.02,det:(m%2?6:-6),lp:3800});[100,104,107,112].forEach((m,i)=>tone(c,o,t+.5+i*.06,{f0:N(m),dur:.5,g:.045}));hiss(c,o,t+.42,{dur:.9,g:.06,f0:6000,f1:12000,q:.7})},   // 랭킹 1위 팡파르
  diff(c,o,t){tone(c,o,t,{type:'square',f0:N(76),dur:.06,g:.06,lp:3200});tone(c,o,t+.045,{type:'square',f0:N(83),dur:.09,g:.06,lp:3200})},
  start(c,o,t){tone(c,o,t,{f0:160,f1:46,dur:.26,g:.5,a:.003});   // 쿵
    for(const m of [72,79,84,88])tone(c,o,t,{type:'sawtooth',f0:N(m),dur:.42,g:.055,a:.006,det:(m%2?7:-7),lp:2900});   // 화음 한 방 (C5 G5 C6 E6)
    tone(c,o,t+.05,{type:'triangle',f0:N(96),f1:N(108),dur:.18,g:.045});hiss(c,o,t,{dur:.42,g:.14,f0:500,f1:6500,q:.8})},   // 반짝 · 위로 쓸어 올리는 바람
  swoosh(c,o,t){hiss(c,o,t,{dur:.42,g:.16,f0:4200,f1:500,q:.9});tone(c,o,t,{f0:220,f1:70,dur:.3,g:.18})},   // 쉭: 곡 시작 인트로 카드가 쓸려 나갈 때
  back(c,o,t){tone(c,o,t,{type:'triangle',f0:N(79),dur:.08,g:.12});tone(c,o,t+.06,{type:'triangle',f0:N(72),dur:.12,g:.12});hiss(c,o,t,{dur:.2,g:.06,f0:3000,f1:700,q:.9})},
  result(c,o,t,lamp,isNew){hiss(c,o,t,{dur:.4,g:.12,f0:5200,f1:600,q:.8});   // 판이 들어올 때
    const st=t+.8;tone(c,o,st,{f0:130,f1:44,dur:.32,g:.45,a:.003});hiss(c,o,st,{dur:.13,g:.2,f0:900,type:'lowpass'});tone(c,o,st+.01,{type:'triangle',f0:N(91),dur:.32,g:.06});   // 등급 도장: 쿵 + 띵
    const lt=t+1.2;
    if(lamp<=1){tone(c,o,lt,{type:'sine',f0:N(76),dur:.22,g:.09});tone(c,o,lt+.16,{type:'sine',f0:N(71),dur:.4,g:.08})}   // 기록 없음 · 플레이(실패): 부드럽게 내려가는 두 음
    else{[72,76,79,84].forEach((m,i)=>tone(c,o,lt+i*.07,{type:'triangle',f0:N(m),dur:.36,g:.11}));   // 클리어 이상: 올라가는 아르페지오
      for(const m of [84,88,91])tone(c,o,lt+.3,{type:'sawtooth',f0:N(m),dur:.7,g:.035,a:.02,det:(m%2?6:-6),lp:3600});   // 마지막 화음
      if(lamp>=3)[96,100,103,108].forEach((m,i)=>tone(c,o,lt+.34+i*.06,{f0:N(m),dur:.5,g:.045}));   // 풀 콤보 · 올 퍼펙트: 반짝 종소리
      if(lamp>=4)hiss(c,o,lt+.3,{dur:.8,g:.06,f0:6000,f1:12000,q:.7})}
    if(isNew)[100,104,107,112].forEach((m,i)=>tone(c,o,t+1.8+i*.05,{f0:N(m),dur:.35,g:.04}))}   // 신기록 반짝
};
function play(name,...a){if(mode==='off'||!S[name])return;try{const c=ctx();if(!c)return;S[name](c,out(c),c.currentTime+.01,...a)}catch(e){console.warn('uisfx',name,e)}}
// 설정 → 소리 → 「UI 효과음」
(function(){const box=$('uisfxOpt');if(!box)return;const L=[['on','켜기'],['low','작게'],['off','끄기']];
  box.innerHTML=L.map(([v,t])=>`<button class="chip" data-v="${v}">${t}</button>`).join('');
  const paint=()=>box.querySelectorAll('.chip').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.v===mode)));
  box.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{mode=b.dataset.v;SS('mds-uisfx',mode);paint();play('diff')});paint()})();
window.UISFX={play,mode:()=>mode};
})();
