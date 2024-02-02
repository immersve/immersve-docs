"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[7803],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(a),f=n,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return a?r.createElement(m,o(o({ref:t},l),{},{components:a})):r.createElement(m,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},22444:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={sidebar_position:7,tag:["custodial"]},o="Custodial Wallets",s={unversionedId:"guides/custodial-wallets",id:"guides/custodial-wallets",title:"Custodial Wallets",description:"Organizations acting as custodians of customer funds, such as custodial exchanges and wallet providers, may wish to support card issuance and funding flows for their users. The partnered custodial organization's overarching account may be pre-funded and discrete card transaction authorization determinations made by the the partner.",source:"@site/docs/guides/custodial-wallets.md",sourceDirName:"guides",slug:"/guides/custodial-wallets",permalink:"/guides/custodial-wallets",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,tag:["custodial"]},sidebar:"primarySidebar",previous:{title:"Non-Custodial Wallets",permalink:"/guides/non-custodial-wallets"},next:{title:"Reports",permalink:"/category/reports"}},u={},c=[],l={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"custodial-wallets"},"Custodial Wallets"),(0,n.kt)("p",null,"Organizations acting as custodians of customer funds, such as custodial exchanges and wallet providers, may wish to support card issuance and funding flows for their users. The partnered custodial organization's overarching account may be pre-funded and discrete card transaction authorization determinations made by the the partner."),(0,n.kt)("p",null,"The below guides are available to assist in your integration: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Your application will authenticate against the API as described in the ",(0,n.kt)("a",{parentName:"li",href:"/guides/authentication#api-key-authentication"},"API Authentication Guide"),". End-user authentication is handled by your application and is outside of Immersve's purview."),(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("a",{parentName:"li",href:"/guides/card-funding"},"Card Funding")," guide describes how a cardholder account is funded such that transactions may be authorized."),(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("a",{parentName:"li",href:"/guides/issue-a-virtual-card"},"Issue a Virtual Card")," guide and ",(0,n.kt)("a",{parentName:"li",href:"/guides/card-lifecycle"},"Card Lifecycle")," guide will give you an understanding of how to create and issue a card to a user.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If this doesn't sound right given your use case then check out the ",(0,n.kt)("a",{parentName:"p",href:"/guides/non-custodial-wallets"},"non-custodial wallets guide")," for information on how cards may be issued to and funded directly by cardholders leveraging various web3 technologies. ",(0,n.kt)("a",{parentName:"p",href:"https://immersve.com/contact/"},"Contact us")," if you require further assistance to understand how your use case might be supported.")))}p.isMDXComponent=!0}}]);