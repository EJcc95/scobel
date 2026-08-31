---
name: frontend-page-composition
description: >-
  Use when creating or reorganizing frontend pages, layouts, and page sections
  in React, Vite, Astro, or similar applications. Keeps pages thin by placing
  each section in a focused component and separates page-specific, layout, and
  shared UI code. Not for backend architecture or visual design tokens alone.
---

# Frontend page composition

Every page must be a composition of focused sections. Pages coordinate layout
and data; they should not contain large blocks of markup, complex business
logic, or repeated visual patterns.

## Recommended structure

```text
src/
├─ pages/
│  ├─ home/
│  │  ├─ HomePage.tsx
│  │  └─ index.ts
│  ├─ pricing/
│  │  └─ PricingPage.tsx
│  └─ dashboard/
│     └─ DashboardPage.tsx
├─ components/
│  ├─ home/
│  │  ├─ Hero.tsx
│  │  ├─ About.tsx
│  │  ├─ Features.tsx
│  │  ├─ Testimonials.tsx
│  │  └─ Cta.tsx
│  ├─ pricing/
│  │  ├─ PricingHero.tsx
│  │  └─ PricingTable.tsx
│  ├─ layout/
│  │  ├─ AppLayout.tsx
│  │  ├─ PublicLayout.tsx
│  │  ├─ Header.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Sidebar.tsx
│  │  └─ PageContainer.tsx
│  └─ ui/                      # reusable primitives: Button, Modal, Card
├─ hooks/
├─ api/
├─ schemas/
└─ lib/
```

For Astro, use the same ownership model with `.astro` files and place route
files in `src/pages/`; for React Router, the route component can live in
`src/pages/<page-name>/`. Match the project's existing convention when one
already exists.

## Ownership rules

- `pages/<page>/` owns the route-level composition and page-only helpers.
- `components/<page>/` owns sections used only by that page.
- `components/layout/` owns shells, navigation, headers, footers, and page containers.
- `components/ui/` owns generic primitives with no business or page knowledge.
- `hooks/`, `api/`, and `schemas/` own reusable behavior and data contracts.
- A page-specific component must not be promoted to shared UI until at least
  two pages need the same behavior and API.

## Page composition

```tsx
export function HomePage() {
  return (
    <PublicLayout>
      <main id="main-content">
        <HomeHero />
        <HomeAbout />
        <HomeFeatures />
        <HomeTestimonials />
        <HomeCta />
      </main>
    </PublicLayout>
  );
}
```

The page may select sections, pass intentionally small props, and coordinate
page-level loading/error boundaries. Move section markup into its component;
move fetching into API functions/hooks; move business decisions into services
or dedicated hooks.

## Layout rules

- Use a layout for shared chrome, not for page-specific sections.
- Keep public, authenticated, and admin shells separate when their navigation
  or permissions differ.
- Layouts must expose a clear content landmark and preserve document heading
  hierarchy.
- Do not nest layouts that duplicate headers, footers, sidebars, or providers.
- Use `PageContainer`/section primitives for consistent width, spacing, and
  responsive behavior.

## Component design

- One component should have one clear visual or interaction responsibility.
- Prefer explicit typed props over reading route/global state everywhere.
- Keep components resilient to empty, loading, error, and long user-generated data.
- Use semantic HTML first; preserve keyboard access, focus management, labels,
  and reduced-motion behavior from `AGENTS.md`.
- Keep section names meaningful: `HomeHero`, `DashboardMetrics`,
  `SettingsSecurity`, not generic `Section1` or `Block`.

## Avoid

- A route file containing the entire page markup.
- Components importing MySQL clients or privileged backend modules.
- Copying the same header/footer into multiple pages.
- A global `components/` folder filled with one-off page sections.
- Premature abstractions that hide different page behavior behind many flags.
- Fetching the same server data independently in several sibling sections.

## Definition of done

- [ ] Every route has a thin page component that reads like a section outline.
- [ ] Page-only sections live under `components/<page>/`.
- [ ] Shared chrome lives under `components/layout/`.
- [ ] Generic primitives live under `components/ui/`.
- [ ] Data fetching, validation, and business logic are outside presentation sections.
- [ ] Loading, empty, error, responsive, keyboard, and mobile states are handled.
- [ ] No duplicated layout markup or accidental cross-page coupling exists.
