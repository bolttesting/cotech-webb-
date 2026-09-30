# Legacy HTML → React conversion rules

1. **Shared chrome:** `src/components/site/SiteHeader.tsx`, `SiteFooter.tsx`, `MarketingPageLayout.tsx` (header + `{children}` + footer + `SiteScripts`).
2. **Per page:** `src/app/(marketing)/<slug>/page.tsx` — dedicated route overrides `[page]` legacy loader.
3. **Markup:** Preserve every Tailwind/class name from HTML; use `className`, `htmlFor`, `strokeWidth`, camelCase SVG attrs.
4. **Scope:** Convert only `<main>...</main>` (or content between `</header>` and `<footer>`) into a component in `src/components/pages/<Name>Page.tsx`.
5. **Scripts:** Do not port inline `<script>`; rely on `SiteScripts` in layout (GSAP, Lenis, cotech-services, main.js).
6. **Links:** Use clean paths `/about`, `/services` (not `.html`).
7. **After conversion:** Remove slug from `src/lib/legacy-pages.ts`.

## Progress (subagent waves)

| Status | Routes |
|--------|--------|
| **React** | All core marketing + **8 service detail pages**, projects, legal, blog/project/service detail templates + shared `SiteHeader` / `SiteFooter` |
| **Legacy loader** | None (empty `legacy-pages.ts`; `[page]` reserved for future slugs only) |
| **Home** | `MarketingPageLayout` + `HomePageContent` (main HTML from `index.html` via `readLegacyMainHtml`) |
| **Next wave** | Split home main into section React components (full JSX like About) |
