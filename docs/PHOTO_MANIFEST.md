# Manifest Foto Fisik (Photo Manifest)

Dokumen ini adalah rekapitulasi struktur folder fisik foto yang berada di dalam `public/images/`. Dokumen ini berguna bagi pengelola aset digital untuk mengetahui di mana letak suatu file gambar.

*Catatan: Dokumen ini merangkum struktur fisik direktori. Beberapa foto mungkin ada di dalam folder fisik namun sengaja tidak dirender di UI (misalnya foto portrait di halaman Galeri).*

## Beranda (`/public/images/beranda/`)
- `beranda_hero_01.webp`
- `beranda_hero_02.webp`
- `beranda_hero_03.webp`
- `beranda_profil_01.webp`
- `beranda_profil_02.webp`
- `beranda_profil_03.webp`
- `beranda_potensi_01.webp`
- `beranda_potensi_02.webp`
- `beranda_potensi_03.webp`
- `beranda_potensi_04.webp`

## Profil Desa (`/public/images/profil/`)
- `profil_hero_01.webp`
- `profil_hero_02.webp`
- `profil_hero_03.webp`
- `profil_sejarah_01.webp`
- `profil_geografi_01.webp`
- `profil_demografi_01.webp`

## Pemerintahan (`/public/images/pemerintahan/`)
- `pemerintahan_hero_01.webp`
- `struktur-perangkat-desa.svg`
- `struktur-perangkat-desa.webp`

## Galeri Fotografi (`/public/images/galeri/`)
Berisi foto-foto dokumentasi estetik desa.
Hanya foto berorientasi *landscape* yang secara aktif di-render oleh UI Galeri melalui `src/content/gallery/assetManifest.ts`.

- `galeri_landscape_01.webp` s.d. `galeri_landscape_12.webp`
- `galeri_portrait_01.webp` s.d. `galeri_portrait_06.webp` (Aset fisik tetap ada sebagai arsip)

## Kuliah Kerja Nyata / KKN (`/public/images/kkn/`)
- `kkn_activity_01.webp` s.d. `kkn_activity_10.webp`

---
*Gunakan `PHOTO_REPLACEMENT_GUIDE.md` untuk panduan cara menimpa file-file ini dengan aman.*
