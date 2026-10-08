// 타이밍 미터 (2026-10-03 주말 작업) — 판정선 바로 아래 얇은 막대: 칠 때마다 빠름(왼쪽) · 늦음(오른쪽)으로 눈금이 찍히고 1.4초 동안 사라져요
// 참고: osu! 의 hit error meter(최근 타격 오차 눈금 + 평균 화살표), beatmania IIDX 의 FAST/SLOW
//  · 가운데 = 딱 맞음 · 금색 칸 = 퍼펙트(±45ms) · 민트 = 그레이트(±85ms) · 주황 = 굿(±125ms)
//  · 위 분홍 화살표 = 최근 12번 평균 (한쪽으로 쏠리면 설정의 「싱크」나 결과 화면의 「싱크 자동 보정」으로)
// 설정 「타이밍 미터」 켜기 / 끄기 (localStorage mds-hmeter)
(function(){
const LS=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:v}catch(e){return d}},SS=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const R=.125,stage=document.getElementById('stage');if(!stage)return;
let on=LS('mds-hmeter','on')!=='off';
const el=document.createElement('div');el.className='hmeter';el.setAttribute('aria-hidden','true');
el.innerHTML='<i class="hz z-g"></i><i class="hz z-gr"></i><i class="hz z-p"></i><i class="hc"></i><b class="havg"></b><small class="hl">FAST</small><small class="hr">SLOW</small>';
stage.appendChild(el);
const pool=[];for(let i=0;i<28;i++){const t=document.createElement('span');t.className='ht';el.appendChild(t);pool.push(t)}
let pi=0,recent=[];const avg=el.querySelector('.havg');
const pos=e=>50+Math.max(-1,Math.min(1,e/R))*50;
function add(e,k){if(!on)return;const t=pool[pi++%pool.length];t.className='ht k-'+k;t.style.left=pos(e)+'%';void t.offsetWidth;t.classList.add('go');
  recent.push(e);if(recent.length>12)recent.shift();avg.style.left=pos(recent.reduce((a,b)=>a+b,0)/recent.length)+'%';avg.classList.add('on')}
function reset(yJ){recent=[];avg.classList.remove('on');pool.forEach(t=>t.className='ht');if(yJ)el.style.top=Math.round(yJ+14)+'px';el.classList.toggle('off',!on)}
function set(v){on=v;SS('mds-hmeter',v?'on':'off');el.classList.toggle('off',!on)}
window.HMETER={add,reset,set,get on(){return on}};
el.classList.toggle('off',!on);
})();
