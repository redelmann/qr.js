(()=>{"use strict";const t=[[[16,1,0,10],[19,1,0,7],[9,1,0,17],[13,1,0,13]],[[28,1,0,16],[34,1,0,10],[16,1,0,28],[22,1,0,22]],[[44,1,0,26],[55,1,0,15],[13,2,0,22],[17,2,0,18]],[[32,2,0,18],[80,1,0,20],[9,4,0,16],[24,2,0,26]],[[43,2,0,24],[108,1,0,26],[11,2,2,22],[15,2,2,18]],[[27,4,0,16],[68,2,0,18],[15,4,0,28],[19,4,0,24]],[[31,4,0,18],[78,2,0,20],[13,4,1,26],[14,2,4,18]],[[38,2,2,22],[97,2,0,24],[14,4,2,26],[18,4,2,22]],[[36,3,2,22],[116,2,0,30],[12,4,4,24],[16,4,4,20]],[[43,4,1,26],[68,2,2,18],[15,6,2,28],[19,6,2,24]],[[50,1,4,30],[81,4,0,20],[12,3,8,24],[22,4,4,28]],[[36,6,2,22],[92,2,2,24],[14,7,4,28],[20,4,6,26]],[[37,8,1,22],[107,4,0,26],[11,12,4,22],[20,8,4,24]],[[40,4,5,24],[115,3,1,30],[12,11,5,24],[16,11,5,20]],[[41,5,5,24],[87,5,1,22],[12,11,7,24],[24,5,7,30]],[[45,7,3,28],[98,5,1,24],[15,3,13,30],[19,15,2,24]],[[46,10,1,28],[107,1,5,28],[14,2,17,28],[22,1,15,28]],[[43,9,4,26],[120,5,1,30],[14,2,19,28],[22,17,1,28]],[[44,3,11,26],[113,3,4,28],[13,9,16,26],[21,17,4,26]],[[41,3,13,26],[107,3,5,28],[15,15,10,28],[24,15,5,30]],[[42,17,0,26],[116,4,4,28],[16,19,6,30],[22,17,6,28]],[[46,17,0,28],[111,2,7,28],[13,34,0,24],[24,7,16,30]],[[47,4,14,28],[121,4,5,30],[15,16,14,30],[24,11,14,30]],[[45,6,14,28],[117,6,4,30],[16,30,2,30],[24,11,16,30]],[[47,8,13,28],[106,8,4,26],[15,22,13,30],[24,7,22,30]],[[46,19,4,28],[114,10,2,28],[16,33,4,30],[22,28,6,28]],[[45,22,3,28],[122,8,4,30],[15,12,28,30],[23,8,26,30]],[[45,3,23,28],[117,3,10,30],[15,11,31,30],[24,4,31,30]],[[45,21,7,28],[116,7,7,30],[15,19,26,30],[23,1,37,30]],[[47,19,10,28],[115,5,10,30],[15,23,25,30],[24,15,25,30]],[[46,2,29,28],[115,13,3,30],[15,23,28,30],[24,42,1,30]],[[46,10,23,28],[115,17,0,30],[15,19,35,30],[24,10,35,30]],[[46,14,21,28],[115,17,1,30],[15,11,46,30],[24,29,19,30]],[[46,14,23,28],[115,13,6,30],[16,59,1,30],[24,44,7,30]],[[47,12,26,28],[121,12,7,30],[15,22,41,30],[24,39,14,30]],[[47,6,34,28],[121,6,14,30],[15,2,64,30],[24,46,10,30]],[[46,29,14,28],[122,17,4,30],[15,24,46,30],[24,49,10,30]],[[46,13,32,28],[122,4,18,30],[15,42,32,30],[24,48,14,30]],[[47,40,7,28],[117,20,4,30],[15,10,67,30],[24,43,22,30]],[[47,18,31,28],[118,19,6,30],[15,20,61,30],[24,34,34,30]]];function e(e,n){const r=t[e-1][n],o=[],l=r[0],i=r[1],s=r[2];for(let t=0;t<i;t++)o.push(l);for(let t=0;t<s;t++)o.push(l+1);return o}function n(e,n){return t[e-1][n][3]}const r=[[6],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]];function o(t){const e=r[t-1],n=[],o=e.length-1;for(let t=0;t<e.length;t++)for(let r=0;r<e.length;r++)0==t&&0==r||t==o&&0==r||0==t&&r==o||n.push([e[t],e[r]]);return n}const l=[function(t,e){return(t+e)%2},function(t,e){return e%2},function(t,e){return t%3},function(t,e){return(t+e)%3},function(t,e){return(Math.floor(e/2)+Math.floor(t/3))%2},function(t,e){return t*e%2+t*e%3},function(t,e){return(t*e%3+t*e)%2},function(t,e){return(t*e%3+t+e)%2}],i=[1,2,4,8];function s(t,e){let n;return n=t<10?[10,9,8,8]:t<27?[12,11,16,10]:[14,13,16,12],n[e]}function u(t,e,n){return(e<6?e:e-1)%2==1?[e-1,n]:Math.floor((e<6?e:e-1)/2)%2==0?n===t-1?[e-1,n]:[e+1,n+1]:0===n?[7===e?5:e-1,n]:[e+1,n-1]}class c{constructor(t){this.next_bit=7,this.next_byte=0,this.bytes=new Uint8Array(t)}bits_written(){return 8*this.next_byte+(7-this.next_bit)}write_bit(t){this.bytes[this.next_byte]|=t<<this.next_bit,this.next_bit--,this.next_bit<0&&(this.next_bit=7,this.next_byte++)}write_bits(t,e){for(let n=e-1;n>=0;n--)this.write_bit(t>>>n&1)}get_bytes(){return this.bytes}}function h(t){let e=-1;for(;0!=t;)e++,t>>>=1;return e}const f=new class{constructor(t){let e=1<<h(t);this.modulus=e-1,this.exps=new Array(this.modulus),this.logs=new Array(this.modulus+1);let n=1;for(let r=0;r<this.modulus;r++)this.exps[r]=n,this.logs[n]=r,n<<=1,n&e&&(n^=t)}add(t,e){return t^e}subtract(t,e){return t^e}mult(t,e){return this.exps[(this.logs[t]+this.logs[e])%this.modulus]}inverse(t){return this.exps[this.modulus-this.logs[t]]}divide(t,e){return this.exps[(this.logs[t]+this.modulus-this.logs[e])%this.modulus]}power(t,e){let n=this.logs[t];return e<0&&(n-=this.modulus),this.exps[n*e%this.modulus]}}(285);class d{constructor(t){this.field=t}mult(t,e){const n=new Array(t.length+e.length-1);for(let r=0;r<t.length;r++)for(let o=0;o<e.length;o++)n[r+o]=this.field.add(n[r+o],this.field.mult(t[r],e[o]));return n}remainder(t,e){if(0==e.length)throw new Error("Division by zero");let n=0;const r=t.length-e.length+1;for(;n<r;){let r=this.field.divide(t[n],e[0]);for(let o=1;o<e.length;o++)t[n+o]=this.field.subtract(t[n+o],this.field.mult(e[o],r));n+=1}return t.slice(r)}generator(t){let e=[1];for(let n=0;n<t;n++)e=this.mult(e,[1,this.field.power(2,n)]);return e}}function a(t,e){return(t<<=h(e))^function(t,e){let n=h(t);const r=h(e);for(;n>=r;)n=h(t^=e<<n-r);return t}(t,e)}class g{constructor(t){this.extra_symbols=t,this.ring=new d(f),this.generator=this.ring.generator(t)}encode(t){let e=new Uint8Array(t.length+this.extra_symbols);for(let n=0;n<t.length;n++)e[n]=t[n];for(let n=0;n<this.extra_symbols;n++)e[t.length+n]=0;return this.ring.remainder(e,this.generator)}}const m=[function(t,e){},function(t,e){},function(t,e){for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(r>255)throw new Error("Invalid character");t.write_bits(r,8)}},function(t,e){}];function y(t){return t?1:2}function p(t,e,n,r,o){for(let l=0;l<r;l++)for(let i=0;i<r;i++)t[e+l][n+i]=o}function w(t,e,n){p(t,e,n,7,1),p(t,e+1,n+1,5,2),p(t,e+2,n+2,3,1)}function b(t,r,h,f){const d=function(t,e,n){const r=4*t+17,l=[];for(let t=0;t<r;t++){const t=new Uint8Array(r);t.fill(0),l.push(t)}p(l,0,0,8,2),p(l,r-8,0,8,2),p(l,0,r-8,8,2),w(l,0,0),w(l,r-7,0),w(l,0,r-7);for(let t=8;t<r-8;t++){const e=t%2==0?1:2;l[t][6]=e,l[6][t]=e}const i=o(t);for(let t=0;t<i.length;t++){const[e,n]=i[t];p(l,e-2,n-2,5,1),p(l,e-1,n-1,3,2),l[e][n]=1}if(t>=7){const e=function(t){return a(t,7973)}(t);!function(t,e){const n=t.length;let r=17;for(let o=0;o<6;o++)for(let l=0;l<3;l++)t[5-o][n-9-l]=y(e>>r&1),t[n-9-l][5-o]=y(e>>r&1),r-=1}(l,e)}const s=function(t,e){return 21522^a(t<<3^e,1335)}(e,n);return function(t,e){const n=t.length;for(let n=0;n<6;n++)t[n][8]=y(e>>14-n&1);for(let n=0;n<2;n++)t[7+n][8]=y(e>>8-n&1);t[8][7]=y(e>>6&1);for(let n=0;n<6;n++)t[8][5-n]=y(e>>5-n&1);for(let r=0;r<7;r++)t[8][n-1-r]=y(e>>14-r&1);for(let r=0;r<8;r++)t[n-8+r][8]=y(e>>7-r&1)}(l,s),l[8][r-8]=1,l}(t,r,h),b=function(t,r,o,l){const u=e(r,o);let h=u[u.length-1],f=0;for(let t=0;t<u.length;t++)f+=u[t];let d=new c(f);const a=8*f;d.write_bits(i[2],4);const y=s(r,2);d.write_bits(t.length,y),(0,m[2])(d,t);let p=d.bits_written();if(p>a)throw new Error("Message is too long");const w=Math.min(4,a-p);d.write_bits(0,w);const b=(p+w)%8;b>0&&d.write_bits(0,8-b),p=d.bits_written();let E=!0;for(let t=p;t<a;t+=8)E?d.write_bits(236,8):d.write_bits(17,8),E=!E;const v=[],x=[],I=n(r,o),_=new g(I);let B=0;const q=d.get_bytes();for(let t=0;t<u.length;t++){const e=u[t],n=q.slice(B,B+e);v.push(n),x.push(_.encode(n)),B+=e}const k=new Uint8Array(f+I*x.length);let A=0;for(let t=0;t<h;t++)for(let e=0;e<v.length;e++)t<v[e].length&&(k[A]=v[e][t],A+=1);for(let t=0;t<I;t++)for(let e=0;e<x.length;e++)k[A]=x[e][t],A+=1;return k}(f,t,r);return function(t,e,n){const r=t.length,o=function(t){const e=l[t];return function(t,n,r){return(e(t,n)>0?0:1)^r}}(n);let[i,s]=[r-1,r-1];for(let n=0;n<e.length;n++)for(let l=0;l<8;l++){for(;0!==t[i][s];)[i,s]=u(r,i,s);let c=e[n]>>7-l&1;t[i][s]=y(o(i,s,c)),[i,s]=u(r,i,s)}for(;i>=0;)0===t[i][s]&&(t[i][s]=y(o(i,s,0))),[i,s]=u(r,i,s)}(d,b,h),d}document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("qr-message"),r=document.getElementById("qr-version"),l=document.getElementById("qr-mode"),i=document.getElementById("qr-mask"),c=document.getElementById("qr-canvas"),h=c.getContext("2d"),f=document.getElementById("qr-download"),d=new Array(11);d[1]=document.getElementById("qr-position-patterns"),d[2]=document.getElementById("qr-separator-patterns"),d[3]=document.getElementById("qr-alignment-patterns"),d[4]=document.getElementById("qr-timing-patterns"),d[5]=document.getElementById("qr-format-patterns"),d[6]=document.getElementById("qr-version-patterns"),d[7]=document.getElementById("qr-black-square-patterns"),d[8]=document.getElementById("qr-data-patterns"),d[9]=document.getElementById("qr-error-patterns"),d[10]=document.getElementById("qr-extra-white-patterns");const a=document.getElementById("qr-patterns-show"),g=document.getElementById("qr-patterns-hide"),m=document.getElementById("qr-data-path"),y=document.getElementById("qr-data-groups"),p=["white","blue","cyan","purple","teal","yellow","orange","gray","red","brown","pink"];let w=null,E=null,v=null;function x(){const f=t.value,a=[1,0,3,2][parseInt(l.value)];let g=parseInt(r.value);0===g&&(g=function(t,n,r){let o=1,l=40;for(;l>o;){const r=Math.floor((l+o)/2),i=e(r,n);let u=0;for(let t=0;t<i.length;t++)u+=i[t];u-=1,u-=Math.floor(s(r,2)/8),t>u?o=r+1:l=r}return l}(f.length,a),v!==g&&(E=null,v=g));const x=parseInt(i.value),I=m.checked,_=y.checked;let B=!1;const q={};for(let t=1;t<11;t++)q[t]=d[t].checked,q[t]&&(B=!0);let k;try{k=null!==w?w:b(g,a,x,f),w=k}catch(t){return h.clearRect(0,0,c.width,c.height),h.fillStyle="red",h.beginPath(),h.arc(c.width/2,c.height/2,c.width/4,0,2*Math.PI),h.fill(),h.fillStyle="black",h.font="24px sans-serif",h.textAlign="center",h.textBaseline="bottom",h.fillText(t.message,c.width/2,c.height-60),h.beginPath(),h.strokeStyle="white",h.lineWidth=20,h.moveTo(c.width/2-60,c.height/2-60),h.lineTo(c.width/2+60,c.height/2+60),h.moveTo(c.width/2+60,c.height/2-60),h.lineTo(c.width/2-60,c.height/2+60),void h.stroke()}const A=k.length,L=Math.min(Math.floor(720/A),15);c.width=A*L+80,c.height=A*L+80,h.fillStyle="white",h.fillRect(0,0,c.width,c.height),h.fillStyle="black";for(let t=0;t<A;t++)for(let e=0;e<A;e++)1===k[t][e]&&h.fillRect(40+t*L,40+e*L,L,L);if(B||I||_){const t=null!==E?E:function(t,r){const l=4*t+17,i=new Array(l);for(let t=0;t<l;t++){const e=new Uint8Array(l);e.fill(0),i[t]=e}for(let t=0;t<8;t++)for(let e=0;e<8;e++)i[t][e]=2,i[t][l-1-e]=2,i[l-1-t][e]=2;for(let t=0;t<7;t++)for(let e=0;e<7;e++)i[t][e]=1,i[t][l-1-e]=1,i[l-1-t][e]=1;for(let t=0;t<8;t++)i[t][8]=5,i[8][t]=5,i[l-1-t][8]=5,i[8][l-1-t]=5;if(i[8][8]=5,t>=7)for(let t=0;t<6;t++)for(let e=0;e<3;e++)i[t][l-9-e]=6,i[l-9-e][t]=6;for(let t=8;t<l-8;t++)i[t][6]=4,i[6][t]=4;i[8][l-8]=7;const s=o(t);for(let t=0;t<s.length;t++){const e=s[t][0],n=s[t][1];for(let t=-2;t<3;t++)for(let r=-2;r<3;r++)i[e+t][n+r]=3}const c=[],h=[],f=e(t,r);let d=0;for(let t=0;t<f.length;t++)d+=f[t];const a=n(t,r)*f.length;let[g,m]=[l-1,l-1];for(let t=0;t<d;t++){const t=[];for(let e=0;e<8;e++){for(;0!==i[g][m];)[g,m]=u(l,g,m);i[g][m]=8,t.push([g,m]),[g,m]=u(l,g,m)}c.push(t)}for(let t=0;t<a;t++){const t=[];for(let e=0;e<8;e++){for(;0!==i[g][m];)[g,m]=u(l,g,m);i[g][m]=9,t.push([g,m]),[g,m]=u(l,g,m)}h.push(t)}for(;g>=0;)0===i[g][m]&&(i[g][m]=10),[g,m]=u(l,g,m);return[i,c,h]}(g,a);if(E=t,B){const e=t[0];h.globalAlpha=.5;for(let t=0;t<A;t++)for(let n=0;n<A;n++){const r=e[t][n];q[r]&&(h.fillStyle=p[r],h.fillRect(40+t*L,40+n*L,L,L))}h.globalAlpha=1}if(I){let e=null,n=null;for(const r of t[1])for(const[t,o]of r)null!==e&&(h.beginPath(),h.strokeStyle="red",h.lineWidth=2,h.moveTo(40+e*L+L/2,40+n*L+L/2),h.lineTo(40+t*L+L/2,40+o*L+L/2),h.stroke()),e=t,n=o;for(const r of t[2])for(const[t,o]of r)h.beginPath(),h.strokeStyle="red",h.lineWidth=2,h.moveTo(40+e*L+L/2,40+n*L+L/2),h.lineTo(40+t*L+L/2,40+o*L+L/2),h.stroke(),e=t,n=o}if(_){const e=[0,0,1,0],n=[1,1,1,0],r=[1,0,0,0],o=[1,0,1,1];for(let l=1;l<=2;l++)for(const i of t[l])for(let t=0;t<i.length;t++){const[l,s]=i[t],u=[!0,!0,!0,!0];for(let t=0;t<i.length;t++){const[e,n]=i[t];l===e?s===n-1?u[0]=!1:s===n+1&&(u[1]=!1):s===n&&(l===e-1?u[2]=!1:l===e+1&&(u[3]=!1))}for(let t=0;t<4;t++)u[t]&&(h.beginPath(),h.strokeStyle="red",h.lineWidth=2,h.moveTo(40+(l+e[t])*L,40+(s+r[t])*L),h.lineTo(40+(l+n[t])*L,40+(s+o[t])*L),h.stroke())}}}}t.addEventListener("input",(function(){w=null,x()})),r.addEventListener("input",(function(){w=null,E=null;let t=this.value;"0"===t&&(t="Min"),this.nextElementSibling.value=t,x()})),l.addEventListener("input",(function(){w=null,E=null,this.nextElementSibling.value=["L","M","Q","H"][parseInt(this.value)],x()})),i.addEventListener("input",(function(){w=null,this.nextElementSibling.value=this.value,x()})),f.addEventListener("click",(function(){const t=c.toDataURL("image/png");this.download="qr.png",this.href=t}),!1),a.addEventListener("click",(function(t){const e=document.getElementById("patterns-controls").getElementsByTagName("input");for(let t=0;t<e.length;t++)e.item(t).checked=!0;return x(),t.preventDefault(),!1}),!1),g.addEventListener("click",(function(t){const e=document.getElementById("patterns-controls").getElementsByTagName("input");for(let t=0;t<e.length;t++)e.item(t).checked=!1;return x(),t.preventDefault(),!1}),!1);for(let t=1;t<d.length;t++)d[t].addEventListener("change",x);m.addEventListener("change",x),y.addEventListener("change",x),x()}))})();