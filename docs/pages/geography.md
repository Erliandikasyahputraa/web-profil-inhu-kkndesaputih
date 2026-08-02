# Geography Page (`/geografi`)

**Status:** IMPLEMENTED (PR24)

## Purpose
Communicates the spatial and environmental context of Desa Air Putih. It anchors the user in the physical reality of the village, focusing on landscape, location, boundaries, topography, and climate.

## Emotional Goal
**Grounding.** A sense of place, scale, and natural beauty. It should feel like opening a wide-format landscape photography book.

## Composition Architecture
- **Hero:** Deep visual immersion (`background="transparent"`) with sweeping landscape photography (`preset="hero"`).
- **Location:** Sticky sidebar narrative over scrolling physical statistics, using `<Split ratio="sidebar">` and `<EditorialStats>`.
- **Boundaries:** Functional but elegant grid of 4 border cards using `<div className="grid grid-cols-1 md:grid-cols-2">` and `background="muted"`.
- **Topography & Climate:** Dramatic lighting (`background="dark"`) with a `<Parallax>` pull-quote emphasizing the tropical climate.
- **Map:** Clean, authoritative presentation of the geospatial map.

## Architectural Adherence
This page was implemented strictly using frozen components:
- Layout: `Stack`, `Split`, `Container`, native grid.
- UI: `Section`, `SectionHeader`, `EditorialImage`, `PullQuote`, `EditorialStats`.
- Typography: `Display`, `Heading`, `Body`, `Overline`.
- Motion: `FadeIn`, `Reveal`, `Parallax`.
- Content: Single Source of Truth from `src/content/geography/index.ts`.

## QA Results
- **Visual:** Aligns perfectly with UI Freeze v1 spacing (e.g., `spacing="default"` sections, `gap-8` grids).
- **Accessibility:** Semantic HTML order preserved. All `<EditorialImage>` components have rich descriptive `alt` tags.
- **Performance:** Passed `pnpm build`. No heavy JS. Motion is purely CSS-driven via Framer Motion wrappers.
