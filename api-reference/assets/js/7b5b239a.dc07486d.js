"use strict";(self.webpackChunkimsv_docs_docusaurus=self.webpackChunkimsv_docs_docusaurus||[]).push([[9807],{55162:(e,t,i)=>{i.d(t,{Z:()=>h});var s=i(27378),r=i(38944),c=i(45161),n=i(81884),a=i(45626),o=i(99213);const l={cardContainer:"cardContainer_H47c",cardTitle:"cardTitle_tTnA",cardDescription:"cardDescription_rTl4"};function d(e){let{href:t,children:i}=e;return s.createElement(n.Z,{href:t,className:(0,r.Z)("card padding--lg",l.cardContainer)},i)}function m(e){let{href:t,icon:i,title:c,description:n}=e;return s.createElement(d,{href:t},s.createElement("h2",{className:(0,r.Z)("text--truncate",l.cardTitle),title:c},i," ",c),n&&s.createElement("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:n},n))}function u(e){let{item:t}=e;const i=(0,c.Wl)(t);return i?s.createElement(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const i=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.xz)(t.docId??void 0);return s.createElement(m,{href:t.href,icon:i,title:t.label,description:r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return s.createElement(p,{item:t});case"category":return s.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const i=(0,c.jA)();return s.createElement(h,{items:i.items,className:t})}function h(e){const{items:t,className:i}=e;if(!t)return s.createElement(v,e);const n=(0,c.MN)(t);return s.createElement("section",{className:(0,r.Z)("row",i)},n.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(f,{item:e})))))}},31826:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var s=i(25773),r=(i(27378),i(35318)),c=i(55162),n=i(45161);const a={id:"asset-activities",title:"Asset Activities",description:"Asset Activities",custom_edit_url:null},o=void 0,l={unversionedId:"asset-activities",id:"asset-activities",title:"Asset Activities",description:"Asset Activities",source:"@site/docs/asset-activities.tag.mdx",sourceDirName:".",slug:"/asset-activities",permalink:"/api-reference/asset-activities",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"asset-activities",title:"Asset Activities",description:"Asset Activities",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Login",permalink:"/api-reference/login"},next:{title:"List asset activities",permalink:"/api-reference/list-asset-activities"}},d={},m=[],u={toc:m},p="wrapper";function f(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,s.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c.Z,{items:(0,n.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);