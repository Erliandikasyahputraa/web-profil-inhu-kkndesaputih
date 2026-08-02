# RC4 Implementation Roadmap

This roadmap defines how we will execute the RC4 Editorial Rewrite *without* breaking the existing architecture, Design Tokens, Layout Primitives, or Content Architecture.

## Phase 1: Global Aesthetic Shift (Day 1)
We will adjust the foundational CSS variables to match the "Warmth & Memory" aesthetic, strictly avoiding generic dark themes.
- **Action**: Update background color tokens (e.g., removing pure whites and deep blacks, replacing with warm paper, soft stone, cream, olive).
- **Action**: Update typography size tokens to increase the contrast between Display (h1) and Detail (captions).
- **Action**: Global image border-radius check (ensuring they fit the editorial, non-SaaS feel—likely zero radius or very slight).

## Phase 2: Content Re-orchestration (Day 2-3)
We are not changing the data structures, only how the data is fed into the layout components.
- **Action**: Apply the Content Compression rules. Convert long paragraphs in the CMS/Data files into `quote`, `caption`, and `body` groupings.
- **Action**: Identify and convert descriptive paragraphs into Statistical components where applicable.

## Phase 3: Page-by-Page Recomposition (Day 4-6)
We will rebuild the pages using existing components, but in radically different arrangements.
- **Homepage**: Collapse the 8 sections into the 5-beat rhythm defined in `SCROLL_STORYBOARD.md`.
- **Profile**: Introduce the asymmetrical layout (large text, small image).
- **Geography**: Implement the Cinematic Full-Bleed moment.
- **Governance**: Reformat the data climax for transparency.

## Phase 4: Image Strategy Execution (Day 7)
- **Action**: Replace repetitive full-height image blocks with the `Gallery Collage` approach.
- **Action**: Implement aspect ratio enforcements (16:9 for landscapes, 3:4 for portraits).

## Phase 5: Pacing & Polish (Day 8)
- **Action**: Scroll testing. Does the page feel like a documentary? Are the Visual Moments landing correctly? 
- **Action**: Adjusting negative space. (Usually increasing it drastically around typography, and decreasing it within image collages).

**Constraint Reminder**: NO new libraries. NO new complex React architectures. We are simply changing the props, the order of components, and the global CSS variables to create a masterpiece.
