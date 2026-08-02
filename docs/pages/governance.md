# Governance Page (`/pemerintahan`)

**Status:** IMPLEMENTED (PR25)

## Purpose
Communicates the leadership structure, transparency initiatives, and community participation mechanisms of Desa Air Putih. It aims to build trust through clarity, framing governance not as bureaucratic machinery, but as human-centered public service.

## Emotional Goal
**Trust and Connection.** It should feel dignified, open, and community-focused.

## Composition Architecture
- **Hero:** Employs `background="transparent"` with an intimate `hero` shot of the village hall or community interaction.
- **Leadership:** Anchors a profound `Parallax` quote in the sticky sidebar (`lg:sticky`), allowing the reader to consume the narrative against a strong leadership portrait.
- **Organization:** Uses a clean grid layout (`bg-brand-surface`) on a `muted` background to organize structural roles without resorting to a traditional, sterile org-chart graphic.
- **Transparency:** Reverses the `Split` flow (`flex-row-reverse`) to break up the rhythm, pairing portrait imagery with bold `EditorialStats` to prove accountability.
- **Participation:** Closes the chapter on a communal note. Uses `background="dark"` and center-aligned text (`max-w-3xl`) over a large `landscape` image to focus entirely on the people.

## Architectural Adherence
This page was implemented strictly using frozen components:
- Layout: `Stack`, `Split`, `Container`.
- UI: `Section`, `SectionHeader`, `EditorialImage`, `PullQuote`, `EditorialStats`.
- Typography: `Display`, `Heading`, `Body`, `Overline`.
- Motion: `FadeIn`, `Reveal`, `Parallax`.
- Content: Single Source of Truth from `src/content/governance/index.ts`.

## QA Results
- **Visual:** Smooth background rhythm (`transparent` -> `primary` -> `muted` -> `primary` -> `dark`).
- **Responsive:** Sidebar splits fold cleanly on mobile, preserving the quote-before-text reading order.
- **Performance:** Passed Vite build smoothly. Zero custom CSS.
