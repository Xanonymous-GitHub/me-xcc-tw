(window.webpackJsonp=window.webpackJsonp||[]).push([["Form~f71cff67"],{"211c":function(e,t,n){"use strict";n.r(t);var r=n("b8b5"),i={class:"add-work"},o=Object(r.i)("div",{class:"logo my-3 my-sm-5"},[Object(r.i)("svg",{class:"d-svg",viewBox:"0 0 1 1"},[Object(r.i)("use",{"xlink:href":"#todo.svg"})]),Object(r.i)("h1",{class:"text-white fw-bolder main-title d-inline-block align-middle my-0 user-select-none"},"Works!")],-1),a={class:"work-form px-5 py-5 rounded-3 shadow my-3 text-start"},l=Object(r.i)("svg",{class:"d-svg position-relative mw-100",style:{width:"100px"},viewBox:"0 0 1 1"},[Object(r.i)("use",{"xlink:href":"#image.svg"})],-1),s=Object(r.i)("label",{class:"form-label fw-bolder",for:"title-input"},"*Title",-1),c=Object(r.i)("label",{class:"form-label fw-bolder",for:"sub-title-input"},"*Subtitle",-1);var u=n("89c0"),d=n("1811"),f=(n("22d3"),n("e663"),n("d022"),n("57d2"),n("7843"),n("e7dd"),n("ef0f"),n("b340"),n("a814"),n("7682")),p=n.n(f),b=n("a052"),g=n.n(b),m=new p.a({id:"image.svg",use:"image.svg-usage",viewBox:"0 -21 511.98744 511",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 -21 511.98744 511" id="image.svg"><defs></defs><path fill="#eceff1" d="M133.320312 373.828125c-34.152343 0-64.53125-21.867187-75.5625-54.421875l-.746093-2.453125c-2.601563-8.621094-3.691407-15.871094-3.691407-23.125V148.375L1.566406 321.132812c-6.65625 25.410157 8.511719 51.753907 33.960938 58.773438L365.40625 468.25c4.117188 1.066406 8.234375 1.578125 12.289062 1.578125 21.246094 0 40.660157-14.101563 46.101563-34.882813l19.21875-61.117187zm0 0" /><path fill="#eceff1" d="M511.988281 48.492188v245.335937c0 26.453125-21.546875 48-48 48H133.320312c-2.132812 0-4.265624-.214844-6.1875-.429687-22.398437-2.769532-39.890624-21.117188-41.597656-43.730469-.214844-1.28125-.214844-2.5625-.214844-3.839844V48.492188c0-26.453126 21.546876-48 48-48h330.667969c26.453125 0 48 21.546874 48 48zm0 0" /><path fill="#ffc107" d="M234.652344 107.160156c0 23.5625-19.101563 42.667969-42.664063 42.667969-23.566406 0-42.667969-19.105469-42.667969-42.667969s19.101563-42.667968 42.667969-42.667968c23.5625 0 42.664063 19.105468 42.664063 42.667968zm0 0" /><path fill="#388e3c" d="M511.988281 233.878906v59.949219c0 26.453125-21.546875 48-48 48H133.320312c-2.132812 0-4.265624-.214844-6.1875-.429687l219.734376-219.730469c14.507812-14.507813 38.398437-14.507813 52.90625 0zm0 0" /><path fill="#4caf50" d="M385.265625 341.828125H133.320312c-2.132812 0-4.265624-.214844-6.1875-.429687-22.398437-2.769532-39.890624-21.117188-41.597656-43.730469l101.332032-101.335938c14.507812-14.503906 38.398437-14.503906 52.90625 0zm0 0" /></symbol>'}),h=(g.a.add(m),n("ff34")),v=n("3e23"),w=n.n(v),O=n("5104"),x=function(){var e=Object(d.a)(regeneratorRuntime.mark((function e(t,n){var r,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("file",t),n&&r.append("type",n),e.prev=3,e.next=6,w.a.post("https://asia-northeast1-npc-services.cloudfunctions.net/Image",r,{headers:{"Content-Type":"multipart/form-data"}});case 6:return i=e.sent,o=i.data,e.abrupt("return",o);case 11:return e.prev=11,e.t0=e.catch(3),e.abrupt("return",Object(O.a)(e.t0));case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t,n){return e.apply(this,arguments)}}(),j=function(e,t){if(e&&""!==e){var n=t.querySelector(".picture"),r=n.childNodes[0];n.removeChild(r);var i=document.createElement("img");i.setAttribute("style","\n      width: auto;\n      max-width: 100%;\n      height: auto;\n      max-height: 100%;\n      position: relative;\n      margin: 0 auto;\n      left: 50%;\n      transform: translateX(-50%);\n    "),i.setAttribute("src",e),i.setAttribute("alt",""),n.appendChild(i)}},y=function(e){return new Promise((function(t,n){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return t(r.result)},r.onerror=function(e){return n(e)}}))},k=Object(r.k)({name:"Form",components:{CircleProgress:Object(r.j)((function(){return n.e("chunk-23abe7ed").then(n.bind(null,"c9f7"))})),Done:Object(r.j)((function(){return n.e("chunk-22c1f610").then(n.bind(null,"c48c"))}))},setup:function(){var e=Object(r.x)({title:"",subtitle:"",thumbnailUrl:"",thumbnail:void 0,creating:!1,changingImg:!1,formKey:0,progressMsg:"",done:!1}),t=Object(r.y)({}),n=Object(r.y)({}),i=Object(r.n)("db"),o=function(){var t=Object(d.a)(regeneratorRuntime.mark((function t(n){var r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.changingImg=!0,r=n.target.files[0],!l(r)){t.next=14;break}if(!(r.size<10<<20)){t.next=11;break}return e.thumbnail=r,t.next=7,y(e.thumbnail);case 7:i=t.sent,j(i,document.getElementById("new-work-form")),t.next=12;break;case 11:alert("file too big!");case 12:t.next=15;break;case 14:alert("Invalid file type!");case 15:e.changingImg=!1;case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a=function(){var t=Object(d.a)(regeneratorRuntime.mark((function t(){var n,r,o,a,l,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.creating=!0,n=e.title.toString().trim(),r=e.subtitle.toString().trim(),o="start",!n||!r){t.next=25;break}if(a="",l="",!e.thumbnail){t.next=11;break}return e.progressMsg="uploading image...",t.next=10,s(e.thumbnail);case 10:l=t.sent;case 11:return l&&(a=l),u=Date.now(),t.prev=13,e.progressMsg="creating work...",t.next=17,i.collection("/works").doc(u.toString()).set({title:n,subtitle:r,thumbnail:a,createdAt:Object(h.getNewTimeStamp)(new Date)});case 17:o="done",t.next=23;break;case 20:t.prev=20,t.t0=t.catch(13),alert(t.t0);case 23:t.next=26;break;case 25:o="inputErr";case 26:if("done"!==o){t.next=31;break}return e.done=!0,document.querySelector(".done").classList.add("drawn"),t.next=31,new Promise((function(e){return setTimeout((function(){return e()}),3e3)}));case 31:e.creating=!1,"inputErr"===o?alert("please provide title and subtitle!!"):c();case 33:case"end":return t.stop()}}),t,null,[[13,20]])})));return function(){return t.apply(this,arguments)}}(),l=function(e){return e&&["image/gif","image/jpeg","image/png"].includes(e.type)},s=function(){var e=Object(d.a)(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t,"webp");case 2:if(n=e.sent,r=n.url){e.next=7;break}return alert("Fail to upload thumbnail!"),e.abrupt("return",null);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){e.title="",e.subtitle="",e.thumbnail=void 0,e.formKey++,e.done=!1},f=Object(r.c)((function(){return console.log(!e.thumbnailUrl&&n.value.checkValidity()),!e.thumbnailUrl&&n.value.checkValidity()}));return Object(r.r)((function(){document.dispatchEvent(new Event("app-rendered"))})),Object(u.a)({createWork:a,onFileChanged:o,uploader:t,uploadButtonClicked:function(){t.value.click()},validateThumbnailInputUrl:f,thumbnailInput:n,cancelUploadImg:function(){e.thumbnail=void 0,e.formKey++}},Object(r.E)(e))}});k.render=function(e,t,n,u,d,f){var p=Object(r.A)("CircleProgress"),b=Object(r.A)("Done");return Object(r.t)(),Object(r.e)("main",i,[o,Object(r.i)("div",a,[(Object(r.t)(),Object(r.e)("form",{id:"new-work-form",key:e.formKey,class:"w-100 mx-auto position-relative"},[e.thumbnail&&!e.creating?(Object(r.t)(),Object(r.e)("button",{key:0,class:"btn btn-danger position-absolute cancel-upload shadow rounded-circle",type:"button",onClick:t[1]||(t[1]=Object(r.M)((function(){return e.cancelUploadImg&&e.cancelUploadImg.apply(e,arguments)}),["prevent","stop"]))},"× ")):Object(r.f)("",!0),e.creating&&!e.done?(Object(r.t)(),Object(r.e)(p,{key:1,msg:e.progressMsg},null,8,["msg"])):Object(r.f)("",!0),Object(r.L)(Object(r.i)(b,null,null,512),[[r.H,e.creating]]),Object(r.i)("div",{class:[{default:!e.thumbnail,invisible:e.creating},"picture my-3 position-relative px-3 py-3"],style:{height:"200px"},onClick:t[2]||(t[2]=Object(r.M)((function(){return e.uploadButtonClicked&&e.uploadButtonClicked.apply(e,arguments)}),["prevent","stop"]))},[l],2),Object(r.i)("div",{class:[{invisible:e.creating},"mb-3"]},[s,Object(r.L)(Object(r.i)("input",{id:"title-input","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.title=t}),class:"form-control",type:"text"},null,512),[[r.G,e.title]])],2),Object(r.i)("div",{class:[{invisible:e.creating},"mb-3"]},[c,Object(r.L)(Object(r.i)("input",{id:"sub-title-input","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.subtitle=t}),class:"form-control",type:"text"},null,512),[[r.G,e.subtitle]])],2),Object(r.i)("button",{class:[{disabled:e.creating||!e.title||!e.subtitle},"btn btn-success btn-sm mx-1 my-1 text-nowrap fw-bolder mw-100 overflow-hidden"],autofocus:"",type:"submit",onClick:t[5]||(t[5]=Object(r.M)((function(){return e.createWork&&e.createWork.apply(e,arguments)}),["prevent","stop"]))}," Create Work ",2),Object(r.i)("button",{class:[{disabled:e.creating||e.changingImg},"btn btn-primary btn-sm mx-1 my-1 text-nowrap fw-bolder mw-100 overflow-hidden"],type:"submit",onClick:t[6]||(t[6]=Object(r.M)((function(){return e.uploadButtonClicked&&e.uploadButtonClicked.apply(e,arguments)}),["prevent","stop"]))},Object(r.D)(e.thumbnail?"Alter":"Upload")+" img ",3),Object(r.i)("input",{ref:"uploader",accept:"image/jpeg,image/png,image/gif",class:"d-none",type:"file",onChange:t[7]||(t[7]=function(t){return e.onFileChanged(t)})},null,544)]))])])};t.default=k},5104:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return e&&e.response&&e.response.data?e.response.data:{statusCode:e.status||502,message:"Unknown Error!"}}},a814:function(e,t,n){"use strict";var r=n("7682"),i=n.n(r),o=n("a052"),a=n.n(o),l=new i.a({id:"todo.svg",use:"todo.svg-usage",viewBox:"0 0 100 100",content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" id="todo.svg"><defs></defs><defs><linearGradient id="todo.svg_a" x1="34.9523037%" x2="116.039609%" y1="0%" y2="115.484477%"><stop offset="0%" stop-color="#1700FF" /><stop offset="100%" stop-color="#B10EF1" /></linearGradient><linearGradient id="todo.svg_d" x1="0%" x2="115.291753%" y1="0%" y2="112.548614%"><stop offset="0%" stop-color="#1700FF" /><stop offset="83.2001616%" stop-color="#9E0CF3" /><stop offset="100%" stop-color="#B10EF1" /></linearGradient><filter id="todo.svg_b" width="162.4%" height="162.5%" x="-35.7%" y="-28.3%" filterUnits="objectBoundingBox"><feOffset dx="-3" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="6.5"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.0296505968 0 0 0 0 0.0172602666 0 0 0 0 0.100446429 0 0 0 0.423177083 0"></feColorMatrix></filter><filter id="todo.svg_e" width="203.1%" height="225.8%" x="-51.5%" y="-62.9%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="6.5"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.588937953 0"></feColorMatrix></filter><rect id="todo.svg_c" width="67.2578578" height="67.2008596" x="19.8783454" y="5.46149939" rx="8.99999976" /><path id="todo.svg_f" d="M40.2086259 6.21042694c-.9605844-.96889999-2.1058791-1.45333806-3.435922-1.45333806-1.3300381 0-2.4630185.48443807-3.3989742 1.45333806L16.3049725 23.7622477l-4.2856632-4.397272c-.9359557-.9688953-2.0689361-1.4533381-3.39897423-1.4533381-1.33004238 0-2.47533756.4844428-3.43592197 1.4533381-.93595412.9688952-1.40392414 2.1427301-1.40392414 3.5215429s.46797002 2.5526477 1.40392414 3.5215429l7.6846374 7.9001861c.9605844.9688952 2.1058791 1.4533357 3.435922 1.4533357 1.3300381 0 2.4630185-.4844405 3.3989742-1.4533357l20.5046792-21.0547348c.9359557-.993737 1.4039241-2.1737871 1.4039241-3.54017901 0-1.36638714-.4679684-2.53401163-1.4039241-3.50290685z" /></defs><g fill="none" fill-rule="evenodd"><path fill="url(#todo.svg_a)" d="M20.0219734 15.1240886l54.1609548-.9310311c4.9698284-.0854317 9.0679264 3.8741541 9.1533582 8.8439825a9.00084428 9.00084428 0 01.0013294.1546878v48.8511766c0 4.9102572-3.93578 8.914275-8.8453119 8.9986703l-54.1609548.931031c-4.9698284.0854317-9.0679264-3.8741541-9.1533582-8.8439825a9.00083556 9.00083556 0 01-.0013294-.1546878V24.1227589c0-4.9102573 3.93578-8.9142751 8.8453119-8.9986703z" transform="rotate(156 45.49674793 52.01747856)" /><g transform="rotate(-9 105.7853513 53.4792682)"><use fill="#000" filter="url(#todo.svg_b)" xlink:href="#todo.svg_c" /><use fill="#FBFBFB" xlink:href="#todo.svg_c" /></g><g><path fill="url(#todo.svg_d)" d="M41.1093892 10.5623533c-.9605844-.96889997-2.1058791-1.45333804-3.4359219-1.45333804-1.3300382 0-2.4630185.48443807-3.3989743 1.45333804L17.2057358 28.1141741l-4.2856631-4.3972721c-.9359558-.9688952-2.0689361-1.453338-3.39897427-1.453338-1.33004238 0-2.47533757.4844428-3.43592197 1.453338-.93595412.9688953-1.40392414 2.1427302-1.40392414 3.521543s.46797002 2.5526477 1.40392414 3.5215429l7.68463744 7.9001861c.9605844.9688952 2.1058791 1.4533356 3.4359219 1.4533356 1.3300382 0 2.4630185-.4844404 3.3989743-1.4533356l20.5046791-21.0547348c.9359558-.993737 1.4039242-2.1737871 1.4039242-3.540179 0-1.3663872-.4679684-2.5340117-1.4039242-3.5029069z" opacity=".3" transform="rotate(-16 120.4240348 -70.61928384)" /><path fill="url(#todo.svg_d)" d="M42.0101526 14.2623533c-.9605844-.9689-2.1058791-1.453338-3.435922-1.453338-1.3300381 0-2.4630185.484438-3.3989742 1.453338L18.1064992 31.8141741 13.820836 27.416902c-.9359557-.9688952-2.0689361-1.453338-3.3989742-1.453338-1.33004239 0-2.47533758.4844428-3.43592198 1.453338-.20322805.2103807-.38439184.4304238-.54349152.6601297-.573624.8281902-.86043262 1.7819885-.86043262 2.8614133 0 1.3788128.46797001 2.5526477 1.40392414 3.5215429l7.68463738 7.9001861c.9605844.9688952 2.1058791 1.4533356 3.435922 1.4533356 1.3300381 0 2.4630185-.4844404 3.3989742-1.4533356l20.5046792-21.0547348c.9359557-.993737 1.4039241-2.1737871 1.4039241-3.540179 0-1.3663872-.4679684-2.5340117-1.4039241-3.5029069z" opacity=".2" transform="rotate(-16 121.3247978 -66.91928384)" /><g transform="rotate(-16 119.5232708 -74.97120984)"><use fill="#000" filter="url(#todo.svg_e)" xlink:href="#todo.svg_f" /><use fill="url(#todo.svg_d)" xlink:href="#todo.svg_f" /></g></g></g></symbol>'});a.a.add(l)},b340:function(e,t,n){}}]);