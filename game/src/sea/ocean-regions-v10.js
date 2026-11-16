import { oceanLocal } from './ocean-loop-v10.js';
import * as THREE from 'three';
const smooth=(a,b,x)=>{const t=THREE.MathUtils.clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
// Every positive weight stays strictly within the frozen regionAt partition.
// Transition gaps are deliberate, so a boundary never paints its neighbour.
export function oceanWeights(p){
 const {x,y,z}=oceanLocal(p),below=1-smooth(6,12,y);
 const entry=smooth(-74,-68,z)*Math.min(1,smooth(-22,-18,x)+smooth(-8,-4,z))*Math.min(1,1-smooth(3,6,x)+smooth(31,35,x)+smooth(8,12,z))*below;
 const kelp=(1-smooth(-28,-22,x))*smooth(-78,-76,z)*(1-smooth(-12,-8,z))*below;
 const cave=smooth(23,27,x)*(1-smooth(50,60,x))*smooth(-130,-124,z)*(1-smooth(-78,-74,z))*(1-smooth(-6,1,y));
 const customs=(1-smooth(18,23,x))*(1-smooth(-84,-80,z))*smooth(-154,-148,z)*(1-smooth(4,11,y));
 const envelope=(1-smooth(70,100,Math.abs(x)))*(1-smooth(36,65,z))*smooth(-175,-146,z);
 return [entry,kelp,cave,customs].map(w=>w*envelope);
}
export const OCEAN_GLSL=`
vec4 oceanVolume(vec3 p){
 p.x=mod(p.x+110.,220.)-110.;p.z=mod(p.z+179.,260.)-179.;
 float below=1.-smoothstep(6.,12.,p.y);
 float entry=smoothstep(-74.,-68.,p.z)*min(1.,smoothstep(-22.,-18.,p.x)+smoothstep(-8.,-4.,p.z))*min(1.,1.-smoothstep(3.,6.,p.x)+smoothstep(31.,35.,p.x)+smoothstep(8.,12.,p.z))*below;
 float kelp=(1.-smoothstep(-28.,-22.,p.x))*smoothstep(-78.,-76.,p.z)*(1.-smoothstep(-12.,-8.,p.z))*below;
 float cave=smoothstep(23.,27.,p.x)*(1.-smoothstep(50.,60.,p.x))*smoothstep(-130.,-124.,p.z)*(1.-smoothstep(-78.,-74.,p.z))*(1.-smoothstep(-6.,1.,p.y));
 float customs=(1.-smoothstep(18.,23.,p.x))*(1.-smoothstep(-84.,-80.,p.z))*smoothstep(-154.,-148.,p.z)*(1.-smoothstep(4.,11.,p.y));
 float envelope=(1.-smoothstep(70.,100.,abs(p.x)))*(1.-smoothstep(36.,65.,p.z))*smoothstep(-175.,-146.,p.z);
 return vec4(entry,kelp,cave,customs)*envelope;
}
vec3 oceanSolar(vec4 w){return vec3(1.)+w.x*(vec3(.83,.89,.87)-1.)+w.y*(vec3(.32,.57,.45)-1.)+w.z*(vec3(.025,.042,.07)-1.)+w.w*(vec3(.19,.27,.37)-1.);}
vec3 oceanAmbient(vec4 w){return vec3(1.)+w.x*(vec3(.88,.97,.96)-1.)+w.y*(vec3(.38,.66,.51)-1.)+w.z*(vec3(.052,.09,.13)-1.)+w.w*(vec3(.23,.33,.46)-1.);}
`;
export const OCEAN_STYLES=[
 {id:'entry',name:'珊瑚入口',water:'#0b4553',near:34,far:132,lamp:55},
 {id:'kelp',name:'海草林',water:'#082f30',near:17,far:84,lamp:240},
 {id:'cave',name:'发光洞窟',water:'#081725',near:7,far:53,lamp:330},
 {id:'customs',name:'边界海关',water:'#09283d',near:24,far:108,lamp:210}
];
