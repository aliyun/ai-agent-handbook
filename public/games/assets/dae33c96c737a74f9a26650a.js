
'use strict';
// Official Loopie images are embedded unchanged; the companion is the in-game diving pod with the official Loopie inside.
const ASSETS={pod:'assets/db9cdbf6864ad11b15e75d20.webp',scene:'assets/6089652e5676066fada9e023.webp',hi5:'assets/4757b05faeef6963ef422b48.webp',focus:'assets/971755e660e4102186ab53d0.webp',lemme:'assets/d3d4d21758b90c0db9fccc25.webp',help:'assets/c2ecda90d2e95b3949678823.webp',fooocus:'assets/317d33e11e017cec5b943ec1.webp'};
const REGIONS=[
 {id:'observe',agent:'Agent 观测',short:'观测',name:'迷雾灯塔',en:'OBSERVABILITY',x:11,y:50,gx:11,gy:33,hit:235,sprite:'pod',alt:'潜水舱里的官方 Loopie，与关卡中的样子一致',crop:'40 110 340 440',caption:'从看不清，到看见完整的路径',scene:'灯光穿过海雾，原本藏起来的请求路径逐渐显现。',visual:'圆眼变成灯塔透镜，海雾遮住远处的路径，发光的点沿海流留下轨迹。灯塔脚下躺着一艘旧沉船，礁石与珊瑚把灯塔托在海底。',meaning:'看见 Agent 一次请求的完整调用链，辨认耗时、错误及资源消耗。观测提供事实，不直接判断回答好坏。'},
 {id:'audit',agent:'Agent 审计',short:'审计',name:'边界海关',en:'AUDIT',x:31,y:57,gx:32,gy:42,hit:190,sprite:'pod',alt:'潜水舱里的官方 Loopie，与关卡中的样子一致',crop:'390 220 340 440',caption:'让每一次越过边界，都有据可查',scene:'海流穿过圆拱门，身份、权限与去向在这里留下记录。',visual:'双塔的圆窗借用 Loopie 的深蓝眼睛，一道上升的气泡帘挡在拱门里，进出路径汇聚到一个清晰的关口。',meaning:'核查调用身份、操作权限和数据去向，留下可追溯的操作记录。关注行为是否合规，不替代回答质量评估。'},
 {id:'evaluate',agent:'Agent 评估',short:'评估',name:'回声剧场',en:'EVALUATION',x:49.5,y:60,gx:49.5,gy:41,hit:215,sprite:'pod',alt:'潜水舱里的官方 Loopie，与关卡中的样子一致',crop:'715 200 340 440',caption:'让回答面对清楚的标准',scene:'不同的回答汇入贝壳剧场，在同一束光下显露差异。',visual:'圆瓣展开成一座贝壳剧场，层层座席像回声波纹，中央的微光给所有回答一个共同的参照。',meaning:'按明确标准判断回答的正确性、相关性及任务完成情况。评估产生质量信号，与单纯记录运行过程区分开。'},
 {id:'experiment',agent:'Agent 实验',short:'实验',name:'双生实验岛',en:'EXPERIMENTATION',x:68,y:64,gx:68,gy:50,hit:170,sprite:'pod',alt:'潜水舱里的官方 Loopie，与关卡中的样子一致',crop:'1055 300 340 440',caption:'两条路，放在同样的条件下比较',scene:'同一条海流分向两座穹顶，一座保留原状，一座尝试变化。',visual:'两座近似的玻璃潜水钟并排立在同一块石台上，只用浅青和薄荷色做轻微区分。共享石台与相同地形，强调比较条件一致。',meaning:'在相同任务和评估标准下对比不同方案，验证一次改动是否真的有效，避免把偶然表现当成改进。'},
 {id:'optimize',agent:'Agent 优化',short:'优化',name:'生长花园',en:'OPTIMIZATION',x:89,y:64,gx:91,gy:44,hit:245,sprite:'pod',alt:'潜水舱里的官方 Loopie，与关卡中的样子一致',crop:'1450 220 340 440',caption:'把验证过的改进，种回下一轮旅程',scene:'被验证过的新芽长成花园，新的海流又回到灯塔的方向。',visual:'发光的海树沿柔和弧线生长，薄荷色新叶呼应实验岛的变化。层层环形苗圃保留版本迭代、持续生长的感觉。',meaning:'根据前面发现的问题和实验结果改进 Agent，并回到观测确认实际效果。优化不是终点，而是下一轮的起点。'}
];
const $=id=>document.getElementById(id);
let selected=1;
const PLAY_LABELS={0:'开始游戏',1:'开始探索'};
let reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
$('worldArt').src=ASSETS.scene;

