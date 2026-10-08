// ===== 모바일 세로판 화면 (2026-10-06 사용자: 「모바일 버전으로 — 세로 화면 · 버튼 잘 눌리고 · UI 잘 · 최적화도 잘」) =====
//  무대: 폭 1080 × 높이 1700~2400 (js/engine.js resize — 폰 비율대로) · 폰이 가로면 무대를 돌려 늘 세로
//  곡 화면: 위 막대(플레이어 카드 · 게임 방법 · 설정) / 가운데 굴림판(앨범 그림 · 곡 띠 · 난이도 · 노트 옵션 · 랭킹 · 곡 정보 탭) / 아래 막대(◀ START ▶ — 엄지 자리)
//  · 오늘의 미션은 모바일에선 없어요 (2026-10-07 사용자: 「모바일에서 오늘의 미션은 제거」 — js/profile.js 도 모바일이면 미션을 안 셈해요)
//  · 곡 띠: 곡 표지를 가로로 늘어놓아 곡이 여러 개인 게 바로 보여요 — 누르면 그 곡 · 앨범 그림을 옆으로 밀어도 넘어가요
//  · 처음 곡 화면 룰렛(js/songlist.js)은 곡 띠의 불빛이 따라 돌아요
(function(){
if(!window.MOB)return;
const $=id=>document.getElementById(id),T=$('title'),ST=$('stage');if(!T||!ST)return;
const E=(tag,cls,html)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e};
const LS=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:v}catch(e){return d}},SS=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};

// ---------- 안전 영역 (노치 · 홈 막대) → 무대 px ----------
const probe=E('div');probe.setAttribute('aria-hidden','true');
probe.style.cssText='position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top,0px) env(safe-area-inset-right,0px) env(safe-area-inset-bottom,0px) env(safe-area-inset-left,0px)';
document.body.appendChild(probe);
function safe(){if(window.SAFE)return window.SAFE;const cs=getComputedStyle(probe),k=window.STAGE_K||1,v=n=>(parseFloat(cs[n])||0)/k,r=window.ROT||0;
  let t=v('paddingTop'),b=v('paddingBottom');if(r===-90){t=v('paddingLeft');b=v('paddingRight')}else if(r===90){t=v('paddingRight');b=v('paddingLeft')}
  const oy=typeof BG_OY==='number'?BG_OY:0;return {t:Math.round(Math.max(0,t-oy)),b:Math.round(Math.max(0,b-oy))}}

// ---------- 곡 화면 다시 묶기 ----------
const top=E('div','mtop'),scr=E('div','mscroll'),bar=E('div','mbar');top.id='mtop';scr.id='mscroll';bar.id='mbar';
const colA=T.querySelector('.colA'),colB=T.querySelector('.colB'),rk=$('rankBox'),sr=T.querySelector('.startrow'),lm=$('loadMsg');
[$('pcard'),$('guideBtn'),$('settings')].forEach(e=>{if(e)top.appendChild(e)});
// 곡 띠
const strip=E('div','mstrip');strip.id='mstrip';strip.setAttribute('role','listbox');strip.setAttribute('aria-label','곡 고르기');
const jk=SONGS.map((S,i)=>{const b=E('button','mj');b.type='button';b.dataset.i=i;b.setAttribute('role','option');b.setAttribute('aria-label',S.title);
  b.innerHTML=`<span class="mjk"><img src="${S.jacket||''}" alt="" decoding="async" onerror="this.style.visibility='hidden'"></span><span class="mjl"></span>`;
  b.onclick=()=>{b.blur();if(i!==cur&&window.SONGLIST)SONGLIST.go(i)};strip.appendChild(b);return b});
function stripOn(i){jk.forEach((b,j)=>{const on=j===i;if(b.classList.contains('on')!==on){b.classList.toggle('on',on);b.setAttribute('aria-selected',on?'true':'false')}})}
function lamps(){const R=window.RESULT2,ver=typeof chartVer!=='undefined'?chartVer:'new';
  jk.forEach((b,i)=>{const S=SONGS[i];b.querySelector('.mjl').innerHTML=['easy','normal','hard'].map(d=>{const x=R&&R.getRec&&R.getRec(S.id,d,ver);return `<i class="lp${x?x.lamp:0}"></i>`}).join('')})}
// 탭: 랭킹 · 곡 정보
{const mp=$('mpanel');if(mp)mp.remove()}
const tabs=E('div','mtabs');tabs.setAttribute('role','tablist');const pane=E('div','mpane');
const TB=[['rank','랭킹',rk],['info','곡 정보',$('cinfo')]].filter(t=>t[2]);
TB.forEach(([k,lab,node])=>{node.dataset.mt=k;pane.appendChild(node);const b=E('button','mtab',lab);b.type='button';b.dataset.mt=k;b.setAttribute('role','tab');b.onclick=()=>{b.blur();setTab(k)};tabs.appendChild(b)});
function setTab(k){if(!TB.some(t=>t[0]===k))k=TB[0][0];TB.forEach(([kk,,node])=>{const on=kk===k;node.classList.toggle('mon',on)});
  tabs.querySelectorAll('.mtab').forEach(b=>{const on=b.dataset.mt===k;b.classList.toggle('on',on);b.setAttribute('aria-selected',on?'true':'false')});SS('mds-mtab',k)}
setTab(LS('mds-mtab','rank'));
scr.append(colA,strip,colB,tabs,pane);
if(lm)bar.appendChild(lm);if(sr)bar.appendChild(sr);
T.append(top,scr,bar);
['songPrev','songNext'].forEach((id,n)=>{const b=$(id);if(b)b.onclick=()=>{b.blur();window.SONGLIST&&SONGLIST.step(n?1:-1,true)}});   /* ◀ ▶ 는 START 양옆 — 엄지로 곡 넘기기 */

