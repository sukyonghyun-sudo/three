// 연습 모드 · 자동 플레이(관람) (2026-10-03 주말 작업)
// 참고: 태고의 달인 「연습(트레이닝)」 — 구간 골라 반복 · 느리게, osu! / DJMAX 오토 플레이 관람, Clone Hero 연습의 구간 타임라인
//  · 구간: 곡의 마디 세기(잔잔 · 보통 · 후렴급, chart.hs.lv)로 나눈 이름 칩(인트로 · 벌스 · 후렴 · 브릿지 · 아웃트로) + 마디별 노트 수 막대 타임라인
//    타임라인을 누르면 그 마디부터 4마디, 끌면 원하는 만큼 — 시작 · 끝을 직접 골라요
//  · 속도 x0.5 / x0.75 / x1.0 (느리게 하면 음도 같이 낮아져요) · 구간 반복 · 자동 플레이(내가 안 쳐도 노트를 대신 쳐 줘요)
//  · 연습 · 자동 플레이는 랭킹 · 내 기록 · 풀콤보 연출에 아무것도 남기지 않아요 (engine endPractice)
(function(){
const $=id=>document.getElementById(id),T=$('title');if(!T)return;
const LS=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:v}catch(e){return d}},SS=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const mmss=t=>Math.floor(Math.max(0,t)/60)+':'+String(Math.floor(Math.max(0,t)%60)).padStart(2,'0');
let pop=null,st={mode:'prac',sec:0,sel:null,rate:+LS('mds-prac-rate',1)||1,loop:LS('mds-prac-loop','on')==='on'},SECS=[],BARS=[],G0=null;
function geo(){const C=CHART,ns=C.sets[diff];if(!ns||!ns.length)return null;const db=C.db,barOf=t=>Math.floor((beatAt(t)-db)/4),bT=b=>beatTime(db+4*b),last=Math.max(0,barOf(ns[ns.length-1].t));return {C,ns,db,barOf,bT,last}}
function sections(){
  const g=geo();if(!g)return [];const {C,ns,barOf,bT,last}=g;G0=g;
  const cnt=new Array(last+1).fill(0);ns.forEach(n=>{const b=barOf(n.t);if(b>=0&&b<=last)cnt[b]++});
  let L=C.hs&&C.hs.lv?C.hs.lv.slice(0,last+1):null;
  if(!L){const so=cnt.slice().sort((a,b)=>a-b),q1=so[Math.floor(so.length*.3)],q2=so[Math.floor(so.length*.7)];L=cnt.map(c=>c<=q1?0:c<q2?1:2)}
  while(L.length<last+1)L.push(L[L.length-1]||1);
  BARS=cnt.map((n,b)=>({b,n,lv:L[b]}));
  // 4마디(한 악절)씩 묶어 평균 세기로: 1.5 이상 후렴 · 0.6 이상 벌스 · 그 아래 잔잔 → 같은 것끼리 이어 붙여 구간
  const BL=[];for(let b=0;b<=last;b+=4){const a=L.slice(b,Math.min(last+1,b+4)),m=a.reduce((x,y)=>x+y,0)/a.length;BL.push({b0:b,b1:Math.min(last,b+3),lv:m>=1.5?2:m>=.6?1:0})}
  const R=[];for(const r of BL){if(R.length&&R[R.length-1].lv===r.lv)R[R.length-1].b1=r.b1;else R.push(Object.assign({},r))}
  const nm={2:'후렴',1:'벌스'},cntN={};
  const out=R.map((r,i)=>{let n=r.lv===0?(i===0?'인트로':i===R.length-1?'아웃트로':'브릿지'):nm[r.lv];cntN[n]=(cntN[n]||0)+1;return {n,k:cntN[n],b0:r.b0,b1:r.b1,s0:Math.max(0,bT(r.b0)),e:bT(r.b1+1)-.03}});
  out.forEach(o=>{o.label=cntN[o.n]>1?o.n+' '+o.k:o.n});
  return [{label:'처음부터 (전곡)',s0:0,e:ns[ns.length-1].t+.3,whole:true,b0:0,b1:last}].concat(out)}
