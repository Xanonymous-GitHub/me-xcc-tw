(window.webpackJsonp=window.webpackJsonp||[]).push([["firebase~ab9d1fb0"],{5643:function(t,e,n){"use strict";var r,i,o,a=n("cc84"),s=(n("7d28"),n("9ab4")),c=n("a8e9"),u=n("abfd"),p=n("ffa6"),f=((r={})["trace started"]="Trace {$traceName} was started before.",r["trace stopped"]="Trace {$traceName} is not running.",r["nonpositive trace startTime"]="Trace {$traceName} startTime should be positive.",r["nonpositive trace duration"]="Trace {$traceName} duration should be positive.",r["no window"]="Window is not available.",r["no app id"]="App id is not available.",r["no project id"]="Project id is not available.",r["no api key"]="Api key is not available.",r["invalid cc log"]="Attempted to queue invalid cc event",r["FB not default"]="Performance can only start when Firebase app instance is the default one.",r["RC response not ok"]="RC response is not ok",r["invalid attribute name"]="Attribute name {$attributeName} is invalid.",r["invalid attribute value"]="Attribute value {$attributeValue} is invalid.",r["invalid custom metric name"]="Custom metric name {$customMetricName} is invalid",r["invalid String merger input"]="Input for String merger is invalid, contact support team to resolve.",r),l=new c.b("performance","Performance",f),g=new u.b("Performance");g.logLevel=u.a.INFO;var m,h=function(){function t(t){if(this.window=t,!t)throw l.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}return t.prototype.getUrl=function(){return this.windowLocation.href.split("?")[0]},t.prototype.mark=function(t){this.performance&&this.performance.mark&&this.performance.mark(t)},t.prototype.measure=function(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)},t.prototype.getEntriesByType=function(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]},t.prototype.getEntriesByName=function(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]},t.prototype.getTimeOrigin=function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)},t.prototype.requiredApisAvailable=function(){return fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled?!!Object(c.w)()||(g.info("IndexedDB is not supported by current browswer"),!1):(g.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)},t.prototype.setupObserver=function(t,e){this.PerformanceObserver&&new this.PerformanceObserver((function(t){for(var n=0,r=t.getEntries();n<r.length;n++){var i=r[n];e(i)}})).observe({entryTypes:[t]})},t.getInstance=function(){return void 0===i&&(i=new t(o)),i},t}();
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
function d(t,e){var n=t.length-e.length;if(n<0||n>1)throw l.create("invalid String merger input");for(var r=[],i=0;i<t.length;i++)r.push(t.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}
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
 */var v,b,_=function(){function t(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=d("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=d("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}return t.prototype.getAppId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId;if(!t)throw l.create("no app id");return t},t.prototype.getProjectId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId;if(!t)throw l.create("no project id");return t},t.prototype.getApiKey=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey;if(!t)throw l.create("no api key");return t},t.prototype.getFlTransportFullUrl=function(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)},t.getInstance=function(){return void 0===m&&(m=new t),m},t}();
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
 */function y(){return v}!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN"}(b||(b={}));var I=["firebase_","google_","ga_"],T=new RegExp("^[a-zA-Z]\\w*$");function w(){switch(h.getInstance().document.visibilityState){case"visible":return b.VISIBLE;case"hidden":return b.HIDDEN;default:return b.UNKNOWN}}function E(){var t=h.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}
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
var A=!0;function S(t){var e=function(){var t=h.getInstance().localStorage;if(!t)return;var e=t.getItem("@firebase/performance/configexpire");if(!(e&&(n=e,Number(n)>Date.now())))return;var n;var r=t.getItem("@firebase/performance/config");if(!r)return;try{return JSON.parse(r)}catch(t){return}}();return e?(M(e),Promise.resolve()):function(t){return(e=_.getInstance().installationsService.getToken(),e.then((function(t){})),e).then((function(e){var n="https://firebaseremoteconfig.googleapis.com/v1/projects/"+_.getInstance().getProjectId()+"/namespaces/fireperf:fetch?key="+_.getInstance().getApiKey(),r=new Request(n,{method:"POST",headers:{Authorization:"FIREBASE_INSTALLATIONS_AUTH "+e},body:JSON.stringify({app_instance_id:t,app_instance_id_token:e,app_id:_.getInstance().getAppId(),app_version:"0.4.5",sdk_version:"0.0.1"})});return fetch(r).then((function(t){if(t.ok)return t.json();throw l.create("RC response not ok")}))})).catch((function(){g.info("Could not fetch config, will use default configs")}));var e;
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
 */}(t).then(M).then((function(t){return function(t){var e=h.getInstance().localStorage;if(!t||!e)return;e.setItem("@firebase/performance/config",JSON.stringify(t)),e.setItem("@firebase/performance/configexpire",String(Date.now()+60*_.getInstance().configTimeToLive*60*1e3))}(t)}),(function(){}))}function M(t){if(!t)return t;var e=_.getInstance(),n=t.entries||{};return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=A,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),n.fpr_log_transport_key&&(e.transportKey=n.fpr_log_transport_key),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=N(e.tracesSamplingRate),e.logNetworkAfterSampling=N(e.networkRequestsSamplingRate),t}function N(t){return Math.random()<=t}
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
 */var k,O=1;function R(){var t;return O=2,k=k||(t=h.getInstance().document,new Promise((function(e){if(t&&"complete"!==t.readyState){var n=function(){"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()}))).then((function(){return(t=_.getInstance().installationsService.getId()).then((function(t){v=t})),t;var t})).then((function(t){return S(t)})).then((function(){return U()}),(function(){return U()}))}function U(){O=3}
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
 */var P,B=3,F=[],j=!1;function C(t){setTimeout((function(){var t,e;if(0!==B)return F.length?(t=F.splice(0,1e3),e=t.map((function(t){return{source_extension_json_proto3:t.message,event_time_ms:String(t.eventTime)}})),void function(t,e){return function(t){var e=_.getInstance().getFlTransportFullUrl();return fetch(e,{method:"POST",body:JSON.stringify(t)})}(t).then((function(t){return t.ok||g.info("Call to Firebase backend failed."),t.json()})).then((function(t){var n=Number(t.nextRequestWaitMillis),r=1e4;isNaN(n)||(r=Math.max(n,r));var i=t.logResponseDetails;Array.isArray(i)&&i.length>0&&"RETRY_REQUEST_LATER"===i[0].responseAction&&(F=Object(s.g)(e,F),g.info("Retry transport request later.")),B=3,C(r)}))}({request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:_.getInstance().logSource,log_event:e},t).catch((function(){F=Object(s.g)(t,F),B--,g.info("Tries left: "+B+"."),C(1e4)}))):C(1e4)}),t)}function D(t){if(!t.eventTime||!t.message)throw l.create("invalid cc log");F=Object(s.g)(F,[t])}function L(t,e){P||(P=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=t.apply(void 0,e);D({message:r,eventTime:Date.now()})}}
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
 */(W)),P(t,e)}function q(t){var e=_.getInstance();!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&h.getInstance().requiredApisAvailable()&&(t.isAuto&&w()!==b.VISIBLE||(3===O?x(t):R().then((function(){return x(t)}),(function(){return x(t)}))))}function x(t){if(y()){var e=_.getInstance();e.loggingEnabled&&e.logTraceAfterSampling&&setTimeout((function(){return L(t,1)}),0)}}function W(t,e){return 0===e?(r={url:(n=t).url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},i={application_info:K(),network_request_metric:r},JSON.stringify(i)):function(t){var e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=t.counters);var n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=n);var r={application_info:K(),trace_metric:e};return JSON.stringify(r)}(t);var n,r,i}function K(){return{google_app_id:_.getInstance().getAppId(),app_instance_id:y(),web_app_info:{sdk_version:"0.4.5",page_url:h.getInstance().getUrl(),service_worker_status:(t=h.getInstance().navigator,"serviceWorker"in t?t.serviceWorker.controller?2:3:1),visibility_state:w(),effective_connection_type:E()},application_process_state:0};var t}
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
 */var V=["_fp","_fcp","_fid"];
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
var J=function(){function t(t,e,n){void 0===e&&(e=!1),this.name=t,this.isAuto=e,this.state=1,this.customAttributes={},this.counters={},this.api=h.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark="FB-PERF-TRACE-START-"+this.randomId+"-"+this.name,this.traceStopMark="FB-PERF-TRACE-STOP-"+this.randomId+"-"+this.name,this.traceMeasure=n||"FB-PERF-TRACE-MEASURE-"+this.randomId+"-"+this.name,n&&this.calculateTraceMetrics())}return t.prototype.start=function(){if(1!==this.state)throw l.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2},t.prototype.stop=function(){if(2!==this.state)throw l.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),q(this)},t.prototype.record=function(t,e,n){if(t<=0)throw l.create("nonpositive trace startTime",{traceName:this.name});if(e<=0)throw l.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=Object(s.a)({},n.attributes)),n&&n.metrics)for(var r=0,i=Object.keys(n.metrics);r<i.length;r++){var o=i[r];isNaN(Number(n.metrics[o]))||(this.counters[o]=Number(Math.floor(n.metrics[o])))}q(this)},t.prototype.incrementMetric=function(t,e){void 0===e&&(e=1),void 0===this.counters[t]?this.putMetric(t,e):this.putMetric(t,this.counters[t]+e)},t.prototype.putMetric=function(t,e){if(!function(t,e){return!(0===t.length||t.length>100)&&(e&&e.startsWith("_wt_")&&V.indexOf(t)>-1||!t.startsWith("_"))}(t,this.name))throw l.create("invalid custom metric name",{customMetricName:t});var n,r;this.counters[t]=(n=e,(r=Math.floor(n))<n&&g.info("Metric value should be an Integer, setting the value as : "+r+"."),r)},t.prototype.getMetric=function(t){return this.counters[t]||0},t.prototype.putAttribute=function(t,e){var n=function(t){return!(0===t.length||t.length>40)&&(!I.some((function(e){return t.startsWith(e)}))&&!!t.match(T))}(t),r=function(t){return 0!==t.length&&t.length<=100}(e);if(n&&r)this.customAttributes[t]=e;else{if(!n)throw l.create("invalid attribute name",{attributeName:t});if(!r)throw l.create("invalid attribute value",{attributeValue:e})}},t.prototype.getAttribute=function(t){return this.customAttributes[t]},t.prototype.removeAttribute=function(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]},t.prototype.getAttributes=function(){return Object(s.a)({},this.customAttributes)},t.prototype.setStartTime=function(t){this.startTimeUs=t},t.prototype.setDuration=function(t){this.durationUs=t},t.prototype.calculateTraceMetrics=function(){var t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))},t.createOobTrace=function(e,n,r){var i=h.getInstance().getUrl();if(i){var o=new t("_wt_"+i,!0),a=Math.floor(1e3*h.getInstance().getTimeOrigin());o.setStartTime(a),e&&e[0]&&(o.setDuration(Math.floor(1e3*e[0].duration)),o.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),o.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),o.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd)));if(n){var s=n.find((function(t){return"first-paint"===t.name}));s&&s.startTime&&o.putMetric("_fp",Math.floor(1e3*s.startTime));var c=n.find((function(t){return"first-contentful-paint"===t.name}));c&&c.startTime&&o.putMetric("_fcp",Math.floor(1e3*c.startTime)),r&&o.putMetric("_fid",Math.floor(1e3*r))}q(o)}},t.createUserTimingTrace=function(e){q(new t(e,!1,e))},t}();
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
 */function $(t){var e=t;if(e&&void 0!==e.responseStart){var n=h.getInstance().getTimeOrigin(),r=Math.floor(1e3*(e.startTime+n)),i=e.responseStart?Math.floor(1e3*(e.responseStart-e.startTime)):void 0,o=Math.floor(1e3*(e.responseEnd-e.startTime));!function(t){var e=_.getInstance();if(e.instrumentationEnabled){var n=t.url,r=e.logEndPointUrl.split("?")[0],i=e.flTransportEndpointUrl.split("?")[0];n!==r&&n!==i&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout((function(){return L(t,0)}),0)}}({url:e.name&&e.name.split("?")[0],responsePayloadBytes:e.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o})}}
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
 */function z(){y()&&(setTimeout((function(){return function(){var t=h.getInstance(),e=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint");if(t.onFirstInputDelay){var r=setTimeout((function(){J.createOobTrace(e,n),r=void 0}),5e3);t.onFirstInputDelay((function(t){r&&(clearTimeout(r),J.createOobTrace(e,n,t))}))}else J.createOobTrace(e,n)}()}),0),setTimeout((function(){return function(){for(var t=h.getInstance(),e=t.getEntriesByType("resource"),n=0,r=e;n<r.length;n++){$(r[n])}t.setupObserver("resource",$)}()}),0),setTimeout((function(){return function(){for(var t=h.getInstance(),e=t.getEntriesByType("measure"),n=0,r=e;n<r.length;n++){H(r[n])}t.setupObserver("measure",H)}()}),0))}function H(t){var e=t.name;"FB-PERF-TRACE-MEASURE"!==e.substring(0,"FB-PERF-TRACE-MEASURE".length)&&J.createUserTimingTrace(e)}
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
 */var G,Q,X=function(){function t(t){this.app=t,h.getInstance().requiredApisAvailable()&&Object(c.N)().then((function(t){t&&(j||(C(5500),j=!0),R().then(z,z))})).catch((function(t){g.info("Environment doesn't support IndexedDB: "+t)}))}return t.prototype.trace=function(t){return new J(t)},Object.defineProperty(t.prototype,"instrumentationEnabled",{get:function(){return _.getInstance().instrumentationEnabled},set:function(t){_.getInstance().instrumentationEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dataCollectionEnabled",{get:function(){return _.getInstance().dataCollectionEnabled},set:function(t){_.getInstance().dataCollectionEnabled=t},enumerable:!1,configurable:!0}),t}();
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
 */G=a.a,Q=function(t,e){if("[DEFAULT]"!==t.name)throw l.create("FB not default");if("undefined"==typeof window)throw l.create("no window");return function(t){o=t}(window),_.getInstance().firebaseAppInstance=t,_.getInstance().installationsService=e,new X(t)},G.INTERNAL.registerComponent(new p.a("performance",(function(t){var e=t.getProvider("app").getImmediate(),n=t.getProvider("installations").getImmediate();return Q(e,n)}),"PUBLIC")),G.registerVersion("@firebase/performance","0.4.5")}}]);