---
name: tanstack-query-alternative
description: >-
  Use when adding or refactoring TanStack Query data fetching in a frontend
  backed by Node.js/Express: queries, mutations, query keys, cache invalidation,
  pagination, and API fetchers. Not for forms alone.
---

# TanStack Query with an Express API

Use TanStack Query for server state. Fetchers call typed Express endpoints;
components never import a database client.

## Layout

```
src/
  lib/api-client.ts
  api/users.ts
  hooks/queries/keys.ts
  hooks/queries/useUser.ts
  hooks/mutations/useCreateProject.ts
```

```ts
export async function apiFetch<T>(path: string, init: RequestInit = {}) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}${path}`, {
    ...init,
    credentials: "include",
    headers: { "Content-Type": "application/json", ...init.headers },
  });
  if (!res.ok) throw await parseApiError(res);
  return res.json() as Promise<T>;
}
```

## Query keys and hooks

```ts
export const userKeys = {
  all: ["users"] as const,
  detail: (id: string) => ["users", "detail", id] as const,
};

export function useUser(id: string | undefined) {
  return useQuery({
    queryKey: id ? userKeys.detail(id) : ["users", "none"],
    queryFn: () => apiFetch<User>(`/api/users/${id}`),
    enabled: Boolean(id),
  });
}
```

Keep filters stable and invalidate the broadest relevant key after mutations.
Use cursor pagination exposed by the backend (`nextCursor`); do not recreate
database filtering logic in the browser.

## Backend contract

Express route → Zod validation → Better Auth session middleware → authorization
(ownership/membership) → service → repository/ORM. Return stable JSON errors.
The frontend maps 401 to re-authentication and 403 to an authorization message.

## Checklist

- [ ] One `QueryClient` at the app root.
- [ ] Typed fetchers in `api/`; hooks only wire cache behavior.
- [ ] Cookies included for Better Auth session routes.
- [ ] Query keys are centralized and invalidation is explicit.
- [ ] Loading, empty, retry, 401, and 403 states are handled.
- [ ] No database or privileged credentials reach the frontend.
