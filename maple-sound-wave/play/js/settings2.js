// 설정 v2 (2026-10-03 주말 작업) — 탭으로 나눈 큰 설정 창: 플레이 · 화면 · 소리 · 싱크 · 내 기록
// 참고: DJMAX RESPECT V 옵션(분류별 탭) · 프로젝트 세카이 라이브 설정(항목마다 한 줄 설명) · IIDX 곡 목록 램프(내 기록 표)
// 칩 · 슬라이더는 예전 id 그대로 (엔진이 채워요) — 여기서는 탭 바꾸기 · 닫기 · 내 기록 표만
(function(){
const $=id=>document.getElementById(id),D=$('settings');if(!D)return;
const LS=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:v}catch(e){return d}},SS=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const tabs=[...D.querySelectorAll('.stab')],panes=[...D.querySelectorAll('.spane')];
function go(t){if(!panes.some(p=>p.dataset.pane===t))t='play';tabs.forEach(b=>b.setAttribute('aria-selected',b.dataset.tab===t));panes.forEach(p=>p.hidden=p.dataset.pane!==t);SS('mds-settab',t);if(t==='rec')records()}
tabs.forEach(b=>b.onclick=()=>go(b.dataset.tab));
const close=()=>{D.open=false};
const cb=$('setClose');if(cb)cb.onclick=e=>{e.preventDefault();close()};
const bd=D.querySelector('.setbd');if(bd)bd.onclick=close;
addEventListener('keydown',e=>{if(e.key==='Escape'&&D.open&&!(typeof playing!=='undefined'&&playing)){e.preventDefault();close()}});
D.addEventListener('toggle',()=>{document.body.classList.toggle('setopen',D.open);if(D.open)go(LS('mds-settab','play'))});
// 내 기록: 곡 × 난이도 표 (이 기기 기록 · 지금 고른 채보 버전)
const fmt=n=>Math.round(n).toLocaleString('en-US');
function records(){const box=$('recTable'),R=window.RESULT2;if(!box||!R||!window.SONGS)return;const ver=(typeof chartVer!=='undefined'?chartVer:'new');
  const DN=[['easy','쉬움'],['normal','보통'],['hard','어려움']],LT=['','PLAY','CLEAR','FC','AP'];
  let tot=0,fc=0,plays=0;
  let h='<table><thead><tr><th>곡</th>'+DN.map(([k,n])=>`<th class="h-${k}">${n}</th>`).join('')+'</tr></thead><tbody>';
  SONGS.forEach(S=>{h+=`<tr><td class="sn"><div class="snw"><img src="${S.jacket||''}" alt="" onerror="this.style.visibility='hidden'"><span lang="ja">${S.title}</span></div></td>`;   /* td 에 flex 를 주면 줄 높이가 안 맞아서 안쪽 div 로 */
    DN.forEach(([k])=>{const r=R.getRec(S.id,k,ver);if(!r){h+='<td class="none">-</td>';return}tot+=r.best;plays+=r.plays||0;if(r.lamp>=3)fc++;
      h+=`<td><b>${fmt(r.best)}</b><span>${r.rank||''}${r.lamp>=2?` <em class="lp${r.lamp}">${LT[r.lamp]}</em>`:''}</span><small>${(r.acc||0).toFixed(1)}% · ${r.plays||0}판</small></td>`});
    h+='</tr>'});
  h+=`</tbody></table><div class="rsum"><span>총점 <b>${fmt(tot)}</b></span><span>풀 콤보 이상 <b>${fc}</b> / ${SONGS.length*3}</span><span>플레이 <b>${plays}</b>판</span></div>`;
  box.innerHTML=h}
// 새로 붙은 화면 요소 끄기 (주말 업데이트 되돌리기용): 채보 정보 카드 · 플레이어 카드 + 미션
function tog(id,key,cls,after){const box=$(id);if(!box)return;const get=()=>LS(key,'on'),set=v=>{SS(key,v);document.body.classList.toggle(cls,v==='off');after&&after();paint()};
  const paint=()=>box.querySelectorAll('.chip').forEach(b=>b.setAttribute('aria-pressed',b.dataset.v===get()));
  box.innerHTML='<button class="chip" data-v="on">켜기</button><button class="chip" data-v="off">끄기</button>';box.querySelectorAll('.chip').forEach(b=>b.onclick=()=>set(b.dataset.v));
  document.body.classList.toggle(cls,get()==='off');paint()}
document.body.classList.remove('no-cinfo','no-pcard');   // 채보 정보 카드 · 플레이어 카드는 늘 보여요 (끄는 설정은 출시 전에 뺐어요)
window.SETTINGS2={go,records,close};
})();
