# Production Guide

## Performance
- Ensure all heavy assets (videos, massive images) are lazy-loaded and highly compressed.
- The scroll experience must remain 60fps. Avoid complex CSS drop-shadows or heavy DOM manipulations that cause scroll jank.

## Accessibility (a11y)
- Maintain contrast ratios. Warm paper and dark olive/brown text must meet WCAG AA standards.
- Ensure screen readers can navigate the emotional beats logically, even if the visual layout is asymmetrical or broken.

## SEO
- Semantic HTML tags (`<header>`, `<main>`, `<article>`, `<figure>`) must be used correctly despite the unconventional layout.
- Meta descriptions and titles should reflect the documentary nature of the project.

## Quality Assurance (QA)
- Verify the scroll rhythm (Density vs. Emptiness) on multiple viewport sizes.
- Ensure micro-moments trigger reliably.

## Deployment & Release
- Verify environment variables.
- Run smoke tests post-deployment.
- Ensure all static assets are served from the CDN.

## Known Limitations
- The heavy reliance on high-quality imagery means slow network connections will degrade the experience. Loading states must be graceful (e.g., fading in from warm paper color).
