// The upstream world and random streams remain unchanged. Quest content uses only
// the already-carved navigation corridors and the original compressed SDF.
function v3Distance(px,py,pz){
 const x=(px-OX)/VS-CO,y=(py-OY)/VS,z=(pz-OZ)/VS-CO;
 const ix=floor(x),iy=floor(y),iz=floor(z);
 if(ix<1||ix>=CN*4-2||iz<1||iz>=CN*4-2||iy<5||iy>=NY-5)return 1;
 const voxel=(x,y,z)=>{const b=CI[(x>>2)+CN*((y>>2)+NY/4*(z>>2))];return b>1?CG[(b-2)*64+(x&3)+4*(y&3)+16*(z&3)]/127:b?1:-1;};
 const u=x-ix,v=y-iy,w=z-iz;
 return mix(mix(mix(voxel(ix,iy,iz),voxel(ix+1,iy,iz),u),mix(voxel(ix,iy+1,iz),voxel(ix+1,iy+1,iz),u),v),mix(mix(voxel(ix,iy,iz+1),voxel(ix+1,iy,iz+1),u),mix(voxel(ix,iy+1,iz+1),voxel(ix+1,iy+1,iz+1),u),v),w);
}
const V3_SPHERES=[[0,0,0,.7],[0,0,-1.18,.72],[0,0,1.35,.75],[0,0,1.95,.4],[0,1.64,-.6,.55],[0,-1.02,2.35,.58]];
for(const z of [-.7,.5])for(const axis of [[1.1,0],[-1.1,0],[0,1.1],[0,-1.1],[.8,.8],[-.8,.8],[.8,-.8],[-.8,-.8]])V3_SPHERES.push([axis[0],axis[1],z,.68]);
for(const side of [-1,1])V3_SPHERES.push([side*1.84,-.72,1.28,.44]);
function v3Offset(point,heading){const c=cos(heading),s=sin(heading);return [point[0]*c-point[2]*s,point[1],point[0]*s+point[2]*c];}
function v3Clearance(p,heading=0){let value=-Infinity;for(const q of V3_SPHERES){const o=v3Offset(q,heading);value=max(value,v3Distance(p[0]+o[0],p[1]+o[1],p[2]+o[2])+q[3]);}return value;}
function v3Layout(gy){
 const route=[];
 for(let i=0;i<FLY.length;i+=6){const x=FLY[i],z=FLY[i+2];let y=max(FLY[i+1]+3.2,gy(x,z)+4.1);while(v3Clearance([x,y,z])>-.04&&y<-3.5)y+=.5;route.push([x,y,z]);}
 // Separate castle trial: selected from collision-clear original water.
 // No original terrain, kelp, wreck or random stream is changed.
 const castle={position:[6,-43.6,12],spec:window.V3Geometry.castleSpec};
 const gate={position:[6,-35.1,12],radius:4.8};
 const spawn=[6,-35.1,26];
 const lighthouse={position:[-54,-45.25,40]};
 const wreck={position:[-64,-43.9,-50]};
 const landmarks=[
  {id:'castle',name:'海关城堡',position:gate.position,approach:spawn,heading:0},
  {id:'lighthouse',name:'迷雾灯塔',position:[-54,-26,40],approach:[-45.6,-34.2,47.8],heading:-.9273},
  {id:'wreck',name:'礁湾沉船',position:[-64,-39.4,-50],approach:[-64,-37.5,-36],heading:0}
 ];
 // Continuous navigation corridors validated against the full hull and all three structures.
 const questRoute=[[6,-35.1,26],[6,-38,44],[-22,-38,44],[-36,-38,44],[-45.6,-38,47.8],[-45.6,-34.2,47.8],[-60,-35,52],[-64,-35,40],[-64,-35,25],[-60,-35,8],[-60,-35,-16],[-60,-35,-30],[-64,-37.5,-36]];
 const lengths=questRoute.slice(1).map((b,i)=>hypot(...b.map((v,j)=>v-questRoute[i][j]))),total=lengths.reduce((a,b)=>a+b,0);
 const items=[];
 for(const [type,count,offset] of [['pearl',50,.35],['shell',20,.75]])for(let i=0;i<count;i++){
  let distance=(i+offset)/count*total,k=0;
  while(k<lengths.length-1&&distance>lengths[k])distance-=lengths[k++];
  const a=questRoute[k],b=questRoute[k+1],f=distance/lengths[k];
  items.push({id:type+'-'+i,type,position:a.map((v,j)=>mix(v,b[j],f)),collected:false});
 }
 return {items,route:questRoute,gate,spawn,castle,lighthouse,wreck,landmarks};
}
