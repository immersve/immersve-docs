---
sidebar_position: 1
tags:
  - authentication
  - custodial
---

# Authentication

API clients consuming the custodial wallet API endpoints use API key authentication to authenticate to the API. API keys are issued to the custodial wallet provider by Immersve and are used to authorize requests to the relevant custodial wallet endpoints.

Each request must be made with the following headers:
- **x-api-key** - The API key issued by Immersve
- **x-api-secret** - The API secret issued by Immersve
- **x-account-id** - The account ID targeted by the operation. This can be omitted if the target is the root account (such as when creating an account for example)

[Contact us](https://immersve.com/#contact) if you require the above credentials. 

<!-- ### Login Flow

```mermaid
sequenceDiagram
```

1. 
2. 
3. 
4.  -->