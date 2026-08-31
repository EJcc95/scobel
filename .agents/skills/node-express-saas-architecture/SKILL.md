---
name: node-express-saas-architecture
description: >-
  Use when creating, reorganizing, or reviewing a production SaaS backend with
  Node.js, Express, MySQL, and Better Auth. Defines a modular monolith layout,
  boundaries, configuration, logging, uploads, jobs, migrations, and tests.
  Not for frontend-only work or serverless-only applications.
---

# Node.js/Express SaaS architecture

Prefer a modular monolith first: one deployable Express application with clear
module boundaries. Extract services only when scale, ownership, or deployment
needs justify it.

## Recommended structure

```text
project/
├─ src/
│  ├─ app.ts                    # Express composition, no listen()
│  ├─ server.ts                 # process startup and graceful shutdown
│  ├─ config/                   # env parsing, URLs, feature config
│  ├─ db/                       # MySQL pool, migrations, transaction helpers
│  ├─ auth/                     # Better Auth instance and session middleware
│  ├─ middleware/               # errors, request id, auth, rate limits
│  ├─ modules/
│  │  ├─ users/
│  │  ├─ organizations/
│  │  ├─ billing/
│  │  └─ files/
│  │     ├─ *.routes.ts
│  │     ├─ *.controller.ts
│  │     ├─ *.service.ts
│  │     ├─ *.repository.ts
│  │     ├─ *.schema.ts
│  │     └─ *.types.ts
│  ├─ shared/                   # errors, result types, logger, crypto, utils
│  ├─ jobs/                     # workers, schedules, retry policies
│  └─ routes/index.ts           # route registry only
├─ migrations/                  # versioned MySQL and Better Auth migrations
├─ tests/                       # integration, contract, and unit tests
├─ logs/                        # local/runtime output; ignored by git
├─ uploads/                     # local development only; ignored by git
├─ tmp/                         # transient files; ignored by git
├─ .env.example
├─ .env.test
├─ package.json
└─ tsconfig.json
```

In production, send logs to stdout/stderr or a managed log sink and store user
files in private S3-compatible storage. Do not commit `logs/`, `uploads/`,
`.env*` secrets, or generated runtime data.

## Module boundaries

- Routes map HTTP to controllers; they do not contain business logic.
- Controllers parse input, call a service, and map the result to HTTP.
- Services enforce business rules and authorization, then coordinate repositories.
- Repositories are the only module-specific layer that talks to MySQL.
- Shared code must stay dependency-light; do not put domain rules in `shared/`.
- A module may import `shared/`, but should not reach into another module's repository.

## Request lifecycle

```text
request id → security/CORS → Better Auth session → rate limit → route
→ Zod validation → ownership/org authorization → service → repository
→ response/error middleware
```

Use `credentials: true` for cookie sessions and keep `BETTER_AUTH_SECRET`,
database credentials, payment secrets, and storage credentials server-only.

## MySQL rules

- Use a single configured pool and parameterized queries/ORM methods.
- Use UTC `DATETIME(3)`, explicit indexes, foreign keys, and transactions for
  multi-write operations.
- Keep migrations forward-compatible and review lock impact on large tables.
- Never expose SQL errors, internal ids, or raw stack traces to the frontend.

## Logs, files, and jobs

- Use structured logs with request id, actor id, module, event, and duration;
  redact passwords, cookies, tokens, and payment data.
- Generate upload keys server-side and authorize downloads before issuing a
  short-lived URL.
- Jobs must be idempotent, retryable, observable, and safe across restarts;
  use a queue or MySQL jobs table instead of `setInterval` in a request process.

## Definition of done

- [ ] `app.ts` can be imported in tests without opening a port.
- [ ] Environment variables are parsed once at startup and documented.
- [ ] Every protected route uses Better Auth session middleware.
- [ ] Authorization is enforced in the service, not only in the UI.
- [ ] Input schemas, integration tests, migrations, health checks, and graceful shutdown exist.
- [ ] Logs/uploads/tmp are ignored and production storage/logging is externalized.
