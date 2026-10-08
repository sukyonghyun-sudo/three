// 결과 화면 v2 · 내 기록(클리어 램프) · 풀콤보/올퍼펙트 피날레 (2026-10-03 주말 작업)
// 참고한 게임 시스템:
//  · beatmania IIDX — 클리어 램프(FAILED~FULL COMBO), FAST/SLOW 개수, 플레이 그래프
//  · osu! — 타이밍 분포(hit error) · 흔들림(Unstable Rate = 오차 표준편차 ×10)
//  · maimai DX — FAST/LATE 개수 · 달성률
//  · 프로젝트 세카이 — 마지막 노트 직후 FULL COMBO / ALL PERFECT 연출
//  · DJMAX RESPECT V — MAX COMBO · PERFECT PLAY 배지, 기록 갱신(NEW RECORD)
// 되돌리기: 설정 「결과 화면」 새 화면 ↔ 예전 화면 · 「풀콤보 연출」 켜기 ↔ 끄기
(function(){
const $=id=>document.getElementById(id);
const LS=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:v}catch(e){return d}},SS=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fmt=n=>Math.round(n).toLocaleString('en-US');
// ---------------- 내 기록 (곡 × 난이도 × 채보 버전) — MSW 서버에 저장 (js/cloud.js) · 이 기기 localStorage 는 빠른 첫 화면용 ----------------
// 램프: 0 기록 없음 · 1 플레이 · 2 클리어(정확도 72% · B 이상) · 3 풀 콤보(미스 0) · 4 올 퍼펙트(전부 퍼펙트)
const REC_KEY='mds-rec-v1';let REC={};try{REC=JSON.parse(LS(REC_KEY,'{}'))||{}}catch(e){REC={}}
const rkey=(sid,d,ver)=>sid+'|'+d+(ver==='prev'?'|prev':'');
const LAMPS=[{k:'none',t:'NO PLAY',ko:'기록 없음'},{k:'play',t:'PLAYED',ko:'플레이'},{k:'clear',t:'CLEAR',ko:'클리어'},{k:'fc',t:'FULL COMBO',ko:'풀 콤보'},{k:'ap',t:'ALL PERFECT',ko:'올 퍼펙트'}];
function lampOf(o){return o.cnt.m===0?(o.cnt.gr+o.cnt.g===0?4:3):o.acc>=72?2:1}
function getRec(sid,d,ver){return REC[rkey(sid,d,ver||'new')]||null}
function putRec(o,lamp){const k=rkey(o.sid,o.diff,o.ver),p=REC[k]||{best:0,acc:0,lamp:0,combo:0,plays:0,rank:'',fs:0};
  const better=o.score>p.best;
  const n={best:Math.max(p.best||0,Math.round(o.score)),acc:Math.max(p.acc||0,Math.round(o.acc*10)/10),lamp:Math.max(p.lamp||0,lamp),combo:Math.max(p.combo||0,o.maxCombo),plays:(p.plays||0)+1,rank:better||!p.rank?o.rank:p.rank,last:Date.now()};
  REC[k]=n;SS(REC_KEY,JSON.stringify(REC));window.CLOUD&&CLOUD.dirty();return {prev:p,now:n}}
function replace(o){if(!o||typeof o!=='object')return;REC=o;SS(REC_KEY,JSON.stringify(REC))}   // 서버 기록과 합친 걸로 바꿔 끼우기 (js/cloud.js)
// ---------------- 통계 ----------------
function stats(o){
  const hits=o.log.filter(h=>h[1]!=null),errs=hits.map(h=>h[1]*1000);
  const fast=hits.filter(h=>h[2]!=='p'&&h[1]<0).length,slow=hits.filter(h=>h[2]!=='p'&&h[1]>0).length;
  const mean=errs.length?errs.reduce((a,b)=>a+b,0)/errs.length:0;
  const sd=errs.length>1?Math.sqrt(errs.reduce((a,b)=>a+(b-mean)*(b-mean),0)/(errs.length-1)):0;
  // 중앙값 (튀는 몇 개에 덜 흔들리게 싱크 추천은 중앙값으로)
  const so=errs.slice().sort((a,b)=>a-b),med=so.length?so[so.length>>1]:0;
  return {hits,errs,fast,slow,mean,sd,med,ur:sd*10}}
