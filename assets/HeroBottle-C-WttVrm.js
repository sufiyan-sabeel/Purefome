import{A as e,B as t,C as n,D as r,E as i,F as a,G as o,H as s,I as c,J as l,K as u,L as d,M as f,N as p,O as m,P as h,R as g,S as _,T as v,U as y,V as b,W as x,_ as S,a as C,b as w,c as T,d as E,f as D,g as O,h as k,i as A,j as ee,k as j,l as te,m as ne,n as M,o as N,p as re,q as P,r as ie,s as ae,t as oe,u as F,v as I,w as se,x as ce,y as L,z as R}from"./index-eHuEFxUn.js";function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z.apply(null,arguments)}var le=parseInt(`185`.replace(/\D+/g,``)),B=Uint8Array,V=Uint16Array,H=Uint32Array,ue=new B([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),de=new B([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),fe=new B([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),U=function(e,t){for(var n=new V(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new H(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return[n,i]},W=U(ue,2),pe=W[0],G=W[1];pe[28]=258,G[258]=28;var K=U(de,0),q=K[0];K[1];for(var me=new V(32768),J=0;J<32768;++J){var Y=(J&43690)>>>1|(J&21845)<<1;Y=(Y&52428)>>>2|(Y&13107)<<2,Y=(Y&61680)>>>4|(Y&3855)<<4,me[J]=((Y&65280)>>>8|(Y&255)<<8)>>>1}for(var he=(function(e,t,n){for(var r=e.length,i=0,a=new V(t);i<r;++i)++a[e[i]-1];var o=new V(t);for(i=0;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new V(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[me[d]>>>c]=l}else for(s=new V(r),i=0;i<r;++i)e[i]&&(s[i]=me[o[e[i]-1]++]>>>15-e[i]);return s}),ge=new B(288),J=0;J<144;++J)ge[J]=8;for(var J=144;J<256;++J)ge[J]=9;for(var J=256;J<280;++J)ge[J]=7;for(var J=280;J<288;++J)ge[J]=8;for(var _e=new B(32),J=0;J<32;++J)_e[J]=5;var ve=he(ge,9,1),ye=he(_e,5,1),be=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},X=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},xe=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},Se=function(e){return(e/8|0)+(e&7&&1)},Ce=function(e,t,n){(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length);var r=new(e instanceof V?V:e instanceof H?H:B)(n-t);return r.set(e.subarray(t,n)),r},we=function(e,t,n){var r=e.length;if(!r||n&&!n.l&&r<5)return t||new B(0);var i=!t||n,a=!n||n.i;n||={},t||=new B(r*3);var o=function(e){var n=t.length;if(e>n){var r=new B(Math.max(n*2,e));r.set(t),t=r}},s=n.f||0,c=n.p||0,l=n.b||0,u=n.l,d=n.d,f=n.m,p=n.n,m=r*8;do{if(!u){n.f=s=X(e,c,1);var h=X(e,c+1,3);if(c+=3,!h){var g=Se(c)+4,_=e[g-4]|e[g-3]<<8,v=g+_;if(v>r){if(a)throw`unexpected EOF`;break}i&&o(l+_),t.set(e.subarray(g,v),l),n.b=l+=_,n.p=c=v*8;continue}if(h==1)u=ve,d=ye,f=9,p=5;else if(h==2){var y=X(e,c,31)+257,b=X(e,c+10,15)+4,x=y+X(e,c+5,31)+1;c+=14;for(var S=new B(x),C=new B(19),w=0;w<b;++w)C[fe[w]]=X(e,c+w*3,7);c+=b*3;for(var T=be(C),E=(1<<T)-1,D=he(C,T,1),w=0;w<x;){var O=D[X(e,c,E)];c+=O&15;var g=O>>>4;if(g<16)S[w++]=g;else{var k=0,A=0;for(g==16?(A=3+X(e,c,3),c+=2,k=S[w-1]):g==17?(A=3+X(e,c,7),c+=3):g==18&&(A=11+X(e,c,127),c+=7);A--;)S[w++]=k}}var ee=S.subarray(0,y),j=S.subarray(y);f=be(ee),p=be(j),u=he(ee,f,1),d=he(j,p,1)}else throw`invalid block type`;if(c>m){if(a)throw`unexpected EOF`;break}}i&&o(l+131072);for(var te=(1<<f)-1,ne=(1<<p)-1,M=c;;M=c){var k=u[xe(e,c)&te],N=k>>>4;if(c+=k&15,c>m){if(a)throw`unexpected EOF`;break}if(!k)throw`invalid length/literal`;if(N<256)t[l++]=N;else if(N==256){M=c,u=null;break}else{var re=N-254;if(N>264){var w=N-257,P=ue[w];re=X(e,c,(1<<P)-1)+pe[w],c+=P}var ie=d[xe(e,c)&ne],ae=ie>>>4;if(!ie)throw`invalid distance`;c+=ie&15;var j=q[ae];if(ae>3){var P=de[ae];j+=xe(e,c)&(1<<P)-1,c+=P}if(c>m){if(a)throw`unexpected EOF`;break}i&&o(l+131072);for(var oe=l+re;l<oe;l+=4)t[l]=t[l-j],t[l+1]=t[l+1-j],t[l+2]=t[l+2-j],t[l+3]=t[l+3-j];l=oe}}n.l=u,n.p=M,n.b=l,u&&(s=1,n.m=f,n.d=d,n.n=p)}while(!s);return l==t.length?t:Ce(t,0,l)},Te=new B(0),Ee=function(e){if((e[0]&15)!=8||e[0]>>>4>7||(e[0]<<8|e[1])%31)throw`invalid zlib data`;if(e[1]&32)throw`invalid zlib data: preset dictionaries not supported`};function De(e,t){return we((Ee(e),e.subarray(2,-4)),t)}var Oe=typeof TextDecoder<`u`&&new TextDecoder;try{Oe.decode(Te,{stream:!0})}catch{}var ke=e=>e&&e.isCubeTexture,Z=class extends m{constructor(e,t){let n=ke(e),r=((n?e.image[0]?.width:e.image.width)??1024)/4,i=Math.floor(Math.log2(r)),a=2**i,o=3*Math.max(a,112),s=4*a,c=[n?`#define ENVMAP_TYPE_CUBE`:``,`#define CUBEUV_TEXEL_WIDTH ${1/o}`,`#define CUBEUV_TEXEL_HEIGHT ${1/s}`,`#define CUBEUV_MAX_MIP ${i}.0`].join(`
`)+`
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${le>=154?`colorspace_fragment`:`encodings_fragment`}>
        }
        `,l={map:{value:e},height:{value:t?.height||15},radius:{value:t?.radius||100}},u=new w(1,16),f=new d({uniforms:l,fragmentShader:c,vertexShader:`
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `,side:2});super(u,f)}set radius(e){this.material.uniforms.radius.value=e}get radius(){return this.material.uniforms.radius.value}set height(e){this.material.uniforms.height.value=e}get height(){return this.material.uniforms.height.value}},Ae=class extends ne{constructor(e){super(e),this.type=L}parse(e){let t=function(e,t){switch(e){case 1:throw Error(`THREE.RGBELoader: Read Error: `+(t||``));case 2:throw Error(`THREE.RGBELoader: Write Error: `+(t||``));case 3:throw Error(`THREE.RGBELoader: Bad File Format: `+(t||``));default:case 4:throw Error(`THREE.RGBELoader: Memory Error: `+(t||``))}},n=function(e,t,n){t||=1024;let r=e.pos,i=-1,a=0,o=``,s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));for(;0>(i=s.indexOf(`
`))&&a<t&&r<e.byteLength;)o+=s,a+=s.length,r+=128,s+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));return-1<i&&(!1!==n&&(e.pos+=a+i+1),o+s.slice(0,i))},r=function(e){let r=/^#\?(\S+)/,i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*FORMAT=(\S+)\s*$/,s=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,c={valid:0,string:``,comments:``,programtype:`RGBE`,format:``,gamma:1,exposure:1,width:0,height:0},l,u;for((e.pos>=e.byteLength||!(l=n(e)))&&t(1,`no header found`),(u=l.match(r))||t(3,`bad initial token`),c.valid|=1,c.programtype=u[1],c.string+=l+`
`;l=n(e),!1!==l;){if(c.string+=l+`
`,l.charAt(0)===`#`){c.comments+=l+`
`;continue}if((u=l.match(i))&&(c.gamma=parseFloat(u[1])),(u=l.match(a))&&(c.exposure=parseFloat(u[1])),(u=l.match(o))&&(c.valid|=2,c.format=u[1]),(u=l.match(s))&&(c.valid|=4,c.height=parseInt(u[1],10),c.width=parseInt(u[2],10)),c.valid&2&&c.valid&4)break}return c.valid&2||t(3,`missing format specifier`),c.valid&4||t(3,`missing image size specifier`),c},i=function(e,n,r){let i=n;if(i<8||i>32767||e[0]!==2||e[1]!==2||e[2]&128)return new Uint8Array(e);i!==(e[2]<<8|e[3])&&t(3,`wrong scanline width`);let a=new Uint8Array(4*n*r);a.length||t(4,`unable to allocate buffer space`);let o=0,s=0,c=4*i,l=new Uint8Array(4),u=new Uint8Array(c),d=r;for(;d>0&&s<e.byteLength;){s+4>e.byteLength&&t(1),l[0]=e[s++],l[1]=e[s++],l[2]=e[s++],l[3]=e[s++],(l[0]!=2||l[1]!=2||(l[2]<<8|l[3])!=i)&&t(3,`bad rgbe scanline format`);let n=0,r;for(;n<c&&s<e.byteLength;){r=e[s++];let i=r>128;if(i&&(r-=128),(r===0||n+r>c)&&t(3,`bad scanline data`),i){let t=e[s++];for(let e=0;e<r;e++)u[n++]=t}else u.set(e.subarray(s,s+r),n),n+=r,s+=r}let f=i;for(let e=0;e<f;e++){let t=0;a[o]=u[e+t],t+=i,a[o+1]=u[e+t],t+=i,a[o+2]=u[e+t],t+=i,a[o+3]=u[e+t],o+=4}d--}return a},a=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=e[t+0]*i,n[r+1]=e[t+1]*i,n[r+2]=e[t+2]*i,n[r+3]=1},o=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=k.toHalfFloat(Math.min(e[t+0]*i,65504)),n[r+1]=k.toHalfFloat(Math.min(e[t+1]*i,65504)),n[r+2]=k.toHalfFloat(Math.min(e[t+2]*i,65504)),n[r+3]=k.toHalfFloat(1)},s=new Uint8Array(e);s.pos=0;let c=r(s),l=c.width,u=c.height,d=i(s.subarray(s.pos),l,u),f,p,m;switch(this.type){case I:m=d.length/4;let e=new Float32Array(m*4);for(let t=0;t<m;t++)a(d,t*4,e,t*4);f=e,p=I;break;case L:m=d.length/4;let t=new Uint16Array(m*4);for(let e=0;e<m;e++)o(d,e*4,t,e*4);f=t,p=L;break;default:throw Error(`THREE.RGBELoader: Unsupported type: `+this.type)}return{width:l,height:u,data:f,header:c.string,gamma:c.gamma,exposure:c.exposure,type:p}}setDataType(e){return this.type=e,this}load(e,t,n,r){function i(e,n){switch(e.type){case I:case L:`colorSpace`in e?e.colorSpace=`srgb-linear`:e.encoding=3e3,e.minFilter=_,e.magFilter=_,e.generateMipmaps=!1,e.flipY=!0}t&&t(e,n)}return super.load(e,i,n,r)}},je=le>=152,Me=class extends ne{constructor(e){super(e),this.type=L}parse(e){let t=65536,n=8192,r=65537,i=16384,a=16383,o=65535,s=2.7182818**2.2;function c(e,n){for(var r=0,i=0;i<t;++i)(i==0||e[i>>3]&1<<(i&7))&&(n[r++]=i);for(var a=r-1;r<t;)n[r++]=0;return a}function l(e){for(var t=0;t<i;t++)e[t]={},e[t].len=0,e[t].lit=0,e[t].p=null}let u={l:0,c:0,lc:0};function d(e,t,n,r,i){for(;n<e;)t=t<<8|pe(r,i),n+=8;n-=e,u.l=t>>n&(1<<e)-1,u.c=t,u.lc=n}let f=Array(59);function m(e){for(var t=0;t<=58;++t)f[t]=0;for(var t=0;t<r;++t)f[e[t]]+=1;for(var n=0,t=58;t>0;--t){var i=n+f[t]>>1;f[t]=n,n=i}for(var t=0;t<r;++t){var a=e[t];a>0&&(e[t]=a|f[a]++<<6)}}function g(e,t,n,r,i,a,o){for(var s=n,c=0,l=0;i<=a;i++){if(s.value-n.value>r)return!1;d(6,c,l,e,s);var f=u.l;if(c=u.c,l=u.lc,o[i]=f,f==63){if(s.value-n.value>r)throw`Something wrong with hufUnpackEncTable`;d(8,c,l,e,s);var p=u.l+6;if(c=u.c,l=u.lc,i+p>a+1)throw`Something wrong with hufUnpackEncTable`;for(;p--;)o[i++]=0;i--}else if(f>=59){var p=f-59+2;if(i+p>a+1)throw`Something wrong with hufUnpackEncTable`;for(;p--;)o[i++]=0;i--}}m(o)}function _(e){return e&63}function v(e){return e>>6}function y(e,t,n,r){for(;t<=n;t++){var i=v(e[t]),a=_(e[t]);if(i>>a)throw`Invalid table entry`;if(a>14){var o=r[i>>a-14];if(o.len)throw`Invalid table entry`;if(o.lit++,o.p){var s=o.p;o.p=Array(o.lit);for(var c=0;c<o.lit-1;++c)o.p[c]=s[c]}else o.p=[,];o.p[o.lit-1]=t}else if(a)for(var l=0,c=1<<14-a;c>0;c--){var o=r[(i<<14-a)+l];if(o.len||o.p)throw`Invalid table entry`;o.len=a,o.lit=t,l++}}return!0}let b={c:0,lc:0};function x(e,t,n,r){e=e<<8|pe(n,r),t+=8,b.c=e,b.lc=t}let S={c:0,lc:0};function C(e,t,n,r,i,a,o,s,c,l){if(e==t){r<8&&(x(n,r,i,o),n=b.c,r=b.lc),r-=8;var u=n>>r,u=new Uint8Array([u])[0];if(c.value+u>l)return!1;for(var d=s[c.value-1];u-->0;)s[c.value++]=d}else if(c.value<l)s[c.value++]=e;else return!1;S.c=n,S.lc=r}function w(e){return e&65535}function T(e){var t=w(e);return t>32767?t-65536:t}let E={a:0,b:0};function D(e,t){var n=T(e),r=T(t),i=n+(r&1)+(r>>1),a=i,o=i-r;E.a=a,E.b=o}function O(e,t){var n=w(e),r=w(t),i=n-(r>>1)&o,a=r+i-32768&o;E.a=a,E.b=i}function A(e,t,n,r,i,a,o){for(var s=o<16384,c=n>i?i:n,l=1,u;l<=c;)l<<=1;for(l>>=1,u=l,l>>=1;l>=1;){for(var d=0,f=d+a*(i-u),p=a*l,m=a*u,h=r*l,g=r*u,_,v,y,b;d<=f;d+=m){for(var x=d,S=d+r*(n-u);x<=S;x+=g){var C=x+h,w=x+p,T=w+h;s?(D(e[x+t],e[w+t]),_=E.a,y=E.b,D(e[C+t],e[T+t]),v=E.a,b=E.b,D(_,v),e[x+t]=E.a,e[C+t]=E.b,D(y,b),e[w+t]=E.a,e[T+t]=E.b):(O(e[x+t],e[w+t]),_=E.a,y=E.b,O(e[C+t],e[T+t]),v=E.a,b=E.b,O(_,v),e[x+t]=E.a,e[C+t]=E.b,O(y,b),e[w+t]=E.a,e[T+t]=E.b)}if(n&l){var w=x+p;s?D(e[x+t],e[w+t]):O(e[x+t],e[w+t]),_=E.a,e[w+t]=E.b,e[x+t]=_}}if(i&l)for(var x=d,S=d+r*(n-u);x<=S;x+=g){var C=x+h;s?D(e[x+t],e[C+t]):O(e[x+t],e[C+t]),_=E.a,e[C+t]=E.b,e[x+t]=_}u=l,l>>=1}return d}function ee(e,t,n,r,i,o,s,c,l,u){for(var d=0,f=0,p=c,m=Math.trunc(i.value+(o+7)/8);i.value<m;)for(x(d,f,n,i),d=b.c,f=b.lc;f>=14;){var h=t[d>>f-14&a];if(h.len)f-=h.len,C(h.lit,s,d,f,n,r,i,l,u,p),d=S.c,f=S.lc;else{if(!h.p)throw`hufDecode issues`;var g;for(g=0;g<h.lit;g++){for(var y=_(e[h.p[g]]);f<y&&i.value<m;)x(d,f,n,i),d=b.c,f=b.lc;if(f>=y&&v(e[h.p[g]])==(d>>f-y&(1<<y)-1)){f-=y,C(h.p[g],s,d,f,n,r,i,l,u,p),d=S.c,f=S.lc;break}}if(g==h.lit)throw`hufDecode issues`}}var w=8-o&7;for(d>>=w,f-=w;f>0;){var h=t[d<<14-f&a];if(h.len)f-=h.len,C(h.lit,s,d,f,n,r,i,l,u,p),d=S.c,f=S.lc;else throw`hufDecode issues`}return!0}function j(e,t,n,a,o,s){var c={value:0},u=n.value,d=W(t,n),f=W(t,n);n.value+=4;var p=W(t,n);if(n.value+=4,d<0||d>=r||f<0||f>=r)throw`Something wrong with HUF_ENCSIZE`;var m=Array(r),h=Array(i);if(l(h),g(e,t,n,a-(n.value-u),d,f,m),p>8*(a-(n.value-u)))throw`Something wrong with hufUncompress`;y(m,d,f,h),ee(m,h,e,t,n,p,f,s,o,c)}function te(e,t,n){for(var r=0;r<n;++r)t[r]=e[t[r]]}function ne(e){for(var t=1;t<e.length;t++){var n=e[t-1]+e[t]-128;e[t]=n}}function M(e,t){for(var n=0,r=Math.floor((e.length+1)/2),i=0,a=e.length-1;!(i>a||(t[i++]=e[n++],i>a));)t[i++]=e[r++]}function N(e){for(var t=e.byteLength,n=[],r=0,i=new DataView(e);t>0;){var a=i.getInt8(r++);if(a<0){var o=-a;t-=o+1;for(var s=0;s<o;s++)n.push(i.getUint8(r++))}else{var o=a;t-=2;for(var c=i.getUint8(r++),s=0;s<o+1;s++)n.push(c)}}return n}function re(e,t,n,r,i,a){var o=new DataView(a.buffer),s=n[e.idx[0]].width,c=n[e.idx[0]].height,l=3,u=Math.floor(s/8),d=Math.ceil(s/8),f=Math.ceil(c/8),p=s-(d-1)*8,m=c-(f-1)*8,h={value:0},g=Array(l),_=Array(l),v=Array(l),y=Array(l),b=Array(l);for(let n=0;n<l;++n)b[n]=t[e.idx[n]],g[n]=n<1?0:g[n-1]+d*f,_[n]=new Float32Array(64),v[n]=new Uint16Array(64),y[n]=new Uint16Array(d*64);for(let t=0;t<f;++t){var x=8;t==f-1&&(x=m);var S=8;for(let e=0;e<d;++e){e==d-1&&(S=p);for(let e=0;e<l;++e)v[e].fill(0),v[e][0]=i[g[e]++],P(h,r,v[e]),ie(v[e],_[e]),ae(_[e]);oe(_);for(let t=0;t<l;++t)F(_[t],y[t],e*64)}let a=0;for(let r=0;r<l;++r){let i=n[e.idx[r]].type;for(let e=8*t;e<8*t+x;++e){a=b[r][e];for(let t=0;t<u;++t){let n=t*64+(e&7)*8;o.setUint16(a+0*i,y[r][n+0],!0),o.setUint16(a+2*i,y[r][n+1],!0),o.setUint16(a+4*i,y[r][n+2],!0),o.setUint16(a+6*i,y[r][n+3],!0),o.setUint16(a+8*i,y[r][n+4],!0),o.setUint16(a+10*i,y[r][n+5],!0),o.setUint16(a+12*i,y[r][n+6],!0),o.setUint16(a+14*i,y[r][n+7],!0),a+=16*i}}if(u!=d)for(let e=8*t;e<8*t+x;++e){let t=b[r][e]+8*u*2*i,n=u*64+(e&7)*8;for(let e=0;e<S;++e)o.setUint16(t+e*2*i,y[r][n+e],!0)}}}for(var C=new Uint16Array(s),o=new DataView(a.buffer),w=0;w<l;++w){n[e.idx[w]].decoded=!0;var T=n[e.idx[w]].type;if(n[w].type==2)for(var E=0;E<c;++E){let e=b[w][E];for(var D=0;D<s;++D)C[D]=o.getUint16(e+D*2*T,!0);for(var D=0;D<s;++D)o.setFloat32(e+D*2*T,J(C[D]),!0)}}}function P(e,t,n){for(var r,i=1;i<64;)r=t[e.value],r==65280?i=64:r>>8==255?i+=r&255:(n[i]=r,i++),e.value++}function ie(e,t){t[0]=J(e[0]),t[1]=J(e[1]),t[2]=J(e[5]),t[3]=J(e[6]),t[4]=J(e[14]),t[5]=J(e[15]),t[6]=J(e[27]),t[7]=J(e[28]),t[8]=J(e[2]),t[9]=J(e[4]),t[10]=J(e[7]),t[11]=J(e[13]),t[12]=J(e[16]),t[13]=J(e[26]),t[14]=J(e[29]),t[15]=J(e[42]),t[16]=J(e[3]),t[17]=J(e[8]),t[18]=J(e[12]),t[19]=J(e[17]),t[20]=J(e[25]),t[21]=J(e[30]),t[22]=J(e[41]),t[23]=J(e[43]),t[24]=J(e[9]),t[25]=J(e[11]),t[26]=J(e[18]),t[27]=J(e[24]),t[28]=J(e[31]),t[29]=J(e[40]),t[30]=J(e[44]),t[31]=J(e[53]),t[32]=J(e[10]),t[33]=J(e[19]),t[34]=J(e[23]),t[35]=J(e[32]),t[36]=J(e[39]),t[37]=J(e[45]),t[38]=J(e[52]),t[39]=J(e[54]),t[40]=J(e[20]),t[41]=J(e[22]),t[42]=J(e[33]),t[43]=J(e[38]),t[44]=J(e[46]),t[45]=J(e[51]),t[46]=J(e[55]),t[47]=J(e[60]),t[48]=J(e[21]),t[49]=J(e[34]),t[50]=J(e[37]),t[51]=J(e[47]),t[52]=J(e[50]),t[53]=J(e[56]),t[54]=J(e[59]),t[55]=J(e[61]),t[56]=J(e[35]),t[57]=J(e[36]),t[58]=J(e[48]),t[59]=J(e[49]),t[60]=J(e[57]),t[61]=J(e[58]),t[62]=J(e[62]),t[63]=J(e[63])}function ae(e){let t=.5*Math.cos(3.14159/4),n=.5*Math.cos(3.14159/16),r=.5*Math.cos(3.14159/8),i=.5*Math.cos(3*3.14159/16),a=.5*Math.cos(15.70795/16),o=.5*Math.cos(3*3.14159/8),s=.5*Math.cos(21.99113/16);for(var c=[,,,,],l=[,,,,],u=[,,,,],d=[,,,,],f=0;f<8;++f){var p=f*8;c[0]=r*e[p+2],c[1]=o*e[p+2],c[2]=r*e[p+6],c[3]=o*e[p+6],l[0]=n*e[p+1]+i*e[p+3]+a*e[p+5]+s*e[p+7],l[1]=i*e[p+1]-s*e[p+3]-n*e[p+5]-a*e[p+7],l[2]=a*e[p+1]-n*e[p+3]+s*e[p+5]+i*e[p+7],l[3]=s*e[p+1]-a*e[p+3]+i*e[p+5]-n*e[p+7],u[0]=t*(e[p+0]+e[p+4]),u[3]=t*(e[p+0]-e[p+4]),u[1]=c[0]+c[3],u[2]=c[1]-c[2],d[0]=u[0]+u[1],d[1]=u[3]+u[2],d[2]=u[3]-u[2],d[3]=u[0]-u[1],e[p+0]=d[0]+l[0],e[p+1]=d[1]+l[1],e[p+2]=d[2]+l[2],e[p+3]=d[3]+l[3],e[p+4]=d[3]-l[3],e[p+5]=d[2]-l[2],e[p+6]=d[1]-l[1],e[p+7]=d[0]-l[0]}for(var m=0;m<8;++m)c[0]=r*e[16+m],c[1]=o*e[16+m],c[2]=r*e[48+m],c[3]=o*e[48+m],l[0]=n*e[8+m]+i*e[24+m]+a*e[40+m]+s*e[56+m],l[1]=i*e[8+m]-s*e[24+m]-n*e[40+m]-a*e[56+m],l[2]=a*e[8+m]-n*e[24+m]+s*e[40+m]+i*e[56+m],l[3]=s*e[8+m]-a*e[24+m]+i*e[40+m]-n*e[56+m],u[0]=t*(e[m]+e[32+m]),u[3]=t*(e[m]-e[32+m]),u[1]=c[0]+c[3],u[2]=c[1]-c[2],d[0]=u[0]+u[1],d[1]=u[3]+u[2],d[2]=u[3]-u[2],d[3]=u[0]-u[1],e[0+m]=d[0]+l[0],e[8+m]=d[1]+l[1],e[16+m]=d[2]+l[2],e[24+m]=d[3]+l[3],e[32+m]=d[3]-l[3],e[40+m]=d[2]-l[2],e[48+m]=d[1]-l[1],e[56+m]=d[0]-l[0]}function oe(e){for(var t=0;t<64;++t){var n=e[0][t],r=e[1][t],i=e[2][t];e[0][t]=n+1.5747*i,e[1][t]=n-.1873*r-.4682*i,e[2][t]=n+1.8556*r}}function F(e,t,n){for(var r=0;r<64;++r)t[n+r]=k.toHalfFloat(se(e[r]))}function se(e){return e<=1?Math.sign(e)*Math.abs(e)**2.2:Math.sign(e)*s**(Math.abs(e)-1)}function ce(e){return new DataView(e.array.buffer,e.offset.value,e.size)}function R(e){var t=e.viewer.buffer.slice(e.offset.value,e.offset.value+e.size),n=new Uint8Array(N(t)),r=new Uint8Array(n.length);return ne(n),M(n,r),new DataView(r.buffer)}function z(e){var t=De(e.array.slice(e.offset.value,e.offset.value+e.size)),n=new Uint8Array(t.length);return ne(t),M(t,n),new DataView(n.buffer)}function le(e){for(var r=e.viewer,i={value:e.offset.value},a=new Uint16Array(e.width*e.scanlineBlockSize*(e.channels*e.type)),o=new Uint8Array(n),s=0,l=Array(e.channels),u=0;u<e.channels;u++)l[u]={},l[u].start=s,l[u].end=l[u].start,l[u].nx=e.width,l[u].ny=e.lines,l[u].size=e.type,s+=l[u].nx*l[u].ny*l[u].size;var d=Y(r,i),f=Y(r,i);if(f>=n)throw`Something is wrong with PIZ_COMPRESSION BITMAP_SIZE`;if(d<=f)for(var u=0;u<f-d+1;u++)o[u+d]=G(r,i);var p=new Uint16Array(t),m=c(o,p),h=W(r,i);j(e.array,r,i,h,a,s);for(var u=0;u<e.channels;++u)for(var g=l[u],_=0;_<l[u].size;++_)A(a,g.start+_,g.nx,g.size,g.ny,g.nx*g.size,m);te(p,a,s);for(var v=0,y=new Uint8Array(a.buffer.byteLength),b=0;b<e.lines;b++)for(var x=0;x<e.channels;x++){var g=l[x],S=g.nx*g.size,C=new Uint8Array(a.buffer,g.end*2,S*2);y.set(C,v),v+=S*2,g.end+=S}return new DataView(y.buffer)}function B(e){var t=De(e.array.slice(e.offset.value,e.offset.value+e.size));let n=e.lines*e.channels*e.width,r=e.type==1?new Uint16Array(n):new Uint32Array(n),i=0,a=0,o=[,,,,];for(let n=0;n<e.lines;n++)for(let n=0;n<e.channels;n++){let n=0;switch(e.type){case 1:o[0]=i,o[1]=o[0]+e.width,i=o[1]+e.width;for(let i=0;i<e.width;++i){let e=t[o[0]++]<<8|t[o[1]++];n+=e,r[a]=n,a++}break;case 2:o[0]=i,o[1]=o[0]+e.width,o[2]=o[1]+e.width,i=o[2]+e.width;for(let i=0;i<e.width;++i){let e=t[o[0]++]<<24|t[o[1]++]<<16|t[o[2]++]<<8;n+=e,r[a]=n,a++}}}return new DataView(r.buffer)}function V(e){var t=e.viewer,n={value:e.offset.value},r=new Uint8Array(e.width*e.lines*(e.channels*e.type*2)),i={version:K(t,n),unknownUncompressedSize:K(t,n),unknownCompressedSize:K(t,n),acCompressedSize:K(t,n),dcCompressedSize:K(t,n),rleCompressedSize:K(t,n),rleUncompressedSize:K(t,n),rleRawSize:K(t,n),totalAcUncompressedCount:K(t,n),totalDcUncompressedCount:K(t,n),acCompression:K(t,n)};if(i.version<2)throw`EXRLoader.parse: `+ke.compression+` version `+i.version+` is unsupported`;for(var a=[],o=Y(t,n)-2;o>0;){var s=H(t.buffer,n),c=G(t,n),l=c>>2&3,u=(c>>4)-1,d=new Int8Array([u])[0],f=G(t,n);a.push({name:s,index:d,type:f,compression:l}),o-=s.length+3}for(var p=ke.channels,m=Array(e.channels),h=0;h<e.channels;++h){var g=m[h]={},_=p[h];g.name=_.name,g.compression=0,g.decoded=!1,g.type=_.pixelType,g.pLinear=_.pLinear,g.width=e.width,g.height=e.lines}for(var v={idx:[,,,]},y=0;y<e.channels;++y)for(var g=m[y],h=0;h<a.length;++h){var b=a[h];g.name==b.name&&(g.compression=b.compression,b.index>=0&&(v.idx[b.index]=y),g.offset=y)}if(i.acCompressedSize>0)switch(i.acCompression){case 0:var x=new Uint16Array(i.totalAcUncompressedCount);j(e.array,t,n,i.acCompressedSize,x,i.totalAcUncompressedCount);break;case 1:var S=e.array.slice(n.value,n.value+i.totalAcUncompressedCount),C=De(S),x=new Uint16Array(C.buffer);n.value+=i.totalAcUncompressedCount}if(i.dcCompressedSize>0){var w={array:e.array,offset:n,size:i.dcCompressedSize},T=new Uint16Array(z(w).buffer);n.value+=i.dcCompressedSize}if(i.rleRawSize>0){var S=e.array.slice(n.value,n.value+i.rleCompressedSize),C=De(S),E=N(C.buffer);n.value+=i.rleCompressedSize}for(var D=0,O=Array(m.length),h=0;h<O.length;++h)O[h]=[];for(var k=0;k<e.lines;++k)for(var A=0;A<m.length;++A)O[A].push(D),D+=m[A].width*e.type*2;re(v,O,m,x,T,r);for(var h=0;h<m.length;++h){var g=m[h];if(!g.decoded)switch(g.compression){case 2:for(var ee=0,te=0,k=0;k<e.lines;++k){for(var ne=O[h][ee],M=0;M<g.width;++M){for(var P=0;P<2*g.type;++P)r[ne++]=E[te+P*g.width*g.height];te++}ee++}break;default:throw`EXRLoader.parse: unsupported channel compression`}}return new DataView(r.buffer)}function H(e,t){for(var n=new Uint8Array(e),r=0;n[t.value+r]!=0;)r+=1;var i=new TextDecoder().decode(n.slice(t.value,t.value+r));return t.value=t.value+r+1,i}function ue(e,t,n){var r=new TextDecoder().decode(new Uint8Array(e).slice(t.value,t.value+n));return t.value+=n,r}function de(e,t){return[U(e,t),W(e,t)]}function fe(e,t){return[W(e,t),W(e,t)]}function U(e,t){var n=e.getInt32(t.value,!0);return t.value+=4,n}function W(e,t){var n=e.getUint32(t.value,!0);return t.value+=4,n}function pe(e,t){var n=e[t.value];return t.value+=1,n}function G(e,t){var n=e.getUint8(t.value);return t.value+=1,n}let K=function(e,t){let n;return n=`getBigInt64`in DataView.prototype?Number(e.getBigInt64(t.value,!0)):e.getUint32(t.value+4,!0)+Number(e.getUint32(t.value,!0)<<32),t.value+=8,n};function q(e,t){var n=e.getFloat32(t.value,!0);return t.value+=4,n}function me(e,t){return k.toHalfFloat(q(e,t))}function J(e){var t=(e&31744)>>10,n=e&1023;return(e>>15?-1:1)*(t?t===31?n?NaN:1/0:2**(t-15)*(1+n/1024):n/1024*6103515625e-14)}function Y(e,t){var n=e.getUint16(t.value,!0);return t.value+=2,n}function he(e,t){return J(Y(e,t))}function ge(e,t,n,r){for(var i=n.value,a=[];n.value<i+r-1;){var o=H(t,n),s=U(e,n),c=G(e,n);n.value+=3;var l=U(e,n),u=U(e,n);a.push({name:o,pixelType:s,pLinear:c,xSampling:l,ySampling:u})}return n.value+=1,a}function _e(e,t){return{redX:q(e,t),redY:q(e,t),greenX:q(e,t),greenY:q(e,t),blueX:q(e,t),blueY:q(e,t),whiteX:q(e,t),whiteY:q(e,t)}}function ve(e,t){return[`NO_COMPRESSION`,`RLE_COMPRESSION`,`ZIPS_COMPRESSION`,`ZIP_COMPRESSION`,`PIZ_COMPRESSION`,`PXR24_COMPRESSION`,`B44_COMPRESSION`,`B44A_COMPRESSION`,`DWAA_COMPRESSION`,`DWAB_COMPRESSION`][G(e,t)]}function ye(e,t){return{xMin:W(e,t),yMin:W(e,t),xMax:W(e,t),yMax:W(e,t)}}function be(e,t){return[`INCREASING_Y`][G(e,t)]}function X(e,t){return[q(e,t),q(e,t)]}function xe(e,t){return[q(e,t),q(e,t),q(e,t)]}function Se(e,t,n,r,i){if(r===`string`||r===`stringvector`||r===`iccProfile`)return ue(t,n,i);if(r===`chlist`)return ge(e,t,n,i);if(r===`chromaticities`)return _e(e,n);if(r===`compression`)return ve(e,n);if(r===`box2i`)return ye(e,n);if(r===`lineOrder`)return be(e,n);if(r===`float`)return q(e,n);if(r===`v2f`)return X(e,n);if(r===`v3f`)return xe(e,n);if(r===`int`)return U(e,n);if(r===`rational`)return de(e,n);if(r===`timecode`)return fe(e,n);if(r===`preview`)return n.value+=i,`skipped`;n.value+=i}function Ce(e,t,n){let r={};if(e.getUint32(0,!0)!=20000630)throw`THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.`;r.version=e.getUint8(4);let i=e.getUint8(5);r.spec={singleTile:!!(i&2),longName:!!(i&4),deepFormat:!!(i&8),multiPart:!!(i&16)},n.value=8;for(var a=!0;a;){var o=H(t,n);if(o==0)a=!1;else{var s=H(t,n),c=Se(e,t,n,s,W(e,n));c===void 0?console.warn(`EXRLoader.parse: skipped unknown header attribute type '${s}'.`):r[o]=c}}if(i&-5)throw console.error(`EXRHeader:`,r),`THREE.EXRLoader: provided file is currently unsupported.`;return r}function we(e,t,n,r,i){let a={size:0,viewer:t,array:n,offset:r,width:e.dataWindow.xMax-e.dataWindow.xMin+1,height:e.dataWindow.yMax-e.dataWindow.yMin+1,channels:e.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:e.channels[0].pixelType,uncompress:null,getter:null,format:null,[je?`colorSpace`:`encoding`]:null};switch(e.compression){case`NO_COMPRESSION`:a.lines=1,a.uncompress=ce;break;case`RLE_COMPRESSION`:a.lines=1,a.uncompress=R;break;case`ZIPS_COMPRESSION`:a.lines=1,a.uncompress=z;break;case`ZIP_COMPRESSION`:a.lines=16,a.uncompress=z;break;case`PIZ_COMPRESSION`:a.lines=32,a.uncompress=le;break;case`PXR24_COMPRESSION`:a.lines=16,a.uncompress=B;break;case`DWAA_COMPRESSION`:a.lines=32,a.uncompress=V;break;case`DWAB_COMPRESSION`:a.lines=256,a.uncompress=V;break;default:throw`EXRLoader.parse: `+e.compression+` is unsupported`}if(a.scanlineBlockSize=a.lines,a.type==1)switch(i){case I:a.getter=he,a.inputSize=2;break;case L:a.getter=Y,a.inputSize=2}else if(a.type==2)switch(i){case I:a.getter=q,a.inputSize=4;break;case L:a.getter=me,a.inputSize=4}else throw`EXRLoader.parse: unsupported pixelType `+a.type+` for `+e.compression+`.`;a.blockCount=(e.dataWindow.yMax+1)/a.scanlineBlockSize;for(var o=0;o<a.blockCount;o++)K(t,r);a.outputChannels=a.channels==3?4:a.channels;let s=a.width*a.height*a.outputChannels;switch(i){case I:a.byteArray=new Float32Array(s),a.channels<a.outputChannels&&a.byteArray.fill(1,0,s);break;case L:a.byteArray=new Uint16Array(s),a.channels<a.outputChannels&&a.byteArray.fill(15360,0,s);break;default:console.error(`THREE.EXRLoader: unsupported type: `,i)}return a.bytesPerLine=a.width*a.inputSize*a.channels,a.format=a.outputChannels==4?p:h,je?a.colorSpace=`srgb-linear`:a.encoding=3e3,a}let Te=new DataView(e),Ee=new Uint8Array(e),Oe={value:0},ke=Ce(Te,e,Oe),Z=we(ke,Te,Ee,Oe,this.type),Ae={value:0},Me={R:0,G:1,B:2,A:3,Y:0};for(let e=0;e<Z.height/Z.scanlineBlockSize;e++){let t=W(Te,Oe);Z.size=W(Te,Oe),Z.lines=t+Z.scanlineBlockSize>Z.height?Z.height-t:Z.scanlineBlockSize;let n=Z.size<Z.lines*Z.bytesPerLine?Z.uncompress(Z):ce(Z);Oe.value+=Z.size;for(let t=0;t<Z.scanlineBlockSize;t++){let r=t+e*Z.scanlineBlockSize;if(r>=Z.height)break;for(let e=0;e<Z.channels;e++){let i=Me[ke.channels[e].name];for(let a=0;a<Z.width;a++){Ae.value=(t*(Z.channels*Z.width)+e*Z.width+a)*Z.inputSize;let o=(Z.height-1-r)*(Z.width*Z.outputChannels)+a*Z.outputChannels+i;Z.byteArray[o]=Z.getter(n,Ae)}}}}return{header:ke,width:Z.width,height:Z.height,data:Z.byteArray,format:Z.format,[je?`colorSpace`:`encoding`]:Z[je?`colorSpace`:`encoding`],type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function i(e,n){je?e.colorSpace=n.colorSpace:e.encoding=n.encoding,e.minFilter=_,e.magFilter=_,e.generateMipmaps=!1,e.flipY=!1,t&&t(e,n)}return super.load(e,i,n,r)}};function Ne(e,n,i,a){var o;return o=class extends d{constructor(r){super({vertexShader:n,fragmentShader:i,...r});for(let n in e)this.uniforms[n]=new t(e[n]),Object.defineProperty(this,n,{get(){return this.uniforms[n].value},set(e){this.uniforms[n].value=e}});this.uniforms=b.clone(this.uniforms),a?.(this)}},o.key=r.generateUUID(),o}var Q=l(P());function Pe(e,t,n){let r=N(e=>e.size),i=N(e=>e.viewport),a=typeof e==`number`?e:r.width*i.dpr,s=typeof t==`number`?t:r.height*i.dpr,c=(typeof e==`number`?n:e)||{},{samples:l=0,depth:u,...d}=c,f=u??c.depthBuffer,p=Q.useMemo(()=>{let e=new o(a,s,{minFilter:_,magFilter:_,type:L,...d});return f&&(e.depthTexture=new O(a,s,I)),e.samples=l,e},[]);return Q.useLayoutEffect(()=>{p.setSize(a,s),l&&(p.samples=l)},[l,p,a,s]),Q.useEffect(()=>()=>p.dispose(),[]),p}var Fe=Ne({},`void main() { }`,`void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }`),Ie=class extends e{constructor(e=6,t=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new E(`white`)},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=n=>{n.uniforms={...n.uniforms,...this.uniforms},(this.anisotropy??0)>0&&(n.defines.USE_ANISOTROPY=``),t?n.defines.USE_SAMPLER=``:n.defines.USE_TRANSMISSION=``,n.fragmentShader=`
      uniform float chromaticAberration;         
      uniform float anisotropicBlur;      
      uniform float time;
      uniform float distortion;
      uniform float distortionScale;
      uniform float temporalDistortion;
      uniform sampler2D buffer;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      uint hash( uint x ) {
        x += ( x << 10u );
        x ^= ( x >>  6u );
        x += ( x <<  3u );
        x ^= ( x >> 11u );
        x += ( x << 15u );
        return x;
      }

      // Compound versions of the hashing algorithm I whipped together.
      uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
      uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
      uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

      // Construct a float with half-open range [0:1] using low 23 bits.
      // All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
      float floatConstruct( uint m ) {
        const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
        const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
        m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
        m |= ieeeOne;                          // Add fractional part to 1.0
        float  f = uintBitsToFloat( m );       // Range [1:2]
        return f - 1.0;                        // Range [0:1]
      }

      // Pseudo-random value in half-open range [0:1].
      float randomBase( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
      float randomBase( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float rand(float seed) {
        float result = randomBase(vec3(gl_FragCoord.xy, seed));
        return result;
      }

      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      float snoise(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        vec4 w, d;
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        w = max(0.6 - w, 0.0);
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        w *= w;
        w *= w;
        d *= w;
        return dot(d, vec4(52.0));
      }

      float snoiseFractal(vec3 m) {
        return 0.5333333* snoise(m)
              +0.2666667* snoise(2.0*m)
              +0.1333333* snoise(4.0*m)
              +0.0666667* snoise(8.0*m);
      }
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace(`#include <transmission_pars_fragment>`,`
        #ifdef USE_TRANSMISSION
          // Transmission code is based on glTF-Sampler-Viewer
          // https://github.com/KhronosGroup/glTF-Sample-Viewer
          uniform float _transmission;
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
          vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in vec3 modelScale ) {
            // Direction of refracted light.
            // n is normalized once when the sample normal is built.
            vec3 refractionVector = refract( - v, n, 1.0 / ior );
            // The thickness is specified in local space.
            return normalize( refractionVector ) * thickness * modelScale;
          }
          float applyIorToRoughness( const in float roughness, const in float ior ) {
            // Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
            // an IOR of 1.5 results in the default amount of microfacet refraction.
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
          }
          vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
            #ifdef USE_SAMPLER
              #ifdef texture2DLodEXT
                return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #else
                return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #endif
            #else
              return texture2D(buffer, fragCoord.xy);
            #endif
          }
          vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
            const in vec3 position, const in vec3 modelScale, const in vec3 attenuationCoefficient, const in vec3 F,
            const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
            const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelScale );
            vec3 refractedRayExit = position + transmissionRay;
            // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            // Sample framebuffer to get pixel the refracted ray hits.
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = transmittedLight.rgb;
            if ( !isinf( attenuationDistance ) ) {
              // Apply Beer's law.
              attenuatedColor *= exp( - attenuationCoefficient * length( transmissionRay ) );
            }
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
          }
        #endif
`),n.fragmentShader=n.fragmentShader.replace(`#include <transmission_fragment>`,`  
        // Improve the refraction to use the world pos
        material.transmission = _transmission;
        material.transmissionAlpha = 1.0;
        material.thickness = thickness;
        material.attenuationDistance = attenuationDistance;
        material.attenuationColor = attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vUv ).r;
        #endif
        #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vUv ).g;
        #endif
        
        if (material.transmission != 0.0) {
          vec3 pos = vWorldPosition;
          float runningSeed = 0.0;
          vec3 v = normalize( cameraPosition - pos );
          vec3 n = inverseTransformDirection( normal, viewMatrix );
          vec3 transmission = vec3(0.0);
          float randomCoords = rand(runningSeed++);
          float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
          vec3 distortionNormal = vec3(0.0);
          vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;

          vec3 modelScale = vec3(
            length( vec3( modelMatrix[ 0 ].xyz ) ),
            length( vec3( modelMatrix[ 1 ].xyz ) ),
            length( vec3( modelMatrix[ 2 ].xyz ) )
          );

          // Beer's-law coefficient
          vec3 attenuationCoefficient = vec3(0.0);
          if ( !isinf( material.attenuationDistance ) ) {
            attenuationCoefficient = -log( material.attenuationColor ) / material.attenuationDistance;
          }

          if (distortion > 0.0) {
            distortionNormal = distortion * vec3(snoiseFractal(vec3((pos * distortionScale + temporalOffset))), snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)), snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset)));
          }
          for (float i = 0.0; i < ${e}.0; i ++) {
            vec3 sampleNorm;
            if (roughnessFactor > 0.0) {
              sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
            } else {
              // Smooth surfaces skip four hashes, a pow, and a normalization per sample
              sampleNorm = normalize(n + distortionNormal);
            }
            float sampleProgress = (i + randomCoords) / float(${e});
            float sampleThickness = material.thickness + thickness_smear * sampleProgress;
            // Fresnel is identical for RGB; only the refracted IOR changes.
            vec3 F = EnvironmentBRDF( sampleNorm, v, material.specularColor, material.specularF90, material.roughness );
            if (chromaticAberration == 0.0) {
              // With one IOR, a single framebuffer sample supplies all RGB channels
              transmission += getIBLVolumeRefraction(
                sampleNorm, v, material.roughness, material.diffuseColor, pos, modelScale, attenuationCoefficient, F,
                viewMatrix, projectionMatrix, material.ior, sampleThickness, material.attenuationDistance
              ).rgb;
            } else {
              float aberration = chromaticAberration * sampleProgress;
              transmission.r += getIBLVolumeRefraction(
                sampleNorm, v, material.roughness, material.diffuseColor, pos, modelScale, attenuationCoefficient, F,
                viewMatrix, projectionMatrix, material.ior, sampleThickness, material.attenuationDistance
              ).r;
              transmission.g += getIBLVolumeRefraction(
                sampleNorm, v, material.roughness, material.diffuseColor, pos, modelScale, attenuationCoefficient, F,
                viewMatrix, projectionMatrix, material.ior * (1.0 + aberration), sampleThickness, material.attenuationDistance
              ).g;
              transmission.b += getIBLVolumeRefraction(
                sampleNorm, v, material.roughness, material.diffuseColor, pos, modelScale, attenuationCoefficient, F,
                viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * aberration), sampleThickness, material.attenuationDistance
              ).b;
            }
          }
          transmission /= ${e}.0;
          totalDiffuse = mix( totalDiffuse, transmission, material.transmission );
        }\n`)},Object.keys(this.uniforms).forEach(e=>Object.defineProperty(this,e,{get:()=>this.uniforms[e].value,set:t=>this.uniforms[e].value=t}))}},Le=Q.forwardRef(({buffer:e,transmissionSampler:t=!1,backside:n=!1,side:r=0,transmission:i=1,thickness:a=0,backsideThickness:o=0,backsideEnvMapIntensity:s=1,samples:c=10,resolution:l,backsideResolution:u,background:d,anisotropy:f,anisotropicBlur:p,...m},h)=>{ie({MeshTransmissionMaterial:Ie});let g=Q.useRef(null),[_]=Q.useState(()=>new Fe),v=u??l,y=Pe(v,v),b=Pe(l,l),x,S,C,w;return A(e=>{let i=g.current;if(i.uniforms.time.value=e.clock.elapsedTime,i.uniforms.buffer.value===b.texture&&!t){var c;w=(c=i.__r3f)==null||(c=c.parent)==null?void 0:c.object,w&&i.visible&&i.uniforms._transmission.value!==0&&(C=e.gl.toneMapping,x=e.scene.background,S=i.envMapIntensity,e.gl.toneMapping=0,d&&(e.scene.background=d),w.material=_,n&&(e.gl.setRenderTarget(y),e.gl.render(e.scene,e.camera),w.material=i,i.uniforms.buffer.value=y.texture,i.uniforms.thickness.value=o,i.side=1,r!==1&&(i.needsUpdate=!0),i.envMapIntensity=s),e.gl.setRenderTarget(b),e.gl.render(e.scene,e.camera),w.material=i,i.uniforms.thickness.value=a,i.side=r,n&&r!==1&&(i.needsUpdate=!0),i.uniforms.buffer.value=b.texture,i.envMapIntensity=S,e.scene.background=x,e.gl.setRenderTarget(null),e.gl.toneMapping=C)}}),Q.useImperativeHandle(h,()=>g.current,[]),Q.createElement(`meshTransmissionMaterial`,z({args:[c,t],ref:g},m,{buffer:e||b.texture,_transmission:i,anisotropicBlur:p??f,transmission:t?i:0,thickness:a,side:r}))}),Re=Q.forwardRef(({children:e,enabled:t=!0,speed:n=1,rotationIntensity:i=1,floatIntensity:a=1,floatingRange:o=[-.1,.1],autoInvalidate:s=!1,...c},l)=>{let u=Q.useRef(null);Q.useImperativeHandle(l,()=>u.current,[]);let d=Q.useRef(Math.random()*1e4);return A(e=>{if(!t||n===0)return;s&&e.invalidate();let c=d.current+e.clock.elapsedTime;u.current.rotation.x=Math.cos(c/4*n)/8*i,u.current.rotation.y=Math.sin(c/4*n)/8*i,u.current.rotation.z=Math.sin(c/4*n)/20*i;let l=Math.sin(c/4*n)/10;l=r.mapLinear(l,-.1,.1,o?.[0]??-.1,o?.[1]??.1),u.current.position.y=l*a,u.current.updateMatrix()}),Q.createElement(`group`,c,Q.createElement(`group`,{ref:u,matrixAutoUpdate:!1},e))}),ze=(e,t,n)=>{let r;switch(e){case s:r=new Uint8ClampedArray(t*n*4);break;case L:r=new Uint16Array(t*n*4);break;case y:r=new Uint32Array(t*n*4);break;case te:r=new Int8Array(t*n*4);break;case g:r=new Int16Array(t*n*4);break;case ce:r=new Int32Array(t*n*4);break;case I:r=new Float32Array(t*n*4);break;default:throw Error(`Unsupported data type`)}return r},Be,Ve=(e,t,n,r)=>{if(Be!==void 0)return Be;let i=new o(1,1,r);t.setRenderTarget(i);let a=new m(new f,new j({color:16777215}));t.render(a,n),t.setRenderTarget(null);let s=ze(e,i.width,i.height);return t.readRenderTargetPixels(i,0,0,i.width,i.height,s),i.dispose(),a.geometry.dispose(),a.material.dispose(),Be=s[0]!==0,Be},He=class e{_renderer;_rendererIsDisposable=!1;_material;_scene;_camera;_quad;_renderTarget;_width;_height;_type;_colorSpace;_supportsReadPixels=!0;constructor(t){this._width=t.width,this._height=t.height,this._type=t.type,this._colorSpace=t.colorSpace;let n={format:p,depthBuffer:!1,stencilBuffer:!1,type:this._type,colorSpace:this._colorSpace,anisotropy:t.renderTargetOptions?.anisotropy===void 0?1:t.renderTargetOptions?.anisotropy,generateMipmaps:t.renderTargetOptions?.generateMipmaps!==void 0&&t.renderTargetOptions?.generateMipmaps,magFilter:t.renderTargetOptions?.magFilter===void 0?_:t.renderTargetOptions?.magFilter,minFilter:t.renderTargetOptions?.minFilter===void 0?_:t.renderTargetOptions?.minFilter,samples:t.renderTargetOptions?.samples===void 0?void 0:t.renderTargetOptions?.samples,wrapS:t.renderTargetOptions?.wrapS===void 0?F:t.renderTargetOptions?.wrapS,wrapT:t.renderTargetOptions?.wrapT===void 0?F:t.renderTargetOptions?.wrapT};if(this._material=t.material,t.renderer?this._renderer=t.renderer:(this._renderer=e.instantiateRenderer(),this._rendererIsDisposable=!0),this._scene=new c,this._camera=new ee,this._camera.position.set(0,0,10),this._camera.left=-.5,this._camera.right=.5,this._camera.top=.5,this._camera.bottom=-.5,this._camera.updateProjectionMatrix(),!Ve(this._type,this._renderer,this._camera,n)){let e;switch(this._type){case L:e=this._renderer.extensions.has(`EXT_color_buffer_float`)?I:void 0}e===void 0?(this._supportsReadPixels=!1,console.warn(`This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown`)):(console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${I}`),this._type=e)}this._quad=new m(new f,this._material),this._quad.geometry.computeBoundingBox(),this._scene.add(this._quad),this._renderTarget=new o(this.width,this.height,n),this._renderTarget.texture.mapping=t.renderTargetOptions?.mapping===void 0?300:t.renderTargetOptions?.mapping}static instantiateRenderer(){let e=new T;return e.setSize(128,128),e}render=()=>{this._renderer.setRenderTarget(this._renderTarget);try{this._renderer.render(this._scene,this._camera)}catch(e){throw this._renderer.setRenderTarget(null),e}this._renderer.setRenderTarget(null)};toArray(){if(!this._supportsReadPixels)throw Error(`Can't read pixels in this browser`);let e=ze(this._type,this._width,this._height);return this._renderer.readRenderTargetPixels(this._renderTarget,0,0,this._width,this._height,e),e}toDataTexture(e){let t=new re(this.toArray(),this.width,this.height,p,this._type,e?.mapping||300,e?.wrapS||1001,e?.wrapT||1001,e?.magFilter||1006,e?.minFilter||1006,e?.anisotropy||1,se);return t.generateMipmaps=e?.generateMipmaps!==void 0&&e?.generateMipmaps,t}disposeOnDemandRenderer(){this._renderer.setRenderTarget(null),this._rendererIsDisposable&&(this._renderer.dispose(),this._renderer.forceContextLoss())}dispose(e){this.disposeOnDemandRenderer(),e&&this.renderTarget.dispose(),this.material instanceof d&&Object.values(this.material.uniforms).forEach(e=>{e.value instanceof R&&e.value.dispose()}),Object.values(this.material).forEach(e=>{e instanceof R&&e.dispose()}),this.material.dispose(),this._quad.geometry.dispose()}get width(){return this._width}set width(e){this._width=e,this._renderTarget.setSize(this._width,this._height)}get height(){return this._height}set height(e){this._height=e,this._renderTarget.setSize(this._width,this._height)}get renderer(){return this._renderer}get renderTarget(){return this._renderTarget}set renderTarget(e){this._renderTarget=e,this._width=e.width,this._height=e.height}get material(){return this._material}get type(){return this._type}get colorSpace(){return this._colorSpace}},Ue=class extends Error{},We=class extends Error{},Ge=(e,t,n)=>{let r=RegExp(`${t}="([^"]*)"`,`i`).exec(e);if(r)return r[1];let i=RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`,`i`).exec(e);if(i){let e=i[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);return e&&e.length===3?e.map(e=>e.replace(/<\/?rdf:li>/g,``)):i[1].trim()}if(n!==void 0)return n;throw Error(`Can't find ${t} in gainmap metadata`)},Ke=e=>{let t;t=typeof TextDecoder<`u`?new TextDecoder().decode(e):e.toString();let n=t.indexOf(`<x:xmpmeta`);for(;n!==-1;){let e=t.indexOf(`x:xmpmeta>`,n),r=t.slice(n,e+10);try{let e=Ge(r,`hdrgm:GainMapMin`,`0`),t=Ge(r,`hdrgm:GainMapMax`),n=Ge(r,`hdrgm:Gamma`,`1`),i=Ge(r,`hdrgm:OffsetSDR`,`0.015625`),a=Ge(r,`hdrgm:OffsetHDR`,`0.015625`),o=/hdrgm:HDRCapacityMin="([^"]*)"/.exec(r),s=o?o[1]:`0`,c=/hdrgm:HDRCapacityMax="([^"]*)"/.exec(r);if(!c)throw Error(`Incomplete gainmap metadata`);let l=c[1];return{gainMapMin:Array.isArray(e)?e.map(e=>parseFloat(e)):[parseFloat(e),parseFloat(e),parseFloat(e)],gainMapMax:Array.isArray(t)?t.map(e=>parseFloat(e)):[parseFloat(t),parseFloat(t),parseFloat(t)],gamma:Array.isArray(n)?n.map(e=>parseFloat(e)):[parseFloat(n),parseFloat(n),parseFloat(n)],offsetSdr:Array.isArray(i)?i.map(e=>parseFloat(e)):[parseFloat(i),parseFloat(i),parseFloat(i)],offsetHdr:Array.isArray(a)?a.map(e=>parseFloat(e)):[parseFloat(a),parseFloat(a),parseFloat(a)],hdrCapacityMin:parseFloat(s),hdrCapacityMax:parseFloat(l)}}catch{}n=t.indexOf(`<x:xmpmeta`,e)}},qe=class{options;constructor(e){this.options={debug:e&&e.debug!==void 0?e.debug:!1,extractFII:e&&e.extractFII!==void 0?e.extractFII:!0,extractNonFII:e&&e.extractNonFII!==void 0?e.extractNonFII:!0}}extract(e){return new Promise((t,n)=>{let r=this.options.debug,i=new DataView(e.buffer);if(i.getUint16(0)!==65496){n(Error(`Not a valid jpeg`));return}let a=i.byteLength,o=2,s=0,c;for(;o<a;){if(++s>250){n(Error(`Found no marker after ${s} loops 😵`));return}if(i.getUint8(o)!==255){n(Error(`Not a valid marker at offset 0x${o.toString(16)}, found: 0x${i.getUint8(o).toString(16)}`));return}if(c=i.getUint8(o+1),r&&console.log(`Marker: ${c.toString(16)}`),c===226){r&&console.log(`Found APP2 marker (0xffe2)`);let e=o+4;if(i.getUint32(e)===1297106432){let r=e+4,a;if(i.getUint16(r)===18761)a=!1;else if(i.getUint16(r)===19789)a=!0;else{n(Error(`No valid endianness marker found in TIFF header`));return}if(i.getUint16(r+2,!a)!==42){n(Error(`Not valid TIFF data! (no 0x002A marker)`));return}let o=i.getUint32(r+4,!a);if(o<8){n(Error(`Not valid TIFF data! (First offset less than 8)`));return}let s=r+o,c=i.getUint16(s,!a),l=s+2,u=0;for(let e=l;e<l+12*c;e+=12)i.getUint16(e,!a)===45057&&(u=i.getUint32(e+8,!a));let d=s+2+c*12+4,f=[];for(let e=d;e<d+u*16;e+=16){let t={MPType:i.getUint32(e,!a),size:i.getUint32(e+4,!a),dataOffset:i.getUint32(e+8,!a),dependantImages:i.getUint32(e+12,!a),start:-1,end:-1,isFII:!1};t.dataOffset?(t.start=r+t.dataOffset,t.isFII=!1):(t.start=0,t.isFII=!0),t.end=t.start+t.size,f.push(t)}if(this.options.extractNonFII&&f.length){let e=new Blob([i]),n=[];for(let t of f){if(t.isFII&&!this.options.extractFII)continue;let r=e.slice(t.start,t.end+1,`image/jpeg`);n.push(r)}t(n)}}}o+=2+i.getUint16(o+2)}})}},Je=async e=>{let t=Ke(e);if(!t)throw new We(`Gain map XMP metadata not found`);let n=await new qe({extractFII:!0,extractNonFII:!0}).extract(e);if(n.length!==2)throw new Ue(`Gain map recovery image not found`);return{sdr:new Uint8Array(await n[0].arrayBuffer()),gainMap:new Uint8Array(await n[1].arrayBuffer()),metadata:t}},Ye=e=>new Promise((t,n)=>{let r=document.createElement(`img`);r.onload=()=>{t(r)},r.onerror=e=>{n(e)},r.src=URL.createObjectURL(e)}),Xe=class extends v{_renderer;_renderTargetOptions;_internalLoadingManager;_config;constructor(e,t){super(t),this._config=e,e.renderer&&(this._renderer=e.renderer),this._internalLoadingManager=new i}setRenderer(e){return this._renderer=e,this}setRenderTargetOptions(e){return this._renderTargetOptions=e,this}prepareQuadRenderer(){this._renderer||console.warn(`WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.`);let e=this._config.createMaterial({gainMapMax:[1,1,1],gainMapMin:[0,0,0],gamma:[1,1,1],offsetHdr:[1,1,1],offsetSdr:[1,1,1],hdrCapacityMax:1,hdrCapacityMin:0,maxDisplayBoost:1,gainMap:new R,sdr:new R});return this._config.createQuadRenderer({width:16,height:16,type:L,colorSpace:se,material:e,renderer:this._renderer,renderTargetOptions:this._renderTargetOptions})}async processImages(e,t,n){let r=t?new Blob([t],{type:`image/jpeg`}):void 0,i=new Blob([e],{type:`image/jpeg`}),a,o,s=!1;if(typeof createImageBitmap>`u`){let e=await Promise.all([r?Ye(r):Promise.resolve(void 0),Ye(i)]);o=e[0],a=e[1],s=n===`flipY`}else{let e=await Promise.all([r?createImageBitmap(r,{imageOrientation:n||`flipY`}):Promise.resolve(void 0),createImageBitmap(i,{imageOrientation:n||`flipY`})]);o=e[0],a=e[1]}return{sdrImage:a,gainMapImage:o,needsFlip:s}}createTextures(e,t,r){let i=new R(t||new ImageData(2,2),300,F,F,_,n,p,s,1,se);i.flipY=r,i.needsUpdate=!0;let o=new R(e,300,F,F,_,n,p,s,1,a);return o.flipY=r,o.needsUpdate=!0,{gainMap:i,sdr:o}}updateQuadRenderer(e,t,n,r,i){e.width=t.width,e.height=t.height,e.material.gainMap=n,e.material.sdr=r,e.material.gainMapMin=i.gainMapMin,e.material.gainMapMax=i.gainMapMax,e.material.offsetHdr=i.offsetHdr,e.material.offsetSdr=i.offsetSdr,e.material.gamma=i.gamma,e.material.hdrCapacityMin=i.hdrCapacityMin,e.material.hdrCapacityMax=i.hdrCapacityMax,e.material.maxDisplayBoost=2**i.hdrCapacityMax,e.material.needsUpdate=!0}},Ze=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Qe=`
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`,$e=class extends d{_maxDisplayBoost;_hdrCapacityMin;_hdrCapacityMax;constructor({gamma:e,offsetHdr:t,offsetSdr:n,gainMapMin:r,gainMapMax:i,maxDisplayBoost:a,hdrCapacityMin:o,hdrCapacityMax:s,sdr:c,gainMap:l}){super({name:`GainMapDecoderMaterial`,vertexShader:Ze,fragmentShader:Qe,uniforms:{sdr:{value:c},gainMap:{value:l},gamma:{value:new x(1/e[0],1/e[1],1/e[2])},offsetHdr:{value:new x().fromArray(t)},offsetSdr:{value:new x().fromArray(n)},gainMapMin:{value:new x().fromArray(r)},gainMapMax:{value:new x().fromArray(i)},weightFactor:{value:(Math.log2(a)-o)/(s-o)}},blending:0,depthTest:!1,depthWrite:!1}),this._maxDisplayBoost=a,this._hdrCapacityMin=o,this._hdrCapacityMax=s,this.needsUpdate=!0,this.uniformsNeedUpdate=!0}get sdr(){return this.uniforms.sdr.value}set sdr(e){this.uniforms.sdr.value=e}get gainMap(){return this.uniforms.gainMap.value}set gainMap(e){this.uniforms.gainMap.value=e}get offsetHdr(){return this.uniforms.offsetHdr.value.toArray()}set offsetHdr(e){this.uniforms.offsetHdr.value.fromArray(e)}get offsetSdr(){return this.uniforms.offsetSdr.value.toArray()}set offsetSdr(e){this.uniforms.offsetSdr.value.fromArray(e)}get gainMapMin(){return this.uniforms.gainMapMin.value.toArray()}set gainMapMin(e){this.uniforms.gainMapMin.value.fromArray(e)}get gainMapMax(){return this.uniforms.gainMapMax.value.toArray()}set gainMapMax(e){this.uniforms.gainMapMax.value.fromArray(e)}get gamma(){let e=this.uniforms.gamma.value;return[1/e.x,1/e.y,1/e.z]}set gamma(e){let t=this.uniforms.gamma.value;t.x=1/e[0],t.y=1/e[1],t.z=1/e[2]}get hdrCapacityMin(){return this._hdrCapacityMin}set hdrCapacityMin(e){this._hdrCapacityMin=e,this.calculateWeight()}get hdrCapacityMax(){return this._hdrCapacityMax}set hdrCapacityMax(e){this._hdrCapacityMax=e,this.calculateWeight()}get maxDisplayBoost(){return this._maxDisplayBoost}set maxDisplayBoost(e){this._maxDisplayBoost=Math.max(1,Math.min(65504,e)),this.calculateWeight()}calculateWeight(){let e=(Math.log2(this._maxDisplayBoost)-this._hdrCapacityMin)/(this._hdrCapacityMax-this._hdrCapacityMin);this.uniforms.weightFactor.value=Math.max(0,Math.min(1,e))}},et=class extends Xe{constructor(e,t){super({renderer:e,createMaterial:e=>new $e(e),createQuadRenderer:e=>new He(e)},t)}async render(e,t,n,r){let{sdrImage:i,gainMapImage:a,needsFlip:o}=await this.processImages(n,r,`flipY`),{gainMap:s,sdr:c}=this.createTextures(i,a,o);this.updateQuadRenderer(e,i,s,c,t),e.render()}},tt=class extends et{load([e,t,n],r,i,a){let o=this.prepareQuadRenderer(),s,c,l,u=async()=>{if(s&&c&&l){try{await this.render(o,l,s,c)}catch(r){this.manager.itemError(e),this.manager.itemError(t),this.manager.itemError(n),typeof a==`function`&&a(r),o.disposeOnDemandRenderer();return}typeof r==`function`&&r(o),this.manager.itemEnd(e),this.manager.itemEnd(t),this.manager.itemEnd(n),o.disposeOnDemandRenderer()}},d=!0,f=0,p=0,m=!0,h=0,g=0,_=!0,v=0,y=0,b=()=>{if(typeof i==`function`){let e=f+h+v,t=p+g+y;i(new ProgressEvent(`progress`,{lengthComputable:d&&m&&_,loaded:t,total:e}))}};this.manager.itemStart(e),this.manager.itemStart(t),this.manager.itemStart(n);let x=new S(this._internalLoadingManager);x.setResponseType(`arraybuffer`),x.setRequestHeader(this.requestHeader),x.setPath(this.path),x.setWithCredentials(this.withCredentials),x.load(e,async e=>{if(typeof e==`string`)throw Error(`Invalid sdr buffer`);s=e,await u()},e=>{d=e.lengthComputable,p=e.loaded,f=e.total,b()},t=>{this.manager.itemError(e),typeof a==`function`&&a(t)});let C=new S(this._internalLoadingManager);C.setResponseType(`arraybuffer`),C.setRequestHeader(this.requestHeader),C.setPath(this.path),C.setWithCredentials(this.withCredentials),C.load(t,async e=>{if(typeof e==`string`)throw Error(`Invalid gainmap buffer`);c=e,await u()},e=>{m=e.lengthComputable,g=e.loaded,h=e.total,b()},e=>{this.manager.itemError(t),typeof a==`function`&&a(e)});let w=new S(this._internalLoadingManager);return w.setRequestHeader(this.requestHeader),w.setPath(this.path),w.setWithCredentials(this.withCredentials),w.load(n,async e=>{if(typeof e!=`string`)throw Error(`Invalid metadata string`);l=JSON.parse(e),await u()},e=>{_=e.lengthComputable,y=e.loaded,v=e.total,b()},e=>{this.manager.itemError(n),typeof a==`function`&&a(e)}),o}},nt=class extends et{load(e,t,n,r){let i=this.prepareQuadRenderer(),a=new S(this._internalLoadingManager);return a.setResponseType(`arraybuffer`),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),this.manager.itemStart(e),a.load(e,async n=>{if(typeof n==`string`)throw Error(`Invalid buffer, received [string], was expecting [ArrayBuffer]`);let a=new Uint8Array(n),o,s,c;try{let e=await Je(a);o=e.sdr,s=e.gainMap,c=e.metadata}catch(t){if(t instanceof We||t instanceof Ue)console.warn(`Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`),c={gainMapMin:[0,0,0],gainMapMax:[1,1,1],gamma:[1,1,1],hdrCapacityMin:0,hdrCapacityMax:1,offsetHdr:[0,0,0],offsetSdr:[0,0,0]},o=a;else throw t}try{await this.render(i,c,o.buffer,s?.buffer)}catch(t){this.manager.itemError(e),typeof r==`function`&&r(t),i.disposeOnDemandRenderer();return}typeof t==`function`&&t(i),this.manager.itemEnd(e),i.disposeOnDemandRenderer()},n,t=>{this.manager.itemError(e),typeof r==`function`&&r(t)}),i}},rt={apartment:`lebombo_1k.hdr`,city:`potsdamer_platz_1k.hdr`,dawn:`kiara_1_dawn_1k.hdr`,forest:`forest_slope_1k.hdr`,lobby:`st_fagans_interior_1k.hdr`,night:`dikhololo_night_1k.hdr`,park:`rooitou_park_1k.hdr`,studio:`studio_small_03_1k.hdr`,sunset:`venice_sunset_1k.hdr`,warehouse:`empty_warehouse_01_1k.hdr`},it=`https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/`,at=e=>Array.isArray(e),ot=[`/px.png`,`/nx.png`,`/py.png`,`/ny.png`,`/pz.png`,`/nz.png`];function st({files:e=ot,path:t=``,preset:n=void 0,colorSpace:r=void 0,extensions:i}={}){n&&(ut(n),e=rt[n],t=it);let a=at(e),{extension:o,isCubemap:s}=dt(e),c=ft(o);if(!c)throw Error(`useEnvironment: Unrecognized file extension: `+e);let l=N(e=>e.gl);(0,Q.useLayoutEffect)(()=>{if(o!==`webp`&&o!==`jpg`&&o!==`jpeg`)return;function t(){C.clear(c,a?[e]:e)}l.domElement.addEventListener(`webglcontextlost`,t,{once:!0})},[e,l.domElement]);let u=C(c,a?[e]:e,e=>{(o===`webp`||o===`jpg`||o===`jpeg`)&&e.setRenderer(l),e.setPath==null||e.setPath(t),i&&i(e)}),d=a?u[0]:u;return(o===`jpg`||o===`jpeg`||o===`webp`)&&(d=d.renderTarget?.texture),d.mapping=s?301:303,d.colorSpace=r??(s?`srgb`:`srgb-linear`),d}var ct={files:ot,path:``,preset:void 0,extensions:void 0};st.preload=e=>{let t={...ct,...e},{files:n,path:r=``}=t,{preset:i,extensions:a}=t;i&&(ut(i),n=rt[i],r=it);let{extension:o}=dt(n);if(o===`webp`||o===`jpg`||o===`jpeg`)throw Error(`useEnvironment: Preloading gainmaps is not supported`);let s=ft(o);if(!s)throw Error(`useEnvironment: Unrecognized file extension: `+n);C.preload(s,at(n)?[n]:n,e=>{e.setPath==null||e.setPath(r),a&&a(e)})};var lt={files:ot,preset:void 0};st.clear=e=>{let t={...lt,...e},{files:n}=t,{preset:r}=t;r&&(ut(r),n=rt[r]);let{extension:i}=dt(n),a=ft(i);if(!a)throw Error(`useEnvironment: Unrecognized file extension: `+n);C.clear(a,at(n)?[n]:n)};function ut(e){if(!(e in rt))throw Error(`Preset must be one of: `+Object.keys(rt).join(`, `))}function dt(e){var t;let n=at(e)&&e.length===6,r=at(e)&&e.length===3&&e.some(e=>e.endsWith(`json`)),i=at(e)?e[0]:e;return{extension:n?`cube`:r?`webp`:i.startsWith(`data:application/exr`)?`exr`:i.startsWith(`data:application/hdr`)?`hdr`:i.startsWith(`data:image/jpeg`)?`jpg`:(t=i.split(`.`).pop())==null||(t=t.split(`?`))==null||(t=t.shift())==null?void 0:t.toLowerCase(),isCubemap:n,isGainmap:r}}function ft(e){return e===`cube`?D:e===`hdr`?Ae:e===`exr`?Me:e===`jpg`||e===`jpeg`?nt:e===`webp`?tt:null}var pt=e=>e.current&&e.current.isScene,mt=e=>pt(e)?e.current:e;function ht(e,t,n,r,i={}){var a,o;i={backgroundBlurriness:0,backgroundIntensity:1,backgroundRotation:[0,0,0],environmentIntensity:1,environmentRotation:[0,0,0],...i};let s=mt(t||n),c=s.background,l=s.environment,u={backgroundBlurriness:s.backgroundBlurriness,backgroundIntensity:s.backgroundIntensity,backgroundRotation:((a=s.backgroundRotation)==null||a.clone==null?void 0:a.clone())??[0,0,0],environmentIntensity:s.environmentIntensity,environmentRotation:((o=s.environmentRotation)==null||o.clone==null?void 0:o.clone())??[0,0,0]};return e!==`only`&&(s.environment=r),e&&(s.background=r),oe(s,i),()=>{e!==`only`&&(s.environment=l),e&&(s.background=c),oe(s,u)}}function gt({scene:e,background:t=!1,map:n,...r}){let i=N(e=>e.scene);return Q.useLayoutEffect(()=>{if(n)return ht(t,e,i,n,r)}),null}function _t({background:e=!1,scene:t,blur:n,backgroundBlurriness:r,backgroundIntensity:i,backgroundRotation:a,environmentIntensity:o,environmentRotation:s,...c}){let l=st(c),u=N(e=>e.scene);return Q.useLayoutEffect(()=>ht(e,t,u,l,{backgroundBlurriness:n??r,backgroundIntensity:i,backgroundRotation:a,environmentIntensity:o,environmentRotation:s})),Q.useEffect(()=>()=>{l.dispose()},[l]),null}function vt({children:e,near:t=.1,far:n=1e3,resolution:r=256,frames:i=1,map:a,background:o=!1,blur:s,backgroundBlurriness:l,backgroundIntensity:u,backgroundRotation:d,environmentIntensity:f,environmentRotation:p,scene:m,files:h,path:g,preset:_=void 0,extensions:v}){let y=N(e=>e.gl),b=N(e=>e.scene),x=Q.useRef(null),[S]=Q.useState(()=>new c),C=Q.useMemo(()=>{let e=new ae(r);return e.texture.type=L,e},[r]);Q.useEffect(()=>()=>{C.dispose()},[C]),Q.useLayoutEffect(()=>{if(i===1){let e=y.autoClear;y.autoClear=!0,x.current.update(y,S),y.autoClear=e}return ht(o,m,b,C.texture,{backgroundBlurriness:s??l,backgroundIntensity:u,backgroundRotation:d,environmentIntensity:f,environmentRotation:p})},[e,S,C.texture,m,b,o,i,y]);let w=1;return A(()=>{if(i===1/0||w<i){let e=y.autoClear;y.autoClear=!0,x.current.update(y,S),y.autoClear=e,w++}}),Q.createElement(Q.Fragment,null,M(Q.createElement(Q.Fragment,null,e,Q.createElement(`cubeCamera`,{ref:x,args:[t,n,C]}),h||_?Q.createElement(_t,{background:!0,files:h,preset:_,path:g,extensions:v}):a?Q.createElement(gt,{background:!0,map:a,extensions:v}):null),S))}function yt(e){let t=st(e),n=e.map||t;Q.useMemo(()=>ie({GroundProjectedEnvImpl:Z}),[]),Q.useEffect(()=>()=>{t.dispose()},[t]);let r=Q.useMemo(()=>[n],[n]),i=e.ground?.height,a=e.ground?.radius,o=e.ground?.scale??1e3;return Q.createElement(Q.Fragment,null,Q.createElement(gt,z({},e,{map:n})),Q.createElement(`groundProjectedEnvImpl`,{args:r,scale:o,height:i,radius:a}))}function bt(e){return e.ground?Q.createElement(yt,e):e.map?Q.createElement(gt,e):e.children?Q.createElement(vt,e):Q.createElement(_t,e)}var $=u();function xt({mouse:e,scrollProgress:t=0,exploded:n=!1,activeNote:i=null}){let a=(0,Q.useRef)(null),o=(0,Q.useRef)(null),s=(0,Q.useRef)(null);A(c=>{let l=c.clock.elapsedTime;if(!a.current)return;let u=l*.12,d=e.x*.25,f=e.y*.12,p=r.clamp(t,0,1),m=r.lerp(1,.72,p);if(a.current.scale.setScalar(m),a.current.position.x=r.lerp(0,1.6,p),a.current.position.y=r.lerp(0,-.3,p)+Math.sin(l*.6)*.08,a.current.rotation.y=u+d,a.current.rotation.x=r.lerp(.05,-.08,p)+f,a.current.rotation.z=r.lerp(0,.08,p),n&&o.current&&s.current){let e=i?.9:.55;o.current.position.y=r.lerp(1.05,1.05+e,1);let t=i===`top`,n=i===`base`;if(s.current.material){let e=s.current.material;e.emissiveIntensity=n?.35:t?.15:.05}if(o.current.material){let e=o.current.material;e.emissiveIntensity=i===`middle`?.3:.02}}else o.current&&(o.current.position.y=r.lerp(o.current.position.y,1.05,.08))});let c=(0,Q.useMemo)(()=>({transmission:1,thickness:.35,roughness:.06,chromaticAberration:.04,ior:1.45,distortion:.04,temporalDistortion:.08}),[]);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Re,{speed:1.2,rotationIntensity:.12,floatIntensity:.6,children:(0,$.jsxs)(`group`,{ref:a,position:[0,0,0],children:[(0,$.jsxs)(`mesh`,{position:[0,-.05,0],castShadow:!0,receiveShadow:!0,children:[(0,$.jsx)(`cylinderGeometry`,{args:[.55,.62,1.7,64]}),(0,$.jsx)(Le,{...c,color:`#f6f0e6`,backside:!1})]}),(0,$.jsxs)(`mesh`,{ref:s,position:[0,-.12,0],children:[(0,$.jsx)(`cylinderGeometry`,{args:[.5,.56,1.45,64]}),(0,$.jsx)(`meshPhysicalMaterial`,{color:`#d4af37`,transparent:!0,opacity:.82,roughness:.18,metalness:0,clearcoat:1,clearcoatRoughness:.08,emissive:`#d4af37`,emissiveIntensity:.05})]}),(0,$.jsxs)(`mesh`,{position:[0,.88,0],children:[(0,$.jsx)(`cylinderGeometry`,{args:[.22,.34,.28,64]}),(0,$.jsx)(Le,{...c,color:`#f6f0e6`})]}),(0,$.jsxs)(`mesh`,{position:[0,.78,0],children:[(0,$.jsx)(`torusGeometry`,{args:[.24,.035,24,64]}),(0,$.jsx)(`meshStandardMaterial`,{color:`#d4af37`,metalness:.95,roughness:.18})]}),(0,$.jsxs)(`mesh`,{position:[0,.92,0],children:[(0,$.jsx)(`cylinderGeometry`,{args:[.25,.25,.06,64]}),(0,$.jsx)(`meshStandardMaterial`,{color:`#d4af37`,metalness:.92,roughness:.2})]}),(0,$.jsxs)(`mesh`,{ref:o,position:[0,1.05,0],castShadow:!0,children:[(0,$.jsx)(`cylinderGeometry`,{args:[.26,.27,.42,64]}),(0,$.jsx)(`meshStandardMaterial`,{color:`#0a0a0a`,roughness:.35,metalness:.18,emissive:`#d4af37`,emissiveIntensity:.02})]}),(0,$.jsxs)(`mesh`,{position:[0,1.28,0],children:[(0,$.jsx)(`cylinderGeometry`,{args:[.27,.27,.02,64]}),(0,$.jsx)(`meshStandardMaterial`,{color:`#d4af37`,metalness:1,roughness:.12})]}),(0,$.jsxs)(`mesh`,{position:[0,-.18,.53],children:[(0,$.jsx)(`planeGeometry`,{args:[.62,.38]}),(0,$.jsx)(`meshPhysicalMaterial`,{color:`#ffffff`,transparent:!0,opacity:.92,roughness:.9,transmission:.15})]}),(0,$.jsxs)(`mesh`,{position:[0,.15,0],rotation:[0,0,0],children:[(0,$.jsx)(`cylinderGeometry`,{args:[.56,.56,1.68,3,1,!0]}),(0,$.jsx)(`meshStandardMaterial`,{color:`#ffffff`,transparent:!0,opacity:.04,side:2})]})]})}),(0,$.jsx)(bt,{preset:`studio`,background:!1}),(0,$.jsx)(`ambientLight`,{intensity:.7}),(0,$.jsx)(`directionalLight`,{position:[4,6,5],intensity:2.2,castShadow:!0,"shadow-mapSize":[2048,2048]}),(0,$.jsx)(`directionalLight`,{position:[-4,3,-3],intensity:.9,color:`#d4af37`}),(0,$.jsx)(`spotLight`,{position:[0,6,0],angle:.45,penumbra:.6,intensity:2.5,color:`#fff7d6`}),(0,$.jsx)(`pointLight`,{position:[0,1,3],intensity:1.2,color:`#fff2cc`,distance:6,decay:2})]})}export{xt as default};