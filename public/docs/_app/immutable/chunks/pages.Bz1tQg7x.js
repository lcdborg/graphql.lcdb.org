var Ym=Object.defineProperty;var Wm=(r,n,t)=>n in r?Ym(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t;var Se=(r,n,t)=>(Wm(r,typeof n!="symbol"?n+"":n,t),t),Qm=(r,n,t)=>{if(!n.has(r))throw TypeError("Cannot "+t)};var io=(r,n,t)=>{if(n.has(r))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(r):n.set(r,t)};var os=(r,n,t)=>(Qm(r,n,"access private method"),t);import{b as Is}from"./paths.Bc4mqMla.js";import{S as Le,i as Re,a as ee,t as ae,g as It,c as yt,b as qt,d as ur,m as zt,e as jt}from"./index.C5OLbMYN.js";import{s as ye,e as en,i as Fe,d as H,r as Kn,u as af,f as we,g as xe,h as Ve,a4 as bs,x as et,y as nt,z as tt,R as ui,q as Dl,l as Ao,m as So,n as To,H as Je,j as hn,G as Tt,a as Io,c as yo,U as Jm,V as Hm,a7 as vl,o as Xm}from"./scheduler.X4qejJLZ.js";function ut(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function of(r,n){const t={},s={},a={$$scope:1};let u=r.length;for(;u--;){const c=r[u],f=n[u];if(f){for(const d in c)d in f||(s[d]=1);for(const d in f)a[d]||(t[d]=f[d],a[d]=1);r[u]=f}else for(const d in c)a[d]=1}for(const c in s)c in t||(t[c]=void 0);return t}function EE(r){return typeof r=="object"&&r!==null?r:{}}function po(...r){return"/"+r.flatMap(n=>n.split("/")).filter(n=>!!n).join("/")}function ho(r){return r.startsWith("/")||r.startsWith("#")}function uf(r,n){return n.slug(r).replace(/--+/g,"-")}function so(r){let n,t;const s=r[5].default,a=Kn(s,r,r[4],null);let u=[{id:r[1]}],c={};for(let f=0;f<u.length;f+=1)c=af(c,u[f]);return{c(){n=we(`h${r[0].depth}`),a&&a.c(),this.h()},l(f){n=xe(f,(`h${r[0].depth}`||"null").toUpperCase(),{id:!0});var d=Ve(n);a&&a.l(d),d.forEach(H),this.h()},h(){bs(`h${r[0].depth}`)(n,c)},m(f,d){Fe(f,n,d),a&&a.m(n,null),t=!0},p(f,d){a&&a.p&&(!t||d&16)&&et(a,s,f,f[4],t?tt(s,f[4],d,null):nt(f[4]),null),bs(`h${f[0].depth}`)(n,c=of(u,[(!t||d&2)&&{id:f[1]}]))},i(f){t||(ee(a,f),t=!0)},o(f){ae(a,f),t=!1},d(f){f&&H(n),a&&a.d(f)}}}function Zm(r){let n=`h${r[0].depth}`,t,s,a=`h${r[0].depth}`&&so(r);return{c(){a&&a.c(),t=en()},l(u){a&&a.l(u),t=en()},m(u,c){a&&a.m(u,c),Fe(u,t,c),s=!0},p(u,[c]){`h${u[0].depth}`?n?ye(n,`h${u[0].depth}`)?(a.d(1),a=so(u),n=`h${u[0].depth}`,a.c(),a.m(t.parentNode,t)):a.p(u,c):(a=so(u),n=`h${u[0].depth}`,a.c(),a.m(t.parentNode,t)):n&&(a.d(1),a=null,n=`h${u[0].depth}`)},i(u){s||(ee(a,u),s=!0)},o(u){ae(a,u),s=!1},d(u){u&&H(t),a&&a.d(u)}}}function Km(r,n,t){let{$$slots:s={},$$scope:a}=n,{token:u}=n,{options:c}=n;const f=void 0;let d;return r.$$set=b=>{"token"in b&&t(0,u=b.token),"options"in b&&t(2,c=b.options),"$$scope"in b&&t(4,a=b.$$scope)},r.$$.update=()=>{r.$$.dirty&5&&t(1,d=uf(u.text,c.slugger))},[u,d,c,f,a,s]}class eF extends Le{constructor(n){super(),Re(this,n,Km,Zm,ye,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function nF(r){let n,t;const s=r[4].default,a=Kn(s,r,r[3],null);return{c(){n=we("blockquote"),a&&a.c()},l(u){n=xe(u,"BLOCKQUOTE",{});var c=Ve(n);a&&a.l(c),c.forEach(H)},m(u,c){Fe(u,n,c),a&&a.m(n,null),t=!0},p(u,[c]){a&&a.p&&(!t||c&8)&&et(a,s,u,u[3],t?tt(s,u[3],c,null):nt(u[3]),null)},i(u){t||(ee(a,u),t=!0)},o(u){ae(a,u),t=!1},d(u){u&&H(n),a&&a.d(u)}}}function tF(r,n,t){let{$$slots:s={},$$scope:a}=n;const u=void 0,c=void 0,f=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[u,c,f,a,s]}class rF extends Le{constructor(n){super(),Re(this,n,tF,nF,ye,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function El(r,n,t){const s=r.slice();return s[3]=n[t],s}function Al(r){let n,t,s=ut(r[0]),a=[];for(let c=0;c<s.length;c+=1)a[c]=Sl(El(r,s,c));const u=c=>ae(a[c],1,1,()=>{a[c]=null});return{c(){for(let c=0;c<a.length;c+=1)a[c].c();n=en()},l(c){for(let f=0;f<a.length;f+=1)a[f].l(c);n=en()},m(c,f){for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(c,f);Fe(c,n,f),t=!0},p(c,f){if(f&7){s=ut(c[0]);let d;for(d=0;d<s.length;d+=1){const b=El(c,s,d);a[d]?(a[d].p(b,f),ee(a[d],1)):(a[d]=Sl(b),a[d].c(),ee(a[d],1),a[d].m(n.parentNode,n))}for(It(),d=s.length;d<a.length;d+=1)u(d);yt()}},i(c){if(!t){for(let f=0;f<s.length;f+=1)ee(a[f]);t=!0}},o(c){a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)ae(a[f]);t=!1},d(c){c&&H(n),ui(a,c)}}}function Sl(r){let n,t;return n=new cf({props:{token:r[3],renderers:r[1],options:r[2]}}),{c(){qt(n.$$.fragment)},l(s){ur(n.$$.fragment,s)},m(s,a){zt(n,s,a),t=!0},p(s,a){const u={};a&1&&(u.token=s[3]),a&2&&(u.renderers=s[1]),a&4&&(u.options=s[2]),n.$set(u)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){ae(n.$$.fragment,s),t=!1},d(s){jt(n,s)}}}function iF(r){let n,t,s=r[0]&&Al(r);return{c(){s&&s.c(),n=en()},l(a){s&&s.l(a),n=en()},m(a,u){s&&s.m(a,u),Fe(a,n,u),t=!0},p(a,[u]){a[0]?s?(s.p(a,u),u&1&&ee(s,1)):(s=Al(a),s.c(),ee(s,1),s.m(n.parentNode,n)):s&&(It(),ae(s,1,1,()=>{s=null}),yt())},i(a){t||(ee(s),t=!0)},o(a){ae(s),t=!1},d(a){a&&H(n),s&&s.d(a)}}}function sF(r,n,t){let{tokens:s}=n,{renderers:a}=n,{options:u}=n;return r.$$set=c=>{"tokens"in c&&t(0,s=c.tokens),"renderers"in c&&t(1,a=c.renderers),"options"in c&&t(2,u=c.options)},[s,a,u]}class ys extends Le{constructor(n){super(),Re(this,n,sF,iF,ye,{tokens:0,renderers:1,options:2})}}function Tl(r){let n,t,s;var a=r[1][r[0].type];function u(c,f){return{props:{token:c[0],options:c[2],renderers:c[1],$$slots:{default:[uF]},$$scope:{ctx:c}}}}return a&&(n=Dl(a,u(r))),{c(){n&&qt(n.$$.fragment),t=en()},l(c){n&&ur(n.$$.fragment,c),t=en()},m(c,f){n&&zt(n,c,f),Fe(c,t,f),s=!0},p(c,f){if(f&3&&a!==(a=c[1][c[0].type])){if(n){It();const d=n;ae(d.$$.fragment,1,0,()=>{jt(d,1)}),yt()}a?(n=Dl(a,u(c)),qt(n.$$.fragment),ee(n.$$.fragment,1),zt(n,t.parentNode,t)):n=null}else if(a){const d={};f&1&&(d.token=c[0]),f&4&&(d.options=c[2]),f&2&&(d.renderers=c[1]),f&15&&(d.$$scope={dirty:f,ctx:c}),n.$set(d)}},i(c){s||(n&&ee(n.$$.fragment,c),s=!0)},o(c){n&&ae(n.$$.fragment,c),s=!1},d(c){c&&H(t),n&&jt(n,c)}}}function aF(r){let n=r[0].raw+"",t;return{c(){t=Ao(n)},l(s){t=So(s,n)},m(s,a){Fe(s,t,a)},p(s,a){a&1&&n!==(n=s[0].raw+"")&&To(t,n)},i:Je,o:Je,d(s){s&&H(t)}}}function oF(r){let n,t;return n=new ys({props:{tokens:r[0].tokens,renderers:r[1],options:r[2]}}),{c(){qt(n.$$.fragment)},l(s){ur(n.$$.fragment,s)},m(s,a){zt(n,s,a),t=!0},p(s,a){const u={};a&1&&(u.tokens=s[0].tokens),a&2&&(u.renderers=s[1]),a&4&&(u.options=s[2]),n.$set(u)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){ae(n.$$.fragment,s),t=!1},d(s){jt(n,s)}}}function uF(r){let n,t,s,a;const u=[oF,aF],c=[];function f(d,b){return"tokens"in d[0]&&d[0].tokens?0:1}return n=f(r),t=c[n]=u[n](r),{c(){t.c(),s=en()},l(d){t.l(d),s=en()},m(d,b){c[n].m(d,b),Fe(d,s,b),a=!0},p(d,b){let m=n;n=f(d),n===m?c[n].p(d,b):(It(),ae(c[m],1,1,()=>{c[m]=null}),yt(),t=c[n],t?t.p(d,b):(t=c[n]=u[n](d),t.c()),ee(t,1),t.m(s.parentNode,s))},i(d){a||(ee(t),a=!0)},o(d){ae(t),a=!1},d(d){d&&H(s),c[n].d(d)}}}function cF(r){let n,t,s=r[1][r[0].type]&&Tl(r);return{c(){s&&s.c(),n=en()},l(a){s&&s.l(a),n=en()},m(a,u){s&&s.m(a,u),Fe(a,n,u),t=!0},p(a,[u]){a[1][a[0].type]?s?(s.p(a,u),u&3&&ee(s,1)):(s=Tl(a),s.c(),ee(s,1),s.m(n.parentNode,n)):s&&(It(),ae(s,1,1,()=>{s=null}),yt())},i(a){t||(ee(s),t=!0)},o(a){ae(s),t=!1},d(a){a&&H(n),s&&s.d(a)}}}function lF(r,n,t){let{token:s}=n,{renderers:a}=n,{options:u}=n;return r.$$set=c=>{"token"in c&&t(0,s=c.token),"renderers"in c&&t(1,a=c.renderers),"options"in c&&t(2,u=c.options)},[s,a,u]}class cf extends Le{constructor(n){super(),Re(this,n,lF,cF,ye,{token:0,renderers:1,options:2})}}function Il(r,n,t){const s=r.slice();return s[4]=n[t],s}function yl(r){let n,t;return n=new cf({props:{token:{...r[4]},options:r[1],renderers:r[2]}}),{c(){qt(n.$$.fragment)},l(s){ur(n.$$.fragment,s)},m(s,a){zt(n,s,a),t=!0},p(s,a){const u={};a&1&&(u.token={...s[4]}),a&2&&(u.options=s[1]),a&4&&(u.renderers=s[2]),n.$set(u)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){ae(n.$$.fragment,s),t=!1},d(s){jt(n,s)}}}function ao(r){let n,t,s,a=ut(r[0].items),u=[];for(let b=0;b<a.length;b+=1)u[b]=yl(Il(r,a,b));const c=b=>ae(u[b],1,1,()=>{u[b]=null});let f=[{start:t=r[0].start||1}],d={};for(let b=0;b<f.length;b+=1)d=af(d,f[b]);return{c(){n=we(r[3]);for(let b=0;b<u.length;b+=1)u[b].c();this.h()},l(b){n=xe(b,(r[3]||"null").toUpperCase(),{start:!0});var m=Ve(n);for(let v=0;v<u.length;v+=1)u[v].l(m);m.forEach(H),this.h()},h(){bs(r[3])(n,d)},m(b,m){Fe(b,n,m);for(let v=0;v<u.length;v+=1)u[v]&&u[v].m(n,null);s=!0},p(b,m){if(m&7){a=ut(b[0].items);let v;for(v=0;v<a.length;v+=1){const N=Il(b,a,v);u[v]?(u[v].p(N,m),ee(u[v],1)):(u[v]=yl(N),u[v].c(),ee(u[v],1),u[v].m(n,null))}for(It(),v=a.length;v<u.length;v+=1)c(v);yt()}bs(b[3])(n,d=of(f,[(!s||m&1&&t!==(t=b[0].start||1))&&{start:t}]))},i(b){if(!s){for(let m=0;m<a.length;m+=1)ee(u[m]);s=!0}},o(b){u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)ae(u[m]);s=!1},d(b){b&&H(n),ui(u,b)}}}function fF(r){let n=r[3],t,s=r[3]&&ao(r);return{c(){s&&s.c(),t=en()},l(a){s&&s.l(a),t=en()},m(a,u){s&&s.m(a,u),Fe(a,t,u)},p(a,[u]){a[3]?n?ye(n,a[3])?(s.d(1),s=ao(a),n=a[3],s.c(),s.m(t.parentNode,t)):s.p(a,u):(s=ao(a),n=a[3],s.c(),s.m(t.parentNode,t)):n&&(s.d(1),s=null,n=a[3])},i:Je,o(a){ae(s,a)},d(a){a&&H(t),s&&s.d(a)}}}function pF(r,n,t){let{token:s}=n,{options:a}=n,{renderers:u}=n,c;return r.$$set=f=>{"token"in f&&t(0,s=f.token),"options"in f&&t(1,a=f.options),"renderers"in f&&t(2,u=f.renderers)},r.$$.update=()=>{r.$$.dirty&1&&t(3,c=s.ordered?"ol":"ul")},[s,a,u,c]}class dF extends Le{constructor(n){super(),Re(this,n,pF,fF,ye,{token:0,options:1,renderers:2})}}function hF(r){let n,t;const s=r[4].default,a=Kn(s,r,r[3],null);return{c(){n=we("li"),a&&a.c()},l(u){n=xe(u,"LI",{});var c=Ve(n);a&&a.l(c),c.forEach(H)},m(u,c){Fe(u,n,c),a&&a.m(n,null),t=!0},p(u,[c]){a&&a.p&&(!t||c&8)&&et(a,s,u,u[3],t?tt(s,u[3],c,null):nt(u[3]),null)},i(u){t||(ee(a,u),t=!0)},o(u){ae(a,u),t=!1},d(u){u&&H(n),a&&a.d(u)}}}function _F(r,n,t){let{$$slots:s={},$$scope:a}=n;const u=void 0,c=void 0,f=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[u,c,f,a,s]}class gF extends Le{constructor(n){super(),Re(this,n,_F,hF,ye,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function bF(r){let n;return{c(){n=we("br")},l(t){n=xe(t,"BR",{})},m(t,s){Fe(t,n,s)},p:Je,i:Je,o:Je,d(t){t&&H(n)}}}function mF(r,n,t){return[void 0,void 0,void 0]}class FF extends Le{constructor(n){super(),Re(this,n,mF,bF,ye,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function DF(r){let n,t,s=r[0].text+"",a,u;return{c(){n=we("pre"),t=we("code"),a=Ao(s),this.h()},l(c){n=xe(c,"PRE",{});var f=Ve(n);t=xe(f,"CODE",{class:!0});var d=Ve(t);a=So(d,s),d.forEach(H),f.forEach(H),this.h()},h(){hn(t,"class",u=`lang-${r[0].lang}`)},m(c,f){Fe(c,n,f),Tt(n,t),Tt(t,a)},p(c,[f]){f&1&&s!==(s=c[0].text+"")&&To(a,s),f&1&&u!==(u=`lang-${c[0].lang}`)&&hn(t,"class",u)},i:Je,o:Je,d(c){c&&H(n)}}}function vF(r,n,t){let{token:s}=n;const a=void 0,u=void 0;return r.$$set=c=>{"token"in c&&t(0,s=c.token)},[s,a,u]}class EF extends Le{constructor(n){super(),Re(this,n,vF,DF,ye,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function AF(r){let n,t=r[0].raw.slice(1,r[0].raw.length-1)+"",s;return{c(){n=we("code"),s=Ao(t)},l(a){n=xe(a,"CODE",{});var u=Ve(n);s=So(u,t),u.forEach(H)},m(a,u){Fe(a,n,u),Tt(n,s)},p(a,[u]){u&1&&t!==(t=a[0].raw.slice(1,a[0].raw.length-1)+"")&&To(s,t)},i:Je,o:Je,d(a){a&&H(n)}}}function SF(r,n,t){let{token:s}=n;const a=void 0,u=void 0;return r.$$set=c=>{"token"in c&&t(0,s=c.token)},[s,a,u]}class TF extends Le{constructor(n){super(),Re(this,n,SF,AF,ye,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Nl(r,n,t){const s=r.slice();return s[3]=n[t],s}function Cl(r,n,t){const s=r.slice();return s[6]=n[t],s}function wl(r,n,t){const s=r.slice();return s[9]=n[t],s}function xl(r){let n,t,s,a;return t=new ys({props:{tokens:r[9].tokens,options:r[1],renderers:r[2]}}),{c(){n=we("th"),qt(t.$$.fragment),s=Io(),this.h()},l(u){n=xe(u,"TH",{scope:!0});var c=Ve(n);ur(t.$$.fragment,c),s=yo(c),c.forEach(H),this.h()},h(){hn(n,"scope","col")},m(u,c){Fe(u,n,c),zt(t,n,null),Tt(n,s),a=!0},p(u,c){const f={};c&1&&(f.tokens=u[9].tokens),c&2&&(f.options=u[1]),c&4&&(f.renderers=u[2]),t.$set(f)},i(u){a||(ee(t.$$.fragment,u),a=!0)},o(u){ae(t.$$.fragment,u),a=!1},d(u){u&&H(n),jt(t)}}}function kl(r){let n,t,s;return t=new ys({props:{tokens:r[6].tokens,options:r[1],renderers:r[2]}}),{c(){n=we("td"),qt(t.$$.fragment)},l(a){n=xe(a,"TD",{});var u=Ve(n);ur(t.$$.fragment,u),u.forEach(H)},m(a,u){Fe(a,n,u),zt(t,n,null),s=!0},p(a,u){const c={};u&1&&(c.tokens=a[6].tokens),u&2&&(c.options=a[1]),u&4&&(c.renderers=a[2]),t.$set(c)},i(a){s||(ee(t.$$.fragment,a),s=!0)},o(a){ae(t.$$.fragment,a),s=!1},d(a){a&&H(n),jt(t)}}}function Ol(r){let n,t,s,a=ut(r[3]),u=[];for(let f=0;f<a.length;f+=1)u[f]=kl(Cl(r,a,f));const c=f=>ae(u[f],1,1,()=>{u[f]=null});return{c(){n=we("tr");for(let f=0;f<u.length;f+=1)u[f].c();t=Io()},l(f){n=xe(f,"TR",{});var d=Ve(n);for(let b=0;b<u.length;b+=1)u[b].l(d);t=yo(d),d.forEach(H)},m(f,d){Fe(f,n,d);for(let b=0;b<u.length;b+=1)u[b]&&u[b].m(n,null);Tt(n,t),s=!0},p(f,d){if(d&7){a=ut(f[3]);let b;for(b=0;b<a.length;b+=1){const m=Cl(f,a,b);u[b]?(u[b].p(m,d),ee(u[b],1)):(u[b]=kl(m),u[b].c(),ee(u[b],1),u[b].m(n,t))}for(It(),b=a.length;b<u.length;b+=1)c(b);yt()}},i(f){if(!s){for(let d=0;d<a.length;d+=1)ee(u[d]);s=!0}},o(f){u=u.filter(Boolean);for(let d=0;d<u.length;d+=1)ae(u[d]);s=!1},d(f){f&&H(n),ui(u,f)}}}function IF(r){let n,t,s,a,u,c,f=ut(r[0].header),d=[];for(let x=0;x<f.length;x+=1)d[x]=xl(wl(r,f,x));const b=x=>ae(d[x],1,1,()=>{d[x]=null});let m=ut(r[0].rows),v=[];for(let x=0;x<m.length;x+=1)v[x]=Ol(Nl(r,m,x));const N=x=>ae(v[x],1,1,()=>{v[x]=null});return{c(){n=we("table"),t=we("thead"),s=we("tr");for(let x=0;x<d.length;x+=1)d[x].c();a=Io(),u=we("tbody");for(let x=0;x<v.length;x+=1)v[x].c()},l(x){n=xe(x,"TABLE",{});var L=Ve(n);t=xe(L,"THEAD",{});var R=Ve(t);s=xe(R,"TR",{});var J=Ve(s);for(let Me=0;Me<d.length;Me+=1)d[Me].l(J);J.forEach(H),R.forEach(H),a=yo(L),u=xe(L,"TBODY",{});var pe=Ve(u);for(let Me=0;Me<v.length;Me+=1)v[Me].l(pe);pe.forEach(H),L.forEach(H)},m(x,L){Fe(x,n,L),Tt(n,t),Tt(t,s);for(let R=0;R<d.length;R+=1)d[R]&&d[R].m(s,null);Tt(n,a),Tt(n,u);for(let R=0;R<v.length;R+=1)v[R]&&v[R].m(u,null);c=!0},p(x,[L]){if(L&7){f=ut(x[0].header);let R;for(R=0;R<f.length;R+=1){const J=wl(x,f,R);d[R]?(d[R].p(J,L),ee(d[R],1)):(d[R]=xl(J),d[R].c(),ee(d[R],1),d[R].m(s,null))}for(It(),R=f.length;R<d.length;R+=1)b(R);yt()}if(L&7){m=ut(x[0].rows);let R;for(R=0;R<m.length;R+=1){const J=Nl(x,m,R);v[R]?(v[R].p(J,L),ee(v[R],1)):(v[R]=Ol(J),v[R].c(),ee(v[R],1),v[R].m(u,null))}for(It(),R=m.length;R<v.length;R+=1)N(R);yt()}},i(x){if(!c){for(let L=0;L<f.length;L+=1)ee(d[L]);for(let L=0;L<m.length;L+=1)ee(v[L]);c=!0}},o(x){d=d.filter(Boolean);for(let L=0;L<d.length;L+=1)ae(d[L]);v=v.filter(Boolean);for(let L=0;L<v.length;L+=1)ae(v[L]);c=!1},d(x){x&&H(n),ui(d,x),ui(v,x)}}}function yF(r,n,t){let{token:s}=n,{options:a}=n,{renderers:u}=n;return r.$$set=c=>{"token"in c&&t(0,s=c.token),"options"in c&&t(1,a=c.options),"renderers"in c&&t(2,u=c.renderers)},[s,a,u]}class NF extends Le{constructor(n){super(),Re(this,n,yF,IF,ye,{token:0,options:1,renderers:2})}}function CF(r){let n,t=r[0].text+"",s;return{c(){n=new Jm(!1),s=en(),this.h()},l(a){n=Hm(a,!1),s=en(),this.h()},h(){n.a=s},m(a,u){n.m(t,a,u),Fe(a,s,u)},p(a,[u]){u&1&&t!==(t=a[0].text+"")&&n.p(t)},i:Je,o:Je,d(a){a&&(H(s),n.d())}}}function wF(r,n,t){let{token:s}=n;const a=void 0,u=void 0;return r.$$set=c=>{"token"in c&&t(0,s=c.token)},[s,a,u]}class xF extends Le{constructor(n){super(),Re(this,n,wF,CF,ye,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function kF(r){let n,t;const s=r[4].default,a=Kn(s,r,r[3],null);return{c(){n=we("p"),a&&a.c()},l(u){n=xe(u,"P",{});var c=Ve(n);a&&a.l(c),c.forEach(H)},m(u,c){Fe(u,n,c),a&&a.m(n,null),t=!0},p(u,[c]){a&&a.p&&(!t||c&8)&&et(a,s,u,u[3],t?tt(s,u[3],c,null):nt(u[3]),null)},i(u){t||(ee(a,u),t=!0)},o(u){ae(a,u),t=!1},d(u){u&&H(n),a&&a.d(u)}}}function OF(r,n,t){let{$$slots:s={},$$scope:a}=n;const u=void 0,c=void 0,f=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[u,c,f,a,s]}class LF extends Le{constructor(n){super(),Re(this,n,OF,kF,ye,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function RF(r){let n,t,s,a;const u=r[4].default,c=Kn(u,r,r[3],null);return{c(){n=we("a"),c&&c.c(),this.h()},l(f){n=xe(f,"A",{href:!0,title:!0});var d=Ve(n);c&&c.l(d),d.forEach(H),this.h()},h(){hn(n,"href",t=ho(r[0].href)?po(r[1].baseUrl,r[0].href):r[0].href),hn(n,"title",s=r[0].title)},m(f,d){Fe(f,n,d),c&&c.m(n,null),a=!0},p(f,[d]){c&&c.p&&(!a||d&8)&&et(c,u,f,f[3],a?tt(u,f[3],d,null):nt(f[3]),null),(!a||d&3&&t!==(t=ho(f[0].href)?po(f[1].baseUrl,f[0].href):f[0].href))&&hn(n,"href",t),(!a||d&1&&s!==(s=f[0].title))&&hn(n,"title",s)},i(f){a||(ee(c,f),a=!0)},o(f){ae(c,f),a=!1},d(f){f&&H(n),c&&c.d(f)}}}function UF(r,n,t){let{$$slots:s={},$$scope:a}=n,{token:u}=n,{options:c}=n;const f=void 0;return r.$$set=d=>{"token"in d&&t(0,u=d.token),"options"in d&&t(1,c=d.options),"$$scope"in d&&t(3,a=d.$$scope)},[u,c,f,a,s]}class BF extends Le{constructor(n){super(),Re(this,n,UF,RF,ye,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function PF(r){let n;const t=r[4].default,s=Kn(t,r,r[3],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,u){s&&s.m(a,u),n=!0},p(a,[u]){s&&s.p&&(!n||u&8)&&et(s,t,a,a[3],n?tt(t,a[3],u,null):nt(a[3]),null)},i(a){n||(ee(s,a),n=!0)},o(a){ae(s,a),n=!1},d(a){s&&s.d(a)}}}function $F(r,n,t){let{$$slots:s={},$$scope:a}=n;const u=void 0,c=void 0,f=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[u,c,f,a,s]}class MF extends Le{constructor(n){super(),Re(this,n,$F,PF,ye,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function GF(r){let n,t;const s=r[4].default,a=Kn(s,r,r[3],null);return{c(){n=we("dfn"),a&&a.c()},l(u){n=xe(u,"DFN",{});var c=Ve(n);a&&a.l(c),c.forEach(H)},m(u,c){Fe(u,n,c),a&&a.m(n,null),t=!0},p(u,[c]){a&&a.p&&(!t||c&8)&&et(a,s,u,u[3],t?tt(s,u[3],c,null):nt(u[3]),null)},i(u){t||(ee(a,u),t=!0)},o(u){ae(a,u),t=!1},d(u){u&&H(n),a&&a.d(u)}}}function VF(r,n,t){let{$$slots:s={},$$scope:a}=n;const u=void 0,c=void 0,f=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[u,c,f,a,s]}class qF extends Le{constructor(n){super(),Re(this,n,VF,GF,ye,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function zF(r){let n,t;const s=r[4].default,a=Kn(s,r,r[3],null);return{c(){n=we("del"),a&&a.c()},l(u){n=xe(u,"DEL",{});var c=Ve(n);a&&a.l(c),c.forEach(H)},m(u,c){Fe(u,n,c),a&&a.m(n,null),t=!0},p(u,[c]){a&&a.p&&(!t||c&8)&&et(a,s,u,u[3],t?tt(s,u[3],c,null):nt(u[3]),null)},i(u){t||(ee(a,u),t=!0)},o(u){ae(a,u),t=!1},d(u){u&&H(n),a&&a.d(u)}}}function jF(r,n,t){let{$$slots:s={},$$scope:a}=n;const u=void 0,c=void 0,f=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[u,c,f,a,s]}class YF extends Le{constructor(n){super(),Re(this,n,jF,zF,ye,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function WF(r){let n,t;const s=r[4].default,a=Kn(s,r,r[3],null);return{c(){n=we("em"),a&&a.c()},l(u){n=xe(u,"EM",{});var c=Ve(n);a&&a.l(c),c.forEach(H)},m(u,c){Fe(u,n,c),a&&a.m(n,null),t=!0},p(u,[c]){a&&a.p&&(!t||c&8)&&et(a,s,u,u[3],t?tt(s,u[3],c,null):nt(u[3]),null)},i(u){t||(ee(a,u),t=!0)},o(u){ae(a,u),t=!1},d(u){u&&H(n),a&&a.d(u)}}}function QF(r,n,t){let{$$slots:s={},$$scope:a}=n;const u=void 0,c=void 0,f=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[u,c,f,a,s]}class JF extends Le{constructor(n){super(),Re(this,n,QF,WF,ye,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function HF(r){let n;return{c(){n=we("hr")},l(t){n=xe(t,"HR",{})},m(t,s){Fe(t,n,s)},p:Je,i:Je,o:Je,d(t){t&&H(n)}}}function XF(r,n,t){return[void 0,void 0,void 0]}class ZF extends Le{constructor(n){super(),Re(this,n,XF,HF,ye,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function KF(r){let n,t;const s=r[4].default,a=Kn(s,r,r[3],null);return{c(){n=we("strong"),a&&a.c()},l(u){n=xe(u,"STRONG",{});var c=Ve(n);a&&a.l(c),c.forEach(H)},m(u,c){Fe(u,n,c),a&&a.m(n,null),t=!0},p(u,[c]){a&&a.p&&(!t||c&8)&&et(a,s,u,u[3],t?tt(s,u[3],c,null):nt(u[3]),null)},i(u){t||(ee(a,u),t=!0)},o(u){ae(a,u),t=!1},d(u){u&&H(n),a&&a.d(u)}}}function e1(r,n,t){let{$$slots:s={},$$scope:a}=n;const u=void 0,c=void 0,f=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[u,c,f,a,s]}class n1 extends Le{constructor(n){super(),Re(this,n,e1,KF,ye,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function t1(r){let n,t,s,a;return{c(){n=we("img"),this.h()},l(u){n=xe(u,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){vl(n.src,t=r[0].href)||hn(n,"src",t),hn(n,"title",s=r[0].title),hn(n,"alt",a=r[0].text),hn(n,"class","markdown-image svelte-z38cge")},m(u,c){Fe(u,n,c)},p(u,[c]){c&1&&!vl(n.src,t=u[0].href)&&hn(n,"src",t),c&1&&s!==(s=u[0].title)&&hn(n,"title",s),c&1&&a!==(a=u[0].text)&&hn(n,"alt",a)},i:Je,o:Je,d(u){u&&H(n)}}}function r1(r,n,t){let{token:s}=n;const a=void 0,u=void 0;return r.$$set=c=>{"token"in c&&t(0,s=c.token)},[s,a,u]}class i1 extends Le{constructor(n){super(),Re(this,n,r1,t1,ye,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function s1(r){let n;const t=r[4].default,s=Kn(t,r,r[3],null);return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,u){s&&s.m(a,u),n=!0},p(a,[u]){s&&s.p&&(!n||u&8)&&et(s,t,a,a[3],n?tt(t,a[3],u,null):nt(a[3]),null)},i(a){n||(ee(s,a),n=!0)},o(a){ae(s,a),n=!1},d(a){s&&s.d(a)}}}function a1(r,n,t){let{$$slots:s={},$$scope:a}=n;const u=void 0,c=void 0,f=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,a=d.$$scope)},[u,c,f,a,s]}class Ll extends Le{constructor(n){super(),Re(this,n,a1,s1,ye,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function No(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let cr=No();function lf(r){cr=r}const ff=/[&<>"']/,o1=new RegExp(ff.source,"g"),pf=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,u1=new RegExp(pf.source,"g"),c1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Rl=r=>c1[r];function Sn(r,n){if(n){if(ff.test(r))return r.replace(o1,Rl)}else if(pf.test(r))return r.replace(u1,Rl);return r}const l1=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function f1(r){return r.replace(l1,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const p1=/(^|[^\[])\^/g;function me(r,n){let t=typeof r=="string"?r:r.source;n=n||"";const s={replace:(a,u)=>{let c=typeof u=="string"?u:u.source;return c=c.replace(p1,"$1"),t=t.replace(a,c),s},getRegex:()=>new RegExp(t,n)};return s}function Ul(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const si={exec:()=>null};function Bl(r,n){const t=r.replace(/\|/g,(u,c,f)=>{let d=!1,b=c;for(;--b>=0&&f[b]==="\\";)d=!d;return d?"|":" |"}),s=t.split(/ \|/);let a=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),n)if(s.length>n)s.splice(n);else for(;s.length<n;)s.push("");for(;a<s.length;a++)s[a]=s[a].trim().replace(/\\\|/g,"|");return s}function us(r,n,t){const s=r.length;if(s===0)return"";let a=0;for(;a<s;){const u=r.charAt(s-a-1);if(u===n&&!t)a++;else if(u!==n&&t)a++;else break}return r.slice(0,s-a)}function d1(r,n){if(r.indexOf(n[1])===-1)return-1;let t=0;for(let s=0;s<r.length;s++)if(r[s]==="\\")s++;else if(r[s]===n[0])t++;else if(r[s]===n[1]&&(t--,t<0))return s;return-1}function Pl(r,n,t,s){const a=n.href,u=n.title?Sn(n.title):null,c=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){s.state.inLink=!0;const f={type:"link",raw:t,href:a,title:u,text:c,tokens:s.inlineTokens(c)};return s.state.inLink=!1,f}return{type:"image",raw:t,href:a,title:u,text:Sn(c)}}function h1(r,n){const t=r.match(/^(\s+)(?:```)/);if(t===null)return n;const s=t[1];return n.split(`
`).map(a=>{const u=a.match(/^\s+/);if(u===null)return a;const[c]=u;return c.length>=s.length?a.slice(s.length):a}).join(`
`)}class ms{constructor(n){Se(this,"options");Se(this,"rules");Se(this,"lexer");this.options=n||cr}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const s=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?s:us(s,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const s=t[0],a=h1(s,t[3]||"");return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:a}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let s=t[2].trim();if(/#$/.test(s)){const a=us(s,"#");(this.options.pedantic||!a||/ $/.test(a))&&(s=a.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:t[0]}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){const s=us(t[0].replace(/^ *>[ \t]?/gm,""),`
`),a=this.lexer.state.top;this.lexer.state.top=!0;const u=this.lexer.blockTokens(s);return this.lexer.state.top=a,{type:"blockquote",raw:t[0],tokens:u,text:s}}}list(n){let t=this.rules.block.list.exec(n);if(t){let s=t[1].trim();const a=s.length>1,u={type:"list",raw:"",ordered:a,start:a?+s.slice(0,-1):"",loose:!1,items:[]};s=a?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=a?s:"[*+-]");const c=new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`);let f="",d="",b=!1;for(;n;){let m=!1;if(!(t=c.exec(n))||this.rules.block.hr.test(n))break;f=t[0],n=n.substring(f.length);let v=t[2].split(`
`,1)[0].replace(/^\t+/,pe=>" ".repeat(3*pe.length)),N=n.split(`
`,1)[0],x=0;this.options.pedantic?(x=2,d=v.trimStart()):(x=t[2].search(/[^ ]/),x=x>4?1:x,d=v.slice(x),x+=t[1].length);let L=!1;if(!v&&/^ *$/.test(N)&&(f+=N+`
`,n=n.substring(N.length+1),m=!0),!m){const pe=new RegExp(`^ {0,${Math.min(3,x-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Me=new RegExp(`^ {0,${Math.min(3,x-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Ee=new RegExp(`^ {0,${Math.min(3,x-1)}}(?:\`\`\`|~~~)`),Ne=new RegExp(`^ {0,${Math.min(3,x-1)}}#`);for(;n;){const ke=n.split(`
`,1)[0];if(N=ke,this.options.pedantic&&(N=N.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Ee.test(N)||Ne.test(N)||pe.test(N)||Me.test(n))break;if(N.search(/[^ ]/)>=x||!N.trim())d+=`
`+N.slice(x);else{if(L||v.search(/[^ ]/)>=4||Ee.test(v)||Ne.test(v)||Me.test(v))break;d+=`
`+N}!L&&!N.trim()&&(L=!0),f+=ke+`
`,n=n.substring(ke.length+1),v=N.slice(x)}}u.loose||(b?u.loose=!0:/\n *\n *$/.test(f)&&(b=!0));let R=null,J;this.options.gfm&&(R=/^\[[ xX]\] /.exec(d),R&&(J=R[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),u.items.push({type:"list_item",raw:f,task:!!R,checked:J,loose:!1,text:d,tokens:[]}),u.raw+=f}u.items[u.items.length-1].raw=f.trimEnd(),u.items[u.items.length-1].text=d.trimEnd(),u.raw=u.raw.trimEnd();for(let m=0;m<u.items.length;m++)if(this.lexer.state.top=!1,u.items[m].tokens=this.lexer.blockTokens(u.items[m].text,[]),!u.loose){const v=u.items[m].tokens.filter(x=>x.type==="space"),N=v.length>0&&v.some(x=>/\n.*\n/.test(x.raw));u.loose=N}if(u.loose)for(let m=0;m<u.items.length;m++)u.items[m].loose=!0;return u}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const s=t[1].toLowerCase().replace(/\s+/g," "),a=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",u=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:s,raw:t[0],href:a,title:u}}}table(n){const t=this.rules.block.table.exec(n);if(!t||!/[:|]/.test(t[2]))return;const s=Bl(t[1]),a=t[2].replace(/^\||\| *$/g,"").split("|"),u=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],c={type:"table",raw:t[0],header:[],align:[],rows:[]};if(s.length===a.length){for(const f of a)/^ *-+: *$/.test(f)?c.align.push("right"):/^ *:-+: *$/.test(f)?c.align.push("center"):/^ *:-+ *$/.test(f)?c.align.push("left"):c.align.push(null);for(const f of s)c.header.push({text:f,tokens:this.lexer.inline(f)});for(const f of u)c.rows.push(Bl(f,c.header.length).map(d=>({text:d,tokens:this.lexer.inline(d)})));return c}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:Sn(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const s=t[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const c=us(s.slice(0,-1),"\\");if((s.length-c.length)%2===0)return}else{const c=d1(t[2],"()");if(c>-1){const d=(t[0].indexOf("!")===0?5:4)+t[1].length+c;t[2]=t[2].substring(0,c),t[0]=t[0].substring(0,d).trim(),t[3]=""}}let a=t[2],u="";if(this.options.pedantic){const c=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);c&&(a=c[1],u=c[3])}else u=t[3]?t[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(this.options.pedantic&&!/>$/.test(s)?a=a.slice(1):a=a.slice(1,-1)),Pl(t,{href:a&&a.replace(this.rules.inline.anyPunctuation,"$1"),title:u&&u.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(n,t){let s;if((s=this.rules.inline.reflink.exec(n))||(s=this.rules.inline.nolink.exec(n))){const a=(s[2]||s[1]).replace(/\s+/g," "),u=t[a.toLowerCase()];if(!u){const c=s[0].charAt(0);return{type:"text",raw:c,text:c}}return Pl(s,u,s[0],this.lexer)}}emStrong(n,t,s=""){let a=this.rules.inline.emStrongLDelim.exec(n);if(!a||a[3]&&s.match(/[\p{L}\p{N}]/u))return;if(!(a[1]||a[2]||"")||!s||this.rules.inline.punctuation.exec(s)){const c=[...a[0]].length-1;let f,d,b=c,m=0;const v=a[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(v.lastIndex=0,t=t.slice(-1*n.length+c);(a=v.exec(t))!=null;){if(f=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!f)continue;if(d=[...f].length,a[3]||a[4]){b+=d;continue}else if((a[5]||a[6])&&c%3&&!((c+d)%3)){m+=d;continue}if(b-=d,b>0)continue;d=Math.min(d,d+b+m);const N=[...a[0]][0].length,x=n.slice(0,c+a.index+N+d);if(Math.min(c,d)%2){const R=x.slice(1,-1);return{type:"em",raw:x,text:R,tokens:this.lexer.inlineTokens(R)}}const L=x.slice(2,-2);return{type:"strong",raw:x,text:L,tokens:this.lexer.inlineTokens(L)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let s=t[2].replace(/\n/g," ");const a=/[^ ]/.test(s),u=/^ /.test(s)&&/ $/.test(s);return a&&u&&(s=s.substring(1,s.length-1)),s=Sn(s,!0),{type:"codespan",raw:t[0],text:s}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let s,a;return t[2]==="@"?(s=Sn(t[1]),a="mailto:"+s):(s=Sn(t[1]),a=s),{type:"link",raw:t[0],text:s,href:a,tokens:[{type:"text",raw:s,text:s}]}}}url(n){var s;let t;if(t=this.rules.inline.url.exec(n)){let a,u;if(t[2]==="@")a=Sn(t[0]),u="mailto:"+a;else{let c;do c=t[0],t[0]=((s=this.rules.inline._backpedal.exec(t[0]))==null?void 0:s[0])??"";while(c!==t[0]);a=Sn(t[0]),t[1]==="www."?u="http://"+t[0]:u=t[0]}return{type:"link",raw:t[0],text:a,href:u,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let s;return this.lexer.state.inRawBlock?s=t[0]:s=Sn(t[0]),{type:"text",raw:t[0],text:s}}}}const _1=/^(?: *(?:\n|$))+/,g1=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,b1=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,fi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,m1=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,df=/(?:[*+-]|\d{1,9}[.)])/,hf=me(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,df).getRegex(),Co=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,F1=/^[^\n]+/,wo=/(?!\s*\])(?:\\.|[^\[\]\\])+/,D1=me(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",wo).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),v1=me(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,df).getRegex(),Ns="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",xo=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,E1=me("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",xo).replace("tag",Ns).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),_f=me(Co).replace("hr",fi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ns).getRegex(),A1=me(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",_f).getRegex(),ko={blockquote:A1,code:g1,def:D1,fences:b1,heading:m1,hr:fi,html:E1,lheading:hf,list:v1,newline:_1,paragraph:_f,table:si,text:F1},$l=me("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",fi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ns).getRegex(),S1={...ko,table:$l,paragraph:me(Co).replace("hr",fi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",$l).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ns).getRegex()},T1={...ko,html:me(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",xo).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:si,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:me(Co).replace("hr",fi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",hf).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},gf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,I1=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,bf=/^( {2,}|\\)\n(?!\s*$)/,y1=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,pi="\\p{P}$+<=>`^|~",N1=me(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,pi).getRegex(),C1=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,w1=me(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,pi).getRegex(),x1=me("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,pi).getRegex(),k1=me("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,pi).getRegex(),O1=me(/\\([punct])/,"gu").replace(/punct/g,pi).getRegex(),L1=me(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),R1=me(xo).replace("(?:-->|$)","-->").getRegex(),U1=me("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",R1).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Fs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,B1=me(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Fs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),mf=me(/^!?\[(label)\]\[(ref)\]/).replace("label",Fs).replace("ref",wo).getRegex(),Ff=me(/^!?\[(ref)\](?:\[\])?/).replace("ref",wo).getRegex(),P1=me("reflink|nolink(?!\\()","g").replace("reflink",mf).replace("nolink",Ff).getRegex(),Oo={_backpedal:si,anyPunctuation:O1,autolink:L1,blockSkip:C1,br:bf,code:I1,del:si,emStrongLDelim:w1,emStrongRDelimAst:x1,emStrongRDelimUnd:k1,escape:gf,link:B1,nolink:Ff,punctuation:N1,reflink:mf,reflinkSearch:P1,tag:U1,text:y1,url:si},$1={...Oo,link:me(/^!?\[(label)\]\((.*?)\)/).replace("label",Fs).getRegex(),reflink:me(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Fs).getRegex()},_o={...Oo,escape:me(gf).replace("])","~|])").getRegex(),url:me(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},M1={..._o,br:me(bf).replace("{2,}","*").getRegex(),text:me(_o.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},cs={normal:ko,gfm:S1,pedantic:T1},ei={normal:Oo,gfm:_o,breaks:M1,pedantic:$1};class Wn{constructor(n){Se(this,"tokens");Se(this,"options");Se(this,"state");Se(this,"tokenizer");Se(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||cr,this.options.tokenizer=this.options.tokenizer||new ms,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:cs.normal,inline:ei.normal};this.options.pedantic?(t.block=cs.pedantic,t.inline=ei.pedantic):this.options.gfm&&(t.block=cs.gfm,this.options.breaks?t.inline=ei.breaks:t.inline=ei.gfm),this.tokenizer.rules=t}static get rules(){return{block:cs,inline:ei}}static lex(n,t){return new Wn(t).lex(n)}static lexInline(n,t){return new Wn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(f,d,b)=>d+"    ".repeat(b.length));let s,a,u,c;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(f=>(s=f.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(n)){n=n.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s);continue}if(s=this.tokenizer.fences(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+s.raw,a.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(u=n,this.options.extensions&&this.options.extensions.startBlock){let f=1/0;const d=n.slice(1);let b;this.options.extensions.startBlock.forEach(m=>{b=m.call({lexer:this},d),typeof b=="number"&&b>=0&&(f=Math.min(f,b))}),f<1/0&&f>=0&&(u=n.substring(0,f+1))}if(this.state.top&&(s=this.tokenizer.paragraph(u))){a=t[t.length-1],c&&a.type==="paragraph"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s),c=u.length!==n.length,n=n.substring(s.raw.length);continue}if(s=this.tokenizer.text(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&a.type==="text"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s);continue}if(n){const f="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let s,a,u,c=n,f,d,b;if(this.tokens.links){const m=Object.keys(this.tokens.links);if(m.length>0)for(;(f=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)m.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(f=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)c=c.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(f=this.tokenizer.rules.inline.anyPunctuation.exec(c))!=null;)c=c.slice(0,f.index)+"++"+c.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(d||(b=""),d=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(m=>(s=m.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.escape(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&s.type==="text"&&a.type==="text"?(a.raw+=s.raw,a.text+=s.text):t.push(s);continue}if(s=this.tokenizer.link(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(s.raw.length),a=t[t.length-1],a&&s.type==="text"&&a.type==="text"?(a.raw+=s.raw,a.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(n,c,b)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(n)){n=n.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(n))){n=n.substring(s.raw.length),t.push(s);continue}if(u=n,this.options.extensions&&this.options.extensions.startInline){let m=1/0;const v=n.slice(1);let N;this.options.extensions.startInline.forEach(x=>{N=x.call({lexer:this},v),typeof N=="number"&&N>=0&&(m=Math.min(m,N))}),m<1/0&&m>=0&&(u=n.substring(0,m+1))}if(s=this.tokenizer.inlineText(u)){n=n.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(b=s.raw.slice(-1)),d=!0,a=t[t.length-1],a&&a.type==="text"?(a.raw+=s.raw,a.text+=s.text):t.push(s);continue}if(n){const m="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(m);break}else throw new Error(m)}}return t}}class Ds{constructor(n){Se(this,"options");this.options=n||cr}code(n,t,s){var u;const a=(u=(t||"").match(/^\S*/))==null?void 0:u[0];return n=n.replace(/\n$/,"")+`
`,a?'<pre><code class="language-'+Sn(a)+'">'+(s?n:Sn(n,!0))+`</code></pre>
`:"<pre><code>"+(s?n:Sn(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,t){return n}heading(n,t,s){return`<h${t}>${n}</h${t}>
`}hr(){return`<hr>
`}list(n,t,s){const a=t?"ol":"ul",u=t&&s!==1?' start="'+s+'"':"";return"<"+a+u+`>
`+n+"</"+a+`>
`}listitem(n,t,s){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(n){return`<p>${n}</p>
`}table(n,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+t+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,t){const s=t.header?"th":"td";return(t.align?`<${s} align="${t.align}">`:`<${s}>`)+n+`</${s}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return"<br>"}del(n){return`<del>${n}</del>`}link(n,t,s){const a=Ul(n);if(a===null)return s;n=a;let u='<a href="'+n+'"';return t&&(u+=' title="'+t+'"'),u+=">"+s+"</a>",u}image(n,t,s){const a=Ul(n);if(a===null)return s;n=a;let u=`<img src="${n}" alt="${s}"`;return t&&(u+=` title="${t}"`),u+=">",u}text(n){return n}}class Lo{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,t,s){return""+s}image(n,t,s){return""+s}br(){return""}}class ct{constructor(n){Se(this,"options");Se(this,"renderer");Se(this,"textRenderer");this.options=n||cr,this.options.renderer=this.options.renderer||new Ds,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Lo}static parse(n,t){return new ct(t).parse(n)}static parseInline(n,t){return new ct(t).parseInline(n)}parse(n,t=!0){let s="";for(let a=0;a<n.length;a++){const u=n[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]){const c=u,f=this.options.extensions.renderers[c.type].call({parser:this},c);if(f!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)){s+=f||"";continue}}switch(u.type){case"space":continue;case"hr":{s+=this.renderer.hr();continue}case"heading":{const c=u;s+=this.renderer.heading(this.parseInline(c.tokens),c.depth,f1(this.parseInline(c.tokens,this.textRenderer)));continue}case"code":{const c=u;s+=this.renderer.code(c.text,c.lang,!!c.escaped);continue}case"table":{const c=u;let f="",d="";for(let m=0;m<c.header.length;m++)d+=this.renderer.tablecell(this.parseInline(c.header[m].tokens),{header:!0,align:c.align[m]});f+=this.renderer.tablerow(d);let b="";for(let m=0;m<c.rows.length;m++){const v=c.rows[m];d="";for(let N=0;N<v.length;N++)d+=this.renderer.tablecell(this.parseInline(v[N].tokens),{header:!1,align:c.align[N]});b+=this.renderer.tablerow(d)}s+=this.renderer.table(f,b);continue}case"blockquote":{const c=u,f=this.parse(c.tokens);s+=this.renderer.blockquote(f);continue}case"list":{const c=u,f=c.ordered,d=c.start,b=c.loose;let m="";for(let v=0;v<c.items.length;v++){const N=c.items[v],x=N.checked,L=N.task;let R="";if(N.task){const J=this.renderer.checkbox(!!x);b?N.tokens.length>0&&N.tokens[0].type==="paragraph"?(N.tokens[0].text=J+" "+N.tokens[0].text,N.tokens[0].tokens&&N.tokens[0].tokens.length>0&&N.tokens[0].tokens[0].type==="text"&&(N.tokens[0].tokens[0].text=J+" "+N.tokens[0].tokens[0].text)):N.tokens.unshift({type:"text",text:J+" "}):R+=J+" "}R+=this.parse(N.tokens,b),m+=this.renderer.listitem(R,L,!!x)}s+=this.renderer.list(m,f,d);continue}case"html":{const c=u;s+=this.renderer.html(c.text,c.block);continue}case"paragraph":{const c=u;s+=this.renderer.paragraph(this.parseInline(c.tokens));continue}case"text":{let c=u,f=c.tokens?this.parseInline(c.tokens):c.text;for(;a+1<n.length&&n[a+1].type==="text";)c=n[++a],f+=`
`+(c.tokens?this.parseInline(c.tokens):c.text);s+=t?this.renderer.paragraph(f):f;continue}default:{const c='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return s}parseInline(n,t){t=t||this.renderer;let s="";for(let a=0;a<n.length;a++){const u=n[a];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]){const c=this.options.extensions.renderers[u.type].call({parser:this},u);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(u.type)){s+=c||"";continue}}switch(u.type){case"escape":{const c=u;s+=t.text(c.text);break}case"html":{const c=u;s+=t.html(c.text);break}case"link":{const c=u;s+=t.link(c.href,c.title,this.parseInline(c.tokens,t));break}case"image":{const c=u;s+=t.image(c.href,c.title,c.text);break}case"strong":{const c=u;s+=t.strong(this.parseInline(c.tokens,t));break}case"em":{const c=u;s+=t.em(this.parseInline(c.tokens,t));break}case"codespan":{const c=u;s+=t.codespan(c.text);break}case"br":{s+=t.br();break}case"del":{const c=u;s+=t.del(this.parseInline(c.tokens,t));break}case"text":{const c=u;s+=t.text(c.text);break}default:{const c='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return s}}class ai{constructor(n){Se(this,"options");this.options=n||cr}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}Se(ai,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var li,go,Ts,Df;class G1{constructor(...n){io(this,li);io(this,Ts);Se(this,"defaults",No());Se(this,"options",this.setOptions);Se(this,"parse",os(this,li,go).call(this,Wn.lex,ct.parse));Se(this,"parseInline",os(this,li,go).call(this,Wn.lexInline,ct.parseInline));Se(this,"Parser",ct);Se(this,"Renderer",Ds);Se(this,"TextRenderer",Lo);Se(this,"Lexer",Wn);Se(this,"Tokenizer",ms);Se(this,"Hooks",ai);this.use(...n)}walkTokens(n,t){var a,u;let s=[];for(const c of n)switch(s=s.concat(t.call(this,c)),c.type){case"table":{const f=c;for(const d of f.header)s=s.concat(this.walkTokens(d.tokens,t));for(const d of f.rows)for(const b of d)s=s.concat(this.walkTokens(b.tokens,t));break}case"list":{const f=c;s=s.concat(this.walkTokens(f.items,t));break}default:{const f=c;(u=(a=this.defaults.extensions)==null?void 0:a.childTokens)!=null&&u[f.type]?this.defaults.extensions.childTokens[f.type].forEach(d=>{const b=f[d].flat(1/0);s=s.concat(this.walkTokens(b,t))}):f.tokens&&(s=s.concat(this.walkTokens(f.tokens,t)))}}return s}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(s=>{const a={...s};if(a.async=this.defaults.async||a.async||!1,s.extensions&&(s.extensions.forEach(u=>{if(!u.name)throw new Error("extension name required");if("renderer"in u){const c=t.renderers[u.name];c?t.renderers[u.name]=function(...f){let d=u.renderer.apply(this,f);return d===!1&&(d=c.apply(this,f)),d}:t.renderers[u.name]=u.renderer}if("tokenizer"in u){if(!u.level||u.level!=="block"&&u.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const c=t[u.level];c?c.unshift(u.tokenizer):t[u.level]=[u.tokenizer],u.start&&(u.level==="block"?t.startBlock?t.startBlock.push(u.start):t.startBlock=[u.start]:u.level==="inline"&&(t.startInline?t.startInline.push(u.start):t.startInline=[u.start]))}"childTokens"in u&&u.childTokens&&(t.childTokens[u.name]=u.childTokens)}),a.extensions=t),s.renderer){const u=this.defaults.renderer||new Ds(this.defaults);for(const c in s.renderer){if(!(c in u))throw new Error(`renderer '${c}' does not exist`);if(c==="options")continue;const f=c,d=s.renderer[f],b=u[f];u[f]=(...m)=>{let v=d.apply(u,m);return v===!1&&(v=b.apply(u,m)),v||""}}a.renderer=u}if(s.tokenizer){const u=this.defaults.tokenizer||new ms(this.defaults);for(const c in s.tokenizer){if(!(c in u))throw new Error(`tokenizer '${c}' does not exist`);if(["options","rules","lexer"].includes(c))continue;const f=c,d=s.tokenizer[f],b=u[f];u[f]=(...m)=>{let v=d.apply(u,m);return v===!1&&(v=b.apply(u,m)),v}}a.tokenizer=u}if(s.hooks){const u=this.defaults.hooks||new ai;for(const c in s.hooks){if(!(c in u))throw new Error(`hook '${c}' does not exist`);if(c==="options")continue;const f=c,d=s.hooks[f],b=u[f];ai.passThroughHooks.has(c)?u[f]=m=>{if(this.defaults.async)return Promise.resolve(d.call(u,m)).then(N=>b.call(u,N));const v=d.call(u,m);return b.call(u,v)}:u[f]=(...m)=>{let v=d.apply(u,m);return v===!1&&(v=b.apply(u,m)),v}}a.hooks=u}if(s.walkTokens){const u=this.defaults.walkTokens,c=s.walkTokens;a.walkTokens=function(f){let d=[];return d.push(c.call(this,f)),u&&(d=d.concat(u.call(this,f))),d}}this.defaults={...this.defaults,...a}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return Wn.lex(n,t??this.defaults)}parser(n,t){return ct.parse(n,t??this.defaults)}}li=new WeakSet,go=function(n,t){return(s,a)=>{const u={...a},c={...this.defaults,...u};this.defaults.async===!0&&u.async===!1&&(c.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),c.async=!0);const f=os(this,Ts,Df).call(this,!!c.silent,!!c.async);if(typeof s>"u"||s===null)return f(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return f(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(c.hooks&&(c.hooks.options=c),c.async)return Promise.resolve(c.hooks?c.hooks.preprocess(s):s).then(d=>n(d,c)).then(d=>c.hooks?c.hooks.processAllTokens(d):d).then(d=>c.walkTokens?Promise.all(this.walkTokens(d,c.walkTokens)).then(()=>d):d).then(d=>t(d,c)).then(d=>c.hooks?c.hooks.postprocess(d):d).catch(f);try{c.hooks&&(s=c.hooks.preprocess(s));let d=n(s,c);c.hooks&&(d=c.hooks.processAllTokens(d)),c.walkTokens&&this.walkTokens(d,c.walkTokens);let b=t(d,c);return c.hooks&&(b=c.hooks.postprocess(b)),b}catch(d){return f(d)}}},Ts=new WeakSet,Df=function(n,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const a="<p>An error occurred:</p><pre>"+Sn(s.message+"",!0)+"</pre>";return t?Promise.resolve(a):a}if(t)return Promise.reject(s);throw s}};const ar=new G1;function be(r,n){return ar.parse(r,n)}be.options=be.setOptions=function(r){return ar.setOptions(r),be.defaults=ar.defaults,lf(be.defaults),be};be.getDefaults=No;be.defaults=cr;be.use=function(...r){return ar.use(...r),be.defaults=ar.defaults,lf(be.defaults),be};be.walkTokens=function(r,n){return ar.walkTokens(r,n)};be.parseInline=ar.parseInline;be.Parser=ct;be.parser=ct.parse;be.Renderer=Ds;be.TextRenderer=Lo;be.Lexer=Wn;be.lexer=Wn.lex;be.Tokenizer=ms;be.Hooks=ai;be.parse=be;be.options;be.setOptions;be.use;be.walkTokens;be.parseInline;ct.parse;Wn.lex;const V1=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,q1=Object.hasOwnProperty;class vf{constructor(){this.occurrences,this.reset()}slug(n,t){const s=this;let a=z1(n,t===!0);const u=a;for(;q1.call(s.occurrences,a);)s.occurrences[u]++,a=u+"-"+s.occurrences[u];return s.occurrences[a]=0,a}reset(){this.occurrences=Object.create(null)}}function z1(r,n){return typeof r!="string"?"":(n||(r=r.toLowerCase()),r.replace(V1,"").replace(/ /g,"-"))}function j1(r){return new Wn().lex(r)}const Y1=()=>({heading:eF,blockquote:rF,list:dF,list_item:gF,br:FF,code:EF,codespan:TF,table:NF,html:xF,paragraph:LF,link:BF,text:MF,def:qF,del:YF,em:JF,hr:ZF,strong:n1,image:i1,space:Ll,escape:Ll}),W1=()=>({baseUrl:"/",slugger:new vf});function Q1(){const r=console.warn;console.warn=n=>{n.includes("unknown prop")||n.includes("unexpected slot")||r(n)},Xm(()=>{console.warn=r})}function J1(r){let n,t;return n=new ys({props:{tokens:r[0],renderers:r[1],options:r[2]}}),{c(){qt(n.$$.fragment)},l(s){ur(n.$$.fragment,s)},m(s,a){zt(n,s,a),t=!0},p(s,[a]){const u={};a&1&&(u.tokens=s[0]),a&2&&(u.renderers=s[1]),a&4&&(u.options=s[2]),n.$set(u)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){ae(n.$$.fragment,s),t=!1},d(s){jt(n,s)}}}function H1(r,n,t){Q1();let{source:s}=n,{options:a={}}=n,{renderers:u={}}=n,c,f,d;return r.$$set=b=>{"source"in b&&t(3,s=b.source),"options"in b&&t(4,a=b.options),"renderers"in b&&t(5,u=b.renderers)},r.$$.update=()=>{r.$$.dirty&56&&(t(0,c=j1(s)),t(1,f={...Y1(),...u}),t(2,d={...W1(),...a}))},[c,f,d,s,a,u]}class AE extends Le{constructor(n){super(),Re(this,n,H1,J1,ye,{source:3,options:4,renderers:5})}}const di={joinUrlPaths:po,isRelative:ho,generatePathSegment:uf};var ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function X1(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function ls(){return{convert:r=>r==null||r===""?null:String(r),asString:r=>String(r),type:r=>r.string().optional()}}function Ml(r){return{convert:n=>{if(typeof n=="object")return n;if(typeof n=="string"){const t=JSON.parse(n);return typeof t!="object"?null:t}return null},asString:n=>JSON.stringify(n),type:n=>n.record(r(n).optional()).optional()}}function fs(r){return{convert:n=>{if(Array.isArray(n))return n;if(typeof n=="string"){const t=JSON.parse(n);return Array.isArray(t)?t:null}return null},asString:n=>JSON.stringify(n),type:n=>n.array(r(n)).optional()}}function Gl(r){return{convert:n=>n==null||!r.find(t=>t===n)?null:n,asString:n=>String(n),type:n=>n.enum(r).optional()}}function An(r,n){const t=s=>n.convert(s[r]);return{name:Z1(r),key:r,asEnv:s=>({[r]:n.asString(s)}),zod:{type:n.type},get:t,getOrDefault:(s,a)=>t(s)??a}}function Z1(r){return r.toLowerCase().replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("-","").replace("_",""))}var Ro={APP_LOGO:An("APP_LOGO",ls()),APP_TITLE:An("APP_TITLE",ls()),APP_FAVICON:An("APP_FAVICON",ls()),SITE_ROOT:An("SITE_ROOT",ls()),SITE_META:An("SITE_META",Ml(r=>r.string())),CUSTOM_STYLES:An("CUSTOM_STYLES",fs(r=>r.string())),FIELDS_SORTING:An("FIELDS_SORTING",Gl(["default","alphabetical"])),ARGUMENTS_SORTING:An("ARGUMENTS_SORTING",Gl(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:An("QUERY_GENERATION_FACTORIES",Ml(r=>r.union([r.string(),r.boolean(),r.number(),r.null(),r.record(r.unknown())]))),PAGES:An("PAGES",fs(r=>{const n=r.lazy(()=>r.object({title:r.string().min(1),content:r.union([r.array(n),r.string().min(1)])}));return n})),EXTERNAL_LINKS:An("EXTERNAL_LINKS",fs(r=>r.object({label:r.string().min(1),href:r.string().min(1),position:r.union([r.literal("header"),r.literal("navigation")]).optional(),kind:r.string().min(1).optional(),group:r.string().min(1).optional()}))),DIRECTIVES:An("DIRECTIVES",fs(r=>r.object({name:r.string().min(1),args:r.array(r.string())})))};function K1(){return{convert:r=>{if(r===null||r===void 0)return null;switch(typeof r){case"boolean":return r;case"string":const n=r.toLowerCase().trim();return n==="true"||n==="t"||n==="1";case"number":return r!==0;default:return null}},asString:r=>String(r),type:r=>r.boolean().optional()}}An("MAGIDOC_GENERATE",K1());var vs={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */vs.exports;(function(r,n){(function(){var t,s="4.17.21",a=200,u="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",f="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",b=500,m="__lodash_placeholder__",v=1,N=2,x=4,L=1,R=2,J=1,pe=2,Me=4,Ee=8,Ne=16,ke=32,nn=64,He=128,dt=256,k=512,X=30,tn="...",xt=800,Qt=16,gi=1,fr=2,bi=3,it=1/0,Pn=9007199254740991,pr=17976931348623157e292,Jt=NaN,Tn=4294967295,I=Tn-1,M=Tn>>>1,B=[["ary",He],["bind",J],["bindKey",pe],["curry",Ee],["curryRight",Ne],["flip",k],["partial",ke],["partialRight",nn],["rearg",dt]],P="[object Arguments]",de="[object Array]",Ue="[object AsyncFunction]",he="[object Boolean]",In="[object Date]",Or="[object DOMException]",kt="[object Error]",Xe="[object Function]",qo="[object GeneratorFunction]",$n="[object Map]",Lr="[object Number]",cp="[object Null]",ht="[object Object]",zo="[object Promise]",lp="[object Proxy]",Rr="[object RegExp]",Mn="[object Set]",Ur="[object String]",mi="[object Symbol]",fp="[object Undefined]",Br="[object WeakMap]",pp="[object WeakSet]",Pr="[object ArrayBuffer]",dr="[object DataView]",Bs="[object Float32Array]",Ps="[object Float64Array]",$s="[object Int8Array]",Ms="[object Int16Array]",Gs="[object Int32Array]",Vs="[object Uint8Array]",qs="[object Uint8ClampedArray]",zs="[object Uint16Array]",js="[object Uint32Array]",dp=/\b__p \+= '';/g,hp=/\b(__p \+=) '' \+/g,_p=/(__e\(.*?\)|\b__t\)) \+\n'';/g,jo=/&(?:amp|lt|gt|quot|#39);/g,Yo=/[&<>"']/g,gp=RegExp(jo.source),bp=RegExp(Yo.source),mp=/<%-([\s\S]+?)%>/g,Fp=/<%([\s\S]+?)%>/g,Wo=/<%=([\s\S]+?)%>/g,Dp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,vp=/^\w*$/,Ep=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ys=/[\\^$.*+?()[\]{}|]/g,Ap=RegExp(Ys.source),Ws=/^\s+/,Sp=/\s/,Tp=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ip=/\{\n\/\* \[wrapped with (.+)\] \*/,yp=/,? & /,Np=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Cp=/[()=,{}\[\]\/\s]/,wp=/\\(\\)?/g,xp=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Qo=/\w*$/,kp=/^[-+]0x[0-9a-f]+$/i,Op=/^0b[01]+$/i,Lp=/^\[object .+?Constructor\]$/,Rp=/^0o[0-7]+$/i,Up=/^(?:0|[1-9]\d*)$/,Bp=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Fi=/($^)/,Pp=/['\n\r\u2028\u2029\\]/g,Di="\\ud800-\\udfff",$p="\\u0300-\\u036f",Mp="\\ufe20-\\ufe2f",Gp="\\u20d0-\\u20ff",Jo=$p+Mp+Gp,Ho="\\u2700-\\u27bf",Xo="a-z\\xdf-\\xf6\\xf8-\\xff",Vp="\\xac\\xb1\\xd7\\xf7",qp="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",zp="\\u2000-\\u206f",jp=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Zo="A-Z\\xc0-\\xd6\\xd8-\\xde",Ko="\\ufe0e\\ufe0f",eu=Vp+qp+zp+jp,Qs="['’]",Yp="["+Di+"]",nu="["+eu+"]",vi="["+Jo+"]",tu="\\d+",Wp="["+Ho+"]",ru="["+Xo+"]",iu="[^"+Di+eu+tu+Ho+Xo+Zo+"]",Js="\\ud83c[\\udffb-\\udfff]",Qp="(?:"+vi+"|"+Js+")",su="[^"+Di+"]",Hs="(?:\\ud83c[\\udde6-\\uddff]){2}",Xs="[\\ud800-\\udbff][\\udc00-\\udfff]",hr="["+Zo+"]",au="\\u200d",ou="(?:"+ru+"|"+iu+")",Jp="(?:"+hr+"|"+iu+")",uu="(?:"+Qs+"(?:d|ll|m|re|s|t|ve))?",cu="(?:"+Qs+"(?:D|LL|M|RE|S|T|VE))?",lu=Qp+"?",fu="["+Ko+"]?",Hp="(?:"+au+"(?:"+[su,Hs,Xs].join("|")+")"+fu+lu+")*",Xp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Zp="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",pu=fu+lu+Hp,Kp="(?:"+[Wp,Hs,Xs].join("|")+")"+pu,ed="(?:"+[su+vi+"?",vi,Hs,Xs,Yp].join("|")+")",nd=RegExp(Qs,"g"),td=RegExp(vi,"g"),Zs=RegExp(Js+"(?="+Js+")|"+ed+pu,"g"),rd=RegExp([hr+"?"+ru+"+"+uu+"(?="+[nu,hr,"$"].join("|")+")",Jp+"+"+cu+"(?="+[nu,hr+ou,"$"].join("|")+")",hr+"?"+ou+"+"+uu,hr+"+"+cu,Zp,Xp,tu,Kp].join("|"),"g"),id=RegExp("["+au+Di+Jo+Ko+"]"),sd=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ad=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],od=-1,Te={};Te[Bs]=Te[Ps]=Te[$s]=Te[Ms]=Te[Gs]=Te[Vs]=Te[qs]=Te[zs]=Te[js]=!0,Te[P]=Te[de]=Te[Pr]=Te[he]=Te[dr]=Te[In]=Te[kt]=Te[Xe]=Te[$n]=Te[Lr]=Te[ht]=Te[Rr]=Te[Mn]=Te[Ur]=Te[Br]=!1;var Ae={};Ae[P]=Ae[de]=Ae[Pr]=Ae[dr]=Ae[he]=Ae[In]=Ae[Bs]=Ae[Ps]=Ae[$s]=Ae[Ms]=Ae[Gs]=Ae[$n]=Ae[Lr]=Ae[ht]=Ae[Rr]=Ae[Mn]=Ae[Ur]=Ae[mi]=Ae[Vs]=Ae[qs]=Ae[zs]=Ae[js]=!0,Ae[kt]=Ae[Xe]=Ae[Br]=!1;var ud={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},cd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ld={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},fd={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},pd=parseFloat,dd=parseInt,du=typeof ni=="object"&&ni&&ni.Object===Object&&ni,hd=typeof self=="object"&&self&&self.Object===Object&&self,We=du||hd||Function("return this")(),Ks=n&&!n.nodeType&&n,Ht=Ks&&!0&&r&&!r.nodeType&&r,hu=Ht&&Ht.exports===Ks,ea=hu&&du.process,yn=function(){try{var D=Ht&&Ht.require&&Ht.require("util").types;return D||ea&&ea.binding&&ea.binding("util")}catch{}}(),_u=yn&&yn.isArrayBuffer,gu=yn&&yn.isDate,bu=yn&&yn.isMap,mu=yn&&yn.isRegExp,Fu=yn&&yn.isSet,Du=yn&&yn.isTypedArray;function bn(D,T,S){switch(S.length){case 0:return D.call(T);case 1:return D.call(T,S[0]);case 2:return D.call(T,S[0],S[1]);case 3:return D.call(T,S[0],S[1],S[2])}return D.apply(T,S)}function _d(D,T,S,$){for(var Z=-1,fe=D==null?0:D.length;++Z<fe;){var qe=D[Z];T($,qe,S(qe),D)}return $}function Nn(D,T){for(var S=-1,$=D==null?0:D.length;++S<$&&T(D[S],S,D)!==!1;);return D}function gd(D,T){for(var S=D==null?0:D.length;S--&&T(D[S],S,D)!==!1;);return D}function vu(D,T){for(var S=-1,$=D==null?0:D.length;++S<$;)if(!T(D[S],S,D))return!1;return!0}function Ot(D,T){for(var S=-1,$=D==null?0:D.length,Z=0,fe=[];++S<$;){var qe=D[S];T(qe,S,D)&&(fe[Z++]=qe)}return fe}function Ei(D,T){var S=D==null?0:D.length;return!!S&&_r(D,T,0)>-1}function na(D,T,S){for(var $=-1,Z=D==null?0:D.length;++$<Z;)if(S(T,D[$]))return!0;return!1}function Ie(D,T){for(var S=-1,$=D==null?0:D.length,Z=Array($);++S<$;)Z[S]=T(D[S],S,D);return Z}function Lt(D,T){for(var S=-1,$=T.length,Z=D.length;++S<$;)D[Z+S]=T[S];return D}function ta(D,T,S,$){var Z=-1,fe=D==null?0:D.length;for($&&fe&&(S=D[++Z]);++Z<fe;)S=T(S,D[Z],Z,D);return S}function bd(D,T,S,$){var Z=D==null?0:D.length;for($&&Z&&(S=D[--Z]);Z--;)S=T(S,D[Z],Z,D);return S}function ra(D,T){for(var S=-1,$=D==null?0:D.length;++S<$;)if(T(D[S],S,D))return!0;return!1}var md=ia("length");function Fd(D){return D.split("")}function Dd(D){return D.match(Np)||[]}function Eu(D,T,S){var $;return S(D,function(Z,fe,qe){if(T(Z,fe,qe))return $=fe,!1}),$}function Ai(D,T,S,$){for(var Z=D.length,fe=S+($?1:-1);$?fe--:++fe<Z;)if(T(D[fe],fe,D))return fe;return-1}function _r(D,T,S){return T===T?kd(D,T,S):Ai(D,Au,S)}function vd(D,T,S,$){for(var Z=S-1,fe=D.length;++Z<fe;)if($(D[Z],T))return Z;return-1}function Au(D){return D!==D}function Su(D,T){var S=D==null?0:D.length;return S?aa(D,T)/S:Jt}function ia(D){return function(T){return T==null?t:T[D]}}function sa(D){return function(T){return D==null?t:D[T]}}function Tu(D,T,S,$,Z){return Z(D,function(fe,qe,De){S=$?($=!1,fe):T(S,fe,qe,De)}),S}function Ed(D,T){var S=D.length;for(D.sort(T);S--;)D[S]=D[S].value;return D}function aa(D,T){for(var S,$=-1,Z=D.length;++$<Z;){var fe=T(D[$]);fe!==t&&(S=S===t?fe:S+fe)}return S}function oa(D,T){for(var S=-1,$=Array(D);++S<D;)$[S]=T(S);return $}function Ad(D,T){return Ie(T,function(S){return[S,D[S]]})}function Iu(D){return D&&D.slice(0,wu(D)+1).replace(Ws,"")}function mn(D){return function(T){return D(T)}}function ua(D,T){return Ie(T,function(S){return D[S]})}function $r(D,T){return D.has(T)}function yu(D,T){for(var S=-1,$=D.length;++S<$&&_r(T,D[S],0)>-1;);return S}function Nu(D,T){for(var S=D.length;S--&&_r(T,D[S],0)>-1;);return S}function Sd(D,T){for(var S=D.length,$=0;S--;)D[S]===T&&++$;return $}var Td=sa(ud),Id=sa(cd);function yd(D){return"\\"+fd[D]}function Nd(D,T){return D==null?t:D[T]}function gr(D){return id.test(D)}function Cd(D){return sd.test(D)}function wd(D){for(var T,S=[];!(T=D.next()).done;)S.push(T.value);return S}function ca(D){var T=-1,S=Array(D.size);return D.forEach(function($,Z){S[++T]=[Z,$]}),S}function Cu(D,T){return function(S){return D(T(S))}}function Rt(D,T){for(var S=-1,$=D.length,Z=0,fe=[];++S<$;){var qe=D[S];(qe===T||qe===m)&&(D[S]=m,fe[Z++]=S)}return fe}function Si(D){var T=-1,S=Array(D.size);return D.forEach(function($){S[++T]=$}),S}function xd(D){var T=-1,S=Array(D.size);return D.forEach(function($){S[++T]=[$,$]}),S}function kd(D,T,S){for(var $=S-1,Z=D.length;++$<Z;)if(D[$]===T)return $;return-1}function Od(D,T,S){for(var $=S+1;$--;)if(D[$]===T)return $;return $}function br(D){return gr(D)?Rd(D):md(D)}function Gn(D){return gr(D)?Ud(D):Fd(D)}function wu(D){for(var T=D.length;T--&&Sp.test(D.charAt(T)););return T}var Ld=sa(ld);function Rd(D){for(var T=Zs.lastIndex=0;Zs.test(D);)++T;return T}function Ud(D){return D.match(Zs)||[]}function Bd(D){return D.match(rd)||[]}var Pd=function D(T){T=T==null?We:mr.defaults(We.Object(),T,mr.pick(We,ad));var S=T.Array,$=T.Date,Z=T.Error,fe=T.Function,qe=T.Math,De=T.Object,la=T.RegExp,$d=T.String,Cn=T.TypeError,Ti=S.prototype,Md=fe.prototype,Fr=De.prototype,Ii=T["__core-js_shared__"],yi=Md.toString,ge=Fr.hasOwnProperty,Gd=0,xu=function(){var e=/[^.]+$/.exec(Ii&&Ii.keys&&Ii.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Ni=Fr.toString,Vd=yi.call(De),qd=We._,zd=la("^"+yi.call(ge).replace(Ys,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ci=hu?T.Buffer:t,Ut=T.Symbol,wi=T.Uint8Array,ku=Ci?Ci.allocUnsafe:t,xi=Cu(De.getPrototypeOf,De),Ou=De.create,Lu=Fr.propertyIsEnumerable,ki=Ti.splice,Ru=Ut?Ut.isConcatSpreadable:t,Mr=Ut?Ut.iterator:t,Xt=Ut?Ut.toStringTag:t,Oi=function(){try{var e=tr(De,"defineProperty");return e({},"",{}),e}catch{}}(),jd=T.clearTimeout!==We.clearTimeout&&T.clearTimeout,Yd=$&&$.now!==We.Date.now&&$.now,Wd=T.setTimeout!==We.setTimeout&&T.setTimeout,Li=qe.ceil,Ri=qe.floor,fa=De.getOwnPropertySymbols,Qd=Ci?Ci.isBuffer:t,Uu=T.isFinite,Jd=Ti.join,Hd=Cu(De.keys,De),ze=qe.max,Ze=qe.min,Xd=$.now,Zd=T.parseInt,Bu=qe.random,Kd=Ti.reverse,pa=tr(T,"DataView"),Gr=tr(T,"Map"),da=tr(T,"Promise"),Dr=tr(T,"Set"),Vr=tr(T,"WeakMap"),qr=tr(De,"create"),Ui=Vr&&new Vr,vr={},eh=rr(pa),nh=rr(Gr),th=rr(da),rh=rr(Dr),ih=rr(Vr),Bi=Ut?Ut.prototype:t,zr=Bi?Bi.valueOf:t,Pu=Bi?Bi.toString:t;function h(e){if(Oe(e)&&!K(e)&&!(e instanceof oe)){if(e instanceof wn)return e;if(ge.call(e,"__wrapped__"))return $c(e)}return new wn(e)}var Er=function(){function e(){}return function(i){if(!Ce(i))return{};if(Ou)return Ou(i);e.prototype=i;var o=new e;return e.prototype=t,o}}();function Pi(){}function wn(e,i){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=t}h.templateSettings={escape:mp,evaluate:Fp,interpolate:Wo,variable:"",imports:{_:h}},h.prototype=Pi.prototype,h.prototype.constructor=h,wn.prototype=Er(Pi.prototype),wn.prototype.constructor=wn;function oe(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Tn,this.__views__=[]}function sh(){var e=new oe(this.__wrapped__);return e.__actions__=ln(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=ln(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=ln(this.__views__),e}function ah(){if(this.__filtered__){var e=new oe(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function oh(){var e=this.__wrapped__.value(),i=this.__dir__,o=K(e),l=i<0,p=o?e.length:0,_=F_(0,p,this.__views__),g=_.start,F=_.end,E=F-g,y=l?F:g-1,C=this.__iteratees__,O=C.length,U=0,V=Ze(E,this.__takeCount__);if(!o||!l&&p==E&&V==E)return uc(e,this.__actions__);var W=[];e:for(;E--&&U<V;){y+=i;for(var te=-1,Q=e[y];++te<O;){var ie=C[te],ce=ie.iteratee,vn=ie.type,an=ce(Q);if(vn==fr)Q=an;else if(!an){if(vn==gi)continue e;break e}}W[U++]=Q}return W}oe.prototype=Er(Pi.prototype),oe.prototype.constructor=oe;function Zt(e){var i=-1,o=e==null?0:e.length;for(this.clear();++i<o;){var l=e[i];this.set(l[0],l[1])}}function uh(){this.__data__=qr?qr(null):{},this.size=0}function ch(e){var i=this.has(e)&&delete this.__data__[e];return this.size-=i?1:0,i}function lh(e){var i=this.__data__;if(qr){var o=i[e];return o===d?t:o}return ge.call(i,e)?i[e]:t}function fh(e){var i=this.__data__;return qr?i[e]!==t:ge.call(i,e)}function ph(e,i){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=qr&&i===t?d:i,this}Zt.prototype.clear=uh,Zt.prototype.delete=ch,Zt.prototype.get=lh,Zt.prototype.has=fh,Zt.prototype.set=ph;function _t(e){var i=-1,o=e==null?0:e.length;for(this.clear();++i<o;){var l=e[i];this.set(l[0],l[1])}}function dh(){this.__data__=[],this.size=0}function hh(e){var i=this.__data__,o=$i(i,e);if(o<0)return!1;var l=i.length-1;return o==l?i.pop():ki.call(i,o,1),--this.size,!0}function _h(e){var i=this.__data__,o=$i(i,e);return o<0?t:i[o][1]}function gh(e){return $i(this.__data__,e)>-1}function bh(e,i){var o=this.__data__,l=$i(o,e);return l<0?(++this.size,o.push([e,i])):o[l][1]=i,this}_t.prototype.clear=dh,_t.prototype.delete=hh,_t.prototype.get=_h,_t.prototype.has=gh,_t.prototype.set=bh;function gt(e){var i=-1,o=e==null?0:e.length;for(this.clear();++i<o;){var l=e[i];this.set(l[0],l[1])}}function mh(){this.size=0,this.__data__={hash:new Zt,map:new(Gr||_t),string:new Zt}}function Fh(e){var i=Xi(this,e).delete(e);return this.size-=i?1:0,i}function Dh(e){return Xi(this,e).get(e)}function vh(e){return Xi(this,e).has(e)}function Eh(e,i){var o=Xi(this,e),l=o.size;return o.set(e,i),this.size+=o.size==l?0:1,this}gt.prototype.clear=mh,gt.prototype.delete=Fh,gt.prototype.get=Dh,gt.prototype.has=vh,gt.prototype.set=Eh;function Kt(e){var i=-1,o=e==null?0:e.length;for(this.__data__=new gt;++i<o;)this.add(e[i])}function Ah(e){return this.__data__.set(e,d),this}function Sh(e){return this.__data__.has(e)}Kt.prototype.add=Kt.prototype.push=Ah,Kt.prototype.has=Sh;function Vn(e){var i=this.__data__=new _t(e);this.size=i.size}function Th(){this.__data__=new _t,this.size=0}function Ih(e){var i=this.__data__,o=i.delete(e);return this.size=i.size,o}function yh(e){return this.__data__.get(e)}function Nh(e){return this.__data__.has(e)}function Ch(e,i){var o=this.__data__;if(o instanceof _t){var l=o.__data__;if(!Gr||l.length<a-1)return l.push([e,i]),this.size=++o.size,this;o=this.__data__=new gt(l)}return o.set(e,i),this.size=o.size,this}Vn.prototype.clear=Th,Vn.prototype.delete=Ih,Vn.prototype.get=yh,Vn.prototype.has=Nh,Vn.prototype.set=Ch;function $u(e,i){var o=K(e),l=!o&&ir(e),p=!o&&!l&&Gt(e),_=!o&&!l&&!p&&Ir(e),g=o||l||p||_,F=g?oa(e.length,$d):[],E=F.length;for(var y in e)(i||ge.call(e,y))&&!(g&&(y=="length"||p&&(y=="offset"||y=="parent")||_&&(y=="buffer"||y=="byteLength"||y=="byteOffset")||Dt(y,E)))&&F.push(y);return F}function Mu(e){var i=e.length;return i?e[Sa(0,i-1)]:t}function wh(e,i){return Zi(ln(e),er(i,0,e.length))}function xh(e){return Zi(ln(e))}function ha(e,i,o){(o!==t&&!qn(e[i],o)||o===t&&!(i in e))&&bt(e,i,o)}function jr(e,i,o){var l=e[i];(!(ge.call(e,i)&&qn(l,o))||o===t&&!(i in e))&&bt(e,i,o)}function $i(e,i){for(var o=e.length;o--;)if(qn(e[o][0],i))return o;return-1}function kh(e,i,o,l){return Bt(e,function(p,_,g){i(l,p,o(p),g)}),l}function Gu(e,i){return e&&at(i,je(i),e)}function Oh(e,i){return e&&at(i,pn(i),e)}function bt(e,i,o){i=="__proto__"&&Oi?Oi(e,i,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[i]=o}function _a(e,i){for(var o=-1,l=i.length,p=S(l),_=e==null;++o<l;)p[o]=_?t:Ja(e,i[o]);return p}function er(e,i,o){return e===e&&(o!==t&&(e=e<=o?e:o),i!==t&&(e=e>=i?e:i)),e}function xn(e,i,o,l,p,_){var g,F=i&v,E=i&N,y=i&x;if(o&&(g=p?o(e,l,p,_):o(e)),g!==t)return g;if(!Ce(e))return e;var C=K(e);if(C){if(g=v_(e),!F)return ln(e,g)}else{var O=Ke(e),U=O==Xe||O==qo;if(Gt(e))return fc(e,F);if(O==ht||O==P||U&&!p){if(g=E||U?{}:wc(e),!F)return E?l_(e,Oh(g,e)):c_(e,Gu(g,e))}else{if(!Ae[O])return p?e:{};g=E_(e,O,F)}}_||(_=new Vn);var V=_.get(e);if(V)return V;_.set(e,g),sl(e)?e.forEach(function(Q){g.add(xn(Q,i,o,Q,e,_))}):rl(e)&&e.forEach(function(Q,ie){g.set(ie,xn(Q,i,o,ie,e,_))});var W=y?E?Ra:La:E?pn:je,te=C?t:W(e);return Nn(te||e,function(Q,ie){te&&(ie=Q,Q=e[ie]),jr(g,ie,xn(Q,i,o,ie,e,_))}),g}function Lh(e){var i=je(e);return function(o){return Vu(o,e,i)}}function Vu(e,i,o){var l=o.length;if(e==null)return!l;for(e=De(e);l--;){var p=o[l],_=i[p],g=e[p];if(g===t&&!(p in e)||!_(g))return!1}return!0}function qu(e,i,o){if(typeof e!="function")throw new Cn(c);return Zr(function(){e.apply(t,o)},i)}function Yr(e,i,o,l){var p=-1,_=Ei,g=!0,F=e.length,E=[],y=i.length;if(!F)return E;o&&(i=Ie(i,mn(o))),l?(_=na,g=!1):i.length>=a&&(_=$r,g=!1,i=new Kt(i));e:for(;++p<F;){var C=e[p],O=o==null?C:o(C);if(C=l||C!==0?C:0,g&&O===O){for(var U=y;U--;)if(i[U]===O)continue e;E.push(C)}else _(i,O,l)||E.push(C)}return E}var Bt=gc(st),zu=gc(ba,!0);function Rh(e,i){var o=!0;return Bt(e,function(l,p,_){return o=!!i(l,p,_),o}),o}function Mi(e,i,o){for(var l=-1,p=e.length;++l<p;){var _=e[l],g=i(_);if(g!=null&&(F===t?g===g&&!Dn(g):o(g,F)))var F=g,E=_}return E}function Uh(e,i,o,l){var p=e.length;for(o=ne(o),o<0&&(o=-o>p?0:p+o),l=l===t||l>p?p:ne(l),l<0&&(l+=p),l=o>l?0:ol(l);o<l;)e[o++]=i;return e}function ju(e,i){var o=[];return Bt(e,function(l,p,_){i(l,p,_)&&o.push(l)}),o}function Qe(e,i,o,l,p){var _=-1,g=e.length;for(o||(o=S_),p||(p=[]);++_<g;){var F=e[_];i>0&&o(F)?i>1?Qe(F,i-1,o,l,p):Lt(p,F):l||(p[p.length]=F)}return p}var ga=bc(),Yu=bc(!0);function st(e,i){return e&&ga(e,i,je)}function ba(e,i){return e&&Yu(e,i,je)}function Gi(e,i){return Ot(i,function(o){return vt(e[o])})}function nr(e,i){i=$t(i,e);for(var o=0,l=i.length;e!=null&&o<l;)e=e[ot(i[o++])];return o&&o==l?e:t}function Wu(e,i,o){var l=i(e);return K(e)?l:Lt(l,o(e))}function rn(e){return e==null?e===t?fp:cp:Xt&&Xt in De(e)?m_(e):x_(e)}function ma(e,i){return e>i}function Bh(e,i){return e!=null&&ge.call(e,i)}function Ph(e,i){return e!=null&&i in De(e)}function $h(e,i,o){return e>=Ze(i,o)&&e<ze(i,o)}function Fa(e,i,o){for(var l=o?na:Ei,p=e[0].length,_=e.length,g=_,F=S(_),E=1/0,y=[];g--;){var C=e[g];g&&i&&(C=Ie(C,mn(i))),E=Ze(C.length,E),F[g]=!o&&(i||p>=120&&C.length>=120)?new Kt(g&&C):t}C=e[0];var O=-1,U=F[0];e:for(;++O<p&&y.length<E;){var V=C[O],W=i?i(V):V;if(V=o||V!==0?V:0,!(U?$r(U,W):l(y,W,o))){for(g=_;--g;){var te=F[g];if(!(te?$r(te,W):l(e[g],W,o)))continue e}U&&U.push(W),y.push(V)}}return y}function Mh(e,i,o,l){return st(e,function(p,_,g){i(l,o(p),_,g)}),l}function Wr(e,i,o){i=$t(i,e),e=Lc(e,i);var l=e==null?e:e[ot(On(i))];return l==null?t:bn(l,e,o)}function Qu(e){return Oe(e)&&rn(e)==P}function Gh(e){return Oe(e)&&rn(e)==Pr}function Vh(e){return Oe(e)&&rn(e)==In}function Qr(e,i,o,l,p){return e===i?!0:e==null||i==null||!Oe(e)&&!Oe(i)?e!==e&&i!==i:qh(e,i,o,l,Qr,p)}function qh(e,i,o,l,p,_){var g=K(e),F=K(i),E=g?de:Ke(e),y=F?de:Ke(i);E=E==P?ht:E,y=y==P?ht:y;var C=E==ht,O=y==ht,U=E==y;if(U&&Gt(e)){if(!Gt(i))return!1;g=!0,C=!1}if(U&&!C)return _||(_=new Vn),g||Ir(e)?yc(e,i,o,l,p,_):g_(e,i,E,o,l,p,_);if(!(o&L)){var V=C&&ge.call(e,"__wrapped__"),W=O&&ge.call(i,"__wrapped__");if(V||W){var te=V?e.value():e,Q=W?i.value():i;return _||(_=new Vn),p(te,Q,o,l,_)}}return U?(_||(_=new Vn),b_(e,i,o,l,p,_)):!1}function zh(e){return Oe(e)&&Ke(e)==$n}function Da(e,i,o,l){var p=o.length,_=p,g=!l;if(e==null)return!_;for(e=De(e);p--;){var F=o[p];if(g&&F[2]?F[1]!==e[F[0]]:!(F[0]in e))return!1}for(;++p<_;){F=o[p];var E=F[0],y=e[E],C=F[1];if(g&&F[2]){if(y===t&&!(E in e))return!1}else{var O=new Vn;if(l)var U=l(y,C,E,e,i,O);if(!(U===t?Qr(C,y,L|R,l,O):U))return!1}}return!0}function Ju(e){if(!Ce(e)||I_(e))return!1;var i=vt(e)?zd:Lp;return i.test(rr(e))}function jh(e){return Oe(e)&&rn(e)==Rr}function Yh(e){return Oe(e)&&Ke(e)==Mn}function Wh(e){return Oe(e)&&is(e.length)&&!!Te[rn(e)]}function Hu(e){return typeof e=="function"?e:e==null?dn:typeof e=="object"?K(e)?Ku(e[0],e[1]):Zu(e):ml(e)}function va(e){if(!Xr(e))return Hd(e);var i=[];for(var o in De(e))ge.call(e,o)&&o!="constructor"&&i.push(o);return i}function Qh(e){if(!Ce(e))return w_(e);var i=Xr(e),o=[];for(var l in e)l=="constructor"&&(i||!ge.call(e,l))||o.push(l);return o}function Ea(e,i){return e<i}function Xu(e,i){var o=-1,l=fn(e)?S(e.length):[];return Bt(e,function(p,_,g){l[++o]=i(p,_,g)}),l}function Zu(e){var i=Ba(e);return i.length==1&&i[0][2]?kc(i[0][0],i[0][1]):function(o){return o===e||Da(o,e,i)}}function Ku(e,i){return $a(e)&&xc(i)?kc(ot(e),i):function(o){var l=Ja(o,e);return l===t&&l===i?Ha(o,e):Qr(i,l,L|R)}}function Vi(e,i,o,l,p){e!==i&&ga(i,function(_,g){if(p||(p=new Vn),Ce(_))Jh(e,i,g,o,Vi,l,p);else{var F=l?l(Ga(e,g),_,g+"",e,i,p):t;F===t&&(F=_),ha(e,g,F)}},pn)}function Jh(e,i,o,l,p,_,g){var F=Ga(e,o),E=Ga(i,o),y=g.get(E);if(y){ha(e,o,y);return}var C=_?_(F,E,o+"",e,i,g):t,O=C===t;if(O){var U=K(E),V=!U&&Gt(E),W=!U&&!V&&Ir(E);C=E,U||V||W?K(F)?C=F:Be(F)?C=ln(F):V?(O=!1,C=fc(E,!0)):W?(O=!1,C=pc(E,!0)):C=[]:Kr(E)||ir(E)?(C=F,ir(F)?C=ul(F):(!Ce(F)||vt(F))&&(C=wc(E))):O=!1}O&&(g.set(E,C),p(C,E,l,_,g),g.delete(E)),ha(e,o,C)}function ec(e,i){var o=e.length;if(o)return i+=i<0?o:0,Dt(i,o)?e[i]:t}function nc(e,i,o){i.length?i=Ie(i,function(_){return K(_)?function(g){return nr(g,_.length===1?_[0]:_)}:_}):i=[dn];var l=-1;i=Ie(i,mn(Y()));var p=Xu(e,function(_,g,F){var E=Ie(i,function(y){return y(_)});return{criteria:E,index:++l,value:_}});return Ed(p,function(_,g){return u_(_,g,o)})}function Hh(e,i){return tc(e,i,function(o,l){return Ha(e,l)})}function tc(e,i,o){for(var l=-1,p=i.length,_={};++l<p;){var g=i[l],F=nr(e,g);o(F,g)&&Jr(_,$t(g,e),F)}return _}function Xh(e){return function(i){return nr(i,e)}}function Aa(e,i,o,l){var p=l?vd:_r,_=-1,g=i.length,F=e;for(e===i&&(i=ln(i)),o&&(F=Ie(e,mn(o)));++_<g;)for(var E=0,y=i[_],C=o?o(y):y;(E=p(F,C,E,l))>-1;)F!==e&&ki.call(F,E,1),ki.call(e,E,1);return e}function rc(e,i){for(var o=e?i.length:0,l=o-1;o--;){var p=i[o];if(o==l||p!==_){var _=p;Dt(p)?ki.call(e,p,1):ya(e,p)}}return e}function Sa(e,i){return e+Ri(Bu()*(i-e+1))}function Zh(e,i,o,l){for(var p=-1,_=ze(Li((i-e)/(o||1)),0),g=S(_);_--;)g[l?_:++p]=e,e+=o;return g}function Ta(e,i){var o="";if(!e||i<1||i>Pn)return o;do i%2&&(o+=e),i=Ri(i/2),i&&(e+=e);while(i);return o}function re(e,i){return Va(Oc(e,i,dn),e+"")}function Kh(e){return Mu(yr(e))}function e_(e,i){var o=yr(e);return Zi(o,er(i,0,o.length))}function Jr(e,i,o,l){if(!Ce(e))return e;i=$t(i,e);for(var p=-1,_=i.length,g=_-1,F=e;F!=null&&++p<_;){var E=ot(i[p]),y=o;if(E==="__proto__"||E==="constructor"||E==="prototype")return e;if(p!=g){var C=F[E];y=l?l(C,E,F):t,y===t&&(y=Ce(C)?C:Dt(i[p+1])?[]:{})}jr(F,E,y),F=F[E]}return e}var ic=Ui?function(e,i){return Ui.set(e,i),e}:dn,n_=Oi?function(e,i){return Oi(e,"toString",{configurable:!0,enumerable:!1,value:Za(i),writable:!0})}:dn;function t_(e){return Zi(yr(e))}function kn(e,i,o){var l=-1,p=e.length;i<0&&(i=-i>p?0:p+i),o=o>p?p:o,o<0&&(o+=p),p=i>o?0:o-i>>>0,i>>>=0;for(var _=S(p);++l<p;)_[l]=e[l+i];return _}function r_(e,i){var o;return Bt(e,function(l,p,_){return o=i(l,p,_),!o}),!!o}function qi(e,i,o){var l=0,p=e==null?l:e.length;if(typeof i=="number"&&i===i&&p<=M){for(;l<p;){var _=l+p>>>1,g=e[_];g!==null&&!Dn(g)&&(o?g<=i:g<i)?l=_+1:p=_}return p}return Ia(e,i,dn,o)}function Ia(e,i,o,l){var p=0,_=e==null?0:e.length;if(_===0)return 0;i=o(i);for(var g=i!==i,F=i===null,E=Dn(i),y=i===t;p<_;){var C=Ri((p+_)/2),O=o(e[C]),U=O!==t,V=O===null,W=O===O,te=Dn(O);if(g)var Q=l||W;else y?Q=W&&(l||U):F?Q=W&&U&&(l||!V):E?Q=W&&U&&!V&&(l||!te):V||te?Q=!1:Q=l?O<=i:O<i;Q?p=C+1:_=C}return Ze(_,I)}function sc(e,i){for(var o=-1,l=e.length,p=0,_=[];++o<l;){var g=e[o],F=i?i(g):g;if(!o||!qn(F,E)){var E=F;_[p++]=g===0?0:g}}return _}function ac(e){return typeof e=="number"?e:Dn(e)?Jt:+e}function Fn(e){if(typeof e=="string")return e;if(K(e))return Ie(e,Fn)+"";if(Dn(e))return Pu?Pu.call(e):"";var i=e+"";return i=="0"&&1/e==-it?"-0":i}function Pt(e,i,o){var l=-1,p=Ei,_=e.length,g=!0,F=[],E=F;if(o)g=!1,p=na;else if(_>=a){var y=i?null:h_(e);if(y)return Si(y);g=!1,p=$r,E=new Kt}else E=i?[]:F;e:for(;++l<_;){var C=e[l],O=i?i(C):C;if(C=o||C!==0?C:0,g&&O===O){for(var U=E.length;U--;)if(E[U]===O)continue e;i&&E.push(O),F.push(C)}else p(E,O,o)||(E!==F&&E.push(O),F.push(C))}return F}function ya(e,i){return i=$t(i,e),e=Lc(e,i),e==null||delete e[ot(On(i))]}function oc(e,i,o,l){return Jr(e,i,o(nr(e,i)),l)}function zi(e,i,o,l){for(var p=e.length,_=l?p:-1;(l?_--:++_<p)&&i(e[_],_,e););return o?kn(e,l?0:_,l?_+1:p):kn(e,l?_+1:0,l?p:_)}function uc(e,i){var o=e;return o instanceof oe&&(o=o.value()),ta(i,function(l,p){return p.func.apply(p.thisArg,Lt([l],p.args))},o)}function Na(e,i,o){var l=e.length;if(l<2)return l?Pt(e[0]):[];for(var p=-1,_=S(l);++p<l;)for(var g=e[p],F=-1;++F<l;)F!=p&&(_[p]=Yr(_[p]||g,e[F],i,o));return Pt(Qe(_,1),i,o)}function cc(e,i,o){for(var l=-1,p=e.length,_=i.length,g={};++l<p;){var F=l<_?i[l]:t;o(g,e[l],F)}return g}function Ca(e){return Be(e)?e:[]}function wa(e){return typeof e=="function"?e:dn}function $t(e,i){return K(e)?e:$a(e,i)?[e]:Pc(_e(e))}var i_=re;function Mt(e,i,o){var l=e.length;return o=o===t?l:o,!i&&o>=l?e:kn(e,i,o)}var lc=jd||function(e){return We.clearTimeout(e)};function fc(e,i){if(i)return e.slice();var o=e.length,l=ku?ku(o):new e.constructor(o);return e.copy(l),l}function xa(e){var i=new e.constructor(e.byteLength);return new wi(i).set(new wi(e)),i}function s_(e,i){var o=i?xa(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)}function a_(e){var i=new e.constructor(e.source,Qo.exec(e));return i.lastIndex=e.lastIndex,i}function o_(e){return zr?De(zr.call(e)):{}}function pc(e,i){var o=i?xa(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)}function dc(e,i){if(e!==i){var o=e!==t,l=e===null,p=e===e,_=Dn(e),g=i!==t,F=i===null,E=i===i,y=Dn(i);if(!F&&!y&&!_&&e>i||_&&g&&E&&!F&&!y||l&&g&&E||!o&&E||!p)return 1;if(!l&&!_&&!y&&e<i||y&&o&&p&&!l&&!_||F&&o&&p||!g&&p||!E)return-1}return 0}function u_(e,i,o){for(var l=-1,p=e.criteria,_=i.criteria,g=p.length,F=o.length;++l<g;){var E=dc(p[l],_[l]);if(E){if(l>=F)return E;var y=o[l];return E*(y=="desc"?-1:1)}}return e.index-i.index}function hc(e,i,o,l){for(var p=-1,_=e.length,g=o.length,F=-1,E=i.length,y=ze(_-g,0),C=S(E+y),O=!l;++F<E;)C[F]=i[F];for(;++p<g;)(O||p<_)&&(C[o[p]]=e[p]);for(;y--;)C[F++]=e[p++];return C}function _c(e,i,o,l){for(var p=-1,_=e.length,g=-1,F=o.length,E=-1,y=i.length,C=ze(_-F,0),O=S(C+y),U=!l;++p<C;)O[p]=e[p];for(var V=p;++E<y;)O[V+E]=i[E];for(;++g<F;)(U||p<_)&&(O[V+o[g]]=e[p++]);return O}function ln(e,i){var o=-1,l=e.length;for(i||(i=S(l));++o<l;)i[o]=e[o];return i}function at(e,i,o,l){var p=!o;o||(o={});for(var _=-1,g=i.length;++_<g;){var F=i[_],E=l?l(o[F],e[F],F,o,e):t;E===t&&(E=e[F]),p?bt(o,F,E):jr(o,F,E)}return o}function c_(e,i){return at(e,Pa(e),i)}function l_(e,i){return at(e,Nc(e),i)}function ji(e,i){return function(o,l){var p=K(o)?_d:kh,_=i?i():{};return p(o,e,Y(l,2),_)}}function Ar(e){return re(function(i,o){var l=-1,p=o.length,_=p>1?o[p-1]:t,g=p>2?o[2]:t;for(_=e.length>3&&typeof _=="function"?(p--,_):t,g&&sn(o[0],o[1],g)&&(_=p<3?t:_,p=1),i=De(i);++l<p;){var F=o[l];F&&e(i,F,l,_)}return i})}function gc(e,i){return function(o,l){if(o==null)return o;if(!fn(o))return e(o,l);for(var p=o.length,_=i?p:-1,g=De(o);(i?_--:++_<p)&&l(g[_],_,g)!==!1;);return o}}function bc(e){return function(i,o,l){for(var p=-1,_=De(i),g=l(i),F=g.length;F--;){var E=g[e?F:++p];if(o(_[E],E,_)===!1)break}return i}}function f_(e,i,o){var l=i&J,p=Hr(e);function _(){var g=this&&this!==We&&this instanceof _?p:e;return g.apply(l?o:this,arguments)}return _}function mc(e){return function(i){i=_e(i);var o=gr(i)?Gn(i):t,l=o?o[0]:i.charAt(0),p=o?Mt(o,1).join(""):i.slice(1);return l[e]()+p}}function Sr(e){return function(i){return ta(gl(_l(i).replace(nd,"")),e,"")}}function Hr(e){return function(){var i=arguments;switch(i.length){case 0:return new e;case 1:return new e(i[0]);case 2:return new e(i[0],i[1]);case 3:return new e(i[0],i[1],i[2]);case 4:return new e(i[0],i[1],i[2],i[3]);case 5:return new e(i[0],i[1],i[2],i[3],i[4]);case 6:return new e(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var o=Er(e.prototype),l=e.apply(o,i);return Ce(l)?l:o}}function p_(e,i,o){var l=Hr(e);function p(){for(var _=arguments.length,g=S(_),F=_,E=Tr(p);F--;)g[F]=arguments[F];var y=_<3&&g[0]!==E&&g[_-1]!==E?[]:Rt(g,E);if(_-=y.length,_<o)return Ac(e,i,Yi,p.placeholder,t,g,y,t,t,o-_);var C=this&&this!==We&&this instanceof p?l:e;return bn(C,this,g)}return p}function Fc(e){return function(i,o,l){var p=De(i);if(!fn(i)){var _=Y(o,3);i=je(i),o=function(F){return _(p[F],F,p)}}var g=e(i,o,l);return g>-1?p[_?i[g]:g]:t}}function Dc(e){return Ft(function(i){var o=i.length,l=o,p=wn.prototype.thru;for(e&&i.reverse();l--;){var _=i[l];if(typeof _!="function")throw new Cn(c);if(p&&!g&&Hi(_)=="wrapper")var g=new wn([],!0)}for(l=g?l:o;++l<o;){_=i[l];var F=Hi(_),E=F=="wrapper"?Ua(_):t;E&&Ma(E[0])&&E[1]==(He|Ee|ke|dt)&&!E[4].length&&E[9]==1?g=g[Hi(E[0])].apply(g,E[3]):g=_.length==1&&Ma(_)?g[F]():g.thru(_)}return function(){var y=arguments,C=y[0];if(g&&y.length==1&&K(C))return g.plant(C).value();for(var O=0,U=o?i[O].apply(this,y):C;++O<o;)U=i[O].call(this,U);return U}})}function Yi(e,i,o,l,p,_,g,F,E,y){var C=i&He,O=i&J,U=i&pe,V=i&(Ee|Ne),W=i&k,te=U?t:Hr(e);function Q(){for(var ie=arguments.length,ce=S(ie),vn=ie;vn--;)ce[vn]=arguments[vn];if(V)var an=Tr(Q),En=Sd(ce,an);if(l&&(ce=hc(ce,l,p,V)),_&&(ce=_c(ce,_,g,V)),ie-=En,V&&ie<y){var Pe=Rt(ce,an);return Ac(e,i,Yi,Q.placeholder,o,ce,Pe,F,E,y-ie)}var zn=O?o:this,At=U?zn[e]:e;return ie=ce.length,F?ce=k_(ce,F):W&&ie>1&&ce.reverse(),C&&E<ie&&(ce.length=E),this&&this!==We&&this instanceof Q&&(At=te||Hr(At)),At.apply(zn,ce)}return Q}function vc(e,i){return function(o,l){return Mh(o,e,i(l),{})}}function Wi(e,i){return function(o,l){var p;if(o===t&&l===t)return i;if(o!==t&&(p=o),l!==t){if(p===t)return l;typeof o=="string"||typeof l=="string"?(o=Fn(o),l=Fn(l)):(o=ac(o),l=ac(l)),p=e(o,l)}return p}}function ka(e){return Ft(function(i){return i=Ie(i,mn(Y())),re(function(o){var l=this;return e(i,function(p){return bn(p,l,o)})})})}function Qi(e,i){i=i===t?" ":Fn(i);var o=i.length;if(o<2)return o?Ta(i,e):i;var l=Ta(i,Li(e/br(i)));return gr(i)?Mt(Gn(l),0,e).join(""):l.slice(0,e)}function d_(e,i,o,l){var p=i&J,_=Hr(e);function g(){for(var F=-1,E=arguments.length,y=-1,C=l.length,O=S(C+E),U=this&&this!==We&&this instanceof g?_:e;++y<C;)O[y]=l[y];for(;E--;)O[y++]=arguments[++F];return bn(U,p?o:this,O)}return g}function Ec(e){return function(i,o,l){return l&&typeof l!="number"&&sn(i,o,l)&&(o=l=t),i=Et(i),o===t?(o=i,i=0):o=Et(o),l=l===t?i<o?1:-1:Et(l),Zh(i,o,l,e)}}function Ji(e){return function(i,o){return typeof i=="string"&&typeof o=="string"||(i=Ln(i),o=Ln(o)),e(i,o)}}function Ac(e,i,o,l,p,_,g,F,E,y){var C=i&Ee,O=C?g:t,U=C?t:g,V=C?_:t,W=C?t:_;i|=C?ke:nn,i&=~(C?nn:ke),i&Me||(i&=~(J|pe));var te=[e,i,p,V,O,W,U,F,E,y],Q=o.apply(t,te);return Ma(e)&&Rc(Q,te),Q.placeholder=l,Uc(Q,e,i)}function Oa(e){var i=qe[e];return function(o,l){if(o=Ln(o),l=l==null?0:Ze(ne(l),292),l&&Uu(o)){var p=(_e(o)+"e").split("e"),_=i(p[0]+"e"+(+p[1]+l));return p=(_e(_)+"e").split("e"),+(p[0]+"e"+(+p[1]-l))}return i(o)}}var h_=Dr&&1/Si(new Dr([,-0]))[1]==it?function(e){return new Dr(e)}:no;function Sc(e){return function(i){var o=Ke(i);return o==$n?ca(i):o==Mn?xd(i):Ad(i,e(i))}}function mt(e,i,o,l,p,_,g,F){var E=i&pe;if(!E&&typeof e!="function")throw new Cn(c);var y=l?l.length:0;if(y||(i&=~(ke|nn),l=p=t),g=g===t?g:ze(ne(g),0),F=F===t?F:ne(F),y-=p?p.length:0,i&nn){var C=l,O=p;l=p=t}var U=E?t:Ua(e),V=[e,i,o,l,p,C,O,_,g,F];if(U&&C_(V,U),e=V[0],i=V[1],o=V[2],l=V[3],p=V[4],F=V[9]=V[9]===t?E?0:e.length:ze(V[9]-y,0),!F&&i&(Ee|Ne)&&(i&=~(Ee|Ne)),!i||i==J)var W=f_(e,i,o);else i==Ee||i==Ne?W=p_(e,i,F):(i==ke||i==(J|ke))&&!p.length?W=d_(e,i,o,l):W=Yi.apply(t,V);var te=U?ic:Rc;return Uc(te(W,V),e,i)}function Tc(e,i,o,l){return e===t||qn(e,Fr[o])&&!ge.call(l,o)?i:e}function Ic(e,i,o,l,p,_){return Ce(e)&&Ce(i)&&(_.set(i,e),Vi(e,i,t,Ic,_),_.delete(i)),e}function __(e){return Kr(e)?t:e}function yc(e,i,o,l,p,_){var g=o&L,F=e.length,E=i.length;if(F!=E&&!(g&&E>F))return!1;var y=_.get(e),C=_.get(i);if(y&&C)return y==i&&C==e;var O=-1,U=!0,V=o&R?new Kt:t;for(_.set(e,i),_.set(i,e);++O<F;){var W=e[O],te=i[O];if(l)var Q=g?l(te,W,O,i,e,_):l(W,te,O,e,i,_);if(Q!==t){if(Q)continue;U=!1;break}if(V){if(!ra(i,function(ie,ce){if(!$r(V,ce)&&(W===ie||p(W,ie,o,l,_)))return V.push(ce)})){U=!1;break}}else if(!(W===te||p(W,te,o,l,_))){U=!1;break}}return _.delete(e),_.delete(i),U}function g_(e,i,o,l,p,_,g){switch(o){case dr:if(e.byteLength!=i.byteLength||e.byteOffset!=i.byteOffset)return!1;e=e.buffer,i=i.buffer;case Pr:return!(e.byteLength!=i.byteLength||!_(new wi(e),new wi(i)));case he:case In:case Lr:return qn(+e,+i);case kt:return e.name==i.name&&e.message==i.message;case Rr:case Ur:return e==i+"";case $n:var F=ca;case Mn:var E=l&L;if(F||(F=Si),e.size!=i.size&&!E)return!1;var y=g.get(e);if(y)return y==i;l|=R,g.set(e,i);var C=yc(F(e),F(i),l,p,_,g);return g.delete(e),C;case mi:if(zr)return zr.call(e)==zr.call(i)}return!1}function b_(e,i,o,l,p,_){var g=o&L,F=La(e),E=F.length,y=La(i),C=y.length;if(E!=C&&!g)return!1;for(var O=E;O--;){var U=F[O];if(!(g?U in i:ge.call(i,U)))return!1}var V=_.get(e),W=_.get(i);if(V&&W)return V==i&&W==e;var te=!0;_.set(e,i),_.set(i,e);for(var Q=g;++O<E;){U=F[O];var ie=e[U],ce=i[U];if(l)var vn=g?l(ce,ie,U,i,e,_):l(ie,ce,U,e,i,_);if(!(vn===t?ie===ce||p(ie,ce,o,l,_):vn)){te=!1;break}Q||(Q=U=="constructor")}if(te&&!Q){var an=e.constructor,En=i.constructor;an!=En&&"constructor"in e&&"constructor"in i&&!(typeof an=="function"&&an instanceof an&&typeof En=="function"&&En instanceof En)&&(te=!1)}return _.delete(e),_.delete(i),te}function Ft(e){return Va(Oc(e,t,Vc),e+"")}function La(e){return Wu(e,je,Pa)}function Ra(e){return Wu(e,pn,Nc)}var Ua=Ui?function(e){return Ui.get(e)}:no;function Hi(e){for(var i=e.name+"",o=vr[i],l=ge.call(vr,i)?o.length:0;l--;){var p=o[l],_=p.func;if(_==null||_==e)return p.name}return i}function Tr(e){var i=ge.call(h,"placeholder")?h:e;return i.placeholder}function Y(){var e=h.iteratee||Ka;return e=e===Ka?Hu:e,arguments.length?e(arguments[0],arguments[1]):e}function Xi(e,i){var o=e.__data__;return T_(i)?o[typeof i=="string"?"string":"hash"]:o.map}function Ba(e){for(var i=je(e),o=i.length;o--;){var l=i[o],p=e[l];i[o]=[l,p,xc(p)]}return i}function tr(e,i){var o=Nd(e,i);return Ju(o)?o:t}function m_(e){var i=ge.call(e,Xt),o=e[Xt];try{e[Xt]=t;var l=!0}catch{}var p=Ni.call(e);return l&&(i?e[Xt]=o:delete e[Xt]),p}var Pa=fa?function(e){return e==null?[]:(e=De(e),Ot(fa(e),function(i){return Lu.call(e,i)}))}:to,Nc=fa?function(e){for(var i=[];e;)Lt(i,Pa(e)),e=xi(e);return i}:to,Ke=rn;(pa&&Ke(new pa(new ArrayBuffer(1)))!=dr||Gr&&Ke(new Gr)!=$n||da&&Ke(da.resolve())!=zo||Dr&&Ke(new Dr)!=Mn||Vr&&Ke(new Vr)!=Br)&&(Ke=function(e){var i=rn(e),o=i==ht?e.constructor:t,l=o?rr(o):"";if(l)switch(l){case eh:return dr;case nh:return $n;case th:return zo;case rh:return Mn;case ih:return Br}return i});function F_(e,i,o){for(var l=-1,p=o.length;++l<p;){var _=o[l],g=_.size;switch(_.type){case"drop":e+=g;break;case"dropRight":i-=g;break;case"take":i=Ze(i,e+g);break;case"takeRight":e=ze(e,i-g);break}}return{start:e,end:i}}function D_(e){var i=e.match(Ip);return i?i[1].split(yp):[]}function Cc(e,i,o){i=$t(i,e);for(var l=-1,p=i.length,_=!1;++l<p;){var g=ot(i[l]);if(!(_=e!=null&&o(e,g)))break;e=e[g]}return _||++l!=p?_:(p=e==null?0:e.length,!!p&&is(p)&&Dt(g,p)&&(K(e)||ir(e)))}function v_(e){var i=e.length,o=new e.constructor(i);return i&&typeof e[0]=="string"&&ge.call(e,"index")&&(o.index=e.index,o.input=e.input),o}function wc(e){return typeof e.constructor=="function"&&!Xr(e)?Er(xi(e)):{}}function E_(e,i,o){var l=e.constructor;switch(i){case Pr:return xa(e);case he:case In:return new l(+e);case dr:return s_(e,o);case Bs:case Ps:case $s:case Ms:case Gs:case Vs:case qs:case zs:case js:return pc(e,o);case $n:return new l;case Lr:case Ur:return new l(e);case Rr:return a_(e);case Mn:return new l;case mi:return o_(e)}}function A_(e,i){var o=i.length;if(!o)return e;var l=o-1;return i[l]=(o>1?"& ":"")+i[l],i=i.join(o>2?", ":" "),e.replace(Tp,`{
/* [wrapped with `+i+`] */
`)}function S_(e){return K(e)||ir(e)||!!(Ru&&e&&e[Ru])}function Dt(e,i){var o=typeof e;return i=i??Pn,!!i&&(o=="number"||o!="symbol"&&Up.test(e))&&e>-1&&e%1==0&&e<i}function sn(e,i,o){if(!Ce(o))return!1;var l=typeof i;return(l=="number"?fn(o)&&Dt(i,o.length):l=="string"&&i in o)?qn(o[i],e):!1}function $a(e,i){if(K(e))return!1;var o=typeof e;return o=="number"||o=="symbol"||o=="boolean"||e==null||Dn(e)?!0:vp.test(e)||!Dp.test(e)||i!=null&&e in De(i)}function T_(e){var i=typeof e;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?e!=="__proto__":e===null}function Ma(e){var i=Hi(e),o=h[i];if(typeof o!="function"||!(i in oe.prototype))return!1;if(e===o)return!0;var l=Ua(o);return!!l&&e===l[0]}function I_(e){return!!xu&&xu in e}var y_=Ii?vt:ro;function Xr(e){var i=e&&e.constructor,o=typeof i=="function"&&i.prototype||Fr;return e===o}function xc(e){return e===e&&!Ce(e)}function kc(e,i){return function(o){return o==null?!1:o[e]===i&&(i!==t||e in De(o))}}function N_(e){var i=ts(e,function(l){return o.size===b&&o.clear(),l}),o=i.cache;return i}function C_(e,i){var o=e[1],l=i[1],p=o|l,_=p<(J|pe|He),g=l==He&&o==Ee||l==He&&o==dt&&e[7].length<=i[8]||l==(He|dt)&&i[7].length<=i[8]&&o==Ee;if(!(_||g))return e;l&J&&(e[2]=i[2],p|=o&J?0:Me);var F=i[3];if(F){var E=e[3];e[3]=E?hc(E,F,i[4]):F,e[4]=E?Rt(e[3],m):i[4]}return F=i[5],F&&(E=e[5],e[5]=E?_c(E,F,i[6]):F,e[6]=E?Rt(e[5],m):i[6]),F=i[7],F&&(e[7]=F),l&He&&(e[8]=e[8]==null?i[8]:Ze(e[8],i[8])),e[9]==null&&(e[9]=i[9]),e[0]=i[0],e[1]=p,e}function w_(e){var i=[];if(e!=null)for(var o in De(e))i.push(o);return i}function x_(e){return Ni.call(e)}function Oc(e,i,o){return i=ze(i===t?e.length-1:i,0),function(){for(var l=arguments,p=-1,_=ze(l.length-i,0),g=S(_);++p<_;)g[p]=l[i+p];p=-1;for(var F=S(i+1);++p<i;)F[p]=l[p];return F[i]=o(g),bn(e,this,F)}}function Lc(e,i){return i.length<2?e:nr(e,kn(i,0,-1))}function k_(e,i){for(var o=e.length,l=Ze(i.length,o),p=ln(e);l--;){var _=i[l];e[l]=Dt(_,o)?p[_]:t}return e}function Ga(e,i){if(!(i==="constructor"&&typeof e[i]=="function")&&i!="__proto__")return e[i]}var Rc=Bc(ic),Zr=Wd||function(e,i){return We.setTimeout(e,i)},Va=Bc(n_);function Uc(e,i,o){var l=i+"";return Va(e,A_(l,O_(D_(l),o)))}function Bc(e){var i=0,o=0;return function(){var l=Xd(),p=Qt-(l-o);if(o=l,p>0){if(++i>=xt)return arguments[0]}else i=0;return e.apply(t,arguments)}}function Zi(e,i){var o=-1,l=e.length,p=l-1;for(i=i===t?l:i;++o<i;){var _=Sa(o,p),g=e[_];e[_]=e[o],e[o]=g}return e.length=i,e}var Pc=N_(function(e){var i=[];return e.charCodeAt(0)===46&&i.push(""),e.replace(Ep,function(o,l,p,_){i.push(p?_.replace(wp,"$1"):l||o)}),i});function ot(e){if(typeof e=="string"||Dn(e))return e;var i=e+"";return i=="0"&&1/e==-it?"-0":i}function rr(e){if(e!=null){try{return yi.call(e)}catch{}try{return e+""}catch{}}return""}function O_(e,i){return Nn(B,function(o){var l="_."+o[0];i&o[1]&&!Ei(e,l)&&e.push(l)}),e.sort()}function $c(e){if(e instanceof oe)return e.clone();var i=new wn(e.__wrapped__,e.__chain__);return i.__actions__=ln(e.__actions__),i.__index__=e.__index__,i.__values__=e.__values__,i}function L_(e,i,o){(o?sn(e,i,o):i===t)?i=1:i=ze(ne(i),0);var l=e==null?0:e.length;if(!l||i<1)return[];for(var p=0,_=0,g=S(Li(l/i));p<l;)g[_++]=kn(e,p,p+=i);return g}function R_(e){for(var i=-1,o=e==null?0:e.length,l=0,p=[];++i<o;){var _=e[i];_&&(p[l++]=_)}return p}function U_(){var e=arguments.length;if(!e)return[];for(var i=S(e-1),o=arguments[0],l=e;l--;)i[l-1]=arguments[l];return Lt(K(o)?ln(o):[o],Qe(i,1))}var B_=re(function(e,i){return Be(e)?Yr(e,Qe(i,1,Be,!0)):[]}),P_=re(function(e,i){var o=On(i);return Be(o)&&(o=t),Be(e)?Yr(e,Qe(i,1,Be,!0),Y(o,2)):[]}),$_=re(function(e,i){var o=On(i);return Be(o)&&(o=t),Be(e)?Yr(e,Qe(i,1,Be,!0),t,o):[]});function M_(e,i,o){var l=e==null?0:e.length;return l?(i=o||i===t?1:ne(i),kn(e,i<0?0:i,l)):[]}function G_(e,i,o){var l=e==null?0:e.length;return l?(i=o||i===t?1:ne(i),i=l-i,kn(e,0,i<0?0:i)):[]}function V_(e,i){return e&&e.length?zi(e,Y(i,3),!0,!0):[]}function q_(e,i){return e&&e.length?zi(e,Y(i,3),!0):[]}function z_(e,i,o,l){var p=e==null?0:e.length;return p?(o&&typeof o!="number"&&sn(e,i,o)&&(o=0,l=p),Uh(e,i,o,l)):[]}function Mc(e,i,o){var l=e==null?0:e.length;if(!l)return-1;var p=o==null?0:ne(o);return p<0&&(p=ze(l+p,0)),Ai(e,Y(i,3),p)}function Gc(e,i,o){var l=e==null?0:e.length;if(!l)return-1;var p=l-1;return o!==t&&(p=ne(o),p=o<0?ze(l+p,0):Ze(p,l-1)),Ai(e,Y(i,3),p,!0)}function Vc(e){var i=e==null?0:e.length;return i?Qe(e,1):[]}function j_(e){var i=e==null?0:e.length;return i?Qe(e,it):[]}function Y_(e,i){var o=e==null?0:e.length;return o?(i=i===t?1:ne(i),Qe(e,i)):[]}function W_(e){for(var i=-1,o=e==null?0:e.length,l={};++i<o;){var p=e[i];l[p[0]]=p[1]}return l}function qc(e){return e&&e.length?e[0]:t}function Q_(e,i,o){var l=e==null?0:e.length;if(!l)return-1;var p=o==null?0:ne(o);return p<0&&(p=ze(l+p,0)),_r(e,i,p)}function J_(e){var i=e==null?0:e.length;return i?kn(e,0,-1):[]}var H_=re(function(e){var i=Ie(e,Ca);return i.length&&i[0]===e[0]?Fa(i):[]}),X_=re(function(e){var i=On(e),o=Ie(e,Ca);return i===On(o)?i=t:o.pop(),o.length&&o[0]===e[0]?Fa(o,Y(i,2)):[]}),Z_=re(function(e){var i=On(e),o=Ie(e,Ca);return i=typeof i=="function"?i:t,i&&o.pop(),o.length&&o[0]===e[0]?Fa(o,t,i):[]});function K_(e,i){return e==null?"":Jd.call(e,i)}function On(e){var i=e==null?0:e.length;return i?e[i-1]:t}function eg(e,i,o){var l=e==null?0:e.length;if(!l)return-1;var p=l;return o!==t&&(p=ne(o),p=p<0?ze(l+p,0):Ze(p,l-1)),i===i?Od(e,i,p):Ai(e,Au,p,!0)}function ng(e,i){return e&&e.length?ec(e,ne(i)):t}var tg=re(zc);function zc(e,i){return e&&e.length&&i&&i.length?Aa(e,i):e}function rg(e,i,o){return e&&e.length&&i&&i.length?Aa(e,i,Y(o,2)):e}function ig(e,i,o){return e&&e.length&&i&&i.length?Aa(e,i,t,o):e}var sg=Ft(function(e,i){var o=e==null?0:e.length,l=_a(e,i);return rc(e,Ie(i,function(p){return Dt(p,o)?+p:p}).sort(dc)),l});function ag(e,i){var o=[];if(!(e&&e.length))return o;var l=-1,p=[],_=e.length;for(i=Y(i,3);++l<_;){var g=e[l];i(g,l,e)&&(o.push(g),p.push(l))}return rc(e,p),o}function qa(e){return e==null?e:Kd.call(e)}function og(e,i,o){var l=e==null?0:e.length;return l?(o&&typeof o!="number"&&sn(e,i,o)?(i=0,o=l):(i=i==null?0:ne(i),o=o===t?l:ne(o)),kn(e,i,o)):[]}function ug(e,i){return qi(e,i)}function cg(e,i,o){return Ia(e,i,Y(o,2))}function lg(e,i){var o=e==null?0:e.length;if(o){var l=qi(e,i);if(l<o&&qn(e[l],i))return l}return-1}function fg(e,i){return qi(e,i,!0)}function pg(e,i,o){return Ia(e,i,Y(o,2),!0)}function dg(e,i){var o=e==null?0:e.length;if(o){var l=qi(e,i,!0)-1;if(qn(e[l],i))return l}return-1}function hg(e){return e&&e.length?sc(e):[]}function _g(e,i){return e&&e.length?sc(e,Y(i,2)):[]}function gg(e){var i=e==null?0:e.length;return i?kn(e,1,i):[]}function bg(e,i,o){return e&&e.length?(i=o||i===t?1:ne(i),kn(e,0,i<0?0:i)):[]}function mg(e,i,o){var l=e==null?0:e.length;return l?(i=o||i===t?1:ne(i),i=l-i,kn(e,i<0?0:i,l)):[]}function Fg(e,i){return e&&e.length?zi(e,Y(i,3),!1,!0):[]}function Dg(e,i){return e&&e.length?zi(e,Y(i,3)):[]}var vg=re(function(e){return Pt(Qe(e,1,Be,!0))}),Eg=re(function(e){var i=On(e);return Be(i)&&(i=t),Pt(Qe(e,1,Be,!0),Y(i,2))}),Ag=re(function(e){var i=On(e);return i=typeof i=="function"?i:t,Pt(Qe(e,1,Be,!0),t,i)});function Sg(e){return e&&e.length?Pt(e):[]}function Tg(e,i){return e&&e.length?Pt(e,Y(i,2)):[]}function Ig(e,i){return i=typeof i=="function"?i:t,e&&e.length?Pt(e,t,i):[]}function za(e){if(!(e&&e.length))return[];var i=0;return e=Ot(e,function(o){if(Be(o))return i=ze(o.length,i),!0}),oa(i,function(o){return Ie(e,ia(o))})}function jc(e,i){if(!(e&&e.length))return[];var o=za(e);return i==null?o:Ie(o,function(l){return bn(i,t,l)})}var yg=re(function(e,i){return Be(e)?Yr(e,i):[]}),Ng=re(function(e){return Na(Ot(e,Be))}),Cg=re(function(e){var i=On(e);return Be(i)&&(i=t),Na(Ot(e,Be),Y(i,2))}),wg=re(function(e){var i=On(e);return i=typeof i=="function"?i:t,Na(Ot(e,Be),t,i)}),xg=re(za);function kg(e,i){return cc(e||[],i||[],jr)}function Og(e,i){return cc(e||[],i||[],Jr)}var Lg=re(function(e){var i=e.length,o=i>1?e[i-1]:t;return o=typeof o=="function"?(e.pop(),o):t,jc(e,o)});function Yc(e){var i=h(e);return i.__chain__=!0,i}function Rg(e,i){return i(e),e}function Ki(e,i){return i(e)}var Ug=Ft(function(e){var i=e.length,o=i?e[0]:0,l=this.__wrapped__,p=function(_){return _a(_,e)};return i>1||this.__actions__.length||!(l instanceof oe)||!Dt(o)?this.thru(p):(l=l.slice(o,+o+(i?1:0)),l.__actions__.push({func:Ki,args:[p],thisArg:t}),new wn(l,this.__chain__).thru(function(_){return i&&!_.length&&_.push(t),_}))});function Bg(){return Yc(this)}function Pg(){return new wn(this.value(),this.__chain__)}function $g(){this.__values__===t&&(this.__values__=al(this.value()));var e=this.__index__>=this.__values__.length,i=e?t:this.__values__[this.__index__++];return{done:e,value:i}}function Mg(){return this}function Gg(e){for(var i,o=this;o instanceof Pi;){var l=$c(o);l.__index__=0,l.__values__=t,i?p.__wrapped__=l:i=l;var p=l;o=o.__wrapped__}return p.__wrapped__=e,i}function Vg(){var e=this.__wrapped__;if(e instanceof oe){var i=e;return this.__actions__.length&&(i=new oe(this)),i=i.reverse(),i.__actions__.push({func:Ki,args:[qa],thisArg:t}),new wn(i,this.__chain__)}return this.thru(qa)}function qg(){return uc(this.__wrapped__,this.__actions__)}var zg=ji(function(e,i,o){ge.call(e,o)?++e[o]:bt(e,o,1)});function jg(e,i,o){var l=K(e)?vu:Rh;return o&&sn(e,i,o)&&(i=t),l(e,Y(i,3))}function Yg(e,i){var o=K(e)?Ot:ju;return o(e,Y(i,3))}var Wg=Fc(Mc),Qg=Fc(Gc);function Jg(e,i){return Qe(es(e,i),1)}function Hg(e,i){return Qe(es(e,i),it)}function Xg(e,i,o){return o=o===t?1:ne(o),Qe(es(e,i),o)}function Wc(e,i){var o=K(e)?Nn:Bt;return o(e,Y(i,3))}function Qc(e,i){var o=K(e)?gd:zu;return o(e,Y(i,3))}var Zg=ji(function(e,i,o){ge.call(e,o)?e[o].push(i):bt(e,o,[i])});function Kg(e,i,o,l){e=fn(e)?e:yr(e),o=o&&!l?ne(o):0;var p=e.length;return o<0&&(o=ze(p+o,0)),ss(e)?o<=p&&e.indexOf(i,o)>-1:!!p&&_r(e,i,o)>-1}var e0=re(function(e,i,o){var l=-1,p=typeof i=="function",_=fn(e)?S(e.length):[];return Bt(e,function(g){_[++l]=p?bn(i,g,o):Wr(g,i,o)}),_}),n0=ji(function(e,i,o){bt(e,o,i)});function es(e,i){var o=K(e)?Ie:Xu;return o(e,Y(i,3))}function t0(e,i,o,l){return e==null?[]:(K(i)||(i=i==null?[]:[i]),o=l?t:o,K(o)||(o=o==null?[]:[o]),nc(e,i,o))}var r0=ji(function(e,i,o){e[o?0:1].push(i)},function(){return[[],[]]});function i0(e,i,o){var l=K(e)?ta:Tu,p=arguments.length<3;return l(e,Y(i,4),o,p,Bt)}function s0(e,i,o){var l=K(e)?bd:Tu,p=arguments.length<3;return l(e,Y(i,4),o,p,zu)}function a0(e,i){var o=K(e)?Ot:ju;return o(e,rs(Y(i,3)))}function o0(e){var i=K(e)?Mu:Kh;return i(e)}function u0(e,i,o){(o?sn(e,i,o):i===t)?i=1:i=ne(i);var l=K(e)?wh:e_;return l(e,i)}function c0(e){var i=K(e)?xh:t_;return i(e)}function l0(e){if(e==null)return 0;if(fn(e))return ss(e)?br(e):e.length;var i=Ke(e);return i==$n||i==Mn?e.size:va(e).length}function f0(e,i,o){var l=K(e)?ra:r_;return o&&sn(e,i,o)&&(i=t),l(e,Y(i,3))}var p0=re(function(e,i){if(e==null)return[];var o=i.length;return o>1&&sn(e,i[0],i[1])?i=[]:o>2&&sn(i[0],i[1],i[2])&&(i=[i[0]]),nc(e,Qe(i,1),[])}),ns=Yd||function(){return We.Date.now()};function d0(e,i){if(typeof i!="function")throw new Cn(c);return e=ne(e),function(){if(--e<1)return i.apply(this,arguments)}}function Jc(e,i,o){return i=o?t:i,i=e&&i==null?e.length:i,mt(e,He,t,t,t,t,i)}function Hc(e,i){var o;if(typeof i!="function")throw new Cn(c);return e=ne(e),function(){return--e>0&&(o=i.apply(this,arguments)),e<=1&&(i=t),o}}var ja=re(function(e,i,o){var l=J;if(o.length){var p=Rt(o,Tr(ja));l|=ke}return mt(e,l,i,o,p)}),Xc=re(function(e,i,o){var l=J|pe;if(o.length){var p=Rt(o,Tr(Xc));l|=ke}return mt(i,l,e,o,p)});function Zc(e,i,o){i=o?t:i;var l=mt(e,Ee,t,t,t,t,t,i);return l.placeholder=Zc.placeholder,l}function Kc(e,i,o){i=o?t:i;var l=mt(e,Ne,t,t,t,t,t,i);return l.placeholder=Kc.placeholder,l}function el(e,i,o){var l,p,_,g,F,E,y=0,C=!1,O=!1,U=!0;if(typeof e!="function")throw new Cn(c);i=Ln(i)||0,Ce(o)&&(C=!!o.leading,O="maxWait"in o,_=O?ze(Ln(o.maxWait)||0,i):_,U="trailing"in o?!!o.trailing:U);function V(Pe){var zn=l,At=p;return l=p=t,y=Pe,g=e.apply(At,zn),g}function W(Pe){return y=Pe,F=Zr(ie,i),C?V(Pe):g}function te(Pe){var zn=Pe-E,At=Pe-y,Fl=i-zn;return O?Ze(Fl,_-At):Fl}function Q(Pe){var zn=Pe-E,At=Pe-y;return E===t||zn>=i||zn<0||O&&At>=_}function ie(){var Pe=ns();if(Q(Pe))return ce(Pe);F=Zr(ie,te(Pe))}function ce(Pe){return F=t,U&&l?V(Pe):(l=p=t,g)}function vn(){F!==t&&lc(F),y=0,l=E=p=F=t}function an(){return F===t?g:ce(ns())}function En(){var Pe=ns(),zn=Q(Pe);if(l=arguments,p=this,E=Pe,zn){if(F===t)return W(E);if(O)return lc(F),F=Zr(ie,i),V(E)}return F===t&&(F=Zr(ie,i)),g}return En.cancel=vn,En.flush=an,En}var h0=re(function(e,i){return qu(e,1,i)}),_0=re(function(e,i,o){return qu(e,Ln(i)||0,o)});function g0(e){return mt(e,k)}function ts(e,i){if(typeof e!="function"||i!=null&&typeof i!="function")throw new Cn(c);var o=function(){var l=arguments,p=i?i.apply(this,l):l[0],_=o.cache;if(_.has(p))return _.get(p);var g=e.apply(this,l);return o.cache=_.set(p,g)||_,g};return o.cache=new(ts.Cache||gt),o}ts.Cache=gt;function rs(e){if(typeof e!="function")throw new Cn(c);return function(){var i=arguments;switch(i.length){case 0:return!e.call(this);case 1:return!e.call(this,i[0]);case 2:return!e.call(this,i[0],i[1]);case 3:return!e.call(this,i[0],i[1],i[2])}return!e.apply(this,i)}}function b0(e){return Hc(2,e)}var m0=i_(function(e,i){i=i.length==1&&K(i[0])?Ie(i[0],mn(Y())):Ie(Qe(i,1),mn(Y()));var o=i.length;return re(function(l){for(var p=-1,_=Ze(l.length,o);++p<_;)l[p]=i[p].call(this,l[p]);return bn(e,this,l)})}),Ya=re(function(e,i){var o=Rt(i,Tr(Ya));return mt(e,ke,t,i,o)}),nl=re(function(e,i){var o=Rt(i,Tr(nl));return mt(e,nn,t,i,o)}),F0=Ft(function(e,i){return mt(e,dt,t,t,t,i)});function D0(e,i){if(typeof e!="function")throw new Cn(c);return i=i===t?i:ne(i),re(e,i)}function v0(e,i){if(typeof e!="function")throw new Cn(c);return i=i==null?0:ze(ne(i),0),re(function(o){var l=o[i],p=Mt(o,0,i);return l&&Lt(p,l),bn(e,this,p)})}function E0(e,i,o){var l=!0,p=!0;if(typeof e!="function")throw new Cn(c);return Ce(o)&&(l="leading"in o?!!o.leading:l,p="trailing"in o?!!o.trailing:p),el(e,i,{leading:l,maxWait:i,trailing:p})}function A0(e){return Jc(e,1)}function S0(e,i){return Ya(wa(i),e)}function T0(){if(!arguments.length)return[];var e=arguments[0];return K(e)?e:[e]}function I0(e){return xn(e,x)}function y0(e,i){return i=typeof i=="function"?i:t,xn(e,x,i)}function N0(e){return xn(e,v|x)}function C0(e,i){return i=typeof i=="function"?i:t,xn(e,v|x,i)}function w0(e,i){return i==null||Vu(e,i,je(i))}function qn(e,i){return e===i||e!==e&&i!==i}var x0=Ji(ma),k0=Ji(function(e,i){return e>=i}),ir=Qu(function(){return arguments}())?Qu:function(e){return Oe(e)&&ge.call(e,"callee")&&!Lu.call(e,"callee")},K=S.isArray,O0=_u?mn(_u):Gh;function fn(e){return e!=null&&is(e.length)&&!vt(e)}function Be(e){return Oe(e)&&fn(e)}function L0(e){return e===!0||e===!1||Oe(e)&&rn(e)==he}var Gt=Qd||ro,R0=gu?mn(gu):Vh;function U0(e){return Oe(e)&&e.nodeType===1&&!Kr(e)}function B0(e){if(e==null)return!0;if(fn(e)&&(K(e)||typeof e=="string"||typeof e.splice=="function"||Gt(e)||Ir(e)||ir(e)))return!e.length;var i=Ke(e);if(i==$n||i==Mn)return!e.size;if(Xr(e))return!va(e).length;for(var o in e)if(ge.call(e,o))return!1;return!0}function P0(e,i){return Qr(e,i)}function $0(e,i,o){o=typeof o=="function"?o:t;var l=o?o(e,i):t;return l===t?Qr(e,i,t,o):!!l}function Wa(e){if(!Oe(e))return!1;var i=rn(e);return i==kt||i==Or||typeof e.message=="string"&&typeof e.name=="string"&&!Kr(e)}function M0(e){return typeof e=="number"&&Uu(e)}function vt(e){if(!Ce(e))return!1;var i=rn(e);return i==Xe||i==qo||i==Ue||i==lp}function tl(e){return typeof e=="number"&&e==ne(e)}function is(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Pn}function Ce(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}function Oe(e){return e!=null&&typeof e=="object"}var rl=bu?mn(bu):zh;function G0(e,i){return e===i||Da(e,i,Ba(i))}function V0(e,i,o){return o=typeof o=="function"?o:t,Da(e,i,Ba(i),o)}function q0(e){return il(e)&&e!=+e}function z0(e){if(y_(e))throw new Z(u);return Ju(e)}function j0(e){return e===null}function Y0(e){return e==null}function il(e){return typeof e=="number"||Oe(e)&&rn(e)==Lr}function Kr(e){if(!Oe(e)||rn(e)!=ht)return!1;var i=xi(e);if(i===null)return!0;var o=ge.call(i,"constructor")&&i.constructor;return typeof o=="function"&&o instanceof o&&yi.call(o)==Vd}var Qa=mu?mn(mu):jh;function W0(e){return tl(e)&&e>=-Pn&&e<=Pn}var sl=Fu?mn(Fu):Yh;function ss(e){return typeof e=="string"||!K(e)&&Oe(e)&&rn(e)==Ur}function Dn(e){return typeof e=="symbol"||Oe(e)&&rn(e)==mi}var Ir=Du?mn(Du):Wh;function Q0(e){return e===t}function J0(e){return Oe(e)&&Ke(e)==Br}function H0(e){return Oe(e)&&rn(e)==pp}var X0=Ji(Ea),Z0=Ji(function(e,i){return e<=i});function al(e){if(!e)return[];if(fn(e))return ss(e)?Gn(e):ln(e);if(Mr&&e[Mr])return wd(e[Mr]());var i=Ke(e),o=i==$n?ca:i==Mn?Si:yr;return o(e)}function Et(e){if(!e)return e===0?e:0;if(e=Ln(e),e===it||e===-it){var i=e<0?-1:1;return i*pr}return e===e?e:0}function ne(e){var i=Et(e),o=i%1;return i===i?o?i-o:i:0}function ol(e){return e?er(ne(e),0,Tn):0}function Ln(e){if(typeof e=="number")return e;if(Dn(e))return Jt;if(Ce(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=Ce(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=Iu(e);var o=Op.test(e);return o||Rp.test(e)?dd(e.slice(2),o?2:8):kp.test(e)?Jt:+e}function ul(e){return at(e,pn(e))}function K0(e){return e?er(ne(e),-Pn,Pn):e===0?e:0}function _e(e){return e==null?"":Fn(e)}var eb=Ar(function(e,i){if(Xr(i)||fn(i)){at(i,je(i),e);return}for(var o in i)ge.call(i,o)&&jr(e,o,i[o])}),cl=Ar(function(e,i){at(i,pn(i),e)}),as=Ar(function(e,i,o,l){at(i,pn(i),e,l)}),nb=Ar(function(e,i,o,l){at(i,je(i),e,l)}),tb=Ft(_a);function rb(e,i){var o=Er(e);return i==null?o:Gu(o,i)}var ib=re(function(e,i){e=De(e);var o=-1,l=i.length,p=l>2?i[2]:t;for(p&&sn(i[0],i[1],p)&&(l=1);++o<l;)for(var _=i[o],g=pn(_),F=-1,E=g.length;++F<E;){var y=g[F],C=e[y];(C===t||qn(C,Fr[y])&&!ge.call(e,y))&&(e[y]=_[y])}return e}),sb=re(function(e){return e.push(t,Ic),bn(ll,t,e)});function ab(e,i){return Eu(e,Y(i,3),st)}function ob(e,i){return Eu(e,Y(i,3),ba)}function ub(e,i){return e==null?e:ga(e,Y(i,3),pn)}function cb(e,i){return e==null?e:Yu(e,Y(i,3),pn)}function lb(e,i){return e&&st(e,Y(i,3))}function fb(e,i){return e&&ba(e,Y(i,3))}function pb(e){return e==null?[]:Gi(e,je(e))}function db(e){return e==null?[]:Gi(e,pn(e))}function Ja(e,i,o){var l=e==null?t:nr(e,i);return l===t?o:l}function hb(e,i){return e!=null&&Cc(e,i,Bh)}function Ha(e,i){return e!=null&&Cc(e,i,Ph)}var _b=vc(function(e,i,o){i!=null&&typeof i.toString!="function"&&(i=Ni.call(i)),e[i]=o},Za(dn)),gb=vc(function(e,i,o){i!=null&&typeof i.toString!="function"&&(i=Ni.call(i)),ge.call(e,i)?e[i].push(o):e[i]=[o]},Y),bb=re(Wr);function je(e){return fn(e)?$u(e):va(e)}function pn(e){return fn(e)?$u(e,!0):Qh(e)}function mb(e,i){var o={};return i=Y(i,3),st(e,function(l,p,_){bt(o,i(l,p,_),l)}),o}function Fb(e,i){var o={};return i=Y(i,3),st(e,function(l,p,_){bt(o,p,i(l,p,_))}),o}var Db=Ar(function(e,i,o){Vi(e,i,o)}),ll=Ar(function(e,i,o,l){Vi(e,i,o,l)}),vb=Ft(function(e,i){var o={};if(e==null)return o;var l=!1;i=Ie(i,function(_){return _=$t(_,e),l||(l=_.length>1),_}),at(e,Ra(e),o),l&&(o=xn(o,v|N|x,__));for(var p=i.length;p--;)ya(o,i[p]);return o});function Eb(e,i){return fl(e,rs(Y(i)))}var Ab=Ft(function(e,i){return e==null?{}:Hh(e,i)});function fl(e,i){if(e==null)return{};var o=Ie(Ra(e),function(l){return[l]});return i=Y(i),tc(e,o,function(l,p){return i(l,p[0])})}function Sb(e,i,o){i=$t(i,e);var l=-1,p=i.length;for(p||(p=1,e=t);++l<p;){var _=e==null?t:e[ot(i[l])];_===t&&(l=p,_=o),e=vt(_)?_.call(e):_}return e}function Tb(e,i,o){return e==null?e:Jr(e,i,o)}function Ib(e,i,o,l){return l=typeof l=="function"?l:t,e==null?e:Jr(e,i,o,l)}var pl=Sc(je),dl=Sc(pn);function yb(e,i,o){var l=K(e),p=l||Gt(e)||Ir(e);if(i=Y(i,4),o==null){var _=e&&e.constructor;p?o=l?new _:[]:Ce(e)?o=vt(_)?Er(xi(e)):{}:o={}}return(p?Nn:st)(e,function(g,F,E){return i(o,g,F,E)}),o}function Nb(e,i){return e==null?!0:ya(e,i)}function Cb(e,i,o){return e==null?e:oc(e,i,wa(o))}function wb(e,i,o,l){return l=typeof l=="function"?l:t,e==null?e:oc(e,i,wa(o),l)}function yr(e){return e==null?[]:ua(e,je(e))}function xb(e){return e==null?[]:ua(e,pn(e))}function kb(e,i,o){return o===t&&(o=i,i=t),o!==t&&(o=Ln(o),o=o===o?o:0),i!==t&&(i=Ln(i),i=i===i?i:0),er(Ln(e),i,o)}function Ob(e,i,o){return i=Et(i),o===t?(o=i,i=0):o=Et(o),e=Ln(e),$h(e,i,o)}function Lb(e,i,o){if(o&&typeof o!="boolean"&&sn(e,i,o)&&(i=o=t),o===t&&(typeof i=="boolean"?(o=i,i=t):typeof e=="boolean"&&(o=e,e=t)),e===t&&i===t?(e=0,i=1):(e=Et(e),i===t?(i=e,e=0):i=Et(i)),e>i){var l=e;e=i,i=l}if(o||e%1||i%1){var p=Bu();return Ze(e+p*(i-e+pd("1e-"+((p+"").length-1))),i)}return Sa(e,i)}var Rb=Sr(function(e,i,o){return i=i.toLowerCase(),e+(o?hl(i):i)});function hl(e){return Xa(_e(e).toLowerCase())}function _l(e){return e=_e(e),e&&e.replace(Bp,Td).replace(td,"")}function Ub(e,i,o){e=_e(e),i=Fn(i);var l=e.length;o=o===t?l:er(ne(o),0,l);var p=o;return o-=i.length,o>=0&&e.slice(o,p)==i}function Bb(e){return e=_e(e),e&&bp.test(e)?e.replace(Yo,Id):e}function Pb(e){return e=_e(e),e&&Ap.test(e)?e.replace(Ys,"\\$&"):e}var $b=Sr(function(e,i,o){return e+(o?"-":"")+i.toLowerCase()}),Mb=Sr(function(e,i,o){return e+(o?" ":"")+i.toLowerCase()}),Gb=mc("toLowerCase");function Vb(e,i,o){e=_e(e),i=ne(i);var l=i?br(e):0;if(!i||l>=i)return e;var p=(i-l)/2;return Qi(Ri(p),o)+e+Qi(Li(p),o)}function qb(e,i,o){e=_e(e),i=ne(i);var l=i?br(e):0;return i&&l<i?e+Qi(i-l,o):e}function zb(e,i,o){e=_e(e),i=ne(i);var l=i?br(e):0;return i&&l<i?Qi(i-l,o)+e:e}function jb(e,i,o){return o||i==null?i=0:i&&(i=+i),Zd(_e(e).replace(Ws,""),i||0)}function Yb(e,i,o){return(o?sn(e,i,o):i===t)?i=1:i=ne(i),Ta(_e(e),i)}function Wb(){var e=arguments,i=_e(e[0]);return e.length<3?i:i.replace(e[1],e[2])}var Qb=Sr(function(e,i,o){return e+(o?"_":"")+i.toLowerCase()});function Jb(e,i,o){return o&&typeof o!="number"&&sn(e,i,o)&&(i=o=t),o=o===t?Tn:o>>>0,o?(e=_e(e),e&&(typeof i=="string"||i!=null&&!Qa(i))&&(i=Fn(i),!i&&gr(e))?Mt(Gn(e),0,o):e.split(i,o)):[]}var Hb=Sr(function(e,i,o){return e+(o?" ":"")+Xa(i)});function Xb(e,i,o){return e=_e(e),o=o==null?0:er(ne(o),0,e.length),i=Fn(i),e.slice(o,o+i.length)==i}function Zb(e,i,o){var l=h.templateSettings;o&&sn(e,i,o)&&(i=t),e=_e(e),i=as({},i,l,Tc);var p=as({},i.imports,l.imports,Tc),_=je(p),g=ua(p,_),F,E,y=0,C=i.interpolate||Fi,O="__p += '",U=la((i.escape||Fi).source+"|"+C.source+"|"+(C===Wo?xp:Fi).source+"|"+(i.evaluate||Fi).source+"|$","g"),V="//# sourceURL="+(ge.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++od+"]")+`
`;e.replace(U,function(Q,ie,ce,vn,an,En){return ce||(ce=vn),O+=e.slice(y,En).replace(Pp,yd),ie&&(F=!0,O+=`' +
__e(`+ie+`) +
'`),an&&(E=!0,O+=`';
`+an+`;
__p += '`),ce&&(O+=`' +
((__t = (`+ce+`)) == null ? '' : __t) +
'`),y=En+Q.length,Q}),O+=`';
`;var W=ge.call(i,"variable")&&i.variable;if(!W)O=`with (obj) {
`+O+`
}
`;else if(Cp.test(W))throw new Z(f);O=(E?O.replace(dp,""):O).replace(hp,"$1").replace(_p,"$1;"),O="function("+(W||"obj")+`) {
`+(W?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(F?", __e = _.escape":"")+(E?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+O+`return __p
}`;var te=bl(function(){return fe(_,V+"return "+O).apply(t,g)});if(te.source=O,Wa(te))throw te;return te}function Kb(e){return _e(e).toLowerCase()}function em(e){return _e(e).toUpperCase()}function nm(e,i,o){if(e=_e(e),e&&(o||i===t))return Iu(e);if(!e||!(i=Fn(i)))return e;var l=Gn(e),p=Gn(i),_=yu(l,p),g=Nu(l,p)+1;return Mt(l,_,g).join("")}function tm(e,i,o){if(e=_e(e),e&&(o||i===t))return e.slice(0,wu(e)+1);if(!e||!(i=Fn(i)))return e;var l=Gn(e),p=Nu(l,Gn(i))+1;return Mt(l,0,p).join("")}function rm(e,i,o){if(e=_e(e),e&&(o||i===t))return e.replace(Ws,"");if(!e||!(i=Fn(i)))return e;var l=Gn(e),p=yu(l,Gn(i));return Mt(l,p).join("")}function im(e,i){var o=X,l=tn;if(Ce(i)){var p="separator"in i?i.separator:p;o="length"in i?ne(i.length):o,l="omission"in i?Fn(i.omission):l}e=_e(e);var _=e.length;if(gr(e)){var g=Gn(e);_=g.length}if(o>=_)return e;var F=o-br(l);if(F<1)return l;var E=g?Mt(g,0,F).join(""):e.slice(0,F);if(p===t)return E+l;if(g&&(F+=E.length-F),Qa(p)){if(e.slice(F).search(p)){var y,C=E;for(p.global||(p=la(p.source,_e(Qo.exec(p))+"g")),p.lastIndex=0;y=p.exec(C);)var O=y.index;E=E.slice(0,O===t?F:O)}}else if(e.indexOf(Fn(p),F)!=F){var U=E.lastIndexOf(p);U>-1&&(E=E.slice(0,U))}return E+l}function sm(e){return e=_e(e),e&&gp.test(e)?e.replace(jo,Ld):e}var am=Sr(function(e,i,o){return e+(o?" ":"")+i.toUpperCase()}),Xa=mc("toUpperCase");function gl(e,i,o){return e=_e(e),i=o?t:i,i===t?Cd(e)?Bd(e):Dd(e):e.match(i)||[]}var bl=re(function(e,i){try{return bn(e,t,i)}catch(o){return Wa(o)?o:new Z(o)}}),om=Ft(function(e,i){return Nn(i,function(o){o=ot(o),bt(e,o,ja(e[o],e))}),e});function um(e){var i=e==null?0:e.length,o=Y();return e=i?Ie(e,function(l){if(typeof l[1]!="function")throw new Cn(c);return[o(l[0]),l[1]]}):[],re(function(l){for(var p=-1;++p<i;){var _=e[p];if(bn(_[0],this,l))return bn(_[1],this,l)}})}function cm(e){return Lh(xn(e,v))}function Za(e){return function(){return e}}function lm(e,i){return e==null||e!==e?i:e}var fm=Dc(),pm=Dc(!0);function dn(e){return e}function Ka(e){return Hu(typeof e=="function"?e:xn(e,v))}function dm(e){return Zu(xn(e,v))}function hm(e,i){return Ku(e,xn(i,v))}var _m=re(function(e,i){return function(o){return Wr(o,e,i)}}),gm=re(function(e,i){return function(o){return Wr(e,o,i)}});function eo(e,i,o){var l=je(i),p=Gi(i,l);o==null&&!(Ce(i)&&(p.length||!l.length))&&(o=i,i=e,e=this,p=Gi(i,je(i)));var _=!(Ce(o)&&"chain"in o)||!!o.chain,g=vt(e);return Nn(p,function(F){var E=i[F];e[F]=E,g&&(e.prototype[F]=function(){var y=this.__chain__;if(_||y){var C=e(this.__wrapped__),O=C.__actions__=ln(this.__actions__);return O.push({func:E,args:arguments,thisArg:e}),C.__chain__=y,C}return E.apply(e,Lt([this.value()],arguments))})}),e}function bm(){return We._===this&&(We._=qd),this}function no(){}function mm(e){return e=ne(e),re(function(i){return ec(i,e)})}var Fm=ka(Ie),Dm=ka(vu),vm=ka(ra);function ml(e){return $a(e)?ia(ot(e)):Xh(e)}function Em(e){return function(i){return e==null?t:nr(e,i)}}var Am=Ec(),Sm=Ec(!0);function to(){return[]}function ro(){return!1}function Tm(){return{}}function Im(){return""}function ym(){return!0}function Nm(e,i){if(e=ne(e),e<1||e>Pn)return[];var o=Tn,l=Ze(e,Tn);i=Y(i),e-=Tn;for(var p=oa(l,i);++o<e;)i(o);return p}function Cm(e){return K(e)?Ie(e,ot):Dn(e)?[e]:ln(Pc(_e(e)))}function wm(e){var i=++Gd;return _e(e)+i}var xm=Wi(function(e,i){return e+i},0),km=Oa("ceil"),Om=Wi(function(e,i){return e/i},1),Lm=Oa("floor");function Rm(e){return e&&e.length?Mi(e,dn,ma):t}function Um(e,i){return e&&e.length?Mi(e,Y(i,2),ma):t}function Bm(e){return Su(e,dn)}function Pm(e,i){return Su(e,Y(i,2))}function $m(e){return e&&e.length?Mi(e,dn,Ea):t}function Mm(e,i){return e&&e.length?Mi(e,Y(i,2),Ea):t}var Gm=Wi(function(e,i){return e*i},1),Vm=Oa("round"),qm=Wi(function(e,i){return e-i},0);function zm(e){return e&&e.length?aa(e,dn):0}function jm(e,i){return e&&e.length?aa(e,Y(i,2)):0}return h.after=d0,h.ary=Jc,h.assign=eb,h.assignIn=cl,h.assignInWith=as,h.assignWith=nb,h.at=tb,h.before=Hc,h.bind=ja,h.bindAll=om,h.bindKey=Xc,h.castArray=T0,h.chain=Yc,h.chunk=L_,h.compact=R_,h.concat=U_,h.cond=um,h.conforms=cm,h.constant=Za,h.countBy=zg,h.create=rb,h.curry=Zc,h.curryRight=Kc,h.debounce=el,h.defaults=ib,h.defaultsDeep=sb,h.defer=h0,h.delay=_0,h.difference=B_,h.differenceBy=P_,h.differenceWith=$_,h.drop=M_,h.dropRight=G_,h.dropRightWhile=V_,h.dropWhile=q_,h.fill=z_,h.filter=Yg,h.flatMap=Jg,h.flatMapDeep=Hg,h.flatMapDepth=Xg,h.flatten=Vc,h.flattenDeep=j_,h.flattenDepth=Y_,h.flip=g0,h.flow=fm,h.flowRight=pm,h.fromPairs=W_,h.functions=pb,h.functionsIn=db,h.groupBy=Zg,h.initial=J_,h.intersection=H_,h.intersectionBy=X_,h.intersectionWith=Z_,h.invert=_b,h.invertBy=gb,h.invokeMap=e0,h.iteratee=Ka,h.keyBy=n0,h.keys=je,h.keysIn=pn,h.map=es,h.mapKeys=mb,h.mapValues=Fb,h.matches=dm,h.matchesProperty=hm,h.memoize=ts,h.merge=Db,h.mergeWith=ll,h.method=_m,h.methodOf=gm,h.mixin=eo,h.negate=rs,h.nthArg=mm,h.omit=vb,h.omitBy=Eb,h.once=b0,h.orderBy=t0,h.over=Fm,h.overArgs=m0,h.overEvery=Dm,h.overSome=vm,h.partial=Ya,h.partialRight=nl,h.partition=r0,h.pick=Ab,h.pickBy=fl,h.property=ml,h.propertyOf=Em,h.pull=tg,h.pullAll=zc,h.pullAllBy=rg,h.pullAllWith=ig,h.pullAt=sg,h.range=Am,h.rangeRight=Sm,h.rearg=F0,h.reject=a0,h.remove=ag,h.rest=D0,h.reverse=qa,h.sampleSize=u0,h.set=Tb,h.setWith=Ib,h.shuffle=c0,h.slice=og,h.sortBy=p0,h.sortedUniq=hg,h.sortedUniqBy=_g,h.split=Jb,h.spread=v0,h.tail=gg,h.take=bg,h.takeRight=mg,h.takeRightWhile=Fg,h.takeWhile=Dg,h.tap=Rg,h.throttle=E0,h.thru=Ki,h.toArray=al,h.toPairs=pl,h.toPairsIn=dl,h.toPath=Cm,h.toPlainObject=ul,h.transform=yb,h.unary=A0,h.union=vg,h.unionBy=Eg,h.unionWith=Ag,h.uniq=Sg,h.uniqBy=Tg,h.uniqWith=Ig,h.unset=Nb,h.unzip=za,h.unzipWith=jc,h.update=Cb,h.updateWith=wb,h.values=yr,h.valuesIn=xb,h.without=yg,h.words=gl,h.wrap=S0,h.xor=Ng,h.xorBy=Cg,h.xorWith=wg,h.zip=xg,h.zipObject=kg,h.zipObjectDeep=Og,h.zipWith=Lg,h.entries=pl,h.entriesIn=dl,h.extend=cl,h.extendWith=as,eo(h,h),h.add=xm,h.attempt=bl,h.camelCase=Rb,h.capitalize=hl,h.ceil=km,h.clamp=kb,h.clone=I0,h.cloneDeep=N0,h.cloneDeepWith=C0,h.cloneWith=y0,h.conformsTo=w0,h.deburr=_l,h.defaultTo=lm,h.divide=Om,h.endsWith=Ub,h.eq=qn,h.escape=Bb,h.escapeRegExp=Pb,h.every=jg,h.find=Wg,h.findIndex=Mc,h.findKey=ab,h.findLast=Qg,h.findLastIndex=Gc,h.findLastKey=ob,h.floor=Lm,h.forEach=Wc,h.forEachRight=Qc,h.forIn=ub,h.forInRight=cb,h.forOwn=lb,h.forOwnRight=fb,h.get=Ja,h.gt=x0,h.gte=k0,h.has=hb,h.hasIn=Ha,h.head=qc,h.identity=dn,h.includes=Kg,h.indexOf=Q_,h.inRange=Ob,h.invoke=bb,h.isArguments=ir,h.isArray=K,h.isArrayBuffer=O0,h.isArrayLike=fn,h.isArrayLikeObject=Be,h.isBoolean=L0,h.isBuffer=Gt,h.isDate=R0,h.isElement=U0,h.isEmpty=B0,h.isEqual=P0,h.isEqualWith=$0,h.isError=Wa,h.isFinite=M0,h.isFunction=vt,h.isInteger=tl,h.isLength=is,h.isMap=rl,h.isMatch=G0,h.isMatchWith=V0,h.isNaN=q0,h.isNative=z0,h.isNil=Y0,h.isNull=j0,h.isNumber=il,h.isObject=Ce,h.isObjectLike=Oe,h.isPlainObject=Kr,h.isRegExp=Qa,h.isSafeInteger=W0,h.isSet=sl,h.isString=ss,h.isSymbol=Dn,h.isTypedArray=Ir,h.isUndefined=Q0,h.isWeakMap=J0,h.isWeakSet=H0,h.join=K_,h.kebabCase=$b,h.last=On,h.lastIndexOf=eg,h.lowerCase=Mb,h.lowerFirst=Gb,h.lt=X0,h.lte=Z0,h.max=Rm,h.maxBy=Um,h.mean=Bm,h.meanBy=Pm,h.min=$m,h.minBy=Mm,h.stubArray=to,h.stubFalse=ro,h.stubObject=Tm,h.stubString=Im,h.stubTrue=ym,h.multiply=Gm,h.nth=ng,h.noConflict=bm,h.noop=no,h.now=ns,h.pad=Vb,h.padEnd=qb,h.padStart=zb,h.parseInt=jb,h.random=Lb,h.reduce=i0,h.reduceRight=s0,h.repeat=Yb,h.replace=Wb,h.result=Sb,h.round=Vm,h.runInContext=D,h.sample=o0,h.size=l0,h.snakeCase=Qb,h.some=f0,h.sortedIndex=ug,h.sortedIndexBy=cg,h.sortedIndexOf=lg,h.sortedLastIndex=fg,h.sortedLastIndexBy=pg,h.sortedLastIndexOf=dg,h.startCase=Hb,h.startsWith=Xb,h.subtract=qm,h.sum=zm,h.sumBy=jm,h.template=Zb,h.times=Nm,h.toFinite=Et,h.toInteger=ne,h.toLength=ol,h.toLower=Kb,h.toNumber=Ln,h.toSafeInteger=K0,h.toString=_e,h.toUpper=em,h.trim=nm,h.trimEnd=tm,h.trimStart=rm,h.truncate=im,h.unescape=sm,h.uniqueId=wm,h.upperCase=am,h.upperFirst=Xa,h.each=Wc,h.eachRight=Qc,h.first=qc,eo(h,function(){var e={};return st(h,function(i,o){ge.call(h.prototype,o)||(e[o]=i)}),e}(),{chain:!1}),h.VERSION=s,Nn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){h[e].placeholder=h}),Nn(["drop","take"],function(e,i){oe.prototype[e]=function(o){o=o===t?1:ze(ne(o),0);var l=this.__filtered__&&!i?new oe(this):this.clone();return l.__filtered__?l.__takeCount__=Ze(o,l.__takeCount__):l.__views__.push({size:Ze(o,Tn),type:e+(l.__dir__<0?"Right":"")}),l},oe.prototype[e+"Right"]=function(o){return this.reverse()[e](o).reverse()}}),Nn(["filter","map","takeWhile"],function(e,i){var o=i+1,l=o==gi||o==bi;oe.prototype[e]=function(p){var _=this.clone();return _.__iteratees__.push({iteratee:Y(p,3),type:o}),_.__filtered__=_.__filtered__||l,_}}),Nn(["head","last"],function(e,i){var o="take"+(i?"Right":"");oe.prototype[e]=function(){return this[o](1).value()[0]}}),Nn(["initial","tail"],function(e,i){var o="drop"+(i?"":"Right");oe.prototype[e]=function(){return this.__filtered__?new oe(this):this[o](1)}}),oe.prototype.compact=function(){return this.filter(dn)},oe.prototype.find=function(e){return this.filter(e).head()},oe.prototype.findLast=function(e){return this.reverse().find(e)},oe.prototype.invokeMap=re(function(e,i){return typeof e=="function"?new oe(this):this.map(function(o){return Wr(o,e,i)})}),oe.prototype.reject=function(e){return this.filter(rs(Y(e)))},oe.prototype.slice=function(e,i){e=ne(e);var o=this;return o.__filtered__&&(e>0||i<0)?new oe(o):(e<0?o=o.takeRight(-e):e&&(o=o.drop(e)),i!==t&&(i=ne(i),o=i<0?o.dropRight(-i):o.take(i-e)),o)},oe.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},oe.prototype.toArray=function(){return this.take(Tn)},st(oe.prototype,function(e,i){var o=/^(?:filter|find|map|reject)|While$/.test(i),l=/^(?:head|last)$/.test(i),p=h[l?"take"+(i=="last"?"Right":""):i],_=l||/^find/.test(i);p&&(h.prototype[i]=function(){var g=this.__wrapped__,F=l?[1]:arguments,E=g instanceof oe,y=F[0],C=E||K(g),O=function(ie){var ce=p.apply(h,Lt([ie],F));return l&&U?ce[0]:ce};C&&o&&typeof y=="function"&&y.length!=1&&(E=C=!1);var U=this.__chain__,V=!!this.__actions__.length,W=_&&!U,te=E&&!V;if(!_&&C){g=te?g:new oe(this);var Q=e.apply(g,F);return Q.__actions__.push({func:Ki,args:[O],thisArg:t}),new wn(Q,U)}return W&&te?e.apply(this,F):(Q=this.thru(O),W?l?Q.value()[0]:Q.value():Q)})}),Nn(["pop","push","shift","sort","splice","unshift"],function(e){var i=Ti[e],o=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",l=/^(?:pop|shift)$/.test(e);h.prototype[e]=function(){var p=arguments;if(l&&!this.__chain__){var _=this.value();return i.apply(K(_)?_:[],p)}return this[o](function(g){return i.apply(K(g)?g:[],p)})}}),st(oe.prototype,function(e,i){var o=h[i];if(o){var l=o.name+"";ge.call(vr,l)||(vr[l]=[]),vr[l].push({name:i,func:o})}}),vr[Yi(t,pe).name]=[{name:"wrapper",func:t}],oe.prototype.clone=sh,oe.prototype.reverse=ah,oe.prototype.value=oh,h.prototype.at=Ug,h.prototype.chain=Bg,h.prototype.commit=Pg,h.prototype.next=$g,h.prototype.plant=Gg,h.prototype.reverse=Vg,h.prototype.toJSON=h.prototype.valueOf=h.prototype.value=qg,h.prototype.first=h.prototype.head,Mr&&(h.prototype[Mr]=Mg),h},mr=Pd();Ht?((Ht.exports=mr)._=mr,Ks._=mr):We._=mr}).call(ni)})(vs,vs.exports);var eD=vs.exports;const Nt=X1(eD),nD="LCDB GraphQL",tD="/docs",rD="https://lcdb.org/images/logo.svg",iD="https://lcdb.org/favicon.ico",sD='[{"title":"Welcome","content":"\\nLCDB GraphQL Database\\n=====================\\n\\nThis is the graph database for `https://lcdb.org`.\\n\\nYou are free to use this database for your own purposes.\\n\\nThe endpoint is a POST to `https://graphql.lcdb.org`\\n          "}]',aD="true",Ef={APP_TITLE:nD,SITE_ROOT:tD,APP_LOGO:rD,APP_FAVICON:iD,PAGES:sD,MAGIDOC_GENERATE:aD};function SE(r){return r.get(Ef)}function Uo(r,n){return r.getOrDefault(Ef,n)}function le(r,n){if(!!!r)throw new Error(n)}function Ct(r){return typeof r=="object"&&r!==null}function Jn(r,n){if(!!!r)throw new Error(n??"Unexpected invariant triggered.")}const oD=/\r\n|[\n\r]/g;function bo(r,n){let t=0,s=1;for(const a of r.body.matchAll(oD)){if(typeof a.index=="number"||Jn(!1),a.index>=n)break;t=a.index+a[0].length,s+=1}return{line:s,column:n+1-t}}function uD(r){return Af(r.source,bo(r.source,r.start))}function Af(r,n){const t=r.locationOffset.column-1,s="".padStart(t)+r.body,a=n.line-1,u=r.locationOffset.line-1,c=n.line+u,f=n.line===1?t:0,d=n.column+f,b=`${r.name}:${c}:${d}
`,m=s.split(/\r\n|[\n\r]/g),v=m[a];if(v.length>120){const N=Math.floor(d/80),x=d%80,L=[];for(let R=0;R<v.length;R+=80)L.push(v.slice(R,R+80));return b+Vl([[`${c} |`,L[0]],...L.slice(1,N+1).map(R=>["|",R]),["|","^".padStart(x)],["|",L[N+1]]])}return b+Vl([[`${c-1} |`,m[a-1]],[`${c} |`,v],["|","^".padStart(d)],[`${c+1} |`,m[a+1]]])}function Vl(r){const n=r.filter(([s,a])=>a!==void 0),t=Math.max(...n.map(([s])=>s.length));return n.map(([s,a])=>s.padStart(t)+(a?" "+a:"")).join(`
`)}function cD(r){const n=r[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:r[1],positions:r[2],path:r[3],originalError:r[4],extensions:r[5]}:n}class q extends Error{constructor(n,...t){var s,a,u;const{nodes:c,source:f,positions:d,path:b,originalError:m,extensions:v}=cD(t);super(n),this.name="GraphQLError",this.path=b??void 0,this.originalError=m??void 0,this.nodes=ql(Array.isArray(c)?c:c?[c]:void 0);const N=ql((s=this.nodes)===null||s===void 0?void 0:s.map(L=>L.loc).filter(L=>L!=null));this.source=f??(N==null||(a=N[0])===null||a===void 0?void 0:a.source),this.positions=d??(N==null?void 0:N.map(L=>L.start)),this.locations=d&&f?d.map(L=>bo(f,L)):N==null?void 0:N.map(L=>bo(L.source,L.start));const x=Ct(m==null?void 0:m.extensions)?m==null?void 0:m.extensions:void 0;this.extensions=(u=v??x)!==null&&u!==void 0?u:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),m!=null&&m.stack?Object.defineProperty(this,"stack",{value:m.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,q):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+uD(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+Af(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function ql(r){return r===void 0||r.length===0?void 0:r}function Ye(r,n,t){return new q(`Syntax Error: ${t}`,{source:r,positions:[n]})}class lD{constructor(n,t,s){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=s}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Sf{constructor(n,t,s,a,u,c){this.kind=n,this.start=t,this.end=s,this.line=a,this.column=u,this.value=c,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Tf={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},fD=new Set(Object.keys(Tf));function zl(r){const n=r==null?void 0:r.kind;return typeof n=="string"&&fD.has(n)}var Rn;(function(r){r.QUERY="query",r.MUTATION="mutation",r.SUBSCRIPTION="subscription"})(Rn||(Rn={}));var j;(function(r){r.QUERY="QUERY",r.MUTATION="MUTATION",r.SUBSCRIPTION="SUBSCRIPTION",r.FIELD="FIELD",r.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",r.FRAGMENT_SPREAD="FRAGMENT_SPREAD",r.INLINE_FRAGMENT="INLINE_FRAGMENT",r.VARIABLE_DEFINITION="VARIABLE_DEFINITION",r.SCHEMA="SCHEMA",r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.FIELD_DEFINITION="FIELD_DEFINITION",r.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.ENUM_VALUE="ENUM_VALUE",r.INPUT_OBJECT="INPUT_OBJECT",r.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(j||(j={}));var A;(function(r){r.NAME="Name",r.DOCUMENT="Document",r.OPERATION_DEFINITION="OperationDefinition",r.VARIABLE_DEFINITION="VariableDefinition",r.SELECTION_SET="SelectionSet",r.FIELD="Field",r.ARGUMENT="Argument",r.FRAGMENT_SPREAD="FragmentSpread",r.INLINE_FRAGMENT="InlineFragment",r.FRAGMENT_DEFINITION="FragmentDefinition",r.VARIABLE="Variable",r.INT="IntValue",r.FLOAT="FloatValue",r.STRING="StringValue",r.BOOLEAN="BooleanValue",r.NULL="NullValue",r.ENUM="EnumValue",r.LIST="ListValue",r.OBJECT="ObjectValue",r.OBJECT_FIELD="ObjectField",r.DIRECTIVE="Directive",r.NAMED_TYPE="NamedType",r.LIST_TYPE="ListType",r.NON_NULL_TYPE="NonNullType",r.SCHEMA_DEFINITION="SchemaDefinition",r.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",r.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",r.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",r.FIELD_DEFINITION="FieldDefinition",r.INPUT_VALUE_DEFINITION="InputValueDefinition",r.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",r.UNION_TYPE_DEFINITION="UnionTypeDefinition",r.ENUM_TYPE_DEFINITION="EnumTypeDefinition",r.ENUM_VALUE_DEFINITION="EnumValueDefinition",r.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",r.DIRECTIVE_DEFINITION="DirectiveDefinition",r.SCHEMA_EXTENSION="SchemaExtension",r.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",r.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",r.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",r.UNION_TYPE_EXTENSION="UnionTypeExtension",r.ENUM_TYPE_EXTENSION="EnumTypeExtension",r.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(A||(A={}));function mo(r){return r===9||r===32}function ci(r){return r>=48&&r<=57}function If(r){return r>=97&&r<=122||r>=65&&r<=90}function Bo(r){return If(r)||r===95}function yf(r){return If(r)||ci(r)||r===95}function pD(r){var n;let t=Number.MAX_SAFE_INTEGER,s=null,a=-1;for(let c=0;c<r.length;++c){var u;const f=r[c],d=dD(f);d!==f.length&&(s=(u=s)!==null&&u!==void 0?u:c,a=c,c!==0&&d<t&&(t=d))}return r.map((c,f)=>f===0?c:c.slice(t)).slice((n=s)!==null&&n!==void 0?n:0,a+1)}function dD(r){let n=0;for(;n<r.length&&mo(r.charCodeAt(n));)++n;return n}function hD(r,n){const t=r.replace(/"""/g,'\\"""'),s=t.split(/\r\n|[\n\r]/g),a=s.length===1,u=s.length>1&&s.slice(1).every(x=>x.length===0||mo(x.charCodeAt(0))),c=t.endsWith('\\"""'),f=r.endsWith('"')&&!c,d=r.endsWith("\\"),b=f||d,m=!(n!=null&&n.minimize)&&(!a||r.length>70||b||u||c);let v="";const N=a&&mo(r.charCodeAt(0));return(m&&!N||u)&&(v+=`
`),v+=t,(m||b)&&(v+=`
`),'"""'+v+'"""'}var w;(function(r){r.SOF="<SOF>",r.EOF="<EOF>",r.BANG="!",r.DOLLAR="$",r.AMP="&",r.PAREN_L="(",r.PAREN_R=")",r.SPREAD="...",r.COLON=":",r.EQUALS="=",r.AT="@",r.BRACKET_L="[",r.BRACKET_R="]",r.BRACE_L="{",r.PIPE="|",r.BRACE_R="}",r.NAME="Name",r.INT="Int",r.FLOAT="Float",r.STRING="String",r.BLOCK_STRING="BlockString",r.COMMENT="Comment"})(w||(w={}));class _D{constructor(n){const t=new Sf(w.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==w.EOF)do if(n.next)n=n.next;else{const t=bD(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===w.COMMENT);return n}}function gD(r){return r===w.BANG||r===w.DOLLAR||r===w.AMP||r===w.PAREN_L||r===w.PAREN_R||r===w.SPREAD||r===w.COLON||r===w.EQUALS||r===w.AT||r===w.BRACKET_L||r===w.BRACKET_R||r===w.BRACE_L||r===w.PIPE||r===w.BRACE_R}function xr(r){return r>=0&&r<=55295||r>=57344&&r<=1114111}function Cs(r,n){return Nf(r.charCodeAt(n))&&Cf(r.charCodeAt(n+1))}function Nf(r){return r>=55296&&r<=56319}function Cf(r){return r>=56320&&r<=57343}function or(r,n){const t=r.source.body.codePointAt(n);if(t===void 0)return w.EOF;if(t>=32&&t<=126){const s=String.fromCodePoint(t);return s==='"'?`'"'`:`"${s}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function Ge(r,n,t,s,a){const u=r.line,c=1+t-r.lineStart;return new Sf(n,t,s,u,c,a)}function bD(r,n){const t=r.source.body,s=t.length;let a=n;for(;a<s;){const u=t.charCodeAt(a);switch(u){case 65279:case 9:case 32:case 44:++a;continue;case 10:++a,++r.line,r.lineStart=a;continue;case 13:t.charCodeAt(a+1)===10?a+=2:++a,++r.line,r.lineStart=a;continue;case 35:return mD(r,a);case 33:return Ge(r,w.BANG,a,a+1);case 36:return Ge(r,w.DOLLAR,a,a+1);case 38:return Ge(r,w.AMP,a,a+1);case 40:return Ge(r,w.PAREN_L,a,a+1);case 41:return Ge(r,w.PAREN_R,a,a+1);case 46:if(t.charCodeAt(a+1)===46&&t.charCodeAt(a+2)===46)return Ge(r,w.SPREAD,a,a+3);break;case 58:return Ge(r,w.COLON,a,a+1);case 61:return Ge(r,w.EQUALS,a,a+1);case 64:return Ge(r,w.AT,a,a+1);case 91:return Ge(r,w.BRACKET_L,a,a+1);case 93:return Ge(r,w.BRACKET_R,a,a+1);case 123:return Ge(r,w.BRACE_L,a,a+1);case 124:return Ge(r,w.PIPE,a,a+1);case 125:return Ge(r,w.BRACE_R,a,a+1);case 34:return t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34?SD(r,a):DD(r,a)}if(ci(u)||u===45)return FD(r,a,u);if(Bo(u))return TD(r,a);throw Ye(r.source,a,u===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:xr(u)||Cs(t,a)?`Unexpected character: ${or(r,a)}.`:`Invalid character: ${or(r,a)}.`)}return Ge(r,w.EOF,s,s)}function mD(r,n){const t=r.source.body,s=t.length;let a=n+1;for(;a<s;){const u=t.charCodeAt(a);if(u===10||u===13)break;if(xr(u))++a;else if(Cs(t,a))a+=2;else break}return Ge(r,w.COMMENT,n,a,t.slice(n+1,a))}function FD(r,n,t){const s=r.source.body;let a=n,u=t,c=!1;if(u===45&&(u=s.charCodeAt(++a)),u===48){if(u=s.charCodeAt(++a),ci(u))throw Ye(r.source,a,`Invalid number, unexpected digit after 0: ${or(r,a)}.`)}else a=oo(r,a,u),u=s.charCodeAt(a);if(u===46&&(c=!0,u=s.charCodeAt(++a),a=oo(r,a,u),u=s.charCodeAt(a)),(u===69||u===101)&&(c=!0,u=s.charCodeAt(++a),(u===43||u===45)&&(u=s.charCodeAt(++a)),a=oo(r,a,u),u=s.charCodeAt(a)),u===46||Bo(u))throw Ye(r.source,a,`Invalid number, expected digit but got: ${or(r,a)}.`);return Ge(r,c?w.FLOAT:w.INT,n,a,s.slice(n,a))}function oo(r,n,t){if(!ci(t))throw Ye(r.source,n,`Invalid number, expected digit but got: ${or(r,n)}.`);const s=r.source.body;let a=n+1;for(;ci(s.charCodeAt(a));)++a;return a}function DD(r,n){const t=r.source.body,s=t.length;let a=n+1,u=a,c="";for(;a<s;){const f=t.charCodeAt(a);if(f===34)return c+=t.slice(u,a),Ge(r,w.STRING,n,a+1,c);if(f===92){c+=t.slice(u,a);const d=t.charCodeAt(a+1)===117?t.charCodeAt(a+2)===123?vD(r,a):ED(r,a):AD(r,a);c+=d.value,a+=d.size,u=a;continue}if(f===10||f===13)break;if(xr(f))++a;else if(Cs(t,a))a+=2;else throw Ye(r.source,a,`Invalid character within String: ${or(r,a)}.`)}throw Ye(r.source,a,"Unterminated string.")}function vD(r,n){const t=r.source.body;let s=0,a=3;for(;a<12;){const u=t.charCodeAt(n+a++);if(u===125){if(a<5||!xr(s))break;return{value:String.fromCodePoint(s),size:a}}if(s=s<<4|ti(u),s<0)break}throw Ye(r.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+a)}".`)}function ED(r,n){const t=r.source.body,s=jl(t,n+2);if(xr(s))return{value:String.fromCodePoint(s),size:6};if(Nf(s)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const a=jl(t,n+8);if(Cf(a))return{value:String.fromCodePoint(s,a),size:12}}throw Ye(r.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function jl(r,n){return ti(r.charCodeAt(n))<<12|ti(r.charCodeAt(n+1))<<8|ti(r.charCodeAt(n+2))<<4|ti(r.charCodeAt(n+3))}function ti(r){return r>=48&&r<=57?r-48:r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:-1}function AD(r,n){const t=r.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Ye(r.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function SD(r,n){const t=r.source.body,s=t.length;let a=r.lineStart,u=n+3,c=u,f="";const d=[];for(;u<s;){const b=t.charCodeAt(u);if(b===34&&t.charCodeAt(u+1)===34&&t.charCodeAt(u+2)===34){f+=t.slice(c,u),d.push(f);const m=Ge(r,w.BLOCK_STRING,n,u+3,pD(d).join(`
`));return r.line+=d.length-1,r.lineStart=a,m}if(b===92&&t.charCodeAt(u+1)===34&&t.charCodeAt(u+2)===34&&t.charCodeAt(u+3)===34){f+=t.slice(c,u),c=u+1,u+=4;continue}if(b===10||b===13){f+=t.slice(c,u),d.push(f),b===13&&t.charCodeAt(u+1)===10?u+=2:++u,f="",c=u,a=u;continue}if(xr(b))++u;else if(Cs(t,u))u+=2;else throw Ye(r.source,u,`Invalid character within String: ${or(r,u)}.`)}throw Ye(r.source,u,"Unterminated string.")}function TD(r,n){const t=r.source.body,s=t.length;let a=n+1;for(;a<s;){const u=t.charCodeAt(a);if(yf(u))++a;else break}return Ge(r,w.NAME,n,a,t.slice(n,a))}const ID=10,wf=2;function z(r){return ws(r,[])}function ws(r,n){switch(typeof r){case"string":return JSON.stringify(r);case"function":return r.name?`[function ${r.name}]`:"[function]";case"object":return yD(r,n);default:return String(r)}}function yD(r,n){if(r===null)return"null";if(n.includes(r))return"[Circular]";const t=[...n,r];if(ND(r)){const s=r.toJSON();if(s!==r)return typeof s=="string"?s:ws(s,t)}else if(Array.isArray(r))return wD(r,t);return CD(r,t)}function ND(r){return typeof r.toJSON=="function"}function CD(r,n){const t=Object.entries(r);return t.length===0?"{}":n.length>wf?"["+xD(r)+"]":"{ "+t.map(([a,u])=>a+": "+ws(u,n)).join(", ")+" }"}function wD(r,n){if(r.length===0)return"[]";if(n.length>wf)return"[Array]";const t=Math.min(ID,r.length),s=r.length-t,a=[];for(let u=0;u<t;++u)a.push(ws(r[u],n));return s===1?a.push("... 1 more item"):s>1&&a.push(`... ${s} more items`),"["+a.join(", ")+"]"}function xD(r){const n=Object.prototype.toString.call(r).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof r.constructor=="function"){const t=r.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const pt=globalThis.process?function(n,t){return n instanceof t}:function(n,t){if(n instanceof t)return!0;if(typeof n=="object"&&n!==null){var s;const a=t.prototype[Symbol.toStringTag],u=Symbol.toStringTag in n?n[Symbol.toStringTag]:(s=n.constructor)===null||s===void 0?void 0:s.name;if(a===u){const c=z(n);throw new Error(`Cannot use ${a} "${c}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class xf{constructor(n,t="GraphQL request",s={line:1,column:1}){typeof n=="string"||le(!1,`Body must be a string. Received: ${z(n)}.`),this.body=n,this.name=t,this.locationOffset=s,this.locationOffset.line>0||le(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||le(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function kD(r){return pt(r,xf)}function OD(r,n){return new kf(r,n).parseDocument()}function LD(r,n){const t=new kf(r,n);t.expectToken(w.SOF);const s=t.parseValueLiteral(!1);return t.expectToken(w.EOF),s}class kf{constructor(n,t={}){const s=kD(n)?n:new xf(n);this._lexer=new _D(s),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(w.NAME);return this.node(n,{kind:A.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:A.DOCUMENT,definitions:this.many(w.SOF,this.parseDefinition,w.EOF)})}parseDefinition(){if(this.peek(w.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===w.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw Ye(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(w.BRACE_L))return this.node(n,{kind:A.OPERATION_DEFINITION,operation:Rn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let s;return this.peek(w.NAME)&&(s=this.parseName()),this.node(n,{kind:A.OPERATION_DEFINITION,operation:t,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(w.NAME);switch(n.value){case"query":return Rn.QUERY;case"mutation":return Rn.MUTATION;case"subscription":return Rn.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(w.PAREN_L,this.parseVariableDefinition,w.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:A.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(w.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(w.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(w.DOLLAR),this.node(n,{kind:A.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:A.SELECTION_SET,selections:this.many(w.BRACE_L,this.parseSelection,w.BRACE_R)})}parseSelection(){return this.peek(w.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let s,a;return this.expectOptionalToken(w.COLON)?(s=t,a=this.parseName()):a=t,this.node(n,{kind:A.FIELD,alias:s,name:a,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(w.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(w.PAREN_L,t,w.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,s=this.parseName();return this.expectToken(w.COLON),this.node(t,{kind:A.ARGUMENT,name:s,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(w.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(w.NAME)?this.node(n,{kind:A.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:A.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:A.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:A.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case w.BRACKET_L:return this.parseList(n);case w.BRACE_L:return this.parseObject(n);case w.INT:return this.advanceLexer(),this.node(t,{kind:A.INT,value:t.value});case w.FLOAT:return this.advanceLexer(),this.node(t,{kind:A.FLOAT,value:t.value});case w.STRING:case w.BLOCK_STRING:return this.parseStringLiteral();case w.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:A.BOOLEAN,value:!0});case"false":return this.node(t,{kind:A.BOOLEAN,value:!1});case"null":return this.node(t,{kind:A.NULL});default:return this.node(t,{kind:A.ENUM,value:t.value})}case w.DOLLAR:if(n)if(this.expectToken(w.DOLLAR),this._lexer.token.kind===w.NAME){const s=this._lexer.token.value;throw Ye(this._lexer.source,t.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:A.STRING,value:n.value,block:n.kind===w.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:A.LIST,values:this.any(w.BRACKET_L,t,w.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:A.OBJECT,fields:this.any(w.BRACE_L,t,w.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,s=this.parseName();return this.expectToken(w.COLON),this.node(t,{kind:A.OBJECT_FIELD,name:s,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(w.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(w.AT),this.node(t,{kind:A.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(w.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(w.BRACKET_R),t=this.node(n,{kind:A.LIST_TYPE,type:s})}else t=this.parseNamedType();return this.expectOptionalToken(w.BANG)?this.node(n,{kind:A.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:A.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(w.STRING)||this.peek(w.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),a=this.many(w.BRACE_L,this.parseOperationTypeDefinition,w.BRACE_R);return this.node(n,{kind:A.SCHEMA_DEFINITION,description:t,directives:s,operationTypes:a})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(w.COLON);const s=this.parseNamedType();return this.node(n,{kind:A.OPERATION_TYPE_DEFINITION,operation:t,type:s})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),a=this.parseConstDirectives();return this.node(n,{kind:A.SCALAR_TYPE_DEFINITION,description:t,name:s,directives:a})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),a=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(n,{kind:A.OBJECT_TYPE_DEFINITION,description:t,name:s,interfaces:a,directives:u,fields:c})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(w.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(w.BRACE_L,this.parseFieldDefinition,w.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName(),a=this.parseArgumentDefs();this.expectToken(w.COLON);const u=this.parseTypeReference(),c=this.parseConstDirectives();return this.node(n,{kind:A.FIELD_DEFINITION,description:t,name:s,arguments:a,type:u,directives:c})}parseArgumentDefs(){return this.optionalMany(w.PAREN_L,this.parseInputValueDef,w.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName();this.expectToken(w.COLON);const a=this.parseTypeReference();let u;this.expectOptionalToken(w.EQUALS)&&(u=this.parseConstValueLiteral());const c=this.parseConstDirectives();return this.node(n,{kind:A.INPUT_VALUE_DEFINITION,description:t,name:s,type:a,defaultValue:u,directives:c})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),a=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(n,{kind:A.INTERFACE_TYPE_DEFINITION,description:t,name:s,interfaces:a,directives:u,fields:c})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),a=this.parseConstDirectives(),u=this.parseUnionMemberTypes();return this.node(n,{kind:A.UNION_TYPE_DEFINITION,description:t,name:s,directives:a,types:u})}parseUnionMemberTypes(){return this.expectOptionalToken(w.EQUALS)?this.delimitedMany(w.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),a=this.parseConstDirectives(),u=this.parseEnumValuesDefinition();return this.node(n,{kind:A.ENUM_TYPE_DEFINITION,description:t,name:s,directives:a,values:u})}parseEnumValuesDefinition(){return this.optionalMany(w.BRACE_L,this.parseEnumValueDefinition,w.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseEnumValueName(),a=this.parseConstDirectives();return this.node(n,{kind:A.ENUM_VALUE_DEFINITION,description:t,name:s,directives:a})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Ye(this._lexer.source,this._lexer.token.start,`${ps(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),a=this.parseConstDirectives(),u=this.parseInputFieldsDefinition();return this.node(n,{kind:A.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:s,directives:a,fields:u})}parseInputFieldsDefinition(){return this.optionalMany(w.BRACE_L,this.parseInputValueDef,w.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===w.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),s=this.optionalMany(w.BRACE_L,this.parseOperationTypeDefinition,w.BRACE_R);if(t.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:A.SCHEMA_EXTENSION,directives:t,operationTypes:s})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(n,{kind:A.SCALAR_TYPE_EXTENSION,name:t,directives:s})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(s.length===0&&a.length===0&&u.length===0)throw this.unexpected();return this.node(n,{kind:A.OBJECT_TYPE_EXTENSION,name:t,interfaces:s,directives:a,fields:u})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(s.length===0&&a.length===0&&u.length===0)throw this.unexpected();return this.node(n,{kind:A.INTERFACE_TYPE_EXTENSION,name:t,interfaces:s,directives:a,fields:u})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),s=this.parseConstDirectives(),a=this.parseUnionMemberTypes();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:A.UNION_TYPE_EXTENSION,name:t,directives:s,types:a})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),s=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:A.ENUM_TYPE_EXTENSION,name:t,directives:s,values:a})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),s=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();if(s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:A.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:s,fields:a})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(w.AT);const s=this.parseName(),a=this.parseArgumentDefs(),u=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const c=this.parseDirectiveLocations();return this.node(n,{kind:A.DIRECTIVE_DEFINITION,description:t,name:s,arguments:a,repeatable:u,locations:c})}parseDirectiveLocations(){return this.delimitedMany(w.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(j,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new lD(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw Ye(this._lexer.source,t.start,`Expected ${Of(n)}, found ${ps(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===w.NAME&&t.value===n)this.advanceLexer();else throw Ye(this._lexer.source,t.start,`Expected "${n}", found ${ps(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===w.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return Ye(this._lexer.source,t.start,`Unexpected ${ps(t)}.`)}any(n,t,s){this.expectToken(n);const a=[];for(;!this.expectOptionalToken(s);)a.push(t.call(this));return a}optionalMany(n,t,s){if(this.expectOptionalToken(n)){const a=[];do a.push(t.call(this));while(!this.expectOptionalToken(s));return a}return[]}many(n,t,s){this.expectToken(n);const a=[];do a.push(t.call(this));while(!this.expectOptionalToken(s));return a}delimitedMany(n,t){this.expectOptionalToken(n);const s=[];do s.push(t.call(this));while(this.expectOptionalToken(n));return s}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==w.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw Ye(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function ps(r){const n=r.value;return Of(r.kind)+(n!=null?` "${n}"`:"")}function Of(r){return gD(r)?`"${r}"`:r}const RD=5;function xs(r,n){const[t,s]=n?[r,n]:[void 0,r];let a=" Did you mean ";t&&(a+=t+" ");const u=s.map(d=>`"${d}"`);switch(u.length){case 0:return"";case 1:return a+u[0]+"?";case 2:return a+u[0]+" or "+u[1]+"?"}const c=u.slice(0,RD),f=c.pop();return a+c.join(", ")+", or "+f+"?"}function Yl(r){return r}function Cr(r,n){const t=Object.create(null);for(const s of r)t[n(s)]=s;return t}function sr(r,n,t){const s=Object.create(null);for(const a of r)s[n(a)]=t(a);return s}function St(r,n){const t=Object.create(null);for(const s of Object.keys(r))t[s]=n(r[s],s);return t}function UD(r,n){let t=0,s=0;for(;t<r.length&&s<n.length;){let a=r.charCodeAt(t),u=n.charCodeAt(s);if(ds(a)&&ds(u)){let c=0;do++t,c=c*10+a-Fo,a=r.charCodeAt(t);while(ds(a)&&c>0);let f=0;do++s,f=f*10+u-Fo,u=n.charCodeAt(s);while(ds(u)&&f>0);if(c<f)return-1;if(c>f)return 1}else{if(a<u)return-1;if(a>u)return 1;++t,++s}}return r.length-n.length}const Fo=48,BD=57;function ds(r){return!isNaN(r)&&Fo<=r&&r<=BD}function ks(r,n){const t=Object.create(null),s=new PD(r),a=Math.floor(r.length*.4)+1;for(const u of n){const c=s.measure(u,a);c!==void 0&&(t[u]=c)}return Object.keys(t).sort((u,c)=>{const f=t[u]-t[c];return f!==0?f:UD(u,c)})}class PD{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=Wl(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const s=n.toLowerCase();if(this._inputLowerCase===s)return 1;let a=Wl(s),u=this._inputArray;if(a.length<u.length){const m=a;a=u,u=m}const c=a.length,f=u.length;if(c-f>t)return;const d=this._rows;for(let m=0;m<=f;m++)d[0][m]=m;for(let m=1;m<=c;m++){const v=d[(m-1)%3],N=d[m%3];let x=N[0]=m;for(let L=1;L<=f;L++){const R=a[m-1]===u[L-1]?0:1;let J=Math.min(v[L]+1,N[L-1]+1,v[L-1]+R);if(m>1&&L>1&&a[m-1]===u[L-2]&&a[m-2]===u[L-1]){const pe=d[(m-2)%3][L-2];J=Math.min(J,pe+1)}J<x&&(x=J),N[L]=J}if(x>t)return}const b=d[c%3][f];return b<=t?b:void 0}}function Wl(r){const n=r.length,t=new Array(n);for(let s=0;s<n;++s)t[s]=r.charCodeAt(s);return t}function Bn(r){if(r==null)return Object.create(null);if(Object.getPrototypeOf(r)===null)return r;const n=Object.create(null);for(const[t,s]of Object.entries(r))n[t]=s;return n}function $D(r){return`"${r.replace(MD,GD)}"`}const MD=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function GD(r){return VD[r.charCodeAt(0)]}const VD=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],ri=Object.freeze({});function Lf(r,n,t=Tf){const s=new Map;for(const pe of Object.values(A))s.set(pe,Rf(n,pe));let a,u=Array.isArray(r),c=[r],f=-1,d=[],b=r,m,v;const N=[],x=[];do{f++;const pe=f===c.length,Me=pe&&d.length!==0;if(pe){if(m=x.length===0?void 0:N[N.length-1],b=v,v=x.pop(),Me)if(u){b=b.slice();let Ne=0;for(const[ke,nn]of d){const He=ke-Ne;nn===null?(b.splice(He,1),Ne++):b[He]=nn}}else{b=Object.defineProperties({},Object.getOwnPropertyDescriptors(b));for(const[Ne,ke]of d)b[Ne]=ke}f=a.index,c=a.keys,d=a.edits,u=a.inArray,a=a.prev}else if(v){if(m=u?f:c[f],b=v[m],b==null)continue;N.push(m)}let Ee;if(!Array.isArray(b)){var L,R;zl(b)||le(!1,`Invalid AST Node: ${z(b)}.`);const Ne=pe?(L=s.get(b.kind))===null||L===void 0?void 0:L.leave:(R=s.get(b.kind))===null||R===void 0?void 0:R.enter;if(Ee=Ne==null?void 0:Ne.call(n,b,m,v,N,x),Ee===ri)break;if(Ee===!1){if(!pe){N.pop();continue}}else if(Ee!==void 0&&(d.push([m,Ee]),!pe))if(zl(Ee))b=Ee;else{N.pop();continue}}if(Ee===void 0&&Me&&d.push([m,b]),pe)N.pop();else{var J;a={inArray:u,index:f,keys:c,edits:d,prev:a},u=Array.isArray(b),c=u?b:(J=t[b.kind])!==null&&J!==void 0?J:[],f=-1,d=[],v&&x.push(v),v=b}}while(a!==void 0);return d.length!==0?d[d.length-1][1]:r}function qD(r){const n=new Array(r.length).fill(null),t=Object.create(null);for(const s of Object.values(A)){let a=!1;const u=new Array(r.length).fill(void 0),c=new Array(r.length).fill(void 0);for(let d=0;d<r.length;++d){const{enter:b,leave:m}=Rf(r[d],s);a||(a=b!=null||m!=null),u[d]=b,c[d]=m}if(!a)continue;const f={enter(...d){const b=d[0];for(let v=0;v<r.length;v++)if(n[v]===null){var m;const N=(m=u[v])===null||m===void 0?void 0:m.apply(r[v],d);if(N===!1)n[v]=b;else if(N===ri)n[v]=ri;else if(N!==void 0)return N}},leave(...d){const b=d[0];for(let v=0;v<r.length;v++)if(n[v]===null){var m;const N=(m=c[v])===null||m===void 0?void 0:m.apply(r[v],d);if(N===ri)n[v]=ri;else if(N!==void 0&&N!==!1)return N}else n[v]===b&&(n[v]=null)}};t[s]=f}return t}function Rf(r,n){const t=r[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:r.enter,leave:r.leave}}function lt(r){return Lf(r,jD)}const zD=80,jD={Name:{leave:r=>r.value},Variable:{leave:r=>"$"+r.name},Document:{leave:r=>G(r.definitions,`

`)},OperationDefinition:{leave(r){const n=ue("(",G(r.variableDefinitions,", "),")"),t=G([r.operation,G([r.name,n]),G(r.directives," ")]," ");return(t==="query"?"":t+" ")+r.selectionSet}},VariableDefinition:{leave:({variable:r,type:n,defaultValue:t,directives:s})=>r+": "+n+ue(" = ",t)+ue(" ",G(s," "))},SelectionSet:{leave:({selections:r})=>jn(r)},Field:{leave({alias:r,name:n,arguments:t,directives:s,selectionSet:a}){const u=ue("",r,": ")+n;let c=u+ue("(",G(t,", "),")");return c.length>zD&&(c=u+ue(`(
`,gs(G(t,`
`)),`
)`)),G([c,G(s," "),a]," ")}},Argument:{leave:({name:r,value:n})=>r+": "+n},FragmentSpread:{leave:({name:r,directives:n})=>"..."+r+ue(" ",G(n," "))},InlineFragment:{leave:({typeCondition:r,directives:n,selectionSet:t})=>G(["...",ue("on ",r),G(n," "),t]," ")},FragmentDefinition:{leave:({name:r,typeCondition:n,variableDefinitions:t,directives:s,selectionSet:a})=>`fragment ${r}${ue("(",G(t,", "),")")} on ${n} ${ue("",G(s," ")," ")}`+a},IntValue:{leave:({value:r})=>r},FloatValue:{leave:({value:r})=>r},StringValue:{leave:({value:r,block:n})=>n?hD(r):$D(r)},BooleanValue:{leave:({value:r})=>r?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:r})=>r},ListValue:{leave:({values:r})=>"["+G(r,", ")+"]"},ObjectValue:{leave:({fields:r})=>"{"+G(r,", ")+"}"},ObjectField:{leave:({name:r,value:n})=>r+": "+n},Directive:{leave:({name:r,arguments:n})=>"@"+r+ue("(",G(n,", "),")")},NamedType:{leave:({name:r})=>r},ListType:{leave:({type:r})=>"["+r+"]"},NonNullType:{leave:({type:r})=>r+"!"},SchemaDefinition:{leave:({description:r,directives:n,operationTypes:t})=>ue("",r,`
`)+G(["schema",G(n," "),jn(t)]," ")},OperationTypeDefinition:{leave:({operation:r,type:n})=>r+": "+n},ScalarTypeDefinition:{leave:({description:r,name:n,directives:t})=>ue("",r,`
`)+G(["scalar",n,G(t," ")]," ")},ObjectTypeDefinition:{leave:({description:r,name:n,interfaces:t,directives:s,fields:a})=>ue("",r,`
`)+G(["type",n,ue("implements ",G(t," & ")),G(s," "),jn(a)]," ")},FieldDefinition:{leave:({description:r,name:n,arguments:t,type:s,directives:a})=>ue("",r,`
`)+n+(Ql(t)?ue(`(
`,gs(G(t,`
`)),`
)`):ue("(",G(t,", "),")"))+": "+s+ue(" ",G(a," "))},InputValueDefinition:{leave:({description:r,name:n,type:t,defaultValue:s,directives:a})=>ue("",r,`
`)+G([n+": "+t,ue("= ",s),G(a," ")]," ")},InterfaceTypeDefinition:{leave:({description:r,name:n,interfaces:t,directives:s,fields:a})=>ue("",r,`
`)+G(["interface",n,ue("implements ",G(t," & ")),G(s," "),jn(a)]," ")},UnionTypeDefinition:{leave:({description:r,name:n,directives:t,types:s})=>ue("",r,`
`)+G(["union",n,G(t," "),ue("= ",G(s," | "))]," ")},EnumTypeDefinition:{leave:({description:r,name:n,directives:t,values:s})=>ue("",r,`
`)+G(["enum",n,G(t," "),jn(s)]," ")},EnumValueDefinition:{leave:({description:r,name:n,directives:t})=>ue("",r,`
`)+G([n,G(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:r,name:n,directives:t,fields:s})=>ue("",r,`
`)+G(["input",n,G(t," "),jn(s)]," ")},DirectiveDefinition:{leave:({description:r,name:n,arguments:t,repeatable:s,locations:a})=>ue("",r,`
`)+"directive @"+n+(Ql(t)?ue(`(
`,gs(G(t,`
`)),`
)`):ue("(",G(t,", "),")"))+(s?" repeatable":"")+" on "+G(a," | ")},SchemaExtension:{leave:({directives:r,operationTypes:n})=>G(["extend schema",G(r," "),jn(n)]," ")},ScalarTypeExtension:{leave:({name:r,directives:n})=>G(["extend scalar",r,G(n," ")]," ")},ObjectTypeExtension:{leave:({name:r,interfaces:n,directives:t,fields:s})=>G(["extend type",r,ue("implements ",G(n," & ")),G(t," "),jn(s)]," ")},InterfaceTypeExtension:{leave:({name:r,interfaces:n,directives:t,fields:s})=>G(["extend interface",r,ue("implements ",G(n," & ")),G(t," "),jn(s)]," ")},UnionTypeExtension:{leave:({name:r,directives:n,types:t})=>G(["extend union",r,G(n," "),ue("= ",G(t," | "))]," ")},EnumTypeExtension:{leave:({name:r,directives:n,values:t})=>G(["extend enum",r,G(n," "),jn(t)]," ")},InputObjectTypeExtension:{leave:({name:r,directives:n,fields:t})=>G(["extend input",r,G(n," "),jn(t)]," ")}};function G(r,n=""){var t;return(t=r==null?void 0:r.filter(s=>s).join(n))!==null&&t!==void 0?t:""}function jn(r){return ue(`{
`,gs(G(r,`
`)),`
}`)}function ue(r,n,t=""){return n!=null&&n!==""?r+n+t:""}function gs(r){return ue("  ",r.replace(/\n/g,`
  `))}function Ql(r){var n;return(n=r==null?void 0:r.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function Do(r,n){switch(r.kind){case A.NULL:return null;case A.INT:return parseInt(r.value,10);case A.FLOAT:return parseFloat(r.value);case A.STRING:case A.ENUM:case A.BOOLEAN:return r.value;case A.LIST:return r.values.map(t=>Do(t,n));case A.OBJECT:return sr(r.fields,t=>t.name.value,t=>Do(t.value,n));case A.VARIABLE:return n==null?void 0:n[r.name.value]}}function rt(r){if(r!=null||le(!1,"Must provide name."),typeof r=="string"||le(!1,"Expected name to be a string."),r.length===0)throw new q("Expected name to be a non-empty string.");for(let n=1;n<r.length;++n)if(!yf(r.charCodeAt(n)))throw new q(`Names must only contain [_a-zA-Z0-9] but "${r}" does not.`);if(!Bo(r.charCodeAt(0)))throw new q(`Names must start with [_a-zA-Z] but "${r}" does not.`);return r}function YD(r){if(r==="true"||r==="false"||r==="null")throw new q(`Enum values cannot be named: ${r}`);return rt(r)}function Po(r){return Wt(r)||gn(r)||un(r)||Hn(r)||Xn(r)||Zn(r)||lr(r)||on(r)}function Wt(r){return pt(r,wt)}function gn(r){return pt(r,ft)}function WD(r){if(!gn(r))throw new Error(`Expected ${z(r)} to be a GraphQL Object type.`);return r}function un(r){return pt(r,Es)}function QD(r){if(!un(r))throw new Error(`Expected ${z(r)} to be a GraphQL Interface type.`);return r}function Hn(r){return pt(r,As)}function Xn(r){return pt(r,wr)}function Zn(r){return pt(r,Ss)}function lr(r){return pt(r,_n)}function on(r){return pt(r,se)}function Uf(r){return Wt(r)||Xn(r)||Zn(r)||$o(r)&&Uf(r.ofType)}function Bf(r){return Wt(r)||gn(r)||un(r)||Hn(r)||Xn(r)||$o(r)&&Bf(r.ofType)}function Pf(r){return Wt(r)||Xn(r)}function JD(r){return un(r)||Hn(r)}class _n{constructor(n){Po(n)||le(!1,`Expected ${z(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class se{constructor(n){$f(n)||le(!1,`Expected ${z(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function $o(r){return lr(r)||on(r)}function $f(r){return Po(r)&&!on(r)}function HD(r){if(!$f(r))throw new Error(`Expected ${z(r)} to be a GraphQL nullable type.`);return r}function TE(r){return Wt(r)||gn(r)||un(r)||Hn(r)||Xn(r)||Zn(r)}function XD(r){if(r){let n=r;for(;$o(n);)n=n.ofType;return n}}function Mf(r){return typeof r=="function"?r():r}function Gf(r){return typeof r=="function"?r():r}class wt{constructor(n){var t,s,a,u;const c=(t=n.parseValue)!==null&&t!==void 0?t:Yl;this.name=rt(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(s=n.serialize)!==null&&s!==void 0?s:Yl,this.parseValue=c,this.parseLiteral=(a=n.parseLiteral)!==null&&a!==void 0?a:(f,d)=>c(Do(f,d)),this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(u=n.extensionASTNodes)!==null&&u!==void 0?u:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||le(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${z(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||le(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||le(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class ft{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>qf(n),this._interfaces=()=>Vf(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||le(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${z(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:jf(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Vf(r){var n;const t=Mf((n=r.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||le(!1,`${r.name} interfaces must be an Array or a function which returns an Array.`),t}function qf(r){const n=Gf(r.fields);return Nr(n)||le(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),St(n,(t,s)=>{var a;Nr(t)||le(!1,`${r.name}.${s} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||le(!1,`${r.name}.${s} field resolver must be a function if provided, but got: ${z(t.resolve)}.`);const u=(a=t.args)!==null&&a!==void 0?a:{};return Nr(u)||le(!1,`${r.name}.${s} args must be an object with argument names as keys.`),{name:rt(s),description:t.description,type:t.type,args:zf(u),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Bn(t.extensions),astNode:t.astNode}})}function zf(r){return Object.entries(r).map(([n,t])=>({name:rt(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Bn(t.extensions),astNode:t.astNode}))}function Nr(r){return Ct(r)&&!Array.isArray(r)}function jf(r){return St(r,n=>({description:n.description,type:n.type,args:Yf(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function Yf(r){return sr(r,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function ZD(r){return on(r.type)&&r.defaultValue===void 0}class Es{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=qf.bind(void 0,n),this._interfaces=Vf.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||le(!1,`${this.name} must provide "resolveType" as a function, but got: ${z(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:jf(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class As{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=KD.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||le(!1,`${this.name} must provide "resolveType" as a function, but got: ${z(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function KD(r){const n=Mf(r.types);return Array.isArray(n)||le(!1,`Must provide Array of types or a function which returns such an array for Union ${r.name}.`),n}class wr{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=ev(this.name,n.values),this._valueLookup=new Map(this._values.map(s=>[s.value,s])),this._nameLookup=Cr(this._values,s=>s.name)}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return this._values}getValue(n){return this._nameLookup[n]}serialize(n){const t=this._valueLookup.get(n);if(t===void 0)throw new q(`Enum "${this.name}" cannot represent value: ${z(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const s=z(n);throw new q(`Enum "${this.name}" cannot represent non-string value: ${s}.`+hs(this,s))}const t=this.getValue(n);if(t==null)throw new q(`Value "${n}" does not exist in "${this.name}" enum.`+hs(this,n));return t.value}parseLiteral(n,t){if(n.kind!==A.ENUM){const a=lt(n);throw new q(`Enum "${this.name}" cannot represent non-enum value: ${a}.`+hs(this,a),{nodes:n})}const s=this.getValue(n.value);if(s==null){const a=lt(n);throw new q(`Value "${a}" does not exist in "${this.name}" enum.`+hs(this,a),{nodes:n})}return s.value}toConfig(){const n=sr(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function hs(r,n){const t=r.getValues().map(a=>a.name),s=ks(n,t);return xs("the enum value",s)}function ev(r,n){return Nr(n)||le(!1,`${r} values must be an object with value names as keys.`),Object.entries(n).map(([t,s])=>(Nr(s)||le(!1,`${r}.${t} must refer to an object with a "value" key representing an internal value but got: ${z(s)}.`),{name:YD(t),description:s.description,value:s.value!==void 0?s.value:t,deprecationReason:s.deprecationReason,extensions:Bn(s.extensions),astNode:s.astNode}))}class Ss{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=nv.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=St(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function nv(r){const n=Gf(r.fields);return Nr(n)||le(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),St(n,(t,s)=>(!("resolve"in t)||le(!1,`${r.name}.${s} field has a resolve property, but Input Types cannot define resolvers.`),{name:rt(s),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Bn(t.extensions),astNode:t.astNode}))}const uo=2147483647,co=-2147483648,tv=new wt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(r){const n=hi(r);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new q(`Int cannot represent non-integer value: ${z(n)}`);if(t>uo||t<co)throw new q("Int cannot represent non 32-bit signed integer value: "+z(n));return t},parseValue(r){if(typeof r!="number"||!Number.isInteger(r))throw new q(`Int cannot represent non-integer value: ${z(r)}`);if(r>uo||r<co)throw new q(`Int cannot represent non 32-bit signed integer value: ${r}`);return r},parseLiteral(r){if(r.kind!==A.INT)throw new q(`Int cannot represent non-integer value: ${lt(r)}`,{nodes:r});const n=parseInt(r.value,10);if(n>uo||n<co)throw new q(`Int cannot represent non 32-bit signed integer value: ${r.value}`,{nodes:r});return n}}),rv=new wt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(r){const n=hi(r);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new q(`Float cannot represent non numeric value: ${z(n)}`);return t},parseValue(r){if(typeof r!="number"||!Number.isFinite(r))throw new q(`Float cannot represent non numeric value: ${z(r)}`);return r},parseLiteral(r){if(r.kind!==A.FLOAT&&r.kind!==A.INT)throw new q(`Float cannot represent non numeric value: ${lt(r)}`,r);return parseFloat(r.value)}}),$e=new wt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(r){const n=hi(r);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new q(`String cannot represent value: ${z(r)}`)},parseValue(r){if(typeof r!="string")throw new q(`String cannot represent a non string value: ${z(r)}`);return r},parseLiteral(r){if(r.kind!==A.STRING)throw new q(`String cannot represent a non string value: ${lt(r)}`,{nodes:r});return r.value}}),Un=new wt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(r){const n=hi(r);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new q(`Boolean cannot represent a non boolean value: ${z(n)}`)},parseValue(r){if(typeof r!="boolean")throw new q(`Boolean cannot represent a non boolean value: ${z(r)}`);return r},parseLiteral(r){if(r.kind!==A.BOOLEAN)throw new q(`Boolean cannot represent a non boolean value: ${lt(r)}`,{nodes:r});return r.value}}),Wf=new wt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(r){const n=hi(r);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new q(`ID cannot represent value: ${z(r)}`)},parseValue(r){if(typeof r=="string")return r;if(typeof r=="number"&&Number.isInteger(r))return r.toString();throw new q(`ID cannot represent value: ${z(r)}`)},parseLiteral(r){if(r.kind!==A.STRING&&r.kind!==A.INT)throw new q("ID cannot represent a non-string and non-integer value: "+lt(r),{nodes:r});return r.value}}),Os=Object.freeze([$e,tv,rv,Un,Wf]);function iv(r){return Os.some(({name:n})=>r.name===n)}function hi(r){if(Ct(r)){if(typeof r.valueOf=="function"){const n=r.valueOf();if(!Ct(n))return n}if(typeof r.toJSON=="function")return r.toJSON()}return r}function sv(r){return pt(r,Yt)}class Yt{constructor(n){var t,s;this.name=rt(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Bn(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||le(!1,`@${n.name} locations must be an Array.`);const a=(s=n.args)!==null&&s!==void 0?s:{};Ct(a)&&!Array.isArray(a)||le(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=zf(a)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:Yf(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const av=new Yt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[j.FIELD,j.FRAGMENT_SPREAD,j.INLINE_FRAGMENT],args:{if:{type:new se(Un),description:"Included when true."}}}),ov=new Yt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[j.FIELD,j.FRAGMENT_SPREAD,j.INLINE_FRAGMENT],args:{if:{type:new se(Un),description:"Skipped when true."}}}),uv="No longer supported",Qf=new Yt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[j.FIELD_DEFINITION,j.ARGUMENT_DEFINITION,j.INPUT_FIELD_DEFINITION,j.ENUM_VALUE],args:{reason:{type:$e,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:uv}}}),Jf=new Yt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[j.SCALAR],args:{url:{type:new se($e),description:"The URL that specifies the behavior of this scalar."}}}),kr=Object.freeze([av,ov,Qf,Jf]);function cv(r){return typeof r=="object"&&typeof(r==null?void 0:r[Symbol.iterator])=="function"}function ii(r,n){if(on(n)){const t=ii(r,n.ofType);return(t==null?void 0:t.kind)===A.NULL?null:t}if(r===null)return{kind:A.NULL};if(r===void 0)return null;if(lr(n)){const t=n.ofType;if(cv(r)){const s=[];for(const a of r){const u=ii(a,t);u!=null&&s.push(u)}return{kind:A.LIST,values:s}}return ii(r,t)}if(Zn(n)){if(!Ct(r))return null;const t=[];for(const s of Object.values(n.getFields())){const a=ii(r[s.name],s.type);a&&t.push({kind:A.OBJECT_FIELD,name:{kind:A.NAME,value:s.name},value:a})}return{kind:A.OBJECT,fields:t}}if(Pf(n)){const t=n.serialize(r);if(t==null)return null;if(typeof t=="boolean")return{kind:A.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const s=String(t);return Jl.test(s)?{kind:A.INT,value:s}:{kind:A.FLOAT,value:s}}if(typeof t=="string")return Xn(n)?{kind:A.ENUM,value:t}:n===Wf&&Jl.test(t)?{kind:A.INT,value:t}:{kind:A.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${z(t)}.`)}Jn(!1,"Unexpected input type: "+z(n))}const Jl=/^-?(?:0|[1-9][0-9]*)$/,Mo=new ft({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:$e,resolve:r=>r.description},types:{description:"A list of all types supported by this server.",type:new se(new _n(new se(Qn))),resolve(r){return Object.values(r.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new se(Qn),resolve:r=>r.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Qn,resolve:r=>r.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Qn,resolve:r=>r.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new se(new _n(new se(Hf))),resolve:r=>r.getDirectives()}})}),Hf=new ft({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new se($e),resolve:r=>r.name},description:{type:$e,resolve:r=>r.description},isRepeatable:{type:new se(Un),resolve:r=>r.isRepeatable},locations:{type:new se(new _n(new se(Xf))),resolve:r=>r.locations},args:{type:new se(new _n(new se(Ls))),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(r,{includeDeprecated:n}){return n?r.args:r.args.filter(t=>t.deprecationReason==null)}}})}),Xf=new wr({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:j.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:j.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:j.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:j.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:j.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:j.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:j.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:j.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:j.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:j.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:j.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:j.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:j.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:j.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:j.UNION,description:"Location adjacent to a union definition."},ENUM:{value:j.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:j.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:j.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:j.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Qn=new ft({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new se(ep),resolve(r){if(Wt(r))return ve.SCALAR;if(gn(r))return ve.OBJECT;if(un(r))return ve.INTERFACE;if(Hn(r))return ve.UNION;if(Xn(r))return ve.ENUM;if(Zn(r))return ve.INPUT_OBJECT;if(lr(r))return ve.LIST;if(on(r))return ve.NON_NULL;Jn(!1,`Unexpected type: "${z(r)}".`)}},name:{type:$e,resolve:r=>"name"in r?r.name:void 0},description:{type:$e,resolve:r=>"description"in r?r.description:void 0},specifiedByURL:{type:$e,resolve:r=>"specifiedByURL"in r?r.specifiedByURL:void 0},fields:{type:new _n(new se(Zf)),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(gn(r)||un(r)){const t=Object.values(r.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},interfaces:{type:new _n(new se(Qn)),resolve(r){if(gn(r)||un(r))return r.getInterfaces()}},possibleTypes:{type:new _n(new se(Qn)),resolve(r,n,t,{schema:s}){if(JD(r))return s.getPossibleTypes(r)}},enumValues:{type:new _n(new se(Kf)),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(Xn(r)){const t=r.getValues();return n?t:t.filter(s=>s.deprecationReason==null)}}},inputFields:{type:new _n(new se(Ls)),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(Zn(r)){const t=Object.values(r.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},ofType:{type:Qn,resolve:r=>"ofType"in r?r.ofType:void 0}})}),Zf=new ft({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new se($e),resolve:r=>r.name},description:{type:$e,resolve:r=>r.description},args:{type:new se(new _n(new se(Ls))),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(r,{includeDeprecated:n}){return n?r.args:r.args.filter(t=>t.deprecationReason==null)}},type:{type:new se(Qn),resolve:r=>r.type},isDeprecated:{type:new se(Un),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:$e,resolve:r=>r.deprecationReason}})}),Ls=new ft({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new se($e),resolve:r=>r.name},description:{type:$e,resolve:r=>r.description},type:{type:new se(Qn),resolve:r=>r.type},defaultValue:{type:$e,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(r){const{type:n,defaultValue:t}=r,s=ii(t,n);return s?lt(s):null}},isDeprecated:{type:new se(Un),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:$e,resolve:r=>r.deprecationReason}})}),Kf=new ft({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new se($e),resolve:r=>r.name},description:{type:$e,resolve:r=>r.description},isDeprecated:{type:new se(Un),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:$e,resolve:r=>r.deprecationReason}})});var ve;(function(r){r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.INPUT_OBJECT="INPUT_OBJECT",r.LIST="LIST",r.NON_NULL="NON_NULL"})(ve||(ve={}));const ep=new wr({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:ve.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:ve.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:ve.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:ve.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:ve.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:ve.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:ve.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:ve.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new se(Mo);new se($e);new se($e);const Rs=Object.freeze([Mo,Hf,Xf,Qn,Zf,Ls,Kf,ep]);function lv(r){return Rs.some(({name:n})=>r.name===n)}class np{constructor(n){var t,s;this.__validationErrors=n.assumeValid===!0?[]:void 0,Ct(n)||le(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||le(!1,`"types" must be Array if provided but got: ${z(n.types)}.`),!n.directives||Array.isArray(n.directives)||le(!1,`"directives" must be Array if provided but got: ${z(n.directives)}.`),this.description=n.description,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(s=n.directives)!==null&&s!==void 0?s:kr;const a=new Set(n.types);if(n.types!=null)for(const u of n.types)a.delete(u),Yn(u,a);this._queryType!=null&&Yn(this._queryType,a),this._mutationType!=null&&Yn(this._mutationType,a),this._subscriptionType!=null&&Yn(this._subscriptionType,a);for(const u of this._directives)if(sv(u))for(const c of u.args)Yn(c.type,a);Yn(Mo,a),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const u of a){if(u==null)continue;const c=u.name;if(c||le(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[c]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${c}".`);if(this._typeMap[c]=u,un(u)){for(const f of u.getInterfaces())if(un(f)){let d=this._implementationsMap[f.name];d===void 0&&(d=this._implementationsMap[f.name]={objects:[],interfaces:[]}),d.interfaces.push(u)}}else if(gn(u)){for(const f of u.getInterfaces())if(un(f)){let d=this._implementationsMap[f.name];d===void 0&&(d=this._implementationsMap[f.name]={objects:[],interfaces:[]}),d.objects.push(u)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case Rn.QUERY:return this.getQueryType();case Rn.MUTATION:return this.getMutationType();case Rn.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return Hn(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t??{objects:[],interfaces:[]}}isSubType(n,t){let s=this._subTypeMap[n.name];if(s===void 0){if(s=Object.create(null),Hn(n))for(const a of n.getTypes())s[a.name]=!0;else{const a=this.getImplementations(n);for(const u of a.objects)s[u.name]=!0;for(const u of a.interfaces)s[u.name]=!0}this._subTypeMap[n.name]=s}return s[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Yn(r,n){const t=XD(r);if(!n.has(t)){if(n.add(t),Hn(t))for(const s of t.getTypes())Yn(s,n);else if(gn(t)||un(t)){for(const s of t.getInterfaces())Yn(s,n);for(const s of Object.values(t.getFields())){Yn(s.type,n);for(const a of s.args)Yn(a.type,n)}}else if(Zn(t))for(const s of Object.values(t.getFields()))Yn(s.type,n)}return n}function fv(r){return r.kind===A.SCHEMA_DEFINITION||_i(r)||r.kind===A.DIRECTIVE_DEFINITION}function _i(r){return r.kind===A.SCALAR_TYPE_DEFINITION||r.kind===A.OBJECT_TYPE_DEFINITION||r.kind===A.INTERFACE_TYPE_DEFINITION||r.kind===A.UNION_TYPE_DEFINITION||r.kind===A.ENUM_TYPE_DEFINITION||r.kind===A.INPUT_OBJECT_TYPE_DEFINITION}function pv(r){return r.kind===A.SCHEMA_EXTENSION||Go(r)}function Go(r){return r.kind===A.SCALAR_TYPE_EXTENSION||r.kind===A.OBJECT_TYPE_EXTENSION||r.kind===A.INTERFACE_TYPE_EXTENSION||r.kind===A.UNION_TYPE_EXTENSION||r.kind===A.ENUM_TYPE_EXTENSION||r.kind===A.INPUT_OBJECT_TYPE_EXTENSION}function dv(r){const n=Object.create(null),t=r.getSchema(),s=t?t.getDirectives():kr;for(const c of s)n[c.name]=c.args.map(f=>f.name);const a=r.getDocument().definitions;for(const c of a)if(c.kind===A.DIRECTIVE_DEFINITION){var u;const f=(u=c.arguments)!==null&&u!==void 0?u:[];n[c.name.value]=f.map(d=>d.name.value)}return{Directive(c){const f=c.name.value,d=n[f];if(c.arguments&&d)for(const b of c.arguments){const m=b.name.value;if(!d.includes(m)){const v=ks(m,d);r.reportError(new q(`Unknown argument "${m}" on directive "@${f}".`+xs(v),{nodes:b}))}}return!1}}}function hv(r){const n=Object.create(null),t=r.getSchema(),s=t?t.getDirectives():kr;for(const u of s)n[u.name]=u.locations;const a=r.getDocument().definitions;for(const u of a)u.kind===A.DIRECTIVE_DEFINITION&&(n[u.name.value]=u.locations.map(c=>c.value));return{Directive(u,c,f,d,b){const m=u.name.value,v=n[m];if(!v){r.reportError(new q(`Unknown directive "@${m}".`,{nodes:u}));return}const N=_v(b);N&&!v.includes(N)&&r.reportError(new q(`Directive "@${m}" may not be used on ${N}.`,{nodes:u}))}}}function _v(r){const n=r[r.length-1];switch("kind"in n||Jn(!1),n.kind){case A.OPERATION_DEFINITION:return gv(n.operation);case A.FIELD:return j.FIELD;case A.FRAGMENT_SPREAD:return j.FRAGMENT_SPREAD;case A.INLINE_FRAGMENT:return j.INLINE_FRAGMENT;case A.FRAGMENT_DEFINITION:return j.FRAGMENT_DEFINITION;case A.VARIABLE_DEFINITION:return j.VARIABLE_DEFINITION;case A.SCHEMA_DEFINITION:case A.SCHEMA_EXTENSION:return j.SCHEMA;case A.SCALAR_TYPE_DEFINITION:case A.SCALAR_TYPE_EXTENSION:return j.SCALAR;case A.OBJECT_TYPE_DEFINITION:case A.OBJECT_TYPE_EXTENSION:return j.OBJECT;case A.FIELD_DEFINITION:return j.FIELD_DEFINITION;case A.INTERFACE_TYPE_DEFINITION:case A.INTERFACE_TYPE_EXTENSION:return j.INTERFACE;case A.UNION_TYPE_DEFINITION:case A.UNION_TYPE_EXTENSION:return j.UNION;case A.ENUM_TYPE_DEFINITION:case A.ENUM_TYPE_EXTENSION:return j.ENUM;case A.ENUM_VALUE_DEFINITION:return j.ENUM_VALUE;case A.INPUT_OBJECT_TYPE_DEFINITION:case A.INPUT_OBJECT_TYPE_EXTENSION:return j.INPUT_OBJECT;case A.INPUT_VALUE_DEFINITION:{const t=r[r.length-3];return"kind"in t||Jn(!1),t.kind===A.INPUT_OBJECT_TYPE_DEFINITION?j.INPUT_FIELD_DEFINITION:j.ARGUMENT_DEFINITION}default:Jn(!1,"Unexpected kind: "+z(n.kind))}}function gv(r){switch(r){case Rn.QUERY:return j.QUERY;case Rn.MUTATION:return j.MUTATION;case Rn.SUBSCRIPTION:return j.SUBSCRIPTION}}function bv(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);for(const u of r.getDocument().definitions)_i(u)&&(s[u.name.value]=!0);const a=[...Object.keys(t),...Object.keys(s)];return{NamedType(u,c,f,d,b){const m=u.name.value;if(!t[m]&&!s[m]){var v;const N=(v=b[2])!==null&&v!==void 0?v:f,x=N!=null&&mv(N);if(x&&Hl.includes(m))return;const L=ks(m,x?Hl.concat(a):a);r.reportError(new q(`Unknown type "${m}".`+xs(L),{nodes:u}))}}}}const Hl=[...Os,...Rs].map(r=>r.name);function mv(r){return"kind"in r&&(fv(r)||pv(r))}function Fv(r){var n,t,s;const a=r.getSchema(),u=(n=(t=(s=a==null?void 0:a.astNode)!==null&&s!==void 0?s:a==null?void 0:a.getQueryType())!==null&&t!==void 0?t:a==null?void 0:a.getMutationType())!==null&&n!==void 0?n:a==null?void 0:a.getSubscriptionType();let c=0;return{SchemaDefinition(f){if(u){r.reportError(new q("Cannot define a new schema within a schema extension.",{nodes:f}));return}c>0&&r.reportError(new q("Must provide only one schema definition.",{nodes:f})),++c}}}function Dv(r){const n=r.getSchema(),t=Object.create(null);for(const a of r.getDocument().definitions)_i(a)&&(t[a.name.value]=a);return{ScalarTypeExtension:s,ObjectTypeExtension:s,InterfaceTypeExtension:s,UnionTypeExtension:s,EnumTypeExtension:s,InputObjectTypeExtension:s};function s(a){const u=a.name.value,c=t[u],f=n==null?void 0:n.getType(u);let d;if(c?d=vv[c.kind]:f&&(d=Ev(f)),d){if(d!==a.kind){const b=Av(a.kind);r.reportError(new q(`Cannot extend non-${b} type "${u}".`,{nodes:c?[c,a]:a}))}}else{const b=Object.keys({...t,...n==null?void 0:n.getTypeMap()}),m=ks(u,b);r.reportError(new q(`Cannot extend type "${u}" because it is not defined.`+xs(m),{nodes:a.name}))}}}const vv={[A.SCALAR_TYPE_DEFINITION]:A.SCALAR_TYPE_EXTENSION,[A.OBJECT_TYPE_DEFINITION]:A.OBJECT_TYPE_EXTENSION,[A.INTERFACE_TYPE_DEFINITION]:A.INTERFACE_TYPE_EXTENSION,[A.UNION_TYPE_DEFINITION]:A.UNION_TYPE_EXTENSION,[A.ENUM_TYPE_DEFINITION]:A.ENUM_TYPE_EXTENSION,[A.INPUT_OBJECT_TYPE_DEFINITION]:A.INPUT_OBJECT_TYPE_EXTENSION};function Ev(r){if(Wt(r))return A.SCALAR_TYPE_EXTENSION;if(gn(r))return A.OBJECT_TYPE_EXTENSION;if(un(r))return A.INTERFACE_TYPE_EXTENSION;if(Hn(r))return A.UNION_TYPE_EXTENSION;if(Xn(r))return A.ENUM_TYPE_EXTENSION;if(Zn(r))return A.INPUT_OBJECT_TYPE_EXTENSION;Jn(!1,"Unexpected type: "+z(r))}function Av(r){switch(r){case A.SCALAR_TYPE_EXTENSION:return"scalar";case A.OBJECT_TYPE_EXTENSION:return"object";case A.INTERFACE_TYPE_EXTENSION:return"interface";case A.UNION_TYPE_EXTENSION:return"union";case A.ENUM_TYPE_EXTENSION:return"enum";case A.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Jn(!1,"Unexpected kind: "+z(r))}}function Sv(r){var n;const t=Object.create(null),s=r.getSchema(),a=(n=s==null?void 0:s.getDirectives())!==null&&n!==void 0?n:kr;for(const f of a)t[f.name]=Cr(f.args.filter(ZD),d=>d.name);const u=r.getDocument().definitions;for(const f of u)if(f.kind===A.DIRECTIVE_DEFINITION){var c;const d=(c=f.arguments)!==null&&c!==void 0?c:[];t[f.name.value]=Cr(d.filter(Tv),b=>b.name.value)}return{Directive:{leave(f){const d=f.name.value,b=t[d];if(b){var m;const v=(m=f.arguments)!==null&&m!==void 0?m:[],N=new Set(v.map(x=>x.name.value));for(const[x,L]of Object.entries(b))if(!N.has(x)){const R=Po(L.type)?z(L.type):lt(L.type);r.reportError(new q(`Directive "@${d}" argument "${x}" of type "${R}" is required, but it was not provided.`,{nodes:f}))}}}}}}function Tv(r){return r.type.kind===A.NON_NULL_TYPE&&r.defaultValue==null}function Vt(r,n,t){if(r){if(r.kind===A.VARIABLE){const s=r.name.value;if(t==null||t[s]===void 0)return;const a=t[s];return a===null&&on(n)?void 0:a}if(on(n))return r.kind===A.NULL?void 0:Vt(r,n.ofType,t);if(r.kind===A.NULL)return null;if(lr(n)){const s=n.ofType;if(r.kind===A.LIST){const u=[];for(const c of r.values)if(Xl(c,t)){if(on(s))return;u.push(null)}else{const f=Vt(c,s,t);if(f===void 0)return;u.push(f)}return u}const a=Vt(r,s,t);return a===void 0?void 0:[a]}if(Zn(n)){if(r.kind!==A.OBJECT)return;const s=Object.create(null),a=Cr(r.fields,u=>u.name.value);for(const u of Object.values(n.getFields())){const c=a[u.name];if(!c||Xl(c.value,t)){if(u.defaultValue!==void 0)s[u.name]=u.defaultValue;else if(on(u.type))return;continue}const f=Vt(c.value,u.type,t);if(f===void 0)return;s[u.name]=f}return s}if(Pf(n)){let s;try{s=n.parseLiteral(r,t)}catch{return}return s===void 0?void 0:s}Jn(!1,"Unexpected input type: "+z(n))}}function Xl(r,n){return r.kind===A.VARIABLE&&(n==null||n[r.name.value]===void 0)}function Iv(r,n,t){var s;const a={},u=(s=n.arguments)!==null&&s!==void 0?s:[],c=Cr(u,f=>f.name.value);for(const f of r.args){const d=f.name,b=f.type,m=c[d];if(!m){if(f.defaultValue!==void 0)a[d]=f.defaultValue;else if(on(b))throw new q(`Argument "${d}" of required type "${z(b)}" was not provided.`,{nodes:n});continue}const v=m.value;let N=v.kind===A.NULL;if(v.kind===A.VARIABLE){const L=v.name.value;if(t==null||!yv(t,L)){if(f.defaultValue!==void 0)a[d]=f.defaultValue;else if(on(b))throw new q(`Argument "${d}" of required type "${z(b)}" was provided the variable "$${L}" which was not provided a runtime value.`,{nodes:v});continue}N=t[L]==null}if(N&&on(b))throw new q(`Argument "${d}" of non-null type "${z(b)}" must not be null.`,{nodes:v});const x=Vt(v,b,t);if(x===void 0)throw new q(`Argument "${d}" has invalid value ${lt(v)}.`,{nodes:v});a[d]=x}return a}function tp(r,n,t){var s;const a=(s=n.directives)===null||s===void 0?void 0:s.find(u=>u.name.value===r.name);if(a)return Iv(r,a,t)}function yv(r,n){return Object.prototype.hasOwnProperty.call(r,n)}function rp(r,n){const t=new Map;for(const s of r){const a=n(s),u=t.get(a);u===void 0?t.set(a,[s]):u.push(s)}return t}function Nv(r){return{DirectiveDefinition(s){var a;const u=(a=s.arguments)!==null&&a!==void 0?a:[];return t(`@${s.name.value}`,u)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(s){var a;const u=s.name.value,c=(a=s.fields)!==null&&a!==void 0?a:[];for(const d of c){var f;const b=d.name.value,m=(f=d.arguments)!==null&&f!==void 0?f:[];t(`${u}.${b}`,m)}return!1}function t(s,a){const u=rp(a,c=>c.name.value);for(const[c,f]of u)f.length>1&&r.reportError(new q(`Argument "${s}(${c}:)" can only be defined once.`,{nodes:f.map(d=>d.name)}));return!1}}function Cv(r){return{Field:n,Directive:n};function n(t){var s;const a=(s=t.arguments)!==null&&s!==void 0?s:[],u=rp(a,c=>c.name.value);for(const[c,f]of u)f.length>1&&r.reportError(new q(`There can be only one argument named "${c}".`,{nodes:f.map(d=>d.name)}))}}function wv(r){const n=Object.create(null),t=r.getSchema();return{DirectiveDefinition(s){const a=s.name.value;if(t!=null&&t.getDirective(a)){r.reportError(new q(`Directive "@${a}" already exists in the schema. It cannot be redefined.`,{nodes:s.name}));return}return n[a]?r.reportError(new q(`There can be only one directive named "@${a}".`,{nodes:[n[a],s.name]})):n[a]=s.name,!1}}}function xv(r){const n=Object.create(null),t=r.getSchema(),s=t?t.getDirectives():kr;for(const f of s)n[f.name]=!f.isRepeatable;const a=r.getDocument().definitions;for(const f of a)f.kind===A.DIRECTIVE_DEFINITION&&(n[f.name.value]=!f.repeatable);const u=Object.create(null),c=Object.create(null);return{enter(f){if(!("directives"in f)||!f.directives)return;let d;if(f.kind===A.SCHEMA_DEFINITION||f.kind===A.SCHEMA_EXTENSION)d=u;else if(_i(f)||Go(f)){const b=f.name.value;d=c[b],d===void 0&&(c[b]=d=Object.create(null))}else d=Object.create(null);for(const b of f.directives){const m=b.name.value;n[m]&&(d[m]?r.reportError(new q(`The directive "@${m}" can only be used once at this location.`,{nodes:[d[m],b]})):d[m]=b)}}}}function kv(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{EnumTypeDefinition:a,EnumTypeExtension:a};function a(u){var c;const f=u.name.value;s[f]||(s[f]=Object.create(null));const d=(c=u.values)!==null&&c!==void 0?c:[],b=s[f];for(const m of d){const v=m.name.value,N=t[f];Xn(N)&&N.getValue(v)?r.reportError(new q(`Enum value "${f}.${v}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:m.name})):b[v]?r.reportError(new q(`Enum value "${f}.${v}" can only be defined once.`,{nodes:[b[v],m.name]})):b[v]=m.name}return!1}}function Ov(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{InputObjectTypeDefinition:a,InputObjectTypeExtension:a,InterfaceTypeDefinition:a,InterfaceTypeExtension:a,ObjectTypeDefinition:a,ObjectTypeExtension:a};function a(u){var c;const f=u.name.value;s[f]||(s[f]=Object.create(null));const d=(c=u.fields)!==null&&c!==void 0?c:[],b=s[f];for(const m of d){const v=m.name.value;Lv(t[f],v)?r.reportError(new q(`Field "${f}.${v}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:m.name})):b[v]?r.reportError(new q(`Field "${f}.${v}" can only be defined once.`,{nodes:[b[v],m.name]})):b[v]=m.name}return!1}}function Lv(r,n){return gn(r)||un(r)||Zn(r)?r.getFields()[n]!=null:!1}function Rv(r){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const s=n.pop();s||Jn(!1),t=s}},ObjectField(s){const a=s.name.value;t[a]?r.reportError(new q(`There can be only one input field named "${a}".`,{nodes:[t[a],s.name]})):t[a]=s.name}}}function Uv(r){const n=r.getSchema(),t=Object.create(null),s=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:a,SchemaExtension:a};function a(u){var c;const f=(c=u.operationTypes)!==null&&c!==void 0?c:[];for(const d of f){const b=d.operation,m=t[b];s[b]?r.reportError(new q(`Type for ${b} already defined in the schema. It cannot be redefined.`,{nodes:d})):m?r.reportError(new q(`There can be only one ${b} type in schema.`,{nodes:[m,d]})):t[b]=d}return!1}}function Bv(r){const n=Object.create(null),t=r.getSchema();return{ScalarTypeDefinition:s,ObjectTypeDefinition:s,InterfaceTypeDefinition:s,UnionTypeDefinition:s,EnumTypeDefinition:s,InputObjectTypeDefinition:s};function s(a){const u=a.name.value;if(t!=null&&t.getType(u)){r.reportError(new q(`Type "${u}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:a.name}));return}return n[u]?r.reportError(new q(`There can be only one type named "${u}".`,{nodes:[n[u],a.name]})):n[u]=a.name,!1}}const Pv=Object.freeze([Fv,Uv,Bv,kv,Ov,Nv,wv,bv,hv,xv,Dv,dv,Cv,Rv,Sv]);class $v{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const s of this.getDocument().definitions)s.kind===A.FRAGMENT_DEFINITION&&(t[s.name.value]=s);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const s=[n];let a;for(;a=s.pop();)for(const u of a.selections)u.kind===A.FRAGMENT_SPREAD?t.push(u):u.selectionSet&&s.push(u.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const s=Object.create(null),a=[n.selectionSet];let u;for(;u=a.pop();)for(const c of this.getFragmentSpreads(u)){const f=c.name.value;if(s[f]!==!0){s[f]=!0;const d=this.getFragment(f);d&&(t.push(d),a.push(d.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class Mv extends $v{constructor(n,t,s){super(n,s),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function Gv(r,n,t=Pv){const s=[],a=new Mv(r,n,c=>{s.push(c)}),u=t.map(c=>c(a));return Lf(r,qD(u)),s}function Vv(r){const n=Gv(r);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function qv(r,n){Ct(r)&&Ct(r.__schema)||le(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${z(r)}.`);const t=r.__schema,s=sr(t.types,k=>k.name,k=>N(k));for(const k of[...Os,...Rs])s[k.name]&&(s[k.name]=k);const a=t.queryType?m(t.queryType):null,u=t.mutationType?m(t.mutationType):null,c=t.subscriptionType?m(t.subscriptionType):null,f=t.directives?t.directives.map(dt):[];return new np({description:t.description,query:a,mutation:u,subscription:c,types:Object.values(s),directives:f,assumeValid:n==null?void 0:n.assumeValid});function d(k){if(k.kind===ve.LIST){const X=k.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");return new _n(d(X))}if(k.kind===ve.NON_NULL){const X=k.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");const tn=d(X);return new se(HD(tn))}return b(k)}function b(k){const X=k.name;if(!X)throw new Error(`Unknown type reference: ${z(k)}.`);const tn=s[X];if(!tn)throw new Error(`Invalid or incomplete schema, unknown type: ${X}. Ensure that a full introspection query is used in order to build a client schema.`);return tn}function m(k){return WD(b(k))}function v(k){return QD(b(k))}function N(k){if(k!=null&&k.name!=null&&k.kind!=null)switch(k.kind){case ve.SCALAR:return x(k);case ve.OBJECT:return R(k);case ve.INTERFACE:return J(k);case ve.UNION:return pe(k);case ve.ENUM:return Me(k);case ve.INPUT_OBJECT:return Ee(k)}const X=z(k);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${X}.`)}function x(k){return new wt({name:k.name,description:k.description,specifiedByURL:k.specifiedByURL})}function L(k){if(k.interfaces===null&&k.kind===ve.INTERFACE)return[];if(!k.interfaces){const X=z(k);throw new Error(`Introspection result missing interfaces: ${X}.`)}return k.interfaces.map(v)}function R(k){return new ft({name:k.name,description:k.description,interfaces:()=>L(k),fields:()=>Ne(k)})}function J(k){return new Es({name:k.name,description:k.description,interfaces:()=>L(k),fields:()=>Ne(k)})}function pe(k){if(!k.possibleTypes){const X=z(k);throw new Error(`Introspection result missing possibleTypes: ${X}.`)}return new As({name:k.name,description:k.description,types:()=>k.possibleTypes.map(m)})}function Me(k){if(!k.enumValues){const X=z(k);throw new Error(`Introspection result missing enumValues: ${X}.`)}return new wr({name:k.name,description:k.description,values:sr(k.enumValues,X=>X.name,X=>({description:X.description,deprecationReason:X.deprecationReason}))})}function Ee(k){if(!k.inputFields){const X=z(k);throw new Error(`Introspection result missing inputFields: ${X}.`)}return new Ss({name:k.name,description:k.description,fields:()=>nn(k.inputFields)})}function Ne(k){if(!k.fields)throw new Error(`Introspection result missing fields: ${z(k)}.`);return sr(k.fields,X=>X.name,ke)}function ke(k){const X=d(k.type);if(!Bf(X)){const tn=z(X);throw new Error(`Introspection must provide output type for fields, but received: ${tn}.`)}if(!k.args){const tn=z(k);throw new Error(`Introspection result missing field args: ${tn}.`)}return{description:k.description,deprecationReason:k.deprecationReason,type:X,args:nn(k.args)}}function nn(k){return sr(k,X=>X.name,He)}function He(k){const X=d(k.type);if(!Uf(X)){const xt=z(X);throw new Error(`Introspection must provide input type for arguments, but received: ${xt}.`)}const tn=k.defaultValue!=null?Vt(LD(k.defaultValue),X):void 0;return{description:k.description,type:X,defaultValue:tn,deprecationReason:k.deprecationReason}}function dt(k){if(!k.args){const X=z(k);throw new Error(`Introspection result missing directive args: ${X}.`)}if(!k.locations){const X=z(k);throw new Error(`Introspection result missing directive locations: ${X}.`)}return new Yt({name:k.name,description:k.description,isRepeatable:k.isRepeatable,locations:k.locations.slice(),args:nn(k.args)})}}function zv(r,n,t){var s,a,u,c;const f=[],d=Object.create(null),b=[];let m;const v=[];for(const I of n.definitions)if(I.kind===A.SCHEMA_DEFINITION)m=I;else if(I.kind===A.SCHEMA_EXTENSION)v.push(I);else if(_i(I))f.push(I);else if(Go(I)){const M=I.name.value,B=d[M];d[M]=B?B.concat([I]):[I]}else I.kind===A.DIRECTIVE_DEFINITION&&b.push(I);if(Object.keys(d).length===0&&f.length===0&&b.length===0&&v.length===0&&m==null)return r;const N=Object.create(null);for(const I of r.types)N[I.name]=Me(I);for(const I of f){var x;const M=I.name.value;N[M]=(x=Zl[M])!==null&&x!==void 0?x:Tn(I)}const L={query:r.query&&J(r.query),mutation:r.mutation&&J(r.mutation),subscription:r.subscription&&J(r.subscription),...m&&tn([m]),...tn(v)};return{description:(s=m)===null||s===void 0||(a=s.description)===null||a===void 0?void 0:a.value,...L,types:Object.values(N),directives:[...r.directives.map(pe),...b.map(gi)],extensions:Object.create(null),astNode:(u=m)!==null&&u!==void 0?u:r.astNode,extensionASTNodes:r.extensionASTNodes.concat(v),assumeValid:(c=t==null?void 0:t.assumeValid)!==null&&c!==void 0?c:!1};function R(I){return lr(I)?new _n(R(I.ofType)):on(I)?new se(R(I.ofType)):J(I)}function J(I){return N[I.name]}function pe(I){const M=I.toConfig();return new Yt({...M,args:St(M.args,X)})}function Me(I){if(lv(I)||iv(I))return I;if(Wt(I))return ke(I);if(gn(I))return nn(I);if(un(I))return He(I);if(Hn(I))return dt(I);if(Xn(I))return Ne(I);if(Zn(I))return Ee(I);Jn(!1,"Unexpected type: "+z(I))}function Ee(I){var M;const B=I.toConfig(),P=(M=d[B.name])!==null&&M!==void 0?M:[];return new Ss({...B,fields:()=>({...St(B.fields,de=>({...de,type:R(de.type)})),...it(P)}),extensionASTNodes:B.extensionASTNodes.concat(P)})}function Ne(I){var M;const B=I.toConfig(),P=(M=d[I.name])!==null&&M!==void 0?M:[];return new wr({...B,values:{...B.values,...Pn(P)},extensionASTNodes:B.extensionASTNodes.concat(P)})}function ke(I){var M;const B=I.toConfig(),P=(M=d[B.name])!==null&&M!==void 0?M:[];let de=B.specifiedByURL;for(const he of P){var Ue;de=(Ue=Kl(he))!==null&&Ue!==void 0?Ue:de}return new wt({...B,specifiedByURL:de,extensionASTNodes:B.extensionASTNodes.concat(P)})}function nn(I){var M;const B=I.toConfig(),P=(M=d[B.name])!==null&&M!==void 0?M:[];return new ft({...B,interfaces:()=>[...I.getInterfaces().map(J),...pr(P)],fields:()=>({...St(B.fields,k),...fr(P)}),extensionASTNodes:B.extensionASTNodes.concat(P)})}function He(I){var M;const B=I.toConfig(),P=(M=d[B.name])!==null&&M!==void 0?M:[];return new Es({...B,interfaces:()=>[...I.getInterfaces().map(J),...pr(P)],fields:()=>({...St(B.fields,k),...fr(P)}),extensionASTNodes:B.extensionASTNodes.concat(P)})}function dt(I){var M;const B=I.toConfig(),P=(M=d[B.name])!==null&&M!==void 0?M:[];return new As({...B,types:()=>[...I.getTypes().map(J),...Jt(P)],extensionASTNodes:B.extensionASTNodes.concat(P)})}function k(I){return{...I,type:R(I.type),args:I.args&&St(I.args,X)}}function X(I){return{...I,type:R(I.type)}}function tn(I){const M={};for(const P of I){var B;const de=(B=P.operationTypes)!==null&&B!==void 0?B:[];for(const Ue of de)M[Ue.operation]=xt(Ue.type)}return M}function xt(I){var M;const B=I.name.value,P=(M=Zl[B])!==null&&M!==void 0?M:N[B];if(P===void 0)throw new Error(`Unknown type: "${B}".`);return P}function Qt(I){return I.kind===A.LIST_TYPE?new _n(Qt(I.type)):I.kind===A.NON_NULL_TYPE?new se(Qt(I.type)):xt(I)}function gi(I){var M;return new Yt({name:I.name.value,description:(M=I.description)===null||M===void 0?void 0:M.value,locations:I.locations.map(({value:B})=>B),isRepeatable:I.repeatable,args:bi(I.arguments),astNode:I})}function fr(I){const M=Object.create(null);for(const de of I){var B;const Ue=(B=de.fields)!==null&&B!==void 0?B:[];for(const he of Ue){var P;M[he.name.value]={type:Qt(he.type),description:(P=he.description)===null||P===void 0?void 0:P.value,args:bi(he.arguments),deprecationReason:_s(he),astNode:he}}}return M}function bi(I){const M=I??[],B=Object.create(null);for(const de of M){var P;const Ue=Qt(de.type);B[de.name.value]={type:Ue,description:(P=de.description)===null||P===void 0?void 0:P.value,defaultValue:Vt(de.defaultValue,Ue),deprecationReason:_s(de),astNode:de}}return B}function it(I){const M=Object.create(null);for(const de of I){var B;const Ue=(B=de.fields)!==null&&B!==void 0?B:[];for(const he of Ue){var P;const In=Qt(he.type);M[he.name.value]={type:In,description:(P=he.description)===null||P===void 0?void 0:P.value,defaultValue:Vt(he.defaultValue,In),deprecationReason:_s(he),astNode:he}}}return M}function Pn(I){const M=Object.create(null);for(const de of I){var B;const Ue=(B=de.values)!==null&&B!==void 0?B:[];for(const he of Ue){var P;M[he.name.value]={description:(P=he.description)===null||P===void 0?void 0:P.value,deprecationReason:_s(he),astNode:he}}}return M}function pr(I){return I.flatMap(M=>{var B,P;return(B=(P=M.interfaces)===null||P===void 0?void 0:P.map(xt))!==null&&B!==void 0?B:[]})}function Jt(I){return I.flatMap(M=>{var B,P;return(B=(P=M.types)===null||P===void 0?void 0:P.map(xt))!==null&&B!==void 0?B:[]})}function Tn(I){var M;const B=I.name.value,P=(M=d[B])!==null&&M!==void 0?M:[];switch(I.kind){case A.OBJECT_TYPE_DEFINITION:{var de;const Xe=[I,...P];return new ft({name:B,description:(de=I.description)===null||de===void 0?void 0:de.value,interfaces:()=>pr(Xe),fields:()=>fr(Xe),astNode:I,extensionASTNodes:P})}case A.INTERFACE_TYPE_DEFINITION:{var Ue;const Xe=[I,...P];return new Es({name:B,description:(Ue=I.description)===null||Ue===void 0?void 0:Ue.value,interfaces:()=>pr(Xe),fields:()=>fr(Xe),astNode:I,extensionASTNodes:P})}case A.ENUM_TYPE_DEFINITION:{var he;const Xe=[I,...P];return new wr({name:B,description:(he=I.description)===null||he===void 0?void 0:he.value,values:Pn(Xe),astNode:I,extensionASTNodes:P})}case A.UNION_TYPE_DEFINITION:{var In;const Xe=[I,...P];return new As({name:B,description:(In=I.description)===null||In===void 0?void 0:In.value,types:()=>Jt(Xe),astNode:I,extensionASTNodes:P})}case A.SCALAR_TYPE_DEFINITION:{var Or;return new wt({name:B,description:(Or=I.description)===null||Or===void 0?void 0:Or.value,specifiedByURL:Kl(I),astNode:I,extensionASTNodes:P})}case A.INPUT_OBJECT_TYPE_DEFINITION:{var kt;const Xe=[I,...P];return new Ss({name:B,description:(kt=I.description)===null||kt===void 0?void 0:kt.value,fields:()=>it(Xe),astNode:I,extensionASTNodes:P})}}}}const Zl=Cr([...Os,...Rs],r=>r.name);function _s(r){const n=tp(Qf,r);return n==null?void 0:n.reason}function Kl(r){const n=tp(Jf,r);return n==null?void 0:n.url}function jv(r,n){r!=null&&r.kind===A.DOCUMENT||le(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&Vv(r);const s=zv({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},r,n);if(s.astNode==null)for(const u of s.types)switch(u.name){case"Query":s.query=u;break;case"Mutation":s.mutation=u;break;case"Subscription":s.subscription=u;break}const a=[...s.directives,...kr.filter(u=>s.directives.every(c=>c.name!==u.name))];return new np({...s,directives:a})}function Yv(r,n){const t=OD(r,{noLocation:n==null?void 0:n.noLocation,allowLegacyFragmentVariables:n==null?void 0:n.allowLegacyFragmentVariables});return jv(t,{assumeValidSDL:n==null?void 0:n.assumeValidSDL,assumeValid:n==null?void 0:n.assumeValid})}const ef=`schema {
  query: query
}

type query {
  """Fetch a single artist."""
  artist(id: Int!): Artist

  """Fetch a single artist group."""
  artistGroup(id: Int!): ArtistGroup

  """
  Fetch a collection of artist groups.
  
  Special Operations
  
  * ArtistGroupsOther
  
      Fetch artist groups with non-a to z-names
  * SourceArtistGroups
  
      Fetch artist groups with sources
  * SourceArtistGroupsOther
  
      Fetch artist groups with sources with non-a to z-names
  """
  artistGroups(filter: Filter_ArtistGroup, pagination: Pagination): Connection_ArtistGroup

  """Fetch a collection of artists."""
  artists(filter: Filter_ArtistUnprefix, pagination: Pagination): Connection_ArtistUnprefix

  """
  Fetch a collection of artists using a view for unprefixing the artist name.
  This endpoint does not have relationships.  Use \`artists\` for related data.
  
  Special Operations:
  
  * ArtistUnprefixListOther
  
      Fetch artists with non-a to z-names
  """
  artistsUnprefix(filter: Filter_ArtistUnprefix, pagination: Pagination): Connection_ArtistUnprefix

  """
  Fetch a collection of artists that have sources
  using a view for unprefixing the artist name.
  This endpoint does not have relationships.  Use \`artists\` for related data.
  
  Special Operations:
  
  * ArtistsUnprefixSourceOther
  
      Fetch artists with sources with non-a to z-names
  """
  artistsUnprefixSource(filter: Filter_ArtistUnprefixSource, pagination: Pagination): Connection_ArtistUnprefixSource

  """Fetch a single creator."""
  creator(id: Int!): InternetArchive_Creator

  """Fetch a collection of creators."""
  creators(filter: Filter_InternetArchive_Creator, pagination: Pagination): Connection_InternetArchive_Creator

  """
  Fetch a collection of creators using a view for unprefixing the creator name.
  This endpoint does not have relationships.  Use \`creators\` for related data.
  
  Special Operations
  
  * CreatorUnprefixListOther
  
      Fetch creators with non-a to z-names
  """
  creatorsUnprefix(filter: Filter_InternetArchive_CreatorUnprefix, pagination: Pagination): Connection_InternetArchive_CreatorUnprefix

  """Fetch a single identifier."""
  identifier(id: String!): InternetArchive_Identifier

  """Fetch a collection of identifiers."""
  identifiers(filter: Filter_InternetArchive_Creator, pagination: Pagination): Connection_InternetArchive_Creator

  """Fetch a single performance."""
  performance(id: Int!): Performance

  """
  Fetch a collection of performances.
  
  Special Operations
  
  * ArtistGroupPerformances
  
      Fetch performances for the given artist group $id and $year
  """
  performances(filter: Filter_Performance, pagination: Pagination): Connection_Performance

  """Fetch a single source."""
  source(id: Int!): Source

  """
  Fetch a collection of sources.
  
  Special Operations
  
  * ArtistSources
  
      Fetch sources by artist $id and $year
  * ArtistGroupSources
  
      Fetch sources by artist group $id and $year
  """
  sources(filter: Filter_Source, pagination: Pagination): Connection_Source

  """Fetch a single user."""
  user(id: Int!): User

  """Fetch a single user by username."""
  userByUsername(username: String!): User

  """Fetch a single user list."""
  userList(id: Int!, shortname: String!): UserList

  """Fetch a single user list by username and listname."""
  userListByUsername(username: String!, listname: String): UserList

  """Fetch a single user performance."""
  userPerformance(id: Int!): UserPerformance

  """Fetch a user's list or sublist of performances by username."""
  userPerformancesByUsername(username: String!, listname: String, pagination: Pagination): Connection_UserPerformance

  """Fetch a collection of users."""
  users(filter: Filter_User, pagination: Pagination): Connection_User
}

"""App\\ORM\\Entity\\Artist"""
type Artist {
  """abbrev"""
  abbrev: String

  """archive_key"""
  archive_key: Int

  """artistToArtistGroups"""
  artistToArtistGroups(filter: Filter_Artist_ArtistToArtistGroups, pagination: Pagination): Connection_Artist_ArtistToArtistGroups

  """artistuserid"""
  artistuserid: String

  """createdAt"""
  createdAt: DateTime

  """creators"""
  creators(filter: Filter_Artist_Creators, pagination: Pagination): Connection_Artist_Creators

  """fanUrl"""
  fanUrl: String

  """icon"""
  icon: String

  """id"""
  id: Int

  """isTradable"""
  isTradable: Boolean

  """The most recent performance year for an artist"""
  latestYear: Int

  """name"""
  name: String

  """nameFirstLetter"""
  nameFirstLetter: Int

  """nameNormalized"""
  nameNormalized: String

  """notes"""
  notes: String

  """officialUrl"""
  officialUrl: String

  """performances"""
  performances(filter: Filter_Artist_Performances, pagination: Pagination): Connection_Artist_Performances

  """ref_shnartist"""
  ref_shnartist: Int

  """The number of sources for an artist"""
  sourceCount: Int

  """The most recent performance year for an artist's sources"""
  sourceLatestYear: Int

  """The performance for artist sources"""
  sourceYears: [Int]

  """top100"""
  top100: Boolean

  """App\\ORM\\Entity\\User"""
  user: User

  """The count of user performances for a user"""
  users(filter: Filter_User, pagination: Pagination): Connection_User

  """The performance years for an artist"""
  years: [Int]
}

input Filter_Artist_ArtistToArtistGroups {
  """String Filters"""
  reason: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Association Filters"""
  artistGroup: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Field filters"""
input Filters_String_1bb78ae9f3325089fccab4aafd4b69b5 {
  """Equals"""
  eq: String

  """Not equals"""
  neq: String

  """Contains the value.  Strings only."""
  contains: String

  """Starts with the value.  Strings only."""
  startswith: String

  """Ends with the value.  Strings only."""
  endswith: String

  """In the array of values"""
  in: [String]

  """Not in the array of values"""
  notin: [String]

  """Is null"""
  isnull: Boolean

  """Sort by field. ASC or DESC."""
  sort: String
}

"""Field filters"""
input Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27 {
  """Equals"""
  eq: ID
}

"""Pagination fields for the GraphQL Complete Connection Model"""
input Pagination {
  """Takes a non-negative integer."""
  first: Int

  """Takes the cursor type."""
  after: String

  """Takes a non-negative integer."""
  last: Int

  """Takes the cursor type."""
  before: String
}

"""Connection for Artist_ArtistToArtistGroups"""
type Connection_Artist_ArtistToArtistGroups {
  edges: [Node_Artist_ArtistToArtistGroups]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Artist_ArtistToArtistGroups {
  node: ArtistToArtistGroup
  cursor: String!
}

"""App\\ORM\\Entity\\ArtistToArtistGroup"""
type ArtistToArtistGroup {
  """App\\ORM\\Entity\\Artist"""
  artist: Artist

  """App\\ORM\\Entity\\ArtistGroup"""
  artistGroup: ArtistGroup

  """reason"""
  reason: String

  """App\\ORM\\Entity\\User"""
  user: User
}

"""App\\ORM\\Entity\\ArtistGroup"""
type ArtistGroup {
  """artistToArtistGroups"""
  artistToArtistGroups(filter: Filter_ArtistGroup_ArtistToArtistGroups, pagination: Pagination): Connection_ArtistGroup_ArtistToArtistGroups

  """Return a list of artists in an artist group sorted by name."""
  artistsByName: [Artist]

  """footer"""
  footer: String

  """header"""
  header: String

  """id"""
  id: Int

  """The most recent performance year for an artist group"""
  latestYear: Int

  """Fetch all years for artist group performances"""
  performanceYears: [Int]

  """Count the number of sources for an artist group"""
  sourceCount: Int

  """The most recent source year for an artist group"""
  sourceLatestYear: Int

  """Fetch all years for artist group sources"""
  sourceYears: [Int]

  """title"""
  title: String

  """App\\ORM\\Entity\\User"""
  user: User

  """userToArtistGroups"""
  userToArtistGroups(filter: Filter_ArtistGroup_UserToArtistGroups, pagination: Pagination): Connection_ArtistGroup_UserToArtistGroups
}

input Filter_ArtistGroup_ArtistToArtistGroups {
  """String Filters"""
  reason: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Association Filters"""
  artistGroup: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for ArtistGroup_ArtistToArtistGroups"""
type Connection_ArtistGroup_ArtistToArtistGroups {
  edges: [Node_ArtistGroup_ArtistToArtistGroups]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_ArtistGroup_ArtistToArtistGroups {
  node: ArtistToArtistGroup
  cursor: String!
}

"""Page information"""
type PageInfo {
  """Cursor corresponding to the first node in edges."""
  startCursor: String!

  """Cursor corresponding to the last node in edges."""
  endCursor: String!

  """
  If edges contains more than last elements return true, otherwise false.
  """
  hasPreviousPage: Boolean!

  """
  If edges contains more than first elements return true, otherwise false.
  """
  hasNextPage: Boolean!
}

"""App\\ORM\\Entity\\User"""
type User {
  """activetrading"""
  activetrading: Int

  """artistGroups"""
  artistGroups(filter: Filter_User_ArtistGroups, pagination: Pagination): Connection_User_ArtistGroups

  """artistToArtistGroups"""
  artistToArtistGroups(filter: Filter_User_ArtistToArtistGroups, pagination: Pagination): Connection_User_ArtistToArtistGroups

  """artists"""
  artists(filter: Filter_User_Artists, pagination: Pagination): Connection_User_Artists

  """city"""
  city: String

  """columnorder"""
  columnorder: String

  """config_colors"""
  config_colors: String

  """config_columns"""
  config_columns: String

  """config_showrules"""
  config_showrules: Boolean

  """confirm_hash"""
  confirm_hash: String

  """cookie_hash"""
  cookie_hash: String

  """createdAt"""
  createdAt: DateTime

  """css"""
  css: String

  """email"""
  email: String

  """id"""
  id: Int

  """The most recent update by this user"""
  lastUpdate: DateTime

  """msg_yahoo"""
  msg_yahoo: String

  """name"""
  name: String

  """perms"""
  perms: String

  """picture"""
  picture: String

  """rules"""
  rules: String

  """state"""
  state: String

  """App\\ORM\\Entity\\Template"""
  template: Template

  """User top artists"""
  topArtists(first: Int!): [TopArtist]

  """tradenotes"""
  tradenotes: String

  """updatedAt"""
  updatedAt: DateTime

  """userLists"""
  userLists(filter: Filter_User_UserLists, pagination: Pagination): Connection_User_UserLists

  """The count of user performances for a user"""
  userPerformanceCount: Int

  """userPerformances"""
  userPerformances(filter: Filter_User_UserPerformances, pagination: Pagination): Connection_User_UserPerformances

  """userToArtistGroups"""
  userToArtistGroups(filter: Filter_User_UserToArtistGroups, pagination: Pagination): Connection_User_UserToArtistGroups

  """username"""
  username: String

  """validemail"""
  validemail: Boolean

  """wantedPerformances"""
  wantedPerformances(filter: Filter_User_WantedPerformances, pagination: Pagination): Connection_User_WantedPerformances

  """zipcode"""
  zipcode: String
}

input Filter_User_ArtistGroups {
  """String Filters"""
  title: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  header: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  footer: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Field filters"""
input Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15 {
  """Equals"""
  eq: Int

  """Not equals"""
  neq: Int

  """Less than"""
  lt: Int

  """Less than or equals"""
  lte: Int

  """Greater than"""
  gt: Int

  """Greater than or equals"""
  gte: Int

  """Is between from and to inclusive of from and to"""
  between: Between_Int

  """In the array of values"""
  in: [Int]

  """Not in the array of values"""
  notin: [Int]

  """Is null"""
  isnull: Boolean

  """Sort by field. ASC or DESC."""
  sort: String
}

"""Between \`from\` and \`to\`"""
input Between_Int {
  """Low value of between"""
  from: Int

  """High value of between"""
  to: Int
}

"""Connection for User_ArtistGroups"""
type Connection_User_ArtistGroups {
  edges: [Node_User_ArtistGroups]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_User_ArtistGroups {
  node: ArtistGroup
  cursor: String!
}

input Filter_User_ArtistToArtistGroups {
  """String Filters"""
  reason: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Association Filters"""
  artistGroup: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for User_ArtistToArtistGroups"""
type Connection_User_ArtistToArtistGroups {
  edges: [Node_User_ArtistToArtistGroups]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_User_ArtistToArtistGroups {
  node: ArtistToArtistGroup
  cursor: String!
}

input Filter_User_Artists {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  fanUrl: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  officialUrl: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  icon: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  artistuserid: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  abbrev: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  isTradable: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Int Filters"""
  ref_shnartist: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  nameFirstLetter: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  archive_key: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  top100: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  nameNormalized: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  notes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Field filters"""
input Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15 {
  """Equals"""
  eq: DateTime

  """Not equals"""
  neq: DateTime

  """Less than"""
  lt: DateTime

  """Less than or equals"""
  lte: DateTime

  """Greater than"""
  gt: DateTime

  """Greater than or equals"""
  gte: DateTime

  """Is between from and to inclusive of from and to"""
  between: Between_DateTime

  """In the array of values"""
  in: [DateTime]

  """Not in the array of values"""
  notin: [DateTime]

  """Is null"""
  isnull: Boolean

  """Sort by field. ASC or DESC."""
  sort: String
}

"""
The \`datetime\` scalar type represents datetime data.The format is ISO-8601 e.g. 2004-02-12T15:19:21+00:00.
"""
scalar DateTime

"""Between \`from\` and \`to\`"""
input Between_DateTime {
  """Low value of between"""
  from: DateTime

  """High value of between"""
  to: DateTime
}

"""Field filters"""
input Filters_Boolean_b468a454ba782e8572487ec259fe96aa {
  """Equals"""
  eq: Boolean

  """Not equals"""
  neq: Boolean

  """In the array of values"""
  in: [Boolean]

  """Not in the array of values"""
  notin: [Boolean]

  """Is null"""
  isnull: Boolean

  """Sort by field. ASC or DESC."""
  sort: String
}

"""Connection for User_Artists"""
type Connection_User_Artists {
  edges: [Node_User_Artists]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_User_Artists {
  node: Artist
  cursor: String!
}

"""App\\ORM\\Entity\\Template"""
type Template {
  """author"""
  author: String

  """default_colors"""
  default_colors: String

  """default_columns"""
  default_columns: String

  """description"""
  description: String

  """forcelist"""
  forcelist: Boolean

  """id"""
  id: Int

  """longdesc"""
  longdesc: String

  """name"""
  name: String

  """smarty"""
  smarty: Boolean

  """userLists"""
  userLists(filter: Filter_Template_UserLists, pagination: Pagination): Connection_Template_UserLists

  """users"""
  users(filter: Filter_Template_Users, pagination: Pagination): Connection_Template_Users

  """zendview"""
  zendview: Boolean
}

input Filter_Template_UserLists {
  """String Filters"""
  ref_username: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  shortname: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  notes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  views: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """DateTime Filters"""
  lastviewed: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  defaultlist: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Boolean Filters"""
  private: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  template: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Template_UserLists"""
type Connection_Template_UserLists {
  edges: [Node_Template_UserLists]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Template_UserLists {
  node: UserList
  cursor: String!
}

"""App\\ORM\\Entity\\UserList"""
type UserList {
  """createdAt"""
  createdAt: DateTime

  """defaultlist"""
  defaultlist: Boolean

  """id"""
  id: Int

  """lastviewed"""
  lastviewed: DateTime

  """name"""
  name: String

  """notes"""
  notes: String

  """private"""
  private: Boolean

  """ref_username"""
  ref_username: String

  """shortname"""
  shortname: String

  """App\\ORM\\Entity\\Template"""
  template: Template

  """App\\ORM\\Entity\\User"""
  user: User

  """The count of user performances assigned to a user list"""
  userPerformanceCount: Int

  """userPerformances"""
  userPerformances(filter: Filter_UserList_UserPerformances, pagination: Pagination): Connection_UserList_UserPerformances

  """views"""
  views: Int
}

input Filter_UserList_UserPerformances {
  """String Filters"""
  sourceInfo: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  checksums: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  media_count: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  media_type: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  noise_reduction: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  scms_status: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  show_rating: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  sound_rating: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  microphones: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  generation: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  note: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  j_card_comment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tech_note: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  reference_number: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  traded_from: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  traded_from_email: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  tradesAllowed: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  status: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  attendance: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  userid: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tapername: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  miclocation: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  performance: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for UserList_UserPerformances"""
type Connection_UserList_UserPerformances {
  edges: [Node_UserList_UserPerformances]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_UserList_UserPerformances {
  node: UserPerformance
  cursor: String!
}

"""App\\ORM\\Entity\\UserPerformance"""
type UserPerformance {
  """attendance"""
  attendance: String

  """checksums"""
  checksums: String

  """createdAt"""
  createdAt: DateTime

  """generation"""
  generation: Int

  """id"""
  id: Int

  """j_card_comment"""
  j_card_comment: String

  """media_count"""
  media_count: Int

  """media_type"""
  media_type: String

  """miclocation"""
  miclocation: String

  """microphones"""
  microphones: String

  """noise_reduction"""
  noise_reduction: Int

  """note"""
  note: String

  """App\\ORM\\Entity\\Performance"""
  performance: Performance

  """reference_number"""
  reference_number: String

  """scms_status"""
  scms_status: String

  """show_rating"""
  show_rating: String

  """sound_rating"""
  sound_rating: String

  """App\\ORM\\Entity\\Source"""
  source: Source

  """sourceInfo"""
  sourceInfo: String

  """status"""
  status: String

  """tapername"""
  tapername: String

  """tech_note"""
  tech_note: String

  """traded_from"""
  traded_from: String

  """traded_from_email"""
  traded_from_email: String

  """tradesAllowed"""
  tradesAllowed: Boolean

  """App\\ORM\\Entity\\User"""
  user: User

  """userLists"""
  userLists(filter: Filter_UserPerformance_UserLists, pagination: Pagination): Connection_UserPerformance_UserLists

  """userid"""
  userid: String
}

"""App\\ORM\\Entity\\Performance"""
type Performance {
  """App\\ORM\\Entity\\Artist"""
  artist: Artist

  """changeComment"""
  changeComment: String

  """city"""
  city: String

  """comment"""
  comment: String

  """createdAt"""
  createdAt: DateTime

  """date"""
  date: String

  """festival_lock"""
  festival_lock: Boolean

  """id"""
  id: Int

  """isCompilation"""
  isCompilation: Boolean

  """merge_lock"""
  merge_lock: Int

  """ref_festival"""
  ref_festival: Int

  """ref_venue"""
  ref_venue: Int

  """set1"""
  set1: String

  """set2"""
  set2: String

  """set3"""
  set3: String

  """showsuserid"""
  showsuserid: String

  """sources"""
  sources(filter: Filter_Performance_Sources, pagination: Pagination): Connection_Performance_Sources

  """spotlight_date"""
  spotlight_date: DateTime

  """staffpick_date"""
  staffpick_date: DateTime

  """state"""
  state: String

  """title"""
  title: String

  """updatedAt"""
  updatedAt: DateTime

  """userPerformances"""
  userPerformances(filter: Filter_Performance_UserPerformances, pagination: Pagination): Connection_Performance_UserPerformances

  """The count of user performances for a user"""
  users(filter: Filter_User, pagination: Pagination): Connection_User

  """venue"""
  venue: String

  """wantedUsers"""
  wantedUsers(filter: Filter_Performance_WantedUsers, pagination: Pagination): Connection_Performance_WantedUsers

  """year"""
  year: Int
}

input Filter_Performance_Sources {
  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  enterUsername: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  circdate: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  shndiskcount: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  wavdiskcount: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  textdoc: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  comments: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  archiveIdentifier: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  updatedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  mediaSize: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  mediaSizeUncompressed: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  dummyColumn: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  performance: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Performance_Sources"""
type Connection_Performance_Sources {
  edges: [Node_Performance_Sources]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Performance_Sources {
  node: Source
  cursor: String!
}

"""App\\ORM\\Entity\\Source"""
type Source {
  """archiveIdentifier"""
  archiveIdentifier: String

  """checksums"""
  checksums(filter: Filter_Source_Checksums, pagination: Pagination): Connection_Source_Checksums

  """circdate"""
  circdate: String

  """comments"""
  comments: String

  """createdAt"""
  createdAt: DateTime

  """dummyColumn"""
  dummyColumn: Int

  """enterUsername"""
  enterUsername: String

  """id"""
  id: Int

  """identifier"""
  identifier(filter: Filter_Source_Identifier, pagination: Pagination): Connection_Source_Identifier

  """mediaSize"""
  mediaSize: String

  """mediaSizeUncompressed"""
  mediaSizeUncompressed: String

  """App\\ORM\\Entity\\Performance"""
  performance: Performance

  """shndiskcount"""
  shndiskcount: Int

  """textdoc"""
  textdoc: String

  """updatedAt"""
  updatedAt: DateTime

  """userPerformances"""
  userPerformances(filter: Filter_Source_UserPerformances, pagination: Pagination): Connection_Source_UserPerformances

  """The count of user performances for a user"""
  users(filter: Filter_User, pagination: Pagination): Connection_User

  """wavdiskcount"""
  wavdiskcount: Int
}

input Filter_Source_Checksums {
  """String Filters"""
  description: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  body: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Source_Checksums"""
type Connection_Source_Checksums {
  edges: [Node_Source_Checksums]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Source_Checksums {
  node: Checksum
  cursor: String!
}

"""App\\ORM\\Entity\\Checksum"""
type Checksum {
  """body"""
  body: String

  """createdAt"""
  createdAt: DateTime

  """description"""
  description: String

  """id"""
  id: Int

  """App\\ORM\\Entity\\Source"""
  source: Source
}

input Filter_Source_Identifier {
  """String Filters"""
  archiveIdentifier: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  server: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  performanceDate: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  addedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  title: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  description: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  uploader: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  venue: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  coverage: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  year: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  notes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  taper: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  lineage: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  archiveSource: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  md5s: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  creator: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Source_Identifier"""
type Connection_Source_Identifier {
  edges: [Node_Source_Identifier]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Source_Identifier {
  node: InternetArchive_Identifier
  cursor: String!
}

"""App\\ORM\\Entity\\InternetArchive\\Identifier"""
type InternetArchive_Identifier {
  """addedAt"""
  addedAt: DateTime

  """archiveIdentifier"""
  archiveIdentifier: String

  """archiveSource"""
  archiveSource: String

  """collections"""
  collections(filter: Filter_InternetArchive_Identifier_Collections, pagination: Pagination): Connection_InternetArchive_Identifier_Collections

  """coverage"""
  coverage: String

  """App\\ORM\\Entity\\InternetArchive\\Creator"""
  creator: InternetArchive_Creator

  """description"""
  description: String

  """files"""
  files(filter: Filter_InternetArchive_Identifier_Files, pagination: Pagination): Connection_InternetArchive_Identifier_Files

  """id"""
  id: Int

  """lineage"""
  lineage: String

  """md5s"""
  md5s: String

  """notes"""
  notes: String

  """performanceDate"""
  performanceDate: String

  """server"""
  server: String

  """App\\ORM\\Entity\\Source"""
  source: Source

  """taper"""
  taper: String

  """title"""
  title: String

  """uploader"""
  uploader: String

  """venue"""
  venue: String

  """year"""
  year: String
}

input Filter_InternetArchive_Identifier_Collections {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15
}

"""Connection for InternetArchive_Identifier_Collections"""
type Connection_InternetArchive_Identifier_Collections {
  edges: [Node_InternetArchive_Identifier_Collections]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_InternetArchive_Identifier_Collections {
  node: InternetArchive_Collection
  cursor: String!
}

"""App\\ORM\\Entity\\InternetArchive\\Collection"""
type InternetArchive_Collection {
  """id"""
  id: Int

  """identifiers"""
  identifiers(filter: Filter_InternetArchive_Collection_Identifiers, pagination: Pagination): Connection_InternetArchive_Collection_Identifiers

  """name"""
  name: String
}

input Filter_InternetArchive_Collection_Identifiers {
  """String Filters"""
  archiveIdentifier: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  server: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  performanceDate: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  addedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  title: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  description: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  uploader: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  venue: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  coverage: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  year: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  notes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  taper: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  lineage: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  archiveSource: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  md5s: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  creator: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for InternetArchive_Collection_Identifiers"""
type Connection_InternetArchive_Collection_Identifiers {
  edges: [Node_InternetArchive_Collection_Identifiers]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_InternetArchive_Collection_Identifiers {
  node: InternetArchive_Identifier
  cursor: String!
}

"""App\\ORM\\Entity\\InternetArchive\\Creator"""
type InternetArchive_Creator {
  """App\\ORM\\Entity\\Artist"""
  artist: Artist

  """id"""
  id: Int

  """identifiers"""
  identifiers(filter: Filter_InternetArchive_Creator_Identifiers, pagination: Pagination): Connection_InternetArchive_Creator_Identifiers

  """The most recent identifier year for a creator"""
  latestYear: Int

  """name"""
  name: String

  """The performance years for a creator"""
  years: [Int]
}

input Filter_InternetArchive_Creator_Identifiers {
  """String Filters"""
  archiveIdentifier: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  server: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  performanceDate: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  addedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  title: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  description: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  uploader: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  venue: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  coverage: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  year: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  notes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  taper: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  lineage: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  archiveSource: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  md5s: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  creator: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for InternetArchive_Creator_Identifiers"""
type Connection_InternetArchive_Creator_Identifiers {
  edges: [Node_InternetArchive_Creator_Identifiers]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_InternetArchive_Creator_Identifiers {
  node: InternetArchive_Identifier
  cursor: String!
}

input Filter_InternetArchive_Identifier_Files {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  body: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  identifier: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for InternetArchive_Identifier_Files"""
type Connection_InternetArchive_Identifier_Files {
  edges: [Node_InternetArchive_Identifier_Files]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_InternetArchive_Identifier_Files {
  node: InternetArchive_File
  cursor: String!
}

"""App\\ORM\\Entity\\InternetArchive\\File"""
type InternetArchive_File {
  """body"""
  body: String

  """id"""
  id: Int

  """App\\ORM\\Entity\\InternetArchive\\Identifier"""
  identifier: InternetArchive_Identifier

  """name"""
  name: String
}

input Filter_Source_UserPerformances {
  """String Filters"""
  sourceInfo: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  checksums: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  media_count: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  media_type: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  noise_reduction: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  scms_status: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  show_rating: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  sound_rating: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  microphones: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  generation: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  note: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  j_card_comment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tech_note: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  reference_number: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  traded_from: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  traded_from_email: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  tradesAllowed: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  status: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  attendance: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  userid: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tapername: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  miclocation: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  performance: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Source_UserPerformances"""
type Connection_Source_UserPerformances {
  edges: [Node_Source_UserPerformances]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Source_UserPerformances {
  node: UserPerformance
  cursor: String!
}

input Filter_User {
  """String Filters"""
  username: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  email: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  perms: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  validemail: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  css: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  activetrading: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  rules: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  config_showrules: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  config_colors: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  config_columns: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  columnorder: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  city: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  state: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  zipcode: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tradenotes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  confirm_hash: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  cookie_hash: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  updatedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  msg_yahoo: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  picture: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  template: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for User"""
type Connection_User {
  edges: [Node_User]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_User {
  node: User
  cursor: String!
}

input Filter_Performance_UserPerformances {
  """String Filters"""
  sourceInfo: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  checksums: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  media_count: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  media_type: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  noise_reduction: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  scms_status: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  show_rating: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  sound_rating: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  microphones: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  generation: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  note: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  j_card_comment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tech_note: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  reference_number: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  traded_from: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  traded_from_email: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  tradesAllowed: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  status: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  attendance: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  userid: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tapername: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  miclocation: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  performance: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Performance_UserPerformances"""
type Connection_Performance_UserPerformances {
  edges: [Node_Performance_UserPerformances]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Performance_UserPerformances {
  node: UserPerformance
  cursor: String!
}

input Filter_Performance_WantedUsers {
  """String Filters"""
  username: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  email: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  perms: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  validemail: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  css: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  activetrading: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  rules: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  config_showrules: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  config_colors: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  config_columns: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  columnorder: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  city: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  state: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  zipcode: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tradenotes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  confirm_hash: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  cookie_hash: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  updatedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  msg_yahoo: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  picture: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  template: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Performance_WantedUsers"""
type Connection_Performance_WantedUsers {
  edges: [Node_Performance_WantedUsers]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Performance_WantedUsers {
  node: User
  cursor: String!
}

input Filter_UserPerformance_UserLists {
  """String Filters"""
  ref_username: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  shortname: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  notes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  views: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """DateTime Filters"""
  lastviewed: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  defaultlist: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Boolean Filters"""
  private: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  template: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for UserPerformance_UserLists"""
type Connection_UserPerformance_UserLists {
  edges: [Node_UserPerformance_UserLists]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_UserPerformance_UserLists {
  node: UserList
  cursor: String!
}

input Filter_Template_Users {
  """String Filters"""
  username: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  email: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  perms: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  validemail: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  css: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  activetrading: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  rules: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  config_showrules: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  config_colors: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  config_columns: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  columnorder: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  city: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  state: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  zipcode: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tradenotes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  confirm_hash: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  cookie_hash: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  updatedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  msg_yahoo: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  picture: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  template: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Template_Users"""
type Connection_Template_Users {
  edges: [Node_Template_Users]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Template_Users {
  node: User
  cursor: String!
}

"""Top artists details collected by a user"""
type TopArtist {
  id: Int
  name: String
  userPerformanceCount: Int
}

input Filter_User_UserLists {
  """String Filters"""
  ref_username: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  shortname: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  notes: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  views: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """DateTime Filters"""
  lastviewed: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  defaultlist: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Boolean Filters"""
  private: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  template: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for User_UserLists"""
type Connection_User_UserLists {
  edges: [Node_User_UserLists]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_User_UserLists {
  node: UserList
  cursor: String!
}

input Filter_User_UserPerformances {
  """String Filters"""
  sourceInfo: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  checksums: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  media_count: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  media_type: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  noise_reduction: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  scms_status: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  show_rating: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  sound_rating: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  microphones: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  generation: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  note: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  j_card_comment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tech_note: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  reference_number: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  traded_from: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  traded_from_email: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  tradesAllowed: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  status: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  attendance: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  userid: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  tapername: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  miclocation: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  performance: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for User_UserPerformances"""
type Connection_User_UserPerformances {
  edges: [Node_User_UserPerformances]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_User_UserPerformances {
  node: UserPerformance
  cursor: String!
}

input Filter_User_UserToArtistGroups {
  """Int Filters"""
  ref_user_update: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  temporary: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  artistGroup: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for User_UserToArtistGroups"""
type Connection_User_UserToArtistGroups {
  edges: [Node_User_UserToArtistGroups]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_User_UserToArtistGroups {
  node: UserToArtistGroup
  cursor: String!
}

"""App\\ORM\\Entity\\UserToArtistGroup"""
type UserToArtistGroup {
  """App\\ORM\\Entity\\ArtistGroup"""
  artistGroup: ArtistGroup

  """ref_user_update"""
  ref_user_update: Int

  """temporary"""
  temporary: Boolean

  """App\\ORM\\Entity\\User"""
  user: User
}

input Filter_User_WantedPerformances {
  """String Filters"""
  date: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  venue: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  city: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  state: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  set1: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  set2: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  set3: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  comment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  updatedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  year: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  showsuserid: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  ref_festival: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  festival_lock: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """DateTime Filters"""
  spotlight_date: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """DateTime Filters"""
  staffpick_date: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  merge_lock: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  ref_venue: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  changeComment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  isCompilation: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  title: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for User_WantedPerformances"""
type Connection_User_WantedPerformances {
  edges: [Node_User_WantedPerformances]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_User_WantedPerformances {
  node: Performance
  cursor: String!
}

input Filter_ArtistGroup_UserToArtistGroups {
  """Int Filters"""
  ref_user_update: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  temporary: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  artistGroup: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for ArtistGroup_UserToArtistGroups"""
type Connection_ArtistGroup_UserToArtistGroups {
  edges: [Node_ArtistGroup_UserToArtistGroups]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_ArtistGroup_UserToArtistGroups {
  node: UserToArtistGroup
  cursor: String!
}

input Filter_Artist_Creators {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Artist_Creators"""
type Connection_Artist_Creators {
  edges: [Node_Artist_Creators]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Artist_Creators {
  node: InternetArchive_Creator
  cursor: String!
}

input Filter_Artist_Performances {
  """String Filters"""
  date: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  venue: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  city: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  state: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  set1: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  set2: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  set3: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  comment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  updatedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  year: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  showsuserid: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  ref_festival: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  festival_lock: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """DateTime Filters"""
  spotlight_date: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """DateTime Filters"""
  staffpick_date: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  merge_lock: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  ref_venue: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  changeComment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  isCompilation: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  title: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Artist_Performances"""
type Connection_Artist_Performances {
  edges: [Node_Artist_Performances]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Artist_Performances {
  node: Performance
  cursor: String!
}

input Filter_ArtistGroup {
  """String Filters"""
  title: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  header: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  footer: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for ArtistGroup"""
type Connection_ArtistGroup {
  edges: [Node_ArtistGroup]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_ArtistGroup {
  node: ArtistGroup
  cursor: String!
}

input Filter_ArtistUnprefix {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  nameUnprefix: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  top100: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15
}

"""Connection for ArtistUnprefix"""
type Connection_ArtistUnprefix {
  edges: [Node_ArtistUnprefix]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_ArtistUnprefix {
  node: ArtistUnprefix
  cursor: String!
}

"""App\\ORM\\Entity\\ArtistUnprefix"""
type ArtistUnprefix {
  """id"""
  id: Int

  """name"""
  name: String

  """nameUnprefix"""
  nameUnprefix: String

  """top100"""
  top100: Boolean
}

input Filter_ArtistUnprefixSource {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  nameUnprefix: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  top100: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15
}

"""Connection for ArtistUnprefixSource"""
type Connection_ArtistUnprefixSource {
  edges: [Node_ArtistUnprefixSource]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_ArtistUnprefixSource {
  node: ArtistUnprefixSource
  cursor: String!
}

"""App\\ORM\\Entity\\ArtistUnprefixSource"""
type ArtistUnprefixSource {
  """id"""
  id: Int

  """name"""
  name: String

  """nameUnprefix"""
  nameUnprefix: String

  """top100"""
  top100: Boolean
}

input Filter_InternetArchive_Creator {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for InternetArchive_Creator"""
type Connection_InternetArchive_Creator {
  edges: [Node_InternetArchive_Creator]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_InternetArchive_Creator {
  node: InternetArchive_Creator
  cursor: String!
}

input Filter_InternetArchive_CreatorUnprefix {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  nameUnprefix: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15
}

"""Connection for InternetArchive_CreatorUnprefix"""
type Connection_InternetArchive_CreatorUnprefix {
  edges: [Node_InternetArchive_CreatorUnprefix]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_InternetArchive_CreatorUnprefix {
  node: InternetArchive_CreatorUnprefix
  cursor: String!
}

"""App\\ORM\\Entity\\InternetArchive\\CreatorUnprefix"""
type InternetArchive_CreatorUnprefix {
  """id"""
  id: Int

  """name"""
  name: String

  """nameUnprefix"""
  nameUnprefix: String
}

input Filter_Performance {
  """String Filters"""
  date: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  venue: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  city: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  state: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  set1: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  set2: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  set3: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  comment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  updatedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  year: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  showsuserid: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  ref_festival: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  festival_lock: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """DateTime Filters"""
  spotlight_date: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """DateTime Filters"""
  staffpick_date: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  merge_lock: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  ref_venue: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  changeComment: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  isCompilation: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """String Filters"""
  title: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Performance"""
type Connection_Performance {
  edges: [Node_Performance]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Performance {
  node: Performance
  cursor: String!
}

input Filter_Source {
  """DateTime Filters"""
  createdAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  enterUsername: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  circdate: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  shndiskcount: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  wavdiskcount: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  textdoc: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  comments: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  archiveIdentifier: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """DateTime Filters"""
  updatedAt: Filters_DateTime_c3e33b972e10b05e7a58c5c0a8c83b15

  """String Filters"""
  mediaSize: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  mediaSizeUncompressed: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  dummyColumn: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  performance: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for Source"""
type Connection_Source {
  edges: [Node_Source]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_Source {
  node: Source
  cursor: String!
}

"""Connection for UserPerformance"""
type Connection_UserPerformance {
  edges: [Node_UserPerformance]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_UserPerformance {
  node: UserPerformance
  cursor: String!
}`;class Wv{constructor(n){Se(this,"mapping");this.mapping=n}getFor(n){return this.mapping.get(n.name)}}var oi;(function(r){r.UNION="union",r.ARGUMENT="argument",r.FIELD="field"})(oi||(oi={}));function Qv(r){const n=new Map;return Jv(r,t=>{gn(t)&&Hv(t,s=>{const a=vo(s.type);lo(n,a).references.push({kind:oi.FIELD,parent:t,by:s}),Xv(s,c=>{const f=vo(c.type);lo(n,f).references.push({kind:oi.ARGUMENT,field:s,type:t,by:c})})}),Hn(t)&&t.getTypes().forEach(s=>{lo(n,s).references.push({kind:oi.UNION,by:t})})}),new Wv(n)}function Jv(r,n){Object.entries(r.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||n(t)})}function Hv(r,n){Object.entries(r.getFields()).forEach(([,t])=>{n(t)})}function Xv(r,n){Object.entries(r.args).forEach(([,t])=>{n(t)})}function lo(r,n){let t=r.get(n.name);return t||(t={references:[]},r.set(n.name,t)),t}function vo(r){return on(r)||lr(r)?vo(r.ofType):r}const cn=lE(),Eo=Uo(Ro.DIRECTIVES,[]);var tf;const Zv=Us((tf=cn.getQueryType())==null?void 0:tf.getFields());var rf;const Kv=Us((rf=cn.getMutationType())==null?void 0:rf.getFields());var sf;const eE=Us((sf=cn.getSubscriptionType())==null?void 0:sf.getFields()),Vo=Nt.keyBy(sp(),r=>r.name.toLocaleLowerCase()),nE=Nt.mapValues(Vo,r=>{const n=Eo.find(t=>(t==null?void 0:t.name)===r.name||(t==null?void 0:t.name)==="*");return n?n.args.some(t=>t==="*")?r.args:n.args.map(t=>r.args.find(s=>s.name===t)).filter(t=>!!t):[]}),tE=Us(cn.getTypeMap()),rE=Qv(cn);function Us(r){return Nt.mapKeys(r||{},(n,t)=>t.toLocaleLowerCase())}function iE(){return Nt.size(cn.getTypeMap())<=10}function sE(){return[fo("Queries",cn.getQueryType()),fo("Mutations",cn.getMutationType()),fo("Subscriptions",cn.getSubscriptionType()),fE(),uE()].filter(r=>!!r)}function fo(r,n){return oE(r,aE(n))}function aE(r){return Nt.sortBy((r==null?void 0:r.getFields())||{},n=>n.name)}function oE(r,n){return n.length===0?null:{type:"menu",title:r,children:n.map(t=>({type:"page",title:t.name,section:r,deprecated:!!t.deprecationReason,href:di.joinUrlPaths(Is,r.toLocaleLowerCase(),t.name)}))}}function uE(){return iE()?null:{type:"menu",title:"Types",children:Nt.sortBy(Nt.map(cn.getTypeMap()),n=>n.name).filter(n=>!n.name.startsWith("__")).map(n=>({type:"page",title:n.name,section:"Types",href:di.joinUrlPaths(Is,"types",n.name)}))}}function IE(){return!!cn.getQueryType()}function yE(r){return Zv[r.toLocaleLowerCase()]}function NE(){return!!cn.getMutationType()}function CE(r){return Kv[r.toLocaleLowerCase()]}function wE(){return!!cn.getSubscriptionType()}function xE(r){return eE[r.toLocaleLowerCase()]}function kE(r){return tE[r.toLocaleLowerCase()]}function cE(r){return Vo[r.toLocaleLowerCase()]}function OE(r){return cE(r.name)!==void 0}function LE(){return Nt.size(Vo)>0}function RE(r){return nE[r.name.toLocaleLowerCase()]||[]}function UE(r){if(r)return rE.getFor(r)}function BE(r){return Nt.flatMap(r.getFields(),n=>({field:n,possibleDescriptions:ip(n,r)}))}function ip(r,n){return r?r.description?[{description:r.description,from:n}]:gn(n)?n.getInterfaces().flatMap(t=>ip(t.getFields()[r.name],t)):[]:[]}function sp(){return Eo.some(r=>(r==null?void 0:r.name)==="*")?cn.getDirectives().filter(r=>!["include","skip","deprecated","specifiedBy"].includes(r.name)):Eo.filter(r=>!!(r!=null&&r.name)).map(({name:r})=>r?cn.getDirective(r):void 0).filter(r=>!!r)}function lE(){return ef.trim().length===0?qv(JSON.parse(JSON.stringify({__schema:{types:[]}}))):Yv(ef)}function fE(){const r=sp();return r.length===0?null:{type:"menu",title:"Directives",children:r.map(n=>({type:"page",title:n.name,href:di.joinUrlPaths(Is,"directives",n.name),section:"Directives"}))}}const PE=Uo(Ro.APP_TITLE,"GraphQL Documentation"),ap=dE().concat(sE());_E(ap);const pE=Object.freeze(ap),$E=hE();function dE(){return Uo(Ro.PAGES,bE()).filter(n=>!!n).map(n=>up([],n))}function hE(){const r=gE();if(r)return r.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function _E(r){function n(s,a){for(const u of s){if(u.type==="page"){a(u);continue}u.type==="menu"&&n(u.children,a)}}let t;n(r,s=>{t&&(t.next={title:s.title,section:s.section,href:s.href},s.previous={title:t.title,section:t.section,href:t.href}),t=s})}function gE(){return op(()=>!0)}function ME(r){return op(n=>n.href.toLocaleLowerCase()===r.toLocaleLowerCase())}function op(r){function n(t){for(const s of t){if(s.type==="page"&&r(s))return s;if(s.type==="menu"){const a=n(s.children);if(a)return a}}return null}return n(pE)}function up(r,n){if(typeof n.content=="string")return{type:"page",title:n.title,content:n.content,href:di.joinUrlPaths(Is,...r,nf(n.title))};const t=r.concat([nf(n.title)]);return{type:"menu",title:n.title,children:n.content.map(s=>({...up(t,s),section:n.title}))}}function nf(r){return di.generatePathSegment(r,new vf)}function bE(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(r=>r.trim()).join(`
`)}]}]}export{IE as A,vf as B,yE as C,wE as D,xE as E,XD as F,on as G,lr as H,$f as I,Pf as J,kE as K,UE as L,BE as M,OE as N,A as O,TE as P,ys as Q,oi as R,cf as S,AE as T,ni as U,X1 as V,Nt as _,EE as a,Uo as b,Wn as c,gn as d,ut as e,un as f,of as g,Wt as h,Xn as i,Hn as j,Zn as k,iE as l,be as m,PE as n,SE as o,pE as p,$E as q,ME as r,cn as s,Ro as t,di as u,LE as v,cE as w,RE as x,NE as y,CE as z};
