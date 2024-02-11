"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[6575],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||c;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,a=new Array(c);a[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},55162:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(27378),i=n(38944),c=n(45161),a=n(81884),o=n(45626),l=n(99213);const s={cardContainer:"cardContainer_H47c",cardTitle:"cardTitle_tTnA",cardDescription:"cardDescription_rTl4"};function u(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",s.cardContainer)},n)}function d(e){let{href:t,icon:n,title:c,description:a}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",s.cardTitle),title:c},n," ",c),a&&r.createElement("p",{className:(0,i.Z)("text--truncate",s.cardDescription),title:a},a))}function p(e){let{item:t}=e;const n=(0,c.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:i?.description})}function m(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,c.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,e);const a=(0,c.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(m,{item:e})))))}},89203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(25773),i=(n(27378),n(35318)),c=n(55162),a=n(45161);const o={id:"funding-channel",title:"Funding Channels",description:"Funding Channels",custom_edit_url:null},l=void 0,s={unversionedId:"api-reference/funding-channel",id:"api-reference/funding-channel",title:"Funding Channels",description:"Funding Channels",source:"@site/docs/api-reference/funding-channel.tag.mdx",sourceDirName:"api-reference",slug:"/api-reference/funding-channel",permalink:"/api-reference/funding-channel",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"funding-channel",title:"Funding Channels",description:"Funding Channels",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"List Funding Source Interactions",permalink:"/api-reference/list-funding-source-interactions"},next:{title:"Get a Funding Channel",permalink:"/api-reference/get-a-funding-channel"}},u={},d=[],p={toc:d},f="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);