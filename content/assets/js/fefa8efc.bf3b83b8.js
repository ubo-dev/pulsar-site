"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[59179],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=o(a),h=n,f=m["".concat(c,".").concat(h)]||m[h]||s[h]||p;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<p;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},16120:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>l,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const p={id:"client-cpp-2.8.4",title:"Client CPP 2.8.4",sidebar_label:"Client CPP 2.8.4"},i=void 0,l={unversionedId:"versioned/client-cpp-2.8.4",id:"versioned/client-cpp-2.8.4",title:"Client CPP 2.8.4",description:"- improve Expose getLastMessageId in the Reader API 11723",source:"@site/release-notes/versioned/client-cpp-2.8.4.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-2.8.4",permalink:"/release-notes/versioned/client-cpp-2.8.4",draft:!1,tags:[],version:"current",frontMatter:{id:"client-cpp-2.8.4",title:"Client CPP 2.8.4",sidebar_label:"Client CPP 2.8.4"}},c={},o=[],u={toc:o};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[improve][cpp]"," Expose getLastMessageId in the Reader API ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11723"},"11723")),(0,n.kt)("li",{parentName:"ul"},"[fix][cpp]"," Fix hasMessageAvailable returns wrong value for last message ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13883"},"13883")),(0,n.kt)("li",{parentName:"ul"},"[fix][cpp]"," Fix thread safety issue for multi topic consumer  ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14380"},"14380")),(0,n.kt)("li",{parentName:"ul"},"[fix][cpp]"," Fix wrong unit of Access Token Response's ",(0,n.kt)("inlineCode",{parentName:"li"},"expires_in")," field ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14554"},"14554")),(0,n.kt)("li",{parentName:"ul"},"[fix][cpp]"," Handle exception in creating socket when fd limit is reached ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14587"},"14587")),(0,n.kt)("li",{parentName:"ul"},"[cleanup][cpp]"," Add braces around initialization of subobject ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14735"},"14735")),(0,n.kt)("li",{parentName:"ul"},"[fix][cpp]"," Fix producer is never destructed until client is closed ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14797"},"14797")),(0,n.kt)("li",{parentName:"ul"},"[fix][cpp]"," Fix flaky tests about reference count ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14854"},"14854")),(0,n.kt)("li",{parentName:"ul"},"[fix][cpp]"," Fix segmentation fault when creating socket failed ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14834"},"14834")),(0,n.kt)("li",{parentName:"ul"},"[fix][cpp]"," Fix the race condition of connect timeout task ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14823"},"14823")),(0,n.kt)("li",{parentName:"ul"},"[fix][cpp]"," Fix send callback might not be invoked in key-based batching ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14898"},"14898")),(0,n.kt)("li",{parentName:"ul"},"[fix][cpp]"," Fix connection is not closed when broker closes the connection to proxy ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15009"},"15009")),(0,n.kt)("li",{parentName:"ul"},"[fix][cpp]"," Fix single message metadata not set correctly ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15072"},"15072")),(0,n.kt)("li",{parentName:"ul"},"[fix][cpp]"," Fix UnknownError might be returned for a partitioned producer ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15161"},"15161")),(0,n.kt)("li",{parentName:"ul"},"[improve][cpp]"," Remove the flaky and meaningless tests ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15271"},"15271")),(0,n.kt)("li",{parentName:"ul"},"[improve][cpp]"," Wait until event loop terminates when closing the Client ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15316"},"15316")),(0,n.kt)("li",{parentName:"ul"},"[fix][cpp]"," Avoid race condition causing double callback on close ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15508"},"15508")),(0,n.kt)("li",{parentName:"ul"},"[fix][cpp]"," Generate correct well-known OpenID configuration URL ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15928"},"15928")),(0,n.kt)("li",{parentName:"ul"},"[fix][cpp]"," Rename function name: pulsar_producer_configuration_set_crypto_failure_action ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16031"},"16031")),(0,n.kt)("li",{parentName:"ul"},"[cleanup][cpp]"," Clean up C++ client curl configuration ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16064"},"16064")),(0,n.kt)("li",{parentName:"ul"},"[fix][cpp]"," Fix the close of Client might stuck or return a wrong result ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16285"},"16285")),(0,n.kt)("li",{parentName:"ul"},"[improve][cpp]"," Fix flaky C++ ClientTest.testWrongListener ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16510"},"16510"))))}s.isMDXComponent=!0}}]);