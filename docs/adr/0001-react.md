# 1. Use React for UI Development

Date: 2026-08-01

## Status
Accepted

## Context
We need a robust, component-based UI library to build the Desa Air Putih Digital Experience. The project requires high interactivity for the Digital Twin feature and a highly modular architecture for future scalability (e.g., adding CMS, i18n).

## Decision
We will use React 19 as our core UI framework, bundled with Vite. 

## Consequences
- **Pros:** Massive ecosystem, ease of hiring/maintenance, excellent abstraction capabilities for building reusable primitives (Containers, Typography, Sections).
- **Cons:** Slight overhead compared to vanilla JS, but justified by the complexity of the future Digital Twin feature.
