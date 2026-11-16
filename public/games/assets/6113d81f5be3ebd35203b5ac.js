
'use strict';
const ASSET={pipe:'assets/8e9132e139ff5e3307f69e46.webp',shell:'assets/38e5ed54c5373a3ec204fa10.webp',plank:'assets/3e011722dda1800e17eca2f3.webp',shipbg:'assets/4cb24d73791d2869fa3b1051.webp',hero:'assets/4757b05faeef6963ef422b48.webp',reef:'assets/5fda0ced59007be95a5fca57.webp',bg2:'assets/4333a52a5760a560fa2fd0c0.webp',bg3:'assets/cc5754f799ae21b913826b7f.webp',bg4:'assets/5a579d60fda6c99c79965ada.webp',bg5:'assets/e92748f1fffaf11b780dedf5.webp',bg6:'assets/7074da49628e1ab4af3dca2d.webp',floor:'assets/aa348882e09ae460fb95f3ad.webp',slab:'assets/69b1decc93d2d224e4ce5a84.webp',box:'assets/014856f1224fcc0e4ad5d7ac.webp',used:'assets/0bef1bb973e2f184f4714057.webp',brick:'assets/2114652f6a8d4df46d562050.webp',powerfish:'assets/030f4217677148f20740c62d.webp',crab:'assets/bedd05581d8578fbb68cb5d1.webp',beacon:'assets/6fa33c7eef5d3ed8b380decd.webp',pod:'assets/8c16843c4110686ae4d9d419.webp',whale:'assets/1804b3043079d2b70bafdb02.webp',turtle:'assets/42f9475583762d7cd8b1124c.webp',manta:'assets/2ca3496e7bc34455eaaede80.webp',jelly:'assets/bb9e68f41672486a78d65b7f.webp',seahorse:'assets/794472830a00b05d44d31c28.webp',school:'assets/409016fd8ad6f09c5371058f.webp'};
const canvas=document.getElementById('game'),IM={};
let ctx=canvas.getContext('2d',{alpha:false,desynchronized:true});
let RS=1,MAX_RS=2;const MOTION_QUERY=matchMedia('(prefers-reduced-motion: reduce)');
let REDUCED_MOTION=MOTION_QUERY.matches;
MOTION_QUERY.addEventListener('change',e=>{REDUCED_MOTION=e.matches;if(ready)draw();});
const CACHE={platform:new Map(),hero:new Map(),blocks:{},background:{}};
const previous={center:0,feet:0,camera:0,time:0};
let renderCamera=0,renderTime=0,renderAlpha=1,hudProgress=-1;
const W=1280,H=720,WORLD=12420,GOAL=12100,DT=1/120;
const CP=[[3030,3110,3070],[8300,8380,8340]],RESPAWN=[155,3070,8340];
const BG_EDGES=[1700,3800,5900,7900,9800],BG_FADE=250,BG_KEYS=['s1','s2','s3','s4','s5','s6'],BG_PAN=[160,640,640,640,640,360];
function stretchWeights(c){let i=0;while(i<5&&c>=BG_EDGES[i]+BG_FADE)i++;const out=[[i,1]];if(i<5&&c>BG_EDGES[i]-BG_FADE)out.push([i+1,(c-(BG_EDGES[i]-BG_FADE))/(2*BG_FADE)]);return out;}
function bgPan(j,c){const a=j?BG_EDGES[j-1]-BG_FADE:0,b=j<5?BG_EDGES[j]+BG_FADE:WORLD-W;return clamp((c-a)/(b-a),0,1)*BG_PAN[j];}
const FLOOR_H=180,FLOOR_OV=12,FLOOR_TOP=FLOOR_H*80/341,FLOOR_IMG=()=>IM.floor;
const POD={w:508,h:475,cx:387.32,cy:248.61,r:108.36};
const TEST=new URLSearchParams(location.search).has('test');
const HOSTED=parent!==window&&new URLSearchParams(location.search).get('host')==='1';
let hostSuspended=HOSTED,hostPrevState=null,hostPrevResumeState=null,hostPendingResume=null;
const FONT='-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif';
const $=id=>document.getElementById(id),clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
let ready=false,state='ready',world,player,camera=0,time=0,acc=0,last=0,attempts=0,checkpoint=0,toastTime=0,sound=true,audio;
let hudCache='',jumpBuffer=0,deathTimer=0,finishTimer=0,resumeState='playing';
const held={left:new Set(),right:new Set(),down:new Set(),jump:new Set(),run:new Set()};
const input={left:false,right:false,down:false,jump:false,run:false};
const stats={pearls:0,shells:0,stomps:0,boxes:0,fish:0,broken:0};
// v4 管道与沉船宝舱
const PIPE_X=4570,PIPE_TOP=470,PIPE_W=150,PIPE_LEN=314,PIPE_MOUTH=20,PIPE_RIM=31,PIPE_INSET=18;
const SHIP_DECK=596,SHIP_BG=[-116,2,1512,864],DROP={x:4,mouth:236},SIDE={x:1120,mouth:1140,top:SHIP_DECK-PIPE_W};
const LANTERNS=[[192, 226, 0], [1171, 226, 1.7]],BEAMS=[[351, 242], [675, 242], [962, 242]];
let scene='sea',seaWorld=null,shipWorld=null,pipe=null,fade=0;
const ROOM=()=>scene==='ship'?W:WORLD;
const ease=k=>k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;
function seaPipeSolids(){return [rect(PIPE_X,PIPE_TOP,PIPE_W,PIPE_RIM,{kind:'pipe'}),rect(PIPE_X+PIPE_INSET,PIPE_TOP+PIPE_RIM,PIPE_W-PIPE_INSET*2,590-PIPE_TOP-PIPE_RIM,{kind:'pipe'})];}
function buildShip(){
  const deck=rect(-40,SHIP_DECK,W+80,300,{kind:'floor'}),ceiling=rect(-40,-300,W+80,418,{kind:'floor'});
  const platforms=[[300,483,250],[720,483,250],[500,359,300]].map(([x,y,w])=>rect(x,y,w,20,{kind:'platform',oneway:true}));
  const pipes=[rect(DROP.x,DROP.mouth-PIPE_RIM,PIPE_W,PIPE_RIM,{kind:'pipe'}),rect(DROP.x+PIPE_INSET,-200,PIPE_W-PIPE_INSET*2,DROP.mouth-PIPE_RIM+200,{kind:'pipe'}),rect(SIDE.x+4,SIDE.top,400,PIPE_W,{kind:'pipe'})];
  const shells=[],add=(x,y)=>shells.push({x,y,taken:false});
  for(const y of [381,441,501,561])add(DROP.x+PIPE_W/2,y);
  const arc=(cx,n,step,y0,hgt)=>{for(let i=0;i<n;i++){const u=(i-(n-1)/2)/((n-1)/2);add(cx+(i-(n-1)/2)*step,y0-hgt*(1-u*u));}};
  arc(470,7,44,569,40);arc(830,7,44,569,40);
  [330,375,420,465,510].forEach(x=>add(x,453));[750,795,840,885,930].forEach(x=>add(x,453));
  [530,575,620,665,710,755].forEach(x=>add(x,329));[600,650,700].forEach(x=>add(x,241));
  [1165,1205,1245].forEach(x=>add(x,416));[1000,1045,1090].forEach(x=>add(x,569));
  return {floors:[deck],platforms,blocks:[],enemies:[],pearls:[],shells,fish:[],particles:[],texts:[],solids:[deck,ceiling,...platforms,...pipes]};
}
const podH=()=>player.big?140:92,podW=()=>CACHE.pod.get(podH()).w;
function onPipeMouth(){const c=player.x+player.w/2;return Math.abs(player.y+player.h-PIPE_TOP)<1.5&&c>PIPE_X+30&&c<PIPE_X+PIPE_W-30;}
function atSideMouth(){return player.grounded&&input.right&&player.x+player.w>=SIDE.x+3&&player.y+player.h>SIDE.top+20;}
function setFeet(f){player.y=f-player.h;}
function startPipe(phase){
  if(player.crouched)resizePlayer(player.big,false);
  state='piping';clearInput();player.vy=0;player.coyote=0;player.face=1;tone('pipe');
  if(phase==='down'){player.vx=0;player.grounded=false;pipe={phase,t:0,dur:.65,x0:player.x,x1:PIPE_X+PIPE_W/2-player.w/2,f0:PIPE_TOP,f1:PIPE_TOP+podH()+4,clip:{yMax:PIPE_TOP}};}
  else{const c=player.x+player.w/2,clipX=Math.min(SIDE.mouth+8,c+podW()/2);player.vx=160;player.grounded=true;pipe={phase,t:0,dur:(clipX+podW()/2-c)/160,clip:{xMax:clipX}};}
}
function enterShip(){
  scene='ship';world=shipWorld;$('shellStat').hidden=false;hudCache='';
  player.x=DROP.x+PIPE_W/2-player.w/2;setFeet(DROP.mouth);player.vx=0;player.face=1;camera=0;
  pipe={phase:'drop',t:0,dur:.5,f0:DROP.mouth,f1:DROP.mouth+podH(),clip:{yMin:DROP.mouth}};capturePrevious();
}
function exitShip(){
  scene='sea';world=seaWorld;
  player.x=PIPE_X+PIPE_W/2-player.w/2;player.vx=0;player.face=1;player.grounded=false;setFeet(PIPE_TOP+podH()+4);
  camera=clamp(player.x-365,0,WORLD-W);tone('pipe');
  pipe={phase:'up',t:0,dur:.7,f0:PIPE_TOP+podH()+4,f1:PIPE_TOP,clip:{yMax:PIPE_TOP}};capturePrevious();
}
function releasePipe(){state='playing';pipe=null;fade=0;clearInput();}
function updatePipe(dt){
  const p=pipe;p.t+=dt;const k=clamp(p.t/p.dur,0,1);
  if(p.phase==='down'){player.x=mix(p.x0,p.x1,Math.min(1,k*3));setFeet(mix(p.f0,p.f1,ease(k)));if(k>=1)pipe={...p,phase:'outSea',t:0,dur:.35};}
  else if(p.phase==='outSea'){fade=k;if(k>=1)enterShip();}
  else if(p.phase==='drop'){fade=1-clamp(p.t/.35,0,1);setFeet(mix(p.f0,p.f1,ease(k)));if(k>=1){fade=0;player.vy=60;releasePipe();}}
  else if(p.phase==='side'){player.x+=player.vx*dt;if(k>=1){player.vx=0;pipe={...p,phase:'outShip',t:0,dur:.35};}}
  else if(p.phase==='outShip'){fade=k;if(k>=1)exitShip();}
  else if(p.phase==='up'){fade=1-clamp(p.t/.35,0,1);setFeet(mix(p.f0,p.f1,ease(k)));if(k>=1){setFeet(PIPE_TOP);player.vy=0;player.grounded=true;releasePipe();}}
}
function drawRotated(sprite,cx,cy,angle){ctx.save();ctx.translate(cx,cy);ctx.rotate(angle);blit(sprite,-sprite.w/2,-sprite.h/2);ctx.restore();}
function drawPipeBubbles(x,y,dirX,dirY,n=4){if(REDUCED_MOTION)return;for(let i=0;i<n;i++){const t=(renderTime*.62+i/n)%1,s=8+i%2*4;ctx.globalAlpha=(1-t)*.85;blit(CACHE.bubble,x+dirX*t*90+Math.sin(renderTime*3+i*2)*6-s/2,y+dirY*t*90-s/2,s,s);}ctx.globalAlpha=1;}
function drawSeaPipe(){if(PIPE_X+PIPE_W<renderCamera-40||PIPE_X>renderCamera+W+40)return;const cx=PIPE_X+PIPE_W/2;
  glow(cx,PIPE_TOP-2,74,'#ffd98a',.16+.07*Math.sin(renderTime*2.2));blit(CACHE.pipe,PIPE_X,PIPE_TOP-PIPE_MOUTH);
  ctx.save();ctx.globalCompositeOperation='lighter';glow(cx,PIPE_TOP+2,40,'#ffe2a0',.22+.08*Math.sin(renderTime*2.2));ctx.restore();drawPipeBubbles(cx,PIPE_TOP-6,0,-1);}
