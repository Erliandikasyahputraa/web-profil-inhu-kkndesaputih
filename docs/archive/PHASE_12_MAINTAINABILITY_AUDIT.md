# PHASE 12: Maintainability Audit

## 1. Identifikasi File dengan Konten Hard-Coded (Profil Desa)
- **`src/features/profile/sections/Scene02Beginning.tsx`**: Mengandung narasi sejarah panjang (1990-1993, asal muasal, nama KUPT) dan susunan 10 periode Kepala Desa secara *hard-coded*.
- **`src/features/profile/sections/Scene03Geografi.tsx`**: Mengandung data numerik demografi (4.185 jiwa), batas wilayah, luas wilayah (1.692 Ha), data topografi, dan jarak orbitasi secara *hard-coded*.
- **`src/features/profile/sections/Scene03People.tsx`**: Mengandung list panjang data Sosial (Pendidikan, Kesehatan, Keagamaan), Ekonomi (Pertanian, Perkebunan, Peternakan, Perikanan, Pekerjaan), Pembagian Dusun, serta susunan Visi & Misi secara *hard-coded*.

## 2. Identifikasi File Konten KKN
- **`src/features/kkn/components/KknHero.tsx`**, **`KknAbout.tsx`**, **`KknJejakKegiatan.tsx`**: Konten deskripsi KKN, quote, judul kegiatan, dan gambar-gambar KKN langsung ditulis (*hard-coded*) ke dalam *tags* JSX.

## 3. Identifikasi File Pemerintahan
- **`src/pages/PemerintahanPage.tsx`**: Deskripsi layanan publik, jam operasional, dan daftar layanan surat-menyurat ditulis secara langsung di JSX. Strukturnya sudah statis namun dapat dipisahkan jika di masa depan jam operasional berubah.

## 4. Identifikasi Manajemen Foto dan Link Eksternal
- **Galeri & Google Drive**: Ditempatkan di `src/content/gallery.ts`. Pendekatan ini sudah sangat baik karena mencakup `FEATURED_GALLERY` (16 foto unggulan) dan `DOCUMENTATION_LINKS` (9 tautan G-Drive) di satu titik.
- **Home**: Ditempatkan di folder `src/content/homepage/` (terbagi ke beberapa file `.ts`). Sangat *maintainable*.
- **Foto Profil & KKN**: Masih di-*hardcode* di dalam prop `image={{ src: '...' }}` atau tag `<img>` di masing-masing file TSX komponen (seperti `Scene01Identity.tsx` atau `KknHero.tsx`). Ini menyulitkan developer/pemilik website jika ingin sekadar mengganti foto.

## 5. Rencana Tindakan (Action Plan)
- **Ekstraksi Data Desa**: Memindahkan narasi Sejarah, list Kepala Desa, Demografi, Geografi, Sosial, Ekonomi, dan Visi Misi dari file JSX `Scene0X...` ke folder `src/content/village/`.
- **Ekstraksi KKN**: Memindahkan teks dan path foto KKN ke `src/content/kkn/documentation.ts`.
- **Pembuatan Panduan**: Menulis `PHOTO_REPLACEMENT_GUIDE.md` dan `CONTENT_UPDATE_GUIDE.md`.
- **Update README.md**: Membersihkan dokumentasi root agar terkesan sebagai repositori profesional tanpa embel-embel "AI-generated".