// Visible images load once through their real DOM elements. The map shell and chapter
// controls stay usable while those decorative images arrive.
REGIONS.forEach((r,i)=>{
 const b=document.createElement('button');b.className='level';b.type='button';b.dataset.index=i;b.id='level-'+r.id;
 b.style.setProperty('--x',r.x+'%');b.style.setProperty('--y',r.y+'%');b.style.setProperty('--hit',r.hit+'px');
 b.setAttribute('aria-pressed',String(i===0));b.setAttribute('aria-label',`第 ${i+1} 关 ${r.agent}：${r.name}，查看地图预览`);
 b.innerHTML=`<span class="level-top"><span class="number">${String(i+1).padStart(2,'0')}</span><strong>${r.agent}</strong></span><span class="place-name">${r.name}</span>`;
 b.addEventListener('click',()=>selectRegion(i));
 b.addEventListener('keydown',ev=>{let n=null;if(ev.key==='ArrowRight')n=Math.min(4,i+1);if(ev.key==='ArrowLeft')n=Math.max(0,i-1);if(ev.key==='Home')n=0;if(ev.key==='End')n=4;if(n!==null){ev.preventDefault();selectRegion(n);$('level-'+REGIONS[n].id).focus({preventScroll:true});}});
 $('levelMarkers').appendChild(b);
 const mini=document.createElement('button');mini.type='button';mini.textContent=`${String(i+1).padStart(2,'0')} ${r.short}`;mini.setAttribute('aria-pressed',String(i===0));mini.setAttribute('aria-label',`预览第 ${i+1} 关 ${r.agent}`);mini.addEventListener('click',()=>selectRegion(i));$('journeyMini').appendChild(mini);
 if(i<4){const arrow=document.createElement('span');arrow.textContent='→';arrow.setAttribute('aria-hidden','true');$('journeyMini').appendChild(arrow);}
});
[[6,72],[18,64],[24,80],[38,70],[43,82],[40,30],[58,74],[61,34],[75,80],[79,42],[83,30],[95,74],[27,36],[57,22],[71,30],[14,84]].forEach(([x,y],i)=>{const s=document.createElement('i');s.className='spark';s.style.left=x+'%';s.style.top=y+'%';s.style.setProperty('--delay',(-i*.73)+'s');$('sparkles').appendChild(s);});
function selectRegion(index,{scroll=true}={}){
 selected=Math.max(0,Math.min(REGIONS.length-1,index));const r=REGIONS[selected];
 document.querySelectorAll('.level').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===selected)));
 document.querySelectorAll('#journeyMini button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===selected)));

 $('selectedTitle').replaceChildren(document.createTextNode(r.agent));const place=document.createElement('span');place.textContent=r.name;$('selectedTitle').appendChild(place);
 $('selectedDesc').textContent=r.scene;$('companionImg').src=ASSETS[r.sprite];$('companionImg').alt=r.alt;
 $('playLink').hidden=selected>1;$('stagePill').hidden=selected<2;
 if(selected<2){$('playLink').firstChild.textContent=PLAY_LABELS[selected];$('playLink').setAttribute('href',`audit-sea.html?level=${selected}`);}$('islandGlow').style.setProperty('--gx',r.gx+'%');$('islandGlow').style.setProperty('--gy',r.gy+'%');
 
 if(scroll&&window.matchMedia('(max-width:760px)').matches){const viewport=$('mapViewport');const target=$('atlas').clientWidth*r.x/100-viewport.clientWidth/2;viewport.scrollTo({left:Math.max(0,target),behavior:reduced?'auto':'smooth'});}
}