// ---------------- 결과 화면 그리기 ----------------
const JROWS=[['p','PERFECT','퍼펙트'],['gr','GREAT','그레이트'],['g','GOOD','굿'],['m','MISS','미스']];
function histSVG(st){
  const W=560,H=150,B=50,R=125,bw=W/B,bins=new Array(B).fill(0);
  for(const e of st.errs){const i=Math.floor((Math.max(-R,Math.min(R-.001,e))+R)/(2*R)*B);bins[i]++}
  const mx=Math.max(1,...bins),xOf=ms=>(ms+R)/(2*R)*W;
  let s=`<svg class="r2-hist" viewBox="0 0 ${W} ${H+26}" aria-label="타이밍 분포">`;
  // 판정 창 띠: 굿 · 그레이트 · 퍼펙트
  s+=`<rect class="w-g" x="0" y="0" width="${W}" height="${H}" rx="10"/>`;
  s+=`<rect class="w-gr" x="${xOf(-85)}" y="0" width="${xOf(85)-xOf(-85)}" height="${H}"/>`;
  s+=`<rect class="w-p" x="${xOf(-45)}" y="0" width="${xOf(45)-xOf(-45)}" height="${H}"/>`;
  bins.forEach((v,i)=>{if(!v)return;const ms=(i+.5)/B*2*R-R,h=Math.max(3,v/mx*(H-14)),c=Math.abs(ms)<=45?'b-p':Math.abs(ms)<=85?'b-gr':'b-g';
    s+=`<rect class="bar ${c}" x="${(i*bw+1).toFixed(1)}" y="${(H-h).toFixed(1)}" width="${(bw-2).toFixed(1)}" height="${h.toFixed(1)}" rx="2" style="--d:${(i*12)}ms"/>`});
  s+=`<line class="mid" x1="${W/2}" y1="0" x2="${W/2}" y2="${H}"/>`;
  const mxp=xOf(Math.max(-R,Math.min(R,st.med)));
  s+=`<path class="avg" d="M${mxp-9} ${H+16} L${mxp+9} ${H+16} L${mxp} ${H+4} Z"/>`;
  s+=`<text class="lbl" x="6" y="${H+20}">◀ 빠름 FAST</text><text class="lbl" x="${W-6}" y="${H+20}" text-anchor="end">늦음 SLOW ▶</text>`;
  return s+'</svg>'}
function flowSVG(o){
  const W=1080,H=86,dur=Math.max(1,o.dur),xOf=t=>Math.max(0,Math.min(W,t/dur*W));
  const C={p:'#FFC83D',gr:'#3FD9B0',g:'#FF9A42',m:'#FF4D6D'};
  let s=`<svg class="r2-flow" viewBox="0 0 ${W} ${H+22}" preserveAspectRatio="none" aria-label="판정 흐름">`;
  s+=`<rect class="bg" x="0" y="0" width="${W}" height="${H}" rx="12"/>`;
  // 노트마다 세로 눈금 (색 = 판정) · 미스는 위까지 빨갛게
  for(const h of o.log){const x=xOf(h[0]).toFixed(1),k=h[2],y0=k==='m'?4:k==='g'?H*.45:k==='gr'?H*.3:H*.18;
    s+=`<line x1="${x}" y1="${y0.toFixed(1)}" x2="${x}" y2="${H-4}" stroke="${C[k]}" stroke-width="${k==='m'?3:2}" opacity="${k==='m'?1:.75}"/>`}
  // 정확도 흐름 선 (노트 16개 이동 평균)
  const pts=[],win=16;let q=[];
  for(const h of o.log.slice().sort((a,b)=>a[0]-b[0])){q.push(h[2]==='p'?1:h[2]==='gr'?.8:h[2]==='g'?.5:0);if(q.length>win)q.shift();pts.push([xOf(h[0]),H-6-(q.reduce((a,b)=>a+b,0)/q.length)*(H-16)])}
  if(pts.length>1)s+=`<polyline class="accl" points="${pts.map(p=>p[0].toFixed(1)+','+p[1].toFixed(1)).join(' ')}"/>`;
  s+=`<text class="lbl" x="4" y="${H+18}">0:00</text><text class="lbl" x="${W-4}" y="${H+18}" text-anchor="end">${Math.floor(dur/60)}:${String(Math.round(dur%60)).padStart(2,'0')}</text>`;
  return s+'</svg>'}