function drawPlayerClipped(){if(state!=='piping'||!pipe){drawPlayer();return;}const c=pipe.clip;ctx.save();ctx.beginPath();
  if(c.yMax!=null)ctx.rect(-1e5,-1e5,2e5,1e5+c.yMax);else if(c.yMin!=null)ctx.rect(-1e5,c.yMin,2e5,1e5);else ctx.rect(-1e5,-1e5,1e5+c.xMax,2e5);
  ctx.clip();drawPlayer();ctx.restore();}
function drawFade(){if(fade<=0)return;ctx.globalAlpha=clamp(fade,0,1);ctx.fillStyle='#020a12';ctx.fillRect(0,0,W,H);ctx.globalAlpha=1;}
function drawShell(s){blit(CACHE.shell,s.x-22,s.y-22+Math.sin(renderTime*2.4+s.x*.013)*3);}
function drawShip(){
  const t=REDUCED_MOTION?0:renderTime;blit(CACHE.shipBg,0,0);
  ctx.save();ctx.globalCompositeOperation='lighter';for(const [x,y,ph] of LANTERNS)glow(x,y,78,'#ffc46a',.13+.06*Math.sin(t*2.3+ph));ctx.restore();
  if(!REDUCED_MOTION)for(const [bx,by] of BEAMS)for(let i=0;i<3;i++){const u=(t*.18+i/3+bx*.001)%1;ctx.globalAlpha=(1-u)*.6;blit(CACHE.bubble,bx-30+((i*37+bx)%60)+Math.sin(t*1.3+i)*5,by+300-u*270,7,7);}
  ctx.globalAlpha=1;ctx.save();ctx.translate(-renderCamera,0);
  for(const p of world.platforms)blit(CACHE.plank,p.x-10,p.y-5,p.w+20,(p.w+20)*CACHE.plank.h/CACHE.plank.w);
  ctx.fillStyle='#02080f66';ctx.beginPath();ctx.ellipse(SIDE.x+150,SHIP_DECK+2,170,7,0,0,Math.PI*2);ctx.fill();
  drawRotated(CACHE.pipe,DROP.x+PIPE_W/2,DROP.mouth+PIPE_MOUTH-PIPE_LEN/2,Math.PI);
  drawRotated(CACHE.pipe,SIDE.x+PIPE_LEN/2,SIDE.top+PIPE_W/2,-Math.PI/2);
  drawPipeBubbles(SIDE.mouth-4,SIDE.top+PIPE_W/2,-1,-.35,3);
  for(const s of world.shells)if(!s.taken)drawShell(s);
  drawPlayerClipped();
  for(const p of world.particles){ctx.globalAlpha=clamp(p.life/p.max,0,1);ctx.fillStyle=p.color;circle(p.x,p.y,p.r);ctx.fill();}ctx.globalAlpha=1;
  for(const tx of world.texts){ctx.globalAlpha=Math.min(1,tx.life*3);text(tx.label,tx.x,tx.y,16,tx.color,650);}ctx.restore();ctx.globalAlpha=1;drawFade();updateHUD();
}
function overlap(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;}
function rect(x,y,w,h,extra={}){return {x,y,w,h,...extra};}
function buildWorld(){
  const floors=[[0,660],[790,950],[1890,940],[2960,950],[4080,660],[4890,370],[5410,870],
    [6430,720],[7300,560],[8010,900],[9050,500],[9690,650],[10480,370],[10990,1430]].map(([x,w])=>rect(x,590,w,460,{kind:'floor'}));
  const platforms=[[2050,470,190],[2330,368,210],[3230,470,190],[3510,420,170],[4260,465,190],[5020,467,150],[5570,465,170],
    [6560,470,170],[6820,380,190],[7480,465,170],[7660,380,150],[8560,470,190],[8820,385,170],[9200,465,170],[9850,470,190],[10120,370,170],[10560,460,150],[11250,470,190],[11520,390,170]].map(([x,y,w])=>rect(x,y,w,24,{kind:'platform',oneway:true}));
  const blocks=[
    rect(1390,415,58,58,{kind:'box',content:'fish'}),
    rect(2158,290,58,58,{kind:'box',content:'pearl'}),
    rect(2420,400,58,58,{kind:'brick'}),rect(2478,400,58,58,{kind:'brick'}),rect(2536,400,58,58,{kind:'brick'}),
    rect(3290,290,58,58,{kind:'box',content:'fish'}),
    rect(3655,420,58,58,{kind:'box',content:'pearl'}),
    rect(4400,280,58,58,{kind:'box',content:'pearl'}),
    rect(5595,285,58,58,{kind:'box',content:'fish'}),
    rect(6880,200,58,58,{kind:'box',content:'pearl'}),
    rect(7380,415,58,58,{kind:'box',content:'fish'}),
    rect(8150,400,58,58,{kind:'brick'}),rect(8208,400,58,58,{kind:'box',content:'pearl'}),rect(8266,400,58,58,{kind:'brick'}),
    rect(9300,285,58,58,{kind:'box',content:'pearl'}),
    rect(9950,290,58,58,{kind:'box',content:'fish'}),
    rect(10150,190,58,58,{kind:'brick'}),rect(10208,190,58,58,{kind:'brick'}),
    rect(10620,280,58,58,{kind:'box',content:'pearl'}),
    rect(11300,290,58,58,{kind:'box',content:'fish'}),
    rect(11560,210,58,58,{kind:'box',content:'pearl'})
  ].map((b,i)=>({...b,id:i,used:false,broken:false,bump:0}));
  const enemies=[
    [1090,970,1270,60],[2150,2100,2340,67],[2710,2620,2790,-72],
    [3420,3320,3750,74],[4340,4160,4555,-83],[5650,5500,5850,80],
    [6700,6560,7020,-76],[7600,7430,7740,82],[8650,8530,8780,-80],[9300,9180,9430,80],
    [10000,9820,10220,-88],[11300,11140,11420,-90],[11800,11640,11960,84]
  ].map(([x,min,max,vx],i)=>rect(x,546,58,44,{id:i,kind:'crab',min,max,vx,vy:0,alive:true,squash:0}));
  const pearls=[];const row=(xs,y)=>xs.forEach(x=>pearls.push({x,y,r:11,taken:false}));
  row([380,435,490],484);row([680,725,770],440);row([1010,1080,1150],407);row([1767,1820,1870],447);
  row([2110,2170],428);row([2357,2414,2470],323);row([2870,2920],449);row([3290,3350],419);row([3550,3610],369);
  row([3940,4000,4050],426);row([4320,4380],414);row([4610,4645,4680],428);row([4780,4835],445);row([5055,5115],419);row([5290,5345,5400],444);row([5620,5680],417);
  row([6300,6355,6410],447);row([6600,6660],428);row([6860,6920,6980],338);
  row([7180,7230,7280],447);row([7520,7580],423);row([7690,7750],338);row([7890,7950],447);
  row([8600,8660],428);row([8850,8920,8990],343);
  row([9230,9290],423);row([9580,9630,9680],447);row([9880,9940],428);
  row([10150,10210],328);row([10370,10420,10470],447);row([10590,10650],418);
  row([10880,10930,10980],447);row([11280,11340],428);row([11550,11610],348);row([11800,11860,11920],484);
  return {floors,platforms,blocks,enemies,pearls,fish:[],particles:[],texts:[],solids:[...floors,...platforms,...blocks,...seaPipeSolids()]};
}
function freshPlayer(x=155){return {x,y:520,w:48,h:70,vx:0,vy:0,big:false,crouched:false,grounded:true,coyote:.1,boost:0,invuln:0,face:1,knock:0,pendingGrow:false};}
function reset(){world=seaWorld=buildWorld();shipWorld=buildShip();scene='sea';pipe=null;fade=0;$('shellStat').hidden=true;player=freshPlayer();camera=0;time=0;attempts=0;checkpoint=0;jumpBuffer=0;deathTimer=0;finishTimer=0;for(const k in stats)stats[k]=0;clearInput();hudCache='';hudProgress=-1;capturePrevious();updateHUD();}
function capturePrevious(){previous.center=player.x+player.w/2;previous.feet=player.y+player.h;previous.camera=camera;previous.time=time;for(const e of world.enemies){e.prevX=e.x;e.prevY=e.y;}for(const f of world.fish){f.prevX=f.x;f.prevY=f.y;}}
function clearInput(){for(const k in held){held[k].clear();input[k]=false;}document.querySelectorAll('[data-action]').forEach(b=>b.classList.remove('active'));jumpBuffer=0;}
function setAction(action,pressed,source){if(hostSuspended)return;const before=input[action];if(pressed)held[action].add(source);else held[action].delete(source);input[action]=held[action].size>0;if(action==='jump'&&input.jump&&!before&&state==='playing')jumpBuffer=.14;if(action==='jump'&&before&&!input.jump&&player&&player.vy< -300)player.vy=-300;document.querySelectorAll(`[data-action="${action}"]`).forEach(b=>b.classList.toggle('active',input[action]));}
function announce(message,duration=2.6){$('toast').textContent=message;$('toast').classList.add('show');toastTime=duration;}
function showOverlay(mode){
  const content={ready:['迷雾灯塔','','开始'],paused:['已暂停','','继续'],won:['灯塔亮了',`${stats.pearls} 颗珍珠${stats.shells?` · ${stats.shells} 枚贝壳`:''} · ${stats.stomps} 只小怪`,'再玩一次']}[mode];
  $('overlayTitle').textContent=content[0];$('overlayText').textContent=content[1];$('overlayText').hidden=!content[1];$('start').textContent=content[2];$('overlay').hidden=false;$('controls').inert=true;dockOff();canvas.tabIndex=-1;$('start').focus();
}
function hideOverlay(){$('overlay').hidden=true;$('controls').inert=false;canvas.tabIndex=0;canvas.focus({preventScroll:true});}
function start(){if(!ready||hostSuspended)return;initAudio();if(state==='paused'){state=resumeState;}else{reset();state='playing';hintDock();}clearInput();hideOverlay();$('pause').textContent='暂停';last=performance.now();acc=0;updateAudioMix();}
function pause(){if(hostSuspended||!['playing','dying','finishing','piping'].includes(state))return;resumeState=state;state='paused';clearInput();showOverlay('paused');$('pause').textContent='继续';updateAudioMix();}
function updateHUD(){const key=`${stats.pearls}/${stats.shells}/${player.big}/${player.pendingGrow}`;if(key!==hudCache){$('pearls').textContent=stats.pearls;$('shells').textContent=stats.shells;hudCache=key;}const value=Math.round(clamp((scene==='ship'?PIPE_X:player.x)/GOAL,0,1)*1000)/1000;if(value!==hudProgress){$('progress').style.transform=`scaleX(${value})`;hudProgress=value;}}
function allSolids(){return world.solids;}
function blocked(body){return allSolids().some(s=>!s.oneway&&overlap(body,s));}
function resizePlayer(big,crouch=false){const w=big?70:48,h=crouch?(big?70:48):(big?110:70),next={x:player.x+(player.w-w)/2,y:player.y+player.h-h,w,h};if(blocked(next))return false;Object.assign(player,next,{big,crouched:crouch});return true;}
function burst(x,y,color,n=9){for(let i=0;i<n;i++){const a=(i/n)*Math.PI*2;world.particles.push({x,y,vx:Math.cos(a)*(90+(i%3)*24),vy:Math.sin(a)*140-90,life:.55,max:.55,color,r:3+i%3});}}
function floatText(label,x,y,color='#ffeeb8'){world.texts.push({label,x,y,life:1.05,color});}
function hitBlock(b){if(b.kind==='pipe'||b.bump>0)return;b.bump=.18;if(b.kind==='brick'){if(player.big){b.broken=true;world.solids=world.solids.filter(s=>s!==b);stats.broken++;burst(b.x+29,b.y+29,'#f0a08c',13);tone('break');}else tone('bump');return;}if(b.used){tone('bump');return;}b.used=true;stats.boxes++;if(b.content==='fish'){world.fish.push(rect(b.x+11,b.y+9,36,27,{vx:88,vy:0,emerge:.45,sourceY:b.y,alive:true}));tone('spawn');}else{stats.pearls+=5;burst(b.x+29,b.y-10,'#fff3cf',10);floatText('+5',b.x+29,b.y-14);tone('pearl');}}
function moveBody(body,dt,isPlayer=false){
  const solids=allSolids();body.grounded=false;
  body.x+=body.vx*dt;
  for(const s of solids){if(s.oneway||!overlap(body,s))continue;if(body.vx>0)body.x=s.x-body.w;else if(body.vx<0)body.x=s.x+s.w;body.vx=0;}
  const oldY=body.y,vy=body.vy;body.y+=vy*dt;
  const hits=[];
  for(const s of solids){if(!overlap(body,s))continue;if(vy>=0&&oldY+body.h<=s.y+.5){hits.push(s);}else if(vy<0&&!s.oneway&&oldY>=s.y+s.h-.5){body.y=s.y+s.h;body.vy=0;if(isPlayer&&s.kind!=='floor')hitBlock(s);}}
  if(hits.length){const top=Math.min(...hits.map(s=>s.y));body.y=top-body.h;body.vy=0;body.grounded=true;}
}
function finishGrowth(){if(!player.pendingGrow)return false;if(!resizePlayer(true,false)&&!resizePlayer(true,true))return false;player.pendingGrow=false;player.invuln=1.2;burst(player.x+player.w/2,player.y+player.h/2,'#a8fff0',18);tone('grow');return true;}
function grow(){stats.fish++;if(player.big){stats.pearls+=5;floatText('+5',player.x+player.w/2,player.y-22);tone('pearl');}else{player.pendingGrow=true;finishGrowth();}}
function hurt(enemy){if(player.invuln>0||state!=='playing')return;if(player.big){resizePlayer(false,false);player.invuln=1.8;player.vx=player.x<enemy.x?-210:210;player.vy=-230;player.knock=.2;tone('hurt');}else die();}
function die(){if(state!=='playing')return;state='dying';attempts++;deathTimer=.7;player.vy=-330;clearInput();tone('hurt');}
function respawn(){scene='sea';world=seaWorld;pipe=null;fade=0;player=freshPlayer(RESPAWN[checkpoint]);player.invuln=2;camera=clamp(player.x-320,0,WORLD-W);state='playing';clearInput();capturePrevious();}
function win(){if(state!=='playing')return;state='finishing';finishTimer=1.25;clearInput();tone('win');announce('灯塔亮了！',2);burst(GOAL+5,410,'#ffe39a',30);}
function simulate(dt){
  if(state==='paused'||state==='ready'||state==='won')return;
  time+=dt;toastTime-=dt;if(toastTime<=0)$('toast').classList.remove('show');
  for(const b of world.blocks)b.bump=Math.max(0,b.bump-dt);
  for(const p of world.particles){p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=380*dt;}world.particles=world.particles.filter(p=>p.life>0);
  for(const t of world.texts){t.life-=dt;t.y-=34*dt;}world.texts=world.texts.filter(t=>t.life>0);
  for(const e of world.enemies){if(!e.alive)e.squash=Math.max(0,e.squash-dt);}
  if(state==='dying'){deathTimer-=dt;player.y+=player.vy*dt;player.vy+=1300*dt;if(deathTimer<=0)respawn();return;}
  if(state==='piping'){updatePipe(dt);return;}
  if(state==='finishing'){finishTimer-=dt;if(finishTimer<=0){state='won';$('toast').classList.remove('show');showOverlay('won');}return;}
  player.invuln=Math.max(0,player.invuln-dt);player.knock=Math.max(0,player.knock-dt);jumpBuffer=Math.max(0,jumpBuffer-dt);
  if(scene==='sea'&&input.down&&player.grounded&&onPipeMouth()){startPipe('down');return;}
  if(input.down&&player.grounded)resizePlayer(player.big,true);else if(player.crouched)resizePlayer(player.big,false);
  if(player.grounded)player.coyote=.11;else player.coyote=Math.max(0,player.coyote-dt);
  const dir=Number(input.right)-Number(input.left),maxSpeed=(input.run?355:255)*(player.crouched?.42:1),target=dir*maxSpeed;
  if(player.knock<=0){const rate=player.grounded?(dir?2050:2350):(dir?1150:550);player.vx+=clamp(target-player.vx,-rate*dt,rate*dt);}
  if(dir)player.face=dir;
  if(jumpBuffer>0&&player.coyote>0){if(player.crouched&&!resizePlayer(player.big,false)){}else{player.vy=-790;player.boost=.16;player.grounded=false;player.coyote=0;jumpBuffer=0;tone('jump');}}
  player.boost=Math.max(0,player.boost-dt);player.vy=Math.min(1000,player.vy+((input.jump&&player.vy<0&&player.boost>0)?1450:2000)*dt);
  const oldBottom=player.y+player.h;
  moveBody(player,dt,true);player.x=clamp(player.x,0,ROOM()-player.w);if(player.pendingGrow)finishGrowth();
  if(player.y>800){die();return;}
  for(const e of world.enemies){
    if(!e.alive)continue;e.x+=e.vx*dt;if(e.x<e.min){e.x=e.min;e.vx=Math.abs(e.vx);}if(e.x+e.w>e.max){e.x=e.max-e.w;e.vx=-Math.abs(e.vx);}
    if(overlap(player,e)){
      if(player.vy>0&&oldBottom<=e.y+15){e.alive=false;e.squash=.35;stats.stomps++;player.y=e.y-player.h;player.vy=input.jump?-575:-410;player.grounded=false;player.coyote=0;tone('stomp');burst(e.x+29,e.y+15,'#ff9f80');}
      else hurt(e);
    }
  }
  if(state!=='playing'){return;}
  for(const f of world.fish){if(!f.alive)continue;if(f.emerge>0){f.emerge=Math.max(0,f.emerge-dt);f.y=f.sourceY+9-(1-f.emerge/.45)*41;continue;}f.vy=Math.min(800,f.vy+1700*dt);const prevVX=f.vx;moveBody(f,dt);if(f.vx===0)f.vx=-prevVX;if(overlap(player,f)){f.alive=false;grow();}if(f.y>820)f.alive=false;}
  if(scene==='ship'){for(const s of world.shells){if(!s.taken&&overlap(player,{x:s.x-14,y:s.y-14,w:28,h:28})){s.taken=true;stats.shells++;burst(s.x,s.y,'#ffd98a',6);tone('shell');}}if(atSideMouth()){startPipe('side');return;}}
  for(const p of world.pearls){if(!p.taken&&overlap(player,{x:p.x-11,y:p.y-11,w:22,h:22})){p.taken=true;stats.pearls++;burst(p.x,p.y,'#fff3cf',5);tone('pearl');}}
  for(let i=checkpoint;i<CP.length;i++){if(player.x>CP[i][0]&&player.grounded){checkpoint=i+1;announce('已存档',1.4);tone('checkpoint');burst(CP[i][1],592-182+30,'#9ff3ff',14);}}
  if(player.x+player.w>GOAL&&player.grounded)win();
  const desired=clamp(player.x-365,0,ROOM()-W);camera+=(desired-camera)*Math.min(1,dt*6.5);
}
function rr(x,y,w,h,r=12){ctx.beginPath();ctx.roundRect(x,y,w,h,r);}
function text(t,x,y,size=14,color='#234d6d',weight=500,align='center'){ctx.font=`${weight} ${size}px ${FONT}`;ctx.fillStyle=color;ctx.textAlign=align;ctx.textBaseline='alphabetic';ctx.fillText(t,x,y);}
function circle(x,y,r){ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);}
function glow(x,y,r,color,alpha=1){ctx.save();ctx.globalAlpha=alpha;const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,color);g.addColorStop(1,color+'00');ctx.fillStyle=g;circle(x,y,r);ctx.fill();ctx.restore();}
function drawBackground(){
  const ws=stretchWeights(renderCamera);
  for(const [j,a] of ws){const s=CACHE.background[BG_KEYS[j]];ctx.globalAlpha=a;blit(s,snap(-bgPan(j,renderCamera)),-45);}
  ctx.globalAlpha=1;
  const lastStretch=ws.find(v=>v[0]===5);
  if(lastStretch&&(state==='finishing'||state==='won')){const x=1430-bgPan(5,renderCamera),y=200-45,k=lastStretch[1]*(state==='won'?1:.35+.65*clamp(1-finishTimer/1.25,0,1));
    glow(x,y,300,'#ffe9a0',.42*k);glow(x,y,95,'#fff6c8',.9*k);ctx.save();ctx.globalAlpha=.85*k;ctx.fillStyle='#fff8dc';circle(x,y,30);ctx.fill();ctx.restore();}
  for(const [j,a] of ws)drawSeaLife(j,a);
}
function platformArt(p){const s=CACHE.platform.get(p.kind+':'+p.w);if(p.kind==='floor')blit(s,p.x-FLOOR_OV,590-FLOOR_TOP);else blit(s,p.x-8,p.y-2);}
function paintPearl(p){const y=p.y;glow(p.x,y,21,'#ffe1a0',.55);const g=ctx.createRadialGradient(p.x-3,y-4,1,p.x,y,10);g.addColorStop(0,'#ffffff');g.addColorStop(.5,'#fbf1e6');g.addColorStop(.82,'#e6cfe2');g.addColorStop(1,'#cfa765');ctx.fillStyle=g;circle(p.x,y,9);ctx.fill();ctx.strokeStyle='#fff2c890';ctx.lineWidth=1.2;ctx.stroke();ctx.fillStyle='#ffffffd0';circle(p.x-3,y-3.5,2.2);ctx.fill();}
function drawEnemy(e){if(!e.alive&&e.squash<=0)return;const x=mix(e.prevX??e.x,e.x,renderAlpha),y=mix(e.prevY??e.y,e.y,renderAlpha),w=76,h=e.alive?55:55*e.squash/.35*.25;ctx.save();ctx.fillStyle='#04121f55';ctx.beginPath();ctx.ellipse(x+29,592,30,5,0,0,Math.PI*2);ctx.fill();ctx.translate(x+29,y+44);if(e.vx<0)ctx.scale(-1,1);const bob=e.alive?Math.sin(renderTime*11+e.id)*1.6:0;blit(CACHE.crab,-w/2,-h+bob,w,h);ctx.restore();}
function drawPlayer(){const cx=mix(previous.center,player.x+player.w/2,renderAlpha),feet=mix(previous.feet,player.y+player.h,renderAlpha);ctx.save();
  if(player.grounded){ctx.fillStyle='#06182a55';ctx.beginPath();ctx.ellipse(cx,feet+1,player.big?50:34,5,0,0,Math.PI*2);ctx.fill();}
  if(player.invuln>0&&Math.floor(renderTime*12)%2===0)ctx.globalAlpha=.48;
  const H=player.big?140:92,sp=CACHE.pod.get(H),W=sp.w,squash=player.h<(player.big?110:70)?.84:1,bob=player.grounded&&Math.abs(player.vx)>20?Math.abs(Math.sin(renderTime*13))*2:0,base=ctx.globalAlpha;
  ctx.translate(cx,feet-bob);if(player.face<0)ctx.scale(-1,1);
  if(!REDUCED_MOTION)for(let i=0;i<3;i++){const t=(renderTime*1.4+i/3)%1;ctx.globalAlpha=base*(1-t)*.8;blit(CACHE.bubble,-W*.56-t*18,-H*.62-t*H*.5-i*3,10+i*2,10+i*2);}
  ctx.globalAlpha=base;if(!player.grounded)ctx.rotate(clamp(player.vx*.000065,-.028,.028));ctx.scale(1,squash);blit(sp,-W/2,-H,W,H);ctx.restore();}
