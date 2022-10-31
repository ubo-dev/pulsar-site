"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[80522],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(a),h=n,d=m["".concat(o,".").concat(h)]||m[h]||c[h]||l;return a?r.createElement(d,i(i({ref:t},s),{},{components:a})):r.createElement(d,i({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18274:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={id:"client-java-2.7.1",title:"Client Java 2.7.1",sidebar_label:"Client Java 2.7.1"},i=void 0,p={unversionedId:"versioned/client-java-2.7.1",id:"versioned/client-java-2.7.1",title:"Client Java 2.7.1",description:"- Java] Add original info when publishing message to dead letter topic [#9655",source:"@site/release-notes/versioned/client-java-2.7.1.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.7.1",permalink:"/release-notes/versioned/client-java-2.7.1",draft:!1,tags:[],version:"current",frontMatter:{id:"client-java-2.7.1",title:"Client Java 2.7.1",sidebar_label:"Client Java 2.7.1"}},o={},u=[],s={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[Java]"," Add original info when publishing message to dead letter topic ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9655"},"#9655")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Fix hasMessageAvailable() with empty topic ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9798"},"#9798")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Add BouncyCastleProvider as security provider to prevent NPE ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9601"},"#9601")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Async the DLQ process ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9552"},"#9552")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Fix the partition number not equals expected error ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9446"},"#9446")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Cleanup consumer on multitopic subscribe failure ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9419"},"#9419")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Compression must be applied during deferred schema preparation and enableBatching is enabled ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9396"},"#9396")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Add default implementation of CryptoKeyReader ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9379"},"#9379")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Able to handling messages with multiple listener threads in order for the Key_Shared subscription ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9329"},"#9329")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Fix NPE when MultiTopicsConsumerImpl receives null value messages ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9113"},"#9113")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Fix Unavailable Hash Range Condition ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9041"},"#9041")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Add more information in send timeout exception ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8931"},"#8931")),(0,n.kt)("li",{parentName:"ul"},"[Java]",' GenericJsonReader converts the null value to string "null" ',(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8883"},"#8883")),(0,n.kt)("li",{parentName:"ul"},"[Java]"," Always remove message data size ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8566"},"#8566"))))}c.isMDXComponent=!0}}]);