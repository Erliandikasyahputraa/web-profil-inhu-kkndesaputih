# Information Page (`/informasi`)

**Status:** IMPLEMENTED (PR27)

## Purpose
Acts as the utility center of the Digital Coffee Table Book. It provides citizens and visitors with actionable data, administrative requirements, announcements, and contact channels in a calm, clear format.

## Editorial Goal
**Clarity and Calm.** Unlike the abundance of Potentials or the narrative weight of Governance, this page focuses entirely on frictionless readability and trust.

## Composition Architecture
- **Hero:** Starts with `transparent` background to ground the user, featuring a clean, wide editorial image of civic activity.
- **Intro:** A tight, text-focused `muted` section to establish purpose.
- **Announcements:** Uses a 3-column `Grid` on a `primary` background. Avoiding traditional "cards" and opting for clean, top-bordered typographic stacks to mimic a newspaper or broadsheet layout.
- **Services:** Returns to a `Split` layout on `muted` background. The services are listed as soft-bordered blocks (`bg-brand-surface`), providing visual containment without feeling like a dense data dashboard.
- **Documents:** Built within a `narrow` container on `primary` background. Each document is a horizontal row (`flex-row`) mimicking a clean list, with a simple download CTA.
- **Contact:** Drops to a `dark` background. Reverses the `Split` layout, pinning a profound `Parallax` quote on the right, while listing standard contact details on the left.

## Architectural Adherence
This page was implemented strictly using frozen components:
- Layout: `Stack`, `Split`, `Container`.
- UI: `Section`, `SectionHeader`, `EditorialImage`, `PullQuote`.
- Typography: `Display`, `Heading`, `Body`, `Overline`.
- Motion: `FadeIn`, `Reveal`, `Parallax`.
- Content: Single Source of Truth from `src/content/information/index.ts`.

## QA Results
- **Accessibility:** Extremely high contrast. The typographic hierarchy (`Overline` -> `Heading` -> `Body`) makes parsing announcements and services effortless for screen readers.
- **Visual Rhythm:** The page cycles `transparent` -> `muted` -> `primary` -> `muted` -> `primary` -> `dark`.
- **Performance:** Passed Vite build. Zero heavy graphics, zero new JS.
