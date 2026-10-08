// ===== 곡 화면 크기 맞추기 =====
// 예전 CD 케이스 곡 선택 화면 연출(이퀄라이저 · 카드 고르기 · 조작키 바)은 화면과 함께 지웠어요 (2026-10-06) — 곡 화면 오른쪽 칸 크기 맞추기만 남아요
(()=>{
const $=id=>document.getElementById(id);
// 곡 화면: 오른쪽 칸(난이도 · 노트 스타일 · 배속 · 시작 · 랭킹)이 화면 높이에 다 안 들어가면 칸 전체를 같은 비율로 줄여요 (랭킹 아래가 잘리지 않게)
const T=$('title');
const TITLE_Z=.86;
function fitTitle(){if(!T||T.classList.contains('hidden'))return;const b=T.querySelector('.colB'),k=T.querySelector('.tkeys');if(!b)return;b.style.zoom='';
  const cs=getComputedStyle(T),avail=T.clientHeight-parseFloat(cs.paddingTop)-parseFloat(cs.paddingBottom)-(k?k.offsetHeight+(parseFloat(cs.rowGap)||0):0)-6,need=b.scrollHeight;
  b.style.zoom=String(Math.max(.55,Math.min(TITLE_Z,avail/need)).toFixed(3))}   // 화면이 넉넉해도 기본 크기는 TITLE_Z 로 (사용자 2026-10-02: 전체적으로 줄이고 사이 여백 있게)
window.fitTitle=fitTitle;
addEventListener('resize',()=>requestAnimationFrame(fitTitle));
if(T)new MutationObserver(()=>{requestAnimationFrame(fitTitle);setTimeout(fitTitle,400)}).observe(T,{attributes:true,attributeFilter:['class']});
})();
