"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[2663],{55162:(e,t,n)=>{n.d(t,{Z:()=>g});var i=n(27378),r=n(38944),c=n(45161),a=n(81884),s=n(45626),l=n(99213);const o={cardContainer:"cardContainer_H47c",cardTitle:"cardTitle_tTnA",cardDescription:"cardDescription_rTl4"};function d(e){let{href:t,children:n}=e;return i.createElement(a.Z,{href:t,className:(0,r.Z)("card padding--lg",o.cardContainer)},n)}function u(e){let{href:t,icon:n,title:c,description:a}=e;return i.createElement(d,{href:t},i.createElement("h2",{className:(0,r.Z)("text--truncate",o.cardTitle),title:c},n," ",c),a&&i.createElement("p",{className:(0,r.Z)("text--truncate",o.cardDescription),title:a},a))}function m(e){let{item:t}=e;const n=(0,c.Wl)(t);return n?i.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.xz)(t.docId??void 0);return i.createElement(u,{href:t.href,icon:n,title:t.label,description:r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(f,{item:t});case"category":return i.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function p(e){let{className:t}=e;const n=(0,c.jA)();return i.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return i.createElement(p,e);const a=(0,c.MN)(t);return i.createElement("section",{className:(0,r.Z)("row",n)},a.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(h,{item:e})))))}},52468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=n(25773),r=(n(27378),n(35318)),c=n(55162),a=n(45161);const s={id:"funding-channel",title:"Funding Channels",description:"Funding Channels",custom_edit_url:null},l=void 0,o={unversionedId:"funding-channel",id:"funding-channel",title:"Funding Channels",description:"Funding Channels",source:"@site/docs/funding-channel.tag.mdx",sourceDirName:".",slug:"/funding-channel",permalink:"/api-reference/funding-channel",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"funding-channel",title:"Funding Channels",description:"Funding Channels",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"List Funding Source Interactions",permalink:"/api-reference/list-funding-source-interactions"},next:{title:"Get a Funding Channel",permalink:"/api-reference/get-a-funding-channel"}},d={},u=[],m={toc:u},f="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);