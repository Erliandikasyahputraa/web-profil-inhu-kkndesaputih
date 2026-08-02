# Potentials Page (`/potensi`)

**Status:** IMPLEMENTED (PR26)

## Purpose
Highlights the economic, cultural, and natural wealth of Desa Air Putih. It aims to evoke a profound sense of abundance, pride, and optimism through high-impact photography and expansive layouts.

## Emotional Goal
**Abundance and Pride.** It should feel like a premium documentary spread in National Geographic or Monocle, focusing on human craftsmanship and natural resources.

## Composition Architecture
- **Hero:** Deep visual immersion with a full `transparent` background, establishing the sweeping natural landscape.
- **Intro:** A tight `narrow` container on a `muted` background to ground the reader before diving into the heavy visuals.
- **Sectors (Agriculture, Plantation, Fishery, MSME, Tourism):** Uses a reusable `<Sector>` component wrapping a `<Split>` layout. Alternates backgrounds (`primary` -> `muted` -> `primary` -> `muted` -> `primary`) and `flex-row-reverse` to create an undulating reading rhythm that never gets boring.
- **Stats:** Drops the lighting to `dark` to create contrast and emphasize the quantitative metrics (`EditorialStats`).
- **Gallery:** A beautiful 2x2 grid using `gallery-feature` and `gallery-square` presets, anchored on `primary` to bring the lighting back up.
- **Closing:** A profound `Parallax` pull-quote on a `muted` background to end the chapter with emotional resonance.

## Architectural Adherence
This page was implemented strictly using frozen components:
- Layout: `Stack`, `Split`, `Container`.
- UI: `Section`, `SectionHeader`, `EditorialImage`, `PullQuote`, `EditorialStats`.
- Typography: `Display`, `Heading`, `Body`, `Overline`.
- Motion: `FadeIn`, `Reveal`, `Parallax`.
- Content: Single Source of Truth from `src/content/potentials/index.ts`.

## Quality Assurance & Limitations
- **Rhythm:** The alternating `<Sector>` components successfully solve the "wall of text" problem without requiring bespoke layouts for each industry.
- **Limitation (Gallery Grid):** Because we cannot invent new layout primitives under the Architecture Freeze, the 2x2 Gallery is built manually inside the `Gallery.tsx` component using standard Tailwind Grid, instead of relying on a dedicated `<Grid variant="gallery">` primitive. However, it uses the approved `EditorialImage` API and presets perfectly.
