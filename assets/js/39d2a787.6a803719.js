"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[3757],{84770:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(87462),r=(t(67294),t(3905)),n=t(8209);const s={sidebar_position:4,tags:["card","virtual card","non-custodial","custodial"]},d="Issue a Virtual Card",o={unversionedId:"guides/issue-a-virtual-card",id:"guides/issue-a-virtual-card",title:"Issue a Virtual Card",description:"A virtual card is a payment card that exists only in digital form. As such, virtual cards are most suitable for online e-commerce purchases as opposed to in-store purchases at brick-and-mortar merchants. By default, virtual cards are logically time-bound and ephemeral. Beginning at the time of issuance of a virtual card, it has a finite useable lifespan which is often represented within the UI of the issuing client application as a stopwatch-type timer. This model presents certain benefits over a persistent payment card model (be they virtual, tokenized or physical) in that the potential for card fraud is dramatically reduced.",source:"@site/docs/guides/issue-a-virtual-card.md",sourceDirName:"guides",slug:"/guides/issue-a-virtual-card",permalink:"/guides/issue-a-virtual-card",draft:!1,tags:[{label:"card",permalink:"/tags/card"},{label:"virtual card",permalink:"/tags/virtual-card"},{label:"non-custodial",permalink:"/tags/non-custodial"},{label:"custodial",permalink:"/tags/custodial"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["card","virtual card","non-custodial","custodial"]},sidebar:"primarySidebar",previous:{title:"Card Funding",permalink:"/guides/card-funding"},next:{title:"Non-Custodial Wallets",permalink:"/guides/non-custodial-wallets"}},c={},l=[{value:"Authentication",id:"authentication",level:2},{value:"Provision Funding Source",id:"provision-funding-source",level:2},{value:"Create a card",id:"create-a-card",level:2},{value:"Issue a Card",id:"issue-a-card",level:2},{value:"Get a Card Token",id:"get-a-card-token",level:3},{value:"Get Sensitive Card Details",id:"get-sensitive-card-details",level:3},{value:"Virtual Card Issuance Sequence Diagram",id:"virtual-card-issuance-sequence-diagram",level:2}],u={toc:l};function p(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"issue-a-virtual-card"},"Issue a Virtual Card"),(0,r.kt)("p",null,"A virtual card is a payment card that exists only in digital form. As such, virtual cards are most suitable for online e-commerce purchases as opposed to in-store purchases at brick-and-mortar merchants. By default, virtual cards are logically time-bound and ephemeral. Beginning at the time of issuance of a virtual card, it has a finite useable lifespan which is often represented within the UI of the issuing client application as a stopwatch-type timer. This model presents certain benefits over a persistent payment card model (be they virtual, tokenized or physical) in that the potential for card fraud is dramatically reduced."),(0,r.kt)("p",null,"Before being permitted to ",(0,r.kt)("a",{parentName:"p",href:"/api-reference/create-a-card"},"create a card")," a user must first have successfully ",(0,r.kt)("a",{parentName:"p",href:"/guides/authentication"},"authenticated")," and fulfilled any regulatory prerequisites as instructed by the ",(0,r.kt)("a",{parentName:"p",href:"/api-reference/get-spending-prerequisites"},"get spending prerequisites")," operation."),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"The authentication processes are described in the ",(0,r.kt)("a",{parentName:"p",href:"/guides/authentication"},"authentication guide"),". As the user account is anchored by control of the private key, there is no distinct prior explicit registration or signup process needed before authenticating."),(0,r.kt)("h2",{id:"provision-funding-source"},"Provision Funding Source"),(0,r.kt)("p",null,"A Funding Source is required for card creation. Besides this requirement, cards and Funding Sources are managed independently.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/api-reference/claim-a-funding-source-for-an-account"},"Claim a Funding Source for an account")," and the ",(0,r.kt)("a",{parentName:"p",href:"/guides/card-funding"},"Card Funding")," guide."),(0,r.kt)("h2",{id:"create-a-card"},"Create a card"),(0,r.kt)("p",null,"Call the ",(0,r.kt)("a",{parentName:"p",href:"/api-reference/create-a-card"},"create a card")," operation to request Immersve to generate a card."),(0,r.kt)("p",null,"If successful a ",(0,r.kt)("a",{parentName:"p",href:"/api-reference/create-a-card"},"create a card")," request will return a card ID. Immersve will provision and activate the card by default.\nIt is provisioned and activated when the ",(0,r.kt)("a",{parentName:"p",href:"/api-reference/get-card-details"},"get card details")," response payload includes a ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," of ",(0,r.kt)("inlineCode",{parentName:"p"},'"active"'),".\nAll cards are currently short-lived and the time to expiry begins at the time of activation, the expiry timestamp is returned in the ",(0,r.kt)("inlineCode",{parentName:"p"},"immersveExpiration")," field."),(0,r.kt)("h2",{id:"issue-a-card"},"Issue a Card"),(0,r.kt)("p",null,"Having created a virtual card via the ",(0,r.kt)("a",{parentName:"p",href:"/api-reference/create-a-card"},"create a card")," operation and confirmed it is ",(0,r.kt)("inlineCode",{parentName:"p"},'"active"'),", you are in a position to be able to obtain the sensitive card details to be presented to the cardholder."),(0,r.kt)("p",null,"There are two steps in this process;"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Obtaining a token for transmission to the client application to which the card details are to be provided (i.e. the application that will display the card data to the cardholder) and;"),(0,r.kt)("li",{parentName:"ol"},"The exchange, by that client application, of the token for the card data.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is not recommended that the card token is supplied to any application other than one that resides within the cardholder environment (i.e. their mobile application or web application running in their browser) unless that system is sufficiently compliant with PCI-DSS requirements and is audited as such.")),(0,r.kt)("h3",{id:"get-a-card-token"},"Get a Card Token"),(0,r.kt)("p",null,"Generate a single-use card ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," using ",(0,r.kt)("a",{parentName:"p",href:"/api-reference/get-a-card-token"},"the get a card token")," operation. The token is typically then transmitted to the cardholder's environment (i.e. web application or mobile application running in their web browser) to complete the final step completing the card issuance."),(0,r.kt)("h3",{id:"get-sensitive-card-details"},"Get Sensitive Card Details"),(0,r.kt)("p",null,"To obtain the full PAN and CVV2 for display to the cardholder your client-side application should exchange the token for the sensitive card data. See ",(0,r.kt)("a",{parentName:"p",href:"/guides/fetching-secure-card-information"},"fetching secure card information"),"."),(0,r.kt)("h2",{id:"virtual-card-issuance-sequence-diagram"},"Virtual Card Issuance Sequence Diagram"),(0,r.kt)(n.G,{chart:"sequenceDiagram\n    participant U as User\n    participant C as Your Application\n    participant I as Immersve\n    note over U: Authentication as per authentication guide\n\n    C->>I: Create Funding Source\n    I--\x3e>C: Funding Source ID\n    par Get spending prerequisites and create card\n    C->>I: Get spending prerequisites\n    I--\x3e>C: prerequisites collection\n    U->>C: Request card\n    C->>+I: Create a card\n    I--\x3e>C: cardId\n    I->>I: Provision Card\n    end",mdxType:"Mermaid"}))}p.isMDXComponent=!0}}]);