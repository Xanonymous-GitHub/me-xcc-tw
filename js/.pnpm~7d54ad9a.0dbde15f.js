(window.webpackJsonp=window.webpackJsonp||[]).push([[".pnpm~7d54ad9a"],{"93a0":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ce})),n.d(t,"b",(function(){return _}));var r=n("b8b5");n("b186");
/*!
  * vue-router v4.0.10
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const o="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,a=e=>o?Symbol(e):"_vr_"+e,c=a("rvlm"),s=a("rvd"),l=a("r"),i=a("rl"),u=a("rvl"),f="undefined"!=typeof window;const p=Object.assign;function h(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}let d=()=>{};const m=/\/$/;function g(e,t,n="/"){let r,o={},a="",c="";const s=t.indexOf("?"),l=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),a=t.slice(s+1,l>-1?l:t.length),o=e(a)),l>-1&&(r=r||t.slice(0,l),c=t.slice(l,t.length)),r=function(e,t){if(e.startsWith("/"))return e;0;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,c=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],1!==c&&"."!==a){if(".."!==a)break;c--}return n.slice(0,c).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+c,path:r,query:o,hash:c}}function v(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function b(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(!w(e[n],t[n]))return!1;return!0}function w(e,t){return Array.isArray(e)?O(e,t):Array.isArray(t)?O(t,e):e===t}function O(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}var E,j;!function(e){e.pop="pop",e.push="push"}(E||(E={})),function(e){e.back="back",e.forward="forward",e.unknown=""}(j||(j={}));function k(e){if(!e)if(f){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(m,"")}const A=/^[^#]+#/;function R(e,t){return e.replace(A,"#")+t}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function x(e){let t;if("el"in e){let n=e.el;const r="string"==typeof n&&n.startsWith("#");0;const o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function C(e,t){return(history.state?history.state.position-t:-1)+e}const $=new Map;let S=()=>location.protocol+"//"+location.host;function q(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),v(n,"")}return v(n,e)+r+o}function L(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?P():null}}function _(e){const t=function(e){const{history:t,location:n}=window;let r={value:q(e,n)},o={value:t.state};function a(r,a,c){const s=e.indexOf("#"),l=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+r:S()+e+r;try{t[c?"replaceState":"pushState"](a,"",l),o.value=a}catch(e){console.error(e),n[c?"replace":"assign"](l)}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){const c=p({},o.value,t.state,{forward:e,scroll:P()});a(c.current,c,!0),a(e,p({},L(r.value,e,null),{position:c.position+1},n),!1),r.value=e},replace:function(e,n){a(e,p({},t.state,L(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}}}(e=k(e)),n=function(e,t,n,r){let o=[],a=[],c=null;const s=({state:a})=>{const s=q(e,location),l=n.value,i=t.value;let u=0;if(a){if(n.value=s,t.value=a,c&&c===l)return void(c=null);u=i?a.position-i.position:0}else r(s);o.forEach(e=>{e(n.value,l,{delta:u,type:E.pop,direction:u?u>0?j.forward:j.back:j.unknown})})};function l(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:P()}),"")}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",l),{pauseListeners:function(){c=n.value},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",l)}}}(e,t.state,t.location,t.replace);const r=p({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:R.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function B(e){return"string"==typeof e||"symbol"==typeof e}const F={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},G=a("nf");var M;!function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"}(M||(M={}));function I(e,t){return p(new Error,{type:e,[G]:!0},t)}function T(e,t){return e instanceof Error&&G in e&&(null==t||!!(e.type&t))}const U={sensitive:!1,strict:!1,start:!0,end:!0},W=/[.+*?^${}()[\]/\\]/g;function D(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function V(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=D(r[n],o[n]);if(e)return e;n++}return o.length-r.length}const z={type:0,value:""},K=/[a-zA-Z0-9_]/;function H(e,t,n){const r=function(e,t){const n=p({},U,t);let r=[],o=n.start?"^":"";const a=[];for(const t of e){const e=t.length?[]:[90];n.strict&&!t.length&&(o+="/");for(let r=0;r<t.length;r++){const c=t[r];let s=40+(n.sensitive?.25:0);if(0===c.type)r||(o+="/"),o+=c.value.replace(W,"\\$&"),s+=40;else if(1===c.type){const{value:e,repeatable:n,optional:l,regexp:i}=c;a.push({name:e,repeatable:n,optional:l});const u=i||"[^/]+?";if("[^/]+?"!==u){s+=10;try{new RegExp(`(${u})`)}catch(t){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let f=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(f=l&&t.length<2?`(?:/${f})`:"/"+f),l&&(f+="?"),o+=f,s+=20,l&&(s+=-8),n&&(s+=-20),".*"===u&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const c=new RegExp(o,n.sensitive?"":"i");return{re:c,score:r,keys:a,parse:function(e){const t=e.match(c),n={};if(!t)return null;for(let e=1;e<t.length;e++){const r=t[e]||"",o=a[e-1];n[o.name]=r&&o.repeatable?r.split("/"):r}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:c,optional:s}=e,l=a in t?t[a]:"";if(Array.isArray(l)&&!c)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const i=Array.isArray(l)?l.join("/"):l;if(!i){if(!s)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=i}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[z]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${i}": ${e}`)}let n=0,r=n;const o=[];let a;function c(){a&&o.push(a),a=[]}let s,l=0,i="",u="";function f(){i&&(0===n?a.push({type:0,value:i}):1===n||2===n||3===n?(a.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:i,regexp:u,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),i="")}function p(){i+=s}for(;l<e.length;)if(s=e[l++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(i&&f(),c()):":"===s?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===s?n=2:K.test(s)?p():(f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--);break;case 2:")"===s?"\\"==u[u.length-1]?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&l--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${i}"`),f(),c(),o}(e.path),n);const o=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function J(e,t){const n=[],r=new Map;function o(e,n,r){let s=!r,l=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Q(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);l.aliasOf=r&&r.record;const i=N(t,e),u=[l];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(p({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let f,h;for(const t of u){let{path:u}=t;if(n&&"/"!==u[0]){let e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=H(t,n,i),r?r.alias.push(f):(h=h||f,h!==f&&h.alias.push(f),s&&e.name&&!X(f)&&a(e.name)),"children"in l){let e=l.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f,c(f)}return h?()=>{a(h)}:d}function a(e){if(B(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function c(e){let t=0;for(;t<n.length&&V(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!X(e)&&r.set(e.record.name,e)}return t=N({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>o(e)),{addRoute:o,resolve:function(e,t){let o,a,c,s={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw I(1,{location:e});c=o.record.name,s=p(function(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}(t.params,o.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),a=o.stringify(s)}else if("path"in e)a=e.path,o=n.find(e=>e.re.test(a)),o&&(s=o.parse(a),c=o.record.name);else{if(o=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!o)throw I(1,{location:e,currentLocation:t});c=o.record.name,s=p({},t.params,e.params),a=o.stringify(s)}const l=[];let i=o;for(;i;)l.unshift(i.record),i=i.parent;return{name:c,path:a,params:s,matched:l,meta:Y(l)}},removeRoute:a,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function Q(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(let r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function X(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Y(e){return e.reduce((e,t)=>p(e,t.meta),{})}function N(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}const Z=/#/g,ee=/&/g,te=/\//g,ne=/=/g,re=/\?/g,oe=/\+/g,ae=/%5B/g,ce=/%5D/g,se=/%5E/g,le=/%60/g,ie=/%7B/g,ue=/%7C/g,fe=/%7D/g,pe=/%20/g;function he(e){return encodeURI(""+e).replace(ue,"|").replace(ae,"[").replace(ce,"]")}function de(e){return he(e).replace(oe,"%2B").replace(pe,"+").replace(Z,"%23").replace(ee,"%26").replace(le,"`").replace(ie,"{").replace(fe,"}").replace(se,"^")}function me(e){return function(e){return he(e).replace(Z,"%23").replace(re,"%3F")}(e).replace(te,"%2F")}function ge(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}function ve(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){const r=n[e].replace(oe," ");let o=r.indexOf("="),a=ge(o<0?r:r.slice(0,o)),c=o<0?null:ge(r.slice(o+1));if(a in t){let e=t[a];Array.isArray(e)||(e=t[a]=[e]),e.push(c)}else t[a]=c}return t}function be(e){let t="";for(let n in e){const r=e[n];if(n=de(n).replace(ne,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(e=>e&&de(e)):[r&&de(r)]).forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function ye(e){const t={};for(let n in e){let r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function we(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function Oe(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((c,s)=>{const l=e=>{var l;!1===e?s(I(4,{from:n,to:t})):e instanceof Error?s(e):"string"==typeof(l=e)||l&&"object"==typeof l?s(I(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),c())},i=e.call(r&&r.instances[o],t,n,l);let u=Promise.resolve(i);e.length<3&&(u=u.then(l)),u.catch(e=>s(e))})}function Ee(e,t,n,r){const a=[];for(const s of e)for(const e in s.components){let l=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if("object"==typeof(c=l)||"displayName"in c||"props"in c||"__vccOpts"in c){const o=(l.__vccOpts||l)[t];o&&a.push(Oe(o,n,r,s,e))}else{let c=l();0,a.push(()=>c.then(a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const c=(l=a).__esModule||o&&"Module"===l[Symbol.toStringTag]?a.default:a;var l;s.components[e]=c;const i=(c.__vccOpts||c)[t];return i&&Oe(i,n,r,s,e)()}))}}var c;return a}function je(e){const t=Object(r.n)(l),n=Object(r.n)(i),o=Object(r.c)(()=>t.resolve(Object(r.F)(e.to))),a=Object(r.c)(()=>{let{matched:e}=o.value,{length:t}=e;const r=e[t-1];let a=n.matched;if(!r||!a.length)return-1;let c=a.findIndex(b.bind(null,r));if(c>-1)return c;let s=Ae(e[t-2]);return t>1&&Ae(r)===s&&a[a.length-1].path!==s?a.findIndex(b.bind(null,e[t-2])):c}),c=Object(r.c)(()=>a.value>-1&&function(e,t){for(let n in t){let r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some((e,t)=>e!==o[t]))return!1}return!0}(n.params,o.value.params)),s=Object(r.c)(()=>a.value>-1&&a.value===n.matched.length-1&&y(n.params,o.value.params));return{route:o,href:Object(r.c)(()=>o.value.href),isActive:c,isExactActive:s,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[Object(r.F)(e.replace)?"replace":"push"](Object(r.F)(e.to)).catch(d):Promise.resolve()}}}const ke=Object(r.k)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:je,setup(e,{slots:t}){const n=Object(r.x)(je(e)),{options:o}=Object(r.n)(l),a=Object(r.c)(()=>({[Re(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Re(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:Object(r.m)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},o)}}});function Ae(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Re=(e,t,n)=>null!=e?e:null!=t?t:n;function Pe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const xe=Object(r.k)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const o=Object(r.n)(u),a=Object(r.c)(()=>e.route||o.value),l=Object(r.n)(s,0),i=Object(r.c)(()=>a.value.matched[l]);Object(r.v)(s,l+1),Object(r.v)(c,i),Object(r.v)(u,a);const f=Object(r.y)();return Object(r.I)(()=>[f.value,i.value,e.name],([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&b(t,o)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const o=a.value,c=i.value,s=c&&c.components[e.name],l=e.name;if(!s)return Pe(n.default,{Component:s,route:o});const u=c.props[e.name],h=u?!0===u?o.params:"function"==typeof u?u(o):u:null,d=Object(r.m)(s,p({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(c.instances[l]=null)},ref:f}));return Pe(n.default,{Component:d,route:o})||d}}});function Ce(e){const t=J(e.routes,e);let n=e.parseQuery||ve,o=e.stringifyQuery||be,a=e.history;const c=we(),s=we(),m=we(),v=Object(r.C)(F);let w=F;f&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const O=h.bind(null,e=>""+e),j=h.bind(null,me),k=h.bind(null,ge);function A(e,r){if(r=p({},r||v.value),"string"==typeof e){let o=g(n,e,r.path),c=t.resolve({path:o.path},r),s=a.createHref(o.fullPath);return p(o,c,{params:k(c.params),hash:ge(o.hash),redirectedFrom:void 0,href:s})}let c;"path"in e?c=p({},e,{path:g(n,e.path,r.path).path}):(c=p({},e,{params:j(e.params)}),r.params=j(r.params));let s=t.resolve(c,r);const l=e.hash||"";s.params=O(k(s.params));const i=function(e,t){let n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(o,p({},e,{hash:(u=l,he(u).replace(ie,"{").replace(fe,"}").replace(se,"^")),path:s.path}));var u;let f=a.createHref(i);return p({fullPath:i,hash:l,query:o===be?ye(e.query):e.query},s,{redirectedFrom:void 0,href:f})}function R(e){return"string"==typeof e?g(n,e,v.value.path):p({},e)}function S(e,t){if(w!==e)return I(8,{from:t,to:e})}function q(e){return _(e)}function L(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=R(r):{path:r},r.params={}),p({query:e.query,hash:e.hash,params:e.params},r)}}function _(e,t){const n=w=A(e),r=v.value,a=e.state,c=e.force,s=!0===e.replace,l=L(n);if(l)return _(p(R(l),{state:a,force:c,replace:s}),t||n);const i=n;let u;return i.redirectedFrom=t,!c&&function(e,t,n){let r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&b(t.matched[r],n.matched[o])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(o,r,n)&&(u=I(16,{to:i,from:r}),Y(r,r,!0,!1)),(u?Promise.resolve(u):M(i,r)).catch(e=>T(e)?e:Q(e,i,r)).then(e=>{if(e){if(T(e,2))return _(p(R(e.to),{state:a,force:c,replace:s}),t||i)}else e=W(i,r,!0,s,a);return U(i,r,e),e})}function G(e,t){const n=S(e,t);return n?Promise.reject(n):Promise.resolve()}function M(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let c=0;c<a;c++){const a=t.matched[c];a&&(e.matched.find(e=>b(e,a))?r.push(a):n.push(a));const s=e.matched[c];s&&(t.matched.find(e=>b(e,s))||o.push(s))}return[n,r,o]}(e,t);n=Ee(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach(r=>{n.push(Oe(r,e,t))});const l=G.bind(null,e,t);return n.push(l),$e(n).then(()=>{n=[];for(const r of c.list())n.push(Oe(r,e,t));return n.push(l),$e(n)}).then(()=>{n=Ee(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach(r=>{n.push(Oe(r,e,t))});return n.push(l),$e(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(Oe(o,e,t));else n.push(Oe(r.beforeEnter,e,t));return n.push(l),$e(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Ee(a,"beforeRouteEnter",e,t),n.push(l),$e(n))).then(()=>{n=[];for(const r of s.list())n.push(Oe(r,e,t));return n.push(l),$e(n)}).catch(e=>T(e,8)?e:Promise.reject(e))}function U(e,t,n){for(const r of m.list())r(e,t,n)}function W(e,t,n,r,o){const c=S(e,t);if(c)return c;const s=t===F,l=f?history.state:{};n&&(r||s?a.replace(e.fullPath,p({scroll:s&&l&&l.scroll},o)):a.push(e.fullPath,o)),v.value=e,Y(e,t,n,s),X()}let D;function V(){D=a.listen((e,t,n)=>{let r=A(e);const o=L(r);if(o)return void _(p(o,{replace:!0}),r).catch(d);w=r;const c=v.value;var s,l;f&&(s=C(c.fullPath,n.delta),l=P(),$.set(s,l)),M(r,c).catch(e=>T(e,12)?e:T(e,2)?(_(e.to,r).then(e=>{T(e,20)&&!n.delta&&n.type===E.pop&&a.go(-1,!1)}).catch(d),Promise.reject()):(n.delta&&a.go(-n.delta,!1),Q(e,r,c))).then(e=>{(e=e||W(r,c,!1))&&(n.delta?a.go(-n.delta,!1):n.type===E.pop&&T(e,20)&&a.go(-1,!1)),U(r,c,e)}).catch(d)})}let z,K=we(),H=we();function Q(e,t,n){X(e);const r=H.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function X(e){z||(z=!0,V(),K.list().forEach(([t,n])=>e?n(e):t()),K.reset())}function Y(t,n,o,a){const{scrollBehavior:c}=e;if(!f||!c)return Promise.resolve();let s=!o&&function(e){const t=$.get(e);return $.delete(e),t}(C(t.fullPath,0))||(a||!o)&&history.state&&history.state.scroll||null;return Object(r.o)().then(()=>c(t,n,s)).then(e=>e&&x(e)).catch(e=>Q(e,t,n))}const N=e=>a.go(e);let Z;const ee=new Set;return{currentRoute:v,addRoute:function(e,n){let r,o;return B(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)},removeRoute:function(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map(e=>e.record)},resolve:A,options:e,push:q,replace:function(e){return q(p(R(e),{replace:!0}))},go:N,back:()=>N(-1),forward:()=>N(1),beforeEach:c.add,beforeResolve:s.add,afterEach:m.add,onError:H.add,isReady:function(){return z&&v.value!==F?Promise.resolve():new Promise((e,t)=>{K.add([e,t])})},install(e){e.component("RouterLink",ke),e.component("RouterView",xe),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r.F)(v)}),f&&!Z&&v.value===F&&(Z=!0,q(a.location).catch(e=>{0}));const t={};for(let e in F)t[e]=Object(r.c)(()=>v.value[e]);e.provide(l,this),e.provide(i,Object(r.x)(t)),e.provide(u,v);let n=e.unmount;ee.add(e),e.unmount=function(){ee.delete(e),ee.size<1&&(D(),v.value=F,Z=!1,z=!1),n()}}}}function $e(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}}}]);