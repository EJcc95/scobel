---
name: edge-functions-and-webhooks
description: >-
  Use when adding Node.js/Express API routes, Stripe/webhook handlers,
  server-side secrets, or logic that must not run in the browser. Not for
  client-only UI, CSS, or simple frontend state.
---

# Express routes and webhooks

Trusted callbacks, private keys, and business rules belong in the Express
backend. The frontend calls these routes over HTTP and never receives private
credentials.

## Structure

```
backend/src/
  routes/stripe.routes.ts
  controllers/stripe.controller.ts
  services/stripe.service.ts
  middleware/require-session.ts
  repositories/
```

- Verify webhook signatures using the raw request body before JSON parsing.
- Validate request bodies with Zod.
- Make handlers idempotent by storing provider event IDs in a unique table.
- Return `2xx` quickly after durable DB write/enqueue; process heavy work in a worker when appropriate.
- Read secrets from `process.env`; never from `VITE_*`/`PUBLIC_*` variables.

## Express mounting

```ts
app.post("/api/webhooks/stripe", express.raw({ type: "application/json" }), stripeWebhookController);
app.use(express.json());
```

Regular authenticated routes use `requireSession` from
`better-auth-express-frontend`. Webhooks use provider signature verification,
not a user session.

## Required companion skills

- `server-input-validation` — Zod on every external body
- `api-error-handling` — stable JSON error codes
- `payment-webhook-idempotency` — duplicate-event protection
- `payment-webhook-testing` — local and provider CLI tests

## Checklist

- [ ] Raw body is preserved for signature verification.
- [ ] Authentication or webhook signature is checked on every entry point.
- [ ] Authorization checks ownership/membership in the backend.
- [ ] Payload is validated and errors use stable JSON codes.
- [ ] Secrets are server-only and absent from logs.
- [ ] Event handling is idempotent and observable.