// ---------- 곡이 바뀌면 띠 불빛 ----------
if(typeof window.openSong==='function'){const o=window.openSong;window.openSong=function(i){const r=o.apply(this,arguments);try{stripOn(cur);lamps()}catch(e){}return r}}
if(window.SONGINFO&&SONGINFO.songs){const o=SONGINFO.songs;SONGINFO.songs=function(){const r=o.apply(this,arguments);try{lamps()}catch(e){}return r}}
// 룰렛이 도는 동안: 목록(숨김)의 가운데 줄을 띠 불빛이 따라가요
let spinRaf=0;function spinWatch(){const s=T.classList.contains('slspin');if(s&&!spinRaf){strip.classList.add('spin');const f=()=>{const r=document.querySelector('#slist .slr.sel');if(r)stripOn(+r.dataset.i);spinRaf=T.classList.contains('slspin')?requestAnimationFrame(f):0;if(!spinRaf){strip.classList.remove('spin');stripOn(cur);swipeHint()}};spinRaf=requestAnimationFrame(f)}}
new MutationObserver(spinWatch).observe(T,{attributes:true,attributeFilter:['class']});

// ---------- 앨범 그림을 옆으로 밀어 곡 넘기기 ----------
let sw=null;
colA.addEventListener('pointerdown',e=>{if(!e.isPrimary)return;const p=toStage(e.clientX,e.clientY);sw={x:p.x,y:p.y,t:performance.now()}},{passive:true});
addEventListener('pointerup',e=>{if(!sw)return;const p=toStage(e.clientX,e.clientY),dx=p.x-sw.x,dy=p.y-sw.y,dt=performance.now()-sw.t;sw=null;
  if(Math.abs(dx)>90&&Math.abs(dx)>Math.abs(dy)*1.3&&dt<700&&window.SONGLIST){SONGLIST.step(dx<0?1:-1,true);hideHint()}},{passive:true});
addEventListener('pointercancel',()=>{sw=null},{passive:true});
// 곡 넘김 모션: 옆으로 밀려 나가고 반대쪽에서 들어와요 (PC 는 세로 바퀴 — engine wheelSwap)
window.wheelSwap=function(dir,swap){const A=$('artWrap');if(!A||matchMedia('(prefers-reduced-motion: reduce)').matches){swap();return}
  A.style.setProperty('--sd',dir<0?-1:1);A.classList.remove('msin');A.classList.add('msout');
  clearTimeout(A.__mt);A.__mt=setTimeout(()=>{swap();A.classList.remove('msout');void A.offsetWidth;A.classList.add('msin')},130)};
// 처음 한 번: 「옆으로 밀어서 곡 바꾸기」
let HT=null;function swipeHint(){if(LS('mds-mswipe','')==='1'||T.classList.contains('hidden'))return;SS('mds-mswipe','1');hideHint();
  const h=E('div','mhint','<i class="l">‹</i><b>옆으로 밀어서 곡 바꾸기</b><i class="r">›</i>');h.setAttribute('aria-hidden','true');colA.appendChild(h);HT={h,t:setTimeout(hideHint,3200)}}
function hideHint(){if(!HT)return;clearTimeout(HT.t);const h=HT.h;HT=null;h.classList.add('out');setTimeout(()=>h.remove(),400)}

// ---------- 배치 (창 크기 · 안전 영역에 맞춰) ----------
function lay(){const H=typeof STAGE_H==='number'?STAGE_H:2340,s=safe(),topH=s.t+150,barH=s.b+214;
  ST.style.setProperty('--sat',s.t+'px');ST.style.setProperty('--sab',s.b+'px');ST.style.setProperty('--sh',H+'px');
  T.style.setProperty('--mtopH',topH+'px');T.style.setProperty('--mbarH',barH+'px');
  const artH=Math.round(Math.max(440,Math.min(660,H*.27)));T.style.setProperty('--artH',artH+'px');
  if(window.ART_AREA_SET)ART_AREA_SET({L:110,R:970,T:22,B:artH-92,TOP:0},{x:0,y:0})}
addEventListener('resize',()=>requestAnimationFrame(lay));lay();
stripOn(cur);lamps();
// ---------- 메인 화면: 전체화면(F11) 안내 대신 소리 안내 ----------
{const f=document.querySelector('#main .mfull');if(f)f.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5h3.6L12.5 5v14l-4.9-4.5H4z" fill="currentColor"/><path d="M16 8.6a5 5 0 0 1 0 6.8M18.6 6a8.6 8.6 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>소리를 켜고 플레이해 주세요 · 무음 모드면 소리가 안 나요'}
// ---------- 설정: 손가락 기준 글 ----------
{const p=document.querySelector('#settings .spane[data-pane="sync"]');if(p){const d=[...p.querySelectorAll('.srow')].find(r=>/음악 들으며/.test(r.textContent));const sd=d&&d.querySelector('.sd');if(sd)sd.textContent='들리는 박자마다 화면을 16번 톡톡 — 자동으로 맞춰 줘요'}}
// ---------- 세로 잠금: 기기가 허락하면 화면 방향을 세로로 잠가요 (첫 터치 때 · 전체 화면 앱/브라우저에서만 되는 경우가 많아요) — 못 잠그면 무대를 돌려 세로 (js/engine.js resize) ----------
{let tried=false;const lock=()=>{if(tried)return;tried=true;try{const o=screen.orientation;if(o&&o.lock)o.lock('portrait').then(()=>setTimeout(()=>dispatchEvent(new Event('resize')),300)).catch(()=>{})}catch(e){}};
 addEventListener('pointerdown',lock,{once:true,passive:true})}
window.MOBUI={lay,setTab,stripOn,safe};
})();
