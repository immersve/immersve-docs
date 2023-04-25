---
sidebar_position: 1
tags:
  - simulator
---

# Introduction

The simulator app is a test application that enables use of Immersve cards with a fake merchant.

To begin using the simulator, one must first create an Immersve card using the main webapp. This app will prompt you to
use metamask to load test funds onto a short lived card. Once this card has been generated, navigate to the simulator app 
at `/simulator` on the main Immersve app. 

**NOTE:** You must stay logged into your Immersve account while using the simulator.

Once on the simulator app, you will be given a form to enter your card details into, as well as a series of options as indicated
by the flow diagram below.


```mermaid
graph TD;
    A[Enter Card Details] --> B[Clear Without Auth]
    A --> C[Authorize]
		C --> D[Clear]
    B --> E[Reverse]
		C --> E
		D --> E

```

At any point the `reset` button can be used to restore the application to its initial state, not maintaining any previous transaction history.
