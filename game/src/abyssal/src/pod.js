import * as THREE from 'three';
export function createPod(scene, player, hullTexture, floorHeight, decorate){
 let pod,shadow;
 const textures={hull:hullTexture};
 const material=(color,extra={})=>decorate(new THREE.MeshStandardMaterial({color,roughness:.93,...extra}));
 const mesh=(geo,mat,x,y,z)=>{const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);scene.add(m);return m;};
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
 pod.traverse(o=>{if(o.isMesh){o.castShadow=!o.material.transparent;o.receiveShadow=true;}});
 return {pod,shadow};
}
