# Desa Air Putih — Digital Experience

Sebuah website profil digital untuk **Desa Air Putih**, Kecamatan Lubuk Batu Jaya, Kabupaten Indragiri Hulu, Riau.

Website ini dibuat bukan sekadar untuk menaruh data desa ke dalam halaman panjang yang membosankan. Tujuannya lebih sederhana: membuat siapa saja bisa mengenal desa dengan nyaman—melihat tata kelola pemerintahannya, menemukan informasi pelayanan publik, menikmati galeri kegiatan warga, dan membaca dinamika kehidupan di Desa Air Putih tanpa merasa sedang membuka dokumen administrasi yang kaku.

---

## Halaman & Struktur

Website ini terbagi ke dalam lima ruang utama yang saling terhubung:

- **Beranda (`/`)**  
  Pintu masuk utama yang menyajikan ringkasan singkat desa: sambutan, statistik pokok wilayah, akses cepat ke halaman lain, serta potret pembuka suasana desa.

- **Profil Desa (`/profil`)**  
  Menyajikan identitas lengkap Desa Air Putih: sejarah pendirian sejak era transmigrasi 1993, kondisi geografi dan demografi 5 dusun, peta kartografi wilayah, serta potensi desa mulai dari perkebunan sawit, pertanian, hingga tradisi gotong royong warga.

- **Pemerintahan (`/pemerintahan`)**  
  Memuat informasi tata kelola desa, pedoman akses layanan administrasi bagi warga, bagan struktur organisasi perangkat desa, hingga riwayat kepemimpinan 10 Kepala Desa dari masa ke masa.

- **Galeri Fotografi (`/galeri`)**  
  Dinding potret dokumenter berformat *editorial photo wall* yang merekam kehangatan warga, kegiatan gotong royong, olahraga sore, serta lanskap asri pedesaan lengkap dengan penampil interaktif (*lightbox*).

- **Dokumentasi KKN (`/kkn`)**  
  Ruang arsip pengabdian mahasiswa KKN Tematik 2026: fokus program kerja, bidang kegiatan, profil anggota tim, dan akses langsung ke dokumen laporan.

---

## Arah Desain & Visual

Visual website ini sengaja diarahkan ke nuansa **editorial documentary** yang hangat dan manusiawi, bukan template pemerintahan generik pada umumnya:

- **Palet Warna Alami**: Dominasi latar krem hangat (*warm ivory*) dipadukan dengan aksen hijau hutan (*deep forest green*) dan sentuhan terakota lembut yang mencerminkan keteduhan alam pedesaan.
- **Tipografi Berkarakter**: Kombinasi huruf serif klasik untuk judul dan tajuk utama agar terasa berwibawa dan bersahabat, disandingkan dengan sans-serif modern yang nyaman dibaca pada teks panjang.
- **Fotografi sebagai Narasi**: Foto-foto autentik kehidupan desa menjadi elemen pencerita utama, bukan sekadar pelengkap visual.

---

## Responsivitas & Kenyamanan Perangkat

Tata letak dirancang adaptif dan telah diuji secara teliti di berbagai resolusi layar:

- **Mobile Ringkas (320px – 430px)**: Navigasi menu yang rapi, tombol yang ramah sentuhan, dan susunan kartu yang tidak meluap ke samping (*no horizontal overflow*).
- **Mobile Landscape & Tablet (568px – 1194px)**: Transisi kolom yang proporsional sehingga hierarki teks dan gambar tetap seimbang.
- **Desktop & Layar Lebar (1024px – 1920px)**: Batasan lebar kontainer yang terjaga agar panjang baris kalimat tetap nyaman di mata.

---

## Performa & Optimasi Gambar

Karena fotografi memegang peranan penting dalam pengalaman visual website ini, seluruh aset gambar dioptimalkan agar website tetap ringan diakses melalui jaringan seluler:

- **Format Modern WebP**: Seluruh foto mentah beresolusi kamera tinggi dikonversi ke WebP dengan penyesuaian dimensi yang pas untuk layar web.
- **Pengurangan Ukuran Drastis**: Total berat aset raster berkurang dari **193.85 MB** menjadi **11.05 MB** (penghematan bandwidth mencapai **94.3%**) tanpa mengorbankan ketajaman foto.
- **Pemuatan Cerdas**: Gambar utama (*hero banner*) dimuat lebih awal (*eager & high fetch priority*), sementara galeri dan kartu di bagian bawah dimuat secara bertahap (*lazy loading*).

---

## Navigasi & Perpindahan Halaman

Sebagai *Single Page Application* (SPA), website ini dilengkapi pengelolaan scroll terpusat:

- Setiap kali berpindah ke halaman baru melalui navbar, kartu, atau tautan internal, tampilan akan selalu otomatis mulai dari bagian paling atas (*top*).
- Tautan jangkar (*hash anchor*) seperti `#struktur-organisasi` atau `#tentang-kkn` tetap menggulir mulus langsung ke bagian yang dituju.
- Tombol navigasi riwayat browser (*Back / Forward*) tetap bekerja normal.

---

## Teknologi yang Digunakan

Website ini dibangun menggunakan stack modern:

- **React 19** & **TypeScript** — Struktur komponen dan keamanan tipe data.
- **Vite** — Build tool dan server pengembangan yang cepat.
- **React Router DOM v7** — Manajemen rute dan navigasi halaman.
- **Tailwind CSS v4** — Sistem desain utilitas dan styling antarmuka.
- **Lucide React** — Set ikon antarmuka yang bersih dan konsisten.
- **Framer Motion** — Animasi mikro yang halus dan tidak berlebihan.

---

## Struktur Folder

```text
src/
├── components/          # Komponen bersama (Navbar, Footer, UI primitives, ScrollToTop)
├── content/             # Sumber data teks & path aset (Single Source of Truth)
│   ├── homepage/        # Data konten beranda
│   ├── village/         # Data profil, geografi, dan sejarah desa
│   ├── governance/      # Data aparatur dan layanan pemerintahan
│   ├── gallery.ts       # Koleksi foto galeri desa
│   └── kkn/             # Data program dan dokumentasi KKN
├── features/            # Modul komponen spesifik per halaman
│   ├── home/            # Komponen halaman Beranda
│   ├── profile/         # Komponen halaman Profil Desa
│   ├── gallery/         # Komponen galeri & lightbox
│   └── kkn/             # Komponen dokumentasi KKN
├── layout/              # Template pembungkus utama (RootLayout)
├── pages/               # Halaman utama aplikasi
└── constants/           # Konstanta rute dan konfigurasi
```

---

## Menjalankan Proyek Secara Lokal

Pastikan Node.js (versi 18+) dan `pnpm` sudah terpasang di komputer Anda:

```bash
# 1. Pasang dependensi
pnpm install

# 2. Jalankan server lokal
pnpm dev

# 3. Build untuk produksi
pnpm run build

# 4. Preview hasil build
pnpm run preview
```

---

## Integritas Data & Catatan Konten

Seluruh data sejarah, kependudukan, batas wilayah, struktur aparatur, dan dokumentasi KKN dalam repositori ini bersumber dari dokumen resmi desa serta arsip kegiatan mahasiswa KKN Tematik 2026 di Desa Air Putih.
