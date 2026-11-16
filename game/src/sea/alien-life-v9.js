import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
const V3=THREE.Vector3,Y=new V3(0,1,0),TAU=Math.PI*2;
const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.66,metalness:.035,...extra});
// Local-space pigment gradients follow the existing meshes. No new geometry,
// light, motion or route is introduced; faint native emission retains pigment
// colour in the dark water without turning the whole animal into a neon lamp.
function pigment(g,stops,coordinate){
 const p=g.attributes.position,colors=new Float32Array(p.count*3),palette=stops.map(([at,hex])=>[at,new THREE.Color(hex)]),c=new THREE.Color();
 for(let i=0;i<p.count;i++){
  const t=THREE.MathUtils.clamp(coordinate(p.getX(i),p.getY(i),p.getZ(i)),0,1);let k=0;
  while(k<palette.length-2&&t>palette[k+1][0])k++;
  const a=palette[k],b=palette[k+1],q=THREE.MathUtils.clamp((t-a[0])/(b[0]-a[0]),0,1);
  c.copy(a[1]).lerp(b[1],q*q*(3-2*q));c.toArray(colors,i*3);
 }
 g.setAttribute('color',new THREE.BufferAttribute(colors,3));return g;
}
function pigmentMat(glow,extra={}){
 const m=mat('#ffffff',{vertexColors:true,emissive:'#ffffff',emissiveIntensity:glow,...extra});
 m.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\n#ifdef USE_COLOR\ntotalEmissiveRadiance*=vColor;\n#endif');};return m;
}
function part(root,geo,m,pos=[0,0,0],scale=null){const o=new THREE.Mesh(geo,m);o.position.set(...pos);if(scale)o.scale.set(...scale);root.add(o);return o;}
function tube(points,r=.014){return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new V3(...p))),36,r,5,false);}
function merge(gs){return mergeGeometries(gs.map(g=>{const x=g.index?g.toNonIndexed():g.clone();x.deleteAttribute('uv');return x;}));}
function ellipsoidDistance(x,y,z,b){
 const q=[Math.abs(x-b.x),Math.abs(y-b.y),Math.abs(z-b.z)],a=[b.rx,b.ry,b.rz],a2=a.map(n=>n*n);
 if(q.reduce((s,n,i)=>s+n*n/a2[i],0)<=1)return 0;
 const constraint=l=>q.reduce((s,n,i)=>s+(a[i]*n/(l+a2[i]))**2,0);
 let lo=0,hi=Math.max(...a)*Math.hypot(...q);while(constraint(hi)>1)hi*=2;
 for(let i=0;i<32;i++){const m=(lo+hi)/2;if(constraint(m)>1)lo=m;else hi=m;}
 return Math.hypot(...q.map((n,i)=>n-a2[i]*n/(hi+a2[i])));
}
function candidateSafe(p,rx,rz,r,bob,env){
 // Swept conservative sphere encloses the complete animal, including displaced
 // membranes, appendages and tail. Terrain checked across its full disk, not just
 // below the centre. Exact point-to-ellipsoid distance rejects intersections;
 // merely adding the radius to each ellipsoid axis is NOT conservative.
 let minFloor=Infinity,minRock=Infinity;
 for(let i=0;i<192;i++){
  const a=i/192*TAU,x=p.x+Math.sin(a)*rx,z=p.z+Math.cos(a)*rz;
  if(x-r<8||x+r>29||z-r<-75||z+r>-30||p.y+bob+r>-.7)return null;
  for(let ring=0;ring<=4;ring++)for(let k=0;k<24;k++){
   const q=ring/4,angle=k/24*TAU,dx=Math.cos(angle)*r*q,dz=Math.sin(angle)*r*q;
   const bottom=p.y-bob-Math.sqrt(Math.max(0,r*r-dx*dx-dz*dz));
   const gap=bottom-env.floor(x+dx,z+dz);minFloor=Math.min(minFloor,gap);if(gap<.28)return null;
  }
  for(const b of env.rocks){const d=ellipsoidDistance(x,p.y,z,b)-r-bob;minRock=Math.min(minRock,d);if(d<.28)return null;}
 }
 return {floorClearance:minFloor,rockClearance:minRock};
}
function route(origin,rx,rz,r,bob,env){
 for(const rise of [0,1.5,3])for(const dz of [0,-2,2,-4,4])for(const dx of [0,-1.5,1.5,-3,3]){
  const p=origin.clone().add(new V3(dx,rise,dz)),safety=candidateSafe(p,rx,rz,r,bob,env);
  if(safety)return {origin:p,rx,rz,r,bob,safety};
 }
 throw new Error('原创生物没有完整身体净空的峡谷航线');
}
function pathState(root,state,t,rate,phase){const a=t*rate+phase;root.position.set(state.origin.x+Math.sin(a)*state.rx,state.origin.y+Math.sin(t*.4+phase)*state.bob,state.origin.z+Math.cos(a)*state.rz);const yaw=Math.atan2(Math.sin(a)*state.rz,Math.cos(a)*state.rx);root.rotation.set(Math.sin(t*.3+phase)*.025,yaw,Math.sin(a)*.035);return yaw;}
function sailSkate(root,state,index,time){
 const wingStops=index===0?[[0,'#37bda8'],[.30,'#3189bd'],[.66,'#6653b6'],[.88,'#af5c98'],[1,'#ec967b']]:[[0,'#79c59b'],[.30,'#319aaf'],[.66,'#40569c'],[.88,'#8461ad'],[1,'#d989b3']];
 const skin=pigmentMat(.11,{roughness:.49}),body=pigmentMat(.045,{roughness:.64}),trim=pigmentMat(.75,{roughness:.48});
 const deform=s=>{s.uniforms.uAlienTime=time;s.uniforms.uAlienPhase={value:index*1.7};s.vertexShader=s.vertexShader.replace('#include <common>','#include <common>\nuniform float uAlienTime,uAlienPhase;').replace('#include <begin_vertex>','#include <begin_vertex>\nfloat span=abs(position.z)/2.85;transformed.y+=sin(uAlienTime*1.35-span*2.6+position.x*.45+uAlienPhase)*pow(span,1.25)*.36;');};
 for(const m of [skin,trim]){const old=m.onBeforeCompile;m.onBeforeCompile=s=>{old(s);deform(s);};}
 part(root,pigment(new THREE.SphereGeometry(1,36,20),[[0,'#315775'],[.45,'#bd9369'],[.72,'#e3c38b'],[1,'#f2dfb2']],(x,y,z)=>(y+1)/2),body,[0,0,0],[1.72,.28,.39]);
 // Four recessed chemoreceptor pores, not an oversized cartoon fish face.
 for(const side of [-1,1])for(let i=0;i<2;i++)part(root,new THREE.SphereGeometry(.058,12,8),mat('#233d43'),[1.40-i*.12,.08,side*(.24+i*.05)],[1,.4,1]);
 const veins=[];
 for(const side of [-1,1]){
  const ps=[],uv=[],ix=[],rows=14,cols=32;
  for(let u=0;u<=rows;u++)for(let v=0;v<=cols;v++){
   const q=u/rows,w=v/cols,chord=Math.max(.025,Math.pow(1-q,.72));
   ps.push((-1.55+3.05*w)*chord-q*.58,.08*Math.sin(w*Math.PI)-q*.1,side*(.24+q*2.61));uv.push(w,q);
   if(u<rows&&v<cols){const n=u*(cols+1)+v;ix.push(n,n+1,n+cols+1,n+1,n+cols+2,n+cols+1);}
  }
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(ps,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(ix);g.computeVertexNormals();pigment(g,wingStops,(x,y,z)=>(Math.abs(z)-.24)/2.61+.025*Math.sin(x*5));const wing=part(root,g,skin);wing.material.side=THREE.DoubleSide;
  const depth=new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking,side:THREE.DoubleSide});depth.onBeforeCompile=deform;wing.customDepthMaterial=depth;
  for(const w of [.18,.46,.75]){const points=[];for(let j=0;j<=16;j++){const q=j/16,chord=Math.max(.025,Math.pow(1-q,.72));points.push([(-1.55+3.05*w)*chord-q*.58,.025+.08*Math.sin(w*Math.PI)-q*.1,side*(.24+q*2.61)]);}veins.push(tube(points,.010));}
  const gill=[];for(let j=0;j<9;j++){const x=-.85+j*.17;gill.push(tube([[x,-.15,side*.30],[x-.04,-.21,side*.41],[x-.12,-.24,side*.36]],.012));}part(root,merge(gill),mat(index===0?'#984e67':'#5179a0'));
 }
 part(root,pigment(merge(veins),[[0,'#7be6be'],[.58,'#8fa5ef'],[1,index===0?'#f6c08c':'#efa3c7']],(x,y,z)=>Math.abs(z)/2.85),trim);
 const tail=tube([[-1.4,0,0],[-1.95,-.05,0],[-2.35,-.13,.10],[-2.64,-.1,.08]],.045);pigment(tail,[[0,'#397eae'],[1,'#c688bc']],(x,y,z)=>(-x-1.4)/1.3);part(root,tail,skin);
 root.traverse(o=>{if(o.isMesh&&(o.material===skin||o.material===trim))o.userData.alienMembrane=true;});
 let yaw=0;
 return {root,state,kind:'sail',radius:state.r,update(t){yaw=pathState(root,state,t,.12,index*2.2);},snapshot(){return {kind:'sail',id:index,position:root.position.toArray(),yaw,finPhase:Math.sin(time.value*1.35+index*1.7),radius:state.r};}};
}
function combGlider(root,state,index,time){
 const spectrum=['#69d9c6','#72bdea','#9882db','#d57ebb','#ef9c9a','#e9be77'];
 const shell=pigmentMat(.075,{roughness:.36,transparent:true,opacity:.72,depthWrite:false,side:THREE.DoubleSide}),core=mat(['#d69c67','#bd7a93','#98ad6b'][index],{roughness:.45}),rib=pigmentMat(.68),paddles=[];
 part(root,pigment(new THREE.SphereGeometry(1,32,18),[[0,'#4189a5'],[.48,'#6e75bd'],[1,'#b186c7']],(x,y,z)=>(y+1)/2),shell,[0,0,0],[1.14,.32,.33]);
 part(root,new THREE.SphereGeometry(1,28,16),core,[.12,0,0],[.89,.13,.16]);
 const rings=[];
 for(let i=0;i<10;i++){const x=-.92+i*.18,r=.29*Math.sqrt(Math.max(.05,1-(x/1.14)**2)),g=new THREE.TorusGeometry(r,.009,5,24);g.rotateY(Math.PI/2);g.scale(1,.95,1);g.translate(x,0,0);pigment(g,[[0,spectrum[(i+index)%6]],[1,spectrum[(i+index)%6]]],()=>0);rings.push(g);}part(root,merge(rings),rib);
 // Twenty-two true 3D paddles propagate a rearward metachronal wave. These are
 // individually hinged volumes, not a recoloured fish tail or a jelly umbrella.
 const finMat=pigmentMat(.16,{roughness:.5});
 for(const side of [-1,1])for(let i=0;i<11;i++){
  const x=-.88+i*.17,g=new THREE.Group();g.position.set(x,.03,side*.25);root.add(g);const shape=new THREE.SphereGeometry(1,12,8);shape.scale(.095,.025,.32);const color=spectrum[Math.min(5,Math.floor(i/2))];pigment(shape,[[0,'#425384'],[.36,color],[1,color]],(x,y,z)=>(z*side+.32)/.64);part(g,shape,finMat,[0,0,side*.20]);paddles.push({g,side,i});
 }
 const tentacles=[];for(const side of [-1,1])tentacles.push(tube([[.9,.08,side*.14],[1.17,.11,side*.22],[1.40,.12,side*.3],[1.53,.08,side*.26]],.014));part(root,pigment(merge(tentacles),[[0,'#84dfcc'],[1,'#f0c887']],(x,y,z)=>(x-.9)/.63),rib);
 let yaw=0;
 return {root,state,kind:'comb',radius:state.r,update(t){yaw=pathState(root,state,t,.17,index*1.8+.7);for(const p of paddles)p.g.rotation.x=p.side*(.12+Math.sin(t*3.7-p.i*.58+index)*.54);},snapshot(){return {kind:'comb',id:index,position:root.position.toArray(),yaw,paddleAngles:paddles.map(p=>p.g.rotation.x),radius:state.r};}};
}
function ventCrown(root,p,index){
 const palettes=[['#8a58a5','#d45b8e','#f4ab6b'],['#5869a4','#df7962','#f0c881'],['#8d5591','#bd5d93','#f5a798'],['#456f92','#da925e','#f2d493'],['#68559e','#cc657e','#edb979']];
 const [inner,mid,tip]=palettes[index],base=mat('#536b83',{roughness:.9}),crown=pigmentMat(.35,{roughness:.54}),inside=mat('#e9c273',{roughness:.57,emissive:'#c7994b',emissiveIntensity:.20});
 part(root,tube([[0,0,0],[.08,.22,.02],[.04,.47,-.03],[0,.65,0]],.11),base);
 const petals=[];
 for(let i=0;i<8;i++){
  const a=i/8*TAU,g=new THREE.Group();g.position.set(0,.63,0);g.rotation.y=a;root.add(g);const shape=new THREE.SphereGeometry(1,18,12);shape.scale(.14,.12,.34);pigment(shape,[[0,inner],[.5,mid],[1,i%2?tip:'#f0b6aa']],(x,y,z)=>(z+.34)/.68);part(g,shape,crown,[0,.09,.24]);part(g,tube([[0,.13,.02],[0,.18,.28],[0,.1,.52]],.012),inside);petals.push(g);
 }
 part(root,new THREE.SphereGeometry(.14,20,12),inside,[0,.66,0],[1,.5,1]);root.position.copy(p);
 let pulse=0;
 return {root,kind:'crown',radius:.65,update(t){pulse=Math.sin(t*.85+index*1.3);for(const petal of petals)petal.rotation.x=-.25+pulse*.19;},snapshot(){return {kind:'crown',id:index,position:root.position.toArray(),opening:pulse,petalAngles:petals.map(g=>g.rotation.x),heightEnvelope:1.08};}};
}
export function createAlienLife(parent,environment){
 const time={value:0},animals=[],safetyRecords=[];
 const add=(name)=>{const root=new THREE.Group();root.name='alien-'+name;parent.add(root);return root;};
 const starts=[new V3(16,-11,-40),new V3(18,-11,-65)];
 starts.forEach((p,i)=>{const s=route(p,1.3,1.5,3.14,.22,environment);safetyRecords.push({kind:'sail',id:i,...s.safety,origin:s.origin.toArray(),radius:s.r,route:[s.rx,s.rz],bob:s.bob});animals.push(sailSkate(add('sail-'+i),s,i,time));});
 [new V3(12,-16,-39),new V3(23,-15,-66),new V3(16,-15,-69)].forEach((p,i)=>{const s=route(p,1.1,1.3,1.75,.22,environment);safetyRecords.push({kind:'comb',id:i,...s.safety,origin:s.origin.toArray(),radius:s.r,route:[s.rx,s.rz],bob:s.bob});animals.push(combGlider(add('comb-'+i),s,i,time));});
 const anchors=[];
 for(const z of [-31,-34,-72,-69,-66,-42,-45])for(const x of [17,19,15,21]){
  if(anchors.length===5)break;const y=environment.floor(x,z),p=new V3(x,y+.12,z);
  if(Math.abs(environment.floor(x+.65,z)-environment.floor(x-.65,z))>.55||Math.abs(environment.floor(x,z+.65)-environment.floor(x,z-.65))>.55)continue;
  if(environment.objects.some(o=>p.distanceTo(o.position)<2.6))continue;
  if(environment.rocks.some(b=>((x-b.x)/(b.rx+.8))**2+((y+.7-b.y)/(b.ry+.9))**2+((z-b.z)/(b.rz+.8))**2<1))continue;
  const i=anchors.length;anchors.push(p);animals.push(ventCrown(add('crown-'+i),p,i));safetyRecords.push({kind:'crown',id:i,position:p.toArray(),maxAboveFloor:1.2,belowPlayerFloorClearance:true});
 }
 if(anchors.length!==5)throw new Error('海床冠体附着点不足');
 function update(t){time.value=t;animals.forEach(a=>a.update(t));}
 function snapshot(){return {counts:{sail:2,comb:3,crown:5},sprites:0,animals:animals.map(a=>a.snapshot())};}
 function at(t){const old=time.value;update(t);const s=snapshot();update(old);return s;}
 function focus(kind,index=0){return animals.filter(a=>a.kind===kind)[index].root.position.clone();}
 function safety(){return safetyRecords;}
 function envelopes(){
  const old=time.value,results=animals.map(a=>({kind:a.kind,id:a.snapshot().id,radiusLimit:a.radius,maxActualRadius:0,maxAboveFloor:0,vertexSamples:0})),v=new V3(),inv=new THREE.Matrix4();
  for(const t of [0,.8,1.7,3.2,6.4,9.6]){
   update(t);parent.updateMatrixWorld(true);
   animals.forEach((a,i)=>{const r=results[i];inv.copy(a.root.matrixWorld).invert();a.root.traverse(o=>{
    if(!o.isMesh)return;const p=o.geometry.attributes.position;
    for(let k=0;k<p.count;k++){
     v.fromBufferAttribute(p,k);if(o.userData.alienMembrane){const d=.36*Math.pow(Math.abs(v.z)/2.85,1.25);v.y+=(v.y<0?-1:1)*d;}
     v.applyMatrix4(o.matrixWorld);r.maxAboveFloor=Math.max(r.maxAboveFloor,v.y-environment.floor(v.x,v.z));v.applyMatrix4(inv);r.maxActualRadius=Math.max(r.maxActualRadius,v.length());r.vertexSamples++;
    }
   });});
  }
  update(old);parent.updateMatrixWorld(true);return results;
 }
 update(0);return {update,snapshot,at,focus,safety,envelopes};
}
// Shared colour-approved geometry; original canyon creation stays byte-for-byte.
export {sailSkate,combGlider,ventCrown,ellipsoidDistance,pigment,pigmentMat,part,tube};