let syncNew=null;
function show(o){
  const sec=$('result2');if(!sec)return false;
  const st=stats(o),lamp=lampOf(o),R=putRec(o,lamp),prevBest=Math.max(R.prev.best||0,o.serverBest||0),isNew=o.score>prevBest&&o.score>0,diffTxt={easy:'쉬움',normal:'보통',hard:'어려움'}[o.diff]||o.diff;
  const L=LAMPS[lamp],acc=o.acc.toFixed(2);
  const PR=window.PROFILE?PROFILE.award({cnt:o.cnt,lamp,isNew,adlib:o.adlib,maxCombo:o.maxCombo,acc:o.acc,hits:st.errs.length,sd:st.sd,sid:o.sid,diff:o.diff}):null,lvup=PR&&PR.after.lv>PR.before.lv;   // 플레이어 EXP · 레벨 · 업적 (js/profile.js)
  // 싱크 추천: 20개 이상 맞힌 판에서 중앙값이 12ms 넘게 한쪽으로 쏠렸으면 (5ms 단위 · 설정 슬라이더와 같은 단위)
  syncNew=null;let syncH='';
  if(st.errs.length>=20&&Math.abs(st.med)>=12){syncNew=Math.max(-300,Math.min(300,Math.round((o.off-st.med)/5)*5));
    syncH=`<button class="r2-sync" id="r2Sync"><b>싱크 자동 보정</b><span>${o.off}ms → ${syncNew}ms</span></button>`}
  const judges=JROWS.map(([k,en,ko])=>{const v=o.cnt[k]||0,w=o.total?v/o.total*100:0;
    return `<li class="j-${k}"><span class="jn"><b>${en}</b><small>${ko}</small></span><span class="jb"><i style="--w:${w.toFixed(1)}%"></i></span><span class="jv">${v}</span></li>`}).join('');
  const art=o.art?`<img src="${esc(o.art)}" alt="" decoding="async">`:'';
  sec.innerHTML=`<div class="r2-wrap">
    <div class="r2-left">
      <div class="r2-song r2-card"><div class="r2-jk">${art}</div><div class="r2-st"><p class="r2-t" lang="ja">${esc(o.title)}</p><p class="r2-s">${esc(o.kana&&o.kana!==o.sub?o.kana+' · '+(o.sub||''):(o.sub||''))}</p>
        <p class="r2-pills"><span class="r2-dp d-${esc(o.diff)}">${diffTxt}</span><span class="r2-op">노트 ${o.move==='jump'?'점프! +'+Math.round(((window.JUMP_BONUS||1.1)-1)*100)+'%':'보통'} · x${Math.round(o.spx*100)%10?(+o.spx).toFixed(2):(+o.spx).toFixed(1)}</span>${o.ver==='prev'?'<span class="r2-op">예전 채보</span>':''}${o.popt&&(o.popt.lane!=='off'||o.popt.cover!=='off')?`<span class="r2-op po">${[o.popt.lane==='mirror'?'미러':o.popt.lane==='random'?'랜덤':'',o.popt.cover==='sudden'?'서든':o.popt.cover==='hidden'?'히든':''].filter(Boolean).join(' · ')}</span>`:''}</p></div></div>
      <div class="r2-gradebox r2-panel"><div class="r2-sl">RANK</div><div class="r2-grade g-${o.rank}"><span class="gl">${o.rank}</span></div>
        <div class="r2-lamp l-${L.k}"><b>${L.t}</b><small>${L.ko}</small></div>
        ${PR?`<div class="r2-exp"><span class="lvb">Lv.<b>${PR.after.lv}</b></span><span class="xbar"><i style="--w0:${lvup?0:(PR.before.cur/PR.before.next*100).toFixed(1)}%;--w1:${(PR.after.cur/PR.after.next*100).toFixed(1)}%"></i></span><em>EXP +${PR.gain}</em>${lvup?'<strong class="lvup">LEVEL UP!</strong>':''}</div>`:''}</div>
      <div class="r2-btns"><button class="r2-b r2-again" id="r2Again"><span class="pi" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 5V2L7 6l5 4V7a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8z" fill="#fff"/></svg></span><b>다시 하기</b><small>RETRY</small></button>
        <button class="r2-b" id="r2Diff"><b>난이도 선택</b><small>DIFFICULTY</small></button><button class="r2-b" id="r2Sel"><b>곡 선택</b><small>SONG SELECT</small></button></div>
    </div>
    <div class="r2-right">
      <div class="r2-score r2-panel"><div class="r2-sl">SCORE</div><div class="r2-sv" id="r2Score">0</div>
        ${isNew?'<div class="r2-new"><b>NEW RECORD!</b></div>':''}
        <div class="r2-sub"><span>최고 기록 <b>${prevBest?fmt(prevBest):'-'}</b>${prevBest&&o.score!==prevBest?`<em class="${o.score>prevBest?'up':'dn'}">${o.score>prevBest?'+':'−'}${fmt(Math.abs(o.score-prevBest))}</em>`:''}</span>
          <span>정확도 <b>${acc}%</b></span><span>최대 콤보 <b>${o.maxCombo}</b><small> / ${o.total}</small></span><span>플레이 <b>${R.now.plays}</b><small>번째</small></span></div></div>
      <div class="r2-mid">
        <div class="r2-judge r2-panel"><p class="r2-h">판정</p><ul class="r2-jl">${judges}</ul>
          <div class="r2-fs"><span class="fs-f">FAST <b>${st.fast}</b></span><span class="fs-s">SLOW <b>${st.slow}</b></span>${o.adlib&&o.adlib.total?`<span class="fs-a" title="숨은 노트 — 채보에 없는 곡의 드럼 자리">AD-LIB <b>${o.adlib.hit}<small>/${o.adlib.total}</small></b></span>`:''}</div></div>
        <div class="r2-time r2-panel"><p class="r2-h">타이밍 분포 <small>맞힌 노트 ${st.errs.length}개</small></p>${histSVG(st)}
          <div class="r2-ts"><span>평균 <b>${st.med>0?'+':''}${Math.round(st.med)}ms</b><small>${Math.abs(st.med)<6?' 딱 맞아요':st.med>0?' 조금 늦게':' 조금 빠르게'}</small></span><span>흔들림 <b>${Math.round(st.sd)}ms</b><small> UR ${Math.round(st.ur)}</small></span>${syncH}</div></div>
      </div>
      <div class="r2-flowp r2-panel"><p class="r2-h">판정 흐름 <small>세로 줄 = 노트 하나 · 빨강 = 미스 · 선 = 정확도</small></p>${flowSVG(o)}</div>
    </div>
  </div>`;
  $('r2Again').onclick=()=>$('again').click();$('r2Diff').onclick=()=>{window.UISFX&&UISFX.play('back');$('toTitle').click()};$('r2Sel').onclick=()=>{window.UISFX&&UISFX.play('back');$('toSelect').click()};
  const sb=$('r2Sync');if(sb)sb.onclick=()=>{if(syncNew==null)return;if(typeof setOff==='function')setOff(syncNew);sb.classList.add('done');sb.innerHTML=`<b>적용했어요 ✓</b><span>싱크 ${syncNew}ms</span>`;syncNew=null};
  // 등장 순서: 판 → 등급 도장 → 점수 올라가기 → 신기록 · 램프
  sec.classList.remove('r2go');void sec.offsetWidth;sec.classList.add('r2go');window.UISFX&&UISFX.play('result',lamp,isNew);   /* 결과 효과음: 등급 도장 · 램프 · 신기록 시각에 맞춰 (js/uisfx.js) */   /* 'go' 는 큰 버튼 클래스라 겹치지 않는 이름으로 */
  const el=$('r2Score'),t0=performance.now()+650,D=1100;
  (function up(){const k=Math.max(0,Math.min(1,(performance.now()-t0)/D));el.textContent=fmt(o.score*(1-Math.pow(1-k,3)));if(k<1&&sec.isConnected)requestAnimationFrame(up)})();
  if(PR&&PR.ach.length)PR.ach.forEach((a,i)=>setTimeout(()=>PROFILE.toast(a),1900+i*1000));
  return true}