const HELP_GAMEPLAY=[{"intro": "向右前进，跳过海沟，收集珍珠与贝壳，最后点亮迷雾灯塔。", "body": "<div class=\"help-columns\"><section><h3>怎么操作</h3><dl class=\"help-keys\"><dt>移动</dt><dd><kbd>←</kbd> <kbd>→</kbd> 或 A / D</dd><dt>跳跃</dt><dd><kbd>↑</kbd> / W / 空格，按久一点跳得更高</dd><dt>蹲下</dt><dd><kbd>↓</kbd> 或 S</dd><dt>奔跑</dt><dd>按住 Shift 或 X</dd><dt>返回地图</dt><dd><kbd>Esc</kbd>，再次按下或点“继续游戏”回到原处</dd><dt>其他操作</dt><dd>鼠标移到画面底部，可唤出暂停、重来和声音开关；触屏用屏幕按钮</dd></dl></section>\n<section><h3>怎么探索</h3><p><b>踩螃蟹：</b>从上方跳下踩它；从侧面碰到会受伤。</p><p><b>顶箱与成长：</b>从下方顶开箱子，吃到弹出的小鱼，Loopie 会长大。</p><p><b>进入沉船：</b>站到水管入口上，按 ↓ 进入船舱。收集贝壳后，从右侧出口返回海底。</p><p><b>听声音：</b>开始游戏后播放深海音乐；珍珠、贝壳、踩蟹与水管各有音效。声音开关同时控制音乐和音效。</p></section></div>"}, {"intro": "收集20颗珍珠与12枚贝壳后，气泡帘开放，从海关中间穿过即可通关。", "body": "<div class=\"help-columns\"><section><h3>如何航行</h3><dl class=\"help-keys\"><dt>↑ / W</dt><dd>前进</dd><dt>↓ / S</dt><dd>后退</dd><dt>← → / A D</dt><dd>左转、右转，潜水舱同步转向，镜头从后方跟随</dd><dt>空格 / Shift</dt><dd>上浮 / 下潜</dd><dt>C / 视角按钮</dt><dd>外部与驾驶舱视角切换，不重置位置和收藏</dd><dt>Esc</dt><dd>返回地图，再次进入时保留位置和收藏</dd></dl></section><section><h3>怎么探索</h3><p>从珊瑚入口出发，左侧穿越海草林，右侧下潜沉船峡谷。沿岩拱进入发光洞窟，再前往双塔海关。收藏物在不同高度，靠近才会收集。</p><p>海域共有 50 颗珍珠和 20 枚贝壳。沉船断裂处与洞窟可以游入，也可以上浮绕行。剩余收藏仍可继续寻找。</p><p>游戏默认外部追踪视角；可随时切换驾驶舱视角。触屏使用屏幕按钮；声音开关同时控制音乐与收集音效。</p></section></div>"}];
let helpSelected=selected;
REGIONS.forEach((r,i)=>{const b=document.createElement('button');b.type='button';b.id='help-'+r.id;b.setAttribute('aria-controls','helpGameplay');b.appendChild(document.createTextNode(r.name));const label=document.createElement('span');label.textContent='第'+(i+1)+'关 · '+(i<2?'已开放':'开发中');b.appendChild(label);b.addEventListener('click',()=>renderHelp(i));$('helpTabs').appendChild(b);});
function renderHelp(index){
 helpSelected=Math.max(0,Math.min(REGIONS.length-1,index));const r=REGIONS[helpSelected];
 document.querySelectorAll('#helpTabs button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===helpSelected)));
 $('helpChapterTitle').textContent='第'+(helpSelected+1)+'关 · '+r.name;
 $('helpChapterStatus').textContent=helpSelected<2?'已开放':'开发中';
 $('helpChapterScene').textContent=r.scene;
 $('helpChapterMeaning').textContent=r.meaning;$('helpChapterVisual').textContent=r.visual;
 const play=HELP_GAMEPLAY[helpSelected];
 $('helpGameplay').innerHTML=play?'<p class="help-lead">'+play.intro+'</p>'+play.body:'<p class="help-lead">本关开发中，目前可查看场景与能力介绍，玩法尚未开放。</p>';
}
[$('worldInfo'),$('mobileWorldInfo')].forEach(b=>b.addEventListener('click',()=>{renderHelp(selected);$('worldDialog').showModal();$('help-'+REGIONS[helpSelected].id).focus({preventScroll:true});}));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>$(b.dataset.close).close()));
document.querySelectorAll('dialog').forEach(d=>{d.addEventListener('click',ev=>{if(ev.target!==d)return;const r=d.getBoundingClientRect();if(ev.clientX<r.left||ev.clientX>r.right||ev.clientY<r.top||ev.clientY>r.bottom)d.close();});});
function setMotion(){ $('experience').classList.toggle('no-motion',reduced);$('motionToggle').setAttribute('aria-pressed',String(reduced));$('motionToggle').textContent=reduced?'开启海底气泡':'关闭海底气泡'; }
$('motionToggle').addEventListener('click',()=>{reduced=!reduced;setMotion();});
setMotion();selectRegion(1,{scroll:false});

