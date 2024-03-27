import{s as J,e as A,i as k,H as x,d as g,l as E,m as P,n as K,r as ee,u as X,f as B,a as O,g as G,h as H,c as I,j,w as y,v as te,G as R,I as C,x as ne,y as le,z as re,J as he,A as ie,O as ke,C as ye,K as F,p as ve,R as Te,k as Ne,a1 as we}from"./scheduler.X4qejJLZ.js";import{S as M,i as V,a as p,t as d,g as q,c as z,b as v,d as T,m as N,e as w}from"./index.C5OLbMYN.js";import{g as Se,I as oe,H as De,G as Le,P as Ee,u as se,b as Pe,t as Ae,_ as Ce,e as ae}from"./pages.lfe_aUEG.js";import{d as Y,S as Re,e as Oe,f as Ie,g as Ue,C as je}from"./PreviousNextPage.7fuAin1a.js";import{b as fe}from"./paths.DwcPYz4y.js";import{L as Be}from"./ChevronDown.D_zc1QZm.js";function Ge(i){let e=(i[0]??"-")+"",l;return{c(){l=E(e)},l(t){l=P(t,e)},m(t,n){k(t,l,n)},p(t,n){n&1&&e!==(e=(t[0]??"-")+"")&&K(l,e)},d(t){t&&g(l)}}}function Je(i){let e=JSON.stringify(i[0],null,2)+"",l;return{c(){l=E(e)},l(t){l=P(t,e)},m(t,n){k(t,l,n)},p(t,n){n&1&&e!==(e=JSON.stringify(t[0],null,2)+"")&&K(l,e)},d(t){t&&g(l)}}}function Me(i){let e,l,t;return{c(){e=E('"'),l=E(i[0]),t=E('"')},l(n){e=P(n,'"'),l=P(n,i[0]),t=P(n,'"')},m(n,r){k(n,e,r),k(n,l,r),k(n,t,r)},p(n,r){r&1&&K(l,n[0])},d(n){n&&(g(e),g(l),g(t))}}}function Ve(i){let e;function l(r,o){return typeof r[0]=="string"?Me:typeof r[0]=="object"?Je:Ge}let t=l(i),n=t(i);return{c(){n.c(),e=A()},l(r){n.l(r),e=A()},m(r,o){n.m(r,o),k(r,e,o)},p(r,[o]){t===(t=l(r))&&n?n.p(r,o):(n.d(1),n=t(r),n&&(n.c(),n.m(e.parentNode,e)))},i:x,o:x,d(r){r&&g(e),n.d(r)}}}function He(i,e,l){let{value:t}=e;return i.$$set=n=>{"value"in n&&l(0,t=n.value)},[t]}class qe extends M{constructor(e){super(),V(this,e,He,Ve,J,{value:0})}}const ze=i=>({}),ue=i=>({});function Ke(i){let e;return{c(){e=E(i[2])},l(l){e=P(l,i[2])},m(l,t){k(l,e,t)},p(l,t){t&4&&K(e,l[2])},d(l){l&&g(e)}}}function Fe(i){let e,l,t,n,r,o,a;const f=i[10].default,c=ee(f,i,i[9],null),D=i[10].tooltip,m=ee(D,i,i[9],ue),$=m||Ke(i);let S=[i[8]],L={};for(let s=0;s<S.length;s+=1)L=X(L,S[s]);return{c(){e=B("span"),l=B("button"),c&&c.c(),t=O(),n=B("div"),$&&$.c(),this.h()},l(s){e=G(s,"SPAN",{});var u=H(e);l=G(u,"BUTTON",{type:!0,"aria-describedby":!0});var _=H(l);c&&c.l(_),_.forEach(g),t=I(u),n=G(u,"DIV",{role:!0,id:!0});var h=H(n);$&&$.l(h),h.forEach(g),u.forEach(g),this.h()},h(){j(l,"type","button"),j(l,"aria-describedby",i[5]),y(l,"bx--tooltip--a11y",!0),y(l,"bx--tooltip__trigger",!0),y(l,"bx--tooltip__trigger--definition",!0),y(l,"bx--tooltip--hidden",!i[0]),y(l,"bx--tooltip--visible",i[0]),y(l,"bx--tooltip--top",i[4]==="top"),y(l,"bx--tooltip--bottom",i[4]==="bottom"),y(l,"bx--tooltip--align-start",i[3]==="start"),y(l,"bx--tooltip--align-center",i[3]==="center"),y(l,"bx--tooltip--align-end",i[3]==="end"),j(n,"role","tooltip"),j(n,"id",i[5]),y(n,"bx--assistive-text",!0),te(e,L),y(e,"bx--tooltip--definition",!0),y(e,"bx--tooltip--a11y",!0)},m(s,u){k(s,e,u),R(e,l),c&&c.m(l,null),i[17](l),R(e,t),R(e,n),$&&$.m(n,null),r=!0,o||(a=[C(window,"keydown",i[16]),C(l,"click",i[11]),C(l,"mouseover",i[12]),C(l,"mouseenter",i[13]),C(l,"mouseleave",i[14]),C(l,"focus",i[15]),C(l,"focus",i[7]),C(l,"blur",i[6]),C(e,"mouseenter",i[7]),C(e,"mouseleave",i[6])],o=!0)},p(s,[u]){c&&c.p&&(!r||u&512)&&ne(c,f,s,s[9],r?re(f,s[9],u,null):le(s[9]),null),(!r||u&32)&&j(l,"aria-describedby",s[5]),(!r||u&1)&&y(l,"bx--tooltip--hidden",!s[0]),(!r||u&1)&&y(l,"bx--tooltip--visible",s[0]),(!r||u&16)&&y(l,"bx--tooltip--top",s[4]==="top"),(!r||u&16)&&y(l,"bx--tooltip--bottom",s[4]==="bottom"),(!r||u&8)&&y(l,"bx--tooltip--align-start",s[3]==="start"),(!r||u&8)&&y(l,"bx--tooltip--align-center",s[3]==="center"),(!r||u&8)&&y(l,"bx--tooltip--align-end",s[3]==="end"),m?m.p&&(!r||u&512)&&ne(m,D,s,s[9],r?re(D,s[9],u,ze):le(s[9]),ue):$&&$.p&&(!r||u&4)&&$.p(s,r?u:-1),(!r||u&32)&&j(n,"id",s[5]),te(e,L=Se(S,[u&256&&s[8]])),y(e,"bx--tooltip--definition",!0),y(e,"bx--tooltip--a11y",!0)},i(s){r||(p(c,s),p($,s),r=!0)},o(s){d(c,s),d($,s),r=!1},d(s){s&&g(e),c&&c.d(s),i[17](null),$&&$.d(s),o=!1,he(a)}}}function Qe(i,e,l){const t=["tooltipText","open","align","direction","id","ref"];let n=ie(e,t),{$$slots:r={},$$scope:o}=e,{tooltipText:a=""}=e,{open:f=!1}=e,{align:c="center"}=e,{direction:D="bottom"}=e,{id:m="ccs-"+Math.random().toString(36)}=e,{ref:$=null}=e;const S=ke(),L=()=>l(0,f=!1),s=()=>l(0,f=!0);function u(b){F.call(this,i,b)}function _(b){F.call(this,i,b)}function h(b){F.call(this,i,b)}function U(b){F.call(this,i,b)}function Q(b){F.call(this,i,b)}const W=({key:b})=>{b==="Escape"&&L()};function be(b){ve[b?"unshift":"push"](()=>{$=b,l(1,$)})}return i.$$set=b=>{e=X(X({},e),ye(b)),l(8,n=ie(e,t)),"tooltipText"in b&&l(2,a=b.tooltipText),"open"in b&&l(0,f=b.open),"align"in b&&l(3,c=b.align),"direction"in b&&l(4,D=b.direction),"id"in b&&l(5,m=b.id),"ref"in b&&l(1,$=b.ref),"$$scope"in b&&l(9,o=b.$$scope)},i.$$.update=()=>{i.$$.dirty&1&&S(f?"open":"close")},[f,$,a,c,D,m,L,s,n,o,r,u,_,h,U,Q,W,be]}class We extends M{constructor(e){super(),V(this,e,Qe,Fe,J,{tooltipText:2,open:0,align:3,direction:4,id:5,ref:1})}}const Xe=We;function ce(i){let e,l;return e=new Y({props:{type:"red",$$slots:{default:[Ze]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&3&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function Ye(i){let e;return{c(){e=E("Deprecated")},l(l){e=P(l,"Deprecated")},m(l,t){k(l,e,t)},d(l){l&&g(e)}}}function Ze(i){let e,l;return e=new Xe({props:{tooltipText:i[0],$$slots:{default:[Ye]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.tooltipText=t[0]),n&2&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function xe(i){let e,l,t=i[0]&&ce(i);return{c(){t&&t.c(),e=A()},l(n){t&&t.l(n),e=A()},m(n,r){t&&t.m(n,r),k(n,e,r),l=!0},p(n,[r]){n[0]?t?(t.p(n,r),r&1&&p(t,1)):(t=ce(n),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(q(),d(t,1,1,()=>{t=null}),z())},i(n){l||(p(t),l=!0)},o(n){d(t),l=!1},d(n){n&&g(e),t&&t.d(n)}}}function et(i,e,l){let{reason:t}=e;return i.$$set=n=>{"reason"in n&&l(0,t=n.reason)},[t]}class tt extends M{constructor(e){super(),V(this,e,et,xe,J,{reason:0})}}function pe(i){let e,l;return e=new Y({props:{type:"purple",$$slots:{default:[nt]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function nt(i){let e;return{c(){e=E("Non-null")},l(l){e=P(l,"Non-null")},m(l,t){k(l,e,t)},d(l){l&&g(e)}}}function lt(i){let e=!oe(i[0]),l,t,n=e&&pe(i);return{c(){n&&n.c(),l=A()},l(r){n&&n.l(r),l=A()},m(r,o){n&&n.m(r,o),k(r,l,o),t=!0},p(r,[o]){o&1&&(e=!oe(r[0])),e?n?o&1&&p(n,1):(n=pe(r),n.c(),p(n,1),n.m(l.parentNode,l)):n&&(q(),d(n,1,1,()=>{n=null}),z())},i(r){t||(p(n),t=!0)},o(r){d(n),t=!1},d(r){r&&g(l),n&&n.d(r)}}}function rt(i,e,l){let{type:t}=e;return i.$$set=n=>{"type"in n&&l(0,t=n.type)},[t]}class it extends M{constructor(e){super(),V(this,e,rt,lt,J,{type:0})}}function ot(i){let e,l;return e=new Be({props:{href:se.joinUrlPaths(fe,`/types/${String(i[0].name)}`),$$slots:{default:[ft]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.href=se.joinUrlPaths(fe,`/types/${String(t[0].name)}`)),n&3&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function st(i){let e,l,t;return e=new Z({props:{type:i[0].ofType}}),{c(){v(e.$$.fragment),l=E("!")},l(n){T(e.$$.fragment,n),l=P(n,"!")},m(n,r){N(e,n,r),k(n,l,r),t=!0},p(n,r){const o={};r&1&&(o.type=n[0].ofType),e.$set(o)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){n&&g(l),w(e,n)}}}function at(i){let e,l,t,n;return l=new Z({props:{type:i[0].ofType}}),{c(){e=E("["),v(l.$$.fragment),t=E("]")},l(r){e=P(r,"["),T(l.$$.fragment,r),t=P(r,"]")},m(r,o){k(r,e,o),N(l,r,o),k(r,t,o),n=!0},p(r,o){const a={};o&1&&(a.type=r[0].ofType),l.$set(a)},i(r){n||(p(l.$$.fragment,r),n=!0)},o(r){d(l.$$.fragment,r),n=!1},d(r){r&&(g(e),g(t)),w(l,r)}}}function ft(i){let e=i[0].name+"",l;return{c(){l=E(e)},l(t){l=P(t,e)},m(t,n){k(t,l,n)},p(t,n){n&1&&e!==(e=t[0].name+"")&&K(l,e)},d(t){t&&g(l)}}}function ut(i){let e,l,t,n,r,o,a;const f=[at,st,ot],c=[];function D(m,$){return $&1&&(e=null),$&1&&(l=null),$&1&&(t=null),e==null&&(e=!!De(m[0])),e?0:(l==null&&(l=!!Le(m[0])),l?1:(t==null&&(t=!!Ee(m[0])),t?2:-1))}return~(n=D(i,-1))&&(r=c[n]=f[n](i)),{c(){r&&r.c(),o=A()},l(m){r&&r.l(m),o=A()},m(m,$){~n&&c[n].m(m,$),k(m,o,$),a=!0},p(m,[$]){let S=n;n=D(m,$),n===S?~n&&c[n].p(m,$):(r&&(q(),d(c[S],1,1,()=>{c[S]=null}),z()),~n?(r=c[n],r?r.p(m,$):(r=c[n]=f[n](m),r.c()),p(r,1),r.m(o.parentNode,o)):r=null)},i(m){a||(p(r),a=!0)},o(m){d(r),a=!1},d(m){m&&g(o),~n&&c[n].d(m)}}}function ct(i,e,l){let{type:t}=e;return i.$$set=n=>{"type"in n&&l(0,t=n.type)},[t]}class Z extends M{constructor(e){super(),V(this,e,ct,ut,J,{type:0})}}function pt(i){let e,l;return e=new Z({props:{type:i[0]}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.type=t[0]),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function mt(i){let e,l;return e=new Y({props:{type:"blue",$$slots:{default:[pt]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,[n]){const r={};n&3&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function _t(i,e,l){let{type:t}=e;return i.$$set=n=>{"type"in n&&l(0,t=n.type)},[t]}class $t extends M{constructor(e){super(),V(this,e,_t,mt,J,{type:0})}}function me(i,e,l){const t=i.slice();return t[3]=e[l],t}function _e(i){let e,l="=",t,n,r,o;return r=new qe({props:{value:i[3].default}}),{c(){e=B("span"),e.textContent=l,t=O(),n=B("span"),v(r.$$.fragment)},l(a){e=G(a,"SPAN",{"data-svelte-h":!0}),we(e)!=="svelte-u057kv"&&(e.textContent=l),t=I(a),n=G(a,"SPAN",{});var f=H(n);T(r.$$.fragment,f),f.forEach(g)},m(a,f){k(a,e,f),k(a,t,f),k(a,n,f),N(r,n,null),o=!0},p(a,f){const c={};f&1&&(c.value=a[3].default),r.$set(c)},i(a){o||(p(r.$$.fragment,a),o=!0)},o(a){d(r.$$.fragment,a),o=!1},d(a){a&&(g(e),g(t),g(n)),w(r)}}}function $e(i){let e,l;return e=new je({props:{source:i[3].description}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.source=t[3].description),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function dt(i){let e,l,t=i[3].name+"",n,r,o,a,f,c,D,m,$,S,L,s=i[3].default&&_e(i);a=new $t({props:{type:i[3].type}}),c=new tt({props:{reason:i[3].deprecationReason}}),m=new it({props:{type:i[3].type}});let u=i[3].description&&$e(i);return{c(){e=B("p"),l=B("span"),n=E(t),r=O(),s&&s.c(),o=O(),v(a.$$.fragment),f=O(),v(c.$$.fragment),D=O(),v(m.$$.fragment),$=O(),u&&u.c(),S=A(),this.h()},l(_){e=G(_,"P",{class:!0});var h=H(e);l=G(h,"SPAN",{style:!0});var U=H(l);n=P(U,t),U.forEach(g),r=I(h),s&&s.l(h),o=I(h),T(a.$$.fragment,h),f=I(h),T(c.$$.fragment,h),D=I(h),T(m.$$.fragment,h),h.forEach(g),$=I(_),u&&u.l(_),S=A(),this.h()},h(){Ne(l,"font-weight","bold"),j(e,"class","arg-name-section svelte-9cf7d2")},m(_,h){k(_,e,h),R(e,l),R(l,n),R(e,r),s&&s.m(e,null),R(e,o),N(a,e,null),R(e,f),N(c,e,null),R(e,D),N(m,e,null),k(_,$,h),u&&u.m(_,h),k(_,S,h),L=!0},p(_,h){(!L||h&1)&&t!==(t=_[3].name+"")&&K(n,t),_[3].default?s?(s.p(_,h),h&1&&p(s,1)):(s=_e(_),s.c(),p(s,1),s.m(e,o)):s&&(q(),d(s,1,1,()=>{s=null}),z());const U={};h&1&&(U.type=_[3].type),a.$set(U);const Q={};h&1&&(Q.reason=_[3].deprecationReason),c.$set(Q);const W={};h&1&&(W.type=_[3].type),m.$set(W),_[3].description?u?(u.p(_,h),h&1&&p(u,1)):(u=$e(_),u.c(),p(u,1),u.m(S.parentNode,S)):u&&(q(),d(u,1,1,()=>{u=null}),z())},i(_){L||(p(s),p(a.$$.fragment,_),p(c.$$.fragment,_),p(m.$$.fragment,_),p(u),L=!0)},o(_){d(s),d(a.$$.fragment,_),d(c.$$.fragment,_),d(m.$$.fragment,_),d(u),L=!1},d(_){_&&(g(e),g($),g(S)),s&&s.d(),w(a),w(c),w(m),u&&u.d(_)}}}function gt(i){let e,l,t;return e=new Ue({props:{$$slots:{default:[dt]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment),l=O()},l(n){T(e.$$.fragment,n),l=I(n)},m(n,r){N(e,n,r),k(n,l,r),t=!0},p(n,r){const o={};r&65&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){n&&g(l),w(e,n)}}}function de(i){let e,l;return e=new Ie({props:{$$slots:{default:[gt]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&65&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function bt(i){let e,l,t=ae(i[0]),n=[];for(let o=0;o<t.length;o+=1)n[o]=de(me(i,t,o));const r=o=>d(n[o],1,1,()=>{n[o]=null});return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=A()},l(o){for(let a=0;a<n.length;a+=1)n[a].l(o);e=A()},m(o,a){for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(o,a);k(o,e,a),l=!0},p(o,a){if(a&1){t=ae(o[0]);let f;for(f=0;f<t.length;f+=1){const c=me(o,t,f);n[f]?(n[f].p(c,a),p(n[f],1)):(n[f]=de(c),n[f].c(),p(n[f],1),n[f].m(e.parentNode,e))}for(q(),f=t.length;f<n.length;f+=1)r(f);z()}},i(o){if(!l){for(let a=0;a<t.length;a+=1)p(n[a]);l=!0}},o(o){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)d(n[a]);l=!1},d(o){o&&g(e),Te(n,o)}}}function ht(i){let e,l;return e=new Oe({props:{$$slots:{default:[bt]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&65&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function kt(i){let e,l;return e=new Re({props:{condensed:!0,$$slots:{default:[ht]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,[n]){const r={};n&65&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){d(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function ge(i){return i.map(e=>({id:e.name,deprecationReason:e.deprecationReason,name:e.name,description:e.description,default:e.defaultValue,type:e.type}))}function yt(i,e,l){let{data:t}=e;const n=Pe(Ae.ARGUMENTS_SORTING,"default");let r;return i.$$set=o=>{"data"in o&&l(1,t=o.data)},i.$$.update=()=>{i.$$.dirty&2&&(n==="alphabetical"?l(0,r=Ce.sortBy(ge(t),o=>o.name)):l(0,r=ge(t)))},[r,t]}class Lt extends M{constructor(e){super(),V(this,e,yt,kt,J,{data:1})}}export{Lt as A,tt as D,it as N,Z as T,$t as a,qe as b,Xe as c};
