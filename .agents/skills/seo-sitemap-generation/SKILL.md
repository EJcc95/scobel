---
name: seo-sitemap-generation
description: >-
  Use when generating or validating sitemap.xml and robots.txt for a public
  site whose content comes from a Node.js/Express API or build-time data.
---

# Sitemap generation

Every public site needs `/sitemap.xml` and `/robots.txt`. Generate static files
at build time when content changes rarely, or expose an authenticated-safe
Express GET route when content is dynamic.

## Express route

```ts
app.get("/sitemap.xml", async (_req, res, next) => {
  try {
    const pages = await pageService.listPublic({ limit: 50_000 });
    const urls = pages.map((page) =>
      `<url><loc>https://example.com/${escapeXml(page.slug)}</loc>` +
      `<lastmod>${page.updatedAt.toISOString()}</lastmod></url>`,
    ).join("");
    res.type("application/xml").send(
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    );
  } catch (error) { next(error); }
});
```

Include only canonical, indexable, successful public URLs. Exclude admin,
private, duplicate, paginated, and `noindex` pages. Escape XML values and use
stable absolute HTTPS URLs.

## Checklist

- [ ] `/sitemap.xml` and `/robots.txt` return 200 with correct content types.
- [ ] Only public canonical URLs are included.
- [ ] Last-modified values reflect source data and are valid ISO dates.
- [ ] Large sites split at 50,000 URLs or 50 MB and expose an index.
- [ ] Search Console validation and broken-link checks run before release.