function chips(id,opts,get,set){const box=pop.querySelector('#'+id);box.innerHTML='';opts.forEach(([v,lab,sub])=>{const b=document.createElement('button');b.className='chip';b.innerHTML=lab+(sub?`<small>${sub}</small>`:'');b.setAttribute('aria-pressed',get()===v);b.onclick=()=>{set(v);box.querySelectorAll('.chip').forEach((x,i)=>x.setAttribute('aria-pressed',opts[i][0]===get()))};box.appendChild(b)})}
function curRange(){if(st.sel)return st.sel;const s=SECS[st.sec]||SECS[0];return s?{b0:s.b0,b1:s.b1,whole:!!s.whole}:{b0:0,b1:0}}
function paint(){const tl=pop&&pop.querySelector('#prTl');if(!tl||!G0)return;const r=curRange();
  tl.querySelectorAll('i').forEach(e=>{const b=+e.dataset.b;e.classList.toggle('on',b>=r.b0&&b<=r.b1)});
  const s0=r.whole?0:G0.bT(r.b0),e=r.whole?SECS[0].e:G0.bT(r.b1+1),n=BARS.slice(r.b0,r.b1+1).reduce((a,x)=>a+x.n,0);
  const lab=pop.querySelector('#prSel');if(lab)lab.innerHTML=`<b>${mmss(s0)} – ${mmss(e)}</b> · ${r.b1-r.b0+1}마디 · 노트 ${n}개${st.sel?' <em>직접 고름</em>':''}`}
function timeline(){const tl=pop.querySelector('#prTl'),mx=Math.max(1,...BARS.map(x=>x.n));
  tl.innerHTML=BARS.map(x=>`<i data-b="${x.b}" class="lv${x.lv}" style="--h:${(.12+.88*x.n/mx).toFixed(3)}" title="${x.b+1}마디 · 노트 ${x.n}개"></i>`).join('');
  let drag=null;const barAt=ev=>{const el=document.elementFromPoint(ev.clientX,ev.clientY);return el&&el.parentElement===tl?+el.dataset.b:null};
  tl.onpointerdown=ev=>{const b=barAt(ev);if(b==null)return;ev.preventDefault();drag={a:b,moved:false};st.sel={b0:b,b1:Math.min(BARS.length-1,b+3),sid:SONGS[cur].id+diff};st.sec=-1;syncChips();paint();try{tl.setPointerCapture(ev.pointerId)}catch(e){}};
  tl.onpointermove=ev=>{if(!drag)return;const b=barAt(ev);if(b==null||b===drag.a&&!drag.moved)return;drag.moved=true;st.sel={b0:Math.min(drag.a,b),b1:Math.max(drag.a,b),sid:SONGS[cur].id+diff};paint()};
  tl.onpointerup=tl.onpointercancel=()=>{drag=null}}
