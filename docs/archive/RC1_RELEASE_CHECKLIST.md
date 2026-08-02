# RC1 Release Checklist

## Automated Quality Gates
- [x] **Lint:** `pnpm lint` passing with 0 errors.
- [x] **TypeScript:** `pnpm tsc --noEmit` passing with 0 errors.
- [x] **Build:** `pnpm build` passing cleanly.

## Manual Quality Gates
- [x] **Accessibility:** Semantic hierarchy verified. Alt text present on all images.
- [x] **Performance:** No heavy JS libraries. Lazy loading applied to images.
- [x] **Motion:** No unapproved physics (GSAP/springs). Framer Motion usage is quiet.
- [x] **Responsive:** `Split` and `Grid` collapse correctly on mobile viewports.
- [x] **Cross-browser:** Standard Tailwind and CSS transitions used; highly compatible.

## Content & SEO Review
- [ ] **Content Review:** Verify all dummy text has been replaced with final client copy. (PENDING CLIENT)
- [ ] **Image Review:** Replace Unsplash placeholder URLs with final optimized local assets. (PENDING CLIENT)
- [x] **Broken Links:** All internal route links (`/geografi`, `/pemerintahan`, dll) resolve correctly.
- [ ] **Metadata:** PageMetadata component exists on all pages, but OpenGraph tags need to be mapped. (DEFERRED)
- [ ] **Canonical URLs:** Need implementation. (DEFERRED)
- [ ] **Robots / Sitemap:** Need implementation. (DEFERRED)

## Blocking Issues for Production
1. **Metadata Expansion:** The `PageMetadata` component currently only accepts `title`, `description`, and `keywords`. It must be expanded to support OpenGraph/Twitter cards before final release.
2. **Client Content:** All placeholder text and Unsplash images must be replaced.
