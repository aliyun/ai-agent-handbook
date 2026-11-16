import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// All wildlife is true scene geometry. No camera-facing animal planes or lights
// attached to animals; water fog and the existing scene lighting apply normally.
const V3=THREE.Vector3, Y=new V3(0,1,0), TAU=Math.PI*2;
const clamp=THREE.MathUtils.clamp;
function safeEllipse(origin,rx,rz,margin,bob,environment,lower=0){
 const clear=p=>{
  for(let i=0;i<128;i++){
   const a=i/128*TAU,x=p.x+Math.sin(a)*rx,z=p.z+Math.cos(a)*rz;
   if(x-margin<-70||x+margin>70||z-margin<-134||z+margin>36||p.y-bob-lower-margin<environment.floor(x,z)+.18)return false;
   for(const y of [p.y-bob-lower,p.y,p.y+bob])for(const b of environment.rocks){if(((x-b.x)/(b.rx+margin))**2+((y-b.y)/(b.ry+margin))**2+((z-b.z)/(b.rz+margin))**2<1)return false;}
  }
  return true;
 };
 const offsets=[[0,0]];for(const r of [3,6,10,15])for(let i=0;i<12;i++)offsets.push([Math.cos(i*TAU/12)*r,Math.sin(i*TAU/12)*r]);
 for(const rise of [0,2,4,6])for(const [dx,dz] of offsets){const p=new V3(origin.x+dx,origin.y+rise,origin.z+dz);if(p.y+bob+margin>11)continue;if(clear(p))return p;}
 throw new Error('生物航线没有安全空间');
}
function standard(color,extra={}){return new THREE.MeshStandardMaterial({color,roughness:.58,metalness:.06,...extra});}
function part(group,geometry,material,x=0,y=0,z=0,scale=null){const m=new THREE.Mesh(geometry,material);m.position.set(x,y,z);if(scale)m.scale.set(...scale);group.add(m);return m;}
function path(points,r=.015,segments=24){return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new V3(...p))),segments,r,5,false);}
function fin(points){const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(points.flat(),3));const indices=[];for(let i=1;i<points.length-1;i++)indices.push(0,i,i+1);g.setIndex(indices);g.computeVertexNormals();g.setAttribute('uv',new THREE.Float32BufferAttribute(points.map((_,i)=>[i/(points.length-1),i===0?0:1]).flat(),2));return g;}
function combine(gs){const normalized=gs.map(g=>{const n=g.index?g.toNonIndexed():g.clone();n.deleteAttribute('uv');return n;});return mergeGeometries(normalized);}
function paint(g,colorFor){const p=g.attributes.position,c=[],a=new THREE.Color();for(let i=0;i<p.count;i++){colorFor(p.getX(i),p.getY(i),p.getZ(i),a);c.push(a.r,a.g,a.b);}g.setAttribute('color',new THREE.Float32BufferAttribute(c,3));return g;}
function stripedFish(){
 const profile=[[-.93,.035],[-.76,.08],[-.52,.19],[-.25,.29],[.06,.32],[.34,.27],[.56,.19],[.73,.115],[.83,.065],[.86,.035]];
 const g=new THREE.LatheGeometry(profile.map(([x,r])=>new THREE.Vector2(r,x)),32);g.rotateZ(-Math.PI/2);g.scale(1,.94,.65);
 const back=new THREE.Color('#537d83'),belly=new THREE.Color('#cad8b7'),stripe=new THREE.Color('#adb379');
 return paint(g,(x,y,z,c)=>{c.copy(belly).lerp(back,clamp((y+.27)/.56,0,1));const line=Math.exp(-(((y-.04)/.046)**2));c.lerp(stripe,line*.7);const scales=(Math.sin(x*67+Math.sin(y*85)*1.1)+Math.sin(y*82+z*48))*.016;c.offsetHSL(0,0,scales);});
}
function scaleTexture(){
 const c=document.createElement('canvas');c.width=c.height=512;const g=c.getContext('2d');g.fillStyle='#858585';g.fillRect(0,0,512,512);
 for(let row=0;row<48;row++)for(let col=0;col<32;col++){const x=col*16+(row%2)*8,y=row*11;g.beginPath();g.ellipse(x,y,8,6,0,0,Math.PI);g.strokeStyle='#a3a3a3';g.lineWidth=1;g.stroke();g.beginPath();g.ellipse(x,y+.8,7,5,0,0,Math.PI);g.strokeStyle='#707070';g.lineWidth=.6;g.stroke();}
 const t=new THREE.CanvasTexture(c);return t;
}
function fishBatches(scene,origins,timeUniform){
 const n=origins.length,batches=[],dummy=new THREE.Object3D();
 const batch=(name,g,mat)=>{const m=new THREE.InstancedMesh(g,mat,n);m.name='marine-fish-'+name;m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);m.frustumCulled=false;scene.add(m);batches.push(m);return m;};
 const bodyMat=standard('#ffffff',{vertexColors:true,roughness:.55,metalness:.12,bumpMap:scaleTexture(),bumpScale:.014});
 bodyMat.onBeforeCompile=s=>{s.uniforms.uMarineTime=timeUniform;s.vertexShader=s.vertexShader.replace('#include <common>','#include <common>\nuniform float uMarineTime;').replace('#include <begin_vertex>','#include <begin_vertex>\nfloat tailWeight=pow(clamp((.35-position.x)/1.28,0.,1.),2.); transformed.z+=sin(uMarineTime*5.4+instanceMatrix[3].x*.23-position.x*2.7)*tailWeight*.09;');};
 const body=batch('body',stripedFish(),bodyMat);
 const finMat=standard('#6e9189',{side:THREE.DoubleSide,roughness:.78});
 const finGeo=combine([
  fin([[-.48,.20,0],[-.38,.33,0],[-.22,.42,0],[-.06,.44,0],[.13,.40,0],[.28,.32,0],[.37,.24,0]]),
  fin([[-.52,-.20,0],[-.41,-.30,0],[-.22,-.34,0],[.05,-.27,0]]),
  fin([[.36,-.01,.17],[.14,-.13,.39],[.01,-.18,.42],[-.07,-.18,.27]]),
  fin([[.36,-.01,-.17],[.14,-.13,-.39],[.01,-.18,-.42],[-.07,-.18,-.27]])
 ]);
 const fins=batch('fins',finGeo,finMat);
 const tail=batch('tail',fin([[0,0,0],[-.35,.33,.012],[-.25,.06,.012],[-.38,-.34,.012],[0,-.045,0]]),standard('#9cab8c',{side:THREE.DoubleSide,roughness:.62}));
 const eyes=[];const pupils=[];const gills=[];
 for(const side of [-1,1]){
  const eye=new THREE.SphereGeometry(.044,16,10);eye.scale(1,1,.33);eye.translate(.59,.074,side*.125);eyes.push(eye);
  const pupil=new THREE.SphereGeometry(.025,12,8);pupil.scale(1,1,.24);pupil.translate(.596,.075,side*.139);pupils.push(pupil);
  gills.push(path([[.37,.14,side*.17],[.30,.035,side*.205],[.32,-.12,side*.177]],.0045,20));
  gills.push(path([[.836,.024,side*.043],[.796,-.005,side*.073],[.735,-.015,side*.096]],.003,16));
  for(let i=0;i<6;i++){const x=-.38+i*.11;gills.push(path([[x,.24,side*.006],[x+.025,.28+i*.012,side*.006],[x+.01,.32+i*.006,side*.006]],.0025,8));}
 }
 const eyesBatch=batch('eyes',combine(eyes),standard('#d8d5ad',{roughness:.35}));
 const pupilsBatch=batch('pupils',combine(pupils),standard('#142b30',{roughness:.25}));
 const gillsBatch=batch('gills',combine(gills),standard('#3c6567'));
 const states=origins.map((f,i)=>({...f,id:i,scale:.85+(i%5)*.09,position:new V3(),yaw:0,tailAngle:0}));
 const place=(m,i,p,yaw,scale)=>{dummy.position.copy(p);dummy.rotation.set(0,yaw,0);dummy.scale.setScalar(scale);dummy.updateMatrix();m.setMatrixAt(i,dummy.matrix);};
 function update(t){
  states.forEach((f,i)=>{
   // A smooth loop with a nonzero velocity at every point. Head direction comes
   // from the actual derivative, not camera orientation or texture mirroring.
   const a=t*.15+f.phase,rx=6.5,rz=2.8;
   f.position.set(f.x+Math.sin(a)*rx,f.y+Math.sin(t*.5+f.phase)*.28,f.z+Math.cos(a)*rz);
   const vx=Math.cos(a)*rx*.15,vz=-Math.sin(a)*rz*.15;
   f.yaw=Math.atan2(-vz,vx);
   for(const b of [body,fins,eyesBatch,pupilsBatch,gillsBatch])place(b,i,f.position,f.yaw,f.scale);
   const tailPos=new V3(-.91,0,0).multiplyScalar(f.scale).applyAxisAngle(Y,f.yaw).add(f.position);
   f.tailAngle=Math.sin(t*5.4+f.position.x*.23+2.45)*.43;
   place(tail,i,tailPos,f.yaw+f.tailAngle,f.scale);
  });
  for(const b of batches)b.instanceMatrix.needsUpdate=true;
 }
 return {states,batches,update};
}
function makeJelly(scene,origin,index,timeUniform){
 const root=new THREE.Group();root.name='marine-jellyfish-'+index;root.position.copy(origin);scene.add(root);
 const bell=new THREE.Group();root.add(bell);
 // A ribbed umbrella: radius widens downwards, ending in a scalloped skirt.
 const rings=28,segments=96,positions=[],colors=[],uv=[],indices=[];
 const lilac=new THREE.Color('#9485bc'),clear=new THREE.Color('#b1ddd0');
 for(let j=0;j<=rings;j++){
  const v=j/rings,theta=v*Math.PI*.50,r=Math.sin(theta)*.77,y=.72*Math.cos(theta);
  for(let i=0;i<=segments;i++){
   const a=i/segments*TAU,rib=Math.cos(a*12),rr=r*(1+.035*rib*v),skirt=j===rings?.042*Math.cos(a*12):0;
   positions.push(Math.cos(a)*rr,y+skirt,Math.sin(a)*rr);uv.push(i/segments,v);
   const c=clear.clone().lerp(lilac,.20+Math.max(0,rib)*.19+v*.18);colors.push(c.r,c.g,c.b);
   if(j<rings&&i<segments){const n=j*(segments+1)+i;indices.push(n,n+segments+1,n+1,n+1,n+segments+1,n+segments+2);}
  }
 }
 const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setAttribute('normal',new THREE.Float32BufferAttribute(new Float32Array(positions.length),3));geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(indices);geo.computeVertexNormals();
 const membrane=standard('#ffffff',{vertexColors:true,transparent:true,opacity:.40,roughness:.25,metalness:0,depthWrite:false,side:THREE.DoubleSide,emissive:'#376964',emissiveIntensity:.09});
 part(bell,geo,membrane);
 const inner=geo.clone();inner.scale(.89,.82,.89);part(bell,inner,standard('#b7cdbb',{transparent:true,opacity:.15,depthWrite:false,side:THREE.DoubleSide,roughness:.55}));
 const ribGs=[];
 for(let i=0;i<12;i++){
  const a=i/12*TAU,ps=[];for(let j=1;j<=16;j++){const theta=j/16*Math.PI*.5;ps.push([Math.cos(a)*Math.sin(theta)*.793,.725*Math.cos(theta),Math.sin(a)*Math.sin(theta)*.793]);}
  ribGs.push(path(ps,.007,20));
 }
 part(bell,combine(ribGs),standard('#c6cfcb',{transparent:true,opacity:.33,depthWrite:false,roughness:.6}));
 const organs=[];for(let i=0;i<4;i++){const a=i*Math.PI/2,g=new THREE.TorusGeometry(.14,.027,6,18);g.rotateX(Math.PI/2);g.translate(Math.cos(a)*.16,.28,Math.sin(a)*.16);organs.push(g);}
 part(bell,combine(organs),standard('#a28bc0',{transparent:true,opacity:.36,depthWrite:false,roughness:.6}));
 const strands=[];
 for(let i=0;i<12;i++){
  const a=i/12*TAU,length=1.65+(i%4)*.3,ps=[];
  for(let k=0;k<=18;k++){const q=k/18;ps.push([Math.cos(a)*.68+Math.sin(q*7+i)*q*.13,-q*length,Math.sin(a)*.68+Math.cos(q*6+i)*q*.12]);}
  strands.push(path(ps,.011,24));
 }
 const tentacleMat=standard('#a8bcc9',{transparent:true,opacity:.58,depthWrite:false,roughness:.65});
 tentacleMat.onBeforeCompile=s=>{s.uniforms.uMarineTime=timeUniform;s.vertexShader=s.vertexShader.replace('#include <common>','#include <common>\nuniform float uMarineTime;').replace('#include <begin_vertex>','#include <begin_vertex>\nfloat depth=max(0.,-position.y); transformed.x+=sin(uMarineTime*1.45+depth*2.0+position.z*3.0)*depth*.105; transformed.z+=cos(uMarineTime*1.12+depth*1.7+position.x*4.0)*depth*.085;');};
 const tentacles=part(root,combine(strands),tentacleMat);
 // Volumetric ruffled oral arms avoid overlapping transparent ribbon triangles.
 const arms=[];
 for(let i=0;i<4;i++){
  const a=i*Math.PI/2,ps=[];
  for(let k=0;k<=24;k++){const q=k/24;ps.push([Math.cos(a)*(.18+q*.18)+Math.sin(q*8+i)*.025,-q*1.55,Math.sin(a)*(.18+q*.18)+Math.cos(q*7+i)*.025]);}
  const g=path(ps,.07,72),p=g.attributes.position,n=g.attributes.normal,u=g.attributes.uv;
  for(let k=0;k<p.count;k++){const q=u.getX(k),angle=u.getY(k)*TAU;const fold=(.012+.012*Math.sin(q*Math.PI))*Math.sin(q*31+angle*3+i);p.setXYZ(k,p.getX(k)+n.getX(k)*fold,p.getY(k)+n.getY(k)*fold,p.getZ(k)+n.getZ(k)*fold);}g.computeVertexNormals();arms.push(g);
 }
 const armMat=standard('#ada7c2',{transparent:true,opacity:.48,depthWrite:false,roughness:.68});armMat.onBeforeCompile=tentacleMat.onBeforeCompile;
 part(root,combine(arms),armMat);
 const scale=.82+(index%3)*.13;root.scale.setScalar(scale);
 let pulse=0;
 function update(t){pulse=Math.sin(t*1.75+index*.72);root.position.set(origin.x+Math.sin(t*.18+index)*.32,origin.y+Math.sin(t*.55+index*.7)*.55,origin.z+Math.cos(t*.14+index)*.26);root.rotation.y=Math.sin(t*.16+index)*.18;bell.scale.set(1-pulse*.075,1+pulse*.12,1-pulse*.075);tentacles.scale.y=1-pulse*.025;}
 return {root,bell,origin,update,get pulse(){return pulse;}};
}
function turtleTexture(skin=false){
 const c=document.createElement('canvas');c.width=512;c.height=256;const ctx=c.getContext('2d');
 ctx.fillStyle=skin?'#9aa18a':'#77856e';ctx.fillRect(0,0,512,256);
 for(let i=0;i<6500;i++){const x=(i*83.174)%512,y=(i*41.631)%256,r=skin?2.2:1.2;ctx.fillStyle=i%2?'rgba(28,47,28,.07)':'rgba(204,208,161,.09)';ctx.beginPath();ctx.ellipse(x,y,r,r*.75,0,0,TAU);ctx.fill();}
 if(skin)for(let row=0;row<11;row++)for(let col=0;col<22;col++){const x=col*24+(row%2)*12,y=row*24;ctx.beginPath();ctx.ellipse(x,y,9,7,.2,0,TAU);ctx.strokeStyle='#69786170';ctx.lineWidth=1.2;ctx.stroke();}
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;
}
function makeTurtle(scene,origin,index,shellTex){
 const root=new THREE.Group();root.name='marine-turtle-'+index;scene.add(root);
 const shellMat=standard('#b1b89a',{map:shellTex,roughness:.76}),skin=standard('#bec3a6',{map:turtleTexture(true),roughness:.75}),edge=standard('#4a6355',{roughness:.8});
 part(root,new THREE.SphereGeometry(1,40,24),shellMat,0,.13,0,[1.34,.48,.85]);
 const seams=[],shellY=(x,z)=>.14+.48*Math.sqrt(Math.max(.015,1-(x/1.34)**2-(z/.85)**2));
 const outline=coords=>{const pts=[];for(let i=0;i<coords.length;i++){const a=coords[i],b=coords[(i+1)%coords.length];for(let k=0;k<5;k++){const q=k/5,x=a[0]+(b[0]-a[0])*q,z=a[1]+(b[1]-a[1])*q;pts.push([x,shellY(x,z),z]);}}pts.push(pts[0]);seams.push(path(pts,.007,coords.length*6));};
 const xs=[-1.12,-.71,-.25,.25,.71,1.12];
 for(let i=0;i<5;i++){const a=xs[i],b=xs[i+1],mid=(a+b)/2,w=i===0||i===4?.17:.23;outline([[a,0],[a+.08,-w],[mid,-w-.04],[b-.08,-w],[b,0],[b-.08,w],[mid,w+.04],[a+.08,w]]);}
 for(const side of [-1,1])for(const x of [-.78,-.26,.26,.78]){const width=.22,z=.55*Math.sqrt(1-(x/1.34)**2);outline([[x-width,side*.23],[x+width,side*.23],[x+width*.8,side*z],[x,side*(z+.07)],[x-width*.8,side*z]]);}
 part(root,combine(seams),standard('#53664f',{roughness:.88}));
 part(root,new THREE.SphereGeometry(1,24,12),standard('#b9bba0',{roughness:.8}),0,-.12,0,[1.25,.17,.76]);
 const rim=new THREE.TorusGeometry(1,.025,6,48);rim.rotateX(Math.PI/2);rim.scale(1.31,1,.82);part(root,rim,edge,0,.05,0);
 part(root,new THREE.SphereGeometry(1,20,12),skin,1.23,.04,0,[.42,.21,.23]);
 part(root,new THREE.SphereGeometry(1,24,16),skin,1.59,.07,0,[.36,.24,.27]);
 for(const side of [-1,1]){part(root,new THREE.SphereGeometry(.043,16,10),standard('#1b3431',{roughness:.35}),1.69,.13,side*.245,[1,1,.48]);part(root,path([[1.88,-.015,side*.09],[1.79,-.045,side*.17],[1.68,-.045,side*.205]],.008,12),edge);}
 const flippers=[];
 for(const side of [-1,1])for(const front of [true,false]){
  const hinge=new THREE.Group();hinge.position.set(front?.68:-.86,-.06,side*.65);root.add(hinge);
  const paddle=new THREE.SphereGeometry(1,20,12);paddle.scale(front?.72:.38,.07,front?.30:.22);paddle.rotateY(side*(front?-.64:.3));paddle.translate(front?-.15:-.13,0,side*(front?.43:.18));part(hinge,paddle,skin);
  flippers.push({hinge,side,front});
 }
 const tail=new THREE.ConeGeometry(.11,.48,10);tail.rotateZ(Math.PI/2);part(root,tail,skin,-1.36,-.08,0);
 let yaw=0,stroke=0;
 function update(t){const a=t*.10+index*1.8,rx=5.5,rz=3.3;root.position.set(origin.x+Math.sin(a)*rx,origin.y+Math.sin(t*.42+index)*.25,origin.z+Math.cos(a)*rz);yaw=Math.atan2(Math.sin(a)*rz,Math.cos(a)*rx);root.rotation.set(Math.sin(t*.42+index)*.035,yaw,Math.cos(t*.31+index)*.025);stroke=Math.sin(t*1.6+index);for(const f of flippers){f.hinge.rotation.x=f.side*stroke*(f.front?.40:.20);f.hinge.rotation.y=Math.cos(t*1.6+index)*f.side*(f.front?.13:.08);}}
 return {root,origin,flippers,update,get yaw(){return yaw;},get stroke(){return stroke;}};
}
export function createWildlife(scene,fishOrigins,jellyOrigins,environment){
 const swimmers=fishOrigins.filter(f=>!f.turtle).map((f,i)=>{
  let p=new V3(f.x,f.y,f.z);
  if(i<7)p.set(-46+i*1.35,4+i*.12,-18+i*.6);
  else if(i>=7&&i<14)p.set(12+(i-7)*.65,-12+(i-7)*.12,-54+(i-7)*.6);
  else if(i>=28)p.set(-14+(i-28)*2,2+(i-28)*.22,18+(i-28)*.7);
  p=safeEllipse(p,6.5,2.8,.85,.28,environment);
  return {...f,x:p.x,y:p.y,z:p.z};
 });
 const timeUniform={value:0},fish=fishBatches(scene,swimmers,timeUniform),shellTex=turtleTexture();
 const turtles=fishOrigins.filter(f=>f.turtle).map((f,i)=>{const original=i===1?new V3(-26,4,16):new V3(f.x,f.y,f.z);return makeTurtle(scene,safeEllipse(original,5.5,3.3,1.5,.25,environment),i,shellTex);});
 const jelly=jellyOrigins.map((p,i)=>{const original=new V3(29+(i%4)*5,-6+(i%3)*.55,-76-Math.floor(i/4)*3);return makeJelly(scene,safeEllipse(original,.32,.26,.8,.55,environment,2.4),i,timeUniform);});
 function update(time){timeUniform.value=time;fish.update(time);for(const j of jelly)j.update(time);for(const t of turtles)t.update(time);}
 function snapshot(){return {counts:{fish:fish.states.length,jellyfish:jelly.length,turtles:turtles.length},fishBatches:fish.batches.length,animalSprites:0,fish:fish.states.map(f=>({id:f.id,position:f.position.toArray(),yaw:f.yaw,tailAngle:f.tailAngle,scale:f.scale})),jellyfish:jelly.map((j,i)=>({id:i,position:j.root.position.toArray(),bellScale:j.bell.scale.toArray(),pulse:j.pulse})),turtles:turtles.map((t,i)=>({id:i,position:t.root.position.toArray(),yaw:t.yaw,stroke:t.stroke,flippers:t.flippers.map(f=>f.hinge.rotation.x)}))};}
 function focus(kind,index=0){const animal=kind==='fish'?fish.states[index]:kind==='jellyfish'?jelly[index]:turtles[index];return kind==='fish'?animal.position.clone():animal.root.position.clone();}
 update(0);return {update,snapshot,focus};
}