function syncChips(){const box=pop.querySelector('#prSec');if(box)box.querySelectorAll('.chip').forEach((x,i)=>x.setAttribute('aria-pressed',i===st.sec))}
function build(){
  if(!pop){pop=document.createElement('div');pop.id='pracPop';pop.className='prpop';pop.hidden=true;T.appendChild(pop)}
  const S=SONGS[cur],dn={easy:'쉬움',normal:'보통',hard:'어려움'}[diff];SECS=sections();if(st.sec>=SECS.length)st.sec=0;
  if(st.sel&&(st.sel.b1>=BARS.length||st.sel.sid!==S.id+diff))st.sel=null;
  pop.innerHTML=`<i class="prbd"></i><div class="prbox" role="dialog" aria-label="연습 모드">
    <div class="prh"><b>${st.mode==='auto'?'자동 플레이':'연습 모드'}</b><span>${st.mode==='auto'?'AUTO PLAY':'PRACTICE'}</span><em lang="ja">${S.title} · ${dn}</em><button class="prx" aria-label="닫기">✕</button></div>
    <div class="prrow"><h4>모드</h4><div class="chips" id="prMode"></div></div>
    <div class="prrow"><h4>구간</h4><div class="chips prsec" id="prSec"></div>
      <div class="prtlw"><div class="prtl" id="prTl" aria-label="마디별 노트 수 — 누르거나 끌어서 구간 고르기"></div><p class="prsel" id="prSel"></p><p class="prn">막대 = 마디마다 노트 수 (분홍 후렴 · 보라 벌스 · 회색 잔잔) — 누르면 그 마디부터 4마디, 끌면 원하는 만큼</p></div></div>
    <div class="prrow"><h4>속도</h4><div class="chips" id="prRate"></div><p class="prn">느리게 하면 음도 같이 낮아져요</p></div>
    <div class="prrow"><h4>반복</h4><div class="chips" id="prLoop"></div></div>
    <p class="prn2">연습 · 자동 플레이는 랭킹과 내 기록에 남지 않아요 · 플레이 중 ${window.MOB?'왼쪽 위 ⏸':'<kbd>Esc</kbd>'} 로 멈추고 「곡 선택으로」를 누르면 끝나요</p>
    <div class="prgo"><button class="prstart"><b>${st.mode==='auto'?'관람 시작':'연습 시작'}</b><small>START</small></button></div></div>`;
  chips('prMode',[['prac','연습','내가 쳐요'],['auto','자동 플레이','보면서 익혀요']],()=>st.mode,v=>{st.mode=v;build();pop.hidden=false});
  chips('prSec',SECS.map((s,i)=>[i,s.label,mmss(s.s0)]),()=>st.sec,v=>{st.sec=v;st.sel=null;paint()});
  chips('prRate',[[.5,'x0.5'],[.75,'x0.75'],[1,'x1.0']],()=>st.rate,v=>{st.rate=v;SS('mds-prac-rate',v)});
  chips('prLoop',[[true,'켜기'],[false,'끄기']],()=>st.loop,v=>{st.loop=v;SS('mds-prac-loop',v?'on':'off')});
  timeline();paint();
  pop.querySelector('.prx').onclick=close;pop.querySelector('.prbd').onclick=close;
  pop.querySelector('.prstart').onclick=go}
function open(mode){if(typeof CHART==='undefined')return;st.mode=mode||st.mode;build();pop.hidden=false}
function close(){if(pop)pop.hidden=true}
function go(){if(!G0)return;const r=curRange(),S=SONGS[cur];let s0,e,label;
  if(r.whole){s0=0;e=SECS[0].e;label=''}
  else{s0=Math.max(0,G0.bT(r.b0));e=G0.bT(r.b1+1)-.03;const s=SECS[st.sec];label=st.sel?`${r.b0+1}~${r.b1+1}마디`:(s?s.label:'')}
  if(st.sel)st.sel.sid=S.id+diff;close();
  const b=Math.round(beatAt(s0)),pre=Math.max(0,s0-beatTime(b-4));
  start({s0,e,pre,rate:st.rate,loop:st.loop,auto:st.mode==='auto',label})}
// 연습이 끝나면 곡 화면에 잠깐 결과 쪽지
function done(o){let t=$('prToast');if(!t){t=document.createElement('div');t.id='prToast';t.className='prtoast';T.appendChild(t)}
  const c=o.cnt,auto=o.pr&&o.pr.auto;
  t.innerHTML=auto?`<b>자동 플레이 끝</b><span>${o.pr&&o.pr.label?o.pr.label+' · ':''}노트 ${o.total}개를 다 봤어요</span><button class="prag">다시 보기</button>`
    :`<b>연습 끝!</b><span>${o.pr&&o.pr.label?o.pr.label+' · ':''}정확도 <em>${o.acc.toFixed(1)}%</em> · 퍼펙트 ${c.p} · 그레이트 ${c.gr} · 굿 ${c.g} · 미스 ${c.m}</span><button class="prag">다시 연습</button>`;
  t.classList.remove('on');void t.offsetWidth;t.classList.add('on');const ag=t.querySelector('.prag');if(ag)ag.onclick=()=>{t.classList.remove('on');open()};
  clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('on'),6500);if(!auto&&window.PROFILE)PROFILE.practice()}
window.PRACTICE_UI={open,close,done,sections};
// 플레이 중 배지 (연습 · 자동)
const sg=document.querySelector('.hud .song');if(sg&&!sg.querySelector('.pbadge')){const b=document.createElement('span');b.className='pbadge';sg.appendChild(b)}
})();
