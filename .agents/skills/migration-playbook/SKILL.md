---
name: migration-playbook
description: >-
  Use when changing MySQL schema, adding columns, backfills, indexes, or
  production migrations for a Node.js/Express application. Not for client-only
  UI or local-only seed data.
---

# MySQL migration playbook

## Principles

1. Use backward-compatible steps when live: add → backfill → switch → remove later.
2. Never drop a column/table while deployed code still reads it.
3. One migration per logical change, with a timestamped descriptive name.
4. Use the repository's migration tool (Knex, Drizzle, Prisma, or Umzug); never edit an applied migration.

## Safe add column

```sql
ALTER TABLE posts ADD COLUMN status VARCHAR(20) NOT NULL DEFAULT 'draft';
CREATE INDEX posts_status_idx ON posts (status);
```

For large tables, add nullable first, backfill in batches, deploy code that
handles both shapes, then add `NOT NULL` in a later migration. Use
`DATETIME(3)` consistently for UTC timestamps and explicit foreign keys.

## Better Auth schema

Generate Better Auth's required schema with its CLI, review the SQL, and apply
it through the same migration pipeline. Keep auth and business tables in the
same database, but do not silently rename auth-managed columns.

## Authorization

MySQL does not replace application authorization. Every Express
service derives the user from the Better Auth session and checks ownership or
organization membership in the same transaction as the mutation where needed.

## Checklist

- [ ] Migration is reviewed for MySQL syntax, locks, indexes, and FK behavior.
- [ ] Large backfills are bounded and resumable.
- [ ] Better Auth schema changes come from its generated contract.
- [ ] API types/services and server-side authorization are updated.
- [ ] Rollback/backup plan is documented.