// Rasterize expensive shadows, gradients and image scaling once, not during play.
// v5 渲染倍率：画布像素跟随实际显示宽度 × 设备像素比（上限 MAX_RS），缓存同倍率重建
const snap=v=>Math.round(v*RS)/RS;
function targetScale(){const r={width:canvas.clientWidth,height:canvas.clientHeight};if(!r.width||!r.height)return RS;const cw=Math.min(r.width,r.height*W/H);return Math.max(1,Math.min(MAX_RS,cw*(window.devicePixelRatio||1)/W));}
function fitCanvas(rebuild){const t=targetScale();if(rebuild&&Math.abs(t-RS)/RS<.04)return false;canvas.width=Math.round(W*t);canvas.height=Math.round(H*t);RS=canvas.width/W;
  if(rebuild){CACHE.platform.clear();CACHE.hero.clear();CACHE.background={};buildArtCache();draw(1);}return true;}
let fitTimer=0;
function watchCanvas(){const go=()=>{clearTimeout(fitTimer);fitTimer=setTimeout(()=>fitCanvas(true),180);};if(window.ResizeObserver)new ResizeObserver(go).observe(canvas);addEventListener('resize',go);}
// 持续掉帧（中位帧间隔 > 20.5ms）时退回 1.5 倍，只退一次
let perfSkip=90;const perfBuf=[];
function watchPerf(d){if(MAX_RS<=1.5||RS<=1.55||document.hidden)return;if(perfSkip>0){perfSkip--;return;}perfBuf.push(d);if(perfBuf.length<150)return;
  const m=perfBuf.sort((a,b)=>a-b)[75];perfBuf.length=0;if(m>.0205){MAX_RS=1.5;fitCanvas(true);console.info('render scale fallback to 1.5');}}
