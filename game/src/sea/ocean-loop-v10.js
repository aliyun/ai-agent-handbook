import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { sailSkate, combGlider } from './alien-life-v9.js';

// A finite resource pool represents an endless periodic ocean. Coordinates used
// by rendering stay small; the voyage's logical cell indices are never clamped.
export const OCEAN_PERIOD = Object.freeze({x:220,z:260,centerZ:-49,surface:128});
export const PEAKS = Object.freeze([
 {id:'east',name:'层叠高礁',x:85,z:-35,rx:24,rz:33,height:70},
 {id:'west',name:'蓝岩高脊',x:-85,z:-105,rx:24,rz:30,height:62},
 {id:'north',name:'珊瑚冠丘',x:35,z:57,rx:30,rz:24,height:50},
 {id:'south',name:'深蓝石峰',x:-25,z:-167,rx:28,rz:23,height:56}
]);
export const wrap=(n,size,center=0)=>n-size*Math.floor((n-center+size/2)/size);
export function oceanLocal(p){return {x:wrap(p.x,220),y:p.y,z:wrap(p.z,260,-49)};}
const smooth=(a,b,n)=>{const t=THREE.MathUtils.clamp((n-a)/(b-a),0,1);return t*t*(3-2*t);};
export function originalFloor(x,z){
 const base=-7.2+.62*Math.sin(x*.19)*Math.cos(z*.13)+.45*Math.sin(z*.22+x*.1);
 const a=14*Math.exp(-(((x-16)/7.7)**4)-(((z+12)/27)**4));
 const b=20*Math.exp(-(((x-18)/10.2)**4)-(((z+57)/41)**4));
 const c=13*Math.exp(-(((x-36)/16)**4)-(((z+101)/25)**4));
 return base-Math.max(a,b,c);
}
export function oceanFloor(x,z){
 const p=oceanLocal({x,z}),u=p.x,v=p.z;
 // Blend to a truly periodic base BEFORE tile edges, including first derivatives.
 const edge=Math.max(smooth(88,104,Math.abs(u)),smooth(102,124,Math.abs(v+49)));
 const base=-7.2+.65*Math.sin(u*Math.PI*8/220)*Math.cos((v+49)*Math.PI*6/260)+.35*Math.sin(u*Math.PI*4/220+(v+49)*Math.PI*8/260);
 const central=originalFloor(u,v)*(1-edge)+base*edge;
 const outside=Math.max(smooth(70,77,Math.abs(u)),smooth(36,44,v),1-smooth(-154,-146,v));
 let relief=0;
 for(const peak of PEAKS){
  const dx=wrap(u-peak.x,220)/peak.rx,dz=wrap(v-peak.z,260)/peak.rz;
  const q=(dx*dx+dz*dz)*(1+.065*Math.sin(dx*12+dz*4)*Math.cos(dz*9-dx*3));
  if(q<1){const rim=1-q;const dome=rim*rim*(3-2*rim);relief=Math.max(relief,peak.height*dome);}
 }
 return central+relief*outside;
}
export function nearestImage(p,eye,out=new THREE.Vector3()){
 return out.set(eye.x+wrap(p.x-eye.x,220),p.y,eye.z+wrap(p.z-eye.z,260));
}
export function addTerrainChunks(scene,source,material){
 // Slice the existing sampled heightfield, including its already-computed normals.
 // Sharing border vertices' values keeps lighting continuous across chunk seams.
 const nx=220,nz=260,stride=nx+1;
 for(let z=0;z<nz;z+=20)for(let x=0;x<nx;x+=20){
  const w=Math.min(20,nx-x),h=Math.min(20,nz-z),g=new THREE.BufferGeometry();
  for(const [name,a] of Object.entries(source.attributes)){
   const data=new Float32Array((w+1)*(h+1)*a.itemSize);let n=0;
   for(let j=0;j<=h;j++)for(let i=0;i<=w;i++){
    const index=((z+j)*stride+x+i)*a.itemSize;
    for(let k=0;k<a.itemSize;k++)data[n++]=a.array[index+k];
   }
   g.setAttribute(name,new THREE.BufferAttribute(data,a.itemSize));
  }
  const indices=[];
  for(let j=0;j<h;j++)for(let i=0;i<w;i++){const a=j*(w+1)+i,b=a+w+1;indices.push(a,b,a+1,b,b+1,a+1);}
  g.setIndex(indices);g.computeBoundingSphere();
  const m=new THREE.Mesh(g,material);m.name='loop-terrain-chunk';m.userData.loopTerrain=true;scene.add(m);
 }
 source.dispose();
}
export function addHighSea(scene,floor,rockTexture){
 const root=new THREE.Group();root.name='high-sea-life-v10';scene.add(root);
 const time={value:0},animals=[];
 for(let i=0;i<PEAKS.length;i++){
  const p=PEAKS[i],r=i%2?1.75:3.14,rx=5,rz=6,bob=.22;
  let clearance=-Infinity;
  // Full-body terrain clearance, not a centre-only height estimate.
  for(let a=0;a<192;a++)for(let ring=0;ring<=4;ring++)for(let k=0;k<24;k++){
   const angle=a*Math.PI*2/192,b=k*Math.PI*2/24,d=r*ring/4;
   clearance=Math.max(clearance,floor(p.x+Math.sin(angle)*rx+Math.cos(b)*d,p.z+Math.cos(angle)*rz+Math.sin(b)*d)+Math.sqrt(Math.max(0,r*r-d*d)));
  }
  const state={origin:new THREE.Vector3(p.x,clearance+bob+1.5,p.z),rx,rz,r,bob};
  const g=new THREE.Group();g.name='high-sea-swimmer-'+i;root.add(g);
  const a=i%2?combGlider(g,state,i%3,time):sailSkate(g,state,i%2,time);animals.push(a);
 }
 // Low, real coral crowns on high ledges; no invisible blocking geometry.
 const material=new THREE.MeshStandardMaterial({color:'#adb1bc',roughness:.88,map:rockTexture,emissive:'#2c5067',emissiveIntensity:.08});
 const geo=new THREE.IcosahedronGeometry(1,1),stones=new THREE.InstancedMesh(geo,material,180),d=new THREE.Object3D();stones.name='high-sea-ledge-stones';scene.add(stones);
 let index=0;
 for(const p of PEAKS)for(let i=0;i<45;i++){
  const a=i*2.399963,r=.23+.55*((i*17)%45)/45,x=p.x+Math.cos(a)*p.rx*r,z=p.z+Math.sin(a)*p.rz*r,y=floor(x,z);
  d.position.set(x,y+.13,z);d.rotation.set(0,i*.71,0);d.scale.set(.24+(i%4)*.12,.17,.3+(i%3)*.13);d.updateMatrix();stones.setMatrixAt(index++,d.matrix);
 }
 stones.receiveShadow=true;
 const reefMat=new THREE.MeshStandardMaterial({color:'#c4979e',roughness:.82,emissive:'#8fa8ba',emissiveIntensity:.07});
 const corals=new THREE.InstancedMesh(new THREE.ConeGeometry(1,1,6),reefMat,96);corals.name='high-sea-small-corals';scene.add(corals);index=0;
 for(const p of PEAKS)for(let i=0;i<24;i++){
  const a=i*2.399963,r=.28+.4*(i%6)/6,x=p.x+Math.cos(a)*p.rx*r,z=p.z+Math.sin(a)*p.rz*r;
  d.position.set(x,floor(x,z)+.31,z);d.rotation.set(0,a,0);d.scale.set(.2,.55+(i%3)*.1,.2);d.updateMatrix();corals.setMatrixAt(index++,d.matrix);
 }
 return {update(t){time.value=t;for(const a of animals)a.update(t);},snapshot(){return animals.map(a=>a.snapshot());}};
}