// Image latency must not block the map shell, chapter selection or host handshake.
const MAP_READY=new Promise(resolve=>{
 const images=[$('worldArt'),$('companionImg')],status=$('mapLoadStatus');
 for(const img of images){
  const reveal=()=>{img.style.visibility='';};
  if(!img.complete||!img.naturalWidth)img.style.visibility='hidden';
  img.addEventListener('load',reveal,{once:true});
  img.addEventListener('error',()=>{img.style.visibility='hidden';},{once:true});
 }
 setTimeout(()=>{status.hidden=true;document.documentElement.classList.remove('map-loading');resolve();},0);
});


// 嵌入游戏页时（?embed=1），地图与游戏通过 postMessage 往返。
const EMBED=new URLSearchParams(location.search).has('embed')&&window.parent!==window;
function postGame(m){window.parent.postMessage({source:'loopie-map',...m},'*');}
function islandPoint(){const r=$('atlas').getBoundingClientRect(),g=REGIONS[selected];return {x:(r.left+r.width*g.gx/100)/innerWidth,y:(r.top+r.height*(g.gy+g.y)/200)/innerHeight};}
if(EMBED){
 document.documentElement.classList.add('embed');
 $('playLink').addEventListener('click',ev=>{ev.preventDefault();if(selected===0||selected===1)postGame({type:'play',level:selected});});
 // 游戏说明弹窗打开时，Esc 只关闭弹窗，不返回游戏
 document.addEventListener('keydown',ev=>{if(ev.key!=='Escape'||ev.repeat||document.querySelector('dialog[open]'))return;ev.preventDefault();postGame({type:'back',via:'esc'});},true);
 addEventListener('message',ev=>{if(ev.source!==window.parent||!ev.data||ev.data.source!=='loopie-audit')return;const d=ev.data;
  if(d.type==='show'){
   const next=d.selected===0||d.selected===1?d.selected:selected;
   if(d.labels&&typeof d.labels==='object'){
    if(['开始游戏','继续游戏'].includes(d.labels[0]))PLAY_LABELS[0]=d.labels[0];
    if(['开始探索','继续探索'].includes(d.labels[1]))PLAY_LABELS[1]=d.labels[1];
   }else if(typeof d.label==='string'&&next<2){PLAY_LABELS[next]=d.label;}
   document.querySelectorAll('dialog[open]').forEach(x=>x.close());
   selectRegion(next,{scroll:false});postGame({type:'island',island:islandPoint()});}
  else if(d.type==='focus')(selected<2?$('playLink'):$('level-'+REGIONS[selected].id)).focus({preventScroll:true});});
 addEventListener('resize',()=>postGame({type:'island',island:islandPoint()}));
 const sendReady=()=>postGame({type:'ready',island:islandPoint()});
 MAP_READY.then(sendReady);
}
