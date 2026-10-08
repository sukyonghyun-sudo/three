// 조작키 바꾸기 (2026-10-03 주말 작업) — 설정 「조작키」 탭
// 참고: osu! · DJMAX RESPECT V 키 설정 — 칸을 누르고 원하는 키를 누르면 바뀌어요 (이미 쓰는 키면 서로 맞바꿔요)
//  · 못 쓰는 키: Esc(일시정지) · Enter · Space(시작) · Tab · Shift/Ctrl/Alt · F1~F12
//  · 바꾸면: 곡 선택 · 곡 화면의 조작키 바, 게임 중 버튼 위 글자(흰 키캡으로 덮어요), 게임 방법 창, 드럼 미리 듣기 칩까지 같이
//  · 저장: localStorage mds-keys (이 기기)
(function(){
if(typeof KEYS==='undefined')return;
const $=id=>document.getElementById(id);
const LS=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:v}catch(e){return d}},SS=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const DEF=['d','f','j','k'];
const BAD=new Set(['escape','enter',' ','tab','shift','control','alt','meta','capslock','backspace','contextmenu','os']);
const label=k=>({arrowleft:'←',arrowright:'→',arrowup:'↑',arrowdown:'↓',' ':'Space'}[k]||(k.length===1?k.toUpperCase():k.replace(/^Key/,'').slice(0,5)));
try{const s=JSON.parse(LS('mds-keys','null'));if(Array.isArray(s)&&s.length===4&&new Set(s).size===4&&s.every(x=>typeof x==='string'&&x&&!BAD.has(x)))s.forEach((x,i)=>KEYS[i]=x)}catch(e){}
function paint(){
  document.querySelectorAll('.keybar .kl').forEach(b=>{const l=+b.dataset.l,k=b.querySelector('kbd');if(k&&KEYS[l])k.textContent=label(KEYS[l])});
  const L=document.querySelectorAll('#listen .chip');L.forEach((c,l)=>{if(typeof LANE_NAMES!=='undefined'&&LANE_NAMES[l])c.textContent=label(KEYS[l])+' '+LANE_NAMES[l]});
  const box=$('keyCfg');if(box)box.querySelectorAll('.kc').forEach(b=>{const l=+b.dataset.l;b.querySelector('kbd').textContent=label(KEYS[l])});
  document.body.classList.toggle('keys-custom',KEYS.some((k,i)=>k!==DEF[i]))}
let wait=-1;
function setKey(l,k){const j=KEYS.indexOf(k);if(j>=0&&j!==l)KEYS[j]=KEYS[l];KEYS[l]=k;SS('mds-keys',JSON.stringify(KEYS));paint()}
function preset(arr){arr.forEach((k,i)=>KEYS[i]=k);SS('mds-keys',JSON.stringify(KEYS));paint()}
addEventListener('keydown',e=>{if(wait<0)return;{const SD=$('settings'),pane=document.querySelector('#settings .spane[data-pane="keys"]');if(!SD||!SD.open||!pane||pane.hidden){wait=-1;const bx=$('keyCfg');bx&&bx.querySelectorAll('.kc').forEach(b=>b.classList.remove('wait'));msg('');return}}   /* 설정을 닫았거나 다른 탭이면 대기 취소 — 그 키는 원래대로 (2026-10-06 출시 점검) */e.preventDefault();e.stopImmediatePropagation();const k=window.keyOf?keyOf(e):e.key.toLowerCase(),box=$('keyCfg');
  if(k==='escape'){wait=-1;box&&box.querySelectorAll('.kc').forEach(b=>b.classList.remove('wait'));msg('');return}
  if(BAD.has(k)||/^f\d+$/.test(k)){msg(`「${label(k)}」 키는 쓸 수 없어요 — 다른 키를 눌러 주세요`);return}
  const l=wait;wait=-1;box&&box.querySelectorAll('.kc').forEach(b=>b.classList.remove('wait'));setKey(l,k);msg(`${['핑크빈','버섯','슬라임','예티'][l]} = ${label(k)}`)},true);
function msg(t){const m=$('keyMsg');if(m)m.textContent=t}
function mount(){const pane=document.querySelector('#settings .spane[data-pane="keys"]');if(!pane||$('keyCfg'))return;
  const C=['#FF4FA3','#FF8A2B','#3EA63C','#8C7BBE'],N=[['핑크빈','킥'],['버섯','스네어'],['슬라임','하이햇'],['예티','박수']];
  pane.insertAdjacentHTML('afterbegin',`<div class="srow wide"><div class="sl"><h3>레인 키</h3><p class="sd">칸을 누르고 원하는 키를 누르세요. 이미 쓰는 키면 서로 바뀌어요 · <kbd>Esc</kbd> 취소</p></div>
    <div class="sc"><div class="keycfg" id="keyCfg">${N.map(([n,d],l)=>`<button class="kc" data-l="${l}" style="--c:${C[l]}"><kbd>${label(KEYS[l])}</kbd><b>${n}</b><small>${d}</small></button>`).join('')}</div><p class="keymsg" id="keyMsg" role="status"></p></div></div>
    <div class="srow"><div class="sl"><h3>추천 배치</h3><p class="sd">자주 쓰는 4키 배치</p></div><div class="sc"><div class="chips" id="keyPre"></div></div></div>`);
  pane.querySelectorAll('.kc').forEach(b=>b.onclick=()=>{wait=+b.dataset.l;pane.querySelectorAll('.kc').forEach(x=>x.classList.toggle('wait',x===b));msg('바꿀 키를 누르세요…')});
  const P=[['D F J K (기본)',['d','f','j','k']],['S D K L',['s','d','k','l']],['A S K L',['a','s','k','l']],['F G H J',['f','g','h','j']]],pre=$('keyPre');
  P.forEach(([t,a])=>{const b=document.createElement('button');b.className='chip';b.textContent=t;b.onclick=()=>{preset(a);msg(t+' 로 바꿨어요')};pre.appendChild(b)});
  paint()}
mount();paint();
window.KEYCFG={paint,label,DEF};
})();
