# Halaman Profil

## Tujuan Halaman
Menyajikan Profil Desa, Sejarah, Sambutan Kepala Desa, Visi Misi, dan Motto dalam sebuah format *long-form editorial* yang nyaman dibaca seperti majalah digital.

## Composition
Saat ini halaman Profil disusun dengan urutan seksi sebagai berikut:

```text
Hero
↓
Welcome
↓
History
↓
Vision
↓
Philosophy
```

## Data Source
Semua teks dan data referensi gambar pada halaman ini bersumber dari satu tempat:
`src/content/profile/index.ts`

## Status Implementasi
- [x] Routing (`/profil`)
- [x] Skema Data (`src/content/profile/index.ts`)
- [x] Hero Section
- [x] Welcome Section
- [x] History Section
- [x] Vision Section
- [x] Philosophy Section
- [x] Final QA (Responsive, Accessibility, SEO Metadata Integration)
- [x] Architecture Freeze & Profile Hardening (PR #21)

## Definition of Done (DoD)
- [x] Tidak ada *hardcode* teks di dalam komponen UI (`src/content/profile/index.ts` sebagai Single Source of Truth).
- [x] Menggunakan secara ketat *Layout Primitives* dan komponen dari *Design System*.
- [x] Gambar dirender menggunakan `<EditorialImage>`.
- [x] Terintegrasi dengan `<PageMetadata>` (`src/constants/metadata/profile.ts`) untuk OpenGraph, Twitter Cards, dan Tag Meta SEO.
- [x] Lolos *type checking* (`pnpm tsc --noEmit`), *linting* (`pnpm lint`), dan produksi bundle (`pnpm build`).

## Screenshots
- **Desktop (1440px+):** `docs/images/profile-desktop-placeholder.png`
- **Tablet (768px):** `docs/images/profile-tablet-placeholder.png`
- **Mobile (360px-430px):** `docs/images/profile-mobile-placeholder.png`

