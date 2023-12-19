"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[5136],{10730:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>n});var i=t(87462),l=(t(67294),t(3905));t(8209);const o={sidebar_position:11,tags:["card","virtual card","xPay"]},r="Add a Card to a Digital Wallet",s={unversionedId:"guides/add-card-to-digital-wallet",id:"guides/add-card-to-digital-wallet",title:"Add a Card to a Digital Wallet",description:"Apple Pay and Google Pay manual provisioning support coming soon! Expected Q4 2023",source:"@site/docs/guides/add-card-to-digital-wallet.md",sourceDirName:"guides",slug:"/guides/add-card-to-digital-wallet",permalink:"/guides/add-card-to-digital-wallet",draft:!1,tags:[{label:"card",permalink:"/tags/card"},{label:"virtual card",permalink:"/tags/virtual-card"},{label:"xPay",permalink:"/tags/x-pay"}],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,tags:["card","virtual card","xPay"]},sidebar:"primarySidebar",previous:{title:"Webhooks",permalink:"/guides/webhooks"},next:{title:"Monetary Units",permalink:"/guides/monetary-units"}},d={},n=[],p={toc:n};function c(a){let{components:e,...t}=a;return(0,l.kt)("wrapper",(0,i.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"add-a-card-to-a-digital-wallet"},"Add a Card to a Digital Wallet"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Apple Pay and Google Pay manual provisioning support coming soon! Expected Q4 2023")),(0,l.kt)("p",null,"Apple Pay, Google Pay, and Samsung Pay wallets (collectively colloquially known as the 'xPays') allow users to tokenize a card. Such a token held within an xPay wallet may subsequently be used to make payments online and by contactless tap in-store."),(0,l.kt)("p",null,"To tokenize a card within an xPay wallet, a card must first be issued to a cardholder. Follow the ",(0,l.kt)("a",{parentName:"p",href:"/guides/issue-a-virtual-card"},"issue a virtual card")," guide for more information on how to create and issue a card."),(0,l.kt)("p",null,"Whereas the card itself holds a primary account number (PAN) which is usually depicted on the card, a device PAN (DPAN) is assigned to the card as a pseudonym during tokenization. A DPAN is associated with a particular device (such as a smartphone) that emulates the card virtually when stored in the xPay wallet. If the same card is stored virtually in another wallet it will have DPAN which differs from the one held by the other wallet. Immersve assigns a DPAN at the time of adding the virtual card to the xPay wallet."),(0,l.kt)("p",null,"The complexity of managing DPANs is opaque to the cardholder and the process to provision a card to an xPay wallet is rather simple from their perspective."),(0,l.kt)("p",null,"Where your application (within which the virtual card is presented) is co-located with the xPay wallet then the user can simply copy/paste and/or manually enter the card details from your application into the xPay wallet. Where your application resides on a device other than the one that holds the target xPay wallet then the user can scan the virtual card with their camera to add it to their xPay wallet."),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT204506"},"Apple guide")," and the ",(0,l.kt)("a",{parentName:"p",href:"https://support.google.com/wallet/answer/12058983?hl=en#zippy=%2Cwith-the-google-wallet-app"},"Google guide")," for more details on how this operates from the user's perspective."))}c.isMDXComponent=!0}}]);