# FINAL SOURCE STRUCTURE

This document outlines the final stable structure of the React source code.

## 1. Directory Map

```text
src/
├── components/     # Reusable UI components (buttons, layout wrappers, specific modules)
├── constants/      # App-wide constants (e.g., routes)
├── content/        # Data definitions (gallery arrays, manifest, texts)
├── features/       # Page-specific feature modules
├── layout/         # Root layout components (Navbar, Footer, Main layout)
├── pages/          # Entry-point React components for each route
├── styles/         # Global styles (Tailwind base tokens)
└── main.tsx        # React DOM entry point
```

## 2. Route-to-File Map

This map allows any future developer to immediately trace which files build which routes.

### HOME 
Route: `/`
- **Entry**: `src/pages/HomePage.tsx` (or `App.tsx`)
- **Composition**: `src/features/home/HomeComposition.tsx`
- **Sections**:
  - Hero: `src/features/home/sections/Hero/Hero.tsx`
  - Identitas Desa: `src/features/home/sections/IdentitasDesa/IdentitasDesa.tsx`
  - History / Perjalanan: `src/features/home/sections/History/HistorySection.tsx`
  - Kehidupan / Gallery Preview: `src/features/home/sections/KehidupanDesa/KehidupanDesaSection.tsx`
  - Potentials: `src/features/home/sections/Potentials/Potentials.tsx`
  - Transparency: `src/features/home/sections/Transparency/Transparency.tsx`
  - CTA: `src/features/home/sections/CTA/CTA.tsx`

### PROFIL DESA
Route: `/profil`
- **Entry**: `src/pages/ProfilePage.tsx`
- **Composition**: `src/features/profile/ProfileComposition.tsx`
- **Sections**:
  - Identity: `src/features/profile/sections/Scene01Identity.tsx`
  - History: `src/features/profile/sections/Scene02Beginning.tsx`
  - Geography: `src/features/profile/sections/Scene03Geografi.tsx`
  - People & Values: `src/features/profile/sections/Scene03People.tsx`

### PEMERINTAHAN
Route: `/pemerintahan`
- **Entry**: `src/pages/PemerintahanPage.tsx`
- **Sections**:
  - Entire page logic is currently contained directly in `PemerintahanPage.tsx`.

### GALERI
Route: `/galeri`
- **Entry**: `src/pages/GalleryPage.tsx`
- **Composition**: `src/features/gallery/GalleryComposition.tsx`
- **Data Source**: `src/content/gallery.ts`

### KKN
Route: `/kkn`
- **Entry**: `src/pages/KknPage.tsx`
- **Sections**:
  - Hero: `src/features/kkn/components/KknHero.tsx`
  - About: `src/features/kkn/components/KknAbout.tsx`
  - Programs: `src/features/kkn/components/KknPrograms.tsx`
  - Activities: `src/features/kkn/components/KknJejakKegiatan.tsx`
  - Team: `src/features/kkn/components/KknTeam.tsx`
  - Closing: `src/features/kkn/components/KknClosing.tsx`

## 3. Core Components

- **Navbar**: `src/components/navigation/Navbar.tsx`
- **Footer**: `src/components/layout/Footer/Footer.tsx`
- **EditorialImage**: `src/components/ui/EditorialImage.tsx` (Handles lazy-loading and aspect-ratio wrapping)

## 4. Archived / Dead Files
All obsolete architecture (e.g., old `Scene04...`, duplicate `Story.tsx` components) have been successfully deleted during Phase 4 Cleanup. The current `src/` directory contains ONLY active, imported files.
