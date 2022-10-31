"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3536],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(a),h=n,f=m["".concat(p,".").concat(h)]||m[h]||u[h]||i;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},65567:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={id:"client-java-2.5.1",title:"Client Java 2.5.1",sidebar_label:"Client Java 2.5.1"},l=void 0,o={unversionedId:"versioned/client-java-2.5.1",id:"versioned/client-java-2.5.1",title:"Client Java 2.5.1",description:"* Client] Start reader inside batch result in read first message in batch. [#6345",source:"@site/release-notes/versioned/client-java-2.5.1.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.5.1",permalink:"/release-notes/versioned/client-java-2.5.1",draft:!1,tags:[],version:"current",frontMatter:{id:"client-java-2.5.1",title:"Client Java 2.5.1",sidebar_label:"Client Java 2.5.1"}},p={},s=[],c={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[Client]"," Start reader inside batch result in read first message in batch. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6345"},"#6345")),(0,n.kt)("li",{parentName:"ul"},"[Client]"," Stop shade snappy-java in pulsar-client-shaded ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6375"},"#6375")),(0,n.kt)("li",{parentName:"ul"},"[Client]"," MultiTopics discovery is broken due to discovery task scheduled twice instead of pendingBatchReceiveTask ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6407"},"#6407")),(0,n.kt)("li",{parentName:"ul"},"[Client]"," Make SubscriptionMode a member of ConsumerConfigurationData ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6337"},"#6337")),(0,n.kt)("li",{parentName:"ul"},"[Client]"," Should set either start message id or start message from roll back duration. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6392"},"#6392")),(0,n.kt)("li",{parentName:"ul"},"[Client]"," BatchReceivePolicy implements Serializable. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6423"},"#6423")),(0,n.kt)("li",{parentName:"ul"},"[Client]"," Remove duplicate cnx method ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6490"},"#6490")),(0,n.kt)("li",{parentName:"ul"},"[Client]"," Pulsar Java client: Use System.nanoTime() instead of System.currentTimeMillis() to measure elapsed time ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6454"},"#6454")),(0,n.kt)("li",{parentName:"ul"},"[Client]"," Make tests more stable by using JSONAssert equals ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6247"},"#6247")),(0,n.kt)("li",{parentName:"ul"},"[Client]"," make acker in BatchMessageIdImpl transient ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6064"},"#6064"))))}u.isMDXComponent=!0}}]);