# Release Notes - RC2 (Hardening Sprint)

## Overview
RC2 focused exclusively on hardening the architecture and resolving minor inconsistencies discovered during the RC1 global audit. 

## Additions
- **`<Button>` Primitive:** Extracted a unified button component to replace raw Tailwind usage on the Information page, ensuring future scalability.
- **SEO Infrastructure:** Generated `robots.txt`, `sitemap.xml`, and `site.webmanifest`.
- **Extended Metadata:** Upgraded the `<PageMetadata>` component to automatically inject OpenGraph and Twitter Card tags based on page content.

## Fixes
- Fixed the `Information` page "Unduh" button to use the new primitive.
- Fixed `index.html` to declare `lang="id"`.
- Resolved a TypeScript compilation error when migrating components during the RC2 refactor.

## Next Steps
The project is officially ready for the Client Content phase (RC3). Once final copy and images are placed, the site will enter Production Freeze.
