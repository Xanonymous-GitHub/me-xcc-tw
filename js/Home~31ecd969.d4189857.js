(window.webpackJsonp=window.webpackJsonp||[]).push([["Home~31ecd969"],{"0418":function(t,e,r){"use strict";var n=r("7a23"),a={class:"my-3 bg-secondary mx-4 h-25 rounded-3",style:{"background-image":'url("https://i.imgur.com/2YhIVkZ.webp")',"background-size":"cover","background-position":"center"}};var o=Object(n.i)({name:"Header",setup:function(){}});o.render=function(t,e,r,o,i,c){return Object(n.r)(),Object(n.e)("header",a)};e.a=o},"0fcc":function(t,e,r){},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7");function n(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,s,"next",t)}function s(t){n(i,a,o,c,s,"throw",t)}c(void 0)}))}}},3693:function(t,e,r){"use strict";var n=r("7a23"),a={id:"carousel-top",class:"carousel carousel__top slide mx-3 rounded-3 d-inline-block rounded-3 my-3 my-sm-3 shadow","data-bs-ride":"carousel"},o={class:"carousel-indicators"},i={class:"carousel-inner rounded-3"},c={class:"visually-hidden"};r("d81d");var s=r("5530"),u=(r("6785"),r("76b0")),d=Object(n.i)({name:"Carousel",components:{LazyImg:u.a},setup:function(){var t=Object(n.v)({imageList:["bFcdQMh","dEKDZaM","JPjHtac"].map((function(t){return"https://i.imgur.com/"+t+".webp"})),carouseControllerConfig:[{text:"Previous",dataBsSlide:"prev"},{text:"Next",dataBsSlide:"next"}]});return Object(n.p)((function(){Object(n.m)((function(){var t=document.querySelectorAll(".carousel-item");t.length>0&&t[0].classList.add("active");var e=document.querySelector(".carousel-indicators").children;e.length>0&&e[0].classList.add("active")}))})),Object(s.a)({},Object(n.C)(t))}});d.render=function(t,e,r,s,u,d){var l=Object(n.y)("LazyImg");return Object(n.r)(),Object(n.e)("div",a,[Object(n.h)("ol",o,[(Object(n.r)(!0),Object(n.e)(n.a,null,Object(n.x)(t.imageList,(function(t,e){return Object(n.r)(),Object(n.e)("li",{key:e,"data-bs-slide-to":e,"data-bs-target":"#carousel-top"},null,8,["data-bs-slide-to"])})),128))]),Object(n.h)("div",i,[(Object(n.r)(!0),Object(n.e)(n.a,null,Object(n.x)(t.imageList,(function(t,e){return Object(n.r)(),Object(n.e)("div",{key:e,class:"carousel-item"},[Object(n.h)(l,{"d-src":t,class:"d-block w-auto mw-100 mx-auto rounded-3"},null,8,["d-src"])])})),128))]),(Object(n.r)(!0),Object(n.e)(n.a,null,Object(n.x)(t.carouseControllerConfig,(function(t,e){return Object(n.r)(),Object(n.e)("a",{key:e,class:"carousel-control-"+t.dataBsSlide,"data-bs-slide":t.dataBsSlide,href:"#carousel-top",rel:"noreferrer noopener",role:"button"},[Object(n.h)("span",{class:"carousel-control-"+t.dataBsSlide+"-icon","aria-hidden":"true"},null,2),Object(n.h)("span",c,Object(n.B)(t.text),1)],10,["data-bs-slide"])})),128))])};e.a=d},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"5f83":function(t,e,r){
/*! lozad.js - v1.16.0 - 2020-09-06
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
t.exports=function(){"use strict";var t="undefined"!=typeof document&&document.documentMode,e={rootMargin:"0px",threshold:0,load:function(e){if("picture"===e.nodeName.toLowerCase()){var r=e.querySelector("img"),n=!1;null===r&&(r=document.createElement("img"),n=!0),t&&e.getAttribute("data-iesrc")&&(r.src=e.getAttribute("data-iesrc")),e.getAttribute("data-alt")&&(r.alt=e.getAttribute("data-alt")),n&&e.append(r)}if("video"===e.nodeName.toLowerCase()&&!e.getAttribute("data-src")&&e.children){for(var a=e.children,o=void 0,i=0;i<=a.length-1;i++)(o=a[i].getAttribute("data-src"))&&(a[i].src=o);e.load()}e.getAttribute("data-poster")&&(e.poster=e.getAttribute("data-poster")),e.getAttribute("data-src")&&(e.src=e.getAttribute("data-src")),e.getAttribute("data-srcset")&&e.setAttribute("srcset",e.getAttribute("data-srcset"));var c=",";if(e.getAttribute("data-background-delimiter")&&(c=e.getAttribute("data-background-delimiter")),e.getAttribute("data-background-image"))e.style.backgroundImage="url('"+e.getAttribute("data-background-image").split(c).join("'),url('")+"')";else if(e.getAttribute("data-background-image-set")){var s=e.getAttribute("data-background-image-set").split(c),u=s[0].substr(0,s[0].indexOf(" "))||s[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===s.length?e.style.backgroundImage=u:e.setAttribute("style",(e.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+s+"); background-image: image-set("+s+")")}e.getAttribute("data-toggle-class")&&e.classList.toggle(e.getAttribute("data-toggle-class"))},loaded:function(){}};function r(t){t.setAttribute("data-loaded",!0)}var n=function(t){return"true"===t.getAttribute("data-loaded")},a=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var t,o,i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},s=Object.assign({},e,c),u=s.root,d=s.rootMargin,l=s.threshold,b=s.load,f=s.loaded,g=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(g=new IntersectionObserver((t=b,o=f,function(e,a){e.forEach((function(e){(0<e.intersectionRatio||e.isIntersecting)&&(a.unobserve(e.target),n(e.target)||(t(e.target),r(e.target),o(e.target)))}))}),{root:u,rootMargin:d,threshold:l}));for(var p,m=a(i,u),h=0;h<m.length;h++)(p=m[h]).getAttribute("data-placeholder-background")&&(p.style.background=p.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=a(i,u),e=0;e<t.length;e++)n(t[e])||(g?g.observe(t[e]):(b(t[e]),r(t[e]),f(t[e])))},triggerLoad:function(t){n(t)||(b(t),r(t),f(t))},observer:g}}}()},"66aa":function(t,e,r){"use strict";r("9911");var n=r("7a23"),a={class:"align-content-center justify-content-center profile-card my-5 d-flex flex-sm-row flex-column flex-wrap mx-auto w-75 mw-100 position-relative"},o={class:"d-flex justify-content-center align-content-center py-3"},i={class:"px-3 mw-100"},c={class:"canprd-body mw-100"},s=Object(n.h)("h5",{class:"card-title fw-bolder fs-3"},"About Me",-1),u=Object(n.h)("hr",null,null,-1),d=Object(n.h)("p",{class:"card-text fw-bold mw-100 text-wrap"},"Xanonymous TeU Lin 林天佑 108820003",-1),l=Object(n.h)("p",{class:"card-text mw-100 text-wrap justify"}," True mastery of any skill takes a lifetime, and if you are doing your best, you will not have to worry about failure. Jonah Creed is currently enrolled as a third-year student at Birmingham City University and he specializes in Adult Nursing. Like many other adult students, he's required to arrange and meet specific criteria so he can qualify to pursue his chosen healthcare career. Structuring involves giving the right priorities to pathways that enable him to achieve the career path he has chosen. For instance, Jonah has to reach an educational level of level 3 as a requirement and a level 2 minimum for Math and English proficiency. Jonah successfully finished his level 3 Business and Finance, but the University didn't consider because he accomplished this eighteen years ago. ",-1),b={class:"contact d-flex flex-column flex-sm-row flex-wrap rounded-pill my-1 py-1"},f={class:"d-svg rounded-circle",viewBox:"0 0 1 1"};var g=r("5530"),p=(r("bcd2"),r("28fa"),r("86e5"),r("d656"),r("f606"),r("a6e2"),r("76b0")),m=Object(n.i)({name:"Profile",components:{LazyImg:p.a},setup:function(){var t=Object(n.v)({contacts:[{title:"Gmail",svg:"#gmail.svg",link:"mailto:trusaidlin@gmail.com"},{title:"Telegram",svg:"#telegram.svg",link:"https://t.me/XanonymousTG"},{title:"Youtube",svg:"#youtube.svg",link:"https://youtube.com/anonymousX_TM"},{title:"LinkedIn",svg:"#linkedIn.svg",link:"https://www.linkedin.com/in/xanonymous"},{title:"Instagram",svg:"#instagram.svg",link:"https://instagram.com/xanonymous_ig"}]});return Object(g.a)({},Object(n.C)(t))}});m.render=function(t,e,r,g,p,m){var h=Object(n.y)("LazyImg");return Object(n.r)(),Object(n.e)("div",a,[Object(n.h)("div",o,[Object(n.h)(h,{id:"avatar",class:"rounded-circle shadow","d-src":"https://i.imgur.com/UUs5dHp.webp"})]),Object(n.h)("div",i,[Object(n.h)("div",c,[s,u,d,l,Object(n.h)("div",b,[(Object(n.r)(!0),Object(n.e)(n.a,null,Object(n.x)(t.contacts,(function(t,e){return Object(n.r)(),Object(n.e)("address",{key:e,class:"fw-bolder mx-sm-3 mx-0 rounded-pill px-1 my-auto"},[(Object(n.r)(),Object(n.e)("svg",f,[Object(n.h)("use",{"xlink:href":t.svg},null,8,["xlink:href"])])),Object(n.h)("a",{href:t.link,class:"ml-1",rel:"noreferrer noopener",target:"_blank"},Object(n.B)(t.title),9,["href"])])})),128))])])])])};e.a=m},"76b0":function(t,e,r){"use strict";var n=r("7a23"),a=Object(n.J)("data-v-5c00086f")((function(t,e,r,a,o,i){return Object(n.r)(),Object(n.e)("img",{"data-src":t.dSrc,alt:"",class:"lozad mask",src:""},null,8,["data-src"])})),o=(r("d3b7"),r("96cf"),r("1da1")),i=r("5f83"),c=r.n(i),s=Object(n.i)({name:"LazyImg",props:{dSrc:{type:String,required:!0,default:""}},setup:function(){Object(n.p)((function(){var t;c()(".lozad",{loaded:(t=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){e.onload=t}));case 2:e.classList.add("mask__completed");case 3:case"end":return t.stop()}}),t)}))),function(e){return t.apply(this,arguments)})}).observe()}))}});r("add1");s.render=a,s.__scopeId="data-v-5c00086f";e.a=s},add1:function(t,e,r){"use strict";r("0fcc")},d000:function(t,e,r){"use strict";var n=r("7a23"),a={class:"navbar rounded-pill my-3 navbar-expand-lg navbar-light mx-3"},o=Object(n.h)("div",{class:"container-fluid"},[Object(n.h)("span",{class:"navbar-brand text-white user-select-none fw-bolder fs-lg-4 fs-md-3 fs-sm-2"},"🔥 Xanonymous's Pending Works"),Object(n.h)("a",{href:"https://github.com/Xanonymous-GitHub/me-xcc-tw",rel:"noreferrer noopener",target:"_blank"},[Object(n.h)("svg",{class:"d-svg rounded-circle",viewBox:"0 0 1 1"},[Object(n.h)("use",{"xlink:href":"#github.svg"})])])],-1);r("d610"),r("2aa9");var i=Object(n.i)({name:"NavBar",setup:function(){}});i.render=function(t,e,r,i,c,s){return Object(n.r)(),Object(n.e)("nav",a,[o])};e.a=i},e017:function(t,e,r){(function(e){var r;r=function(){"use strict";var t=function(t){var e=t.id,r=t.viewBox,n=t.content;this.id=e,this.viewBox=r,this.content=n};function r(t,e){return t(e={exports:{}},e.exports),e.exports}t.prototype.stringify=function(){return this.content},t.prototype.toString=function(){return this.stringify()},t.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(e){return delete t[e]}))},"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var n=r((function(t,e){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,r){var a;return r&&!0===r.clone&&t(e)?n((a=e,Array.isArray(a)?[]:{}),e,r):e}function r(r,a,o){var i=r.slice();return a.forEach((function(a,c){void 0===i[c]?i[c]=e(a,o):t(a)?i[c]=n(r[c],a,o):-1===r.indexOf(a)&&i.push(e(a,o))})),i}function n(a,o,i){var c=Array.isArray(o),s=(i||{arrayMerge:r}).arrayMerge||r;return c?Array.isArray(a)?s(a,o,i):e(o,i):function(r,a,o){var i={};return t(r)&&Object.keys(r).forEach((function(t){i[t]=e(r[t],o)})),Object.keys(a).forEach((function(c){t(a[c])&&r[c]?i[c]=n(r[c],a[c],o):i[c]=e(a[c],o)})),i}(a,o,i)}return n.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,r){return n(t,r,e)}))},n}()})),a=r((function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default})),o=a.svg,i=a.xlink,c={};c[o.name]=o.uri,c[i.name]=i.uri;var s=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(n(c,e||{}))+">"+t+"</svg>"};return function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={isMounted:{}};return r.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,r=this.render();return this.node=r,e.appendChild(r),r},e.prototype.render=function(){var t=this.stringify();return function(t){var e=!!document.importNode,r=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(r,!0):r}(s(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,r),e}(t)},t.exports=r()}).call(this,r("c8ba"))}}]);