import * as THREE from 'three';
import { oceanLocal, wrap } from './ocean-loop-v10.js';
const V3=THREE.Vector3, smooth=(a,b,n)=>{const t=THREE.MathUtils.clamp((n-a)/(b-a),0,1);return t*t*(3-2*t);};
export const SAMPLE={ship:{x:60,z:17,yaw:-.58},low:{x:20,y:12,z:35,h:1.10},high:{x:53,y:80,z:14,h:.58},close:{x:37,y:7,z:25,h:1.22}};
export function clearWeight(p){const q=oceanLocal(p);return (1-smooth(60,95,Math.abs(wrap(q.x-65,220))))*(1-smooth(65,95,Math.abs(wrap(q.z+5,260))));}
const CLEAR_GLSL=`
float clearSeaWeight(vec3 p){float dx=abs(mod(p.x-65.+110.,220.)-110.);float dz=abs(mod(p.z+5.+130.,260.)-130.);return (1.-smoothstep(60.,95.,dx))*(1.-smoothstep(65.,95.,dz));}
vec3 clearLocal(vec3 p){p.x=mod(p.x+110.,220.)-110.;p.z=mod(p.z+179.,260.)-179.;return p;}
`;
// A deliberately bounded visual sector, not a repaint of all five biomes.
export function addClearSeaSample(scene,{floor,rocks}){
 const root=new THREE.Group();root.name='clear-sea-sample-landmarks';scene.add(root);
 const time={value:0},fogNear={value:42},fogFar={value:155},fogMode={value:0},patched=new Set(),fogPatched=new Set(),landmarks=[];
 const textureCanvas=document.createElement('canvas');textureCanvas.width=512;textureCanvas.height=512;
 const ctx=textureCanvas.getContext('2d');ctx.fillStyle='#9caaa0';ctx.fillRect(0,0,512,512);
 let seed=56377;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 for(let i=0;i<16000;i++){const x=rand()*512,y=rand()*512;ctx.fillStyle=i%3?'rgba(36,57,53,.12)':'rgba(203,170,105,.2)';ctx.fillRect(x,y,.5+rand()*4,.6+rand()*7);}
 for(let i=0;i<16;i++){ctx.fillStyle='#273c3c40';ctx.fillRect(0,i*32,512,1);for(let j=0;j<20;j++){ctx.fillStyle='#b9b39d6a';ctx.beginPath();ctx.arc(j*26+4,i*32+5,1.25,0,6.29);ctx.fill();}}
 const tex=new THREE.CanvasTexture(textureCanvas);tex.colorSpace=THREE.SRGBColorSpace;tex.wrapS=tex.wrapT=THREE.RepeatWrapping;tex.anisotropy=4;
 const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.85,...extra});
 const hullMat=mat('#91afa4',{map:tex,metalness:.12,emissive:'#335c57',emissiveIntensity:.12}),rust=mat('#b4a27b',{map:tex,metalness:.16}),dark=mat('#506761',{map:tex,metalness:.16}),brass=mat('#baa377',{metalness:.28,roughness:.6});
 const pane=mat('#7eb6b2',{emissive:'#40c3c2',emissiveIntensity:.45,metalness:.18,roughness:.32});
 const add=(parent,g,m,x=0,y=0,z=0)=>{const o=new THREE.Mesh(g,m);o.position.set(x,y,z);parent.add(o);return o;};
 const beam=(parent,a,b,r,material)=>{const d=b.clone().sub(a),o=add(parent,new THREE.CylinderGeometry(r,r,d.length(),10),material);o.position.copy(a).add(b).multiplyScalar(.5);o.quaternion.setFromUnitVectors(new V3(0,1,0),d.normalize());return o;};
 const ship=new THREE.Group();ship.name='first-level-inspired-steamer';ship.position.set(SAMPLE.ship.x,floor(SAMPLE.ship.x,SAMPLE.ship.z)+1.3,SAMPLE.ship.z);ship.rotation.set(0,SAMPLE.ship.yaw,.065);root.add(ship);
 // Closed lofted hull: neither a cutout image nor a vertical scenery billboard.
 const stations=36,sides=32,positions=[],uv=[],indices=[];
 for(let j=0;j<=stations;j++){const z=-23+j*46/stations,t=j/stations,width=.55+6.4*Math.pow(Math.sin(Math.PI*t),.65);
  for(let k=0;k<=sides;k++){const a=Math.PI*2*k/sides,x=Math.sin(a)*width,y=4.5+Math.cos(a)*4.5;positions.push(x,y,z);uv.push(k/sides*3,j/stations*5);}}
 for(let j=0;j<stations;j++)for(let k=0;k<sides;k++){const a=j*(sides+1)+k,b=a+sides+1;indices.push(a,b,a+1,a+1,b,b+1);}
 for(const end of [0,stations]){const center=positions.length/3;positions.push(0,4.5,-23+end*46/stations);uv.push(.5,.5);for(let k=0;k<sides;k++){const a=end*(sides+1)+k;end===0?indices.push(center,a,a+1):indices.push(center,a+1,a);}}
 const hg=new THREE.BufferGeometry();hg.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));hg.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));hg.setIndex(indices);hg.computeVertexNormals();add(ship,hg,hullMat);
 // Deck follows the planform rather than an exposed rectangular slab.
 const deck=new THREE.Shape();for(let j=0;j<=36;j++){const t=j/36,z=-23+t*46,w=.55+6.4*Math.pow(Math.sin(Math.PI*t),.65);j?deck.lineTo(w,z):deck.moveTo(w,z);}for(let j=36;j>=0;j--){const t=j/36;deck.lineTo(-(.55+6.4*Math.pow(Math.sin(Math.PI*t),.65)),-23+t*46);}deck.closePath();
 const dg=new THREE.ShapeGeometry(deck,24);dg.rotateX(-Math.PI/2);add(ship,dg,rust,0,9.08,0);
 add(ship,new THREE.BoxGeometry(8.9,5,13),hullMat,0,11.2,-5.5);add(ship,new THREE.BoxGeometry(10,.55,14),rust,0,13.9,-5.5);
 add(ship,new THREE.CylinderGeometry(1.52,1.78,9.5,24),hullMat,0,18.4,-9);add(ship,new THREE.TorusGeometry(1.58,.15,8,32),brass,0,23.2,-9).rotation.x=Math.PI/2;
 const rim=add(ship,new THREE.CylinderGeometry(1.45,1.45,.22,24),dark,0,23.26,-9);
 const windows=[];
 for(const side of [-1,1]){
  for(let i=0;i<8;i++){const z=-17+i*4.6,t=(z+23)/46,w=.55+6.4*Math.pow(Math.sin(Math.PI*t),.65),x=side*w*.94;
   const ring=add(ship,new THREE.TorusGeometry(.67,.13,10,32),brass,x,5.8,z);ring.rotation.y=side*Math.PI/2;
   const glass=add(ship,new THREE.CircleGeometry(.54,24),pane,x+side*.035,5.8,z);glass.rotation.y=side*Math.PI/2;windows.push(glass);
  }
  for(let i=0;i<4;i++){const z=-10+i*3.2;const ring=add(ship,new THREE.TorusGeometry(.64,.11,8,28),brass,side*4.49,11.4,z);ring.rotation.y=side*Math.PI/2;const glass=add(ship,new THREE.CircleGeometry(.53,24),pane,side*4.51,11.4,z);glass.rotation.y=side*Math.PI/2;}
  const rail=[];for(let i=0;i<25;i++){const t=.08+i*.84/24,z=-23+t*46,w=.55+6.4*Math.pow(Math.sin(Math.PI*t),.65);rail.push(new V3(side*w,10.1,z));if(i%2===0)beam(ship,new V3(side*w,8.8,z),new V3(side*w,10.1,z),.07,brass);}
  add(ship,new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rail),48,.075,6,false),brass);
 }
 const mastBase=new V3(0,8.8,9),mastTop=new V3(2,25.5,5);beam(ship,mastBase,mastTop,.17,rust);beam(ship,new V3(-5.5,22,5.9),new V3(7,21.2,5.5),.12,rust);
 for(const end of [new V3(-5.5,22,5.9),new V3(7,21.2,5.5)])beam(ship,new V3(0,9,17),end,.022,dark);
 const anchor=add(ship,new THREE.TorusGeometry(1.15,.15,8,24,Math.PI),brass,0,8.9,21);anchor.rotation.x=Math.PI/2;
 const growthMats=['#bca1aa','#b8b397','#75a6a0'].map(c=>mat(c,{emissive:c,emissiveIntensity:.03}));
 for(let i=0;i<72;i++){const z=-20+rand()*40,w=.55+6.4*Math.pow(Math.sin(Math.PI*(z+23)/46),.65),x=(rand()>.5?1:-1)*w*.92,h=.5+rand()*1.1;const base=new V3(x,8.8,z);for(let j=0;j<3;j++)beam(ship,base,new V3(x+(rand()-.5)*.85,8.8+h,z+(rand()-.5)*.8),.075,growthMats[i%3]);}
 ship.updateMatrixWorld(true);
 // Conservative ellipsoid collars follow actual transforms; no phantom broad wall.
 const world=new V3(),scale=new V3(),q=new THREE.Quaternion();ship.matrixWorld.decompose(world,q,scale);
 const collider=(local,rx,ry,rz)=>{const p=local.clone().applyMatrix4(ship.matrixWorld);const c=Math.cos(SAMPLE.ship.yaw),s=Math.sin(SAMPLE.ship.yaw);rocks.push({x:p.x,y:p.y,z:p.z,rx:Math.sqrt(rx*rx*c*c+rz*rz*s*s)+.35,ry:ry+.6,rz:Math.sqrt(rx*rx*s*s+rz*rz*c*c)+.35,structure:'sample-steamer'});};
 for(let j=0;j<12;j++){const z=-21+j*42/11,w=.55+6.4*Math.pow(Math.sin(Math.PI*(z+23)/46),.65);collider(new V3(0,4.5,z),w,4.5,2.5);}collider(new V3(0,11.5,-5.5),4.8,3.2,7.2);collider(new V3(0,18.4,-9),1.8,5.2,1.8);
 landmarks.push({name:'百年蒸汽沉船',position:ship.position.toArray(),windows:windows.length,source:'First-level deep-bg3-wreck-canyon-v1-2560.webp: teal riveted hull, round portholes, tall funnel, tilted vessel, coral growth.'});
 // Real high silhouettes remain visible at y=80, with room to fly around and above.
 const stone=mat('#8a9e94',{map:tex,emissive:'#2b5157',emissiveIntensity:.07});
 for(const [x,z,rx,ry,rz] of [[91,-47,8,23,7],[77,-47,6,19,6],[98,-31,5,24,5]]){
  const base=floor(x,z),g=new THREE.SphereGeometry(1,24,18),p=g.attributes.position;
  for(let i=0;i<p.count;i++){const a=p.getX(i),b=p.getY(i),c=p.getZ(i),n=.9+.12*Math.sin(b*10+a*4+c*3)+.04*Math.sin(a*14+b*6)*Math.cos(c*11-b*5);p.setXYZ(i,a*n+.12*Math.sin(b*4),b*n,c*n+.08*Math.cos(b*5));}g.computeVertexNormals();
  const o=add(root,g,stone,x,base+ry*.83,z);o.scale.set(rx,ry,rz);rocks.push({x,y:o.position.y,z,rx:rx*1.22,ry:ry*1.09,rz:rz*1.18,structure:'sample-high-rock'});landmarks.push({name:'高礁石柱',position:o.position.toArray(),top:o.position.y+ry});
 }
 // Two arches sit on the reachable terrain summit, not a surrounding panorama.
 const ay=floor(85,-35)+1.5;
 for(const x of [79,91]){const curve=[];for(let j=0;j<=32;j++){const a=Math.PI*j/32;curve.push(new V3(x+Math.cos(a)*6,ay+Math.sin(a)*10,-35));}const o=add(root,new THREE.TubeGeometry(new THREE.CatmullRomCurve3(curve),48,1.1,10,false),stone);
  for(let j=0;j<curve.length;j+=2){const p=curve[j];rocks.push({x:p.x,y:p.y,z:p.z,rx:1.2,ry:1.2,rz:1.2,structure:'sample-arch'});}}
 // Soft world-space crossed ribbons: sparse light shafts, with depth occlusion and
 // fog attenuation. The core scene remains fully three-dimensional and reachable.
 const rayUniforms={uTime:time,uNear:fogNear,uFar:fogFar,uClearFog:fogMode};
 const rm=new THREE.ShaderMaterial({transparent:true,depthWrite:false,depthTest:true,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,uniforms:rayUniforms,vertexShader:`uniform float uClearFog;varying vec2 vUv;varying vec3 vWorld;varying float vDepth;void main(){vUv=uv;vec4 p=instanceMatrix*vec4(position,1.);vWorld=(modelMatrix*p).xyz;vec4 eye=modelViewMatrix*p;vDepth=mix(-eye.z,length(eye.xyz),uClearFog);gl_Position=projectionMatrix*eye;}`,fragmentShader:`uniform float uTime,uNear,uFar;varying vec2 vUv;varying vec3 vWorld;varying float vDepth;void main(){float edge=exp(-pow((vUv.x-.5)*4.8,2.));float height=smoothstep(0.,.15,vUv.y)*(1.-smoothstep(.85,1.,vUv.y));float streak=.65+.35*sin(vUv.x*31.+vUv.y*2.+uTime*.18);float fog=1.-smoothstep(uNear,uFar,vDepth);float a=.025*edge*height*streak*fog;gl_FragColor=vec4(.55,.77,.65,a);}`});
 const rayGeo=new THREE.PlaneGeometry(1,1),rays=new THREE.InstancedMesh(rayGeo,rm,16),dummy=new THREE.Object3D();rays.name='sample-sunlight-shafts';let idx=0;
 for(let i=0;i<8;i++){const x=36+(i%4)*19,z=-48+Math.floor(i/4)*61;for(const a of [0,Math.PI/2]){dummy.position.set(x,72,z);dummy.rotation.set(-.10,a,.17);dummy.scale.set(8+(i%3)*3,110,1);dummy.updateMatrix();rays.setMatrixAt(idx++,dummy.matrix);}}rays.computeBoundingSphere();scene.add(rays);
 function patchSurface(mat){
  if(patched.has(mat))return;patched.add(mat);const old=mat.onBeforeCompile,priorKey=mat.customProgramCacheKey();
  mat.onBeforeCompile=(s,r)=>{old?.call(mat,s,r);s.uniforms.uClearTime=time;
   s.vertexShader=s.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vClearWorld;').replace('#include <project_vertex>',`vec4 clearPos=vec4(transformed,1.);\n#ifdef USE_INSTANCING\nclearPos=instanceMatrix*clearPos;\n#endif\nvClearWorld=(modelMatrix*clearPos).xyz;\n#include <project_vertex>`);
   s.fragmentShader=s.fragmentShader.replace('#include <common>','#include <common>\nuniform float uClearTime;varying vec3 vClearWorld;\n'+CLEAR_GLSL);
   s.fragmentShader=s.fragmentShader.replace('#include <opaque_fragment>',`vec3 cp=clearLocal(vClearWorld);float clearArea=clearSeaWeight(cp);float sunlight=clearArea*smoothstep(-5.,8.,cp.y);float u=cp.x+cp.y*.18,v=cp.z-cp.y*.12;float a=sin(u*1.51367646+sin(v*.894145602+uClearTime*.24)*1.5),b=sin(v*1.691626814+sin(u*.79967813-uClearTime*.19)*1.6);float lightWeb=pow(max(0.,1.-abs(a+b)*.82),7.);outgoingLight+=vec3(.018,.032,.022)*lightWeb*sunlight;\n#include <opaque_fragment>`);
  };mat.customProgramCacheKey=()=>`clear-sector-v11-${priorKey}-${old.toString()}`;mat.needsUpdate=true;
 }
 function patchScene(pod){scene.traverse(o=>{if(!o.isMesh)return;for(let p=o;p;p=p.parent)if(p===pod)return;const mats=Array.isArray(o.material)?o.material:[o.material];for(const m of mats)if(m?.isMeshStandardMaterial&&!m.transparent)patchSurface(m);});}
 // Radial distance closes the off-axis corners of the finite render pool.
 // The original depth fog stays unchanged outside the sample, including caves.
 function patchFog(pod){scene.traverse(o=>{if(!o.material)return;for(let p=o;p;p=p.parent)if(p===pod)return;for(const m of (Array.isArray(o.material)?o.material:[o.material])){if(!m?.fog||fogPatched.has(m))continue;fogPatched.add(m);const old=m.onBeforeCompile,priorKey=m.customProgramCacheKey();m.onBeforeCompile=(s,r)=>{old?.call(m,s,r);s.uniforms.uClearFog=fogMode;s.vertexShader=s.vertexShader.replace('#include <common>','#include <common>\nuniform float uClearFog;').replace('#include <fog_vertex>','#ifdef USE_FOG\nvFogDepth=mix(-mvPosition.z,length(mvPosition.xyz),uClearFog);\n#endif');};m.customProgramCacheKey=()=>`clear-radial-fog-v11-${priorKey}-${old.toString()}`;m.needsUpdate=true;}});}
 let current={weight:0,near:42,far:155,radialFog:0};
 function update({player,camera,time:t}){
  time.value=t;const w=clearWeight(player),height=smooth(12,90,player.y),near=THREE.MathUtils.lerp(70,105,height),far=THREE.MathUtils.lerp(180,185,height);
  const open=1-smooth(-6,2,-player.y);const mix=w*open;fogMode.value=smooth(0,.05,mix);
  const tint=new THREE.Color('#24616a');scene.background.lerp(tint,mix*.62);scene.fog.color.copy(scene.background);
  scene.fog.near=THREE.MathUtils.lerp(scene.fog.near,near,mix);scene.fog.far=THREE.MathUtils.lerp(scene.fog.far,far,mix);
  // A 3x3 pool has a finite render footprint although logical travel is endless.
  // Keep the completely fogged horizon inside that footprint, including chase eyes.
  const safety=Math.min(330-Math.abs(camera.position.x),camera.position.z+439,341-camera.position.z)-12;
  scene.fog.far=Math.min(scene.fog.far,safety);scene.fog.near=Math.min(scene.fog.near,scene.fog.far-20);
  fogNear.value=scene.fog.near;fogFar.value=scene.fog.far;current={weight:mix,near:scene.fog.near,far:scene.fog.far,radialFog:fogMode.value};
 }
 return {patchScene,patchFog,update,snapshot(){return {scope:'One clear-water high-reef / steamer sector',...current,landmarks,rays:16,geometry:true};}};
}
