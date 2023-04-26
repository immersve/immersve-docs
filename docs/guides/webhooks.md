---
sidebar_position: 4
slug: /guides/webhooks
---

# Webhooks

Immersve uses webhooks to push real-time notifications to your app.

Immersve sends events to your webhook endpoint as part of a POST request with a JSON payload. Your webhook must return
a `200` response. If a `200` response is not received, Immersve will retry sending the notification with exponential
backoff. Immersve has a maximum retry delay of 12 hours.

There are multiple webhooks that Immersve sends to your app:

- [Authorization](/api-reference/authorization) - Sales and Authorization requests
- [Transaction](/api-reference/transaction) - Clearing and Refund requests

## Authentication

Immersve uses API Keys to authenticate webhooks. You must provide an API Key to Immersve at the time of registration.
Immersve will send the following header
on each webhook request:

- `APIKEY` - The API Key provided by you

## Steps to receive webhooks

You can start receiving event notifications in your app using the steps in this section:

1. Create a webhook endpoint as an HTTP endpoint (URL) on your local
   server [Webhook API Reference](/api-reference/webhooks-custodial).
2. Handle requests from Immersve by parsing each event object and returning a `200` response status code.
3. Deploy your webhook endpoint so it’s a publicly accessible HTTPS URL.
4. Provide Immersve with a valid API Key
5. [Contact Immersve](mailto:info@immersve.com) to register your publicly accessible HTTPS URL.
