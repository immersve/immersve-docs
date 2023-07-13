"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[8431],{47136:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(87462),s=(t(67294),t(3905)),i=t(8209);const o={sidebar_position:1,tags:["authentication","sign-in","sign-up","login","non-custodial"]},r="Authentication",l={unversionedId:"guides/non-custodial wallets/authentication",id:"guides/non-custodial wallets/authentication",title:"Authentication",description:"Accounts are identified by way of blockchain addresses. Proof of ownership of an address is based upon a process of authentication by way of verification of EIP-4361 challenges signed by the private key underlying an address. Upon successful authentication, Immersve will issue an access token for subsequent use in interactions with the Immersve API.",source:"@site/docs/guides/non-custodial wallets/authentication.md",sourceDirName:"guides/non-custodial wallets",slug:"/guides/non-custodial wallets/authentication",permalink:"/guides/non-custodial wallets/authentication",draft:!1,tags:[{label:"authentication",permalink:"/tags/authentication"},{label:"sign-in",permalink:"/tags/sign-in"},{label:"sign-up",permalink:"/tags/sign-up"},{label:"login",permalink:"/tags/login"},{label:"non-custodial",permalink:"/tags/non-custodial"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["authentication","sign-in","sign-up","login","non-custodial"]},sidebar:"primarySidebar",previous:{title:"Non-Custodial Wallets",permalink:"/category/non-custodial-wallets"},next:{title:"Card Lifecycle",permalink:"/guides/non-custodial wallets/card-lifecycle"}},c={},u=[{value:"Login Flow",id:"login-flow",level:3}],p={toc:u};function g(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"authentication"},"Authentication"),(0,s.kt)("p",null,"Accounts are identified by way of blockchain addresses. Proof of ownership of an address is based upon a process of authentication by way of verification of ",(0,s.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-4361"},"EIP-4361")," challenges signed by the private key underlying an address. Upon successful authentication, Immersve will issue an access token for subsequent use in interactions with the Immersve API."),(0,s.kt)("p",null,"Subsequent requests for protected resources from the Immersve API may be authenticated by supplying the access token in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Authorization")," header."),(0,s.kt)("h3",{id:"login-flow"},"Login Flow"),(0,s.kt)(i.G,{chart:"sequenceDiagram\n    participant W as Web3 Wallet\n    participant C as API Client\n    participant I as Immersve\n    C->>+I: Generate challenge\n    I--\x3e>-C: Challenge\n    C->>W: Request to sign a message\n    W--\x3e>C: Signature\n    C->>+I: Send challenge + signature\n    I--\x3e>-C: Return access token\n\t  note over C: Access token will be used for subsequent requests for protected resources from the Immersve API",mdxType:"Mermaid"}),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/api-reference/generate-challenge"},"Generate a challenge"),". The response is an ",(0,s.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-4361"},"EIP-4361")," message in plain text to be signed by the wallet. For example:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"app.immersve.com wants you to sign in with your Ethereum account:\n0xA3058369d6A481B1ff08F62B352409c3D709De9b\n\nSign in with Ethereum to the app. This request will not trigger a blockchain transaction or cost any gas fees.\n\nURI: https://app.immersve.com\nVersion: 1\nChain ID: 1\nNonce: 2hFm7TDbZmerUgnrJ\nIssued At: 2022-08-11T22:29:48.244Z\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Invoke the wallet's message signing capability to get a signature for the given challenge message. The specific nature of the invocation of the message signing function is specific to the particular wallet in use."),(0,s.kt)("p",{parentName:"li"},"For a quick start Metamask users can sign the challenge message using this ",(0,s.kt)("a",{parentName:"p",href:"https://codepen.io/imsv/full/zYMpExJ"},"CodePen"),". Alternatively use this Node.js script to create your own wallet and sign the challenge."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Signing Script"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"const ethers = require('ethers');\nconst axios = require('axios');\n\nconst baseUrl = 'https://api.immersve.com';\nconst log = (...data) => {\n  console.log.apply(null, data);\n}\n\n// Create a wallet to sign the message with\nconst privateKey = ''; //TODO: Set Private key here\nconst walletAddress = ''; //TODO: Set wallet address here\nconst chainId = 137; //Chain id Reference: https://chainlist.org/\n\nif (!privateKey || privateKey.length === 0) {\n  console.error('WALLET_PRIVATE_KEY missing');\n  process.exit(1);\n}\nif (!walletAddress || walletAddress.length === 0) {\n  console.error('WALLET_ADDRESS missing');\n  process.exit(1);\n}\n\nconst wallet = new ethers.Wallet(privateKey);\nconst clientInstance = axios.create({ baseURL: baseUrl });\n\nconst signIn = async () => {\n  const getSignInChallenge = await clientInstance.post('/siwe/generate-challenge', {\n    walletAddress,\n    chainId,\n  });\n  const challenge = getSignInChallenge.data;\n  const signature = await wallet.signMessage(challenge);\n  const output = { message: challenge, signature: signature };\n  log(JSON.stringify(output));\n}\n\nsignIn();\n")))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/api-reference/login"},"Submit the signed challenge along with the signature")," to get the access token.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"The access token should be used for subsequent requests for protected resources from the Immersve API by supplying it in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Authorization")," header."))))}g.isMDXComponent=!0}}]);