(()=>{var Ud=0,Nh=1,Nd=2;var Fh=1,Ec=2,vi=3,Di=0,vn=1,ot=2,Bi=0,Es=1,oi=2,Bh=3,Oh=4,Fd=5,ns=100,Bd=101,Od=102,zd=103,Hd=104,kd=200,Vd=201,Gd=202,Wd=203,Ja=204,Ka=205,Xd=206,qd=207,Yd=208,Zd=209,$d=210,Jd=211,Kd=212,jd=213,Qd=214,wc=0,Tc=1,Ac=2,ws=3,Rc=4,Cc=5,Ic=6,Pc=7,zh=0,ef=1,tf=2,Oi=0,nf=1,sf=2,rf=3,Lc=4,of=5,af=6,cf=7;var Hh=300,Ns=301,Fs=302,Dc=303,Uc=304,qo=306,ti=1e3,ts=1001,ja=1002,wn=1003,lf=1004;var Yo=1005;var ni=1006,Nc=1007;var as=1008;var ai=1009,kh=1010,Vh=1011,Nr=1012,Fc=1013,cs=1014,ci=1015,Fr=1016,Bc=1017,Oc=1018,Br=1020,Gh=35902,Wh=35899,Xh=1021,qh=1022,Xn=1023,Mr=1026,Or=1027,zc=1028,Hc=1029,Yh=1030,kc=1031;var Vc=1033,Zo=33776,$o=33777,Jo=33778,Ko=33779,Gc=35840,Wc=35841,Xc=35842,qc=35843,Yc=36196,Zc=37492,$c=37496,Jc=37808,Kc=37809,jc=37810,Qc=37811,el=37812,tl=37813,nl=37814,il=37815,sl=37816,rl=37817,ol=37818,al=37819,cl=37820,ll=37821,hl=36492,ul=36494,dl=36495,fl=36283,pl=36284,ml=36285,gl=36286;var mo=2300,Qa=2301,Za=2302,bh=2400,Eh=2401,wh=2402;var hf=3200,xl=3201;var Zh=0,uf=1,zi="",Rt="srgb",Ts="srgb-linear",go="linear",_t="srgb";var bs=7680;var Th=519,df=512,ff=513,pf=514,$h=515,mf=516,gf=517,xf=518,_f=519,ec=35044,Jh=35048;var Kh="300 es",ei=2e3,xo=2001;var Ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],id=1234567,ho=Math.PI/180,As=180/Math.PI;function gi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function jh(n,e){return(n%e+e)%e}function dm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function fm(n,e,t){return n!==e?(t-n)/(e-n):0}function uo(n,e,t){return(1-t)*n+t*e}function pm(n,e,t,i){return uo(n,e,1-Math.exp(-t*i))}function mm(n,e=1){return e-Math.abs(jh(n,e*2)-e)}function gm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function xm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function _m(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ym(n,e){return n+Math.random()*(e-n)}function vm(n){return n*(.5-Math.random())}function Mm(n){n!==void 0&&(id=n);let e=id+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sm(n){return n*ho}function bm(n){return n*As}function Em(n){return(n&n-1)===0&&n!==0}function wm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Tm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Am(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*p,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*p,a*l);break;case"ZYZ":n.set(c*p,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Dt={DEG2RAD:ho,RAD2DEG:As,generateUUID:gi,clamp:et,euclideanModulo:jh,mapLinear:dm,inverseLerp:fm,lerp:uo,damp:pm,pingpong:mm,smoothstep:gm,smootherstep:xm,randInt:_m,randFloat:ym,randFloatSpread:vm,seededRandom:Mm,degToRad:Sm,radToDeg:bm,isPowerOfTwo:Em,ceilPowerOfTwo:wm,floorPowerOfTwo:Tm,setQuaternionFromProperEuler:Am,normalize:gt,denormalize:Qn},re=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},en=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=x;return}if(u!==x||c!==f||l!==d||h!==p){let g=1-a,m=c*f+l*d+h*p+u*x,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let T=Math.sqrt(y),E=Math.atan2(T,m*v);g=Math.sin(g*E)/T,a=Math.sin(a*E)/T}let _=a*v;if(c=c*g+f*_,l=l*g+d*_,h=h*g+p*_,u=u*g+x*_,g===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+c*d-l*f,e[t+1]=c*p+h*f+l*u-a*d,e[t+2]=l*p+h*d+a*f-c*u,e[t+3]=h*p-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),d=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jl.copy(this).projectOnVector(e),this.sub(Jl)}reflect(e){return this.sub(Jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jl=new D,sd=new en,Ke=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],x=s[0],g=s[3],m=s[6],v=s[1],y=s[4],_=s[7],T=s[2],E=s[5],C=s[8];return r[0]=o*x+a*v+c*T,r[3]=o*g+a*y+c*E,r[6]=o*m+a*_+c*C,r[1]=l*x+h*v+u*T,r[4]=l*g+h*y+u*E,r[7]=l*m+h*_+u*C,r[2]=f*x+d*v+p*T,r[5]=f*g+d*y+p*E,r[8]=f*m+d*_+p*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,p=t*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*l-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Kl.makeScale(e,t)),this}rotate(e){return this.premultiply(Kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Kl=new Ke;function Qh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Sr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yf(){let n=Sr("canvas");return n.style.display="block",n}var rd={};function br(n){n in rd||(rd[n]=!0,console.warn(n))}function vf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var od=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ad=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rm(){let n={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=vr(s.r),s.g=vr(s.g),s.b=vr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zi?go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ts]:{primaries:e,whitePoint:i,transfer:go,toXYZ:od,fromXYZ:ad,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:od,fromXYZ:ad,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),n}var ht=Rm();function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var nr,tc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{nr===void 0&&(nr=Sr("canvas")),nr.width=e.width,nr.height=e.height;let s=nr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=nr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Sr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Li(t[i]/255)*255):t[i]=Li(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cm=0,Er=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jl(s[o].image)):r.push(jl(s[o]))}else r=jl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function jl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Im=0,Ql=new D,hn=class n extends Ui{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ts,s=ts,r=ni,o=as,a=Xn,c=ai,l=n.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=gi(),this.name="",this.source=new Er(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ql).x}get height(){return this.source.getSize(Ql).y}get depth(){return this.source.getSize(Ql).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ti:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ti:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Hh;hn.DEFAULT_ANISOTROPY=1;var xt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,_=(d+1)/2,T=(m+1)/2,E=(h+f)/4,C=(u+x)/4,P=(p+g)/4;return y>_&&y>T?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=E/i,r=C/i):_>T?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=E/s,r=P/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=C/r,s=P/r),this.set(i,s,r,t),this}let v=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nc=class extends Ui{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new hn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Er(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xi=class extends nc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},_o=class extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ic=class extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _i=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ma.copy(i.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),Sa.subVectors(this.max,Qr),ir.subVectors(e.a,Qr),sr.subVectors(e.b,Qr),rr.subVectors(e.c,Qr),$i.subVectors(sr,ir),Ji.subVectors(rr,sr),ys.subVectors(ir,rr);let t=[0,-$i.z,$i.y,0,-Ji.z,Ji.y,0,-ys.z,ys.y,$i.z,0,-$i.x,Ji.z,0,-Ji.x,ys.z,0,-ys.x,-$i.y,$i.x,0,-Ji.y,Ji.x,0,-ys.y,ys.x,0];return!eh(t,ir,sr,rr,Sa)||(t=[1,0,0,0,1,0,0,0,1],!eh(t,ir,sr,rr,Sa))?!1:(ba.crossVectors($i,Ji),t=[ba.x,ba.y,ba.z],eh(t,ir,sr,rr,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ti=[new D,new D,new D,new D,new D,new D,new D,new D],Jn=new D,Ma=new _i,ir=new D,sr=new D,rr=new D,$i=new D,Ji=new D,ys=new D,Qr=new D,Sa=new D,ba=new D,vs=new D;function eh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){vs.fromArray(n,r);let a=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),c=e.dot(vs),l=t.dot(vs),h=i.dot(vs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Pm=new _i,eo=new D,th=new D,Un=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Pm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);let t=eo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(eo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(th)),this.expandByPoint(eo.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ai=new D,nh=new D,Ea=new D,Ki=new D,ih=new D,wa=new D,sh=new D,yo=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){nh.copy(e).add(t).multiplyScalar(.5),Ea.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(nh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ea),a=Ki.dot(this.direction),c=-Ki.dot(Ea),l=Ki.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nh).addScaledVector(Ea,f),d}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);let i=Ai.dot(this.direction),s=Ai.dot(Ai)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,s,r){ih.subVectors(t,e),wa.subVectors(i,e),sh.crossVectors(ih,wa);let o=this.direction.dot(sh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);let c=a*this.direction.dot(wa.crossVectors(Ki,wa));if(c<0)return null;let l=a*this.direction.dot(ih.cross(Ki));if(l<0||c+l>o)return null;let h=-a*Ki.dot(sh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class n{constructor(e,t,i,s,r,o,a,c,l,h,u,f,d,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,f,d,p,x,g)}set(e,t,i,s,r,o,a,c,l,h,u,f,d,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/or.setFromMatrixColumn(e,0).length(),r=1/or.setFromMatrixColumn(e,1).length(),o=1/or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+p*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,p=l*h,x=l*u;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,p=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=c*h,t[4]=p*l-d,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,p=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+p,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,d=o*l,p=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lm,e,Dm)}lookAt(e,t,i){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),ji.crossVectors(i,Ln),ji.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),ji.crossVectors(i,Ln)),ji.normalize(),Ta.crossVectors(Ln,ji),s[0]=ji.x,s[4]=Ta.x,s[8]=Ln.x,s[1]=ji.y,s[5]=Ta.y,s[9]=Ln.y,s[2]=ji.z,s[6]=Ta.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],x=i[6],g=i[10],m=i[14],v=i[3],y=i[7],_=i[11],T=i[15],E=s[0],C=s[4],P=s[8],b=s[12],M=s[1],R=s[5],I=s[9],U=s[13],B=s[2],N=s[6],H=s[10],$=s[14],V=s[3],oe=s[7],le=s[11],ye=s[15];return r[0]=o*E+a*M+c*B+l*V,r[4]=o*C+a*R+c*N+l*oe,r[8]=o*P+a*I+c*H+l*le,r[12]=o*b+a*U+c*$+l*ye,r[1]=h*E+u*M+f*B+d*V,r[5]=h*C+u*R+f*N+d*oe,r[9]=h*P+u*I+f*H+d*le,r[13]=h*b+u*U+f*$+d*ye,r[2]=p*E+x*M+g*B+m*V,r[6]=p*C+x*R+g*N+m*oe,r[10]=p*P+x*I+g*H+m*le,r[14]=p*b+x*U+g*$+m*ye,r[3]=v*E+y*M+_*B+T*V,r[7]=v*C+y*R+_*N+T*oe,r[11]=v*P+y*I+_*H+T*le,r[15]=v*b+y*U+_*$+T*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*c*u-s*l*u-r*a*f+i*l*f+s*a*d-i*c*d)+x*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+g*(+t*l*u-t*a*d-r*o*u+i*o*d+r*a*h-i*l*h)+m*(-s*a*h-t*c*u+t*a*f+s*o*u-i*o*f+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],x=e[13],g=e[14],m=e[15],v=u*g*l-x*f*l+x*c*d-a*g*d-u*c*m+a*f*m,y=p*f*l-h*g*l-p*c*d+o*g*d+h*c*m-o*f*m,_=h*x*l-p*u*l+p*a*d-o*x*d-h*a*m+o*u*m,T=p*u*c-h*x*c-p*a*f+o*x*f+h*a*g-o*u*g,E=t*v+i*y+s*_+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/E;return e[0]=v*C,e[1]=(x*f*r-u*g*r-x*s*d+i*g*d+u*s*m-i*f*m)*C,e[2]=(a*g*r-x*c*r+x*s*l-i*g*l-a*s*m+i*c*m)*C,e[3]=(u*c*r-a*f*r-u*s*l+i*f*l+a*s*d-i*c*d)*C,e[4]=y*C,e[5]=(h*g*r-p*f*r+p*s*d-t*g*d-h*s*m+t*f*m)*C,e[6]=(p*c*r-o*g*r-p*s*l+t*g*l+o*s*m-t*c*m)*C,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*C,e[8]=_*C,e[9]=(p*u*r-h*x*r-p*i*d+t*x*d+h*i*m-t*u*m)*C,e[10]=(o*x*r-p*a*r+p*i*l-t*x*l-o*i*m+t*a*m)*C,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*d-t*a*d)*C,e[12]=T*C,e[13]=(h*x*s-p*u*s+p*i*f-t*x*f-h*i*g+t*u*g)*C,e[14]=(p*a*s-o*x*s-p*i*c+t*x*c+o*i*g-t*a*g)*C,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*f+t*a*f)*C,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,p=r*u,x=o*h,g=o*u,m=a*u,v=c*l,y=c*h,_=c*u,T=i.x,E=i.y,C=i.z;return s[0]=(1-(x+m))*T,s[1]=(d+_)*T,s[2]=(p-y)*T,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(f+m))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(p+y)*C,s[9]=(g-v)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=or.set(s[0],s[1],s[2]).length(),o=or.set(s[4],s[5],s[6]).length(),a=or.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kn.copy(this);let l=1/r,h=1/o,u=1/a;return Kn.elements[0]*=l,Kn.elements[1]*=l,Kn.elements[2]*=l,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=u,Kn.elements[9]*=u,Kn.elements[10]*=u,t.setFromRotationMatrix(Kn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ei,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(a===ei)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===xo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ei,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),p,x;if(c)p=1/(o-r),x=o/(o-r);else if(a===ei)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===xo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},or=new D,Kn=new lt,Lm=new D(0,0,0),Dm=new D(1,1,1),ji=new D,Ta=new D,Ln=new D,cd=new lt,ld=new en,ii=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ld.setFromEuler(this),this.setFromQuaternion(ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";var vo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Um=0,hd=new D,ar=new en,Ri=new lt,Aa=new D,to=new D,Nm=new D,Fm=new en,ud=new D(1,0,0),dd=new D(0,1,0),fd=new D(0,0,1),pd={type:"added"},Bm={type:"removed"},cr={type:"childadded",child:null},rh={type:"childremoved",child:null},pt=class n extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new ii,i=new en,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ke}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(ud,e)}rotateY(e){return this.rotateOnAxis(dd,e)}rotateZ(e){return this.rotateOnAxis(fd,e)}translateOnAxis(e,t){return hd.copy(e).applyQuaternion(this.quaternion),this.position.add(hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ud,e)}translateY(e){return this.translateOnAxis(dd,e)}translateZ(e){return this.translateOnAxis(fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Aa.copy(e):Aa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(to,Aa,this.up):Ri.lookAt(Aa,to,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),ar.setFromRotationMatrix(Ri),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pd),cr.child=e,this.dispatchEvent(cr),cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bm),rh.child=e,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pd),cr.child=e,this.dispatchEvent(cr),cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,Nm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,Fm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};pt.DEFAULT_UP=new D(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=new D,Ci=new D,oh=new D,Ii=new D,lr=new D,hr=new D,md=new D,ah=new D,ch=new D,lh=new D,hh=new xt,uh=new xt,dh=new xt,Pi=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),jn.subVectors(e,t),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){jn.subVectors(s,t),Ci.subVectors(i,t),oh.subVectors(e,t);let o=jn.dot(jn),a=jn.dot(Ci),c=jn.dot(oh),l=Ci.dot(Ci),h=Ci.dot(oh),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ii.x),c.addScaledVector(o,Ii.y),c.addScaledVector(a,Ii.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return hh.setScalar(0),uh.setScalar(0),dh.setScalar(0),hh.fromBufferAttribute(e,t),uh.fromBufferAttribute(e,i),dh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(hh,r.x),o.addScaledVector(uh,r.y),o.addScaledVector(dh,r.z),o}static isFrontFacing(e,t,i,s){return jn.subVectors(i,t),Ci.subVectors(e,t),jn.cross(Ci).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),jn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;lr.subVectors(s,i),hr.subVectors(r,i),ah.subVectors(e,i);let c=lr.dot(ah),l=hr.dot(ah);if(c<=0&&l<=0)return t.copy(i);ch.subVectors(e,s);let h=lr.dot(ch),u=hr.dot(ch);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(lr,o);lh.subVectors(e,r);let d=lr.dot(lh),p=hr.dot(lh);if(p>=0&&d<=p)return t.copy(r);let x=d*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(i).addScaledVector(hr,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return md.subVectors(r,s),a=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(md,a);let m=1/(g+x+f);return o=x*m,a=f*m,t.copy(i).addScaledVector(lr,o).addScaledVector(hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function fh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ht.workingColorSpace){if(e=jh(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=fh(o,r,e+1/3),this.g=fh(o,r,e),this.b=fh(o,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let i=Mf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return ht.workingToColorSpace(ln.copy(this),e),Math.round(et(ln.r*255,0,255))*65536+Math.round(et(ln.g*255,0,255))*256+Math.round(et(ln.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(ln.copy(this),t);let i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Rt){ht.workingToColorSpace(ln.copy(this),e);let t=ln.r,i=ln.g,s=ln.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Ra);let i=uo(Qi.h,Ra.h,t),s=uo(Qi.s,Ra.s,t),r=uo(Qi.l,Ra.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Be;Be.NAMES=Mf;var Om=0,yi=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Es,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Ka,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ja&&(i.blendSrc=this.blendSrc),this.blendDst!==Ka&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Th&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},sn=class extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Vt=new D,Ca=new re,zm=0,St=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ec,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix3(e),this.setXY(t,Ca.x,Ca.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ec&&(e.usage=this.usage),e}};var Mo=class extends St{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var So=class extends St{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ke=class extends St{constructor(e,t,i){super(new Float32Array(e),t,i)}},Hm=0,Gn=new lt,ph=new pt,ur=new D,Dn=new _i,no=new _i,Qt=new D,rt=class n extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?So:Mo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ke(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];no.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(Dn.min,no.min),Dn.expandByPoint(Qt),Qt.addVectors(Dn.max,no.max),Dn.expandByPoint(Qt)):(Dn.expandByPoint(no.min),Dn.expandByPoint(no.max))}Dn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Qt.fromBufferAttribute(a,l),c&&(ur.fromBufferAttribute(e,l),Qt.add(ur)),s=Math.max(s,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<i.count;P++)a[P]=new D,c[P]=new D;let l=new D,h=new D,u=new D,f=new re,d=new re,p=new re,x=new D,g=new D;function m(P,b,M){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),p.sub(f);let R=1/(d.x*p.y-p.x*d.y);isFinite(R)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(R),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(R),a[P].add(x),a[b].add(x),a[M].add(x),c[P].add(g),c[b].add(g),c[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,b=v.length;P<b;++P){let M=v[P],R=M.start,I=M.count;for(let U=R,B=R+I;U<B;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let y=new D,_=new D,T=new D,E=new D;function C(P){T.fromBufferAttribute(s,P),E.copy(T);let b=a[P];y.copy(b),y.sub(T.multiplyScalar(T.dot(b))).normalize(),_.crossVectors(E,b);let R=_.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,R)}for(let P=0,b=v.length;P<b;++P){let M=v[P],R=M.start,I=M.count;for(let U=R,B=R+I;U<B;U+=3)C(e.getX(U+0)),C(e.getX(U+1)),C(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),a.add(h),c.add(h),l.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,p=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let m=0;m<h;m++)f[p++]=l[d++]}return new St(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gd=new lt,Ms=new yo,Ia=new Un,xd=new D,Pa=new D,La=new D,Da=new D,mh=new D,Ua=new D,_d=new D,Na=new D,nt=class extends pt{constructor(e=new rt,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ua.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(mh.fromBufferAttribute(u,e),o?Ua.addScaledVector(mh,h):Ua.addScaledVector(mh.sub(t),h))}t.add(Ua)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(r),Ms.copy(e.ray).recast(e.near),!(Ia.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(Ia,xd)===null||Ms.origin.distanceToSquared(xd)>(e.far-e.near)**2))&&(gd.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(gd),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],v=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=v,T=y;_<T;_+=3){let E=a.getX(_),C=a.getX(_+1),P=a.getX(_+2);s=Fa(this,m,e,i,l,h,u,E,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let v=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);s=Fa(this,o,e,i,l,h,u,v,y,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],v=Math.max(g.start,d.start),y=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let _=v,T=y;_<T;_+=3){let E=_,C=_+1,P=_+2;s=Fa(this,m,e,i,l,h,u,E,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let v=g,y=g+1,_=g+2;s=Fa(this,o,e,i,l,h,u,v,y,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function km(n,e,t,i,s,r,o,a){let c;if(e.side===vn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Di,a),c===null)return null;Na.copy(a),Na.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Na);return l<t.near||l>t.far?null:{distance:l,point:Na.clone(),object:n}}function Fa(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Pa),n.getVertexPosition(c,La),n.getVertexPosition(l,Da);let h=km(n,e,t,i,Pa,La,Da,_d);if(h){let u=new D;Pi.getBarycoord(_d,Pa,La,Da,u),s&&(h.uv=Pi.getInterpolatedAttribute(s,a,c,l,u,new re)),r&&(h.uv1=Pi.getInterpolatedAttribute(r,a,c,l,u,new re)),o&&(h.normal=Pi.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new D,materialIndex:0};Pi.getNormal(Pa,La,Da,f.normal),h.face=f,h.barycoord=u}return h}var zt=class n extends rt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(u,2));function p(x,g,m,v,y,_,T,E,C,P,b){let M=_/C,R=T/P,I=_/2,U=T/2,B=E/2,N=C+1,H=P+1,$=0,V=0,oe=new D;for(let le=0;le<H;le++){let ye=le*R-U;for(let ve=0;ve<N;ve++){let Ze=ve*M-I;oe[x]=Ze*v,oe[g]=ye*y,oe[m]=B,l.push(oe.x,oe.y,oe.z),oe[x]=0,oe[g]=0,oe[m]=E>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(ve/C),u.push(1-le/P),$+=1}}for(let le=0;le<P;le++)for(let ye=0;ye<C;ye++){let ve=f+ye+N*le,Ze=f+ye+N*(le+1),it=f+(ye+1)+N*(le+1),qe=f+(ye+1)+N*le;c.push(ve,Ze,qe),c.push(Ze,it,qe),V+=6}a.addGroup(d,V,b),d+=V,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Bs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function un(n){let e={};for(let t=0;t<n.length;t++){let i=Bs(n[t]);for(let s in i)e[s]=i[s]}return e}function Vm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function eu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Sf={clone:Bs,merge:un},Gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gm,this.fragmentShader=Wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=Vm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},bo=class extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},es=new D,yd=new re,vd=new re,Gt=class extends bo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,yd,vd),t.subVectors(vd,yd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ho*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},dr=-90,fr=1,sc=class extends pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(dr,fr,e,t);s.layers=this.layers,this.add(s);let r=new Gt(dr,fr,e,t);r.layers=this.layers,this.add(r);let o=new Gt(dr,fr,e,t);o.layers=this.layers,this.add(o);let a=new Gt(dr,fr,e,t);a.layers=this.layers,this.add(a);let c=new Gt(dr,fr,e,t);c.layers=this.layers,this.add(c);let l=new Gt(dr,fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Eo=class extends hn{constructor(e=[],t=Ns,i,s,r,o,a,c,l,h){super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rc=class extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Eo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zt(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:Bi});r.uniforms.tEquirect.value=t;let o=new nt(s,r),a=t.minFilter;return t.minFilter===as&&(t.minFilter=ni),new sc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},st=class extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xm={type:"move"},wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,i),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new st;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var wo=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rs=class extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},To=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ec,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new D,Tr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ar=class extends yi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pr,io=new D,mr=new D,gr=new D,xr=new re,so=new re,bf=new lt,Ba=new D,ro=new D,Oa=new D,Md=new re,gh=new re,Sd=new re,Ao=class extends pt{constructor(e=new Ar){if(super(),this.isSprite=!0,this.type="Sprite",pr===void 0){pr=new rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new To(t,5);pr.setIndex([0,1,2,0,2,3]),pr.setAttribute("position",new Tr(i,3,0,!1)),pr.setAttribute("uv",new Tr(i,2,3,!1))}this.geometry=pr,this.material=e,this.center=new re(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mr.setFromMatrixScale(this.matrixWorld),bf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mr.multiplyScalar(-gr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;za(Ba.set(-.5,-.5,0),gr,o,mr,s,r),za(ro.set(.5,-.5,0),gr,o,mr,s,r),za(Oa.set(.5,.5,0),gr,o,mr,s,r),Md.set(0,0),gh.set(1,0),Sd.set(1,1);let a=e.ray.intersectTriangle(Ba,ro,Oa,!1,io);if(a===null&&(za(ro.set(-.5,.5,0),gr,o,mr,s,r),gh.set(0,1),a=e.ray.intersectTriangle(Ba,Oa,ro,!1,io),a===null))return;let c=e.ray.origin.distanceTo(io);c<e.near||c>e.far||t.push({distance:c,point:io.clone(),uv:Pi.getInterpolation(io,Ba,ro,Oa,Md,gh,Sd,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function za(n,e,t,i,s,r){xr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(so.x=r*xr.x-s*xr.y,so.y=s*xr.x+r*xr.y):so.copy(xr),n.copy(e),n.x+=so.x,n.y+=so.y,n.applyMatrix4(bf)}var oc=class extends hn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=wn,h=wn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rr=class extends St{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_r=new lt,bd=new lt,Ha=[],Ed=new _i,qm=new lt,oo=new nt,ao=new Un,Tn=class extends nt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,qm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_r),Ed.copy(e.boundingBox).applyMatrix4(_r),this.boundingBox.union(Ed)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_r),ao.copy(e.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(i),e.ray.intersectsSphere(ao)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_r),bd.multiplyMatrices(i,_r),oo.matrixWorld=bd,oo.raycast(e,Ha);for(let o=0,a=Ha.length;o<a;o++){let c=Ha[o];c.instanceId=r,c.object=this,t.push(c)}Ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new oc(new Float32Array(s*this.count),s,this.count,zc,ci));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xh=new D,Ym=new D,Zm=new Ke,pi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=xh.subVectors(i,t).cross(Ym.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(xh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Zm.getNormalMatrix(e),s=this.coplanarPoint(xh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ss=new Un,$m=new re(.5,.5),ka=new D,is=class{constructor(e=new pi,t=new pi,i=new pi,s=new pi,r=new pi,o=new pi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],v=r[12],y=r[13],_=r[14],T=r[15];if(s[0].setComponents(l-o,d-h,m-p,T-v).normalize(),s[1].setComponents(l+o,d+h,m+p,T+v).normalize(),s[2].setComponents(l+a,d+u,m+x,T+y).normalize(),s[3].setComponents(l-a,d-u,m-x,T-y).normalize(),i)s[4].setComponents(c,f,g,_).normalize(),s[5].setComponents(l-c,d-f,m-g,T-_).normalize();else if(s[4].setComponents(l-c,d-f,m-g,T-_).normalize(),t===ei)s[5].setComponents(l+c,d+f,m+g,T+_).normalize();else if(t===xo)s[5].setComponents(c,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);let t=$m.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ka.x=s.normal.x>0?e.max.x:e.min.x,ka.y=s.normal.y>0?e.max.y:e.min.y,ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ss=class extends yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wd=new lt,Ah=new yo,Va=new Un,Ga=new D,Ni=class extends pt{constructor(e=new rt,t=new ss){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(s),Va.radius+=r,e.ray.intersectsSphere(Va)===!1)return;wd.copy(s).invert(),Ah.copy(e.ray).applyMatrix4(wd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let g=l.getX(p);Ga.fromBufferAttribute(u,g),Td(Ga,g,c,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)Ga.fromBufferAttribute(u,p),Td(Ga,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Td(n,e,t,i,s,r,o){let a=Ah.distanceSqToPoint(n);if(a<t){let c=new D;Ah.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var _n=class extends hn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ro=class extends hn{constructor(e,t,i=cs,s,r,o,a=wn,c=wn,l,h=Mr,u=1){if(h!==Mr&&h!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Er(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Co=class extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Wn=class n extends rt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new D,h=new re;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(a,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ht=class n extends rt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],g=i/2,m=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ke(u,3)),this.setAttribute("normal",new ke(f,3)),this.setAttribute("uv",new ke(d,2));function v(){let _=new D,T=new D,E=0,C=(t-e)/i;for(let P=0;P<=r;P++){let b=[],M=P/r,R=M*(t-e)+e;for(let I=0;I<=s;I++){let U=I/s,B=U*c+a,N=Math.sin(B),H=Math.cos(B);T.x=R*N,T.y=-M*i+g,T.z=R*H,u.push(T.x,T.y,T.z),_.set(N,C,H).normalize(),f.push(_.x,_.y,_.z),d.push(U,1-M),b.push(p++)}x.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){let M=x[b][P],R=x[b+1][P],I=x[b+1][P+1],U=x[b][P+1];(e>0||b!==0)&&(h.push(M,R,U),E+=3),(t>0||b!==r-1)&&(h.push(R,I,U),E+=3)}l.addGroup(m,E,0),m+=E}function y(_){let T=p,E=new re,C=new D,P=0,b=_===!0?e:t,M=_===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),p++;let R=p;for(let I=0;I<=s;I++){let B=I/s*c+a,N=Math.cos(B),H=Math.sin(B);C.x=b*H,C.y=g*M,C.z=b*N,u.push(C.x,C.y,C.z),f.push(0,M,0),E.x=N*.5+.5,E.y=H*.5*M+.5,d.push(E.x,E.y),p++}for(let I=0;I<s;I++){let U=T+I,B=R+I;_===!0?h.push(B,B+1,U):h.push(B+1,B,U),P+=3}l.addGroup(m,P,_===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},si=class n extends Ht{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ac=class n extends rt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new ke(r,3)),this.setAttribute("normal",new ke(r.slice(),3)),this.setAttribute("uv",new ke(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new D,_=new D,T=new D;for(let E=0;E<t.length;E+=3)d(t[E+0],y),d(t[E+1],_),d(t[E+2],T),c(y,_,T,v)}function c(v,y,_,T){let E=T+1,C=[];for(let P=0;P<=E;P++){C[P]=[];let b=v.clone().lerp(_,P/E),M=y.clone().lerp(_,P/E),R=E-P;for(let I=0;I<=R;I++)I===0&&P===E?C[P][I]=b:C[P][I]=b.clone().lerp(M,I/R)}for(let P=0;P<E;P++)for(let b=0;b<2*(E-P)-1;b++){let M=Math.floor(b/2);b%2===0?(f(C[P][M+1]),f(C[P+1][M]),f(C[P][M])):(f(C[P][M+1]),f(C[P+1][M+1]),f(C[P+1][M]))}}function l(v){let y=new D;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let v=new D;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let _=g(v)/2/Math.PI+.5,T=m(v)/Math.PI+.5;o.push(_,1-T)}p(),u()}function u(){for(let v=0;v<o.length;v+=6){let y=o[v+0],_=o[v+2],T=o[v+4],E=Math.max(y,_,T),C=Math.min(y,_,T);E>.9&&C<.1&&(y<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,y){let _=v*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function p(){let v=new D,y=new D,_=new D,T=new D,E=new re,C=new re,P=new re;for(let b=0,M=0;b<r.length;b+=9,M+=6){v.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),E.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),T.copy(v).add(y).add(_).divideScalar(3);let R=g(T);x(E,M+0,v,R),x(C,M+2,y,R),x(P,M+4,_,R)}}function x(v,y,_,T){T<0&&v.x===1&&(o[y]=v.x-1),_.x===0&&_.z===0&&(o[y]=T/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new re:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new D,s=[],r=[],o=[],a=new D,c=new lt;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(et(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(et(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Cr=class extends Nn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new re){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},cc=class extends Cr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function tu(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Wa=new D,_h=new tu,yh=new tu,vh=new tu,yn=class extends Nn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Wa.subVectors(s[0],s[1]).add(s[0]),l=Wa);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Wa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Wa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),_h.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,p,x,g),yh.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,p,x,g),vh.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(_h.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),yh.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),vh.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(_h.calc(c),yh.calc(c),vh.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ad(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Jm(n,e){let t=1-n;return t*t*e}function Km(n,e){return 2*(1-n)*n*e}function jm(n,e){return n*n*e}function fo(n,e,t,i){return Jm(n,e)+Km(n,t)+jm(n,i)}function Qm(n,e){let t=1-n;return t*t*t*e}function eg(n,e){let t=1-n;return 3*t*t*n*e}function tg(n,e){return 3*(1-n)*n*n*e}function ng(n,e){return n*n*n*e}function po(n,e,t,i,s){return Qm(n,e)+eg(n,t)+tg(n,i)+ng(n,s)}var Io=class extends Nn{constructor(e=new re,t=new re,i=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(po(e,s.x,r.x,o.x,a.x),po(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lc=class extends Nn{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(po(e,s.x,r.x,o.x,a.x),po(e,s.y,r.y,o.y,a.y),po(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Po=class extends Nn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hc=class extends Nn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lo=class extends Nn{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(fo(e,s.x,r.x,o.x),fo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends Nn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(fo(e,s.x,r.x,o.x),fo(e,s.y,r.y,o.y),fo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends Nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Ad(a,c.x,l.x,h.x,u.x),Ad(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},uc=Object.freeze({__proto__:null,ArcCurve:cc,CatmullRomCurve3:yn,CubicBezierCurve:Io,CubicBezierCurve3:lc,EllipseCurve:Cr,LineCurve:Po,LineCurve3:hc,QuadraticBezierCurve:Lo,QuadraticBezierCurve3:Do,SplineCurve:Uo}),dc=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new uc[s.type]().fromJSON(s))}return this}},No=class extends dc{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Po(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Lo(this.currentPoint.clone(),new re(e,t),new re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Io(this.currentPoint.clone(),new re(e,t),new re(i,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Uo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new Cr(e,t,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Fi=class extends No{constructor(e){super(e),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new No().fromJSON(s))}return this}};function ig(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Ef(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=cg(n,e,r,t)),n.length>80*t){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){let d=n[f],p=n[f+1];d<a&&(a=d),p<c&&(c=p),d>h&&(h=d),p>u&&(u=p)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Fo(r,o,t,a,c,l,0),o}function Ef(n,e,t,i,s){let r;if(s===yg(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Rd(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Rd(o/i|0,n[o],n[o+1],r);return r&&Ir(r,r.next)&&(Oo(r),r=r.next),r}function Cs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ir(t,t.next)||Lt(t.prev,t,t.next)===0)){if(Oo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Fo(n,e,t,i,s,r,o){if(!n)return;!o&&r&&fg(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?rg(n,i,s,r):sg(n)){e.push(c.i,n.i,l.i),Oo(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=og(Cs(n),e),Fo(n,e,t,i,s,r,2)):o===2&&ag(n,e,t,i,s,r):Fo(Cs(n),e,t,i,s,r,1);break}}}function sg(n){let e=n.prev,t=n,i=n.next;if(Lt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&lo(s,a,r,c,o,l,p.x,p.y)&&Lt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function rg(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Lt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),p=Math.min(h,u,f),x=Math.max(a,c,l),g=Math.max(h,u,f),m=Rh(d,p,e,t,i),v=Rh(x,g,e,t,i),y=n.prevZ,_=n.nextZ;for(;y&&y.z>=m&&_&&_.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&lo(a,h,c,u,l,f,y.x,y.y)&&Lt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&lo(a,h,c,u,l,f,_.x,_.y)&&Lt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&lo(a,h,c,u,l,f,y.x,y.y)&&Lt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&lo(a,h,c,u,l,f,_.x,_.y)&&Lt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function og(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Ir(i,s)&&Tf(i,t,t.next,s)&&Bo(i,s)&&Bo(s,i)&&(e.push(i.i,t.i,s.i),Oo(t),Oo(t.next),t=n=s),t=t.next}while(t!==n);return Cs(t)}function ag(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gg(o,a)){let c=Af(o,a);o=Cs(o,o.next),c=Cs(c,c.next),Fo(o,e,t,i,s,r,0),Fo(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function cg(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=Ef(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(mg(l))}s.sort(lg);for(let r=0;r<s.length;r++)t=hg(s[r],t);return t}function lg(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function hg(n,e){let t=ug(n,e);if(!t)return e;let i=Af(t,n);return Cs(i,i.next),Cs(t,t.next)}function ug(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Ir(n,t))return t;do{if(Ir(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&wf(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);Bo(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&dg(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function dg(n,e){return Lt(n.prev,n,e.prev)<0&&Lt(e.next,n,n.next)<0}function fg(n,e,t,i){let s=n;do s.z===0&&(s.z=Rh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,pg(s)}function pg(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Rh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function mg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function wf(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function lo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&wf(n,e,t,i,s,r,o,a)}function gg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!xg(n,e)&&(Bo(n,e)&&Bo(e,n)&&_g(n,e)&&(Lt(n.prev,n,e.prev)||Lt(n,e.prev,e))||Ir(n,e)&&Lt(n.prev,n,n.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ir(n,e){return n.x===e.x&&n.y===e.y}function Tf(n,e,t,i){let s=qa(Lt(n,e,t)),r=qa(Lt(n,e,i)),o=qa(Lt(t,i,n)),a=qa(Lt(t,i,e));return!!(s!==r&&o!==a||s===0&&Xa(n,t,e)||r===0&&Xa(n,i,e)||o===0&&Xa(t,n,i)||a===0&&Xa(t,e,i))}function Xa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function qa(n){return n>0?1:n<0?-1:0}function xg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Tf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Bo(n,e){return Lt(n.prev,n,n.next)<0?Lt(n,e,n.next)>=0&&Lt(n,n.prev,e)>=0:Lt(n,e,n.prev)<0||Lt(n,n.next,e)<0}function _g(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Af(n,e){let t=Ch(n.i,n.x,n.y),i=Ch(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Rd(n,e,t,i){let s=Ch(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Oo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ch(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yg(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Ih=class{static triangulate(e,t,i=2){return ig(e,t,i)}},mi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Cd(e),Id(i,e);let o=e.length;t.forEach(Cd);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Id(i,t[c]);let a=Ih.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Cd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Id(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var zo=class n extends rt{constructor(e=new Fi([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:vg,y,_=!1,T,E,C,P;m&&(y=m.getSpacedPoints(h),_=!0,f=!1,T=m.computeFrenetFrames(h,!1),E=new D,C=new D,P=new D),f||(g=0,d=0,p=0,x=0);let b=a.extractPoints(l),M=b.shape,R=b.holes;if(!mi.isClockWise(M)){M=M.reverse();for(let te=0,ne=R.length;te<ne;te++){let q=R[te];mi.isClockWise(q)&&(R[te]=q.reverse())}}function U(te){let q=10000000000000001e-36,K=te[0];for(let de=1;de<=te.length;de++){let ee=de%te.length,F=te[ee],Q=F.x-K.x,ie=F.y-K.y,w=Q*Q+ie*ie,S=Math.max(Math.abs(F.x),Math.abs(F.y),Math.abs(K.x),Math.abs(K.y)),O=q*S*S;if(w<=O){te.splice(ee,1),de--;continue}K=F}}U(M),R.forEach(U);let B=R.length,N=M;for(let te=0;te<B;te++){let ne=R[te];M=M.concat(ne)}function H(te,ne,q){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(ne,q)}let $=M.length;function V(te,ne,q){let K,de,ee,F=te.x-ne.x,Q=te.y-ne.y,ie=q.x-te.x,w=q.y-te.y,S=F*F+Q*Q,O=F*w-Q*ie;if(Math.abs(O)>Number.EPSILON){let X=Math.sqrt(S),se=Math.sqrt(ie*ie+w*w),Y=ne.x-Q/X,Ae=ne.y+F/X,pe=q.x-w/se,Re=q.y+ie/se,Pe=((pe-Y)*w-(Re-Ae)*ie)/(F*w-Q*ie);K=Y+F*Pe-te.x,de=Ae+Q*Pe-te.y;let he=K*K+de*de;if(he<=2)return new re(K,de);ee=Math.sqrt(he/2)}else{let X=!1;F>Number.EPSILON?ie>Number.EPSILON&&(X=!0):F<-Number.EPSILON?ie<-Number.EPSILON&&(X=!0):Math.sign(Q)===Math.sign(w)&&(X=!0),X?(K=-Q,de=F,ee=Math.sqrt(S)):(K=F,de=Q,ee=Math.sqrt(S/2))}return new re(K/ee,de/ee)}let oe=[];for(let te=0,ne=N.length,q=ne-1,K=te+1;te<ne;te++,q++,K++)q===ne&&(q=0),K===ne&&(K=0),oe[te]=V(N[te],N[q],N[K]);let le=[],ye,ve=oe.concat();for(let te=0,ne=B;te<ne;te++){let q=R[te];ye=[];for(let K=0,de=q.length,ee=de-1,F=K+1;K<de;K++,ee++,F++)ee===de&&(ee=0),F===de&&(F=0),ye[K]=V(q[K],q[ee],q[F]);le.push(ye),ve=ve.concat(ye)}let Ze;if(g===0)Ze=mi.triangulateShape(N,R);else{let te=[],ne=[];for(let q=0;q<g;q++){let K=q/g,de=d*Math.cos(K*Math.PI/2),ee=p*Math.sin(K*Math.PI/2)+x;for(let F=0,Q=N.length;F<Q;F++){let ie=H(N[F],oe[F],ee);Oe(ie.x,ie.y,-de),K===0&&te.push(ie)}for(let F=0,Q=B;F<Q;F++){let ie=R[F];ye=le[F];let w=[];for(let S=0,O=ie.length;S<O;S++){let X=H(ie[S],ye[S],ee);Oe(X.x,X.y,-de),K===0&&w.push(X)}K===0&&ne.push(w)}}Ze=mi.triangulateShape(te,ne)}let it=Ze.length,qe=p+x;for(let te=0;te<$;te++){let ne=f?H(M[te],ve[te],qe):M[te];_?(C.copy(T.normals[0]).multiplyScalar(ne.x),E.copy(T.binormals[0]).multiplyScalar(ne.y),P.copy(y[0]).add(C).add(E),Oe(P.x,P.y,P.z)):Oe(ne.x,ne.y,0)}for(let te=1;te<=h;te++)for(let ne=0;ne<$;ne++){let q=f?H(M[ne],ve[ne],qe):M[ne];_?(C.copy(T.normals[te]).multiplyScalar(q.x),E.copy(T.binormals[te]).multiplyScalar(q.y),P.copy(y[te]).add(C).add(E),Oe(P.x,P.y,P.z)):Oe(q.x,q.y,u/h*te)}for(let te=g-1;te>=0;te--){let ne=te/g,q=d*Math.cos(ne*Math.PI/2),K=p*Math.sin(ne*Math.PI/2)+x;for(let de=0,ee=N.length;de<ee;de++){let F=H(N[de],oe[de],K);Oe(F.x,F.y,u+q)}for(let de=0,ee=R.length;de<ee;de++){let F=R[de];ye=le[de];for(let Q=0,ie=F.length;Q<ie;Q++){let w=H(F[Q],ye[Q],K);_?Oe(w.x,w.y+y[h-1].y,y[h-1].x+q):Oe(w.x,w.y,u+q)}}}j(),ae();function j(){let te=s.length/3;if(f){let ne=0,q=$*ne;for(let K=0;K<it;K++){let de=Ze[K];W(de[2]+q,de[1]+q,de[0]+q)}ne=h+g*2,q=$*ne;for(let K=0;K<it;K++){let de=Ze[K];W(de[0]+q,de[1]+q,de[2]+q)}}else{for(let ne=0;ne<it;ne++){let q=Ze[ne];W(q[2],q[1],q[0])}for(let ne=0;ne<it;ne++){let q=Ze[ne];W(q[0]+$*h,q[1]+$*h,q[2]+$*h)}}i.addGroup(te,s.length/3-te,0)}function ae(){let te=s.length/3,ne=0;Te(N,ne),ne+=N.length;for(let q=0,K=R.length;q<K;q++){let de=R[q];Te(de,ne),ne+=de.length}i.addGroup(te,s.length/3-te,1)}function Te(te,ne){let q=te.length;for(;--q>=0;){let K=q,de=q-1;de<0&&(de=te.length-1);for(let ee=0,F=h+g*2;ee<F;ee++){let Q=$*ee,ie=$*(ee+1),w=ne+K+Q,S=ne+de+Q,O=ne+de+ie,X=ne+K+ie;xe(w,S,O,X)}}}function Oe(te,ne,q){c.push(te),c.push(ne),c.push(q)}function W(te,ne,q){He(te),He(ne),He(q);let K=s.length/3,de=v.generateTopUV(i,s,K-3,K-2,K-1);L(de[0]),L(de[1]),L(de[2])}function xe(te,ne,q,K){He(te),He(ne),He(K),He(ne),He(q),He(K);let de=s.length/3,ee=v.generateSideWallUV(i,s,de-6,de-3,de-2,de-1);L(ee[0]),L(ee[1]),L(ee[3]),L(ee[1]),L(ee[2]),L(ee[3])}function He(te){s.push(c[te*3+0]),s.push(c[te*3+1]),s.push(c[te*3+2])}function L(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Mg(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new uc[s.type]().fromJSON(s)),new n(i,e.options)}},vg={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new re(r,o),new re(a,c),new re(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new re(o,1-c),new re(l,1-u),new re(f,1-p),new re(x,1-m)]:[new re(a,1-c),new re(h,1-u),new re(d,1-p),new re(g,1-m)]}};function Mg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Is=class n extends ac{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ps=class n extends rt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=et(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new D,f=new re,d=new D,p=new D,x=new D,g=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(p)}for(let v=0;v<=t;v++){let y=i+v*h*s,_=Math.sin(y),T=Math.cos(y);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*_,u.y=e[E].y,u.z=e[E].x*T,o.push(u.x,u.y,u.z),f.x=v/t,f.y=E/(e.length-1),a.push(f.x,f.y);let C=c[3*E+0]*_,P=c[3*E+1],b=c[3*E+0]*T;l.push(C,P,b)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){let _=y+v*e.length,T=_,E=_+e.length,C=_+e.length+1,P=_+1;r.push(T,E,P),r.push(C,P,E)}this.setIndex(r),this.setAttribute("position",new ke(o,3)),this.setAttribute("uv",new ke(a,2)),this.setAttribute("normal",new ke(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var on=class n extends rt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let v=m*f-o;for(let y=0;y<l;y++){let _=y*u-r;p.push(_,-v,0),x.push(0,0,1),g.push(y/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){let y=v+l*m,_=v+l*(m+1),T=v+1+l*(m+1),E=v+1+l*m;d.push(y,_,E),d.push(_,T,E)}this.setIndex(d),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ho=class n extends rt{constructor(e=new Fi([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(r,3)),this.setAttribute("uv",new ke(o,2));function l(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,p=f.holes;mi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let v=p[g];mi.isClockWise(v)===!0&&(p[g]=v.reverse())}let x=mi.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let v=p[g];d=d.concat(v)}for(let g=0,m=d.length;g<m;g++){let v=d[g];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,m=x.length;g<m;g++){let v=x[g],y=v[0]+u,_=v[1]+u,T=v[2]+u;i.push(y,_,T),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Sg(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function Sg(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var tt=class n extends rt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,f=new D,d=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let v=[],y=m/i,_=0;m===0&&o===0?_=.5/t:m===i&&c===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){let E=T/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+y*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(E+_,1-y),v.push(l++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<t;v++){let y=h[m][v+1],_=h[m][v],T=h[m+1][v],E=h[m+1][v+1];(m!==0||o>0)&&d.push(y,_,E),(m!==i-1||c<Math.PI)&&d.push(_,T,E)}this.setIndex(d),this.setAttribute("position",new ke(p,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Tt=class n extends rt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new D,u=new D,f=new D;for(let d=0;d<=i;d++)for(let p=0;p<=s;p++){let x=p/s*r,g=d/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(p/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let p=1;p<=s;p++){let x=(s+1)*d+p-1,g=(s+1)*(d-1)+p-1,m=(s+1)*(d-1)+p,v=(s+1)*d+p;o.push(x,g,v),o.push(g,m,v)}this.setIndex(o),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var An=class n extends rt{constructor(e=new Do(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,c=new D,l=new re,h=new D,u=[],f=[],d=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new ke(u,3)),this.setAttribute("normal",new ke(f,3)),this.setAttribute("uv",new ke(d,2));function x(){for(let y=0;y<t;y++)g(y);g(r===!1?t:0),v(),m()}function g(y){h=e.getPointAt(y/t,h);let _=o.normals[y],T=o.binormals[y];for(let E=0;E<=s;E++){let C=E/s*Math.PI*2,P=Math.sin(C),b=-Math.cos(C);c.x=b*_.x+P*T.x,c.y=b*_.y+P*T.y,c.z=b*_.z+P*T.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,u.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=t;y++)for(let _=1;_<=s;_++){let T=(s+1)*(y-1)+(_-1),E=(s+1)*y+(_-1),C=(s+1)*y+_,P=(s+1)*(y-1)+_;p.push(T,E,P),p.push(E,C,P)}}function v(){for(let y=0;y<=t;y++)for(let _=0;_<=s;_++)l.x=y/t,l.y=_/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new uc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var At=class extends yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pr=class extends At{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Lr=class extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fc=class extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ya(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function bg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ls=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pc=class extends Ls{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Eh:r=e,a=2*t-i;break;case wh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Eh:o=e,c=2*i-t;break;case wh:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,v=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,y=(-1-d)*g+(1.5+d)*x+.5*p,_=d*g-d*x;for(let T=0;T!==a;++T)r[T]=m*o[h+T]+v*o[l+T]+y*o[c+T]+_*o[u+T];return r}},mc=class extends Ls{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},gc=class extends Ls{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Fn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ya(t,this.TimeBufferType),this.values=Ya(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ya(e.times,Array),values:Ya(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case mo:t=this.InterpolantFactoryMethodDiscrete;break;case Qa:t=this.InterpolantFactoryMethodLinear;break;case Za:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return Qa;case this.InterpolantFactoryMethodSmooth:return Za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&bg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Za,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let x=t[u+p];if(x!==t[f+p]||x!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Qa;var rs=class extends Fn{constructor(e,t,i){super(e,t,i)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=mo;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var xc=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}};xc.prototype.ValueTypeName="color";var _c=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}};_c.prototype.ValueTypeName="number";var yc=class extends Ls{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)en.slerpFlat(r,0,o,l-a,o,l,c);return r}},ko=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new yc(this.times,this.values,this.getValueSize(),e)}};ko.prototype.ValueTypeName="quaternion";ko.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends Fn{constructor(e,t,i){super(e,t,i)}};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=mo;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var vc=class extends Fn{constructor(e,t,i,s){super(e,t,i,s)}};vc.prototype.ValueTypeName="vector";var $a={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Mc=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Rf=new Mc,Dr=class{constructor(e){this.manager=e!==void 0?e:Rf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Dr.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=new WeakMap,Sc=class extends Dr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=$a.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=yr.get(o);u===void 0&&(u=[],yr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Sr("img");function c(){h(),t&&t(this);let u=yr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}yr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),$a.remove(`image:${e}`);let f=yr.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}yr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),$a.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Vo=class extends Dr{constructor(e){super(e)}load(e,t,i,s){let r=new hn,o=new Sc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Ds=class extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Us=class extends Ds{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Mh=new lt,Pd=new D,Ld=new D,Go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new is,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Pd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pd),Ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ld),t.updateMatrixWorld(),Mh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ph=class extends Go{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=As*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Wo=class extends Ds{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ph}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Dd=new lt,co=new D,Sh=new D,Lh=class extends Go{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),co.setFromMatrixPosition(e.matrixWorld),i.position.copy(co),Sh.copy(i.position),Sh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Sh),i.updateMatrixWorld(),s.makeTranslation(-co.x,-co.y,-co.z),Dd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dd,i.coordinateSystem,i.reversedDepth)}},ri=class extends Ds{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Lh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Xo=class extends bo{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Dh=class extends Go{constructor(){super(new Xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ur=class extends Ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Dh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var bc=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var nu="\\[\\]\\.:\\/",Eg=new RegExp("["+nu+"]","g"),iu="[^"+nu+"]",wg="[^"+nu.replace("\\.","")+"]",Tg=/((?:WC+[\/:])*)/.source.replace("WC",iu),Ag=/(WCOD+)?/.source.replace("WCOD",wg),Rg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),Cg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),Ig=new RegExp("^"+Tg+Ag+Rg+Cg+"$"),Pg=["material","materials","bones","map"],Uh=class{constructor(e,t,i){let s=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},wt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Eg,"")}static parseTrackName(e){let t=Ig.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Pg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Uh;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uM=new Float32Array(1);function su(n,e,t,i){let s=Lg(i);switch(t){case Xh:return n*e;case zc:return n*e/s.components*s.byteLength;case Hc:return n*e/s.components*s.byteLength;case Yh:return n*e*2/s.components*s.byteLength;case kc:return n*e*2/s.components*s.byteLength;case qh:return n*e*3/s.components*s.byteLength;case Xn:return n*e*4/s.components*s.byteLength;case Vc:return n*e*4/s.components*s.byteLength;case Zo:case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jo:case Ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wc:case qc:return Math.max(n,16)*Math.max(e,8)/4;case Gc:case Xc:return Math.max(n,8)*Math.max(e,8)/2;case Yc:case Zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case il:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case cl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case hl:case ul:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fl:case pl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ml:case gl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lg(n){switch(n){case ai:case kh:return{byteLength:1,components:1};case Nr:case Vh:case Fr:return{byteLength:2,components:1};case Bc:case Oc:return{byteLength:2,components:4};case cs:case Fc:case ci:return{byteLength:4,components:1};case Gh:case Wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function jf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Bg(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zg=`#ifdef USE_ALPHAHASH
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
#endif`,Hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wg=`#ifdef USE_AOMAP
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
#endif`,Xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qg=`#ifdef USE_BATCHING
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
#endif`,Yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kg=`#ifdef USE_IRIDESCENCE
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
#endif`,jg=`#ifdef USE_BUMPMAP
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
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,a0=`#define PI 3.141592653589793
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
} // validated`,c0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l0=`vec3 transformedNormal = objectNormal;
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
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p0="gl_FragColor = linearToOutputTexel( gl_FragColor );",m0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w0=`#ifdef USE_GRADIENTMAP
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
}`,T0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C0=`uniform bool receiveShadow;
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
#endif`,I0=`#ifdef USE_ENVMAP
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
#endif`,P0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N0=`PhysicalMaterial material;
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
#endif`,F0=`struct PhysicalMaterial {
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
}`,B0=`
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y0=`#if defined( USE_POINTS_UV )
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
#endif`,Z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`#ifdef USE_MORPHTARGETS
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
#endif`,ex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ox=`#ifdef USE_NORMALMAP
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
#endif`,ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sx=`float getShadowMask() {
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
}`,bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ex=`#ifdef USE_SKINNING
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
#endif`,wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tx=`#ifdef USE_SKINNING
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
#endif`,Ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ix=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Px=`#ifdef USE_TRANSMISSION
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
#endif`,Lx=`#ifdef USE_TRANSMISSION
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ox=`uniform sampler2D t2D;
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`#include <common>
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
}`,Wx=`#if DEPTH_PACKING == 3200
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
}`,Xx=`#define DISTANCE
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
}`,qx=`#define DISTANCE
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`uniform float scale;
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
}`,Jx=`uniform vec3 diffuse;
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
}`,Kx=`#include <common>
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
}`,jx=`uniform vec3 diffuse;
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
}`,Qx=`#define LAMBERT
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
}`,e_=`#define LAMBERT
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
}`,t_=`#define MATCAP
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
}`,n_=`#define MATCAP
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
}`,i_=`#define NORMAL
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
}`,s_=`#define NORMAL
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
}`,r_=`#define PHONG
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
}`,o_=`#define PHONG
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
}`,a_=`#define STANDARD
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
}`,c_=`#define STANDARD
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
}`,l_=`#define TOON
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
}`,h_=`#define TOON
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
}`,u_=`uniform float size;
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
}`,d_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,p_=`uniform vec3 color;
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
}`,m_=`uniform float rotation;
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
}`,g_=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Og,alphahash_pars_fragment:zg,alphamap_fragment:Hg,alphamap_pars_fragment:kg,alphatest_fragment:Vg,alphatest_pars_fragment:Gg,aomap_fragment:Wg,aomap_pars_fragment:Xg,batching_pars_vertex:qg,batching_vertex:Yg,begin_vertex:Zg,beginnormal_vertex:$g,bsdfs:Jg,iridescence_fragment:Kg,bumpmap_pars_fragment:jg,clipping_planes_fragment:Qg,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:t0,clipping_planes_vertex:n0,color_fragment:i0,color_pars_fragment:s0,color_pars_vertex:r0,color_vertex:o0,common:a0,cube_uv_reflection_fragment:c0,defaultnormal_vertex:l0,displacementmap_pars_vertex:h0,displacementmap_vertex:u0,emissivemap_fragment:d0,emissivemap_pars_fragment:f0,colorspace_fragment:p0,colorspace_pars_fragment:m0,envmap_fragment:g0,envmap_common_pars_fragment:x0,envmap_pars_fragment:_0,envmap_pars_vertex:y0,envmap_physical_pars_fragment:I0,envmap_vertex:v0,fog_vertex:M0,fog_pars_vertex:S0,fog_fragment:b0,fog_pars_fragment:E0,gradientmap_pars_fragment:w0,lightmap_pars_fragment:T0,lights_lambert_fragment:A0,lights_lambert_pars_fragment:R0,lights_pars_begin:C0,lights_toon_fragment:P0,lights_toon_pars_fragment:L0,lights_phong_fragment:D0,lights_phong_pars_fragment:U0,lights_physical_fragment:N0,lights_physical_pars_fragment:F0,lights_fragment_begin:B0,lights_fragment_maps:O0,lights_fragment_end:z0,logdepthbuf_fragment:H0,logdepthbuf_pars_fragment:k0,logdepthbuf_pars_vertex:V0,logdepthbuf_vertex:G0,map_fragment:W0,map_pars_fragment:X0,map_particle_fragment:q0,map_particle_pars_fragment:Y0,metalnessmap_fragment:Z0,metalnessmap_pars_fragment:$0,morphinstance_vertex:J0,morphcolor_vertex:K0,morphnormal_vertex:j0,morphtarget_pars_vertex:Q0,morphtarget_vertex:ex,normal_fragment_begin:tx,normal_fragment_maps:nx,normal_pars_fragment:ix,normal_pars_vertex:sx,normal_vertex:rx,normalmap_pars_fragment:ox,clearcoat_normal_fragment_begin:ax,clearcoat_normal_fragment_maps:cx,clearcoat_pars_fragment:lx,iridescence_pars_fragment:hx,opaque_fragment:ux,packing:dx,premultiplied_alpha_fragment:fx,project_vertex:px,dithering_fragment:mx,dithering_pars_fragment:gx,roughnessmap_fragment:xx,roughnessmap_pars_fragment:_x,shadowmap_pars_fragment:yx,shadowmap_pars_vertex:vx,shadowmap_vertex:Mx,shadowmask_pars_fragment:Sx,skinbase_vertex:bx,skinning_pars_vertex:Ex,skinning_vertex:wx,skinnormal_vertex:Tx,specularmap_fragment:Ax,specularmap_pars_fragment:Rx,tonemapping_fragment:Cx,tonemapping_pars_fragment:Ix,transmission_fragment:Px,transmission_pars_fragment:Lx,uv_pars_fragment:Dx,uv_pars_vertex:Ux,uv_vertex:Nx,worldpos_vertex:Fx,background_vert:Bx,background_frag:Ox,backgroundCube_vert:zx,backgroundCube_frag:Hx,cube_vert:kx,cube_frag:Vx,depth_vert:Gx,depth_frag:Wx,distanceRGBA_vert:Xx,distanceRGBA_frag:qx,equirect_vert:Yx,equirect_frag:Zx,linedashed_vert:$x,linedashed_frag:Jx,meshbasic_vert:Kx,meshbasic_frag:jx,meshlambert_vert:Qx,meshlambert_frag:e_,meshmatcap_vert:t_,meshmatcap_frag:n_,meshnormal_vert:i_,meshnormal_frag:s_,meshphong_vert:r_,meshphong_frag:o_,meshphysical_vert:a_,meshphysical_frag:c_,meshtoon_vert:l_,meshtoon_frag:h_,points_vert:u_,points_frag:d_,shadow_vert:f_,shadow_frag:p_,sprite_vert:m_,sprite_frag:g_},Se={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Mi={basic:{uniforms:un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Be(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:un([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:un([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Be(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:un([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:un([Se.points,Se.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:un([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:un([Se.common,Se.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:un([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:un([Se.sprite,Se.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:un([Se.common,Se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:un([Se.lights,Se.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Mi.physical={uniforms:un([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var _l={r:0,b:0,g:0},Os=new ii,x_=new lt;function __(n,e,t,i,s,r,o){let a=new Be(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function p(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function x(y){let _=!1,T=p(y);T===null?m(a,c):T&&T.isColor&&(m(T,1),_=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,_){let T=p(_);T&&(T.isCubeTexture||T.mapping===qo)?(h===void 0&&(h=new nt(new zt(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Bs(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Os.copy(_.backgroundRotation),Os.x*=-1,Os.y*=-1,Os.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(x_.makeRotationFromEuler(Os)),h.material.toneMapped=ht.getTransfer(T.colorSpace)!==_t,(u!==T||f!==T.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,d=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new nt(new on(2,2),new rn({name:"BackgroundMaterial",uniforms:Bs(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ht.getTransfer(T.colorSpace)!==_t,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=T,f=T.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,_){y.getRGB(_l,eu(n)),i.buffers.color.setClear(_l.r,_l.g,_l.b,_,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),c=_,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(a,c)},render:x,addToRenderList:g,dispose:v}}function y_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(M,R,I,U,B){let N=!1,H=u(U,I,R);r!==H&&(r=H,l(r.object)),N=d(M,U,I,B),N&&p(M,U,I,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,_(M,R,I,U),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,R,I){let U=I.wireframe===!0,B=i[M.id];B===void 0&&(B={},i[M.id]=B);let N=B[R.id];N===void 0&&(N={},B[R.id]=N);let H=N[U];return H===void 0&&(H=f(c()),N[U]=H),H}function f(M){let R=[],I=[],U=[];for(let B=0;B<t;B++)R[B]=0,I[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:U,object:M,attributes:{},index:null}}function d(M,R,I,U){let B=r.attributes,N=R.attributes,H=0,$=I.getAttributes();for(let V in $)if($[V].location>=0){let le=B[V],ye=N[V];if(ye===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),le===void 0||le.attribute!==ye||ye&&le.data!==ye.data)return!0;H++}return r.attributesNum!==H||r.index!==U}function p(M,R,I,U){let B={},N=R.attributes,H=0,$=I.getAttributes();for(let V in $)if($[V].location>=0){let le=N[V];le===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(le=M.instanceColor));let ye={};ye.attribute=le,le&&le.data&&(ye.data=le.data),B[V]=ye,H++}r.attributes=B,r.attributesNum=H,r.index=U}function x(){let M=r.newAttributes;for(let R=0,I=M.length;R<I;R++)M[R]=0}function g(M){m(M,0)}function m(M,R){let I=r.newAttributes,U=r.enabledAttributes,B=r.attributeDivisors;I[M]=1,U[M]===0&&(n.enableVertexAttribArray(M),U[M]=1),B[M]!==R&&(n.vertexAttribDivisor(M,R),B[M]=R)}function v(){let M=r.newAttributes,R=r.enabledAttributes;for(let I=0,U=R.length;I<U;I++)R[I]!==M[I]&&(n.disableVertexAttribArray(I),R[I]=0)}function y(M,R,I,U,B,N,H){H===!0?n.vertexAttribIPointer(M,R,I,B,N):n.vertexAttribPointer(M,R,I,U,B,N)}function _(M,R,I,U){x();let B=U.attributes,N=I.getAttributes(),H=R.defaultAttributeValues;for(let $ in N){let V=N[$];if(V.location>=0){let oe=B[$];if(oe===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){let le=oe.normalized,ye=oe.itemSize,ve=e.get(oe);if(ve===void 0)continue;let Ze=ve.buffer,it=ve.type,qe=ve.bytesPerElement,j=it===n.INT||it===n.UNSIGNED_INT||oe.gpuType===Fc;if(oe.isInterleavedBufferAttribute){let ae=oe.data,Te=ae.stride,Oe=oe.offset;if(ae.isInstancedInterleavedBuffer){for(let W=0;W<V.locationSize;W++)m(V.location+W,ae.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let W=0;W<V.locationSize;W++)g(V.location+W);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let W=0;W<V.locationSize;W++)y(V.location+W,ye/V.locationSize,it,le,Te*qe,(Oe+ye/V.locationSize*W)*qe,j)}else{if(oe.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)m(V.location+ae,oe.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ae=0;ae<V.locationSize;ae++)g(V.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let ae=0;ae<V.locationSize;ae++)y(V.location+ae,ye/V.locationSize,it,le,ye*qe,ye/V.locationSize*ae*qe,j)}}else if(H!==void 0){let le=H[$];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(V.location,le);break;case 3:n.vertexAttrib3fv(V.location,le);break;case 4:n.vertexAttrib4fv(V.location,le);break;default:n.vertexAttrib1fv(V.location,le)}}}}v()}function T(){P();for(let M in i){let R=i[M];for(let I in R){let U=R[I];for(let B in U)h(U[B].object),delete U[B];delete R[I]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;let R=i[M.id];for(let I in R){let U=R[I];for(let B in U)h(U[B].object),delete U[B];delete R[I]}delete i[M.id]}function C(M){for(let R in i){let I=i[R];if(I[M.id]===void 0)continue;let U=I[M.id];for(let B in U)h(U[B].object),delete U[B];delete I[M.id]}}function P(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function v_(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,i,1)}function c(l,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<l.length;p++)o(l[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*f[x];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function M_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Xn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let P=C===Fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ai&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ci&&!P)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=p>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:T,maxSamples:E}}function S_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new pi,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):l();else{let v=r?0:i,y=v*4,_=m.clippingState||null;c.value=_,_=h(p,f,y,d);for(let T=0;T!==y;++T)_[T]=t[T];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,_=d;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function b_(n){let e=new WeakMap;function t(o,a){return a===Dc?o.mapping=Ns:a===Uc&&(o.mapping=Fs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Dc||a===Uc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new rc(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Hr=4,Cf=[.125,.215,.35,.446,.526,.582],ks=20,ru=new Xo,If=new Be,ou=null,au=0,cu=0,lu=!1,Hs=(1+Math.sqrt(5))/2,zr=1/Hs,Pf=[new D(-Hs,zr,0),new D(Hs,zr,0),new D(-zr,0,Hs),new D(zr,0,Hs),new D(0,Hs,-zr),new D(0,Hs,zr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],E_=new D,Ml=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=E_}=r;ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,au,cu),this._renderer.xr.enabled=lu,e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Fr,format:Xn,colorSpace:Ts,depthBuffer:!1},s=Lf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w_(r)),this._blurMaterial=T_(r,e,t)}return s}_compileMaterial(e){let t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,ru)}_sceneToCubeUV(e,t,i,s,r){let c=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(If),u.toneMapping=Oi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new sn({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new nt(new zt,x),m=!1,v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,m=!0):(x.color.copy(If),m=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):_===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));let T=this._cubeSize;yl(s,_*T,y>2?T:0,T,T),u.setRenderTarget(s),m&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ns||e.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Df());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;yl(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,ru)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pf[(s-r-1)%Pf.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new nt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ks-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):ks;g>ks&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ks}`);let m=[],v=0;for(let C=0;C<ks;++C){let P=C/x,b=Math.exp(-P*P/2);m.push(b),C===0?v+=b:C<g&&(v+=2*b)}for(let C=0;C<m.length;C++)m[C]=m[C]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=p,f.mipInt.value=y-i;let _=this._sizeLods[s],T=3*_*(s>y-Hr?s-y+Hr:0),E=4*(this._cubeSize-_);yl(t,T,E,3*_,2*_),c.setRenderTarget(t),c.render(u,ru)}};function w_(n){let e=[],t=[],i=[],s=n,r=n-Hr+1+Cf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Hr?c=Cf[o-n+Hr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,x=3,g=2,m=1,v=new Float32Array(x*p*d),y=new Float32Array(g*p*d),_=new Float32Array(m*p*d);for(let E=0;E<d;E++){let C=E%3*2/3-1,P=E>2?0:-1,b=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];v.set(b,x*p*E),y.set(f,g*p*E);let M=[E,E,E,E,E,E];_.set(M,m*p*E)}let T=new rt;T.setAttribute("position",new St(v,x)),T.setAttribute("uv",new St(y,g)),T.setAttribute("faceIndex",new St(_,m)),e.push(T),s>Hr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Lf(n,e,t){let i=new xi(n,e,t);return i.texture.mapping=qo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function T_(n,e,t){let i=new Float32Array(ks),s=new D(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Df(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Uf(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function yu(){return`

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
	`}function A_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Dc||c===Uc,h=c===Ns||c===Fs;if(l||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ml(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Ml(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function R_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&br("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function C_(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)e.update(f[d],n.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(d!==null){let v=d.array;x=d.version;for(let y=0,_=v.length;y<_;y+=3){let T=v[y+0],E=v[y+1],C=v[y+2];f.push(T,E,E,C,C,T)}}else if(p!==void 0){let v=p.array;x=p.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let T=y+0,E=y+1,C=y+2;f.push(T,E,E,C,C,T)}}else return;let g=new(Qh(f)?So:Mo)(f,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function I_(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function l(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,f*o,p),t.update(d,i,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];t.update(g,i,1)}function u(f,d,p,x){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,p);let m=0;for(let v=0;v<p;v++)m+=d[v]*x[v];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function P_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function L_(n,e,t){let i=new WeakMap,s=new xt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let b=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*T*4*u),C=new _o(E,_,T,u);C.type=ci,C.needsUpdate=!0;let P=y*4;for(let M=0;M<u;M++){let R=g[M],I=m[M],U=v[M],B=_*T*4*M;for(let N=0;N<R.count;N++){let H=N*P;d===!0&&(s.fromBufferAttribute(R,N),E[B+H+0]=s.x,E[B+H+1]=s.y,E[B+H+2]=s.z,E[B+H+3]=0),p===!0&&(s.fromBufferAttribute(I,N),E[B+H+4]=s.x,E[B+H+5]=s.y,E[B+H+6]=s.z,E[B+H+7]=0),x===!0&&(s.fromBufferAttribute(U,N),E[B+H+8]=s.x,E[B+H+9]=s.y,E[B+H+10]=s.z,E[B+H+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new re(_,T)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function D_(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Qf=new hn,Nf=new Ro(1,1),ep=new _o,tp=new ic,np=new Eo,Ff=[],Bf=[],Of=new Float32Array(16),zf=new Float32Array(9),Hf=new Float32Array(4);function Vr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Ff[s];if(r===void 0&&(r=new Float32Array(s),Ff[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bl(n,e){let t=Bf[e];t===void 0&&(t=new Int32Array(e),Bf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function U_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function N_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function F_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function B_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function O_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,i))return;Hf.set(i),n.uniformMatrix2fv(this.addr,!1,Hf),Jt(t,i)}}function z_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,i))return;zf.set(i),n.uniformMatrix3fv(this.addr,!1,zf),Jt(t,i)}}function H_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,i))return;Of.set(i),n.uniformMatrix4fv(this.addr,!1,Of),Jt(t,i)}}function k_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function V_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function G_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function W_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function X_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function q_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function Y_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function Z_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function $_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Nf.compareFunction=$h,r=Nf):r=Qf,t.setTexture2D(e||r,s)}function J_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||tp,s)}function K_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||np,s)}function j_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ep,s)}function Q_(n){switch(n){case 5126:return U_;case 35664:return N_;case 35665:return F_;case 35666:return B_;case 35674:return O_;case 35675:return z_;case 35676:return H_;case 5124:case 35670:return k_;case 35667:case 35671:return V_;case 35668:case 35672:return G_;case 35669:case 35673:return W_;case 5125:return X_;case 36294:return q_;case 36295:return Y_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return J_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return j_}}function ey(n,e){n.uniform1fv(this.addr,e)}function ty(n,e){let t=Vr(e,this.size,2);n.uniform2fv(this.addr,t)}function ny(n,e){let t=Vr(e,this.size,3);n.uniform3fv(this.addr,t)}function iy(n,e){let t=Vr(e,this.size,4);n.uniform4fv(this.addr,t)}function sy(n,e){let t=Vr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ry(n,e){let t=Vr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function oy(n,e){let t=Vr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ay(n,e){n.uniform1iv(this.addr,e)}function cy(n,e){n.uniform2iv(this.addr,e)}function ly(n,e){n.uniform3iv(this.addr,e)}function hy(n,e){n.uniform4iv(this.addr,e)}function uy(n,e){n.uniform1uiv(this.addr,e)}function dy(n,e){n.uniform2uiv(this.addr,e)}function fy(n,e){n.uniform3uiv(this.addr,e)}function py(n,e){n.uniform4uiv(this.addr,e)}function my(n,e,t){let i=this.cache,s=e.length,r=bl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Qf,r[o])}function gy(n,e,t){let i=this.cache,s=e.length,r=bl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||tp,r[o])}function xy(n,e,t){let i=this.cache,s=e.length,r=bl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||np,r[o])}function _y(n,e,t){let i=this.cache,s=e.length,r=bl(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Jt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ep,r[o])}function yy(n){switch(n){case 5126:return ey;case 35664:return ty;case 35665:return ny;case 35666:return iy;case 35674:return sy;case 35675:return ry;case 35676:return oy;case 5124:case 35670:return ay;case 35667:case 35671:return cy;case 35668:case 35672:return ly;case 35669:case 35673:return hy;case 5125:return uy;case 36294:return dy;case 36295:return fy;case 36296:return py;case 35678:case 36198:case 36298:case 36306:case 35682:return my;case 35679:case 36299:case 36307:return gy;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return _y}}var uu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Q_(t.type)}},du=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yy(t.type)}},fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},hu=/(\w+)(\])?(\[|\.)?/g;function kf(n,e){n.seq.push(e),n.map[e.id]=e}function vy(n,e,t){let i=n.name,s=i.length;for(hu.lastIndex=0;;){let r=hu.exec(i),o=hu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){kf(t,l===void 0?new uu(a,n,e):new du(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new fu(a),kf(t,u)),t=u}}}var kr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);vy(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Vf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var My=37297,Sy=0;function by(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Gf=new Ke;function Ey(n){ht._getMatrix(Gf,ht.workingColorSpace,n);let e=`mat3( ${Gf.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(n)){case go:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+by(n.getShaderSource(e),a)}else return r}function wy(n,e){let t=Ey(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ty(n,e){let t;switch(e){case nf:t="Linear";break;case sf:t="Reinhard";break;case rf:t="Cineon";break;case Lc:t="ACESFilmic";break;case af:t="AgX";break;case cf:t="Neutral";break;case of:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var vl=new D;function Ay(){ht.getLuminanceCoefficients(vl);let n=vl.x.toFixed(4),e=vl.y.toFixed(4),t=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ry(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function Cy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Iy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function jo(n){return n!==""}function Xf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Py=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(n){return n.replace(Py,Dy)}var Ly=new Map;function Dy(n,e){let t=je[e];if(t===void 0){let i=Ly.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pu(t)}var Uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yf(n){return n.replace(Uy,Ny)}function Ny(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ec?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function By(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ns:case Fs:e="ENVMAP_TYPE_CUBE";break;case qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Oy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function zy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case zh:e="ENVMAP_BLENDING_MULTIPLY";break;case ef:e="ENVMAP_BLENDING_MIX";break;case tf:e="ENVMAP_BLENDING_ADD";break}return e}function Hy(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ky(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Fy(t),l=By(t),h=Oy(t),u=zy(t),f=Hy(t),d=Ry(t),p=Cy(r),x=s.createProgram(),g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(jo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(jo).join(`
`),m.length>0&&(m+=`
`)):(g=[Zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),m=[Zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?je.tonemapping_pars_fragment:"",t.toneMapping!==Oi?Ty("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,wy("linearToOutputTexel",t.outputColorSpace),Ay(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),o=pu(o),o=Xf(o,t),o=qf(o,t),a=pu(a),a=Xf(a,t),a=qf(a,t),o=Yf(o),a=Yf(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=v+g+o,_=v+m+a,T=Vf(s,s.VERTEX_SHADER,y),E=Vf(s,s.FRAGMENT_SHADER,_);s.attachShader(x,T),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(R){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(x)||"",U=s.getShaderInfoLog(T)||"",B=s.getShaderInfoLog(E)||"",N=I.trim(),H=U.trim(),$=B.trim(),V=!0,oe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,T,E);else{let le=Wf(s,T,"vertex"),ye=Wf(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+le+`
`+ye)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(H===""||$==="")&&(oe=!1);oe&&(R.diagnostics={runnable:V,programLog:N,vertexShader:{log:H,prefix:g},fragmentShader:{log:$,prefix:m}})}s.deleteShader(T),s.deleteShader(E),P=new kr(s,x),b=Iy(s,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,My)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}var Vy=0,mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new gu(e),t.set(e,i)),i}},gu=class{constructor(e){this.id=Vy++,this.code=e,this.usedTimes=0}};function Gy(n,e,t,i,s,r,o){let a=new vo,c=new mu,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,M,R,I,U){let B=I.fog,N=U.geometry,H=b.isMeshStandardMaterial?I.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),V=$&&$.mapping===qo?$.image.height:null,oe=p[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let le=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ye=le!==void 0?le.length:0,ve=0;N.morphAttributes.position!==void 0&&(ve=1),N.morphAttributes.normal!==void 0&&(ve=2),N.morphAttributes.color!==void 0&&(ve=3);let Ze,it,qe,j;if(oe){let ft=Mi[oe];Ze=ft.vertexShader,it=ft.fragmentShader}else Ze=b.vertexShader,it=b.fragmentShader,c.update(b),qe=c.getVertexShaderID(b),j=c.getFragmentShaderID(b);let ae=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),Oe=U.isInstancedMesh===!0,W=U.isBatchedMesh===!0,xe=!!b.map,He=!!b.matcap,L=!!$,te=!!b.aoMap,ne=!!b.lightMap,q=!!b.bumpMap,K=!!b.normalMap,de=!!b.displacementMap,ee=!!b.emissiveMap,F=!!b.metalnessMap,Q=!!b.roughnessMap,ie=b.anisotropy>0,w=b.clearcoat>0,S=b.dispersion>0,O=b.iridescence>0,X=b.sheen>0,se=b.transmission>0,Y=ie&&!!b.anisotropyMap,Ae=w&&!!b.clearcoatMap,pe=w&&!!b.clearcoatNormalMap,Re=w&&!!b.clearcoatRoughnessMap,Pe=O&&!!b.iridescenceMap,he=O&&!!b.iridescenceThicknessMap,we=X&&!!b.sheenColorMap,Xe=X&&!!b.sheenRoughnessMap,ze=!!b.specularMap,be=!!b.specularColorMap,Qe=!!b.specularIntensityMap,z=se&&!!b.transmissionMap,ge=se&&!!b.thicknessMap,Me=!!b.gradientMap,Le=!!b.alphaMap,fe=b.alphaTest>0,ce=!!b.alphaHash,Fe=!!b.extensions,$e=Oi;b.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&($e=n.toneMapping);let Mt={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:Ze,fragmentShader:it,defines:b.defines,customVertexShaderID:qe,customFragmentShaderID:j,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:W,batchingColor:W&&U._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ts,alphaToCoverage:!!b.alphaToCoverage,map:xe,matcap:He,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:V,aoMap:te,lightMap:ne,bumpMap:q,normalMap:K,displacementMap:f&&de,emissiveMap:ee,normalMapObjectSpace:K&&b.normalMapType===uf,normalMapTangentSpace:K&&b.normalMapType===Zh,metalnessMap:F,roughnessMap:Q,anisotropy:ie,anisotropyMap:Y,clearcoat:w,clearcoatMap:Ae,clearcoatNormalMap:pe,clearcoatRoughnessMap:Re,dispersion:S,iridescence:O,iridescenceMap:Pe,iridescenceThicknessMap:he,sheen:X,sheenColorMap:we,sheenRoughnessMap:Xe,specularMap:ze,specularColorMap:be,specularIntensityMap:Qe,transmission:se,transmissionMap:z,thicknessMap:ge,gradientMap:Me,opaque:b.transparent===!1&&b.blending===Es&&b.alphaToCoverage===!1,alphaMap:Le,alphaTest:fe,alphaHash:ce,combine:b.combine,mapUv:xe&&x(b.map.channel),aoMapUv:te&&x(b.aoMap.channel),lightMapUv:ne&&x(b.lightMap.channel),bumpMapUv:q&&x(b.bumpMap.channel),normalMapUv:K&&x(b.normalMap.channel),displacementMapUv:de&&x(b.displacementMap.channel),emissiveMapUv:ee&&x(b.emissiveMap.channel),metalnessMapUv:F&&x(b.metalnessMap.channel),roughnessMapUv:Q&&x(b.roughnessMap.channel),anisotropyMapUv:Y&&x(b.anisotropyMap.channel),clearcoatMapUv:Ae&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&x(b.sheenRoughnessMap.channel),specularMapUv:ze&&x(b.specularMap.channel),specularColorMapUv:be&&x(b.specularColorMap.channel),specularIntensityMapUv:Qe&&x(b.specularIntensityMap.channel),transmissionMapUv:z&&x(b.transmissionMap.channel),thicknessMapUv:ge&&x(b.thicknessMap.channel),alphaMapUv:Le&&x(b.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(K||ie),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(xe||Le),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Te,skinning:U.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ve,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:xe&&b.map.isVideoTexture===!0&&ht.getTransfer(b.map.colorSpace)===_t,decodeVideoTextureEmissive:ee&&b.emissiveMap.isVideoTexture===!0&&ht.getTransfer(b.emissiveMap.colorSpace)===_t,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ot,flipSided:b.side===vn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Fe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&b.extensions.multiDraw===!0||W)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function m(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)M.push(R),M.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(v(M,b),y(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){let M=p[b.type],R;if(M){let I=Mi[M];R=Sf.clone(I.uniforms)}else R=b.uniforms;return R}function T(b,M){let R;for(let I=0,U=h.length;I<U;I++){let B=h[I];if(B.cacheKey===M){R=B,++R.usedTimes;break}}return R===void 0&&(R=new ky(n,M,b,r),h.push(R)),R}function E(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function C(b){c.remove(b)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:T,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:P}}function Wy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Xy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $f(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,d,p,x,g){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},n[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),e++,m}function a(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):t.push(m)}function c(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function l(u,f){t.length>1&&t.sort(u||Xy),i.length>1&&i.sort(f||$f),s.length>1&&s.sort(f||$f)}function h(){for(let u=e,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function qy(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Jf,n.set(i,[o])):s>=r.length?(o=new Jf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Yy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Be};break;case"SpotLight":t={position:new D,direction:new D,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Zy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var $y=0;function Jy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ky(n){let e=new Yy,t=Zy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);let s=new D,r=new lt,o=new lt;function a(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,v=0,y=0,_=0,T=0,E=0,C=0;l.sort(Jy);for(let b=0,M=l.length;b<M;b++){let R=l[b],I=R.color,U=R.intensity,B=R.distance,N=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=I.r*U,u+=I.g*U,f+=I.b*U;else if(R.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],U);C++}else if(R.isDirectionalLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let $=R.shadow,V=t.get(R);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=N,i.directionalShadowMatrix[d]=R.shadow.matrix,v++}i.directional[d]=H,d++}else if(R.isSpotLight){let H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(I).multiplyScalar(U),H.distance=B,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[x]=H;let $=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,$.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[x]=$.matrix,R.castShadow){let V=t.get(R);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=N,_++}x++}else if(R.isRectAreaLight){let H=e.get(R);H.color.copy(I).multiplyScalar(U),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=H,g++}else if(R.isPointLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let $=R.shadow,V=t.get(R);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,i.pointShadow[p]=V,i.pointShadowMap[p]=N,i.pointShadowMatrix[p]=R.shadow.matrix,y++}i.point[p]=H,p++}else if(R.isHemisphereLight){let H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(U),H.groundColor.copy(R.groundColor).multiplyScalar(U),i.hemi[m]=H,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let P=i.hash;(P.directionalLength!==d||P.pointLength!==p||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==_||P.numSpotMaps!==T||P.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,P.directionalLength=d,P.pointLength=p,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=_,P.numSpotMaps=T,P.numLightProbes=C,i.version=$y++)}function c(l,h){let u=0,f=0,d=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){let y=l[m];if(y.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(y.isSpotLight){let _=i.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(y.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:i}}function Kf(n){let e=new Ky(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function jy(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Kf(n),e.set(s,[a])):r>=o.length?(a=new Kf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Qy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ev=`uniform sampler2D shadow_pass;
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
}`;function tv(n,e,t){let i=new is,s=new re,r=new re,o=new xt,a=new Lr({depthPacking:xl}),c=new fc,l={},h=t.maxTextureSize,u={[Di]:vn,[vn]:Di,[ot]:ot},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Qy,fragmentShader:ev}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new rt;p.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new nt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let m=this.type;this.render=function(E,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let b=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Bi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let U=m!==vi&&this.type===vi,B=m===vi&&this.type!==vi;for(let N=0,H=E.length;N<H;N++){let $=E[N],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let oe=V.getFrameExtents();if(s.multiply(oe),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,V.mapSize.y=r.y)),V.map===null||U===!0||B===!0){let ye=this.type!==vi?{minFilter:wn,magFilter:wn}:{};V.map!==null&&V.map.dispose(),V.map=new xi(s.x,s.y,ye),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let le=V.getViewportCount();for(let ye=0;ye<le;ye++){let ve=V.getViewport(ye);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),I.viewport(o),V.updateMatrices($,ye),i=V.getFrustum(),_(C,P,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===vi&&v(V,P),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(b,M,R)};function v(E,C){let P=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new xi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(C,null,P,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(C,null,P,d,x,null)}function y(E,C,P,b){let M=null,R=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)M=R;else if(M=P.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let I=M.uuid,U=C.uuid,B=l[I];B===void 0&&(B={},l[I]=B);let N=B[U];N===void 0&&(N=M.clone(),B[U]=N,C.addEventListener("dispose",T)),M=N}if(M.visible=C.visible,M.wireframe=C.wireframe,b===vi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let I=n.properties.get(M);I.light=P}return M}function _(E,C,P,b,M){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===vi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let U=e.update(E),B=E.material;if(Array.isArray(B)){let N=U.groups;for(let H=0,$=N.length;H<$;H++){let V=N[H],oe=B[V.materialIndex];if(oe&&oe.visible){let le=y(E,oe,b,M);E.onBeforeShadow(n,E,C,P,U,le,V),n.renderBufferDirect(P,null,U,le,E,V),E.onAfterShadow(n,E,C,P,U,le,V)}}}else if(B.visible){let N=y(E,B,b,M);E.onBeforeShadow(n,E,C,P,U,N,null),n.renderBufferDirect(P,null,U,N,E,null),E.onAfterShadow(n,E,C,P,U,N,null)}}let I=E.children;for(let U=0,B=I.length;U<B;U++)_(I[U],C,P,b,M)}function T(E){E.target.removeEventListener("dispose",T);for(let P in l){let b=l[P],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var nv={[wc]:Tc,[Ac]:Ic,[Rc]:Pc,[ws]:Cc,[Tc]:wc,[Ic]:Ac,[Pc]:Rc,[Cc]:ws};function iv(n,e){function t(){let z=!1,ge=new xt,Me=null,Le=new xt(0,0,0,0);return{setMask:function(fe){Me!==fe&&!z&&(n.colorMask(fe,fe,fe,fe),Me=fe)},setLocked:function(fe){z=fe},setClear:function(fe,ce,Fe,$e,Mt){Mt===!0&&(fe*=$e,ce*=$e,Fe*=$e),ge.set(fe,ce,Fe,$e),Le.equals(ge)===!1&&(n.clearColor(fe,ce,Fe,$e),Le.copy(ge))},reset:function(){z=!1,Me=null,Le.set(-1,0,0,0)}}}function i(){let z=!1,ge=!1,Me=null,Le=null,fe=null;return{setReversed:function(ce){if(ge!==ce){let Fe=e.get("EXT_clip_control");ce?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ge=ce;let $e=fe;fe=null,this.setClear($e)}},getReversed:function(){return ge},setTest:function(ce){ce?ae(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(ce){Me!==ce&&!z&&(n.depthMask(ce),Me=ce)},setFunc:function(ce){if(ge&&(ce=nv[ce]),Le!==ce){switch(ce){case wc:n.depthFunc(n.NEVER);break;case Tc:n.depthFunc(n.ALWAYS);break;case Ac:n.depthFunc(n.LESS);break;case ws:n.depthFunc(n.LEQUAL);break;case Rc:n.depthFunc(n.EQUAL);break;case Cc:n.depthFunc(n.GEQUAL);break;case Ic:n.depthFunc(n.GREATER);break;case Pc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Le=ce}},setLocked:function(ce){z=ce},setClear:function(ce){fe!==ce&&(ge&&(ce=1-ce),n.clearDepth(ce),fe=ce)},reset:function(){z=!1,Me=null,Le=null,fe=null,ge=!1}}}function s(){let z=!1,ge=null,Me=null,Le=null,fe=null,ce=null,Fe=null,$e=null,Mt=null;return{setTest:function(ft){z||(ft?ae(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(ft){ge!==ft&&!z&&(n.stencilMask(ft),ge=ft)},setFunc:function(ft,wi,fi){(Me!==ft||Le!==wi||fe!==fi)&&(n.stencilFunc(ft,wi,fi),Me=ft,Le=wi,fe=fi)},setOp:function(ft,wi,fi){(ce!==ft||Fe!==wi||$e!==fi)&&(n.stencilOp(ft,wi,fi),ce=ft,Fe=wi,$e=fi)},setLocked:function(ft){z=ft},setClear:function(ft){Mt!==ft&&(n.clearStencil(ft),Mt=ft)},reset:function(){z=!1,ge=null,Me=null,Le=null,fe=null,ce=null,Fe=null,$e=null,Mt=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,v=null,y=null,_=null,T=null,E=null,C=new Be(0,0,0),P=0,b=!1,M=null,R=null,I=null,U=null,B=null,N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,$=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=$>=2);let oe=null,le={},ye=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),Ze=new xt().fromArray(ye),it=new xt().fromArray(ve);function qe(z,ge,Me,Le){let fe=new Uint8Array(4),ce=n.createTexture();n.bindTexture(z,ce),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<Me;Fe++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(ge+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return ce}let j={};j[n.TEXTURE_2D]=qe(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(n.DEPTH_TEST),o.setFunc(ws),q(!1),K(Nh),ae(n.CULL_FACE),te(Bi);function ae(z){h[z]!==!0&&(n.enable(z),h[z]=!0)}function Te(z){h[z]!==!1&&(n.disable(z),h[z]=!1)}function Oe(z,ge){return u[z]!==ge?(n.bindFramebuffer(z,ge),u[z]=ge,z===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ge),z===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function W(z,ge){let Me=d,Le=!1;if(z){Me=f.get(ge),Me===void 0&&(Me=[],f.set(ge,Me));let fe=z.textures;if(Me.length!==fe.length||Me[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Fe=fe.length;ce<Fe;ce++)Me[ce]=n.COLOR_ATTACHMENT0+ce;Me.length=fe.length,Le=!0}}else Me[0]!==n.BACK&&(Me[0]=n.BACK,Le=!0);Le&&n.drawBuffers(Me)}function xe(z){return p!==z?(n.useProgram(z),p=z,!0):!1}let He={[ns]:n.FUNC_ADD,[Bd]:n.FUNC_SUBTRACT,[Od]:n.FUNC_REVERSE_SUBTRACT};He[zd]=n.MIN,He[Hd]=n.MAX;let L={[kd]:n.ZERO,[Vd]:n.ONE,[Gd]:n.SRC_COLOR,[Ja]:n.SRC_ALPHA,[$d]:n.SRC_ALPHA_SATURATE,[Yd]:n.DST_COLOR,[Xd]:n.DST_ALPHA,[Wd]:n.ONE_MINUS_SRC_COLOR,[Ka]:n.ONE_MINUS_SRC_ALPHA,[Zd]:n.ONE_MINUS_DST_COLOR,[qd]:n.ONE_MINUS_DST_ALPHA,[Jd]:n.CONSTANT_COLOR,[Kd]:n.ONE_MINUS_CONSTANT_COLOR,[jd]:n.CONSTANT_ALPHA,[Qd]:n.ONE_MINUS_CONSTANT_ALPHA};function te(z,ge,Me,Le,fe,ce,Fe,$e,Mt,ft){if(z===Bi){x===!0&&(Te(n.BLEND),x=!1);return}if(x===!1&&(ae(n.BLEND),x=!0),z!==Fd){if(z!==g||ft!==b){if((m!==ns||_!==ns)&&(n.blendEquation(n.FUNC_ADD),m=ns,_=ns),ft)switch(z){case Es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oi:n.blendFunc(n.ONE,n.ONE);break;case Bh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Oh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}v=null,y=null,T=null,E=null,C.set(0,0,0),P=0,g=z,b=ft}return}fe=fe||ge,ce=ce||Me,Fe=Fe||Le,(ge!==m||fe!==_)&&(n.blendEquationSeparate(He[ge],He[fe]),m=ge,_=fe),(Me!==v||Le!==y||ce!==T||Fe!==E)&&(n.blendFuncSeparate(L[Me],L[Le],L[ce],L[Fe]),v=Me,y=Le,T=ce,E=Fe),($e.equals(C)===!1||Mt!==P)&&(n.blendColor($e.r,$e.g,$e.b,Mt),C.copy($e),P=Mt),g=z,b=!1}function ne(z,ge){z.side===ot?Te(n.CULL_FACE):ae(n.CULL_FACE);let Me=z.side===vn;ge&&(Me=!Me),q(Me),z.blending===Es&&z.transparent===!1?te(Bi):te(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Le=z.stencilWrite;a.setTest(Le),Le&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ee(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(z){M!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),M=z)}function K(z){z!==Ud?(ae(n.CULL_FACE),z!==R&&(z===Nh?n.cullFace(n.BACK):z===Nd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),R=z}function de(z){z!==I&&(H&&n.lineWidth(z),I=z)}function ee(z,ge,Me){z?(ae(n.POLYGON_OFFSET_FILL),(U!==ge||B!==Me)&&(n.polygonOffset(ge,Me),U=ge,B=Me)):Te(n.POLYGON_OFFSET_FILL)}function F(z){z?ae(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function Q(z){z===void 0&&(z=n.TEXTURE0+N-1),oe!==z&&(n.activeTexture(z),oe=z)}function ie(z,ge,Me){Me===void 0&&(oe===null?Me=n.TEXTURE0+N-1:Me=oe);let Le=le[Me];Le===void 0&&(Le={type:void 0,texture:void 0},le[Me]=Le),(Le.type!==z||Le.texture!==ge)&&(oe!==Me&&(n.activeTexture(Me),oe=Me),n.bindTexture(z,ge||j[z]),Le.type=z,Le.texture=ge)}function w(){let z=le[oe];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function X(){try{n.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{n.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(){try{n.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pe(){try{n.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{n.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pe(){try{n.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{n.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(z){Ze.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Ze.copy(z))}function Xe(z){it.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),it.copy(z))}function ze(z,ge){let Me=l.get(ge);Me===void 0&&(Me=new WeakMap,l.set(ge,Me));let Le=Me.get(z);Le===void 0&&(Le=n.getUniformBlockIndex(ge,z.name),Me.set(z,Le))}function be(z,ge){let Le=l.get(ge).get(z);c.get(ge)!==Le&&(n.uniformBlockBinding(ge,Le,z.__bindingPointIndex),c.set(ge,Le))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},oe=null,le={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,v=null,y=null,_=null,T=null,E=null,C=new Be(0,0,0),P=0,b=!1,M=null,R=null,I=null,U=null,B=null,Ze.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Te,bindFramebuffer:Oe,drawBuffers:W,useProgram:xe,setBlending:te,setMaterial:ne,setFlipSided:q,setCullFace:K,setLineWidth:de,setPolygonOffset:ee,setScissorTest:F,activeTexture:Q,bindTexture:ie,unbindTexture:w,compressedTexImage2D:S,compressedTexImage3D:O,texImage2D:Pe,texImage3D:he,updateUBOMapping:ze,uniformBlockBinding:be,texStorage2D:pe,texStorage3D:Re,texSubImage2D:X,texSubImage3D:se,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ae,scissor:we,viewport:Xe,reset:Qe}}function sv(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new re,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,S){return d?new OffscreenCanvas(w,S):Sr("canvas")}function x(w,S,O){let X=1,se=ie(w);if((se.width>O||se.height>O)&&(X=O/Math.max(se.width,se.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Y=Math.floor(X*se.width),Ae=Math.floor(X*se.height);u===void 0&&(u=p(Y,Ae));let pe=S?p(Y,Ae):u;return pe.width=Y,pe.height=Ae,pe.getContext("2d").drawImage(w,0,0,Y,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Y+"x"+Ae+")."),pe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),w;return w}function g(w){return w.generateMipmaps}function m(w){n.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(w,S,O,X,se=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=S;if(S===n.RED&&(O===n.FLOAT&&(Y=n.R32F),O===n.HALF_FLOAT&&(Y=n.R16F),O===n.UNSIGNED_BYTE&&(Y=n.R8)),S===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.R8UI),O===n.UNSIGNED_SHORT&&(Y=n.R16UI),O===n.UNSIGNED_INT&&(Y=n.R32UI),O===n.BYTE&&(Y=n.R8I),O===n.SHORT&&(Y=n.R16I),O===n.INT&&(Y=n.R32I)),S===n.RG&&(O===n.FLOAT&&(Y=n.RG32F),O===n.HALF_FLOAT&&(Y=n.RG16F),O===n.UNSIGNED_BYTE&&(Y=n.RG8)),S===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RG8UI),O===n.UNSIGNED_SHORT&&(Y=n.RG16UI),O===n.UNSIGNED_INT&&(Y=n.RG32UI),O===n.BYTE&&(Y=n.RG8I),O===n.SHORT&&(Y=n.RG16I),O===n.INT&&(Y=n.RG32I)),S===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),O===n.UNSIGNED_INT&&(Y=n.RGB32UI),O===n.BYTE&&(Y=n.RGB8I),O===n.SHORT&&(Y=n.RGB16I),O===n.INT&&(Y=n.RGB32I)),S===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),O===n.UNSIGNED_INT&&(Y=n.RGBA32UI),O===n.BYTE&&(Y=n.RGBA8I),O===n.SHORT&&(Y=n.RGBA16I),O===n.INT&&(Y=n.RGBA32I)),S===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),S===n.RGBA){let Ae=se?go:ht.getTransfer(X);O===n.FLOAT&&(Y=n.RGBA32F),O===n.HALF_FLOAT&&(Y=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Y=Ae===_t?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(w,S){let O;return w?S===null||S===cs||S===Br?O=n.DEPTH24_STENCIL8:S===ci?O=n.DEPTH32F_STENCIL8:S===Nr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===cs||S===Br?O=n.DEPTH_COMPONENT24:S===ci?O=n.DEPTH_COMPONENT32F:S===Nr&&(O=n.DEPTH_COMPONENT16),O}function T(w,S){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==wn&&w.minFilter!==ni?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function E(w){let S=w.target;S.removeEventListener("dispose",E),P(S),S.isVideoTexture&&h.delete(S)}function C(w){let S=w.target;S.removeEventListener("dispose",C),M(S)}function P(w){let S=i.get(w);if(S.__webglInit===void 0)return;let O=w.source,X=f.get(O);if(X){let se=X[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&b(w),Object.keys(X).length===0&&f.delete(O)}i.remove(w)}function b(w){let S=i.get(w);n.deleteTexture(S.__webglTexture);let O=w.source,X=f.get(O);delete X[S.__cacheKey],o.memory.textures--}function M(w){let S=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let se=0;se<S.__webglFramebuffer[X].length;se++)n.deleteFramebuffer(S.__webglFramebuffer[X][se]);else n.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)n.deleteFramebuffer(S.__webglFramebuffer[X]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let O=w.textures;for(let X=0,se=O.length;X<se;X++){let Y=i.get(O[X]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(O[X])}i.remove(w)}let R=0;function I(){R=0}function U(){let w=R;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function B(w){let S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function N(w,S){let O=i.get(w);if(w.isVideoTexture&&F(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){let X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,w,S);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+S)}function H(w,S){let O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){j(O,w,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+S)}function $(w,S){let O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){j(O,w,S);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+S)}function V(w,S){let O=i.get(w);if(w.version>0&&O.__version!==w.version){ae(O,w,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+S)}let oe={[ti]:n.REPEAT,[ts]:n.CLAMP_TO_EDGE,[ja]:n.MIRRORED_REPEAT},le={[wn]:n.NEAREST,[lf]:n.NEAREST_MIPMAP_NEAREST,[Yo]:n.NEAREST_MIPMAP_LINEAR,[ni]:n.LINEAR,[Nc]:n.LINEAR_MIPMAP_NEAREST,[as]:n.LINEAR_MIPMAP_LINEAR},ye={[df]:n.NEVER,[_f]:n.ALWAYS,[ff]:n.LESS,[$h]:n.LEQUAL,[pf]:n.EQUAL,[xf]:n.GEQUAL,[mf]:n.GREATER,[gf]:n.NOTEQUAL};function ve(w,S){if(S.type===ci&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ni||S.magFilter===Nc||S.magFilter===Yo||S.magFilter===as||S.minFilter===ni||S.minFilter===Nc||S.minFilter===Yo||S.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,oe[S.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,oe[S.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,oe[S.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,le[S.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,le[S.minFilter]),S.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ye[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===wn||S.minFilter!==Yo&&S.minFilter!==as||S.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ze(w,S){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",E));let X=S.source,se=f.get(X);se===void 0&&(se={},f.set(X,se));let Y=B(S);if(Y!==w.__cacheKey){se[Y]===void 0&&(se[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),se[Y].usedTimes++;let Ae=se[w.__cacheKey];Ae!==void 0&&(se[w.__cacheKey].usedTimes--,Ae.usedTimes===0&&b(S)),w.__cacheKey=Y,w.__webglTexture=se[Y].texture}return O}function it(w,S,O){return Math.floor(Math.floor(w/O)/S)}function qe(w,S,O,X){let Y=w.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,O,X,S.data);else{Y.sort((he,we)=>he.start-we.start);let Ae=0;for(let he=1;he<Y.length;he++){let we=Y[Ae],Xe=Y[he],ze=we.start+we.count,be=it(Xe.start,S.width,4),Qe=it(we.start,S.width,4);Xe.start<=ze+1&&be===Qe&&it(Xe.start+Xe.count-1,S.width,4)===be?we.count=Math.max(we.count,Xe.start+Xe.count-we.start):(++Ae,Y[Ae]=Xe)}Y.length=Ae+1;let pe=n.getParameter(n.UNPACK_ROW_LENGTH),Re=n.getParameter(n.UNPACK_SKIP_PIXELS),Pe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let he=0,we=Y.length;he<we;he++){let Xe=Y[he],ze=Math.floor(Xe.start/4),be=Math.ceil(Xe.count/4),Qe=ze%S.width,z=Math.floor(ze/S.width),ge=be,Me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,Qe,z,ge,Me,O,X,S.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function j(w,S,O){let X=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=n.TEXTURE_3D);let se=Ze(w,S),Y=S.source;t.bindTexture(X,w.__webglTexture,n.TEXTURE0+O);let Ae=i.get(Y);if(Y.version!==Ae.__version||se===!0){t.activeTexture(n.TEXTURE0+O);let pe=ht.getPrimaries(ht.workingColorSpace),Re=S.colorSpace===zi?null:ht.getPrimaries(S.colorSpace),Pe=S.colorSpace===zi||pe===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let he=x(S.image,!1,s.maxTextureSize);he=Q(S,he);let we=r.convert(S.format,S.colorSpace),Xe=r.convert(S.type),ze=y(S.internalFormat,we,Xe,S.colorSpace,S.isVideoTexture);ve(X,S);let be,Qe=S.mipmaps,z=S.isVideoTexture!==!0,ge=Ae.__version===void 0||se===!0,Me=Y.dataReady,Le=T(S,he);if(S.isDepthTexture)ze=_(S.format===Or,S.type),ge&&(z?t.texStorage2D(n.TEXTURE_2D,1,ze,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,ze,he.width,he.height,0,we,Xe,null));else if(S.isDataTexture)if(Qe.length>0){z&&ge&&t.texStorage2D(n.TEXTURE_2D,Le,ze,Qe[0].width,Qe[0].height);for(let fe=0,ce=Qe.length;fe<ce;fe++)be=Qe[fe],z?Me&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,be.width,be.height,we,Xe,be.data):t.texImage2D(n.TEXTURE_2D,fe,ze,be.width,be.height,0,we,Xe,be.data);S.generateMipmaps=!1}else z?(ge&&t.texStorage2D(n.TEXTURE_2D,Le,ze,he.width,he.height),Me&&qe(S,he,we,Xe)):t.texImage2D(n.TEXTURE_2D,0,ze,he.width,he.height,0,we,Xe,he.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){z&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,ze,Qe[0].width,Qe[0].height,he.depth);for(let fe=0,ce=Qe.length;fe<ce;fe++)if(be=Qe[fe],S.format!==Xn)if(we!==null)if(z){if(Me)if(S.layerUpdates.size>0){let Fe=su(be.width,be.height,S.format,S.type);for(let $e of S.layerUpdates){let Mt=be.data.subarray($e*Fe/be.data.BYTES_PER_ELEMENT,($e+1)*Fe/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,$e,be.width,be.height,1,we,Mt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,he.depth,we,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,ze,be.width,be.height,he.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,be.width,be.height,he.depth,we,Xe,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,ze,be.width,be.height,he.depth,0,we,Xe,be.data)}else{z&&ge&&t.texStorage2D(n.TEXTURE_2D,Le,ze,Qe[0].width,Qe[0].height);for(let fe=0,ce=Qe.length;fe<ce;fe++)be=Qe[fe],S.format!==Xn?we!==null?z?Me&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,be.width,be.height,we,be.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,ze,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Me&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,be.width,be.height,we,Xe,be.data):t.texImage2D(n.TEXTURE_2D,fe,ze,be.width,be.height,0,we,Xe,be.data)}else if(S.isDataArrayTexture)if(z){if(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,ze,he.width,he.height,he.depth),Me)if(S.layerUpdates.size>0){let fe=su(he.width,he.height,S.format,S.type);for(let ce of S.layerUpdates){let Fe=he.data.subarray(ce*fe/he.data.BYTES_PER_ELEMENT,(ce+1)*fe/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,he.width,he.height,1,we,Xe,Fe)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,we,Xe,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,he.width,he.height,he.depth,0,we,Xe,he.data);else if(S.isData3DTexture)z?(ge&&t.texStorage3D(n.TEXTURE_3D,Le,ze,he.width,he.height,he.depth),Me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,we,Xe,he.data)):t.texImage3D(n.TEXTURE_3D,0,ze,he.width,he.height,he.depth,0,we,Xe,he.data);else if(S.isFramebufferTexture){if(ge)if(z)t.texStorage2D(n.TEXTURE_2D,Le,ze,he.width,he.height);else{let fe=he.width,ce=he.height;for(let Fe=0;Fe<Le;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,ze,fe,ce,0,we,Xe,null),fe>>=1,ce>>=1}}else if(Qe.length>0){if(z&&ge){let fe=ie(Qe[0]);t.texStorage2D(n.TEXTURE_2D,Le,ze,fe.width,fe.height)}for(let fe=0,ce=Qe.length;fe<ce;fe++)be=Qe[fe],z?Me&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,we,Xe,be):t.texImage2D(n.TEXTURE_2D,fe,ze,we,Xe,be);S.generateMipmaps=!1}else if(z){if(ge){let fe=ie(he);t.texStorage2D(n.TEXTURE_2D,Le,ze,fe.width,fe.height)}Me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Xe,he)}else t.texImage2D(n.TEXTURE_2D,0,ze,we,Xe,he);g(S)&&m(X),Ae.__version=Y.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ae(w,S,O){if(S.image.length!==6)return;let X=Ze(w,S),se=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);let Y=i.get(se);if(se.version!==Y.__version||X===!0){t.activeTexture(n.TEXTURE0+O);let Ae=ht.getPrimaries(ht.workingColorSpace),pe=S.colorSpace===zi?null:ht.getPrimaries(S.colorSpace),Re=S.colorSpace===zi||Ae===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let Pe=S.isCompressedTexture||S.image[0].isCompressedTexture,he=S.image[0]&&S.image[0].isDataTexture,we=[];for(let ce=0;ce<6;ce++)!Pe&&!he?we[ce]=x(S.image[ce],!0,s.maxCubemapSize):we[ce]=he?S.image[ce].image:S.image[ce],we[ce]=Q(S,we[ce]);let Xe=we[0],ze=r.convert(S.format,S.colorSpace),be=r.convert(S.type),Qe=y(S.internalFormat,ze,be,S.colorSpace),z=S.isVideoTexture!==!0,ge=Y.__version===void 0||X===!0,Me=se.dataReady,Le=T(S,Xe);ve(n.TEXTURE_CUBE_MAP,S);let fe;if(Pe){z&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,Qe,Xe.width,Xe.height);for(let ce=0;ce<6;ce++){fe=we[ce].mipmaps;for(let Fe=0;Fe<fe.length;Fe++){let $e=fe[Fe];S.format!==Xn?ze!==null?z?Me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,0,0,$e.width,$e.height,ze,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,Qe,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,0,0,$e.width,$e.height,ze,be,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,Qe,$e.width,$e.height,0,ze,be,$e.data)}}}else{if(fe=S.mipmaps,z&&ge){fe.length>0&&Le++;let ce=ie(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,Qe,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(he){z?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,we[ce].width,we[ce].height,ze,be,we[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Qe,we[ce].width,we[ce].height,0,ze,be,we[ce].data);for(let Fe=0;Fe<fe.length;Fe++){let Mt=fe[Fe].image[ce].image;z?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,0,0,Mt.width,Mt.height,ze,be,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,Qe,Mt.width,Mt.height,0,ze,be,Mt.data)}}else{z?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ze,be,we[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Qe,ze,be,we[ce]);for(let Fe=0;Fe<fe.length;Fe++){let $e=fe[Fe];z?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,0,0,ze,be,$e.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,Qe,ze,be,$e.image[ce])}}}g(S)&&m(n.TEXTURE_CUBE_MAP),Y.__version=se.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Te(w,S,O,X,se,Y){let Ae=r.convert(O.format,O.colorSpace),pe=r.convert(O.type),Re=y(O.internalFormat,Ae,pe,O.colorSpace),Pe=i.get(S),he=i.get(O);if(he.__renderTarget=S,!Pe.__hasExternalTextures){let we=Math.max(1,S.width>>Y),Xe=Math.max(1,S.height>>Y);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,Y,Re,we,Xe,S.depth,0,Ae,pe,null):t.texImage2D(se,Y,Re,we,Xe,0,Ae,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ee(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,se,he.__webglTexture,0,de(S)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,se,he.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(w,S,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),S.depthBuffer){let X=S.depthTexture,se=X&&X.isDepthTexture?X.type:null,Y=_(S.stencilBuffer,se),Ae=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=de(S);ee(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,Y,S.width,S.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,Y,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Y,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,w)}else{let X=S.textures;for(let se=0;se<X.length;se++){let Y=X[se],Ae=r.convert(Y.format,Y.colorSpace),pe=r.convert(Y.type),Re=y(Y.internalFormat,Ae,pe,Y.colorSpace),Pe=de(S);O&&ee(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Re,S.width,S.height):ee(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,Re,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Re,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function W(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=i.get(S.depthTexture);X.__renderTarget=S,(!X.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);let se=X.__webglTexture,Y=de(S);if(S.depthTexture.format===Mr)ee(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(S.depthTexture.format===Or)ee(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function xe(w){let S=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){let X=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){let se=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",se)};X.addEventListener("dispose",se),S.__depthDisposeCallback=se}S.__boundDepthTexture=X}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let X=w.texture.mipmaps;X&&X.length>0?W(S.__webglFramebuffer[0],w):W(S.__webglFramebuffer,w)}else if(O){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=n.createRenderbuffer(),Oe(S.__webglDepthbuffer[X],w,!1);else{let se=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,Y)}}else{let X=w.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Oe(S.__webglDepthbuffer,w,!1);else{let se=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(w,S,O){let X=i.get(w);S!==void 0&&Te(X.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&xe(w)}function L(w){let S=w.texture,O=i.get(w),X=i.get(S);w.addEventListener("dispose",C);let se=w.textures,Y=w.isWebGLCubeRenderTarget===!0,Ae=se.length>1;if(Ae||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=S.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[pe]=[];for(let Re=0;Re<S.mipmaps.length;Re++)O.__webglFramebuffer[pe][Re]=n.createFramebuffer()}else O.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)O.__webglFramebuffer[pe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let pe=0,Re=se.length;pe<Re;pe++){let Pe=i.get(se[pe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&ee(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let pe=0;pe<se.length;pe++){let Re=se[pe];O.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[pe]);let Pe=r.convert(Re.format,Re.colorSpace),he=r.convert(Re.type),we=y(Re.internalFormat,Pe,he,Re.colorSpace,w.isXRRenderTarget===!0),Xe=de(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,we,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,O.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),ve(n.TEXTURE_CUBE_MAP,S);for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)Te(O.__webglFramebuffer[pe][Re],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re);else Te(O.__webglFramebuffer[pe],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(S)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let pe=0,Re=se.length;pe<Re;pe++){let Pe=se[pe],he=i.get(Pe),we=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(we=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,he.__webglTexture),ve(we,Pe),Te(O.__webglFramebuffer,w,Pe,n.COLOR_ATTACHMENT0+pe,we,0),g(Pe)&&m(we)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pe=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,X.__webglTexture),ve(pe,S),S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)Te(O.__webglFramebuffer[Re],w,S,n.COLOR_ATTACHMENT0,pe,Re);else Te(O.__webglFramebuffer,w,S,n.COLOR_ATTACHMENT0,pe,0);g(S)&&m(pe),t.unbindTexture()}w.depthBuffer&&xe(w)}function te(w){let S=w.textures;for(let O=0,X=S.length;O<X;O++){let se=S[O];if(g(se)){let Y=v(w),Ae=i.get(se).__webglTexture;t.bindTexture(Y,Ae),m(Y),t.unbindTexture()}}}let ne=[],q=[];function K(w){if(w.samples>0){if(ee(w)===!1){let S=w.textures,O=w.width,X=w.height,se=n.COLOR_BUFFER_BIT,Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(w),pe=S.length>1;if(pe)for(let Pe=0;Pe<S.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let Re=w.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Pe=0;Pe<S.length;Pe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Pe]);let he=i.get(S[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,O,X,0,0,O,X,se,n.NEAREST),c===!0&&(ne.length=0,q.length=0,ne.push(n.COLOR_ATTACHMENT0+Pe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ne.push(Y),q.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Pe=0;Pe<S.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Pe]);let he=i.get(S[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let S=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function de(w){return Math.min(s.maxSamples,w.samples)}function ee(w){let S=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function F(w){let S=o.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function Q(w,S){let O=w.colorSpace,X=w.format,se=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Ts&&O!==zi&&(ht.getTransfer(O)===_t?(X!==Xn||se!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function ie(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=He,this.setupRenderTarget=L,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ee}function rv(n,e){function t(i,s=zi){let r,o=ht.getTransfer(s);if(i===ai)return n.UNSIGNED_BYTE;if(i===Bc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===kh)return n.BYTE;if(i===Vh)return n.SHORT;if(i===Nr)return n.UNSIGNED_SHORT;if(i===Fc)return n.INT;if(i===cs)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===Fr)return n.HALF_FLOAT;if(i===Xh)return n.ALPHA;if(i===qh)return n.RGB;if(i===Xn)return n.RGBA;if(i===Mr)return n.DEPTH_COMPONENT;if(i===Or)return n.DEPTH_STENCIL;if(i===zc)return n.RED;if(i===Hc)return n.RED_INTEGER;if(i===Yh)return n.RG;if(i===kc)return n.RG_INTEGER;if(i===Vc)return n.RGBA_INTEGER;if(i===Zo||i===$o||i===Jo||i===Ko)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gc||i===Wc||i===Xc||i===qc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yc||i===Zc||i===$c)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Yc||i===Zc)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$c)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jc||i===Kc||i===jc||i===Qc||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===cl||i===ll)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Jc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===el)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===il)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ol)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===al)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ll)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hl||i===ul||i===dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===hl)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fl||i===pl||i===ml||i===gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===fl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ml)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var ov=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,av=`
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

}`,xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Co(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new rn({vertexShader:ov,fragmentShader:av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new on(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_u=class extends Ui{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new xu,m={},v=t.getContextAttributes(),y=null,_=null,T=[],E=[],C=new re,P=null,b=new Gt;b.viewport=new xt;let M=new Gt;M.viewport=new xt;let R=[b,M],I=new bc,U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=T[j];return ae===void 0&&(ae=new wr,T[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=T[j];return ae===void 0&&(ae=new wr,T[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=T[j];return ae===void 0&&(ae=new wr,T[j]=ae),ae.getHandSpace()};function N(j){let ae=E.indexOf(j.inputSource);if(ae===-1)return;let Te=T[ae];Te!==void 0&&(Te.update(j.inputSource,j.frame,l||o),Te.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",$);for(let j=0;j<T.length;j++){let ae=E[j];ae!==null&&(E[j]=null,T[j].disconnect(ae))}U=null,B=null,g.reset();for(let j in m)delete m[j];e.setRenderTarget(y),d=null,f=null,u=null,s=null,_=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Oe=null,W=null;v.depth&&(W=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=v.stencil?Or:Mr,Oe=v.stencil?Br:cs);let xe={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new xi(f.textureWidth,f.textureHeight,{format:Xn,type:ai,depthTexture:new Ro(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let Te={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new xi(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(j){for(let ae=0;ae<j.removed.length;ae++){let Te=j.removed[ae],Oe=E.indexOf(Te);Oe>=0&&(E[Oe]=null,T[Oe].disconnect(Te))}for(let ae=0;ae<j.added.length;ae++){let Te=j.added[ae],Oe=E.indexOf(Te);if(Oe===-1){for(let xe=0;xe<T.length;xe++)if(xe>=E.length){E.push(Te),Oe=xe;break}else if(E[xe]===null){E[xe]=Te,Oe=xe;break}if(Oe===-1)break}let W=T[Oe];W&&W.connect(Te)}}let V=new D,oe=new D;function le(j,ae,Te){V.setFromMatrixPosition(ae.matrixWorld),oe.setFromMatrixPosition(Te.matrixWorld);let Oe=V.distanceTo(oe),W=ae.projectionMatrix.elements,xe=Te.projectionMatrix.elements,He=W[14]/(W[10]-1),L=W[14]/(W[10]+1),te=(W[9]+1)/W[5],ne=(W[9]-1)/W[5],q=(W[8]-1)/W[0],K=(xe[8]+1)/xe[0],de=He*q,ee=He*K,F=Oe/(-q+K),Q=F*-q;if(ae.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Q),j.translateZ(F),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),W[10]===-1)j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let ie=He+F,w=L+F,S=de-Q,O=ee+(Oe-Q),X=te*L/w*ie,se=ne*L/w*ie;j.projectionMatrix.makePerspective(S,O,X,se,ie,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ye(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ae=j.near,Te=j.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(Te=g.depthFar)),I.near=M.near=b.near=ae,I.far=M.far=b.far=Te,(U!==I.near||B!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),U=I.near,B=I.far),I.layers.mask=j.layers.mask|6,b.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;let Oe=j.parent,W=I.cameras;ye(I,Oe);for(let xe=0;xe<W.length;xe++)ye(W[xe],Oe);W.length===2?le(I,b,M):I.projectionMatrix.copy(b.projectionMatrix),ve(j,I,Oe)};function ve(j,ae,Te){Te===null?j.matrix.copy(ae.matrixWorld):(j.matrix.copy(Te.matrixWorld),j.matrix.invert(),j.matrix.multiply(ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=As*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(j){return m[j]};let Ze=null;function it(j,ae){if(h=ae.getViewerPose(l||o),p=ae,h!==null){let Te=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Oe=!1;Te.length!==I.cameras.length&&(I.cameras.length=0,Oe=!0);for(let L=0;L<Te.length;L++){let te=Te[L],ne=null;if(d!==null)ne=d.getViewport(te);else{let K=u.getViewSubImage(f,te);ne=K.viewport,L===0&&(e.setRenderTargetTextures(_,K.colorTexture,K.depthStencilTexture),e.setRenderTarget(_))}let q=R[L];q===void 0&&(q=new Gt,q.layers.enable(L),q.viewport=new xt,R[L]=q),q.matrix.fromArray(te.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(te.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(ne.x,ne.y,ne.width,ne.height),L===0&&(I.matrix.copy(q.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Oe===!0&&I.cameras.push(q)}let W=s.enabledFeatures;if(W&&W.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let L=u.getDepthInformation(Te[0]);L&&L.isValid&&L.texture&&g.init(L,s.renderState)}if(W&&W.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let L=0;L<Te.length;L++){let te=Te[L].camera;if(te){let ne=m[te];ne||(ne=new Co,m[te]=ne);let q=u.getCameraImage(te);ne.sourceTexture=q}}}}for(let Te=0;Te<T.length;Te++){let Oe=E[Te],W=T[Te];Oe!==null&&W!==void 0&&W.update(Oe,ae,l||o)}Ze&&Ze(j,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),p=null}let qe=new jf;qe.setAnimationLoop(it),this.setAnimationLoop=function(j){Ze=j},this.dispose=function(){}}},zs=new ii,cv=new lt;function lv(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,eu(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,y,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,v,y):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===vn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===vn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=e.get(m),y=v.envMap,_=v.envMapRotation;y&&(g.envMap.value=y,zs.copy(_),zs.x*=-1,zs.y*=-1,zs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),g.envMapRotation.value.setFromMatrix4(cv.makeRotationFromEuler(zs)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,v,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function hv(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){let _=y.program;i.uniformBlockBinding(v,_)}function l(v,y){let _=s[v.id];_===void 0&&(p(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",g));let T=y.program;i.updateUBOMapping(v,T);let E=e.render.frame;r[v.id]!==E&&(f(v),r[v.id]=E)}function h(v){let y=u();v.__bindingPointIndex=y;let _=n.createBuffer(),T=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let y=s[v.id],_=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let E=0,C=_.length;E<C;E++){let P=Array.isArray(_[E])?_[E]:[_[E]];for(let b=0,M=P.length;b<M;b++){let R=P[b];if(d(R,E,b,T)===!0){let I=R.__offset,U=Array.isArray(R.value)?R.value:[R.value],B=0;for(let N=0;N<U.length;N++){let H=U[N],$=x(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,I+B,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,B),B+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,y,_,T){let E=v.value,C=y+"_"+_;if(T[C]===void 0)return typeof E=="number"||typeof E=="boolean"?T[C]=E:T[C]=E.clone(),!0;{let P=T[C];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return T[C]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function p(v){let y=v.uniforms,_=0,T=16;for(let C=0,P=y.length;C<P;C++){let b=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,R=b.length;M<R;M++){let I=b[M],U=Array.isArray(I.value)?I.value:[I.value];for(let B=0,N=U.length;B<N;B++){let H=U[B],$=x(H),V=_%T,oe=V%$.boundary,le=V+oe;_+=oe,le!==0&&T-le<$.storage&&(_+=T-le),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=$.storage}}}let E=_%T;return E>0&&(_+=T-E),v.__size=_,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){let y=v.target;y.removeEventListener("dispose",g);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var Sl=class{constructor(e={}){let{canvas:t=yf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,T=!1;this._outputColorSpace=Rt;let E=0,C=0,P=null,b=-1,M=null,R=new xt,I=new xt,U=null,B=new Be(0),N=0,H=t.width,$=t.height,V=1,oe=null,le=null,ye=new xt(0,0,H,$),ve=new xt(0,0,H,$),Ze=!1,it=new is,qe=!1,j=!1,ae=new lt,Te=new D,Oe=new xt,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function He(){return P===null?V:1}let L=i;function te(A,k){return t.getContext(A,k)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",fe,!1),L===null){let k="webgl2";if(L=te(k,A),L===null)throw te(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ne,q,K,de,ee,F,Q,ie,w,S,O,X,se,Y,Ae,pe,Re,Pe,he,we,Xe,ze,be,Qe;function z(){ne=new R_(L),ne.init(),ze=new rv(L,ne),q=new M_(L,ne,e,ze),K=new iv(L,ne),q.reversedDepthBuffer&&f&&K.buffers.depth.setReversed(!0),de=new P_(L),ee=new Wy,F=new sv(L,ne,K,ee,q,ze,de),Q=new b_(_),ie=new A_(_),w=new Bg(L),be=new y_(L,w),S=new C_(L,w,de,be),O=new D_(L,S,w,de),he=new L_(L,q,F),pe=new S_(ee),X=new Gy(_,Q,ie,ne,q,be,pe),se=new lv(_,ee),Y=new qy,Ae=new jy(ne),Pe=new __(_,Q,ie,K,O,d,c),Re=new tv(_,O,q),Qe=new hv(L,de,q,K),we=new v_(L,ne,de),Xe=new I_(L,ne,de),de.programs=X.programs,_.capabilities=q,_.extensions=ne,_.properties=ee,_.renderLists=Y,_.shadowMap=Re,_.state=K,_.info=de}z();let ge=new _u(_,L);this.xr=ge,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let A=ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(H,$,!1))},this.getSize=function(A){return A.set(H,$)},this.setSize=function(A,k,Z=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,$=k,t.width=Math.floor(A*V),t.height=Math.floor(k*V),Z===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(H*V,$*V).floor()},this.setDrawingBufferSize=function(A,k,Z){H=A,$=k,V=Z,t.width=Math.floor(A*Z),t.height=Math.floor(k*Z),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(ye)},this.setViewport=function(A,k,Z,J){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,k,Z,J),K.viewport(R.copy(ye).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(ve)},this.setScissor=function(A,k,Z,J){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,k,Z,J),K.scissor(I.copy(ve).multiplyScalar(V).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(A){K.setScissorTest(Ze=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){le=A},this.getClearColor=function(A){return A.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,Z=!0){let J=0;if(A){let G=!1;if(P!==null){let me=P.texture.format;G=me===Vc||me===kc||me===Hc}if(G){let me=P.texture.type,Ee=me===ai||me===cs||me===Nr||me===Br||me===Bc||me===Oc,Ue=Pe.getClearColor(),Ie=Pe.getClearAlpha(),We=Ue.r,Ye=Ue.g,Ve=Ue.b;Ee?(p[0]=We,p[1]=Ye,p[2]=Ve,p[3]=Ie,L.clearBufferuiv(L.COLOR,0,p)):(x[0]=We,x[1]=Ye,x[2]=Ve,x[3]=Ie,L.clearBufferiv(L.COLOR,0,x))}else J|=L.COLOR_BUFFER_BIT}k&&(J|=L.DEPTH_BUFFER_BIT),Z&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Pe.dispose(),Y.dispose(),Ae.dispose(),ee.dispose(),Q.dispose(),ie.dispose(),O.dispose(),be.dispose(),Qe.dispose(),X.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",fi),ge.removeEventListener("sessionend",Ku),xs.stop()};function Me(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let A=de.autoReset,k=Re.enabled,Z=Re.autoUpdate,J=Re.needsUpdate,G=Re.type;z(),de.autoReset=A,Re.enabled=k,Re.autoUpdate=Z,Re.needsUpdate=J,Re.type=G}function fe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ce(A){let k=A.target;k.removeEventListener("dispose",ce),Fe(k)}function Fe(A){$e(A),ee.remove(A)}function $e(A){let k=ee.get(A).programs;k!==void 0&&(k.forEach(function(Z){X.releaseProgram(Z)}),A.isShaderMaterial&&X.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,Z,J,G,me){k===null&&(k=W);let Ee=G.isMesh&&G.matrixWorld.determinant()<0,Ue=om(A,k,Z,J,G);K.setMaterial(J,Ee);let Ie=Z.index,We=1;if(J.wireframe===!0){if(Ie=S.getWireframeAttribute(Z),Ie===void 0)return;We=2}let Ye=Z.drawRange,Ve=Z.attributes.position,ct=Ye.start*We,yt=(Ye.start+Ye.count)*We;me!==null&&(ct=Math.max(ct,me.start*We),yt=Math.min(yt,(me.start+me.count)*We)),Ie!==null?(ct=Math.max(ct,0),yt=Math.min(yt,Ie.count)):Ve!=null&&(ct=Math.max(ct,0),yt=Math.min(yt,Ve.count));let Nt=yt-ct;if(Nt<0||Nt===1/0)return;be.setup(G,J,Ue,Z,Ie);let Et,vt=we;if(Ie!==null&&(Et=w.get(Ie),vt=Xe,vt.setIndex(Et)),G.isMesh)J.wireframe===!0?(K.setLineWidth(J.wireframeLinewidth*He()),vt.setMode(L.LINES)):vt.setMode(L.TRIANGLES);else if(G.isLine){let Ge=J.linewidth;Ge===void 0&&(Ge=1),K.setLineWidth(Ge*He()),G.isLineSegments?vt.setMode(L.LINES):G.isLineLoop?vt.setMode(L.LINE_LOOP):vt.setMode(L.LINE_STRIP)}else G.isPoints?vt.setMode(L.POINTS):G.isSprite&&vt.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))vt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ge=G._multiDrawStarts,It=G._multiDrawCounts,dt=G._multiDrawCount,In=Ie?w.get(Ie).bytesPerElement:1,tr=ee.get(J).currentProgram.getUniforms();for(let Pn=0;Pn<dt;Pn++)tr.setValue(L,"_gl_DrawID",Pn),vt.render(Ge[Pn]/In,It[Pn])}else if(G.isInstancedMesh)vt.renderInstances(ct,Nt,G.count);else if(Z.isInstancedBufferGeometry){let Ge=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,It=Math.min(Z.instanceCount,Ge);vt.renderInstances(ct,Nt,It)}else vt.render(ct,Nt)};function Mt(A,k,Z){A.transparent===!0&&A.side===ot&&A.forceSinglePass===!1?(A.side=vn,A.needsUpdate=!0,va(A,k,Z),A.side=Di,A.needsUpdate=!0,va(A,k,Z),A.side=ot):va(A,k,Z)}this.compile=function(A,k,Z=null){Z===null&&(Z=A),m=Ae.get(Z),m.init(k),y.push(m),Z.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),A!==Z&&A.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();let J=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let me=G.material;if(me)if(Array.isArray(me))for(let Ee=0;Ee<me.length;Ee++){let Ue=me[Ee];Mt(Ue,Z,G),J.add(Ue)}else Mt(me,Z,G),J.add(me)}),m=y.pop(),J},this.compileAsync=function(A,k,Z=null){let J=this.compile(A,k,Z);return new Promise(G=>{function me(){if(J.forEach(function(Ee){ee.get(Ee).currentProgram.isReady()&&J.delete(Ee)}),J.size===0){G(A);return}setTimeout(me,10)}ne.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let ft=null;function wi(A){ft&&ft(A)}function fi(){xs.stop()}function Ku(){xs.start()}let xs=new jf;xs.setAnimationLoop(wi),typeof self<"u"&&xs.setContext(self),this.setAnimationLoop=function(A){ft=A,ge.setAnimationLoop(A),A===null?xs.stop():xs.start()},ge.addEventListener("sessionstart",fi),ge.addEventListener("sessionend",Ku),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(k),k=ge.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,k,P),m=Ae.get(A,y.length),m.init(k),y.push(m),ae.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),it.setFromProjectionMatrix(ae,ei,k.reversedDepth),j=this.localClippingEnabled,qe=pe.init(this.clippingPlanes,j),g=Y.get(A,v.length),g.init(),v.push(g),ge.enabled===!0&&ge.isPresenting===!0){let me=_.xr.getDepthSensingMesh();me!==null&&Zl(me,k,-1/0,_.sortObjects)}Zl(A,k,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(oe,le),xe=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,xe&&Pe.addToRenderList(g,A),this.info.render.frame++,qe===!0&&pe.beginShadows();let Z=m.state.shadowsArray;Re.render(Z,A,k),qe===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=g.opaque,G=g.transmissive;if(m.setupLights(),k.isArrayCamera){let me=k.cameras;if(G.length>0)for(let Ee=0,Ue=me.length;Ee<Ue;Ee++){let Ie=me[Ee];Qu(J,G,A,Ie)}xe&&Pe.render(A);for(let Ee=0,Ue=me.length;Ee<Ue;Ee++){let Ie=me[Ee];ju(g,A,Ie,Ie.viewport)}}else G.length>0&&Qu(J,G,A,k),xe&&Pe.render(A),ju(g,A,k);P!==null&&C===0&&(F.updateMultisampleRenderTarget(P),F.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(_,A,k),be.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],qe===!0&&pe.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Zl(A,k,Z,J){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||it.intersectsSprite(A)){J&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ae);let Ee=O.update(A),Ue=A.material;Ue.visible&&g.push(A,Ee,Ue,Z,Oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||it.intersectsObject(A))){let Ee=O.update(A),Ue=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Oe.copy(Ee.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(ae)),Array.isArray(Ue)){let Ie=Ee.groups;for(let We=0,Ye=Ie.length;We<Ye;We++){let Ve=Ie[We],ct=Ue[Ve.materialIndex];ct&&ct.visible&&g.push(A,Ee,ct,Z,Oe.z,Ve)}}else Ue.visible&&g.push(A,Ee,Ue,Z,Oe.z,null)}}let me=A.children;for(let Ee=0,Ue=me.length;Ee<Ue;Ee++)Zl(me[Ee],k,Z,J)}function ju(A,k,Z,J){let G=A.opaque,me=A.transmissive,Ee=A.transparent;m.setupLightsView(Z),qe===!0&&pe.setGlobalState(_.clippingPlanes,Z),J&&K.viewport(R.copy(J)),G.length>0&&ya(G,k,Z),me.length>0&&ya(me,k,Z),Ee.length>0&&ya(Ee,k,Z),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Qu(A,k,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new xi(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Fr:ai,minFilter:as,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let me=m.state.transmissionRenderTarget[J.id],Ee=J.viewport||R;me.setSize(Ee.z*_.transmissionResolutionScale,Ee.w*_.transmissionResolutionScale);let Ue=_.getRenderTarget(),Ie=_.getActiveCubeFace(),We=_.getActiveMipmapLevel();_.setRenderTarget(me),_.getClearColor(B),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear(),xe&&Pe.render(Z);let Ye=_.toneMapping;_.toneMapping=Oi;let Ve=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),qe===!0&&pe.setGlobalState(_.clippingPlanes,J),ya(A,Z,J),F.updateMultisampleRenderTarget(me),F.updateRenderTargetMipmap(me),ne.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let yt=0,Nt=k.length;yt<Nt;yt++){let Et=k[yt],vt=Et.object,Ge=Et.geometry,It=Et.material,dt=Et.group;if(It.side===ot&&vt.layers.test(J.layers)){let In=It.side;It.side=vn,It.needsUpdate=!0,ed(vt,Z,J,Ge,It,dt),It.side=In,It.needsUpdate=!0,ct=!0}}ct===!0&&(F.updateMultisampleRenderTarget(me),F.updateRenderTargetMipmap(me))}_.setRenderTarget(Ue,Ie,We),_.setClearColor(B,N),Ve!==void 0&&(J.viewport=Ve),_.toneMapping=Ye}function ya(A,k,Z){let J=k.isScene===!0?k.overrideMaterial:null;for(let G=0,me=A.length;G<me;G++){let Ee=A[G],Ue=Ee.object,Ie=Ee.geometry,We=Ee.group,Ye=Ee.material;Ye.allowOverride===!0&&J!==null&&(Ye=J),Ue.layers.test(Z.layers)&&ed(Ue,k,Z,Ie,Ye,We)}}function ed(A,k,Z,J,G,me){A.onBeforeRender(_,k,Z,J,G,me),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(_,k,Z,J,A,me),G.transparent===!0&&G.side===ot&&G.forceSinglePass===!1?(G.side=vn,G.needsUpdate=!0,_.renderBufferDirect(Z,k,J,G,A,me),G.side=Di,G.needsUpdate=!0,_.renderBufferDirect(Z,k,J,G,A,me),G.side=ot):_.renderBufferDirect(Z,k,J,G,A,me),A.onAfterRender(_,k,Z,J,G,me)}function va(A,k,Z){k.isScene!==!0&&(k=W);let J=ee.get(A),G=m.state.lights,me=m.state.shadowsArray,Ee=G.state.version,Ue=X.getParameters(A,G.state,me,k,Z),Ie=X.getProgramCacheKey(Ue),We=J.programs;J.environment=A.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(A.isMeshStandardMaterial?ie:Q).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",ce),We=new Map,J.programs=We);let Ye=We.get(Ie);if(Ye!==void 0){if(J.currentProgram===Ye&&J.lightsStateVersion===Ee)return nd(A,Ue),Ye}else Ue.uniforms=X.getUniforms(A),A.onBeforeCompile(Ue,_),Ye=X.acquireProgram(Ue,Ie),We.set(Ie,Ye),J.uniforms=Ue.uniforms;let Ve=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=pe.uniform),nd(A,Ue),J.needsLights=cm(A),J.lightsStateVersion=Ee,J.needsLights&&(Ve.ambientLightColor.value=G.state.ambient,Ve.lightProbe.value=G.state.probe,Ve.directionalLights.value=G.state.directional,Ve.directionalLightShadows.value=G.state.directionalShadow,Ve.spotLights.value=G.state.spot,Ve.spotLightShadows.value=G.state.spotShadow,Ve.rectAreaLights.value=G.state.rectArea,Ve.ltc_1.value=G.state.rectAreaLTC1,Ve.ltc_2.value=G.state.rectAreaLTC2,Ve.pointLights.value=G.state.point,Ve.pointLightShadows.value=G.state.pointShadow,Ve.hemisphereLights.value=G.state.hemi,Ve.directionalShadowMap.value=G.state.directionalShadowMap,Ve.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ve.spotShadowMap.value=G.state.spotShadowMap,Ve.spotLightMatrix.value=G.state.spotLightMatrix,Ve.spotLightMap.value=G.state.spotLightMap,Ve.pointShadowMap.value=G.state.pointShadowMap,Ve.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=Ye,J.uniformsList=null,Ye}function td(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=kr.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function nd(A,k){let Z=ee.get(A);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function om(A,k,Z,J,G){k.isScene!==!0&&(k=W),F.resetTextureUnits();let me=k.fog,Ee=J.isMeshStandardMaterial?k.environment:null,Ue=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ts,Ie=(J.isMeshStandardMaterial?ie:Q).get(J.envMap||Ee),We=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ye=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ve=!!Z.morphAttributes.position,ct=!!Z.morphAttributes.normal,yt=!!Z.morphAttributes.color,Nt=Oi;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Nt=_.toneMapping);let Et=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,vt=Et!==void 0?Et.length:0,Ge=ee.get(J),It=m.state.lights;if(qe===!0&&(j===!0||A!==M)){let gn=A===M&&J.id===b;pe.setState(J,A,gn)}let dt=!1;J.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==It.state.version||Ge.outputColorSpace!==Ue||G.isBatchedMesh&&Ge.batching===!1||!G.isBatchedMesh&&Ge.batching===!0||G.isBatchedMesh&&Ge.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ge.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ge.instancing===!1||!G.isInstancedMesh&&Ge.instancing===!0||G.isSkinnedMesh&&Ge.skinning===!1||!G.isSkinnedMesh&&Ge.skinning===!0||G.isInstancedMesh&&Ge.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ge.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ge.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ge.instancingMorph===!1&&G.morphTexture!==null||Ge.envMap!==Ie||J.fog===!0&&Ge.fog!==me||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==pe.numPlanes||Ge.numIntersection!==pe.numIntersection)||Ge.vertexAlphas!==We||Ge.vertexTangents!==Ye||Ge.morphTargets!==Ve||Ge.morphNormals!==ct||Ge.morphColors!==yt||Ge.toneMapping!==Nt||Ge.morphTargetsCount!==vt)&&(dt=!0):(dt=!0,Ge.__version=J.version);let In=Ge.currentProgram;dt===!0&&(In=va(J,k,G));let tr=!1,Pn=!1,jr=!1,Pt=In.getUniforms(),kn=Ge.uniforms;if(K.useProgram(In.program)&&(tr=!0,Pn=!0,jr=!0),J.id!==b&&(b=J.id,Pn=!0),tr||M!==A){K.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(L,"projectionMatrix",A.projectionMatrix),Pt.setValue(L,"viewMatrix",A.matrixWorldInverse);let En=Pt.map.cameraPosition;En!==void 0&&En.setValue(L,Te.setFromMatrixPosition(A.matrixWorld)),q.logarithmicDepthBuffer&&Pt.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Pt.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Pn=!0,jr=!0)}if(G.isSkinnedMesh){Pt.setOptional(L,G,"bindMatrix"),Pt.setOptional(L,G,"bindMatrixInverse");let gn=G.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Pt.setValue(L,"boneTexture",gn.boneTexture,F))}G.isBatchedMesh&&(Pt.setOptional(L,G,"batchingTexture"),Pt.setValue(L,"batchingTexture",G._matricesTexture,F),Pt.setOptional(L,G,"batchingIdTexture"),Pt.setValue(L,"batchingIdTexture",G._indirectTexture,F),Pt.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&Pt.setValue(L,"batchingColorTexture",G._colorsTexture,F));let Vn=Z.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&he.update(G,Z,In),(Pn||Ge.receiveShadow!==G.receiveShadow)&&(Ge.receiveShadow=G.receiveShadow,Pt.setValue(L,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(kn.envMap.value=Ie,kn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(kn.envMapIntensity.value=k.environmentIntensity),Pn&&(Pt.setValue(L,"toneMappingExposure",_.toneMappingExposure),Ge.needsLights&&am(kn,jr),me&&J.fog===!0&&se.refreshFogUniforms(kn,me),se.refreshMaterialUniforms(kn,J,V,$,m.state.transmissionRenderTarget[A.id]),kr.upload(L,td(Ge),kn,F)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(kr.upload(L,td(Ge),kn,F),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Pt.setValue(L,"center",G.center),Pt.setValue(L,"modelViewMatrix",G.modelViewMatrix),Pt.setValue(L,"normalMatrix",G.normalMatrix),Pt.setValue(L,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let gn=J.uniformsGroups;for(let En=0,$l=gn.length;En<$l;En++){let _s=gn[En];Qe.update(_s,In),Qe.bind(_s,In)}}return In}function am(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function cm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,k,Z){let J=ee.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ee.get(A.texture).__webglTexture=k,ee.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){let Z=ee.get(A);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0};let lm=L.createFramebuffer();this.setRenderTarget=function(A,k=0,Z=0){P=A,E=k,C=Z;let J=!0,G=null,me=!1,Ee=!1;if(A){let Ie=ee.get(A);if(Ie.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(L.FRAMEBUFFER,null),J=!1;else if(Ie.__webglFramebuffer===void 0)F.setupRenderTarget(A);else if(Ie.__hasExternalTextures)F.rebindTextures(A,ee.get(A.texture).__webglTexture,ee.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ve=A.depthTexture;if(Ie.__boundDepthTexture!==Ve){if(Ve!==null&&ee.has(Ve)&&(A.width!==Ve.image.width||A.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(A)}}let We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ee=!0);let Ye=ee.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ye[k])?G=Ye[k][Z]:G=Ye[k],me=!0):A.samples>0&&F.useMultisampledRTT(A)===!1?G=ee.get(A).__webglMultisampledFramebuffer:Array.isArray(Ye)?G=Ye[Z]:G=Ye,R.copy(A.viewport),I.copy(A.scissor),U=A.scissorTest}else R.copy(ye).multiplyScalar(V).floor(),I.copy(ve).multiplyScalar(V).floor(),U=Ze;if(Z!==0&&(G=lm),K.bindFramebuffer(L.FRAMEBUFFER,G)&&J&&K.drawBuffers(A,G),K.viewport(R),K.scissor(I),K.setScissorTest(U),me){let Ie=ee.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ie.__webglTexture,Z)}else if(Ee){let Ie=k;for(let We=0;We<A.textures.length;We++){let Ye=ee.get(A.textures[We]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+We,Ye.__webglTexture,Z,Ie)}}else if(A!==null&&Z!==0){let Ie=ee.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ie.__webglTexture,Z)}b=-1},this.readRenderTargetPixels=function(A,k,Z,J,G,me,Ee,Ue=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ie=Ie[Ee]),Ie){K.bindFramebuffer(L.FRAMEBUFFER,Ie);try{let We=A.textures[Ue],Ye=We.format,Ve=We.type;if(!q.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-J&&Z>=0&&Z<=A.height-G&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ue),L.readPixels(k,Z,J,G,ze.convert(Ye),ze.convert(Ve),me))}finally{let We=P!==null?ee.get(P).__webglFramebuffer:null;K.bindFramebuffer(L.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,k,Z,J,G,me,Ee,Ue=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ie=Ie[Ee]),Ie)if(k>=0&&k<=A.width-J&&Z>=0&&Z<=A.height-G){K.bindFramebuffer(L.FRAMEBUFFER,Ie);let We=A.textures[Ue],Ye=We.format,Ve=We.type;if(!q.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ct),L.bufferData(L.PIXEL_PACK_BUFFER,me.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ue),L.readPixels(k,Z,J,G,ze.convert(Ye),ze.convert(Ve),0);let yt=P!==null?ee.get(P).__webglFramebuffer:null;K.bindFramebuffer(L.FRAMEBUFFER,yt);let Nt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await vf(L,Nt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ct),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,me),L.deleteBuffer(ct),L.deleteSync(Nt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,Z=0){let J=Math.pow(2,-Z),G=Math.floor(A.image.width*J),me=Math.floor(A.image.height*J),Ee=k!==null?k.x:0,Ue=k!==null?k.y:0;F.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,Ee,Ue,G,me),K.unbindTexture()};let hm=L.createFramebuffer(),um=L.createFramebuffer();this.copyTextureToTexture=function(A,k,Z=null,J=null,G=0,me=null){me===null&&(G!==0?(br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=G,G=0):me=0);let Ee,Ue,Ie,We,Ye,Ve,ct,yt,Nt,Et=A.isCompressedTexture?A.mipmaps[me]:A.image;if(Z!==null)Ee=Z.max.x-Z.min.x,Ue=Z.max.y-Z.min.y,Ie=Z.isBox3?Z.max.z-Z.min.z:1,We=Z.min.x,Ye=Z.min.y,Ve=Z.isBox3?Z.min.z:0;else{let Vn=Math.pow(2,-G);Ee=Math.floor(Et.width*Vn),Ue=Math.floor(Et.height*Vn),A.isDataArrayTexture?Ie=Et.depth:A.isData3DTexture?Ie=Math.floor(Et.depth*Vn):Ie=1,We=0,Ye=0,Ve=0}J!==null?(ct=J.x,yt=J.y,Nt=J.z):(ct=0,yt=0,Nt=0);let vt=ze.convert(k.format),Ge=ze.convert(k.type),It;k.isData3DTexture?(F.setTexture3D(k,0),It=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(F.setTexture2DArray(k,0),It=L.TEXTURE_2D_ARRAY):(F.setTexture2D(k,0),It=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);let dt=L.getParameter(L.UNPACK_ROW_LENGTH),In=L.getParameter(L.UNPACK_IMAGE_HEIGHT),tr=L.getParameter(L.UNPACK_SKIP_PIXELS),Pn=L.getParameter(L.UNPACK_SKIP_ROWS),jr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Et.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Et.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,We),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve);let Pt=A.isDataArrayTexture||A.isData3DTexture,kn=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){let Vn=ee.get(A),gn=ee.get(k),En=ee.get(Vn.__renderTarget),$l=ee.get(gn.__renderTarget);K.bindFramebuffer(L.READ_FRAMEBUFFER,En.__webglFramebuffer),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,$l.__webglFramebuffer);for(let _s=0;_s<Ie;_s++)Pt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ee.get(A).__webglTexture,G,Ve+_s),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ee.get(k).__webglTexture,me,Nt+_s)),L.blitFramebuffer(We,Ye,Ee,Ue,ct,yt,Ee,Ue,L.DEPTH_BUFFER_BIT,L.NEAREST);K.bindFramebuffer(L.READ_FRAMEBUFFER,null),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||ee.has(A)){let Vn=ee.get(A),gn=ee.get(k);K.bindFramebuffer(L.READ_FRAMEBUFFER,hm),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,um);for(let En=0;En<Ie;En++)Pt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vn.__webglTexture,G,Ve+En):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Vn.__webglTexture,G),kn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gn.__webglTexture,me,Nt+En):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,gn.__webglTexture,me),G!==0?L.blitFramebuffer(We,Ye,Ee,Ue,ct,yt,Ee,Ue,L.COLOR_BUFFER_BIT,L.NEAREST):kn?L.copyTexSubImage3D(It,me,ct,yt,Nt+En,We,Ye,Ee,Ue):L.copyTexSubImage2D(It,me,ct,yt,We,Ye,Ee,Ue);K.bindFramebuffer(L.READ_FRAMEBUFFER,null),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else kn?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(It,me,ct,yt,Nt,Ee,Ue,Ie,vt,Ge,Et.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(It,me,ct,yt,Nt,Ee,Ue,Ie,vt,Et.data):L.texSubImage3D(It,me,ct,yt,Nt,Ee,Ue,Ie,vt,Ge,Et):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,me,ct,yt,Ee,Ue,vt,Ge,Et.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,me,ct,yt,Et.width,Et.height,vt,Et.data):L.texSubImage2D(L.TEXTURE_2D,me,ct,yt,Ee,Ue,vt,Ge,Et);L.pixelStorei(L.UNPACK_ROW_LENGTH,dt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,In),L.pixelStorei(L.UNPACK_SKIP_PIXELS,tr),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,jr),me===0&&k.generateMipmaps&&L.generateMipmap(It),K.unbindTexture()},this.initRenderTarget=function(A){ee.get(A).__webglFramebuffer===void 0&&F.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?F.setTextureCube(A,0):A.isData3DTexture?F.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?F.setTexture2DArray(A,0):F.setTexture2D(A,0),K.unbindTexture()},this.resetState=function(){E=0,C=0,P=null,K.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};function Gr(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new rt,l=0;for(let h=0;h<n.length;++h){let u=n[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=ip(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let p=ip(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}return c}function ip(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new St(o,t,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let x=h.getComponent(f,p);a.setComponent(f+u,p,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var ki=D,uv=new ki(0,1,0),Vi=Math.PI*2,dv=Dt.clamp;function vu(n,e,t,i,s,r,o=0){let a=l=>{for(let h=0;h<128;h++){let u=h/128*Vi,f=l.x+Math.sin(u)*e,d=l.z+Math.cos(u)*t;if(f-i<-70||f+i>70||d-i<-134||d+i>36||l.y-s-o-i<r.floor(f,d)+.18)return!1;for(let p of[l.y-s-o,l.y,l.y+s])for(let x of r.rocks)if(((f-x.x)/(x.rx+i))**2+((p-x.y)/(x.ry+i))**2+((d-x.z)/(x.rz+i))**2<1)return!1}return!0},c=[[0,0]];for(let l of[3,6,10,15])for(let h=0;h<12;h++)c.push([Math.cos(h*Vi/12)*l,Math.sin(h*Vi/12)*l]);for(let l of[0,2,4,6])for(let[h,u]of c){let f=new ki(n.x+h,n.y+l,n.z+u);if(!(f.y+s+i>11)&&a(f))return f}throw new Error("\u751F\u7269\u822A\u7EBF\u6CA1\u6709\u5B89\u5168\u7A7A\u95F4")}function tn(n,e={}){return new At({color:n,roughness:.58,metalness:.06,...e})}function dn(n,e,t,i=0,s=0,r=0,o=null){let a=new nt(e,t);return a.position.set(i,s,r),o&&a.scale.set(...o),n.add(a),a}function ls(n,e=.015,t=24){return new An(new yn(n.map(i=>new ki(...i))),t,e,5,!1)}function Qo(n){let e=new rt;e.setAttribute("position",new ke(n.flat(),3));let t=[];for(let i=1;i<n.length-1;i++)t.push(0,i,i+1);return e.setIndex(t),e.computeVertexNormals(),e.setAttribute("uv",new ke(n.map((i,s)=>[s/(n.length-1),s===0?0:1]).flat(),2)),e}function Gi(n){let e=n.map(t=>{let i=t.index?t.toNonIndexed():t.clone();return i.deleteAttribute("uv"),i});return Gr(e)}function fv(n,e){let t=n.attributes.position,i=[],s=new Be;for(let r=0;r<t.count;r++)e(t.getX(r),t.getY(r),t.getZ(r),s),i.push(s.r,s.g,s.b);return n.setAttribute("color",new ke(i,3)),n}function pv(){let n=[[-.93,.035],[-.76,.08],[-.52,.19],[-.25,.29],[.06,.32],[.34,.27],[.56,.19],[.73,.115],[.83,.065],[.86,.035]],e=new Ps(n.map(([r,o])=>new re(o,r)),32);e.rotateZ(-Math.PI/2),e.scale(1,.94,.65);let t=new Be("#537d83"),i=new Be("#cad8b7"),s=new Be("#adb379");return fv(e,(r,o,a,c)=>{c.copy(i).lerp(t,dv((o+.27)/.56,0,1));let l=Math.exp(-(((o-.04)/.046)**2));c.lerp(s,l*.7);let h=(Math.sin(r*67+Math.sin(o*85)*1.1)+Math.sin(o*82+a*48))*.016;c.offsetHSL(0,0,h)})}function mv(){let n=document.createElement("canvas");n.width=n.height=512;let e=n.getContext("2d");e.fillStyle="#858585",e.fillRect(0,0,512,512);for(let i=0;i<48;i++)for(let s=0;s<32;s++){let r=s*16+i%2*8,o=i*11;e.beginPath(),e.ellipse(r,o,8,6,0,0,Math.PI),e.strokeStyle="#a3a3a3",e.lineWidth=1,e.stroke(),e.beginPath(),e.ellipse(r,o+.8,7,5,0,0,Math.PI),e.strokeStyle="#707070",e.lineWidth=.6,e.stroke()}return new _n(n)}function gv(n,e,t){let i=e.length,s=[],r=new pt,o=(E,C,P)=>{let b=new Tn(C,P,i);return b.name="marine-fish-"+E,b.instanceMatrix.setUsage(Jh),b.frustumCulled=!1,n.add(b),s.push(b),b},a=tn("#ffffff",{vertexColors:!0,roughness:.55,metalness:.12,bumpMap:mv(),bumpScale:.014});a.onBeforeCompile=E=>{E.uniforms.uMarineTime=t,E.vertexShader=E.vertexShader.replace("#include <common>",`#include <common>
uniform float uMarineTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float tailWeight=pow(clamp((.35-position.x)/1.28,0.,1.),2.); transformed.z+=sin(uMarineTime*5.4+instanceMatrix[3].x*.23-position.x*2.7)*tailWeight*.09;`)};let c=o("body",pv(),a),l=tn("#6e9189",{side:ot,roughness:.78}),h=Gi([Qo([[-.48,.2,0],[-.38,.33,0],[-.22,.42,0],[-.06,.44,0],[.13,.4,0],[.28,.32,0],[.37,.24,0]]),Qo([[-.52,-.2,0],[-.41,-.3,0],[-.22,-.34,0],[.05,-.27,0]]),Qo([[.36,-.01,.17],[.14,-.13,.39],[.01,-.18,.42],[-.07,-.18,.27]]),Qo([[.36,-.01,-.17],[.14,-.13,-.39],[.01,-.18,-.42],[-.07,-.18,-.27]])]),u=o("fins",h,l),f=o("tail",Qo([[0,0,0],[-.35,.33,.012],[-.25,.06,.012],[-.38,-.34,.012],[0,-.045,0]]),tn("#9cab8c",{side:ot,roughness:.62})),d=[],p=[],x=[];for(let E of[-1,1]){let C=new tt(.044,16,10);C.scale(1,1,.33),C.translate(.59,.074,E*.125),d.push(C);let P=new tt(.025,12,8);P.scale(1,1,.24),P.translate(.596,.075,E*.139),p.push(P),x.push(ls([[.37,.14,E*.17],[.3,.035,E*.205],[.32,-.12,E*.177]],.0045,20)),x.push(ls([[.836,.024,E*.043],[.796,-.005,E*.073],[.735,-.015,E*.096]],.003,16));for(let b=0;b<6;b++){let M=-.38+b*.11;x.push(ls([[M,.24,E*.006],[M+.025,.28+b*.012,E*.006],[M+.01,.32+b*.006,E*.006]],.0025,8))}}let g=o("eyes",Gi(d),tn("#d8d5ad",{roughness:.35})),m=o("pupils",Gi(p),tn("#142b30",{roughness:.25})),v=o("gills",Gi(x),tn("#3c6567")),y=e.map((E,C)=>({...E,id:C,scale:.85+C%5*.09,position:new ki,yaw:0,tailAngle:0})),_=(E,C,P,b,M)=>{r.position.copy(P),r.rotation.set(0,b,0),r.scale.setScalar(M),r.updateMatrix(),E.setMatrixAt(C,r.matrix)};function T(E){y.forEach((C,P)=>{let b=E*.15+C.phase,M=6.5,R=2.8;C.position.set(C.x+Math.sin(b)*M,C.y+Math.sin(E*.5+C.phase)*.28,C.z+Math.cos(b)*R);let I=Math.cos(b)*M*.15,U=-Math.sin(b)*R*.15;C.yaw=Math.atan2(-U,I);for(let N of[c,u,g,m,v])_(N,P,C.position,C.yaw,C.scale);let B=new ki(-.91,0,0).multiplyScalar(C.scale).applyAxisAngle(uv,C.yaw).add(C.position);C.tailAngle=Math.sin(E*5.4+C.position.x*.23+2.45)*.43,_(f,P,B,C.yaw+C.tailAngle,C.scale)});for(let C of s)C.instanceMatrix.needsUpdate=!0}return{states:y,batches:s,update:T}}function xv(n,e,t,i){let s=new st;s.name="marine-jellyfish-"+t,s.position.copy(e),n.add(s);let r=new st;s.add(r);let o=28,a=96,c=[],l=[],h=[],u=[],f=new Be("#9485bc"),d=new Be("#b1ddd0");for(let R=0;R<=o;R++){let I=R/o,U=I*Math.PI*.5,B=Math.sin(U)*.77,N=.72*Math.cos(U);for(let H=0;H<=a;H++){let $=H/a*Vi,V=Math.cos($*12),oe=B*(1+.035*V*I),le=R===o?.042*Math.cos($*12):0;c.push(Math.cos($)*oe,N+le,Math.sin($)*oe),h.push(H/a,I);let ye=d.clone().lerp(f,.2+Math.max(0,V)*.19+I*.18);if(l.push(ye.r,ye.g,ye.b),R<o&&H<a){let ve=R*(a+1)+H;u.push(ve,ve+a+1,ve+1,ve+1,ve+a+1,ve+a+2)}}}let p=new rt;p.setAttribute("position",new ke(c,3)),p.setAttribute("normal",new ke(new Float32Array(c.length),3)),p.setAttribute("color",new ke(l,3)),p.setAttribute("uv",new ke(h,2)),p.setIndex(u),p.computeVertexNormals();let x=tn("#ffffff",{vertexColors:!0,transparent:!0,opacity:.4,roughness:.25,metalness:0,depthWrite:!1,side:ot,emissive:"#376964",emissiveIntensity:.09});dn(r,p,x);let g=p.clone();g.scale(.89,.82,.89),dn(r,g,tn("#b7cdbb",{transparent:!0,opacity:.15,depthWrite:!1,side:ot,roughness:.55}));let m=[];for(let R=0;R<12;R++){let I=R/12*Vi,U=[];for(let B=1;B<=16;B++){let N=B/16*Math.PI*.5;U.push([Math.cos(I)*Math.sin(N)*.793,.725*Math.cos(N),Math.sin(I)*Math.sin(N)*.793])}m.push(ls(U,.007,20))}dn(r,Gi(m),tn("#c6cfcb",{transparent:!0,opacity:.33,depthWrite:!1,roughness:.6}));let v=[];for(let R=0;R<4;R++){let I=R*Math.PI/2,U=new Tt(.14,.027,6,18);U.rotateX(Math.PI/2),U.translate(Math.cos(I)*.16,.28,Math.sin(I)*.16),v.push(U)}dn(r,Gi(v),tn("#a28bc0",{transparent:!0,opacity:.36,depthWrite:!1,roughness:.6}));let y=[];for(let R=0;R<12;R++){let I=R/12*Vi,U=1.65+R%4*.3,B=[];for(let N=0;N<=18;N++){let H=N/18;B.push([Math.cos(I)*.68+Math.sin(H*7+R)*H*.13,-H*U,Math.sin(I)*.68+Math.cos(H*6+R)*H*.12])}y.push(ls(B,.011,24))}let _=tn("#a8bcc9",{transparent:!0,opacity:.58,depthWrite:!1,roughness:.65});_.onBeforeCompile=R=>{R.uniforms.uMarineTime=i,R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
uniform float uMarineTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float depth=max(0.,-position.y); transformed.x+=sin(uMarineTime*1.45+depth*2.0+position.z*3.0)*depth*.105; transformed.z+=cos(uMarineTime*1.12+depth*1.7+position.x*4.0)*depth*.085;`)};let T=dn(s,Gi(y),_),E=[];for(let R=0;R<4;R++){let I=R*Math.PI/2,U=[];for(let V=0;V<=24;V++){let oe=V/24;U.push([Math.cos(I)*(.18+oe*.18)+Math.sin(oe*8+R)*.025,-oe*1.55,Math.sin(I)*(.18+oe*.18)+Math.cos(oe*7+R)*.025])}let B=ls(U,.07,72),N=B.attributes.position,H=B.attributes.normal,$=B.attributes.uv;for(let V=0;V<N.count;V++){let oe=$.getX(V),le=$.getY(V)*Vi,ye=(.012+.012*Math.sin(oe*Math.PI))*Math.sin(oe*31+le*3+R);N.setXYZ(V,N.getX(V)+H.getX(V)*ye,N.getY(V)+H.getY(V)*ye,N.getZ(V)+H.getZ(V)*ye)}B.computeVertexNormals(),E.push(B)}let C=tn("#ada7c2",{transparent:!0,opacity:.48,depthWrite:!1,roughness:.68});C.onBeforeCompile=_.onBeforeCompile,dn(s,Gi(E),C);let P=.82+t%3*.13;s.scale.setScalar(P);let b=0;function M(R){b=Math.sin(R*1.75+t*.72),s.position.set(e.x+Math.sin(R*.18+t)*.32,e.y+Math.sin(R*.55+t*.7)*.55,e.z+Math.cos(R*.14+t)*.26),s.rotation.y=Math.sin(R*.16+t)*.18,r.scale.set(1-b*.075,1+b*.12,1-b*.075),T.scale.y=1-b*.025}return{root:s,bell:r,origin:e,update:M,get pulse(){return b}}}function sp(n=!1){let e=document.createElement("canvas");e.width=512,e.height=256;let t=e.getContext("2d");t.fillStyle=n?"#9aa18a":"#77856e",t.fillRect(0,0,512,256);for(let s=0;s<6500;s++){let r=s*83.174%512,o=s*41.631%256,a=n?2.2:1.2;t.fillStyle=s%2?"rgba(28,47,28,.07)":"rgba(204,208,161,.09)",t.beginPath(),t.ellipse(r,o,a,a*.75,0,0,Vi),t.fill()}if(n)for(let s=0;s<11;s++)for(let r=0;r<22;r++){let o=r*24+s%2*12,a=s*24;t.beginPath(),t.ellipse(o,a,9,7,.2,0,Vi),t.strokeStyle="#69786170",t.lineWidth=1.2,t.stroke()}let i=new _n(e);return i.colorSpace=Rt,i}function _v(n,e,t,i){let s=new st;s.name="marine-turtle-"+t,n.add(s);let r=tn("#b1b89a",{map:i,roughness:.76}),o=tn("#bec3a6",{map:sp(!0),roughness:.75}),a=tn("#4a6355",{roughness:.8});dn(s,new tt(1,40,24),r,0,.13,0,[1.34,.48,.85]);let c=[],l=(v,y)=>.14+.48*Math.sqrt(Math.max(.015,1-(v/1.34)**2-(y/.85)**2)),h=v=>{let y=[];for(let _=0;_<v.length;_++){let T=v[_],E=v[(_+1)%v.length];for(let C=0;C<5;C++){let P=C/5,b=T[0]+(E[0]-T[0])*P,M=T[1]+(E[1]-T[1])*P;y.push([b,l(b,M),M])}}y.push(y[0]),c.push(ls(y,.007,v.length*6))},u=[-1.12,-.71,-.25,.25,.71,1.12];for(let v=0;v<5;v++){let y=u[v],_=u[v+1],T=(y+_)/2,E=v===0||v===4?.17:.23;h([[y,0],[y+.08,-E],[T,-E-.04],[_-.08,-E],[_,0],[_-.08,E],[T,E+.04],[y+.08,E]])}for(let v of[-1,1])for(let y of[-.78,-.26,.26,.78]){let T=.55*Math.sqrt(1-(y/1.34)**2);h([[y-.22,v*.23],[y+.22,v*.23],[y+.22*.8,v*T],[y,v*(T+.07)],[y-.22*.8,v*T]])}dn(s,Gi(c),tn("#53664f",{roughness:.88})),dn(s,new tt(1,24,12),tn("#b9bba0",{roughness:.8}),0,-.12,0,[1.25,.17,.76]);let f=new Tt(1,.025,6,48);f.rotateX(Math.PI/2),f.scale(1.31,1,.82),dn(s,f,a,0,.05,0),dn(s,new tt(1,20,12),o,1.23,.04,0,[.42,.21,.23]),dn(s,new tt(1,24,16),o,1.59,.07,0,[.36,.24,.27]);for(let v of[-1,1])dn(s,new tt(.043,16,10),tn("#1b3431",{roughness:.35}),1.69,.13,v*.245,[1,1,.48]),dn(s,ls([[1.88,-.015,v*.09],[1.79,-.045,v*.17],[1.68,-.045,v*.205]],.008,12),a);let d=[];for(let v of[-1,1])for(let y of[!0,!1]){let _=new st;_.position.set(y?.68:-.86,-.06,v*.65),s.add(_);let T=new tt(1,20,12);T.scale(y?.72:.38,.07,y?.3:.22),T.rotateY(v*(y?-.64:.3)),T.translate(y?-.15:-.13,0,v*(y?.43:.18)),dn(_,T,o),d.push({hinge:_,side:v,front:y})}let p=new si(.11,.48,10);p.rotateZ(Math.PI/2),dn(s,p,o,-1.36,-.08,0);let x=0,g=0;function m(v){let y=v*.1+t*1.8,_=5.5,T=3.3;s.position.set(e.x+Math.sin(y)*_,e.y+Math.sin(v*.42+t)*.25,e.z+Math.cos(y)*T),x=Math.atan2(Math.sin(y)*T,Math.cos(y)*_),s.rotation.set(Math.sin(v*.42+t)*.035,x,Math.cos(v*.31+t)*.025),g=Math.sin(v*1.6+t);for(let E of d)E.hinge.rotation.x=E.side*g*(E.front?.4:.2),E.hinge.rotation.y=Math.cos(v*1.6+t)*E.side*(E.front?.13:.08)}return{root:s,origin:e,flippers:d,update:m,get yaw(){return x},get stroke(){return g}}}function rp(n,e,t,i){let s=e.filter(d=>!d.turtle).map((d,p)=>{let x=new ki(d.x,d.y,d.z);return p<7?x.set(-46+p*1.35,4+p*.12,-18+p*.6):p>=7&&p<14?x.set(12+(p-7)*.65,-12+(p-7)*.12,-54+(p-7)*.6):p>=28&&x.set(-14+(p-28)*2,2+(p-28)*.22,18+(p-28)*.7),x=vu(x,6.5,2.8,.85,.28,i),{...d,x:x.x,y:x.y,z:x.z}}),r={value:0},o=gv(n,s,r),a=sp(),c=e.filter(d=>d.turtle).map((d,p)=>{let x=p===1?new ki(-26,4,16):new ki(d.x,d.y,d.z);return _v(n,vu(x,5.5,3.3,1.5,.25,i),p,a)}),l=t.map((d,p)=>{let x=new ki(29+p%4*5,-6+p%3*.55,-76-Math.floor(p/4)*3);return xv(n,vu(x,.32,.26,.8,.55,i,2.4),p,r)});function h(d){r.value=d,o.update(d);for(let p of l)p.update(d);for(let p of c)p.update(d)}function u(){return{counts:{fish:o.states.length,jellyfish:l.length,turtles:c.length},fishBatches:o.batches.length,animalSprites:0,fish:o.states.map(d=>({id:d.id,position:d.position.toArray(),yaw:d.yaw,tailAngle:d.tailAngle,scale:d.scale})),jellyfish:l.map((d,p)=>({id:p,position:d.root.position.toArray(),bellScale:d.bell.scale.toArray(),pulse:d.pulse})),turtles:c.map((d,p)=>({id:p,position:d.root.position.toArray(),yaw:d.yaw,stroke:d.stroke,flippers:d.flippers.map(x=>x.hinge.rotation.x)}))}}function f(d,p=0){let x=d==="fish"?o.states[p]:d==="jellyfish"?l[p]:c[p];return d==="fish"?x.position.clone():x.root.position.clone()}return h(0),{update:h,snapshot:u,focus:f}}function op(n,e,t){let i=new Rs,s=new Gt(68,e.aspect,.04,12),r=new st;i.add(r),i.add(new Us("#d8f0ed","#16262c",2.1));let o=new ri("#ffc98f",5,5,2);o.position.set(0,-.15,.15),i.add(o);let a=new At({color:"#173b42",metalness:.56,roughness:.64,map:t}),c=new At({color:"#9d8054",metalness:.68,roughness:.4}),l=new At({color:"#07191e",metalness:.22,roughness:.78}),h=new sn({color:"#98dcca"}),u=[],f=new At({color:"#a9a08a",metalness:.8,roughness:.35}),d=0,p,x=-1,g,m=0,v,y=(M,R,I=0,U=0,B=0)=>{let N=new nt(M,R);return N.position.set(I,U,B),r.add(N),N},_=(M,R,I)=>y(new An(new yn(M.map(U=>new D(...U))),48,R,8,!1),I);function T(){r.traverse(M=>M.geometry?.dispose()),r.clear();for(let M of u)M.dispose();u=[],p?.dispose(),v=null}function E(){d=e.aspect,s.aspect=d,s.fov=68,s.updateProjectionMatrix(),T();let M=-1.25,R=Math.tan(Dt.degToRad(68)/2)*-M,I=R*d,U=[[-I*1.04,-R*1.15,M],[-I*.98,-R*.22,M],[-I*.94,R*.78,M],[-I*.7,R*.96,M],[0,R*1.01,M],[I*.7,R*.96,M],[I*.94,R*.78,M],[I*.98,-R*.22,M],[I*1.04,-R*1.15,M]];_(U,.078,a),_(U.map(([ve,Ze,it])=>[ve*.983,Ze*.978,it-.017]),.014,c);for(let ve of[-1,1]){_([[ve*I*.92,R*.79,M],[ve*I*.85,R*.15,M+.025],[ve*I*.77,-R*.62,M+.06]],.028,l),_([[ve*I*.92,R*.79,M-.01],[ve*I*.85,R*.15,M+.02],[ve*I*.77,-R*.62,M+.05]],.008,c);for(let Ze of[-.2,.3,.72])y(new tt(.016,10,8),f,ve*I*.96,R*Ze,M+.064)}let B=new Fi;B.moveTo(-I*1.08,-R*1.45),B.lineTo(-I*1.03,-R*.69),B.quadraticCurveTo(0,-R*.47,I*1.03,-R*.69),B.lineTo(I*1.08,-R*1.45),B.closePath(),y(new zo(B,{depth:.16,bevelEnabled:!0,bevelThickness:.027,bevelSize:.027,bevelSegments:2,steps:1}),a,0,0,M+.04),_([[-I*1.03,-R*.68,M+.19],[-I*.52,-R*.59,M+.19],[0,-R*.56,M+.19],[I*.52,-R*.59,M+.19],[I*1.03,-R*.68,M+.19]],.022,l),_([[-I*.86,-R*.65,M+.195],[0,-R*.57,M+.195],[I*.86,-R*.65,M+.195]],.004,h);let N=M+.255,H=Math.tan(Dt.degToRad(68)/2)*-(N+.025)*d,$=Math.min(H*.66,.7),V=R*.1,oe=-R*.65;y(new zt($*2+.06,V*2+.065,.05),l,0,oe,N-.025);let le=document.createElement("canvas");le.width=1024,le.height=256,g=le.getContext("2d"),p=new _n(le),p.colorSpace=Rt;let ye=new sn({map:p});u.push(ye),v=y(new on($*2,V*2),ye,0,oe,N+.004);for(let ve of[-1,1]){let Ze=ve*Math.min(I*.89,1.35),it=y(new Ht(.014,.02,R*.21,12),c,Ze,-R*.98,M+.47);it.rotation.z=ve*.24,y(new tt(.042,16,12),l,Ze-ve*.02,-R*.88,M+.47)}m=0,i.traverse(ve=>{ve.isMesh&&m++}),x=-1}function C(M){d!==e.aspect&&E();let R=Math.hypot(M.velocity.x,M.velocity.y,M.velocity.z),I=(M.heading*180/Math.PI%360+360)%360;if(x>=0&&M.time-x<.1)return;x=M.time;let U=g;U.fillStyle="#061c24",U.fillRect(0,0,1024,256),U.strokeStyle="#27625f",U.lineWidth=2,U.strokeRect(3,3,1018,250);for(let B of[342,682])U.beginPath(),U.moveTo(B,35),U.lineTo(B,215),U.stroke();U.textAlign="center",U.font='32px "PingFang SC",system-ui',U.fillStyle="#8bb9b6",["\u4E0B\u6F5C\u6DF1\u5EA6","\u822A\u901F","\u822A\u5411"].forEach((B,N)=>U.fillText(B,171+N*341,59)),U.fillStyle="#d8f5de",U.font='64px "PingFang SC",system-ui',[Math.round((M.surface??19)-M.y)+" m",R.toFixed(1)+" m/s",Math.round(I).toString().padStart(3,"0")+"\xB0"].forEach((B,N)=>U.fillText(B,171+N*341,145)),U.font='22px "PingFang SC",system-ui',U.fillStyle="#9cb9ad",["\u79BB\u5F00\u6D77\u9762\u540E\u5411\u4E0B\u8BA1\u91CF","\u677E\u952E\u7F13\u6162\u51CF\u901F","\u4E0E\u6F5C\u6C34\u8231\u540C\u6B65"].forEach((B,N)=>U.fillText(B,171+N*341,205)),p.needsUpdate=!0}function P(){d!==e.aspect&&E();let M=n.autoClear;n.autoClear=!1,n.clearDepth(),n.render(i,s),n.autoClear=M}E();function b(M){i.updateMatrixWorld(!0),s.updateMatrixWorld(!0);let{width:R,height:I}=M.geometry.parameters,U=new D(-R/2,I/2,0).applyMatrix4(M.matrixWorld).project(s),B=new D(R/2,-I/2,0).applyMatrix4(M.matrixWorld).project(s);return{left:(U.x+1)/2,top:(1-U.y)/2,right:(B.x+1)/2,bottom:(1-B.y)/2}}return{update:C,render:P,snapshot:()=>({geometryCount:m,aspect:d,openWindshield:!0,secondary3DPass:!0,loopieCount:0,needleCount:0,sideDecorations:"none",loopieBounds:[],screenBounds:b(v)})}}var Si=D,tb=new Si(0,1,0),Mu=Math.PI*2,Wr=(n,e={})=>new At({color:n,roughness:.66,metalness:.035,...e});function an(n,e,t){let i=n.attributes.position,s=new Float32Array(i.count*3),r=e.map(([a,c])=>[a,new Be(c)]),o=new Be;for(let a=0;a<i.count;a++){let c=Dt.clamp(t(i.getX(a),i.getY(a),i.getZ(a)),0,1),l=0;for(;l<r.length-2&&c>r[l+1][0];)l++;let h=r[l],u=r[l+1],f=Dt.clamp((c-h[0])/(u[0]-h[0]),0,1);o.copy(h[1]).lerp(u[1],f*f*(3-2*f)),o.toArray(s,a*3)}return n.setAttribute("color",new St(s,3)),n}function Mn(n,e={}){let t=Wr("#ffffff",{vertexColors:!0,emissive:"#ffffff",emissiveIntensity:n,...e});return t.onBeforeCompile=i=>{i.fragmentShader=i.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_COLOR
totalEmissiveRadiance*=vColor;
#endif`)},t}function Ct(n,e,t,i=[0,0,0],s=null){let r=new nt(e,t);return r.position.set(...i),s&&r.scale.set(...s),n.add(r),r}function Wi(n,e=.014){return new An(new yn(n.map(t=>new Si(...t))),36,e,5,!1)}function El(n){return Gr(n.map(e=>{let t=e.index?e.toNonIndexed():e.clone();return t.deleteAttribute("uv"),t}))}function wl(n,e,t,i){let s=[Math.abs(n-i.x),Math.abs(e-i.y),Math.abs(t-i.z)],r=[i.rx,i.ry,i.rz],o=r.map(h=>h*h);if(s.reduce((h,u,f)=>h+u*u/o[f],0)<=1)return 0;let a=h=>s.reduce((u,f,d)=>u+(r[d]*f/(h+o[d]))**2,0),c=0,l=Math.max(...r)*Math.hypot(...s);for(;a(l)>1;)l*=2;for(let h=0;h<32;h++){let u=(c+l)/2;a(u)>1?c=u:l=u}return Math.hypot(...s.map((h,u)=>h-o[u]*h/(l+o[u])))}function yv(n,e,t,i,s,r){let o=1/0,a=1/0;for(let c=0;c<192;c++){let l=c/192*Mu,h=n.x+Math.sin(l)*e,u=n.z+Math.cos(l)*t;if(h-i<8||h+i>29||u-i<-75||u+i>-30||n.y+s+i>-.7)return null;for(let f=0;f<=4;f++)for(let d=0;d<24;d++){let p=f/4,x=d/24*Mu,g=Math.cos(x)*i*p,m=Math.sin(x)*i*p,y=n.y-s-Math.sqrt(Math.max(0,i*i-g*g-m*m))-r.floor(h+g,u+m);if(o=Math.min(o,y),y<.28)return null}for(let f of r.rocks){let d=wl(h,n.y,u,f)-i-s;if(a=Math.min(a,d),d<.28)return null}}return{floorClearance:o,rockClearance:a}}function ap(n,e,t,i,s,r){for(let o of[0,1.5,3])for(let a of[0,-2,2,-4,4])for(let c of[0,-1.5,1.5,-3,3]){let l=n.clone().add(new Si(c,o,a)),h=yv(l,e,t,i,s,r);if(h)return{origin:l,rx:e,rz:t,r:i,bob:s,safety:h}}throw new Error("\u539F\u521B\u751F\u7269\u6CA1\u6709\u5B8C\u6574\u8EAB\u4F53\u51C0\u7A7A\u7684\u5CE1\u8C37\u822A\u7EBF")}function cp(n,e,t,i,s){let r=t*i+s;n.position.set(e.origin.x+Math.sin(r)*e.rx,e.origin.y+Math.sin(t*.4+s)*e.bob,e.origin.z+Math.cos(r)*e.rz);let o=Math.atan2(Math.sin(r)*e.rz,Math.cos(r)*e.rx);return n.rotation.set(Math.sin(t*.3+s)*.025,o,Math.sin(r)*.035),o}function ea(n,e,t,i){let s=t===0?[[0,"#37bda8"],[.3,"#3189bd"],[.66,"#6653b6"],[.88,"#af5c98"],[1,"#ec967b"]]:[[0,"#79c59b"],[.3,"#319aaf"],[.66,"#40569c"],[.88,"#8461ad"],[1,"#d989b3"]],r=Mn(.11,{roughness:.49}),o=Mn(.045,{roughness:.64}),a=Mn(.75,{roughness:.48}),c=f=>{f.uniforms.uAlienTime=i,f.uniforms.uAlienPhase={value:t*1.7},f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
uniform float uAlienTime,uAlienPhase;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float span=abs(position.z)/2.85;transformed.y+=sin(uAlienTime*1.35-span*2.6+position.x*.45+uAlienPhase)*pow(span,1.25)*.36;`)};for(let f of[r,a]){let d=f.onBeforeCompile;f.onBeforeCompile=p=>{d(p),c(p)}}Ct(n,an(new tt(1,36,20),[[0,"#315775"],[.45,"#bd9369"],[.72,"#e3c38b"],[1,"#f2dfb2"]],(f,d,p)=>(d+1)/2),o,[0,0,0],[1.72,.28,.39]);for(let f of[-1,1])for(let d=0;d<2;d++)Ct(n,new tt(.058,12,8),Wr("#233d43"),[1.4-d*.12,.08,f*(.24+d*.05)],[1,.4,1]);let l=[];for(let f of[-1,1]){let d=[],p=[],x=[];for(let E=0;E<=14;E++)for(let C=0;C<=32;C++){let P=E/14,b=C/32,M=Math.max(.025,Math.pow(1-P,.72));if(d.push((-1.55+3.05*b)*M-P*.58,.08*Math.sin(b*Math.PI)-P*.1,f*(.24+P*2.61)),p.push(b,P),E<14&&C<32){let R=E*33+C;x.push(R,R+1,R+32+1,R+1,R+32+2,R+32+1)}}let v=new rt;v.setAttribute("position",new ke(d,3)),v.setAttribute("uv",new ke(p,2)),v.setIndex(x),v.computeVertexNormals(),an(v,s,(E,C,P)=>(Math.abs(P)-.24)/2.61+.025*Math.sin(E*5));let y=Ct(n,v,r);y.material.side=ot;let _=new Lr({depthPacking:xl,side:ot});_.onBeforeCompile=c,y.customDepthMaterial=_;for(let E of[.18,.46,.75]){let C=[];for(let P=0;P<=16;P++){let b=P/16,M=Math.max(.025,Math.pow(1-b,.72));C.push([(-1.55+3.05*E)*M-b*.58,.025+.08*Math.sin(E*Math.PI)-b*.1,f*(.24+b*2.61)])}l.push(Wi(C,.01))}let T=[];for(let E=0;E<9;E++){let C=-.85+E*.17;T.push(Wi([[C,-.15,f*.3],[C-.04,-.21,f*.41],[C-.12,-.24,f*.36]],.012))}Ct(n,El(T),Wr(t===0?"#984e67":"#5179a0"))}Ct(n,an(El(l),[[0,"#7be6be"],[.58,"#8fa5ef"],[1,t===0?"#f6c08c":"#efa3c7"]],(f,d,p)=>Math.abs(p)/2.85),a);let h=Wi([[-1.4,0,0],[-1.95,-.05,0],[-2.35,-.13,.1],[-2.64,-.1,.08]],.045);an(h,[[0,"#397eae"],[1,"#c688bc"]],(f,d,p)=>(-f-1.4)/1.3),Ct(n,h,r),n.traverse(f=>{f.isMesh&&(f.material===r||f.material===a)&&(f.userData.alienMembrane=!0)});let u=0;return{root:n,state:e,kind:"sail",radius:e.r,update(f){u=cp(n,e,f,.12,t*2.2)},snapshot(){return{kind:"sail",id:t,position:n.position.toArray(),yaw:u,finPhase:Math.sin(i.value*1.35+t*1.7),radius:e.r}}}}function ta(n,e,t,i){let s=["#69d9c6","#72bdea","#9882db","#d57ebb","#ef9c9a","#e9be77"],r=Mn(.075,{roughness:.36,transparent:!0,opacity:.72,depthWrite:!1,side:ot}),o=Wr(["#d69c67","#bd7a93","#98ad6b"][t],{roughness:.45}),a=Mn(.68),c=[];Ct(n,an(new tt(1,32,18),[[0,"#4189a5"],[.48,"#6e75bd"],[1,"#b186c7"]],(d,p,x)=>(p+1)/2),r,[0,0,0],[1.14,.32,.33]),Ct(n,new tt(1,28,16),o,[.12,0,0],[.89,.13,.16]);let l=[];for(let d=0;d<10;d++){let p=-.92+d*.18,x=.29*Math.sqrt(Math.max(.05,1-(p/1.14)**2)),g=new Tt(x,.009,5,24);g.rotateY(Math.PI/2),g.scale(1,.95,1),g.translate(p,0,0),an(g,[[0,s[(d+t)%6]],[1,s[(d+t)%6]]],()=>0),l.push(g)}Ct(n,El(l),a);let h=Mn(.16,{roughness:.5});for(let d of[-1,1])for(let p=0;p<11;p++){let x=-.88+p*.17,g=new st;g.position.set(x,.03,d*.25),n.add(g);let m=new tt(1,12,8);m.scale(.095,.025,.32);let v=s[Math.min(5,Math.floor(p/2))];an(m,[[0,"#425384"],[.36,v],[1,v]],(y,_,T)=>(T*d+.32)/.64),Ct(g,m,h,[0,0,d*.2]),c.push({g,side:d,i:p})}let u=[];for(let d of[-1,1])u.push(Wi([[.9,.08,d*.14],[1.17,.11,d*.22],[1.4,.12,d*.3],[1.53,.08,d*.26]],.014));Ct(n,an(El(u),[[0,"#84dfcc"],[1,"#f0c887"]],(d,p,x)=>(d-.9)/.63),a);let f=0;return{root:n,state:e,kind:"comb",radius:e.r,update(d){f=cp(n,e,d,.17,t*1.8+.7);for(let p of c)p.g.rotation.x=p.side*(.12+Math.sin(d*3.7-p.i*.58+t)*.54)},snapshot(){return{kind:"comb",id:t,position:n.position.toArray(),yaw:f,paddleAngles:c.map(d=>d.g.rotation.x),radius:e.r}}}}function Su(n,e,t){let i=[["#8a58a5","#d45b8e","#f4ab6b"],["#5869a4","#df7962","#f0c881"],["#8d5591","#bd5d93","#f5a798"],["#456f92","#da925e","#f2d493"],["#68559e","#cc657e","#edb979"]],[s,r,o]=i[t],a=Wr("#536b83",{roughness:.9}),c=Mn(.35,{roughness:.54}),l=Wr("#e9c273",{roughness:.57,emissive:"#c7994b",emissiveIntensity:.2});Ct(n,Wi([[0,0,0],[.08,.22,.02],[.04,.47,-.03],[0,.65,0]],.11),a);let h=[];for(let f=0;f<8;f++){let d=f/8*Mu,p=new st;p.position.set(0,.63,0),p.rotation.y=d,n.add(p);let x=new tt(1,18,12);x.scale(.14,.12,.34),an(x,[[0,s],[.5,r],[1,f%2?o:"#f0b6aa"]],(g,m,v)=>(v+.34)/.68),Ct(p,x,c,[0,.09,.24]),Ct(p,Wi([[0,.13,.02],[0,.18,.28],[0,.1,.52]],.012),l),h.push(p)}Ct(n,new tt(.14,20,12),l,[0,.66,0],[1,.5,1]),n.position.copy(e);let u=0;return{root:n,kind:"crown",radius:.65,update(f){u=Math.sin(f*.85+t*1.3);for(let d of h)d.rotation.x=-.25+u*.19},snapshot(){return{kind:"crown",id:t,position:n.position.toArray(),opening:u,petalAngles:h.map(f=>f.rotation.x),heightEnvelope:1.08}}}}function lp(n,e){let t={value:0},i=[],s=[],r=p=>{let x=new st;return x.name="alien-"+p,n.add(x),x};[new Si(16,-11,-40),new Si(18,-11,-65)].forEach((p,x)=>{let g=ap(p,1.3,1.5,3.14,.22,e);s.push({kind:"sail",id:x,...g.safety,origin:g.origin.toArray(),radius:g.r,route:[g.rx,g.rz],bob:g.bob}),i.push(ea(r("sail-"+x),g,x,t))}),[new Si(12,-16,-39),new Si(23,-15,-66),new Si(16,-15,-69)].forEach((p,x)=>{let g=ap(p,1.1,1.3,1.75,.22,e);s.push({kind:"comb",id:x,...g.safety,origin:g.origin.toArray(),radius:g.r,route:[g.rx,g.rz],bob:g.bob}),i.push(ta(r("comb-"+x),g,x,t))});let a=[];for(let p of[-31,-34,-72,-69,-66,-42,-45])for(let x of[17,19,15,21]){if(a.length===5)break;let g=e.floor(x,p),m=new Si(x,g+.12,p);if(Math.abs(e.floor(x+.65,p)-e.floor(x-.65,p))>.55||Math.abs(e.floor(x,p+.65)-e.floor(x,p-.65))>.55||e.objects.some(y=>m.distanceTo(y.position)<2.6)||e.rocks.some(y=>((x-y.x)/(y.rx+.8))**2+((g+.7-y.y)/(y.ry+.9))**2+((p-y.z)/(y.rz+.8))**2<1))continue;let v=a.length;a.push(m),i.push(Su(r("crown-"+v),m,v)),s.push({kind:"crown",id:v,position:m.toArray(),maxAboveFloor:1.2,belowPlayerFloorClearance:!0})}if(a.length!==5)throw new Error("\u6D77\u5E8A\u51A0\u4F53\u9644\u7740\u70B9\u4E0D\u8DB3");function c(p){t.value=p,i.forEach(x=>x.update(p))}function l(){return{counts:{sail:2,comb:3,crown:5},sprites:0,animals:i.map(p=>p.snapshot())}}function h(p){let x=t.value;c(p);let g=l();return c(x),g}function u(p,x=0){return i.filter(g=>g.kind===p)[x].root.position.clone()}function f(){return s}function d(){let p=t.value,x=i.map(v=>({kind:v.kind,id:v.snapshot().id,radiusLimit:v.radius,maxActualRadius:0,maxAboveFloor:0,vertexSamples:0})),g=new Si,m=new lt;for(let v of[0,.8,1.7,3.2,6.4,9.6])c(v),n.updateMatrixWorld(!0),i.forEach((y,_)=>{let T=x[_];m.copy(y.root.matrixWorld).invert(),y.root.traverse(E=>{if(!E.isMesh)return;let C=E.geometry.attributes.position;for(let P=0;P<C.count;P++){if(g.fromBufferAttribute(C,P),E.userData.alienMembrane){let b=.36*Math.pow(Math.abs(g.z)/2.85,1.25);g.y+=(g.y<0?-1:1)*b}g.applyMatrix4(E.matrixWorld),T.maxAboveFloor=Math.max(T.maxAboveFloor,g.y-e.floor(g.x,g.z)),g.applyMatrix4(m),T.maxActualRadius=Math.max(T.maxActualRadius,g.length()),T.vertexSamples++}})});return c(p),n.updateMatrixWorld(!0),x}return c(0),{update:c,snapshot:l,at:h,focus:u,safety:f,envelopes:d}}var Sn=Object.freeze({x:220,z:260,centerZ:-49,surface:128}),li=Object.freeze([{id:"east",name:"\u5C42\u53E0\u9AD8\u7901",x:85,z:-35,rx:24,rz:33,height:70},{id:"west",name:"\u84DD\u5CA9\u9AD8\u810A",x:-85,z:-105,rx:24,rz:30,height:62},{id:"north",name:"\u73CA\u745A\u51A0\u4E18",x:35,z:57,rx:30,rz:24,height:50},{id:"south",name:"\u6DF1\u84DD\u77F3\u5CF0",x:-25,z:-167,rx:28,rz:23,height:56}]),fn=(n,e,t=0)=>n-e*Math.floor((n-t+e/2)/e);function qn(n){return{x:fn(n.x,220),y:n.y,z:fn(n.z,260,-49)}}var na=(n,e,t)=>{let i=Dt.clamp((t-n)/(e-n),0,1);return i*i*(3-2*i)};function vv(n,e){let t=-7.2+.62*Math.sin(n*.19)*Math.cos(e*.13)+.45*Math.sin(e*.22+n*.1),i=14*Math.exp(-(((n-16)/7.7)**4)-((e+12)/27)**4),s=20*Math.exp(-(((n-18)/10.2)**4)-((e+57)/41)**4),r=13*Math.exp(-(((n-36)/16)**4)-((e+101)/25)**4);return t-Math.max(i,s,r)}function hp(n,e){let t=qn({x:n,z:e}),i=t.x,s=t.z,r=Math.max(na(88,104,Math.abs(i)),na(102,124,Math.abs(s+49))),o=-7.2+.65*Math.sin(i*Math.PI*8/220)*Math.cos((s+49)*Math.PI*6/260)+.35*Math.sin(i*Math.PI*4/220+(s+49)*Math.PI*8/260),a=vv(i,s)*(1-r)+o*r,c=Math.max(na(70,77,Math.abs(i)),na(36,44,s),1-na(-154,-146,s)),l=0;for(let h of li){let u=fn(i-h.x,220)/h.rx,f=fn(s-h.z,260)/h.rz,d=(u*u+f*f)*(1+.065*Math.sin(u*12+f*4)*Math.cos(f*9-u*3));if(d<1){let p=1-d,x=p*p*(3-2*p);l=Math.max(l,h.height*x)}}return a+l*c}function ia(n,e,t=new D){return t.set(e.x+fn(n.x-e.x,220),n.y,e.z+fn(n.z-e.z,260))}function up(n,e,t){for(let o=0;o<260;o+=20)for(let a=0;a<220;a+=20){let c=Math.min(20,220-a),l=Math.min(20,260-o),h=new rt;for(let[d,p]of Object.entries(e.attributes)){let x=new Float32Array((c+1)*(l+1)*p.itemSize),g=0;for(let m=0;m<=l;m++)for(let v=0;v<=c;v++){let y=((o+m)*221+a+v)*p.itemSize;for(let _=0;_<p.itemSize;_++)x[g++]=p.array[y+_]}h.setAttribute(d,new St(x,p.itemSize))}let u=[];for(let d=0;d<l;d++)for(let p=0;p<c;p++){let x=d*(c+1)+p,g=x+c+1;u.push(x,g,x+1,g,g+1,x+1)}h.setIndex(u),h.computeBoundingSphere();let f=new nt(h,t);f.name="loop-terrain-chunk",f.userData.loopTerrain=!0,n.add(f)}e.dispose()}function dp(n,e,t){let i=new st;i.name="high-sea-life-v10",n.add(i);let s={value:0},r=[];for(let d=0;d<li.length;d++){let p=li[d],x=d%2?1.75:3.14,g=5,m=6,v=.22,y=-1/0;for(let C=0;C<192;C++)for(let P=0;P<=4;P++)for(let b=0;b<24;b++){let M=C*Math.PI*2/192,R=b*Math.PI*2/24,I=x*P/4;y=Math.max(y,e(p.x+Math.sin(M)*g+Math.cos(R)*I,p.z+Math.cos(M)*m+Math.sin(R)*I)+Math.sqrt(Math.max(0,x*x-I*I)))}let _={origin:new D(p.x,y+v+1.5,p.z),rx:g,rz:m,r:x,bob:v},T=new st;T.name="high-sea-swimmer-"+d,i.add(T);let E=d%2?ta(T,_,d%3,s):ea(T,_,d%2,s);r.push(E)}let o=new At({color:"#adb1bc",roughness:.88,map:t,emissive:"#2c5067",emissiveIntensity:.08}),a=new Is(1,1),c=new Tn(a,o,180),l=new pt;c.name="high-sea-ledge-stones",n.add(c);let h=0;for(let d of li)for(let p=0;p<45;p++){let x=p*2.399963,g=.23+.55*(p*17%45)/45,m=d.x+Math.cos(x)*d.rx*g,v=d.z+Math.sin(x)*d.rz*g,y=e(m,v);l.position.set(m,y+.13,v),l.rotation.set(0,p*.71,0),l.scale.set(.24+p%4*.12,.17,.3+p%3*.13),l.updateMatrix(),c.setMatrixAt(h++,l.matrix)}c.receiveShadow=!0;let u=new At({color:"#c4979e",roughness:.82,emissive:"#8fa8ba",emissiveIntensity:.07}),f=new Tn(new si(1,1,6),u,96);f.name="high-sea-small-corals",n.add(f),h=0;for(let d of li)for(let p=0;p<24;p++){let x=p*2.399963,g=.28+.4*(p%6)/6,m=d.x+Math.cos(x)*d.rx*g,v=d.z+Math.sin(x)*d.rz*g;l.position.set(m,e(m,v)+.31,v),l.rotation.set(0,x,0),l.scale.set(.2,.55+p%3*.1,.2),l.updateMatrix(),f.setMatrixAt(h++,l.matrix)}return{update(d){s.value=d;for(let p of r)p.update(d)},snapshot(){return r.map(d=>d.snapshot())}}}function fp(n,{pod:e,shadow:t,objects:i,rocks:s,player:r,period:o=Sn}){n.updateMatrixWorld(!0);let a=n.children.filter(I=>I.name.startsWith("marine-")||I.name==="deep-sea-local-v7"||I.name==="high-sea-life-v10"),c=new Set(a),l=new Set([e,t,...i.flatMap(I=>[I.body,I.glow])]),h=[],u=[],f=[];function d(I){if(!(l.has(I)||c.has(I))){if(I.isLight){I.isPointLight&&I.parent===n&&f.push(I);return}if(I.isMesh&&!I.isInstancedMesh&&!Array.isArray(I.material)&&!I.material.transparent&&!I.customDepthMaterial){h.push(I);return}if(I.isMesh||I.isPoints||I.isSprite){u.push(I);return}for(let U of I.children)d(U)}}for(let I of n.children)d(I);let p=new Map;for(let I of h){let U=I.material,B=U.map;I.geometry.boundingSphere||I.geometry.computeBoundingSphere();let N=I.geometry.boundingSphere.center.clone().applyMatrix4(I.matrixWorld),H=JSON.stringify([Math.floor(N.x/40),Math.floor(N.z/40),U.type,U.color?.getHex(),U.emissive?.getHex(),U.emissiveIntensity,U.roughness,U.metalness,U.side,U.vertexColors,U.fog,B?.source.uuid,B?.colorSpace,U.customProgramCacheKey(),Object.keys(I.geometry.attributes).sort(),I.castShadow,I.receiveShadow]);p.has(H)||p.set(H,{source:U,geos:[],cast:I.castShadow,receive:I.receiveShadow});let $=I.geometry.index?I.geometry.toNonIndexed():I.geometry.clone();if($.applyMatrix4(I.matrixWorld),B&&$.attributes.uv){B.updateMatrix();let V=$.attributes.uv,oe=new re;for(let le=0;le<V.count;le++)oe.set(V.getX(le),V.getY(le)).applyMatrix3(B.matrix),V.setXY(le,oe.x,oe.y)}p.get(H).geos.push($)}let x=[];for(let{source:I,geos:U,cast:B,receive:N}of p.values()){let H=Gr(U,!1);if(!H)throw new Error("\u5FAA\u73AF\u6D77\u666F\u6279\u5904\u7406\u5931\u8D25");for(let oe of U)oe.dispose();H.computeBoundingSphere();let $=I.clone();$.onBeforeCompile=I.onBeforeCompile,$.customProgramCacheKey=I.customProgramCacheKey,I.map&&($.map=I.map.clone(),$.map.offset.set(0,0),$.map.repeat.set(1,1),$.map.rotation=0,$.map.updateMatrix(),$.map.needsUpdate=!0);let V=new nt(H,$);V.castShadow=B,V.receiveShadow=N,V.name="loop-static-batch",x.push(V)}let g=s.map(I=>({...I})),m=[],v=[],y=[...f],_=[];for(let I of i)I.basePosition=I.position.clone(),_.push({item:I,body:I.body,glow:I.glow});for(let I=-1;I<=1;I++)for(let U=-1;U<=1;U++){if(I===0&&U===0)continue;let B=new st;B.name=`ocean-neighbour-${I}-${U}`,B.position.set(I*o.x,0,U*o.z),n.add(B),m.push(B);for(let N of x)B.add(N.clone());for(let N of u){let H=N.clone(!1);N.matrixWorld.decompose(H.position,H.quaternion,H.scale),B.add(H),H.isInstancedMesh&&(H.instanceMatrix=N.instanceMatrix)}for(let N of f){let H=N.clone();H.position.copy(N.position),B.add(H),y.push(H)}for(let N of a){let H=N.clone(!0);B.add(H);let $=[],V=[];N.traverse(le=>$.push(le)),H.traverse(le=>V.push(le));let oe=$.map((le,ye)=>(le.isInstancedMesh&&(V[ye].instanceMatrix=le.instanceMatrix),V[ye].customDepthMaterial=le.customDepthMaterial,V[ye].customDistanceMaterial=le.customDistanceMaterial,{src:le,dst:V[ye]}));v.push({tile:B,nodes:oe})}for(let N of i){let H=N.body.clone(),$=N.glow.clone();B.add(H,$),_.push({tile:B,item:N,body:H,glow:$})}for(let N of g)s.push({...N,x:N.x+I*o.x,z:N.z+U*o.z})}let T=new D,E=new D,C=new is,P=new lt,b=new Un;function M(I,U){let B=I.position;for(let N of m){let H=Math.max(0,Math.abs(B.x-N.position.x)-110),$=Math.max(0,Math.abs(B.z-N.position.z+49)-130);N.visible=Math.hypot(H,$)<U+35}for(let N of v)if(N.tile.visible)for(let{src:H,dst:$}of N.nodes)$.position.copy(H.position),$.quaternion.copy(H.quaternion),$.scale.copy(H.scale),$.visible=H.visible;for(let N of i)ia(N.basePosition,r,N.position);for(let N of _)N.body.visible=N.glow.visible=!N.item.taken,N.body.position.copy(N.item.body.position),N.glow.position.copy(N.item.glow.position);n.updateMatrixWorld(!0),I.getWorldDirection(E),P.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),C.setFromProjectionMatrix(P);for(let N of y){N.getWorldPosition(T),b.center.copy(T),b.radius=N.distance;let H=T.sub(B).dot(E);N.visible=H<U+N.distance&&H>-N.distance&&C.intersectsSphere(b)}}function R(){return{tilePool:9,neighbours:m.length,visibleNeighbours:m.filter(I=>I.visible).length,staticBatches:x.length,sharedGeometry:!0,sharedPickupIds:!0,originalColliders:g.length,pooledColliders:s.length}}return{update:M,snapshot:R}}var Vs=D,bu=Math.PI*2,pp=n=>n.x>23&&n.z<=-74?"cave":n.z<-80?"customs":n.x>6&&n.x<31&&n.z<8?"wreck":n.x<-22&&n.z<-8?"kelp":"entry";function Mv(n,e,t,i,s,r,o){let a=1/0,c=1/0;for(let l=0;l<144;l++){let h=l/144*bu,u=n.x+Math.sin(h)*e,f=n.z+Math.cos(h)*t;if(u-i<-69||u+i>69||f-i<-133||f+i>35||n.y+s+i>10.8)return null;for(let d of[-i,0,i])for(let p of[-i,0,i])if(pp({x:u+d,z:f+p})!==r)return null;for(let d=0;d<5;d++)for(let p=0;p<24;p++){let x=i*d/4,g=p/24*bu,m=Math.cos(g)*x,v=Math.sin(g)*x,y=n.y-s-Math.sqrt(Math.max(0,i*i-m*m-v*v))-o.floor(u+m,f+v);if(a=Math.min(a,y),y<.32)return null}for(let d of o.rocks){let p=wl(u,n.y,f,d)-i-s;if(c=Math.min(c,p),p<.32)return null}}return{floorClearance:a,rockClearance:c}}function Sv(n,e,t,i,s,r,o){for(let a of[0,1,-1,2,-2,3])for(let c of[0,-2,2,-4,4])for(let l of[0,-2,2,-4,4]){let h=new Vs(...n).add(new Vs(c,a,l)),u=Mv(h,e,t,i,s,r,o);if(u)return{origin:h,rx:e,rz:t,r:i,bob:s,safety:u}}throw new Error(r+"\u751F\u7269\u6CA1\u6709\u5B89\u5168\u822A\u7EBF: "+n)}function mp(n,e,t,i,s=.14){let r=t*s+i;n.position.set(e.origin.x+Math.sin(r)*e.rx,e.origin.y+Math.sin(t*.38+i)*e.bob,e.origin.z+Math.cos(r)*e.rz);let o=Math.atan2(Math.sin(r)*e.rz,Math.cos(r)*e.rx);return n.rotation.set(0,o,Math.sin(r)*.035),o}function bv(n,e,t){let i=Mn(.055,{roughness:.49}),s=Mn(.11,{roughness:.48}),r=Mn(.3,{roughness:.52}),o=[];Ct(n,an(new tt(1,28,16),[[0,"#386291"],[.45,"#79ad89"],[1,"#d5c685"]],(l,h,u)=>(h+1)/2),i,[0,0,0],[1.42,.21,.25]);for(let l of[-1,1])for(let h=0;h<6;h++){let u=new st;u.position.set(-1+h*.38,.03,l*.19),n.add(u);let f=new tt(1,16,10);f.scale(.23,.035,.55),an(f,[[0,"#388985"],[.55,t?"#749dc0":"#93b58a"],[1,t?"#c893c4":"#d6c989"]],(d,p,x)=>(l*x+.55)/1.1),Ct(u,f,s,[0,0,l*.35]),Ct(u,an(Wi([[0,.04,0],[0,.05,l*.35],[.04,.035,l*.78]],.008),[[0,"#76b69b"],[1,"#e2ce9a"]],(d,p,x)=>Math.abs(x)/.78),r),o.push({g:u,i:h,side:l})}let a=new At({color:"#233d55",roughness:.65});for(let l of[-1,1])Ct(n,new tt(.035,10,6),a,[1.21,.065,l*.15],[1,.5,1]);let c=0;return{root:n,state:e,kind:"leaf",radius:e.r,update(l){c=mp(n,e,l,t*2+.4);for(let h of o)h.g.rotation.x=h.side*(.1+Math.sin(l*1.75-h.i*.68+t)*.3)},snapshot(){return{kind:"leaf",id:t,position:n.position.toArray(),yaw:c,leafAngles:o.map(l=>l.g.rotation.x),radius:e.r}}}}function Ev(n,e,t){let i=Mn(.16,{roughness:.33,transparent:!0,opacity:.57,depthWrite:!1,side:ot}),s=Mn(.48,{roughness:.43}),r=Mn(.48,{roughness:.35}),o=Mn(.35,{roughness:.5}),a=[],c=Ct(n,an(new tt(1,30,20),[[0,"#296f9b"],[.45,"#5973b8"],[.8,t?"#ba72aa":"#8e7bcc"],[1,"#dcacc2"]],(u,f,d)=>(f+1)/2),i,[0,.2,0],[.83,.88,.72]);Ct(n,an(new tt(1,22,14),[[0,"#efbf83"],[.5,"#dc8ab0"],[1,"#85dcda"]],(u,f,d)=>(f+1)/2),r,[0,.18,0],[.34,.46,.3]);for(let u=0;u<3;u++){let f=new Tt(.68-u*.08,.013,6,32);f.rotateX(Math.PI/2),Ct(n,an(f,[[0,"#86d8d6"],[1,"#d59dc5"]],(d,p,x)=>(d+.7)/1.4),s,[0,-.06+u*.29,0])}for(let u=0;u<6;u++){let f=u/6*bu,d=new st;d.position.set(Math.cos(f)*.46,-.35,Math.sin(f)*.46),n.add(d);let p=[];for(let x=0;x<8;x++)p.push([Math.cos(f)*x*.045,-x*.205,Math.sin(f)*x*.045+Math.sin(x*.7+u)*.05]);Ct(d,an(Wi(p,.016),[[0,"#77c8d1"],[.58,"#ac87cc"],[1,"#efa8af"]],(x,g,m)=>-g/1.44),o),a.push({g:d,i:u})}let l=0,h=0;return{root:n,state:e,kind:"lantern",radius:e.r,update(u){h=mp(n,e,u,t*2.1+.9,.095),l=Math.sin(u*1.1+t*1.8),c.scale.set(.83*(1+l*.055),.88*(1-l*.035),.72*(1+l*.055));for(let f of a)f.g.rotation.x=Math.sin(u*.9+f.i*.65)*.11,f.g.rotation.z=Math.sin(u*.9+f.i*.65+.8)*.11},snapshot(){return{kind:"lantern",id:t,position:n.position.toArray(),yaw:h,pulse:l,armAngles:a.map(u=>[u.g.rotation.x,u.g.rotation.z]),radius:e.r}}}}function gp(n,e){let t={value:0},i=[],s=[],r=(g,m,v)=>{let y=new st;return y.name=`ocean-alien-${g}-${m}-${v}`,y.userData.region=g,n.add(y),y};function o(g,m,v,y,_=1.6,T=1.9){let E={sail:3.14,comb:1.75,leaf:1.9,lantern:2.3}[m],C=Sv(y,_,T,E,.22,g,e),P=r(g,m,v),b=m==="sail"?ea(P,C,v%2,t):m==="comb"?ta(P,C,v%3,t):m==="leaf"?bv(P,C,v):Ev(P,C,v);b.region=g,b.id=v,b.cullRadius=E,i.push(b),s.push({region:g,kind:m,id:v,...C.safety,origin:C.origin.toArray(),radius:E,route:[_,T],bob:C.bob})}o("entry","sail",0,[-15,-.5,18]),o("entry","comb",0,[-27,-1,17]),o("entry","comb",1,[15,-1,23]),o("kelp","sail",1,[-44,4,-38]),o("kelp","leaf",0,[-44,1,-17]),o("kelp","leaf",1,[-44,2,-49]),o("cave","comb",2,[37,-13,-82],1,1.2),o("cave","lantern",0,[35,-13.5,-96],1,1.4),o("cave","lantern",1,[37,-13.5,-112],1,1.4),o("customs","sail",0,[-10,3,-117]),o("customs","comb",1,[-18,1,-105]),o("customs","comb",2,[4,2,-121]);let a={entry:{xs:[-23,-31,-18,2,12,23],zs:[25,19,12],count:4},kelp:{xs:[-44,-47,-40,-50],zs:[-15,-23,-33,-43,-49],count:4},cave:{xs:[33,38,35,40],zs:[-91,-103,-115,-97,-109],count:5},customs:{xs:[-18,-12,-6,0,5],zs:[-96,-108,-119,-129],count:4}};for(let[g,m]of Object.entries(a)){let v=0;for(let y of m.zs)for(let _ of m.xs){if(v===m.count)continue;let T=e.floor(_,y),E=new Vs(_,T+.12,y),C=.75;if(pp(E)!==g||Math.abs(e.floor(_+C,y)-e.floor(_-C,y))>.55||Math.abs(e.floor(_,y+C)-e.floor(_,y-C))>.55||e.objects.some(M=>E.distanceTo(M.position)<2.6)||e.rocks.some(M=>wl(_,T+.55,y,M)<.95))continue;let P=r(g,"crown",v),b=Su(P,E,v%5);b.region=g,b.id=v,b.cullRadius=1.5,i.push(b),s.push({region:g,kind:"crown",id:v,position:E.toArray(),maxAboveFloor:1.2}),v++}if(v!==m.count)throw new Error(g+"\u51A0\u4F53\u5B89\u5168\u9644\u7740\u70B9\u4E0D\u8DB3 "+v)}let c=new Vs,l=new Vs,h=new Vs;function u(g,m,v=155){t.value=g,m&&(m.getWorldPosition(c),m.getWorldDirection(l));for(let y of i)if(y.update(g),m){let _=h.copy(y.root.position).sub(c).dot(l);y.root.visible=_<v+y.cullRadius+2&&_>-y.cullRadius-2}}function f(){let g={};for(let m of i)g[m.region]=(g[m.region]||0)+1;return{counts:g,total:i.length,sprites:0,animals:i.map(m=>({...m.snapshot(),id:m.id,region:m.region,visible:m.root.visible}))}}function d(g){let m=t.value;u(g);let v=f();return u(m),v}function p(g,m,v=0){let y=i.find(_=>_.region===g&&_.kind===m&&_.id===v);if(!y)throw new Error("\u672A\u627E\u5230\u533A\u57DF\u751F\u7269");return y.root.visible=!0,y.root.position.clone()}function x(){let g=t.value,m=new Vs,v=new lt,y=i.map(_=>({region:_.region,kind:_.kind,id:_.id,radiusLimit:_.radius,maxActualRadius:0,maxAboveFloor:0,vertexSamples:0}));for(let _ of[0,.8,1.7,3.2,6.4,9.6])u(_),n.updateMatrixWorld(!0),i.forEach((T,E)=>{let C=y[E];v.copy(T.root.matrixWorld).invert(),T.root.traverse(P=>{if(!P.isMesh)return;let b=P.geometry.attributes.position;for(let M=0;M<b.count;M++){if(m.fromBufferAttribute(b,M),P.userData.alienMembrane){let R=.36*Math.pow(Math.abs(m.z)/2.85,1.25);m.y+=(m.y<0?-1:1)*R}m.applyMatrix4(P.matrixWorld),C.maxAboveFloor=Math.max(C.maxAboveFloor,m.y-e.floor(m.x,m.z)),m.applyMatrix4(v),C.maxActualRadius=Math.max(C.maxActualRadius,m.length()),C.vertexSamples++}})});return u(g),n.updateMatrixWorld(!0),y}return u(0),{update:u,snapshot:f,at:d,focus:p,safety:()=>s,envelopes:x}}var Ft=(n,e,t)=>{let i=Dt.clamp((t-n)/(e-n),0,1);return i*i*(3-2*i)};function xp(n){let{x:e,y:t,z:i}=qn(n),s=1-Ft(6,12,t),r=Ft(-74,-68,i)*Math.min(1,Ft(-22,-18,e)+Ft(-8,-4,i))*Math.min(1,1-Ft(3,6,e)+Ft(31,35,e)+Ft(8,12,i))*s,o=(1-Ft(-28,-22,e))*Ft(-78,-76,i)*(1-Ft(-12,-8,i))*s,a=Ft(23,27,e)*(1-Ft(50,60,e))*Ft(-130,-124,i)*(1-Ft(-78,-74,i))*(1-Ft(-6,1,t)),c=(1-Ft(18,23,e))*(1-Ft(-84,-80,i))*Ft(-154,-148,i)*(1-Ft(4,11,t)),l=(1-Ft(70,100,Math.abs(e)))*(1-Ft(36,65,i))*Ft(-175,-146,i);return[r,o,a,c].map(h=>h*l)}var _p=`
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
`,Xr=[{id:"entry",name:"\u73CA\u745A\u5165\u53E3",water:"#0b4553",near:34,far:132,lamp:55},{id:"kelp",name:"\u6D77\u8349\u6797",water:"#082f30",near:17,far:84,lamp:240},{id:"cave",name:"\u53D1\u5149\u6D1E\u7A9F",water:"#081725",near:7,far:53,lamp:330},{id:"customs",name:"\u8FB9\u754C\u6D77\u5173",water:"#09283d",near:24,far:108,lamp:210}];var Eu=D,wv=Dt.clamp,sa=(n,e,t)=>{let i=wv((t-n)/(e-n),0,1);return i*i*(3-2*i)};function Tv(n){return n=qn(n),sa(6,9,n.x)*(1-sa(28,31,n.x))*sa(-74,-73,n.z)*(1-sa(-34,-26,n.z))*(1-sa(-14,-5,n.y))}var Av=`
varying vec3 vDeepWorld;
vec3 deepLocal(vec3 p){p.x=mod(p.x+110.,220.)-110.;p.z=mod(p.z+179.,260.)-179.;return p;}
float deepVolume(vec3 p){p.x=mod(p.x+110.,220.)-110.;p.z=mod(p.z+179.,260.)-179.;return smoothstep(6.,9.,p.x)*(1.-smoothstep(28.,31.,p.x))*smoothstep(-74.,-73.,p.z)*(1.-smoothstep(-34.,-26.,p.z))*(1.-smoothstep(-14.,-5.,p.y));}
float deepHash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
float deepNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(deepHash(i),deepHash(i+vec3(1,0,0)),f.x),mix(deepHash(i+vec3(0,1,0)),deepHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(deepHash(i+vec3(0,0,1)),deepHash(i+vec3(1,0,1)),f.x),mix(deepHash(i+vec3(0,1,1)),deepHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
`;function yp(n,e,{floor:t,rocks:i,objects:s,pod:r}){let o={view:{value:0},lampOrigin:{value:new Eu},lampDirection:{value:new Eu(0,0,-1)},time:{value:0}},a=new st;a.name="deep-sea-local-v7",n.add(a);let c=n.background.clone(),l=new Be("#031923"),h=new Wo("#d3eee8",0,66,.48,.68,1.8);h.name="deep-sea-real-headlight",h.castShadow=!0,h.shadow.mapSize.set(1024,1024),h.shadow.camera.near=.4,h.shadow.camera.far=66,h.shadow.bias=-15e-5,h.shadow.normalBias=.035,n.add(h,h.target),e.shadowMap.enabled=!0,e.shadowMap.type=Ec;let u=[],f=new Set,d=0,p;function x(W,xe=0,He=!1,L=!1){if(f.has(W))return;f.add(W);let te=W.onBeforeCompile,ne=W.customProgramCacheKey();W.onBeforeCompile=(q,K)=>{te?.call(W,q,K),q.vertexShader=q.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vDeepWorld;`).replace("#include <project_vertex>",`vec4 deepPos=vec4(transformed,1.);
#ifdef USE_INSTANCING
deepPos=instanceMatrix*deepPos;
#endif
vDeepWorld=(modelMatrix*deepPos).xyz;
#include <project_vertex>`),q.fragmentShader=q.fragmentShader.replace("#include <common>",`#include <common>
`+Av+_p),q.fragmentShader=q.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
float deepAmount=deepVolume(vDeepWorld);
${He?"float fishFade=deepVolume(vec3(vDeepWorld.x,min(vDeepWorld.y,-14.),vDeepWorld.z));if(deepHash(vec3(floor(gl_FragCoord.xy),0.))<fishFade)discard;":""}
${xe?`float deepGrain=deepNoise(deepTextureWorld*3.8)*.65+deepNoise(deepTextureWorld*19.)*.35;float strata=deepNoise(deepTextureWorld*vec3(.65,2.8,.65))+.12*sin(vDeepWorld.y*12.+deepNoise(deepTextureWorld*.9)*9.);float cracks=pow(max(0.,deepNoise(deepTextureWorld*vec3(2.1,.35,2.1))-.58)*3.,3.);vec3 deepTint=${xe===1?"mix(vec3(.17,.23,.25),vec3(.265,.295,.28),smoothstep(.30,.78,strata))":"vec3(.25,.29,.275)"};diffuseColor.rgb=mix(diffuseColor.rgb,deepTint*(.67+deepGrain*.66)*(1.-cracks*.18),deepAmount*.86);`:""}`),q.fragmentShader=q.fragmentShader.replace("float deepAmount=deepVolume(vDeepWorld);",`float deepAmount=deepVolume(vDeepWorld);
vec3 deepTextureWorld=deepLocal(vDeepWorld);
vec4 oceanW=oceanVolume(vDeepWorld);
float oceanAmount=dot(oceanW,vec4(1.));
${xe===1?"float seaGrain=deepNoise(deepTextureWorld*4.8)*.65+deepNoise(deepTextureWorld*21.)*.35;float seaLayers=deepNoise(deepTextureWorld*vec3(.5,3.,.5));vec3 seaStone=oceanW.x*mix(vec3(.30,.35,.32),vec3(.40,.39,.31),seaLayers)+oceanW.y*mix(vec3(.14,.21,.19),vec3(.26,.29,.22),seaLayers)+oceanW.z*mix(vec3(.12,.16,.21),vec3(.22,.25,.30),seaLayers)+oceanW.w*mix(vec3(.18,.24,.28),vec3(.29,.31,.30),seaLayers);diffuseColor.rgb=mix(diffuseColor.rgb,seaStone/max(oceanAmount,.001)*(.76+seaGrain*.44),oceanAmount*.78);":""}
${xe===3?"diffuseColor.rgb*=vec3(1.)+oceanW.x*vec3(.10,.06,-.015)+oceanW.y*vec3(-.12,.14,.01)+oceanW.z*vec3(-.1,-.02,.20);":""}
${xe===4?"float gateGrain=deepNoise(deepTextureWorld*12.);diffuseColor.rgb=mix(diffuseColor.rgb,mix(vec3(.24,.30,.34),vec3(.36,.39,.36),gateGrain),oceanW.w*.67*(1.-step(.2,metalness)));":""}`),He&&(q.fragmentShader=q.fragmentShader.replace("if(deepHash(vec3(floor(gl_FragCoord.xy),0.))<fishFade)discard;","fishFade=max(fishFade,dot(oceanVolume(vec3(vDeepWorld.x,min(vDeepWorld.y,-14.),vDeepWorld.z)),vec4(0.,1.,1.,1.)));if(deepHash(vec3(floor(gl_FragCoord.xy),0.))<fishFade)discard;"));let de=je.lights_fragment_begin.replace("getDirectionalLightInfo( directionalLight, directLight );",`getDirectionalLightInfo( directionalLight, directLight );
directLight.color*=mix(vec3(1.),vec3(.055,.09,.115),deepAmount)*oceanSolar(oceanW);`).replace("getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal )","getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal )*mix(vec3(1.),vec3(.09,.145,.18),deepAmount)*oceanAmbient(oceanW)");q.fragmentShader=q.fragmentShader.replace("#include <lights_fragment_begin>",de),L||(q.fragmentShader=q.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance*=1.-deepAmount*.74;`)),xe&&(q.fragmentShader=q.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(roughnessFactor,.91,deepAmount);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
float rockRelief=deepNoise(deepTextureWorld*5.)+.3*deepNoise(deepTextureWorld*24.);vec3 rockDx=normalize(dFdx(-vViewPosition));vec3 rockDy=normalize(dFdy(-vViewPosition));normal=normalize(normal-deepAmount*.22*(dFdx(rockRelief)*rockDx+dFdy(rockRelief)*rockDy));`)),q.fragmentShader=q.fragmentShader.replace("*caustic*(1.-smoothstep(","*caustic*(1.-deepAmount)*(1.-oceanW.z-oceanW.y*.6-oceanW.w*.5)*(1.-smoothstep("),q.fragmentShader=q.fragmentShader.replace("caveShade*.87);","caveShade*.87*(1.-oceanVolume(seaWorld).z));")},W.customProgramCacheKey=()=>`deep-sea-v11-${xe}-${He}-${L}-${ne}-${te.toString()}`,W.needsUpdate=!0}n.updateMatrixWorld(!0),n.traverse(W=>{let xe=W;for(;xe;){if(xe===r||xe===a)return;xe=xe.parent}if(W.isMesh&&W.material?.isMeshBasicMaterial&&!W.material.fog&&u.push({mat:W.material,color:W.material.color.clone()}),!W.isMesh)return;let He=Array.isArray(W.material)?W.material:[W.material],L=!!W.userData.loopTerrain||W.geometry?.type==="PlaneGeometry"&&W.geometry.parameters.width===220,te=W.geometry?.type==="SphereGeometry"&&W.geometry.parameters.widthSegments===24&&W.geometry.parameters.heightSegments===18&&W.parent===n,ne=!1;for(let F=W.parent;F&&F!==n;F=F.parent)F.position.x===18&&F.position.z===-54&&(ne=!0);let q=W.geometry?.type==="TorusGeometry"&&W.geometry.parameters.radius===11,K=!1;for(let F=W.parent;F&&F!==n;F=F.parent)F.position.z===-143&&(K=!0);let de=W.isInstancedMesh&&["PlaneGeometry","CylinderGeometry"].includes(W.geometry?.type),ee=L||te||q?1:ne?2:K?4:de?3:0;for(let F of He)F?.isMeshStandardMaterial&&x(F,ee,W.name.startsWith("marine-fish-"));if((te||ne||q||K)&&(W.castShadow=!0,W.receiveShadow=!0,d++),L){p=W,W.castShadow=!0,W.receiveShadow=!0;for(let F of He)F.shadowSide=ot}});let g=lp(a,{floor:t,rocks:i,objects:s}),m=new st;m.name="four-region-alien-life",a.add(m);let v=gp(m,{floor:t,rocks:i,objects:s});a.traverse(W=>{W.isMesh&&(x(W.material,0,!1,!0),W.castShadow=!0,W.receiveShadow=!0)});let y=[];n.traverse(W=>{W.isPointLight&&W.parent===n&&W.position.x===36&&y.push(W)}),y.forEach((W,xe)=>{W.color.set(["#79cdd1","#a798dd","#dca1bc"][xe%3]),W.intensity=[22,18,20][xe%3]});for(let[W,xe]of[[-13.4,"#e5c187"],[-.6,"#d5b875"]]){let He=new ri(xe,30,22,2);He.position.set(W,5.9,-138.5),He.name="customs-warm-beacon",n.add(He)}let _=[];function T(){_.length=0,n.updateMatrixWorld(!0),n.traverse(W=>{W.isMesh&&W.castShadow&&W!==p&&(W.isInstancedMesh?W.computeBoundingSphere():W.geometry.boundingSphere||W.geometry.computeBoundingSphere(),_.push(W))})}T();let E=new Un;function C(W){return E.copy(W.isInstancedMesh?W.boundingSphere:W.geometry.boundingSphere).applyMatrix4(W.matrixWorld),E.radius+=.5*W.matrixWorld.getMaxScaleOnAxis(),E}function P(){n.updateMatrixWorld(!0);for(let W of _){let xe=C(W);W.castShadow=xe.center.distanceTo(h.position)-xe.radius<h.distance}}function b(){return n.updateMatrixWorld(!0),_.map(W=>{let xe=C(W);return{name:W.name,center:xe.center.toArray(),radius:xe.radius,range:h.distance,distance:xe.center.distanceTo(h.position),casts:W.castShadow}})}let M=new At({color:"#39464a",roughness:.98});x(M,1);let R=new Is(1,1),I=new pt,U=[];for(let W=0;W<80;W++){let xe=10+W*7.137%16,He=-33-W*11.731%39,L=t(xe,He);s.some(te=>Math.hypot(xe-te.position.x,He-te.position.z)<2.4)||i.some(te=>((xe-te.x)/(te.rx+.8))**2+((L+.3-te.y)/(te.ry+.5))**2+((He-te.z)/(te.rz+.8))**2<1)||U.push({x:xe,y:L,z:He})}let B=new Tn(R,M,U.length);B.name="deep-sea-low-sediment",U.forEach((W,xe)=>{I.position.set(W.x,W.y+.08,W.z),I.rotation.set(0,xe*1.7,0),I.scale.set(.3+xe%3*.18,.15,.35+xe%4*.12),I.updateMatrix(),B.setMatrixAt(xe,I.matrix)}),a.add(B),B.receiveShadow=!0;let N=360,H=new Float32Array(N*3),$=new rt;$.setAttribute("position",new St(H,3));let V=new rn({transparent:!0,depthWrite:!1,uniforms:{uLampOrigin:o.lampOrigin,uLampDirection:o.lampDirection,uView:o.view,uPixelRatio:{value:e.getPixelRatio()}},vertexShader:"uniform vec3 uLampOrigin,uLampDirection;uniform float uView,uPixelRatio;varying float dustAlpha;void main(){vec3 delta=(modelMatrix*vec4(position,1.)).xyz-uLampOrigin;float d=length(delta);float angle=dot(normalize(delta),uLampDirection);dustAlpha=(.06+.52*smoothstep(.875,.965,angle)*exp(-d*.035))*uView;vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(85.*uPixelRatio/max(1.,-p.z),1.,9.*uPixelRatio);}",fragmentShader:"varying float dustAlpha;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;gl_FragColor=vec4(.63,.78,.76,pow(1.-r,2.)*dustAlpha);}"}),oe=new Ni($,V);oe.name="deep-sea-suspended-sediment",oe.frustumCulled=!1,a.add(oe);let le=Xr.map(W=>new Be(W.water)),ye=new Be,ve=0,Ze=0,it=null,qe=[0,0,0,0],j=0,ae=0;function Te({player:W,heading:xe,time:He,inspection:L=!1,camera:te=null}){Ze=He,o.time.value=He,ve=Tv(W),qe=xp(W),j=ve+qe.reduce((ee,F)=>ee+F,0),o.view.value=j,n.background.copy(c).multiplyScalar(1-j).add(ye.copy(l).multiplyScalar(ve)),n.fog.near=42+-33*ve,n.fog.far=155+-94*ve,qe.forEach((ee,F)=>{n.background.add(ye.copy(le[F]).multiplyScalar(ee)),n.fog.near+=(Xr[F].near-42)*ee,n.fog.far+=(Xr[F].far-155)*ee}),n.fog.color.copy(n.background);let ne=ve*.965+qe[0]*.17+qe[1]*.53+qe[2]*.965+qe[3]*.77;for(let ee of u)ee.mat.color.copy(ee.color).multiplyScalar(1-ne);let q=o.lampDirection.value.set(Math.sin(xe),-.095,-Math.cos(xe)).normalize();o.lampOrigin.value.copy(W).add(new Eu(Math.sin(xe),2.02,-Math.cos(xe))),h.position.copy(o.lampOrigin.value),h.target.position.copy(h.position).addScaledVector(q,45),ae=ve*360+qe.reduce((ee,F,Q)=>ee+F*Xr[Q].lamp,0),h.intensity=it===!1?0:ae,h.visible=ae>0,h.shadow.autoUpdate=ae>0,g.update(He),v.update(He,null,n.fog.far);let K=$.attributes.position,de=[[-58,92,-8,44],[-60,38,-78,66],[25,26,-124,46],[-35,55,-150,66]][qe.indexOf(Math.max(...qe))];for(let ee=0;ee<N;ee++){let F=ve>0?9+ee*8.713%18:de[0]+ee*8.713%de[1],Q=ve>0?-31-ee*9.719%42:de[2]+ee*9.719%de[3],ie=Math.max(t(F,Q)+.8,ve>0?-25+ee*5.831%18:t(F,Q)+1+ee*5.831%22);K.setXYZ(ee,F+Math.sin(He*.07+ee)*.13,ie+Math.sin(He*.11+ee*.3)*.1,Q+Math.cos(He*.08+ee)*.12)}K.needsUpdate=!0,oe.visible=j>0}function Oe(){return{regionalWeights:Object.fromEntries(Xr.map((W,xe)=>[W.id,qe[xe]])),regionalLife:v.snapshot(),totalWeight:j,caveLights:y.map(W=>({color:W.color.getHexString(),intensity:W.intensity})),volume:{x:[6,31],z:[-74,-26],depthTransition:[-14,-5]},terrainShadow:{casts:!!p?.castShadow,receives:!!p?.receiveShadow,doubleSided:p?.material.shadowSide===ot},weight:ve,water:{color:n.background.getHexString(),near:n.fog.near,far:n.fog.far},headlight:{type:h.type,intensity:h.intensity,visible:h.visible,independentOfPod:!0,position:h.position.toArray(),target:h.target.position.toArray(),direction:o.lampDirection.value.toArray(),castsShadow:h.castShadow,shadowMapSize:h.shadow.mapSize.toArray()},styleMeshes:d,patchedMaterials:f.size,sedimentLedges:U.length,aliens:g.snapshot(),time:Ze}}return{update:Te,updateShadows:P,snapshot:Oe,trackShadows:T,shadowBounds:b,at:g.at,focus:g.focus,safety:g.safety,envelopes:g.envelopes,oceanAt:v.at,oceanFocus:v.focus,oceanSafety:v.safety,oceanEnvelopes:v.envelopes,lightTest(W){it=W,h.intensity=W?ae:0},meshes:()=>{let W=[];return a.traverse(xe=>{xe.isMesh&&W.push({name:xe.name,type:xe.type,isInstanced:!!xe.isInstancedMesh})}),W}}}var Kt=D,ra=(n,e,t)=>{let i=Dt.clamp((t-n)/(e-n),0,1);return i*i*(3-2*i)},Bn={ship:{x:60,z:17,yaw:-.58},low:{x:20,y:12,z:35,h:1.1},high:{x:53,y:80,z:14,h:.58},close:{x:37,y:7,z:25,h:1.22}};function Rv(n){let e=qn(n);return(1-ra(60,95,Math.abs(fn(e.x-65,220))))*(1-ra(65,95,Math.abs(fn(e.z+5,260))))}var Cv=`
float clearSeaWeight(vec3 p){float dx=abs(mod(p.x-65.+110.,220.)-110.);float dz=abs(mod(p.z+5.+130.,260.)-130.);return (1.-smoothstep(60.,95.,dx))*(1.-smoothstep(65.,95.,dz));}
vec3 clearLocal(vec3 p){p.x=mod(p.x+110.,220.)-110.;p.z=mod(p.z+179.,260.)-179.;return p;}
`;function vp(n,{floor:e,rocks:t}){let i=new st;i.name="clear-sea-sample-landmarks",n.add(i);let s={value:0},r={value:42},o={value:155},a={value:0},c=new Set,l=new Set,h=[],u=document.createElement("canvas");u.width=512,u.height=512;let f=u.getContext("2d");f.fillStyle="#9caaa0",f.fillRect(0,0,512,512);let d=56377,p=()=>(d=Math.imul(d,1664525)+1013904223>>>0,d/4294967296);for(let F=0;F<16e3;F++){let Q=p()*512,ie=p()*512;f.fillStyle=F%3?"rgba(36,57,53,.12)":"rgba(203,170,105,.2)",f.fillRect(Q,ie,.5+p()*4,.6+p()*7)}for(let F=0;F<16;F++){f.fillStyle="#273c3c40",f.fillRect(0,F*32,512,1);for(let Q=0;Q<20;Q++)f.fillStyle="#b9b39d6a",f.beginPath(),f.arc(Q*26+4,F*32+5,1.25,0,6.29),f.fill()}let x=new _n(u);x.colorSpace=Rt,x.wrapS=x.wrapT=ti,x.anisotropy=4;let g=(F,Q={})=>new At({color:F,roughness:.85,...Q}),m=g("#91afa4",{map:x,metalness:.12,emissive:"#335c57",emissiveIntensity:.12}),v=g("#b4a27b",{map:x,metalness:.16}),y=g("#506761",{map:x,metalness:.16}),_=g("#baa377",{metalness:.28,roughness:.6}),T=g("#7eb6b2",{emissive:"#40c3c2",emissiveIntensity:.45,metalness:.18,roughness:.32}),E=(F,Q,ie,w=0,S=0,O=0)=>{let X=new nt(Q,ie);return X.position.set(w,S,O),F.add(X),X},C=(F,Q,ie,w,S)=>{let O=ie.clone().sub(Q),X=E(F,new Ht(w,w,O.length(),10),S);return X.position.copy(Q).add(ie).multiplyScalar(.5),X.quaternion.setFromUnitVectors(new Kt(0,1,0),O.normalize()),X},P=new st;P.name="first-level-inspired-steamer",P.position.set(Bn.ship.x,e(Bn.ship.x,Bn.ship.z)+1.3,Bn.ship.z),P.rotation.set(0,Bn.ship.yaw,.065),i.add(P);let b=36,M=32,R=[],I=[],U=[];for(let F=0;F<=b;F++){let Q=-23+F*46/b,ie=F/b,w=.55+6.4*Math.pow(Math.sin(Math.PI*ie),.65);for(let S=0;S<=M;S++){let O=Math.PI*2*S/M,X=Math.sin(O)*w,se=4.5+Math.cos(O)*4.5;R.push(X,se,Q),I.push(S/M*3,F/b*5)}}for(let F=0;F<b;F++)for(let Q=0;Q<M;Q++){let ie=F*(M+1)+Q,w=ie+M+1;U.push(ie,w,ie+1,ie+1,w,w+1)}for(let F of[0,b]){let Q=R.length/3;R.push(0,4.5,-23+F*46/b),I.push(.5,.5);for(let ie=0;ie<M;ie++){let w=F*(M+1)+ie;F===0?U.push(Q,w,w+1):U.push(Q,w+1,w)}}let B=new rt;B.setAttribute("position",new ke(R,3)),B.setAttribute("uv",new ke(I,2)),B.setIndex(U),B.computeVertexNormals(),E(P,B,m);let N=new Fi;for(let F=0;F<=36;F++){let Q=F/36,ie=-23+Q*46,w=.55+6.4*Math.pow(Math.sin(Math.PI*Q),.65);F?N.lineTo(w,ie):N.moveTo(w,ie)}for(let F=36;F>=0;F--){let Q=F/36;N.lineTo(-(.55+6.4*Math.pow(Math.sin(Math.PI*Q),.65)),-23+Q*46)}N.closePath();let H=new Ho(N,24);H.rotateX(-Math.PI/2),E(P,H,v,0,9.08,0),E(P,new zt(8.9,5,13),m,0,11.2,-5.5),E(P,new zt(10,.55,14),v,0,13.9,-5.5),E(P,new Ht(1.52,1.78,9.5,24),m,0,18.4,-9),E(P,new Tt(1.58,.15,8,32),_,0,23.2,-9).rotation.x=Math.PI/2;let $=E(P,new Ht(1.45,1.45,.22,24),y,0,23.26,-9),V=[];for(let F of[-1,1]){for(let ie=0;ie<8;ie++){let w=-17+ie*4.6,S=(w+23)/46,O=.55+6.4*Math.pow(Math.sin(Math.PI*S),.65),X=F*O*.94,se=E(P,new Tt(.67,.13,10,32),_,X,5.8,w);se.rotation.y=F*Math.PI/2;let Y=E(P,new Wn(.54,24),T,X+F*.035,5.8,w);Y.rotation.y=F*Math.PI/2,V.push(Y)}for(let ie=0;ie<4;ie++){let w=-10+ie*3.2,S=E(P,new Tt(.64,.11,8,28),_,F*4.49,11.4,w);S.rotation.y=F*Math.PI/2;let O=E(P,new Wn(.53,24),T,F*4.51,11.4,w);O.rotation.y=F*Math.PI/2}let Q=[];for(let ie=0;ie<25;ie++){let w=.08+ie*.84/24,S=-23+w*46,O=.55+6.4*Math.pow(Math.sin(Math.PI*w),.65);Q.push(new Kt(F*O,10.1,S)),ie%2===0&&C(P,new Kt(F*O,8.8,S),new Kt(F*O,10.1,S),.07,_)}E(P,new An(new yn(Q),48,.075,6,!1),_)}let oe=new Kt(0,8.8,9),le=new Kt(2,25.5,5);C(P,oe,le,.17,v),C(P,new Kt(-5.5,22,5.9),new Kt(7,21.2,5.5),.12,v);for(let F of[new Kt(-5.5,22,5.9),new Kt(7,21.2,5.5)])C(P,new Kt(0,9,17),F,.022,y);let ye=E(P,new Tt(1.15,.15,8,24,Math.PI),_,0,8.9,21);ye.rotation.x=Math.PI/2;let ve=["#bca1aa","#b8b397","#75a6a0"].map(F=>g(F,{emissive:F,emissiveIntensity:.03}));for(let F=0;F<72;F++){let Q=-20+p()*40,ie=.55+6.4*Math.pow(Math.sin(Math.PI*(Q+23)/46),.65),w=(p()>.5?1:-1)*ie*.92,S=.5+p()*1.1,O=new Kt(w,8.8,Q);for(let X=0;X<3;X++)C(P,O,new Kt(w+(p()-.5)*.85,8.8+S,Q+(p()-.5)*.8),.075,ve[F%3])}P.updateMatrixWorld(!0);let Ze=new Kt,it=new Kt,qe=new en;P.matrixWorld.decompose(Ze,qe,it);let j=(F,Q,ie,w)=>{let S=F.clone().applyMatrix4(P.matrixWorld),O=Math.cos(Bn.ship.yaw),X=Math.sin(Bn.ship.yaw);t.push({x:S.x,y:S.y,z:S.z,rx:Math.sqrt(Q*Q*O*O+w*w*X*X)+.35,ry:ie+.6,rz:Math.sqrt(Q*Q*X*X+w*w*O*O)+.35,structure:"sample-steamer"})};for(let F=0;F<12;F++){let Q=-21+F*42/11,ie=.55+6.4*Math.pow(Math.sin(Math.PI*(Q+23)/46),.65);j(new Kt(0,4.5,Q),ie,4.5,2.5)}j(new Kt(0,11.5,-5.5),4.8,3.2,7.2),j(new Kt(0,18.4,-9),1.8,5.2,1.8),h.push({name:"\u767E\u5E74\u84B8\u6C7D\u6C89\u8239",position:P.position.toArray(),windows:V.length,source:"First-level deep-bg3-wreck-canyon-v1-2560.webp: teal riveted hull, round portholes, tall funnel, tilted vessel, coral growth."});let ae=g("#8a9e94",{map:x,emissive:"#2b5157",emissiveIntensity:.07});for(let[F,Q,ie,w,S]of[[91,-47,8,23,7],[77,-47,6,19,6],[98,-31,5,24,5]]){let O=e(F,Q),X=new tt(1,24,18),se=X.attributes.position;for(let Ae=0;Ae<se.count;Ae++){let pe=se.getX(Ae),Re=se.getY(Ae),Pe=se.getZ(Ae),he=.9+.12*Math.sin(Re*10+pe*4+Pe*3)+.04*Math.sin(pe*14+Re*6)*Math.cos(Pe*11-Re*5);se.setXYZ(Ae,pe*he+.12*Math.sin(Re*4),Re*he,Pe*he+.08*Math.cos(Re*5))}X.computeVertexNormals();let Y=E(i,X,ae,F,O+w*.83,Q);Y.scale.set(ie,w,S),t.push({x:F,y:Y.position.y,z:Q,rx:ie*1.22,ry:w*1.09,rz:S*1.18,structure:"sample-high-rock"}),h.push({name:"\u9AD8\u7901\u77F3\u67F1",position:Y.position.toArray(),top:Y.position.y+w})}let Te=e(85,-35)+1.5;for(let F of[79,91]){let Q=[];for(let w=0;w<=32;w++){let S=Math.PI*w/32;Q.push(new Kt(F+Math.cos(S)*6,Te+Math.sin(S)*10,-35))}let ie=E(i,new An(new yn(Q),48,1.1,10,!1),ae);for(let w=0;w<Q.length;w+=2){let S=Q[w];t.push({x:S.x,y:S.y,z:S.z,rx:1.2,ry:1.2,rz:1.2,structure:"sample-arch"})}}let Oe={uTime:s,uNear:r,uFar:o,uClearFog:a},W=new rn({transparent:!0,depthWrite:!1,depthTest:!0,side:ot,blending:oi,uniforms:Oe,vertexShader:"uniform float uClearFog;varying vec2 vUv;varying vec3 vWorld;varying float vDepth;void main(){vUv=uv;vec4 p=instanceMatrix*vec4(position,1.);vWorld=(modelMatrix*p).xyz;vec4 eye=modelViewMatrix*p;vDepth=mix(-eye.z,length(eye.xyz),uClearFog);gl_Position=projectionMatrix*eye;}",fragmentShader:"uniform float uTime,uNear,uFar;varying vec2 vUv;varying vec3 vWorld;varying float vDepth;void main(){float edge=exp(-pow((vUv.x-.5)*4.8,2.));float height=smoothstep(0.,.15,vUv.y)*(1.-smoothstep(.85,1.,vUv.y));float streak=.65+.35*sin(vUv.x*31.+vUv.y*2.+uTime*.18);float fog=1.-smoothstep(uNear,uFar,vDepth);float a=.025*edge*height*streak*fog;gl_FragColor=vec4(.55,.77,.65,a);}"}),xe=new on(1,1),He=new Tn(xe,W,16),L=new pt;He.name="sample-sunlight-shafts";let te=0;for(let F=0;F<8;F++){let Q=36+F%4*19,ie=-48+Math.floor(F/4)*61;for(let w of[0,Math.PI/2])L.position.set(Q,72,ie),L.rotation.set(-.1,w,.17),L.scale.set(8+F%3*3,110,1),L.updateMatrix(),He.setMatrixAt(te++,L.matrix)}He.computeBoundingSphere(),n.add(He);function ne(F){if(c.has(F))return;c.add(F);let Q=F.onBeforeCompile,ie=F.customProgramCacheKey();F.onBeforeCompile=(w,S)=>{Q?.call(F,w,S),w.uniforms.uClearTime=s,w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vClearWorld;`).replace("#include <project_vertex>",`vec4 clearPos=vec4(transformed,1.);
#ifdef USE_INSTANCING
clearPos=instanceMatrix*clearPos;
#endif
vClearWorld=(modelMatrix*clearPos).xyz;
#include <project_vertex>`),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
uniform float uClearTime;varying vec3 vClearWorld;
`+Cv),w.fragmentShader=w.fragmentShader.replace("#include <opaque_fragment>",`vec3 cp=clearLocal(vClearWorld);float clearArea=clearSeaWeight(cp);float sunlight=clearArea*smoothstep(-5.,8.,cp.y);float u=cp.x+cp.y*.18,v=cp.z-cp.y*.12;float a=sin(u*1.51367646+sin(v*.894145602+uClearTime*.24)*1.5),b=sin(v*1.691626814+sin(u*.79967813-uClearTime*.19)*1.6);float lightWeb=pow(max(0.,1.-abs(a+b)*.82),7.);outgoingLight+=vec3(.018,.032,.022)*lightWeb*sunlight;
#include <opaque_fragment>`)},F.customProgramCacheKey=()=>`clear-sector-v11-${ie}-${Q.toString()}`,F.needsUpdate=!0}function q(F){n.traverse(Q=>{if(!Q.isMesh)return;for(let w=Q;w;w=w.parent)if(w===F)return;let ie=Array.isArray(Q.material)?Q.material:[Q.material];for(let w of ie)w?.isMeshStandardMaterial&&!w.transparent&&ne(w)})}function K(F){n.traverse(Q=>{if(Q.material){for(let ie=Q;ie;ie=ie.parent)if(ie===F)return;for(let ie of Array.isArray(Q.material)?Q.material:[Q.material]){if(!ie?.fog||l.has(ie))continue;l.add(ie);let w=ie.onBeforeCompile,S=ie.customProgramCacheKey();ie.onBeforeCompile=(O,X)=>{w?.call(ie,O,X),O.uniforms.uClearFog=a,O.vertexShader=O.vertexShader.replace("#include <common>",`#include <common>
uniform float uClearFog;`).replace("#include <fog_vertex>",`#ifdef USE_FOG
vFogDepth=mix(-mvPosition.z,length(mvPosition.xyz),uClearFog);
#endif`)},ie.customProgramCacheKey=()=>`clear-radial-fog-v11-${S}-${w.toString()}`,ie.needsUpdate=!0}}})}let de={weight:0,near:42,far:155,radialFog:0};function ee({player:F,camera:Q,time:ie}){s.value=ie;let w=Rv(F),S=ra(12,90,F.y),O=Dt.lerp(70,105,S),X=Dt.lerp(180,185,S),se=1-ra(-6,2,-F.y),Y=w*se;a.value=ra(0,.05,Y);let Ae=new Be("#24616a");n.background.lerp(Ae,Y*.62),n.fog.color.copy(n.background),n.fog.near=Dt.lerp(n.fog.near,O,Y),n.fog.far=Dt.lerp(n.fog.far,X,Y);let pe=Math.min(330-Math.abs(Q.position.x),Q.position.z+439,341-Q.position.z)-12;n.fog.far=Math.min(n.fog.far,pe),n.fog.near=Math.min(n.fog.near,n.fog.far-20),r.value=n.fog.near,o.value=n.fog.far,de={weight:Y,near:n.fog.near,far:n.fog.far,radialFog:a.value}}return{patchScene:q,patchFog:K,update:ee,snapshot(){return{scope:"One clear-water high-reef / steamer sector",...de,landmarks:h,rays:16,geometry:!0}}}}var ue=n=>document.getElementById(n),Ru=window.__SEA_ASSETS,Iv=new URLSearchParams(location.search).has("test"),pn=matchMedia("(prefers-reduced-motion: reduce)").matches,Wl={0:0,2:2}[new URLSearchParams(location.search).get("level")]??1,Hu=matchMedia("(pointer: coarse)").matches,Rp=Hu?1.25:2,Cu=Hu?2:4,Js=new Set,Kr=new Map,Ce=D,gs=Dt.clamp,Je=new Rs;Je.background=new Be("#073747");Je.fog=new wo("#073747",42,155);var Ne=new Gt(57,innerWidth/innerHeight,.2,420),ua={pearl:50,shell:20},Yi={pearl:20,shell:12},Yr=!1,Iu=!1,Cp,Ot=Wl,ku=!1,da=!1,Pl=!1,Vu=!1,fa=!1,Ll=!1,Xl=new Map,ql=new Map,Ip=0,Tl={minX:-70,maxX:70,minZ:-134,maxZ:36},mn={x:0,z:0,crossings:0},Jr,Dl,Ul=()=>new Ce(mn.x*Sn.x,0,mn.z*Sn.z);function Pv(){let n=Math.floor((_e.x+110)/220),e=Math.floor((_e.z+179)/260);if(!n&&!e)return;let t=new Ce(n*220,0,e*260);_e.sub(t),Ne.position.sub(t),fs.sub(t),ps.sub(t),mn.x+=n,mn.z+=e,mn.crossings++}function Pp(n,e,t){let i=qn({x:n,y:e,z:t});mn.x=Math.round((n-i.x)/220),mn.z=Math.round((t-i.z)/260),_e.set(i.x,e,i.z)}var qr=[{id:"entry",name:"\u73CA\u745A\u5165\u53E3",x:-14,z:17,color:"#adc9ae"},{id:"kelp",name:"\u6D77\u8349\u6797",x:-42,z:-31,color:"#8fc59d"},{id:"wreck",name:"\u6C89\u8239\u5CE1\u8C37",x:18,z:-53,color:"#d5bf92"},{id:"cave",name:"\u53D1\u5149\u6D1E\u7A9F",x:36,z:-102,color:"#92d5df"},{id:"customs",name:"\u8FB9\u754C\u6D77\u5173",x:-7,z:-128,color:"#e5d3a3"}],Pu=new Set,aa=[],us;function Lv(){let n=Zs.map(t=>({x:t.x,y:t.y,z:t.z,phase:t.phase,turtle:!!t.turtle})),e=aa.map(t=>t.group.position.clone());for(let t of Zs)Je.remove(t.sprite),t.sprite.material.dispose();for(let t of aa)Je.remove(t.group),t.group.traverse(i=>{i.isMesh&&(i.geometry.dispose(),i.material.dispose())});Zs.length=0,aa.length=0,us=rp(Je,n,e,{floor:at,rocks:Yt})}function pa(n){if(n=qn(n),Math.abs(n.x)>70||n.z>36||n.z<-146){let e=li.reduce((t,i)=>Math.hypot(fn(n.x-i.x,220),fn(n.z-i.z,260))<Math.hypot(fn(n.x-t.x,220),fn(n.z-t.z,260))?i:t,li[0]);return{id:"high-sea",name:e.name,x:e.x,z:e.z,color:"#9ebed0"}}return n.x>23&&n.z<=-74?qr[3]:n.z<-80?qr[4]:n.x>6&&n.x<31&&n.z<8?qr[2]:n.x<-22&&n.z<-8?qr[1]:qr[0]}function Lp(n){return n=qn(n),n.x>26&&n.x<46&&n.z<-81&&n.z>-120&&n.y<-7}var bt,On={},Qs=!1,bn=!1,Cn=!1,Zt=!1,jt=!1,qt=0,ds=0,bi=0,mt=0,Rn=0,Dp=0;mt=Rn=Bn.low.h;var _e=new Ce(Bn.low.x,Bn.low.y,Bn.low.z),Zn=new Ce,fs=new Ce,ps=new Ce,$n="external",Zi,Yn=!1,qs=!1,Wt,ca,Dv=new Ce(0,.26,-.25),Yt=[];var zn=[],Zs=[],la=[],Il=[],ms={pearl:0,shell:0},Xt={kind:"",start:-1,duration:0,side:1,serial:0},ut,$s,Nl;var Up=0,Al=0,Mp=0,Fl=0,Bl=0,hi=!0,Ut,qi,Zr,Ol,Xs,Rl,Np=0,Yl={value:0},wu=19243;function De(){return wu=Math.imul(wu,1664525)+1013904223>>>0,wu/4294967296}function at(n,e){return hp(n,e)}function Sp(n){ue("errorMessage").textContent="\u8BF7\u7528\u652F\u6301 WebGL 2 \u7684 Chrome \u6216 Safari \u6253\u5F00\u5B8C\u6574 HTML \u6587\u4EF6\u3002"+(n?.message?"\uFF08"+n.message+"\uFF09":""),ue("error").hidden=!1,console.error(n)}function kt(n,e={}){return new At({color:n,roughness:.93,...e})}function er(n,e,t=0,i=0,s=0,r=null){let o=new nt(n,e);return o.position.set(t,i,s),r&&o.scale.set(...r),Je.add(o),o}function Ks(n,e,t,i,s,r,o={}){let a=new Ao(new Ar({map:n,transparent:!0,alphaTest:.03,depthWrite:!1,...o}));return a.scale.set(e,t,1),a.position.set(i,s,r),Je.add(a),a}function Uv(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(206,252,218,.6)"),t.addColorStop(.22,"rgba(156,240,203,.32)"),t.addColorStop(1,"rgba(117,220,203,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new _n(n)}function Nv(){let n=document.createElement("canvas");n.width=n.height=512;let e=n.getContext("2d");e.fillStyle="#6c9b98",e.fillRect(0,0,512,512);for(let i=0;i<14e3;i++){let s=De()*512,r=De()*512,o=De()*1.7+.15;e.fillStyle=De()>.5?"rgba(32,73,78,.16)":"rgba(226,226,188,.18)",e.beginPath(),e.ellipse(s,r,o,o*.6,0,0,Math.PI*2),e.fill()}for(let i=0;i<30;i++){e.beginPath();for(let s=0;s<=512;s+=4){let r=i*19+5*Math.sin(s*.025+i*.6);s===0?e.moveTo(s,r):e.lineTo(s,r)}e.strokeStyle="#bdd3ba26",e.lineWidth=3,e.stroke()}let t=new _n(n);return t.colorSpace=Rt,t.wrapS=t.wrapT=ti,t.repeat.set(22,31),t.anisotropy=4,t}function Fv(){let n=new on(220,260,220,260);n.rotateX(-Math.PI/2);let e=n.attributes.position;for(let o=0;o<e.count;o++){let a=e.getX(o),c=e.getZ(o)-49;e.setXYZ(o,a,at(a,c),c)}n.computeVertexNormals();let t=new Float32Array(e.count*3),i=new Be;for(let o=0;o<e.count;o++){let a=e.getY(o),c=gs((a-6)/45,0,1);i.setRGB(1-c*.4,1-c*.49,1-c*.33),i.toArray(t,o*3)}n.setAttribute("color",new St(t,3));let s=kt("#90b6a8",{map:Nv(),vertexColors:!0});s.onBeforeCompile=o=>{o.uniforms.uTime=Yl,o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 seaWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
seaWorld=(modelMatrix*vec4(transformed,1.)).xyz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 seaWorld; uniform float uTime;`).replace("#include <dithering_fragment>",`float wave1=sin(seaWorld.x*1.51367646+sin(seaWorld.z*.894145602+uTime*.3)*1.8); float wave2=sin(seaWorld.z*1.691626814+sin(seaWorld.x*.79967813-uTime*.24)*1.9); float caustic=pow(max(0.,1.-abs(wave1+wave2)*.8),10.); gl_FragColor.rgb+=vec3(.03,.048,.035)*caustic*(1.-smoothstep(2.,20.,seaWorld.y))*(1.-smoothstep(fogNear,fogFar,vFogDepth))*exp(-max(0.,-seaWorld.y-6.)*.08); float caveShade=(1.-smoothstep(11.,18.,abs(mod(seaWorld.x+110.,220.)-146.)))*(1.-smoothstep(17.,28.,abs(mod(seaWorld.z+179.,260.)-77.))); gl_FragColor.rgb*=mix(vec3(1.),vec3(.16,.34,.42),caveShade*.87);
#include <dithering_fragment>`)},up(Je,n,s);let r=er(new on(220,260),new sn({color:"#86cfc0",transparent:!0,opacity:.065,side:ot,depthWrite:!1}),0,Sn.surface,-49);r.rotation.x=-Math.PI/2}function Bt(n,e,t,i,s,r=null,o=!0){let a=new tt(1,24,18),c=a.attributes.position;for(let u=0;u<c.count;u++){let f=c.getX(u),d=c.getY(u),p=c.getZ(u),x=1+.075*Math.sin(f*12+d*7)*Math.cos(p*9-d*5)+.035*Math.sin(p*19+f*9);c.setXYZ(u,f*x,d*x,p*x)}a.computeVertexNormals();let l=r===null?at(n,e)+i*.38:r,h=On.rock.clone();h.needsUpdate=!0,h.wrapS=h.wrapT=ti,h.repeat.set(2,2),h.offset.set(De(),De()),er(a,kt("#bbd1c7",{map:h,emissive:"#1e5558",emissiveIntensity:.16}),n,l,e,[t,i,s]),o&&Yt.push({x:n,y:l,z:e,rx:t*1.08,ry:i*1.08,rz:s*1.08})}function Bv(){Bt(-7,1,7.8,8,6.5,-2.9),Bt(-10,-3,4.9,6,4.4,-2.8),Bt(-3,-1,4.1,4.2,4.9,-4.4),Bt(-26,-26,9,12,7.5,-1.8),Bt(-35,5,6.5,6,8,-4),Bt(34,-18,8,10,13,-3.2),Bt(34,14,7,6,8,-4.4),Bt(-32,-47,11,15,8,0),Bt(37,-51,9,12,9,-1.7),Bt(-60,-34,6.5,12,11,-1),Bt(-56,-61,10,15,9,0),Bt(-38,-84,9,15,12,-1),Bt(-43,-118,12,18,10,1),Bt(59,-65,8,12,12,-2),Bt(61,-116,8,16,13,-1);for(let n=0;n<6;n++){let e=-40-n*8;Bt(5,e,2.1,6,3.6,at(5,e)-.2),Bt(30,e,2.1,6,3.5,at(30,e)-.2)}for(let n=0;n<7;n++){let e=7-n*7;Bt(7.6,e,1.2+De()*1.1,2.6,2.8,at(7.6,e)-.7),Bt(24.8,e,1.6+De(),3.3,3.1,at(24.8,e)-.7)}for(let n=0;n<20;n++){let e=De()*92-46,t=De()*96-55;Math.abs(e-16)<8||Math.hypot(e+7,t-1)<11||Bt(e,t,.7+De()*1.8,.7+De()*1.6,.8+De()*2,null,!1)}}function ma(n,e,t){let i=new Tn(n,e,t.length),s=new pt;return t.forEach((r,o)=>{s.position.copy(r.position),s.quaternion.copy(r.quaternion||new en),s.scale.copy(r.scale),s.updateMatrix(),i.setMatrixAt(o,s.matrix)}),i.instanceMatrix.needsUpdate=!0,Je.add(i),i}function Fp(n){n.uniforms.uPodPosition={value:_e},n.uniforms.uEyePosition={value:Ne.position},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 foliageWorld;`),n.vertexShader=n.vertexShader.replace("#include <project_vertex>",`foliageWorld=(modelMatrix*instanceMatrix*vec4(transformed,1.)).xyz;
#include <project_vertex>`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 foliageWorld; uniform vec3 uPodPosition; uniform vec3 uEyePosition;`),n.fragmentShader=n.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
vec3 sight=uPodPosition-uEyePosition; float along=dot(foliageWorld-uEyePosition,sight)/max(dot(sight,sight),.001); float eyeDistance=distance(foliageWorld,uEyePosition+clamp(along,0.,1.)*sight); float reveal=(along>.02&&along<1.04)?smoothstep(1.9,3.2,eyeDistance):1.; diffuseColor.a*=reveal; if(diffuseColor.a<.015)discard;`)}function Ov(){let n=new on(.62,1,2,8);n.translate(0,.5,0);let e=n.attributes.position;for(let r=0;r<e.count;r++){let o=e.getY(r);e.setX(r,e.getX(r)*(.3+Math.sin(o*Math.PI)*.8)+Math.sin(o*5)*.14),e.setZ(r,Math.sin(o*6)*.08)}n.computeVertexNormals();let t=[];for(let r=0;r<500;r++){let o=De()*136-68,a=De()*169-134;if(Math.abs(o+14)<7&&a>8||o>9&&o<23||Math.sin(o*.23+a*.13)<-.3)continue;let c=new Ce(o,at(o,a)-.2,a),l=1.5+De()*6.5;for(let h=0;h<3;h++)t.push({position:c.clone().add(new Ce(h*.22,0,0)),scale:new Ce(.6+De()*.6,l*(.6+De()*.4),1),quaternion:new en().setFromAxisAngle(new Ce(0,1,0),De()*6.28)})}let i=kt("#558b68",{side:ot,transparent:!0,depthWrite:!1});i.onBeforeCompile=r=>{r.uniforms.uTime=Yl,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.x+=sin(uTime*.65+instanceMatrix[3].x*.3+transformed.y*2.)*transformed.y*.13;`),Fp(r)},ma(n,i,t);let s=["#9e8eaa","#bb9a7c","#7ba9a8","#aa879a"];for(let r of s){let o=[];for(let a=0;a<75;a++){let c=De()*134-67,l=De()*167-132;if(c>8&&c<27||c>24&&l<-79)continue;let h=new Ce(c,at(c,l),l);for(let u=0;u<9;u++){let f=new Ce((De()-.5)*1.4,.7+De()*1.6,(De()-.5)*1.2),d=f.length(),p=h.clone().add(new Ce((De()-.5)*.7,De()*.3,(De()-.5)*.7));o.push({position:p.addScaledVector(f,.5),scale:new Ce(.09+De()*.1,d,.09+De()*.1),quaternion:new en().setFromUnitVectors(new Ce(0,1,0),f.normalize())})}}ma(new Ht(.6,1,1,7),kt(r,{emissive:r,emissiveIntensity:.025}),o)}for(let r=0;r<12;r++){let o=er(new Ht(.07,.17,1.3+De(),7),kt("#beabb5"),-9+De()*5,5+De()*.8,-1+De()*3);o.rotation.z=(De()-.5)*.5}}function zv(){let n=new on(.95,1,3,12);n.translate(0,.5,0);let e=n.attributes.position;for(let s=0;s<e.count;s++){let r=e.getY(s);e.setX(s,e.getX(s)*(.18+.8*Math.sin(r*Math.PI))+Math.sin(r*7)*.2),e.setZ(s,Math.sin(r*5)*.13)}n.computeVertexNormals();let t=[];for(let s=0;s<180;s++){let r=-55+De()*29,o=-55+De()*47,a=-41+Math.sin((o+31)*.11)*4;if(Math.abs(r-a)<3.6||Math.hypot(r+34,o+28)<4)continue;let c=9+De()*13,l=new Ce(r,at(r,o)-.12,o);for(let h=0;h<3;h++)t.push({position:l.clone().add(new Ce(h*.22,0,0)),scale:new Ce(.75+De()*.4,c*(.75+De()*.25),1),quaternion:new en().setFromAxisAngle(new Ce(0,1,0),h*1.05+De()*.7)})}let i=kt("#598b62",{side:ot,transparent:!0,depthWrite:!1,emissive:"#123f32",emissiveIntensity:.14});i.onBeforeCompile=s=>{s.uniforms.uTime=Yl,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.x+=sin(uTime*.5+instanceMatrix[3].z*.17+transformed.y*3.)*transformed.y*.25;`),Fp(s)},ma(n,i,t),Hv(),kv();for(let[s,r,o]of[[-42,4,-28],[18,-12,-54],[35,-9,-79],[-9,3,-115]])for(let a=0;a<7;a++)Zs.push({sprite:Ks(null,1.1,.33,0,0,0),x:s+a*1.35,z:o+a*.6,y:r+a*.12,phase:a*.4});Zs.push({sprite:Ks(null,4.1,2.3,-46,6,-36),x:-46,z:-36,y:6,phase:2,turtle:!0});for(let s=0;s<8;s++){let r=new st;r.position.set(28+s*3,-7+s%3*1.8,-78-s%4*4),Je.add(r);let o=new nt(new tt(.65,18,10,0,Math.PI*2,0,Math.PI*.58),new At({color:"#b2e8df",emissive:"#65bfae",emissiveIntensity:.35,transparent:!0,opacity:.52,roughness:.42,depthWrite:!1,side:ot}));r.add(o);for(let a=0;a<5;a++){let c=a*Math.PI*2/5,l=[];for(let h=0;h<7;h++)l.push(new Ce(Math.cos(c)*.34+Math.sin(h*.9+a)*.12,-h*.31,Math.sin(c)*.34));r.add(new nt(new An(new yn(l),18,.018,5,!1),new sn({color:"#a5ddd1",transparent:!0,opacity:.43})))}aa.push({group:r,y:r.position.y,phase:s*.7})}}function Hv(){let n=document.createElement("canvas");n.width=128,n.height=512;let e=n.getContext("2d");e.fillStyle="#807050",e.fillRect(0,0,128,512);for(let h=0;h<500;h++){let u=De()*128;e.strokeStyle=h%2?"#423f3138":"#c7ad7b27",e.beginPath(),e.moveTo(u,0);for(let f=0;f<512;f+=8)e.lineTo(u+Math.sin(f*.026+h)*2.6,f);e.stroke()}let t=new _n(n);t.colorSpace=Rt,t.wrapS=t.wrapT=ti;let i=kt("#b2a078",{map:t,roughness:.92}),s=kt("#56756c",{metalness:.45,roughness:.7}),r=new st;r.position.set(18,at(18,-54)+2.8,-54),Je.add(r);let o=r.position.y,a=(h,u,f=.16,d=i,p=!1)=>{let x=u.clone().sub(h),g=new nt(new Ht(f,f,x.length(),8),d);if(g.position.copy(h).add(u).multiplyScalar(.5),g.quaternion.setFromUnitVectors(new Ce(0,1,0),x.normalize()),r.add(g),p){let m=Math.ceil(h.distanceTo(u)/1.3);for(let v=0;v<=m;v++){let y=h.clone().lerp(u,v/m).add(r.position);Yt.push({x:y.x,y:y.y,z:y.z,rx:f+.15,ry:f+.15,rz:f+.15,structure:"wreck"})}}return g};for(let h=0;h<13;h++){let u=-18+h*3;if(Math.abs(u)<3.1)continue;let f=2.2+2.8*Math.sin((u+18)/36*Math.PI);for(let d of[-1,1]){let p=[new Ce(0,-2,u),new Ce(d*f*.55,-1.4,u),new Ce(d*f,.2,u),new Ce(d*f,3,u)];for(let x=0;x<3;x++)a(p[x],p[x+1],.17);if(!(d<0&&u>-6&&u<9)){Yt.push({x:18+d*f,y:o+.7,z:-54+u,rx:.55,ry:2.5,rz:1.4,structure:"wreck"});for(let x=0;x<3;x++){let g=new nt(new zt(.16,.44,2.6),i);g.position.set(d*f,.1+x*.7,u),r.add(g)}}}}for(let h of[-11,11]){for(let u=0;u<12;u++){let f=new nt(new zt(.68,.22,8.6),i);f.position.set(-4.1+u*.74,2,h),r.add(f)}Yt.push({x:18,y:o+2,z:-54+h,rx:4.9,ry:.48,rz:5.1,structure:"wreck"})}a(new Ce(0,2,-11),new Ce(8,14,3),.28,i,!0),a(new Ce(6,11,-2),new Ce(-3,11,-8),.18);let c=new nt(new Tt(.9,.1,8,20),s);c.position.set(0,3.6,12),r.add(c);for(let h=0;h<6;h++){let u=h*Math.PI/3;a(new Ce(0,3.6,12),new Ce(Math.sin(u)*1.1,3.6+Math.cos(u)*1.1,12),.065,s)}for(let[h,u]of[[-2,-13],[2,13]]){let f=new nt(new zt(1.4,.85,1.05),i);f.position.set(h,2.55,u),r.add(f);for(let d of[-.45,.45]){let p=new nt(new zt(.09,.88,1.08),s);p.position.set(h+d,2.55,u),r.add(p)}}let l=[];for(let h=0;h<44;h++){let u=-18+De()*36,f=(De()>.5?1:-1)*(2.2+2.8*Math.sin((u+18)/36*Math.PI));l.push({position:new Ce(18+f,o+2.6,-54+u),scale:new Ce(.13,.7+De()*1.2,.13),quaternion:new en().setFromAxisAngle(new Ce(0,0,1),(De()-.5)*.5)})}ma(new Ht(.45,1,1,6),kt("#858f8d"),l)}function kv(){let n=kt("#859fa8",{map:On.rock,emissive:"#113d4b",emissiveIntensity:.12});for(let s of[-87,-99,-111]){let r=new Tt(11,2.1,14,56,Math.PI),o=r.attributes.position,a=r.attributes.normal;for(let c=0;c<o.count;c++){let l=.19*Math.sin(o.getX(c)*1.3+o.getZ(c)*2.1)*Math.cos(o.getY(c)*1.6);o.setXYZ(c,o.getX(c)+a.getX(c)*l,o.getY(c)+a.getY(c)*l,o.getZ(c)+a.getZ(c)*l)}r.computeVertexNormals(),er(r,n,36,-17.5,s);for(let c=0;c<=14;c++){let l=c*Math.PI/14;Yt.push({x:36+Math.cos(l)*11,y:-17.5+Math.sin(l)*11,z:s,rx:2.25,ry:2.25,rz:2.25,structure:"cave"})}}for(let s of[-90,-102,-114])Bt(23,s,3.7,7,5.2,-13),Bt(49,s,3.7,7,5.2,-13);let e=[];for(let s=0;s<105;s++){let r=-80-De()*39,o=De()>.5?1:-1,a=36+o*(5.7+De()*3.8),c=at(a,r);e.push({position:new Ce(a,c+.25,r),scale:new Ce(.16+De()*.18,.6+De()*1.7,.18+De()*.15),quaternion:new en().setFromAxisAngle(new Ce(0,0,1),o*(.1+De()*.45))})}ma(new si(1,1,5),kt("#397f91",{emissive:"#35919e",emissiveIntensity:.42,roughness:.4}),e);for(let s of[-88,-102,-115]){let r=new ri("#6dc9cc",12,23,2);r.position.set(36,-11,s),Je.add(r),Ks(On.glow,11,6,36,-16,s,{opacity:.2,blending:oi})}let t=[];for(let s=0;s<100;s++)t.push(28+De()*16,-16+De()*8,-80-De()*39);let i=new rt;i.setAttribute("position",new ke(t,3)),Je.add(new Ni(i,new ss({map:On.glow,color:"#a4f0df",size:.16,transparent:!0,opacity:.8,depthWrite:!1})))}function Vv(){Je.add(new Us("#a9eadf","#173645",2.3));let n=new Ur("#ffedc5",2.5);n.position.set(-24,60,18),Je.add(n);let e=new Ur("#61b9c9",1.1);e.position.set(25,12,-40),Je.add(e);let t=Uv();On.glow=t;for(let o=0;o<6;o++){let a=new on(3+De()*4,50),c=new rn({transparent:!0,depthWrite:!1,side:ot,blending:oi,uniforms:{},vertexShader:"varying vec2 v; void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 v;void main(){float a=pow(max(0.,1.-abs(v.x-.5)*2.),2.)*sin(v.y*3.14159)*.047;gl_FragColor=vec4(.45,.75,.66,a);}"}),l=er(a,c,-32+o*13,15,-33-o*4);l.rotation.z=-.19,l.rotation.y=.3}let i=new rt,s=new Float32Array(450*3);for(let o=0;o<450;o++)s[o*3]=De()*115-57,s[o*3+1]=De()*42-23,s[o*3+2]=De()*125-85;i.setAttribute("position",new St(s,3));let r=new Ni(i,new ss({map:t,size:.2,color:"#b4e2c3",transparent:!0,opacity:.5,depthWrite:!1}));Je.add(r)}var nn=new Ce(-7,2,-143);function Gv(){let n=new st;Je.add(n),n.position.copy(nn);let e=kt("#b5cab5",{map:On.rock,emissive:"#1e5558",emissiveIntensity:.24}),t=kt("#a39463",{metalness:.38,roughness:.62}),i=kt("#6bafa9",{emissive:"#5cceb6",emissiveIntensity:.75,metalness:.25,roughness:.32}),s=(c,l,h,u,f)=>{let d=new nt(c,l);return d.position.set(h,u,f),n.add(d),d};s(new zt(19,2.3,9),e,0,-6,0);for(let c of[-6.4,6.4]){s(new Ht(2.2,2.9,13.2,18),e,c,.3,0),s(new Ht(2.7,2.3,1.2,18),t,c,7.2,0),s(new si(2.7,3.8,18),e,c,9.7,0);let l=s(new Tt(1.15,.23,10,36),t,c,3.9,2.75);l.rotation.y=c<0?.12:-.12,s(new Wn(.95,36),i,c,3.9,2.77);for(let h of[-3,0])s(new Tt(2.5,.09,6,28),t,c,h,0).rotation.x=Math.PI/2}let r=s(new Tt(5.8,.95,14,48,Math.PI),e,0,1.9,0);for(let c of[-5.8,5.8])s(new Ht(.95,1.18,7.2,12),e,c,-1.7,0);s(new Tt(5.8,.08,8,48,Math.PI),t,0,1.9,.97);let o=[];for(let c=0;c<145;c++)o.push((De()-.5)*9.2,-5+De()*11.5,(De()-.5)*1.1);let a=new rt;a.setAttribute("position",new ke(o,3)),Nl=new Ni(a,new ss({map:On.glow,size:.32,color:"#beead0",transparent:!0,opacity:.7,depthWrite:!1})),n.add(Nl),Cp=s(new on(9,10.5),new sn({color:"#8eeed1",transparent:!0,opacity:.055,side:ot,depthWrite:!1}),0,0,.2),Yt.push({x:nn.x,y:nn.y,z:nn.z,rx:8.7,ry:12.2,rz:5.7,gate:!0});for(let c of[-6.4,6.4])Yt.push({x:nn.x+c,y:nn.y+.3,z:nn.z,rx:2.9,ry:6.6,rz:2.9,structure:"customs-tower"});Yt.push({x:nn.x,y:nn.y-6,z:nn.z,rx:9.5,ry:1.15,rz:4.5,structure:"customs-foundation"});for(let c=0;c<=12;c++){let l=c*Math.PI/12;Yt.push({x:nn.x+Math.cos(l)*5.8,y:nn.y+1.9+Math.sin(l)*5.8,z:nn.z,rx:.95,ry:.95,rz:.95,structure:"customs-arch"})}}function bp(n,e,t,i){let s=n==="shell"&&t<=at(e,i)+1.1;t=Math.max(t,at(e,i)+.9);let r=pa({x:e,y:t,z:i}).id,o=(u,f,d)=>Yt.some(p=>((u-p.x)/(p.rx+1.5))**2+((f-p.y)/(p.ry+1.5))**2+((d-p.z)/(p.rz+1.5))**2<1),a=[[0,0],[-2,0],[2,0],[0,2],[0,-2],[-3,2],[3,-2]];for(let u of[4,7,11,16,24])for(let f=0;f<16;f++)a.push([Math.cos(f*Math.PI/8)*u,Math.sin(f*Math.PI/8)*u]);let c=!1;for(let[u,f]of a){let d=e+u,p=i+f;if(d<Tl.minX||d>Tl.maxX||p<Tl.minZ||p>Tl.maxZ||pa({x:d,z:p}).id!==r)continue;let x=s?at(d,p)+.9:Math.max(t,at(d,p)+.9),g=Math.max(x,at(d,p)+1.5);if(g<=11&&!o(d,g,p)){e=d,i=p,t=x,c=!0;break}}if(!c)throw new Error("\u6536\u85CF\u7269\u6CA1\u6709\u5B89\u5168\u4F4D\u7F6E");let l=Ks(On.glow,n==="shell"?3.4:2.1,n==="shell"?3.4:2.1,e,t,i,{opacity:.72,blending:oi}),h;n==="pearl"?h=er(new tt(.38,18,12),kt("#e7efdb",{roughness:.2,metalness:.28,emissive:"#81c7b5",emissiveIntensity:.4}),e,t,i):h=Ks(On.shell,1.5,1.5,e,t,i),zn.push({kind:n,position:new Ce(e,t,i),body:h,glow:l,taken:!1,index:zn.length})}function Wv(){let n=[[-15,-1,17],[-16,-1,9],[-18,-1,0],[-23,0,14],[-29,1,6],[-37,1,16],[3,2,24],[13,1,18],[22,0,9],[32,1,20],[-19,-1,-10],[-25,1,-17],[-34,3,-23],[-43,5,-30],[-45,0,-39],[-35,-1,-46],[-28,3,-41],[-32,5,-31],[-40,-1,-21],[-49,5,-18],[16,-5,5],[16,-10,-3],[16,-15,-12],[18,-15,-25],[18,-19,-36],[13,-20,-44],[18,-19,-52],[25,-14,-60],[18,-14,-70],[12,-12,-79],[29,-11,-79],[34,-12,-84],[36,-13,-90],[38,-13,-97],[35,-13,-104],[36,-13,-111],[36,-11,-117],[42,-9,-108],[30,-11,-102],[40,-6,-86],[-4,0,-76],[-12,1,-83],[-20,0,-93],[-23,2,-105],[-15,2,-116],[-7,2,-125],[2,4,-119],[8,5,-109],[6,0,-95],[-3,2,-107]],e=(i,s)=>[i,at(i,s)+.9,s],t=[e(-23,10),e(-32,20),e(8,26),e(31,14),e(-41,-12),e(-49,-27),e(-40,-44),e(-30,-46),[16,-19.6,-12],e(13,-35),[18,at(18,-54)+6.4,-48],e(22,-71),e(36,-89),e(39,-99),e(34,-108),e(36,-116),e(-14,-80),e(-22,-97),e(-13,-115),e(1,-123)];for(let i of n)bp("pearl",...i);for(let i of t)bp("shell",...i);if(zn.filter(i=>i.kind==="pearl").length!==ua.pearl||zn.filter(i=>i.kind==="shell").length!==ua.shell)throw new Error("\u6D77\u57DF\u6536\u85CF\u6570\u91CF\u4E0D\u4E00\u81F4")}function Xv(){ut=new st,ut.position.copy(_e),Je.add(ut);let n=On.hull.clone();n.wrapS=n.wrapT=ti,n.repeat.set(3,2),n.needsUpdate=!0;let e=kt("#e5d8a9",{map:n,metalness:.32,roughness:.67}),t=kt("#c4a866",{metalness:.52,roughness:.43}),i=kt("#274b56",{metalness:.32,roughness:.7}),s=(_,T,E=0,C=0,P=0)=>{let b=new nt(_,T);return b.position.set(E,C,P),ut.add(b),b},r=[new re(1.17,-1.42),new re(1.34,-1.2),new re(1.6,-.8),new re(1.77,-.25),new re(1.78,.25)],o=[new re(1.78,.25),new re(1.61,.9),new re(1.24,1.5),new re(.73,1.94),new re(.25,2.12),new re(0,2.14)],a=(_,T=0,E=Math.PI*2)=>{let C=new Ps(_,64,T,E);return C.rotateX(Math.PI/2),C};s(a(r),e);let c=s(a(o),e);c.name="opaqueRearHull",ut.userData.rearHull=c,s(new Tt(1.79,.07,10,64),t,0,0,.25),s(new Wn(1.48,48),kt("#153c43",{roughness:.85}),0,0,.05),s(new zt(2.38,.16,1.8),kt("#806f4b",{roughness:.74,metalness:.2}),0,-.91,.66);for(let _ of[-1,1]){s(new zt(.1,.88,.16),i,_*1.32,-.23,.36),s(new zt(.39,.18,.48),t,_*.91,-.71,.58);for(let T=0;T<3;T++)s(new tt(.034,8,6),new sn({color:T===0?"#f6d398":"#93d8c2"}),_*(.79+T*.09),-.59,.75)}let l=new ri("#f9ddb0",2.4,4,2);l.position.set(0,.96,.55),ut.add(l),ut.userData.cabinLight=l,l.visible=!1;let h=[];for(let _=0;_<3;_++){let T=s(new tt(.075+_*.016,14,10),new Pr({color:"#d3f4e8",transparent:!0,opacity:0,roughness:.12,metalness:0,depthWrite:!1}),_===0?-.95:.64+_*.16,.45+_*.24,1.57);T.visible=!1,h.push({mesh:T,baseY:T.position.y})}ut.userData.reactionBubbles=h,s(new Tt(1.21,.19,14,64),t,0,0,-1.43),s(new Tt(1.01,.065,10,64),i,0,0,-1.44);for(let _=0;_<12;_++){let T=_*Math.PI/6;s(new tt(.066,8,6),i,Math.cos(T)*1.22,Math.sin(T)*1.22,-1.62)}let u=s(new Wn(1.16,48),new sn({color:"#174356"}),0,0,-.86);u.rotation.y=Math.PI;let f=s(new Wn(1.04,64),new Pr({color:"#a7e5df",transparent:!0,opacity:.12,roughness:.13,metalness:.06,clearcoat:.5,depthWrite:!1,side:ot}),0,0,-1.49);f.name="frontGlass",s(new Ht(.31,.39,.36,20),e,0,1.8,-.4);let d=s(new Ht(.31,.31,.64,24),t,0,2.02,-.69);d.rotation.x=Math.PI/2,s(new Wn(.26,32),new sn({color:"#b9ecd6",side:ot}),0,2.02,-1.02).rotation.y=Math.PI;let p=s(new si(1.35,5.2,28,1,!0),new sn({color:"#bed7ab",transparent:!0,opacity:.035,side:ot,depthWrite:!1,blending:oi}),0,1.94,-3.58);p.rotation.x=Math.PI/2,s(new zt(.52,.36,.57),e,0,-1.02,1.75);let x=s(new Ht(.12,.12,.6,14),i,0,-1.02,2.17);x.rotation.x=Math.PI/2;let g=new st;g.position.set(0,-1.02,2.45),ut.add(g),ut.userData.propeller=g,g.add(new nt(new tt(.2,16,10),t));for(let _=0;_<3;_++){let T=_*2*Math.PI/3,E=new nt(new tt(1,16,8),t);E.scale.set(.14,.51,.05),E.position.set(-Math.sin(T)*.43,Math.cos(T)*.43,0),E.rotation.z=T+.25,g.add(E)}for(let _ of[-1,1]){let T=new rt;T.setAttribute("position",new ke([_*1.25,-.72,.62,_*2.32,-.72,1.68,_*1.08,-.72,1.7],3)),T.computeVertexNormals(),s(T,kt("#798d76",{metalness:.35,roughness:.65,side:ot}))}let m=document.createElement("canvas");m.width=m.height=128;let v=m.getContext("2d"),y=v.createRadialGradient(64,64,0,64,64,64);y.addColorStop(0,"rgba(0,16,25,.38)"),y.addColorStop(1,"rgba(0,16,25,0)"),v.fillStyle=y,v.fillRect(0,0,128,128),$s=er(new on(5,6),new sn({map:new _n(m),transparent:!0,depthWrite:!1}),_e.x,at(_e.x,_e.z)+.08,_e.z),$s.rotation.x=-Math.PI/2;for(let _=0;_<5;_++){let T=Ks(null,1.3,.39,0,0,0);Zs.push({sprite:T,x:-29+_*2,z:-19+_*.7,y:2+_*.22,phase:_*.3})}Zs.push({sprite:Ks(null,4.1,2.3,-31,4,-14),x:-31,z:-14,y:4,phase:0,turtle:!0})}function Gu(){let n=qt-Xt.start,e=!!Xt.kind&&n<Xt.duration,t=e?gs(n/Xt.duration,0,1):1;return{active:e,phase:t,kind:Xt.kind,duration:Xt.duration,serial:Xt.serial,side:Xt.side,pose:e&&t>.15&&t<.76?"hi5":"idle"}}function qv(n){let e=Gu();if(e.active){n.kind==="shell"&&Xt.kind!=="shell"&&(Xt.kind="shell",Xt.duration=.7,Xt.start=qt-e.phase*.7),Hn("reaction-merge",{kind:n.kind,serial:Xt.serial});return}let t=n.position.clone().sub(_e);Xt.kind=n.kind,Xt.start=qt,Xt.duration=n.kind==="shell"?.7:.45,Xt.side=t.x*Math.cos(mt)+t.z*Math.sin(mt)<0?-1:1,Xt.serial++,Hn("reaction-start",{kind:n.kind,duration:Xt.duration,serial:Xt.serial})}function Yv(){let n=Gu(),e=n.active&&!pn?Math.sin(Math.PI*n.phase):0,t=n.kind==="shell";ut.userData.cabinLight.intensity=2.4+e*(t?1.3:.9);for(let[i,s]of ut.userData.reactionBubbles.entries())s.mesh.visible=n.active&&t&&!pn&&n.phase>.14&&n.phase<.94,s.mesh.position.y=s.baseY+n.phase*.68,s.mesh.scale.setScalar(.7+e*.3),s.mesh.material.opacity=e*.26}function Zv(n){let e=n.clone().sub(_e);return Yt.some(t=>{if(t.gate)return!1;let i=new Ce((_e.x-t.x)/(t.rx+.55),(_e.y-t.y)/(t.ry+.55),(_e.z-t.z)/(t.rz+.55)),s=new Ce(e.x/(t.rx+.55),e.y/(t.ry+.55),e.z/(t.rz+.55)),r=s.dot(s),o=2*i.dot(s),a=i.dot(i)-1,c=o*o-4*r*a;if(r<1e-4||c<0)return!1;let l=(-o-Math.sqrt(c))/(2*r);return l>.025&&l<1.02})}function Ep(n){if(Lp(_e)){n.y=Math.max(at(n.x,n.z)+2.4,Math.min(n.y,-9.8));for(let e=0;e<14&&Zv(n);e++)n.lerp(_e,.22);for(let e=1;e<64;e++){let t=e/64,i=_e.x+(n.x-_e.x)*t,s=_e.z+(n.z-_e.z)*t;n.y=Math.max(n.y,_e.y+(at(i,s)+.75-_e.y)/t)}return}n.y=Math.max(n.y,at(n.x,n.z)+4);for(let e=1;e<64;e++){let t=e/64,i=_e.x+(n.x-_e.x)*t,s=_e.z+(n.z-_e.z)*t;n.y=Math.max(n.y,_e.y+(at(i,s)+1.15-_e.y)/t)}for(let e of Yt){if(e.gate&&Yr)continue;let t=(n.x-e.x)/(e.rx+1.4),i=(n.y-e.y)/(e.ry+1.4),s=(n.z-e.z)/(e.rz+1.4);t*t+i*i+s*s<1.2&&(n.y=Math.max(n.y,e.y+e.ry+3))}for(let e=0;e<10;e++){let t=n.clone().sub(_e);if(!Yt.some(s=>{if(s.gate)return!1;let r=new Ce((_e.x-s.x)/(s.rx+1),(_e.y-s.y)/(s.ry+1),(_e.z-s.z)/(s.rz+1)),o=new Ce(t.x/(s.rx+1),t.y/(s.ry+1),t.z/(s.rz+1)),a=o.dot(o),c=2*r.dot(o),l=r.dot(r)-1,h=c*c-4*a*l;if(h<0||a<1e-4)return!1;let u=(-c-Math.sqrt(h))/(2*a);return u>.025&&u<.94}))break;n.y+=3.4}}function Bp(){if(!Qs||Ot!==1||Cn||Zt||jt)return;$n=$n==="cockpit"?"external":"cockpit",Yn=!1;let n=$n==="cockpit";Ne.fov=n?68:57,Ne.near=n?.06:.2,Ne.updateProjectionMatrix(),ue("shell").classList.toggle("cockpit-mode",n),ue("viewBtn").textContent=n?"\u89C6\u89D2\uFF1A\u8231\u5185":"\u89C6\u89D2\uFF1A\u5916\u90E8",ue("viewBtn").setAttribute("aria-pressed",String(n)),ue("viewStatus").textContent=n?"\u5DF2\u5207\u6362\u5230\u9A7E\u9A76\u8231\u89C6\u89D2":"\u5DF2\u5207\u6362\u5230\u5916\u90E8\u8FFD\u8E2A\u89C6\u89D2",di(0,!0),Ei(),Hn("view-switch",{mode:$n}),ue("sea").focus({preventScroll:!0})}function di(n,e=!1){if($n==="cockpit"){Rn=mt,Ne.position.copy(_e).add(Dv.clone().applyAxisAngle(new Ce(0,1,0),-mt)),fs.copy(Ne.position).add(new Ce(Math.sin(mt),0,-Math.cos(mt))),Ne.lookAt(fs),Ne.updateMatrixWorld();return}let t=Math.atan2(Math.sin(mt-Rn),Math.cos(mt-Rn));Rn+=t*(e?1:1-Math.exp(-n*3.6));let i=Lp(_e),s=i?9:21;for(let a=0;a<7;a++){let c=new Ce(0,i?3.2:9.5,s).applyAxisAngle(new Ce(0,1,0),-Rn);if(ps.copy(_e).add(c),Ep(ps),ps.y-_e.y<=18||s<=6)break;s=Math.max(6,s*.8)}let r=new Ce(Math.sin(Rn)*5.5,1.2,-Math.cos(Rn)*5.5),o=_e.clone().add(r);e?(Ne.position.copy(ps),fs.copy(o)):(Ne.position.lerp(ps,1-Math.exp(-n*6)),fs.lerp(o,1-Math.exp(-n*6))),Ep(Ne.position),Ne.lookAt(fs),Ne.updateMatrixWorld()}function Gs(n){return Js.has(n)||[...Kr.values()].includes(n)}function Op(n){Js.has(n)||(Js.add(n),Xl.set(n,++Ip))}function zp(n){Js.delete(n),Xl.delete(n)}function $v(n,e){Kr.set(n,e),ql.set(n,++Ip)}function Jv(n){Kr.delete(n),ql.delete(n)}function Wu(){let n=0,e=0,t=(i,s)=>{(i==="KeyA"||i==="ArrowLeft")&&(n=Math.max(n,s)),(i==="KeyD"||i==="ArrowRight")&&(e=Math.max(e,s))};for(let i of Js)t(i,Xl.get(i)||0);for(let[i,s]of Kr)t(s,ql.get(i)||0);return n||e?e>n?1:-1:0}function Kv(n,e){!Yr&&ms.pearl>=Yi.pearl&&ms.shell>=Yi.shell&&(Yr=!0,Cp.material.opacity=.015,Nl.material.opacity=.15,ue("gateLabel").querySelector("span").textContent="\u6C14\u6CE1\u5E18\u5F00\u653E \xB7 \u4ECE\u53CC\u5854\u4E2D\u95F4\u901A\u884C",Hn("gate-unlocked",{targets:{...Yi}}),ga("\u6536\u85CF\u5DF2\u8FBE\u6807\uFF0C\u524D\u5F80\u8FB9\u754C\u6D77\u5173\uFF0C\u4ECE\u53CC\u5854\u4E2D\u95F4\u7A7F\u8FC7"));let t=n.clone().sub(e),i=n.clone().sub(_e.clone().add(Ul())),s=t.z<0&&i.z>=0,r=s?t.clone().lerp(i,-t.z/(i.z-t.z)):i;!Iu&&Yr&&s&&Math.abs(r.x)<3.7&&r.y<3&&r.y>-5.5&&(Iu=!0,Hn("level-complete",{level:2,targets:{...Yi}}),ue("gateLabel").querySelector("span").textContent="\u901A\u884C\u6210\u529F",ga("\u8FB9\u754C\u6D77\u5173\u901A\u884C\u6210\u529F\u3002\u53EF\u4EE5\u7EE7\u7EED\u63A2\u7D22\uFF0C\u6216\u8FD4\u56DE\u7FA4\u5C9B\u5730\u56FE"))}function Hn(n,e={}){la.push({type:n,time:qt,...e}),la.length>400&&la.shift()}function ga(n){ue("toast").textContent=n,ue("toast").classList.add("visible"),clearTimeout(Mp),Mp=setTimeout(()=>ue("toast").classList.remove("visible"),3400)}function jv(){clearTimeout(Fl),ue("shell").classList.remove("hide-hint"),Fl=setTimeout(()=>ue("shell").classList.add("hide-hint"),5e3)}function ui(){Js.clear(),Kr.clear(),Xl.clear(),ql.clear()}function wp(n,e,t=0){let i=qn({x:n,z:e}),s=at(n,e)+1.5;if(t>80||Math.abs(i.x)<66&&i.z<32&&i.z>-142)return s;let r=Math.sin(mt),o=Math.cos(mt),a=s;for(let c=0;c<=10;c++)for(let l=0;l<=10;l++){let h=-2.5+c*.5,u=-2.7+l*.54;a=Math.max(a,at(n+h*o-u*r,e+h*r+u*o)+2.7)}return a}function Tp(n){for(let e of Yt){if(e.gate&&Yr)continue;let t=(n.x-e.x)/(e.rx+1.35),i=(n.y-e.y)/(e.ry+1.35),s=(n.z-e.z)/(e.rz+1.35);if(t*t+i*i+s*s<1)return Up++,e}return null}function Hp(n,e=!0){qt+=n,Al=Math.max(0,Al-n);let t=_e.clone().add(Ul()),i=ia(nn,_e).add(Ul()),s=Number(Gs("KeyW")||Gs("ArrowUp"))-Number(Gs("KeyS")||Gs("ArrowDown")),r=Wu(),o=Number(Gs("Space"))-Number(Gs("ShiftLeft")||Gs("ShiftRight"));mt+=r*n*1.12;let a=new Ce(Math.sin(mt)*s*6.4,o*4.6,-Math.cos(mt)*s*6.4);s<0&&(a.x*=.65,a.z*=.65),Zn.lerp(a,1-Math.exp(-n*(s||o?2.6:2.2))),Dp+=Zn.length()*n*4;let c=_e.clone().addScaledVector(Zn,n);c.y=gs(c.y,wp(c.x,c.z,c.y),Sn.surface-2);let l=Tp(c);if(l){for(let u of["x","z","y"]){let f=_e.clone();f[u]=c[u],f.y=gs(f.y,wp(f.x,f.z,f.y),Sn.surface-2),Tp(f)?Zn[u]=0:_e.copy(f)}l.gate&&Al<=0&&(ga(`\u6D77\u5173\u9700 ${Yi.pearl} \u9897\u73CD\u73E0\u4E0E ${Yi.shell} \u679A\u8D1D\u58F3\uFF0C\u76EE\u524D\u8FD8\u672A\u8FBE\u6807`),Al=6)}else _e.copy(c);Pv();for(let u of zn)ia(u.basePosition||u.position,_e,u.position);let h=pa(_e);Pu.has(h.id)||(Pu.add(h.id),Hn("discover",{region:h.id,name:h.name}));for(let u of zn)!u.taken&&_e.distanceTo(u.position)<1.9&&(u.taken=!0,u.body.visible=!1,u.glow.visible=!1,ms[u.kind]++,Hn("collect",{kind:u.kind,index:u.index}),qv(u),tM(u.kind),ue("pearlCount").textContent=Math.min(ms.pearl,Yi.pearl),ue("shellCount").textContent=Math.min(ms.shell,Yi.shell));Kv(i,t),ms.pearl===ua.pearl&&ms.shell===ua.shell&&!la.some(u=>u.type==="sample-all")&&(Hn("sample-all"),ga("\u4E94\u5904\u6D77\u57DF\u7684\u6536\u85CF\u627E\u9F50\u4E86\uFF0C\u8FD8\u53EF\u4EE5\u7EE7\u7EED\u81EA\u7531\u822A\u884C")),e&&di(n)}function Ei(){bt.info.reset(),Yl.value=pn?0:qt,ut.position.copy(_e),ut.position.y+=pn?0:Math.sin(qt*1.7)*.1,ut.rotation.set(0,-mt,0),ut.userData.propeller.rotation.z=Dp,Yv(),$s.position.set(_e.x,at(_e.x,_e.z)+.08,_e.z),$s.material.opacity=gs(1-(_e.y-at(_e.x,_e.z))/20,.12,.8);for(let s of zn)if(!s.taken){let r=pn?0:Math.sin(qt*1.8+s.index)*.11;s.body.position.y=s.position.y+r,s.glow.position.y=s.position.y+r}us?.update(pn?0:qt),Dl?.update(pn?0:qt);let n=Nl.geometry.attributes.position;for(let s=0;s<n.count;s++){let r=s*.83%11.5;n.setY(s,-5+(r+qt*.7)%11.5)}n.needsUpdate=!0,Wt?.update({player:_e,heading:mt,time:pn?0:qt,inspection:qs,camera:Ne}),ca?.update({player:_e,camera:Ne,time:pn?0:qt}),Jr?.update(Ne,Je.fog.far),Wt?.updateShadows();let e=ia(nn,_e),t=e.clone().add(new Ce(0,13,0)).project(Ne);ue("gateLabel").hidden=t.z>1||t.z<-1||Math.abs(t.x)>1||Math.abs(t.y)>.94||(1-t.y)*innerHeight/2<145,Je.fog.near<41.9&&Ne.position.distanceTo(e)>Je.fog.far&&(ue("gateLabel").hidden=!0),ue("gateLabel").style.left=(t.x+1)*innerWidth/2+"px",ue("gateLabel").style.top=(1-t.y)*innerHeight/2+"px";for(let s of aa)s.group.position.y=s.y+(pn?0:Math.sin(qt*.55+s.phase)*.55);let i=Math.round(Sn.surface-_e.y);ue("depth").textContent=i,ue("depthBar").style.width=gs(i/160*100,0,100)+"%",ue("location").textContent=pa(_e).name,ut.visible=!qs&&($n==="external"||Yn),$s.visible=ut.visible,Zi&&!Yn&&$n==="cockpit"&&Zi.update({time:qt,y:_e.y,heading:mt,velocity:Zn,surface:Sn.surface}),eM(),$r(),Zi&&!Yn&&$n==="cockpit"&&Zi.render()}var Qv=ue("radar").getContext("2d");function eM(){let n=Qv;n.clearRect(0,0,264,264),n.save(),n.translate(132,132),n.strokeStyle="#95cfc221";for(let i of[43,85,120])n.beginPath(),n.arc(0,0,i,0,Math.PI*2),n.stroke();let e=(i,s)=>[fn(i-_e.x,220)*.86,fn(s-_e.z,260)*.86];n.fillStyle="#779b8244";for(let i of Yt){if(i.structure||i.gate||i.rx<4||Math.hypot(i.x-_e.x,i.z-_e.z)>125)continue;let s=e(i.x,i.z);n.beginPath(),n.ellipse(s[0],s[1],i.rx*.86,i.rz*.86,0,0,Math.PI*2),n.fill()}n.font='10px "PingFang SC",sans-serif',n.textAlign="center";for(let i of[...qr,...li]){let s=e(i.x,i.z);Math.hypot(...s)>115||(n.fillStyle=i.color||"#9ebed0",n.fillText(i.name,s[0],s[1]-8))}for(let i of zn){if(i.taken)continue;let s=e(i.basePosition.x,i.basePosition.z);Math.hypot(...s)>115||(n.fillStyle=i.kind==="shell"?"#e4c89e":"#a9e6d3",n.beginPath(),n.arc(s[0],s[1],i.kind==="shell"?3.5:2,0,Math.PI*2),n.fill())}let t=e(nn.x,nn.z);n.fillStyle="#ead5a2",n.fillRect(t[0]-4,t[1]-4,8,8),n.rotate(mt),n.fillStyle="#d8f5e3",n.beginPath(),n.moveTo(0,-8),n.lineTo(5,5),n.lineTo(0,2),n.lineTo(-5,5),n.closePath(),n.fill(),n.restore()}function kp(){bt&&(Ne.aspect=innerWidth/innerHeight,Ne.updateProjectionMatrix(),bt.setSize(innerWidth,innerHeight,!1),Ei())}function Vp(n){let e=ds?Math.min((n-ds)/1e3,.1):0,t=ds?n-ds:0;if(ds=n,Ot===1&&bn&&!Cn&&!Zt&&!jt&&!document.hidden){bi=Math.min(bi+e,Cu/60);let i=0;for(;bi>=1/60&&i++<Cu;)Hp(1/60,!1),bi-=1/60;i&&di(Math.min(e,i/60)),bi>=1/60&&(bi%=1/60),t>0&&(Zn.length()>.3||Wu())&&(Il.push(t),Il.length>1500&&Il.shift())}else bi=0;Ot===1&&!ue("shell").classList.contains("map-settled")&&Ei(),requestAnimationFrame(Vp)}async function Gp(){if(!(!hi||Ot!==1))try{sm(),await Ut.resume(),Rl||(Rl=(async()=>{let n=Gl||await zu();if(!n)throw new Error("Music unavailable");Xs=Ut.createBufferSource(),Xs.buffer=n,Xs.loop=!0,Xs.connect(Zr),Xs.start(),Np++})()),await Rl,xa()}catch(n){hi=!1,qi&&(qi.gain.value=0),ue("soundBtn").textContent="\u58F0\u97F3\uFF1A\u5173",ue("soundBtn").setAttribute("aria-pressed","false"),Rl=null,ga("\u58F0\u97F3\u6682\u672A\u80FD\u542F\u52A8\uFF0C\u53EF\u4EE5\u70B9\u51FB\u58F0\u97F3\u5F00\u5173\u91CD\u8BD5"),console.warn("Audio unavailable",n)}}function xa(){Ut&&(qi.gain.setTargetAtTime(hi&&Ot===1?.65:0,Ut.currentTime,.04),Zr.gain.setTargetAtTime(Cn||Zt?.22:.48,Ut.currentTime,.2))}function tM(n){if(!hi||!Ut||Ut.state!=="running")return;(n==="shell"?[1396.9,2093,2793.8]:[1046.5,1568]).forEach((t,i)=>{let s=Ut.createOscillator(),r=Ut.createGain(),o=Ut.currentTime+i*.045;s.frequency.value=t,s.type="sine",r.gain.setValueAtTime(0,o),r.gain.linearRampToValueAtTime(.095-i*.018,o+.008),r.gain.exponentialRampToValueAtTime(1e-4,o+.32),s.connect(r),r.connect(Ol),s.start(o),s.stop(o+.35),s.onended=()=>{s.disconnect(),r.disconnect()}}),Hn("sound",{kind:n})}function zl(){!Qs||bn||Ot!==1||(bn=!0,ue("welcome").hidden=!0,ui(),jv(),ue("sea").focus({preventScroll:!0}),ds=performance.now(),bi=0,Gp(),Hn("start"))}function Lu(n){ue("mapLayer").contentWindow?.postMessage({source:"loopie-audit",...n},"*")}function Wp(){return{type:"show",selected:Ot,labels:{0:da?"\u7EE7\u7EED\u6E38\u620F":"\u5F00\u59CB\u6E38\u620F",1:bn?"\u7EE7\u7EED\u63A2\u7D22":"\u5F00\u59CB\u63A2\u7D22",2:fa?"\u7EE7\u7EED\u6E38\u620F":"\u5F00\u59CB\u6E38\u620F"}}}function nM(){ue("mapLayer").getAttribute("src")||(ue("mapLayer").src="index.html?embed=1")}function Xu(n){ue("firstLayer").contentWindow?.postMessage({source:"loopie-host",...n},"*")}function qu(){if(!ku||Ot!==0||Zt||jt)return;let n=Pl;Pl=!1,Xu({type:"resume",play:n}),n&&(da=!0),ue("firstLayer").focus({preventScroll:!0})}function Xp(n=!1){Pl=Pl||n,ue("firstLayer").getAttribute("src")||(ue("firstLayer").src="lighthouse.html?host=1"),qu()}function Yu(n){ue("thirdLayer").contentWindow?.postMessage({source:"loopie-host",...n},"*")}function Zu(){if(!Vu||Ot!==2||Zt||jt)return;let n=Ll;Ll=!1,Yu({type:"resume",play:n}),n&&(fa=!0),ue("thirdLayer").focus({preventScroll:!0})}function qp(n=!1){Ll=Ll||n,ue("thirdLayer").getAttribute("src")||(ue("thirdLayer").src="echo-theater.html?host=1"),Zu()}function Hl(n){Ot=n,ue("shell").classList.toggle("first-active",n===0),ue("firstLayer").hidden=n!==0,ue("firstLayer").inert=n!==0||Zt||jt,ue("firstLayer").tabIndex=n===0?0:-1,ue("firstLayer").setAttribute("aria-hidden",String(n!==0)),ue("shell").classList.toggle("third-active",n===2),ue("thirdLayer").hidden=n!==2,ue("thirdLayer").inert=n!==2||Zt||jt,ue("thirdLayer").tabIndex=n===2?0:-1,ue("thirdLayer").setAttribute("aria-hidden",String(n!==2)),ue("world").inert=n!==1||Zt||jt,n!==0&&Xu({type:"pause"}),n!==2&&Yu({type:"pause"}),xa()}function kl(){Ot===1&&!Qs||Zt||jt||(nM(),ui(),Ot===0&&Xu({type:"pause"}),Ot===2&&Yu({type:"pause"}),Zt=jt=!0,ue("world").inert=!0,ue("firstLayer").inert=!0,ue("thirdLayer").inert=!0,ue("mapLayer").inert=!1,ue("mapLayer").tabIndex=0,ue("mapLayer").setAttribute("aria-hidden","false"),Lu(Wp()),ue("shell").classList.add("map-open"),xa(),Hn("map-open",{level:Ot+1}),clearTimeout(Bl),Bl=setTimeout(()=>{jt=!1,ue("shell").classList.add("map-settled"),ue("mapLayer").focus(),Lu({type:"focus"})},pn?180:1250))}function Du(n,e=Ot){!Zt||jt||!Number.isInteger(e)||e<0||e>2||(jt=!0,Hl(e),e===0?Xp(n==="play"):e===2?qp(n==="play"):rm().then(()=>{n==="play"&&!bn&&!Zt&&!jt&&zl()}).catch(()=>{}),ue("shell").classList.remove("map-open","map-settled"),ue("mapLayer").inert=!0,ue("mapLayer").tabIndex=-1,ue("mapLayer").setAttribute("aria-hidden","true"),ue("shell").focus({preventScroll:!0}),clearTimeout(Bl),Bl=setTimeout(()=>{Zt=jt=!1,Hl(e),ui(),ds=performance.now(),bi=0,e===0?qu():e===2?Zu():!bn&&n==="play"?zl():bn?ue("sea").focus({preventScroll:!0}):ue("start").focus({preventScroll:!0}),xa(),Hn("map-close",{level:e+1})},pn?180:1250))}addEventListener("message",n=>{let e=n.data;if(n.source===ue("firstLayer").contentWindow&&e?.source==="loopie-first"){e.type==="ready"?(ku=!0,da=!!e.started,qu()):e.type==="back"&&Ot===0&&(da=!!e.started,kl());return}if(n.source===ue("thirdLayer").contentWindow&&e?.source==="loopie-third"){e.type==="ready"?(Vu=!0,fa=!!e.started,Zu()):e.type==="back"&&Ot===2&&(fa=!!e.started,kl());return}n.source!==ue("mapLayer").contentWindow||e?.source!=="loopie-map"||(e.island&&(ue("shell").style.setProperty("--island-x",gs(e.island.x,0,1)*100+"%"),ue("shell").style.setProperty("--island-y",gs(e.island.y,0,1)*100+"%")),e.type==="ready"&&Zt?Lu(Wp()):e.type==="play"?Du("play",e.level):e.type==="back"&&Du(e.via))});function iM(n){if(!Qs||Cn||Zt||jt)return;let e=Bn[n];e&&(ui(),Pp(e.x,e.y,e.z),Zn.set(0,0,0),mt=Rn=e.h,qs=Yn=!1,di(0,!0),Ei(),bn||zl(),document.querySelectorAll("[data-sample]").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.sample===n))),Hn("sample-view",{name:n}),ue("sea").focus({preventScroll:!0}))}document.querySelectorAll("[data-sample]").forEach(n=>n.addEventListener("click",()=>iM(n.dataset.sample)));ue("start").addEventListener("click",zl);ue("mapBtn").addEventListener("click",kl);ue("viewBtn").addEventListener("click",Bp);ue("soundBtn").addEventListener("click",()=>{hi=!hi,ue("soundBtn").textContent=hi?"\u58F0\u97F3\uFF1A\u5F00":"\u58F0\u97F3\uFF1A\u5173",ue("soundBtn").setAttribute("aria-pressed",String(hi)),hi&&bn?Gp():xa()});addEventListener("keydown",n=>{if(n.code==="KeyC"&&Ot===1&&bn&&!Cn&&!Zt&&!jt){n.preventDefault(),n.repeat||Bp();return}if(n.code==="Escape"){if(n.repeat)return;Zt?Du("esc"):kl(),n.preventDefault();return}["KeyW","KeyS","KeyA","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight"].includes(n.code)&&Ot===1&&bn&&!Cn&&!Zt&&!jt&&!n.ctrlKey&&!n.metaKey&&!n.altKey&&!n.isComposing&&(n.preventDefault(),n.repeat||Op(n.code))});addEventListener("keyup",n=>zp(n.code));addEventListener("blur",ui);document.querySelectorAll("[data-key]").forEach(n=>{n.addEventListener("pointerdown",e=>{Ot!==1||!bn||Cn||Zt||jt||e.button>0||(e.preventDefault(),n.setPointerCapture(e.pointerId),$v(e.pointerId,n.dataset.key))});for(let e of["pointerup","pointercancel","lostpointercapture"])n.addEventListener(e,t=>Jv(t.pointerId))});addEventListener("visibilitychange",()=>{ui(),ds=performance.now(),bi=0,document.hidden&&Ut?.state==="running"?Ut.suspend():!document.hidden&&hi&&bn&&Ot===1&&Ut?.resume().catch(()=>{})});addEventListener("resize",()=>{Qs&&kp()});addEventListener("pointermove",n=>{bn&&n.clientY>innerHeight-115&&(ue("shell").classList.remove("hide-hint"),clearTimeout(Fl),Fl=setTimeout(()=>ue("shell").classList.add("hide-hint"),1800))});function Xi(){return{ready:Qs,started:bn,paused:Cn,mapOpen:Zt,mapBusy:jt,navigation:{level:Ot+1,firstReady:ku,firstStarted:da,thirdReady:Vu,thirdStarted:fa},input:{keys:[...Js],touch:[...Kr.values()],turn:Wu()},targets:{...Yi},gate:{unlocked:Yr,passed:Iu,position:nn.toArray()},time:qt,player:{x:_e.x+mn.x*220,y:_e.y,z:_e.z+mn.z*260},localPlayer:_e.toArray(),voyage:{...mn},ocean:{period:{...Sn},pool:Jr?.snapshot(),highLife:Dl?.snapshot(),peaks:li.map(n=>({...n,top:at(n.x,n.z)}))},velocity:{x:Zn.x,y:Zn.y,z:Zn.z},heading:mt,region:pa(_e).id,visited:[...Pu],totals:{...ua},bounds:{horizontal:"unbounded",surface:Sn.surface,maximumY:Sn.surface-2},reaction:{...Gu(),pilotImage:!1,visibleBubbles:ut?.userData.reactionBubbles.filter(n=>n.mesh.visible).length,glassOpacity:null},pod:{yaw:ut?.rotation.y,forward:ut?new Ce(0,0,-1).applyQuaternion(ut.quaternion).toArray():null},camera:{x:Ne.position.x+mn.x*220,y:Ne.position.y,z:Ne.position.z+mn.z*260,heading:Rn,mode:$n,fov:Ne.fov,near:Ne.near,direction:Ne.getWorldDirection(new Ce).toArray(),eyeOffset:Ne.position.clone().sub(_e).toArray()},cockpit:Zi?.snapshot(),exteriorAppearance:{opaqueRearHull:!!ut?.userData.rearHull&&!ut.userData.rearHull.material.transparent&&ut.userData.rearHull.material.opacity===1,pilotVisible:!1,rearGlass:!1},exteriorVisible:ut?.visible,counts:{...ms},taken:zn.filter(n=>n.taken).map(n=>n.index),collisions:Up,floor:at(_e.x,_e.z),depth:Number(ue("depth").textContent),audio:{sound:hi,status:Ut?.state||"not-created",musicStarts:Np,music:!!Xs},render:{profile:Hu?"mobile":"desktop",maxPixelRatio:Rp,maxFrameSteps:Cu,pixelRatio:bt?.getPixelRatio(),width:ue("sea").width,height:ue("sea").height,calls:bt?.info.render.calls,triangles:bt?.info.render.triangles,geometries:bt?.info.memory.geometries,textures:bt?.info.memory.textures},events:la.slice(),wildlife:us?.snapshot(),deepSea:Wt?.snapshot(),clearSea:ca?.snapshot()}}Wl===0&&(Hl(0),Xp(!0));Wl===2&&(Hl(2),qp(!0));window.__auditSea={snapshot:Xi};Iv&&Object.assign(window.__auditSea,{advance(n){for(let e=0;e<n-1e-6;e+=1/60)Hp(1/60);return Ei(),Xi()},place(n,e,t,i=0){return qs=!1,Yn=!1,Pp(n,e,t),Zn.set(0,0,0),mt=Rn=i,di(0,!0),Ei(),Xi()},input(n,e){e?Op(n):zp(n)},objects:()=>zn.map(n=>({kind:n.kind,position:n.position.clone().add(Ul()).toArray(),taken:n.taken,index:n.index})),rocks:()=>Yt.map(n=>({...n,x:n.x+mn.x*220,z:n.z+mn.z*260})),floor:at,render:Ei,loopTerrain:()=>({period:Sn,peaks:li.map(n=>({...n,top:at(n.x,n.z)}))}),hullTerrain:()=>{Je.updateMatrixWorld(!0);let n=1/0,e=0,t=new Ce;return ut.traverse(i=>{if(!i.isMesh||i.material.blending===oi)return;let s=i.geometry.attributes.position;for(let r=0;r<s.count;r++)t.fromBufferAttribute(s,r).applyMatrix4(i.matrixWorld),n=Math.min(n,t.y-at(t.x,t.z)),e++}),{minGap:n,vertices:e}},loopDepthMaterials:()=>{let n=0,e=0;return Je.traverse(t=>{t.customDepthMaterial&&(n++,t.customDepthMaterial.onBeforeCompile.toString().includes("uAlienTime")&&e++)}),{total:n,matched:e}},loopLights:()=>{let n=[];return Je.updateMatrixWorld(!0),Je.traverse(e=>{e.name==="customs-warm-beacon"&&n.push({position:e.getWorldPosition(new Ce).toArray(),visible:e.visible,distance:e.distance})}),n},loopPickups:()=>{let n=[];return Je.traverse(e=>{e.userData.loopPickupId!==void 0&&n.push({id:e.userData.loopPickupId,visible:e.visible})}),n},view(n,e=12,t=3){return Yn=!0,Cn=!0,ui(),Ne.position.copy(_e).add(new Ce(0,t,e).applyAxisAngle(new Ce(0,1,0),-mt+n)),Ne.lookAt(_e),Ne.updateMatrixWorld(),Ei(),Xi()},resumeView(){return qs=!1,Yn=!1,Cn=!1,di(0,!0),Ei(),Xi()},project:(n,e,t)=>{let i=new Ce(n,e,t).project(Ne);return{x:(i.x+1)*innerWidth/2,y:(1-i.y)*innerHeight/2,z:i.z}},samples:()=>Il.slice(),audioNodes:()=>({audio:Ut,master:qi,musicBus:Zr,sfxBus:Ol,musicSource:Xs}),wildlifeView(n,e=0,t=0,i=5,s=.6){Yn=!0,Cn=!0,ui(),us.update(pn?0:qt);let r=us.focus(n,e);return Ne.position.copy(r).add(new Ce(0,s,i).applyAxisAngle(new Ce(0,1,0),t)),Ne.lookAt(r),Ne.updateMatrixWorld(),$r(),Xi()},wildlifeAt(n){us.update(n);let e=us.snapshot();return us.update(pn?0:qt),e},wildlifeMeshes(){let n=[];return Je.traverse(e=>{e.name?.startsWith("marine-")&&n.push({name:e.name,type:e.type,isInstanced:!!e.isInstancedMesh,instances:e.count||0})}),n},alienAt:n=>Wt.at(n),alienSafety:()=>Wt.safety(),alienMeshes:()=>Wt.meshes(),alienEnvelopes:()=>Wt.envelopes(),oceanAt:n=>Wt.oceanAt(n),oceanSafety:()=>Wt.oceanSafety(),shadowBounds:()=>Wt.shadowBounds(),oceanEnvelopes:()=>Wt.oceanEnvelopes(),oceanView(n,e,t=0,i=.8,s=6,r=.9){qs=!0,Yn=!0,Cn=!0,ui(),Wt.update({player:_e,heading:mt,time:pn?0:qt});let o=Wt.oceanFocus(n,e,t);return e==="crown"&&(o.y+=.65),Ne.position.copy(o).add(new Ce(0,r,s).applyAxisAngle(new Ce(0,1,0),i)),Ne.lookAt(o),Ne.updateMatrixWorld(),Ei(),Xi()},alienView(n,e=0,t=0,i=7,s=.9){qs=!0,Yn=!0,Cn=!0,ui(),Wt.update({player:_e,heading:mt,time:pn?0:qt});let r=Wt.focus(n,e);return n==="crown"&&(r.y+=.65),Ne.position.copy(r).add(new Ce(0,s,i).applyAxisAngle(new Ce(0,1,0),t)),Ne.lookAt(r),Ne.updateMatrixWorld(),ut.visible=!1,$s.visible=!1,bt.info.reset(),$r(),Xi()},headlightTest(n){return Wt.lightTest(n),bt.info.reset(),$r(),$n==="cockpit"&&!Yn&&Zi.render(),Xi()},lightCensus:(n=10,e=12,t=[2,10,30,70,120])=>cM(n,e,t),warmReport:()=>$u,slotReport:()=>({slots:js,sources:_a.length,peak:Bu,overflow:jp,active:Ws.length})});var $u=null;var ha=0,Yp=0,hs=0,Zp=0,Tu=0,$p=0,Uu=0,Vl=0,Ap=-1;function Ys(n,e,t){let i=ue("dive");if(!i)return;i.dataset.step=n;let s=performance.now();ha=Math.max(ha,e),Yp=Math.max(ha,t??Math.min(e+.08,.97)),Zp=s,n==="done"&&($p=s,Uu=hs),Vl||(Vl=requestAnimationFrame(Jp))}function Jp(){let n=ue("dive");if(Vl=0,!n)return;let e=performance.now();if(n.dataset.step==="done"){let i=Math.min(1,(e-$p)/200);hs=Uu+(1-Uu)*(1-(1-i)*(1-i))}else{let i=ha+(Yp-ha)*(1-Math.exp(-(e-Zp)/800)),s=Tu?e-Tu:16;hs+=(Math.max(i,hs)-hs)*(1-Math.exp(-s/90))}Tu=e,n.style.setProperty("--dive",hs.toFixed(4));let t=Math.floor(hs*100+1e-6);if(t!==Ap){Ap=t;let i=ue("divePct");i&&(i.textContent=t+"%");let s=n.querySelector("[role=progressbar]");s&&s.setAttribute("aria-valuenow",t)}hs<1?Vl=requestAnimationFrame(Jp):n.dataset.full="1"}var Nu=()=>new Promise(n=>setTimeout(n,0)),Kp=new URLSearchParams(location.search),js=+(Kp.get("slots")??12),_a=[],Fu=[],Ws=[],jp=0,Bu=0;function sM(){if(js){Je.traverse(n=>{n.isPointLight&&_a.push(n)});for(let n=0;n<js;n++){let e=new ri("#000000",0,1,2);e.name="light-slot-"+n,Je.add(e),Fu.push(e)}}}function Ou(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}var Au=new Ce,rM=new Ce,oM=new Ce;function Qp(){if(js){Ws.length=0;for(let n of _a)Ou(n)&&n.intensity>0&&Ws.push(n),n.userData.slotVisible=n.visible,n.visible=!1;Bu=Math.max(Bu,Ws.length),Ws.length>js&&(jp++,Ne.getWorldPosition(Au),Ws.sort((n,e)=>n.getWorldPosition(rM).distanceToSquared(Au)-e.getWorldPosition(oM).distanceToSquared(Au)));for(let n=0;n<Fu.length;n++){let e=Fu[n],t=Ws[n];t?(t.getWorldPosition(e.position),e.color.copy(t.color),e.intensity=t.intensity,e.distance=t.distance,e.decay=t.decay):e.intensity=0}}}function $r(){Qp(),bt.render(Je,Ne),em()}function em(){if(js)for(let n of _a)n.visible=n.userData.slotVisible}function tm(){let n=null;return Je.traverse(e=>{e.isSpotLight&&(n=e)}),n}function aM(){let n=0;for(let t of _a)Ou(t)&&t.intensity>0&&n++;let e=tm();return[n,e&&Ou(e)?1:0]}function nm(){return{player:_e.clone(),voyage:{...mn},heading:mt,cameraHeading:Rn,cameraMode:$n,pos:Ne.position.clone(),quat:Ne.quaternion.clone(),target:fs.clone(),desired:ps.clone()}}function Ju(n){$n=n;let e=n==="cockpit";Ne.fov=e?68:57,Ne.near=e?.06:.2,Ne.updateProjectionMatrix(),ut.visible=!e}function im(n){_e.copy(n.player),Object.assign(mn,n.voyage),mt=n.heading,Rn=n.cameraHeading,Ju(n.cameraMode),Ne.position.copy(n.pos),Ne.quaternion.copy(n.quat),fs.copy(n.target),ps.copy(n.desired),Ne.updateMatrixWorld()}function cM(n,e,t){let i=nm(),s=[];Je.traverse(c=>s.push([c,c.visible]));let r={},o=performance.now(),a=0;for(let c of["external","cockpit"]){Ju(c);for(let l=-110;l<110;l+=n)for(let h=-179;h<81;h+=n){let u=at(l,h);for(let f of t){let d=Math.min(u+f,Sn.surface-2);if(!(d<u+1)){_e.set(l,d,h),Wt.update({player:_e,heading:mt,time:0});for(let p=0;p<e;p++){mt=Rn=p*Math.PI*2/e,di(0,!0),Jr.update(Ne,Je.fog.far);let[x,g]=aM(),m=c+":"+x+":"+g;r[m]=(r[m]||0)+1,a++}}}}}for(let[c,l]of s)c.visible=l;return im(i),Wt.update({player:_e,heading:mt,time:0}),di(0,!0),{samples:a,ms:performance.now()-o,combos:r}}var lM=Kp.get("warm")!=="0";async function hM(){let n=performance.now(),e={slots:js,programsBefore:bt.info.programs.length,combos:[]};Ne.aspect=innerWidth/innerHeight,Ne.updateProjectionMatrix(),bt.setSize(innerWidth,innerHeight,!1);let t=nm(),i=[];Je.traverse(o=>i.push([o,o.visible,o.frustumCulled]));let s=tm(),r=s.shadow.autoUpdate;try{for(let[c,l]of[0,1].entries()){let h=performance.now();s.visible=!!l,Qp(),await bt.compileAsync(Je,Ne),em(),e.combos.push({s:l,ms:Math.round(performance.now()-h),programs:bt.info.programs.length}),Ys("light",.6+.1*(c+1))}Ys("shadow",.86),await Nu();let o=performance.now();Je.traverse(c=>{c.visible=!0,c.frustumCulled=!1}),s.shadow.autoUpdate=!0,$r(),e.fullFrameMs=Math.round(performance.now()-o);for(let[c,l,h]of i)c.visible=l,c.frustumCulled=h;Ys("cockpit",.92),await Nu();let a=performance.now();Ju("cockpit"),di(0,!0),Jr.update(Ne,Je.fog.far),Zi.update({time:0,y:_e.y,heading:mt,velocity:Zn,surface:Sn.surface}),$r(),Zi.render();for(let c of bt.info.programs)c.getUniforms(),c.getAttributes();e.cockpitMs=Math.round(performance.now()-a)}finally{for(let[o,a,c]of i)o.visible=a,o.frustumCulled=c;s.shadow.autoUpdate=r,im(t),di(0,!0),Jr.update(Ne,Je.fog.far)}return e.programsAfter=bt.info.programs.length,e.ms=Math.round(performance.now()-n),$u=e,e}var Gl=null,Cl=null;function sm(){if(Ut)return;Ut=new(window.AudioContext||window.webkitAudioContext),qi=Ut.createGain(),qi.gain.value=.65;let n=Ut.createDynamicsCompressor();n.threshold.value=-12,n.ratio.value=5,qi.connect(n),n.connect(Ut.destination),Zr=Ut.createGain(),Zr.gain.value=.48,Zr.connect(qi),Ol=Ut.createGain(),Ol.connect(qi)}function zu(){return Cl||(Cl=(async()=>{let n=await fetch(Ru.music);if(!n.ok)throw new Error("Music HTTP "+n.status);let e=await n.arrayBuffer();return sm(),Gl=await Ut.decodeAudioData(e),Gl})().catch(n=>(console.warn("Music prefetch failed",n),Cl=null,null))),Cl}var oa;function rm(){return oa||(oa=(async()=>{try{ue("sea").classList.add("warming"),Ys("assets",.04,.55),zu(),bt=new Sl({canvas:ue("sea"),antialias:!0,alpha:!1,powerPreference:"high-performance"}),bt.info.autoReset=!1,bt.setPixelRatio(Math.min(devicePixelRatio,Rp)),bt.outputColorSpace=Rt,bt.toneMapping=Lc,bt.toneMappingExposure=1.05;let n=new Vo;await Promise.all(Object.entries(Ru).filter(([e])=>e!=="music").map(async([e,t])=>{let i=await n.loadAsync(t);i.colorSpace=Rt,i.anisotropy=Math.min(4,bt.capabilities.getMaxAnisotropy()),On[e]=i})),ue("shellIcon").src=Ru.shell,Vv(),Fv(),Bv(),Ov(),Gv(),zv(),Wv(),Xv(),Lv(),Ne.fov=57,Ne.near=.2,Ne.updateProjectionMatrix(),Zi=op(bt,Ne,On.hull),Dl=dp(Je,at,On.rock),Dl.update(0),ca=vp(Je,{floor:at,rocks:Yt}),ca.patchScene(ut),Wt=yp(Je,bt,{floor:at,rocks:Yt,objects:zn,pod:ut}),ca.patchFog(ut);for(let e of zn)e.body.userData.loopPickupId=e.glow.userData.loopPickupId=e.index;if(Jr=fp(Je,{pod:ut,shadow:$s,objects:zn,rocks:Yt,player:_e}),sM(),Wt.trackShadows(),di(0,!0),Ys("assets",.6),await Nu(),lM)try{await hM()}catch(e){console.warn("Warm-up skipped",e),$u={error:String(e?.message||e)}}Gl||(Ys("sound",.95),await Promise.race([zu(),new Promise(e=>setTimeout(e,2500))])),Qs=!0,kp(),Ys("done",1),ue("sea").classList.remove("warming"),ue("start").textContent="\u5F00\u59CB\u63A2\u7D22",ue("start").disabled=!1,requestAnimationFrame(Vp),ue("sea").addEventListener("webglcontextlost",e=>{e.preventDefault(),ui(),Cn=!0,Sp(new Error("\u56FE\u5F62\u4E0A\u4E0B\u6587\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u9875\u9762"))})}catch(n){throw oa=null,Sp(n),n}})(),oa)}Wl===1&&rm().catch(()=>{});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
