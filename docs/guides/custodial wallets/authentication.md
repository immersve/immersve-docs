---
sidebar_position: 1
tags:
  - authentication
  - custodial
---

# Authentication

API key authentication is the method in which custodial providers authenticate with our api. API keys are issued to the custodial provider by IMMERSVE and are used to authorize requests to the relevant custodial endpoints.

Each request must be sent with the following headers:
- **x-api-key** - The api key issued
- **x-api-secret** - The secret issued
- **x-account-id** - The account id which is being targeted by the operation. This can be omitted if the target is the root account (for example creating an account)

<!-- ### Login Flow

```mermaid
sequenceDiagram
```

1. 
2. 
3. 
4.  -->