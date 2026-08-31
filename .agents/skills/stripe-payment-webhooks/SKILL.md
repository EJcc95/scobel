---
name: stripe-payment-webhooks
description: >-
  Use when implementing Stripe webhooks in a Node.js/Express backend:
  signature verification, subscriptions, Checkout, and idempotent persistence.
---

# Stripe payment webhooks

Webhooks are the source of truth for paid state. Checkout success URLs and
frontend callbacks are not sufficient.

## Express endpoint

Mount the webhook with `express.raw({ type: "application/json" })` before the
global JSON parser. Verify `stripe-signature` with `stripe.webhooks.constructEvent`
using the raw `Buffer`, then persist the event id before side effects.

```ts
app.post("/api/webhooks/stripe", express.raw({ type: "application/json" }), stripeWebhook);

export async function stripeWebhook(req, res) {
  const event = stripe.webhooks.constructEvent(
    req.body,
    req.headers["stripe-signature"],
    process.env.STRIPE_WEBHOOK_SECRET!,
  );
  if (await webhookEventRepository.exists(event.id)) return res.sendStatus(200);
  await webhookEventRepository.insert({ id: event.id, type: event.type });
  await billingService.handle(event);
  return res.sendStatus(200);
}
```

Return `400` for invalid signatures and `2xx` quickly after durable write or
enqueue. Keep `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` server-only.

## MySQL persistence

```sql
CREATE TABLE stripe_webhook_events (
  id VARCHAR(255) PRIMARY KEY,
  type VARCHAR(120) NOT NULL,
  livemode BOOLEAN NOT NULL DEFAULT FALSE,
  processed_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
);

CREATE TABLE subscriptions (
  user_id VARCHAR(64) PRIMARY KEY,
  stripe_customer_id VARCHAR(255) UNIQUE,
  stripe_subscription_id VARCHAR(255) UNIQUE,
  status VARCHAR(32) NOT NULL,
  price_id VARCHAR(255),
  current_period_end DATETIME(3),
  cancel_at_period_end BOOLEAN NOT NULL DEFAULT FALSE,
  updated_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
);
```

Handle `checkout.session.completed`, subscription created/updated/deleted,
`invoice.paid`, and `invoice.payment_failed` according to the product rules.
Upsert by Stripe ids and resolve the application user from server-created
metadata; never let the client grant entitlements.

See `payment-webhook-idempotency`, `payment-webhook-testing`, and
`payment-failed-and-recovery` for companion flows.
