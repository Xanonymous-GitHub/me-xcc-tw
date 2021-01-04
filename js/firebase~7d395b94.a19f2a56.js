(window.webpackJsonp=window.webpackJsonp||[]).push([["firebase~7d395b94"],{"7d28":function(t,e,n){"use strict";var r,i=n("cc84"),a=n("ffa6"),s=n("9ab4"),o=n("a8e9"),u=n("9dbb"),c=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),f=new o.b("installations","Installations",c);function l(t){return t instanceof o.c&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t){return"https://firebaseinstallations.googleapis.com/v1/projects/"+t.projectId+"/installations"}function p(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}function b(t,e){return Object(s.b)(this,void 0,void 0,(function(){var n,r;return Object(s.d)(this,(function(i){switch(i.label){case 0:return[4,e.json()];case 1:return n=i.sent(),r=n.error,[2,f.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function v(t){var e=t.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function h(t,e){var n=e.refreshToken,r=v(t);return r.append("Authorization",function(t){return"FIS_v2 "+t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n)),r}function g(t){return Object(s.b)(this,void 0,void 0,(function(){var e;return Object(s.d)(this,(function(n){switch(n.label){case 0:return[4,t()];case 1:return(e=n.sent()).status>=500&&e.status<600?[2,t()]:[2,e]}}))}))}function j(t,e){var n=e.fid;return Object(s.b)(this,void 0,void 0,(function(){var e,r,i,a,o,u;return Object(s.d)(this,(function(s){switch(s.label){case 0:return e=d(t),r=v(t),i={fid:n,authVersion:"FIS_v2",appId:t.appId,sdkVersion:"w:0.4.19"},a={method:"POST",headers:r,body:JSON.stringify(i)},[4,g((function(){return fetch(e,a)}))];case 1:return(o=s.sent()).ok?[4,o.json()]:[3,3];case 2:return u=s.sent(),[2,{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:p(u.authToken)}];case 3:return[4,b("Create Installation",o)];case 4:throw s.sent()}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t){return new Promise((function(e){setTimeout(e,t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var m=/^[cdef][\w-]{21}$/;function O(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var e=function(t){return(e=t,btoa(String.fromCharCode.apply(String,Object(s.f)(e))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);return m.test(e)?e:""}catch(t){return""}}function S(t){return t.appName+"!"+t.appId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var y=new Map;function C(t,e){var n=S(t);k(n,e),function(t,e){var n=I();n&&n.postMessage({key:t,fid:e});q()}(n,e)}function k(t,e){var n,r,i=y.get(t);if(i)try{for(var a=Object(s.h)(i),o=a.next();!o.done;o=a.next()){(0,o.value)(e)}}catch(t){n={error:t}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}}var T=null;function I(){return!T&&"BroadcastChannel"in self&&((T=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(t){k(t.data.key,t.data.fid)}),T}function q(){0===y.size&&T&&(T.close(),T=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P,D="firebase-installations-store",E=null;function N(){return E||(E=Object(u.openDb)("firebase-installations-database",1,(function(t){switch(t.oldVersion){case 0:t.createObjectStore(D)}}))),E}function x(t,e){return Object(s.b)(this,void 0,void 0,(function(){var n,r,i,a,o;return Object(s.d)(this,(function(s){switch(s.label){case 0:return n=S(t),[4,N()];case 1:return r=s.sent(),i=r.transaction(D,"readwrite"),[4,(a=i.objectStore(D)).get(n)];case 2:return o=s.sent(),[4,a.put(e,n)];case 3:return s.sent(),[4,i.complete];case 4:return s.sent(),o&&o.fid===e.fid||C(t,e.fid),[2,e]}}))}))}function A(t){return Object(s.b)(this,void 0,void 0,(function(){var e,n,r;return Object(s.d)(this,(function(i){switch(i.label){case 0:return e=S(t),[4,N()];case 1:return n=i.sent(),[4,(r=n.transaction(D,"readwrite")).objectStore(D).delete(e)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function L(t,e){return Object(s.b)(this,void 0,void 0,(function(){var n,r,i,a,o,u;return Object(s.d)(this,(function(s){switch(s.label){case 0:return n=S(t),[4,N()];case 1:return r=s.sent(),i=r.transaction(D,"readwrite"),[4,(a=i.objectStore(D)).get(n)];case 2:return o=s.sent(),void 0!==(u=e(o))?[3,4]:[4,a.delete(n)];case 3:return s.sent(),[3,6];case 4:return[4,a.put(u,n)];case 5:s.sent(),s.label=6;case 6:return[4,i.complete];case 7:return s.sent(),!u||o&&o.fid===u.fid||C(t,u.fid),[2,u]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t){return Object(s.b)(this,void 0,void 0,(function(){var e,n,r;return Object(s.d)(this,(function(i){switch(i.label){case 0:return[4,L(t,(function(n){var r=function(t){return M(t||{fid:O(),registrationStatus:0})}(n),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){var n=Promise.reject(f.create("app-offline"));return{installationEntry:e,registrationPromise:n}}var r={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=function(t,e){return Object(s.b)(this,void 0,void 0,(function(){var n,r;return Object(s.d)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,j(t,e)];case 1:return n=i.sent(),[2,x(t,n)];case 2:return l(r=i.sent())&&409===r.customData.serverCode?[4,A(t)]:[3,4];case 3:return i.sent(),[3,6];case 4:return[4,x(t,{fid:e.fid,registrationStatus:0})];case 5:i.sent(),i.label=6;case 6:throw r;case 7:return[2]}}))}))}(t,r);return{installationEntry:r,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:V(t)}:{installationEntry:e}}(t,r);return e=i.registrationPromise,i.installationEntry}))];case 1:return""!==(n=i.sent()).fid?[3,3]:(r={},[4,e]);case 2:return[2,(r.installationEntry=i.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:e}]}}))}))}function V(t){return Object(s.b)(this,void 0,void 0,(function(){var e,n,r,i;return Object(s.d)(this,(function(a){switch(a.label){case 0:return[4,$(t)];case 1:e=a.sent(),a.label=2;case 2:return 1!==e.registrationStatus?[3,5]:[4,w(100)];case 3:return a.sent(),[4,$(t)];case 4:return e=a.sent(),[3,2];case 5:return 0!==e.registrationStatus?[3,7]:[4,F(t)];case 6:return n=a.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,e]}}))}))}function $(t){return L(t,(function(t){if(!t)throw f.create("installation-not-found");return M(t)}))}function M(t){return 1===(e=t).registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function J(t,e){var n=t.appConfig,r=t.platformLoggerProvider;return Object(s.b)(this,void 0,void 0,(function(){var t,i,a,o,u,c,f;return Object(s.d)(this,(function(s){switch(s.label){case 0:return t=function(t,e){var n=e.fid;return d(t)+"/"+n+"/authTokens:generate"}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,e),i=h(n,e),(a=r.getImmediate({optional:!0}))&&i.append("x-firebase-client",a.getPlatformInfoString()),o={installation:{sdkVersion:"w:0.4.19"}},u={method:"POST",headers:i,body:JSON.stringify(o)},[4,g((function(){return fetch(t,u)}))];case 1:return(c=s.sent()).ok?[4,c.json()]:[3,3];case 2:return f=s.sent(),[2,p(f)];case 3:return[4,b("Generate Auth Token",c)];case 4:throw s.sent()}}))}))}function K(t,e){return void 0===e&&(e=!1),Object(s.b)(this,void 0,void 0,(function(){var n,r,i;return Object(s.d)(this,(function(a){switch(a.label){case 0:return[4,L(t.appConfig,(function(r){if(!B(r))throw f.create("not-registered");var i=r.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){var e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+36e5}(t)}(i))return r;if(1===i.requestStatus)return n=function(t,e){return Object(s.b)(this,void 0,void 0,(function(){var n,r;return Object(s.d)(this,(function(i){switch(i.label){case 0:return[4,z(t.appConfig)];case 1:n=i.sent(),i.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,w(100)];case 3:return i.sent(),[4,z(t.appConfig)];case 4:return n=i.sent(),[3,2];case 5:return 0===(r=n.authToken).requestStatus?[2,K(t,e)]:[2,r]}}))}))}(t,e),r;if(!navigator.onLine)throw f.create("app-offline");var a=function(t){var e={requestStatus:1,requestTime:Date.now()};return Object(s.a)(Object(s.a)({},t),{authToken:e})}(r);return n=function(t,e){return Object(s.b)(this,void 0,void 0,(function(){var n,r,i;return Object(s.d)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,8]),[4,J(t,e)];case 1:return n=a.sent(),i=Object(s.a)(Object(s.a)({},e),{authToken:n}),[4,x(t.appConfig,i)];case 2:return a.sent(),[2,n];case 3:return!l(r=a.sent())||401!==r.customData.serverCode&&404!==r.customData.serverCode?[3,5]:[4,A(t.appConfig)];case 4:return a.sent(),[3,7];case 5:return i=Object(s.a)(Object(s.a)({},e),{authToken:{requestStatus:0}}),[4,x(t.appConfig,i)];case 6:a.sent(),a.label=7;case 7:throw r;case 8:return[2]}}))}))}(t,a),a}))];case 1:return r=a.sent(),n?[4,n]:[3,3];case 2:return i=a.sent(),[3,4];case 3:i=r.authToken,a.label=4;case 4:return[2,i]}}))}))}function z(t){return L(t,(function(t){if(!B(t))throw f.create("not-registered");var e,n=t.authToken;return 1===(e=n).requestStatus&&e.requestTime+1e4<Date.now()?Object(s.a)(Object(s.a)({},t),{authToken:{requestStatus:0}}):t}))}function B(t){return void 0!==t&&2===t.registrationStatus}function _(t){return Object(s.b)(this,void 0,void 0,(function(){var e;return Object(s.d)(this,(function(n){switch(n.label){case 0:return[4,F(t)];case 1:return(e=n.sent().registrationPromise)?[4,e]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){return Object(s.b)(this,void 0,void 0,(function(){var n,r,i,a;return Object(s.d)(this,(function(s){switch(s.label){case 0:return n=function(t,e){var n=e.fid;return d(t)+"/"+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e),r=h(t,e),i={method:"DELETE",headers:r},[4,g((function(){return fetch(n,i)}))];case 1:return(a=s.sent()).ok?[3,3]:[4,b("Delete Installation",a)];case 2:throw s.sent();case 3:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(t,e){var n=t.appConfig;return function(t,e){I();var n=S(t),r=y.get(n);r||(r=new Set,y.set(n,r)),r.add(e)}(n,e),function(){!function(t,e){var n=S(t),r=y.get(n);r&&(r.delete(e),0===r.size&&y.delete(n),q())}(n,e)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t){return f.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(P=i.a).INTERNAL.registerComponent(new a.a("installations",(function(t){var e=t.getProvider("app").getImmediate(),n={appConfig:function(t){var e,n;if(!t||!t.options)throw G("App Configuration");if(!t.name)throw G("App Name");try{for(var r=Object(s.h)(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var a=i.value;if(!t.options[a])throw G(a)}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),platformLoggerProvider:t.getProvider("platform-logger")};return{app:e,getId:function(){
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(t){return Object(s.b)(this,void 0,void 0,(function(){var e,n,r;return Object(s.d)(this,(function(i){switch(i.label){case 0:return[4,F(t.appConfig)];case 1:return e=i.sent(),n=e.installationEntry,(r=e.registrationPromise)?r.catch(console.error):K(t).catch(console.error),[2,n.fid]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n)},getToken:function(t){return function(t,e){return void 0===e&&(e=!1),Object(s.b)(this,void 0,void 0,(function(){return Object(s.d)(this,(function(n){switch(n.label){case 0:return[4,_(t.appConfig)];case 1:return n.sent(),[4,K(t,e)];case 2:return[2,n.sent().token]}}))}))}(n,t)},delete:function(){return function(t){return Object(s.b)(this,void 0,void 0,(function(){var e,n;return Object(s.d)(this,(function(r){switch(r.label){case 0:return[4,L(e=t.appConfig,(function(t){if(!t||0!==t.registrationStatus)return t}))];case 1:if(!(n=r.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw f.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw f.create("app-offline");case 3:return[4,R(e,n)];case 4:return r.sent(),[4,A(e)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}(n)},onIdChange:function(t){return U(n,t)}}}),"PUBLIC")),P.registerVersion("@firebase/installations","0.4.19")}}]);