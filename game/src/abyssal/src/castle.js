import * as THREE from 'three';

// All dimensions are metres. The same closed backing shapes are exported for
// the collision solver's inside-solid recovery; external contact uses triangles.
export const CASTLE_SPEC={towerX:8,towerRadius:3.18,innerRadius:4.8,spring:11,archDepth:4.4,height:18.1,width:23.6};
export function createCustomsCastle(){
 const root=new THREE.Group(),solids=[];
 let seed=73641;
 const rnd=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 const material=(color,stone=true)=>{const m=new THREE.MeshStandardMaterial({color,roughness:.92,metalness:0});m.userData.castleStone=stone;return m;};
 const limestone=material('#c1bba0'),limestoneDark=material('#a7a58d'),reef=material('#68766a'),trim=material('#d0c6a5');
 const stoneTones=Array.from({length:12},()=>{const m=limestone.clone();m.color.multiplyScalar(.85+rnd()*.24);return m;});
 const add=(g,m,x=0,y=0,z=0,collision=true)=>{const mesh=new THREE.Mesh(g,m);mesh.position.set(x,y,z);mesh.userData.collidable=collision;root.add(mesh);return mesh;};
 const cyl=(x,y,z,r,h,m=limestone,rt=r)=>add(new THREE.CylinderGeometry(rt,r,h,40,1),m,x,y,z);
 const solidCylinder=(x,y,z,r,h,m=limestone,rt=r)=>{const mesh=cyl(x,y,z,r,h,m,rt);if(rt===r)solids.push({kind:'cylinder',center:[x,y,z],radius:r,half:h/2});return mesh;};
 const solidBox=(x,y,z,w,h,d,m)=>{const mesh=add(new THREE.BoxGeometry(w,h,d),m,x,y,z);solids.push({kind:'box',center:[x,y,z],half:[w/2,h/2,d/2]});return mesh;};
 const branch=(a,b,r,m)=>{const av=new THREE.Vector3(...a),bv=new THREE.Vector3(...b),v=bv.clone().sub(av);const mesh=add(new THREE.CylinderGeometry(r*.66,r,v.length(),5,1),m,...av.clone().add(bv).multiplyScalar(.5).toArray(),false);mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),v.normalize());return mesh;};
 const corals=['#9a747a','#a77e8f','#739091','#8f8b63'].map(c=>material(c,false));
 function coral(x,y,z,size){const m=corals[Math.floor(rnd()*corals.length)];for(let i=0;i<4;i++){const angle=rnd()*Math.PI*2,h=size*(.55+rnd()*.6),dx=Math.cos(angle)*size*.3,dz=Math.sin(angle)*size*.3;const top=[x+dx,y+h,z+dz];branch([x,y,z],top,.043*size,m);for(let j=0;j<2;j++){const a=angle+(j?1.1:-1.1);branch([x+dx*.5,y+h*.5,z+dz*.5],[top[0]+Math.cos(a)*size*.24,top[1]+size*.16,top[2]+Math.sin(a)*size*.24],.026*size,m);}}}
 function stoneCourse(x,y,radius,height,row){const count=22;for(let i=0;i<count;i++){const start=i*Math.PI*2/count+(row%2?Math.PI/count:0)+.005,span=Math.PI*2/count-.010;const r=radius+(rnd()-.5)*.045;add(new THREE.CylinderGeometry(r,r,height-.035,3,1,true,start,span),stoneTones[(i+row*3)%stoneTones.length],x,y,0);}}
 for(const side of [-1,1]){
  const x=side*CASTLE_SPEC.towerX;
  // Buried stepped footings and a closed body behind the slightly recessed seams.
  solidCylinder(x,.40,0,3.85,1.25,limestoneDark);
  solidCylinder(x,1.25,0,3.52,.55,limestoneDark);
  solidCylinder(x,8.45,0,3.08,13.85,limestoneDark);
  for(let row=0;row<13;row++)stoneCourse(x,1.56+(row+.5)*1.05,3.18,1.05,row);
  cyl(x,1.65,0,3.36,.25,trim);
  cyl(x,15.4,0,3.46,.33,limestoneDark);
  solidCylinder(x,16.22,0,3.61,1.3,limestone);
  cyl(x,15.57,0,3.78,.24,trim);
  cyl(x,16.97,0,3.75,.24,trim);
  cyl(x,17.13,0,3.42,.20,limestoneDark);
  for(let i=0;i<12;i++){
   const a=i*Math.PI*2/12;
   const block=add(new THREE.BoxGeometry(.7,.52,.65),stoneTones[i],x+Math.sin(a)*3.2,17.48,Math.cos(a)*3.2);block.rotation.y=a;
  }
  // A dark circular inset and mineral rim, on BOTH sides, not a front billboard.
  const rimMat=material('#a3a992');
  const glass=new THREE.MeshStandardMaterial({color:'#21675d',roughness:.32,metalness:.15});
  for(const sign of [-1,1])for(const y of [5.1,9.1]){
   const ring=add(new THREE.TorusGeometry(.64,.15,8,28),rimMat,x,y,sign*3.17);
   const inset=add(new THREE.CircleGeometry(.49,28),glass,x,y,sign*3.19);if(sign<0){ring.rotation.y=Math.PI;inset.rotation.y=Math.PI;}
   const sill=add(new THREE.BoxGeometry(1.23,.16,.35),limestoneDark,x,y-.72,sign*3.2);
   sill.rotation.y=sign<0?Math.PI:0;
  }
  for(const sign of [-1,1])for(const da of [-.48,0,.48]){
   const a=(sign>0?0:Math.PI)+da;
   const ring=add(new THREE.TorusGeometry(.28,.075,7,18),rimMat,x+Math.sin(a)*3.63,16.2,Math.cos(a)*3.63);ring.rotation.y=a;
   const inset=add(new THREE.CircleGeometry(.205,18),glass,x+Math.sin(a)*3.64,16.2,Math.cos(a)*3.64);inset.rotation.y=a;
  }
  // Low irregular rock skirt, partly buried; no tall solid pedestal in the opening.
  for(let i=0;i<15;i++){
   const a=i*Math.PI*2/15,rr=3.8+rnd()*1.1;
   const rock=add(new THREE.IcosahedronGeometry(1,1),reef,x+Math.sin(a)*rr,-.55+rnd()*.3,Math.cos(a)*rr);
   rock.scale.set(.7+rnd()*1.2,.5+rnd()*.5,.7+rnd()*1.2);rock.rotation.set(rnd(),rnd()*3,rnd());
  }
  for(let i=0;i<17;i++){
   const a=rnd()*Math.PI*2,r=3.7+rnd()*1.6;
   coral(x+Math.sin(a)*r,.12,Math.cos(a)*r,.45+rnd()*.8);
  }
  for(let i=0;i<12;i++){
   const a=rnd()*Math.PI*2,r=1.6+rnd()*1.6;
   coral(x+Math.sin(a)*r,17.28,Math.cos(a)*r,.35+rnd()*.65);
  }
 }
 const archShape=(ri,ro,start=0,end=Math.PI)=>{const s=new THREE.Shape(),steps=36;s.moveTo(Math.cos(start)*ro,11+Math.sin(start)*ro);for(let i=1;i<=steps;i++){const a=start+(end-start)*i/steps;s.lineTo(Math.cos(a)*ro,11+Math.sin(a)*ro);}for(let i=steps;i>=0;i--){const a=start+(end-start)*i/steps;s.lineTo(Math.cos(a)*ri,11+Math.sin(a)*ri);}s.closePath();return s;};
 // Continuous closed arch backing + stone voussoirs. There is a real empty
 // opening below, not a translucent portal plane or a replacement bounding box.
 add(new THREE.ExtrudeGeometry(archShape(4.8,6.28),{depth:4.35,bevelEnabled:false,steps:1}),limestoneDark,0,0,-2.175);
 solids.push({kind:'arch',center:[0,11,0],inner:4.8,outer:6.28,depth:2.175});
 const n=17;
 for(let i=0;i<n;i++){
  const start=i*Math.PI/n+.002,end=(i+1)*Math.PI/n-.002;
  const g=new THREE.ExtrudeGeometry(archShape(4.8,6.4,start,end),{depth:4.5,bevelEnabled:true,bevelSegments:1,steps:1,bevelSize:.035,bevelThickness:.035,curveSegments:3});
  add(g,stoneTones[(i+5)%12],0,0,-2.25);
 }
 for(const side of [-1,1]){
  solidBox(side*5.52,5.9,0,1.44,10.2,4.35,limestoneDark);
  for(let row=0;row<10;row++)add(new THREE.BoxGeometry(1.41,.985,4.48),stoneTones[(row*2)%12],side*5.52,1.31+row*1.02,0);
 }
 // Low threshold and half-buried steps. All are tangible collision geometry.
 solidBox(0,-.30,0,9.55,.50,7.8,limestoneDark);
 for(const side of [-1,1])for(let i=0;i<3;i++)solidBox(0,-.5-i*.16,side*(4.2+i*.65),9.5,.28,.7,limestoneDark);
 // A few barnacles on the two facades; restrained detail rather than new fauna.
 const barnacle=material('#afb7a3');
 for(const side of [-1,1])for(let i=0;i<32;i++){
  const x=side*8+(rnd()-.5)*3.4,y=2+rnd()*11,z=Math.sqrt(Math.max(0,3.19*3.19-(x-side*8)**2));
  add(new THREE.IcosahedronGeometry(.045+rnd()*.065,0),barnacle,x,y,z,false);
 }
 root.updateMatrixWorld(true);
 return {root,solids,spec:CASTLE_SPEC};
}
