# Typed Express API examples

```ts
import { apiFetch } from "@/lib/api-client";

export type User = { id: string; name: string; email: string };

export function fetchUser(userId: string) {
  return apiFetch<User>(`/api/users/${encodeURIComponent(userId)}`);
}

export function updateUser(userId: string, patch: Pick<User, "name">) {
  return apiFetch<User>(`/api/users/${encodeURIComponent(userId)}`, {
    method: "PATCH",
    body: JSON.stringify(patch),
  });
}
```
