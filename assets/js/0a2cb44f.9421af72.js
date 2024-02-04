"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[2273],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||c;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},55162:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(27378),a=r(38944),c=r(45161),i=r(81884),o=r(45626),s=r(99213);const l={cardContainer:"cardContainer_H47c",cardTitle:"cardTitle_tTnA",cardDescription:"cardDescription_rTl4"};function u(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l.cardContainer)},r)}function p(e){let{href:t,icon:r,title:c,description:i}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:c},r," ",c),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:i},i))}function m(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,c.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const i=(0,c.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},16775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(25773),a=(r(27378),r(35318)),c=r(55162),i=r(45161);const o={id:"transactions",title:"Transactions",description:"Transactions",custom_edit_url:null},s=void 0,l={unversionedId:"api-reference/transactions",id:"api-reference/transactions",title:"Transactions",description:"Transactions",source:"@site/docs/api-reference/transactions.tag.mdx",sourceDirName:"api-reference",slug:"/api-reference/transactions",permalink:"/api-reference/transactions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"transactions",title:"Transactions",description:"Transactions",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"List Funding Channels",permalink:"/api-reference/list-funding-channels"},next:{title:"Get a transaction",permalink:"/api-reference/get-a-transaction"}},u={},p=[],m={toc:p},d="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);