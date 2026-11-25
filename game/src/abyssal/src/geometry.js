import * as THREE from 'three';
import {createPod} from './pod.js';
import {createCockpit} from './cockpit.js';
import {createCustomsCastle,CASTLE_SPEC} from './castle.js';
import {createMistLighthouse,LIGHTHOUSE_SPEC} from './lighthouse.js';
import {createReefWreck,WRECK_SPEC} from './wreck.js';
// Three.js supplies the accepted geometry constructors, never a WebGL renderer.
const normal=new THREE.Matrix3(),v=new THREE.Vector3(),n=new THREE.Vector3();
function pack(root,{filter=()=>true,relative=root}={}){
 root.updateMatrixWorld(true);relative.updateMatrixWorld(true);
 const inverse=relative.matrixWorld.clone().invert(),vertices=[];
 root.traverse(mesh=>{
  if(!mesh.isMesh||!mesh.visible||!filter(mesh))return;
  const matrix=inverse.clone().multiply(mesh.matrixWorld);normal.getNormalMatrix(matrix);
  const g=mesh.geometry,p=g.attributes.position,no=g.attributes.normal,uv=g.attributes.uv,index=g.index;
  for(let j=0;j<(index?index.count:p.count);j++){
   const i=index?index.getX(j):j;
   const group=g.groups.find(a=>j>=a.start&&j<a.start+a.count);
   const m=Array.isArray(mesh.material)?mesh.material[group?.materialIndex||0]:mesh.material;
   v.fromBufferAttribute(p,i).applyMatrix4(matrix);n.fromBufferAttribute(no,i).applyMatrix3(normal).normalize();
   const mapped=m.map?.image;const mapType=m.userData.landmarkWood?4:m.userData.castleStone?3:m.map?(mapped?.width===1024&&mapped?.height===256?2:1):0;
   vertices.push(v.x,v.y,v.z,n.x,n.y,n.z,uv?.getX(i)||0,uv?.getY(i)||0,m.color.r,m.color.g,m.color.b,m.transparent?m.opacity:1,m.metalness??0,m.roughness??.8,m.isMeshBasicMaterial?1:0,mapType);
  }
 });
 return new Float32Array(vertices);
}
function initial(hullImage){
 const hull=new THREE.Texture(hullImage);hull.colorSpace=THREE.SRGBColorSpace;hull.needsUpdate=true;
 const scene=new THREE.Scene();const pod=createPod(scene,new THREE.Vector3(),hull,()=>-5,m=>m).pod;
 const propeller=pod.userData.propeller;
 const hasParent=(mesh,parent)=>{for(let x=mesh;x;x=x.parent)if(x===parent)return true;return false;};
 const body=pack(pod,{filter:m=>!m.material.transparent&&!hasParent(m,propeller)});
 const glass=pack(pod,{filter:m=>m.material.transparent&&m.material.opacity>0});
 const prop=pack(propeller,{relative:propeller});
 const worldCamera={aspect:1.6};const cockpit=createCockpit({},worldCamera,hull);
 return {body,glass,prop,fit(aspect){worldCamera.aspect=aspect;cockpit.fit();return {geometry:pack(cockpit.scene,{relative:cockpit.scene}),projection:cockpit.camera.projectionMatrix.elements,panel:cockpit.getPanel().canvas};},update:state=>cockpit.update(state),panel:()=>cockpit.getPanel().canvas,snapshot:cockpit.snapshot};
}
function pearl(){const group=new THREE.Group(),material=new THREE.MeshStandardMaterial({color:'#f4ffe3',roughness:.16,metalness:.34});group.add(new THREE.Mesh(new THREE.SphereGeometry(.22,20,14),material));return pack(group);}
function shell(){
 const g=new THREE.BufferGeometry(),a=[],rows=10,cols=24;
 const point=(r,t)=>{const angle=-Math.PI*.49+t*Math.PI*.98,radius=.05+r*.73,ridge=1+.065*Math.cos(t*Math.PI*24);return [Math.sin(angle)*radius*ridge,Math.sin(r*Math.PI)*.22+Math.cos(t*Math.PI*24)*.025*r,Math.cos(angle)*radius];};
 for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){const p=point(r/rows,c/cols),q=point((r+1)/rows,c/cols),s=point((r+1)/rows,(c+1)/cols),t=point(r/rows,(c+1)/cols);a.push(...p,...q,...t,...t,...q,...s);}
 g.setAttribute('position',new THREE.Float32BufferAttribute(a,3));g.computeVertexNormals();const group=new THREE.Group();group.add(new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:'#f3bf86',roughness:.32,metalness:.22,side:THREE.DoubleSide})));return pack(group);
}
function gate(open){const group=new THREE.Group();const brass=new THREE.MeshStandardMaterial({color:open?'#b7efd0':'#cba774',metalness:.65,roughness:.33});const rim=new THREE.Mesh(new THREE.TorusGeometry(5,.24,14,96),brass);group.add(rim);const light=new THREE.Mesh(new THREE.TorusGeometry(4.72,.045,8,96),new THREE.MeshBasicMaterial({color:open?'#67ffd8':'#ffb06a'}));group.add(light);
 for(const side of [-1,1]){const post=new THREE.Mesh(new THREE.BoxGeometry(.42,6.3,.65),brass);post.position.set(side*4.7,-3.2,0);group.add(post);}
 if(!open){for(const angle of [-.75,.75]){const bar=new THREE.Mesh(new THREE.BoxGeometry(.13,9.1,.13),brass);bar.rotation.z=angle;group.add(bar);}}
 return pack(group);
}
function castle(){const c=createCustomsCastle();const opaque=pack(c.root);const collision=pack(c.root,{filter:m=>m.userData.collidable!==false});const bounds=new THREE.Box3().setFromObject(c.root);return {opaque,collision,solids:c.solids,spec:c.spec,bounds:{min:bounds.min.toArray(),max:bounds.max.toArray()},triangles:opaque.length/48,collisionTriangles:collision.length/48};}
function landmark(factory){const c=factory();const opaque=pack(c.root),collision=pack(c.root,{filter:m=>m.userData.collidable!==false}),bounds=new THREE.Box3().setFromObject(c.root);return {opaque,collision,solids:c.solids,spec:c.spec,bounds:{min:bounds.min.toArray(),max:bounds.max.toArray()},triangles:opaque.length/48,collisionTriangles:collision.length/48};}
function barrier(){
 const root=new THREE.Group(),material=new THREE.MeshStandardMaterial({color:'#c3b08a',roughness:.35,metalness:.55});
 for(let x=-4.5;x<=4.5;x+=.6){const top=11+Math.sqrt(4.8**2-x**2),bottom=1.4,mesh=new THREE.Mesh(new THREE.BoxGeometry(.15,top-bottom,.18),material);mesh.position.set(x,(top+bottom)/2,0);root.add(mesh);}
 for(const y of [4,8,11]){const mesh=new THREE.Mesh(new THREE.BoxGeometry(9.4,.14,.18),material);mesh.position.set(0,y,0);root.add(mesh);}
 return pack(root);
}
window.V3Geometry={initial,pearl,shell,gate,barrier,castle,lighthouse:()=>landmark(createMistLighthouse),wreck:()=>landmark(createReefWreck),castleSpec:CASTLE_SPEC,lighthouseSpec:LIGHTHOUSE_SPEC,wreckSpec:WRECK_SPEC,THREE};
