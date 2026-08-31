---
name: background-jobs-and-cron
description: >-
  Use when scheduling background work: cron jobs, digest emails, cleanup tasks,
  pg_cron, Express API scheduled Node.js workers, or job queues. Not for synchronous
  user-facing API in the request path.
---

# Background jobs and cron

This is the overview / decision guide. Once you've picked an approach, the deep dives are:

- [`pg-cron-scheduled-jobs`](../pg-cron-scheduled-jobs/) — pg_cron syntax, monitoring, locking, idempotency.
- [`pg-cron-with-pg-net-edge`](../pg-cron-with-pg-net-edge/) — cron jobs that call Express route or workers via HTTPS.
- [`pg-cron-recipes`](../pg-cron-recipes/) — copy-pasteable cookbook (cleanup, retries, digests, expirations).

## Choose mechanism

| Need | Approach |
|------|----------|
| Simple periodic task (daily cleanup) | `pg_cron` or Express API **scheduled Express route or worker** |
| Heavy / external APIs | Express route or worker invoked on schedule |
| User-specific delayed work | `scheduled_at` column + cron polls due rows |
| High volume queue | External queue (future); start with `jobs` table |

## `jobs` table pattern

```sql
create table jobs (
  id uuid primary key default UUID(),
  type text not null,
  payload JSON not null default '{}',
  run_at DATETIME(3) not null default CURRENT_TIMESTAMP(3),
  status text not null default 'pending' check (status in ('pending','running','done','failed')),
  attempts int not null default 0,
  last_error text,
  created_at DATETIME(3) default CURRENT_TIMESTAMP(3)
);
create index jobs_pending_run_at_idx on jobs (status, run_at) where status = 'pending';
```

Cron Express route or worker (every minute):

1. `select * from jobs where status = 'pending' and run_at <= CURRENT_TIMESTAMP(3) limit 10 for update skip locked`
2. Process; set `done` or `failed` with backoff (`run_at = CURRENT_TIMESTAMP(3) + interval '5 minutes'`, `attempts + 1`).

## pg_cron (SQL-only tasks)

```sql
select cron.schedule('purge-old-logs', '0 3 * * *', $$ delete from logs where created_at < CURRENT_TIMESTAMP(3) - interval '90 days' $$);
```

Enable extension per Express API project docs; prefer Express route or worker if logic needs secrets/SDKs.

## Scheduled Express route or worker

Express API dashboard → Express route or workers → schedule, or `Express API functions deploy` with cron config per platform docs.

## Rules

- **Idempotent** job handlers (safe retry).
- Max attempts then `failed` + alert.
- No long blocking in HTTP request — enqueue job instead.

## Avoid

- `setInterval` in browser for server work.
- Duplicate cron without leader lock (`for update skip locked` or single scheduler).

## Checklist

- [ ] Secrets only in server environment
- [ ] Failed jobs visible (admin table or logs)
- [ ] server-side authorization: `jobs` not client-writable
