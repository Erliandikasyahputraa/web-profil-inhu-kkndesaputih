# Desa Air Putih — Digital Experience

## 1. Project Overview

Digital Experience Desa Air Putih adalah website dokumenter digital yang didedikasikan untuk Desa Air Putih, Kecamatan Lubuk Batu Jaya, Kabupaten Indragiri Hulu, Riau. 

Tujuan utama proyek ini adalah:
- Memperkenalkan identitas Desa Air Putih
- Mendokumentasikan sejarah dan kehidupan desa
- Menyajikan informasi pemerintahan
- Menyediakan dokumentasi fotografi desa
- Mendokumentasikan kegiatan KKN UIN Suska Riau tahun 2026

## 2. Design Direction

Situs ini dibangun dengan prinsip desain **Minimal Editorial Documentary**. 

Karakter visual utama meliputi:
- Pendekatan editorial dan dokumenter
- Desain yang mengutamakan fotografi (*photography-led*)
- Penggunaan warna latar *warm off-white*
- Tipografi yang tenang dan tertahan (*restrained typography*)
- Antarmuka pengguna (UI) yang minimalis
- Alur vertikal yang natural
- Mengutamakan perangkat seluler (*responsive/mobile-first*)
- Animasi subtil (*subtle motion*)
- Penekanan pada fotografi desa yang nyata

Desain ini dengan sengaja menghindari elemen antarmuka yang menyerupai *dashboard*, kartu berlebihan, *glassmorphism*, bayangan berlebihan, animasi kompleks, serta elemen pendukung yang mengganggu pengalaman tenang.

## 3. Pages / Routes

Halaman yang tersedia di situs ini:

- **`/` (Home / Beranda)**: Landing page utama yang memperkenalkan Desa Air Putih melalui narasi, sejarah, kehidupan desa, dan potensi lokal.
- **`/profil` (Profil Desa)**: Informasi mendalam mengenai identitas desa, sejarah, geografi, lingkungan, dan potensi desa.
- **`/pemerintahan` (Pemerintahan)**: Informasi mengenai struktur pemerintahan dan jajaran perangkat Desa Air Putih.
- **`/galeri` (Galeri)**: Dokumentasi fotografi desa yang dikurasi dan dipisahkan secara artistik berdasarkan orientasi *landscape* dan *portrait*.
- **`/kkn` (KKN 2026)**: Dokumentasi program Kuliah Kerja Nyata UIN Sultan Syarif Kasim Riau tahun 2026.

## 4. KKN 2026

**KULIAH KERJA NYATA · 2026**  
**Desa Air Putih**  
*Mengabdi Dengan Hati, Menginspirasi Dengan Aksi*

- **Periode**: Juli s.d. Agustus 2026
- **Lokasi**: Desa Air Putih, Kecamatan Lubuk Batu Jaya, Kabupaten Indragiri Hulu, Provinsi Riau

Tiga program kerja inti:
1. Web Desa
2. Packaging Jamur Tiram
3. Sosialisasi & Edukasi

## 5. Tech Stack

Proyek ini menggunakan teknologi berikut:
- **React**: Pustaka utama untuk membangun antarmuka pengguna
- **TypeScript**: Bahasa pemrograman dengan keamanan tipe data statis
- **Vite**: *Build tool* dan peladen pengembangan (*dev server*) yang cepat
- **Tailwind CSS**: *Framework* utilitas CSS untuk tata letak dan desain responsif
- **Framer Motion**: Pustaka untuk mengelola animasi dan transisi UI yang subtil
- **pnpm**: Manajer paket utama

## 6. Project Structure

```text
src/
├── components/   # Komponen UI yang dapat digunakan kembali (tombol, layout wrappers)
├── constants/    # Konstanta aplikasi (seperti daftar rute)
├── content/      # Konfigurasi data statis (data galeri, teks berulang, manifest)
├── features/     # Modul per halaman yang merangkum komponen spesifik fitur
├── layout/       # Komponen tata letak utama (Navbar, Footer, RootLayout)
├── pages/        # Komponen entry-point React untuk setiap rute halaman
├── styles/       # Pengaturan gaya global dan token Tailwind
└── main.tsx      # Titik masuk utama aplikasi React

public/
└── images/       # Folder root untuk semua aset statis foto dan grafis

docs/             # Dokumentasi arsitektur, laporan audit, dan rujukan aset
tools/            # Skrip pengembangan historis dan utilitas proyek (archive)
```

