# PROFILE ARCHITECTURE FREEZE POLICY

**Effective Date:** August 1, 2026  
**Scope:** Halaman Profil Desa (`/profil`) & Komponen Terkait (`src/features/profile/*`, `src/content/profile/*`, `src/constants/metadata/profile.ts`)

---

## 1. Status Freeze

Halaman **Profil Desa Air Putih** telah resmi dinyatakan **Feature Complete (Beku / Frozen)** setelah menyelesaikan PR #21 (Profile QA, SEO & Architecture Freeze).

Semua komponen berikut berada di bawah perlindungan *Architecture Freeze*:

1. **Hero Section** (`src/features/profile/sections/Hero`)
2. **Welcome Section / Sambutan Kepala Desa** (`src/features/profile/sections/Welcome`)
3. **History Section / Sejarah Desa** (`src/features/profile/sections/History`)
4. **Vision Section / Visi & Misi** (`src/features/profile/sections/Vision`)
5. **Philosophy Section / Motto & Nilai Desa** (`src/features/profile/sections/Philosophy`)
6. **Profile Composition** (`src/features/profile/ProfileComposition.tsx`)
7. **Profile Content Schema** (`src/content/profile/index.ts`)
8. **Profile Metadata** (`src/constants/metadata/profile.ts`)

---

## 2. Aturan Perubahan (Modifications Policy)

Setelah PR #21, halaman Profil **TIDAK BOLEH** diubah untuk alasan refactoring, perubahan estetika ad-hoc, atau penambahan fitur baru tanpa persetujuan arsitektural.

Modifikasi HANYA diizinkan untuk 3 kondisi berikut:

1. **Bug Fixes:** Perbaikan bug runtime atau kesalahan logika render yang terbukti secara empiris.
2. **Accessibility Fixes:** Perbaikan kontras warna, keyboard navigation, atau atribut ARIA yang belum memenuhi standar aksesibilitas web.
3. **Factual Content Updates:** Pembaruan konten faktual desa di `src/content/profile/index.ts` (misalnya penggantian foto resmi atau pembaruan teks sambutan kepala desa).

---

## 3. Guardrails & Constraint Invariants

- **No Design Token Mutations:** Tidak boleh mengubah CSS custom properties / design tokens global (`src/index.css`).
- **No Layout Primitive Changes:** Tidak boleh mengubah kontrak `Container`, `Section`, `Grid`, `Split`, `Stack`, atau `Cluster`.
- **Single Source of Truth:** Seluruh konten verbal dan metadata harus bersumber dari `src/content/profile/index.ts` dan `src/constants/metadata/profile.ts`. Dilarang menempatkan text literal di dalam JSX.
- **Strict Quality Gate:** Setiap perubahan opsional di masa depan wajib meloloskan `pnpm lint`, `pnpm tsc --noEmit`, dan `pnpm build`.
