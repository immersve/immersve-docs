"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[3587],{35318:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(27378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),l=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=l(n),h=a,f=p["".concat(u,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(f,o(o({ref:e},c),{},{components:n})):r.createElement(f,o({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s[p]="string"==typeof t?t:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87735:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(25773),a=(n(27378),n(35318));const i={sidebar_position:2,tags:["simulator"]},o="Authorization",s={unversionedId:"guides/simulator/authorization",id:"guides/simulator/authorization",title:"Authorization",description:"An authorization is an initial step in a transaction that checks if funds are available and sets up the approval for the transaction.",source:"@site/docs/guides/simulator/authorization.md",sourceDirName:"guides/simulator",slug:"/guides/simulator/authorization",permalink:"/guides/simulator/authorization",draft:!1,tags:[{label:"simulator",permalink:"/tags/simulator"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["simulator"]},sidebar:"primarySidebar",previous:{title:"Introduction",permalink:"/guides/simulator/introduction"},next:{title:"Clearing Without Auth",permalink:"/guides/simulator/clearing-without-auth"}},u={},l=[],c={toc:l},p="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authorization"},"Authorization"),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"authorization")," is an initial step in a transaction that checks if funds are available and sets up the approval for the transaction.\nAt this point the transaction is initialized, with an initial hold being made on the funds, however no funds are settled with the merchant itself."),(0,a.kt)("p",null,"The amount being supplied as the value for such an authorization cannot exceed the funds initially allocated to the card on creation."),(0,a.kt)("p",null,"When the authorization has succeded, a transaction will show up on the Immersve apps dashboard with a processed date of ",(0,a.kt)("inlineCode",{parentName:"p"},"pending")))}d.isMDXComponent=!0}}]);