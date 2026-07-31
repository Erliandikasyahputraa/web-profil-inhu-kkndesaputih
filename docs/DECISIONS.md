# Architecture Decision Records (ADR)

This document records the major architectural decisions made during the development of the Desa Air Putih Digital Experience.

---

## ADR-001: Centralizing Layouts with Layout Primitives

**Status:** Accepted  
**Date:** August 2026

### Context
Initially, feature components (`Hero`, `Story`, `Timeline`) directly implemented spacing and grid logic using raw Tailwind CSS classes (`flex`, `grid`, `gap-8`, `mb-16`). This caused heavy duplication and made responsive adjustments highly prone to breakage.

### Decision
We introduced a set of **Layout Primitives** (`<Stack>`, `<Cluster>`, `<Grid>`, `<Split>`). These primitives handle 95% of layout concerns via semantic spacing props (e.g., `spacing="paragraph"` instead of `gap-6`). Feature components are now strictly forbidden from handling their own typography and layout spacing.

### Consequences
- **Positive:** Layout adjustments are unified; changing the `paragraph` token value cascades everywhere.
- **Positive:** Feature components are extremely clean and map nicely to headless CMS structures.
- **Negative:** Slightly steeper learning curve for new developers who must learn the primitive props instead of raw Tailwind.

---

## ADR-002: Centralizing Image Metadata

**Status:** Accepted  
**Date:** August 2026

### Context
Images were scattered with individual `src`, `alt`, and aspect-ratio styling across components.

### Decision
We created an `ImageMetadata` type (`src`, `alt`, `caption`, `credit`) and an `EditorialImage` component that accepts it as a single prop. Furthermore, `EditorialImage` enforces specific `preset` variants (`hero`, `story`, `portrait`, `square`) that dictate the exact aspect ratio, `fetchPriority`, and `loading` behavior globally.

### Consequences
- **Positive:** A single source of truth for all imagery.
- **Positive:** Ensures critical LCP images are prioritized and below-the-fold images are lazily loaded.
- **Positive:** Perfect 1:1 mapping when migrating to a CMS (e.g., Strapi, Payload).

---

## ADR-003: Fluid Typography with `clamp()`

**Status:** Accepted  
**Date:** August 2026

### Context
Tailwind's default breakpoint utility system (`text-2xl md:text-4xl lg:text-5xl`) resulted in long class names and choppy font scaling between intermediate viewport sizes.

### Decision
We opted for fluid typography using CSS `clamp()` functions in `tokens.css`. Typography scales smoothly from a minimum bound to a maximum bound based on the viewport width (e.g., `clamp(2rem, 4vw, 3rem)`).

### Consequences
- **Positive:** Typography looks perfect on *any* screen size, including odd widths.
- **Positive:** Dramatically cleans up markup by eliminating `md:` and `lg:` prefix bloat.
- **Negative:** Requires CSS variables and custom Tailwind config rather than purely standard Tailwind utility usage.
