// ===== 메인 화면 =====
// 여기 있는 동안 네 곡의 소리를 받아 둬요 (index.html 의 preload). 소리를 다 받으면 시작 버튼이 켜져요.
// 배경 영상은 그 뒤에 뒤에서 한 곡씩 받아요 — 받는 대로 메인 · 곡 선택 화면 뒤에 서서히 나와요 (PRELOAD.onBga). 마지막에 고른 곡은 소리까지 미리 풀어 둬요.
(()=>{
const $=id=>document.getElementById(id),P=window.PRELOAD,main=$('main'),bar=$('mBar'),msg=$('mMsg'),go=$('mGo');
let ready=false,waitUI=false;
// 타이틀 화면: 로고 + 시작 + 불러오기 표시만 (곡 그림은 곡 선택 화면에서)
function paint(){if(ready)return;const k=P&&P.total?Math.min(1,P.done/P.total):0;bar.style.transform=`scaleX(${k})`;msg.textContent=`곡 불러오는 중… ${Math.floor(k*100)}%`}
function done(){ready=true;bar.style.transform='scaleX(1)';main.classList.add('ready');go.disabled=false;
  if(P&&P.failed){msg.textContent='일부 파일을 못 받았어요. 그래도 시작할 수 있어요';msg.classList.add('warn')}
  ensure().then(()=>loadSong(cur)).catch(()=>{});                       // 마지막에 고른 곡 소리 미리 풀기
}   // 첫 화면 뒤엔 곡 영상 대신 타이틀 인트로 (js/titleintro.js — 2026-10-06 사용자: 「배경에 동영상 말고 비트게임 같은 인트로」)
function enter(){if(!ready||main.classList.contains('hidden'))return;unlock();if(!window.SONGLIST_READY){waitUI=true;return}show('select')}   // show('select') = 곡 화면 · 곡 화면 스크립트(songlist.js)가 아직이면 다 온 뒤에 넘어가요
addEventListener('songlistready',()=>{if(waitUI){waitUI=false;enter()}});
if(P&&P.ready){P.tick=paint;paint();P.ready.then(done)}else done();
go.onclick=e=>{e.stopPropagation();enter()};
main.addEventListener('click',enter);
addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&ready&&!main.classList.contains('hidden')){e.preventDefault();enter()}});
})();
