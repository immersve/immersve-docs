"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[6239],{35318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:i,o[1]=u;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44043:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=r(25773),i=(r(27378),r(35318));const a={sidebar_position:3,tags:["simulator"]},o="Clearing Without Auth",u={unversionedId:"guides/simulator/clearing-without-auth",id:"guides/simulator/clearing-without-auth",title:"Clearing Without Auth",description:"Instead of authorizing first, a payment can be made by outright creating a clearing. This clearing creates a debit for the account, allowing for reconciliation to be",source:"@site/docs/guides/simulator/clearing-without-auth.md",sourceDirName:"guides/simulator",slug:"/guides/simulator/clearing-without-auth",permalink:"/guides/simulator/clearing-without-auth",draft:!1,tags:[{label:"simulator",permalink:"/tags/simulator"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["simulator"]},sidebar:"primarySidebar",previous:{title:"Authorization",permalink:"/guides/simulator/authorization"},next:{title:"Clearing",permalink:"/guides/simulator/clearing"}},c={},s=[],l={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"clearing-without-auth"},"Clearing Without Auth"),(0,i.kt)("p",null,"Instead of authorizing first, a payment can be made by outright creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"clearing"),". This clearing creates a debit for the account, allowing for reconciliation to be\nexecuted with the merchant. At this point, the transaction is considered to be processed."),(0,i.kt)("p",null,"When this clearing is made successfully, a transaction will show up in the Immersve apps dashboard with a processed date of the current day."))}d.isMDXComponent=!0}}]);