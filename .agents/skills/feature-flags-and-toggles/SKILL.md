---
name: feature-flags-and-toggles
description: >-
  Use when adding feature flags, gradual rollouts, beta features, kill
  switches, or per-user/per-organization toggles backed by MySQL and Express.
---

# Feature flags and toggles

Store dynamic flags in MySQL and resolve them in an Express service. The
frontend may receive the resolved result for UI, but security-sensitive gates
must be enforced again on the server.

```sql
CREATE TABLE feature_flags (
  flag_key VARCHAR(120) PRIMARY KEY,
  enabled_globally BOOLEAN NOT NULL DEFAULT FALSE,
  rollout_percent TINYINT UNSIGNED NOT NULL DEFAULT 0,
  updated_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
    ON UPDATE CURRENT_TIMESTAMP(3)
);
```

Keep per-user/org targeting in normalized tables when it grows beyond a small
set. Write access belongs to an authenticated admin route, never the browser.
Use a stable hash of `flag_key:user_id` for percentage rollout and document an
owner plus removal date for every flag.

## Checklist

- [ ] Defaults are safe/off in production.
- [ ] Server enforces payment, authorization, or data-sensitive flags.
- [ ] Rollout is deterministic for the same user.
- [ ] Old branches are removed after rollout.
