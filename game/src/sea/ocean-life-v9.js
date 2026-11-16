import * as THREE from 'three';
import {sailSkate,combGlider,ventCrown,ellipsoidDistance,pigment,pigmentMat,part,tube} from './alien-life-v9.js';
const V3=THREE.Vector3,TAU=Math.PI*2;
const zone=p=>p.x>23&&p.z<=-74?'cave':p.z<-80?'customs':p.x>6&&p.x<31&&p.z<8?'wreck':p.x<-22&&p.z<-8?'kelp':'entry';
function safeRoute(origin,rx,rz,r,bob,region,env){
 let floorClearance=Infinity,rockClearance=Infinity;
 for(let i=0;i<144;i++){
  const a=i/144*TAU,x=origin.x+Math.sin(a)*rx,z=origin.z+Math.cos(a)*rz;
  if(x-r<-69||x+r>69||z-r<-133||z+r>35||origin.y+bob+r>10.8)return null;
  for(const dx of [-r,0,r])for(const dz of [-r,0,r])if(zone({x:x+dx,z:z+dz})!==region)return null;
  for(let ring=0;ring<5;ring++)for(let k=0;k<24;k++){
   const rr=r*ring/4,b=k/24*TAU,dx=Math.cos(b)*rr,dz=Math.sin(b)*rr;
   const d=origin.y-bob-Math.sqrt(Math.max(0,r*r-dx*dx-dz*dz))-env.floor(x+dx,z+dz);floorClearance=Math.min(floorClearance,d);if(d<.32)return null;
  }
  for(const rock of env.rocks){const d=ellipsoidDistance(x,origin.y,z,rock)-r-bob;rockClearance=Math.min(rockClearance,d);if(d<.32)return null;}
 }
 return {floorClearance,rockClearance};
}
function route(base,rx,rz,r,bob,region,env){
 for(const rise of [0,1,-1,2,-2,3])for(const dx of [0,-2,2,-4,4])for(const dz of [0,-2,2,-4,4]){
  const origin=new V3(...base).add(new V3(dx,rise,dz)),s=safeRoute(origin,rx,rz,r,bob,region,env);
  if(s)return {origin,rx,rz,r,bob,safety:s};
 }
 throw new Error(region+'生物没有安全航线: '+base);
}
function move(root,s,t,phase,rate=.14){
 const a=t*rate+phase;root.position.set(s.origin.x+Math.sin(a)*s.rx,s.origin.y+Math.sin(t*.38+phase)*s.bob,s.origin.z+Math.cos(a)*s.rz);
 const yaw=Math.atan2(Math.sin(a)*s.rz,Math.cos(a)*s.rx);root.rotation.set(0,yaw,Math.sin(a)*.035);return yaw;
}
function leafWeaver(root,state,index){
 const body=pigmentMat(.055,{roughness:.49}),leaf=pigmentMat(.11,{roughness:.48}),vein=pigmentMat(.30,{roughness:.52}),hinges=[];
 part(root,pigment(new THREE.SphereGeometry(1,28,16),[[0,'#386291'],[.45,'#79ad89'],[1,'#d5c685']],(x,y,z)=>(y+1)/2),body,[0,0,0],[1.42,.21,.25]);
 for(const side of [-1,1])for(let i=0;i<6;i++){
  const g=new THREE.Group();g.position.set(-1.0+i*.38,.03,side*.19);root.add(g);
  const shape=new THREE.SphereGeometry(1,16,10);shape.scale(.23,.035,.55);
  pigment(shape,[[0,'#388985'],[.55,index?'#749dc0':'#93b58a'],[1,index?'#c893c4':'#d6c989']],(x,y,z)=>(side*z+.55)/1.1);part(g,shape,leaf,[0,0,side*.35]);
  part(g,pigment(tube([[0,.04,0],[0,.05,side*.35],[.04,.035,side*.78]],.008),[[0,'#76b69b'],[1,'#e2ce9a']],(x,y,z)=>Math.abs(z)/.78),vein);hinges.push({g,i,side});
 }
 const pores=new THREE.MeshStandardMaterial({color:'#233d55',roughness:.65});for(const side of [-1,1])part(root,new THREE.SphereGeometry(.035,10,6),pores,[1.21,.065,side*.15],[1,.5,1]);
 let yaw=0;return {root,state,kind:'leaf',radius:state.r,update(t){yaw=move(root,state,t,index*2+.4);for(const h of hinges)h.g.rotation.x=h.side*(.1+Math.sin(t*1.75-h.i*.68+index)*.30);},snapshot(){return {kind:'leaf',id:index,position:root.position.toArray(),yaw,leafAngles:hinges.map(h=>h.g.rotation.x),radius:state.r};}};
}
function lanternDrifter(root,state,index){
 const shell=pigmentMat(.16,{roughness:.33,transparent:true,opacity:.57,depthWrite:false,side:THREE.DoubleSide}),vein=pigmentMat(.48,{roughness:.43}),core=pigmentMat(.48,{roughness:.35}),threads=pigmentMat(.35,{roughness:.5}),arms=[];
 const bell=part(root,pigment(new THREE.SphereGeometry(1,30,20),[[0,'#296f9b'],[.45,'#5973b8'],[.8,index?'#ba72aa':'#8e7bcc'],[1,'#dcacc2']],(x,y,z)=>(y+1)/2),shell,[0,.2,0],[.83,.88,.72]);
 part(root,pigment(new THREE.SphereGeometry(1,22,14),[[0,'#efbf83'],[.5,'#dc8ab0'],[1,'#85dcda']],(x,y,z)=>(y+1)/2),core,[0,.18,0],[.34,.46,.30]);
 for(let i=0;i<3;i++){const g=new THREE.TorusGeometry(.68-i*.08,.013,6,32);g.rotateX(Math.PI/2);part(root,pigment(g,[[0,'#86d8d6'],[1,'#d59dc5']],(x,y,z)=>(x+.7)/1.4),vein,[0,-.06+i*.29,0]);}
 for(let i=0;i<6;i++){
  const a=i/6*TAU,g=new THREE.Group();g.position.set(Math.cos(a)*.46,-.35,Math.sin(a)*.46);root.add(g);
  const points=[];for(let j=0;j<8;j++)points.push([Math.cos(a)*j*.045,-j*.205,Math.sin(a)*j*.045+Math.sin(j*.7+i)*.05]);
  part(g,pigment(tube(points,.016),[[0,'#77c8d1'],[.58,'#ac87cc'],[1,'#efa8af']],(x,y,z)=>-y/1.44),threads);arms.push({g,i});
 }
 let pulse=0,yaw=0;return {root,state,kind:'lantern',radius:state.r,update(t){yaw=move(root,state,t,index*2.1+.9,.095);pulse=Math.sin(t*1.1+index*1.8);bell.scale.set(.83*(1+pulse*.055),.88*(1-pulse*.035),.72*(1+pulse*.055));for(const arm of arms){arm.g.rotation.x=Math.sin(t*.9+arm.i*.65)*.11;arm.g.rotation.z=Math.sin(t*.9+arm.i*.65+.8)*.11;}},snapshot(){return {kind:'lantern',id:index,position:root.position.toArray(),yaw,pulse,armAngles:arms.map(a=>[a.g.rotation.x,a.g.rotation.z]),radius:state.r};}};
}
export function createOceanLife(parent,env){
 const time={value:0},animals=[],safetyRecords=[];
 const add=(region,kind,id)=>{const root=new THREE.Group();root.name=`ocean-alien-${region}-${kind}-${id}`;root.userData.region=region;parent.add(root);return root;};
 function swimmer(region,kind,id,base,rx=1.6,rz=1.9){
  const r={sail:3.14,comb:1.75,leaf:1.90,lantern:2.30}[kind],s=route(base,rx,rz,r,.22,region,env),root=add(region,kind,id);
  const a=kind==='sail'?sailSkate(root,s,id%2,time):kind==='comb'?combGlider(root,s,id%3,time):kind==='leaf'?leafWeaver(root,s,id):lanternDrifter(root,s,id);
  a.region=region;a.id=id;a.cullRadius=r;animals.push(a);safetyRecords.push({region,kind,id,...s.safety,origin:s.origin.toArray(),radius:r,route:[rx,rz],bob:s.bob});
 }
 swimmer('entry','sail',0,[-15,-.5,18]);swimmer('entry','comb',0,[-27,-1,17]);swimmer('entry','comb',1,[15,-1,23]);
 swimmer('kelp','sail',1,[-44,4,-38]);swimmer('kelp','leaf',0,[-44,1,-17]);swimmer('kelp','leaf',1,[-44,2,-49]);
 swimmer('cave','comb',2,[37,-13,-82],1,1.2);swimmer('cave','lantern',0,[35,-13.5,-96],1,1.4);swimmer('cave','lantern',1,[37,-13.5,-112],1,1.4);
 swimmer('customs','sail',0,[-10,3,-117]);swimmer('customs','comb',1,[-18,1,-105]);swimmer('customs','comb',2,[4,2,-121]);
 const grids={entry:{xs:[-23,-31,-18,2,12,23],zs:[25,19,12],count:4},kelp:{xs:[-44,-47,-40,-50],zs:[-15,-23,-33,-43,-49],count:4},cave:{xs:[33,38,35,40],zs:[-91,-103,-115,-97,-109],count:5},customs:{xs:[-18,-12,-6,0,5],zs:[-96,-108,-119,-129],count:4}};
 for(const [region,grid] of Object.entries(grids)){
  let n=0;
  for(const z of grid.zs)for(const x of grid.xs){
   if(n===grid.count)continue;const y=env.floor(x,z),p=new V3(x,y+.12,z),r=.75;
   if(zone(p)!==region||Math.abs(env.floor(x+r,z)-env.floor(x-r,z))>.55||Math.abs(env.floor(x,z+r)-env.floor(x,z-r))>.55)continue;
   if(env.objects.some(o=>p.distanceTo(o.position)<2.6)||env.rocks.some(b=>ellipsoidDistance(x,y+.55,z,b)<.95))continue;
   const root=add(region,'crown',n),a=ventCrown(root,p,n%5);a.region=region;a.id=n;a.cullRadius=1.5;animals.push(a);safetyRecords.push({region,kind:'crown',id:n,position:p.toArray(),maxAboveFloor:1.2});n++;
  }
  if(n!==grid.count)throw new Error(region+'冠体安全附着点不足 '+n);
 }
 const eye=new V3(),forward=new V3(),delta=new V3();
 function update(t,camera,far=155){
  time.value=t;if(camera){camera.getWorldPosition(eye);camera.getWorldDirection(forward);}
  for(const a of animals){a.update(t);if(camera){
   // Fog is based on view-space depth, not radial distance. A whole animal
   // is removed only beyond the fog far plane, including its full envelope.
   const depth=delta.copy(a.root.position).sub(eye).dot(forward);
   a.root.visible=depth<far+a.cullRadius+2&&depth>-a.cullRadius-2;
  }}
 }
 function snapshot(){const counts={};for(const a of animals)counts[a.region]=(counts[a.region]||0)+1;return {counts,total:animals.length,sprites:0,animals:animals.map(a=>({...a.snapshot(),id:a.id,region:a.region,visible:a.root.visible}))};}
 function at(t){const old=time.value;update(t);const s=snapshot();update(old);return s;}
 function focus(region,kind,id=0){const a=animals.find(a=>a.region===region&&a.kind===kind&&a.id===id);if(!a)throw new Error('未找到区域生物');a.root.visible=true;return a.root.position.clone();}
 function envelopes(){
  const old=time.value,v=new V3(),inv=new THREE.Matrix4(),records=animals.map(a=>({region:a.region,kind:a.kind,id:a.id,radiusLimit:a.radius,maxActualRadius:0,maxAboveFloor:0,vertexSamples:0}));
  for(const t of [0,.8,1.7,3.2,6.4,9.6]){update(t);parent.updateMatrixWorld(true);animals.forEach((a,i)=>{const r=records[i];inv.copy(a.root.matrixWorld).invert();a.root.traverse(o=>{
   if(!o.isMesh)return;const p=o.geometry.attributes.position;for(let k=0;k<p.count;k++){v.fromBufferAttribute(p,k);if(o.userData.alienMembrane){const d=.36*Math.pow(Math.abs(v.z)/2.85,1.25);v.y+=(v.y<0?-1:1)*d;}v.applyMatrix4(o.matrixWorld);r.maxAboveFloor=Math.max(r.maxAboveFloor,v.y-env.floor(v.x,v.z));v.applyMatrix4(inv);r.maxActualRadius=Math.max(r.maxActualRadius,v.length());r.vertexSamples++;}
  });});}
  update(old);parent.updateMatrixWorld(true);return records;
 }
 update(0);return {update,snapshot,at,focus,safety:()=>safetyRecords,envelopes};
}
