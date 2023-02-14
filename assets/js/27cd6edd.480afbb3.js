(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[6048],{10193:(e,a,t)=>{"use strict";t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var r=t(87462),c=(t(67294),t(3905)),n=t(19959);const i={sidebar_position:2,tags:["card","virtual card","non-custodial"]},l="Card Lifecycle",d={unversionedId:"guides/non-custodial wallets/card-lifecycle",id:"guides/non-custodial wallets/card-lifecycle",title:"Card Lifecycle",description:"Card States",source:"@site/docs/guides/non-custodial wallets/card-lifecycle.md",sourceDirName:"guides/non-custodial wallets",slug:"/guides/non-custodial wallets/card-lifecycle",permalink:"/guides/non-custodial wallets/card-lifecycle",draft:!1,tags:[{label:"card",permalink:"/tags/card"},{label:"virtual card",permalink:"/tags/virtual-card"},{label:"non-custodial",permalink:"/tags/non-custodial"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["card","virtual card","non-custodial"]},sidebar:"primarySidebar",previous:{title:"Authentication",permalink:"/guides/non-custodial wallets/authentication"},next:{title:"Issue a Virtual Card",permalink:"/guides/non-custodial wallets/issue-a-virtual-card"}},s={},o=[{value:"Card States",id:"card-states",level:2},{value:"State Transitions",id:"state-transitions",level:2},{value:"Order a card",id:"order-a-card",level:3},{value:"Cancel a card",id:"cancel-a-card",level:3}],u={toc:o};function p(e){let{components:a,...t}=e;return(0,c.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"card-lifecycle"},"Card Lifecycle"),(0,c.kt)("h2",{id:"card-states"},"Card States"),(0,c.kt)("p",null,"Single-use virtual cards are activated and ready to use by default. When the card is either used to make a purchase or cancelled by the user it will transition to the ",(0,c.kt)("inlineCode",{parentName:"p"},"cancelled")," state."),(0,c.kt)(n.G,{chart:"stateDiagram-v2\n\xa0\xa0\xa0\xa0[*]--\x3e\xa0Active: create\n\n\xa0\xa0\xa0\xa0Active--\x3eCancelled : cancel_card\n    Active--\x3eCancelled : once_used\n\xa0\xa0\xa0\xa0Cancelled --\x3e\xa0[*]",mdxType:"Mermaid"}),(0,c.kt)("h2",{id:"state-transitions"},"State Transitions"),(0,c.kt)("h3",{id:"order-a-card"},"Order a card"),(0,c.kt)("p",null,"A card begins life when you call the ",(0,c.kt)("a",{parentName:"p",href:"/api-reference/order-card"},"order a card")," operation to request Immersve to generate a card."),(0,c.kt)("h3",{id:"cancel-a-card"},"Cancel a card"),(0,c.kt)("p",null,"Should a cardholder change their mind prior to presenting the card to a merchant, you can cancel the card by calling the ",(0,c.kt)("a",{parentName:"p",href:"/api-reference/cancel-a-card"},"cancel a card")," operation."))}p.isMDXComponent=!0},11748:(e,a,t)=>{var r={"./locale":89234,"./locale.js":89234};function c(e){var a=n(e);return t(a)}function n(e){if(!t.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=n,e.exports=c,c.id=11748}}]);