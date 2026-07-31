# Changelog

All notable changes to the Desa Air Putih Digital Experience project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [v1.0.0-architecture-freeze] - 2026-08-01

### Added
- **Design System**: Comprehensive semantic token system (`tokens.css`).
- **Typography Components**: `<Display>`, `<Heading>`, `<Body>`, `<Caption>`, `<Overline>` powered by fluid `clamp()` functions.
- **Layout Primitives**: `<Stack>`, `<Cluster>`, `<Grid>`, `<Split>`, `<Section>`, `<Container>` architecture to eliminate raw Tailwind layout classes.
- **Metadata System**: Strongly typed `ImageMetadata` and centralized `EditorialImage` API supporting semantic presets (`hero`, `story`, `portrait`, `square`).
- **Responsive Navigation**: Mobile hamburger menu integrated into `<Navbar>`.
- **Documentation**: 
  - `docs/DESIGN_SYSTEM.md`
  - `docs/MIGRATION_GUIDE.md`
  - `docs/TECH_DEBT_REPORT.md`
  - `docs/ARCHITECTURE_FREEZE.md`
  - `docs/RESPONSIVE_QA.md`
  - `docs/LIGHTHOUSE_SCORE.md`
  - `docs/DECISIONS.md` (Architecture Decision Records)

### Changed
- Refactored all Homepage Sections (`Hero`, `Story`, `Nature`, `Potentials`, `Timeline`, `Gallery`, `Transparency`, `CTA`, `Footer`) to use Layout Primitives and Typography tokens.
- Optimized performance targets (Lighthouse 95+): `Hero` image utilizes `fetchPriority="high"` while all other images enforce `loading="lazy"`.
- Improved global accessibility with consistent heading hierarchies, aria-labels, and `:focus-visible` styling.

### Removed
- Eliminated over 75% of raw utility classes (`flex`, `gap-*`, `text-*`) from feature components in favor of the Design System.
- Removed all `TODO`, `FIXME`, and `console.log` instances for a clean production baseline.

---

## [v0.3.0] - 2026-07-31
### Added
- Initial Design System audit and setup (Phase A).

## [v0.2.0] - 2026-07-30
### Added
- Homepage MVP completion with hardcoded layout styling.

## [v0.1.0] - 2026-07-28
### Added
- Project initialization (Vite, React, TypeScript, TailwindCSS v4).
