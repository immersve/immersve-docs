"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[3212],{52991:(e,t,c)=>{c.d(t,{Z:()=>k});var n=c(67294),r=c(86010),i=c(53438),a=c(39960),o=c(13919),s=c(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:c}=e;return n.createElement(a.Z,{href:t,className:(0,r.Z)("card padding--lg",l)},c)}function p(e){let{href:t,icon:c,title:i,description:a}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",u),title:i},c," ",i),a&&n.createElement("p",{className:(0,r.Z)("text--truncate",d),title:a},a))}function f(e){let{item:t}=e;const c=(0,i.Wl)(t);return c?n.createElement(p,{href:c,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const c=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:c,title:t.label,description:null==r?void 0:r.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function E(e){let{className:t}=e;const c=(0,i.jA)();return n.createElement(k,{items:c.items,className:t})}function k(e){const{items:t,className:c}=e;if(!t)return n.createElement(E,e);const a=(0,i.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",c)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},29847:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=c(87462),r=(c(67294),c(3905)),i=(c(19959),c(52991)),a=c(53438);const o={id:"accounts-custodial",title:"Accounts (Custodial)",description:"Accounts (Custodial)",custom_edit_url:null},s=void 0,l={unversionedId:"api-reference/accounts-custodial",id:"api-reference/accounts-custodial",title:"Accounts (Custodial)",description:"Accounts (Custodial)",source:"@site/docs/api-reference/accounts-custodial.tag.mdx",sourceDirName:"api-reference",slug:"/api-reference/accounts-custodial",permalink:"/api-reference/accounts-custodial",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"accounts-custodial",title:"Accounts (Custodial)",description:"Accounts (Custodial)",custom_edit_url:null},sidebar:"primarySidebar",previous:{title:"Login",permalink:"/api-reference/login"},next:{title:"Create an Account",permalink:"/api-reference/create-an-account"}},u={},d=[],m={toc:d};function p(e){let{components:t,...c}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);