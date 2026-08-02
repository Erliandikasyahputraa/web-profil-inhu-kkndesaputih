# Post-Release Backlog

This document captures features, optimizations, and technical debt that were intentionally deferred to maintain the Architecture Freeze during Phase 2. They should be addressed in subsequent releases (v1.1+).

## 1. Complex Layout Primitives
- **Masonry Grid:** Develop a robust `<Grid variant="masonry">` primitive to handle arbitrary image counts without manual `col-span` mapping.
- **Carousel:** Implement a swipeable image carousel for deep mobile engagement in the `Gallery` sections.

## 2. Advanced Motion Polish
- **Reduced Motion Hook:** Implement a global hook to disable `<Parallax>` offsets if the user's OS has `prefers-reduced-motion` enabled.
- **Parallax Tuning:** Fine-tune parallax math to account for ultra-tall or ultra-short mobile viewports.

## 3. SEO & Analytics
- **Structured Data (JSON-LD):** Add JSON-LD schemas (e.g., `GovernmentOrganization`, `Article`) to the `<PageMetadata>` component to enhance Google Search rich snippets.
- **Analytics Integration:** Add privacy-respecting analytics (e.g., Plausible or Vercel Web Analytics) to track page engagement.

## 4. Content Management
- **CMS Integration:** If the client finds editing `src/content/**/*.ts` too difficult, evaluate integrating a headless CMS (like Sanity, Strapi, or Decap CMS) and fetching content at build time.
