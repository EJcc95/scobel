---
name: email-and-notifications
description: >-
  Use when sending transactional email (Resend, Postmark, etc.), magic links,
  notification templates, or email Express route or workers. Not for in-app toast-only
  UX or SMS unless extending the same pattern.
---

# Email and notifications

Send email from **Express route or workers** with API keys in Express API secrets — never in the client.

## Transactional email

- Templates: welcome, password reset (prefer Better Auth built-in), receipt, invite.
- Idempotent sends: store `email_log(id, template, user_id, sent_at)` to prevent duplicates on retry.
- From address on verified domain.

## Express route or worker sketch

```ts
const res = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.RESEND_API_KEY)}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ from, to, subject, html }),
});
```

Validate caller: webhook, cron, or authenticated `invoke` with JWT check.

## In-app notifications

- Table: `notifications(user_id, title, body, read_at, created_at)`.
- server-side authorization: user reads own rows only.
- Realtime optional (`realtime-and-subscriptions` skill).
- Bell icon + unread count; mark read on open.

## Templates and rendering

- Build emails with **react-email** (`@react-email/components`) and render to HTML in the Express route or worker — gives you typed, previewable templates.
- Include a plain-text fallback (`text` field on Resend / Postmark).
- Test in Gmail, Outlook, and a mobile client at least once before launch.

## Deliverability basics

- SPF, DKIM, and DMARC configured for the sending domain (provider docs).
- From address on a verified domain (`hello@yourdomain.com`), not `gmail.com`.
- Avoid spam triggers in subject lines (ALL CAPS, "FREE!!!", excessive emojis).

## Avoid

- API keys in `VITE_*`.
- Sending email synchronously in the client on button click without a server.
- PII in log lines.
- Single template that branches on 10 product flows — split per template.

## Checklist

- [ ] Secrets in server environment only.
- [ ] Unsubscribe / legal footer on marketing email.
- [ ] Idempotent on retry (`email_log` keyed by event id).
- [ ] Deliverability records (SPF/DKIM/DMARC) configured.