## 7. Page Architecture

Pemetaan *route* ke *React Component* utama:

- **Home (`/`)**
  → `HomePage`
  → `HomeComposition`
  → `Hero`, `IdentitasDesa`, `HistorySection`, `KehidupanDesaSection`, `Potentials`, `Transparency`, `CTA`

- **Profil (`/profil`)**
  → `ProfilePage`
  → `ProfileComposition`
  → `Scene01Identity`, `Scene02Beginning`, `Scene03Geografi`, `Scene03People`

- **Pemerintahan (`/pemerintahan`)**
  → `PemerintahanPage`

- **Galeri (`/galeri`)**
  → `GalleryPage`
  → `GalleryComposition`
  → `gallery.ts` (Data)

- **KKN (`/kkn`)**
  → `KknPage`
  → `KknHero`, `KknAbout`, `KknPrograms`, `KknJejakKegiatan`, `KknTeam`, `KknClosing`

## 8. Image / Asset Management

Aset fotografi di dalam repositori telah diatur dengan *semantic filenames* agar mudah dikelola dan dilacak kegunaannya (contoh: `home_hero_01.jpg`, `profil_story_03.jpg`, `kkn_activity_07.jpg`).

Lokasi folder foto:
- `public/images/home/`
- `public/images/profil/`
- `public/images/pemerintahan/`
- `public/images/kkn/`
- `public/images/gallery/landscape/`
- `public/images/background/`
- `public/images/illustrations/`

## 9. Photo Manifest

Referensi terpenting untuk pemetaan penggunaan setiap gambar berada pada `docs/PHOTO_MANIFEST.md`. 
Setiap aset dicatat secara detail, mencakup path, tipe orientasi, *usage count*, dan komponen spesifik tempat aset tersebut dirender.

### Mengganti isi foto tanpa mengubah referensi
Jika Anda ingin mengganti suatu foto (contohnya `kkn_activity_07.jpg`) sambil mempertahankan penggunaan di berbagai tempat sekaligus:
1. Pastikan foto baru memiliki *filename* dan resolusi/orientasi yang serupa.
2. Timpa (*replace*) foto lama dengan file foto baru pada direktori yang sama.
3. Jalankan build.
4. Periksa dampak perubahan pada *route* yang terdaftar di `PHOTO_MANIFEST.md`.

### Mengganti foto hanya pada satu section
Jika suatu foto *(multi-use)* hanya ingin diubah untuk satu bagian khusus:
1. Masukkan foto baru ke dalam direktori `/images/...` dengan nama baru.
2. Jangan hapus aset yang sudah ada.
3. Ganti nama *file* (*reference string*) langsung di komponen atau *source file* yang dituju (lihat rujukan source pada `PHOTO_MANIFEST.md`).
4. Jalankan build dan periksa kembali tampilannya.

## 10. Local Development

Untuk menjalankan proyek secara lokal:

1. Pastikan Node.js (>= 18) dan pnpm terinstal.
2. Kloning repositori.
3. Jalankan instalasi dependensi:
```bash
pnpm install
```
4. Jalankan *development server*:
```bash
pnpm dev
```

## 11. Production Build & Deployment

Untuk menguji kompilasi *production* lokal:
```bash
pnpm build
```
Pastikan `pnpm build` menghasilkan 0 error TypeScript sebelum melakukan peluncuran. 

**Deployment**:  
Proyek ini di-deploy via integrasi otomatis (contoh: Netlify/Vercel) dengan perintah build `pnpm build` dan direktori publik `dist`. *Deployment* akan aktif ketika ada dorongan (*push*) baru ke cabang repositori utama (`main`).

## 12. Aturan Repositori
- Jangan mengunggah sembarang *file* tambahan yang tidak digunakan. 
- Folder seperti `scratch/`, `node_modules/`, dan `dist/` wajib diabaikan.
- Hindari penambahan library atau perubahan gaya jika itu bertentangan dengan prinsip desain awal (Editorial Documentary).