// Neighbour tiles share geometry, materials, point buffers and instanced arrays.
// Ordinary static meshes are baked once into material-compatible batches; active
// animal transforms are copied, not rebuilt or randomly respawned at each seam.
export function createOceanPool(scene,{pod,shadow,objects,rocks,player,period=OCEAN_PERIOD}){
 scene.updateMatrixWorld(true);
 const dynamicRoots=scene.children.filter(o=>o.name.startsWith('marine-')||o.name==='deep-sea-local-v7'||o.name==='high-sea-life-v10');
 const dynamicSet=new Set(dynamicRoots),excluded=new Set([pod,shadow,...objects.flatMap(o=>[o.body,o.glow])]);
 const staticMeshes=[],other=[],pointLights=[];
 function scan(o){
  if(excluded.has(o)||dynamicSet.has(o))return;
  if(o.isLight){if(o.isPointLight&&o.parent===scene)pointLights.push(o);return;}
  if(o.isMesh&&!o.isInstancedMesh&&!Array.isArray(o.material)&&!o.material.transparent&&!o.customDepthMaterial){staticMeshes.push(o);return;}
  if(o.isMesh||o.isPoints||o.isSprite){other.push(o);return;}
  for(const c of o.children)scan(c);
 }
 for(const child of scene.children)scan(child);
 const groups=new Map();
 for(const o of staticMeshes){
  const m=o.material,t=m.map;
  if(!o.geometry.boundingSphere)o.geometry.computeBoundingSphere();
  const centre=o.geometry.boundingSphere.center.clone().applyMatrix4(o.matrixWorld);
  const key=JSON.stringify([Math.floor(centre.x/40),Math.floor(centre.z/40),m.type,m.color?.getHex(),m.emissive?.getHex(),m.emissiveIntensity,m.roughness,m.metalness,m.side,m.vertexColors,m.fog,t?.source.uuid,t?.colorSpace,m.customProgramCacheKey(),Object.keys(o.geometry.attributes).sort(),o.castShadow,o.receiveShadow]);
  if(!groups.has(key))groups.set(key,{source:m,geos:[],cast:o.castShadow,receive:o.receiveShadow});
  const g=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();g.applyMatrix4(o.matrixWorld);
  if(t&&g.attributes.uv){t.updateMatrix();const uv=g.attributes.uv,v=new THREE.Vector2();for(let i=0;i<uv.count;i++){v.set(uv.getX(i),uv.getY(i)).applyMatrix3(t.matrix);uv.setXY(i,v.x,v.y);}}
  groups.get(key).geos.push(g);
 }
 const baked=[];
 for(const {source,geos,cast,receive} of groups.values()){
  const g=mergeGeometries(geos,false);if(!g)throw new Error('循环海景批处理失败');for(const old of geos)old.dispose();
  g.computeBoundingSphere();const m=source.clone();m.onBeforeCompile=source.onBeforeCompile;m.customProgramCacheKey=source.customProgramCacheKey;
  if(source.map){m.map=source.map.clone();m.map.offset.set(0,0);m.map.repeat.set(1,1);m.map.rotation=0;m.map.updateMatrix();m.map.needsUpdate=true;}
  const mesh=new THREE.Mesh(g,m);mesh.castShadow=cast;mesh.receiveShadow=receive;mesh.name='loop-static-batch';baked.push(mesh);
 }
 const originalRocks=rocks.map(b=>({...b}));
 const tiles=[],pairs=[],lights=[...pointLights],pickups=[];
 for(const o of objects){o.basePosition=o.position.clone();pickups.push({item:o,body:o.body,glow:o.glow});}
 for(let ix=-1;ix<=1;ix++)for(let iz=-1;iz<=1;iz++){
  if(ix===0&&iz===0)continue;
  const tile=new THREE.Group();tile.name=`ocean-neighbour-${ix}-${iz}`;tile.position.set(ix*period.x,0,iz*period.z);scene.add(tile);tiles.push(tile);
  for(const proto of baked)tile.add(proto.clone());
  for(const original of other){const o=original.clone(false);original.matrixWorld.decompose(o.position,o.quaternion,o.scale);tile.add(o);if(o.isInstancedMesh)o.instanceMatrix=original.instanceMatrix;}
  for(const original of pointLights){const l=original.clone();l.position.copy(original.position);tile.add(l);lights.push(l);}
  for(const source of dynamicRoots){
   const copy=source.clone(true);tile.add(copy);
   const aa=[],bb=[];source.traverse(o=>aa.push(o));copy.traverse(o=>bb.push(o));
   const nodes=aa.map((src,i)=>{if(src.isInstancedMesh)bb[i].instanceMatrix=src.instanceMatrix;bb[i].customDepthMaterial=src.customDepthMaterial;bb[i].customDistanceMaterial=src.customDistanceMaterial;return {src,dst:bb[i]};});pairs.push({tile,nodes});
  }
  for(const item of objects){const body=item.body.clone(),glow=item.glow.clone();tile.add(body,glow);pickups.push({tile,item,body,glow});}
  for(const b of originalRocks)rocks.push({...b,x:b.x+ix*period.x,z:b.z+iz*period.z});
 }
 const v=new THREE.Vector3(),direction=new THREE.Vector3(),frustum=new THREE.Frustum(),matrix=new THREE.Matrix4(),lightSphere=new THREE.Sphere();
 function update(camera,far){
  // Hard visibility changes happen beyond the fog horizon, never at the seam.
  const eye=camera.position;
  for(const tile of tiles){const dx=Math.max(0,Math.abs(eye.x-tile.position.x)-110),dz=Math.max(0,Math.abs(eye.z-tile.position.z+49)-130);tile.visible=Math.hypot(dx,dz)<far+35;}
  for(const pair of pairs){if(!pair.tile.visible)continue;for(const {src,dst} of pair.nodes){dst.position.copy(src.position);dst.quaternion.copy(src.quaternion);dst.scale.copy(src.scale);dst.visible=src.visible;}}
  for(const o of objects)nearestImage(o.basePosition,player,o.position);
  for(const p of pickups){p.body.visible=p.glow.visible=!p.item.taken;p.body.position.copy(p.item.body.position);p.glow.position.copy(p.item.glow.position);}
  scene.updateMatrixWorld(true);
  camera.getWorldDirection(direction);matrix.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);frustum.setFromProjectionMatrix(matrix);
  for(const l of lights){l.getWorldPosition(v);lightSphere.center.copy(v);lightSphere.radius=l.distance;const depth=v.sub(eye).dot(direction);l.visible=depth<far+l.distance&&depth>-l.distance&&frustum.intersectsSphere(lightSphere);}
 }
 function snapshot(){return {tilePool:9,neighbours:tiles.length,visibleNeighbours:tiles.filter(t=>t.visible).length,staticBatches:baked.length,sharedGeometry:true,sharedPickupIds:true,originalColliders:originalRocks.length,pooledColliders:rocks.length};}
 return {update,snapshot};
}
