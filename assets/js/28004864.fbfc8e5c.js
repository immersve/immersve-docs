"use strict";(self.webpackChunkimmersve_docs=self.webpackChunkimmersve_docs||[]).push([[47],{31114:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(8209);const i={sidebar_position:4,tags:["reports","custodial","non-custodial"]},l="Clearing Reports",o={unversionedId:"guides/reports/clearing-reports",id:"guides/reports/clearing-reports",title:"Clearing Reports",description:"The clearing report can be used to review all card purchase clearings for a given period.",source:"@site/docs/guides/reports/clearing-reports.md",sourceDirName:"guides/reports",slug:"/guides/reports/clearing-reports",permalink:"/guides/reports/clearing-reports",draft:!1,tags:[{label:"reports",permalink:"/tags/reports"},{label:"custodial",permalink:"/tags/custodial"},{label:"non-custodial",permalink:"/tags/non-custodial"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["reports","custodial","non-custodial"]},sidebar:"primarySidebar",previous:{title:"Authorization Reports",permalink:"/guides/reports/authorization-reports"},next:{title:"Simulator",permalink:"/category/simulator"}},d={},p=[{value:"Example",id:"example",level:2}],s={toc:p};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clearing-reports"},"Clearing Reports"),(0,r.kt)("p",null,"The clearing report can be used to review all card purchase clearings for a given period."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cardToken"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier of the ",(0,r.kt)("a",{parentName:"td",href:"/api-reference/card"},"card"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transactionId"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier of the associated card ",(0,r.kt)("a",{parentName:"td",href:"/api-reference/transactions"},"transaction"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authorizationId"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier of the original authorization request received via the card scheme network.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transactionType"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.iso.org/obp/ui/#iso:std:iso:8583:-1:ed-1:v1:en"},"ISO 8583")," message class. This is a messaging standard for payments initiated with a ",(0,r.kt)("a",{parentName:"td",href:"/api-reference/card"},"card"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merchantCurrency"),(0,r.kt)("td",{parentName:"tr",align:null},"Local currency of the country where the ",(0,r.kt)("a",{parentName:"td",href:"/api-reference/transactions"},"transaction")," was processed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merchantAmount"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of the ",(0,r.kt)("a",{parentName:"td",href:"/api-reference/transactions"},"transaction"),", in minor units of the local currency.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"billingCurrency"),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the card holder's account balance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"billingAmount"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of the ",(0,r.kt)("a",{parentName:"td",href:"/api-reference/transactions"},"transaction"),", in minor units of the billing currency.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settlementCurrency"),(0,r.kt)("td",{parentName:"tr",align:null},"Currency the card issuer selects to be paid in.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settlementAmount"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to be settled, in minor units of the settlement currency. This amount may include fees.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exchangeRate"),(0,r.kt)("td",{parentName:"tr",align:null},"Exchange rate applied between the merchant amount and the billing amount.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accountId"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier of the ",(0,r.kt)("a",{parentName:"td",href:"/api-reference/accounts-custodial"},"account")," which the ",(0,r.kt)("a",{parentName:"td",href:"/api-reference/card"},"card")," belongs to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merchantId"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier of the merchant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merchantName"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the merchant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merchantCity"),(0,r.kt)("td",{parentName:"tr",align:null},"City of the merchant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"merchantCountry"),(0,r.kt)("td",{parentName:"tr",align:null},"Country of the merchant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createdAt"),(0,r.kt)("td",{parentName:"tr",align:null},"When the ",(0,r.kt)("a",{parentName:"td",href:"/api-reference/transactions"},"transaction")," was created, expressed in UNIX epoch time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"approvedAt"),(0,r.kt)("td",{parentName:"tr",align:null},"When the ",(0,r.kt)("a",{parentName:"td",href:"/api-reference/transactions"},"transaction")," was approved, expressed in UNIX epoch time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mcc"),(0,r.kt)("td",{parentName:"tr",align:null},"Four-digit number listed in ",(0,r.kt)("a",{parentName:"td",href:"https://www.iso.org/obp/ui/#iso:std:iso:18245:ed-2:v1:en"},"ISO 18245"),". Used to classify a business by the types of goods or services it provides.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channel"),(0,r.kt)("td",{parentName:"tr",align:null},"Channel used to initialize the ",(0,r.kt)("a",{parentName:"td",href:"/api-reference/transactions"},"transaction"),". Examples include ",(0,r.kt)("inlineCode",{parentName:"td"},"ATM"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"Online"),".")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"169286b0603e6a75122cc0b217d3b850_clearing_2023-04-18T00:00:00.000Z_2023-04-18T00:00:00.000Z.csv")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"card_token,transaction_id,authorization_id,transaction_type,merchant_currency,merchant_amount,billing_currency,billing_amount,settlement_currency,settlement_amount,exchange_rate,account_id,merchant_id,merchant_name,merchant_city,merchant_country,creation_at,approved_at,mcc,channel\n789f7719eab12100789653487c136165,1000000324137,1000000324138,1200,USD,500,USD,500,USDC,6000000,1.0000000000,e64aa69f0a9af2d664e5989bd7f22562,000000000000000,Family Clothing Store,Auckland,NZL,2023-04-18T01:08:06.435Z,2023-04-18T01:08:09.144Z,5651,Online\n")))}c.isMDXComponent=!0}}]);