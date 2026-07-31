# 4. Use Static Content Layer

Date: 2026-08-01

## Status
Accepted

## Context
We need to populate the application with text and image references, but we currently do not have a backend or CMS.

## Decision
All content must be decoupled from UI components and stored in `src/content/`. The content should be heavily compartmentalized (e.g., `homepage/hero.ts`, `homepage/story.ts`).

## Consequences
- **Pros:** Clean UI components, easily swappable content, perfectly prepares the codebase for a future Headless CMS integration.
- **Cons:** Requires rigorous prop-passing and strict typing of content objects.
