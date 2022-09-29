"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[120],{1686:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=t(7462),n=(t(7294),t(3905)),d=t(1839);const i={sidebar_position:2,tags:["card"]},c="Card",s={unversionedId:"guides/card",id:"guides/card",title:"Card",description:"Card State",source:"@site/docs/guides/card.md",sourceDirName:"guides",slug:"/guides/card",permalink:"/guides/card",draft:!1,tags:[{label:"card",permalink:"/tags/card"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["card"]},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/guides/authentication"},next:{title:"API Reference",permalink:"/category/api-reference"}},l={},o=[{value:"Card State",id:"card-state",level:2},{value:"Card Usage",id:"card-usage",level:2}],h={toc:o};function u(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"card"},"Card"),(0,n.kt)("h2",{id:"card-state"},"Card State"),(0,n.kt)("p",null,"After created, the card is activated. when the card is used or canceled by user, it will go to the cancelled state. "),(0,n.kt)(d.G,{chart:"stateDiagram-v2\n\xa0\xa0\xa0\xa0[*]--\x3e\xa0Active: create\n\n\xa0\xa0\xa0\xa0Active--\x3eCancelled : cancel_card\n    Active--\x3eCancelled : once_used\n\xa0\xa0\xa0\xa0Cancelled --\x3e\xa0[*]",mdxType:"Mermaid"}),(0,n.kt)("h2",{id:"card-usage"},"Card Usage"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Before create a card, users need to transfer USDC from their wallet address to Immersve wallet address. "),(0,n.kt)("li",{parentName:"ol"},"Then they create a card associate with the transaction. Immersve will locked the funds of the transaction in the card for further spending. For security sake, the returned card only include truncated pan and expiry. "),(0,n.kt)("li",{parentName:"ol"},"To get the full pan and cvv2, users need to generate card pan token from Immersve that will be used to get full pan and cvv2 from E6 Mobile API. "),(0,n.kt)("li",{parentName:"ol"},"If users authorize a merchant to use the card, credit network will send authorization and clearing request to Immersve, if the transaction are cleared. the card will be cancelled by Immersve automatically."),(0,n.kt)("li",{parentName:"ol"},"If users change their mind before the card is used, they can cancel the card by calling cancel card API. ")),(0,n.kt)(d.G,{chart:"sequenceDiagram\n    participant U as User\n    participant C as API Client\n    participant I as Immersve\n    participant E as E6 Mobile API\n    participant CN as Credit Network\n    U->>U: Create a transaction that transfers the USDC to Immersve wallet address\n    U->>C : Create a card with the hash of the transaction\n    C->>+I: Create a card with the hash of the transaction\n    I--\x3e>C: Return a Card\n    C--\x3e>U: Return a Card\nloop user want to get the card's detail    \n    C->>I: Request a card pan token\n    C->>E: Validate the card details\nend\nalt if user filled in the card in merchant\n    CN->>I: Authorization of the card\n    I--\x3e>CN: Approved the Authorization of the card\n    CN->>I: Settle the authorization of the card\n    I--\x3e>CN: Clear the authorization\n    I->>I : Cancel the card\nelse the card be cancelled before used\n    C->>I : Cancel the card\n    I--\x3e>-C: card cancelled\nend",mdxType:"Mermaid"}))}u.isMDXComponent=!0}}]);