function raster(w,h,paint){
  const surface=document.createElement('canvas');surface.width=Math.ceil(w*RS);surface.height=Math.ceil(h*RS);
  const main=ctx;ctx=surface.getContext('2d');ctx.setTransform(RS,0,0,RS,0,0);ctx.imageSmoothingQuality='high';
  try{paint();}finally{ctx=main;}
  return {surface,w,h,k:RS};
}
function blit(sprite,x,y,w=sprite.w,h=sprite.h){ctx.drawImage(sprite.surface,0,0,sprite.w*sprite.k,sprite.h*sprite.k,x,y,w,h);}
function buildArtCache(){
  for(const [k,img] of Object.entries({s1:IM.reef,s2:IM.bg2,s3:IM.bg3,s4:IM.bg4,s5:IM.bg5,s6:IM.bg6})){const w=k==='s1'?1440:1920,h=810;CACHE.background[k]=raster(w,h,()=>{ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';ctx.drawImage(img,0,0,w,h);});}
  const halves=(img,tw,th)=>{const s=th/img.height,hs=tw/2/s;ctx.drawImage(img,0,0,hs,img.height,0,0,tw/2,th);ctx.drawImage(img,img.width-hs,0,hs,img.height,tw/2,0,tw/2,th);};
  const floorArt=(tw)=>{const img=FLOOR_IMG(),th=FLOOR_H,s=th/img.height;if(tw<=img.width*s){halves(img,tw,th);return;}
    const cs=img.width*300/1600,cl=cs*s,ms=img.width-2*cs,M=tw-2*cl,n=Math.max(1,Math.round(M/(ms*s))),tl=M/n;
    ctx.drawImage(img,0,0,cs,img.height,0,0,cl,th);
    for(let i=0;i<n;i++){const x=cl+i*tl;ctx.save();if(i%2){ctx.translate(x+tl,0);ctx.scale(-1,1);ctx.drawImage(img,cs,0,ms,img.height,0,0,tl,th);}else ctx.drawImage(img,cs,0,ms,img.height,x,0,tl,th);ctx.restore();}
    ctx.save();if(n%2){ctx.drawImage(img,img.width-cs,0,cs,img.height,tw-cl,0,cl,th);}else{ctx.translate(tw,0);ctx.scale(-1,1);ctx.drawImage(img,0,0,cs,img.height,0,0,cl,th);}ctx.restore();};
  const sw=seaWorld||world;for(const p of [...sw.floors,...sw.platforms]){
    const key=p.kind+':'+p.w;if(CACHE.platform.has(key))continue;
    if(p.kind==='floor'){const tw=p.w+FLOOR_OV*2;CACHE.platform.set(key,raster(tw,FLOOR_H,()=>floorArt(tw)));}
    else{const tw=p.w+16;CACHE.platform.set(key,raster(tw,62,()=>{ctx.shadowColor='#02101c55';ctx.shadowBlur=10;ctx.shadowOffsetY=6;halves(IM.slab,tw,62);}));}
  }
  for(const k of ['box','used','brick'])CACHE.blocks[k]=raster(86,86,()=>{ctx.shadowColor='#02101c70';ctx.shadowBlur=9;ctx.shadowOffsetY=5;ctx.drawImage(IM[k],11,7,64,64);});
  CACHE.pearl=raster(44,44,()=>paintPearl({x:22,y:22}));
  CACHE.fish=raster(80,80,()=>{glow(40,40,36,'#ffd77a',.38);const w=58,h=w*IM.powerfish.height/IM.powerfish.width;ctx.drawImage(IM.powerfish,40-w/2,40-h/2,w,h);});
  CACHE.crab=raster(76,55,()=>ctx.drawImage(IM.crab,0,0,76,55));
  const beacon=(bh,box,base,color,active)=>raster(box[0],box[1],()=>{const bw=bh*IM.beacon.width/IM.beacon.height,x=box[0]/2,top=base-bh,gy=top+bh*.16;if(active)glow(x,gy,bh*.42,color,.75);ctx.drawImage(IM.beacon,x-bw/2,top,bw,bh);if(active){ctx.globalCompositeOperation='lighter';glow(x,gy,bh*.13,color,.95);ctx.globalCompositeOperation='source-over';}});
  CACHE.checkpoint=[false,true].map(a=>beacon(150,[160,190],182,'#8ff6ff',a));
  CACHE.goal=[false,true].map(a=>beacon(230,[240,290],282,'#ffe39a',a));
  const fit=(img,w)=>raster(w,w*img.height/img.width,()=>ctx.drawImage(img,0,0,w,w*img.height/img.width));
  CACHE.whale=fit(IM.whale,330);CACHE.turtle=fit(IM.turtle,126);CACHE.manta=fit(IM.manta,150);CACHE.seahorse=fit(IM.seahorse,34);
  CACHE.jelly=[46,32].map(w=>{const h=w*IM.jelly.height/IM.jelly.width,p=18;return raster(w+p*2,h+p*2,()=>{ctx.shadowColor='#9ff3ffcc';ctx.shadowBlur=16;ctx.drawImage(IM.jelly,p,p,w,h);ctx.shadowBlur=0;ctx.drawImage(IM.jelly,p,p,w,h);});});
  CACHE.jelly0=CACHE.jelly[0];CACHE.jelly1=CACHE.jelly[1];
  CACHE.school=raster(230,90,()=>{for(const [x,y,w] of [[20,20,30],[60,10,26],[100,24,32],[140,12,24],[35,48,28],[78,40,32],[120,52,26],[165,38,30],[200,26,24],[58,72,24],[105,76,28],[150,68,26]])ctx.drawImage(IM.school,x,y,w,w*IM.school.height/IM.school.width);});
  const podHero=(H)=>{const s=H/POD.h,Wd=POD.w*s,cx=POD.cx*s,cy=POD.cy*s,r=POD.r*s;return raster(Wd,H,()=>{
    ctx.save();ctx.beginPath();ctx.arc(cx,cy,r+1,0,Math.PI*2);ctx.clip();
    const g=ctx.createRadialGradient(cx,cy-r*.3,r*.1,cx,cy,r);g.addColorStop(0,'#3d7f9a');g.addColorStop(1,'#163a55');ctx.fillStyle=g;ctx.fillRect(cx-r,cy-r,r*2,r*2);
    const lh=r*1.62,lw=lh*412/320;ctx.translate(cx+r*.02,cy+r*.86);ctx.scale(-1,1);ctx.drawImage(IM.hero,-lw/2,-lh,lw,lh);ctx.restore();
    ctx.save();ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.clip();
    const tint=ctx.createRadialGradient(cx-r*.35,cy-r*.4,r*.05,cx,cy,r*1.05);tint.addColorStop(0,'#ffffff30');tint.addColorStop(.55,'#9fe7ff10');tint.addColorStop(1,'#0b2a4466');ctx.fillStyle=tint;ctx.fillRect(cx-r,cy-r,r*2,r*2);
    ctx.strokeStyle='#ffffffb0';ctx.lineWidth=r*.09;ctx.lineCap='round';ctx.beginPath();ctx.arc(cx,cy,r*.74,Math.PI*1.12,Math.PI*1.42);ctx.stroke();
    ctx.fillStyle='#ffffffc0';ctx.beginPath();ctx.arc(cx-r*.18,cy-r*.66,r*.06,0,Math.PI*2);ctx.fill();ctx.restore();
    ctx.drawImage(IM.pod,0,0,Wd,H);});};
  CACHE.pod=new Map([[92,podHero(92)],[140,podHero(140)]]);
  CACHE.pipe=raster(PIPE_W,PIPE_LEN,()=>ctx.drawImage(IM.pipe,0,0,PIPE_W,PIPE_LEN));
  CACHE.shell=raster(44,44,()=>{glow(22,22,20,'#ffd98a',.5);ctx.drawImage(IM.shell,7,7,30,30*IM.shell.height/IM.shell.width);});
  CACHE.plank=raster(270,270*IM.plank.height/IM.plank.width,()=>ctx.drawImage(IM.plank,0,0,270,270*IM.plank.height/IM.plank.width));
  CACHE.shipBg=raster(W,H,()=>ctx.drawImage(IM.shipbg,...SHIP_BG));
  CACHE.bubble=raster(16,16,()=>{ctx.strokeStyle='#d9fbffb0';ctx.lineWidth=1.6;ctx.beginPath();ctx.arc(8,8,5.5,0,Math.PI*2);ctx.stroke();ctx.fillStyle='#ffffffb0';ctx.beginPath();ctx.arc(6,6,1.6,0,Math.PI*2);ctx.fill();});
}
const mix=(a,b,t)=>a+(b-a)*t;
function drawBlock(b){if(b.broken)return;const off=b.bump>0?-Math.sin((1-b.bump/.18)*Math.PI)*10:0;blit(CACHE.blocks[b.kind==='brick'?'brick':b.used?'used':'box'],b.x-14,b.y-10+off);}
function drawFish(f){const x=mix(f.prevX??f.x,f.x,renderAlpha),y=mix(f.prevY??f.y,f.y,renderAlpha);ctx.save();ctx.translate(x+18,y+13);if(f.vx<0)ctx.scale(-1,1);blit(CACHE.fish,-40,-40);ctx.restore();}
function drawPearl(p){blit(CACHE.pearl,p.x-22,p.y-22+Math.sin(renderTime*2.6+p.x*.01)*3);}
function drawCheckpoint(){CP.forEach(([,x],i)=>{if(x>renderCamera-90&&x<renderCamera+W+90)blit(CACHE.checkpoint[checkpoint>i?1:0],x-80,592-182);});}
function drawGoal(){if(GOAL>renderCamera-130&&GOAL<renderCamera+W+130)blit(CACHE.goal[(state==='finishing'||state==='won')?1:0],GOAL-120,592-282);}
function seaLifePositions(j){
  const t=REDUCED_MOTION?0:renderTime,c=renderCamera,wrap=(x,w)=>((x+w)%(W+2*w)+(W+2*w))%(W+2*w)-w,S=(sprite,x,y,face,alpha,angle=0,scale=1)=>({sprite,x,y,face,alpha,angle,scale});
  switch(j){
    case 0:return [S('whale',wrap(560+t*13-c*.13,360),160+Math.sin(t*.35)*13,1,.82,Math.sin(t*.4)*.022),S('school',wrap(260+t*20-c*.16,250),250+Math.sin(t*.6)*7,1,.7),S('seahorse',308-bgPan(0,c)*2.2,505+Math.sin(t*1.1)*5,1,.95,Math.sin(t*.9)*.05)];
    case 1:return [S('turtle',wrap(1040-t*19-c*.2,150),300+Math.sin(t*.7+1)*15,-1,.9,Math.sin(t*.8)*.055),S('school',wrap(500+t*18-c*.14,250),130+Math.sin(t*.5)*8,1,.5),S('jelly1',wrap(980-c*.22,80),420+Math.sin(t*.8)*14,1,.8,Math.sin(t*.6)*.06)];
    case 2:return [S('manta',wrap(700+t*10-c*.1,180),135+Math.sin(t*.3)*10,1,.62,Math.sin(t*.5)*.04),S('school',wrap(200-t*16-c*.17,250),300+Math.sin(t*.6)*7,-1,.6),S('seahorse',wrap(1100-c*.3,40),470+Math.sin(t*1.1)*5,-1,.9,Math.sin(t*.9)*.05)];
    case 3:return [S('jelly0',wrap(300-c*.2,80),190+Math.sin(t*.9)*16,1,.95,Math.sin(t*.7)*.06),S('jelly1',wrap(760-c*.15,80),340+Math.sin(t*.8+2)*14,1,.85,Math.sin(t*.6)*.06),S('jelly0',wrap(1150-c*.25,80),120+Math.sin(t*.7+1)*16,1,.75,Math.sin(t*.5)*.06,.8)];
    case 4:return [S('whale',wrap(900+t*9-c*.07,300),115+Math.sin(t*.3)*10,1,.45,Math.sin(t*.4)*.02,.72),S('school',wrap(400+t*20-c*.16,250),285+Math.sin(t*.6)*7,1,.62),S('jelly1',wrap(1180-c*.2,80),440+Math.sin(t*.8)*14,1,.7,Math.sin(t*.6)*.06)];
    default:return [S('turtle',wrap(400+t*17-c*.2,150),270+Math.sin(t*.7)*15,1,.85,Math.sin(t*.8)*.055),S('manta',wrap(1000-t*8-c*.09,180),105+Math.sin(t*.3)*10,-1,.5,Math.sin(t*.5)*.04,.8),S('school',wrap(700-t*15-c*.12,250),370+Math.sin(t*.6)*7,-1,.55)];
  }
}
function drawSeaLife(j,alpha){if(alpha<.01)return;for(const animal of seaLifePositions(j)){const sprite=CACHE[animal.sprite];ctx.save();ctx.globalAlpha=alpha*animal.alpha;ctx.translate(animal.x,animal.y);ctx.rotate(animal.angle);ctx.scale(animal.face*animal.scale,animal.scale);blit(sprite,-sprite.w/2,-sprite.h/2);ctx.restore();}}
function draw(alpha=1){if(!ready||!world)return;renderAlpha=clamp(alpha,0,1);renderCamera=snap(mix(previous.camera,camera,renderAlpha));renderTime=mix(previous.time,time,renderAlpha);const dpr=canvas.width/W;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.globalAlpha=1;ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='low';if(scene==='ship'){drawShip();return;}drawBackground();ctx.save();ctx.translate(-renderCamera,0);drawSeaPipe();
  for(const p of world.floors)if(p.x+p.w>renderCamera-40&&p.x<renderCamera+W+40)platformArt(p);
  for(const p of world.platforms)if(p.x+p.w>renderCamera-40&&p.x<renderCamera+W+40)platformArt(p);
  drawCheckpoint();drawGoal();for(const b of world.blocks)if(b.x>renderCamera-70&&b.x<renderCamera+W+70)drawBlock(b);
  for(const p of world.pearls)if(!p.taken&&p.x>renderCamera-30&&p.x<renderCamera+W+30)drawPearl(p);
  for(const f of world.fish)if(f.alive&&f.x>renderCamera-100&&f.x<renderCamera+W+100)drawFish(f);
  for(const e of world.enemies)if(e.x>renderCamera-100&&e.x<renderCamera+W+100)drawEnemy(e);
  drawPlayerClipped();
  for(const p of world.particles){ctx.globalAlpha=clamp(p.life/p.max,0,1);ctx.fillStyle=p.color;circle(p.x,p.y,p.r);ctx.fill();}ctx.globalAlpha=1;
  for(const t of world.texts){ctx.globalAlpha=Math.min(1,t.life*3);text(t.label,t.x,t.y,16,t.color,650);}ctx.restore();ctx.globalAlpha=1;drawFade();updateHUD();
}
let lastDrawState='';
function frame(now){
  if(hostSuspended){last=now;acc=0;requestAnimationFrame(frame);return;}
  if(!last)last=now;const delta=Math.min((now-last)/1000,.1);last=now;
  if(!TEST){
    if(['playing','dying','finishing','piping'].includes(state)){watchPerf(delta);acc+=delta;let n=0;while(acc>=DT&&n++<13){capturePrevious();simulate(DT);acc-=DT;}draw(acc/DT);}
    else{acc=0;if(lastDrawState!==state)draw(1);}
    lastDrawState=state;
  }
  requestAnimationFrame(frame);
}
// v7：原创音乐与独立音效总线；首次点击开始后才创建 AudioContext
const BGM_MP3='assets/28a23f92cfc50736772fa276.mp3';
let masterBus,musicBus,sfxBus,musicSource=null,musicPromise=null,noiseBuffer=null,musicStarts=0,voices=0;
const audioEvents=[];
function audioFailure(){sound=false;if(masterBus&&audio)masterBus.gain.setTargetAtTime(0,audio.currentTime,.02);$('sound').textContent='声音：关';$('sound').setAttribute('aria-pressed','false');announce('声音暂未启动，可点“声音：开”重试',3);}
function updateAudioMix(){if(!audio||!masterBus)return;const t=audio.currentTime;masterBus.gain.setTargetAtTime(sound&&!hostSuspended ? .72 : 0,t,.03);musicBus.gain.setTargetAtTime((mapOpen||state==='paused') ? .24 : .55,t,.25);}
function initAudio(){
 if(hostSuspended||!sound){updateAudioMix();return;}
 try{
  if(!audio){audio=new(window.AudioContext||window.webkitAudioContext)();masterBus=audio.createGain();musicBus=audio.createGain();sfxBus=audio.createGain();const limiter=audio.createDynamicsCompressor();limiter.threshold.value=-10;limiter.knee.value=4;limiter.ratio.value=6;limiter.attack.value=.003;limiter.release.value=.12;masterBus.gain.value=.72;musicBus.gain.value=.55;sfxBus.gain.value=1;musicBus.connect(masterBus);sfxBus.connect(masterBus);masterBus.connect(limiter);limiter.connect(audio.destination);
   noiseBuffer=audio.createBuffer(1,Math.round(audio.sampleRate*.5),audio.sampleRate);const d=noiseBuffer.getChannelData(0);let seed=20261115;for(let i=0;i<d.length;i++){seed=(1664525*seed+1013904223)>>>0;d[i]=seed/2147483648-1;}
  }
  if(audio.state==='suspended')audio.resume().then(updateAudioMix).catch(audioFailure);
  updateAudioMix();
  if(!musicPromise){musicPromise=fetch(BGM_MP3).then(response=>{if(!response.ok)throw new Error('Music HTTP '+response.status);return response.arrayBuffer();}).then(bytes=>audio.decodeAudioData(bytes)).then(buffer=>{if(!musicSource){musicSource=audio.createBufferSource();musicSource.buffer=buffer;musicSource.loop=true;musicSource.connect(musicBus);musicSource.start();musicStarts++;}updateAudioMix();}).catch(audioFailure);}
 }catch{audioFailure();}
}
function voice(f,end,duration,gain,delay=0,wave='sine',harmonics=false){
 if(!sound||!audio||audio.state!=='running'||voices>=32)return;
 const t=audio.currentTime+delay,o=audio.createOscillator(),g=audio.createGain();o.type=wave;o.frequency.setValueAtTime(f,t);if(end!==f)o.frequency.exponentialRampToValueAtTime(Math.max(20,end),t+duration*.8);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(gain,t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g);g.connect(sfxBus);voices++;o.onended=()=>{voices--;o.disconnect();g.disconnect();};o.start(t);o.stop(t+duration+.02);
 if(harmonics)voice(f*2.01,end*2.01,duration*.6,gain*.18,delay,'sine');
}
function noise(duration,gain,cutoff){if(!sound||!audio||audio.state!=='running')return;const t=audio.currentTime,n=audio.createBufferSource(),f=audio.createBiquadFilter(),g=audio.createGain();n.buffer=noiseBuffer;f.type='lowpass';f.frequency.value=cutoff;g.gain.setValueAtTime(gain,t);g.gain.exponentialRampToValueAtTime(.0001,t+duration);n.connect(f);f.connect(g);g.connect(sfxBus);n.onended=()=>{n.disconnect();f.disconnect();g.disconnect();};n.start(t);n.stop(t+duration);}
function tone(type){
 if(TEST){audioEvents.push({type,at:audio?.currentTime||0,audible:!!(sound&&audio?.state==='running')});if(audioEvents.length>800)audioEvents.shift();}
 if(!sound||!audio||audio.state!=='running')return;
 try{
  if(type==='pearl'){voice(1046.5,1046.5,.23,.12,0,'sine',true);voice(1568,1568,.24,.08,.055,'sine',true);}
  else if(type==='shell'){[1396.9,2093,2793.8].forEach((f,i)=>voice(f,f,.33,.095-i*.015,i*.045,'sine',true));}
  else if(type==='stomp'){voice(210,55,.19,.23);voice(420,100,.11,.045,0,'triangle');noise(.095,.09,1600);}
  else if(type==='pipe'){voice(420,90,.54,.09,0,'triangle');[610,480,365,270,195].forEach((f,i)=>voice(f,f*.62,.14,.06,i*.072));noise(.36,.045,850);}
  else if(type==='jump'){voice(310,650,.17,.07);}
  else if(type==='hurt'){voice(260,80,.28,.13,0,'triangle');}
  else if(type==='break'){voice(155,40,.13,.15);noise(.17,.10,2400);}
  else{const notes={bump:[145],spawn:[440,660,880],grow:[330,440,660,880],checkpoint:[523,659,784],win:[523,659,784,1047]}[type]||[440];notes.forEach((f,i)=>voice(f,f,.23,.075,i*.065,'sine',true));}
 }catch{}
}
document.addEventListener('visibilitychange',()=>{if(!audio)return;if(document.hidden)audio.suspend().catch(()=>{});else if(sound&&!hostSuspended)audio.resume().then(updateAudioMix).catch(()=>{});});

const keyMap={ArrowLeft:'left',KeyA:'left',ArrowRight:'right',KeyD:'right',ArrowDown:'down',KeyS:'down',ArrowUp:'jump',KeyW:'jump',Space:'jump',KeyZ:'jump',ShiftLeft:'run',ShiftRight:'run',KeyX:'run'};
window.addEventListener('keydown',e=>{if(hostSuspended)return;if(e.code==='Escape'){if(e.repeat)return;e.preventDefault();if(mapOpen)closeMap('esc');else openMap();return;}if(mapOpen)return;if(e.code==='KeyP'&&!e.repeat){if(state==='playing')pause();else if(state==='paused')start();return;}const a=keyMap[e.code];if(a&&state==='playing'&&!e.ctrlKey&&!e.metaKey&&!e.altKey){if(document.activeElement?.tagName==='BUTTON'&&e.code==='Space')return;e.preventDefault();if(!e.repeat)setAction(a,true,'key:'+e.code);}});
window.addEventListener('keyup',e=>{const a=keyMap[e.code];if(a){setAction(a,false,'key:'+e.code);if(state==='playing')e.preventDefault();}});
for(const b of document.querySelectorAll('[data-action]')){const action=b.dataset.action;b.addEventListener('pointerdown',e=>{if(state!=='playing'||e.button>0)return;e.preventDefault();b.setPointerCapture(e.pointerId);setAction(action,true,'ptr:'+e.pointerId);});const release=e=>setAction(action,false,'ptr:'+e.pointerId);b.addEventListener('pointerup',release);b.addEventListener('pointercancel',release);b.addEventListener('lostpointercapture',release);b.addEventListener('keydown',e=>{if((e.code==='Space'||e.code==='Enter')&&state==='playing'){e.preventDefault();if(!e.repeat)setAction(action,true,'button:'+action);}});b.addEventListener('keyup',e=>{if(e.code==='Space'||e.code==='Enter'){e.preventDefault();setAction(action,false,'button:'+action);}});b.addEventListener('blur',()=>setAction(action,false,'button:'+action));}
$('start').addEventListener('click',start);$('pause').addEventListener('click',()=>state==='playing'?pause():state==='paused'?start():null);
$('restart').addEventListener('click',()=>{if(!ready||hostSuspended)return;reset();state='playing';hideOverlay();$('toast').classList.remove('show');$('pause').textContent='暂停';hintDock();updateAudioMix();});
$('sound').addEventListener('click',()=>{sound=!sound;initAudio();$('sound').textContent='声音：'+(sound?'开':'关');$('sound').setAttribute('aria-pressed',String(sound));if(sound)tone('pearl');updateAudioMix();canvas.focus({preventScroll:true});});
if(!document.fullscreenEnabled)$('expand').hidden=true;
$('expand').addEventListener('click',()=>{if(document.fullscreenElement)document.exitFullscreen().catch(()=>announce('浏览器暂未允许退出全屏'));else document.documentElement.requestFullscreen().catch(()=>announce('浏览器未允许全屏，仍可在当前满窗画面中游玩',4));});
document.addEventListener('fullscreenchange',()=>{const on=!!document.fullscreenElement;$('expand').textContent=on?'退出全屏':'全屏';$('expand').setAttribute('aria-pressed',String(on));if(!mapOpen&&$('overlay').hidden)canvas.focus({preventScroll:true});});
window.addEventListener('blur',()=>{clearInput();pause();});document.addEventListener('visibilitychange',()=>{if(document.hidden){clearInput();pause();}});
window.addEventListener('keydown',e=>{if(hostSuspended||e.key!=='Tab'||mapOpen)return;if(!$('overlay').hidden){e.preventDefault();$('start').focus();}});
// v6 满窗布局：16:9 逻辑画面按窗口等比放大；比例差 ≤12% 时铺满（裁少量边缘），否则留边
const shell=$('shell'),worldEl=$('world'),stage=$('stage'),mapLayer=$('mapLayer'),MAP_URL='index.html';
shell.tabIndex=-1;mapLayer.inert=true;
const TOUCH=matchMedia('(pointer: coarse)'),ACTIVE=['playing','dying','finishing','piping'];
let view={s:1,l:0,t:0,w:W,h:H,vw:W,vh:H,vis:[0,0,0,0],portrait:false},islandPos=null;
function setIsland(p){shell.style.setProperty('--ix',(p?p.x*view.vw:view.vw*.12)+'px');shell.style.setProperty('--iy',(p?p.y*view.vh:view.vh*.42)+'px');}
function layout(){
  const vw=shell.clientWidth||innerWidth,vh=shell.clientHeight||innerHeight,portrait=vh>vw*1.05;
  const contain=Math.min(vw/W,vh/H),cover=Math.max(vw/W,vh/H),s=portrait?contain:Math.min(cover,contain*1.12);
  const w=W*s,h=H*s,l=(vw-w)/2,t=portrait?Math.max(0,(vh-h)/2-Math.min(90,(vh-h)/4)):(vh-h)/2;
  Object.assign(stage.style,{width:w+'px',height:h+'px',left:l+'px',top:t+'px'});
  const vis=[Math.max(0,l),Math.max(0,t),Math.max(0,vw-l-w),Math.max(0,vh-t-h)],fw=vw-vis[0]-vis[2];
  ['--vl','--vt','--vr','--vb'].forEach((k,i)=>shell.style.setProperty(k,vis[i]+'px'));
  shell.style.setProperty('--u',clamp(fw/1280,.55,1.3).toFixed(3));
  shell.classList.toggle('portrait',portrait);shell.classList.toggle('touch',TOUCH.matches);
  view={s,l,t,w,h,vw,vh,vis,portrait};setIsland(islandPos);
}
layout();addEventListener('resize',layout);TOUCH.addEventListener?.('change',layout);
// 底部操作栏：开局高亮方向键 5 秒；鼠标靠近画面底部、Tab 聚焦或触屏点画面时再出现
let dockTimer=0,dockHint=false,dockNear=false;
const dockFocused=()=>$('controls').contains(document.activeElement);
function setDock(on){shell.classList.toggle('dock-hidden',!on);}
function dockOff(){clearTimeout(dockTimer);dockHint=false;shell.classList.remove('hinting');setDock(false);}
function hintDock(){clearTimeout(dockTimer);dockHint=true;shell.classList.add('hinting');setDock(true);dockTimer=setTimeout(()=>{dockHint=false;shell.classList.remove('hinting');if(!dockNear&&!dockFocused())setDock(false);},5000);}
function peekDock(ms){if(dockHint||mapOpen||!$('overlay').hidden)return;setDock(true);clearTimeout(dockTimer);dockTimer=setTimeout(()=>{if(!dockNear&&!dockHint&&!dockFocused())setDock(false);},ms);}
shell.addEventListener('pointermove',e=>{if(e.pointerType==='touch'||mapOpen||!$('overlay').hidden)return;const near=e.clientY>view.vh-view.vis[3]-150;if(near===dockNear)return;dockNear=near;if(near){if(!dockHint){clearTimeout(dockTimer);setDock(true);}}else peekDock(1200);});
shell.addEventListener('pointerleave',()=>{if(!dockNear)return;dockNear=false;peekDock(600);});
canvas.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')peekDock(3500);});
$('controls').addEventListener('focusin',()=>{if(!mapOpen&&$('overlay').hidden){if(!dockHint)clearTimeout(dockTimer);setDock(true);}});
$('controls').addEventListener('focusout',()=>peekDock(1500));
// 群岛地图：游戏冻结在当前帧并缩回灯塔岛，地图从放大状态退远浮现；返回时镜头潜回，从原处继续
let mapOpen=false,mapBusy=false,mapReady=false,mapPrev=null,mapTimer=0,mapVia=null;
// v12 host bridge: keep the actual scene/state intact; only the frame loop is gated.
function postHost(m){if(HOSTED)parent.postMessage({source:'loopie-first',...m},'*');}
function suspendHost(){
  if(!HOSTED)return;
  // Duplicate pause messages must not replace the original state/resumeState.
  if(hostPrevState===null){hostPrevState=state;hostPrevResumeState=resumeState;}
  hostSuspended=true;hostPendingResume=null;clearInput();worldEl.inert=true;updateAudioMix();
  // Immediate zero gain also covers pending decode/resume callbacks.
  if(audio&&masterBus){const t=audio.currentTime;masterBus.gain.cancelScheduledValues(t);masterBus.gain.setValueAtTime(0,t);}
  if(audio)audio.suspend().catch(()=>{});
}
function resumeHost(play){
  if(!HOSTED)return;
  if(!ready){hostPendingResume={play:play===true};return;}
  const saved=hostPrevState===null?state:hostPrevState;
  const savedResume=hostPrevResumeState===null?resumeState:hostPrevResumeState;
  hostSuspended=false;hostPrevState=hostPrevResumeState=null;hostPendingResume=null;
  state=saved;resumeState=savedResume;worldEl.inert=false;
  last=performance.now();acc=0;clearInput();
  if(state==='ready'){
    if(play===true)start();else $('start').focus({preventScroll:true});
  }else{
    // A blur can have invoked v7 pause() immediately before the host message.
    if(state==='paused'&&ACTIVE.includes(resumeState)){state=resumeState;hideOverlay();$('pause').textContent='暂停';}
    initAudio();
    if($('overlay').hidden)canvas.focus({preventScroll:true});else $('start').focus({preventScroll:true});
  }
  updateAudioMix();
}
addEventListener('message',e=>{
  if(!HOSTED||e.source!==parent||!e.data||e.data.source!=='loopie-host')return;
  if(e.data.type==='pause')suspendHost();
  else if(e.data.type==='resume')resumeHost(e.data.play===true);
});
function ensureMap(){if(HOSTED)return;if(!mapLayer.getAttribute('src'))mapLayer.src=MAP_URL+'?embed=1';}
function postMap(m){try{mapLayer.contentWindow.postMessage({source:'loopie-game',...m},'*');}catch{}}
const motionMs=ms=>REDUCED_MOTION?240:ms,mapLabel=()=>mapPrev==='ready'?'开始游戏':'继续游戏';
function openMap(){
  if(HOSTED){const started=state!=='ready';suspendHost();postHost({type:'back',started});return;}
  if(!ready)return;location.href='audit-sea.html?level=0';return;
  // Original v7 in-page map transition retained below; v12 uses the host bridge/link.
  if(mapOpen||mapBusy||!ready)return;ensureMap();
  mapPrev=state;if(ACTIVE.includes(state)){resumeState=state;state='paused';}clearInput();draw(1);
  mapOpen=mapBusy=true;mapVia=null;updateAudioMix();dockOff();worldEl.inert=true;mapLayer.inert=false;mapLayer.tabIndex=0;mapLayer.setAttribute('aria-hidden','false');
  postMap({type:'show',label:mapLabel()});
  shell.classList.add('map-prep');void shell.offsetWidth;shell.classList.add('map-open');
  clearTimeout(mapTimer);mapTimer=setTimeout(()=>{mapBusy=false;shell.classList.add('map-settled');mapLayer.focus();try{mapLayer.contentWindow.focus();}catch{}postMap({type:'focus'});},motionMs(1550));
}
function closeMap(via){
  if(!mapOpen||mapBusy)return;mapBusy=true;mapVia=via||'esc';
  shell.classList.remove('map-settled','map-open');mapLayer.inert=true;mapLayer.tabIndex=-1;mapLayer.setAttribute('aria-hidden','true');
  shell.focus({preventScroll:true});
  clearTimeout(mapTimer);mapTimer=setTimeout(()=>{shell.classList.remove('map-prep');mapOpen=mapBusy=false;worldEl.inert=false;updateAudioMix();
    if(ACTIVE.includes(mapPrev)){state=resumeState;clearInput();last=performance.now();acc=0;}
    else if(mapVia==='play'&&mapPrev==='ready')start();
    if($('overlay').hidden)canvas.focus({preventScroll:true});else $('start').focus({preventScroll:true});updateAudioMix();
  },motionMs(1400));
}
addEventListener('message',e=>{if(e.source!==mapLayer.contentWindow||!e.data||e.data.source!=='loopie-map')return;const d=e.data;
  if(d.island){islandPos=d.island;setIsland(islandPos);}
  if(d.type==='ready'){mapReady=true;if(mapOpen)postMap({type:'show',label:mapLabel()});}
  else if(d.type==='back')closeMap(d.via);});
$('mapBtn').addEventListener('click',e=>{e.preventDefault();openMap();});
function snapshot(){return {scene,pipe:pipe&&pipe.phase,fade,state,player:{...player},camera,simulationTime:time,attempts,checkpoint,stats:{...stats},input:{...input},enemies:world.enemies.map(e=>({...e})),fish:world.fish.map(f=>({...f})),blocks:world.blocks.map(b=>({...b}))};}
// Deterministic hooks exist only on the explicit local test URL; the normal game has no cheats.
window.__platformer={get ready(){return ready;},snapshot};
if(TEST)Object.assign(window.__platformer,{reset:()=>{reset();state='playing';hideOverlay();draw();},advance:(seconds)=>{for(let t=0;t<seconds-1e-6;t+=DT){capturePrevious();simulate(DT);}draw(1);return snapshot();},input:(name,value)=>setAction(name,value,'test:'+name),place:(props)=>{Object.assign(player,props);camera=clamp(player.x-365,0,ROOM()-W);capturePrevious();draw();},world:()=>world,ship:()=>shipWorld,sea:()=>seaWorld,render:draw,scale:()=>({rs:RS,max:MAX_RS,w:canvas.width,h:canvas.height,css:canvas.getBoundingClientRect().width,dpr:devicePixelRatio}),setMaxScale:(v)=>{MAX_RS=v;fitCanvas(true);return RS;},map:()=>({open:mapOpen,busy:mapBusy,ready:mapReady,prev:mapPrev,via:mapVia,island:islandPos,state}),dock:()=>({hidden:shell.classList.contains('dock-hidden'),hint:dockHint}),view:()=>view,audio:()=>({enabled:sound,status:audio?.state||'not-created',music:!!musicSource,musicStarts,musicDuration:musicSource?.buffer.duration||0,master:masterBus?.gain.value||0,musicGain:musicBus?.gain.value||0,voices,events:audioEvents.slice()})});
Promise.all(Object.entries(ASSET).map(([name,src])=>new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>{IM[name]=im;resolve();};im.onerror=()=>reject(new Error(name));im.src=src;}))).then(()=>{fitCanvas(false);$('mark').src=ASSET.hero;$('shellIcon').src=ASSET.shell;reset();buildArtCache();ready=true;showOverlay('ready');$('start').disabled=false;draw();watchCanvas();
 if(HOSTED){
  worldEl.inert=hostSuspended;postHost({type:'ready',started:false});
  if(hostPendingResume!==null){const pending=hostPendingResume;hostPendingResume=null;resumeHost(pending.play);}
 }
 setTimeout(ensureMap,800);requestAnimationFrame(frame);}).catch(err=>{$('overlayTitle').textContent='素材未能加载';$('overlayText').hidden=false;$('overlayText').textContent='请重新打开完整的 HTML 文件。未开始游戏。';$('overlayText').classList.add('loading-error');$('start').textContent='加载失败';console.error(err);});
