# Desa Air Putih Digital Experience

This project is a React + Vite Single Page Application built with Tailwind CSS.
It uses a feature-sliced design structure.

## Current Project Architecture
- `src/features`: Feature-specific modules (home, profile, gallery, etc.)
- `src/components`: Reusable UI components
- `src/layout`: Shared page layouts
- `src/pages`: Route entry points

## Current Routes
- `/` -> HomePage
- `/profil` -> ProfilePage
- `/pemerintahan` -> PemerintahanPage
- `/galeri` -> GalleryPage
- `/kkn` -> KknPage

## Asset Structure
Assets are highly curated and located in `public/images/`:
- `home/`, `profil/`, `pemerintahan/`, `kkn/`, `gallery/landscape/`, `background/` contain authoritative curated source photographs.
- `illustrations/` contains non-photographic AI generated textures.
- `pemerintahan/struktur-perangkat-desa.svg` contains the official SVG structure diagram.

## Development Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run oxlint

## Archive Structure
- `tools/archive/`: Historical audit and migration scripts.
- `docs/archive/`: Historical curation decisions, asset mappings, and cleanup reports.
