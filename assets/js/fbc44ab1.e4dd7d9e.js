"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[5136],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),h=n,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},10730:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_position:11,tags:["card","virtual card","xPay"]},i="Add a Card to a Digital Wallet",l={unversionedId:"guides/add-card-to-digital-wallet",id:"guides/add-card-to-digital-wallet",title:"Add a Card to a Digital Wallet",description:"Apple Pay and Google Pay manual provisioning support coming soon! Expected Q4 2023",source:"@site/docs/guides/add-card-to-digital-wallet.md",sourceDirName:"guides",slug:"/guides/add-card-to-digital-wallet",permalink:"/guides/add-card-to-digital-wallet",draft:!1,tags:[{label:"card",permalink:"/tags/card"},{label:"virtual card",permalink:"/tags/virtual-card"},{label:"xPay",permalink:"/tags/x-pay"}],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,tags:["card","virtual card","xPay"]},sidebar:"primarySidebar",previous:{title:"Webhooks",permalink:"/guides/webhooks"},next:{title:"Monetary Units",permalink:"/guides/monetary-units"}},s={},d=[],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"add-a-card-to-a-digital-wallet"},"Add a Card to a Digital Wallet"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Apple Pay and Google Pay manual provisioning support coming soon! Expected Q4 2023")),(0,n.kt)("p",null,"Apple Pay, Google Pay, and Samsung Pay wallets (collectively colloquially known as the 'xPays') allow users to tokenize a card. Such a token held within an xPay wallet may subsequently be used to make payments online and by contactless tap in-store."),(0,n.kt)("p",null,"To tokenize a card within an xPay wallet, a card must first be issued to a cardholder. Follow the ",(0,n.kt)("a",{parentName:"p",href:"/guides/issue-a-virtual-card"},"issue a virtual card")," guide for more information on how to create and issue a card."),(0,n.kt)("p",null,"Whereas the card itself holds a primary account number (PAN) which is usually depicted on the card, a device PAN (DPAN) is assigned to the card as a pseudonym during tokenization. A DPAN is associated with a particular device (such as a smartphone) that emulates the card virtually when stored in the xPay wallet. If the same card is stored virtually in another wallet it will have DPAN which differs from the one held by the other wallet. Immersve assigns a DPAN at the time of adding the virtual card to the xPay wallet."),(0,n.kt)("p",null,"The complexity of managing DPANs is opaque to the cardholder and the process to provision a card to an xPay wallet is rather simple from their perspective."),(0,n.kt)("p",null,"Where your application (within which the virtual card is presented) is co-located with the xPay wallet then the user can simply copy/paste and/or manually enter the card details from your application into the xPay wallet. Where your application resides on a device other than the one that holds the target xPay wallet then the user can scan the virtual card with their camera to add it to their xPay wallet."),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT204506"},"Apple guide")," and the ",(0,n.kt)("a",{parentName:"p",href:"https://support.google.com/wallet/answer/12058983?hl=en#zippy=%2Cwith-the-google-wallet-app"},"Google guide")," for more details on how this operates from the user's perspective."))}u.isMDXComponent=!0}}]);