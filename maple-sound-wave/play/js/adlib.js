// 애드리브 — 숨은 노트 (2026-10-03 주말 작업). 참고: 그루브 코스터 AD-LIB
//  · 화면엔 안 보이지만, 곡에서 드럼이 실제로 울리는데 채보에서 빠진 자리 (maple-drum-assets/chart/gen_adlib.py → chart.adlib)
//  · 그 드럼의 버튼(킥 D · 스네어 F · 하이햇 J · 엇박 박수 K)을 ±60ms 안에 누르면 「AD-LIB!」 + 보너스 점수 (피버면 두 배)
//  · 놓쳐도 콤보 · 판정에는 아무 영향 없어요. 결과 화면에 「애드리브 n / 전체」
// 설정 「애드리브 (숨은 노트)」 켜기 / 끄기 (localStorage mds-adlib)
(function(){
const LS=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:v}catch(e){return d}},SS=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const stage=document.getElementById('stage');if(!stage)return;
let on=true,   /* 늘 켜져 있어요 — 설정 항목은 출시 전에 뺐어요 (2026-10-06) */AD=[],hit=0,total=0;
const W=.06,BONUS=150;
function start(chart,d){AD=[];hit=0;total=0;stage.querySelectorAll('.adpop').forEach(e=>e.remove());if(!on||!chart||!chart.adlib||!chart.adlib[d])return;
  AD=chart.adlib[d].map(a=>({t:a[0],l:window.PLAYOPTS?PLAYOPTS.map(a[1]):a[1],s:a[2],hit:false}));   /* 미러 · 랜덤이면 숨은 노트 레인도 같이 */total=AD.length}
function tryHit(l,t){if(!on||!AD.length)return false;let best=null,bd=W;
  for(const a of AD){if(a.hit||a.l!==l)continue;const d=Math.abs(a.t-t);if(d<=bd){bd=d;best=a}}
  if(!best)return false;best.hit=true;hit++;
  try{if(typeof hitSound==='function')hitSound({t:best.t,s:best.s,l},l,1,'p')}catch(e){}   // 그 드럼 소리를 제대로 (빈 곳 누를 때의 작은 소리 대신)
  try{if(typeof score!=='undefined'){score+=Math.round(BONUS*(typeof fever!=='undefined'&&fever?2:1)*(window.SCORE_MUL?SCORE_MUL():1));if(typeof updHud==='function')updHud()}}catch(e){}
  pop(l);return true}
function pop(l){let x=960,y=760;try{y=G.yJ-120;x=xOf(l<2?-.8:4.8,sAtY(y))   /* 누른 손 쪽 레인 바깥 — 가운데 판정 글자 · 타격 이펙트와 안 겹치게 */}catch(e){}
  const e=document.createElement('div');e.className='adpop';e.style.left=x+'px';e.style.top=y+'px';e.innerHTML='<b>AD-LIB!</b><i>+'+BONUS*(typeof fever!=='undefined'&&fever?2:1)+'</i>';
  stage.appendChild(e);setTimeout(()=>e.remove(),1150)}
function set(v){on=v;SS('mds-adlib',v?'on':'off')}
window.ADLIB={start,tryHit,set,stat:()=>({hit,total}),get on(){return on}};
})();
