const V3_THREE=window.V3Geometry.THREE;
const hullImage=new Image();hullImage.src=window.V3_ASSETS.hull;await hullImage.decode();
const V3_GEOMETRY=window.V3Geometry.initial(hullImage);
const V3_HULL=tex(hullImage.width,hullImage.height,'rgba8unorm-srgb',TU.TEXTURE_BINDING|TU.COPY_DST|TU.RENDER_ATTACHMENT);
Q.copyExternalImageToTexture({source:hullImage},{texture:V3_HULL},[hullImage.width,hullImage.height]);
const V3_PANEL=tex(1024,256,'rgba8unorm-srgb',TU.TEXTURE_BINDING|TU.COPY_DST|TU.RENDER_ATTACHMENT);
const V3_BGL=device.createBindGroupLayout({entries:[{binding:0,visibility:VF,buffer:{minBindingSize:144}},{binding:1,visibility:SS.FRAGMENT,texture:{}},{binding:2,visibility:SS.FRAGMENT,texture:{}}]});
const V3_PL=device.createPipelineLayout({bindGroupLayouts:[bgl0,V3_BGL]});
const V3_MODULE=mod(W_V3_MODEL);
const V3_LAYOUT_VB={arrayStride:64,attributes:[A(0,0,'float32x3'),A(1,12,'float32x3'),A(2,24,'float32x2'),A(3,32,'float32x4'),A(4,48,'float32x4')]};
const V3_BLEND={color:{srcFactor:'src-alpha',dstFactor:'one-minus-src-alpha'},alpha:{srcFactor:'one',dstFactor:'one-minus-src-alpha'}};
const v3Pipeline=(interior=false,blend=false)=>device.createRenderPipeline({layout:V3_PL,vertex:{module:V3_MODULE,entryPoint:'vsModel',buffers:[V3_LAYOUT_VB]},fragment:{module:V3_MODULE,entryPoint:interior?'fsInterior':'fsModel',targets:[{format:interior?FMT:HDR,blend:blend?V3_BLEND:undefined}]},primitive:{topology:'triangle-list',cullMode:'none'},depthStencil:{format:DEPTH,depthWriteEnabled:!blend,depthCompare:'greater'},multisample:{count:interior?1:AA}});
const V3_OPAQUE=v3Pipeline(),V3_ALPHA=v3Pipeline(false,true),V3_INTERIOR=v3Pipeline(true);
let v3Buffers=0;
function v3Mesh(data){const vb=buf(data,BU.VERTEX);v3Buffers++;return {vb,count:data.length/16};}
function v3Entity(mesh,emission=0){const ub=device.createBuffer({size:144,usage:BU.UNIFORM|BU.COPY_DST});v3Buffers++;const data=new Float32Array(36);const matrix=new V3_THREE.Matrix4();data.set(matrix.elements);data.set(matrix.elements,16);data[33]=emission;const bg=device.createBindGroup({layout:V3_BGL,entries:[{binding:0,resource:{buffer:ub}},{binding:1,resource:V3_HULL.createView()},{binding:2,resource:V3_PANEL.createView()}]});return {mesh,ub,data,bg,matrix};}
const v3Body=v3Entity(v3Mesh(V3_GEOMETRY.body)),v3Glass=v3Entity(v3Mesh(V3_GEOMETRY.glass)),v3Prop=v3Entity(v3Mesh(V3_GEOMETRY.prop));
const v3ItemMeshes={pearl:v3Mesh(window.V3Geometry.pearl()),shell:v3Mesh(window.V3Geometry.shell())};
const v3Items=V3_LAYOUT.items.map(item=>({...item,entity:v3Entity(v3ItemMeshes[item.type],item.type==='pearl'?.35:.15)}));
const v3Barrier=v3Entity(v3Mesh(window.V3Geometry.barrier()));
const V3_CASTLE_DATA=window.V3Geometry.castle();
const v3Castle=v3Entity(v3Mesh(V3_CASTLE_DATA.opaque));
const v3Landmarks=['lighthouse','wreck'].map(id=>{const geometry=window.V3Geometry[id](),position=V3_LAYOUT[id].position;return {id,geometry,position,entity:v3Entity(v3Mesh(geometry.opaque))};});
const V3_CASTLE_SHADOW=device.createRenderPipeline({layout:V3_PL,vertex:{module:V3_MODULE,entryPoint:'vsShadow',buffers:[V3_LAYOUT_VB]},primitive:{topology:'triangle-list',cullMode:'none'},depthStencil:{format:DEPTH,depthWriteEnabled:true,depthCompare:'less',depthBias:2,depthBiasSlopeScale:1.5}});
// Append the static structure to the ORIGINAL baked shadow map. bg0s binds
// tDummy, not the shadow render target, so there is no read/write feedback.
v3Castle.matrix.makeTranslation(...V3_LAYOUT.castle.position);v3Castle.data.set(v3Castle.matrix.elements);Q.writeBuffer(v3Castle.ub,0,v3Castle.data);
{const e=device.createCommandEncoder();const pass=e.beginRenderPass({colorAttachments:[],depthStencilAttachment:{view:tShadow.createView(),depthLoadOp:'load',depthStoreOp:'store'}});pass.setBindGroup(0,bg0s);pass.setPipeline(V3_CASTLE_SHADOW);pass.setBindGroup(1,v3Castle.bg);pass.setVertexBuffer(0,v3Castle.mesh.vb);pass.draw(v3Castle.mesh.count);pass.end();Q.submit([e.finish()]);}
for(const item of v3Landmarks){const entity=item.entity;entity.matrix.makeTranslation(...item.position);entity.data.set(entity.matrix.elements);Q.writeBuffer(entity.ub,0,entity.data);const e=device.createCommandEncoder(),pass=e.beginRenderPass({colorAttachments:[],depthStencilAttachment:{view:tShadow.createView(),depthLoadOp:'load',depthStoreOp:'store'}});pass.setBindGroup(0,bg0s);pass.setPipeline(V3_CASTLE_SHADOW);v3DrawEntity(pass,entity);pass.end();Q.submit([e.finish()]);}
const v3CastleShadowBaked=true;
let v3Cockpit=null,v3CockpitDepth=null,v3Aspect=0,v3Size='',v3ScreenTime=-1;
const V3_PLAYER={x:V3_LAYOUT.spawn[0],y:V3_LAYOUT.spawn[1],z:V3_LAYOUT.spawn[2],heading:0,pitch:.10,vx:0,vy:0,vz:0};
const V3_STATE={view:'external',counts:{pearl:0,shell:0},unlocked:false,completed:false,continuing:false,started:false,hideAdditions:false,passages:0,frontPassages:0,backPassages:0,contacts:0,lastContact:-100,lastPassage:-100,direction:'尚未穿门',landmark:'castle'};
const v3Position=new V3_THREE.Vector3(),v3Scale=new V3_THREE.Vector3(1,1,1),v3Quat=new V3_THREE.Quaternion(),v3Euler=new V3_THREE.Euler(0,0,0,'YXZ'),v3Matrix=new V3_THREE.Matrix4(),v3Rotor=new V3_THREE.Matrix4();
function v3Transform(entity,x,y,z,heading=0,pitch=0,roll=0){v3Position.set(x,y,z);v3Euler.set(pitch,-heading,roll,'YXZ');v3Quat.setFromEuler(v3Euler);entity.matrix.compose(v3Position,v3Quat,v3Scale);entity.data.set(entity.matrix.elements);Q.writeBuffer(entity.ub,0,entity.data);}
function v3Fit(){
 // A chapter may finish loading while its iframe is display:none (0 × 0).
 // Keep a finite projection for warmup; the visible frame refits to its viewport.
 const aspect=canvas.clientWidth>0&&canvas.clientHeight>0?canvas.clientWidth/canvas.clientHeight:v3Aspect||W/H;
 if(v3Aspect!==aspect){v3Aspect=aspect;const fitted=V3_GEOMETRY.fit(aspect);if(v3Cockpit){v3Cockpit.mesh.vb.destroy();v3Cockpit.ub.destroy();v3Buffers-=2;}v3Cockpit=v3Entity(v3Mesh(fitted.geometry));v3Cockpit.data[32]=1;const h=Math.tan(68*PI/360),p=new Float32Array(16);p[0]=1/(h*aspect);p[5]=1/h;p[11]=-1;p[14]=.04;v3Cockpit.data.set(p,16);Q.writeBuffer(v3Cockpit.ub,0,v3Cockpit.data);}
 if(v3Size!==W+'x'+H){v3Size=W+'x'+H;v3CockpitDepth?.destroy();v3CockpitDepth=tex(W,H,DEPTH,TU.RENDER_ATTACHMENT);}
}
function v3Prepare(){
 const p=V3_PLAYER,time=F[TIME];v3Fit();
 v3Transform(v3Body,p.x,p.y,p.z,p.heading);v3Transform(v3Glass,p.x,p.y,p.z,p.heading);
 v3Rotor.makeTranslation(0,-1.02,2.45);v3Matrix.makeRotationZ(time*(2+Math.hypot(p.vx,p.vy,p.vz)*2));v3Prop.matrix.copy(v3Body.matrix).multiply(v3Rotor).multiply(v3Matrix);v3Prop.data.set(v3Prop.matrix.elements);Q.writeBuffer(v3Prop.ub,0,v3Prop.data);
 for(const item of v3Items)if(!item.collected){const a=item.position;v3Transform(item.entity,a[0],a[1]+sin(time*.7+Number(item.id.split('-')[1]))*.12,a[2],item.type==='shell'?.2:0,item.type==='shell'?.45:0);}
 v3Transform(v3Barrier,...V3_LAYOUT.castle.position);
 // The castle is static; its model uniform and shadow are uploaded once.
 if(time-v3ScreenTime>=.1||v3ScreenTime<0){v3ScreenTime=time;V3_GEOMETRY.update({velocity:{x:p.vx,y:p.vy,z:p.vz},heading:p.heading,time,y:p.y,surface:0});Q.copyExternalImageToTexture({source:V3_GEOMETRY.fitPanel||V3_GEOMETRY_PANEL()},{texture:V3_PANEL},[1024,256]);}
}
function V3_GEOMETRY_PANEL(){return V3_GEOMETRY.panel();}
function v3DrawEntity(pass,entity){pass.setBindGroup(1,entity.bg);pass.setVertexBuffer(0,entity.mesh.vb);pass.draw(entity.mesh.count);}
function v3DrawWorld(pass){if(V3_STATE.hideAdditions)return;pass.setBindGroup(0,bg0);pass.setPipeline(V3_OPAQUE);if(V3_STATE.view==='external'){v3DrawEntity(pass,v3Body);v3DrawEntity(pass,v3Prop);}for(const item of v3Items)if(!item.collected&&(item.position[0]-F[CX])*F[FX]+(item.position[1]-F[CY])*F[FY]+(item.position[2]-F[CZ])*F[FZ]>1.7)v3DrawEntity(pass,item.entity);v3DrawEntity(pass,v3Castle);if(!V3_STATE.unlocked)v3DrawEntity(pass,v3Barrier);for(const item of v3Landmarks)v3DrawEntity(pass,item.entity);}
function v3DrawGlass(pass){if(V3_STATE.hideAdditions||V3_STATE.view!=='external')return;pass.setBindGroup(0,bg0);pass.setPipeline(V3_ALPHA);v3DrawEntity(pass,v3Glass);}
function v3DrawCockpit(encoder,view){if(V3_STATE.hideAdditions||V3_STATE.view!=='cockpit')return;const pass=encoder.beginRenderPass({colorAttachments:[{view,loadOp:'load',storeOp:'store'}],depthStencilAttachment:{view:v3CockpitDepth.createView(),depthClearValue:0,depthLoadOp:'clear',depthStoreOp:'discard'}});pass.setBindGroup(0,bg0);pass.setPipeline(V3_INTERIOR);v3DrawEntity(pass,v3Cockpit);pass.end();}
