# 2. Use Tailwind CSS v4 for Styling

Date: 2026-08-01

## Status
Accepted

## Context
We need a styling solution that ensures consistency with our design system (typography, spacing, elevation) without bloating the CSS bundle or causing specificity wars.

## Decision
We will use Tailwind CSS v4. However, to prevent "utility spaghetti," raw Tailwind classes must be encapsulated inside reusable UI primitives (`<Container>`, `<Section>`, `<Heading>`, etc.). 

## Consequences
- **Pros:** Rapid styling, consistent design token enforcement via `@theme`, extremely small production CSS bundle.
- **Cons:** HTML can become cluttered if utility classes are not properly abstracted into components. We mitigate this through strict architectural rules.
