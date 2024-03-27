var Y7=Object.defineProperty;var W7=(r,n,t)=>n in r?Y7(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t;var Ie=(r,n,t)=>(W7(r,typeof n!="symbol"?n+"":n,t),t),Q7=(r,n,t)=>{if(!n.has(r))throw TypeError("Cannot "+t)};var sa=(r,n,t)=>{if(n.has(r))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(r):n.set(r,t)};var as=(r,n,t)=>(Q7(r,n,"access private method"),t);import{b as bs}from"./paths.DesMasWt.js";import{S as Le,i as Re,a as ee,t as oe,g as bt,c as St,b as qt,d as ur,m as zt,e as jt}from"./index.C5OLbMYN.js";import{s as Se,e as en,i as De,d as H,r as Kn,u as oc,f as Ne,g as xe,h as Ve,a4 as ms,x as et,y as nt,z as tt,R as ui,q as Ef,l as Ta,m as Ia,n as ya,H as Je,j as hn,G as yt,a as ba,c as Sa,U as J7,V as H7,a7 as Af,o as X7}from"./scheduler.X4qejJLZ.js";function ut(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function ac(r,n){const t={},s={},o={$$scope:1};let u=r.length;for(;u--;){const l=r[u],c=n[u];if(c){for(const d in l)d in c||(s[d]=1);for(const d in c)o[d]||(t[d]=c[d],o[d]=1);r[u]=c}else for(const d in l)o[d]=1}for(const l in s)l in t||(t[l]=void 0);return t}function AD(r){return typeof r=="object"&&r!==null?r:{}}function da(...r){return"/"+r.flatMap(n=>n.split("/")).filter(n=>!!n).join("/")}function ha(r){return r.startsWith("/")||r.startsWith("#")}function uc(r,n){return n.slug(r).replace(/--+/g,"-")}function oa(r){let n,t;const s=r[5].default,o=Kn(s,r,r[4],null);let u=[{id:r[1]}],l={};for(let c=0;c<u.length;c+=1)l=oc(l,u[c]);return{c(){n=Ne(`h${r[0].depth}`),o&&o.c(),this.h()},l(c){n=xe(c,(`h${r[0].depth}`||"null").toUpperCase(),{id:!0});var d=Ve(n);o&&o.l(d),d.forEach(H),this.h()},h(){ms(`h${r[0].depth}`)(n,l)},m(c,d){De(c,n,d),o&&o.m(n,null),t=!0},p(c,d){o&&o.p&&(!t||d&16)&&et(o,s,c,c[4],t?tt(s,c[4],d,null):nt(c[4]),null),ms(`h${c[0].depth}`)(n,l=ac(u,[(!t||d&2)&&{id:c[1]}]))},i(c){t||(ee(o,c),t=!0)},o(c){oe(o,c),t=!1},d(c){c&&H(n),o&&o.d(c)}}}function Z7(r){let n=`h${r[0].depth}`,t,s,o=`h${r[0].depth}`&&oa(r);return{c(){o&&o.c(),t=en()},l(u){o&&o.l(u),t=en()},m(u,l){o&&o.m(u,l),De(u,t,l),s=!0},p(u,[l]){`h${u[0].depth}`?n?Se(n,`h${u[0].depth}`)?(o.d(1),o=oa(u),n=`h${u[0].depth}`,o.c(),o.m(t.parentNode,t)):o.p(u,l):(o=oa(u),n=`h${u[0].depth}`,o.c(),o.m(t.parentNode,t)):n&&(o.d(1),o=null,n=`h${u[0].depth}`)},i(u){s||(ee(o,u),s=!0)},o(u){oe(o,u),s=!1},d(u){u&&H(t),o&&o.d(u)}}}function K7(r,n,t){let{$$slots:s={},$$scope:o}=n,{token:u}=n,{options:l}=n;const c=void 0;let d;return r.$$set=m=>{"token"in m&&t(0,u=m.token),"options"in m&&t(2,l=m.options),"$$scope"in m&&t(4,o=m.$$scope)},r.$$.update=()=>{r.$$.dirty&5&&t(1,d=uc(u.text,l.slugger))},[u,d,l,c,o,s]}class em extends Le{constructor(n){super(),Re(this,n,K7,Z7,Se,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function nm(r){let n,t;const s=r[4].default,o=Kn(s,r,r[3],null);return{c(){n=Ne("blockquote"),o&&o.c()},l(u){n=xe(u,"BLOCKQUOTE",{});var l=Ve(n);o&&o.l(l),l.forEach(H)},m(u,l){De(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&et(o,s,u,u[3],t?tt(s,u[3],l,null):nt(u[3]),null)},i(u){t||(ee(o,u),t=!0)},o(u){oe(o,u),t=!1},d(u){u&&H(n),o&&o.d(u)}}}function tm(r,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,c=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,s]}class rm extends Le{constructor(n){super(),Re(this,n,tm,nm,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Tf(r,n,t){const s=r.slice();return s[3]=n[t],s}function If(r){let n,t,s=ut(r[0]),o=[];for(let l=0;l<s.length;l+=1)o[l]=yf(Tf(r,s,l));const u=l=>oe(o[l],1,1,()=>{o[l]=null});return{c(){for(let l=0;l<o.length;l+=1)o[l].c();n=en()},l(l){for(let c=0;c<o.length;c+=1)o[c].l(l);n=en()},m(l,c){for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(l,c);De(l,n,c),t=!0},p(l,c){if(c&7){s=ut(l[0]);let d;for(d=0;d<s.length;d+=1){const m=Tf(l,s,d);o[d]?(o[d].p(m,c),ee(o[d],1)):(o[d]=yf(m),o[d].c(),ee(o[d],1),o[d].m(n.parentNode,n))}for(bt(),d=s.length;d<o.length;d+=1)u(d);St()}},i(l){if(!t){for(let c=0;c<s.length;c+=1)ee(o[c]);t=!0}},o(l){o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)oe(o[c]);t=!1},d(l){l&&H(n),ui(o,l)}}}function yf(r){let n,t;return n=new lc({props:{token:r[3],renderers:r[1],options:r[2]}}),{c(){qt(n.$$.fragment)},l(s){ur(n.$$.fragment,s)},m(s,o){zt(n,s,o),t=!0},p(s,o){const u={};o&1&&(u.token=s[3]),o&2&&(u.renderers=s[1]),o&4&&(u.options=s[2]),n.$set(u)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){oe(n.$$.fragment,s),t=!1},d(s){jt(n,s)}}}function im(r){let n,t,s=r[0]&&If(r);return{c(){s&&s.c(),n=en()},l(o){s&&s.l(o),n=en()},m(o,u){s&&s.m(o,u),De(o,n,u),t=!0},p(o,[u]){o[0]?s?(s.p(o,u),u&1&&ee(s,1)):(s=If(o),s.c(),ee(s,1),s.m(n.parentNode,n)):s&&(bt(),oe(s,1,1,()=>{s=null}),St())},i(o){t||(ee(s),t=!0)},o(o){oe(s),t=!1},d(o){o&&H(n),s&&s.d(o)}}}function sm(r,n,t){let{tokens:s}=n,{renderers:o}=n,{options:u}=n;return r.$$set=l=>{"tokens"in l&&t(0,s=l.tokens),"renderers"in l&&t(1,o=l.renderers),"options"in l&&t(2,u=l.options)},[s,o,u]}class Ss extends Le{constructor(n){super(),Re(this,n,sm,im,Se,{tokens:0,renderers:1,options:2})}}function bf(r){let n,t,s;var o=r[1][r[0].type];function u(l,c){return{props:{token:l[0],options:l[2],renderers:l[1],$$slots:{default:[um]},$$scope:{ctx:l}}}}return o&&(n=Ef(o,u(r))),{c(){n&&qt(n.$$.fragment),t=en()},l(l){n&&ur(n.$$.fragment,l),t=en()},m(l,c){n&&zt(n,l,c),De(l,t,c),s=!0},p(l,c){if(c&3&&o!==(o=l[1][l[0].type])){if(n){bt();const d=n;oe(d.$$.fragment,1,0,()=>{jt(d,1)}),St()}o?(n=Ef(o,u(l)),qt(n.$$.fragment),ee(n.$$.fragment,1),zt(n,t.parentNode,t)):n=null}else if(o){const d={};c&1&&(d.token=l[0]),c&4&&(d.options=l[2]),c&2&&(d.renderers=l[1]),c&15&&(d.$$scope={dirty:c,ctx:l}),n.$set(d)}},i(l){s||(n&&ee(n.$$.fragment,l),s=!0)},o(l){n&&oe(n.$$.fragment,l),s=!1},d(l){l&&H(t),n&&jt(n,l)}}}function om(r){let n=r[0].raw+"",t;return{c(){t=Ta(n)},l(s){t=Ia(s,n)},m(s,o){De(s,t,o)},p(s,o){o&1&&n!==(n=s[0].raw+"")&&ya(t,n)},i:Je,o:Je,d(s){s&&H(t)}}}function am(r){let n,t;return n=new Ss({props:{tokens:r[0].tokens,renderers:r[1],options:r[2]}}),{c(){qt(n.$$.fragment)},l(s){ur(n.$$.fragment,s)},m(s,o){zt(n,s,o),t=!0},p(s,o){const u={};o&1&&(u.tokens=s[0].tokens),o&2&&(u.renderers=s[1]),o&4&&(u.options=s[2]),n.$set(u)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){oe(n.$$.fragment,s),t=!1},d(s){jt(n,s)}}}function um(r){let n,t,s,o;const u=[am,om],l=[];function c(d,m){return"tokens"in d[0]&&d[0].tokens?0:1}return n=c(r),t=l[n]=u[n](r),{c(){t.c(),s=en()},l(d){t.l(d),s=en()},m(d,m){l[n].m(d,m),De(d,s,m),o=!0},p(d,m){let F=n;n=c(d),n===F?l[n].p(d,m):(bt(),oe(l[F],1,1,()=>{l[F]=null}),St(),t=l[n],t?t.p(d,m):(t=l[n]=u[n](d),t.c()),ee(t,1),t.m(s.parentNode,s))},i(d){o||(ee(t),o=!0)},o(d){oe(t),o=!1},d(d){d&&H(s),l[n].d(d)}}}function lm(r){let n,t,s=r[1][r[0].type]&&bf(r);return{c(){s&&s.c(),n=en()},l(o){s&&s.l(o),n=en()},m(o,u){s&&s.m(o,u),De(o,n,u),t=!0},p(o,[u]){o[1][o[0].type]?s?(s.p(o,u),u&3&&ee(s,1)):(s=bf(o),s.c(),ee(s,1),s.m(n.parentNode,n)):s&&(bt(),oe(s,1,1,()=>{s=null}),St())},i(o){t||(ee(s),t=!0)},o(o){oe(s),t=!1},d(o){o&&H(n),s&&s.d(o)}}}function fm(r,n,t){let{token:s}=n,{renderers:o}=n,{options:u}=n;return r.$$set=l=>{"token"in l&&t(0,s=l.token),"renderers"in l&&t(1,o=l.renderers),"options"in l&&t(2,u=l.options)},[s,o,u]}class lc extends Le{constructor(n){super(),Re(this,n,fm,lm,Se,{token:0,renderers:1,options:2})}}function Sf(r,n,t){const s=r.slice();return s[4]=n[t],s}function wf(r){let n,t;return n=new lc({props:{token:{...r[4]},options:r[1],renderers:r[2]}}),{c(){qt(n.$$.fragment)},l(s){ur(n.$$.fragment,s)},m(s,o){zt(n,s,o),t=!0},p(s,o){const u={};o&1&&(u.token={...s[4]}),o&2&&(u.options=s[1]),o&4&&(u.renderers=s[2]),n.$set(u)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){oe(n.$$.fragment,s),t=!1},d(s){jt(n,s)}}}function aa(r){let n,t,s,o=ut(r[0].items),u=[];for(let m=0;m<o.length;m+=1)u[m]=wf(Sf(r,o,m));const l=m=>oe(u[m],1,1,()=>{u[m]=null});let c=[{start:t=r[0].start||1}],d={};for(let m=0;m<c.length;m+=1)d=oc(d,c[m]);return{c(){n=Ne(r[3]);for(let m=0;m<u.length;m+=1)u[m].c();this.h()},l(m){n=xe(m,(r[3]||"null").toUpperCase(),{start:!0});var F=Ve(n);for(let E=0;E<u.length;E+=1)u[E].l(F);F.forEach(H),this.h()},h(){ms(r[3])(n,d)},m(m,F){De(m,n,F);for(let E=0;E<u.length;E+=1)u[E]&&u[E].m(n,null);s=!0},p(m,F){if(F&7){o=ut(m[0].items);let E;for(E=0;E<o.length;E+=1){const w=Sf(m,o,E);u[E]?(u[E].p(w,F),ee(u[E],1)):(u[E]=wf(w),u[E].c(),ee(u[E],1),u[E].m(n,null))}for(bt(),E=o.length;E<u.length;E+=1)l(E);St()}ms(m[3])(n,d=ac(c,[(!s||F&1&&t!==(t=m[0].start||1))&&{start:t}]))},i(m){if(!s){for(let F=0;F<o.length;F+=1)ee(u[F]);s=!0}},o(m){u=u.filter(Boolean);for(let F=0;F<u.length;F+=1)oe(u[F]);s=!1},d(m){m&&H(n),ui(u,m)}}}function cm(r){let n=r[3],t,s=r[3]&&aa(r);return{c(){s&&s.c(),t=en()},l(o){s&&s.l(o),t=en()},m(o,u){s&&s.m(o,u),De(o,t,u)},p(o,[u]){o[3]?n?Se(n,o[3])?(s.d(1),s=aa(o),n=o[3],s.c(),s.m(t.parentNode,t)):s.p(o,u):(s=aa(o),n=o[3],s.c(),s.m(t.parentNode,t)):n&&(s.d(1),s=null,n=o[3])},i:Je,o(o){oe(s,o)},d(o){o&&H(t),s&&s.d(o)}}}function pm(r,n,t){let{token:s}=n,{options:o}=n,{renderers:u}=n,l;return r.$$set=c=>{"token"in c&&t(0,s=c.token),"options"in c&&t(1,o=c.options),"renderers"in c&&t(2,u=c.renderers)},r.$$.update=()=>{r.$$.dirty&1&&t(3,l=s.ordered?"ol":"ul")},[s,o,u,l]}class dm extends Le{constructor(n){super(),Re(this,n,pm,cm,Se,{token:0,options:1,renderers:2})}}function hm(r){let n,t;const s=r[4].default,o=Kn(s,r,r[3],null);return{c(){n=Ne("li"),o&&o.c()},l(u){n=xe(u,"LI",{});var l=Ve(n);o&&o.l(l),l.forEach(H)},m(u,l){De(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&et(o,s,u,u[3],t?tt(s,u[3],l,null):nt(u[3]),null)},i(u){t||(ee(o,u),t=!0)},o(u){oe(o,u),t=!1},d(u){u&&H(n),o&&o.d(u)}}}function _m(r,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,c=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,s]}class gm extends Le{constructor(n){super(),Re(this,n,_m,hm,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function mm(r){let n;return{c(){n=Ne("br")},l(t){n=xe(t,"BR",{})},m(t,s){De(t,n,s)},p:Je,i:Je,o:Je,d(t){t&&H(n)}}}function Fm(r,n,t){return[void 0,void 0,void 0]}class Dm extends Le{constructor(n){super(),Re(this,n,Fm,mm,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function vm(r){let n,t,s=r[0].text+"",o,u;return{c(){n=Ne("pre"),t=Ne("code"),o=Ta(s),this.h()},l(l){n=xe(l,"PRE",{});var c=Ve(n);t=xe(c,"CODE",{class:!0});var d=Ve(t);o=Ia(d,s),d.forEach(H),c.forEach(H),this.h()},h(){hn(t,"class",u=`lang-${r[0].lang}`)},m(l,c){De(l,n,c),yt(n,t),yt(t,o)},p(l,[c]){c&1&&s!==(s=l[0].text+"")&&ya(o,s),c&1&&u!==(u=`lang-${l[0].lang}`)&&hn(t,"class",u)},i:Je,o:Je,d(l){l&&H(n)}}}function Em(r,n,t){let{token:s}=n;const o=void 0,u=void 0;return r.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class Am extends Le{constructor(n){super(),Re(this,n,Em,vm,Se,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Tm(r){let n,t=r[0].raw.slice(1,r[0].raw.length-1)+"",s;return{c(){n=Ne("code"),s=Ta(t)},l(o){n=xe(o,"CODE",{});var u=Ve(n);s=Ia(u,t),u.forEach(H)},m(o,u){De(o,n,u),yt(n,s)},p(o,[u]){u&1&&t!==(t=o[0].raw.slice(1,o[0].raw.length-1)+"")&&ya(s,t)},i:Je,o:Je,d(o){o&&H(n)}}}function Im(r,n,t){let{token:s}=n;const o=void 0,u=void 0;return r.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class ym extends Le{constructor(n){super(),Re(this,n,Im,Tm,Se,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Cf(r,n,t){const s=r.slice();return s[3]=n[t],s}function Nf(r,n,t){const s=r.slice();return s[6]=n[t],s}function xf(r,n,t){const s=r.slice();return s[9]=n[t],s}function kf(r){let n,t,s,o;return t=new Ss({props:{tokens:r[9].tokens,options:r[1],renderers:r[2]}}),{c(){n=Ne("th"),qt(t.$$.fragment),s=ba(),this.h()},l(u){n=xe(u,"TH",{scope:!0});var l=Ve(n);ur(t.$$.fragment,l),s=Sa(l),l.forEach(H),this.h()},h(){hn(n,"scope","col")},m(u,l){De(u,n,l),zt(t,n,null),yt(n,s),o=!0},p(u,l){const c={};l&1&&(c.tokens=u[9].tokens),l&2&&(c.options=u[1]),l&4&&(c.renderers=u[2]),t.$set(c)},i(u){o||(ee(t.$$.fragment,u),o=!0)},o(u){oe(t.$$.fragment,u),o=!1},d(u){u&&H(n),jt(t)}}}function Of(r){let n,t,s;return t=new Ss({props:{tokens:r[6].tokens,options:r[1],renderers:r[2]}}),{c(){n=Ne("td"),qt(t.$$.fragment)},l(o){n=xe(o,"TD",{});var u=Ve(n);ur(t.$$.fragment,u),u.forEach(H)},m(o,u){De(o,n,u),zt(t,n,null),s=!0},p(o,u){const l={};u&1&&(l.tokens=o[6].tokens),u&2&&(l.options=o[1]),u&4&&(l.renderers=o[2]),t.$set(l)},i(o){s||(ee(t.$$.fragment,o),s=!0)},o(o){oe(t.$$.fragment,o),s=!1},d(o){o&&H(n),jt(t)}}}function Lf(r){let n,t,s,o=ut(r[3]),u=[];for(let c=0;c<o.length;c+=1)u[c]=Of(Nf(r,o,c));const l=c=>oe(u[c],1,1,()=>{u[c]=null});return{c(){n=Ne("tr");for(let c=0;c<u.length;c+=1)u[c].c();t=ba()},l(c){n=xe(c,"TR",{});var d=Ve(n);for(let m=0;m<u.length;m+=1)u[m].l(d);t=Sa(d),d.forEach(H)},m(c,d){De(c,n,d);for(let m=0;m<u.length;m+=1)u[m]&&u[m].m(n,null);yt(n,t),s=!0},p(c,d){if(d&7){o=ut(c[3]);let m;for(m=0;m<o.length;m+=1){const F=Nf(c,o,m);u[m]?(u[m].p(F,d),ee(u[m],1)):(u[m]=Of(F),u[m].c(),ee(u[m],1),u[m].m(n,t))}for(bt(),m=o.length;m<u.length;m+=1)l(m);St()}},i(c){if(!s){for(let d=0;d<o.length;d+=1)ee(u[d]);s=!0}},o(c){u=u.filter(Boolean);for(let d=0;d<u.length;d+=1)oe(u[d]);s=!1},d(c){c&&H(n),ui(u,c)}}}function bm(r){let n,t,s,o,u,l,c=ut(r[0].header),d=[];for(let x=0;x<c.length;x+=1)d[x]=kf(xf(r,c,x));const m=x=>oe(d[x],1,1,()=>{d[x]=null});let F=ut(r[0].rows),E=[];for(let x=0;x<F.length;x+=1)E[x]=Lf(Cf(r,F,x));const w=x=>oe(E[x],1,1,()=>{E[x]=null});return{c(){n=Ne("table"),t=Ne("thead"),s=Ne("tr");for(let x=0;x<d.length;x+=1)d[x].c();o=ba(),u=Ne("tbody");for(let x=0;x<E.length;x+=1)E[x].c()},l(x){n=xe(x,"TABLE",{});var L=Ve(n);t=xe(L,"THEAD",{});var R=Ve(t);s=xe(R,"TR",{});var J=Ve(s);for(let Me=0;Me<d.length;Me+=1)d[Me].l(J);J.forEach(H),R.forEach(H),o=Sa(L),u=xe(L,"TBODY",{});var pe=Ve(u);for(let Me=0;Me<E.length;Me+=1)E[Me].l(pe);pe.forEach(H),L.forEach(H)},m(x,L){De(x,n,L),yt(n,t),yt(t,s);for(let R=0;R<d.length;R+=1)d[R]&&d[R].m(s,null);yt(n,o),yt(n,u);for(let R=0;R<E.length;R+=1)E[R]&&E[R].m(u,null);l=!0},p(x,[L]){if(L&7){c=ut(x[0].header);let R;for(R=0;R<c.length;R+=1){const J=xf(x,c,R);d[R]?(d[R].p(J,L),ee(d[R],1)):(d[R]=kf(J),d[R].c(),ee(d[R],1),d[R].m(s,null))}for(bt(),R=c.length;R<d.length;R+=1)m(R);St()}if(L&7){F=ut(x[0].rows);let R;for(R=0;R<F.length;R+=1){const J=Cf(x,F,R);E[R]?(E[R].p(J,L),ee(E[R],1)):(E[R]=Lf(J),E[R].c(),ee(E[R],1),E[R].m(u,null))}for(bt(),R=F.length;R<E.length;R+=1)w(R);St()}},i(x){if(!l){for(let L=0;L<c.length;L+=1)ee(d[L]);for(let L=0;L<F.length;L+=1)ee(E[L]);l=!0}},o(x){d=d.filter(Boolean);for(let L=0;L<d.length;L+=1)oe(d[L]);E=E.filter(Boolean);for(let L=0;L<E.length;L+=1)oe(E[L]);l=!1},d(x){x&&H(n),ui(d,x),ui(E,x)}}}function Sm(r,n,t){let{token:s}=n,{options:o}=n,{renderers:u}=n;return r.$$set=l=>{"token"in l&&t(0,s=l.token),"options"in l&&t(1,o=l.options),"renderers"in l&&t(2,u=l.renderers)},[s,o,u]}class wm extends Le{constructor(n){super(),Re(this,n,Sm,bm,Se,{token:0,options:1,renderers:2})}}function Cm(r){let n,t=r[0].text+"",s;return{c(){n=new J7(!1),s=en(),this.h()},l(o){n=H7(o,!1),s=en(),this.h()},h(){n.a=s},m(o,u){n.m(t,o,u),De(o,s,u)},p(o,[u]){u&1&&t!==(t=o[0].text+"")&&n.p(t)},i:Je,o:Je,d(o){o&&(H(s),n.d())}}}function Nm(r,n,t){let{token:s}=n;const o=void 0,u=void 0;return r.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class xm extends Le{constructor(n){super(),Re(this,n,Nm,Cm,Se,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function km(r){let n,t;const s=r[4].default,o=Kn(s,r,r[3],null);return{c(){n=Ne("p"),o&&o.c()},l(u){n=xe(u,"P",{});var l=Ve(n);o&&o.l(l),l.forEach(H)},m(u,l){De(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&et(o,s,u,u[3],t?tt(s,u[3],l,null):nt(u[3]),null)},i(u){t||(ee(o,u),t=!0)},o(u){oe(o,u),t=!1},d(u){u&&H(n),o&&o.d(u)}}}function Om(r,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,c=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,s]}class Lm extends Le{constructor(n){super(),Re(this,n,Om,km,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Rm(r){let n,t,s,o;const u=r[4].default,l=Kn(u,r,r[3],null);return{c(){n=Ne("a"),l&&l.c(),this.h()},l(c){n=xe(c,"A",{href:!0,title:!0});var d=Ve(n);l&&l.l(d),d.forEach(H),this.h()},h(){hn(n,"href",t=ha(r[0].href)?da(r[1].baseUrl,r[0].href):r[0].href),hn(n,"title",s=r[0].title)},m(c,d){De(c,n,d),l&&l.m(n,null),o=!0},p(c,[d]){l&&l.p&&(!o||d&8)&&et(l,u,c,c[3],o?tt(u,c[3],d,null):nt(c[3]),null),(!o||d&3&&t!==(t=ha(c[0].href)?da(c[1].baseUrl,c[0].href):c[0].href))&&hn(n,"href",t),(!o||d&1&&s!==(s=c[0].title))&&hn(n,"title",s)},i(c){o||(ee(l,c),o=!0)},o(c){oe(l,c),o=!1},d(c){c&&H(n),l&&l.d(c)}}}function Um(r,n,t){let{$$slots:s={},$$scope:o}=n,{token:u}=n,{options:l}=n;const c=void 0;return r.$$set=d=>{"token"in d&&t(0,u=d.token),"options"in d&&t(1,l=d.options),"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,s]}class Bm extends Le{constructor(n){super(),Re(this,n,Um,Rm,Se,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function Pm(r){let n;const t=r[4].default,s=Kn(t,r,r[3],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,u){s&&s.m(o,u),n=!0},p(o,[u]){s&&s.p&&(!n||u&8)&&et(s,t,o,o[3],n?tt(t,o[3],u,null):nt(o[3]),null)},i(o){n||(ee(s,o),n=!0)},o(o){oe(s,o),n=!1},d(o){s&&s.d(o)}}}function $m(r,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,c=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,s]}class Mm extends Le{constructor(n){super(),Re(this,n,$m,Pm,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Gm(r){let n,t;const s=r[4].default,o=Kn(s,r,r[3],null);return{c(){n=Ne("dfn"),o&&o.c()},l(u){n=xe(u,"DFN",{});var l=Ve(n);o&&o.l(l),l.forEach(H)},m(u,l){De(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&et(o,s,u,u[3],t?tt(s,u[3],l,null):nt(u[3]),null)},i(u){t||(ee(o,u),t=!0)},o(u){oe(o,u),t=!1},d(u){u&&H(n),o&&o.d(u)}}}function Vm(r,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,c=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,s]}class qm extends Le{constructor(n){super(),Re(this,n,Vm,Gm,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function zm(r){let n,t;const s=r[4].default,o=Kn(s,r,r[3],null);return{c(){n=Ne("del"),o&&o.c()},l(u){n=xe(u,"DEL",{});var l=Ve(n);o&&o.l(l),l.forEach(H)},m(u,l){De(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&et(o,s,u,u[3],t?tt(s,u[3],l,null):nt(u[3]),null)},i(u){t||(ee(o,u),t=!0)},o(u){oe(o,u),t=!1},d(u){u&&H(n),o&&o.d(u)}}}function jm(r,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,c=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,s]}class Ym extends Le{constructor(n){super(),Re(this,n,jm,zm,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Wm(r){let n,t;const s=r[4].default,o=Kn(s,r,r[3],null);return{c(){n=Ne("em"),o&&o.c()},l(u){n=xe(u,"EM",{});var l=Ve(n);o&&o.l(l),l.forEach(H)},m(u,l){De(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&et(o,s,u,u[3],t?tt(s,u[3],l,null):nt(u[3]),null)},i(u){t||(ee(o,u),t=!0)},o(u){oe(o,u),t=!1},d(u){u&&H(n),o&&o.d(u)}}}function Qm(r,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,c=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,s]}class Jm extends Le{constructor(n){super(),Re(this,n,Qm,Wm,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Hm(r){let n;return{c(){n=Ne("hr")},l(t){n=xe(t,"HR",{})},m(t,s){De(t,n,s)},p:Je,i:Je,o:Je,d(t){t&&H(n)}}}function Xm(r,n,t){return[void 0,void 0,void 0]}class Zm extends Le{constructor(n){super(),Re(this,n,Xm,Hm,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Km(r){let n,t;const s=r[4].default,o=Kn(s,r,r[3],null);return{c(){n=Ne("strong"),o&&o.c()},l(u){n=xe(u,"STRONG",{});var l=Ve(n);o&&o.l(l),l.forEach(H)},m(u,l){De(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&et(o,s,u,u[3],t?tt(s,u[3],l,null):nt(u[3]),null)},i(u){t||(ee(o,u),t=!0)},o(u){oe(o,u),t=!1},d(u){u&&H(n),o&&o.d(u)}}}function eF(r,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,c=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,s]}class nF extends Le{constructor(n){super(),Re(this,n,eF,Km,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function tF(r){let n,t,s,o;return{c(){n=Ne("img"),this.h()},l(u){n=xe(u,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){Af(n.src,t=r[0].href)||hn(n,"src",t),hn(n,"title",s=r[0].title),hn(n,"alt",o=r[0].text),hn(n,"class","markdown-image svelte-z38cge")},m(u,l){De(u,n,l)},p(u,[l]){l&1&&!Af(n.src,t=u[0].href)&&hn(n,"src",t),l&1&&s!==(s=u[0].title)&&hn(n,"title",s),l&1&&o!==(o=u[0].text)&&hn(n,"alt",o)},i:Je,o:Je,d(u){u&&H(n)}}}function rF(r,n,t){let{token:s}=n;const o=void 0,u=void 0;return r.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class iF extends Le{constructor(n){super(),Re(this,n,rF,tF,Se,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function sF(r){let n;const t=r[4].default,s=Kn(t,r,r[3],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,u){s&&s.m(o,u),n=!0},p(o,[u]){s&&s.p&&(!n||u&8)&&et(s,t,o,o[3],n?tt(t,o[3],u,null):nt(o[3]),null)},i(o){n||(ee(s,o),n=!0)},o(o){oe(s,o),n=!1},d(o){s&&s.d(o)}}}function oF(r,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,c=void 0;return r.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,c,o,s]}class Rf extends Le{constructor(n){super(),Re(this,n,oF,sF,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function wa(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let lr=wa();function fc(r){lr=r}const cc=/[&<>"']/,aF=new RegExp(cc.source,"g"),pc=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,uF=new RegExp(pc.source,"g"),lF={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Uf=r=>lF[r];function In(r,n){if(n){if(cc.test(r))return r.replace(aF,Uf)}else if(pc.test(r))return r.replace(uF,Uf);return r}const fF=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function cF(r){return r.replace(fF,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const pF=/(^|[^\[])\^/g;function Fe(r,n){let t=typeof r=="string"?r:r.source;n=n||"";const s={replace:(o,u)=>{let l=typeof u=="string"?u:u.source;return l=l.replace(pF,"$1"),t=t.replace(o,l),s},getRegex:()=>new RegExp(t,n)};return s}function Bf(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const si={exec:()=>null};function Pf(r,n){const t=r.replace(/\|/g,(u,l,c)=>{let d=!1,m=l;for(;--m>=0&&c[m]==="\\";)d=!d;return d?"|":" |"}),s=t.split(/ \|/);let o=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),n)if(s.length>n)s.splice(n);else for(;s.length<n;)s.push("");for(;o<s.length;o++)s[o]=s[o].trim().replace(/\\\|/g,"|");return s}function us(r,n,t){const s=r.length;if(s===0)return"";let o=0;for(;o<s;){const u=r.charAt(s-o-1);if(u===n&&!t)o++;else if(u!==n&&t)o++;else break}return r.slice(0,s-o)}function dF(r,n){if(r.indexOf(n[1])===-1)return-1;let t=0;for(let s=0;s<r.length;s++)if(r[s]==="\\")s++;else if(r[s]===n[0])t++;else if(r[s]===n[1]&&(t--,t<0))return s;return-1}function $f(r,n,t,s){const o=n.href,u=n.title?In(n.title):null,l=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){s.state.inLink=!0;const c={type:"link",raw:t,href:o,title:u,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,c}return{type:"image",raw:t,href:o,title:u,text:In(l)}}function hF(r,n){const t=r.match(/^(\s+)(?:```)/);if(t===null)return n;const s=t[1];return n.split(`
`).map(o=>{const u=o.match(/^\s+/);if(u===null)return o;const[l]=u;return l.length>=s.length?o.slice(s.length):o}).join(`
`)}class Fs{constructor(n){Ie(this,"options");Ie(this,"rules");Ie(this,"lexer");this.options=n||lr}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const s=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?s:us(s,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const s=t[0],o=hF(s,t[3]||"");return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:o}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let s=t[2].trim();if(/#$/.test(s)){const o=us(s,"#");(this.options.pedantic||!o||/ $/.test(o))&&(s=o.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:t[0]}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){const s=us(t[0].replace(/^ *>[ \t]?/gm,""),`
`),o=this.lexer.state.top;this.lexer.state.top=!0;const u=this.lexer.blockTokens(s);return this.lexer.state.top=o,{type:"blockquote",raw:t[0],tokens:u,text:s}}}list(n){let t=this.rules.block.list.exec(n);if(t){let s=t[1].trim();const o=s.length>1,u={type:"list",raw:"",ordered:o,start:o?+s.slice(0,-1):"",loose:!1,items:[]};s=o?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=o?s:"[*+-]");const l=new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`);let c="",d="",m=!1;for(;n;){let F=!1;if(!(t=l.exec(n))||this.rules.block.hr.test(n))break;c=t[0],n=n.substring(c.length);let E=t[2].split(`
`,1)[0].replace(/^\t+/,pe=>" ".repeat(3*pe.length)),w=n.split(`
`,1)[0],x=0;this.options.pedantic?(x=2,d=E.trimStart()):(x=t[2].search(/[^ ]/),x=x>4?1:x,d=E.slice(x),x+=t[1].length);let L=!1;if(!E&&/^ *$/.test(w)&&(c+=w+`
`,n=n.substring(w.length+1),F=!0),!F){const pe=new RegExp(`^ {0,${Math.min(3,x-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Me=new RegExp(`^ {0,${Math.min(3,x-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Ae=new RegExp(`^ {0,${Math.min(3,x-1)}}(?:\`\`\`|~~~)`),we=new RegExp(`^ {0,${Math.min(3,x-1)}}#`);for(;n;){const ke=n.split(`
`,1)[0];if(w=ke,this.options.pedantic&&(w=w.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Ae.test(w)||we.test(w)||pe.test(w)||Me.test(n))break;if(w.search(/[^ ]/)>=x||!w.trim())d+=`
`+w.slice(x);else{if(L||E.search(/[^ ]/)>=4||Ae.test(E)||we.test(E)||Me.test(E))break;d+=`
`+w}!L&&!w.trim()&&(L=!0),c+=ke+`
`,n=n.substring(ke.length+1),E=w.slice(x)}}u.loose||(m?u.loose=!0:/\n *\n *$/.test(c)&&(m=!0));let R=null,J;this.options.gfm&&(R=/^\[[ xX]\] /.exec(d),R&&(J=R[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),u.items.push({type:"list_item",raw:c,task:!!R,checked:J,loose:!1,text:d,tokens:[]}),u.raw+=c}u.items[u.items.length-1].raw=c.trimEnd(),u.items[u.items.length-1].text=d.trimEnd(),u.raw=u.raw.trimEnd();for(let F=0;F<u.items.length;F++)if(this.lexer.state.top=!1,u.items[F].tokens=this.lexer.blockTokens(u.items[F].text,[]),!u.loose){const E=u.items[F].tokens.filter(x=>x.type==="space"),w=E.length>0&&E.some(x=>/\n.*\n/.test(x.raw));u.loose=w}if(u.loose)for(let F=0;F<u.items.length;F++)u.items[F].loose=!0;return u}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const s=t[1].toLowerCase().replace(/\s+/g," "),o=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",u=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:s,raw:t[0],href:o,title:u}}}table(n){const t=this.rules.block.table.exec(n);if(!t||!/[:|]/.test(t[2]))return;const s=Pf(t[1]),o=t[2].replace(/^\||\| *$/g,"").split("|"),u=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],l={type:"table",raw:t[0],header:[],align:[],rows:[]};if(s.length===o.length){for(const c of o)/^ *-+: *$/.test(c)?l.align.push("right"):/^ *:-+: *$/.test(c)?l.align.push("center"):/^ *:-+ *$/.test(c)?l.align.push("left"):l.align.push(null);for(const c of s)l.header.push({text:c,tokens:this.lexer.inline(c)});for(const c of u)l.rows.push(Pf(c,l.header.length).map(d=>({text:d,tokens:this.lexer.inline(d)})));return l}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:In(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const s=t[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const l=us(s.slice(0,-1),"\\");if((s.length-l.length)%2===0)return}else{const l=dF(t[2],"()");if(l>-1){const d=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,d).trim(),t[3]=""}}let o=t[2],u="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);l&&(o=l[1],u=l[3])}else u=t[3]?t[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(s)?o=o.slice(1):o=o.slice(1,-1)),$f(t,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:u&&u.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(n,t){let s;if((s=this.rules.inline.reflink.exec(n))||(s=this.rules.inline.nolink.exec(n))){const o=(s[2]||s[1]).replace(/\s+/g," "),u=t[o.toLowerCase()];if(!u){const l=s[0].charAt(0);return{type:"text",raw:l,text:l}}return $f(s,u,s[0],this.lexer)}}emStrong(n,t,s=""){let o=this.rules.inline.emStrongLDelim.exec(n);if(!o||o[3]&&s.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!s||this.rules.inline.punctuation.exec(s)){const l=[...o[0]].length-1;let c,d,m=l,F=0;const E=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(E.lastIndex=0,t=t.slice(-1*n.length+l);(o=E.exec(t))!=null;){if(c=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!c)continue;if(d=[...c].length,o[3]||o[4]){m+=d;continue}else if((o[5]||o[6])&&l%3&&!((l+d)%3)){F+=d;continue}if(m-=d,m>0)continue;d=Math.min(d,d+m+F);const w=[...o[0]][0].length,x=n.slice(0,l+o.index+w+d);if(Math.min(l,d)%2){const R=x.slice(1,-1);return{type:"em",raw:x,text:R,tokens:this.lexer.inlineTokens(R)}}const L=x.slice(2,-2);return{type:"strong",raw:x,text:L,tokens:this.lexer.inlineTokens(L)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let s=t[2].replace(/\n/g," ");const o=/[^ ]/.test(s),u=/^ /.test(s)&&/ $/.test(s);return o&&u&&(s=s.substring(1,s.length-1)),s=In(s,!0),{type:"codespan",raw:t[0],text:s}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let s,o;return t[2]==="@"?(s=In(t[1]),o="mailto:"+s):(s=In(t[1]),o=s),{type:"link",raw:t[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}url(n){var s;let t;if(t=this.rules.inline.url.exec(n)){let o,u;if(t[2]==="@")o=In(t[0]),u="mailto:"+o;else{let l;do l=t[0],t[0]=((s=this.rules.inline._backpedal.exec(t[0]))==null?void 0:s[0])??"";while(l!==t[0]);o=In(t[0]),t[1]==="www."?u="http://"+t[0]:u=t[0]}return{type:"link",raw:t[0],text:o,href:u,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let s;return this.lexer.state.inRawBlock?s=t[0]:s=In(t[0]),{type:"text",raw:t[0],text:s}}}}const _F=/^(?: *(?:\n|$))+/,gF=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,mF=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ci=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,FF=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,dc=/(?:[*+-]|\d{1,9}[.)])/,hc=Fe(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,dc).getRegex(),Ca=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,DF=/^[^\n]+/,Na=/(?!\s*\])(?:\\.|[^\[\]\\])+/,vF=Fe(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",Na).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),EF=Fe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,dc).getRegex(),ws="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",xa=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,AF=Fe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",xa).replace("tag",ws).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),_c=Fe(Ca).replace("hr",ci).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ws).getRegex(),TF=Fe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",_c).getRegex(),ka={blockquote:TF,code:gF,def:vF,fences:mF,heading:FF,hr:ci,html:AF,lheading:hc,list:EF,newline:_F,paragraph:_c,table:si,text:DF},Mf=Fe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ci).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ws).getRegex(),IF={...ka,table:Mf,paragraph:Fe(Ca).replace("hr",ci).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Mf).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ws).getRegex()},yF={...ka,html:Fe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",xa).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:si,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Fe(Ca).replace("hr",ci).replace("heading",` *#{1,6} *[^
]`).replace("lheading",hc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},gc=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,bF=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,mc=/^( {2,}|\\)\n(?!\s*$)/,SF=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,pi="\\p{P}$+<=>`^|~",wF=Fe(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,pi).getRegex(),CF=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,NF=Fe(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,pi).getRegex(),xF=Fe("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,pi).getRegex(),kF=Fe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,pi).getRegex(),OF=Fe(/\\([punct])/,"gu").replace(/punct/g,pi).getRegex(),LF=Fe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),RF=Fe(xa).replace("(?:-->|$)","-->").getRegex(),UF=Fe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",RF).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ds=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,BF=Fe(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Ds).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Fc=Fe(/^!?\[(label)\]\[(ref)\]/).replace("label",Ds).replace("ref",Na).getRegex(),Dc=Fe(/^!?\[(ref)\](?:\[\])?/).replace("ref",Na).getRegex(),PF=Fe("reflink|nolink(?!\\()","g").replace("reflink",Fc).replace("nolink",Dc).getRegex(),Oa={_backpedal:si,anyPunctuation:OF,autolink:LF,blockSkip:CF,br:mc,code:bF,del:si,emStrongLDelim:NF,emStrongRDelimAst:xF,emStrongRDelimUnd:kF,escape:gc,link:BF,nolink:Dc,punctuation:wF,reflink:Fc,reflinkSearch:PF,tag:UF,text:SF,url:si},$F={...Oa,link:Fe(/^!?\[(label)\]\((.*?)\)/).replace("label",Ds).getRegex(),reflink:Fe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ds).getRegex()},_a={...Oa,escape:Fe(gc).replace("])","~|])").getRegex(),url:Fe(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},MF={..._a,br:Fe(mc).replace("{2,}","*").getRegex(),text:Fe(_a.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ls={normal:ka,gfm:IF,pedantic:yF},ei={normal:Oa,gfm:_a,breaks:MF,pedantic:$F};class Wn{constructor(n){Ie(this,"tokens");Ie(this,"options");Ie(this,"state");Ie(this,"tokenizer");Ie(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||lr,this.options.tokenizer=this.options.tokenizer||new Fs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:ls.normal,inline:ei.normal};this.options.pedantic?(t.block=ls.pedantic,t.inline=ei.pedantic):this.options.gfm&&(t.block=ls.gfm,this.options.breaks?t.inline=ei.breaks:t.inline=ei.gfm),this.tokenizer.rules=t}static get rules(){return{block:ls,inline:ei}}static lex(n,t){return new Wn(t).lex(n)}static lexInline(n,t){return new Wn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(c,d,m)=>d+"    ".repeat(m.length));let s,o,u,l;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(s=c.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(n)){n=n.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(s=this.tokenizer.fences(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(u=n,this.options.extensions&&this.options.extensions.startBlock){let c=1/0;const d=n.slice(1);let m;this.options.extensions.startBlock.forEach(F=>{m=F.call({lexer:this},d),typeof m=="number"&&m>=0&&(c=Math.min(c,m))}),c<1/0&&c>=0&&(u=n.substring(0,c+1))}if(this.state.top&&(s=this.tokenizer.paragraph(u))){o=t[t.length-1],l&&o.type==="paragraph"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s),l=u.length!==n.length,n=n.substring(s.raw.length);continue}if(s=this.tokenizer.text(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&o.type==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(n){const c="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let s,o,u,l=n,c,d,m;if(this.tokens.links){const F=Object.keys(this.tokens.links);if(F.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)F.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,c.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(d||(m=""),d=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(F=>(s=F.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.escape(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.link(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(n,l,m)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(n)){n=n.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(n))){n=n.substring(s.raw.length),t.push(s);continue}if(u=n,this.options.extensions&&this.options.extensions.startInline){let F=1/0;const E=n.slice(1);let w;this.options.extensions.startInline.forEach(x=>{w=x.call({lexer:this},E),typeof w=="number"&&w>=0&&(F=Math.min(F,w))}),F<1/0&&F>=0&&(u=n.substring(0,F+1))}if(s=this.tokenizer.inlineText(u)){n=n.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(m=s.raw.slice(-1)),d=!0,o=t[t.length-1],o&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(n){const F="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(F);break}else throw new Error(F)}}return t}}class vs{constructor(n){Ie(this,"options");this.options=n||lr}code(n,t,s){var u;const o=(u=(t||"").match(/^\S*/))==null?void 0:u[0];return n=n.replace(/\n$/,"")+`
`,o?'<pre><code class="language-'+In(o)+'">'+(s?n:In(n,!0))+`</code></pre>
`:"<pre><code>"+(s?n:In(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,t){return n}heading(n,t,s){return`<h${t}>${n}</h${t}>
`}hr(){return`<hr>
`}list(n,t,s){const o=t?"ol":"ul",u=t&&s!==1?' start="'+s+'"':"";return"<"+o+u+`>
`+n+"</"+o+`>
`}listitem(n,t,s){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(n){return`<p>${n}</p>
`}table(n,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+t+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,t){const s=t.header?"th":"td";return(t.align?`<${s} align="${t.align}">`:`<${s}>`)+n+`</${s}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return"<br>"}del(n){return`<del>${n}</del>`}link(n,t,s){const o=Bf(n);if(o===null)return s;n=o;let u='<a href="'+n+'"';return t&&(u+=' title="'+t+'"'),u+=">"+s+"</a>",u}image(n,t,s){const o=Bf(n);if(o===null)return s;n=o;let u=`<img src="${n}" alt="${s}"`;return t&&(u+=` title="${t}"`),u+=">",u}text(n){return n}}class La{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,t,s){return""+s}image(n,t,s){return""+s}br(){return""}}class lt{constructor(n){Ie(this,"options");Ie(this,"renderer");Ie(this,"textRenderer");this.options=n||lr,this.options.renderer=this.options.renderer||new vs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new La}static parse(n,t){return new lt(t).parse(n)}static parseInline(n,t){return new lt(t).parseInline(n)}parse(n,t=!0){let s="";for(let o=0;o<n.length;o++){const u=n[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]){const l=u,c=this.options.extensions.renderers[l.type].call({parser:this},l);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){s+=c||"";continue}}switch(u.type){case"space":continue;case"hr":{s+=this.renderer.hr();continue}case"heading":{const l=u;s+=this.renderer.heading(this.parseInline(l.tokens),l.depth,cF(this.parseInline(l.tokens,this.textRenderer)));continue}case"code":{const l=u;s+=this.renderer.code(l.text,l.lang,!!l.escaped);continue}case"table":{const l=u;let c="",d="";for(let F=0;F<l.header.length;F++)d+=this.renderer.tablecell(this.parseInline(l.header[F].tokens),{header:!0,align:l.align[F]});c+=this.renderer.tablerow(d);let m="";for(let F=0;F<l.rows.length;F++){const E=l.rows[F];d="";for(let w=0;w<E.length;w++)d+=this.renderer.tablecell(this.parseInline(E[w].tokens),{header:!1,align:l.align[w]});m+=this.renderer.tablerow(d)}s+=this.renderer.table(c,m);continue}case"blockquote":{const l=u,c=this.parse(l.tokens);s+=this.renderer.blockquote(c);continue}case"list":{const l=u,c=l.ordered,d=l.start,m=l.loose;let F="";for(let E=0;E<l.items.length;E++){const w=l.items[E],x=w.checked,L=w.task;let R="";if(w.task){const J=this.renderer.checkbox(!!x);m?w.tokens.length>0&&w.tokens[0].type==="paragraph"?(w.tokens[0].text=J+" "+w.tokens[0].text,w.tokens[0].tokens&&w.tokens[0].tokens.length>0&&w.tokens[0].tokens[0].type==="text"&&(w.tokens[0].tokens[0].text=J+" "+w.tokens[0].tokens[0].text)):w.tokens.unshift({type:"text",text:J+" "}):R+=J+" "}R+=this.parse(w.tokens,m),F+=this.renderer.listitem(R,L,!!x)}s+=this.renderer.list(F,c,d);continue}case"html":{const l=u;s+=this.renderer.html(l.text,l.block);continue}case"paragraph":{const l=u;s+=this.renderer.paragraph(this.parseInline(l.tokens));continue}case"text":{let l=u,c=l.tokens?this.parseInline(l.tokens):l.text;for(;o+1<n.length&&n[o+1].type==="text";)l=n[++o],c+=`
`+(l.tokens?this.parseInline(l.tokens):l.text);s+=t?this.renderer.paragraph(c):c;continue}default:{const l='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}parseInline(n,t){t=t||this.renderer;let s="";for(let o=0;o<n.length;o++){const u=n[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]){const l=this.options.extensions.renderers[u.type].call({parser:this},u);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(u.type)){s+=l||"";continue}}switch(u.type){case"escape":{const l=u;s+=t.text(l.text);break}case"html":{const l=u;s+=t.html(l.text);break}case"link":{const l=u;s+=t.link(l.href,l.title,this.parseInline(l.tokens,t));break}case"image":{const l=u;s+=t.image(l.href,l.title,l.text);break}case"strong":{const l=u;s+=t.strong(this.parseInline(l.tokens,t));break}case"em":{const l=u;s+=t.em(this.parseInline(l.tokens,t));break}case"codespan":{const l=u;s+=t.codespan(l.text);break}case"br":{s+=t.br();break}case"del":{const l=u;s+=t.del(this.parseInline(l.tokens,t));break}case"text":{const l=u;s+=t.text(l.text);break}default:{const l='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}}class oi{constructor(n){Ie(this,"options");this.options=n||lr}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}Ie(oi,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var fi,ga,ys,vc;class GF{constructor(...n){sa(this,fi);sa(this,ys);Ie(this,"defaults",wa());Ie(this,"options",this.setOptions);Ie(this,"parse",as(this,fi,ga).call(this,Wn.lex,lt.parse));Ie(this,"parseInline",as(this,fi,ga).call(this,Wn.lexInline,lt.parseInline));Ie(this,"Parser",lt);Ie(this,"Renderer",vs);Ie(this,"TextRenderer",La);Ie(this,"Lexer",Wn);Ie(this,"Tokenizer",Fs);Ie(this,"Hooks",oi);this.use(...n)}walkTokens(n,t){var o,u;let s=[];for(const l of n)switch(s=s.concat(t.call(this,l)),l.type){case"table":{const c=l;for(const d of c.header)s=s.concat(this.walkTokens(d.tokens,t));for(const d of c.rows)for(const m of d)s=s.concat(this.walkTokens(m.tokens,t));break}case"list":{const c=l;s=s.concat(this.walkTokens(c.items,t));break}default:{const c=l;(u=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&u[c.type]?this.defaults.extensions.childTokens[c.type].forEach(d=>{const m=c[d].flat(1/0);s=s.concat(this.walkTokens(m,t))}):c.tokens&&(s=s.concat(this.walkTokens(c.tokens,t)))}}return s}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(s=>{const o={...s};if(o.async=this.defaults.async||o.async||!1,s.extensions&&(s.extensions.forEach(u=>{if(!u.name)throw new Error("extension name required");if("renderer"in u){const l=t.renderers[u.name];l?t.renderers[u.name]=function(...c){let d=u.renderer.apply(this,c);return d===!1&&(d=l.apply(this,c)),d}:t.renderers[u.name]=u.renderer}if("tokenizer"in u){if(!u.level||u.level!=="block"&&u.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const l=t[u.level];l?l.unshift(u.tokenizer):t[u.level]=[u.tokenizer],u.start&&(u.level==="block"?t.startBlock?t.startBlock.push(u.start):t.startBlock=[u.start]:u.level==="inline"&&(t.startInline?t.startInline.push(u.start):t.startInline=[u.start]))}"childTokens"in u&&u.childTokens&&(t.childTokens[u.name]=u.childTokens)}),o.extensions=t),s.renderer){const u=this.defaults.renderer||new vs(this.defaults);for(const l in s.renderer){if(!(l in u))throw new Error(`renderer '${l}' does not exist`);if(l==="options")continue;const c=l,d=s.renderer[c],m=u[c];u[c]=(...F)=>{let E=d.apply(u,F);return E===!1&&(E=m.apply(u,F)),E||""}}o.renderer=u}if(s.tokenizer){const u=this.defaults.tokenizer||new Fs(this.defaults);for(const l in s.tokenizer){if(!(l in u))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;const c=l,d=s.tokenizer[c],m=u[c];u[c]=(...F)=>{let E=d.apply(u,F);return E===!1&&(E=m.apply(u,F)),E}}o.tokenizer=u}if(s.hooks){const u=this.defaults.hooks||new oi;for(const l in s.hooks){if(!(l in u))throw new Error(`hook '${l}' does not exist`);if(l==="options")continue;const c=l,d=s.hooks[c],m=u[c];oi.passThroughHooks.has(l)?u[c]=F=>{if(this.defaults.async)return Promise.resolve(d.call(u,F)).then(w=>m.call(u,w));const E=d.call(u,F);return m.call(u,E)}:u[c]=(...F)=>{let E=d.apply(u,F);return E===!1&&(E=m.apply(u,F)),E}}o.hooks=u}if(s.walkTokens){const u=this.defaults.walkTokens,l=s.walkTokens;o.walkTokens=function(c){let d=[];return d.push(l.call(this,c)),u&&(d=d.concat(u.call(this,c))),d}}this.defaults={...this.defaults,...o}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return Wn.lex(n,t??this.defaults)}parser(n,t){return lt.parse(n,t??this.defaults)}}fi=new WeakSet,ga=function(n,t){return(s,o)=>{const u={...o},l={...this.defaults,...u};this.defaults.async===!0&&u.async===!1&&(l.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),l.async=!0);const c=as(this,ys,vc).call(this,!!l.silent,!!l.async);if(typeof s>"u"||s===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(l.hooks&&(l.hooks.options=l),l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(s):s).then(d=>n(d,l)).then(d=>l.hooks?l.hooks.processAllTokens(d):d).then(d=>l.walkTokens?Promise.all(this.walkTokens(d,l.walkTokens)).then(()=>d):d).then(d=>t(d,l)).then(d=>l.hooks?l.hooks.postprocess(d):d).catch(c);try{l.hooks&&(s=l.hooks.preprocess(s));let d=n(s,l);l.hooks&&(d=l.hooks.processAllTokens(d)),l.walkTokens&&this.walkTokens(d,l.walkTokens);let m=t(d,l);return l.hooks&&(m=l.hooks.postprocess(m)),m}catch(d){return c(d)}}},ys=new WeakSet,vc=function(n,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const o="<p>An error occurred:</p><pre>"+In(s.message+"",!0)+"</pre>";return t?Promise.resolve(o):o}if(t)return Promise.reject(s);throw s}};const or=new GF;function me(r,n){return or.parse(r,n)}me.options=me.setOptions=function(r){return or.setOptions(r),me.defaults=or.defaults,fc(me.defaults),me};me.getDefaults=wa;me.defaults=lr;me.use=function(...r){return or.use(...r),me.defaults=or.defaults,fc(me.defaults),me};me.walkTokens=function(r,n){return or.walkTokens(r,n)};me.parseInline=or.parseInline;me.Parser=lt;me.parser=lt.parse;me.Renderer=vs;me.TextRenderer=La;me.Lexer=Wn;me.lexer=Wn.lex;me.Tokenizer=Fs;me.Hooks=oi;me.parse=me;me.options;me.setOptions;me.use;me.walkTokens;me.parseInline;lt.parse;Wn.lex;const VF=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,qF=Object.hasOwnProperty;class Ec{constructor(){this.occurrences,this.reset()}slug(n,t){const s=this;let o=zF(n,t===!0);const u=o;for(;qF.call(s.occurrences,o);)s.occurrences[u]++,o=u+"-"+s.occurrences[u];return s.occurrences[o]=0,o}reset(){this.occurrences=Object.create(null)}}function zF(r,n){return typeof r!="string"?"":(n||(r=r.toLowerCase()),r.replace(VF,"").replace(/ /g,"-"))}function jF(r){return new Wn().lex(r)}const YF=()=>({heading:em,blockquote:rm,list:dm,list_item:gm,br:Dm,code:Am,codespan:ym,table:wm,html:xm,paragraph:Lm,link:Bm,text:Mm,def:qm,del:Ym,em:Jm,hr:Zm,strong:nF,image:iF,space:Rf,escape:Rf}),WF=()=>({baseUrl:"/",slugger:new Ec});function QF(){const r=console.warn;console.warn=n=>{n.includes("unknown prop")||n.includes("unexpected slot")||r(n)},X7(()=>{console.warn=r})}function JF(r){let n,t;return n=new Ss({props:{tokens:r[0],renderers:r[1],options:r[2]}}),{c(){qt(n.$$.fragment)},l(s){ur(n.$$.fragment,s)},m(s,o){zt(n,s,o),t=!0},p(s,[o]){const u={};o&1&&(u.tokens=s[0]),o&2&&(u.renderers=s[1]),o&4&&(u.options=s[2]),n.$set(u)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){oe(n.$$.fragment,s),t=!1},d(s){jt(n,s)}}}function HF(r,n,t){QF();let{source:s}=n,{options:o={}}=n,{renderers:u={}}=n,l,c,d;return r.$$set=m=>{"source"in m&&t(3,s=m.source),"options"in m&&t(4,o=m.options),"renderers"in m&&t(5,u=m.renderers)},r.$$.update=()=>{r.$$.dirty&56&&(t(0,l=jF(s)),t(1,c={...YF(),...u}),t(2,d={...WF(),...o}))},[l,c,d,s,o,u]}class TD extends Le{constructor(n){super(),Re(this,n,HF,JF,Se,{source:3,options:4,renderers:5})}}const di={joinUrlPaths:da,isRelative:ha,generatePathSegment:uc};var ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function XF(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function fs(){return{convert:r=>r==null||r===""?null:String(r),asString:r=>String(r),type:r=>r.string().optional()}}function Gf(r){return{convert:n=>{if(typeof n=="object")return n;if(typeof n=="string"){const t=JSON.parse(n);return typeof t!="object"?null:t}return null},asString:n=>JSON.stringify(n),type:n=>n.record(r(n).optional()).optional()}}function cs(r){return{convert:n=>{if(Array.isArray(n))return n;if(typeof n=="string"){const t=JSON.parse(n);return Array.isArray(t)?t:null}return null},asString:n=>JSON.stringify(n),type:n=>n.array(r(n)).optional()}}function Vf(r){return{convert:n=>n==null||!r.find(t=>t===n)?null:n,asString:n=>String(n),type:n=>n.enum(r).optional()}}function Tn(r,n){const t=s=>n.convert(s[r]);return{name:ZF(r),key:r,asEnv:s=>({[r]:n.asString(s)}),zod:{type:n.type},get:t,getOrDefault:(s,o)=>t(s)??o}}function ZF(r){return r.toLowerCase().replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("-","").replace("_",""))}var Ra={APP_LOGO:Tn("APP_LOGO",fs()),APP_TITLE:Tn("APP_TITLE",fs()),APP_FAVICON:Tn("APP_FAVICON",fs()),SITE_ROOT:Tn("SITE_ROOT",fs()),SITE_META:Tn("SITE_META",Gf(r=>r.string())),CUSTOM_STYLES:Tn("CUSTOM_STYLES",cs(r=>r.string())),FIELDS_SORTING:Tn("FIELDS_SORTING",Vf(["default","alphabetical"])),ARGUMENTS_SORTING:Tn("ARGUMENTS_SORTING",Vf(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:Tn("QUERY_GENERATION_FACTORIES",Gf(r=>r.union([r.string(),r.boolean(),r.number(),r.null(),r.record(r.unknown())]))),PAGES:Tn("PAGES",cs(r=>{const n=r.lazy(()=>r.object({title:r.string().min(1),content:r.union([r.array(n),r.string().min(1)])}));return n})),EXTERNAL_LINKS:Tn("EXTERNAL_LINKS",cs(r=>r.object({label:r.string().min(1),href:r.string().min(1),position:r.union([r.literal("header"),r.literal("navigation")]).optional(),kind:r.string().min(1).optional(),group:r.string().min(1).optional()}))),DIRECTIVES:Tn("DIRECTIVES",cs(r=>r.object({name:r.string().min(1),args:r.array(r.string())})))};function KF(){return{convert:r=>{if(r===null||r===void 0)return null;switch(typeof r){case"boolean":return r;case"string":const n=r.toLowerCase().trim();return n==="true"||n==="t"||n==="1";case"number":return r!==0;default:return null}},asString:r=>String(r),type:r=>r.boolean().optional()}}Tn("MAGIDOC_GENERATE",KF());var Es={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Es.exports;(function(r,n){(function(){var t,s="4.17.21",o=200,u="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",c="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",m=500,F="__lodash_placeholder__",E=1,w=2,x=4,L=1,R=2,J=1,pe=2,Me=4,Ae=8,we=16,ke=32,nn=64,He=128,dt=256,k=512,X=30,tn="...",xt=800,Qt=16,gi=1,cr=2,mi=3,it=1/0,Pn=9007199254740991,pr=17976931348623157e292,Jt=NaN,yn=4294967295,b=yn-1,M=yn>>>1,B=[["ary",He],["bind",J],["bindKey",pe],["curry",Ae],["curryRight",we],["flip",k],["partial",ke],["partialRight",nn],["rearg",dt]],P="[object Arguments]",de="[object Array]",Ue="[object AsyncFunction]",he="[object Boolean]",bn="[object Date]",Or="[object DOMException]",kt="[object Error]",Xe="[object Function]",qa="[object GeneratorFunction]",$n="[object Map]",Lr="[object Number]",lp="[object Null]",ht="[object Object]",za="[object Promise]",fp="[object Proxy]",Rr="[object RegExp]",Mn="[object Set]",Ur="[object String]",Fi="[object Symbol]",cp="[object Undefined]",Br="[object WeakMap]",pp="[object WeakSet]",Pr="[object ArrayBuffer]",dr="[object DataView]",Bs="[object Float32Array]",Ps="[object Float64Array]",$s="[object Int8Array]",Ms="[object Int16Array]",Gs="[object Int32Array]",Vs="[object Uint8Array]",qs="[object Uint8ClampedArray]",zs="[object Uint16Array]",js="[object Uint32Array]",dp=/\b__p \+= '';/g,hp=/\b(__p \+=) '' \+/g,_p=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ja=/&(?:amp|lt|gt|quot|#39);/g,Ya=/[&<>"']/g,gp=RegExp(ja.source),mp=RegExp(Ya.source),Fp=/<%-([\s\S]+?)%>/g,Dp=/<%([\s\S]+?)%>/g,Wa=/<%=([\s\S]+?)%>/g,vp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ep=/^\w*$/,Ap=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ys=/[\\^$.*+?()[\]{}|]/g,Tp=RegExp(Ys.source),Ws=/^\s+/,Ip=/\s/,yp=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,bp=/\{\n\/\* \[wrapped with (.+)\] \*/,Sp=/,? & /,wp=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Cp=/[()=,{}\[\]\/\s]/,Np=/\\(\\)?/g,xp=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Qa=/\w*$/,kp=/^[-+]0x[0-9a-f]+$/i,Op=/^0b[01]+$/i,Lp=/^\[object .+?Constructor\]$/,Rp=/^0o[0-7]+$/i,Up=/^(?:0|[1-9]\d*)$/,Bp=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Di=/($^)/,Pp=/['\n\r\u2028\u2029\\]/g,vi="\\ud800-\\udfff",$p="\\u0300-\\u036f",Mp="\\ufe20-\\ufe2f",Gp="\\u20d0-\\u20ff",Ja=$p+Mp+Gp,Ha="\\u2700-\\u27bf",Xa="a-z\\xdf-\\xf6\\xf8-\\xff",Vp="\\xac\\xb1\\xd7\\xf7",qp="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",zp="\\u2000-\\u206f",jp=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Za="A-Z\\xc0-\\xd6\\xd8-\\xde",Ka="\\ufe0e\\ufe0f",eu=Vp+qp+zp+jp,Qs="['’]",Yp="["+vi+"]",nu="["+eu+"]",Ei="["+Ja+"]",tu="\\d+",Wp="["+Ha+"]",ru="["+Xa+"]",iu="[^"+vi+eu+tu+Ha+Xa+Za+"]",Js="\\ud83c[\\udffb-\\udfff]",Qp="(?:"+Ei+"|"+Js+")",su="[^"+vi+"]",Hs="(?:\\ud83c[\\udde6-\\uddff]){2}",Xs="[\\ud800-\\udbff][\\udc00-\\udfff]",hr="["+Za+"]",ou="\\u200d",au="(?:"+ru+"|"+iu+")",Jp="(?:"+hr+"|"+iu+")",uu="(?:"+Qs+"(?:d|ll|m|re|s|t|ve))?",lu="(?:"+Qs+"(?:D|LL|M|RE|S|T|VE))?",fu=Qp+"?",cu="["+Ka+"]?",Hp="(?:"+ou+"(?:"+[su,Hs,Xs].join("|")+")"+cu+fu+")*",Xp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Zp="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",pu=cu+fu+Hp,Kp="(?:"+[Wp,Hs,Xs].join("|")+")"+pu,ed="(?:"+[su+Ei+"?",Ei,Hs,Xs,Yp].join("|")+")",nd=RegExp(Qs,"g"),td=RegExp(Ei,"g"),Zs=RegExp(Js+"(?="+Js+")|"+ed+pu,"g"),rd=RegExp([hr+"?"+ru+"+"+uu+"(?="+[nu,hr,"$"].join("|")+")",Jp+"+"+lu+"(?="+[nu,hr+au,"$"].join("|")+")",hr+"?"+au+"+"+uu,hr+"+"+lu,Zp,Xp,tu,Kp].join("|"),"g"),id=RegExp("["+ou+vi+Ja+Ka+"]"),sd=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,od=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ad=-1,ye={};ye[Bs]=ye[Ps]=ye[$s]=ye[Ms]=ye[Gs]=ye[Vs]=ye[qs]=ye[zs]=ye[js]=!0,ye[P]=ye[de]=ye[Pr]=ye[he]=ye[dr]=ye[bn]=ye[kt]=ye[Xe]=ye[$n]=ye[Lr]=ye[ht]=ye[Rr]=ye[Mn]=ye[Ur]=ye[Br]=!1;var Te={};Te[P]=Te[de]=Te[Pr]=Te[dr]=Te[he]=Te[bn]=Te[Bs]=Te[Ps]=Te[$s]=Te[Ms]=Te[Gs]=Te[$n]=Te[Lr]=Te[ht]=Te[Rr]=Te[Mn]=Te[Ur]=Te[Fi]=Te[Vs]=Te[qs]=Te[zs]=Te[js]=!0,Te[kt]=Te[Xe]=Te[Br]=!1;var ud={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},ld={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},fd={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},cd={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},pd=parseFloat,dd=parseInt,du=typeof ni=="object"&&ni&&ni.Object===Object&&ni,hd=typeof self=="object"&&self&&self.Object===Object&&self,We=du||hd||Function("return this")(),Ks=n&&!n.nodeType&&n,Ht=Ks&&!0&&r&&!r.nodeType&&r,hu=Ht&&Ht.exports===Ks,eo=hu&&du.process,Sn=function(){try{var v=Ht&&Ht.require&&Ht.require("util").types;return v||eo&&eo.binding&&eo.binding("util")}catch{}}(),_u=Sn&&Sn.isArrayBuffer,gu=Sn&&Sn.isDate,mu=Sn&&Sn.isMap,Fu=Sn&&Sn.isRegExp,Du=Sn&&Sn.isSet,vu=Sn&&Sn.isTypedArray;function mn(v,y,I){switch(I.length){case 0:return v.call(y);case 1:return v.call(y,I[0]);case 2:return v.call(y,I[0],I[1]);case 3:return v.call(y,I[0],I[1],I[2])}return v.apply(y,I)}function _d(v,y,I,$){for(var Z=-1,ce=v==null?0:v.length;++Z<ce;){var qe=v[Z];y($,qe,I(qe),v)}return $}function wn(v,y){for(var I=-1,$=v==null?0:v.length;++I<$&&y(v[I],I,v)!==!1;);return v}function gd(v,y){for(var I=v==null?0:v.length;I--&&y(v[I],I,v)!==!1;);return v}function Eu(v,y){for(var I=-1,$=v==null?0:v.length;++I<$;)if(!y(v[I],I,v))return!1;return!0}function Ot(v,y){for(var I=-1,$=v==null?0:v.length,Z=0,ce=[];++I<$;){var qe=v[I];y(qe,I,v)&&(ce[Z++]=qe)}return ce}function Ai(v,y){var I=v==null?0:v.length;return!!I&&_r(v,y,0)>-1}function no(v,y,I){for(var $=-1,Z=v==null?0:v.length;++$<Z;)if(I(y,v[$]))return!0;return!1}function be(v,y){for(var I=-1,$=v==null?0:v.length,Z=Array($);++I<$;)Z[I]=y(v[I],I,v);return Z}function Lt(v,y){for(var I=-1,$=y.length,Z=v.length;++I<$;)v[Z+I]=y[I];return v}function to(v,y,I,$){var Z=-1,ce=v==null?0:v.length;for($&&ce&&(I=v[++Z]);++Z<ce;)I=y(I,v[Z],Z,v);return I}function md(v,y,I,$){var Z=v==null?0:v.length;for($&&Z&&(I=v[--Z]);Z--;)I=y(I,v[Z],Z,v);return I}function ro(v,y){for(var I=-1,$=v==null?0:v.length;++I<$;)if(y(v[I],I,v))return!0;return!1}var Fd=io("length");function Dd(v){return v.split("")}function vd(v){return v.match(wp)||[]}function Au(v,y,I){var $;return I(v,function(Z,ce,qe){if(y(Z,ce,qe))return $=ce,!1}),$}function Ti(v,y,I,$){for(var Z=v.length,ce=I+($?1:-1);$?ce--:++ce<Z;)if(y(v[ce],ce,v))return ce;return-1}function _r(v,y,I){return y===y?kd(v,y,I):Ti(v,Tu,I)}function Ed(v,y,I,$){for(var Z=I-1,ce=v.length;++Z<ce;)if($(v[Z],y))return Z;return-1}function Tu(v){return v!==v}function Iu(v,y){var I=v==null?0:v.length;return I?oo(v,y)/I:Jt}function io(v){return function(y){return y==null?t:y[v]}}function so(v){return function(y){return v==null?t:v[y]}}function yu(v,y,I,$,Z){return Z(v,function(ce,qe,ve){I=$?($=!1,ce):y(I,ce,qe,ve)}),I}function Ad(v,y){var I=v.length;for(v.sort(y);I--;)v[I]=v[I].value;return v}function oo(v,y){for(var I,$=-1,Z=v.length;++$<Z;){var ce=y(v[$]);ce!==t&&(I=I===t?ce:I+ce)}return I}function ao(v,y){for(var I=-1,$=Array(v);++I<v;)$[I]=y(I);return $}function Td(v,y){return be(y,function(I){return[I,v[I]]})}function bu(v){return v&&v.slice(0,Nu(v)+1).replace(Ws,"")}function Fn(v){return function(y){return v(y)}}function uo(v,y){return be(y,function(I){return v[I]})}function $r(v,y){return v.has(y)}function Su(v,y){for(var I=-1,$=v.length;++I<$&&_r(y,v[I],0)>-1;);return I}function wu(v,y){for(var I=v.length;I--&&_r(y,v[I],0)>-1;);return I}function Id(v,y){for(var I=v.length,$=0;I--;)v[I]===y&&++$;return $}var yd=so(ud),bd=so(ld);function Sd(v){return"\\"+cd[v]}function wd(v,y){return v==null?t:v[y]}function gr(v){return id.test(v)}function Cd(v){return sd.test(v)}function Nd(v){for(var y,I=[];!(y=v.next()).done;)I.push(y.value);return I}function lo(v){var y=-1,I=Array(v.size);return v.forEach(function($,Z){I[++y]=[Z,$]}),I}function Cu(v,y){return function(I){return v(y(I))}}function Rt(v,y){for(var I=-1,$=v.length,Z=0,ce=[];++I<$;){var qe=v[I];(qe===y||qe===F)&&(v[I]=F,ce[Z++]=I)}return ce}function Ii(v){var y=-1,I=Array(v.size);return v.forEach(function($){I[++y]=$}),I}function xd(v){var y=-1,I=Array(v.size);return v.forEach(function($){I[++y]=[$,$]}),I}function kd(v,y,I){for(var $=I-1,Z=v.length;++$<Z;)if(v[$]===y)return $;return-1}function Od(v,y,I){for(var $=I+1;$--;)if(v[$]===y)return $;return $}function mr(v){return gr(v)?Rd(v):Fd(v)}function Gn(v){return gr(v)?Ud(v):Dd(v)}function Nu(v){for(var y=v.length;y--&&Ip.test(v.charAt(y)););return y}var Ld=so(fd);function Rd(v){for(var y=Zs.lastIndex=0;Zs.test(v);)++y;return y}function Ud(v){return v.match(Zs)||[]}function Bd(v){return v.match(rd)||[]}var Pd=function v(y){y=y==null?We:Fr.defaults(We.Object(),y,Fr.pick(We,od));var I=y.Array,$=y.Date,Z=y.Error,ce=y.Function,qe=y.Math,ve=y.Object,fo=y.RegExp,$d=y.String,Cn=y.TypeError,yi=I.prototype,Md=ce.prototype,Dr=ve.prototype,bi=y["__core-js_shared__"],Si=Md.toString,ge=Dr.hasOwnProperty,Gd=0,xu=function(){var e=/[^.]+$/.exec(bi&&bi.keys&&bi.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),wi=Dr.toString,Vd=Si.call(ve),qd=We._,zd=fo("^"+Si.call(ge).replace(Ys,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ci=hu?y.Buffer:t,Ut=y.Symbol,Ni=y.Uint8Array,ku=Ci?Ci.allocUnsafe:t,xi=Cu(ve.getPrototypeOf,ve),Ou=ve.create,Lu=Dr.propertyIsEnumerable,ki=yi.splice,Ru=Ut?Ut.isConcatSpreadable:t,Mr=Ut?Ut.iterator:t,Xt=Ut?Ut.toStringTag:t,Oi=function(){try{var e=tr(ve,"defineProperty");return e({},"",{}),e}catch{}}(),jd=y.clearTimeout!==We.clearTimeout&&y.clearTimeout,Yd=$&&$.now!==We.Date.now&&$.now,Wd=y.setTimeout!==We.setTimeout&&y.setTimeout,Li=qe.ceil,Ri=qe.floor,co=ve.getOwnPropertySymbols,Qd=Ci?Ci.isBuffer:t,Uu=y.isFinite,Jd=yi.join,Hd=Cu(ve.keys,ve),ze=qe.max,Ze=qe.min,Xd=$.now,Zd=y.parseInt,Bu=qe.random,Kd=yi.reverse,po=tr(y,"DataView"),Gr=tr(y,"Map"),ho=tr(y,"Promise"),vr=tr(y,"Set"),Vr=tr(y,"WeakMap"),qr=tr(ve,"create"),Ui=Vr&&new Vr,Er={},eh=rr(po),nh=rr(Gr),th=rr(ho),rh=rr(vr),ih=rr(Vr),Bi=Ut?Ut.prototype:t,zr=Bi?Bi.valueOf:t,Pu=Bi?Bi.toString:t;function h(e){if(Oe(e)&&!K(e)&&!(e instanceof ae)){if(e instanceof Nn)return e;if(ge.call(e,"__wrapped__"))return $l(e)}return new Nn(e)}var Ar=function(){function e(){}return function(i){if(!Ce(i))return{};if(Ou)return Ou(i);e.prototype=i;var a=new e;return e.prototype=t,a}}();function Pi(){}function Nn(e,i){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=t}h.templateSettings={escape:Fp,evaluate:Dp,interpolate:Wa,variable:"",imports:{_:h}},h.prototype=Pi.prototype,h.prototype.constructor=h,Nn.prototype=Ar(Pi.prototype),Nn.prototype.constructor=Nn;function ae(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=yn,this.__views__=[]}function sh(){var e=new ae(this.__wrapped__);return e.__actions__=fn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=fn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=fn(this.__views__),e}function oh(){if(this.__filtered__){var e=new ae(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function ah(){var e=this.__wrapped__.value(),i=this.__dir__,a=K(e),f=i<0,p=a?e.length:0,_=D0(0,p,this.__views__),g=_.start,D=_.end,A=D-g,S=f?D:g-1,C=this.__iteratees__,O=C.length,U=0,V=Ze(A,this.__takeCount__);if(!a||!f&&p==A&&V==A)return ul(e,this.__actions__);var W=[];e:for(;A--&&U<V;){S+=i;for(var te=-1,Q=e[S];++te<O;){var ie=C[te],le=ie.iteratee,En=ie.type,on=le(Q);if(En==cr)Q=on;else if(!on){if(En==gi)continue e;break e}}W[U++]=Q}return W}ae.prototype=Ar(Pi.prototype),ae.prototype.constructor=ae;function Zt(e){var i=-1,a=e==null?0:e.length;for(this.clear();++i<a;){var f=e[i];this.set(f[0],f[1])}}function uh(){this.__data__=qr?qr(null):{},this.size=0}function lh(e){var i=this.has(e)&&delete this.__data__[e];return this.size-=i?1:0,i}function fh(e){var i=this.__data__;if(qr){var a=i[e];return a===d?t:a}return ge.call(i,e)?i[e]:t}function ch(e){var i=this.__data__;return qr?i[e]!==t:ge.call(i,e)}function ph(e,i){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=qr&&i===t?d:i,this}Zt.prototype.clear=uh,Zt.prototype.delete=lh,Zt.prototype.get=fh,Zt.prototype.has=ch,Zt.prototype.set=ph;function _t(e){var i=-1,a=e==null?0:e.length;for(this.clear();++i<a;){var f=e[i];this.set(f[0],f[1])}}function dh(){this.__data__=[],this.size=0}function hh(e){var i=this.__data__,a=$i(i,e);if(a<0)return!1;var f=i.length-1;return a==f?i.pop():ki.call(i,a,1),--this.size,!0}function _h(e){var i=this.__data__,a=$i(i,e);return a<0?t:i[a][1]}function gh(e){return $i(this.__data__,e)>-1}function mh(e,i){var a=this.__data__,f=$i(a,e);return f<0?(++this.size,a.push([e,i])):a[f][1]=i,this}_t.prototype.clear=dh,_t.prototype.delete=hh,_t.prototype.get=_h,_t.prototype.has=gh,_t.prototype.set=mh;function gt(e){var i=-1,a=e==null?0:e.length;for(this.clear();++i<a;){var f=e[i];this.set(f[0],f[1])}}function Fh(){this.size=0,this.__data__={hash:new Zt,map:new(Gr||_t),string:new Zt}}function Dh(e){var i=Xi(this,e).delete(e);return this.size-=i?1:0,i}function vh(e){return Xi(this,e).get(e)}function Eh(e){return Xi(this,e).has(e)}function Ah(e,i){var a=Xi(this,e),f=a.size;return a.set(e,i),this.size+=a.size==f?0:1,this}gt.prototype.clear=Fh,gt.prototype.delete=Dh,gt.prototype.get=vh,gt.prototype.has=Eh,gt.prototype.set=Ah;function Kt(e){var i=-1,a=e==null?0:e.length;for(this.__data__=new gt;++i<a;)this.add(e[i])}function Th(e){return this.__data__.set(e,d),this}function Ih(e){return this.__data__.has(e)}Kt.prototype.add=Kt.prototype.push=Th,Kt.prototype.has=Ih;function Vn(e){var i=this.__data__=new _t(e);this.size=i.size}function yh(){this.__data__=new _t,this.size=0}function bh(e){var i=this.__data__,a=i.delete(e);return this.size=i.size,a}function Sh(e){return this.__data__.get(e)}function wh(e){return this.__data__.has(e)}function Ch(e,i){var a=this.__data__;if(a instanceof _t){var f=a.__data__;if(!Gr||f.length<o-1)return f.push([e,i]),this.size=++a.size,this;a=this.__data__=new gt(f)}return a.set(e,i),this.size=a.size,this}Vn.prototype.clear=yh,Vn.prototype.delete=bh,Vn.prototype.get=Sh,Vn.prototype.has=wh,Vn.prototype.set=Ch;function $u(e,i){var a=K(e),f=!a&&ir(e),p=!a&&!f&&Gt(e),_=!a&&!f&&!p&&br(e),g=a||f||p||_,D=g?ao(e.length,$d):[],A=D.length;for(var S in e)(i||ge.call(e,S))&&!(g&&(S=="length"||p&&(S=="offset"||S=="parent")||_&&(S=="buffer"||S=="byteLength"||S=="byteOffset")||vt(S,A)))&&D.push(S);return D}function Mu(e){var i=e.length;return i?e[yo(0,i-1)]:t}function Nh(e,i){return Zi(fn(e),er(i,0,e.length))}function xh(e){return Zi(fn(e))}function _o(e,i,a){(a!==t&&!qn(e[i],a)||a===t&&!(i in e))&&mt(e,i,a)}function jr(e,i,a){var f=e[i];(!(ge.call(e,i)&&qn(f,a))||a===t&&!(i in e))&&mt(e,i,a)}function $i(e,i){for(var a=e.length;a--;)if(qn(e[a][0],i))return a;return-1}function kh(e,i,a,f){return Bt(e,function(p,_,g){i(f,p,a(p),g)}),f}function Gu(e,i){return e&&ot(i,je(i),e)}function Oh(e,i){return e&&ot(i,pn(i),e)}function mt(e,i,a){i=="__proto__"&&Oi?Oi(e,i,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[i]=a}function go(e,i){for(var a=-1,f=i.length,p=I(f),_=e==null;++a<f;)p[a]=_?t:Ho(e,i[a]);return p}function er(e,i,a){return e===e&&(a!==t&&(e=e<=a?e:a),i!==t&&(e=e>=i?e:i)),e}function xn(e,i,a,f,p,_){var g,D=i&E,A=i&w,S=i&x;if(a&&(g=p?a(e,f,p,_):a(e)),g!==t)return g;if(!Ce(e))return e;var C=K(e);if(C){if(g=E0(e),!D)return fn(e,g)}else{var O=Ke(e),U=O==Xe||O==qa;if(Gt(e))return cl(e,D);if(O==ht||O==P||U&&!p){if(g=A||U?{}:Nl(e),!D)return A?f0(e,Oh(g,e)):l0(e,Gu(g,e))}else{if(!Te[O])return p?e:{};g=A0(e,O,D)}}_||(_=new Vn);var V=_.get(e);if(V)return V;_.set(e,g),of(e)?e.forEach(function(Q){g.add(xn(Q,i,a,Q,e,_))}):rf(e)&&e.forEach(function(Q,ie){g.set(ie,xn(Q,i,a,ie,e,_))});var W=S?A?Uo:Ro:A?pn:je,te=C?t:W(e);return wn(te||e,function(Q,ie){te&&(ie=Q,Q=e[ie]),jr(g,ie,xn(Q,i,a,ie,e,_))}),g}function Lh(e){var i=je(e);return function(a){return Vu(a,e,i)}}function Vu(e,i,a){var f=a.length;if(e==null)return!f;for(e=ve(e);f--;){var p=a[f],_=i[p],g=e[p];if(g===t&&!(p in e)||!_(g))return!1}return!0}function qu(e,i,a){if(typeof e!="function")throw new Cn(l);return Zr(function(){e.apply(t,a)},i)}function Yr(e,i,a,f){var p=-1,_=Ai,g=!0,D=e.length,A=[],S=i.length;if(!D)return A;a&&(i=be(i,Fn(a))),f?(_=no,g=!1):i.length>=o&&(_=$r,g=!1,i=new Kt(i));e:for(;++p<D;){var C=e[p],O=a==null?C:a(C);if(C=f||C!==0?C:0,g&&O===O){for(var U=S;U--;)if(i[U]===O)continue e;A.push(C)}else _(i,O,f)||A.push(C)}return A}var Bt=gl(st),zu=gl(Fo,!0);function Rh(e,i){var a=!0;return Bt(e,function(f,p,_){return a=!!i(f,p,_),a}),a}function Mi(e,i,a){for(var f=-1,p=e.length;++f<p;){var _=e[f],g=i(_);if(g!=null&&(D===t?g===g&&!vn(g):a(g,D)))var D=g,A=_}return A}function Uh(e,i,a,f){var p=e.length;for(a=ne(a),a<0&&(a=-a>p?0:p+a),f=f===t||f>p?p:ne(f),f<0&&(f+=p),f=a>f?0:uf(f);a<f;)e[a++]=i;return e}function ju(e,i){var a=[];return Bt(e,function(f,p,_){i(f,p,_)&&a.push(f)}),a}function Qe(e,i,a,f,p){var _=-1,g=e.length;for(a||(a=I0),p||(p=[]);++_<g;){var D=e[_];i>0&&a(D)?i>1?Qe(D,i-1,a,f,p):Lt(p,D):f||(p[p.length]=D)}return p}var mo=ml(),Yu=ml(!0);function st(e,i){return e&&mo(e,i,je)}function Fo(e,i){return e&&Yu(e,i,je)}function Gi(e,i){return Ot(i,function(a){return Et(e[a])})}function nr(e,i){i=$t(i,e);for(var a=0,f=i.length;e!=null&&a<f;)e=e[at(i[a++])];return a&&a==f?e:t}function Wu(e,i,a){var f=i(e);return K(e)?f:Lt(f,a(e))}function rn(e){return e==null?e===t?cp:lp:Xt&&Xt in ve(e)?F0(e):x0(e)}function Do(e,i){return e>i}function Bh(e,i){return e!=null&&ge.call(e,i)}function Ph(e,i){return e!=null&&i in ve(e)}function $h(e,i,a){return e>=Ze(i,a)&&e<ze(i,a)}function vo(e,i,a){for(var f=a?no:Ai,p=e[0].length,_=e.length,g=_,D=I(_),A=1/0,S=[];g--;){var C=e[g];g&&i&&(C=be(C,Fn(i))),A=Ze(C.length,A),D[g]=!a&&(i||p>=120&&C.length>=120)?new Kt(g&&C):t}C=e[0];var O=-1,U=D[0];e:for(;++O<p&&S.length<A;){var V=C[O],W=i?i(V):V;if(V=a||V!==0?V:0,!(U?$r(U,W):f(S,W,a))){for(g=_;--g;){var te=D[g];if(!(te?$r(te,W):f(e[g],W,a)))continue e}U&&U.push(W),S.push(V)}}return S}function Mh(e,i,a,f){return st(e,function(p,_,g){i(f,a(p),_,g)}),f}function Wr(e,i,a){i=$t(i,e),e=Ll(e,i);var f=e==null?e:e[at(On(i))];return f==null?t:mn(f,e,a)}function Qu(e){return Oe(e)&&rn(e)==P}function Gh(e){return Oe(e)&&rn(e)==Pr}function Vh(e){return Oe(e)&&rn(e)==bn}function Qr(e,i,a,f,p){return e===i?!0:e==null||i==null||!Oe(e)&&!Oe(i)?e!==e&&i!==i:qh(e,i,a,f,Qr,p)}function qh(e,i,a,f,p,_){var g=K(e),D=K(i),A=g?de:Ke(e),S=D?de:Ke(i);A=A==P?ht:A,S=S==P?ht:S;var C=A==ht,O=S==ht,U=A==S;if(U&&Gt(e)){if(!Gt(i))return!1;g=!0,C=!1}if(U&&!C)return _||(_=new Vn),g||br(e)?Sl(e,i,a,f,p,_):g0(e,i,A,a,f,p,_);if(!(a&L)){var V=C&&ge.call(e,"__wrapped__"),W=O&&ge.call(i,"__wrapped__");if(V||W){var te=V?e.value():e,Q=W?i.value():i;return _||(_=new Vn),p(te,Q,a,f,_)}}return U?(_||(_=new Vn),m0(e,i,a,f,p,_)):!1}function zh(e){return Oe(e)&&Ke(e)==$n}function Eo(e,i,a,f){var p=a.length,_=p,g=!f;if(e==null)return!_;for(e=ve(e);p--;){var D=a[p];if(g&&D[2]?D[1]!==e[D[0]]:!(D[0]in e))return!1}for(;++p<_;){D=a[p];var A=D[0],S=e[A],C=D[1];if(g&&D[2]){if(S===t&&!(A in e))return!1}else{var O=new Vn;if(f)var U=f(S,C,A,e,i,O);if(!(U===t?Qr(C,S,L|R,f,O):U))return!1}}return!0}function Ju(e){if(!Ce(e)||b0(e))return!1;var i=Et(e)?zd:Lp;return i.test(rr(e))}function jh(e){return Oe(e)&&rn(e)==Rr}function Yh(e){return Oe(e)&&Ke(e)==Mn}function Wh(e){return Oe(e)&&is(e.length)&&!!ye[rn(e)]}function Hu(e){return typeof e=="function"?e:e==null?dn:typeof e=="object"?K(e)?Ku(e[0],e[1]):Zu(e):Df(e)}function Ao(e){if(!Xr(e))return Hd(e);var i=[];for(var a in ve(e))ge.call(e,a)&&a!="constructor"&&i.push(a);return i}function Qh(e){if(!Ce(e))return N0(e);var i=Xr(e),a=[];for(var f in e)f=="constructor"&&(i||!ge.call(e,f))||a.push(f);return a}function To(e,i){return e<i}function Xu(e,i){var a=-1,f=cn(e)?I(e.length):[];return Bt(e,function(p,_,g){f[++a]=i(p,_,g)}),f}function Zu(e){var i=Po(e);return i.length==1&&i[0][2]?kl(i[0][0],i[0][1]):function(a){return a===e||Eo(a,e,i)}}function Ku(e,i){return Mo(e)&&xl(i)?kl(at(e),i):function(a){var f=Ho(a,e);return f===t&&f===i?Xo(a,e):Qr(i,f,L|R)}}function Vi(e,i,a,f,p){e!==i&&mo(i,function(_,g){if(p||(p=new Vn),Ce(_))Jh(e,i,g,a,Vi,f,p);else{var D=f?f(Vo(e,g),_,g+"",e,i,p):t;D===t&&(D=_),_o(e,g,D)}},pn)}function Jh(e,i,a,f,p,_,g){var D=Vo(e,a),A=Vo(i,a),S=g.get(A);if(S){_o(e,a,S);return}var C=_?_(D,A,a+"",e,i,g):t,O=C===t;if(O){var U=K(A),V=!U&&Gt(A),W=!U&&!V&&br(A);C=A,U||V||W?K(D)?C=D:Be(D)?C=fn(D):V?(O=!1,C=cl(A,!0)):W?(O=!1,C=pl(A,!0)):C=[]:Kr(A)||ir(A)?(C=D,ir(D)?C=lf(D):(!Ce(D)||Et(D))&&(C=Nl(A))):O=!1}O&&(g.set(A,C),p(C,A,f,_,g),g.delete(A)),_o(e,a,C)}function el(e,i){var a=e.length;if(a)return i+=i<0?a:0,vt(i,a)?e[i]:t}function nl(e,i,a){i.length?i=be(i,function(_){return K(_)?function(g){return nr(g,_.length===1?_[0]:_)}:_}):i=[dn];var f=-1;i=be(i,Fn(Y()));var p=Xu(e,function(_,g,D){var A=be(i,function(S){return S(_)});return{criteria:A,index:++f,value:_}});return Ad(p,function(_,g){return u0(_,g,a)})}function Hh(e,i){return tl(e,i,function(a,f){return Xo(e,f)})}function tl(e,i,a){for(var f=-1,p=i.length,_={};++f<p;){var g=i[f],D=nr(e,g);a(D,g)&&Jr(_,$t(g,e),D)}return _}function Xh(e){return function(i){return nr(i,e)}}function Io(e,i,a,f){var p=f?Ed:_r,_=-1,g=i.length,D=e;for(e===i&&(i=fn(i)),a&&(D=be(e,Fn(a)));++_<g;)for(var A=0,S=i[_],C=a?a(S):S;(A=p(D,C,A,f))>-1;)D!==e&&ki.call(D,A,1),ki.call(e,A,1);return e}function rl(e,i){for(var a=e?i.length:0,f=a-1;a--;){var p=i[a];if(a==f||p!==_){var _=p;vt(p)?ki.call(e,p,1):wo(e,p)}}return e}function yo(e,i){return e+Ri(Bu()*(i-e+1))}function Zh(e,i,a,f){for(var p=-1,_=ze(Li((i-e)/(a||1)),0),g=I(_);_--;)g[f?_:++p]=e,e+=a;return g}function bo(e,i){var a="";if(!e||i<1||i>Pn)return a;do i%2&&(a+=e),i=Ri(i/2),i&&(e+=e);while(i);return a}function re(e,i){return qo(Ol(e,i,dn),e+"")}function Kh(e){return Mu(Sr(e))}function e0(e,i){var a=Sr(e);return Zi(a,er(i,0,a.length))}function Jr(e,i,a,f){if(!Ce(e))return e;i=$t(i,e);for(var p=-1,_=i.length,g=_-1,D=e;D!=null&&++p<_;){var A=at(i[p]),S=a;if(A==="__proto__"||A==="constructor"||A==="prototype")return e;if(p!=g){var C=D[A];S=f?f(C,A,D):t,S===t&&(S=Ce(C)?C:vt(i[p+1])?[]:{})}jr(D,A,S),D=D[A]}return e}var il=Ui?function(e,i){return Ui.set(e,i),e}:dn,n0=Oi?function(e,i){return Oi(e,"toString",{configurable:!0,enumerable:!1,value:Ko(i),writable:!0})}:dn;function t0(e){return Zi(Sr(e))}function kn(e,i,a){var f=-1,p=e.length;i<0&&(i=-i>p?0:p+i),a=a>p?p:a,a<0&&(a+=p),p=i>a?0:a-i>>>0,i>>>=0;for(var _=I(p);++f<p;)_[f]=e[f+i];return _}function r0(e,i){var a;return Bt(e,function(f,p,_){return a=i(f,p,_),!a}),!!a}function qi(e,i,a){var f=0,p=e==null?f:e.length;if(typeof i=="number"&&i===i&&p<=M){for(;f<p;){var _=f+p>>>1,g=e[_];g!==null&&!vn(g)&&(a?g<=i:g<i)?f=_+1:p=_}return p}return So(e,i,dn,a)}function So(e,i,a,f){var p=0,_=e==null?0:e.length;if(_===0)return 0;i=a(i);for(var g=i!==i,D=i===null,A=vn(i),S=i===t;p<_;){var C=Ri((p+_)/2),O=a(e[C]),U=O!==t,V=O===null,W=O===O,te=vn(O);if(g)var Q=f||W;else S?Q=W&&(f||U):D?Q=W&&U&&(f||!V):A?Q=W&&U&&!V&&(f||!te):V||te?Q=!1:Q=f?O<=i:O<i;Q?p=C+1:_=C}return Ze(_,b)}function sl(e,i){for(var a=-1,f=e.length,p=0,_=[];++a<f;){var g=e[a],D=i?i(g):g;if(!a||!qn(D,A)){var A=D;_[p++]=g===0?0:g}}return _}function ol(e){return typeof e=="number"?e:vn(e)?Jt:+e}function Dn(e){if(typeof e=="string")return e;if(K(e))return be(e,Dn)+"";if(vn(e))return Pu?Pu.call(e):"";var i=e+"";return i=="0"&&1/e==-it?"-0":i}function Pt(e,i,a){var f=-1,p=Ai,_=e.length,g=!0,D=[],A=D;if(a)g=!1,p=no;else if(_>=o){var S=i?null:h0(e);if(S)return Ii(S);g=!1,p=$r,A=new Kt}else A=i?[]:D;e:for(;++f<_;){var C=e[f],O=i?i(C):C;if(C=a||C!==0?C:0,g&&O===O){for(var U=A.length;U--;)if(A[U]===O)continue e;i&&A.push(O),D.push(C)}else p(A,O,a)||(A!==D&&A.push(O),D.push(C))}return D}function wo(e,i){return i=$t(i,e),e=Ll(e,i),e==null||delete e[at(On(i))]}function al(e,i,a,f){return Jr(e,i,a(nr(e,i)),f)}function zi(e,i,a,f){for(var p=e.length,_=f?p:-1;(f?_--:++_<p)&&i(e[_],_,e););return a?kn(e,f?0:_,f?_+1:p):kn(e,f?_+1:0,f?p:_)}function ul(e,i){var a=e;return a instanceof ae&&(a=a.value()),to(i,function(f,p){return p.func.apply(p.thisArg,Lt([f],p.args))},a)}function Co(e,i,a){var f=e.length;if(f<2)return f?Pt(e[0]):[];for(var p=-1,_=I(f);++p<f;)for(var g=e[p],D=-1;++D<f;)D!=p&&(_[p]=Yr(_[p]||g,e[D],i,a));return Pt(Qe(_,1),i,a)}function ll(e,i,a){for(var f=-1,p=e.length,_=i.length,g={};++f<p;){var D=f<_?i[f]:t;a(g,e[f],D)}return g}function No(e){return Be(e)?e:[]}function xo(e){return typeof e=="function"?e:dn}function $t(e,i){return K(e)?e:Mo(e,i)?[e]:Pl(_e(e))}var i0=re;function Mt(e,i,a){var f=e.length;return a=a===t?f:a,!i&&a>=f?e:kn(e,i,a)}var fl=jd||function(e){return We.clearTimeout(e)};function cl(e,i){if(i)return e.slice();var a=e.length,f=ku?ku(a):new e.constructor(a);return e.copy(f),f}function ko(e){var i=new e.constructor(e.byteLength);return new Ni(i).set(new Ni(e)),i}function s0(e,i){var a=i?ko(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.byteLength)}function o0(e){var i=new e.constructor(e.source,Qa.exec(e));return i.lastIndex=e.lastIndex,i}function a0(e){return zr?ve(zr.call(e)):{}}function pl(e,i){var a=i?ko(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.length)}function dl(e,i){if(e!==i){var a=e!==t,f=e===null,p=e===e,_=vn(e),g=i!==t,D=i===null,A=i===i,S=vn(i);if(!D&&!S&&!_&&e>i||_&&g&&A&&!D&&!S||f&&g&&A||!a&&A||!p)return 1;if(!f&&!_&&!S&&e<i||S&&a&&p&&!f&&!_||D&&a&&p||!g&&p||!A)return-1}return 0}function u0(e,i,a){for(var f=-1,p=e.criteria,_=i.criteria,g=p.length,D=a.length;++f<g;){var A=dl(p[f],_[f]);if(A){if(f>=D)return A;var S=a[f];return A*(S=="desc"?-1:1)}}return e.index-i.index}function hl(e,i,a,f){for(var p=-1,_=e.length,g=a.length,D=-1,A=i.length,S=ze(_-g,0),C=I(A+S),O=!f;++D<A;)C[D]=i[D];for(;++p<g;)(O||p<_)&&(C[a[p]]=e[p]);for(;S--;)C[D++]=e[p++];return C}function _l(e,i,a,f){for(var p=-1,_=e.length,g=-1,D=a.length,A=-1,S=i.length,C=ze(_-D,0),O=I(C+S),U=!f;++p<C;)O[p]=e[p];for(var V=p;++A<S;)O[V+A]=i[A];for(;++g<D;)(U||p<_)&&(O[V+a[g]]=e[p++]);return O}function fn(e,i){var a=-1,f=e.length;for(i||(i=I(f));++a<f;)i[a]=e[a];return i}function ot(e,i,a,f){var p=!a;a||(a={});for(var _=-1,g=i.length;++_<g;){var D=i[_],A=f?f(a[D],e[D],D,a,e):t;A===t&&(A=e[D]),p?mt(a,D,A):jr(a,D,A)}return a}function l0(e,i){return ot(e,$o(e),i)}function f0(e,i){return ot(e,wl(e),i)}function ji(e,i){return function(a,f){var p=K(a)?_d:kh,_=i?i():{};return p(a,e,Y(f,2),_)}}function Tr(e){return re(function(i,a){var f=-1,p=a.length,_=p>1?a[p-1]:t,g=p>2?a[2]:t;for(_=e.length>3&&typeof _=="function"?(p--,_):t,g&&sn(a[0],a[1],g)&&(_=p<3?t:_,p=1),i=ve(i);++f<p;){var D=a[f];D&&e(i,D,f,_)}return i})}function gl(e,i){return function(a,f){if(a==null)return a;if(!cn(a))return e(a,f);for(var p=a.length,_=i?p:-1,g=ve(a);(i?_--:++_<p)&&f(g[_],_,g)!==!1;);return a}}function ml(e){return function(i,a,f){for(var p=-1,_=ve(i),g=f(i),D=g.length;D--;){var A=g[e?D:++p];if(a(_[A],A,_)===!1)break}return i}}function c0(e,i,a){var f=i&J,p=Hr(e);function _(){var g=this&&this!==We&&this instanceof _?p:e;return g.apply(f?a:this,arguments)}return _}function Fl(e){return function(i){i=_e(i);var a=gr(i)?Gn(i):t,f=a?a[0]:i.charAt(0),p=a?Mt(a,1).join(""):i.slice(1);return f[e]()+p}}function Ir(e){return function(i){return to(mf(gf(i).replace(nd,"")),e,"")}}function Hr(e){return function(){var i=arguments;switch(i.length){case 0:return new e;case 1:return new e(i[0]);case 2:return new e(i[0],i[1]);case 3:return new e(i[0],i[1],i[2]);case 4:return new e(i[0],i[1],i[2],i[3]);case 5:return new e(i[0],i[1],i[2],i[3],i[4]);case 6:return new e(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var a=Ar(e.prototype),f=e.apply(a,i);return Ce(f)?f:a}}function p0(e,i,a){var f=Hr(e);function p(){for(var _=arguments.length,g=I(_),D=_,A=yr(p);D--;)g[D]=arguments[D];var S=_<3&&g[0]!==A&&g[_-1]!==A?[]:Rt(g,A);if(_-=S.length,_<a)return Tl(e,i,Yi,p.placeholder,t,g,S,t,t,a-_);var C=this&&this!==We&&this instanceof p?f:e;return mn(C,this,g)}return p}function Dl(e){return function(i,a,f){var p=ve(i);if(!cn(i)){var _=Y(a,3);i=je(i),a=function(D){return _(p[D],D,p)}}var g=e(i,a,f);return g>-1?p[_?i[g]:g]:t}}function vl(e){return Dt(function(i){var a=i.length,f=a,p=Nn.prototype.thru;for(e&&i.reverse();f--;){var _=i[f];if(typeof _!="function")throw new Cn(l);if(p&&!g&&Hi(_)=="wrapper")var g=new Nn([],!0)}for(f=g?f:a;++f<a;){_=i[f];var D=Hi(_),A=D=="wrapper"?Bo(_):t;A&&Go(A[0])&&A[1]==(He|Ae|ke|dt)&&!A[4].length&&A[9]==1?g=g[Hi(A[0])].apply(g,A[3]):g=_.length==1&&Go(_)?g[D]():g.thru(_)}return function(){var S=arguments,C=S[0];if(g&&S.length==1&&K(C))return g.plant(C).value();for(var O=0,U=a?i[O].apply(this,S):C;++O<a;)U=i[O].call(this,U);return U}})}function Yi(e,i,a,f,p,_,g,D,A,S){var C=i&He,O=i&J,U=i&pe,V=i&(Ae|we),W=i&k,te=U?t:Hr(e);function Q(){for(var ie=arguments.length,le=I(ie),En=ie;En--;)le[En]=arguments[En];if(V)var on=yr(Q),An=Id(le,on);if(f&&(le=hl(le,f,p,V)),_&&(le=_l(le,_,g,V)),ie-=An,V&&ie<S){var Pe=Rt(le,on);return Tl(e,i,Yi,Q.placeholder,a,le,Pe,D,A,S-ie)}var zn=O?a:this,Tt=U?zn[e]:e;return ie=le.length,D?le=k0(le,D):W&&ie>1&&le.reverse(),C&&A<ie&&(le.length=A),this&&this!==We&&this instanceof Q&&(Tt=te||Hr(Tt)),Tt.apply(zn,le)}return Q}function El(e,i){return function(a,f){return Mh(a,e,i(f),{})}}function Wi(e,i){return function(a,f){var p;if(a===t&&f===t)return i;if(a!==t&&(p=a),f!==t){if(p===t)return f;typeof a=="string"||typeof f=="string"?(a=Dn(a),f=Dn(f)):(a=ol(a),f=ol(f)),p=e(a,f)}return p}}function Oo(e){return Dt(function(i){return i=be(i,Fn(Y())),re(function(a){var f=this;return e(i,function(p){return mn(p,f,a)})})})}function Qi(e,i){i=i===t?" ":Dn(i);var a=i.length;if(a<2)return a?bo(i,e):i;var f=bo(i,Li(e/mr(i)));return gr(i)?Mt(Gn(f),0,e).join(""):f.slice(0,e)}function d0(e,i,a,f){var p=i&J,_=Hr(e);function g(){for(var D=-1,A=arguments.length,S=-1,C=f.length,O=I(C+A),U=this&&this!==We&&this instanceof g?_:e;++S<C;)O[S]=f[S];for(;A--;)O[S++]=arguments[++D];return mn(U,p?a:this,O)}return g}function Al(e){return function(i,a,f){return f&&typeof f!="number"&&sn(i,a,f)&&(a=f=t),i=At(i),a===t?(a=i,i=0):a=At(a),f=f===t?i<a?1:-1:At(f),Zh(i,a,f,e)}}function Ji(e){return function(i,a){return typeof i=="string"&&typeof a=="string"||(i=Ln(i),a=Ln(a)),e(i,a)}}function Tl(e,i,a,f,p,_,g,D,A,S){var C=i&Ae,O=C?g:t,U=C?t:g,V=C?_:t,W=C?t:_;i|=C?ke:nn,i&=~(C?nn:ke),i&Me||(i&=~(J|pe));var te=[e,i,p,V,O,W,U,D,A,S],Q=a.apply(t,te);return Go(e)&&Rl(Q,te),Q.placeholder=f,Ul(Q,e,i)}function Lo(e){var i=qe[e];return function(a,f){if(a=Ln(a),f=f==null?0:Ze(ne(f),292),f&&Uu(a)){var p=(_e(a)+"e").split("e"),_=i(p[0]+"e"+(+p[1]+f));return p=(_e(_)+"e").split("e"),+(p[0]+"e"+(+p[1]-f))}return i(a)}}var h0=vr&&1/Ii(new vr([,-0]))[1]==it?function(e){return new vr(e)}:ta;function Il(e){return function(i){var a=Ke(i);return a==$n?lo(i):a==Mn?xd(i):Td(i,e(i))}}function Ft(e,i,a,f,p,_,g,D){var A=i&pe;if(!A&&typeof e!="function")throw new Cn(l);var S=f?f.length:0;if(S||(i&=~(ke|nn),f=p=t),g=g===t?g:ze(ne(g),0),D=D===t?D:ne(D),S-=p?p.length:0,i&nn){var C=f,O=p;f=p=t}var U=A?t:Bo(e),V=[e,i,a,f,p,C,O,_,g,D];if(U&&C0(V,U),e=V[0],i=V[1],a=V[2],f=V[3],p=V[4],D=V[9]=V[9]===t?A?0:e.length:ze(V[9]-S,0),!D&&i&(Ae|we)&&(i&=~(Ae|we)),!i||i==J)var W=c0(e,i,a);else i==Ae||i==we?W=p0(e,i,D):(i==ke||i==(J|ke))&&!p.length?W=d0(e,i,a,f):W=Yi.apply(t,V);var te=U?il:Rl;return Ul(te(W,V),e,i)}function yl(e,i,a,f){return e===t||qn(e,Dr[a])&&!ge.call(f,a)?i:e}function bl(e,i,a,f,p,_){return Ce(e)&&Ce(i)&&(_.set(i,e),Vi(e,i,t,bl,_),_.delete(i)),e}function _0(e){return Kr(e)?t:e}function Sl(e,i,a,f,p,_){var g=a&L,D=e.length,A=i.length;if(D!=A&&!(g&&A>D))return!1;var S=_.get(e),C=_.get(i);if(S&&C)return S==i&&C==e;var O=-1,U=!0,V=a&R?new Kt:t;for(_.set(e,i),_.set(i,e);++O<D;){var W=e[O],te=i[O];if(f)var Q=g?f(te,W,O,i,e,_):f(W,te,O,e,i,_);if(Q!==t){if(Q)continue;U=!1;break}if(V){if(!ro(i,function(ie,le){if(!$r(V,le)&&(W===ie||p(W,ie,a,f,_)))return V.push(le)})){U=!1;break}}else if(!(W===te||p(W,te,a,f,_))){U=!1;break}}return _.delete(e),_.delete(i),U}function g0(e,i,a,f,p,_,g){switch(a){case dr:if(e.byteLength!=i.byteLength||e.byteOffset!=i.byteOffset)return!1;e=e.buffer,i=i.buffer;case Pr:return!(e.byteLength!=i.byteLength||!_(new Ni(e),new Ni(i)));case he:case bn:case Lr:return qn(+e,+i);case kt:return e.name==i.name&&e.message==i.message;case Rr:case Ur:return e==i+"";case $n:var D=lo;case Mn:var A=f&L;if(D||(D=Ii),e.size!=i.size&&!A)return!1;var S=g.get(e);if(S)return S==i;f|=R,g.set(e,i);var C=Sl(D(e),D(i),f,p,_,g);return g.delete(e),C;case Fi:if(zr)return zr.call(e)==zr.call(i)}return!1}function m0(e,i,a,f,p,_){var g=a&L,D=Ro(e),A=D.length,S=Ro(i),C=S.length;if(A!=C&&!g)return!1;for(var O=A;O--;){var U=D[O];if(!(g?U in i:ge.call(i,U)))return!1}var V=_.get(e),W=_.get(i);if(V&&W)return V==i&&W==e;var te=!0;_.set(e,i),_.set(i,e);for(var Q=g;++O<A;){U=D[O];var ie=e[U],le=i[U];if(f)var En=g?f(le,ie,U,i,e,_):f(ie,le,U,e,i,_);if(!(En===t?ie===le||p(ie,le,a,f,_):En)){te=!1;break}Q||(Q=U=="constructor")}if(te&&!Q){var on=e.constructor,An=i.constructor;on!=An&&"constructor"in e&&"constructor"in i&&!(typeof on=="function"&&on instanceof on&&typeof An=="function"&&An instanceof An)&&(te=!1)}return _.delete(e),_.delete(i),te}function Dt(e){return qo(Ol(e,t,Vl),e+"")}function Ro(e){return Wu(e,je,$o)}function Uo(e){return Wu(e,pn,wl)}var Bo=Ui?function(e){return Ui.get(e)}:ta;function Hi(e){for(var i=e.name+"",a=Er[i],f=ge.call(Er,i)?a.length:0;f--;){var p=a[f],_=p.func;if(_==null||_==e)return p.name}return i}function yr(e){var i=ge.call(h,"placeholder")?h:e;return i.placeholder}function Y(){var e=h.iteratee||ea;return e=e===ea?Hu:e,arguments.length?e(arguments[0],arguments[1]):e}function Xi(e,i){var a=e.__data__;return y0(i)?a[typeof i=="string"?"string":"hash"]:a.map}function Po(e){for(var i=je(e),a=i.length;a--;){var f=i[a],p=e[f];i[a]=[f,p,xl(p)]}return i}function tr(e,i){var a=wd(e,i);return Ju(a)?a:t}function F0(e){var i=ge.call(e,Xt),a=e[Xt];try{e[Xt]=t;var f=!0}catch{}var p=wi.call(e);return f&&(i?e[Xt]=a:delete e[Xt]),p}var $o=co?function(e){return e==null?[]:(e=ve(e),Ot(co(e),function(i){return Lu.call(e,i)}))}:ra,wl=co?function(e){for(var i=[];e;)Lt(i,$o(e)),e=xi(e);return i}:ra,Ke=rn;(po&&Ke(new po(new ArrayBuffer(1)))!=dr||Gr&&Ke(new Gr)!=$n||ho&&Ke(ho.resolve())!=za||vr&&Ke(new vr)!=Mn||Vr&&Ke(new Vr)!=Br)&&(Ke=function(e){var i=rn(e),a=i==ht?e.constructor:t,f=a?rr(a):"";if(f)switch(f){case eh:return dr;case nh:return $n;case th:return za;case rh:return Mn;case ih:return Br}return i});function D0(e,i,a){for(var f=-1,p=a.length;++f<p;){var _=a[f],g=_.size;switch(_.type){case"drop":e+=g;break;case"dropRight":i-=g;break;case"take":i=Ze(i,e+g);break;case"takeRight":e=ze(e,i-g);break}}return{start:e,end:i}}function v0(e){var i=e.match(bp);return i?i[1].split(Sp):[]}function Cl(e,i,a){i=$t(i,e);for(var f=-1,p=i.length,_=!1;++f<p;){var g=at(i[f]);if(!(_=e!=null&&a(e,g)))break;e=e[g]}return _||++f!=p?_:(p=e==null?0:e.length,!!p&&is(p)&&vt(g,p)&&(K(e)||ir(e)))}function E0(e){var i=e.length,a=new e.constructor(i);return i&&typeof e[0]=="string"&&ge.call(e,"index")&&(a.index=e.index,a.input=e.input),a}function Nl(e){return typeof e.constructor=="function"&&!Xr(e)?Ar(xi(e)):{}}function A0(e,i,a){var f=e.constructor;switch(i){case Pr:return ko(e);case he:case bn:return new f(+e);case dr:return s0(e,a);case Bs:case Ps:case $s:case Ms:case Gs:case Vs:case qs:case zs:case js:return pl(e,a);case $n:return new f;case Lr:case Ur:return new f(e);case Rr:return o0(e);case Mn:return new f;case Fi:return a0(e)}}function T0(e,i){var a=i.length;if(!a)return e;var f=a-1;return i[f]=(a>1?"& ":"")+i[f],i=i.join(a>2?", ":" "),e.replace(yp,`{
/* [wrapped with `+i+`] */
`)}function I0(e){return K(e)||ir(e)||!!(Ru&&e&&e[Ru])}function vt(e,i){var a=typeof e;return i=i??Pn,!!i&&(a=="number"||a!="symbol"&&Up.test(e))&&e>-1&&e%1==0&&e<i}function sn(e,i,a){if(!Ce(a))return!1;var f=typeof i;return(f=="number"?cn(a)&&vt(i,a.length):f=="string"&&i in a)?qn(a[i],e):!1}function Mo(e,i){if(K(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||vn(e)?!0:Ep.test(e)||!vp.test(e)||i!=null&&e in ve(i)}function y0(e){var i=typeof e;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?e!=="__proto__":e===null}function Go(e){var i=Hi(e),a=h[i];if(typeof a!="function"||!(i in ae.prototype))return!1;if(e===a)return!0;var f=Bo(a);return!!f&&e===f[0]}function b0(e){return!!xu&&xu in e}var S0=bi?Et:ia;function Xr(e){var i=e&&e.constructor,a=typeof i=="function"&&i.prototype||Dr;return e===a}function xl(e){return e===e&&!Ce(e)}function kl(e,i){return function(a){return a==null?!1:a[e]===i&&(i!==t||e in ve(a))}}function w0(e){var i=ts(e,function(f){return a.size===m&&a.clear(),f}),a=i.cache;return i}function C0(e,i){var a=e[1],f=i[1],p=a|f,_=p<(J|pe|He),g=f==He&&a==Ae||f==He&&a==dt&&e[7].length<=i[8]||f==(He|dt)&&i[7].length<=i[8]&&a==Ae;if(!(_||g))return e;f&J&&(e[2]=i[2],p|=a&J?0:Me);var D=i[3];if(D){var A=e[3];e[3]=A?hl(A,D,i[4]):D,e[4]=A?Rt(e[3],F):i[4]}return D=i[5],D&&(A=e[5],e[5]=A?_l(A,D,i[6]):D,e[6]=A?Rt(e[5],F):i[6]),D=i[7],D&&(e[7]=D),f&He&&(e[8]=e[8]==null?i[8]:Ze(e[8],i[8])),e[9]==null&&(e[9]=i[9]),e[0]=i[0],e[1]=p,e}function N0(e){var i=[];if(e!=null)for(var a in ve(e))i.push(a);return i}function x0(e){return wi.call(e)}function Ol(e,i,a){return i=ze(i===t?e.length-1:i,0),function(){for(var f=arguments,p=-1,_=ze(f.length-i,0),g=I(_);++p<_;)g[p]=f[i+p];p=-1;for(var D=I(i+1);++p<i;)D[p]=f[p];return D[i]=a(g),mn(e,this,D)}}function Ll(e,i){return i.length<2?e:nr(e,kn(i,0,-1))}function k0(e,i){for(var a=e.length,f=Ze(i.length,a),p=fn(e);f--;){var _=i[f];e[f]=vt(_,a)?p[_]:t}return e}function Vo(e,i){if(!(i==="constructor"&&typeof e[i]=="function")&&i!="__proto__")return e[i]}var Rl=Bl(il),Zr=Wd||function(e,i){return We.setTimeout(e,i)},qo=Bl(n0);function Ul(e,i,a){var f=i+"";return qo(e,T0(f,O0(v0(f),a)))}function Bl(e){var i=0,a=0;return function(){var f=Xd(),p=Qt-(f-a);if(a=f,p>0){if(++i>=xt)return arguments[0]}else i=0;return e.apply(t,arguments)}}function Zi(e,i){var a=-1,f=e.length,p=f-1;for(i=i===t?f:i;++a<i;){var _=yo(a,p),g=e[_];e[_]=e[a],e[a]=g}return e.length=i,e}var Pl=w0(function(e){var i=[];return e.charCodeAt(0)===46&&i.push(""),e.replace(Ap,function(a,f,p,_){i.push(p?_.replace(Np,"$1"):f||a)}),i});function at(e){if(typeof e=="string"||vn(e))return e;var i=e+"";return i=="0"&&1/e==-it?"-0":i}function rr(e){if(e!=null){try{return Si.call(e)}catch{}try{return e+""}catch{}}return""}function O0(e,i){return wn(B,function(a){var f="_."+a[0];i&a[1]&&!Ai(e,f)&&e.push(f)}),e.sort()}function $l(e){if(e instanceof ae)return e.clone();var i=new Nn(e.__wrapped__,e.__chain__);return i.__actions__=fn(e.__actions__),i.__index__=e.__index__,i.__values__=e.__values__,i}function L0(e,i,a){(a?sn(e,i,a):i===t)?i=1:i=ze(ne(i),0);var f=e==null?0:e.length;if(!f||i<1)return[];for(var p=0,_=0,g=I(Li(f/i));p<f;)g[_++]=kn(e,p,p+=i);return g}function R0(e){for(var i=-1,a=e==null?0:e.length,f=0,p=[];++i<a;){var _=e[i];_&&(p[f++]=_)}return p}function U0(){var e=arguments.length;if(!e)return[];for(var i=I(e-1),a=arguments[0],f=e;f--;)i[f-1]=arguments[f];return Lt(K(a)?fn(a):[a],Qe(i,1))}var B0=re(function(e,i){return Be(e)?Yr(e,Qe(i,1,Be,!0)):[]}),P0=re(function(e,i){var a=On(i);return Be(a)&&(a=t),Be(e)?Yr(e,Qe(i,1,Be,!0),Y(a,2)):[]}),$0=re(function(e,i){var a=On(i);return Be(a)&&(a=t),Be(e)?Yr(e,Qe(i,1,Be,!0),t,a):[]});function M0(e,i,a){var f=e==null?0:e.length;return f?(i=a||i===t?1:ne(i),kn(e,i<0?0:i,f)):[]}function G0(e,i,a){var f=e==null?0:e.length;return f?(i=a||i===t?1:ne(i),i=f-i,kn(e,0,i<0?0:i)):[]}function V0(e,i){return e&&e.length?zi(e,Y(i,3),!0,!0):[]}function q0(e,i){return e&&e.length?zi(e,Y(i,3),!0):[]}function z0(e,i,a,f){var p=e==null?0:e.length;return p?(a&&typeof a!="number"&&sn(e,i,a)&&(a=0,f=p),Uh(e,i,a,f)):[]}function Ml(e,i,a){var f=e==null?0:e.length;if(!f)return-1;var p=a==null?0:ne(a);return p<0&&(p=ze(f+p,0)),Ti(e,Y(i,3),p)}function Gl(e,i,a){var f=e==null?0:e.length;if(!f)return-1;var p=f-1;return a!==t&&(p=ne(a),p=a<0?ze(f+p,0):Ze(p,f-1)),Ti(e,Y(i,3),p,!0)}function Vl(e){var i=e==null?0:e.length;return i?Qe(e,1):[]}function j0(e){var i=e==null?0:e.length;return i?Qe(e,it):[]}function Y0(e,i){var a=e==null?0:e.length;return a?(i=i===t?1:ne(i),Qe(e,i)):[]}function W0(e){for(var i=-1,a=e==null?0:e.length,f={};++i<a;){var p=e[i];f[p[0]]=p[1]}return f}function ql(e){return e&&e.length?e[0]:t}function Q0(e,i,a){var f=e==null?0:e.length;if(!f)return-1;var p=a==null?0:ne(a);return p<0&&(p=ze(f+p,0)),_r(e,i,p)}function J0(e){var i=e==null?0:e.length;return i?kn(e,0,-1):[]}var H0=re(function(e){var i=be(e,No);return i.length&&i[0]===e[0]?vo(i):[]}),X0=re(function(e){var i=On(e),a=be(e,No);return i===On(a)?i=t:a.pop(),a.length&&a[0]===e[0]?vo(a,Y(i,2)):[]}),Z0=re(function(e){var i=On(e),a=be(e,No);return i=typeof i=="function"?i:t,i&&a.pop(),a.length&&a[0]===e[0]?vo(a,t,i):[]});function K0(e,i){return e==null?"":Jd.call(e,i)}function On(e){var i=e==null?0:e.length;return i?e[i-1]:t}function e_(e,i,a){var f=e==null?0:e.length;if(!f)return-1;var p=f;return a!==t&&(p=ne(a),p=p<0?ze(f+p,0):Ze(p,f-1)),i===i?Od(e,i,p):Ti(e,Tu,p,!0)}function n_(e,i){return e&&e.length?el(e,ne(i)):t}var t_=re(zl);function zl(e,i){return e&&e.length&&i&&i.length?Io(e,i):e}function r_(e,i,a){return e&&e.length&&i&&i.length?Io(e,i,Y(a,2)):e}function i_(e,i,a){return e&&e.length&&i&&i.length?Io(e,i,t,a):e}var s_=Dt(function(e,i){var a=e==null?0:e.length,f=go(e,i);return rl(e,be(i,function(p){return vt(p,a)?+p:p}).sort(dl)),f});function o_(e,i){var a=[];if(!(e&&e.length))return a;var f=-1,p=[],_=e.length;for(i=Y(i,3);++f<_;){var g=e[f];i(g,f,e)&&(a.push(g),p.push(f))}return rl(e,p),a}function zo(e){return e==null?e:Kd.call(e)}function a_(e,i,a){var f=e==null?0:e.length;return f?(a&&typeof a!="number"&&sn(e,i,a)?(i=0,a=f):(i=i==null?0:ne(i),a=a===t?f:ne(a)),kn(e,i,a)):[]}function u_(e,i){return qi(e,i)}function l_(e,i,a){return So(e,i,Y(a,2))}function f_(e,i){var a=e==null?0:e.length;if(a){var f=qi(e,i);if(f<a&&qn(e[f],i))return f}return-1}function c_(e,i){return qi(e,i,!0)}function p_(e,i,a){return So(e,i,Y(a,2),!0)}function d_(e,i){var a=e==null?0:e.length;if(a){var f=qi(e,i,!0)-1;if(qn(e[f],i))return f}return-1}function h_(e){return e&&e.length?sl(e):[]}function __(e,i){return e&&e.length?sl(e,Y(i,2)):[]}function g_(e){var i=e==null?0:e.length;return i?kn(e,1,i):[]}function m_(e,i,a){return e&&e.length?(i=a||i===t?1:ne(i),kn(e,0,i<0?0:i)):[]}function F_(e,i,a){var f=e==null?0:e.length;return f?(i=a||i===t?1:ne(i),i=f-i,kn(e,i<0?0:i,f)):[]}function D_(e,i){return e&&e.length?zi(e,Y(i,3),!1,!0):[]}function v_(e,i){return e&&e.length?zi(e,Y(i,3)):[]}var E_=re(function(e){return Pt(Qe(e,1,Be,!0))}),A_=re(function(e){var i=On(e);return Be(i)&&(i=t),Pt(Qe(e,1,Be,!0),Y(i,2))}),T_=re(function(e){var i=On(e);return i=typeof i=="function"?i:t,Pt(Qe(e,1,Be,!0),t,i)});function I_(e){return e&&e.length?Pt(e):[]}function y_(e,i){return e&&e.length?Pt(e,Y(i,2)):[]}function b_(e,i){return i=typeof i=="function"?i:t,e&&e.length?Pt(e,t,i):[]}function jo(e){if(!(e&&e.length))return[];var i=0;return e=Ot(e,function(a){if(Be(a))return i=ze(a.length,i),!0}),ao(i,function(a){return be(e,io(a))})}function jl(e,i){if(!(e&&e.length))return[];var a=jo(e);return i==null?a:be(a,function(f){return mn(i,t,f)})}var S_=re(function(e,i){return Be(e)?Yr(e,i):[]}),w_=re(function(e){return Co(Ot(e,Be))}),C_=re(function(e){var i=On(e);return Be(i)&&(i=t),Co(Ot(e,Be),Y(i,2))}),N_=re(function(e){var i=On(e);return i=typeof i=="function"?i:t,Co(Ot(e,Be),t,i)}),x_=re(jo);function k_(e,i){return ll(e||[],i||[],jr)}function O_(e,i){return ll(e||[],i||[],Jr)}var L_=re(function(e){var i=e.length,a=i>1?e[i-1]:t;return a=typeof a=="function"?(e.pop(),a):t,jl(e,a)});function Yl(e){var i=h(e);return i.__chain__=!0,i}function R_(e,i){return i(e),e}function Ki(e,i){return i(e)}var U_=Dt(function(e){var i=e.length,a=i?e[0]:0,f=this.__wrapped__,p=function(_){return go(_,e)};return i>1||this.__actions__.length||!(f instanceof ae)||!vt(a)?this.thru(p):(f=f.slice(a,+a+(i?1:0)),f.__actions__.push({func:Ki,args:[p],thisArg:t}),new Nn(f,this.__chain__).thru(function(_){return i&&!_.length&&_.push(t),_}))});function B_(){return Yl(this)}function P_(){return new Nn(this.value(),this.__chain__)}function $_(){this.__values__===t&&(this.__values__=af(this.value()));var e=this.__index__>=this.__values__.length,i=e?t:this.__values__[this.__index__++];return{done:e,value:i}}function M_(){return this}function G_(e){for(var i,a=this;a instanceof Pi;){var f=$l(a);f.__index__=0,f.__values__=t,i?p.__wrapped__=f:i=f;var p=f;a=a.__wrapped__}return p.__wrapped__=e,i}function V_(){var e=this.__wrapped__;if(e instanceof ae){var i=e;return this.__actions__.length&&(i=new ae(this)),i=i.reverse(),i.__actions__.push({func:Ki,args:[zo],thisArg:t}),new Nn(i,this.__chain__)}return this.thru(zo)}function q_(){return ul(this.__wrapped__,this.__actions__)}var z_=ji(function(e,i,a){ge.call(e,a)?++e[a]:mt(e,a,1)});function j_(e,i,a){var f=K(e)?Eu:Rh;return a&&sn(e,i,a)&&(i=t),f(e,Y(i,3))}function Y_(e,i){var a=K(e)?Ot:ju;return a(e,Y(i,3))}var W_=Dl(Ml),Q_=Dl(Gl);function J_(e,i){return Qe(es(e,i),1)}function H_(e,i){return Qe(es(e,i),it)}function X_(e,i,a){return a=a===t?1:ne(a),Qe(es(e,i),a)}function Wl(e,i){var a=K(e)?wn:Bt;return a(e,Y(i,3))}function Ql(e,i){var a=K(e)?gd:zu;return a(e,Y(i,3))}var Z_=ji(function(e,i,a){ge.call(e,a)?e[a].push(i):mt(e,a,[i])});function K_(e,i,a,f){e=cn(e)?e:Sr(e),a=a&&!f?ne(a):0;var p=e.length;return a<0&&(a=ze(p+a,0)),ss(e)?a<=p&&e.indexOf(i,a)>-1:!!p&&_r(e,i,a)>-1}var eg=re(function(e,i,a){var f=-1,p=typeof i=="function",_=cn(e)?I(e.length):[];return Bt(e,function(g){_[++f]=p?mn(i,g,a):Wr(g,i,a)}),_}),ng=ji(function(e,i,a){mt(e,a,i)});function es(e,i){var a=K(e)?be:Xu;return a(e,Y(i,3))}function tg(e,i,a,f){return e==null?[]:(K(i)||(i=i==null?[]:[i]),a=f?t:a,K(a)||(a=a==null?[]:[a]),nl(e,i,a))}var rg=ji(function(e,i,a){e[a?0:1].push(i)},function(){return[[],[]]});function ig(e,i,a){var f=K(e)?to:yu,p=arguments.length<3;return f(e,Y(i,4),a,p,Bt)}function sg(e,i,a){var f=K(e)?md:yu,p=arguments.length<3;return f(e,Y(i,4),a,p,zu)}function og(e,i){var a=K(e)?Ot:ju;return a(e,rs(Y(i,3)))}function ag(e){var i=K(e)?Mu:Kh;return i(e)}function ug(e,i,a){(a?sn(e,i,a):i===t)?i=1:i=ne(i);var f=K(e)?Nh:e0;return f(e,i)}function lg(e){var i=K(e)?xh:t0;return i(e)}function fg(e){if(e==null)return 0;if(cn(e))return ss(e)?mr(e):e.length;var i=Ke(e);return i==$n||i==Mn?e.size:Ao(e).length}function cg(e,i,a){var f=K(e)?ro:r0;return a&&sn(e,i,a)&&(i=t),f(e,Y(i,3))}var pg=re(function(e,i){if(e==null)return[];var a=i.length;return a>1&&sn(e,i[0],i[1])?i=[]:a>2&&sn(i[0],i[1],i[2])&&(i=[i[0]]),nl(e,Qe(i,1),[])}),ns=Yd||function(){return We.Date.now()};function dg(e,i){if(typeof i!="function")throw new Cn(l);return e=ne(e),function(){if(--e<1)return i.apply(this,arguments)}}function Jl(e,i,a){return i=a?t:i,i=e&&i==null?e.length:i,Ft(e,He,t,t,t,t,i)}function Hl(e,i){var a;if(typeof i!="function")throw new Cn(l);return e=ne(e),function(){return--e>0&&(a=i.apply(this,arguments)),e<=1&&(i=t),a}}var Yo=re(function(e,i,a){var f=J;if(a.length){var p=Rt(a,yr(Yo));f|=ke}return Ft(e,f,i,a,p)}),Xl=re(function(e,i,a){var f=J|pe;if(a.length){var p=Rt(a,yr(Xl));f|=ke}return Ft(i,f,e,a,p)});function Zl(e,i,a){i=a?t:i;var f=Ft(e,Ae,t,t,t,t,t,i);return f.placeholder=Zl.placeholder,f}function Kl(e,i,a){i=a?t:i;var f=Ft(e,we,t,t,t,t,t,i);return f.placeholder=Kl.placeholder,f}function ef(e,i,a){var f,p,_,g,D,A,S=0,C=!1,O=!1,U=!0;if(typeof e!="function")throw new Cn(l);i=Ln(i)||0,Ce(a)&&(C=!!a.leading,O="maxWait"in a,_=O?ze(Ln(a.maxWait)||0,i):_,U="trailing"in a?!!a.trailing:U);function V(Pe){var zn=f,Tt=p;return f=p=t,S=Pe,g=e.apply(Tt,zn),g}function W(Pe){return S=Pe,D=Zr(ie,i),C?V(Pe):g}function te(Pe){var zn=Pe-A,Tt=Pe-S,vf=i-zn;return O?Ze(vf,_-Tt):vf}function Q(Pe){var zn=Pe-A,Tt=Pe-S;return A===t||zn>=i||zn<0||O&&Tt>=_}function ie(){var Pe=ns();if(Q(Pe))return le(Pe);D=Zr(ie,te(Pe))}function le(Pe){return D=t,U&&f?V(Pe):(f=p=t,g)}function En(){D!==t&&fl(D),S=0,f=A=p=D=t}function on(){return D===t?g:le(ns())}function An(){var Pe=ns(),zn=Q(Pe);if(f=arguments,p=this,A=Pe,zn){if(D===t)return W(A);if(O)return fl(D),D=Zr(ie,i),V(A)}return D===t&&(D=Zr(ie,i)),g}return An.cancel=En,An.flush=on,An}var hg=re(function(e,i){return qu(e,1,i)}),_g=re(function(e,i,a){return qu(e,Ln(i)||0,a)});function gg(e){return Ft(e,k)}function ts(e,i){if(typeof e!="function"||i!=null&&typeof i!="function")throw new Cn(l);var a=function(){var f=arguments,p=i?i.apply(this,f):f[0],_=a.cache;if(_.has(p))return _.get(p);var g=e.apply(this,f);return a.cache=_.set(p,g)||_,g};return a.cache=new(ts.Cache||gt),a}ts.Cache=gt;function rs(e){if(typeof e!="function")throw new Cn(l);return function(){var i=arguments;switch(i.length){case 0:return!e.call(this);case 1:return!e.call(this,i[0]);case 2:return!e.call(this,i[0],i[1]);case 3:return!e.call(this,i[0],i[1],i[2])}return!e.apply(this,i)}}function mg(e){return Hl(2,e)}var Fg=i0(function(e,i){i=i.length==1&&K(i[0])?be(i[0],Fn(Y())):be(Qe(i,1),Fn(Y()));var a=i.length;return re(function(f){for(var p=-1,_=Ze(f.length,a);++p<_;)f[p]=i[p].call(this,f[p]);return mn(e,this,f)})}),Wo=re(function(e,i){var a=Rt(i,yr(Wo));return Ft(e,ke,t,i,a)}),nf=re(function(e,i){var a=Rt(i,yr(nf));return Ft(e,nn,t,i,a)}),Dg=Dt(function(e,i){return Ft(e,dt,t,t,t,i)});function vg(e,i){if(typeof e!="function")throw new Cn(l);return i=i===t?i:ne(i),re(e,i)}function Eg(e,i){if(typeof e!="function")throw new Cn(l);return i=i==null?0:ze(ne(i),0),re(function(a){var f=a[i],p=Mt(a,0,i);return f&&Lt(p,f),mn(e,this,p)})}function Ag(e,i,a){var f=!0,p=!0;if(typeof e!="function")throw new Cn(l);return Ce(a)&&(f="leading"in a?!!a.leading:f,p="trailing"in a?!!a.trailing:p),ef(e,i,{leading:f,maxWait:i,trailing:p})}function Tg(e){return Jl(e,1)}function Ig(e,i){return Wo(xo(i),e)}function yg(){if(!arguments.length)return[];var e=arguments[0];return K(e)?e:[e]}function bg(e){return xn(e,x)}function Sg(e,i){return i=typeof i=="function"?i:t,xn(e,x,i)}function wg(e){return xn(e,E|x)}function Cg(e,i){return i=typeof i=="function"?i:t,xn(e,E|x,i)}function Ng(e,i){return i==null||Vu(e,i,je(i))}function qn(e,i){return e===i||e!==e&&i!==i}var xg=Ji(Do),kg=Ji(function(e,i){return e>=i}),ir=Qu(function(){return arguments}())?Qu:function(e){return Oe(e)&&ge.call(e,"callee")&&!Lu.call(e,"callee")},K=I.isArray,Og=_u?Fn(_u):Gh;function cn(e){return e!=null&&is(e.length)&&!Et(e)}function Be(e){return Oe(e)&&cn(e)}function Lg(e){return e===!0||e===!1||Oe(e)&&rn(e)==he}var Gt=Qd||ia,Rg=gu?Fn(gu):Vh;function Ug(e){return Oe(e)&&e.nodeType===1&&!Kr(e)}function Bg(e){if(e==null)return!0;if(cn(e)&&(K(e)||typeof e=="string"||typeof e.splice=="function"||Gt(e)||br(e)||ir(e)))return!e.length;var i=Ke(e);if(i==$n||i==Mn)return!e.size;if(Xr(e))return!Ao(e).length;for(var a in e)if(ge.call(e,a))return!1;return!0}function Pg(e,i){return Qr(e,i)}function $g(e,i,a){a=typeof a=="function"?a:t;var f=a?a(e,i):t;return f===t?Qr(e,i,t,a):!!f}function Qo(e){if(!Oe(e))return!1;var i=rn(e);return i==kt||i==Or||typeof e.message=="string"&&typeof e.name=="string"&&!Kr(e)}function Mg(e){return typeof e=="number"&&Uu(e)}function Et(e){if(!Ce(e))return!1;var i=rn(e);return i==Xe||i==qa||i==Ue||i==fp}function tf(e){return typeof e=="number"&&e==ne(e)}function is(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Pn}function Ce(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}function Oe(e){return e!=null&&typeof e=="object"}var rf=mu?Fn(mu):zh;function Gg(e,i){return e===i||Eo(e,i,Po(i))}function Vg(e,i,a){return a=typeof a=="function"?a:t,Eo(e,i,Po(i),a)}function qg(e){return sf(e)&&e!=+e}function zg(e){if(S0(e))throw new Z(u);return Ju(e)}function jg(e){return e===null}function Yg(e){return e==null}function sf(e){return typeof e=="number"||Oe(e)&&rn(e)==Lr}function Kr(e){if(!Oe(e)||rn(e)!=ht)return!1;var i=xi(e);if(i===null)return!0;var a=ge.call(i,"constructor")&&i.constructor;return typeof a=="function"&&a instanceof a&&Si.call(a)==Vd}var Jo=Fu?Fn(Fu):jh;function Wg(e){return tf(e)&&e>=-Pn&&e<=Pn}var of=Du?Fn(Du):Yh;function ss(e){return typeof e=="string"||!K(e)&&Oe(e)&&rn(e)==Ur}function vn(e){return typeof e=="symbol"||Oe(e)&&rn(e)==Fi}var br=vu?Fn(vu):Wh;function Qg(e){return e===t}function Jg(e){return Oe(e)&&Ke(e)==Br}function Hg(e){return Oe(e)&&rn(e)==pp}var Xg=Ji(To),Zg=Ji(function(e,i){return e<=i});function af(e){if(!e)return[];if(cn(e))return ss(e)?Gn(e):fn(e);if(Mr&&e[Mr])return Nd(e[Mr]());var i=Ke(e),a=i==$n?lo:i==Mn?Ii:Sr;return a(e)}function At(e){if(!e)return e===0?e:0;if(e=Ln(e),e===it||e===-it){var i=e<0?-1:1;return i*pr}return e===e?e:0}function ne(e){var i=At(e),a=i%1;return i===i?a?i-a:i:0}function uf(e){return e?er(ne(e),0,yn):0}function Ln(e){if(typeof e=="number")return e;if(vn(e))return Jt;if(Ce(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=Ce(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=bu(e);var a=Op.test(e);return a||Rp.test(e)?dd(e.slice(2),a?2:8):kp.test(e)?Jt:+e}function lf(e){return ot(e,pn(e))}function Kg(e){return e?er(ne(e),-Pn,Pn):e===0?e:0}function _e(e){return e==null?"":Dn(e)}var e1=Tr(function(e,i){if(Xr(i)||cn(i)){ot(i,je(i),e);return}for(var a in i)ge.call(i,a)&&jr(e,a,i[a])}),ff=Tr(function(e,i){ot(i,pn(i),e)}),os=Tr(function(e,i,a,f){ot(i,pn(i),e,f)}),n1=Tr(function(e,i,a,f){ot(i,je(i),e,f)}),t1=Dt(go);function r1(e,i){var a=Ar(e);return i==null?a:Gu(a,i)}var i1=re(function(e,i){e=ve(e);var a=-1,f=i.length,p=f>2?i[2]:t;for(p&&sn(i[0],i[1],p)&&(f=1);++a<f;)for(var _=i[a],g=pn(_),D=-1,A=g.length;++D<A;){var S=g[D],C=e[S];(C===t||qn(C,Dr[S])&&!ge.call(e,S))&&(e[S]=_[S])}return e}),s1=re(function(e){return e.push(t,bl),mn(cf,t,e)});function o1(e,i){return Au(e,Y(i,3),st)}function a1(e,i){return Au(e,Y(i,3),Fo)}function u1(e,i){return e==null?e:mo(e,Y(i,3),pn)}function l1(e,i){return e==null?e:Yu(e,Y(i,3),pn)}function f1(e,i){return e&&st(e,Y(i,3))}function c1(e,i){return e&&Fo(e,Y(i,3))}function p1(e){return e==null?[]:Gi(e,je(e))}function d1(e){return e==null?[]:Gi(e,pn(e))}function Ho(e,i,a){var f=e==null?t:nr(e,i);return f===t?a:f}function h1(e,i){return e!=null&&Cl(e,i,Bh)}function Xo(e,i){return e!=null&&Cl(e,i,Ph)}var _1=El(function(e,i,a){i!=null&&typeof i.toString!="function"&&(i=wi.call(i)),e[i]=a},Ko(dn)),g1=El(function(e,i,a){i!=null&&typeof i.toString!="function"&&(i=wi.call(i)),ge.call(e,i)?e[i].push(a):e[i]=[a]},Y),m1=re(Wr);function je(e){return cn(e)?$u(e):Ao(e)}function pn(e){return cn(e)?$u(e,!0):Qh(e)}function F1(e,i){var a={};return i=Y(i,3),st(e,function(f,p,_){mt(a,i(f,p,_),f)}),a}function D1(e,i){var a={};return i=Y(i,3),st(e,function(f,p,_){mt(a,p,i(f,p,_))}),a}var v1=Tr(function(e,i,a){Vi(e,i,a)}),cf=Tr(function(e,i,a,f){Vi(e,i,a,f)}),E1=Dt(function(e,i){var a={};if(e==null)return a;var f=!1;i=be(i,function(_){return _=$t(_,e),f||(f=_.length>1),_}),ot(e,Uo(e),a),f&&(a=xn(a,E|w|x,_0));for(var p=i.length;p--;)wo(a,i[p]);return a});function A1(e,i){return pf(e,rs(Y(i)))}var T1=Dt(function(e,i){return e==null?{}:Hh(e,i)});function pf(e,i){if(e==null)return{};var a=be(Uo(e),function(f){return[f]});return i=Y(i),tl(e,a,function(f,p){return i(f,p[0])})}function I1(e,i,a){i=$t(i,e);var f=-1,p=i.length;for(p||(p=1,e=t);++f<p;){var _=e==null?t:e[at(i[f])];_===t&&(f=p,_=a),e=Et(_)?_.call(e):_}return e}function y1(e,i,a){return e==null?e:Jr(e,i,a)}function b1(e,i,a,f){return f=typeof f=="function"?f:t,e==null?e:Jr(e,i,a,f)}var df=Il(je),hf=Il(pn);function S1(e,i,a){var f=K(e),p=f||Gt(e)||br(e);if(i=Y(i,4),a==null){var _=e&&e.constructor;p?a=f?new _:[]:Ce(e)?a=Et(_)?Ar(xi(e)):{}:a={}}return(p?wn:st)(e,function(g,D,A){return i(a,g,D,A)}),a}function w1(e,i){return e==null?!0:wo(e,i)}function C1(e,i,a){return e==null?e:al(e,i,xo(a))}function N1(e,i,a,f){return f=typeof f=="function"?f:t,e==null?e:al(e,i,xo(a),f)}function Sr(e){return e==null?[]:uo(e,je(e))}function x1(e){return e==null?[]:uo(e,pn(e))}function k1(e,i,a){return a===t&&(a=i,i=t),a!==t&&(a=Ln(a),a=a===a?a:0),i!==t&&(i=Ln(i),i=i===i?i:0),er(Ln(e),i,a)}function O1(e,i,a){return i=At(i),a===t?(a=i,i=0):a=At(a),e=Ln(e),$h(e,i,a)}function L1(e,i,a){if(a&&typeof a!="boolean"&&sn(e,i,a)&&(i=a=t),a===t&&(typeof i=="boolean"?(a=i,i=t):typeof e=="boolean"&&(a=e,e=t)),e===t&&i===t?(e=0,i=1):(e=At(e),i===t?(i=e,e=0):i=At(i)),e>i){var f=e;e=i,i=f}if(a||e%1||i%1){var p=Bu();return Ze(e+p*(i-e+pd("1e-"+((p+"").length-1))),i)}return yo(e,i)}var R1=Ir(function(e,i,a){return i=i.toLowerCase(),e+(a?_f(i):i)});function _f(e){return Zo(_e(e).toLowerCase())}function gf(e){return e=_e(e),e&&e.replace(Bp,yd).replace(td,"")}function U1(e,i,a){e=_e(e),i=Dn(i);var f=e.length;a=a===t?f:er(ne(a),0,f);var p=a;return a-=i.length,a>=0&&e.slice(a,p)==i}function B1(e){return e=_e(e),e&&mp.test(e)?e.replace(Ya,bd):e}function P1(e){return e=_e(e),e&&Tp.test(e)?e.replace(Ys,"\\$&"):e}var $1=Ir(function(e,i,a){return e+(a?"-":"")+i.toLowerCase()}),M1=Ir(function(e,i,a){return e+(a?" ":"")+i.toLowerCase()}),G1=Fl("toLowerCase");function V1(e,i,a){e=_e(e),i=ne(i);var f=i?mr(e):0;if(!i||f>=i)return e;var p=(i-f)/2;return Qi(Ri(p),a)+e+Qi(Li(p),a)}function q1(e,i,a){e=_e(e),i=ne(i);var f=i?mr(e):0;return i&&f<i?e+Qi(i-f,a):e}function z1(e,i,a){e=_e(e),i=ne(i);var f=i?mr(e):0;return i&&f<i?Qi(i-f,a)+e:e}function j1(e,i,a){return a||i==null?i=0:i&&(i=+i),Zd(_e(e).replace(Ws,""),i||0)}function Y1(e,i,a){return(a?sn(e,i,a):i===t)?i=1:i=ne(i),bo(_e(e),i)}function W1(){var e=arguments,i=_e(e[0]);return e.length<3?i:i.replace(e[1],e[2])}var Q1=Ir(function(e,i,a){return e+(a?"_":"")+i.toLowerCase()});function J1(e,i,a){return a&&typeof a!="number"&&sn(e,i,a)&&(i=a=t),a=a===t?yn:a>>>0,a?(e=_e(e),e&&(typeof i=="string"||i!=null&&!Jo(i))&&(i=Dn(i),!i&&gr(e))?Mt(Gn(e),0,a):e.split(i,a)):[]}var H1=Ir(function(e,i,a){return e+(a?" ":"")+Zo(i)});function X1(e,i,a){return e=_e(e),a=a==null?0:er(ne(a),0,e.length),i=Dn(i),e.slice(a,a+i.length)==i}function Z1(e,i,a){var f=h.templateSettings;a&&sn(e,i,a)&&(i=t),e=_e(e),i=os({},i,f,yl);var p=os({},i.imports,f.imports,yl),_=je(p),g=uo(p,_),D,A,S=0,C=i.interpolate||Di,O="__p += '",U=fo((i.escape||Di).source+"|"+C.source+"|"+(C===Wa?xp:Di).source+"|"+(i.evaluate||Di).source+"|$","g"),V="//# sourceURL="+(ge.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ad+"]")+`
`;e.replace(U,function(Q,ie,le,En,on,An){return le||(le=En),O+=e.slice(S,An).replace(Pp,Sd),ie&&(D=!0,O+=`' +
__e(`+ie+`) +
'`),on&&(A=!0,O+=`';
`+on+`;
__p += '`),le&&(O+=`' +
((__t = (`+le+`)) == null ? '' : __t) +
'`),S=An+Q.length,Q}),O+=`';
`;var W=ge.call(i,"variable")&&i.variable;if(!W)O=`with (obj) {
`+O+`
}
`;else if(Cp.test(W))throw new Z(c);O=(A?O.replace(dp,""):O).replace(hp,"$1").replace(_p,"$1;"),O="function("+(W||"obj")+`) {
`+(W?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(D?", __e = _.escape":"")+(A?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+O+`return __p
}`;var te=Ff(function(){return ce(_,V+"return "+O).apply(t,g)});if(te.source=O,Qo(te))throw te;return te}function K1(e){return _e(e).toLowerCase()}function e7(e){return _e(e).toUpperCase()}function n7(e,i,a){if(e=_e(e),e&&(a||i===t))return bu(e);if(!e||!(i=Dn(i)))return e;var f=Gn(e),p=Gn(i),_=Su(f,p),g=wu(f,p)+1;return Mt(f,_,g).join("")}function t7(e,i,a){if(e=_e(e),e&&(a||i===t))return e.slice(0,Nu(e)+1);if(!e||!(i=Dn(i)))return e;var f=Gn(e),p=wu(f,Gn(i))+1;return Mt(f,0,p).join("")}function r7(e,i,a){if(e=_e(e),e&&(a||i===t))return e.replace(Ws,"");if(!e||!(i=Dn(i)))return e;var f=Gn(e),p=Su(f,Gn(i));return Mt(f,p).join("")}function i7(e,i){var a=X,f=tn;if(Ce(i)){var p="separator"in i?i.separator:p;a="length"in i?ne(i.length):a,f="omission"in i?Dn(i.omission):f}e=_e(e);var _=e.length;if(gr(e)){var g=Gn(e);_=g.length}if(a>=_)return e;var D=a-mr(f);if(D<1)return f;var A=g?Mt(g,0,D).join(""):e.slice(0,D);if(p===t)return A+f;if(g&&(D+=A.length-D),Jo(p)){if(e.slice(D).search(p)){var S,C=A;for(p.global||(p=fo(p.source,_e(Qa.exec(p))+"g")),p.lastIndex=0;S=p.exec(C);)var O=S.index;A=A.slice(0,O===t?D:O)}}else if(e.indexOf(Dn(p),D)!=D){var U=A.lastIndexOf(p);U>-1&&(A=A.slice(0,U))}return A+f}function s7(e){return e=_e(e),e&&gp.test(e)?e.replace(ja,Ld):e}var o7=Ir(function(e,i,a){return e+(a?" ":"")+i.toUpperCase()}),Zo=Fl("toUpperCase");function mf(e,i,a){return e=_e(e),i=a?t:i,i===t?Cd(e)?Bd(e):vd(e):e.match(i)||[]}var Ff=re(function(e,i){try{return mn(e,t,i)}catch(a){return Qo(a)?a:new Z(a)}}),a7=Dt(function(e,i){return wn(i,function(a){a=at(a),mt(e,a,Yo(e[a],e))}),e});function u7(e){var i=e==null?0:e.length,a=Y();return e=i?be(e,function(f){if(typeof f[1]!="function")throw new Cn(l);return[a(f[0]),f[1]]}):[],re(function(f){for(var p=-1;++p<i;){var _=e[p];if(mn(_[0],this,f))return mn(_[1],this,f)}})}function l7(e){return Lh(xn(e,E))}function Ko(e){return function(){return e}}function f7(e,i){return e==null||e!==e?i:e}var c7=vl(),p7=vl(!0);function dn(e){return e}function ea(e){return Hu(typeof e=="function"?e:xn(e,E))}function d7(e){return Zu(xn(e,E))}function h7(e,i){return Ku(e,xn(i,E))}var _7=re(function(e,i){return function(a){return Wr(a,e,i)}}),g7=re(function(e,i){return function(a){return Wr(e,a,i)}});function na(e,i,a){var f=je(i),p=Gi(i,f);a==null&&!(Ce(i)&&(p.length||!f.length))&&(a=i,i=e,e=this,p=Gi(i,je(i)));var _=!(Ce(a)&&"chain"in a)||!!a.chain,g=Et(e);return wn(p,function(D){var A=i[D];e[D]=A,g&&(e.prototype[D]=function(){var S=this.__chain__;if(_||S){var C=e(this.__wrapped__),O=C.__actions__=fn(this.__actions__);return O.push({func:A,args:arguments,thisArg:e}),C.__chain__=S,C}return A.apply(e,Lt([this.value()],arguments))})}),e}function m7(){return We._===this&&(We._=qd),this}function ta(){}function F7(e){return e=ne(e),re(function(i){return el(i,e)})}var D7=Oo(be),v7=Oo(Eu),E7=Oo(ro);function Df(e){return Mo(e)?io(at(e)):Xh(e)}function A7(e){return function(i){return e==null?t:nr(e,i)}}var T7=Al(),I7=Al(!0);function ra(){return[]}function ia(){return!1}function y7(){return{}}function b7(){return""}function S7(){return!0}function w7(e,i){if(e=ne(e),e<1||e>Pn)return[];var a=yn,f=Ze(e,yn);i=Y(i),e-=yn;for(var p=ao(f,i);++a<e;)i(a);return p}function C7(e){return K(e)?be(e,at):vn(e)?[e]:fn(Pl(_e(e)))}function N7(e){var i=++Gd;return _e(e)+i}var x7=Wi(function(e,i){return e+i},0),k7=Lo("ceil"),O7=Wi(function(e,i){return e/i},1),L7=Lo("floor");function R7(e){return e&&e.length?Mi(e,dn,Do):t}function U7(e,i){return e&&e.length?Mi(e,Y(i,2),Do):t}function B7(e){return Iu(e,dn)}function P7(e,i){return Iu(e,Y(i,2))}function $7(e){return e&&e.length?Mi(e,dn,To):t}function M7(e,i){return e&&e.length?Mi(e,Y(i,2),To):t}var G7=Wi(function(e,i){return e*i},1),V7=Lo("round"),q7=Wi(function(e,i){return e-i},0);function z7(e){return e&&e.length?oo(e,dn):0}function j7(e,i){return e&&e.length?oo(e,Y(i,2)):0}return h.after=dg,h.ary=Jl,h.assign=e1,h.assignIn=ff,h.assignInWith=os,h.assignWith=n1,h.at=t1,h.before=Hl,h.bind=Yo,h.bindAll=a7,h.bindKey=Xl,h.castArray=yg,h.chain=Yl,h.chunk=L0,h.compact=R0,h.concat=U0,h.cond=u7,h.conforms=l7,h.constant=Ko,h.countBy=z_,h.create=r1,h.curry=Zl,h.curryRight=Kl,h.debounce=ef,h.defaults=i1,h.defaultsDeep=s1,h.defer=hg,h.delay=_g,h.difference=B0,h.differenceBy=P0,h.differenceWith=$0,h.drop=M0,h.dropRight=G0,h.dropRightWhile=V0,h.dropWhile=q0,h.fill=z0,h.filter=Y_,h.flatMap=J_,h.flatMapDeep=H_,h.flatMapDepth=X_,h.flatten=Vl,h.flattenDeep=j0,h.flattenDepth=Y0,h.flip=gg,h.flow=c7,h.flowRight=p7,h.fromPairs=W0,h.functions=p1,h.functionsIn=d1,h.groupBy=Z_,h.initial=J0,h.intersection=H0,h.intersectionBy=X0,h.intersectionWith=Z0,h.invert=_1,h.invertBy=g1,h.invokeMap=eg,h.iteratee=ea,h.keyBy=ng,h.keys=je,h.keysIn=pn,h.map=es,h.mapKeys=F1,h.mapValues=D1,h.matches=d7,h.matchesProperty=h7,h.memoize=ts,h.merge=v1,h.mergeWith=cf,h.method=_7,h.methodOf=g7,h.mixin=na,h.negate=rs,h.nthArg=F7,h.omit=E1,h.omitBy=A1,h.once=mg,h.orderBy=tg,h.over=D7,h.overArgs=Fg,h.overEvery=v7,h.overSome=E7,h.partial=Wo,h.partialRight=nf,h.partition=rg,h.pick=T1,h.pickBy=pf,h.property=Df,h.propertyOf=A7,h.pull=t_,h.pullAll=zl,h.pullAllBy=r_,h.pullAllWith=i_,h.pullAt=s_,h.range=T7,h.rangeRight=I7,h.rearg=Dg,h.reject=og,h.remove=o_,h.rest=vg,h.reverse=zo,h.sampleSize=ug,h.set=y1,h.setWith=b1,h.shuffle=lg,h.slice=a_,h.sortBy=pg,h.sortedUniq=h_,h.sortedUniqBy=__,h.split=J1,h.spread=Eg,h.tail=g_,h.take=m_,h.takeRight=F_,h.takeRightWhile=D_,h.takeWhile=v_,h.tap=R_,h.throttle=Ag,h.thru=Ki,h.toArray=af,h.toPairs=df,h.toPairsIn=hf,h.toPath=C7,h.toPlainObject=lf,h.transform=S1,h.unary=Tg,h.union=E_,h.unionBy=A_,h.unionWith=T_,h.uniq=I_,h.uniqBy=y_,h.uniqWith=b_,h.unset=w1,h.unzip=jo,h.unzipWith=jl,h.update=C1,h.updateWith=N1,h.values=Sr,h.valuesIn=x1,h.without=S_,h.words=mf,h.wrap=Ig,h.xor=w_,h.xorBy=C_,h.xorWith=N_,h.zip=x_,h.zipObject=k_,h.zipObjectDeep=O_,h.zipWith=L_,h.entries=df,h.entriesIn=hf,h.extend=ff,h.extendWith=os,na(h,h),h.add=x7,h.attempt=Ff,h.camelCase=R1,h.capitalize=_f,h.ceil=k7,h.clamp=k1,h.clone=bg,h.cloneDeep=wg,h.cloneDeepWith=Cg,h.cloneWith=Sg,h.conformsTo=Ng,h.deburr=gf,h.defaultTo=f7,h.divide=O7,h.endsWith=U1,h.eq=qn,h.escape=B1,h.escapeRegExp=P1,h.every=j_,h.find=W_,h.findIndex=Ml,h.findKey=o1,h.findLast=Q_,h.findLastIndex=Gl,h.findLastKey=a1,h.floor=L7,h.forEach=Wl,h.forEachRight=Ql,h.forIn=u1,h.forInRight=l1,h.forOwn=f1,h.forOwnRight=c1,h.get=Ho,h.gt=xg,h.gte=kg,h.has=h1,h.hasIn=Xo,h.head=ql,h.identity=dn,h.includes=K_,h.indexOf=Q0,h.inRange=O1,h.invoke=m1,h.isArguments=ir,h.isArray=K,h.isArrayBuffer=Og,h.isArrayLike=cn,h.isArrayLikeObject=Be,h.isBoolean=Lg,h.isBuffer=Gt,h.isDate=Rg,h.isElement=Ug,h.isEmpty=Bg,h.isEqual=Pg,h.isEqualWith=$g,h.isError=Qo,h.isFinite=Mg,h.isFunction=Et,h.isInteger=tf,h.isLength=is,h.isMap=rf,h.isMatch=Gg,h.isMatchWith=Vg,h.isNaN=qg,h.isNative=zg,h.isNil=Yg,h.isNull=jg,h.isNumber=sf,h.isObject=Ce,h.isObjectLike=Oe,h.isPlainObject=Kr,h.isRegExp=Jo,h.isSafeInteger=Wg,h.isSet=of,h.isString=ss,h.isSymbol=vn,h.isTypedArray=br,h.isUndefined=Qg,h.isWeakMap=Jg,h.isWeakSet=Hg,h.join=K0,h.kebabCase=$1,h.last=On,h.lastIndexOf=e_,h.lowerCase=M1,h.lowerFirst=G1,h.lt=Xg,h.lte=Zg,h.max=R7,h.maxBy=U7,h.mean=B7,h.meanBy=P7,h.min=$7,h.minBy=M7,h.stubArray=ra,h.stubFalse=ia,h.stubObject=y7,h.stubString=b7,h.stubTrue=S7,h.multiply=G7,h.nth=n_,h.noConflict=m7,h.noop=ta,h.now=ns,h.pad=V1,h.padEnd=q1,h.padStart=z1,h.parseInt=j1,h.random=L1,h.reduce=ig,h.reduceRight=sg,h.repeat=Y1,h.replace=W1,h.result=I1,h.round=V7,h.runInContext=v,h.sample=ag,h.size=fg,h.snakeCase=Q1,h.some=cg,h.sortedIndex=u_,h.sortedIndexBy=l_,h.sortedIndexOf=f_,h.sortedLastIndex=c_,h.sortedLastIndexBy=p_,h.sortedLastIndexOf=d_,h.startCase=H1,h.startsWith=X1,h.subtract=q7,h.sum=z7,h.sumBy=j7,h.template=Z1,h.times=w7,h.toFinite=At,h.toInteger=ne,h.toLength=uf,h.toLower=K1,h.toNumber=Ln,h.toSafeInteger=Kg,h.toString=_e,h.toUpper=e7,h.trim=n7,h.trimEnd=t7,h.trimStart=r7,h.truncate=i7,h.unescape=s7,h.uniqueId=N7,h.upperCase=o7,h.upperFirst=Zo,h.each=Wl,h.eachRight=Ql,h.first=ql,na(h,function(){var e={};return st(h,function(i,a){ge.call(h.prototype,a)||(e[a]=i)}),e}(),{chain:!1}),h.VERSION=s,wn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){h[e].placeholder=h}),wn(["drop","take"],function(e,i){ae.prototype[e]=function(a){a=a===t?1:ze(ne(a),0);var f=this.__filtered__&&!i?new ae(this):this.clone();return f.__filtered__?f.__takeCount__=Ze(a,f.__takeCount__):f.__views__.push({size:Ze(a,yn),type:e+(f.__dir__<0?"Right":"")}),f},ae.prototype[e+"Right"]=function(a){return this.reverse()[e](a).reverse()}}),wn(["filter","map","takeWhile"],function(e,i){var a=i+1,f=a==gi||a==mi;ae.prototype[e]=function(p){var _=this.clone();return _.__iteratees__.push({iteratee:Y(p,3),type:a}),_.__filtered__=_.__filtered__||f,_}}),wn(["head","last"],function(e,i){var a="take"+(i?"Right":"");ae.prototype[e]=function(){return this[a](1).value()[0]}}),wn(["initial","tail"],function(e,i){var a="drop"+(i?"":"Right");ae.prototype[e]=function(){return this.__filtered__?new ae(this):this[a](1)}}),ae.prototype.compact=function(){return this.filter(dn)},ae.prototype.find=function(e){return this.filter(e).head()},ae.prototype.findLast=function(e){return this.reverse().find(e)},ae.prototype.invokeMap=re(function(e,i){return typeof e=="function"?new ae(this):this.map(function(a){return Wr(a,e,i)})}),ae.prototype.reject=function(e){return this.filter(rs(Y(e)))},ae.prototype.slice=function(e,i){e=ne(e);var a=this;return a.__filtered__&&(e>0||i<0)?new ae(a):(e<0?a=a.takeRight(-e):e&&(a=a.drop(e)),i!==t&&(i=ne(i),a=i<0?a.dropRight(-i):a.take(i-e)),a)},ae.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},ae.prototype.toArray=function(){return this.take(yn)},st(ae.prototype,function(e,i){var a=/^(?:filter|find|map|reject)|While$/.test(i),f=/^(?:head|last)$/.test(i),p=h[f?"take"+(i=="last"?"Right":""):i],_=f||/^find/.test(i);p&&(h.prototype[i]=function(){var g=this.__wrapped__,D=f?[1]:arguments,A=g instanceof ae,S=D[0],C=A||K(g),O=function(ie){var le=p.apply(h,Lt([ie],D));return f&&U?le[0]:le};C&&a&&typeof S=="function"&&S.length!=1&&(A=C=!1);var U=this.__chain__,V=!!this.__actions__.length,W=_&&!U,te=A&&!V;if(!_&&C){g=te?g:new ae(this);var Q=e.apply(g,D);return Q.__actions__.push({func:Ki,args:[O],thisArg:t}),new Nn(Q,U)}return W&&te?e.apply(this,D):(Q=this.thru(O),W?f?Q.value()[0]:Q.value():Q)})}),wn(["pop","push","shift","sort","splice","unshift"],function(e){var i=yi[e],a=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",f=/^(?:pop|shift)$/.test(e);h.prototype[e]=function(){var p=arguments;if(f&&!this.__chain__){var _=this.value();return i.apply(K(_)?_:[],p)}return this[a](function(g){return i.apply(K(g)?g:[],p)})}}),st(ae.prototype,function(e,i){var a=h[i];if(a){var f=a.name+"";ge.call(Er,f)||(Er[f]=[]),Er[f].push({name:i,func:a})}}),Er[Yi(t,pe).name]=[{name:"wrapper",func:t}],ae.prototype.clone=sh,ae.prototype.reverse=oh,ae.prototype.value=ah,h.prototype.at=U_,h.prototype.chain=B_,h.prototype.commit=P_,h.prototype.next=$_,h.prototype.plant=G_,h.prototype.reverse=V_,h.prototype.toJSON=h.prototype.valueOf=h.prototype.value=q_,h.prototype.first=h.prototype.head,Mr&&(h.prototype[Mr]=M_),h},Fr=Pd();Ht?((Ht.exports=Fr)._=Fr,Ks._=Fr):We._=Fr}).call(ni)})(Es,Es.exports);var e2=Es.exports;const wt=XF(e2),n2="LCDB GraphQL",t2="/docs",r2="https://lcdb.org/images/logo.svg",i2="https://lcdb.org/favicon.ico",s2='[{"title":"Welcome","content":"\\nLCDB GraphQL Database\\n=====================\\n\\nThis is the graph database for `https://lcdb.org`.\\n\\nYou are free to use this database for your own purposes.\\n\\nThe endpoint is a POST to `https://graphql.lcdb.org`\\n          "}]',o2="true",Ac={APP_TITLE:n2,SITE_ROOT:t2,APP_LOGO:r2,APP_FAVICON:i2,PAGES:s2,MAGIDOC_GENERATE:o2};function ID(r){return r.get(Ac)}function Ua(r,n){return r.getOrDefault(Ac,n)}function fe(r,n){if(!!!r)throw new Error(n)}function Ct(r){return typeof r=="object"&&r!==null}function Jn(r,n){if(!!!r)throw new Error(n??"Unexpected invariant triggered.")}const a2=/\r\n|[\n\r]/g;function ma(r,n){let t=0,s=1;for(const o of r.body.matchAll(a2)){if(typeof o.index=="number"||Jn(!1),o.index>=n)break;t=o.index+o[0].length,s+=1}return{line:s,column:n+1-t}}function u2(r){return Tc(r.source,ma(r.source,r.start))}function Tc(r,n){const t=r.locationOffset.column-1,s="".padStart(t)+r.body,o=n.line-1,u=r.locationOffset.line-1,l=n.line+u,c=n.line===1?t:0,d=n.column+c,m=`${r.name}:${l}:${d}
`,F=s.split(/\r\n|[\n\r]/g),E=F[o];if(E.length>120){const w=Math.floor(d/80),x=d%80,L=[];for(let R=0;R<E.length;R+=80)L.push(E.slice(R,R+80));return m+qf([[`${l} |`,L[0]],...L.slice(1,w+1).map(R=>["|",R]),["|","^".padStart(x)],["|",L[w+1]]])}return m+qf([[`${l-1} |`,F[o-1]],[`${l} |`,E],["|","^".padStart(d)],[`${l+1} |`,F[o+1]]])}function qf(r){const n=r.filter(([s,o])=>o!==void 0),t=Math.max(...n.map(([s])=>s.length));return n.map(([s,o])=>s.padStart(t)+(o?" "+o:"")).join(`
`)}function l2(r){const n=r[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:r[1],positions:r[2],path:r[3],originalError:r[4],extensions:r[5]}:n}class q extends Error{constructor(n,...t){var s,o,u;const{nodes:l,source:c,positions:d,path:m,originalError:F,extensions:E}=l2(t);super(n),this.name="GraphQLError",this.path=m??void 0,this.originalError=F??void 0,this.nodes=zf(Array.isArray(l)?l:l?[l]:void 0);const w=zf((s=this.nodes)===null||s===void 0?void 0:s.map(L=>L.loc).filter(L=>L!=null));this.source=c??(w==null||(o=w[0])===null||o===void 0?void 0:o.source),this.positions=d??(w==null?void 0:w.map(L=>L.start)),this.locations=d&&c?d.map(L=>ma(c,L)):w==null?void 0:w.map(L=>ma(L.source,L.start));const x=Ct(F==null?void 0:F.extensions)?F==null?void 0:F.extensions:void 0;this.extensions=(u=E??x)!==null&&u!==void 0?u:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),F!=null&&F.stack?Object.defineProperty(this,"stack",{value:F.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,q):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+u2(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+Tc(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function zf(r){return r===void 0||r.length===0?void 0:r}function Ye(r,n,t){return new q(`Syntax Error: ${t}`,{source:r,positions:[n]})}class f2{constructor(n,t,s){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=s}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Ic{constructor(n,t,s,o,u,l){this.kind=n,this.start=t,this.end=s,this.line=o,this.column=u,this.value=l,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const yc={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},c2=new Set(Object.keys(yc));function jf(r){const n=r==null?void 0:r.kind;return typeof n=="string"&&c2.has(n)}var Rn;(function(r){r.QUERY="query",r.MUTATION="mutation",r.SUBSCRIPTION="subscription"})(Rn||(Rn={}));var j;(function(r){r.QUERY="QUERY",r.MUTATION="MUTATION",r.SUBSCRIPTION="SUBSCRIPTION",r.FIELD="FIELD",r.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",r.FRAGMENT_SPREAD="FRAGMENT_SPREAD",r.INLINE_FRAGMENT="INLINE_FRAGMENT",r.VARIABLE_DEFINITION="VARIABLE_DEFINITION",r.SCHEMA="SCHEMA",r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.FIELD_DEFINITION="FIELD_DEFINITION",r.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.ENUM_VALUE="ENUM_VALUE",r.INPUT_OBJECT="INPUT_OBJECT",r.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(j||(j={}));var T;(function(r){r.NAME="Name",r.DOCUMENT="Document",r.OPERATION_DEFINITION="OperationDefinition",r.VARIABLE_DEFINITION="VariableDefinition",r.SELECTION_SET="SelectionSet",r.FIELD="Field",r.ARGUMENT="Argument",r.FRAGMENT_SPREAD="FragmentSpread",r.INLINE_FRAGMENT="InlineFragment",r.FRAGMENT_DEFINITION="FragmentDefinition",r.VARIABLE="Variable",r.INT="IntValue",r.FLOAT="FloatValue",r.STRING="StringValue",r.BOOLEAN="BooleanValue",r.NULL="NullValue",r.ENUM="EnumValue",r.LIST="ListValue",r.OBJECT="ObjectValue",r.OBJECT_FIELD="ObjectField",r.DIRECTIVE="Directive",r.NAMED_TYPE="NamedType",r.LIST_TYPE="ListType",r.NON_NULL_TYPE="NonNullType",r.SCHEMA_DEFINITION="SchemaDefinition",r.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",r.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",r.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",r.FIELD_DEFINITION="FieldDefinition",r.INPUT_VALUE_DEFINITION="InputValueDefinition",r.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",r.UNION_TYPE_DEFINITION="UnionTypeDefinition",r.ENUM_TYPE_DEFINITION="EnumTypeDefinition",r.ENUM_VALUE_DEFINITION="EnumValueDefinition",r.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",r.DIRECTIVE_DEFINITION="DirectiveDefinition",r.SCHEMA_EXTENSION="SchemaExtension",r.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",r.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",r.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",r.UNION_TYPE_EXTENSION="UnionTypeExtension",r.ENUM_TYPE_EXTENSION="EnumTypeExtension",r.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(T||(T={}));function Fa(r){return r===9||r===32}function li(r){return r>=48&&r<=57}function bc(r){return r>=97&&r<=122||r>=65&&r<=90}function Ba(r){return bc(r)||r===95}function Sc(r){return bc(r)||li(r)||r===95}function p2(r){var n;let t=Number.MAX_SAFE_INTEGER,s=null,o=-1;for(let l=0;l<r.length;++l){var u;const c=r[l],d=d2(c);d!==c.length&&(s=(u=s)!==null&&u!==void 0?u:l,o=l,l!==0&&d<t&&(t=d))}return r.map((l,c)=>c===0?l:l.slice(t)).slice((n=s)!==null&&n!==void 0?n:0,o+1)}function d2(r){let n=0;for(;n<r.length&&Fa(r.charCodeAt(n));)++n;return n}function h2(r,n){const t=r.replace(/"""/g,'\\"""'),s=t.split(/\r\n|[\n\r]/g),o=s.length===1,u=s.length>1&&s.slice(1).every(x=>x.length===0||Fa(x.charCodeAt(0))),l=t.endsWith('\\"""'),c=r.endsWith('"')&&!l,d=r.endsWith("\\"),m=c||d,F=!(n!=null&&n.minimize)&&(!o||r.length>70||m||u||l);let E="";const w=o&&Fa(r.charCodeAt(0));return(F&&!w||u)&&(E+=`
`),E+=t,(F||m)&&(E+=`
`),'"""'+E+'"""'}var N;(function(r){r.SOF="<SOF>",r.EOF="<EOF>",r.BANG="!",r.DOLLAR="$",r.AMP="&",r.PAREN_L="(",r.PAREN_R=")",r.SPREAD="...",r.COLON=":",r.EQUALS="=",r.AT="@",r.BRACKET_L="[",r.BRACKET_R="]",r.BRACE_L="{",r.PIPE="|",r.BRACE_R="}",r.NAME="Name",r.INT="Int",r.FLOAT="Float",r.STRING="String",r.BLOCK_STRING="BlockString",r.COMMENT="Comment"})(N||(N={}));class _2{constructor(n){const t=new Ic(N.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==N.EOF)do if(n.next)n=n.next;else{const t=m2(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===N.COMMENT);return n}}function g2(r){return r===N.BANG||r===N.DOLLAR||r===N.AMP||r===N.PAREN_L||r===N.PAREN_R||r===N.SPREAD||r===N.COLON||r===N.EQUALS||r===N.AT||r===N.BRACKET_L||r===N.BRACKET_R||r===N.BRACE_L||r===N.PIPE||r===N.BRACE_R}function xr(r){return r>=0&&r<=55295||r>=57344&&r<=1114111}function Cs(r,n){return wc(r.charCodeAt(n))&&Cc(r.charCodeAt(n+1))}function wc(r){return r>=55296&&r<=56319}function Cc(r){return r>=56320&&r<=57343}function ar(r,n){const t=r.source.body.codePointAt(n);if(t===void 0)return N.EOF;if(t>=32&&t<=126){const s=String.fromCodePoint(t);return s==='"'?`'"'`:`"${s}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function Ge(r,n,t,s,o){const u=r.line,l=1+t-r.lineStart;return new Ic(n,t,s,u,l,o)}function m2(r,n){const t=r.source.body,s=t.length;let o=n;for(;o<s;){const u=t.charCodeAt(o);switch(u){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++r.line,r.lineStart=o;continue;case 13:t.charCodeAt(o+1)===10?o+=2:++o,++r.line,r.lineStart=o;continue;case 35:return F2(r,o);case 33:return Ge(r,N.BANG,o,o+1);case 36:return Ge(r,N.DOLLAR,o,o+1);case 38:return Ge(r,N.AMP,o,o+1);case 40:return Ge(r,N.PAREN_L,o,o+1);case 41:return Ge(r,N.PAREN_R,o,o+1);case 46:if(t.charCodeAt(o+1)===46&&t.charCodeAt(o+2)===46)return Ge(r,N.SPREAD,o,o+3);break;case 58:return Ge(r,N.COLON,o,o+1);case 61:return Ge(r,N.EQUALS,o,o+1);case 64:return Ge(r,N.AT,o,o+1);case 91:return Ge(r,N.BRACKET_L,o,o+1);case 93:return Ge(r,N.BRACKET_R,o,o+1);case 123:return Ge(r,N.BRACE_L,o,o+1);case 124:return Ge(r,N.PIPE,o,o+1);case 125:return Ge(r,N.BRACE_R,o,o+1);case 34:return t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34?I2(r,o):v2(r,o)}if(li(u)||u===45)return D2(r,o,u);if(Ba(u))return y2(r,o);throw Ye(r.source,o,u===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:xr(u)||Cs(t,o)?`Unexpected character: ${ar(r,o)}.`:`Invalid character: ${ar(r,o)}.`)}return Ge(r,N.EOF,s,s)}function F2(r,n){const t=r.source.body,s=t.length;let o=n+1;for(;o<s;){const u=t.charCodeAt(o);if(u===10||u===13)break;if(xr(u))++o;else if(Cs(t,o))o+=2;else break}return Ge(r,N.COMMENT,n,o,t.slice(n+1,o))}function D2(r,n,t){const s=r.source.body;let o=n,u=t,l=!1;if(u===45&&(u=s.charCodeAt(++o)),u===48){if(u=s.charCodeAt(++o),li(u))throw Ye(r.source,o,`Invalid number, unexpected digit after 0: ${ar(r,o)}.`)}else o=ua(r,o,u),u=s.charCodeAt(o);if(u===46&&(l=!0,u=s.charCodeAt(++o),o=ua(r,o,u),u=s.charCodeAt(o)),(u===69||u===101)&&(l=!0,u=s.charCodeAt(++o),(u===43||u===45)&&(u=s.charCodeAt(++o)),o=ua(r,o,u),u=s.charCodeAt(o)),u===46||Ba(u))throw Ye(r.source,o,`Invalid number, expected digit but got: ${ar(r,o)}.`);return Ge(r,l?N.FLOAT:N.INT,n,o,s.slice(n,o))}function ua(r,n,t){if(!li(t))throw Ye(r.source,n,`Invalid number, expected digit but got: ${ar(r,n)}.`);const s=r.source.body;let o=n+1;for(;li(s.charCodeAt(o));)++o;return o}function v2(r,n){const t=r.source.body,s=t.length;let o=n+1,u=o,l="";for(;o<s;){const c=t.charCodeAt(o);if(c===34)return l+=t.slice(u,o),Ge(r,N.STRING,n,o+1,l);if(c===92){l+=t.slice(u,o);const d=t.charCodeAt(o+1)===117?t.charCodeAt(o+2)===123?E2(r,o):A2(r,o):T2(r,o);l+=d.value,o+=d.size,u=o;continue}if(c===10||c===13)break;if(xr(c))++o;else if(Cs(t,o))o+=2;else throw Ye(r.source,o,`Invalid character within String: ${ar(r,o)}.`)}throw Ye(r.source,o,"Unterminated string.")}function E2(r,n){const t=r.source.body;let s=0,o=3;for(;o<12;){const u=t.charCodeAt(n+o++);if(u===125){if(o<5||!xr(s))break;return{value:String.fromCodePoint(s),size:o}}if(s=s<<4|ti(u),s<0)break}throw Ye(r.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+o)}".`)}function A2(r,n){const t=r.source.body,s=Yf(t,n+2);if(xr(s))return{value:String.fromCodePoint(s),size:6};if(wc(s)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const o=Yf(t,n+8);if(Cc(o))return{value:String.fromCodePoint(s,o),size:12}}throw Ye(r.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function Yf(r,n){return ti(r.charCodeAt(n))<<12|ti(r.charCodeAt(n+1))<<8|ti(r.charCodeAt(n+2))<<4|ti(r.charCodeAt(n+3))}function ti(r){return r>=48&&r<=57?r-48:r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:-1}function T2(r,n){const t=r.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Ye(r.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function I2(r,n){const t=r.source.body,s=t.length;let o=r.lineStart,u=n+3,l=u,c="";const d=[];for(;u<s;){const m=t.charCodeAt(u);if(m===34&&t.charCodeAt(u+1)===34&&t.charCodeAt(u+2)===34){c+=t.slice(l,u),d.push(c);const F=Ge(r,N.BLOCK_STRING,n,u+3,p2(d).join(`
`));return r.line+=d.length-1,r.lineStart=o,F}if(m===92&&t.charCodeAt(u+1)===34&&t.charCodeAt(u+2)===34&&t.charCodeAt(u+3)===34){c+=t.slice(l,u),l=u+1,u+=4;continue}if(m===10||m===13){c+=t.slice(l,u),d.push(c),m===13&&t.charCodeAt(u+1)===10?u+=2:++u,c="",l=u,o=u;continue}if(xr(m))++u;else if(Cs(t,u))u+=2;else throw Ye(r.source,u,`Invalid character within String: ${ar(r,u)}.`)}throw Ye(r.source,u,"Unterminated string.")}function y2(r,n){const t=r.source.body,s=t.length;let o=n+1;for(;o<s;){const u=t.charCodeAt(o);if(Sc(u))++o;else break}return Ge(r,N.NAME,n,o,t.slice(n,o))}const b2=10,Nc=2;function z(r){return Ns(r,[])}function Ns(r,n){switch(typeof r){case"string":return JSON.stringify(r);case"function":return r.name?`[function ${r.name}]`:"[function]";case"object":return S2(r,n);default:return String(r)}}function S2(r,n){if(r===null)return"null";if(n.includes(r))return"[Circular]";const t=[...n,r];if(w2(r)){const s=r.toJSON();if(s!==r)return typeof s=="string"?s:Ns(s,t)}else if(Array.isArray(r))return N2(r,t);return C2(r,t)}function w2(r){return typeof r.toJSON=="function"}function C2(r,n){const t=Object.entries(r);return t.length===0?"{}":n.length>Nc?"["+x2(r)+"]":"{ "+t.map(([o,u])=>o+": "+Ns(u,n)).join(", ")+" }"}function N2(r,n){if(r.length===0)return"[]";if(n.length>Nc)return"[Array]";const t=Math.min(b2,r.length),s=r.length-t,o=[];for(let u=0;u<t;++u)o.push(Ns(r[u],n));return s===1?o.push("... 1 more item"):s>1&&o.push(`... ${s} more items`),"["+o.join(", ")+"]"}function x2(r){const n=Object.prototype.toString.call(r).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof r.constructor=="function"){const t=r.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const pt=globalThis.process?function(n,t){return n instanceof t}:function(n,t){if(n instanceof t)return!0;if(typeof n=="object"&&n!==null){var s;const o=t.prototype[Symbol.toStringTag],u=Symbol.toStringTag in n?n[Symbol.toStringTag]:(s=n.constructor)===null||s===void 0?void 0:s.name;if(o===u){const l=z(n);throw new Error(`Cannot use ${o} "${l}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class xc{constructor(n,t="GraphQL request",s={line:1,column:1}){typeof n=="string"||fe(!1,`Body must be a string. Received: ${z(n)}.`),this.body=n,this.name=t,this.locationOffset=s,this.locationOffset.line>0||fe(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||fe(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function k2(r){return pt(r,xc)}function O2(r,n){return new kc(r,n).parseDocument()}function L2(r,n){const t=new kc(r,n);t.expectToken(N.SOF);const s=t.parseValueLiteral(!1);return t.expectToken(N.EOF),s}class kc{constructor(n,t={}){const s=k2(n)?n:new xc(n);this._lexer=new _2(s),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(N.NAME);return this.node(n,{kind:T.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:T.DOCUMENT,definitions:this.many(N.SOF,this.parseDefinition,N.EOF)})}parseDefinition(){if(this.peek(N.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===N.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw Ye(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(N.BRACE_L))return this.node(n,{kind:T.OPERATION_DEFINITION,operation:Rn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let s;return this.peek(N.NAME)&&(s=this.parseName()),this.node(n,{kind:T.OPERATION_DEFINITION,operation:t,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(N.NAME);switch(n.value){case"query":return Rn.QUERY;case"mutation":return Rn.MUTATION;case"subscription":return Rn.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(N.PAREN_L,this.parseVariableDefinition,N.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:T.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(N.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(N.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(N.DOLLAR),this.node(n,{kind:T.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:T.SELECTION_SET,selections:this.many(N.BRACE_L,this.parseSelection,N.BRACE_R)})}parseSelection(){return this.peek(N.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let s,o;return this.expectOptionalToken(N.COLON)?(s=t,o=this.parseName()):o=t,this.node(n,{kind:T.FIELD,alias:s,name:o,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(N.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(N.PAREN_L,t,N.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,s=this.parseName();return this.expectToken(N.COLON),this.node(t,{kind:T.ARGUMENT,name:s,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(N.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(N.NAME)?this.node(n,{kind:T.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:T.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:T.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:T.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case N.BRACKET_L:return this.parseList(n);case N.BRACE_L:return this.parseObject(n);case N.INT:return this.advanceLexer(),this.node(t,{kind:T.INT,value:t.value});case N.FLOAT:return this.advanceLexer(),this.node(t,{kind:T.FLOAT,value:t.value});case N.STRING:case N.BLOCK_STRING:return this.parseStringLiteral();case N.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:T.BOOLEAN,value:!0});case"false":return this.node(t,{kind:T.BOOLEAN,value:!1});case"null":return this.node(t,{kind:T.NULL});default:return this.node(t,{kind:T.ENUM,value:t.value})}case N.DOLLAR:if(n)if(this.expectToken(N.DOLLAR),this._lexer.token.kind===N.NAME){const s=this._lexer.token.value;throw Ye(this._lexer.source,t.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:T.STRING,value:n.value,block:n.kind===N.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:T.LIST,values:this.any(N.BRACKET_L,t,N.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:T.OBJECT,fields:this.any(N.BRACE_L,t,N.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,s=this.parseName();return this.expectToken(N.COLON),this.node(t,{kind:T.OBJECT_FIELD,name:s,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(N.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(N.AT),this.node(t,{kind:T.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(N.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(N.BRACKET_R),t=this.node(n,{kind:T.LIST_TYPE,type:s})}else t=this.parseNamedType();return this.expectOptionalToken(N.BANG)?this.node(n,{kind:T.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:T.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(N.STRING)||this.peek(N.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),o=this.many(N.BRACE_L,this.parseOperationTypeDefinition,N.BRACE_R);return this.node(n,{kind:T.SCHEMA_DEFINITION,description:t,directives:s,operationTypes:o})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(N.COLON);const s=this.parseNamedType();return this.node(n,{kind:T.OPERATION_TYPE_DEFINITION,operation:t,type:s})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),o=this.parseConstDirectives();return this.node(n,{kind:T.SCALAR_TYPE_DEFINITION,description:t,name:s,directives:o})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),o=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:T.OBJECT_TYPE_DEFINITION,description:t,name:s,interfaces:o,directives:u,fields:l})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(N.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(N.BRACE_L,this.parseFieldDefinition,N.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName(),o=this.parseArgumentDefs();this.expectToken(N.COLON);const u=this.parseTypeReference(),l=this.parseConstDirectives();return this.node(n,{kind:T.FIELD_DEFINITION,description:t,name:s,arguments:o,type:u,directives:l})}parseArgumentDefs(){return this.optionalMany(N.PAREN_L,this.parseInputValueDef,N.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName();this.expectToken(N.COLON);const o=this.parseTypeReference();let u;this.expectOptionalToken(N.EQUALS)&&(u=this.parseConstValueLiteral());const l=this.parseConstDirectives();return this.node(n,{kind:T.INPUT_VALUE_DEFINITION,description:t,name:s,type:o,defaultValue:u,directives:l})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),o=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:T.INTERFACE_TYPE_DEFINITION,description:t,name:s,interfaces:o,directives:u,fields:l})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),o=this.parseConstDirectives(),u=this.parseUnionMemberTypes();return this.node(n,{kind:T.UNION_TYPE_DEFINITION,description:t,name:s,directives:o,types:u})}parseUnionMemberTypes(){return this.expectOptionalToken(N.EQUALS)?this.delimitedMany(N.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),o=this.parseConstDirectives(),u=this.parseEnumValuesDefinition();return this.node(n,{kind:T.ENUM_TYPE_DEFINITION,description:t,name:s,directives:o,values:u})}parseEnumValuesDefinition(){return this.optionalMany(N.BRACE_L,this.parseEnumValueDefinition,N.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseEnumValueName(),o=this.parseConstDirectives();return this.node(n,{kind:T.ENUM_VALUE_DEFINITION,description:t,name:s,directives:o})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Ye(this._lexer.source,this._lexer.token.start,`${ps(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),o=this.parseConstDirectives(),u=this.parseInputFieldsDefinition();return this.node(n,{kind:T.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:s,directives:o,fields:u})}parseInputFieldsDefinition(){return this.optionalMany(N.BRACE_L,this.parseInputValueDef,N.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===N.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),s=this.optionalMany(N.BRACE_L,this.parseOperationTypeDefinition,N.BRACE_R);if(t.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:T.SCHEMA_EXTENSION,directives:t,operationTypes:s})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(n,{kind:T.SCALAR_TYPE_EXTENSION,name:t,directives:s})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(s.length===0&&o.length===0&&u.length===0)throw this.unexpected();return this.node(n,{kind:T.OBJECT_TYPE_EXTENSION,name:t,interfaces:s,directives:o,fields:u})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(s.length===0&&o.length===0&&u.length===0)throw this.unexpected();return this.node(n,{kind:T.INTERFACE_TYPE_EXTENSION,name:t,interfaces:s,directives:o,fields:u})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseUnionMemberTypes();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:T.UNION_TYPE_EXTENSION,name:t,directives:s,types:o})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:T.ENUM_TYPE_EXTENSION,name:t,directives:s,values:o})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:T.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:s,fields:o})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(N.AT);const s=this.parseName(),o=this.parseArgumentDefs(),u=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const l=this.parseDirectiveLocations();return this.node(n,{kind:T.DIRECTIVE_DEFINITION,description:t,name:s,arguments:o,repeatable:u,locations:l})}parseDirectiveLocations(){return this.delimitedMany(N.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(j,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new f2(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw Ye(this._lexer.source,t.start,`Expected ${Oc(n)}, found ${ps(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===N.NAME&&t.value===n)this.advanceLexer();else throw Ye(this._lexer.source,t.start,`Expected "${n}", found ${ps(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===N.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return Ye(this._lexer.source,t.start,`Unexpected ${ps(t)}.`)}any(n,t,s){this.expectToken(n);const o=[];for(;!this.expectOptionalToken(s);)o.push(t.call(this));return o}optionalMany(n,t,s){if(this.expectOptionalToken(n)){const o=[];do o.push(t.call(this));while(!this.expectOptionalToken(s));return o}return[]}many(n,t,s){this.expectToken(n);const o=[];do o.push(t.call(this));while(!this.expectOptionalToken(s));return o}delimitedMany(n,t){this.expectOptionalToken(n);const s=[];do s.push(t.call(this));while(this.expectOptionalToken(n));return s}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==N.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw Ye(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function ps(r){const n=r.value;return Oc(r.kind)+(n!=null?` "${n}"`:"")}function Oc(r){return g2(r)?`"${r}"`:r}const R2=5;function xs(r,n){const[t,s]=n?[r,n]:[void 0,r];let o=" Did you mean ";t&&(o+=t+" ");const u=s.map(d=>`"${d}"`);switch(u.length){case 0:return"";case 1:return o+u[0]+"?";case 2:return o+u[0]+" or "+u[1]+"?"}const l=u.slice(0,R2),c=l.pop();return o+l.join(", ")+", or "+c+"?"}function Wf(r){return r}function Cr(r,n){const t=Object.create(null);for(const s of r)t[n(s)]=s;return t}function sr(r,n,t){const s=Object.create(null);for(const o of r)s[n(o)]=t(o);return s}function It(r,n){const t=Object.create(null);for(const s of Object.keys(r))t[s]=n(r[s],s);return t}function U2(r,n){let t=0,s=0;for(;t<r.length&&s<n.length;){let o=r.charCodeAt(t),u=n.charCodeAt(s);if(ds(o)&&ds(u)){let l=0;do++t,l=l*10+o-Da,o=r.charCodeAt(t);while(ds(o)&&l>0);let c=0;do++s,c=c*10+u-Da,u=n.charCodeAt(s);while(ds(u)&&c>0);if(l<c)return-1;if(l>c)return 1}else{if(o<u)return-1;if(o>u)return 1;++t,++s}}return r.length-n.length}const Da=48,B2=57;function ds(r){return!isNaN(r)&&Da<=r&&r<=B2}function ks(r,n){const t=Object.create(null),s=new P2(r),o=Math.floor(r.length*.4)+1;for(const u of n){const l=s.measure(u,o);l!==void 0&&(t[u]=l)}return Object.keys(t).sort((u,l)=>{const c=t[u]-t[l];return c!==0?c:U2(u,l)})}class P2{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=Qf(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const s=n.toLowerCase();if(this._inputLowerCase===s)return 1;let o=Qf(s),u=this._inputArray;if(o.length<u.length){const F=o;o=u,u=F}const l=o.length,c=u.length;if(l-c>t)return;const d=this._rows;for(let F=0;F<=c;F++)d[0][F]=F;for(let F=1;F<=l;F++){const E=d[(F-1)%3],w=d[F%3];let x=w[0]=F;for(let L=1;L<=c;L++){const R=o[F-1]===u[L-1]?0:1;let J=Math.min(E[L]+1,w[L-1]+1,E[L-1]+R);if(F>1&&L>1&&o[F-1]===u[L-2]&&o[F-2]===u[L-1]){const pe=d[(F-2)%3][L-2];J=Math.min(J,pe+1)}J<x&&(x=J),w[L]=J}if(x>t)return}const m=d[l%3][c];return m<=t?m:void 0}}function Qf(r){const n=r.length,t=new Array(n);for(let s=0;s<n;++s)t[s]=r.charCodeAt(s);return t}function Bn(r){if(r==null)return Object.create(null);if(Object.getPrototypeOf(r)===null)return r;const n=Object.create(null);for(const[t,s]of Object.entries(r))n[t]=s;return n}function $2(r){return`"${r.replace(M2,G2)}"`}const M2=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function G2(r){return V2[r.charCodeAt(0)]}const V2=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],ri=Object.freeze({});function Lc(r,n,t=yc){const s=new Map;for(const pe of Object.values(T))s.set(pe,Rc(n,pe));let o,u=Array.isArray(r),l=[r],c=-1,d=[],m=r,F,E;const w=[],x=[];do{c++;const pe=c===l.length,Me=pe&&d.length!==0;if(pe){if(F=x.length===0?void 0:w[w.length-1],m=E,E=x.pop(),Me)if(u){m=m.slice();let we=0;for(const[ke,nn]of d){const He=ke-we;nn===null?(m.splice(He,1),we++):m[He]=nn}}else{m=Object.defineProperties({},Object.getOwnPropertyDescriptors(m));for(const[we,ke]of d)m[we]=ke}c=o.index,l=o.keys,d=o.edits,u=o.inArray,o=o.prev}else if(E){if(F=u?c:l[c],m=E[F],m==null)continue;w.push(F)}let Ae;if(!Array.isArray(m)){var L,R;jf(m)||fe(!1,`Invalid AST Node: ${z(m)}.`);const we=pe?(L=s.get(m.kind))===null||L===void 0?void 0:L.leave:(R=s.get(m.kind))===null||R===void 0?void 0:R.enter;if(Ae=we==null?void 0:we.call(n,m,F,E,w,x),Ae===ri)break;if(Ae===!1){if(!pe){w.pop();continue}}else if(Ae!==void 0&&(d.push([F,Ae]),!pe))if(jf(Ae))m=Ae;else{w.pop();continue}}if(Ae===void 0&&Me&&d.push([F,m]),pe)w.pop();else{var J;o={inArray:u,index:c,keys:l,edits:d,prev:o},u=Array.isArray(m),l=u?m:(J=t[m.kind])!==null&&J!==void 0?J:[],c=-1,d=[],E&&x.push(E),E=m}}while(o!==void 0);return d.length!==0?d[d.length-1][1]:r}function q2(r){const n=new Array(r.length).fill(null),t=Object.create(null);for(const s of Object.values(T)){let o=!1;const u=new Array(r.length).fill(void 0),l=new Array(r.length).fill(void 0);for(let d=0;d<r.length;++d){const{enter:m,leave:F}=Rc(r[d],s);o||(o=m!=null||F!=null),u[d]=m,l[d]=F}if(!o)continue;const c={enter(...d){const m=d[0];for(let E=0;E<r.length;E++)if(n[E]===null){var F;const w=(F=u[E])===null||F===void 0?void 0:F.apply(r[E],d);if(w===!1)n[E]=m;else if(w===ri)n[E]=ri;else if(w!==void 0)return w}},leave(...d){const m=d[0];for(let E=0;E<r.length;E++)if(n[E]===null){var F;const w=(F=l[E])===null||F===void 0?void 0:F.apply(r[E],d);if(w===ri)n[E]=ri;else if(w!==void 0&&w!==!1)return w}else n[E]===m&&(n[E]=null)}};t[s]=c}return t}function Rc(r,n){const t=r[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:r.enter,leave:r.leave}}function ft(r){return Lc(r,j2)}const z2=80,j2={Name:{leave:r=>r.value},Variable:{leave:r=>"$"+r.name},Document:{leave:r=>G(r.definitions,`

`)},OperationDefinition:{leave(r){const n=ue("(",G(r.variableDefinitions,", "),")"),t=G([r.operation,G([r.name,n]),G(r.directives," ")]," ");return(t==="query"?"":t+" ")+r.selectionSet}},VariableDefinition:{leave:({variable:r,type:n,defaultValue:t,directives:s})=>r+": "+n+ue(" = ",t)+ue(" ",G(s," "))},SelectionSet:{leave:({selections:r})=>jn(r)},Field:{leave({alias:r,name:n,arguments:t,directives:s,selectionSet:o}){const u=ue("",r,": ")+n;let l=u+ue("(",G(t,", "),")");return l.length>z2&&(l=u+ue(`(
`,gs(G(t,`
`)),`
)`)),G([l,G(s," "),o]," ")}},Argument:{leave:({name:r,value:n})=>r+": "+n},FragmentSpread:{leave:({name:r,directives:n})=>"..."+r+ue(" ",G(n," "))},InlineFragment:{leave:({typeCondition:r,directives:n,selectionSet:t})=>G(["...",ue("on ",r),G(n," "),t]," ")},FragmentDefinition:{leave:({name:r,typeCondition:n,variableDefinitions:t,directives:s,selectionSet:o})=>`fragment ${r}${ue("(",G(t,", "),")")} on ${n} ${ue("",G(s," ")," ")}`+o},IntValue:{leave:({value:r})=>r},FloatValue:{leave:({value:r})=>r},StringValue:{leave:({value:r,block:n})=>n?h2(r):$2(r)},BooleanValue:{leave:({value:r})=>r?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:r})=>r},ListValue:{leave:({values:r})=>"["+G(r,", ")+"]"},ObjectValue:{leave:({fields:r})=>"{"+G(r,", ")+"}"},ObjectField:{leave:({name:r,value:n})=>r+": "+n},Directive:{leave:({name:r,arguments:n})=>"@"+r+ue("(",G(n,", "),")")},NamedType:{leave:({name:r})=>r},ListType:{leave:({type:r})=>"["+r+"]"},NonNullType:{leave:({type:r})=>r+"!"},SchemaDefinition:{leave:({description:r,directives:n,operationTypes:t})=>ue("",r,`
`)+G(["schema",G(n," "),jn(t)]," ")},OperationTypeDefinition:{leave:({operation:r,type:n})=>r+": "+n},ScalarTypeDefinition:{leave:({description:r,name:n,directives:t})=>ue("",r,`
`)+G(["scalar",n,G(t," ")]," ")},ObjectTypeDefinition:{leave:({description:r,name:n,interfaces:t,directives:s,fields:o})=>ue("",r,`
`)+G(["type",n,ue("implements ",G(t," & ")),G(s," "),jn(o)]," ")},FieldDefinition:{leave:({description:r,name:n,arguments:t,type:s,directives:o})=>ue("",r,`
`)+n+(Jf(t)?ue(`(
`,gs(G(t,`
`)),`
)`):ue("(",G(t,", "),")"))+": "+s+ue(" ",G(o," "))},InputValueDefinition:{leave:({description:r,name:n,type:t,defaultValue:s,directives:o})=>ue("",r,`
`)+G([n+": "+t,ue("= ",s),G(o," ")]," ")},InterfaceTypeDefinition:{leave:({description:r,name:n,interfaces:t,directives:s,fields:o})=>ue("",r,`
`)+G(["interface",n,ue("implements ",G(t," & ")),G(s," "),jn(o)]," ")},UnionTypeDefinition:{leave:({description:r,name:n,directives:t,types:s})=>ue("",r,`
`)+G(["union",n,G(t," "),ue("= ",G(s," | "))]," ")},EnumTypeDefinition:{leave:({description:r,name:n,directives:t,values:s})=>ue("",r,`
`)+G(["enum",n,G(t," "),jn(s)]," ")},EnumValueDefinition:{leave:({description:r,name:n,directives:t})=>ue("",r,`
`)+G([n,G(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:r,name:n,directives:t,fields:s})=>ue("",r,`
`)+G(["input",n,G(t," "),jn(s)]," ")},DirectiveDefinition:{leave:({description:r,name:n,arguments:t,repeatable:s,locations:o})=>ue("",r,`
`)+"directive @"+n+(Jf(t)?ue(`(
`,gs(G(t,`
`)),`
)`):ue("(",G(t,", "),")"))+(s?" repeatable":"")+" on "+G(o," | ")},SchemaExtension:{leave:({directives:r,operationTypes:n})=>G(["extend schema",G(r," "),jn(n)]," ")},ScalarTypeExtension:{leave:({name:r,directives:n})=>G(["extend scalar",r,G(n," ")]," ")},ObjectTypeExtension:{leave:({name:r,interfaces:n,directives:t,fields:s})=>G(["extend type",r,ue("implements ",G(n," & ")),G(t," "),jn(s)]," ")},InterfaceTypeExtension:{leave:({name:r,interfaces:n,directives:t,fields:s})=>G(["extend interface",r,ue("implements ",G(n," & ")),G(t," "),jn(s)]," ")},UnionTypeExtension:{leave:({name:r,directives:n,types:t})=>G(["extend union",r,G(n," "),ue("= ",G(t," | "))]," ")},EnumTypeExtension:{leave:({name:r,directives:n,values:t})=>G(["extend enum",r,G(n," "),jn(t)]," ")},InputObjectTypeExtension:{leave:({name:r,directives:n,fields:t})=>G(["extend input",r,G(n," "),jn(t)]," ")}};function G(r,n=""){var t;return(t=r==null?void 0:r.filter(s=>s).join(n))!==null&&t!==void 0?t:""}function jn(r){return ue(`{
`,gs(G(r,`
`)),`
}`)}function ue(r,n,t=""){return n!=null&&n!==""?r+n+t:""}function gs(r){return ue("  ",r.replace(/\n/g,`
  `))}function Jf(r){var n;return(n=r==null?void 0:r.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function va(r,n){switch(r.kind){case T.NULL:return null;case T.INT:return parseInt(r.value,10);case T.FLOAT:return parseFloat(r.value);case T.STRING:case T.ENUM:case T.BOOLEAN:return r.value;case T.LIST:return r.values.map(t=>va(t,n));case T.OBJECT:return sr(r.fields,t=>t.name.value,t=>va(t.value,n));case T.VARIABLE:return n==null?void 0:n[r.name.value]}}function rt(r){if(r!=null||fe(!1,"Must provide name."),typeof r=="string"||fe(!1,"Expected name to be a string."),r.length===0)throw new q("Expected name to be a non-empty string.");for(let n=1;n<r.length;++n)if(!Sc(r.charCodeAt(n)))throw new q(`Names must only contain [_a-zA-Z0-9] but "${r}" does not.`);if(!Ba(r.charCodeAt(0)))throw new q(`Names must start with [_a-zA-Z] but "${r}" does not.`);return r}function Y2(r){if(r==="true"||r==="false"||r==="null")throw new q(`Enum values cannot be named: ${r}`);return rt(r)}function Pa(r){return Wt(r)||gn(r)||un(r)||Hn(r)||Xn(r)||Zn(r)||fr(r)||an(r)}function Wt(r){return pt(r,Nt)}function gn(r){return pt(r,ct)}function W2(r){if(!gn(r))throw new Error(`Expected ${z(r)} to be a GraphQL Object type.`);return r}function un(r){return pt(r,As)}function Q2(r){if(!un(r))throw new Error(`Expected ${z(r)} to be a GraphQL Interface type.`);return r}function Hn(r){return pt(r,Ts)}function Xn(r){return pt(r,Nr)}function Zn(r){return pt(r,Is)}function fr(r){return pt(r,_n)}function an(r){return pt(r,se)}function Uc(r){return Wt(r)||Xn(r)||Zn(r)||$a(r)&&Uc(r.ofType)}function Bc(r){return Wt(r)||gn(r)||un(r)||Hn(r)||Xn(r)||$a(r)&&Bc(r.ofType)}function Pc(r){return Wt(r)||Xn(r)}function J2(r){return un(r)||Hn(r)}class _n{constructor(n){Pa(n)||fe(!1,`Expected ${z(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class se{constructor(n){$c(n)||fe(!1,`Expected ${z(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function $a(r){return fr(r)||an(r)}function $c(r){return Pa(r)&&!an(r)}function H2(r){if(!$c(r))throw new Error(`Expected ${z(r)} to be a GraphQL nullable type.`);return r}function yD(r){return Wt(r)||gn(r)||un(r)||Hn(r)||Xn(r)||Zn(r)}function X2(r){if(r){let n=r;for(;$a(n);)n=n.ofType;return n}}function Mc(r){return typeof r=="function"?r():r}function Gc(r){return typeof r=="function"?r():r}class Nt{constructor(n){var t,s,o,u;const l=(t=n.parseValue)!==null&&t!==void 0?t:Wf;this.name=rt(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(s=n.serialize)!==null&&s!==void 0?s:Wf,this.parseValue=l,this.parseLiteral=(o=n.parseLiteral)!==null&&o!==void 0?o:(c,d)=>l(va(c,d)),this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(u=n.extensionASTNodes)!==null&&u!==void 0?u:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||fe(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${z(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||fe(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||fe(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class ct{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>qc(n),this._interfaces=()=>Vc(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||fe(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${z(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:jc(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Vc(r){var n;const t=Mc((n=r.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||fe(!1,`${r.name} interfaces must be an Array or a function which returns an Array.`),t}function qc(r){const n=Gc(r.fields);return wr(n)||fe(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),It(n,(t,s)=>{var o;wr(t)||fe(!1,`${r.name}.${s} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||fe(!1,`${r.name}.${s} field resolver must be a function if provided, but got: ${z(t.resolve)}.`);const u=(o=t.args)!==null&&o!==void 0?o:{};return wr(u)||fe(!1,`${r.name}.${s} args must be an object with argument names as keys.`),{name:rt(s),description:t.description,type:t.type,args:zc(u),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Bn(t.extensions),astNode:t.astNode}})}function zc(r){return Object.entries(r).map(([n,t])=>({name:rt(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Bn(t.extensions),astNode:t.astNode}))}function wr(r){return Ct(r)&&!Array.isArray(r)}function jc(r){return It(r,n=>({description:n.description,type:n.type,args:Yc(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function Yc(r){return sr(r,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function Z2(r){return an(r.type)&&r.defaultValue===void 0}class As{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=qc.bind(void 0,n),this._interfaces=Vc.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||fe(!1,`${this.name} must provide "resolveType" as a function, but got: ${z(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:jc(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Ts{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=K2.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||fe(!1,`${this.name} must provide "resolveType" as a function, but got: ${z(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function K2(r){const n=Mc(r.types);return Array.isArray(n)||fe(!1,`Must provide Array of types or a function which returns such an array for Union ${r.name}.`),n}class Nr{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=e3(this.name,n.values),this._valueLookup=new Map(this._values.map(s=>[s.value,s])),this._nameLookup=Cr(this._values,s=>s.name)}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return this._values}getValue(n){return this._nameLookup[n]}serialize(n){const t=this._valueLookup.get(n);if(t===void 0)throw new q(`Enum "${this.name}" cannot represent value: ${z(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const s=z(n);throw new q(`Enum "${this.name}" cannot represent non-string value: ${s}.`+hs(this,s))}const t=this.getValue(n);if(t==null)throw new q(`Value "${n}" does not exist in "${this.name}" enum.`+hs(this,n));return t.value}parseLiteral(n,t){if(n.kind!==T.ENUM){const o=ft(n);throw new q(`Enum "${this.name}" cannot represent non-enum value: ${o}.`+hs(this,o),{nodes:n})}const s=this.getValue(n.value);if(s==null){const o=ft(n);throw new q(`Value "${o}" does not exist in "${this.name}" enum.`+hs(this,o),{nodes:n})}return s.value}toConfig(){const n=sr(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function hs(r,n){const t=r.getValues().map(o=>o.name),s=ks(n,t);return xs("the enum value",s)}function e3(r,n){return wr(n)||fe(!1,`${r} values must be an object with value names as keys.`),Object.entries(n).map(([t,s])=>(wr(s)||fe(!1,`${r}.${t} must refer to an object with a "value" key representing an internal value but got: ${z(s)}.`),{name:Y2(t),description:s.description,value:s.value!==void 0?s.value:t,deprecationReason:s.deprecationReason,extensions:Bn(s.extensions),astNode:s.astNode}))}class Is{constructor(n){var t;this.name=rt(n.name),this.description=n.description,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=n3.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=It(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function n3(r){const n=Gc(r.fields);return wr(n)||fe(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),It(n,(t,s)=>(!("resolve"in t)||fe(!1,`${r.name}.${s} field has a resolve property, but Input Types cannot define resolvers.`),{name:rt(s),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Bn(t.extensions),astNode:t.astNode}))}const la=2147483647,fa=-2147483648,t3=new Nt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(r){const n=hi(r);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new q(`Int cannot represent non-integer value: ${z(n)}`);if(t>la||t<fa)throw new q("Int cannot represent non 32-bit signed integer value: "+z(n));return t},parseValue(r){if(typeof r!="number"||!Number.isInteger(r))throw new q(`Int cannot represent non-integer value: ${z(r)}`);if(r>la||r<fa)throw new q(`Int cannot represent non 32-bit signed integer value: ${r}`);return r},parseLiteral(r){if(r.kind!==T.INT)throw new q(`Int cannot represent non-integer value: ${ft(r)}`,{nodes:r});const n=parseInt(r.value,10);if(n>la||n<fa)throw new q(`Int cannot represent non 32-bit signed integer value: ${r.value}`,{nodes:r});return n}}),r3=new Nt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(r){const n=hi(r);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new q(`Float cannot represent non numeric value: ${z(n)}`);return t},parseValue(r){if(typeof r!="number"||!Number.isFinite(r))throw new q(`Float cannot represent non numeric value: ${z(r)}`);return r},parseLiteral(r){if(r.kind!==T.FLOAT&&r.kind!==T.INT)throw new q(`Float cannot represent non numeric value: ${ft(r)}`,r);return parseFloat(r.value)}}),$e=new Nt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(r){const n=hi(r);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new q(`String cannot represent value: ${z(r)}`)},parseValue(r){if(typeof r!="string")throw new q(`String cannot represent a non string value: ${z(r)}`);return r},parseLiteral(r){if(r.kind!==T.STRING)throw new q(`String cannot represent a non string value: ${ft(r)}`,{nodes:r});return r.value}}),Un=new Nt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(r){const n=hi(r);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new q(`Boolean cannot represent a non boolean value: ${z(n)}`)},parseValue(r){if(typeof r!="boolean")throw new q(`Boolean cannot represent a non boolean value: ${z(r)}`);return r},parseLiteral(r){if(r.kind!==T.BOOLEAN)throw new q(`Boolean cannot represent a non boolean value: ${ft(r)}`,{nodes:r});return r.value}}),Wc=new Nt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(r){const n=hi(r);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new q(`ID cannot represent value: ${z(r)}`)},parseValue(r){if(typeof r=="string")return r;if(typeof r=="number"&&Number.isInteger(r))return r.toString();throw new q(`ID cannot represent value: ${z(r)}`)},parseLiteral(r){if(r.kind!==T.STRING&&r.kind!==T.INT)throw new q("ID cannot represent a non-string and non-integer value: "+ft(r),{nodes:r});return r.value}}),Os=Object.freeze([$e,t3,r3,Un,Wc]);function i3(r){return Os.some(({name:n})=>r.name===n)}function hi(r){if(Ct(r)){if(typeof r.valueOf=="function"){const n=r.valueOf();if(!Ct(n))return n}if(typeof r.toJSON=="function")return r.toJSON()}return r}function s3(r){return pt(r,Yt)}class Yt{constructor(n){var t,s;this.name=rt(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Bn(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||fe(!1,`@${n.name} locations must be an Array.`);const o=(s=n.args)!==null&&s!==void 0?s:{};Ct(o)&&!Array.isArray(o)||fe(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=zc(o)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:Yc(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const o3=new Yt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[j.FIELD,j.FRAGMENT_SPREAD,j.INLINE_FRAGMENT],args:{if:{type:new se(Un),description:"Included when true."}}}),a3=new Yt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[j.FIELD,j.FRAGMENT_SPREAD,j.INLINE_FRAGMENT],args:{if:{type:new se(Un),description:"Skipped when true."}}}),u3="No longer supported",Qc=new Yt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[j.FIELD_DEFINITION,j.ARGUMENT_DEFINITION,j.INPUT_FIELD_DEFINITION,j.ENUM_VALUE],args:{reason:{type:$e,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:u3}}}),Jc=new Yt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[j.SCALAR],args:{url:{type:new se($e),description:"The URL that specifies the behavior of this scalar."}}}),kr=Object.freeze([o3,a3,Qc,Jc]);function l3(r){return typeof r=="object"&&typeof(r==null?void 0:r[Symbol.iterator])=="function"}function ii(r,n){if(an(n)){const t=ii(r,n.ofType);return(t==null?void 0:t.kind)===T.NULL?null:t}if(r===null)return{kind:T.NULL};if(r===void 0)return null;if(fr(n)){const t=n.ofType;if(l3(r)){const s=[];for(const o of r){const u=ii(o,t);u!=null&&s.push(u)}return{kind:T.LIST,values:s}}return ii(r,t)}if(Zn(n)){if(!Ct(r))return null;const t=[];for(const s of Object.values(n.getFields())){const o=ii(r[s.name],s.type);o&&t.push({kind:T.OBJECT_FIELD,name:{kind:T.NAME,value:s.name},value:o})}return{kind:T.OBJECT,fields:t}}if(Pc(n)){const t=n.serialize(r);if(t==null)return null;if(typeof t=="boolean")return{kind:T.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const s=String(t);return Hf.test(s)?{kind:T.INT,value:s}:{kind:T.FLOAT,value:s}}if(typeof t=="string")return Xn(n)?{kind:T.ENUM,value:t}:n===Wc&&Hf.test(t)?{kind:T.INT,value:t}:{kind:T.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${z(t)}.`)}Jn(!1,"Unexpected input type: "+z(n))}const Hf=/^-?(?:0|[1-9][0-9]*)$/,Ma=new ct({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:$e,resolve:r=>r.description},types:{description:"A list of all types supported by this server.",type:new se(new _n(new se(Qn))),resolve(r){return Object.values(r.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new se(Qn),resolve:r=>r.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Qn,resolve:r=>r.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Qn,resolve:r=>r.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new se(new _n(new se(Hc))),resolve:r=>r.getDirectives()}})}),Hc=new ct({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new se($e),resolve:r=>r.name},description:{type:$e,resolve:r=>r.description},isRepeatable:{type:new se(Un),resolve:r=>r.isRepeatable},locations:{type:new se(new _n(new se(Xc))),resolve:r=>r.locations},args:{type:new se(new _n(new se(Ls))),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(r,{includeDeprecated:n}){return n?r.args:r.args.filter(t=>t.deprecationReason==null)}}})}),Xc=new Nr({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:j.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:j.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:j.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:j.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:j.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:j.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:j.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:j.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:j.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:j.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:j.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:j.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:j.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:j.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:j.UNION,description:"Location adjacent to a union definition."},ENUM:{value:j.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:j.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:j.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:j.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Qn=new ct({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new se(ep),resolve(r){if(Wt(r))return Ee.SCALAR;if(gn(r))return Ee.OBJECT;if(un(r))return Ee.INTERFACE;if(Hn(r))return Ee.UNION;if(Xn(r))return Ee.ENUM;if(Zn(r))return Ee.INPUT_OBJECT;if(fr(r))return Ee.LIST;if(an(r))return Ee.NON_NULL;Jn(!1,`Unexpected type: "${z(r)}".`)}},name:{type:$e,resolve:r=>"name"in r?r.name:void 0},description:{type:$e,resolve:r=>"description"in r?r.description:void 0},specifiedByURL:{type:$e,resolve:r=>"specifiedByURL"in r?r.specifiedByURL:void 0},fields:{type:new _n(new se(Zc)),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(gn(r)||un(r)){const t=Object.values(r.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},interfaces:{type:new _n(new se(Qn)),resolve(r){if(gn(r)||un(r))return r.getInterfaces()}},possibleTypes:{type:new _n(new se(Qn)),resolve(r,n,t,{schema:s}){if(J2(r))return s.getPossibleTypes(r)}},enumValues:{type:new _n(new se(Kc)),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(Xn(r)){const t=r.getValues();return n?t:t.filter(s=>s.deprecationReason==null)}}},inputFields:{type:new _n(new se(Ls)),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(Zn(r)){const t=Object.values(r.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},ofType:{type:Qn,resolve:r=>"ofType"in r?r.ofType:void 0}})}),Zc=new ct({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new se($e),resolve:r=>r.name},description:{type:$e,resolve:r=>r.description},args:{type:new se(new _n(new se(Ls))),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(r,{includeDeprecated:n}){return n?r.args:r.args.filter(t=>t.deprecationReason==null)}},type:{type:new se(Qn),resolve:r=>r.type},isDeprecated:{type:new se(Un),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:$e,resolve:r=>r.deprecationReason}})}),Ls=new ct({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new se($e),resolve:r=>r.name},description:{type:$e,resolve:r=>r.description},type:{type:new se(Qn),resolve:r=>r.type},defaultValue:{type:$e,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(r){const{type:n,defaultValue:t}=r,s=ii(t,n);return s?ft(s):null}},isDeprecated:{type:new se(Un),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:$e,resolve:r=>r.deprecationReason}})}),Kc=new ct({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new se($e),resolve:r=>r.name},description:{type:$e,resolve:r=>r.description},isDeprecated:{type:new se(Un),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:$e,resolve:r=>r.deprecationReason}})});var Ee;(function(r){r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.INPUT_OBJECT="INPUT_OBJECT",r.LIST="LIST",r.NON_NULL="NON_NULL"})(Ee||(Ee={}));const ep=new Nr({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:Ee.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:Ee.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:Ee.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:Ee.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:Ee.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:Ee.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:Ee.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:Ee.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new se(Ma);new se($e);new se($e);const Rs=Object.freeze([Ma,Hc,Xc,Qn,Zc,Ls,Kc,ep]);function f3(r){return Rs.some(({name:n})=>r.name===n)}class np{constructor(n){var t,s;this.__validationErrors=n.assumeValid===!0?[]:void 0,Ct(n)||fe(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||fe(!1,`"types" must be Array if provided but got: ${z(n.types)}.`),!n.directives||Array.isArray(n.directives)||fe(!1,`"directives" must be Array if provided but got: ${z(n.directives)}.`),this.description=n.description,this.extensions=Bn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(s=n.directives)!==null&&s!==void 0?s:kr;const o=new Set(n.types);if(n.types!=null)for(const u of n.types)o.delete(u),Yn(u,o);this._queryType!=null&&Yn(this._queryType,o),this._mutationType!=null&&Yn(this._mutationType,o),this._subscriptionType!=null&&Yn(this._subscriptionType,o);for(const u of this._directives)if(s3(u))for(const l of u.args)Yn(l.type,o);Yn(Ma,o),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const u of o){if(u==null)continue;const l=u.name;if(l||fe(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[l]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${l}".`);if(this._typeMap[l]=u,un(u)){for(const c of u.getInterfaces())if(un(c)){let d=this._implementationsMap[c.name];d===void 0&&(d=this._implementationsMap[c.name]={objects:[],interfaces:[]}),d.interfaces.push(u)}}else if(gn(u)){for(const c of u.getInterfaces())if(un(c)){let d=this._implementationsMap[c.name];d===void 0&&(d=this._implementationsMap[c.name]={objects:[],interfaces:[]}),d.objects.push(u)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case Rn.QUERY:return this.getQueryType();case Rn.MUTATION:return this.getMutationType();case Rn.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return Hn(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t??{objects:[],interfaces:[]}}isSubType(n,t){let s=this._subTypeMap[n.name];if(s===void 0){if(s=Object.create(null),Hn(n))for(const o of n.getTypes())s[o.name]=!0;else{const o=this.getImplementations(n);for(const u of o.objects)s[u.name]=!0;for(const u of o.interfaces)s[u.name]=!0}this._subTypeMap[n.name]=s}return s[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Yn(r,n){const t=X2(r);if(!n.has(t)){if(n.add(t),Hn(t))for(const s of t.getTypes())Yn(s,n);else if(gn(t)||un(t)){for(const s of t.getInterfaces())Yn(s,n);for(const s of Object.values(t.getFields())){Yn(s.type,n);for(const o of s.args)Yn(o.type,n)}}else if(Zn(t))for(const s of Object.values(t.getFields()))Yn(s.type,n)}return n}function c3(r){return r.kind===T.SCHEMA_DEFINITION||_i(r)||r.kind===T.DIRECTIVE_DEFINITION}function _i(r){return r.kind===T.SCALAR_TYPE_DEFINITION||r.kind===T.OBJECT_TYPE_DEFINITION||r.kind===T.INTERFACE_TYPE_DEFINITION||r.kind===T.UNION_TYPE_DEFINITION||r.kind===T.ENUM_TYPE_DEFINITION||r.kind===T.INPUT_OBJECT_TYPE_DEFINITION}function p3(r){return r.kind===T.SCHEMA_EXTENSION||Ga(r)}function Ga(r){return r.kind===T.SCALAR_TYPE_EXTENSION||r.kind===T.OBJECT_TYPE_EXTENSION||r.kind===T.INTERFACE_TYPE_EXTENSION||r.kind===T.UNION_TYPE_EXTENSION||r.kind===T.ENUM_TYPE_EXTENSION||r.kind===T.INPUT_OBJECT_TYPE_EXTENSION}function d3(r){const n=Object.create(null),t=r.getSchema(),s=t?t.getDirectives():kr;for(const l of s)n[l.name]=l.args.map(c=>c.name);const o=r.getDocument().definitions;for(const l of o)if(l.kind===T.DIRECTIVE_DEFINITION){var u;const c=(u=l.arguments)!==null&&u!==void 0?u:[];n[l.name.value]=c.map(d=>d.name.value)}return{Directive(l){const c=l.name.value,d=n[c];if(l.arguments&&d)for(const m of l.arguments){const F=m.name.value;if(!d.includes(F)){const E=ks(F,d);r.reportError(new q(`Unknown argument "${F}" on directive "@${c}".`+xs(E),{nodes:m}))}}return!1}}}function h3(r){const n=Object.create(null),t=r.getSchema(),s=t?t.getDirectives():kr;for(const u of s)n[u.name]=u.locations;const o=r.getDocument().definitions;for(const u of o)u.kind===T.DIRECTIVE_DEFINITION&&(n[u.name.value]=u.locations.map(l=>l.value));return{Directive(u,l,c,d,m){const F=u.name.value,E=n[F];if(!E){r.reportError(new q(`Unknown directive "@${F}".`,{nodes:u}));return}const w=_3(m);w&&!E.includes(w)&&r.reportError(new q(`Directive "@${F}" may not be used on ${w}.`,{nodes:u}))}}}function _3(r){const n=r[r.length-1];switch("kind"in n||Jn(!1),n.kind){case T.OPERATION_DEFINITION:return g3(n.operation);case T.FIELD:return j.FIELD;case T.FRAGMENT_SPREAD:return j.FRAGMENT_SPREAD;case T.INLINE_FRAGMENT:return j.INLINE_FRAGMENT;case T.FRAGMENT_DEFINITION:return j.FRAGMENT_DEFINITION;case T.VARIABLE_DEFINITION:return j.VARIABLE_DEFINITION;case T.SCHEMA_DEFINITION:case T.SCHEMA_EXTENSION:return j.SCHEMA;case T.SCALAR_TYPE_DEFINITION:case T.SCALAR_TYPE_EXTENSION:return j.SCALAR;case T.OBJECT_TYPE_DEFINITION:case T.OBJECT_TYPE_EXTENSION:return j.OBJECT;case T.FIELD_DEFINITION:return j.FIELD_DEFINITION;case T.INTERFACE_TYPE_DEFINITION:case T.INTERFACE_TYPE_EXTENSION:return j.INTERFACE;case T.UNION_TYPE_DEFINITION:case T.UNION_TYPE_EXTENSION:return j.UNION;case T.ENUM_TYPE_DEFINITION:case T.ENUM_TYPE_EXTENSION:return j.ENUM;case T.ENUM_VALUE_DEFINITION:return j.ENUM_VALUE;case T.INPUT_OBJECT_TYPE_DEFINITION:case T.INPUT_OBJECT_TYPE_EXTENSION:return j.INPUT_OBJECT;case T.INPUT_VALUE_DEFINITION:{const t=r[r.length-3];return"kind"in t||Jn(!1),t.kind===T.INPUT_OBJECT_TYPE_DEFINITION?j.INPUT_FIELD_DEFINITION:j.ARGUMENT_DEFINITION}default:Jn(!1,"Unexpected kind: "+z(n.kind))}}function g3(r){switch(r){case Rn.QUERY:return j.QUERY;case Rn.MUTATION:return j.MUTATION;case Rn.SUBSCRIPTION:return j.SUBSCRIPTION}}function m3(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);for(const u of r.getDocument().definitions)_i(u)&&(s[u.name.value]=!0);const o=[...Object.keys(t),...Object.keys(s)];return{NamedType(u,l,c,d,m){const F=u.name.value;if(!t[F]&&!s[F]){var E;const w=(E=m[2])!==null&&E!==void 0?E:c,x=w!=null&&F3(w);if(x&&Xf.includes(F))return;const L=ks(F,x?Xf.concat(o):o);r.reportError(new q(`Unknown type "${F}".`+xs(L),{nodes:u}))}}}}const Xf=[...Os,...Rs].map(r=>r.name);function F3(r){return"kind"in r&&(c3(r)||p3(r))}function D3(r){var n,t,s;const o=r.getSchema(),u=(n=(t=(s=o==null?void 0:o.astNode)!==null&&s!==void 0?s:o==null?void 0:o.getQueryType())!==null&&t!==void 0?t:o==null?void 0:o.getMutationType())!==null&&n!==void 0?n:o==null?void 0:o.getSubscriptionType();let l=0;return{SchemaDefinition(c){if(u){r.reportError(new q("Cannot define a new schema within a schema extension.",{nodes:c}));return}l>0&&r.reportError(new q("Must provide only one schema definition.",{nodes:c})),++l}}}function v3(r){const n=r.getSchema(),t=Object.create(null);for(const o of r.getDocument().definitions)_i(o)&&(t[o.name.value]=o);return{ScalarTypeExtension:s,ObjectTypeExtension:s,InterfaceTypeExtension:s,UnionTypeExtension:s,EnumTypeExtension:s,InputObjectTypeExtension:s};function s(o){const u=o.name.value,l=t[u],c=n==null?void 0:n.getType(u);let d;if(l?d=E3[l.kind]:c&&(d=A3(c)),d){if(d!==o.kind){const m=T3(o.kind);r.reportError(new q(`Cannot extend non-${m} type "${u}".`,{nodes:l?[l,o]:o}))}}else{const m=Object.keys({...t,...n==null?void 0:n.getTypeMap()}),F=ks(u,m);r.reportError(new q(`Cannot extend type "${u}" because it is not defined.`+xs(F),{nodes:o.name}))}}}const E3={[T.SCALAR_TYPE_DEFINITION]:T.SCALAR_TYPE_EXTENSION,[T.OBJECT_TYPE_DEFINITION]:T.OBJECT_TYPE_EXTENSION,[T.INTERFACE_TYPE_DEFINITION]:T.INTERFACE_TYPE_EXTENSION,[T.UNION_TYPE_DEFINITION]:T.UNION_TYPE_EXTENSION,[T.ENUM_TYPE_DEFINITION]:T.ENUM_TYPE_EXTENSION,[T.INPUT_OBJECT_TYPE_DEFINITION]:T.INPUT_OBJECT_TYPE_EXTENSION};function A3(r){if(Wt(r))return T.SCALAR_TYPE_EXTENSION;if(gn(r))return T.OBJECT_TYPE_EXTENSION;if(un(r))return T.INTERFACE_TYPE_EXTENSION;if(Hn(r))return T.UNION_TYPE_EXTENSION;if(Xn(r))return T.ENUM_TYPE_EXTENSION;if(Zn(r))return T.INPUT_OBJECT_TYPE_EXTENSION;Jn(!1,"Unexpected type: "+z(r))}function T3(r){switch(r){case T.SCALAR_TYPE_EXTENSION:return"scalar";case T.OBJECT_TYPE_EXTENSION:return"object";case T.INTERFACE_TYPE_EXTENSION:return"interface";case T.UNION_TYPE_EXTENSION:return"union";case T.ENUM_TYPE_EXTENSION:return"enum";case T.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Jn(!1,"Unexpected kind: "+z(r))}}function I3(r){var n;const t=Object.create(null),s=r.getSchema(),o=(n=s==null?void 0:s.getDirectives())!==null&&n!==void 0?n:kr;for(const c of o)t[c.name]=Cr(c.args.filter(Z2),d=>d.name);const u=r.getDocument().definitions;for(const c of u)if(c.kind===T.DIRECTIVE_DEFINITION){var l;const d=(l=c.arguments)!==null&&l!==void 0?l:[];t[c.name.value]=Cr(d.filter(y3),m=>m.name.value)}return{Directive:{leave(c){const d=c.name.value,m=t[d];if(m){var F;const E=(F=c.arguments)!==null&&F!==void 0?F:[],w=new Set(E.map(x=>x.name.value));for(const[x,L]of Object.entries(m))if(!w.has(x)){const R=Pa(L.type)?z(L.type):ft(L.type);r.reportError(new q(`Directive "@${d}" argument "${x}" of type "${R}" is required, but it was not provided.`,{nodes:c}))}}}}}}function y3(r){return r.type.kind===T.NON_NULL_TYPE&&r.defaultValue==null}function Vt(r,n,t){if(r){if(r.kind===T.VARIABLE){const s=r.name.value;if(t==null||t[s]===void 0)return;const o=t[s];return o===null&&an(n)?void 0:o}if(an(n))return r.kind===T.NULL?void 0:Vt(r,n.ofType,t);if(r.kind===T.NULL)return null;if(fr(n)){const s=n.ofType;if(r.kind===T.LIST){const u=[];for(const l of r.values)if(Zf(l,t)){if(an(s))return;u.push(null)}else{const c=Vt(l,s,t);if(c===void 0)return;u.push(c)}return u}const o=Vt(r,s,t);return o===void 0?void 0:[o]}if(Zn(n)){if(r.kind!==T.OBJECT)return;const s=Object.create(null),o=Cr(r.fields,u=>u.name.value);for(const u of Object.values(n.getFields())){const l=o[u.name];if(!l||Zf(l.value,t)){if(u.defaultValue!==void 0)s[u.name]=u.defaultValue;else if(an(u.type))return;continue}const c=Vt(l.value,u.type,t);if(c===void 0)return;s[u.name]=c}return s}if(Pc(n)){let s;try{s=n.parseLiteral(r,t)}catch{return}return s===void 0?void 0:s}Jn(!1,"Unexpected input type: "+z(n))}}function Zf(r,n){return r.kind===T.VARIABLE&&(n==null||n[r.name.value]===void 0)}function b3(r,n,t){var s;const o={},u=(s=n.arguments)!==null&&s!==void 0?s:[],l=Cr(u,c=>c.name.value);for(const c of r.args){const d=c.name,m=c.type,F=l[d];if(!F){if(c.defaultValue!==void 0)o[d]=c.defaultValue;else if(an(m))throw new q(`Argument "${d}" of required type "${z(m)}" was not provided.`,{nodes:n});continue}const E=F.value;let w=E.kind===T.NULL;if(E.kind===T.VARIABLE){const L=E.name.value;if(t==null||!S3(t,L)){if(c.defaultValue!==void 0)o[d]=c.defaultValue;else if(an(m))throw new q(`Argument "${d}" of required type "${z(m)}" was provided the variable "$${L}" which was not provided a runtime value.`,{nodes:E});continue}w=t[L]==null}if(w&&an(m))throw new q(`Argument "${d}" of non-null type "${z(m)}" must not be null.`,{nodes:E});const x=Vt(E,m,t);if(x===void 0)throw new q(`Argument "${d}" has invalid value ${ft(E)}.`,{nodes:E});o[d]=x}return o}function tp(r,n,t){var s;const o=(s=n.directives)===null||s===void 0?void 0:s.find(u=>u.name.value===r.name);if(o)return b3(r,o,t)}function S3(r,n){return Object.prototype.hasOwnProperty.call(r,n)}function rp(r,n){const t=new Map;for(const s of r){const o=n(s),u=t.get(o);u===void 0?t.set(o,[s]):u.push(s)}return t}function w3(r){return{DirectiveDefinition(s){var o;const u=(o=s.arguments)!==null&&o!==void 0?o:[];return t(`@${s.name.value}`,u)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(s){var o;const u=s.name.value,l=(o=s.fields)!==null&&o!==void 0?o:[];for(const d of l){var c;const m=d.name.value,F=(c=d.arguments)!==null&&c!==void 0?c:[];t(`${u}.${m}`,F)}return!1}function t(s,o){const u=rp(o,l=>l.name.value);for(const[l,c]of u)c.length>1&&r.reportError(new q(`Argument "${s}(${l}:)" can only be defined once.`,{nodes:c.map(d=>d.name)}));return!1}}function C3(r){return{Field:n,Directive:n};function n(t){var s;const o=(s=t.arguments)!==null&&s!==void 0?s:[],u=rp(o,l=>l.name.value);for(const[l,c]of u)c.length>1&&r.reportError(new q(`There can be only one argument named "${l}".`,{nodes:c.map(d=>d.name)}))}}function N3(r){const n=Object.create(null),t=r.getSchema();return{DirectiveDefinition(s){const o=s.name.value;if(t!=null&&t.getDirective(o)){r.reportError(new q(`Directive "@${o}" already exists in the schema. It cannot be redefined.`,{nodes:s.name}));return}return n[o]?r.reportError(new q(`There can be only one directive named "@${o}".`,{nodes:[n[o],s.name]})):n[o]=s.name,!1}}}function x3(r){const n=Object.create(null),t=r.getSchema(),s=t?t.getDirectives():kr;for(const c of s)n[c.name]=!c.isRepeatable;const o=r.getDocument().definitions;for(const c of o)c.kind===T.DIRECTIVE_DEFINITION&&(n[c.name.value]=!c.repeatable);const u=Object.create(null),l=Object.create(null);return{enter(c){if(!("directives"in c)||!c.directives)return;let d;if(c.kind===T.SCHEMA_DEFINITION||c.kind===T.SCHEMA_EXTENSION)d=u;else if(_i(c)||Ga(c)){const m=c.name.value;d=l[m],d===void 0&&(l[m]=d=Object.create(null))}else d=Object.create(null);for(const m of c.directives){const F=m.name.value;n[F]&&(d[F]?r.reportError(new q(`The directive "@${F}" can only be used once at this location.`,{nodes:[d[F],m]})):d[F]=m)}}}}function k3(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{EnumTypeDefinition:o,EnumTypeExtension:o};function o(u){var l;const c=u.name.value;s[c]||(s[c]=Object.create(null));const d=(l=u.values)!==null&&l!==void 0?l:[],m=s[c];for(const F of d){const E=F.name.value,w=t[c];Xn(w)&&w.getValue(E)?r.reportError(new q(`Enum value "${c}.${E}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:F.name})):m[E]?r.reportError(new q(`Enum value "${c}.${E}" can only be defined once.`,{nodes:[m[E],F.name]})):m[E]=F.name}return!1}}function O3(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{InputObjectTypeDefinition:o,InputObjectTypeExtension:o,InterfaceTypeDefinition:o,InterfaceTypeExtension:o,ObjectTypeDefinition:o,ObjectTypeExtension:o};function o(u){var l;const c=u.name.value;s[c]||(s[c]=Object.create(null));const d=(l=u.fields)!==null&&l!==void 0?l:[],m=s[c];for(const F of d){const E=F.name.value;L3(t[c],E)?r.reportError(new q(`Field "${c}.${E}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:F.name})):m[E]?r.reportError(new q(`Field "${c}.${E}" can only be defined once.`,{nodes:[m[E],F.name]})):m[E]=F.name}return!1}}function L3(r,n){return gn(r)||un(r)||Zn(r)?r.getFields()[n]!=null:!1}function R3(r){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const s=n.pop();s||Jn(!1),t=s}},ObjectField(s){const o=s.name.value;t[o]?r.reportError(new q(`There can be only one input field named "${o}".`,{nodes:[t[o],s.name]})):t[o]=s.name}}}function U3(r){const n=r.getSchema(),t=Object.create(null),s=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:o,SchemaExtension:o};function o(u){var l;const c=(l=u.operationTypes)!==null&&l!==void 0?l:[];for(const d of c){const m=d.operation,F=t[m];s[m]?r.reportError(new q(`Type for ${m} already defined in the schema. It cannot be redefined.`,{nodes:d})):F?r.reportError(new q(`There can be only one ${m} type in schema.`,{nodes:[F,d]})):t[m]=d}return!1}}function B3(r){const n=Object.create(null),t=r.getSchema();return{ScalarTypeDefinition:s,ObjectTypeDefinition:s,InterfaceTypeDefinition:s,UnionTypeDefinition:s,EnumTypeDefinition:s,InputObjectTypeDefinition:s};function s(o){const u=o.name.value;if(t!=null&&t.getType(u)){r.reportError(new q(`Type "${u}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:o.name}));return}return n[u]?r.reportError(new q(`There can be only one type named "${u}".`,{nodes:[n[u],o.name]})):n[u]=o.name,!1}}const P3=Object.freeze([D3,U3,B3,k3,O3,w3,N3,m3,h3,x3,v3,d3,C3,R3,I3]);class $3{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const s of this.getDocument().definitions)s.kind===T.FRAGMENT_DEFINITION&&(t[s.name.value]=s);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const s=[n];let o;for(;o=s.pop();)for(const u of o.selections)u.kind===T.FRAGMENT_SPREAD?t.push(u):u.selectionSet&&s.push(u.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const s=Object.create(null),o=[n.selectionSet];let u;for(;u=o.pop();)for(const l of this.getFragmentSpreads(u)){const c=l.name.value;if(s[c]!==!0){s[c]=!0;const d=this.getFragment(c);d&&(t.push(d),o.push(d.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class M3 extends $3{constructor(n,t,s){super(n,s),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function G3(r,n,t=P3){const s=[],o=new M3(r,n,l=>{s.push(l)}),u=t.map(l=>l(o));return Lc(r,q2(u)),s}function V3(r){const n=G3(r);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function q3(r,n){Ct(r)&&Ct(r.__schema)||fe(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${z(r)}.`);const t=r.__schema,s=sr(t.types,k=>k.name,k=>w(k));for(const k of[...Os,...Rs])s[k.name]&&(s[k.name]=k);const o=t.queryType?F(t.queryType):null,u=t.mutationType?F(t.mutationType):null,l=t.subscriptionType?F(t.subscriptionType):null,c=t.directives?t.directives.map(dt):[];return new np({description:t.description,query:o,mutation:u,subscription:l,types:Object.values(s),directives:c,assumeValid:n==null?void 0:n.assumeValid});function d(k){if(k.kind===Ee.LIST){const X=k.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");return new _n(d(X))}if(k.kind===Ee.NON_NULL){const X=k.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");const tn=d(X);return new se(H2(tn))}return m(k)}function m(k){const X=k.name;if(!X)throw new Error(`Unknown type reference: ${z(k)}.`);const tn=s[X];if(!tn)throw new Error(`Invalid or incomplete schema, unknown type: ${X}. Ensure that a full introspection query is used in order to build a client schema.`);return tn}function F(k){return W2(m(k))}function E(k){return Q2(m(k))}function w(k){if(k!=null&&k.name!=null&&k.kind!=null)switch(k.kind){case Ee.SCALAR:return x(k);case Ee.OBJECT:return R(k);case Ee.INTERFACE:return J(k);case Ee.UNION:return pe(k);case Ee.ENUM:return Me(k);case Ee.INPUT_OBJECT:return Ae(k)}const X=z(k);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${X}.`)}function x(k){return new Nt({name:k.name,description:k.description,specifiedByURL:k.specifiedByURL})}function L(k){if(k.interfaces===null&&k.kind===Ee.INTERFACE)return[];if(!k.interfaces){const X=z(k);throw new Error(`Introspection result missing interfaces: ${X}.`)}return k.interfaces.map(E)}function R(k){return new ct({name:k.name,description:k.description,interfaces:()=>L(k),fields:()=>we(k)})}function J(k){return new As({name:k.name,description:k.description,interfaces:()=>L(k),fields:()=>we(k)})}function pe(k){if(!k.possibleTypes){const X=z(k);throw new Error(`Introspection result missing possibleTypes: ${X}.`)}return new Ts({name:k.name,description:k.description,types:()=>k.possibleTypes.map(F)})}function Me(k){if(!k.enumValues){const X=z(k);throw new Error(`Introspection result missing enumValues: ${X}.`)}return new Nr({name:k.name,description:k.description,values:sr(k.enumValues,X=>X.name,X=>({description:X.description,deprecationReason:X.deprecationReason}))})}function Ae(k){if(!k.inputFields){const X=z(k);throw new Error(`Introspection result missing inputFields: ${X}.`)}return new Is({name:k.name,description:k.description,fields:()=>nn(k.inputFields)})}function we(k){if(!k.fields)throw new Error(`Introspection result missing fields: ${z(k)}.`);return sr(k.fields,X=>X.name,ke)}function ke(k){const X=d(k.type);if(!Bc(X)){const tn=z(X);throw new Error(`Introspection must provide output type for fields, but received: ${tn}.`)}if(!k.args){const tn=z(k);throw new Error(`Introspection result missing field args: ${tn}.`)}return{description:k.description,deprecationReason:k.deprecationReason,type:X,args:nn(k.args)}}function nn(k){return sr(k,X=>X.name,He)}function He(k){const X=d(k.type);if(!Uc(X)){const xt=z(X);throw new Error(`Introspection must provide input type for arguments, but received: ${xt}.`)}const tn=k.defaultValue!=null?Vt(L2(k.defaultValue),X):void 0;return{description:k.description,type:X,defaultValue:tn,deprecationReason:k.deprecationReason}}function dt(k){if(!k.args){const X=z(k);throw new Error(`Introspection result missing directive args: ${X}.`)}if(!k.locations){const X=z(k);throw new Error(`Introspection result missing directive locations: ${X}.`)}return new Yt({name:k.name,description:k.description,isRepeatable:k.isRepeatable,locations:k.locations.slice(),args:nn(k.args)})}}function z3(r,n,t){var s,o,u,l;const c=[],d=Object.create(null),m=[];let F;const E=[];for(const b of n.definitions)if(b.kind===T.SCHEMA_DEFINITION)F=b;else if(b.kind===T.SCHEMA_EXTENSION)E.push(b);else if(_i(b))c.push(b);else if(Ga(b)){const M=b.name.value,B=d[M];d[M]=B?B.concat([b]):[b]}else b.kind===T.DIRECTIVE_DEFINITION&&m.push(b);if(Object.keys(d).length===0&&c.length===0&&m.length===0&&E.length===0&&F==null)return r;const w=Object.create(null);for(const b of r.types)w[b.name]=Me(b);for(const b of c){var x;const M=b.name.value;w[M]=(x=Kf[M])!==null&&x!==void 0?x:yn(b)}const L={query:r.query&&J(r.query),mutation:r.mutation&&J(r.mutation),subscription:r.subscription&&J(r.subscription),...F&&tn([F]),...tn(E)};return{description:(s=F)===null||s===void 0||(o=s.description)===null||o===void 0?void 0:o.value,...L,types:Object.values(w),directives:[...r.directives.map(pe),...m.map(gi)],extensions:Object.create(null),astNode:(u=F)!==null&&u!==void 0?u:r.astNode,extensionASTNodes:r.extensionASTNodes.concat(E),assumeValid:(l=t==null?void 0:t.assumeValid)!==null&&l!==void 0?l:!1};function R(b){return fr(b)?new _n(R(b.ofType)):an(b)?new se(R(b.ofType)):J(b)}function J(b){return w[b.name]}function pe(b){const M=b.toConfig();return new Yt({...M,args:It(M.args,X)})}function Me(b){if(f3(b)||i3(b))return b;if(Wt(b))return ke(b);if(gn(b))return nn(b);if(un(b))return He(b);if(Hn(b))return dt(b);if(Xn(b))return we(b);if(Zn(b))return Ae(b);Jn(!1,"Unexpected type: "+z(b))}function Ae(b){var M;const B=b.toConfig(),P=(M=d[B.name])!==null&&M!==void 0?M:[];return new Is({...B,fields:()=>({...It(B.fields,de=>({...de,type:R(de.type)})),...it(P)}),extensionASTNodes:B.extensionASTNodes.concat(P)})}function we(b){var M;const B=b.toConfig(),P=(M=d[b.name])!==null&&M!==void 0?M:[];return new Nr({...B,values:{...B.values,...Pn(P)},extensionASTNodes:B.extensionASTNodes.concat(P)})}function ke(b){var M;const B=b.toConfig(),P=(M=d[B.name])!==null&&M!==void 0?M:[];let de=B.specifiedByURL;for(const he of P){var Ue;de=(Ue=ec(he))!==null&&Ue!==void 0?Ue:de}return new Nt({...B,specifiedByURL:de,extensionASTNodes:B.extensionASTNodes.concat(P)})}function nn(b){var M;const B=b.toConfig(),P=(M=d[B.name])!==null&&M!==void 0?M:[];return new ct({...B,interfaces:()=>[...b.getInterfaces().map(J),...pr(P)],fields:()=>({...It(B.fields,k),...cr(P)}),extensionASTNodes:B.extensionASTNodes.concat(P)})}function He(b){var M;const B=b.toConfig(),P=(M=d[B.name])!==null&&M!==void 0?M:[];return new As({...B,interfaces:()=>[...b.getInterfaces().map(J),...pr(P)],fields:()=>({...It(B.fields,k),...cr(P)}),extensionASTNodes:B.extensionASTNodes.concat(P)})}function dt(b){var M;const B=b.toConfig(),P=(M=d[B.name])!==null&&M!==void 0?M:[];return new Ts({...B,types:()=>[...b.getTypes().map(J),...Jt(P)],extensionASTNodes:B.extensionASTNodes.concat(P)})}function k(b){return{...b,type:R(b.type),args:b.args&&It(b.args,X)}}function X(b){return{...b,type:R(b.type)}}function tn(b){const M={};for(const P of b){var B;const de=(B=P.operationTypes)!==null&&B!==void 0?B:[];for(const Ue of de)M[Ue.operation]=xt(Ue.type)}return M}function xt(b){var M;const B=b.name.value,P=(M=Kf[B])!==null&&M!==void 0?M:w[B];if(P===void 0)throw new Error(`Unknown type: "${B}".`);return P}function Qt(b){return b.kind===T.LIST_TYPE?new _n(Qt(b.type)):b.kind===T.NON_NULL_TYPE?new se(Qt(b.type)):xt(b)}function gi(b){var M;return new Yt({name:b.name.value,description:(M=b.description)===null||M===void 0?void 0:M.value,locations:b.locations.map(({value:B})=>B),isRepeatable:b.repeatable,args:mi(b.arguments),astNode:b})}function cr(b){const M=Object.create(null);for(const de of b){var B;const Ue=(B=de.fields)!==null&&B!==void 0?B:[];for(const he of Ue){var P;M[he.name.value]={type:Qt(he.type),description:(P=he.description)===null||P===void 0?void 0:P.value,args:mi(he.arguments),deprecationReason:_s(he),astNode:he}}}return M}function mi(b){const M=b??[],B=Object.create(null);for(const de of M){var P;const Ue=Qt(de.type);B[de.name.value]={type:Ue,description:(P=de.description)===null||P===void 0?void 0:P.value,defaultValue:Vt(de.defaultValue,Ue),deprecationReason:_s(de),astNode:de}}return B}function it(b){const M=Object.create(null);for(const de of b){var B;const Ue=(B=de.fields)!==null&&B!==void 0?B:[];for(const he of Ue){var P;const bn=Qt(he.type);M[he.name.value]={type:bn,description:(P=he.description)===null||P===void 0?void 0:P.value,defaultValue:Vt(he.defaultValue,bn),deprecationReason:_s(he),astNode:he}}}return M}function Pn(b){const M=Object.create(null);for(const de of b){var B;const Ue=(B=de.values)!==null&&B!==void 0?B:[];for(const he of Ue){var P;M[he.name.value]={description:(P=he.description)===null||P===void 0?void 0:P.value,deprecationReason:_s(he),astNode:he}}}return M}function pr(b){return b.flatMap(M=>{var B,P;return(B=(P=M.interfaces)===null||P===void 0?void 0:P.map(xt))!==null&&B!==void 0?B:[]})}function Jt(b){return b.flatMap(M=>{var B,P;return(B=(P=M.types)===null||P===void 0?void 0:P.map(xt))!==null&&B!==void 0?B:[]})}function yn(b){var M;const B=b.name.value,P=(M=d[B])!==null&&M!==void 0?M:[];switch(b.kind){case T.OBJECT_TYPE_DEFINITION:{var de;const Xe=[b,...P];return new ct({name:B,description:(de=b.description)===null||de===void 0?void 0:de.value,interfaces:()=>pr(Xe),fields:()=>cr(Xe),astNode:b,extensionASTNodes:P})}case T.INTERFACE_TYPE_DEFINITION:{var Ue;const Xe=[b,...P];return new As({name:B,description:(Ue=b.description)===null||Ue===void 0?void 0:Ue.value,interfaces:()=>pr(Xe),fields:()=>cr(Xe),astNode:b,extensionASTNodes:P})}case T.ENUM_TYPE_DEFINITION:{var he;const Xe=[b,...P];return new Nr({name:B,description:(he=b.description)===null||he===void 0?void 0:he.value,values:Pn(Xe),astNode:b,extensionASTNodes:P})}case T.UNION_TYPE_DEFINITION:{var bn;const Xe=[b,...P];return new Ts({name:B,description:(bn=b.description)===null||bn===void 0?void 0:bn.value,types:()=>Jt(Xe),astNode:b,extensionASTNodes:P})}case T.SCALAR_TYPE_DEFINITION:{var Or;return new Nt({name:B,description:(Or=b.description)===null||Or===void 0?void 0:Or.value,specifiedByURL:ec(b),astNode:b,extensionASTNodes:P})}case T.INPUT_OBJECT_TYPE_DEFINITION:{var kt;const Xe=[b,...P];return new Is({name:B,description:(kt=b.description)===null||kt===void 0?void 0:kt.value,fields:()=>it(Xe),astNode:b,extensionASTNodes:P})}}}}const Kf=Cr([...Os,...Rs],r=>r.name);function _s(r){const n=tp(Qc,r);return n==null?void 0:n.reason}function ec(r){const n=tp(Jc,r);return n==null?void 0:n.url}function j3(r,n){r!=null&&r.kind===T.DOCUMENT||fe(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&V3(r);const s=z3({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},r,n);if(s.astNode==null)for(const u of s.types)switch(u.name){case"Query":s.query=u;break;case"Mutation":s.mutation=u;break;case"Subscription":s.subscription=u;break}const o=[...s.directives,...kr.filter(u=>s.directives.every(l=>l.name!==u.name))];return new np({...s,directives:o})}function Y3(r,n){const t=O2(r,{noLocation:n==null?void 0:n.noLocation,allowLegacyFragmentVariables:n==null?void 0:n.allowLegacyFragmentVariables});return j3(t,{assumeValidSDL:n==null?void 0:n.assumeValidSDL,assumeValid:n==null?void 0:n.assumeValid})}const nc=`schema {
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
  """Filters for reason"""
  reason: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for artistGroup"""
  artistGroup: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for artist"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for user"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Field filters"""
input Filters_String_71bca2067a53e330142f79f78702144f {
  """Equals"""
  eq: String

  """Not equals"""
  neq: String

  """Less than"""
  lt: String

  """Less than or equals"""
  lte: String

  """Greater than"""
  gt: String

  """Greater than or equals"""
  gte: String

  """Is between from and to inclusive of from and to"""
  between: Between_String

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

"""Between \`from\` and \`to\`"""
input Between_String {
  """Low value of between"""
  from: String

  """High value of between"""
  to: String
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
  """Filters for reason"""
  reason: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for artistGroup"""
  artistGroup: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for artist"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for user"""
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
  """Filters for title"""
  title: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for header"""
  header: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for footer"""
  footer: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for user"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Field filters"""
input Filters_Int_71bca2067a53e330142f79f78702144f {
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

  """Contains the value.  Strings only."""
  contains: Int

  """Starts with the value.  Strings only."""
  startswith: Int

  """Ends with the value.  Strings only."""
  endswith: Int

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
  """Filters for reason"""
  reason: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for artistGroup"""
  artistGroup: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for artist"""
  artist: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for user"""
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
  """Filters for name"""
  name: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for fanUrl"""
  fanUrl: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for officialUrl"""
  officialUrl: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for icon"""
  icon: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for artistuserid"""
  artistuserid: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for createdAt"""
  createdAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for abbrev"""
  abbrev: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for isTradable"""
  isTradable: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for ref_shnartist"""
  ref_shnartist: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for nameFirstLetter"""
  nameFirstLetter: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for archive_key"""
  archive_key: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for top100"""
  top100: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for nameNormalized"""
  nameNormalized: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for notes"""
  notes: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for user"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27
}

"""Field filters"""
input Filters_DateTime_71bca2067a53e330142f79f78702144f {
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

  """Contains the value.  Strings only."""
  contains: DateTime

  """Starts with the value.  Strings only."""
  startswith: DateTime

  """Ends with the value.  Strings only."""
  endswith: DateTime

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
input Filters_Boolean_71bca2067a53e330142f79f78702144f {
  """Equals"""
  eq: Boolean

  """Not equals"""
  neq: Boolean

  """Less than"""
  lt: Boolean

  """Less than or equals"""
  lte: Boolean

  """Greater than"""
  gt: Boolean

  """Greater than or equals"""
  gte: Boolean

  """Is between from and to inclusive of from and to"""
  between: Between_Boolean

  """Contains the value.  Strings only."""
  contains: Boolean

  """Starts with the value.  Strings only."""
  startswith: Boolean

  """Ends with the value.  Strings only."""
  endswith: Boolean

  """In the array of values"""
  in: [Boolean]

  """Not in the array of values"""
  notin: [Boolean]

  """Is null"""
  isnull: Boolean

  """Sort by field. ASC or DESC."""
  sort: String
}

"""Between \`from\` and \`to\`"""
input Between_Boolean {
  """Low value of between"""
  from: Boolean

  """High value of between"""
  to: Boolean
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
  """Filters for ref_username"""
  ref_username: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for name"""
  name: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for shortname"""
  shortname: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for notes"""
  notes: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for createdAt"""
  createdAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for views"""
  views: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for lastviewed"""
  lastviewed: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for defaultlist"""
  defaultlist: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for private"""
  private: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for user"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for template"""
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
  """Filters for sourceInfo"""
  sourceInfo: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for checksums"""
  checksums: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for createdAt"""
  createdAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for media_count"""
  media_count: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for media_type"""
  media_type: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for noise_reduction"""
  noise_reduction: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for scms_status"""
  scms_status: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for show_rating"""
  show_rating: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for sound_rating"""
  sound_rating: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for microphones"""
  microphones: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for generation"""
  generation: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for note"""
  note: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for j_card_comment"""
  j_card_comment: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for tech_note"""
  tech_note: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for reference_number"""
  reference_number: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for traded_from"""
  traded_from: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for traded_from_email"""
  traded_from_email: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for tradesAllowed"""
  tradesAllowed: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for status"""
  status: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for attendance"""
  attendance: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for userid"""
  userid: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for tapername"""
  tapername: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for miclocation"""
  miclocation: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for performance"""
  performance: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for source"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for user"""
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
  """Filters for createdAt"""
  createdAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for enterUsername"""
  enterUsername: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for circdate"""
  circdate: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for shndiskcount"""
  shndiskcount: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for wavdiskcount"""
  wavdiskcount: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for textdoc"""
  textdoc: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for comments"""
  comments: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for archiveIdentifier"""
  archiveIdentifier: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for updatedAt"""
  updatedAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for mediaSize"""
  mediaSize: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for mediaSizeUncompressed"""
  mediaSizeUncompressed: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for dummyColumn"""
  dummyColumn: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for performance"""
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
  """Filters for description"""
  description: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for body"""
  body: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for createdAt"""
  createdAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for source"""
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
  """Filters for archiveIdentifier"""
  archiveIdentifier: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for server"""
  server: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for performanceDate"""
  performanceDate: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for addedAt"""
  addedAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for title"""
  title: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for description"""
  description: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for uploader"""
  uploader: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for venue"""
  venue: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for coverage"""
  coverage: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for year"""
  year: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for notes"""
  notes: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for taper"""
  taper: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for lineage"""
  lineage: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for archiveSource"""
  archiveSource: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for md5s"""
  md5s: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for creator"""
  creator: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for source"""
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
  """Filters for name"""
  name: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f
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
  """Filters for archiveIdentifier"""
  archiveIdentifier: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for server"""
  server: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for performanceDate"""
  performanceDate: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for addedAt"""
  addedAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for title"""
  title: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for description"""
  description: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for uploader"""
  uploader: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for venue"""
  venue: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for coverage"""
  coverage: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for year"""
  year: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for notes"""
  notes: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for taper"""
  taper: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for lineage"""
  lineage: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for archiveSource"""
  archiveSource: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for md5s"""
  md5s: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for creator"""
  creator: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for source"""
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
  """Filters for archiveIdentifier"""
  archiveIdentifier: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for server"""
  server: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for performanceDate"""
  performanceDate: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for addedAt"""
  addedAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for title"""
  title: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for description"""
  description: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for uploader"""
  uploader: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for venue"""
  venue: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for coverage"""
  coverage: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for year"""
  year: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for notes"""
  notes: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for taper"""
  taper: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for lineage"""
  lineage: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for archiveSource"""
  archiveSource: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for md5s"""
  md5s: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for creator"""
  creator: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for source"""
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
  """Filters for name"""
  name: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for body"""
  body: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for identifier"""
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
  """Filters for sourceInfo"""
  sourceInfo: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for checksums"""
  checksums: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for createdAt"""
  createdAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for media_count"""
  media_count: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for media_type"""
  media_type: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for noise_reduction"""
  noise_reduction: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for scms_status"""
  scms_status: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for show_rating"""
  show_rating: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for sound_rating"""
  sound_rating: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for microphones"""
  microphones: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for generation"""
  generation: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for note"""
  note: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for j_card_comment"""
  j_card_comment: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for tech_note"""
  tech_note: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for reference_number"""
  reference_number: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for traded_from"""
  traded_from: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for traded_from_email"""
  traded_from_email: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for tradesAllowed"""
  tradesAllowed: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for status"""
  status: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for attendance"""
  attendance: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for userid"""
  userid: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for tapername"""
  tapername: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for miclocation"""
  miclocation: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for performance"""
  performance: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for source"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for user"""
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
  """Filters for username"""
  username: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for email"""
  email: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for perms"""
  perms: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for validemail"""
  validemail: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for name"""
  name: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for css"""
  css: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for activetrading"""
  activetrading: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for rules"""
  rules: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for config_showrules"""
  config_showrules: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for config_colors"""
  config_colors: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for config_columns"""
  config_columns: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for columnorder"""
  columnorder: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for city"""
  city: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for state"""
  state: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for zipcode"""
  zipcode: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for tradenotes"""
  tradenotes: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for confirm_hash"""
  confirm_hash: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for cookie_hash"""
  cookie_hash: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for updatedAt"""
  updatedAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for msg_yahoo"""
  msg_yahoo: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for picture"""
  picture: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for createdAt"""
  createdAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for template"""
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
  """Filters for sourceInfo"""
  sourceInfo: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for checksums"""
  checksums: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for createdAt"""
  createdAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for media_count"""
  media_count: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for media_type"""
  media_type: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for noise_reduction"""
  noise_reduction: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for scms_status"""
  scms_status: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for show_rating"""
  show_rating: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for sound_rating"""
  sound_rating: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for microphones"""
  microphones: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for generation"""
  generation: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for note"""
  note: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for j_card_comment"""
  j_card_comment: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for tech_note"""
  tech_note: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for reference_number"""
  reference_number: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for traded_from"""
  traded_from: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for traded_from_email"""
  traded_from_email: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for tradesAllowed"""
  tradesAllowed: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for status"""
  status: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for attendance"""
  attendance: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for userid"""
  userid: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for tapername"""
  tapername: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for miclocation"""
  miclocation: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for performance"""
  performance: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for source"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for user"""
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
  """Filters for username"""
  username: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for email"""
  email: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for perms"""
  perms: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for validemail"""
  validemail: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for name"""
  name: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for css"""
  css: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for activetrading"""
  activetrading: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for rules"""
  rules: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for config_showrules"""
  config_showrules: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for config_colors"""
  config_colors: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for config_columns"""
  config_columns: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for columnorder"""
  columnorder: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for city"""
  city: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for state"""
  state: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for zipcode"""
  zipcode: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for tradenotes"""
  tradenotes: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for confirm_hash"""
  confirm_hash: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for cookie_hash"""
  cookie_hash: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for updatedAt"""
  updatedAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for msg_yahoo"""
  msg_yahoo: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for picture"""
  picture: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for createdAt"""
  createdAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for template"""
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
  """Filters for ref_username"""
  ref_username: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for name"""
  name: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for shortname"""
  shortname: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for notes"""
  notes: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for createdAt"""
  createdAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for views"""
  views: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for lastviewed"""
  lastviewed: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for defaultlist"""
  defaultlist: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for private"""
  private: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for user"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for template"""
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
  """Filters for username"""
  username: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for email"""
  email: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for perms"""
  perms: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for validemail"""
  validemail: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for name"""
  name: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for css"""
  css: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for activetrading"""
  activetrading: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for rules"""
  rules: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for config_showrules"""
  config_showrules: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for config_colors"""
  config_colors: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for config_columns"""
  config_columns: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for columnorder"""
  columnorder: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for city"""
  city: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for state"""
  state: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for zipcode"""
  zipcode: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for tradenotes"""
  tradenotes: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for confirm_hash"""
  confirm_hash: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for cookie_hash"""
  cookie_hash: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for updatedAt"""
  updatedAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for msg_yahoo"""
  msg_yahoo: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for picture"""
  picture: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for createdAt"""
  createdAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for template"""
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
  """Filters for ref_username"""
  ref_username: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for name"""
  name: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for shortname"""
  shortname: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for notes"""
  notes: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for createdAt"""
  createdAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for views"""
  views: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for lastviewed"""
  lastviewed: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for defaultlist"""
  defaultlist: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for private"""
  private: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for user"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for template"""
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
  """Filters for sourceInfo"""
  sourceInfo: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for checksums"""
  checksums: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for createdAt"""
  createdAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for media_count"""
  media_count: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for media_type"""
  media_type: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for noise_reduction"""
  noise_reduction: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for scms_status"""
  scms_status: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for show_rating"""
  show_rating: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for sound_rating"""
  sound_rating: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for microphones"""
  microphones: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for generation"""
  generation: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for note"""
  note: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for j_card_comment"""
  j_card_comment: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for tech_note"""
  tech_note: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for reference_number"""
  reference_number: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for traded_from"""
  traded_from: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for traded_from_email"""
  traded_from_email: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for tradesAllowed"""
  tradesAllowed: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for status"""
  status: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for attendance"""
  attendance: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for userid"""
  userid: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for tapername"""
  tapername: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for miclocation"""
  miclocation: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for performance"""
  performance: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for source"""
  source: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for user"""
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
  """Filters for ref_user_update"""
  ref_user_update: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for temporary"""
  temporary: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for user"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for artistGroup"""
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
  """Filters for date"""
  date: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for venue"""
  venue: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for city"""
  city: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for state"""
  state: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for set1"""
  set1: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for set2"""
  set2: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for set3"""
  set3: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for comment"""
  comment: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for updatedAt"""
  updatedAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for createdAt"""
  createdAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for year"""
  year: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for showsuserid"""
  showsuserid: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for ref_festival"""
  ref_festival: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for festival_lock"""
  festival_lock: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for spotlight_date"""
  spotlight_date: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for staffpick_date"""
  staffpick_date: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for merge_lock"""
  merge_lock: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for ref_venue"""
  ref_venue: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for changeComment"""
  changeComment: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for isCompilation"""
  isCompilation: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for title"""
  title: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for artist"""
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
  """Filters for ref_user_update"""
  ref_user_update: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for temporary"""
  temporary: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for user"""
  user: Filters_ID_e42e59a726e3a3d5a1c47117f1cb4d27

  """Filters for artistGroup"""
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
  """Filters for name"""
  name: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for artist"""
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
  """Filters for date"""
  date: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for venue"""
  venue: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for city"""
  city: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for state"""
  state: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for set1"""
  set1: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for set2"""
  set2: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for set3"""
  set3: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for comment"""
  comment: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for updatedAt"""
  updatedAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for createdAt"""
  createdAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for year"""
  year: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for showsuserid"""
  showsuserid: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for ref_festival"""
  ref_festival: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for festival_lock"""
  festival_lock: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for spotlight_date"""
  spotlight_date: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for staffpick_date"""
  staffpick_date: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for merge_lock"""
  merge_lock: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for ref_venue"""
  ref_venue: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for changeComment"""
  changeComment: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for isCompilation"""
  isCompilation: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for title"""
  title: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for artist"""
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
  """Filters for title"""
  title: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for header"""
  header: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for footer"""
  footer: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for user"""
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
  """Filters for name"""
  name: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for nameUnprefix"""
  nameUnprefix: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for top100"""
  top100: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f
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
  """Filters for name"""
  name: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for nameUnprefix"""
  nameUnprefix: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for top100"""
  top100: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f
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
  """Filters for name"""
  name: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for artist"""
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
  """Filters for name"""
  name: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for nameUnprefix"""
  nameUnprefix: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f
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
  """Filters for date"""
  date: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for venue"""
  venue: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for city"""
  city: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for state"""
  state: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for set1"""
  set1: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for set2"""
  set2: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for set3"""
  set3: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for comment"""
  comment: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for updatedAt"""
  updatedAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for createdAt"""
  createdAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for year"""
  year: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for showsuserid"""
  showsuserid: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for ref_festival"""
  ref_festival: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for festival_lock"""
  festival_lock: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for spotlight_date"""
  spotlight_date: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for staffpick_date"""
  staffpick_date: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for merge_lock"""
  merge_lock: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for ref_venue"""
  ref_venue: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for changeComment"""
  changeComment: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for isCompilation"""
  isCompilation: Filters_Boolean_71bca2067a53e330142f79f78702144f

  """Filters for title"""
  title: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for artist"""
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
  """Filters for createdAt"""
  createdAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for enterUsername"""
  enterUsername: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for circdate"""
  circdate: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for shndiskcount"""
  shndiskcount: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for wavdiskcount"""
  wavdiskcount: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for textdoc"""
  textdoc: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for comments"""
  comments: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for archiveIdentifier"""
  archiveIdentifier: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for updatedAt"""
  updatedAt: Filters_DateTime_71bca2067a53e330142f79f78702144f

  """Filters for mediaSize"""
  mediaSize: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for mediaSizeUncompressed"""
  mediaSizeUncompressed: Filters_String_71bca2067a53e330142f79f78702144f

  """Filters for dummyColumn"""
  dummyColumn: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for id"""
  id: Filters_Int_71bca2067a53e330142f79f78702144f

  """Filters for performance"""
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
}`;class W3{constructor(n){Ie(this,"mapping");this.mapping=n}getFor(n){return this.mapping.get(n.name)}}var ai;(function(r){r.UNION="union",r.ARGUMENT="argument",r.FIELD="field"})(ai||(ai={}));function Q3(r){const n=new Map;return J3(r,t=>{gn(t)&&H3(t,s=>{const o=Ea(s.type);ca(n,o).references.push({kind:ai.FIELD,parent:t,by:s}),X3(s,l=>{const c=Ea(l.type);ca(n,c).references.push({kind:ai.ARGUMENT,field:s,type:t,by:l})})}),Hn(t)&&t.getTypes().forEach(s=>{ca(n,s).references.push({kind:ai.UNION,by:t})})}),new W3(n)}function J3(r,n){Object.entries(r.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||n(t)})}function H3(r,n){Object.entries(r.getFields()).forEach(([,t])=>{n(t)})}function X3(r,n){Object.entries(r.args).forEach(([,t])=>{n(t)})}function ca(r,n){let t=r.get(n.name);return t||(t={references:[]},r.set(n.name,t)),t}function Ea(r){return an(r)||fr(r)?Ea(r.ofType):r}const ln=fD(),Aa=Ua(Ra.DIRECTIVES,[]);var rc;const Z3=Us((rc=ln.getQueryType())==null?void 0:rc.getFields());var ic;const K3=Us((ic=ln.getMutationType())==null?void 0:ic.getFields());var sc;const eD=Us((sc=ln.getSubscriptionType())==null?void 0:sc.getFields()),Va=wt.keyBy(sp(),r=>r.name.toLocaleLowerCase()),nD=wt.mapValues(Va,r=>{const n=Aa.find(t=>(t==null?void 0:t.name)===r.name||(t==null?void 0:t.name)==="*");return n?n.args.some(t=>t==="*")?r.args:n.args.map(t=>r.args.find(s=>s.name===t)).filter(t=>!!t):[]}),tD=Us(ln.getTypeMap()),rD=Q3(ln);function Us(r){return wt.mapKeys(r||{},(n,t)=>t.toLocaleLowerCase())}function iD(){return wt.size(ln.getTypeMap())<=10}function sD(){return[pa("Queries",ln.getQueryType()),pa("Mutations",ln.getMutationType()),pa("Subscriptions",ln.getSubscriptionType()),cD(),uD()].filter(r=>!!r)}function pa(r,n){return aD(r,oD(n))}function oD(r){return wt.sortBy((r==null?void 0:r.getFields())||{},n=>n.name)}function aD(r,n){return n.length===0?null:{type:"menu",title:r,children:n.map(t=>({type:"page",title:t.name,section:r,deprecated:!!t.deprecationReason,href:di.joinUrlPaths(bs,r.toLocaleLowerCase(),t.name)}))}}function uD(){return iD()?null:{type:"menu",title:"Types",children:wt.sortBy(wt.map(ln.getTypeMap()),n=>n.name).filter(n=>!n.name.startsWith("__")).map(n=>({type:"page",title:n.name,section:"Types",href:di.joinUrlPaths(bs,"types",n.name)}))}}function bD(){return!!ln.getQueryType()}function SD(r){return Z3[r.toLocaleLowerCase()]}function wD(){return!!ln.getMutationType()}function CD(r){return K3[r.toLocaleLowerCase()]}function ND(){return!!ln.getSubscriptionType()}function xD(r){return eD[r.toLocaleLowerCase()]}function kD(r){return tD[r.toLocaleLowerCase()]}function lD(r){return Va[r.toLocaleLowerCase()]}function OD(r){return lD(r.name)!==void 0}function LD(){return wt.size(Va)>0}function RD(r){return nD[r.name.toLocaleLowerCase()]||[]}function UD(r){if(r)return rD.getFor(r)}function BD(r){return wt.flatMap(r.getFields(),n=>({field:n,possibleDescriptions:ip(n,r)}))}function ip(r,n){return r?r.description?[{description:r.description,from:n}]:gn(n)?n.getInterfaces().flatMap(t=>ip(t.getFields()[r.name],t)):[]:[]}function sp(){return Aa.some(r=>(r==null?void 0:r.name)==="*")?ln.getDirectives().filter(r=>!["include","skip","deprecated","specifiedBy"].includes(r.name)):Aa.filter(r=>!!(r!=null&&r.name)).map(({name:r})=>r?ln.getDirective(r):void 0).filter(r=>!!r)}function fD(){return nc.trim().length===0?q3(JSON.parse(JSON.stringify({__schema:{types:[]}}))):Y3(nc)}function cD(){const r=sp();return r.length===0?null:{type:"menu",title:"Directives",children:r.map(n=>({type:"page",title:n.name,href:di.joinUrlPaths(bs,"directives",n.name),section:"Directives"}))}}const PD=Ua(Ra.APP_TITLE,"GraphQL Documentation"),op=dD().concat(sD());_D(op);const pD=Object.freeze(op),$D=hD();function dD(){return Ua(Ra.PAGES,mD()).filter(n=>!!n).map(n=>up([],n))}function hD(){const r=gD();if(r)return r.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function _D(r){function n(s,o){for(const u of s){if(u.type==="page"){o(u);continue}u.type==="menu"&&n(u.children,o)}}let t;n(r,s=>{t&&(t.next={title:s.title,section:s.section,href:s.href},s.previous={title:t.title,section:t.section,href:t.href}),t=s})}function gD(){return ap(()=>!0)}function MD(r){return ap(n=>n.href.toLocaleLowerCase()===r.toLocaleLowerCase())}function ap(r){function n(t){for(const s of t){if(s.type==="page"&&r(s))return s;if(s.type==="menu"){const o=n(s.children);if(o)return o}}return null}return n(pD)}function up(r,n){if(typeof n.content=="string")return{type:"page",title:n.title,content:n.content,href:di.joinUrlPaths(bs,...r,tc(n.title))};const t=r.concat([tc(n.title)]);return{type:"menu",title:n.title,children:n.content.map(s=>({...up(t,s),section:n.title}))}}function tc(r){return di.generatePathSegment(r,new Ec)}function mD(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(r=>r.trim()).join(`
`)}]}]}export{bD as A,Ec as B,SD as C,ND as D,xD as E,X2 as F,an as G,fr as H,$c as I,Pc as J,kD as K,UD as L,BD as M,OD as N,T as O,yD as P,Ss as Q,ai as R,lc as S,TD as T,ni as U,XF as V,wt as _,AD as a,Ua as b,Wn as c,gn as d,ut as e,un as f,ac as g,Wt as h,Xn as i,Hn as j,Zn as k,iD as l,me as m,PD as n,ID as o,pD as p,$D as q,MD as r,ln as s,Ra as t,di as u,LD as v,lD as w,RD as x,wD as y,CD as z};
