# Desa Air Putih Digital Experience

## Architecture & Philosophy
This project is built from scratch following a strict **Senior Frontend Architect** directive:
- **System Over Page Optimization:** Optimizes for the entire system ecosystem, not individual screenshots.
- **Architecture First:** Scalability and maintainability over premature visual polish.
- **The Figma Philosophy:** The provided Google Stitch designs were used strictly as visual references, identical to Figma screenshots. No generated HTML/CSS was copied or referenced.

## Tech Stack
- **Framework:** React 19 + Vite + TypeScript
- **Package Manager:** `pnpm`
- **Styling:** Tailwind CSS v4, `clsx`, `tailwind-merge`
- **Animation:** Motion (`framer-motion`), `react-intersection-observer` (Opt-in only)
- **Icons & UI:** `lucide-react`, `embla-carousel-react`
- **Fonts:** Libre Baskerville Variable, Inter Variable

## Architecture Decision Records (ADR)
- **React 19 + Vite:** Chosen for fast static builds, modern capabilities, and seamless integration with static hosts like Vercel and Netlify.
- **Tailwind CSS v4:** Chosen for rapid, design-system constrained utility styling. Strictly abstracted behind primitive UI components (`<Container>`, `<Section>`) to avoid inline spaghetti.
- **Feature Architecture:** `src/features/*` encapsulates modular logic (components, sections, hooks, types) to prevent monolithic application bloat.
- **Static Content Architecture:** `src/content/*` separates all text and configuration from the UI, preparing the system for a future Headless CMS integration.

## Folder Structure
- `public/`: Static assets, structured image folders (`hero/`, `gallery/`, etc.), fonts, SEO base.
- `src/features/`: Feature-based modular architecture.
- `src/components/`: Reusable UI abstractions.
- `src/layout/`: Root and editorial layout wrappers.
- `src/design/`: Design system token definitions (`colors`, `elevation`, `theme`).
- `src/constants/`: App constants and modular metadata (`home.ts`, `history.ts`).
- `src/content/`: Static content exports.

## Getting Started
1. Clone the repository.
2. Run `pnpm install`.
3. Copy `.env.example` to `.env.local` and adjust variables.
4. Run `pnpm dev` to start the local development server.

## Quality Gate (Definition of Done)
- TypeScript zero errors.
- ESLint passes.
- Production build succeeds.
- Responsive at all breakpoints (360, 480, 768, 1024, 1280, 1536).
- Accessible (ARIA, alt text).
- Reusable UI abstractions.

## Future Ready Roadmap
- **CMS Ready:** Content layer already isolated.
- **i18n Ready:** Texts extracted to variables, allowing easy dictionary swaps.
- **PWA Ready:** Base manifest initialized.
- **Blog Ready:** Component architecture supports generic markdown rendering layouts.
- **API Ready:** Environment variables stubbed out for backend expansion.
