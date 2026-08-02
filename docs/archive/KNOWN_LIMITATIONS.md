# Known Limitations (RC2)

This document outlines structural or design limitations accepted as part of the architecture freeze.

## 1. Gallery Layouts
**Limitation:** We do not have a dedicated `<Grid variant="masonry">` primitive.
**Reason:** The architecture was frozen before complex galleries were requested.
**Workaround:** The Potentials page uses manual CSS grid columns and `aspect-ratio` on `<EditorialImage>` to simulate an editorial gallery. This works perfectly but does not automatically handle arbitrarily large sets of uncurated photos.

## 2. Dynamic Content / CMS
**Limitation:** There is no backend CMS.
**Reason:** Built as a static Vite/React single-page application.
**Workaround:** All content lives in `src/content/**/*.ts`. Non-technical editors will need to edit JSON/TS objects to update the site.

## 3. SEO Pre-rendering
**Limitation:** Because this is a standard React SPA (not Next.js or Astro), web crawlers must execute JavaScript to read the `<PageMetadata>` tags injected by `react-helmet-async`.
**Reason:** Selected stack is Vite + React.
**Workaround:** Googlebot successfully executes JS, so indexing is fine. However, some social media scrapers (like Twitter or Facebook) may struggle to read the OpenGraph tags if they don't execute JS. If social sharing is a critical priority, the project must either implement SSR (Server-Side Rendering) or use a pre-rendering service (like Prerender.io).
