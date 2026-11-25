// Ship collision is derived from the exact upstream vertex buffer, not an
// invisible replacement box. Terrain continues to use its own compressed SDF.
const v3ShipCells=new Map(),v3Triangle=new V3_THREE.Triangle(),v3Closest=new V3_THREE.Vector3(),v3TestPoint=new V3_THREE.Vector3();
{
 const mesh=meshes[11],vertices=new Float32Array(mesh.vb),range=Wd.solids.ranges[11];
 for(let inst=range[0];inst<range[0]+range[1];inst++){
  const data=solidData.subarray(inst*12,inst*12+12),q=new V3_THREE.Quaternion(...data.subarray(4,8));
  const point=i=>new V3_THREE.Vector3(vertices[i*4],vertices[i*4+1],vertices[i*4+2]).multiplyScalar(data[3]).applyQuaternion(q).add(new V3_THREE.Vector3(...data.subarray(0,3)));
  for(let i=0;i<mesh.ib.length;i+=3){const triangle=new V3_THREE.Triangle(point(mesh.ib[i]),point(mesh.ib[i+1]),point(mesh.ib[i+2]));const box=new V3_THREE.Box3().setFromPoints([triangle.a,triangle.b,triangle.c]);for(let x=floor(box.min.x/4);x<=floor(box.max.x/4);x++)for(let y=floor(box.min.y/4);y<=floor(box.max.y/4);y++)for(let z=floor(box.min.z/4);z<=floor(box.max.z/4);z++){const key=x+','+y+','+z;if(!v3ShipCells.has(key))v3ShipCells.set(key,[]);v3ShipCells.get(key).push(triangle);}}
 }
}
// Read-only collision diagnostic for replaying reachable routes through the
// same terrain, exact wreck triangles and gate used by the live solver.
const v3ShipBounds={min:[Infinity,Infinity,Infinity],max:[-Infinity,-Infinity,-Infinity]};
for(const key of v3ShipCells.keys()){const cell=key.split(',').map(Number);for(let i=0;i<3;i++){v3ShipBounds.min[i]=min(v3ShipBounds.min[i],cell[i]);v3ShipBounds.max[i]=max(v3ShipBounds.max[i],cell[i]);}}
function v3WorldClearance(x,y,z,heading=0){
 let value=v3Clearance([x,y,z],heading);
 for(const sample of V3_SPHERES){
  const o=v3Offset(sample,heading),radius=sample[3];v3TestPoint.set(x+o[0],y+o[1],z+o[2]);
  const cell=[floor(v3TestPoint.x/4),floor(v3TestPoint.y/4),floor(v3TestPoint.z/4)];
  if(cell.every((v,i)=>v>=v3ShipBounds.min[i]-1&&v<=v3ShipBounds.max[i]+1)){
   const tested=new Set();for(let ix=cell[0]-1;ix<=cell[0]+1;ix++)for(let iy=cell[1]-1;iy<=cell[1]+1;iy++)for(let iz=cell[2]-1;iz<=cell[2]+1;iz++)for(const triangle of v3ShipCells.get(ix+','+iy+','+iz)||[]){if(tested.has(triangle))continue;tested.add(triangle);triangle.closestPointToPoint(v3TestPoint,v3Closest);value=max(value,radius-v3TestPoint.distanceTo(v3Closest));}
  }
  if(!V3_STATE.unlocked&&v3GateInside(v3TestPoint.x,v3TestPoint.y))value=max(value,radius+.09-abs(v3TestPoint.z-V3_LAYOUT.gate.position[2]));
  value=max(value,v3CastlePenetration(v3TestPoint.x,v3TestPoint.y,v3TestPoint.z,radius),v3LandmarkPenetration(v3TestPoint.x,v3TestPoint.y,v3TestPoint.z,radius));
 }
 return value;
}
const v3Keys=new Set(),v3Touches=new Map();
const v3Input=code=>v3Keys.has(code)||[...v3Touches.values()].includes(code);
function v3Stop(){v3Keys.clear();v3Touches.clear();document.querySelectorAll('[data-key].pressed').forEach(button=>button.classList.remove('pressed'));mdx=mdy=lkx=lky=l2x=l2y=0;tId=-1;tN=0;}
function v3Push(gx,gy,gz,amount){const p=V3_PLAYER;p.x-=gx*amount;p.y-=gy*amount;p.z-=gz*amount;const dot=p.vx*gx+p.vy*gy+p.vz*gz;if(dot>0){p.vx-=gx*dot;p.vy-=gy*dot;p.vz-=gz*dot;}}
function v3Resolve(){
 const p=V3_PLAYER;
 for(let iter=0;iter<3;iter++)for(const sample of V3_SPHERES){
  const o=v3Offset(sample,p.heading),x=p.x+o[0],y=p.y+o[1],z=p.z+o[2],radius=sample[3],value=v3Distance(x,y,z)+radius;
  if(value>0){const e=.3,gx=v3Distance(x+e,y,z)-v3Distance(x-e,y,z),gy=v3Distance(x,y+e,z)-v3Distance(x,y-e,z),gz=v3Distance(x,y,z+e)-v3Distance(x,y,z-e),l=hypot(gx,gy,gz);if(l>.015)v3Push(gx/l,gy/l,gz/l,value+.001);}
  v3TestPoint.set(p.x+o[0],p.y+o[1],p.z+o[2]);const ix=floor(v3TestPoint.x/4),iy=floor(v3TestPoint.y/4),iz=floor(v3TestPoint.z/4);
  const tested=new Set();
  for(let cx=ix-1;cx<=ix+1;cx++)for(let cy=iy-1;cy<=iy+1;cy++)for(let cz=iz-1;cz<=iz+1;cz++)for(const triangle of v3ShipCells.get(cx+','+cy+','+cz)||[]){if(tested.has(triangle))continue;tested.add(triangle);triangle.closestPointToPoint(v3TestPoint,v3Closest);const delta=v3Closest.clone().sub(v3TestPoint),distance=delta.length();if(distance<radius&&distance>.0001){delta.multiplyScalar(1/distance);v3Push(delta.x,delta.y,delta.z,radius-distance+.001);v3TestPoint.set(p.x+o[0],p.y+o[1],p.z+o[2]);}}
  const bx=p.x+o[0],by=p.y+o[1],bz=p.z+o[2]-V3_LAYOUT.gate.position[2];
  if(!V3_STATE.unlocked&&v3GateInside(bx,by)&&abs(bz)<radius+.09)v3Push(0,0,bz>=0?-1:1,radius+.09-abs(bz)+.001);
  const contact=v3AddedContact(p.x+o[0],p.y+o[1],p.z+o[2],radius);
  if(contact){v3Push(contact.gx,contact.gy,contact.gz,contact.amount);V3_STATE.contactId=contact.id||'castle';if(F[TIME]-V3_STATE.lastContact>.8){V3_STATE.contacts++;V3_STATE.lastContact=F[TIME];}}
 }
 p.y=clamp(p.y,-50,-2.8);const r=hypot(p.x,p.z);if(r>145){p.x*=145/r;p.z*=145/r;}
}
function v3Collect(){
 const p=V3_PLAYER;
 for(const item of v3Items)if(!item.collected&&hypot(p.x-item.position[0],p.y-item.position[1],p.z-item.position[2])<2.3){
  let clear=true;
  for(let j=1;j<5;j++){const t=j/5,x=mix(p.x,item.position[0],t),y=mix(p.y,item.position[1],t),z=mix(p.z,item.position[2],t);if(v3Distance(x,y,z)>0||v3AddedContact(x,y,z,.05))clear=false;}
  if(clear){item.collected=true;V3_STATE.counts[item.type]++;}
 }
 V3_STATE.unlocked=V3_STATE.counts.pearl>=20&&V3_STATE.counts.shell>=12;
}
function v3GateInside(x,y){const c=V3_LAYOUT.castle.position,dx=x-c[0];return abs(dx)<4.8&&y>c[1]+1.4&&y<c[1]+11+Math.sqrt(max(0,4.8**2-dx**2));}
function v3Complete(){
 if(!V3_STATE.unlocked||V3_STATE.completed)return;
 V3_STATE.completed=true;V3_STATE.continuing=false;menu=true;v3Stop();
 V3_PLAYER.vx=V3_PLAYER.vy=V3_PLAYER.vz=0;body.className='g';
 $('complete').hidden=false;v3ReleaseMouse();v3PauseAudio();v3Hud();$('continue').focus();
}
const v3Transit={side:1,crossed:false};
function v3TrackPassage(old){
 const p=V3_PLAYER,z=V3_LAYOUT.castle.position[2],from=old[2]-z,to=p.z-z;
 if((from>0&&to<=0)||(from<0&&to>=0)){
  const t=from/(from-to);v3Transit.crossed=V3_STATE.unlocked&&v3Transit.side===Math.sign(from)&&v3CastleDoorClearance(mix(old[0],p.x,t),mix(old[1],p.y,t),p.heading)>.01;
 }
 // Count only after the whole hull leaves the 4.5m-deep arch, not merely
 // approaching it or placing the bow across an invisible center plane.
 if(abs(to)>6){const side=Math.sign(to);if(v3Transit.crossed&&side!==v3Transit.side){V3_STATE.passages++;if(side<0)V3_STATE.frontPassages++;else V3_STATE.backPassages++;V3_STATE.direction=side<0?'正面 → 门后':'门后 → 正面';V3_STATE.lastPassage=F[TIME];v3Complete();}v3Transit.side=side;v3Transit.crossed=false;}
}
function v3Move(dx,dy,dz){
 const p=V3_PLAYER,n=max(1,Math.ceil(hypot(dx,dy,dz)/.25));
 for(let i=0;i<n;i++){const old=[p.x,p.y,p.z];p.x+=dx/n;p.y+=dy/n;p.z+=dz/n;v3Resolve();v3Collect();v3TrackPassage(old);if(V3_STATE.completed&&!V3_STATE.continuing)break;}
}
function v3Update(dt){
 if(menu||V3_STATE.completed&&!V3_STATE.continuing)return;
 const p=V3_PLAYER;
 const turn=Number(v3Input('KeyD')||v3Input('ArrowRight'))-Number(v3Input('KeyA')||v3Input('ArrowLeft'));
 p.heading+=turn*1.15*dt+mdx*.0022; p.pitch=clamp(p.pitch-mdy*.0022,-1.2,1.2);mdx=mdy=0;
 if(tId>=0){p.heading+=clamp((tx-tx0)/90,-1,1)*dt;p.pitch=clamp(p.pitch-clamp((ty-ty0)/90,-1,1)*dt,-1.2,1.2);}
 const f=Number(v3Input('KeyW')||v3Input('ArrowUp')||tId>=0)-Number(v3Input('KeyS')||v3Input('ArrowDown')),vertical=Number(v3Input('KeyE'))-Number(v3Input('KeyQ'));
 const speed=v3Input('ShiftLeft')||v3Input('ShiftRight')?11:6.2,len=max(1,hypot(f,vertical)),k=1-exp(-dt*3.5);
 p.vx+=(sin(p.heading)*f/len*speed-p.vx)*k;p.vy+=(vertical/len*speed-p.vy)*k;p.vz+=(-cos(p.heading)*f/len*speed-p.vz)*k;
 v3Move(p.vx*dt,p.vy*dt,p.vz*dt);v3Hud();
}
function v3Camera(){
 if(V3_STATE.inspection){const {eye,target}=V3_STATE.inspection;F[CX]=eye[0];F[CY]=eye[1];F[CZ]=eye[2];F[YAW]=Math.atan2(target[0]-eye[0],-(target[2]-eye[2]));F[PIT]=Math.atan2(target[1]-eye[1],hypot(target[0]-eye[0],target[2]-eye[2]));return;}
 const p=V3_PLAYER,fx=sin(p.heading),fz=-cos(p.heading);
 if(V3_STATE.view==='cockpit'){F[CX]=p.x+fx*.35;F[CY]=p.y+.25;F[CZ]=p.z+fz*.35;F[YAW]=p.heading;F[PIT]=p.pitch;}
 else{
  // Stop the chase camera before terrain; do not look out from inside a cliff.
  let distance=14;for(let d=.5;d<=14;d+=.5)if(v3Distance(p.x-fx*d,p.y+6.2*d/14,p.z-fz*d)>-.45||v3AddedContact(p.x-fx*d,p.y+6.2*d/14,p.z-fz*d,.45)!==null){distance=max(.6,d-.6);break;}
  F[CX]=p.x-fx*distance;F[CY]=min(-.8,p.y+6.2*distance/14);F[CZ]=p.z-fz*distance;
  F[YAW]=p.heading;F[PIT]=Math.atan2(1.6-6.2*distance/14,distance+4)+p.pitch*.5;
 }
}
function v3Hud(){
 const p=V3_PLAYER,c=V3_STATE.counts;$('pearls').textContent='珍珠 '+c.pearl+' / 20';$('shells').textContent='贝壳 '+c.shell+' / 12';$('depth').textContent=Math.round(-p.y)+' m';$('speed').textContent=hypot(p.vx,p.vy,p.vz).toFixed(1)+' m/s';
 const distance=i=>hypot(p.x-i.position[0],p.y-i.position[1],p.z-i.position[2]);
 const target=V3_STATE.unlocked?{position:V3_LAYOUT.gate.position,type:'gate'}:v3Items.filter(i=>!i.collected&&(i.type==='pearl'?c.pearl<20:c.shell<12)).sort((a,b)=>distance(a)-distance(b))[0];
 if(target){const a=target.position,d=distance(target),heading=Math.atan2(a[0]-p.x,-(a[2]-p.z)),relative=Math.atan2(sin(heading-p.heading),cos(heading-p.heading));$('bearing').style.transform='rotate('+relative+'rad)';$('target').textContent=(target.type==='gate'?'海关城堡':target.type==='shell'?'贝壳':'珍珠')+' · '+Math.round(d)+' m';$('altitude').textContent=abs(a[1]-p.y)<1.2?'同一深度':a[1]>p.y?'向上 '+Math.round(a[1]-p.y)+' m':'向下 '+Math.round(p.y-a[1])+' m';}
 $('gate-status').textContent=V3_STATE.completed?'探索完成 · 可继续航行':V3_STATE.unlocked?'海门已开启 · 完整穿过即可通关':'收集两种物品，开启海门';$('view').textContent=V3_STATE.view==='external'?'驾驶舱 · V':'外部视角 · V';$('gate-distance').textContent='海门 '+Math.round(hypot(p.x-V3_LAYOUT.gate.position[0],p.y-V3_LAYOUT.gate.position[1],p.z-V3_LAYOUT.gate.position[2]))+' m';
 document.querySelectorAll('[data-destination]').forEach(b=>b.classList.toggle('on',b.dataset.destination===V3_STATE.landmark));
}
function v3GotoLandmark(id){const landmark=V3_LAYOUT.landmarks.find(i=>i.id===id);if(!landmark)return;const p=V3_PLAYER;[p.x,p.y,p.z]=landmark.approach;p.heading=landmark.heading;p.pitch=.1;p.vx=p.vy=p.vz=0;V3_STATE.landmark=id;V3_STATE.inspection=null;v3Transit.side=Math.sign(p.z-V3_LAYOUT.castle.position[2]);v3Transit.crossed=false;v3Stop();v3Camera();v3Hud();}
function v3Home(){v3GotoLandmark('castle');}
function v3Reset(){for(const item of v3Items)item.collected=false;Object.assign(V3_STATE,{counts:{pearl:0,shell:0},passages:0,frontPassages:0,backPassages:0,contacts:0,lastContact:-100,lastPassage:-100,direction:'尚未穿门',unlocked:false,completed:false,continuing:false});$('complete').hidden=true;v3Home();go();}
function v3View(){V3_STATE.view=V3_STATE.view==='external'?'cockpit':'external';v3Hud();}
// Ignore late lock-loss events from a deliberate pause/exit. A new mouse
// capture clears this flag, so an ordinary Esc/unexpected loss still pauses.
let v3ReleasedMouse=false;
function v3ReleaseMouse(){v3ReleasedMouse=true;document.exitPointerLock?.();}
function v3TogglePause(){
 if(!V3_STATE.started||V3_STATE.completed&&!V3_STATE.continuing)return;
 if(menu)go();else{ui(true);v3ReleaseMouse();}
}
const v3Hosted=window.parent!==window&&new URLSearchParams(location.search).has('host');
const v3Music=new Audio(window.V3_ASSETS.music);v3Music.loop=true;v3Music.volume=.28;
function v3PauseAudio(){v3Music.pause();if(AC)AC.suspend().catch(()=>{});}
function v3Post(type){if(v3Hosted)window.parent.postMessage({source:'loopie-sea',type,started:V3_STATE.started},location.origin);}
function v3Exit(){v3Stop();V3_PLAYER.vx=V3_PLAYER.vy=V3_PLAYER.vz=0;ui(true);v3ReleaseMouse();v3PauseAudio();if(document.fullscreenElement)document.exitFullscreen?.()?.catch(()=>{});if(v3Hosted)v3Post('back');else location.href='index.html';}
function v3Fullscreen(){
 const request=document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.();
 request?.catch(()=>{$('fullscreen').title='浏览器未允许全屏，可使用浏览器自带的全屏功能';});
}
function v3Setup(){
 $('o').onclick=v3TogglePause;$('exit').onclick=v3Exit;$('menu-map').onclick=v3Exit;$('finish-map').onclick=v3Exit;
 let hostWasPlaying=false;
 addEventListener('message',e=>{if(!v3Hosted||e.source!==window.parent||e.origin!==location.origin||e.data?.source!=='loopie-host')return;
  if(e.data.type==='pause'){if(!V3_STATE.hostSuspended){hostWasPlaying=!menu;V3_STATE.hostSuspended=true;}v3Stop();ui(true);v3ReleaseMouse();v3PauseAudio();}
  else if(e.data.type==='resume'){V3_STATE.hostSuspended=false;if((hostWasPlaying||e.data.play)&&(!V3_STATE.completed||V3_STATE.continuing)){go();}hostWasPlaying=false;}
 });
 // Esc belongs to shared navigation; Space/Enter remain the in-game pause keys.
 addEventListener('keydown',e=>{if(e.code==='Escape'){e.preventDefault();v3Exit();}});
 $('view').onclick=v3View;$('home').onclick=v3Home;$('continue').onclick=()=>{V3_STATE.continuing=true;$('complete').hidden=true;go();};$('restart').onclick=v3Reset;
 $('mute').onclick=()=>{sound();mute();v3Music.muted=!v3Music.muted;$('mute').textContent=$('mute').textContent==='静音 · M'?'声音 · M':'静音 · M';};
 $('fullscreen').onclick=v3Fullscreen;
 for(const button of document.querySelectorAll('[data-destination]'))button.onclick=()=>{if(!menu)v3GotoLandmark(button.dataset.destination);};
 document.addEventListener('fullscreenchange',()=>{$('fullscreen').textContent=document.fullscreenElement?'退出全屏 · F':'全屏 · F';});
 for(const button of document.querySelectorAll('[data-key]')){
  button.addEventListener('pointerdown',e=>{e.preventDefault();if(menu)return;button.setPointerCapture(e.pointerId);v3Touches.set(e.pointerId,button.dataset.key);button.classList.add('pressed');});
  const end=e=>{v3Touches.delete(e.pointerId);button.classList.remove('pressed');};button.addEventListener('pointerup',end);button.addEventListener('pointercancel',end);button.addEventListener('lostpointercapture',end);
 }
 addEventListener('keydown',e=>{
  if((e.code==='KeyF'||e.code==='KeyX')&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&V3_STATE.started&&(!V3_STATE.completed||V3_STATE.continuing)){e.preventDefault();if(!e.repeat){if(e.code==='KeyF')v3Fullscreen();else v3Exit();}return;}
  if((e.code==='Enter'||e.code==='NumpadEnter'||e.code==='Space')&&V3_STATE.started&&(!V3_STATE.completed||V3_STATE.continuing)){e.preventDefault();if(!e.repeat)v3TogglePause();return;}
  if(menu)return;
  if(['KeyW','KeyS','KeyA','KeyD','KeyE','KeyQ','ShiftLeft','ShiftRight','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code)){e.preventDefault();v3Keys.add(e.code);}
  if(!e.repeat){if(e.code==='KeyV')v3View();if(e.code==='KeyR')v3Home();}
 });
 addEventListener('keyup',e=>{v3Keys.delete(e.code);if((e.code==='Enter'||e.code==='NumpadEnter'||e.code==='Space')&&V3_STATE.started&&(!V3_STATE.completed||V3_STATE.continuing))e.preventDefault();});addEventListener('blur',()=>{v3Stop();if(V3_STATE.started&&(!V3_STATE.completed||V3_STATE.continuing))ui(true);});document.addEventListener('visibilitychange',()=>{if(document.hidden){v3Stop();if(V3_STATE.started&&(!V3_STATE.completed||V3_STATE.continuing))ui(true);}});
 v3Hud();
 window.__abyssalV3={
  snapshot:()=>({renderer:'native WebGPU',trial:false,version:24,started:V3_STATE.started,hostSuspended:!!V3_STATE.hostSuspended,audio:{context:AC?.state??'uninitialized',musicPaused:v3Music.paused,musicMuted:v3Music.muted},input:{keys:[...v3Keys],touch:[...v3Touches.values()]},targets:{pearl:20,shell:12},selectedLandmark:V3_STATE.landmark,lighting:{adjusted:true,purpleScatter:[.22,.50,.66],exposure:.54,rays:.32,camera:[F[CX],F[CY],F[CZ]],zone:UB[51],cameraExposure:UB[56]},landmarks:v3LandmarkCollisions.map(i=>({id:i.id,position:i.position,spec:i.geometry.spec,bounds:i.geometry.bounds,triangles:i.geometry.triangles,collisionTriangles:i.geometry.collisionTriangles,collision:i.solver.info,shadowBaked:true})),castle:{position:V3_LAYOUT.castle.position,spec:V3_CASTLE_DATA.spec,bounds:V3_CASTLE_DATA.bounds,triangles:V3_CASTLE_DATA.triangles,collisionTriangles:V3_CASTLE_DATA.collisionTriangles,shadowBaked:v3CastleShadowBaked,collision:v3CastleCollisionInfo},passages:V3_STATE.passages,frontPassages:V3_STATE.frontPassages,backPassages:V3_STATE.backPassages,contacts:V3_STATE.contacts,quality:LV,originalWorld:true,originalFullPost:true,player:{...V3_PLAYER},view:V3_STATE.view,counts:{...V3_STATE.counts},unlocked:V3_STATE.unlocked,completed:V3_STATE.completed,continuing:V3_STATE.continuing,paused:menu,time:F[TIME],fishCount:nFish,mantaCount:nManta,leafCount:Wd.big.start[Wd.big.start.length-1],items:v3Items.map(i=>({id:i.id,type:i.type,position:[...i.position],collected:i.collected})),gate:{...V3_LAYOUT.gate},route:V3_LAYOUT.route,canvas:[W,H],gpuMs:F[GPU],buffers:v3Buffers,cockpit:V3_GEOMETRY.snapshot(),shipCollisionCells:v3ShipCells.size}),
  teleport:(x,y,z,heading=0)=>{Object.assign(V3_PLAYER,{x,y,z,heading,vx:0,vy:0,vz:0});V3_STATE.inspection=null;v3Transit.side=Math.sign(z-V3_LAYOUT.castle.position[2]);v3Transit.crossed=false;v3Stop();v3Camera();v3Hud();},
  step:(dt=1/60,n=1)=>{for(let i=0;i<n;i++){if(!menu)F[TIME]+=dt;v3Update(dt);}v3Camera();render();},
  move:(x,y,z)=>v3Move(x,y,z),
  collect:()=>{v3Collect();v3Hud();},input:(code,down)=>down?v3Keys.add(code):v3Keys.delete(code),pause:()=>ui(true),resume:()=>{ui(false);V3_STATE.started=true;},home:v3Home,reset:v3Reset,
  inspect:(eye,target)=>{ui(true);V3_STATE.inspection={eye,target};V3_STATE.view='external';v3Camera();render();},render:()=>render(),doorClearance:v3CastleDoorClearance,castlePenetration:v3CastlePenetration,
  gotoLandmark:v3GotoLandmark,landmarkPenetration:v3LandmarkPenetration,landmarkContact:v3LandmarkContact,fixedTime:t=>{ui(true);F[TIME]=t;render();},view:mode=>{V3_STATE.view=mode;v3Hud();},clearance:(x,y,z,heading=0)=>v3Clearance([x,y,z],heading),worldClearance:v3WorldClearance,distance:v3Distance,
 };
 if(!new URLSearchParams(location.search).has('test'))window.__abyssalV3={snapshot:window.__abyssalV3.snapshot};
}
