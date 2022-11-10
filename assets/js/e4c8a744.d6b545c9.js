(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[4762],{67457:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(87462),a=(n(67294),n(3905)),s=n(19959);const r={sidebar_position:1,tags:["authentication","sign-in","sign-up","login"]},o="Authentication",l={unversionedId:"guides/authentication",id:"guides/authentication",title:"Authentication",description:"API calls can be authenticated by providing a user access token in the \u201cAuthorization\u201d header. Immersve uses EIP-4361 for the sign-in process. The following sections describe the process in detail",source:"@site/docs/guides/authentication.md",sourceDirName:"guides",slug:"/guides/authentication",permalink:"/guides/authentication",draft:!1,tags:[{label:"authentication",permalink:"/tags/authentication"},{label:"sign-in",permalink:"/tags/sign-in"},{label:"sign-up",permalink:"/tags/sign-up"},{label:"login",permalink:"/tags/login"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["authentication","sign-in","sign-up","login"]},sidebar:"primarySidebar",previous:{title:"Getting Started",permalink:"/"},next:{title:"Card",permalink:"/guides/card"}},c={},u=[{value:"Login Flow",id:"login-flow",level:3}],p={toc:u};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"API calls can be authenticated by providing a user access token in the \u201cAuthorization\u201d header. Immersve uses ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-4361"},"EIP-4361")," for the sign-in process. The following sections describe the process in detail"),(0,a.kt)("h3",{id:"login-flow"},"Login Flow"),(0,a.kt)(s.G,{chart:"sequenceDiagram\n    participant M as Web-3 Wallet\n    participant C as API Client\n    participant I as Immersve\n    C->>+I: Get EIP-4361 challenge\n    I--\x3e>-C: Challenge\n    C->>M: Request to sign an EIP-4361 message\n    M--\x3e>C: Signature\n    C->>+I: Send EIP-4361 message + signature\n    I--\x3e>-C: Return JWT Token\n\t  note over C: JWT Token will be used for the following requests to Immersve API",mdxType:"Mermaid"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"../api-reference/generate-challenge"},"Request EIP-4361 challenge"),". The response is a EIP-4361 message to be signed by the wallet in plain text, for example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"app.immersve.com wants you to sign in with your Ethereum account:\n0xA3058369d6A481B1ff08F62B352409c3D709De9b\n\nSign in with Ethereum to the app. This request will not trigger a blockchain transaction or cost any gas fees.\n\nURI: https://app.immersve.com\nVersion: 1\nChain ID: 1\nNonce: 2hFm7TDbZmerUgnrJ\nIssued At: 2022-08-11T22:29:48.244Z\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Invoke the wallet's signing capability to get a signature for the challenge message. This part's implementation is specific to the wallet used, but it is fair to say that this abstract function is available in all wallets.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"../api-reference/login"},"Submit the signed challenge with its signature")," to get the authentication token")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The received token should be used for consequent requests to protected resources in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header"))))}h.isMDXComponent=!0},11748:(e,t,n)=>{var i={"./locale":89234,"./locale.js":89234};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=s,e.exports=a,a.id=11748}}]);