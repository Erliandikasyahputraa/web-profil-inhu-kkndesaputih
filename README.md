# Desa Air Putih — Digital Experience

Website profil resmi Desa Air Putih, Kecamatan Lubuk Batu Jaya, Kabupaten Indragiri Hulu, Riau.
Dikembangkan sebagai bagian dari luaran Kuliah Kerja Nyata (KKN) mahasiswa UIN Sultan Syarif Kasim Riau tahun 2026.

## Teknologi & Arsitektur

- **Framework**: React (Vite)
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS v3
- **Animasi**: Framer Motion
- **Icons**: Lucide React

## Struktur Proyek

Proyek ini dirancang dengan prinsip pemisahan data (konten) dan presentasi (UI) untuk memudahkan pemeliharaan jangka panjang oleh perangkat desa atau pengembang selanjutnya.

- `src/content/`: Berisi seluruh data teks dan path gambar (Single Source of Truth).
- `src/features/`: Komponen UI yang spesifik untuk fitur tertentu (beranda, profil, galeri, dll).
- `src/pages/`: Komponen halaman utama yang merangkai komponen fitur.
- `public/images/`: Direktori penyimpanan fisik seluruh aset gambar.

## Panduan Pengelolaan

Untuk memastikan website tetap terawat dan informasi selalu akurat, silakan merujuk pada panduan berikut yang tersedia di dalam direktori `docs/`:

1.  **[Panduan Pembaruan Konten (CONTENT_UPDATE_GUIDE.md)](./docs/CONTENT_UPDATE_GUIDE.md)**: Panduan langkah demi langkah untuk mengubah data teks (sejarah, demografi, struktur pemerintahan, dll) tanpa menyentuh kode UI.
2.  **[Panduan Penggantian Foto (PHOTO_REPLACEMENT_GUIDE.md)](./docs/PHOTO_REPLACEMENT_GUIDE.md)**: Panduan cara mengganti atau memperbarui foto di website dengan mempertahankan kualitas visual.
3.  **[Struktur Kode Final (FINAL_SOURCE_STRUCTURE.md)](./docs/FINAL_SOURCE_STRUCTURE.md)**: Referensi lengkap mengenai arsitektur kode sumber.
4.  **[Manifest Foto (PHOTO_MANIFEST.md)](./docs/PHOTO_MANIFEST.md)**: Daftar lengkap seluruh aset foto yang digunakan di website beserta lokasinya.

## Menjalankan Proyek Secara Lokal

Pastikan Anda telah menginstal Node.js (versi 18+) dan manajer paket seperti `pnpm` atau `npm`.

```bash
# Instal dependensi
pnpm install

# Jalankan server pengembangan
pnpm dev

# Build untuk produksi
pnpm build
```

---
*Dikembangkan dengan ❤️ untuk Desa Air Putih.*
