(window.webpackJsonp=window.webpackJsonp||[]).push([["firebase~0f08bdbc"],{8071:function(e,t,n){"use strict";n("7d28");var i,r,s=n("ffa6"),o=n("a8e9"),a=n("9ab4"),c=n("9dbb"),u=n("cc84"),l=((i={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',i["only-available-in-window"]="This method is available in a Window context.",i["only-available-in-sw"]="This method is available in a service worker context.",i["permission-default"]="The notification permission was not granted and dismissed instead.",i["permission-blocked"]="The notification permission was not granted and blocked instead.",i["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",i["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",i["token-subscribe-failed"]="A problem occurred while subscribing the user to FCM: {$errorInfo}",i["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",i["token-unsubscribe-failed"]="A problem occurred while unsubscribing the user from FCM: {$errorInfo}",i["token-update-failed"]="A problem occurred while updating the user from FCM: {$errorInfo}",i["token-update-no-token"]="FCM returned no token when updating the user to push.",i["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",i["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",i["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",i["invalid-vapid-key"]="The public VAPID key must be a string.",i["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",i),d=new o.b("messaging","Messaging",l),p="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4";
/**
 * @license
 * Copyright 2017 Google LLC
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
function f(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,Object(a.f)(t))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function h(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),i=new Uint8Array(n.length),r=0;r<n.length;++r)i[r]=n.charCodeAt(r);return i}
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
 */!function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(r||(r={}));function b(e){return Object(a.b)(this,void 0,void 0,(function(){var t,n,i=this;return Object(a.d)(this,(function(r){switch(r.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=r.sent(),!t.map((function(e){return e.name})).includes("fcm_token_details_db"))return[2,null];r.label=2;case 2:return n=null,[4,Object(c.openDb)("fcm_token_details_db",5,(function(t){return Object(a.b)(i,void 0,void 0,(function(){var i,r,s,o;return Object(a.d)(this,(function(a){switch(a.label){case 0:return t.oldVersion<2?[2]:t.objectStoreNames.contains("fcm_token_object_Store")?[4,(i=t.transaction.objectStore("fcm_token_object_Store")).index("fcmSenderId").get(e)]:[2];case 1:return r=a.sent(),[4,i.clear()];case 2:if(a.sent(),!r)return[2];if(2===t.oldVersion){if(!(s=r).auth||!s.p256dh||!s.endpoint)return[2];n={token:s.fcmToken,createTime:null!==(o=s.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:s.auth,p256dh:s.p256dh,endpoint:s.endpoint,swScope:s.swScope,vapidKey:"string"==typeof s.vapidKey?s.vapidKey:f(s.vapidKey)}}}else(3===t.oldVersion||4===t.oldVersion)&&(n={token:(s=r).fcmToken,createTime:s.createTime,subscriptionOptions:{auth:f(s.auth),p256dh:f(s.p256dh),endpoint:s.endpoint,swScope:s.swScope,vapidKey:f(s.vapidKey)}});return[2]}}))}))}))];case 3:return r.sent().close(),[4,Object(c.deleteDb)("fcm_token_details_db")];case 4:return r.sent(),[4,Object(c.deleteDb)("fcm_vapid_details_db")];case 5:return r.sent(),[4,Object(c.deleteDb)("undefined")];case 6:return r.sent(),[2,g(n)?n:null]}}))}))}function g(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}
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
 */var v="firebase-messaging-store",w=null;function y(){return w||(w=Object(c.openDb)("firebase-messaging-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(v)}}))),w}function m(e){return Object(a.b)(this,void 0,void 0,(function(){var t,n,i;return Object(a.d)(this,(function(r){switch(r.label){case 0:return t=j(e),[4,y()];case 1:return[4,r.sent().transaction(v).objectStore(v).get(t)];case 2:return(n=r.sent())?[2,n]:[3,3];case 3:return[4,b(e.appConfig.senderId)];case 4:return(i=r.sent())?[4,k(e,i)]:[3,6];case 5:return r.sent(),[2,i];case 6:return[2]}}))}))}function k(e,t){return Object(a.b)(this,void 0,void 0,(function(){var n,i,r;return Object(a.d)(this,(function(s){switch(s.label){case 0:return n=j(e),[4,y()];case 1:return i=s.sent(),[4,(r=i.transaction(v,"readwrite")).objectStore(v).put(t,n)];case 2:return s.sent(),[4,r.complete];case 3:return s.sent(),[2,t]}}))}))}function O(e){return Object(a.b)(this,void 0,void 0,(function(){var t,n,i;return Object(a.d)(this,(function(r){switch(r.label){case 0:return t=j(e),[4,y()];case 1:return n=r.sent(),[4,(i=n.transaction(v,"readwrite")).objectStore(v).delete(t)];case 2:return r.sent(),[4,i.complete];case 3:return r.sent(),[2]}}))}))}function j(e){return e.appConfig.appId}
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
 */function S(e,t){return Object(a.b)(this,void 0,void 0,(function(){var n,i,r,s,o,c;return Object(a.d)(this,(function(a){switch(a.label){case 0:return[4,K(e)];case 1:n=a.sent(),i=C(t),r={method:"POST",headers:n,body:JSON.stringify(i)},a.label=2;case 2:return a.trys.push([2,5,,6]),[4,fetch(I(e.appConfig),r)];case 3:return[4,a.sent().json()];case 4:return s=a.sent(),[3,6];case 5:throw o=a.sent(),d.create("token-subscribe-failed",{errorInfo:o});case 6:if(s.error)throw c=s.error.message,d.create("token-subscribe-failed",{errorInfo:c});if(!s.token)throw d.create("token-subscribe-no-token");return[2,s.token]}}))}))}function M(e,t){return Object(a.b)(this,void 0,void 0,(function(){var n,i,r,s,o,c;return Object(a.d)(this,(function(a){switch(a.label){case 0:return[4,K(e)];case 1:n=a.sent(),i=C(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)},a.label=2;case 2:return a.trys.push([2,5,,6]),[4,fetch(I(e.appConfig)+"/"+t.token,r)];case 3:return[4,a.sent().json()];case 4:return s=a.sent(),[3,6];case 5:throw o=a.sent(),d.create("token-update-failed",{errorInfo:o});case 6:if(s.error)throw c=s.error.message,d.create("token-update-failed",{errorInfo:c});if(!s.token)throw d.create("token-update-no-token");return[2,s.token]}}))}))}function T(e,t){return Object(a.b)(this,void 0,void 0,(function(){var n,i,r,s,o;return Object(a.d)(this,(function(a){switch(a.label){case 0:return[4,K(e)];case 1:n=a.sent(),i={method:"DELETE",headers:n},a.label=2;case 2:return a.trys.push([2,5,,6]),[4,fetch(I(e.appConfig)+"/"+t,i)];case 3:return[4,a.sent().json()];case 4:if((r=a.sent()).error)throw s=r.error.message,d.create("token-unsubscribe-failed",{errorInfo:s});return[3,6];case 5:throw o=a.sent(),d.create("token-unsubscribe-failed",{errorInfo:o});case 6:return[2]}}))}))}function I(e){return"https://fcmregistrations.googleapis.com/v1/projects/"+e.projectId+"/registrations"}function K(e){var t=e.appConfig,n=e.installations;return Object(a.b)(this,void 0,void 0,(function(){var e;return Object(a.d)(this,(function(i){switch(i.label){case 0:return[4,n.getToken()];case 1:return e=i.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+e})]}}))}))}function C(e){var t=e.p256dh,n=e.auth,i=e.endpoint,r=e.vapidKey,s={web:{endpoint:i,auth:n,p256dh:t}};return r!==p&&(s.web.applicationPubKey=r),s}
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
 */function D(e,t,n){return Object(a.b)(this,void 0,void 0,(function(){var i,r,s,o;return Object(a.d)(this,(function(a){switch(a.label){case 0:if("granted"!==Notification.permission)throw d.create("permission-blocked");return[4,N(t,n)];case 1:return i=a.sent(),[4,m(e)];case 2:return r=a.sent(),s={vapidKey:n,swScope:t.scope,endpoint:i.endpoint,auth:f(i.getKey("auth")),p256dh:f(i.getKey("p256dh"))},r?[3,3]:[2,E(e,s)];case 3:if(c=r.subscriptionOptions,l=(u=s).vapidKey===c.vapidKey,p=u.endpoint===c.endpoint,h=u.auth===c.auth,b=u.p256dh===c.p256dh,l&&p&&h&&b)return[3,8];a.label=4;case 4:return a.trys.push([4,6,,7]),[4,T(e,r.token)];case 5:return a.sent(),[3,7];case 6:return o=a.sent(),console.warn(o),[3,7];case 7:return[2,E(e,s)];case 8:return Date.now()>=r.createTime+6048e5?[2,P({token:r.token,createTime:Date.now(),subscriptionOptions:s},e,t)]:[2,r.token];case 9:return[2]}var c,u,l,p,h,b;
/**
 * @license
 * Copyright 2020 Google LLC
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
 */}))}))}function _(e,t){return Object(a.b)(this,void 0,void 0,(function(){var n,i;return Object(a.d)(this,(function(r){switch(r.label){case 0:return[4,m(e)];case 1:return(n=r.sent())?[4,T(e,n.token)]:[3,4];case 2:return r.sent(),[4,O(e)];case 3:r.sent(),r.label=4;case 4:return[4,t.pushManager.getSubscription()];case 5:return(i=r.sent())?[2,i.unsubscribe()]:[2,!0]}}))}))}function P(e,t,n){return Object(a.b)(this,void 0,void 0,(function(){var i,r,s;return Object(a.d)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,5]),[4,M(t,e)];case 1:return i=o.sent(),r=Object(a.a)(Object(a.a)({},e),{token:i,createTime:Date.now()}),[4,k(t,r)];case 2:return o.sent(),[2,i];case 3:return s=o.sent(),[4,_(t,n)];case 4:throw o.sent(),s;case 5:return[2]}}))}))}function E(e,t){return Object(a.b)(this,void 0,void 0,(function(){var n,i;return Object(a.d)(this,(function(r){switch(r.label){case 0:return[4,S(e,t)];case 1:return n=r.sent(),i={token:n,createTime:Date.now(),subscriptionOptions:t},[4,k(e,i)];case 2:return r.sent(),[2,i.token]}}))}))}function N(e,t){return Object(a.b)(this,void 0,void 0,(function(){var n;return Object(a.d)(this,(function(i){switch(i.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return(n=i.sent())?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:h(t)})]}}))}))}
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
function R(e){return"object"==typeof e&&!!e&&"google.c.a.c_id"in e}
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
 */function x(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var A=function(){function e(e){var t=this;this.firebaseDependencies=e,this.isOnBackgroundMessageUsed=null,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",(function(e){e.waitUntil(t.onPush(e))})),self.addEventListener("pushsubscriptionchange",(function(e){e.waitUntil(t.onSubChange(e))})),self.addEventListener("notificationclick",(function(e){e.waitUntil(t.onNotificationClick(e))}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(e){if(this.isOnBackgroundMessageUsed=!1,!e||"function"!=typeof e)throw d.create("invalid-bg-handler");this.bgMessageHandler=e},e.prototype.onBackgroundMessage=function(e){var t=this;return this.isOnBackgroundMessageUsed=!0,this.bgMessageHandler=e,function(){t.bgMessageHandler=null}},e.prototype.getToken=function(){var e,t;return Object(a.b)(this,void 0,void 0,(function(){var n;return Object(a.d)(this,(function(i){switch(i.label){case 0:return this.vapidKey?[3,2]:[4,m(this.firebaseDependencies)];case 1:n=i.sent(),this.vapidKey=null!==(t=null===(e=null==n?void 0:n.subscriptionOptions)||void 0===e?void 0:e.vapidKey)&&void 0!==t?t:p,i.label=2;case 2:return[2,D(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return _(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw d.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw d.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw d.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(){throw d.create("only-available-in-window")},e.prototype.onMessage=function(){throw d.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw d.create("only-available-in-window")},e.prototype.onPush=function(e){return Object(a.b)(this,void 0,void 0,(function(){var t,n,i,r;return Object(a.d)(this,(function(s){switch(s.label){case 0:return(t=function(e){var t=e.data;if(!t)return null;try{return t.json()}catch(e){return null}}(e))?[4,V()]:(console.debug("FirebaseMessaging: failed to get parsed MessagePayload from the PushEvent. Skip handling the push."),[2]);case 1:return function(e){return e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))}(n=s.sent())?[2,U(n,t)]:(i=!1,t.notification?[4,B(W(t))]:[3,3]);case 2:s.sent(),i=!0,s.label=3;case 3:return!0===i&&!1===this.isOnBackgroundMessageUsed?[2]:(this.bgMessageHandler&&(r=function(e){var t={from:e.from,collapseKey:e.collapse_key};return function(e,t){if(!t.notification)return;e.notification={};var n=t.notification.title;n&&(e.notification.title=n);var i=t.notification.body;i&&(e.notification.body=i);var r=t.notification.image;r&&(e.notification.image=r)}(t,e),function(e,t){if(!t.data)return;e.data=t.data}(t,e),function(e,t){if(!t.fcmOptions)return;e.fcmOptions={};var n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);var i=t.fcmOptions.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}(t,e),t}(t),"function"==typeof this.bgMessageHandler?this.bgMessageHandler(r):this.bgMessageHandler.next(r)),[4,x(1e3)]);case 4:return s.sent(),[2]}}))}))},e.prototype.onSubChange=function(e){var t,n;return Object(a.b)(this,void 0,void 0,(function(){var i;return Object(a.d)(this,(function(r){switch(r.label){case 0:return e.newSubscription?[3,2]:[4,_(this.firebaseDependencies,self.registration)];case 1:return r.sent(),[2];case 2:return[4,m(this.firebaseDependencies)];case 3:return i=r.sent(),[4,_(this.firebaseDependencies,self.registration)];case 4:return r.sent(),[4,D(this.firebaseDependencies,self.registration,null!==(n=null===(t=null==i?void 0:i.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:p)];case 5:return r.sent(),[2]}}))}))},e.prototype.onNotificationClick=function(e){var t,n;return Object(a.b)(this,void 0,void 0,(function(){var i,s,o,c,u;return Object(a.d)(this,(function(a){switch(a.label){case 0:return(i=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n.FCM_MSG)?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(s=function(e){var t,n,i,r=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(i=e.notification)||void 0===i?void 0:i.click_action;if(r)return r;return R(e.data)?self.location.origin:null}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */(i))?(o=new URL(s,self.location.href),c=new URL(self.location.origin),o.host!==c.host?[2]:[4,H(o)]):[2]):[2];case 1:return(u=a.sent())?[3,4]:[4,self.clients.openWindow(s)];case 2:return u=a.sent(),[4,x(3e3)];case 3:return a.sent(),[3,6];case 4:return[4,u.focus()];case 5:u=a.sent(),a.label=6;case 6:return u?(i.messageType=r.NOTIFICATION_CLICKED,i.isFirebaseMessaging=!0,[2,u.postMessage(i)]):[2]}}))}))},e}();function W(e){var t,n=Object(a.a)({},e.notification);return n.data=((t={}).FCM_MSG=e,t),n}function H(e){return Object(a.b)(this,void 0,void 0,(function(){var t,n,i,r,s,o,c;return Object(a.d)(this,(function(u){switch(u.label){case 0:return[4,V()];case 1:t=u.sent();try{for(n=Object(a.h)(t),i=n.next();!i.done;i=n.next())if(r=i.value,s=new URL(r.url,self.location.href),e.host===s.host)return[2,r]}catch(e){o={error:e}}finally{try{i&&!i.done&&(c=n.return)&&c.call(n)}finally{if(o)throw o.error}}return[2,null]}}))}))}function U(e,t){var n,i;t.isFirebaseMessaging=!0,t.messageType=r.PUSH_RECEIVED;try{for(var s=Object(a.h)(e),o=s.next();!o.done;o=s.next()){o.value.postMessage(t)}}catch(e){n={error:e}}finally{try{o&&!o.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}}function V(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function B(e){var t,n=e.actions,i=Notification.maxActions;return n&&i&&n.length>i&&console.warn("This browser only supports "+i+" actions. The remaining actions will not be displayed."),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}var F=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",(function(e){return t.messageEventListener(e)}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.messageEventListener=function(e){return Object(a.b)(this,void 0,void 0,(function(){var t,n;return Object(a.d)(this,(function(i){switch(i.label){case 0:return(t=e.data).isFirebaseMessaging?(this.onMessageCallback&&t.messageType===r.PUSH_RECEIVED&&("function"==typeof this.onMessageCallback?this.onMessageCallback(function(e){return delete e.messageType,delete e.isFirebaseMessaging,e}
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
 */(Object.assign({},t))):this.onMessageCallback.next(Object.assign({},t))),R(n=t.data)&&"1"===n["google.c.a.e"]?[4,this.logEvent(t.messageType,n)]:[3,2]):[2];case 1:i.sent(),i.label=2;case 2:return[2]}}))}))},e.prototype.getVapidKey=function(){return this.vapidKey},e.prototype.getSwReg=function(){return this.swRegistration},e.prototype.getToken=function(e){return Object(a.b)(this,void 0,void 0,(function(){return Object(a.d)(this,(function(t){switch(t.label){case 0:return"default"!==Notification.permission?[3,2]:[4,Notification.requestPermission()];case 1:t.sent(),t.label=2;case 2:if("granted"!==Notification.permission)throw d.create("permission-blocked");return[4,this.updateVapidKey(null==e?void 0:e.vapidKey)];case 3:return t.sent(),[4,this.updateSwReg(null==e?void 0:e.serviceWorkerRegistration)];case 4:return t.sent(),[2,D(this.firebaseDependencies,this.swRegistration,this.vapidKey)]}}))}))},e.prototype.updateVapidKey=function(e){return Object(a.b)(this,void 0,void 0,(function(){return Object(a.d)(this,(function(t){return e?this.vapidKey=e:this.vapidKey||(this.vapidKey=p),[2]}))}))},e.prototype.updateSwReg=function(e){return Object(a.b)(this,void 0,void 0,(function(){return Object(a.d)(this,(function(t){switch(t.label){case 0:return e||this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:t.sent(),t.label=2;case 2:if(!e&&this.swRegistration)return[2];if(!(e instanceof ServiceWorkerRegistration))throw d.create("invalid-sw-registration");return this.swRegistration=e,[2]}}))}))},e.prototype.registerDefaultSw=function(){return Object(a.b)(this,void 0,void 0,(function(){var e,t;return Object(a.d)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=this,[4,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"})];case 1:return e.swRegistration=n.sent(),this.swRegistration.update().catch((function(){})),[3,3];case 2:throw t=n.sent(),d.create("failed-service-worker-registration",{browserErrorMessage:t.message});case 3:return[2]}}))}))},e.prototype.deleteToken=function(){return Object(a.b)(this,void 0,void 0,(function(){return Object(a.d)(this,(function(e){switch(e.label){case 0:return this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:e.sent(),e.label=2;case 2:return[2,_(this.firebaseDependencies,this.swRegistration)]}}))}))},e.prototype.requestPermission=function(){return Object(a.b)(this,void 0,void 0,(function(){var e;return Object(a.d)(this,(function(t){switch(t.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(e=t.sent()))return[2];throw"denied"===e?d.create("permission-blocked"):d.create("permission-default")}}))}))},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw d.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw d.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw d.create("invalid-sw-registration");if(this.swRegistration)throw d.create("use-sw-after-get-token");this.swRegistration=e},e.prototype.onMessage=function(e){var t=this;return this.onMessageCallback=e,function(){t.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw d.create("only-available-in-sw")},e.prototype.onBackgroundMessage=function(){throw d.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.logEvent=function(e,t){return Object(a.b)(this,void 0,void 0,(function(){var n;return Object(a.d)(this,(function(i){switch(i.label){case 0:return n=function(e){switch(e){case r.NOTIFICATION_CLICKED:return"notification_open";case r.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(e),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return i.sent().logEvent(n,{message_id:t["google.c.a.c_id"],message_name:t["google.c.a.c_l"],message_time:t["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)}),[2]}}))}))},e}();function L(e){return d.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var q={isSupported:G};function G(){return self&&"ServiceWorkerGlobalScope"in self?"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}u.a.INTERNAL.registerComponent(new s.a("messaging",(function(e){var t=e.getProvider("app").getImmediate(),n={app:t,appConfig:function(e){var t,n;if(!e||!e.options)throw L("App Configuration Object");if(!e.name)throw L("App Name");var i=e.options;try{for(var r=Object(a.h)(["projectId","apiKey","appId","messagingSenderId"]),s=r.next();!s.done;s=r.next()){var o=s.value;if(!i[o])throw L(o)}}catch(e){t={error:e}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:i.projectId,apiKey:i.apiKey,appId:i.appId,senderId:i.messagingSenderId}}(t),installations:e.getProvider("installations").getImmediate(),analyticsProvider:e.getProvider("analytics-internal")};if(!G())throw d.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new A(n):new F(n)}),"PUBLIC").setServiceProps(q))}}]);