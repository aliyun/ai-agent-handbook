import * as THREE from 'three';
import { createWildlife } from './wildlife-v5.js';

import { createCockpit } from './cockpit-v20.js';
import { createDeepSea } from './deep-sea-v11.js';
import { addClearSeaSample,SAMPLE } from './clear-sea-v11.js';
import { OCEAN_PERIOD,PEAKS,oceanLocal,oceanFloor,originalFloor,nearestImage,wrap,addTerrainChunks,addHighSea,createOceanPool } from './ocean-loop-v10.js';

// Independent five-region expansion. Accepted cockpit, controls and vehicle frozen.
// Original canyon species retain their v8 geometry, pigment and motion.
const $ = id => document.getElementById(id);
const DATA = window.__SEA_ASSETS;
const TEST = new URLSearchParams(location.search).has('test');
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const INITIAL_LEVEL = ({'0':0,'2':2})[new URLSearchParams(location.search).get('level')] ?? 1;
const COARSE_POINTER = matchMedia('(pointer: coarse)').matches;
const MAX_RENDER_DPR = COARSE_POINTER ? 1.25 : 2;
const MAX_FRAME_STEPS = COARSE_POINTER ? 2 : 4;
const keys = new Set(), touchKeys = new Map();
const V3 = THREE.Vector3, clamp = THREE.MathUtils.clamp;
const scene = new THREE.Scene();
scene.background = new THREE.Color('#073747');
scene.fog = new THREE.Fog('#073747', 42, 155);
const camera = new THREE.PerspectiveCamera(57, innerWidth / innerHeight, .2, 420);
const TOTALS={pearl:50,shell:20};
const TARGETS={pearl:20,shell:12};
let gateUnlocked=false,gatePassed=false,gateCurtain;
let activeLevel=INITIAL_LEVEL,firstReady=false,firstStarted=false,firstQueuedPlay=false,thirdReady=false,thirdStarted=false,thirdQueuedPlay=false;
const keyOrder=new Map(),touchOrder=new Map();let inputSerial=0;
// Bounds retained only for original collectible placement, NOT player movement.
const SEA_BOUNDS={minX:-70,maxX:70,minZ:-134,maxZ:36};
const voyage={x:0,z:0,crossings:0};let oceanPool,highSea;
const logicalOffset=()=>new V3(voyage.x*OCEAN_PERIOD.x,0,voyage.z*OCEAN_PERIOD.z);
function floatOrigin(){
 const cx=Math.floor((player.x+110)/220),cz=Math.floor((player.z+179)/260);
 if(!cx&&!cz)return;
 const shift=new V3(cx*220,0,cz*260);
 player.sub(shift);camera.position.sub(shift);cameraTarget.sub(shift);cameraDesired.sub(shift);
 voyage.x+=cx;voyage.z+=cz;voyage.crossings++;
}
function placeWorld(x,y,z){const p=oceanLocal({x,y,z});voyage.x=Math.round((x-p.x)/220);voyage.z=Math.round((z-p.z)/260);player.set(p.x,y,p.z);}
const REGIONS=[
 {id:'entry',name:'珊瑚入口',x:-14,z:17,color:'#adc9ae'},
 {id:'kelp',name:'海草林',x:-42,z:-31,color:'#8fc59d'},
 {id:'wreck',name:'沉船峡谷',x:18,z:-53,color:'#d5bf92'},
 {id:'cave',name:'发光洞窟',x:36,z:-102,color:'#92d5df'},
 {id:'customs',name:'边界海关',x:-7,z:-128,color:'#e5d3a3'}
];
const visited=new Set();
const marineMotion=[];
let marineLife;
function replaceMarineLife(){
 const origins=fish.map(f=>({x:f.x,y:f.y,z:f.z,phase:f.phase,turtle:!!f.turtle}));
 const jellyOrigins=marineMotion.map(m=>m.group.position.clone());
 // Legacy construction remains untouched to preserve deterministic terrain and
 // the frozen pod function, but no legacy animal is retained in the scene.
 for(const f of fish){scene.remove(f.sprite);f.sprite.material.dispose();}
 for(const m of marineMotion){scene.remove(m.group);m.group.traverse(o=>{if(o.isMesh){o.geometry.dispose();o.material.dispose();}});}
 fish.length=0;marineMotion.length=0;
 marineLife=createWildlife(scene,origins,jellyOrigins,{floor:floorHeight,rocks:rockBodies});
}
function regionAt(p){
 p=oceanLocal(p);
 if(Math.abs(p.x)>70||p.z>36||p.z<-146){
  const nearest=PEAKS.reduce((best,a)=>Math.hypot(wrap(p.x-a.x,220),wrap(p.z-a.z,260))<Math.hypot(wrap(p.x-best.x,220),wrap(p.z-best.z,260))?a:best,PEAKS[0]);
  return {id:"high-sea",name:nearest.name,x:nearest.x,z:nearest.z,color:"#9ebed0"};
 }
 if(p.x>23&&p.z<=-74)return REGIONS[3];
 if(p.z<-80)return REGIONS[4];
 if(p.x>6&&p.x<31&&p.z<8)return REGIONS[2];
 if(p.x<-22&&p.z<-8)return REGIONS[1];
 return REGIONS[0];
}
function insideCave(p){p=oceanLocal(p);return p.x>26&&p.x<46&&p.z<-81&&p.z>-120&&p.y<-7;}
let renderer, textures = {}, ready = false, started = false, paused = false, mapOpen = false, mapBusy = false;
let simTime = 0, last = 0, accumulator = 0, heading = 0, cameraHeading = 0, propellerAngle = 0;
heading=cameraHeading=SAMPLE.low.h;
const player = new V3(SAMPLE.low.x,SAMPLE.low.y,SAMPLE.low.z), velocity = new V3();
const cameraTarget = new V3(), cameraDesired = new V3();
let cameraMode='external', cockpit, inspectionView=false, inspectionAlien=false, deepSea,clearSea;
const cockpitOffset=new V3(0,.26,-.25);
const rockBodies = [], animatedKelp = [], objects = [], fish = [], events = [], frameSamples = [];
const counts = {pearl:0, shell:0};
const reaction={kind:'',start:-1,duration:0,side:1,serial:0};
let pod, shadow, gateBubbles, hover = 0, collisions = 0, boundaryCooldown = 0, toastTimer = 0, hintTimer = 0, mapTimer = 0;
let sound = true, audio, master, musicBus, sfxBus, musicSource, musicPromise, musicStarts = 0;
const uniformTime = {value:0};
let randomSeed = 19243;
function random(){ randomSeed = (Math.imul(randomSeed,1664525)+1013904223)>>>0; return randomSeed/4294967296; }
function floorHeight(x,z){return oceanFloor(x,z);}
function fail(error){ $('errorMessage').textContent='请用支持 WebGL 2 的 Chrome 或 Safari 打开完整 HTML 文件。'+(error?.message?'（'+error.message+'）':'');$('error').hidden=false;console.error(error); }
function material(color, extra={}){return new THREE.MeshStandardMaterial({color,roughness:.93,...extra});}
function mesh(geo,mat,x=0,y=0,z=0,scale=null){const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);if(scale)m.scale.set(...scale);scene.add(m);return m;}
function sprite(texture,w,h,x,y,z,extra={}){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:texture,transparent:true,alphaTest:.03,depthWrite:false,...extra}));s.scale.set(w,h,1);s.position.set(x,y,z);scene.add(s);return s;}
function glowTexture(){
 const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d');const r=g.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,'rgba(206,252,218,.6)');r.addColorStop(.22,'rgba(156,240,203,.32)');r.addColorStop(1,'rgba(117,220,203,0)');g.fillStyle=r;g.fillRect(0,0,128,128);return new THREE.CanvasTexture(c);
}
function makeGroundTexture(){
 const c=document.createElement('canvas');c.width=c.height=512;const ctx=c.getContext('2d');ctx.fillStyle='#6c9b98';ctx.fillRect(0,0,512,512);
 for(let i=0;i<14000;i++){const x=random()*512,y=random()*512,r=random()*1.7+.15;ctx.fillStyle=random()>.5?'rgba(32,73,78,.16)':'rgba(226,226,188,.18)';ctx.beginPath();ctx.ellipse(x,y,r,r*.6,0,0,Math.PI*2);ctx.fill();}
 for(let j=0;j<30;j++){ctx.beginPath();for(let x=0;x<=512;x+=4){const y=j*19+5*Math.sin(x*.025+j*.6);x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}ctx.strokeStyle='#bdd3ba26';ctx.lineWidth=3;ctx.stroke();}
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(22,31);t.anisotropy=4;return t;
}
function addGround(){
 const geo=new THREE.PlaneGeometry(220,260,220,260);geo.rotateX(-Math.PI/2);const p=geo.attributes.position;
 for(let i=0;i<p.count;i++){const x=p.getX(i),z=p.getZ(i)-49;p.setXYZ(i,x,floorHeight(x,z),z);}geo.computeVertexNormals();
 const colors=new Float32Array(p.count*3),tone=new THREE.Color();
 for(let i=0;i<p.count;i++){const y=p.getY(i),t=clamp((y-6)/45,0,1);tone.setRGB(1-t*.40,1-t*.49,1-t*.33);tone.toArray(colors,i*3);}
 geo.setAttribute('color',new THREE.BufferAttribute(colors,3));
 const mat=material('#90b6a8',{map:makeGroundTexture(),vertexColors:true});
 mat.onBeforeCompile=shader=>{
  shader.uniforms.uTime=uniformTime;
  shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 seaWorld;').replace('#include <begin_vertex>','#include <begin_vertex>\nseaWorld=(modelMatrix*vec4(transformed,1.)).xyz;');
  shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 seaWorld; uniform float uTime;').replace('#include <dithering_fragment>','float wave1=sin(seaWorld.x*1.51367646+sin(seaWorld.z*.894145602+uTime*.3)*1.8); float wave2=sin(seaWorld.z*1.691626814+sin(seaWorld.x*.79967813-uTime*.24)*1.9); float caustic=pow(max(0.,1.-abs(wave1+wave2)*.8),10.); gl_FragColor.rgb+=vec3(.03,.048,.035)*caustic*(1.-smoothstep(2.,20.,seaWorld.y))*(1.-smoothstep(fogNear,fogFar,vFogDepth))*exp(-max(0.,-seaWorld.y-6.)*.08); float caveShade=(1.-smoothstep(11.,18.,abs(mod(seaWorld.x+110.,220.)-146.)))*(1.-smoothstep(17.,28.,abs(mod(seaWorld.z+179.,260.)-77.))); gl_FragColor.rgb*=mix(vec3(1.),vec3(.16,.34,.42),caveShade*.87);\n#include <dithering_fragment>');
 };
 addTerrainChunks(scene,geo,mat);
 // No painted cylinder: every mountain silhouette is reachable terrain.
 const surf=mesh(new THREE.PlaneGeometry(220,260),new THREE.MeshBasicMaterial({color:'#86cfc0',transparent:true,opacity:.065,side:THREE.DoubleSide,depthWrite:false}),0,OCEAN_PERIOD.surface,-49);surf.rotation.x=-Math.PI/2;
}
function rock(x,z,rx,ry,rz,y=null,collide=true){
 const geom=new THREE.SphereGeometry(1,24,18);const p=geom.attributes.position;
 for(let i=0;i<p.count;i++){const px=p.getX(i),py=p.getY(i),pz=p.getZ(i);const n=1+.075*Math.sin(px*12+py*7)*Math.cos(pz*9-py*5)+.035*Math.sin(pz*19+px*9);p.setXYZ(i,px*n,py*n,pz*n);}geom.computeVertexNormals();
 const cy=y===null?floorHeight(x,z)+ry*.38:y;
 const t=textures.rock.clone();t.needsUpdate=true;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(2,2);t.offset.set(random(),random());
 mesh(geom,material('#bbd1c7',{map:t,emissive:'#1e5558',emissiveIntensity:.16}),x,cy,z,[rx,ry,rz]);
 if(collide)rockBodies.push({x,y:cy,z,rx:rx*1.08,ry:ry*1.08,rz:rz*1.08});
}
function addReefs(){
 // A solid, tall central formation, with genuine round-the-back circulation.
 rock(-7,1,7.8,8,6.5,-2.9);rock(-10,-3,4.9,6,4.4,-2.8);rock(-3,-1,4.1,4.2,4.9,-4.4);
 rock(-26,-26,9,12,7.5,-1.8);rock(-35,5,6.5,6,8,-4);rock(34,-18,8,10,13,-3.2);rock(34,14,7,6,8,-4.4);
 rock(-32,-47,11,15,8,0);rock(37,-51,9,12,9,-1.7);
 // Larger formations frame the new regions; passages stay broad enough to turn.
 rock(-60,-34,6.5,12,11,-1);rock(-56,-61,10,15,9,0);
 rock(-38,-84,9,15,12,-1);rock(-43,-118,12,18,10,1);
 rock(59,-65,8,12,12,-2);rock(61,-116,8,16,13,-1);
 for(let i=0;i<6;i++){const z=-40-i*8;rock(5,z,2.1,6,3.6,floorHeight(5,z)-.2);rock(30,z,2.1,6,3.5,floorHeight(30,z)-.2);}
 // Rocks flank the canyon rather than sealing it. The bottom remains flyable.
 for(let i=0;i<7;i++){const z=7-i*7;rock(7.6,z,1.2+random()*1.1,2.6,2.8,floorHeight(7.6,z)-.7);rock(24.8,z,1.6+random(),3.3,3.1,floorHeight(24.8,z)-.7);}
 for(let i=0;i<20;i++){const x=random()*92-46,z=random()*96-55;if(Math.abs(x-16)<8||Math.hypot(x+7,z-1)<11)continue;rock(x,z,.7+random()*1.8,.7+random()*1.6,.8+random()*2,null,false);}
}
function instance(geo,mat,transforms){
 const im=new THREE.InstancedMesh(geo,mat,transforms.length);const dummy=new THREE.Object3D();
 transforms.forEach((f,i)=>{dummy.position.copy(f.position);dummy.quaternion.copy(f.quaternion||new THREE.Quaternion());dummy.scale.copy(f.scale);dummy.updateMatrix();im.setMatrixAt(i,dummy.matrix);});im.instanceMatrix.needsUpdate=true;scene.add(im);return im;
}
function softenFoliageSightline(shader){
 shader.uniforms.uPodPosition={value:player};shader.uniforms.uEyePosition={value:camera.position};
 shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 foliageWorld;');
 shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>','foliageWorld=(modelMatrix*instanceMatrix*vec4(transformed,1.)).xyz;\n#include <project_vertex>');
 shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 foliageWorld; uniform vec3 uPodPosition; uniform vec3 uEyePosition;');
 shader.fragmentShader=shader.fragmentShader.replace('#include <clipping_planes_fragment>','#include <clipping_planes_fragment>\nvec3 sight=uPodPosition-uEyePosition; float along=dot(foliageWorld-uEyePosition,sight)/max(dot(sight,sight),.001); float eyeDistance=distance(foliageWorld,uEyePosition+clamp(along,0.,1.)*sight); float reveal=(along>.02&&along<1.04)?smoothstep(1.9,3.2,eyeDistance):1.; diffuseColor.a*=reveal; if(diffuseColor.a<.015)discard;');
}
function addPlants(){
 const kelpGeo=new THREE.PlaneGeometry(.62,1,2,8);kelpGeo.translate(0,.5,0);const p=kelpGeo.attributes.position;
 for(let i=0;i<p.count;i++){const h=p.getY(i);p.setX(i,p.getX(i)*(.3+Math.sin(h*Math.PI)*.8)+Math.sin(h*5)*.14);p.setZ(i,Math.sin(h*6)*.08);}kelpGeo.computeVertexNormals();
 const kelpTransforms=[];
 for(let i=0;i<500;i++){
  let x=random()*136-68,z=random()*169-134;
  // Leave an open foreground and a readable canyon descent.
  if((Math.abs(x+14)<7&&z>8)||(x>9&&x<23)||Math.sin(x*.23+z*.13)<-.3)continue;
  const pos=new V3(x,floorHeight(x,z)-.2,z),h=1.5+random()*6.5;
  for(let j=0;j<3;j++)kelpTransforms.push({position:pos.clone().add(new V3(j*.22,0,0)),scale:new V3(.6+random()*.6,h*(.6+random()*.4),1),quaternion:new THREE.Quaternion().setFromAxisAngle(new V3(0,1,0),random()*6.28)});
 }
 const mat=material('#558b68',{side:THREE.DoubleSide,transparent:true,depthWrite:false});
 mat.onBeforeCompile=s=>{s.uniforms.uTime=uniformTime;s.vertexShader=s.vertexShader.replace('#include <common>','#include <common>\nuniform float uTime;').replace('#include <begin_vertex>','#include <begin_vertex>\ntransformed.x+=sin(uTime*.65+instanceMatrix[3].x*.3+transformed.y*2.)*transformed.y*.13;');softenFoliageSightline(s);};
 instance(kelpGeo,mat,kelpTransforms);
 const coralColors=['#9e8eaa','#bb9a7c','#7ba9a8','#aa879a'];
 for(const color of coralColors){const list=[];
  for(let i=0;i<75;i++){
   let x=random()*134-67,z=random()*167-132;if((x>8&&x<27)||(x>24&&z<-79))continue;
   const root=new V3(x,floorHeight(x,z),z);
   for(let j=0;j<9;j++){
    const dir=new V3((random()-.5)*1.4,.7+random()*1.6,(random()-.5)*1.2),length=dir.length(),start=root.clone().add(new V3((random()-.5)*.7,random()*.3,(random()-.5)*.7));
    list.push({position:start.addScaledVector(dir,.5),scale:new V3(.09+random()*.1,length,.09+random()*.1),quaternion:new THREE.Quaternion().setFromUnitVectors(new V3(0,1,0),dir.normalize())});
   }
  }
  instance(new THREE.CylinderGeometry(.6,1,1,7),material(color,{emissive:color,emissiveIntensity:.025}),list);
 }
 // Coral on the central rock gives a clear altitude reference.
 for(let i=0;i<12;i++){const m=mesh(new THREE.CylinderGeometry(.07,.17,1.3+random(),7),material('#beabb5'),-9+random()*5,5+random()*.8,-1+random()*3);m.rotation.z=(random()-.5)*.5;}
}
function addExpandedOcean(){
 // A canopy of tall kelp surrounds two open, winding swim lanes. It is geometry,
 // not a flat forest image; the foreground fronds move with the surrounding water.
 const leaf=new THREE.PlaneGeometry(.95,1,3,12);leaf.translate(0,.5,0);
 const lp=leaf.attributes.position;
 for(let i=0;i<lp.count;i++){const h=lp.getY(i);lp.setX(i,lp.getX(i)*(.18+.8*Math.sin(h*Math.PI))+Math.sin(h*7)*.2);lp.setZ(i,Math.sin(h*5)*.13);}leaf.computeVertexNormals();
 const forest=[];
 for(let i=0;i<180;i++){
  const x=-55+random()*29,z=-55+random()*47;
  const lane=-41+Math.sin((z+31)*.11)*4;
  if(Math.abs(x-lane)<3.6||Math.hypot(x+34,z+28)<4)continue;
  const h=9+random()*13,root=new V3(x,floorHeight(x,z)-.12,z);
  for(let j=0;j<3;j++)forest.push({position:root.clone().add(new V3(j*.22,0,0)),scale:new V3(.75+random()*.4,h*(.75+random()*.25),1),quaternion:new THREE.Quaternion().setFromAxisAngle(new V3(0,1,0),j*1.05+random()*.7)});
 }
 const kelp=material('#598b62',{side:THREE.DoubleSide,transparent:true,depthWrite:false,emissive:'#123f32',emissiveIntensity:.14});
 kelp.onBeforeCompile=s=>{s.uniforms.uTime=uniformTime;s.vertexShader=s.vertexShader.replace('#include <common>','#include <common>\nuniform float uTime;').replace('#include <begin_vertex>','#include <begin_vertex>\ntransformed.x+=sin(uTime*.5+instanceMatrix[3].z*.17+transformed.y*3.)*transformed.y*.25;');softenFoliageSightline(s);};
 instance(leaf,kelp,forest);
 addWreck();addCave();
 // Schools and jellyfish occupy the new spaces rather than following the player.
 for(const [cx,cy,cz] of [[-42,4,-28],[18,-12,-54],[35,-9,-79],[-9,3,-115]]){
  for(let i=0;i<7;i++)fish.push({sprite:sprite(null,1.1,.33,0,0,0),x:cx+i*1.35,z:cz+i*.6,y:cy+i*.12,phase:i*.4});
 }
 fish.push({sprite:sprite(null,4.1,2.3,-46,6,-36),x:-46,z:-36,y:6,phase:2,turtle:true});
 for(let i=0;i<8;i++){
  const jelly=new THREE.Group();jelly.position.set(28+i*3,-7+(i%3)*1.8,-78-(i%4)*4);scene.add(jelly);
  const bell=new THREE.Mesh(new THREE.SphereGeometry(.65,18,10,0,Math.PI*2,0,Math.PI*.58),new THREE.MeshStandardMaterial({color:'#b2e8df',emissive:'#65bfae',emissiveIntensity:.35,transparent:true,opacity:.52,roughness:.42,depthWrite:false,side:THREE.DoubleSide}));jelly.add(bell);
  for(let j=0;j<5;j++){const a=j*Math.PI*2/5,points=[];for(let k=0;k<7;k++)points.push(new V3(Math.cos(a)*.34+Math.sin(k*.9+j)*.12,-k*.31,Math.sin(a)*.34));jelly.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),18,.018,5,false),new THREE.MeshBasicMaterial({color:'#a5ddd1',transparent:true,opacity:.43})));}
  marineMotion.push({group:jelly,y:jelly.position.y,phase:i*.7});
 }
}
function addWreck(){
 const timberCanvas=document.createElement('canvas');timberCanvas.width=128;timberCanvas.height=512;
 const ctx=timberCanvas.getContext('2d');ctx.fillStyle='#807050';ctx.fillRect(0,0,128,512);
 for(let i=0;i<500;i++){const x=random()*128;ctx.strokeStyle=i%2?'#423f3138':'#c7ad7b27';ctx.beginPath();ctx.moveTo(x,0);for(let y=0;y<512;y+=8)ctx.lineTo(x+Math.sin(y*.026+i)*2.6,y);ctx.stroke();}
 const tex=new THREE.CanvasTexture(timberCanvas);tex.colorSpace=THREE.SRGBColorSpace;tex.wrapS=tex.wrapT=THREE.RepeatWrapping;
 const wood=material('#b2a078',{map:tex,roughness:.92});
 const iron=material('#56756c',{metalness:.45,roughness:.7});
 const wreck=new THREE.Group();wreck.position.set(18,floorHeight(18,-54)+2.8,-54);scene.add(wreck);
 const wy=wreck.position.y;
 const beam=(a,b,r=.16,mat=wood,collide=false)=>{
  const delta=b.clone().sub(a),m=new THREE.Mesh(new THREE.CylinderGeometry(r,r,delta.length(),8),mat);m.position.copy(a).add(b).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new V3(0,1,0),delta.normalize());wreck.add(m);
  if(collide){const n=Math.ceil(a.distanceTo(b)/1.3);for(let i=0;i<=n;i++){const p=a.clone().lerp(b,i/n).add(wreck.position);rockBodies.push({x:p.x,y:p.y,z:p.z,rx:r+.15,ry:r+.15,rz:r+.15,structure:'wreck'});}}
  return m;
 };
 for(let i=0;i<13;i++){
  const z=-18+i*3;
  if(Math.abs(z)<3.1)continue; // the break exposes a wide, swimmable central hold
  const width=2.2+2.8*Math.sin((z+18)/36*Math.PI);
  for(const side of [-1,1]){
   const points=[new V3(0,-2,z),new V3(side*width*.55,-1.4,z),new V3(side*width,.2,z),new V3(side*width,3,z)];
   for(let j=0;j<3;j++)beam(points[j],points[j+1],.17);
   if(!(side<0&&z>-6&&z<9)){
    rockBodies.push({x:18+side*width,y:wy+.7,z:-54+z,rx:.55,ry:2.5,rz:1.4,structure:'wreck'});
    for(let k=0;k<3;k++){
     const plank=new THREE.Mesh(new THREE.BoxGeometry(.16,.44,2.6),wood);plank.position.set(side*width,.1+k*.7,z);wreck.add(plank);
    }
   }
  }
 }
 for(const z of [-11,11]){
  // Partial decks, with space to pass above them or enter through the broken side.
  for(let j=0;j<12;j++){const plank=new THREE.Mesh(new THREE.BoxGeometry(.68,.22,8.6),wood);plank.position.set(-4.1+j*.74,2,z);wreck.add(plank);}
  rockBodies.push({x:18,y:wy+2,z:-54+z,rx:4.9,ry:.48,rz:5.1,structure:'wreck'});
 }
 beam(new V3(0,2,-11),new V3(8,14,3),.28,wood,true);
 beam(new V3(6,11,-2),new V3(-3,11,-8),.18);
 const wheel=new THREE.Mesh(new THREE.TorusGeometry(.9,.1,8,20),iron);wheel.position.set(0,3.6,12);wreck.add(wheel);
 for(let i=0;i<6;i++){const a=i*Math.PI/3;beam(new V3(0,3.6,12),new V3(Math.sin(a)*1.1,3.6+Math.cos(a)*1.1,12),.065,iron);}
 // Empty, corroded chests are scenery. Collectible shells sit on the exposed deck.
 for(const [x,z] of [[-2,-13],[2,13]]){
  const chest=new THREE.Mesh(new THREE.BoxGeometry(1.4,.85,1.05),wood);chest.position.set(x,2.55,z);wreck.add(chest);
  for(const off of [-.45,.45]){const strap=new THREE.Mesh(new THREE.BoxGeometry(.09,.88,1.08),iron);strap.position.set(x+off,2.55,z);wreck.add(strap);}
 }
 // Sea growth follows the ribs and makes the silhouette belong to the ocean.
 const growth=[];for(let i=0;i<44;i++){const z=-18+random()*36,x=(random()>.5?1:-1)*(2.2+2.8*Math.sin((z+18)/36*Math.PI));growth.push({position:new V3(18+x,wy+2.6,-54+z),scale:new V3(.13,.7+random()*1.2,.13),quaternion:new THREE.Quaternion().setFromAxisAngle(new V3(0,0,1),(random()-.5)*.5)});}
 instance(new THREE.CylinderGeometry(.45,1,1,6),material('#858f8d'),growth);
}
function addCave(){
 const stone=material('#859fa8',{map:textures.rock,emissive:'#113d4b',emissiveIntensity:.12});
 // Three real rock arches, not a painted tunnel. Open gaps admit light and let the
 // chase camera move without becoming trapped under one continuous opaque roof.
 for(const z of [-87,-99,-111]){
  const geometry=new THREE.TorusGeometry(11,2.1,14,56,Math.PI),p=geometry.attributes.position,n=geometry.attributes.normal;
  for(let i=0;i<p.count;i++){const d=.19*Math.sin(p.getX(i)*1.3+p.getZ(i)*2.1)*Math.cos(p.getY(i)*1.6);p.setXYZ(i,p.getX(i)+n.getX(i)*d,p.getY(i)+n.getY(i)*d,p.getZ(i)+n.getZ(i)*d);}geometry.computeVertexNormals();
  mesh(geometry,stone,36,-17.5,z);
  for(let i=0;i<=14;i++){const a=i*Math.PI/14;rockBodies.push({x:36+Math.cos(a)*11,y:-17.5+Math.sin(a)*11,z,rx:2.25,ry:2.25,rz:2.25,structure:'cave'});}
 }
 for(const z of [-90,-102,-114]){rock(23,z,3.7,7,5.2,-13);rock(49,z,3.7,7,5.2,-13);}
 const mineral=[];
 for(let i=0;i<105;i++){
  const z=-80-random()*39,side=random()>.5?1:-1;
  const x=36+side*(5.7+random()*3.8),y=floorHeight(x,z);
  mineral.push({position:new V3(x,y+.25,z),scale:new V3(.16+random()*.18,.6+random()*1.7,.18+random()*.15),quaternion:new THREE.Quaternion().setFromAxisAngle(new V3(0,0,1),side*(.1+random()*.45))});
 }
 instance(new THREE.ConeGeometry(1,1,5),material('#397f91',{emissive:'#35919e',emissiveIntensity:.42,roughness:.4}),mineral);
 for(const z of [-88,-102,-115]){
  const light=new THREE.PointLight('#6dc9cc',12,23,2);light.position.set(36,-11,z);scene.add(light);
  sprite(textures.glow,11,6,36,-16,z,{opacity:.2,blending:THREE.AdditiveBlending});
 }
 const plankton=[];for(let i=0;i<100;i++)plankton.push(28+random()*16,-16+random()*8,-80-random()*39);
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(plankton,3));scene.add(new THREE.Points(g,new THREE.PointsMaterial({map:textures.glow,color:'#a4f0df',size:.16,transparent:true,opacity:.8,depthWrite:false})));
}
function addLight(){
 scene.add(new THREE.HemisphereLight('#a9eadf','#173645',2.3));
 const sun=new THREE.DirectionalLight('#ffedc5',2.5);sun.position.set(-24,60,18);scene.add(sun);
 const fill=new THREE.DirectionalLight('#61b9c9',1.1);fill.position.set(25,12,-40);scene.add(fill);
 const glow=glowTexture();textures.glow=glow;
 // Soft shafts do not carry collision or game semantics.
 for(let i=0;i<6;i++){
  const beamGeo=new THREE.PlaneGeometry(3+random()*4,50);const mat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,uniforms:{},vertexShader:'varying vec2 v; void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec2 v;void main(){float a=pow(max(0.,1.-abs(v.x-.5)*2.),2.)*sin(v.y*3.14159)*.047;gl_FragColor=vec4(.45,.75,.66,a);}'});
  const b=mesh(beamGeo,mat,-32+i*13,15,-33-i*4);b.rotation.z=-.19;b.rotation.y=.3;
 }
 const dustG=new THREE.BufferGeometry(),dustPos=new Float32Array(450*3);
 for(let i=0;i<450;i++){dustPos[i*3]=random()*115-57;dustPos[i*3+1]=random()*42-23;dustPos[i*3+2]=random()*125-85;}dustG.setAttribute('position',new THREE.BufferAttribute(dustPos,3));
 const dots=new THREE.Points(dustG,new THREE.PointsMaterial({map:glow,size:.2,color:'#b4e2c3',transparent:true,opacity:.5,depthWrite:false}));scene.add(dots);
}
const gatePosition=new V3(-7,2,-143);
function addGate(){
 const gate=new THREE.Group();scene.add(gate);gate.position.copy(gatePosition);
 const stone=material('#b5cab5',{map:textures.rock,emissive:'#1e5558',emissiveIntensity:.24});const brass=material('#a39463',{metalness:.38,roughness:.62});const glass=material('#6bafa9',{emissive:'#5cceb6',emissiveIntensity:.75,metalness:.25,roughness:.32});
 const add=(geo,mat,x,y,z)=>{const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);gate.add(m);return m;};
 add(new THREE.BoxGeometry(19,2.3,9),stone,0,-6,0);
 for(const x of [-6.4,6.4]){
  add(new THREE.CylinderGeometry(2.2,2.9,13.2,18),stone,x,.3,0);
  add(new THREE.CylinderGeometry(2.7,2.3,1.2,18),brass,x,7.2,0);
  add(new THREE.ConeGeometry(2.7,3.8,18),stone,x,9.7,0);
  const frame=add(new THREE.TorusGeometry(1.15,.23,10,36),brass,x,3.9,2.75);
  frame.rotation.y=x<0?.12:-.12;
  add(new THREE.CircleGeometry(.95,36),glass,x,3.9,2.77);
  for(const y of [-3,0])add(new THREE.TorusGeometry(2.5,.09,6,28),brass,x,y,0).rotation.x=Math.PI/2;
 }
 const arch=add(new THREE.TorusGeometry(5.8,.95,14,48,Math.PI),stone,0,1.9,0);
 // The semicircle joins two vertical jambs into one unmistakable round gateway.
 for(const x of [-5.8,5.8])add(new THREE.CylinderGeometry(.95,1.18,7.2,12),stone,x,-1.7,0);
 add(new THREE.TorusGeometry(5.8,.08,8,48,Math.PI),brass,0,1.9,.97);
 const points=[];for(let i=0;i<145;i++){points.push((random()-.5)*9.2,-5+random()*11.5,(random()-.5)*1.1);}
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(points,3));
 gateBubbles=new THREE.Points(g,new THREE.PointsMaterial({map:textures.glow,size:.32,color:'#beead0',transparent:true,opacity:.7,depthWrite:false}));gate.add(gateBubbles);
 gateCurtain=add(new THREE.PlaneGeometry(9,10.5),new THREE.MeshBasicMaterial({color:'#8eeed1',transparent:true,opacity:.055,side:THREE.DoubleSide,depthWrite:false}),0,0,.2);
 // Only the curtain unlocks; the real towers, arch and foundation stay solid.
 rockBodies.push({x:gatePosition.x,y:gatePosition.y,z:gatePosition.z,rx:8.7,ry:12.2,rz:5.7,gate:true});
 for(const x of [-6.4,6.4])rockBodies.push({x:gatePosition.x+x,y:gatePosition.y+.3,z:gatePosition.z,rx:2.9,ry:6.6,rz:2.9,structure:'customs-tower'});
 rockBodies.push({x:gatePosition.x,y:gatePosition.y-6,z:gatePosition.z,rx:9.5,ry:1.15,rz:4.5,structure:'customs-foundation'});
 for(let i=0;i<=12;i++){const a=i*Math.PI/12;rockBodies.push({x:gatePosition.x+Math.cos(a)*5.8,y:gatePosition.y+1.9+Math.sin(a)*5.8,z:gatePosition.z,rx:.95,ry:.95,rz:.95,structure:'customs-arch'});}
}
function collectible(kind,x,y,z){
 // Put every item beside, rather than inside, the new solid scenery. A shell can
 // be approached from above while the pod keeps its normal 1.5m floor clearance.
 const groundShell=kind==='shell'&&y<=floorHeight(x,z)+1.1;
 y=Math.max(y,floorHeight(x,z)+.9);
 const originRegion=regionAt({x,y,z}).id;
 const overlaps=(px,py,pz)=>rockBodies.some(b=>((px-b.x)/(b.rx+1.5))**2+((py-b.y)/(b.ry+1.5))**2+((pz-b.z)/(b.rz+1.5))**2<1);
 const offsets=[[0,0],[-2,0],[2,0],[0,2],[0,-2],[-3,2],[3,-2]];
 for(const r of [4,7,11,16,24])for(let i=0;i<16;i++)offsets.push([Math.cos(i*Math.PI/8)*r,Math.sin(i*Math.PI/8)*r]);
 let found=false;
 for(const [dx,dz] of offsets){
  const px=x+dx,pz=z+dz;
  if(px<SEA_BOUNDS.minX||px>SEA_BOUNDS.maxX||pz<SEA_BOUNDS.minZ||pz>SEA_BOUNDS.maxZ||regionAt({x:px,z:pz}).id!==originRegion)continue;
  const itemY=groundShell?floorHeight(px,pz)+.9:Math.max(y,floorHeight(px,pz)+.9);
  const py=Math.max(itemY,floorHeight(px,pz)+1.5);
  if(py<=11&&!overlaps(px,py,pz)){x=px;z=pz;y=itemY;found=true;break;}
 }
 // Never lift a pickup beyond the production ceiling to escape a large rock.
 if(!found)throw new Error('收藏物没有安全位置');
 const glow=sprite(textures.glow,kind==='shell'?3.4:2.1,kind==='shell'?3.4:2.1,x,y,z,{opacity:.72,blending:THREE.AdditiveBlending});
 let body;if(kind==='pearl')body=mesh(new THREE.SphereGeometry(.38,18,12),material('#e7efdb',{roughness:.2,metalness:.28,emissive:'#81c7b5',emissiveIntensity:.4}),x,y,z);else body=sprite(textures.shell,1.5,1.5,x,y,z);
 objects.push({kind,position:new V3(x,y,z),body,glow,taken:false,index:objects.length});
}
function addCollectibles(){
 const pearls=[
  [-15,-1,17],[-16,-1,9],[-18,-1,0],[-23,0,14],[-29,1,6],[-37,1,16],[3,2,24],[13,1,18],[22,0,9],[32,1,20],
  [-19,-1,-10],[-25,1,-17],[-34,3,-23],[-43,5,-30],[-45,0,-39],[-35,-1,-46],[-28,3,-41],[-32,5,-31],[-40,-1,-21],[-49,5,-18],
  [16,-5,5],[16,-10,-3],[16,-15,-12],[18,-15,-25],[18,-19,-36],[13,-20,-44],[18,-19,-52],[25,-14,-60],[18,-14,-70],[12,-12,-79],
  [29,-11,-79],[34,-12,-84],[36,-13,-90],[38,-13,-97],[35,-13,-104],[36,-13,-111],[36,-11,-117],[42,-9,-108],[30,-11,-102],[40,-6,-86],
  [-4,0,-76],[-12,1,-83],[-20,0,-93],[-23,2,-105],[-15,2,-116],[-7,2,-125],[2,4,-119],[8,5,-109],[6,0,-95],[-3,2,-107]
 ];
 const onFloor=(x,z)=>[x,floorHeight(x,z)+.9,z];
 const shells=[
  onFloor(-23,10),onFloor(-32,20),onFloor(8,26),onFloor(31,14),
  onFloor(-41,-12),onFloor(-49,-27),onFloor(-40,-44),onFloor(-30,-46),
  [16,-19.6,-12],onFloor(13,-35),[18,floorHeight(18,-54)+6.4,-48],onFloor(22,-71),
  onFloor(36,-89),onFloor(39,-99),onFloor(34,-108),onFloor(36,-116),
  onFloor(-14,-80),onFloor(-22,-97),onFloor(-13,-115),onFloor(1,-123)
 ];
 for(const p of pearls)collectible('pearl',...p);
 for(const p of shells)collectible('shell',...p);
 if(objects.filter(o=>o.kind==='pearl').length!==TOTALS.pearl||objects.filter(o=>o.kind==='shell').length!==TOTALS.shell)throw new Error('海域收藏数量不一致');
}
function addPod(){
 // Local -Z remains forward. Restore the opaque rear hull for external views.
 // The intact official pilot assets remain available to the cockpit, not exposed outside.
 pod=new THREE.Group();pod.position.copy(player);scene.add(pod);
 const hullTex=textures.hull.clone();hullTex.wrapS=hullTex.wrapT=THREE.RepeatWrapping;hullTex.repeat.set(3,2);hullTex.needsUpdate=true;
 const aged=material('#e5d8a9',{map:hullTex,metalness:.32,roughness:.67});
 const brass=material('#c4a866',{metalness:.52,roughness:.43});
 const dark=material('#274b56',{metalness:.32,roughness:.7});
 const add=(geometry,mat,x=0,y=0,z=0)=>{const m=new THREE.Mesh(geometry,mat);m.position.set(x,y,z);pod.add(m);return m;};
 const front=[new THREE.Vector2(1.17,-1.42),new THREE.Vector2(1.34,-1.2),new THREE.Vector2(1.6,-.8),new THREE.Vector2(1.77,-.25),new THREE.Vector2(1.78,.25)];
 const rear=[new THREE.Vector2(1.78,.25),new THREE.Vector2(1.61,.9),new THREE.Vector2(1.24,1.5),new THREE.Vector2(.73,1.94),new THREE.Vector2(.25,2.12),new THREE.Vector2(0,2.14)];
 const lathe=(profile,start=0,length=Math.PI*2)=>{const g=new THREE.LatheGeometry(profile,64,start,length);g.rotateX(Math.PI/2);return g;};
 add(lathe(front),aged);
 const rearHull=add(lathe(rear),aged);rearHull.name='opaqueRearHull';pod.userData.rearHull=rearHull;
 add(new THREE.TorusGeometry(1.79,.07,10,64),brass,0,0,.25);
 // A dark back panel, warm seat ledge and side structure give the pilot real depth.
 add(new THREE.CircleGeometry(1.48,48),material('#153c43',{roughness:.85}),0,0,.05);
 add(new THREE.BoxGeometry(2.38,.16,1.8),material('#806f4b',{roughness:.74,metalness:.2}),0,-.91,.66);
 for(const side of [-1,1]){
  add(new THREE.BoxGeometry(.1,.88,.16),dark,side*1.32,-.23,.36);
  add(new THREE.BoxGeometry(.39,.18,.48),brass,side*.91,-.71,.58);
  for(let i=0;i<3;i++)add(new THREE.SphereGeometry(.034,8,6),new THREE.MeshBasicMaterial({color:i===0?'#f6d398':'#93d8c2'}),side*(.79+i*.09),-.59,.75);
 }
 const cabinLight=new THREE.PointLight('#f9ddb0',2.4,4,2);cabinLight.position.set(0,.96,.55);pod.add(cabinLight);pod.userData.cabinLight=cabinLight;
 cabinLight.visible=false;
 const bubbles=[];
 for(let i=0;i<3;i++){
  const m=add(new THREE.SphereGeometry(.075+i*.016,14,10),new THREE.MeshPhysicalMaterial({color:'#d3f4e8',transparent:true,opacity:0,roughness:.12,metalness:0,depthWrite:false}),i===0?-.95:.64+i*.16,.45+i*.24,1.57);
  m.visible=false;bubbles.push({mesh:m,baseY:m.position.y});
 }
 pod.userData.reactionBubbles=bubbles;
 add(new THREE.TorusGeometry(1.21,.19,14,64),brass,0,0,-1.43);
 add(new THREE.TorusGeometry(1.01,.065,10,64),dark,0,0,-1.44);
 for(let i=0;i<12;i++){const a=i*Math.PI/6;add(new THREE.SphereGeometry(.066,8,6),dark,Math.cos(a)*1.22,Math.sin(a)*1.22,-1.62);}
 const cabin=add(new THREE.CircleGeometry(1.16,48),new THREE.MeshBasicMaterial({color:'#174356'}),0,0,-.86);cabin.rotation.y=Math.PI;
 const frontGlass=add(new THREE.CircleGeometry(1.04,64),new THREE.MeshPhysicalMaterial({color:'#a7e5df',transparent:true,opacity:.12,roughness:.13,metalness:.06,clearcoat:.5,depthWrite:false,side:THREE.DoubleSide}),0,0,-1.49);frontGlass.name='frontGlass';
 add(new THREE.CylinderGeometry(.31,.39,.36,20),aged,0,1.8,-.4);
 const lamp=add(new THREE.CylinderGeometry(.31,.31,.64,24),brass,0,2.02,-.69);lamp.rotation.x=Math.PI/2;
 add(new THREE.CircleGeometry(.26,32),new THREE.MeshBasicMaterial({color:'#b9ecd6',side:THREE.DoubleSide}),0,2.02,-1.02).rotation.y=Math.PI;
 const beam=add(new THREE.ConeGeometry(1.35,5.2,28,1,true),new THREE.MeshBasicMaterial({color:'#bed7ab',transparent:true,opacity:.035,side:THREE.DoubleSide,depthWrite:false,blending:THREE.AdditiveBlending}),0,1.94,-3.58);beam.rotation.x=Math.PI/2;
 // The propeller is below the observation window, never across Loopie's face.
 add(new THREE.BoxGeometry(.52,.36,.57),aged,0,-1.02,1.75);
 const shaft=add(new THREE.CylinderGeometry(.12,.12,.6,14),dark,0,-1.02,2.17);shaft.rotation.x=Math.PI/2;
 const propeller=new THREE.Group();propeller.position.set(0,-1.02,2.45);pod.add(propeller);pod.userData.propeller=propeller;
 propeller.add(new THREE.Mesh(new THREE.SphereGeometry(.2,16,10),brass));
 for(let i=0;i<3;i++){const a=i*2*Math.PI/3,m=new THREE.Mesh(new THREE.SphereGeometry(1,16,8),brass);m.scale.set(.14,.51,.05);m.position.set(-Math.sin(a)*.43,Math.cos(a)*.43,0);m.rotation.z=a+.25;propeller.add(m);}
 for(const side of [-1,1]){
  const finGeo=new THREE.BufferGeometry();finGeo.setAttribute('position',new THREE.Float32BufferAttribute([side*1.25,-.72,.62,side*2.32,-.72,1.68,side*1.08,-.72,1.7],3));finGeo.computeVertexNormals();add(finGeo,material('#798d76',{metalness:.35,roughness:.65,side:THREE.DoubleSide}));
 }
 const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d'),grad=g.createRadialGradient(64,64,0,64,64,64);grad.addColorStop(0,'rgba(0,16,25,.38)');grad.addColorStop(1,'rgba(0,16,25,0)');g.fillStyle=grad;g.fillRect(0,0,128,128);
 shadow=mesh(new THREE.PlaneGeometry(5,6),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}),player.x,floorHeight(player.x,player.z)+.08,player.z);shadow.rotation.x=-Math.PI/2;
 for(let i=0;i<5;i++){const s=sprite(null,1.3,.39,0,0,0);fish.push({sprite:s,x:-29+i*2,z:-19+i*.7,y:2+i*.22,phase:i*.3});}
 fish.push({sprite:sprite(null,4.1,2.3,-31,4,-14),x:-31,z:-14,y:4,phase:0,turtle:true});
}
function reactionState(){
 const age=simTime-reaction.start,active=!!reaction.kind&&age<reaction.duration;
 const phase=active?clamp(age/reaction.duration,0,1):1;
 return {active,phase,kind:reaction.kind,duration:reaction.duration,serial:reaction.serial,side:reaction.side,pose:active&&phase>.15&&phase<.76?'hi5':'idle'};
}
function respondToCollect(o){
 const s=reactionState();
 if(s.active){
  // Preserve the current phase when upgrading a nearby pearl response to a shell.
  // Repeated pickups never reset its clock or queue a pile of waving animations.
  if(o.kind==='shell'&&reaction.kind!=='shell'){reaction.kind='shell';reaction.duration=.7;reaction.start=simTime-s.phase*.7;}
  record('reaction-merge',{kind:o.kind,serial:reaction.serial});return;
 }
 const delta=o.position.clone().sub(player);
 reaction.kind=o.kind;reaction.start=simTime;reaction.duration=o.kind==='shell'?.7:.45;
 reaction.side=delta.x*Math.cos(heading)+delta.z*Math.sin(heading)<0?-1:1;reaction.serial++;
 record('reaction-start',{kind:o.kind,duration:reaction.duration,serial:reaction.serial});
}
function drawPilotReaction(){
 const s=reactionState(),pulse=s.active&&!REDUCED?Math.sin(Math.PI*s.phase):0;
 const shell=s.kind==='shell';
 pod.userData.cabinLight.intensity=2.4+pulse*(shell?1.3:.9);
 for(const [i,b] of pod.userData.reactionBubbles.entries()){
  b.mesh.visible=s.active&&shell&&!REDUCED&&s.phase>.14&&s.phase<.94;
  b.mesh.position.y=b.baseY+s.phase*.68;b.mesh.scale.setScalar(.7+pulse*.3);b.mesh.material.opacity=pulse*.26;
 }
}
function caveSightBlocked(eye){
 const delta=eye.clone().sub(player);
 return rockBodies.some(b=>{
  if(b.gate)return false;
  const s=new V3((player.x-b.x)/(b.rx+.55),(player.y-b.y)/(b.ry+.55),(player.z-b.z)/(b.rz+.55));
  const d=new V3(delta.x/(b.rx+.55),delta.y/(b.ry+.55),delta.z/(b.rz+.55));
  const a=d.dot(d),bb=2*s.dot(d),c=s.dot(s)-1,disc=bb*bb-4*a*c;
  if(a<.0001||disc<0)return false;
  const t=(-bb-Math.sqrt(disc))/(2*a);return t>.025&&t<1.02;
 });
}
function clearCameraSightline(eye){
 if(insideCave(player)){
  // Inside an arch, shorten the view under the stone instead of lifting it through
  // the ceiling. Yaw, controls and exponential chase smoothing stay unchanged.
  eye.y=Math.max(floorHeight(eye.x,eye.z)+2.4,Math.min(eye.y,-9.8));
  for(let i=0;i<14&&caveSightBlocked(eye);i++)eye.lerp(player,.22);
  for(let i=1;i<64;i++){const t=i/64,x=player.x+(eye.x-player.x)*t,z=player.z+(eye.z-player.z)*t;eye.y=Math.max(eye.y,player.y+(floorHeight(x,z)+.75-player.y)/t);}
  return;
 }
 // Checking only the camera endpoint misses a canyon wall between it and the pod.
 // Raise the eye enough to clear the complete sea-bed segment, then clear reefs.
 eye.y=Math.max(eye.y,floorHeight(eye.x,eye.z)+4);
 for(let i=1;i<64;i++){
  const t=i/64,x=player.x+(eye.x-player.x)*t,z=player.z+(eye.z-player.z)*t;
  eye.y=Math.max(eye.y,player.y+(floorHeight(x,z)+1.15-player.y)/t);
 }
 for(const b of rockBodies){if(b.gate&&gateUnlocked)continue;const dx=(eye.x-b.x)/(b.rx+1.4),dy=(eye.y-b.y)/(b.ry+1.4),dz=(eye.z-b.z)/(b.rz+1.4);if(dx*dx+dy*dy+dz*dz<1.2)eye.y=Math.max(eye.y,b.y+b.ry+3);}
 for(let pass=0;pass<10;pass++){
  const delta=eye.clone().sub(player);
  const obstructed=rockBodies.some(b=>{
   if(b.gate)return false;
   const s=new V3((player.x-b.x)/(b.rx+1),(player.y-b.y)/(b.ry+1),(player.z-b.z)/(b.rz+1));
   const d=new V3(delta.x/(b.rx+1),delta.y/(b.ry+1),delta.z/(b.rz+1));
   const a=d.dot(d),bb=2*s.dot(d),c=s.dot(s)-1,disc=bb*bb-4*a*c;
   if(disc<0||a<.0001)return false;
   const t=(-bb-Math.sqrt(disc))/(2*a);
   return t>.025&&t<.94;
  });
  if(!obstructed)break;
  eye.y+=3.4;
 }
}
function switchView(){
 if(!ready||activeLevel!==1||paused||mapOpen||mapBusy)return;
 cameraMode=cameraMode==='cockpit'?'external':'cockpit';inspectionView=false;
 const inside=cameraMode==='cockpit';camera.fov=inside?68:57;camera.near=inside?.06:.2;camera.updateProjectionMatrix();
 $('shell').classList.toggle('cockpit-mode',inside);
 $('viewBtn').textContent=inside?'视角：舱内':'视角：外部';
 $('viewBtn').setAttribute('aria-pressed',String(inside));
 $('viewStatus').textContent=inside?'已切换到驾驶舱视角':'已切换到外部追踪视角';
 // Snap the new eye rather than flying it through the metal shell or a reef.
 updateCamera(0,true);draw();record('view-switch',{mode:cameraMode});
 $('sea').focus({preventScroll:true});
}
function updateCamera(dt,snap=false){
 if(cameraMode==='cockpit'){
  cameraHeading=heading;
  camera.position.copy(player).add(cockpitOffset.clone().applyAxisAngle(new V3(0,1,0),-heading));
  cameraTarget.copy(camera.position).add(new V3(Math.sin(heading),0,-Math.cos(heading)));
  camera.lookAt(cameraTarget);camera.updateMatrixWorld();return;
 }
 let diff=Math.atan2(Math.sin(heading-cameraHeading),Math.cos(heading-cameraHeading));
 cameraHeading+=diff*(snap?1:1-Math.exp(-dt*3.6));
 // Rear-centered chase view. Steering rotates the hull first, then the camera
 // follows the same yaw; there is no face-preserving side-camera constraint.
 const enclosed=insideCave(player);
 let distance=enclosed?9:21;
 for(let pass=0;pass<7;pass++){
  const offset=new V3(0,enclosed?3.2:9.5,distance).applyAxisAngle(new V3(0,1,0),-cameraHeading);
  cameraDesired.copy(player).add(offset);clearCameraSightline(cameraDesired);
  if(cameraDesired.y-player.y<=18||distance<=6)break;
  // A canyon wall should bring the chase view closer, not send it far overhead.
  distance=Math.max(6,distance*.8);
 }
 const lookAhead=new V3(Math.sin(cameraHeading)*5.5,1.2,-Math.cos(cameraHeading)*5.5);
 const desiredTarget=player.clone().add(lookAhead);
 if(snap){camera.position.copy(cameraDesired);cameraTarget.copy(desiredTarget);}else{camera.position.lerp(cameraDesired,1-Math.exp(-dt*6));cameraTarget.lerp(desiredTarget,1-Math.exp(-dt*6));}
 // The smoothed eye can still cross a wall while turning or descending. Resolve
 // that actual view immediately; ordinary follow motion and recovery remain smooth.
 clearCameraSightline(camera.position);
 camera.lookAt(cameraTarget);camera.updateMatrixWorld();
}
function active(code){return keys.has(code)||[...touchKeys.values()].includes(code);}
function pressKey(code){if(!keys.has(code)){keys.add(code);keyOrder.set(code,++inputSerial);}}
function releaseKey(code){keys.delete(code);keyOrder.delete(code);}
function pressTouch(id,code){touchKeys.set(id,code);touchOrder.set(id,++inputSerial);}
function releaseTouch(id){touchKeys.delete(id);touchOrder.delete(id);}
function turnInput(){
 let left=0,right=0;
 const consider=(code,order)=>{if(code==='KeyA'||code==='ArrowLeft')left=Math.max(left,order);if(code==='KeyD'||code==='ArrowRight')right=Math.max(right,order);};
 for(const code of keys)consider(code,keyOrder.get(code)||0);
 for(const [id,code] of touchKeys)consider(code,touchOrder.get(id)||0);
 return left||right?(right>left?1:-1):0;
}
function updateGate(gateBefore,playerBefore){
 if(!gateUnlocked&&counts.pearl>=TARGETS.pearl&&counts.shell>=TARGETS.shell){
  gateUnlocked=true;gateCurtain.material.opacity=.015;gateBubbles.material.opacity=.15;
  $('gateLabel').querySelector('span').textContent='气泡帘开放 · 从双塔中间通行';
  record('gate-unlocked',{targets:{...TARGETS}});showToast('收藏已达标，前往边界海关，从双塔中间穿过');
 }
 // Keep the same logical gate instance across this step, including origin shifts.
 // Re-selecting the nearest copy after moving could mistake a periodic seam for passage.
 const before=gateBefore.clone().sub(playerBefore);
 const relative=gateBefore.clone().sub(player.clone().add(logicalOffset()));
 const crosses=before.z<0&&relative.z>=0;
 const at=crosses?before.clone().lerp(relative,-before.z/(relative.z-before.z)):relative;
 if(!gatePassed&&gateUnlocked&&crosses&&Math.abs(at.x)<3.7&&at.y<3&&at.y>-5.5){
  gatePassed=true;record('level-complete',{level:2,targets:{...TARGETS}});
  $('gateLabel').querySelector('span').textContent='通行成功';showToast('边界海关通行成功。可以继续探索，或返回群岛地图');
 }
}
function record(type,data={}){events.push({type,time:simTime,...data});if(events.length>400)events.shift();}
function showToast(text){$('toast').textContent=text;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),3400);}
function showHint(){clearTimeout(hintTimer);$('shell').classList.remove('hide-hint');hintTimer=setTimeout(()=>$('shell').classList.add('hide-hint'),5000);}
function clearInput(){keys.clear();touchKeys.clear();keyOrder.clear();touchOrder.clear();}
function minimumTerrainY(x,z,y=0){
 const p=oceanLocal({x,z}),base=floorHeight(x,z)+1.5;
 if(y>80||(Math.abs(p.x)<66&&p.z<32&&p.z>-142))return base;
 // Full rotated hull bounding footprint on steep NEW terrain. The established
 // low-relief core keeps its original 1.5 m clearance and cavern controls.
 const sin=Math.sin(heading),cos=Math.cos(heading);let bottom=base;
 for(let i=0;i<=10;i++)for(let j=0;j<=10;j++){
  const a=-2.5+i*.5,b=-2.7+j*.54;
  bottom=Math.max(bottom,floorHeight(x+a*cos-b*sin,z+a*sin+b*cos)+2.7);
 }
 return bottom;
}
function horizontalCollision(candidate){
 for(const b of rockBodies){
  if(b.gate&&gateUnlocked)continue;
  const dx=(candidate.x-b.x)/(b.rx+1.35),dy=(candidate.y-b.y)/(b.ry+1.35),dz=(candidate.z-b.z)/(b.rz+1.35);
  if(dx*dx+dy*dy+dz*dz<1){collisions++;return b;}
 }
 return null;
}
function simulate(dt,updateView=true){
 simTime+=dt;boundaryCooldown=Math.max(0,boundaryCooldown-dt);
 const playerBefore=player.clone().add(logicalOffset());
 const gateBefore=nearestImage(gatePosition,player).add(logicalOffset());
 const forward=Number(active('KeyW')||active('ArrowUp'))-Number(active('KeyS')||active('ArrowDown'));
 const turn=turnInput();
 const vertical=Number(active('Space'))-Number(active('ShiftLeft')||active('ShiftRight'));
 heading+=turn*dt*1.12;
 const desired=new V3(Math.sin(heading)*forward*6.4,vertical*4.6,-Math.cos(heading)*forward*6.4);
 if(forward<0){desired.x*=.65;desired.z*=.65;}
 velocity.lerp(desired,1-Math.exp(-dt*(forward||vertical?2.6:2.2)));
 propellerAngle+=velocity.length()*dt*4;
 const next=player.clone().addScaledVector(velocity,dt);
 next.y=clamp(next.y,minimumTerrainY(next.x,next.z,next.y),OCEAN_PERIOD.surface-2);
 let hit=horizontalCollision(next);
 if(hit){
  // Each axis starts from the last accepted position. Independent old-position
  // candidates could be individually clear but overlap after their axes merged.
  for(const axis of ['x','z','y']){
   const slide=player.clone();slide[axis]=next[axis];
   // Validate terrain clearance together with the slide, not after accepting it.
   slide.y=clamp(slide.y,minimumTerrainY(slide.x,slide.z,slide.y),OCEAN_PERIOD.surface-2);
   if(!horizontalCollision(slide))player.copy(slide);else velocity[axis]=0;
  }
  if(hit.gate&&boundaryCooldown<=0){showToast(`海关需 ${TARGETS.pearl} 颗珍珠与 ${TARGETS.shell} 枚贝壳，目前还未达标`);boundaryCooldown=6;}
 }else player.copy(next);
 // Terrain clearance is already part of every accepted candidate. Do not lift
 // the player afterward without collision testing: that could enter a reef.
 floatOrigin();
 for(const o of objects)nearestImage(o.basePosition||o.position,player,o.position);
 const area=regionAt(player);if(!visited.has(area.id)){visited.add(area.id);record('discover',{region:area.id,name:area.name});}
 for(const o of objects){if(!o.taken&&player.distanceTo(o.position)<1.9){o.taken=true;o.body.visible=false;o.glow.visible=false;counts[o.kind]++;record('collect',{kind:o.kind,index:o.index});respondToCollect(o);tone(o.kind);$('pearlCount').textContent=Math.min(counts.pearl,TARGETS.pearl);$('shellCount').textContent=Math.min(counts.shell,TARGETS.shell);}}
 updateGate(gateBefore,playerBefore);
 if(counts.pearl===TOTALS.pearl&&counts.shell===TOTALS.shell&&!events.some(e=>e.type==='sample-all')){record('sample-all');showToast('五处海域的收藏找齐了，还可以继续自由航行');}
 if(updateView)updateCamera(dt);
}
function draw(){
 renderer.info.reset();
 uniformTime.value=REDUCED?0:simTime;
 pod.position.copy(player);pod.position.y+=REDUCED?0:Math.sin(simTime*1.7)*.1;
 // A/D rotates the real vehicle around world Y. The window and official pilot
 // rotate with the hull and are naturally hidden by its side/rear, never billboards.
 pod.rotation.set(0,-heading,0);pod.userData.propeller.rotation.z=propellerAngle;
 drawPilotReaction();
 shadow.position.set(player.x,floorHeight(player.x,player.z)+.08,player.z);
 shadow.material.opacity=clamp(1-(player.y-floorHeight(player.x,player.z))/20,.12,.8);
 for(const o of objects){if(!o.taken){const bob=REDUCED?0:Math.sin(simTime*1.8+o.index)*.11;o.body.position.y=o.position.y+bob;o.glow.position.y=o.position.y+bob;}}
 marineLife?.update(REDUCED?0:simTime);highSea?.update(REDUCED?0:simTime);
 const bp=gateBubbles.geometry.attributes.position;for(let i=0;i<bp.count;i++){const base=(i*.83)%11.5;bp.setY(i,-5+(base+simTime*.7)%11.5);}bp.needsUpdate=true;
 deepSea?.update({player,heading,time:REDUCED?0:simTime,inspection:inspectionAlien,camera});
 clearSea?.update({player,camera,time:REDUCED?0:simTime});
 oceanPool?.update(camera,scene.fog.far);deepSea?.updateShadows();
 const nearbyGate=nearestImage(gatePosition,player);
 const marker=nearbyGate.clone().add(new V3(0,13,0)).project(camera);
 $('gateLabel').hidden=marker.z>1||marker.z<-1||Math.abs(marker.x)>1||Math.abs(marker.y)>.94||((1-marker.y)*innerHeight/2)<145;
 if(scene.fog.near<41.9&&camera.position.distanceTo(nearbyGate)>scene.fog.far)$('gateLabel').hidden=true;
 $('gateLabel').style.left=((marker.x+1)*innerWidth/2)+'px';$('gateLabel').style.top=((1-marker.y)*innerHeight/2)+'px';
 for(const m of marineMotion)m.group.position.y=m.y+(REDUCED?0:Math.sin(simTime*.55+m.phase)*.55);
 const depth=Math.round(OCEAN_PERIOD.surface-player.y);$('depth').textContent=depth;$('depthBar').style.width=clamp(depth/160*100,0,100)+'%';
 $('location').textContent=regionAt(player).name;
 // The external hull is intact but excluded from the interior pass. This avoids
 // the legacy opaque front panel and seeing the pilot from inside their own body.
 pod.visible=!inspectionAlien&&(cameraMode==='external'||inspectionView);shadow.visible=pod.visible;
 if(cockpit&&!inspectionView&&cameraMode==='cockpit')cockpit.update({time:simTime,y:player.y,heading,velocity,surface:OCEAN_PERIOD.surface});
 radar();renderMain();
 if(cockpit&&!inspectionView&&cameraMode==='cockpit')cockpit.render();
}
const radarCtx=$('radar').getContext('2d');
function radar(){
 const c=radarCtx;c.clearRect(0,0,264,264);c.save();c.translate(132,132);
 c.strokeStyle='#95cfc221';for(const r of [43,85,120]){c.beginPath();c.arc(0,0,r,0,Math.PI*2);c.stroke();}
 const project=(x,z)=>[wrap(x-player.x,220)*.86,wrap(z-player.z,260)*.86];
 c.fillStyle='#779b8244';for(const b of rockBodies){if(b.structure||b.gate||b.rx<4||Math.hypot(b.x-player.x,b.z-player.z)>125)continue;const p=project(b.x,b.z);c.beginPath();c.ellipse(p[0],p[1],b.rx*.86,b.rz*.86,0,0,Math.PI*2);c.fill();}
 c.font='10px "PingFang SC",sans-serif';c.textAlign='center';
 for(const r of [...REGIONS,...PEAKS]){const p=project(r.x,r.z);if(Math.hypot(...p)>115)continue;c.fillStyle=r.color||'#9ebed0';c.fillText(r.name,p[0],p[1]-8);}
 for(const o of objects){if(o.taken)continue;const p=project(o.basePosition.x,o.basePosition.z);if(Math.hypot(...p)>115)continue;c.fillStyle=o.kind==='shell'?'#e4c89e':'#a9e6d3';c.beginPath();c.arc(p[0],p[1],o.kind==='shell'?3.5:2,0,Math.PI*2);c.fill();}
 const g=project(gatePosition.x,gatePosition.z);c.fillStyle='#ead5a2';c.fillRect(g[0]-4,g[1]-4,8,8);
 c.rotate(heading);c.fillStyle='#d8f5e3';c.beginPath();c.moveTo(0,-8);c.lineTo(5,5);c.lineTo(0,2);c.lineTo(-5,5);c.closePath();c.fill();c.restore();
}
function fit(){if(!renderer)return;camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight,false);draw();}
function frame(t){
 const elapsed=last?Math.min((t-last)/1000,.1):0;const raw=last?t-last:0;last=t;
 if(activeLevel===1&&started&&!paused&&!mapOpen&&!mapBusy&&!document.hidden){accumulator=Math.min(accumulator+elapsed,MAX_FRAME_STEPS/60);let steps=0;while(accumulator>=1/60&&steps++<MAX_FRAME_STEPS){simulate(1/60,false);accumulator-=1/60;}if(steps)updateCamera(Math.min(elapsed,steps/60));if(accumulator>=1/60)accumulator%=1/60;if(raw>0&&(velocity.length()>.3||turnInput())){frameSamples.push(raw);if(frameSamples.length>1500)frameSamples.shift();}}
 else accumulator=0;
 if(activeLevel===1&&!$('shell').classList.contains('map-settled'))draw();requestAnimationFrame(frame);
}
async function initAudio(){
 if(!sound||activeLevel!==1)return;
 try{
  ensureAudioGraph();
  await audio.resume();
  if(!musicPromise){musicPromise=(async()=>{const buffer=musicBuffer||await prepareMusic();if(!buffer)throw new Error('Music unavailable');musicSource=audio.createBufferSource();musicSource.buffer=buffer;musicSource.loop=true;musicSource.connect(musicBus);musicSource.start();musicStarts++;})();}
  await musicPromise;updateMix();
 }catch(e){sound=false;if(master)master.gain.value=0;$('soundBtn').textContent='声音：关';$('soundBtn').setAttribute('aria-pressed','false');musicPromise=null;showToast('声音暂未能启动，可以点击声音开关重试');console.warn('Audio unavailable',e);}
}
function updateMix(){if(!audio)return;master.gain.setTargetAtTime(sound&&activeLevel===1 ? .65 : 0,audio.currentTime,.04);musicBus.gain.setTargetAtTime((paused||mapOpen) ? .22 : .48,audio.currentTime,.2);}
function tone(kind){
 if(!sound||!audio||audio.state!=='running')return;
 const notes=kind==='shell'?[1396.9,2093,2793.8]:[1046.5,1568];
 notes.forEach((f,i)=>{const o=audio.createOscillator(),g=audio.createGain(),t=audio.currentTime+i*.045;o.frequency.value=f;o.type='sine';g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.095-i*.018,t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+.32);o.connect(g);g.connect(sfxBus);o.start(t);o.stop(t+.35);o.onended=()=>{o.disconnect();g.disconnect();};});
 record('sound',{kind});
}
function start(){if(!ready||started||activeLevel!==1)return;started=true;$('welcome').hidden=true;clearInput();showHint();$('sea').focus({preventScroll:true});last=performance.now();accumulator=0;initAudio();record('start');}
function postMap(message){$('mapLayer').contentWindow?.postMessage({source:'loopie-audit',...message},'*');}
function mapState(){return {type:'show',selected:activeLevel,labels:{0:firstStarted?'继续游戏':'开始游戏',1:started?'继续探索':'开始探索',2:thirdStarted?'继续游戏':'开始游戏'}};}
// The release build rewrites this local preview filename to index.html after bundling.
function ensureMap(){if(!$('mapLayer').getAttribute('src'))$('mapLayer').src='loopie-world-map-audit-v16-preview.html?embed=1';}
function postFirst(message){$('firstLayer').contentWindow?.postMessage({source:'loopie-host',...message},'*');}
function resumeFirst(){
 if(!firstReady||activeLevel!==0||mapOpen||mapBusy)return;
 const play=firstQueuedPlay;firstQueuedPlay=false;postFirst({type:'resume',play});if(play)firstStarted=true;
 $('firstLayer').focus({preventScroll:true});
}
function ensureFirst(play=false){
 firstQueuedPlay=firstQueuedPlay||play;
 // The release build rewrites this local preview filename to lighthouse.html after bundling.
 if(!$('firstLayer').getAttribute('src'))$('firstLayer').src='lighthouse-platformer-audit-v16-preview.html?host=1';
 resumeFirst();
}
function postThird(message){$('thirdLayer').contentWindow?.postMessage({source:'loopie-host',...message},'*');}
function resumeThird(){
 if(!thirdReady||activeLevel!==2||mapOpen||mapBusy)return;
 const play=thirdQueuedPlay;thirdQueuedPlay=false;postThird({type:'resume',play});if(play)thirdStarted=true;
 $('thirdLayer').focus({preventScroll:true});
}
function ensureThird(play=false){
 thirdQueuedPlay=thirdQueuedPlay||play;
 if(!$('thirdLayer').getAttribute('src'))$('thirdLayer').src='echo-theater.html?host=1';
 resumeThird();
}
function activateLevel(level){
 activeLevel=level;$('shell').classList.toggle('first-active',level===0);
 $('firstLayer').hidden=level!==0;$('firstLayer').inert=level!==0||mapOpen||mapBusy;
 $('firstLayer').tabIndex=level===0?0:-1;$('firstLayer').setAttribute('aria-hidden',String(level!==0));
 $('shell').classList.toggle('third-active',level===2);
 $('thirdLayer').hidden=level!==2;$('thirdLayer').inert=level!==2||mapOpen||mapBusy;
 $('thirdLayer').tabIndex=level===2?0:-1;$('thirdLayer').setAttribute('aria-hidden',String(level!==2));
 $('world').inert=level!==1||mapOpen||mapBusy;
 if(level!==0)postFirst({type:'pause'});if(level!==2)postThird({type:'pause'});updateMix();
}
function openMap(){
 if((activeLevel===1&&!ready)||mapOpen||mapBusy)return;
 ensureMap();clearInput();if(activeLevel===0)postFirst({type:'pause'});if(activeLevel===2)postThird({type:'pause'});
 mapOpen=mapBusy=true;$('world').inert=true;$('firstLayer').inert=true;$('thirdLayer').inert=true;$('mapLayer').inert=false;$('mapLayer').tabIndex=0;$('mapLayer').setAttribute('aria-hidden','false');postMap(mapState());
 $('shell').classList.add('map-open');updateMix();record('map-open',{level:activeLevel+1});clearTimeout(mapTimer);
 mapTimer=setTimeout(()=>{mapBusy=false;$('shell').classList.add('map-settled');$('mapLayer').focus();postMap({type:'focus'});},REDUCED?180:1250);
}
function closeMap(via,level=activeLevel){
 if(!mapOpen||mapBusy||!Number.isInteger(level)||level<0||level>2)return;
 mapBusy=true;activateLevel(level);if(level===0)ensureFirst(via==='play');else if(level===2)ensureThird(via==='play');else ensureSecond().then(()=>{if(via==='play'&&!started&&!mapOpen&&!mapBusy)start();}).catch(()=>{});
 $('shell').classList.remove('map-open','map-settled');$('mapLayer').inert=true;$('mapLayer').tabIndex=-1;$('mapLayer').setAttribute('aria-hidden','true');$('shell').focus({preventScroll:true});clearTimeout(mapTimer);
 mapTimer=setTimeout(()=>{
  mapOpen=mapBusy=false;activateLevel(level);clearInput();last=performance.now();accumulator=0;
  if(level===0)resumeFirst();else if(level===2)resumeThird();else if(!started&&via==='play')start();else if(started)$('sea').focus({preventScroll:true});else $('start').focus({preventScroll:true});
  updateMix();record('map-close',{level:level+1});
 },REDUCED?180:1250);
}
addEventListener('message',e=>{
 const d=e.data;
 if(e.source===$('firstLayer').contentWindow&&d?.source==='loopie-first'){
  if(d.type==='ready'){firstReady=true;firstStarted=!!d.started;resumeFirst();}
  else if(d.type==='back'&&activeLevel===0){firstStarted=!!d.started;openMap();}
  return;
 }
 if(e.source===$('thirdLayer').contentWindow&&d?.source==='loopie-third'){
  if(d.type==='ready'){thirdReady=true;thirdStarted=!!d.started;resumeThird();}
  else if(d.type==='back'&&activeLevel===2){thirdStarted=!!d.started;openMap();}
  return;
 }
 if(e.source!==$('mapLayer').contentWindow||d?.source!=='loopie-map')return;
 if(d.island){$('shell').style.setProperty('--island-x',clamp(d.island.x,0,1)*100+'%');$('shell').style.setProperty('--island-y',clamp(d.island.y,0,1)*100+'%');}
 if(d.type==='ready'&&mapOpen)postMap(mapState());else if(d.type==='play')closeMap('play',d.level);else if(d.type==='back')closeMap(d.via);
});
function visitSample(name){if(!ready||paused||mapOpen||mapBusy)return;const p=SAMPLE[name];if(!p)return;clearInput();placeWorld(p.x,p.y,p.z);velocity.set(0,0,0);heading=cameraHeading=p.h;inspectionAlien=inspectionView=false;updateCamera(0,true);draw();if(!started)start();document.querySelectorAll('[data-sample]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.sample===name)));record('sample-view',{name});$('sea').focus({preventScroll:true});}
 document.querySelectorAll('[data-sample]').forEach(b=>b.addEventListener('click',()=>visitSample(b.dataset.sample)));
 $('start').addEventListener('click',start);$('mapBtn').addEventListener('click',openMap);
$('viewBtn').addEventListener('click',switchView);
$('soundBtn').addEventListener('click',()=>{sound=!sound;$('soundBtn').textContent=sound?'声音：开':'声音：关';$('soundBtn').setAttribute('aria-pressed',String(sound));if(sound&&started)initAudio();else updateMix();});
addEventListener('keydown',e=>{
 if(e.code==='KeyC'&&activeLevel===1&&started&&!paused&&!mapOpen&&!mapBusy){e.preventDefault();if(!e.repeat)switchView();return;}
 if(e.code==='Escape'){if(e.repeat)return;if(mapOpen)closeMap('esc');else openMap();e.preventDefault();return;}
 if(['KeyW','KeyS','KeyA','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space','ShiftLeft','ShiftRight'].includes(e.code)&&activeLevel===1&&started&&!paused&&!mapOpen&&!mapBusy&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.isComposing){e.preventDefault();if(!e.repeat)pressKey(e.code);}
});
addEventListener('keyup',e=>releaseKey(e.code));addEventListener('blur',clearInput);
document.querySelectorAll('[data-key]').forEach(b=>{b.addEventListener('pointerdown',e=>{if(activeLevel!==1||!started||paused||mapOpen||mapBusy||e.button>0)return;e.preventDefault();b.setPointerCapture(e.pointerId);pressTouch(e.pointerId,b.dataset.key);});for(const type of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(type,e=>releaseTouch(e.pointerId));});
addEventListener('visibilitychange',()=>{clearInput();last=performance.now();accumulator=0;if(document.hidden&&audio?.state==='running')audio.suspend();else if(!document.hidden&&sound&&started&&activeLevel===1)audio?.resume().catch(()=>{});});
addEventListener('resize',()=>{if(ready)fit();});
addEventListener('pointermove',e=>{if(started&&e.clientY>innerHeight-115){$('shell').classList.remove('hide-hint');clearTimeout(hintTimer);hintTimer=setTimeout(()=>$('shell').classList.add('hide-hint'),1800);}});
function snapshot(){return {ready,started,paused,mapOpen,mapBusy,navigation:{level:activeLevel+1,firstReady,firstStarted,thirdReady,thirdStarted},input:{keys:[...keys],touch:[...touchKeys.values()],turn:turnInput()},targets:{...TARGETS},gate:{unlocked:gateUnlocked,passed:gatePassed,position:gatePosition.toArray()},time:simTime,player:{x:player.x+voyage.x*220,y:player.y,z:player.z+voyage.z*260},localPlayer:player.toArray(),voyage:{...voyage},ocean:{period:{...OCEAN_PERIOD},pool:oceanPool?.snapshot(),highLife:highSea?.snapshot(),peaks:PEAKS.map(p=>({...p,top:floorHeight(p.x,p.z)}))},velocity:{x:velocity.x,y:velocity.y,z:velocity.z},heading,region:regionAt(player).id,visited:[...visited],totals:{...TOTALS},bounds:{horizontal:"unbounded",surface:OCEAN_PERIOD.surface,maximumY:OCEAN_PERIOD.surface-2},reaction:{...reactionState(),pilotImage:false,visibleBubbles:pod?.userData.reactionBubbles.filter(b=>b.mesh.visible).length,glassOpacity:null},pod:{yaw:pod?.rotation.y,forward:pod?new V3(0,0,-1).applyQuaternion(pod.quaternion).toArray():null},camera:{x:camera.position.x+voyage.x*220,y:camera.position.y,z:camera.position.z+voyage.z*260,heading:cameraHeading,mode:cameraMode,fov:camera.fov,near:camera.near,direction:camera.getWorldDirection(new V3()).toArray(),eyeOffset:camera.position.clone().sub(player).toArray()},cockpit:cockpit?.snapshot(),exteriorAppearance:{opaqueRearHull:!!pod?.userData.rearHull&&!pod.userData.rearHull.material.transparent&&pod.userData.rearHull.material.opacity===1,pilotVisible:false,rearGlass:false},exteriorVisible:pod?.visible,counts:{...counts},taken:objects.filter(o=>o.taken).map(o=>o.index),collisions,floor:floorHeight(player.x,player.z),depth:Number($('depth').textContent),audio:{sound,status:audio?.state||'not-created',musicStarts,music:!!musicSource},render:{profile:COARSE_POINTER?'mobile':'desktop',maxPixelRatio:MAX_RENDER_DPR,maxFrameSteps:MAX_FRAME_STEPS,pixelRatio:renderer?.getPixelRatio(),width:$('sea').width,height:$('sea').height,calls:renderer?.info.render.calls,triangles:renderer?.info.render.triangles,geometries:renderer?.info.memory.geometries,textures:renderer?.info.memory.textures},events:events.slice(),wildlife:marineLife?.snapshot(),deepSea:deepSea?.snapshot(),clearSea:clearSea?.snapshot()};}
if(INITIAL_LEVEL===0){activateLevel(0);ensureFirst(true);}
if(INITIAL_LEVEL===2){activateLevel(2);ensureThird(true);}
window.__auditSea={snapshot};
if(TEST)Object.assign(window.__auditSea,{
 advance(seconds){for(let t=0;t<seconds-1e-6;t+=1/60)simulate(1/60);draw();return snapshot();},
 place(x,y,z,h=0){inspectionAlien=false;inspectionView=false;placeWorld(x,y,z);velocity.set(0,0,0);heading=cameraHeading=h;updateCamera(0,true);draw();return snapshot();},
 input(code,value){value?pressKey(code):releaseKey(code);},
 objects:()=>objects.map(o=>({kind:o.kind,position:o.position.clone().add(logicalOffset()).toArray(),taken:o.taken,index:o.index})),
 rocks:()=>rockBodies.map(b=>({...b,x:b.x+voyage.x*220,z:b.z+voyage.z*260})),floor:floorHeight,render:draw,
 loopTerrain:()=>({period:OCEAN_PERIOD,peaks:PEAKS.map(p=>({...p,top:floorHeight(p.x,p.z)}))}),
 hullTerrain:()=>{scene.updateMatrixWorld(true);let minGap=Infinity,vertices=0;const v=new V3();pod.traverse(o=>{if(!o.isMesh||o.material.blending===THREE.AdditiveBlending)return;const p=o.geometry.attributes.position;for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);minGap=Math.min(minGap,v.y-floorHeight(v.x,v.z));vertices++;}});return {minGap,vertices};},
 loopDepthMaterials:()=>{let total=0,matched=0;scene.traverse(o=>{if(o.customDepthMaterial){total++;if(o.customDepthMaterial.onBeforeCompile.toString().includes('uAlienTime'))matched++;}});return {total,matched};},
 loopLights:()=>{const out=[];scene.updateMatrixWorld(true);scene.traverse(o=>{if(o.name==='customs-warm-beacon'){out.push({position:o.getWorldPosition(new V3()).toArray(),visible:o.visible,distance:o.distance});}});return out;},
 loopPickups:()=>{const out=[];scene.traverse(o=>{if(o.userData.loopPickupId!==undefined)out.push({id:o.userData.loopPickupId,visible:o.visible});});return out;},
 view(angle,distance=12,height=3){inspectionView=true;paused=true;clearInput();camera.position.copy(player).add(new V3(0,height,distance).applyAxisAngle(new V3(0,1,0),-heading+angle));camera.lookAt(player);camera.updateMatrixWorld();draw();return snapshot();},
 resumeView(){inspectionAlien=false;inspectionView=false;paused=false;updateCamera(0,true);draw();return snapshot();},
 project:(x,y,z)=>{const p=new V3(x,y,z).project(camera);return {x:(p.x+1)*innerWidth/2,y:(1-p.y)*innerHeight/2,z:p.z};},
 samples:()=>frameSamples.slice(),audioNodes:()=>({audio,master,musicBus,sfxBus,musicSource}),
 wildlifeView(kind,index=0,angle=0,distance=5,height=.6){inspectionView=true;paused=true;clearInput();marineLife.update(REDUCED?0:simTime);const focus=marineLife.focus(kind,index);camera.position.copy(focus).add(new V3(0,height,distance).applyAxisAngle(new V3(0,1,0),angle));camera.lookAt(focus);camera.updateMatrixWorld();renderMain();return snapshot();},
 wildlifeAt(time){marineLife.update(time);const result=marineLife.snapshot();marineLife.update(REDUCED?0:simTime);return result;},
 wildlifeMeshes(){const result=[];scene.traverse(o=>{if(o.name?.startsWith('marine-'))result.push({name:o.name,type:o.type,isInstanced:!!o.isInstancedMesh,instances:o.count||0});});return result;},
 alienAt:time=>deepSea.at(time),alienSafety:()=>deepSea.safety(),alienMeshes:()=>deepSea.meshes(),alienEnvelopes:()=>deepSea.envelopes(),
 oceanAt:time=>deepSea.oceanAt(time),oceanSafety:()=>deepSea.oceanSafety(),shadowBounds:()=>deepSea.shadowBounds(),oceanEnvelopes:()=>deepSea.oceanEnvelopes(),
 oceanView(region,kind,index=0,angle=.8,distance=6,height=.9){inspectionAlien=true;inspectionView=true;paused=true;clearInput();deepSea.update({player,heading,time:REDUCED?0:simTime});const p=deepSea.oceanFocus(region,kind,index);if(kind==='crown')p.y+=.65;camera.position.copy(p).add(new V3(0,height,distance).applyAxisAngle(new V3(0,1,0),angle));camera.lookAt(p);camera.updateMatrixWorld();draw();return snapshot();},
 alienView(kind,index=0,angle=0,distance=7,height=.9){inspectionAlien=true;inspectionView=true;paused=true;clearInput();deepSea.update({player,heading,time:REDUCED?0:simTime});const p=deepSea.focus(kind,index);if(kind==='crown')p.y+=.65;camera.position.copy(p).add(new V3(0,height,distance).applyAxisAngle(new V3(0,1,0),angle));camera.lookAt(p);camera.updateMatrixWorld();pod.visible=false;shadow.visible=false;renderer.info.reset();renderMain();return snapshot();},
 headlightTest(on){deepSea.lightTest(on);renderer.info.reset();renderMain();if(cameraMode==='cockpit'&&!inspectionView)cockpit.render();return snapshot();},
 lightCensus:(step=10,turns=12,levels=[2,10,30,70,120])=>lightCensus(step,turns,levels),
 warmReport:()=>warmReport,
 slotReport:()=>({slots:LIGHT_SLOTS,sources:lightSources.length,peak:slotPeak,overflow:slotOverflow,active:activeLights.length}),
});
// v22 local prototype: prepare every reachable lighting variant before the
// player can start. Visuals and gameplay state are restored after warming.
let warmReport=null;
const WARM_BUDGET_MS=15000;
// dive-ui:start — generic progress bar. Weights follow measured time (asset
// download ~60%, GPU warm-up the rest); between stages the bar creeps toward a
// ceiling so it never sits still, and the final stretch fills in ~200 ms.
let diveTarget=0,diveCeil=0,diveShown=0,diveAt=0,diveLast=0,diveDoneAt=0,diveFrom=0,diveRaf=0,divePct=-1;
function diveStage(step,progress,ceil){const box=$('dive');if(!box)return;box.dataset.step=step;const now=performance.now();diveTarget=Math.max(diveTarget,progress);diveCeil=Math.max(diveTarget,ceil??Math.min(progress+.08,.97));diveAt=now;if(step==='done'){diveDoneAt=now;diveFrom=diveShown;}if(!diveRaf)diveRaf=requestAnimationFrame(diveTick);}
function diveTick(){const box=$('dive');diveRaf=0;if(!box)return;const now=performance.now();
 if(box.dataset.step==='done'){const k=Math.min(1,(now-diveDoneAt)/200);diveShown=diveFrom+(1-diveFrom)*(1-(1-k)*(1-k));}
 else{const soft=diveTarget+(diveCeil-diveTarget)*(1-Math.exp(-(now-diveAt)/800)),dt=diveLast?now-diveLast:16;diveShown+=(Math.max(soft,diveShown)-diveShown)*(1-Math.exp(-dt/90));}
 diveLast=now;box.style.setProperty('--dive',diveShown.toFixed(4));const pct=Math.floor(diveShown*100+1e-6);if(pct!==divePct){divePct=pct;const t=$('divePct');if(t)t.textContent=pct+'%';const bar=box.querySelector('[role=progressbar]');if(bar)bar.setAttribute('aria-valuenow',pct);}
 if(diveShown<1)diveRaf=requestAnimationFrame(diveTick);else box.dataset.full='1';}
// dive-ui:end
const yieldTask=()=>new Promise(r=>setTimeout(r,0));
// Fixed light-slot pool. Three.js keys shader programs by the number of
// visible point lights, so v21 compiled ~53 new programs whenever culling
// changed that number mid-flight. Here the source lights keep all their
// existing rules (ocean-loop culling, deep-sea colours, beacons); before each
// render their visible results are copied into a constant set of slots and
// unused slots get intensity 0. Same light sum, one program set.
const PARAMS=new URLSearchParams(location.search);
const LIGHT_SLOTS=+(PARAMS.get('slots')??12);
const lightSources=[],lightSlots=[],activeLights=[];let slotOverflow=0,slotPeak=0;
function setupLightSlots(){
 if(!LIGHT_SLOTS)return;
 scene.traverse(o=>{if(o.isPointLight)lightSources.push(o);});
 for(let i=0;i<LIGHT_SLOTS;i++){const l=new THREE.PointLight('#000000',0,1,2);l.name='light-slot-'+i;scene.add(l);lightSlots.push(l);}
}
function shown(o){for(let p=o;p;p=p.parent)if(!p.visible)return false;return true;}
const slotEye=new V3(),slotA=new V3(),slotB=new V3();
function applyLightSlots(){
 if(!LIGHT_SLOTS)return;
 activeLights.length=0;
 for(const l of lightSources){if(shown(l)&&l.intensity>0)activeLights.push(l);l.userData.slotVisible=l.visible;l.visible=false;}
 slotPeak=Math.max(slotPeak,activeLights.length);
 if(activeLights.length>LIGHT_SLOTS){slotOverflow++;camera.getWorldPosition(slotEye);activeLights.sort((a,b)=>a.getWorldPosition(slotA).distanceToSquared(slotEye)-b.getWorldPosition(slotB).distanceToSquared(slotEye));}
 for(let i=0;i<lightSlots.length;i++){const slot=lightSlots[i],src=activeLights[i];
  if(src){src.getWorldPosition(slot.position);slot.color.copy(src.color);slot.intensity=src.intensity;slot.distance=src.distance;slot.decay=src.decay;}else slot.intensity=0;}
}
function renderMain(){applyLightSlots();renderer.render(scene,camera);releaseLightSlots();}
function releaseLightSlots(){if(!LIGHT_SLOTS)return;for(const l of lightSources)l.visible=l.userData.slotVisible;}
function worldSpot(){let spot=null;scene.traverse(o=>{if(o.isSpotLight)spot=o;});return spot;}
function visibleLights(){let p=0;for(const l of lightSources)if(shown(l)&&l.intensity>0)p++;const spot=worldSpot();return [p,spot&&shown(spot)?1:0];}
function saveView(){return {player:player.clone(),voyage:{...voyage},heading,cameraHeading,cameraMode,pos:camera.position.clone(),quat:camera.quaternion.clone(),target:cameraTarget.clone(),desired:cameraDesired.clone()};}
function setMode(mode){cameraMode=mode;const inside=mode==='cockpit';camera.fov=inside?68:57;camera.near=inside?.06:.2;camera.updateProjectionMatrix();pod.visible=!inside;}
function restoreView(s){player.copy(s.player);Object.assign(voyage,s.voyage);heading=s.heading;cameraHeading=s.cameraHeading;setMode(s.cameraMode);camera.position.copy(s.pos);camera.quaternion.copy(s.quat);cameraTarget.copy(s.target);cameraDesired.copy(s.desired);camera.updateMatrixWorld();}
// Diagnostic only: how many source lights the culling rules switch on.
function lightCensus(step,turns,levels){
 const saved=saveView(),flags=[];scene.traverse(o=>flags.push([o,o.visible]));
 const seen={},t0=performance.now();let samples=0;
 for(const mode of ['external','cockpit']){setMode(mode);
  for(let x=-110;x<110;x+=step)for(let z=-179;z<81;z+=step){const floor=floorHeight(x,z);
   for(const lift of levels){const y=Math.min(floor+lift,OCEAN_PERIOD.surface-2);if(y<floor+1)continue;player.set(x,y,z);
    deepSea.update({player,heading,time:0});
    for(let k=0;k<turns;k++){heading=cameraHeading=k*Math.PI*2/turns;updateCamera(0,true);oceanPool.update(camera,scene.fog.far);const [p,s]=visibleLights();const key=mode+':'+p+':'+s;seen[key]=(seen[key]||0)+1;samples++;}
   }}}
 for(const [o,v] of flags)o.visible=v;restoreView(saved);deepSea.update({player,heading,time:0});updateCamera(0,true);
 return {samples,ms:performance.now()-t0,combos:seen};
}
const WARM=PARAMS.get('warm')!=='0';
async function warmUp(){
 const t0=performance.now(),report={slots:LIGHT_SLOTS,programsBefore:renderer.info.programs.length,combos:[]};
 camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight,false);
 const saved=saveView(),flags=[];scene.traverse(o=>flags.push([o,o.visible,o.frustumCulled]));
 const spot=worldSpot(),shadowAuto=spot.shadow.autoUpdate;
 try{
  // Headlight off/on are the only two light layouts left to compile.
  for(const [i,s] of [0,1].entries()){
   const c0=performance.now();spot.visible=!!s;
   applyLightSlots();await renderer.compileAsync(scene,camera);releaseLightSlots();
   report.combos.push({s,ms:Math.round(performance.now()-c0),programs:renderer.info.programs.length});
   diveStage('light',.6+.1*(i+1));
  }
  diveStage('shadow',.86);await yieldTask();
  // One frame with every object shown and unculled uploads all geometry and
  // textures and builds every shadow-depth variant. The canvas is hidden.
  const r0=performance.now();
  scene.traverse(o=>{o.visible=true;o.frustumCulled=false;});spot.shadow.autoUpdate=true;
  renderMain();
  report.fullFrameMs=Math.round(performance.now()-r0);
  for(const [o,v,f] of flags){o.visible=v;o.frustumCulled=f;}
  diveStage('cockpit',.92);await yieldTask();
  const k0=performance.now();
  setMode('cockpit');updateCamera(0,true);oceanPool.update(camera,scene.fog.far);
  cockpit.update({time:0,y:player.y,heading,velocity,surface:OCEAN_PERIOD.surface});renderMain();cockpit.render();
  for(const program of renderer.info.programs){program.getUniforms();program.getAttributes();}
  report.cockpitMs=Math.round(performance.now()-k0);
 }finally{
  for(const [o,v,f] of flags){o.visible=v;o.frustumCulled=f;}
  spot.shadow.autoUpdate=shadowAuto;restoreView(saved);updateCamera(0,true);oceanPool.update(camera,scene.fog.far);
 }
 report.programsAfter=renderer.info.programs.length;report.ms=Math.round(performance.now()-t0);warmReport=report;return report;
}
// Music bytes are fetched and decoded on a suspended context; playback still
// starts only after the player's click resumes audio.
let musicBuffer=null,musicPrep=null;
function ensureAudioGraph(){if(audio)return;audio=new(window.AudioContext||window.webkitAudioContext)();master=audio.createGain();master.gain.value=.65;const compressor=audio.createDynamicsCompressor();compressor.threshold.value=-12;compressor.ratio.value=5;master.connect(compressor);compressor.connect(audio.destination);musicBus=audio.createGain();musicBus.gain.value=.48;musicBus.connect(master);sfxBus=audio.createGain();sfxBus.connect(master);}
function prepareMusic(){if(!musicPrep)musicPrep=(async()=>{const response=await fetch(DATA.music);if(!response.ok)throw new Error('Music HTTP '+response.status);const bytes=await response.arrayBuffer();ensureAudioGraph();musicBuffer=await audio.decodeAudioData(bytes);return musicBuffer;})().catch(e=>{console.warn('Music prefetch failed',e);musicPrep=null;return null;});return musicPrep;}
let secondInitPromise;
function ensureSecond(){
 if(secondInitPromise)return secondInitPromise;
 secondInitPromise=(async()=>{
  try{
   $('sea').classList.add('warming');diveStage('assets',.04,.55);prepareMusic();
   renderer=new THREE.WebGLRenderer({canvas:$('sea'),antialias:true,alpha:false,powerPreference:'high-performance'});renderer.info.autoReset=false;renderer.setPixelRatio(Math.min(devicePixelRatio,MAX_RENDER_DPR));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
   const loader=new THREE.TextureLoader();await Promise.all(Object.entries(DATA).filter(([k])=>k!=='music').map(async([k,url])=>{const t=await loader.loadAsync(url);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());textures[k]=t;}));
   $('shellIcon').src=DATA.shell;
   addLight();addGround();addReefs();addPlants();addGate();addExpandedOcean();addCollectibles();addPod();replaceMarineLife();camera.fov=57;camera.near=.2;camera.updateProjectionMatrix();cockpit=createCockpit(renderer,camera,textures.hull);highSea=addHighSea(scene,floorHeight,textures.rock);highSea.update(0);clearSea=addClearSeaSample(scene,{floor:floorHeight,rocks:rockBodies});clearSea.patchScene(pod);deepSea=createDeepSea(scene,renderer,{floor:floorHeight,rocks:rockBodies,objects,pod});clearSea.patchFog(pod);
   for(const o of objects){o.body.userData.loopPickupId=o.glow.userData.loopPickupId=o.index;}
   oceanPool=createOceanPool(scene,{pod,shadow,objects,rocks:rockBodies,player});setupLightSlots();deepSea.trackShadows();updateCamera(0,true);
   diveStage('assets',.6);await yieldTask();
   if(WARM){try{await warmUp();}catch(e){console.warn('Warm-up skipped',e);warmReport={error:String(e?.message||e)};}}
   if(!musicBuffer){diveStage('sound',.95);await Promise.race([prepareMusic(),new Promise(r=>setTimeout(r,2500))]);}
   ready=true;fit();diveStage('done',1);$('sea').classList.remove('warming');$('start').textContent='开始探索';$('start').disabled=false;requestAnimationFrame(frame);
   $('sea').addEventListener('webglcontextlost',e=>{e.preventDefault();clearInput();paused=true;fail(new Error('图形上下文中断，请重新打开页面'));});
  }catch(e){secondInitPromise=null;fail(e);throw e;}
 })();
 return secondInitPromise;
}
if(INITIAL_LEVEL===1)ensureSecond().catch(()=>{});
