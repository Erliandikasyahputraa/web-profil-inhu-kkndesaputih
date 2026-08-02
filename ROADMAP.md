# Project Roadmap — Desa Air Putih Digital Experience

> **STATUS:** ROADMAP LOCKED & ARCHITECTURE FROZEN  
> **Current Milestone:** PR22 — Visual Direction (Planning Only)

---

## Official Final Roadmap

- [x] **PR17:** Profile Foundation
- [x] **PR18:** Hero, Welcome, History Sections
- [x] **PR19:** Vision & Philosophy Sections
- [x] **PR20:** Schema Cleanup
- [x] **PR21:** Profile QA, SEO, Documentation & Profile Freeze
- [ ] **PR22: Visual Direction (UI Polish)** *(Current Task - Planning Only)*
- [ ] **PR23:** Geography Page (`/geografi`)
- [ ] **PR24:** Governance Page (`/pemerintahan`)
- [ ] **PR25:** Potentials Page (`/potensi`)
- [ ] **PR26:** Information Page (`/informasi`)
- [ ] **PR27:** Final QA (Cross-Browser, Accessibility, SEO Audit)
- [ ] **PR28:** Production Deployment

---

## Architectural Constraints (Read-Only Systems)

The following systems are under strict **Architecture Freeze** and MUST NOT be refactored or modified:

- Folder architecture (`src/components/`, `src/features/`, `src/content/`)
- Design Tokens API (`src/styles/tokens.css`, `src/index.css`)
- Layout Primitives API (`Container`, `Section`, `Grid`, `Split`, `Stack`, `Cluster`)
- Typography Primitives API (`Display`, `Heading`, `Lead`, `Body`, `Caption`, `Overline`, `Quote`)
- Editorial Image API (`EditorialImage`)
- Metadata Architecture (`PageMetadata`)
- Content Architecture (`src/content/*`)
- Routing Architecture (`src/App.tsx`, `src/constants/routes.ts`)

---

## Definition of Done (DoD)

Every page and feature milestone MUST satisfy:
1. **Architecture Adherence:** Strictly uses Design System components (`<Stack>`, `<Grid>`, `<Heading>`, `<Body>`). No ad-hoc layout overrides breaking primitive APIs.
2. **Image API:** All images must use the centralized `<EditorialImage>` component with proper presets.
3. **Single Source of Truth Data:** All copy and text must be driven by static content files in `src/content/`.
4. **Code Quality:** Passes `pnpm lint` without warnings/errors.
5. **Type Safety:** Passes `pnpm tsc --noEmit` without errors.
6. **Build Verification:** Passes `pnpm build` cleanly.
