// ===== 3D 캐릭터 · 노트 기본값 (window.TUNE) =====
// 예전 「모델 조절」 패널(T 키 · 일시정지 메뉴 · 설정)은 출시 전에 없앴어요 (2026-10-06 사용자: 「모델 조절도 없애」)
//  → 모든 플레이어가 똑같이 이 기본값으로 봐요 · 예전에 브라우저에 저장된 조절 값(localStorage mds-tune-v2)은 안 봐요
//  · 선명도 res 1 = 화면과 같은 해상도 (예전 1.5배는 화면보다 크게 그려서 무거웠어요 — 2026-10-06 출시 점검 · 계단은 후처리 MSAA 가 다듬어요)
//  · dancer: 신사 · 소년 크기 · 회전 · 위치 / notes: 노트 캐릭터 4종 크기 · 기울기 / looks: 신사 · 소년 · 노트 조명 · 필터 / common: 화면 효과 · 선명도(그리는 해상도)
//  · 값을 바꾸려면 아래 D0 · L0 · C0 를 고쳐요 (js/dancer.js · js/postfx.js · js/engine.js 가 window.TUNE 을 읽어요)
(()=>{
const D0=()=>({s:1,ry:0,rx:0,x:0,y:0});
const L0=()=>({lv:4,fx:1,elev:50,dir:65,sun:1.5,warm:.1,light:1,env:1,stage:0,sc1:'#ff4fa3',sc2:'#3ddcff',shadow:.9,detail:0,res:1,unlit:0,toon:0,outline:0,oc:'#2b0a45',rim:.12,rc:'#ffffff',
  bloom:.25,bth:.85,ao:.45,aos:0,cel:0,celn:3,shade:0,shc:'#6a4fb3',diff:0,kuwa:0,scr:0,grad:0,g1:'#ffd1f0',g2:'#a7d8ff',rays:0,ink:0,sharp:0,ca:0,grain:0,vig:0,poster:0,exp:1,con:1,sat:1.04,vib:.1,temp:0,tint:0,split:0,bri:1});
const COMMON=['fx','res'],C0=()=>({fx:1,res:1});   // 공통 값 (3D 화면이 하나라 대상마다 나누지 않아요)
const T={dancer:{gentle:D0(),boy:D0()},notes:[0,1,2,3].map(i=>({s:(typeof NOTE_SCALE!=='undefined'&&NOTE_SCALE[i])||1,tilt:0})),looks:{gentle:L0(),boy:L0(),notes:L0()},common:C0(),v:2};
Object.keys(T.looks).forEach(k=>COMMON.forEach(c=>delete T.looks[k][c]));   // 공통 값은 대상 값에 두지 않아요
window.TUNE=T;
})();
