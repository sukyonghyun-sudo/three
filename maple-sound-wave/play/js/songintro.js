// 곡 시작 인트로 (2026-10-06 사용자: 「곡 선택한 다음에 게임 시작 전에 비트게임다운 간단하고 짧은 인트로가 있어야 하지 않나」)
//  · START → 화면 가득 짧은 카드(약 1.3초): 대각선 띠 두 줄이 쓸고 들어오며 앨범 아트가 툭 튀어나오고, 오른쪽에 곡 이름 · 설명 · 난이도 · LEVEL · BPM · 작곡가
//    → 곡 소리가 준비되면 카드가 왼쪽으로 쓸려 나가며(쉭) 플레이 화면 — 카운트다운(준비! 3 2 1 시작!)이 바로 이어져요
//  · 연습 모드 · 자동 플레이(구간 시작)는 건너뛰어요 · 다시 하기도 같은 인트로
//  · engine.js start(): SINTRO.play(곡, 난이도) → 소리를 받은 뒤 그 약속을 기다리고 → 플레이 화면을 켤 때 SINTRO.out() · 소리를 못 받으면 SINTRO.cancel()
(function(){
const $=id=>document.getElementById(id),stage=$('stage');if(!stage)return;
const el=document.createElement('div');el.id='sintro';el.className='sintro';el.setAttribute('aria-hidden','true');stage.appendChild(el);
const MIN=1250;   // 최소 보여 주는 시간 (ms) — 들어오는 0.55초 + 머무는 0.7초
let outT=0;
const readMs=m=>Math.min(2400,Math.max(1300,900+[...String(m||'')].length*50));   // 1위 한마디를 다 읽을 시간 — 글자 수만큼 1.3 ~ 2.4초 더 (2026-10-06 사용자: 「텍스트를 다 읽을 수 있게 체류 시간을 조금 늘리면」)
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
// 랭킹 1위 + 한마디 (2026-10-06 사용자: 「곡 시작 화면 알약 아래쯤에 랭킹 1위 누구인지 · 메시지도」) — 왕관 · 랭킹 1위 · 이름 · 말풍선
function topLine(t){if(!t)return '';const E=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])),cr=window.TOP1?TOP1.CROWN:'';
  const L=[...(t.msg||'')].length,fs=L<=12?2.3:L<=20?1.95:1.65;   /* 짧은 말일수록 더 크게 */
  return `<div class="si-top${t.msg?'':' nomsg'}"><span class="av" data-uid="${E(t.userId||'')}"><img alt="" decoding="async"><svg class="cr" viewBox="0 0 32 26" aria-hidden="true">${cr}</svg></span>`+
    `<div class="tx"><p class="hd"><b>${window.MOB?'모바일 1위':'랭킹 1위'}</b><span class="nm">${E(t.name)}</span>${window.MOB&&t.d&&typeof DIFFS!=='undefined'&&DIFFS[t.d]?`<span class="sdf d-${E(t.d)}">${E(DIFFS[t.d].name)}</span>`:''}<span class="sc">${Number(t.value||0).toLocaleString()}점</span></p>`+
    (t.msg?`<p class="msg" style="font-size:${fs}rem">“${E(t.msg)}”</p>`:'')+`</div></div>`}
function topAv(){const a=el.querySelector('.si-top .av'),uid=a&&a.dataset.uid;if(!uid||!window.RANK||!RANK.headshot)return;   // 1위 아바타 얼굴 (랭킹 판과 같은 그림 — 한 번 그린 건 기억해요)
  RANK.headshot(uid).then(u=>{const im=a.querySelector('img');if(im&&im.isConnected){im.src=u;a.classList.add('ok')}}).catch(()=>{})}
function play(S,dk){clearTimeout(outT);if(!S)return Promise.resolve();
  const D=(typeof DIFFS!=='undefined'&&DIFFS[dk])||{jp:dk,en:''};let lv='';
  try{const C=typeof chartOf==='function'?chartOf(S):S.chart;if(window.SONGINFO&&SONGINFO.stats&&C&&C.sets&&C.sets[dk])lv=SONGINFO.stats(C.sets[dk],C.beats).lv}catch(e){}
  const art=(window.SONG_ART||{})[S.id]||S.jacket||'',T0=window.RANK&&RANK.top?RANK.top(S.id,dk):null,t0=performance.now();let end=t0+MIN+(T0&&T0.msg?readMs(T0.msg):0);
  el.innerHTML=`<i class="si-bg"></i><div class="si-box"><i class="si-band b1"></i><i class="si-band b2"></i>
    <div class="si-art">${art?`<img src="${esc(art)}" alt="" crossorigin="anonymous" decoding="async">`:''}</div>
    <div class="si-info"><p class="si-lbl">NOW PLAYING</p><h2 class="si-t">${esc(S.title)}</h2>${S.sub?`<p class="si-s">${esc(S.sub)}</p>`:''}
      <p class="si-pills"><span class="si-d d-${esc(dk)}">${esc(D.jp)} <i>${esc(D.en)}</i></span>${lv!==''&&lv!=null?`<span class="si-p"><small>LEVEL</small> <b>${esc(lv)}</b></span>`:''}<span class="si-p">♪ <b>${esc(S.bpm)}</b> BPM</span><span class="si-p">MUSIC COMPOSER : <b>석용현</b></span></p>
      ${topLine(T0)}<i class="si-streak"></i></div></div>`;
  if(window.RANK&&RANK.topOf&&!T0)RANK.topOf(S.id,dk).then(t=>{if(t&&el.classList.contains('on')&&!el.querySelector('.si-top')){const q=el.querySelector('.si-pills');if(q){q.insertAdjacentHTML('afterend',topLine(t));topAv();const n=performance.now();if(t.msg&&n<end)end=Math.max(end,n+800+readMs(t.msg))}}}).catch(()=>{});   /* 아직 안 읽은 랭킹이면 받는 대로 — 한마디가 늦게 와도 다 읽을 만큼 */
  el.classList.remove('out','on');void el.offsetWidth;el.classList.add('on');
  topAv();   /* 1위 한마디가 있으면 다 읽을 때까지 (readMs) */
  return new Promise(r=>{const w=()=>{const d=end-performance.now();if(d>0)setTimeout(w,d);else r()};setTimeout(w,MIN)})}
function out(){if(!el.classList.contains('on')||el.classList.contains('out'))return;el.classList.add('out');window.UISFX&&UISFX.play('swoosh');clearTimeout(outT);outT=setTimeout(()=>{el.classList.remove('on','out');el.innerHTML=''},560)}
function cancel(){clearTimeout(outT);el.classList.remove('on','out');el.innerHTML=''}
function status(t,k){const box=el.querySelector('.si-info');if(!box)return;let w=box.querySelector('.si-wait');if(t==null){if(w)w.remove();return}   // 곡 영상을 아직 받는 중이면 카드 아래에 진행률 (engine.js vidWait)
  if(!w){w=document.createElement('p');w.className='si-wait';w.innerHTML='<u></u><span></span>';box.appendChild(w)}w.lastChild.textContent=t;w.style.setProperty('--k',Math.max(0,Math.min(1,k||0)).toFixed(3))}
window.SINTRO={play,out,cancel,status,on:()=>el.classList.contains('on')};
})();
