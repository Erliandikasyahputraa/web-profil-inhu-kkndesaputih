# 3. Use Feature-Based Architecture

Date: 2026-08-01

## Status
Accepted

## Context
Traditional React architectures group files by type (e.g., all components in `/components`, all hooks in `/hooks`). As projects grow, this makes finding related code difficult and often leads to monolithic, tangled dependencies.

## Decision
We adopt a Feature-Based Architecture. Each major domain (e.g., `home`, `gallery`, `history`) has its own self-contained folder inside `src/features/`. Each feature exposes its public API through an `index.ts` file. 
Furthermore, complex sections (like `Hero`) must be composed of smaller, single-responsibility components (`HeroBackground.tsx`, `HeroContent.tsx`).

## Consequences
- **Pros:** High modularity, easy to delete or refactor features, prevents circular dependencies, enforces boundaries.
- **Cons:** Slightly deeper folder structures.
