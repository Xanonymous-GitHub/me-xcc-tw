(window.webpackJsonp=window.webpackJsonp||[]).push([["Home~31ecd969"],{"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("d3b7");function n(e,t,r,n,o,i,s){try{var a=e[i](s),c=a.value}catch(e){return void r(e)}a.done?t(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var s=e.apply(t,r);function a(e){n(s,o,i,a,c,"next",e)}function c(e){n(s,o,i,a,c,"throw",e)}a(void 0)}))}}},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},"5b33":function(e,t,r){},6785:function(e,t,r){},a814:function(e,t,r){"use strict";var n=r("e017"),o=r.n(n),i=r("21a1"),s=r.n(i),a=new o.a({id:"todo.svg",use:"todo.svg-usage",viewBox:"0 0 100 100",content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" id="todo.svg"><defs></defs><defs><linearGradient id="todo.svg_a" x1="34.9523037%" x2="116.039609%" y1="0%" y2="115.484477%"><stop offset="0%" stop-color="#1700FF" /><stop offset="100%" stop-color="#B10EF1" /></linearGradient><linearGradient id="todo.svg_d" x1="0%" x2="115.291753%" y1="0%" y2="112.548614%"><stop offset="0%" stop-color="#1700FF" /><stop offset="83.2001616%" stop-color="#9E0CF3" /><stop offset="100%" stop-color="#B10EF1" /></linearGradient><filter id="todo.svg_b" width="162.4%" height="162.5%" x="-35.7%" y="-28.3%" filterUnits="objectBoundingBox"><feOffset dx="-3" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="6.5"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.0296505968 0 0 0 0 0.0172602666 0 0 0 0 0.100446429 0 0 0 0.423177083 0"></feColorMatrix></filter><filter id="todo.svg_e" width="203.1%" height="225.8%" x="-51.5%" y="-62.9%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="6.5"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.588937953 0"></feColorMatrix></filter><rect id="todo.svg_c" width="67.2578578" height="67.2008596" x="19.8783454" y="5.46149939" rx="8.99999976" /><path id="todo.svg_f" d="M40.2086259 6.21042694c-.9605844-.96889999-2.1058791-1.45333806-3.435922-1.45333806-1.3300381 0-2.4630185.48443807-3.3989742 1.45333806L16.3049725 23.7622477l-4.2856632-4.397272c-.9359557-.9688953-2.0689361-1.4533381-3.39897423-1.4533381-1.33004238 0-2.47533756.4844428-3.43592197 1.4533381-.93595412.9688952-1.40392414 2.1427301-1.40392414 3.5215429s.46797002 2.5526477 1.40392414 3.5215429l7.6846374 7.9001861c.9605844.9688952 2.1058791 1.4533357 3.435922 1.4533357 1.3300381 0 2.4630185-.4844405 3.3989742-1.4533357l20.5046792-21.0547348c.9359557-.993737 1.4039241-2.1737871 1.4039241-3.54017901 0-1.36638714-.4679684-2.53401163-1.4039241-3.50290685z" /></defs><g fill="none" fill-rule="evenodd"><path fill="url(#todo.svg_a)" d="M20.0219734 15.1240886l54.1609548-.9310311c4.9698284-.0854317 9.0679264 3.8741541 9.1533582 8.8439825a9.00084428 9.00084428 0 01.0013294.1546878v48.8511766c0 4.9102572-3.93578 8.914275-8.8453119 8.9986703l-54.1609548.931031c-4.9698284.0854317-9.0679264-3.8741541-9.1533582-8.8439825a9.00083556 9.00083556 0 01-.0013294-.1546878V24.1227589c0-4.9102573 3.93578-8.9142751 8.8453119-8.9986703z" transform="rotate(156 45.49674793 52.01747856)" /><g transform="rotate(-9 105.7853513 53.4792682)"><use fill="#000" filter="url(#todo.svg_b)" xlink:href="#todo.svg_c" /><use fill="#FBFBFB" xlink:href="#todo.svg_c" /></g><g><path fill="url(#todo.svg_d)" d="M41.1093892 10.5623533c-.9605844-.96889997-2.1058791-1.45333804-3.4359219-1.45333804-1.3300382 0-2.4630185.48443807-3.3989743 1.45333804L17.2057358 28.1141741l-4.2856631-4.3972721c-.9359558-.9688952-2.0689361-1.453338-3.39897427-1.453338-1.33004238 0-2.47533757.4844428-3.43592197 1.453338-.93595412.9688953-1.40392414 2.1427302-1.40392414 3.521543s.46797002 2.5526477 1.40392414 3.5215429l7.68463744 7.9001861c.9605844.9688952 2.1058791 1.4533356 3.4359219 1.4533356 1.3300382 0 2.4630185-.4844404 3.3989743-1.4533356l20.5046791-21.0547348c.9359558-.993737 1.4039242-2.1737871 1.4039242-3.540179 0-1.3663872-.4679684-2.5340117-1.4039242-3.5029069z" opacity=".3" transform="rotate(-16 120.4240348 -70.61928384)" /><path fill="url(#todo.svg_d)" d="M42.0101526 14.2623533c-.9605844-.9689-2.1058791-1.453338-3.435922-1.453338-1.3300381 0-2.4630185.484438-3.3989742 1.453338L18.1064992 31.8141741 13.820836 27.416902c-.9359557-.9688952-2.0689361-1.453338-3.3989742-1.453338-1.33004239 0-2.47533758.4844428-3.43592198 1.453338-.20322805.2103807-.38439184.4304238-.54349152.6601297-.573624.8281902-.86043262 1.7819885-.86043262 2.8614133 0 1.3788128.46797001 2.5526477 1.40392414 3.5215429l7.68463738 7.9001861c.9605844.9688952 2.1058791 1.4533356 3.435922 1.4533356 1.3300381 0 2.4630185-.4844404 3.3989742-1.4533356l20.5046792-21.0547348c.9359557-.993737 1.4039241-2.1737871 1.4039241-3.540179 0-1.3663872-.4679684-2.5340117-1.4039241-3.5029069z" opacity=".2" transform="rotate(-16 121.3247978 -66.91928384)" /><g transform="rotate(-16 119.5232708 -74.97120984)"><use fill="#000" filter="url(#todo.svg_e)" xlink:href="#todo.svg_f" /><use fill="url(#todo.svg_d)" xlink:href="#todo.svg_f" /></g></g></g></symbol>'});s.a.add(a)},a860:function(e,t,r){},bc13:function(e,t,r){"use strict";r.r(t);var n=r("7a23");var o={class:"navbar rounded-pill my-3 navbar-expand-lg navbar-light mx-3"},i=Object(n.h)("div",{class:"container-fluid"},[Object(n.h)("span",{class:"navbar-brand text-white user-select-none fw-bolder fs-lg-4 fs-md-3 fs-sm-2"},"🔥 Xanonymous's Pending Works"),Object(n.h)("a",{href:"https://github.com/Xanonymous-GitHub/me-xcc-tw",rel:"noreferrer noopener",target:"_blank"},[Object(n.h)("svg",{class:"d-svg rounded-circle",viewBox:"0 0 1 1"},[Object(n.h)("use",{"xlink:href":"#github.svg"})])])],-1);r("d610");var s=r("e017"),a=r.n(s),c=r("21a1"),l=r.n(c),u=new a.a({id:"github.svg",use:"github.svg-usage",viewBox:"0 0 512 512",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="github.svg"><rect width="512" height="512" rx="15%" fill="#1B1817" /><path fill="#fff" d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z" /></symbol>'}),d=(l.a.add(u),Object(n.i)({name:"NavBar",setup:function(){}}));d.render=function(e,t,r,s,a,c){return Object(n.r)(),Object(n.e)("nav",o,[i])};var f=d,b={id:"carousel-top",class:"carousel carousel__top slide mx-3 rounded-3 d-inline-block rounded-3 my-3 my-sm-3 shadow","data-bs-ride":"carousel"},h={class:"carousel-indicators"},v={class:"carousel-inner rounded-3"},g={class:"visually-hidden"};r("d81d");var p=r("5530"),m=(r("6785"),Object(n.i)({name:"Carousel",setup:function(){var e=Object(n.v)({imageList:["bFcdQMh","dEKDZaM","JPjHtac"].map((function(e){return"https://i.imgur.com/"+e+".webp"})),carouseControllerConfig:[{text:"Previous",dataBsSlide:"prev"},{text:"Next",dataBsSlide:"next"}]});return Object(n.p)((function(){Object(n.m)((function(){var e=document.querySelectorAll(".carousel-item");e.length>0&&e[0].classList.add("active");var t=document.querySelector(".carousel-indicators").children;t.length>0&&t[0].classList.add("active")}))})),Object(p.a)({},Object(n.C)(e))}}));m.render=function(e,t,r,o,i,s){return Object(n.r)(),Object(n.e)("div",b,[Object(n.h)("ol",h,[(Object(n.r)(!0),Object(n.e)(n.a,null,Object(n.x)(e.imageList,(function(e,t){return Object(n.r)(),Object(n.e)("li",{key:t,"data-bs-slide-to":t,"data-bs-target":"#carousel-top"},null,8,["data-bs-slide-to"])})),128))]),Object(n.h)("div",v,[(Object(n.r)(!0),Object(n.e)(n.a,null,Object(n.x)(e.imageList,(function(e,t){return Object(n.r)(),Object(n.e)("div",{key:t,class:"carousel-item"},[Object(n.h)("img",{src:e,alt:"",class:"d-block w-auto mw-100 mx-auto rounded-3"},null,8,["src"])])})),128))]),(Object(n.r)(!0),Object(n.e)(n.a,null,Object(n.x)(e.carouseControllerConfig,(function(e,t){return Object(n.r)(),Object(n.e)("a",{key:t,class:"carousel-control-"+e.dataBsSlide,"data-bs-slide":e.dataBsSlide,href:"#carousel-top",role:"button",rel:"noreferrer noopener"},[Object(n.h)("span",{class:"carousel-control-"+e.dataBsSlide+"-icon","aria-hidden":"true"},null,2),Object(n.h)("span",g,Object(n.B)(e.text),1)],10,["data-bs-slide"])})),128))])};var w=m,y={class:"my-3 bg-secondary mx-4 h-25 rounded-3",style:{"background-image":'url("https://i.imgur.com/2YhIVkZ.webp")',"background-size":"cover","background-position":"center"}};var O=Object(n.i)({name:"Header",setup:function(){}});O.render=function(e,t,r,o,i,s){return Object(n.r)(),Object(n.e)("header",y)};var x=O,j=(r("9911"),{class:"align-content-center justify-content-center profile-card my-5 d-flex flex-sm-row flex-column flex-wrap mx-auto w-75 mw-100 position-relative"}),k=Object(n.h)("div",{class:"d-flex justify-content-center align-content-center py-3"},[Object(n.h)("img",{id:"avatar",alt:"...",class:"rounded-circle shadow",src:"https://i.imgur.com/UUs5dHp.webp"})],-1),B={class:"px-3 mw-100"},M={class:"canprd-body mw-100"},_=Object(n.h)("h5",{class:"card-title fw-bolder fs-3"},"About Me",-1),S=Object(n.h)("hr",null,null,-1),C=Object(n.h)("p",{class:"card-text fw-bold mw-100 text-wrap"},"Xanonymous TeU Lin 林天佑 108820003",-1),P=Object(n.h)("p",{class:"card-text mw-100 text-wrap justify"}," True mastery of any skill takes a lifetime, and if you are doing your best, you will not have to worry about failure. Jonah Creed is currently enrolled as a third-year student at Birmingham City University and he specializes in Adult Nursing. Like many other adult students, he's required to arrange and meet specific criteria so he can qualify to pursue his chosen healthcare career. Structuring involves giving the right priorities to pathways that enable him to achieve the career path he has chosen. For instance, Jonah has to reach an educational level of level 3 as a requirement and a level 2 minimum for Math and English proficiency. Jonah successfully finished his level 3 Business and Finance, but the University didn't consider because he accomplished this eighteen years ago. ",-1),E={class:"contact d-flex flex-column flex-sm-row flex-wrap rounded-pill my-1 py-1"},G={class:"d-svg rounded-circle",viewBox:"0 0 1 1"};r("bcd2");var A=new a.a({id:"gmail.svg",use:"gmail.svg-usage",viewBox:"0 0 512 512",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="gmail.svg"><rect width="512" height="512" rx="15%" fill="#fff" /><path d="M158 391v-142l-82-63V361q0 30 30 30" fill="#4285f4" /><path d="M 154 248l102 77l102-77v-98l-102 77l-102-77" fill="#ea4335" /><path d="M354 391v-142l82-63V361q0 30-30 30" fill="#34a853" /><path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f" /><path d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04" /></symbol>'}),F=(l.a.add(A),new a.a({id:"telegram.svg",use:"telegram.svg-usage",viewBox:"0 0 512 512",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="telegram.svg"><rect width="512" height="512" rx="15%" fill="#37aee2" /><path fill="#c8daea" d="M199 404c-11 0-10-4-13-14l-32-105 245-144" /><path fill="#a9c9dd" d="M199 404c7 0 11-4 16-8l45-43-56-34" /><path fill="#f6fbfe" d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4" /></symbol>'})),L=(l.a.add(F),new a.a({id:"youtube.svg",use:"youtube.svg-usage",viewBox:"0 0 512 512",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ed1d24" id="youtube.svg"><rect width="512" height="512" rx="15%" /><path d="m427 169c-4-15-17-27-32-31-34-9-239-10-278 0-15 4-28 16-32 31-9 38-10 135 0 174 4 15 17 27 32 31 36 10 241 10 278 0 15-4 28-16 32-31 9-36 9-137 0-174" fill="#fff" /><path d="m220 203v106l93-53" /></symbol>'})),q=(l.a.add(L),new a.a({id:"linkedIn.svg",use:"linkedIn.svg-usage",viewBox:"0 0 512 512",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff" id="linkedIn.svg"><rect width="512" height="512" rx="15%" fill="#0077b5" /><circle cx="142" cy="138" r="37" /><path stroke="#fff" stroke-width="66" d="M244 194v198M142 194v198" /><path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32" /></symbol>'})),z=(l.a.add(q),new a.a({id:"instagram.svg",use:"instagram.svg-usage",viewBox:"0 0 512 512",content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" id="instagram.svg"><rect width="512" height="512" rx="15%" id="instagram.svg_b" /><use fill="url(#instagram.svg_a)" xlink:href="#instagram.svg_b" /><use fill="url(#instagram.svg_c)" xlink:href="#instagram.svg_b" /><radialGradient id="instagram.svg_a" cx=".4" cy="1" r="1"><stop offset=".1" stop-color="#fd5" /><stop offset=".5" stop-color="#ff543e" /><stop offset="1" stop-color="#c837ab" /></radialGradient><linearGradient id="instagram.svg_c" x2=".2" y2="1"><stop offset=".1" stop-color="#3771c8" /><stop offset=".5" stop-color="#60f" stop-opacity="0" /></linearGradient><g fill="none" stroke="#fff" stroke-width="30"><rect width="308" height="308" x="102" y="102" rx="81" /><circle cx="256" cy="256" r="72" /><circle cx="347" cy="165" r="6" /></g></symbol>'})),H=(l.a.add(z),Object(n.i)({name:"Profile",setup:function(){var e=Object(n.v)({contacts:[{title:"Gmail",svg:"#gmail.svg",link:"mailto:trusaidlin@gmail.com"},{title:"Telegram",svg:"#telegram.svg",link:"https://t.me/XanonymousTG"},{title:"Youtube",svg:"#youtube.svg",link:"https://youtube.com/anonymousX_TM"},{title:"LinkedIn",svg:"#linkedIn.svg",link:"https://www.linkedin.com/in/xanonymous"},{title:"Instagram",svg:"#instagram.svg",link:"https://instagram.com/xanonymous_ig"}]});return Object(p.a)({},Object(n.C)(e))}}));H.render=function(e,t,r,o,i,s){return Object(n.r)(),Object(n.e)("div",j,[k,Object(n.h)("div",B,[Object(n.h)("div",M,[_,S,C,P,Object(n.h)("div",E,[(Object(n.r)(!0),Object(n.e)(n.a,null,Object(n.x)(e.contacts,(function(e,t){return Object(n.r)(),Object(n.e)("address",{key:t,class:"fw-bolder mx-sm-3 mx-0 rounded-pill px-1 my-auto"},[(Object(n.r)(),Object(n.e)("svg",G,[Object(n.h)("use",{"xlink:href":e.svg},null,8,["xlink:href"])])),Object(n.h)("a",{href:e.link,class:"ml-1",rel:"noreferrer noopener",target:"_blank"},Object(n.B)(e.title),9,["href"])])})),128))])])])])};var I=H,N={class:"work-view my-3 my-sm-3 mx-sm-auto rounded-3 mx-3 shadow position-relative"},D=Object(n.h)("button",{type:"button",class:"btn text-white position-absolute new-work-btn shadow fw-bolder fs-6 mx-2 my-2"},"+",-1),R=Object(n.h)("h1",{class:"py-3 py-sm-3 my-0"},[Object(n.h)("svg",{class:"d-svg",viewBox:"0 0 1 1"},[Object(n.h)("use",{"xlink:href":"#todo.svg"})]),Object(n.g)(" Works! ")],-1),V=Object(n.h)("hr",{class:"w-75 mx-auto my-0"},null,-1),W={class:"container py-3 px-3 mw-100"},U={class:"row mw-100 position-relative mx-auto justify-content-center"},J=Object(n.h)("div",{class:"card empty-card mw-100 px-0 mx-2 my-2"},[Object(n.h)("div",{class:"card-body"},[Object(n.h)("svg",{class:"d-svg add-svg",viewBox:"0 0 1 1"},[Object(n.h)("use",{"xlink:href":"#add.svg"})])])],-1);r("c740"),r("a434"),r("96cf");var T=r("1da1"),X=(r("a860"),function(){var e=Object(T.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.collection("/works").get();case 2:return e.abrupt("return",e.sent.docs.map((function(e){return Object.assign({id:e.id},e.data())})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Y={class:"card mw-100 px-0 mx-2 my-2 shadow",style:{width:"18rem"}},Z=Object(n.h)("svg",{class:"d-svg position-relative"},[Object(n.h)("use",{"xlink:href":"#cancel.svg"})],-1),K={class:"card-body"},Q={class:"card-title text-dark"},$={class:"card-subtitle text-dark"};var ee=new a.a({id:"cancel.svg",use:"cancel.svg-usage",viewBox:"0 0 455.111 455.111",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.111 455.111" id="cancel.svg"><defs></defs><circle cx="227.556" cy="227.556" r="227.556" fill="#e24c4b" /><path fill="#d1403f" d="M455.111 227.556c0 125.156-102.4 227.556-227.556 227.556-72.533 0-136.533-32.711-177.778-85.333 38.4 31.289 88.178 49.778 142.222 49.778 125.156 0 227.556-102.4 227.556-227.556 0-54.044-18.489-103.822-49.778-142.222 52.623 41.243 85.334 105.243 85.334 177.777z" /><path fill="#fff" d="M331.378 331.378c-8.533 8.533-22.756 8.533-31.289 0l-72.533-72.533-72.533 72.533c-8.533 8.533-22.756 8.533-31.289 0-8.533-8.533-8.533-22.756 0-31.289l72.533-72.533-72.533-72.533c-8.533-8.533-8.533-22.756 0-31.289 8.533-8.533 22.756-8.533 31.289 0l72.533 72.533 72.533-72.533c8.533-8.533 22.756-8.533 31.289 0 8.533 8.533 8.533 22.756 0 31.289l-72.533 72.533 72.533 72.533c8.533 8.533 8.533 22.755 0 31.289z" /></symbol>'}),te=(l.a.add(ee),r("5b33"),Object(n.i)({name:"Work",props:{uid:{type:String,required:!0},thumbnail:{type:String,default:"",required:!0},title:{type:String,default:"",required:!0},subtitle:{type:String,default:"",required:!0}},setup:function(e,t){var r=t.emit;return{remove:function(){r("remove",e.uid)}}}}));te.render=function(e,t,r,o,i,s){return Object(n.r)(),Object(n.e)("div",Y,[Object(n.h)("div",{class:"cancel-button",onClick:t[1]||(t[1]=Object(n.I)((function(){return e.remove&&e.remove.apply(e,arguments)}),["prevent","stop"]))},[Z]),Object(n.h)("img",{src:e.thumbnail,alt:"",class:"card-img-top rounded-3 py-3 px-3"},null,8,["src"]),Object(n.h)("div",K,[Object(n.h)("h5",Q,Object(n.B)(e.title),1),Object(n.h)("p",$,Object(n.B)(e.subtitle),1)])])};var re=te,ne=(r("a814"),new a.a({id:"add.svg",use:"add.svg-usage",viewBox:"0 0 512 512",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="add.svg"><defs></defs><path d="M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.853 256-256S397.167 0 256 0zm0 472.341c-119.275 0-216.341-97.046-216.341-216.341S136.725 39.659 256 39.659 472.341 136.705 472.341 256 375.295 472.341 256 472.341z" /><path d="M355.148 234.386H275.83v-79.318c0-10.946-8.864-19.83-19.83-19.83s-19.83 8.884-19.83 19.83v79.318h-79.318c-10.966 0-19.83 8.884-19.83 19.83s8.864 19.83 19.83 19.83h79.318v79.318c0 10.946 8.864 19.83 19.83 19.83s19.83-8.884 19.83-19.83v-79.318h79.318c10.966 0 19.83-8.884 19.83-19.83s-8.864-19.83-19.83-19.83z" /></symbol>'})),oe=(l.a.add(ne),Object(n.i)({name:"WorkView",components:{WorkCard:re},setup:function(){var e=Object(n.l)("db"),t=Object(n.v)({processing:!1,works:void 0}),r=function(){var e=document.getElementById("empty-card");t.works.length?e.classList.add("d-none"):e.classList.remove("d-none")},o=function(){var n=Object(T.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.processing=!0,n.next=3,X(e);case 3:t.works=n.sent,r(),t.processing=!1;case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(n.p)(Object(T.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:case"end":return e.stop()}}),e)})))),Object(p.a)({remove:function(n){t.processing=!0;try{e.collection("/works").doc(n).delete()}catch(e){return alert(e),void(t.processing=!1)}var o=t.works.findIndex((function(e){return e.id===n}));-1!==o&&(t.works.splice(o,1),r()),t.processing=!1}},Object(n.C)(t))}}));oe.render=function(e,t,r,o,i,s){var a=Object(n.y)("router-link"),c=Object(n.y)("WorkCard");return Object(n.r)(),Object(n.e)("div",N,[Object(n.h)(a,{rel:"noreferrer noopener",target:"_blank",to:"/form"},{default:Object(n.G)((function(){return[D]})),_:1}),R,V,Object(n.h)("div",W,[Object(n.h)("div",U,[(Object(n.r)(!0),Object(n.e)(n.a,null,Object(n.x)(e.works,(function(t,r){return Object(n.r)(),Object(n.e)(c,{key:r,subtitle:t.subtitle,thumbnail:t.thumbnail,title:t.title,uid:t.id,class:"col-3",onRemove:e.remove},null,8,["subtitle","thumbnail","title","uid","onRemove"])})),128)),Object(n.h)(a,{id:"empty-card",class:"d-inline-block w-auto",rel:"noreferrer noopener",target:"_blank",to:"/form"},{default:Object(n.G)((function(){return[J]})),_:1})])])])};var ie=oe,se=Object(n.i)({name:"Home",components:{NavBar:f,Carousel:w,Header:x,Profile:I,WorkView:ie},setup:function(){Object(n.p)((function(){document.dispatchEvent(new Event("app-rendered"))}))}});se.render=function(e,t,r,o,i,s){var a=Object(n.y)("NavBar"),c=Object(n.y)("Header"),l=Object(n.y)("Profile"),u=Object(n.y)("WorkView"),d=Object(n.y)("Carousel");return Object(n.r)(),Object(n.e)(n.a,null,[Object(n.h)(a),Object(n.h)(c),Object(n.h)(l),Object(n.h)(u),Object(n.h)(d)],64)};t.default=se},bcd2:function(e,t,r){},d610:function(e,t,r){},e017:function(e,t,r){(function(t){var r;r=function(){"use strict";var e=function(e){var t=e.id,r=e.viewBox,n=e.content;this.id=t,this.viewBox=r,this.content=n};function r(e,t){return e(t={exports:{}},t.exports),t.exports}e.prototype.stringify=function(){return this.content},e.prototype.toString=function(){return this.stringify()},e.prototype.destroy=function(){var e=this;["id","viewBox","content"].forEach((function(t){return delete e[t]}))},"undefined"!=typeof window?window:void 0!==t||"undefined"!=typeof self&&self;var n=r((function(e,t){e.exports=function(){function e(e){return e&&"object"==typeof e&&"[object RegExp]"!==Object.prototype.toString.call(e)&&"[object Date]"!==Object.prototype.toString.call(e)}function t(t,r){var o;return r&&!0===r.clone&&e(t)?n((o=t,Array.isArray(o)?[]:{}),t,r):t}function r(r,o,i){var s=r.slice();return o.forEach((function(o,a){void 0===s[a]?s[a]=t(o,i):e(o)?s[a]=n(r[a],o,i):-1===r.indexOf(o)&&s.push(t(o,i))})),s}function n(o,i,s){var a=Array.isArray(i),c=(s||{arrayMerge:r}).arrayMerge||r;return a?Array.isArray(o)?c(o,i,s):t(i,s):function(r,o,i){var s={};return e(r)&&Object.keys(r).forEach((function(e){s[e]=t(r[e],i)})),Object.keys(o).forEach((function(a){e(o[a])&&r[a]?s[a]=n(r[a],o[a],i):s[a]=t(o[a],i)})),s}(o,i,s)}return n.all=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("first argument should be an array with at least two elements");return e.reduce((function(e,r){return n(e,r,t)}))},n}()})),o=r((function(e,t){t.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},e.exports=t.default})),i=o.svg,s=o.xlink,a={};a[i.name]=i.uri,a[s.name]=s.uri;var c=function(e,t){return void 0===e&&(e=""),"<svg "+function(e){return Object.keys(e).map((function(t){return t+'="'+e[t].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(n(a,t||{}))+">"+e+"</svg>"};return function(e){function t(){e.apply(this,arguments)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={isMounted:{}};return r.isMounted.get=function(){return!!this.node},t.createFromExistingNode=function(e){return new t({id:e.getAttribute("id"),viewBox:e.getAttribute("viewBox"),content:e.outerHTML})},t.prototype.destroy=function(){this.isMounted&&this.unmount(),e.prototype.destroy.call(this)},t.prototype.mount=function(e){if(this.isMounted)return this.node;var t="string"==typeof e?document.querySelector(e):e,r=this.render();return this.node=r,t.appendChild(r),r},t.prototype.render=function(){var e=this.stringify();return function(e){var t=!!document.importNode,r=(new DOMParser).parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(r,!0):r}(c(e)).childNodes[0]},t.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(t.prototype,r),t}(e)},e.exports=r()}).call(this,r("c8ba"))}}]);