import { oceanLocal } from './ocean-loop-v10.js';
import * as THREE from 'three';
import { createAlienLife } from './alien-life-v9.js';
import { createOceanLife } from './ocean-life-v9.js';
import { oceanWeights,OCEAN_GLSL,OCEAN_STYLES } from './ocean-regions-v10.js';
const V3=THREE.Vector3, clamp=THREE.MathUtils.clamp;
const smooth=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
// Compact deep-water volume. Above it and in all other regions the original
// directional / hemisphere illumination is unchanged, including shared materials.
export function deepWeight(p){p=oceanLocal(p);return smooth(6,9,p.x)*(1-smooth(28,31,p.x))*smooth(-74,-73,p.z)*(1-smooth(-34,-26,p.z))*(1-smooth(-14,-5,p.y));}
const WATER_GLSL=`
varying vec3 vDeepWorld;
vec3 deepLocal(vec3 p){p.x=mod(p.x+110.,220.)-110.;p.z=mod(p.z+179.,260.)-179.;return p;}
float deepVolume(vec3 p){p.x=mod(p.x+110.,220.)-110.;p.z=mod(p.z+179.,260.)-179.;return smoothstep(6.,9.,p.x)*(1.-smoothstep(28.,31.,p.x))*smoothstep(-74.,-73.,p.z)*(1.-smoothstep(-34.,-26.,p.z))*(1.-smoothstep(-14.,-5.,p.y));}
float deepHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
float deepNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(deepHash(i),deepHash(i+vec3(1,0,0)),f.x),mix(deepHash(i+vec3(0,1,0)),deepHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(deepHash(i+vec3(0,0,1)),deepHash(i+vec3(1,0,1)),f.x),mix(deepHash(i+vec3(0,1,1)),deepHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
`;
export function createDeepSea(scene,renderer,{floor,rocks,objects,pod}){
 const uniforms={view:{value:0},lampOrigin:{value:new V3()},lampDirection:{value:new V3(0,0,-1)},time:{value:0}};
 const root=new THREE.Group();root.name='deep-sea-local-v7';scene.add(root);
 const baseWater=scene.background.clone(),deepWater=new THREE.Color('#031923');
 const lamp=new THREE.SpotLight('#d3eee8',0,66,.48,.68,1.8);lamp.name='deep-sea-real-headlight';lamp.castShadow=true;lamp.shadow.mapSize.set(1024,1024);lamp.shadow.camera.near=.4;lamp.shadow.camera.far=66;lamp.shadow.bias=-.00015;lamp.shadow.normalBias=.035;scene.add(lamp,lamp.target);
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 const backdrop=[],patched=new Set();let styleMeshes=0,terrain;
 function patch(mat,style=0,localFish=false,nativeGlow=false){
  if(patched.has(mat))return;patched.add(mat);
  const old=mat.onBeforeCompile,priorKey=mat.customProgramCacheKey();
  mat.onBeforeCompile=(s,r)=>{
   old?.call(mat,s,r);
   s.vertexShader=s.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vDeepWorld;').replace('#include <project_vertex>',`vec4 deepPos=vec4(transformed,1.);\n#ifdef USE_INSTANCING\ndeepPos=instanceMatrix*deepPos;\n#endif\nvDeepWorld=(modelMatrix*deepPos).xyz;\n#include <project_vertex>`);
   s.fragmentShader=s.fragmentShader.replace('#include <common>','#include <common>\n'+WATER_GLSL+OCEAN_GLSL);
   s.fragmentShader=s.fragmentShader.replace('#include <map_fragment>',`#include <map_fragment>\nfloat deepAmount=deepVolume(vDeepWorld);\n${localFish?'float fishFade=deepVolume(vec3(vDeepWorld.x,min(vDeepWorld.y,-14.),vDeepWorld.z));if(deepHash(vec3(floor(gl_FragCoord.xy),0.))<fishFade)discard;':''}\n${style?`float deepGrain=deepNoise(deepTextureWorld*3.8)*.65+deepNoise(deepTextureWorld*19.)*.35;float strata=deepNoise(deepTextureWorld*vec3(.65,2.8,.65))+.12*sin(vDeepWorld.y*12.+deepNoise(deepTextureWorld*.9)*9.);float cracks=pow(max(0.,deepNoise(deepTextureWorld*vec3(2.1,.35,2.1))-.58)*3.,3.);vec3 deepTint=${style===1?'mix(vec3(.17,.23,.25),vec3(.265,.295,.28),smoothstep(.30,.78,strata))':'vec3(.25,.29,.275)'};diffuseColor.rgb=mix(diffuseColor.rgb,deepTint*(.67+deepGrain*.66)*(1.-cracks*.18),deepAmount*.86);`:''}`);
   s.fragmentShader=s.fragmentShader.replace('float deepAmount=deepVolume(vDeepWorld);',`float deepAmount=deepVolume(vDeepWorld);\nvec3 deepTextureWorld=deepLocal(vDeepWorld);\nvec4 oceanW=oceanVolume(vDeepWorld);\nfloat oceanAmount=dot(oceanW,vec4(1.));\n${style===1?`float seaGrain=deepNoise(deepTextureWorld*4.8)*.65+deepNoise(deepTextureWorld*21.)*.35;float seaLayers=deepNoise(deepTextureWorld*vec3(.5,3.,.5));vec3 seaStone=oceanW.x*mix(vec3(.30,.35,.32),vec3(.40,.39,.31),seaLayers)+oceanW.y*mix(vec3(.14,.21,.19),vec3(.26,.29,.22),seaLayers)+oceanW.z*mix(vec3(.12,.16,.21),vec3(.22,.25,.30),seaLayers)+oceanW.w*mix(vec3(.18,.24,.28),vec3(.29,.31,.30),seaLayers);diffuseColor.rgb=mix(diffuseColor.rgb,seaStone/max(oceanAmount,.001)*(.76+seaGrain*.44),oceanAmount*.78);`:''}\n${style===3?'diffuseColor.rgb*=vec3(1.)+oceanW.x*vec3(.10,.06,-.015)+oceanW.y*vec3(-.12,.14,.01)+oceanW.z*vec3(-.1,-.02,.20);':''}\n${style===4?'float gateGrain=deepNoise(deepTextureWorld*12.);diffuseColor.rgb=mix(diffuseColor.rgb,mix(vec3(.24,.30,.34),vec3(.36,.39,.36),gateGrain),oceanW.w*.67*(1.-step(.2,metalness)));':''}`);
   if(localFish)s.fragmentShader=s.fragmentShader.replace('if(deepHash(vec3(floor(gl_FragCoord.xy),0.))<fishFade)discard;','fishFade=max(fishFade,dot(oceanVolume(vec3(vDeepWorld.x,min(vDeepWorld.y,-14.),vDeepWorld.z)),vec4(0.,1.,1.,1.)));if(deepHash(vec3(floor(gl_FragCoord.xy),0.))<fishFade)discard;');
   const lightChunk=THREE.ShaderChunk.lights_fragment_begin.replace('getDirectionalLightInfo( directionalLight, directLight );','getDirectionalLightInfo( directionalLight, directLight );\ndirectLight.color*=mix(vec3(1.),vec3(.055,.09,.115),deepAmount)*oceanSolar(oceanW);').replace('getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal )','getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal )*mix(vec3(1.),vec3(.09,.145,.18),deepAmount)*oceanAmbient(oceanW)');
   s.fragmentShader=s.fragmentShader.replace('#include <lights_fragment_begin>',lightChunk);
   if(!nativeGlow)s.fragmentShader=s.fragmentShader.replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\ntotalEmissiveRadiance*=1.-deepAmount*.74;');
   if(style){
    s.fragmentShader=s.fragmentShader.replace('#include <roughnessmap_fragment>','#include <roughnessmap_fragment>\nroughnessFactor=mix(roughnessFactor,.91,deepAmount);').replace('#include <normal_fragment_maps>','#include <normal_fragment_maps>\nfloat rockRelief=deepNoise(deepTextureWorld*5.)+.3*deepNoise(deepTextureWorld*24.);vec3 rockDx=normalize(dFdx(-vViewPosition));vec3 rockDy=normalize(dFdy(-vViewPosition));normal=normalize(normal-deepAmount*.22*(dFdx(rockRelief)*rockDx+dFdy(rockRelief)*rockDy));');
   }
   // Preserve the old cave treatment and suppress only shallow caustics here.
   s.fragmentShader=s.fragmentShader.replace('*caustic*(1.-smoothstep(', '*caustic*(1.-deepAmount)*(1.-oceanW.z-oceanW.y*.6-oceanW.w*.5)*(1.-smoothstep(');
   s.fragmentShader=s.fragmentShader.replace('caveShade*.87);','caveShade*.87*(1.-oceanVolume(seaWorld).z));');
  };
  mat.customProgramCacheKey=()=>`deep-sea-v11-${style}-${localFish}-${nativeGlow}-${priorKey}-${old.toString()}`;mat.needsUpdate=true;
 }
 scene.updateMatrixWorld(true);
 scene.traverse(o=>{
  let parent=o;while(parent){if(parent===pod||parent===root)return;parent=parent.parent;}
  if(o.isMesh&&o.material?.isMeshBasicMaterial&&!o.material.fog){backdrop.push({mat:o.material,color:o.material.color.clone()});}
  if(!o.isMesh)return;
  const mats=Array.isArray(o.material)?o.material:[o.material];
  const isGround=!!o.userData.loopTerrain||(o.geometry?.type==='PlaneGeometry'&&o.geometry.parameters.width===220);
  const isRock=o.geometry?.type==='SphereGeometry'&&o.geometry.parameters.widthSegments===24&&o.geometry.parameters.heightSegments===18&&o.parent===scene;
  let isWreck=false;for(let p=o.parent;p&&p!==scene;p=p.parent){if(p.position.x===18&&p.position.z===-54)isWreck=true;}
  const isCave=o.geometry?.type==='TorusGeometry'&&o.geometry.parameters.radius===11;
  let isGate=false;for(let p=o.parent;p&&p!==scene;p=p.parent)if(p.position.z===-143)isGate=true;
  const isPlant=o.isInstancedMesh&&['PlaneGeometry','CylinderGeometry'].includes(o.geometry?.type);
  const style=isGround||isRock||isCave?1:isWreck?2:isGate?4:isPlant?3:0;
  for(const m of mats)if(m?.isMeshStandardMaterial)patch(m,style,o.name.startsWith('marine-fish-'));
  if(isRock||isWreck||isCave||isGate){o.castShadow=true;o.receiveShadow=true;styleMeshes++;}
  if(isGround){terrain=o;o.castShadow=true;o.receiveShadow=true;for(const m of mats)m.shadowSide=THREE.DoubleSide;}
 });
 const aliens=createAlienLife(root,{floor,rocks,objects});
 const oceanRoot=new THREE.Group();oceanRoot.name='four-region-alien-life';root.add(oceanRoot);
 const oceanLife=createOceanLife(oceanRoot,{floor,rocks,objects});
 root.traverse(o=>{if(o.isMesh){patch(o.material,0,false,true);o.castShadow=true;o.receiveShadow=true;}});
 const caveLights=[];scene.traverse(o=>{if(o.isPointLight&&o.parent===scene&&o.position.x===36){caveLights.push(o);}});
 caveLights.forEach((o,i)=>{o.color.set(['#79cdd1','#a798dd','#dca1bc'][i%3]);o.intensity=[22,18,20][i%3];});
 for(const [x,color] of [[-13.4,'#e5c187'],[-.6,'#d5b875']]){const l=new THREE.PointLight(color,30,22,2);l.position.set(x,5.9,-138.5);l.name='customs-warm-beacon';scene.add(l);}
 const shadowCasters=[];
 function trackShadows(){shadowCasters.length=0;scene.updateMatrixWorld(true);scene.traverse(o=>{if(o.isMesh&&o.castShadow&&o!==terrain){if(o.isInstancedMesh)o.computeBoundingSphere();else if(!o.geometry.boundingSphere)o.geometry.computeBoundingSphere();shadowCasters.push(o);}});}
 trackShadows();
 const shadowSphere=new THREE.Sphere();
 function shadowBound(o){shadowSphere.copy(o.isInstancedMesh?o.boundingSphere:o.geometry.boundingSphere).applyMatrix4(o.matrixWorld);shadowSphere.radius+=.5*o.matrixWorld.getMaxScaleOnAxis();return shadowSphere;}
 function updateShadows(){scene.updateMatrixWorld(true);for(const o of shadowCasters){const b=shadowBound(o);o.castShadow=b.center.distanceTo(lamp.position)-b.radius<lamp.distance;}}
 function shadowBounds(){scene.updateMatrixWorld(true);return shadowCasters.map(o=>{const b=shadowBound(o);return {name:o.name,center:b.center.toArray(),radius:b.radius,range:lamp.distance,distance:b.center.distanceTo(lamp.position),casts:o.castShadow};});}
 // Low stones are sediment ledges only, below existing floor clearance. Keep
 // collectible approaches free; no extra collider or navigable wall is introduced.
 const sediment=new THREE.MeshStandardMaterial({color:'#39464a',roughness:.98});patch(sediment,1);
 const chipGeo=new THREE.IcosahedronGeometry(1,1),dummy=new THREE.Object3D(),ledges=[];
 for(let i=0;i<80;i++){
  const x=10+((i*7.137)%16),z=-33-((i*11.731)%39),y=floor(x,z);
  if(objects.some(o=>Math.hypot(x-o.position.x,z-o.position.z)<2.4))continue;
  if(rocks.some(b=>((x-b.x)/(b.rx+.8))**2+((y+.3-b.y)/(b.ry+.5))**2+((z-b.z)/(b.rz+.8))**2<1))continue;
  ledges.push({x,y,z});
 }
 const chips=new THREE.InstancedMesh(chipGeo,sediment,ledges.length);chips.name='deep-sea-low-sediment';ledges.forEach((p,i)=>{dummy.position.set(p.x,p.y+.08,p.z);dummy.rotation.set(0,i*1.7,0);dummy.scale.set(.3+(i%3)*.18,.15,.35+(i%4)*.12);dummy.updateMatrix();chips.setMatrixAt(i,dummy.matrix);});root.add(chips);chips.receiveShadow=true;
 const count=360,positions=new Float32Array(count*3),dustGeo=new THREE.BufferGeometry();dustGeo.setAttribute('position',new THREE.BufferAttribute(positions,3));
 const dustMat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{uLampOrigin:uniforms.lampOrigin,uLampDirection:uniforms.lampDirection,uView:uniforms.view,uPixelRatio:{value:renderer.getPixelRatio()}},vertexShader:`uniform vec3 uLampOrigin,uLampDirection;uniform float uView,uPixelRatio;varying float dustAlpha;void main(){vec3 delta=(modelMatrix*vec4(position,1.)).xyz-uLampOrigin;float d=length(delta);float angle=dot(normalize(delta),uLampDirection);dustAlpha=(.06+.52*smoothstep(.875,.965,angle)*exp(-d*.035))*uView;vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(85.*uPixelRatio/max(1.,-p.z),1.,9.*uPixelRatio);}`,fragmentShader:'varying float dustAlpha;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;gl_FragColor=vec4(.63,.78,.76,pow(1.-r,2.)*dustAlpha);}' });
 const dust=new THREE.Points(dustGeo,dustMat);dust.name='deep-sea-suspended-sediment';dust.frustumCulled=false;root.add(dust);
 const regionalColors=OCEAN_STYLES.map(s=>new THREE.Color(s.water)),waterScratch=new THREE.Color();
 let weight=0,clock=0,testLightOverride=null,regionalWeights=[0,0,0,0],totalWeight=0,lampStrength=0;
 function update({player,heading,time,inspection=false,camera=null}){
  clock=time;uniforms.time.value=time;weight=deepWeight(player);regionalWeights=oceanWeights(player);totalWeight=weight+regionalWeights.reduce((a,b)=>a+b,0);uniforms.view.value=totalWeight;
  scene.background.copy(baseWater).multiplyScalar(1-totalWeight).add(waterScratch.copy(deepWater).multiplyScalar(weight));scene.fog.near=42+(9-42)*weight;scene.fog.far=155+(61-155)*weight;
  regionalWeights.forEach((w,i)=>{scene.background.add(waterScratch.copy(regionalColors[i]).multiplyScalar(w));scene.fog.near+=(OCEAN_STYLES[i].near-42)*w;scene.fog.far+=(OCEAN_STYLES[i].far-155)*w;});
  scene.fog.color.copy(scene.background);
  const backdropShade=weight*.965+regionalWeights[0]*.17+regionalWeights[1]*.53+regionalWeights[2]*.965+regionalWeights[3]*.77;
  for(const b of backdrop)b.mat.color.copy(b.color).multiplyScalar(1-backdropShade);
  // Independent scene node: hiding the exterior pod in cockpit mode cannot hide
  // this light. Origin matches the old external lamp, not the camera position.
  const forward=uniforms.lampDirection.value.set(Math.sin(heading),-.095,-Math.cos(heading)).normalize();
  uniforms.lampOrigin.value.copy(player).add(new V3(Math.sin(heading),2.02,-Math.cos(heading)));
  lamp.position.copy(uniforms.lampOrigin.value);lamp.target.position.copy(lamp.position).addScaledVector(forward,45);lampStrength=weight*360+regionalWeights.reduce((s,w,i)=>s+w*OCEAN_STYLES[i].lamp,0);lamp.intensity=testLightOverride===false?0:lampStrength;lamp.visible=lampStrength>0;lamp.shadow.autoUpdate=lampStrength>0;
  aliens.update(time);// Copies have different camera distances: render frustums/fog cull each image.
  oceanLife.update(time,null,scene.fog.far);
  // A large reef can intersect the light even when its centre is far away.
  // Use its full world-space bound; Three's shadow frustum handles the cone.
  // Shadow bounds are refreshed after the neighbour animation sync in draw().
  const p=dustGeo.attributes.position,field=[[-58,92,-8,44],[-60,38,-78,66],[25,26,-124,46],[-35,55,-150,66]][regionalWeights.indexOf(Math.max(...regionalWeights))];
  for(let i=0;i<count;i++){const x=weight>0?9+(i*8.713)%18:field[0]+(i*8.713)%field[1],z=weight>0?-31-(i*9.719)%42:field[2]+(i*9.719)%field[3],y=Math.max(floor(x,z)+.8,weight>0?-25+(i*5.831)%18:floor(x,z)+1+(i*5.831)%22);p.setXYZ(i,x+Math.sin(time*.07+i)*.13,y+Math.sin(time*.11+i*.3)*.1,z+Math.cos(time*.08+i)*.12);}p.needsUpdate=true;
  dust.visible=totalWeight>0;
 }
 function snapshot(){return {regionalWeights:Object.fromEntries(OCEAN_STYLES.map((s,i)=>[s.id,regionalWeights[i]])),regionalLife:oceanLife.snapshot(),totalWeight,caveLights:caveLights.map(o=>({color:o.color.getHexString(),intensity:o.intensity})),volume:{x:[6,31],z:[-74,-26],depthTransition:[-14,-5]},terrainShadow:{casts:!!terrain?.castShadow,receives:!!terrain?.receiveShadow,doubleSided:terrain?.material.shadowSide===THREE.DoubleSide},weight,water:{color:scene.background.getHexString(),near:scene.fog.near,far:scene.fog.far},headlight:{type:lamp.type,intensity:lamp.intensity,visible:lamp.visible,independentOfPod:true,position:lamp.position.toArray(),target:lamp.target.position.toArray(),direction:uniforms.lampDirection.value.toArray(),castsShadow:lamp.castShadow,shadowMapSize:lamp.shadow.mapSize.toArray()},styleMeshes,patchedMaterials:patched.size,sedimentLedges:ledges.length,aliens:aliens.snapshot(),time:clock};}
 return {update,updateShadows,snapshot,trackShadows,shadowBounds,at:aliens.at,focus:aliens.focus,safety:aliens.safety,envelopes:aliens.envelopes,oceanAt:oceanLife.at,oceanFocus:oceanLife.focus,oceanSafety:oceanLife.safety,oceanEnvelopes:oceanLife.envelopes,lightTest(enabled){testLightOverride=enabled;lamp.intensity=enabled?lampStrength:0;},meshes:()=>{const a=[];root.traverse(o=>{if(o.isMesh)a.push({name:o.name,type:o.type,isInstanced:!!o.isInstancedMesh});});return a;}};
}
