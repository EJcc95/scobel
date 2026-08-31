---
name: soft-delete-and-archiving
description: >-
  Use when implementing MySQL soft deletes, restoring records, archiving, or
  filtering active versus deleted rows in a Node.js/Express repository. Not for
  GDPR hard-delete requests that must purge data.
---

# Soft delete and archiving

## Column pattern

```sql
ALTER TABLE projects
  ADD COLUMN deleted_at DATETIME(3) NULL,
  ADD COLUMN deleted_by VARCHAR(64) NULL,
  ADD INDEX projects_active_idx (organization_id, deleted_at);
```

Use UTC timestamps. Normal repositories exclude rows where `deleted_at IS NOT
NULL`; admin/reporting methods must opt in explicitly.

## Uniqueness in MySQL

MySQL has no PostgreSQL-style partial unique indexes. When active-only
uniqueness is required, use a generated column or an `active` flag included in
the unique key, and enforce the transition in a transaction.

```sql
ALTER TABLE projects
  ADD COLUMN active TINYINT(1) AS (deleted_at IS NULL) STORED,
  ADD UNIQUE INDEX projects_org_slug_active_idx (organization_id, slug, active);
```

## Restore and purge

Restore only after Express authorization confirms owner/admin access. Reserve
hard deletion for legal/GDPR retention workflows, run it in a worker, and
record the action in the audit log.

## Checklist

- [ ] Default list methods exclude deleted rows.
- [ ] Restore and admin views are protected in Express.
- [ ] Active-only uniqueness is implemented with MySQL-compatible indexes.
- [ ] Purge jobs are bounded, auditable, and tested.
