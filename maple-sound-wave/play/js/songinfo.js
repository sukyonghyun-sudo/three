// 곡 화면 「채보 정보」 카드(레벨 · 레이더 · 노트 수 · 내 기록) + 난이도 카드 클리어 램프 (2026-10-03 주말 작업)
// 참고한 게임 시스템:
//  · DDR 그루브 레이더(STREAM · VOLTAGE · AIR · FREEZE · CHAOS) · SOUND VOLTEX 레이더(NOTES · PEAK · TRICKY · HAND TRIP) — 채보 성격을 다섯 갈래로
//  · DJMAX RESPECT V · 프로젝트 세카이 — 난이도마다 레벨 숫자
//  · beatmania IIDX — 곡 · 난이도마다 클리어 램프 (기록 없음 · 클리어 · 풀 콤보 · 올 퍼펙트)
// 레이더 다섯 갈래(전부 채보에서 바로 재요 — 채보가 바뀌면 저절로 따라가요):
//  밀도 = 평균 초당 노트 · 최고 속도 = 2초 구간 최대 초당 노트 · 엇박 = 반 박 · 16분 엇박 노트 비율 · 손 바꿈 = 0.2초 안에 왼손↔오른손 번갈이 · 연타 = 0.3초 안 같은 버튼
// 레벨(1~15) = 위 값들의 가중합 — 지금 채보로 쉬움 3~4 · 보통 6~7 · 어려움 9~10
(function(){
const $=id=>document.getElementById(id);
const CACHE=new WeakMap();
const AX=[['밀도','STREAM'],['최고 속도','PEAK'],['엇박','OFFBEAT'],['손 바꿈','TRILL'],['연타','JACK']];
function stats(ns,beats){
  if(!ns||!ns.length)return null;let c=CACHE.get(ns);if(c)return c;
  const t=ns.map(n=>n.t),l=ns.map(n=>n.l),N=t.length,span=Math.max(1,t[N-1]-t[0]),avg=N/span;
  let peak=0;for(let i=0,j=0;i<N;i++){while(t[j]<t[i]-2)j++;peak=Math.max(peak,(i-j+1)/2)}
  const B=beats||[],fb=x=>{if(B.length<2)return 0;if(x<=B[0])return (x-B[0])/(B[1]-B[0]);let lo=0,hi=B.length-1;if(x>=B[hi])return hi+(x-B[hi])/(B[hi]-B[hi-1]);while(hi-lo>1){const m=(lo+hi)>>1;if(B[m]<=x)lo=m;else hi=m}return lo+(x-B[lo])/(B[lo+1]-B[lo])};
  let o8=0,o16=0,tr=0,jk=0;
  for(let i=0;i<N;i++){const q=fb(t[i])*4,r=Math.round(q);if(Math.abs(q-r)<.25){const s=((r%4)+4)%4;if(s===2)o8++;else if(s)o16++}
    if(i<N-1){const g=t[i+1]-t[i];if((l[i]<2)!==(l[i+1]<2)&&g<.2)tr++;if(l[i]===l[i+1]&&g<.3)jk++}}
  const off8=o8/N,off16=o16/N,trill=tr/Math.max(1,N-1),jack=jk/Math.max(1,N-1);
  const sc=avg+.35*peak+2.2*off16+.8*off8+1.2*trill+1*jack,lv=Math.max(1,Math.min(15,Math.round((sc-1.2)*1.15)));
  const v=[avg/7,peak/9,(off8*.8+off16*2)/.9,trill/.75,jack/.15].map(x=>Math.max(.04,Math.min(1,x)));
  c={n:N,avg,peak,lv,v,len:span};CACHE.set(ns,c);return c}
const COL={easy:['#62E3A0','#1EAE62'],normal:['#FF86C8','#F2368F'],hard:['#BC98FF','#7B4CF0']};
function radarSVG(v,col){
  const W=270,H=204,cx=135,cy=108,R=70,ang=i=>-Math.PI/2+i*2*Math.PI/5,P=(i,r)=>[cx+Math.cos(ang(i))*r,cy+Math.sin(ang(i))*r];
  let s=`<svg class="ci-radar" viewBox="0 0 ${W} ${H}" aria-hidden="true">`;
  for(const k of [1,.75,.5,.25])s+=`<polygon class="gr${k===1?' o':''}" points="${[0,1,2,3,4].map(i=>P(i,R*k).map(x=>x.toFixed(1)).join(',')).join(' ')}"/>`;
  for(let i=0;i<5;i++){const [x,y]=P(i,R);s+=`<line class="ax" x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/>`}
  s+=`<polygon class="val" style="--c1:${col[0]};--c2:${col[1]}" points="${v.map((x,i)=>P(i,R*x).map(q=>q.toFixed(1)).join(',')).join(' ')}"/>`;
  v.forEach((x,i)=>{const [px,py]=P(i,R*x);s+=`<circle class="dot" cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="3.6" style="--c2:${col[1]}"/>`});
  AX.forEach(([ko],i)=>{const [x,y]=P(i,R+15),a=Math.abs(x-cx)<8?'middle':x<cx?'end':'start';s+=`<text class="al" x="${x.toFixed(1)}" y="${(y+4).toFixed(1)}" text-anchor="${a}">${ko}</text>`});
  return s+'</svg>'}
const fmt=n=>Math.round(n).toLocaleString('en-US');
function update(){
  const T=$('title');if(!T||typeof CHART==='undefined'||!window.SONGS)return;
  const S=SONGS[cur],ver=(typeof chartVer!=='undefined'?chartVer:'new'),R=window.RESULT2;
  // 난이도 카드: 램프 배지 (이 기기 기록) — 카드 안에 넣으면 고르지 않은 카드의 흐림(투명도 · 채도)을 같이 받아서, 카드 묶음(#diffs) 위 따로 띄워요
  const DV=$('diffs');if(DV){DV.querySelectorAll(':scope>.lamp').forEach(e=>e.remove());
    DV.querySelectorAll('.diff').forEach((b,ci)=>{const k=(b.className.match(/diff-(\w+)/)||[])[1];if(!k)return;
      const rec=R&&R.getRec(S.id,k,ver),lp=rec?rec.lamp:0;if(lp<2)return;
      const e=document.createElement('em');e.className='lamp lp'+lp;e.textContent=lp===4?'AP':lp===3?'FC':'CLEAR';e.title=['','','클리어','풀 콤보','올 퍼펙트'][lp];
      e.style.gridArea='1 / '+(ci+1);b.after(e)})}   /* 자리(left · top)는 css/weekend.css — 자기 카드 바로 뒤에 넣어서 CSS 가 「고른 카드 · 그 오른쪽 카드」의 배지를 알아봐요 (2026-10-06 사용자: ✓ 와 옆 카드 CLEAR 가 겹침) · 그 카드 칸(grid 열)에 붙여요 — 예전엔 offsetLeft 로 쟀는데 곡 화면이 숨어 있을 때 재면 0 이라 「보통」 배지가 「쉬움」 카드에 붙었어요 (2026-10-06 검수) */
  // 채보 정보 카드
  let box=$('cinfo');if(!box){box=document.createElement('div');box.id='cinfo';box.className='cinfo';T.appendChild(box)}
  const st=stats(CHART.sets[diff],CHART.beats);if(!st){box.hidden=true;return}box.hidden=false;
  const col=COL[diff]||COL.normal,dn={easy:['쉬움','EASY'],normal:['보통','NORMAL'],hard:['어려움','HARD']}[diff]||['',''];
  const rec=R&&R.getRec(S.id,diff,ver),lamp=rec&&rec.lamp>=2?['','','CLEAR','FULL COMBO','ALL PERFECT'][rec.lamp]:'';
  const key=S.id+'|'+diff+'|'+ver+'|'+(rec?rec.best+'/'+rec.lamp:'');if(box.dataset.k===key)return;const swap=box.dataset.k&&box.dataset.k.split('|')[0]!==S.id;box.dataset.k=key;
  box.innerHTML=`<div class="ci-lv" style="--c1:${col[0]};--c2:${col[1]}"><small>LEVEL</small><b>${st.lv}</b><span title="${dn[0]}"><i>${dn[1]}</i></span></div>
    ${radarSVG(st.v,col)}
    <dl class="ci-st"><div><dt>노트</dt><dd>${st.n}<small>개</small></dd></div><div><dt>평균 속도</dt><dd>${st.avg.toFixed(1)}<small>/초</small></dd></div><div><dt>최고 속도</dt><dd>${st.peak.toFixed(1)}<small>/초</small></dd></div>
    <div class="me"><dt>내 기록</dt><dd>${rec?fmt(rec.best):'-'}${lamp?`<em class="lp${rec.lamp}">${lamp}</em>`:''}</dd></div></dl>
    <div class="ci-act"><button class="ci-b ci-pr" type="button"><i aria-hidden="true">🎯</i>연습 모드</button><button class="ci-b ci-au" type="button"><i aria-hidden="true">👀</i>자동 플레이</button></div>`;
  const bp=box.querySelector('.ci-pr'),ba=box.querySelector('.ci-au');if(bp)bp.onclick=()=>window.PRACTICE_UI&&PRACTICE_UI.open('prac');if(ba)ba.onclick=()=>window.PRACTICE_UI&&PRACTICE_UI.open('auto');
  fitSoon()}   // 곡이 바뀌어도 카드는 제자리 — 내용만 바뀌어요 (2026-10-06 사용자: 「채보 정보 카드만 안 움직이게」 · 예전엔 곡마다 아래에서 14px 올라오는 등장 효과 .in)
// 곡 선택 화면: CD 케이스 재킷 왼쪽 위에 난이도 셋(쉬움 · 보통 · 어려움)의 램프 점 — IIDX 곡 목록의 클리어 램프처럼
function songs(){const R=window.RESULT2;if(!R||!window.SONGS)return;const ver=(typeof chartVer!=='undefined'?chartVer:'new');
  document.querySelectorAll('#songs .card').forEach((b,i)=>{const S=SONGS[i];if(!S)return;const art=b.querySelector('.art');if(!art)return;
    let e=art.querySelector('.lamps');const L=['easy','normal','hard'].map(d=>{const r=R.getRec(S.id,d,ver);return r?r.lamp:0});
    if(!L.some(x=>x>0)){if(e)e.remove();return}
    if(!e){e=document.createElement('span');e.className='lamps';art.appendChild(e)}
    const nm=['쉬움','보통','어려움'],lt=['기록 없음','플레이','클리어','풀 콤보','올 퍼펙트'];
    e.innerHTML=L.map((x,j)=>`<i class="ld d${j} lp${x}" title="${nm[j]} · ${lt[x]}"></i>`).join('');e.title=L.map((x,j)=>nm[j]+' '+lt[x]).join(' · ')})}
// 곡 그림이 세로로 긴 곡(픽트라 몬스터)은 BPM 알약이 카드에 가려져서, 겹치는 만큼 왼쪽 칸(그림 묶음)을 위로 올려요
function fitArt(){const A=$('artWrap'),box=$('cinfo');if(!A||!box||box.hidden)return;if(document.body.classList.contains('no-cinfo')){A.style.marginBottom='';return}
  A.style.marginBottom='';const ab=A.offsetTop+A.offsetHeight,ct=box.offsetTop;if(!A.offsetHeight||!box.offsetHeight)return;   /* offset 값은 transform(곡 넘기기 바퀴 · 무대 배율)과 상관없는 레이아웃 값 */
  const ov=ab-ct+14;if(ov>0)A.style.marginBottom=Math.round(ov*2)+'px'}   /* 가운데 정렬 칸이라 아래 여백 2배 = 위로 그만큼 (transform 은 곡 넘기기 · 「곡 선택」 버튼 위치와 겹쳐서 안 써요) */
let fitT=0;const fitSoon=()=>{clearTimeout(fitT);fitT=setTimeout(fitArt,60)};
try{const A=$('artWrap');if(A&&window.ResizeObserver)new ResizeObserver(fitSoon).observe(A)}catch(e){}
window.SONGINFO={update,stats,songs,fitArt};
if(typeof renderDiffs==='function')try{update()}catch(e){console.warn('songinfo',e)}
})();