// ---------------- 풀콤보 · 올퍼펙트 피날레 (마지막 노트 직후) ----------------
function finale(kind){
  const stage=$('stage');if(!stage)return;
  const old=stage.querySelector('.fin');if(old)old.remove();
  const ap=kind==='ap',w1=ap?'ALL':'FULL',w2=ap?'PERFECT!':'COMBO!';
  const chars=(w,d0)=>[...w].map((c,i)=>`<i style="--i:${i+d0}"><span class="b">${c}</span><span class="f">${c}</span></i>`).join('');   /* 두 겹: 뒤 흰 테두리 · 앞 그라데이션 */
  const d=document.createElement('div');d.className='fin '+(ap?'fin-ap':'fin-fc');   /* 'fc' 는 기존 CSS(body.gfx .fc{display:none})와 겹쳐서 fin-fc */d.setAttribute('aria-hidden','true');
  d.innerHTML=`<div class="fin-rays"></div><div class="fin-ring"></div><div class="fin-t"><span class="w1">${chars(w1,0)}</span><span class="w2">${chars(w2,w1.length)}</span></div><div class="fin-ko">${ap?'올 퍼펙트':'풀 콤보'}</div>`;
  stage.appendChild(d);
  try{if(window.confetti)confetti(ap?160:110)}catch(e){}
  try{if(typeof kitPlay==='function'&&typeof actx!=='undefined'&&actx)kitPlay('crash',actx.currentTime+.02,ap?.9:.75)}catch(e){}   /* actx 는 engine.js 의 let — window 에 없어서 이름으로 불러요 */
  setTimeout(()=>d.classList.add('out'),2300);setTimeout(()=>d.remove(),2900)}
// 예전 결과 화면을 골랐을 때도 내 기록 · 램프 · EXP · 업적은 똑같이 쌓아요 (화면만 예전 것)
function recordOnly(o){const st=stats(o),lamp=lampOf(o),R=putRec(o,lamp),prevBest=Math.max(R.prev.best||0,o.serverBest||0),isNew=o.score>prevBest&&o.score>0;
  const PR=window.PROFILE?PROFILE.award({cnt:o.cnt,lamp,isNew,adlib:o.adlib,maxCombo:o.maxCombo,acc:o.acc,hits:st.errs.length,sd:st.sd,sid:o.sid,diff:o.diff}):null;
  if(PR&&PR.ach.length)PR.ach.forEach((a,i)=>setTimeout(()=>PROFILE.toast(a),1200+i*1000));return {lamp,isNew,PR}}
window.RESULT2={show,finale,getRec,lampOf,LAMPS,rkey,recordOnly,all:()=>REC,replace};
})();
