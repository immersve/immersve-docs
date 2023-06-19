"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[2277],{68560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(87462),o=(n(67294),n(3905)),r=n(8209);const l={sidebar_position:1,tags:["payment","protocol","lock","settle","funds","card","e-commerce","purchase","asset","assetlockedfund","expiration","safety","threshold","settler","deposit","withdraw","confirm-payment","balance"]},i="Immersve Payment Protocol",d={unversionedId:"contracts/payment-protocol",id:"contracts/payment-protocol",title:"Immersve Payment Protocol",description:"Contract Module that allows users to deposit and lock funds in order to be able to fund one-time-use Immersve virtual cards.",source:"@site/docs/contracts/payment-protocol.md",sourceDirName:"contracts",slug:"/contracts/payment-protocol",permalink:"/contracts/payment-protocol",draft:!1,tags:[{label:"payment",permalink:"/tags/payment"},{label:"protocol",permalink:"/tags/protocol"},{label:"lock",permalink:"/tags/lock"},{label:"settle",permalink:"/tags/settle"},{label:"funds",permalink:"/tags/funds"},{label:"card",permalink:"/tags/card"},{label:"e-commerce",permalink:"/tags/e-commerce"},{label:"purchase",permalink:"/tags/purchase"},{label:"asset",permalink:"/tags/asset"},{label:"assetlockedfund",permalink:"/tags/assetlockedfund"},{label:"expiration",permalink:"/tags/expiration"},{label:"safety",permalink:"/tags/safety"},{label:"threshold",permalink:"/tags/threshold"},{label:"settler",permalink:"/tags/settler"},{label:"deposit",permalink:"/tags/deposit"},{label:"withdraw",permalink:"/tags/withdraw"},{label:"confirm-payment",permalink:"/tags/confirm-payment"},{label:"balance",permalink:"/tags/balance"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["payment","protocol","lock","settle","funds","card","e-commerce","purchase","asset","assetlockedfund","expiration","safety","threshold","settler","deposit","withdraw","confirm-payment","balance"]},sidebar:"primarySidebar",previous:{title:"Reverse a transaction",permalink:"/api-reference/reverse-a-transaction"}},s={},u=[{value:"Extensions",id:"extensions",level:2},{value:"Proxy",id:"proxy",level:2},{value:"Proxy URLs",id:"proxy-urls",level:2},{value:"Functions",id:"functions",level:2},{value:"<code>initialize</code>(address _settlerRole, address payable _settlementAddress, address _tokenSmartContract, uint256 _defaultTimeoutBlocks, uint256 _safetyBlocks) external initializer",id:"initializeaddress-_settlerrole-address-payable-_settlementaddress-address-_tokensmartcontract-uint256-_defaulttimeoutblocks-uint256-_safetyblocks-external-initializer",level:3},{value:"<code>getVersion()</code> external pure returns(string memory)",id:"getversion-external-pure-returnsstring-memory",level:3},{value:"<code>pause()</code> public onlyRole(PAUSER_ROLE)",id:"pause-public-onlyrolepauser_role",level:3},{value:"<code>unpause()</code> public onlyRole(PAUSER_ROLE)",id:"unpause-public-onlyrolepauser_role",level:3},{value:"<code>setTimeoutBlocks</code>(uint256 timeoutBlocks) public onlyRole(SETTLER_ROLE)",id:"settimeoutblocksuint256-timeoutblocks-public-onlyrolesettler_role",level:3},{value:"<code>setSafetyBlocks</code>(uint256 timeoutBlocks) public onlyRole(SETTLER_ROLE)",id:"setsafetyblocksuint256-timeoutblocks-public-onlyrolesettler_role",level:3},{value:"<code>deposit</code>(uint256 tokenAmount) external whenNotPaused nonReentrant",id:"deposituint256-tokenamount-external-whennotpaused-nonreentrant",level:3},{value:"<code>depositTo</code>(uint256 tokenAmount, address sender) external whenNotPaused nonReentrant",id:"deposittouint256-tokenamount-address-sender-external-whennotpaused-nonreentrant",level:3},{value:"<code>withdraw</code>(uint256 tokenAmount) external whenNotPaused nonReentrant",id:"withdrawuint256-tokenamount-external-whennotpaused-nonreentrant",level:3},{value:"<code>createLockedFund</code> (uint256 tokenAmount) external whenNotPaused nonReentrant",id:"createlockedfund-uint256-tokenamount-external-whennotpaused-nonreentrant",level:3},{value:"<code>depositAndCreateLockedFund</code> (uint256 tokenAmount) external whenNotPaused nonReentrant",id:"depositandcreatelockedfund-uint256-tokenamount-external-whennotpaused-nonreentrant",level:3},{value:"<code>depositAndCreateLockedFundFor</code> (uint256 tokenAmount, address sender) external whenNotPaused nonReentrant",id:"depositandcreatelockedfundfor-uint256-tokenamount-address-sender-external-whennotpaused-nonreentrant",level:3},{value:"<code>checkLockedFundPayment</code> (address sender, uint256 price, uint256 lockedFundId) external view whenNotPaused returns(uint256)",id:"checklockedfundpayment-address-sender-uint256-price-uint256-lockedfundid-external-view-whennotpaused-returnsuint256",level:3},{value:"<code>confirmLockedFundPayment</code> (address sender, uint256 price, uint256 lockedFundId) external whenNotPaused nonReentrant onlyRole(SETTLER_ROLE)",id:"confirmlockedfundpayment-address-sender-uint256-price-uint256-lockedfundid-external-whennotpaused-nonreentrant-onlyrolesettler_role",level:3},{value:"<code>confirmLockedFundPartialPayment</code> (address sender, uint256 price, uint256 lockedFundId) external whenNotPaused nonReentrant onlyRole(SETTLER_ROLE)",id:"confirmlockedfundpartialpayment-address-sender-uint256-price-uint256-lockedfundid-external-whennotpaused-nonreentrant-onlyrolesettler_role",level:3},{value:"<code>getAvailableLockedFundsBalance</code> (address sender)",id:"getavailablelockedfundsbalance-address-sender",level:3},{value:"<code>getBalance()</code>",id:"getbalance",level:3},{value:"<code>getSenderBalance</code> (address sender)",id:"getsenderbalance-address-sender",level:3},{value:"<code>getLockedFunds()</code>",id:"getlockedfunds",level:3},{value:"<code>getSenderLockedFunds</code> (address sender) onlyRole(SETTLER_ROLE)",id:"getsenderlockedfunds-address-sender-onlyrolesettler_role",level:3},{value:"<code>revokeLockedFundMultiSig</code> (uint256 lockedFundId, uint256 nonce, bytes memory signature) external whenNotPaused nonReentrant",id:"revokelockedfundmultisig-uint256-lockedfundid-uint256-nonce-bytes-memory-signature-external-whennotpaused-nonreentrant",level:3},{value:"<code>revokeLockedFund</code> (address sender, uint256 lockedFundId) external whenNotPaused nonReentrant onlyRole(SETTLER_ROLE)",id:"revokelockedfund-address-sender-uint256-lockedfundid-external-whennotpaused-nonreentrant-onlyrolesettler_role",level:3},{value:"Immersve Card E-Commerce Payment Happy Path",id:"immersve-card-e-commerce-payment-happy-path",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"immersve-payment-protocol"},"Immersve Payment Protocol"),(0,o.kt)("p",null,"Contract Module that allows users to deposit and lock funds in order to be able to fund one-time-use Immersve virtual cards."),(0,o.kt)("h2",{id:"extensions"},"Extensions"),(0,o.kt)("p",null,"For security reasons, the smart contract implements the following ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/contracts/4.x/"},"OpenZeppelin Contracts")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.openzeppelin.com/contracts/4.x/api/proxy#Initializable"},"Initializable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.openzeppelin.com/contracts/4.x/api/access#AccessControl"},"AccessControl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.openzeppelin.com/contracts/4.x/api/security#Pausable"},"Pausable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.openzeppelin.com/contracts/4.x/api/security#ReentrancyGuard"},"ReentrancyGuard"))),(0,o.kt)("h2",{id:"proxy"},"Proxy"),(0,o.kt)("p",null,"The Smart Contract implements the OpenZeppelin ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/contracts/4.x/api/proxy#TransparentUpgradeableProxy"},"TransparentUpgradeable")," proxy. Proxy features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Security"),": If any bugs are found, or potential security risks, the Smart Contract can be updated to resolve any potential issues"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Feature Upgradeability"),": Any new features and bug fixes can be added. The Smart Contract will keep the same state, without the need of expensive migrations"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Stability"),": Clients interacting with the Smart Contract will always do so through the same proxy address. The proxy will know the current implementation address and will always keep the same state.")),(0,o.kt)("p",null,"More about upgradeable contracts here: ",(0,o.kt)("a",{parentName:"p",href:"https://blog.openzeppelin.com/the-state-of-smart-contract-upgrades/"},"https://blog.openzeppelin.com/the-state-of-smart-contract-upgrades/")),(0,o.kt)(r.G,{chart:'graph LR\n    Client -- Trx --\x3e Proxy[(Proxy)]\n    Proxy -- "getImplementation()" --\x3e Proxy\n    Proxy -- old --\x3e v1{{ContractImplV1}}\n    Proxy -- "delegate call" --\x3e v2{{ContractImplV2}}',mdxType:"Mermaid"}),(0,o.kt)("h2",{id:"proxy-urls"},"Proxy URLs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Polygon (Mainnet): ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"PENDING"))),(0,o.kt)("li",{parentName:"ul"},"Polygon Mumbai (Testnet): ",(0,o.kt)("a",{parentName:"li",href:"https://mumbai.polygonscan.com/address/0xd73c2deE4604a1af3Db4E8E07Cf6Fb798aB77982#code"},"0xd73c2deE4604a1af3Db4E8E07Cf6Fb798aB77982"))),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"initializeaddress-_settlerrole-address-payable-_settlementaddress-address-_tokensmartcontract-uint256-_defaulttimeoutblocks-uint256-_safetyblocks-external-initializer"},(0,o.kt)("inlineCode",{parentName:"h3"},"initialize"),"(address _settlerRole, address payable _settlementAddress, address _tokenSmartContract, uint256 _defaultTimeoutBlocks, uint256 _safetyBlocks) external initializer"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Initialize the Smart Contract with the required arguments"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_settlerRole")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"address"),"): The web3 address that will act with the ",(0,o.kt)("inlineCode",{parentName:"li"},"SETTLER")," role."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_settlementAddress")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"address payable"),"): The web3 address were Locked funds will be sent once a payment is confirmed by Immersve"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_tokenSmartContract")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"address"),"): The current network address of the ERC-20 token Smart Contract"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_defaultTimeoutBlocks")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): Number of blocks in the blockchain that an asset lock will last by default"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_safetyBlocks")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): Number of blocks on top of the default timeout used to calculate if a Lock is usable or not. Because there might be a delay between a transaction confirmation and the actual use of Locked funds by Immersve, there has to be some safety threshold for Immersve to execute the settlement of funds."))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getversion-external-pure-returnsstring-memory"},(0,o.kt)("inlineCode",{parentName:"h3"},"getVersion()")," external pure returns(string memory)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get the current version implementation of the smart contract with a Version number stored in a Solidity Constant. This means that the constant is not saved into the Smart Contract store.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"pause-public-onlyrolepauser_role"},(0,o.kt)("inlineCode",{parentName:"h3"},"pause()")," public onlyRole(PAUSER_ROLE)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Pauses the functionality of the Smart Contract. All the functions marked with the ",(0,o.kt)("inlineCode",{parentName:"p"},"whenNotPaused")," modifier will reject the transaction once a pause is in effect. Only the ",(0,o.kt)("inlineCode",{parentName:"p"},"PAUSER_ROLE")," will be able to call this function.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"unpause-public-onlyrolepauser_role"},(0,o.kt)("inlineCode",{parentName:"h3"},"unpause()")," public onlyRole(PAUSER_ROLE)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Unpauses the functionality of the Smart Contract. All the functions marked with the ",(0,o.kt)("inlineCode",{parentName:"p"},"whenNotPaused")," modifier will accept the transaction normally. Only the ",(0,o.kt)("inlineCode",{parentName:"p"},"PAUSER_ROLE")," will be able to call this function.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"settimeoutblocksuint256-timeoutblocks-public-onlyrolesettler_role"},(0,o.kt)("inlineCode",{parentName:"h3"},"setTimeoutBlocks"),"(uint256 timeoutBlocks) public onlyRole(SETTLER_ROLE)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Set the default timeout for ",(0,o.kt)("inlineCode",{parentName:"p"},"AssetLockedFund")," as described  in ",(0,o.kt)("inlineCode",{parentName:"p"},"Asset Locked Funds")," section. Only the ",(0,o.kt)("inlineCode",{parentName:"p"},"SETTLER_ROLE")," will be able to call this function."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeoutBlocks")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): Number of blocks for an Asset Lock to be considered expired"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"setsafetyblocksuint256-timeoutblocks-public-onlyrolesettler_role"},(0,o.kt)("inlineCode",{parentName:"h3"},"setSafetyBlocks"),"(uint256 timeoutBlocks) public onlyRole(SETTLER_ROLE)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Set the safety block threshold for ",(0,o.kt)("inlineCode",{parentName:"p"},"AssetLockedFund")," as described  in ",(0,o.kt)("inlineCode",{parentName:"p"},"Asset Locked Funds")," section. Only the ",(0,o.kt)("inlineCode",{parentName:"p"},"SETTLER_ROLE")," will be able to call this function."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeoutBlocks")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): Number of blocks for an Asset Lock to be considered safe to settle"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"deposituint256-tokenamount-external-whennotpaused-nonreentrant"},(0,o.kt)("inlineCode",{parentName:"h3"},"deposit"),"(uint256 tokenAmount) external whenNotPaused nonReentrant"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"CardHolders can deposit token funds into the Smart Contract using this function. The funds can either be ",(0,o.kt)("inlineCode",{parentName:"p"},"locked")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"withdrawn")," by the consumer later. Locked funds cannot be withdrawn until the lock expires, or the user revokes the lock with an Immersve token."),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"There is a pre-requisite for this function to work. Because token is an ERC-20 token, \nthe consumer needs to approve (https://polygonscan.com/token/0x2791bca1f2de4661ed88a30c99a7a9449aa84174#writeProxyContract#F1 token funds \nto the Smart Contract public address\n")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tokenAmount")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): token Amount to deposit in ",(0,o.kt)("inlineCode",{parentName:"li"},"ethers")," format"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"deposittouint256-tokenamount-address-sender-external-whennotpaused-nonreentrant"},(0,o.kt)("inlineCode",{parentName:"h3"},"depositTo"),"(uint256 tokenAmount, address sender) external whenNotPaused nonReentrant"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"CardHolders can deposit token funds for a specific address into the Smart Contract using this function. The funds can either be ",(0,o.kt)("inlineCode",{parentName:"p"},"locked")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"withdrawn")," by the consumer later. Locked funds cannot be withdrawn until the lock expires, or the user revokes the lock with an Immersve token."),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"There is a pre-requisite for this function to work. Because token is an ERC-20 token, \nthe consumer needs to approve (https://polygonscan.com/token/0x2791bca1f2de4661ed88a30c99a7a9449aa84174#writeProxyContract#F1 token funds \nto the target sender address for the Smart Contract public address\n")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tokenAmount")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): token Amount to deposit in ",(0,o.kt)("inlineCode",{parentName:"li"},"ethers")," format"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"address")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"address"),"): Deposit target address"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"withdrawuint256-tokenamount-external-whennotpaused-nonreentrant"},(0,o.kt)("inlineCode",{parentName:"h3"},"withdraw"),"(uint256 tokenAmount) external whenNotPaused nonReentrant"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"CardHolders can withdraw token funds associated to their balance from the Smart Contract using this function. Locked funds cannot be withdrawn until the lock expires, or the user revokes the lock with an Immersve token."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tokenAmount")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): token Amount to withdraw in ",(0,o.kt)("inlineCode",{parentName:"li"},"ethers")," format"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"createlockedfund-uint256-tokenamount-external-whennotpaused-nonreentrant"},(0,o.kt)("inlineCode",{parentName:"h3"},"createLockedFund")," (uint256 tokenAmount) external whenNotPaused nonReentrant"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"CardHolders can put a Lock in place for deposited funds so Immersve can authorize the use of a credit card using those locked funds as collateral.\nThe locked funds will be represented with a ",(0,o.kt)("inlineCode",{parentName:"p"},"AssetLockedFund")," struct inside the Smart Contract. When created, a timeout will be put in place for this lock based on the default Timeout Blocks (see [])"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tokenAmount")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): token Amount to lock in ",(0,o.kt)("inlineCode",{parentName:"li"},"ethers")," format"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"depositandcreatelockedfund-uint256-tokenamount-external-whennotpaused-nonreentrant"},(0,o.kt)("inlineCode",{parentName:"h3"},"depositAndCreateLockedFund")," (uint256 tokenAmount) external whenNotPaused nonReentrant"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Similar to ",(0,o.kt)("a",{parentName:"p",href:"/contracts/payment-protocol#deposituint256-tokenamount-external-whennotpaused-nonreentrant"},(0,o.kt)("em",{parentName:"a"},"deposit"))," but combined with ",(0,o.kt)("a",{parentName:"p",href:"/contracts/payment-protocol#createlockedfund-uint256-tokenamount-external-whennotpaused-nonreentrant"},(0,o.kt)("em",{parentName:"a"},"createLockedFund")),". This function is doing both the deposit and the lock at the same time to save gas fees."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tokenAmount")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): token Amount to deposit in ",(0,o.kt)("inlineCode",{parentName:"li"},"ethers")," format"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"depositandcreatelockedfundfor-uint256-tokenamount-address-sender-external-whennotpaused-nonreentrant"},(0,o.kt)("inlineCode",{parentName:"h3"},"depositAndCreateLockedFundFor")," (uint256 tokenAmount, address sender) external whenNotPaused nonReentrant"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Similar to ",(0,o.kt)("a",{parentName:"p",href:"/contracts/payment-protocol#depositandcreatelockedfund-uint256-tokenamount-external-whennotpaused-nonreentrant"},(0,o.kt)("em",{parentName:"a"},"depositAndCreateLockedFund"))," but the target address is specified as an argument instead of using ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.sender")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tokenAmount")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): token Amount to deposit in ",(0,o.kt)("inlineCode",{parentName:"li"},"ethers")," format"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"checklockedfundpayment-address-sender-uint256-price-uint256-lockedfundid-external-view-whennotpaused-returnsuint256"},(0,o.kt)("inlineCode",{parentName:"h3"},"checkLockedFundPayment")," (address sender, uint256 price, uint256 lockedFundId) external view whenNotPaused returns(uint256)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Used by Immersve to check that the locked funds of an Immersve Card payment is currently valid. This function will check that the specified address has enough locked funds for the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"lockedFundId")," and will return the number of blocks that the lock is still valid for."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sender")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"address"),"): CardHolder Address doing a payment requiring locked funds with Immersve"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"price")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): token Amount to settle in ",(0,o.kt)("inlineCode",{parentName:"li"},"ethers")," format"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lockedFundId")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): Matching Locked Fund Id (which is linked to a Card) to settle payment being done with an Immersve Credit Card"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"confirmlockedfundpayment-address-sender-uint256-price-uint256-lockedfundid-external-whennotpaused-nonreentrant-onlyrolesettler_role"},(0,o.kt)("inlineCode",{parentName:"h3"},"confirmLockedFundPayment")," (address sender, uint256 price, uint256 lockedFundId) external whenNotPaused nonReentrant onlyRole(SETTLER_ROLE)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Used by Immersve to confirm the settlement of an Immersve Card payment. This function will check that the specified address has enough locked funds for the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"lockedFundId")," and will transfer the settlement amount (",(0,o.kt)("inlineCode",{parentName:"p"},"price"),") to the settlement address, specified in the ",(0,o.kt)("a",{parentName:"p",href:"/contracts/payment-protocol#initializeaddress-payable-_settlementaddress-address-_tokensmartcontract-uint256-_defaulttimeoutblocks-uint256-_safetyblocks-external-initializer"},(0,o.kt)("inlineCode",{parentName:"a"},"initialize"))," function.\nIt releases locked funds. Used for transactions with amount matching locked funds.\nIt can only be called by the SETTLER role"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sender")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"address"),"): CardHolder Address doing a payment requiring locked funds with Immersve"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"price")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): token Amount to settle in ",(0,o.kt)("inlineCode",{parentName:"li"},"ethers")," format"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lockedFundId")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): Matching Locked Fund Id (which is linked to a Card) to settle payment being done with an Immersve Credit Card"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"confirmlockedfundpartialpayment-address-sender-uint256-price-uint256-lockedfundid-external-whennotpaused-nonreentrant-onlyrolesettler_role"},(0,o.kt)("inlineCode",{parentName:"h3"},"confirmLockedFundPartialPayment")," (address sender, uint256 price, uint256 lockedFundId) external whenNotPaused nonReentrant onlyRole(SETTLER_ROLE)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Used by Immersve to confirm the settlement of an Immersve Card payment. This function will check that the specified address has enough locked funds for the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"lockedFundId")," and will transfer the settlement amount (",(0,o.kt)("inlineCode",{parentName:"p"},"price"),") to the settlement address, specified in the ",(0,o.kt)("a",{parentName:"p",href:"/contracts/payment-protocol#initializeaddress-payable-_settlementaddress-address-_tokensmartcontract-uint256-_defaulttimeoutblocks-uint256-_safetyblocks-external-initializer"},(0,o.kt)("inlineCode",{parentName:"a"},"initialize"))," function.\nUpdates locked funds. Used for partial / incremental transactions (multiple transaction with amount < locked funds).\nIt can only be called by the SETTLER role"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sender")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"address"),"): CardHolder Address doing a payment requiring locked funds with Immersve"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"price")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): token Amount to settle in ",(0,o.kt)("inlineCode",{parentName:"li"},"ethers")," format"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lockedFundId")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): Matching Locked Fund Id (which is linked to a Card) to settle payment being done with an Immersve Credit Card"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getavailablelockedfundsbalance-address-sender"},(0,o.kt)("inlineCode",{parentName:"h3"},"getAvailableLockedFundsBalance")," (address sender)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get Available Locked funds for the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"address")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sender")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"address"),"): CardHolder Address that already did a funds lock"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getbalance"},(0,o.kt)("inlineCode",{parentName:"h3"},"getBalance()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get the available token balance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.sender")," deposited in the Smart Contract. Balance is not the necessarily the same as locked funds as the former are short lived.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getsenderbalance-address-sender"},(0,o.kt)("inlineCode",{parentName:"h3"},"getSenderBalance")," (address sender)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get the available token balance of the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"sender")," argument, deposited in the Smart Contract. Balance is not the necessarily the same as locked funds as the former are short lived."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sender")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"address"),"): CardHolder Address"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getlockedfunds"},(0,o.kt)("inlineCode",{parentName:"h3"},"getLockedFunds()")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get the ",(0,o.kt)("inlineCode",{parentName:"p"},"AssetLockedFund")," objects of the ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.sender"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getsenderlockedfunds-address-sender-onlyrolesettler_role"},(0,o.kt)("inlineCode",{parentName:"h3"},"getSenderLockedFunds")," (address sender) onlyRole(SETTLER_ROLE)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get the ",(0,o.kt)("inlineCode",{parentName:"p"},"AssetLockedFund")," objects of the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"sender")," argument"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sender")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"address"),"): CardHolder Address that already locked funds at least once"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"revokelockedfundmultisig-uint256-lockedfundid-uint256-nonce-bytes-memory-signature-external-whennotpaused-nonreentrant"},(0,o.kt)("inlineCode",{parentName:"h3"},"revokeLockedFundMultiSig")," (uint256 lockedFundId, uint256 nonce, bytes memory signature) external whenNotPaused nonReentrant"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"CardHolders will be able to revoke a fund lock using an Immersve signature. Immersve will first check if the funds is being used for a payment on Immersve backend.\nIf the funds are free to release, Immersve will sign a message with a nonce only valid for a ",(0,o.kt)("inlineCode",{parentName:"p"},"lockedFundId")," and the funds will be put back into the CardHolder balance"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lockedFundId")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): Id of the ",(0,o.kt)("inlineCode",{parentName:"li"},"AssetLockedFund")," to be released"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nonce")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): Nonce provided by Immersve API and matches the ",(0,o.kt)("inlineCode",{parentName:"li"},"signature")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"signature")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"memory"),"): String signature provided by Immersve API created with a ",(0,o.kt)("inlineCode",{parentName:"li"},"nonce")," to avoid replay calls"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"revokelockedfund-address-sender-uint256-lockedfundid-external-whennotpaused-nonreentrant-onlyrolesettler_role"},(0,o.kt)("inlineCode",{parentName:"h3"},"revokeLockedFund")," (address sender, uint256 lockedFundId) external whenNotPaused nonReentrant onlyRole(SETTLER_ROLE)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Function used by Immersve Backend (only SETTLER role can call this function) to revoke an unexpired lock. This could be done if Immersve detect illegal or malicious activity related to the ",(0,o.kt)("inlineCode",{parentName:"p"},"sender")," and prefers to revoke locked fund ids"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sender")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"address"),"): CardHolder Address that already locked funds with the Smart Contract"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lockedFundId")," (type ",(0,o.kt)("inlineCode",{parentName:"li"},"uint256"),"): Id of the ",(0,o.kt)("inlineCode",{parentName:"li"},"AssetLockedFund")," to be released"))),(0,o.kt)("h2",{id:"immersve-card-e-commerce-payment-happy-path"},"Immersve Card E-Commerce Payment Happy Path"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Card Holder locks token funds with Immersve Smart Contract"),(0,o.kt)("li",{parentName:"ul"},"Card Holder receives a valid Credit Card to be used for E-Commerce transaction from Immersve"),(0,o.kt)("li",{parentName:"ul"},"Card Holder uses the Immersve Card to pay for goods purchased on an E-Commerce platform"),(0,o.kt)("li",{parentName:"ul"},"Immersve authorizes the payment with Credit Card network once the locked funds are confirmed"),(0,o.kt)("li",{parentName:"ul"},"Purchase is confirmed by Immersve and E-Commerce merchant")),(0,o.kt)(r.G,{chart:"sequenceDiagram\n    participant H as Card Holder\n    participant W as Web-3 Wallet\n    participant I as Immersve Backend\n    participant S as Smart Contract\n    participant U as token Smart Contract\n    participant E as E-Commerce website\n    participant M as E-Commerce Merchant\n    H->>I: Create card pre-request\n    I--\x3e>H: Web3 Transaction Details\n    H->>W: Submit Transactions\n    W->>U: Approve Card Total Authorized Amount in token\n    W->>S: Deposit and Lock token funds\n    S->>U: Transfer approved amount from Card Holder wallet to Immersve Smart Contract\n    S--\x3e>S: Add approved amount to Card Holder address balance\n    S--\x3e>S: Create AssetLockedFund to temporarily lock Card Holder funds to be used by Immersve Card\n    S--\x3e>W: Transaction Hash\n    W--\x3e>H: Transaction Hash\n    H->>I: Card Create Request\n    I->>S: Check enough funds for Card creation\n    S--\x3e>I: Locked Funds confirmed\n    I--\x3e>H: Card created\n    H->>E: Use Immersve Card to pay for goods online\n    E--\x3e>M: Validate Credit Card payment\n    M->>I: Merchant request payment authorization through Credit Card network\n    I->>S: Check locked funds and settle payment amount\n    S->>S: Settle payment funds\n    I->>M: Authorize payment",mdxType:"Mermaid"}))}p.isMDXComponent=!0}}]);