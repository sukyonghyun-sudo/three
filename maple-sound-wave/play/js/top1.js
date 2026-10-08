// ===== 랭킹 1위 한마디 (2026-10-06 사용자: 「랭킹 1위 찍으면 메시지를 남길 수 있는 창 → 랭킹에 말풍선 · 곡 시작 화면에 1위와 메시지」 · 「게임 끝나고 1등하면 폭죽 터뜨리고 입력창」) =====
//  · js/rank.js submit: 이번 점수가 그 곡 · 난이도의 1위 점수를 넘으면(첫 기록 포함) 점수를 올리기 전에 TOP1.ask() — 결과 화면 위에 폭죽 + 단풍 + 한마디 입력창
//    한마디는 그 랭킹 기록의 부가 정보(extras.msg)로 점수와 같이 올라가요 → 1위 본인만 쓸 수 있어요 (남이 바꿀 수 없음)
//    랭킹은 최고 기록 유지라 같은 점수로는 다시 못 바꿔요 — 더 높은 점수로 1위를 다시 하면 그때 새로 (전에 쓴 말이 입력창에 미리 들어 있어요)
//  · 30자 · 한 줄 · 기본 금칙어는 거절 (보여 줄 때도 한 번 더 걸러요) · 화면엔 늘 글자 그대로 (HTML 아님)
//  · 2분 동안 답이 없거나 탭을 바꾸면 한마디 없이 바로 올려요 — 점수가 사라지지 않게
(function(){
const $=id=>document.getElementById(id),stage=$('stage');if(!stage)return;
const MAX=30,WAIT=120000;
const BAD=['시발','씨발','씨팔','시팔','ㅅㅂ','ㅆㅂ','ㅅ ㅂ','병신','븅신','ㅂㅅ','좆','존나','졸라','개새','개색','새끼','지랄','ㅈㄹ','닥쳐','꺼져','미친놈','미친년','등신','엿먹','니미','느금','애미','애비','fuck','shit','bitch','sex','섹스','자살'];
const norm=s=>String(s).toLowerCase().replace(/[\s.\-_*~!@#$%^&()+=|\\/?,:;'"`<>\[\]{}·]/g,'');
const bad=s=>{const t=norm(s);return BAD.some(w=>t.includes(norm(w)))};
const CTRL=c=>c<32||c===127||(c>=0x200b&&c<=0x200f)||c===0x2028||c===0x2029||c===0xfeff;   // 제어 문자 · 보이지 않는 글자 · 줄 나눔 문자
const clean=s=>[...[...String(s||'')].filter(ch=>!CTRL(ch.codePointAt(0))).join('').replace(/\s+/g,' ').trim()].slice(0,MAX).join('');
const safe=s=>{const v=clean(s);return v&&!bad(v)?v:''};   // 보여 줄 때 (랭킹 말풍선 · 곡 시작 카드)
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CROWN='<path d="M4 9.5l6.2 5L16 5.5l5.8 9 6.2-5-2.6 11.5H6.6z"/><path d="M6.4 22h19.2v3H6.4z"/><circle cx="4" cy="8.2" r="2.3"/><circle cx="16" cy="4" r="2.3"/><circle cx="28" cy="8.2" r="2.3"/>';
// 폭죽: 결과 화면 위 투명 캔버스에 약 2.6초 — 여기저기서 팡팡 (금 · 분홍 · 하늘 · 흰 · 보라 불꽃, 중력 · 꼬리)
function fireworks(ms){ms=ms||2600;const cv=document.createElement('canvas');cv.className='t1fx';cv.width=1920;cv.height=1080;cv.setAttribute('aria-hidden','true');stage.appendChild(cv);const g=cv.getContext('2d');
  const P=[],COL=['#FFE27A','#FF6FC0','#7FE7FF','#FFFFFF','#B79BFF','#FFB347'],t0=performance.now();let next=t0,n=0;
  const burst=(x,y)=>{const c=COL[n%COL.length],c2=COL[(n+2)%COL.length],k=50+Math.random()*26;
    for(let i=0;i<k;i++){const a=i/k*6.283+Math.random()*.2,v=4+Math.random()*6;P.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:1,dec:.011+Math.random()*.011,c:i%3?c:c2,r:2.2+Math.random()*2.2})}
    window.UISFX&&UISFX.play('fw');n++};
  (function frame(now){const t=now-t0;if(t<ms&&now>=next){burst(300+Math.random()*1320,150+Math.random()*440);next=now+150+Math.random()*230}
    g.globalCompositeOperation='destination-out';g.fillStyle='rgba(0,0,0,.26)';g.fillRect(0,0,1920,1080);g.globalCompositeOperation='lighter';   /* 꼬리: 이전 그림을 조금씩만 지워요 */
    for(let i=P.length-1;i>=0;i--){const p=P[i];p.x+=p.vx;p.y+=p.vy;p.vy+=.09;p.vx*=.985;p.vy*=.985;p.life-=p.dec;if(p.life<=0){P.splice(i,1);continue}
      g.globalAlpha=Math.min(1,p.life*1.4);g.fillStyle=p.c;g.beginPath();g.arc(p.x,p.y,p.r*(.6+.4*p.life),0,6.283);g.fill()}
    g.globalAlpha=1;g.globalCompositeOperation='source-over';
    if(t<ms||P.length)requestAnimationFrame(frame);else cv.remove()})(t0)}
// 한마디 입력창: 폭죽과 함께 떠요 → 남기기(한마디) · 건너뛰기('') 로 풀려요
function ask(o){o=o||{};const ED=!!o.edit;return new Promise(res=>{let done=false,tm=0,p=null;   /* edit: 지금 1위가 랭킹 판에서 한마디를 남기거나 바꿀 때 — 폭죽 없이, 취소하면 null */
  const finish=v=>{if(done)return;done=true;clearTimeout(tm);document.removeEventListener('visibilitychange',vis);if(p){p.classList.add('out');const q=p;setTimeout(()=>q.remove(),300)}res(v)};
  const NO=ED?null:'',vis=()=>{if(document.hidden)finish(NO)};document.addEventListener('visibilitychange',vis);tm=setTimeout(()=>finish(NO),WAIT);
  setTimeout(()=>{if(done)return;
    const R2=$('result2');if(typeof playing!=='undefined'&&playing){finish(NO);return}if(!ED&&R2&&R2.classList.contains('hidden')&&$('result')&&$('result').classList.contains('hidden')){finish('');return}   /* 그새 결과 화면을 떠났으면 한마디 없이 */
    if(!ED){fireworks(2600);try{window.confetti&&confetti(80)}catch(e){}window.UISFX&&UISFX.play('top1')}
    const D=(typeof DIFFS!=='undefined'&&DIFFS[o.diff])||{jp:o.diff||''},S=(window.SONGS||[]).find(s=>s.id===o.sid)||{title:''};
    p=document.createElement('div');p.className='t1pop';
    p.innerHTML=`<i class="t1bd"></i><div class="t1box" role="dialog" aria-modal="true" aria-label="랭킹 1위 한마디"><svg class="t1cr" viewBox="0 0 32 26" aria-hidden="true">${CROWN}</svg>
      <p class="t1k">${ED?'No.1':'NEW No.1'}</p><h2 class="t1t">${ED?'1위의 한마디':'랭킹 1위 달성!'}</h2><p class="t1s">${esc(S.title)} · ${esc(D.jp)} · <b>${Number(o.score||0).toLocaleString()}</b>점</p>
      <label class="t1q" for="t1in">다른 플레이어들에게 한마디 남겨 주세요</label>
      <div class="t1row"><input id="t1in" type="text" maxlength="${MAX}" autocomplete="off" spellcheck="false" placeholder="예: 4배로 크는 중! 도전 환영~"><span class="t1n"></span></div>
      <p class="t1e" role="alert" hidden></p>
      <div class="t1btns"><button type="button" class="t1ok">남기기</button><button type="button" class="t1no">${ED?'취소':'건너뛰기'}</button></div>
      <p class="t1h">${ED?'비워서 남기면 한마디를 지워요 · ':''}1위를 지키는 동안 랭킹과 곡 시작 화면에 보여요</p></div>`;
    stage.appendChild(p);
    const inp=p.querySelector('input'),cnt=p.querySelector('.t1n'),err=p.querySelector('.t1e');inp.value=clean(o.prev||'');
    const upd=()=>{cnt.textContent=[...inp.value].length+'/'+MAX};upd();
    const ok=()=>{const v=clean(inp.value);if(v&&bad(v)){err.textContent='쓸 수 없는 말이 들어 있어요. 다르게 적어 주세요';err.hidden=false;inp.focus();return}finish(v)};
    p.querySelector('.t1ok').onclick=ok;p.querySelector('.t1no').onclick=()=>finish(NO);
    inp.addEventListener('input',()=>{err.hidden=true;upd()});
    const stop=e=>e.stopPropagation();   /* 입력창 키는 게임으로 안 새요 (D F J K 드럼 소리 · 단축키) */
    inp.addEventListener('keydown',e=>{e.stopPropagation();if(e.isComposing||e.keyCode===229)return;if(e.key==='Enter'){e.preventDefault();ok()}else if(e.key==='Escape'){e.preventDefault();finish(NO)}});
    inp.addEventListener('keyup',stop);inp.addEventListener('keypress',stop);
    setTimeout(()=>{try{inp.focus({preventScroll:true})}catch(e){}},420)},o.delay==null?900:o.delay)})}   // 결과 화면이 먼저 뜨고 0.9초 뒤에
window.TOP1={ask,fireworks,safe,bad,clean,esc,CROWN};
})();
