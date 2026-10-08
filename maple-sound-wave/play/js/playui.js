// 플레이 화면 UI v2 · 새 건반 켜고 끄기 (2026-10-06 사용자: 곡 화면과 같은 톤 · 건반은 레인 각도에 맞게 · 누르면 눌리게 · 원복 가능하게)
//  · body.hud2: 곡 카드 · 점수 카드 · 클리어 게이지 판(.gauge2 — 값은 engine drawGauge2) · 일시정지 버튼 · 일시정지 메뉴 (css/weekend.css) + 콤보 (캔버스 engine drawCombo2)
//  · body.pad2: 레인 원근에 맞춘 사다리꼴 건반 (engine drawPads2) — 누르면 윗면이 쑥 내려가요 · 색은 그 레인 캐릭터 색 (핑크빈 · 버섯 · 슬라임 · 예티)
//  · 되돌리기: 설정 → 화면 → 「플레이 화면 UI」 · 「건반 모양」 = 예전 (localStorage mds-hud2 · mds-pad2)
(function(){
const $=id=>document.getElementById(id);
const LS=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:v}catch(e){return d}},SS=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const P=window.PLAYUI={hud2:true,pad2:true};   // 늘 새 화면 · 새 건반 (예전 화면 · 예전 버튼으로 되돌리는 설정은 출시 전에 뺐어요 — 2026-10-06)
function apply(){document.body.classList.toggle('hud2',P.hud2);document.body.classList.toggle('pad2',P.pad2)}
// 점수 카드 「SCORE」 글자 (예전 화면에선 css 로 숨겨요)
const sb=$('scoreBox');if(sb&&!sb.querySelector('.slbl'))sb.insertAdjacentHTML('afterbegin','<span class="slbl">SCORE</span>');
// 난이도 알약 색: #hudDiff 글자가 바뀔 때마다 지금 난이도 (engine 의 diff)
const hd=$('hudDiff');const paintDiff=()=>{if(hd&&typeof diff!=='undefined')hd.dataset.d=diff};
if(hd&&window.MutationObserver)new MutationObserver(paintDiff).observe(hd,{childList:true,characterData:true,subtree:true});paintDiff();
// 설정 칩 (화면 탭)
function chips(id,key,labels){const box=$(id);if(!box)return;const get=()=>P[key]?'on':'off';
  box.innerHTML=`<button class="chip" data-v="on">${labels[0]}</button><button class="chip" data-v="off">${labels[1]}</button>`;
  const paint=()=>box.querySelectorAll('.chip').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.v===get())));
  box.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{P[key]=b.dataset.v==='on';SS('mds-'+key,b.dataset.v);apply();paint()});paint()}
apply();
})();
