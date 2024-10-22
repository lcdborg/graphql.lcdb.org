var IF=Object.defineProperty;var Bl=r=>{throw TypeError(r)};var OF=(r,n,t)=>n in r?IF(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t;var ye=(r,n,t)=>OF(r,typeof n!="symbol"?n+"":n,t),NF=(r,n,t)=>n.has(r)||Bl("Cannot "+t);var Pl=(r,n,t)=>n.has(r)?Bl("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(r):n.set(r,t);var ui=(r,n,t)=>(NF(r,n,"access private method"),t);import{s as Ne,q as sn,l as De,d as H,I as $l,t as Ba,j as Pa,o as $a,n as Ke,a2 as Fi,E as nt,v as wf,e as Re,f as xe,g as qe,ae as Ns,F as tt,G as rt,H as it,k as bn,m as It,b as Ga,c as Va,ah as wF,ai as CF,ak as Gl,K as RF}from"./scheduler.6x_t8-M_.js";import{S as Le,i as Ue,t as ee,g as Ot,b as oe,e as Nt,c as Wt,a as gr,m as Qt,d as Jt}from"./index.DNIXW-5M.js";import{b as xF}from"./control.1H-av9i2.js";function lt(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function Cf(r,n){const t={},o={},s={$$scope:1};let a=r.length;for(;a--;){const c=r[a],f=n[a];if(f){for(const p in c)p in f||(o[p]=1);for(const p in f)s[p]||(t[p]=f[p],s[p]=1);r[a]=f}else for(const p in c)s[p]=1}for(const c in o)c in t||(t[c]=void 0);return t}function xA(r){return typeof r=="object"&&r!==null?r:{}}function Vl(r){let n,t,o;var s=r[1][r[0].type];function a(c,f){return{props:{token:c[0],options:c[2],renderers:c[1],$$slots:{default:[LF]},$$scope:{ctx:c}}}}return s&&(n=$l(s,a(r))),{c(){n&&Wt(n.$$.fragment),t=sn()},l(c){n&&gr(n.$$.fragment,c),t=sn()},m(c,f){n&&Qt(n,c,f),De(c,t,f),o=!0},p(c,f){if(f&3&&s!==(s=c[1][c[0].type])){if(n){Ot();const p=n;oe(p.$$.fragment,1,0,()=>{Jt(p,1)}),Nt()}s?(n=$l(s,a(c)),Wt(n.$$.fragment),ee(n.$$.fragment,1),Qt(n,t.parentNode,t)):n=null}else if(s){const p={};f&1&&(p.token=c[0]),f&4&&(p.options=c[2]),f&2&&(p.renderers=c[1]),f&15&&(p.$$scope={dirty:f,ctx:c}),n.$set(p)}},i(c){o||(n&&ee(n.$$.fragment,c),o=!0)},o(c){n&&oe(n.$$.fragment,c),o=!1},d(c){c&&H(t),n&&Jt(n,c)}}}function kF(r){let n=r[0].raw+"",t;return{c(){t=Ba(n)},l(o){t=Pa(o,n)},m(o,s){De(o,t,s)},p(o,s){s&1&&n!==(n=o[0].raw+"")&&$a(t,n)},i:Ke,o:Ke,d(o){o&&H(t)}}}function MF(r){let n,t;return n=new $s({props:{tokens:r[0].tokens,renderers:r[1],options:r[2]}}),{c(){Wt(n.$$.fragment)},l(o){gr(n.$$.fragment,o)},m(o,s){Qt(n,o,s),t=!0},p(o,s){const a={};s&1&&(a.tokens=o[0].tokens),s&2&&(a.renderers=o[1]),s&4&&(a.options=o[2]),n.$set(a)},i(o){t||(ee(n.$$.fragment,o),t=!0)},o(o){oe(n.$$.fragment,o),t=!1},d(o){Jt(n,o)}}}function LF(r){let n,t,o,s;const a=[MF,kF],c=[];function f(p,g){return"tokens"in p[0]&&p[0].tokens?0:1}return n=f(r),t=c[n]=a[n](r),{c(){t.c(),o=sn()},l(p){t.l(p),o=sn()},m(p,g){c[n].m(p,g),De(p,o,g),s=!0},p(p,g){let b=n;n=f(p),n===b?c[n].p(p,g):(Ot(),oe(c[b],1,1,()=>{c[b]=null}),Nt(),t=c[n],t?t.p(p,g):(t=c[n]=a[n](p),t.c()),ee(t,1),t.m(o.parentNode,o))},i(p){s||(ee(t),s=!0)},o(p){oe(t),s=!1},d(p){p&&H(o),c[n].d(p)}}}function UF(r){let n,t,o=r[1][r[0].type]&&Vl(r);return{c(){o&&o.c(),n=sn()},l(s){o&&o.l(s),n=sn()},m(s,a){o&&o.m(s,a),De(s,n,a),t=!0},p(s,[a]){s[1][s[0].type]?o?(o.p(s,a),a&3&&ee(o,1)):(o=Vl(s),o.c(),ee(o,1),o.m(n.parentNode,n)):o&&(Ot(),oe(o,1,1,()=>{o=null}),Nt())},i(s){t||(ee(o),t=!0)},o(s){oe(o),t=!1},d(s){s&&H(n),o&&o.d(s)}}}function BF(r,n,t){let{token:o}=n,{renderers:s}=n,{options:a}=n;return r.$$set=c=>{"token"in c&&t(0,o=c.token),"renderers"in c&&t(1,s=c.renderers),"options"in c&&t(2,a=c.options)},[o,s,a]}class Rf extends Le{constructor(n){super(),Ue(this,n,BF,UF,Ne,{token:0,renderers:1,options:2})}}function jl(r,n,t){const o=r.slice();return o[3]=n[t],o}function ql(r){let n,t,o=lt(r[0]),s=[];for(let c=0;c<o.length;c+=1)s[c]=zl(jl(r,o,c));const a=c=>oe(s[c],1,1,()=>{s[c]=null});return{c(){for(let c=0;c<s.length;c+=1)s[c].c();n=sn()},l(c){for(let f=0;f<s.length;f+=1)s[f].l(c);n=sn()},m(c,f){for(let p=0;p<s.length;p+=1)s[p]&&s[p].m(c,f);De(c,n,f),t=!0},p(c,f){if(f&7){o=lt(c[0]);let p;for(p=0;p<o.length;p+=1){const g=jl(c,o,p);s[p]?(s[p].p(g,f),ee(s[p],1)):(s[p]=zl(g),s[p].c(),ee(s[p],1),s[p].m(n.parentNode,n))}for(Ot(),p=o.length;p<s.length;p+=1)a(p);Nt()}},i(c){if(!t){for(let f=0;f<o.length;f+=1)ee(s[f]);t=!0}},o(c){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)oe(s[f]);t=!1},d(c){c&&H(n),Fi(s,c)}}}function zl(r){let n,t;return n=new Rf({props:{token:r[3],renderers:r[1],options:r[2]}}),{c(){Wt(n.$$.fragment)},l(o){gr(n.$$.fragment,o)},m(o,s){Qt(n,o,s),t=!0},p(o,s){const a={};s&1&&(a.token=o[3]),s&2&&(a.renderers=o[1]),s&4&&(a.options=o[2]),n.$set(a)},i(o){t||(ee(n.$$.fragment,o),t=!0)},o(o){oe(n.$$.fragment,o),t=!1},d(o){Jt(n,o)}}}function PF(r){let n,t,o=r[0]&&ql(r);return{c(){o&&o.c(),n=sn()},l(s){o&&o.l(s),n=sn()},m(s,a){o&&o.m(s,a),De(s,n,a),t=!0},p(s,[a]){s[0]?o?(o.p(s,a),a&1&&ee(o,1)):(o=ql(s),o.c(),ee(o,1),o.m(n.parentNode,n)):o&&(Ot(),oe(o,1,1,()=>{o=null}),Nt())},i(s){t||(ee(o),t=!0)},o(s){oe(o),t=!1},d(s){s&&H(n),o&&o.d(s)}}}function $F(r,n,t){let{tokens:o}=n,{renderers:s}=n,{options:a}=n;return r.$$set=c=>{"tokens"in c&&t(0,o=c.tokens),"renderers"in c&&t(1,s=c.renderers),"options"in c&&t(2,a=c.options)},[o,s,a]}class $s extends Le{constructor(n){super(),Ue(this,n,$F,PF,Ne,{tokens:0,renderers:1,options:2})}}function Di(...r){return`/${r.flatMap(n=>n.split("/")).filter(n=>!!n).join("/")}`}function Ei(r){return r.startsWith("/")||r.startsWith("#")}function xf(r,n){return n.slug(r).replace(/--+/g,"-")}function Fa(r){let n,t;const o=r[5].default,s=nt(o,r,r[4],null);let a=[{id:r[1]}],c={};for(let f=0;f<a.length;f+=1)c=wf(c,a[f]);return{c(){n=Re(`h${r[0].depth}`),s&&s.c(),this.h()},l(f){n=xe(f,(`h${r[0].depth}`||"null").toUpperCase(),{id:!0});var p=qe(n);s&&s.l(p),p.forEach(H),this.h()},h(){Ns(`h${r[0].depth}`)(n,c)},m(f,p){De(f,n,p),s&&s.m(n,null),t=!0},p(f,p){s&&s.p&&(!t||p&16)&&tt(s,o,f,f[4],t?it(o,f[4],p,null):rt(f[4]),null),Ns(`h${f[0].depth}`)(n,c=Cf(a,[(!t||p&2)&&{id:f[1]}]))},i(f){t||(ee(s,f),t=!0)},o(f){oe(s,f),t=!1},d(f){f&&H(n),s&&s.d(f)}}}function GF(r){let n=`h${r[0].depth}`,t,o,s=`h${r[0].depth}`&&Fa(r);return{c(){s&&s.c(),t=sn()},l(a){s&&s.l(a),t=sn()},m(a,c){s&&s.m(a,c),De(a,t,c),o=!0},p(a,[c]){`h${a[0].depth}`?n?Ne(n,`h${a[0].depth}`)?(s.d(1),s=Fa(a),n=`h${a[0].depth}`,s.c(),s.m(t.parentNode,t)):s.p(a,c):(s=Fa(a),n=`h${a[0].depth}`,s.c(),s.m(t.parentNode,t)):n&&(s.d(1),s=null,n=`h${a[0].depth}`)},i(a){o||(ee(s,a),o=!0)},o(a){oe(s,a),o=!1},d(a){a&&H(t),s&&s.d(a)}}}function VF(r,n,t){let{$$slots:o={},$$scope:s}=n,{token:a}=n,{options:c}=n;const f=void 0;let p;return r.$$set=g=>{"token"in g&&t(0,a=g.token),"options"in g&&t(2,c=g.options),"$$scope"in g&&t(4,s=g.$$scope)},r.$$.update=()=>{r.$$.dirty&5&&t(1,p=xf(a.text,c.slugger))},[a,p,c,f,s,o]}class jF extends Le{constructor(n){super(),Ue(this,n,VF,GF,Ne,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function qF(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Re("blockquote"),s&&s.c()},l(a){n=xe(a,"BLOCKQUOTE",{});var c=qe(n);s&&s.l(c),c.forEach(H)},m(a,c){De(a,n,c),s&&s.m(n,null),t=!0},p(a,[c]){s&&s.p&&(!t||c&8)&&tt(s,o,a,a[3],t?it(o,a[3],c,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&H(n),s&&s.d(a)}}}function zF(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,c=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[a,c,f,s,o]}class YF extends Le{constructor(n){super(),Ue(this,n,zF,qF,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Yl(r,n,t){const o=r.slice();return o[4]=n[t],o}function Wl(r){let n,t;return n=new Rf({props:{token:{...r[4]},options:r[1],renderers:r[2]}}),{c(){Wt(n.$$.fragment)},l(o){gr(n.$$.fragment,o)},m(o,s){Qt(n,o,s),t=!0},p(o,s){const a={};s&1&&(a.token={...o[4]}),s&2&&(a.options=o[1]),s&4&&(a.renderers=o[2]),n.$set(a)},i(o){t||(ee(n.$$.fragment,o),t=!0)},o(o){oe(n.$$.fragment,o),t=!1},d(o){Jt(n,o)}}}function Da(r){let n,t,o,s=lt(r[0].items),a=[];for(let g=0;g<s.length;g+=1)a[g]=Wl(Yl(r,s,g));const c=g=>oe(a[g],1,1,()=>{a[g]=null});let f=[{start:t=r[0].start||1}],p={};for(let g=0;g<f.length;g+=1)p=wf(p,f[g]);return{c(){n=Re(r[3]);for(let g=0;g<a.length;g+=1)a[g].c();this.h()},l(g){n=xe(g,(r[3]||"null").toUpperCase(),{start:!0});var b=qe(n);for(let F=0;F<a.length;F+=1)a[F].l(b);b.forEach(H),this.h()},h(){Ns(r[3])(n,p)},m(g,b){De(g,n,b);for(let F=0;F<a.length;F+=1)a[F]&&a[F].m(n,null);o=!0},p(g,b){if(b&7){s=lt(g[0].items);let F;for(F=0;F<s.length;F+=1){const w=Yl(g,s,F);a[F]?(a[F].p(w,b),ee(a[F],1)):(a[F]=Wl(w),a[F].c(),ee(a[F],1),a[F].m(n,null))}for(Ot(),F=s.length;F<a.length;F+=1)c(F);Nt()}Ns(g[3])(n,p=Cf(f,[(!o||b&1&&t!==(t=g[0].start||1))&&{start:t}]))},i(g){if(!o){for(let b=0;b<s.length;b+=1)ee(a[b]);o=!0}},o(g){a=a.filter(Boolean);for(let b=0;b<a.length;b+=1)oe(a[b]);o=!1},d(g){g&&H(n),Fi(a,g)}}}function WF(r){let n=r[3],t,o=r[3]&&Da(r);return{c(){o&&o.c(),t=sn()},l(s){o&&o.l(s),t=sn()},m(s,a){o&&o.m(s,a),De(s,t,a)},p(s,[a]){s[3]?n?Ne(n,s[3])?(o.d(1),o=Da(s),n=s[3],o.c(),o.m(t.parentNode,t)):o.p(s,a):(o=Da(s),n=s[3],o.c(),o.m(t.parentNode,t)):n&&(o.d(1),o=null,n=s[3])},i:Ke,o(s){oe(o,s)},d(s){s&&H(t),o&&o.d(s)}}}function QF(r,n,t){let{token:o}=n,{options:s}=n,{renderers:a}=n,c;return r.$$set=f=>{"token"in f&&t(0,o=f.token),"options"in f&&t(1,s=f.options),"renderers"in f&&t(2,a=f.renderers)},r.$$.update=()=>{r.$$.dirty&1&&t(3,c=o.ordered?"ol":"ul")},[o,s,a,c]}class JF extends Le{constructor(n){super(),Ue(this,n,QF,WF,Ne,{token:0,options:1,renderers:2})}}function HF(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Re("li"),s&&s.c()},l(a){n=xe(a,"LI",{});var c=qe(n);s&&s.l(c),c.forEach(H)},m(a,c){De(a,n,c),s&&s.m(n,null),t=!0},p(a,[c]){s&&s.p&&(!t||c&8)&&tt(s,o,a,a[3],t?it(o,a[3],c,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&H(n),s&&s.d(a)}}}function XF(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,c=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[a,c,f,s,o]}class ZF extends Le{constructor(n){super(),Ue(this,n,XF,HF,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function KF(r){let n;return{c(){n=Re("br")},l(t){n=xe(t,"BR",{})},m(t,o){De(t,n,o)},p:Ke,i:Ke,o:Ke,d(t){t&&H(n)}}}function eD(r,n,t){return[void 0,void 0,void 0]}class nD extends Le{constructor(n){super(),Ue(this,n,eD,KF,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function tD(r){let n,t,o=r[0].text+"",s,a;return{c(){n=Re("pre"),t=Re("code"),s=Ba(o),this.h()},l(c){n=xe(c,"PRE",{});var f=qe(n);t=xe(f,"CODE",{class:!0});var p=qe(t);s=Pa(p,o),p.forEach(H),f.forEach(H),this.h()},h(){bn(t,"class",a=`lang-${r[0].lang}`)},m(c,f){De(c,n,f),It(n,t),It(t,s)},p(c,[f]){f&1&&o!==(o=c[0].text+"")&&$a(s,o),f&1&&a!==(a=`lang-${c[0].lang}`)&&bn(t,"class",a)},i:Ke,o:Ke,d(c){c&&H(n)}}}function rD(r,n,t){let{token:o}=n;const s=void 0,a=void 0;return r.$$set=c=>{"token"in c&&t(0,o=c.token)},[o,s,a]}class iD extends Le{constructor(n){super(),Ue(this,n,rD,tD,Ne,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function sD(r){let n,t=r[0].raw.slice(1,r[0].raw.length-1)+"",o;return{c(){n=Re("code"),o=Ba(t)},l(s){n=xe(s,"CODE",{});var a=qe(n);o=Pa(a,t),a.forEach(H)},m(s,a){De(s,n,a),It(n,o)},p(s,[a]){a&1&&t!==(t=s[0].raw.slice(1,s[0].raw.length-1)+"")&&$a(o,t)},i:Ke,o:Ke,d(s){s&&H(n)}}}function oD(r,n,t){let{token:o}=n;const s=void 0,a=void 0;return r.$$set=c=>{"token"in c&&t(0,o=c.token)},[o,s,a]}class aD extends Le{constructor(n){super(),Ue(this,n,oD,sD,Ne,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Ql(r,n,t){const o=r.slice();return o[3]=n[t],o}function Jl(r,n,t){const o=r.slice();return o[6]=n[t],o}function Hl(r,n,t){const o=r.slice();return o[9]=n[t],o}function Xl(r){let n,t,o,s;return t=new $s({props:{tokens:r[9].tokens,options:r[1],renderers:r[2]}}),{c(){n=Re("th"),Wt(t.$$.fragment),o=Ga(),this.h()},l(a){n=xe(a,"TH",{scope:!0});var c=qe(n);gr(t.$$.fragment,c),o=Va(c),c.forEach(H),this.h()},h(){bn(n,"scope","col")},m(a,c){De(a,n,c),Qt(t,n,null),It(n,o),s=!0},p(a,c){const f={};c&1&&(f.tokens=a[9].tokens),c&2&&(f.options=a[1]),c&4&&(f.renderers=a[2]),t.$set(f)},i(a){s||(ee(t.$$.fragment,a),s=!0)},o(a){oe(t.$$.fragment,a),s=!1},d(a){a&&H(n),Jt(t)}}}function Zl(r){let n,t,o;return t=new $s({props:{tokens:r[6].tokens,options:r[1],renderers:r[2]}}),{c(){n=Re("td"),Wt(t.$$.fragment)},l(s){n=xe(s,"TD",{});var a=qe(n);gr(t.$$.fragment,a),a.forEach(H)},m(s,a){De(s,n,a),Qt(t,n,null),o=!0},p(s,a){const c={};a&1&&(c.tokens=s[6].tokens),a&2&&(c.options=s[1]),a&4&&(c.renderers=s[2]),t.$set(c)},i(s){o||(ee(t.$$.fragment,s),o=!0)},o(s){oe(t.$$.fragment,s),o=!1},d(s){s&&H(n),Jt(t)}}}function Kl(r){let n,t,o,s=lt(r[3]),a=[];for(let f=0;f<s.length;f+=1)a[f]=Zl(Jl(r,s,f));const c=f=>oe(a[f],1,1,()=>{a[f]=null});return{c(){n=Re("tr");for(let f=0;f<a.length;f+=1)a[f].c();t=Ga()},l(f){n=xe(f,"TR",{});var p=qe(n);for(let g=0;g<a.length;g+=1)a[g].l(p);t=Va(p),p.forEach(H)},m(f,p){De(f,n,p);for(let g=0;g<a.length;g+=1)a[g]&&a[g].m(n,null);It(n,t),o=!0},p(f,p){if(p&7){s=lt(f[3]);let g;for(g=0;g<s.length;g+=1){const b=Jl(f,s,g);a[g]?(a[g].p(b,p),ee(a[g],1)):(a[g]=Zl(b),a[g].c(),ee(a[g],1),a[g].m(n,t))}for(Ot(),g=s.length;g<a.length;g+=1)c(g);Nt()}},i(f){if(!o){for(let p=0;p<s.length;p+=1)ee(a[p]);o=!0}},o(f){a=a.filter(Boolean);for(let p=0;p<a.length;p+=1)oe(a[p]);o=!1},d(f){f&&H(n),Fi(a,f)}}}function uD(r){let n,t,o,s,a,c,f=lt(r[0].header),p=[];for(let S=0;S<f.length;S+=1)p[S]=Xl(Hl(r,f,S));const g=S=>oe(p[S],1,1,()=>{p[S]=null});let b=lt(r[0].rows),F=[];for(let S=0;S<b.length;S+=1)F[S]=Kl(Ql(r,b,S));const w=S=>oe(F[S],1,1,()=>{F[S]=null});return{c(){n=Re("table"),t=Re("thead"),o=Re("tr");for(let S=0;S<p.length;S+=1)p[S].c();s=Ga(),a=Re("tbody");for(let S=0;S<F.length;S+=1)F[S].c()},l(S){n=xe(S,"TABLE",{});var O=qe(n);t=xe(O,"THEAD",{});var L=qe(t);o=xe(L,"TR",{});var z=qe(o);for(let Te=0;Te<p.length;Te+=1)p[Te].l(z);z.forEach(H),L.forEach(H),s=Va(O),a=xe(O,"TBODY",{});var le=qe(a);for(let Te=0;Te<F.length;Te+=1)F[Te].l(le);le.forEach(H),O.forEach(H)},m(S,O){De(S,n,O),It(n,t),It(t,o);for(let L=0;L<p.length;L+=1)p[L]&&p[L].m(o,null);It(n,s),It(n,a);for(let L=0;L<F.length;L+=1)F[L]&&F[L].m(a,null);c=!0},p(S,[O]){if(O&7){f=lt(S[0].header);let L;for(L=0;L<f.length;L+=1){const z=Hl(S,f,L);p[L]?(p[L].p(z,O),ee(p[L],1)):(p[L]=Xl(z),p[L].c(),ee(p[L],1),p[L].m(o,null))}for(Ot(),L=f.length;L<p.length;L+=1)g(L);Nt()}if(O&7){b=lt(S[0].rows);let L;for(L=0;L<b.length;L+=1){const z=Ql(S,b,L);F[L]?(F[L].p(z,O),ee(F[L],1)):(F[L]=Kl(z),F[L].c(),ee(F[L],1),F[L].m(a,null))}for(Ot(),L=b.length;L<F.length;L+=1)w(L);Nt()}},i(S){if(!c){for(let O=0;O<f.length;O+=1)ee(p[O]);for(let O=0;O<b.length;O+=1)ee(F[O]);c=!0}},o(S){p=p.filter(Boolean);for(let O=0;O<p.length;O+=1)oe(p[O]);F=F.filter(Boolean);for(let O=0;O<F.length;O+=1)oe(F[O]);c=!1},d(S){S&&H(n),Fi(p,S),Fi(F,S)}}}function cD(r,n,t){let{token:o}=n,{options:s}=n,{renderers:a}=n;return r.$$set=c=>{"token"in c&&t(0,o=c.token),"options"in c&&t(1,s=c.options),"renderers"in c&&t(2,a=c.renderers)},[o,s,a]}class lD extends Le{constructor(n){super(),Ue(this,n,cD,uD,Ne,{token:0,options:1,renderers:2})}}function fD(r){let n,t=r[0].text+"",o;return{c(){n=new wF(!1),o=sn(),this.h()},l(s){n=CF(s,!1),o=sn(),this.h()},h(){n.a=o},m(s,a){n.m(t,s,a),De(s,o,a)},p(s,[a]){a&1&&t!==(t=s[0].text+"")&&n.p(t)},i:Ke,o:Ke,d(s){s&&(H(o),n.d())}}}function pD(r,n,t){let{token:o}=n;const s=void 0,a=void 0;return r.$$set=c=>{"token"in c&&t(0,o=c.token)},[o,s,a]}class _D extends Le{constructor(n){super(),Ue(this,n,pD,fD,Ne,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function dD(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Re("p"),s&&s.c()},l(a){n=xe(a,"P",{});var c=qe(n);s&&s.l(c),c.forEach(H)},m(a,c){De(a,n,c),s&&s.m(n,null),t=!0},p(a,[c]){s&&s.p&&(!t||c&8)&&tt(s,o,a,a[3],t?it(o,a[3],c,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&H(n),s&&s.d(a)}}}function hD(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,c=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[a,c,f,s,o]}class gD extends Le{constructor(n){super(),Ue(this,n,hD,dD,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function bD(r){let n,t,o,s;const a=r[4].default,c=nt(a,r,r[3],null);return{c(){n=Re("a"),c&&c.c(),this.h()},l(f){n=xe(f,"A",{href:!0,title:!0});var p=qe(n);c&&c.l(p),p.forEach(H),this.h()},h(){bn(n,"href",t=Ei(r[0].href)?Di(r[1].baseUrl,r[0].href):r[0].href),bn(n,"title",o=r[0].title)},m(f,p){De(f,n,p),c&&c.m(n,null),s=!0},p(f,[p]){c&&c.p&&(!s||p&8)&&tt(c,a,f,f[3],s?it(a,f[3],p,null):rt(f[3]),null),(!s||p&3&&t!==(t=Ei(f[0].href)?Di(f[1].baseUrl,f[0].href):f[0].href))&&bn(n,"href",t),(!s||p&1&&o!==(o=f[0].title))&&bn(n,"title",o)},i(f){s||(ee(c,f),s=!0)},o(f){oe(c,f),s=!1},d(f){f&&H(n),c&&c.d(f)}}}function mD(r,n,t){let{$$slots:o={},$$scope:s}=n,{token:a}=n,{options:c}=n;const f=void 0;return r.$$set=p=>{"token"in p&&t(0,a=p.token),"options"in p&&t(1,c=p.options),"$$scope"in p&&t(3,s=p.$$scope)},[a,c,f,s,o]}class FD extends Le{constructor(n){super(),Ue(this,n,mD,bD,Ne,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function DD(r){let n;const t=r[4].default,o=nt(t,r,r[3],null);return{c(){o&&o.c()},l(s){o&&o.l(s)},m(s,a){o&&o.m(s,a),n=!0},p(s,[a]){o&&o.p&&(!n||a&8)&&tt(o,t,s,s[3],n?it(t,s[3],a,null):rt(s[3]),null)},i(s){n||(ee(o,s),n=!0)},o(s){oe(o,s),n=!1},d(s){o&&o.d(s)}}}function ED(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,c=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[a,c,f,s,o]}class yD extends Le{constructor(n){super(),Ue(this,n,ED,DD,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function AD(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Re("dfn"),s&&s.c()},l(a){n=xe(a,"DFN",{});var c=qe(n);s&&s.l(c),c.forEach(H)},m(a,c){De(a,n,c),s&&s.m(n,null),t=!0},p(a,[c]){s&&s.p&&(!t||c&8)&&tt(s,o,a,a[3],t?it(o,a[3],c,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&H(n),s&&s.d(a)}}}function vD(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,c=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[a,c,f,s,o]}class SD extends Le{constructor(n){super(),Ue(this,n,vD,AD,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function TD(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Re("del"),s&&s.c()},l(a){n=xe(a,"DEL",{});var c=qe(n);s&&s.l(c),c.forEach(H)},m(a,c){De(a,n,c),s&&s.m(n,null),t=!0},p(a,[c]){s&&s.p&&(!t||c&8)&&tt(s,o,a,a[3],t?it(o,a[3],c,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&H(n),s&&s.d(a)}}}function ID(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,c=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[a,c,f,s,o]}class OD extends Le{constructor(n){super(),Ue(this,n,ID,TD,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function ND(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Re("em"),s&&s.c()},l(a){n=xe(a,"EM",{});var c=qe(n);s&&s.l(c),c.forEach(H)},m(a,c){De(a,n,c),s&&s.m(n,null),t=!0},p(a,[c]){s&&s.p&&(!t||c&8)&&tt(s,o,a,a[3],t?it(o,a[3],c,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&H(n),s&&s.d(a)}}}function wD(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,c=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[a,c,f,s,o]}class CD extends Le{constructor(n){super(),Ue(this,n,wD,ND,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function RD(r){let n;return{c(){n=Re("hr")},l(t){n=xe(t,"HR",{})},m(t,o){De(t,n,o)},p:Ke,i:Ke,o:Ke,d(t){t&&H(n)}}}function xD(r,n,t){return[void 0,void 0,void 0]}class kD extends Le{constructor(n){super(),Ue(this,n,xD,RD,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function MD(r){let n,t;const o=r[4].default,s=nt(o,r,r[3],null);return{c(){n=Re("strong"),s&&s.c()},l(a){n=xe(a,"STRONG",{});var c=qe(n);s&&s.l(c),c.forEach(H)},m(a,c){De(a,n,c),s&&s.m(n,null),t=!0},p(a,[c]){s&&s.p&&(!t||c&8)&&tt(s,o,a,a[3],t?it(o,a[3],c,null):rt(a[3]),null)},i(a){t||(ee(s,a),t=!0)},o(a){oe(s,a),t=!1},d(a){a&&H(n),s&&s.d(a)}}}function LD(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,c=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[a,c,f,s,o]}class UD extends Le{constructor(n){super(),Ue(this,n,LD,MD,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function BD(r){let n,t,o,s;return{c(){n=Re("img"),this.h()},l(a){n=xe(a,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){Gl(n.src,t=Ei(r[0].href)?Di(r[1].baseUrl,r[0].href):r[0].href)||bn(n,"src",t),bn(n,"title",o=r[0].title),bn(n,"alt",s=r[0].text),bn(n,"class","markdown-image svelte-z38cge")},m(a,c){De(a,n,c)},p(a,[c]){c&3&&!Gl(n.src,t=Ei(a[0].href)?Di(a[1].baseUrl,a[0].href):a[0].href)&&bn(n,"src",t),c&1&&o!==(o=a[0].title)&&bn(n,"title",o),c&1&&s!==(s=a[0].text)&&bn(n,"alt",s)},i:Ke,o:Ke,d(a){a&&H(n)}}}function PD(r,n,t){let{token:o}=n,{options:s}=n;const a=void 0;return r.$$set=c=>{"token"in c&&t(0,o=c.token),"options"in c&&t(1,s=c.options)},[o,s,a]}class $D extends Le{constructor(n){super(),Ue(this,n,PD,BD,Ne,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function GD(r){let n;const t=r[4].default,o=nt(t,r,r[3],null);return{c(){o&&o.c()},l(s){o&&o.l(s)},m(s,a){o&&o.m(s,a),n=!0},p(s,[a]){o&&o.p&&(!n||a&8)&&tt(o,t,s,s[3],n?it(t,s[3],a,null):rt(s[3]),null)},i(s){n||(ee(o,s),n=!0)},o(s){oe(o,s),n=!1},d(s){o&&o.d(s)}}}function VD(r,n,t){let{$$slots:o={},$$scope:s}=n;const a=void 0,c=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,s=p.$$scope)},[a,c,f,s,o]}class ef extends Le{constructor(n){super(),Ue(this,n,VD,GD,Ne,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}const jD=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,qD=Object.hasOwnProperty;class kf{constructor(){this.occurrences,this.reset()}slug(n,t){const o=this;let s=zD(n,t===!0);const a=s;for(;qD.call(o.occurrences,s);)o.occurrences[a]++,s=a+"-"+o.occurrences[a];return o.occurrences[s]=0,s}reset(){this.occurrences=Object.create(null)}}function zD(r,n){return typeof r!="string"?"":(n||(r=r.toLowerCase()),r.replace(jD,"").replace(/ /g,"-"))}function ja(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let br=ja();function Mf(r){br=r}const Lf=/[&<>"']/,YD=new RegExp(Lf.source,"g"),Uf=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,WD=new RegExp(Uf.source,"g"),QD={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},nf=r=>QD[r];function In(r,n){if(n){if(Lf.test(r))return r.replace(YD,nf)}else if(Uf.test(r))return r.replace(WD,nf);return r}const JD=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function HD(r){return r.replace(JD,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const XD=/(^|[^\[])\^/g;function Fe(r,n){let t=typeof r=="string"?r:r.source;n=n||"";const o={replace:(s,a)=>{let c=typeof a=="string"?a:a.source;return c=c.replace(XD,"$1"),t=t.replace(s,c),o},getRegex:()=>new RegExp(t,n)};return o}function tf(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const hi={exec:()=>null};function rf(r,n){const t=r.replace(/\|/g,(a,c,f)=>{let p=!1,g=c;for(;--g>=0&&f[g]==="\\";)p=!p;return p?"|":" |"}),o=t.split(/ \|/);let s=0;if(o[0].trim()||o.shift(),o.length>0&&!o[o.length-1].trim()&&o.pop(),n)if(o.length>n)o.splice(n);else for(;o.length<n;)o.push("");for(;s<o.length;s++)o[s]=o[s].trim().replace(/\\\|/g,"|");return o}function ci(r,n,t){const o=r.length;if(o===0)return"";let s=0;for(;s<o;){const a=r.charAt(o-s-1);if(a===n&&!t)s++;else if(a!==n&&t)s++;else break}return r.slice(0,o-s)}function ZD(r,n){if(r.indexOf(n[1])===-1)return-1;let t=0;for(let o=0;o<r.length;o++)if(r[o]==="\\")o++;else if(r[o]===n[0])t++;else if(r[o]===n[1]&&(t--,t<0))return o;return-1}function sf(r,n,t,o){const s=n.href,a=n.title?In(n.title):null,c=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){o.state.inLink=!0;const f={type:"link",raw:t,href:s,title:a,text:c,tokens:o.inlineTokens(c)};return o.state.inLink=!1,f}return{type:"image",raw:t,href:s,title:a,text:In(c)}}function KD(r,n){const t=r.match(/^(\s+)(?:```)/);if(t===null)return n;const o=t[1];return n.split(`
`).map(s=>{const a=s.match(/^\s+/);if(a===null)return s;const[c]=a;return c.length>=o.length?s.slice(o.length):s}).join(`
`)}class ws{constructor(n){ye(this,"options");ye(this,"rules");ye(this,"lexer");this.options=n||br}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const o=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?o:ci(o,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const o=t[0],s=KD(o,t[3]||"");return{type:"code",raw:o,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let o=t[2].trim();if(/#$/.test(o)){const s=ci(o,"#");(this.options.pedantic||!s||/ $/.test(s))&&(o=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:o,tokens:this.lexer.inline(o)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:ci(t[0],`
`)}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){let o=ci(t[0],`
`).split(`
`),s="",a="";const c=[];for(;o.length>0;){let f=!1;const p=[];let g;for(g=0;g<o.length;g++)if(/^ {0,3}>/.test(o[g]))p.push(o[g]),f=!0;else if(!f)p.push(o[g]);else break;o=o.slice(g);const b=p.join(`
`),F=b.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");s=s?`${s}
${b}`:b,a=a?`${a}
${F}`:F;const w=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(F,c,!0),this.lexer.state.top=w,o.length===0)break;const S=c[c.length-1];if((S==null?void 0:S.type)==="code")break;if((S==null?void 0:S.type)==="blockquote"){const O=S,L=O.raw+`
`+o.join(`
`),z=this.blockquote(L);c[c.length-1]=z,s=s.substring(0,s.length-O.raw.length)+z.raw,a=a.substring(0,a.length-O.text.length)+z.text;break}else if((S==null?void 0:S.type)==="list"){const O=S,L=O.raw+`
`+o.join(`
`),z=this.list(L);c[c.length-1]=z,s=s.substring(0,s.length-S.raw.length)+z.raw,a=a.substring(0,a.length-O.raw.length)+z.raw,o=L.substring(c[c.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:c,text:a}}}list(n){let t=this.rules.block.list.exec(n);if(t){let o=t[1].trim();const s=o.length>1,a={type:"list",raw:"",ordered:s,start:s?+o.slice(0,-1):"",loose:!1,items:[]};o=s?`\\d{1,9}\\${o.slice(-1)}`:`\\${o}`,this.options.pedantic&&(o=s?o:"[*+-]");const c=new RegExp(`^( {0,3}${o})((?:[	 ][^\\n]*)?(?:\\n|$))`);let f=!1;for(;n;){let p=!1,g="",b="";if(!(t=c.exec(n))||this.rules.block.hr.test(n))break;g=t[0],n=n.substring(g.length);let F=t[2].split(`
`,1)[0].replace(/^\t+/,le=>" ".repeat(3*le.length)),w=n.split(`
`,1)[0],S=!F.trim(),O=0;if(this.options.pedantic?(O=2,b=F.trimStart()):S?O=t[1].length+1:(O=t[2].search(/[^ ]/),O=O>4?1:O,b=F.slice(O),O+=t[1].length),S&&/^ *$/.test(w)&&(g+=w+`
`,n=n.substring(w.length+1),p=!0),!p){const le=new RegExp(`^ {0,${Math.min(3,O-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Te=new RegExp(`^ {0,${Math.min(3,O-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),ge=new RegExp(`^ {0,${Math.min(3,O-1)}}(?:\`\`\`|~~~)`),we=new RegExp(`^ {0,${Math.min(3,O-1)}}#`);for(;n;){const ke=n.split(`
`,1)[0];if(w=ke,this.options.pedantic&&(w=w.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),ge.test(w)||we.test(w)||le.test(w)||Te.test(n))break;if(w.search(/[^ ]/)>=O||!w.trim())b+=`
`+w.slice(O);else{if(S||F.search(/[^ ]/)>=4||ge.test(F)||we.test(F)||Te.test(F))break;b+=`
`+w}!S&&!w.trim()&&(S=!0),g+=ke+`
`,n=n.substring(ke.length+1),F=w.slice(O)}}a.loose||(f?a.loose=!0:/\n *\n *$/.test(g)&&(f=!0));let L=null,z;this.options.gfm&&(L=/^\[[ xX]\] /.exec(b),L&&(z=L[0]!=="[ ] ",b=b.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:g,task:!!L,checked:z,loose:!1,text:b,tokens:[]}),a.raw+=g}a.items[a.items.length-1].raw=a.items[a.items.length-1].raw.trimEnd(),a.items[a.items.length-1].text=a.items[a.items.length-1].text.trimEnd(),a.raw=a.raw.trimEnd();for(let p=0;p<a.items.length;p++)if(this.lexer.state.top=!1,a.items[p].tokens=this.lexer.blockTokens(a.items[p].text,[]),!a.loose){const g=a.items[p].tokens.filter(F=>F.type==="space"),b=g.length>0&&g.some(F=>/\n.*\n/.test(F.raw));a.loose=b}if(a.loose)for(let p=0;p<a.items.length;p++)a.items[p].loose=!0;return a}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const o=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:o,raw:t[0],href:s,title:a}}}table(n){const t=this.rules.block.table.exec(n);if(!t||!/[:|]/.test(t[2]))return;const o=rf(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),a=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],c={type:"table",raw:t[0],header:[],align:[],rows:[]};if(o.length===s.length){for(const f of s)/^ *-+: *$/.test(f)?c.align.push("right"):/^ *:-+: *$/.test(f)?c.align.push("center"):/^ *:-+ *$/.test(f)?c.align.push("left"):c.align.push(null);for(let f=0;f<o.length;f++)c.header.push({text:o[f],tokens:this.lexer.inline(o[f]),header:!0,align:c.align[f]});for(const f of a)c.rows.push(rf(f,c.header.length).map((p,g)=>({text:p,tokens:this.lexer.inline(p),header:!1,align:c.align[g]})));return c}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const o=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:o,tokens:this.lexer.inline(o)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:In(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const o=t[2].trim();if(!this.options.pedantic&&/^</.test(o)){if(!/>$/.test(o))return;const c=ci(o.slice(0,-1),"\\");if((o.length-c.length)%2===0)return}else{const c=ZD(t[2],"()");if(c>-1){const p=(t[0].indexOf("!")===0?5:4)+t[1].length+c;t[2]=t[2].substring(0,c),t[0]=t[0].substring(0,p).trim(),t[3]=""}}let s=t[2],a="";if(this.options.pedantic){const c=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);c&&(s=c[1],a=c[3])}else a=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(o)?s=s.slice(1):s=s.slice(1,-1)),sf(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(n,t){let o;if((o=this.rules.inline.reflink.exec(n))||(o=this.rules.inline.nolink.exec(n))){const s=(o[2]||o[1]).replace(/\s+/g," "),a=t[s.toLowerCase()];if(!a){const c=o[0].charAt(0);return{type:"text",raw:c,text:c}}return sf(o,a,o[0],this.lexer)}}emStrong(n,t,o=""){let s=this.rules.inline.emStrongLDelim.exec(n);if(!s||s[3]&&o.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!o||this.rules.inline.punctuation.exec(o)){const c=[...s[0]].length-1;let f,p,g=c,b=0;const F=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(F.lastIndex=0,t=t.slice(-1*n.length+c);(s=F.exec(t))!=null;){if(f=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!f)continue;if(p=[...f].length,s[3]||s[4]){g+=p;continue}else if((s[5]||s[6])&&c%3&&!((c+p)%3)){b+=p;continue}if(g-=p,g>0)continue;p=Math.min(p,p+g+b);const w=[...s[0]][0].length,S=n.slice(0,c+s.index+w+p);if(Math.min(c,p)%2){const L=S.slice(1,-1);return{type:"em",raw:S,text:L,tokens:this.lexer.inlineTokens(L)}}const O=S.slice(2,-2);return{type:"strong",raw:S,text:O,tokens:this.lexer.inlineTokens(O)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let o=t[2].replace(/\n/g," ");const s=/[^ ]/.test(o),a=/^ /.test(o)&&/ $/.test(o);return s&&a&&(o=o.substring(1,o.length-1)),o=In(o,!0),{type:"codespan",raw:t[0],text:o}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let o,s;return t[2]==="@"?(o=In(t[1]),s="mailto:"+o):(o=In(t[1]),s=o),{type:"link",raw:t[0],text:o,href:s,tokens:[{type:"text",raw:o,text:o}]}}}url(n){var o;let t;if(t=this.rules.inline.url.exec(n)){let s,a;if(t[2]==="@")s=In(t[0]),a="mailto:"+s;else{let c;do c=t[0],t[0]=((o=this.rules.inline._backpedal.exec(t[0]))==null?void 0:o[0])??"";while(c!==t[0]);s=In(t[0]),t[1]==="www."?a="http://"+t[0]:a=t[0]}return{type:"link",raw:t[0],text:s,href:a,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let o;return this.lexer.state.inRawBlock?o=t[0]:o=In(t[0]),{type:"text",raw:t[0],text:o}}}}const e1=/^(?: *(?:\n|$))+/,n1=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,t1=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Si=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,r1=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Bf=/(?:[*+-]|\d{1,9}[.)])/,Pf=Fe(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Bf).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),qa=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,i1=/^[^\n]+/,za=/(?!\s*\])(?:\\.|[^\[\]\\])+/,s1=Fe(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",za).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),o1=Fe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Bf).getRegex(),Gs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ya=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,a1=Fe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Ya).replace("tag",Gs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),$f=Fe(qa).replace("hr",Si).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Gs).getRegex(),u1=Fe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",$f).getRegex(),Wa={blockquote:u1,code:n1,def:s1,fences:t1,heading:r1,hr:Si,html:a1,lheading:Pf,list:o1,newline:e1,paragraph:$f,table:hi,text:i1},of=Fe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Si).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Gs).getRegex(),c1={...Wa,table:of,paragraph:Fe(qa).replace("hr",Si).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",of).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Gs).getRegex()},l1={...Wa,html:Fe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ya).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:hi,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Fe(qa).replace("hr",Si).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Pf).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Gf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,f1=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Vf=/^( {2,}|\\)\n(?!\s*$)/,p1=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ti="\\p{P}\\p{S}",_1=Fe(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Ti).getRegex(),d1=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,h1=Fe(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Ti).getRegex(),g1=Fe("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Ti).getRegex(),b1=Fe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Ti).getRegex(),m1=Fe(/\\([punct])/,"gu").replace(/punct/g,Ti).getRegex(),F1=Fe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),D1=Fe(Ya).replace("(?:-->|$)","-->").getRegex(),E1=Fe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",D1).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Cs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,y1=Fe(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Cs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),jf=Fe(/^!?\[(label)\]\[(ref)\]/).replace("label",Cs).replace("ref",za).getRegex(),qf=Fe(/^!?\[(ref)\](?:\[\])?/).replace("ref",za).getRegex(),A1=Fe("reflink|nolink(?!\\()","g").replace("reflink",jf).replace("nolink",qf).getRegex(),Qa={_backpedal:hi,anyPunctuation:m1,autolink:F1,blockSkip:d1,br:Vf,code:f1,del:hi,emStrongLDelim:h1,emStrongRDelimAst:g1,emStrongRDelimUnd:b1,escape:Gf,link:y1,nolink:qf,punctuation:_1,reflink:jf,reflinkSearch:A1,tag:E1,text:p1,url:hi},v1={...Qa,link:Fe(/^!?\[(label)\]\((.*?)\)/).replace("label",Cs).getRegex(),reflink:Fe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Cs).getRegex()},Ia={...Qa,escape:Fe(Gf).replace("])","~|])").getRegex(),url:Fe(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},S1={...Ia,br:Fe(Vf).replace("{2,}","*").getRegex(),text:Fe(Ia.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Es={normal:Wa,gfm:c1,pedantic:l1},li={normal:Qa,gfm:Ia,breaks:S1,pedantic:v1};class Xn{constructor(n){ye(this,"tokens");ye(this,"options");ye(this,"state");ye(this,"tokenizer");ye(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||br,this.options.tokenizer=this.options.tokenizer||new ws,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Es.normal,inline:li.normal};this.options.pedantic?(t.block=Es.pedantic,t.inline=li.pedantic):this.options.gfm&&(t.block=Es.gfm,this.options.breaks?t.inline=li.breaks:t.inline=li.gfm),this.tokenizer.rules=t}static get rules(){return{block:Es,inline:li}}static lex(n,t){return new Xn(t).lex(n)}static lexInline(n,t){return new Xn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const o=this.inlineQueue[t];this.inlineTokens(o.src,o.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],o=!1){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(f,p,g)=>p+"    ".repeat(g.length));let s,a,c;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(f=>(s=f.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(n)){n=n.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s);continue}if(s=this.tokenizer.fences(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+s.raw,a.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(c=n,this.options.extensions&&this.options.extensions.startBlock){let f=1/0;const p=n.slice(1);let g;this.options.extensions.startBlock.forEach(b=>{g=b.call({lexer:this},p),typeof g=="number"&&g>=0&&(f=Math.min(f,g))}),f<1/0&&f>=0&&(c=n.substring(0,f+1))}if(this.state.top&&(s=this.tokenizer.paragraph(c))){a=t[t.length-1],o&&(a==null?void 0:a.type)==="paragraph"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s),o=c.length!==n.length,n=n.substring(s.raw.length);continue}if(s=this.tokenizer.text(n)){n=n.substring(s.raw.length),a=t[t.length-1],a&&a.type==="text"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(s);continue}if(n){const f="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let o,s,a,c=n,f,p,g;if(this.tokens.links){const b=Object.keys(this.tokens.links);if(b.length>0)for(;(f=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)b.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(f=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)c=c.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(f=this.tokenizer.rules.inline.anyPunctuation.exec(c))!=null;)c=c.slice(0,f.index)+"++"+c.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(p||(g=""),p=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(b=>(o=b.call({lexer:this},n,t))?(n=n.substring(o.raw.length),t.push(o),!0):!1))){if(o=this.tokenizer.escape(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(n)){n=n.substring(o.raw.length),s=t[t.length-1],s&&o.type==="text"&&s.type==="text"?(s.raw+=o.raw,s.text+=o.text):t.push(o);continue}if(o=this.tokenizer.link(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(o.raw.length),s=t[t.length-1],s&&o.type==="text"&&s.type==="text"?(s.raw+=o.raw,s.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(n,c,g)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(n)){n=n.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(n))){n=n.substring(o.raw.length),t.push(o);continue}if(a=n,this.options.extensions&&this.options.extensions.startInline){let b=1/0;const F=n.slice(1);let w;this.options.extensions.startInline.forEach(S=>{w=S.call({lexer:this},F),typeof w=="number"&&w>=0&&(b=Math.min(b,w))}),b<1/0&&b>=0&&(a=n.substring(0,b+1))}if(o=this.tokenizer.inlineText(a)){n=n.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(g=o.raw.slice(-1)),p=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=o.raw,s.text+=o.text):t.push(o);continue}if(n){const b="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(b);break}else throw new Error(b)}}return t}}class Rs{constructor(n){ye(this,"options");ye(this,"parser");this.options=n||br}space(n){return""}code({text:n,lang:t,escaped:o}){var c;const s=(c=(t||"").match(/^\S*/))==null?void 0:c[0],a=n.replace(/\n$/,"")+`
`;return s?'<pre><code class="language-'+In(s)+'">'+(o?a:In(a,!0))+`</code></pre>
`:"<pre><code>"+(o?a:In(a,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:t}){return`<h${t}>${this.parser.parseInline(n)}</h${t}>
`}hr(n){return`<hr>
`}list(n){const t=n.ordered,o=n.start;let s="";for(let f=0;f<n.items.length;f++){const p=n.items[f];s+=this.listitem(p)}const a=t?"ol":"ul",c=t&&o!==1?' start="'+o+'"':"";return"<"+a+c+`>
`+s+"</"+a+`>
`}listitem(n){let t="";if(n.task){const o=this.checkbox({checked:!!n.checked});n.loose?n.tokens.length>0&&n.tokens[0].type==="paragraph"?(n.tokens[0].text=o+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=o+" "+n.tokens[0].tokens[0].text)):n.tokens.unshift({type:"text",raw:o+" ",text:o+" "}):t+=o+" "}return t+=this.parser.parse(n.tokens,!!n.loose),`<li>${t}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let t="",o="";for(let a=0;a<n.header.length;a++)o+=this.tablecell(n.header[a]);t+=this.tablerow({text:o});let s="";for(let a=0;a<n.rows.length;a++){const c=n.rows[a];o="";for(let f=0;f<c.length;f++)o+=this.tablecell(c[f]);s+=this.tablerow({text:o})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const t=this.parser.parseInline(n.tokens),o=n.header?"th":"td";return(n.align?`<${o} align="${n.align}">`:`<${o}>`)+t+`</${o}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${n}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:t,tokens:o}){const s=this.parser.parseInline(o),a=tf(n);if(a===null)return s;n=a;let c='<a href="'+n+'"';return t&&(c+=' title="'+t+'"'),c+=">"+s+"</a>",c}image({href:n,title:t,text:o}){const s=tf(n);if(s===null)return o;n=s;let a=`<img src="${n}" alt="${o}"`;return t&&(a+=` title="${t}"`),a+=">",a}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):n.text}}class Ja{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}}class ft{constructor(n){ye(this,"options");ye(this,"renderer");ye(this,"textRenderer");this.options=n||br,this.options.renderer=this.options.renderer||new Rs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ja}static parse(n,t){return new ft(t).parse(n)}static parseInline(n,t){return new ft(t).parseInline(n)}parse(n,t=!0){let o="";for(let s=0;s<n.length;s++){const a=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const f=a,p=this.options.extensions.renderers[f.type].call({parser:this},f);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type)){o+=p||"";continue}}const c=a;switch(c.type){case"space":{o+=this.renderer.space(c);continue}case"hr":{o+=this.renderer.hr(c);continue}case"heading":{o+=this.renderer.heading(c);continue}case"code":{o+=this.renderer.code(c);continue}case"table":{o+=this.renderer.table(c);continue}case"blockquote":{o+=this.renderer.blockquote(c);continue}case"list":{o+=this.renderer.list(c);continue}case"html":{o+=this.renderer.html(c);continue}case"paragraph":{o+=this.renderer.paragraph(c);continue}case"text":{let f=c,p=this.renderer.text(f);for(;s+1<n.length&&n[s+1].type==="text";)f=n[++s],p+=`
`+this.renderer.text(f);t?o+=this.renderer.paragraph({type:"paragraph",raw:p,text:p,tokens:[{type:"text",raw:p,text:p}]}):o+=p;continue}default:{const f='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return o}parseInline(n,t){t=t||this.renderer;let o="";for(let s=0;s<n.length;s++){const a=n[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const f=this.options.extensions.renderers[a.type].call({parser:this},a);if(f!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){o+=f||"";continue}}const c=a;switch(c.type){case"escape":{o+=t.text(c);break}case"html":{o+=t.html(c);break}case"link":{o+=t.link(c);break}case"image":{o+=t.image(c);break}case"strong":{o+=t.strong(c);break}case"em":{o+=t.em(c);break}case"codespan":{o+=t.codespan(c);break}case"br":{o+=t.br(c);break}case"del":{o+=t.del(c);break}case"text":{o+=t.text(c);break}default:{const f='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return o}}class gi{constructor(n){ye(this,"options");this.options=n||br}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}ye(gi,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var kt,zf,Oa,Yf;class T1{constructor(...n){Pl(this,kt);ye(this,"defaults",ja());ye(this,"options",this.setOptions);ye(this,"parse",ui(this,kt,Oa).call(this,Xn.lex,ft.parse));ye(this,"parseInline",ui(this,kt,Oa).call(this,Xn.lexInline,ft.parseInline));ye(this,"Parser",ft);ye(this,"Renderer",Rs);ye(this,"TextRenderer",Ja);ye(this,"Lexer",Xn);ye(this,"Tokenizer",ws);ye(this,"Hooks",gi);this.use(...n)}walkTokens(n,t){var s,a;let o=[];for(const c of n)switch(o=o.concat(t.call(this,c)),c.type){case"table":{const f=c;for(const p of f.header)o=o.concat(this.walkTokens(p.tokens,t));for(const p of f.rows)for(const g of p)o=o.concat(this.walkTokens(g.tokens,t));break}case"list":{const f=c;o=o.concat(this.walkTokens(f.items,t));break}default:{const f=c;(a=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&a[f.type]?this.defaults.extensions.childTokens[f.type].forEach(p=>{const g=f[p].flat(1/0);o=o.concat(this.walkTokens(g,t))}):f.tokens&&(o=o.concat(this.walkTokens(f.tokens,t)))}}return o}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(o=>{const s={...o};if(s.async=this.defaults.async||s.async||!1,o.extensions&&(o.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const c=t.renderers[a.name];c?t.renderers[a.name]=function(...f){let p=a.renderer.apply(this,f);return p===!1&&(p=c.apply(this,f)),p}:t.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const c=t[a.level];c?c.unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),s.extensions=t),o.renderer){const a=this.defaults.renderer||new Rs(this.defaults);for(const c in o.renderer){if(!(c in a))throw new Error(`renderer '${c}' does not exist`);if(["options","parser"].includes(c))continue;const f=c;let p=o.renderer[f];o.useNewRenderer||(p=ui(this,kt,zf).call(this,p,f,a));const g=a[f];a[f]=(...b)=>{let F=p.apply(a,b);return F===!1&&(F=g.apply(a,b)),F||""}}s.renderer=a}if(o.tokenizer){const a=this.defaults.tokenizer||new ws(this.defaults);for(const c in o.tokenizer){if(!(c in a))throw new Error(`tokenizer '${c}' does not exist`);if(["options","rules","lexer"].includes(c))continue;const f=c,p=o.tokenizer[f],g=a[f];a[f]=(...b)=>{let F=p.apply(a,b);return F===!1&&(F=g.apply(a,b)),F}}s.tokenizer=a}if(o.hooks){const a=this.defaults.hooks||new gi;for(const c in o.hooks){if(!(c in a))throw new Error(`hook '${c}' does not exist`);if(c==="options")continue;const f=c,p=o.hooks[f],g=a[f];gi.passThroughHooks.has(c)?a[f]=b=>{if(this.defaults.async)return Promise.resolve(p.call(a,b)).then(w=>g.call(a,w));const F=p.call(a,b);return g.call(a,F)}:a[f]=(...b)=>{let F=p.apply(a,b);return F===!1&&(F=g.apply(a,b)),F}}s.hooks=a}if(o.walkTokens){const a=this.defaults.walkTokens,c=o.walkTokens;s.walkTokens=function(f){let p=[];return p.push(c.call(this,f)),a&&(p=p.concat(a.call(this,f))),p}}this.defaults={...this.defaults,...s}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return Xn.lex(n,t??this.defaults)}parser(n,t){return ft.parse(n,t??this.defaults)}}kt=new WeakSet,zf=function(n,t,o){switch(t){case"heading":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,o.parser.parseInline(s.tokens),s.depth,HD(o.parser.parseInline(s.tokens,o.parser.textRenderer)))};case"code":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text,s.lang,!!s.escaped)};case"table":return function(s){if(!s.type||s.type!==t)return n.apply(this,arguments);let a="",c="";for(let p=0;p<s.header.length;p++)c+=this.tablecell({text:s.header[p].text,tokens:s.header[p].tokens,header:!0,align:s.align[p]});a+=this.tablerow({text:c});let f="";for(let p=0;p<s.rows.length;p++){const g=s.rows[p];c="";for(let b=0;b<g.length;b++)c+=this.tablecell({text:g[b].text,tokens:g[b].tokens,header:!1,align:s.align[b]});f+=this.tablerow({text:c})}return n.call(this,a,f)};case"blockquote":return function(s){if(!s.type||s.type!==t)return n.apply(this,arguments);const a=this.parser.parse(s.tokens);return n.call(this,a)};case"list":return function(s){if(!s.type||s.type!==t)return n.apply(this,arguments);const a=s.ordered,c=s.start,f=s.loose;let p="";for(let g=0;g<s.items.length;g++){const b=s.items[g],F=b.checked,w=b.task;let S="";if(b.task){const O=this.checkbox({checked:!!F});f?b.tokens.length>0&&b.tokens[0].type==="paragraph"?(b.tokens[0].text=O+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&b.tokens[0].tokens[0].type==="text"&&(b.tokens[0].tokens[0].text=O+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:O+" "}):S+=O+" "}S+=this.parser.parse(b.tokens,f),p+=this.listitem({type:"list_item",raw:S,text:S,task:w,checked:!!F,loose:f,tokens:b.tokens})}return n.call(this,p,a,c)};case"html":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text,s.block)};case"paragraph":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"escape":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text)};case"link":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.href,s.title,this.parser.parseInline(s.tokens))};case"image":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.href,s.title,s.text)};case"strong":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"em":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"codespan":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text)};case"del":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,this.parser.parseInline(s.tokens))};case"text":return function(s){return!s.type||s.type!==t?n.apply(this,arguments):n.call(this,s.text)}}return n},Oa=function(n,t){return(o,s)=>{const a={...s},c={...this.defaults,...a};this.defaults.async===!0&&a.async===!1&&(c.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),c.async=!0);const f=ui(this,kt,Yf).call(this,!!c.silent,!!c.async);if(typeof o>"u"||o===null)return f(new Error("marked(): input parameter is undefined or null"));if(typeof o!="string")return f(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(o)+", string expected"));if(c.hooks&&(c.hooks.options=c),c.async)return Promise.resolve(c.hooks?c.hooks.preprocess(o):o).then(p=>n(p,c)).then(p=>c.hooks?c.hooks.processAllTokens(p):p).then(p=>c.walkTokens?Promise.all(this.walkTokens(p,c.walkTokens)).then(()=>p):p).then(p=>t(p,c)).then(p=>c.hooks?c.hooks.postprocess(p):p).catch(f);try{c.hooks&&(o=c.hooks.preprocess(o));let p=n(o,c);c.hooks&&(p=c.hooks.processAllTokens(p)),c.walkTokens&&this.walkTokens(p,c.walkTokens);let g=t(p,c);return c.hooks&&(g=c.hooks.postprocess(g)),g}catch(p){return f(p)}}},Yf=function(n,t){return o=>{if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const s="<p>An error occurred:</p><pre>"+In(o.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(o);throw o}};const pr=new T1;function me(r,n){return pr.parse(r,n)}me.options=me.setOptions=function(r){return pr.setOptions(r),me.defaults=pr.defaults,Mf(me.defaults),me};me.getDefaults=ja;me.defaults=br;me.use=function(...r){return pr.use(...r),me.defaults=pr.defaults,Mf(me.defaults),me};me.walkTokens=function(r,n){return pr.walkTokens(r,n)};me.parseInline=pr.parseInline;me.Parser=ft;me.parser=ft.parse;me.Renderer=Rs;me.TextRenderer=Ja;me.Lexer=Xn;me.lexer=Xn.lex;me.Tokenizer=ws;me.Hooks=gi;me.parse=me;me.options;me.setOptions;me.use;me.walkTokens;me.parseInline;ft.parse;Xn.lex;function I1(r){return new Xn().lex(r)}const O1=()=>({heading:jF,blockquote:YF,list:JF,list_item:ZF,br:nD,code:iD,codespan:aD,table:lD,html:_D,paragraph:gD,link:FD,text:yD,def:SD,del:OD,em:CD,hr:kD,strong:UD,image:$D,space:ef,escape:ef}),N1=()=>({baseUrl:"/",slugger:new kf});function w1(){const r=console.warn;console.warn=n=>{n.includes("unknown prop")||n.includes("unexpected slot")||r(n)},RF(()=>{console.warn=r})}function C1(r){let n,t;return n=new $s({props:{tokens:r[0],renderers:r[1],options:r[2]}}),{c(){Wt(n.$$.fragment)},l(o){gr(n.$$.fragment,o)},m(o,s){Qt(n,o,s),t=!0},p(o,[s]){const a={};s&1&&(a.tokens=o[0]),s&2&&(a.renderers=o[1]),s&4&&(a.options=o[2]),n.$set(a)},i(o){t||(ee(n.$$.fragment,o),t=!0)},o(o){oe(n.$$.fragment,o),t=!1},d(o){Jt(n,o)}}}function R1(r,n,t){w1();let{source:o}=n,{options:s={}}=n,{renderers:a={}}=n,c,f,p;return r.$$set=g=>{"source"in g&&t(3,o=g.source),"options"in g&&t(4,s=g.options),"renderers"in g&&t(5,a=g.renderers)},r.$$.update=()=>{r.$$.dirty&56&&(t(0,c=I1(o)),t(1,f={...O1(),...a}),t(2,p={...N1(),...s}))},[c,f,p,o,s,a]}class kA extends Le{constructor(n){super(),Ue(this,n,R1,C1,Ne,{source:3,options:4,renderers:5})}}const Ii={joinUrlPaths:Di,isRelative:Ei,generatePathSegment:xf};var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function x1(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var xs={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */xs.exports;(function(r,n){(function(){var t,o="4.17.21",s=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",f="Invalid `variable` option passed into `_.template`",p="__lodash_hash_undefined__",g=500,b="__lodash_placeholder__",F=1,w=2,S=4,O=1,L=2,z=1,le=2,Te=4,ge=8,we=16,ke=32,on=64,en=128,ht=256,x=512,X=30,an="...",Mt=800,Zt=16,wi=1,Fr=2,Ci=3,ot=1/0,Vn=9007199254740991,Dr=17976931348623157e292,Kt=NaN,Nn=4294967295,T=Nn-1,V=Nn>>>1,B=[["ary",en],["bind",z],["bindKey",le],["curry",ge],["curryRight",we],["flip",x],["partial",ke],["partialRight",on],["rearg",ht]],$="[object Arguments]",_e="[object Array]",Be="[object AsyncFunction]",de="[object Boolean]",wn="[object Date]",Gr="[object DOMException]",Lt="[object Error]",nn="[object Function]",au="[object GeneratorFunction]",jn="[object Map]",Vr="[object Number]",qp="[object Null]",gt="[object Object]",uu="[object Promise]",zp="[object Proxy]",jr="[object RegExp]",qn="[object Set]",qr="[object String]",Ri="[object Symbol]",Yp="[object Undefined]",zr="[object WeakMap]",Wp="[object WeakSet]",Yr="[object ArrayBuffer]",Er="[object DataView]",Xs="[object Float32Array]",Zs="[object Float64Array]",Ks="[object Int8Array]",eo="[object Int16Array]",no="[object Int32Array]",to="[object Uint8Array]",ro="[object Uint8ClampedArray]",io="[object Uint16Array]",so="[object Uint32Array]",Qp=/\b__p \+= '';/g,Jp=/\b(__p \+=) '' \+/g,Hp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,cu=/&(?:amp|lt|gt|quot|#39);/g,lu=/[&<>"']/g,Xp=RegExp(cu.source),Zp=RegExp(lu.source),Kp=/<%-([\s\S]+?)%>/g,e_=/<%([\s\S]+?)%>/g,fu=/<%=([\s\S]+?)%>/g,n_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,t_=/^\w*$/,r_=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,oo=/[\\^$.*+?()[\]{}|]/g,i_=RegExp(oo.source),ao=/^\s+/,s_=/\s/,o_=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,a_=/\{\n\/\* \[wrapped with (.+)\] \*/,u_=/,? & /,c_=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,l_=/[()=,{}\[\]\/\s]/,f_=/\\(\\)?/g,p_=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,pu=/\w*$/,__=/^[-+]0x[0-9a-f]+$/i,d_=/^0b[01]+$/i,h_=/^\[object .+?Constructor\]$/,g_=/^0o[0-7]+$/i,b_=/^(?:0|[1-9]\d*)$/,m_=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,xi=/($^)/,F_=/['\n\r\u2028\u2029\\]/g,ki="\\ud800-\\udfff",D_="\\u0300-\\u036f",E_="\\ufe20-\\ufe2f",y_="\\u20d0-\\u20ff",_u=D_+E_+y_,du="\\u2700-\\u27bf",hu="a-z\\xdf-\\xf6\\xf8-\\xff",A_="\\xac\\xb1\\xd7\\xf7",v_="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",S_="\\u2000-\\u206f",T_=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",gu="A-Z\\xc0-\\xd6\\xd8-\\xde",bu="\\ufe0e\\ufe0f",mu=A_+v_+S_+T_,uo="['’]",I_="["+ki+"]",Fu="["+mu+"]",Mi="["+_u+"]",Du="\\d+",O_="["+du+"]",Eu="["+hu+"]",yu="[^"+ki+mu+Du+du+hu+gu+"]",co="\\ud83c[\\udffb-\\udfff]",N_="(?:"+Mi+"|"+co+")",Au="[^"+ki+"]",lo="(?:\\ud83c[\\udde6-\\uddff]){2}",fo="[\\ud800-\\udbff][\\udc00-\\udfff]",yr="["+gu+"]",vu="\\u200d",Su="(?:"+Eu+"|"+yu+")",w_="(?:"+yr+"|"+yu+")",Tu="(?:"+uo+"(?:d|ll|m|re|s|t|ve))?",Iu="(?:"+uo+"(?:D|LL|M|RE|S|T|VE))?",Ou=N_+"?",Nu="["+bu+"]?",C_="(?:"+vu+"(?:"+[Au,lo,fo].join("|")+")"+Nu+Ou+")*",R_="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",x_="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",wu=Nu+Ou+C_,k_="(?:"+[O_,lo,fo].join("|")+")"+wu,M_="(?:"+[Au+Mi+"?",Mi,lo,fo,I_].join("|")+")",L_=RegExp(uo,"g"),U_=RegExp(Mi,"g"),po=RegExp(co+"(?="+co+")|"+M_+wu,"g"),B_=RegExp([yr+"?"+Eu+"+"+Tu+"(?="+[Fu,yr,"$"].join("|")+")",w_+"+"+Iu+"(?="+[Fu,yr+Su,"$"].join("|")+")",yr+"?"+Su+"+"+Tu,yr+"+"+Iu,x_,R_,Du,k_].join("|"),"g"),P_=RegExp("["+vu+ki+_u+bu+"]"),$_=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,G_=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],V_=-1,Ie={};Ie[Xs]=Ie[Zs]=Ie[Ks]=Ie[eo]=Ie[no]=Ie[to]=Ie[ro]=Ie[io]=Ie[so]=!0,Ie[$]=Ie[_e]=Ie[Yr]=Ie[de]=Ie[Er]=Ie[wn]=Ie[Lt]=Ie[nn]=Ie[jn]=Ie[Vr]=Ie[gt]=Ie[jr]=Ie[qn]=Ie[qr]=Ie[zr]=!1;var ve={};ve[$]=ve[_e]=ve[Yr]=ve[Er]=ve[de]=ve[wn]=ve[Xs]=ve[Zs]=ve[Ks]=ve[eo]=ve[no]=ve[jn]=ve[Vr]=ve[gt]=ve[jr]=ve[qn]=ve[qr]=ve[Ri]=ve[to]=ve[ro]=ve[io]=ve[so]=!0,ve[Lt]=ve[nn]=ve[zr]=!1;var j_={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},q_={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},z_={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Y_={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},W_=parseFloat,Q_=parseInt,Cu=typeof fi=="object"&&fi&&fi.Object===Object&&fi,J_=typeof self=="object"&&self&&self.Object===Object&&self,Xe=Cu||J_||Function("return this")(),_o=n&&!n.nodeType&&n,er=_o&&!0&&r&&!r.nodeType&&r,Ru=er&&er.exports===_o,ho=Ru&&Cu.process,Cn=function(){try{var y=er&&er.require&&er.require("util").types;return y||ho&&ho.binding&&ho.binding("util")}catch{}}(),xu=Cn&&Cn.isArrayBuffer,ku=Cn&&Cn.isDate,Mu=Cn&&Cn.isMap,Lu=Cn&&Cn.isRegExp,Uu=Cn&&Cn.isSet,Bu=Cn&&Cn.isTypedArray;function Dn(y,I,v){switch(v.length){case 0:return y.call(I);case 1:return y.call(I,v[0]);case 2:return y.call(I,v[0],v[1]);case 3:return y.call(I,v[0],v[1],v[2])}return y.apply(I,v)}function H_(y,I,v,G){for(var Z=-1,pe=y==null?0:y.length;++Z<pe;){var Ye=y[Z];I(G,Ye,v(Ye),y)}return G}function Rn(y,I){for(var v=-1,G=y==null?0:y.length;++v<G&&I(y[v],v,y)!==!1;);return y}function X_(y,I){for(var v=y==null?0:y.length;v--&&I(y[v],v,y)!==!1;);return y}function Pu(y,I){for(var v=-1,G=y==null?0:y.length;++v<G;)if(!I(y[v],v,y))return!1;return!0}function Ut(y,I){for(var v=-1,G=y==null?0:y.length,Z=0,pe=[];++v<G;){var Ye=y[v];I(Ye,v,y)&&(pe[Z++]=Ye)}return pe}function Li(y,I){var v=y==null?0:y.length;return!!v&&Ar(y,I,0)>-1}function go(y,I,v){for(var G=-1,Z=y==null?0:y.length;++G<Z;)if(v(I,y[G]))return!0;return!1}function Oe(y,I){for(var v=-1,G=y==null?0:y.length,Z=Array(G);++v<G;)Z[v]=I(y[v],v,y);return Z}function Bt(y,I){for(var v=-1,G=I.length,Z=y.length;++v<G;)y[Z+v]=I[v];return y}function bo(y,I,v,G){var Z=-1,pe=y==null?0:y.length;for(G&&pe&&(v=y[++Z]);++Z<pe;)v=I(v,y[Z],Z,y);return v}function Z_(y,I,v,G){var Z=y==null?0:y.length;for(G&&Z&&(v=y[--Z]);Z--;)v=I(v,y[Z],Z,y);return v}function mo(y,I){for(var v=-1,G=y==null?0:y.length;++v<G;)if(I(y[v],v,y))return!0;return!1}var K_=Fo("length");function ed(y){return y.split("")}function nd(y){return y.match(c_)||[]}function $u(y,I,v){var G;return v(y,function(Z,pe,Ye){if(I(Z,pe,Ye))return G=pe,!1}),G}function Ui(y,I,v,G){for(var Z=y.length,pe=v+(G?1:-1);G?pe--:++pe<Z;)if(I(y[pe],pe,y))return pe;return-1}function Ar(y,I,v){return I===I?_d(y,I,v):Ui(y,Gu,v)}function td(y,I,v,G){for(var Z=v-1,pe=y.length;++Z<pe;)if(G(y[Z],I))return Z;return-1}function Gu(y){return y!==y}function Vu(y,I){var v=y==null?0:y.length;return v?Eo(y,I)/v:Kt}function Fo(y){return function(I){return I==null?t:I[y]}}function Do(y){return function(I){return y==null?t:y[I]}}function ju(y,I,v,G,Z){return Z(y,function(pe,Ye,Ee){v=G?(G=!1,pe):I(v,pe,Ye,Ee)}),v}function rd(y,I){var v=y.length;for(y.sort(I);v--;)y[v]=y[v].value;return y}function Eo(y,I){for(var v,G=-1,Z=y.length;++G<Z;){var pe=I(y[G]);pe!==t&&(v=v===t?pe:v+pe)}return v}function yo(y,I){for(var v=-1,G=Array(y);++v<y;)G[v]=I(v);return G}function id(y,I){return Oe(I,function(v){return[v,y[v]]})}function qu(y){return y&&y.slice(0,Qu(y)+1).replace(ao,"")}function En(y){return function(I){return y(I)}}function Ao(y,I){return Oe(I,function(v){return y[v]})}function Wr(y,I){return y.has(I)}function zu(y,I){for(var v=-1,G=y.length;++v<G&&Ar(I,y[v],0)>-1;);return v}function Yu(y,I){for(var v=y.length;v--&&Ar(I,y[v],0)>-1;);return v}function sd(y,I){for(var v=y.length,G=0;v--;)y[v]===I&&++G;return G}var od=Do(j_),ad=Do(q_);function ud(y){return"\\"+Y_[y]}function cd(y,I){return y==null?t:y[I]}function vr(y){return P_.test(y)}function ld(y){return $_.test(y)}function fd(y){for(var I,v=[];!(I=y.next()).done;)v.push(I.value);return v}function vo(y){var I=-1,v=Array(y.size);return y.forEach(function(G,Z){v[++I]=[Z,G]}),v}function Wu(y,I){return function(v){return y(I(v))}}function Pt(y,I){for(var v=-1,G=y.length,Z=0,pe=[];++v<G;){var Ye=y[v];(Ye===I||Ye===b)&&(y[v]=b,pe[Z++]=v)}return pe}function Bi(y){var I=-1,v=Array(y.size);return y.forEach(function(G){v[++I]=G}),v}function pd(y){var I=-1,v=Array(y.size);return y.forEach(function(G){v[++I]=[G,G]}),v}function _d(y,I,v){for(var G=v-1,Z=y.length;++G<Z;)if(y[G]===I)return G;return-1}function dd(y,I,v){for(var G=v+1;G--;)if(y[G]===I)return G;return G}function Sr(y){return vr(y)?gd(y):K_(y)}function zn(y){return vr(y)?bd(y):ed(y)}function Qu(y){for(var I=y.length;I--&&s_.test(y.charAt(I)););return I}var hd=Do(z_);function gd(y){for(var I=po.lastIndex=0;po.test(y);)++I;return I}function bd(y){return y.match(po)||[]}function md(y){return y.match(B_)||[]}var Fd=function y(I){I=I==null?Xe:Tr.defaults(Xe.Object(),I,Tr.pick(Xe,G_));var v=I.Array,G=I.Date,Z=I.Error,pe=I.Function,Ye=I.Math,Ee=I.Object,So=I.RegExp,Dd=I.String,xn=I.TypeError,Pi=v.prototype,Ed=pe.prototype,Ir=Ee.prototype,$i=I["__core-js_shared__"],Gi=Ed.toString,be=Ir.hasOwnProperty,yd=0,Ju=function(){var e=/[^.]+$/.exec($i&&$i.keys&&$i.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Vi=Ir.toString,Ad=Gi.call(Ee),vd=Xe._,Sd=So("^"+Gi.call(be).replace(oo,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ji=Ru?I.Buffer:t,$t=I.Symbol,qi=I.Uint8Array,Hu=ji?ji.allocUnsafe:t,zi=Wu(Ee.getPrototypeOf,Ee),Xu=Ee.create,Zu=Ir.propertyIsEnumerable,Yi=Pi.splice,Ku=$t?$t.isConcatSpreadable:t,Qr=$t?$t.iterator:t,nr=$t?$t.toStringTag:t,Wi=function(){try{var e=or(Ee,"defineProperty");return e({},"",{}),e}catch{}}(),Td=I.clearTimeout!==Xe.clearTimeout&&I.clearTimeout,Id=G&&G.now!==Xe.Date.now&&G.now,Od=I.setTimeout!==Xe.setTimeout&&I.setTimeout,Qi=Ye.ceil,Ji=Ye.floor,To=Ee.getOwnPropertySymbols,Nd=ji?ji.isBuffer:t,ec=I.isFinite,wd=Pi.join,Cd=Wu(Ee.keys,Ee),We=Ye.max,tn=Ye.min,Rd=G.now,xd=I.parseInt,nc=Ye.random,kd=Pi.reverse,Io=or(I,"DataView"),Jr=or(I,"Map"),Oo=or(I,"Promise"),Or=or(I,"Set"),Hr=or(I,"WeakMap"),Xr=or(Ee,"create"),Hi=Hr&&new Hr,Nr={},Md=ar(Io),Ld=ar(Jr),Ud=ar(Oo),Bd=ar(Or),Pd=ar(Hr),Xi=$t?$t.prototype:t,Zr=Xi?Xi.valueOf:t,tc=Xi?Xi.toString:t;function d(e){if(Me(e)&&!K(e)&&!(e instanceof ae)){if(e instanceof kn)return e;if(be.call(e,"__wrapped__"))return rl(e)}return new kn(e)}var wr=function(){function e(){}return function(i){if(!Ce(i))return{};if(Xu)return Xu(i);e.prototype=i;var u=new e;return e.prototype=t,u}}();function Zi(){}function kn(e,i){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=t}d.templateSettings={escape:Kp,evaluate:e_,interpolate:fu,variable:"",imports:{_:d}},d.prototype=Zi.prototype,d.prototype.constructor=d,kn.prototype=wr(Zi.prototype),kn.prototype.constructor=kn;function ae(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Nn,this.__views__=[]}function $d(){var e=new ae(this.__wrapped__);return e.__actions__=_n(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=_n(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=_n(this.__views__),e}function Gd(){if(this.__filtered__){var e=new ae(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Vd(){var e=this.__wrapped__.value(),i=this.__dir__,u=K(e),l=i<0,_=u?e.length:0,h=eg(0,_,this.__views__),m=h.start,D=h.end,A=D-m,N=l?D:m-1,C=this.__iteratees__,k=C.length,U=0,q=tn(A,this.__takeCount__);if(!u||!l&&_==A&&q==A)return Tc(e,this.__actions__);var Q=[];e:for(;A--&&U<q;){N+=i;for(var te=-1,J=e[N];++te<k;){var se=C[te],ce=se.iteratee,vn=se.type,ln=ce(J);if(vn==Fr)J=ln;else if(!ln){if(vn==wi)continue e;break e}}Q[U++]=J}return Q}ae.prototype=wr(Zi.prototype),ae.prototype.constructor=ae;function tr(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var l=e[i];this.set(l[0],l[1])}}function jd(){this.__data__=Xr?Xr(null):{},this.size=0}function qd(e){var i=this.has(e)&&delete this.__data__[e];return this.size-=i?1:0,i}function zd(e){var i=this.__data__;if(Xr){var u=i[e];return u===p?t:u}return be.call(i,e)?i[e]:t}function Yd(e){var i=this.__data__;return Xr?i[e]!==t:be.call(i,e)}function Wd(e,i){var u=this.__data__;return this.size+=this.has(e)?0:1,u[e]=Xr&&i===t?p:i,this}tr.prototype.clear=jd,tr.prototype.delete=qd,tr.prototype.get=zd,tr.prototype.has=Yd,tr.prototype.set=Wd;function bt(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var l=e[i];this.set(l[0],l[1])}}function Qd(){this.__data__=[],this.size=0}function Jd(e){var i=this.__data__,u=Ki(i,e);if(u<0)return!1;var l=i.length-1;return u==l?i.pop():Yi.call(i,u,1),--this.size,!0}function Hd(e){var i=this.__data__,u=Ki(i,e);return u<0?t:i[u][1]}function Xd(e){return Ki(this.__data__,e)>-1}function Zd(e,i){var u=this.__data__,l=Ki(u,e);return l<0?(++this.size,u.push([e,i])):u[l][1]=i,this}bt.prototype.clear=Qd,bt.prototype.delete=Jd,bt.prototype.get=Hd,bt.prototype.has=Xd,bt.prototype.set=Zd;function mt(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var l=e[i];this.set(l[0],l[1])}}function Kd(){this.size=0,this.__data__={hash:new tr,map:new(Jr||bt),string:new tr}}function eh(e){var i=fs(this,e).delete(e);return this.size-=i?1:0,i}function nh(e){return fs(this,e).get(e)}function th(e){return fs(this,e).has(e)}function rh(e,i){var u=fs(this,e),l=u.size;return u.set(e,i),this.size+=u.size==l?0:1,this}mt.prototype.clear=Kd,mt.prototype.delete=eh,mt.prototype.get=nh,mt.prototype.has=th,mt.prototype.set=rh;function rr(e){var i=-1,u=e==null?0:e.length;for(this.__data__=new mt;++i<u;)this.add(e[i])}function ih(e){return this.__data__.set(e,p),this}function sh(e){return this.__data__.has(e)}rr.prototype.add=rr.prototype.push=ih,rr.prototype.has=sh;function Yn(e){var i=this.__data__=new bt(e);this.size=i.size}function oh(){this.__data__=new bt,this.size=0}function ah(e){var i=this.__data__,u=i.delete(e);return this.size=i.size,u}function uh(e){return this.__data__.get(e)}function ch(e){return this.__data__.has(e)}function lh(e,i){var u=this.__data__;if(u instanceof bt){var l=u.__data__;if(!Jr||l.length<s-1)return l.push([e,i]),this.size=++u.size,this;u=this.__data__=new mt(l)}return u.set(e,i),this.size=u.size,this}Yn.prototype.clear=oh,Yn.prototype.delete=ah,Yn.prototype.get=uh,Yn.prototype.has=ch,Yn.prototype.set=lh;function rc(e,i){var u=K(e),l=!u&&ur(e),_=!u&&!l&&zt(e),h=!u&&!l&&!_&&kr(e),m=u||l||_||h,D=m?yo(e.length,Dd):[],A=D.length;for(var N in e)(i||be.call(e,N))&&!(m&&(N=="length"||_&&(N=="offset"||N=="parent")||h&&(N=="buffer"||N=="byteLength"||N=="byteOffset")||yt(N,A)))&&D.push(N);return D}function ic(e){var i=e.length;return i?e[Po(0,i-1)]:t}function fh(e,i){return ps(_n(e),ir(i,0,e.length))}function ph(e){return ps(_n(e))}function No(e,i,u){(u!==t&&!Wn(e[i],u)||u===t&&!(i in e))&&Ft(e,i,u)}function Kr(e,i,u){var l=e[i];(!(be.call(e,i)&&Wn(l,u))||u===t&&!(i in e))&&Ft(e,i,u)}function Ki(e,i){for(var u=e.length;u--;)if(Wn(e[u][0],i))return u;return-1}function _h(e,i,u,l){return Gt(e,function(_,h,m){i(l,_,u(_),m)}),l}function sc(e,i){return e&&ut(i,Qe(i),e)}function dh(e,i){return e&&ut(i,hn(i),e)}function Ft(e,i,u){i=="__proto__"&&Wi?Wi(e,i,{configurable:!0,enumerable:!0,value:u,writable:!0}):e[i]=u}function wo(e,i){for(var u=-1,l=i.length,_=v(l),h=e==null;++u<l;)_[u]=h?t:la(e,i[u]);return _}function ir(e,i,u){return e===e&&(u!==t&&(e=e<=u?e:u),i!==t&&(e=e>=i?e:i)),e}function Mn(e,i,u,l,_,h){var m,D=i&F,A=i&w,N=i&S;if(u&&(m=_?u(e,l,_,h):u(e)),m!==t)return m;if(!Ce(e))return e;var C=K(e);if(C){if(m=tg(e),!D)return _n(e,m)}else{var k=rn(e),U=k==nn||k==au;if(zt(e))return Nc(e,D);if(k==gt||k==$||U&&!_){if(m=A||U?{}:Qc(e),!D)return A?zh(e,dh(m,e)):qh(e,sc(m,e))}else{if(!ve[k])return _?e:{};m=rg(e,k,D)}}h||(h=new Yn);var q=h.get(e);if(q)return q;h.set(e,m),Al(e)?e.forEach(function(J){m.add(Mn(J,i,u,J,e,h))}):El(e)&&e.forEach(function(J,se){m.set(se,Mn(J,i,u,se,e,h))});var Q=N?A?Ho:Jo:A?hn:Qe,te=C?t:Q(e);return Rn(te||e,function(J,se){te&&(se=J,J=e[se]),Kr(m,se,Mn(J,i,u,se,e,h))}),m}function hh(e){var i=Qe(e);return function(u){return oc(u,e,i)}}function oc(e,i,u){var l=u.length;if(e==null)return!l;for(e=Ee(e);l--;){var _=u[l],h=i[_],m=e[_];if(m===t&&!(_ in e)||!h(m))return!1}return!0}function ac(e,i,u){if(typeof e!="function")throw new xn(c);return oi(function(){e.apply(t,u)},i)}function ei(e,i,u,l){var _=-1,h=Li,m=!0,D=e.length,A=[],N=i.length;if(!D)return A;u&&(i=Oe(i,En(u))),l?(h=go,m=!1):i.length>=s&&(h=Wr,m=!1,i=new rr(i));e:for(;++_<D;){var C=e[_],k=u==null?C:u(C);if(C=l||C!==0?C:0,m&&k===k){for(var U=N;U--;)if(i[U]===k)continue e;A.push(C)}else h(i,k,l)||A.push(C)}return A}var Gt=kc(at),uc=kc(Ro,!0);function gh(e,i){var u=!0;return Gt(e,function(l,_,h){return u=!!i(l,_,h),u}),u}function es(e,i,u){for(var l=-1,_=e.length;++l<_;){var h=e[l],m=i(h);if(m!=null&&(D===t?m===m&&!An(m):u(m,D)))var D=m,A=h}return A}function bh(e,i,u,l){var _=e.length;for(u=ne(u),u<0&&(u=-u>_?0:_+u),l=l===t||l>_?_:ne(l),l<0&&(l+=_),l=u>l?0:Sl(l);u<l;)e[u++]=i;return e}function cc(e,i){var u=[];return Gt(e,function(l,_,h){i(l,_,h)&&u.push(l)}),u}function Ze(e,i,u,l,_){var h=-1,m=e.length;for(u||(u=sg),_||(_=[]);++h<m;){var D=e[h];i>0&&u(D)?i>1?Ze(D,i-1,u,l,_):Bt(_,D):l||(_[_.length]=D)}return _}var Co=Mc(),lc=Mc(!0);function at(e,i){return e&&Co(e,i,Qe)}function Ro(e,i){return e&&lc(e,i,Qe)}function ns(e,i){return Ut(i,function(u){return At(e[u])})}function sr(e,i){i=jt(i,e);for(var u=0,l=i.length;e!=null&&u<l;)e=e[ct(i[u++])];return u&&u==l?e:t}function fc(e,i,u){var l=i(e);return K(e)?l:Bt(l,u(e))}function un(e){return e==null?e===t?Yp:qp:nr&&nr in Ee(e)?Kh(e):pg(e)}function xo(e,i){return e>i}function mh(e,i){return e!=null&&be.call(e,i)}function Fh(e,i){return e!=null&&i in Ee(e)}function Dh(e,i,u){return e>=tn(i,u)&&e<We(i,u)}function ko(e,i,u){for(var l=u?go:Li,_=e[0].length,h=e.length,m=h,D=v(h),A=1/0,N=[];m--;){var C=e[m];m&&i&&(C=Oe(C,En(i))),A=tn(C.length,A),D[m]=!u&&(i||_>=120&&C.length>=120)?new rr(m&&C):t}C=e[0];var k=-1,U=D[0];e:for(;++k<_&&N.length<A;){var q=C[k],Q=i?i(q):q;if(q=u||q!==0?q:0,!(U?Wr(U,Q):l(N,Q,u))){for(m=h;--m;){var te=D[m];if(!(te?Wr(te,Q):l(e[m],Q,u)))continue e}U&&U.push(Q),N.push(q)}}return N}function Eh(e,i,u,l){return at(e,function(_,h,m){i(l,u(_),h,m)}),l}function ni(e,i,u){i=jt(i,e),e=Zc(e,i);var l=e==null?e:e[ct(Un(i))];return l==null?t:Dn(l,e,u)}function pc(e){return Me(e)&&un(e)==$}function yh(e){return Me(e)&&un(e)==Yr}function Ah(e){return Me(e)&&un(e)==wn}function ti(e,i,u,l,_){return e===i?!0:e==null||i==null||!Me(e)&&!Me(i)?e!==e&&i!==i:vh(e,i,u,l,ti,_)}function vh(e,i,u,l,_,h){var m=K(e),D=K(i),A=m?_e:rn(e),N=D?_e:rn(i);A=A==$?gt:A,N=N==$?gt:N;var C=A==gt,k=N==gt,U=A==N;if(U&&zt(e)){if(!zt(i))return!1;m=!0,C=!1}if(U&&!C)return h||(h=new Yn),m||kr(e)?zc(e,i,u,l,_,h):Xh(e,i,A,u,l,_,h);if(!(u&O)){var q=C&&be.call(e,"__wrapped__"),Q=k&&be.call(i,"__wrapped__");if(q||Q){var te=q?e.value():e,J=Q?i.value():i;return h||(h=new Yn),_(te,J,u,l,h)}}return U?(h||(h=new Yn),Zh(e,i,u,l,_,h)):!1}function Sh(e){return Me(e)&&rn(e)==jn}function Mo(e,i,u,l){var _=u.length,h=_,m=!l;if(e==null)return!h;for(e=Ee(e);_--;){var D=u[_];if(m&&D[2]?D[1]!==e[D[0]]:!(D[0]in e))return!1}for(;++_<h;){D=u[_];var A=D[0],N=e[A],C=D[1];if(m&&D[2]){if(N===t&&!(A in e))return!1}else{var k=new Yn;if(l)var U=l(N,C,A,e,i,k);if(!(U===t?ti(C,N,O|L,l,k):U))return!1}}return!0}function _c(e){if(!Ce(e)||ag(e))return!1;var i=At(e)?Sd:h_;return i.test(ar(e))}function Th(e){return Me(e)&&un(e)==jr}function Ih(e){return Me(e)&&rn(e)==qn}function Oh(e){return Me(e)&&ms(e.length)&&!!Ie[un(e)]}function dc(e){return typeof e=="function"?e:e==null?gn:typeof e=="object"?K(e)?bc(e[0],e[1]):gc(e):Ll(e)}function Lo(e){if(!si(e))return Cd(e);var i=[];for(var u in Ee(e))be.call(e,u)&&u!="constructor"&&i.push(u);return i}function Nh(e){if(!Ce(e))return fg(e);var i=si(e),u=[];for(var l in e)l=="constructor"&&(i||!be.call(e,l))||u.push(l);return u}function Uo(e,i){return e<i}function hc(e,i){var u=-1,l=dn(e)?v(e.length):[];return Gt(e,function(_,h,m){l[++u]=i(_,h,m)}),l}function gc(e){var i=Zo(e);return i.length==1&&i[0][2]?Hc(i[0][0],i[0][1]):function(u){return u===e||Mo(u,e,i)}}function bc(e,i){return ea(e)&&Jc(i)?Hc(ct(e),i):function(u){var l=la(u,e);return l===t&&l===i?fa(u,e):ti(i,l,O|L)}}function ts(e,i,u,l,_){e!==i&&Co(i,function(h,m){if(_||(_=new Yn),Ce(h))wh(e,i,m,u,ts,l,_);else{var D=l?l(ta(e,m),h,m+"",e,i,_):t;D===t&&(D=h),No(e,m,D)}},hn)}function wh(e,i,u,l,_,h,m){var D=ta(e,u),A=ta(i,u),N=m.get(A);if(N){No(e,u,N);return}var C=h?h(D,A,u+"",e,i,m):t,k=C===t;if(k){var U=K(A),q=!U&&zt(A),Q=!U&&!q&&kr(A);C=A,U||q||Q?K(D)?C=D:Pe(D)?C=_n(D):q?(k=!1,C=Nc(A,!0)):Q?(k=!1,C=wc(A,!0)):C=[]:ai(A)||ur(A)?(C=D,ur(D)?C=Tl(D):(!Ce(D)||At(D))&&(C=Qc(A))):k=!1}k&&(m.set(A,C),_(C,A,l,h,m),m.delete(A)),No(e,u,C)}function mc(e,i){var u=e.length;if(u)return i+=i<0?u:0,yt(i,u)?e[i]:t}function Fc(e,i,u){i.length?i=Oe(i,function(h){return K(h)?function(m){return sr(m,h.length===1?h[0]:h)}:h}):i=[gn];var l=-1;i=Oe(i,En(W()));var _=hc(e,function(h,m,D){var A=Oe(i,function(N){return N(h)});return{criteria:A,index:++l,value:h}});return rd(_,function(h,m){return jh(h,m,u)})}function Ch(e,i){return Dc(e,i,function(u,l){return fa(e,l)})}function Dc(e,i,u){for(var l=-1,_=i.length,h={};++l<_;){var m=i[l],D=sr(e,m);u(D,m)&&ri(h,jt(m,e),D)}return h}function Rh(e){return function(i){return sr(i,e)}}function Bo(e,i,u,l){var _=l?td:Ar,h=-1,m=i.length,D=e;for(e===i&&(i=_n(i)),u&&(D=Oe(e,En(u)));++h<m;)for(var A=0,N=i[h],C=u?u(N):N;(A=_(D,C,A,l))>-1;)D!==e&&Yi.call(D,A,1),Yi.call(e,A,1);return e}function Ec(e,i){for(var u=e?i.length:0,l=u-1;u--;){var _=i[u];if(u==l||_!==h){var h=_;yt(_)?Yi.call(e,_,1):Vo(e,_)}}return e}function Po(e,i){return e+Ji(nc()*(i-e+1))}function xh(e,i,u,l){for(var _=-1,h=We(Qi((i-e)/(u||1)),0),m=v(h);h--;)m[l?h:++_]=e,e+=u;return m}function $o(e,i){var u="";if(!e||i<1||i>Vn)return u;do i%2&&(u+=e),i=Ji(i/2),i&&(e+=e);while(i);return u}function re(e,i){return ra(Xc(e,i,gn),e+"")}function kh(e){return ic(Mr(e))}function Mh(e,i){var u=Mr(e);return ps(u,ir(i,0,u.length))}function ri(e,i,u,l){if(!Ce(e))return e;i=jt(i,e);for(var _=-1,h=i.length,m=h-1,D=e;D!=null&&++_<h;){var A=ct(i[_]),N=u;if(A==="__proto__"||A==="constructor"||A==="prototype")return e;if(_!=m){var C=D[A];N=l?l(C,A,D):t,N===t&&(N=Ce(C)?C:yt(i[_+1])?[]:{})}Kr(D,A,N),D=D[A]}return e}var yc=Hi?function(e,i){return Hi.set(e,i),e}:gn,Lh=Wi?function(e,i){return Wi(e,"toString",{configurable:!0,enumerable:!1,value:_a(i),writable:!0})}:gn;function Uh(e){return ps(Mr(e))}function Ln(e,i,u){var l=-1,_=e.length;i<0&&(i=-i>_?0:_+i),u=u>_?_:u,u<0&&(u+=_),_=i>u?0:u-i>>>0,i>>>=0;for(var h=v(_);++l<_;)h[l]=e[l+i];return h}function Bh(e,i){var u;return Gt(e,function(l,_,h){return u=i(l,_,h),!u}),!!u}function rs(e,i,u){var l=0,_=e==null?l:e.length;if(typeof i=="number"&&i===i&&_<=V){for(;l<_;){var h=l+_>>>1,m=e[h];m!==null&&!An(m)&&(u?m<=i:m<i)?l=h+1:_=h}return _}return Go(e,i,gn,u)}function Go(e,i,u,l){var _=0,h=e==null?0:e.length;if(h===0)return 0;i=u(i);for(var m=i!==i,D=i===null,A=An(i),N=i===t;_<h;){var C=Ji((_+h)/2),k=u(e[C]),U=k!==t,q=k===null,Q=k===k,te=An(k);if(m)var J=l||Q;else N?J=Q&&(l||U):D?J=Q&&U&&(l||!q):A?J=Q&&U&&!q&&(l||!te):q||te?J=!1:J=l?k<=i:k<i;J?_=C+1:h=C}return tn(h,T)}function Ac(e,i){for(var u=-1,l=e.length,_=0,h=[];++u<l;){var m=e[u],D=i?i(m):m;if(!u||!Wn(D,A)){var A=D;h[_++]=m===0?0:m}}return h}function vc(e){return typeof e=="number"?e:An(e)?Kt:+e}function yn(e){if(typeof e=="string")return e;if(K(e))return Oe(e,yn)+"";if(An(e))return tc?tc.call(e):"";var i=e+"";return i=="0"&&1/e==-ot?"-0":i}function Vt(e,i,u){var l=-1,_=Li,h=e.length,m=!0,D=[],A=D;if(u)m=!1,_=go;else if(h>=s){var N=i?null:Jh(e);if(N)return Bi(N);m=!1,_=Wr,A=new rr}else A=i?[]:D;e:for(;++l<h;){var C=e[l],k=i?i(C):C;if(C=u||C!==0?C:0,m&&k===k){for(var U=A.length;U--;)if(A[U]===k)continue e;i&&A.push(k),D.push(C)}else _(A,k,u)||(A!==D&&A.push(k),D.push(C))}return D}function Vo(e,i){return i=jt(i,e),e=Zc(e,i),e==null||delete e[ct(Un(i))]}function Sc(e,i,u,l){return ri(e,i,u(sr(e,i)),l)}function is(e,i,u,l){for(var _=e.length,h=l?_:-1;(l?h--:++h<_)&&i(e[h],h,e););return u?Ln(e,l?0:h,l?h+1:_):Ln(e,l?h+1:0,l?_:h)}function Tc(e,i){var u=e;return u instanceof ae&&(u=u.value()),bo(i,function(l,_){return _.func.apply(_.thisArg,Bt([l],_.args))},u)}function jo(e,i,u){var l=e.length;if(l<2)return l?Vt(e[0]):[];for(var _=-1,h=v(l);++_<l;)for(var m=e[_],D=-1;++D<l;)D!=_&&(h[_]=ei(h[_]||m,e[D],i,u));return Vt(Ze(h,1),i,u)}function Ic(e,i,u){for(var l=-1,_=e.length,h=i.length,m={};++l<_;){var D=l<h?i[l]:t;u(m,e[l],D)}return m}function qo(e){return Pe(e)?e:[]}function zo(e){return typeof e=="function"?e:gn}function jt(e,i){return K(e)?e:ea(e,i)?[e]:tl(he(e))}var Ph=re;function qt(e,i,u){var l=e.length;return u=u===t?l:u,!i&&u>=l?e:Ln(e,i,u)}var Oc=Td||function(e){return Xe.clearTimeout(e)};function Nc(e,i){if(i)return e.slice();var u=e.length,l=Hu?Hu(u):new e.constructor(u);return e.copy(l),l}function Yo(e){var i=new e.constructor(e.byteLength);return new qi(i).set(new qi(e)),i}function $h(e,i){var u=i?Yo(e.buffer):e.buffer;return new e.constructor(u,e.byteOffset,e.byteLength)}function Gh(e){var i=new e.constructor(e.source,pu.exec(e));return i.lastIndex=e.lastIndex,i}function Vh(e){return Zr?Ee(Zr.call(e)):{}}function wc(e,i){var u=i?Yo(e.buffer):e.buffer;return new e.constructor(u,e.byteOffset,e.length)}function Cc(e,i){if(e!==i){var u=e!==t,l=e===null,_=e===e,h=An(e),m=i!==t,D=i===null,A=i===i,N=An(i);if(!D&&!N&&!h&&e>i||h&&m&&A&&!D&&!N||l&&m&&A||!u&&A||!_)return 1;if(!l&&!h&&!N&&e<i||N&&u&&_&&!l&&!h||D&&u&&_||!m&&_||!A)return-1}return 0}function jh(e,i,u){for(var l=-1,_=e.criteria,h=i.criteria,m=_.length,D=u.length;++l<m;){var A=Cc(_[l],h[l]);if(A){if(l>=D)return A;var N=u[l];return A*(N=="desc"?-1:1)}}return e.index-i.index}function Rc(e,i,u,l){for(var _=-1,h=e.length,m=u.length,D=-1,A=i.length,N=We(h-m,0),C=v(A+N),k=!l;++D<A;)C[D]=i[D];for(;++_<m;)(k||_<h)&&(C[u[_]]=e[_]);for(;N--;)C[D++]=e[_++];return C}function xc(e,i,u,l){for(var _=-1,h=e.length,m=-1,D=u.length,A=-1,N=i.length,C=We(h-D,0),k=v(C+N),U=!l;++_<C;)k[_]=e[_];for(var q=_;++A<N;)k[q+A]=i[A];for(;++m<D;)(U||_<h)&&(k[q+u[m]]=e[_++]);return k}function _n(e,i){var u=-1,l=e.length;for(i||(i=v(l));++u<l;)i[u]=e[u];return i}function ut(e,i,u,l){var _=!u;u||(u={});for(var h=-1,m=i.length;++h<m;){var D=i[h],A=l?l(u[D],e[D],D,u,e):t;A===t&&(A=e[D]),_?Ft(u,D,A):Kr(u,D,A)}return u}function qh(e,i){return ut(e,Ko(e),i)}function zh(e,i){return ut(e,Yc(e),i)}function ss(e,i){return function(u,l){var _=K(u)?H_:_h,h=i?i():{};return _(u,e,W(l,2),h)}}function Cr(e){return re(function(i,u){var l=-1,_=u.length,h=_>1?u[_-1]:t,m=_>2?u[2]:t;for(h=e.length>3&&typeof h=="function"?(_--,h):t,m&&cn(u[0],u[1],m)&&(h=_<3?t:h,_=1),i=Ee(i);++l<_;){var D=u[l];D&&e(i,D,l,h)}return i})}function kc(e,i){return function(u,l){if(u==null)return u;if(!dn(u))return e(u,l);for(var _=u.length,h=i?_:-1,m=Ee(u);(i?h--:++h<_)&&l(m[h],h,m)!==!1;);return u}}function Mc(e){return function(i,u,l){for(var _=-1,h=Ee(i),m=l(i),D=m.length;D--;){var A=m[e?D:++_];if(u(h[A],A,h)===!1)break}return i}}function Yh(e,i,u){var l=i&z,_=ii(e);function h(){var m=this&&this!==Xe&&this instanceof h?_:e;return m.apply(l?u:this,arguments)}return h}function Lc(e){return function(i){i=he(i);var u=vr(i)?zn(i):t,l=u?u[0]:i.charAt(0),_=u?qt(u,1).join(""):i.slice(1);return l[e]()+_}}function Rr(e){return function(i){return bo(kl(xl(i).replace(L_,"")),e,"")}}function ii(e){return function(){var i=arguments;switch(i.length){case 0:return new e;case 1:return new e(i[0]);case 2:return new e(i[0],i[1]);case 3:return new e(i[0],i[1],i[2]);case 4:return new e(i[0],i[1],i[2],i[3]);case 5:return new e(i[0],i[1],i[2],i[3],i[4]);case 6:return new e(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var u=wr(e.prototype),l=e.apply(u,i);return Ce(l)?l:u}}function Wh(e,i,u){var l=ii(e);function _(){for(var h=arguments.length,m=v(h),D=h,A=xr(_);D--;)m[D]=arguments[D];var N=h<3&&m[0]!==A&&m[h-1]!==A?[]:Pt(m,A);if(h-=N.length,h<u)return Gc(e,i,os,_.placeholder,t,m,N,t,t,u-h);var C=this&&this!==Xe&&this instanceof _?l:e;return Dn(C,this,m)}return _}function Uc(e){return function(i,u,l){var _=Ee(i);if(!dn(i)){var h=W(u,3);i=Qe(i),u=function(D){return h(_[D],D,_)}}var m=e(i,u,l);return m>-1?_[h?i[m]:m]:t}}function Bc(e){return Et(function(i){var u=i.length,l=u,_=kn.prototype.thru;for(e&&i.reverse();l--;){var h=i[l];if(typeof h!="function")throw new xn(c);if(_&&!m&&ls(h)=="wrapper")var m=new kn([],!0)}for(l=m?l:u;++l<u;){h=i[l];var D=ls(h),A=D=="wrapper"?Xo(h):t;A&&na(A[0])&&A[1]==(en|ge|ke|ht)&&!A[4].length&&A[9]==1?m=m[ls(A[0])].apply(m,A[3]):m=h.length==1&&na(h)?m[D]():m.thru(h)}return function(){var N=arguments,C=N[0];if(m&&N.length==1&&K(C))return m.plant(C).value();for(var k=0,U=u?i[k].apply(this,N):C;++k<u;)U=i[k].call(this,U);return U}})}function os(e,i,u,l,_,h,m,D,A,N){var C=i&en,k=i&z,U=i&le,q=i&(ge|we),Q=i&x,te=U?t:ii(e);function J(){for(var se=arguments.length,ce=v(se),vn=se;vn--;)ce[vn]=arguments[vn];if(q)var ln=xr(J),Sn=sd(ce,ln);if(l&&(ce=Rc(ce,l,_,q)),h&&(ce=xc(ce,h,m,q)),se-=Sn,q&&se<N){var $e=Pt(ce,ln);return Gc(e,i,os,J.placeholder,u,ce,$e,D,A,N-se)}var Qn=k?u:this,St=U?Qn[e]:e;return se=ce.length,D?ce=_g(ce,D):Q&&se>1&&ce.reverse(),C&&A<se&&(ce.length=A),this&&this!==Xe&&this instanceof J&&(St=te||ii(St)),St.apply(Qn,ce)}return J}function Pc(e,i){return function(u,l){return Eh(u,e,i(l),{})}}function as(e,i){return function(u,l){var _;if(u===t&&l===t)return i;if(u!==t&&(_=u),l!==t){if(_===t)return l;typeof u=="string"||typeof l=="string"?(u=yn(u),l=yn(l)):(u=vc(u),l=vc(l)),_=e(u,l)}return _}}function Wo(e){return Et(function(i){return i=Oe(i,En(W())),re(function(u){var l=this;return e(i,function(_){return Dn(_,l,u)})})})}function us(e,i){i=i===t?" ":yn(i);var u=i.length;if(u<2)return u?$o(i,e):i;var l=$o(i,Qi(e/Sr(i)));return vr(i)?qt(zn(l),0,e).join(""):l.slice(0,e)}function Qh(e,i,u,l){var _=i&z,h=ii(e);function m(){for(var D=-1,A=arguments.length,N=-1,C=l.length,k=v(C+A),U=this&&this!==Xe&&this instanceof m?h:e;++N<C;)k[N]=l[N];for(;A--;)k[N++]=arguments[++D];return Dn(U,_?u:this,k)}return m}function $c(e){return function(i,u,l){return l&&typeof l!="number"&&cn(i,u,l)&&(u=l=t),i=vt(i),u===t?(u=i,i=0):u=vt(u),l=l===t?i<u?1:-1:vt(l),xh(i,u,l,e)}}function cs(e){return function(i,u){return typeof i=="string"&&typeof u=="string"||(i=Bn(i),u=Bn(u)),e(i,u)}}function Gc(e,i,u,l,_,h,m,D,A,N){var C=i&ge,k=C?m:t,U=C?t:m,q=C?h:t,Q=C?t:h;i|=C?ke:on,i&=~(C?on:ke),i&Te||(i&=~(z|le));var te=[e,i,_,q,k,Q,U,D,A,N],J=u.apply(t,te);return na(e)&&Kc(J,te),J.placeholder=l,el(J,e,i)}function Qo(e){var i=Ye[e];return function(u,l){if(u=Bn(u),l=l==null?0:tn(ne(l),292),l&&ec(u)){var _=(he(u)+"e").split("e"),h=i(_[0]+"e"+(+_[1]+l));return _=(he(h)+"e").split("e"),+(_[0]+"e"+(+_[1]-l))}return i(u)}}var Jh=Or&&1/Bi(new Or([,-0]))[1]==ot?function(e){return new Or(e)}:ga;function Vc(e){return function(i){var u=rn(i);return u==jn?vo(i):u==qn?pd(i):id(i,e(i))}}function Dt(e,i,u,l,_,h,m,D){var A=i&le;if(!A&&typeof e!="function")throw new xn(c);var N=l?l.length:0;if(N||(i&=~(ke|on),l=_=t),m=m===t?m:We(ne(m),0),D=D===t?D:ne(D),N-=_?_.length:0,i&on){var C=l,k=_;l=_=t}var U=A?t:Xo(e),q=[e,i,u,l,_,C,k,h,m,D];if(U&&lg(q,U),e=q[0],i=q[1],u=q[2],l=q[3],_=q[4],D=q[9]=q[9]===t?A?0:e.length:We(q[9]-N,0),!D&&i&(ge|we)&&(i&=~(ge|we)),!i||i==z)var Q=Yh(e,i,u);else i==ge||i==we?Q=Wh(e,i,D):(i==ke||i==(z|ke))&&!_.length?Q=Qh(e,i,u,l):Q=os.apply(t,q);var te=U?yc:Kc;return el(te(Q,q),e,i)}function jc(e,i,u,l){return e===t||Wn(e,Ir[u])&&!be.call(l,u)?i:e}function qc(e,i,u,l,_,h){return Ce(e)&&Ce(i)&&(h.set(i,e),ts(e,i,t,qc,h),h.delete(i)),e}function Hh(e){return ai(e)?t:e}function zc(e,i,u,l,_,h){var m=u&O,D=e.length,A=i.length;if(D!=A&&!(m&&A>D))return!1;var N=h.get(e),C=h.get(i);if(N&&C)return N==i&&C==e;var k=-1,U=!0,q=u&L?new rr:t;for(h.set(e,i),h.set(i,e);++k<D;){var Q=e[k],te=i[k];if(l)var J=m?l(te,Q,k,i,e,h):l(Q,te,k,e,i,h);if(J!==t){if(J)continue;U=!1;break}if(q){if(!mo(i,function(se,ce){if(!Wr(q,ce)&&(Q===se||_(Q,se,u,l,h)))return q.push(ce)})){U=!1;break}}else if(!(Q===te||_(Q,te,u,l,h))){U=!1;break}}return h.delete(e),h.delete(i),U}function Xh(e,i,u,l,_,h,m){switch(u){case Er:if(e.byteLength!=i.byteLength||e.byteOffset!=i.byteOffset)return!1;e=e.buffer,i=i.buffer;case Yr:return!(e.byteLength!=i.byteLength||!h(new qi(e),new qi(i)));case de:case wn:case Vr:return Wn(+e,+i);case Lt:return e.name==i.name&&e.message==i.message;case jr:case qr:return e==i+"";case jn:var D=vo;case qn:var A=l&O;if(D||(D=Bi),e.size!=i.size&&!A)return!1;var N=m.get(e);if(N)return N==i;l|=L,m.set(e,i);var C=zc(D(e),D(i),l,_,h,m);return m.delete(e),C;case Ri:if(Zr)return Zr.call(e)==Zr.call(i)}return!1}function Zh(e,i,u,l,_,h){var m=u&O,D=Jo(e),A=D.length,N=Jo(i),C=N.length;if(A!=C&&!m)return!1;for(var k=A;k--;){var U=D[k];if(!(m?U in i:be.call(i,U)))return!1}var q=h.get(e),Q=h.get(i);if(q&&Q)return q==i&&Q==e;var te=!0;h.set(e,i),h.set(i,e);for(var J=m;++k<A;){U=D[k];var se=e[U],ce=i[U];if(l)var vn=m?l(ce,se,U,i,e,h):l(se,ce,U,e,i,h);if(!(vn===t?se===ce||_(se,ce,u,l,h):vn)){te=!1;break}J||(J=U=="constructor")}if(te&&!J){var ln=e.constructor,Sn=i.constructor;ln!=Sn&&"constructor"in e&&"constructor"in i&&!(typeof ln=="function"&&ln instanceof ln&&typeof Sn=="function"&&Sn instanceof Sn)&&(te=!1)}return h.delete(e),h.delete(i),te}function Et(e){return ra(Xc(e,t,ol),e+"")}function Jo(e){return fc(e,Qe,Ko)}function Ho(e){return fc(e,hn,Yc)}var Xo=Hi?function(e){return Hi.get(e)}:ga;function ls(e){for(var i=e.name+"",u=Nr[i],l=be.call(Nr,i)?u.length:0;l--;){var _=u[l],h=_.func;if(h==null||h==e)return _.name}return i}function xr(e){var i=be.call(d,"placeholder")?d:e;return i.placeholder}function W(){var e=d.iteratee||da;return e=e===da?dc:e,arguments.length?e(arguments[0],arguments[1]):e}function fs(e,i){var u=e.__data__;return og(i)?u[typeof i=="string"?"string":"hash"]:u.map}function Zo(e){for(var i=Qe(e),u=i.length;u--;){var l=i[u],_=e[l];i[u]=[l,_,Jc(_)]}return i}function or(e,i){var u=cd(e,i);return _c(u)?u:t}function Kh(e){var i=be.call(e,nr),u=e[nr];try{e[nr]=t;var l=!0}catch{}var _=Vi.call(e);return l&&(i?e[nr]=u:delete e[nr]),_}var Ko=To?function(e){return e==null?[]:(e=Ee(e),Ut(To(e),function(i){return Zu.call(e,i)}))}:ba,Yc=To?function(e){for(var i=[];e;)Bt(i,Ko(e)),e=zi(e);return i}:ba,rn=un;(Io&&rn(new Io(new ArrayBuffer(1)))!=Er||Jr&&rn(new Jr)!=jn||Oo&&rn(Oo.resolve())!=uu||Or&&rn(new Or)!=qn||Hr&&rn(new Hr)!=zr)&&(rn=function(e){var i=un(e),u=i==gt?e.constructor:t,l=u?ar(u):"";if(l)switch(l){case Md:return Er;case Ld:return jn;case Ud:return uu;case Bd:return qn;case Pd:return zr}return i});function eg(e,i,u){for(var l=-1,_=u.length;++l<_;){var h=u[l],m=h.size;switch(h.type){case"drop":e+=m;break;case"dropRight":i-=m;break;case"take":i=tn(i,e+m);break;case"takeRight":e=We(e,i-m);break}}return{start:e,end:i}}function ng(e){var i=e.match(a_);return i?i[1].split(u_):[]}function Wc(e,i,u){i=jt(i,e);for(var l=-1,_=i.length,h=!1;++l<_;){var m=ct(i[l]);if(!(h=e!=null&&u(e,m)))break;e=e[m]}return h||++l!=_?h:(_=e==null?0:e.length,!!_&&ms(_)&&yt(m,_)&&(K(e)||ur(e)))}function tg(e){var i=e.length,u=new e.constructor(i);return i&&typeof e[0]=="string"&&be.call(e,"index")&&(u.index=e.index,u.input=e.input),u}function Qc(e){return typeof e.constructor=="function"&&!si(e)?wr(zi(e)):{}}function rg(e,i,u){var l=e.constructor;switch(i){case Yr:return Yo(e);case de:case wn:return new l(+e);case Er:return $h(e,u);case Xs:case Zs:case Ks:case eo:case no:case to:case ro:case io:case so:return wc(e,u);case jn:return new l;case Vr:case qr:return new l(e);case jr:return Gh(e);case qn:return new l;case Ri:return Vh(e)}}function ig(e,i){var u=i.length;if(!u)return e;var l=u-1;return i[l]=(u>1?"& ":"")+i[l],i=i.join(u>2?", ":" "),e.replace(o_,`{
/* [wrapped with `+i+`] */
`)}function sg(e){return K(e)||ur(e)||!!(Ku&&e&&e[Ku])}function yt(e,i){var u=typeof e;return i=i??Vn,!!i&&(u=="number"||u!="symbol"&&b_.test(e))&&e>-1&&e%1==0&&e<i}function cn(e,i,u){if(!Ce(u))return!1;var l=typeof i;return(l=="number"?dn(u)&&yt(i,u.length):l=="string"&&i in u)?Wn(u[i],e):!1}function ea(e,i){if(K(e))return!1;var u=typeof e;return u=="number"||u=="symbol"||u=="boolean"||e==null||An(e)?!0:t_.test(e)||!n_.test(e)||i!=null&&e in Ee(i)}function og(e){var i=typeof e;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?e!=="__proto__":e===null}function na(e){var i=ls(e),u=d[i];if(typeof u!="function"||!(i in ae.prototype))return!1;if(e===u)return!0;var l=Xo(u);return!!l&&e===l[0]}function ag(e){return!!Ju&&Ju in e}var ug=$i?At:ma;function si(e){var i=e&&e.constructor,u=typeof i=="function"&&i.prototype||Ir;return e===u}function Jc(e){return e===e&&!Ce(e)}function Hc(e,i){return function(u){return u==null?!1:u[e]===i&&(i!==t||e in Ee(u))}}function cg(e){var i=gs(e,function(l){return u.size===g&&u.clear(),l}),u=i.cache;return i}function lg(e,i){var u=e[1],l=i[1],_=u|l,h=_<(z|le|en),m=l==en&&u==ge||l==en&&u==ht&&e[7].length<=i[8]||l==(en|ht)&&i[7].length<=i[8]&&u==ge;if(!(h||m))return e;l&z&&(e[2]=i[2],_|=u&z?0:Te);var D=i[3];if(D){var A=e[3];e[3]=A?Rc(A,D,i[4]):D,e[4]=A?Pt(e[3],b):i[4]}return D=i[5],D&&(A=e[5],e[5]=A?xc(A,D,i[6]):D,e[6]=A?Pt(e[5],b):i[6]),D=i[7],D&&(e[7]=D),l&en&&(e[8]=e[8]==null?i[8]:tn(e[8],i[8])),e[9]==null&&(e[9]=i[9]),e[0]=i[0],e[1]=_,e}function fg(e){var i=[];if(e!=null)for(var u in Ee(e))i.push(u);return i}function pg(e){return Vi.call(e)}function Xc(e,i,u){return i=We(i===t?e.length-1:i,0),function(){for(var l=arguments,_=-1,h=We(l.length-i,0),m=v(h);++_<h;)m[_]=l[i+_];_=-1;for(var D=v(i+1);++_<i;)D[_]=l[_];return D[i]=u(m),Dn(e,this,D)}}function Zc(e,i){return i.length<2?e:sr(e,Ln(i,0,-1))}function _g(e,i){for(var u=e.length,l=tn(i.length,u),_=_n(e);l--;){var h=i[l];e[l]=yt(h,u)?_[h]:t}return e}function ta(e,i){if(!(i==="constructor"&&typeof e[i]=="function")&&i!="__proto__")return e[i]}var Kc=nl(yc),oi=Od||function(e,i){return Xe.setTimeout(e,i)},ra=nl(Lh);function el(e,i,u){var l=i+"";return ra(e,ig(l,dg(ng(l),u)))}function nl(e){var i=0,u=0;return function(){var l=Rd(),_=Zt-(l-u);if(u=l,_>0){if(++i>=Mt)return arguments[0]}else i=0;return e.apply(t,arguments)}}function ps(e,i){var u=-1,l=e.length,_=l-1;for(i=i===t?l:i;++u<i;){var h=Po(u,_),m=e[h];e[h]=e[u],e[u]=m}return e.length=i,e}var tl=cg(function(e){var i=[];return e.charCodeAt(0)===46&&i.push(""),e.replace(r_,function(u,l,_,h){i.push(_?h.replace(f_,"$1"):l||u)}),i});function ct(e){if(typeof e=="string"||An(e))return e;var i=e+"";return i=="0"&&1/e==-ot?"-0":i}function ar(e){if(e!=null){try{return Gi.call(e)}catch{}try{return e+""}catch{}}return""}function dg(e,i){return Rn(B,function(u){var l="_."+u[0];i&u[1]&&!Li(e,l)&&e.push(l)}),e.sort()}function rl(e){if(e instanceof ae)return e.clone();var i=new kn(e.__wrapped__,e.__chain__);return i.__actions__=_n(e.__actions__),i.__index__=e.__index__,i.__values__=e.__values__,i}function hg(e,i,u){(u?cn(e,i,u):i===t)?i=1:i=We(ne(i),0);var l=e==null?0:e.length;if(!l||i<1)return[];for(var _=0,h=0,m=v(Qi(l/i));_<l;)m[h++]=Ln(e,_,_+=i);return m}function gg(e){for(var i=-1,u=e==null?0:e.length,l=0,_=[];++i<u;){var h=e[i];h&&(_[l++]=h)}return _}function bg(){var e=arguments.length;if(!e)return[];for(var i=v(e-1),u=arguments[0],l=e;l--;)i[l-1]=arguments[l];return Bt(K(u)?_n(u):[u],Ze(i,1))}var mg=re(function(e,i){return Pe(e)?ei(e,Ze(i,1,Pe,!0)):[]}),Fg=re(function(e,i){var u=Un(i);return Pe(u)&&(u=t),Pe(e)?ei(e,Ze(i,1,Pe,!0),W(u,2)):[]}),Dg=re(function(e,i){var u=Un(i);return Pe(u)&&(u=t),Pe(e)?ei(e,Ze(i,1,Pe,!0),t,u):[]});function Eg(e,i,u){var l=e==null?0:e.length;return l?(i=u||i===t?1:ne(i),Ln(e,i<0?0:i,l)):[]}function yg(e,i,u){var l=e==null?0:e.length;return l?(i=u||i===t?1:ne(i),i=l-i,Ln(e,0,i<0?0:i)):[]}function Ag(e,i){return e&&e.length?is(e,W(i,3),!0,!0):[]}function vg(e,i){return e&&e.length?is(e,W(i,3),!0):[]}function Sg(e,i,u,l){var _=e==null?0:e.length;return _?(u&&typeof u!="number"&&cn(e,i,u)&&(u=0,l=_),bh(e,i,u,l)):[]}function il(e,i,u){var l=e==null?0:e.length;if(!l)return-1;var _=u==null?0:ne(u);return _<0&&(_=We(l+_,0)),Ui(e,W(i,3),_)}function sl(e,i,u){var l=e==null?0:e.length;if(!l)return-1;var _=l-1;return u!==t&&(_=ne(u),_=u<0?We(l+_,0):tn(_,l-1)),Ui(e,W(i,3),_,!0)}function ol(e){var i=e==null?0:e.length;return i?Ze(e,1):[]}function Tg(e){var i=e==null?0:e.length;return i?Ze(e,ot):[]}function Ig(e,i){var u=e==null?0:e.length;return u?(i=i===t?1:ne(i),Ze(e,i)):[]}function Og(e){for(var i=-1,u=e==null?0:e.length,l={};++i<u;){var _=e[i];l[_[0]]=_[1]}return l}function al(e){return e&&e.length?e[0]:t}function Ng(e,i,u){var l=e==null?0:e.length;if(!l)return-1;var _=u==null?0:ne(u);return _<0&&(_=We(l+_,0)),Ar(e,i,_)}function wg(e){var i=e==null?0:e.length;return i?Ln(e,0,-1):[]}var Cg=re(function(e){var i=Oe(e,qo);return i.length&&i[0]===e[0]?ko(i):[]}),Rg=re(function(e){var i=Un(e),u=Oe(e,qo);return i===Un(u)?i=t:u.pop(),u.length&&u[0]===e[0]?ko(u,W(i,2)):[]}),xg=re(function(e){var i=Un(e),u=Oe(e,qo);return i=typeof i=="function"?i:t,i&&u.pop(),u.length&&u[0]===e[0]?ko(u,t,i):[]});function kg(e,i){return e==null?"":wd.call(e,i)}function Un(e){var i=e==null?0:e.length;return i?e[i-1]:t}function Mg(e,i,u){var l=e==null?0:e.length;if(!l)return-1;var _=l;return u!==t&&(_=ne(u),_=_<0?We(l+_,0):tn(_,l-1)),i===i?dd(e,i,_):Ui(e,Gu,_,!0)}function Lg(e,i){return e&&e.length?mc(e,ne(i)):t}var Ug=re(ul);function ul(e,i){return e&&e.length&&i&&i.length?Bo(e,i):e}function Bg(e,i,u){return e&&e.length&&i&&i.length?Bo(e,i,W(u,2)):e}function Pg(e,i,u){return e&&e.length&&i&&i.length?Bo(e,i,t,u):e}var $g=Et(function(e,i){var u=e==null?0:e.length,l=wo(e,i);return Ec(e,Oe(i,function(_){return yt(_,u)?+_:_}).sort(Cc)),l});function Gg(e,i){var u=[];if(!(e&&e.length))return u;var l=-1,_=[],h=e.length;for(i=W(i,3);++l<h;){var m=e[l];i(m,l,e)&&(u.push(m),_.push(l))}return Ec(e,_),u}function ia(e){return e==null?e:kd.call(e)}function Vg(e,i,u){var l=e==null?0:e.length;return l?(u&&typeof u!="number"&&cn(e,i,u)?(i=0,u=l):(i=i==null?0:ne(i),u=u===t?l:ne(u)),Ln(e,i,u)):[]}function jg(e,i){return rs(e,i)}function qg(e,i,u){return Go(e,i,W(u,2))}function zg(e,i){var u=e==null?0:e.length;if(u){var l=rs(e,i);if(l<u&&Wn(e[l],i))return l}return-1}function Yg(e,i){return rs(e,i,!0)}function Wg(e,i,u){return Go(e,i,W(u,2),!0)}function Qg(e,i){var u=e==null?0:e.length;if(u){var l=rs(e,i,!0)-1;if(Wn(e[l],i))return l}return-1}function Jg(e){return e&&e.length?Ac(e):[]}function Hg(e,i){return e&&e.length?Ac(e,W(i,2)):[]}function Xg(e){var i=e==null?0:e.length;return i?Ln(e,1,i):[]}function Zg(e,i,u){return e&&e.length?(i=u||i===t?1:ne(i),Ln(e,0,i<0?0:i)):[]}function Kg(e,i,u){var l=e==null?0:e.length;return l?(i=u||i===t?1:ne(i),i=l-i,Ln(e,i<0?0:i,l)):[]}function e0(e,i){return e&&e.length?is(e,W(i,3),!1,!0):[]}function n0(e,i){return e&&e.length?is(e,W(i,3)):[]}var t0=re(function(e){return Vt(Ze(e,1,Pe,!0))}),r0=re(function(e){var i=Un(e);return Pe(i)&&(i=t),Vt(Ze(e,1,Pe,!0),W(i,2))}),i0=re(function(e){var i=Un(e);return i=typeof i=="function"?i:t,Vt(Ze(e,1,Pe,!0),t,i)});function s0(e){return e&&e.length?Vt(e):[]}function o0(e,i){return e&&e.length?Vt(e,W(i,2)):[]}function a0(e,i){return i=typeof i=="function"?i:t,e&&e.length?Vt(e,t,i):[]}function sa(e){if(!(e&&e.length))return[];var i=0;return e=Ut(e,function(u){if(Pe(u))return i=We(u.length,i),!0}),yo(i,function(u){return Oe(e,Fo(u))})}function cl(e,i){if(!(e&&e.length))return[];var u=sa(e);return i==null?u:Oe(u,function(l){return Dn(i,t,l)})}var u0=re(function(e,i){return Pe(e)?ei(e,i):[]}),c0=re(function(e){return jo(Ut(e,Pe))}),l0=re(function(e){var i=Un(e);return Pe(i)&&(i=t),jo(Ut(e,Pe),W(i,2))}),f0=re(function(e){var i=Un(e);return i=typeof i=="function"?i:t,jo(Ut(e,Pe),t,i)}),p0=re(sa);function _0(e,i){return Ic(e||[],i||[],Kr)}function d0(e,i){return Ic(e||[],i||[],ri)}var h0=re(function(e){var i=e.length,u=i>1?e[i-1]:t;return u=typeof u=="function"?(e.pop(),u):t,cl(e,u)});function ll(e){var i=d(e);return i.__chain__=!0,i}function g0(e,i){return i(e),e}function _s(e,i){return i(e)}var b0=Et(function(e){var i=e.length,u=i?e[0]:0,l=this.__wrapped__,_=function(h){return wo(h,e)};return i>1||this.__actions__.length||!(l instanceof ae)||!yt(u)?this.thru(_):(l=l.slice(u,+u+(i?1:0)),l.__actions__.push({func:_s,args:[_],thisArg:t}),new kn(l,this.__chain__).thru(function(h){return i&&!h.length&&h.push(t),h}))});function m0(){return ll(this)}function F0(){return new kn(this.value(),this.__chain__)}function D0(){this.__values__===t&&(this.__values__=vl(this.value()));var e=this.__index__>=this.__values__.length,i=e?t:this.__values__[this.__index__++];return{done:e,value:i}}function E0(){return this}function y0(e){for(var i,u=this;u instanceof Zi;){var l=rl(u);l.__index__=0,l.__values__=t,i?_.__wrapped__=l:i=l;var _=l;u=u.__wrapped__}return _.__wrapped__=e,i}function A0(){var e=this.__wrapped__;if(e instanceof ae){var i=e;return this.__actions__.length&&(i=new ae(this)),i=i.reverse(),i.__actions__.push({func:_s,args:[ia],thisArg:t}),new kn(i,this.__chain__)}return this.thru(ia)}function v0(){return Tc(this.__wrapped__,this.__actions__)}var S0=ss(function(e,i,u){be.call(e,u)?++e[u]:Ft(e,u,1)});function T0(e,i,u){var l=K(e)?Pu:gh;return u&&cn(e,i,u)&&(i=t),l(e,W(i,3))}function I0(e,i){var u=K(e)?Ut:cc;return u(e,W(i,3))}var O0=Uc(il),N0=Uc(sl);function w0(e,i){return Ze(ds(e,i),1)}function C0(e,i){return Ze(ds(e,i),ot)}function R0(e,i,u){return u=u===t?1:ne(u),Ze(ds(e,i),u)}function fl(e,i){var u=K(e)?Rn:Gt;return u(e,W(i,3))}function pl(e,i){var u=K(e)?X_:uc;return u(e,W(i,3))}var x0=ss(function(e,i,u){be.call(e,u)?e[u].push(i):Ft(e,u,[i])});function k0(e,i,u,l){e=dn(e)?e:Mr(e),u=u&&!l?ne(u):0;var _=e.length;return u<0&&(u=We(_+u,0)),Fs(e)?u<=_&&e.indexOf(i,u)>-1:!!_&&Ar(e,i,u)>-1}var M0=re(function(e,i,u){var l=-1,_=typeof i=="function",h=dn(e)?v(e.length):[];return Gt(e,function(m){h[++l]=_?Dn(i,m,u):ni(m,i,u)}),h}),L0=ss(function(e,i,u){Ft(e,u,i)});function ds(e,i){var u=K(e)?Oe:hc;return u(e,W(i,3))}function U0(e,i,u,l){return e==null?[]:(K(i)||(i=i==null?[]:[i]),u=l?t:u,K(u)||(u=u==null?[]:[u]),Fc(e,i,u))}var B0=ss(function(e,i,u){e[u?0:1].push(i)},function(){return[[],[]]});function P0(e,i,u){var l=K(e)?bo:ju,_=arguments.length<3;return l(e,W(i,4),u,_,Gt)}function $0(e,i,u){var l=K(e)?Z_:ju,_=arguments.length<3;return l(e,W(i,4),u,_,uc)}function G0(e,i){var u=K(e)?Ut:cc;return u(e,bs(W(i,3)))}function V0(e){var i=K(e)?ic:kh;return i(e)}function j0(e,i,u){(u?cn(e,i,u):i===t)?i=1:i=ne(i);var l=K(e)?fh:Mh;return l(e,i)}function q0(e){var i=K(e)?ph:Uh;return i(e)}function z0(e){if(e==null)return 0;if(dn(e))return Fs(e)?Sr(e):e.length;var i=rn(e);return i==jn||i==qn?e.size:Lo(e).length}function Y0(e,i,u){var l=K(e)?mo:Bh;return u&&cn(e,i,u)&&(i=t),l(e,W(i,3))}var W0=re(function(e,i){if(e==null)return[];var u=i.length;return u>1&&cn(e,i[0],i[1])?i=[]:u>2&&cn(i[0],i[1],i[2])&&(i=[i[0]]),Fc(e,Ze(i,1),[])}),hs=Id||function(){return Xe.Date.now()};function Q0(e,i){if(typeof i!="function")throw new xn(c);return e=ne(e),function(){if(--e<1)return i.apply(this,arguments)}}function _l(e,i,u){return i=u?t:i,i=e&&i==null?e.length:i,Dt(e,en,t,t,t,t,i)}function dl(e,i){var u;if(typeof i!="function")throw new xn(c);return e=ne(e),function(){return--e>0&&(u=i.apply(this,arguments)),e<=1&&(i=t),u}}var oa=re(function(e,i,u){var l=z;if(u.length){var _=Pt(u,xr(oa));l|=ke}return Dt(e,l,i,u,_)}),hl=re(function(e,i,u){var l=z|le;if(u.length){var _=Pt(u,xr(hl));l|=ke}return Dt(i,l,e,u,_)});function gl(e,i,u){i=u?t:i;var l=Dt(e,ge,t,t,t,t,t,i);return l.placeholder=gl.placeholder,l}function bl(e,i,u){i=u?t:i;var l=Dt(e,we,t,t,t,t,t,i);return l.placeholder=bl.placeholder,l}function ml(e,i,u){var l,_,h,m,D,A,N=0,C=!1,k=!1,U=!0;if(typeof e!="function")throw new xn(c);i=Bn(i)||0,Ce(u)&&(C=!!u.leading,k="maxWait"in u,h=k?We(Bn(u.maxWait)||0,i):h,U="trailing"in u?!!u.trailing:U);function q($e){var Qn=l,St=_;return l=_=t,N=$e,m=e.apply(St,Qn),m}function Q($e){return N=$e,D=oi(se,i),C?q($e):m}function te($e){var Qn=$e-A,St=$e-N,Ul=i-Qn;return k?tn(Ul,h-St):Ul}function J($e){var Qn=$e-A,St=$e-N;return A===t||Qn>=i||Qn<0||k&&St>=h}function se(){var $e=hs();if(J($e))return ce($e);D=oi(se,te($e))}function ce($e){return D=t,U&&l?q($e):(l=_=t,m)}function vn(){D!==t&&Oc(D),N=0,l=A=_=D=t}function ln(){return D===t?m:ce(hs())}function Sn(){var $e=hs(),Qn=J($e);if(l=arguments,_=this,A=$e,Qn){if(D===t)return Q(A);if(k)return Oc(D),D=oi(se,i),q(A)}return D===t&&(D=oi(se,i)),m}return Sn.cancel=vn,Sn.flush=ln,Sn}var J0=re(function(e,i){return ac(e,1,i)}),H0=re(function(e,i,u){return ac(e,Bn(i)||0,u)});function X0(e){return Dt(e,x)}function gs(e,i){if(typeof e!="function"||i!=null&&typeof i!="function")throw new xn(c);var u=function(){var l=arguments,_=i?i.apply(this,l):l[0],h=u.cache;if(h.has(_))return h.get(_);var m=e.apply(this,l);return u.cache=h.set(_,m)||h,m};return u.cache=new(gs.Cache||mt),u}gs.Cache=mt;function bs(e){if(typeof e!="function")throw new xn(c);return function(){var i=arguments;switch(i.length){case 0:return!e.call(this);case 1:return!e.call(this,i[0]);case 2:return!e.call(this,i[0],i[1]);case 3:return!e.call(this,i[0],i[1],i[2])}return!e.apply(this,i)}}function Z0(e){return dl(2,e)}var K0=Ph(function(e,i){i=i.length==1&&K(i[0])?Oe(i[0],En(W())):Oe(Ze(i,1),En(W()));var u=i.length;return re(function(l){for(var _=-1,h=tn(l.length,u);++_<h;)l[_]=i[_].call(this,l[_]);return Dn(e,this,l)})}),aa=re(function(e,i){var u=Pt(i,xr(aa));return Dt(e,ke,t,i,u)}),Fl=re(function(e,i){var u=Pt(i,xr(Fl));return Dt(e,on,t,i,u)}),eb=Et(function(e,i){return Dt(e,ht,t,t,t,i)});function nb(e,i){if(typeof e!="function")throw new xn(c);return i=i===t?i:ne(i),re(e,i)}function tb(e,i){if(typeof e!="function")throw new xn(c);return i=i==null?0:We(ne(i),0),re(function(u){var l=u[i],_=qt(u,0,i);return l&&Bt(_,l),Dn(e,this,_)})}function rb(e,i,u){var l=!0,_=!0;if(typeof e!="function")throw new xn(c);return Ce(u)&&(l="leading"in u?!!u.leading:l,_="trailing"in u?!!u.trailing:_),ml(e,i,{leading:l,maxWait:i,trailing:_})}function ib(e){return _l(e,1)}function sb(e,i){return aa(zo(i),e)}function ob(){if(!arguments.length)return[];var e=arguments[0];return K(e)?e:[e]}function ab(e){return Mn(e,S)}function ub(e,i){return i=typeof i=="function"?i:t,Mn(e,S,i)}function cb(e){return Mn(e,F|S)}function lb(e,i){return i=typeof i=="function"?i:t,Mn(e,F|S,i)}function fb(e,i){return i==null||oc(e,i,Qe(i))}function Wn(e,i){return e===i||e!==e&&i!==i}var pb=cs(xo),_b=cs(function(e,i){return e>=i}),ur=pc(function(){return arguments}())?pc:function(e){return Me(e)&&be.call(e,"callee")&&!Zu.call(e,"callee")},K=v.isArray,db=xu?En(xu):yh;function dn(e){return e!=null&&ms(e.length)&&!At(e)}function Pe(e){return Me(e)&&dn(e)}function hb(e){return e===!0||e===!1||Me(e)&&un(e)==de}var zt=Nd||ma,gb=ku?En(ku):Ah;function bb(e){return Me(e)&&e.nodeType===1&&!ai(e)}function mb(e){if(e==null)return!0;if(dn(e)&&(K(e)||typeof e=="string"||typeof e.splice=="function"||zt(e)||kr(e)||ur(e)))return!e.length;var i=rn(e);if(i==jn||i==qn)return!e.size;if(si(e))return!Lo(e).length;for(var u in e)if(be.call(e,u))return!1;return!0}function Fb(e,i){return ti(e,i)}function Db(e,i,u){u=typeof u=="function"?u:t;var l=u?u(e,i):t;return l===t?ti(e,i,t,u):!!l}function ua(e){if(!Me(e))return!1;var i=un(e);return i==Lt||i==Gr||typeof e.message=="string"&&typeof e.name=="string"&&!ai(e)}function Eb(e){return typeof e=="number"&&ec(e)}function At(e){if(!Ce(e))return!1;var i=un(e);return i==nn||i==au||i==Be||i==zp}function Dl(e){return typeof e=="number"&&e==ne(e)}function ms(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Vn}function Ce(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}function Me(e){return e!=null&&typeof e=="object"}var El=Mu?En(Mu):Sh;function yb(e,i){return e===i||Mo(e,i,Zo(i))}function Ab(e,i,u){return u=typeof u=="function"?u:t,Mo(e,i,Zo(i),u)}function vb(e){return yl(e)&&e!=+e}function Sb(e){if(ug(e))throw new Z(a);return _c(e)}function Tb(e){return e===null}function Ib(e){return e==null}function yl(e){return typeof e=="number"||Me(e)&&un(e)==Vr}function ai(e){if(!Me(e)||un(e)!=gt)return!1;var i=zi(e);if(i===null)return!0;var u=be.call(i,"constructor")&&i.constructor;return typeof u=="function"&&u instanceof u&&Gi.call(u)==Ad}var ca=Lu?En(Lu):Th;function Ob(e){return Dl(e)&&e>=-Vn&&e<=Vn}var Al=Uu?En(Uu):Ih;function Fs(e){return typeof e=="string"||!K(e)&&Me(e)&&un(e)==qr}function An(e){return typeof e=="symbol"||Me(e)&&un(e)==Ri}var kr=Bu?En(Bu):Oh;function Nb(e){return e===t}function wb(e){return Me(e)&&rn(e)==zr}function Cb(e){return Me(e)&&un(e)==Wp}var Rb=cs(Uo),xb=cs(function(e,i){return e<=i});function vl(e){if(!e)return[];if(dn(e))return Fs(e)?zn(e):_n(e);if(Qr&&e[Qr])return fd(e[Qr]());var i=rn(e),u=i==jn?vo:i==qn?Bi:Mr;return u(e)}function vt(e){if(!e)return e===0?e:0;if(e=Bn(e),e===ot||e===-ot){var i=e<0?-1:1;return i*Dr}return e===e?e:0}function ne(e){var i=vt(e),u=i%1;return i===i?u?i-u:i:0}function Sl(e){return e?ir(ne(e),0,Nn):0}function Bn(e){if(typeof e=="number")return e;if(An(e))return Kt;if(Ce(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=Ce(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=qu(e);var u=d_.test(e);return u||g_.test(e)?Q_(e.slice(2),u?2:8):__.test(e)?Kt:+e}function Tl(e){return ut(e,hn(e))}function kb(e){return e?ir(ne(e),-Vn,Vn):e===0?e:0}function he(e){return e==null?"":yn(e)}var Mb=Cr(function(e,i){if(si(i)||dn(i)){ut(i,Qe(i),e);return}for(var u in i)be.call(i,u)&&Kr(e,u,i[u])}),Il=Cr(function(e,i){ut(i,hn(i),e)}),Ds=Cr(function(e,i,u,l){ut(i,hn(i),e,l)}),Lb=Cr(function(e,i,u,l){ut(i,Qe(i),e,l)}),Ub=Et(wo);function Bb(e,i){var u=wr(e);return i==null?u:sc(u,i)}var Pb=re(function(e,i){e=Ee(e);var u=-1,l=i.length,_=l>2?i[2]:t;for(_&&cn(i[0],i[1],_)&&(l=1);++u<l;)for(var h=i[u],m=hn(h),D=-1,A=m.length;++D<A;){var N=m[D],C=e[N];(C===t||Wn(C,Ir[N])&&!be.call(e,N))&&(e[N]=h[N])}return e}),$b=re(function(e){return e.push(t,qc),Dn(Ol,t,e)});function Gb(e,i){return $u(e,W(i,3),at)}function Vb(e,i){return $u(e,W(i,3),Ro)}function jb(e,i){return e==null?e:Co(e,W(i,3),hn)}function qb(e,i){return e==null?e:lc(e,W(i,3),hn)}function zb(e,i){return e&&at(e,W(i,3))}function Yb(e,i){return e&&Ro(e,W(i,3))}function Wb(e){return e==null?[]:ns(e,Qe(e))}function Qb(e){return e==null?[]:ns(e,hn(e))}function la(e,i,u){var l=e==null?t:sr(e,i);return l===t?u:l}function Jb(e,i){return e!=null&&Wc(e,i,mh)}function fa(e,i){return e!=null&&Wc(e,i,Fh)}var Hb=Pc(function(e,i,u){i!=null&&typeof i.toString!="function"&&(i=Vi.call(i)),e[i]=u},_a(gn)),Xb=Pc(function(e,i,u){i!=null&&typeof i.toString!="function"&&(i=Vi.call(i)),be.call(e,i)?e[i].push(u):e[i]=[u]},W),Zb=re(ni);function Qe(e){return dn(e)?rc(e):Lo(e)}function hn(e){return dn(e)?rc(e,!0):Nh(e)}function Kb(e,i){var u={};return i=W(i,3),at(e,function(l,_,h){Ft(u,i(l,_,h),l)}),u}function em(e,i){var u={};return i=W(i,3),at(e,function(l,_,h){Ft(u,_,i(l,_,h))}),u}var nm=Cr(function(e,i,u){ts(e,i,u)}),Ol=Cr(function(e,i,u,l){ts(e,i,u,l)}),tm=Et(function(e,i){var u={};if(e==null)return u;var l=!1;i=Oe(i,function(h){return h=jt(h,e),l||(l=h.length>1),h}),ut(e,Ho(e),u),l&&(u=Mn(u,F|w|S,Hh));for(var _=i.length;_--;)Vo(u,i[_]);return u});function rm(e,i){return Nl(e,bs(W(i)))}var im=Et(function(e,i){return e==null?{}:Ch(e,i)});function Nl(e,i){if(e==null)return{};var u=Oe(Ho(e),function(l){return[l]});return i=W(i),Dc(e,u,function(l,_){return i(l,_[0])})}function sm(e,i,u){i=jt(i,e);var l=-1,_=i.length;for(_||(_=1,e=t);++l<_;){var h=e==null?t:e[ct(i[l])];h===t&&(l=_,h=u),e=At(h)?h.call(e):h}return e}function om(e,i,u){return e==null?e:ri(e,i,u)}function am(e,i,u,l){return l=typeof l=="function"?l:t,e==null?e:ri(e,i,u,l)}var wl=Vc(Qe),Cl=Vc(hn);function um(e,i,u){var l=K(e),_=l||zt(e)||kr(e);if(i=W(i,4),u==null){var h=e&&e.constructor;_?u=l?new h:[]:Ce(e)?u=At(h)?wr(zi(e)):{}:u={}}return(_?Rn:at)(e,function(m,D,A){return i(u,m,D,A)}),u}function cm(e,i){return e==null?!0:Vo(e,i)}function lm(e,i,u){return e==null?e:Sc(e,i,zo(u))}function fm(e,i,u,l){return l=typeof l=="function"?l:t,e==null?e:Sc(e,i,zo(u),l)}function Mr(e){return e==null?[]:Ao(e,Qe(e))}function pm(e){return e==null?[]:Ao(e,hn(e))}function _m(e,i,u){return u===t&&(u=i,i=t),u!==t&&(u=Bn(u),u=u===u?u:0),i!==t&&(i=Bn(i),i=i===i?i:0),ir(Bn(e),i,u)}function dm(e,i,u){return i=vt(i),u===t?(u=i,i=0):u=vt(u),e=Bn(e),Dh(e,i,u)}function hm(e,i,u){if(u&&typeof u!="boolean"&&cn(e,i,u)&&(i=u=t),u===t&&(typeof i=="boolean"?(u=i,i=t):typeof e=="boolean"&&(u=e,e=t)),e===t&&i===t?(e=0,i=1):(e=vt(e),i===t?(i=e,e=0):i=vt(i)),e>i){var l=e;e=i,i=l}if(u||e%1||i%1){var _=nc();return tn(e+_*(i-e+W_("1e-"+((_+"").length-1))),i)}return Po(e,i)}var gm=Rr(function(e,i,u){return i=i.toLowerCase(),e+(u?Rl(i):i)});function Rl(e){return pa(he(e).toLowerCase())}function xl(e){return e=he(e),e&&e.replace(m_,od).replace(U_,"")}function bm(e,i,u){e=he(e),i=yn(i);var l=e.length;u=u===t?l:ir(ne(u),0,l);var _=u;return u-=i.length,u>=0&&e.slice(u,_)==i}function mm(e){return e=he(e),e&&Zp.test(e)?e.replace(lu,ad):e}function Fm(e){return e=he(e),e&&i_.test(e)?e.replace(oo,"\\$&"):e}var Dm=Rr(function(e,i,u){return e+(u?"-":"")+i.toLowerCase()}),Em=Rr(function(e,i,u){return e+(u?" ":"")+i.toLowerCase()}),ym=Lc("toLowerCase");function Am(e,i,u){e=he(e),i=ne(i);var l=i?Sr(e):0;if(!i||l>=i)return e;var _=(i-l)/2;return us(Ji(_),u)+e+us(Qi(_),u)}function vm(e,i,u){e=he(e),i=ne(i);var l=i?Sr(e):0;return i&&l<i?e+us(i-l,u):e}function Sm(e,i,u){e=he(e),i=ne(i);var l=i?Sr(e):0;return i&&l<i?us(i-l,u)+e:e}function Tm(e,i,u){return u||i==null?i=0:i&&(i=+i),xd(he(e).replace(ao,""),i||0)}function Im(e,i,u){return(u?cn(e,i,u):i===t)?i=1:i=ne(i),$o(he(e),i)}function Om(){var e=arguments,i=he(e[0]);return e.length<3?i:i.replace(e[1],e[2])}var Nm=Rr(function(e,i,u){return e+(u?"_":"")+i.toLowerCase()});function wm(e,i,u){return u&&typeof u!="number"&&cn(e,i,u)&&(i=u=t),u=u===t?Nn:u>>>0,u?(e=he(e),e&&(typeof i=="string"||i!=null&&!ca(i))&&(i=yn(i),!i&&vr(e))?qt(zn(e),0,u):e.split(i,u)):[]}var Cm=Rr(function(e,i,u){return e+(u?" ":"")+pa(i)});function Rm(e,i,u){return e=he(e),u=u==null?0:ir(ne(u),0,e.length),i=yn(i),e.slice(u,u+i.length)==i}function xm(e,i,u){var l=d.templateSettings;u&&cn(e,i,u)&&(i=t),e=he(e),i=Ds({},i,l,jc);var _=Ds({},i.imports,l.imports,jc),h=Qe(_),m=Ao(_,h),D,A,N=0,C=i.interpolate||xi,k="__p += '",U=So((i.escape||xi).source+"|"+C.source+"|"+(C===fu?p_:xi).source+"|"+(i.evaluate||xi).source+"|$","g"),q="//# sourceURL="+(be.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++V_+"]")+`
`;e.replace(U,function(J,se,ce,vn,ln,Sn){return ce||(ce=vn),k+=e.slice(N,Sn).replace(F_,ud),se&&(D=!0,k+=`' +
__e(`+se+`) +
'`),ln&&(A=!0,k+=`';
`+ln+`;
__p += '`),ce&&(k+=`' +
((__t = (`+ce+`)) == null ? '' : __t) +
'`),N=Sn+J.length,J}),k+=`';
`;var Q=be.call(i,"variable")&&i.variable;if(!Q)k=`with (obj) {
`+k+`
}
`;else if(l_.test(Q))throw new Z(f);k=(A?k.replace(Qp,""):k).replace(Jp,"$1").replace(Hp,"$1;"),k="function("+(Q||"obj")+`) {
`+(Q?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(D?", __e = _.escape":"")+(A?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+k+`return __p
}`;var te=Ml(function(){return pe(h,q+"return "+k).apply(t,m)});if(te.source=k,ua(te))throw te;return te}function km(e){return he(e).toLowerCase()}function Mm(e){return he(e).toUpperCase()}function Lm(e,i,u){if(e=he(e),e&&(u||i===t))return qu(e);if(!e||!(i=yn(i)))return e;var l=zn(e),_=zn(i),h=zu(l,_),m=Yu(l,_)+1;return qt(l,h,m).join("")}function Um(e,i,u){if(e=he(e),e&&(u||i===t))return e.slice(0,Qu(e)+1);if(!e||!(i=yn(i)))return e;var l=zn(e),_=Yu(l,zn(i))+1;return qt(l,0,_).join("")}function Bm(e,i,u){if(e=he(e),e&&(u||i===t))return e.replace(ao,"");if(!e||!(i=yn(i)))return e;var l=zn(e),_=zu(l,zn(i));return qt(l,_).join("")}function Pm(e,i){var u=X,l=an;if(Ce(i)){var _="separator"in i?i.separator:_;u="length"in i?ne(i.length):u,l="omission"in i?yn(i.omission):l}e=he(e);var h=e.length;if(vr(e)){var m=zn(e);h=m.length}if(u>=h)return e;var D=u-Sr(l);if(D<1)return l;var A=m?qt(m,0,D).join(""):e.slice(0,D);if(_===t)return A+l;if(m&&(D+=A.length-D),ca(_)){if(e.slice(D).search(_)){var N,C=A;for(_.global||(_=So(_.source,he(pu.exec(_))+"g")),_.lastIndex=0;N=_.exec(C);)var k=N.index;A=A.slice(0,k===t?D:k)}}else if(e.indexOf(yn(_),D)!=D){var U=A.lastIndexOf(_);U>-1&&(A=A.slice(0,U))}return A+l}function $m(e){return e=he(e),e&&Xp.test(e)?e.replace(cu,hd):e}var Gm=Rr(function(e,i,u){return e+(u?" ":"")+i.toUpperCase()}),pa=Lc("toUpperCase");function kl(e,i,u){return e=he(e),i=u?t:i,i===t?ld(e)?md(e):nd(e):e.match(i)||[]}var Ml=re(function(e,i){try{return Dn(e,t,i)}catch(u){return ua(u)?u:new Z(u)}}),Vm=Et(function(e,i){return Rn(i,function(u){u=ct(u),Ft(e,u,oa(e[u],e))}),e});function jm(e){var i=e==null?0:e.length,u=W();return e=i?Oe(e,function(l){if(typeof l[1]!="function")throw new xn(c);return[u(l[0]),l[1]]}):[],re(function(l){for(var _=-1;++_<i;){var h=e[_];if(Dn(h[0],this,l))return Dn(h[1],this,l)}})}function qm(e){return hh(Mn(e,F))}function _a(e){return function(){return e}}function zm(e,i){return e==null||e!==e?i:e}var Ym=Bc(),Wm=Bc(!0);function gn(e){return e}function da(e){return dc(typeof e=="function"?e:Mn(e,F))}function Qm(e){return gc(Mn(e,F))}function Jm(e,i){return bc(e,Mn(i,F))}var Hm=re(function(e,i){return function(u){return ni(u,e,i)}}),Xm=re(function(e,i){return function(u){return ni(e,u,i)}});function ha(e,i,u){var l=Qe(i),_=ns(i,l);u==null&&!(Ce(i)&&(_.length||!l.length))&&(u=i,i=e,e=this,_=ns(i,Qe(i)));var h=!(Ce(u)&&"chain"in u)||!!u.chain,m=At(e);return Rn(_,function(D){var A=i[D];e[D]=A,m&&(e.prototype[D]=function(){var N=this.__chain__;if(h||N){var C=e(this.__wrapped__),k=C.__actions__=_n(this.__actions__);return k.push({func:A,args:arguments,thisArg:e}),C.__chain__=N,C}return A.apply(e,Bt([this.value()],arguments))})}),e}function Zm(){return Xe._===this&&(Xe._=vd),this}function ga(){}function Km(e){return e=ne(e),re(function(i){return mc(i,e)})}var eF=Wo(Oe),nF=Wo(Pu),tF=Wo(mo);function Ll(e){return ea(e)?Fo(ct(e)):Rh(e)}function rF(e){return function(i){return e==null?t:sr(e,i)}}var iF=$c(),sF=$c(!0);function ba(){return[]}function ma(){return!1}function oF(){return{}}function aF(){return""}function uF(){return!0}function cF(e,i){if(e=ne(e),e<1||e>Vn)return[];var u=Nn,l=tn(e,Nn);i=W(i),e-=Nn;for(var _=yo(l,i);++u<e;)i(u);return _}function lF(e){return K(e)?Oe(e,ct):An(e)?[e]:_n(tl(he(e)))}function fF(e){var i=++yd;return he(e)+i}var pF=as(function(e,i){return e+i},0),_F=Qo("ceil"),dF=as(function(e,i){return e/i},1),hF=Qo("floor");function gF(e){return e&&e.length?es(e,gn,xo):t}function bF(e,i){return e&&e.length?es(e,W(i,2),xo):t}function mF(e){return Vu(e,gn)}function FF(e,i){return Vu(e,W(i,2))}function DF(e){return e&&e.length?es(e,gn,Uo):t}function EF(e,i){return e&&e.length?es(e,W(i,2),Uo):t}var yF=as(function(e,i){return e*i},1),AF=Qo("round"),vF=as(function(e,i){return e-i},0);function SF(e){return e&&e.length?Eo(e,gn):0}function TF(e,i){return e&&e.length?Eo(e,W(i,2)):0}return d.after=Q0,d.ary=_l,d.assign=Mb,d.assignIn=Il,d.assignInWith=Ds,d.assignWith=Lb,d.at=Ub,d.before=dl,d.bind=oa,d.bindAll=Vm,d.bindKey=hl,d.castArray=ob,d.chain=ll,d.chunk=hg,d.compact=gg,d.concat=bg,d.cond=jm,d.conforms=qm,d.constant=_a,d.countBy=S0,d.create=Bb,d.curry=gl,d.curryRight=bl,d.debounce=ml,d.defaults=Pb,d.defaultsDeep=$b,d.defer=J0,d.delay=H0,d.difference=mg,d.differenceBy=Fg,d.differenceWith=Dg,d.drop=Eg,d.dropRight=yg,d.dropRightWhile=Ag,d.dropWhile=vg,d.fill=Sg,d.filter=I0,d.flatMap=w0,d.flatMapDeep=C0,d.flatMapDepth=R0,d.flatten=ol,d.flattenDeep=Tg,d.flattenDepth=Ig,d.flip=X0,d.flow=Ym,d.flowRight=Wm,d.fromPairs=Og,d.functions=Wb,d.functionsIn=Qb,d.groupBy=x0,d.initial=wg,d.intersection=Cg,d.intersectionBy=Rg,d.intersectionWith=xg,d.invert=Hb,d.invertBy=Xb,d.invokeMap=M0,d.iteratee=da,d.keyBy=L0,d.keys=Qe,d.keysIn=hn,d.map=ds,d.mapKeys=Kb,d.mapValues=em,d.matches=Qm,d.matchesProperty=Jm,d.memoize=gs,d.merge=nm,d.mergeWith=Ol,d.method=Hm,d.methodOf=Xm,d.mixin=ha,d.negate=bs,d.nthArg=Km,d.omit=tm,d.omitBy=rm,d.once=Z0,d.orderBy=U0,d.over=eF,d.overArgs=K0,d.overEvery=nF,d.overSome=tF,d.partial=aa,d.partialRight=Fl,d.partition=B0,d.pick=im,d.pickBy=Nl,d.property=Ll,d.propertyOf=rF,d.pull=Ug,d.pullAll=ul,d.pullAllBy=Bg,d.pullAllWith=Pg,d.pullAt=$g,d.range=iF,d.rangeRight=sF,d.rearg=eb,d.reject=G0,d.remove=Gg,d.rest=nb,d.reverse=ia,d.sampleSize=j0,d.set=om,d.setWith=am,d.shuffle=q0,d.slice=Vg,d.sortBy=W0,d.sortedUniq=Jg,d.sortedUniqBy=Hg,d.split=wm,d.spread=tb,d.tail=Xg,d.take=Zg,d.takeRight=Kg,d.takeRightWhile=e0,d.takeWhile=n0,d.tap=g0,d.throttle=rb,d.thru=_s,d.toArray=vl,d.toPairs=wl,d.toPairsIn=Cl,d.toPath=lF,d.toPlainObject=Tl,d.transform=um,d.unary=ib,d.union=t0,d.unionBy=r0,d.unionWith=i0,d.uniq=s0,d.uniqBy=o0,d.uniqWith=a0,d.unset=cm,d.unzip=sa,d.unzipWith=cl,d.update=lm,d.updateWith=fm,d.values=Mr,d.valuesIn=pm,d.without=u0,d.words=kl,d.wrap=sb,d.xor=c0,d.xorBy=l0,d.xorWith=f0,d.zip=p0,d.zipObject=_0,d.zipObjectDeep=d0,d.zipWith=h0,d.entries=wl,d.entriesIn=Cl,d.extend=Il,d.extendWith=Ds,ha(d,d),d.add=pF,d.attempt=Ml,d.camelCase=gm,d.capitalize=Rl,d.ceil=_F,d.clamp=_m,d.clone=ab,d.cloneDeep=cb,d.cloneDeepWith=lb,d.cloneWith=ub,d.conformsTo=fb,d.deburr=xl,d.defaultTo=zm,d.divide=dF,d.endsWith=bm,d.eq=Wn,d.escape=mm,d.escapeRegExp=Fm,d.every=T0,d.find=O0,d.findIndex=il,d.findKey=Gb,d.findLast=N0,d.findLastIndex=sl,d.findLastKey=Vb,d.floor=hF,d.forEach=fl,d.forEachRight=pl,d.forIn=jb,d.forInRight=qb,d.forOwn=zb,d.forOwnRight=Yb,d.get=la,d.gt=pb,d.gte=_b,d.has=Jb,d.hasIn=fa,d.head=al,d.identity=gn,d.includes=k0,d.indexOf=Ng,d.inRange=dm,d.invoke=Zb,d.isArguments=ur,d.isArray=K,d.isArrayBuffer=db,d.isArrayLike=dn,d.isArrayLikeObject=Pe,d.isBoolean=hb,d.isBuffer=zt,d.isDate=gb,d.isElement=bb,d.isEmpty=mb,d.isEqual=Fb,d.isEqualWith=Db,d.isError=ua,d.isFinite=Eb,d.isFunction=At,d.isInteger=Dl,d.isLength=ms,d.isMap=El,d.isMatch=yb,d.isMatchWith=Ab,d.isNaN=vb,d.isNative=Sb,d.isNil=Ib,d.isNull=Tb,d.isNumber=yl,d.isObject=Ce,d.isObjectLike=Me,d.isPlainObject=ai,d.isRegExp=ca,d.isSafeInteger=Ob,d.isSet=Al,d.isString=Fs,d.isSymbol=An,d.isTypedArray=kr,d.isUndefined=Nb,d.isWeakMap=wb,d.isWeakSet=Cb,d.join=kg,d.kebabCase=Dm,d.last=Un,d.lastIndexOf=Mg,d.lowerCase=Em,d.lowerFirst=ym,d.lt=Rb,d.lte=xb,d.max=gF,d.maxBy=bF,d.mean=mF,d.meanBy=FF,d.min=DF,d.minBy=EF,d.stubArray=ba,d.stubFalse=ma,d.stubObject=oF,d.stubString=aF,d.stubTrue=uF,d.multiply=yF,d.nth=Lg,d.noConflict=Zm,d.noop=ga,d.now=hs,d.pad=Am,d.padEnd=vm,d.padStart=Sm,d.parseInt=Tm,d.random=hm,d.reduce=P0,d.reduceRight=$0,d.repeat=Im,d.replace=Om,d.result=sm,d.round=AF,d.runInContext=y,d.sample=V0,d.size=z0,d.snakeCase=Nm,d.some=Y0,d.sortedIndex=jg,d.sortedIndexBy=qg,d.sortedIndexOf=zg,d.sortedLastIndex=Yg,d.sortedLastIndexBy=Wg,d.sortedLastIndexOf=Qg,d.startCase=Cm,d.startsWith=Rm,d.subtract=vF,d.sum=SF,d.sumBy=TF,d.template=xm,d.times=cF,d.toFinite=vt,d.toInteger=ne,d.toLength=Sl,d.toLower=km,d.toNumber=Bn,d.toSafeInteger=kb,d.toString=he,d.toUpper=Mm,d.trim=Lm,d.trimEnd=Um,d.trimStart=Bm,d.truncate=Pm,d.unescape=$m,d.uniqueId=fF,d.upperCase=Gm,d.upperFirst=pa,d.each=fl,d.eachRight=pl,d.first=al,ha(d,function(){var e={};return at(d,function(i,u){be.call(d.prototype,u)||(e[u]=i)}),e}(),{chain:!1}),d.VERSION=o,Rn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){d[e].placeholder=d}),Rn(["drop","take"],function(e,i){ae.prototype[e]=function(u){u=u===t?1:We(ne(u),0);var l=this.__filtered__&&!i?new ae(this):this.clone();return l.__filtered__?l.__takeCount__=tn(u,l.__takeCount__):l.__views__.push({size:tn(u,Nn),type:e+(l.__dir__<0?"Right":"")}),l},ae.prototype[e+"Right"]=function(u){return this.reverse()[e](u).reverse()}}),Rn(["filter","map","takeWhile"],function(e,i){var u=i+1,l=u==wi||u==Ci;ae.prototype[e]=function(_){var h=this.clone();return h.__iteratees__.push({iteratee:W(_,3),type:u}),h.__filtered__=h.__filtered__||l,h}}),Rn(["head","last"],function(e,i){var u="take"+(i?"Right":"");ae.prototype[e]=function(){return this[u](1).value()[0]}}),Rn(["initial","tail"],function(e,i){var u="drop"+(i?"":"Right");ae.prototype[e]=function(){return this.__filtered__?new ae(this):this[u](1)}}),ae.prototype.compact=function(){return this.filter(gn)},ae.prototype.find=function(e){return this.filter(e).head()},ae.prototype.findLast=function(e){return this.reverse().find(e)},ae.prototype.invokeMap=re(function(e,i){return typeof e=="function"?new ae(this):this.map(function(u){return ni(u,e,i)})}),ae.prototype.reject=function(e){return this.filter(bs(W(e)))},ae.prototype.slice=function(e,i){e=ne(e);var u=this;return u.__filtered__&&(e>0||i<0)?new ae(u):(e<0?u=u.takeRight(-e):e&&(u=u.drop(e)),i!==t&&(i=ne(i),u=i<0?u.dropRight(-i):u.take(i-e)),u)},ae.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},ae.prototype.toArray=function(){return this.take(Nn)},at(ae.prototype,function(e,i){var u=/^(?:filter|find|map|reject)|While$/.test(i),l=/^(?:head|last)$/.test(i),_=d[l?"take"+(i=="last"?"Right":""):i],h=l||/^find/.test(i);_&&(d.prototype[i]=function(){var m=this.__wrapped__,D=l?[1]:arguments,A=m instanceof ae,N=D[0],C=A||K(m),k=function(se){var ce=_.apply(d,Bt([se],D));return l&&U?ce[0]:ce};C&&u&&typeof N=="function"&&N.length!=1&&(A=C=!1);var U=this.__chain__,q=!!this.__actions__.length,Q=h&&!U,te=A&&!q;if(!h&&C){m=te?m:new ae(this);var J=e.apply(m,D);return J.__actions__.push({func:_s,args:[k],thisArg:t}),new kn(J,U)}return Q&&te?e.apply(this,D):(J=this.thru(k),Q?l?J.value()[0]:J.value():J)})}),Rn(["pop","push","shift","sort","splice","unshift"],function(e){var i=Pi[e],u=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",l=/^(?:pop|shift)$/.test(e);d.prototype[e]=function(){var _=arguments;if(l&&!this.__chain__){var h=this.value();return i.apply(K(h)?h:[],_)}return this[u](function(m){return i.apply(K(m)?m:[],_)})}}),at(ae.prototype,function(e,i){var u=d[i];if(u){var l=u.name+"";be.call(Nr,l)||(Nr[l]=[]),Nr[l].push({name:i,func:u})}}),Nr[os(t,le).name]=[{name:"wrapper",func:t}],ae.prototype.clone=$d,ae.prototype.reverse=Gd,ae.prototype.value=Vd,d.prototype.at=b0,d.prototype.chain=m0,d.prototype.commit=F0,d.prototype.next=D0,d.prototype.plant=y0,d.prototype.reverse=A0,d.prototype.toJSON=d.prototype.valueOf=d.prototype.value=v0,d.prototype.first=d.prototype.head,Qr&&(d.prototype[Qr]=E0),d},Tr=Fd();er?((er.exports=Tr)._=Tr,_o._=Tr):Xe._=Tr}).call(fi)})(xs,xs.exports);var k1=xs.exports;const wt=x1(k1);function M1(){return{convert:r=>{if(r===null||r===void 0)return null;switch(typeof r){case"boolean":return r;case"string":{const n=r.toLowerCase().trim();return n==="true"||n==="t"||n==="1"}case"number":return r!==0;default:return null}},asString:r=>String(r),type:r=>r.boolean().optional()}}function Tn(r,n){const t=o=>n.convert(o[r]);return{name:L1(r),key:r,asEnv:o=>({[r]:n.asString(o)}),zod:{type:n.type},get:t,getOrDefault:(o,s)=>t(o)??s}}function L1(r){return r.toLowerCase().replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("-","").replace("_",""))}Tn("MAGIDOC_GENERATE",M1());function ys(r){return{convert:n=>{if(Array.isArray(n))return n;if(typeof n=="string"){const t=JSON.parse(n);return Array.isArray(t)?t:null}return null},asString:n=>JSON.stringify(n),type:n=>n.array(r(n)).optional()}}function af(r){return{convert:n=>{if(typeof n=="object")return n;if(typeof n=="string"){const t=JSON.parse(n);return typeof t!="object"?null:t}return null},asString:n=>JSON.stringify(n),type:n=>n.record(r(n).optional()).optional()}}function As(){return{convert:r=>r==null||r===""?null:String(r),asString:r=>String(r),type:r=>r.string().optional()}}function uf(r){return{convert:n=>n==null||!r.find(t=>t===n)?null:n,asString:n=>String(n),type:n=>n.enum(r).optional()}}var Vs={APP_LOGO:Tn("APP_LOGO",As()),APP_TITLE:Tn("APP_TITLE",As()),APP_FAVICON:Tn("APP_FAVICON",As()),SITE_ROOT:Tn("SITE_ROOT",As()),SITE_META:Tn("SITE_META",af(r=>r.string())),CUSTOM_STYLES:Tn("CUSTOM_STYLES",ys(r=>r.string())),FIELDS_SORTING:Tn("FIELDS_SORTING",uf(["default","alphabetical"])),ARGUMENTS_SORTING:Tn("ARGUMENTS_SORTING",uf(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:Tn("QUERY_GENERATION_FACTORIES",af(r=>r.union([r.string(),r.boolean(),r.number(),r.null(),r.record(r.unknown())]))),PAGES:Tn("PAGES",ys(r=>{const n=r.lazy(()=>r.object({title:r.string().min(1),content:r.union([r.array(n),r.string().min(1)])}));return n})),EXTERNAL_LINKS:Tn("EXTERNAL_LINKS",ys(r=>r.object({label:r.string().min(1),href:r.string().min(1),position:r.union([r.literal("header"),r.literal("navigation")]).optional(),kind:r.string().min(1).optional(),group:r.string().min(1).optional()}))),DIRECTIVES:Tn("DIRECTIVES",ys(r=>r.object({name:r.string().min(1),args:r.array(r.string())})))};const U1="LCDB GraphQL",B1="/docs",P1="https://lcdb.org/images/logo.svg",$1="https://lcdb.org/favicon.ico",G1='[{"title":"Welcome","content":"\\nLCDB GraphQL Database\\n=====================\\n\\nThis is the graph database for `https://lcdb.org`.\\n\\nYou are free to use this database for your own purposes.\\n\\nYou may explore the GraphQL with [graphiql](https://graphql.lcdb.org/graphiql) or POST to `https://graphql.lcdb.org`\\n          "},{"title":"Example Queries","content":"\\nExample Queries\\n===============\\n\\nFetch performances with artist name and sources\\n-----------------------------------------------\\n\\n```graphql\\nquery MyQuery {\\n  performances {\\n    edges {\\n      node {\\n        artist {\\n          name\\n        }\\n        date\\n        year\\n        venue\\n        city\\n        state\\n        sources {\\n          edges {\\n            node {\\n              id\\n              comments\\n              createdAt\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n```\\n\\n\\nFetch a single source\\n----------------------\\n\\n```graphql\\nquery MyQuery {\\n  source(id: 211) {\\n    comments\\n    textdoc\\n    id\\n    archiveIdentifier\\n    performance {\\n      date\\n      year\\n      artist {\\n        name\\n      }\\n    }\\n  }\\n}\\n```\\n\\n\\n          "}]',V1="true",Wf={APP_TITLE:U1,SITE_ROOT:B1,APP_LOGO:P1,APP_FAVICON:$1,PAGES:G1,MAGIDOC_GENERATE:V1};function MA(r){return r.get(Wf)}function js(r,n){return r.getOrDefault(Wf,n)}function qs(){return js(Vs.SITE_ROOT,xF)}class j1{constructor(n){ye(this,"mapping");this.mapping=n}getFor(n){return this.mapping.get(n.name)}}var bi;(function(r){r.UNION="union",r.ARGUMENT="argument",r.FIELD="field"})(bi||(bi={}));function fe(r,n){if(!!!r)throw new Error(n)}function Ct(r){return typeof r=="object"&&r!==null}function Kn(r,n){if(!!!r)throw new Error(n??"Unexpected invariant triggered.")}const q1=/\r\n|[\n\r]/g;function Na(r,n){let t=0,o=1;for(const s of r.body.matchAll(q1)){if(typeof s.index=="number"||Kn(!1),s.index>=n)break;t=s.index+s[0].length,o+=1}return{line:o,column:n+1-t}}function z1(r){return Qf(r.source,Na(r.source,r.start))}function Qf(r,n){const t=r.locationOffset.column-1,o="".padStart(t)+r.body,s=n.line-1,a=r.locationOffset.line-1,c=n.line+a,f=n.line===1?t:0,p=n.column+f,g=`${r.name}:${c}:${p}
`,b=o.split(/\r\n|[\n\r]/g),F=b[s];if(F.length>120){const w=Math.floor(p/80),S=p%80,O=[];for(let L=0;L<F.length;L+=80)O.push(F.slice(L,L+80));return g+cf([[`${c} |`,O[0]],...O.slice(1,w+1).map(L=>["|",L]),["|","^".padStart(S)],["|",O[w+1]]])}return g+cf([[`${c-1} |`,b[s-1]],[`${c} |`,F],["|","^".padStart(p)],[`${c+1} |`,b[s+1]]])}function cf(r){const n=r.filter(([o,s])=>s!==void 0),t=Math.max(...n.map(([o])=>o.length));return n.map(([o,s])=>o.padStart(t)+(s?" "+s:"")).join(`
`)}function Y1(r){const n=r[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:r[1],positions:r[2],path:r[3],originalError:r[4],extensions:r[5]}:n}class M extends Error{constructor(n,...t){var o,s,a;const{nodes:c,source:f,positions:p,path:g,originalError:b,extensions:F}=Y1(t);super(n),this.name="GraphQLError",this.path=g??void 0,this.originalError=b??void 0,this.nodes=lf(Array.isArray(c)?c:c?[c]:void 0);const w=lf((o=this.nodes)===null||o===void 0?void 0:o.map(O=>O.loc).filter(O=>O!=null));this.source=f??(w==null||(s=w[0])===null||s===void 0?void 0:s.source),this.positions=p??(w==null?void 0:w.map(O=>O.start)),this.locations=p&&f?p.map(O=>Na(f,O)):w==null?void 0:w.map(O=>Na(O.source,O.start));const S=Ct(b==null?void 0:b.extensions)?b==null?void 0:b.extensions:void 0;this.extensions=(a=F??S)!==null&&a!==void 0?a:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),b!=null&&b.stack?Object.defineProperty(this,"stack",{value:b.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,M):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+z1(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+Qf(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function lf(r){return r===void 0||r.length===0?void 0:r}function Je(r,n,t){return new M(`Syntax Error: ${t}`,{source:r,positions:[n]})}class W1{constructor(n,t,o){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=o}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Jf{constructor(n,t,o,s,a,c){this.kind=n,this.start=t,this.end=o,this.line=s,this.column=a,this.value=c,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Hf={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},Q1=new Set(Object.keys(Hf));function ff(r){const n=r==null?void 0:r.kind;return typeof n=="string"&&Q1.has(n)}var Pn;(function(r){r.QUERY="query",r.MUTATION="mutation",r.SUBSCRIPTION="subscription"})(Pn||(Pn={}));var Y;(function(r){r.QUERY="QUERY",r.MUTATION="MUTATION",r.SUBSCRIPTION="SUBSCRIPTION",r.FIELD="FIELD",r.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",r.FRAGMENT_SPREAD="FRAGMENT_SPREAD",r.INLINE_FRAGMENT="INLINE_FRAGMENT",r.VARIABLE_DEFINITION="VARIABLE_DEFINITION",r.SCHEMA="SCHEMA",r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.FIELD_DEFINITION="FIELD_DEFINITION",r.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.ENUM_VALUE="ENUM_VALUE",r.INPUT_OBJECT="INPUT_OBJECT",r.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(Y||(Y={}));var E;(function(r){r.NAME="Name",r.DOCUMENT="Document",r.OPERATION_DEFINITION="OperationDefinition",r.VARIABLE_DEFINITION="VariableDefinition",r.SELECTION_SET="SelectionSet",r.FIELD="Field",r.ARGUMENT="Argument",r.FRAGMENT_SPREAD="FragmentSpread",r.INLINE_FRAGMENT="InlineFragment",r.FRAGMENT_DEFINITION="FragmentDefinition",r.VARIABLE="Variable",r.INT="IntValue",r.FLOAT="FloatValue",r.STRING="StringValue",r.BOOLEAN="BooleanValue",r.NULL="NullValue",r.ENUM="EnumValue",r.LIST="ListValue",r.OBJECT="ObjectValue",r.OBJECT_FIELD="ObjectField",r.DIRECTIVE="Directive",r.NAMED_TYPE="NamedType",r.LIST_TYPE="ListType",r.NON_NULL_TYPE="NonNullType",r.SCHEMA_DEFINITION="SchemaDefinition",r.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",r.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",r.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",r.FIELD_DEFINITION="FieldDefinition",r.INPUT_VALUE_DEFINITION="InputValueDefinition",r.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",r.UNION_TYPE_DEFINITION="UnionTypeDefinition",r.ENUM_TYPE_DEFINITION="EnumTypeDefinition",r.ENUM_VALUE_DEFINITION="EnumValueDefinition",r.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",r.DIRECTIVE_DEFINITION="DirectiveDefinition",r.SCHEMA_EXTENSION="SchemaExtension",r.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",r.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",r.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",r.UNION_TYPE_EXTENSION="UnionTypeExtension",r.ENUM_TYPE_EXTENSION="EnumTypeExtension",r.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(E||(E={}));function wa(r){return r===9||r===32}function yi(r){return r>=48&&r<=57}function Xf(r){return r>=97&&r<=122||r>=65&&r<=90}function Ha(r){return Xf(r)||r===95}function Zf(r){return Xf(r)||yi(r)||r===95}function J1(r){var n;let t=Number.MAX_SAFE_INTEGER,o=null,s=-1;for(let c=0;c<r.length;++c){var a;const f=r[c],p=H1(f);p!==f.length&&(o=(a=o)!==null&&a!==void 0?a:c,s=c,c!==0&&p<t&&(t=p))}return r.map((c,f)=>f===0?c:c.slice(t)).slice((n=o)!==null&&n!==void 0?n:0,s+1)}function H1(r){let n=0;for(;n<r.length&&wa(r.charCodeAt(n));)++n;return n}function X1(r,n){const t=r.replace(/"""/g,'\\"""'),o=t.split(/\r\n|[\n\r]/g),s=o.length===1,a=o.length>1&&o.slice(1).every(S=>S.length===0||wa(S.charCodeAt(0))),c=t.endsWith('\\"""'),f=r.endsWith('"')&&!c,p=r.endsWith("\\"),g=f||p,b=!s||r.length>70||g||a||c;let F="";const w=s&&wa(r.charCodeAt(0));return(b&&!w||a)&&(F+=`
`),F+=t,(b||g)&&(F+=`
`),'"""'+F+'"""'}var R;(function(r){r.SOF="<SOF>",r.EOF="<EOF>",r.BANG="!",r.DOLLAR="$",r.AMP="&",r.PAREN_L="(",r.PAREN_R=")",r.SPREAD="...",r.COLON=":",r.EQUALS="=",r.AT="@",r.BRACKET_L="[",r.BRACKET_R="]",r.BRACE_L="{",r.PIPE="|",r.BRACE_R="}",r.NAME="Name",r.INT="Int",r.FLOAT="Float",r.STRING="String",r.BLOCK_STRING="BlockString",r.COMMENT="Comment"})(R||(R={}));class Z1{constructor(n){const t=new Jf(R.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==R.EOF)do if(n.next)n=n.next;else{const t=eE(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===R.COMMENT);return n}}function K1(r){return r===R.BANG||r===R.DOLLAR||r===R.AMP||r===R.PAREN_L||r===R.PAREN_R||r===R.SPREAD||r===R.COLON||r===R.EQUALS||r===R.AT||r===R.BRACKET_L||r===R.BRACKET_R||r===R.BRACE_L||r===R.PIPE||r===R.BRACE_R}function Pr(r){return r>=0&&r<=55295||r>=57344&&r<=1114111}function zs(r,n){return Kf(r.charCodeAt(n))&&ep(r.charCodeAt(n+1))}function Kf(r){return r>=55296&&r<=56319}function ep(r){return r>=56320&&r<=57343}function _r(r,n){const t=r.source.body.codePointAt(n);if(t===void 0)return R.EOF;if(t>=32&&t<=126){const o=String.fromCodePoint(t);return o==='"'?`'"'`:`"${o}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function je(r,n,t,o,s){const a=r.line,c=1+t-r.lineStart;return new Jf(n,t,o,a,c,s)}function eE(r,n){const t=r.source.body,o=t.length;let s=n;for(;s<o;){const a=t.charCodeAt(s);switch(a){case 65279:case 9:case 32:case 44:++s;continue;case 10:++s,++r.line,r.lineStart=s;continue;case 13:t.charCodeAt(s+1)===10?s+=2:++s,++r.line,r.lineStart=s;continue;case 35:return nE(r,s);case 33:return je(r,R.BANG,s,s+1);case 36:return je(r,R.DOLLAR,s,s+1);case 38:return je(r,R.AMP,s,s+1);case 40:return je(r,R.PAREN_L,s,s+1);case 41:return je(r,R.PAREN_R,s,s+1);case 46:if(t.charCodeAt(s+1)===46&&t.charCodeAt(s+2)===46)return je(r,R.SPREAD,s,s+3);break;case 58:return je(r,R.COLON,s,s+1);case 61:return je(r,R.EQUALS,s,s+1);case 64:return je(r,R.AT,s,s+1);case 91:return je(r,R.BRACKET_L,s,s+1);case 93:return je(r,R.BRACKET_R,s,s+1);case 123:return je(r,R.BRACE_L,s,s+1);case 124:return je(r,R.PIPE,s,s+1);case 125:return je(r,R.BRACE_R,s,s+1);case 34:return t.charCodeAt(s+1)===34&&t.charCodeAt(s+2)===34?aE(r,s):rE(r,s)}if(yi(a)||a===45)return tE(r,s,a);if(Ha(a))return uE(r,s);throw Je(r.source,s,a===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Pr(a)||zs(t,s)?`Unexpected character: ${_r(r,s)}.`:`Invalid character: ${_r(r,s)}.`)}return je(r,R.EOF,o,o)}function nE(r,n){const t=r.source.body,o=t.length;let s=n+1;for(;s<o;){const a=t.charCodeAt(s);if(a===10||a===13)break;if(Pr(a))++s;else if(zs(t,s))s+=2;else break}return je(r,R.COMMENT,n,s,t.slice(n+1,s))}function tE(r,n,t){const o=r.source.body;let s=n,a=t,c=!1;if(a===45&&(a=o.charCodeAt(++s)),a===48){if(a=o.charCodeAt(++s),yi(a))throw Je(r.source,s,`Invalid number, unexpected digit after 0: ${_r(r,s)}.`)}else s=Ea(r,s,a),a=o.charCodeAt(s);if(a===46&&(c=!0,a=o.charCodeAt(++s),s=Ea(r,s,a),a=o.charCodeAt(s)),(a===69||a===101)&&(c=!0,a=o.charCodeAt(++s),(a===43||a===45)&&(a=o.charCodeAt(++s)),s=Ea(r,s,a),a=o.charCodeAt(s)),a===46||Ha(a))throw Je(r.source,s,`Invalid number, expected digit but got: ${_r(r,s)}.`);return je(r,c?R.FLOAT:R.INT,n,s,o.slice(n,s))}function Ea(r,n,t){if(!yi(t))throw Je(r.source,n,`Invalid number, expected digit but got: ${_r(r,n)}.`);const o=r.source.body;let s=n+1;for(;yi(o.charCodeAt(s));)++s;return s}function rE(r,n){const t=r.source.body,o=t.length;let s=n+1,a=s,c="";for(;s<o;){const f=t.charCodeAt(s);if(f===34)return c+=t.slice(a,s),je(r,R.STRING,n,s+1,c);if(f===92){c+=t.slice(a,s);const p=t.charCodeAt(s+1)===117?t.charCodeAt(s+2)===123?iE(r,s):sE(r,s):oE(r,s);c+=p.value,s+=p.size,a=s;continue}if(f===10||f===13)break;if(Pr(f))++s;else if(zs(t,s))s+=2;else throw Je(r.source,s,`Invalid character within String: ${_r(r,s)}.`)}throw Je(r.source,s,"Unterminated string.")}function iE(r,n){const t=r.source.body;let o=0,s=3;for(;s<12;){const a=t.charCodeAt(n+s++);if(a===125){if(s<5||!Pr(o))break;return{value:String.fromCodePoint(o),size:s}}if(o=o<<4|pi(a),o<0)break}throw Je(r.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+s)}".`)}function sE(r,n){const t=r.source.body,o=pf(t,n+2);if(Pr(o))return{value:String.fromCodePoint(o),size:6};if(Kf(o)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const s=pf(t,n+8);if(ep(s))return{value:String.fromCodePoint(o,s),size:12}}throw Je(r.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function pf(r,n){return pi(r.charCodeAt(n))<<12|pi(r.charCodeAt(n+1))<<8|pi(r.charCodeAt(n+2))<<4|pi(r.charCodeAt(n+3))}function pi(r){return r>=48&&r<=57?r-48:r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:-1}function oE(r,n){const t=r.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Je(r.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function aE(r,n){const t=r.source.body,o=t.length;let s=r.lineStart,a=n+3,c=a,f="";const p=[];for(;a<o;){const g=t.charCodeAt(a);if(g===34&&t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34){f+=t.slice(c,a),p.push(f);const b=je(r,R.BLOCK_STRING,n,a+3,J1(p).join(`
`));return r.line+=p.length-1,r.lineStart=s,b}if(g===92&&t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34&&t.charCodeAt(a+3)===34){f+=t.slice(c,a),c=a+1,a+=4;continue}if(g===10||g===13){f+=t.slice(c,a),p.push(f),g===13&&t.charCodeAt(a+1)===10?a+=2:++a,f="",c=a,s=a;continue}if(Pr(g))++a;else if(zs(t,a))a+=2;else throw Je(r.source,a,`Invalid character within String: ${_r(r,a)}.`)}throw Je(r.source,a,"Unterminated string.")}function uE(r,n){const t=r.source.body,o=t.length;let s=n+1;for(;s<o;){const a=t.charCodeAt(s);if(Zf(a))++s;else break}return je(r,R.NAME,n,s,t.slice(n,s))}const cE=10,np=2;function P(r){return Ys(r,[])}function Ys(r,n){switch(typeof r){case"string":return JSON.stringify(r);case"function":return r.name?`[function ${r.name}]`:"[function]";case"object":return lE(r,n);default:return String(r)}}function lE(r,n){if(r===null)return"null";if(n.includes(r))return"[Circular]";const t=[...n,r];if(fE(r)){const o=r.toJSON();if(o!==r)return typeof o=="string"?o:Ys(o,t)}else if(Array.isArray(r))return _E(r,t);return pE(r,t)}function fE(r){return typeof r.toJSON=="function"}function pE(r,n){const t=Object.entries(r);return t.length===0?"{}":n.length>np?"["+dE(r)+"]":"{ "+t.map(([s,a])=>s+": "+Ys(a,n)).join(", ")+" }"}function _E(r,n){if(r.length===0)return"[]";if(n.length>np)return"[Array]";const t=Math.min(cE,r.length),o=r.length-t,s=[];for(let a=0;a<t;++a)s.push(Ys(r[a],n));return o===1?s.push("... 1 more item"):o>1&&s.push(`... ${o} more items`),"["+s.join(", ")+"]"}function dE(r){const n=Object.prototype.toString.call(r).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof r.constructor=="function"){const t=r.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const hE=globalThis.process&&!0,dt=hE?function(n,t){return n instanceof t}:function(n,t){if(n instanceof t)return!0;if(typeof n=="object"&&n!==null){var o;const s=t.prototype[Symbol.toStringTag],a=Symbol.toStringTag in n?n[Symbol.toStringTag]:(o=n.constructor)===null||o===void 0?void 0:o.name;if(s===a){const c=P(n);throw new Error(`Cannot use ${s} "${c}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class tp{constructor(n,t="GraphQL request",o={line:1,column:1}){typeof n=="string"||fe(!1,`Body must be a string. Received: ${P(n)}.`),this.body=n,this.name=t,this.locationOffset=o,this.locationOffset.line>0||fe(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||fe(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function gE(r){return dt(r,tp)}function bE(r,n){return new rp(r,n).parseDocument()}function mE(r,n){const t=new rp(r,n);t.expectToken(R.SOF);const o=t.parseValueLiteral(!1);return t.expectToken(R.EOF),o}class rp{constructor(n,t={}){const o=gE(n)?n:new tp(n);this._lexer=new Z1(o),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(R.NAME);return this.node(n,{kind:E.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:E.DOCUMENT,definitions:this.many(R.SOF,this.parseDefinition,R.EOF)})}parseDefinition(){if(this.peek(R.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===R.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw Je(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(R.BRACE_L))return this.node(n,{kind:E.OPERATION_DEFINITION,operation:Pn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let o;return this.peek(R.NAME)&&(o=this.parseName()),this.node(n,{kind:E.OPERATION_DEFINITION,operation:t,name:o,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(R.NAME);switch(n.value){case"query":return Pn.QUERY;case"mutation":return Pn.MUTATION;case"subscription":return Pn.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(R.PAREN_L,this.parseVariableDefinition,R.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:E.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(R.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(R.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(R.DOLLAR),this.node(n,{kind:E.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:E.SELECTION_SET,selections:this.many(R.BRACE_L,this.parseSelection,R.BRACE_R)})}parseSelection(){return this.peek(R.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let o,s;return this.expectOptionalToken(R.COLON)?(o=t,s=this.parseName()):s=t,this.node(n,{kind:E.FIELD,alias:o,name:s,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(R.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(R.PAREN_L,t,R.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,o=this.parseName();return this.expectToken(R.COLON),this.node(t,{kind:E.ARGUMENT,name:o,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(R.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(R.NAME)?this.node(n,{kind:E.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:E.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:E.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:E.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case R.BRACKET_L:return this.parseList(n);case R.BRACE_L:return this.parseObject(n);case R.INT:return this.advanceLexer(),this.node(t,{kind:E.INT,value:t.value});case R.FLOAT:return this.advanceLexer(),this.node(t,{kind:E.FLOAT,value:t.value});case R.STRING:case R.BLOCK_STRING:return this.parseStringLiteral();case R.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:E.BOOLEAN,value:!0});case"false":return this.node(t,{kind:E.BOOLEAN,value:!1});case"null":return this.node(t,{kind:E.NULL});default:return this.node(t,{kind:E.ENUM,value:t.value})}case R.DOLLAR:if(n)if(this.expectToken(R.DOLLAR),this._lexer.token.kind===R.NAME){const o=this._lexer.token.value;throw Je(this._lexer.source,t.start,`Unexpected variable "$${o}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:E.STRING,value:n.value,block:n.kind===R.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:E.LIST,values:this.any(R.BRACKET_L,t,R.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:E.OBJECT,fields:this.any(R.BRACE_L,t,R.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,o=this.parseName();return this.expectToken(R.COLON),this.node(t,{kind:E.OBJECT_FIELD,name:o,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(R.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(R.AT),this.node(t,{kind:E.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(R.BRACKET_L)){const o=this.parseTypeReference();this.expectToken(R.BRACKET_R),t=this.node(n,{kind:E.LIST_TYPE,type:o})}else t=this.parseNamedType();return this.expectOptionalToken(R.BANG)?this.node(n,{kind:E.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:E.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(R.STRING)||this.peek(R.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const o=this.parseConstDirectives(),s=this.many(R.BRACE_L,this.parseOperationTypeDefinition,R.BRACE_R);return this.node(n,{kind:E.SCHEMA_DEFINITION,description:t,directives:o,operationTypes:s})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(R.COLON);const o=this.parseNamedType();return this.node(n,{kind:E.OPERATION_TYPE_DEFINITION,operation:t,type:o})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const o=this.parseName(),s=this.parseConstDirectives();return this.node(n,{kind:E.SCALAR_TYPE_DEFINITION,description:t,name:o,directives:s})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const o=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(n,{kind:E.OBJECT_TYPE_DEFINITION,description:t,name:o,interfaces:s,directives:a,fields:c})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(R.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(R.BRACE_L,this.parseFieldDefinition,R.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),o=this.parseName(),s=this.parseArgumentDefs();this.expectToken(R.COLON);const a=this.parseTypeReference(),c=this.parseConstDirectives();return this.node(n,{kind:E.FIELD_DEFINITION,description:t,name:o,arguments:s,type:a,directives:c})}parseArgumentDefs(){return this.optionalMany(R.PAREN_L,this.parseInputValueDef,R.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),o=this.parseName();this.expectToken(R.COLON);const s=this.parseTypeReference();let a;this.expectOptionalToken(R.EQUALS)&&(a=this.parseConstValueLiteral());const c=this.parseConstDirectives();return this.node(n,{kind:E.INPUT_VALUE_DEFINITION,description:t,name:o,type:s,defaultValue:a,directives:c})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const o=this.parseName(),s=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(n,{kind:E.INTERFACE_TYPE_DEFINITION,description:t,name:o,interfaces:s,directives:a,fields:c})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const o=this.parseName(),s=this.parseConstDirectives(),a=this.parseUnionMemberTypes();return this.node(n,{kind:E.UNION_TYPE_DEFINITION,description:t,name:o,directives:s,types:a})}parseUnionMemberTypes(){return this.expectOptionalToken(R.EQUALS)?this.delimitedMany(R.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const o=this.parseName(),s=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();return this.node(n,{kind:E.ENUM_TYPE_DEFINITION,description:t,name:o,directives:s,values:a})}parseEnumValuesDefinition(){return this.optionalMany(R.BRACE_L,this.parseEnumValueDefinition,R.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),o=this.parseEnumValueName(),s=this.parseConstDirectives();return this.node(n,{kind:E.ENUM_VALUE_DEFINITION,description:t,name:o,directives:s})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Je(this._lexer.source,this._lexer.token.start,`${vs(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const o=this.parseName(),s=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();return this.node(n,{kind:E.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:o,directives:s,fields:a})}parseInputFieldsDefinition(){return this.optionalMany(R.BRACE_L,this.parseInputValueDef,R.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===R.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),o=this.optionalMany(R.BRACE_L,this.parseOperationTypeDefinition,R.BRACE_R);if(t.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:E.SCHEMA_EXTENSION,directives:t,operationTypes:o})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),o=this.parseConstDirectives();if(o.length===0)throw this.unexpected();return this.node(n,{kind:E.SCALAR_TYPE_EXTENSION,name:t,directives:o})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),o=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(o.length===0&&s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:E.OBJECT_TYPE_EXTENSION,name:t,interfaces:o,directives:s,fields:a})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),o=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(o.length===0&&s.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:E.INTERFACE_TYPE_EXTENSION,name:t,interfaces:o,directives:s,fields:a})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),o=this.parseConstDirectives(),s=this.parseUnionMemberTypes();if(o.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:E.UNION_TYPE_EXTENSION,name:t,directives:o,types:s})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),o=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();if(o.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:E.ENUM_TYPE_EXTENSION,name:t,directives:o,values:s})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),o=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();if(o.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:E.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:o,fields:s})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(R.AT);const o=this.parseName(),s=this.parseArgumentDefs(),a=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const c=this.parseDirectiveLocations();return this.node(n,{kind:E.DIRECTIVE_DEFINITION,description:t,name:o,arguments:s,repeatable:a,locations:c})}parseDirectiveLocations(){return this.delimitedMany(R.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(Y,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new W1(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw Je(this._lexer.source,t.start,`Expected ${ip(n)}, found ${vs(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===R.NAME&&t.value===n)this.advanceLexer();else throw Je(this._lexer.source,t.start,`Expected "${n}", found ${vs(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===R.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return Je(this._lexer.source,t.start,`Unexpected ${vs(t)}.`)}any(n,t,o){this.expectToken(n);const s=[];for(;!this.expectOptionalToken(o);)s.push(t.call(this));return s}optionalMany(n,t,o){if(this.expectOptionalToken(n)){const s=[];do s.push(t.call(this));while(!this.expectOptionalToken(o));return s}return[]}many(n,t,o){this.expectToken(n);const s=[];do s.push(t.call(this));while(!this.expectOptionalToken(o));return s}delimitedMany(n,t){this.expectOptionalToken(n);const o=[];do o.push(t.call(this));while(this.expectOptionalToken(n));return o}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==R.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw Je(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function vs(r){const n=r.value;return ip(r.kind)+(n!=null?` "${n}"`:"")}function ip(r){return K1(r)?`"${r}"`:r}const FE=5;function Ht(r,n){const[t,o]=n?[r,n]:[void 0,r];let s=" Did you mean ";t&&(s+=t+" ");const a=o.map(p=>`"${p}"`);switch(a.length){case 0:return"";case 1:return s+a[0]+"?";case 2:return s+a[0]+" or "+a[1]+"?"}const c=a.slice(0,FE),f=c.pop();return s+c.join(", ")+", or "+f+"?"}function _f(r){return r}function dr(r,n){const t=Object.create(null);for(const o of r)t[n(o)]=o;return t}function lr(r,n,t){const o=Object.create(null);for(const s of r)o[n(s)]=t(s);return o}function Tt(r,n){const t=Object.create(null);for(const o of Object.keys(r))t[o]=n(r[o],o);return t}function Xa(r,n){let t=0,o=0;for(;t<r.length&&o<n.length;){let s=r.charCodeAt(t),a=n.charCodeAt(o);if(Ss(s)&&Ss(a)){let c=0;do++t,c=c*10+s-Ca,s=r.charCodeAt(t);while(Ss(s)&&c>0);let f=0;do++o,f=f*10+a-Ca,a=n.charCodeAt(o);while(Ss(a)&&f>0);if(c<f)return-1;if(c>f)return 1}else{if(s<a)return-1;if(s>a)return 1;++t,++o}}return r.length-n.length}const Ca=48,DE=57;function Ss(r){return!isNaN(r)&&Ca<=r&&r<=DE}function mr(r,n){const t=Object.create(null),o=new EE(r),s=Math.floor(r.length*.4)+1;for(const a of n){const c=o.measure(a,s);c!==void 0&&(t[a]=c)}return Object.keys(t).sort((a,c)=>{const f=t[a]-t[c];return f!==0?f:Xa(a,c)})}class EE{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=df(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const o=n.toLowerCase();if(this._inputLowerCase===o)return 1;let s=df(o),a=this._inputArray;if(s.length<a.length){const b=s;s=a,a=b}const c=s.length,f=a.length;if(c-f>t)return;const p=this._rows;for(let b=0;b<=f;b++)p[0][b]=b;for(let b=1;b<=c;b++){const F=p[(b-1)%3],w=p[b%3];let S=w[0]=b;for(let O=1;O<=f;O++){const L=s[b-1]===a[O-1]?0:1;let z=Math.min(F[O]+1,w[O-1]+1,F[O-1]+L);if(b>1&&O>1&&s[b-1]===a[O-2]&&s[b-2]===a[O-1]){const le=p[(b-2)%3][O-2];z=Math.min(z,le+1)}z<S&&(S=z),w[O]=z}if(S>t)return}const g=p[c%3][f];return g<=t?g:void 0}}function df(r){const n=r.length,t=new Array(n);for(let o=0;o<n;++o)t[o]=r.charCodeAt(o);return t}function Gn(r){if(r==null)return Object.create(null);if(Object.getPrototypeOf(r)===null)return r;const n=Object.create(null);for(const[t,o]of Object.entries(r))n[t]=o;return n}function yE(r){return`"${r.replace(AE,vE)}"`}const AE=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function vE(r){return SE[r.charCodeAt(0)]}const SE=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],_i=Object.freeze({});function sp(r,n,t=Hf){const o=new Map;for(const le of Object.values(E))o.set(le,op(n,le));let s,a=Array.isArray(r),c=[r],f=-1,p=[],g=r,b,F;const w=[],S=[];do{f++;const le=f===c.length,Te=le&&p.length!==0;if(le){if(b=S.length===0?void 0:w[w.length-1],g=F,F=S.pop(),Te)if(a){g=g.slice();let we=0;for(const[ke,on]of p){const en=ke-we;on===null?(g.splice(en,1),we++):g[en]=on}}else{g=Object.defineProperties({},Object.getOwnPropertyDescriptors(g));for(const[we,ke]of p)g[we]=ke}f=s.index,c=s.keys,p=s.edits,a=s.inArray,s=s.prev}else if(F){if(b=a?f:c[f],g=F[b],g==null)continue;w.push(b)}let ge;if(!Array.isArray(g)){var O,L;ff(g)||fe(!1,`Invalid AST Node: ${P(g)}.`);const we=le?(O=o.get(g.kind))===null||O===void 0?void 0:O.leave:(L=o.get(g.kind))===null||L===void 0?void 0:L.enter;if(ge=we==null?void 0:we.call(n,g,b,F,w,S),ge===_i)break;if(ge===!1){if(!le){w.pop();continue}}else if(ge!==void 0&&(p.push([b,ge]),!le))if(ff(ge))g=ge;else{w.pop();continue}}if(ge===void 0&&Te&&p.push([b,g]),le)w.pop();else{var z;s={inArray:a,index:f,keys:c,edits:p,prev:s},a=Array.isArray(g),c=a?g:(z=t[g.kind])!==null&&z!==void 0?z:[],f=-1,p=[],F&&S.push(F),F=g}}while(s!==void 0);return p.length!==0?p[p.length-1][1]:r}function TE(r){const n=new Array(r.length).fill(null),t=Object.create(null);for(const o of Object.values(E)){let s=!1;const a=new Array(r.length).fill(void 0),c=new Array(r.length).fill(void 0);for(let p=0;p<r.length;++p){const{enter:g,leave:b}=op(r[p],o);s||(s=g!=null||b!=null),a[p]=g,c[p]=b}if(!s)continue;const f={enter(...p){const g=p[0];for(let F=0;F<r.length;F++)if(n[F]===null){var b;const w=(b=a[F])===null||b===void 0?void 0:b.apply(r[F],p);if(w===!1)n[F]=g;else if(w===_i)n[F]=_i;else if(w!==void 0)return w}},leave(...p){const g=p[0];for(let F=0;F<r.length;F++)if(n[F]===null){var b;const w=(b=c[F])===null||b===void 0?void 0:b.apply(r[F],p);if(w===_i)n[F]=_i;else if(w!==void 0&&w!==!1)return w}else n[F]===g&&(n[F]=null)}};t[o]=f}return t}function op(r,n){const t=r[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:r.enter,leave:r.leave}}function He(r){return sp(r,OE)}const IE=80,OE={Name:{leave:r=>r.value},Variable:{leave:r=>"$"+r.name},Document:{leave:r=>j(r.definitions,`

`)},OperationDefinition:{leave(r){const n=ue("(",j(r.variableDefinitions,", "),")"),t=j([r.operation,j([r.name,n]),j(r.directives," ")]," ");return(t==="query"?"":t+" ")+r.selectionSet}},VariableDefinition:{leave:({variable:r,type:n,defaultValue:t,directives:o})=>r+": "+n+ue(" = ",t)+ue(" ",j(o," "))},SelectionSet:{leave:({selections:r})=>Jn(r)},Field:{leave({alias:r,name:n,arguments:t,directives:o,selectionSet:s}){const a=ue("",r,": ")+n;let c=a+ue("(",j(t,", "),")");return c.length>IE&&(c=a+ue(`(
`,Os(j(t,`
`)),`
)`)),j([c,j(o," "),s]," ")}},Argument:{leave:({name:r,value:n})=>r+": "+n},FragmentSpread:{leave:({name:r,directives:n})=>"..."+r+ue(" ",j(n," "))},InlineFragment:{leave:({typeCondition:r,directives:n,selectionSet:t})=>j(["...",ue("on ",r),j(n," "),t]," ")},FragmentDefinition:{leave:({name:r,typeCondition:n,variableDefinitions:t,directives:o,selectionSet:s})=>`fragment ${r}${ue("(",j(t,", "),")")} on ${n} ${ue("",j(o," ")," ")}`+s},IntValue:{leave:({value:r})=>r},FloatValue:{leave:({value:r})=>r},StringValue:{leave:({value:r,block:n})=>n?X1(r):yE(r)},BooleanValue:{leave:({value:r})=>r?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:r})=>r},ListValue:{leave:({values:r})=>"["+j(r,", ")+"]"},ObjectValue:{leave:({fields:r})=>"{"+j(r,", ")+"}"},ObjectField:{leave:({name:r,value:n})=>r+": "+n},Directive:{leave:({name:r,arguments:n})=>"@"+r+ue("(",j(n,", "),")")},NamedType:{leave:({name:r})=>r},ListType:{leave:({type:r})=>"["+r+"]"},NonNullType:{leave:({type:r})=>r+"!"},SchemaDefinition:{leave:({description:r,directives:n,operationTypes:t})=>ue("",r,`
`)+j(["schema",j(n," "),Jn(t)]," ")},OperationTypeDefinition:{leave:({operation:r,type:n})=>r+": "+n},ScalarTypeDefinition:{leave:({description:r,name:n,directives:t})=>ue("",r,`
`)+j(["scalar",n,j(t," ")]," ")},ObjectTypeDefinition:{leave:({description:r,name:n,interfaces:t,directives:o,fields:s})=>ue("",r,`
`)+j(["type",n,ue("implements ",j(t," & ")),j(o," "),Jn(s)]," ")},FieldDefinition:{leave:({description:r,name:n,arguments:t,type:o,directives:s})=>ue("",r,`
`)+n+(hf(t)?ue(`(
`,Os(j(t,`
`)),`
)`):ue("(",j(t,", "),")"))+": "+o+ue(" ",j(s," "))},InputValueDefinition:{leave:({description:r,name:n,type:t,defaultValue:o,directives:s})=>ue("",r,`
`)+j([n+": "+t,ue("= ",o),j(s," ")]," ")},InterfaceTypeDefinition:{leave:({description:r,name:n,interfaces:t,directives:o,fields:s})=>ue("",r,`
`)+j(["interface",n,ue("implements ",j(t," & ")),j(o," "),Jn(s)]," ")},UnionTypeDefinition:{leave:({description:r,name:n,directives:t,types:o})=>ue("",r,`
`)+j(["union",n,j(t," "),ue("= ",j(o," | "))]," ")},EnumTypeDefinition:{leave:({description:r,name:n,directives:t,values:o})=>ue("",r,`
`)+j(["enum",n,j(t," "),Jn(o)]," ")},EnumValueDefinition:{leave:({description:r,name:n,directives:t})=>ue("",r,`
`)+j([n,j(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:r,name:n,directives:t,fields:o})=>ue("",r,`
`)+j(["input",n,j(t," "),Jn(o)]," ")},DirectiveDefinition:{leave:({description:r,name:n,arguments:t,repeatable:o,locations:s})=>ue("",r,`
`)+"directive @"+n+(hf(t)?ue(`(
`,Os(j(t,`
`)),`
)`):ue("(",j(t,", "),")"))+(o?" repeatable":"")+" on "+j(s," | ")},SchemaExtension:{leave:({directives:r,operationTypes:n})=>j(["extend schema",j(r," "),Jn(n)]," ")},ScalarTypeExtension:{leave:({name:r,directives:n})=>j(["extend scalar",r,j(n," ")]," ")},ObjectTypeExtension:{leave:({name:r,interfaces:n,directives:t,fields:o})=>j(["extend type",r,ue("implements ",j(n," & ")),j(t," "),Jn(o)]," ")},InterfaceTypeExtension:{leave:({name:r,interfaces:n,directives:t,fields:o})=>j(["extend interface",r,ue("implements ",j(n," & ")),j(t," "),Jn(o)]," ")},UnionTypeExtension:{leave:({name:r,directives:n,types:t})=>j(["extend union",r,j(n," "),ue("= ",j(t," | "))]," ")},EnumTypeExtension:{leave:({name:r,directives:n,values:t})=>j(["extend enum",r,j(n," "),Jn(t)]," ")},InputObjectTypeExtension:{leave:({name:r,directives:n,fields:t})=>j(["extend input",r,j(n," "),Jn(t)]," ")}};function j(r,n=""){var t;return(t=r==null?void 0:r.filter(o=>o).join(n))!==null&&t!==void 0?t:""}function Jn(r){return ue(`{
`,Os(j(r,`
`)),`
}`)}function ue(r,n,t=""){return n!=null&&n!==""?r+n+t:""}function Os(r){return ue("  ",r.replace(/\n/g,`
  `))}function hf(r){var n;return(n=r==null?void 0:r.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function Ra(r,n){switch(r.kind){case E.NULL:return null;case E.INT:return parseInt(r.value,10);case E.FLOAT:return parseFloat(r.value);case E.STRING:case E.ENUM:case E.BOOLEAN:return r.value;case E.LIST:return r.values.map(t=>Ra(t,n));case E.OBJECT:return lr(r.fields,t=>t.name.value,t=>Ra(t.value,n));case E.VARIABLE:return n==null?void 0:n[r.name.value]}}function st(r){if(r!=null||fe(!1,"Must provide name."),typeof r=="string"||fe(!1,"Expected name to be a string."),r.length===0)throw new M("Expected name to be a non-empty string.");for(let n=1;n<r.length;++n)if(!Zf(r.charCodeAt(n)))throw new M(`Names must only contain [_a-zA-Z0-9] but "${r}" does not.`);if(!Ha(r.charCodeAt(0)))throw new M(`Names must start with [_a-zA-Z] but "${r}" does not.`);return r}function NE(r){if(r==="true"||r==="false"||r==="null")throw new M(`Enum values cannot be named: ${r}`);return st(r)}function Za(r){return Xt(r)||ze(r)||Ve(r)||$n(r)||et(r)||mn(r)||Fn(r)||Se(r)}function Xt(r){return dt(r,Rt)}function ze(r){return dt(r,pt)}function wE(r){if(!ze(r))throw new Error(`Expected ${P(r)} to be a GraphQL Object type.`);return r}function Ve(r){return dt(r,ks)}function CE(r){if(!Ve(r))throw new Error(`Expected ${P(r)} to be a GraphQL Interface type.`);return r}function $n(r){return dt(r,Ms)}function et(r){return dt(r,Br)}function mn(r){return dt(r,Ls)}function Fn(r){return dt(r,fn)}function Se(r){return dt(r,ie)}function Ka(r){return Xt(r)||et(r)||mn(r)||eu(r)&&Ka(r.ofType)}function ap(r){return Xt(r)||ze(r)||Ve(r)||$n(r)||et(r)||eu(r)&&ap(r.ofType)}function Ur(r){return Xt(r)||et(r)}function Ai(r){return ze(r)||Ve(r)||$n(r)}function fr(r){return Ve(r)||$n(r)}class fn{constructor(n){Za(n)||fe(!1,`Expected ${P(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class ie{constructor(n){up(n)||fe(!1,`Expected ${P(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function eu(r){return Fn(r)||Se(r)}function up(r){return Za(r)&&!Se(r)}function RE(r){if(!up(r))throw new Error(`Expected ${P(r)} to be a GraphQL nullable type.`);return r}function xE(r){if(r)return Se(r)?r.ofType:r}function LA(r){return Xt(r)||ze(r)||Ve(r)||$n(r)||et(r)||mn(r)}function hr(r){if(r){let n=r;for(;eu(n);)n=n.ofType;return n}}function cp(r){return typeof r=="function"?r():r}function lp(r){return typeof r=="function"?r():r}class Rt{constructor(n){var t,o,s,a;const c=(t=n.parseValue)!==null&&t!==void 0?t:_f;this.name=st(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(o=n.serialize)!==null&&o!==void 0?o:_f,this.parseValue=c,this.parseLiteral=(s=n.parseLiteral)!==null&&s!==void 0?s:(f,p)=>c(Ra(f,p)),this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(a=n.extensionASTNodes)!==null&&a!==void 0?a:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||fe(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${P(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||fe(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||fe(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class pt{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>pp(n),this._interfaces=()=>fp(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||fe(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${P(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:dp(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function fp(r){var n;const t=cp((n=r.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||fe(!1,`${r.name} interfaces must be an Array or a function which returns an Array.`),t}function pp(r){const n=lp(r.fields);return Lr(n)||fe(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),Tt(n,(t,o)=>{var s;Lr(t)||fe(!1,`${r.name}.${o} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||fe(!1,`${r.name}.${o} field resolver must be a function if provided, but got: ${P(t.resolve)}.`);const a=(s=t.args)!==null&&s!==void 0?s:{};return Lr(a)||fe(!1,`${r.name}.${o} args must be an object with argument names as keys.`),{name:st(o),description:t.description,type:t.type,args:_p(a),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Gn(t.extensions),astNode:t.astNode}})}function _p(r){return Object.entries(r).map(([n,t])=>({name:st(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Gn(t.extensions),astNode:t.astNode}))}function Lr(r){return Ct(r)&&!Array.isArray(r)}function dp(r){return Tt(r,n=>({description:n.description,type:n.type,args:hp(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function hp(r){return lr(r,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function gp(r){return Se(r.type)&&r.defaultValue===void 0}class ks{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=pp.bind(void 0,n),this._interfaces=fp.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||fe(!1,`${this.name} must provide "resolveType" as a function, but got: ${P(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:dp(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Ms{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=kE.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||fe(!1,`${this.name} must provide "resolveType" as a function, but got: ${P(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function kE(r){const n=cp(r.types);return Array.isArray(n)||fe(!1,`Must provide Array of types or a function which returns such an array for Union ${r.name}.`),n}class Br{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=typeof n.values=="function"?n.values:gf(this.name,n.values),this._valueLookup=null,this._nameLookup=null}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return typeof this._values=="function"&&(this._values=gf(this.name,this._values())),this._values}getValue(n){return this._nameLookup===null&&(this._nameLookup=dr(this.getValues(),t=>t.name)),this._nameLookup[n]}serialize(n){this._valueLookup===null&&(this._valueLookup=new Map(this.getValues().map(o=>[o.value,o])));const t=this._valueLookup.get(n);if(t===void 0)throw new M(`Enum "${this.name}" cannot represent value: ${P(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const o=P(n);throw new M(`Enum "${this.name}" cannot represent non-string value: ${o}.`+Ts(this,o))}const t=this.getValue(n);if(t==null)throw new M(`Value "${n}" does not exist in "${this.name}" enum.`+Ts(this,n));return t.value}parseLiteral(n,t){if(n.kind!==E.ENUM){const s=He(n);throw new M(`Enum "${this.name}" cannot represent non-enum value: ${s}.`+Ts(this,s),{nodes:n})}const o=this.getValue(n.value);if(o==null){const s=He(n);throw new M(`Value "${s}" does not exist in "${this.name}" enum.`+Ts(this,s),{nodes:n})}return o.value}toConfig(){const n=lr(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Ts(r,n){const t=r.getValues().map(s=>s.name),o=mr(n,t);return Ht("the enum value",o)}function gf(r,n){return Lr(n)||fe(!1,`${r} values must be an object with value names as keys.`),Object.entries(n).map(([t,o])=>(Lr(o)||fe(!1,`${r}.${t} must refer to an object with a "value" key representing an internal value but got: ${P(o)}.`),{name:NE(t),description:o.description,value:o.value!==void 0?o.value:t,deprecationReason:o.deprecationReason,extensions:Gn(o.extensions),astNode:o.astNode}))}class Ls{constructor(n){var t,o;this.name=st(n.name),this.description=n.description,this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this.isOneOf=(o=n.isOneOf)!==null&&o!==void 0?o:!1,this._fields=ME.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=Tt(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,isOneOf:this.isOneOf}}toString(){return this.name}toJSON(){return this.toString()}}function ME(r){const n=lp(r.fields);return Lr(n)||fe(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),Tt(n,(t,o)=>(!("resolve"in t)||fe(!1,`${r.name}.${o} field has a resolve property, but Input Types cannot define resolvers.`),{name:st(o),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Gn(t.extensions),astNode:t.astNode}))}function LE(r){return Se(r.type)&&r.defaultValue===void 0}function mi(r,n,t){return n===t?!0:Se(t)?Se(n)?mi(r,n.ofType,t.ofType):!1:Se(n)?mi(r,n.ofType,t):Fn(t)?Fn(n)?mi(r,n.ofType,t.ofType):!1:Fn(n)?!1:fr(t)&&(Ve(n)||ze(n))&&r.isSubType(t,n)}function bf(r,n,t){return n===t?!0:fr(n)?fr(t)?r.getPossibleTypes(n).some(o=>r.isSubType(t,o)):r.isSubType(n,t):fr(t)?r.isSubType(t,n):!1}const ya=2147483647,Aa=-2147483648,UE=new Rt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(r){const n=Oi(r);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new M(`Int cannot represent non-integer value: ${P(n)}`);if(t>ya||t<Aa)throw new M("Int cannot represent non 32-bit signed integer value: "+P(n));return t},parseValue(r){if(typeof r!="number"||!Number.isInteger(r))throw new M(`Int cannot represent non-integer value: ${P(r)}`);if(r>ya||r<Aa)throw new M(`Int cannot represent non 32-bit signed integer value: ${r}`);return r},parseLiteral(r){if(r.kind!==E.INT)throw new M(`Int cannot represent non-integer value: ${He(r)}`,{nodes:r});const n=parseInt(r.value,10);if(n>ya||n<Aa)throw new M(`Int cannot represent non 32-bit signed integer value: ${r.value}`,{nodes:r});return n}}),BE=new Rt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(r){const n=Oi(r);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new M(`Float cannot represent non numeric value: ${P(n)}`);return t},parseValue(r){if(typeof r!="number"||!Number.isFinite(r))throw new M(`Float cannot represent non numeric value: ${P(r)}`);return r},parseLiteral(r){if(r.kind!==E.FLOAT&&r.kind!==E.INT)throw new M(`Float cannot represent non numeric value: ${He(r)}`,r);return parseFloat(r.value)}}),Ge=new Rt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(r){const n=Oi(r);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new M(`String cannot represent value: ${P(r)}`)},parseValue(r){if(typeof r!="string")throw new M(`String cannot represent a non string value: ${P(r)}`);return r},parseLiteral(r){if(r.kind!==E.STRING)throw new M(`String cannot represent a non string value: ${He(r)}`,{nodes:r});return r.value}}),On=new Rt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(r){const n=Oi(r);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new M(`Boolean cannot represent a non boolean value: ${P(n)}`)},parseValue(r){if(typeof r!="boolean")throw new M(`Boolean cannot represent a non boolean value: ${P(r)}`);return r},parseLiteral(r){if(r.kind!==E.BOOLEAN)throw new M(`Boolean cannot represent a non boolean value: ${He(r)}`,{nodes:r});return r.value}}),bp=new Rt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(r){const n=Oi(r);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new M(`ID cannot represent value: ${P(r)}`)},parseValue(r){if(typeof r=="string")return r;if(typeof r=="number"&&Number.isInteger(r))return r.toString();throw new M(`ID cannot represent value: ${P(r)}`)},parseLiteral(r){if(r.kind!==E.STRING&&r.kind!==E.INT)throw new M("ID cannot represent a non-string and non-integer value: "+He(r),{nodes:r});return r.value}}),Ws=Object.freeze([Ge,UE,BE,On,bp]);function PE(r){return Ws.some(({name:n})=>r.name===n)}function Oi(r){if(Ct(r)){if(typeof r.valueOf=="function"){const n=r.valueOf();if(!Ct(n))return n}if(typeof r.toJSON=="function")return r.toJSON()}return r}function $E(r){return dt(r,xt)}class xt{constructor(n){var t,o;this.name=st(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Gn(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||fe(!1,`@${n.name} locations must be an Array.`);const s=(o=n.args)!==null&&o!==void 0?o:{};Ct(s)&&!Array.isArray(s)||fe(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=_p(s)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:hp(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const mp=new xt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[Y.FIELD,Y.FRAGMENT_SPREAD,Y.INLINE_FRAGMENT],args:{if:{type:new ie(On),description:"Included when true."}}}),Fp=new xt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[Y.FIELD,Y.FRAGMENT_SPREAD,Y.INLINE_FRAGMENT],args:{if:{type:new ie(On),description:"Skipped when true."}}}),GE="No longer supported",Dp=new xt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[Y.FIELD_DEFINITION,Y.ARGUMENT_DEFINITION,Y.INPUT_FIELD_DEFINITION,Y.ENUM_VALUE],args:{reason:{type:Ge,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:GE}}}),Ep=new xt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[Y.SCALAR],args:{url:{type:new ie(Ge),description:"The URL that specifies the behavior of this scalar."}}}),yp=new xt({name:"oneOf",description:"Indicates exactly one field must be supplied and this field must not be `null`.",locations:[Y.INPUT_OBJECT],args:{}}),$r=Object.freeze([mp,Fp,Dp,Ep,yp]);function VE(r){return typeof r=="object"&&typeof(r==null?void 0:r[Symbol.iterator])=="function"}function di(r,n){if(Se(n)){const t=di(r,n.ofType);return(t==null?void 0:t.kind)===E.NULL?null:t}if(r===null)return{kind:E.NULL};if(r===void 0)return null;if(Fn(n)){const t=n.ofType;if(VE(r)){const o=[];for(const s of r){const a=di(s,t);a!=null&&o.push(a)}return{kind:E.LIST,values:o}}return di(r,t)}if(mn(n)){if(!Ct(r))return null;const t=[];for(const o of Object.values(n.getFields())){const s=di(r[o.name],o.type);s&&t.push({kind:E.OBJECT_FIELD,name:{kind:E.NAME,value:o.name},value:s})}return{kind:E.OBJECT,fields:t}}if(Ur(n)){const t=n.serialize(r);if(t==null)return null;if(typeof t=="boolean")return{kind:E.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const o=String(t);return mf.test(o)?{kind:E.INT,value:o}:{kind:E.FLOAT,value:o}}if(typeof t=="string")return et(n)?{kind:E.ENUM,value:t}:n===bp&&mf.test(t)?{kind:E.INT,value:t}:{kind:E.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${P(t)}.`)}Kn(!1,"Unexpected input type: "+P(n))}const mf=/^-?(?:0|[1-9][0-9]*)$/,nu=new pt({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Ge,resolve:r=>r.description},types:{description:"A list of all types supported by this server.",type:new ie(new fn(new ie(Zn))),resolve(r){return Object.values(r.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new ie(Zn),resolve:r=>r.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Zn,resolve:r=>r.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Zn,resolve:r=>r.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new ie(new fn(new ie(Ap))),resolve:r=>r.getDirectives()}})}),Ap=new pt({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new ie(Ge),resolve:r=>r.name},description:{type:Ge,resolve:r=>r.description},isRepeatable:{type:new ie(On),resolve:r=>r.isRepeatable},locations:{type:new ie(new fn(new ie(vp))),resolve:r=>r.locations},args:{type:new ie(new fn(new ie(Qs))),args:{includeDeprecated:{type:On,defaultValue:!1}},resolve(r,{includeDeprecated:n}){return n?r.args:r.args.filter(t=>t.deprecationReason==null)}}})}),vp=new Br({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:Y.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:Y.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:Y.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:Y.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:Y.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:Y.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:Y.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:Y.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:Y.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:Y.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:Y.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:Y.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:Y.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:Y.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:Y.UNION,description:"Location adjacent to a union definition."},ENUM:{value:Y.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:Y.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:Y.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:Y.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Zn=new pt({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new ie(Ip),resolve(r){if(Xt(r))return Ae.SCALAR;if(ze(r))return Ae.OBJECT;if(Ve(r))return Ae.INTERFACE;if($n(r))return Ae.UNION;if(et(r))return Ae.ENUM;if(mn(r))return Ae.INPUT_OBJECT;if(Fn(r))return Ae.LIST;if(Se(r))return Ae.NON_NULL;Kn(!1,`Unexpected type: "${P(r)}".`)}},name:{type:Ge,resolve:r=>"name"in r?r.name:void 0},description:{type:Ge,resolve:r=>"description"in r?r.description:void 0},specifiedByURL:{type:Ge,resolve:r=>"specifiedByURL"in r?r.specifiedByURL:void 0},fields:{type:new fn(new ie(Sp)),args:{includeDeprecated:{type:On,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(ze(r)||Ve(r)){const t=Object.values(r.getFields());return n?t:t.filter(o=>o.deprecationReason==null)}}},interfaces:{type:new fn(new ie(Zn)),resolve(r){if(ze(r)||Ve(r))return r.getInterfaces()}},possibleTypes:{type:new fn(new ie(Zn)),resolve(r,n,t,{schema:o}){if(fr(r))return o.getPossibleTypes(r)}},enumValues:{type:new fn(new ie(Tp)),args:{includeDeprecated:{type:On,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(et(r)){const t=r.getValues();return n?t:t.filter(o=>o.deprecationReason==null)}}},inputFields:{type:new fn(new ie(Qs)),args:{includeDeprecated:{type:On,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(mn(r)){const t=Object.values(r.getFields());return n?t:t.filter(o=>o.deprecationReason==null)}}},ofType:{type:Zn,resolve:r=>"ofType"in r?r.ofType:void 0},isOneOf:{type:On,resolve:r=>{if(mn(r))return r.isOneOf}}})}),Sp=new pt({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new ie(Ge),resolve:r=>r.name},description:{type:Ge,resolve:r=>r.description},args:{type:new ie(new fn(new ie(Qs))),args:{includeDeprecated:{type:On,defaultValue:!1}},resolve(r,{includeDeprecated:n}){return n?r.args:r.args.filter(t=>t.deprecationReason==null)}},type:{type:new ie(Zn),resolve:r=>r.type},isDeprecated:{type:new ie(On),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Ge,resolve:r=>r.deprecationReason}})}),Qs=new pt({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new ie(Ge),resolve:r=>r.name},description:{type:Ge,resolve:r=>r.description},type:{type:new ie(Zn),resolve:r=>r.type},defaultValue:{type:Ge,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(r){const{type:n,defaultValue:t}=r,o=di(t,n);return o?He(o):null}},isDeprecated:{type:new ie(On),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Ge,resolve:r=>r.deprecationReason}})}),Tp=new pt({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new ie(Ge),resolve:r=>r.name},description:{type:Ge,resolve:r=>r.description},isDeprecated:{type:new ie(On),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Ge,resolve:r=>r.deprecationReason}})});var Ae;(function(r){r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.INPUT_OBJECT="INPUT_OBJECT",r.LIST="LIST",r.NON_NULL="NON_NULL"})(Ae||(Ae={}));const Ip=new Br({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:Ae.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:Ae.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:Ae.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:Ae.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:Ae.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:Ae.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:Ae.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:Ae.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new ie(nu);new ie(Ge);new ie(Ge);const Js=Object.freeze([nu,Ap,vp,Zn,Sp,Qs,Tp,Ip]);function jE(r){return Js.some(({name:n})=>r.name===n)}class Op{constructor(n){var t,o;this.__validationErrors=n.assumeValid===!0?[]:void 0,Ct(n)||fe(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||fe(!1,`"types" must be Array if provided but got: ${P(n.types)}.`),!n.directives||Array.isArray(n.directives)||fe(!1,`"directives" must be Array if provided but got: ${P(n.directives)}.`),this.description=n.description,this.extensions=Gn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(o=n.directives)!==null&&o!==void 0?o:$r;const s=new Set(n.types);if(n.types!=null)for(const a of n.types)s.delete(a),Hn(a,s);this._queryType!=null&&Hn(this._queryType,s),this._mutationType!=null&&Hn(this._mutationType,s),this._subscriptionType!=null&&Hn(this._subscriptionType,s);for(const a of this._directives)if($E(a))for(const c of a.args)Hn(c.type,s);Hn(nu,s),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const a of s){if(a==null)continue;const c=a.name;if(c||fe(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[c]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${c}".`);if(this._typeMap[c]=a,Ve(a)){for(const f of a.getInterfaces())if(Ve(f)){let p=this._implementationsMap[f.name];p===void 0&&(p=this._implementationsMap[f.name]={objects:[],interfaces:[]}),p.interfaces.push(a)}}else if(ze(a)){for(const f of a.getInterfaces())if(Ve(f)){let p=this._implementationsMap[f.name];p===void 0&&(p=this._implementationsMap[f.name]={objects:[],interfaces:[]}),p.objects.push(a)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case Pn.QUERY:return this.getQueryType();case Pn.MUTATION:return this.getMutationType();case Pn.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return $n(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t??{objects:[],interfaces:[]}}isSubType(n,t){let o=this._subTypeMap[n.name];if(o===void 0){if(o=Object.create(null),$n(n))for(const s of n.getTypes())o[s.name]=!0;else{const s=this.getImplementations(n);for(const a of s.objects)o[a.name]=!0;for(const a of s.interfaces)o[a.name]=!0}this._subTypeMap[n.name]=o}return o[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Hn(r,n){const t=hr(r);if(!n.has(t)){if(n.add(t),$n(t))for(const o of t.getTypes())Hn(o,n);else if(ze(t)||Ve(t)){for(const o of t.getInterfaces())Hn(o,n);for(const o of Object.values(t.getFields())){Hn(o.type,n);for(const s of o.args)Hn(s.type,n)}}else if(mn(t))for(const o of Object.values(t.getFields()))Hn(o.type,n)}return n}function _t(r,n){switch(n.kind){case E.LIST_TYPE:{const t=_t(r,n.type);return t&&new fn(t)}case E.NON_NULL_TYPE:{const t=_t(r,n.type);return t&&new ie(t)}case E.NAMED_TYPE:return r.getType(n.name.value)}}function qE(r){return r.kind===E.OPERATION_DEFINITION||r.kind===E.FRAGMENT_DEFINITION}function zE(r){return r.kind===E.SCHEMA_DEFINITION||Ni(r)||r.kind===E.DIRECTIVE_DEFINITION}function Ni(r){return r.kind===E.SCALAR_TYPE_DEFINITION||r.kind===E.OBJECT_TYPE_DEFINITION||r.kind===E.INTERFACE_TYPE_DEFINITION||r.kind===E.UNION_TYPE_DEFINITION||r.kind===E.ENUM_TYPE_DEFINITION||r.kind===E.INPUT_OBJECT_TYPE_DEFINITION}function YE(r){return r.kind===E.SCHEMA_EXTENSION||tu(r)}function tu(r){return r.kind===E.SCALAR_TYPE_EXTENSION||r.kind===E.OBJECT_TYPE_EXTENSION||r.kind===E.INTERFACE_TYPE_EXTENSION||r.kind===E.UNION_TYPE_EXTENSION||r.kind===E.ENUM_TYPE_EXTENSION||r.kind===E.INPUT_OBJECT_TYPE_EXTENSION}function WE(r){return{Document(n){for(const t of n.definitions)if(!qE(t)){const o=t.kind===E.SCHEMA_DEFINITION||t.kind===E.SCHEMA_EXTENSION?"schema":'"'+t.name.value+'"';r.reportError(new M(`The ${o} definition is not executable.`,{nodes:t}))}return!1}}}function QE(r){return{Field(n){const t=r.getParentType();if(t&&!r.getFieldDef()){const s=r.getSchema(),a=n.name.value;let c=Ht("to use an inline fragment on",JE(s,t,a));c===""&&(c=Ht(HE(t,a))),r.reportError(new M(`Cannot query field "${a}" on type "${t.name}".`+c,{nodes:n}))}}}}function JE(r,n,t){if(!fr(n))return[];const o=new Set,s=Object.create(null);for(const c of r.getPossibleTypes(n))if(c.getFields()[t]){o.add(c),s[c.name]=1;for(const f of c.getInterfaces()){var a;f.getFields()[t]&&(o.add(f),s[f.name]=((a=s[f.name])!==null&&a!==void 0?a:0)+1)}}return[...o].sort((c,f)=>{const p=s[f.name]-s[c.name];return p!==0?p:Ve(c)&&r.isSubType(c,f)?-1:Ve(f)&&r.isSubType(f,c)?1:Xa(c.name,f.name)}).map(c=>c.name)}function HE(r,n){if(ze(r)||Ve(r)){const t=Object.keys(r.getFields());return mr(n,t)}return[]}function XE(r){return{InlineFragment(n){const t=n.typeCondition;if(t){const o=_t(r.getSchema(),t);if(o&&!Ai(o)){const s=He(t);r.reportError(new M(`Fragment cannot condition on non composite type "${s}".`,{nodes:t}))}}},FragmentDefinition(n){const t=_t(r.getSchema(),n.typeCondition);if(t&&!Ai(t)){const o=He(n.typeCondition);r.reportError(new M(`Fragment "${n.name.value}" cannot condition on non composite type "${o}".`,{nodes:n.typeCondition}))}}}}function ZE(r){return{...Np(r),Argument(n){const t=r.getArgument(),o=r.getFieldDef(),s=r.getParentType();if(!t&&o&&s){const a=n.name.value,c=o.args.map(p=>p.name),f=mr(a,c);r.reportError(new M(`Unknown argument "${a}" on field "${s.name}.${o.name}".`+Ht(f),{nodes:n}))}}}}function Np(r){const n=Object.create(null),t=r.getSchema(),o=t?t.getDirectives():$r;for(const c of o)n[c.name]=c.args.map(f=>f.name);const s=r.getDocument().definitions;for(const c of s)if(c.kind===E.DIRECTIVE_DEFINITION){var a;const f=(a=c.arguments)!==null&&a!==void 0?a:[];n[c.name.value]=f.map(p=>p.name.value)}return{Directive(c){const f=c.name.value,p=n[f];if(c.arguments&&p)for(const g of c.arguments){const b=g.name.value;if(!p.includes(b)){const F=mr(b,p);r.reportError(new M(`Unknown argument "${b}" on directive "@${f}".`+Ht(F),{nodes:g}))}}return!1}}}function wp(r){const n=Object.create(null),t=r.getSchema(),o=t?t.getDirectives():$r;for(const a of o)n[a.name]=a.locations;const s=r.getDocument().definitions;for(const a of s)a.kind===E.DIRECTIVE_DEFINITION&&(n[a.name.value]=a.locations.map(c=>c.value));return{Directive(a,c,f,p,g){const b=a.name.value,F=n[b];if(!F){r.reportError(new M(`Unknown directive "@${b}".`,{nodes:a}));return}const w=KE(g);w&&!F.includes(w)&&r.reportError(new M(`Directive "@${b}" may not be used on ${w}.`,{nodes:a}))}}}function KE(r){const n=r[r.length-1];switch("kind"in n||Kn(!1),n.kind){case E.OPERATION_DEFINITION:return ey(n.operation);case E.FIELD:return Y.FIELD;case E.FRAGMENT_SPREAD:return Y.FRAGMENT_SPREAD;case E.INLINE_FRAGMENT:return Y.INLINE_FRAGMENT;case E.FRAGMENT_DEFINITION:return Y.FRAGMENT_DEFINITION;case E.VARIABLE_DEFINITION:return Y.VARIABLE_DEFINITION;case E.SCHEMA_DEFINITION:case E.SCHEMA_EXTENSION:return Y.SCHEMA;case E.SCALAR_TYPE_DEFINITION:case E.SCALAR_TYPE_EXTENSION:return Y.SCALAR;case E.OBJECT_TYPE_DEFINITION:case E.OBJECT_TYPE_EXTENSION:return Y.OBJECT;case E.FIELD_DEFINITION:return Y.FIELD_DEFINITION;case E.INTERFACE_TYPE_DEFINITION:case E.INTERFACE_TYPE_EXTENSION:return Y.INTERFACE;case E.UNION_TYPE_DEFINITION:case E.UNION_TYPE_EXTENSION:return Y.UNION;case E.ENUM_TYPE_DEFINITION:case E.ENUM_TYPE_EXTENSION:return Y.ENUM;case E.ENUM_VALUE_DEFINITION:return Y.ENUM_VALUE;case E.INPUT_OBJECT_TYPE_DEFINITION:case E.INPUT_OBJECT_TYPE_EXTENSION:return Y.INPUT_OBJECT;case E.INPUT_VALUE_DEFINITION:{const t=r[r.length-3];return"kind"in t||Kn(!1),t.kind===E.INPUT_OBJECT_TYPE_DEFINITION?Y.INPUT_FIELD_DEFINITION:Y.ARGUMENT_DEFINITION}default:Kn(!1,"Unexpected kind: "+P(n.kind))}}function ey(r){switch(r){case Pn.QUERY:return Y.QUERY;case Pn.MUTATION:return Y.MUTATION;case Pn.SUBSCRIPTION:return Y.SUBSCRIPTION}}function ny(r){return{FragmentSpread(n){const t=n.name.value;r.getFragment(t)||r.reportError(new M(`Unknown fragment "${t}".`,{nodes:n.name}))}}}function Cp(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),o=Object.create(null);for(const a of r.getDocument().definitions)Ni(a)&&(o[a.name.value]=!0);const s=[...Object.keys(t),...Object.keys(o)];return{NamedType(a,c,f,p,g){const b=a.name.value;if(!t[b]&&!o[b]){var F;const w=(F=g[2])!==null&&F!==void 0?F:f,S=w!=null&&ty(w);if(S&&Ff.includes(b))return;const O=mr(b,S?Ff.concat(s):s);r.reportError(new M(`Unknown type "${b}".`+Ht(O),{nodes:a}))}}}}const Ff=[...Ws,...Js].map(r=>r.name);function ty(r){return"kind"in r&&(zE(r)||YE(r))}function ry(r){let n=0;return{Document(t){n=t.definitions.filter(o=>o.kind===E.OPERATION_DEFINITION).length},OperationDefinition(t){!t.name&&n>1&&r.reportError(new M("This anonymous operation must be the only defined operation.",{nodes:t}))}}}function iy(r){var n,t,o;const s=r.getSchema(),a=(n=(t=(o=s==null?void 0:s.astNode)!==null&&o!==void 0?o:s==null?void 0:s.getQueryType())!==null&&t!==void 0?t:s==null?void 0:s.getMutationType())!==null&&n!==void 0?n:s==null?void 0:s.getSubscriptionType();let c=0;return{SchemaDefinition(f){if(a){r.reportError(new M("Cannot define a new schema within a schema extension.",{nodes:f}));return}c>0&&r.reportError(new M("Must provide only one schema definition.",{nodes:f})),++c}}}const sy=3;function oy(r){function n(t,o=Object.create(null),s=0){if(t.kind===E.FRAGMENT_SPREAD){const a=t.name.value;if(o[a]===!0)return!1;const c=r.getFragment(a);if(!c)return!1;try{return o[a]=!0,n(c,o,s)}finally{o[a]=void 0}}if(t.kind===E.FIELD&&(t.name.value==="fields"||t.name.value==="interfaces"||t.name.value==="possibleTypes"||t.name.value==="inputFields")&&(s++,s>=sy))return!0;if("selectionSet"in t&&t.selectionSet){for(const a of t.selectionSet.selections)if(n(a,o,s))return!0}return!1}return{Field(t){if((t.name.value==="__schema"||t.name.value==="__type")&&n(t))return r.reportError(new M("Maximum introspection depth exceeded",{nodes:[t]})),!1}}}function ay(r){const n=Object.create(null),t=[],o=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(a){return s(a),!1}};function s(a){if(n[a.name.value])return;const c=a.name.value;n[c]=!0;const f=r.getFragmentSpreads(a.selectionSet);if(f.length!==0){o[c]=t.length;for(const p of f){const g=p.name.value,b=o[g];if(t.push(p),b===void 0){const F=r.getFragment(g);F&&s(F)}else{const F=t.slice(b),w=F.slice(0,-1).map(S=>'"'+S.name.value+'"').join(", ");r.reportError(new M(`Cannot spread fragment "${g}" within itself`+(w!==""?` via ${w}.`:"."),{nodes:F}))}t.pop()}o[c]=void 0}}}function uy(r){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const o=r.getRecursiveVariableUsages(t);for(const{node:s}of o){const a=s.name.value;n[a]!==!0&&r.reportError(new M(t.name?`Variable "$${a}" is not defined by operation "${t.name.value}".`:`Variable "$${a}" is not defined.`,{nodes:[s,t]}))}}},VariableDefinition(t){n[t.variable.name.value]=!0}}}function cy(r){const n=[],t=[];return{OperationDefinition(o){return n.push(o),!1},FragmentDefinition(o){return t.push(o),!1},Document:{leave(){const o=Object.create(null);for(const s of n)for(const a of r.getRecursivelyReferencedFragments(s))o[a.name.value]=!0;for(const s of t){const a=s.name.value;o[a]!==!0&&r.reportError(new M(`Fragment "${a}" is never used.`,{nodes:s}))}}}}}function ly(r){let n=[];return{OperationDefinition:{enter(){n=[]},leave(t){const o=Object.create(null),s=r.getRecursiveVariableUsages(t);for(const{node:a}of s)o[a.name.value]=!0;for(const a of n){const c=a.variable.name.value;o[c]!==!0&&r.reportError(new M(t.name?`Variable "$${c}" is never used in operation "${t.name.value}".`:`Variable "$${c}" is never used.`,{nodes:a}))}}},VariableDefinition(t){n.push(t)}}}function ru(r){switch(r.kind){case E.OBJECT:return{...r,fields:fy(r.fields)};case E.LIST:return{...r,values:r.values.map(ru)};case E.INT:case E.FLOAT:case E.STRING:case E.BOOLEAN:case E.NULL:case E.ENUM:case E.VARIABLE:return r}}function fy(r){return r.map(n=>({...n,value:ru(n.value)})).sort((n,t)=>Xa(n.name.value,t.name.value))}function Rp(r){return Array.isArray(r)?r.map(([n,t])=>`subfields "${n}" conflict because `+Rp(t)).join(" and "):r}function py(r){const n=new my,t=new Map;return{SelectionSet(o){const s=_y(r,t,n,r.getParentType(),o);for(const[[a,c],f,p]of s){const g=Rp(c);r.reportError(new M(`Fields "${a}" conflict because ${g}. Use different aliases on the fields to fetch both if this was intentional.`,{nodes:f.concat(p)}))}}}}function _y(r,n,t,o,s){const a=[],[c,f]=Ps(r,n,o,s);if(hy(r,a,n,t,c),f.length!==0)for(let p=0;p<f.length;p++){Us(r,a,n,t,!1,c,f[p]);for(let g=p+1;g<f.length;g++)Bs(r,a,n,t,!1,f[p],f[g])}return a}function Us(r,n,t,o,s,a,c){const f=r.getFragment(c);if(!f)return;const[p,g]=ka(r,t,f);if(a!==p){iu(r,n,t,o,s,a,p);for(const b of g)o.has(b,c,s)||(o.add(b,c,s),Us(r,n,t,o,s,a,b))}}function Bs(r,n,t,o,s,a,c){if(a===c||o.has(a,c,s))return;o.add(a,c,s);const f=r.getFragment(a),p=r.getFragment(c);if(!f||!p)return;const[g,b]=ka(r,t,f),[F,w]=ka(r,t,p);iu(r,n,t,o,s,g,F);for(const S of w)Bs(r,n,t,o,s,a,S);for(const S of b)Bs(r,n,t,o,s,S,c)}function dy(r,n,t,o,s,a,c,f){const p=[],[g,b]=Ps(r,n,s,a),[F,w]=Ps(r,n,c,f);iu(r,p,n,t,o,g,F);for(const S of w)Us(r,p,n,t,o,g,S);for(const S of b)Us(r,p,n,t,o,F,S);for(const S of b)for(const O of w)Bs(r,p,n,t,o,S,O);return p}function hy(r,n,t,o,s){for(const[a,c]of Object.entries(s))if(c.length>1)for(let f=0;f<c.length;f++)for(let p=f+1;p<c.length;p++){const g=xp(r,t,o,!1,a,c[f],c[p]);g&&n.push(g)}}function iu(r,n,t,o,s,a,c){for(const[f,p]of Object.entries(a)){const g=c[f];if(g)for(const b of p)for(const F of g){const w=xp(r,t,o,s,f,b,F);w&&n.push(w)}}}function xp(r,n,t,o,s,a,c){const[f,p,g]=a,[b,F,w]=c,S=o||f!==b&&ze(f)&&ze(b);if(!S){const Te=p.name.value,ge=F.name.value;if(Te!==ge)return[[s,`"${Te}" and "${ge}" are different fields`],[p],[F]];if(!gy(p,F))return[[s,"they have differing arguments"],[p],[F]]}const O=g==null?void 0:g.type,L=w==null?void 0:w.type;if(O&&L&&xa(O,L))return[[s,`they return conflicting types "${P(O)}" and "${P(L)}"`],[p],[F]];const z=p.selectionSet,le=F.selectionSet;if(z&&le){const Te=dy(r,n,t,S,hr(O),z,hr(L),le);return by(Te,s,p,F)}}function gy(r,n){const t=r.arguments,o=n.arguments;if(t===void 0||t.length===0)return o===void 0||o.length===0;if(o===void 0||o.length===0||t.length!==o.length)return!1;const s=new Map(o.map(({name:a,value:c})=>[a.value,c]));return t.every(a=>{const c=a.value,f=s.get(a.name.value);return f===void 0?!1:Df(c)===Df(f)})}function Df(r){return He(ru(r))}function xa(r,n){return Fn(r)?Fn(n)?xa(r.ofType,n.ofType):!0:Fn(n)?!0:Se(r)?Se(n)?xa(r.ofType,n.ofType):!0:Se(n)?!0:Ur(r)||Ur(n)?r!==n:!1}function Ps(r,n,t,o){const s=n.get(o);if(s)return s;const a=Object.create(null),c=Object.create(null);kp(r,t,o,a,c);const f=[a,Object.keys(c)];return n.set(o,f),f}function ka(r,n,t){const o=n.get(t.selectionSet);if(o)return o;const s=_t(r.getSchema(),t.typeCondition);return Ps(r,n,s,t.selectionSet)}function kp(r,n,t,o,s){for(const a of t.selections)switch(a.kind){case E.FIELD:{const c=a.name.value;let f;(ze(n)||Ve(n))&&(f=n.getFields()[c]);const p=a.alias?a.alias.value:c;o[p]||(o[p]=[]),o[p].push([n,a,f]);break}case E.FRAGMENT_SPREAD:s[a.name.value]=!0;break;case E.INLINE_FRAGMENT:{const c=a.typeCondition,f=c?_t(r.getSchema(),c):n;kp(r,f,a.selectionSet,o,s);break}}}function by(r,n,t,o){if(r.length>0)return[[n,r.map(([s])=>s)],[t,...r.map(([,s])=>s).flat()],[o,...r.map(([,,s])=>s).flat()]]}class my{constructor(){this._data=new Map}has(n,t,o){var s;const[a,c]=n<t?[n,t]:[t,n],f=(s=this._data.get(a))===null||s===void 0?void 0:s.get(c);return f===void 0?!1:o?!0:o===f}add(n,t,o){const[s,a]=n<t?[n,t]:[t,n],c=this._data.get(s);c===void 0?this._data.set(s,new Map([[a,o]])):c.set(a,o)}}function Fy(r){return{InlineFragment(n){const t=r.getType(),o=r.getParentType();if(Ai(t)&&Ai(o)&&!bf(r.getSchema(),t,o)){const s=P(o),a=P(t);r.reportError(new M(`Fragment cannot be spread here as objects of type "${s}" can never be of type "${a}".`,{nodes:n}))}},FragmentSpread(n){const t=n.name.value,o=Dy(r,t),s=r.getParentType();if(o&&s&&!bf(r.getSchema(),o,s)){const a=P(s),c=P(o);r.reportError(new M(`Fragment "${t}" cannot be spread here as objects of type "${a}" can never be of type "${c}".`,{nodes:n}))}}}}function Dy(r,n){const t=r.getFragment(n);if(t){const o=_t(r.getSchema(),t.typeCondition);if(Ai(o))return o}}function Ey(r){const n=r.getSchema(),t=Object.create(null);for(const s of r.getDocument().definitions)Ni(s)&&(t[s.name.value]=s);return{ScalarTypeExtension:o,ObjectTypeExtension:o,InterfaceTypeExtension:o,UnionTypeExtension:o,EnumTypeExtension:o,InputObjectTypeExtension:o};function o(s){const a=s.name.value,c=t[a],f=n==null?void 0:n.getType(a);let p;if(c?p=yy[c.kind]:f&&(p=Ay(f)),p){if(p!==s.kind){const g=vy(s.kind);r.reportError(new M(`Cannot extend non-${g} type "${a}".`,{nodes:c?[c,s]:s}))}}else{const g=Object.keys({...t,...n==null?void 0:n.getTypeMap()}),b=mr(a,g);r.reportError(new M(`Cannot extend type "${a}" because it is not defined.`+Ht(b),{nodes:s.name}))}}}const yy={[E.SCALAR_TYPE_DEFINITION]:E.SCALAR_TYPE_EXTENSION,[E.OBJECT_TYPE_DEFINITION]:E.OBJECT_TYPE_EXTENSION,[E.INTERFACE_TYPE_DEFINITION]:E.INTERFACE_TYPE_EXTENSION,[E.UNION_TYPE_DEFINITION]:E.UNION_TYPE_EXTENSION,[E.ENUM_TYPE_DEFINITION]:E.ENUM_TYPE_EXTENSION,[E.INPUT_OBJECT_TYPE_DEFINITION]:E.INPUT_OBJECT_TYPE_EXTENSION};function Ay(r){if(Xt(r))return E.SCALAR_TYPE_EXTENSION;if(ze(r))return E.OBJECT_TYPE_EXTENSION;if(Ve(r))return E.INTERFACE_TYPE_EXTENSION;if($n(r))return E.UNION_TYPE_EXTENSION;if(et(r))return E.ENUM_TYPE_EXTENSION;if(mn(r))return E.INPUT_OBJECT_TYPE_EXTENSION;Kn(!1,"Unexpected type: "+P(r))}function vy(r){switch(r){case E.SCALAR_TYPE_EXTENSION:return"scalar";case E.OBJECT_TYPE_EXTENSION:return"object";case E.INTERFACE_TYPE_EXTENSION:return"interface";case E.UNION_TYPE_EXTENSION:return"union";case E.ENUM_TYPE_EXTENSION:return"enum";case E.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Kn(!1,"Unexpected kind: "+P(r))}}function Sy(r){return{...Mp(r),Field:{leave(n){var t;const o=r.getFieldDef();if(!o)return!1;const s=new Set((t=n.arguments)===null||t===void 0?void 0:t.map(a=>a.name.value));for(const a of o.args)if(!s.has(a.name)&&gp(a)){const c=P(a.type);r.reportError(new M(`Field "${o.name}" argument "${a.name}" of type "${c}" is required, but it was not provided.`,{nodes:n}))}}}}}function Mp(r){var n;const t=Object.create(null),o=r.getSchema(),s=(n=o==null?void 0:o.getDirectives())!==null&&n!==void 0?n:$r;for(const f of s)t[f.name]=dr(f.args.filter(gp),p=>p.name);const a=r.getDocument().definitions;for(const f of a)if(f.kind===E.DIRECTIVE_DEFINITION){var c;const p=(c=f.arguments)!==null&&c!==void 0?c:[];t[f.name.value]=dr(p.filter(Ty),g=>g.name.value)}return{Directive:{leave(f){const p=f.name.value,g=t[p];if(g){var b;const F=(b=f.arguments)!==null&&b!==void 0?b:[],w=new Set(F.map(S=>S.name.value));for(const[S,O]of Object.entries(g))if(!w.has(S)){const L=Za(O.type)?P(O.type):He(O.type);r.reportError(new M(`Directive "@${p}" argument "${S}" of type "${L}" is required, but it was not provided.`,{nodes:f}))}}}}}}function Ty(r){return r.type.kind===E.NON_NULL_TYPE&&r.defaultValue==null}function Iy(r){return{Field(n){const t=r.getType(),o=n.selectionSet;if(t){if(Ur(hr(t))){if(o){const s=n.name.value,a=P(t);r.reportError(new M(`Field "${s}" must not have a selection since type "${a}" has no subfields.`,{nodes:o}))}}else if(!o){const s=n.name.value,a=P(t);r.reportError(new M(`Field "${s}" of type "${a}" must have a selection of subfields. Did you mean "${s} { ... }"?`,{nodes:n}))}}}}}function Yt(r,n,t){if(r){if(r.kind===E.VARIABLE){const o=r.name.value;if(t==null||t[o]===void 0)return;const s=t[o];return s===null&&Se(n)?void 0:s}if(Se(n))return r.kind===E.NULL?void 0:Yt(r,n.ofType,t);if(r.kind===E.NULL)return null;if(Fn(n)){const o=n.ofType;if(r.kind===E.LIST){const a=[];for(const c of r.values)if(Ef(c,t)){if(Se(o))return;a.push(null)}else{const f=Yt(c,o,t);if(f===void 0)return;a.push(f)}return a}const s=Yt(r,o,t);return s===void 0?void 0:[s]}if(mn(n)){if(r.kind!==E.OBJECT)return;const o=Object.create(null),s=dr(r.fields,a=>a.name.value);for(const a of Object.values(n.getFields())){const c=s[a.name];if(!c||Ef(c.value,t)){if(a.defaultValue!==void 0)o[a.name]=a.defaultValue;else if(Se(a.type))return;continue}const f=Yt(c.value,a.type,t);if(f===void 0)return;o[a.name]=f}if(n.isOneOf){const a=Object.keys(o);if(a.length!==1||o[a[0]]===null)return}return o}if(Ur(n)){let o;try{o=n.parseLiteral(r,t)}catch{return}return o===void 0?void 0:o}Kn(!1,"Unexpected input type: "+P(n))}}function Ef(r,n){return r.kind===E.VARIABLE&&(n==null||n[r.name.value]===void 0)}function Oy(r,n,t){var o;const s={},a=(o=n.arguments)!==null&&o!==void 0?o:[],c=dr(a,f=>f.name.value);for(const f of r.args){const p=f.name,g=f.type,b=c[p];if(!b){if(f.defaultValue!==void 0)s[p]=f.defaultValue;else if(Se(g))throw new M(`Argument "${p}" of required type "${P(g)}" was not provided.`,{nodes:n});continue}const F=b.value;let w=F.kind===E.NULL;if(F.kind===E.VARIABLE){const O=F.name.value;if(t==null||!Ny(t,O)){if(f.defaultValue!==void 0)s[p]=f.defaultValue;else if(Se(g))throw new M(`Argument "${p}" of required type "${P(g)}" was provided the variable "$${O}" which was not provided a runtime value.`,{nodes:F});continue}w=t[O]==null}if(w&&Se(g))throw new M(`Argument "${p}" of non-null type "${P(g)}" must not be null.`,{nodes:F});const S=Yt(F,g,t);if(S===void 0)throw new M(`Argument "${p}" has invalid value ${He(F)}.`,{nodes:F});s[p]=S}return s}function vi(r,n,t){var o;const s=(o=n.directives)===null||o===void 0?void 0:o.find(a=>a.name.value===r.name);if(s)return Oy(r,s,t)}function Ny(r,n){return Object.prototype.hasOwnProperty.call(r,n)}function wy(r,n,t,o,s){const a=new Map;return Ma(r,n,t,o,s,a,new Set),a}function Ma(r,n,t,o,s,a,c){for(const f of s.selections)switch(f.kind){case E.FIELD:{if(!va(t,f))continue;const p=Cy(f),g=a.get(p);g!==void 0?g.push(f):a.set(p,[f]);break}case E.INLINE_FRAGMENT:{if(!va(t,f)||!yf(r,f,o))continue;Ma(r,n,t,o,f.selectionSet,a,c);break}case E.FRAGMENT_SPREAD:{const p=f.name.value;if(c.has(p)||!va(t,f))continue;c.add(p);const g=n[p];if(!g||!yf(r,g,o))continue;Ma(r,n,t,o,g.selectionSet,a,c);break}}}function va(r,n){const t=vi(Fp,n,r);if((t==null?void 0:t.if)===!0)return!1;const o=vi(mp,n,r);return(o==null?void 0:o.if)!==!1}function yf(r,n,t){const o=n.typeCondition;if(!o)return!0;const s=_t(r,o);return s===t?!0:fr(s)?r.isSubType(s,t):!1}function Cy(r){return r.alias?r.alias.value:r.name.value}function Ry(r){return{OperationDefinition(n){if(n.operation==="subscription"){const t=r.getSchema(),o=t.getSubscriptionType();if(o){const s=n.name?n.name.value:null,a=Object.create(null),c=r.getDocument(),f=Object.create(null);for(const g of c.definitions)g.kind===E.FRAGMENT_DEFINITION&&(f[g.name.value]=g);const p=wy(t,f,a,o,n.selectionSet);if(p.size>1){const F=[...p.values()].slice(1).flat();r.reportError(new M(s!=null?`Subscription "${s}" must select only one top level field.`:"Anonymous Subscription must select only one top level field.",{nodes:F}))}for(const g of p.values())g[0].name.value.startsWith("__")&&r.reportError(new M(s!=null?`Subscription "${s}" must not select an introspection top level field.`:"Anonymous Subscription must not select an introspection top level field.",{nodes:g}))}}}}}function su(r,n){const t=new Map;for(const o of r){const s=n(o),a=t.get(s);a===void 0?t.set(s,[o]):a.push(o)}return t}function xy(r){return{DirectiveDefinition(o){var s;const a=(s=o.arguments)!==null&&s!==void 0?s:[];return t(`@${o.name.value}`,a)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(o){var s;const a=o.name.value,c=(s=o.fields)!==null&&s!==void 0?s:[];for(const p of c){var f;const g=p.name.value,b=(f=p.arguments)!==null&&f!==void 0?f:[];t(`${a}.${g}`,b)}return!1}function t(o,s){const a=su(s,c=>c.name.value);for(const[c,f]of a)f.length>1&&r.reportError(new M(`Argument "${o}(${c}:)" can only be defined once.`,{nodes:f.map(p=>p.name)}));return!1}}function Lp(r){return{Field:n,Directive:n};function n(t){var o;const s=(o=t.arguments)!==null&&o!==void 0?o:[],a=su(s,c=>c.name.value);for(const[c,f]of a)f.length>1&&r.reportError(new M(`There can be only one argument named "${c}".`,{nodes:f.map(p=>p.name)}))}}function ky(r){const n=Object.create(null),t=r.getSchema();return{DirectiveDefinition(o){const s=o.name.value;if(t!=null&&t.getDirective(s)){r.reportError(new M(`Directive "@${s}" already exists in the schema. It cannot be redefined.`,{nodes:o.name}));return}return n[s]?r.reportError(new M(`There can be only one directive named "@${s}".`,{nodes:[n[s],o.name]})):n[s]=o.name,!1}}}function Up(r){const n=Object.create(null),t=r.getSchema(),o=t?t.getDirectives():$r;for(const f of o)n[f.name]=!f.isRepeatable;const s=r.getDocument().definitions;for(const f of s)f.kind===E.DIRECTIVE_DEFINITION&&(n[f.name.value]=!f.repeatable);const a=Object.create(null),c=Object.create(null);return{enter(f){if(!("directives"in f)||!f.directives)return;let p;if(f.kind===E.SCHEMA_DEFINITION||f.kind===E.SCHEMA_EXTENSION)p=a;else if(Ni(f)||tu(f)){const g=f.name.value;p=c[g],p===void 0&&(c[g]=p=Object.create(null))}else p=Object.create(null);for(const g of f.directives){const b=g.name.value;n[b]&&(p[b]?r.reportError(new M(`The directive "@${b}" can only be used once at this location.`,{nodes:[p[b],g]})):p[b]=g)}}}}function My(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),o=Object.create(null);return{EnumTypeDefinition:s,EnumTypeExtension:s};function s(a){var c;const f=a.name.value;o[f]||(o[f]=Object.create(null));const p=(c=a.values)!==null&&c!==void 0?c:[],g=o[f];for(const b of p){const F=b.name.value,w=t[f];et(w)&&w.getValue(F)?r.reportError(new M(`Enum value "${f}.${F}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:b.name})):g[F]?r.reportError(new M(`Enum value "${f}.${F}" can only be defined once.`,{nodes:[g[F],b.name]})):g[F]=b.name}return!1}}function Ly(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),o=Object.create(null);return{InputObjectTypeDefinition:s,InputObjectTypeExtension:s,InterfaceTypeDefinition:s,InterfaceTypeExtension:s,ObjectTypeDefinition:s,ObjectTypeExtension:s};function s(a){var c;const f=a.name.value;o[f]||(o[f]=Object.create(null));const p=(c=a.fields)!==null&&c!==void 0?c:[],g=o[f];for(const b of p){const F=b.name.value;Uy(t[f],F)?r.reportError(new M(`Field "${f}.${F}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:b.name})):g[F]?r.reportError(new M(`Field "${f}.${F}" can only be defined once.`,{nodes:[g[F],b.name]})):g[F]=b.name}return!1}}function Uy(r,n){return ze(r)||Ve(r)||mn(r)?r.getFields()[n]!=null:!1}function By(r){const n=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(t){const o=t.name.value;return n[o]?r.reportError(new M(`There can be only one fragment named "${o}".`,{nodes:[n[o],t.name]})):n[o]=t.name,!1}}}function Bp(r){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const o=n.pop();o||Kn(!1),t=o}},ObjectField(o){const s=o.name.value;t[s]?r.reportError(new M(`There can be only one input field named "${s}".`,{nodes:[t[s],o.name]})):t[s]=o.name}}}function Py(r){const n=Object.create(null);return{OperationDefinition(t){const o=t.name;return o&&(n[o.value]?r.reportError(new M(`There can be only one operation named "${o.value}".`,{nodes:[n[o.value],o]})):n[o.value]=o),!1},FragmentDefinition:()=>!1}}function $y(r){const n=r.getSchema(),t=Object.create(null),o=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:s,SchemaExtension:s};function s(a){var c;const f=(c=a.operationTypes)!==null&&c!==void 0?c:[];for(const p of f){const g=p.operation,b=t[g];o[g]?r.reportError(new M(`Type for ${g} already defined in the schema. It cannot be redefined.`,{nodes:p})):b?r.reportError(new M(`There can be only one ${g} type in schema.`,{nodes:[b,p]})):t[g]=p}return!1}}function Gy(r){const n=Object.create(null),t=r.getSchema();return{ScalarTypeDefinition:o,ObjectTypeDefinition:o,InterfaceTypeDefinition:o,UnionTypeDefinition:o,EnumTypeDefinition:o,InputObjectTypeDefinition:o};function o(s){const a=s.name.value;if(t!=null&&t.getType(a)){r.reportError(new M(`Type "${a}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:s.name}));return}return n[a]?r.reportError(new M(`There can be only one type named "${a}".`,{nodes:[n[a],s.name]})):n[a]=s.name,!1}}function Vy(r){return{OperationDefinition(n){var t;const o=(t=n.variableDefinitions)!==null&&t!==void 0?t:[],s=su(o,a=>a.variable.name.value);for(const[a,c]of s)c.length>1&&r.reportError(new M(`There can be only one variable named "$${a}".`,{nodes:c.map(f=>f.variable.name)}))}}}function jy(r){let n={};return{OperationDefinition:{enter(){n={}}},VariableDefinition(t){n[t.variable.name.value]=t},ListValue(t){const o=xE(r.getParentInputType());if(!Fn(o))return cr(r,t),!1},ObjectValue(t){const o=hr(r.getInputType());if(!mn(o))return cr(r,t),!1;const s=dr(t.fields,a=>a.name.value);for(const a of Object.values(o.getFields()))if(!s[a.name]&&LE(a)){const f=P(a.type);r.reportError(new M(`Field "${o.name}.${a.name}" of required type "${f}" was not provided.`,{nodes:t}))}o.isOneOf&&qy(r,t,o,s,n)},ObjectField(t){const o=hr(r.getParentInputType());if(!r.getInputType()&&mn(o)){const a=mr(t.name.value,Object.keys(o.getFields()));r.reportError(new M(`Field "${t.name.value}" is not defined by type "${o.name}".`+Ht(a),{nodes:t}))}},NullValue(t){const o=r.getInputType();Se(o)&&r.reportError(new M(`Expected value of type "${P(o)}", found ${He(t)}.`,{nodes:t}))},EnumValue:t=>cr(r,t),IntValue:t=>cr(r,t),FloatValue:t=>cr(r,t),StringValue:t=>cr(r,t),BooleanValue:t=>cr(r,t)}}function cr(r,n){const t=r.getInputType();if(!t)return;const o=hr(t);if(!Ur(o)){const s=P(t);r.reportError(new M(`Expected value of type "${s}", found ${He(n)}.`,{nodes:n}));return}try{if(o.parseLiteral(n,void 0)===void 0){const a=P(t);r.reportError(new M(`Expected value of type "${a}", found ${He(n)}.`,{nodes:n}))}}catch(s){const a=P(t);s instanceof M?r.reportError(s):r.reportError(new M(`Expected value of type "${a}", found ${He(n)}; `+s.message,{nodes:n,originalError:s}))}}function qy(r,n,t,o,s){var a;const c=Object.keys(o);if(c.length!==1){r.reportError(new M(`OneOf Input Object "${t.name}" must specify exactly one key.`,{nodes:[n]}));return}const p=(a=o[c[0]])===null||a===void 0?void 0:a.value,g=!p||p.kind===E.NULL,b=(p==null?void 0:p.kind)===E.VARIABLE;if(g){r.reportError(new M(`Field "${t.name}.${c[0]}" must be non-null.`,{nodes:[n]}));return}if(b){const F=p.name.value;s[F].type.kind!==E.NON_NULL_TYPE&&r.reportError(new M(`Variable "${F}" must be non-nullable to be used for OneOf Input Object "${t.name}".`,{nodes:[n]}))}}function zy(r){return{VariableDefinition(n){const t=_t(r.getSchema(),n.type);if(t!==void 0&&!Ka(t)){const o=n.variable.name.value,s=He(n.type);r.reportError(new M(`Variable "$${o}" cannot be non-input type "${s}".`,{nodes:n.type}))}}}}function Yy(r){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const o=r.getRecursiveVariableUsages(t);for(const{node:s,type:a,defaultValue:c}of o){const f=s.name.value,p=n[f];if(p&&a){const g=r.getSchema(),b=_t(g,p.type);if(b&&!Wy(g,b,p.defaultValue,a,c)){const F=P(b),w=P(a);r.reportError(new M(`Variable "$${f}" of type "${F}" used in position expecting type "${w}".`,{nodes:[p,s]}))}}}}},VariableDefinition(t){n[t.variable.name.value]=t}}}function Wy(r,n,t,o,s){if(Se(o)&&!Se(n)){if(!(t!=null&&t.kind!==E.NULL)&&!(s!==void 0))return!1;const f=o.ofType;return mi(r,n,f)}return mi(r,n,o)}const Qy=Object.freeze([oy]);Object.freeze([WE,Py,ry,Ry,Cp,XE,zy,Iy,QE,By,ny,cy,Fy,ay,Vy,uy,ly,wp,Up,ZE,Lp,jy,Sy,Yy,py,Bp,...Qy]);const Jy=Object.freeze([iy,$y,Gy,My,Ly,xy,ky,Cp,wp,Up,Ey,Np,Lp,Bp,Mp]);class Hy{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const o of this.getDocument().definitions)o.kind===E.FRAGMENT_DEFINITION&&(t[o.name.value]=o);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const o=[n];let s;for(;s=o.pop();)for(const a of s.selections)a.kind===E.FRAGMENT_SPREAD?t.push(a):a.selectionSet&&o.push(a.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const o=Object.create(null),s=[n.selectionSet];let a;for(;a=s.pop();)for(const c of this.getFragmentSpreads(a)){const f=c.name.value;if(o[f]!==!0){o[f]=!0;const p=this.getFragment(f);p&&(t.push(p),s.push(p.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class Xy extends Hy{constructor(n,t,o){super(n,o),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function Zy(r,n,t=Jy){const o=[],s=new Xy(r,n,c=>{o.push(c)}),a=t.map(c=>c(s));return sp(r,TE(a)),o}function Ky(r){const n=Zy(r);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function eA(r,n){Ct(r)&&Ct(r.__schema)||fe(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${P(r)}.`);const t=r.__schema,o=lr(t.types,x=>x.name,x=>w(x));for(const x of[...Ws,...Js])o[x.name]&&(o[x.name]=x);const s=t.queryType?b(t.queryType):null,a=t.mutationType?b(t.mutationType):null,c=t.subscriptionType?b(t.subscriptionType):null,f=t.directives?t.directives.map(ht):[];return new Op({description:t.description,query:s,mutation:a,subscription:c,types:Object.values(o),directives:f,assumeValid:void 0});function p(x){if(x.kind===Ae.LIST){const X=x.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");return new fn(p(X))}if(x.kind===Ae.NON_NULL){const X=x.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");const an=p(X);return new ie(RE(an))}return g(x)}function g(x){const X=x.name;if(!X)throw new Error(`Unknown type reference: ${P(x)}.`);const an=o[X];if(!an)throw new Error(`Invalid or incomplete schema, unknown type: ${X}. Ensure that a full introspection query is used in order to build a client schema.`);return an}function b(x){return wE(g(x))}function F(x){return CE(g(x))}function w(x){if(x!=null&&x.name!=null&&x.kind!=null)switch(x.kind){case Ae.SCALAR:return S(x);case Ae.OBJECT:return L(x);case Ae.INTERFACE:return z(x);case Ae.UNION:return le(x);case Ae.ENUM:return Te(x);case Ae.INPUT_OBJECT:return ge(x)}const X=P(x);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${X}.`)}function S(x){return new Rt({name:x.name,description:x.description,specifiedByURL:x.specifiedByURL})}function O(x){if(x.interfaces===null&&x.kind===Ae.INTERFACE)return[];if(!x.interfaces){const X=P(x);throw new Error(`Introspection result missing interfaces: ${X}.`)}return x.interfaces.map(F)}function L(x){return new pt({name:x.name,description:x.description,interfaces:()=>O(x),fields:()=>we(x)})}function z(x){return new ks({name:x.name,description:x.description,interfaces:()=>O(x),fields:()=>we(x)})}function le(x){if(!x.possibleTypes){const X=P(x);throw new Error(`Introspection result missing possibleTypes: ${X}.`)}return new Ms({name:x.name,description:x.description,types:()=>x.possibleTypes.map(b)})}function Te(x){if(!x.enumValues){const X=P(x);throw new Error(`Introspection result missing enumValues: ${X}.`)}return new Br({name:x.name,description:x.description,values:lr(x.enumValues,X=>X.name,X=>({description:X.description,deprecationReason:X.deprecationReason}))})}function ge(x){if(!x.inputFields){const X=P(x);throw new Error(`Introspection result missing inputFields: ${X}.`)}return new Ls({name:x.name,description:x.description,fields:()=>on(x.inputFields),isOneOf:x.isOneOf})}function we(x){if(!x.fields)throw new Error(`Introspection result missing fields: ${P(x)}.`);return lr(x.fields,X=>X.name,ke)}function ke(x){const X=p(x.type);if(!ap(X)){const an=P(X);throw new Error(`Introspection must provide output type for fields, but received: ${an}.`)}if(!x.args){const an=P(x);throw new Error(`Introspection result missing field args: ${an}.`)}return{description:x.description,deprecationReason:x.deprecationReason,type:X,args:on(x.args)}}function on(x){return lr(x,X=>X.name,en)}function en(x){const X=p(x.type);if(!Ka(X)){const Mt=P(X);throw new Error(`Introspection must provide input type for arguments, but received: ${Mt}.`)}const an=x.defaultValue!=null?Yt(mE(x.defaultValue),X):void 0;return{description:x.description,type:X,defaultValue:an,deprecationReason:x.deprecationReason}}function ht(x){if(!x.args){const X=P(x);throw new Error(`Introspection result missing directive args: ${X}.`)}if(!x.locations){const X=P(x);throw new Error(`Introspection result missing directive locations: ${X}.`)}return new xt({name:x.name,description:x.description,isRepeatable:x.isRepeatable,locations:x.locations.slice(),args:on(x.args)})}}function nA(r,n,t){var o,s,a,c;const f=[],p=Object.create(null),g=[];let b;const F=[];for(const T of n.definitions)if(T.kind===E.SCHEMA_DEFINITION)b=T;else if(T.kind===E.SCHEMA_EXTENSION)F.push(T);else if(Ni(T))f.push(T);else if(tu(T)){const V=T.name.value,B=p[V];p[V]=B?B.concat([T]):[T]}else T.kind===E.DIRECTIVE_DEFINITION&&g.push(T);if(Object.keys(p).length===0&&f.length===0&&g.length===0&&F.length===0&&b==null)return r;const w=Object.create(null);for(const T of r.types)w[T.name]=Te(T);for(const T of f){var S;const V=T.name.value;w[V]=(S=Af[V])!==null&&S!==void 0?S:Nn(T)}const O={query:r.query&&z(r.query),mutation:r.mutation&&z(r.mutation),subscription:r.subscription&&z(r.subscription),...b&&an([b]),...an(F)};return{description:(o=b)===null||o===void 0||(s=o.description)===null||s===void 0?void 0:s.value,...O,types:Object.values(w),directives:[...r.directives.map(le),...g.map(wi)],extensions:Object.create(null),astNode:(a=b)!==null&&a!==void 0?a:r.astNode,extensionASTNodes:r.extensionASTNodes.concat(F),assumeValid:(c=t==null?void 0:t.assumeValid)!==null&&c!==void 0?c:!1};function L(T){return Fn(T)?new fn(L(T.ofType)):Se(T)?new ie(L(T.ofType)):z(T)}function z(T){return w[T.name]}function le(T){const V=T.toConfig();return new xt({...V,args:Tt(V.args,X)})}function Te(T){if(jE(T)||PE(T))return T;if(Xt(T))return ke(T);if(ze(T))return on(T);if(Ve(T))return en(T);if($n(T))return ht(T);if(et(T))return we(T);if(mn(T))return ge(T);Kn(!1,"Unexpected type: "+P(T))}function ge(T){var V;const B=T.toConfig(),$=(V=p[B.name])!==null&&V!==void 0?V:[];return new Ls({...B,fields:()=>({...Tt(B.fields,_e=>({..._e,type:L(_e.type)})),...ot($)}),extensionASTNodes:B.extensionASTNodes.concat($)})}function we(T){var V;const B=T.toConfig(),$=(V=p[T.name])!==null&&V!==void 0?V:[];return new Br({...B,values:{...B.values,...Vn($)},extensionASTNodes:B.extensionASTNodes.concat($)})}function ke(T){var V;const B=T.toConfig(),$=(V=p[B.name])!==null&&V!==void 0?V:[];let _e=B.specifiedByURL;for(const de of $){var Be;_e=(Be=vf(de))!==null&&Be!==void 0?Be:_e}return new Rt({...B,specifiedByURL:_e,extensionASTNodes:B.extensionASTNodes.concat($)})}function on(T){var V;const B=T.toConfig(),$=(V=p[B.name])!==null&&V!==void 0?V:[];return new pt({...B,interfaces:()=>[...T.getInterfaces().map(z),...Dr($)],fields:()=>({...Tt(B.fields,x),...Fr($)}),extensionASTNodes:B.extensionASTNodes.concat($)})}function en(T){var V;const B=T.toConfig(),$=(V=p[B.name])!==null&&V!==void 0?V:[];return new ks({...B,interfaces:()=>[...T.getInterfaces().map(z),...Dr($)],fields:()=>({...Tt(B.fields,x),...Fr($)}),extensionASTNodes:B.extensionASTNodes.concat($)})}function ht(T){var V;const B=T.toConfig(),$=(V=p[B.name])!==null&&V!==void 0?V:[];return new Ms({...B,types:()=>[...T.getTypes().map(z),...Kt($)],extensionASTNodes:B.extensionASTNodes.concat($)})}function x(T){return{...T,type:L(T.type),args:T.args&&Tt(T.args,X)}}function X(T){return{...T,type:L(T.type)}}function an(T){const V={};for(const $ of T){var B;const _e=(B=$.operationTypes)!==null&&B!==void 0?B:[];for(const Be of _e)V[Be.operation]=Mt(Be.type)}return V}function Mt(T){var V;const B=T.name.value,$=(V=Af[B])!==null&&V!==void 0?V:w[B];if($===void 0)throw new Error(`Unknown type: "${B}".`);return $}function Zt(T){return T.kind===E.LIST_TYPE?new fn(Zt(T.type)):T.kind===E.NON_NULL_TYPE?new ie(Zt(T.type)):Mt(T)}function wi(T){var V;return new xt({name:T.name.value,description:(V=T.description)===null||V===void 0?void 0:V.value,locations:T.locations.map(({value:B})=>B),isRepeatable:T.repeatable,args:Ci(T.arguments),astNode:T})}function Fr(T){const V=Object.create(null);for(const _e of T){var B;const Be=(B=_e.fields)!==null&&B!==void 0?B:[];for(const de of Be){var $;V[de.name.value]={type:Zt(de.type),description:($=de.description)===null||$===void 0?void 0:$.value,args:Ci(de.arguments),deprecationReason:Is(de),astNode:de}}}return V}function Ci(T){const V=T??[],B=Object.create(null);for(const _e of V){var $;const Be=Zt(_e.type);B[_e.name.value]={type:Be,description:($=_e.description)===null||$===void 0?void 0:$.value,defaultValue:Yt(_e.defaultValue,Be),deprecationReason:Is(_e),astNode:_e}}return B}function ot(T){const V=Object.create(null);for(const _e of T){var B;const Be=(B=_e.fields)!==null&&B!==void 0?B:[];for(const de of Be){var $;const wn=Zt(de.type);V[de.name.value]={type:wn,description:($=de.description)===null||$===void 0?void 0:$.value,defaultValue:Yt(de.defaultValue,wn),deprecationReason:Is(de),astNode:de}}}return V}function Vn(T){const V=Object.create(null);for(const _e of T){var B;const Be=(B=_e.values)!==null&&B!==void 0?B:[];for(const de of Be){var $;V[de.name.value]={description:($=de.description)===null||$===void 0?void 0:$.value,deprecationReason:Is(de),astNode:de}}}return V}function Dr(T){return T.flatMap(V=>{var B,$;return(B=($=V.interfaces)===null||$===void 0?void 0:$.map(Mt))!==null&&B!==void 0?B:[]})}function Kt(T){return T.flatMap(V=>{var B,$;return(B=($=V.types)===null||$===void 0?void 0:$.map(Mt))!==null&&B!==void 0?B:[]})}function Nn(T){var V;const B=T.name.value,$=(V=p[B])!==null&&V!==void 0?V:[];switch(T.kind){case E.OBJECT_TYPE_DEFINITION:{var _e;const nn=[T,...$];return new pt({name:B,description:(_e=T.description)===null||_e===void 0?void 0:_e.value,interfaces:()=>Dr(nn),fields:()=>Fr(nn),astNode:T,extensionASTNodes:$})}case E.INTERFACE_TYPE_DEFINITION:{var Be;const nn=[T,...$];return new ks({name:B,description:(Be=T.description)===null||Be===void 0?void 0:Be.value,interfaces:()=>Dr(nn),fields:()=>Fr(nn),astNode:T,extensionASTNodes:$})}case E.ENUM_TYPE_DEFINITION:{var de;const nn=[T,...$];return new Br({name:B,description:(de=T.description)===null||de===void 0?void 0:de.value,values:Vn(nn),astNode:T,extensionASTNodes:$})}case E.UNION_TYPE_DEFINITION:{var wn;const nn=[T,...$];return new Ms({name:B,description:(wn=T.description)===null||wn===void 0?void 0:wn.value,types:()=>Kt(nn),astNode:T,extensionASTNodes:$})}case E.SCALAR_TYPE_DEFINITION:{var Gr;return new Rt({name:B,description:(Gr=T.description)===null||Gr===void 0?void 0:Gr.value,specifiedByURL:vf(T),astNode:T,extensionASTNodes:$})}case E.INPUT_OBJECT_TYPE_DEFINITION:{var Lt;const nn=[T,...$];return new Ls({name:B,description:(Lt=T.description)===null||Lt===void 0?void 0:Lt.value,fields:()=>ot(nn),astNode:T,extensionASTNodes:$,isOneOf:tA(T)})}}}}const Af=dr([...Ws,...Js],r=>r.name);function Is(r){const n=vi(Dp,r);return n==null?void 0:n.reason}function vf(r){const n=vi(Ep,r);return n==null?void 0:n.url}function tA(r){return!!vi(yp,r)}function rA(r,n){r!=null&&r.kind===E.DOCUMENT||fe(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&Ky(r);const o=nA({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},r,n);if(o.astNode==null)for(const a of o.types)switch(a.name){case"Query":o.query=a;break;case"Mutation":o.mutation=a;break;case"Subscription":o.subscription=a;break}const s=[...o.directives,...$r.filter(a=>o.directives.every(c=>c.name!==a.name))];return new Op({...o,directives:s})}function iA(r,n){const t=bE(r,{noLocation:void 0,allowLegacyFragmentVariables:void 0});return rA(t,{assumeValidSDL:void 0,assumeValid:void 0})}function sA(r){const n=new Map;return oA(r,t=>{ze(t)&&aA(t,o=>{const s=La(o.type);Sa(n,s).references.push({kind:bi.FIELD,parent:t,by:o}),uA(o,c=>{const f=La(c.type);Sa(n,f).references.push({kind:bi.ARGUMENT,field:o,type:t,by:c})})}),$n(t)&&t.getTypes().forEach(o=>{Sa(n,o).references.push({kind:bi.UNION,by:t})})}),new j1(n)}function oA(r,n){Object.entries(r.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||n(t)})}function aA(r,n){Object.entries(r.getFields()).forEach(([,t])=>{n(t)})}function uA(r,n){Object.entries(r.args).forEach(([,t])=>{n(t)})}function Sa(r,n){let t=r.get(n.name);return t||(t={references:[]},r.set(n.name,t)),t}function La(r){return Se(r)||Fn(r)?La(r.ofType):r}const Sf=`schema {
  query: query
}

type query {
  """Fetch a single artist."""
  artist(id: Int!): App_Doctrine_ORM_Entity_Artist

  """Fetch a single artist group."""
  artistGroup(id: Int!): App_Doctrine_ORM_Entity_ArtistGroup

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
  artistGroups(filter: Filter_App_Doctrine_ORM_Entity_ArtistGroup, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_ArtistGroup

  """Fetch a collection of artists."""
  artists(filter: Filter_App_Doctrine_ORM_Entity_ArtistUnprefix, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_ArtistUnprefix

  """
  Fetch a collection of artists using a view for unprefixing the artist name.
  This endpoint does not have relationships.  Use \`artists\` for related data.
  
  Special Operations:
  
  * ArtistUnprefixListOther
  
      Fetch artists with non-a to z-names
  """
  artistsUnprefix(filter: Filter_App_Doctrine_ORM_Entity_ArtistUnprefix, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_ArtistUnprefix

  """
  Fetch a collection of artists that have sources
  using a view for unprefixing the artist name.
  This endpoint does not have relationships.  Use \`artists\` for related data.
  
  Special Operations:
  
  * ArtistsUnprefixSourceOther
  
      Fetch artists with sources with non-a to z-names
  """
  artistsUnprefixSource(filter: Filter_App_Doctrine_ORM_Entity_ArtistUnprefixSource, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_ArtistUnprefixSource

  """Fetch a single creator."""
  creator(id: Int!): App_Doctrine_ORM_Entity_InternetArchive_Creator

  """Fetch a collection of creators."""
  creators(filter: Filter_App_Doctrine_ORM_Entity_InternetArchive_Creator, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_InternetArchive_Creator

  """
  Fetch a collection of creators using a view for unprefixing the creator name.
  This endpoint does not have relationships.  Use \`creators\` for related data.
  
  Special Operations
  
  * CreatorUnprefixListOther
  
      Fetch creators with non-a to z-names
  """
  creatorsUnprefix(filter: Filter_App_Doctrine_ORM_Entity_InternetArchive_CreatorUnprefix, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_InternetArchive_CreatorUnprefix

  """Fetch a single identifier."""
  identifier(id: String!): App_Doctrine_ORM_Entity_InternetArchive_Identifier

  """Fetch a collection of identifiers."""
  identifiers(filter: Filter_App_Doctrine_ORM_Entity_InternetArchive_Creator, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_InternetArchive_Creator

  """Fetch a single performance."""
  performance(id: Int!): App_Doctrine_ORM_Entity_Performance

  """
  Fetch a collection of performances.
  
  Special Operations
  
  * ArtistGroupPerformances
  
      Fetch performances for the given artist group $id and $year
  """
  performances(filter: Filter_App_Doctrine_ORM_Entity_Performance, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_Performance

  """Fetch a single source."""
  source(id: Int!): App_Doctrine_ORM_Entity_Source

  """
  Fetch a collection of sources.
  
  Special Operations
  
  * ArtistSources
  
      Fetch sources by artist $id and $year
  * ArtistGroupSources
  
      Fetch sources by artist group $id and $year
  """
  sources(filter: Filter_App_Doctrine_ORM_Entity_Source, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_Source

  """Fetch a single user."""
  user(id: Int!): App_Doctrine_ORM_Entity_User

  """Fetch a single user by username."""
  userByUsername(username: String!): App_Doctrine_ORM_Entity_User

  """Fetch a single user list."""
  userList(id: Int!, shortname: String!): App_Doctrine_ORM_Entity_UserList

  """Fetch a single user list by username and listname."""
  userListByUsername(username: String!, listname: String): App_Doctrine_ORM_Entity_UserList

  """Fetch a single user performance."""
  userPerformance(id: Int!): App_Doctrine_ORM_Entity_UserPerformance

  """Fetch a user's list or sublist of performances by username."""
  userPerformancesByUsername(username: String!, listname: String, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_UserPerformance

  """Fetch a collection of users."""
  users(filter: Filter_App_Doctrine_ORM_Entity_User, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_User
}

"""App\\Doctrine\\ORM\\Entity\\Artist"""
type App_Doctrine_ORM_Entity_Artist {
  """abbrev"""
  abbrev: String

  """archive_key"""
  archive_key: Int

  """artistToArtistGroups"""
  artistToArtistGroups(filter: Filter_App_Doctrine_ORM_Entity_Artist_ArtistToArtistGroups, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_Artist_ArtistToArtistGroups

  """artistuserid"""
  artistuserid: String

  """createdAt"""
  createdAt: DateTime

  """creators"""
  creators(filter: Filter_App_Doctrine_ORM_Entity_Artist_Creators, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_Artist_Creators

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
  performances(filter: Filter_App_Doctrine_ORM_Entity_Artist_Performances, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_Artist_Performances

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

  """App\\Doctrine\\ORM\\Entity\\User"""
  user: App_Doctrine_ORM_Entity_User

  """The count of user performances for a user"""
  users(filter: Filter_App_Doctrine_ORM_Entity_User, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_User

  """The performance years for an artist"""
  years: [Int]
}

input Filter_App_Doctrine_ORM_Entity_Artist_ArtistToArtistGroups {
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

"""Connection for App_Doctrine_ORM_Entity_Artist_ArtistToArtistGroups"""
type Connection_App_Doctrine_ORM_Entity_Artist_ArtistToArtistGroups {
  edges: [Node_App_Doctrine_ORM_Entity_Artist_ArtistToArtistGroups]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_Artist_ArtistToArtistGroups {
  node: App_Doctrine_ORM_Entity_ArtistToArtistGroup
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\ArtistToArtistGroup"""
type App_Doctrine_ORM_Entity_ArtistToArtistGroup {
  """App\\Doctrine\\ORM\\Entity\\Artist"""
  artist: App_Doctrine_ORM_Entity_Artist

  """App\\Doctrine\\ORM\\Entity\\ArtistGroup"""
  artistGroup: App_Doctrine_ORM_Entity_ArtistGroup

  """reason"""
  reason: String

  """App\\Doctrine\\ORM\\Entity\\User"""
  user: App_Doctrine_ORM_Entity_User
}

"""App\\Doctrine\\ORM\\Entity\\ArtistGroup"""
type App_Doctrine_ORM_Entity_ArtistGroup {
  """artistToArtistGroups"""
  artistToArtistGroups(filter: Filter_App_Doctrine_ORM_Entity_ArtistGroup_ArtistToArtistGroups, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_ArtistGroup_ArtistToArtistGroups

  """Return a list of artists in an artist group sorted by name."""
  artistsByName: [App_Doctrine_ORM_Entity_Artist]

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

  """App\\Doctrine\\ORM\\Entity\\User"""
  user: App_Doctrine_ORM_Entity_User

  """userToArtistGroups"""
  userToArtistGroups(filter: Filter_App_Doctrine_ORM_Entity_ArtistGroup_UserToArtistGroups, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_ArtistGroup_UserToArtistGroups
}

input Filter_App_Doctrine_ORM_Entity_ArtistGroup_ArtistToArtistGroups {
  """String Filters"""
  reason: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Association Filters"""
  artistGroup: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""
Connection for App_Doctrine_ORM_Entity_ArtistGroup_ArtistToArtistGroups
"""
type Connection_App_Doctrine_ORM_Entity_ArtistGroup_ArtistToArtistGroups {
  edges: [Node_App_Doctrine_ORM_Entity_ArtistGroup_ArtistToArtistGroups]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_ArtistGroup_ArtistToArtistGroups {
  node: App_Doctrine_ORM_Entity_ArtistToArtistGroup
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

"""App\\Doctrine\\ORM\\Entity\\User"""
type App_Doctrine_ORM_Entity_User {
  """activetrading"""
  activetrading: Int

  """artistGroups"""
  artistGroups(filter: Filter_App_Doctrine_ORM_Entity_User_ArtistGroups, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_User_ArtistGroups

  """artistToArtistGroups"""
  artistToArtistGroups(filter: Filter_App_Doctrine_ORM_Entity_User_ArtistToArtistGroups, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_User_ArtistToArtistGroups

  """artists"""
  artists(filter: Filter_App_Doctrine_ORM_Entity_User_Artists, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_User_Artists

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

  """App\\Doctrine\\ORM\\Entity\\Template"""
  template: App_Doctrine_ORM_Entity_Template

  """User top artists"""
  topArtists(first: Int!): [TopArtist]

  """tradenotes"""
  tradenotes: String

  """updatedAt"""
  updatedAt: DateTime

  """userLists"""
  userLists(filter: Filter_App_Doctrine_ORM_Entity_User_UserLists, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_User_UserLists

  """The count of user performances for a user"""
  userPerformanceCount: Int

  """userPerformances"""
  userPerformances(filter: Filter_App_Doctrine_ORM_Entity_User_UserPerformances, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_User_UserPerformances

  """userToArtistGroups"""
  userToArtistGroups(filter: Filter_App_Doctrine_ORM_Entity_User_UserToArtistGroups, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_User_UserToArtistGroups

  """username"""
  username: String

  """validemail"""
  validemail: Boolean

  """wantedPerformances"""
  wantedPerformances(filter: Filter_App_Doctrine_ORM_Entity_User_WantedPerformances, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_User_WantedPerformances

  """zipcode"""
  zipcode: String
}

input Filter_App_Doctrine_ORM_Entity_User_ArtistGroups {
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

"""Connection for App_Doctrine_ORM_Entity_User_ArtistGroups"""
type Connection_App_Doctrine_ORM_Entity_User_ArtistGroups {
  edges: [Node_App_Doctrine_ORM_Entity_User_ArtistGroups]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_User_ArtistGroups {
  node: App_Doctrine_ORM_Entity_ArtistGroup
  cursor: String!
}

input Filter_App_Doctrine_ORM_Entity_User_ArtistToArtistGroups {
  """String Filters"""
  reason: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Association Filters"""
  artistGroup: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for App_Doctrine_ORM_Entity_User_ArtistToArtistGroups"""
type Connection_App_Doctrine_ORM_Entity_User_ArtistToArtistGroups {
  edges: [Node_App_Doctrine_ORM_Entity_User_ArtistToArtistGroups]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_User_ArtistToArtistGroups {
  node: App_Doctrine_ORM_Entity_ArtistToArtistGroup
  cursor: String!
}

input Filter_App_Doctrine_ORM_Entity_User_Artists {
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

"""Connection for App_Doctrine_ORM_Entity_User_Artists"""
type Connection_App_Doctrine_ORM_Entity_User_Artists {
  edges: [Node_App_Doctrine_ORM_Entity_User_Artists]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_User_Artists {
  node: App_Doctrine_ORM_Entity_Artist
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\Template"""
type App_Doctrine_ORM_Entity_Template {
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
  userLists(filter: Filter_App_Doctrine_ORM_Entity_Template_UserLists, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_Template_UserLists

  """users"""
  users(filter: Filter_App_Doctrine_ORM_Entity_Template_Users, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_Template_Users

  """zendview"""
  zendview: Boolean
}

input Filter_App_Doctrine_ORM_Entity_Template_UserLists {
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

"""Connection for App_Doctrine_ORM_Entity_Template_UserLists"""
type Connection_App_Doctrine_ORM_Entity_Template_UserLists {
  edges: [Node_App_Doctrine_ORM_Entity_Template_UserLists]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_Template_UserLists {
  node: App_Doctrine_ORM_Entity_UserList
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\UserList"""
type App_Doctrine_ORM_Entity_UserList {
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

  """App\\Doctrine\\ORM\\Entity\\Template"""
  template: App_Doctrine_ORM_Entity_Template

  """App\\Doctrine\\ORM\\Entity\\User"""
  user: App_Doctrine_ORM_Entity_User

  """The count of user performances assigned to a user list"""
  userPerformanceCount: Int

  """userPerformances"""
  userPerformances(filter: Filter_App_Doctrine_ORM_Entity_UserList_UserPerformances, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_UserList_UserPerformances

  """views"""
  views: Int
}

input Filter_App_Doctrine_ORM_Entity_UserList_UserPerformances {
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

"""Connection for App_Doctrine_ORM_Entity_UserList_UserPerformances"""
type Connection_App_Doctrine_ORM_Entity_UserList_UserPerformances {
  edges: [Node_App_Doctrine_ORM_Entity_UserList_UserPerformances]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_UserList_UserPerformances {
  node: App_Doctrine_ORM_Entity_UserPerformance
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\UserPerformance"""
type App_Doctrine_ORM_Entity_UserPerformance {
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

  """App\\Doctrine\\ORM\\Entity\\Performance"""
  performance: App_Doctrine_ORM_Entity_Performance

  """reference_number"""
  reference_number: String

  """scms_status"""
  scms_status: String

  """show_rating"""
  show_rating: String

  """sound_rating"""
  sound_rating: String

  """App\\Doctrine\\ORM\\Entity\\Source"""
  source: App_Doctrine_ORM_Entity_Source

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

  """App\\Doctrine\\ORM\\Entity\\User"""
  user: App_Doctrine_ORM_Entity_User

  """userLists"""
  userLists(filter: Filter_App_Doctrine_ORM_Entity_UserPerformance_UserLists, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_UserPerformance_UserLists

  """userid"""
  userid: String
}

"""App\\Doctrine\\ORM\\Entity\\Performance"""
type App_Doctrine_ORM_Entity_Performance {
  """App\\Doctrine\\ORM\\Entity\\Artist"""
  artist: App_Doctrine_ORM_Entity_Artist

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
  sources(filter: Filter_App_Doctrine_ORM_Entity_Performance_Sources, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_Performance_Sources

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
  userPerformances(filter: Filter_App_Doctrine_ORM_Entity_Performance_UserPerformances, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_Performance_UserPerformances

  """The count of user performances for a user"""
  users(filter: Filter_App_Doctrine_ORM_Entity_User, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_User

  """venue"""
  venue: String

  """wantedUsers"""
  wantedUsers(filter: Filter_App_Doctrine_ORM_Entity_Performance_WantedUsers, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_Performance_WantedUsers

  """year"""
  year: Int
}

input Filter_App_Doctrine_ORM_Entity_Performance_Sources {
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

"""Connection for App_Doctrine_ORM_Entity_Performance_Sources"""
type Connection_App_Doctrine_ORM_Entity_Performance_Sources {
  edges: [Node_App_Doctrine_ORM_Entity_Performance_Sources]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_Performance_Sources {
  node: App_Doctrine_ORM_Entity_Source
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\Source"""
type App_Doctrine_ORM_Entity_Source {
  """archiveIdentifier"""
  archiveIdentifier: String

  """checksums"""
  checksums(filter: Filter_App_Doctrine_ORM_Entity_Source_Checksums, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_Source_Checksums

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
  identifier(filter: Filter_App_Doctrine_ORM_Entity_Source_Identifier, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_Source_Identifier

  """mediaSize"""
  mediaSize: String

  """mediaSizeUncompressed"""
  mediaSizeUncompressed: String

  """App\\Doctrine\\ORM\\Entity\\Performance"""
  performance: App_Doctrine_ORM_Entity_Performance

  """shndiskcount"""
  shndiskcount: Int

  """textdoc"""
  textdoc: String

  """updatedAt"""
  updatedAt: DateTime

  """userPerformances"""
  userPerformances(filter: Filter_App_Doctrine_ORM_Entity_Source_UserPerformances, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_Source_UserPerformances

  """The count of user performances for a user"""
  users(filter: Filter_App_Doctrine_ORM_Entity_User, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_User

  """wavdiskcount"""
  wavdiskcount: Int
}

input Filter_App_Doctrine_ORM_Entity_Source_Checksums {
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

"""Connection for App_Doctrine_ORM_Entity_Source_Checksums"""
type Connection_App_Doctrine_ORM_Entity_Source_Checksums {
  edges: [Node_App_Doctrine_ORM_Entity_Source_Checksums]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_Source_Checksums {
  node: App_Doctrine_ORM_Entity_Checksum
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\Checksum"""
type App_Doctrine_ORM_Entity_Checksum {
  """body"""
  body: String

  """createdAt"""
  createdAt: DateTime

  """description"""
  description: String

  """id"""
  id: Int

  """App\\Doctrine\\ORM\\Entity\\Source"""
  source: App_Doctrine_ORM_Entity_Source
}

input Filter_App_Doctrine_ORM_Entity_Source_Identifier {
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

"""Connection for App_Doctrine_ORM_Entity_Source_Identifier"""
type Connection_App_Doctrine_ORM_Entity_Source_Identifier {
  edges: [Node_App_Doctrine_ORM_Entity_Source_Identifier]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_Source_Identifier {
  node: App_Doctrine_ORM_Entity_InternetArchive_Identifier
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier"""
type App_Doctrine_ORM_Entity_InternetArchive_Identifier {
  """addedAt"""
  addedAt: DateTime

  """archiveIdentifier"""
  archiveIdentifier: String

  """archiveSource"""
  archiveSource: String

  """collections"""
  collections(filter: Filter_App_Doctrine_ORM_Entity_InternetArchive_Identifier_Collections, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_InternetArchive_Identifier_Collections

  """coverage"""
  coverage: String

  """App\\Doctrine\\ORM\\Entity\\InternetArchive\\Creator"""
  creator: App_Doctrine_ORM_Entity_InternetArchive_Creator

  """description"""
  description: String

  """files"""
  files(filter: Filter_App_Doctrine_ORM_Entity_InternetArchive_Identifier_Files, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_InternetArchive_Identifier_Files

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

  """App\\Doctrine\\ORM\\Entity\\Source"""
  source: App_Doctrine_ORM_Entity_Source

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

input Filter_App_Doctrine_ORM_Entity_InternetArchive_Identifier_Collections {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15
}

"""
Connection for App_Doctrine_ORM_Entity_InternetArchive_Identifier_Collections
"""
type Connection_App_Doctrine_ORM_Entity_InternetArchive_Identifier_Collections {
  edges: [Node_App_Doctrine_ORM_Entity_InternetArchive_Identifier_Collections]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_InternetArchive_Identifier_Collections {
  node: App_Doctrine_ORM_Entity_InternetArchive_Collection
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\InternetArchive\\Collection"""
type App_Doctrine_ORM_Entity_InternetArchive_Collection {
  """id"""
  id: Int

  """identifiers"""
  identifiers(filter: Filter_App_Doctrine_ORM_Entity_InternetArchive_Collection_Identifiers, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_InternetArchive_Collection_Identifiers

  """name"""
  name: String
}

input Filter_App_Doctrine_ORM_Entity_InternetArchive_Collection_Identifiers {
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

"""
Connection for App_Doctrine_ORM_Entity_InternetArchive_Collection_Identifiers
"""
type Connection_App_Doctrine_ORM_Entity_InternetArchive_Collection_Identifiers {
  edges: [Node_App_Doctrine_ORM_Entity_InternetArchive_Collection_Identifiers]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_InternetArchive_Collection_Identifiers {
  node: App_Doctrine_ORM_Entity_InternetArchive_Identifier
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\InternetArchive\\Creator"""
type App_Doctrine_ORM_Entity_InternetArchive_Creator {
  """App\\Doctrine\\ORM\\Entity\\Artist"""
  artist: App_Doctrine_ORM_Entity_Artist

  """id"""
  id: Int

  """identifiers"""
  identifiers(filter: Filter_App_Doctrine_ORM_Entity_InternetArchive_Creator_Identifiers, pagination: Pagination): Connection_App_Doctrine_ORM_Entity_InternetArchive_Creator_Identifiers

  """name"""
  name: String
}

input Filter_App_Doctrine_ORM_Entity_InternetArchive_Creator_Identifiers {
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

"""
Connection for App_Doctrine_ORM_Entity_InternetArchive_Creator_Identifiers
"""
type Connection_App_Doctrine_ORM_Entity_InternetArchive_Creator_Identifiers {
  edges: [Node_App_Doctrine_ORM_Entity_InternetArchive_Creator_Identifiers]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_InternetArchive_Creator_Identifiers {
  node: App_Doctrine_ORM_Entity_InternetArchive_Identifier
  cursor: String!
}

input Filter_App_Doctrine_ORM_Entity_InternetArchive_Identifier_Files {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  body: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  identifier: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""
Connection for App_Doctrine_ORM_Entity_InternetArchive_Identifier_Files
"""
type Connection_App_Doctrine_ORM_Entity_InternetArchive_Identifier_Files {
  edges: [Node_App_Doctrine_ORM_Entity_InternetArchive_Identifier_Files]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_InternetArchive_Identifier_Files {
  node: App_Doctrine_ORM_Entity_InternetArchive_File
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\InternetArchive\\File"""
type App_Doctrine_ORM_Entity_InternetArchive_File {
  """body"""
  body: String

  """id"""
  id: Int

  """App\\Doctrine\\ORM\\Entity\\InternetArchive\\Identifier"""
  identifier: App_Doctrine_ORM_Entity_InternetArchive_Identifier

  """name"""
  name: String
}

input Filter_App_Doctrine_ORM_Entity_Source_UserPerformances {
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

"""Connection for App_Doctrine_ORM_Entity_Source_UserPerformances"""
type Connection_App_Doctrine_ORM_Entity_Source_UserPerformances {
  edges: [Node_App_Doctrine_ORM_Entity_Source_UserPerformances]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_Source_UserPerformances {
  node: App_Doctrine_ORM_Entity_UserPerformance
  cursor: String!
}

input Filter_App_Doctrine_ORM_Entity_User {
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

"""Connection for App_Doctrine_ORM_Entity_User"""
type Connection_App_Doctrine_ORM_Entity_User {
  edges: [Node_App_Doctrine_ORM_Entity_User]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_User {
  node: App_Doctrine_ORM_Entity_User
  cursor: String!
}

input Filter_App_Doctrine_ORM_Entity_Performance_UserPerformances {
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

"""Connection for App_Doctrine_ORM_Entity_Performance_UserPerformances"""
type Connection_App_Doctrine_ORM_Entity_Performance_UserPerformances {
  edges: [Node_App_Doctrine_ORM_Entity_Performance_UserPerformances]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_Performance_UserPerformances {
  node: App_Doctrine_ORM_Entity_UserPerformance
  cursor: String!
}

input Filter_App_Doctrine_ORM_Entity_Performance_WantedUsers {
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

"""Connection for App_Doctrine_ORM_Entity_Performance_WantedUsers"""
type Connection_App_Doctrine_ORM_Entity_Performance_WantedUsers {
  edges: [Node_App_Doctrine_ORM_Entity_Performance_WantedUsers]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_Performance_WantedUsers {
  node: App_Doctrine_ORM_Entity_User
  cursor: String!
}

input Filter_App_Doctrine_ORM_Entity_UserPerformance_UserLists {
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

"""Connection for App_Doctrine_ORM_Entity_UserPerformance_UserLists"""
type Connection_App_Doctrine_ORM_Entity_UserPerformance_UserLists {
  edges: [Node_App_Doctrine_ORM_Entity_UserPerformance_UserLists]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_UserPerformance_UserLists {
  node: App_Doctrine_ORM_Entity_UserList
  cursor: String!
}

input Filter_App_Doctrine_ORM_Entity_Template_Users {
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

"""Connection for App_Doctrine_ORM_Entity_Template_Users"""
type Connection_App_Doctrine_ORM_Entity_Template_Users {
  edges: [Node_App_Doctrine_ORM_Entity_Template_Users]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_Template_Users {
  node: App_Doctrine_ORM_Entity_User
  cursor: String!
}

"""Top artists details collected by a user"""
type TopArtist {
  id: Int
  name: String
  userPerformanceCount: Int
}

input Filter_App_Doctrine_ORM_Entity_User_UserLists {
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

"""Connection for App_Doctrine_ORM_Entity_User_UserLists"""
type Connection_App_Doctrine_ORM_Entity_User_UserLists {
  edges: [Node_App_Doctrine_ORM_Entity_User_UserLists]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_User_UserLists {
  node: App_Doctrine_ORM_Entity_UserList
  cursor: String!
}

input Filter_App_Doctrine_ORM_Entity_User_UserPerformances {
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

"""Connection for App_Doctrine_ORM_Entity_User_UserPerformances"""
type Connection_App_Doctrine_ORM_Entity_User_UserPerformances {
  edges: [Node_App_Doctrine_ORM_Entity_User_UserPerformances]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_User_UserPerformances {
  node: App_Doctrine_ORM_Entity_UserPerformance
  cursor: String!
}

input Filter_App_Doctrine_ORM_Entity_User_UserToArtistGroups {
  """Int Filters"""
  ref_user_update: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  temporary: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  artistGroup: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for App_Doctrine_ORM_Entity_User_UserToArtistGroups"""
type Connection_App_Doctrine_ORM_Entity_User_UserToArtistGroups {
  edges: [Node_App_Doctrine_ORM_Entity_User_UserToArtistGroups]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_User_UserToArtistGroups {
  node: App_Doctrine_ORM_Entity_UserToArtistGroup
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\UserToArtistGroup"""
type App_Doctrine_ORM_Entity_UserToArtistGroup {
  """App\\Doctrine\\ORM\\Entity\\ArtistGroup"""
  artistGroup: App_Doctrine_ORM_Entity_ArtistGroup

  """ref_user_update"""
  ref_user_update: Int

  """temporary"""
  temporary: Boolean

  """App\\Doctrine\\ORM\\Entity\\User"""
  user: App_Doctrine_ORM_Entity_User
}

input Filter_App_Doctrine_ORM_Entity_User_WantedPerformances {
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

"""Connection for App_Doctrine_ORM_Entity_User_WantedPerformances"""
type Connection_App_Doctrine_ORM_Entity_User_WantedPerformances {
  edges: [Node_App_Doctrine_ORM_Entity_User_WantedPerformances]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_User_WantedPerformances {
  node: App_Doctrine_ORM_Entity_Performance
  cursor: String!
}

input Filter_App_Doctrine_ORM_Entity_ArtistGroup_UserToArtistGroups {
  """Int Filters"""
  ref_user_update: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Boolean Filters"""
  temporary: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Association Filters"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Association Filters"""
  artistGroup: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for App_Doctrine_ORM_Entity_ArtistGroup_UserToArtistGroups"""
type Connection_App_Doctrine_ORM_Entity_ArtistGroup_UserToArtistGroups {
  edges: [Node_App_Doctrine_ORM_Entity_ArtistGroup_UserToArtistGroups]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_ArtistGroup_UserToArtistGroups {
  node: App_Doctrine_ORM_Entity_UserToArtistGroup
  cursor: String!
}

input Filter_App_Doctrine_ORM_Entity_Artist_Creators {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for App_Doctrine_ORM_Entity_Artist_Creators"""
type Connection_App_Doctrine_ORM_Entity_Artist_Creators {
  edges: [Node_App_Doctrine_ORM_Entity_Artist_Creators]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_Artist_Creators {
  node: App_Doctrine_ORM_Entity_InternetArchive_Creator
  cursor: String!
}

input Filter_App_Doctrine_ORM_Entity_Artist_Performances {
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

"""Connection for App_Doctrine_ORM_Entity_Artist_Performances"""
type Connection_App_Doctrine_ORM_Entity_Artist_Performances {
  edges: [Node_App_Doctrine_ORM_Entity_Artist_Performances]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_Artist_Performances {
  node: App_Doctrine_ORM_Entity_Performance
  cursor: String!
}

input Filter_App_Doctrine_ORM_Entity_ArtistGroup {
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

"""Connection for App_Doctrine_ORM_Entity_ArtistGroup"""
type Connection_App_Doctrine_ORM_Entity_ArtistGroup {
  edges: [Node_App_Doctrine_ORM_Entity_ArtistGroup]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_ArtistGroup {
  node: App_Doctrine_ORM_Entity_ArtistGroup
  cursor: String!
}

input Filter_App_Doctrine_ORM_Entity_ArtistUnprefix {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  nameUnprefix: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  top100: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15
}

"""Connection for App_Doctrine_ORM_Entity_ArtistUnprefix"""
type Connection_App_Doctrine_ORM_Entity_ArtistUnprefix {
  edges: [Node_App_Doctrine_ORM_Entity_ArtistUnprefix]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_ArtistUnprefix {
  node: App_Doctrine_ORM_Entity_ArtistUnprefix
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\ArtistUnprefix"""
type App_Doctrine_ORM_Entity_ArtistUnprefix {
  """id"""
  id: Int

  """name"""
  name: String

  """nameUnprefix"""
  nameUnprefix: String

  """top100"""
  top100: Boolean
}

input Filter_App_Doctrine_ORM_Entity_ArtistUnprefixSource {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  nameUnprefix: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Boolean Filters"""
  top100: Filters_Boolean_b468a454ba782e8572487ec259fe96aa

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15
}

"""Connection for App_Doctrine_ORM_Entity_ArtistUnprefixSource"""
type Connection_App_Doctrine_ORM_Entity_ArtistUnprefixSource {
  edges: [Node_App_Doctrine_ORM_Entity_ArtistUnprefixSource]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_ArtistUnprefixSource {
  node: App_Doctrine_ORM_Entity_ArtistUnprefixSource
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\ArtistUnprefixSource"""
type App_Doctrine_ORM_Entity_ArtistUnprefixSource {
  """id"""
  id: Int

  """name"""
  name: String

  """nameUnprefix"""
  nameUnprefix: String

  """top100"""
  top100: Boolean
}

input Filter_App_Doctrine_ORM_Entity_InternetArchive_Creator {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15

  """Association Filters"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Connection for App_Doctrine_ORM_Entity_InternetArchive_Creator"""
type Connection_App_Doctrine_ORM_Entity_InternetArchive_Creator {
  edges: [Node_App_Doctrine_ORM_Entity_InternetArchive_Creator]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_InternetArchive_Creator {
  node: App_Doctrine_ORM_Entity_InternetArchive_Creator
  cursor: String!
}

input Filter_App_Doctrine_ORM_Entity_InternetArchive_CreatorUnprefix {
  """String Filters"""
  name: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """String Filters"""
  nameUnprefix: Filters_String_1bb78ae9f3325089fccab4aafd4b69b5

  """Int Filters"""
  id: Filters_Int_c3e33b972e10b05e7a58c5c0a8c83b15
}

"""Connection for App_Doctrine_ORM_Entity_InternetArchive_CreatorUnprefix"""
type Connection_App_Doctrine_ORM_Entity_InternetArchive_CreatorUnprefix {
  edges: [Node_App_Doctrine_ORM_Entity_InternetArchive_CreatorUnprefix]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_InternetArchive_CreatorUnprefix {
  node: App_Doctrine_ORM_Entity_InternetArchive_CreatorUnprefix
  cursor: String!
}

"""App\\Doctrine\\ORM\\Entity\\InternetArchive\\CreatorUnprefix"""
type App_Doctrine_ORM_Entity_InternetArchive_CreatorUnprefix {
  """id"""
  id: Int

  """name"""
  name: String

  """nameUnprefix"""
  nameUnprefix: String
}

input Filter_App_Doctrine_ORM_Entity_Performance {
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

"""Connection for App_Doctrine_ORM_Entity_Performance"""
type Connection_App_Doctrine_ORM_Entity_Performance {
  edges: [Node_App_Doctrine_ORM_Entity_Performance]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_Performance {
  node: App_Doctrine_ORM_Entity_Performance
  cursor: String!
}

input Filter_App_Doctrine_ORM_Entity_Source {
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

"""Connection for App_Doctrine_ORM_Entity_Source"""
type Connection_App_Doctrine_ORM_Entity_Source {
  edges: [Node_App_Doctrine_ORM_Entity_Source]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_Source {
  node: App_Doctrine_ORM_Entity_Source
  cursor: String!
}

"""Connection for App_Doctrine_ORM_Entity_UserPerformance"""
type Connection_App_Doctrine_ORM_Entity_UserPerformance {
  edges: [Node_App_Doctrine_ORM_Entity_UserPerformance]
  totalCount: Int!
  pageInfo: PageInfo
}

type Node_App_Doctrine_ORM_Entity_UserPerformance {
  node: App_Doctrine_ORM_Entity_UserPerformance
  cursor: String!
}`,pn=EA(),Ua=js(Vs.DIRECTIVES,[]);var If;const cA=Hs((If=pn.getQueryType())==null?void 0:If.getFields());var Of;const lA=Hs((Of=pn.getMutationType())==null?void 0:Of.getFields());var Nf;const fA=Hs((Nf=pn.getSubscriptionType())==null?void 0:Nf.getFields()),ou=wt.keyBy($p(),r=>r.name.toLocaleLowerCase()),pA=wt.mapValues(ou,r=>{const n=Ua.find(t=>(t==null?void 0:t.name)===r.name||(t==null?void 0:t.name)==="*");return n?n.args.some(t=>t==="*")?r.args:n.args.map(t=>r.args.find(o=>o.name===t)).filter(t=>!!t):[]}),_A=Hs(pn.getTypeMap()),dA=sA(pn);function Hs(r){return wt.mapKeys(r||{},(n,t)=>t.toLocaleLowerCase())}function hA(){return wt.size(pn.getTypeMap())<=10}function gA(){return[Ta("Queries",pn.getQueryType()),Ta("Mutations",pn.getMutationType()),Ta("Subscriptions",pn.getSubscriptionType()),yA(),FA()].filter(r=>!!r)}function Ta(r,n){return mA(r,bA(n))}function bA(r){return wt.sortBy((r==null?void 0:r.getFields())||{},n=>n.name)}function mA(r,n){return n.length===0?null:{type:"menu",title:r,children:n.map(t=>({type:"page",title:t.name,section:r,deprecated:!!t.deprecationReason,href:Ii.joinUrlPaths(qs(),r.toLocaleLowerCase(),t.name)}))}}function FA(){return hA()?null:{type:"menu",title:"Types",children:wt.sortBy(wt.map(pn.getTypeMap()),n=>n.name).filter(n=>!n.name.startsWith("__")).map(n=>({type:"page",title:n.name,section:"Types",href:Ii.joinUrlPaths(qs(),"types",n.name)}))}}function UA(){return!!pn.getQueryType()}function BA(r){return cA[r.toLocaleLowerCase()]}function PA(){return!!pn.getMutationType()}function $A(r){return lA[r.toLocaleLowerCase()]}function GA(){return!!pn.getSubscriptionType()}function VA(r){return fA[r.toLocaleLowerCase()]}function jA(r){return _A[r.toLocaleLowerCase()]}function DA(r){return ou[r.toLocaleLowerCase()]}function qA(r){return DA(r.name)!==void 0}function zA(){return wt.size(ou)>0}function YA(r){return pA[r.name.toLocaleLowerCase()]||[]}function WA(r){if(r)return dA.getFor(r)}function QA(r){return wt.flatMap(r.getFields(),n=>({field:n,possibleDescriptions:Pp(n,r)}))}function Pp(r,n){return r?r.description?[{description:r.description,from:n}]:ze(n)?n.getInterfaces().flatMap(t=>Pp(t.getFields()[r.name],t)):[]:[]}function $p(){return Ua.some(r=>(r==null?void 0:r.name)==="*")?pn.getDirectives().filter(r=>!["include","skip","deprecated","specifiedBy"].includes(r.name)):Ua.filter(r=>!!(r!=null&&r.name)).map(({name:r})=>r?pn.getDirective(r):void 0).filter(r=>!!r)}function EA(){return Sf.trim().length===0?eA(JSON.parse(JSON.stringify({__schema:{types:[]}}))):iA(Sf)}function yA(){const r=$p();return r.length===0?null:{type:"menu",title:"Directives",children:r.map(n=>({type:"page",title:n.name,href:Ii.joinUrlPaths(qs(),"directives",n.name),section:"Directives"}))}}const JA=js(Vs.APP_TITLE,"GraphQL Documentation"),Gp=vA().concat(gA());TA(Gp);const AA=Object.freeze(Gp),HA=SA();function vA(){return js(Vs.PAGES,OA()).filter(n=>!!n).map(n=>jp([],n))}function SA(){const r=IA();if(r)return r.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function TA(r){function n(o,s){for(const a of o){if(a.type==="page"){s(a);continue}a.type==="menu"&&n(a.children,s)}}let t;n(r,o=>{t&&(t.next={title:o.title,section:o.section,href:o.href},o.previous={title:t.title,section:t.section,href:t.href}),t=o})}function IA(){return Vp(()=>!0)}function XA(r){return Vp(n=>n.href.toLocaleLowerCase()===r.toLocaleLowerCase())}function Vp(r){function n(t){for(const o of t){if(o.type==="page"&&r(o))return o;if(o.type==="menu"){const s=n(o.children);if(s)return s}}return null}return n(AA)}function jp(r,n){if(typeof n.content=="string")return{type:"page",title:n.title,content:n.content,href:Ii.joinUrlPaths(qs(),...r,Tf(n.title))};const t=r.concat([Tf(n.title)]);return{type:"menu",title:n.title,children:n.content.map(o=>({...jp(t,o),section:n.title}))}}function Tf(r){return Ii.generatePathSegment(r,new kf)}function OA(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(r=>r.trim()).join(`
`)}]}]}export{x1 as A,hA as B,jA as C,WA as D,Xt as E,et as F,Ve as G,$n as H,ze as I,mn as J,E as K,QA as L,hr as M,Ur as N,MA as O,$s as P,Rf as Q,bi as R,kA as S,kf as T,me as U,Xn as V,JA as W,wt as _,PA as a,UA as b,BA as c,GA as d,VA as e,XA as f,$A as g,HA as h,Cf as i,xA as j,zA as k,DA as l,YA as m,qs as n,qA as o,AA as p,lt as q,up as r,pn as s,Fn as t,Ii as u,Se as v,LA as w,js as x,Vs as y,fi as z};
