# Desa Air Putih Digital Experience

> Sebuah dokumenter interaktif tentang Desa Air Putih. Menjelajahi harmoni antara alam, budaya, dan denyut kehidupan masyarakat di tepian Sungai Indragiri, Riau.

![Homepage Showcase](https://desaairputih.id/images/hero/cinematic_drone_photography_of_desa_air_putih_riau_indonesia._an_expansive.png)

## Visi Proyek

Desa Air Putih Digital Experience bukanlah website pemerintahan biasa atau portal berita desa. Proyek ini dibangun sebagai **dokumenter digital interaktif**. Tujuannya adalah untuk mendokumentasikan, mengarsipkan, dan menceritakan kehidupan Desa Air Putih—mulai dari sejarah, bentang alam, hingga semangat gotong royong masyarakatnya—dengan estetika editorial yang kuat.

Setiap halaman dirancang menyerupai bab dalam majalah atau buku seni, menggunakan tipografi yang tenang, ruang negatif yang luas, dan tata letak sinematik.

## Struktur Dokumenter

Situs ini dibagi menjadi beberapa bab naratif:
- **Beranda (Prolog)**: Pengantar emosional yang mengundang pengunjung.
- **Profil Desa (Bab I)**: Menyelami akar sejarah, nilai-nilai, dan identitas hari ini.
- **Geografi (Bab II)**: Dokumentasi bentang alam yang membentuk kehidupan desa.
- **Pemerintahan (Bab III)**: Mengenal tokoh-tokoh yang merawat kesejahteraan warga.
- **Potensi (Bab IV)**: Cerita tentang sumber daya dan kreativitas masyarakat.
- **Informasi (Bab V)**: Arsip transparansi dan layanan publik.
- **Galeri (Bab VI)**: Arsip visual komprehensif kehidupan desa.

## Stack Teknologi

Proyek ini menggunakan teknologi frontend modern untuk memastikan performa yang cepat dan animasi yang halus:
- **Framework**: React 18 (Vite)
- **Styling**: Tailwind CSS v4 (Custom Tokens + Vanilla CSS Architecture)
- **Routing**: React Router v6
- **Animasi**: Framer Motion
- **Ikonografi**: Lucide React
- **Tipografi**: Inter (Sans-serif) & Lora (Serif)

## Struktur Folder

```text
src/
├── app/          # Konfigurasi aplikasi (Router, Contexts)
├── components/   # Komponen UI global (Navbar, Footer, Button, EditorialImage)
├── constants/    # Konstanta statis (Rute, Metadata, Pengaturan UI)
├── content/      # Arsip data konten (Semua data statis berada di sini)
├── features/     # Modul per halaman (Home, Profil, Geografi, dll)
│   └── [feature]/
│       ├── sections/        # Potongan scene untuk setiap halaman
│       └── [Feature]Composition.tsx # Penggabungan scene (Layout)
├── lib/          # Utilitas global (cn, helpers)
├── pages/        # Entry point halaman (Menyambungkan feature ke rute)
└── styles/       # Variabel CSS dan Tailwind Tokens
```

## Instalasi & Pengembangan

Pastikan Anda memiliki Node.js dan `pnpm` terinstal di sistem Anda.

1. **Clone repositori**
   ```bash
   git clone https://github.com/your-username/desa-air-putih.git
   cd "desa-air-putih"
   ```

2. **Instal dependensi**
   ```bash
   pnpm install
   ```

3. **Jalankan server pengembangan**
   ```bash
   pnpm dev
   ```
   Aplikasi akan berjalan di `http://localhost:5173`.

## Build & Deployment

Proyek ini telah dikonfigurasi untuk Netlify (SPA fallback via `public/_redirects`), namun dapat dengan mudah di-deploy ke Vercel atau layanan hosting statis lainnya.

```bash
pnpm build
```

Hasil build akan berada di direktori `dist/`.

## Penghargaan

- **Masyarakat Desa Air Putih**: Atas keterbukaannya untuk didokumentasikan.
- **Mahasiswa KKNT UIN Suska Riau**: Atas dedikasinya dalam menggali dan menyusun narasi desa.
- **Pemerintah Kabupaten Indragiri Hulu**: Atas dukungannya terhadap digitalisasi desa.

---
Dibuat dengan ❤️ di Riau, Indonesia.
