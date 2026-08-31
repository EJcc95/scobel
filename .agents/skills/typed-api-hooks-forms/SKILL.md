---
name: typed-api-hooks-forms
description: >-
  Use when adding typed frontend API hooks or Zod/react-hook-form forms for a
  separate Node.js/Express API. Pick TanStack Query or SWR per project.
  Not for styling-only changes or auth-provider setup.
---

# Typed API hooks and forms

The frontend talks to Express through typed fetchers. It never imports a DB
client or queries tables directly.

| Concern | Default |
|---|---|
| Server-state cache | `@tanstack/react-query` |
| Alternative cache | SWR; never mix both in one app |
| API transport | `apiFetch<T>()` with `credentials: "include"` |
| Validation | `react-hook-form` + Zod + `zodResolver` |
| Auth | Better Auth session cookie; see `better-auth-express-frontend` |

## Data layer

```
src/
  lib/api-client.ts       # base URL, credentials, JSON/error parsing
  api/users.ts            # typed HTTP fetchers, no React
  hooks/queries/          # cache-library wiring
  schemas/                # shared form schemas
```

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

export function fetchUser(id: string) {
  return apiFetch<User>(`/api/users/${encodeURIComponent(id)}`);
}
```

Backend route handlers validate, authenticate, authorize, then call a service
and repository. Types may be generated from OpenAPI or shared contracts, but
DB/ORM types stay in the backend.

## Forms

Every form uses a Zod schema and typed `useForm` with `zodResolver`. The server
must validate the same business rules again; client validation is UX, not a
security boundary.

```ts
const schema = z.object({ title: z.string().trim().min(1).max(120) });
type Values = z.infer<typeof schema>;
const form = useForm<Values>({ resolver: zodResolver(schema) });
```

After mutations, invalidate affected query keys. Show loading, field errors,
and a recoverable API error; do not expose raw database messages.

## Checklist

- [ ] Components call hooks, not `fetch` or database clients directly.
- [ ] Fetchers have explicit request/response types.
- [ ] Cookies are included for session-backed routes.
- [ ] 401 redirects/clears protected cache; 403 remains an authorization error.
- [ ] Forms use Zod and typed `useForm`.
- [ ] Mutations invalidate the right cache keys.
