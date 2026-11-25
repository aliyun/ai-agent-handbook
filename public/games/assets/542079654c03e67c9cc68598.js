/* SPDX-License-Identifier: MIT
MIT License

Copyright (c) 2026 Maksymilian Dendura

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


Three.js — geometry construction only; native WebGPU renders all scenes.
The MIT License

Copyright © 2010-2025 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


Local derivative additions: submarine, cockpit and collection quest.

*/
(()=>{var Xm=Object.defineProperty;var qm=(s,t)=>{for(var e in t)Xm(s,e,{get:t[e],enumerable:!0})};var Xi={};qm(Xi,{ACESFilmicToneMapping:()=>td,AddEquation:()=>hi,AddOperation:()=>Ju,AdditiveAnimationBlendMode:()=>xh,AdditiveBlending:()=>Lr,AgXToneMapping:()=>nd,AlphaFormat:()=>mh,AlwaysCompare:()=>vd,AlwaysDepth:()=>ya,AlwaysStencilFunc:()=>tc,AmbientLight:()=>oa,AnimationAction:()=>_a,AnimationClip:()=>Gi,AnimationLoader:()=>xc,AnimationMixer:()=>Pc,AnimationObjectGroup:()=>Ic,AnimationUtils:()=>_c,ArcCurve:()=>Uo,ArrayCamera:()=>fa,ArrowHelper:()=>eh,AttachedBindMode:()=>jl,Audio:()=>ma,AudioAnalyser:()=>Cc,AudioContext:()=>Dr,AudioListener:()=>Ac,AudioLoader:()=>Tc,AxesHelper:()=>nh,BackSide:()=>Ze,BasicDepthPacking:()=>ud,BasicShadowMap:()=>up,BatchedMesh:()=>Ao,Bone:()=>mr,BooleanKeyframeTrack:()=>Zn,Box2:()=>kc,Box3:()=>Ee,Box3Helper:()=>jc,BoxGeometry:()=>he,BoxHelper:()=>Qc,BufferAttribute:()=>ie,BufferGeometry:()=>Ht,BufferGeometryLoader:()=>da,ByteType:()=>uh,Cache:()=>Nn,Camera:()=>ps,CameraHelper:()=>Kc,CanvasTexture:()=>Fi,CapsuleGeometry:()=>Po,CatmullRomCurve3:()=>xs,CineonToneMapping:()=>ju,CircleGeometry:()=>yn,ClampToEdgeWrapping:()=>fn,Clock:()=>pa,Color:()=>Tt,ColorKeyframeTrack:()=>Cr,ColorManagement:()=>ee,CompressedArrayTexture:()=>pc,CompressedCubeTexture:()=>mc,CompressedTexture:()=>gs,CompressedTextureLoader:()=>yc,ConeGeometry:()=>Bi,ConstantAlphaFactor:()=>Yu,ConstantColorFactor:()=>Xu,Controls:()=>sh,CubeCamera:()=>_o,CubeReflectionMapping:()=>Qn,CubeRefractionMapping:()=>xi,CubeTexture:()=>Ui,CubeTextureLoader:()=>vc,CubeUVReflectionMapping:()=>bs,CubicBezierCurve:()=>yr,CubicBezierCurve3:()=>No,CubicInterpolant:()=>ta,CullFaceBack:()=>oh,CullFaceFront:()=>Cu,CullFaceFrontBack:()=>hp,CullFaceNone:()=>Ru,Curve:()=>ln,CurvePath:()=>Bo,CustomBlending:()=>Pu,CustomToneMapping:()=>ed,CylinderGeometry:()=>Te,Cylindrical:()=>Hc,Data3DTexture:()=>ds,DataArrayTexture:()=>us,DataTexture:()=>mn,DataTextureLoader:()=>Mc,DataUtils:()=>ic,DecrementStencilOp:()=>Sp,DecrementWrapStencilOp:()=>Ep,DefaultLoadingManager:()=>Rd,DepthFormat:()=>ls,DepthStencilFormat:()=>Rs,DepthTexture:()=>_r,DetachedBindMode:()=>sd,DirectionalLight:()=>ra,DirectionalLightHelper:()=>Jc,DiscreteInterpolant:()=>ea,DodecahedronGeometry:()=>Do,DoubleSide:()=>He,DstAlphaFactor:()=>Hu,DstColorFactor:()=>ku,DynamicCopyUsage:()=>zp,DynamicDrawUsage:()=>Lp,DynamicReadUsage:()=>Fp,EdgesGeometry:()=>Lo,EllipseCurve:()=>_s,EqualCompare:()=>gd,EqualDepth:()=>Ma,EqualStencilFunc:()=>Rp,EquirectangularReflectionMapping:()=>Nr,EquirectangularRefractionMapping:()=>Fr,Euler:()=>on,EventDispatcher:()=>gn,ExternalTexture:()=>xr,ExtrudeGeometry:()=>Ye,FileLoader:()=>wn,Float16BufferAttribute:()=>cc,Float32BufferAttribute:()=>vt,FloatType:()=>je,Fog:()=>vo,FogExp2:()=>yo,FramebufferTexture:()=>fc,FrontSide:()=>qn,Frustum:()=>pi,FrustumArray:()=>wo,GLBufferAttribute:()=>Fc,GLSL1:()=>Vp,GLSL3:()=>vh,GreaterCompare:()=>_d,GreaterDepth:()=>ba,GreaterEqualCompare:()=>yd,GreaterEqualDepth:()=>Sa,GreaterEqualStencilFunc:()=>Dp,GreaterStencilFunc:()=>Ip,GridHelper:()=>Zc,Group:()=>me,HalfFloatType:()=>ws,HemisphereLight:()=>Ms,HemisphereLightHelper:()=>Yc,IcosahedronGeometry:()=>Tn,ImageBitmapLoader:()=>Ec,ImageLoader:()=>Wi,ImageUtils:()=>go,IncrementStencilOp:()=>Mp,IncrementWrapStencilOp:()=>bp,InstancedBufferAttribute:()=>Yn,InstancedBufferGeometry:()=>ua,InstancedInterleavedBuffer:()=>Nc,InstancedMesh:()=>To,Int16BufferAttribute:()=>ac,Int32BufferAttribute:()=>lc,Int8BufferAttribute:()=>sc,IntType:()=>wa,InterleavedBuffer:()=>Ni,InterleavedBufferAttribute:()=>fi,Interpolant:()=>zi,InterpolateDiscrete:()=>rr,InterpolateLinear:()=>mo,InterpolateSmooth:()=>lo,InterpolationSamplingMode:()=>Wp,InterpolationSamplingType:()=>Gp,InvertStencilOp:()=>Tp,KeepStencilOp:()=>Ai,KeyframeTrack:()=>tn,LOD:()=>So,LatheGeometry:()=>gi,Layers:()=>fs,LessCompare:()=>md,LessDepth:()=>va,LessEqualCompare:()=>yh,LessEqualDepth:()=>Pi,LessEqualStencilFunc:()=>Cp,LessStencilFunc:()=>Ap,Light:()=>On,LightProbe:()=>ca,Line:()=>Fn,Line3:()=>Gc,LineBasicMaterial:()=>ze,LineCurve:()=>vr,LineCurve3:()=>Fo,LineDashedMaterial:()=>jo,LineLoop:()=>Ro,LineSegments:()=>xn,LinearFilter:()=>Pe,LinearInterpolant:()=>Rr,LinearMipMapLinearFilter:()=>mp,LinearMipMapNearestFilter:()=>pp,LinearMipmapLinearFilter:()=>Hn,LinearMipmapNearestFilter:()=>Br,LinearSRGBColorSpace:()=>Li,LinearToneMapping:()=>Ku,LinearTransfer:()=>ar,Loader:()=>ke,LoaderUtils:()=>Pr,LoadingManager:()=>Ir,LoopOnce:()=>rd,LoopPingPong:()=>ad,LoopRepeat:()=>od,MOUSE:()=>lp,Material:()=>Ue,MaterialLoader:()=>ha,MathUtils:()=>Cs,Matrix2:()=>Vc,Matrix3:()=>Zt,Matrix4:()=>Xt,MaxEquation:()=>Nu,Mesh:()=>$t,MeshBasicMaterial:()=>ge,MeshDepthMaterial:()=>wr,MeshDistanceMaterial:()=>Ar,MeshLambertMaterial:()=>Ko,MeshMatcapMaterial:()=>Qo,MeshNormalMaterial:()=>Jo,MeshPhongMaterial:()=>Zo,MeshPhysicalMaterial:()=>Oi,MeshStandardMaterial:()=>ue,MeshToonMaterial:()=>$o,MinEquation:()=>Uu,MirroredRepeatWrapping:()=>sr,MixOperation:()=>$u,MultiplyBlending:()=>ch,MultiplyOperation:()=>Ur,NearestFilter:()=>Oe,NearestMipMapLinearFilter:()=>fp,NearestMipMapNearestFilter:()=>dp,NearestMipmapLinearFilter:()=>Es,NearestMipmapNearestFilter:()=>hh,NeutralToneMapping:()=>id,NeverCompare:()=>pd,NeverDepth:()=>xa,NeverStencilFunc:()=>wp,NoBlending:()=>Jn,NoColorSpace:()=>ti,NoToneMapping:()=>Kn,NormalAnimationBlendMode:()=>ol,NormalBlending:()=>Ii,NotEqualCompare:()=>xd,NotEqualDepth:()=>Ea,NotEqualStencilFunc:()=>Pp,NumberKeyframeTrack:()=>Hi,Object3D:()=>re,ObjectLoader:()=>bc,ObjectSpaceNormalMap:()=>fd,OctahedronGeometry:()=>Tr,OneFactor:()=>Bu,OneMinusConstantAlphaFactor:()=>Zu,OneMinusConstantColorFactor:()=>qu,OneMinusDstAlphaFactor:()=>Vu,OneMinusDstColorFactor:()=>Gu,OneMinusSrcAlphaFactor:()=>po,OneMinusSrcColorFactor:()=>zu,OrthographicCamera:()=>Ss,PCFShadowMap:()=>ah,PCFSoftShadowMap:()=>Iu,PMREMGenerator:()=>ll,Path:()=>vn,PerspectiveCamera:()=>be,Plane:()=>Dn,PlaneGeometry:()=>Bn,PlaneHelper:()=>th,PointLight:()=>_i,PointLightHelper:()=>qc,Points:()=>Co,PointsMaterial:()=>gr,PolarGridHelper:()=>$c,PolyhedronGeometry:()=>mi,PositionalAudio:()=>Rc,PropertyBinding:()=>ae,PropertyMixer:()=>ga,QuadraticBezierCurve:()=>Mr,QuadraticBezierCurve3:()=>Sr,Quaternion:()=>Ve,QuaternionKeyframeTrack:()=>Vi,QuaternionLinearInterpolant:()=>na,RED_GREEN_RGTC2_Format:()=>sl,RED_RGTC1_Format:()=>nl,REVISION:()=>Au,RGBADepthPacking:()=>dd,RGBAFormat:()=>qe,RGBAIntegerFormat:()=>Pa,RGBA_ASTC_10x10_Format:()=>Ja,RGBA_ASTC_10x5_Format:()=>Ya,RGBA_ASTC_10x6_Format:()=>Za,RGBA_ASTC_10x8_Format:()=>$a,RGBA_ASTC_12x10_Format:()=>Ka,RGBA_ASTC_12x12_Format:()=>Qa,RGBA_ASTC_4x4_Format:()=>za,RGBA_ASTC_5x4_Format:()=>Ha,RGBA_ASTC_5x5_Format:()=>Va,RGBA_ASTC_6x5_Format:()=>ka,RGBA_ASTC_6x6_Format:()=>Ga,RGBA_ASTC_8x5_Format:()=>Wa,RGBA_ASTC_8x6_Format:()=>Xa,RGBA_ASTC_8x8_Format:()=>qa,RGBA_BPTC_Format:()=>ja,RGBA_ETC2_EAC_Format:()=>Oa,RGBA_PVRTC_2BPPV1_Format:()=>Na,RGBA_PVRTC_4BPPV1_Format:()=>Ua,RGBA_S3TC_DXT1_Format:()=>Hr,RGBA_S3TC_DXT3_Format:()=>Vr,RGBA_S3TC_DXT5_Format:()=>kr,RGBDepthPacking:()=>_p,RGBFormat:()=>gh,RGBIntegerFormat:()=>gp,RGB_BPTC_SIGNED_Format:()=>tl,RGB_BPTC_UNSIGNED_Format:()=>el,RGB_ETC1_Format:()=>Fa,RGB_ETC2_Format:()=>Ba,RGB_PVRTC_2BPPV1_Format:()=>La,RGB_PVRTC_4BPPV1_Format:()=>Da,RGB_S3TC_DXT1_Format:()=>zr,RGDepthPacking:()=>xp,RGFormat:()=>_h,RGIntegerFormat:()=>Ia,RawShaderMaterial:()=>Yo,Ray:()=>ui,Raycaster:()=>Bc,RectAreaLight:()=>aa,RedFormat:()=>Ca,RedIntegerFormat:()=>Or,ReinhardToneMapping:()=>Qu,RenderTarget:()=>ur,RenderTarget3D:()=>Dc,RepeatWrapping:()=>Di,ReplaceStencilOp:()=>vp,ReverseSubtractEquation:()=>Lu,RingGeometry:()=>Vo,SIGNED_RED_GREEN_RGTC2_Format:()=>rl,SIGNED_RED_RGTC1_Format:()=>il,SRGBColorSpace:()=>Le,SRGBTransfer:()=>le,Scene:()=>di,ShaderChunk:()=>jt,ShaderLib:()=>Vn,ShaderMaterial:()=>an,ShadowMaterial:()=>qo,Shape:()=>Re,ShapeGeometry:()=>ko,ShapePath:()=>ih,ShapeUtils:()=>En,ShortType:()=>dh,Skeleton:()=>Eo,SkeletonHelper:()=>Xc,SkinnedMesh:()=>bo,Source:()=>Un,Sphere:()=>De,SphereGeometry:()=>we,Spherical:()=>zc,SphericalHarmonics3:()=>la,SplineCurve:()=>br,SpotLight:()=>sa,SpotLightHelper:()=>Wc,Sprite:()=>Mo,SpriteMaterial:()=>pr,SrcAlphaFactor:()=>fo,SrcAlphaSaturateFactor:()=>Wu,SrcColorFactor:()=>Ou,StaticCopyUsage:()=>Op,StaticDrawUsage:()=>lr,StaticReadUsage:()=>Np,StereoCamera:()=>wc,StreamCopyUsage:()=>Hp,StreamDrawUsage:()=>Up,StreamReadUsage:()=>Bp,StringKeyframeTrack:()=>$n,SubtractEquation:()=>Du,SubtractiveBlending:()=>lh,TOUCH:()=>cp,TangentSpaceNormalMap:()=>yi,TetrahedronGeometry:()=>Go,Texture:()=>ve,TextureLoader:()=>Sc,TextureUtils:()=>rh,Timer:()=>Oc,TimestampQuery:()=>kp,TorusGeometry:()=>Ce,TorusKnotGeometry:()=>Wo,Triangle:()=>Ln,TriangleFanDrawMode:()=>hd,TriangleStripDrawMode:()=>cd,TrianglesDrawMode:()=>ld,TubeGeometry:()=>vs,UVMapping:()=>Ta,Uint16BufferAttribute:()=>dr,Uint32BufferAttribute:()=>fr,Uint8BufferAttribute:()=>rc,Uint8ClampedBufferAttribute:()=>oc,Uniform:()=>Lc,UniformsGroup:()=>Uc,UniformsLib:()=>St,UniformsUtils:()=>Td,UnsignedByteType:()=>An,UnsignedInt101111Type:()=>ph,UnsignedInt248Type:()=>As,UnsignedInt5999Type:()=>fh,UnsignedIntType:()=>jn,UnsignedShort4444Type:()=>Aa,UnsignedShort5551Type:()=>Ra,UnsignedShortType:()=>Ts,VSMShadowMap:()=>zn,Vector2:()=>rt,Vector3:()=>C,Vector4:()=>ne,VectorKeyframeTrack:()=>ki,VideoFrameTexture:()=>dc,VideoTexture:()=>Io,WebGL3DRenderTarget:()=>nc,WebGLArrayRenderTarget:()=>ec,WebGLCoordinateSystem:()=>rn,WebGLCubeRenderTarget:()=>xo,WebGLRenderTarget:()=>_n,WebGLRenderer:()=>Xd,WebGLUtils:()=>Cm,WebGPUCoordinateSystem:()=>cs,WebXRController:()=>ms,WireframeGeometry:()=>Xo,WrapAroundEnding:()=>or,ZeroCurvatureEnding:()=>Ri,ZeroFactor:()=>Fu,ZeroSlopeEnding:()=>Ci,ZeroStencilOp:()=>yp,createCanvasElement:()=>bd});var Au="180",lp={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},cp={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ru=0,oh=1,Cu=2,hp=3,up=0,ah=1,Iu=2,zn=3,qn=0,Ze=1,He=2,Jn=0,Ii=1,Lr=2,lh=3,ch=4,Pu=5,hi=100,Du=101,Lu=102,Uu=103,Nu=104,Fu=200,Bu=201,Ou=202,zu=203,fo=204,po=205,Hu=206,Vu=207,ku=208,Gu=209,Wu=210,Xu=211,qu=212,Yu=213,Zu=214,xa=0,ya=1,va=2,Pi=3,Ma=4,Sa=5,ba=6,Ea=7,Ur=0,$u=1,Ju=2,Kn=0,Ku=1,Qu=2,ju=3,td=4,ed=5,nd=6,id=7,jl="attached",sd="detached",Ta=300,Qn=301,xi=302,Nr=303,Fr=304,bs=306,Di=1e3,fn=1001,sr=1002,Oe=1003,hh=1004,dp=1004,Es=1005,fp=1005,Pe=1006,Br=1007,pp=1007,Hn=1008,mp=1008,An=1009,uh=1010,dh=1011,Ts=1012,wa=1013,jn=1014,je=1015,ws=1016,Aa=1017,Ra=1018,As=1020,fh=35902,ph=35899,mh=1021,gh=1022,qe=1023,ls=1026,Rs=1027,Ca=1028,Or=1029,_h=1030,Ia=1031,gp=1032,Pa=1033,zr=33776,Hr=33777,Vr=33778,kr=33779,Da=35840,La=35841,Ua=35842,Na=35843,Fa=36196,Ba=37492,Oa=37496,za=37808,Ha=37809,Va=37810,ka=37811,Ga=37812,Wa=37813,Xa=37814,qa=37815,Ya=37816,Za=37817,$a=37818,Ja=37819,Ka=37820,Qa=37821,ja=36492,tl=36494,el=36495,nl=36283,il=36284,sl=36285,rl=36286,rd=2200,od=2201,ad=2202,rr=2300,mo=2301,lo=2302,Ri=2400,Ci=2401,or=2402,ol=2500,xh=2501,ld=0,cd=1,hd=2,ud=3200,dd=3201,_p=3202,xp=3203,yi=0,fd=1,ti="",Le="srgb",Li="srgb-linear",ar="linear",le="srgb",yp=0,Ai=7680,vp=7681,Mp=7682,Sp=7683,bp=34055,Ep=34056,Tp=5386,wp=512,Ap=513,Rp=514,Cp=515,Ip=516,Pp=517,Dp=518,tc=519,pd=512,md=513,gd=514,yh=515,_d=516,xd=517,yd=518,vd=519,lr=35044,Lp=35048,Up=35040,Np=35045,Fp=35049,Bp=35041,Op=35046,zp=35050,Hp=35042,Vp="100",vh="300 es",rn=2e3,cs=2001,kp={COMPUTE:"compute",RENDER:"render"},Gp={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Wp={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tf=1234567,as=Math.PI/180,hs=180/Math.PI;function pn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Gt(s,t,e){return Math.max(t,Math.min(e,s))}function Md(s,t){return(s%t+t)%t}function Ym(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Zm(s,t,e){return s!==t?(e-s)/(t-s):0}function co(s,t,e){return(1-e)*s+e*t}function $m(s,t,e,n){return co(s,t,1-Math.exp(-e*n))}function Jm(s,t=1){return t-Math.abs(Md(s,t*2)-t)}function Km(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Qm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function jm(s,t){return s+Math.floor(Math.random()*(t-s+1))}function tg(s,t){return s+Math.random()*(t-s)}function eg(s){return s*(.5-Math.random())}function ng(s){s!==void 0&&(tf=s);let t=tf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ig(s){return s*as}function sg(s){return s*hs}function rg(s){return(s&s-1)===0&&s!==0}function og(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ag(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lg(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Kt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Cs={DEG2RAD:as,RAD2DEG:hs,generateUUID:pn,clamp:Gt,euclideanModulo:Md,mapLinear:Ym,inverseLerp:Zm,lerp:co,damp:$m,pingpong:Jm,smoothstep:Km,smootherstep:Qm,randInt:jm,randFloat:tg,randFloatSpread:eg,seededRandom:ng,degToRad:ig,radToDeg:sg,isPowerOfTwo:rg,ceilPowerOfTwo:og,floorPowerOfTwo:ag,setQuaternionFromProperEuler:lg,normalize:Kt,denormalize:Qe},rt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==m){let g=1-a,p=l*d+c*f+h*m+u*_,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let T=Math.sqrt(v),E=Math.atan2(T,p*M);g=Math.sin(g*E)/T,a=Math.sin(a*E)/T}let y=a*M;if(l=l*g+d*y,c=c*g+f*y,h=h*g+m*y,u=u*g+_*y,g===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ef.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ef.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ph.copy(this).projectOnVector(t),this.sub(Ph)}reflect(t){return this.sub(Ph.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ph=new C,ef=new Ve,Zt=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],M=i[1],v=i[4],y=i[7],T=i[2],E=i[5],R=i[8];return r[0]=o*_+a*M+l*T,r[3]=o*g+a*v+l*E,r[6]=o*p+a*y+l*R,r[1]=c*_+h*M+u*T,r[4]=c*g+h*v+u*E,r[7]=c*p+h*y+u*R,r[2]=d*_+f*M+m*T,r[5]=d*g+f*v+m*E,r[8]=d*p+f*y+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Dh.makeScale(t,e)),this}rotate(t){return this.premultiply(Dh.makeRotation(-t)),this}translate(t,e){return this.premultiply(Dh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Dh=new Zt;function Sd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}var cg={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function nr(s,t){return new cg[s](t)}function cr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bd(){let s=cr("canvas");return s.style.display="block",s}var nf={};function hr(s){s in nf||(nf[s]=!0,console.warn(s))}function Xp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var sf=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rf=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hg(){let s={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===le&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===le&&(i.r=ir(i.r),i.g=ir(i.g),i.b=ir(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ti?ar:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return hr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return hr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Li]:{primaries:t,whitePoint:n,transfer:ar,toXYZ:sf,fromXYZ:rf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:le,toXYZ:sf,fromXYZ:rf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),s}var ee=hg();function ci(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ir(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Fs,go=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fs===void 0&&(Fs=cr("canvas")),Fs.width=t.width,Fs.height=t.height;let i=Fs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Fs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=cr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ug=0,Un=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=pn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Lh(i[o].image)):r.push(Lh(i[o]))}else r=Lh(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Lh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?go.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dg=0,Uh=new C,ve=class s extends gn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=fn,i=fn,r=Pe,o=Hn,a=qe,l=An,c=s.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=pn(),this.name="",this.source=new Un(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ta)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case fn:t.x=t.x<0?0:1;break;case sr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case fn:t.y=t.y<0?0:1;break;case sr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ve.DEFAULT_IMAGE=null;ve.DEFAULT_MAPPING=Ta;ve.DEFAULT_ANISOTROPY=1;var ne=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,y=(f+1)/2,T=(p+1)/2,E=(h+d)/4,R=(u+_)/4,I=(m+g)/4;return v>y&&v>T?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=E/n,r=R/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=I/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=R/r,i=I/r),this.set(n,i,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ur=class extends gn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new ve(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Un(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends ur{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},us=class extends ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},ec=class extends _n{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new us(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},ds=class extends ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nc=class extends _n{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new ds(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},Ee=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ul.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ul.copy(n.boundingBox)),ul.applyMatrix4(t.matrixWorld),this.union(ul)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zr),dl.subVectors(this.max,Zr),Bs.subVectors(t.a,Zr),Os.subVectors(t.b,Zr),zs.subVectors(t.c,Zr),vi.subVectors(Os,Bs),Mi.subVectors(zs,Os),Zi.subVectors(Bs,zs);let e=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-Zi.z,Zi.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,Zi.z,0,-Zi.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-Zi.y,Zi.x,0];return!Nh(e,Bs,Os,zs,dl)||(e=[1,0,0,0,1,0,0,0,1],!Nh(e,Bs,Os,zs,dl))?!1:(fl.crossVectors(vi,Mi),e=[fl.x,fl.y,fl.z],Nh(e,Bs,Os,zs,dl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ni=[new C,new C,new C,new C,new C,new C,new C,new C],Cn=new C,ul=new Ee,Bs=new C,Os=new C,zs=new C,vi=new C,Mi=new C,Zi=new C,Zr=new C,dl=new C,fl=new C,$i=new C;function Nh(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){$i.fromArray(s,r);let a=i.x*Math.abs($i.x)+i.y*Math.abs($i.y)+i.z*Math.abs($i.z),l=t.dot($i),c=e.dot($i),h=n.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var fg=new Ee,$r=new C,Fh=new C,De=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):fg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$r.subVectors(t,this.center);let e=$r.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector($r,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($r.copy(t.center).add(Fh)),this.expandByPoint($r.copy(t.center).sub(Fh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ii=new C,Bh=new C,pl=new C,Si=new C,Oh=new C,ml=new C,zh=new C,ui=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Bh.copy(t).add(e).multiplyScalar(.5),pl.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(Bh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(pl),a=Si.dot(this.direction),l=-Si.dot(pl),c=Si.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Bh).addScaledVector(pl,d),f}intersectSphere(t,e){ii.subVectors(t.center,this.origin);let n=ii.dot(this.direction),i=ii.dot(ii)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,i,r){Oh.subVectors(e,t),ml.subVectors(n,t),zh.crossVectors(Oh,ml);let o=this.direction.dot(zh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,t);let l=a*this.direction.dot(ml.crossVectors(Si,ml));if(l<0)return null;let c=a*this.direction.dot(Oh.cross(Si));if(c<0||l+c>o)return null;let h=-a*Si.dot(zh);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,m,_,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,m,_,g)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Hs.setFromMatrixColumn(t,0).length(),r=1/Hs.setFromMatrixColumn(t,1).length(),o=1/Hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pg,t,mg)}lookAt(t,e,n){let i=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),bi.crossVectors(n,un),bi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),bi.crossVectors(n,un)),bi.normalize(),gl.crossVectors(un,bi),i[0]=bi.x,i[4]=gl.x,i[8]=un.x,i[1]=bi.y,i[5]=gl.y,i[9]=un.y,i[2]=bi.z,i[6]=gl.z,i[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],M=n[3],v=n[7],y=n[11],T=n[15],E=i[0],R=i[4],I=i[8],S=i[12],x=i[1],w=i[5],N=i[9],O=i[13],B=i[2],V=i[6],q=i[10],at=i[14],J=i[3],ut=i[7],gt=i[11],wt=i[15];return r[0]=o*E+a*x+l*B+c*J,r[4]=o*R+a*w+l*V+c*ut,r[8]=o*I+a*N+l*q+c*gt,r[12]=o*S+a*O+l*at+c*wt,r[1]=h*E+u*x+d*B+f*J,r[5]=h*R+u*w+d*V+f*ut,r[9]=h*I+u*N+d*q+f*gt,r[13]=h*S+u*O+d*at+f*wt,r[2]=m*E+_*x+g*B+p*J,r[6]=m*R+_*w+g*V+p*ut,r[10]=m*I+_*N+g*q+p*gt,r[14]=m*S+_*O+g*at+p*wt,r[3]=M*E+v*x+y*B+T*J,r[7]=M*R+v*w+y*V+T*ut,r[11]=M*I+v*N+y*q+T*gt,r[15]=M*S+v*O+y*at+T*wt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],M=u*g*c-_*d*c+_*l*f-a*g*f-u*l*p+a*d*p,v=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,y=h*_*c-m*u*c+m*a*f-o*_*f-h*a*p+o*u*p,T=m*u*l-h*_*l-m*a*d+o*_*d+h*a*g-o*u*g,E=e*M+n*v+i*y+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return t[0]=M*R,t[1]=(_*d*r-u*g*r-_*i*f+n*g*f+u*i*p-n*d*p)*R,t[2]=(a*g*r-_*l*r+_*i*c-n*g*c-a*i*p+n*l*p)*R,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*R,t[4]=v*R,t[5]=(h*g*r-m*d*r+m*i*f-e*g*f-h*i*p+e*d*p)*R,t[6]=(m*l*r-o*g*r-m*i*c+e*g*c+o*i*p-e*l*p)*R,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*R,t[8]=y*R,t[9]=(m*u*r-h*_*r-m*n*f+e*_*f+h*n*p-e*u*p)*R,t[10]=(o*_*r-m*a*r+m*n*c-e*_*c-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*R,t[12]=T*R,t[13]=(h*_*i-m*u*i+m*n*d-e*_*d-h*n*g+e*u*g)*R,t[14]=(m*a*i-o*_*i-m*n*l+e*_*l+o*n*g-e*a*g)*R,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,_=o*h,g=o*u,p=a*u,M=l*c,v=l*h,y=l*u,T=n.x,E=n.y,R=n.z;return i[0]=(1-(_+p))*T,i[1]=(f+y)*T,i[2]=(m-v)*T,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(d+p))*E,i[6]=(g+M)*E,i[7]=0,i[8]=(m+v)*R,i[9]=(g-M)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Hs.set(i[0],i[1],i[2]).length(),o=Hs.set(i[4],i[5],i[6]).length(),a=Hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],In.copy(this);let c=1/r,h=1/o,u=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,e.setFromRotationMatrix(In),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=rn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===rn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===cs)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=rn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===rn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===cs)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Hs=new C,In=new Xt,pg=new C(0,0,0),mg=new C(1,1,1),bi=new C,gl=new C,un=new C,of=new Xt,af=new Ve,on=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return of.makeRotationFromQuaternion(t),this.setFromRotationMatrix(of,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return af.setFromEuler(this),this.setFromQuaternion(af,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER="XYZ";var fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gg=0,lf=new C,Vs=new Ve,si=new Xt,_l=new C,Jr=new C,_g=new C,xg=new Ve,cf=new C(1,0,0),hf=new C(0,1,0),uf=new C(0,0,1),df={type:"added"},yg={type:"removed"},ks={type:"childadded",child:null},Hh={type:"childremoved",child:null},re=class s extends gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new C,e=new on,n=new Ve,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Zt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(cf,t)}rotateY(t){return this.rotateOnAxis(hf,t)}rotateZ(t){return this.rotateOnAxis(uf,t)}translateOnAxis(t,e){return lf.copy(t).applyQuaternion(this.quaternion),this.position.add(lf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cf,t)}translateY(t){return this.translateOnAxis(hf,t)}translateZ(t){return this.translateOnAxis(uf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_l.copy(t):_l.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Jr,_l,this.up):si.lookAt(_l,Jr,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),Vs.setFromRotationMatrix(si),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(df),ks.child=t,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yg),Hh.child=t,this.dispatchEvent(Hh),Hh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(df),ks.child=t,this.dispatchEvent(ks),ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,t,_g),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,xg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};re.DEFAULT_UP=new C(0,1,0);re.DEFAULT_MATRIX_AUTO_UPDATE=!0;re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new C,ri=new C,Vh=new C,oi=new C,Gs=new C,Ws=new C,ff=new C,kh=new C,Gh=new C,Wh=new C,Xh=new ne,qh=new ne,Yh=new ne,Ln=class s{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Pn.subVectors(t,e),i.cross(Pn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Pn.subVectors(i,e),ri.subVectors(n,e),Vh.subVectors(t,e);let o=Pn.dot(Pn),a=Pn.dot(ri),l=Pn.dot(Vh),c=ri.dot(ri),h=ri.dot(Vh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Xh.setScalar(0),qh.setScalar(0),Yh.setScalar(0),Xh.fromBufferAttribute(t,e),qh.fromBufferAttribute(t,n),Yh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Xh,r.x),o.addScaledVector(qh,r.y),o.addScaledVector(Yh,r.z),o}static isFrontFacing(t,e,n,i){return Pn.subVectors(n,e),ri.subVectors(t,e),Pn.cross(ri).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Pn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Gs.subVectors(i,n),Ws.subVectors(r,n),kh.subVectors(t,n);let l=Gs.dot(kh),c=Ws.dot(kh);if(l<=0&&c<=0)return e.copy(n);Gh.subVectors(t,i);let h=Gs.dot(Gh),u=Ws.dot(Gh);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Gs,o);Wh.subVectors(t,r);let f=Gs.dot(Wh),m=Ws.dot(Wh);if(m>=0&&f<=m)return e.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Ws,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return ff.subVectors(r,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(ff,a);let p=1/(g+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Gs,o).addScaledVector(Ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},xl={h:0,s:0,l:0};function Zh(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Tt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=Md(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Zh(o,r,t+1/3),this.g=Zh(o,r,t),this.b=Zh(o,r,t-1/3)}return ee.colorSpaceToWorking(this,i),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){let n=qp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return ee.workingToColorSpace(We.copy(this),t),Math.round(Gt(We.r*255,0,255))*65536+Math.round(Gt(We.g*255,0,255))*256+Math.round(Gt(We.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(We.copy(this),e);let n=We.r,i=We.g,r=We.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Le){ee.workingToColorSpace(We.copy(this),t);let e=We.r,n=We.g,i=We.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(xl);let n=co(Ei.h,xl.h,e),i=co(Ei.s,xl.s,e),r=co(Ei.l,xl.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new Tt;Tt.NAMES=qp;var vg=0,Ue=class extends gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=Ii,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fo,this.blendDst=po,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fo&&(n.blendSrc=this.blendSrc),this.blendDst!==po&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ge=class extends Ue{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},li=Mg();function Mg(){let s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function sn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Gt(s,-65504,65504),li.floatView[0]=s;let t=li.uint32View[0],e=t>>23&511;return li.baseTable[e]+((t&8388607)>>li.shiftTable[e])}function oo(s){let t=s>>10;return li.uint32View[0]=li.mantissaTable[li.offsetTable[t]+(s&1023)]+li.exponentTable[t],li.floatView[0]}var ic=class{static toHalfFloat(t){return sn(t)}static fromHalfFloat(t){return oo(t)}},Ie=new C,yl=new rt,Sg=0,ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lr,this.updateRanges=[],this.gpuType=je,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yl.fromBufferAttribute(this,e),yl.applyMatrix3(t),this.setXY(e,yl.x,yl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qe(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qe(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qe(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lr&&(t.usage=this.usage),t}},sc=class extends ie{constructor(t,e,n){super(new Int8Array(t),e,n)}},rc=class extends ie{constructor(t,e,n){super(new Uint8Array(t),e,n)}},oc=class extends ie{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}},ac=class extends ie{constructor(t,e,n){super(new Int16Array(t),e,n)}},dr=class extends ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}},lc=class extends ie{constructor(t,e,n){super(new Int32Array(t),e,n)}},fr=class extends ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}},cc=class extends ie{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=oo(this.array[t*this.itemSize]);return this.normalized&&(e=Qe(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize]=sn(e),this}getY(t){let e=oo(this.array[t*this.itemSize+1]);return this.normalized&&(e=Qe(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+1]=sn(e),this}getZ(t){let e=oo(this.array[t*this.itemSize+2]);return this.normalized&&(e=Qe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+2]=sn(e),this}getW(t){let e=oo(this.array[t*this.itemSize+3]);return this.normalized&&(e=Qe(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+3]=sn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.array[t+0]=sn(e),this.array[t+1]=sn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.array[t+0]=sn(e),this.array[t+1]=sn(n),this.array[t+2]=sn(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[t+0]=sn(e),this.array[t+1]=sn(n),this.array[t+2]=sn(i),this.array[t+3]=sn(r),this}},vt=class extends ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},bg=0,bn=new Xt,$h=new re,Xs=new C,dn=new Ee,Kr=new Ee,Be=new C,Ht=class s extends gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sd(t)?fr:dr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return $h.lookAt(t),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ee);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new De);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(dn.min,Kr.min),dn.expandByPoint(Be),Be.addVectors(dn.max,Kr.max),dn.expandByPoint(Be)):(dn.expandByPoint(Kr.min),dn.expandByPoint(Kr.max))}dn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(t,c),Be.add(Xs)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ie(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new C,l[I]=new C;let c=new C,h=new C,u=new C,d=new rt,f=new rt,m=new rt,_=new C,g=new C;function p(I,S,x){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,x),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let w=1/(f.x*m.y-m.x*f.y);isFinite(w)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(w),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(w),a[I].add(_),a[S].add(_),a[x].add(_),l[I].add(g),l[S].add(g),l[x].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,S=M.length;I<S;++I){let x=M[I],w=x.start,N=x.count;for(let O=w,B=w+N;O<B;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let v=new C,y=new C,T=new C,E=new C;function R(I){T.fromBufferAttribute(i,I),E.copy(T);let S=a[I];v.copy(S),v.sub(T.multiplyScalar(T.dot(S))).normalize(),y.crossVectors(E,S);let w=y.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,w)}for(let I=0,S=M.length;I<S;++I){let x=M[I],w=x.start,N=x.count;for(let O=w,B=w+N;O<B;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new ie(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pf=new Xt,Ji=new ui,vl=new De,mf=new C,Ml=new C,Sl=new C,bl=new C,Jh=new C,El=new C,gf=new C,Tl=new C,$t=class extends re{constructor(t=new Ht,e=new ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){El.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Jh.fromBufferAttribute(u,t),o?El.addScaledVector(Jh,h):El.addScaledVector(Jh.sub(e),h))}e.add(El)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(r),Ji.copy(t.ray).recast(t.near),!(vl.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(vl,mf)===null||Ji.origin.distanceToSquared(mf)>(t.far-t.near)**2))&&(pf.copy(r).invert(),Ji.copy(t.ray).applyMatrix4(pf),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,T=v;y<T;y+=3){let E=a.getX(y),R=a.getX(y+1),I=a.getX(y+2);i=wl(this,p,t,n,c,h,u,E,R,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let M=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);i=wl(this,o,t,n,c,h,u,M,v,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,T=v;y<T;y+=3){let E=y,R=y+1,I=y+2;i=wl(this,p,t,n,c,h,u,E,R,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let M=g,v=g+1,y=g+2;i=wl(this,o,t,n,c,h,u,M,v,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Eg(s,t,e,n,i,r,o,a){let l;if(t.side===Ze?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===qn,a),l===null)return null;Tl.copy(a),Tl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Tl);return c<e.near||c>e.far?null:{distance:c,point:Tl.clone(),object:s}}function wl(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ml),s.getVertexPosition(l,Sl),s.getVertexPosition(c,bl);let h=Eg(s,t,e,n,Ml,Sl,bl,gf);if(h){let u=new C;Ln.getBarycoord(gf,Ml,Sl,bl,u),i&&(h.uv=Ln.getInterpolatedAttribute(i,a,l,c,u,new rt)),r&&(h.uv1=Ln.getInterpolatedAttribute(r,a,l,c,u,new rt)),o&&(h.normal=Ln.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new C,materialIndex:0};Ln.getNormal(Ml,Sl,bl,d.normal),h.face=d,h.barycoord=u}return h}var he=class s extends Ht{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(u,2));function m(_,g,p,M,v,y,T,E,R,I,S){let x=y/R,w=T/I,N=y/2,O=T/2,B=E/2,V=R+1,q=I+1,at=0,J=0,ut=new C;for(let gt=0;gt<q;gt++){let wt=gt*w-O;for(let Pt=0;Pt<V;Pt++){let qt=Pt*x-N;ut[_]=qt*M,ut[g]=wt*v,ut[p]=B,c.push(ut.x,ut.y,ut.z),ut[_]=0,ut[g]=0,ut[p]=E>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(Pt/R),u.push(1-gt/I),at+=1}}for(let gt=0;gt<I;gt++)for(let wt=0;wt<R;wt++){let Pt=d+wt+V*gt,qt=d+wt+V*(gt+1),U=d+(wt+1)+V*(gt+1),H=d+(wt+1)+V*gt;l.push(Pt,qt,H),l.push(qt,U,H),J+=6}a.addGroup(f,J,S),f+=J,d+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Is(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function $e(s){let t={};for(let e=0;e<s.length;e++){let n=Is(s[e]);for(let i in n)t[i]=n[i]}return t}function Tg(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ed(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var Td={clone:Is,merge:$e},wg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ag=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends Ue{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wg,this.fragmentShader=Ag,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Tg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ps=class extends re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ti=new C,_f=new rt,xf=new rt,be=class extends ps{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,_f,xf),e.subVectors(xf,_f)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(as*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},qs=-90,Ys=1,_o=class extends re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new be(qs,Ys,t,e);i.layers=this.layers,this.add(i);let r=new be(qs,Ys,t,e);r.layers=this.layers,this.add(r);let o=new be(qs,Ys,t,e);o.layers=this.layers,this.add(o);let a=new be(qs,Ys,t,e);a.layers=this.layers,this.add(a);let l=new be(qs,Ys,t,e);l.layers=this.layers,this.add(l);let c=new be(qs,Ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ui=class extends ve{constructor(t=[],e=Qn,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xo=class extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ui(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new he(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Jn});r.uniforms.tEquirect.value=e;let o=new $t(i,r),a=e.minFilter;return e.minFilter===Hn&&(e.minFilter=Pe),new _o(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},me=class extends re{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rg={type:"move"},ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},yo=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},vo=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},di=class extends re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ni=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lr,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ke=new C,fi=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Qe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qe(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qe(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qe(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qe(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pr=class extends Ue{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zs,Qr=new C,$s=new C,Js=new C,Ks=new rt,jr=new rt,Yp=new Xt,Al=new C,to=new C,Rl=new C,yf=new rt,Kh=new rt,vf=new rt,Mo=class extends re{constructor(t=new pr){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new Ht;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ni(e,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new fi(n,3,0,!1)),Zs.setAttribute("uv",new fi(n,2,3,!1))}this.geometry=Zs,this.material=t,this.center=new rt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),Yp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-Js.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Cl(Al.set(-.5,-.5,0),Js,o,$s,i,r),Cl(to.set(.5,-.5,0),Js,o,$s,i,r),Cl(Rl.set(.5,.5,0),Js,o,$s,i,r),yf.set(0,0),Kh.set(1,0),vf.set(1,1);let a=t.ray.intersectTriangle(Al,to,Rl,!1,Qr);if(a===null&&(Cl(to.set(-.5,.5,0),Js,o,$s,i,r),Kh.set(0,1),a=t.ray.intersectTriangle(Al,Rl,to,!1,Qr),a===null))return;let l=t.ray.origin.distanceTo(Qr);l<t.near||l>t.far||e.push({distance:l,point:Qr.clone(),uv:Ln.getInterpolation(Qr,Al,to,Rl,yf,Kh,vf,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Cl(s,t,e,n,i,r){Ks.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(jr.x=r*Ks.x-i*Ks.y,jr.y=i*Ks.x+r*Ks.y):jr.copy(Ks),s.copy(t),s.x+=jr.x,s.y+=jr.y,s.applyMatrix4(Yp)}var Il=new C,Mf=new C,So=class extends re{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let i=this.levels,r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){let i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Il.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(Il);this.getObjectForDistance(i).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){Il.setFromMatrixPosition(t.matrixWorld),Mf.setFromMatrixPosition(this.matrixWorld);let n=Il.distanceTo(Mf)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){let e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}},Sf=new C,bf=new ne,Ef=new ne,Cg=new C,Tf=new Xt,Pl=new C,Qh=new De,wf=new Xt,jh=new ui,bo=class extends $t{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jl,this.bindMatrix=new Xt,this.bindMatrixInverse=new Xt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ee),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Pl),this.boundingBox.expandByPoint(Pl)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new De),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Pl),this.boundingSphere.expandByPoint(Pl)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qh.copy(this.boundingSphere),Qh.applyMatrix4(i),t.ray.intersectsSphere(Qh)!==!1&&(wf.copy(i).invert(),jh.copy(t.ray).applyMatrix4(wf),!(this.boundingBox!==null&&jh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,jh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ne,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===jl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;bf.fromBufferAttribute(i.attributes.skinIndex,t),Ef.fromBufferAttribute(i.attributes.skinWeight,t),Sf.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=Ef.getComponent(r);if(o!==0){let a=bf.getComponent(r);Tf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Cg.copy(Sf).applyMatrix4(Tf),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},mr=class extends re{constructor(){super(),this.isBone=!0,this.type="Bone"}},mn=class extends ve{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Oe,h=Oe,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Af=new Xt,Ig=new Xt,Eo=class s{constructor(t=[],e=[]){this.uuid=pn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Xt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:Ig;Af.multiplyMatrices(a,e[r]),Af.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new mn(e,t,t,qe,je);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new mr),this.bones.push(o),this.boneInverses.push(new Xt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},Yn=class extends ie{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Qs=new Xt,Rf=new Xt,Dl=[],Cf=new Ee,Pg=new Xt,eo=new $t,no=new De,To=class extends $t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Pg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ee),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),Cf.copy(t.boundingBox).applyMatrix4(Qs),this.boundingBox.union(Cf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new De),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),no.copy(t.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(no)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),no.copy(this.boundingSphere),no.applyMatrix4(n),t.ray.intersectsSphere(no)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Qs),Rf.multiplyMatrices(n,Qs),eo.matrixWorld=Rf,eo.raycast(t,Dl);for(let o=0,a=Dl.length;o<a;o++){let l=Dl[o];l.instanceId=r,l.object=this,e.push(l)}Dl.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Yn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new mn(new Float32Array(i*this.count),i,this.count,Ca,je));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},tu=new C,Dg=new C,Lg=new Zt,Dn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=tu.subVectors(n,e).cross(Dg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(tu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Lg.getNormalMatrix(t),i=this.coplanarPoint(tu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ki=new De,Ug=new rt(.5,.5),Ll=new C,pi=class{constructor(t=new Dn,e=new Dn,n=new Dn,i=new Dn,r=new Dn,o=new Dn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=rn,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],M=r[12],v=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-o,f-h,p-m,T-M).normalize(),i[1].setComponents(c+o,f+h,p+m,T+M).normalize(),i[2].setComponents(c+a,f+u,p+_,T+v).normalize(),i[3].setComponents(c-a,f-u,p-_,T-v).normalize(),n)i[4].setComponents(l,d,g,y).normalize(),i[5].setComponents(c-l,f-d,p-g,T-y).normalize();else if(i[4].setComponents(c-l,f-d,p-g,T-y).normalize(),e===rn)i[5].setComponents(c+l,f+d,p+g,T+y).normalize();else if(e===cs)i[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){Ki.center.set(0,0,0);let e=Ug.distanceTo(t.center);return Ki.radius=.7071067811865476+e,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ll.x=i.normal.x>0?t.max.x:t.min.x,Ll.y=i.normal.y>0?t.max.y:t.min.y,Ll.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Wn=new Xt,Xn=new pi,wo=class s{constructor(){this.coordinateSystem=rn}intersectsObject(t,e){if(!e.isArrayCamera||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(Wn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Xn.setFromProjectionMatrix(Wn,i.coordinateSystem,i.reversedDepth),Xn.intersectsObject(t))return!0}return!1}intersectsSprite(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(Wn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Xn.setFromProjectionMatrix(Wn,i.coordinateSystem,i.reversedDepth),Xn.intersectsSprite(t))return!0}return!1}intersectsSphere(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(Wn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Xn.setFromProjectionMatrix(Wn,i.coordinateSystem,i.reversedDepth),Xn.intersectsSphere(t))return!0}return!1}intersectsBox(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(Wn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Xn.setFromProjectionMatrix(Wn,i.coordinateSystem,i.reversedDepth),Xn.intersectsBox(t))return!0}return!1}containsPoint(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(Wn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Xn.setFromProjectionMatrix(Wn,i.coordinateSystem,i.reversedDepth),Xn.containsPoint(t))return!0}return!1}clone(){return new s}};function eu(s,t){return s-t}function Ng(s,t){return s.z-t.z}function Fg(s,t){return t.z-s.z}var mu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}},nn=new Xt,Bg=new Tt(1,1,1),If=new pi,Og=new wo,Ul=new Ee,Qi=new De,io=new C,Pf=new C,zg=new C,nu=new mu,Xe=new $t,Nl=[];function Hg(s,t,e=0){let n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function ji(s,t){if(s.constructor!==t.constructor){let e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{let e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}var Ao=class extends $t{constructor(t,e,n=e*2,i){super(new Ht,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new mn(e,t,t,qe,je);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),n=new mn(e,t,t,Or,jn);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),n=new mn(e,t,t,qe,je);n.colorSpace=ee.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in t.attributes){let o=t.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),u=new ie(h,l,c);e.setAttribute(r,u)}if(t.getIndex()!==null){let r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new ie(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){let e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){let e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ee);let t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,nn),this.getBoundingBoxAt(r,Ul).applyMatrix4(nn),t.union(Ul)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new De);let t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let r=e[n].geometryIndex;this.getMatrixAt(n,nn),this.getBoundingSphereAt(r,Qi).applyMatrix4(nn),t.union(Qi)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:t},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(eu),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;nn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(Bg.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;let o=t.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(eu),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(i&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(let h in n.attributes){let u=e.getAttribute(h),d=n.getAttribute(h);Hg(u,d,l);let f=u.itemSize;for(let m=u.count,_=c;m<_;m++){let g=l+m;for(let p=0;p<f;p++)d.setComponent(g,p,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(i){let h=a.indexStart,u=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let d=0;d<o.count;d++)r.setX(h+d,l+o.getX(d));for(let d=o.count,f=u;d<f;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;let n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0,n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let l=i[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=r.index,m=f.array,_=t-u;for(let g=h;g<h+d;g++)m[g]=m[g]+_;f.array.copyWithin(e,h,h+d),f.addUpdateRange(e,d),c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){let{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(let f in d){let m=d[f],{array:_,itemSize:g}=m;_.copyWithin(t*g,h*g,(h+u)*g),m.addUpdateRange(t*g,u*g)}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){let r=new Ee,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint(io.fromBufferAttribute(a,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){let r=new De;this.getBoundingBoxAt(t,Ul),Ul.getCenter(r.center);let o=n.index,a=n.attributes.position,l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let u=c;o&&(u=o.getX(u)),io.fromBufferAttribute(a,u),l=Math.max(l,r.center.distanceToSquared(io))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);let n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);let n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){let e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(eu);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);let i=new Int32Array(t),r=new Int32Array(t);ji(this._multiDrawCounts,i),ji(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=t;let o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),ji(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),ji(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),ji(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ht,this._initializeGeometry(r));let o=this.geometry;r.index&&ji(r.index.array,o.index.array);for(let a in r.attributes)ji(r.attributes[a].array,o.attributes[a].array)}raycast(t,e){let n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Xe.material=this.material,Xe.geometry.index=o.index,Xe.geometry.attributes=o.attributes,Xe.geometry.boundingBox===null&&(Xe.geometry.boundingBox=new Ee),Xe.geometry.boundingSphere===null&&(Xe.geometry.boundingSphere=new De);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;let c=n[a].geometryIndex,h=i[c];Xe.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,Xe.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Xe.geometry.boundingBox),this.getBoundingSphereAt(c,Xe.geometry.boundingSphere),Xe.raycast(t,Nl);for(let u=0,d=Nl.length;u<d;u++){let f=Nl[u];f.object=this,f.batchId=a,e.push(f)}Nl.length=0}Xe.material=null,Xe.geometry.index=null,Xe.geometry.attributes={},Xe.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,m=f.image.data,_=n.isArrayCamera?Og:If;d&&!n.isArrayCamera&&(nn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),If.setFromProjectionMatrix(nn,n.coordinateSystem,n.reversedDepth));let g=0;if(this.sortObjects){nn.copy(this.matrixWorld).invert(),io.setFromMatrixPosition(n.matrixWorld).applyMatrix4(nn),Pf.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(nn);for(let v=0,y=l.length;v<y;v++)if(l[v].visible&&l[v].active){let T=l[v].geometryIndex;this.getMatrixAt(v,nn),this.getBoundingSphereAt(T,Qi).applyMatrix4(nn);let E=!1;if(d&&(E=!_.intersectsSphere(Qi,n)),!E){let R=u[T],I=zg.subVectors(Qi.center,io).dot(Pf);nu.push(R.start,R.count,I,v)}}let p=nu.list,M=this.customSort;M===null?p.sort(r.transparent?Fg:Ng):M.call(this,p,n);for(let v=0,y=p.length;v<y;v++){let T=p[v];c[g]=T.start*a,h[g]=T.count,m[g]=T.index,g++}nu.reset()}else for(let p=0,M=l.length;p<M;p++)if(l[p].visible&&l[p].active){let v=l[p].geometryIndex,y=!1;if(d&&(this.getMatrixAt(p,nn),this.getBoundingSphereAt(v,Qi).applyMatrix4(nn),y=!_.intersectsSphere(Qi,n)),!y){let T=u[v];c[g]=T.start*a,h[g]=T.count,m[g]=p,g++}}f.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,o){this.onBeforeRender(t,null,i,r,o)}},ze=class extends Ue{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},hc=new C,uc=new C,Df=new Xt,so=new ui,Fl=new De,iu=new C,Lf=new C,Fn=class extends re{constructor(t=new Ht,e=new ze){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)hc.fromBufferAttribute(e,i-1),uc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=hc.distanceTo(uc);t.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fl.copy(n.boundingSphere),Fl.applyMatrix4(i),Fl.radius+=r,t.ray.intersectsSphere(Fl)===!1)return;Df.copy(i).invert(),so.copy(t.ray).applyMatrix4(Df);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let p=h.getX(_),M=h.getX(_+1),v=Bl(this,t,so,l,p,M,_);v&&e.push(v)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(f),p=Bl(this,t,so,l,_,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let p=Bl(this,t,so,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){let _=Bl(this,t,so,l,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bl(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(hc.fromBufferAttribute(a,i),uc.fromBufferAttribute(a,r),e.distanceSqToSegment(hc,uc,iu,Lf)>n)return;iu.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(iu);if(!(c<t.near||c>t.far))return{distance:c,point:Lf.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Uf=new C,Nf=new C,xn=class extends Fn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Uf.fromBufferAttribute(e,i),Nf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uf.distanceTo(Nf);t.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ro=class extends Fn{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},gr=class extends Ue{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ff=new Xt,gu=new ui,Ol=new De,zl=new C,Co=class extends re{constructor(t=new Ht,e=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ol.copy(n.boundingSphere),Ol.applyMatrix4(i),Ol.radius+=r,t.ray.intersectsSphere(Ol)===!1)return;Ff.copy(i).invert(),gu.copy(t.ray).applyMatrix4(Ff);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,_=f;m<_;m++){let g=c.getX(m);zl.fromBufferAttribute(u,g),Bf(zl,g,l,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,_=f;m<_;m++)zl.fromBufferAttribute(u,m),Bf(zl,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bf(s,t,e,n,i,r,o){let a=gu.distanceSqToPoint(s);if(a<e){let l=new C;gu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Io=class extends ve{constructor(t,e,n,i,r=Pe,o=Pe,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}},dc=class extends Io{constructor(t,e,n,i,r,o,a,l){super({},t,e,n,i,r,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}},fc=class extends ve{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Oe,this.minFilter=Oe,this.generateMipmaps=!1,this.needsUpdate=!0}},gs=class extends ve{constructor(t,e,n,i,r,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}},pc=class extends gs{constructor(t,e,n,i,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=fn,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},mc=class extends gs{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,Qn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}},Fi=class extends ve{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_r=class extends ve{constructor(t,e,n=jn,i,r,o,a=Oe,l=Oe,c,h=ls,u=1){if(h!==ls&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Un(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},xr=class extends ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Po=class s extends Ht{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,m=n*2+r,_=i+1,g=new C,p=new C;for(let M=0;M<=m;M++){let v=0,y=0,T=0,E=0;if(M<=n){let S=M/n,x=S*Math.PI/2;y=-h-t*Math.cos(x),T=t*Math.sin(x),E=-t*Math.cos(x),v=S*u}else if(M<=n+r){let S=(M-n)/r;y=-h+S*e,T=t,E=0,v=u+S*d}else{let S=(M-n-r)/n,x=S*Math.PI/2;y=h+t*Math.sin(x),T=t*Math.cos(x),E=t*Math.sin(x),v=u+d+S*u}let R=Math.max(0,Math.min(1,v/f)),I=0;M===0?I=.5/i:M===m&&(I=-.5/i);for(let S=0;S<=i;S++){let x=S/i,w=x*Math.PI*2,N=Math.sin(w),O=Math.cos(w);p.x=-T*O,p.y=y,p.z=T*N,a.push(p.x,p.y,p.z),g.set(-T*O,E,T*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(x+I,R)}if(M>0){let S=(M-1)*_;for(let x=0;x<i;x++){let w=S+x,N=S+x+1,O=M*_+x,B=M*_+x+1;o.push(w,N,O),o.push(N,B,O)}}}this.setIndex(o),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},yn=class s extends Ht{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new C,h=new rt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(a,3)),this.setAttribute("uv",new vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Te=class s extends Ht{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,_=[],g=n/2,p=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(f,2));function M(){let y=new C,T=new C,E=0,R=(e-t)/n;for(let I=0;I<=r;I++){let S=[],x=I/r,w=x*(e-t)+t;for(let N=0;N<=i;N++){let O=N/i,B=O*l+a,V=Math.sin(B),q=Math.cos(B);T.x=w*V,T.y=-x*n+g,T.z=w*q,u.push(T.x,T.y,T.z),y.set(V,R,q).normalize(),d.push(y.x,y.y,y.z),f.push(O,1-x),S.push(m++)}_.push(S)}for(let I=0;I<i;I++)for(let S=0;S<r;S++){let x=_[S][I],w=_[S+1][I],N=_[S+1][I+1],O=_[S][I+1];(t>0||S!==0)&&(h.push(x,w,O),E+=3),(e>0||S!==r-1)&&(h.push(w,N,O),E+=3)}c.addGroup(p,E,0),p+=E}function v(y){let T=m,E=new rt,R=new C,I=0,S=y===!0?t:e,x=y===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,g*x,0),d.push(0,x,0),f.push(.5,.5),m++;let w=m;for(let N=0;N<=i;N++){let B=N/i*l+a,V=Math.cos(B),q=Math.sin(B);R.x=S*q,R.y=g*x,R.z=S*V,u.push(R.x,R.y,R.z),d.push(0,x,0),E.x=V*.5+.5,E.y=q*.5*x+.5,f.push(E.x,E.y),m++}for(let N=0;N<i;N++){let O=T+N,B=w+N;y===!0?h.push(B,B+1,O):h.push(B+1,B,O),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bi=class s extends Te{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},mi=class s extends Ht{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(r.slice(),3)),this.setAttribute("uv",new vt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let v=new C,y=new C,T=new C;for(let E=0;E<e.length;E+=3)f(e[E+0],v),f(e[E+1],y),f(e[E+2],T),l(v,y,T,M)}function l(M,v,y,T){let E=T+1,R=[];for(let I=0;I<=E;I++){R[I]=[];let S=M.clone().lerp(y,I/E),x=v.clone().lerp(y,I/E),w=E-I;for(let N=0;N<=w;N++)N===0&&I===E?R[I][N]=S:R[I][N]=S.clone().lerp(x,N/w)}for(let I=0;I<E;I++)for(let S=0;S<2*(E-I)-1;S++){let x=Math.floor(S/2);S%2===0?(d(R[I][x+1]),d(R[I+1][x]),d(R[I][x])):(d(R[I][x+1]),d(R[I+1][x+1]),d(R[I+1][x]))}}function c(M){let v=new C;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(M),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let M=new C;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let y=g(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;o.push(y,1-T)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){let v=o[M+0],y=o[M+2],T=o[M+4],E=Math.max(v,y,T),R=Math.min(v,y,T);E>.9&&R<.1&&(v<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,v){let y=M*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function m(){let M=new C,v=new C,y=new C,T=new C,E=new rt,R=new rt,I=new rt;for(let S=0,x=0;S<r.length;S+=9,x+=6){M.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),E.set(o[x+0],o[x+1]),R.set(o[x+2],o[x+3]),I.set(o[x+4],o[x+5]),T.copy(M).add(v).add(y).divideScalar(3);let w=g(T);_(E,x+0,M,w),_(R,x+2,v,w),_(I,x+4,y,w)}}function _(M,v,y,T){T<0&&M.x===1&&(o[v]=M.x-1),y.x===0&&y.z===0&&(o[v]=T/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}},Do=class s extends mi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Hl=new C,Vl=new C,su=new C,kl=new Ln,Lo=class extends Ht{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(as*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:_,b:g,c:p}=kl;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),kl.getNormal(su),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){let v=(M+1)%3,y=u[M],T=u[v],E=kl[h[M]],R=kl[h[v]],I=`${y}_${T}`,S=`${T}_${y}`;S in d&&d[S]?(su.dot(d[S].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(R.x,R.y,R.z)),d[S]=null):I in d||(d[I]={index0:c[M],index1:c[v],normal:su.clone()})}}for(let m in d)if(d[m]){let{index0:_,index1:g}=d[m];Hl.fromBufferAttribute(a,_),Vl.fromBufferAttribute(a,g),f.push(Hl.x,Hl.y,Hl.z),f.push(Vl.x,Vl.y,Vl.z)}this.setAttribute("position",new vt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new rt:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,i=[],r=[],o=[],a=new C,l=new Xt;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Gt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Gt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_s=class extends ln{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new rt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Uo=class extends _s{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function wd(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Gl=new C,ru=new wd,ou=new wd,au=new wd,xs=class extends ln{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Gl.subVectors(i[0],i[1]).add(i[0]),c=Gl);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Gl.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Gl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),ru.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,_,g),ou.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,_,g),au.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(ru.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ou.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),au.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ru.calc(l),ou.calc(l),au.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Of(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Vg(s,t){let e=1-s;return e*e*t}function kg(s,t){return 2*(1-s)*s*t}function Gg(s,t){return s*s*t}function ho(s,t,e,n){return Vg(s,t)+kg(s,e)+Gg(s,n)}function Wg(s,t){let e=1-s;return e*e*e*t}function Xg(s,t){let e=1-s;return 3*e*e*s*t}function qg(s,t){return 3*(1-s)*s*s*t}function Yg(s,t){return s*s*s*t}function uo(s,t,e,n,i){return Wg(s,t)+Xg(s,e)+qg(s,n)+Yg(s,i)}var yr=class extends ln{constructor(t=new rt,e=new rt,n=new rt,i=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new rt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(uo(t,i.x,r.x,o.x,a.x),uo(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},No=class extends ln{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(uo(t,i.x,r.x,o.x,a.x),uo(t,i.y,r.y,o.y,a.y),uo(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vr=class extends ln{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fo=class extends ln{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mr=class extends ln{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ho(t,i.x,r.x,o.x),ho(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sr=class extends ln{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ho(t,i.x,r.x,o.x),ho(t,i.y,r.y,o.y),ho(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},br=class extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Of(a,l.x,c.x,h.x,u.x),Of(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new rt().fromArray(i))}return this}},gc=Object.freeze({__proto__:null,ArcCurve:Uo,CatmullRomCurve3:xs,CubicBezierCurve:yr,CubicBezierCurve3:No,EllipseCurve:_s,LineCurve:vr,LineCurve3:Fo,QuadraticBezierCurve:Mr,QuadraticBezierCurve3:Sr,SplineCurve:br}),Bo=class extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new gc[i.type]().fromJSON(i))}return this}},vn=class extends Bo{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new vr(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Mr(this.currentPoint.clone(),new rt(t,e),new rt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new yr(this.currentPoint.clone(),new rt(t,e),new rt(n,i),new rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new br(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new _s(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Re=class extends vn{constructor(t){super(t),this.uuid=pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new vn().fromJSON(i))}return this}};function Zg(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Zp(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=jg(s,t,r,e)),s.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<i;d+=e){let f=s[d],m=s[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Oo(r,o,e,a,l,c,0),o}function Zp(s,t,e,n,i){let r;if(i===h0(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=zf(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=zf(o/n|0,s[o],s[o+1],r);return r&&Er(r,r.next)&&(Ho(r),r=r.next),r}function ys(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Er(e,e.next)||ye(e.prev,e,e.next)===0)){if(Ho(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Oo(s,t,e,n,i,r,o){if(!s)return;!o&&r&&s0(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Jg(s,n,i,r):$g(s)){t.push(l.i,s.i,c.i),Ho(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Kg(ys(s),t),Oo(s,t,e,n,i,r,2)):o===2&&Qg(s,t,e,n,i,r):Oo(ys(s),t,e,n,i,r,1);break}}}function $g(s){let t=s.prev,e=s,n=s.next;if(ye(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&ao(i,a,r,l,o,c,m.x,m.y)&&ye(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Jg(s,t,e,n){let i=s.prev,r=s,o=s.next;if(ye(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),_=Math.max(a,l,c),g=Math.max(h,u,d),p=_u(f,m,t,e,n),M=_u(_,g,t,e,n),v=s.prevZ,y=s.nextZ;for(;v&&v.z>=p&&y&&y.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&ao(a,h,l,u,c,d,v.x,v.y)&&ye(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ao(a,h,l,u,c,d,y.x,y.y)&&ye(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&ao(a,h,l,u,c,d,v.x,v.y)&&ye(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ao(a,h,l,u,c,d,y.x,y.y)&&ye(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Kg(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Er(n,i)&&Jp(n,e,e.next,i)&&zo(n,i)&&zo(i,n)&&(t.push(n.i,e.i,i.i),Ho(e),Ho(e.next),e=s=i),e=e.next}while(e!==s);return ys(e)}function Qg(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&a0(o,a)){let l=Kp(o,a);o=ys(o,o.next),l=ys(l,l.next),Oo(o,t,e,n,i,r,0),Oo(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function jg(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Zp(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(o0(c))}i.sort(t0);for(let r=0;r<i.length;r++)e=e0(i[r],e);return e}function t0(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function e0(s,t){let e=n0(s,t);if(!e)return t;let n=Kp(e,s);return ys(n,n.next),ys(e,e.next)}function n0(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(Er(s,e))return e;do{if(Er(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&$p(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);zo(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&i0(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function i0(s,t){return ye(s.prev,s,t.prev)<0&&ye(t.next,s,s.next)<0}function s0(s,t,e,n){let i=s;do i.z===0&&(i.z=_u(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,r0(i)}function r0(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function _u(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function o0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function $p(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function ao(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&$p(s,t,e,n,i,r,o,a)}function a0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!l0(s,t)&&(zo(s,t)&&zo(t,s)&&c0(s,t)&&(ye(s.prev,s,t.prev)||ye(s,t.prev,t))||Er(s,t)&&ye(s.prev,s,s.next)>0&&ye(t.prev,t,t.next)>0)}function ye(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Er(s,t){return s.x===t.x&&s.y===t.y}function Jp(s,t,e,n){let i=Xl(ye(s,t,e)),r=Xl(ye(s,t,n)),o=Xl(ye(e,n,s)),a=Xl(ye(e,n,t));return!!(i!==r&&o!==a||i===0&&Wl(s,e,t)||r===0&&Wl(s,n,t)||o===0&&Wl(e,s,n)||a===0&&Wl(e,t,n))}function Wl(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Xl(s){return s>0?1:s<0?-1:0}function l0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Jp(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function zo(s,t){return ye(s.prev,s,s.next)<0?ye(s,t,s.next)>=0&&ye(s,s.prev,t)>=0:ye(s,t,s.prev)<0||ye(s,s.next,t)<0}function c0(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Kp(s,t){let e=xu(s.i,s.x,s.y),n=xu(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function zf(s,t,e,n){let i=xu(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ho(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function xu(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function h0(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var yu=class{static triangulate(t,e,n=2){return Zg(t,e,n)}},En=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Hf(t),Vf(n,t);let o=t.length;e.forEach(Hf);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Vf(n,e[l]);let a=yu.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Hf(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Vf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Ye=class s extends Ht{constructor(t=new Re([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new vt(i,3)),this.setAttribute("uv",new vt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:u0,v,y=!1,T,E,R,I;p&&(v=p.getSpacedPoints(h),y=!0,d=!1,T=p.computeFrenetFrames(h,!1),E=new C,R=new C,I=new C),d||(g=0,f=0,m=0,_=0);let S=a.extractPoints(c),x=S.shape,w=S.holes;if(!En.isClockWise(x)){x=x.reverse();for(let Y=0,it=w.length;Y<it;Y++){let nt=w[Y];En.isClockWise(nt)&&(w[Y]=nt.reverse())}}function O(Y){let nt=10000000000000001e-36,j=Y[0];for(let st=1;st<=Y.length;st++){let $=st%Y.length,ot=Y[$],At=ot.x-j.x,Ot=ot.y-j.y,P=At*At+Ot*Ot,b=Math.max(Math.abs(ot.x),Math.abs(ot.y),Math.abs(j.x),Math.abs(j.y)),W=nt*b*b;if(P<=W){Y.splice($,1),st--;continue}j=ot}}O(x),w.forEach(O);let B=w.length,V=x;for(let Y=0;Y<B;Y++){let it=w[Y];x=x.concat(it)}function q(Y,it,nt){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(it,nt)}let at=x.length;function J(Y,it,nt){let j,st,$,ot=Y.x-it.x,At=Y.y-it.y,Ot=nt.x-Y.x,P=nt.y-Y.y,b=ot*ot+At*At,W=ot*P-At*Ot;if(Math.abs(W)>Number.EPSILON){let tt=Math.sqrt(b),ht=Math.sqrt(Ot*Ot+P*P),et=it.x-At/tt,Ft=it.y+ot/tt,xt=nt.x-P/ht,Lt=nt.y+Ot/ht,Ut=((xt-et)*P-(Lt-Ft)*Ot)/(ot*P-At*Ot);j=et+ot*Ut-Y.x,st=Ft+At*Ut-Y.y;let ft=j*j+st*st;if(ft<=2)return new rt(j,st);$=Math.sqrt(ft/2)}else{let tt=!1;ot>Number.EPSILON?Ot>Number.EPSILON&&(tt=!0):ot<-Number.EPSILON?Ot<-Number.EPSILON&&(tt=!0):Math.sign(At)===Math.sign(P)&&(tt=!0),tt?(j=-At,st=ot,$=Math.sqrt(b)):(j=ot,st=At,$=Math.sqrt(b/2))}return new rt(j/$,st/$)}let ut=[];for(let Y=0,it=V.length,nt=it-1,j=Y+1;Y<it;Y++,nt++,j++)nt===it&&(nt=0),j===it&&(j=0),ut[Y]=J(V[Y],V[nt],V[j]);let gt=[],wt,Pt=ut.concat();for(let Y=0,it=B;Y<it;Y++){let nt=w[Y];wt=[];for(let j=0,st=nt.length,$=st-1,ot=j+1;j<st;j++,$++,ot++)$===st&&($=0),ot===st&&(ot=0),wt[j]=J(nt[j],nt[$],nt[ot]);gt.push(wt),Pt=Pt.concat(wt)}let qt;if(g===0)qt=En.triangulateShape(V,w);else{let Y=[],it=[];for(let nt=0;nt<g;nt++){let j=nt/g,st=f*Math.cos(j*Math.PI/2),$=m*Math.sin(j*Math.PI/2)+_;for(let ot=0,At=V.length;ot<At;ot++){let Ot=q(V[ot],ut[ot],$);Z(Ot.x,Ot.y,-st),j===0&&Y.push(Ot)}for(let ot=0,At=B;ot<At;ot++){let Ot=w[ot];wt=gt[ot];let P=[];for(let b=0,W=Ot.length;b<W;b++){let tt=q(Ot[b],wt[b],$);Z(tt.x,tt.y,-st),j===0&&P.push(tt)}j===0&&it.push(P)}}qt=En.triangulateShape(Y,it)}let U=qt.length,H=m+_;for(let Y=0;Y<at;Y++){let it=d?q(x[Y],Pt[Y],H):x[Y];y?(R.copy(T.normals[0]).multiplyScalar(it.x),E.copy(T.binormals[0]).multiplyScalar(it.y),I.copy(v[0]).add(R).add(E),Z(I.x,I.y,I.z)):Z(it.x,it.y,0)}for(let Y=1;Y<=h;Y++)for(let it=0;it<at;it++){let nt=d?q(x[it],Pt[it],H):x[it];y?(R.copy(T.normals[Y]).multiplyScalar(nt.x),E.copy(T.binormals[Y]).multiplyScalar(nt.y),I.copy(v[Y]).add(R).add(E),Z(I.x,I.y,I.z)):Z(nt.x,nt.y,u/h*Y)}for(let Y=g-1;Y>=0;Y--){let it=Y/g,nt=f*Math.cos(it*Math.PI/2),j=m*Math.sin(it*Math.PI/2)+_;for(let st=0,$=V.length;st<$;st++){let ot=q(V[st],ut[st],j);Z(ot.x,ot.y,u+nt)}for(let st=0,$=w.length;st<$;st++){let ot=w[st];wt=gt[st];for(let At=0,Ot=ot.length;At<Ot;At++){let P=q(ot[At],wt[At],j);y?Z(P.x,P.y+v[h-1].y,v[h-1].x+nt):Z(P.x,P.y,u+nt)}}}L(),F();function L(){let Y=i.length/3;if(d){let it=0,nt=at*it;for(let j=0;j<U;j++){let st=qt[j];lt(st[2]+nt,st[1]+nt,st[0]+nt)}it=h+g*2,nt=at*it;for(let j=0;j<U;j++){let st=qt[j];lt(st[0]+nt,st[1]+nt,st[2]+nt)}}else{for(let it=0;it<U;it++){let nt=qt[it];lt(nt[2],nt[1],nt[0])}for(let it=0;it<U;it++){let nt=qt[it];lt(nt[0]+at*h,nt[1]+at*h,nt[2]+at*h)}}n.addGroup(Y,i.length/3-Y,0)}function F(){let Y=i.length/3,it=0;X(V,it),it+=V.length;for(let nt=0,j=w.length;nt<j;nt++){let st=w[nt];X(st,it),it+=st.length}n.addGroup(Y,i.length/3-Y,1)}function X(Y,it){let nt=Y.length;for(;--nt>=0;){let j=nt,st=nt-1;st<0&&(st=Y.length-1);for(let $=0,ot=h+g*2;$<ot;$++){let At=at*$,Ot=at*($+1),P=it+j+At,b=it+st+At,W=it+st+Ot,tt=it+j+Ot;dt(P,b,W,tt)}}}function Z(Y,it,nt){l.push(Y),l.push(it),l.push(nt)}function lt(Y,it,nt){Mt(Y),Mt(it),Mt(nt);let j=i.length/3,st=M.generateTopUV(n,i,j-3,j-2,j-1);D(st[0]),D(st[1]),D(st[2])}function dt(Y,it,nt,j){Mt(Y),Mt(it),Mt(j),Mt(it),Mt(nt),Mt(j);let st=i.length/3,$=M.generateSideWallUV(n,i,st-6,st-3,st-2,st-1);D($[0]),D($[1]),D($[3]),D($[1]),D($[2]),D($[3])}function Mt(Y){i.push(l[Y*3+0]),i.push(l[Y*3+1]),i.push(l[Y*3+2])}function D(Y){r.push(Y.x),r.push(Y.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return d0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new gc[i.type]().fromJSON(i)),new s(n,t.options)}},u0={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new rt(r,o),new rt(a,l),new rt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new rt(o,1-l),new rt(c,1-u),new rt(d,1-m),new rt(_,1-p)]:[new rt(a,1-l),new rt(h,1-u),new rt(f,1-m),new rt(g,1-p)]}};function d0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Tn=class s extends mi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},gi=class s extends Ht{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Gt(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new C,d=new rt,f=new C,m=new C,_=new C,g=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let M=0;M<=e;M++){let v=n+M*h*i,y=Math.sin(v),T=Math.cos(v);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*y,u.y=t[E].y,u.z=t[E].x*T,o.push(u.x,u.y,u.z),d.x=M/e,d.y=E/(t.length-1),a.push(d.x,d.y);let R=l[3*E+0]*y,I=l[3*E+1],S=l[3*E+0]*T;c.push(R,I,S)}}for(let M=0;M<e;M++)for(let v=0;v<t.length-1;v++){let y=v+M*t.length,T=y,E=y+t.length,R=y+t.length+1,I=y+1;r.push(T,E,I),r.push(R,I,E)}this.setIndex(r),this.setAttribute("position",new vt(o,3)),this.setAttribute("uv",new vt(a,2)),this.setAttribute("normal",new vt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Tr=class s extends mi{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Bn=class s extends Ht{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let M=p*d-o;for(let v=0;v<c;v++){let y=v*u-r;m.push(y,-M,0),_.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let v=M+c*p,y=M+c*(p+1),T=M+1+c*(p+1),E=M+1+c*p;f.push(v,y,E),f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new vt(m,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Vo=class s extends Ht{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/i,f=new C,m=new rt;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<i;_++){let g=_*(n+1);for(let p=0;p<n;p++){let M=p+g,v=M,y=M+n+1,T=M+n+2,E=M+1;a.push(v,y,E),a.push(y,T,E)}}this.setIndex(a),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ko=class s extends Ht{constructor(t=new Re([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new vt(i,3)),this.setAttribute("normal",new vt(r,3)),this.setAttribute("uv",new vt(o,2));function c(h){let u=i.length/3,d=h.extractPoints(e),f=d.shape,m=d.holes;En.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let M=m[g];En.isClockWise(M)===!0&&(m[g]=M.reverse())}let _=En.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let M=m[g];f=f.concat(M)}for(let g=0,p=f.length;g<p;g++){let M=f[g];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let g=0,p=_.length;g<p;g++){let M=_[g],v=M[0]+u,y=M[1]+u,T=M[2]+u;n.push(v,y,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return f0(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};function f0(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var we=class s extends Ht{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,d=new C,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let M=[],v=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){let E=T/e;u.x=-t*Math.cos(i+E*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+E*r)*Math.sin(o+v*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(E+y,1-v),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let v=h[p][M+1],y=h[p][M],T=h[p+1][M],E=h[p+1][M+1];(p!==0||o>0)&&f.push(v,y,E),(p!==n-1||l<Math.PI)&&f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new vt(m,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Go=class s extends mi{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Ce=class s extends Ht{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let _=m/i*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let _=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,M=(i+1)*f+m;o.push(_,g,M),o.push(g,p,M)}this.setIndex(o),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Wo=class s extends Ht{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],u=new C,d=new C,f=new C,m=new C,_=new C,g=new C,p=new C;for(let v=0;v<=n;++v){let y=v/n*r*Math.PI*2;M(y,r,o,t,f),M(y+.01,r,o,t,m),g.subVectors(m,f),p.addVectors(m,f),_.crossVectors(g,p),p.crossVectors(_,g),_.normalize(),p.normalize();for(let T=0;T<=i;++T){let E=T/i*Math.PI*2,R=-e*Math.cos(E),I=e*Math.sin(E);u.x=f.x+(R*p.x+I*_.x),u.y=f.y+(R*p.y+I*_.y),u.z=f.z+(R*p.z+I*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(v/n),h.push(T/i)}}for(let v=1;v<=n;v++)for(let y=1;y<=i;y++){let T=(i+1)*(v-1)+(y-1),E=(i+1)*v+(y-1),R=(i+1)*v+y,I=(i+1)*(v-1)+y;a.push(T,E,I),a.push(E,R,I)}this.setIndex(a),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2));function M(v,y,T,E,R){let I=Math.cos(v),S=Math.sin(v),x=T/y*v,w=Math.cos(x);R.x=E*(2+w)*.5*I,R.y=E*(2+w)*S*.5,R.z=E*Math.sin(x)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},vs=class s extends Ht{constructor(t=new Sr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new rt,h=new C,u=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(f,2));function _(){for(let v=0;v<e;v++)g(v);g(r===!1?e:0),M(),p()}function g(v){h=t.getPointAt(v/e,h);let y=o.normals[v],T=o.binormals[v];for(let E=0;E<=i;E++){let R=E/i*Math.PI*2,I=Math.sin(R),S=-Math.cos(R);l.x=S*y.x+I*T.x,l.y=S*y.y+I*T.y,l.z=S*y.z+I*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let y=1;y<=i;y++){let T=(i+1)*(v-1)+(y-1),E=(i+1)*v+(y-1),R=(i+1)*v+y,I=(i+1)*(v-1)+y;m.push(T,E,I),m.push(E,R,I)}}function M(){for(let v=0;v<=e;v++)for(let y=0;y<=i;y++)c.x=v/e,c.y=y/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new gc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Xo=class extends Ht{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new C,r=new C;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let m=d,_=d+f;m<_;m+=3)for(let g=0;g<3;g++){let p=a.getX(m+g),M=a.getX(m+(g+1)%3);i.fromBufferAttribute(o,p),r.fromBufferAttribute(o,M),kf(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),kf(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new vt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function kf(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var Gf=Object.freeze({__proto__:null,BoxGeometry:he,CapsuleGeometry:Po,CircleGeometry:yn,ConeGeometry:Bi,CylinderGeometry:Te,DodecahedronGeometry:Do,EdgesGeometry:Lo,ExtrudeGeometry:Ye,IcosahedronGeometry:Tn,LatheGeometry:gi,OctahedronGeometry:Tr,PlaneGeometry:Bn,PolyhedronGeometry:mi,RingGeometry:Vo,ShapeGeometry:ko,SphereGeometry:we,TetrahedronGeometry:Go,TorusGeometry:Ce,TorusKnotGeometry:Wo,TubeGeometry:vs,WireframeGeometry:Xo}),qo=class extends Ue{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Tt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}},Yo=class extends an{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ue=class extends Ue{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Oi=class extends ue{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},Zo=class extends Ue{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Tt(16777215),this.specular=new Tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},$o=class extends Ue{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Tt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Jo=class extends Ue{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},Ko=class extends Ue{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wr=class extends Ue{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ar=class extends Ue{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Qo=class extends Ue{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Tt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yi,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}},jo=class extends ze{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function os(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Qp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function jp(s){function t(i,r){return s[i]-s[r]}let e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function vu(s,t,e){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function Ad(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}function p0(s,t,e,n,i=30){let r=s.clone();r.name=t;let o=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){let m=c.times[f]*i;if(!(m<e||m>=n)){u.push(c.times[f]);for(let _=0;_<h;++_)d.push(c.values[f*h+_])}}u.length!==0&&(c.times=os(u,c.times.constructor),c.values=os(d,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r}function m0(s,t=0,e=s,n=30){n<=0&&(n=30);let i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){let a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=s.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let m=a.times.length-1,_;if(r<=a.times[0]){let p=h,M=u-h;_=a.values.slice(p,M)}else if(r>=a.times[m]){let p=m*u+h,M=p+u-h;_=a.values.slice(p,M)}else{let p=a.createInterpolant(),M=h,v=u-h;p.evaluate(r),_=p.resultBuffer.slice(M,v)}l==="quaternion"&&new Ve().fromArray(_).normalize().conjugate().toArray(_);let g=c.times.length;for(let p=0;p<g;++p){let M=p*f+d;if(l==="quaternion")Ve.multiplyQuaternionsFlat(c.values,M,_,0,c.values,M);else{let v=f-d*2;for(let y=0;y<v;++y)c.values[M+y]-=_[y]}}}return s.blendMode=xh,s}var _c=class{static convertArray(t,e){return os(t,e)}static isTypedArray(t){return Qp(t)}static getKeyframeOrder(t){return jp(t)}static sortedArray(t,e,n){return vu(t,e,n)}static flattenJSON(t,e,n,i){Ad(t,e,n,i)}static subclip(t,e,n,i,r=30){return p0(t,e,n,i,r)}static makeClipAdditive(t,e=0,n=t,i=30){return m0(t,e,n,i)}},zi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ta=class extends zi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ri,endingEnd:Ri}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ci:r=t,a=2*e-n;break;case or:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ci:o=t,l=2*n-e;break;case or:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,M=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+M*o[c+T]+v*o[l+T]+y*o[u+T];return r}},Rr=class extends zi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},ea=class extends zi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},tn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=os(e,this.TimeBufferType),this.values=os(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:os(t.times,Array),values:os(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Rr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ta(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case rr:e=this.InterpolantFactoryMethodDiscrete;break;case mo:e=this.InterpolantFactoryMethodLinear;break;case lo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return mo;case this.InterpolantFactoryMethodSmooth:return lo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Qp(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===lo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let _=e[u+m];if(_!==e[d+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};tn.prototype.ValueTypeName="";tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=mo;var Zn=class extends tn{constructor(t,e,n){super(t,e,n)}};Zn.prototype.ValueTypeName="bool";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=rr;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends tn{constructor(t,e,n,i){super(t,e,n,i)}};Cr.prototype.ValueTypeName="color";var Hi=class extends tn{constructor(t,e,n,i){super(t,e,n,i)}};Hi.prototype.ValueTypeName="number";var na=class extends zi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ve.slerpFlat(r,0,o,c-a,o,c,l);return r}},Vi=class extends tn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new na(this.times,this.values,this.getValueSize(),t)}};Vi.prototype.ValueTypeName="quaternion";Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var $n=class extends tn{constructor(t,e,n){super(t,e,n)}};$n.prototype.ValueTypeName="string";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=rr;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends tn{constructor(t,e,n,i){super(t,e,n,i)}};ki.prototype.ValueTypeName="vector";var Gi=class{constructor(t="",e=-1,n=[],i=ol){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=pn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(_0(n[o]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(tn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=jp(l);l=vu(l,1,h),c=vu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Hi(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,_){if(f.length!==0){let g=[],p=[];Ad(f,g,p,m),g.length!==0&&_.push(new u(d,g,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,l=t.length||-1,c=t.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(let _ in f){let g=[],p=[];for(let M=0;M!==d[m].morphTargets.length;++M){let v=d[m];g.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new Hi(".morphTargetInfluence["+_+"]",g,p))}l=f.length*o}else{let f=".bones["+e[u].name+"]";n(ki,f+".position",d,"pos",i),n(Vi,f+".quaternion",d,"rot",i),n(ki,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function g0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hi;case"vector":case"vector2":case"vector3":case"vector4":return ki;case"color":return Cr;case"quaternion":return Vi;case"bool":case"boolean":return Zn;case"string":return $n}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function _0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=g0(s.type);if(s.times===void 0){let e=[],n=[];Ad(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}var Nn={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Ir=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Rd=new Ir,ke=class{constructor(t){this.manager=t!==void 0?t:Rd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ke.DEFAULT_MATERIAL_NAME="__DEFAULT";var ai={},Mu=class extends Error{constructor(t,e){super(t),this.response=e}},wn=class extends ke{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Nn.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ai[t]!==void 0){ai[t].push({onLoad:e,onProgress:n,onError:i});return}ai[t]=[],ai[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ai[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,_=0,g=new ReadableStream({start(p){M();function M(){u.read().then(({done:v,value:y})=>{if(v)p.close();else{_+=y.byteLength;let T=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let E=0,R=h.length;E<R;E++){let I=h[E];I.onProgress&&I.onProgress(T)}p.enqueue(y),M()}},v=>{p.error(v)})}}});return new Response(g)}else throw new Mu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Nn.add(`file:${t}`,c);let h=ai[t];delete ai[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=ai[t];if(h===void 0)throw this.manager.itemError(t),c;delete ai[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},xc=class extends ke{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new wn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){let e=[];for(let n=0;n<t.length;n++){let i=Gi.parse(t[n]);e.push(i)}return e}},yc=class extends ke{constructor(t){super(t)}load(t,e,n,i){let r=this,o=[],a=new gs,l=new wn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(t[u],function(d){let f=r.parse(d,!0);o[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=Pe),a.image=o,a.format=f.format,a.needsUpdate=!0,e&&e(a))},n,i)}if(Array.isArray(t))for(let u=0,d=t.length;u<d;++u)h(u);else l.load(t,function(u){let d=r.parse(u,!0);if(d.isCubemap){let f=d.mipmaps.length/d.mipmapCount;for(let m=0;m<f;m++){o[m]={mipmaps:[]};for(let _=0;_<d.mipmapCount;_++)o[m].mipmaps.push(d.mipmaps[m*d.mipmapCount+_]),o[m].format=d.format,o[m].width=d.width,o[m].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=Pe),a.format=d.format,a.needsUpdate=!0,e&&e(a)},n,i);return a}},js=new WeakMap,Wi=class extends ke{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Nn.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=js.get(o);u===void 0&&(u=[],js.set(o,u)),u.push({onLoad:e,onError:i})}return o}let a=cr("img");function l(){h(),e&&e(this);let u=js.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}js.delete(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),Nn.remove(`image:${t}`);let d=js.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}js.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Nn.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}},vc=class extends ke{constructor(t){super(t)}load(t,e,n,i){let r=new Ui;r.colorSpace=Le;let o=new Wi(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}},Mc=class extends ke{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new mn,a=new wn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:fn,o.wrapT=c.wrapT!==void 0?c.wrapT:fn,o.magFilter=c.magFilter!==void 0?c.magFilter:Pe,o.minFilter=c.minFilter!==void 0?c.minFilter:Pe,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Hn),c.mipmapCount===1&&(o.minFilter=Pe),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,i),o}},Sc=class extends ke{constructor(t){super(t)}load(t,e,n,i){let r=new ve,o=new Wi(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},On=class extends re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ms=class extends On{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},lu=new Xt,Wf=new C,Xf=new C,ia=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pi,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Wf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wf),Xf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xf),e.updateMatrixWorld(),lu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lu,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Su=class extends ia{constructor(){super(new be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=hs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},sa=class extends On{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(re.DEFAULT_UP),this.updateMatrix(),this.target=new re,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Su}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},qf=new Xt,ro=new C,cu=new C,bu=class extends ia{constructor(){super(new be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ro.setFromMatrixPosition(t.matrixWorld),n.position.copy(ro),cu.copy(n.position),cu.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(cu),n.updateMatrixWorld(),i.makeTranslation(-ro.x,-ro.y,-ro.z),qf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qf,n.coordinateSystem,n.reversedDepth)}},_i=class extends On{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ss=class extends ps{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Eu=class extends ia{constructor(){super(new Ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ra=class extends On{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(re.DEFAULT_UP),this.updateMatrix(),this.target=new re,this.shadow=new Eu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},oa=class extends On{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},aa=class extends On{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}},la=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new C)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){let n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){let n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}},ca=class extends On{constructor(t=new la,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){let e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}},ha=class s extends ke{constructor(t){super(t),this.textures={}}load(t,e,n,i){let r=this,o=new wn(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){let e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}let i=this.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new Tt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(i.dispersion=t.dispersion),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(let r in t.uniforms){let o=t.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new Tt().setHex(o.value);break;case"v2":i.uniforms[r].value=new rt().fromArray(o.value);break;case"v3":i.uniforms[r].value=new C().fromArray(o.value);break;case"v4":i.uniforms[r].value=new ne().fromArray(o.value);break;case"m3":i.uniforms[r].value=new Zt().fromArray(o.value);break;case"m4":i.uniforms[r].value=new Xt().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(let r in t.extensions)i.extensions[r]=t.extensions[r];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new rt().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapRotation!==void 0&&i.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return s.createMaterialFromType(t)}static createMaterialFromType(t){let e={ShadowMaterial:qo,SpriteMaterial:pr,RawShaderMaterial:Yo,ShaderMaterial:an,PointsMaterial:gr,MeshPhysicalMaterial:Oi,MeshStandardMaterial:ue,MeshPhongMaterial:Zo,MeshToonMaterial:$o,MeshNormalMaterial:Jo,MeshLambertMaterial:Ko,MeshDepthMaterial:wr,MeshDistanceMaterial:Ar,MeshBasicMaterial:ge,MeshMatcapMaterial:Qo,LineDashedMaterial:jo,LineBasicMaterial:ze,Material:Ue};return new e[t]}},Pr=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},ua=class extends Ht{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}},da=class extends ke{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new wn(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){let e={},n={};function i(f,m){if(e[m]!==void 0)return e[m];let g=f.interleavedBuffers[m],p=r(f,g.buffer),M=nr(g.type,p),v=new Ni(M,g.stride);return v.uuid=g.uuid,e[m]=v,v}function r(f,m){if(n[m]!==void 0)return n[m];let g=f.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}let o=t.isInstancedBufferGeometry?new ua:new Ht,a=t.data.index;if(a!==void 0){let f=nr(a.type,a.array);o.setIndex(new ie(f,1))}let l=t.data.attributes;for(let f in l){let m=l[f],_;if(m.isInterleavedBufferAttribute){let g=i(t.data,m.data);_=new fi(g,m.itemSize,m.offset,m.normalized)}else{let g=nr(m.type,m.array),p=m.isInstancedBufferAttribute?Yn:ie;_=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(_.name=m.name),m.usage!==void 0&&_.setUsage(m.usage),o.setAttribute(f,_)}let c=t.data.morphAttributes;if(c)for(let f in c){let m=c[f],_=[];for(let g=0,p=m.length;g<p;g++){let M=m[g],v;if(M.isInterleavedBufferAttribute){let y=i(t.data,M.data);v=new fi(y,M.itemSize,M.offset,M.normalized)}else{let y=nr(M.type,M.array);v=new ie(y,M.itemSize,M.normalized)}M.name!==void 0&&(v.name=M.name),_.push(v)}o.morphAttributes[f]=_}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let f=0,m=u.length;f!==m;++f){let _=u[f];o.addGroup(_.start,_.count,_.materialIndex)}let d=t.data.boundingSphere;return d!==void 0&&(o.boundingSphere=new De().fromJSON(d)),t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}},bc=class extends ke{constructor(t){super(t)}load(t,e,n,i){let r=this,o=this.path===""?Pr.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;let a=new wn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+t+".",u.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){let n=this,i=this.path===""?Pr.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;let r=new wn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let o=await r.loadAsync(t,e),a=JSON.parse(o),l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){let n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),o=this.parseImages(t.images,function(){e!==void 0&&e(c)}),a=this.parseTextures(t.textures,o),l=this.parseMaterials(t.materials,a),c=this.parseObject(t.object,r,l,a,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let u=!1;for(let d in o)if(o[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&e(c)}return c}async parseAsync(t){let e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),l=this.parseObject(t.object,i,a,o,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(t){let e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){let r=new Re().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){let n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=new Eo().fromJSON(t[r],i);n[a.uuid]=a}return n}parseGeometries(t,e){let n={};if(t!==void 0){let i=new da;for(let r=0,o=t.length;r<o;r++){let a,l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in Gf?a=Gf[l.type].fromJSON(l,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(t,e){let n={},i={};if(t!==void 0){let r=new ha;r.setTextures(e);for(let o=0,a=t.length;o<a;o++){let l=t[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){let e={};if(t!==void 0)for(let n=0;n<t.length;n++){let i=t[n],r=Gi.parse(i);e[r.uuid]=r}return e}parseImages(t,e){let n=this,i={},r;function o(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:nr(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){let l=new Ir(e);r=new Wi(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){let u=t[c],d=u.url;if(Array.isArray(d)){let f=[];for(let m=0,_=d.length;m<_;m++){let g=d[m],p=a(g);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new mn(p.data,p.width,p.height)))}i[u.uuid]=new Un(f)}else{let f=a(u.url);i[u.uuid]=new Un(f)}}}return i}async parseImagesAsync(t){let e=this,n={},i;async function r(o){if(typeof o=="string"){let a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:nr(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){i=new Wi(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){let l=t[o],c=l.url;if(Array.isArray(c)){let h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u],m=await r(f);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new mn(m.data,m.width,m.height)))}n[l.uuid]=new Un(h)}else{let h=await r(l.url);n[l.uuid]=new Un(h)}}}return n}parseTextures(t,e){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}let i={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){let a=t[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let l=e[a.image],c=l.data,h;Array.isArray(c)?(h=new Ui,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new mn:h=new ve,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,x0)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],Yf),h.wrapT=n(a.wrap[1],Yf)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,Zf)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,Zf)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(t,e,n,i,r){let o;function a(d){return e[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),e[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){let f=[];for(let m=0,_=d.length;m<_;m++){let g=d[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(t.type){case"Scene":o=new di,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new Tt(t.background):o.background=c(t.background)),t.environment!==void 0&&(o.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new vo(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new yo(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new be(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new Ss(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new oa(t.color,t.intensity);break;case"DirectionalLight":o=new ra(t.color,t.intensity),o.target=t.target||"";break;case"PointLight":o=new _i(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new aa(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new sa(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),o.target=t.target||"";break;case"HemisphereLight":o=new Ms(t.color,t.groundColor,t.intensity);break;case"LightProbe":o=new ca().fromJSON(t);break;case"SkinnedMesh":h=a(t.geometry),u=l(t.material),o=new bo(h,u),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":h=a(t.geometry),u=l(t.material),o=new $t(h,u);break;case"InstancedMesh":h=a(t.geometry),u=l(t.material);let d=t.count,f=t.instanceMatrix,m=t.instanceColor;o=new To(h,u,d),o.instanceMatrix=new Yn(new Float32Array(f.array),16),m!==void 0&&(o.instanceColor=new Yn(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":h=a(t.geometry),u=l(t.material),o=new Ao(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,u),o.geometry=h,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._geometryInfo=t.geometryInfo.map(_=>{let g=null,p=null;return _.boundingBox!==void 0&&(g=new Ee().fromJSON(_.boundingBox)),_.boundingSphere!==void 0&&(p=new De().fromJSON(_.boundingSphere)),{..._,boundingBox:g,boundingSphere:p}}),o._instanceInfo=t.instanceInfo,o._availableInstanceIds=t._availableInstanceIds,o._availableGeometryIds=t._availableGeometryIds,o._nextIndexStart=t.nextIndexStart,o._nextVertexStart=t.nextVertexStart,o._geometryCount=t.geometryCount,o._maxInstanceCount=t.maxInstanceCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._matricesTexture=c(t.matricesTexture.uuid),o._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(o._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(o.boundingSphere=new De().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(o.boundingBox=new Ee().fromJSON(t.boundingBox));break;case"LOD":o=new So;break;case"Line":o=new Fn(a(t.geometry),l(t.material));break;case"LineLoop":o=new Ro(a(t.geometry),l(t.material));break;case"LineSegments":o=new xn(a(t.geometry),l(t.material));break;case"PointCloud":case"Points":o=new Co(a(t.geometry),l(t.material));break;case"Sprite":o=new Mo(l(t.material));break;case"Group":o=new me;break;case"Bone":o=new mr;break;default:o=new re}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(o.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){let d=t.children;for(let f=0;f<d.length;f++)o.add(this.parseObject(d[f],e,n,i,r))}if(t.animations!==void 0){let d=t.animations;for(let f=0;f<d.length;f++){let m=d[f];o.animations.push(r[m])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);let d=t.levels;for(let f=0;f<d.length;f++){let m=d[f],_=o.getObjectByProperty("uuid",m.object);_!==void 0&&o.addLevel(_,m.distance,m.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=e[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){let n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new re}})}},x0={UVMapping:Ta,CubeReflectionMapping:Qn,CubeRefractionMapping:xi,EquirectangularReflectionMapping:Nr,EquirectangularRefractionMapping:Fr,CubeUVReflectionMapping:bs},Yf={RepeatWrapping:Di,ClampToEdgeWrapping:fn,MirroredRepeatWrapping:sr},Zf={NearestFilter:Oe,NearestMipmapNearestFilter:hh,NearestMipmapLinearFilter:Es,LinearFilter:Pe,LinearMipmapNearestFilter:Br,LinearMipmapLinearFilter:Hn},hu=new WeakMap,Ec=class extends ke{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Nn.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{if(hu.has(o)===!0)i&&i(hu.get(o)),r.manager.itemError(t),r.manager.itemEnd(t);else return e&&e(c),r.manager.itemEnd(t),c});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Nn.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),hu.set(l,c),Nn.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Nn.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},ql,Dr=class{static getContext(){return ql===void 0&&(ql=new(window.AudioContext||window.webkitAudioContext)),ql}static setContext(t){ql=t}},Tc=class extends ke{constructor(t){super(t)}load(t,e,n,i){let r=this,o=new wn(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{let c=l.slice(0);Dr.getContext().decodeAudioData(c,function(u){e(u)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):console.error(l),r.manager.itemError(t)}}},$f=new Xt,Jf=new Xt,ts=new Xt,wc=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new be,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new be,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,ts.copy(t.projectionMatrix);let i=e.eyeSep/2,r=i*e.near/e.focus,o=e.near*Math.tan(as*e.fov*.5)/e.zoom,a,l;Jf.elements[12]=-i,$f.elements[12]=i,a=-o*e.aspect+r,l=o*e.aspect+r,ts.elements[0]=2*e.near/(l-a),ts.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(ts),a=-o*e.aspect-r,l=o*e.aspect-r,ts.elements[0]=2*e.near/(l-a),ts.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(ts)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Jf),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply($f)}},fa=class extends be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},pa=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},es=new C,uu=new Ve,y0=new C,ns=new C,is=new C,Ac=class extends re{constructor(){super(),this.type="AudioListener",this.context=Dr.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new pa}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);let e=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(es,uu,y0),ns.set(0,0,-1).applyQuaternion(uu),is.set(0,1,0).applyQuaternion(uu),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(es.x,n),e.positionY.linearRampToValueAtTime(es.y,n),e.positionZ.linearRampToValueAtTime(es.z,n),e.forwardX.linearRampToValueAtTime(ns.x,n),e.forwardY.linearRampToValueAtTime(ns.y,n),e.forwardZ.linearRampToValueAtTime(ns.z,n),e.upX.linearRampToValueAtTime(is.x,n),e.upY.linearRampToValueAtTime(is.y,n),e.upZ.linearRampToValueAtTime(is.z,n)}else e.setPosition(es.x,es.y,es.z),e.setOrientation(ns.x,ns.y,ns.z,is.x,is.y,is.z)}},ma=class extends re{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}},ss=new C,Kf=new Ve,v0=new C,rs=new C,Rc=class extends ma{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ss,Kf,v0),rs.set(0,0,1).applyQuaternion(Kf);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(ss.x,n),e.positionY.linearRampToValueAtTime(ss.y,n),e.positionZ.linearRampToValueAtTime(ss.z,n),e.orientationX.linearRampToValueAtTime(rs.x,n),e.orientationY.linearRampToValueAtTime(rs.y,n),e.orientationZ.linearRampToValueAtTime(rs.z,n)}else e.setPosition(ss.x,ss.y,ss.z),e.setOrientation(rs.x,rs.y,rs.z)}},Cc=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},ga=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Ve.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let o=this._workIndex*r;Ve.multiplyQuaternionsFlat(t,o,t,e,t,n),Ve.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){let a=e+o;t[a]=t[a]+t[n+o]*i}}},Cd="\\[\\]\\.:\\/",M0=new RegExp("["+Cd+"]","g"),Id="[^"+Cd+"]",S0="[^"+Cd.replace("\\.","")+"]",b0=/((?:WC+[\/:])*)/.source.replace("WC",Id),E0=/(WCOD+)?/.source.replace("WCOD",S0),T0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Id),w0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Id),A0=new RegExp("^"+b0+E0+T0+w0+"$"),R0=["material","materials","bones","map"],Tu=class{constructor(t,e,n){let i=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(M0,"")}static parseTrackName(t){let e=A0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);R0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=Tu;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ic=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=pn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length,a,l=t.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],f=d.uuid,m=e[f];if(m===void 0){m=l++,e[f]=m,t.push(d);for(let _=0,g=o;_!==g;++_)r[_].push(new ae(d,n[_],i[_]))}else if(m<c){a=t[m];let _=--c,g=t[_];e[g.uuid]=m,t[m]=g,e[f]=_,t[_]=d;for(let p=0,M=o;p!==M;++p){let v=r[p],y=v[_],T=v[m];v[m]=y,T===void 0&&(T=new ae(d,n[p],i[p])),v[_]=T}}else t[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){let u=r++,d=t[u];e[d.uuid]=h,t[h]=d,e[c]=u,t[u]=l;for(let f=0,m=i;f!==m;++f){let _=n[f],g=_[u],p=_[h];_[h]=g,_[u]=p}}}this.nCachedObjects_=r}uncache(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,o=t.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],h=c.uuid,u=e[h];if(u!==void 0)if(delete e[h],u<r){let d=--r,f=t[d],m=--o,_=t[m];e[f.uuid]=u,t[u]=f,e[_.uuid]=d,t[d]=_,t.pop();for(let g=0,p=i;g!==p;++g){let M=n[g],v=M[d],y=M[m];M[u]=v,M[d]=y,M.pop()}}else{let d=--o,f=t[d];d>0&&(e[f.uuid]=u),t[u]=f,t.pop();for(let m=0,_=i;m!==_;++m){let g=n[m];g[u]=g[d],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){let n=this._bindingsIndicesByPath,i=n[t],r=this._bindings;if(i!==void 0)return r[i];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[t]=i,o.push(t),a.push(e),r.push(u);for(let d=h,f=l.length;d!==f;++d){let m=l[d];u[d]=new ae(m,t,e)}return u}unsubscribe_(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=t[a];e[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}},_a=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,o=r.length,a=new Array(o),l={endingStart:Ri,endingEnd:Ri};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=od,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let r=this._startTime;if(r!==null){let l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case xh:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case ol:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,o=n===ad;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===rd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=Ci,i.endingEnd=Ci):(t?i.endingStart=this.zeroSlopeAtStart?Ci:Ri:i.endingStart=or,e?i.endingEnd=this.zeroSlopeAtEnd?Ci:Ri:i.endingEnd=or)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}},C0=new Float32Array(1),Pc=class extends gn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let _=e&&e._propertyBindings[u].binding.parsedPath;m=new ga(ae.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;let u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new Rr(new Float32Array(2),new Float32Array(2),1,C0),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,o=typeof t=="string"?Gi.findByName(i,t):t,a=o!==null?o.uuid:t,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ol),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new _a(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?Gi.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Dc=class extends ur{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=n,this.texture=new ds(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},Lc=class s{constructor(t){this.value=t}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},I0=0,Uc=class extends gn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:I0++}),this.name="",this.usage=lr,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){let e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;let e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){let r=Array.isArray(e[n])?e[n]:[e[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}},Nc=class extends Ni{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},Fc=class{constructor(t,e,n,i,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=o,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},Qf=new Xt,Bc=class{constructor(t,e,n=0,i=1/0){this.ray=new ui(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Qf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qf),this}intersectObject(t,e=!0,n=[]){return wu(t,this,n,e),n.sort(jf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)wu(t[i],this,n,e);return n.sort(jf),n}};function jf(s,t){return s.distance-t.distance}function wu(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)wu(r[o],t,e,!0)}}var Oc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=P0.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function P0(){this._document.hidden===!1&&this.reset()}var zc=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Gt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Hc=class{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}},Vc=class s{constructor(t,e,n,i){s.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}},tp=new rt,kc=class{constructor(t=new rt(1/0,1/0),e=new rt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=tp.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tp).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ep=new C,Yl=new C,tr=new C,er=new C,du=new C,D0=new C,L0=new C,Gc=class{constructor(t=new C,e=new C){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){ep.subVectors(t,this.start),Yl.subVectors(this.end,this.start);let n=Yl.dot(Yl),r=Yl.dot(ep)/n;return e&&(r=Gt(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=D0,n=L0){let i=10000000000000001e-32,r,o,a=this.start,l=t.start,c=this.end,h=t.end;tr.subVectors(c,a),er.subVectors(h,l),du.subVectors(a,l);let u=tr.dot(tr),d=er.dot(er),f=er.dot(du);if(u<=i&&d<=i)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(u<=i)r=0,o=f/d,o=Gt(o,0,1);else{let m=tr.dot(du);if(d<=i)o=0,r=Gt(-m/u,0,1);else{let _=tr.dot(er),g=u*d-_*_;g!==0?r=Gt((_*f-m*d)/g,0,1):r=0,o=(_*r+f)/d,o<0?(o=0,r=Gt(-m/u,0,1)):o>1&&(o=1,r=Gt((_-m)/u,0,1))}}return e.copy(a).add(tr.multiplyScalar(r)),n.copy(l).add(er.multiplyScalar(o)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},np=new C,Wc=class extends re{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let n=new Ht,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){let c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new vt(i,3));let r=new ze({fog:!1,toneMapped:!1});this.cone=new xn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),np.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(np),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},wi=new C,Zl=new Xt,fu=new Xt,Xc=class extends xn{constructor(t){let e=tm(t),n=new Ht,i=[],r=[];for(let c=0;c<e.length;c++){let h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new vt(i,3)),n.setAttribute("color",new vt(r,3));let o=new ze({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;let a=new Tt(255),l=new Tt(65280);this.setColors(a,l)}updateMatrixWorld(t){let e=this.bones,n=this.geometry,i=n.getAttribute("position");fu.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){let a=e[r];a.parent&&a.parent.isBone&&(Zl.multiplyMatrices(fu,a.matrixWorld),wi.setFromMatrixPosition(Zl),i.setXYZ(o,wi.x,wi.y,wi.z),Zl.multiplyMatrices(fu,a.parent.matrixWorld),wi.setFromMatrixPosition(Zl),i.setXYZ(o+1,wi.x,wi.y,wi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){let i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,t.r,t.g,t.b),i.setXYZ(r+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};function tm(s){let t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push(...tm(s.children[e]));return t}var qc=class extends $t{constructor(t,e,n){let i=new we(e,4,2),r=new ge({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},U0=new C,ip=new Tt,sp=new Tt,Yc=class extends re{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new Tr(e);i.rotateY(Math.PI*.5),this.material=new ge({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new ie(o,3)),this.add(new $t(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");ip.copy(this.light.color),sp.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){let r=n<i/2?ip:sp;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(U0.setFromMatrixPosition(this.light.matrixWorld).negate())}},Zc=class extends xn{constructor(t=10,e=10,n=4473924,i=8947848){n=new Tt(n),i=new Tt(i);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=e;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let _=d===r?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let h=new Ht;h.setAttribute("position",new vt(l,3)),h.setAttribute("color",new vt(c,3));let u=new ze({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},$c=class extends xn{constructor(t=10,e=16,n=8,i=64,r=4473924,o=8947848){r=new Tt(r),o=new Tt(o);let a=[],l=[];if(e>1)for(let u=0;u<e;u++){let d=u/e*(Math.PI*2),f=Math.sin(d)*t,m=Math.cos(d)*t;a.push(0,0,0),a.push(f,0,m);let _=u&1?r:o;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){let d=u&1?r:o,f=t-t/n*u;for(let m=0;m<i;m++){let _=m/i*(Math.PI*2),g=Math.sin(_)*f,p=Math.cos(_)*f;a.push(g,0,p),l.push(d.r,d.g,d.b),_=(m+1)/i*(Math.PI*2),g=Math.sin(_)*f,p=Math.cos(_)*f,a.push(g,0,p),l.push(d.r,d.g,d.b)}}let c=new Ht;c.setAttribute("position",new vt(a,3)),c.setAttribute("color",new vt(l,3));let h=new ze({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},rp=new C,$l=new C,op=new C,Jc=class extends re{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Ht;i.setAttribute("position",new vt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let r=new ze({fog:!1,toneMapped:!1});this.lightPlane=new Fn(i,r),this.add(this.lightPlane),i=new Ht,i.setAttribute("position",new vt([0,0,0,0,0,1],3)),this.targetLine=new Fn(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),rp.setFromMatrixPosition(this.light.matrixWorld),$l.setFromMatrixPosition(this.light.target.matrixWorld),op.subVectors($l,rp),this.lightPlane.lookAt($l),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt($l),this.targetLine.scale.z=op.length()}},Jl=new C,Se=new ps,Kc=class extends xn{constructor(t){let e=new Ht,n=new ze({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(m,_){l(m),l(_)}function l(m){i.push(0,0,0),r.push(0,0,0),o[m]===void 0&&(o[m]=[]),o[m].push(i.length/3-1)}e.setAttribute("position",new vt(i,3)),e.setAttribute("color",new vt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let c=new Tt(16755200),h=new Tt(16711680),u=new Tt(43775),d=new Tt(16777215),f=new Tt(3355443);this.setColors(c,h,u,d,f)}setColors(t,e,n,i,r){let a=this.geometry.getAttribute("color");return a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0,this}update(){let t=this.geometry,e=this.pointMap,n=1,i=1,r,o;if(Se.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,o=0;else if(this.camera.coordinateSystem===rn)r=-1,o=1;else if(this.camera.coordinateSystem===cs)r=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Ae("c",e,t,Se,0,0,r),Ae("t",e,t,Se,0,0,o),Ae("n1",e,t,Se,-n,-i,r),Ae("n2",e,t,Se,n,-i,r),Ae("n3",e,t,Se,-n,i,r),Ae("n4",e,t,Se,n,i,r),Ae("f1",e,t,Se,-n,-i,o),Ae("f2",e,t,Se,n,-i,o),Ae("f3",e,t,Se,-n,i,o),Ae("f4",e,t,Se,n,i,o),Ae("u1",e,t,Se,n*.7,i*1.1,r),Ae("u2",e,t,Se,-n*.7,i*1.1,r),Ae("u3",e,t,Se,0,i*2,r),Ae("cf1",e,t,Se,-n,0,o),Ae("cf2",e,t,Se,n,0,o),Ae("cf3",e,t,Se,0,-i,o),Ae("cf4",e,t,Se,0,i,o),Ae("cn1",e,t,Se,-n,0,r),Ae("cn2",e,t,Se,n,0,r),Ae("cn3",e,t,Se,0,-i,r),Ae("cn4",e,t,Se,0,i,r),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Ae(s,t,e,n,i,r,o){Jl.set(i,r,o).unproject(n);let a=t[s];if(a!==void 0){let l=e.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],Jl.x,Jl.y,Jl.z)}}var Kl=new Ee,Qc=class extends xn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Ht;r.setIndex(new ie(n,1)),r.setAttribute("position",new ie(i,3)),super(r,new ze({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Kl.setFromObject(this.object),Kl.isEmpty())return;let t=Kl.min,e=Kl.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},jc=class extends xn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ht;r.setIndex(new ie(n,1)),r.setAttribute("position",new vt(i,3)),super(r,new ze({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}},th=class extends Fn{constructor(t,e=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Ht;o.setAttribute("position",new vt(r,3)),o.computeBoundingSphere(),super(o,new ze({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Ht;l.setAttribute("position",new vt(a,3)),l.computeBoundingSphere(),this.add(new $t(l,new ge({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},ap=new C,Ql,pu,eh=class extends re{constructor(t=new C(0,0,1),e=new C(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Ql===void 0&&(Ql=new Ht,Ql.setAttribute("position",new vt([0,0,0,0,1,0],3)),pu=new Bi(.5,1,5,1),pu.translate(0,-.5,0)),this.position.copy(e),this.line=new Fn(Ql,new ze({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new $t(pu,new ge({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{ap.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(ap,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},nh=class extends xn{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ht;i.setAttribute("position",new vt(e,3)),i.setAttribute("color",new vt(n,3));let r=new ze({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){let i=new Tt,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},ih=class{constructor(){this.type="ShapePath",this.color=new Tt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new vn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){let M=[];for(let v=0,y=p.length;v<y;v++){let T=p[v],E=new Re;E.curves=T.curves,M.push(E)}return M}function n(p,M){let v=M.length,y=!1;for(let T=v-1,E=0;E<v;T=E++){let R=M[T],I=M[E],S=I.x-R.x,x=I.y-R.y;if(Math.abs(x)>Number.EPSILON){if(x<0&&(R=M[E],S=-S,I=M[T],x=-x),p.y<R.y||p.y>I.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{let w=x*(p.x-R.x)-S*(p.y-R.y);if(w===0)return!0;if(w<0)continue;y=!y}}else{if(p.y!==R.y)continue;if(I.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=I.x)return!0}}return y}let i=En.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l,c=[];if(r.length===1)return a=r[0],l=new Re,l.curves=a.curves,c.push(l),c;let h=!i(r[0].getPoints());h=t?!h:h;let u=[],d=[],f=[],m=0,_;d[m]=void 0,f[m]=[];for(let p=0,M=r.length;p<M;p++)a=r[p],_=a.getPoints(),o=i(_),o=t?!o:o,o?(!h&&d[m]&&m++,d[m]={s:new Re,p:_},d[m].s.curves=a.curves,h&&m++,f[m]=[]):f[m].push({h:a,p:_[0]});if(!d[0])return e(r);if(d.length>1){let p=!1,M=0;for(let v=0,y=d.length;v<y;v++)u[v]=[];for(let v=0,y=d.length;v<y;v++){let T=f[v];for(let E=0;E<T.length;E++){let R=T[E],I=!0;for(let S=0;S<d.length;S++)n(R.p,d[S].p)&&(v!==S&&M++,I?(I=!1,u[S].push(R)):p=!0);I&&u[v].push(R)}}M>0&&p===!1&&(f=u)}let g;for(let p=0,M=d.length;p<M;p++){l=d[p].s,c.push(l),g=f[p];for(let v=0,y=g.length;v<y;v++)l.holes.push(g[v].h)}return c}},sh=class extends gn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function N0(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function F0(s,t){let e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function B0(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Mh(s,t,e,n){let i=O0(n);switch(e){case mh:return s*t;case Ca:return s*t/i.components*i.byteLength;case Or:return s*t/i.components*i.byteLength;case _h:return s*t*2/i.components*i.byteLength;case Ia:return s*t*2/i.components*i.byteLength;case gh:return s*t*3/i.components*i.byteLength;case qe:return s*t*4/i.components*i.byteLength;case Pa:return s*t*4/i.components*i.byteLength;case zr:case Hr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vr:case kr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case La:case Na:return Math.max(s,16)*Math.max(t,8)/4;case Da:case Ua:return Math.max(s,8)*Math.max(t,8)/2;case Fa:case Ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Oa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Va:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ka:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case qa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Za:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case $a:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ja:case tl:case el:return Math.ceil(s/4)*Math.ceil(t/4)*16;case nl:case il:return Math.ceil(s/4)*Math.ceil(t/4)*8;case sl:case rl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function O0(s){switch(s){case An:case uh:return{byteLength:1,components:1};case Ts:case dh:case ws:return{byteLength:2,components:1};case Aa:case Ra:return{byteLength:2,components:4};case jn:case wa:case je:return{byteLength:4,components:1};case fh:case ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}var rh=class{static contain(t,e){return N0(t,e)}static cover(t,e){return F0(t,e)}static fill(t){return B0(t)}static getByteLength(t,e,n,i){return Mh(t,e,n,i)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Em(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function z0(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var H0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,k0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,j0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,t_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,c_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,h_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,u_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,d_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g_="gl_FragColor = linearToOutputTexel( gl_FragColor );",__=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,y_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,v_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,b_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,R_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,D_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,L_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,O_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,z_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,H_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,V_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,px=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ex=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ny=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ay=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ly=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,my=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_y=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:H0,alphahash_pars_fragment:V0,alphamap_fragment:k0,alphamap_pars_fragment:G0,alphatest_fragment:W0,alphatest_pars_fragment:X0,aomap_fragment:q0,aomap_pars_fragment:Y0,batching_pars_vertex:Z0,batching_vertex:$0,begin_vertex:J0,beginnormal_vertex:K0,bsdfs:Q0,iridescence_fragment:j0,bumpmap_pars_fragment:t_,clipping_planes_fragment:e_,clipping_planes_pars_fragment:n_,clipping_planes_pars_vertex:i_,clipping_planes_vertex:s_,color_fragment:r_,color_pars_fragment:o_,color_pars_vertex:a_,color_vertex:l_,common:c_,cube_uv_reflection_fragment:h_,defaultnormal_vertex:u_,displacementmap_pars_vertex:d_,displacementmap_vertex:f_,emissivemap_fragment:p_,emissivemap_pars_fragment:m_,colorspace_fragment:g_,colorspace_pars_fragment:__,envmap_fragment:x_,envmap_common_pars_fragment:y_,envmap_pars_fragment:v_,envmap_pars_vertex:M_,envmap_physical_pars_fragment:D_,envmap_vertex:S_,fog_vertex:b_,fog_pars_vertex:E_,fog_fragment:T_,fog_pars_fragment:w_,gradientmap_pars_fragment:A_,lightmap_pars_fragment:R_,lights_lambert_fragment:C_,lights_lambert_pars_fragment:I_,lights_pars_begin:P_,lights_toon_fragment:L_,lights_toon_pars_fragment:U_,lights_phong_fragment:N_,lights_phong_pars_fragment:F_,lights_physical_fragment:B_,lights_physical_pars_fragment:O_,lights_fragment_begin:z_,lights_fragment_maps:H_,lights_fragment_end:V_,logdepthbuf_fragment:k_,logdepthbuf_pars_fragment:G_,logdepthbuf_pars_vertex:W_,logdepthbuf_vertex:X_,map_fragment:q_,map_pars_fragment:Y_,map_particle_fragment:Z_,map_particle_pars_fragment:$_,metalnessmap_fragment:J_,metalnessmap_pars_fragment:K_,morphinstance_vertex:Q_,morphcolor_vertex:j_,morphnormal_vertex:tx,morphtarget_pars_vertex:ex,morphtarget_vertex:nx,normal_fragment_begin:ix,normal_fragment_maps:sx,normal_pars_fragment:rx,normal_pars_vertex:ox,normal_vertex:ax,normalmap_pars_fragment:lx,clearcoat_normal_fragment_begin:cx,clearcoat_normal_fragment_maps:hx,clearcoat_pars_fragment:ux,iridescence_pars_fragment:dx,opaque_fragment:fx,packing:px,premultiplied_alpha_fragment:mx,project_vertex:gx,dithering_fragment:_x,dithering_pars_fragment:xx,roughnessmap_fragment:yx,roughnessmap_pars_fragment:vx,shadowmap_pars_fragment:Mx,shadowmap_pars_vertex:Sx,shadowmap_vertex:bx,shadowmask_pars_fragment:Ex,skinbase_vertex:Tx,skinning_pars_vertex:wx,skinning_vertex:Ax,skinnormal_vertex:Rx,specularmap_fragment:Cx,specularmap_pars_fragment:Ix,tonemapping_fragment:Px,tonemapping_pars_fragment:Dx,transmission_fragment:Lx,transmission_pars_fragment:Ux,uv_pars_fragment:Nx,uv_pars_vertex:Fx,uv_vertex:Bx,worldpos_vertex:Ox,background_vert:zx,background_frag:Hx,backgroundCube_vert:Vx,backgroundCube_frag:kx,cube_vert:Gx,cube_frag:Wx,depth_vert:Xx,depth_frag:qx,distanceRGBA_vert:Yx,distanceRGBA_frag:Zx,equirect_vert:$x,equirect_frag:Jx,linedashed_vert:Kx,linedashed_frag:Qx,meshbasic_vert:jx,meshbasic_frag:ty,meshlambert_vert:ey,meshlambert_frag:ny,meshmatcap_vert:iy,meshmatcap_frag:sy,meshnormal_vert:ry,meshnormal_frag:oy,meshphong_vert:ay,meshphong_frag:ly,meshphysical_vert:cy,meshphysical_frag:hy,meshtoon_vert:uy,meshtoon_frag:dy,points_vert:fy,points_frag:py,shadow_vert:my,shadow_frag:gy,sprite_vert:_y,sprite_frag:xy},St={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Vn={basic:{uniforms:$e([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:$e([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Tt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:$e([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:$e([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:$e([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Tt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:$e([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:$e([St.points,St.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:$e([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:$e([St.common,St.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:$e([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:$e([St.sprite,St.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:$e([St.common,St.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:$e([St.lights,St.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Vn.physical={uniforms:$e([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var Sh={r:0,b:0,g:0},Ps=new on,yy=new Xt;function vy(s,t,e,n,i,r,o){let a=new Tt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1,T=m(v);T===null?p(a,l):T&&T.isColor&&(p(T,1),y=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(v,y){let T=m(y);T&&(T.isCubeTexture||T.mapping===bs)?(h===void 0&&(h=new $t(new he(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Is(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ps.copy(y.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yy.makeRotationFromEuler(Ps)),h.material.toneMapped=ee.getTransfer(T.colorSpace)!==le,(u!==T||d!==T.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new $t(new Bn(2,2),new an({name:"BackgroundMaterial",uniforms:Is(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ee.getTransfer(T.colorSpace)!==le,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(Sh,Ed(s)),n.buffers.color.setClear(Sh.r,Sh.g,Sh.b,y,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:g,dispose:M}}function My(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(x,w,N,O,B){let V=!1,q=u(O,N,w);r!==q&&(r=q,c(r.object)),V=f(x,O,N,B),V&&m(x,O,N,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(x,w,N,O),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,w,N){let O=N.wireframe===!0,B=n[x.id];B===void 0&&(B={},n[x.id]=B);let V=B[w.id];V===void 0&&(V={},B[w.id]=V);let q=V[O];return q===void 0&&(q=d(l()),V[O]=q),q}function d(x){let w=[],N=[],O=[];for(let B=0;B<e;B++)w[B]=0,N[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:N,attributeDivisors:O,object:x,attributes:{},index:null}}function f(x,w,N,O){let B=r.attributes,V=w.attributes,q=0,at=N.getAttributes();for(let J in at)if(at[J].location>=0){let gt=B[J],wt=V[J];if(wt===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(wt=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(wt=x.instanceColor)),gt===void 0||gt.attribute!==wt||wt&&gt.data!==wt.data)return!0;q++}return r.attributesNum!==q||r.index!==O}function m(x,w,N,O){let B={},V=w.attributes,q=0,at=N.getAttributes();for(let J in at)if(at[J].location>=0){let gt=V[J];gt===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor));let wt={};wt.attribute=gt,gt&&gt.data&&(wt.data=gt.data),B[J]=wt,q++}r.attributes=B,r.attributesNum=q,r.index=O}function _(){let x=r.newAttributes;for(let w=0,N=x.length;w<N;w++)x[w]=0}function g(x){p(x,0)}function p(x,w){let N=r.newAttributes,O=r.enabledAttributes,B=r.attributeDivisors;N[x]=1,O[x]===0&&(s.enableVertexAttribArray(x),O[x]=1),B[x]!==w&&(s.vertexAttribDivisor(x,w),B[x]=w)}function M(){let x=r.newAttributes,w=r.enabledAttributes;for(let N=0,O=w.length;N<O;N++)w[N]!==x[N]&&(s.disableVertexAttribArray(N),w[N]=0)}function v(x,w,N,O,B,V,q){q===!0?s.vertexAttribIPointer(x,w,N,B,V):s.vertexAttribPointer(x,w,N,O,B,V)}function y(x,w,N,O){_();let B=O.attributes,V=N.getAttributes(),q=w.defaultAttributeValues;for(let at in V){let J=V[at];if(J.location>=0){let ut=B[at];if(ut===void 0&&(at==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),at==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor)),ut!==void 0){let gt=ut.normalized,wt=ut.itemSize,Pt=t.get(ut);if(Pt===void 0)continue;let qt=Pt.buffer,U=Pt.type,H=Pt.bytesPerElement,L=U===s.INT||U===s.UNSIGNED_INT||ut.gpuType===wa;if(ut.isInterleavedBufferAttribute){let F=ut.data,X=F.stride,Z=ut.offset;if(F.isInstancedInterleavedBuffer){for(let lt=0;lt<J.locationSize;lt++)p(J.location+lt,F.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let lt=0;lt<J.locationSize;lt++)g(J.location+lt);s.bindBuffer(s.ARRAY_BUFFER,qt);for(let lt=0;lt<J.locationSize;lt++)v(J.location+lt,wt/J.locationSize,U,gt,X*H,(Z+wt/J.locationSize*lt)*H,L)}else{if(ut.isInstancedBufferAttribute){for(let F=0;F<J.locationSize;F++)p(J.location+F,ut.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let F=0;F<J.locationSize;F++)g(J.location+F);s.bindBuffer(s.ARRAY_BUFFER,qt);for(let F=0;F<J.locationSize;F++)v(J.location+F,wt/J.locationSize,U,gt,wt*H,wt/J.locationSize*F*H,L)}}else if(q!==void 0){let gt=q[at];if(gt!==void 0)switch(gt.length){case 2:s.vertexAttrib2fv(J.location,gt);break;case 3:s.vertexAttrib3fv(J.location,gt);break;case 4:s.vertexAttrib4fv(J.location,gt);break;default:s.vertexAttrib1fv(J.location,gt)}}}}M()}function T(){I();for(let x in n){let w=n[x];for(let N in w){let O=w[N];for(let B in O)h(O[B].object),delete O[B];delete w[N]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;let w=n[x.id];for(let N in w){let O=w[N];for(let B in O)h(O[B].object),delete O[B];delete w[N]}delete n[x.id]}function R(x){for(let w in n){let N=n[w];if(N[x.id]===void 0)continue;let O=N[x.id];for(let B in O)h(O[B].object),delete O[B];delete N[x.id]}}function I(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function Sy(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function by(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==qe&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let I=R===ws&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==An&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==je&&!I)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:T,maxSamples:E}}function Ey(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Dn,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,v=M*4,y=p.clippingState||null;l.value=y,y=h(m,d,v,f);for(let T=0;T!==v;++T)y[T]=e[T];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,y=f;v!==_;++v,y+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Ty(s){let t=new WeakMap;function e(o,a){return a===Nr?o.mapping=Qn:a===Fr&&(o.mapping=xi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Nr||a===Fr)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new xo(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Wr=4,em=[.125,.215,.35,.446,.526,.582],Us=20,Pd=new Ss,nm=new Tt,Dd=null,Ld=0,Ud=0,Nd=!1,Ls=(1+Math.sqrt(5))/2,Gr=1/Ls,im=[new C(-Ls,Gr,0),new C(Ls,Gr,0),new C(-Gr,0,Ls),new C(Gr,0,Ls),new C(0,Ls,-Gr),new C(0,Ls,Gr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],wy=new C,ll=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=wy}=r;Dd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dd,Ld,Ud),this._renderer.xr.enabled=Nd,t.scissorTest=!1,bh(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qn||t.mapping===xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:ws,format:qe,colorSpace:Li,depthBuffer:!1},i=sm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sm(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ay(r)),this._blurMaterial=Ry(r,t,e)}return i}_compileMaterial(t){let e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,Pd)}_sceneToCubeUV(t,e,n,i,r){let l=new be(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(nm),u.toneMapping=Kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let _=new ge({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),g=new $t(new he,_),p=!1,M=t.background;M?M.isColor&&(_.color.copy(M),t.background=null,p=!0):(_.color.copy(nm),p=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));let T=this._cubeSize;bh(i,y*T,v>2?T:0,T,T),u.setRenderTarget(i),p&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Qn||t.mapping===xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rm());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;bh(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Pd)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=im[(i-r-1)%im.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new $t(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Us-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Us;g>Us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Us}`);let p=[],M=0;for(let R=0;R<Us;++R){let I=R/_,S=Math.exp(-I*I/2);p.push(S),R===0?M+=S:R<g&&(M+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;let y=this._sizeLods[i],T=3*y*(i>v-Wr?i-v+Wr:0),E=4*(this._cubeSize-y);bh(e,T,E,3*y,2*y),l.setRenderTarget(e),l.render(u,Pd)}};function Ay(s){let t=[],e=[],n=[],i=s,r=s-Wr+1+em.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Wr?l=em[o-s+Wr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,M=new Float32Array(_*m*f),v=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let E=0;E<f;E++){let R=E%3*2/3-1,I=E>2?0:-1,S=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];M.set(S,_*m*E),v.set(d,g*m*E);let x=[E,E,E,E,E,E];y.set(x,p*m*E)}let T=new Ht;T.setAttribute("position",new ie(M,_)),T.setAttribute("uv",new ie(v,g)),T.setAttribute("faceIndex",new ie(y,p)),t.push(T),i>Wr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sm(s,t,e){let n=new _n(s,t,e);return n.texture.mapping=bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bh(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ry(s,t,e){let n=new Float32Array(Us),i=new C(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function rm(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function om(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function qd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cy(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Nr||l===Fr,h=l===Qn||l===xi;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ll(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new ll(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Iy(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&hr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Py(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,_=0;if(f!==null){let M=f.array;_=f.version;for(let v=0,y=M.length;v<y;v+=3){let T=M[v+0],E=M[v+1],R=M[v+2];d.push(T,E,E,R,R,T)}}else if(m!==void 0){let M=m.array;_=m.version;for(let v=0,y=M.length/3-1;v<y;v+=3){let T=v+0,E=v+1,R=v+2;d.push(T,E,E,R,R,T)}}else return;let g=new(Sd(d)?fr:dr)(d,1);g.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Dy(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,_){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let M=0;M<m;M++)p+=f[M]*_[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ly(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Uy(s,t,e){let n=new WeakMap,i=new ne;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],v=0;f===!0&&(v=1),m===!0&&(v=2),_===!0&&(v=3);let y=a.attributes.position.count*v,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*u),R=new us(E,y,T,u);R.type=je,R.needsUpdate=!0;let I=v*4;for(let x=0;x<u;x++){let w=g[x],N=p[x],O=M[x],B=y*T*4*x;for(let V=0;V<w.count;V++){let q=V*I;f===!0&&(i.fromBufferAttribute(w,V),E[B+q+0]=i.x,E[B+q+1]=i.y,E[B+q+2]=i.z,E[B+q+3]=0),m===!0&&(i.fromBufferAttribute(N,V),E[B+q+4]=i.x,E[B+q+5]=i.y,E[B+q+6]=i.z,E[B+q+7]=0),_===!0&&(i.fromBufferAttribute(O,V),E[B+q+8]=i.x,E[B+q+9]=i.y,E[B+q+10]=i.z,E[B+q+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new rt(y,T)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Ny(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Tm=new ve,am=new _r(1,1),wm=new us,Am=new ds,Rm=new Ui,lm=[],cm=[],hm=new Float32Array(16),um=new Float32Array(9),dm=new Float32Array(4);function qr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=lm[i];if(r===void 0&&(r=new Float32Array(i),lm[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ne(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Fe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Th(s,t){let e=cm[t];e===void 0&&(e=new Int32Array(t),cm[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Fy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function By(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2fv(this.addr,t),Fe(e,t)}}function Oy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;s.uniform3fv(this.addr,t),Fe(e,t)}}function zy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4fv(this.addr,t),Fe(e,t)}}function Hy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;dm.set(n),s.uniformMatrix2fv(this.addr,!1,dm),Fe(e,n)}}function Vy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;um.set(n),s.uniformMatrix3fv(this.addr,!1,um),Fe(e,n)}}function ky(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;hm.set(n),s.uniformMatrix4fv(this.addr,!1,hm),Fe(e,n)}}function Gy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Wy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2iv(this.addr,t),Fe(e,t)}}function Xy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;s.uniform3iv(this.addr,t),Fe(e,t)}}function qy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4iv(this.addr,t),Fe(e,t)}}function Yy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Zy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2uiv(this.addr,t),Fe(e,t)}}function $y(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;s.uniform3uiv(this.addr,t),Fe(e,t)}}function Jy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4uiv(this.addr,t),Fe(e,t)}}function Ky(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(am.compareFunction=yh,r=am):r=Tm,e.setTexture2D(t||r,i)}function Qy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Am,i)}function jy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Rm,i)}function tv(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||wm,i)}function ev(s){switch(s){case 5126:return Fy;case 35664:return By;case 35665:return Oy;case 35666:return zy;case 35674:return Hy;case 35675:return Vy;case 35676:return ky;case 5124:case 35670:return Gy;case 35667:case 35671:return Wy;case 35668:case 35672:return Xy;case 35669:case 35673:return qy;case 5125:return Yy;case 36294:return Zy;case 36295:return $y;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return jy;case 36289:case 36303:case 36311:case 36292:return tv}}function nv(s,t){s.uniform1fv(this.addr,t)}function iv(s,t){let e=qr(t,this.size,2);s.uniform2fv(this.addr,e)}function sv(s,t){let e=qr(t,this.size,3);s.uniform3fv(this.addr,e)}function rv(s,t){let e=qr(t,this.size,4);s.uniform4fv(this.addr,e)}function ov(s,t){let e=qr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function av(s,t){let e=qr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function lv(s,t){let e=qr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function cv(s,t){s.uniform1iv(this.addr,t)}function hv(s,t){s.uniform2iv(this.addr,t)}function uv(s,t){s.uniform3iv(this.addr,t)}function dv(s,t){s.uniform4iv(this.addr,t)}function fv(s,t){s.uniform1uiv(this.addr,t)}function pv(s,t){s.uniform2uiv(this.addr,t)}function mv(s,t){s.uniform3uiv(this.addr,t)}function gv(s,t){s.uniform4uiv(this.addr,t)}function _v(s,t,e){let n=this.cache,i=t.length,r=Th(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Tm,r[o])}function xv(s,t,e){let n=this.cache,i=t.length,r=Th(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Am,r[o])}function yv(s,t,e){let n=this.cache,i=t.length,r=Th(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Rm,r[o])}function vv(s,t,e){let n=this.cache,i=t.length,r=Th(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||wm,r[o])}function Mv(s){switch(s){case 5126:return nv;case 35664:return iv;case 35665:return sv;case 35666:return rv;case 35674:return ov;case 35675:return av;case 35676:return lv;case 5124:case 35670:return cv;case 35667:case 35671:return hv;case 35668:case 35672:return uv;case 35669:case 35673:return dv;case 5125:return fv;case 36294:return pv;case 36295:return mv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return vv}}var Bd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ev(e.type)}},Od=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mv(e.type)}},zd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Fd=/(\w+)(\])?(\[|\.)?/g;function fm(s,t){s.seq.push(t),s.map[t.id]=t}function Sv(s,t,e){let n=s.name,i=n.length;for(Fd.lastIndex=0;;){let r=Fd.exec(n),o=Fd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){fm(e,c===void 0?new Bd(a,s,t):new Od(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new zd(a),fm(e,u)),e=u}}}var Xr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Sv(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function pm(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var bv=37297,Ev=0;function Tv(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var mm=new Zt;function wv(s){ee._getMatrix(mm,ee.workingColorSpace,s);let t=`mat3( ${mm.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(s)){case ar:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function gm(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Tv(s.getShaderSource(t),a)}else return r}function Av(s,t){let e=wv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rv(s,t){let e;switch(t){case Ku:e="Linear";break;case Qu:e="Reinhard";break;case ju:e="Cineon";break;case td:e="ACESFilmic";break;case nd:e="AgX";break;case id:e="Neutral";break;case ed:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Eh=new C;function Cv(){ee.getLuminanceCoefficients(Eh);let s=Eh.x.toFixed(4),t=Eh.y.toFixed(4),e=Eh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function Pv(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dv(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function al(s){return s!==""}function _m(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xm(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(s){return s.replace(Lv,Nv)}var Uv=new Map;function Nv(s,t){let e=jt[t];if(e===void 0){let n=Uv.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Hd(e)}var Fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ym(s){return s.replace(Fv,Bv)}function Bv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function vm(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ov(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ah?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Iu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function zv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qn:case xi:t="ENVMAP_TYPE_CUBE";break;case bs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case xi:t="ENVMAP_MODE_REFRACTION";break}return t}function Vv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ur:t="ENVMAP_BLENDING_MULTIPLY";break;case $u:t="ENVMAP_BLENDING_MIX";break;case Ju:t="ENVMAP_BLENDING_ADD";break}return t}function kv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Gv(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ov(e),c=zv(e),h=Hv(e),u=Vv(e),d=kv(e),f=Iv(e),m=Pv(r),_=i.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(al).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(al).join(`
`),p.length>0&&(p+=`
`)):(g=[vm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),p=[vm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?jt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?Rv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Av("linearToOutputTexel",e.outputColorSpace),Cv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(al).join(`
`)),o=Hd(o),o=_m(o,e),o=xm(o,e),a=Hd(a),a=_m(a,e),a=xm(a,e),o=ym(o),a=ym(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=M+g+o,y=M+p+a,T=pm(i,i.VERTEX_SHADER,v),E=pm(i,i.FRAGMENT_SHADER,y);i.attachShader(_,T),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(w){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(T)||"",B=i.getShaderInfoLog(E)||"",V=N.trim(),q=O.trim(),at=B.trim(),J=!0,ut=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,T,E);else{let gt=gm(i,T,"vertex"),wt=gm(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+V+`
`+gt+`
`+wt)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(q===""||at==="")&&(ut=!1);ut&&(w.diagnostics={runnable:J,programLog:V,vertexShader:{log:q,prefix:g},fragmentShader:{log:at,prefix:p}})}i.deleteShader(T),i.deleteShader(E),I=new Xr(i,_),S=Dv(i,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,bv)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ev++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}var Wv=0,Vd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new kd(t),e.set(t,n)),n}},kd=class{constructor(t){this.id=Wv++,this.code=t,this.usedTimes=0}};function Xv(s,t,e,n,i,r,o){let a=new fs,l=new Vd,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,x,w,N,O){let B=N.fog,V=O.geometry,q=S.isMeshStandardMaterial?N.environment:null,at=(S.isMeshStandardMaterial?e:t).get(S.envMap||q),J=at&&at.mapping===bs?at.image.height:null,ut=m[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let gt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,wt=gt!==void 0?gt.length:0,Pt=0;V.morphAttributes.position!==void 0&&(Pt=1),V.morphAttributes.normal!==void 0&&(Pt=2),V.morphAttributes.color!==void 0&&(Pt=3);let qt,U,H,L;if(ut){let oe=Vn[ut];qt=oe.vertexShader,U=oe.fragmentShader}else qt=S.vertexShader,U=S.fragmentShader,l.update(S),H=l.getVertexShaderID(S),L=l.getFragmentShaderID(S);let F=s.getRenderTarget(),X=s.state.buffers.depth.getReversed(),Z=O.isInstancedMesh===!0,lt=O.isBatchedMesh===!0,dt=!!S.map,Mt=!!S.matcap,D=!!at,Y=!!S.aoMap,it=!!S.lightMap,nt=!!S.bumpMap,j=!!S.normalMap,st=!!S.displacementMap,$=!!S.emissiveMap,ot=!!S.metalnessMap,At=!!S.roughnessMap,Ot=S.anisotropy>0,P=S.clearcoat>0,b=S.dispersion>0,W=S.iridescence>0,tt=S.sheen>0,ht=S.transmission>0,et=Ot&&!!S.anisotropyMap,Ft=P&&!!S.clearcoatMap,xt=P&&!!S.clearcoatNormalMap,Lt=P&&!!S.clearcoatRoughnessMap,Ut=W&&!!S.iridescenceMap,ft=W&&!!S.iridescenceThicknessMap,Rt=tt&&!!S.sheenColorMap,Wt=tt&&!!S.sheenRoughnessMap,Bt=!!S.specularMap,bt=!!S.specularColorMap,Qt=!!S.specularIntensityMap,z=ht&&!!S.transmissionMap,_t=ht&&!!S.thicknessMap,yt=!!S.gradientMap,It=!!S.alphaMap,pt=S.alphaTest>0,ct=!!S.alphaHash,Nt=!!S.extensions,Jt=Kn;S.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Jt=s.toneMapping);let fe={shaderID:ut,shaderType:S.type,shaderName:S.name,vertexShader:qt,fragmentShader:U,defines:S.defines,customVertexShaderID:H,customFragmentShaderID:L,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:lt,batchingColor:lt&&O._colorsTexture!==null,instancing:Z,instancingColor:Z&&O.instanceColor!==null,instancingMorph:Z&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:F===null?s.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Li,alphaToCoverage:!!S.alphaToCoverage,map:dt,matcap:Mt,envMap:D,envMapMode:D&&at.mapping,envMapCubeUVHeight:J,aoMap:Y,lightMap:it,bumpMap:nt,normalMap:j,displacementMap:d&&st,emissiveMap:$,normalMapObjectSpace:j&&S.normalMapType===fd,normalMapTangentSpace:j&&S.normalMapType===yi,metalnessMap:ot,roughnessMap:At,anisotropy:Ot,anisotropyMap:et,clearcoat:P,clearcoatMap:Ft,clearcoatNormalMap:xt,clearcoatRoughnessMap:Lt,dispersion:b,iridescence:W,iridescenceMap:Ut,iridescenceThicknessMap:ft,sheen:tt,sheenColorMap:Rt,sheenRoughnessMap:Wt,specularMap:Bt,specularColorMap:bt,specularIntensityMap:Qt,transmission:ht,transmissionMap:z,thicknessMap:_t,gradientMap:yt,opaque:S.transparent===!1&&S.blending===Ii&&S.alphaToCoverage===!1,alphaMap:It,alphaTest:pt,alphaHash:ct,combine:S.combine,mapUv:dt&&_(S.map.channel),aoMapUv:Y&&_(S.aoMap.channel),lightMapUv:it&&_(S.lightMap.channel),bumpMapUv:nt&&_(S.bumpMap.channel),normalMapUv:j&&_(S.normalMap.channel),displacementMapUv:st&&_(S.displacementMap.channel),emissiveMapUv:$&&_(S.emissiveMap.channel),metalnessMapUv:ot&&_(S.metalnessMap.channel),roughnessMapUv:At&&_(S.roughnessMap.channel),anisotropyMapUv:et&&_(S.anisotropyMap.channel),clearcoatMapUv:Ft&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:xt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&_(S.sheenRoughnessMap.channel),specularMapUv:Bt&&_(S.specularMap.channel),specularColorMapUv:bt&&_(S.specularColorMap.channel),specularIntensityMapUv:Qt&&_(S.specularIntensityMap.channel),transmissionMapUv:z&&_(S.transmissionMap.channel),thicknessMapUv:_t&&_(S.thicknessMap.channel),alphaMapUv:It&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(j||Ot),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(dt||It),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:X,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Pt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:Jt,decodeVideoTexture:dt&&S.map.isVideoTexture===!0&&ee.getTransfer(S.map.colorSpace)===le,decodeVideoTextureEmissive:$&&S.emissiveMap.isVideoTexture===!0&&ee.getTransfer(S.emissiveMap.colorSpace)===le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===He,flipSided:S.side===Ze,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Nt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&S.extensions.multiDraw===!0||lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function p(S){let x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(let w in S.defines)x.push(w),x.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(M(x,S),v(x,S),x.push(s.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function M(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function v(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let x=m[S.type],w;if(x){let N=Vn[x];w=Td.clone(N.uniforms)}else w=S.uniforms;return w}function T(S,x){let w;for(let N=0,O=h.length;N<O;N++){let B=h[N];if(B.cacheKey===x){w=B,++w.usedTimes;break}}return w===void 0&&(w=new Gv(s,x,S,r),h.push(w)),w}function E(S){if(--S.usedTimes===0){let x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:I}}function qv(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Yv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Mm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Sm(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,m,_,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,d,f,m,_,g){let p=o(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,m,_,g){let p=o(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Yv),n.length>1&&n.sort(d||Mm),i.length>1&&i.sort(d||Mm)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Zv(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Sm,s.set(n,[o])):i>=r.length?(o=new Sm,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function $v(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Tt};break;case"SpotLight":e={position:new C,direction:new C,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function Jv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Kv=0;function Qv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function jv(s){let t=new $v,e=Jv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let i=new C,r=new Xt,o=new Xt;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,M=0,v=0,y=0,T=0,E=0,R=0;c.sort(Qv);for(let S=0,x=c.length;S<x;S++){let w=c[S],N=w.color,O=w.intensity,B=w.distance,V=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=N.r*O,u+=N.g*O,d+=N.b*O;else if(w.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(w.sh.coefficients[q],O);R++}else if(w.isDirectionalLight){let q=t.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let at=w.shadow,J=e.get(w);J.shadowIntensity=at.intensity,J.shadowBias=at.bias,J.shadowNormalBias=at.normalBias,J.shadowRadius=at.radius,J.shadowMapSize=at.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=w.shadow.matrix,M++}n.directional[f]=q,f++}else if(w.isSpotLight){let q=t.get(w);q.position.setFromMatrixPosition(w.matrixWorld),q.color.copy(N).multiplyScalar(O),q.distance=B,q.coneCos=Math.cos(w.angle),q.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),q.decay=w.decay,n.spot[_]=q;let at=w.shadow;if(w.map&&(n.spotLightMap[T]=w.map,T++,at.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[_]=at.matrix,w.castShadow){let J=e.get(w);J.shadowIntensity=at.intensity,J.shadowBias=at.bias,J.shadowNormalBias=at.normalBias,J.shadowRadius=at.radius,J.shadowMapSize=at.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=V,y++}_++}else if(w.isRectAreaLight){let q=t.get(w);q.color.copy(N).multiplyScalar(O),q.halfWidth.set(w.width*.5,0,0),q.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=q,g++}else if(w.isPointLight){let q=t.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),q.distance=w.distance,q.decay=w.decay,w.castShadow){let at=w.shadow,J=e.get(w);J.shadowIntensity=at.intensity,J.shadowBias=at.bias,J.shadowNormalBias=at.normalBias,J.shadowRadius=at.radius,J.shadowMapSize=at.mapSize,J.shadowCameraNear=at.camera.near,J.shadowCameraFar=at.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=w.shadow.matrix,v++}n.point[m]=q,m++}else if(w.isHemisphereLight){let q=t.get(w);q.skyColor.copy(w.color).multiplyScalar(O),q.groundColor.copy(w.groundColor).multiplyScalar(O),n.hemi[p]=q,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==v||I.numSpotShadows!==y||I.numSpotMaps!==T||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,I.directionalLength=f,I.pointLength=m,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=v,I.numSpotShadows=y,I.numSpotMaps=T,I.numLightProbes=R,n.version=Kv++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0,g=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let v=c[p];if(v.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(v.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function bm(s){let t=new jv(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function tM(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new bm(s),t.set(i,[a])):r>=o.length?(a=new bm(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var eM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iM(s,t,e){let n=new pi,i=new rt,r=new rt,o=new ne,a=new wr({depthPacking:dd}),l=new Ar,c={},h=e.maxTextureSize,u={[qn]:Ze,[Ze]:qn,[He]:He},d=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:eM,fragmentShader:nM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ht;m.setAttribute("position",new ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new $t(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ah;let p=this.type;this.render=function(E,R,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let S=s.getRenderTarget(),x=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Jn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=p!==zn&&this.type===zn,B=p===zn&&this.type!==zn;for(let V=0,q=E.length;V<q;V++){let at=E[V],J=at.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);let ut=J.getFrameExtents();if(i.multiply(ut),r.copy(J.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ut.x),i.x=r.x*ut.x,J.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ut.y),i.y=r.y*ut.y,J.mapSize.y=r.y)),J.map===null||O===!0||B===!0){let wt=this.type!==zn?{minFilter:Oe,magFilter:Oe}:{};J.map!==null&&J.map.dispose(),J.map=new _n(i.x,i.y,wt),J.map.texture.name=at.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();let gt=J.getViewportCount();for(let wt=0;wt<gt;wt++){let Pt=J.getViewport(wt);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),N.viewport(o),J.updateMatrices(at,wt),n=J.getFrustum(),y(R,I,J.camera,at,this.type)}J.isPointLightShadow!==!0&&this.type===zn&&M(J,I),J.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(S,x,w)};function M(E,R){let I=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new _n(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,I,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,I,f,_,null)}function v(E,R,I,S){let x=null,w=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)x=w;else if(x=I.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let N=x.uuid,O=R.uuid,B=c[N];B===void 0&&(B={},c[N]=B);let V=B[O];V===void 0&&(V=x.clone(),B[O]=V,R.addEventListener("dispose",T)),x=V}if(x.visible=R.visible,x.wireframe=R.wireframe,S===zn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:u[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let N=s.properties.get(x);N.light=I}return x}function y(E,R,I,S,x){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===zn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let O=t.update(E),B=E.material;if(Array.isArray(B)){let V=O.groups;for(let q=0,at=V.length;q<at;q++){let J=V[q],ut=B[J.materialIndex];if(ut&&ut.visible){let gt=v(E,ut,S,x);E.onBeforeShadow(s,E,R,I,O,gt,J),s.renderBufferDirect(I,null,O,gt,E,J),E.onAfterShadow(s,E,R,I,O,gt,J)}}}else if(B.visible){let V=v(E,B,S,x);E.onBeforeShadow(s,E,R,I,O,V,null),s.renderBufferDirect(I,null,O,V,E,null),E.onAfterShadow(s,E,R,I,O,V,null)}}let N=E.children;for(let O=0,B=N.length;O<B;O++)y(N[O],R,I,S,x)}function T(E){E.target.removeEventListener("dispose",T);for(let I in c){let S=c[I],x=E.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}var sM={[xa]:ya,[va]:ba,[Ma]:Ea,[Pi]:Sa,[ya]:xa,[ba]:va,[Ea]:Ma,[Sa]:Pi};function rM(s,t){function e(){let z=!1,_t=new ne,yt=null,It=new ne(0,0,0,0);return{setMask:function(pt){yt!==pt&&!z&&(s.colorMask(pt,pt,pt,pt),yt=pt)},setLocked:function(pt){z=pt},setClear:function(pt,ct,Nt,Jt,fe){fe===!0&&(pt*=Jt,ct*=Jt,Nt*=Jt),_t.set(pt,ct,Nt,Jt),It.equals(_t)===!1&&(s.clearColor(pt,ct,Nt,Jt),It.copy(_t))},reset:function(){z=!1,yt=null,It.set(-1,0,0,0)}}}function n(){let z=!1,_t=!1,yt=null,It=null,pt=null;return{setReversed:function(ct){if(_t!==ct){let Nt=t.get("EXT_clip_control");ct?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),_t=ct;let Jt=pt;pt=null,this.setClear(Jt)}},getReversed:function(){return _t},setTest:function(ct){ct?F(s.DEPTH_TEST):X(s.DEPTH_TEST)},setMask:function(ct){yt!==ct&&!z&&(s.depthMask(ct),yt=ct)},setFunc:function(ct){if(_t&&(ct=sM[ct]),It!==ct){switch(ct){case xa:s.depthFunc(s.NEVER);break;case ya:s.depthFunc(s.ALWAYS);break;case va:s.depthFunc(s.LESS);break;case Pi:s.depthFunc(s.LEQUAL);break;case Ma:s.depthFunc(s.EQUAL);break;case Sa:s.depthFunc(s.GEQUAL);break;case ba:s.depthFunc(s.GREATER);break;case Ea:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}It=ct}},setLocked:function(ct){z=ct},setClear:function(ct){pt!==ct&&(_t&&(ct=1-ct),s.clearDepth(ct),pt=ct)},reset:function(){z=!1,yt=null,It=null,pt=null,_t=!1}}}function i(){let z=!1,_t=null,yt=null,It=null,pt=null,ct=null,Nt=null,Jt=null,fe=null;return{setTest:function(oe){z||(oe?F(s.STENCIL_TEST):X(s.STENCIL_TEST))},setMask:function(oe){_t!==oe&&!z&&(s.stencilMask(oe),_t=oe)},setFunc:function(oe,ei,Gn){(yt!==oe||It!==ei||pt!==Gn)&&(s.stencilFunc(oe,ei,Gn),yt=oe,It=ei,pt=Gn)},setOp:function(oe,ei,Gn){(ct!==oe||Nt!==ei||Jt!==Gn)&&(s.stencilOp(oe,ei,Gn),ct=oe,Nt=ei,Jt=Gn)},setLocked:function(oe){z=oe},setClear:function(oe){fe!==oe&&(s.clearStencil(oe),fe=oe)},reset:function(){z=!1,_t=null,yt=null,It=null,pt=null,ct=null,Nt=null,Jt=null,fe=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,M=null,v=null,y=null,T=null,E=null,R=new Tt(0,0,0),I=0,S=!1,x=null,w=null,N=null,O=null,B=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,at=0,J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=at>=1):J.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=at>=2);let ut=null,gt={},wt=s.getParameter(s.SCISSOR_BOX),Pt=s.getParameter(s.VIEWPORT),qt=new ne().fromArray(wt),U=new ne().fromArray(Pt);function H(z,_t,yt,It){let pt=new Uint8Array(4),ct=s.createTexture();s.bindTexture(z,ct),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<yt;Nt++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(_t,0,s.RGBA,1,1,It,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(_t+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return ct}let L={};L[s.TEXTURE_2D]=H(s.TEXTURE_2D,s.TEXTURE_2D,1),L[s.TEXTURE_CUBE_MAP]=H(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[s.TEXTURE_2D_ARRAY]=H(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),L[s.TEXTURE_3D]=H(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(s.DEPTH_TEST),o.setFunc(Pi),nt(!1),j(oh),F(s.CULL_FACE),Y(Jn);function F(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function X(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function Z(z,_t){return u[z]!==_t?(s.bindFramebuffer(z,_t),u[z]=_t,z===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=_t),z===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=_t),!0):!1}function lt(z,_t){let yt=f,It=!1;if(z){yt=d.get(_t),yt===void 0&&(yt=[],d.set(_t,yt));let pt=z.textures;if(yt.length!==pt.length||yt[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,Nt=pt.length;ct<Nt;ct++)yt[ct]=s.COLOR_ATTACHMENT0+ct;yt.length=pt.length,It=!0}}else yt[0]!==s.BACK&&(yt[0]=s.BACK,It=!0);It&&s.drawBuffers(yt)}function dt(z){return m!==z?(s.useProgram(z),m=z,!0):!1}let Mt={[hi]:s.FUNC_ADD,[Du]:s.FUNC_SUBTRACT,[Lu]:s.FUNC_REVERSE_SUBTRACT};Mt[Uu]=s.MIN,Mt[Nu]=s.MAX;let D={[Fu]:s.ZERO,[Bu]:s.ONE,[Ou]:s.SRC_COLOR,[fo]:s.SRC_ALPHA,[Wu]:s.SRC_ALPHA_SATURATE,[ku]:s.DST_COLOR,[Hu]:s.DST_ALPHA,[zu]:s.ONE_MINUS_SRC_COLOR,[po]:s.ONE_MINUS_SRC_ALPHA,[Gu]:s.ONE_MINUS_DST_COLOR,[Vu]:s.ONE_MINUS_DST_ALPHA,[Xu]:s.CONSTANT_COLOR,[qu]:s.ONE_MINUS_CONSTANT_COLOR,[Yu]:s.CONSTANT_ALPHA,[Zu]:s.ONE_MINUS_CONSTANT_ALPHA};function Y(z,_t,yt,It,pt,ct,Nt,Jt,fe,oe){if(z===Jn){_===!0&&(X(s.BLEND),_=!1);return}if(_===!1&&(F(s.BLEND),_=!0),z!==Pu){if(z!==g||oe!==S){if((p!==hi||y!==hi)&&(s.blendEquation(s.FUNC_ADD),p=hi,y=hi),oe)switch(z){case Ii:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lr:s.blendFunc(s.ONE,s.ONE);break;case lh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ch:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ii:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case lh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ch:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,v=null,T=null,E=null,R.set(0,0,0),I=0,g=z,S=oe}return}pt=pt||_t,ct=ct||yt,Nt=Nt||It,(_t!==p||pt!==y)&&(s.blendEquationSeparate(Mt[_t],Mt[pt]),p=_t,y=pt),(yt!==M||It!==v||ct!==T||Nt!==E)&&(s.blendFuncSeparate(D[yt],D[It],D[ct],D[Nt]),M=yt,v=It,T=ct,E=Nt),(Jt.equals(R)===!1||fe!==I)&&(s.blendColor(Jt.r,Jt.g,Jt.b,fe),R.copy(Jt),I=fe),g=z,S=!1}function it(z,_t){z.side===He?X(s.CULL_FACE):F(s.CULL_FACE);let yt=z.side===Ze;_t&&(yt=!yt),nt(yt),z.blending===Ii&&z.transparent===!1?Y(Jn):Y(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let It=z.stencilWrite;a.setTest(It),It&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),$(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?F(s.SAMPLE_ALPHA_TO_COVERAGE):X(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(z){x!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),x=z)}function j(z){z!==Ru?(F(s.CULL_FACE),z!==w&&(z===oh?s.cullFace(s.BACK):z===Cu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):X(s.CULL_FACE),w=z}function st(z){z!==N&&(q&&s.lineWidth(z),N=z)}function $(z,_t,yt){z?(F(s.POLYGON_OFFSET_FILL),(O!==_t||B!==yt)&&(s.polygonOffset(_t,yt),O=_t,B=yt)):X(s.POLYGON_OFFSET_FILL)}function ot(z){z?F(s.SCISSOR_TEST):X(s.SCISSOR_TEST)}function At(z){z===void 0&&(z=s.TEXTURE0+V-1),ut!==z&&(s.activeTexture(z),ut=z)}function Ot(z,_t,yt){yt===void 0&&(ut===null?yt=s.TEXTURE0+V-1:yt=ut);let It=gt[yt];It===void 0&&(It={type:void 0,texture:void 0},gt[yt]=It),(It.type!==z||It.texture!==_t)&&(ut!==yt&&(s.activeTexture(yt),ut=yt),s.bindTexture(z,_t||L[z]),It.type=z,It.texture=_t)}function P(){let z=gt[ut];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function W(){try{s.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function tt(){try{s.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{s.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{s.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ft(){try{s.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{s.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Lt(){try{s.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ut(){try{s.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{s.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Rt(z){qt.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),qt.copy(z))}function Wt(z){U.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),U.copy(z))}function Bt(z,_t){let yt=c.get(_t);yt===void 0&&(yt=new WeakMap,c.set(_t,yt));let It=yt.get(z);It===void 0&&(It=s.getUniformBlockIndex(_t,z.name),yt.set(z,It))}function bt(z,_t){let It=c.get(_t).get(z);l.get(_t)!==It&&(s.uniformBlockBinding(_t,It,z.__bindingPointIndex),l.set(_t,It))}function Qt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ut=null,gt={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,M=null,v=null,y=null,T=null,E=null,R=new Tt(0,0,0),I=0,S=!1,x=null,w=null,N=null,O=null,B=null,qt.set(0,0,s.canvas.width,s.canvas.height),U.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:F,disable:X,bindFramebuffer:Z,drawBuffers:lt,useProgram:dt,setBlending:Y,setMaterial:it,setFlipSided:nt,setCullFace:j,setLineWidth:st,setPolygonOffset:$,setScissorTest:ot,activeTexture:At,bindTexture:Ot,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:Ut,texImage3D:ft,updateUBOMapping:Bt,uniformBlockBinding:bt,texStorage2D:xt,texStorage3D:Lt,texSubImage2D:tt,texSubImage3D:ht,compressedTexSubImage2D:et,compressedTexSubImage3D:Ft,scissor:Rt,viewport:Wt,reset:Qt}}function oM(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,b){return f?new OffscreenCanvas(P,b):cr("canvas")}function _(P,b,W){let tt=1,ht=Ot(P);if((ht.width>W||ht.height>W)&&(tt=W/Math.max(ht.width,ht.height)),tt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let et=Math.floor(tt*ht.width),Ft=Math.floor(tt*ht.height);u===void 0&&(u=m(et,Ft));let xt=b?m(et,Ft):u;return xt.width=et,xt.height=Ft,xt.getContext("2d").drawImage(P,0,0,et,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+et+"x"+Ft+")."),xt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(P,b,W,tt,ht=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let et=b;if(b===s.RED&&(W===s.FLOAT&&(et=s.R32F),W===s.HALF_FLOAT&&(et=s.R16F),W===s.UNSIGNED_BYTE&&(et=s.R8)),b===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(et=s.R8UI),W===s.UNSIGNED_SHORT&&(et=s.R16UI),W===s.UNSIGNED_INT&&(et=s.R32UI),W===s.BYTE&&(et=s.R8I),W===s.SHORT&&(et=s.R16I),W===s.INT&&(et=s.R32I)),b===s.RG&&(W===s.FLOAT&&(et=s.RG32F),W===s.HALF_FLOAT&&(et=s.RG16F),W===s.UNSIGNED_BYTE&&(et=s.RG8)),b===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(et=s.RG8UI),W===s.UNSIGNED_SHORT&&(et=s.RG16UI),W===s.UNSIGNED_INT&&(et=s.RG32UI),W===s.BYTE&&(et=s.RG8I),W===s.SHORT&&(et=s.RG16I),W===s.INT&&(et=s.RG32I)),b===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(et=s.RGB8UI),W===s.UNSIGNED_SHORT&&(et=s.RGB16UI),W===s.UNSIGNED_INT&&(et=s.RGB32UI),W===s.BYTE&&(et=s.RGB8I),W===s.SHORT&&(et=s.RGB16I),W===s.INT&&(et=s.RGB32I)),b===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),W===s.UNSIGNED_INT&&(et=s.RGBA32UI),W===s.BYTE&&(et=s.RGBA8I),W===s.SHORT&&(et=s.RGBA16I),W===s.INT&&(et=s.RGBA32I)),b===s.RGB&&(W===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(et=s.R11F_G11F_B10F)),b===s.RGBA){let Ft=ht?ar:ee.getTransfer(tt);W===s.FLOAT&&(et=s.RGBA32F),W===s.HALF_FLOAT&&(et=s.RGBA16F),W===s.UNSIGNED_BYTE&&(et=Ft===le?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function y(P,b){let W;return P?b===null||b===jn||b===As?W=s.DEPTH24_STENCIL8:b===je?W=s.DEPTH32F_STENCIL8:b===Ts&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===jn||b===As?W=s.DEPTH_COMPONENT24:b===je?W=s.DEPTH_COMPONENT32F:b===Ts&&(W=s.DEPTH_COMPONENT16),W}function T(P,b){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Oe&&P.minFilter!==Pe?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function E(P){let b=P.target;b.removeEventListener("dispose",E),I(b),b.isVideoTexture&&h.delete(b)}function R(P){let b=P.target;b.removeEventListener("dispose",R),x(b)}function I(P){let b=n.get(P);if(b.__webglInit===void 0)return;let W=P.source,tt=d.get(W);if(tt){let ht=tt[b.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&S(P),Object.keys(tt).length===0&&d.delete(W)}n.remove(P)}function S(P){let b=n.get(P);s.deleteTexture(b.__webglTexture);let W=P.source,tt=d.get(W);delete tt[b.__cacheKey],o.memory.textures--}function x(P){let b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(b.__webglFramebuffer[tt]))for(let ht=0;ht<b.__webglFramebuffer[tt].length;ht++)s.deleteFramebuffer(b.__webglFramebuffer[tt][ht]);else s.deleteFramebuffer(b.__webglFramebuffer[tt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[tt])}else{if(Array.isArray(b.__webglFramebuffer))for(let tt=0;tt<b.__webglFramebuffer.length;tt++)s.deleteFramebuffer(b.__webglFramebuffer[tt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let tt=0;tt<b.__webglColorRenderbuffer.length;tt++)b.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[tt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let W=P.textures;for(let tt=0,ht=W.length;tt<ht;tt++){let et=n.get(W[tt]);et.__webglTexture&&(s.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(W[tt])}n.remove(P)}let w=0;function N(){w=0}function O(){let P=w;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),w+=1,P}function B(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function V(P,b){let W=n.get(P);if(P.isVideoTexture&&ot(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let tt=P.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{L(W,P,b);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+b)}function q(P,b){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){L(W,P,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+b)}function at(P,b){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){L(W,P,b);return}e.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+b)}function J(P,b){let W=n.get(P);if(P.version>0&&W.__version!==P.version){F(W,P,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+b)}let ut={[Di]:s.REPEAT,[fn]:s.CLAMP_TO_EDGE,[sr]:s.MIRRORED_REPEAT},gt={[Oe]:s.NEAREST,[hh]:s.NEAREST_MIPMAP_NEAREST,[Es]:s.NEAREST_MIPMAP_LINEAR,[Pe]:s.LINEAR,[Br]:s.LINEAR_MIPMAP_NEAREST,[Hn]:s.LINEAR_MIPMAP_LINEAR},wt={[pd]:s.NEVER,[vd]:s.ALWAYS,[md]:s.LESS,[yh]:s.LEQUAL,[gd]:s.EQUAL,[yd]:s.GEQUAL,[_d]:s.GREATER,[xd]:s.NOTEQUAL};function Pt(P,b){if(b.type===je&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Pe||b.magFilter===Br||b.magFilter===Es||b.magFilter===Hn||b.minFilter===Pe||b.minFilter===Br||b.minFilter===Es||b.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ut[b.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ut[b.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ut[b.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,gt[b.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,gt[b.minFilter]),b.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,wt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Oe||b.minFilter!==Es&&b.minFilter!==Hn||b.type===je&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function qt(P,b){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",E));let tt=b.source,ht=d.get(tt);ht===void 0&&(ht={},d.set(tt,ht));let et=B(b);if(et!==P.__cacheKey){ht[et]===void 0&&(ht[et]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ht[et].usedTimes++;let Ft=ht[P.__cacheKey];Ft!==void 0&&(ht[P.__cacheKey].usedTimes--,Ft.usedTimes===0&&S(b)),P.__cacheKey=et,P.__webglTexture=ht[et].texture}return W}function U(P,b,W){return Math.floor(Math.floor(P/W)/b)}function H(P,b,W,tt){let et=P.updateRanges;if(et.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,W,tt,b.data);else{et.sort((ft,Rt)=>ft.start-Rt.start);let Ft=0;for(let ft=1;ft<et.length;ft++){let Rt=et[Ft],Wt=et[ft],Bt=Rt.start+Rt.count,bt=U(Wt.start,b.width,4),Qt=U(Rt.start,b.width,4);Wt.start<=Bt+1&&bt===Qt&&U(Wt.start+Wt.count-1,b.width,4)===bt?Rt.count=Math.max(Rt.count,Wt.start+Wt.count-Rt.start):(++Ft,et[Ft]=Wt)}et.length=Ft+1;let xt=s.getParameter(s.UNPACK_ROW_LENGTH),Lt=s.getParameter(s.UNPACK_SKIP_PIXELS),Ut=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let ft=0,Rt=et.length;ft<Rt;ft++){let Wt=et[ft],Bt=Math.floor(Wt.start/4),bt=Math.ceil(Wt.count/4),Qt=Bt%b.width,z=Math.floor(Bt/b.width),_t=bt,yt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Qt),s.pixelStorei(s.UNPACK_SKIP_ROWS,z),e.texSubImage2D(s.TEXTURE_2D,0,Qt,z,_t,yt,W,tt,b.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,xt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ut)}}function L(P,b,W){let tt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(tt=s.TEXTURE_3D);let ht=qt(P,b),et=b.source;e.bindTexture(tt,P.__webglTexture,s.TEXTURE0+W);let Ft=n.get(et);if(et.version!==Ft.__version||ht===!0){e.activeTexture(s.TEXTURE0+W);let xt=ee.getPrimaries(ee.workingColorSpace),Lt=b.colorSpace===ti?null:ee.getPrimaries(b.colorSpace),Ut=b.colorSpace===ti||xt===Lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let ft=_(b.image,!1,i.maxTextureSize);ft=At(b,ft);let Rt=r.convert(b.format,b.colorSpace),Wt=r.convert(b.type),Bt=v(b.internalFormat,Rt,Wt,b.colorSpace,b.isVideoTexture);Pt(tt,b);let bt,Qt=b.mipmaps,z=b.isVideoTexture!==!0,_t=Ft.__version===void 0||ht===!0,yt=et.dataReady,It=T(b,ft);if(b.isDepthTexture)Bt=y(b.format===Rs,b.type),_t&&(z?e.texStorage2D(s.TEXTURE_2D,1,Bt,ft.width,ft.height):e.texImage2D(s.TEXTURE_2D,0,Bt,ft.width,ft.height,0,Rt,Wt,null));else if(b.isDataTexture)if(Qt.length>0){z&&_t&&e.texStorage2D(s.TEXTURE_2D,It,Bt,Qt[0].width,Qt[0].height);for(let pt=0,ct=Qt.length;pt<ct;pt++)bt=Qt[pt],z?yt&&e.texSubImage2D(s.TEXTURE_2D,pt,0,0,bt.width,bt.height,Rt,Wt,bt.data):e.texImage2D(s.TEXTURE_2D,pt,Bt,bt.width,bt.height,0,Rt,Wt,bt.data);b.generateMipmaps=!1}else z?(_t&&e.texStorage2D(s.TEXTURE_2D,It,Bt,ft.width,ft.height),yt&&H(b,ft,Rt,Wt)):e.texImage2D(s.TEXTURE_2D,0,Bt,ft.width,ft.height,0,Rt,Wt,ft.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){z&&_t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,It,Bt,Qt[0].width,Qt[0].height,ft.depth);for(let pt=0,ct=Qt.length;pt<ct;pt++)if(bt=Qt[pt],b.format!==qe)if(Rt!==null)if(z){if(yt)if(b.layerUpdates.size>0){let Nt=Mh(bt.width,bt.height,b.format,b.type);for(let Jt of b.layerUpdates){let fe=bt.data.subarray(Jt*Nt/bt.data.BYTES_PER_ELEMENT,(Jt+1)*Nt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,Jt,bt.width,bt.height,1,Rt,fe)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,0,bt.width,bt.height,ft.depth,Rt,bt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pt,Bt,bt.width,bt.height,ft.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?yt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,0,bt.width,bt.height,ft.depth,Rt,Wt,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,pt,Bt,bt.width,bt.height,ft.depth,0,Rt,Wt,bt.data)}else{z&&_t&&e.texStorage2D(s.TEXTURE_2D,It,Bt,Qt[0].width,Qt[0].height);for(let pt=0,ct=Qt.length;pt<ct;pt++)bt=Qt[pt],b.format!==qe?Rt!==null?z?yt&&e.compressedTexSubImage2D(s.TEXTURE_2D,pt,0,0,bt.width,bt.height,Rt,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,pt,Bt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?yt&&e.texSubImage2D(s.TEXTURE_2D,pt,0,0,bt.width,bt.height,Rt,Wt,bt.data):e.texImage2D(s.TEXTURE_2D,pt,Bt,bt.width,bt.height,0,Rt,Wt,bt.data)}else if(b.isDataArrayTexture)if(z){if(_t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,It,Bt,ft.width,ft.height,ft.depth),yt)if(b.layerUpdates.size>0){let pt=Mh(ft.width,ft.height,b.format,b.type);for(let ct of b.layerUpdates){let Nt=ft.data.subarray(ct*pt/ft.data.BYTES_PER_ELEMENT,(ct+1)*pt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ct,ft.width,ft.height,1,Rt,Wt,Nt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Rt,Wt,ft.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,ft.width,ft.height,ft.depth,0,Rt,Wt,ft.data);else if(b.isData3DTexture)z?(_t&&e.texStorage3D(s.TEXTURE_3D,It,Bt,ft.width,ft.height,ft.depth),yt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Rt,Wt,ft.data)):e.texImage3D(s.TEXTURE_3D,0,Bt,ft.width,ft.height,ft.depth,0,Rt,Wt,ft.data);else if(b.isFramebufferTexture){if(_t)if(z)e.texStorage2D(s.TEXTURE_2D,It,Bt,ft.width,ft.height);else{let pt=ft.width,ct=ft.height;for(let Nt=0;Nt<It;Nt++)e.texImage2D(s.TEXTURE_2D,Nt,Bt,pt,ct,0,Rt,Wt,null),pt>>=1,ct>>=1}}else if(Qt.length>0){if(z&&_t){let pt=Ot(Qt[0]);e.texStorage2D(s.TEXTURE_2D,It,Bt,pt.width,pt.height)}for(let pt=0,ct=Qt.length;pt<ct;pt++)bt=Qt[pt],z?yt&&e.texSubImage2D(s.TEXTURE_2D,pt,0,0,Rt,Wt,bt):e.texImage2D(s.TEXTURE_2D,pt,Bt,Rt,Wt,bt);b.generateMipmaps=!1}else if(z){if(_t){let pt=Ot(ft);e.texStorage2D(s.TEXTURE_2D,It,Bt,pt.width,pt.height)}yt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Rt,Wt,ft)}else e.texImage2D(s.TEXTURE_2D,0,Bt,Rt,Wt,ft);g(b)&&p(tt),Ft.__version=et.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function F(P,b,W){if(b.image.length!==6)return;let tt=qt(P,b),ht=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+W);let et=n.get(ht);if(ht.version!==et.__version||tt===!0){e.activeTexture(s.TEXTURE0+W);let Ft=ee.getPrimaries(ee.workingColorSpace),xt=b.colorSpace===ti?null:ee.getPrimaries(b.colorSpace),Lt=b.colorSpace===ti||Ft===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let Ut=b.isCompressedTexture||b.image[0].isCompressedTexture,ft=b.image[0]&&b.image[0].isDataTexture,Rt=[];for(let ct=0;ct<6;ct++)!Ut&&!ft?Rt[ct]=_(b.image[ct],!0,i.maxCubemapSize):Rt[ct]=ft?b.image[ct].image:b.image[ct],Rt[ct]=At(b,Rt[ct]);let Wt=Rt[0],Bt=r.convert(b.format,b.colorSpace),bt=r.convert(b.type),Qt=v(b.internalFormat,Bt,bt,b.colorSpace),z=b.isVideoTexture!==!0,_t=et.__version===void 0||tt===!0,yt=ht.dataReady,It=T(b,Wt);Pt(s.TEXTURE_CUBE_MAP,b);let pt;if(Ut){z&&_t&&e.texStorage2D(s.TEXTURE_CUBE_MAP,It,Qt,Wt.width,Wt.height);for(let ct=0;ct<6;ct++){pt=Rt[ct].mipmaps;for(let Nt=0;Nt<pt.length;Nt++){let Jt=pt[Nt];b.format!==qe?Bt!==null?z?yt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt,0,0,Jt.width,Jt.height,Bt,Jt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt,Qt,Jt.width,Jt.height,0,Jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?yt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt,0,0,Jt.width,Jt.height,Bt,bt,Jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt,Qt,Jt.width,Jt.height,0,Bt,bt,Jt.data)}}}else{if(pt=b.mipmaps,z&&_t){pt.length>0&&It++;let ct=Ot(Rt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,It,Qt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(ft){z?yt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Rt[ct].width,Rt[ct].height,Bt,bt,Rt[ct].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Qt,Rt[ct].width,Rt[ct].height,0,Bt,bt,Rt[ct].data);for(let Nt=0;Nt<pt.length;Nt++){let fe=pt[Nt].image[ct].image;z?yt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt+1,0,0,fe.width,fe.height,Bt,bt,fe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt+1,Qt,fe.width,fe.height,0,Bt,bt,fe.data)}}else{z?yt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Bt,bt,Rt[ct]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Qt,Bt,bt,Rt[ct]);for(let Nt=0;Nt<pt.length;Nt++){let Jt=pt[Nt];z?yt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt+1,0,0,Bt,bt,Jt.image[ct]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt+1,Qt,Bt,bt,Jt.image[ct])}}}g(b)&&p(s.TEXTURE_CUBE_MAP),et.__version=ht.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function X(P,b,W,tt,ht,et){let Ft=r.convert(W.format,W.colorSpace),xt=r.convert(W.type),Lt=v(W.internalFormat,Ft,xt,W.colorSpace),Ut=n.get(b),ft=n.get(W);if(ft.__renderTarget=b,!Ut.__hasExternalTextures){let Rt=Math.max(1,b.width>>et),Wt=Math.max(1,b.height>>et);ht===s.TEXTURE_3D||ht===s.TEXTURE_2D_ARRAY?e.texImage3D(ht,et,Lt,Rt,Wt,b.depth,0,Ft,xt,null):e.texImage2D(ht,et,Lt,Rt,Wt,0,Ft,xt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),$(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,ht,ft.__webglTexture,0,st(b)):(ht===s.TEXTURE_2D||ht>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,ht,ft.__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Z(P,b,W){if(s.bindRenderbuffer(s.RENDERBUFFER,P),b.depthBuffer){let tt=b.depthTexture,ht=tt&&tt.isDepthTexture?tt.type:null,et=y(b.stencilBuffer,ht),Ft=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=st(b);$(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt,et,b.width,b.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,et,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,et,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ft,s.RENDERBUFFER,P)}else{let tt=b.textures;for(let ht=0;ht<tt.length;ht++){let et=tt[ht],Ft=r.convert(et.format,et.colorSpace),xt=r.convert(et.type),Lt=v(et.internalFormat,Ft,xt,et.colorSpace),Ut=st(b);W&&$(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,Lt,b.width,b.height):$(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut,Lt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Lt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let tt=n.get(b.depthTexture);tt.__renderTarget=b,(!tt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);let ht=tt.__webglTexture,et=st(b);if(b.depthTexture.format===ls)$(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0);else if(b.depthTexture.format===Rs)$(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function dt(P){let b=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let tt=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),tt){let ht=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,tt.removeEventListener("dispose",ht)};tt.addEventListener("dispose",ht),b.__depthDisposeCallback=ht}b.__boundDepthTexture=tt}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");let tt=P.texture.mipmaps;tt&&tt.length>0?lt(b.__webglFramebuffer[0],P):lt(b.__webglFramebuffer,P)}else if(W){b.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[tt]),b.__webglDepthbuffer[tt]===void 0)b.__webglDepthbuffer[tt]=s.createRenderbuffer(),Z(b.__webglDepthbuffer[tt],P,!1);else{let ht=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer[tt];s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,et)}}else{let tt=P.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Z(b.__webglDepthbuffer,P,!1);else{let ht=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,et)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(P,b,W){let tt=n.get(P);b!==void 0&&X(tt.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&dt(P)}function D(P){let b=P.texture,W=n.get(P),tt=n.get(b);P.addEventListener("dispose",R);let ht=P.textures,et=P.isWebGLCubeRenderTarget===!0,Ft=ht.length>1;if(Ft||(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=b.version,o.memory.textures++),et){W.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[xt]=[];for(let Lt=0;Lt<b.mipmaps.length;Lt++)W.__webglFramebuffer[xt][Lt]=s.createFramebuffer()}else W.__webglFramebuffer[xt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let xt=0;xt<b.mipmaps.length;xt++)W.__webglFramebuffer[xt]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Ft)for(let xt=0,Lt=ht.length;xt<Lt;xt++){let Ut=n.get(ht[xt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&$(P)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let xt=0;xt<ht.length;xt++){let Lt=ht[xt];W.__webglColorRenderbuffer[xt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[xt]);let Ut=r.convert(Lt.format,Lt.colorSpace),ft=r.convert(Lt.type),Rt=v(Lt.internalFormat,Ut,ft,Lt.colorSpace,P.isXRRenderTarget===!0),Wt=st(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,Rt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,W.__webglColorRenderbuffer[xt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),Z(W.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),Pt(s.TEXTURE_CUBE_MAP,b);for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Lt=0;Lt<b.mipmaps.length;Lt++)X(W.__webglFramebuffer[xt][Lt],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt);else X(W.__webglFramebuffer[xt],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);g(b)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let xt=0,Lt=ht.length;xt<Lt;xt++){let Ut=ht[xt],ft=n.get(Ut),Rt=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Rt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Rt,ft.__webglTexture),Pt(Rt,Ut),X(W.__webglFramebuffer,P,Ut,s.COLOR_ATTACHMENT0+xt,Rt,0),g(Ut)&&p(Rt)}e.unbindTexture()}else{let xt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,tt.__webglTexture),Pt(xt,b),b.mipmaps&&b.mipmaps.length>0)for(let Lt=0;Lt<b.mipmaps.length;Lt++)X(W.__webglFramebuffer[Lt],P,b,s.COLOR_ATTACHMENT0,xt,Lt);else X(W.__webglFramebuffer,P,b,s.COLOR_ATTACHMENT0,xt,0);g(b)&&p(xt),e.unbindTexture()}P.depthBuffer&&dt(P)}function Y(P){let b=P.textures;for(let W=0,tt=b.length;W<tt;W++){let ht=b[W];if(g(ht)){let et=M(P),Ft=n.get(ht).__webglTexture;e.bindTexture(et,Ft),p(et),e.unbindTexture()}}}let it=[],nt=[];function j(P){if(P.samples>0){if($(P)===!1){let b=P.textures,W=P.width,tt=P.height,ht=s.COLOR_BUFFER_BIT,et=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ft=n.get(P),xt=b.length>1;if(xt)for(let Ut=0;Ut<b.length;Ut++)e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);let Lt=P.texture.mipmaps;Lt&&Lt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Ut=0;Ut<b.length;Ut++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ht|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ht|=s.STENCIL_BUFFER_BIT)),xt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[Ut]);let ft=n.get(b[Ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,W,tt,0,0,W,tt,ht,s.NEAREST),l===!0&&(it.length=0,nt.length=0,it.push(s.COLOR_ATTACHMENT0+Ut),P.depthBuffer&&P.resolveDepthBuffer===!1&&(it.push(et),nt.push(et),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,nt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xt)for(let Ut=0;Ut<b.length;Ut++){e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[Ut]);let ft=n.get(b[Ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,ft,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let b=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function st(P){return Math.min(i.maxSamples,P.samples)}function $(P){let b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ot(P){let b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function At(P,b){let W=P.colorSpace,tt=P.format,ht=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Li&&W!==ti&&(ee.getTransfer(W)===le?(tt!==qe||ht!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}function Ot(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=at,this.setTextureCube=J,this.rebindTextures=Mt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=X,this.useMultisampledRTT=$}function Cm(s,t){function e(n,i=ti){let r,o=ee.getTransfer(i);if(n===An)return s.UNSIGNED_BYTE;if(n===Aa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ra)return s.UNSIGNED_SHORT_5_5_5_1;if(n===fh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ph)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===uh)return s.BYTE;if(n===dh)return s.SHORT;if(n===Ts)return s.UNSIGNED_SHORT;if(n===wa)return s.INT;if(n===jn)return s.UNSIGNED_INT;if(n===je)return s.FLOAT;if(n===ws)return s.HALF_FLOAT;if(n===mh)return s.ALPHA;if(n===gh)return s.RGB;if(n===qe)return s.RGBA;if(n===ls)return s.DEPTH_COMPONENT;if(n===Rs)return s.DEPTH_STENCIL;if(n===Ca)return s.RED;if(n===Or)return s.RED_INTEGER;if(n===_h)return s.RG;if(n===Ia)return s.RG_INTEGER;if(n===Pa)return s.RGBA_INTEGER;if(n===zr||n===Hr||n===Vr||n===kr)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===La||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Ba||n===Oa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===Ba)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===za||n===Ha||n===Va||n===ka||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===Qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===za)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ka)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ya)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Za)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ja||n===tl||n===el)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ja)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nl||n===il||n===sl||n===rl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===nl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var aM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new xr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new an({vertexShader:aM,fragmentShader:lM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wd=class extends gn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new Gd,p={},M=e.getContextAttributes(),v=null,y=null,T=[],E=[],R=new rt,I=null,S=new be;S.viewport=new ne;let x=new be;x.viewport=new ne;let w=[S,x],N=new fa,O=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let F=T[L];return F===void 0&&(F=new ms,T[L]=F),F.getTargetRaySpace()},this.getControllerGrip=function(L){let F=T[L];return F===void 0&&(F=new ms,T[L]=F),F.getGripSpace()},this.getHand=function(L){let F=T[L];return F===void 0&&(F=new ms,T[L]=F),F.getHandSpace()};function V(L){let F=E.indexOf(L.inputSource);if(F===-1)return;let X=T[F];X!==void 0&&(X.update(L.inputSource,L.frame,c||o),X.dispatchEvent({type:L.type,data:L.inputSource}))}function q(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",at);for(let L=0;L<T.length;L++){let F=E[L];F!==null&&(E[L]=null,T[L].disconnect(F))}O=null,B=null,g.reset();for(let L in p)delete p[L];t.setRenderTarget(v),f=null,d=null,u=null,i=null,y=null,H.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(L){if(i=L,i!==null){if(v=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",q),i.addEventListener("inputsourceschange",at),M.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,Z=null,lt=null;M.depth&&(lt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=M.stencil?Rs:ls,Z=M.stencil?As:jn);let dt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(dt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new _n(d.textureWidth,d.textureHeight,{format:qe,type:An,depthTexture:new _r(d.textureWidth,d.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let X={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,X),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new _n(f.framebufferWidth,f.framebufferHeight,{format:qe,type:An,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),H.setContext(i),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function at(L){for(let F=0;F<L.removed.length;F++){let X=L.removed[F],Z=E.indexOf(X);Z>=0&&(E[Z]=null,T[Z].disconnect(X))}for(let F=0;F<L.added.length;F++){let X=L.added[F],Z=E.indexOf(X);if(Z===-1){for(let dt=0;dt<T.length;dt++)if(dt>=E.length){E.push(X),Z=dt;break}else if(E[dt]===null){E[dt]=X,Z=dt;break}if(Z===-1)break}let lt=T[Z];lt&&lt.connect(X)}}let J=new C,ut=new C;function gt(L,F,X){J.setFromMatrixPosition(F.matrixWorld),ut.setFromMatrixPosition(X.matrixWorld);let Z=J.distanceTo(ut),lt=F.projectionMatrix.elements,dt=X.projectionMatrix.elements,Mt=lt[14]/(lt[10]-1),D=lt[14]/(lt[10]+1),Y=(lt[9]+1)/lt[5],it=(lt[9]-1)/lt[5],nt=(lt[8]-1)/lt[0],j=(dt[8]+1)/dt[0],st=Mt*nt,$=Mt*j,ot=Z/(-nt+j),At=ot*-nt;if(F.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(At),L.translateZ(ot),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),lt[10]===-1)L.projectionMatrix.copy(F.projectionMatrix),L.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{let Ot=Mt+ot,P=D+ot,b=st-At,W=$+(Z-At),tt=Y*D/P*Ot,ht=it*D/P*Ot;L.projectionMatrix.makePerspective(b,W,tt,ht,Ot,P),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function wt(L,F){F===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(F.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(i===null)return;let F=L.near,X=L.far;g.texture!==null&&(g.depthNear>0&&(F=g.depthNear),g.depthFar>0&&(X=g.depthFar)),N.near=x.near=S.near=F,N.far=x.far=S.far=X,(O!==N.near||B!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,B=N.far),N.layers.mask=L.layers.mask|6,S.layers.mask=N.layers.mask&3,x.layers.mask=N.layers.mask&5;let Z=L.parent,lt=N.cameras;wt(N,Z);for(let dt=0;dt<lt.length;dt++)wt(lt[dt],Z);lt.length===2?gt(N,S,x):N.projectionMatrix.copy(S.projectionMatrix),Pt(L,N,Z)};function Pt(L,F,X){X===null?L.matrix.copy(F.matrixWorld):(L.matrix.copy(X.matrixWorld),L.matrix.invert(),L.matrix.multiply(F.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(F.projectionMatrix),L.projectionMatrixInverse.copy(F.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=hs*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(L){l=L,d!==null&&(d.fixedFoveation=L),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=L)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(L){return p[L]};let qt=null;function U(L,F){if(h=F.getViewerPose(c||o),m=F,h!==null){let X=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Z=!1;X.length!==N.cameras.length&&(N.cameras.length=0,Z=!0);for(let D=0;D<X.length;D++){let Y=X[D],it=null;if(f!==null)it=f.getViewport(Y);else{let j=u.getViewSubImage(d,Y);it=j.viewport,D===0&&(t.setRenderTargetTextures(y,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(y))}let nt=w[D];nt===void 0&&(nt=new be,nt.layers.enable(D),nt.viewport=new ne,w[D]=nt),nt.matrix.fromArray(Y.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Y.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(it.x,it.y,it.width,it.height),D===0&&(N.matrix.copy(nt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Z===!0&&N.cameras.push(nt)}let lt=i.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let D=u.getDepthInformation(X[0]);D&&D.isValid&&D.texture&&g.init(D,i.renderState)}if(lt&&lt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let D=0;D<X.length;D++){let Y=X[D].camera;if(Y){let it=p[Y];it||(it=new xr,p[Y]=it);let nt=u.getCameraImage(Y);it.sourceTexture=nt}}}}for(let X=0;X<T.length;X++){let Z=E[X],lt=T[X];Z!==null&&lt!==void 0&&lt.update(Z,F,c||o)}qt&&qt(L,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),m=null}let H=new Em;H.setAnimationLoop(U),this.setAnimationLoop=function(L){qt=L},this.dispose=function(){}}},Ds=new on,cM=new Xt;function hM(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ed(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,M,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ze&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ze&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),v=M.envMap,y=M.envMapRotation;v&&(g.envMap.value=v,Ds.copy(y),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),g.envMapRotation.value.setFromMatrix4(cM.makeRotationFromEuler(Ds)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function uM(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){let y=v.program;n.uniformBlockBinding(M,y)}function c(M,v){let y=i[M.id];y===void 0&&(m(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",g));let T=v.program;n.updateUBOMapping(M,T);let E=t.render.frame;r[M.id]!==E&&(d(M),r[M.id]=E)}function h(M){let v=u();M.__bindingPointIndex=v;let y=s.createBuffer(),T=M.__size,E=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let v=i[M.id],y=M.uniforms,T=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let E=0,R=y.length;E<R;E++){let I=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,x=I.length;S<x;S++){let w=I[S];if(f(w,E,S,T)===!0){let N=w.__offset,O=Array.isArray(w.value)?w.value:[w.value],B=0;for(let V=0;V<O.length;V++){let q=O[V],at=_(q);typeof q=="number"||typeof q=="boolean"?(w.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,N+B,w.__data)):q.isMatrix3?(w.__data[0]=q.elements[0],w.__data[1]=q.elements[1],w.__data[2]=q.elements[2],w.__data[3]=0,w.__data[4]=q.elements[3],w.__data[5]=q.elements[4],w.__data[6]=q.elements[5],w.__data[7]=0,w.__data[8]=q.elements[6],w.__data[9]=q.elements[7],w.__data[10]=q.elements[8],w.__data[11]=0):(q.toArray(w.__data,B),B+=at.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,w.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,v,y,T){let E=M.value,R=v+"_"+y;if(T[R]===void 0)return typeof E=="number"||typeof E=="boolean"?T[R]=E:T[R]=E.clone(),!0;{let I=T[R];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return T[R]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function m(M){let v=M.uniforms,y=0,T=16;for(let R=0,I=v.length;R<I;R++){let S=Array.isArray(v[R])?v[R]:[v[R]];for(let x=0,w=S.length;x<w;x++){let N=S[x],O=Array.isArray(N.value)?N.value:[N.value];for(let B=0,V=O.length;B<V;B++){let q=O[B],at=_(q),J=y%T,ut=J%at.boundary,gt=J+ut;y+=ut,gt!==0&&T-gt<at.storage&&(y+=T-gt),N.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=at.storage}}}let E=y%T;return E>0&&(y+=T-E),M.__size=y,M.__cache={},this}function _(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){let v=M.target;v.removeEventListener("dispose",g);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Xd=class{constructor(t={}){let{canvas:e=bd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,T=!1;this._outputColorSpace=Le;let E=0,R=0,I=null,S=-1,x=null,w=new ne,N=new ne,O=null,B=new Tt(0),V=0,q=e.width,at=e.height,J=1,ut=null,gt=null,wt=new ne(0,0,q,at),Pt=new ne(0,0,q,at),qt=!1,U=new pi,H=!1,L=!1,F=new Xt,X=new C,Z=new ne,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dt=!1;function Mt(){return I===null?J:1}let D=n;function Y(A,k){return e.getContext(A,k)}try{let A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",pt,!1),D===null){let k="webgl2";if(D=Y(k,A),D===null)throw Y(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let it,nt,j,st,$,ot,At,Ot,P,b,W,tt,ht,et,Ft,xt,Lt,Ut,ft,Rt,Wt,Bt,bt,Qt;function z(){it=new Iy(D),it.init(),Bt=new Cm(D,it),nt=new by(D,it,t,Bt),j=new rM(D,it),nt.reversedDepthBuffer&&d&&j.buffers.depth.setReversed(!0),st=new Ly(D),$=new qv,ot=new oM(D,it,j,$,nt,Bt,st),At=new Ty(y),Ot=new Cy(y),P=new z0(D),bt=new My(D,P),b=new Py(D,P,st,bt),W=new Ny(D,b,P,st),ft=new Uy(D,nt,ot),xt=new Ey($),tt=new Xv(y,At,Ot,it,nt,bt,xt),ht=new hM(y,$),et=new Zv,Ft=new tM(it),Ut=new vy(y,At,Ot,j,W,f,l),Lt=new iM(y,W,nt),Qt=new uM(D,st,nt,j),Rt=new Sy(D,it,st),Wt=new Dy(D,it,st),st.programs=tt.programs,y.capabilities=nt,y.extensions=it,y.properties=$,y.renderLists=et,y.shadowMap=Lt,y.state=j,y.info=st}z();let _t=new Wd(y,D);this.xr=_t,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=it.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=it.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(A){A!==void 0&&(J=A,this.setSize(q,at,!1))},this.getSize=function(A){return A.set(q,at)},this.setSize=function(A,k,K=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,at=k,e.width=Math.floor(A*J),e.height=Math.floor(k*J),K===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(q*J,at*J).floor()},this.setDrawingBufferSize=function(A,k,K){q=A,at=k,J=K,e.width=Math.floor(A*K),e.height=Math.floor(k*K),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(wt)},this.setViewport=function(A,k,K,Q){A.isVector4?wt.set(A.x,A.y,A.z,A.w):wt.set(A,k,K,Q),j.viewport(w.copy(wt).multiplyScalar(J).round())},this.getScissor=function(A){return A.copy(Pt)},this.setScissor=function(A,k,K,Q){A.isVector4?Pt.set(A.x,A.y,A.z,A.w):Pt.set(A,k,K,Q),j.scissor(N.copy(Pt).multiplyScalar(J).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(A){j.setScissorTest(qt=A)},this.setOpaqueSort=function(A){ut=A},this.setTransparentSort=function(A){gt=A},this.getClearColor=function(A){return A.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,K=!0){let Q=0;if(A){let G=!1;if(I!==null){let mt=I.texture.format;G=mt===Pa||mt===Ia||mt===Or}if(G){let mt=I.texture.type,Et=mt===An||mt===jn||mt===Ts||mt===As||mt===Aa||mt===Ra,Dt=Ut.getClearColor(),Ct=Ut.getClearAlpha(),kt=Dt.r,Yt=Dt.g,zt=Dt.b;Et?(m[0]=kt,m[1]=Yt,m[2]=zt,m[3]=Ct,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=kt,_[1]=Yt,_[2]=zt,_[3]=Ct,D.clearBufferiv(D.COLOR,0,_))}else Q|=D.COLOR_BUFFER_BIT}k&&(Q|=D.DEPTH_BUFFER_BIT),K&&(Q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Ut.dispose(),et.dispose(),Ft.dispose(),$.dispose(),At.dispose(),Ot.dispose(),W.dispose(),bt.dispose(),Qt.dispose(),tt.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Gn),_t.removeEventListener("sessionend",Zd),qi.stop()};function yt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let A=st.autoReset,k=Lt.enabled,K=Lt.autoUpdate,Q=Lt.needsUpdate,G=Lt.type;z(),st.autoReset=A,Lt.enabled=k,Lt.autoUpdate=K,Lt.needsUpdate=Q,Lt.type=G}function pt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ct(A){let k=A.target;k.removeEventListener("dispose",ct),Nt(k)}function Nt(A){Jt(A),$.remove(A)}function Jt(A){let k=$.get(A).programs;k!==void 0&&(k.forEach(function(K){tt.releaseProgram(K)}),A.isShaderMaterial&&tt.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,K,Q,G,mt){k===null&&(k=lt);let Et=G.isMesh&&G.matrixWorld.determinant()<0,Dt=zm(A,k,K,Q,G);j.setMaterial(Q,Et);let Ct=K.index,kt=1;if(Q.wireframe===!0){if(Ct=b.getWireframeAttribute(K),Ct===void 0)return;kt=2}let Yt=K.drawRange,zt=K.attributes.position,te=Yt.start*kt,ce=(Yt.start+Yt.count)*kt;mt!==null&&(te=Math.max(te,mt.start*kt),ce=Math.min(ce,(mt.start+mt.count)*kt)),Ct!==null?(te=Math.max(te,0),ce=Math.min(ce,Ct.count)):zt!=null&&(te=Math.max(te,0),ce=Math.min(ce,zt.count));let Me=ce-te;if(Me<0||Me===1/0)return;bt.setup(G,Q,Dt,K,Ct);let pe,de=Rt;if(Ct!==null&&(pe=P.get(Ct),de=Wt,de.setIndex(pe)),G.isMesh)Q.wireframe===!0?(j.setLineWidth(Q.wireframeLinewidth*Mt()),de.setMode(D.LINES)):de.setMode(D.TRIANGLES);else if(G.isLine){let Vt=Q.linewidth;Vt===void 0&&(Vt=1),j.setLineWidth(Vt*Mt()),G.isLineSegments?de.setMode(D.LINES):G.isLineLoop?de.setMode(D.LINE_LOOP):de.setMode(D.LINE_STRIP)}else G.isPoints?de.setMode(D.POINTS):G.isSprite&&de.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)hr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))de.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Vt=G._multiDrawStarts,_e=G._multiDrawCounts,se=G._multiDrawCount,cn=Ct?P.get(Ct).bytesPerElement:1,Ns=$.get(Q).currentProgram.getUniforms();for(let hn=0;hn<se;hn++)Ns.setValue(D,"_gl_DrawID",hn),de.render(Vt[hn]/cn,_e[hn])}else if(G.isInstancedMesh)de.renderInstances(te,Me,G.count);else if(K.isInstancedBufferGeometry){let Vt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,_e=Math.min(K.instanceCount,Vt);de.renderInstances(te,Me,_e)}else de.render(te,Me)};function fe(A,k,K){A.transparent===!0&&A.side===He&&A.forceSinglePass===!1?(A.side=Ze,A.needsUpdate=!0,hl(A,k,K),A.side=qn,A.needsUpdate=!0,hl(A,k,K),A.side=He):hl(A,k,K)}this.compile=function(A,k,K=null){K===null&&(K=A),p=Ft.get(K),p.init(k),v.push(p),K.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),A!==K&&A.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();let Q=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let mt=G.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){let Dt=mt[Et];fe(Dt,K,G),Q.add(Dt)}else fe(mt,K,G),Q.add(mt)}),p=v.pop(),Q},this.compileAsync=function(A,k,K=null){let Q=this.compile(A,k,K);return new Promise(G=>{function mt(){if(Q.forEach(function(Et){$.get(Et).currentProgram.isReady()&&Q.delete(Et)}),Q.size===0){G(A);return}setTimeout(mt,10)}it.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let oe=null;function ei(A){oe&&oe(A)}function Gn(){qi.stop()}function Zd(){qi.start()}let qi=new Em;qi.setAnimationLoop(ei),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(A){oe=A,_t.setAnimationLoop(A),A===null?qi.stop():qi.start()},_t.addEventListener("sessionstart",Gn),_t.addEventListener("sessionend",Zd),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(k),k=_t.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,k,I),p=Ft.get(A,v.length),p.init(k),v.push(p),F.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),U.setFromProjectionMatrix(F,rn,k.reversedDepth),L=this.localClippingEnabled,H=xt.init(this.clippingPlanes,L),g=et.get(A,M.length),g.init(),M.push(g),_t.enabled===!0&&_t.isPresenting===!0){let mt=y.xr.getDepthSensingMesh();mt!==null&&Ch(mt,k,-1/0,y.sortObjects)}Ch(A,k,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ut,gt),dt=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,dt&&Ut.addToRenderList(g,A),this.info.render.frame++,H===!0&&xt.beginShadows();let K=p.state.shadowsArray;Lt.render(K,A,k),H===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=g.opaque,G=g.transmissive;if(p.setupLights(),k.isArrayCamera){let mt=k.cameras;if(G.length>0)for(let Et=0,Dt=mt.length;Et<Dt;Et++){let Ct=mt[Et];Jd(Q,G,A,Ct)}dt&&Ut.render(A);for(let Et=0,Dt=mt.length;Et<Dt;Et++){let Ct=mt[Et];$d(g,A,Ct,Ct.viewport)}}else G.length>0&&Jd(Q,G,A,k),dt&&Ut.render(A),$d(g,A,k);I!==null&&R===0&&(ot.updateMultisampleRenderTarget(I),ot.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(y,A,k),bt.resetDefaultState(),S=-1,x=null,v.pop(),v.length>0?(p=v[v.length-1],H===!0&&xt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Ch(A,k,K,Q){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||U.intersectsSprite(A)){Q&&Z.setFromMatrixPosition(A.matrixWorld).applyMatrix4(F);let Et=W.update(A),Dt=A.material;Dt.visible&&g.push(A,Et,Dt,K,Z.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||U.intersectsObject(A))){let Et=W.update(A),Dt=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Z.copy(A.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Z.copy(Et.boundingSphere.center)),Z.applyMatrix4(A.matrixWorld).applyMatrix4(F)),Array.isArray(Dt)){let Ct=Et.groups;for(let kt=0,Yt=Ct.length;kt<Yt;kt++){let zt=Ct[kt],te=Dt[zt.materialIndex];te&&te.visible&&g.push(A,Et,te,K,Z.z,zt)}}else Dt.visible&&g.push(A,Et,Dt,K,Z.z,null)}}let mt=A.children;for(let Et=0,Dt=mt.length;Et<Dt;Et++)Ch(mt[Et],k,K,Q)}function $d(A,k,K,Q){let G=A.opaque,mt=A.transmissive,Et=A.transparent;p.setupLightsView(K),H===!0&&xt.setGlobalState(y.clippingPlanes,K),Q&&j.viewport(w.copy(Q)),G.length>0&&cl(G,k,K),mt.length>0&&cl(mt,k,K),Et.length>0&&cl(Et,k,K),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Jd(A,k,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new _n(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?ws:An,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let mt=p.state.transmissionRenderTarget[Q.id],Et=Q.viewport||w;mt.setSize(Et.z*y.transmissionResolutionScale,Et.w*y.transmissionResolutionScale);let Dt=y.getRenderTarget(),Ct=y.getActiveCubeFace(),kt=y.getActiveMipmapLevel();y.setRenderTarget(mt),y.getClearColor(B),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),dt&&Ut.render(K);let Yt=y.toneMapping;y.toneMapping=Kn;let zt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),H===!0&&xt.setGlobalState(y.clippingPlanes,Q),cl(A,K,Q),ot.updateMultisampleRenderTarget(mt),ot.updateRenderTargetMipmap(mt),it.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let ce=0,Me=k.length;ce<Me;ce++){let pe=k[ce],de=pe.object,Vt=pe.geometry,_e=pe.material,se=pe.group;if(_e.side===He&&de.layers.test(Q.layers)){let cn=_e.side;_e.side=Ze,_e.needsUpdate=!0,Kd(de,K,Q,Vt,_e,se),_e.side=cn,_e.needsUpdate=!0,te=!0}}te===!0&&(ot.updateMultisampleRenderTarget(mt),ot.updateRenderTargetMipmap(mt))}y.setRenderTarget(Dt,Ct,kt),y.setClearColor(B,V),zt!==void 0&&(Q.viewport=zt),y.toneMapping=Yt}function cl(A,k,K){let Q=k.isScene===!0?k.overrideMaterial:null;for(let G=0,mt=A.length;G<mt;G++){let Et=A[G],Dt=Et.object,Ct=Et.geometry,kt=Et.group,Yt=Et.material;Yt.allowOverride===!0&&Q!==null&&(Yt=Q),Dt.layers.test(K.layers)&&Kd(Dt,k,K,Ct,Yt,kt)}}function Kd(A,k,K,Q,G,mt){A.onBeforeRender(y,k,K,Q,G,mt),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(y,k,K,Q,A,mt),G.transparent===!0&&G.side===He&&G.forceSinglePass===!1?(G.side=Ze,G.needsUpdate=!0,y.renderBufferDirect(K,k,Q,G,A,mt),G.side=qn,G.needsUpdate=!0,y.renderBufferDirect(K,k,Q,G,A,mt),G.side=He):y.renderBufferDirect(K,k,Q,G,A,mt),A.onAfterRender(y,k,K,Q,G,mt)}function hl(A,k,K){k.isScene!==!0&&(k=lt);let Q=$.get(A),G=p.state.lights,mt=p.state.shadowsArray,Et=G.state.version,Dt=tt.getParameters(A,G.state,mt,k,K),Ct=tt.getProgramCacheKey(Dt),kt=Q.programs;Q.environment=A.isMeshStandardMaterial?k.environment:null,Q.fog=k.fog,Q.envMap=(A.isMeshStandardMaterial?Ot:At).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,kt===void 0&&(A.addEventListener("dispose",ct),kt=new Map,Q.programs=kt);let Yt=kt.get(Ct);if(Yt!==void 0){if(Q.currentProgram===Yt&&Q.lightsStateVersion===Et)return jd(A,Dt),Yt}else Dt.uniforms=tt.getUniforms(A),A.onBeforeCompile(Dt,y),Yt=tt.acquireProgram(Dt,Ct),kt.set(Ct,Yt),Q.uniforms=Dt.uniforms;let zt=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(zt.clippingPlanes=xt.uniform),jd(A,Dt),Q.needsLights=Vm(A),Q.lightsStateVersion=Et,Q.needsLights&&(zt.ambientLightColor.value=G.state.ambient,zt.lightProbe.value=G.state.probe,zt.directionalLights.value=G.state.directional,zt.directionalLightShadows.value=G.state.directionalShadow,zt.spotLights.value=G.state.spot,zt.spotLightShadows.value=G.state.spotShadow,zt.rectAreaLights.value=G.state.rectArea,zt.ltc_1.value=G.state.rectAreaLTC1,zt.ltc_2.value=G.state.rectAreaLTC2,zt.pointLights.value=G.state.point,zt.pointLightShadows.value=G.state.pointShadow,zt.hemisphereLights.value=G.state.hemi,zt.directionalShadowMap.value=G.state.directionalShadowMap,zt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,zt.spotShadowMap.value=G.state.spotShadowMap,zt.spotLightMatrix.value=G.state.spotLightMatrix,zt.spotLightMap.value=G.state.spotLightMap,zt.pointShadowMap.value=G.state.pointShadowMap,zt.pointShadowMatrix.value=G.state.pointShadowMatrix),Q.currentProgram=Yt,Q.uniformsList=null,Yt}function Qd(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=Xr.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function jd(A,k){let K=$.get(A);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function zm(A,k,K,Q,G){k.isScene!==!0&&(k=lt),ot.resetTextureUnits();let mt=k.fog,Et=Q.isMeshStandardMaterial?k.environment:null,Dt=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Li,Ct=(Q.isMeshStandardMaterial?Ot:At).get(Q.envMap||Et),kt=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Yt=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),zt=!!K.morphAttributes.position,te=!!K.morphAttributes.normal,ce=!!K.morphAttributes.color,Me=Kn;Q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Me=y.toneMapping);let pe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,de=pe!==void 0?pe.length:0,Vt=$.get(Q),_e=p.state.lights;if(H===!0&&(L===!0||A!==x)){let Je=A===x&&Q.id===S;xt.setState(Q,A,Je)}let se=!1;Q.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==_e.state.version||Vt.outputColorSpace!==Dt||G.isBatchedMesh&&Vt.batching===!1||!G.isBatchedMesh&&Vt.batching===!0||G.isBatchedMesh&&Vt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Vt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Vt.instancing===!1||!G.isInstancedMesh&&Vt.instancing===!0||G.isSkinnedMesh&&Vt.skinning===!1||!G.isSkinnedMesh&&Vt.skinning===!0||G.isInstancedMesh&&Vt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Vt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Vt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Vt.instancingMorph===!1&&G.morphTexture!==null||Vt.envMap!==Ct||Q.fog===!0&&Vt.fog!==mt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==xt.numPlanes||Vt.numIntersection!==xt.numIntersection)||Vt.vertexAlphas!==kt||Vt.vertexTangents!==Yt||Vt.morphTargets!==zt||Vt.morphNormals!==te||Vt.morphColors!==ce||Vt.toneMapping!==Me||Vt.morphTargetsCount!==de)&&(se=!0):(se=!0,Vt.__version=Q.version);let cn=Vt.currentProgram;se===!0&&(cn=hl(Q,k,G));let Ns=!1,hn=!1,Yr=!1,xe=cn.getUniforms(),Mn=Vt.uniforms;if(j.useProgram(cn.program)&&(Ns=!0,hn=!0,Yr=!0),Q.id!==S&&(S=Q.id,hn=!0),Ns||x!==A){j.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),xe.setValue(D,"projectionMatrix",A.projectionMatrix),xe.setValue(D,"viewMatrix",A.matrixWorldInverse);let en=xe.map.cameraPosition;en!==void 0&&en.setValue(D,X.setFromMatrixPosition(A.matrixWorld)),nt.logarithmicDepthBuffer&&xe.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&xe.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,hn=!0,Yr=!0)}if(G.isSkinnedMesh){xe.setOptional(D,G,"bindMatrix"),xe.setOptional(D,G,"bindMatrixInverse");let Je=G.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),xe.setValue(D,"boneTexture",Je.boneTexture,ot))}G.isBatchedMesh&&(xe.setOptional(D,G,"batchingTexture"),xe.setValue(D,"batchingTexture",G._matricesTexture,ot),xe.setOptional(D,G,"batchingIdTexture"),xe.setValue(D,"batchingIdTexture",G._indirectTexture,ot),xe.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&xe.setValue(D,"batchingColorTexture",G._colorsTexture,ot));let Sn=K.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&ft.update(G,K,cn),(hn||Vt.receiveShadow!==G.receiveShadow)&&(Vt.receiveShadow=G.receiveShadow,xe.setValue(D,"receiveShadow",G.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Mn.envMap.value=Ct,Mn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&k.environment!==null&&(Mn.envMapIntensity.value=k.environmentIntensity),hn&&(xe.setValue(D,"toneMappingExposure",y.toneMappingExposure),Vt.needsLights&&Hm(Mn,Yr),mt&&Q.fog===!0&&ht.refreshFogUniforms(Mn,mt),ht.refreshMaterialUniforms(Mn,Q,J,at,p.state.transmissionRenderTarget[A.id]),Xr.upload(D,Qd(Vt),Mn,ot)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Xr.upload(D,Qd(Vt),Mn,ot),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&xe.setValue(D,"center",G.center),xe.setValue(D,"modelViewMatrix",G.modelViewMatrix),xe.setValue(D,"normalMatrix",G.normalMatrix),xe.setValue(D,"modelMatrix",G.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let Je=Q.uniformsGroups;for(let en=0,Ih=Je.length;en<Ih;en++){let Yi=Je[en];Qt.update(Yi,cn),Qt.bind(Yi,cn)}}return cn}function Hm(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Vm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,k,K){let Q=$.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),$.get(A.texture).__webglTexture=k,$.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:K,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){let K=$.get(A);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0};let km=D.createFramebuffer();this.setRenderTarget=function(A,k=0,K=0){I=A,E=k,R=K;let Q=!0,G=null,mt=!1,Et=!1;if(A){let Ct=$.get(A);if(Ct.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(D.FRAMEBUFFER,null),Q=!1;else if(Ct.__webglFramebuffer===void 0)ot.setupRenderTarget(A);else if(Ct.__hasExternalTextures)ot.rebindTextures(A,$.get(A.texture).__webglTexture,$.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let zt=A.depthTexture;if(Ct.__boundDepthTexture!==zt){if(zt!==null&&$.has(zt)&&(A.width!==zt.image.width||A.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(A)}}let kt=A.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Et=!0);let Yt=$.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Yt[k])?G=Yt[k][K]:G=Yt[k],mt=!0):A.samples>0&&ot.useMultisampledRTT(A)===!1?G=$.get(A).__webglMultisampledFramebuffer:Array.isArray(Yt)?G=Yt[K]:G=Yt,w.copy(A.viewport),N.copy(A.scissor),O=A.scissorTest}else w.copy(wt).multiplyScalar(J).floor(),N.copy(Pt).multiplyScalar(J).floor(),O=qt;if(K!==0&&(G=km),j.bindFramebuffer(D.FRAMEBUFFER,G)&&Q&&j.drawBuffers(A,G),j.viewport(w),j.scissor(N),j.setScissorTest(O),mt){let Ct=$.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ct.__webglTexture,K)}else if(Et){let Ct=k;for(let kt=0;kt<A.textures.length;kt++){let Yt=$.get(A.textures[kt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+kt,Yt.__webglTexture,K,Ct)}}else if(A!==null&&K!==0){let Ct=$.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ct.__webglTexture,K)}S=-1},this.readRenderTargetPixels=function(A,k,K,Q,G,mt,Et,Dt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct){j.bindFramebuffer(D.FRAMEBUFFER,Ct);try{let kt=A.textures[Dt],Yt=kt.format,zt=kt.type;if(!nt.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-Q&&K>=0&&K<=A.height-G&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Dt),D.readPixels(k,K,Q,G,Bt.convert(Yt),Bt.convert(zt),mt))}finally{let kt=I!==null?$.get(I).__webglFramebuffer:null;j.bindFramebuffer(D.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(A,k,K,Q,G,mt,Et,Dt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct)if(k>=0&&k<=A.width-Q&&K>=0&&K<=A.height-G){j.bindFramebuffer(D.FRAMEBUFFER,Ct);let kt=A.textures[Dt],Yt=kt.format,zt=kt.type;if(!nt.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,te),D.bufferData(D.PIXEL_PACK_BUFFER,mt.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Dt),D.readPixels(k,K,Q,G,Bt.convert(Yt),Bt.convert(zt),0);let ce=I!==null?$.get(I).__webglFramebuffer:null;j.bindFramebuffer(D.FRAMEBUFFER,ce);let Me=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Xp(D,Me,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,mt),D.deleteBuffer(te),D.deleteSync(Me),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,K=0){let Q=Math.pow(2,-K),G=Math.floor(A.image.width*Q),mt=Math.floor(A.image.height*Q),Et=k!==null?k.x:0,Dt=k!==null?k.y:0;ot.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,Et,Dt,G,mt),j.unbindTexture()};let Gm=D.createFramebuffer(),Wm=D.createFramebuffer();this.copyTextureToTexture=function(A,k,K=null,Q=null,G=0,mt=null){mt===null&&(G!==0?(hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),mt=G,G=0):mt=0);let Et,Dt,Ct,kt,Yt,zt,te,ce,Me,pe=A.isCompressedTexture?A.mipmaps[mt]:A.image;if(K!==null)Et=K.max.x-K.min.x,Dt=K.max.y-K.min.y,Ct=K.isBox3?K.max.z-K.min.z:1,kt=K.min.x,Yt=K.min.y,zt=K.isBox3?K.min.z:0;else{let Sn=Math.pow(2,-G);Et=Math.floor(pe.width*Sn),Dt=Math.floor(pe.height*Sn),A.isDataArrayTexture?Ct=pe.depth:A.isData3DTexture?Ct=Math.floor(pe.depth*Sn):Ct=1,kt=0,Yt=0,zt=0}Q!==null?(te=Q.x,ce=Q.y,Me=Q.z):(te=0,ce=0,Me=0);let de=Bt.convert(k.format),Vt=Bt.convert(k.type),_e;k.isData3DTexture?(ot.setTexture3D(k,0),_e=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ot.setTexture2DArray(k,0),_e=D.TEXTURE_2D_ARRAY):(ot.setTexture2D(k,0),_e=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);let se=D.getParameter(D.UNPACK_ROW_LENGTH),cn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ns=D.getParameter(D.UNPACK_SKIP_PIXELS),hn=D.getParameter(D.UNPACK_SKIP_ROWS),Yr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,kt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Yt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,zt);let xe=A.isDataArrayTexture||A.isData3DTexture,Mn=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){let Sn=$.get(A),Je=$.get(k),en=$.get(Sn.__renderTarget),Ih=$.get(Je.__renderTarget);j.bindFramebuffer(D.READ_FRAMEBUFFER,en.__webglFramebuffer),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ih.__webglFramebuffer);for(let Yi=0;Yi<Ct;Yi++)xe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$.get(A).__webglTexture,G,zt+Yi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$.get(k).__webglTexture,mt,Me+Yi)),D.blitFramebuffer(kt,Yt,Et,Dt,te,ce,Et,Dt,D.DEPTH_BUFFER_BIT,D.NEAREST);j.bindFramebuffer(D.READ_FRAMEBUFFER,null),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||$.has(A)){let Sn=$.get(A),Je=$.get(k);j.bindFramebuffer(D.READ_FRAMEBUFFER,Gm),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,Wm);for(let en=0;en<Ct;en++)xe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Sn.__webglTexture,G,zt+en):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Sn.__webglTexture,G),Mn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Je.__webglTexture,mt,Me+en):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Je.__webglTexture,mt),G!==0?D.blitFramebuffer(kt,Yt,Et,Dt,te,ce,Et,Dt,D.COLOR_BUFFER_BIT,D.NEAREST):Mn?D.copyTexSubImage3D(_e,mt,te,ce,Me+en,kt,Yt,Et,Dt):D.copyTexSubImage2D(_e,mt,te,ce,kt,Yt,Et,Dt);j.bindFramebuffer(D.READ_FRAMEBUFFER,null),j.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Mn?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(_e,mt,te,ce,Me,Et,Dt,Ct,de,Vt,pe.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(_e,mt,te,ce,Me,Et,Dt,Ct,de,pe.data):D.texSubImage3D(_e,mt,te,ce,Me,Et,Dt,Ct,de,Vt,pe):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,mt,te,ce,Et,Dt,de,Vt,pe.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,mt,te,ce,pe.width,pe.height,de,pe.data):D.texSubImage2D(D.TEXTURE_2D,mt,te,ce,Et,Dt,de,Vt,pe);D.pixelStorei(D.UNPACK_ROW_LENGTH,se),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,cn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ns),D.pixelStorei(D.UNPACK_SKIP_ROWS,hn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Yr),mt===0&&k.generateMipmaps&&D.generateMipmap(_e),j.unbindTexture()},this.initRenderTarget=function(A){$.get(A).__webglFramebuffer===void 0&&ot.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ot.setTextureCube(A,0):A.isData3DTexture?ot.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ot.setTexture2DArray(A,0):ot.setTexture2D(A,0),j.unbindTexture()},this.resetState=function(){E=0,R=0,I=null,j.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};function Im(s,t,e,n,i){let r,o,a={hull:e},l=(B,V={})=>i(new ue({color:B,roughness:.93,...V})),c=(B,V,q,at,J)=>{let ut=new $t(B,V);return ut.position.set(q,at,J),s.add(ut),ut};r=new me,r.position.copy(t),s.add(r);let h=a.hull.clone();h.wrapS=h.wrapT=Di,h.repeat.set(3,2),h.needsUpdate=!0;let u=l("#e5d8a9",{map:h,metalness:.32,roughness:.67}),d=l("#c4a866",{metalness:.52,roughness:.43}),f=l("#274b56",{metalness:.32,roughness:.7}),m=(B,V,q=0,at=0,J=0)=>{let ut=new $t(B,V);return ut.position.set(q,at,J),r.add(ut),ut},_=[new rt(1.17,-1.42),new rt(1.34,-1.2),new rt(1.6,-.8),new rt(1.77,-.25),new rt(1.78,.25)],g=[new rt(1.78,.25),new rt(1.61,.9),new rt(1.24,1.5),new rt(.73,1.94),new rt(.25,2.12),new rt(0,2.14)],p=(B,V=0,q=Math.PI*2)=>{let at=new gi(B,64,V,q);return at.rotateX(Math.PI/2),at};m(p(_),u);let M=m(p(g),u);M.name="opaqueRearHull",r.userData.rearHull=M,m(new Ce(1.79,.07,10,64),d,0,0,.25),m(new yn(1.48,48),l("#153c43",{roughness:.85}),0,0,.05),m(new he(2.38,.16,1.8),l("#806f4b",{roughness:.74,metalness:.2}),0,-.91,.66);for(let B of[-1,1]){m(new he(.1,.88,.16),f,B*1.32,-.23,.36),m(new he(.39,.18,.48),d,B*.91,-.71,.58);for(let V=0;V<3;V++)m(new we(.034,8,6),new ge({color:V===0?"#f6d398":"#93d8c2"}),B*(.79+V*.09),-.59,.75)}let v=new _i("#f9ddb0",2.4,4,2);v.position.set(0,.96,.55),r.add(v),r.userData.cabinLight=v,v.visible=!1;let y=[];for(let B=0;B<3;B++){let V=m(new we(.075+B*.016,14,10),new Oi({color:"#d3f4e8",transparent:!0,opacity:0,roughness:.12,metalness:0,depthWrite:!1}),B===0?-.95:.64+B*.16,.45+B*.24,1.57);V.visible=!1,y.push({mesh:V,baseY:V.position.y})}r.userData.reactionBubbles=y,m(new Ce(1.21,.19,14,64),d,0,0,-1.43),m(new Ce(1.01,.065,10,64),f,0,0,-1.44);for(let B=0;B<12;B++){let V=B*Math.PI/6;m(new we(.066,8,6),f,Math.cos(V)*1.22,Math.sin(V)*1.22,-1.62)}let T=m(new yn(1.16,48),new ge({color:"#174356"}),0,0,-.86);T.rotation.y=Math.PI;let E=m(new yn(1.04,64),new Oi({color:"#a7e5df",transparent:!0,opacity:.12,roughness:.13,metalness:.06,clearcoat:.5,depthWrite:!1,side:He}),0,0,-1.49);E.name="frontGlass",m(new Te(.31,.39,.36,20),u,0,1.8,-.4);let R=m(new Te(.31,.31,.64,24),d,0,2.02,-.69);R.rotation.x=Math.PI/2,m(new yn(.26,32),new ge({color:"#b9ecd6",side:He}),0,2.02,-1.02).rotation.y=Math.PI;let I=m(new Bi(1.35,5.2,28,1,!0),new ge({color:"#bed7ab",transparent:!0,opacity:.035,side:He,depthWrite:!1,blending:Lr}),0,1.94,-3.58);I.rotation.x=Math.PI/2,m(new he(.52,.36,.57),u,0,-1.02,1.75);let S=m(new Te(.12,.12,.6,14),f,0,-1.02,2.17);S.rotation.x=Math.PI/2;let x=new me;x.position.set(0,-1.02,2.45),r.add(x),r.userData.propeller=x,x.add(new $t(new we(.2,16,10),d));for(let B=0;B<3;B++){let V=B*2*Math.PI/3,q=new $t(new we(1,16,8),d);q.scale.set(.14,.51,.05),q.position.set(-Math.sin(V)*.43,Math.cos(V)*.43,0),q.rotation.z=V+.25,x.add(q)}for(let B of[-1,1]){let V=new Ht;V.setAttribute("position",new vt([B*1.25,-.72,.62,B*2.32,-.72,1.68,B*1.08,-.72,1.7],3)),V.computeVertexNormals(),m(V,l("#798d76",{metalness:.35,roughness:.65,side:He}))}let w=document.createElement("canvas");w.width=w.height=128;let N=w.getContext("2d"),O=N.createRadialGradient(64,64,0,64,64,64);return O.addColorStop(0,"rgba(0,16,25,.38)"),O.addColorStop(1,"rgba(0,16,25,0)"),N.fillStyle=O,N.fillRect(0,0,128,128),o=c(new Bn(5,6),new ge({map:new Fi(w),transparent:!0,depthWrite:!1}),t.x,n(t.x,t.z)+.08,t.z),o.rotation.x=-Math.PI/2,r.traverse(B=>{B.isMesh&&(B.castShadow=!B.material.transparent,B.receiveShadow=!0)}),{pod:r,shadow:o}}function Pm(s,t,e){let n=new di,i=new be(68,t.aspect,.04,12),r=new me;n.add(r),n.add(new Ms("#d8f0ed","#16262c",2.1));let o=new _i("#ffc98f",5,5,2);o.position.set(0,-.15,.15),n.add(o);let a=new ue({color:"#173b42",metalness:.56,roughness:.64,map:e}),l=new ue({color:"#9d8054",metalness:.68,roughness:.4}),c=new ue({color:"#07191e",metalness:.22,roughness:.78}),h=new ge({color:"#98dcca"}),u=[],d=new ue({color:"#a9a08a",metalness:.8,roughness:.35}),f=0,m,_=-1,g,p=0,M,v=(x,w,N=0,O=0,B=0)=>{let V=new $t(x,w);return V.position.set(N,O,B),r.add(V),V},y=(x,w,N)=>v(new vs(new xs(x.map(O=>new C(...O))),48,w,8,!1),N);function T(){r.traverse(x=>x.geometry?.dispose()),r.clear();for(let x of u)x.dispose();u=[],m?.dispose(),M=null}function E(){f=t.aspect,i.aspect=f,i.fov=68,i.updateProjectionMatrix(),T();let x=-1.25,w=Math.tan(Cs.degToRad(68)/2)*-x,N=w*f,O=[[-N*1.04,-w*1.15,x],[-N*.98,-w*.22,x],[-N*.94,w*.78,x],[-N*.7,w*.96,x],[0,w*1.01,x],[N*.7,w*.96,x],[N*.94,w*.78,x],[N*.98,-w*.22,x],[N*1.04,-w*1.15,x]];y(O,.078,a),y(O.map(([Pt,qt,U])=>[Pt*.983,qt*.978,U-.017]),.014,l);for(let Pt of[-1,1]){y([[Pt*N*.92,w*.79,x],[Pt*N*.85,w*.15,x+.025],[Pt*N*.77,-w*.62,x+.06]],.028,c),y([[Pt*N*.92,w*.79,x-.01],[Pt*N*.85,w*.15,x+.02],[Pt*N*.77,-w*.62,x+.05]],.008,l);for(let qt of[-.2,.3,.72])v(new we(.016,10,8),d,Pt*N*.96,w*qt,x+.064)}let B=new Re;B.moveTo(-N*1.08,-w*1.45),B.lineTo(-N*1.03,-w*.69),B.quadraticCurveTo(0,-w*.47,N*1.03,-w*.69),B.lineTo(N*1.08,-w*1.45),B.closePath(),v(new Ye(B,{depth:.16,bevelEnabled:!0,bevelThickness:.027,bevelSize:.027,bevelSegments:2,steps:1}),a,0,0,x+.04),y([[-N*1.03,-w*.68,x+.19],[-N*.52,-w*.59,x+.19],[0,-w*.56,x+.19],[N*.52,-w*.59,x+.19],[N*1.03,-w*.68,x+.19]],.022,c),y([[-N*.86,-w*.65,x+.195],[0,-w*.57,x+.195],[N*.86,-w*.65,x+.195]],.004,h);let V=x+.255,q=Math.tan(Cs.degToRad(68)/2)*-(V+.025)*f,at=Math.min(q*.66,.7),J=w*.1,ut=-w*.65;v(new he(at*2+.06,J*2+.065,.05),c,0,ut,V-.025);let gt=document.createElement("canvas");gt.width=1024,gt.height=256,g=gt.getContext("2d"),m=new Fi(gt),m.colorSpace=Le;let wt=new ge({map:m});u.push(wt),M=v(new Bn(at*2,J*2),wt,0,ut,V+.004);for(let Pt of[-1,1]){let qt=Pt*Math.min(N*.89,1.35),U=v(new Te(.014,.02,w*.21,12),l,qt,-w*.98,x+.47);U.rotation.z=Pt*.24,v(new we(.042,16,12),c,qt-Pt*.02,-w*.88,x+.47)}p=0,n.traverse(Pt=>{Pt.isMesh&&p++}),_=-1}function R(x){f!==t.aspect&&E();let w=Math.hypot(x.velocity.x,x.velocity.y,x.velocity.z),N=(x.heading*180/Math.PI%360+360)%360;if(_>=0&&x.time-_<.1)return;_=x.time;let O=g;O.fillStyle="#061c24",O.fillRect(0,0,1024,256),O.strokeStyle="#27625f",O.lineWidth=2,O.strokeRect(3,3,1018,250);for(let B of[342,682])O.beginPath(),O.moveTo(B,35),O.lineTo(B,215),O.stroke();O.textAlign="center",O.font='32px "PingFang SC",system-ui',O.fillStyle="#8bb9b6",["\u4E0B\u6F5C\u6DF1\u5EA6","\u822A\u901F","\u822A\u5411"].forEach((B,V)=>O.fillText(B,171+V*341,59)),O.fillStyle="#d8f5de",O.font='64px "PingFang SC",system-ui',[Math.round((x.surface??19)-x.y)+" m",w.toFixed(1)+" m/s",Math.round(N).toString().padStart(3,"0")+"\xB0"].forEach((B,V)=>O.fillText(B,171+V*341,145)),O.font='22px "PingFang SC",system-ui',O.fillStyle="#9cb9ad",["\u79BB\u5F00\u6D77\u9762\u540E\u5411\u4E0B\u8BA1\u91CF","\u677E\u952E\u7F13\u6162\u51CF\u901F","\u4E0E\u6F5C\u6C34\u8231\u540C\u6B65"].forEach((B,V)=>O.fillText(B,171+V*341,205)),m.needsUpdate=!0}function I(){f!==t.aspect&&E();let x=s.autoClear;s.autoClear=!1,s.clearDepth(),s.render(n,i),s.autoClear=x}E();function S(x){n.updateMatrixWorld(!0),i.updateMatrixWorld(!0);let{width:w,height:N}=x.geometry.parameters,O=new C(-w/2,N/2,0).applyMatrix4(x.matrixWorld).project(i),B=new C(w/2,-N/2,0).applyMatrix4(x.matrixWorld).project(i);return{left:(O.x+1)/2,top:(1-O.y)/2,right:(B.x+1)/2,bottom:(1-B.y)/2}}return{scene:n,camera:i,fit:E,getPanel:()=>({canvas:g.canvas,texture:m}),update:R,render:I,snapshot:()=>({geometryCount:p,aspect:f,openWindshield:!0,secondary3DPass:!0,loopieCount:0,needleCount:0,sideDecorations:"none",loopieBounds:[],screenBounds:M?S(M):null})}}var wh={towerX:8,towerRadius:3.18,innerRadius:4.8,spring:11,archDepth:4.4,height:18.1,width:23.6};function Dm(){let s=new me,t=[],e=73641,n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),i=(T,E=!0)=>{let R=new ue({color:T,roughness:.92,metalness:0});return R.userData.castleStone=E,R},r=i("#c1bba0"),o=i("#a7a58d"),a=i("#68766a"),l=i("#d0c6a5"),c=Array.from({length:12},()=>{let T=r.clone();return T.color.multiplyScalar(.85+n()*.24),T}),h=(T,E,R=0,I=0,S=0,x=!0)=>{let w=new $t(T,E);return w.position.set(R,I,S),w.userData.collidable=x,s.add(w),w},u=(T,E,R,I,S,x=r,w=I)=>h(new Te(w,I,S,40,1),x,T,E,R),d=(T,E,R,I,S,x=r,w=I)=>{let N=u(T,E,R,I,S,x,w);return w===I&&t.push({kind:"cylinder",center:[T,E,R],radius:I,half:S/2}),N},f=(T,E,R,I,S,x,w)=>{let N=h(new he(I,S,x),w,T,E,R);return t.push({kind:"box",center:[T,E,R],half:[I/2,S/2,x/2]}),N},m=(T,E,R,I)=>{let S=new C(...T),x=new C(...E),w=x.clone().sub(S),N=h(new Te(R*.66,R,w.length(),5,1),I,...S.clone().add(x).multiplyScalar(.5).toArray(),!1);return N.quaternion.setFromUnitVectors(new C(0,1,0),w.normalize()),N},_=["#9a747a","#a77e8f","#739091","#8f8b63"].map(T=>i(T,!1));function g(T,E,R,I){let S=_[Math.floor(n()*_.length)];for(let x=0;x<4;x++){let w=n()*Math.PI*2,N=I*(.55+n()*.6),O=Math.cos(w)*I*.3,B=Math.sin(w)*I*.3,V=[T+O,E+N,R+B];m([T,E,R],V,.043*I,S);for(let q=0;q<2;q++){let at=w+(q?1.1:-1.1);m([T+O*.5,E+N*.5,R+B*.5],[V[0]+Math.cos(at)*I*.24,V[1]+I*.16,V[2]+Math.sin(at)*I*.24],.026*I,S)}}}function p(T,E,R,I,S){for(let w=0;w<22;w++){let N=w*Math.PI*2/22+(S%2?Math.PI/22:0)+.005,O=Math.PI*2/22-.01,B=R+(n()-.5)*.045;h(new Te(B,B,I-.035,3,1,!0,N,O),c[(w+S*3)%c.length],T,E,0)}}for(let T of[-1,1]){let E=T*wh.towerX;d(E,.4,0,3.85,1.25,o),d(E,1.25,0,3.52,.55,o),d(E,8.45,0,3.08,13.85,o);for(let S=0;S<13;S++)p(E,1.56+(S+.5)*1.05,3.18,1.05,S);u(E,1.65,0,3.36,.25,l),u(E,15.4,0,3.46,.33,o),d(E,16.22,0,3.61,1.3,r),u(E,15.57,0,3.78,.24,l),u(E,16.97,0,3.75,.24,l),u(E,17.13,0,3.42,.2,o);for(let S=0;S<12;S++){let x=S*Math.PI*2/12,w=h(new he(.7,.52,.65),c[S],E+Math.sin(x)*3.2,17.48,Math.cos(x)*3.2);w.rotation.y=x}let R=i("#a3a992"),I=new ue({color:"#21675d",roughness:.32,metalness:.15});for(let S of[-1,1])for(let x of[5.1,9.1]){let w=h(new Ce(.64,.15,8,28),R,E,x,S*3.17),N=h(new yn(.49,28),I,E,x,S*3.19);S<0&&(w.rotation.y=Math.PI,N.rotation.y=Math.PI);let O=h(new he(1.23,.16,.35),o,E,x-.72,S*3.2);O.rotation.y=S<0?Math.PI:0}for(let S of[-1,1])for(let x of[-.48,0,.48]){let w=(S>0?0:Math.PI)+x,N=h(new Ce(.28,.075,7,18),R,E+Math.sin(w)*3.63,16.2,Math.cos(w)*3.63);N.rotation.y=w;let O=h(new yn(.205,18),I,E+Math.sin(w)*3.64,16.2,Math.cos(w)*3.64);O.rotation.y=w}for(let S=0;S<15;S++){let x=S*Math.PI*2/15,w=3.8+n()*1.1,N=h(new Tn(1,1),a,E+Math.sin(x)*w,-.55+n()*.3,Math.cos(x)*w);N.scale.set(.7+n()*1.2,.5+n()*.5,.7+n()*1.2),N.rotation.set(n(),n()*3,n())}for(let S=0;S<17;S++){let x=n()*Math.PI*2,w=3.7+n()*1.6;g(E+Math.sin(x)*w,.12,Math.cos(x)*w,.45+n()*.8)}for(let S=0;S<12;S++){let x=n()*Math.PI*2,w=1.6+n()*1.6;g(E+Math.sin(x)*w,17.28,Math.cos(x)*w,.35+n()*.65)}}let M=(T,E,R=0,I=Math.PI)=>{let S=new Re,x=36;S.moveTo(Math.cos(R)*E,11+Math.sin(R)*E);for(let w=1;w<=x;w++){let N=R+(I-R)*w/x;S.lineTo(Math.cos(N)*E,11+Math.sin(N)*E)}for(let w=x;w>=0;w--){let N=R+(I-R)*w/x;S.lineTo(Math.cos(N)*T,11+Math.sin(N)*T)}return S.closePath(),S};h(new Ye(M(4.8,6.28),{depth:4.35,bevelEnabled:!1,steps:1}),o,0,0,-2.175),t.push({kind:"arch",center:[0,11,0],inner:4.8,outer:6.28,depth:2.175});let v=17;for(let T=0;T<v;T++){let E=T*Math.PI/v+.002,R=(T+1)*Math.PI/v-.002,I=new Ye(M(4.8,6.4,E,R),{depth:4.5,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.035,bevelThickness:.035,curveSegments:3});h(I,c[(T+5)%12],0,0,-2.25)}for(let T of[-1,1]){f(T*5.52,5.9,0,1.44,10.2,4.35,o);for(let E=0;E<10;E++)h(new he(1.41,.985,4.48),c[E*2%12],T*5.52,1.31+E*1.02,0)}f(0,-.3,0,9.55,.5,7.8,o);for(let T of[-1,1])for(let E=0;E<3;E++)f(0,-.5-E*.16,T*(4.2+E*.65),9.5,.28,.7,o);let y=i("#afb7a3");for(let T of[-1,1])for(let E=0;E<32;E++){let R=T*8+(n()-.5)*3.4,I=2+n()*11,S=Math.sqrt(Math.max(0,3.19*3.19-(R-T*8)**2));h(new Tn(.045+n()*.065,0),y,R,I,S,!1)}return s.updateMatrixWorld(!0),{root:s,solids:t,spec:wh}}function Um(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Ht,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Lm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);let m=Lm(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Lm(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ie(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let _=h.getComponent(d,m);a.setComponent(d+u,m,_)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var kn=Object.freeze({height:25.26,baseRadius:5,towerRadius:2.9,towerTopRadius:2.1,towerBottom:1.4,towerTop:18.8,bandRadius:3.2,bandCenter:19.96,eyeCenter:Object.freeze([0,23,0]),eyeOuterRadii:Object.freeze([1.98,2.2]),front:Object.freeze([0,0,1]),radialSegments:40});function Nm(){let s=new me;s.name="mist-lighthouse";let t=[],e=new Map,n=1818847080,i=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296),r=(U,H=!0,L=0)=>{let F=new ue({color:U,roughness:.91,metalness:L});return F.userData.castleStone=H,F},o=r("#878b76"),a=r("#b6b39a"),l=r("#c3b692"),c=r("#707e70"),h=r("#727b61",!1,.38);h.roughness=.67;let u=r("#485e52",!1,.3),d=Array.from({length:10},()=>{let U=a.clone();return U.color.multiplyScalar(.88+i()*.16),U}),f=["#997b85","#a38b81","#758d83","#a39973"].map(U=>r(U,!1)),m=new ge({color:"#55bba6",fog:!0,toneMapped:!1}),_=new ge({color:"#307e71",fog:!0,toneMapped:!1});function g(U,H,L=0,F=0,X=0,Z=!0,lt=""){let dt=new $t(U,H);return dt.position.set(L,F,X),dt.name=lt,dt.userData.collidable=Z,s.add(dt),dt}function p(U){U.updateMatrix();let H=U.geometry.index?U.geometry.toNonIndexed():U.geometry.clone();H.applyMatrix4(U.matrix);let L=`${U.material.uuid}:${U.userData.collidable}`;e.has(L)||e.set(L,{material:U.material,collidable:U.userData.collidable,geometries:[]}),e.get(L).geometries.push(H),U.geometry.dispose(),s.remove(U)}function M(U,H,L){let F=new gi(U.map(([Y,it])=>new rt(Y,it)),40),X=F.attributes.position,Z=F.index.array,lt=[],dt=new C,Mt=new C,D=new C;for(let Y=0;Y<Z.length;Y+=3)dt.fromBufferAttribute(X,Z[Y]),Mt.fromBufferAttribute(X,Z[Y+1]).sub(dt),D.fromBufferAttribute(X,Z[Y+2]).sub(dt),Mt.cross(D).lengthSq()>1e-16&&lt.push(Z[Y],Z[Y+1],Z[Y+2]);return F.setIndex(lt),g(F,H,0,0,0,!0,L)}function v(U,H,L,F,X){let Z=g(new Te(U,U,H,40,1,!1),F,0,L,0,!0,X);return t.push({kind:"cylinder",center:[0,L,0],radius:U,half:H/2}),Z}let y=U=>{let H=Cs.clamp((U-kn.towerBottom)/(kn.towerTop-kn.towerBottom),0,1);return kn.towerRadius+(kn.towerTopRadius-kn.towerRadius)*H};function T(U,H,L,F,X,Z){let lt=[[y(U)-.1,U],[y(U)+X,U],[y(H)+X,H],[y(H)-.1,H]],dt=[],Mt=[],D=2;for(let j=0;j<=D;j++){let st=L+F*j/D;for(let[$,ot]of lt)dt.push($*Math.sin(st),ot,$*Math.cos(st))}for(let j=0;j<D;j++)for(let st=0;st<4;st++){let $=j*4+st,ot=$+4,At=j*4+(st+1)%4,Ot=At+4;Mt.push($,ot,At,Ot,At,ot)}Mt.push(0,1,2,0,2,3);let Y=D*4;Mt.push(Y,Y+2,Y+1,Y,Y+3,Y+2);let it=new Ht;it.setAttribute("position",new vt(dt,3)),it.setIndex(Mt);let nt=it.toNonIndexed();it.dispose(),nt.computeVertexNormals(),nt.setAttribute("uv",new vt(new Float32Array(nt.attributes.position.count*2),2)),p(g(nt,Z))}let E=M([[0,0],[3.65,0],[4.38,.18],[4.56,.52],[4.08,.92],[3.2,1.34],[0,1.34]],c,"closed-weathered-reef"),R=E.geometry.attributes.position;for(let U=0;U<R.count;U++){let H=R.getX(U),L=R.getZ(U),F=Math.atan2(H,L),X=1+.035*Math.sin(F*3+.7)+.022*Math.cos(F*7-.4);R.setXYZ(U,H*X,R.getY(U),L*X)}R.needsUpdate=!0,E.geometry.computeVertexNormals();for(let U=0;U<14;U++){let H=U*Math.PI*2/14+(i()-.5)*.12,L=3.85+i()*.24,F=g(new Tn(1,1),U%3?c:o,Math.sin(H)*L,.68,Math.cos(H)*L);F.scale.set(.54+i()*.32,.38+i()*.26,.56+i()*.3),F.rotation.y=i()*Math.PI*2,p(F)}v(3.24,.64,1.02,o,"closed-lower-footing"),v(3.06,.24,1.46,l,"closed-footing-rim");let I=[[0,1.4],[2.9,1.4],[y(1.5),1.5],[y(18.7),18.7],[2.1,18.8],[0,18.8]];M(I,o,"closed-tapered-tower");let S=17.4/18,x=16,w=Math.PI*2/x;for(let U=0;U<18;U++)for(let H=0;H<x;H++){let L=1.4+U*S+.018,F=1.4+(U+1)*S-.018,X=H*w+(U%2?w/2:0)+.006;T(L,F,X,w-.012,.045+i()*.035,d[(H+U*3)%d.length])}for(let U of[2.05,10.17,18.6]){let H=y(U-.08),L=y(U+.08);M([[0,U-.08],[H+.095,U-.08],[L+.095,U+.08],[0,U+.08]],a,"closed-string-course")}M([[0,18.65],[y(18.65),18.65],[2.17,18.82],[3.05,19.1],[3.26,19.19],[3.26,19.42],[0,19.42]],l,"closed-flared-capital");let N=12,O=3.16,B=2.75;for(let U=0;U<N;U++){let H=U*Math.PI*2/N,L=O*(Math.PI*2/N-.005),F=.54,X=new Re;X.moveTo(-L/2,-F);for(let D=1;D<=4;D++)X.lineTo(-L/2+L*D/4,-F);X.lineTo(L/2,F);for(let D=1;D<=4;D++)X.lineTo(L/2-L*D/4,F);X.closePath();let Z=new vn;Z.absellipse(0,0,.237,.237,0,Math.PI*2,!0),X.holes.push(Z);let lt=new Ye(X,{depth:O-B,steps:1,bevelEnabled:!1,curveSegments:10}),dt=lt.attributes.position;for(let D=0;D<dt.count;D++){let Y=H+dt.getX(D)/O,it=B+dt.getZ(D);dt.setXYZ(D,it*Math.sin(Y),dt.getY(D)+kn.bandCenter,it*Math.cos(Y))}dt.needsUpdate=!0,lt.computeVertexNormals(),p(g(lt,d[(U+2)%d.length]));let Mt=g(new Ce(.269,.061,6,16),l,Math.sin(H)*3.17,kn.bandCenter,Math.cos(H)*3.17);Mt.rotation.y=H,p(Mt)}v(3.28,.25,20.625,l,"closed-capital-lid"),v(1.5,.3,20.86,u,"closed-eye-plinth");function V(U,H,L,F,X=!0){let Z=new C(...U),lt=new C(...H),dt=lt.clone().sub(Z),Mt=g(new Te(L*.7,L,dt.length(),X?8:5,1,!1),F,...Z.clone().add(lt).multiplyScalar(.5).toArray(),X);Mt.quaternion.setFromUnitVectors(new C(0,1,0),dt.normalize()),p(Mt)}for(let U of[-1,1])V([U*1.34,20.77,-.1],[U*1.71,21.91,-.12],.18,h);let q=new Re;q.absellipse(0,0,1.98,2.2,0,Math.PI*2,!1);let at=new vn;at.absellipse(0,0,1.62,1.84,0,Math.PI*2,!0),q.holes.push(at),g(new Ye(q,{depth:.6,bevelEnabled:!0,bevelSegments:2,bevelSize:.06,bevelThickness:.06,steps:1,curveSegments:24}),l,0,23,-.3,!0,"closed-mineral-eye-frame"),g(new we(1,28,14),u,0,23,-.1,!0,"closed-bronze-eye-back").scale.set(1.84,2.07,.36),g(new we(1,40,18),m,0,23,.36,!0,"closed-teal-eye").scale.set(1.62,1.84,.34),g(new Ce(1,.044,8,40),h,0,23,.43,!0,"bronze-aperture-lip").scale.set(1.63,1.85,1);for(let U=0;U<12;U++){let H=U*Math.PI*2/12,L=Math.sin(H)*1.83,F=23+Math.cos(H)*2.06;for(let X of[-.37,.37]){let Z=g(new we(.058,8,4),h,L,F,X);Z.scale.z=.62,p(Z)}}let wt=g(new Ce(.64,.085,8,24),h,0,23,-.48);wt.scale.y=1.12,g(new we(1,20,10),_,0,23,-.52,!0,"closed-rear-service-eye").scale.set(.57,.64,.095);for(let U=0;U<6;U++){let H=U*Math.PI/3;V([Math.sin(H)*.7,23+Math.cos(H)*.79,-.37],[Math.sin(H)*1.65,23+Math.cos(H)*1.84,-.24],.045,h)}function qt(U,H,L,F){let X=f[Math.floor(i()*f.length)];for(let Z=0;Z<3;Z++){let lt=i()*Math.PI*2,dt=F*(.64+i()*.45),Mt=[U+Math.sin(lt)*F*.23,H+dt,L+Math.cos(lt)*F*.23];V([U,H,L],Mt,F*.034,X,!1);for(let D of[-1,1]){let Y=lt+D*.95;V([U+(Mt[0]-U)*.52,H+dt*.52,L+(Mt[2]-L)*.52],[Mt[0]+Math.sin(Y)*F*.23,Mt[1]+F*.14,Mt[2]+Math.cos(Y)*F*.23],F*.02,X,!1)}}}for(let U=0;U<26;U++){let H=i()*Math.PI*2,L=3.43+i()*.86;qt(Math.sin(H)*L,.64+i()*.15,Math.cos(H)*L,.42+i()*.85)}for(let U=0;U<6;U++){let H=U*Math.PI*2/6+.2;qt(Math.sin(H)*2.55,20.75,Math.cos(H)*2.55,.32+i()*.3)}for(let{material:U,collidable:H,geometries:L}of e.values()){let F=Um(L,!1);if(!F)throw new Error("Incompatible lighthouse detail geometry");g(F,U,0,0,0,H,H?"closed-stone-metal-detail":"noncolliding-coral-detail");for(let X of L)X.dispose()}return s.updateMatrixWorld(!0),{root:s,solids:t,spec:kn}}var Yd=Object.freeze({length:21.42,halfWidth:3.2,hullHeight:7.85,mastHeight:9.25,plankThickness:.26,bowAxis:"+x",origin:"keel-bottom",sideGap:Object.freeze({side:"+z",width:4.5,x:Object.freeze([-2.25,2.25]),y:Object.freeze([2.5,6.2])})});function Fm(){let s=new me;s.name="abyssal-garden-reef-wreck";let t=[],e=1475095065,n=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),i=U=>{let H=new ue({color:U,roughness:.94,metalness:0});return H.userData.landmarkWood=!0,H},r=i("#77604a"),o=i("#69503b"),a=i("#8b7152"),l=Array.from({length:10},()=>{let U=r.clone();return U.color.multiplyScalar(.85+n()*.25),U}),c=new ue({color:"#a48b60",roughness:.8,metalness:.48}),h=new ue({color:"#697970",roughness:.94});h.userData.castleStone=!0;let u=["#927d85","#ae8e87","#82958d"].map(U=>new ue({color:U,roughness:.94}));function d(U,H,L,F=[0,0,0],X=!0){let Z=new $t(U,H);return Z.name=L,Z.position.set(...F),Z.userData.collidable=X,s.add(Z),Z}function f(U,H,L,F,X,Z,lt,dt,Mt=!0){let D=d(new he(F,X,Z),lt,dt,[U,H,L]);return Mt&&t.push({kind:"box",center:[U,H,L],half:[F/2,X/2,Z/2]}),D}function m(U,H,L,F,X,Z,lt=!0){let dt=new C(...U),Mt=new C(...H),D=Mt.clone().sub(dt),Y=d(new he(D.length(),L,F),X,Z,dt.clone().add(Mt).multiplyScalar(.5).toArray(),lt);return Y.quaternion.setFromUnitVectors(new C(1,0,0),D.normalize()),Y}let _=[[-10.4,.6,1.2,6.1],[-9.2,1.75,.68,6],[-7.8,2.65,.3,6.15],[-5.8,3.08,.17,6.3],[-3.2,3.2,.15,6.35],[0,3.2,.15,6.4],[3.2,3,.22,6.6],[5.6,2.6,.45,6.9],[7.6,1.9,.93,7.2],[9,.95,1.65,7.55],[10,.42,2.75,7.7]],g=1.72,p=1-Math.cos(g);function M(U){let H=Math.max(_[0][0],Math.min(_[_.length-1][0],U)),L=0;for(;L<_.length-2&&H>_[L+1][0];)L++;let F=_[L],X=_[L+1],Z=(H-F[0])/(X[0]-F[0]);return[F[1]+(X[1]-F[1])*Z,F[2]+(X[2]-F[2])*Z,F[3]+(X[3]-F[3])*Z]}function v(U,H,L,F=0){let[X,Z,lt]=M(U),dt=(lt-Z)/p,Mt=-X*Math.cos(H),D=dt*Math.sin(H),Y=Math.hypot(Mt,D);return[U,Z+dt*(1-Math.cos(H))-F*Mt/Y,L*(X*Math.sin(H)-F*D/Y)]}function y(U,H){let[L,F,X]=M(U),Z=Math.max(-1,Math.min(1,1-(H-F)*p/(X-F)));return L*Math.sqrt(Math.max(0,1-Z*Z))}function T(U,H,L){let F=new Ht;F.setAttribute("position",new vt(U,3)),L&&F.setAttribute("uv",new vt(L,2)),F.setIndex(H);let X=F.toNonIndexed();return F.dispose(),X.computeVertexNormals(),X}function E(U){let H=U.getAttribute("position").count,L=[];for(let F=0;F<H;F+=3)L.push(F,F+2,F+1);U.setIndex(L)}function R(U,H,L,F,X,Z=.26,lt=0){let dt=Math.max(1,Math.ceil((H-U)/.65)),Mt=Math.max(1,Math.ceil((F-L)/.09)),D=Mt+1,Y=(dt+1)*D,it=[],nt=[],j=[];for(let $=0;$<2;$++)for(let ot=0;ot<=dt;ot++)for(let At=0;At<=Mt;At++){let Ot=U+(H-U)*ot/dt,P=L+(F-L)*At/Mt;it.push(...v(Ot,P,X,lt+$*Z)),nt.push(Ot*.3,P*2)}let st=($,ot,At,Ot)=>j.push($,ot,At,$,At,Ot);for(let $=0;$<dt;$++)for(let ot=0;ot<Mt;ot++){let At=$*D+ot,Ot=At+D,P=Ot+1,b=At+1;st(At,Ot,P,b),st(At+Y,b+Y,P+Y,Ot+Y)}for(let $=0;$<Mt;$++){let ot=$,At=dt*D+$;st(ot,ot+1,ot+1+Y,ot+Y),st(At,At+Y,At+1+Y,At+1)}for(let $=0;$<dt;$++){let ot=$*D,At=ot+D;st(ot,ot+Y,At+Y,At),st(ot+Mt,At+Mt,At+Mt+Y,ot+Mt+Y)}if(X<0)for(let $=0;$<j.length;$+=3){let ot=j[$+1];j[$+1]=j[$+2],j[$+2]=ot}return T(it,j,nt)}function I(U,H,L,F=0){let X=new Ye(U,{depth:L,steps:1,bevelEnabled:!1,curveSegments:32}),Z=X.getAttribute("position");for(let lt=0;lt<Z.count;lt++){let dt=Z.getX(lt),Mt=Z.getY(lt),D=Z.getZ(lt);Z.setZ(lt,H*(y(dt,Mt)-F-L+D))}return H<0&&E(X),X.computeVertexNormals(),X}function S(U,H,L,F){let X=new Re,Z=[U,..._.map(st=>st[0]).filter(st=>st>U&&st<H),H];for(let st=0;st<Z.length;st++){let $=Z[st],ot=v($,1.08,L)[1];st?X.lineTo($,ot):X.moveTo($,ot)}for(let st=Z.length-1;st>=0;st--){let $=Z[st];X.lineTo($,v($,1.65,L)[1])}X.closePath();let lt=(U+H)/2,dt=v(lt,1.38,L)[1],Mt=.43,D=new vn;D.absarc(lt,dt,Mt,0,Math.PI*2,!0),X.holes.push(D),d(I(X,L,.26),l[F%10],`port-planking-${L}-${F}`);let Y=new Re;Y.absarc(lt,dt,.49,0,Math.PI*2,!1);let it=new vn;it.absarc(lt,dt,Mt,0,Math.PI*2,!0),Y.holes.push(it),d(I(Y,L,.34,-.055),c,`port-collar-${L}-${F}`);let nt=new Ce(.512,.072,8,32),j=nt.getAttribute("position");for(let st=0;st<j.count;st++){let $=lt+j.getX(st),ot=dt+j.getY(st),At=j.getZ(st);j.setXYZ(st,$,ot,L*(y($,ot)+At+.035))}if(L<0){let st=nt.index;for(let $=0;$<st.count;$+=3){let ot=st.getX($+1);st.setX($+1,st.getX($+2)),st.setX($+2,ot)}}nt.computeVertexNormals(),d(nt,c,`port-rim-${L}-${F}`)}let x=[-10.4,-9.2,-8,-6,-5.5,-3.5,-2.65,2.65,3.3,5.5,7.5,8.7,9.4,10],w=[0,.18,.36,.54,.72,.9,1.08,1.27,1.46,1.65,g],N=new Set([2,4,8,9]);for(let U of[-1,1])for(let H=0;H<x.length-1;H++){let L=U===1&&H===6,F=N.has(H),X=H<2||H>10||F?g:1.59+n()*.12;for(let Z=0;Z<w.length-1;Z++){if(L&&Z>=4||F&&Z>=6&&Z<=8)continue;let lt=x[H],dt=x[H+1];U===1&&Z>=4&&(H===5&&(dt-=n()*.34),H===7&&(lt+=n()*.34));let Mt=w[Z],D=Z===9?Math.max(1.665,X):w[Z+1];d(R(lt,dt,Mt,D,U),l[(H*3+Z)%10],`hull-strake-${U}-${H}-${Z}`)}if(F&&S(x[H],x[H+1],U,H),!L){let Z=Math.max(1.665,X);d(R(x[H],x[H+1],Z-.025,Z+.008,U,.095,-.045),c,`broken-copper-sheer-${U}-${H}`)}}for(let U of[-10.4,10]){let H=new Re;H.moveTo(0,v(U,0,1)[1]);for(let F=1;F<=24;F++){let X=v(U,g*F/24,1);H.lineTo(X[2],X[1])}for(let F=24;F>=0;F--){let X=v(U,g*F/24,-1);H.lineTo(X[2],X[1])}H.closePath();let L=new Ye(H,{depth:.26,bevelEnabled:!1,steps:1});L.rotateY(Math.PI/2),d(L,a,U<0?"stern-transom":"bow-transom",[U-.13,0,0])}f(0,.16,0,6.4,.32,.36,o,"grounded-keel");for(let U=0;U<_.length-1;U++){let H=_[U],L=_[U+1];m([H[0],H[2]+.12,0],[L[0],L[2]+.12,0],.3,.34,o,`curved-keel-${U}`)}let O=[[9.72,2.75,0],[10.03,4.35,0],[10.33,6.02,0],[10.68,7.63,0]];for(let U=0;U<O.length-1;U++){m(O[U],O[U+1],.42,.64,a,`upturned-bow-stem-${U}`);let H=O[U],L=O[U+1];for(let F of[-1,1])m([H[0]+.055,H[1],F*.33],[L[0]+.055,L[1],F*.33],.075,.055,c,`stem-copper-${U}-${F}`)}for(let U of[-8.6,-6.25,-3.15,3.05,5.9,8.45])for(let H of[-1,1])d(R(U-.13,U+.13,0,1.67,H,.19,.285),o,`interior-rib-${H}-${U}`);for(let U=0;U<8;U++){let H=-5.85+U*1.65,L=1.61,F=Math.min(y(H-L/2,1.58),y(H+L/2,1.58))-.32;for(let X=-3;X<=3;X++){let Z=X*.42;Math.abs(Z)+.19>F||(U===3||U===4)&&X===-3||f(H,1.68,Z,L,.2,.38,l[(U+X+10)%10],`sole-plank-${U}-${X}`)}}for(let[U,H,L]of[[-9.1,-6.65,5.25],[6.35,8.35,5.4]]){for(let F=U+.21;F<H;F+=.43){let X=Math.min(y(F-.2,L),y(F+.2,L))-.34;f(F,L,0,.4,.18,X*2,r,`raised-deck-${F.toFixed(2)}`)}for(let F of[-.75,.75])m([U+.2,L-.25,F],[H-.15,L-.25,F],.24,.22,o,`deck-bearer-${U}-${F}`)}let B=-6.8,V=5.13,q=6.86,at=.24;d(new Te(at,at,q,40,1),o,"short-broken-mast-base",[B,V,-.18]),t.push({kind:"cylinder",center:[B,V,-.18],radius:at,half:q/2});let J=[],ut=[],gt=40,wt=8.54;for(let U=0;U<2;U++)for(let H=0;H<gt;H++){let L=H*Math.PI*2/gt,F=U?.18+n()*.035:at,X=U?8.88+n()*.37:wt;J.push(B+Math.cos(L)*F,X,-.18+Math.sin(L)*F)}J.push(B,wt,-.18,B,8.89,-.18);for(let U=0;U<gt;U++){let H=(U+1)%gt;ut.push(U,gt+U,gt+H,U,gt+H,H,2*gt,U,H,2*gt+1,gt+H,gt+U)}d(T(J,ut),a,"capped-splintered-mast-crown"),m([-6.8,7.45,-1.25],[-6.8,7.25,1.12],.18,.18,r,"broken-yard-stub");for(let U of[-1,1])m([-3.16,5.25,U*2.74],[-3,6.23,U*2.9],.14,.14,a,`torn-sheer-splinter-${U}`),m([3.1,5.75,U*2.7],[3,6.72,U*2.78],.13,.15,a,`forward-sheer-splinter-${U}`);m([-1.5,2,-1.4],[1.3,2.33,-2.15],.12,.32,r,"loose-interior-board");function Pt(U,H,L,F){let X=new C(...U),Z=new C(...H),lt=Z.clone().sub(X);d(new Te(L*.55,L,lt.length(),6,1),F,"small-coral-branch",X.clone().add(Z).multiplyScalar(.5).toArray(),!1).quaternion.setFromUnitVectors(new C(0,1,0),lt.normalize())}function qt(U,H,L,F){let X=u[Math.floor(n()*u.length)];for(let Z=0;Z<3;Z++){let lt=n()*Math.PI*2,dt=F*(.65+n()*.3),Mt=[U+Math.cos(lt)*F*.2,H+dt,L+Math.sin(lt)*F*.2];Pt([U,H,L],Mt,.035,X),Pt([U,H+dt*.5,L],[Mt[0]+F*.22,Mt[1]+F*.12,Mt[2]],.021,X)}}for(let[U,H,L,F,X]of[[-8.6,2.12,1.1,.44,.8],[-7.8,-2.35,.85,.36,.65],[7.3,1.7,.75,.48,.8],[6.7,-2,1,.36,.7]]){let Z=d(new Tn(1,1),h,"low-keel-reef",[U,F,H]);Z.scale.set(L,F,X),Z.rotation.y=n()*Math.PI,qt(U,F*1.8,H,.4+n()*.2)}for(let[U,H]of[[-8.3,1],[-4.1,-1],[5.9,1],[8.8,-1]]){let L=v(U,1.69,H,-.04);qt(L[0],L[1],L[2],.36)}return s.updateMatrixWorld(!0),{root:s,solids:t,spec:Yd}}var Bm=new Zt,Ah=new C,Rh=new C;function Rn(s,{filter:t=()=>!0,relative:e=s}={}){s.updateMatrixWorld(!0),e.updateMatrixWorld(!0);let n=e.matrixWorld.clone().invert(),i=[];return s.traverse(r=>{if(!r.isMesh||!r.visible||!t(r))return;let o=n.clone().multiply(r.matrixWorld);Bm.getNormalMatrix(o);let a=r.geometry,l=a.attributes.position,c=a.attributes.normal,h=a.attributes.uv,u=a.index;for(let d=0;d<(u?u.count:l.count);d++){let f=u?u.getX(d):d,m=a.groups.find(M=>d>=M.start&&d<M.start+M.count),_=Array.isArray(r.material)?r.material[m?.materialIndex||0]:r.material;Ah.fromBufferAttribute(l,f).applyMatrix4(o),Rh.fromBufferAttribute(c,f).applyMatrix3(Bm).normalize();let g=_.map?.image,p=_.userData.landmarkWood?4:_.userData.castleStone?3:_.map?g?.width===1024&&g?.height===256?2:1:0;i.push(Ah.x,Ah.y,Ah.z,Rh.x,Rh.y,Rh.z,h?.getX(f)||0,h?.getY(f)||0,_.color.r,_.color.g,_.color.b,_.transparent?_.opacity:1,_.metalness??0,_.roughness??.8,_.isMeshBasicMaterial?1:0,p)}}),new Float32Array(i)}function dM(s){let t=new ve(s);t.colorSpace=Le,t.needsUpdate=!0;let e=new di,n=Im(e,new C,t,()=>-5,u=>u).pod,i=n.userData.propeller,r=(u,d)=>{for(let f=u;f;f=f.parent)if(f===d)return!0;return!1},o=Rn(n,{filter:u=>!u.material.transparent&&!r(u,i)}),a=Rn(n,{filter:u=>u.material.transparent&&u.material.opacity>0}),l=Rn(i,{relative:i}),c={aspect:1.6},h=Pm({},c,t);return{body:o,glass:a,prop:l,fit(u){return c.aspect=u,h.fit(),{geometry:Rn(h.scene,{relative:h.scene}),projection:h.camera.projectionMatrix.elements,panel:h.getPanel().canvas}},update:u=>h.update(u),panel:()=>h.getPanel().canvas,snapshot:h.snapshot}}function fM(){let s=new me,t=new ue({color:"#f4ffe3",roughness:.16,metalness:.34});return s.add(new $t(new we(.22,20,14),t)),Rn(s)}function pM(){let s=new Ht,t=[],e=10,n=24,i=(o,a)=>{let l=-Math.PI*.49+a*Math.PI*.98,c=.05+o*.73,h=1+.065*Math.cos(a*Math.PI*24);return[Math.sin(l)*c*h,Math.sin(o*Math.PI)*.22+Math.cos(a*Math.PI*24)*.025*o,Math.cos(l)*c]};for(let o=0;o<e;o++)for(let a=0;a<n;a++){let l=i(o/e,a/n),c=i((o+1)/e,a/n),h=i((o+1)/e,(a+1)/n),u=i(o/e,(a+1)/n);t.push(...l,...c,...u,...u,...c,...h)}s.setAttribute("position",new vt(t,3)),s.computeVertexNormals();let r=new me;return r.add(new $t(s,new ue({color:"#f3bf86",roughness:.32,metalness:.22,side:He}))),Rn(r)}function mM(s){let t=new me,e=new ue({color:s?"#b7efd0":"#cba774",metalness:.65,roughness:.33}),n=new $t(new Ce(5,.24,14,96),e);t.add(n);let i=new $t(new Ce(4.72,.045,8,96),new ge({color:s?"#67ffd8":"#ffb06a"}));t.add(i);for(let r of[-1,1]){let o=new $t(new he(.42,6.3,.65),e);o.position.set(r*4.7,-3.2,0),t.add(o)}if(!s)for(let r of[-.75,.75]){let o=new $t(new he(.13,9.1,.13),e);o.rotation.z=r,t.add(o)}return Rn(t)}function gM(){let s=Dm(),t=Rn(s.root),e=Rn(s.root,{filter:i=>i.userData.collidable!==!1}),n=new Ee().setFromObject(s.root);return{opaque:t,collision:e,solids:s.solids,spec:s.spec,bounds:{min:n.min.toArray(),max:n.max.toArray()},triangles:t.length/48,collisionTriangles:e.length/48}}function Om(s){let t=s(),e=Rn(t.root),n=Rn(t.root,{filter:r=>r.userData.collidable!==!1}),i=new Ee().setFromObject(t.root);return{opaque:e,collision:n,solids:t.solids,spec:t.spec,bounds:{min:i.min.toArray(),max:i.max.toArray()},triangles:e.length/48,collisionTriangles:n.length/48}}function _M(){let s=new me,t=new ue({color:"#c3b08a",roughness:.35,metalness:.55});for(let e=-4.5;e<=4.5;e+=.6){let n=11+Math.sqrt(23.04-e**2),i=1.4,r=new $t(new he(.15,n-i,.18),t);r.position.set(e,(n+i)/2,0),s.add(r)}for(let e of[4,8,11]){let n=new $t(new he(9.4,.14,.18),t);n.position.set(0,e,0),s.add(n)}return Rn(s)}window.V3Geometry={initial:dM,pearl:fM,shell:pM,gate:mM,barrier:_M,castle:gM,lighthouse:()=>Om(Nm),wreck:()=>Om(Fm),castleSpec:wh,lighthouseSpec:kn,wreckSpec:Yd,THREE:Xi};})();

(async()=>{const Jt=matchMedia("(pointer:coarse)").matches,wi=navigator.deviceMemory,mn=(e,t)=>{try{localStorage[e]=t}catch{}};let En=[],Ce,zi;try{En=(localStorage.customsCastleV2||"").split(","),zi=localStorage.customsCastleV2Load}catch{}Ce=En[0]?+En[0]:Jt?wi>7?1:2:wi<=4?2:0,zi&&Ce<2&&(En=[++Ce],mn("customsCastleV2",Ce));const as=1<<Ce,go=Ce?2048:4096,Tt=Ce>1?1:4,cs=Ce>1?256:512,Si=Ce>1?12:34,{sin:Se,cos:ke,sqrt:Lt,min:Ue,max:le,abs:Me,floor:ve,PI:It,pow:Ge,atan2:ls,hypot:Z,exp:hn,round:We}=Math,Te=It*2;let An=20261110;const A=()=>{An=An+1831565813|0;let e=Math.imul(An^An>>>15,1|An);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},M=(e,t)=>e+(t-e)*A(),He=e=>{An=20261110+Math.imul(e,7919)|0},Ae=(e,t,n)=>e<t?t:e>n?n:e,fe=(e,t,n)=>e+(t-e)*n,zt=(e,t,n)=>(n=Ae((n-e)/(t-e),0,1),n*n*(3-2*n)),en=(e,t,n)=>{let o=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,1274126177)|0;return o=Math.imul(o^o>>>13,1274126177),((o^o>>>16)>>>0)/4294967296},qa=(e,t,n)=>{const o=ve(e),s=ve(t),c=ve(n);let i=e-o,r=t-s,f=n-c;i=i*i*(3-2*i),r=r*r*(3-2*r),f=f*f*(3-2*f);const p=fe(fe(en(o,s,c),en(o+1,s,c),i),fe(en(o,s+1,c),en(o+1,s+1,c),i),r),d=fe(fe(en(o,s,c+1),en(o+1,s,c+1),i),fe(en(o,s+1,c+1),en(o+1,s+1,c+1),i),r);return fe(p,d,f)},tn=(e,t,n,o=4)=>{let s=.5,c=0;for(let i=0;i<o;i++)c+=s*qa(e,t,n),e=e*2.03+17.1,t=t*2.03+31.7,n=n*2.03+5.3,s*=.5;return c/(1-2*s)},_t=(e,t,n,o)=>{const s=Z(e,t,n)||1,c=Se(o/2)/s;return[e*c,t*c,n*c,ke(o/2)]},Rn=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],Pn=()=>{const e=[M(-1,1),M(-1,1),M(-1,1),M(-1,1)],t=Z(...e)||1;return e.map(n=>n/t)},fs=(e,t,n)=>{if(t<-.9999)return[1,0,0,0];const o=[n,0,-e,1+t],s=Z(...o);return o.map(c=>c/s)},he=512,we=80,St=512,qe=.75,Ct=-192,Ot=-56,kt=-192,Ee=16,nn=24,us=7;function ki(e,t,n,o){let s=new Float32Array(1048576),c=0,i=new Uint32Array(1<<21),r=0;const f=t*n;let p=new Int32Array(f),d=new Int32Array(f);for(let g=0;g<o-1;g++){for(let S=0;S<n-1;S++){let z=t*(S+n*g);for(let N=0;N<t-1;N++,z++){const B=e[z],l=e[z+1],P=e[z+t],m=e[z+t+1],V=e[z+f],I=e[z+f+1],W=e[z+f+t],K=e[z+f+t+1],T=B>0|(l>0)<<1|(P>0)<<2|(m>0)<<3|(V>0)<<4|(I>0)<<5|(W>0)<<6|(K>0)<<7;if(T===0||T===255)continue;let C=0,Y=0,j=0,ie=0,oe;if(B>0!=l>0&&(oe=B/(B-l),C+=oe,ie++),P>0!=m>0&&(oe=P/(P-m),C+=oe,Y+=1,ie++),V>0!=I>0&&(oe=V/(V-I),C+=oe,j+=1,ie++),W>0!=K>0&&(oe=W/(W-K),C+=oe,Y+=1,j+=1,ie++),B>0!=P>0&&(oe=B/(B-P),Y+=oe,ie++),l>0!=m>0&&(oe=l/(l-m),Y+=oe,C+=1,ie++),V>0!=W>0&&(oe=V/(V-W),Y+=oe,j+=1,ie++),I>0!=K>0&&(oe=I/(I-K),Y+=oe,C+=1,j+=1,ie++),B>0!=V>0&&(oe=B/(B-V),j+=oe,ie++),l>0!=I>0&&(oe=l/(l-I),j+=oe,C+=1,ie++),P>0!=W>0&&(oe=P/(P-W),j+=oe,Y+=1,ie++),m>0!=K>0&&(oe=m/(m-K),j+=oe,C+=1,Y+=1,ie++),c*3+3>s.length){const xe=new Float32Array(s.length*2);xe.set(s),s=xe}const ge=c++;s[ge*3]=N+C/ie,s[ge*3+1]=S+Y/ie,s[ge*3+2]=g+j/ie;const de=N+t*S;if(p[de]=ge,r+18>i.length){const xe=new Uint32Array(i.length*2);xe.set(i),i=xe}const Q=B>0;let U,$,X,ae;l>0!==Q&&S>0&&g>0&&(U=ge,$=p[de-t],X=d[de-t],ae=d[de],Q?(i[r++]=U,i[r++]=$,i[r++]=X,i[r++]=U,i[r++]=X,i[r++]=ae):(i[r++]=U,i[r++]=X,i[r++]=$,i[r++]=U,i[r++]=ae,i[r++]=X)),P>0!==Q&&N>0&&g>0&&(U=ge,$=d[de],X=d[de-1],ae=p[de-1],Q?(i[r++]=U,i[r++]=$,i[r++]=X,i[r++]=U,i[r++]=X,i[r++]=ae):(i[r++]=U,i[r++]=X,i[r++]=$,i[r++]=U,i[r++]=ae,i[r++]=X)),V>0!==Q&&N>0&&S>0&&(U=ge,$=p[de-1],X=p[de-1-t],ae=p[de-t],Q?(i[r++]=U,i[r++]=$,i[r++]=X,i[r++]=U,i[r++]=X,i[r++]=ae):(i[r++]=U,i[r++]=X,i[r++]=$,i[r++]=U,i[r++]=ae,i[r++]=X))}}const b=p;p=d,d=b}return{pos:s.subarray(0,c*3),idx:i.subarray(0,r),nv:c,ni:r}}const Mi=(e,t,n,o)=>(s,c,i)=>{s=Ae(s,0,t-1.001),c=Ae(c,0,n-1.001),i=Ae(i,0,o-1.001);const r=s|0,f=c|0,p=i|0,d=s-r,g=c-f,b=i-p,S=r+t*(f+n*p),z=t*n,N=fe(fe(e[S],e[S+1],d),fe(e[S+t],e[S+t+1],d),g),B=fe(fe(e[S+z],e[S+z+1],d),fe(e[S+z+t],e[S+z+t+1],d),g);return fe(N,B,b)};class gn{constructor(){this.p=[],this.i=[],this.aux=[]}v(t,n,o,s=1){return this.p.push(t,n,o),this.aux.push(s),this.p.length/3-1}tri(t,n,o){this.i.push(t,n,o)}quad(t,n,o,s){this.i.push(t,n,o,t,o,s)}sweep(t,n,o,s,c=!0){const i=[];for(let r=0;r<t.length;r++){const f=t[r],p=t[le(r-1,0)],d=t[Ue(r+1,t.length-1)];let g=d[0]-p[0],b=d[1]-p[1],S=d[2]-p[2];const z=Z(g,b,S)||1;g/=z,b/=z,S/=z;const N=s?s(f,r):[0,1,0];let B=N[1]*S-N[2]*b,l=N[2]*g-N[0]*S,P=N[0]*b-N[1]*g;const m=Z(B,l,P)||1;B/=m,l/=m,P/=m;const V=b*P-S*l,I=S*B-g*P,W=g*l-b*B,K=typeof n=="function"?n(r):n,T=typeof o=="function"?o(r):o,C=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([j,ie])=>[f[0]+B*j*K/2+V*ie*T/2,f[1]+l*j*K/2+I*ie*T/2,f[2]+P*j*K/2+W*ie*T/2]),Y=[];for(let j=0;j<4;j++)Y.push(this.v(...C[j]),this.v(...C[(j+1)%4]));if(i.push(Y),c&&(r===0||r===t.length-1)){const j=C.map(ie=>this.v(...ie));r===0?this.quad(j[0],j[1],j[2],j[3]):this.quad(j[3],j[2],j[1],j[0])}}for(let r=0;r<i.length-1;r++)for(let f=0;f<4;f++){const p=i[r][f*2],d=i[r][f*2+1],g=i[r+1][f*2+1],b=i[r+1][f*2];this.quad(p,b,g,d)}}tube(t,n,o=6,s=!0,c=null){const i=[];let r=.31,f=.9,p=.3;for(let d=0;d<t.length;d++){const g=t[d],b=t[le(d-1,0)],S=t[Ue(d+1,t.length-1)];let z=S[0]-b[0],N=S[1]-b[1],B=S[2]-b[2];const l=Z(z,N,B)||1;z/=l,N/=l,B/=l;let P=f*B-p*N,m=p*z-r*B,V=r*N-f*z;const I=Z(P,m,V)||1;P/=I,m/=I,V/=I,r=N*V-B*m,f=B*P-z*V,p=z*m-N*P;const W=typeof n=="function"?n(d):n,K=[];for(let T=0;T<o;T++){const C=T/o*Te;K.push(this.v(g[0]+(P*ke(C)+r*Se(C))*W,g[1]+(m*ke(C)+f*Se(C))*W,g[2]+(V*ke(C)+p*Se(C))*W,c?c(d):Ue(1,.35+.65*d/(t.length-1))))}i.push(K)}for(let d=0;d<i.length-1;d++)for(let g=0;g<o;g++){const b=(g+1)%o;this.quad(i[d][g],i[d][b],i[d+1][b],i[d+1][g])}if(s){const d=t[t.length-1],g=this.v(d[0],d[1],d[2],c?c(t.length-1):1),b=i[i.length-1];for(let S=0;S<o;S++)this.tri(b[S],b[(S+1)%o],g)}}build(t){const n=this.p.length/3,o=this.p,s=this.i,c=new Float32Array(n*3);for(let p=0;p<s.length;p+=3){const d=s[p]*3,g=s[p+1]*3,b=s[p+2]*3,S=o[g]-o[d],z=o[g+1]-o[d+1],N=o[g+2]-o[d+2],B=o[b]-o[d],l=o[b+1]-o[d+1],P=o[b+2]-o[d+2],m=z*P-N*l,V=N*B-S*P,I=S*l-z*B;for(const W of[d,g,b])c[W]+=m,c[W+1]+=V,c[W+2]+=I}const i=new ArrayBuffer(n*16),r=new Float32Array(i),f=new Int8Array(i);for(let p=0;p<n;p++){let d=c[p*3],g=c[p*3+1],b=c[p*3+2];if(t){const z=t(o[p*3],o[p*3+1],o[p*3+2],d,g,b);d=z[0],g=z[1],b=z[2]}const S=Z(d,g,b)||1;r[p*4]=o[p*3],r[p*4+1]=o[p*3+1],r[p*4+2]=o[p*3+2],f[p*16+12]=We(d/S*127),f[p*16+13]=We(g/S*127),f[p*16+14]=We(b/S*127),f[p*16+15]=We(Ae(this.aux[p],-1,1)*127)}return{vb:i,ib:new Uint32Array(s),nv:n}}}function Fa(e,t){const n=new gn,o=(1+Lt(5))/2;let s=[[-1,o,0],[1,o,0],[-1,-o,0],[1,-o,0],[0,-1,o],[0,1,o],[0,-1,-o],[0,1,-o],[o,0,-1],[o,0,1],[-o,0,-1],[-o,0,1]].map(i=>{const r=Z(...i);return i.map(f=>f/r)}),c=[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]];for(let i=0;i<e;i++){const r=new Map,f=[],p=(d,g)=>{const b=d<g?d*65536+g:g*65536+d;let S=r.get(b);if(S===void 0){const z=[0,1,2].map(B=>s[d][B]+s[g][B]),N=Z(...z);s.push(z.map(B=>B/N)),S=s.length-1,r.set(b,S)}return S};for(const[d,g,b]of c){const S=p(d,g),z=p(g,b),N=p(b,d);f.push([d,S,N],[g,z,S],[b,N,z],[S,z,N])}c=f}for(const i of s){const r=t?t(i[0],i[1],i[2]):i;n.v(r[0],r[1],r[2])}for(const i of c)n.tri(i[0],i[1],i[2]);return n}const Ei=`
fn ss(a: f32, b: f32, x: f32) -> f32 { let t = clamp((x - a) / (b - a), 0., 1.); return t * t * (3. - 2. * t); }
fn h31(p: vec3f) -> f32 { var q = fract(p * vec3f(.1031, .1030, .0973)); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
fn h33(p: vec3f) -> vec3f { var q = fract(p * vec3f(.1031, .1030, .0973)); q += dot(q, q.yxz + 33.33); return fract((q.xxy + q.yxx) * q.zyx); }
fn vn(p: vec3f) -> f32 {
  let i = floor(p); let f = fract(p); let u = f * f * (3. - 2. * f);
  return mix(mix(mix(h31(i), h31(i + vec3f(1., 0., 0.)), u.x), mix(h31(i + vec3f(0., 1., 0.)), h31(i + vec3f(1., 1., 0.)), u.x), u.y),
             mix(mix(h31(i + vec3f(0., 0., 1.)), h31(i + vec3f(1., 0., 1.)), u.x), mix(h31(i + vec3f(0., 1., 1.)), h31(i + vec3f(1., 1., 1.)), u.x), u.y), u.z);
}
fn fbm(p: vec3f, n: i32) -> f32 {
  var a = .5; var s = 0.; var q = p;
  for (var i = 0; i < n; i++) { s += a * vn(q); q = q * 2.03 + vec3f(17.1, 31.7, 5.3); a *= .5; }
  return s / (1. - 2. * a);
}
fn wor(p: vec3f) -> f32 {
  let i = floor(p); let f = fract(p); var d = 9.;
  for (var x = -1; x <= 1; x++) { for (var y = -1; y <= 1; y++) { for (var z = -1; z <= 1; z++) {
    let o = vec3f(f32(x), f32(y), f32(z)); let r = o + h33(i + o) - f; d = min(d, dot(r, r));
  } } }
  return sqrt(d);
}
`,Ia=Ei+`
struct U { n: vec4u, o: vec4f, c: vec4u };
@group(0) @binding(0) var<uniform> u: U;
@group(0) @binding(1) var<storage, read_write> D: array<f32>;
@group(0) @binding(2) var<storage, read> P: array<vec4f>;
fn smax(a: f32, b: f32, k: f32) -> f32 { let h = max(k - abs(a - b), 0.) / k; return max(a, b) + h * h * k * .25; }
fn smin(a: f32, b: f32, k: f32) -> f32 { return -smax(-a, -b, k); }
fn seg2(p: vec2f, a: vec2f, b: vec2f) -> f32 { let pa = p - a; let ba = b - a; let h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-4), 0., 1.); return length(pa - ba * h); }
fn seg3(p: vec3f, a: vec3f, b: vec3f) -> f32 { let pa = p - a; let ba = b - a; let h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-4), 0., 1.); return length(pa - ba * h); }
fn dens(p: vec3f) -> f32 {
  let w = vec3f(fbm(p * .04 + 11., 3), fbm(p * .04 + 47., 3), fbm(p * .04 + 83., 3)) - .5;
  let q = p + w * vec3f(15., 6., 15.);
  let g0 = -45.5 + 7. * (fbm(vec3f(q.xz * .011, 3.), 4) - .5) + 1.6 * (fbm(vec3f(q.xz * .07, 9.), 3) - .5);
  let tn = 3. * (fbm(vec3f(q.xz * .09, 2.), 3) - .5);
  var dm = -1e3; var de = 1e3;
  var k = 0u;
  for (var i = 0u; i < u.c.x; i++) {
    let a = P[k]; let b = P[k + 1u]; k += 2u;
    let yr = clamp((p.y - g0) / (b.y - g0), 0., 1.3);
    var e = seg2(q.xz, a.xy, a.zw) - b.x;
    e -= b.z * ss(.3, .92, yr) + 3. * (1. - yr) * (1. - yr) - b.w * ss(.0, .5, yr) * (1. - ss(.5, 1., yr));
    dm = smax(dm, smin(-e, b.y + tn - p.y, 3.), 2.5);
    de = min(de, e);
  }
  var clr = 0.;
  let kc = (u.c.x + u.c.y + u.c.z) * 2u;
  for (var i = 0u; i < u.c.w; i++) {
    let a = P[kc + i * 2u]; let b = P[kc + i * 2u + 1u];
    clr = max(clr, 1. - ss(0., b.y, seg2(q.xz, a.xy, a.zw) - b.x));
  }
  let rad = length(p.xz) + w.x * 14.;
  let n = fbm(vec3f(q.xz * .0125, 1.7), 4);
  let ring = ss(156., 172., rad);
  let plat = max(ss(.5, .565, n) * (1. - clr), ring);
  let th = g0 + plat * mix(26. + 17. * fbm(vec3f(q.xz * .03, 5.), 2), 60., ring);
  var d = smax(g0 + 4.5 * ss(10., 0., de) - p.y, dm, 3.);
  d = smax(d, (th - p.y) * .7, 3.);
  k = u.c.x * 2u;
  for (var i = 0u; i < u.c.y; i++) {
    let a = P[k]; let b = P[k + 1u]; k += 2u;
    var r = p + w * 3. - a.xyz;
    let cs = cos(a.w); let sn = sin(a.w);
    r = vec3f(cs * r.x + sn * r.z, r.y / b.z, -sn * r.x + cs * r.z);
    d = smax(d, b.y - length(vec2f(length(r.xy) - b.x, r.z)), 1.5);
  }
  let hg = p.y - g0;
  let rk = mix(.25, 1., ss(.5, 5., hg));
  d += rk * ((.5 - wor(p * .17 + w * 2.)) * 3.4 + (.5 - wor(p * .41 + 7.)) * 1.3 + (fbm(p * .3, 3) - .5) * 2.2);
  d += rk * 2.2 * (abs(fract(p.y * .21 + w.y * 2.2) - .5) - .25);
  for (var i = 0u; i < u.c.z; i++) {
    let a = P[k]; let b = P[k + 1u]; k += 2u;
    d = smin(d, seg3(p + w * 2., a.xyz, b.xyz) - a.w, 2.);
  }
  return min(d, 3. - p.y);
}
@compute @workgroup_size(4, 4, 4) fn main(@builtin(global_invocation_id) id: vec3u) {
  if (any(id >= u.n.xyz)) { return; }
  var d = dens(u.o.xyz + vec3f(id) * u.o.w);
  if (id.x == 0u || id.z == 0u || id.x == u.n.x - 1u || id.z == u.n.z - 1u || id.y == u.n.y - 1u) { d = -1.; }
  D[id.x + u.n.x * (id.y + u.n.y * id.z)] = d;
}
`,Tn=`
@vertex fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f { return vec4f(f32(i32(i & 1u) * 4 - 1), f32(i32(i >> 1u) * 4 - 1), 0., 1.); }
`,_a=Ei+Tn+`
fn hp(p: vec2f, per: f32) -> f32 { return h31(vec3f(p - per * floor(p / per), per)); }
fn tn(p: vec2f, per: f32) -> f32 {
  let i = floor(p); let f = fract(p); let u = f * f * (3. - 2. * f);
  return mix(mix(hp(i, per), hp(i + vec2f(1., 0.), per), u.x), mix(hp(i + vec2f(0., 1.), per), hp(i + vec2f(1., 1.), per), u.x), u.y);
}
fn tf(uv: vec2f, per: f32, n: i32) -> f32 { var a = .5; var s = 0.; var pr = per; for (var i = 0; i < n; i++) { s += a * tn(uv * pr + f32(i) * 7.3, pr); pr *= 2.; a *= .5; } return s / (1. - 2. * a); }
fn tw(p: vec2f, per: f32) -> vec3f {
  let i = floor(p); let f = fract(p); var d = vec2f(9.); var id = 0.;
  for (var x = -1; x <= 1; x++) { for (var y = -1; y <= 1; y++) {
    let o = vec2f(f32(x), f32(y)); let c = i + o; let cw = c - per * floor(c / per);
    let hh = h33(vec3f(cw, per)); let r = o + hh.xy - f; let l = dot(r, r);
    if (l < d.x) { d.y = d.x; d.x = l; id = hh.z; } else if (l < d.y) { d.y = l; }
  } }
  return vec3f(sqrt(d), id);
}
fn H(uv: vec2f) -> f32 {
  let wq = uv + .11 * (vec2f(tf(uv, 3., 4), tf(uv + .5, 3., 4)) - .5);
  let f = tf(wq, 3., 8);
  let r1 = 1. - abs(tf(wq + 1.7, 5., 6) * 2. - 1.);
  let cr = min(abs(tf(wq + 4.1, 4., 5) * 2. - 1.) * 7., 1.);
  let cr2 = min(abs(tf(wq.yx + 2.3, 9., 4) * 2. - 1.) * 9., 1.);
  let pt = tw(wq * 29., 29.);
  let pit = (1. - ss(.0, .34, pt.x)) * step(.62, pt.z);
  return f * .50 + r1 * r1 * .24 + cr * cr2 * .26 - pit * .07;
}
@fragment fn fs(@builtin(position) fc: vec4f) -> @location(0) vec4f {
  let uv = fc.xy / 1024.; let e = 1. / 1024.;
  let h = H(uv);
  let gx = H(uv + vec2f(e, 0.)) - H(uv - vec2f(e, 0.)); let gy = H(uv + vec2f(0., e)) - H(uv - vec2f(0., e));
  let s = clamp(vec2f(gx, gy) * 1024. * .5 * .075, vec2f(-1.), vec2f(1.));
  return vec4f(-s * .5 + .5, h, tf(uv + 3.7, 3., 5));
}
`,Oa=Tn+`
@group(0) @binding(0) var t: texture_2d<f32>;
@group(0) @binding(1) var s: sampler;
fn uvOf(fc: vec4f, k: f32) -> vec2f { return fc.xy * k / vec2f(textureDimensions(t)); }
@fragment fn fsMip(@builtin(position) fc: vec4f) -> @location(0) vec4f { return textureSampleLevel(t, s, uvOf(fc, 2.), 0.); }
fn kar(c: vec3f) -> vec4f { let w = 1. / (1. + max(c.r, max(c.g, c.b))); return vec4f(c * w, w); }
@fragment fn fsDown0(@builtin(position) fc: vec4f) -> @location(0) vec4f {
  let uv = uvOf(fc, 2.); let e = 1. / vec2f(textureDimensions(t));
  let a = kar(min(textureSampleLevel(t, s, uv + e * vec2f(-1., -1.), 0.).rgb, vec3f(24.)));
  let b = kar(min(textureSampleLevel(t, s, uv + e * vec2f(1., -1.), 0.).rgb, vec3f(24.)));
  let c = kar(min(textureSampleLevel(t, s, uv + e * vec2f(-1., 1.), 0.).rgb, vec3f(24.)));
  let d = kar(min(textureSampleLevel(t, s, uv + e * vec2f(1., 1.), 0.).rgb, vec3f(24.)));
  let m = a + b + c + d;
  return vec4f(m.rgb / m.a, 1.);
}
@fragment fn fsDown(@builtin(position) fc: vec4f) -> @location(0) vec4f {
  let uv = uvOf(fc, 2.); let e = 1. / vec2f(textureDimensions(t));
  return (textureSampleLevel(t, s, uv + e * vec2f(-1., -1.), 0.) + textureSampleLevel(t, s, uv + e * vec2f(1., -1.), 0.)
        + textureSampleLevel(t, s, uv + e * vec2f(-1., 1.), 0.) + textureSampleLevel(t, s, uv + e * vec2f(1., 1.), 0.)) * .25;
}
@fragment fn fsUp(@builtin(position) fc: vec4f) -> @location(0) vec4f {
  let uv = uvOf(fc, .5); let e = .75 / vec2f(textureDimensions(t));
  return (textureSampleLevel(t, s, uv + e * vec2f(-1., -1.), 0.) + textureSampleLevel(t, s, uv + e * vec2f(1., -1.), 0.)
        + textureSampleLevel(t, s, uv + e * vec2f(-1., 1.), 0.) + textureSampleLevel(t, s, uv + e * vec2f(1., 1.), 0.)) * .25;
}
`,Da=Tn+`
@group(0) @binding(0) var<uniform> tm: vec4f;
fn caus(uv: vec2f, t: f32) -> f32 {
  let p = uv * 6.2831853;
  var i = p; var c = 0.;
  for (var n = 1; n <= 5; n++) {
    let tt = t * (1. - 3.5 / f32(n));
    i = p + vec2f(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
    let s = sin(i.x + tt); let k = cos(i.y + tt);
    c += abs(s * k) / (1.25 * sqrt(s * s + k * k) + 1e-4);
  }
  c = 1.17 - pow(c / 5., 1.4);
  return pow(abs(c), 8.);
}
const WK = array<vec3f, 10>(vec3f(1., 2., 1.), vec3f(-2., 1., .9), vec3f(3., 1., .6), vec3f(1., -4., .5), vec3f(4., 3., .4),
  vec3f(-3., 5., .32), vec3f(6., -2., .28), vec3f(5., 7., .2), vec3f(-8., 3., .18), vec3f(2., 11., .14));
@fragment fn fs(@builtin(position) fc: vec4f) -> @location(0) vec4f {
  let uv = fc.xy / ${cs}.; let t = tm.x;
  let c = caus(uv, t * .45 + 23.);
  let wu = uv + .02 * vec2f(sin(6.2831853 * (uv.y * 2. + .1 * t)), cos(6.2831853 * (uv.x * 3. - .07 * t)));
  var s = vec2f(0.);
  for (var i = 0; i < 10; i++) {
    let k = WK[i];
    s += k.xy * k.z * cos(dot(k.xy, wu) * 6.2831853 + t * (.5 + .35 * sqrt(length(k.xy))) * select(-1., 1., (i & 1) == 0) + f32(i) * 1.7);
  }
  return vec4f(c, c, s * .06);
}
`,ps=`
struct G { vp: mat4x4f, sm: mat4x4f, cam: vec4f, right: vec4f, up: vec4f, fwd: vec4f, sun: vec4f, res: vec4f, mis: vec4f };
const SIG = vec3f(.058, .0235, .0195);
const KD = vec3f(.056, .0245, .0170);
const WCOL = vec3f(.16, .58, .90);
const KDZ = vec3f(.034, .023, .018);
const PCOL = vec3f(.22, .50, .66);
const SUNC = vec3f(1.7, 1.6, 1.45);
const TAU = 6.2831853;
const LOW = ${Ce>1};
fn sat(x: f32) -> f32 { return clamp(x, 0., 1.); }
fn ss(a: f32, b: f32, x: f32) -> f32 { let t = clamp((x - a) / (b - a), 0., 1.); return t * t * (3. - 2. * t); }
fn ign(p: vec2f) -> f32 { return fract(52.9829189 * fract(dot(p, vec2f(.06711056, .00583715)))); }
fn hs(x: f32) -> f32 { return fract(sin(x * 127.1) * 43758.5453); }
fn kd(z: f32) -> vec3f { return mix(KD, KDZ, z); }
fn sg(z: f32) -> vec3f { return mix(SIG, vec3f(.034, .026, .022), z); }
fn fin(c: vec3f) -> vec4f { return vec4f(min(max(c, vec3f(0.)), vec3f(40.)), 1.); }
const KDF = vec3f(.043, .045, .042);
fn fogIn(ro: vec3f, rd: vec3f, d: f32, z: f32, sun: vec3f) -> vec3f {
  let k = mix(KD, KDF, z);
  let a = sg(z) - k * rd.y;
  let I = (1. - exp(-a * d)) / a;
  let mu = max(dot(rd, sun), 0.);
  let m2 = mu * mu;
  return mix(WCOL, PCOL, z) * sg(z) * exp(k * ro.y) * I * (.96 + .22 * m2 * m2);
}
`,Ln=ps+`
@group(0) @binding(0) var<uniform> g: G;
@group(0) @binding(1) var sR: sampler;
@group(0) @binding(2) var sC: sampler;
@group(0) @binding(3) var sS: sampler_comparison;
@group(0) @binding(4) var tSh: texture_depth_2d;
@group(0) @binding(5) var tW: texture_2d<f32>;
@group(0) @binding(6) var tD: texture_2d<f32>;
@group(0) @binding(7) var tV: texture_3d<f32>;
@group(0) @binding(8) var tM: texture_2d<f32>;
fn shUV(p: vec3f) -> vec3f { let s = g.sm * vec4f(p, 1.); return vec3f(s.x * .5 + .5, .5 - s.y * .5, s.z - .0007); }
fn shadow1(p: vec3f) -> f32 { let s = shUV(p); return textureSampleCompareLevel(tSh, sS, s.xy, s.z); }
fn shadow4(p: vec3f) -> f32 {
  let s = shUV(p); let e = 1.8 / ${go}.;
  return (textureSampleCompareLevel(tSh, sS, s.xy + vec2f(-e, -e), s.z) + textureSampleCompareLevel(tSh, sS, s.xy + vec2f(e, -e), s.z)
        + textureSampleCompareLevel(tSh, sS, s.xy + vec2f(-e, e), s.z) + textureSampleCompareLevel(tSh, sS, s.xy + vec2f(e, e), s.z)) * .25;
}
fn shadow9(p: vec3f) -> f32 {
  if (LOW) { return shadow1(p); }
  let s = shUV(p); let e = 2.1 / ${go}.; var a = 0.;
  for (var x = -1; x <= 1; x++) { for (var y = -1; y <= 1; y++) { a += textureSampleCompareLevel(tSh, sS, s.xy + vec2f(f32(x), f32(y)) * e, s.z); } }
  return a / 9.;
}
fn cuv(p: vec3f) -> vec2f { return p.xz - g.sun.xz * (p.y / g.sun.y); }
fn caus(p: vec3f, d: f32) -> vec3f {
  let q = cuv(p);
  let o = vec2f(.004, .0025);
  let a = vec3f(textureSample(tW, sR, q / 3.3 + o).r, textureSample(tW, sR, q / 3.3).r, textureSample(tW, sR, q / 3.3 - o).r);
  let b = textureSample(tW, sR, q.yx / 6.9 + .37).r;
  let c = min(pow(a, vec3f(2.3)) * 5. * (.45 + b * 1.3), vec3f(4.));
  return mix(c, vec3f(.33), ss(35., 100., d));
}
fn caus2(p: vec3f, d: f32) -> f32 {
  let q = cuv(p);
  let c = min(pow(textureSample(tW, sR, q / 4.1).r, 1.4) * 2.6 * (.45 + textureSample(tW, sR, q.yx / 6.9 + .37).r * 1.3), 2.6);
  return mix(c, .33, ss(35., 100., d));
}
fn sunE(y: f32, z: f32) -> vec3f { return SUNC * exp(kd(z) * (min(y, 0.) / g.sun.y)) * (.5 + .5 * sat(-y / 30.)); }
fn vol(p: vec3f) -> vec4f { return textureSampleLevel(tV, sC, (p - vec3f(-192., -56., -192.)) / vec3f(384., 60., 384.), 0.); }
fn amb(p: vec3f, n: vec3f, sky: f32, z: f32) -> vec3f {
  let up = n.y * .5 + .5;
  return mix(vec3f(.22, .60, .80), vec3f(.34, .56, .82), z) * exp(kd(z) * min(p.y, 0.) * 1.2) * (.3 + .7 * sky) * (.24 + .76 * up * up) * 1.3 * (.55 + .45 * sat(-p.y / 30.)) + vec3f(.003, .010, .016);
}
fn zone(p: vec3f) -> f32 { return mix(g.sun.w, textureSampleLevel(tM, sC, p.xz / 384. + .5, 0.).b, .2); }
fn side(p: vec3f, n: vec3f, open: f32, z: f32) -> vec3f { return mix(WCOL, PCOL, z) * exp(kd(z) * min(p.y, 0.)) * open * (1. - abs(n.y)) * .7; }
// skylight at most 150 m along the ray: past that, terrain and the background behind it (vsB) get the same haze
fn fog(c: vec3f, wp: vec3f, z: f32) -> vec3f {
  let v = wp - g.cam.xyz; let d = length(v); let rd = v / d;
  return c * exp(-sg(z) * d) * ss(230., 185., d) + fogIn(g.cam.xyz, rd, d, z, g.sun.xyz) * (.58 + .42 * vol(g.cam.xyz + rd * min(d, 150.)).g);
}
fn qrot(q: vec4f, v: vec3f) -> vec3f { return v + 2. * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
`,Ua=Ln+`
struct VI { @location(0) p: vec3f, @location(1) n: vec4f, @location(2) a: vec4f, @location(3) b: vec4f, @location(4) c: vec4f };
struct VO { @builtin(position) cp: vec4f, @location(0) wp: vec3f, @location(1) n: vec3f, @location(2) op: vec3f, @location(3) on: vec3f,
  @location(4) @interpolate(flat) m: vec4f, @location(5) @interpolate(flat) q: vec4f, @location(6) ao: f32 };
@vertex fn vs(i: VI) -> VO {
  var o: VO;
  var sc = i.a.w;
  if (i.c.x < 1.5 && i.c.z > 1.5 && g.res.x > 0.) { sc *= 1. - ss(i.c.z * .7, i.c.z, distance(i.a.xyz, g.cam.xyz) / g.mis.z); }
  var w = i.a.xyz + qrot(i.b, i.p * sc);
  w.y += sin(g.cam.w * .3 + i.c.y * 40.) * i.c.w;
  o.cp = g.vp * vec4f(w, 1.); o.wp = w; o.n = qrot(i.b, i.n.xyz); o.op = i.p * i.a.w + i.c.y * 37.; o.on = i.n.xyz;
  o.m = i.c; o.q = i.b; o.ao = i.n.w;
  return o;
}
struct TP { h: f32, c: f32, n: vec3f };
fn tri(p: vec3f, n: vec3f, s: f32) -> TP {
  var w = pow(abs(n), vec3f(4.)); w /= (w.x + w.y + w.z);
  let x = textureSample(tD, sR, p.zy * s); let y = textureSample(tD, sR, p.xz * s); let z = textureSample(tD, sR, p.xy * s);
  var o: TP;
  o.h = x.b * w.x + y.b * w.y + z.b * w.z;
  o.c = x.a * w.x + y.a * w.y + z.a * w.z;
  let a = x.rg * 2. - 1.; let b = y.rg * 2. - 1.; let c = z.rg * 2. - 1.;
  o.n = vec3f(0., a.y, a.x) * w.x + vec3f(b.x, 0., b.y) * w.y + vec3f(c.x, c.y, 0.) * w.z;
  return o;
}
@fragment fn fs(i: VO, @builtin(front_facing) ff: bool) -> @location(0) vec4f {
  let mat = i32(i.m.x + .5); let sd = i.m.y; let fl_ = select(-1., 1., ff);
  let on = normalize(i.on) * fl_; let n0 = normalize(i.n) * fl_;
  let dist = length(i.wp - g.cam.xyz);
  let ts = select(1., i.m.z, mat >= 2);
  let A = tri(i.op, on, .1 * ts); let B = tri(i.op, on, .43 * ts); let C = tri(i.op, on, 1.9 * ts); let F = tri(i.op, on, 6.7 * ts); let fk = ss(10., 1.5, dist) * f32(mat <= 1);
  let Wd = textureSample(tD, sR, vec2f(i.op.x * .06, (i.op.y + i.op.z) * .7));
  let big = textureSample(tD, sR, i.op.xz * .013 + i.op.y * .021).a;
  let big2 = textureSample(tD, sR, i.op.zx * .031 + i.op.y * .043 + .37).a;
  var sgro = 0.;
  let sk = textureSample(tD, sR, vec2f((i.op.x + i.op.z) * .33, i.op.y * .035));
  let sk2 = textureSample(tD, sR, vec2f((i.op.x - i.op.z) * 1.1, i.op.y * .11));
  let gm = textureSample(tM, sC, i.wp.xz / 384. + .5);
  let ca = caus(i.wp, dist);
  let hgt = A.h * .5 + B.h * .35 + C.h * .15;
  var bump = 1.7; var gloss = .1; var alb = vec3f(0.); var emi = vec3f(0.); var vao = 1.; var flu = 0.;
  let flt = ss(.72, .93, n0.y);
  if (mat <= 1) {
    // layered rock: grey / olive / brown beds, warm encrustation patches, algae on up-facing parts
    let st = i.op.y * .55 + A.h * 1.6 + big * 5. + big2 * 3.;
    let bed = hs(floor(st)); let sf = fract(st);
    alb = mix(vec3f(.11, .12, .13), vec3f(.33, .30, .25), sat(A.c * 1.5 - .25));
    alb = mix(alb, mix(vec3f(.26, .19, .10), vec3f(.20, .22, .14), bed), ss(.42, .66, big) * .7);
    alb *= mix(.72, 1.15, bed) * (1. - .45 * ss(.12, .0, sf) * (1. - abs(on.y)));
    let enc = ss(.46, .6, big2 * .6 + B.c * .5) * ss(.3, .6, hgt);
    alb = mix(alb, mix(vec3f(.34, .07, .10), vec3f(.40, .25, .07), ss(.45, .6, A.c)) * (.5 + .8 * B.h), enc * .75);
    alb = mix(alb, vec3f(.50, .50, .46) * (.5 + .7 * C.h), ss(.60, .70, B.c * .6 + C.c * .5) * .5);
    let alg = ss(-.1, .6, n0.y) * ss(.3, .52, B.c * .55 + big * .5);
    alb = mix(alb, vec3f(.035, .14, .07), alg * .8);
    alb *= (.22 + 1.3 * hgt) * mix(1., .62 + .76 * F.h, fk);
    sgro = -ss(.14, .0, sf) * (1. - abs(on.y)) * 1.2;
    if (mat == 0) {
      alb = mix(alb, vec3f(.13, .15, .14) * (.55 + .6 * B.h), flt * gm.a * .7);
      let mg = flt * sat(gm.r * 1.5 - .45 + (B.c - .5) * 1.6) * ss(.35, .6, A.h) * ss(-34., -40., i.wp.y);
      alb = mix(alb, vec3f(.20, .02, .12) * (.4 + .9 * B.h), mg * .8);
      flu = mg * .35;
      alb = mix(alb, alb * vec3f(.85, .8, 1.4) + vec3f(.015, .0, .05), gm.b * .8);
    }
  } else if (mat == 2) {
    // whale fluke: smooth pale stone with dark streaks running along its length
    alb = mix(vec3f(.42, .47, .48), vec3f(.10, .13, .15), ss(.40, .62, sk.a * .6 + sk2.b * .5)) * (.75 + .3 * B.h);
    alb = mix(alb, vec3f(.60, .64, .62), ss(.62, .75, sk2.a) * .5);
    gloss = .9; bump = .3;
  } else if (mat == 3) {
    alb = mix(vec3f(.13, .085, .05), vec3f(.36, .25, .14), Wd.b) * (.6 + .5 * B.h);
    let pk = fract(atan2(i.op.z, 2. - i.op.y) * 7.);
    alb *= .35 + .65 * ss(0., .12, min(pk, 1. - pk));
    alb = mix(alb, vec3f(.08, .22, .16), ss(.5, .7, A.c) * .6);
    gloss = .2; bump = .7;
  } else if (mat == 4) {
    let hue = fract(sd * 7.31);
    alb = mix(vec3f(.60, .17, .08), vec3f(.64, .35, .10), fract(hue * 3.));
    if (hue > .75) { alb = vec3f(.44, .18, .42); }
    alb *= (.45 + .75 * B.h) * (.7 + .3 * C.h);
    vao = i.ao * i.ao; gloss = .2; bump = 1.4; flu = .55;
  } else {
    let hue = fract(sd * 5.73);
    alb = mix(vec3f(.80, .08, .10), vec3f(.90, .22, .40), fract(hue * 4.));
    if (hue > .7) { alb = vec3f(.88, .42, .10); }
    if (hue > .9) { alb = vec3f(.55, .22, .75); }
    alb *= (.4 + .8 * B.h) * (.5 + .9 * i.ao * i.ao);
    alb = mix(alb, vec3f(1., .75, .6), ss(.8, 1., i.ao) * .35);
    emi = alb * .01; flu = .75; gloss = .25; bump = 1.5;
  }
  let rip = select(0., flt * gm.a * cos((i.wp.x * .8 + i.wp.z * .35) * 5. + A.c * 9.) * .65, mat == 0);
  let N = normalize(qrot(i.q, normalize(on + (A.n * .85 + B.n * .65 + C.n * .45 * ss(60., 12., dist) + F.n * .5 * fk) * bump + vec3f(.8, sgro, .35) * vec3f(rip, 1., rip))));
  let L = g.sun.xyz; let V = normalize(g.cam.xyz - i.wp);
  let v1 = vol(i.wp + n0 * 1.5); let v2 = vol(i.wp + n0 * 4.5);
  let ao = (sat((v1.r - .5) * 8.) * .55 + sat((v2.r - .5) * 2.7) * .45) * vao * ss(.12, .6, hgt);
  let z = zone(i.wp);
  let E = sunE(i.wp.y, z) * shadow9(i.wp + n0 * .35);
  let ndl = sat(dot(N, L));
  let am = (amb(i.wp, N, v1.g, z) + side(i.wp, N, sat((v2.r - .5) * 2.7), z)) * ao;
  let dl = E * ndl * (.10 + mix(vec3f(.33), ca, ss(.1, .45, dot(n0, L))) * 2.5);
  var c = alb * (dl + am) + emi + alb * flu * dot(dl + am, vec3f(.1, .5, .5));
  let H = normalize(V + L);
  c += E * (.25 + ca) * pow(sat(dot(N, H)), mix(10., 70., gloss)) * gloss * ndl * 1.8;
  c += (amb(i.wp, reflect(-V, N), v1.g, z) + side(i.wp, reflect(-V, N), sat((v2.r - .5) * 2.7), z)) * ao * (.08 + gloss) * .6 * pow(1. - sat(dot(N, V)), 2.5);
  return fin(fog(c, i.wp, z));
}
`,Ga=Ln+`
override ROWS: f32 = 7.;
override FAR: f32 = 150.;
struct LI { @location(0) a: vec4f, @location(1) b: vec4f, @location(2) c: vec4f };
struct LO { @builtin(position) cp: vec4f, @location(0) wp: vec3f, @location(1) n: vec3f, @location(2) uv: vec2f,
  @location(3) @interpolate(flat) col: vec3f, @location(4) @interpolate(flat) pr: vec4f,
  @location(5) @interpolate(flat) sd: vec2f, @location(6) @interpolate(flat) spc: vec3f };
fn sway(p: vec2f, h: f32, t: f32) -> vec2f {
  let ph = dot(p, vec2f(.031, .017));
  let a = .024 * pow(max(h, 0.), 1.25);
  return a * (vec2f(sin(t * .5 + ph + h * .09), cos(t * .37 + ph * 1.3 + h * .07)) + .35 * vec2f(sin(t * 1.3 + ph * 3. + h * .3), cos(t * 1.1 + ph * 2. + h * .23)));
}
fn shape2(v: f32) -> f32 { return sin(3.14159 * sat(v)); }
fn pal(h: f32) -> vec3f {
  if (h < .3) { return vec3f(1., .62, .08); }
  if (h < .6) { return vec3f(.12, 1., .22); }
  if (h < .8) { return vec3f(.2, .85, 1.); }
  return vec3f(1., .3, .8);
}
@vertex fn vs(@builtin(vertex_index) vi: u32, i: LI) -> LO {
  var o: LO;
  let u = f32(vi & 1u) * 2. - 1.; let v = sin(f32(vi >> 1u) / (ROWS - 1.) * 1.5708);
  let ty = i32(i.c.x * 255. + .5); let s1 = i.c.y; let s2 = i.c.z;
  let t = g.cam.w;
  let len = i.a.w; let hA = i.b.w;
  let cy = cos(i.b.x); let sy = sin(i.b.x); let ct = cos(i.b.y); let st = sin(i.b.y);
  let d = vec3f(st * cy, ct, st * sy); let pe = vec3f(ct * cy, -st, ct * sy); let sd = vec3f(-sy, 0., cy);
  // per type: x sparkle prob, y translucency, z iridescence, w emissive
  var col = vec3f(0.); var pr = vec4f(0.); var spc = vec3f(0.); var shp = vec2f(.75, .7); var wav = 1.; var fls = 1.;
  let hsel = hs(s1 * 13.7 + s2 * 71.3);
  switch ty {
    case 0 { col = mix(vec3f(.11, .125, .022), vec3f(.04, .10, .04), s1); col = mix(col, vec3f(.25, .17, .025), step(.72, s2)); pr = vec4f(.24, .9, 0., 0.); spc = pal(hsel * .72); shp = vec2f(.5, .32); wav = 1.9; }
    case 1 { col = vec3f(.10, .11, .035); pr = vec4f(0., .2, 0., 0.); shp = vec2f(.05, .1); wav = .3; fls = .3; }
    case 2 { col = mix(vec3f(.05, .20, .16), vec3f(.12, .26, .22), s1); col = mix(col, vec3f(.30, .14, .24), step(.85, s2)); pr = vec4f(.05, 1.0, .25, 0.); spc = vec3f(.6, 1., .9); shp = vec2f(.45, .35); wav = 2.2; }
    case 3 { col = mix(vec3f(.02, .05, .065), vec3f(.05, .03, .08), s1); col = mix(col, vec3f(.09, .03, .09), step(.8, s2)); pr = vec4f(.2, .85, .55, .02); spc = mix(vec3f(.5, .35, 1.), vec3f(.2, 1., .7), step(.6, hsel)); shp = vec2f(.7, .6); wav = 2.4; }
    case 4 { col = mix(vec3f(.30, .15, .02), vec3f(.42, .25, .04), s1); pr = vec4f(.2, 1., .1, 0.); spc = vec3f(1., .85, .5); shp = vec2f(.5, .4); wav = 1.8; }
    case 5 { col = mix(vec3f(.85, .05, .40), vec3f(.60, .10, .80), step(.7, s1)); col = mix(col, vec3f(.95, .25, .55), step(.75, s2)); pr = vec4f(.22, .8, 0., .30); spc = vec3f(1., .35, .8); shp = vec2f(.6, .6); fls = 2.; }
    case 6 { col = mix(vec3f(.80, .16, .16), vec3f(.92, .36, .42), s1); pr = vec4f(.06, 1., 0., .10); spc = vec3f(1., .5, .5); shp = vec2f(.4, .3); wav = 2.; }
    default { col = mix(vec3f(.05, .40, .36), vec3f(.10, .52, .58), s1); pr = vec4f(.1, .9, .2, .04); spc = vec3f(.3, 1., .9); shp = vec2f(.6, .5); }
  }
  pr.x = step(hs(s1 * 91.7 + s2 * 37.1 + i.b.x), pr.x);
  let k = (i.c.w - .3) * 2.0 + sin(t * (.8 + s1) * fls + s2 * 40. + hA * .25) * .10 * fls;
  let wph = v * (3. + 5. * s2) + s1 * 30. + t * 1.1;
  let wv = sin(wph) * .12 * wav;
  let kq = k * 1.7; let ka = select(kq, .06, abs(kq) < .06);
  let sK = sin(ka * v); let cK = cos(ka * v);
  let c = i.a.xyz + len * (d * (sK / ka) + pe * ((1. - cK) / ka + wv * v));
  let sl = sK + wv + cos(wph) * .10 * wav * v * (3. + 5. * s2);
  let N = normalize(pe * cK - d * sl); let T0 = normalize(d * cK + pe * sl);
  let tw = (s1 - .5) * 2.4 * v + sin(t * .9 + s2 * 20.) * .25 * v;
  let S = sd * cos(tw) + N * sin(tw); let N2 = N * cos(tw) - sd * sin(tw);
  let shape = pow(max(sin(3.14159 * pow(v, shp.x)), 0.), shp.y);
  let shp_ = g.res.x == 0.;
  let cd = distance(i.a.xyz, g.cam.xyz); let far = FAR * g.mis.z;
  let nearK = select(1. - ss(26., 40., cd), 0., shp_);
  let farK = select((1. - ss(far * .8, far, cd)) * ss(.6, 2.2, distance(c, g.cam.xyz)) * ss(len * 1.1 + .5, len * 2.2 + 1.2, distance(i.a.xyz + d * (len * .5), g.cam.xyz)), 1., shp_);
  let ruf = sin(v * 10. + s2 * 30. + t * .6) * i.b.z * .36 * u * shape2(v) * nearK;
  var p = c + S * (u * farK * select(i.b.z * .5 * shape, select(max(i.b.z * .5, .09) * shape, 0., ty == 1), shp_));
  p += N2 * ruf;
  let sw = sway(i.a.xz, hA + (p.y - i.a.y), t);
  p.x += sw.x; p.z += sw.y;
  o.cp = g.vp * vec4f(p, 1.); o.wp = p; o.n = normalize(N2 + S * u * .55 - T0 * cos(v * 10. + s2 * 30. + t * .6) * u * .7 * nearK); o.uv = vec2f(u, v);
  o.col = col; o.pr = pr; o.sd = vec2f(s1, s2); o.spc = spc;
  return o;
}
struct GO { @builtin(position) cp: vec4f, @location(0) uv: vec2f, @location(1) @interpolate(flat) col: vec3f };
@vertex fn vsGl(@builtin(vertex_index) vi: u32, @location(0) a: vec4f, @location(1) b: vec4f) -> GO {
  var o: GO; let q = vec2f(f32(vi & 1u), f32(vi >> 1u)) * 2. - 1.; let t = g.cam.w;
  var p = a.xyz; let sw = sway(a.xz, a.w, t); p.x += sw.x; p.z += sw.y;
  p += .1 * vec3f(sin(t * .7 + b.x * 50.), sin(t * .9 + b.x * 70.), cos(t * .8 + b.x * 90.));
  let d = length(p - g.cam.xyz);
  if (d > 120. || dot(p - g.cam.xyz, g.fwd.xyz) < -1.) { o.cp = vec4f(0., 0., 2., 1.); return o; }
  let tw = pow(.5 + .5 * sin(t * (.35 + .9 * hs(b.x)) + b.x * 100.), 4.);
  let sz = min(max(b.z, d * .0026), d * .0045);
  let w = p + (g.right.xyz * q.x + g.up.xyz * q.y) * sz;
  o.cp = g.vp * vec4f(w, 1.); o.uv = q;
  let z = zone(p);
  let lit = .3 + 1.8 * shadow1(p) * sunE(p.y, z).g;
  let e = b.z / sz;
  o.col = pal(b.y) * (.12 + tw * 1.7) * lit * e * e * exp(-SIG.g * d) * ss(.4, 1.5, d) * 17.;
  return o;
}
@fragment fn fsGl(i: GO) -> @location(0) vec4f {
  let r = dot(i.uv, i.uv);
  return vec4f(min(i.col * exp(-r * 7.) * (1. - ss(.7, 1., r)), vec3f(10.)), 0.);
}
@fragment fn fs(i: LO, @builtin(front_facing) ff: bool) -> @location(0) vec4f {
  let dist = length(i.wp - g.cam.xyz);
  let ca = caus2(i.wp, dist);
  var n = normalize(i.n); if (!ff) { n = -n; }
  let V = normalize(g.cam.xyz - i.wp); let L = g.sun.xyz;
  let z = zone(i.wp);
  let lt = textureSample(tD, sR, vec2f(i.uv.x * .13 + i.sd.x * 3.7, i.uv.y * .8 + i.sd.y * 5.3));
  let vv = vol(i.wp + vec3f(0., .8, 0.));
  let E = sunE(i.wp.y, z) * shadow1(i.wp + L * .3);
  let ndl = dot(n, L);
  var alb = i.col * (.72 + .28 * ss(0., .25, abs(i.uv.x))) * mix(.5, 1.12, i.uv.y) * (1. - .45 * ss(30., 8., dist) * ss(.6, 1., sin(i.uv.y * 40. - abs(i.uv.x) * 7. + i.sd.x * 40.))) * (.58 + .42 * ss(0., .13, abs(i.uv.x))) * (.5 + 1.0 * lt.b) * (.65 + .7 * lt.a);
  let ndv = sat(dot(n, V));
  let ir = .5 + .5 * cos(TAU * (vec3f(0., .33, .67) + ndv * 1.1 + i.sd.x * .22 + i.uv.y * .5 + .55));
  alb = mix(alb, alb * .5 + ir * vec3f(.15, .13, .30), i.pr.z * (1. - ndv) * .8);
  let tr = (max(-ndl, 0.) * .85 + .15) * i.pr.y;
  let trc = alb * mix(vec3f(1.), vec3f(1.5, 1.4, .75), sat(i.pr.y) * (1. - i.pr.z));
  let aov = sat((vv.r - .5) * 6.) * mix(.4, 1., i.uv.y);
  let am = (amb(i.wp, n, vv.g, z) + amb(i.wp, -n, vv.g, z) * i.pr.y * .55 * vec3f(1.1, 1.15, .7) + side(i.wp, n, sat((vv.r - .5) * 4.), z) * .6) * (.3 + .7 * aov);
  var c = E * (.06 + ca * 1.5) * (alb * max(ndl, 0.) + trc * tr) + alb * am;
  let H = normalize(V + L);
  c += E * (pow(sat(dot(n, H)), 40.) * (.45 + ir * i.pr.z * 2.) + pow(sat(dot(n, H)), 9.) * .07) + am * ir * i.pr.z * pow(1. - ndv, 3.) * 1.5;
  c += E * trc * i.pr.y * pow(sat(dot(-V, L)), 3.) * 1.2;
  c += alb * i.pr.w * (.5 + 3. * dot(am + E * .3, vec3f(.1, .5, .5)));
  // sparkle: whole-leaf glints that twinkle slowly
  let tw = pow(.5 + .5 * sin(g.cam.w * (.5 + i.sd.y * 1.4) + i.sd.x * 90.), 5.);
  let m = ss(.2, .0, abs(i.uv.y - (.35 + .45 * i.sd.y))) * (1. - i.uv.x * i.uv.x);
  let lit = .35 + E.g * 1.2;
  c += i.spc * i.pr.x * (.1 + tw) * m * lit * .6;
  return fin(fog(c, i.wp, z));
}
`,Wa=Ln+`
struct VI { @location(0) p: vec3f, @location(1) n: vec4f, @location(2) a: vec4f, @location(3) b: vec4f };
struct VO { @builtin(position) cp: vec4f, @location(0) wp: vec3f, @location(1) n: vec3f, @location(2) op: vec3f, @location(3) @interpolate(flat) sd: f32, @location(4) lt: f32 };
@vertex fn vsFish(i: VI) -> VO {
  var o: VO;
  let s = i.b.x; let h = vec3f(hs(s), hs(s + .37), hs(s + .71));
  let R = i.a.w; let t = g.cam.w;
  let ta = t * i.b.y + i.b.w * 6.3 + (h.x - .5) * (26. / R);
  let ph = i.b.w * 17.;
  let P = i.a.xyz + vec3f(R * cos(ta), 2.2 * sin(3. * ta + ph), R * .6 * sin(ta));
  let T = normalize(vec3f(-R * sin(ta), 6.6 * cos(3. * ta + ph), R * .6 * cos(ta))) * sign(i.b.y);
  let S = normalize(cross(vec3f(0., 1., 0.), T)); let Up = cross(T, S);
  let off = S * ((h.y - .5) * 5. + sin(t * .6 + s * 40.) * .5) + Up * ((h.z - .5) * 3.2 + cos(t * .5 + s * 31.) * .4);
  var l = i.p * i.b.z * (.75 + .5 * h.z);
  l.z += sin(t * 9. + s * 50. + l.x * 5.) * .22 * (.25 * i.b.z - l.x);
  let w = P + off + T * l.x + Up * l.y + S * l.z;
  o.cp = g.vp * vec4f(w, 1.); o.wp = w; o.n = T * i.n.x + Up * i.n.y + S * i.n.z; o.op = i.p; o.sd = s;
  o.lt = shadow1(w);
  return o;
}
@fragment fn fsFish(i: VO) -> @location(0) vec4f {
  let n = normalize(i.n); let L = g.sun.xyz; let V = normalize(g.cam.xyz - i.wp);
  let z = zone(i.wp); let vv = vol(i.wp);
  var alb = mix(vec3f(.50, .68, .80), vec3f(.10, .22, .40), ss(-.05, .2, i.op.y));
  alb = mix(alb, vec3f(.95, .8, .3), step(.86, fract(i.sd * 7.7)) * .6);
  let E = sunE(i.wp.y, z) * i.lt;
  var c = alb * (E * (.25 + .75 * sat(dot(n, L))) + amb(i.wp, n, vv.g, z) * 1.3);
  c += E * pow(sat(dot(n, normalize(V + L))), 24.) * 1.6 + vec3f(.3, .6, .7) * pow(1. - sat(dot(n, V)), 3.) * .25 * vv.g;
  return fin(fog(c, i.wp, z));
}
@vertex fn vsManta(i: VI) -> VO {
  var o: VO;
  let t = g.cam.w; let R = i.a.w; let sz = i.b.z;
  let ta = t * i.b.y + i.b.x;
  let P = i.a.xyz + vec3f(R * cos(ta), 2.5 * sin(2. * ta + i.b.w), R * .75 * sin(ta));
  let T = normalize(vec3f(-R * sin(ta), 5. * cos(2. * ta + i.b.w) * 1., R * .75 * cos(ta))) * sign(i.b.y);
  var S = normalize(cross(vec3f(0., 1., 0.), T)); var Up = cross(T, S);
  let bank = -.28 * sign(i.b.y);
  let S2 = S * cos(bank) + Up * sin(bank); Up = Up * cos(bank) - S * sin(bank); S = S2;
  let u = i.n.w; let au = abs(u);
  let fp = t * 1.25 + i.b.w * 5. - au * 1.2;
  let amp = .36 * pow(au, 1.6);
  var l = i.p;
  l.y += amp * sin(fp) - .1 * sin(t * 1.25 + i.b.w * 5.);
  let tail = ss(-.5, -1.9, l.z) * step(au, .001);
  l.x += tail * sin(t * .8 + l.z * 2.) * .12;
  let sl = (.576 * pow(au, .6) * sin(fp) - .43 * pow(au, 1.6) * cos(fp)) * sign(u);
  let ln = normalize(vec3f(i.n.x - sl * i.n.y, i.n.y + sl * i.n.x, i.n.z));
  let w = P + (S * l.x + Up * l.y + T * l.z) * sz;
  o.cp = g.vp * vec4f(w, 1.); o.wp = w; o.n = S * ln.x + Up * ln.y + T * ln.z; o.op = i.p; o.sd = i.b.w;
  o.lt = 1.;
  return o;
}
@fragment fn fsManta(i: VO) -> @location(0) vec4f {
  let dist = length(i.wp - g.cam.xyz);
  let ca = caus(i.wp, dist);
  let tx = textureSample(tD, sR, i.op.xz * .9 + i.sd);
  let n = normalize(i.n + (vec3f(tx.r, 0., tx.g) - vec3f(.5, 0., .5)) * .5); let L = g.sun.xyz; let V = normalize(g.cam.xyz - i.wp);
  let z = zone(i.wp); let vv = vol(i.wp);
  let top = ss(-.2, .25, normalize(i.n).y);
  let au = abs(i.op.x);
  let gill = ss(.25, .0, abs(au - .13) * 8.) * ss(.04, .12, i.op.z) * ss(.34, .26, i.op.z) * ss(.2, .8, sin(i.op.z * 110.));
  var belly = vec3f(.13, .17, .21) * (.6 + .6 * tx.b) * (1. - .7 * gill);
  belly = mix(belly, vec3f(.05, .08, .11), sat(ss(.45, .9, au + tx.a * .35) + ss(-.1, -.4, i.op.z + tx.b * .2) * .7));
  var back = vec3f(.04, .065, .10) + vec3f(.10, .16, .2) * ss(.5, .75, tx.a);
  back = mix(back, vec3f(.36, .46, .52), ss(.25, .0, abs(au - .26) * 3.5 + abs(i.op.z - .12) * 5.) * .8);
  var alb = mix(belly, back, top);
  let E = sunE(i.wp.y, z) * shadow4(i.wp + n * .3);
  let ndv = sat(dot(n, V));
  let ir = .5 + .5 * cos(TAU * (vec3f(0., .33, .67) + ndv * 1.1 + tx.a * 1.5 + .55));
  let fillN = vec3f(n.x, abs(n.y) * .55 + .25, n.z);
  var c = alb * (E * sat(dot(n, L)) * (.3 + ca) + amb(i.wp, fillN, vv.g, z) * 1.1 + side(i.wp, n, 1., z) * .8);
  c += ir * vec3f(.35, .16, .6) * (.07 + .22 * tx.b) * (.4 + E.g * .2 * ca.g) * (1. - top * .3);
  c += E * pow(sat(dot(n, normalize(V + L))), 30.) * .5 * (.3 + ca);
  let sky = amb(i.wp, vec3f(0., 1., 0.), vv.g, z);
  c += alb * sky * ca * .45 * (1. - top) + sky * pow(1. - ndv, 3.) * .35;
  return fin(fog(c, i.wp, z));
}
`,Ka=Ln+`
struct VO { @builtin(position) cp: vec4f, @location(0) wp: vec3f };
@vertex fn vs(@builtin(vertex_index) i: u32) -> VO {
  var o: VO;
  let p = vec2f(f32(i & 1u), f32(i >> 1u)) * 2. - 1.;
  o.wp = vec3f(g.cam.x + p.x * 900., 0., g.cam.z + p.y * 900.);
  o.cp = g.vp * vec4f(o.wp, 1.);
  return o;
}
@fragment fn fs(i: VO) -> @location(0) vec4f {
  let v = i.wp - g.cam.xyz; let d = length(v); let V = v / d;
  let fl = ss(260., 60., d);
  let s = (textureSample(tW, sR, i.wp.xz / 13.).ba + textureSample(tW, sR, i.wp.zx / 4.7 + .2).ba * .7 + textureSample(tW, sR, i.wp.xz / 37. + .6).ba * .8) * fl;
  let n = normalize(vec3f(-s.x * .8, -1., -s.y * .8));
  let ci = sat(dot(V, -n));
  let k = 1. - 1.769 * (1. - ci * ci);
  let win = ss(0., .22, k);
  let rr = refract(V, n, 1.33);
  let sd = max(dot(rr, g.sun.xyz), 0.);
  let fr = pow(1. - sqrt(max(k, 0.)), 5.);
  let sky = (vec3f(.30, .78, 1.) * 1.3 * clamp(1. + 3.8 * (s.x * .6 - s.y * .8), .25, 3.) + vec3f(1., .95, .85) * (pow(sd, 60.) * 1.3 + pow(sd, 500.) * 12.)) * (1. - fr);
  let z = zone(i.wp);
  let R = reflect(V, n);
  let refl = fogIn(i.wp, R, 300., z, g.sun.xyz) * 1.15;
  let c = mix(refl, sky, win);
  return fin(fog(c, i.wp, z));
}
// behind everything: where no terrain is drawn (it stops at ~240 m) the water looks as it does at that distance
@vertex fn vsB(@builtin(vertex_index) i: u32) -> VO {
  var o: VO;
  let p = vec2f(f32(i & 1u), f32(i >> 1u)) * 2. - 1.;
  o.wp = g.cam.xyz + g.fwd.xyz + g.right.xyz * (p.x * g.right.w) + g.up.xyz * (p.y * g.up.w);
  o.cp = vec4f(p, 1e-7, 1.);
  return o;
}
@fragment fn fsB(i: VO) -> @location(0) vec4f {
  let p = g.cam.xyz + normalize(i.wp - g.cam.xyz) * 240.;
  return fin(fog(vec3f(0.), p, zone(p)));
}
`,Xa=Ln+`
struct VO { @builtin(position) cp: vec4f, @location(0) uv: vec2f, @location(1) @interpolate(flat) pr: vec4f, @location(2) wp: vec3f };
fn quad(i: u32) -> vec2f { return vec2f(f32(i & 1u), f32(i >> 1u)) * 2. - 1.; }
@vertex fn vsBub(@builtin(vertex_index) vi: u32, @location(0) a: vec4f, @location(1) b: vec4f) -> VO {
  var o: VO; let q = quad(vi); let t = g.cam.w;
  let life = fract(t * b.y / b.z + b.x);
  let h = life * b.z;
  var p = a.xyz + vec3f(0., h, 0.);
  let wob = b.w * (.3 + h * .035);
  p.x += sin(t * 1.7 + b.x * 50. + h * .6) * wob + sin(h * .13 + b.x * 9.) * b.w * 2.;
  p.z += cos(t * 1.3 + b.x * 33. + h * .5) * wob + cos(h * .11 + b.x * 7.) * b.w * 2.;
  let sz = a.w * (.55 + .7 * life) * ss(0., .03, life) * ss(0., -1.2, p.y);
  let w = p + (g.right.xyz * q.x + g.up.xyz * q.y) * sz;
  o.cp = g.vp * vec4f(w, 1.); o.uv = q; o.wp = p;
  o.pr = vec4f(b.x, sz, shadow1(p), 0.);
  return o;
}
@fragment fn fsBub(i: VO) -> @location(0) vec4f {
  let t = g.cam.w;
  let an = atan2(i.uv.y, i.uv.x + 1e-4);
  let big = ss(.04, .22, i.pr.y);
  let r = length(i.uv) / (.9 + big * .05 * sin(an * 3. + t * 5. + i.pr.x * 40.) + big * .02 * sin(an * 5. - t * 7.));
  let aa = fwidth(r) * 1.5;
  let disc = 1. - ss(1. - aa, 1., r);
  let rim = ss(.55, .98, r);
  let hl = ss(.34, .0, length(i.uv - vec2f(-.36, .42))) + .5 * ss(.2, .0, length(i.uv - vec2f(.4, -.42)));
  let z = zone(i.wp);
  let E = sunE(i.wp.y, z) * (.25 + .75 * i.pr.z);
  let hi = fogIn(i.wp, vec3f(0., 1., 0.), 80., z, g.sun.xyz) * 1.5;
  let lo = fogIn(i.wp, vec3f(0., -1., 0.), 80., z, g.sun.xyz);
  var c = mix(lo, hi, ss(-.5, .8, i.uv.y + rim * .4)) * (.5 + 1.2 * rim) + E * hl * 1.6;
  var al = disc * sat(.03 + rim * rim * rim * .9 + hl);
  let v = i.wp - g.cam.xyz; let d = length(v);
  let T = exp(-SIG.g * d) * ss(1.2, 3., d);
  c = c * T + fogIn(g.cam.xyz, v / d, d, z, g.sun.xyz) * (1. - T);
  al *= mix(.35, 1., T);
  return vec4f(min(max(c * al, vec3f(0.)), vec3f(20.)), al);
}
@vertex fn vsSnow(@builtin(vertex_index) vi: u32, @location(0) a: vec4f) -> VO {
  var o: VO; let q = quad(vi); let t = g.cam.w;
  let B = 44.;
  var p = a.xyz * B + vec3f(t * .22, t * .05, t * .13) + .5 * vec3f(sin(t * .3 + a.x * 60.), sin(t * .23 + a.y * 50.), cos(t * .27 + a.z * 70.));
  p = g.cam.xyz + (fract((p - g.cam.xyz) / B + .5) - .5) * B;
  let d = length(p - g.cam.xyz);
  let sz = (.012 + .045 * a.w * a.w * a.w);
  let w = p + (g.right.xyz * q.x + g.up.xyz * q.y) * max(sz, d * .0011);
  o.cp = g.vp * vec4f(w, 1.); o.uv = q; o.wp = p;
  let fade = ss(B * .5, B * .32, d) * ss(.6, 2.5, d) * min(1., sz / (d * .0011)) * ss(-.3, -1.5, p.y);
  let tw = .6 + .4 * sin(t * (1. + a.w * 2.) + a.x * 100.);
  o.pr = vec4f(fade * tw, shadow1(p), a.w, d);
  return o;
}
@fragment fn fsSnow(i: VO) -> @location(0) vec4f {
  let r = length(i.uv);
  let m = ss(1., .2, r);
  let z = zone(i.wp);
  let c = (sunE(i.wp.y, z) * i.pr.y * .8 + amb(i.wp, vec3f(0., 1., 0.), 1., z) * .3) * mix(vec3f(1.), vec3f(.7, 1., .9), i.pr.z);
  return vec4f(min(max(c * m * m * i.pr.x * exp(-SIG.g * i.pr.w), vec3f(0.)), vec3f(8.)), 0.);
}
`,Ha=ps+Tn+`
@group(0) @binding(0) var<uniform> g: G;
@group(0) @binding(1) var sR: sampler;
@group(0) @binding(2) var sS: sampler_comparison;
@group(0) @binding(3) var tSh: texture_depth_2d;
@group(0) @binding(4) var tW: texture_2d<f32>;
@group(0) @binding(5) var tDp: texture_depth${Tt>1?"_multisampled":""}_2d;
@group(0) @binding(6) var tV: texture_3d<f32>;
@group(0) @binding(7) var sC: sampler;
@fragment fn fs(@builtin(position) fc: vec4f) -> @location(0) vec4f {
  let dp = textureLoad(tDp, vec2i(fc.xy) * 2, 0);
  let uv = fc.xy * 2. * g.res.zw;
  let nd = vec2f(uv.x * 2. - 1., 1. - uv.y * 2.);
  let rv = g.fwd.xyz + g.right.xyz * (nd.x * g.right.w) + g.up.xyz * (nd.y * g.up.w);
  let rl = length(rv); let rd = rv / rl;
  let zl = g.fwd.w / max(dp, 1e-6);
  var tm = min(zl * rl, 120.);
  if (rd.y > 1e-4) { tm = min(tm, -g.cam.y / rd.y); }
  let ro = g.cam.xyz; let sx = g.sun.xyz; let k = kd(g.sun.w); let sgz = sg(g.sun.w);
  let dt = tm / ${Si}.;
  let j = ign(fc.xy);
  var acc = vec3f(0.);
  for (var n = 0; n < ${Si}; n++) {
    let t = (f32(n) + j) * dt;
    let p = ro + rd * t;
    let s = g.sm * vec4f(p, 1.);
    let vis = textureSampleCompareLevel(tSh, sS, vec2f(s.x * .5 + .5, .5 - s.y * .5), s.z - .0006);
    let q = p.xz - sx.xz * (p.y / sx.y);
    let pat = ss(.3, .7, textureSampleLevel(tW, sR, q / 27., 2.5).r) * ss(.15, .6, textureSampleLevel(tW, sR, q.yx / 11. + .3, 2.).r);
    let o = textureSampleLevel(tV, sC, (p - vec3f(-192., -56., -192.)) / vec3f(384., 60., 384.), 0.).r;
    let mist = sat(1. - (o - .5) * 3.4);
    acc += exp(-sgz * t + k * (p.y / sx.y)) * (vis * (.012 + pat * 6.) * (1. + 1.2 * mist * mist));
  }
  let mu = max(dot(rd, sx), 0.);
  let ph = mix(.2 + 2.0 * mu * mu * mu, .8, g.sun.w);
  let wc = mix(WCOL + vec3f(.04, .07, .05), PCOL + vec3f(.28, .16, .12), g.sun.w);
  return vec4f(min(acc * dt * sgz * wc * SUNC * ph * g.mis.y * (1. - .55 * g.sun.w), vec3f(20.)), zl);
}
`,Ya=Tn+`
@group(0) @binding(0) var tR: texture_2d<f32>;
@fragment fn fs(@builtin(position) fc: vec4f) -> @location(0) vec4f {
  let p = vec2i(fc.xy); let mx = vec2i(textureDimensions(tR)) - 1;
  let c = textureLoad(tR, p, 0);
  var acc = vec3f(0.); var ws = 0.;
  for (var y = -1; y <= 1; y++) { for (var x = -1; x <= 1; x++) {
    let r = textureLoad(tR, clamp(p + vec2i(x, y) , vec2i(0), mx), 0);
    let w = 1. / (.03 + abs(r.a - c.a) / c.a);
    acc += r.rgb * w; ws += w;
  } }
  return vec4f(acc / ws, c.a);
}
`,ja=ps+Tn+`
@group(0) @binding(0) var<uniform> g: G;
@group(0) @binding(1) var sC: sampler;
@group(0) @binding(2) var tS: texture_2d<f32>;
@group(0) @binding(3) var tR: texture_2d<f32>;
@group(0) @binding(4) var tB: texture_2d<f32>;
@group(0) @binding(5) var tDp: texture_depth${Tt>1?"_multisampled":""}_2d;
fn tmap(x: vec3f) -> vec3f { return sat3((x * (2.51 * x + .03)) / (x * (2.43 * x + .59) + .14)); }
fn sat3(x: vec3f) -> vec3f { return clamp(x, vec3f(0.), vec3f(1.)); }
@fragment fn fs(@builtin(position) fc: vec4f) -> @location(0) vec4f {
  let px = vec2i(fc.xy);
  let uv = fc.xy * g.res.zw;
  let zf = g.fwd.w / max(textureLoad(tDp, px, 0), 1e-6);
  // depth-aware upsample of the half-res shafts
  let h = fc.xy * .5 - .5; let b = floor(h); let f = h - b; let bi = vec2i(b);
  let mx = vec2i(textureDimensions(tR)) - 1;
  var acc = vec3f(0.); var ws = 0.;
  for (var k = 0; k < 4; k++) {
    let o = vec2i(k & 1, k >> 1);
    let r = textureLoad(tR, clamp(bi + o, vec2i(0), mx), 0);
    let bw = mix(1. - f.x, f.x, f32(o.x)) * mix(1. - f.y, f.y, f32(o.y));
    let w = (bw + .02) / (.02 + abs(r.a - zf) / zf);
    acc += r.rgb * w; ws += w;
  }
  var c = textureLoad(tS, px, 0).rgb + acc / ws;
  let bl = textureSampleLevel(tB, sC, uv, 0.).rgb;
  c = mix(c, bl, .035) + bl * .015;
  c *= g.mis.x;
  let q = uv - .5;
  c *= 1. - dot(q, q) * .55;
  c = tmap(c);
  let l0 = dot(c, vec3f(.2126, .7152, .0722));
  let l = mix(l0, l0 * l0 * (3. - 2. * l0), .55);
  c *= l / max(l0, 1e-4);
  c = mix(c, vec3f(l), ss(.55, 1., l) * .1);
  c = mix(vec3f(l), c, .93) + vec3f(.008, .002, 0.);
  c = pow(max(c, vec3f(0.)), vec3f(1. / 2.2));
  let n = ign(fc.xy) + ign(fc.xy + 37.) - 1.;
  return vec4f(c + n / 255., 1.);
}
`,Ai=[[-37,-42,-33,-22,9,-7,3.5,2],[-29,-15,-33,5,12,-14,3,2],[-36,11,-30,27,9,-5,4,2],[30,-45,35,-27,9,-9,4,2],[37,-20,31,-3,11,-16,3,2],[32,5,35,9,7,-8,4,2],[19,-15,19,-15,4.4,-6,2,1.5],[6,-88,6,-88,10,-34,0,0],[0,-106,0,-106,8,3,2,2],[44,6,47,-8,7,-17,3,1],[33,29,37,12,9,-19,-6.5,0],[74,14,74,14,8,-15,3,1],[-84,-34,-80,-12,10,-7,6,2],[-78,-6,-83,12,12,-13,5,2],[-82,18,-79,32,9,-8,6,2],[-17,62,-19,78,10,-6,9,3],[-21,84,-18,100,11,-9,8,3],[22,67,24,80,7,-11,6,2],[-16,122,34,122,9,-27,3,2]],Ri=[[-23,-9.5,-16,.3,4.2,1.4,1.2],[0,-45,-34,1.57,14,2.7,1.2],[-40,-45,44,1.57,10,2.2,1.3]],Pi=[[19,-21,-23,2.5,19,-21,-7],[9,-37,108,4.2,9,-34,136]],Ti=[[0,-45,0,35,22,10],[0,-86,0,-86,46,12],[42,24,74,6,22,10],[72,-26,72,-26,26,10],[-60,-36,-60,36,13,8],[-60,42,-18,46,12,8],[4,58,8,100,24,10],[-34,-74,-56,-46,11,8]],xo=[6,84],yo=(e,t)=>zt(44,26,Z(e-xo[0],t-xo[1])),Li=[[14,6,13],[-4,20,9],[6,84,30],[-58,8,10],[50,30,12],[8,-70,10],[-12,-98,9],[-36,44,9],[-46,-60,9],[24,42,8],[-56,26,9],[-44,38,8],[-10,44,8],[12,24,8],[-50,-45,8]],ds=(e,t)=>{let n=zt(.54,.66,tn(e*.03,7,t*.03,3))*.9;for(const o of Li)n=le(n,zt(o[2],o[2]*.45,Z(e-o[0],t-o[1])));return n*zt(.3,.55,tn(e*.17,1,t*.17,2)+n*.25)};function $a(){const e=[];for(const t of Ai)e.push(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]);for(const t of Ri)e.push(t[0],t[1],t[2],t[3],t[4],t[5],t[6],0);for(const t of Pi)e.push(t[0],t[1],t[2],t[3],t[4],t[5],t[6],0);for(const t of Ti)e.push(t[0],t[1],t[2],t[3],t[4],t[5],0,0);return new Float32Array(e)}function Za(e){const t=ki(e,he,we,St),n=t.nv,o=t.pos,s=Mi(e,he,we,St),c=new ArrayBuffer(n*16),i=new Float32Array(c),r=new Int8Array(c),f=new Float32Array(n*3),p=new Float32Array(n*3);for(let l=0;l<n;l++){const P=o[l*3],m=o[l*3+1],V=o[l*3+2],I=.8;let W=s(P-I,m,V)-s(P+I,m,V),K=s(P,m-I,V)-s(P,m+I,V),T=s(P,m,V-I)-s(P,m,V+I);const C=Z(W,K,T)||1;W/=C,K/=C,T/=C;const Y=Ct+P*qe,j=Ot+m*qe,ie=kt+V*qe;f[l*3]=i[l*4]=Y,f[l*3+1]=i[l*4+1]=j,f[l*3+2]=i[l*4+2]=ie,p[l*3]=W,p[l*3+1]=K,p[l*3+2]=T,r[l*16+12]=We(W*127),r[l*16+13]=We(K*127),r[l*16+14]=We(T*127),r[l*16+15]=127}const d=t.ni/6,g=new Uint8Array(d),b=new Uint32Array(Ee*Ee+1),S=new Float32Array(Ee*Ee).fill(1e9),z=new Float32Array(Ee*Ee).fill(-1e9);for(let l=0;l<d;l++){const P=t.idx[l*6]*3,m=Ae(ve((f[P]-Ct)/nn),0,Ee-1)+Ee*Ae(ve((f[P+2]-kt)/nn),0,Ee-1);g[l]=m,b[m+1]++;for(let V=0;V<6;V++){const I=f[t.idx[l*6+V]*3+1];I<S[m]&&(S[m]=I),I>z[m]&&(z[m]=I)}}for(let l=0;l<Ee*Ee;l++)b[l+1]+=b[l];const N=new Uint32Array(t.ni),B=b.slice();for(let l=0;l<d;l++){const P=B[g[l]]++*6;for(let m=0;m<6;m++)N[P+m]=t.idx[l*6+m]}return{vb:c,ib:N,nv:n,wp:f,wn:p,smp:s,start:b,lo:S,hi:z}}function Qa(e,t,n,o){const s=(v,h,y)=>v+he*(h+we*y),c=t.smp,i=(v,h,y)=>c((v-Ct)/qe,(h-Ot)/qe,(y-kt)/qe),r=Ee*Ee,f=(v,h)=>Ae(ve((v-Ct)/nn),0,Ee-1)+Ee*Ae(ve((h-kt)/nn),0,Ee-1),p=Array.from({length:r},()=>[]),d=Array.from({length:r},()=>[]);let g=0;const b=(v,h,y,x,E,_,u,a,w,k,L,q,D)=>{(k===1||!(g++%as))&&v[f(h,x)].push(h,y,x,E,_,u,k===1?a:a*(1+Ce/2),w,k,L,q,D)},S=(...v)=>{g++%as||P.push(...v)},z=[],N=Array.from({length:6},()=>Array.from({length:r},()=>[])),B=(v,h,y,x,E,_,u,a,w=1,k=0)=>{(v>3&&v<10?N[v-4][f(h,x)]:z[v]||=[]).push(h,y,x,E,_[0],_[1],_[2],_[3],u,a,w,k)},l=Array.from({length:us},()=>Array.from({length:r},()=>[])),P=[],m=(v,h,y)=>{const x=o[v];let E=x[3]-x[0],_=x[5]-x[2];const u=Z(E,_);return E/=u,_/=u,[x[0]+E*h-_*y,x[2]+_*h+E*y]},V=[],I=new Float32Array(he/2*(we/2)*(St/2)),W=[],K=(v,h)=>{const y=Ae(We((v-Ct)/qe),1,he-2),x=Ae(We((h-kt)/qe),1,St-2);W.length=0;let E=3;for(let _=we-2;_>=0;_--){const u=e[s(y,_,x)],a=e[s(y,_+1,x)];if(a<=0&&u>0){const w=Ot+(_+u/(u-a))*qe;W.push(w,Ue(E,0)-w)}else a>0&&u<=0&&(E=Ot+(_+.5)*qe)}return W},T=(v,h,y)=>{let E=i(v-.6,h,y)-i(v+.6,h,y),_=i(v,h-.6,y)-i(v,h+.6,y),u=i(v,h,y-.6)-i(v,h,y+.6);const a=Z(E,_,u)||1;return[E/a,_/a,u/a]},C=(v,h,y,x)=>{let E=v+x[0]*2.5,_=h+x[1]*2.5,u=y+x[2]*2.5,a=i(E,_,u);if(a>0)return null;for(let w=0;w<24;w++){const k=E-x[0]*.25,L=_-x[1]*.25,q=u-x[2]*.25,D=i(k,L,q);if(D>0){const G=a/(a-D),O=[fe(E,k,G),fe(_,L,G),fe(u,q,G)];return O.concat(T(O[0],O[1],O[2]))}E=k,_=L,u=q,a=D}return null},Y=()=>(A()*t.nv|0)*3,j=v=>{let h=Me(v[1])<.9?[v[2],0,-v[0]]:[1,0,0];const y=Z(...h);return h=h.map(x=>x/y),[h,[v[1]*h[2]-v[2]*h[1],v[2]*h[0]-v[0]*h[2],v[0]*h[1]-v[1]*h[0]]]},ie=(v,h,y,x)=>{for(const E of n)if(Z(v-E[0],y-E[2])<x&&h<E[1]+3&&h>E[1]-13)return!0;return!1},oe=(v,h,y=3)=>{for(const x of o)if(Z(v-x[0],h-x[2])<y)return!0;return!1},ge=(v,h,y,x,E,_=1)=>{const u=2+(A()<.6)+(A()<.3),a=A()*Te,w=M(.1,.28),k=M(.2,.55),L=M(.75,1.25),q=A()*Te,D=M(0,.11),G=M(.55,1.3)*_,O=(re,se)=>{const me=a+re*Te/u+se*w,Oe=k*(1-.6*se/x),De=D*se*se/x;return[v+ke(me)*Oe+ke(q)*De,y+Se(me)*Oe+Se(q)*De,me]};for(let re=0;re<u;re++)for(let se=0;se<x-1;se+=1.7){const me=O(re,se);b(p,me[0],h+se,me[1],2.1,me[2]+It/2,.1,.17,se,1,A(),A(),.3)}const J=ve(x*30*G);for(let re=0;re<J;re++){const se=Ge(A(),.9),me=se*x,Oe=O(A()*u|0,me),De=((.55+.75*A()*A())*(1-.5*se*se)*L+.25)*(E===1?1.25:1.15),Re=fe(M(.4,1),M(.15,.45),se),vt=E===1?A()<.8?3:4:E===2&&A()<.5?4:0;b(p,Oe[0],h+me,Oe[1],De,A()*Te,Re,De*(E===1?M(.09,.13):M(.15,.21))+.03,me,vt,A(),A(),M(.38,.95))}for(let re=ve(x*(E===1?16:13));re>0;re--){const se=A()*x,me=A()*Te,Oe=M(.15,.8)*(1-.5*se/x),De=D*se*se/x;S(v+ke(me)*Oe+ke(q)*De,h+se,y+Se(me)*Oe+Se(q)*De,se,A(),E===1?A():A()*.6,M(.018,.05),0)}const ee=We((v-Ct)/qe/2),ne=We((y-kt)/qe/2);for(let re=ve((h-Ot)/qe/2);re<=ve((h+x-Ot)/qe/2);re++)re>=0&&re<we/2&&ee>0&&ee<he/2-1&&ne>0&&ne<St/2-1&&(I[ee+he/2*(re+we/2*ne)]+=.17)},de=[[-32,-5,13,.85],[0,-86,46,1],[72,-26,27,.9],[-60,-4,11,.8],[0,-36,12,.55],[-17,-8,6,.8],[15,-8,6,.8],[-4,120,20,.4],[-45,-63,15,.9],[62,-26,12,.9],[-100,70,30,.8],[100,60,30,.8],[-95,-90,32,.8],[105,-85,30,.7]],Q=[[-5,-106.5,8],[4.6,-109.4,10],[14.2,-112.3,12],[-26,-100,6],[-20.5,-101.7,4.5],[-14.8,-104.5,6],[-7.5,-107.8,7],[4,112,11],[2,4,15],[42,22,12],[6,78,19],[-58,-16,8],[9,-66,9],[8,-76,8]],U=(v,h)=>{for(const x of Q)if(Z(v-x[0],h-x[1])<x[2])return 0;let y=zt(.52,.64,tn(v*.022,4,h*.022,3))*.5;for(const x of de)y=le(y,x[3]*zt(x[2],x[2]*.75,Z(v-x[0],h-x[1])));return y},$=new Set;He(1);const X=(v,h,y,x,E=1)=>{const _=ve(v/2.3)*4096+ve(h/2.3);if($.has(_))return;const u=K(v,h),a=[];for(let L=0;L<u.length;L+=2)u[L+1]>9&&a.push(L);if(!a.length)return;const w=a[A()*a.length|0],k=u[w];T(v,k,h)[1]<.55||!x&&n.some(L=>Z(v-L[0],h-L[2])<5)||($.add(_),ge(v,k-.3,h,Ue(u[w+1]-M(.8,5),x?M(30,42):M(15,40)),y,E))};for(const v of[[...m(0,11,-8.5),0],[...m(0,16,-10.5),0],[...m(0,21,-9),0],[...m(0,9,7),0],[...m(0,14,9.5),0],[...m(0,19,8),0],[...m(0,26,6),0],[...m(5,6.5,5.2),1],[...m(5,12,7),1],[...m(5,15,-8),0],[...m(5,22,-5),1],[...m(3,12,-5.5),0],[...m(3,16,5.5),0],[...m(3,20,-4.5),0],[...m(3,25,6),0],[...m(3,13,8),0],[...m(3,30,-7),0],[24,62,1],[-6,96,1],[20,96,2],[-10,70,0],[16,52,1],[...m(4,15,-9),0,1.2],[...m(4,19,-13),0,1.2],[...m(4,23,-8.5),0,1.2],[...m(4,25,-15),0,1.2],[...m(4,25,.5),2,1.2],[...m(4,27,-3),2,1.2],[...m(4,28,3.5),2,1.2],[...m(4,31,0),0,1.3],[...m(4,33,-5),0,1.3],[...m(4,33,5),0,1.3],[...m(4,21,9),0,1.2],[...m(4,27,11),0,1.2],[...m(2,6.5,-5.5),0,1.5],[...m(2,9.5,-8),0,1.3],[...m(2,8,6),0,1.4],[...m(2,12,3.6),0,1.3],[...m(2,17,-2.5),0,1.2],[...m(2,21,4),0,1.2],[...m(2,12,-4.5),2,1.2],[...m(2,27,-9),0,1.2],[...m(2,30,8.5),0,1.2],[...m(2,37,-3),0,1.1],[...m(2,13.5,6.5),0,1.3],[...m(2,14.5,-7),0,1.3],[...m(2,6.5,6.5),0,1.3],[...m(2,9,-8),2,1.3]])X(v[0],v[1],v[2],!0,v[3]);He(2);for(let v=0;v<15e3;v++){const h=A()*Te,y=Lt(A())*170,x=ke(h)*y,E=Se(h)*y;A()<U(x,E)&&X(x,E,yo(x,E)>.5&&A()<.5?1:A()<.03?2:0)}const ae=(v,h,y,x,E,_,u,a,w,k,L)=>{for(let q=0;q<x;q++){const D=A()*Te,G=A()*.5,O=M(_,u);b(p,v+ke(D)*G,h-.15,y+Se(D)*G,O,D,M(.05,k),M(a,w),L,E,A(),A(),M(.3,.8))}},xe=[[0,5,30],[42,30,24],[6,82,34],[-58,10,24],[4,-88,30],[-36,44,18],[-46,-60,20]],ot=(v,h)=>{let y=.4;for(const x of xe)y=le(y,zt(x[2],x[2]*.4,Z(v-x[0],h-x[1])));return y};He(3);for(let v=0;v<4e4;v++){const h=Y(),y=t.wp[h],x=t.wp[h+1],E=t.wp[h+2],_=t.wn[h+1];if(Z(y,E)>172||x>-6)continue;const u=ot(y,E),a=yo(y,E),w=A();if(!(ie(y,x,E,4)||Z(y+1,E-2)<9||oe(y,E,8))){if(_>.75&&w<.1*u)ae(y,x,E,8+A()*14|0,2,1,3,.13,.26,.6,2.5);else if(_>.6&&w<.1*u+.07*le(a,u*.4))ae(y,x,E,10+A()*18|0,A()<.8?3:4,.9,2.6,.14,.28,.9,1.5);else if(_<-.35&&w<.5*le(a,.2)){const k=12+A()*20|0;for(let L=0;L<k;L++)b(p,y+M(-.6,.6),x+.2,E+M(-.6,.6),M(.8,3.2),A()*Te,It-M(0,.4),M(.08,.18),0,a>.3||A()<.5?6:0,A(),A(),M(.3,.6))}else if(_>-.2&&_<.8&&w<.07){const k=ls(t.wn[h+2],t.wn[h]),L=5+A()*7|0;for(let q=0;q<L;q++)b(p,y,x,E,M(.5,1.4),k+M(-.9,.9),M(.3,1.1),M(.06,.12),.5,a>.4&&A()<.6?3:0,A(),A(),M(.2,.6))}}}He(4);for(const v of Li)for(let h=v[2]*v[2]*It*45;h>0;h--){const y=A()*Te,x=Lt(A())*v[2],E=v[0]+ke(y)*x,_=v[1]+Se(y)*x;if(A()>ds(E,_)+.12||oe(E,_))continue;const u=K(E,_);if(!u.length)continue;const a=u[u.length-2];if(T(E,a,_)[1]<.7)continue;const w=2+(A()*3|0),k=A()*Te;for(let L=0;L<w;L++)b(d,E,a-.03,_,M(.08,.26),k+L*Te/w+M(-.4,.4),M(.15,.85),M(.035,.07),0,5,A(),A(),M(.3,.7));if(A()<.3)for(let L=0;L<2;L++)b(d,E+M(-.2,.2),a-.04,_+M(-.2,.2),M(.2,.55),A()*Te,M(.05,.6),M(.03,.06),0,7,A(),A(),M(.3,.8));A()<.3&&S(E,a+M(.08,.22),_,0,A(),.82+A()*.18,M(.01,.02),0)}He(5);for(let v=0;v<62e4;v++){const h=Y();if(t.wn[h+1]<.72)continue;const x=t.wp[h]+M(-.45,.45),E=t.wp[h+2]+M(-.45,.45),_=t.wp[h+1];if(Z(x,E)>170||oe(x,E))continue;const u=ds(x,E),a=yo(x,E),w=A();if(u>.3&&w<u*.9)for(let k=0;k<4;k++)b(d,x+M(-.1,.1),_-.05,E+M(-.1,.1),M(.12,.34),A()*Te,M(.05,.75),M(.04,.08),0,5,A(),A(),M(.3,.7));else if(w<u*.9+.5*le(a,ot(x,E))*zt(.42,.6,tn(x*.09,9,E*.09,2)))for(let k=0;k<3;k++)b(d,x+M(-.1,.1),_-.05,E+M(-.1,.1),M(.25,.7),A()*Te,M(.1,.8),M(.05,.1),0,7,A(),A(),M(.3,.8))}const Fe=[],pt=[[-58,8,30,1],[0,0,30,.7],[6,84,36,.9],[4,-88,22,.6],[44,20,24,.5]],Pt=(v,h)=>{let y=.45;for(const x of pt)y=le(y,x[3]*zt(x[2],x[2]*.4,Z(v-x[0],h-x[1])));return y};He(6);for(let v=0;v<13e3;v++){const h=Y(),y=t.wp[h],x=t.wp[h+1],E=t.wp[h+2];if(Z(y,E)>170||x>-8||t.wn[h+1]<-.15||A()>Pt(y,E)||ie(y,x,E,3))continue;const _=[t.wn[h],t.wn[h+1],t.wn[h+2]],[u,a]=j(_),w=t.wn[h+1]>.85||A()<.35,k=w?2+A()*5|0:3+A()*9|0,L=A();for(let q=0;q<k;q++){const D=M(-1,1)*(.5+k*.13),G=M(-1,1)*(.5+k*.13),O=C(y+u[0]*D+a[0]*G,x+u[1]*D+a[1]*G,E+u[2]*D+a[2]*G,_);if(!O)continue;let J=O[3],ee=O[4]+(w?.9:1.1),ne=O[5];const re=Z(J,ee,ne);J/=re,ee/=re,ne/=re;const se=Rn(fs(J,ee,ne),_t(0,1,0,A()*Te)),me=w?M(.5,1.5):M(.35,.9)*(A()<.1?1.6:1);B(w?7+(A()*3|0):4+(A()*3|0),O[0]-J*.12*me,O[1]-ee*.12*me,O[2]-ne*.12*me,me,se,w?5:4,Ja(L+M(-.03,.03)),1,0)}!w&&A()<.3&&Fe.push([y+_[0],x+_[1]+.5,E+_[2]])}He(7);for(const v of[[-68,-6,9,260],[-66,6,7,160],[16,72,7,200],[-6,74,6,120],[-13,-2,6,80],[8,-88,8,160],[44,12,7,120],[-62,22,6,140],[-47,40,6,140],[-30,47,6,120],[-12,48,5,100],[14,28,6,140],[28,45,6,120],[-36,-76,6,130],[-49,-58,6,130],[-58,-38,6,120]]){let h=0;for(let y=0;y<4e5&&h<v[3];y++){const x=Y(),E=t.wp[x],_=t.wp[x+1],u=t.wp[x+2];if(Z(E-v[0],u-v[1])>v[2]||_>-14||t.wn[x+1]<-.1||ie(E,_,u,2.2))continue;h++;const a=t.wn[x+1]>.85||A()<.3,w=t.wn[x],k=t.wn[x+1]+(a?.9:1.1),L=t.wn[x+2],q=Z(w,k,L),D=a?M(.5,1.4):M(.35,.9)*(A()<.15?1.7:1);B(a?7+(A()*3|0):4+(A()*3|0),E-w/q*.1*D,_-k/q*.1*D,u-L/q*.1*D,D,Rn(fs(w/q,k/q,L/q),_t(0,1,0,A()*Te)),a?5:4,A(),1,0)}}const ft=[[-11,-11,-105,14,5],[-56,-19,-18,18,6],[10,-13,-88,22,7],[24,-15,-24,22,7],[-18,-12,4,14,6],[30,-14,30,16,6],[36,-12,-70,22,8],[-30,-13,-84,16,7],[-58,-14,0,14,6],[19,-13,98,18,6],[62,-9,34,14,6]];He(8);for(let v=0;v<9;v++){const h=A()*Te,y=M(60,150);ft.push([ke(h)*y,M(-20,-9),Se(h)*y,10+A()*12|0,M(5,9)])}for(const v of ft)for(let h=0;h<v[3];h++){const y=A()<.12?M(1.8,3.2):M(.35,1.5),x=v[0]+M(-1,1)*v[4],E=v[1]+M(-1,1)*v[4]*.6,_=v[2]+M(-1,1)*v[4];if(i(x,E,_)>-y)continue;const u=M(.12,.4),a=A();if(B(A()*4|0,x,Ue(E,-2-y),_,y,Pn(),1,a,1,u),y>1.1)for(let w=0;w<7;w++)B(A()*4|0,x+M(-1.6,1.6)*y,Ue(E,-2-y)+M(-1.4,1)*y,_+M(-1.6,1.6)*y,M(.1,.35),Pn(),1,a,1,u)}He(9);for(let v=0;v<2600;v++){const h=Y();if(t.wn[h+1]<.7||Z(t.wp[h],t.wp[h+2])>170||ie(t.wp[h],t.wp[h+1],t.wp[h+2],6))continue;const y=M(.25,1.3)*(A()<.1?2:1);B(A()*4|0,t.wp[h],t.wp[h+1]+y*.2,t.wp[h+2],y,Pn(),1,A(),1,0)}He(10);for(let v=0;v<6e4;v++){const h=Y(),y=t.wp[h],x=t.wp[h+1],E=t.wp[h+2],_=t.wn[h+1];if(Z(y,E)>172||x>-3||_>.8&&A()<.6||ie(y,x,E,3.5))continue;const u=(.35+2.1*Ge(A(),2.6))*(_>.8?.5:1),a=Pn();l[(u>1.15?3:0)+(A()*3|0)][f(y,E)].push(y-t.wn[h]*u*.3,x-_*u*.3,E-t.wn[h+2]*u*.3,u,a[0],a[1],a[2],a[3],1,A(),u>1.15?0:96,0)}He(11);for(let v=0;v<17e4;v++){const h=Y(),y=t.wp[h]+M(-.4,.4),x=t.wp[h+2]+M(-.4,.4),E=t.wp[h+1];if(t.wn[h+1]<.8||Z(y,x)>170||ie(y,E,x,1.3))continue;const _=.05+.3*Ge(A(),2),u=Pn();g++%as||l[6][f(y,x)].push(y,E-_*.25,x,_,u[0],u[1],u[2],u[3],1,A(),44,0)}const pn=(v,h)=>{const y=K(v,h);return y.length?y[y.length-2]:-45};B(10,-5,pn(-5,-4)-.6,-4,1,Rn(_t(0,1,0,1.2),Rn(_t(0,0,1,.16),_t(1,0,0,-.3))),2,.3,1,0),B(11,59.5,-23,6,1,Rn(_t(0,1,0,-It/2),Rn(_t(0,0,1,-.1),_t(1,0,0,.32))),3,.5,1,0),He(12);for(const v of[[7,3.2,1.3,4],[8.4,4.6,1,6],[9.6,2.6,1.5,4],[11,5,1.1,5],[8,-3.6,1.2,4],[12.5,2,1.2,6],[9,3.9,.8,4]]){const h=m(3,v[0],v[1]),y=o[3];let x=(y[0]-h[0])*.07,E=(y[2]-h[1])*.07;const _=Z(x,1,E);B(v[3],h[0],pn(h[0],h[1])-.1,h[1],v[2],fs(x/_,1/_,E/_),4,A(),1,0)}for(let v=0;v<9;v++){const h=A()*Te,y=-5+ke(h)*M(1.2,2.6),x=-4+Se(h)*M(1.5,4);B(6,y,pn(y,x)+.05,x,M(.4,.9),_t(0,1,0,A()*6),4,A(),1,0)}const Le=[[4,-44,-3],[4.5,-44,-3.5],[-1,-44,2],[2,-44,-1],[5.5,-44,-7],[3,-44,-9],[6,-44,-90],[8,-44,-84],[4,-44,-93],[-9,-44,3],[5,-35,-86],[9,-37,-92],[40,-44,20],[-56,-44,12],[10,-44,80],[-2,-44,30],[0,-44,-30],[12,-44,2],[6,-44,-2],[46,-44,30],[-20,-44,-103],[-52,-44,-12],[4,-44,70],[9,-44,-74],[4,-44,-78],[14,-44,26],[26,-44,40],[-45,-44,-64],[-55,-44,-40],[-58,-44,22],[-40,-44,40],[-14,-44,45],[-1,-44,-9],[-7,-44,-6]];He(13);for(const v of Fe)A()<.28&&Le.push(v);for(const v of Le){const h=90+A()*70|0,y=v[1]===-44?pn(v[0],v[2]):v[1];for(let x=0;x<h;x++){const E=A()<.24?M(.1,.3):M(.025,.08);V.push(v[0]+M(-.3,.3),y,v[2]+M(-.3,.3),E,A(),M(1.1,2.4)*(.6+E*3),-y-.2,M(.05,.16))}}const Yn=(v,h=1,y=1)=>{let x=0;const E=new Uint32Array(r+1);for(let q=0;q<r;q++)E[q]=x,x+=Math.ceil(v[q].length/12/h);E[r]=x;const _=new ArrayBuffer(x*36),u=new Float32Array(_),a=new Uint8Array(_),w=new Float32Array(r).fill(1e9),k=new Float32Array(r).fill(-1e9);let L=0;for(let q=0;q<r;q++){const D=v[q];for(let G=0;G<D.length;G+=12*h,L++){for(let ee=0;ee<8;ee++)u[L*9+ee]=D[G+ee];u[L*9+6]*=y,a[L*36+32]=D[G+8],a[L*36+33]=D[G+9]*255,a[L*36+34]=D[G+10]*255,a[L*36+35]=D[G+11]*255;const O=D[G+1],J=D[G+3];O-J<w[q]&&(w[q]=O-J),O+J>k[q]&&(k[q]=O+J)}}return{buf:_,n:x,start:E,lo:w,hi:k}},be=he/2,gt=we/2,xt=St/2,Yt=new Uint8Array(be*gt*xt*2);let dt=new Float32Array(be*xt).fill(1),dn=new Float32Array(be*xt),jt=new Float32Array(be*xt);for(let v=gt-1;v>=0;v--){for(let y=0;y<xt;y++)for(let x=0;x<be;x++){const E=x+be*y;jt[E]=(dt[x>0?E-1:E]+2*dt[E]+dt[x<be-1?E+1:E])*.25}for(let y=0;y<xt;y++)for(let x=0;x<be;x++){const E=x+be*y,_=(jt[y>0?E-be:E]+2*jt[E]+jt[y<xt-1?E+be:E])*.25,u=s(x*2,v*2,y*2),a=(e[u]+e[u+1]+e[u+he]+e[u+he+1]+e[u+he*we]+e[u+he*we+1]+e[u+he*we+he]+e[u+he*we+he+1])*.125,w=x+be*(v+gt*y),k=_*Ae(.5-a/1.5,0,1)*(1-Ue(I[w],.5));dn[E]=k,Yt[w*2]=Ae(.5-a/12,0,1)*255,Yt[w*2+1]=Ue(1,_)*255}const h=dt;dt=dn,dn=h}const $t=new Uint8Array(512*512*4);for(let v=0;v<512;v++)for(let h=0;h<512;h++){const y=(h+.5)/512*384-192,x=(v+.5)/512*384-192,E=(h+512*v)*4;$t[E]=ds(y,x)*255,$t[E+2]=yo(y,x)*255,$t[E+3]=zt(.42,.6,tn(y*.04,3,x*.04,3))*255}const vo=[];He(14);const hi=[[-2,-36,-10,15,520,.3,1,.945],[8,-30,-70,22,420,.32,-1],[48,-30,14,18,360,.3,1],[-58,-30,-8,11,420,.28,-1,.3],[8,-36,84,16,320,.28,1],[-90,-28,-70,25,300,.3,1],[95,-30,70,25,300,.3,-1],[0,-22,20,30,380,.34,-1],[-30,-30,-100,18,300,.3,1],[16,-36,30,12,300,.3,1],[-48,-34,-58,12,300,.3,-1],[-45,-35,38,14,320,.3,1]];for(const v of hi){const h=v[7]===void 0?A():v[7];for(let y=0;y<v[4];y++)vo.push(v[0],v[1],v[2],v[3],A(),v[6]*1.9/v[3],v[5],h)}const mo=[];for(const v of[[1,-28,3.5,14,3.012,.085,3.6,.1],[49,-31,24.5,5,.029,-.08,3.7,.4],[0,-14,-80,34,.3,.06,5.2,.7],[-50,-18,20,26,5,-.075,3.8,.55],[10,-16,86,26,2.2,.07,4.4,.85],[20,-11,-20,46,4.2,-.045,5.6,.25]])mo.push(...v);const jn=new Float32Array(9e3*4);for(let v=0;v<jn.length;v++)jn[v]=A();const Sn={data:[],ranges:[]};let ho=0;for(let v=0;v<12;v++){const h=z[v]||[];Sn.ranges.push([ho,h.length/12]),ho+=h.length/12;for(let y=0;y<h.length;y++)Sn.data.push(h[y])}const es=v=>{let h=0;const y=new Uint32Array(r+1);for(let a=0;a<r;a++)y[a]=h,h+=v[a].length/12;y[r]=h;const x=new Float32Array(h*12),E=new Float32Array(r).fill(1e9),_=new Float32Array(r).fill(-1e9);let u=0;for(let a=0;a<r;a++){const w=v[a];for(let k=0;k<w.length;k+=12){for(let L=0;L<12;L++)x[u++]=w[k+L];E[a]=Ue(E[a],w[k+1]-3),_[a]=le(_[a],w[k+1]+3)}}return{data:x,n:h,start:y,lo:E,hi:_}};return{gy:pn,glints:new Float32Array(P),chunks:l.map(es),props:N.map(es),big:Yn(p),bigF:Yn(p,2,1.5),small:Yn(d),solids:{data:new Float32Array(Sn.data),ranges:Sn.ranges},bubbles:new Float32Array(V),volD:Yt,gm:$t,fish:new Float32Array(vo),mantas:new Float32Array(mo),snow:jn}}const Ja=e=>e-ve(e);function ut(e,t=2,n=t>2){Ce>1&&t>1&&t--,He(100+e);const o=[];for(let s=0;s<4;s++){const c=Pn();o.push([c[0],c[1],c[2],M(.8,.98)]);const i=Z(c[0],c[1],c[2])||1;o[s][0]/=i,o[s][1]/=i,o[s][2]/=i}return Fa(t,(s,c,i)=>{let r=1+(tn(s*1.6+e,c*1.6,i*1.6,2)-.5)*.9+(n?(tn(s*4+e,c*4,i*4,2)-.5)*.25:0),f=s*r,p=c*r*.8,d=i*r;for(const g of o){const b=f*g[0]+p*g[1]+d*g[2]-g[3];b>0&&(f-=g[0]*b,p-=g[1]*b,d-=g[2]*b)}return[f,p,d]})}function vs(e,t,n,o=0){const s=new gn,c=[];for(const[i,r,f]of e){const p=[];for(let d=0;d<t;d++){const g=d/t*Te,b=i*(1+n*(tn(ke(g)*1.5+r*2,r*3,Se(g)*1.5,2)-.5)+.07*ke(o*g+r*1.5));p.push(s.v(ke(g)*b,r,Se(g)*b,f))}c.push(p)}for(let i=0;i<c.length-1;i++)for(let r=0;r<t;r++){const f=(r+1)%t;s.quad(c[i][r],c[i+1][r],c[i+1][f],c[i][f])}return s}function bo(e,t=Ce>1){He(200+e);const n=new gn,o=i=>{const r=Z(...i)||1;return i.map(f=>f/r)},s=(i,r,f,p,d)=>{const g=[i];let b=i;for(let S=0;S<3;S++)r=o([r[0]+M(-.3,.3),r[1]+M(-.1,.3),r[2]+(e?M(-.05,.05):M(-.3,.3))]),b=[b[0]+r[0]*p/3,b[1]+r[1]*p/3,b[2]+r[2]*p/3],g.push(b);if(d||g.push([b[0]+r[0]*f*1.6,b[1]+r[1]*f*1.6,b[2]+r[2]*f*1.6]),t?n.tube(d?[g[0],g[3]]:[g[0],g[3],g[4]],S=>(S>1?f*.36:f*(1-.22*S))*1.25,3,!0,S=>Ae(1-(d+1-S)/5,0,1)):n.tube(g,S=>S>3?f*.36:f*(1-.22*S/3),e?5:6,!0,S=>Ae(1-(d+1-S/3)/5,0,1)),d>0){const S=2+(A()<.5);for(let z=0;z<S;z++)s(b,o([r[0]+M(-.8,.8),r[1]+M(-.1,.5),r[2]+(e?M(-.08,.08):M(-.8,.8))]),f*.78,p*.8,d-1)}},c=e?1:2+(A()*2|0);for(let i=0;i<c;i++)s([M(-.08,.08),0,M(-.08,.08)],o([M(-.5,.5),1,e?0:M(-.5,.5)]),e?.06:.08,e?.5:.45,3);return n}function e0(){He(210);const e=new gn;for(let t=0;t<9;t++){const n=A()*Te,o=M(0,.28),s=M(.45,1.1),c=M(.07,.12),i=M(.05,.3),r=[];for(let g=0;g<=4;g++)r.push([ke(n)*(o+i*g/4*s),s*g/4,Se(n)*(o+i*g/4*s)]);e.tube(r,g=>c*(.8+.25*g/4),12,!1,g=>.35+.65*g/4);const f=r[4],p=e.p.length/3,d=e.v(f[0],f[1]-c*1.2,f[2],.05);for(let g=0;g<12;g++)e.tri(p-12+g,p-12+(g+1)%12,d)}return e}function t0(){const e=[],t=(B,l)=>{for(let P=0;P<B.length-1;P++)e.push([...B[P],...B[P+1],l])};t([[0,-1.6,3.7,1.2],[0,1.8,2.35,.98],[0,4.6,1,.76],[0,6.9,.1,.6]],.8),t([[0,6.6,.1,.72],[1.9,7.9,0,.98],[3.9,8.8,-.1,.9],[5.7,9.8,-.25,.64],[7,11.2,-.4,.38],[7.7,12.8,-.55,.2],[7.9,14.1,-.65,.1]],.18),t([[0,6.6,.1,.72],[-1.7,8.3,.05,.96],[-3.3,9.7,-.05,.88],[-4.7,11.2,-.2,.64],[-5.6,12.9,-.4,.38],[-6,14.6,-.5,.2],[-5.9,15.9,-.6,.1]],.18);const n=(B,l,P)=>{let m=1e9;for(const V of e){const I=V[8],W=P/I,K=V[2]/I,T=V[6]/I,C=V[4]-V[0],Y=V[5]-V[1],j=T-K,ie=B-V[0],oe=l-V[1],ge=W-K,de=Ae((ie*C+oe*Y+ge*j)/(C*C+Y*Y+j*j),0,1),Q=(Z(ie-C*de,oe-Y*de,ge-j*de)-fe(V[3],V[7],de))*I,U=.45,$=le(U-Me(m-Q),0)/U;m=Ue(m,Q)-$*$*U*.25}return m},o=.09,s=-7.6,c=-2.6,i=-2.2,r=186,f=216,p=76,d=new Float32Array(r*f*p);for(let B=0;B<p;B++)for(let l=0;l<f;l++)for(let P=0;P<r;P++)d[P+r*(l+f*B)]=-n(s+P*o,c+l*o,i+B*o);const g=ki(d,r,f,p),b=Mi(d,r,f,p),S=new ArrayBuffer(g.nv*16),z=new Float32Array(S),N=new Int8Array(S);for(let B=0;B<g.nv;B++){const l=g.pos[B*3],P=g.pos[B*3+1],m=g.pos[B*3+2],V=.7;let I=b(l-V,P,m)-b(l+V,P,m),W=b(l,P-V,m)-b(l,P+V,m),K=b(l,P,m-V)-b(l,P,m+V);const T=Z(I,W,K)||1;z[B*4]=s+l*o,z[B*4+1]=c+P*o,z[B*4+2]=i+m*o,N[B*16+12]=We(I/T*127),N[B*16+13]=We(W/T*127),N[B*16+14]=We(K/T*127),N[B*16+15]=127}return{vb:S,ib:new Uint32Array(g.idx),nv:g.nv}}function n0(){He(220);const e=new gn,t=17,n=5.6,o=7.6,s=l=>n*Ge(le(1-Ge(Me(l/t),l<0?3.6:2.6),0),.5),c=l=>o*(1-.36*Ge(Me(l/t),2.5)),i=l=>.5+(l>0?3:3.8)*Ge(Me(l/t),2.2),r=(l,P,m=0)=>{const V=s(l)+m,I=c(l)+m,W=i(l);return[l,W-(I+W)*Ge(le(ke(P),0),.66),V*Math.sign(P)*Ge(Me(Se(P)),.8)]},f=l=>{const P=Z(l[1]+.5,l[2]*1.3)||1;return[0,(l[1]+.5)/P,l[2]*1.3/P]},p=()=>[0,1,0],d=[];for(let l=0;l<=44;l++){const P=fe(-t-1,t+2.4,l/44),m=le(Me(P)/t-.78,0)*4.2;d.push([P,-c(Ae(P,-t,t))-.3+m*m*m*4.2,0])}e.sweep(d,.55,.95,p);for(let l=-t+.7;l<t-.3;l+=.8){const P=A()<.1?M(-.9,-.2):-It/2,m=A()<.1?M(.2,.9):It/2,V=[];for(let I=0;I<=16;I++)V.push(r(l,fe(P,m,I/16)));e.sweep(V,.24,.3,f)}const g=M(-6,2),b=A()<.5?1:-1,S=[[g,b*.8,3.2,.42],[7,-b*.95,2.4,.34],[12,b*.5,1.7,.28],[-11,-b*.55,2.1,.3]],z=(l,P)=>{for(const m of S){const V=(l-m[0])/m[2],I=(P-m[1])/m[3];if(V*V+I*I<1+.45*Se(l*3.1+P*9))return!0}return!1},N=14,B=[];for(let l=-t+.35;l<=t-.3;l+=.85)B.push(l);for(let l=0;l<N;l++){const P=fe(-1.5,1.5,l/N),m=fe(-1.5,1.5,(l+1)/N),V=P+m<0?-1:1,I=V<0?m:P,W=V<0?P:m;let K=null;for(const T of B){const C=[e.v(...r(T,I,.27)),e.v(...r(T,W,.14)),e.v(...r(T,I,.1)),e.v(...r(T,W,.1))];K&&!z(T-.42,(P+m)/2)&&(V>0?(e.quad(K[0],K[1],C[1],C[0]),e.quad(K[2],C[2],C[3],K[3])):(e.quad(K[0],C[0],C[1],K[1]),e.quad(K[2],K[3],C[3],C[2]))),K=C}}for(const l of[-1,1]){let P=[];for(let m=-t+.6;m<=t-.6;m+=1)P.push(r(m,l*It/2,.2));e.sweep(P,.3,.28,p);for(let m=0;m<3;m++){P=[];for(let V=-t+.4;V<=-t+8.5-m;V+=.9)P.push([V,i(V)+.55+m*.86,l*(le(s(V),2.6)+.15)]);e.sweep(P,.82,.09,()=>[0,0,l])}}for(let l=-3;l<i(-t)+3;l+=.86){const P=le(1.2,2.9*zt(-4.5,1.5,l));A()<.9&&e.sweep([[-t+.35,l,-P],[-t+.35,l,P]],.82,.1,()=>[1,0,0])}for(let l=-t+2;l<t-2;l+=M(1.8,3.2))e.sweep([[l,i(l)-.25,-s(l)],[l,i(l)-.2,0],[l,i(l)-.25,s(l)]],.26,.26,p);for(let l=-3.9;l<=3.9;l+=.62){let P=-t+M(1,5);for(;P<t-4;){const m=Ue(P+M(3,9),t-3.5);if(A()<.6){const V=[];for(let I=P;I<=m;I+=1)s(I)>Me(l)+.3&&V.push([I,i(I)-.05,l]);V.length>1&&e.sweep(V,.56,.07,p)}P=m+M(.5,3)}}return e.sweep([[7,-o+.6,0],[7.1,1,0],[7.4,8,.3],[7.8,15,.8]],l=>.62-l*.1,l=>.62-l*.1,()=>[1,0,0]),e.sweep([[7.5,9.5,-5.2],[7.5,9.6,.3],[7.5,9.2,5.6]],.26,.26,p),e.sweep([[7.7,13.2,-3.2],[7.7,13.3,3.6]],.2,.2,p),e.sweep([[-3,-o+.6,0],[-3.2,1,.2],[-3.9,6,1],[-5.2,9.5,2.6]],l=>.74-l*.1,l=>.74-l*.1,()=>[1,0,0]),e.sweep([[t+1.4,2.6,0],[t+8,5.2,.2]],.34,.34,p),e}function o0(){const e=new gn,t=72,n=22,o=[];for(let i=0;i<=t;i++){const r=i/t*2-1,f=Me(r);let p=.52-.74*Ge(f,1.35)+.07*hn(-Ge((f-.13)/.05,2))-.05*hn(-Ge(f/.05,2))-.08*Ge(f,5);const d=-.5+.3*Ge(f,.8)+.02-.08*Ge(f,5);p<d+.004&&(p=d+.004);const g=.08*Ge(1-f,1.15)+.004+.12*hn(-Ge(r/.2,2)),b=[];for(let S=0;S<n;S++){const z=S/n*Te;b.push(e.v(r,g*Se(z)*(.62+.38*ke(z)),fe(d,p,.5+.5*ke(z)),r))}o.push(b)}for(let i=0;i<t;i++)for(let r=0;r<n;r++){const f=(r+1)%n;e.quad(o[i][r],o[i+1][r],o[i+1][f],o[i][f])}const s=[];for(let i=0;i<=8;i++)s.push([0,0,-.42-i*.19]);const c=e.p.length/3;e.tube(s,i=>.016*(1-i/9),4,!0);for(let i=c;i<e.aux.length;i++)e.aux[i]=0;for(const i of[-1,1]){const r=e.p.length/3;e.tube([[i*.12,-.02,.48],[i*.135,-.05,.6],[i*.115,-.09,.69],[i*.085,-.125,.74]],f=>.045*(1-f/4.4),6,!0);for(let f=r;f<e.aux.length;f++)e.aux[f]=i*.1}return e}function s0(){const e=new gn,t=[.5,.3,.05,-.22,-.34],n=[.01,.13,.17,.09,.035],o=[.01,.05,.065,.03,.012],s=[];for(let p=0;p<5;p++){const d=[];for(let g=0;g<6;g++){const b=g/6*Te;d.push(e.v(t[p],Se(b)*n[p],ke(b)*o[p]))}s.push(d)}for(let p=0;p<4;p++)for(let d=0;d<6;d++){const g=(d+1)%6;e.quad(s[p][d],s[p+1][d],s[p+1][g],s[p][g])}const c=e.v(-.33,0,0),i=e.v(-.56,.2,0),r=e.v(-.47,0,0),f=e.v(-.56,-.2,0);return e.tri(c,i,r),e.tri(c,r,f),e}let Vt,ms,hs=!1;const Ci=.78;function i0(e){const t=e.sampleRate,n=(Q,U,...$)=>{const X=new Q(e,U);for(const ae of $)X.connect(ae);return X.start&&X.start(),X},o=(Q,...U)=>n(GainNode,{gain:Q},...U),s=(Q,U,$,...X)=>n(BiquadFilterNode,{type:Q,frequency:U,Q:$},...X),c=(Q,U,$)=>n(OscillatorNode,{frequency:Q},o(U,$)),i=(Q,U)=>{const $=t*Q|0,X=new AudioBuffer({length:$,numberOfChannels:2,sampleRate:t});return U(X.getChannelData(0),$),U(X.getChannelData(1),$),X},r=i(11,(Q,U)=>{for(let $=0,X=0;$<U+4096;$++)if(X=(X+.02*(A()*2-1))/1.02,$<U)Q[$]=X*3.5;else{const ae=($-U)/4096;Q[$-U]=Q[$-U]*ae+X*3.5*(1-ae)}}),f=i(5,(Q,U)=>{for(let $=0,X=0;$<U;$++){const ae=$/t;X+=(A()*2-1-X)*(.04+.5*hn(-ae*2)),Q[$]=X*(1-hn(-ae*30))*hn(-ae*1.5)*(1-$/U)}}),p=n(DynamicsCompressorNode,{threshold:-6,knee:6,ratio:20,attack:.003,release:.3},e.destination),d=ms=o(0,p),g=n(ConvolverNode,{buffer:f},d),b=(Q,...U)=>n(AudioBufferSourceNode,{buffer:r,loop:!0,playbackRate:Q},...U),S=o(.34,d);b(1,s("lowpass",150,.7,S)),c(.07,.11,S.gain),c(.113,.08,S.gain);const z=o(.25,d),N=o(1,z),B=o(0,d),l=s("bandpass",300,.9,B);b(.63,s("bandpass",420,.5,N),l),c(.09,.3,N.gain),c(.151,.25,N.gain);const P=o(1,d,o(1.5,g));[73.42,110,164.81,246.94,369.99].forEach((Q,U)=>{const $=o(.022-U*.003,P);n(OscillatorNode,{frequency:Q},$),n(OscillatorNode,{frequency:Q+M(.03,.11)},$)});const m=(Q,U,$)=>Array.from({length:Q},()=>{const X=n(StereoPannerNode,{},d,o(U,g)),ae=o(0,X);return{p:X,g:ae,o:n(OscillatorNode,{type:$},ae)}}),V=m(4,.12),I=m(3,1.2),W=m(2,2,"triangle"),K=(Q,U,$,X,ae,xe,ot)=>{const Fe=Q.shift(),pt=Fe.o.frequency,Pt=Fe.g.gain;Q.push(Fe),Fe.p.pan.setValueAtTime(M(-.7,.7),U),pt.setValueAtTime($,U),pt.exponentialRampToValueAtTime(X,U+ae),Pt.setValueAtTime(0,U),Pt.linearRampToValueAtTime(xe,U+ot),Pt.setTargetAtTime(0,U+ot,(ae-ot)/5)},T=[0,2,5,7,9,12,14,17,19];let C=e.currentTime,Y=C+1.5,j=C+5,ie=C+12,oe=R[Qe],ge=R[Je],de=R[et];return d.gain.setTargetAtTime(Ci,C,1),()=>{const Q=e.currentTime,U=Q+.05,$=Q-C;if($<=0)return;let X=Z(R[Qe]-oe,R[Je]-ge,R[et]-de)/$;X>60&&(X=0),C=Q,oe=R[Qe],ge=R[Je],de=R[et],B.gain.setTargetAtTime(.5*Ge(Ue(X/26,1),1.2),U,.3),l.frequency.setTargetAtTime(220+X*14,U,.3);const ae=Ae(1+ge/30,0,1);if(z.gain.setTargetAtTime(.25+.55*ae*ae,U,.5),U>Y){let xe=U;for(let ot=1+A()*A()*6|0;ot--;){const Fe=M(380,1300);K(V,xe,Fe,Fe*M(1.4,2.2),.05+40/Fe,M(.03,.08),.006),xe+=M(.07,.2)}Y=xe+M(.5,5)}if(U>j){const xe=440*Ge(2,T[A()*9|0]/12);K(I,U,xe,xe,5,M(.02,.04),.03),j=U+M(2.5,9)}if(U>ie){let xe=U;for(let ot=2+A()*2|0;ot--;){const Fe=M(170,380),pt=M(1.6,3.2);K(W,xe,Fe,Fe*M(.6,1.7),pt,.08,pt*.4),xe+=pt*.8}ie=xe+M(20,50)}}}function Cn(){document.hidden||F.hostSuspended||_e||(Vt||(Vt=new AudioContext({latencyHint:"playback"}),setInterval(i0(Vt),100)),Vt.state==="suspended"&&!document.hidden&&Vt.resume())}const Vi=()=>{!Vt||!ms||(hs=!hs,ms.gain.setTargetAtTime(hs?0:Ci,Vt.currentTime,.08))};document.addEventListener("visibilitychange",()=>{window.__abyssalV3&&(document.hidden||F.hostSuspended||_e?ao():(Cn(),Rt.play().catch(()=>{})))});function Mt(e,t,n){const o=(e-Ct)/qe-Fn,s=(t-Ot)/qe,c=(n-kt)/qe-Fn,i=ve(o),r=ve(s),f=ve(c);if(i<1||i>=Et*4-2||f<1||f>=Et*4-2||r<5||r>=we-5)return 1;const p=(S,z,N)=>{const B=Ps[(S>>2)+Et*((z>>2)+we/4*(N>>2))];return B>1?Jn[(B-2)*64+(S&3)+4*(z&3)+16*(N&3)]/127:B?1:-1},d=o-i,g=s-r,b=c-f;return fe(fe(fe(p(i,r,f),p(i+1,r,f),d),fe(p(i,r+1,f),p(i+1,r+1,f),d),g),fe(fe(p(i,r,f+1),p(i+1,r,f+1),d),fe(p(i,r+1,f+1),p(i+1,r+1,f+1),d),g),b)}const xn=[[0,0,0,.7],[0,0,-1.18,.72],[0,0,1.35,.75],[0,0,1.95,.4],[0,1.64,-.6,.55],[0,-1.02,2.35,.58]];for(const e of[-.7,.5])for(const t of[[1.1,0],[-1.1,0],[0,1.1],[0,-1.1],[.8,.8],[-.8,.8],[.8,-.8],[-.8,-.8]])xn.push([t[0],t[1],e,.68]);for(const e of[-1,1])xn.push([e*1.84,-.72,1.28,.44]);function gs(e,t){const n=ke(t),o=Se(t);return[e[0]*n-e[2]*o,e[1],e[0]*o+e[2]*n]}function xs(e,t=0){let n=-1/0;for(const o of xn){const s=gs(o,t);n=le(n,Mt(e[0]+s[0],e[1]+s[1],e[2]+s[2])+o[3])}return n}function r0(e){const t=[];for(let b=0;b<Ut.length;b+=6){const S=Ut[b],z=Ut[b+2];let N=le(Ut[b+1]+3.2,e(S,z)+4.1);for(;xs([S,N,z])>-.04&&N<-3.5;)N+=.5;t.push([S,N,z])}const n={position:[6,-43.6,12],spec:window.V3Geometry.castleSpec},o={position:[6,-35.1,12],radius:4.8},s=[6,-35.1,26],c={position:[-54,-45.25,40]},i={position:[-64,-43.9,-50]},r=[{id:"castle",name:"\u6D77\u5173\u57CE\u5821",position:o.position,approach:s,heading:0},{id:"lighthouse",name:"\u8FF7\u96FE\u706F\u5854",position:[-54,-26,40],approach:[-45.6,-34.2,47.8],heading:-.9273},{id:"wreck",name:"\u7901\u6E7E\u6C89\u8239",position:[-64,-39.4,-50],approach:[-64,-37.5,-36],heading:0}],f=[[6,-35.1,26],[6,-38,44],[-22,-38,44],[-36,-38,44],[-45.6,-38,47.8],[-45.6,-34.2,47.8],[-60,-35,52],[-64,-35,40],[-64,-35,25],[-60,-35,8],[-60,-35,-16],[-60,-35,-30],[-64,-37.5,-36]],p=f.slice(1).map((b,S)=>Z(...b.map((z,N)=>z-f[S][N]))),d=p.reduce((b,S)=>b+S,0),g=[];for(const[b,S,z]of[["pearl",50,.35],["shell",20,.75]])for(let N=0;N<S;N++){let B=(N+z)/S*d,l=0;for(;l<p.length-1&&B>p[l];)B-=p[l++];const P=f[l],m=f[l+1],V=B/p[l];g.push({id:b+"-"+N,type:b,position:P.map((I,W)=>fe(I,m[W],V)),collected:!1})}return{items:g,route:f,gate:o,spawn:s,castle:n,lighthouse:c,wreck:i,landmarks:r}}const ue=e=>document.getElementById(e),it=ue("c"),Bi=ue("i"),wo=document.body,bc=matchMedia("(orientation:portrait) and (pointer:coarse)");let Ni=0,ys;const Vn=(e,t,n)=>{ys||(ue("s").textContent=e);const o=ue("b").animate({transform:[`scaleX(${Ni})`,`scaleX(${t})`]},{duration:n,fill:"forwards",easing:"cubic-bezier(.3,.5,.5,1)"});return Ni=t,new Promise(s=>{o.ready.then(()=>setTimeout(s)),setTimeout(s,document.hidden?0:1e3)})},qi=e=>{throw new Error(e,{cause:1})};navigator.gpu||qi("\u9700\u8981 WebGPU\uFF0C\u8BF7\u7528\u684C\u9762 Chrome \u6216 Edge \u6253\u5F00\u3002");const bs=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});bs||qi("\u672A\u627E\u5230 WebGPU \u663E\u5361\uFF0C\u8BF7\u68C0\u67E5\u6D4F\u89C8\u5668\u786C\u4EF6\u52A0\u901F\u3002"),ue("w").hidden=!!navigator.userAgentData;const ws=bs.features.has("timestamp-query"),te=await bs.requestDevice({requiredFeatures:ws?["timestamp-query"]:[]});te.addEventListener("uncapturederror",e=>console.error("GPU: "+e.error.message)),te.lost.then(e=>{e.reason!=="destroyed"&&(Ce<2&&(mn("customsCastleV2",Ce+1),location.reload()),ys=wo.className="l e",ue("s").textContent="\u663E\u5361\u8FDE\u63A5\u5DF2\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D\u3002")});const Fi=it.getContext("webgpu"),zs=navigator.gpu.getPreferredCanvasFormat(),Ke=te.queue,rt="rgba16float",on="depth32float",ye=GPUTextureUsage,pe=GPUBufferUsage,Bn=GPUShaderStage,mt=e=>te.createShaderModule({code:e}),Ye=(e,t)=>{const n=te.createBuffer({size:e.byteLength+3&-4,usage:t|pe.COPY_DST});return Ke.writeBuffer(n,0,e.buffer||e,e.byteOffset||0,e.byteLength),n},at=(e,t,n,o,s={})=>te.createTexture({size:[e,t,s.d||1],format:n,usage:o,mipLevelCount:s.mips||1,sampleCount:s.samples||1,dimension:s.d?"3d":"2d"}),Ii=te.createSampler({addressModeU:"repeat",addressModeV:"repeat",magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",maxAnisotropy:Ce>1?1:8}),zo=te.createSampler({magFilter:"linear",minFilter:"linear"}),_i=te.createSampler({compare:"less-equal",magFilter:"linear",minFilter:"linear"}),$n=at(go,go,on,ye.RENDER_ATTACHMENT|ye.TEXTURE_BINDING),a0=at(1,1,on,ye.RENDER_ATTACHMENT|ye.TEXTURE_BINDING),Ss=at(cs,cs,rt,ye.RENDER_ATTACHMENT|ye.TEXTURE_BINDING,{mips:5}),So=at(1024,1024,"rgba8unorm",ye.RENDER_ATTACHMENT|ye.TEXTURE_BINDING,{mips:11}),ks=at(he/2,we/2,"rg8unorm",ye.TEXTURE_BINDING|ye.COPY_DST,{d:St/2}),Oi=at(512,512,"rgba8unorm",ye.TEXTURE_BINDING|ye.COPY_DST),Bt=new Float32Array(60),Dt=new Float32Array(60),ko=te.createBuffer({size:240,usage:pe.UNIFORM|pe.COPY_DST}),Di=te.createBuffer({size:240,usage:pe.UNIFORM|pe.COPY_DST}),Ui=new Float32Array(4),Gi=te.createBuffer({size:16,usage:pe.UNIFORM|pe.COPY_DST}),Nt=Bn.VERTEX|Bn.FRAGMENT,Ms=te.createBindGroupLayout({entries:[{binding:0,visibility:Nt,buffer:{}},{binding:1,visibility:Nt,sampler:{}},{binding:2,visibility:Nt,sampler:{}},{binding:3,visibility:Nt,sampler:{type:"comparison"}},{binding:4,visibility:Nt,texture:{sampleType:"depth"}},{binding:5,visibility:Nt,texture:{}},{binding:6,visibility:Nt,texture:{}},{binding:7,visibility:Nt,texture:{viewDimension:"3d"}},{binding:8,visibility:Nt,texture:{}}]}),Wi=(e,t)=>te.createBindGroup({layout:Ms,entries:[{binding:0,resource:{buffer:e}},{binding:1,resource:Ii},{binding:2,resource:zo},{binding:3,resource:_i},{binding:4,resource:t.createView()},{binding:5,resource:Ss.createView()},{binding:6,resource:So.createView()},{binding:7,resource:ks.createView()},{binding:8,resource:Oi.createView()}]}),Mo=Wi(ko,$n),Es=Wi(Di,a0),Ki=te.createPipelineLayout({bindGroupLayouts:[Ms]}),Xi=te.createBindGroupLayout({entries:[{binding:0,visibility:Bn.FRAGMENT,texture:{}},{binding:1,visibility:Bn.FRAGMENT,sampler:{}}]}),c0=te.createPipelineLayout({bindGroupLayouts:[Xi]}),Hi=mt(Oa),Zn=(e,t,n)=>te.createRenderPipeline({layout:c0,vertex:{module:Hi,entryPoint:"vs"},fragment:{module:Hi,entryPoint:e,targets:[{format:t,blend:n?{color:{srcFactor:"one",dstFactor:"one"},alpha:{srcFactor:"one",dstFactor:"one"}}:void 0}]}}),l0=Zn("fsMip","rgba8unorm"),f0=Zn("fsMip",rt),u0=Zn("fsDown0",rt),p0=Zn("fsDown",rt),d0=Zn("fsUp",rt,!0),Eo=e=>te.createBindGroup({layout:Xi,entries:[{binding:0,resource:e},{binding:1,resource:zo}]}),yn=(e,t)=>({view:e,loadOp:t?"clear":"load",storeOp:"store",clearValue:[0,0,0,0]}),je=(e,t,n)=>({shaderLocation:e,offset:t,format:n}),Nn={arrayStride:16,attributes:[je(0,0,"float32x3"),je(1,12,"snorm8x4")]},Ao={arrayStride:48,stepMode:"instance",attributes:[je(2,0,"float32x4"),je(3,16,"float32x4"),je(4,32,"float32x4")]},Qn={arrayStride:36,stepMode:"instance",attributes:[je(0,0,"float32x4"),je(1,16,"float32x4"),je(2,32,"unorm8x4")]},Yi={arrayStride:32,stepMode:"instance",attributes:[je(2,0,"float32x4"),je(3,16,"float32x4")]},ji={arrayStride:32,stepMode:"instance",attributes:[je(0,0,"float32x4"),je(1,16,"float32x4")]},v0={arrayStride:16,stepMode:"instance",attributes:[je(0,0,"float32x4")]},ht=(e,t,n,o,s={})=>te.createRenderPipeline({layout:Ki,vertex:{module:e,entryPoint:t,buffers:o,constants:s.constants},fragment:{module:e,entryPoint:n,targets:[{format:rt,blend:s.blend}]},primitive:{topology:s.strip?"triangle-strip":"triangle-list",cullMode:s.cull||"none"},depthStencil:{format:on,depthWriteEnabled:!s.blend,depthCompare:"greater"},multisample:{count:Tt}}),As=(e,t,n,o={})=>te.createRenderPipeline({layout:Ki,vertex:{module:e,entryPoint:t,buffers:n,constants:o.constants},primitive:{topology:o.strip?"triangle-strip":"triangle-list",cullMode:o.cull||"none"},depthStencil:{format:on,depthWriteEnabled:!0,depthCompare:"less",depthBias:2,depthBiasSlopeScale:1.5}});await Vn("\u51C6\u5907\u539F\u7248\u6750\u8D28\u2026",.05,300);const Ro=mt(Ua),qn=mt(Ga),$i=mt(Wa),Zi=mt(Ka),Qi=mt(Xa),m0=ht(Ro,"vs","fs",[Nn,Ao],{cull:"back"}),h0=ht(Ro,"vs","fs",[Nn,Ao]),g0=ht(qn,"vs","fs",[Qn],{strip:!0,constants:{ROWS:9}}),x0=ht(qn,"vs","fs",[Qn],{strip:!0,constants:{ROWS:5}}),y0=ht(qn,"vs","fs",[Qn],{strip:!0,constants:{ROWS:3,FAR:70}}),b0=ht(qn,"vs","fs",[Qn],{strip:!0,constants:{ROWS:3}}),w0=ht($i,"vsFish","fsFish",[Nn,Yi]),z0=ht($i,"vsManta","fsManta",[Nn,Yi]),S0=ht(Zi,"vs","fs",[],{strip:!0}),k0=ht(Zi,"vsB","fsB",[],{strip:!0}),M0=ht(Qi,"vsBub","fsBub",[ji],{strip:!0,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}),Ji={color:{srcFactor:"one",dstFactor:"one"},alpha:{srcFactor:"one",dstFactor:"one"}},E0=ht(Qi,"vsSnow","fsSnow",[v0],{strip:!0,blend:Ji}),A0=ht(qn,"vsGl","fsGl",[ji],{strip:!0,blend:Ji,constants:{ROWS:7}}),R0=As(Ro,"vs",[Nn,Ao]),P0=As(Ro,"vs",[Nn,Ao],{cull:"front"}),T0=As(qn,"vs",[Qn],{strip:!0,constants:{ROWS:3}}),er=mt(Da),tr=te.createRenderPipeline({layout:"auto",vertex:{module:er,entryPoint:"vs"},fragment:{module:er,entryPoint:"fs",targets:[{format:rt}]}}),L0=te.createBindGroup({layout:tr.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:Gi}}]}),nr=[0,1,2,3,4].map(e=>Ss.createView({baseMipLevel:e,mipLevelCount:1})),C0=nr.map(e=>Eo(e)),Rs=nr.map(e=>({colorAttachments:[yn(e,!0)]})),or=mt(Ha),sr=mt(ja),ir=mt(Ya),rr=te.createRenderPipeline({layout:"auto",vertex:{module:ir,entryPoint:"vs"},fragment:{module:ir,entryPoint:"fs",targets:[{format:rt}]}}),ar=te.createRenderPipeline({layout:"auto",vertex:{module:or,entryPoint:"vs"},fragment:{module:or,entryPoint:"fs",targets:[{format:rt}]}}),cr=te.createRenderPipeline({layout:"auto",vertex:{module:sr,entryPoint:"vs"},fragment:{module:sr,entryPoint:"fs",targets:[{format:zs}]}}),lr=(()=>{const e=[.27,1,-.24],t=Z(...e);return e.map(n=>n/t)})();{const e=lr,t=[e[1],-e[0],0],n=Z(...t);t[0]/=n,t[1]/=n;const o=[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],s=225,c=-175,i=125,r=Dt;r[0]=t[0]/s,r[4]=t[1]/s,r[8]=t[2]/s,r[12]=0,r[1]=o[0]/s,r[5]=o[1]/s,r[9]=o[2]/s,r[13]=0,r[2]=-e[0]/(i-c),r[6]=-e[1]/(i-c),r[10]=-e[2]/(i-c),r[14]=i/(i-c),r[3]=0,r[7]=0,r[11]=0,r[15]=1;for(let f=0;f<16;f++)Dt[16+f]=r[f],Bt[16+f]=r[f];for(let f=0;f<3;f++)Bt[48+f]=Dt[48+f]=lr[f];Dt[32]=0,Dt[33]=-20,Dt[34]=0,Dt[35]=0,Dt[58]=1,Ke.writeBuffer(Di,0,Dt)}await Vn("\u96D5\u523B\u6D77\u5E95\u5730\u5F62\u2026",.25,1200),mn("customsCastleV2Load",1),addEventListener("pagehide",()=>mn("customsCastleV2Load",""));let tt;{const e=$a(),t=mt(Ia),n=te.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}}),o=he*we*St*4,s=new ArrayBuffer(48),c=new Uint32Array(s),i=new Float32Array(s);c[0]=he,c[1]=we,c[2]=St,i[4]=Ct,i[5]=Ot,i[6]=kt,i[7]=qe,c[8]=Ai.length,c[9]=Ri.length,c[10]=Pi.length,c[11]=Ti.length;const r=Ye(new Uint8Array(s),pe.UNIFORM),f=Ye(e,pe.STORAGE),p=te.createBuffer({size:o,usage:pe.STORAGE|pe.COPY_SRC}),d=te.createBuffer({size:o,usage:pe.MAP_READ|pe.COPY_DST}),g=te.createBindGroup({layout:n.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:r}},{binding:1,resource:{buffer:p}},{binding:2,resource:{buffer:f}}]}),b=te.createCommandEncoder(),S=b.beginComputePass();S.setPipeline(n),S.setBindGroup(0,g),S.dispatchWorkgroups(he/4,we/4,St/4),S.end(),b.copyBufferToBuffer(p,0,d,0,o),Ke.submit([b.finish()]),await d.mapAsync(GPUMapMode.READ),tt=new Float32Array(d.getMappedRange().slice(0)),d.unmap(),d.destroy(),p.destroy();const z=he*we,N=new Uint8Array(tt.length),B=[1,-1,he,-he,z,-z],l=new Uint8Array(he),P=[];for(let m=0;m<tt.length;){l.fill(1);for(let V=0;V<we;V++)for(let I=0;I<he;I++,m++)tt[m]<=0?l[I]=0:l[I]?N[m]=1:P.push(m)}for(let m=1;m;P.reverse()){m=0;for(const V of P)!N[V]&&B.some(I=>N[V+I])&&(N[V]=m=1)}for(const m of P)N[m]||(tt[m]=-tt[m])}const Fn=52,Et=102,Ps=new Uint16Array(Et*Et*we/4);let Jn=new Int8Array(64*65534);{let e=0;for(let t=0;t<Et;t++)for(let n=1;n<we/4-1;n++)for(let o=0;o<Et;o++){if(Z(o-Et/2+.5,t-Et/2+.5)>52)continue;let s=127,c=-127;for(let i=0;i<4;i++)for(let r=0;r<4;r++)for(let f=0;f<4;f++){const p=Fn+o*4+f+he*(n*4+r+we*(Fn+t*4+i)),d=tt[p+he*we]-tt[p-he*we],g=tt[p+1]-tt[p-1],b=tt[p+he]-tt[p-he],S=Lt(g*g+b*b+d*d)/1.5,z=We(Ae(tt[p]/le(S,.05),-1,1)*127);Jn[e*64+f+4*r+16*i]=z,z<s&&(s=z),z>c&&(c=z)}Ps[o+Et*(n+we/4*t)]=s===c&&s*s===16129?+(s>0):(e++,e+1)}Jn=Jn.slice(0,e*64)}await Vn("\u751F\u6210\u6D77\u5E95\u5CE1\u8C37\u2026",.32,400);const bt=Za(tt),Ts=[[10,1.3,7,-9,-31,-10],[50,1.3,34,58,-23,8],[-26,2.2,-100,0,-9,-108],[-55,1.5,-18,-60,-30,8],[10,1.2,-62,6,-22,-90],[3,1.6,62,1,-28,100]],Ut=new Float32Array([10,-42.2,7,-9,-31,-10,7.5,-41.8,5.5,-10,-31,-12,9,-40.5,18,17,-37,42,22,-39.2,40,48,-36,45,38,-39.2,46,57,-27,18,50,-40.4,35,58,-24,8,55,-39,20,60,-18,-10,58,-34,-12,40,-26,-60,50,-30,-44,10,-26,-80,30,-30,-70,4,-28,-90,12,-38.5,-62,6,-27,-90,-4,-36.5,-70,0,-14,-100,-16,-37,-84,0,-22,-108,-29,-38,-90,-44,-34,-60,-41,-38,-70,-56,-34,-40,-53,-38,-50,-60,-34,-20,-58,-38,-28,-60,-32,0,-57,-38,-10,-60,-30,16,-60,-38,10,-50,-36,40,-52,-37,36,-20,-35,44,-22,-38,43,4,-38,52,-6,-39.2,44.5,4,-37,70,3,-40.6,53,3,-35,84,3,-41.5,62,1,-30,100,4,-39,76,3,-22,100]),In=Ut.length/6,fr=60,_n=1024,Po=new Float32Array(_n+1),Ls=[],R=new Float64Array(32),nt=new Float64Array(6),Qe=0,Je=1,et=2,eo=3,to=4,Cs=5,Vs=6,Bs=7,ur=8,pr=9,dr=10,vr=11,mr=12,hr=13,gr=14,xr=15,qt=16,yr=17,To=18,Ns=19,Lo=20,qs=21,Fs=22,Is=23,_s=24;function br(){const e=nt[3]-nt[0],t=nt[4]-nt[1],n=nt[5]-nt[2];R[Qe]=nt[0],R[Je]=nt[1],R[et]=nt[2],R[eo]=ls(e,-n),R[to]=ls(t,Lt(e*e+n*n))}const wc=(e,t,n,o,s,c)=>{nt[0]=e,nt[1]=t,nt[2]=n,nt[3]=o,nt[4]=s,nt[5]=c,br()};function wr(){const e=R[qs];let t=ve(e)|0;t>In-2&&(t=In-2);const n=e-t,o=(t>0?t-1:0)*6,s=t*6,c=(t+1)*6,i=(t+2<In?t+2:In-1)*6;for(let r=0;r<6;r++){const f=Ut[o+r],p=Ut[s+r],d=Ut[c+r],g=Ut[i+r];nt[r]=.5*(2*p+(d-f)*n+(2*f-5*p+4*d-g)*n*n+(3*p-f-3*d+g)*n*n*n)}br()}{const t=new Float32Array(4097);let n=0,o=0,s=0;for(let c=0;c<=4096;c++)R[qs]=c/4096*(In-1),wr(),c&&(t[c]=t[c-1]+Z(R[Qe]-n,R[Je]-o,R[et]-s)),n=R[Qe],o=R[Je],s=R[et];for(let c=0,i=0;c<=_n;c++){const r=c/_n*t[4096];for(;i<4095&&t[i+1]<r;)i++;Po[c]=(i+(r-t[i])/le(t[i+1]-t[i],1e-6))/4096*(In-1)}}function V0(){let e=R[yr]/fr;e=e<0?0:e>1?1:e,e=e*e*(3-2*e)*.25+e*.75,e*=_n;let t=ve(e)|0;t>_n-1&&(t=_n-1),R[qs]=Po[t]+(Po[t+1]-Po[t])*(e-t),wr()}for(let e=0;e<=fr;e+=.1)R[yr]=e,V0(),Ls.push([R[Qe],R[Je],R[et]]);for(const e of Ts)Ls.push([e[0],-40,e[2]]);await Vn("\u79CD\u690D\u6D77\u85FB\u68EE\u6797\u2026",.73,2500);const H=Qa(tt,bt,Ls,Ts);for(const e of Ts)e[1]+=H.gy(e[0],e[2]);const Ve=r0(H.gy);tt=H.gy=bt.smp=null,await Vn("\u51C6\u5907\u6C89\u8239\u4E0E\u6D77\u6D0B\u751F\u7269\u2026",.94,1200);const Be=[ut(1,3),ut(7,3),ut(13,3),ut(22,3),vs([[0,0,.5],[.34,0,.6],[.5,.2,.85],[.6,.6,1],[.55,.95,1],[.47,1.08,1],[.38,1.1,.9],[.3,1,.45],[.26,.6,.15],[0,.35,.05]],18,.3,9),vs([[0,0,.5],[.2,0,.6],[.26,.5,.85],[.4,1.25,1],[.4,1.42,1],[.33,1.48,.9],[.26,1.38,.4],[.18,.8,.12],[0,.5,.05]],16,.35,8),vs([[0,0,.5],[.5,0,.7],[.72,.18,1],[.74,.38,1],[.62,.5,.9],[.48,.42,.45],[.4,.2,.15],[0,.14,.06]],18,.25,10),bo(0),bo(1),e0()].map(e=>e.build());Be.push(t0(),n0().build(),o0().build(),s0().build(),ut(3).build(),ut(11).build(),ut(29).build(),ut(5,3).build(),ut(17,3).build(),ut(41,3).build(),ut(9,1).build(),bo(0,1).build(),bo(1,1).build(),ut(5,2,1).build(),ut(17,2,1).build(),ut(41,2,1).build());let Os=0,Ds=0;for(const e of Be)e.v0=Os,e.i0=Ds,Os+=e.nv,Ds+=e.ib.length;const zr=new Uint8Array(Os*16),Sr=new Uint32Array(Ds);for(const e of Be)zr.set(new Uint8Array(e.vb),e.v0*16),Sr.set(e.ib,e.i0);const kr=Ye(zr,pe.VERTEX),Mr=Ye(Sr,pe.INDEX),Er=Ye(new Uint8Array(bt.vb),pe.VERTEX),Ar=Ye(bt.ib,pe.INDEX),Co=H.solids.data.length/12,Vo=new Float32Array((Co+1)*12);Vo.set(H.solids.data),Vo.set([0,0,0,1,0,0,0,1,0,0,1,0],Co*12);const Rr=Ye(Vo,pe.VERTEX),Pr=H.chunks.map(e=>Ye(e.data,pe.VERTEX)),Tr=H.props.map(e=>Ye(e.data,pe.VERTEX)),Lr=Ye(new Uint8Array(H.big.buf),pe.VERTEX),B0=Ye(new Uint8Array(H.bigF.buf),pe.VERTEX),N0=Ye(new Uint8Array(H.small.buf),pe.VERTEX),q0=Ye(H.fish,pe.VERTEX),F0=Ye(H.mantas,pe.VERTEX),I0=Ye(H.bubbles,pe.VERTEX),_0=Ye(H.snow,pe.VERTEX),O0=Ye(H.glints,pe.VERTEX),D0=H.glints.length/8,Cr=H.fish.length/8,Vr=H.mantas.length/8,U0=H.bubbles.length/8,G0=H.snow.length/4,Us=Be[12],Gs=Be[13];Ke.writeTexture({texture:ks},H.volD,{bytesPerRow:he,rowsPerImage:we/2},[he/2,we/2,St/2]),Ke.writeTexture({texture:Oi},H.gm,{bytesPerRow:2048},[512,512]);{const e=mt(_a),t=te.createRenderPipeline({layout:"auto",vertex:{module:e,entryPoint:"vs"},fragment:{module:e,entryPoint:"fs",targets:[{format:"rgba8unorm"}]}}),n=te.createCommandEncoder();let o=n.beginRenderPass({colorAttachments:[yn(So.createView({baseMipLevel:0,mipLevelCount:1}),!0)]});o.setPipeline(t),o.draw(3),o.end();for(let s=1;s<11;s++)o=n.beginRenderPass({colorAttachments:[yn(So.createView({baseMipLevel:s,mipLevelCount:1}),!0)]}),o.setPipeline(l0),o.setBindGroup(0,Eo(So.createView({baseMipLevel:s-1,mipLevelCount:1}))),o.draw(3),o.end();o=n.beginRenderPass({colorAttachments:[],depthStencilAttachment:{view:$n.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}}),o.setBindGroup(0,Es),o.setPipeline(P0),o.setVertexBuffer(0,Er),o.setVertexBuffer(1,Rr),o.setIndexBuffer(Ar,"uint32"),o.drawIndexed(bt.ib.length,1,0,0,Co),o.setPipeline(R0),o.setVertexBuffer(0,kr),o.setIndexBuffer(Mr,"uint32");for(let s=0;s<12;s++){const c=H.solids.ranges[s];c[1]&&o.drawIndexed(Be[s].ib.length,c[1],Be[s].i0,Be[s].v0,c[0])}if(!Ce)for(let s=0;s<us;s++)o.setVertexBuffer(1,Pr[s]),o.drawIndexed(Be[14+s].ib.length,H.chunks[s].n,Be[14+s].i0,Be[14+s].v0,0);if(!Ce)for(let s=0;s<6;s++)H.props[s].n&&(o.setVertexBuffer(1,Tr[s]),o.drawIndexed(Be[4+s].ib.length,H.props[s].n,Be[4+s].i0,Be[4+s].v0,0));o.setPipeline(T0),o.setVertexBuffer(0,Lr),o.draw(6,H.big.n),o.end(),Ke.submit([n.finish()])}for(const e of[H.big,H.bigF,H.small,...H.chunks,...H.props])e.buf=e.data=0;H.glints=H.volD=H.gm=bt.vb=bt.ib=bt.wp=bt.wn=0;const Br=2560*1440,Nr=Jt?25e4:5e5,Bo=.4;let Ie=0,Xe=0,no=0,No=0,At=+En[1]||(Ce>1?41e4:Jt?1280*720:Br),ct=+En[2]||1,qo=0,On=0,Fo=0,oo=0,Ws=0,Ks=0,Xs=3,qr,Fr,Ir,_r,so,Or,Dr,io=[],Io=[],Hs=[];const _o=6;function Oo(){no=le(2,We(it.clientWidth*devicePixelRatio)),No=le(2,We(it.clientHeight*devicePixelRatio));const e=Ue(1,Lt(At/(no*No))),t=le(2,We(no*e)&-2),n=le(2,We(No*e)&-2);if(t===Ie&&n===Xe)return;qo=Fo=oo=0,On=-300,Ie=t,Xe=n,it.width=Ie,it.height=Xe,Fi.configure({device:te,format:zs,alphaMode:"opaque"});for(const z of Hs)z.destroy();const o=at(Tt>1?Ie:1,Xe,rt,ye.RENDER_ATTACHMENT,{samples:Tt}),s=at(Ie,Xe,on,ye.RENDER_ATTACHMENT|ye.TEXTURE_BINDING,{samples:Tt}),c=at(Ie,Xe,rt,ye.RENDER_ATTACHMENT|ye.TEXTURE_BINDING),i=at(Ie/2,Xe/2,rt,ye.RENDER_ATTACHMENT|ye.TEXTURE_BINDING),r=at(Ie/2,Xe/2,rt,ye.RENDER_ATTACHMENT|ye.TEXTURE_BINDING);Hs=[o,s,c,i,r];const f=[];for(let z=0;z<_o;z++){const N=at(le(1,Ie>>z+1),le(1,Xe>>z+1),rt,ye.RENDER_ATTACHMENT|ye.TEXTURE_BINDING);f.push(N),Hs.push(N)}const p=s.createView(),d=c.createView(),g=i.createView(),b=r.createView(),S=f.map(z=>z.createView());qr={colorAttachments:[{view:Tt>1?o.createView():d,resolveTarget:Tt>1?d:void 0,loadOp:"clear",storeOp:Tt>1?"discard":"store",clearValue:[0,0,0,1]}],depthStencilAttachment:{view:p,depthClearValue:0,depthLoadOp:"clear",depthStoreOp:"store"}},Fr={colorAttachments:[yn(g,!0)]},Ir={colorAttachments:[yn(b,!0)]},_r=te.createBindGroup({layout:rr.getBindGroupLayout(0),entries:[{binding:0,resource:g}]}),so={colorAttachments:[{view:null,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]},Or=te.createBindGroup({layout:ar.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:ko}},{binding:1,resource:Ii},{binding:2,resource:_i},{binding:3,resource:$n.createView()},{binding:4,resource:Ss.createView()},{binding:5,resource:p},{binding:6,resource:ks.createView()},{binding:7,resource:zo}]}),Dr=te.createBindGroup({layout:cr.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:ko}},{binding:1,resource:zo},{binding:2,resource:d},{binding:3,resource:b},{binding:4,resource:S[0]},{binding:5,resource:p}]}),io=[],Io=[];for(let z=0;z<_o;z++)io.push({colorAttachments:[yn(S[z],!0)]}),Io.push(Eo(z?S[z-1]:d));for(let z=_o-1;z>0;z--)io.push({colorAttachments:[yn(S[z-1],!1)]}),Io.push(Eo(S[z]));Bt[52]=Ie,Bt[53]=Xe,Bt[54]=1/Ie,Bt[55]=1/Xe}Oo(),addEventListener("resize",Oo);const W0=Ln+`
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
`,$e=window.V3Geometry.THREE,sn=new Image;sn.src=window.V3_ASSETS.hull,await sn.decode();const rn=window.V3Geometry.initial(sn),Ur=at(sn.width,sn.height,"rgba8unorm-srgb",ye.TEXTURE_BINDING|ye.COPY_DST|ye.RENDER_ATTACHMENT);Ke.copyExternalImageToTexture({source:sn},{texture:Ur},[sn.width,sn.height]);const Gr=at(1024,256,"rgba8unorm-srgb",ye.TEXTURE_BINDING|ye.COPY_DST|ye.RENDER_ATTACHMENT),Wr=te.createBindGroupLayout({entries:[{binding:0,visibility:Nt,buffer:{minBindingSize:144}},{binding:1,visibility:Bn.FRAGMENT,texture:{}},{binding:2,visibility:Bn.FRAGMENT,texture:{}}]}),Kr=te.createPipelineLayout({bindGroupLayouts:[Ms,Wr]}),Ys=mt(W0),Xr={arrayStride:64,attributes:[je(0,0,"float32x3"),je(1,12,"float32x3"),je(2,24,"float32x2"),je(3,32,"float32x4"),je(4,48,"float32x4")]},K0={color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}},js=(e=!1,t=!1)=>te.createRenderPipeline({layout:Kr,vertex:{module:Ys,entryPoint:"vsModel",buffers:[Xr]},fragment:{module:Ys,entryPoint:e?"fsInterior":"fsModel",targets:[{format:e?zs:rt,blend:t?K0:void 0}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:on,depthWriteEnabled:!t,depthCompare:"greater"},multisample:{count:e?1:Tt}}),X0=js(),H0=js(!1,!0),Y0=js(!0);let Do=0;function Gt(e){const t=Ye(e,pe.VERTEX);return Do++,{vb:t,count:e.length/16}}function an(e,t=0){const n=te.createBuffer({size:144,usage:pe.UNIFORM|pe.COPY_DST});Do++;const o=new Float32Array(36),s=new $e.Matrix4;o.set(s.elements),o.set(s.elements,16),o[33]=t;const c=te.createBindGroup({layout:Wr,entries:[{binding:0,resource:{buffer:n}},{binding:1,resource:Ur.createView()},{binding:2,resource:Gr.createView()}]});return{mesh:e,ub:n,data:o,bg:c,matrix:s}}const $s=an(Gt(rn.body)),Hr=an(Gt(rn.glass)),Dn=an(Gt(rn.prop)),j0={pearl:Gt(window.V3Geometry.pearl()),shell:Gt(window.V3Geometry.shell())},Un=Ve.items.map(e=>({...e,entity:an(j0[e.type],e.type==="pearl"?.35:.15)})),Yr=an(Gt(window.V3Geometry.barrier())),Gn=window.V3Geometry.castle(),Wt=an(Gt(Gn.opaque)),Zs=["lighthouse","wreck"].map(e=>{const t=window.V3Geometry[e](),n=Ve[e].position;return{id:e,geometry:t,position:n,entity:an(Gt(t.opaque))}}),jr=te.createRenderPipeline({layout:Kr,vertex:{module:Ys,entryPoint:"vsShadow",buffers:[Xr]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{format:on,depthWriteEnabled:!0,depthCompare:"less",depthBias:2,depthBiasSlopeScale:1.5}});Wt.matrix.makeTranslation(...Ve.castle.position),Wt.data.set(Wt.matrix.elements),Ke.writeBuffer(Wt.ub,0,Wt.data);{const e=te.createCommandEncoder(),t=e.beginRenderPass({colorAttachments:[],depthStencilAttachment:{view:$n.createView(),depthLoadOp:"load",depthStoreOp:"store"}});t.setBindGroup(0,Es),t.setPipeline(jr),t.setBindGroup(1,Wt.bg),t.setVertexBuffer(0,Wt.mesh.vb),t.draw(Wt.mesh.count),t.end(),Ke.submit([e.finish()])}for(const e of Zs){const t=e.entity;t.matrix.makeTranslation(...e.position),t.data.set(t.matrix.elements),Ke.writeBuffer(t.ub,0,t.data);const n=te.createCommandEncoder(),o=n.beginRenderPass({colorAttachments:[],depthStencilAttachment:{view:$n.createView(),depthLoadOp:"load",depthStoreOp:"store"}});o.setBindGroup(0,Es),o.setPipeline(jr),Xt(o,t),o.end(),Ke.submit([n.finish()])}const $0=!0;let Kt=null,Qs=null,Js=0,$r="",ei=-1;const Ze={x:Ve.spawn[0],y:Ve.spawn[1],z:Ve.spawn[2],heading:0,pitch:.1,vx:0,vy:0,vz:0},F={view:"external",counts:{pearl:0,shell:0},unlocked:!1,completed:!1,continuing:!1,started:!1,hideAdditions:!1,passages:0,frontPassages:0,backPassages:0,contacts:0,lastContact:-100,lastPassage:-100,direction:"\u5C1A\u672A\u7A7F\u95E8",landmark:"castle"},Zr=new $e.Vector3,Z0=new $e.Vector3(1,1,1),Qr=new $e.Quaternion,Jr=new $e.Euler(0,0,0,"YXZ"),ea=new $e.Matrix4,ta=new $e.Matrix4;function Uo(e,t,n,o,s=0,c=0,i=0){Zr.set(t,n,o),Jr.set(c,-s,i,"YXZ"),Qr.setFromEuler(Jr),e.matrix.compose(Zr,Qr,Z0),e.data.set(e.matrix.elements),Ke.writeBuffer(e.ub,0,e.data)}function Q0(){const e=it.clientWidth>0&&it.clientHeight>0?it.clientWidth/it.clientHeight:Js||Ie/Xe;if(Js!==e){Js=e;const t=rn.fit(e);Kt&&(Kt.mesh.vb.destroy(),Kt.ub.destroy(),Do-=2),Kt=an(Gt(t.geometry)),Kt.data[32]=1;const n=Math.tan(68*It/360),o=new Float32Array(16);o[0]=1/(n*e),o[5]=1/n,o[11]=-1,o[14]=.04,Kt.data.set(o,16),Ke.writeBuffer(Kt.ub,0,Kt.data)}$r!==Ie+"x"+Xe&&($r=Ie+"x"+Xe,Qs?.destroy(),Qs=at(Ie,Xe,on,ye.RENDER_ATTACHMENT))}function J0(){const e=Ze,t=R[qt];Q0(),Uo($s,e.x,e.y,e.z,e.heading),Uo(Hr,e.x,e.y,e.z,e.heading),ta.makeTranslation(0,-1.02,2.45),ea.makeRotationZ(t*(2+Math.hypot(e.vx,e.vy,e.vz)*2)),Dn.matrix.copy($s.matrix).multiply(ta).multiply(ea),Dn.data.set(Dn.matrix.elements),Ke.writeBuffer(Dn.ub,0,Dn.data);for(const n of Un)if(!n.collected){const o=n.position;Uo(n.entity,o[0],o[1]+Se(t*.7+Number(n.id.split("-")[1]))*.12,o[2],n.type==="shell"?.2:0,n.type==="shell"?.45:0)}Uo(Yr,...Ve.castle.position),(t-ei>=.1||ei<0)&&(ei=t,rn.update({velocity:{x:e.vx,y:e.vy,z:e.vz},heading:e.heading,time:t,y:e.y,surface:0}),Ke.copyExternalImageToTexture({source:rn.fitPanel||ec()},{texture:Gr},[1024,256]))}function ec(){return rn.panel()}function Xt(e,t){e.setBindGroup(1,t.bg),e.setVertexBuffer(0,t.mesh.vb),e.draw(t.mesh.count)}function tc(e){if(!F.hideAdditions){e.setBindGroup(0,Mo),e.setPipeline(X0),F.view==="external"&&(Xt(e,$s),Xt(e,Dn));for(const t of Un)!t.collected&&(t.position[0]-R[Qe])*R[Cs]+(t.position[1]-R[Je])*R[Vs]+(t.position[2]-R[et])*R[Bs]>1.7&&Xt(e,t.entity);Xt(e,Wt),F.unlocked||Xt(e,Yr);for(const t of Zs)Xt(e,t.entity)}}function nc(e){F.hideAdditions||F.view!=="external"||(e.setBindGroup(0,Mo),e.setPipeline(H0),Xt(e,Hr))}function oc(e,t){if(F.hideAdditions||F.view!=="cockpit")return;const n=e.beginRenderPass({colorAttachments:[{view:t,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:Qs.createView(),depthClearValue:0,depthLoadOp:"clear",depthStoreOp:"discard"}});n.setBindGroup(0,Mo),n.setPipeline(Y0),Xt(n,Kt),n.end()}function na(e,t){const n=e.collision;if(!n||n.BYTES_PER_ELEMENT!==4||!n.length||n.length%48)throw new Error("Castle collision requires packed 16-float vertices / complete triangles");const o=n.length/48,s=2,c=1e-8,i=1e-4,r=100,f=40,p=36,d=new Float64Array(o*6),g=new Float64Array(o*3),b=new Uint8Array(o),S=new Uint32Array(o),z=[1/0,1/0,1/0],N=[-1/0,-1/0,-1/0];let B=0;for(let u=0;u<o;u++){const a=u*48,w=u*6,k=u*3;for(let Re=0;Re<3;Re++){const vt=n[a+Re],ze=n[a+16+Re],Pe=n[a+32+Re];if(!Number.isFinite(vt)||!Number.isFinite(ze)||!Number.isFinite(Pe))throw new Error("Non-finite castle collision position at triangle "+u);d[w+Re]=Math.min(vt,ze,Pe),d[w+3+Re]=Math.max(vt,ze,Pe),z[Re]=Math.min(z[Re],d[w+Re]),N[Re]=Math.max(N[Re],d[w+3+Re])}const L=n[a+16]-n[a],q=n[a+17]-n[a+1],D=n[a+18]-n[a+2],G=n[a+32]-n[a],O=n[a+33]-n[a+1],J=n[a+34]-n[a+2];let ee=q*J-D*O,ne=D*G-L*J,re=L*O-q*G,se=Math.hypot(ee,ne,re);const me=n[a+3]+n[a+19]+n[a+35],Oe=n[a+4]+n[a+20]+n[a+36],De=n[a+5]+n[a+21]+n[a+37];se===0?(b[u]=1,B++,ee=me,ne=Oe,re=De,se=Math.hypot(ee,ne,re)):ee*me+ne*Oe+re*De<0&&(ee=-ee,ne=-ne,re=-re),(!(se>0)||!Number.isFinite(se))&&(ee=0,ne=1,re=0,se=1),g[k]=ee/se,g[k+1]=ne/se,g[k+2]=re/se}const l=z.map((u,a)=>Math.floor((N[a]-u)/s)+1),P=l[0],m=l[1],V=l[2],I=new Array(P*m*V);let W=0,K=0,T=0;const C=(u,a,w)=>u+P*(a+m*w);for(let u=0;u<o;u++){const a=u*6,w=Math.floor((d[a]-z[0])/s),k=Math.floor((d[a+3]-z[0])/s),L=Math.floor((d[a+1]-z[1])/s),q=Math.floor((d[a+4]-z[1])/s),D=Math.floor((d[a+2]-z[2])/s),G=Math.floor((d[a+5]-z[2])/s);for(let O=D;O<=G;O++)for(let J=L;J<=q;J++)for(let ee=w;ee<=k;ee++){const ne=C(ee,J,O);I[ne]||(I[ne]=[],W++),I[ne].push(u),K++}}for(let u=0;u<I.length;u++)I[u]&&(T=Math.max(T,I[u].length),I[u]=Uint32Array.from(I[u]));const Y=new $e.Triangle,j=new $e.Vector3,ie=new $e.Vector3;let oe=0,ge=1/0,de=-1,Q=0,U=0,$=0,X=0,ae=0;function xe(u,a,w,k,L,q,D,G,O){const J=Math.max(k-u,0,u-D),ee=Math.max(L-a,0,a-G),ne=Math.max(q-w,0,w-O);return J*J+ee*ee+ne*ne}function ot(u,a,w){oe=oe+1>>>0,oe===0&&(S.fill(0),oe=1),ge=1/0,de=-1,X=0,ae=0,j.set(u,a,w)}function Fe(u,a,w,k,L,q,D,G,O){const J=k-u,ee=L-a,ne=q-w,re=J*J+ee*ee+ne*ne,se=re?Math.max(0,Math.min(1,((D-u)*J+(G-a)*ee+(O-w)*ne)/re)):0,me=u+se*J,Oe=a+se*ee,De=w+se*ne,Re=(me-D)**2+(Oe-G)**2+(De-O)**2;return Re<ge?(ge=Re,Q=me,U=Oe,$=De,!0):!1}function pt(u,a,w,k){const L=k*k,q=Math.max(0,Math.floor((u-k-z[0])/s)),D=Math.min(P-1,Math.floor((u+k-z[0])/s)),G=Math.max(0,Math.floor((a-k-z[1])/s)),O=Math.min(m-1,Math.floor((a+k-z[1])/s)),J=Math.max(0,Math.floor((w-k-z[2])/s)),ee=Math.min(V-1,Math.floor((w+k-z[2])/s));for(let ne=J;ne<=ee;ne++)for(let re=G;re<=O;re++)for(let se=q;se<=D;se++){const me=I[C(se,re,ne)];if(!me)continue;const Oe=z[0]+se*s,De=z[1]+re*s,Re=z[2]+ne*s;if(!(xe(u,a,w,Oe,De,Re,Oe+s,De+s,Re+s)>Math.min(L,ge))){ae++;for(let vt=0;vt<me.length;vt++){const ze=me[vt],Pe=ze*6;if(S[ze]===oe||xe(u,a,w,d[Pe],d[Pe+1],d[Pe+2],d[Pe+3],d[Pe+4],d[Pe+5])>Math.min(L,ge))continue;S[ze]=oe,X++;const ce=ze*48;if(b[ze]){let Zt=Fe(n[ce],n[ce+1],n[ce+2],n[ce+16],n[ce+17],n[ce+18],u,a,w);Zt=Fe(n[ce+16],n[ce+17],n[ce+18],n[ce+32],n[ce+33],n[ce+34],u,a,w)||Zt,Zt=Fe(n[ce+32],n[ce+33],n[ce+34],n[ce],n[ce+1],n[ce+2],u,a,w)||Zt,Zt&&(de=ze);continue}Y.a.set(n[ce],n[ce+1],n[ce+2]),Y.b.set(n[ce+16],n[ce+17],n[ce+18]),Y.c.set(n[ce+32],n[ce+33],n[ce+34]),Y.closestPointToPoint(j,ie);const yt=j.distanceToSquared(ie);yt<ge&&(ge=yt,de=ze,Q=ie.x,U=ie.y,$=ie.z)}}}}function Pt(u){const a=new Float64Array(u.length*6);for(let w=0;w<u.length;w++){const k=u[w],L=u[(w+1)%u.length],q=w*6,D=L[0]-k[0],G=L[1]-k[1],O=Math.hypot(D,G);a.set([k[0],k[1],L[0],L[1],G/O,-D/O],q)}return a}const ft=[],pn={cylinder:0,box:0,arch:0};for(const u of e.solids||[]){if(u.collidable===!1)continue;const a={kind:u.kind,center:u.center,half:u.half};if(!a.center||a.center.length!==3||!a.center.every(Number.isFinite))throw new Error("Invalid castle solid center");const w=a.center;if(a.kind==="box"){if(!a.half||a.half.length!==3||!a.half.every(k=>Number.isFinite(k)&&k>0))throw new Error("Invalid castle box");a.min=w.map((k,L)=>k-a.half[L]),a.max=w.map((k,L)=>k+a.half[L])}else if(a.kind==="cylinder"){if(a.radius=u.radius,!(Number.isFinite(a.radius)&&a.radius>0&&Number.isFinite(a.half)&&a.half>0))throw new Error("Invalid castle cylinder");const k=[];for(let L=0;L<f;L++){const q=L*Math.PI*2/f;k.push([a.radius*Math.cos(q),a.radius*Math.sin(q)])}a.edges=Pt(k),a.apothem=a.radius*Math.cos(Math.PI/f),a.min=[w[0]-a.radius,w[1]-a.half,w[2]-a.radius],a.max=[w[0]+a.radius,w[1]+a.half,w[2]+a.radius]}else if(a.kind==="arch"){if(a.inner=u.inner,a.outer=u.outer,a.half=u.depth,!(Number.isFinite(a.inner)&&a.inner>0&&Number.isFinite(a.outer)&&a.outer>a.inner&&Number.isFinite(a.half)&&a.half>0))throw new Error("Invalid castle arch");const k=[];for(let L=0;L<=p;L++){const q=L*Math.PI/p;k.push([a.outer*Math.cos(q),a.outer*Math.sin(q)])}for(let L=p;L>=0;L--){const q=L*Math.PI/p;k.push([a.inner*Math.cos(q),a.inner*Math.sin(q)])}a.edges=Pt(k),a.min=[w[0]-a.outer,w[1],w[2]-a.half],a.max=[w[0]+a.outer,w[1]+a.outer,w[2]+a.half]}else throw new Error("Unsupported castle backing solid: "+a.kind);pn[a.kind]++,ft.push(a)}const Le={distance:0,x:0,y:0,z:0,nx:0,ny:0,nz:0};function Yn(u,a,w,k){const L=a-u.center[0],q=w-u.center[1],D=k-u.center[2];let G,O,J,ee=0,ne=0,re=0,se;if(u.kind==="box"){const ze=u.half,Pe=Math.abs(L)-ze[0],ce=Math.abs(q)-ze[1],yt=Math.abs(D)-ze[2];G=Math.max(-ze[0],Math.min(ze[0],L)),O=Math.max(-ze[1],Math.min(ze[1],q)),J=Math.max(-ze[2],Math.min(ze[2],D)),se=Math.hypot(Math.max(Pe,0),Math.max(ce,0),Math.max(yt,0))+Math.min(Math.max(Pe,ce,yt),0),Pe<=0&&ce<=0&&yt<=0&&(Pe>=ce&&Pe>=yt?(ee=L<0?-1:1,G=ee*ze[0]):ce>=yt?(ne=q<0?-1:1,O=ne*ze[1]):(re=D<0?-1:1,J=re*ze[2]))}else{const ze=u.kind==="cylinder",Pe=L,ce=ze?D:q,yt=ze?q:D;let Zt;if(ze){const st=Math.atan2(ce,Pe),vn=Math.PI*2/f,Qt=(Math.floor(st/vn)+.5)*vn;Zt=Pe*Math.cos(Qt)+ce*Math.sin(Qt)<=u.apothem}else{const st=Math.PI/p,vn=Math.atan2(ce,Pe),Qt=Math.max(0,Math.min(p-1,Math.floor(vn/st))),Mn=Pe*Math.cos((Qt+.5)*st)+ce*Math.sin((Qt+.5)*st);Zt=ce>=0&&Mn>=u.inner*Math.cos(st/2)&&Mn<=u.outer*Math.cos(st/2)}let gi=1/0,ts=0,ns=0,os=0,ss=0;const kn=u.edges;for(let st=0;st<kn.length;st+=6){const vn=kn[st],Qt=kn[st+1],Mn=kn[st+2]-vn,rs=kn[st+3]-Qt,Ca=Math.max(0,Math.min(1,((Pe-vn)*Mn+(ce-Qt)*rs)/(Mn*Mn+rs*rs))),Va=vn+Ca*Mn,Ba=Qt+Ca*rs,Na=(Va-Pe)**2+(Ba-ce)**2;Na<gi&&(gi=Na,ts=Va,ns=Ba,os=kn[st+4],ss=kn[st+5])}const is=(Zt?-1:1)*Math.sqrt(gi),xi=Math.abs(yt)-u.half;se=Math.hypot(Math.max(is,0),Math.max(xi,0))+Math.min(Math.max(is,xi),0);let yi=Math.max(-u.half,Math.min(u.half,yt)),bi=0;is<=0&&xi>=is&&(ts=Pe,ns=ce,yi=yt<0?-u.half:u.half,bi=yt<0?-1:1,os=ss=0),ze?(G=ts,O=yi,J=ns,ee=os,ne=bi,re=ss):(G=ts,O=ns,J=yi,ee=os,ne=ss,re=bi)}Le.distance=se,Le.x=G+u.center[0],Le.y=O+u.center[1],Le.z=J+u.center[2];const me=se<0?1:-1,Oe=(G-L)*me,De=(O-q)*me,Re=(J-D)*me,vt=Math.hypot(Oe,De,Re);vt>c?(Le.nx=Oe/vt,Le.ny=De/vt,Le.nz=Re/vt):(Le.nx=ee,Le.ny=ne,Le.nz=re)}const be={triangleCount:o,collisionTriangles:o,renderTriangles:e.triangles??null,meshCount:e.collisionMeshCount??null,gridCellCount:W,gridCapacity:I.length,gridDimensions:l,cellSize:s,gridReferences:K,maxCellTriangles:T,backingSolidCount:ft.length,solidCounts:pn,cylinderSegments:f,archSegments:p,degenerateTriangles:B,localBounds:{min:z.slice(),max:N.slice()},source:"collision (collidable filter applied by geometry.js)",queries:0,interiorQueries:0,overlapRecoveries:0,aabbRejects:0,lastTrianglesTested:0,lastCellsVisited:0,maxTrianglesTested:0,totalTrianglesTested:0,lastSolidTests:0},gt=new Float64Array((ft.length+6)*3),xt=[1/0,1/0,1/0],Yt=[-1/0,-1/0,-1/0];for(const u of ft)for(let a=0;a<3;a++)xt[a]=Math.min(xt[a],u.min[a]),Yt[a]=Math.max(Yt[a],u.max[a]);let dt=0,dn=0,jt=0,$t=0;function vo(u,a,w,k){let L=k;for(let q=0;q<ft.length;q++){const D=ft[q];xe(u,a,w,D.min[0],D.min[1],D.min[2],D.max[0],D.max[1],D.max[2])>k*k||(be.lastSolidTests++,Yn(D,u,a,w),L=Math.min(L,Le.distance))}return L}function hi(u,a,w,k,L,q,D,G){let O=1/0;L>c&&(O=Math.min(O,(Yt[0]+k+i-u)/L)),L<-c&&(O=Math.min(O,(xt[0]-k-i-u)/L)),q>c&&(O=Math.min(O,(Yt[1]+k+i-a)/q)),q<-c&&(O=Math.min(O,(xt[1]-k-i-a)/q)),D>c&&(O=Math.min(O,(Yt[2]+k+i-w)/D)),D<-c&&(O=Math.min(O,(xt[2]-k-i-w)/D));let J=Math.min(G,O);for(let ee=0;ee<96;ee++){const ne=vo(u+L*J,a+q*J,w+D*J,k);if(ne>=k)return J;J=Math.min(O,J+k-ne+i)}return O}function mo(u,a,w,k){dt=0,be.lastSolidTests=0;let L=0;for(let G=0;G<ft.length;G++){const O=ft[G];u<O.min[0]||u>O.max[0]||a<O.min[1]||a>O.max[1]||w<O.min[2]||w>O.max[2]||(be.lastSolidTests++,Yn(O,u,a,w),!(Le.distance>=0)&&(gt[L++]=Le.nx,gt[L++]=Le.ny,gt[L++]=Le.nz,Le.distance<-dt&&(dt=-Le.distance,dn=-Le.nx,jt=-Le.ny,$t=-Le.nz)))}if(!(dt>0))return!1;be.interiorQueries++;const q=k+dt+i;if(vo(u-dn*q,a-jt*q,w-$t*q,k)>=k)return!0;be.overlapRecoveries++;for(let G=0;G<3;G++)for(let O=-1;O<=1;O+=2)gt[L++]=G===0?O:0,gt[L++]=G===1?O:0,gt[L++]=G===2?O:0;let D=1/0;for(let G=0;G<L;G+=3){const O=gt[G],J=gt[G+1],ee=gt[G+2],ne=hi(u,a,w,k,O,J,ee,q);ne<D&&(D=ne,dn=-O,jt=-J,$t=-ee)}return dt=D-k-i,!0}function jn(){be.lastTrianglesTested=X,be.lastCellsVisited=ae,be.totalTrianglesTested+=X,be.maxTrianglesTested=Math.max(be.maxTrianglesTested,X)}function Sn(u,a,w,k){return Number.isFinite(u)&&Number.isFinite(a)&&Number.isFinite(w)&&Number.isFinite(k)&&k>=0}function ho(){be.queries++,be.lastTrianglesTested=be.lastCellsVisited=be.lastSolidTests=0}function es(u,a,w,k){if(!Sn(u,a,w,k))throw new RangeError("Invalid castle contact sphere");if(ho(),u-=t[0],a-=t[1],w-=t[2],mo(u,a,w,k))return{gx:dn,gy:jt,gz:$t,amount:k+dt+i};if(xe(u,a,w,z[0],z[1],z[2],N[0],N[1],N[2])>k*k)return be.aabbRejects++,null;ot(u,a,w),pt(u,a,w,k),jn();const L=Math.sqrt(ge),q=k-L;if(de<0||!(q>0))return null;if(L>c)return{gx:(Q-u)/L,gy:(U-a)/L,gz:($-w)/L,amount:q+i};const D=de*48,G=de*3,O=(u-n[D])*g[G]+(a-n[D+1])*g[G+1]+(w-n[D+2])*g[G+2]<0?1:-1;return{gx:O*g[G],gy:O*g[G+1],gz:O*g[G+2],amount:q+i}}function v(u,a,w,k){if(!Sn(u,a,w,k))throw new RangeError("Invalid castle penetration sphere");if(ho(),u-=t[0],a-=t[1],w-=t[2],mo(u,a,w,k))return k+dt;const L=Math.sqrt(xe(u,a,w,z[0],z[1],z[2],N[0],N[1],N[2]));if(L>r+k)return be.aabbRejects++,-r;ot(u,a,w);let q=Math.max(s,k,L+s);for(;pt(u,a,w,q),!(de>=0&&ge<=q*q);)q=de>=0?Math.max(q*2,Math.sqrt(ge)):q*2;return jn(),k-Math.sqrt(ge)}const h=e.spec?.innerRadius??4.8,y=e.spec?.spring??11,x=.5;function E(u,a){const w=a-y;let k=w>=0?Math.abs(Math.hypot(u,w)-h):Math.hypot(Math.abs(u)-h,w);const L=Math.max(x,Math.min(y,a));return k=Math.min(k,Math.hypot(Math.abs(u)-h,a-L)),k=Math.min(k,Math.hypot(Math.max(Math.abs(u)-h,0),a-x)),a>=x&&(a<=y?Math.abs(u)<=h:Math.hypot(u,w)<=h)?k:-k}function _(u,a,w=0){if(!Number.isFinite(u)||!Number.isFinite(a)||!Number.isFinite(w))throw new RangeError("Invalid castle door pose");const k=Math.cos(w),L=Math.sin(w),q=u-t[0],D=a-t[1];let G=1/0;for(let O=0;O<xn.length;O++){const J=xn[O],ee=q+J[0]*k-J[2]*L,ne=D+J[1];G=Math.min(G,E(ee,ne)-J[3])}return G}return{contact:es,penetration:v,doorClearance:_,info:be}}const Go=na(Gn,Ve.castle.position),ti=Zs.map(e=>({...e,solver:na(e.geometry,e.position)}));function oa(e,t,n,o){for(const s of ti){const c=s.solver.contact(e,t,n,o);if(c)return{...c,id:s.id}}return null}function ni(e,t,n,o){return sc(e,t,n,o)||oa(e,t,n,o)}function sa(e,t,n,o){let s=-100;for(const c of ti)s=Math.max(s,c.solver.penetration(e,t,n,o));return s}function sc(e,t,n,o){return Go.contact(e,t,n,o)}function ia(e,t,n,o){return Go.penetration(e,t,n,o)}function ra(e,t,n=0){return Go.doorClearance(e,t,n)}const ic=Go.info,bn=new Map,zc=new $e.Triangle,Wo=new $e.Vector3,Ne=new $e.Vector3;{const e=Be[11],t=new Float32Array(e.vb),n=H.solids.ranges[11];for(let o=n[0];o<n[0]+n[1];o++){const s=Vo.subarray(o*12,o*12+12),c=new $e.Quaternion(...s.subarray(4,8)),i=r=>new $e.Vector3(t[r*4],t[r*4+1],t[r*4+2]).multiplyScalar(s[3]).applyQuaternion(c).add(new $e.Vector3(...s.subarray(0,3)));for(let r=0;r<e.ib.length;r+=3){const f=new $e.Triangle(i(e.ib[r]),i(e.ib[r+1]),i(e.ib[r+2])),p=new $e.Box3().setFromPoints([f.a,f.b,f.c]);for(let d=ve(p.min.x/4);d<=ve(p.max.x/4);d++)for(let g=ve(p.min.y/4);g<=ve(p.max.y/4);g++)for(let b=ve(p.min.z/4);b<=ve(p.max.z/4);b++){const S=d+","+g+","+b;bn.has(S)||bn.set(S,[]),bn.get(S).push(f)}}}}const Wn={min:[1/0,1/0,1/0],max:[-1/0,-1/0,-1/0]};for(const e of bn.keys()){const t=e.split(",").map(Number);for(let n=0;n<3;n++)Wn.min[n]=Ue(Wn.min[n],t[n]),Wn.max[n]=le(Wn.max[n],t[n])}function rc(e,t,n,o=0){let s=xs([e,t,n],o);for(const c of xn){const i=gs(c,o),r=c[3];Ne.set(e+i[0],t+i[1],n+i[2]);const f=[ve(Ne.x/4),ve(Ne.y/4),ve(Ne.z/4)];if(f.every((p,d)=>p>=Wn.min[d]-1&&p<=Wn.max[d]+1)){const p=new Set;for(let d=f[0]-1;d<=f[0]+1;d++)for(let g=f[1]-1;g<=f[1]+1;g++)for(let b=f[2]-1;b<=f[2]+1;b++)for(const S of bn.get(d+","+g+","+b)||[])p.has(S)||(p.add(S),S.closestPointToPoint(Ne,Wo),s=le(s,r-Ne.distanceTo(Wo)))}!F.unlocked&&ca(Ne.x,Ne.y)&&(s=le(s,r+.09-Me(Ne.z-Ve.gate.position[2]))),s=le(s,ia(Ne.x,Ne.y,Ne.z,r),sa(Ne.x,Ne.y,Ne.z,r))}return s}const wn=new Set,ro=new Map,wt=e=>wn.has(e)||[...ro.values()].includes(e);function cn(){wn.clear(),ro.clear(),document.querySelectorAll("[data-key].pressed").forEach(e=>e.classList.remove("pressed")),lo=fo=uc=pc=dc=vc=0,zn=-1,uo=0}function Ko(e,t,n,o){const s=Ze;s.x-=e*o,s.y-=t*o,s.z-=n*o;const c=s.vx*e+s.vy*t+s.vz*n;c>0&&(s.vx-=e*c,s.vy-=t*c,s.vz-=n*c)}function ac(){const e=Ze;for(let n=0;n<3;n++)for(const o of xn){const s=gs(o,e.heading),c=e.x+s[0],i=e.y+s[1],r=e.z+s[2],f=o[3],p=Mt(c,i,r)+f;if(p>0){const m=Mt(c+.3,i,r)-Mt(c-.3,i,r),V=Mt(c,i+.3,r)-Mt(c,i-.3,r),I=Mt(c,i,r+.3)-Mt(c,i,r-.3),W=Z(m,V,I);W>.015&&Ko(m/W,V/W,I/W,p+.001)}Ne.set(e.x+s[0],e.y+s[1],e.z+s[2]);const d=ve(Ne.x/4),g=ve(Ne.y/4),b=ve(Ne.z/4),S=new Set;for(let P=d-1;P<=d+1;P++)for(let m=g-1;m<=g+1;m++)for(let V=b-1;V<=b+1;V++)for(const I of bn.get(P+","+m+","+V)||[]){if(S.has(I))continue;S.add(I),I.closestPointToPoint(Ne,Wo);const W=Wo.clone().sub(Ne),K=W.length();K<f&&K>1e-4&&(W.multiplyScalar(1/K),Ko(W.x,W.y,W.z,f-K+.001),Ne.set(e.x+s[0],e.y+s[1],e.z+s[2]))}const z=e.x+s[0],N=e.y+s[1],B=e.z+s[2]-Ve.gate.position[2];!F.unlocked&&ca(z,N)&&Me(B)<f+.09&&Ko(0,0,B>=0?-1:1,f+.09-Me(B)+.001);const l=ni(e.x+s[0],e.y+s[1],e.z+s[2],f);l&&(Ko(l.gx,l.gy,l.gz,l.amount),F.contactId=l.id||"castle",R[qt]-F.lastContact>.8&&(F.contacts++,F.lastContact=R[qt]))}e.y=Ae(e.y,-50,-2.8);const t=Z(e.x,e.z);t>145&&(e.x*=145/t,e.z*=145/t)}function aa(){const e=Ze;for(const t of Un)if(!t.collected&&Z(e.x-t.position[0],e.y-t.position[1],e.z-t.position[2])<2.3){let n=!0;for(let o=1;o<5;o++){const s=o/5,c=fe(e.x,t.position[0],s),i=fe(e.y,t.position[1],s),r=fe(e.z,t.position[2],s);(Mt(c,i,r)>0||ni(c,i,r,.05))&&(n=!1)}n&&(t.collected=!0,F.counts[t.type]++)}F.unlocked=F.counts.pearl>=20&&F.counts.shell>=12}function ca(e,t){const n=Ve.castle.position,o=e-n[0];return Me(o)<4.8&&t>n[1]+1.4&&t<n[1]+11+Math.sqrt(le(0,4.8**2-o**2))}function cc(){!F.unlocked||F.completed||(F.completed=!0,F.continuing=!1,_e=!0,cn(),Ze.vx=Ze.vy=Ze.vz=0,wo.className="g",ue("complete").hidden=!1,Yo(),ao(),ln(),ue("continue").focus())}const Ft={side:1,crossed:!1};function lc(e){const t=Ze,n=Ve.castle.position[2],o=e[2]-n,s=t.z-n;if(o>0&&s<=0||o<0&&s>=0){const c=o/(o-s);Ft.crossed=F.unlocked&&Ft.side===Math.sign(o)&&ra(fe(e[0],t.x,c),fe(e[1],t.y,c),t.heading)>.01}if(Me(s)>6){const c=Math.sign(s);Ft.crossed&&c!==Ft.side&&(F.passages++,c<0?F.frontPassages++:F.backPassages++,F.direction=c<0?"\u6B63\u9762 \u2192 \u95E8\u540E":"\u95E8\u540E \u2192 \u6B63\u9762",F.lastPassage=R[qt],cc()),Ft.side=c,Ft.crossed=!1}}function la(e,t,n){const o=Ze,s=le(1,Math.ceil(Z(e,t,n)/.25));for(let c=0;c<s;c++){const i=[o.x,o.y,o.z];if(o.x+=e/s,o.y+=t/s,o.z+=n/s,ac(),aa(),lc(i),F.completed&&!F.continuing)break}}function fa(e){if(_e||F.completed&&!F.continuing)return;const t=Ze,n=Number(wt("KeyD")||wt("ArrowRight"))-Number(wt("KeyA")||wt("ArrowLeft"));t.heading+=n*1.15*e+lo*.0022,t.pitch=Ae(t.pitch-fo*.0022,-1.2,1.2),lo=fo=0,zn>=0&&(t.heading+=Ae((pi-ka)/90,-1,1)*e,t.pitch=Ae(t.pitch-Ae((di-Ma)/90,-1,1)*e,-1.2,1.2));const o=Number(wt("KeyW")||wt("ArrowUp")||zn>=0)-Number(wt("KeyS")||wt("ArrowDown")),s=Number(wt("KeyE"))-Number(wt("KeyQ")),c=wt("ShiftLeft")||wt("ShiftRight")?11:6.2,i=le(1,Z(o,s)),r=1-hn(-e*3.5);t.vx+=(Se(t.heading)*o/i*c-t.vx)*r,t.vy+=(s/i*c-t.vy)*r,t.vz+=(-ke(t.heading)*o/i*c-t.vz)*r,la(t.vx*e,t.vy*e,t.vz*e),ln()}function Kn(){if(F.inspection){const{eye:o,target:s}=F.inspection;R[Qe]=o[0],R[Je]=o[1],R[et]=o[2],R[eo]=Math.atan2(s[0]-o[0],-(s[2]-o[2])),R[to]=Math.atan2(s[1]-o[1],Z(s[0]-o[0],s[2]-o[2]));return}const e=Ze,t=Se(e.heading),n=-ke(e.heading);if(F.view==="cockpit")R[Qe]=e.x+t*.35,R[Je]=e.y+.25,R[et]=e.z+n*.35,R[eo]=e.heading,R[to]=e.pitch;else{let o=14;for(let s=.5;s<=14;s+=.5)if(Mt(e.x-t*s,e.y+6.2*s/14,e.z-n*s)>-.45||ni(e.x-t*s,e.y+6.2*s/14,e.z-n*s,.45)!==null){o=le(.6,s-.6);break}R[Qe]=e.x-t*o,R[Je]=Ue(-.8,e.y+6.2*o/14),R[et]=e.z-n*o,R[eo]=e.heading,R[to]=Math.atan2(1.6-6.2*o/14,o+4)+e.pitch*.5}}function ln(){const e=Ze,t=F.counts;ue("pearls").textContent="\u73CD\u73E0 "+t.pearl+" / 20",ue("shells").textContent="\u8D1D\u58F3 "+t.shell+" / 12",ue("depth").textContent=Math.round(-e.y)+" m",ue("speed").textContent=Z(e.vx,e.vy,e.vz).toFixed(1)+" m/s";const n=s=>Z(e.x-s.position[0],e.y-s.position[1],e.z-s.position[2]),o=F.unlocked?{position:Ve.gate.position,type:"gate"}:Un.filter(s=>!s.collected&&(s.type==="pearl"?t.pearl<20:t.shell<12)).sort((s,c)=>n(s)-n(c))[0];if(o){const s=o.position,c=n(o),i=Math.atan2(s[0]-e.x,-(s[2]-e.z)),r=Math.atan2(Se(i-e.heading),ke(i-e.heading));ue("bearing").style.transform="rotate("+r+"rad)",ue("target").textContent=(o.type==="gate"?"\u6D77\u5173\u57CE\u5821":o.type==="shell"?"\u8D1D\u58F3":"\u73CD\u73E0")+" \xB7 "+Math.round(c)+" m",ue("altitude").textContent=Me(s[1]-e.y)<1.2?"\u540C\u4E00\u6DF1\u5EA6":s[1]>e.y?"\u5411\u4E0A "+Math.round(s[1]-e.y)+" m":"\u5411\u4E0B "+Math.round(e.y-s[1])+" m"}ue("gate-status").textContent=F.completed?"\u63A2\u7D22\u5B8C\u6210 \xB7 \u53EF\u7EE7\u7EED\u822A\u884C":F.unlocked?"\u6D77\u95E8\u5DF2\u5F00\u542F \xB7 \u5B8C\u6574\u7A7F\u8FC7\u5373\u53EF\u901A\u5173":"\u6536\u96C6\u4E24\u79CD\u7269\u54C1\uFF0C\u5F00\u542F\u6D77\u95E8",ue("view").textContent=F.view==="external"?"\u9A7E\u9A76\u8231 \xB7 V":"\u5916\u90E8\u89C6\u89D2 \xB7 V",ue("gate-distance").textContent="\u6D77\u95E8 "+Math.round(Z(e.x-Ve.gate.position[0],e.y-Ve.gate.position[1],e.z-Ve.gate.position[2]))+" m",document.querySelectorAll("[data-destination]").forEach(s=>s.classList.toggle("on",s.dataset.destination===F.landmark))}function Xo(e){const t=Ve.landmarks.find(o=>o.id===e);if(!t)return;const n=Ze;[n.x,n.y,n.z]=t.approach,n.heading=t.heading,n.pitch=.1,n.vx=n.vy=n.vz=0,F.landmark=e,F.inspection=null,Ft.side=Math.sign(n.z-Ve.castle.position[2]),Ft.crossed=!1,cn(),Kn(),ln()}function Ho(){Xo("castle")}function ua(){for(const e of Un)e.collected=!1;Object.assign(F,{counts:{pearl:0,shell:0},passages:0,frontPassages:0,backPassages:0,contacts:0,lastContact:-100,lastPassage:-100,direction:"\u5C1A\u672A\u7A7F\u95E8",unlocked:!1,completed:!1,continuing:!1}),ue("complete").hidden=!0,Ho(),po()}function pa(){F.view=F.view==="external"?"cockpit":"external",ln()}let oi=!1;function Yo(){oi=!0,document.exitPointerLock?.()}function da(){!F.started||F.completed&&!F.continuing||(_e?po():(lt(!0),Yo()))}const si=window.parent!==window&&new URLSearchParams(location.search).has("host"),Rt=new Audio(window.V3_ASSETS.music);Rt.loop=!0,Rt.volume=.28;function ao(){Rt.pause(),Vt&&Vt.suspend().catch(()=>{})}function ii(e){si&&window.parent.postMessage({source:"loopie-sea",type:e,started:F.started},location.origin)}function co(){cn(),Ze.vx=Ze.vy=Ze.vz=0,lt(!0),Yo(),ao(),document.fullscreenElement&&document.exitFullscreen?.()?.catch(()=>{}),si?ii("back"):location.href="index.html"}function va(){(document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.())?.catch(()=>{ue("fullscreen").title="\u6D4F\u89C8\u5668\u672A\u5141\u8BB8\u5168\u5C4F\uFF0C\u53EF\u4F7F\u7528\u6D4F\u89C8\u5668\u81EA\u5E26\u7684\u5168\u5C4F\u529F\u80FD"})}function fc(){ue("o").onclick=da,ue("exit").onclick=co,ue("menu-map").onclick=co,ue("finish-map").onclick=co;let e=!1;addEventListener("message",t=>{!si||t.source!==window.parent||t.origin!==location.origin||t.data?.source!=="loopie-host"||(t.data.type==="pause"?(F.hostSuspended||(e=!_e,F.hostSuspended=!0),cn(),lt(!0),Yo(),ao()):t.data.type==="resume"&&(F.hostSuspended=!1,(e||t.data.play)&&(!F.completed||F.continuing)&&po(),e=!1))}),addEventListener("keydown",t=>{t.code==="Escape"&&(t.preventDefault(),co())}),ue("view").onclick=pa,ue("home").onclick=Ho,ue("continue").onclick=()=>{F.continuing=!0,ue("complete").hidden=!0,po()},ue("restart").onclick=ua,ue("mute").onclick=()=>{Cn(),Vi(),Rt.muted=!Rt.muted,ue("mute").textContent=ue("mute").textContent==="\u9759\u97F3 \xB7 M"?"\u58F0\u97F3 \xB7 M":"\u9759\u97F3 \xB7 M"},ue("fullscreen").onclick=va;for(const t of document.querySelectorAll("[data-destination]"))t.onclick=()=>{_e||Xo(t.dataset.destination)};document.addEventListener("fullscreenchange",()=>{ue("fullscreen").textContent=document.fullscreenElement?"\u9000\u51FA\u5168\u5C4F \xB7 F":"\u5168\u5C4F \xB7 F"});for(const t of document.querySelectorAll("[data-key]")){t.addEventListener("pointerdown",o=>{o.preventDefault(),!_e&&(t.setPointerCapture(o.pointerId),ro.set(o.pointerId,t.dataset.key),t.classList.add("pressed"))});const n=o=>{ro.delete(o.pointerId),t.classList.remove("pressed")};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),t.addEventListener("lostpointercapture",n)}addEventListener("keydown",t=>{if((t.code==="KeyF"||t.code==="KeyX")&&!t.ctrlKey&&!t.metaKey&&!t.altKey&&F.started&&(!F.completed||F.continuing)){t.preventDefault(),t.repeat||(t.code==="KeyF"?va():co());return}if((t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&F.started&&(!F.completed||F.continuing)){t.preventDefault(),t.repeat||da();return}_e||(["KeyW","KeyS","KeyA","KeyD","KeyE","KeyQ","ShiftLeft","ShiftRight","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&(t.preventDefault(),wn.add(t.code)),t.repeat||(t.code==="KeyV"&&pa(),t.code==="KeyR"&&Ho()))}),addEventListener("keyup",t=>{wn.delete(t.code),(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&F.started&&(!F.completed||F.continuing)&&t.preventDefault()}),addEventListener("blur",()=>{cn(),F.started&&(!F.completed||F.continuing)&&lt(!0)}),document.addEventListener("visibilitychange",()=>{document.hidden&&(cn(),F.started&&(!F.completed||F.continuing)&&lt(!0))}),ln(),window.__abyssalV3={snapshot:()=>({renderer:"native WebGPU",trial:!1,version:24,started:F.started,hostSuspended:!!F.hostSuspended,audio:{context:Vt?.state??"uninitialized",musicPaused:Rt.paused,musicMuted:Rt.muted},input:{keys:[...wn],touch:[...ro.values()]},targets:{pearl:20,shell:12},selectedLandmark:F.landmark,lighting:{adjusted:!0,purpleScatter:[.22,.5,.66],exposure:.54,rays:.32,camera:[R[Qe],R[Je],R[et]],zone:Bt[51],cameraExposure:Bt[56]},landmarks:ti.map(t=>({id:t.id,position:t.position,spec:t.geometry.spec,bounds:t.geometry.bounds,triangles:t.geometry.triangles,collisionTriangles:t.geometry.collisionTriangles,collision:t.solver.info,shadowBaked:!0})),castle:{position:Ve.castle.position,spec:Gn.spec,bounds:Gn.bounds,triangles:Gn.triangles,collisionTriangles:Gn.collisionTriangles,shadowBaked:$0,collision:ic},passages:F.passages,frontPassages:F.frontPassages,backPassages:F.backPassages,contacts:F.contacts,quality:Ce,originalWorld:!0,originalFullPost:!0,player:{...Ze},view:F.view,counts:{...F.counts},unlocked:F.unlocked,completed:F.completed,continuing:F.continuing,paused:_e,time:R[qt],fishCount:Cr,mantaCount:Vr,leafCount:H.big.start[H.big.start.length-1],items:Un.map(t=>({id:t.id,type:t.type,position:[...t.position],collected:t.collected})),gate:{...Ve.gate},route:Ve.route,canvas:[Ie,Xe],gpuMs:R[Ns],buffers:Do,cockpit:rn.snapshot(),shipCollisionCells:bn.size}),teleport:(t,n,o,s=0)=>{Object.assign(Ze,{x:t,y:n,z:o,heading:s,vx:0,vy:0,vz:0}),F.inspection=null,Ft.side=Math.sign(o-Ve.castle.position[2]),Ft.crossed=!1,cn(),Kn(),ln()},step:(t=1/60,n=1)=>{for(let o=0;o<n;o++)_e||(R[qt]+=t),fa(t);Kn(),Hn()},move:(t,n,o)=>la(t,n,o),collect:()=>{aa(),ln()},input:(t,n)=>n?wn.add(t):wn.delete(t),pause:()=>lt(!0),resume:()=>{lt(!1),F.started=!0},home:Ho,reset:ua,inspect:(t,n)=>{lt(!0),F.inspection={eye:t,target:n},F.view="external",Kn(),Hn()},render:()=>Hn(),doorClearance:ra,castlePenetration:ia,gotoLandmark:Xo,landmarkPenetration:sa,landmarkContact:oa,fixedTime:t=>{lt(!0),R[qt]=t,Hn()},view:t=>{F.view=t,ln()},clearance:(t,n,o,s=0)=>xs([t,n,o],s),worldClearance:rc,distance:Mt},new URLSearchParams(location.search).has("test")||(window.__abyssalV3={snapshot:window.__abyssalV3.snapshot})}let jo,ri,$o=[],ma,ha;if(ws){jo=te.createQuerySet({type:"timestamp",count:2}),ri=te.createBuffer({size:16,usage:pe.QUERY_RESOLVE|pe.COPY_SRC});for(let e=0;e<6;e++){const t=te.createBuffer({size:16,usage:pe.MAP_READ|pe.COPY_DST}),n={b:t,busy:!1,done:null};n.done=()=>{const o=new BigInt64Array(t.getMappedRange()),s=Number(o[1]-o[0])/1e6;R[Ns]=s,t.unmap(),n.busy=!1,On>0&&s>0&&s<1e3&&(Fo+=s,oo++)},$o.push(n)}ma={querySet:jo,beginningOfPassWriteIndex:0},ha={querySet:jo,endOfPassWriteIndex:1}}let ai=!1,ga=0,xa=0,ya=0,ba=0,wa=0,za=0,Sa=0,lo=0,fo=0,uc=0,pc=0,dc=0,vc=0,ci=0,Zo=0,Qo=1e9,li=1e9,fi=0,ui=0,zn=-1,uo=0,ka=0,Ma=0,pi=0,di=0;const Xn=.6,Ea=.1,mc=.54,hc=.32,Aa=[null],Jo=new Uint8Array(Ee);function Ht(e,t,n,o,s,c,i,r,f){const p=R[Qe],d=R[Je],g=R[et],b=R[Cs],S=R[Vs],z=R[Bs],N=R[ur],B=R[pr],l=R[dr],P=R[vr],m=R[mr],V=c===1?1:ct*ct,I=Xn*Ie/Xe,W=nn*.5,K=W+s,T=r*r*V,C=f*f*V;for(let Y=0;Y<Ee;Y++){const j=Jo[Y],ie=j*Ee,oe=kt+(j+.5)*nn-g,ge=le(Me(oe)-W,0);let de=-1;for(let Q=0;Q<=Ee;Q++){const U=ie+Q;let $=!1;if(Q<Ee){const X=n[U],ae=o[U];if(X<=ae){const xe=Ct+(Q+.5)*nn-p,ot=(X+ae)*.5-d,Fe=(ae-X)*.5+s,pt=le(Me(xe)-W,0),Pt=pt*pt+ge*ge;if(Pt<C&&Pt>=T){const ft=xe*b+ot*S+oe*z+K*Me(b)+Fe*Me(S)+K*Me(z);ft>=0&&Me(xe*N+oe*B)-K*(Me(N)+Me(B))<=ft*I&&($=Me(xe*l+ot*P+oe*m)-K*(Me(l)+Me(m))-Fe*Me(P)<=ft*Xn)}}}if($)de<0&&(de=U);else if(de>=0){const X=t[de],ae=t[U]-X;ae>0&&(c===1?e.drawIndexed(ae*6,1,X*6,0,Co):c?e.drawIndexed(c.ib.length,ae,c.i0,c.v0,X):e.draw(i,ae,0,X)),de=-1}}}}function Hn(){F.hideAdditions||Kn(),J0();const e=R[Qe],t=R[Je],n=R[et],o=R[to],s=R[eo],c=ke(o),i=Se(o),r=ke(s),f=Se(s),p=c*f,d=-c*r,g=-f*i,b=f*p-r*d,S=r*i;R[Cs]=p,R[Vs]=i,R[Bs]=d,R[ur]=r,R[pr]=f,R[dr]=g,R[vr]=b,R[mr]=S;const z=Ie/Xe,N=1/(Xn*z),B=1/Xn,l=Bt;l[0]=r*N,l[4]=0,l[8]=f*N,l[12]=-(r*e+f*n)*N,l[1]=g*B,l[5]=b*B,l[9]=S*B,l[13]=-(g*e+b*t+S*n)*B,l[2]=0,l[6]=0,l[10]=0,l[14]=Ea,l[3]=p,l[7]=i,l[11]=d,l[15]=-(p*e+i*t+d*n),l[32]=e,l[33]=t,l[34]=n,l[35]=R[qt],l[36]=r,l[37]=0,l[38]=f,l[39]=Xn*z,l[40]=g,l[41]=b,l[42]=S,l[43]=Xn,l[44]=p,l[45]=i,l[46]=d,l[47]=Ea;const P=e-xo[0],m=n-xo[1];let V=(44-Lt(P*P+m*m))/18;V=V<0?0:V>1?1:V,l[51]=V*V*(3-2*V);let I=(-t-8)/26;I=I<0?0:I>1?1:I,l[56]=mc*(.6+.4*I),l[57]=hc,l[58]=ct,Ke.writeBuffer(ko,0,Bt),Ui[0]=R[qt],Ke.writeBuffer(Gi,0,Ui);{let C=ve((n-kt)/nn)|0;C=C<0?0:C>Ee-1?Ee-1:C;let Y=0;Jo[Y++]=C;for(let j=1;j<Ee;j++)C-j>=0&&(Jo[Y++]=C-j),C+j<Ee&&(Jo[Y++]=C+j)}const W=te.createCommandEncoder();let K=null;if(ws){for(let C=0;C<$o.length;C++)if(!$o[C].busy){K=$o[C];break}}Rs[0].timestampWrites=K?ma:void 0,so.timestampWrites=K?ha:void 0;let T=W.beginRenderPass(Rs[0]);T.setPipeline(tr),T.setBindGroup(0,L0),T.draw(3),T.end();for(let C=1;C<5;C++)T=W.beginRenderPass(Rs[C]),T.setPipeline(f0),T.setBindGroup(0,C0[C-1]),T.draw(3),T.end();T=W.beginRenderPass(qr),T.setBindGroup(0,Mo),T.setPipeline(m0),T.setVertexBuffer(0,Er),T.setVertexBuffer(1,Rr),T.setIndexBuffer(Ar,"uint32"),Ht(T,bt.start,bt.lo,bt.hi,1.5,1,0,0,240),T.setPipeline(h0),T.setVertexBuffer(0,kr),T.setIndexBuffer(Mr,"uint32");for(let C=0;C<12;C++){const Y=H.solids.ranges[C];Y[1]&&T.drawIndexed(Be[C].ib.length,Y[1],Be[C].i0,Be[C].v0,Y[0])}for(let C=0;C<us;C++){const Y=H.chunks[C],j=C>2&&C<6;T.setVertexBuffer(1,Pr[C]),Ht(T,Y.start,Y.lo,Y.hi,3,Be[14+C],0,0,C>5?30:j?40:96),j&&Ht(T,Y.start,Y.lo,Y.hi,3,Be[20+C],0,40,150)}for(let C=0;C<6;C++){const Y=C===3||C===4;T.setVertexBuffer(1,Tr[C]),Ht(T,H.props[C].start,H.props[C].lo,H.props[C].hi,3,Be[4+C],0,0,Y?6:110),Y&&Ht(T,H.props[C].start,H.props[C].lo,H.props[C].hi,3,Be[18+C],0,6,110)}T.setPipeline(z0),T.setVertexBuffer(1,F0),T.drawIndexed(Us.ib.length,Vr,Us.i0,Us.v0,0),T.setPipeline(w0),T.setVertexBuffer(1,q0),T.drawIndexed(Gs.ib.length,Cr,Gs.i0,Gs.v0,0),tc(T),T.setPipeline(g0),T.setVertexBuffer(0,Lr),Ht(T,H.big.start,H.big.lo,H.big.hi,5,!1,18,0,24),T.setPipeline(x0),Ht(T,H.big.start,H.big.lo,H.big.hi,5,!1,10,24,58),T.setPipeline(b0),T.setVertexBuffer(0,B0),Ht(T,H.bigF.start,H.bigF.lo,H.bigF.hi,5,!1,6,58,150),T.setPipeline(y0),T.setVertexBuffer(0,N0),Ht(T,H.small.start,H.small.lo,H.small.hi,1.5,!1,6,0,70),T.setPipeline(S0),T.draw(4),T.setPipeline(k0),T.draw(4),nc(T),T.setPipeline(M0),T.setVertexBuffer(0,I0),T.draw(4,U0),T.setPipeline(A0),T.setVertexBuffer(0,O0),T.draw(4,D0),T.setPipeline(E0),T.setVertexBuffer(0,_0),T.draw(4,G0),T.end(),T=W.beginRenderPass(Fr),T.setPipeline(ar),T.setBindGroup(0,Or),T.draw(3),T.end(),T=W.beginRenderPass(Ir),T.setPipeline(rr),T.setBindGroup(0,_r),T.draw(3),T.end();for(let C=0;C<io.length;C++)T=W.beginRenderPass(io[C]),T.setPipeline(C===0?u0:C<_o?p0:d0),T.setBindGroup(0,Io[C]),T.draw(3),T.end();so.colorAttachments[0].view=Fi.getCurrentTexture().createView(),T=W.beginRenderPass(so),T.setPipeline(cr),T.setBindGroup(0,Dr),T.draw(3),T.end(),oc(W,so.colorAttachments[0].view),K&&(W.resolveQuerySet(jo,0,2,ri,0),W.copyBufferToBuffer(ri,0,K.b,0,16)),Aa[0]=W.finish(),Ke.submit(Aa),K&&(K.busy=!0,K.b.mapAsync(GPUMapMode.READ).then(K.done))}const vi=new Float64Array([0,0,0,.375,0,0,-.375,0,0,0,.375,0,0,-.375,0,0,0,.375,0,0,-.375]),fn=new Float64Array(7),un=(e,t,n)=>{const o=Ps[(e>>2)+Et*((t>>2)+we/4*(n>>2))];return o>1?Jn[o*64-128+(e&3)+4*(t&3)+16*(n&3)]:o*254-127};function Ra(e){const t=(R[Qe]+vi[e*3]-Ct)/qe-Fn,n=(R[Je]+vi[e*3+1]-Ot)/qe,o=(R[et]+vi[e*3+2]-kt)/qe-Fn,s=t|0,c=n|0,i=o|0,r=t-s,f=n-c,p=un(s,c,i),d=un(s,c+1,i),g=un(s,c,i+1),b=un(s,c+1,i+1),S=p+(un(s+1,c,i)-p)*r,z=d+(un(s+1,c+1,i)-d)*r,N=g+(un(s+1,c,i+1)-g)*r,B=b+(un(s+1,c+1,i+1)-b)*r,l=S+(z-S)*f;fn[e]=(l+(N+(B-N)*f-l)*(o-i))/127}const gc=.5;function Sc(){const e=ve(Lt(R[Fs]*R[Fs]+R[Is]*R[Is]+R[_s]*R[_s])/.4)+1;for(let t=0;t<e;t++){R[Qe]+=R[Fs]/e,R[Je]+=R[Is]/e,R[et]+=R[_s]/e;for(let n=0;n<2;n++){Ra(0);const o=fn[0]+gc;if(o<=0)break;for(let p=1;p<7;p++)Ra(p);let s=fn[1]-fn[2],c=fn[3]-fn[4],i=fn[5]-fn[6];const r=Lt(s*s+c*c+i*i);if(r<.075)break;s/=r,c/=r,i/=r;const f=R[hr]*s+R[gr]*c+R[xr]*i;R[Qe]-=s*o,R[Je]-=c*o,R[et]-=i*o,f>0&&(R[hr]-=s*f,R[gr]-=c*f,R[xr]-=i*f)}}}function Pa(e){if(requestAnimationFrame(Pa),F.hostSuspended){R[To]=e;return}Oo();const t=e-R[To];R[To]=e;let n=t/1e3;if(n>.1&&(n=.1),t<1e3&&(On+=t)>0&&(qo++,On>(_e?400:1e3))){const o=On/qo,s=oo?Fo/oo:0;let c=1;s?(s>13.6||s<9.8)&&(c=11.7/s):o>17.6?(Ks=0,++Ws>1&&(c=15/o,Ws=0,Xs=Ue(Xs*2,60))):(Ws=0,o<12.5?c=15/o:++Ks>Xs&&(c=1.17,Ks=0)),c=c<.5?.5:c>1.7?1.7:c;const i=Ue(Br,no*No),r=le(i/2,Nr),f=At+ct;if(c<1?At>r||ct<=Bo:At<r||ct>=1){const p=c<1?ct>Bo?r:Nr:ct<1?r:i;At*=c,(c<1?At<p:At>p)&&(At=p)}else ct*=Lt(c),ct=ct<Bo?Bo:ct>1?1:ct;f!==At+ct&&mn("customsCastleV2",[Ce,At<i?At|0:"",ct]),qo=On=Fo=oo=0,Oo()}_e||(R[qt]+=n),fa(n),Hn(),ai&&(ci++,t>Zo&&(Zo=t),t<Qo&&(Qo=t),t>li*1.5&&(fi++,ui++),R[Lo]+=t/1e3,R[Lo]>.5&&(Bi.textContent=`${(ci/R[Lo]).toFixed(0)} fps  \xB7  worst frame ${Zo.toFixed(1)} ms  \xB7  late frames ${fi} (total ${ui})  \xB7  GPU ${R[Ns].toFixed(2)} ms  \xB7  ${Ie}x${Xe} (${Ie*100/no|0}%)`,R[Lo]=0,li=Qo,ci=0,Zo=0,Qo=1e9,fi=0))}const Ta=(e,t)=>{switch(e.code){case"KeyW":ga=t;break;case"KeyS":xa=t;break;case"KeyA":ya=t;break;case"KeyD":ba=t;break;case"KeyE":wa=t;break;case"KeyQ":za=t;break;case"ShiftLeft":case"ShiftRight":Sa=t;break;default:t&&!e.repeat&&(e.code==="KeyH"?(ai=!ai,ui=0,li=1e9,Bi.textContent=""):e.code==="KeyM"?(Vi(),Rt.muted=!Rt.muted):e.code==="Escape"?lt(!0):e.code>="Digit1"&&e.code<="Digit3"&&!_e&&!e.repeat&&Xo(["castle","lighthouse","wreck"][e.code.charCodeAt(5)-49]))}};addEventListener("keydown",e=>{_e&&e.code!=="KeyH"&&e.code!=="KeyM"||(Cn(),Ta(e,1))}),addEventListener("keyup",e=>Ta(e,0));const La=()=>{ga=xa=ya=ba=wa=za=Sa=0,zn=-1,uo=0},xc=()=>{Cn();const e=it.requestPointerLock({unadjustedMovement:!0});e&&e.catch&&e.catch(()=>it.requestPointerLock()).catch(()=>0)};it.addEventListener("click",()=>{Jt||xc()}),addEventListener("mousemove",e=>{document.pointerLockElement===it&&(lo+=e.movementX,fo+=e.movementY)}),addEventListener("blur",La);const yc=e=>{e.preventDefault(),Cn(),uo=e.targetTouches.length;let t=null,n=!1;for(let o=0;o<uo;o++)e.targetTouches[o].identifier===zn&&(t=e.targetTouches[o]);if(t||(zn=-1,uo&&(t=e.targetTouches[0],zn=t.identifier,n=!0)),t){const o=t.clientX,s=t.clientY,c=1100/Ue(innerWidth,innerHeight);n?(ka=o,Ma=s):(lo+=(o-pi)*c,fo+=(s-di)*c),pi=o,di=s}};for(const e of["touchstart","touchmove","touchend","touchcancel"])it.addEventListener(e,yc,{passive:!1});let _e=!0;const mi=ue("d"),lt=e=>{if(!ys){if(F.completed&&!F.continuing){_e=!0,wo.className="g";return}_e=e,e&&(cn(),ao()),wo.className=e?"m":document.pointerLockElement?"g p":"g",e?(La(),setTimeout(()=>_e&&mi.focus(),100)):document.activeElement.blur()}},po=()=>{lt(!1),Cn(),F.started=!0,ii("started"),Rt.play().catch(()=>{}),mi.textContent="\u7EE7\u7EED\u63A2\u7D22"};mi.onclick=po,ue("o").onclick=()=>lt(!0),ue("q").querySelectorAll("button").forEach((e,t)=>{t===2-Ce?e.className="on":e.onclick=()=>{mn("customsCastleV2",2-t),location.reload()}}),document.addEventListener("pointerlockchange",()=>{Jt||(document.pointerLockElement===it?(oi=!1,F.started&&!_e&&lt(!1)):!oi&&F.started&&!_e&&lt(!0))}),fc(),Kn(),await Vn("\u63A5\u5165\u6F5C\u6C34\u8231\u4E0E\u6D77\u5E95\u5149\u7167\u2026",1,400),Hn(),await Ke.onSubmittedWorkDone(),setTimeout(mn,15e3,"customsCastleV2Load",""),lt(!0),ii("ready"),requestAnimationFrame(e=>{R[To]=e,requestAnimationFrame(Pa)})})().catch(Jt=>{console.error(Jt),document.body.className="l e",document.getElementById("s").textContent="\u542F\u52A8\u5931\u8D25\uFF1A"+Jt.message});
