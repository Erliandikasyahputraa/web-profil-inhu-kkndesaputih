# Page Implementation Template Standard

## 1. Purpose
This document establishes the universal standard for implementing all future pages (Geography, Governance, Potentials, Information) within the Desa Air Putih Digital Experience. Following the UI Freeze v1 of the Homepage and Profile pages, all future pages MUST strictly adhere to these compositional patterns. 

**Rule Zero:** No new architecture. Every page must be built using ONLY the frozen components, layout primitives, typography scales, and motion presets established in UI Freeze v1.

## 2. Folder Structure
Every new page must follow the feature-based folder architecture:
```text
src/
  features/
    [page-name]/
      [PageName]Composition.tsx      # Main assembly file
      sections/
        Hero/                        # Hero section
        [SectionName]/               # Subsequent sections
      components/                    # Reusable page-specific components (if necessary)
  content/
    [page-name]/
      index.ts                       # Aggregator
      [section-name].ts              # JSON/Object data
```

## 3. Composition Pattern
- Every page is a single `Composition.tsx` file that sequentially imports and stacks `Section` components.
- The `Section` component manages the pacing and background rhythm.
- **Background Rhythm:** Alternate `background` props (`transparent`, `primary`, `muted`, `dark`, `accent`) to create editorial "chapters." Do not use the same background color for more than two consecutive sections.

## 4. Editorial Pattern
- **Hierarchy:** Every section MUST have exactly ONE dominant element (e.g., a massive image, a massive quote, or a massive heading). Never let elements compete.
- **Whitespace (Breathing Room):** Use `spacing="section"` on Stacks or native utility classes (`mt-24`, `mt-32`) to separate major thoughts. Whitespace is content.
- **Asymmetry:** Rely heavily on `<Split ratio="sidebar">` and `<Split ratio="content">`. Anchor sidebars with sticky positioning (`lg:sticky lg:top-32`) to create a dynamic, magazine-like scrolling experience.

## 5. Content Pattern
- **Strict Separation:** All content must be housed in `src/content/[page]`.
- **No Hardcoding:** Absolutely no string literals in JSX, except for structural fallback aria-labels if dynamically unavailable.
- **Types:** Content files must be strictly typed, often leveraging shared types from `src/types/content.ts`.

## 6. Motion Pattern
- **Framer Motion Only:** Do not install GSAP. 
- **Invisibility:** Motion must support reading, not perform for the user.
- **Entrance:** Use `<FadeIn>` for typography blocks. Use `<Reveal>` for images. 
- **Depth:** Use `<Parallax offset={20|30}>` sparingly on large pull quotes or expansive background images to establish depth.

## 7. Image Pattern
- **Component:** Use ONLY the `<EditorialImage>` component.
- **Presets:** Strictly utilize existing presets (`hero`, `landscape`, `portrait`, `square`).
- **Purpose:** Images must tell a story, not fill space. Give images maximum width (`w-full`) when they represent a climax.

## 8. Typography Pattern
- **Component:** Use ONLY the `typography` components (`Display`, `Heading`, `Lead`, `Body`, `Overline`).
- **Rhythm:** Avoid monotonous "Heading > Paragraph" loops. Introduce `PullQuote`, `EditorialStats`, or `Overline` to break up the rhythm.

## 9. Metadata Pattern
- Each page must inject `PageMetadata` at the top of the `Composition`.
- SEO tags, descriptions, and Open Graph data must be defined in the content file.

---

## 10. Example Templates (Conceptual)

### 10.1 Geography Page (`/geografi`)
- **Expected Composition:** Map-heavy or landscape-heavy. High reliance on large cinematic photography of the village layout.
- **Dominant Element:** The land. `<Reveal>` animations on sweeping landscape shots.
- **Emotional Goal:** Grounding. A sense of place, scale, and natural beauty.
- **Storytelling Rhythm:** 
  - Hero (Sweeping landscape) 
  - Overline + Display (Geographical context)
  - Sticky Map/Image (Sidebar) with scrolling physical statistics (Content)
  - Dark background parallax quote about the land.

### 10.2 Governance Page (`/pemerintahan`)
- **Expected Composition:** Structured, dignified, portrait-heavy.
- **Dominant Element:** The people and the structure. 
- **Emotional Goal:** Trust, transparency, and order.
- **Storytelling Rhythm:**
  - Hero (Formal but warm group or village hall)
  - Split "sidebar" containing the Head of Village statement (sticky) against a list of key initiatives.
  - Organizational structure using `<Grid variant="cards">` or similar existing primitive.
  - Light/muted backgrounds to convey transparency.

### 10.3 Potentials Page (`/potensi`)
- **Expected Composition:** High-contrast, dynamic, gallery-like.
- **Dominant Element:** The commodities and crafts (Coffee, agriculture, crafts).
- **Emotional Goal:** Pride, energy, and opportunity.
- **Storytelling Rhythm:**
  - Heavy use of `<Grid variant="gallery">` or staggered `<Split>` layouts.
  - Each potential (e.g., Coffee) gets its own highly curated `<Section>` with a unique background rhythm.
  - Strong `<EditorialStats>` integration to highlight output or economic impact.

### 10.4 Information Page (`/informasi`)
- **Expected Composition:** Utility-focused, clean, dense but legible.
- **Dominant Element:** Typography.
- **Emotional Goal:** Clarity, helpfulness.
- **Storytelling Rhythm:**
  - Hero (Simple, perhaps `transparent` background with a strong `Display` heading).
  - Categorized `<Stack spacing="section">` containing grids of news or announcements.
  - Ample whitespace to prevent cognitive overload.

---

## 11. Checklists & Procedures

### 11.1 Accessibility Checklist
- [ ] Heading hierarchy is strictly sequential (H1 -> H2 -> H3).
- [ ] All `<EditorialImage>` instances receive meaningful `alt` text from the content API.
- [ ] Color contrast is verified across all background shifts (`muted`, `primary`, `dark`).
- [ ] Focus states (using `focus-visible`) are intact on all interactive elements.

### 11.2 Performance Checklist
- [ ] No excessive DOM nodes generated by unnecessary wrapping `div`s.
- [ ] Motion is staggered (`stagger="editorial"`) rather than simultaneous.
- [ ] Images are appropriately sized/lazy-loaded by the `EditorialImage` component.

### 11.3 Definition of Done (DoD)
- [ ] Architecture Adherence verified.
- [ ] Single Source of Truth verified.
- [ ] Visual Rhythm aligns with `UI_FREEZE_V1.md`.
- [ ] Passes `pnpm lint`, `pnpm tsc --noEmit`, `pnpm build`.

### 11.4 Freeze & QA Procedure
Upon completion of a new page:
1. Conduct an Art Direction QA to evaluate emotional impact and whitespace.
2. Cross-reference the implementation against this `PAGE_TEMPLATE.md`.
3. If the page requires a new CSS class or primitive modification to succeed, the design is flawed. Rework the composition to fit the frozen architecture.
