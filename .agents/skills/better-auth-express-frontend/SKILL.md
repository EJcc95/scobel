---
name: better-auth-express-frontend
description: >-
  Use when implementing authentication with Better Auth in a Node.js/Express
  backend and a separate React, Vite, Astro, or similar frontend. Covers
  sessions, cookies, protected routes, roles, CORS, and typed API clients.
  Not for unrelated client-only authentication.
---

# Better Auth with Express and a separate frontend

Use a backend-owned session architecture. The browser calls Express over HTTP;
it never connects directly to the database or decides authorization.

## Recommended boundaries

```
frontend/
  src/lib/api-client.ts       # fetch wrapper, credentials, error shape
  src/lib/auth-client.ts      # Better Auth browser client
  src/hooks/                  # TanStack Query/SWR wrappers

backend/
  src/auth/auth.ts            # Better Auth instance and database adapter
  src/auth/auth.middleware.ts # session lookup and route guards
  src/routes/auth.routes.ts   # Better Auth catch-all mounting
  src/modules/*/              # controllers, services, repositories
```

- Better Auth owns `user`, `session`, `account`, and `verification` tables.
- Business tables reference the Better Auth user id and are accessed through
  repositories/services in Express.
- Use `organization`/membership tables or Better Auth's organization plugin for
  multi-tenant roles, then enforce membership in backend middleware/services.
- Keep auth and business migrations versioned and reviewed together, but do not
  hand-edit tables managed by Better Auth without checking its schema contract.

## Express mounting

Better Auth requires ESM. Mount its catch-all handler before `express.json()`
so the handler can read the raw request body. Use the Express v4 or v5 route
syntax matching the installed Express version.

```ts
import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth/auth.js";

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN,
  credentials: true,
}));
app.all("/api/auth/*", toNodeHandler(auth)); // Express 4
// Express 5: app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());
```

Restrict `origin` to an allowlist in production. Configure the same origins in
Better Auth `trustedOrigins`; never use `*` with credentials.

## Database and configuration

Use the adapter for the database already used by the application (MySQL,
PostgreSQL, or an ORM adapter such as Drizzle/Prisma). Generate Better Auth's
schema with its CLI, review it, then apply it through the project's migration
system. Typical server-only variables:

```text
BETTER_AUTH_SECRET
BETTER_AUTH_URL
FRONTEND_ORIGIN
DATABASE_URL
```

Keep secrets out of `VITE_*`, `PUBLIC_*`, browser bundles, and logs. Separate
development and production cookie settings; production must use HTTPS and
secure, httpOnly cookies.

## Reading a session in Express

```ts
import { fromNodeHeaders } from "better-auth/node";

export async function requireSession(req, res, next) {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  if (!session) return res.status(401).json({ error: "unauthorized" });
  req.auth = session;
  next();
}
```

For roles and ownership, authenticate first, then query membership/ownership
from the database. Do not accept `user_id`, `organization_id`, or role from the
request body as proof of permission.

## Frontend contract

Use `credentials: "include"` for every request that relies on the session.
Keep auth calls in `auth-client.ts`; keep business calls in typed fetchers and
wrap them with the chosen cache library.

```ts
export async function apiFetch<T>(path: string, init: RequestInit = {}) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}${path}`, {
    ...init,
    credentials: "include",
    headers: { "Content-Type": "application/json", ...init.headers },
  });
  if (!response.ok) throw await parseApiError(response);
  return response.json() as Promise<T>;
}
```

Use `/api/me` or Better Auth's session endpoint as the single session query.
On `401`, clear protected query caches and redirect through the router. Do not
store session tokens in localStorage.

## Verification checklist

- [ ] Better Auth catch-all is mounted before body parsing.
- [ ] CORS, `trustedOrigins`, and cookie credentials match the deployment.
- [ ] Better Auth migrations are applied and compatible with the selected DB.
- [ ] Protected Express routes use session middleware.
- [ ] Authorization checks membership/ownership on the server.
- [ ] Frontend sends cookies and never exposes server secrets.
- [ ] Sign-up, sign-in, sign-out, reset, refresh, and session expiry are tested.
- [ ] CSRF/origin protections remain enabled unless a reviewed exception exists.
