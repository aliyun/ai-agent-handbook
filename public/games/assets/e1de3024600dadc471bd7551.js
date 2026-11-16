(()=>{var cd=0,yh=1,hd=2;var vh=1,ml=2,_i=3,Li=0,yn=1,rt=2,Fi=0,ys=1,ni=2,Mh=3,Sh=4,ud=5,es=100,dd=101,fd=102,pd=103,md=104,gd=200,xd=201,_d=202,yd=203,ka=204,Va=205,vd=206,Md=207,Sd=208,bd=209,Ed=210,wd=211,Td=212,Ad=213,Rd=214,gl=0,xl=1,_l=2,vs=3,yl=4,vl=5,Ml=6,Sl=7,bh=0,Cd=1,Id=2,Bi=0,Pd=1,Ld=2,Dd=3,bl=4,Ud=5,Nd=6,Fd=7;var Eh=300,Is=301,Ps=302,El=303,wl=304,Ho=306,jn=1e3,Qi=1001,Ga=1002,bn=1003,Bd=1004;var ko=1005;var Qn=1006,Tl=1007;var rs=1008;var ii=1009,wh=1010,Th=1011,Cr=1012,Al=1013,os=1014,si=1015,Ir=1016,Rl=1017,Cl=1018,Pr=1020,Ah=35902,Rh=35899,Ch=1021,Ih=1022,Wn=1023,mr=1026,Lr=1027,Il=1028,Pl=1029,Ph=1030,Ll=1031;var Dl=1033,Vo=33776,Go=33777,Wo=33778,Xo=33779,Ul=35840,Nl=35841,Fl=35842,Bl=35843,Ol=36196,zl=37492,Hl=37496,kl=37808,Vl=37809,Gl=37810,Wl=37811,Xl=37812,ql=37813,Yl=37814,Zl=37815,$l=37816,Jl=37817,Kl=37818,jl=37819,Ql=37820,ec=37821,tc=36492,nc=36494,ic=36495,sc=36283,rc=36284,oc=36285,ac=36286;var lo=2300,Wa=2301,za=2302,ah=2400,lh=2401,ch=2402;var Od=3200,lc=3201;var Lh=0,zd=1,Oi="",Tt="srgb",Ms="srgb-linear",co="linear",xt="srgb";var _s=7680;var hh=519,Hd=512,kd=513,Vd=514,Dh=515,Gd=516,Wd=517,Xd=518,qd=519,Xa=35044,Uh=35048;var Nh="300 es",Kn=2e3,ho=2001;var Di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lu=1234567,so=Math.PI/180,Ss=180/Math.PI;function fi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function Fh(i,e){return(i%e+e)%e}function Ap(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Rp(i,e,t){return i!==e?(t-i)/(e-i):0}function ro(i,e,t){return(1-t)*i+t*e}function Cp(i,e,t,n){return ro(i,e,1-Math.exp(-t*n))}function Ip(i,e=1){return e-Math.abs(Fh(i,e*2)-e)}function Pp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Lp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Dp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Up(i,e){return i+Math.random()*(e-i)}function Np(i){return i*(.5-Math.random())}function Fp(i){i!==void 0&&(Lu=i);let e=Lu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bp(i){return i*so}function Op(i){return i*Ss}function zp(i){return(i&i-1)===0&&i!==0}function Hp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vp(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Lt={DEG2RAD:so,RAD2DEG:Ss,generateUUID:fi,clamp:Qe,euclideanModulo:Fh,mapLinear:Ap,inverseLerp:Rp,lerp:ro,damp:Cp,pingpong:Ip,smoothstep:Pp,smootherstep:Lp,randInt:Dp,randFloat:Up,randFloatSpread:Np,seededRandom:Fp,degToRad:Bp,radToDeg:Op,isPowerOfTwo:zp,ceilPowerOfTwo:Hp,floorPowerOfTwo:kp,setQuaternionFromProperEuler:Vp,normalize:mt,denormalize:Jn},re=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==p){let g=1-a,m=l*f+c*d+h*p+u*x,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let T=Math.sqrt(y),E=Math.atan2(T,m*v);g=Math.sin(g*E)/T,a=Math.sin(a*E)/T}let _=a*v;if(l=l*g+f*_,c=c*g+d*_,h=h*g+p*_,u=u*g+x*_,g===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Du.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uc=new D,Du=new Kt,Je=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=s[0],g=s[3],m=s[6],v=s[1],y=s[4],_=s[7],T=s[2],E=s[5],C=s[8];return r[0]=o*x+a*v+l*T,r[3]=o*g+a*y+l*E,r[6]=o*m+a*_+l*C,r[1]=c*x+h*v+u*T,r[4]=c*g+h*y+u*E,r[7]=c*m+h*_+u*C,r[2]=f*x+d*v+p*T,r[5]=f*g+d*y+p*E,r[8]=f*m+d*_+p*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=t*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Nc.makeScale(e,t)),this}rotate(e){return this.premultiply(Nc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nc=new Je;function Bh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){let i=gr("canvas");return i.style.display="block",i}var Uu={};function xr(i){i in Uu||(Uu[i]=!0,console.warn(i))}function Zd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Nu=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fu=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gp(){let i={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xt&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(s.r=pr(s.r),s.g=pr(s.g),s.b=pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ms]:{primaries:e,whitePoint:n,transfer:co,toXYZ:Nu,fromXYZ:Fu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Nu,fromXYZ:Fu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}var ht=Gp();function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Js,qa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Js===void 0&&(Js=gr("canvas")),Js.width=e.width,Js.height=e.height;let s=Js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Js}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=gr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wp=0,_r=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fc(s[o].image)):r.push(Fc(s[o]))}else r=Fc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Fc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Xp=0,Bc=new D,hn=class i extends Di{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Qi,s=Qi,r=Qn,o=rs,a=Wn,l=ii,c=i.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=fi(),this.name="",this.source=new _r(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bc).x}get height(){return this.source.getSize(Bc).y}get depth(){return this.source.getSize(Bc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jn:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case Ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jn:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case Ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Eh;hn.DEFAULT_ANISOTROPY=1;var gt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,_=(d+1)/2,T=(m+1)/2,E=(h+f)/4,C=(u+x)/4,P=(p+g)/4;return y>_&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=C/n):_>T?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=P/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=P/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ya=class extends Di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new hn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new _r(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends Ya{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},uo=class extends hn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Za=class extends hn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),da.copy(n.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),fa.subVectors(this.max,Yr),Ks.subVectors(e.a,Yr),js.subVectors(e.b,Yr),Qs.subVectors(e.c,Yr),Yi.subVectors(js,Ks),Zi.subVectors(Qs,js),ps.subVectors(Ks,Qs);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-ps.z,ps.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,ps.z,0,-ps.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-ps.y,ps.x,0];return!Oc(t,Ks,js,Qs,fa)||(t=[1,0,0,0,1,0,0,0,1],!Oc(t,Ks,js,Qs,fa))?!1:(pa.crossVectors(Yi,Zi),t=[pa.x,pa.y,pa.z],Oc(t,Ks,js,Qs,fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wi=[new D,new D,new D,new D,new D,new D,new D,new D],Yn=new D,da=new mi,Ks=new D,js=new D,Qs=new D,Yi=new D,Zi=new D,ps=new D,Yr=new D,fa=new D,pa=new D,ms=new D;function Oc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ms.fromArray(i,r);let a=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=e.dot(ms),c=t.dot(ms),h=n.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var qp=new mi,Zr=new D,zc=new D,Ln=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);let t=Zr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Zr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(zc)),this.expandByPoint(Zr.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ti=new D,Hc=new D,ma=new D,$i=new D,kc=new D,ga=new D,Vc=new D,fo=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Hc.copy(e).add(t).multiplyScalar(.5),ma.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(Hc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ma),a=$i.dot(this.direction),l=-$i.dot(ma),c=$i.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Hc).addScaledVector(ma,f),d}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);let n=Ti.dot(this.direction),s=Ti.dot(Ti)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,s,r){kc.subVectors(t,e),ga.subVectors(n,e),Vc.crossVectors(kc,ga);let o=this.direction.dot(Vc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);let l=a*this.direction.dot(ga.crossVectors($i,ga));if(l<0)return null;let c=a*this.direction.dot(kc.cross($i));if(c<0||l+c>o)return null;let h=-a*$i.dot(Vc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,p,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,p,x,g)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/er.setFromMatrixColumn(e,0).length(),r=1/er.setFromMatrixColumn(e,1).length(),o=1/er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yp,e,Zp)}lookAt(e,t,n){let s=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Ji.crossVectors(n,In),Ji.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Ji.crossVectors(n,In)),Ji.normalize(),xa.crossVectors(In,Ji),s[0]=Ji.x,s[4]=xa.x,s[8]=In.x,s[1]=Ji.y,s[5]=xa.y,s[9]=In.y,s[2]=Ji.z,s[6]=xa.z,s[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],v=n[3],y=n[7],_=n[11],T=n[15],E=s[0],C=s[4],P=s[8],b=s[12],M=s[1],R=s[5],I=s[9],U=s[13],B=s[2],N=s[6],H=s[10],$=s[14],V=s[3],oe=s[7],ce=s[11],xe=s[15];return r[0]=o*E+a*M+l*B+c*V,r[4]=o*C+a*R+l*N+c*oe,r[8]=o*P+a*I+l*H+c*ce,r[12]=o*b+a*U+l*$+c*xe,r[1]=h*E+u*M+f*B+d*V,r[5]=h*C+u*R+f*N+d*oe,r[9]=h*P+u*I+f*H+d*ce,r[13]=h*b+u*U+f*$+d*xe,r[2]=p*E+x*M+g*B+m*V,r[6]=p*C+x*R+g*N+m*oe,r[10]=p*P+x*I+g*H+m*ce,r[14]=p*b+x*U+g*$+m*xe,r[3]=v*E+y*M+_*B+T*V,r[7]=v*C+y*R+_*N+T*oe,r[11]=v*P+y*I+_*H+T*ce,r[15]=v*b+y*U+_*$+T*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+g*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+m*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],x=e[13],g=e[14],m=e[15],v=u*g*c-x*f*c+x*l*d-a*g*d-u*l*m+a*f*m,y=p*f*c-h*g*c-p*l*d+o*g*d+h*l*m-o*f*m,_=h*x*c-p*u*c+p*a*d-o*x*d-h*a*m+o*u*m,T=p*u*l-h*x*l-p*a*f+o*x*f+h*a*g-o*u*g,E=t*v+n*y+s*_+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/E;return e[0]=v*C,e[1]=(x*f*r-u*g*r-x*s*d+n*g*d+u*s*m-n*f*m)*C,e[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*m+n*l*m)*C,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*C,e[4]=y*C,e[5]=(h*g*r-p*f*r+p*s*d-t*g*d-h*s*m+t*f*m)*C,e[6]=(p*l*r-o*g*r-p*s*c+t*g*c+o*s*m-t*l*m)*C,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*C,e[8]=_*C,e[9]=(p*u*r-h*x*r-p*n*d+t*x*d+h*n*m-t*u*m)*C,e[10]=(o*x*r-p*a*r+p*n*c-t*x*c-o*n*m+t*a*m)*C,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*C,e[12]=T*C,e[13]=(h*x*s-p*u*s+p*n*f-t*x*f-h*n*g+t*u*g)*C,e[14]=(p*a*s-o*x*s-p*n*l+t*x*l+o*n*g-t*a*g)*C,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,g=o*u,m=a*u,v=l*c,y=l*h,_=l*u,T=n.x,E=n.y,C=n.z;return s[0]=(1-(x+m))*T,s[1]=(d+_)*T,s[2]=(p-y)*T,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(f+m))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(p+y)*C,s[9]=(g-v)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=er.set(s[0],s[1],s[2]).length(),o=er.set(s[4],s[5],s[6]).length(),a=er.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zn.copy(this);let c=1/r,h=1/o,u=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=u,Zn.elements[9]*=u,Zn.elements[10]*=u,t.setFromRotationMatrix(Zn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Kn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Kn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ho)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Kn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Kn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===ho)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},er=new D,Zn=new ct,Yp=new D(0,0,0),Zp=new D(1,1,1),Ji=new D,xa=new D,In=new D,Bu=new ct,Ou=new Kt,ei=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var po=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$p=0,zu=new D,tr=new Kt,Ai=new ct,_a=new D,$r=new D,Jp=new D,Kp=new Kt,Hu=new D(1,0,0),ku=new D(0,1,0),Vu=new D(0,0,1),Gu={type:"added"},jp={type:"removed"},nr={type:"childadded",child:null},Gc={type:"childremoved",child:null},pt=class i extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new ei,n=new Kt,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Je}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(Hu,e)}rotateY(e){return this.rotateOnAxis(ku,e)}rotateZ(e){return this.rotateOnAxis(Vu,e)}translateOnAxis(e,t){return zu.copy(e).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hu,e)}translateY(e){return this.translateOnAxis(ku,e)}translateZ(e){return this.translateOnAxis(Vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_a.copy(e):_a.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt($r,_a,this.up):Ai.lookAt(_a,$r,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(Ai),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gu),nr.child=e,this.dispatchEvent(nr),nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jp),Gc.child=e,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gu),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,Jp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,Kp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};pt.DEFAULT_UP=new D(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new D,Ri=new D,Wc=new D,Ci=new D,ir=new D,sr=new D,Wu=new D,Xc=new D,qc=new D,Yc=new D,Zc=new gt,$c=new gt,Jc=new gt,Ii=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$n.subVectors(s,t),Ri.subVectors(n,t),Wc.subVectors(e,t);let o=$n.dot($n),a=$n.dot(Ri),l=$n.dot(Wc),c=Ri.dot(Ri),h=Ri.dot(Wc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Zc.setScalar(0),$c.setScalar(0),Jc.setScalar(0),Zc.fromBufferAttribute(e,t),$c.fromBufferAttribute(e,n),Jc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Zc,r.x),o.addScaledVector($c,r.y),o.addScaledVector(Jc,r.z),o}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),Ri.subVectors(e,t),$n.cross(Ri).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),$n.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ir.subVectors(s,n),sr.subVectors(r,n),Xc.subVectors(e,n);let l=ir.dot(Xc),c=sr.dot(Xc);if(l<=0&&c<=0)return t.copy(n);qc.subVectors(e,s);let h=ir.dot(qc),u=sr.dot(qc);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ir,o);Yc.subVectors(e,r);let d=ir.dot(Yc),p=sr.dot(Yc);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(sr,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Wu.subVectors(r,s),a=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(Wu,a);let m=1/(g+x+f);return o=x*m,a=f*m,t.copy(n).addScaledVector(ir,o).addScaledVector(sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},ya={h:0,s:0,l:0};function Kc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=Fh(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Kc(o,r,e+1/3),this.g=Kc(o,r,e),this.b=Kc(o,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=$d[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return ht.workingToColorSpace(cn.copy(this),e),Math.round(Qe(cn.r*255,0,255))*65536+Math.round(Qe(cn.g*255,0,255))*256+Math.round(Qe(cn.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(cn.copy(this),t);let n=cn.r,s=cn.g,r=cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Tt){ht.workingToColorSpace(cn.copy(this),e);let t=cn.r,n=cn.g,s=cn.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(ya);let n=ro(Ki.h,ya.h,t),s=ro(Ki.s,ya.s,t),r=ro(Ki.l,ya.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Fe;Fe.NAMES=$d;var Qp=0,gi=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=ys,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Va,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Va&&(n.blendDst=this.blendDst),this.blendEquation!==es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},nn=class extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new D,va=new re,em=0,Mt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:em++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xa,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xa&&(e.usage=this.usage),e}};var mo=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var go=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var He=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},tm=0,Vn=new ct,jc=new pt,rr=new D,Pn=new mi,Jr=new mi,Jt=new D,st=class i extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bh(e)?go:mo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new He(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Pn.min,Jr.min),Pn.expandByPoint(Jt),Jt.addVectors(Pn.max,Jr.max),Pn.expandByPoint(Jt)):(Pn.expandByPoint(Jr.min),Pn.expandByPoint(Jr.max))}Pn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Jt.fromBufferAttribute(a,c),l&&(rr.fromBufferAttribute(e,c),Jt.add(rr)),s=Math.max(s,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new D,l[P]=new D;let c=new D,h=new D,u=new D,f=new re,d=new re,p=new re,x=new D,g=new D;function m(P,b,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let R=1/(d.x*p.y-p.x*d.y);isFinite(R)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(R),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(R),a[P].add(x),a[b].add(x),a[M].add(x),l[P].add(g),l[b].add(g),l[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,b=v.length;P<b;++P){let M=v[P],R=M.start,I=M.count;for(let U=R,B=R+I;U<B;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let y=new D,_=new D,T=new D,E=new D;function C(P){T.fromBufferAttribute(s,P),E.copy(T);let b=a[P];y.copy(b),y.sub(T.multiplyScalar(T.dot(b))).normalize(),_.crossVectors(E,b);let R=_.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,R)}for(let P=0,b=v.length;P<b;++P){let M=v[P],R=M.start,I=M.count;for(let U=R,B=R+I;U<B;U+=3)C(e.getX(U+0)),C(e.getX(U+1)),C(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new Mt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xu=new ct,gs=new fo,Ma=new Ln,qu=new D,Sa=new D,ba=new D,Ea=new D,Qc=new D,wa=new D,Yu=new D,Ta=new D,tt=class extends pt{constructor(e=new st,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Qc.fromBufferAttribute(u,e),o?wa.addScaledVector(Qc,h):wa.addScaledVector(Qc.sub(t),h))}t.add(wa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),gs.copy(e.ray).recast(e.near),!(Ma.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Ma,qu)===null||gs.origin.distanceToSquared(qu)>(e.far-e.near)**2))&&(Xu.copy(r).invert(),gs.copy(e.ray).applyMatrix4(Xu),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],v=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=v,T=y;_<T;_+=3){let E=a.getX(_),C=a.getX(_+1),P=a.getX(_+2);s=Aa(this,m,e,n,c,h,u,E,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let v=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);s=Aa(this,o,e,n,c,h,u,v,y,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],v=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=v,T=y;_<T;_+=3){let E=_,C=_+1,P=_+2;s=Aa(this,m,e,n,c,h,u,E,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let v=g,y=g+1,_=g+2;s=Aa(this,o,e,n,c,h,u,v,y,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function nm(i,e,t,n,s,r,o,a){let l;if(e.side===yn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Li,a),l===null)return null;Ta.copy(a),Ta.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ta);return c<t.near||c>t.far?null:{distance:c,point:Ta.clone(),object:i}}function Aa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Sa),i.getVertexPosition(l,ba),i.getVertexPosition(c,Ea);let h=nm(i,e,t,n,Sa,ba,Ea,Yu);if(h){let u=new D;Ii.getBarycoord(Yu,Sa,ba,Ea,u),s&&(h.uv=Ii.getInterpolatedAttribute(s,a,l,c,u,new re)),r&&(h.uv1=Ii.getInterpolatedAttribute(r,a,l,c,u,new re)),o&&(h.normal=Ii.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new D,materialIndex:0};Ii.getNormal(Sa,ba,Ea,f.normal),h.face=f,h.barycoord=u}return h}var Ot=class i extends st{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(u,2));function p(x,g,m,v,y,_,T,E,C,P,b){let M=_/C,R=T/P,I=_/2,U=T/2,B=E/2,N=C+1,H=P+1,$=0,V=0,oe=new D;for(let ce=0;ce<H;ce++){let xe=ce*R-U;for(let _e=0;_e<N;_e++){let Ze=_e*M-I;oe[x]=Ze*v,oe[g]=xe*y,oe[m]=B,c.push(oe.x,oe.y,oe.z),oe[x]=0,oe[g]=0,oe[m]=E>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(_e/C),u.push(1-ce/P),$+=1}}for(let ce=0;ce<P;ce++)for(let xe=0;xe<C;xe++){let _e=f+xe+N*ce,Ze=f+xe+N*(ce+1),nt=f+(xe+1)+N*(ce+1),qe=f+(xe+1)+N*ce;l.push(_e,Ze,qe),l.push(Ze,nt,qe),V+=6}a.addGroup(d,V,b),d+=V,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ls(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=Ls(i[t]);for(let s in n)e[s]=n[s]}return e}function im(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Oh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Jd={clone:Ls,merge:un},sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=im(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},xo=class extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ji=new D,Zu=new re,$u=new re,Vt=class extends xo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,Zu,$u),t.subVectors($u,Zu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(so*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},or=-90,ar=1,$a=class extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(or,ar,e,t);s.layers=this.layers,this.add(s);let r=new Vt(or,ar,e,t);r.layers=this.layers,this.add(r);let o=new Vt(or,ar,e,t);o.layers=this.layers,this.add(o);let a=new Vt(or,ar,e,t);a.layers=this.layers,this.add(a);let l=new Vt(or,ar,e,t);l.layers=this.layers,this.add(l);let c=new Vt(or,ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},_o=class extends hn{constructor(e=[],t=Is,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ja=class extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new _o(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ot(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Fi});r.uniforms.tEquirect.value=t;let o=new tt(s,r),a=t.minFilter;return t.minFilter===rs&&(t.minFilter=Qn),new $a(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},it=class extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},om={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(om)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new it;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var yo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bs=class extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},vo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xa,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gn=new D,vr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Mr=class extends gi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lr,Kr=new D,cr=new D,hr=new D,ur=new re,jr=new re,Kd=new ct,Ra=new D,Qr=new D,Ca=new D,Ju=new re,eh=new re,Ku=new re,Mo=class extends pt{constructor(e=new Mr){if(super(),this.isSprite=!0,this.type="Sprite",lr===void 0){lr=new st;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vo(t,5);lr.setIndex([0,1,2,0,2,3]),lr.setAttribute("position",new vr(n,3,0,!1)),lr.setAttribute("uv",new vr(n,2,3,!1))}this.geometry=lr,this.material=e,this.center=new re(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cr.setFromMatrixScale(this.matrixWorld),Kd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cr.multiplyScalar(-hr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ia(Ra.set(-.5,-.5,0),hr,o,cr,s,r),Ia(Qr.set(.5,-.5,0),hr,o,cr,s,r),Ia(Ca.set(.5,.5,0),hr,o,cr,s,r),Ju.set(0,0),eh.set(1,0),Ku.set(1,1);let a=e.ray.intersectTriangle(Ra,Qr,Ca,!1,Kr);if(a===null&&(Ia(Qr.set(-.5,.5,0),hr,o,cr,s,r),eh.set(0,1),a=e.ray.intersectTriangle(Ra,Ca,Qr,!1,Kr),a===null))return;let l=e.ray.origin.distanceTo(Kr);l<e.near||l>e.far||t.push({distance:l,point:Kr.clone(),uv:Ii.getInterpolation(Kr,Ra,Qr,Ca,Ju,eh,Ku,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ia(i,e,t,n,s,r){ur.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(jr.x=r*ur.x-s*ur.y,jr.y=s*ur.x+r*ur.y):jr.copy(ur),i.copy(e),i.x+=jr.x,i.y+=jr.y,i.applyMatrix4(Kd)}var Ka=class extends hn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=bn,h=bn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sr=class extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},dr=new ct,ju=new ct,Pa=[],Qu=new mi,am=new ct,eo=new tt,to=new Ln,En=class extends tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,am)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dr),Qu.copy(e.boundingBox).applyMatrix4(dr),this.boundingBox.union(Qu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dr),to.copy(e.boundingSphere).applyMatrix4(dr),this.boundingSphere.union(to)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(n),e.ray.intersectsSphere(to)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,dr),ju.multiplyMatrices(n,dr),eo.matrixWorld=ju,eo.raycast(e,Pa);for(let o=0,a=Pa.length;o<a;o++){let l=Pa[o];l.instanceId=r,l.object=this,t.push(l)}Pa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ka(new Float32Array(s*this.count),s,this.count,Il,si));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},th=new D,lm=new D,cm=new Je,ui=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=th.subVectors(n,t).cross(lm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(th),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||cm.getNormalMatrix(e),s=this.coplanarPoint(th).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},xs=new Ln,hm=new re(.5,.5),La=new D,ts=class{constructor(e=new ui,t=new ui,n=new ui,s=new ui,r=new ui,o=new ui){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],v=r[12],y=r[13],_=r[14],T=r[15];if(s[0].setComponents(c-o,d-h,m-p,T-v).normalize(),s[1].setComponents(c+o,d+h,m+p,T+v).normalize(),s[2].setComponents(c+a,d+u,m+x,T+y).normalize(),s[3].setComponents(c-a,d-u,m-x,T-y).normalize(),n)s[4].setComponents(l,f,g,_).normalize(),s[5].setComponents(c-l,d-f,m-g,T-_).normalize();else if(s[4].setComponents(c-l,d-f,m-g,T-_).normalize(),t===Kn)s[5].setComponents(c+l,d+f,m+g,T+_).normalize();else if(t===ho)s[5].setComponents(l,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);let t=hm.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(La.x=s.normal.x>0?e.max.x:e.min.x,La.y=s.normal.y>0?e.max.y:e.min.y,La.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(La)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ns=class extends gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ed=new ct,uh=new fo,Da=new Ln,Ua=new D,Ui=class extends pt{constructor(e=new st,t=new ns){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),Da.radius+=r,e.ray.intersectsSphere(Da)===!1)return;ed.copy(s).invert(),uh.copy(e.ray).applyMatrix4(ed);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let g=c.getX(p);Ua.fromBufferAttribute(u,g),td(Ua,g,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)Ua.fromBufferAttribute(u,p),td(Ua,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function td(i,e,t,n,s,r,o){let a=uh.distanceSqToPoint(i);if(a<t){let l=new D;uh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var xn=class extends hn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},So=class extends hn{constructor(e,t,n=os,s,r,o,a=bn,l=bn,c,h=mr,u=1){if(h!==mr&&h!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _r(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},bo=class extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Gn=class i extends st{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new D,h=new re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(a,3)),this.setAttribute("uv",new He(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},zt=class i extends st{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],g=n/2,m=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(f,3)),this.setAttribute("uv",new He(d,2));function v(){let _=new D,T=new D,E=0,C=(t-e)/n;for(let P=0;P<=r;P++){let b=[],M=P/r,R=M*(t-e)+e;for(let I=0;I<=s;I++){let U=I/s,B=U*l+a,N=Math.sin(B),H=Math.cos(B);T.x=R*N,T.y=-M*n+g,T.z=R*H,u.push(T.x,T.y,T.z),_.set(N,C,H).normalize(),f.push(_.x,_.y,_.z),d.push(U,1-M),b.push(p++)}x.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){let M=x[b][P],R=x[b+1][P],I=x[b+1][P+1],U=x[b][P+1];(e>0||b!==0)&&(h.push(M,R,U),E+=3),(t>0||b!==r-1)&&(h.push(R,I,U),E+=3)}c.addGroup(m,E,0),m+=E}function y(_){let T=p,E=new re,C=new D,P=0,b=_===!0?e:t,M=_===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),p++;let R=p;for(let I=0;I<=s;I++){let B=I/s*l+a,N=Math.cos(B),H=Math.sin(B);C.x=b*H,C.y=g*M,C.z=b*N,u.push(C.x,C.y,C.z),f.push(0,M,0),E.x=N*.5+.5,E.y=H*.5*M+.5,d.push(E.x,E.y),p++}for(let I=0;I<s;I++){let U=T+I,B=R+I;_===!0?h.push(B,B+1,U):h.push(B+1,B,U),P+=3}c.addGroup(m,P,_===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ti=class i extends zt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ja=class i extends st{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new He(r,3)),this.setAttribute("normal",new He(r.slice(),3)),this.setAttribute("uv",new He(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new D,_=new D,T=new D;for(let E=0;E<t.length;E+=3)d(t[E+0],y),d(t[E+1],_),d(t[E+2],T),l(y,_,T,v)}function l(v,y,_,T){let E=T+1,C=[];for(let P=0;P<=E;P++){C[P]=[];let b=v.clone().lerp(_,P/E),M=y.clone().lerp(_,P/E),R=E-P;for(let I=0;I<=R;I++)I===0&&P===E?C[P][I]=b:C[P][I]=b.clone().lerp(M,I/R)}for(let P=0;P<E;P++)for(let b=0;b<2*(E-P)-1;b++){let M=Math.floor(b/2);b%2===0?(f(C[P][M+1]),f(C[P+1][M]),f(C[P][M])):(f(C[P][M+1]),f(C[P+1][M+1]),f(C[P+1][M]))}}function c(v){let y=new D;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let v=new D;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let _=g(v)/2/Math.PI+.5,T=m(v)/Math.PI+.5;o.push(_,1-T)}p(),u()}function u(){for(let v=0;v<o.length;v+=6){let y=o[v+0],_=o[v+2],T=o[v+4],E=Math.max(y,_,T),C=Math.min(y,_,T);E>.9&&C<.1&&(y<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,y){let _=v*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function p(){let v=new D,y=new D,_=new D,T=new D,E=new re,C=new re,P=new re;for(let b=0,M=0;b<r.length;b+=9,M+=6){v.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),E.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),T.copy(v).add(y).add(_).divideScalar(3);let R=g(T);x(E,M+0,v,R),x(C,M+2,y,R),x(P,M+4,_,R)}}function x(v,y,_,T){T<0&&v.x===1&&(o[y]=v.x-1),_.x===0&&_.z===0&&(o[y]=T/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],o=[],a=new D,l=new ct;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Qe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Qe(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},br=class extends Dn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qa=class extends br{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function zh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Na=new D,nh=new zh,ih=new zh,sh=new zh,_n=class extends Dn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Na.subVectors(s[0],s[1]).add(s[0]),c=Na);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Na.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Na),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),nh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,g),ih.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,g),sh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(nh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ih.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),sh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(nh.calc(l),ih.calc(l),sh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function um(i,e){let t=1-i;return t*t*e}function dm(i,e){return 2*(1-i)*i*e}function fm(i,e){return i*i*e}function oo(i,e,t,n){return um(i,e)+dm(i,t)+fm(i,n)}function pm(i,e){let t=1-i;return t*t*t*e}function mm(i,e){let t=1-i;return 3*t*t*i*e}function gm(i,e){return 3*(1-i)*i*i*e}function xm(i,e){return i*i*i*e}function ao(i,e,t,n,s){return pm(i,e)+mm(i,t)+gm(i,n)+xm(i,s)}var Eo=class extends Dn{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ao(e,s.x,r.x,o.x,a.x),ao(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},el=class extends Dn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ao(e,s.x,r.x,o.x,a.x),ao(e,s.y,r.y,o.y,a.y),ao(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wo=class extends Dn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tl=class extends Dn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},To=class extends Dn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(oo(e,s.x,r.x,o.x),oo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ao=class extends Dn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(oo(e,s.x,r.x,o.x),oo(e,s.y,r.y,o.y),oo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ro=class extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(nd(a,l.x,c.x,h.x,u.x),nd(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},nl=Object.freeze({__proto__:null,ArcCurve:Qa,CatmullRomCurve3:_n,CubicBezierCurve:Eo,CubicBezierCurve3:el,EllipseCurve:br,LineCurve:wo,LineCurve3:tl,QuadraticBezierCurve:To,QuadraticBezierCurve3:Ao,SplineCurve:Ro}),il=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new nl[s.type]().fromJSON(s))}return this}},Co=class extends il{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new wo(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new To(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Eo(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ro(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new br(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ni=class extends Co{constructor(e){super(e),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Co().fromJSON(s))}return this}};function _m(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=jd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=bm(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Io(r,o,t,a,l,c,0),o}function jd(i,e,t,n,s){let r;if(s===Um(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=id(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=id(o/n|0,i[o],i[o+1],r);return r&&Er(r,r.next)&&(Lo(r),r=r.next),r}function Es(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Er(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Lo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Io(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Rm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?vm(i,n,s,r):ym(i)){e.push(l.i,i.i,c.i),Lo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Mm(Es(i),e),Io(i,e,t,n,s,r,2)):o===2&&Sm(i,e,t,n,s,r):Io(Es(i),e,t,n,s,r,1);break}}}function ym(i){let e=i.prev,t=i,n=i.next;if(Pt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&io(s,a,r,l,o,c,p.x,p.y)&&Pt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function vm(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Pt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),x=Math.max(a,l,c),g=Math.max(h,u,f),m=dh(d,p,e,t,n),v=dh(x,g,e,t,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=m&&_&&_.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&io(a,h,l,u,c,f,y.x,y.y)&&Pt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&io(a,h,l,u,c,f,_.x,_.y)&&Pt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&io(a,h,l,u,c,f,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&io(a,h,l,u,c,f,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Mm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Er(n,s)&&ef(n,t,t.next,s)&&Po(n,s)&&Po(s,n)&&(e.push(n.i,t.i,s.i),Lo(t),Lo(t.next),t=i=s),t=t.next}while(t!==i);return Es(t)}function Sm(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pm(o,a)){let l=tf(o,a);o=Es(o,o.next),l=Es(l,l.next),Io(o,e,t,n,s,r,0),Io(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function bm(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=jd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Im(c))}s.sort(Em);for(let r=0;r<s.length;r++)t=wm(s[r],t);return t}function Em(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function wm(i,e){let t=Tm(i,e);if(!t)return e;let n=tf(t,i);return Es(n,n.next),Es(t,t.next)}function Tm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Er(i,t))return t;do{if(Er(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Qd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Po(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Am(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Am(i,e){return Pt(i.prev,i,e.prev)<0&&Pt(e.next,i,i.next)<0}function Rm(i,e,t,n){let s=i;do s.z===0&&(s.z=dh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Cm(s)}function Cm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function dh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Im(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Qd(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function io(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Qd(i,e,t,n,s,r,o,a)}function Pm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Lm(i,e)&&(Po(i,e)&&Po(e,i)&&Dm(i,e)&&(Pt(i.prev,i,e.prev)||Pt(i,e.prev,e))||Er(i,e)&&Pt(i.prev,i,i.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Er(i,e){return i.x===e.x&&i.y===e.y}function ef(i,e,t,n){let s=Ba(Pt(i,e,t)),r=Ba(Pt(i,e,n)),o=Ba(Pt(t,n,i)),a=Ba(Pt(t,n,e));return!!(s!==r&&o!==a||s===0&&Fa(i,t,e)||r===0&&Fa(i,n,e)||o===0&&Fa(t,i,n)||a===0&&Fa(t,e,n))}function Fa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ba(i){return i>0?1:i<0?-1:0}function Lm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ef(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Po(i,e){return Pt(i.prev,i,i.next)<0?Pt(i,e,i.next)>=0&&Pt(i,i.prev,e)>=0:Pt(i,e,i.prev)<0||Pt(i,i.next,e)<0}function Dm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function tf(i,e){let t=fh(i.i,i.x,i.y),n=fh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function id(i,e,t,n){let s=fh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Um(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ph=class{static triangulate(e,t,n=2){return _m(e,t,n)}},di=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];sd(e),rd(n,e);let o=e.length;t.forEach(sd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,rd(n,t[l]);let a=ph.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function sd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function rd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Do=class i extends st{constructor(e=new Ni([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new He(s,3)),this.setAttribute("uv",new He(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Nm,y,_=!1,T,E,C,P;m&&(y=m.getSpacedPoints(h),_=!0,f=!1,T=m.computeFrenetFrames(h,!1),E=new D,C=new D,P=new D),f||(g=0,d=0,p=0,x=0);let b=a.extractPoints(c),M=b.shape,R=b.holes;if(!di.isClockWise(M)){M=M.reverse();for(let te=0,ne=R.length;te<ne;te++){let q=R[te];di.isClockWise(q)&&(R[te]=q.reverse())}}function U(te){let q=10000000000000001e-36,K=te[0];for(let ue=1;ue<=te.length;ue++){let ee=ue%te.length,F=te[ee],Q=F.x-K.x,ie=F.y-K.y,w=Q*Q+ie*ie,S=Math.max(Math.abs(F.x),Math.abs(F.y),Math.abs(K.x),Math.abs(K.y)),O=q*S*S;if(w<=O){te.splice(ee,1),ue--;continue}K=F}}U(M),R.forEach(U);let B=R.length,N=M;for(let te=0;te<B;te++){let ne=R[te];M=M.concat(ne)}function H(te,ne,q){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(ne,q)}let $=M.length;function V(te,ne,q){let K,ue,ee,F=te.x-ne.x,Q=te.y-ne.y,ie=q.x-te.x,w=q.y-te.y,S=F*F+Q*Q,O=F*w-Q*ie;if(Math.abs(O)>Number.EPSILON){let X=Math.sqrt(S),se=Math.sqrt(ie*ie+w*w),Y=ne.x-Q/X,Ae=ne.y+F/X,fe=q.x-w/se,Re=q.y+ie/se,Ie=((fe-Y)*w-(Re-Ae)*ie)/(F*w-Q*ie);K=Y+F*Ie-te.x,ue=Ae+Q*Ie-te.y;let he=K*K+ue*ue;if(he<=2)return new re(K,ue);ee=Math.sqrt(he/2)}else{let X=!1;F>Number.EPSILON?ie>Number.EPSILON&&(X=!0):F<-Number.EPSILON?ie<-Number.EPSILON&&(X=!0):Math.sign(Q)===Math.sign(w)&&(X=!0),X?(K=-Q,ue=F,ee=Math.sqrt(S)):(K=F,ue=Q,ee=Math.sqrt(S/2))}return new re(K/ee,ue/ee)}let oe=[];for(let te=0,ne=N.length,q=ne-1,K=te+1;te<ne;te++,q++,K++)q===ne&&(q=0),K===ne&&(K=0),oe[te]=V(N[te],N[q],N[K]);let ce=[],xe,_e=oe.concat();for(let te=0,ne=B;te<ne;te++){let q=R[te];xe=[];for(let K=0,ue=q.length,ee=ue-1,F=K+1;K<ue;K++,ee++,F++)ee===ue&&(ee=0),F===ue&&(F=0),xe[K]=V(q[K],q[ee],q[F]);ce.push(xe),_e=_e.concat(xe)}let Ze;if(g===0)Ze=di.triangulateShape(N,R);else{let te=[],ne=[];for(let q=0;q<g;q++){let K=q/g,ue=d*Math.cos(K*Math.PI/2),ee=p*Math.sin(K*Math.PI/2)+x;for(let F=0,Q=N.length;F<Q;F++){let ie=H(N[F],oe[F],ee);Be(ie.x,ie.y,-ue),K===0&&te.push(ie)}for(let F=0,Q=B;F<Q;F++){let ie=R[F];xe=ce[F];let w=[];for(let S=0,O=ie.length;S<O;S++){let X=H(ie[S],xe[S],ee);Be(X.x,X.y,-ue),K===0&&w.push(X)}K===0&&ne.push(w)}}Ze=di.triangulateShape(te,ne)}let nt=Ze.length,qe=p+x;for(let te=0;te<$;te++){let ne=f?H(M[te],_e[te],qe):M[te];_?(C.copy(T.normals[0]).multiplyScalar(ne.x),E.copy(T.binormals[0]).multiplyScalar(ne.y),P.copy(y[0]).add(C).add(E),Be(P.x,P.y,P.z)):Be(ne.x,ne.y,0)}for(let te=1;te<=h;te++)for(let ne=0;ne<$;ne++){let q=f?H(M[ne],_e[ne],qe):M[ne];_?(C.copy(T.normals[te]).multiplyScalar(q.x),E.copy(T.binormals[te]).multiplyScalar(q.y),P.copy(y[te]).add(C).add(E),Be(P.x,P.y,P.z)):Be(q.x,q.y,u/h*te)}for(let te=g-1;te>=0;te--){let ne=te/g,q=d*Math.cos(ne*Math.PI/2),K=p*Math.sin(ne*Math.PI/2)+x;for(let ue=0,ee=N.length;ue<ee;ue++){let F=H(N[ue],oe[ue],K);Be(F.x,F.y,u+q)}for(let ue=0,ee=R.length;ue<ee;ue++){let F=R[ue];xe=ce[ue];for(let Q=0,ie=F.length;Q<ie;Q++){let w=H(F[Q],xe[Q],K);_?Be(w.x,w.y+y[h-1].y,y[h-1].x+q):Be(w.x,w.y,u+q)}}}j(),ae();function j(){let te=s.length/3;if(f){let ne=0,q=$*ne;for(let K=0;K<nt;K++){let ue=Ze[K];W(ue[2]+q,ue[1]+q,ue[0]+q)}ne=h+g*2,q=$*ne;for(let K=0;K<nt;K++){let ue=Ze[K];W(ue[0]+q,ue[1]+q,ue[2]+q)}}else{for(let ne=0;ne<nt;ne++){let q=Ze[ne];W(q[2],q[1],q[0])}for(let ne=0;ne<nt;ne++){let q=Ze[ne];W(q[0]+$*h,q[1]+$*h,q[2]+$*h)}}n.addGroup(te,s.length/3-te,0)}function ae(){let te=s.length/3,ne=0;Te(N,ne),ne+=N.length;for(let q=0,K=R.length;q<K;q++){let ue=R[q];Te(ue,ne),ne+=ue.length}n.addGroup(te,s.length/3-te,1)}function Te(te,ne){let q=te.length;for(;--q>=0;){let K=q,ue=q-1;ue<0&&(ue=te.length-1);for(let ee=0,F=h+g*2;ee<F;ee++){let Q=$*ee,ie=$*(ee+1),w=ne+K+Q,S=ne+ue+Q,O=ne+ue+ie,X=ne+K+ie;ge(w,S,O,X)}}}function Be(te,ne,q){l.push(te),l.push(ne),l.push(q)}function W(te,ne,q){ze(te),ze(ne),ze(q);let K=s.length/3,ue=v.generateTopUV(n,s,K-3,K-2,K-1);L(ue[0]),L(ue[1]),L(ue[2])}function ge(te,ne,q,K){ze(te),ze(ne),ze(K),ze(ne),ze(q),ze(K);let ue=s.length/3,ee=v.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);L(ee[0]),L(ee[1]),L(ee[3]),L(ee[1]),L(ee[2]),L(ee[3])}function ze(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function L(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Fm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new nl[s.type]().fromJSON(s)),new i(n,e.options)}},Nm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new re(r,o),new re(a,l),new re(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-u),new re(f,1-p),new re(x,1-m)]:[new re(a,1-l),new re(h,1-u),new re(d,1-p),new re(g,1-m)]}};function Fm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ws=class i extends ja{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ts=class i extends st{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Qe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new D,f=new re,d=new D,p=new D,x=new D,g=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let v=0;v<=t;v++){let y=n+v*h*s,_=Math.sin(y),T=Math.cos(y);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*_,u.y=e[E].y,u.z=e[E].x*T,o.push(u.x,u.y,u.z),f.x=v/t,f.y=E/(e.length-1),a.push(f.x,f.y);let C=l[3*E+0]*_,P=l[3*E+1],b=l[3*E+0]*T;c.push(C,P,b)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){let _=y+v*e.length,T=_,E=_+e.length,C=_+e.length+1,P=_+1;r.push(T,E,P),r.push(C,P,E)}this.setIndex(r),this.setAttribute("position",new He(o,3)),this.setAttribute("uv",new He(a,2)),this.setAttribute("normal",new He(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var rn=class i extends st{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let v=m*f-o;for(let y=0;y<c;y++){let _=y*u-r;p.push(_,-v,0),x.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let y=v+c*m,_=v+c*(m+1),T=v+1+c*(m+1),E=v+1+c*m;d.push(y,_,E),d.push(_,T,E)}this.setIndex(d),this.setAttribute("position",new He(p,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Uo=class i extends st{constructor(e=new Ni([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new He(s,3)),this.setAttribute("normal",new He(r,3)),this.setAttribute("uv",new He(o,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,p=f.holes;di.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let v=p[g];di.isClockWise(v)===!0&&(p[g]=v.reverse())}let x=di.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let v=p[g];d=d.concat(v)}for(let g=0,m=d.length;g<m;g++){let v=d[g];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,m=x.length;g<m;g++){let v=x[g],y=v[0]+u,_=v[1]+u,T=v[2]+u;n.push(y,_,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Bm(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Bm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var et=class i extends st{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new D,f=new D,d=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let v=[],y=m/n,_=0;m===0&&o===0?_=.5/t:m===n&&l===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){let E=T/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+y*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(E+_,1-y),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let y=h[m][v+1],_=h[m][v],T=h[m+1][v],E=h[m+1][v+1];(m!==0||o>0)&&d.push(y,_,E),(m!==n-1||l<Math.PI)&&d.push(_,T,E)}this.setIndex(d),this.setAttribute("position",new He(p,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Et=class i extends st{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let p=0;p<=s;p++){let x=p/s*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=s;p++){let x=(s+1)*d+p-1,g=(s+1)*(d-1)+p-1,m=(s+1)*(d-1)+p,v=(s+1)*d+p;o.push(x,g,v),o.push(g,m,v)}this.setIndex(o),this.setAttribute("position",new He(a,3)),this.setAttribute("normal",new He(l,3)),this.setAttribute("uv",new He(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var wn=class i extends st{constructor(e=new Ao(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new re,h=new D,u=[],f=[],d=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(f,3)),this.setAttribute("uv",new He(d,2));function x(){for(let y=0;y<t;y++)g(y);g(r===!1?t:0),v(),m()}function g(y){h=e.getPointAt(y/t,h);let _=o.normals[y],T=o.binormals[y];for(let E=0;E<=s;E++){let C=E/s*Math.PI*2,P=Math.sin(C),b=-Math.cos(C);l.x=b*_.x+P*T.x,l.y=b*_.y+P*T.y,l.z=b*_.z+P*T.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=t;y++)for(let _=1;_<=s;_++){let T=(s+1)*(y-1)+(_-1),E=(s+1)*y+(_-1),C=(s+1)*y+_,P=(s+1)*(y-1)+_;p.push(T,E,P),p.push(E,C,P)}}function v(){for(let y=0;y<=t;y++)for(let _=0;_<=s;_++)c.x=y/t,c.y=_/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new nl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var wt=class extends gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wr=class extends wt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Tr=class extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sl=class extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Oa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Om(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var As=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rl=class extends As{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ah,endingEnd:ah}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case lh:r=e,a=2*t-n;break;case ch:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lh:o=e,l=2*n-t;break;case ch:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(s-t),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,v=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,y=(-1-d)*g+(1.5+d)*x+.5*p,_=d*g-d*x;for(let T=0;T!==a;++T)r[T]=m*o[h+T]+v*o[c+T]+y*o[l+T]+_*o[u+T];return r}},ol=class extends As{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},al=class extends As{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Un=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oa(t,this.TimeBufferType),this.values=Oa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oa(e.times,Array),values:Oa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lo:t=this.InterpolantFactoryMethodDiscrete;break;case Wa:t=this.InterpolantFactoryMethodLinear;break;case za:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lo;case this.InterpolantFactoryMethodLinear:return Wa;case this.InterpolantFactoryMethodSmooth:return za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Om(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===za,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=t[u+p];if(x!==t[f+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Wa;var is=class extends Un{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=lo;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};ll.prototype.ValueTypeName="color";var cl=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};cl.prototype.ValueTypeName="number";var hl=class extends As{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Kt.slerpFlat(r,0,o,c-a,o,c,l);return r}},No=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}};No.prototype.ValueTypeName="quaternion";No.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends Un{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=lo;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};ul.prototype.ValueTypeName="vector";var Ha={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},dl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},nf=new dl,Ar=class{constructor(e){this.manager=e!==void 0?e:nf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ar.DEFAULT_MATERIAL_NAME="__DEFAULT";var fr=new WeakMap,fl=class extends Ar{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ha.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=fr.get(o);u===void 0&&(u=[],fr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=gr("img");function l(){h(),t&&t(this);let u=fr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}fr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ha.remove(`image:${e}`);let f=fr.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}fr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ha.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Fo=class extends Ar{constructor(e){super(e)}load(e,t,n,s){let r=new hn,o=new fl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Rs=class extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Cs=class extends Rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},rh=new ct,od=new D,ad=new D,Bo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;od.setFromMatrixPosition(e.matrixWorld),t.position.copy(od),ad.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ad),t.updateMatrixWorld(),rh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mh=class extends Bo{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ss*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Oo=class extends Rs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new mh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ld=new ct,no=new D,oh=new D,gh=class extends Bo{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),no.setFromMatrixPosition(e.matrixWorld),n.position.copy(no),oh.copy(n.position),oh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(oh),n.updateMatrixWorld(),s.makeTranslation(-no.x,-no.y,-no.z),ld.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ld,n.coordinateSystem,n.reversedDepth)}},xi=class extends Rs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},zo=class extends xo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xh=class extends Bo{constructor(){super(new zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rr=class extends Rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new xh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var pl=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Hh="\\[\\]\\.:\\/",zm=new RegExp("["+Hh+"]","g"),kh="[^"+Hh+"]",Hm="[^"+Hh.replace("\\.","")+"]",km=/((?:WC+[\/:])*)/.source.replace("WC",kh),Vm=/(WCOD+)?/.source.replace("WCOD",Hm),Gm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),Wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),Xm=new RegExp("^"+km+Vm+Gm+Wm+"$"),qm=["material","materials","bones","map"],_h=class{constructor(e,t,n){let s=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zm,"")}static parseTrackName(e){let t=Xm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);qm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=_h;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yv=new Float32Array(1);function Vh(i,e,t,n){let s=Ym(n);switch(t){case Ch:return i*e;case Il:return i*e/s.components*s.byteLength;case Pl:return i*e/s.components*s.byteLength;case Ph:return i*e*2/s.components*s.byteLength;case Ll:return i*e*2/s.components*s.byteLength;case Ih:return i*e*3/s.components*s.byteLength;case Wn:return i*e*4/s.components*s.byteLength;case Dl:return i*e*4/s.components*s.byteLength;case Vo:case Go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wo:case Xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nl:case Bl:return Math.max(i,16)*Math.max(e,8)/4;case Ul:case Fl:return Math.max(i,8)*Math.max(e,8)/2;case Ol:case zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ql:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case tc:case nc:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*16;case sc:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case oc:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ym(i){switch(i){case ii:case wh:return{byteLength:1,components:1};case Cr:case Th:case Ir:return{byteLength:2,components:1};case Rl:case Cl:return{byteLength:2,components:4};case os:case Al:case si:return{byteLength:4,components:1};case Ah:case Rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Af(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function jm(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eg=`#ifdef USE_ALPHAHASH
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
#endif`,tg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ng=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ig=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rg=`#ifdef USE_AOMAP
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
#endif`,og=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ag=`#ifdef USE_BATCHING
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
#endif`,lg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ug=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dg=`#ifdef USE_IRIDESCENCE
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
#endif`,fg=`#ifdef USE_BUMPMAP
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
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sg=`#define PI 3.141592653589793
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
} // validated`,bg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eg=`vec3 transformedNormal = objectNormal;
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
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ig=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
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
#endif`,Fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hg=`#ifdef USE_GRADIENTMAP
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
}`,kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wg=`uniform bool receiveShadow;
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
#endif`,Xg=`#ifdef USE_ENVMAP
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
#endif`,qg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jg=`PhysicalMaterial material;
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
#endif`,Kg=`struct PhysicalMaterial {
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
}`,jg=`
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
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
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l0=`#if defined( USE_POINTS_UV )
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
#endif`,c0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`#ifdef USE_MORPHTARGETS
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
#endif`,m0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,M0=`#ifdef USE_NORMALMAP
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
#endif`,S0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,R0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B0=`float getShadowMask() {
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
}`,O0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,H0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k0=`#ifdef USE_SKINNING
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
#endif`,V0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q0=`#ifdef USE_TRANSMISSION
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
#endif`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,j0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q0=`uniform sampler2D t2D;
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`#include <common>
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
}`,rx=`#if DEPTH_PACKING == 3200
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
}`,ox=`#define DISTANCE
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
}`,ax=`#define DISTANCE
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`uniform float scale;
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
}`,ux=`uniform vec3 diffuse;
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
}`,dx=`#include <common>
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
}`,fx=`uniform vec3 diffuse;
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
}`,px=`#define LAMBERT
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
}`,mx=`#define LAMBERT
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
}`,gx=`#define MATCAP
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
}`,xx=`#define MATCAP
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
}`,_x=`#define NORMAL
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
}`,yx=`#define NORMAL
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
}`,vx=`#define PHONG
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
}`,Mx=`#define PHONG
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
}`,Sx=`#define STANDARD
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
}`,bx=`#define STANDARD
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
}`,Ex=`#define TOON
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
}`,wx=`#define TOON
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
}`,Tx=`uniform float size;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Rx=`#include <common>
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
}`,Cx=`uniform vec3 color;
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
}`,Ix=`uniform float rotation;
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
}`,Px=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Qm,alphahash_pars_fragment:eg,alphamap_fragment:tg,alphamap_pars_fragment:ng,alphatest_fragment:ig,alphatest_pars_fragment:sg,aomap_fragment:rg,aomap_pars_fragment:og,batching_pars_vertex:ag,batching_vertex:lg,begin_vertex:cg,beginnormal_vertex:hg,bsdfs:ug,iridescence_fragment:dg,bumpmap_pars_fragment:fg,clipping_planes_fragment:pg,clipping_planes_pars_fragment:mg,clipping_planes_pars_vertex:gg,clipping_planes_vertex:xg,color_fragment:_g,color_pars_fragment:yg,color_pars_vertex:vg,color_vertex:Mg,common:Sg,cube_uv_reflection_fragment:bg,defaultnormal_vertex:Eg,displacementmap_pars_vertex:wg,displacementmap_vertex:Tg,emissivemap_fragment:Ag,emissivemap_pars_fragment:Rg,colorspace_fragment:Cg,colorspace_pars_fragment:Ig,envmap_fragment:Pg,envmap_common_pars_fragment:Lg,envmap_pars_fragment:Dg,envmap_pars_vertex:Ug,envmap_physical_pars_fragment:Xg,envmap_vertex:Ng,fog_vertex:Fg,fog_pars_vertex:Bg,fog_fragment:Og,fog_pars_fragment:zg,gradientmap_pars_fragment:Hg,lightmap_pars_fragment:kg,lights_lambert_fragment:Vg,lights_lambert_pars_fragment:Gg,lights_pars_begin:Wg,lights_toon_fragment:qg,lights_toon_pars_fragment:Yg,lights_phong_fragment:Zg,lights_phong_pars_fragment:$g,lights_physical_fragment:Jg,lights_physical_pars_fragment:Kg,lights_fragment_begin:jg,lights_fragment_maps:Qg,lights_fragment_end:e0,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:n0,logdepthbuf_pars_vertex:i0,logdepthbuf_vertex:s0,map_fragment:r0,map_pars_fragment:o0,map_particle_fragment:a0,map_particle_pars_fragment:l0,metalnessmap_fragment:c0,metalnessmap_pars_fragment:h0,morphinstance_vertex:u0,morphcolor_vertex:d0,morphnormal_vertex:f0,morphtarget_pars_vertex:p0,morphtarget_vertex:m0,normal_fragment_begin:g0,normal_fragment_maps:x0,normal_pars_fragment:_0,normal_pars_vertex:y0,normal_vertex:v0,normalmap_pars_fragment:M0,clearcoat_normal_fragment_begin:S0,clearcoat_normal_fragment_maps:b0,clearcoat_pars_fragment:E0,iridescence_pars_fragment:w0,opaque_fragment:T0,packing:A0,premultiplied_alpha_fragment:R0,project_vertex:C0,dithering_fragment:I0,dithering_pars_fragment:P0,roughnessmap_fragment:L0,roughnessmap_pars_fragment:D0,shadowmap_pars_fragment:U0,shadowmap_pars_vertex:N0,shadowmap_vertex:F0,shadowmask_pars_fragment:B0,skinbase_vertex:O0,skinning_pars_vertex:z0,skinning_vertex:H0,skinnormal_vertex:k0,specularmap_fragment:V0,specularmap_pars_fragment:G0,tonemapping_fragment:W0,tonemapping_pars_fragment:X0,transmission_fragment:q0,transmission_pars_fragment:Y0,uv_pars_fragment:Z0,uv_pars_vertex:$0,uv_vertex:J0,worldpos_vertex:K0,background_vert:j0,background_frag:Q0,backgroundCube_vert:ex,backgroundCube_frag:tx,cube_vert:nx,cube_frag:ix,depth_vert:sx,depth_frag:rx,distanceRGBA_vert:ox,distanceRGBA_frag:ax,equirect_vert:lx,equirect_frag:cx,linedashed_vert:hx,linedashed_frag:ux,meshbasic_vert:dx,meshbasic_frag:fx,meshlambert_vert:px,meshlambert_frag:mx,meshmatcap_vert:gx,meshmatcap_frag:xx,meshnormal_vert:_x,meshnormal_frag:yx,meshphong_vert:vx,meshphong_frag:Mx,meshphysical_vert:Sx,meshphysical_frag:bx,meshtoon_vert:Ex,meshtoon_frag:wx,points_vert:Tx,points_frag:Ax,shadow_vert:Rx,shadow_frag:Cx,sprite_vert:Ix,sprite_frag:Px},Se={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},yi={basic:{uniforms:un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:un([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:un([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:un([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:un([Se.points,Se.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:un([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:un([Se.common,Se.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:un([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:un([Se.sprite,Se.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:un([Se.common,Se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:un([Se.lights,Se.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};yi.physical={uniforms:un([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var cc={r:0,b:0,g:0},Ds=new ei,Lx=new ct;function Dx(i,e,t,n,s,r,o){let a=new Fe(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function p(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function x(y){let _=!1,T=p(y);T===null?m(a,l):T&&T.isColor&&(m(T,1),_=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,_){let T=p(_);T&&(T.isCubeTexture||T.mapping===Ho)?(h===void 0&&(h=new tt(new Ot(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Ls(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ds.copy(_.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(Ds)),h.material.toneMapped=ht.getTransfer(T.colorSpace)!==xt,(u!==T||f!==T.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new tt(new rn(2,2),new sn({name:"BackgroundMaterial",uniforms:Ls(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ht.getTransfer(T.colorSpace)!==xt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,_){y.getRGB(cc,Oh(i)),n.buffers.color.setClear(cc.r,cc.g,cc.b,_,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:x,addToRenderList:g,dispose:v}}function Ux(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(M,R,I,U,B){let N=!1,H=u(U,I,R);r!==H&&(r=H,c(r.object)),N=d(M,U,I,B),N&&p(M,U,I,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,_(M,R,I,U),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,R,I){let U=I.wireframe===!0,B=n[M.id];B===void 0&&(B={},n[M.id]=B);let N=B[R.id];N===void 0&&(N={},B[R.id]=N);let H=N[U];return H===void 0&&(H=f(l()),N[U]=H),H}function f(M){let R=[],I=[],U=[];for(let B=0;B<t;B++)R[B]=0,I[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:U,object:M,attributes:{},index:null}}function d(M,R,I,U){let B=r.attributes,N=R.attributes,H=0,$=I.getAttributes();for(let V in $)if($[V].location>=0){let ce=B[V],xe=N[V];if(xe===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),ce===void 0||ce.attribute!==xe||xe&&ce.data!==xe.data)return!0;H++}return r.attributesNum!==H||r.index!==U}function p(M,R,I,U){let B={},N=R.attributes,H=0,$=I.getAttributes();for(let V in $)if($[V].location>=0){let ce=N[V];ce===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor));let xe={};xe.attribute=ce,ce&&ce.data&&(xe.data=ce.data),B[V]=xe,H++}r.attributes=B,r.attributesNum=H,r.index=U}function x(){let M=r.newAttributes;for(let R=0,I=M.length;R<I;R++)M[R]=0}function g(M){m(M,0)}function m(M,R){let I=r.newAttributes,U=r.enabledAttributes,B=r.attributeDivisors;I[M]=1,U[M]===0&&(i.enableVertexAttribArray(M),U[M]=1),B[M]!==R&&(i.vertexAttribDivisor(M,R),B[M]=R)}function v(){let M=r.newAttributes,R=r.enabledAttributes;for(let I=0,U=R.length;I<U;I++)R[I]!==M[I]&&(i.disableVertexAttribArray(I),R[I]=0)}function y(M,R,I,U,B,N,H){H===!0?i.vertexAttribIPointer(M,R,I,B,N):i.vertexAttribPointer(M,R,I,U,B,N)}function _(M,R,I,U){x();let B=U.attributes,N=I.getAttributes(),H=R.defaultAttributeValues;for(let $ in N){let V=N[$];if(V.location>=0){let oe=B[$];if(oe===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){let ce=oe.normalized,xe=oe.itemSize,_e=e.get(oe);if(_e===void 0)continue;let Ze=_e.buffer,nt=_e.type,qe=_e.bytesPerElement,j=nt===i.INT||nt===i.UNSIGNED_INT||oe.gpuType===Al;if(oe.isInterleavedBufferAttribute){let ae=oe.data,Te=ae.stride,Be=oe.offset;if(ae.isInstancedInterleavedBuffer){for(let W=0;W<V.locationSize;W++)m(V.location+W,ae.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let W=0;W<V.locationSize;W++)g(V.location+W);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let W=0;W<V.locationSize;W++)y(V.location+W,xe/V.locationSize,nt,ce,Te*qe,(Be+xe/V.locationSize*W)*qe,j)}else{if(oe.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)m(V.location+ae,oe.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ae=0;ae<V.locationSize;ae++)g(V.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let ae=0;ae<V.locationSize;ae++)y(V.location+ae,xe/V.locationSize,nt,ce,xe*qe,xe/V.locationSize*ae*qe,j)}}else if(H!==void 0){let ce=H[$];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(V.location,ce);break;case 3:i.vertexAttrib3fv(V.location,ce);break;case 4:i.vertexAttrib4fv(V.location,ce);break;default:i.vertexAttrib1fv(V.location,ce)}}}}v()}function T(){P();for(let M in n){let R=n[M];for(let I in R){let U=R[I];for(let B in U)h(U[B].object),delete U[B];delete R[I]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let R=n[M.id];for(let I in R){let U=R[I];for(let B in U)h(U[B].object),delete U[B];delete R[I]}delete n[M.id]}function C(M){for(let R in n){let I=n[R];if(I[M.id]===void 0)continue;let U=I[M.id];for(let B in U)h(U[B].object),delete U[B];delete I[M.id]}}function P(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Nx(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*f[x];t.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Wn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let P=C===Ir&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ii&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==si&&!P)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:T,maxSamples:E}}function Bx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ui,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,y=v*4,_=m.clippingState||null;l.value=_,_=h(p,f,y,d);for(let T=0;T!==y;++T)_[T]=t[T];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,_=d;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Ox(i){let e=new WeakMap;function t(o,a){return a===El?o.mapping=Is:a===wl&&(o.mapping=Ps),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===El||a===wl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ja(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ur=4,sf=[.125,.215,.35,.446,.526,.582],Fs=20,Gh=new zo,rf=new Fe,Wh=null,Xh=0,qh=0,Yh=!1,Ns=(1+Math.sqrt(5))/2,Dr=1/Ns,of=[new D(-Ns,Dr,0),new D(Ns,Dr,0),new D(-Dr,0,Ns),new D(Dr,0,Ns),new D(0,Ns,-Dr),new D(0,Ns,Dr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],zx=new D,dc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=zx}=r;Wh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wh,Xh,qh),this._renderer.xr.enabled=Yh,e.scissorTest=!1,hc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Ir,format:Wn,colorSpace:Ms,depthBuffer:!1},s=af(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=af(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hx(r)),this._blurMaterial=kx(r,e,t)}return s}_compileMaterial(e){let t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,Gh)}_sceneToCubeUV(e,t,n,s,r){let l=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(rf),u.toneMapping=Bi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new nn({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new tt(new Ot,x),m=!1,v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,m=!0):(x.color.copy(rf),m=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let T=this._cubeSize;hc(s,_*T,y>2?T:0,T,T),u.setRenderTarget(s),m&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Is||e.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;hc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Gh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=of[(s-r-1)%of.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new tt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Fs-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):Fs;g>Fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fs}`);let m=[],v=0;for(let C=0;C<Fs;++C){let P=C/x,b=Math.exp(-P*P/2);m.push(b),C===0?v+=b:C<g&&(v+=2*b)}for(let C=0;C<m.length;C++)m[C]=m[C]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=p,f.mipInt.value=y-n;let _=this._sizeLods[s],T=3*_*(s>y-Ur?s-y+Ur:0),E=4*(this._cubeSize-_);hc(t,T,E,3*_,2*_),l.setRenderTarget(t),l.render(u,Gh)}};function Hx(i){let e=[],t=[],n=[],s=i,r=i-Ur+1+sf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ur?l=sf[o-i+Ur-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,x=3,g=2,m=1,v=new Float32Array(x*p*d),y=new Float32Array(g*p*d),_=new Float32Array(m*p*d);for(let E=0;E<d;E++){let C=E%3*2/3-1,P=E>2?0:-1,b=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];v.set(b,x*p*E),y.set(f,g*p*E);let M=[E,E,E,E,E,E];_.set(M,m*p*E)}let T=new st;T.setAttribute("position",new Mt(v,x)),T.setAttribute("uv",new Mt(y,g)),T.setAttribute("faceIndex",new Mt(_,m)),e.push(T),s>Ur&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function af(i,e,t){let n=new pi(i,e,t);return n.texture.mapping=Ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function kx(i,e,t){let n=new Float32Array(Fs),s=new D(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function lf(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function cf(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function iu(){return`

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
	`}function Vx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===El||l===wl,h=l===Is||l===Ps;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new dc(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new dc(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Gx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&xr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Wx(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(d!==null){let v=d.array;x=d.version;for(let y=0,_=v.length;y<_;y+=3){let T=v[y+0],E=v[y+1],C=v[y+2];f.push(T,E,E,C,C,T)}}else if(p!==void 0){let v=p.array;x=p.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let T=y+0,E=y+1,C=y+2;f.push(T,E,E,C,C,T)}}else return;let g=new(Bh(f)?go:mo)(f,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Xx(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,f*o,p),t.update(d,n,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];t.update(g,n,1)}function u(f,d,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,p);let m=0;for(let v=0;v<p;v++)m+=d[v]*x[v];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Yx(i,e,t){let n=new WeakMap,s=new gt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*T*4*u),C=new uo(E,_,T,u);C.type=si,C.needsUpdate=!0;let P=y*4;for(let M=0;M<u;M++){let R=g[M],I=m[M],U=v[M],B=_*T*4*M;for(let N=0;N<R.count;N++){let H=N*P;d===!0&&(s.fromBufferAttribute(R,N),E[B+H+0]=s.x,E[B+H+1]=s.y,E[B+H+2]=s.z,E[B+H+3]=0),p===!0&&(s.fromBufferAttribute(I,N),E[B+H+4]=s.x,E[B+H+5]=s.y,E[B+H+6]=s.z,E[B+H+7]=0),x===!0&&(s.fromBufferAttribute(U,N),E[B+H+8]=s.x,E[B+H+9]=s.y,E[B+H+10]=s.z,E[B+H+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new re(_,T)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Zx(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Rf=new hn,hf=new So(1,1),Cf=new uo,If=new Za,Pf=new _o,uf=[],df=[],ff=new Float32Array(16),pf=new Float32Array(9),mf=new Float32Array(4);function Fr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=uf[s];if(r===void 0&&(r=new Float32Array(s),uf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function pc(i,e){let t=df[e];t===void 0&&(t=new Int32Array(e),df[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $x(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function Kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function Qx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;mf.set(n),i.uniformMatrix2fv(this.addr,!1,mf),Yt(t,n)}}function e_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;pf.set(n),i.uniformMatrix3fv(this.addr,!1,pf),Yt(t,n)}}function t_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;ff.set(n),i.uniformMatrix4fv(this.addr,!1,ff),Yt(t,n)}}function n_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function o_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function h_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(hf.compareFunction=Dh,r=hf):r=Rf,t.setTexture2D(e||r,s)}function u_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||If,s)}function d_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pf,s)}function f_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cf,s)}function p_(i){switch(i){case 5126:return $x;case 35664:return Jx;case 35665:return Kx;case 35666:return jx;case 35674:return Qx;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return o_;case 36294:return a_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}function m_(i,e){i.uniform1fv(this.addr,e)}function g_(i,e){let t=Fr(e,this.size,2);i.uniform2fv(this.addr,t)}function x_(i,e){let t=Fr(e,this.size,3);i.uniform3fv(this.addr,t)}function __(i,e){let t=Fr(e,this.size,4);i.uniform4fv(this.addr,t)}function y_(i,e){let t=Fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function v_(i,e){let t=Fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function M_(i,e){let t=Fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function S_(i,e){i.uniform1iv(this.addr,e)}function b_(i,e){i.uniform2iv(this.addr,e)}function E_(i,e){i.uniform3iv(this.addr,e)}function w_(i,e){i.uniform4iv(this.addr,e)}function T_(i,e){i.uniform1uiv(this.addr,e)}function A_(i,e){i.uniform2uiv(this.addr,e)}function R_(i,e){i.uniform3uiv(this.addr,e)}function C_(i,e){i.uniform4uiv(this.addr,e)}function I_(i,e,t){let n=this.cache,s=e.length,r=pc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Rf,r[o])}function P_(i,e,t){let n=this.cache,s=e.length,r=pc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||If,r[o])}function L_(i,e,t){let n=this.cache,s=e.length,r=pc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pf,r[o])}function D_(i,e,t){let n=this.cache,s=e.length,r=pc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cf,r[o])}function U_(i){switch(i){case 5126:return m_;case 35664:return g_;case 35665:return x_;case 35666:return __;case 35674:return y_;case 35675:return v_;case 35676:return M_;case 5124:case 35670:return S_;case 35667:case 35671:return b_;case 35668:case 35672:return E_;case 35669:case 35673:return w_;case 5125:return T_;case 36294:return A_;case 36295:return R_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return D_}}var $h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=p_(t.type)}},Jh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U_(t.type)}},Kh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Zh=/(\w+)(\])?(\[|\.)?/g;function gf(i,e){i.seq.push(e),i.map[e.id]=e}function N_(i,e,t){let n=i.name,s=n.length;for(Zh.lastIndex=0;;){let r=Zh.exec(n),o=Zh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){gf(t,c===void 0?new $h(a,i,e):new Jh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Kh(a),gf(t,u)),t=u}}}var Nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);N_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function xf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var F_=37297,B_=0;function O_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var _f=new Je;function z_(i){ht._getMatrix(_f,ht.workingColorSpace,i);let e=`mat3( ${_f.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case co:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function yf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+O_(i.getShaderSource(e),a)}else return r}function H_(i,e){let t=z_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function k_(i,e){let t;switch(e){case Pd:t="Linear";break;case Ld:t="Reinhard";break;case Dd:t="Cineon";break;case bl:t="ACESFilmic";break;case Nd:t="AgX";break;case Fd:t="Neutral";break;case Ud:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var uc=new D;function V_(){ht.getLuminanceCoefficients(uc);let i=uc.x.toFixed(4),e=uc.y.toFixed(4),t=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function W_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function X_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function qo(i){return i!==""}function vf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(i){return i.replace(q_,Z_)}var Y_=new Map;function Z_(i,e){let t=Ke[e];if(t===void 0){let n=Y_.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return jh(t)}var $_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sf(i){return i.replace($_,J_)}function J_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function K_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ml?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function j_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Is:case Ps:e="ENVMAP_TYPE_CUBE";break;case Ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function ey(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bh:e="ENVMAP_BLENDING_MULTIPLY";break;case Cd:e="ENVMAP_BLENDING_MIX";break;case Id:e="ENVMAP_BLENDING_ADD";break}return e}function ty(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ny(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=K_(t),c=j_(t),h=Q_(t),u=ey(t),f=ty(t),d=G_(t),p=W_(r),x=s.createProgram(),g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(qo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(qo).join(`
`),m.length>0&&(m+=`
`)):(g=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),m=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Bi?k_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,H_("linearToOutputTexel",t.outputColorSpace),V_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qo).join(`
`)),o=jh(o),o=vf(o,t),o=Mf(o,t),a=jh(a),a=vf(a,t),a=Mf(a,t),o=Sf(o),a=Sf(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=v+g+o,_=v+m+a,T=xf(s,s.VERTEX_SHADER,y),E=xf(s,s.FRAGMENT_SHADER,_);s.attachShader(x,T),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(R){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(x)||"",U=s.getShaderInfoLog(T)||"",B=s.getShaderInfoLog(E)||"",N=I.trim(),H=U.trim(),$=B.trim(),V=!0,oe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,E);else{let ce=yf(s,T,"vertex"),xe=yf(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+ce+`
`+xe)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(H===""||$==="")&&(oe=!1);oe&&(R.diagnostics={runnable:V,programLog:N,vertexShader:{log:H,prefix:g},fragmentShader:{log:$,prefix:m}})}s.deleteShader(T),s.deleteShader(E),P=new Nr(s,x),b=X_(s,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,F_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}var iy=0,Qh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new eu(e),t.set(e,n)),n}},eu=class{constructor(e){this.id=iy++,this.code=e,this.usedTimes=0}};function sy(i,e,t,n,s,r,o){let a=new po,l=new Qh,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,R,I,U){let B=I.fog,N=U.geometry,H=b.isMeshStandardMaterial?I.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),V=$&&$.mapping===Ho?$.image.height:null,oe=p[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ce=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,xe=ce!==void 0?ce.length:0,_e=0;N.morphAttributes.position!==void 0&&(_e=1),N.morphAttributes.normal!==void 0&&(_e=2),N.morphAttributes.color!==void 0&&(_e=3);let Ze,nt,qe,j;if(oe){let ft=yi[oe];Ze=ft.vertexShader,nt=ft.fragmentShader}else Ze=b.vertexShader,nt=b.fragmentShader,l.update(b),qe=l.getVertexShaderID(b),j=l.getFragmentShaderID(b);let ae=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Be=U.isInstancedMesh===!0,W=U.isBatchedMesh===!0,ge=!!b.map,ze=!!b.matcap,L=!!$,te=!!b.aoMap,ne=!!b.lightMap,q=!!b.bumpMap,K=!!b.normalMap,ue=!!b.displacementMap,ee=!!b.emissiveMap,F=!!b.metalnessMap,Q=!!b.roughnessMap,ie=b.anisotropy>0,w=b.clearcoat>0,S=b.dispersion>0,O=b.iridescence>0,X=b.sheen>0,se=b.transmission>0,Y=ie&&!!b.anisotropyMap,Ae=w&&!!b.clearcoatMap,fe=w&&!!b.clearcoatNormalMap,Re=w&&!!b.clearcoatRoughnessMap,Ie=O&&!!b.iridescenceMap,he=O&&!!b.iridescenceThicknessMap,we=X&&!!b.sheenColorMap,Xe=X&&!!b.sheenRoughnessMap,Oe=!!b.specularMap,be=!!b.specularColorMap,je=!!b.specularIntensityMap,z=se&&!!b.transmissionMap,me=se&&!!b.thicknessMap,ye=!!b.gradientMap,Le=!!b.alphaMap,de=b.alphaTest>0,le=!!b.alphaHash,Ne=!!b.extensions,$e=Bi;b.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&($e=i.toneMapping);let vt={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:Ze,fragmentShader:nt,defines:b.defines,customVertexShaderID:qe,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:W,batchingColor:W&&U._colorsTexture!==null,instancing:Be,instancingColor:Be&&U.instanceColor!==null,instancingMorph:Be&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ms,alphaToCoverage:!!b.alphaToCoverage,map:ge,matcap:ze,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:V,aoMap:te,lightMap:ne,bumpMap:q,normalMap:K,displacementMap:f&&ue,emissiveMap:ee,normalMapObjectSpace:K&&b.normalMapType===zd,normalMapTangentSpace:K&&b.normalMapType===Lh,metalnessMap:F,roughnessMap:Q,anisotropy:ie,anisotropyMap:Y,clearcoat:w,clearcoatMap:Ae,clearcoatNormalMap:fe,clearcoatRoughnessMap:Re,dispersion:S,iridescence:O,iridescenceMap:Ie,iridescenceThicknessMap:he,sheen:X,sheenColorMap:we,sheenRoughnessMap:Xe,specularMap:Oe,specularColorMap:be,specularIntensityMap:je,transmission:se,transmissionMap:z,thicknessMap:me,gradientMap:ye,opaque:b.transparent===!1&&b.blending===ys&&b.alphaToCoverage===!1,alphaMap:Le,alphaTest:de,alphaHash:le,combine:b.combine,mapUv:ge&&x(b.map.channel),aoMapUv:te&&x(b.aoMap.channel),lightMapUv:ne&&x(b.lightMap.channel),bumpMapUv:q&&x(b.bumpMap.channel),normalMapUv:K&&x(b.normalMap.channel),displacementMapUv:ue&&x(b.displacementMap.channel),emissiveMapUv:ee&&x(b.emissiveMap.channel),metalnessMapUv:F&&x(b.metalnessMap.channel),roughnessMapUv:Q&&x(b.roughnessMap.channel),anisotropyMapUv:Y&&x(b.anisotropyMap.channel),clearcoatMapUv:Ae&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&x(b.sheenRoughnessMap.channel),specularMapUv:Oe&&x(b.specularMap.channel),specularColorMapUv:be&&x(b.specularColorMap.channel),specularIntensityMapUv:je&&x(b.specularIntensityMap.channel),transmissionMapUv:z&&x(b.transmissionMap.channel),thicknessMapUv:me&&x(b.thicknessMap.channel),alphaMapUv:Le&&x(b.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(K||ie),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(ge||Le),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Te,skinning:U.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:_e,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:ge&&b.map.isVideoTexture===!0&&ht.getTransfer(b.map.colorSpace)===xt,decodeVideoTextureEmissive:ee&&b.emissiveMap.isVideoTexture===!0&&ht.getTransfer(b.emissiveMap.colorSpace)===xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===rt,flipSided:b.side===yn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ne&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&b.extensions.multiDraw===!0||W)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function m(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)M.push(R),M.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(v(M,b),y(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){let M=p[b.type],R;if(M){let I=yi[M];R=Jd.clone(I.uniforms)}else R=b.uniforms;return R}function T(b,M){let R;for(let I=0,U=h.length;I<U;I++){let B=h[I];if(B.cacheKey===M){R=B,++R.usedTimes;break}}return R===void 0&&(R=new ny(i,M,b,r),h.push(R)),R}function E(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:T,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:P}}function ry(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function oy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ef(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,p,x,g){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},i[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),e++,m}function a(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||oy),n.length>1&&n.sort(f||Ef),s.length>1&&s.sort(f||Ef)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ay(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new wf,i.set(n,[o])):s>=r.length?(o=new wf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ly(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Fe};break;case"SpotLight":t={position:new D,direction:new D,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function cy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var hy=0;function uy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dy(i){let e=new ly,t=cy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new ct,o=new ct;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,v=0,y=0,_=0,T=0,E=0,C=0;c.sort(uy);for(let b=0,M=c.length;b<M;b++){let R=c[b],I=R.color,U=R.intensity,B=R.distance,N=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=I.r*U,u+=I.g*U,f+=I.b*U;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],U);C++}else if(R.isDirectionalLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let $=R.shadow,V=t.get(R);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=N,n.directionalShadowMatrix[d]=R.shadow.matrix,v++}n.directional[d]=H,d++}else if(R.isSpotLight){let H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(I).multiplyScalar(U),H.distance=B,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[x]=H;let $=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,$.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[x]=$.matrix,R.castShadow){let V=t.get(R);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=N,_++}x++}else if(R.isRectAreaLight){let H=e.get(R);H.color.copy(I).multiplyScalar(U),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=H,g++}else if(R.isPointLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let $=R.shadow,V=t.get(R);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=N,n.pointShadowMatrix[p]=R.shadow.matrix,y++}n.point[p]=H,p++}else if(R.isHemisphereLight){let H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(U),H.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[m]=H,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==d||P.pointLength!==p||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==_||P.numSpotMaps!==T||P.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,P.directionalLength=d,P.pointLength=p,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=_,P.numSpotMaps=T,P.numLightProbes=C,n.version=hy++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let y=c[m];if(y.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(y.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(y.isRectAreaLight){let _=n.rectArea[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function Tf(i){let e=new dy(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function fy(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Tf(i),e.set(s,[a])):r>=o.length?(a=new Tf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,my=`uniform sampler2D shadow_pass;
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
}`;function gy(i,e,t){let n=new ts,s=new re,r=new re,o=new gt,a=new Tr({depthPacking:lc}),l=new sl,c={},h=t.maxTextureSize,u={[Li]:yn,[yn]:Li,[rt]:rt},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:py,fragmentShader:my}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new st;p.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new tt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vh;let m=this.type;this.render=function(E,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Fi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let U=m!==_i&&this.type===_i,B=m===_i&&this.type!==_i;for(let N=0,H=E.length;N<H;N++){let $=E[N],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let oe=V.getFrameExtents();if(s.multiply(oe),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,V.mapSize.y=r.y)),V.map===null||U===!0||B===!0){let xe=this.type!==_i?{minFilter:bn,magFilter:bn}:{};V.map!==null&&V.map.dispose(),V.map=new pi(s.x,s.y,xe),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let ce=V.getViewportCount();for(let xe=0;xe<ce;xe++){let _e=V.getViewport(xe);o.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),I.viewport(o),V.updateMatrices($,xe),n=V.getFrustum(),_(C,P,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===_i&&v(V,P),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(b,M,R)};function v(E,C){let P=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new pi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,P,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,P,d,x,null)}function y(E,C,P,b){let M=null,R=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)M=R;else if(M=P.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let I=M.uuid,U=C.uuid,B=c[I];B===void 0&&(B={},c[I]=B);let N=B[U];N===void 0&&(N=M.clone(),B[U]=N,C.addEventListener("dispose",T)),M=N}if(M.visible=C.visible,M.wireframe=C.wireframe,b===_i?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let I=i.properties.get(M);I.light=P}return M}function _(E,C,P,b,M){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===_i)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let U=e.update(E),B=E.material;if(Array.isArray(B)){let N=U.groups;for(let H=0,$=N.length;H<$;H++){let V=N[H],oe=B[V.materialIndex];if(oe&&oe.visible){let ce=y(E,oe,b,M);E.onBeforeShadow(i,E,C,P,U,ce,V),i.renderBufferDirect(P,null,U,ce,E,V),E.onAfterShadow(i,E,C,P,U,ce,V)}}}else if(B.visible){let N=y(E,B,b,M);E.onBeforeShadow(i,E,C,P,U,N,null),i.renderBufferDirect(P,null,U,N,E,null),E.onAfterShadow(i,E,C,P,U,N,null)}}let I=E.children;for(let U=0,B=I.length;U<B;U++)_(I[U],C,P,b,M)}function T(E){E.target.removeEventListener("dispose",T);for(let P in c){let b=c[P],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var xy={[gl]:xl,[_l]:Ml,[yl]:Sl,[vs]:vl,[xl]:gl,[Ml]:_l,[Sl]:yl,[vl]:vs};function _y(i,e){function t(){let z=!1,me=new gt,ye=null,Le=new gt(0,0,0,0);return{setMask:function(de){ye!==de&&!z&&(i.colorMask(de,de,de,de),ye=de)},setLocked:function(de){z=de},setClear:function(de,le,Ne,$e,vt){vt===!0&&(de*=$e,le*=$e,Ne*=$e),me.set(de,le,Ne,$e),Le.equals(me)===!1&&(i.clearColor(de,le,Ne,$e),Le.copy(me))},reset:function(){z=!1,ye=null,Le.set(-1,0,0,0)}}}function n(){let z=!1,me=!1,ye=null,Le=null,de=null;return{setReversed:function(le){if(me!==le){let Ne=e.get("EXT_clip_control");le?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),me=le;let $e=de;de=null,this.setClear($e)}},getReversed:function(){return me},setTest:function(le){le?ae(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(le){ye!==le&&!z&&(i.depthMask(le),ye=le)},setFunc:function(le){if(me&&(le=xy[le]),Le!==le){switch(le){case gl:i.depthFunc(i.NEVER);break;case xl:i.depthFunc(i.ALWAYS);break;case _l:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case yl:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case Ml:i.depthFunc(i.GREATER);break;case Sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=le}},setLocked:function(le){z=le},setClear:function(le){de!==le&&(me&&(le=1-le),i.clearDepth(le),de=le)},reset:function(){z=!1,ye=null,Le=null,de=null,me=!1}}}function s(){let z=!1,me=null,ye=null,Le=null,de=null,le=null,Ne=null,$e=null,vt=null;return{setTest:function(ft){z||(ft?ae(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(ft){me!==ft&&!z&&(i.stencilMask(ft),me=ft)},setFunc:function(ft,Ei,hi){(ye!==ft||Le!==Ei||de!==hi)&&(i.stencilFunc(ft,Ei,hi),ye=ft,Le=Ei,de=hi)},setOp:function(ft,Ei,hi){(le!==ft||Ne!==Ei||$e!==hi)&&(i.stencilOp(ft,Ei,hi),le=ft,Ne=Ei,$e=hi)},setLocked:function(ft){z=ft},setClear:function(ft){vt!==ft&&(i.clearStencil(ft),vt=ft)},reset:function(){z=!1,me=null,ye=null,Le=null,de=null,le=null,Ne=null,$e=null,vt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,v=null,y=null,_=null,T=null,E=null,C=new Fe(0,0,0),P=0,b=!1,M=null,R=null,I=null,U=null,B=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,$=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=$>=2);let oe=null,ce={},xe=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),Ze=new gt().fromArray(xe),nt=new gt().fromArray(_e);function qe(z,me,ye,Le){let de=new Uint8Array(4),le=i.createTexture();i.bindTexture(z,le),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<ye;Ne++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(me+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return le}let j={};j[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),o.setFunc(vs),q(!1),K(yh),ae(i.CULL_FACE),te(Fi);function ae(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Te(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Be(z,me){return u[z]!==me?(i.bindFramebuffer(z,me),u[z]=me,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=me),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=me),!0):!1}function W(z,me){let ye=d,Le=!1;if(z){ye=f.get(me),ye===void 0&&(ye=[],f.set(me,ye));let de=z.textures;if(ye.length!==de.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Ne=de.length;le<Ne;le++)ye[le]=i.COLOR_ATTACHMENT0+le;ye.length=de.length,Le=!0}}else ye[0]!==i.BACK&&(ye[0]=i.BACK,Le=!0);Le&&i.drawBuffers(ye)}function ge(z){return p!==z?(i.useProgram(z),p=z,!0):!1}let ze={[es]:i.FUNC_ADD,[dd]:i.FUNC_SUBTRACT,[fd]:i.FUNC_REVERSE_SUBTRACT};ze[pd]=i.MIN,ze[md]=i.MAX;let L={[gd]:i.ZERO,[xd]:i.ONE,[_d]:i.SRC_COLOR,[ka]:i.SRC_ALPHA,[Ed]:i.SRC_ALPHA_SATURATE,[Sd]:i.DST_COLOR,[vd]:i.DST_ALPHA,[yd]:i.ONE_MINUS_SRC_COLOR,[Va]:i.ONE_MINUS_SRC_ALPHA,[bd]:i.ONE_MINUS_DST_COLOR,[Md]:i.ONE_MINUS_DST_ALPHA,[wd]:i.CONSTANT_COLOR,[Td]:i.ONE_MINUS_CONSTANT_COLOR,[Ad]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function te(z,me,ye,Le,de,le,Ne,$e,vt,ft){if(z===Fi){x===!0&&(Te(i.BLEND),x=!1);return}if(x===!1&&(ae(i.BLEND),x=!0),z!==ud){if(z!==g||ft!==b){if((m!==es||_!==es)&&(i.blendEquation(i.FUNC_ADD),m=es,_=es),ft)switch(z){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ni:i.blendFunc(i.ONE,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Mh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}v=null,y=null,T=null,E=null,C.set(0,0,0),P=0,g=z,b=ft}return}de=de||me,le=le||ye,Ne=Ne||Le,(me!==m||de!==_)&&(i.blendEquationSeparate(ze[me],ze[de]),m=me,_=de),(ye!==v||Le!==y||le!==T||Ne!==E)&&(i.blendFuncSeparate(L[ye],L[Le],L[le],L[Ne]),v=ye,y=Le,T=le,E=Ne),($e.equals(C)===!1||vt!==P)&&(i.blendColor($e.r,$e.g,$e.b,vt),C.copy($e),P=vt),g=z,b=!1}function ne(z,me){z.side===rt?Te(i.CULL_FACE):ae(i.CULL_FACE);let ye=z.side===yn;me&&(ye=!ye),q(ye),z.blending===ys&&z.transparent===!1?te(Fi):te(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Le=z.stencilWrite;a.setTest(Le),Le&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ee(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function q(z){M!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),M=z)}function K(z){z!==cd?(ae(i.CULL_FACE),z!==R&&(z===yh?i.cullFace(i.BACK):z===hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),R=z}function ue(z){z!==I&&(H&&i.lineWidth(z),I=z)}function ee(z,me,ye){z?(ae(i.POLYGON_OFFSET_FILL),(U!==me||B!==ye)&&(i.polygonOffset(me,ye),U=me,B=ye)):Te(i.POLYGON_OFFSET_FILL)}function F(z){z?ae(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function Q(z){z===void 0&&(z=i.TEXTURE0+N-1),oe!==z&&(i.activeTexture(z),oe=z)}function ie(z,me,ye){ye===void 0&&(oe===null?ye=i.TEXTURE0+N-1:ye=oe);let Le=ce[ye];Le===void 0&&(Le={type:void 0,texture:void 0},ce[ye]=Le),(Le.type!==z||Le.texture!==me)&&(oe!==ye&&(i.activeTexture(ye),oe=ye),i.bindTexture(z,me||j[z]),Le.type=z,Le.texture=me)}function w(){let z=ce[oe];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function X(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(z){Ze.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Ze.copy(z))}function Xe(z){nt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),nt.copy(z))}function Oe(z,me){let ye=c.get(me);ye===void 0&&(ye=new WeakMap,c.set(me,ye));let Le=ye.get(z);Le===void 0&&(Le=i.getUniformBlockIndex(me,z.name),ye.set(z,Le))}function be(z,me){let Le=c.get(me).get(z);l.get(me)!==Le&&(i.uniformBlockBinding(me,Le,z.__bindingPointIndex),l.set(me,Le))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},oe=null,ce={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,v=null,y=null,_=null,T=null,E=null,C=new Fe(0,0,0),P=0,b=!1,M=null,R=null,I=null,U=null,B=null,Ze.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Te,bindFramebuffer:Be,drawBuffers:W,useProgram:ge,setBlending:te,setMaterial:ne,setFlipSided:q,setCullFace:K,setLineWidth:ue,setPolygonOffset:ee,setScissorTest:F,activeTexture:Q,bindTexture:ie,unbindTexture:w,compressedTexImage2D:S,compressedTexImage3D:O,texImage2D:Ie,texImage3D:he,updateUBOMapping:Oe,uniformBlockBinding:be,texStorage2D:fe,texStorage3D:Re,texSubImage2D:X,texSubImage3D:se,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ae,scissor:we,viewport:Xe,reset:je}}function yy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,S){return d?new OffscreenCanvas(w,S):gr("canvas")}function x(w,S,O){let X=1,se=ie(w);if((se.width>O||se.height>O)&&(X=O/Math.max(se.width,se.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Y=Math.floor(X*se.width),Ae=Math.floor(X*se.height);u===void 0&&(u=p(Y,Ae));let fe=S?p(Y,Ae):u;return fe.width=Y,fe.height=Ae,fe.getContext("2d").drawImage(w,0,0,Y,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Y+"x"+Ae+")."),fe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),w;return w}function g(w){return w.generateMipmaps}function m(w){i.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,S,O,X,se=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=S;if(S===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),S===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),S===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),S===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),S===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),S===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),S===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),S===i.RGBA){let Ae=se?co:ht.getTransfer(X);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=Ae===xt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(w,S){let O;return w?S===null||S===os||S===Pr?O=i.DEPTH24_STENCIL8:S===si?O=i.DEPTH32F_STENCIL8:S===Cr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===os||S===Pr?O=i.DEPTH_COMPONENT24:S===si?O=i.DEPTH_COMPONENT32F:S===Cr&&(O=i.DEPTH_COMPONENT16),O}function T(w,S){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==bn&&w.minFilter!==Qn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function E(w){let S=w.target;S.removeEventListener("dispose",E),P(S),S.isVideoTexture&&h.delete(S)}function C(w){let S=w.target;S.removeEventListener("dispose",C),M(S)}function P(w){let S=n.get(w);if(S.__webglInit===void 0)return;let O=w.source,X=f.get(O);if(X){let se=X[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&b(w),Object.keys(X).length===0&&f.delete(O)}n.remove(w)}function b(w){let S=n.get(w);i.deleteTexture(S.__webglTexture);let O=w.source,X=f.get(O);delete X[S.__cacheKey],o.memory.textures--}function M(w){let S=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let se=0;se<S.__webglFramebuffer[X].length;se++)i.deleteFramebuffer(S.__webglFramebuffer[X][se]);else i.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)i.deleteFramebuffer(S.__webglFramebuffer[X]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let O=w.textures;for(let X=0,se=O.length;X<se;X++){let Y=n.get(O[X]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(O[X])}n.remove(w)}let R=0;function I(){R=0}function U(){let w=R;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function B(w){let S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function N(w,S){let O=n.get(w);if(w.isVideoTexture&&F(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){let X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,w,S);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+S)}function H(w,S){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){j(O,w,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+S)}function $(w,S){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){j(O,w,S);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+S)}function V(w,S){let O=n.get(w);if(w.version>0&&O.__version!==w.version){ae(O,w,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+S)}let oe={[jn]:i.REPEAT,[Qi]:i.CLAMP_TO_EDGE,[Ga]:i.MIRRORED_REPEAT},ce={[bn]:i.NEAREST,[Bd]:i.NEAREST_MIPMAP_NEAREST,[ko]:i.NEAREST_MIPMAP_LINEAR,[Qn]:i.LINEAR,[Tl]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},xe={[Hd]:i.NEVER,[qd]:i.ALWAYS,[kd]:i.LESS,[Dh]:i.LEQUAL,[Vd]:i.EQUAL,[Xd]:i.GEQUAL,[Gd]:i.GREATER,[Wd]:i.NOTEQUAL};function _e(w,S){if(S.type===si&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Qn||S.magFilter===Tl||S.magFilter===ko||S.magFilter===rs||S.minFilter===Qn||S.minFilter===Tl||S.minFilter===ko||S.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,oe[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,oe[S.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,oe[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ce[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ce[S.minFilter]),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===bn||S.minFilter!==ko&&S.minFilter!==rs||S.type===si&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ze(w,S){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",E));let X=S.source,se=f.get(X);se===void 0&&(se={},f.set(X,se));let Y=B(S);if(Y!==w.__cacheKey){se[Y]===void 0&&(se[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),se[Y].usedTimes++;let Ae=se[w.__cacheKey];Ae!==void 0&&(se[w.__cacheKey].usedTimes--,Ae.usedTimes===0&&b(S)),w.__cacheKey=Y,w.__webglTexture=se[Y].texture}return O}function nt(w,S,O){return Math.floor(Math.floor(w/O)/S)}function qe(w,S,O,X){let Y=w.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,O,X,S.data);else{Y.sort((he,we)=>he.start-we.start);let Ae=0;for(let he=1;he<Y.length;he++){let we=Y[Ae],Xe=Y[he],Oe=we.start+we.count,be=nt(Xe.start,S.width,4),je=nt(we.start,S.width,4);Xe.start<=Oe+1&&be===je&&nt(Xe.start+Xe.count-1,S.width,4)===be?we.count=Math.max(we.count,Xe.start+Xe.count-we.start):(++Ae,Y[Ae]=Xe)}Y.length=Ae+1;let fe=i.getParameter(i.UNPACK_ROW_LENGTH),Re=i.getParameter(i.UNPACK_SKIP_PIXELS),Ie=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let he=0,we=Y.length;he<we;he++){let Xe=Y[he],Oe=Math.floor(Xe.start/4),be=Math.ceil(Xe.count/4),je=Oe%S.width,z=Math.floor(Oe/S.width),me=be,ye=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,je),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,je,z,me,ye,O,X,S.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,fe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ie)}}function j(w,S,O){let X=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=i.TEXTURE_3D);let se=Ze(w,S),Y=S.source;t.bindTexture(X,w.__webglTexture,i.TEXTURE0+O);let Ae=n.get(Y);if(Y.version!==Ae.__version||se===!0){t.activeTexture(i.TEXTURE0+O);let fe=ht.getPrimaries(ht.workingColorSpace),Re=S.colorSpace===Oi?null:ht.getPrimaries(S.colorSpace),Ie=S.colorSpace===Oi||fe===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let he=x(S.image,!1,s.maxTextureSize);he=Q(S,he);let we=r.convert(S.format,S.colorSpace),Xe=r.convert(S.type),Oe=y(S.internalFormat,we,Xe,S.colorSpace,S.isVideoTexture);_e(X,S);let be,je=S.mipmaps,z=S.isVideoTexture!==!0,me=Ae.__version===void 0||se===!0,ye=Y.dataReady,Le=T(S,he);if(S.isDepthTexture)Oe=_(S.format===Lr,S.type),me&&(z?t.texStorage2D(i.TEXTURE_2D,1,Oe,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Oe,he.width,he.height,0,we,Xe,null));else if(S.isDataTexture)if(je.length>0){z&&me&&t.texStorage2D(i.TEXTURE_2D,Le,Oe,je[0].width,je[0].height);for(let de=0,le=je.length;de<le;de++)be=je[de],z?ye&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,be.width,be.height,we,Xe,be.data):t.texImage2D(i.TEXTURE_2D,de,Oe,be.width,be.height,0,we,Xe,be.data);S.generateMipmaps=!1}else z?(me&&t.texStorage2D(i.TEXTURE_2D,Le,Oe,he.width,he.height),ye&&qe(S,he,we,Xe)):t.texImage2D(i.TEXTURE_2D,0,Oe,he.width,he.height,0,we,Xe,he.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){z&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Oe,je[0].width,je[0].height,he.depth);for(let de=0,le=je.length;de<le;de++)if(be=je[de],S.format!==Wn)if(we!==null)if(z){if(ye)if(S.layerUpdates.size>0){let Ne=Vh(be.width,be.height,S.format,S.type);for(let $e of S.layerUpdates){let vt=be.data.subarray($e*Ne/be.data.BYTES_PER_ELEMENT,($e+1)*Ne/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,$e,be.width,be.height,1,we,vt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,be.width,be.height,he.depth,we,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,Oe,be.width,be.height,he.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,be.width,be.height,he.depth,we,Xe,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,Oe,be.width,be.height,he.depth,0,we,Xe,be.data)}else{z&&me&&t.texStorage2D(i.TEXTURE_2D,Le,Oe,je[0].width,je[0].height);for(let de=0,le=je.length;de<le;de++)be=je[de],S.format!==Wn?we!==null?z?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,be.width,be.height,we,be.data):t.compressedTexImage2D(i.TEXTURE_2D,de,Oe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ye&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,be.width,be.height,we,Xe,be.data):t.texImage2D(i.TEXTURE_2D,de,Oe,be.width,be.height,0,we,Xe,be.data)}else if(S.isDataArrayTexture)if(z){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Oe,he.width,he.height,he.depth),ye)if(S.layerUpdates.size>0){let de=Vh(he.width,he.height,S.format,S.type);for(let le of S.layerUpdates){let Ne=he.data.subarray(le*de/he.data.BYTES_PER_ELEMENT,(le+1)*de/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,he.width,he.height,1,we,Xe,Ne)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,we,Xe,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,he.width,he.height,he.depth,0,we,Xe,he.data);else if(S.isData3DTexture)z?(me&&t.texStorage3D(i.TEXTURE_3D,Le,Oe,he.width,he.height,he.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,we,Xe,he.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,he.width,he.height,he.depth,0,we,Xe,he.data);else if(S.isFramebufferTexture){if(me)if(z)t.texStorage2D(i.TEXTURE_2D,Le,Oe,he.width,he.height);else{let de=he.width,le=he.height;for(let Ne=0;Ne<Le;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,Oe,de,le,0,we,Xe,null),de>>=1,le>>=1}}else if(je.length>0){if(z&&me){let de=ie(je[0]);t.texStorage2D(i.TEXTURE_2D,Le,Oe,de.width,de.height)}for(let de=0,le=je.length;de<le;de++)be=je[de],z?ye&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,we,Xe,be):t.texImage2D(i.TEXTURE_2D,de,Oe,we,Xe,be);S.generateMipmaps=!1}else if(z){if(me){let de=ie(he);t.texStorage2D(i.TEXTURE_2D,Le,Oe,de.width,de.height)}ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Xe,he)}else t.texImage2D(i.TEXTURE_2D,0,Oe,we,Xe,he);g(S)&&m(X),Ae.__version=Y.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ae(w,S,O){if(S.image.length!==6)return;let X=Ze(w,S),se=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);let Y=n.get(se);if(se.version!==Y.__version||X===!0){t.activeTexture(i.TEXTURE0+O);let Ae=ht.getPrimaries(ht.workingColorSpace),fe=S.colorSpace===Oi?null:ht.getPrimaries(S.colorSpace),Re=S.colorSpace===Oi||Ae===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,he=S.image[0]&&S.image[0].isDataTexture,we=[];for(let le=0;le<6;le++)!Ie&&!he?we[le]=x(S.image[le],!0,s.maxCubemapSize):we[le]=he?S.image[le].image:S.image[le],we[le]=Q(S,we[le]);let Xe=we[0],Oe=r.convert(S.format,S.colorSpace),be=r.convert(S.type),je=y(S.internalFormat,Oe,be,S.colorSpace),z=S.isVideoTexture!==!0,me=Y.__version===void 0||X===!0,ye=se.dataReady,Le=T(S,Xe);_e(i.TEXTURE_CUBE_MAP,S);let de;if(Ie){z&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,je,Xe.width,Xe.height);for(let le=0;le<6;le++){de=we[le].mipmaps;for(let Ne=0;Ne<de.length;Ne++){let $e=de[Ne];S.format!==Wn?Oe!==null?z?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,0,0,$e.width,$e.height,Oe,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,je,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,0,0,$e.width,$e.height,Oe,be,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,je,$e.width,$e.height,0,Oe,be,$e.data)}}}else{if(de=S.mipmaps,z&&me){de.length>0&&Le++;let le=ie(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,je,le.width,le.height)}for(let le=0;le<6;le++)if(he){z?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,we[le].width,we[le].height,Oe,be,we[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,we[le].width,we[le].height,0,Oe,be,we[le].data);for(let Ne=0;Ne<de.length;Ne++){let vt=de[Ne].image[le].image;z?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,0,0,vt.width,vt.height,Oe,be,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,je,vt.width,vt.height,0,Oe,be,vt.data)}}else{z?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Oe,be,we[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,Oe,be,we[le]);for(let Ne=0;Ne<de.length;Ne++){let $e=de[Ne];z?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,0,0,Oe,be,$e.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,je,Oe,be,$e.image[le])}}}g(S)&&m(i.TEXTURE_CUBE_MAP),Y.__version=se.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Te(w,S,O,X,se,Y){let Ae=r.convert(O.format,O.colorSpace),fe=r.convert(O.type),Re=y(O.internalFormat,Ae,fe,O.colorSpace),Ie=n.get(S),he=n.get(O);if(he.__renderTarget=S,!Ie.__hasExternalTextures){let we=Math.max(1,S.width>>Y),Xe=Math.max(1,S.height>>Y);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,Y,Re,we,Xe,S.depth,0,Ae,fe,null):t.texImage2D(se,Y,Re,we,Xe,0,Ae,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ee(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,se,he.__webglTexture,0,ue(S)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,se,he.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(w,S,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer){let X=S.depthTexture,se=X&&X.isDepthTexture?X.type:null,Y=_(S.stencilBuffer,se),Ae=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=ue(S);ee(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,Y,S.width,S.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,w)}else{let X=S.textures;for(let se=0;se<X.length;se++){let Y=X[se],Ae=r.convert(Y.format,Y.colorSpace),fe=r.convert(Y.type),Re=y(Y.internalFormat,Ae,fe,Y.colorSpace),Ie=ue(S);O&&ee(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Re,S.width,S.height):ee(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,Re,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Re,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function W(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=n.get(S.depthTexture);X.__renderTarget=S,(!X.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);let se=X.__webglTexture,Y=ue(S);if(S.depthTexture.format===mr)ee(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(S.depthTexture.format===Lr)ee(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function ge(w){let S=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){let X=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){let se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",se)};X.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=X}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let X=w.texture.mipmaps;X&&X.length>0?W(S.__webglFramebuffer[0],w):W(S.__webglFramebuffer,w)}else if(O){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=i.createRenderbuffer(),Be(S.__webglDepthbuffer[X],w,!1);else{let se=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,Y)}}else{let X=w.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Be(S.__webglDepthbuffer,w,!1);else{let se=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(w,S,O){let X=n.get(w);S!==void 0&&Te(X.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ge(w)}function L(w){let S=w.texture,O=n.get(w),X=n.get(S);w.addEventListener("dispose",C);let se=w.textures,Y=w.isWebGLCubeRenderTarget===!0,Ae=se.length>1;if(Ae||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=S.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[fe]=[];for(let Re=0;Re<S.mipmaps.length;Re++)O.__webglFramebuffer[fe][Re]=i.createFramebuffer()}else O.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)O.__webglFramebuffer[fe]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let fe=0,Re=se.length;fe<Re;fe++){let Ie=n.get(se[fe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&ee(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let fe=0;fe<se.length;fe++){let Re=se[fe];O.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[fe]);let Ie=r.convert(Re.format,Re.colorSpace),he=r.convert(Re.type),we=y(Re.internalFormat,Ie,he,Re.colorSpace,w.isXRRenderTarget===!0),Xe=ue(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,we,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,O.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),_e(i.TEXTURE_CUBE_MAP,S);for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)Te(O.__webglFramebuffer[fe][Re],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Re);else Te(O.__webglFramebuffer[fe],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(S)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let fe=0,Re=se.length;fe<Re;fe++){let Ie=se[fe],he=n.get(Ie),we=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(we=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,he.__webglTexture),_e(we,Ie),Te(O.__webglFramebuffer,w,Ie,i.COLOR_ATTACHMENT0+fe,we,0),g(Ie)&&m(we)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(fe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,X.__webglTexture),_e(fe,S),S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)Te(O.__webglFramebuffer[Re],w,S,i.COLOR_ATTACHMENT0,fe,Re);else Te(O.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,fe,0);g(S)&&m(fe),t.unbindTexture()}w.depthBuffer&&ge(w)}function te(w){let S=w.textures;for(let O=0,X=S.length;O<X;O++){let se=S[O];if(g(se)){let Y=v(w),Ae=n.get(se).__webglTexture;t.bindTexture(Y,Ae),m(Y),t.unbindTexture()}}}let ne=[],q=[];function K(w){if(w.samples>0){if(ee(w)===!1){let S=w.textures,O=w.width,X=w.height,se=i.COLOR_BUFFER_BIT,Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(w),fe=S.length>1;if(fe)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let Re=w.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ie]);let he=n.get(S[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,O,X,0,0,O,X,se,i.NEAREST),l===!0&&(ne.length=0,q.length=0,ne.push(i.COLOR_ATTACHMENT0+Ie),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ne.push(Y),q.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ie]);let he=n.get(S[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,he,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let S=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ue(w){return Math.min(s.maxSamples,w.samples)}function ee(w){let S=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function F(w){let S=o.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function Q(w,S){let O=w.colorSpace,X=w.format,se=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Ms&&O!==Oi&&(ht.getTransfer(O)===xt?(X!==Wn||se!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function ie(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=ze,this.setupRenderTarget=L,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ee}function vy(i,e){function t(n,s=Oi){let r,o=ht.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===Rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wh)return i.BYTE;if(n===Th)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===Al)return i.INT;if(n===os)return i.UNSIGNED_INT;if(n===si)return i.FLOAT;if(n===Ir)return i.HALF_FLOAT;if(n===Ch)return i.ALPHA;if(n===Ih)return i.RGB;if(n===Wn)return i.RGBA;if(n===mr)return i.DEPTH_COMPONENT;if(n===Lr)return i.DEPTH_STENCIL;if(n===Il)return i.RED;if(n===Pl)return i.RED_INTEGER;if(n===Ph)return i.RG;if(n===Ll)return i.RG_INTEGER;if(n===Dl)return i.RGBA_INTEGER;if(n===Vo||n===Go||n===Wo||n===Xo)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ul||n===Nl||n===Fl||n===Bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ol||n===zl||n===Hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ol||n===zl)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kl||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===$l||n===Jl||n===Kl||n===jl||n===Ql||n===ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ql)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$l)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ql)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tc||n===nc||n===ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===tc)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sc||n===rc||n===oc||n===ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===sc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var My=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sy=`
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

}`,tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new bo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new sn({vertexShader:My,fragmentShader:Sy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nu=class extends Di{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new tu,m={},v=t.getContextAttributes(),y=null,_=null,T=[],E=[],C=new re,P=null,b=new Vt;b.viewport=new gt;let M=new Vt;M.viewport=new gt;let R=[b,M],I=new pl,U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=T[j];return ae===void 0&&(ae=new yr,T[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=T[j];return ae===void 0&&(ae=new yr,T[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=T[j];return ae===void 0&&(ae=new yr,T[j]=ae),ae.getHandSpace()};function N(j){let ae=E.indexOf(j.inputSource);if(ae===-1)return;let Te=T[ae];Te!==void 0&&(Te.update(j.inputSource,j.frame,c||o),Te.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",$);for(let j=0;j<T.length;j++){let ae=E[j];ae!==null&&(E[j]=null,T[j].disconnect(ae))}U=null,B=null,g.reset();for(let j in m)delete m[j];e.setRenderTarget(y),d=null,f=null,u=null,s=null,_=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Be=null,W=null;v.depth&&(W=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=v.stencil?Lr:mr,Be=v.stencil?Pr:os);let ge={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ge),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new pi(f.textureWidth,f.textureHeight,{format:Wn,type:ii,depthTexture:new So(f.textureWidth,f.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let Te={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new pi(d.framebufferWidth,d.framebufferHeight,{format:Wn,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(j){for(let ae=0;ae<j.removed.length;ae++){let Te=j.removed[ae],Be=E.indexOf(Te);Be>=0&&(E[Be]=null,T[Be].disconnect(Te))}for(let ae=0;ae<j.added.length;ae++){let Te=j.added[ae],Be=E.indexOf(Te);if(Be===-1){for(let ge=0;ge<T.length;ge++)if(ge>=E.length){E.push(Te),Be=ge;break}else if(E[ge]===null){E[ge]=Te,Be=ge;break}if(Be===-1)break}let W=T[Be];W&&W.connect(Te)}}let V=new D,oe=new D;function ce(j,ae,Te){V.setFromMatrixPosition(ae.matrixWorld),oe.setFromMatrixPosition(Te.matrixWorld);let Be=V.distanceTo(oe),W=ae.projectionMatrix.elements,ge=Te.projectionMatrix.elements,ze=W[14]/(W[10]-1),L=W[14]/(W[10]+1),te=(W[9]+1)/W[5],ne=(W[9]-1)/W[5],q=(W[8]-1)/W[0],K=(ge[8]+1)/ge[0],ue=ze*q,ee=ze*K,F=Be/(-q+K),Q=F*-q;if(ae.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Q),j.translateZ(F),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),W[10]===-1)j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let ie=ze+F,w=L+F,S=ue-Q,O=ee+(Be-Q),X=te*L/w*ie,se=ne*L/w*ie;j.projectionMatrix.makePerspective(S,O,X,se,ie,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function xe(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ae=j.near,Te=j.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(Te=g.depthFar)),I.near=M.near=b.near=ae,I.far=M.far=b.far=Te,(U!==I.near||B!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),U=I.near,B=I.far),I.layers.mask=j.layers.mask|6,b.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;let Be=j.parent,W=I.cameras;xe(I,Be);for(let ge=0;ge<W.length;ge++)xe(W[ge],Be);W.length===2?ce(I,b,M):I.projectionMatrix.copy(b.projectionMatrix),_e(j,I,Be)};function _e(j,ae,Te){Te===null?j.matrix.copy(ae.matrixWorld):(j.matrix.copy(Te.matrixWorld),j.matrix.invert(),j.matrix.multiply(ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ss*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(j){return m[j]};let Ze=null;function nt(j,ae){if(h=ae.getViewerPose(c||o),p=ae,h!==null){let Te=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Be=!1;Te.length!==I.cameras.length&&(I.cameras.length=0,Be=!0);for(let L=0;L<Te.length;L++){let te=Te[L],ne=null;if(d!==null)ne=d.getViewport(te);else{let K=u.getViewSubImage(f,te);ne=K.viewport,L===0&&(e.setRenderTargetTextures(_,K.colorTexture,K.depthStencilTexture),e.setRenderTarget(_))}let q=R[L];q===void 0&&(q=new Vt,q.layers.enable(L),q.viewport=new gt,R[L]=q),q.matrix.fromArray(te.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(te.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(ne.x,ne.y,ne.width,ne.height),L===0&&(I.matrix.copy(q.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Be===!0&&I.cameras.push(q)}let W=s.enabledFeatures;if(W&&W.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let L=u.getDepthInformation(Te[0]);L&&L.isValid&&L.texture&&g.init(L,s.renderState)}if(W&&W.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<Te.length;L++){let te=Te[L].camera;if(te){let ne=m[te];ne||(ne=new bo,m[te]=ne);let q=u.getCameraImage(te);ne.sourceTexture=q}}}}for(let Te=0;Te<T.length;Te++){let Be=E[Te],W=T[Te];Be!==null&&W!==void 0&&W.update(Be,ae,c||o)}Ze&&Ze(j,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),p=null}let qe=new Af;qe.setAnimationLoop(nt),this.setAnimationLoop=function(j){Ze=j},this.dispose=function(){}}},Us=new ei,by=new ct;function Ey(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Oh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,y,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,v,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===yn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===yn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=e.get(m),y=v.envMap,_=v.envMapRotation;y&&(g.envMap.value=y,Us.copy(_),Us.x*=-1,Us.y*=-1,Us.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),g.envMapRotation.value.setFromMatrix4(by.makeRotationFromEuler(Us)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let _=y.program;n.uniformBlockBinding(v,_)}function c(v,y){let _=s[v.id];_===void 0&&(p(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",g));let T=y.program;n.updateUBOMapping(v,T);let E=e.render.frame;r[v.id]!==E&&(f(v),r[v.id]=E)}function h(v){let y=u();v.__bindingPointIndex=y;let _=i.createBuffer(),T=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let y=s[v.id],_=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,C=_.length;E<C;E++){let P=Array.isArray(_[E])?_[E]:[_[E]];for(let b=0,M=P.length;b<M;b++){let R=P[b];if(d(R,E,b,T)===!0){let I=R.__offset,U=Array.isArray(R.value)?R.value:[R.value],B=0;for(let N=0;N<U.length;N++){let H=U[N],$=x(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,I+B,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,B),B+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,y,_,T){let E=v.value,C=y+"_"+_;if(T[C]===void 0)return typeof E=="number"||typeof E=="boolean"?T[C]=E:T[C]=E.clone(),!0;{let P=T[C];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return T[C]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function p(v){let y=v.uniforms,_=0,T=16;for(let C=0,P=y.length;C<P;C++){let b=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,R=b.length;M<R;M++){let I=b[M],U=Array.isArray(I.value)?I.value:[I.value];for(let B=0,N=U.length;B<N;B++){let H=U[B],$=x(H),V=_%T,oe=V%$.boundary,ce=V+oe;_+=oe,ce!==0&&T-ce<$.storage&&(_+=T-ce),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=$.storage}}}let E=_%T;return E>0&&(_+=T-E),v.__size=_,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){let y=v.target;y.removeEventListener("dispose",g);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var fc=class{constructor(e={}){let{canvas:t=Yd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,T=!1;this._outputColorSpace=Tt;let E=0,C=0,P=null,b=-1,M=null,R=new gt,I=new gt,U=null,B=new Fe(0),N=0,H=t.width,$=t.height,V=1,oe=null,ce=null,xe=new gt(0,0,H,$),_e=new gt(0,0,H,$),Ze=!1,nt=new ts,qe=!1,j=!1,ae=new ct,Te=new D,Be=new gt,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ge=!1;function ze(){return P===null?V:1}let L=n;function te(A,k){return t.getContext(A,k)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",de,!1),L===null){let k="webgl2";if(L=te(k,A),L===null)throw te(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ne,q,K,ue,ee,F,Q,ie,w,S,O,X,se,Y,Ae,fe,Re,Ie,he,we,Xe,Oe,be,je;function z(){ne=new Gx(L),ne.init(),Oe=new vy(L,ne),q=new Fx(L,ne,e,Oe),K=new _y(L,ne),q.reversedDepthBuffer&&f&&K.buffers.depth.setReversed(!0),ue=new qx(L),ee=new ry,F=new yy(L,ne,K,ee,q,Oe,ue),Q=new Ox(_),ie=new Vx(_),w=new jm(L),be=new Ux(L,w),S=new Wx(L,w,ue,be),O=new Zx(L,S,w,ue),he=new Yx(L,q,F),fe=new Bx(ee),X=new sy(_,Q,ie,ne,q,be,fe),se=new Ey(_,ee),Y=new ay,Ae=new fy(ne),Ie=new Dx(_,Q,ie,K,O,d,l),Re=new gy(_,O,q),je=new wy(L,ue,q,K),we=new Nx(L,ne,ue),Xe=new Xx(L,ne,ue),ue.programs=X.programs,_.capabilities=q,_.extensions=ne,_.properties=ee,_.renderLists=Y,_.shadowMap=Re,_.state=K,_.info=ue}z();let me=new nu(_,L);this.xr=me,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let A=ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(H,$,!1))},this.getSize=function(A){return A.set(H,$)},this.setSize=function(A,k,Z=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,$=k,t.width=Math.floor(A*V),t.height=Math.floor(k*V),Z===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(H*V,$*V).floor()},this.setDrawingBufferSize=function(A,k,Z){H=A,$=k,V=Z,t.width=Math.floor(A*Z),t.height=Math.floor(k*Z),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(xe)},this.setViewport=function(A,k,Z,J){A.isVector4?xe.set(A.x,A.y,A.z,A.w):xe.set(A,k,Z,J),K.viewport(R.copy(xe).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(_e)},this.setScissor=function(A,k,Z,J){A.isVector4?_e.set(A.x,A.y,A.z,A.w):_e.set(A,k,Z,J),K.scissor(I.copy(_e).multiplyScalar(V).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(A){K.setScissorTest(Ze=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){ce=A},this.getClearColor=function(A){return A.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,Z=!0){let J=0;if(A){let G=!1;if(P!==null){let pe=P.texture.format;G=pe===Dl||pe===Ll||pe===Pl}if(G){let pe=P.texture.type,Ee=pe===ii||pe===os||pe===Cr||pe===Pr||pe===Rl||pe===Cl,Ue=Ie.getClearColor(),Ce=Ie.getClearAlpha(),Ge=Ue.r,Ye=Ue.g,ke=Ue.b;Ee?(p[0]=Ge,p[1]=Ye,p[2]=ke,p[3]=Ce,L.clearBufferuiv(L.COLOR,0,p)):(x[0]=Ge,x[1]=Ye,x[2]=ke,x[3]=Ce,L.clearBufferiv(L.COLOR,0,x))}else J|=L.COLOR_BUFFER_BIT}k&&(J|=L.DEPTH_BUFFER_BIT),Z&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Ie.dispose(),Y.dispose(),Ae.dispose(),ee.dispose(),Q.dispose(),ie.dispose(),O.dispose(),be.dispose(),je.dispose(),X.dispose(),me.dispose(),me.removeEventListener("sessionstart",hi),me.removeEventListener("sessionend",Tu),ds.stop()};function ye(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let A=ue.autoReset,k=Re.enabled,Z=Re.autoUpdate,J=Re.needsUpdate,G=Re.type;z(),ue.autoReset=A,Re.enabled=k,Re.autoUpdate=Z,Re.needsUpdate=J,Re.type=G}function de(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function le(A){let k=A.target;k.removeEventListener("dispose",le),Ne(k)}function Ne(A){$e(A),ee.remove(A)}function $e(A){let k=ee.get(A).programs;k!==void 0&&(k.forEach(function(Z){X.releaseProgram(Z)}),A.isShaderMaterial&&X.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,Z,J,G,pe){k===null&&(k=W);let Ee=G.isMesh&&G.matrixWorld.determinant()<0,Ue=Mp(A,k,Z,J,G);K.setMaterial(J,Ee);let Ce=Z.index,Ge=1;if(J.wireframe===!0){if(Ce=S.getWireframeAttribute(Z),Ce===void 0)return;Ge=2}let Ye=Z.drawRange,ke=Z.attributes.position,ot=Ye.start*Ge,_t=(Ye.start+Ye.count)*Ge;pe!==null&&(ot=Math.max(ot,pe.start*Ge),_t=Math.min(_t,(pe.start+pe.count)*Ge)),Ce!==null?(ot=Math.max(ot,0),_t=Math.min(_t,Ce.count)):ke!=null&&(ot=Math.max(ot,0),_t=Math.min(_t,ke.count));let Nt=_t-ot;if(Nt<0||Nt===1/0)return;be.setup(G,J,Ue,Z,Ce);let St,yt=we;if(Ce!==null&&(St=w.get(Ce),yt=Xe,yt.setIndex(St)),G.isMesh)J.wireframe===!0?(K.setLineWidth(J.wireframeLinewidth*ze()),yt.setMode(L.LINES)):yt.setMode(L.TRIANGLES);else if(G.isLine){let Ve=J.linewidth;Ve===void 0&&(Ve=1),K.setLineWidth(Ve*ze()),G.isLineSegments?yt.setMode(L.LINES):G.isLineLoop?yt.setMode(L.LINE_LOOP):yt.setMode(L.LINE_STRIP)}else G.isPoints?yt.setMode(L.POINTS):G.isSprite&&yt.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)xr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))yt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ve=G._multiDrawStarts,Ct=G._multiDrawCounts,ut=G._multiDrawCount,Rn=Ce?w.get(Ce).bytesPerElement:1,$s=ee.get(J).currentProgram.getUniforms();for(let Cn=0;Cn<ut;Cn++)$s.setValue(L,"_gl_DrawID",Cn),yt.render(Ve[Cn]/Rn,Ct[Cn])}else if(G.isInstancedMesh)yt.renderInstances(ot,Nt,G.count);else if(Z.isInstancedBufferGeometry){let Ve=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ct=Math.min(Z.instanceCount,Ve);yt.renderInstances(ot,Nt,Ct)}else yt.render(ot,Nt)};function vt(A,k,Z){A.transparent===!0&&A.side===rt&&A.forceSinglePass===!1?(A.side=yn,A.needsUpdate=!0,ua(A,k,Z),A.side=Li,A.needsUpdate=!0,ua(A,k,Z),A.side=rt):ua(A,k,Z)}this.compile=function(A,k,Z=null){Z===null&&(Z=A),m=Ae.get(Z),m.init(k),y.push(m),Z.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),A!==Z&&A.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();let J=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let pe=G.material;if(pe)if(Array.isArray(pe))for(let Ee=0;Ee<pe.length;Ee++){let Ue=pe[Ee];vt(Ue,Z,G),J.add(Ue)}else vt(pe,Z,G),J.add(pe)}),m=y.pop(),J},this.compileAsync=function(A,k,Z=null){let J=this.compile(A,k,Z);return new Promise(G=>{function pe(){if(J.forEach(function(Ee){ee.get(Ee).currentProgram.isReady()&&J.delete(Ee)}),J.size===0){G(A);return}setTimeout(pe,10)}ne.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let ft=null;function Ei(A){ft&&ft(A)}function hi(){ds.stop()}function Tu(){ds.start()}let ds=new Af;ds.setAnimationLoop(Ei),typeof self<"u"&&ds.setContext(self),this.setAnimationLoop=function(A){ft=A,me.setAnimationLoop(A),A===null?ds.stop():ds.start()},me.addEventListener("sessionstart",hi),me.addEventListener("sessionend",Tu),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(k),k=me.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,k,P),m=Ae.get(A,y.length),m.init(k),y.push(m),ae.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),nt.setFromProjectionMatrix(ae,Kn,k.reversedDepth),j=this.localClippingEnabled,qe=fe.init(this.clippingPlanes,j),g=Y.get(A,v.length),g.init(),v.push(g),me.enabled===!0&&me.isPresenting===!0){let pe=_.xr.getDepthSensingMesh();pe!==null&&Lc(pe,k,-1/0,_.sortObjects)}Lc(A,k,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(oe,ce),ge=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,ge&&Ie.addToRenderList(g,A),this.info.render.frame++,qe===!0&&fe.beginShadows();let Z=m.state.shadowsArray;Re.render(Z,A,k),qe===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=g.opaque,G=g.transmissive;if(m.setupLights(),k.isArrayCamera){let pe=k.cameras;if(G.length>0)for(let Ee=0,Ue=pe.length;Ee<Ue;Ee++){let Ce=pe[Ee];Ru(J,G,A,Ce)}ge&&Ie.render(A);for(let Ee=0,Ue=pe.length;Ee<Ue;Ee++){let Ce=pe[Ee];Au(g,A,Ce,Ce.viewport)}}else G.length>0&&Ru(J,G,A,k),ge&&Ie.render(A),Au(g,A,k);P!==null&&C===0&&(F.updateMultisampleRenderTarget(P),F.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(_,A,k),be.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],qe===!0&&fe.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Lc(A,k,Z,J){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||nt.intersectsSprite(A)){J&&Be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ae);let Ee=O.update(A),Ue=A.material;Ue.visible&&g.push(A,Ee,Ue,Z,Be.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||nt.intersectsObject(A))){let Ee=O.update(A),Ue=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Be.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Be.copy(Ee.boundingSphere.center)),Be.applyMatrix4(A.matrixWorld).applyMatrix4(ae)),Array.isArray(Ue)){let Ce=Ee.groups;for(let Ge=0,Ye=Ce.length;Ge<Ye;Ge++){let ke=Ce[Ge],ot=Ue[ke.materialIndex];ot&&ot.visible&&g.push(A,Ee,ot,Z,Be.z,ke)}}else Ue.visible&&g.push(A,Ee,Ue,Z,Be.z,null)}}let pe=A.children;for(let Ee=0,Ue=pe.length;Ee<Ue;Ee++)Lc(pe[Ee],k,Z,J)}function Au(A,k,Z,J){let G=A.opaque,pe=A.transmissive,Ee=A.transparent;m.setupLightsView(Z),qe===!0&&fe.setGlobalState(_.clippingPlanes,Z),J&&K.viewport(R.copy(J)),G.length>0&&ha(G,k,Z),pe.length>0&&ha(pe,k,Z),Ee.length>0&&ha(Ee,k,Z),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Ru(A,k,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new pi(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Ir:ii,minFilter:rs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let pe=m.state.transmissionRenderTarget[J.id],Ee=J.viewport||R;pe.setSize(Ee.z*_.transmissionResolutionScale,Ee.w*_.transmissionResolutionScale);let Ue=_.getRenderTarget(),Ce=_.getActiveCubeFace(),Ge=_.getActiveMipmapLevel();_.setRenderTarget(pe),_.getClearColor(B),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear(),ge&&Ie.render(Z);let Ye=_.toneMapping;_.toneMapping=Bi;let ke=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),qe===!0&&fe.setGlobalState(_.clippingPlanes,J),ha(A,Z,J),F.updateMultisampleRenderTarget(pe),F.updateRenderTargetMipmap(pe),ne.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let _t=0,Nt=k.length;_t<Nt;_t++){let St=k[_t],yt=St.object,Ve=St.geometry,Ct=St.material,ut=St.group;if(Ct.side===rt&&yt.layers.test(J.layers)){let Rn=Ct.side;Ct.side=yn,Ct.needsUpdate=!0,Cu(yt,Z,J,Ve,Ct,ut),Ct.side=Rn,Ct.needsUpdate=!0,ot=!0}}ot===!0&&(F.updateMultisampleRenderTarget(pe),F.updateRenderTargetMipmap(pe))}_.setRenderTarget(Ue,Ce,Ge),_.setClearColor(B,N),ke!==void 0&&(J.viewport=ke),_.toneMapping=Ye}function ha(A,k,Z){let J=k.isScene===!0?k.overrideMaterial:null;for(let G=0,pe=A.length;G<pe;G++){let Ee=A[G],Ue=Ee.object,Ce=Ee.geometry,Ge=Ee.group,Ye=Ee.material;Ye.allowOverride===!0&&J!==null&&(Ye=J),Ue.layers.test(Z.layers)&&Cu(Ue,k,Z,Ce,Ye,Ge)}}function Cu(A,k,Z,J,G,pe){A.onBeforeRender(_,k,Z,J,G,pe),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(_,k,Z,J,A,pe),G.transparent===!0&&G.side===rt&&G.forceSinglePass===!1?(G.side=yn,G.needsUpdate=!0,_.renderBufferDirect(Z,k,J,G,A,pe),G.side=Li,G.needsUpdate=!0,_.renderBufferDirect(Z,k,J,G,A,pe),G.side=rt):_.renderBufferDirect(Z,k,J,G,A,pe),A.onAfterRender(_,k,Z,J,G,pe)}function ua(A,k,Z){k.isScene!==!0&&(k=W);let J=ee.get(A),G=m.state.lights,pe=m.state.shadowsArray,Ee=G.state.version,Ue=X.getParameters(A,G.state,pe,k,Z),Ce=X.getProgramCacheKey(Ue),Ge=J.programs;J.environment=A.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(A.isMeshStandardMaterial?ie:Q).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",le),Ge=new Map,J.programs=Ge);let Ye=Ge.get(Ce);if(Ye!==void 0){if(J.currentProgram===Ye&&J.lightsStateVersion===Ee)return Pu(A,Ue),Ye}else Ue.uniforms=X.getUniforms(A),A.onBeforeCompile(Ue,_),Ye=X.acquireProgram(Ue,Ce),Ge.set(Ce,Ye),J.uniforms=Ue.uniforms;let ke=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=fe.uniform),Pu(A,Ue),J.needsLights=bp(A),J.lightsStateVersion=Ee,J.needsLights&&(ke.ambientLightColor.value=G.state.ambient,ke.lightProbe.value=G.state.probe,ke.directionalLights.value=G.state.directional,ke.directionalLightShadows.value=G.state.directionalShadow,ke.spotLights.value=G.state.spot,ke.spotLightShadows.value=G.state.spotShadow,ke.rectAreaLights.value=G.state.rectArea,ke.ltc_1.value=G.state.rectAreaLTC1,ke.ltc_2.value=G.state.rectAreaLTC2,ke.pointLights.value=G.state.point,ke.pointLightShadows.value=G.state.pointShadow,ke.hemisphereLights.value=G.state.hemi,ke.directionalShadowMap.value=G.state.directionalShadowMap,ke.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ke.spotShadowMap.value=G.state.spotShadowMap,ke.spotLightMatrix.value=G.state.spotLightMatrix,ke.spotLightMap.value=G.state.spotLightMap,ke.pointShadowMap.value=G.state.pointShadowMap,ke.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=Ye,J.uniformsList=null,Ye}function Iu(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=Nr.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Pu(A,k){let Z=ee.get(A);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function Mp(A,k,Z,J,G){k.isScene!==!0&&(k=W),F.resetTextureUnits();let pe=k.fog,Ee=J.isMeshStandardMaterial?k.environment:null,Ue=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ms,Ce=(J.isMeshStandardMaterial?ie:Q).get(J.envMap||Ee),Ge=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ye=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ke=!!Z.morphAttributes.position,ot=!!Z.morphAttributes.normal,_t=!!Z.morphAttributes.color,Nt=Bi;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Nt=_.toneMapping);let St=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yt=St!==void 0?St.length:0,Ve=ee.get(J),Ct=m.state.lights;if(qe===!0&&(j===!0||A!==M)){let mn=A===M&&J.id===b;fe.setState(J,A,mn)}let ut=!1;J.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ct.state.version||Ve.outputColorSpace!==Ue||G.isBatchedMesh&&Ve.batching===!1||!G.isBatchedMesh&&Ve.batching===!0||G.isBatchedMesh&&Ve.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ve.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ve.instancing===!1||!G.isInstancedMesh&&Ve.instancing===!0||G.isSkinnedMesh&&Ve.skinning===!1||!G.isSkinnedMesh&&Ve.skinning===!0||G.isInstancedMesh&&Ve.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ve.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ve.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ve.instancingMorph===!1&&G.morphTexture!==null||Ve.envMap!==Ce||J.fog===!0&&Ve.fog!==pe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==fe.numPlanes||Ve.numIntersection!==fe.numIntersection)||Ve.vertexAlphas!==Ge||Ve.vertexTangents!==Ye||Ve.morphTargets!==ke||Ve.morphNormals!==ot||Ve.morphColors!==_t||Ve.toneMapping!==Nt||Ve.morphTargetsCount!==yt)&&(ut=!0):(ut=!0,Ve.__version=J.version);let Rn=Ve.currentProgram;ut===!0&&(Rn=ua(J,k,G));let $s=!1,Cn=!1,qr=!1,It=Rn.getUniforms(),Hn=Ve.uniforms;if(K.useProgram(Rn.program)&&($s=!0,Cn=!0,qr=!0),J.id!==b&&(b=J.id,Cn=!0),$s||M!==A){K.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(L,"projectionMatrix",A.projectionMatrix),It.setValue(L,"viewMatrix",A.matrixWorldInverse);let Sn=It.map.cameraPosition;Sn!==void 0&&Sn.setValue(L,Te.setFromMatrixPosition(A.matrixWorld)),q.logarithmicDepthBuffer&&It.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&It.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Cn=!0,qr=!0)}if(G.isSkinnedMesh){It.setOptional(L,G,"bindMatrix"),It.setOptional(L,G,"bindMatrixInverse");let mn=G.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),It.setValue(L,"boneTexture",mn.boneTexture,F))}G.isBatchedMesh&&(It.setOptional(L,G,"batchingTexture"),It.setValue(L,"batchingTexture",G._matricesTexture,F),It.setOptional(L,G,"batchingIdTexture"),It.setValue(L,"batchingIdTexture",G._indirectTexture,F),It.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&It.setValue(L,"batchingColorTexture",G._colorsTexture,F));let kn=Z.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&he.update(G,Z,Rn),(Cn||Ve.receiveShadow!==G.receiveShadow)&&(Ve.receiveShadow=G.receiveShadow,It.setValue(L,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Hn.envMap.value=Ce,Hn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(Hn.envMapIntensity.value=k.environmentIntensity),Cn&&(It.setValue(L,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&Sp(Hn,qr),pe&&J.fog===!0&&se.refreshFogUniforms(Hn,pe),se.refreshMaterialUniforms(Hn,J,V,$,m.state.transmissionRenderTarget[A.id]),Nr.upload(L,Iu(Ve),Hn,F)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Nr.upload(L,Iu(Ve),Hn,F),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&It.setValue(L,"center",G.center),It.setValue(L,"modelViewMatrix",G.modelViewMatrix),It.setValue(L,"normalMatrix",G.normalMatrix),It.setValue(L,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let mn=J.uniformsGroups;for(let Sn=0,Dc=mn.length;Sn<Dc;Sn++){let fs=mn[Sn];je.update(fs,Rn),je.bind(fs,Rn)}}return Rn}function Sp(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function bp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,k,Z){let J=ee.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ee.get(A.texture).__webglTexture=k,ee.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){let Z=ee.get(A);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0};let Ep=L.createFramebuffer();this.setRenderTarget=function(A,k=0,Z=0){P=A,E=k,C=Z;let J=!0,G=null,pe=!1,Ee=!1;if(A){let Ce=ee.get(A);if(Ce.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(L.FRAMEBUFFER,null),J=!1;else if(Ce.__webglFramebuffer===void 0)F.setupRenderTarget(A);else if(Ce.__hasExternalTextures)F.rebindTextures(A,ee.get(A.texture).__webglTexture,ee.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ke=A.depthTexture;if(Ce.__boundDepthTexture!==ke){if(ke!==null&&ee.has(ke)&&(A.width!==ke.image.width||A.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(A)}}let Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ee=!0);let Ye=ee.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ye[k])?G=Ye[k][Z]:G=Ye[k],pe=!0):A.samples>0&&F.useMultisampledRTT(A)===!1?G=ee.get(A).__webglMultisampledFramebuffer:Array.isArray(Ye)?G=Ye[Z]:G=Ye,R.copy(A.viewport),I.copy(A.scissor),U=A.scissorTest}else R.copy(xe).multiplyScalar(V).floor(),I.copy(_e).multiplyScalar(V).floor(),U=Ze;if(Z!==0&&(G=Ep),K.bindFramebuffer(L.FRAMEBUFFER,G)&&J&&K.drawBuffers(A,G),K.viewport(R),K.scissor(I),K.setScissorTest(U),pe){let Ce=ee.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ce.__webglTexture,Z)}else if(Ee){let Ce=k;for(let Ge=0;Ge<A.textures.length;Ge++){let Ye=ee.get(A.textures[Ge]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ge,Ye.__webglTexture,Z,Ce)}}else if(A!==null&&Z!==0){let Ce=ee.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ce.__webglTexture,Z)}b=-1},this.readRenderTargetPixels=function(A,k,Z,J,G,pe,Ee,Ue=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){K.bindFramebuffer(L.FRAMEBUFFER,Ce);try{let Ge=A.textures[Ue],Ye=Ge.format,ke=Ge.type;if(!q.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-J&&Z>=0&&Z<=A.height-G&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ue),L.readPixels(k,Z,J,G,Oe.convert(Ye),Oe.convert(ke),pe))}finally{let Ge=P!==null?ee.get(P).__webglFramebuffer:null;K.bindFramebuffer(L.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(A,k,Z,J,G,pe,Ee,Ue=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce)if(k>=0&&k<=A.width-J&&Z>=0&&Z<=A.height-G){K.bindFramebuffer(L.FRAMEBUFFER,Ce);let Ge=A.textures[Ue],Ye=Ge.format,ke=Ge.type;if(!q.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ot),L.bufferData(L.PIXEL_PACK_BUFFER,pe.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ue),L.readPixels(k,Z,J,G,Oe.convert(Ye),Oe.convert(ke),0);let _t=P!==null?ee.get(P).__webglFramebuffer:null;K.bindFramebuffer(L.FRAMEBUFFER,_t);let Nt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Zd(L,Nt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ot),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pe),L.deleteBuffer(ot),L.deleteSync(Nt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,Z=0){let J=Math.pow(2,-Z),G=Math.floor(A.image.width*J),pe=Math.floor(A.image.height*J),Ee=k!==null?k.x:0,Ue=k!==null?k.y:0;F.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,Ee,Ue,G,pe),K.unbindTexture()};let wp=L.createFramebuffer(),Tp=L.createFramebuffer();this.copyTextureToTexture=function(A,k,Z=null,J=null,G=0,pe=null){pe===null&&(G!==0?(xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=G,G=0):pe=0);let Ee,Ue,Ce,Ge,Ye,ke,ot,_t,Nt,St=A.isCompressedTexture?A.mipmaps[pe]:A.image;if(Z!==null)Ee=Z.max.x-Z.min.x,Ue=Z.max.y-Z.min.y,Ce=Z.isBox3?Z.max.z-Z.min.z:1,Ge=Z.min.x,Ye=Z.min.y,ke=Z.isBox3?Z.min.z:0;else{let kn=Math.pow(2,-G);Ee=Math.floor(St.width*kn),Ue=Math.floor(St.height*kn),A.isDataArrayTexture?Ce=St.depth:A.isData3DTexture?Ce=Math.floor(St.depth*kn):Ce=1,Ge=0,Ye=0,ke=0}J!==null?(ot=J.x,_t=J.y,Nt=J.z):(ot=0,_t=0,Nt=0);let yt=Oe.convert(k.format),Ve=Oe.convert(k.type),Ct;k.isData3DTexture?(F.setTexture3D(k,0),Ct=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(F.setTexture2DArray(k,0),Ct=L.TEXTURE_2D_ARRAY):(F.setTexture2D(k,0),Ct=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);let ut=L.getParameter(L.UNPACK_ROW_LENGTH),Rn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),$s=L.getParameter(L.UNPACK_SKIP_PIXELS),Cn=L.getParameter(L.UNPACK_SKIP_ROWS),qr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,St.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ge),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ke);let It=A.isDataArrayTexture||A.isData3DTexture,Hn=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){let kn=ee.get(A),mn=ee.get(k),Sn=ee.get(kn.__renderTarget),Dc=ee.get(mn.__renderTarget);K.bindFramebuffer(L.READ_FRAMEBUFFER,Sn.__webglFramebuffer),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,Dc.__webglFramebuffer);for(let fs=0;fs<Ce;fs++)It&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ee.get(A).__webglTexture,G,ke+fs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ee.get(k).__webglTexture,pe,Nt+fs)),L.blitFramebuffer(Ge,Ye,Ee,Ue,ot,_t,Ee,Ue,L.DEPTH_BUFFER_BIT,L.NEAREST);K.bindFramebuffer(L.READ_FRAMEBUFFER,null),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||ee.has(A)){let kn=ee.get(A),mn=ee.get(k);K.bindFramebuffer(L.READ_FRAMEBUFFER,wp),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,Tp);for(let Sn=0;Sn<Ce;Sn++)It?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,kn.__webglTexture,G,ke+Sn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,kn.__webglTexture,G),Hn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,mn.__webglTexture,pe,Nt+Sn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,mn.__webglTexture,pe),G!==0?L.blitFramebuffer(Ge,Ye,Ee,Ue,ot,_t,Ee,Ue,L.COLOR_BUFFER_BIT,L.NEAREST):Hn?L.copyTexSubImage3D(Ct,pe,ot,_t,Nt+Sn,Ge,Ye,Ee,Ue):L.copyTexSubImage2D(Ct,pe,ot,_t,Ge,Ye,Ee,Ue);K.bindFramebuffer(L.READ_FRAMEBUFFER,null),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Hn?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Ct,pe,ot,_t,Nt,Ee,Ue,Ce,yt,Ve,St.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Ct,pe,ot,_t,Nt,Ee,Ue,Ce,yt,St.data):L.texSubImage3D(Ct,pe,ot,_t,Nt,Ee,Ue,Ce,yt,Ve,St):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pe,ot,_t,Ee,Ue,yt,Ve,St.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pe,ot,_t,St.width,St.height,yt,St.data):L.texSubImage2D(L.TEXTURE_2D,pe,ot,_t,Ee,Ue,yt,Ve,St);L.pixelStorei(L.UNPACK_ROW_LENGTH,ut),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Rn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,$s),L.pixelStorei(L.UNPACK_SKIP_ROWS,Cn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qr),pe===0&&k.generateMipmaps&&L.generateMipmap(Ct),K.unbindTexture()},this.initRenderTarget=function(A){ee.get(A).__webglFramebuffer===void 0&&F.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?F.setTextureCube(A,0):A.isData3DTexture?F.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?F.setTexture2DArray(A,0):F.setTexture2D(A,0),K.unbindTexture()},this.resetState=function(){E=0,C=0,P=null,K.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};function Br(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new st,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Lf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let p=Lf(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Lf(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Mt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let x=h.getComponent(f,p);a.setComponent(f+u,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Hi=D,Ty=new Hi(0,1,0),ki=Math.PI*2,Ay=Lt.clamp;function su(i,e,t,n,s,r,o=0){let a=c=>{for(let h=0;h<128;h++){let u=h/128*ki,f=c.x+Math.sin(u)*e,d=c.z+Math.cos(u)*t;if(f-n<-70||f+n>70||d-n<-134||d+n>36||c.y-s-o-n<r.floor(f,d)+.18)return!1;for(let p of[c.y-s-o,c.y,c.y+s])for(let x of r.rocks)if(((f-x.x)/(x.rx+n))**2+((p-x.y)/(x.ry+n))**2+((d-x.z)/(x.rz+n))**2<1)return!1}return!0},l=[[0,0]];for(let c of[3,6,10,15])for(let h=0;h<12;h++)l.push([Math.cos(h*ki/12)*c,Math.sin(h*ki/12)*c]);for(let c of[0,2,4,6])for(let[h,u]of l){let f=new Hi(i.x+h,i.y+c,i.z+u);if(!(f.y+s+n>11)&&a(f))return f}throw new Error("\u751F\u7269\u822A\u7EBF\u6CA1\u6709\u5B89\u5168\u7A7A\u95F4")}function jt(i,e={}){return new wt({color:i,roughness:.58,metalness:.06,...e})}function dn(i,e,t,n=0,s=0,r=0,o=null){let a=new tt(e,t);return a.position.set(n,s,r),o&&a.scale.set(...o),i.add(a),a}function as(i,e=.015,t=24){return new wn(new _n(i.map(n=>new Hi(...n))),t,e,5,!1)}function Yo(i){let e=new st;e.setAttribute("position",new He(i.flat(),3));let t=[];for(let n=1;n<i.length-1;n++)t.push(0,n,n+1);return e.setIndex(t),e.computeVertexNormals(),e.setAttribute("uv",new He(i.map((n,s)=>[s/(i.length-1),s===0?0:1]).flat(),2)),e}function Vi(i){let e=i.map(t=>{let n=t.index?t.toNonIndexed():t.clone();return n.deleteAttribute("uv"),n});return Br(e)}function Ry(i,e){let t=i.attributes.position,n=[],s=new Fe;for(let r=0;r<t.count;r++)e(t.getX(r),t.getY(r),t.getZ(r),s),n.push(s.r,s.g,s.b);return i.setAttribute("color",new He(n,3)),i}function Cy(){let i=[[-.93,.035],[-.76,.08],[-.52,.19],[-.25,.29],[.06,.32],[.34,.27],[.56,.19],[.73,.115],[.83,.065],[.86,.035]],e=new Ts(i.map(([r,o])=>new re(o,r)),32);e.rotateZ(-Math.PI/2),e.scale(1,.94,.65);let t=new Fe("#537d83"),n=new Fe("#cad8b7"),s=new Fe("#adb379");return Ry(e,(r,o,a,l)=>{l.copy(n).lerp(t,Ay((o+.27)/.56,0,1));let c=Math.exp(-(((o-.04)/.046)**2));l.lerp(s,c*.7);let h=(Math.sin(r*67+Math.sin(o*85)*1.1)+Math.sin(o*82+a*48))*.016;l.offsetHSL(0,0,h)})}function Iy(){let i=document.createElement("canvas");i.width=i.height=512;let e=i.getContext("2d");e.fillStyle="#858585",e.fillRect(0,0,512,512);for(let n=0;n<48;n++)for(let s=0;s<32;s++){let r=s*16+n%2*8,o=n*11;e.beginPath(),e.ellipse(r,o,8,6,0,0,Math.PI),e.strokeStyle="#a3a3a3",e.lineWidth=1,e.stroke(),e.beginPath(),e.ellipse(r,o+.8,7,5,0,0,Math.PI),e.strokeStyle="#707070",e.lineWidth=.6,e.stroke()}return new xn(i)}function Py(i,e,t){let n=e.length,s=[],r=new pt,o=(E,C,P)=>{let b=new En(C,P,n);return b.name="marine-fish-"+E,b.instanceMatrix.setUsage(Uh),b.frustumCulled=!1,i.add(b),s.push(b),b},a=jt("#ffffff",{vertexColors:!0,roughness:.55,metalness:.12,bumpMap:Iy(),bumpScale:.014});a.onBeforeCompile=E=>{E.uniforms.uMarineTime=t,E.vertexShader=E.vertexShader.replace("#include <common>",`#include <common>
uniform float uMarineTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float tailWeight=pow(clamp((.35-position.x)/1.28,0.,1.),2.); transformed.z+=sin(uMarineTime*5.4+instanceMatrix[3].x*.23-position.x*2.7)*tailWeight*.09;`)};let l=o("body",Cy(),a),c=jt("#6e9189",{side:rt,roughness:.78}),h=Vi([Yo([[-.48,.2,0],[-.38,.33,0],[-.22,.42,0],[-.06,.44,0],[.13,.4,0],[.28,.32,0],[.37,.24,0]]),Yo([[-.52,-.2,0],[-.41,-.3,0],[-.22,-.34,0],[.05,-.27,0]]),Yo([[.36,-.01,.17],[.14,-.13,.39],[.01,-.18,.42],[-.07,-.18,.27]]),Yo([[.36,-.01,-.17],[.14,-.13,-.39],[.01,-.18,-.42],[-.07,-.18,-.27]])]),u=o("fins",h,c),f=o("tail",Yo([[0,0,0],[-.35,.33,.012],[-.25,.06,.012],[-.38,-.34,.012],[0,-.045,0]]),jt("#9cab8c",{side:rt,roughness:.62})),d=[],p=[],x=[];for(let E of[-1,1]){let C=new et(.044,16,10);C.scale(1,1,.33),C.translate(.59,.074,E*.125),d.push(C);let P=new et(.025,12,8);P.scale(1,1,.24),P.translate(.596,.075,E*.139),p.push(P),x.push(as([[.37,.14,E*.17],[.3,.035,E*.205],[.32,-.12,E*.177]],.0045,20)),x.push(as([[.836,.024,E*.043],[.796,-.005,E*.073],[.735,-.015,E*.096]],.003,16));for(let b=0;b<6;b++){let M=-.38+b*.11;x.push(as([[M,.24,E*.006],[M+.025,.28+b*.012,E*.006],[M+.01,.32+b*.006,E*.006]],.0025,8))}}let g=o("eyes",Vi(d),jt("#d8d5ad",{roughness:.35})),m=o("pupils",Vi(p),jt("#142b30",{roughness:.25})),v=o("gills",Vi(x),jt("#3c6567")),y=e.map((E,C)=>({...E,id:C,scale:.85+C%5*.09,position:new Hi,yaw:0,tailAngle:0})),_=(E,C,P,b,M)=>{r.position.copy(P),r.rotation.set(0,b,0),r.scale.setScalar(M),r.updateMatrix(),E.setMatrixAt(C,r.matrix)};function T(E){y.forEach((C,P)=>{let b=E*.15+C.phase,M=6.5,R=2.8;C.position.set(C.x+Math.sin(b)*M,C.y+Math.sin(E*.5+C.phase)*.28,C.z+Math.cos(b)*R);let I=Math.cos(b)*M*.15,U=-Math.sin(b)*R*.15;C.yaw=Math.atan2(-U,I);for(let N of[l,u,g,m,v])_(N,P,C.position,C.yaw,C.scale);let B=new Hi(-.91,0,0).multiplyScalar(C.scale).applyAxisAngle(Ty,C.yaw).add(C.position);C.tailAngle=Math.sin(E*5.4+C.position.x*.23+2.45)*.43,_(f,P,B,C.yaw+C.tailAngle,C.scale)});for(let C of s)C.instanceMatrix.needsUpdate=!0}return{states:y,batches:s,update:T}}function Ly(i,e,t,n){let s=new it;s.name="marine-jellyfish-"+t,s.position.copy(e),i.add(s);let r=new it;s.add(r);let o=28,a=96,l=[],c=[],h=[],u=[],f=new Fe("#9485bc"),d=new Fe("#b1ddd0");for(let R=0;R<=o;R++){let I=R/o,U=I*Math.PI*.5,B=Math.sin(U)*.77,N=.72*Math.cos(U);for(let H=0;H<=a;H++){let $=H/a*ki,V=Math.cos($*12),oe=B*(1+.035*V*I),ce=R===o?.042*Math.cos($*12):0;l.push(Math.cos($)*oe,N+ce,Math.sin($)*oe),h.push(H/a,I);let xe=d.clone().lerp(f,.2+Math.max(0,V)*.19+I*.18);if(c.push(xe.r,xe.g,xe.b),R<o&&H<a){let _e=R*(a+1)+H;u.push(_e,_e+a+1,_e+1,_e+1,_e+a+1,_e+a+2)}}}let p=new st;p.setAttribute("position",new He(l,3)),p.setAttribute("normal",new He(new Float32Array(l.length),3)),p.setAttribute("color",new He(c,3)),p.setAttribute("uv",new He(h,2)),p.setIndex(u),p.computeVertexNormals();let x=jt("#ffffff",{vertexColors:!0,transparent:!0,opacity:.4,roughness:.25,metalness:0,depthWrite:!1,side:rt,emissive:"#376964",emissiveIntensity:.09});dn(r,p,x);let g=p.clone();g.scale(.89,.82,.89),dn(r,g,jt("#b7cdbb",{transparent:!0,opacity:.15,depthWrite:!1,side:rt,roughness:.55}));let m=[];for(let R=0;R<12;R++){let I=R/12*ki,U=[];for(let B=1;B<=16;B++){let N=B/16*Math.PI*.5;U.push([Math.cos(I)*Math.sin(N)*.793,.725*Math.cos(N),Math.sin(I)*Math.sin(N)*.793])}m.push(as(U,.007,20))}dn(r,Vi(m),jt("#c6cfcb",{transparent:!0,opacity:.33,depthWrite:!1,roughness:.6}));let v=[];for(let R=0;R<4;R++){let I=R*Math.PI/2,U=new Et(.14,.027,6,18);U.rotateX(Math.PI/2),U.translate(Math.cos(I)*.16,.28,Math.sin(I)*.16),v.push(U)}dn(r,Vi(v),jt("#a28bc0",{transparent:!0,opacity:.36,depthWrite:!1,roughness:.6}));let y=[];for(let R=0;R<12;R++){let I=R/12*ki,U=1.65+R%4*.3,B=[];for(let N=0;N<=18;N++){let H=N/18;B.push([Math.cos(I)*.68+Math.sin(H*7+R)*H*.13,-H*U,Math.sin(I)*.68+Math.cos(H*6+R)*H*.12])}y.push(as(B,.011,24))}let _=jt("#a8bcc9",{transparent:!0,opacity:.58,depthWrite:!1,roughness:.65});_.onBeforeCompile=R=>{R.uniforms.uMarineTime=n,R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
uniform float uMarineTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float depth=max(0.,-position.y); transformed.x+=sin(uMarineTime*1.45+depth*2.0+position.z*3.0)*depth*.105; transformed.z+=cos(uMarineTime*1.12+depth*1.7+position.x*4.0)*depth*.085;`)};let T=dn(s,Vi(y),_),E=[];for(let R=0;R<4;R++){let I=R*Math.PI/2,U=[];for(let V=0;V<=24;V++){let oe=V/24;U.push([Math.cos(I)*(.18+oe*.18)+Math.sin(oe*8+R)*.025,-oe*1.55,Math.sin(I)*(.18+oe*.18)+Math.cos(oe*7+R)*.025])}let B=as(U,.07,72),N=B.attributes.position,H=B.attributes.normal,$=B.attributes.uv;for(let V=0;V<N.count;V++){let oe=$.getX(V),ce=$.getY(V)*ki,xe=(.012+.012*Math.sin(oe*Math.PI))*Math.sin(oe*31+ce*3+R);N.setXYZ(V,N.getX(V)+H.getX(V)*xe,N.getY(V)+H.getY(V)*xe,N.getZ(V)+H.getZ(V)*xe)}B.computeVertexNormals(),E.push(B)}let C=jt("#ada7c2",{transparent:!0,opacity:.48,depthWrite:!1,roughness:.68});C.onBeforeCompile=_.onBeforeCompile,dn(s,Vi(E),C);let P=.82+t%3*.13;s.scale.setScalar(P);let b=0;function M(R){b=Math.sin(R*1.75+t*.72),s.position.set(e.x+Math.sin(R*.18+t)*.32,e.y+Math.sin(R*.55+t*.7)*.55,e.z+Math.cos(R*.14+t)*.26),s.rotation.y=Math.sin(R*.16+t)*.18,r.scale.set(1-b*.075,1+b*.12,1-b*.075),T.scale.y=1-b*.025}return{root:s,bell:r,origin:e,update:M,get pulse(){return b}}}function Df(i=!1){let e=document.createElement("canvas");e.width=512,e.height=256;let t=e.getContext("2d");t.fillStyle=i?"#9aa18a":"#77856e",t.fillRect(0,0,512,256);for(let s=0;s<6500;s++){let r=s*83.174%512,o=s*41.631%256,a=i?2.2:1.2;t.fillStyle=s%2?"rgba(28,47,28,.07)":"rgba(204,208,161,.09)",t.beginPath(),t.ellipse(r,o,a,a*.75,0,0,ki),t.fill()}if(i)for(let s=0;s<11;s++)for(let r=0;r<22;r++){let o=r*24+s%2*12,a=s*24;t.beginPath(),t.ellipse(o,a,9,7,.2,0,ki),t.strokeStyle="#69786170",t.lineWidth=1.2,t.stroke()}let n=new xn(e);return n.colorSpace=Tt,n}function Dy(i,e,t,n){let s=new it;s.name="marine-turtle-"+t,i.add(s);let r=jt("#b1b89a",{map:n,roughness:.76}),o=jt("#bec3a6",{map:Df(!0),roughness:.75}),a=jt("#4a6355",{roughness:.8});dn(s,new et(1,40,24),r,0,.13,0,[1.34,.48,.85]);let l=[],c=(v,y)=>.14+.48*Math.sqrt(Math.max(.015,1-(v/1.34)**2-(y/.85)**2)),h=v=>{let y=[];for(let _=0;_<v.length;_++){let T=v[_],E=v[(_+1)%v.length];for(let C=0;C<5;C++){let P=C/5,b=T[0]+(E[0]-T[0])*P,M=T[1]+(E[1]-T[1])*P;y.push([b,c(b,M),M])}}y.push(y[0]),l.push(as(y,.007,v.length*6))},u=[-1.12,-.71,-.25,.25,.71,1.12];for(let v=0;v<5;v++){let y=u[v],_=u[v+1],T=(y+_)/2,E=v===0||v===4?.17:.23;h([[y,0],[y+.08,-E],[T,-E-.04],[_-.08,-E],[_,0],[_-.08,E],[T,E+.04],[y+.08,E]])}for(let v of[-1,1])for(let y of[-.78,-.26,.26,.78]){let T=.55*Math.sqrt(1-(y/1.34)**2);h([[y-.22,v*.23],[y+.22,v*.23],[y+.22*.8,v*T],[y,v*(T+.07)],[y-.22*.8,v*T]])}dn(s,Vi(l),jt("#53664f",{roughness:.88})),dn(s,new et(1,24,12),jt("#b9bba0",{roughness:.8}),0,-.12,0,[1.25,.17,.76]);let f=new Et(1,.025,6,48);f.rotateX(Math.PI/2),f.scale(1.31,1,.82),dn(s,f,a,0,.05,0),dn(s,new et(1,20,12),o,1.23,.04,0,[.42,.21,.23]),dn(s,new et(1,24,16),o,1.59,.07,0,[.36,.24,.27]);for(let v of[-1,1])dn(s,new et(.043,16,10),jt("#1b3431",{roughness:.35}),1.69,.13,v*.245,[1,1,.48]),dn(s,as([[1.88,-.015,v*.09],[1.79,-.045,v*.17],[1.68,-.045,v*.205]],.008,12),a);let d=[];for(let v of[-1,1])for(let y of[!0,!1]){let _=new it;_.position.set(y?.68:-.86,-.06,v*.65),s.add(_);let T=new et(1,20,12);T.scale(y?.72:.38,.07,y?.3:.22),T.rotateY(v*(y?-.64:.3)),T.translate(y?-.15:-.13,0,v*(y?.43:.18)),dn(_,T,o),d.push({hinge:_,side:v,front:y})}let p=new ti(.11,.48,10);p.rotateZ(Math.PI/2),dn(s,p,o,-1.36,-.08,0);let x=0,g=0;function m(v){let y=v*.1+t*1.8,_=5.5,T=3.3;s.position.set(e.x+Math.sin(y)*_,e.y+Math.sin(v*.42+t)*.25,e.z+Math.cos(y)*T),x=Math.atan2(Math.sin(y)*T,Math.cos(y)*_),s.rotation.set(Math.sin(v*.42+t)*.035,x,Math.cos(v*.31+t)*.025),g=Math.sin(v*1.6+t);for(let E of d)E.hinge.rotation.x=E.side*g*(E.front?.4:.2),E.hinge.rotation.y=Math.cos(v*1.6+t)*E.side*(E.front?.13:.08)}return{root:s,origin:e,flippers:d,update:m,get yaw(){return x},get stroke(){return g}}}function Uf(i,e,t,n){let s=e.filter(d=>!d.turtle).map((d,p)=>{let x=new Hi(d.x,d.y,d.z);return p<7?x.set(-46+p*1.35,4+p*.12,-18+p*.6):p>=7&&p<14?x.set(12+(p-7)*.65,-12+(p-7)*.12,-54+(p-7)*.6):p>=28&&x.set(-14+(p-28)*2,2+(p-28)*.22,18+(p-28)*.7),x=su(x,6.5,2.8,.85,.28,n),{...d,x:x.x,y:x.y,z:x.z}}),r={value:0},o=Py(i,s,r),a=Df(),l=e.filter(d=>d.turtle).map((d,p)=>{let x=p===1?new Hi(-26,4,16):new Hi(d.x,d.y,d.z);return Dy(i,su(x,5.5,3.3,1.5,.25,n),p,a)}),c=t.map((d,p)=>{let x=new Hi(29+p%4*5,-6+p%3*.55,-76-Math.floor(p/4)*3);return Ly(i,su(x,.32,.26,.8,.55,n,2.4),p,r)});function h(d){r.value=d,o.update(d);for(let p of c)p.update(d);for(let p of l)p.update(d)}function u(){return{counts:{fish:o.states.length,jellyfish:c.length,turtles:l.length},fishBatches:o.batches.length,animalSprites:0,fish:o.states.map(d=>({id:d.id,position:d.position.toArray(),yaw:d.yaw,tailAngle:d.tailAngle,scale:d.scale})),jellyfish:c.map((d,p)=>({id:p,position:d.root.position.toArray(),bellScale:d.bell.scale.toArray(),pulse:d.pulse})),turtles:l.map((d,p)=>({id:p,position:d.root.position.toArray(),yaw:d.yaw,stroke:d.stroke,flippers:d.flippers.map(x=>x.hinge.rotation.x)}))}}function f(d,p=0){let x=d==="fish"?o.states[p]:d==="jellyfish"?c[p]:l[p];return d==="fish"?x.position.clone():x.root.position.clone()}return h(0),{update:h,snapshot:u,focus:f}}function Nf(i,e,t){let n=new bs,s=new Vt(68,e.aspect,.04,12),r=new it;n.add(r),n.add(new Cs("#d8f0ed","#16262c",2.1));let o=new xi("#ffc98f",5,5,2);o.position.set(0,-.15,.15),n.add(o);let a=new wt({color:"#173b42",metalness:.56,roughness:.64,map:t}),l=new wt({color:"#9d8054",metalness:.68,roughness:.4}),c=new wt({color:"#07191e",metalness:.22,roughness:.78}),h=new nn({color:"#98dcca"}),u=[],f=new wt({color:"#a9a08a",metalness:.8,roughness:.35}),d=0,p,x=-1,g,m=0,v,y=(M,R,I=0,U=0,B=0)=>{let N=new tt(M,R);return N.position.set(I,U,B),r.add(N),N},_=(M,R,I)=>y(new wn(new _n(M.map(U=>new D(...U))),48,R,8,!1),I);function T(){r.traverse(M=>M.geometry?.dispose()),r.clear();for(let M of u)M.dispose();u=[],p?.dispose(),v=null}function E(){d=e.aspect,s.aspect=d,s.fov=68,s.updateProjectionMatrix(),T();let M=-1.25,R=Math.tan(Lt.degToRad(68)/2)*-M,I=R*d,U=[[-I*1.04,-R*1.15,M],[-I*.98,-R*.22,M],[-I*.94,R*.78,M],[-I*.7,R*.96,M],[0,R*1.01,M],[I*.7,R*.96,M],[I*.94,R*.78,M],[I*.98,-R*.22,M],[I*1.04,-R*1.15,M]];_(U,.078,a),_(U.map(([_e,Ze,nt])=>[_e*.983,Ze*.978,nt-.017]),.014,l);for(let _e of[-1,1]){_([[_e*I*.92,R*.79,M],[_e*I*.85,R*.15,M+.025],[_e*I*.77,-R*.62,M+.06]],.028,c),_([[_e*I*.92,R*.79,M-.01],[_e*I*.85,R*.15,M+.02],[_e*I*.77,-R*.62,M+.05]],.008,l);for(let Ze of[-.2,.3,.72])y(new et(.016,10,8),f,_e*I*.96,R*Ze,M+.064)}let B=new Ni;B.moveTo(-I*1.08,-R*1.45),B.lineTo(-I*1.03,-R*.69),B.quadraticCurveTo(0,-R*.47,I*1.03,-R*.69),B.lineTo(I*1.08,-R*1.45),B.closePath(),y(new Do(B,{depth:.16,bevelEnabled:!0,bevelThickness:.027,bevelSize:.027,bevelSegments:2,steps:1}),a,0,0,M+.04),_([[-I*1.03,-R*.68,M+.19],[-I*.52,-R*.59,M+.19],[0,-R*.56,M+.19],[I*.52,-R*.59,M+.19],[I*1.03,-R*.68,M+.19]],.022,c),_([[-I*.86,-R*.65,M+.195],[0,-R*.57,M+.195],[I*.86,-R*.65,M+.195]],.004,h);let N=M+.255,H=Math.tan(Lt.degToRad(68)/2)*-(N+.025)*d,$=Math.min(H*.66,.7),V=R*.1,oe=-R*.65;y(new Ot($*2+.06,V*2+.065,.05),c,0,oe,N-.025);let ce=document.createElement("canvas");ce.width=1024,ce.height=256,g=ce.getContext("2d"),p=new xn(ce),p.colorSpace=Tt;let xe=new nn({map:p});u.push(xe),v=y(new rn($*2,V*2),xe,0,oe,N+.004);for(let _e of[-1,1]){let Ze=_e*Math.min(I*.89,1.35),nt=y(new zt(.014,.02,R*.21,12),l,Ze,-R*.98,M+.47);nt.rotation.z=_e*.24,y(new et(.042,16,12),c,Ze-_e*.02,-R*.88,M+.47)}m=0,n.traverse(_e=>{_e.isMesh&&m++}),x=-1}function C(M){d!==e.aspect&&E();let R=Math.hypot(M.velocity.x,M.velocity.y,M.velocity.z),I=(M.heading*180/Math.PI%360+360)%360;if(x>=0&&M.time-x<.1)return;x=M.time;let U=g;U.fillStyle="#061c24",U.fillRect(0,0,1024,256),U.strokeStyle="#27625f",U.lineWidth=2,U.strokeRect(3,3,1018,250);for(let B of[342,682])U.beginPath(),U.moveTo(B,35),U.lineTo(B,215),U.stroke();U.textAlign="center",U.font='32px "PingFang SC",system-ui',U.fillStyle="#8bb9b6",["\u4E0B\u6F5C\u6DF1\u5EA6","\u822A\u901F","\u822A\u5411"].forEach((B,N)=>U.fillText(B,171+N*341,59)),U.fillStyle="#d8f5de",U.font='64px "PingFang SC",system-ui',[Math.round((M.surface??19)-M.y)+" m",R.toFixed(1)+" m/s",Math.round(I).toString().padStart(3,"0")+"\xB0"].forEach((B,N)=>U.fillText(B,171+N*341,145)),U.font='22px "PingFang SC",system-ui',U.fillStyle="#9cb9ad",["\u79BB\u5F00\u6D77\u9762\u540E\u5411\u4E0B\u8BA1\u91CF","\u677E\u952E\u7F13\u6162\u51CF\u901F","\u4E0E\u6F5C\u6C34\u8231\u540C\u6B65"].forEach((B,N)=>U.fillText(B,171+N*341,205)),p.needsUpdate=!0}function P(){d!==e.aspect&&E();let M=i.autoClear;i.autoClear=!1,i.clearDepth(),i.render(n,s),i.autoClear=M}E();function b(M){n.updateMatrixWorld(!0),s.updateMatrixWorld(!0);let{width:R,height:I}=M.geometry.parameters,U=new D(-R/2,I/2,0).applyMatrix4(M.matrixWorld).project(s),B=new D(R/2,-I/2,0).applyMatrix4(M.matrixWorld).project(s);return{left:(U.x+1)/2,top:(1-U.y)/2,right:(B.x+1)/2,bottom:(1-B.y)/2}}return{update:C,render:P,snapshot:()=>({geometryCount:m,aspect:d,openWindshield:!0,secondary3DPass:!0,loopieCount:0,needleCount:0,sideDecorations:"none",loopieBounds:[],screenBounds:b(v)})}}var vi=D,cS=new vi(0,1,0),ru=Math.PI*2,Or=(i,e={})=>new wt({color:i,roughness:.66,metalness:.035,...e});function on(i,e,t){let n=i.attributes.position,s=new Float32Array(n.count*3),r=e.map(([a,l])=>[a,new Fe(l)]),o=new Fe;for(let a=0;a<n.count;a++){let l=Lt.clamp(t(n.getX(a),n.getY(a),n.getZ(a)),0,1),c=0;for(;c<r.length-2&&l>r[c+1][0];)c++;let h=r[c],u=r[c+1],f=Lt.clamp((l-h[0])/(u[0]-h[0]),0,1);o.copy(h[1]).lerp(u[1],f*f*(3-2*f)),o.toArray(s,a*3)}return i.setAttribute("color",new Mt(s,3)),i}function vn(i,e={}){let t=Or("#ffffff",{vertexColors:!0,emissive:"#ffffff",emissiveIntensity:i,...e});return t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_COLOR
totalEmissiveRadiance*=vColor;
#endif`)},t}function At(i,e,t,n=[0,0,0],s=null){let r=new tt(e,t);return r.position.set(...n),s&&r.scale.set(...s),i.add(r),r}function Gi(i,e=.014){return new wn(new _n(i.map(t=>new vi(...t))),36,e,5,!1)}function mc(i){return Br(i.map(e=>{let t=e.index?e.toNonIndexed():e.clone();return t.deleteAttribute("uv"),t}))}function gc(i,e,t,n){let s=[Math.abs(i-n.x),Math.abs(e-n.y),Math.abs(t-n.z)],r=[n.rx,n.ry,n.rz],o=r.map(h=>h*h);if(s.reduce((h,u,f)=>h+u*u/o[f],0)<=1)return 0;let a=h=>s.reduce((u,f,d)=>u+(r[d]*f/(h+o[d]))**2,0),l=0,c=Math.max(...r)*Math.hypot(...s);for(;a(c)>1;)c*=2;for(let h=0;h<32;h++){let u=(l+c)/2;a(u)>1?l=u:c=u}return Math.hypot(...s.map((h,u)=>h-o[u]*h/(c+o[u])))}function Uy(i,e,t,n,s,r){let o=1/0,a=1/0;for(let l=0;l<192;l++){let c=l/192*ru,h=i.x+Math.sin(c)*e,u=i.z+Math.cos(c)*t;if(h-n<8||h+n>29||u-n<-75||u+n>-30||i.y+s+n>-.7)return null;for(let f=0;f<=4;f++)for(let d=0;d<24;d++){let p=f/4,x=d/24*ru,g=Math.cos(x)*n*p,m=Math.sin(x)*n*p,y=i.y-s-Math.sqrt(Math.max(0,n*n-g*g-m*m))-r.floor(h+g,u+m);if(o=Math.min(o,y),y<.28)return null}for(let f of r.rocks){let d=gc(h,i.y,u,f)-n-s;if(a=Math.min(a,d),d<.28)return null}}return{floorClearance:o,rockClearance:a}}function Ff(i,e,t,n,s,r){for(let o of[0,1.5,3])for(let a of[0,-2,2,-4,4])for(let l of[0,-1.5,1.5,-3,3]){let c=i.clone().add(new vi(l,o,a)),h=Uy(c,e,t,n,s,r);if(h)return{origin:c,rx:e,rz:t,r:n,bob:s,safety:h}}throw new Error("\u539F\u521B\u751F\u7269\u6CA1\u6709\u5B8C\u6574\u8EAB\u4F53\u51C0\u7A7A\u7684\u5CE1\u8C37\u822A\u7EBF")}function Bf(i,e,t,n,s){let r=t*n+s;i.position.set(e.origin.x+Math.sin(r)*e.rx,e.origin.y+Math.sin(t*.4+s)*e.bob,e.origin.z+Math.cos(r)*e.rz);let o=Math.atan2(Math.sin(r)*e.rz,Math.cos(r)*e.rx);return i.rotation.set(Math.sin(t*.3+s)*.025,o,Math.sin(r)*.035),o}function Zo(i,e,t,n){let s=t===0?[[0,"#37bda8"],[.3,"#3189bd"],[.66,"#6653b6"],[.88,"#af5c98"],[1,"#ec967b"]]:[[0,"#79c59b"],[.3,"#319aaf"],[.66,"#40569c"],[.88,"#8461ad"],[1,"#d989b3"]],r=vn(.11,{roughness:.49}),o=vn(.045,{roughness:.64}),a=vn(.75,{roughness:.48}),l=f=>{f.uniforms.uAlienTime=n,f.uniforms.uAlienPhase={value:t*1.7},f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
uniform float uAlienTime,uAlienPhase;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float span=abs(position.z)/2.85;transformed.y+=sin(uAlienTime*1.35-span*2.6+position.x*.45+uAlienPhase)*pow(span,1.25)*.36;`)};for(let f of[r,a]){let d=f.onBeforeCompile;f.onBeforeCompile=p=>{d(p),l(p)}}At(i,on(new et(1,36,20),[[0,"#315775"],[.45,"#bd9369"],[.72,"#e3c38b"],[1,"#f2dfb2"]],(f,d,p)=>(d+1)/2),o,[0,0,0],[1.72,.28,.39]);for(let f of[-1,1])for(let d=0;d<2;d++)At(i,new et(.058,12,8),Or("#233d43"),[1.4-d*.12,.08,f*(.24+d*.05)],[1,.4,1]);let c=[];for(let f of[-1,1]){let d=[],p=[],x=[];for(let E=0;E<=14;E++)for(let C=0;C<=32;C++){let P=E/14,b=C/32,M=Math.max(.025,Math.pow(1-P,.72));if(d.push((-1.55+3.05*b)*M-P*.58,.08*Math.sin(b*Math.PI)-P*.1,f*(.24+P*2.61)),p.push(b,P),E<14&&C<32){let R=E*33+C;x.push(R,R+1,R+32+1,R+1,R+32+2,R+32+1)}}let v=new st;v.setAttribute("position",new He(d,3)),v.setAttribute("uv",new He(p,2)),v.setIndex(x),v.computeVertexNormals(),on(v,s,(E,C,P)=>(Math.abs(P)-.24)/2.61+.025*Math.sin(E*5));let y=At(i,v,r);y.material.side=rt;let _=new Tr({depthPacking:lc,side:rt});_.onBeforeCompile=l,y.customDepthMaterial=_;for(let E of[.18,.46,.75]){let C=[];for(let P=0;P<=16;P++){let b=P/16,M=Math.max(.025,Math.pow(1-b,.72));C.push([(-1.55+3.05*E)*M-b*.58,.025+.08*Math.sin(E*Math.PI)-b*.1,f*(.24+b*2.61)])}c.push(Gi(C,.01))}let T=[];for(let E=0;E<9;E++){let C=-.85+E*.17;T.push(Gi([[C,-.15,f*.3],[C-.04,-.21,f*.41],[C-.12,-.24,f*.36]],.012))}At(i,mc(T),Or(t===0?"#984e67":"#5179a0"))}At(i,on(mc(c),[[0,"#7be6be"],[.58,"#8fa5ef"],[1,t===0?"#f6c08c":"#efa3c7"]],(f,d,p)=>Math.abs(p)/2.85),a);let h=Gi([[-1.4,0,0],[-1.95,-.05,0],[-2.35,-.13,.1],[-2.64,-.1,.08]],.045);on(h,[[0,"#397eae"],[1,"#c688bc"]],(f,d,p)=>(-f-1.4)/1.3),At(i,h,r),i.traverse(f=>{f.isMesh&&(f.material===r||f.material===a)&&(f.userData.alienMembrane=!0)});let u=0;return{root:i,state:e,kind:"sail",radius:e.r,update(f){u=Bf(i,e,f,.12,t*2.2)},snapshot(){return{kind:"sail",id:t,position:i.position.toArray(),yaw:u,finPhase:Math.sin(n.value*1.35+t*1.7),radius:e.r}}}}function $o(i,e,t,n){let s=["#69d9c6","#72bdea","#9882db","#d57ebb","#ef9c9a","#e9be77"],r=vn(.075,{roughness:.36,transparent:!0,opacity:.72,depthWrite:!1,side:rt}),o=Or(["#d69c67","#bd7a93","#98ad6b"][t],{roughness:.45}),a=vn(.68),l=[];At(i,on(new et(1,32,18),[[0,"#4189a5"],[.48,"#6e75bd"],[1,"#b186c7"]],(d,p,x)=>(p+1)/2),r,[0,0,0],[1.14,.32,.33]),At(i,new et(1,28,16),o,[.12,0,0],[.89,.13,.16]);let c=[];for(let d=0;d<10;d++){let p=-.92+d*.18,x=.29*Math.sqrt(Math.max(.05,1-(p/1.14)**2)),g=new Et(x,.009,5,24);g.rotateY(Math.PI/2),g.scale(1,.95,1),g.translate(p,0,0),on(g,[[0,s[(d+t)%6]],[1,s[(d+t)%6]]],()=>0),c.push(g)}At(i,mc(c),a);let h=vn(.16,{roughness:.5});for(let d of[-1,1])for(let p=0;p<11;p++){let x=-.88+p*.17,g=new it;g.position.set(x,.03,d*.25),i.add(g);let m=new et(1,12,8);m.scale(.095,.025,.32);let v=s[Math.min(5,Math.floor(p/2))];on(m,[[0,"#425384"],[.36,v],[1,v]],(y,_,T)=>(T*d+.32)/.64),At(g,m,h,[0,0,d*.2]),l.push({g,side:d,i:p})}let u=[];for(let d of[-1,1])u.push(Gi([[.9,.08,d*.14],[1.17,.11,d*.22],[1.4,.12,d*.3],[1.53,.08,d*.26]],.014));At(i,on(mc(u),[[0,"#84dfcc"],[1,"#f0c887"]],(d,p,x)=>(d-.9)/.63),a);let f=0;return{root:i,state:e,kind:"comb",radius:e.r,update(d){f=Bf(i,e,d,.17,t*1.8+.7);for(let p of l)p.g.rotation.x=p.side*(.12+Math.sin(d*3.7-p.i*.58+t)*.54)},snapshot(){return{kind:"comb",id:t,position:i.position.toArray(),yaw:f,paddleAngles:l.map(d=>d.g.rotation.x),radius:e.r}}}}function ou(i,e,t){let n=[["#8a58a5","#d45b8e","#f4ab6b"],["#5869a4","#df7962","#f0c881"],["#8d5591","#bd5d93","#f5a798"],["#456f92","#da925e","#f2d493"],["#68559e","#cc657e","#edb979"]],[s,r,o]=n[t],a=Or("#536b83",{roughness:.9}),l=vn(.35,{roughness:.54}),c=Or("#e9c273",{roughness:.57,emissive:"#c7994b",emissiveIntensity:.2});At(i,Gi([[0,0,0],[.08,.22,.02],[.04,.47,-.03],[0,.65,0]],.11),a);let h=[];for(let f=0;f<8;f++){let d=f/8*ru,p=new it;p.position.set(0,.63,0),p.rotation.y=d,i.add(p);let x=new et(1,18,12);x.scale(.14,.12,.34),on(x,[[0,s],[.5,r],[1,f%2?o:"#f0b6aa"]],(g,m,v)=>(v+.34)/.68),At(p,x,l,[0,.09,.24]),At(p,Gi([[0,.13,.02],[0,.18,.28],[0,.1,.52]],.012),c),h.push(p)}At(i,new et(.14,20,12),c,[0,.66,0],[1,.5,1]),i.position.copy(e);let u=0;return{root:i,kind:"crown",radius:.65,update(f){u=Math.sin(f*.85+t*1.3);for(let d of h)d.rotation.x=-.25+u*.19},snapshot(){return{kind:"crown",id:t,position:i.position.toArray(),opening:u,petalAngles:h.map(f=>f.rotation.x),heightEnvelope:1.08}}}}function Of(i,e){let t={value:0},n=[],s=[],r=p=>{let x=new it;return x.name="alien-"+p,i.add(x),x};[new vi(16,-11,-40),new vi(18,-11,-65)].forEach((p,x)=>{let g=Ff(p,1.3,1.5,3.14,.22,e);s.push({kind:"sail",id:x,...g.safety,origin:g.origin.toArray(),radius:g.r,route:[g.rx,g.rz],bob:g.bob}),n.push(Zo(r("sail-"+x),g,x,t))}),[new vi(12,-16,-39),new vi(23,-15,-66),new vi(16,-15,-69)].forEach((p,x)=>{let g=Ff(p,1.1,1.3,1.75,.22,e);s.push({kind:"comb",id:x,...g.safety,origin:g.origin.toArray(),radius:g.r,route:[g.rx,g.rz],bob:g.bob}),n.push($o(r("comb-"+x),g,x,t))});let a=[];for(let p of[-31,-34,-72,-69,-66,-42,-45])for(let x of[17,19,15,21]){if(a.length===5)break;let g=e.floor(x,p),m=new vi(x,g+.12,p);if(Math.abs(e.floor(x+.65,p)-e.floor(x-.65,p))>.55||Math.abs(e.floor(x,p+.65)-e.floor(x,p-.65))>.55||e.objects.some(y=>m.distanceTo(y.position)<2.6)||e.rocks.some(y=>((x-y.x)/(y.rx+.8))**2+((g+.7-y.y)/(y.ry+.9))**2+((p-y.z)/(y.rz+.8))**2<1))continue;let v=a.length;a.push(m),n.push(ou(r("crown-"+v),m,v)),s.push({kind:"crown",id:v,position:m.toArray(),maxAboveFloor:1.2,belowPlayerFloorClearance:!0})}if(a.length!==5)throw new Error("\u6D77\u5E8A\u51A0\u4F53\u9644\u7740\u70B9\u4E0D\u8DB3");function l(p){t.value=p,n.forEach(x=>x.update(p))}function c(){return{counts:{sail:2,comb:3,crown:5},sprites:0,animals:n.map(p=>p.snapshot())}}function h(p){let x=t.value;l(p);let g=c();return l(x),g}function u(p,x=0){return n.filter(g=>g.kind===p)[x].root.position.clone()}function f(){return s}function d(){let p=t.value,x=n.map(v=>({kind:v.kind,id:v.snapshot().id,radiusLimit:v.radius,maxActualRadius:0,maxAboveFloor:0,vertexSamples:0})),g=new vi,m=new ct;for(let v of[0,.8,1.7,3.2,6.4,9.6])l(v),i.updateMatrixWorld(!0),n.forEach((y,_)=>{let T=x[_];m.copy(y.root.matrixWorld).invert(),y.root.traverse(E=>{if(!E.isMesh)return;let C=E.geometry.attributes.position;for(let P=0;P<C.count;P++){if(g.fromBufferAttribute(C,P),E.userData.alienMembrane){let b=.36*Math.pow(Math.abs(g.z)/2.85,1.25);g.y+=(g.y<0?-1:1)*b}g.applyMatrix4(E.matrixWorld),T.maxAboveFloor=Math.max(T.maxAboveFloor,g.y-e.floor(g.x,g.z)),g.applyMatrix4(m),T.maxActualRadius=Math.max(T.maxActualRadius,g.length()),T.vertexSamples++}})});return l(p),i.updateMatrixWorld(!0),x}return l(0),{update:l,snapshot:c,at:h,focus:u,safety:f,envelopes:d}}var Nn=Object.freeze({x:220,z:260,centerZ:-49,surface:128}),ri=Object.freeze([{id:"east",name:"\u5C42\u53E0\u9AD8\u7901",x:85,z:-35,rx:24,rz:33,height:70},{id:"west",name:"\u84DD\u5CA9\u9AD8\u810A",x:-85,z:-105,rx:24,rz:30,height:62},{id:"north",name:"\u73CA\u745A\u51A0\u4E18",x:35,z:57,rx:30,rz:24,height:50},{id:"south",name:"\u6DF1\u84DD\u77F3\u5CF0",x:-25,z:-167,rx:28,rz:23,height:56}]),fn=(i,e,t=0)=>i-e*Math.floor((i-t+e/2)/e);function Xn(i){return{x:fn(i.x,220),y:i.y,z:fn(i.z,260,-49)}}var Jo=(i,e,t)=>{let n=Lt.clamp((t-i)/(e-i),0,1);return n*n*(3-2*n)};function Ny(i,e){let t=-7.2+.62*Math.sin(i*.19)*Math.cos(e*.13)+.45*Math.sin(e*.22+i*.1),n=14*Math.exp(-(((i-16)/7.7)**4)-((e+12)/27)**4),s=20*Math.exp(-(((i-18)/10.2)**4)-((e+57)/41)**4),r=13*Math.exp(-(((i-36)/16)**4)-((e+101)/25)**4);return t-Math.max(n,s,r)}function zf(i,e){let t=Xn({x:i,z:e}),n=t.x,s=t.z,r=Math.max(Jo(88,104,Math.abs(n)),Jo(102,124,Math.abs(s+49))),o=-7.2+.65*Math.sin(n*Math.PI*8/220)*Math.cos((s+49)*Math.PI*6/260)+.35*Math.sin(n*Math.PI*4/220+(s+49)*Math.PI*8/260),a=Ny(n,s)*(1-r)+o*r,l=Math.max(Jo(70,77,Math.abs(n)),Jo(36,44,s),1-Jo(-154,-146,s)),c=0;for(let h of ri){let u=fn(n-h.x,220)/h.rx,f=fn(s-h.z,260)/h.rz,d=(u*u+f*f)*(1+.065*Math.sin(u*12+f*4)*Math.cos(f*9-u*3));if(d<1){let p=1-d,x=p*p*(3-2*p);c=Math.max(c,h.height*x)}}return a+c*l}function Ko(i,e,t=new D){return t.set(e.x+fn(i.x-e.x,220),i.y,e.z+fn(i.z-e.z,260))}function Hf(i,e,t){for(let o=0;o<260;o+=20)for(let a=0;a<220;a+=20){let l=Math.min(20,220-a),c=Math.min(20,260-o),h=new st;for(let[d,p]of Object.entries(e.attributes)){let x=new Float32Array((l+1)*(c+1)*p.itemSize),g=0;for(let m=0;m<=c;m++)for(let v=0;v<=l;v++){let y=((o+m)*221+a+v)*p.itemSize;for(let _=0;_<p.itemSize;_++)x[g++]=p.array[y+_]}h.setAttribute(d,new Mt(x,p.itemSize))}let u=[];for(let d=0;d<c;d++)for(let p=0;p<l;p++){let x=d*(l+1)+p,g=x+l+1;u.push(x,g,x+1,g,g+1,x+1)}h.setIndex(u),h.computeBoundingSphere();let f=new tt(h,t);f.name="loop-terrain-chunk",f.userData.loopTerrain=!0,i.add(f)}e.dispose()}function kf(i,e,t){let n=new it;n.name="high-sea-life-v10",i.add(n);let s={value:0},r=[];for(let d=0;d<ri.length;d++){let p=ri[d],x=d%2?1.75:3.14,g=5,m=6,v=.22,y=-1/0;for(let C=0;C<192;C++)for(let P=0;P<=4;P++)for(let b=0;b<24;b++){let M=C*Math.PI*2/192,R=b*Math.PI*2/24,I=x*P/4;y=Math.max(y,e(p.x+Math.sin(M)*g+Math.cos(R)*I,p.z+Math.cos(M)*m+Math.sin(R)*I)+Math.sqrt(Math.max(0,x*x-I*I)))}let _={origin:new D(p.x,y+v+1.5,p.z),rx:g,rz:m,r:x,bob:v},T=new it;T.name="high-sea-swimmer-"+d,n.add(T);let E=d%2?$o(T,_,d%3,s):Zo(T,_,d%2,s);r.push(E)}let o=new wt({color:"#adb1bc",roughness:.88,map:t,emissive:"#2c5067",emissiveIntensity:.08}),a=new ws(1,1),l=new En(a,o,180),c=new pt;l.name="high-sea-ledge-stones",i.add(l);let h=0;for(let d of ri)for(let p=0;p<45;p++){let x=p*2.399963,g=.23+.55*(p*17%45)/45,m=d.x+Math.cos(x)*d.rx*g,v=d.z+Math.sin(x)*d.rz*g,y=e(m,v);c.position.set(m,y+.13,v),c.rotation.set(0,p*.71,0),c.scale.set(.24+p%4*.12,.17,.3+p%3*.13),c.updateMatrix(),l.setMatrixAt(h++,c.matrix)}l.receiveShadow=!0;let u=new wt({color:"#c4979e",roughness:.82,emissive:"#8fa8ba",emissiveIntensity:.07}),f=new En(new ti(1,1,6),u,96);f.name="high-sea-small-corals",i.add(f),h=0;for(let d of ri)for(let p=0;p<24;p++){let x=p*2.399963,g=.28+.4*(p%6)/6,m=d.x+Math.cos(x)*d.rx*g,v=d.z+Math.sin(x)*d.rz*g;c.position.set(m,e(m,v)+.31,v),c.rotation.set(0,x,0),c.scale.set(.2,.55+p%3*.1,.2),c.updateMatrix(),f.setMatrixAt(h++,c.matrix)}return{update(d){s.value=d;for(let p of r)p.update(d)},snapshot(){return r.map(d=>d.snapshot())}}}function Vf(i,{pod:e,shadow:t,objects:n,rocks:s,player:r,period:o=Nn}){i.updateMatrixWorld(!0);let a=i.children.filter(I=>I.name.startsWith("marine-")||I.name==="deep-sea-local-v7"||I.name==="high-sea-life-v10"),l=new Set(a),c=new Set([e,t,...n.flatMap(I=>[I.body,I.glow])]),h=[],u=[],f=[];function d(I){if(!(c.has(I)||l.has(I))){if(I.isLight){I.isPointLight&&I.parent===i&&f.push(I);return}if(I.isMesh&&!I.isInstancedMesh&&!Array.isArray(I.material)&&!I.material.transparent&&!I.customDepthMaterial){h.push(I);return}if(I.isMesh||I.isPoints||I.isSprite){u.push(I);return}for(let U of I.children)d(U)}}for(let I of i.children)d(I);let p=new Map;for(let I of h){let U=I.material,B=U.map;I.geometry.boundingSphere||I.geometry.computeBoundingSphere();let N=I.geometry.boundingSphere.center.clone().applyMatrix4(I.matrixWorld),H=JSON.stringify([Math.floor(N.x/40),Math.floor(N.z/40),U.type,U.color?.getHex(),U.emissive?.getHex(),U.emissiveIntensity,U.roughness,U.metalness,U.side,U.vertexColors,U.fog,B?.source.uuid,B?.colorSpace,U.customProgramCacheKey(),Object.keys(I.geometry.attributes).sort(),I.castShadow,I.receiveShadow]);p.has(H)||p.set(H,{source:U,geos:[],cast:I.castShadow,receive:I.receiveShadow});let $=I.geometry.index?I.geometry.toNonIndexed():I.geometry.clone();if($.applyMatrix4(I.matrixWorld),B&&$.attributes.uv){B.updateMatrix();let V=$.attributes.uv,oe=new re;for(let ce=0;ce<V.count;ce++)oe.set(V.getX(ce),V.getY(ce)).applyMatrix3(B.matrix),V.setXY(ce,oe.x,oe.y)}p.get(H).geos.push($)}let x=[];for(let{source:I,geos:U,cast:B,receive:N}of p.values()){let H=Br(U,!1);if(!H)throw new Error("\u5FAA\u73AF\u6D77\u666F\u6279\u5904\u7406\u5931\u8D25");for(let oe of U)oe.dispose();H.computeBoundingSphere();let $=I.clone();$.onBeforeCompile=I.onBeforeCompile,$.customProgramCacheKey=I.customProgramCacheKey,I.map&&($.map=I.map.clone(),$.map.offset.set(0,0),$.map.repeat.set(1,1),$.map.rotation=0,$.map.updateMatrix(),$.map.needsUpdate=!0);let V=new tt(H,$);V.castShadow=B,V.receiveShadow=N,V.name="loop-static-batch",x.push(V)}let g=s.map(I=>({...I})),m=[],v=[],y=[...f],_=[];for(let I of n)I.basePosition=I.position.clone(),_.push({item:I,body:I.body,glow:I.glow});for(let I=-1;I<=1;I++)for(let U=-1;U<=1;U++){if(I===0&&U===0)continue;let B=new it;B.name=`ocean-neighbour-${I}-${U}`,B.position.set(I*o.x,0,U*o.z),i.add(B),m.push(B);for(let N of x)B.add(N.clone());for(let N of u){let H=N.clone(!1);N.matrixWorld.decompose(H.position,H.quaternion,H.scale),B.add(H),H.isInstancedMesh&&(H.instanceMatrix=N.instanceMatrix)}for(let N of f){let H=N.clone();H.position.copy(N.position),B.add(H),y.push(H)}for(let N of a){let H=N.clone(!0);B.add(H);let $=[],V=[];N.traverse(ce=>$.push(ce)),H.traverse(ce=>V.push(ce));let oe=$.map((ce,xe)=>(ce.isInstancedMesh&&(V[xe].instanceMatrix=ce.instanceMatrix),V[xe].customDepthMaterial=ce.customDepthMaterial,V[xe].customDistanceMaterial=ce.customDistanceMaterial,{src:ce,dst:V[xe]}));v.push({tile:B,nodes:oe})}for(let N of n){let H=N.body.clone(),$=N.glow.clone();B.add(H,$),_.push({tile:B,item:N,body:H,glow:$})}for(let N of g)s.push({...N,x:N.x+I*o.x,z:N.z+U*o.z})}let T=new D,E=new D,C=new ts,P=new ct,b=new Ln;function M(I,U){let B=I.position;for(let N of m){let H=Math.max(0,Math.abs(B.x-N.position.x)-110),$=Math.max(0,Math.abs(B.z-N.position.z+49)-130);N.visible=Math.hypot(H,$)<U+35}for(let N of v)if(N.tile.visible)for(let{src:H,dst:$}of N.nodes)$.position.copy(H.position),$.quaternion.copy(H.quaternion),$.scale.copy(H.scale),$.visible=H.visible;for(let N of n)Ko(N.basePosition,r,N.position);for(let N of _)N.body.visible=N.glow.visible=!N.item.taken,N.body.position.copy(N.item.body.position),N.glow.position.copy(N.item.glow.position);i.updateMatrixWorld(!0),I.getWorldDirection(E),P.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),C.setFromProjectionMatrix(P);for(let N of y){N.getWorldPosition(T),b.center.copy(T),b.radius=N.distance;let H=T.sub(B).dot(E);N.visible=H<U+N.distance&&H>-N.distance&&C.intersectsSphere(b)}}function R(){return{tilePool:9,neighbours:m.length,visibleNeighbours:m.filter(I=>I.visible).length,staticBatches:x.length,sharedGeometry:!0,sharedPickupIds:!0,originalColliders:g.length,pooledColliders:s.length}}return{update:M,snapshot:R}}var Bs=D,au=Math.PI*2,Gf=i=>i.x>23&&i.z<=-74?"cave":i.z<-80?"customs":i.x>6&&i.x<31&&i.z<8?"wreck":i.x<-22&&i.z<-8?"kelp":"entry";function Fy(i,e,t,n,s,r,o){let a=1/0,l=1/0;for(let c=0;c<144;c++){let h=c/144*au,u=i.x+Math.sin(h)*e,f=i.z+Math.cos(h)*t;if(u-n<-69||u+n>69||f-n<-133||f+n>35||i.y+s+n>10.8)return null;for(let d of[-n,0,n])for(let p of[-n,0,n])if(Gf({x:u+d,z:f+p})!==r)return null;for(let d=0;d<5;d++)for(let p=0;p<24;p++){let x=n*d/4,g=p/24*au,m=Math.cos(g)*x,v=Math.sin(g)*x,y=i.y-s-Math.sqrt(Math.max(0,n*n-m*m-v*v))-o.floor(u+m,f+v);if(a=Math.min(a,y),y<.32)return null}for(let d of o.rocks){let p=gc(u,i.y,f,d)-n-s;if(l=Math.min(l,p),p<.32)return null}}return{floorClearance:a,rockClearance:l}}function By(i,e,t,n,s,r,o){for(let a of[0,1,-1,2,-2,3])for(let l of[0,-2,2,-4,4])for(let c of[0,-2,2,-4,4]){let h=new Bs(...i).add(new Bs(l,a,c)),u=Fy(h,e,t,n,s,r,o);if(u)return{origin:h,rx:e,rz:t,r:n,bob:s,safety:u}}throw new Error(r+"\u751F\u7269\u6CA1\u6709\u5B89\u5168\u822A\u7EBF: "+i)}function Wf(i,e,t,n,s=.14){let r=t*s+n;i.position.set(e.origin.x+Math.sin(r)*e.rx,e.origin.y+Math.sin(t*.38+n)*e.bob,e.origin.z+Math.cos(r)*e.rz);let o=Math.atan2(Math.sin(r)*e.rz,Math.cos(r)*e.rx);return i.rotation.set(0,o,Math.sin(r)*.035),o}function Oy(i,e,t){let n=vn(.055,{roughness:.49}),s=vn(.11,{roughness:.48}),r=vn(.3,{roughness:.52}),o=[];At(i,on(new et(1,28,16),[[0,"#386291"],[.45,"#79ad89"],[1,"#d5c685"]],(c,h,u)=>(h+1)/2),n,[0,0,0],[1.42,.21,.25]);for(let c of[-1,1])for(let h=0;h<6;h++){let u=new it;u.position.set(-1+h*.38,.03,c*.19),i.add(u);let f=new et(1,16,10);f.scale(.23,.035,.55),on(f,[[0,"#388985"],[.55,t?"#749dc0":"#93b58a"],[1,t?"#c893c4":"#d6c989"]],(d,p,x)=>(c*x+.55)/1.1),At(u,f,s,[0,0,c*.35]),At(u,on(Gi([[0,.04,0],[0,.05,c*.35],[.04,.035,c*.78]],.008),[[0,"#76b69b"],[1,"#e2ce9a"]],(d,p,x)=>Math.abs(x)/.78),r),o.push({g:u,i:h,side:c})}let a=new wt({color:"#233d55",roughness:.65});for(let c of[-1,1])At(i,new et(.035,10,6),a,[1.21,.065,c*.15],[1,.5,1]);let l=0;return{root:i,state:e,kind:"leaf",radius:e.r,update(c){l=Wf(i,e,c,t*2+.4);for(let h of o)h.g.rotation.x=h.side*(.1+Math.sin(c*1.75-h.i*.68+t)*.3)},snapshot(){return{kind:"leaf",id:t,position:i.position.toArray(),yaw:l,leafAngles:o.map(c=>c.g.rotation.x),radius:e.r}}}}function zy(i,e,t){let n=vn(.16,{roughness:.33,transparent:!0,opacity:.57,depthWrite:!1,side:rt}),s=vn(.48,{roughness:.43}),r=vn(.48,{roughness:.35}),o=vn(.35,{roughness:.5}),a=[],l=At(i,on(new et(1,30,20),[[0,"#296f9b"],[.45,"#5973b8"],[.8,t?"#ba72aa":"#8e7bcc"],[1,"#dcacc2"]],(u,f,d)=>(f+1)/2),n,[0,.2,0],[.83,.88,.72]);At(i,on(new et(1,22,14),[[0,"#efbf83"],[.5,"#dc8ab0"],[1,"#85dcda"]],(u,f,d)=>(f+1)/2),r,[0,.18,0],[.34,.46,.3]);for(let u=0;u<3;u++){let f=new Et(.68-u*.08,.013,6,32);f.rotateX(Math.PI/2),At(i,on(f,[[0,"#86d8d6"],[1,"#d59dc5"]],(d,p,x)=>(d+.7)/1.4),s,[0,-.06+u*.29,0])}for(let u=0;u<6;u++){let f=u/6*au,d=new it;d.position.set(Math.cos(f)*.46,-.35,Math.sin(f)*.46),i.add(d);let p=[];for(let x=0;x<8;x++)p.push([Math.cos(f)*x*.045,-x*.205,Math.sin(f)*x*.045+Math.sin(x*.7+u)*.05]);At(d,on(Gi(p,.016),[[0,"#77c8d1"],[.58,"#ac87cc"],[1,"#efa8af"]],(x,g,m)=>-g/1.44),o),a.push({g:d,i:u})}let c=0,h=0;return{root:i,state:e,kind:"lantern",radius:e.r,update(u){h=Wf(i,e,u,t*2.1+.9,.095),c=Math.sin(u*1.1+t*1.8),l.scale.set(.83*(1+c*.055),.88*(1-c*.035),.72*(1+c*.055));for(let f of a)f.g.rotation.x=Math.sin(u*.9+f.i*.65)*.11,f.g.rotation.z=Math.sin(u*.9+f.i*.65+.8)*.11},snapshot(){return{kind:"lantern",id:t,position:i.position.toArray(),yaw:h,pulse:c,armAngles:a.map(u=>[u.g.rotation.x,u.g.rotation.z]),radius:e.r}}}}function Xf(i,e){let t={value:0},n=[],s=[],r=(g,m,v)=>{let y=new it;return y.name=`ocean-alien-${g}-${m}-${v}`,y.userData.region=g,i.add(y),y};function o(g,m,v,y,_=1.6,T=1.9){let E={sail:3.14,comb:1.75,leaf:1.9,lantern:2.3}[m],C=By(y,_,T,E,.22,g,e),P=r(g,m,v),b=m==="sail"?Zo(P,C,v%2,t):m==="comb"?$o(P,C,v%3,t):m==="leaf"?Oy(P,C,v):zy(P,C,v);b.region=g,b.id=v,b.cullRadius=E,n.push(b),s.push({region:g,kind:m,id:v,...C.safety,origin:C.origin.toArray(),radius:E,route:[_,T],bob:C.bob})}o("entry","sail",0,[-15,-.5,18]),o("entry","comb",0,[-27,-1,17]),o("entry","comb",1,[15,-1,23]),o("kelp","sail",1,[-44,4,-38]),o("kelp","leaf",0,[-44,1,-17]),o("kelp","leaf",1,[-44,2,-49]),o("cave","comb",2,[37,-13,-82],1,1.2),o("cave","lantern",0,[35,-13.5,-96],1,1.4),o("cave","lantern",1,[37,-13.5,-112],1,1.4),o("customs","sail",0,[-10,3,-117]),o("customs","comb",1,[-18,1,-105]),o("customs","comb",2,[4,2,-121]);let a={entry:{xs:[-23,-31,-18,2,12,23],zs:[25,19,12],count:4},kelp:{xs:[-44,-47,-40,-50],zs:[-15,-23,-33,-43,-49],count:4},cave:{xs:[33,38,35,40],zs:[-91,-103,-115,-97,-109],count:5},customs:{xs:[-18,-12,-6,0,5],zs:[-96,-108,-119,-129],count:4}};for(let[g,m]of Object.entries(a)){let v=0;for(let y of m.zs)for(let _ of m.xs){if(v===m.count)continue;let T=e.floor(_,y),E=new Bs(_,T+.12,y),C=.75;if(Gf(E)!==g||Math.abs(e.floor(_+C,y)-e.floor(_-C,y))>.55||Math.abs(e.floor(_,y+C)-e.floor(_,y-C))>.55||e.objects.some(M=>E.distanceTo(M.position)<2.6)||e.rocks.some(M=>gc(_,T+.55,y,M)<.95))continue;let P=r(g,"crown",v),b=ou(P,E,v%5);b.region=g,b.id=v,b.cullRadius=1.5,n.push(b),s.push({region:g,kind:"crown",id:v,position:E.toArray(),maxAboveFloor:1.2}),v++}if(v!==m.count)throw new Error(g+"\u51A0\u4F53\u5B89\u5168\u9644\u7740\u70B9\u4E0D\u8DB3 "+v)}let l=new Bs,c=new Bs,h=new Bs;function u(g,m,v=155){t.value=g,m&&(m.getWorldPosition(l),m.getWorldDirection(c));for(let y of n)if(y.update(g),m){let _=h.copy(y.root.position).sub(l).dot(c);y.root.visible=_<v+y.cullRadius+2&&_>-y.cullRadius-2}}function f(){let g={};for(let m of n)g[m.region]=(g[m.region]||0)+1;return{counts:g,total:n.length,sprites:0,animals:n.map(m=>({...m.snapshot(),id:m.id,region:m.region,visible:m.root.visible}))}}function d(g){let m=t.value;u(g);let v=f();return u(m),v}function p(g,m,v=0){let y=n.find(_=>_.region===g&&_.kind===m&&_.id===v);if(!y)throw new Error("\u672A\u627E\u5230\u533A\u57DF\u751F\u7269");return y.root.visible=!0,y.root.position.clone()}function x(){let g=t.value,m=new Bs,v=new ct,y=n.map(_=>({region:_.region,kind:_.kind,id:_.id,radiusLimit:_.radius,maxActualRadius:0,maxAboveFloor:0,vertexSamples:0}));for(let _ of[0,.8,1.7,3.2,6.4,9.6])u(_),i.updateMatrixWorld(!0),n.forEach((T,E)=>{let C=y[E];v.copy(T.root.matrixWorld).invert(),T.root.traverse(P=>{if(!P.isMesh)return;let b=P.geometry.attributes.position;for(let M=0;M<b.count;M++){if(m.fromBufferAttribute(b,M),P.userData.alienMembrane){let R=.36*Math.pow(Math.abs(m.z)/2.85,1.25);m.y+=(m.y<0?-1:1)*R}m.applyMatrix4(P.matrixWorld),C.maxAboveFloor=Math.max(C.maxAboveFloor,m.y-e.floor(m.x,m.z)),m.applyMatrix4(v),C.maxActualRadius=Math.max(C.maxActualRadius,m.length()),C.vertexSamples++}})});return u(g),i.updateMatrixWorld(!0),y}return u(0),{update:u,snapshot:f,at:d,focus:p,safety:()=>s,envelopes:x}}var Ft=(i,e,t)=>{let n=Lt.clamp((t-i)/(e-i),0,1);return n*n*(3-2*n)};function qf(i){let{x:e,y:t,z:n}=Xn(i),s=1-Ft(6,12,t),r=Ft(-74,-68,n)*Math.min(1,Ft(-22,-18,e)+Ft(-8,-4,n))*Math.min(1,1-Ft(3,6,e)+Ft(31,35,e)+Ft(8,12,n))*s,o=(1-Ft(-28,-22,e))*Ft(-78,-76,n)*(1-Ft(-12,-8,n))*s,a=Ft(23,27,e)*(1-Ft(50,60,e))*Ft(-130,-124,n)*(1-Ft(-78,-74,n))*(1-Ft(-6,1,t)),l=(1-Ft(18,23,e))*(1-Ft(-84,-80,n))*Ft(-154,-148,n)*(1-Ft(4,11,t)),c=(1-Ft(70,100,Math.abs(e)))*(1-Ft(36,65,n))*Ft(-175,-146,n);return[r,o,a,l].map(h=>h*c)}var Yf=`
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
`,zr=[{id:"entry",name:"\u73CA\u745A\u5165\u53E3",water:"#0b4553",near:34,far:132,lamp:55},{id:"kelp",name:"\u6D77\u8349\u6797",water:"#082f30",near:17,far:84,lamp:240},{id:"cave",name:"\u53D1\u5149\u6D1E\u7A9F",water:"#081725",near:7,far:53,lamp:330},{id:"customs",name:"\u8FB9\u754C\u6D77\u5173",water:"#09283d",near:24,far:108,lamp:210}];var lu=D,Hy=Lt.clamp,jo=(i,e,t)=>{let n=Hy((t-i)/(e-i),0,1);return n*n*(3-2*n)};function ky(i){return i=Xn(i),jo(6,9,i.x)*(1-jo(28,31,i.x))*jo(-74,-73,i.z)*(1-jo(-34,-26,i.z))*(1-jo(-14,-5,i.y))}var Vy=`
varying vec3 vDeepWorld;
vec3 deepLocal(vec3 p){p.x=mod(p.x+110.,220.)-110.;p.z=mod(p.z+179.,260.)-179.;return p;}
float deepVolume(vec3 p){p.x=mod(p.x+110.,220.)-110.;p.z=mod(p.z+179.,260.)-179.;return smoothstep(6.,9.,p.x)*(1.-smoothstep(28.,31.,p.x))*smoothstep(-74.,-73.,p.z)*(1.-smoothstep(-34.,-26.,p.z))*(1.-smoothstep(-14.,-5.,p.y));}
float deepHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
float deepNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(deepHash(i),deepHash(i+vec3(1,0,0)),f.x),mix(deepHash(i+vec3(0,1,0)),deepHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(deepHash(i+vec3(0,0,1)),deepHash(i+vec3(1,0,1)),f.x),mix(deepHash(i+vec3(0,1,1)),deepHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
`;function Zf(i,e,{floor:t,rocks:n,objects:s,pod:r}){let o={view:{value:0},lampOrigin:{value:new lu},lampDirection:{value:new lu(0,0,-1)},time:{value:0}},a=new it;a.name="deep-sea-local-v7",i.add(a);let l=i.background.clone(),c=new Fe("#031923"),h=new Oo("#d3eee8",0,66,.48,.68,1.8);h.name="deep-sea-real-headlight",h.castShadow=!0,h.shadow.mapSize.set(1024,1024),h.shadow.camera.near=.4,h.shadow.camera.far=66,h.shadow.bias=-15e-5,h.shadow.normalBias=.035,i.add(h,h.target),e.shadowMap.enabled=!0,e.shadowMap.type=ml;let u=[],f=new Set,d=0,p;function x(W,ge=0,ze=!1,L=!1){if(f.has(W))return;f.add(W);let te=W.onBeforeCompile,ne=W.customProgramCacheKey();W.onBeforeCompile=(q,K)=>{te?.call(W,q,K),q.vertexShader=q.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vDeepWorld;`).replace("#include <project_vertex>",`vec4 deepPos=vec4(transformed,1.);
#ifdef USE_INSTANCING
deepPos=instanceMatrix*deepPos;
#endif
vDeepWorld=(modelMatrix*deepPos).xyz;
#include <project_vertex>`),q.fragmentShader=q.fragmentShader.replace("#include <common>",`#include <common>
`+Vy+Yf),q.fragmentShader=q.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
float deepAmount=deepVolume(vDeepWorld);
${ze?"float fishFade=deepVolume(vec3(vDeepWorld.x,min(vDeepWorld.y,-14.),vDeepWorld.z));if(deepHash(vec3(floor(gl_FragCoord.xy),0.))<fishFade)discard;":""}
${ge?`float deepGrain=deepNoise(deepTextureWorld*3.8)*.65+deepNoise(deepTextureWorld*19.)*.35;float strata=deepNoise(deepTextureWorld*vec3(.65,2.8,.65))+.12*sin(vDeepWorld.y*12.+deepNoise(deepTextureWorld*.9)*9.);float cracks=pow(max(0.,deepNoise(deepTextureWorld*vec3(2.1,.35,2.1))-.58)*3.,3.);vec3 deepTint=${ge===1?"mix(vec3(.17,.23,.25),vec3(.265,.295,.28),smoothstep(.30,.78,strata))":"vec3(.25,.29,.275)"};diffuseColor.rgb=mix(diffuseColor.rgb,deepTint*(.67+deepGrain*.66)*(1.-cracks*.18),deepAmount*.86);`:""}`),q.fragmentShader=q.fragmentShader.replace("float deepAmount=deepVolume(vDeepWorld);",`float deepAmount=deepVolume(vDeepWorld);
vec3 deepTextureWorld=deepLocal(vDeepWorld);
vec4 oceanW=oceanVolume(vDeepWorld);
float oceanAmount=dot(oceanW,vec4(1.));
${ge===1?"float seaGrain=deepNoise(deepTextureWorld*4.8)*.65+deepNoise(deepTextureWorld*21.)*.35;float seaLayers=deepNoise(deepTextureWorld*vec3(.5,3.,.5));vec3 seaStone=oceanW.x*mix(vec3(.30,.35,.32),vec3(.40,.39,.31),seaLayers)+oceanW.y*mix(vec3(.14,.21,.19),vec3(.26,.29,.22),seaLayers)+oceanW.z*mix(vec3(.12,.16,.21),vec3(.22,.25,.30),seaLayers)+oceanW.w*mix(vec3(.18,.24,.28),vec3(.29,.31,.30),seaLayers);diffuseColor.rgb=mix(diffuseColor.rgb,seaStone/max(oceanAmount,.001)*(.76+seaGrain*.44),oceanAmount*.78);":""}
${ge===3?"diffuseColor.rgb*=vec3(1.)+oceanW.x*vec3(.10,.06,-.015)+oceanW.y*vec3(-.12,.14,.01)+oceanW.z*vec3(-.1,-.02,.20);":""}
${ge===4?"float gateGrain=deepNoise(deepTextureWorld*12.);diffuseColor.rgb=mix(diffuseColor.rgb,mix(vec3(.24,.30,.34),vec3(.36,.39,.36),gateGrain),oceanW.w*.67*(1.-step(.2,metalness)));":""}`),ze&&(q.fragmentShader=q.fragmentShader.replace("if(deepHash(vec3(floor(gl_FragCoord.xy),0.))<fishFade)discard;","fishFade=max(fishFade,dot(oceanVolume(vec3(vDeepWorld.x,min(vDeepWorld.y,-14.),vDeepWorld.z)),vec4(0.,1.,1.,1.)));if(deepHash(vec3(floor(gl_FragCoord.xy),0.))<fishFade)discard;"));let ue=Ke.lights_fragment_begin.replace("getDirectionalLightInfo( directionalLight, directLight );",`getDirectionalLightInfo( directionalLight, directLight );
directLight.color*=mix(vec3(1.),vec3(.055,.09,.115),deepAmount)*oceanSolar(oceanW);`).replace("getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal )","getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal )*mix(vec3(1.),vec3(.09,.145,.18),deepAmount)*oceanAmbient(oceanW)");q.fragmentShader=q.fragmentShader.replace("#include <lights_fragment_begin>",ue),L||(q.fragmentShader=q.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance*=1.-deepAmount*.74;`)),ge&&(q.fragmentShader=q.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(roughnessFactor,.91,deepAmount);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
float rockRelief=deepNoise(deepTextureWorld*5.)+.3*deepNoise(deepTextureWorld*24.);vec3 rockDx=normalize(dFdx(-vViewPosition));vec3 rockDy=normalize(dFdy(-vViewPosition));normal=normalize(normal-deepAmount*.22*(dFdx(rockRelief)*rockDx+dFdy(rockRelief)*rockDy));`)),q.fragmentShader=q.fragmentShader.replace("*caustic*(1.-smoothstep(","*caustic*(1.-deepAmount)*(1.-oceanW.z-oceanW.y*.6-oceanW.w*.5)*(1.-smoothstep("),q.fragmentShader=q.fragmentShader.replace("caveShade*.87);","caveShade*.87*(1.-oceanVolume(seaWorld).z));")},W.customProgramCacheKey=()=>`deep-sea-v11-${ge}-${ze}-${L}-${ne}-${te.toString()}`,W.needsUpdate=!0}i.updateMatrixWorld(!0),i.traverse(W=>{let ge=W;for(;ge;){if(ge===r||ge===a)return;ge=ge.parent}if(W.isMesh&&W.material?.isMeshBasicMaterial&&!W.material.fog&&u.push({mat:W.material,color:W.material.color.clone()}),!W.isMesh)return;let ze=Array.isArray(W.material)?W.material:[W.material],L=!!W.userData.loopTerrain||W.geometry?.type==="PlaneGeometry"&&W.geometry.parameters.width===220,te=W.geometry?.type==="SphereGeometry"&&W.geometry.parameters.widthSegments===24&&W.geometry.parameters.heightSegments===18&&W.parent===i,ne=!1;for(let F=W.parent;F&&F!==i;F=F.parent)F.position.x===18&&F.position.z===-54&&(ne=!0);let q=W.geometry?.type==="TorusGeometry"&&W.geometry.parameters.radius===11,K=!1;for(let F=W.parent;F&&F!==i;F=F.parent)F.position.z===-143&&(K=!0);let ue=W.isInstancedMesh&&["PlaneGeometry","CylinderGeometry"].includes(W.geometry?.type),ee=L||te||q?1:ne?2:K?4:ue?3:0;for(let F of ze)F?.isMeshStandardMaterial&&x(F,ee,W.name.startsWith("marine-fish-"));if((te||ne||q||K)&&(W.castShadow=!0,W.receiveShadow=!0,d++),L){p=W,W.castShadow=!0,W.receiveShadow=!0;for(let F of ze)F.shadowSide=rt}});let g=Of(a,{floor:t,rocks:n,objects:s}),m=new it;m.name="four-region-alien-life",a.add(m);let v=Xf(m,{floor:t,rocks:n,objects:s});a.traverse(W=>{W.isMesh&&(x(W.material,0,!1,!0),W.castShadow=!0,W.receiveShadow=!0)});let y=[];i.traverse(W=>{W.isPointLight&&W.parent===i&&W.position.x===36&&y.push(W)}),y.forEach((W,ge)=>{W.color.set(["#79cdd1","#a798dd","#dca1bc"][ge%3]),W.intensity=[22,18,20][ge%3]});for(let[W,ge]of[[-13.4,"#e5c187"],[-.6,"#d5b875"]]){let ze=new xi(ge,30,22,2);ze.position.set(W,5.9,-138.5),ze.name="customs-warm-beacon",i.add(ze)}let _=[];function T(){_.length=0,i.updateMatrixWorld(!0),i.traverse(W=>{W.isMesh&&W.castShadow&&W!==p&&(W.isInstancedMesh?W.computeBoundingSphere():W.geometry.boundingSphere||W.geometry.computeBoundingSphere(),_.push(W))})}T();let E=new Ln;function C(W){return E.copy(W.isInstancedMesh?W.boundingSphere:W.geometry.boundingSphere).applyMatrix4(W.matrixWorld),E.radius+=.5*W.matrixWorld.getMaxScaleOnAxis(),E}function P(){i.updateMatrixWorld(!0);for(let W of _){let ge=C(W);W.castShadow=ge.center.distanceTo(h.position)-ge.radius<h.distance}}function b(){return i.updateMatrixWorld(!0),_.map(W=>{let ge=C(W);return{name:W.name,center:ge.center.toArray(),radius:ge.radius,range:h.distance,distance:ge.center.distanceTo(h.position),casts:W.castShadow}})}let M=new wt({color:"#39464a",roughness:.98});x(M,1);let R=new ws(1,1),I=new pt,U=[];for(let W=0;W<80;W++){let ge=10+W*7.137%16,ze=-33-W*11.731%39,L=t(ge,ze);s.some(te=>Math.hypot(ge-te.position.x,ze-te.position.z)<2.4)||n.some(te=>((ge-te.x)/(te.rx+.8))**2+((L+.3-te.y)/(te.ry+.5))**2+((ze-te.z)/(te.rz+.8))**2<1)||U.push({x:ge,y:L,z:ze})}let B=new En(R,M,U.length);B.name="deep-sea-low-sediment",U.forEach((W,ge)=>{I.position.set(W.x,W.y+.08,W.z),I.rotation.set(0,ge*1.7,0),I.scale.set(.3+ge%3*.18,.15,.35+ge%4*.12),I.updateMatrix(),B.setMatrixAt(ge,I.matrix)}),a.add(B),B.receiveShadow=!0;let N=360,H=new Float32Array(N*3),$=new st;$.setAttribute("position",new Mt(H,3));let V=new sn({transparent:!0,depthWrite:!1,uniforms:{uLampOrigin:o.lampOrigin,uLampDirection:o.lampDirection,uView:o.view,uPixelRatio:{value:e.getPixelRatio()}},vertexShader:"uniform vec3 uLampOrigin,uLampDirection;uniform float uView,uPixelRatio;varying float dustAlpha;void main(){vec3 delta=(modelMatrix*vec4(position,1.)).xyz-uLampOrigin;float d=length(delta);float angle=dot(normalize(delta),uLampDirection);dustAlpha=(.06+.52*smoothstep(.875,.965,angle)*exp(-d*.035))*uView;vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(85.*uPixelRatio/max(1.,-p.z),1.,9.*uPixelRatio);}",fragmentShader:"varying float dustAlpha;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;gl_FragColor=vec4(.63,.78,.76,pow(1.-r,2.)*dustAlpha);}"}),oe=new Ui($,V);oe.name="deep-sea-suspended-sediment",oe.frustumCulled=!1,a.add(oe);let ce=zr.map(W=>new Fe(W.water)),xe=new Fe,_e=0,Ze=0,nt=null,qe=[0,0,0,0],j=0,ae=0;function Te({player:W,heading:ge,time:ze,inspection:L=!1,camera:te=null}){Ze=ze,o.time.value=ze,_e=ky(W),qe=qf(W),j=_e+qe.reduce((ee,F)=>ee+F,0),o.view.value=j,i.background.copy(l).multiplyScalar(1-j).add(xe.copy(c).multiplyScalar(_e)),i.fog.near=42+-33*_e,i.fog.far=155+-94*_e,qe.forEach((ee,F)=>{i.background.add(xe.copy(ce[F]).multiplyScalar(ee)),i.fog.near+=(zr[F].near-42)*ee,i.fog.far+=(zr[F].far-155)*ee}),i.fog.color.copy(i.background);let ne=_e*.965+qe[0]*.17+qe[1]*.53+qe[2]*.965+qe[3]*.77;for(let ee of u)ee.mat.color.copy(ee.color).multiplyScalar(1-ne);let q=o.lampDirection.value.set(Math.sin(ge),-.095,-Math.cos(ge)).normalize();o.lampOrigin.value.copy(W).add(new lu(Math.sin(ge),2.02,-Math.cos(ge))),h.position.copy(o.lampOrigin.value),h.target.position.copy(h.position).addScaledVector(q,45),ae=_e*360+qe.reduce((ee,F,Q)=>ee+F*zr[Q].lamp,0),h.intensity=nt===!1?0:ae,h.visible=ae>0,h.shadow.autoUpdate=ae>0,g.update(ze),v.update(ze,null,i.fog.far);let K=$.attributes.position,ue=[[-58,92,-8,44],[-60,38,-78,66],[25,26,-124,46],[-35,55,-150,66]][qe.indexOf(Math.max(...qe))];for(let ee=0;ee<N;ee++){let F=_e>0?9+ee*8.713%18:ue[0]+ee*8.713%ue[1],Q=_e>0?-31-ee*9.719%42:ue[2]+ee*9.719%ue[3],ie=Math.max(t(F,Q)+.8,_e>0?-25+ee*5.831%18:t(F,Q)+1+ee*5.831%22);K.setXYZ(ee,F+Math.sin(ze*.07+ee)*.13,ie+Math.sin(ze*.11+ee*.3)*.1,Q+Math.cos(ze*.08+ee)*.12)}K.needsUpdate=!0,oe.visible=j>0}function Be(){return{regionalWeights:Object.fromEntries(zr.map((W,ge)=>[W.id,qe[ge]])),regionalLife:v.snapshot(),totalWeight:j,caveLights:y.map(W=>({color:W.color.getHexString(),intensity:W.intensity})),volume:{x:[6,31],z:[-74,-26],depthTransition:[-14,-5]},terrainShadow:{casts:!!p?.castShadow,receives:!!p?.receiveShadow,doubleSided:p?.material.shadowSide===rt},weight:_e,water:{color:i.background.getHexString(),near:i.fog.near,far:i.fog.far},headlight:{type:h.type,intensity:h.intensity,visible:h.visible,independentOfPod:!0,position:h.position.toArray(),target:h.target.position.toArray(),direction:o.lampDirection.value.toArray(),castsShadow:h.castShadow,shadowMapSize:h.shadow.mapSize.toArray()},styleMeshes:d,patchedMaterials:f.size,sedimentLedges:U.length,aliens:g.snapshot(),time:Ze}}return{update:Te,updateShadows:P,snapshot:Be,trackShadows:T,shadowBounds:b,at:g.at,focus:g.focus,safety:g.safety,envelopes:g.envelopes,oceanAt:v.at,oceanFocus:v.focus,oceanSafety:v.safety,oceanEnvelopes:v.envelopes,lightTest(W){nt=W,h.intensity=W?ae:0},meshes:()=>{let W=[];return a.traverse(ge=>{ge.isMesh&&W.push({name:ge.name,type:ge.type,isInstanced:!!ge.isInstancedMesh})}),W}}}var Zt=D,Qo=(i,e,t)=>{let n=Lt.clamp((t-i)/(e-i),0,1);return n*n*(3-2*n)},Fn={ship:{x:60,z:17,yaw:-.58},low:{x:20,y:12,z:35,h:1.1},high:{x:53,y:80,z:14,h:.58},close:{x:37,y:7,z:25,h:1.22}};function Gy(i){let e=Xn(i);return(1-Qo(60,95,Math.abs(fn(e.x-65,220))))*(1-Qo(65,95,Math.abs(fn(e.z+5,260))))}var Wy=`
float clearSeaWeight(vec3 p){float dx=abs(mod(p.x-65.+110.,220.)-110.);float dz=abs(mod(p.z+5.+130.,260.)-130.);return (1.-smoothstep(60.,95.,dx))*(1.-smoothstep(65.,95.,dz));}
vec3 clearLocal(vec3 p){p.x=mod(p.x+110.,220.)-110.;p.z=mod(p.z+179.,260.)-179.;return p;}
`;function $f(i,{floor:e,rocks:t}){let n=new it;n.name="clear-sea-sample-landmarks",i.add(n);let s={value:0},r={value:42},o={value:155},a={value:0},l=new Set,c=new Set,h=[],u=document.createElement("canvas");u.width=512,u.height=512;let f=u.getContext("2d");f.fillStyle="#9caaa0",f.fillRect(0,0,512,512);let d=56377,p=()=>(d=Math.imul(d,1664525)+1013904223>>>0,d/4294967296);for(let F=0;F<16e3;F++){let Q=p()*512,ie=p()*512;f.fillStyle=F%3?"rgba(36,57,53,.12)":"rgba(203,170,105,.2)",f.fillRect(Q,ie,.5+p()*4,.6+p()*7)}for(let F=0;F<16;F++){f.fillStyle="#273c3c40",f.fillRect(0,F*32,512,1);for(let Q=0;Q<20;Q++)f.fillStyle="#b9b39d6a",f.beginPath(),f.arc(Q*26+4,F*32+5,1.25,0,6.29),f.fill()}let x=new xn(u);x.colorSpace=Tt,x.wrapS=x.wrapT=jn,x.anisotropy=4;let g=(F,Q={})=>new wt({color:F,roughness:.85,...Q}),m=g("#91afa4",{map:x,metalness:.12,emissive:"#335c57",emissiveIntensity:.12}),v=g("#b4a27b",{map:x,metalness:.16}),y=g("#506761",{map:x,metalness:.16}),_=g("#baa377",{metalness:.28,roughness:.6}),T=g("#7eb6b2",{emissive:"#40c3c2",emissiveIntensity:.45,metalness:.18,roughness:.32}),E=(F,Q,ie,w=0,S=0,O=0)=>{let X=new tt(Q,ie);return X.position.set(w,S,O),F.add(X),X},C=(F,Q,ie,w,S)=>{let O=ie.clone().sub(Q),X=E(F,new zt(w,w,O.length(),10),S);return X.position.copy(Q).add(ie).multiplyScalar(.5),X.quaternion.setFromUnitVectors(new Zt(0,1,0),O.normalize()),X},P=new it;P.name="first-level-inspired-steamer",P.position.set(Fn.ship.x,e(Fn.ship.x,Fn.ship.z)+1.3,Fn.ship.z),P.rotation.set(0,Fn.ship.yaw,.065),n.add(P);let b=36,M=32,R=[],I=[],U=[];for(let F=0;F<=b;F++){let Q=-23+F*46/b,ie=F/b,w=.55+6.4*Math.pow(Math.sin(Math.PI*ie),.65);for(let S=0;S<=M;S++){let O=Math.PI*2*S/M,X=Math.sin(O)*w,se=4.5+Math.cos(O)*4.5;R.push(X,se,Q),I.push(S/M*3,F/b*5)}}for(let F=0;F<b;F++)for(let Q=0;Q<M;Q++){let ie=F*(M+1)+Q,w=ie+M+1;U.push(ie,w,ie+1,ie+1,w,w+1)}for(let F of[0,b]){let Q=R.length/3;R.push(0,4.5,-23+F*46/b),I.push(.5,.5);for(let ie=0;ie<M;ie++){let w=F*(M+1)+ie;F===0?U.push(Q,w,w+1):U.push(Q,w+1,w)}}let B=new st;B.setAttribute("position",new He(R,3)),B.setAttribute("uv",new He(I,2)),B.setIndex(U),B.computeVertexNormals(),E(P,B,m);let N=new Ni;for(let F=0;F<=36;F++){let Q=F/36,ie=-23+Q*46,w=.55+6.4*Math.pow(Math.sin(Math.PI*Q),.65);F?N.lineTo(w,ie):N.moveTo(w,ie)}for(let F=36;F>=0;F--){let Q=F/36;N.lineTo(-(.55+6.4*Math.pow(Math.sin(Math.PI*Q),.65)),-23+Q*46)}N.closePath();let H=new Uo(N,24);H.rotateX(-Math.PI/2),E(P,H,v,0,9.08,0),E(P,new Ot(8.9,5,13),m,0,11.2,-5.5),E(P,new Ot(10,.55,14),v,0,13.9,-5.5),E(P,new zt(1.52,1.78,9.5,24),m,0,18.4,-9),E(P,new Et(1.58,.15,8,32),_,0,23.2,-9).rotation.x=Math.PI/2;let $=E(P,new zt(1.45,1.45,.22,24),y,0,23.26,-9),V=[];for(let F of[-1,1]){for(let ie=0;ie<8;ie++){let w=-17+ie*4.6,S=(w+23)/46,O=.55+6.4*Math.pow(Math.sin(Math.PI*S),.65),X=F*O*.94,se=E(P,new Et(.67,.13,10,32),_,X,5.8,w);se.rotation.y=F*Math.PI/2;let Y=E(P,new Gn(.54,24),T,X+F*.035,5.8,w);Y.rotation.y=F*Math.PI/2,V.push(Y)}for(let ie=0;ie<4;ie++){let w=-10+ie*3.2,S=E(P,new Et(.64,.11,8,28),_,F*4.49,11.4,w);S.rotation.y=F*Math.PI/2;let O=E(P,new Gn(.53,24),T,F*4.51,11.4,w);O.rotation.y=F*Math.PI/2}let Q=[];for(let ie=0;ie<25;ie++){let w=.08+ie*.84/24,S=-23+w*46,O=.55+6.4*Math.pow(Math.sin(Math.PI*w),.65);Q.push(new Zt(F*O,10.1,S)),ie%2===0&&C(P,new Zt(F*O,8.8,S),new Zt(F*O,10.1,S),.07,_)}E(P,new wn(new _n(Q),48,.075,6,!1),_)}let oe=new Zt(0,8.8,9),ce=new Zt(2,25.5,5);C(P,oe,ce,.17,v),C(P,new Zt(-5.5,22,5.9),new Zt(7,21.2,5.5),.12,v);for(let F of[new Zt(-5.5,22,5.9),new Zt(7,21.2,5.5)])C(P,new Zt(0,9,17),F,.022,y);let xe=E(P,new Et(1.15,.15,8,24,Math.PI),_,0,8.9,21);xe.rotation.x=Math.PI/2;let _e=["#bca1aa","#b8b397","#75a6a0"].map(F=>g(F,{emissive:F,emissiveIntensity:.03}));for(let F=0;F<72;F++){let Q=-20+p()*40,ie=.55+6.4*Math.pow(Math.sin(Math.PI*(Q+23)/46),.65),w=(p()>.5?1:-1)*ie*.92,S=.5+p()*1.1,O=new Zt(w,8.8,Q);for(let X=0;X<3;X++)C(P,O,new Zt(w+(p()-.5)*.85,8.8+S,Q+(p()-.5)*.8),.075,_e[F%3])}P.updateMatrixWorld(!0);let Ze=new Zt,nt=new Zt,qe=new Kt;P.matrixWorld.decompose(Ze,qe,nt);let j=(F,Q,ie,w)=>{let S=F.clone().applyMatrix4(P.matrixWorld),O=Math.cos(Fn.ship.yaw),X=Math.sin(Fn.ship.yaw);t.push({x:S.x,y:S.y,z:S.z,rx:Math.sqrt(Q*Q*O*O+w*w*X*X)+.35,ry:ie+.6,rz:Math.sqrt(Q*Q*X*X+w*w*O*O)+.35,structure:"sample-steamer"})};for(let F=0;F<12;F++){let Q=-21+F*42/11,ie=.55+6.4*Math.pow(Math.sin(Math.PI*(Q+23)/46),.65);j(new Zt(0,4.5,Q),ie,4.5,2.5)}j(new Zt(0,11.5,-5.5),4.8,3.2,7.2),j(new Zt(0,18.4,-9),1.8,5.2,1.8),h.push({name:"\u767E\u5E74\u84B8\u6C7D\u6C89\u8239",position:P.position.toArray(),windows:V.length,source:"First-level deep-bg3-wreck-canyon-v1-2560.webp: teal riveted hull, round portholes, tall funnel, tilted vessel, coral growth."});let ae=g("#8a9e94",{map:x,emissive:"#2b5157",emissiveIntensity:.07});for(let[F,Q,ie,w,S]of[[91,-47,8,23,7],[77,-47,6,19,6],[98,-31,5,24,5]]){let O=e(F,Q),X=new et(1,24,18),se=X.attributes.position;for(let Ae=0;Ae<se.count;Ae++){let fe=se.getX(Ae),Re=se.getY(Ae),Ie=se.getZ(Ae),he=.9+.12*Math.sin(Re*10+fe*4+Ie*3)+.04*Math.sin(fe*14+Re*6)*Math.cos(Ie*11-Re*5);se.setXYZ(Ae,fe*he+.12*Math.sin(Re*4),Re*he,Ie*he+.08*Math.cos(Re*5))}X.computeVertexNormals();let Y=E(n,X,ae,F,O+w*.83,Q);Y.scale.set(ie,w,S),t.push({x:F,y:Y.position.y,z:Q,rx:ie*1.22,ry:w*1.09,rz:S*1.18,structure:"sample-high-rock"}),h.push({name:"\u9AD8\u7901\u77F3\u67F1",position:Y.position.toArray(),top:Y.position.y+w})}let Te=e(85,-35)+1.5;for(let F of[79,91]){let Q=[];for(let w=0;w<=32;w++){let S=Math.PI*w/32;Q.push(new Zt(F+Math.cos(S)*6,Te+Math.sin(S)*10,-35))}let ie=E(n,new wn(new _n(Q),48,1.1,10,!1),ae);for(let w=0;w<Q.length;w+=2){let S=Q[w];t.push({x:S.x,y:S.y,z:S.z,rx:1.2,ry:1.2,rz:1.2,structure:"sample-arch"})}}let Be={uTime:s,uNear:r,uFar:o,uClearFog:a},W=new sn({transparent:!0,depthWrite:!1,depthTest:!0,side:rt,blending:ni,uniforms:Be,vertexShader:"uniform float uClearFog;varying vec2 vUv;varying vec3 vWorld;varying float vDepth;void main(){vUv=uv;vec4 p=instanceMatrix*vec4(position,1.);vWorld=(modelMatrix*p).xyz;vec4 eye=modelViewMatrix*p;vDepth=mix(-eye.z,length(eye.xyz),uClearFog);gl_Position=projectionMatrix*eye;}",fragmentShader:"uniform float uTime,uNear,uFar;varying vec2 vUv;varying vec3 vWorld;varying float vDepth;void main(){float edge=exp(-pow((vUv.x-.5)*4.8,2.));float height=smoothstep(0.,.15,vUv.y)*(1.-smoothstep(.85,1.,vUv.y));float streak=.65+.35*sin(vUv.x*31.+vUv.y*2.+uTime*.18);float fog=1.-smoothstep(uNear,uFar,vDepth);float a=.025*edge*height*streak*fog;gl_FragColor=vec4(.55,.77,.65,a);}"}),ge=new rn(1,1),ze=new En(ge,W,16),L=new pt;ze.name="sample-sunlight-shafts";let te=0;for(let F=0;F<8;F++){let Q=36+F%4*19,ie=-48+Math.floor(F/4)*61;for(let w of[0,Math.PI/2])L.position.set(Q,72,ie),L.rotation.set(-.1,w,.17),L.scale.set(8+F%3*3,110,1),L.updateMatrix(),ze.setMatrixAt(te++,L.matrix)}ze.computeBoundingSphere(),i.add(ze);function ne(F){if(l.has(F))return;l.add(F);let Q=F.onBeforeCompile,ie=F.customProgramCacheKey();F.onBeforeCompile=(w,S)=>{Q?.call(F,w,S),w.uniforms.uClearTime=s,w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vClearWorld;`).replace("#include <project_vertex>",`vec4 clearPos=vec4(transformed,1.);
#ifdef USE_INSTANCING
clearPos=instanceMatrix*clearPos;
#endif
vClearWorld=(modelMatrix*clearPos).xyz;
#include <project_vertex>`),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
uniform float uClearTime;varying vec3 vClearWorld;
`+Wy),w.fragmentShader=w.fragmentShader.replace("#include <opaque_fragment>",`vec3 cp=clearLocal(vClearWorld);float clearArea=clearSeaWeight(cp);float sunlight=clearArea*smoothstep(-5.,8.,cp.y);float u=cp.x+cp.y*.18,v=cp.z-cp.y*.12;float a=sin(u*1.51367646+sin(v*.894145602+uClearTime*.24)*1.5),b=sin(v*1.691626814+sin(u*.79967813-uClearTime*.19)*1.6);float lightWeb=pow(max(0.,1.-abs(a+b)*.82),7.);outgoingLight+=vec3(.018,.032,.022)*lightWeb*sunlight;
#include <opaque_fragment>`)},F.customProgramCacheKey=()=>`clear-sector-v11-${ie}-${Q.toString()}`,F.needsUpdate=!0}function q(F){i.traverse(Q=>{if(!Q.isMesh)return;for(let w=Q;w;w=w.parent)if(w===F)return;let ie=Array.isArray(Q.material)?Q.material:[Q.material];for(let w of ie)w?.isMeshStandardMaterial&&!w.transparent&&ne(w)})}function K(F){i.traverse(Q=>{if(Q.material){for(let ie=Q;ie;ie=ie.parent)if(ie===F)return;for(let ie of Array.isArray(Q.material)?Q.material:[Q.material]){if(!ie?.fog||c.has(ie))continue;c.add(ie);let w=ie.onBeforeCompile,S=ie.customProgramCacheKey();ie.onBeforeCompile=(O,X)=>{w?.call(ie,O,X),O.uniforms.uClearFog=a,O.vertexShader=O.vertexShader.replace("#include <common>",`#include <common>
uniform float uClearFog;`).replace("#include <fog_vertex>",`#ifdef USE_FOG
vFogDepth=mix(-mvPosition.z,length(mvPosition.xyz),uClearFog);
#endif`)},ie.customProgramCacheKey=()=>`clear-radial-fog-v11-${S}-${w.toString()}`,ie.needsUpdate=!0}}})}let ue={weight:0,near:42,far:155,radialFog:0};function ee({player:F,camera:Q,time:ie}){s.value=ie;let w=Gy(F),S=Qo(12,90,F.y),O=Lt.lerp(70,105,S),X=Lt.lerp(180,185,S),se=1-Qo(-6,2,-F.y),Y=w*se;a.value=Qo(0,.05,Y);let Ae=new Fe("#24616a");i.background.lerp(Ae,Y*.62),i.fog.color.copy(i.background),i.fog.near=Lt.lerp(i.fog.near,O,Y),i.fog.far=Lt.lerp(i.fog.far,X,Y);let fe=Math.min(330-Math.abs(Q.position.x),Q.position.z+439,341-Q.position.z)-12;i.fog.far=Math.min(i.fog.far,fe),i.fog.near=Math.min(i.fog.near,i.fog.far-20),r.value=i.fog.near,o.value=i.fog.far,ue={weight:Y,near:i.fog.near,far:i.fog.far,radialFog:a.value}}return{patchScene:q,patchFog:K,update:ee,snapshot(){return{scope:"One clear-water high-reef / steamer sector",...ue,landmarks:h,rays:16,geometry:!0}}}}var Me=i=>document.getElementById(i),hu=window.__SEA_ASSETS,Xy=new URLSearchParams(location.search).has("test"),pn=matchMedia("(prefers-reduced-motion: reduce)").matches,xu=new URLSearchParams(location.search).get("level")==="0"?0:1,_u=matchMedia("(pointer: coarse)").matches,np=_u?1.25:2,uu=_u?2:4,Ws=new Set,Xr=new Map,Pe=D,us=Lt.clamp,at=new bs;at.background=new Fe("#073747");at.fog=new yo("#073747",42,155);var We=new Vt(57,innerWidth/innerHeight,.2,420),sa={pearl:50,shell:20},qi={pearl:20,shell:12},Wr=!1,du=!1,ip,$t=xu,yu=!1,ra=!1,Mc=!1,Cc=new Map,Ic=new Map,sp=0,xc={minX:-70,maxX:70,minZ:-134,maxZ:36},Tn={x:0,z:0,crossings:0},vu,Sc,bc=()=>new Pe(Tn.x*Nn.x,0,Tn.z*Nn.z);function qy(){let i=Math.floor((ve.x+110)/220),e=Math.floor((ve.z+179)/260);if(!i&&!e)return;let t=new Pe(i*220,0,e*260);ve.sub(t),We.position.sub(t),kr.sub(t),Vr.sub(t),Tn.x+=i,Tn.z+=e,Tn.crossings++}function rp(i,e,t){let n=Xn({x:i,y:e,z:t});Tn.x=Math.round((i-n.x)/220),Tn.z=Math.round((t-n.z)/260),ve.set(n.x,e,n.z)}var Hr=[{id:"entry",name:"\u73CA\u745A\u5165\u53E3",x:-14,z:17,color:"#adc9ae"},{id:"kelp",name:"\u6D77\u8349\u6797",x:-42,z:-31,color:"#8fc59d"},{id:"wreck",name:"\u6C89\u8239\u5CE1\u8C37",x:18,z:-53,color:"#d5bf92"},{id:"cave",name:"\u53D1\u5149\u6D1E\u7A9F",x:36,z:-102,color:"#92d5df"},{id:"customs",name:"\u8FB9\u754C\u6D77\u5173",x:-7,z:-128,color:"#e5d3a3"}],fu=new Set,ta=[],ls;function Yy(){let i=Vs.map(t=>({x:t.x,y:t.y,z:t.z,phase:t.phase,turtle:!!t.turtle})),e=ta.map(t=>t.group.position.clone());for(let t of Vs)at.remove(t.sprite),t.sprite.material.dispose();for(let t of ta)at.remove(t.group),t.group.traverse(n=>{n.isMesh&&(n.geometry.dispose(),n.material.dispose())});Vs.length=0,ta.length=0,ls=Uf(at,i,e,{floor:lt,rocks:Xt})}function oa(i){if(i=Xn(i),Math.abs(i.x)>70||i.z>36||i.z<-146){let e=ri.reduce((t,n)=>Math.hypot(fn(i.x-n.x,220),fn(i.z-n.z,260))<Math.hypot(fn(i.x-t.x,220),fn(i.z-t.z,260))?n:t,ri[0]);return{id:"high-sea",name:e.name,x:e.x,z:e.z,color:"#9ebed0"}}return i.x>23&&i.z<=-74?Hr[3]:i.z<-80?Hr[4]:i.x>6&&i.x<31&&i.z<8?Hr[2]:i.x<-22&&i.z<-8?Hr[1]:Hr[0]}function op(i){return i=Xn(i),i.x>26&&i.x<46&&i.z<-81&&i.z>-120&&i.y<-7}var Ut,Bn={},Ys=!1,Mn=!1,An=!1,tn=!1,an=!1,Wt=0,cs=0,Mi=0,Rt=0,oi=0,ap=0;Rt=oi=Fn.low.h;var ve=new Pe(Fn.low.x,Fn.low.y,Fn.low.z),li=new Pe,kr=new Pe,Vr=new Pe,bi="external",Hs,qn=!1,ks=!1,Qt,na,Zy=new Pe(0,.26,-.25),Xt=[];var On=[],Vs=[],ia=[],vc=[],hs={pearl:0,shell:0},Gt={kind:"",start:-1,duration:0,side:1,serial:0},dt,Gs,Ec;var lp=0,_c=0,Jf=0,wc=0,Tc=0,ai=!0,Dt,Xi,Gr,Ac,zs,yc,cp=0,Pc={value:0},cu=19243;function De(){return cu=Math.imul(cu,1664525)+1013904223>>>0,cu/4294967296}function lt(i,e){return zf(i,e)}function Kf(i){Me("errorMessage").textContent="\u8BF7\u7528\u652F\u6301 WebGL 2 \u7684 Chrome \u6216 Safari \u6253\u5F00\u5B8C\u6574 HTML \u6587\u4EF6\u3002"+(i?.message?"\uFF08"+i.message+"\uFF09":""),Me("error").hidden=!1,console.error(i)}function Ht(i,e={}){return new wt({color:i,roughness:.93,...e})}function Zs(i,e,t=0,n=0,s=0,r=null){let o=new tt(i,e);return o.position.set(t,n,s),r&&o.scale.set(...r),at.add(o),o}function Xs(i,e,t,n,s,r,o={}){let a=new Mo(new Mr({map:i,transparent:!0,alphaTest:.03,depthWrite:!1,...o}));return a.scale.set(e,t,1),a.position.set(n,s,r),at.add(a),a}function $y(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(206,252,218,.6)"),t.addColorStop(.22,"rgba(156,240,203,.32)"),t.addColorStop(1,"rgba(117,220,203,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new xn(i)}function Jy(){let i=document.createElement("canvas");i.width=i.height=512;let e=i.getContext("2d");e.fillStyle="#6c9b98",e.fillRect(0,0,512,512);for(let n=0;n<14e3;n++){let s=De()*512,r=De()*512,o=De()*1.7+.15;e.fillStyle=De()>.5?"rgba(32,73,78,.16)":"rgba(226,226,188,.18)",e.beginPath(),e.ellipse(s,r,o,o*.6,0,0,Math.PI*2),e.fill()}for(let n=0;n<30;n++){e.beginPath();for(let s=0;s<=512;s+=4){let r=n*19+5*Math.sin(s*.025+n*.6);s===0?e.moveTo(s,r):e.lineTo(s,r)}e.strokeStyle="#bdd3ba26",e.lineWidth=3,e.stroke()}let t=new xn(i);return t.colorSpace=Tt,t.wrapS=t.wrapT=jn,t.repeat.set(22,31),t.anisotropy=4,t}function Ky(){let i=new rn(220,260,220,260);i.rotateX(-Math.PI/2);let e=i.attributes.position;for(let o=0;o<e.count;o++){let a=e.getX(o),l=e.getZ(o)-49;e.setXYZ(o,a,lt(a,l),l)}i.computeVertexNormals();let t=new Float32Array(e.count*3),n=new Fe;for(let o=0;o<e.count;o++){let a=e.getY(o),l=us((a-6)/45,0,1);n.setRGB(1-l*.4,1-l*.49,1-l*.33),n.toArray(t,o*3)}i.setAttribute("color",new Mt(t,3));let s=Ht("#90b6a8",{map:Jy(),vertexColors:!0});s.onBeforeCompile=o=>{o.uniforms.uTime=Pc,o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 seaWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
seaWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 seaWorld; uniform float uTime;`).replace("#include <dithering_fragment>",`float wave1=sin(seaWorld.x*1.51367646+sin(seaWorld.z*.894145602+uTime*.3)*1.8); float wave2=sin(seaWorld.z*1.691626814+sin(seaWorld.x*.79967813-uTime*.24)*1.9); float caustic=pow(max(0.,1.-abs(wave1+wave2)*.8),10.); gl_FragColor.rgb+=vec3(.03,.048,.035)*caustic*(1.-smoothstep(2.,20.,seaWorld.y))*(1.-smoothstep(fogNear,fogFar,vFogDepth))*exp(-max(0.,-seaWorld.y-6.)*.08); float caveShade=(1.-smoothstep(11.,18.,abs(mod(seaWorld.x+110.,220.)-146.)))*(1.-smoothstep(17.,28.,abs(mod(seaWorld.z+179.,260.)-77.))); gl_FragColor.rgb*=mix(vec3(1.),vec3(.16,.34,.42),caveShade*.87);
#include <dithering_fragment>`)},Hf(at,i,s);let r=Zs(new rn(220,260),new nn({color:"#86cfc0",transparent:!0,opacity:.065,side:rt,depthWrite:!1}),0,Nn.surface,-49);r.rotation.x=-Math.PI/2}function Bt(i,e,t,n,s,r=null,o=!0){let a=new et(1,24,18),l=a.attributes.position;for(let u=0;u<l.count;u++){let f=l.getX(u),d=l.getY(u),p=l.getZ(u),x=1+.075*Math.sin(f*12+d*7)*Math.cos(p*9-d*5)+.035*Math.sin(p*19+f*9);l.setXYZ(u,f*x,d*x,p*x)}a.computeVertexNormals();let c=r===null?lt(i,e)+n*.38:r,h=Bn.rock.clone();h.needsUpdate=!0,h.wrapS=h.wrapT=jn,h.repeat.set(2,2),h.offset.set(De(),De()),Zs(a,Ht("#bbd1c7",{map:h,emissive:"#1e5558",emissiveIntensity:.16}),i,c,e,[t,n,s]),o&&Xt.push({x:i,y:c,z:e,rx:t*1.08,ry:n*1.08,rz:s*1.08})}function jy(){Bt(-7,1,7.8,8,6.5,-2.9),Bt(-10,-3,4.9,6,4.4,-2.8),Bt(-3,-1,4.1,4.2,4.9,-4.4),Bt(-26,-26,9,12,7.5,-1.8),Bt(-35,5,6.5,6,8,-4),Bt(34,-18,8,10,13,-3.2),Bt(34,14,7,6,8,-4.4),Bt(-32,-47,11,15,8,0),Bt(37,-51,9,12,9,-1.7),Bt(-60,-34,6.5,12,11,-1),Bt(-56,-61,10,15,9,0),Bt(-38,-84,9,15,12,-1),Bt(-43,-118,12,18,10,1),Bt(59,-65,8,12,12,-2),Bt(61,-116,8,16,13,-1);for(let i=0;i<6;i++){let e=-40-i*8;Bt(5,e,2.1,6,3.6,lt(5,e)-.2),Bt(30,e,2.1,6,3.5,lt(30,e)-.2)}for(let i=0;i<7;i++){let e=7-i*7;Bt(7.6,e,1.2+De()*1.1,2.6,2.8,lt(7.6,e)-.7),Bt(24.8,e,1.6+De(),3.3,3.1,lt(24.8,e)-.7)}for(let i=0;i<20;i++){let e=De()*92-46,t=De()*96-55;Math.abs(e-16)<8||Math.hypot(e+7,t-1)<11||Bt(e,t,.7+De()*1.8,.7+De()*1.6,.8+De()*2,null,!1)}}function aa(i,e,t){let n=new En(i,e,t.length),s=new pt;return t.forEach((r,o)=>{s.position.copy(r.position),s.quaternion.copy(r.quaternion||new Kt),s.scale.copy(r.scale),s.updateMatrix(),n.setMatrixAt(o,s.matrix)}),n.instanceMatrix.needsUpdate=!0,at.add(n),n}function hp(i){i.uniforms.uPodPosition={value:ve},i.uniforms.uEyePosition={value:We.position},i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 foliageWorld;`),i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`foliageWorld=(modelMatrix*instanceMatrix*vec4(transformed,1.)).xyz;
#include <project_vertex>`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 foliageWorld; uniform vec3 uPodPosition; uniform vec3 uEyePosition;`),i.fragmentShader=i.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
vec3 sight=uPodPosition-uEyePosition; float along=dot(foliageWorld-uEyePosition,sight)/max(dot(sight,sight),.001); float eyeDistance=distance(foliageWorld,uEyePosition+clamp(along,0.,1.)*sight); float reveal=(along>.02&&along<1.04)?smoothstep(1.9,3.2,eyeDistance):1.; diffuseColor.a*=reveal; if(diffuseColor.a<.015)discard;`)}function Qy(){let i=new rn(.62,1,2,8);i.translate(0,.5,0);let e=i.attributes.position;for(let r=0;r<e.count;r++){let o=e.getY(r);e.setX(r,e.getX(r)*(.3+Math.sin(o*Math.PI)*.8)+Math.sin(o*5)*.14),e.setZ(r,Math.sin(o*6)*.08)}i.computeVertexNormals();let t=[];for(let r=0;r<500;r++){let o=De()*136-68,a=De()*169-134;if(Math.abs(o+14)<7&&a>8||o>9&&o<23||Math.sin(o*.23+a*.13)<-.3)continue;let l=new Pe(o,lt(o,a)-.2,a),c=1.5+De()*6.5;for(let h=0;h<3;h++)t.push({position:l.clone().add(new Pe(h*.22,0,0)),scale:new Pe(.6+De()*.6,c*(.6+De()*.4),1),quaternion:new Kt().setFromAxisAngle(new Pe(0,1,0),De()*6.28)})}let n=Ht("#558b68",{side:rt,transparent:!0,depthWrite:!1});n.onBeforeCompile=r=>{r.uniforms.uTime=Pc,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.x+=sin(uTime*.65+instanceMatrix[3].x*.3+transformed.y*2.)*transformed.y*.13;`),hp(r)},aa(i,n,t);let s=["#9e8eaa","#bb9a7c","#7ba9a8","#aa879a"];for(let r of s){let o=[];for(let a=0;a<75;a++){let l=De()*134-67,c=De()*167-132;if(l>8&&l<27||l>24&&c<-79)continue;let h=new Pe(l,lt(l,c),c);for(let u=0;u<9;u++){let f=new Pe((De()-.5)*1.4,.7+De()*1.6,(De()-.5)*1.2),d=f.length(),p=h.clone().add(new Pe((De()-.5)*.7,De()*.3,(De()-.5)*.7));o.push({position:p.addScaledVector(f,.5),scale:new Pe(.09+De()*.1,d,.09+De()*.1),quaternion:new Kt().setFromUnitVectors(new Pe(0,1,0),f.normalize())})}}aa(new zt(.6,1,1,7),Ht(r,{emissive:r,emissiveIntensity:.025}),o)}for(let r=0;r<12;r++){let o=Zs(new zt(.07,.17,1.3+De(),7),Ht("#beabb5"),-9+De()*5,5+De()*.8,-1+De()*3);o.rotation.z=(De()-.5)*.5}}function ev(){let i=new rn(.95,1,3,12);i.translate(0,.5,0);let e=i.attributes.position;for(let s=0;s<e.count;s++){let r=e.getY(s);e.setX(s,e.getX(s)*(.18+.8*Math.sin(r*Math.PI))+Math.sin(r*7)*.2),e.setZ(s,Math.sin(r*5)*.13)}i.computeVertexNormals();let t=[];for(let s=0;s<180;s++){let r=-55+De()*29,o=-55+De()*47,a=-41+Math.sin((o+31)*.11)*4;if(Math.abs(r-a)<3.6||Math.hypot(r+34,o+28)<4)continue;let l=9+De()*13,c=new Pe(r,lt(r,o)-.12,o);for(let h=0;h<3;h++)t.push({position:c.clone().add(new Pe(h*.22,0,0)),scale:new Pe(.75+De()*.4,l*(.75+De()*.25),1),quaternion:new Kt().setFromAxisAngle(new Pe(0,1,0),h*1.05+De()*.7)})}let n=Ht("#598b62",{side:rt,transparent:!0,depthWrite:!1,emissive:"#123f32",emissiveIntensity:.14});n.onBeforeCompile=s=>{s.uniforms.uTime=Pc,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.x+=sin(uTime*.5+instanceMatrix[3].z*.17+transformed.y*3.)*transformed.y*.25;`),hp(s)},aa(i,n,t),tv(),nv();for(let[s,r,o]of[[-42,4,-28],[18,-12,-54],[35,-9,-79],[-9,3,-115]])for(let a=0;a<7;a++)Vs.push({sprite:Xs(null,1.1,.33,0,0,0),x:s+a*1.35,z:o+a*.6,y:r+a*.12,phase:a*.4});Vs.push({sprite:Xs(null,4.1,2.3,-46,6,-36),x:-46,z:-36,y:6,phase:2,turtle:!0});for(let s=0;s<8;s++){let r=new it;r.position.set(28+s*3,-7+s%3*1.8,-78-s%4*4),at.add(r);let o=new tt(new et(.65,18,10,0,Math.PI*2,0,Math.PI*.58),new wt({color:"#b2e8df",emissive:"#65bfae",emissiveIntensity:.35,transparent:!0,opacity:.52,roughness:.42,depthWrite:!1,side:rt}));r.add(o);for(let a=0;a<5;a++){let l=a*Math.PI*2/5,c=[];for(let h=0;h<7;h++)c.push(new Pe(Math.cos(l)*.34+Math.sin(h*.9+a)*.12,-h*.31,Math.sin(l)*.34));r.add(new tt(new wn(new _n(c),18,.018,5,!1),new nn({color:"#a5ddd1",transparent:!0,opacity:.43})))}ta.push({group:r,y:r.position.y,phase:s*.7})}}function tv(){let i=document.createElement("canvas");i.width=128,i.height=512;let e=i.getContext("2d");e.fillStyle="#807050",e.fillRect(0,0,128,512);for(let h=0;h<500;h++){let u=De()*128;e.strokeStyle=h%2?"#423f3138":"#c7ad7b27",e.beginPath(),e.moveTo(u,0);for(let f=0;f<512;f+=8)e.lineTo(u+Math.sin(f*.026+h)*2.6,f);e.stroke()}let t=new xn(i);t.colorSpace=Tt,t.wrapS=t.wrapT=jn;let n=Ht("#b2a078",{map:t,roughness:.92}),s=Ht("#56756c",{metalness:.45,roughness:.7}),r=new it;r.position.set(18,lt(18,-54)+2.8,-54),at.add(r);let o=r.position.y,a=(h,u,f=.16,d=n,p=!1)=>{let x=u.clone().sub(h),g=new tt(new zt(f,f,x.length(),8),d);if(g.position.copy(h).add(u).multiplyScalar(.5),g.quaternion.setFromUnitVectors(new Pe(0,1,0),x.normalize()),r.add(g),p){let m=Math.ceil(h.distanceTo(u)/1.3);for(let v=0;v<=m;v++){let y=h.clone().lerp(u,v/m).add(r.position);Xt.push({x:y.x,y:y.y,z:y.z,rx:f+.15,ry:f+.15,rz:f+.15,structure:"wreck"})}}return g};for(let h=0;h<13;h++){let u=-18+h*3;if(Math.abs(u)<3.1)continue;let f=2.2+2.8*Math.sin((u+18)/36*Math.PI);for(let d of[-1,1]){let p=[new Pe(0,-2,u),new Pe(d*f*.55,-1.4,u),new Pe(d*f,.2,u),new Pe(d*f,3,u)];for(let x=0;x<3;x++)a(p[x],p[x+1],.17);if(!(d<0&&u>-6&&u<9)){Xt.push({x:18+d*f,y:o+.7,z:-54+u,rx:.55,ry:2.5,rz:1.4,structure:"wreck"});for(let x=0;x<3;x++){let g=new tt(new Ot(.16,.44,2.6),n);g.position.set(d*f,.1+x*.7,u),r.add(g)}}}}for(let h of[-11,11]){for(let u=0;u<12;u++){let f=new tt(new Ot(.68,.22,8.6),n);f.position.set(-4.1+u*.74,2,h),r.add(f)}Xt.push({x:18,y:o+2,z:-54+h,rx:4.9,ry:.48,rz:5.1,structure:"wreck"})}a(new Pe(0,2,-11),new Pe(8,14,3),.28,n,!0),a(new Pe(6,11,-2),new Pe(-3,11,-8),.18);let l=new tt(new Et(.9,.1,8,20),s);l.position.set(0,3.6,12),r.add(l);for(let h=0;h<6;h++){let u=h*Math.PI/3;a(new Pe(0,3.6,12),new Pe(Math.sin(u)*1.1,3.6+Math.cos(u)*1.1,12),.065,s)}for(let[h,u]of[[-2,-13],[2,13]]){let f=new tt(new Ot(1.4,.85,1.05),n);f.position.set(h,2.55,u),r.add(f);for(let d of[-.45,.45]){let p=new tt(new Ot(.09,.88,1.08),s);p.position.set(h+d,2.55,u),r.add(p)}}let c=[];for(let h=0;h<44;h++){let u=-18+De()*36,f=(De()>.5?1:-1)*(2.2+2.8*Math.sin((u+18)/36*Math.PI));c.push({position:new Pe(18+f,o+2.6,-54+u),scale:new Pe(.13,.7+De()*1.2,.13),quaternion:new Kt().setFromAxisAngle(new Pe(0,0,1),(De()-.5)*.5)})}aa(new zt(.45,1,1,6),Ht("#858f8d"),c)}function nv(){let i=Ht("#859fa8",{map:Bn.rock,emissive:"#113d4b",emissiveIntensity:.12});for(let s of[-87,-99,-111]){let r=new Et(11,2.1,14,56,Math.PI),o=r.attributes.position,a=r.attributes.normal;for(let l=0;l<o.count;l++){let c=.19*Math.sin(o.getX(l)*1.3+o.getZ(l)*2.1)*Math.cos(o.getY(l)*1.6);o.setXYZ(l,o.getX(l)+a.getX(l)*c,o.getY(l)+a.getY(l)*c,o.getZ(l)+a.getZ(l)*c)}r.computeVertexNormals(),Zs(r,i,36,-17.5,s);for(let l=0;l<=14;l++){let c=l*Math.PI/14;Xt.push({x:36+Math.cos(c)*11,y:-17.5+Math.sin(c)*11,z:s,rx:2.25,ry:2.25,rz:2.25,structure:"cave"})}}for(let s of[-90,-102,-114])Bt(23,s,3.7,7,5.2,-13),Bt(49,s,3.7,7,5.2,-13);let e=[];for(let s=0;s<105;s++){let r=-80-De()*39,o=De()>.5?1:-1,a=36+o*(5.7+De()*3.8),l=lt(a,r);e.push({position:new Pe(a,l+.25,r),scale:new Pe(.16+De()*.18,.6+De()*1.7,.18+De()*.15),quaternion:new Kt().setFromAxisAngle(new Pe(0,0,1),o*(.1+De()*.45))})}aa(new ti(1,1,5),Ht("#397f91",{emissive:"#35919e",emissiveIntensity:.42,roughness:.4}),e);for(let s of[-88,-102,-115]){let r=new xi("#6dc9cc",12,23,2);r.position.set(36,-11,s),at.add(r),Xs(Bn.glow,11,6,36,-16,s,{opacity:.2,blending:ni})}let t=[];for(let s=0;s<100;s++)t.push(28+De()*16,-16+De()*8,-80-De()*39);let n=new st;n.setAttribute("position",new He(t,3)),at.add(new Ui(n,new ns({map:Bn.glow,color:"#a4f0df",size:.16,transparent:!0,opacity:.8,depthWrite:!1})))}function iv(){at.add(new Cs("#a9eadf","#173645",2.3));let i=new Rr("#ffedc5",2.5);i.position.set(-24,60,18),at.add(i);let e=new Rr("#61b9c9",1.1);e.position.set(25,12,-40),at.add(e);let t=$y();Bn.glow=t;for(let o=0;o<6;o++){let a=new rn(3+De()*4,50),l=new sn({transparent:!0,depthWrite:!1,side:rt,blending:ni,uniforms:{},vertexShader:"varying vec2 v; void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 v;void main(){float a=pow(max(0.,1.-abs(v.x-.5)*2.),2.)*sin(v.y*3.14159)*.047;gl_FragColor=vec4(.45,.75,.66,a);}"}),c=Zs(a,l,-32+o*13,15,-33-o*4);c.rotation.z=-.19,c.rotation.y=.3}let n=new st,s=new Float32Array(450*3);for(let o=0;o<450;o++)s[o*3]=De()*115-57,s[o*3+1]=De()*42-23,s[o*3+2]=De()*125-85;n.setAttribute("position",new Mt(s,3));let r=new Ui(n,new ns({map:t,size:.2,color:"#b4e2c3",transparent:!0,opacity:.5,depthWrite:!1}));at.add(r)}var en=new Pe(-7,2,-143);function sv(){let i=new it;at.add(i),i.position.copy(en);let e=Ht("#b5cab5",{map:Bn.rock,emissive:"#1e5558",emissiveIntensity:.24}),t=Ht("#a39463",{metalness:.38,roughness:.62}),n=Ht("#6bafa9",{emissive:"#5cceb6",emissiveIntensity:.75,metalness:.25,roughness:.32}),s=(l,c,h,u,f)=>{let d=new tt(l,c);return d.position.set(h,u,f),i.add(d),d};s(new Ot(19,2.3,9),e,0,-6,0);for(let l of[-6.4,6.4]){s(new zt(2.2,2.9,13.2,18),e,l,.3,0),s(new zt(2.7,2.3,1.2,18),t,l,7.2,0),s(new ti(2.7,3.8,18),e,l,9.7,0);let c=s(new Et(1.15,.23,10,36),t,l,3.9,2.75);c.rotation.y=l<0?.12:-.12,s(new Gn(.95,36),n,l,3.9,2.77);for(let h of[-3,0])s(new Et(2.5,.09,6,28),t,l,h,0).rotation.x=Math.PI/2}let r=s(new Et(5.8,.95,14,48,Math.PI),e,0,1.9,0);for(let l of[-5.8,5.8])s(new zt(.95,1.18,7.2,12),e,l,-1.7,0);s(new Et(5.8,.08,8,48,Math.PI),t,0,1.9,.97);let o=[];for(let l=0;l<145;l++)o.push((De()-.5)*9.2,-5+De()*11.5,(De()-.5)*1.1);let a=new st;a.setAttribute("position",new He(o,3)),Ec=new Ui(a,new ns({map:Bn.glow,size:.32,color:"#beead0",transparent:!0,opacity:.7,depthWrite:!1})),i.add(Ec),ip=s(new rn(9,10.5),new nn({color:"#8eeed1",transparent:!0,opacity:.055,side:rt,depthWrite:!1}),0,0,.2),Xt.push({x:en.x,y:en.y,z:en.z,rx:8.7,ry:12.2,rz:5.7,gate:!0});for(let l of[-6.4,6.4])Xt.push({x:en.x+l,y:en.y+.3,z:en.z,rx:2.9,ry:6.6,rz:2.9,structure:"customs-tower"});Xt.push({x:en.x,y:en.y-6,z:en.z,rx:9.5,ry:1.15,rz:4.5,structure:"customs-foundation"});for(let l=0;l<=12;l++){let c=l*Math.PI/12;Xt.push({x:en.x+Math.cos(c)*5.8,y:en.y+1.9+Math.sin(c)*5.8,z:en.z,rx:.95,ry:.95,rz:.95,structure:"customs-arch"})}}function jf(i,e,t,n){let s=i==="shell"&&t<=lt(e,n)+1.1;t=Math.max(t,lt(e,n)+.9);let r=oa({x:e,y:t,z:n}).id,o=(u,f,d)=>Xt.some(p=>((u-p.x)/(p.rx+1.5))**2+((f-p.y)/(p.ry+1.5))**2+((d-p.z)/(p.rz+1.5))**2<1),a=[[0,0],[-2,0],[2,0],[0,2],[0,-2],[-3,2],[3,-2]];for(let u of[4,7,11,16,24])for(let f=0;f<16;f++)a.push([Math.cos(f*Math.PI/8)*u,Math.sin(f*Math.PI/8)*u]);let l=!1;for(let[u,f]of a){let d=e+u,p=n+f;if(d<xc.minX||d>xc.maxX||p<xc.minZ||p>xc.maxZ||oa({x:d,z:p}).id!==r)continue;let x=s?lt(d,p)+.9:Math.max(t,lt(d,p)+.9),g=Math.max(x,lt(d,p)+1.5);if(g<=11&&!o(d,g,p)){e=d,n=p,t=x,l=!0;break}}if(!l)throw new Error("\u6536\u85CF\u7269\u6CA1\u6709\u5B89\u5168\u4F4D\u7F6E");let c=Xs(Bn.glow,i==="shell"?3.4:2.1,i==="shell"?3.4:2.1,e,t,n,{opacity:.72,blending:ni}),h;i==="pearl"?h=Zs(new et(.38,18,12),Ht("#e7efdb",{roughness:.2,metalness:.28,emissive:"#81c7b5",emissiveIntensity:.4}),e,t,n):h=Xs(Bn.shell,1.5,1.5,e,t,n),On.push({kind:i,position:new Pe(e,t,n),body:h,glow:c,taken:!1,index:On.length})}function rv(){let i=[[-15,-1,17],[-16,-1,9],[-18,-1,0],[-23,0,14],[-29,1,6],[-37,1,16],[3,2,24],[13,1,18],[22,0,9],[32,1,20],[-19,-1,-10],[-25,1,-17],[-34,3,-23],[-43,5,-30],[-45,0,-39],[-35,-1,-46],[-28,3,-41],[-32,5,-31],[-40,-1,-21],[-49,5,-18],[16,-5,5],[16,-10,-3],[16,-15,-12],[18,-15,-25],[18,-19,-36],[13,-20,-44],[18,-19,-52],[25,-14,-60],[18,-14,-70],[12,-12,-79],[29,-11,-79],[34,-12,-84],[36,-13,-90],[38,-13,-97],[35,-13,-104],[36,-13,-111],[36,-11,-117],[42,-9,-108],[30,-11,-102],[40,-6,-86],[-4,0,-76],[-12,1,-83],[-20,0,-93],[-23,2,-105],[-15,2,-116],[-7,2,-125],[2,4,-119],[8,5,-109],[6,0,-95],[-3,2,-107]],e=(n,s)=>[n,lt(n,s)+.9,s],t=[e(-23,10),e(-32,20),e(8,26),e(31,14),e(-41,-12),e(-49,-27),e(-40,-44),e(-30,-46),[16,-19.6,-12],e(13,-35),[18,lt(18,-54)+6.4,-48],e(22,-71),e(36,-89),e(39,-99),e(34,-108),e(36,-116),e(-14,-80),e(-22,-97),e(-13,-115),e(1,-123)];for(let n of i)jf("pearl",...n);for(let n of t)jf("shell",...n);if(On.filter(n=>n.kind==="pearl").length!==sa.pearl||On.filter(n=>n.kind==="shell").length!==sa.shell)throw new Error("\u6D77\u57DF\u6536\u85CF\u6570\u91CF\u4E0D\u4E00\u81F4")}function ov(){dt=new it,dt.position.copy(ve),at.add(dt);let i=Bn.hull.clone();i.wrapS=i.wrapT=jn,i.repeat.set(3,2),i.needsUpdate=!0;let e=Ht("#e5d8a9",{map:i,metalness:.32,roughness:.67}),t=Ht("#c4a866",{metalness:.52,roughness:.43}),n=Ht("#274b56",{metalness:.32,roughness:.7}),s=(_,T,E=0,C=0,P=0)=>{let b=new tt(_,T);return b.position.set(E,C,P),dt.add(b),b},r=[new re(1.17,-1.42),new re(1.34,-1.2),new re(1.6,-.8),new re(1.77,-.25),new re(1.78,.25)],o=[new re(1.78,.25),new re(1.61,.9),new re(1.24,1.5),new re(.73,1.94),new re(.25,2.12),new re(0,2.14)],a=(_,T=0,E=Math.PI*2)=>{let C=new Ts(_,64,T,E);return C.rotateX(Math.PI/2),C};s(a(r),e);let l=s(a(o),e);l.name="opaqueRearHull",dt.userData.rearHull=l,s(new Et(1.79,.07,10,64),t,0,0,.25),s(new Gn(1.48,48),Ht("#153c43",{roughness:.85}),0,0,.05),s(new Ot(2.38,.16,1.8),Ht("#806f4b",{roughness:.74,metalness:.2}),0,-.91,.66);for(let _ of[-1,1]){s(new Ot(.1,.88,.16),n,_*1.32,-.23,.36),s(new Ot(.39,.18,.48),t,_*.91,-.71,.58);for(let T=0;T<3;T++)s(new et(.034,8,6),new nn({color:T===0?"#f6d398":"#93d8c2"}),_*(.79+T*.09),-.59,.75)}let c=new xi("#f9ddb0",2.4,4,2);c.position.set(0,.96,.55),dt.add(c),dt.userData.cabinLight=c,c.visible=!1;let h=[];for(let _=0;_<3;_++){let T=s(new et(.075+_*.016,14,10),new wr({color:"#d3f4e8",transparent:!0,opacity:0,roughness:.12,metalness:0,depthWrite:!1}),_===0?-.95:.64+_*.16,.45+_*.24,1.57);T.visible=!1,h.push({mesh:T,baseY:T.position.y})}dt.userData.reactionBubbles=h,s(new Et(1.21,.19,14,64),t,0,0,-1.43),s(new Et(1.01,.065,10,64),n,0,0,-1.44);for(let _=0;_<12;_++){let T=_*Math.PI/6;s(new et(.066,8,6),n,Math.cos(T)*1.22,Math.sin(T)*1.22,-1.62)}let u=s(new Gn(1.16,48),new nn({color:"#174356"}),0,0,-.86);u.rotation.y=Math.PI;let f=s(new Gn(1.04,64),new wr({color:"#a7e5df",transparent:!0,opacity:.12,roughness:.13,metalness:.06,clearcoat:.5,depthWrite:!1,side:rt}),0,0,-1.49);f.name="frontGlass",s(new zt(.31,.39,.36,20),e,0,1.8,-.4);let d=s(new zt(.31,.31,.64,24),t,0,2.02,-.69);d.rotation.x=Math.PI/2,s(new Gn(.26,32),new nn({color:"#b9ecd6",side:rt}),0,2.02,-1.02).rotation.y=Math.PI;let p=s(new ti(1.35,5.2,28,1,!0),new nn({color:"#bed7ab",transparent:!0,opacity:.035,side:rt,depthWrite:!1,blending:ni}),0,1.94,-3.58);p.rotation.x=Math.PI/2,s(new Ot(.52,.36,.57),e,0,-1.02,1.75);let x=s(new zt(.12,.12,.6,14),n,0,-1.02,2.17);x.rotation.x=Math.PI/2;let g=new it;g.position.set(0,-1.02,2.45),dt.add(g),dt.userData.propeller=g,g.add(new tt(new et(.2,16,10),t));for(let _=0;_<3;_++){let T=_*2*Math.PI/3,E=new tt(new et(1,16,8),t);E.scale.set(.14,.51,.05),E.position.set(-Math.sin(T)*.43,Math.cos(T)*.43,0),E.rotation.z=T+.25,g.add(E)}for(let _ of[-1,1]){let T=new st;T.setAttribute("position",new He([_*1.25,-.72,.62,_*2.32,-.72,1.68,_*1.08,-.72,1.7],3)),T.computeVertexNormals(),s(T,Ht("#798d76",{metalness:.35,roughness:.65,side:rt}))}let m=document.createElement("canvas");m.width=m.height=128;let v=m.getContext("2d"),y=v.createRadialGradient(64,64,0,64,64,64);y.addColorStop(0,"rgba(0,16,25,.38)"),y.addColorStop(1,"rgba(0,16,25,0)"),v.fillStyle=y,v.fillRect(0,0,128,128),Gs=Zs(new rn(5,6),new nn({map:new xn(m),transparent:!0,depthWrite:!1}),ve.x,lt(ve.x,ve.z)+.08,ve.z),Gs.rotation.x=-Math.PI/2;for(let _=0;_<5;_++){let T=Xs(null,1.3,.39,0,0,0);Vs.push({sprite:T,x:-29+_*2,z:-19+_*.7,y:2+_*.22,phase:_*.3})}Vs.push({sprite:Xs(null,4.1,2.3,-31,4,-14),x:-31,z:-14,y:4,phase:0,turtle:!0})}function Mu(){let i=Wt-Gt.start,e=!!Gt.kind&&i<Gt.duration,t=e?us(i/Gt.duration,0,1):1;return{active:e,phase:t,kind:Gt.kind,duration:Gt.duration,serial:Gt.serial,side:Gt.side,pose:e&&t>.15&&t<.76?"hi5":"idle"}}function av(i){let e=Mu();if(e.active){i.kind==="shell"&&Gt.kind!=="shell"&&(Gt.kind="shell",Gt.duration=.7,Gt.start=Wt-e.phase*.7),zn("reaction-merge",{kind:i.kind,serial:Gt.serial});return}let t=i.position.clone().sub(ve);Gt.kind=i.kind,Gt.start=Wt,Gt.duration=i.kind==="shell"?.7:.45,Gt.side=t.x*Math.cos(Rt)+t.z*Math.sin(Rt)<0?-1:1,Gt.serial++,zn("reaction-start",{kind:i.kind,duration:Gt.duration,serial:Gt.serial})}function lv(){let i=Mu(),e=i.active&&!pn?Math.sin(Math.PI*i.phase):0,t=i.kind==="shell";dt.userData.cabinLight.intensity=2.4+e*(t?1.3:.9);for(let[n,s]of dt.userData.reactionBubbles.entries())s.mesh.visible=i.active&&t&&!pn&&i.phase>.14&&i.phase<.94,s.mesh.position.y=s.baseY+i.phase*.68,s.mesh.scale.setScalar(.7+e*.3),s.mesh.material.opacity=e*.26}function cv(i){let e=i.clone().sub(ve);return Xt.some(t=>{if(t.gate)return!1;let n=new Pe((ve.x-t.x)/(t.rx+.55),(ve.y-t.y)/(t.ry+.55),(ve.z-t.z)/(t.rz+.55)),s=new Pe(e.x/(t.rx+.55),e.y/(t.ry+.55),e.z/(t.rz+.55)),r=s.dot(s),o=2*n.dot(s),a=n.dot(n)-1,l=o*o-4*r*a;if(r<1e-4||l<0)return!1;let c=(-o-Math.sqrt(l))/(2*r);return c>.025&&c<1.02})}function Qf(i){if(op(ve)){i.y=Math.max(lt(i.x,i.z)+2.4,Math.min(i.y,-9.8));for(let e=0;e<14&&cv(i);e++)i.lerp(ve,.22);for(let e=1;e<64;e++){let t=e/64,n=ve.x+(i.x-ve.x)*t,s=ve.z+(i.z-ve.z)*t;i.y=Math.max(i.y,ve.y+(lt(n,s)+.75-ve.y)/t)}return}i.y=Math.max(i.y,lt(i.x,i.z)+4);for(let e=1;e<64;e++){let t=e/64,n=ve.x+(i.x-ve.x)*t,s=ve.z+(i.z-ve.z)*t;i.y=Math.max(i.y,ve.y+(lt(n,s)+1.15-ve.y)/t)}for(let e of Xt){if(e.gate&&Wr)continue;let t=(i.x-e.x)/(e.rx+1.4),n=(i.y-e.y)/(e.ry+1.4),s=(i.z-e.z)/(e.rz+1.4);t*t+n*n+s*s<1.2&&(i.y=Math.max(i.y,e.y+e.ry+3))}for(let e=0;e<10;e++){let t=i.clone().sub(ve);if(!Xt.some(s=>{if(s.gate)return!1;let r=new Pe((ve.x-s.x)/(s.rx+1),(ve.y-s.y)/(s.ry+1),(ve.z-s.z)/(s.rz+1)),o=new Pe(t.x/(s.rx+1),t.y/(s.ry+1),t.z/(s.rz+1)),a=o.dot(o),l=2*r.dot(o),c=r.dot(r)-1,h=l*l-4*a*c;if(h<0||a<1e-4)return!1;let u=(-l-Math.sqrt(h))/(2*a);return u>.025&&u<.94}))break;i.y+=3.4}}function up(){if(!Ys||$t!==1||An||tn||an)return;bi=bi==="cockpit"?"external":"cockpit",qn=!1;let i=bi==="cockpit";We.fov=i?68:57,We.near=i?.06:.2,We.updateProjectionMatrix(),Me("shell").classList.toggle("cockpit-mode",i),Me("viewBtn").textContent=i?"\u89C6\u89D2\uFF1A\u8231\u5185":"\u89C6\u89D2\uFF1A\u5916\u90E8",Me("viewBtn").setAttribute("aria-pressed",String(i)),Me("viewStatus").textContent=i?"\u5DF2\u5207\u6362\u5230\u9A7E\u9A76\u8231\u89C6\u89D2":"\u5DF2\u5207\u6362\u5230\u5916\u90E8\u8FFD\u8E2A\u89C6\u89D2",qs(0,!0),Si(),zn("view-switch",{mode:bi}),Me("sea").focus({preventScroll:!0})}function qs(i,e=!1){if(bi==="cockpit"){oi=Rt,We.position.copy(ve).add(Zy.clone().applyAxisAngle(new Pe(0,1,0),-Rt)),kr.copy(We.position).add(new Pe(Math.sin(Rt),0,-Math.cos(Rt))),We.lookAt(kr),We.updateMatrixWorld();return}let t=Math.atan2(Math.sin(Rt-oi),Math.cos(Rt-oi));oi+=t*(e?1:1-Math.exp(-i*3.6));let n=op(ve),s=n?9:21;for(let a=0;a<7;a++){let l=new Pe(0,n?3.2:9.5,s).applyAxisAngle(new Pe(0,1,0),-oi);if(Vr.copy(ve).add(l),Qf(Vr),Vr.y-ve.y<=18||s<=6)break;s=Math.max(6,s*.8)}let r=new Pe(Math.sin(oi)*5.5,1.2,-Math.cos(oi)*5.5),o=ve.clone().add(r);e?(We.position.copy(Vr),kr.copy(o)):(We.position.lerp(Vr,1-Math.exp(-i*6)),kr.lerp(o,1-Math.exp(-i*6))),Qf(We.position),We.lookAt(kr),We.updateMatrixWorld()}function Os(i){return Ws.has(i)||[...Xr.values()].includes(i)}function dp(i){Ws.has(i)||(Ws.add(i),Cc.set(i,++sp))}function fp(i){Ws.delete(i),Cc.delete(i)}function hv(i,e){Xr.set(i,e),Ic.set(i,++sp)}function uv(i){Xr.delete(i),Ic.delete(i)}function Su(){let i=0,e=0,t=(n,s)=>{(n==="KeyA"||n==="ArrowLeft")&&(i=Math.max(i,s)),(n==="KeyD"||n==="ArrowRight")&&(e=Math.max(e,s))};for(let n of Ws)t(n,Cc.get(n)||0);for(let[n,s]of Xr)t(s,Ic.get(n)||0);return i||e?e>i?1:-1:0}function dv(i,e){!Wr&&hs.pearl>=qi.pearl&&hs.shell>=qi.shell&&(Wr=!0,ip.material.opacity=.015,Ec.material.opacity=.15,Me("gateLabel").querySelector("span").textContent="\u6C14\u6CE1\u5E18\u5F00\u653E \xB7 \u4ECE\u53CC\u5854\u4E2D\u95F4\u901A\u884C",zn("gate-unlocked",{targets:{...qi}}),la("\u6536\u85CF\u5DF2\u8FBE\u6807\uFF0C\u524D\u5F80\u8FB9\u754C\u6D77\u5173\uFF0C\u4ECE\u53CC\u5854\u4E2D\u95F4\u7A7F\u8FC7"));let t=i.clone().sub(e),n=i.clone().sub(ve.clone().add(bc())),s=t.z<0&&n.z>=0,r=s?t.clone().lerp(n,-t.z/(n.z-t.z)):n;!du&&Wr&&s&&Math.abs(r.x)<3.7&&r.y<3&&r.y>-5.5&&(du=!0,zn("level-complete",{level:2,targets:{...qi}}),Me("gateLabel").querySelector("span").textContent="\u901A\u884C\u6210\u529F",la("\u8FB9\u754C\u6D77\u5173\u901A\u884C\u6210\u529F\u3002\u53EF\u4EE5\u7EE7\u7EED\u63A2\u7D22\uFF0C\u6216\u8FD4\u56DE\u7FA4\u5C9B\u5730\u56FE"))}function zn(i,e={}){ia.push({type:i,time:Wt,...e}),ia.length>400&&ia.shift()}function la(i){Me("toast").textContent=i,Me("toast").classList.add("visible"),clearTimeout(Jf),Jf=setTimeout(()=>Me("toast").classList.remove("visible"),3400)}function fv(){clearTimeout(wc),Me("shell").classList.remove("hide-hint"),wc=setTimeout(()=>Me("shell").classList.add("hide-hint"),5e3)}function ci(){Ws.clear(),Xr.clear(),Cc.clear(),Ic.clear()}function ep(i,e,t=0){let n=Xn({x:i,z:e}),s=lt(i,e)+1.5;if(t>80||Math.abs(n.x)<66&&n.z<32&&n.z>-142)return s;let r=Math.sin(Rt),o=Math.cos(Rt),a=s;for(let l=0;l<=10;l++)for(let c=0;c<=10;c++){let h=-2.5+l*.5,u=-2.7+c*.54;a=Math.max(a,lt(i+h*o-u*r,e+h*r+u*o)+2.7)}return a}function tp(i){for(let e of Xt){if(e.gate&&Wr)continue;let t=(i.x-e.x)/(e.rx+1.35),n=(i.y-e.y)/(e.ry+1.35),s=(i.z-e.z)/(e.rz+1.35);if(t*t+n*n+s*s<1)return lp++,e}return null}function pp(i,e=!0){Wt+=i,_c=Math.max(0,_c-i);let t=ve.clone().add(bc()),n=Ko(en,ve).add(bc()),s=Number(Os("KeyW")||Os("ArrowUp"))-Number(Os("KeyS")||Os("ArrowDown")),r=Su(),o=Number(Os("Space"))-Number(Os("ShiftLeft")||Os("ShiftRight"));Rt+=r*i*1.12;let a=new Pe(Math.sin(Rt)*s*6.4,o*4.6,-Math.cos(Rt)*s*6.4);s<0&&(a.x*=.65,a.z*=.65),li.lerp(a,1-Math.exp(-i*(s||o?2.6:2.2))),ap+=li.length()*i*4;let l=ve.clone().addScaledVector(li,i);l.y=us(l.y,ep(l.x,l.z,l.y),Nn.surface-2);let c=tp(l);if(c){for(let u of["x","z","y"]){let f=ve.clone();f[u]=l[u],f.y=us(f.y,ep(f.x,f.z,f.y),Nn.surface-2),tp(f)?li[u]=0:ve.copy(f)}c.gate&&_c<=0&&(la(`\u6D77\u5173\u9700 ${qi.pearl} \u9897\u73CD\u73E0\u4E0E ${qi.shell} \u679A\u8D1D\u58F3\uFF0C\u76EE\u524D\u8FD8\u672A\u8FBE\u6807`),_c=6)}else ve.copy(l);qy();for(let u of On)Ko(u.basePosition||u.position,ve,u.position);let h=oa(ve);fu.has(h.id)||(fu.add(h.id),zn("discover",{region:h.id,name:h.name}));for(let u of On)!u.taken&&ve.distanceTo(u.position)<1.9&&(u.taken=!0,u.body.visible=!1,u.glow.visible=!1,hs[u.kind]++,zn("collect",{kind:u.kind,index:u.index}),av(u),gv(u.kind),Me("pearlCount").textContent=Math.min(hs.pearl,qi.pearl),Me("shellCount").textContent=Math.min(hs.shell,qi.shell));dv(n,t),hs.pearl===sa.pearl&&hs.shell===sa.shell&&!ia.some(u=>u.type==="sample-all")&&(zn("sample-all"),la("\u4E94\u5904\u6D77\u57DF\u7684\u6536\u85CF\u627E\u9F50\u4E86\uFF0C\u8FD8\u53EF\u4EE5\u7EE7\u7EED\u81EA\u7531\u822A\u884C")),e&&qs(i)}function Si(){Ut.info.reset(),Pc.value=pn?0:Wt,dt.position.copy(ve),dt.position.y+=pn?0:Math.sin(Wt*1.7)*.1,dt.rotation.set(0,-Rt,0),dt.userData.propeller.rotation.z=ap,lv(),Gs.position.set(ve.x,lt(ve.x,ve.z)+.08,ve.z),Gs.material.opacity=us(1-(ve.y-lt(ve.x,ve.z))/20,.12,.8);for(let s of On)if(!s.taken){let r=pn?0:Math.sin(Wt*1.8+s.index)*.11;s.body.position.y=s.position.y+r,s.glow.position.y=s.position.y+r}ls?.update(pn?0:Wt),Sc?.update(pn?0:Wt);let i=Ec.geometry.attributes.position;for(let s=0;s<i.count;s++){let r=s*.83%11.5;i.setY(s,-5+(r+Wt*.7)%11.5)}i.needsUpdate=!0,Qt?.update({player:ve,heading:Rt,time:pn?0:Wt,inspection:ks,camera:We}),na?.update({player:ve,camera:We,time:pn?0:Wt}),vu?.update(We,at.fog.far),Qt?.updateShadows();let e=Ko(en,ve),t=e.clone().add(new Pe(0,13,0)).project(We);Me("gateLabel").hidden=t.z>1||t.z<-1||Math.abs(t.x)>1||Math.abs(t.y)>.94||(1-t.y)*innerHeight/2<145,at.fog.near<41.9&&We.position.distanceTo(e)>at.fog.far&&(Me("gateLabel").hidden=!0),Me("gateLabel").style.left=(t.x+1)*innerWidth/2+"px",Me("gateLabel").style.top=(1-t.y)*innerHeight/2+"px";for(let s of ta)s.group.position.y=s.y+(pn?0:Math.sin(Wt*.55+s.phase)*.55);let n=Math.round(Nn.surface-ve.y);Me("depth").textContent=n,Me("depthBar").style.width=us(n/160*100,0,100)+"%",Me("location").textContent=oa(ve).name,dt.visible=!ks&&(bi==="external"||qn),Gs.visible=dt.visible,Hs&&!qn&&bi==="cockpit"&&Hs.update({time:Wt,y:ve.y,heading:Rt,velocity:li,surface:Nn.surface}),mv(),Ut.render(at,We),Hs&&!qn&&bi==="cockpit"&&Hs.render()}var pv=Me("radar").getContext("2d");function mv(){let i=pv;i.clearRect(0,0,264,264),i.save(),i.translate(132,132),i.strokeStyle="#95cfc221";for(let n of[43,85,120])i.beginPath(),i.arc(0,0,n,0,Math.PI*2),i.stroke();let e=(n,s)=>[fn(n-ve.x,220)*.86,fn(s-ve.z,260)*.86];i.fillStyle="#779b8244";for(let n of Xt){if(n.structure||n.gate||n.rx<4||Math.hypot(n.x-ve.x,n.z-ve.z)>125)continue;let s=e(n.x,n.z);i.beginPath(),i.ellipse(s[0],s[1],n.rx*.86,n.rz*.86,0,0,Math.PI*2),i.fill()}i.font='10px "PingFang SC",sans-serif',i.textAlign="center";for(let n of[...Hr,...ri]){let s=e(n.x,n.z);Math.hypot(...s)>115||(i.fillStyle=n.color||"#9ebed0",i.fillText(n.name,s[0],s[1]-8))}for(let n of On){if(n.taken)continue;let s=e(n.basePosition.x,n.basePosition.z);Math.hypot(...s)>115||(i.fillStyle=n.kind==="shell"?"#e4c89e":"#a9e6d3",i.beginPath(),i.arc(s[0],s[1],n.kind==="shell"?3.5:2,0,Math.PI*2),i.fill())}let t=e(en.x,en.z);i.fillStyle="#ead5a2",i.fillRect(t[0]-4,t[1]-4,8,8),i.rotate(Rt),i.fillStyle="#d8f5e3",i.beginPath(),i.moveTo(0,-8),i.lineTo(5,5),i.lineTo(0,2),i.lineTo(-5,5),i.closePath(),i.fill(),i.restore()}function mp(){Ut&&(We.aspect=innerWidth/innerHeight,We.updateProjectionMatrix(),Ut.setSize(innerWidth,innerHeight,!1),Si())}function gp(i){let e=cs?Math.min((i-cs)/1e3,.1):0,t=cs?i-cs:0;if(cs=i,$t===1&&Mn&&!An&&!tn&&!an&&!document.hidden){Mi=Math.min(Mi+e,uu/60);let n=0;for(;Mi>=1/60&&n++<uu;)pp(1/60,!1),Mi-=1/60;n&&qs(Math.min(e,n/60)),Mi>=1/60&&(Mi%=1/60),t>0&&(li.length()>.3||Su())&&(vc.push(t),vc.length>1500&&vc.shift())}else Mi=0;$t===1&&!Me("shell").classList.contains("map-settled")&&Si(),requestAnimationFrame(gp)}async function xp(){if(!(!ai||$t!==1))try{if(!Dt){Dt=new(window.AudioContext||window.webkitAudioContext),Xi=Dt.createGain(),Xi.gain.value=.65;let i=Dt.createDynamicsCompressor();i.threshold.value=-12,i.ratio.value=5,Xi.connect(i),i.connect(Dt.destination),Gr=Dt.createGain(),Gr.gain.value=.48,Gr.connect(Xi),Ac=Dt.createGain(),Ac.connect(Xi)}await Dt.resume(),yc||(yc=(async()=>{let i=await fetch(hu.music);if(!i.ok)throw new Error("Music HTTP "+i.status);let e=await i.arrayBuffer(),t=await Dt.decodeAudioData(e);zs=Dt.createBufferSource(),zs.buffer=t,zs.loop=!0,zs.connect(Gr),zs.start(),cp++})()),await yc,ca()}catch(i){ai=!1,Xi&&(Xi.gain.value=0),Me("soundBtn").textContent="\u58F0\u97F3\uFF1A\u5173",Me("soundBtn").setAttribute("aria-pressed","false"),yc=null,la("\u58F0\u97F3\u6682\u672A\u80FD\u542F\u52A8\uFF0C\u53EF\u4EE5\u70B9\u51FB\u58F0\u97F3\u5F00\u5173\u91CD\u8BD5"),console.warn("Audio unavailable",i)}}function ca(){Dt&&(Xi.gain.setTargetAtTime(ai&&$t===1?.65:0,Dt.currentTime,.04),Gr.gain.setTargetAtTime(An||tn?.22:.48,Dt.currentTime,.2))}function gv(i){if(!ai||!Dt||Dt.state!=="running")return;(i==="shell"?[1396.9,2093,2793.8]:[1046.5,1568]).forEach((t,n)=>{let s=Dt.createOscillator(),r=Dt.createGain(),o=Dt.currentTime+n*.045;s.frequency.value=t,s.type="sine",r.gain.setValueAtTime(0,o),r.gain.linearRampToValueAtTime(.095-n*.018,o+.008),r.gain.exponentialRampToValueAtTime(1e-4,o+.32),s.connect(r),r.connect(Ac),s.start(o),s.stop(o+.35),s.onended=()=>{s.disconnect(),r.disconnect()}}),zn("sound",{kind:i})}function Rc(){!Ys||Mn||$t!==1||(Mn=!0,Me("welcome").hidden=!0,ci(),fv(),Me("sea").focus({preventScroll:!0}),cs=performance.now(),Mi=0,xp(),zn("start"))}function pu(i){Me("mapLayer").contentWindow?.postMessage({source:"loopie-audit",...i},"*")}function _p(){return{type:"show",selected:$t,labels:{0:ra?"\u7EE7\u7EED\u6E38\u620F":"\u5F00\u59CB\u6E38\u620F",1:Mn?"\u7EE7\u7EED\u63A2\u7D22":"\u5F00\u59CB\u63A2\u7D22"}}}function xv(){Me("mapLayer").getAttribute("src")||(Me("mapLayer").src="index.html?embed=1")}function bu(i){Me("firstLayer").contentWindow?.postMessage({source:"loopie-host",...i},"*")}function Eu(){if(!yu||$t!==0||tn||an)return;let i=Mc;Mc=!1,bu({type:"resume",play:i}),i&&(ra=!0),Me("firstLayer").focus({preventScroll:!0})}function yp(i=!1){Mc=Mc||i,Me("firstLayer").getAttribute("src")||(Me("firstLayer").src="lighthouse.html?host=1"),Eu()}function mu(i){$t=i,Me("shell").classList.toggle("first-active",i===0),Me("firstLayer").hidden=i!==0,Me("firstLayer").inert=i!==0||tn||an,Me("firstLayer").tabIndex=i===0?0:-1,Me("firstLayer").setAttribute("aria-hidden",String(i!==0)),Me("world").inert=i!==1||tn||an,i===1&&bu({type:"pause"}),ca()}function wu(){$t===1&&!Ys||tn||an||(xv(),ci(),$t===0&&bu({type:"pause"}),tn=an=!0,Me("world").inert=!0,Me("firstLayer").inert=!0,Me("mapLayer").inert=!1,Me("mapLayer").tabIndex=0,Me("mapLayer").setAttribute("aria-hidden","false"),pu(_p()),Me("shell").classList.add("map-open"),ca(),zn("map-open",{level:$t+1}),clearTimeout(Tc),Tc=setTimeout(()=>{an=!1,Me("shell").classList.add("map-settled"),Me("mapLayer").focus(),pu({type:"focus"})},pn?180:1250))}function gu(i,e=$t){!tn||an||!Number.isInteger(e)||e<0||e>1||(an=!0,mu(e),e===0?yp(i==="play"):vp().then(()=>{i==="play"&&!Mn&&!tn&&!an&&Rc()}).catch(()=>{}),Me("shell").classList.remove("map-open","map-settled"),Me("mapLayer").inert=!0,Me("mapLayer").tabIndex=-1,Me("mapLayer").setAttribute("aria-hidden","true"),Me("shell").focus({preventScroll:!0}),clearTimeout(Tc),Tc=setTimeout(()=>{tn=an=!1,mu(e),ci(),cs=performance.now(),Mi=0,e===0?Eu():!Mn&&i==="play"?Rc():Mn?Me("sea").focus({preventScroll:!0}):Me("start").focus({preventScroll:!0}),ca(),zn("map-close",{level:e+1})},pn?180:1250))}addEventListener("message",i=>{let e=i.data;if(i.source===Me("firstLayer").contentWindow&&e?.source==="loopie-first"){e.type==="ready"?(yu=!0,ra=!!e.started,Eu()):e.type==="back"&&$t===0&&(ra=!!e.started,wu());return}i.source!==Me("mapLayer").contentWindow||e?.source!=="loopie-map"||(e.island&&(Me("shell").style.setProperty("--island-x",us(e.island.x,0,1)*100+"%"),Me("shell").style.setProperty("--island-y",us(e.island.y,0,1)*100+"%")),e.type==="ready"&&tn?pu(_p()):e.type==="play"?gu("play",e.level):e.type==="back"&&gu(e.via))});function _v(i){if(!Ys||An||tn||an)return;let e=Fn[i];e&&(ci(),rp(e.x,e.y,e.z),li.set(0,0,0),Rt=oi=e.h,ks=qn=!1,qs(0,!0),Si(),Mn||Rc(),document.querySelectorAll("[data-sample]").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.sample===i))),zn("sample-view",{name:i}),Me("sea").focus({preventScroll:!0}))}document.querySelectorAll("[data-sample]").forEach(i=>i.addEventListener("click",()=>_v(i.dataset.sample)));Me("start").addEventListener("click",Rc);Me("mapBtn").addEventListener("click",wu);Me("viewBtn").addEventListener("click",up);Me("soundBtn").addEventListener("click",()=>{ai=!ai,Me("soundBtn").textContent=ai?"\u58F0\u97F3\uFF1A\u5F00":"\u58F0\u97F3\uFF1A\u5173",Me("soundBtn").setAttribute("aria-pressed",String(ai)),ai&&Mn?xp():ca()});addEventListener("keydown",i=>{if(i.code==="KeyC"&&$t===1&&Mn&&!An&&!tn&&!an){i.preventDefault(),i.repeat||up();return}if(i.code==="Escape"){if(i.repeat)return;tn?gu("esc"):wu(),i.preventDefault();return}["KeyW","KeyS","KeyA","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight"].includes(i.code)&&$t===1&&Mn&&!An&&!tn&&!an&&!i.ctrlKey&&!i.metaKey&&!i.altKey&&!i.isComposing&&(i.preventDefault(),i.repeat||dp(i.code))});addEventListener("keyup",i=>fp(i.code));addEventListener("blur",ci);document.querySelectorAll("[data-key]").forEach(i=>{i.addEventListener("pointerdown",e=>{$t!==1||!Mn||An||tn||an||e.button>0||(e.preventDefault(),i.setPointerCapture(e.pointerId),hv(e.pointerId,i.dataset.key))});for(let e of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(e,t=>uv(t.pointerId))});addEventListener("visibilitychange",()=>{ci(),cs=performance.now(),Mi=0,document.hidden&&Dt?.state==="running"?Dt.suspend():!document.hidden&&ai&&Mn&&$t===1&&Dt?.resume().catch(()=>{})});addEventListener("resize",()=>{Ys&&mp()});addEventListener("pointermove",i=>{Mn&&i.clientY>innerHeight-115&&(Me("shell").classList.remove("hide-hint"),clearTimeout(wc),wc=setTimeout(()=>Me("shell").classList.add("hide-hint"),1800))});function Wi(){return{ready:Ys,started:Mn,paused:An,mapOpen:tn,mapBusy:an,navigation:{level:$t+1,firstReady:yu,firstStarted:ra},input:{keys:[...Ws],touch:[...Xr.values()],turn:Su()},targets:{...qi},gate:{unlocked:Wr,passed:du,position:en.toArray()},time:Wt,player:{x:ve.x+Tn.x*220,y:ve.y,z:ve.z+Tn.z*260},localPlayer:ve.toArray(),voyage:{...Tn},ocean:{period:{...Nn},pool:vu?.snapshot(),highLife:Sc?.snapshot(),peaks:ri.map(i=>({...i,top:lt(i.x,i.z)}))},velocity:{x:li.x,y:li.y,z:li.z},heading:Rt,region:oa(ve).id,visited:[...fu],totals:{...sa},bounds:{horizontal:"unbounded",surface:Nn.surface,maximumY:Nn.surface-2},reaction:{...Mu(),pilotImage:!1,visibleBubbles:dt?.userData.reactionBubbles.filter(i=>i.mesh.visible).length,glassOpacity:null},pod:{yaw:dt?.rotation.y,forward:dt?new Pe(0,0,-1).applyQuaternion(dt.quaternion).toArray():null},camera:{x:We.position.x+Tn.x*220,y:We.position.y,z:We.position.z+Tn.z*260,heading:oi,mode:bi,fov:We.fov,near:We.near,direction:We.getWorldDirection(new Pe).toArray(),eyeOffset:We.position.clone().sub(ve).toArray()},cockpit:Hs?.snapshot(),exteriorAppearance:{opaqueRearHull:!!dt?.userData.rearHull&&!dt.userData.rearHull.material.transparent&&dt.userData.rearHull.material.opacity===1,pilotVisible:!1,rearGlass:!1},exteriorVisible:dt?.visible,counts:{...hs},taken:On.filter(i=>i.taken).map(i=>i.index),collisions:lp,floor:lt(ve.x,ve.z),depth:Number(Me("depth").textContent),audio:{sound:ai,status:Dt?.state||"not-created",musicStarts:cp,music:!!zs},render:{profile:_u?"mobile":"desktop",maxPixelRatio:np,maxFrameSteps:uu,pixelRatio:Ut?.getPixelRatio(),width:Me("sea").width,height:Me("sea").height,calls:Ut?.info.render.calls,triangles:Ut?.info.render.triangles,geometries:Ut?.info.memory.geometries,textures:Ut?.info.memory.textures},events:ia.slice(),wildlife:ls?.snapshot(),deepSea:Qt?.snapshot(),clearSea:na?.snapshot()}}xu===0&&(mu(0),yp(!0));window.__auditSea={snapshot:Wi};Xy&&Object.assign(window.__auditSea,{advance(i){for(let e=0;e<i-1e-6;e+=1/60)pp(1/60);return Si(),Wi()},place(i,e,t,n=0){return ks=!1,qn=!1,rp(i,e,t),li.set(0,0,0),Rt=oi=n,qs(0,!0),Si(),Wi()},input(i,e){e?dp(i):fp(i)},objects:()=>On.map(i=>({kind:i.kind,position:i.position.clone().add(bc()).toArray(),taken:i.taken,index:i.index})),rocks:()=>Xt.map(i=>({...i,x:i.x+Tn.x*220,z:i.z+Tn.z*260})),floor:lt,render:Si,loopTerrain:()=>({period:Nn,peaks:ri.map(i=>({...i,top:lt(i.x,i.z)}))}),hullTerrain:()=>{at.updateMatrixWorld(!0);let i=1/0,e=0,t=new Pe;return dt.traverse(n=>{if(!n.isMesh||n.material.blending===ni)return;let s=n.geometry.attributes.position;for(let r=0;r<s.count;r++)t.fromBufferAttribute(s,r).applyMatrix4(n.matrixWorld),i=Math.min(i,t.y-lt(t.x,t.z)),e++}),{minGap:i,vertices:e}},loopDepthMaterials:()=>{let i=0,e=0;return at.traverse(t=>{t.customDepthMaterial&&(i++,t.customDepthMaterial.onBeforeCompile.toString().includes("uAlienTime")&&e++)}),{total:i,matched:e}},loopLights:()=>{let i=[];return at.updateMatrixWorld(!0),at.traverse(e=>{e.name==="customs-warm-beacon"&&i.push({position:e.getWorldPosition(new Pe).toArray(),visible:e.visible,distance:e.distance})}),i},loopPickups:()=>{let i=[];return at.traverse(e=>{e.userData.loopPickupId!==void 0&&i.push({id:e.userData.loopPickupId,visible:e.visible})}),i},view(i,e=12,t=3){return qn=!0,An=!0,ci(),We.position.copy(ve).add(new Pe(0,t,e).applyAxisAngle(new Pe(0,1,0),-Rt+i)),We.lookAt(ve),We.updateMatrixWorld(),Si(),Wi()},resumeView(){return ks=!1,qn=!1,An=!1,qs(0,!0),Si(),Wi()},project:(i,e,t)=>{let n=new Pe(i,e,t).project(We);return{x:(n.x+1)*innerWidth/2,y:(1-n.y)*innerHeight/2,z:n.z}},samples:()=>vc.slice(),audioNodes:()=>({audio:Dt,master:Xi,musicBus:Gr,sfxBus:Ac,musicSource:zs}),wildlifeView(i,e=0,t=0,n=5,s=.6){qn=!0,An=!0,ci(),ls.update(pn?0:Wt);let r=ls.focus(i,e);return We.position.copy(r).add(new Pe(0,s,n).applyAxisAngle(new Pe(0,1,0),t)),We.lookAt(r),We.updateMatrixWorld(),Ut.render(at,We),Wi()},wildlifeAt(i){ls.update(i);let e=ls.snapshot();return ls.update(pn?0:Wt),e},wildlifeMeshes(){let i=[];return at.traverse(e=>{e.name?.startsWith("marine-")&&i.push({name:e.name,type:e.type,isInstanced:!!e.isInstancedMesh,instances:e.count||0})}),i},alienAt:i=>Qt.at(i),alienSafety:()=>Qt.safety(),alienMeshes:()=>Qt.meshes(),alienEnvelopes:()=>Qt.envelopes(),oceanAt:i=>Qt.oceanAt(i),oceanSafety:()=>Qt.oceanSafety(),shadowBounds:()=>Qt.shadowBounds(),oceanEnvelopes:()=>Qt.oceanEnvelopes(),oceanView(i,e,t=0,n=.8,s=6,r=.9){ks=!0,qn=!0,An=!0,ci(),Qt.update({player:ve,heading:Rt,time:pn?0:Wt});let o=Qt.oceanFocus(i,e,t);return e==="crown"&&(o.y+=.65),We.position.copy(o).add(new Pe(0,r,s).applyAxisAngle(new Pe(0,1,0),n)),We.lookAt(o),We.updateMatrixWorld(),Si(),Wi()},alienView(i,e=0,t=0,n=7,s=.9){ks=!0,qn=!0,An=!0,ci(),Qt.update({player:ve,heading:Rt,time:pn?0:Wt});let r=Qt.focus(i,e);return i==="crown"&&(r.y+=.65),We.position.copy(r).add(new Pe(0,s,n).applyAxisAngle(new Pe(0,1,0),t)),We.lookAt(r),We.updateMatrixWorld(),dt.visible=!1,Gs.visible=!1,Ut.info.reset(),Ut.render(at,We),Wi()},headlightTest(i){return Qt.lightTest(i),Ut.info.reset(),Ut.render(at,We),bi==="cockpit"&&!qn&&Hs.render(),Wi()}});var ea;function vp(){return ea||(ea=(async()=>{try{Ut=new fc({canvas:Me("sea"),antialias:!0,alpha:!1,powerPreference:"high-performance"}),Ut.info.autoReset=!1,Ut.setPixelRatio(Math.min(devicePixelRatio,np)),Ut.outputColorSpace=Tt,Ut.toneMapping=bl,Ut.toneMappingExposure=1.05;let i=new Fo;await Promise.all(Object.entries(hu).filter(([e])=>e!=="music").map(async([e,t])=>{let n=await i.loadAsync(t);n.colorSpace=Tt,n.anisotropy=Math.min(4,Ut.capabilities.getMaxAnisotropy()),Bn[e]=n})),Me("shellIcon").src=hu.shell,iv(),Ky(),jy(),Qy(),sv(),ev(),rv(),ov(),Yy(),We.fov=57,We.near=.2,We.updateProjectionMatrix(),Hs=Nf(Ut,We,Bn.hull),Sc=kf(at,lt,Bn.rock),Sc.update(0),na=$f(at,{floor:lt,rocks:Xt}),na.patchScene(dt),Qt=Zf(at,Ut,{floor:lt,rocks:Xt,objects:On,pod:dt}),na.patchFog(dt);for(let e of On)e.body.userData.loopPickupId=e.glow.userData.loopPickupId=e.index;vu=Vf(at,{pod:dt,shadow:Gs,objects:On,rocks:Xt,player:ve}),Qt.trackShadows(),qs(0,!0),Ys=!0,mp(),Me("start").textContent="\u5F00\u59CB\u63A2\u7D22",Me("start").disabled=!1,requestAnimationFrame(gp),Me("sea").addEventListener("webglcontextlost",e=>{e.preventDefault(),ci(),An=!0,Kf(new Error("\u56FE\u5F62\u4E0A\u4E0B\u6587\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u9875\u9762"))})}catch(i){throw ea=null,Kf(i),i}})(),ea)}xu===1&&vp().catch(()=>{});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
