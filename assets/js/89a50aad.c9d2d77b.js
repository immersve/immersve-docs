"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[5947],{52991:(e,t,i)=>{i.d(t,{Z:()=>E});var s=i(67294),r=i(86010),n=i(53438),a=i(39960),c=i(13919),l=i(95999);const o="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:i}=e;return s.createElement(a.Z,{href:t,className:(0,r.Z)("card padding--lg",o)},i)}function p(e){let{href:t,icon:i,title:n,description:a}=e;return s.createElement(u,{href:t},s.createElement("h2",{className:(0,r.Z)("text--truncate",m),title:n},i," ",n),a&&s.createElement("p",{className:(0,r.Z)("text--truncate",d),title:a},a))}function f(e){let{item:t}=e;const i=(0,n.Wl)(t);return i?s.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){let{item:t}=e;const i=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,n.xz)(t.docId??void 0);return s.createElement(p,{href:t.href,icon:i,title:t.label,description:null==r?void 0:r.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return s.createElement(v,{item:t});case"category":return s.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const i=(0,n.jA)();return s.createElement(E,{items:i.items,className:t})}function E(e){const{items:t,className:i}=e;if(!t)return s.createElement(g,e);const a=(0,n.MN)(t);return s.createElement("section",{className:(0,r.Z)("row",i)},a.map(((e,t)=>s.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},s.createElement(h,{item:e})))))}},47197:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var s=i(87462),r=(i(67294),i(3905)),n=(i(8209),i(52991)),a=i(53438);const c={id:"asset-activities",title:"Asset activities",description:"Asset activities",custom_edit_url:null},l=void 0,o={unversionedId:"api-reference/asset-activities",id:"api-reference/asset-activities",title:"Asset activities",description:"Asset activities",source:"@site/docs/api-reference/asset-activities.tag.mdx",sourceDirName:"api-reference",slug:"/api-reference/asset-activities",permalink:"/api-reference/asset-activities",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"asset-activities",title:"Asset activities",description:"Asset activities",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Get balance",permalink:"/api-reference/get-balance"},next:{title:"List asset activities",permalink:"/api-reference/list-asset-activities"}},m={},d=[],u={toc:d};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(n.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);