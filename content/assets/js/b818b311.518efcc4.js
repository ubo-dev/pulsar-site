"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[32468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30141:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"pulsar-cs-2.3.0",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"},l=void 0,u={unversionedId:"versioned/pulsar-cs-2.3.0",id:"versioned/pulsar-cs-2.3.0",title:"Pulsar DotPulsar",description:"Added",source:"@site/release-notes/versioned/pulsar-cs-2.3.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-cs-2.3.0",permalink:"/release-notes/versioned/pulsar-cs-2.3.0",draft:!1,tags:[],version:"current",frontMatter:{id:"pulsar-cs-2.3.0",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"}},i={},s=[{value:"Added",id:"added",level:2},{value:"Changed",id:"changed",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Metrics (the meter name is 'DotPulsar')",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"dotpulsar.client.count - number of active clients (gauge)"),(0,a.kt)("li",{parentName:"ul"},"dotpulsar.connection.count - number of active connections (gauge)"),(0,a.kt)("li",{parentName:"ul"},"dotpulsar.reader.count - number of active readers (gauge with 'topic' tag)"),(0,a.kt)("li",{parentName:"ul"},"dotpulsar.consumer.count - number of active consumers (gauge with 'topic' tag)"),(0,a.kt)("li",{parentName:"ul"},"dotpulsar.producer.count - number of active producers (gauge with 'topic' tag)"),(0,a.kt)("li",{parentName:"ul"},"dotpulsar.producer.send.duration - Measures the duration for sending a message (histogram with 'topic' tag)"),(0,a.kt)("li",{parentName:"ul"},"dotpulsar.consumer.process.duration - Measures the duration for processing a message (histogram with 'topic' and 'subscription' tags)")))),(0,a.kt)("h2",{id:"changed"},"Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Adding a property to MessageMetadata with a key or value of null will throw an ArgumentNullException")))}p.isMDXComponent=!0}}]);