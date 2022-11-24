(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[6617],{45055:(e,a,r)=>{"use strict";r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var t=r(87462),c=(r(67294),r(3905)),i=r(19959);const d={sidebar_position:2,tags:["card","virtual card"]},n="Card Lifecycle",l={unversionedId:"guides/card-lifecycle",id:"guides/card-lifecycle",title:"Card Lifecycle",description:"Card States",source:"@site/docs/guides/card-lifecycle.md",sourceDirName:"guides",slug:"/guides/card-lifecycle",permalink:"/guides/card-lifecycle",draft:!1,tags:[{label:"card",permalink:"/tags/card"},{label:"virtual card",permalink:"/tags/virtual-card"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["card","virtual card"]},sidebar:"primarySidebar",previous:{title:"Authentication",permalink:"/guides/authentication"},next:{title:"Issue a Virtual Card",permalink:"/guides/issue-a-virtual-card"}},s={},o=[{value:"Card States",id:"card-states",level:2},{value:"State Transitions",id:"state-transitions",level:2},{value:"Order a card",id:"order-a-card",level:3},{value:"Cancel a card",id:"cancel-a-card",level:3}],u={toc:o};function p(e){let{components:a,...r}=e;return(0,c.kt)("wrapper",(0,t.Z)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"card-lifecycle"},"Card Lifecycle"),(0,c.kt)("h2",{id:"card-states"},"Card States"),(0,c.kt)("p",null,"Single-use virtual cards are activated and ready to use by default. When the card is either used to make a purchase or cancelled by the user it will transition to the ",(0,c.kt)("inlineCode",{parentName:"p"},"cancelled")," state."),(0,c.kt)(i.G,{chart:"stateDiagram-v2\n\xa0\xa0\xa0\xa0[*]--\x3e\xa0Active: create\n\n\xa0\xa0\xa0\xa0Active--\x3eCancelled : cancel_card\n    Active--\x3eCancelled : once_used\n\xa0\xa0\xa0\xa0Cancelled --\x3e\xa0[*]",mdxType:"Mermaid"}),(0,c.kt)("h2",{id:"state-transitions"},"State Transitions"),(0,c.kt)("h3",{id:"order-a-card"},"Order a card"),(0,c.kt)("p",null,"A card begins life when you call the ",(0,c.kt)("a",{parentName:"p",href:"/api-reference/order-card"},"order a card")," operation to request Immersve to generate a card."),(0,c.kt)("h3",{id:"cancel-a-card"},"Cancel a card"),(0,c.kt)("p",null,"Should a cardholder change their mind prior to presenting the card to a merchant, you can cancel the card by calling the ",(0,c.kt)("a",{parentName:"p",href:"/api-reference/cancel-a-card"},"cancel a card")," operation."))}p.isMDXComponent=!0},11748:(e,a,r)=>{var t={"./locale":89234,"./locale.js":89234};function c(e){var a=i(e);return r(a)}function i(e){if(!r.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}c.keys=function(){return Object.keys(t)},c.resolve=i,e.exports=c,c.id=11748}}]);