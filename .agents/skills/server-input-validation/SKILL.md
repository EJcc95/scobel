---
name: server-input-validation
description: >-
  Use when validating request bodies, params, query strings, webhooks, or
  worker payloads in Node.js/Express. Zod on the server is mandatory; never
  trust client validation.
---

# Server input validation

Client Zod improves UX; Express validates again before authorization and DB
access.

```ts
const schema = z.object({
  name: z.string().trim().min(1).max(80),
  organizationId: z.string().uuid(),
});

const parsed = schema.safeParse(req.body);
if (!parsed.success) {
  return res.status(400).json({
    error: "invalid_input",
    details: parsed.error.flatten(),
  });
}
```

Order: verify Better Auth session or webhook signature → validate body/params →
authorize ownership/membership → execute service/repository operation.

Share schemas through a deliberately dependency-light package when useful, but
never import server secrets into frontend code.

## Checklist

- [ ] Every POST/PATCH/PUT endpoint has a schema.
- [ ] Query strings and path params are validated too.
- [ ] Validation returns stable 400 JSON errors.
- [ ] Authorization occurs after validation and uses session identity.
- [ ] Production errors do not expose stack traces, SQL, or provider details.
