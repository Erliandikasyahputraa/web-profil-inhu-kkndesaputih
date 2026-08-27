# Struktur Kode Sumber Final (Final Source Structure)

Dokumen ini merangkum arsitektur kode sumber untuk proyek Desa Air Putih Digital Experience setelah fase stabilisasi (Phase 12).

## Hierarki Utama

```
Desa Air Putih Digital Experience/
├── public/                 # Aset statis yang di-serve langsung
│   ├── favicon.ico
│   └── images/             # Root dari semua aset gambar fisik
│       ├── beranda/
│       ├── galeri/
│       ├── kkn/
│       ├── pemerintahan/
│       └── profil/
│
├── src/                    # Kode sumber aplikasi (React)
│   ├── assets/             # Aset yang di-import via JS/CSS
│   │   ├── fonts/          # Font kustom (jika ada)
│   │   └── index.css       # Global styles & Tailwind directives
│   │
│   ├── components/         # Komponen UI yang reusable (Dumb components)
│   │   ├── common/         # Layout, Header, Footer, PageMetadata
│   │   └── ui/             # Section, EditorialImage, dll
│   │
│   ├── constants/          # Nilai konstan global
│   │   └── routes.ts       # Definisi URL routing
│   │
│   ├── content/            # Single Source of Truth untuk data teks
│   │   ├── gallery/
│   │   │   └── assetManifest.ts  # Daftar foto galeri
│   │   ├── kkn/
│   │   │   └── documentation.ts  # Teks halaman KKN
│   │   └── village/
│   │       ├── demographics.ts   # Data geografi & demografi
│   │       ├── history.ts        # Sejarah & daftar kades
│   │       ├── socialEconomy.ts  # Statistik sektoral
│   │       └── visionMission.ts  # Visi misi
│   │
│   ├── features/           # Komponen UI spesifik untuk sebuah halaman
│   │   ├── gallery/        # Logika dan UI khusus Galeri
│   │   ├── home/           # Sections untuk Beranda
│   │   ├── kkn/            # Sections untuk KKN
│   │   └── profile/        # Sections untuk Profil
│   │
│   ├── pages/              # Komponen level-halaman (Rute Utama)
│   │   ├── HomePage.tsx
│   │   ├── ProfilePage.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── KknPage.tsx
│   │   └── PemerintahanPage.tsx
│   │
│   ├── App.tsx             # Root component & Routing configuration
│   └── main.tsx            # React DOM entry point
│
├── docs/                   # Dokumentasi pengembang & panduan pengelolaan
│   └── archive/            # Laporan proses development lama
│
├── tailwind.config.js      # Konfigurasi Tailwind CSS
├── vite.config.ts          # Konfigurasi build (Vite)
└── package.json            # Daftar dependencies
```

## Prinsip Desain Arsitektur

1.  **Separation of Concerns (SoC)**: Teks (`src/content/`) dipisahkan dari tampilan UI (`src/features/` & `src/pages/`). Hal ini memungkinkan non-developer untuk memperbarui data desa tanpa perlu memahami logika React atau Tailwind CSS.
2.  **Absolute Imports**: Menggunakan `@/` untuk mengimpor modul, yang merujuk pada root folder `src/`.
3.  **Flat Images Directory**: Seluruh gambar ditempatkan secara fisik di `public/images/`. Referensi gambar di dalam kode selalu merujuk pada absolute path dari domain root (misalnya `/images/beranda/nama_file.webp`).
