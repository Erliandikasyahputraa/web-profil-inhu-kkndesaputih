# Implementation Guide

## Architecture Status
**FROZEN**. No new React patterns, no new global state managers, no architectural refactors. We use existing components and layouts, recomposed to fit the documentary rhythm.

## Coding Rules
- Do not build "sections". Build "scenes".
- Do not dump text. Extract strings into semantic variables for `quote`, `caption`, `statistic`, and `body`.
- Use existing Tailwind configuration. Modify global tokens (e.g., `styles/index.css`) only to enforce the warm paper/cream backgrounds and remove default dark modes.

## Component Mapping (Primitives)
- **Wide Shot**: Full-bleed container, `h-screen` or `h-[80vh]`. Image/Video absolute fill.
- **Extreme Emptiness**: Flex container, center aligned, max-width constraints, massive typography classes.
- **Collage**: CSS Grid with specific row/column spans to create asymmetrical, dense image clusters.
- **Data Climax**: Large numeric typography inside a minimalist flex container.

## Scene Implementation Sequence
We implement one scene at a time, strictly following the narrative flow.

### Scene 1: Arrival (Opening Scene)
- **Responsibility**: Instantly stop the scroll. Hook the visitor. No information overload.
- **Elements**: 
  - Full bleed cinematic visual.
  - Minimal title.
  - No competing buttons or long paragraphs.

### Scene 2: The People
*(Implementation details pending Scene 1 review)*

### Scene 3: The Land
*(Implementation details pending Scene 2 review)*

### Scene 4: The Guardians
*(Implementation details pending Scene 3 review)*

### Scene 5: The Livelihood
*(Implementation details pending Scene 4 review)*

### Scene 6: The Connection
*(Implementation details pending Scene 5 review)*
