import * as THREE from 'three';

// Camera-space interior is a real 3D secondary pass, not a painted window.
// Its open windshield never refracts, tints or replaces the ocean scene.
export function createCockpit(renderer, worldCamera, hullTexture) {
 const scene=new THREE.Scene(), camera=new THREE.PerspectiveCamera(68,worldCamera.aspect,.04,12);
 const structure=new THREE.Group();scene.add(structure);
 scene.add(new THREE.HemisphereLight('#d8f0ed','#16262c',2.1));
 const warm=new THREE.PointLight('#ffc98f',5,5,2);warm.position.set(0,-.15,.15);scene.add(warm);
 const metal=new THREE.MeshStandardMaterial({color:'#173b42',metalness:.56,roughness:.64,map:hullTexture});
 const trim=new THREE.MeshStandardMaterial({color:'#9d8054',metalness:.68,roughness:.4});
 const black=new THREE.MeshStandardMaterial({color:'#07191e',metalness:.22,roughness:.78});
 const glow=new THREE.MeshBasicMaterial({color:'#98dcca'});
 let perFitMaterials=[];
 const screws=new THREE.MeshStandardMaterial({color:'#a9a08a',metalness:.8,roughness:.35});
 let aspect=0, panelTexture, lastUpdate=-1, screenContext, geometryCount=0, screenMesh;
 const add=(geometry,material,x=0,y=0,z=0)=>{const m=new THREE.Mesh(geometry,material);m.position.set(x,y,z);structure.add(m);return m;};
 const tube=(points,r,mat)=>add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),48,r,8,false),mat);
 function disposeStructure(){structure.traverse(o=>o.geometry?.dispose());structure.clear();for(const m of perFitMaterials)m.dispose();perFitMaterials=[];panelTexture?.dispose();screenMesh=null;}
 function fit(){
  aspect=worldCamera.aspect;camera.aspect=aspect;camera.fov=68;camera.updateProjectionMatrix();
  disposeStructure();
  const z=-1.25,H=Math.tan(THREE.MathUtils.degToRad(68)/2)*-z,W=H*aspect;
  const perimeter=[[-W*1.04,-H*1.15,z],[-W*.98,-H*.22,z],[-W*.94,H*.78,z],[-W*.7,H*.96,z],[0,H*1.01,z],[W*.7,H*.96,z],[W*.94,H*.78,z],[W*.98,-H*.22,z],[W*1.04,-H*1.15,z]];
  tube(perimeter,.078,metal);tube(perimeter.map(([x,y,z])=>[x*.983,y*.978,z-.017]),.014,trim);
  for(const side of [-1,1]){
   tube([[side*W*.92,H*.79,z],[side*W*.85,H*.15,z+.025],[side*W*.77,-H*.62,z+.06]],.028,black);
   tube([[side*W*.92,H*.79,z-.01],[side*W*.85,H*.15,z+.02],[side*W*.77,-H*.62,z+.05]],.008,trim);
   for(const fraction of [-.2,.3,.72])add(new THREE.SphereGeometry(.016,10,8),screws,side*W*.96,H*fraction,z+.064);
  }
  const shape=new THREE.Shape();shape.moveTo(-W*1.08,-H*1.45);shape.lineTo(-W*1.03,-H*.69);shape.quadraticCurveTo(0,-H*.47,W*1.03,-H*.69);shape.lineTo(W*1.08,-H*1.45);shape.closePath();
  add(new THREE.ExtrudeGeometry(shape,{depth:.16,bevelEnabled:true,bevelThickness:.027,bevelSize:.027,bevelSegments:2,steps:1}),metal,0,0,z+.04);
  tube([[-W*1.03,-H*.68,z+.19],[-W*.52,-H*.59,z+.19],[0,-H*.56,z+.19],[W*.52,-H*.59,z+.19],[W*1.03,-H*.68,z+.19]],.022,black);
  tube([[-W*.86,-H*.65,z+.195],[0,-H*.57,z+.195],[W*.86,-H*.65,z+.195]],.004,glow);
  const screenZ=z+.255,dashboardW=Math.tan(THREE.MathUtils.degToRad(68)/2)*-(screenZ+.025)*aspect;
  const panelW=Math.min(dashboardW*.66,.70),panelH=H*.10,panelY=-H*.65;
  add(new THREE.BoxGeometry(panelW*2+.06,panelH*2+.065,.05),black,0,panelY,screenZ-.025);
  const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=256;screenContext=canvas.getContext('2d');
  panelTexture=new THREE.CanvasTexture(canvas);panelTexture.colorSpace=THREE.SRGBColorSpace;
  const screenMat=new THREE.MeshBasicMaterial({map:panelTexture});perFitMaterials.push(screenMat);screenMesh=add(new THREE.PlaneGeometry(panelW*2,panelH*2),screenMat,0,panelY,screenZ+.004);
  for(const side of [-1,1]){
   const x=side*Math.min(W*.89,1.35),lever=add(new THREE.CylinderGeometry(.014,.02,H*.21,12),trim,x,-H*.98,z+.47);lever.rotation.z=side*.24;
   add(new THREE.SphereGeometry(.042,16,12),black,x-side*.02,-H*.88,z+.47);
  }
  geometryCount=0;scene.traverse(o=>{if(o.isMesh)geometryCount++;});lastUpdate=-1;
 }
 function update(state){
  if(aspect!==worldCamera.aspect)fit();
  const speed=Math.hypot(state.velocity.x,state.velocity.y,state.velocity.z);
  const degrees=((state.heading*180/Math.PI)%360+360)%360;
  if(lastUpdate>=0&&state.time-lastUpdate<.1)return;
  lastUpdate=state.time;
  const g=screenContext;g.fillStyle='#061c24';g.fillRect(0,0,1024,256);
  g.strokeStyle='#27625f';g.lineWidth=2;g.strokeRect(3,3,1018,250);for(const x of [342,682]){g.beginPath();g.moveTo(x,35);g.lineTo(x,215);g.stroke();}
  g.textAlign='center';g.font='32px "PingFang SC",system-ui';g.fillStyle='#8bb9b6';
  ['下潜深度','航速','航向'].forEach((text,i)=>g.fillText(text,171+i*341,59));
  g.fillStyle='#d8f5de';g.font='64px "PingFang SC",system-ui';
  [Math.round((state.surface??19)-state.y)+' m',speed.toFixed(1)+' m/s',Math.round(degrees).toString().padStart(3,'0')+'°'].forEach((text,i)=>g.fillText(text,171+i*341,145));
  g.font='22px "PingFang SC",system-ui';g.fillStyle='#9cb9ad';
  ['离开海面后向下计量','松键缓慢减速','与潜水舱同步'].forEach((text,i)=>g.fillText(text,171+i*341,205));
  panelTexture.needsUpdate=true;
 }
 function render(){if(aspect!==worldCamera.aspect)fit();const auto=renderer.autoClear;renderer.autoClear=false;renderer.clearDepth();renderer.render(scene,camera);renderer.autoClear=auto;}
 fit();
 function bounds(mesh){
  scene.updateMatrixWorld(true);camera.updateMatrixWorld(true);
  const {width,height}=mesh.geometry.parameters;
  const a=new THREE.Vector3(-width/2,height/2,0).applyMatrix4(mesh.matrixWorld).project(camera);
  const b=new THREE.Vector3(width/2,-height/2,0).applyMatrix4(mesh.matrixWorld).project(camera);
  return {left:(a.x+1)/2,top:(1-a.y)/2,right:(b.x+1)/2,bottom:(1-b.y)/2};
 }
 return {scene,camera,fit,getPanel:()=>({canvas:screenContext.canvas,texture:panelTexture}),update,render,snapshot:()=>({geometryCount,aspect,openWindshield:true,secondary3DPass:true,loopieCount:0,needleCount:0,sideDecorations:'none',loopieBounds:[],screenBounds:screenMesh?bounds(screenMesh):null})};
}
