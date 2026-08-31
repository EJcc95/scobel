## Express webhook skeleton

```ts
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function stripeWebhook(req, res) {
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      req.headers["stripe-signature"]!,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch {
    return res.status(400).json({ error: "invalid_signature" });
  }

  if (await webhookEventRepository.exists(event.id)) return res.sendStatus(200);
  await webhookEventRepository.insert({ id: event.id, type: event.type });

  switch (event.type) {
    case "customer.subscription.updated":
      await billingService.syncSubscription(event.data.object);
      break;
    case "customer.subscription.deleted":
      await billingService.cancelSubscription(event.data.object.id);
      break;
  }
  return res.sendStatus(200);
}
```

The route must use `express.raw({ type: "application/json" })` before the
global JSON parser. Database writes belong in repositories/services, and the
frontend reads subscription state from the Express API after webhook delivery.
