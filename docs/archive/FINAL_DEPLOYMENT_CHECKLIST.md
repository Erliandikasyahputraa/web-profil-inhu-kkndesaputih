# Final Deployment Checklist

Before deploying the Release Candidate to production, the following must be verified:

## 1. Content & Asset Merge
- [ ] Receive final textual copy from Client.
- [ ] Replace all placeholder text in `src/content/**/*.ts`.
- [ ] Receive final high-resolution, optimized images from Client.
- [ ] Replace Unsplash URLs with local `/public` paths or production CDN URLs.

## 2. SEO Finalization
- [ ] Set final production domain in `sitemap.xml` and `<PageMetadata>` default URL.
- [ ] Update `site.webmanifest` if village name/colors change.
- [ ] Add actual `favicon.ico`, `favicon.svg`, and `apple-touch-icon.png` to `/public`.
- [ ] Verify `robots.txt` is accessible.

## 3. Environment & Build
- [ ] Verify `import.meta.env.VITE_SITE_NAME` (if used).
- [ ] Run `pnpm build` locally one last time.
- [ ] Deploy to hosting provider (e.g., Vercel, Netlify, Cloudflare Pages).

## 4. Post-Deployment Verification
- [ ] Run Google Lighthouse on production URL.
- [ ] Run OpenGraph/Twitter Card validators on production URL.
- [ ] Test mobile responsiveness on physical devices (iOS Safari, Android Chrome).
