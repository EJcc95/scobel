---
name: api-error-handling
description: >-
  Use when standardizing Node.js/Express API errors: HTTP status codes, JSON
  shape, logging, validation failures, and mapping database/provider errors to
  frontend responses.
---

# API error handling

Use one stable response shape:

```json
{ "error": "forbidden", "message": "You do not have access to this project." }
```

| Code | Slug | Meaning |
|---|---|---|
| 400 | `invalid_input` | Zod/body/params failure |
| 401 | `unauthorized` | Missing or expired Better Auth session |
| 403 | `forbidden` | Authenticated but not authorized |
| 404 | `not_found` | Missing or intentionally hidden resource |
| 409 | `conflict` | Unique/state conflict |
| 429 | `rate_limited` | Too many requests |
| 500 | `internal_error` | Unexpected server failure |

Implement an Express error middleware. Log the detailed exception with a
correlation id, but return generic 500 text. Map known database constraint
errors to 409 and validation errors to 400; never expose SQL, stack traces,
passwords, tokens, or payment data.

```ts
export function errorHandler(err, req, res, _next) {
  const requestId = req.id ?? crypto.randomUUID();
  console.error({ requestId, err });
  res.setHeader("x-request-id", requestId);
  res.status(500).json({ error: "internal_error", message: "Something went wrong." });
}
```

Frontend hooks map slugs to user-safe copy and expose retry where meaningful.
Do not use HTTP 200 with `{ success: false }` for failures.

## Checklist

- [ ] Every route returns JSON errors, not accidental HTML.
- [ ] Zod failures have field-level `details` when useful.
- [ ] 401 and 403 remain distinguishable.
- [ ] Correlation ids appear in logs and response headers.
- [ ] Production messages do not leak provider or database internals.
