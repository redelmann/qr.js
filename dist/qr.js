(()=>{"use strict";const t=[[[16,1,0,10],[19,1,0,7],[9,1,0,17],[13,1,0,13]],[[28,1,0,16],[34,1,0,10],[16,1,0,28],[22,1,0,22]],[[44,1,0,26],[55,1,0,15],[13,2,0,22],[17,2,0,18]],[[32,2,0,18],[80,1,0,20],[9,4,0,16],[24,2,0,26]],[[43,2,0,24],[108,1,0,26],[11,2,2,22],[15,2,2,18]],[[27,4,0,16],[68,2,0,18],[15,4,0,28],[19,4,0,24]],[[31,4,0,18],[78,2,0,20],[13,4,1,26],[14,2,4,18]],[[38,2,2,22],[97,2,0,24],[14,4,2,26],[18,4,2,22]],[[36,3,2,22],[116,2,0,30],[12,4,4,24],[16,4,4,20]],[[43,4,1,26],[68,2,2,18],[15,6,2,28],[19,6,2,24]],[[50,1,4,30],[81,4,0,20],[12,3,8,24],[22,4,4,28]],[[36,6,2,22],[92,2,2,24],[14,7,4,28],[20,4,6,26]],[[37,8,1,22],[107,4,0,26],[11,12,4,22],[20,8,4,24]],[[40,4,5,24],[115,3,1,30],[12,11,5,24],[16,11,5,20]],[[41,5,5,24],[87,5,1,22],[12,11,7,24],[24,5,7,30]],[[45,7,3,28],[98,5,1,24],[15,3,13,30],[19,15,2,24]],[[46,10,1,28],[107,1,5,28],[14,2,17,28],[22,1,15,28]],[[43,9,4,26],[120,5,1,30],[14,2,19,28],[22,17,1,28]],[[44,3,11,26],[113,3,4,28],[13,9,16,26],[21,17,4,26]],[[41,3,13,26],[107,3,5,28],[15,15,10,28],[24,15,5,30]],[[42,17,0,26],[116,4,4,28],[16,19,6,30],[22,17,6,28]],[[46,17,0,28],[111,2,7,28],[13,34,0,24],[24,7,16,30]],[[47,4,14,28],[121,4,5,30],[15,16,14,30],[24,11,14,30]],[[45,6,14,28],[117,6,4,30],[16,30,2,30],[24,11,16,30]],[[47,8,13,28],[106,8,4,26],[15,22,13,30],[24,7,22,30]],[[46,19,4,28],[114,10,2,28],[16,33,4,30],[22,28,6,28]],[[45,22,3,28],[122,8,4,30],[15,12,28,30],[23,8,26,30]],[[45,3,23,28],[117,3,10,30],[15,11,31,30],[24,4,31,30]],[[45,21,7,28],[116,7,7,30],[15,19,26,30],[23,1,37,30]],[[47,19,10,28],[115,5,10,30],[15,23,25,30],[24,15,25,30]],[[46,2,29,28],[115,13,3,30],[15,23,28,30],[24,42,1,30]],[[46,10,23,28],[115,17,0,30],[15,19,35,30],[24,10,35,30]],[[46,14,21,28],[115,17,1,30],[15,11,46,30],[24,29,19,30]],[[46,14,23,28],[115,13,6,30],[16,59,1,30],[24,44,7,30]],[[47,12,26,28],[121,12,7,30],[15,22,41,30],[24,39,14,30]],[[47,6,34,28],[121,6,14,30],[15,2,64,30],[24,46,10,30]],[[46,29,14,28],[122,17,4,30],[15,24,46,30],[24,49,10,30]],[[46,13,32,28],[122,4,18,30],[15,42,32,30],[24,48,14,30]],[[47,40,7,28],[117,20,4,30],[15,10,67,30],[24,43,22,30]],[[47,18,31,28],[118,19,6,30],[15,20,61,30],[24,34,34,30]]];function e(e,n){const l=t[e-1][n],r=[],o=l[0],i=l[1],s=l[2];for(let t=0;t<i;t++)r.push(o);for(let t=0;t<s;t++)r.push(o+1);return r}function n(e,n){return t[e-1][n][3]}const l=[[6],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]];function r(t){const e=l[t-1],n=[],r=e.length-1;for(let t=0;t<e.length;t++)for(let l=0;l<e.length;l++)0==t&&0==l||t==r&&0==l||0==t&&l==r||n.push([e[t],e[l]]);return n}const o=[function(t,e){return(t+e)%2},function(t,e){return e%2},function(t,e){return t%3},function(t,e){return(t+e)%3},function(t,e){return(Math.floor(e/2)+Math.floor(t/3))%2},function(t,e){return t*e%2+t*e%3},function(t,e){return(t*e%3+t*e)%2},function(t,e){return(t*e%3+t+e)%2}],i=[1,2,4,8];function s(t,e){let n;return n=t<10?[10,9,8,8]:t<27?[12,11,16,10]:[14,13,16,12],n[e]}function u(t,e,n){return(e<6?e:e-1)%2==1?[e-1,n]:Math.floor((e<6?e:e-1)/2)%2==0?n===t-1?[e-1,n]:[e+1,n+1]:0===n?[7===e?5:e-1,n]:[e+1,n-1]}class h{constructor(t){this.next_bit=7,this.next_byte=0,this.bytes=new Uint8Array(t)}bits_written(){return 8*this.next_byte+(7-this.next_bit)}write_bit(t){this.bytes[this.next_byte]|=t<<this.next_bit,this.next_bit--,this.next_bit<0&&(this.next_bit=7,this.next_byte++)}write_bits(t,e){for(let n=e-1;n>=0;n--)this.write_bit(t>>>n&1)}get_bytes(){return this.bytes}}function f(t){let e=-1;for(;0!=t;)e++,t>>>=1;return e}const c=new class{constructor(t){let e=1<<f(t);this.modulus=e-1,this.exps=new Array(this.modulus),this.logs=new Array(this.modulus+1);let n=1;for(let l=0;l<this.modulus;l++)this.exps[l]=n,this.logs[n]=l,n<<=1,n&e&&(n^=t)}add(t,e){return t^e}subtract(t,e){return t^e}mult(t,e){return this.exps[(this.logs[t]+this.logs[e])%this.modulus]}inverse(t){return this.exps[this.modulus-this.logs[t]]}divide(t,e){return this.exps[(this.logs[t]+this.modulus-this.logs[e])%this.modulus]}power(t,e){let n=this.logs[t];return e<0&&(n-=this.modulus),this.exps[n*e%this.modulus]}}(285);class a{constructor(t){this.field=t}mult(t,e){const n=new Array(t.length+e.length-1);for(let l=0;l<t.length;l++)for(let r=0;r<e.length;r++)n[l+r]=this.field.add(n[l+r],this.field.mult(t[l],e[r]));return n}remainder(t,e){if(0==e.length)throw new Error("Division by zero");let n=0;const l=t.length-e.length+1;for(;n<l;){let l=this.field.divide(t[n],e[0]);for(let r=1;r<e.length;r++)t[n+r]=this.field.subtract(t[n+r],this.field.mult(e[r],l));n+=1}return t.slice(l)}generator(t){let e=[1];for(let n=0;n<t;n++)e=this.mult(e,[1,this.field.power(2,n)]);return e}}function g(t,e){return(t<<=f(e))^function(t,e){let n=f(t);const l=f(e);for(;n>=l;)n=f(t^=e<<n-l);return t}(t,e)}class d{constructor(t){this.extra_symbols=t,this.ring=new a(c),this.generator=this.ring.generator(t)}encode(t){let e=new Uint8Array(t.length+this.extra_symbols);for(let n=0;n<t.length;n++)e[n]=t[n];for(let n=0;n<this.extra_symbols;n++)e[t.length+n]=0;return this.ring.remainder(e,this.generator)}}const m=[function(t,e){},function(t,e){},function(t,e){for(let n=0;n<e.length;n++){const l=e.charCodeAt(n);if(l>255)throw new Error("Invalid character");t.write_bits(l,8)}},function(t,e){}];function w(t){return t?1:2}function b(t,e,n,l,r){for(let o=0;o<l;o++)for(let i=0;i<l;i++)t[e+o][n+i]=r}function y(t,e,n){b(t,e,n,7,1),b(t,e+1,n+1,5,2),b(t,e+2,n+2,3,1)}function p(t,l,f,c){const a=function(t,e,n){const l=4*t+17,o=[];for(let t=0;t<l;t++){const t=new Uint8Array(l);t.fill(0),o.push(t)}b(o,0,0,8,2),b(o,l-8,0,8,2),b(o,0,l-8,8,2),y(o,0,0),y(o,l-7,0),y(o,0,l-7);for(let t=8;t<l-8;t++){const e=t%2==0?1:2;o[t][6]=e,o[6][t]=e}const i=r(t);for(let t=0;t<i.length;t++){const[e,n]=i[t];b(o,e-2,n-2,5,1),b(o,e-1,n-1,3,2),o[e][n]=1}if(t>=7){const e=function(t){return g(t,7973)}(t);!function(t,e){const n=t.length;let l=17;for(let r=0;r<6;r++)for(let o=0;o<3;o++)t[5-r][n-9-o]=w(e>>l&1),t[n-9-o][5-r]=w(e>>l&1),l-=1}(o,e)}const s=function(t,e){return 21522^g(t<<3^e,1335)}(e,n);return function(t,e){const n=t.length;for(let n=0;n<6;n++)t[n][8]=w(e>>14-n&1);for(let n=0;n<2;n++)t[7+n][8]=w(e>>8-n&1);t[8][7]=w(e>>6&1);for(let n=0;n<6;n++)t[8][5-n]=w(e>>5-n&1);for(let l=0;l<7;l++)t[8][n-1-l]=w(e>>14-l&1);for(let l=0;l<8;l++)t[n-8+l][8]=w(e>>7-l&1)}(o,s),o[8][l-8]=1,o}(t,l,f),p=function(t,l,r,o){const u=e(l,r);let f=u[u.length-1],c=0;for(let t=0;t<u.length;t++)c+=u[t];let a=new h(c);const g=8*c;a.write_bits(i[2],4);const w=s(l,2);a.write_bits(t.length,w),(0,m[2])(a,t);let b=a.bits_written();if(b>g)throw new Error("Message is too long");const y=Math.min(4,g-b);a.write_bits(0,y);const p=(b+y)%8;p>0&&a.write_bits(0,8-p),b=a.bits_written();let v=!0;for(let t=b;t<g;t+=8)v?a.write_bits(236,8):a.write_bits(17,8),v=!v;const x=[],_=[],E=n(l,r),I=new d(E);let A=0;const M=a.get_bytes();for(let t=0;t<u.length;t++){const e=u[t],n=M.slice(A,A+e);x.push(n),_.push(I.encode(n)),A+=e}const S=new Uint8Array(c+E*_.length);let L=0;for(let t=0;t<f;t++)for(let e=0;e<x.length;e++)t<x[e].length&&(S[L]=x[e][t],L+=1);for(let t=0;t<E;t++)for(let e=0;e<_.length;e++)S[L]=_[e][t],L+=1;return S}(c,t,l);return function(t,e,n){const l=t.length,r=function(t){const e=o[t];return function(t,n,l){return(e(t,n)>0?0:1)^l}}(n);let[i,s]=[l-1,l-1];for(let n=0;n<e.length;n++)for(let o=0;o<8;o++){for(;0!==t[i][s];)[i,s]=u(l,i,s);let h=e[n]>>7-o&1;t[i][s]=w(r(i,s,h)),[i,s]=u(l,i,s)}for(;i>=0;)0===t[i][s]&&(t[i][s]=w(r(i,s,0))),[i,s]=u(l,i,s)}(a,p,f),a}document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("qr-message"),l=document.getElementById("qr-version"),o=document.getElementById("qr-mode"),i=document.getElementById("qr-mask"),h=document.getElementById("qr-color"),f=document.getElementById("qr-canvas"),c=f.getContext("2d"),a=document.getElementById("qr-download"),g=["white","blue","cyan","purple","teal","yellow","orange","black","red","brown","white"];let d=null,m=null;function w(){const s=t.value,a=parseInt(l.value),w=[1,0,3,2][parseInt(o.value)],b=parseInt(i.value),y=parseInt(h.value)>0;let v;try{v=null!==d?d:p(a,w,b,s)}catch(t){return c.clearRect(0,0,f.width,f.height),c.fillStyle="red",c.beginPath(),c.arc(f.width/2,f.height/2,f.width/4,0,2*Math.PI),c.fill(),c.fillStyle="black",c.font="24px sans-serif",c.textAlign="center",c.textBaseline="bottom",c.fillText(t.message,f.width/2,f.height-60),c.beginPath(),c.strokeStyle="white",c.lineWidth=20,c.moveTo(f.width/2-60,f.height/2-60),c.lineTo(f.width/2+60,f.height/2+60),c.moveTo(f.width/2+60,f.height/2-60),c.lineTo(f.width/2-60,f.height/2+60),void c.stroke()}const x=v.length,_=Math.floor(420/x);f.width=x*_+80,f.height=x*_+80,c.fillStyle="white",c.fillRect(0,0,f.width,f.height),c.fillStyle="black";for(let t=0;t<x;t++)for(let e=0;e<x;e++)1===v[t][e]&&c.fillRect(40+t*_,40+e*_,_,_);if(y){const t=null!==m?m:function(t,l){const o=4*t+17,i=new Array(o);for(let t=0;t<o;t++){const e=new Uint8Array(o);e.fill(0),i[t]=e}for(let t=0;t<8;t++)for(let e=0;e<8;e++)i[t][e]=2,i[t][o-1-e]=2,i[o-1-t][e]=2;for(let t=0;t<7;t++)for(let e=0;e<7;e++)i[t][e]=1,i[t][o-1-e]=1,i[o-1-t][e]=1;for(let t=0;t<8;t++)i[t][8]=5,i[8][t]=5,i[o-1-t][8]=5,i[8][o-1-t]=5;if(i[8][8]=5,t>=7)for(let t=0;t<6;t++)for(let e=0;e<3;e++)i[t][o-9-e]=6,i[o-9-e][t]=6;for(let t=8;t<o-8;t++)i[t][6]=4,i[6][t]=4;i[8][o-8]=7;const s=r(t);for(let t=0;t<s.length;t++){const e=s[t][0],n=s[t][1];for(let t=-2;t<3;t++)for(let l=-2;l<3;l++)i[e+t][n+l]=3}const h=[],f=[],c=e(t,l);let a=0;for(let t=0;t<c.length;t++)a+=c[t];const g=n(t,l)*c.length;let[d,m]=[o-1,o-1];for(let t=0;t<a;t++)for(let t=0;t<8;t++){for(;0!==i[d][m];)[d,m]=u(o,d,m);i[d][m]=8,h.push([d,m]),[d,m]=u(o,d,m)}for(let t=0;t<g;t++)for(let t=0;t<8;t++){for(;0!==i[d][m];)[d,m]=u(o,d,m);i[d][m]=9,f.push([d,m]),[d,m]=u(o,d,m)}for(;d>=0;)0===i[d][m]&&(i[d][m]=10),[d,m]=u(o,d,m);return i}(a,w);c.globalAlpha=.5;for(let e=0;e<x;e++)for(let n=0;n<x;n++)c.fillStyle=g[t[e][n]],c.fillRect(40+e*_,40+n*_,_,_);c.globalAlpha=1}}function b(){const n=parseInt(l.value),r=[1,0,3,2][parseInt(o.value)],i=function(t,n,l){let r=1,o=40;for(;o>r;){const l=Math.floor((o+r)/2),i=e(l,n);let u=0;for(let t=0;t<i.length;t++)u+=i[t];u-=1,u-=Math.floor(s(l,2)/8),t>u?r=l+1:o=l}return console.log("message_length: ",t),console.log("mode: ",n),console.log("min version: ",r),o}(t.value.length,r),u=parseInt(l.min);l.min=i,(n<i||u==n)&&(l.value=i,l.nextElementSibling.innerText=i)}t.addEventListener("input",(function(){d=null,b(),w()})),l.addEventListener("input",(function(){d=null,m=null,this.nextElementSibling.value=this.value,w()})),o.addEventListener("input",(function(){d=null,m=null,b(),this.nextElementSibling.value=["L","M","Q","H"][parseInt(this.value)],w()})),i.addEventListener("input",(function(){d=null,this.nextElementSibling.value=this.value,w()})),h.addEventListener("input",(function(){this.nextElementSibling.value=["No","Yes"][parseInt(this.value)],w()})),a.addEventListener("click",(function(){const t=f.toDataURL("image/png");this.download="qr.png",this.href=t}),!1),w()}))})();