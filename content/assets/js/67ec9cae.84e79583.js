"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[41829],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>m});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},p=Object.keys(e);for(l=0;l<p.length;l++)a=p[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)a=p[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=l.createContext({}),s=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,u=e.parentName,o=n(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,k=c["".concat(u,".").concat(m)]||c[m]||h[m]||p;return a?l.createElement(k,i(i({ref:t},o),{},{components:a})):l.createElement(k,i({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=c;var n={};for(var u in t)hasOwnProperty.call(t,u)&&(n[u]=t[u]);n.originalType=e,n.mdxType="string"==typeof e?e:r,i[1]=n;for(var s=2;s<p;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},57071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>p,metadata:()=>n,toc:()=>s});var l=a(87462),r=(a(67294),a(3905));const p={id:"pulsar-2.8.3",title:"Apache Pulsar 2.8.3",sidebar_label:"Apache Pulsar 2.8.3"},i=void 0,n={unversionedId:"versioned/pulsar-2.8.3",id:"versioned/pulsar-2.8.3",title:"Apache Pulsar 2.8.3",description:"2022-03-21",source:"@site/release-notes/versioned/pulsar-2.8.3.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.8.3",permalink:"/release-notes/versioned/pulsar-2.8.3",draft:!1,tags:[],version:"current",frontMatter:{id:"pulsar-2.8.3",title:"Apache Pulsar 2.8.3",sidebar_label:"Apache Pulsar 2.8.3"}},u={},s=[{value:"2022-03-21",id:"2022-03-21",level:4},{value:"Important Notices",id:"important-notices",level:3},{value:"Security",id:"security",level:3},{value:"Pulsar Admin",id:"pulsar-admin",level:3},{value:"Bookkeeper",id:"bookkeeper",level:3},{value:"Broker",id:"broker",level:3},{value:"Build",id:"build",level:3},{value:"CI",id:"ci",level:3},{value:"Pulsar CLI",id:"pulsar-cli",level:3},{value:"Compaction",id:"compaction",level:3},{value:"Functions",id:"functions",level:3},{value:"Pulsar IO",id:"pulsar-io",level:3},{value:"Key-Shared Subscription",id:"key-shared-subscription",level:3},{value:"Pulsar Metadata",id:"pulsar-metadata",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Pulsar proxy",id:"pulsar-proxy",level:3},{value:"Schema",id:"schema",level:3},{value:"SQL",id:"sql",level:3},{value:"Test",id:"test",level:3},{value:"Tools",id:"tools",level:3},{value:"Topic policy",id:"topic-policy",level:3},{value:"Transaction",id:"transaction",level:3},{value:"Dependency",id:"dependency",level:3}],o={toc:s};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"2022-03-21"},"2022-03-21"),(0,r.kt)("h3",{id:"important-notices"},"Important Notices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix detecting number of NICs in EC2 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14252"},"#14252"),". In the event that Pulsar cannot determine the NIC speed from the host, please set ",(0,r.kt)("inlineCode",{parentName:"li"},"loadBalancerOverrideBrokerNicSpeedGbps"),"."),(0,r.kt)("li",{parentName:"ul"},"Bump BookKeeper 4.14.3 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12906"},"12906")),(0,r.kt)("li",{parentName:"ul"},"Add broker config ",(0,r.kt)("inlineCode",{parentName:"li"},"isAllowAutoUpdateSchema")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12786"},"12786"))),(0,r.kt)("h3",{id:"security"},"Security"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upgrade Postgres driver to 42.2.25 to get rid of CVE-2022-21724 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14119"},"14119")),(0,r.kt)("li",{parentName:"ul"},"Get rid of CVEs in Solr connector ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13822"},"13822")),(0,r.kt)("li",{parentName:"ul"},"Get rid of CVEs in InfluxDB connector ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13821"},"13821")),(0,r.kt)("li",{parentName:"ul"},"Get rid of CVEs in batch-data-generator ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13820"},"13820")),(0,r.kt)("li",{parentName:"ul"},"Get rid of CVEs brought in with aerospike ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13819"},"13819")),(0,r.kt)("li",{parentName:"ul"},"[owasp]"," suppress false positive Avro CVE-2021-43045 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13764"},"13764")),(0,r.kt)("li",{parentName:"ul"},"Upgrade protobuf to 3.16.1 to address CVE-2021-22569 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13695"},"13695")),(0,r.kt)("li",{parentName:"ul"},"Upgrade Jackson to 2.12.6 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13694"},"13694")),(0,r.kt)("li",{parentName:"ul"},"Upgrade Log4j to 2.17.1 to address CVE-2021-44832 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13552"},"13552")),(0,r.kt)("li",{parentName:"ul"},"Cipher params not work in KeyStoreSSLContext ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13322"},"13322")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Remove tenant permission verification when list partitioned-topic ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13138"},"13138")),(0,r.kt)("li",{parentName:"ul"},"Use JDK default security provider when Conscrypt isn't available ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12938"},"12938")),(0,r.kt)("li",{parentName:"ul"},"[Authorization]"," Return if namespace policies are read only ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12514"},"12514"))),(0,r.kt)("h3",{id:"pulsar-admin"},"Pulsar Admin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure policies.is_allow_auto_update_schema not null ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14409"},"14409")),(0,r.kt)("li",{parentName:"ul"},"pulsar admin exposes secret for source and sink ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13059"},"13059")),(0,r.kt)("li",{parentName:"ul"},"Fix deleting tenants with active namespaces with 500. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13020"},"13020")),(0,r.kt)("li",{parentName:"ul"},"[function]"," pulsar admin exposes secrets for function ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12950"},"12950"))),(0,r.kt)("h3",{id:"bookkeeper"},"Bookkeeper"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upgrade BK to 4.14.4 and Grpc to 1.42.1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13714"},"13714")),(0,r.kt)("li",{parentName:"ul"},"Bump BookKeeper 4.14.3 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12906"},"12906"))),(0,r.kt)("h3",{id:"broker"},"Broker"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix the wrong parameter in the log. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14309"},"14309")),(0,r.kt)("li",{parentName:"ul"},"Fix batch ack count is negative issue. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14288"},"14288")),(0,r.kt)("li",{parentName:"ul"},"bug fix: IllegalArgumentException: Invalid period 0.0 to calculate rate ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14280"},"14280")),(0,r.kt)("li",{parentName:"ul"},"Clean up individually deleted messages before the mark-delete position ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14261"},"14261")),(0,r.kt)("li",{parentName:"ul"},'If mark-delete operation fails, mark the cursor as "dirty" ',(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14256"},"14256")),(0,r.kt)("li",{parentName:"ul"},"Fixed detecting number of NICs in EC2 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14252"},"14252")),(0,r.kt)("li",{parentName:"ul"},"Remove log unacked msg. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14246"},"14246")),(0,r.kt)("li",{parentName:"ul"},"Change broker producer fence log level ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14196"},"14196")),(0,r.kt)("li",{parentName:"ul"},"Fix NPE of cumulative ack mode and incorrect unack message count ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14021"},"14021")),(0,r.kt)("li",{parentName:"ul"},"KeyShared stickyHashRange subscription: prevent stuck subscription in case of consumer restart ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14014"},"14014")),(0,r.kt)("li",{parentName:"ul"},"Trim configuration value string which contains blank prefix or suffix ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13984"},"13984")),(0,r.kt)("li",{parentName:"ul"},"waitingCursors potential  heap memory leak  ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13939"},"13939")),(0,r.kt)("li",{parentName:"ul"},"Fix read schema compatibility strategy priority ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13938"},"13938")),(0,r.kt)("li",{parentName:"ul"},"NPE when get isAllowAutoUploadSchema ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13831"},"13831")),(0,r.kt)("li",{parentName:"ul"},"Fix call sync method in async rest API for ",(0,r.kt)("inlineCode",{parentName:"li"},"internalGetSubscriptionsForNonPartitionedTopic")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13745"},"13745")),(0,r.kt)("li",{parentName:"ul"},"Fix the deadlock while using zookeeper thread to create ledger ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13744"},"13744")),(0,r.kt)("li",{parentName:"ul"},"Fix inefficient forEach loop ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13742"},"13742")),(0,r.kt)("li",{parentName:"ul"},"[Issue 13640]"," Fix non persistent topic subscription error. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13685"},"13685")),(0,r.kt)("li",{parentName:"ul"},"Fix invalid rack name cause bookie join rack failed ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13683"},"13683")),(0,r.kt)("li",{parentName:"ul"},"Avoid call sync method in async rest API for force delete subscription  ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13668"},"13668")),(0,r.kt)("li",{parentName:"ul"},"Avoid call sync method in async rest API for delete subscription ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13666"},"13666")),(0,r.kt)("li",{parentName:"ul"},"Fix getInternalStats occasional lack of LeaderInfo ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13656"},"13656")),(0,r.kt)("li",{parentName:"ul"},"Fix reader skipped remaining compacted data during the topic unloading. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13629"},"13629")),(0,r.kt)("li",{parentName:"ul"},"[Issue 13479]"," Fixed internal topic effect by InactiveTopicPolicy. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13611"},"13611")),(0,r.kt)("li",{parentName:"ul"},"Fix bug :Infinity value for CPU or Bandwidth usage ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13609"},"13609")),(0,r.kt)("li",{parentName:"ul"},"Change ",(0,r.kt)("inlineCode",{parentName:"li"},"ContextClassLoader")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"NarClassLoader")," in BrokerInterceptor ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13589"},"13589")),(0,r.kt)("li",{parentName:"ul"},"Fix NPE when unloading namespace bundle ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13571"},"13571")),(0,r.kt)("li",{parentName:"ul"},"update log content  ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13540"},"13540")),(0,r.kt)("li",{parentName:"ul"},"Return message ID from compacted ledger while the compaction cursor reach the end of the topic ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13533"},"13533")),(0,r.kt)("li",{parentName:"ul"},"Change ContextClassLoader to NarClassLoader in AdditionalServlet ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13501"},"13501")),(0,r.kt)("li",{parentName:"ul"},"fix(Auth): Fix multi roles authz cannot handle empty roles case ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13477"},"13477")),(0,r.kt)("li",{parentName:"ul"},"Fix getting the last message-id from an empty compact ledger ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13476"},"13476")),(0,r.kt)("li",{parentName:"ul"},"Fixes the NPE in system topics policies service ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13469"},"13469")),(0,r.kt)("li",{parentName:"ul"},"Fix race conditions in closing producers and consumers ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13428"},"13428")),(0,r.kt)("li",{parentName:"ul"},"Fix batch message ack does not decrease the unacked-msg count. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13383"},"13383")),(0,r.kt)("li",{parentName:"ul"},"[Issue 13194][pulsar-broker]"," Fix dead loop in BacklogQuotaManager.dropBacklogForTimeLimit ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13249"},"13249")),(0,r.kt)("li",{parentName:"ul"},"Modify return result of NamespacesBase#internalGetPublishRate ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13237"},"13237")),(0,r.kt)("li",{parentName:"ul"},"Optimize ManagedLedger Ledger Ownership Check ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13222"},"13222")),(0,r.kt)("li",{parentName:"ul"},"Close old compacted ledger when open new. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13210"},"13210")),(0,r.kt)("li",{parentName:"ul"},"Fix shedding heartbeat ns ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13208"},"13208")),(0,r.kt)("li",{parentName:"ul"},"Fix when deleting topic with NotFoundException, do not return to client. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13203"},"13203")),(0,r.kt)("li",{parentName:"ul"},"Update cursor last active timestamp when reseting cursor  ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13166"},"13166")),(0,r.kt)("li",{parentName:"ul"},"Remove tenant permission verification when list partitioned-topic ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13138"},"13138")),(0,r.kt)("li",{parentName:"ul"},"Use current resourceUsage value as historyUsage when leader change in ThresholdShedder ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13136"},"13136")),(0,r.kt)("li",{parentName:"ul"},"Don't attempt to delete pending ack store unless transactions are enabled ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13041"},"13041")),(0,r.kt)("li",{parentName:"ul"},"Fix NPE in ",(0,r.kt)("inlineCode",{parentName:"li"},"PersistentTopic.checkSubscriptionTypesEnable")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12961"},"12961")),(0,r.kt)("li",{parentName:"ul"},"Fix wrong isEmpty method of ConcurrentOpenLongPairRangeSet ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12953"},"12953")),(0,r.kt)("li",{parentName:"ul"},"Correct param of delete method for v1 topic ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12936"},"12936")),(0,r.kt)("li",{parentName:"ul"},"Clean up the metadata of the non-persistent partitioned topics. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12910"},"12910")),(0,r.kt)("li",{parentName:"ul"},"Fix topic policy listener deleted by mistake. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12904"},"12904")),(0,r.kt)("li",{parentName:"ul"},"Fix deleting tenants with active namespaces with 500. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12848"},"12848")),(0,r.kt)("li",{parentName:"ul"},"[Issue 12757]"," add broker config isAllowAutoUpdateSchema ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12786"},"12786")),(0,r.kt)("li",{parentName:"ul"},"Remove unused listeners if it have no listeners. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12654"},"12654")),(0,r.kt)("li",{parentName:"ul"},"Clean up the metadata of the non-persistent partitioned topics. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12550"},"12550")),(0,r.kt)("li",{parentName:"ul"},"[managedledger]"," NPE on OpAddEntry while ManagedLedger is closing ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12364"},"12364")),(0,r.kt)("li",{parentName:"ul"},"fix issues 11964, deadlock bug when use key_shared mode ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11965"},"11965"))),(0,r.kt)("h3",{id:"build"},"Build"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[C++]"," Fix GCC compilation failure caused by warning macro ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14402"},"14402")),(0,r.kt)("li",{parentName:"ul"},"[C++]"," Fix Version.h not found when CMake binary directory is customized ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13324"},"13324")),(0,r.kt)("li",{parentName:"ul"},"[Issue 9888]"," add python3.9 on manylinux2014 build support ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10954"},"10954"))),(0,r.kt)("h3",{id:"ci"},"CI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upgrade Windows runner os to windows-2022 and generator ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14368"},"14368")),(0,r.kt)("li",{parentName:"ul"},'Replace deprecated "adopt" OpenJDK distribution with "temurin" in GitHub Actions config ',(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12945"},"12945"))),(0,r.kt)("h3",{id:"pulsar-cli"},"Pulsar CLI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Feat(cli): support autorecovery service in pulsar cli ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12985"},"12985")),(0,r.kt)("li",{parentName:"ul"},"[pulsar-perf]"," Write histogram files for consume command ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12569"},"12569"))),(0,r.kt)("h3",{id:"compaction"},"Compaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix reader skipped remaining compacted data during the topic unloading. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13629"},"13629")),(0,r.kt)("li",{parentName:"ul"},"Return message ID from compacted ledger while the compaction cursor reach the end of the topic ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13533"},"13533")),(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Fix getting the last message-id from an empty compact ledger ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13476"},"13476"))),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix(functions): missing runtime set in GoInstanceConfig ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13031"},"13031")),(0,r.kt)("li",{parentName:"ul"},"[function]"," pulsar admin exposes secrets for function ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12950"},"12950"))),(0,r.kt)("h3",{id:"pulsar-io"},"Pulsar IO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pulsar admin exposes secret for source and sink ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13059"},"13059")),(0,r.kt)("li",{parentName:"ul"},"Pass client builder if no service url provided to debezium connector  ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12145"},"12145")),(0,r.kt)("li",{parentName:"ul"},"[Cherry-pick]"," Pass client builder to debezium database history ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12112"},"12112")),(0,r.kt)("li",{parentName:"ul"},"Pass client builder if no service url provided to debezium connector ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14040"},"14040"))),(0,r.kt)("h3",{id:"key-shared-subscription"},"Key-Shared Subscription"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Issue 12885]"," Fix unordered consuming case in Key_Shared subscription. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12890"},"12890"))),(0,r.kt)("h3",{id:"pulsar-metadata"},"Pulsar Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AbstractMetadataStore: invalidate childrenCache correctly when node created ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14177"},"14177"))),(0,r.kt)("h3",{id:"metrics"},"Metrics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix: bug when allAll bucket ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13467"},"13467"))),(0,r.kt)("h3",{id:"pulsar-proxy"},"Pulsar proxy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix port exhaustion and connection issues in Pulsar Proxy ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14078"},"14078")),(0,r.kt)("li",{parentName:"ul"},"Allow config of IO and acceptor threads in proxy ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14054"},"14054")),(0,r.kt)("li",{parentName:"ul"},"Remove unnecessary Pulsar Client usage from Pulsar Proxy ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13836"},"13836"))),(0,r.kt)("h3",{id:"schema"},"Schema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix parse BigDecimal ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14019"},"14019")),(0,r.kt)("li",{parentName:"ul"},"Fix pulsar use json or avro primitive schema. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12886"},"12886"))),(0,r.kt)("h3",{id:"sql"},"SQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support protobuf/timestamp ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13287"},"13287")),(0,r.kt)("li",{parentName:"ul"},"Fix time field use error ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12249"},"12249"))),(0,r.kt)("h3",{id:"test"},"Test"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improved 9 flaky tests.")),(0,r.kt)("h3",{id:"tools"},"Tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix NPE in cmdTopics ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13450"},"13450")),(0,r.kt)("li",{parentName:"ul"},"[pulsar-perf]"," Support listenerThreads configuration. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12892"},"12892")),(0,r.kt)("li",{parentName:"ul"},"[docs]"," Fix doc for pulsar-admin bookies cmd ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12542"},"12542"))),(0,r.kt)("h3",{id:"topic-policy"},"Topic policy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Broker]"," Avoid thread deadlock problem when creating topic policy reader ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13837"},"13837")),(0,r.kt)("li",{parentName:"ul"},"Fixed internal topic effect by InactiveTopicPolicy. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13816"},"13816"))),(0,r.kt)("h3",{id:"transaction"},"Transaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix topicTransactionBuffer handle null snapshot (#12758) ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14510"},"14510")),(0,r.kt)("li",{parentName:"ul"},"Fix transaction system topic create in loop ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12889"},"12889")),(0,r.kt)("li",{parentName:"ul"},"Fix transaction system topic create in loop. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12749"},"12749"))),(0,r.kt)("h3",{id:"dependency"},"Dependency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upgrade Gson version 2.8.6 to 2.8.9 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13610"},"13610")),(0,r.kt)("li",{parentName:"ul"},"Upgrade commons-cli to 1.5.0 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14094"},"14094")),(0,r.kt)("li",{parentName:"ul"},"Bump netty version to 4.1.74.Final ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14257"},"14257"))))}h.isMDXComponent=!0}}]);