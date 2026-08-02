# Implementation Plan — PR22: Visual Direction (UI Polish)

## Goal
Transform the **Desa Air Putih** web application from a standard web layout into a **premium editorial digital experience** (inspired by Apple Story pages, National Geographic, and coffee table books). 

This PR is **planning only**. No source code, APIs, design tokens, layout primitives, or data schemas will be modified during this step.

---

## Architectural Guardrails Inspection
All proposed enhancements strictly respect the **Architecture Freeze**:
- ✅ **Design Tokens (`src/styles/tokens.css`):** UNCHANGED (Read-only token system).
- ✅ **Layout Primitives (`Container`, `Section`, `Grid`, `Split`, `Stack`, `Cluster`):** UNCHANGED.
- ✅ **Typography Components (`Display`, `Heading`, `Lead`, `Body`, `Caption`, `Overline`):** UNCHANGED.
- ✅ **Editorial Image (`EditorialImage`):** UNCHANGED.
- ✅ **Routing & Content Architecture:** UNCHANGED.

---

## Visual Polish Proposal 1: Section Background Rhythm & Contrast

- **Problem:** Consecutive sections with uniform off-white backgrounds create a visually flat reading experience across long-form pages.
- **Visual Goal:** Establish a calm, paper-like background rhythm (cycling warm paper, stone surfaces, and dark cinematic breaks) similar to coffee-table book chapter transitions.
- **Possible Solutions:**
  1. Add inline CSS color overrides to section containers (Rejected: Violates token encapsulation).
  2. Utilize existing `<Section>` background props (`primary`, `muted`, `transparent`, `dark`) and surface token tints (`bg-stone-50`, `bg-brand-surface/30`) (Recommended).
- **Recommendation:** Apply background prop variations on `<Section>` elements in `HomeComposition.tsx` and `ProfileComposition.tsx`.
- **Trade-offs:** Subtle background changes require careful text contrast verification across light and dark section shifts.
- **Effort:** Small (Prop adjustments only).
- **Risk:** Low.
- **Acceptance Criteria:** Every narrative page features at least 2 distinct background surface shifts without mutating token variables.

---

## Visual Polish Proposal 2: Narrative Asymmetry & Editorial Alignment

- **Problem:** Standard symmetrical content grids resemble SaaS landing pages rather than high-end magazine spreads.
- **Visual Goal:** Create dynamic, asymmetric 2-column layouts (sticky headers/sidebars paired with wide narrative text blocks).
- **Possible Solutions:**
  1. Create custom grid Tailwind classes inside section components (Rejected: Violates Layout Primitive encapsulation).
  2. Leverage existing `<Split ratio="sidebar">` and `<Split ratio="content">` primitives with sticky utility classes (`md:sticky md:top-24`) (Recommended).
- **Recommendation:** Refactor section component internal wrappers to use `Split` ratio presets.
- **Trade-offs:** Requires checking layout stacking behavior on narrow mobile viewports (360px–430px).
- **Effort:** Medium.
- **Risk:** Low.
- **Acceptance Criteria:** Multi-paragraph narrative sections use asymmetric splits on desktop viewports while stacking vertically on mobile.

---

## Visual Polish Proposal 3: PullQuote & Editorial Callout Framing

- **Problem:** Important quotes blend into standard body text without sufficient visual weight.
- **Visual Goal:** Transform quotes into authoritative editorial highlights using accent borders and subtle surface tinting.
- **Possible Solutions:**
  1. Add custom card containers around quotes (Rejected: Adds unnecessary DOM nesting).
  2. Enhance `PullQuote` presentation using `border-l-4 border-brand-accent`, italic serif display typography, and subtle background surface tinting (Recommended).
- **Recommendation:** Update `PullQuote` component presentation within token boundaries.
- **Trade-offs:** None.
- **Effort:** Small.
- **Risk:** Low.
- **Acceptance Criteria:** Pull quotes stand out distinctly with left-border accents and serif typography.

---

## Visual Polish Proposal 4: Button & Interactive Hover States

- **Problem:** Outline buttons lack fine-tuned hover states across light and dark section backgrounds.
- **Visual Goal:** Deliver tactile, crisp button hover states matching high-end print publishing aesthetics.
- **Possible Solutions:**
  1. Introduce animated button glows (Rejected: Violates Motion Principles).
  2. Standardize 2px crisp border buttons with smooth color fill transitions (`border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-300`) (Recommended).
- **Recommendation:** Apply standardized button hover classes to CTA action components.
- **Trade-offs:** None.
- **Effort:** Small.
- **Risk:** Low.
- **Acceptance Criteria:** All CTA buttons exhibit smooth 300ms color transitions on hover.

---

## Verification Plan

### Automated Verification
- `pnpm lint` — 0 linting errors.
- `pnpm tsc --noEmit` — 0 type errors.
- `pnpm build` — Clean production bundle build.

---

## Final Gate

The planning phase is officially complete.
The architecture is frozen.
The design language is fully documented.
The visual direction is locked.
The project is approved to begin PR23.

From this point forward,
PR23 is an IMPLEMENTATION phase.
It is NOT a redesign phase.

No architectural refactoring is permitted.
No design philosophy changes are permitted.
No visual direction changes are permitted.

Every implementation decision must follow:
- `VISUAL_DIRECTION.md`
- `VISUAL_PRINCIPLES.md`
- `MOTION_DIRECTION.md`
- `AI_GUARDRAILS.md`
- `PERFORMANCE_BUDGET.md`
- `Architecture Freeze`
- `Profile Freeze`

The objective of PR23 is to faithfully implement the established design system and visual manifesto.
Implementation, not redesign.
