(window.webpackJsonp=window.webpackJsonp||[]).push([["Form~31ecd969"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}},"211c":function(t,e,r){"use strict";r.r(e);var n=r("7a23"),o={class:"add-work"},i=Object(n.h)("div",{class:"logo my-3 my-sm-5"},[Object(n.h)("svg",{class:"d-svg",viewBox:"0 0 1 1"},[Object(n.h)("use",{"xlink:href":"#todo.svg"})]),Object(n.h)("h1",{class:"text-white fw-bolder main-title d-inline-block align-middle my-0 user-select-none"},"Works!")],-1),a={class:"work-form px-5 py-5 rounded-3 shadow my-3 text-start"},c=Object(n.h)("svg",{class:"d-svg position-relative mw-100",style:{width:"100px"},viewBox:"0 0 1 1"},[Object(n.h)("use",{"xlink:href":"#image.svg"})],-1),s=Object(n.h)("label",{class:"form-label fw-bolder",for:"title-input"},"*Title",-1),u=Object(n.h)("label",{class:"form-label fw-bolder",for:"sub-title-input"},"*Subtitle",-1);r("caad"),r("d3b7"),r("25f0"),r("498a");var l=r("5530"),f=(r("96cf"),r("1da1")),d=(r("b340"),r("a814"),r("e017")),p=r.n(d),b=r("21a1"),m=r.n(b),g=new p.a({id:"image.svg",use:"image.svg-usage",viewBox:"0 -21 511.98744 511",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -21 511.98744 511" id="image.svg"><defs></defs><path fill="#eceff1" d="M133.320312 373.828125c-34.152343 0-64.53125-21.867187-75.5625-54.421875l-.746093-2.453125c-2.601563-8.621094-3.691407-15.871094-3.691407-23.125V148.375L1.566406 321.132812c-6.65625 25.410157 8.511719 51.753907 33.960938 58.773438L365.40625 468.25c4.117188 1.066406 8.234375 1.578125 12.289062 1.578125 21.246094 0 40.660157-14.101563 46.101563-34.882813l19.21875-61.117187zm0 0" /><path fill="#eceff1" d="M511.988281 48.492188v245.335937c0 26.453125-21.546875 48-48 48H133.320312c-2.132812 0-4.265624-.214844-6.1875-.429687-22.398437-2.769532-39.890624-21.117188-41.597656-43.730469-.214844-1.28125-.214844-2.5625-.214844-3.839844V48.492188c0-26.453126 21.546876-48 48-48h330.667969c26.453125 0 48 21.546874 48 48zm0 0" /><path fill="#ffc107" d="M234.652344 107.160156c0 23.5625-19.101563 42.667969-42.664063 42.667969-23.566406 0-42.667969-19.105469-42.667969-42.667969s19.101563-42.667968 42.667969-42.667968c23.5625 0 42.664063 19.105468 42.664063 42.667968zm0 0" /><path fill="#388e3c" d="M511.988281 233.878906v59.949219c0 26.453125-21.546875 48-48 48H133.320312c-2.132812 0-4.265624-.214844-6.1875-.429687l219.734376-219.730469c14.507812-14.507813 38.398437-14.507813 52.90625 0zm0 0" /><path fill="#4caf50" d="M385.265625 341.828125H133.320312c-2.132812 0-4.265624-.214844-6.1875-.429687-22.398437-2.769532-39.890624-21.117188-41.597656-43.730469l101.332032-101.335938c14.507812-14.503906 38.398437-14.503906 52.90625 0zm0 0" /></symbol>'}),h=(m.a.add(g),r("ff34")),v=r("bc3a"),w=r.n(v),y=function(){var t=Object(f.a)(regeneratorRuntime.mark((function t(e,r){var n,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("file",e),r&&n.append("type",r),t.prev=3,t.next=6,w.a.post("https://asia-northeast1-npc-services.cloudfunctions.net/Image",n,{headers:{"Content-Type":"multipart/form-data"}});case 6:return o=t.sent,i=o.data,t.abrupt("return",i);case 11:return t.prev=11,t.t0=t.catch(3),t.abrupt("return",(a=t.t0)&&a.response&&a.response.data?a.response.data:{statusCode:a.status||502,message:"Unknown Error!"});case 14:case"end":return t.stop()}var a}),t,null,[[3,11]])})));return function(e,r){return t.apply(this,arguments)}}(),O=function(t){return new Promise((function(e,r){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(t){return r(t)}}))},x=function(t,e){if(t&&""!==t){var r=e.querySelector(".picture"),n=r.childNodes[0];r.removeChild(n);var o=document.createElement("img");o.setAttribute("style","\n      width: auto;\n      max-width: 100%;\n      max-height: 200px;\n      position: relative;\n      margin: 0 auto;\n      left: 50%;\n      transform: translateX(-50%);\n    "),o.setAttribute("src",t),o.setAttribute("alt",""),r.appendChild(o)}},j=Object(n.J)("data-v-80261eee");Object(n.u)("data-v-80261eee");var k={class:"position-absolute middle",style:{"z-index":"10000"}},B=Object(n.h)("progress",{class:"pure-material-progress-circular"},null,-1);Object(n.s)();var C=j((function(t,e,r,o,i,a){return Object(n.r)(),Object(n.e)("span",k,[B])})),_=Object(n.i)({name:"CircleProgress"});r("9136");_.render=C,_.__scopeId="data-v-80261eee";var M=_,E=Object(n.i)({name:"Form",components:{CircleProgress:M},setup:function(){var t=Object(n.v)({title:"",subtitle:"",thumbnailUrl:"",thumbnail:void 0,creating:!1,changingImg:!1,formKey:0}),e=Object(n.w)({}),r=Object(n.w)({}),o=Object(n.l)("db"),i=function(){var e=Object(f.a)(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.changingImg=!0,t.thumbnail=r.target.files[0],!c(t.thumbnail)){e.next=13;break}if(!(t.thumbnail.size<10<<20)){e.next=10;break}return e.next=6,O(t.thumbnail);case 6:n=e.sent,x(n,document.getElementById("new-work-form")),e.next=11;break;case 10:alert("file too big!");case 11:e.next=14;break;case 13:alert("Invalid file type!");case 14:t.changingImg=!1;case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=function(){var e=Object(f.a)(regeneratorRuntime.mark((function e(){var r,n,i,a,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.creating=!0,r=t.title.toString().trim(),n=t.title.toString().trim(),i="",a="",!t.thumbnail){e.next=8;break}return e.next=7,s(t.thumbnail);case 7:a=e.sent;case 8:return a&&(i=a),c=Date.now(),e.prev=10,e.next=13,o.collection("/works").doc(c.toString()).set({title:r,subtitle:n,thumbnail:i,createdAt:Object(h.getNewTimeStamp)(new Date)});case 13:alert("✔ Successfully create Work!"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(10),alert(e.t0);case 19:t.creating=!1,u();case 21:case"end":return e.stop()}}),e,null,[[10,16]])})));return function(){return e.apply(this,arguments)}}(),c=function(t){return t&&["image/gif","image/jpeg","image/png"].includes(t.type)},s=function(){var t=Object(f.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e,"webp");case 2:if(r=t.sent,n=r.url){t.next=7;break}return alert("Fail to upload thumbnail!"),t.abrupt("return",null);case 7:return t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){t.title="",t.subtitle="",t.thumbnail=void 0,t.formKey++},d=Object(n.c)((function(){return console.log(!t.thumbnailUrl&&r.value.checkValidity()),!t.thumbnailUrl&&r.value.checkValidity()}));return Object(n.p)((function(){document.dispatchEvent(new Event("app-rendered"))})),Object(l.a)({createWork:a,onFileChanged:i,uploader:e,uploadButtonClicked:function(){e.value.click()},validateThumbnailInputUrl:d,thumbnailInput:r},Object(n.C)(t))}});E.render=function(t,e,r,l,f,d){var p=Object(n.y)("CircleProgress");return Object(n.r)(),Object(n.e)("main",o,[i,Object(n.h)("div",a,[(Object(n.r)(),Object(n.e)("form",{id:"new-work-form",key:t.formKey,class:"w-100 mx-auto position-relative"},[t.creating?(Object(n.r)(),Object(n.e)(p,{key:0})):Object(n.f)("",!0),Object(n.h)("div",{class:[{default:!t.thumbnail,invisible:t.creating},"picture my-3 position-relative px-3 py-3"],style:{height:"200px"},onClick:e[1]||(e[1]=Object(n.I)((function(){return t.uploadButtonClicked&&t.uploadButtonClicked.apply(t,arguments)}),["prevent","stop"]))},[c],2),Object(n.h)("div",{class:[{invisible:t.creating},"mb-3"]},[s,Object(n.H)(Object(n.h)("input",{id:"title-input","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.title=e}),class:"form-control",type:"text"},null,512),[[n.E,t.title]])],2),Object(n.h)("div",{class:[{invisible:t.creating},"mb-3"]},[u,Object(n.H)(Object(n.h)("input",{id:"sub-title-input","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.subtitle=e}),class:"form-control",type:"text"},null,512),[[n.E,t.subtitle]])],2),Object(n.h)("button",{class:[{disabled:t.creating||t.changingImg},"btn btn-primary btn-sm mx-1 my-1 text-nowrap fw-bolder mw-100 overflow-hidden"],type:"submit",onClick:e[4]||(e[4]=Object(n.I)((function(){return t.uploadButtonClicked&&t.uploadButtonClicked.apply(t,arguments)}),["prevent","stop"]))}," Upload img ",2),Object(n.h)("input",{ref:"uploader",accept:"image/jpeg,image/png,image/gif",class:"d-none",type:"file",onChange:e[5]||(e[5]=function(e){return t.onFileChanged(e)})},null,544),Object(n.h)("button",{class:[{disabled:t.creating||!t.title||!t.subtitle},"btn btn-success btn-sm mx-1 my-1 text-nowrap fw-bolder mw-100 overflow-hidden"],type:"submit",onClick:e[6]||(e[6]=Object(n.I)((function(){return t.createWork&&t.createWork.apply(t,arguments)}),["prevent","stop"]))}," Create Work ",2)]))])])};e.default=E},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},7789:function(t,e,r){},9136:function(t,e,r){"use strict";r("7789")},a814:function(t,e,r){"use strict";var n=r("e017"),o=r.n(n),i=r("21a1"),a=r.n(i),c=new o.a({id:"todo.svg",use:"todo.svg-usage",viewBox:"0 0 100 100",content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" id="todo.svg"><defs></defs><defs><linearGradient id="todo.svg_a" x1="34.9523037%" x2="116.039609%" y1="0%" y2="115.484477%"><stop offset="0%" stop-color="#1700FF" /><stop offset="100%" stop-color="#B10EF1" /></linearGradient><linearGradient id="todo.svg_d" x1="0%" x2="115.291753%" y1="0%" y2="112.548614%"><stop offset="0%" stop-color="#1700FF" /><stop offset="83.2001616%" stop-color="#9E0CF3" /><stop offset="100%" stop-color="#B10EF1" /></linearGradient><filter id="todo.svg_b" width="162.4%" height="162.5%" x="-35.7%" y="-28.3%" filterUnits="objectBoundingBox"><feOffset dx="-3" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="6.5"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.0296505968 0 0 0 0 0.0172602666 0 0 0 0 0.100446429 0 0 0 0.423177083 0"></feColorMatrix></filter><filter id="todo.svg_e" width="203.1%" height="225.8%" x="-51.5%" y="-62.9%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="6.5"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.588937953 0"></feColorMatrix></filter><rect id="todo.svg_c" width="67.2578578" height="67.2008596" x="19.8783454" y="5.46149939" rx="8.99999976" /><path id="todo.svg_f" d="M40.2086259 6.21042694c-.9605844-.96889999-2.1058791-1.45333806-3.435922-1.45333806-1.3300381 0-2.4630185.48443807-3.3989742 1.45333806L16.3049725 23.7622477l-4.2856632-4.397272c-.9359557-.9688953-2.0689361-1.4533381-3.39897423-1.4533381-1.33004238 0-2.47533756.4844428-3.43592197 1.4533381-.93595412.9688952-1.40392414 2.1427301-1.40392414 3.5215429s.46797002 2.5526477 1.40392414 3.5215429l7.6846374 7.9001861c.9605844.9688952 2.1058791 1.4533357 3.435922 1.4533357 1.3300381 0 2.4630185-.4844405 3.3989742-1.4533357l20.5046792-21.0547348c.9359557-.993737 1.4039241-2.1737871 1.4039241-3.54017901 0-1.36638714-.4679684-2.53401163-1.4039241-3.50290685z" /></defs><g fill="none" fill-rule="evenodd"><path fill="url(#todo.svg_a)" d="M20.0219734 15.1240886l54.1609548-.9310311c4.9698284-.0854317 9.0679264 3.8741541 9.1533582 8.8439825a9.00084428 9.00084428 0 01.0013294.1546878v48.8511766c0 4.9102572-3.93578 8.914275-8.8453119 8.9986703l-54.1609548.931031c-4.9698284.0854317-9.0679264-3.8741541-9.1533582-8.8439825a9.00083556 9.00083556 0 01-.0013294-.1546878V24.1227589c0-4.9102573 3.93578-8.9142751 8.8453119-8.9986703z" transform="rotate(156 45.49674793 52.01747856)" /><g transform="rotate(-9 105.7853513 53.4792682)"><use fill="#000" filter="url(#todo.svg_b)" xlink:href="#todo.svg_c" /><use fill="#FBFBFB" xlink:href="#todo.svg_c" /></g><g><path fill="url(#todo.svg_d)" d="M41.1093892 10.5623533c-.9605844-.96889997-2.1058791-1.45333804-3.4359219-1.45333804-1.3300382 0-2.4630185.48443807-3.3989743 1.45333804L17.2057358 28.1141741l-4.2856631-4.3972721c-.9359558-.9688952-2.0689361-1.453338-3.39897427-1.453338-1.33004238 0-2.47533757.4844428-3.43592197 1.453338-.93595412.9688953-1.40392414 2.1427302-1.40392414 3.521543s.46797002 2.5526477 1.40392414 3.5215429l7.68463744 7.9001861c.9605844.9688952 2.1058791 1.4533356 3.4359219 1.4533356 1.3300382 0 2.4630185-.4844404 3.3989743-1.4533356l20.5046791-21.0547348c.9359558-.993737 1.4039242-2.1737871 1.4039242-3.540179 0-1.3663872-.4679684-2.5340117-1.4039242-3.5029069z" opacity=".3" transform="rotate(-16 120.4240348 -70.61928384)" /><path fill="url(#todo.svg_d)" d="M42.0101526 14.2623533c-.9605844-.9689-2.1058791-1.453338-3.435922-1.453338-1.3300381 0-2.4630185.484438-3.3989742 1.453338L18.1064992 31.8141741 13.820836 27.416902c-.9359557-.9688952-2.0689361-1.453338-3.3989742-1.453338-1.33004239 0-2.47533758.4844428-3.43592198 1.453338-.20322805.2103807-.38439184.4304238-.54349152.6601297-.573624.8281902-.86043262 1.7819885-.86043262 2.8614133 0 1.3788128.46797001 2.5526477 1.40392414 3.5215429l7.68463738 7.9001861c.9605844.9688952 2.1058791 1.4533356 3.435922 1.4533356 1.3300381 0 2.4630185-.4844404 3.3989742-1.4533356l20.5046792-21.0547348c.9359557-.993737 1.4039241-2.1737871 1.4039241-3.540179 0-1.3663872-.4679684-2.5340117-1.4039241-3.5029069z" opacity=".2" transform="rotate(-16 121.3247978 -66.91928384)" /><g transform="rotate(-16 119.5232708 -74.97120984)"><use fill="#000" filter="url(#todo.svg_e)" xlink:href="#todo.svg_f" /><use fill="url(#todo.svg_d)" xlink:href="#todo.svg_f" /></g></g></g></symbol>'});a.a.add(c)},b340:function(t,e,r){},e017:function(t,e,r){(function(e){var r;r=function(){"use strict";var t=function(t){var e=t.id,r=t.viewBox,n=t.content;this.id=e,this.viewBox=r,this.content=n};function r(t,e){return t(e={exports:{}},e.exports),e.exports}t.prototype.stringify=function(){return this.content},t.prototype.toString=function(){return this.stringify()},t.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(e){return delete t[e]}))},"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var n=r((function(t,e){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(e,r){var o;return r&&!0===r.clone&&t(e)?n((o=e,Array.isArray(o)?[]:{}),e,r):e}function r(r,o,i){var a=r.slice();return o.forEach((function(o,c){void 0===a[c]?a[c]=e(o,i):t(o)?a[c]=n(r[c],o,i):-1===r.indexOf(o)&&a.push(e(o,i))})),a}function n(o,i,a){var c=Array.isArray(i),s=(a||{arrayMerge:r}).arrayMerge||r;return c?Array.isArray(o)?s(o,i,a):e(i,a):function(r,o,i){var a={};return t(r)&&Object.keys(r).forEach((function(t){a[t]=e(r[t],i)})),Object.keys(o).forEach((function(c){t(o[c])&&r[c]?a[c]=n(r[c],o[c],i):a[c]=e(o[c],i)})),a}(o,i,a)}return n.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,r){return n(t,r,e)}))},n}()})),o=r((function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default})),i=o.svg,a=o.xlink,c={};c[i.name]=i.uri,c[a.name]=a.uri;var s=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(n(c,e||{}))+">"+t+"</svg>"};return function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var r={isMounted:{}};return r.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,r=this.render();return this.node=r,e.appendChild(r),r},e.prototype.render=function(){var t=this.stringify();return function(t){var e=!!document.importNode,r=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(r,!0):r}(s(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,r),e}(t)},t.exports=r()}).call(this,r("c8ba"))}}]);