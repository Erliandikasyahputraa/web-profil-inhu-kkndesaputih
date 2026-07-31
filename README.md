# Desa Air Putih Digital Experience

## Architecture & Philosophy
This project is built from scratch following a strict **Senior Frontend Architect** directive:
- **Architecture First:** Scalability and maintainability over premature visual polish.
- **The Figma Philosophy:** The provided Google Stitch designs were used strictly as visual references, identical to Figma screenshots. No generated HTML/CSS was copied or referenced.

## Tech Stack
- **Framework:** React 19 + Vite + TypeScript
- **Package Manager:** `pnpm`
- **Styling:** Tailwind CSS v4, `clsx`, `tailwind-merge`
- **Animation:** Motion (`framer-motion`), `react-intersection-observer`
- **Icons & UI:** `lucide-react`, `embla-carousel-react`
- **Fonts:** Libre Baskerville (Heading), Inter (Body)

## Folder Structure
- `public/`: Static assets, structured image folders, fonts, SEO base.
- `src/features/`: Feature-based architecture containing self-contained pages/sections.
- `src/components/`: Reusable UI abstractions (`Container`, `Section`, `EditorialImage`, etc).
- `src/design/`: Design system token definitions.
- `src/content/`: Static content and section configurations (No magic strings).

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

## Future Roadmap
- Integration with Headless CMS (content layer replacement).
- Digital Twin expanded interactive 3D capabilities.
