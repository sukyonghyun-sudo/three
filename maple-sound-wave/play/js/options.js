// 플레이 옵션 (2026-10-03 주말 작업) — 곡 화면 「노트 스피드」 줄 오른쪽 「⚙ 플레이 옵션」
// 참고: beatmania IIDX · DJMAX RESPECT V 의 RANDOM / MIRROR / SUDDEN+ / HIDDEN+
//  · 레인: 기본 · 미러(좌우 뒤집기 D↔K · F↔J) · 랜덤(판마다 레인 섞기) — 소리는 노트의 드럼 그대로 (킥 노트는 어느 레인에 와도 킥 소리)
//  · 가림막(서든 · 히든): 고르는 줄은 뺐어요 (2026-10-06 사용자: 「플레이 옵션에서 가림막은 빼」) — 늘 「없음」, 아래 가림막 코드는 쓰이지 않아요
//  · 배속 · 노트 스타일처럼 「이번 판만」 — 한 판 끝나면 기본으로 (engine resetPlayOpts)
(function(){
const $=id=>document.getElementById(id),stage=$('stage');if(!stage)return;
const st={lane:'off',cover:'off'};let perm=[0,1,2,3],raf=0;
const PERMS=[[1,0,3,2],[2,3,0,1],[3,2,1,0],[1,3,0,2],[2,0,3,1],[3,1,2,0],[0,2,1,3],[1,2,3,0],[3,0,1,2],[2,1,0,3],[0,3,2,1],[1,0,2,3],[0,1,3,2],[2,3,1,0],[3,2,0,1]];
const map=l=>st.lane==='mirror'?3-l:st.lane==='random'?perm[l]:l;
function apply(notes){if(st.lane==='random')perm=PERMS[Math.floor(Math.random()*PERMS.length)];
  if(st.lane!=='off')for(const n of notes){n.ol=n.l;n.l=map(n.l)}
  document.body.classList.toggle('popt',st.lane!=='off'||st.cover!=='off');badge();cover()}
function reset(){st.lane='off';st.cover='off';document.body.classList.remove('popt');cover();ui()}
const LN={off:'기본',mirror:'미러',random:'랜덤'},CN={off:'가림막 없음',sudden:'서든',hidden:'히든'};
function label(){const a=[];if(st.lane!=='off')a.push(LN[st.lane]);if(st.cover!=='off')a.push(CN[st.cover]);return a.join(' · ')}
function badge(){const sg=document.querySelector('.hud .song');if(!sg)return;let b=sg.querySelector('.obadge');if(!b){b=document.createElement('span');b.className='obadge';sg.appendChild(b)}
  b.textContent=[st.lane!=='off'?st.lane.toUpperCase():'',st.cover!=='off'?st.cover.toUpperCase():''].filter(Boolean).join(' · ')}
// 가림막: 레인 모양(원근 사다리꼴, 박자에 맞춰 흔들리는 것까지)을 매 프레임 따라가요
const cv=document.createElement('div');cv.className='lcover';cv.hidden=true;cv.setAttribute('aria-hidden','true');stage.appendChild(cv);   /* 처음엔 숨김 — 안 그러면 첫 판 전까지 무대 전체(배경 영상)를 덮어요 */
function poly(ya,yb){const f=y=>{const s=sAtY(y);return [xOf(0,s),xOf(4,s)]};const [a0,a1]=f(ya),[b0,b1]=f(yb);return `polygon(${a0}px ${ya}px,${a1}px ${ya}px,${b1}px ${yb}px,${b0}px ${yb}px)`}
function frame(){raf=0;if(st.cover==='off'||typeof playing==='undefined'||!playing){cv.hidden=true;return}
  try{const yH=G.yH,yJ=G.yJ,L=yJ-yH;let ya,yb;if(st.cover==='sudden'){ya=yH-6;yb=yH+L*.42}else{ya=yJ-L*.36;yb=yJ-34}
    const m=st.cover==='sudden'?`linear-gradient(180deg,#000 0,#000 ${yb-70}px,transparent ${yb}px)`:`linear-gradient(180deg,transparent ${ya}px,#000 ${ya+70}px,#000 100%)`;   /* 안쪽 끝 70px 은 부드럽게 */
    cv.hidden=false;cv.className='lcover '+st.cover;cv.style.clipPath=cv.style.webkitClipPath=poly(ya,yb);cv.style.webkitMaskImage=cv.style.maskImage=m}catch(e){}
  raf=requestAnimationFrame(frame)}
function cover(){cancelAnimationFrame(raf);raf=0;cv.hidden=true;if(st.cover!=='off')raf=requestAnimationFrame(frame)}
// 곡 화면 버튼 · 고르기 창
function ui(){const b=$('poptBtn');if(!b)return;const t=label();b.classList.toggle('on',!!t);b.querySelector('span').textContent=t||'플레이 옵션';
  const p=$('poptPop');if(p)p.querySelectorAll('[data-k]').forEach(x=>x.setAttribute('aria-pressed',st[x.dataset.k]===x.dataset.v))}
function mount(){const spd=document.querySelector('#title .opts .nstyle.spd');if(!spd||$('poptBtn'))return;
  const b=document.createElement('button');b.id='poptBtn';b.className='poptbtn';b.type='button';b.innerHTML='<i aria-hidden="true">⚙</i><span>플레이 옵션</span>';spd.appendChild(b);
  const p=document.createElement('div');p.id='poptPop';p.className='poptpop';p.hidden=true;
  p.innerHTML=`<p class="ph"><b>플레이 옵션</b><small>이번 판만 · 끝나면 기본으로</small></p>
    <div class="pg"><span>레인</span><div class="seg2">${Object.entries(LN).map(([v,t])=>`<button data-k="lane" data-v="${v}">${t}</button>`).join('')}</div></div>
    <p class="pn">미러 = 좌우 뒤집기 · 랜덤 = 판마다 섞기 (소리는 그 노트의 드럼 그대로)</p>`;
  spd.appendChild(p);
  b.onclick=e=>{e.stopPropagation();p.hidden=!p.hidden;ui()};
  p.onclick=e=>{e.stopPropagation();const x=e.target.closest('[data-k]');if(!x)return;st[x.dataset.k]=x.dataset.v;ui()};
  document.addEventListener('pointerdown',e=>{if(!p.hidden&&!p.contains(e.target)&&e.target!==b&&!b.contains(e.target))p.hidden=true});
  ui()}
mount();
window.PLAYOPTS={apply,reset,map,get:()=>Object.assign({},st),set:(k,v)=>{st[k]=v;ui()}};
})();
