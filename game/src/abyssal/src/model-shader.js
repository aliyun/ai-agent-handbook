const W_V3_MODEL=S_B+/*wgsl*/`
struct Object { model:mat4x4f, projection:mat4x4f, flags:vec4f };
@group(1) @binding(0) var<uniform> obj:Object;
@group(1) @binding(1) var hull:texture_2d<f32>;
@group(1) @binding(2) var panel:texture_2d<f32>;
struct MI {@location(0) p:vec3f,@location(1) n:vec3f,@location(2) uv:vec2f,@location(3) color:vec4f,@location(4) props:vec4f};
struct MO {@builtin(position) p:vec4f,@location(0) wp:vec3f,@location(1) n:vec3f,@location(2) uv:vec2f,@location(3) color:vec4f,@location(4) props:vec4f};
@vertex fn vsModel(i:MI)->MO{
 var o:MO;let w=obj.model*vec4f(i.p,1.);o.wp=w.xyz;o.n=normalize((obj.model*vec4f(i.n,0.)).xyz);o.uv=i.uv;o.color=i.color;o.props=i.props;
 if(obj.flags.x>.5){o.p=obj.projection*w;}else{o.p=g.vp*w;}return o;
}
@vertex fn vsShadow(i:MI)->@builtin(position) vec4f{return g.sm*obj.model*vec4f(i.p,1.);}
struct Stone {h:f32,c:f32,n:vec3f};
fn stoneDetail(p:vec3f,n:vec3f,s:f32,lod:f32)->Stone{
 var w=pow(abs(n),vec3f(4.));w/=max(w.x+w.y+w.z,.001);
 let x=textureSampleLevel(tD,sR,p.zy*s,lod);let y=textureSampleLevel(tD,sR,p.xz*s,lod);let z=textureSampleLevel(tD,sR,p.xy*s,lod);
 var a:Stone;a.h=dot(vec3f(x.b,y.b,z.b),w);a.c=dot(vec3f(x.a,y.a,z.a),w);
 let u=x.rg*2.-1.;let v=y.rg*2.-1.;let t=z.rg*2.-1.;a.n=vec3f(0.,u.y,u.x)*w.x+vec3f(v.x,0.,v.y)*w.y+vec3f(t.x,t.y,0.)*w.z;return a;
}
fn surface(o:MO)->vec3f{
 var albedo=o.color.rgb;
 if(o.props.w>.5&&o.props.w<1.5){albedo*=textureSampleLevel(hull,sR,vec2f(o.uv.x*3.,1.-o.uv.y)*vec2f(1.,2.),0.).rgb;}
 if(o.props.w>1.5&&o.props.w<2.5){albedo=textureSampleLevel(panel,sC,vec2f(o.uv.x,1.-o.uv.y),0.).rgb;}
 return albedo;
}
@fragment fn fsModel(o:MO,@builtin(front_facing) front:bool)->@location(0) vec4f{
 let base=surface(o);let n=select(-normalize(o.n),normalize(o.n),front);let z=zone(o.wp);let v=normalize(g.cam.xyz-o.wp);let d=distance(g.cam.xyz,o.wp);let h=normalize(g.sun.xyz+v);let caustic=caus(o.wp,d);
 if(o.props.w>2.5&&o.props.w<3.5){
  let lod=max(0.,log2(max(d,1.)*.055));let a=stoneDetail(o.wp,n,.13,lod);let b=stoneDetail(o.wp,n,.73,lod);let fine=stoneDetail(o.wp,n,3.7,lod);
  let N=normalize(n+a.n*.40+b.n*.22+fine.n*.13*ss(24.,3.,d));
  var alb=base*(.65+a.h*.4+b.h*.22);let stain=ss(.46,.72,a.c*.65+b.c*.45);
  alb=mix(alb,alb*vec3f(.45,.67,.50),stain*.36*ss(-.3,.65,n.y));
  let E=sunE(o.wp.y,z)*shadow9(o.wp+n*.12);let ca=caustic;let v1=vol(o.wp+n*1.5);let v2=vol(o.wp+n*4.5);
  let ao=sat((v1.r-.5)*8.)*.55+sat((v2.r-.5)*2.7)*.45;
  let am=(amb(o.wp,N,v1.g,z)+side(o.wp,N,sat((v2.r-.5)*2.7),z))*max(.3,ao);
  let dl=E*max(dot(N,g.sun.xyz),0.)*(.10+mix(vec3f(.33),ca,ss(.1,.45,dot(n,g.sun.xyz)))*2.5);
  return vec4f(fog(alb*(dl+am),o.wp,z),o.color.a);
 }
 if(o.props.w>3.5){
  let lod=max(0.,log2(max(d,1.)*.045));
  let grain=textureSampleLevel(tD,sR,vec2f(o.wp.x*.075,(o.wp.y+o.wp.z*.35)*2.7),lod);
  let weather=stoneDetail(o.wp,n,.17,lod);
  let N=normalize(n+weather.n*.18);
  var alb=base*(.63+grain.b*.62+weather.h*.22);
  alb=mix(alb,vec3f(.08,.22,.16),ss(.5,.7,weather.c)*.6);
  let E=sunE(o.wp.y,z)*shadow9(o.wp+n*.1);
  let ambient=amb(o.wp,N,vol(o.wp+n*.5).g,z)+side(o.wp,N,sat((vol(o.wp+n*4.5).r-.5)*2.7),z)*.75;
  let lit=ambient+E*max(dot(N,g.sun.xyz),0.)*(.18+caustic*1.8);
  return vec4f(fog(alb*lit,o.wp,z),o.color.a);
 }
 let ambient=amb(o.wp,n,vol(o.wp).g,z);let shadow=shadow4(o.wp);let sunlight=sunE(o.wp.y,z)*shadow;
 let diffuse=base*(ambient+sunlight*max(dot(n,g.sun.xyz),0.)*(.24+caustic*.48));
 let rough=o.props.y;let shine=pow(max(dot(n,h),0.),mix(110.,12.,rough));let fresnel=pow(1.-max(dot(n,v),0.),4.);
 var c=diffuse+sunlight*shine*mix(vec3f(.12),base,o.props.x)*(1.-rough)*2.5+side(o.wp,n,vol(o.wp).r,z)*fresnel*.24;
 c=mix(c,base*2.,o.props.z);if(obj.flags.y>.5){c+=base*obj.flags.y;}
 return vec4f(fog(c,o.wp,z),o.color.a);
}
@fragment fn fsInterior(o:MO,@builtin(front_facing) front:bool)->@location(0) vec4f{
 let base=surface(o);let n=select(-normalize(o.n),normalize(o.n),front);let light=normalize(vec3f(-.25,.8,.8));let eye=normalize(-o.wp);let h=normalize(light+eye);
 let hemi=mix(vec3f(.13,.19,.20),vec3f(.54,.73,.73),n.y*.5+.5);
 let warm=vec3f(.72,.48,.23)*max(dot(n,normalize(vec3f(.3,-.15,.6)-o.wp)),0.)*.42;
 var c=base*(hemi+warm+max(dot(n,light),0.)*.35)+vec3f(.2,.21,.17)*pow(max(dot(n,h),0.),40.)*o.props.x;
 c=mix(c,base,o.props.z);c=c/(c+vec3f(.7));c=pow(max(c,vec3f(0.)),vec3f(1./2.2));
 if(o.props.w>1.5&&o.props.w<2.5){c=pow(base,vec3f(1./2.2));}
 return vec4f(c,o.color.a);
}
`;
