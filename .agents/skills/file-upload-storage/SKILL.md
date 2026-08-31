---
name: file-upload-storage
description: >-
  Use when implementing file uploads, avatars, or attachments through a
  Node.js/Express API and S3-compatible object storage. Not for text-only
  forms or client-only uploads without an authorization design.
---

# File uploads and object storage

The browser uploads through an authenticated Express route, or receives a
short-lived presigned URL created by Express. The server validates ownership;
the client must not choose an arbitrary storage key.

## Recommended flow

1. Require a Better Auth session.
2. Validate MIME type, byte size, extension, and entity ownership.
3. Generate a server-owned key such as `users/{userId}/{uuid}.webp`.
4. Upload via `multer`/streaming or return a short-lived S3 presigned URL.
5. Store the object key in the database, never a permanent signed URL.
6. Generate a short-lived download URL only after authorization.

```ts
const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp"]);

// In the Express controller: validate req.file, req.auth, and ownership.
if (!ALLOWED.has(file.mimetype) || file.size > MAX_BYTES) {
  return res.status(400).json({ error: "invalid_file" });
}
const key = `users/${req.auth.user.id}/${crypto.randomUUID()}.webp`;
await objectStorage.put(key, file.stream, { contentType: file.mimetype });
```

Keep buckets private by default. Use lifecycle rules for abandoned uploads,
virus scanning where required, and streaming limits to prevent memory abuse.

## Checklist

- [ ] Express authorization checks the owning user/organization.
- [ ] MIME, size, and upload count limits are enforced server-side.
- [ ] Storage keys are generated server-side and path traversal is impossible.
- [ ] DB stores object keys; URLs are short-lived and generated on read.
- [ ] Upload progress, cancellation, and recoverable errors exist in the UI.
