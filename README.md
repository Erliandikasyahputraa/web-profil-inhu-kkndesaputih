# Desa Air Putih

Website ini dibuat sebagai pintu digital untuk Desa Air Putih — bukan sekadar tempat menaruh profil desa, tapi ruang kecil untuk memperkenalkan wilayah, pemerintahan, masyarakat, dan cerita yang ada di dalamnya.

Terletak di Kecamatan Lubuk Batu Jaya, Kabupaten Indragiri Hulu, Riau, Desa Air Putih punya ritme hidup yang tenang di antara hamparan kebun kelapa sawit, kehangatan warga di empat dusun, dan semangat gotong royong yang terus dijaga. Website ini dibangun untuk merangkum semua itu ke dalam sebuah pengalaman web yang nyaman diakses, rapi di mata, dan tetap ringan di perangkat apa pun.

---

## Apa Saja yang Ada di Dalamnya?

Website ini dirancang ke dalam 5 bagian utama yang saling melengkapi:

1. **Beranda (`/`)**  
   Pintu masuk utama. Berisi rangkuman cepat tentang desa: sambutan pembuka, statistik pokok wilayah (luas 1.692 Ha, 4.185 jiwa, 1.260 KK, 4 dusun, 20 RT / 8 RW), akses cepat ke layanan, serta potret pembuka kehidupan desa.

2. **Profil Desa (`/profil`)**  
   Mengenal identitas dan perjalanan desa lebih dekat. Mulai dari sejarah pemekaran desa sejak era transmigrasi 1993, peta kartografi resmi, data demografi 4 dusun (Dusun I, II, III, IV), fasilitas pendidikan (3 TK, 2 SD, 1 SMP, 1 SMA, 1 Pondok Pesantren), hingga potensi utama seperti perkebunan sawit dan sentra budidaya jamur tiram warga.

3. **Pemerintahan (`/pemerintahan`)**  
   Pusat informasi tata kelola dan transparansi. Menyajikan bagan struktur organisasi perangkat desa interaktif, riwayat kepemimpinan 10 Kepala Desa dari masa ke masa, panduan layanan administrasi warga (KTP/KK, SKU, SKTM, akta kelahiran/kematian, dll), jam operasional kantor desa (Senin–Jumat 08.00–16.00 WIB), serta kontak layanan langsung melalui WhatsApp.

4. **Galeri Dokumentasi (`/galeri`)**  
   Dinding arsip visual berformat *editorial photo wall*. Berisi 32 foto kurasi yang merekam momen kebersamaan, gotong royong, turnamen olahraga warga, dan lanskap asri pedesaan, lengkap dengan penampil detail interaktif (*lightbox*).

5. **KKN Tematik 2026 (`/kkn`)**  
   Ruang dokumentasi pengabdian mahasiswa Kuliah Kerja Nyata (KKN) Tematik 2026 UIN Sultan Syarif Kasim Riau di Desa Air Putih. Mencakup laporan program kerja digitalisasi desa, edukasi masyarakat, profil tim mahasiswa, dan akses dokumen arsip.

---

## Pendekatan Desain & Visual

Sejak awal, website ini sengaja tidak menggunakan gaya website pemerintahan yang kaku atau generik. Kami memilih pendekatan **editorial documentary**:

- **Palet Warna Alami**: Perpaduan latar *warm ivory* (`#FAF8F5`), hijau hutan teduh (`#234A31`), dan aksen terakota lembut yang terinspirasi dari alam pedesaan.
- **Tipografi Seimbang**: Kombinasi font serif klasik (*Outfit / Serif*) untuk tajuk utama agar terasa berkarakter dan hangat, disandingkan dengan sans-serif modern (*Inter*) untuk kenyamanan membaca teks panjang.
- **Visual yang Bernapas**: Foto-foto autentik ditempatkan secara proporsional dengan aspek rasio natural (3:2 dan 16:9), tanpa cropping berlebihan pada foto penting seperti stiker produk atau bagan struktur.

---

## Performa & Optimasi Mobile

Sebagian besar warga dan pengunjung mengakses website lewat ponsel cerdas dengan koneksi seluler. Oleh karena itu, performa menjadi perhatian utama:

- **Format Modern WebP**: Seluruh foto mentah berukuran besar dikonversi ke WebP dengan kompresi terukur dan varian responsif (`srcset` untuk layar ponsel dan desktop).
- **Pemuatan Bertahap (*Lazy Loading*)**: Gambar di luar layar pertama dimuat hanya saat pengguna menggulir mendekatinya, menjaga beban awal jaringan tetap sangat hemat.
- **Scroll Restoration Pintar**: Berpindah halaman via tautan internal atau navbar otomatis mengembalikan posisi baca ke paling atas (*top of page*), sementara tautan jangkar (*hash link*) tetap menggulir mulus ke target.
- **Desain Adaptif**: Telah diuji dari layar ponsel ultra-ringkas (320px) hingga layar monitor lebar (1920px) bebas dari kendala *horizontal overflow*.

---

## Domain & SEO

- **Domain Utama (Resmi)**: [https://desaairputih.my.id](https://desaairputih.my.id)
- **Domain Hosting**: [https://kkn-desa-airputih.netlify.app](https://kkn-desa-airputih.netlify.app) *(terkonfigurasi 301 Permanent Redirect ke domain utama)*
- **SEO & Entity**: Dioptimalkan secara semantik untuk mesin pencari (Google, Bing, dan AI Answer Engines) dengan metadata canonical, sitemap XML, robots.txt, Open Graph, Twitter Cards, dan structured data JSON-LD (`GovernmentOrganization`, `WebSite`, `WebPage`, `BreadcrumbList`).

---

## Teknologi yang Digunakan

- **React 19** & **TypeScript** — Struktur komponen deklaratif dan *type-safety*.
- **Vite** — Build tool ultra-cepat untuk pengembangan dan produksi.
- **React Router DOM v7** — Navigasi SPA dengan pemuatan halaman modular (*lazy-loaded chunks*).
- **Tailwind CSS v4** — Utility-first styling dan token desain yang konsisten.
- **Lucide React** — Set ikon antarmuka yang bersih dan modern.
- **React Helmet Async** — Pengelolaan metadata `<head>` dinamis per rute.

---

## Menjalankan Proyek Secara Lokal

Pastikan Anda telah memasang **Node.js** (v18+) dan **pnpm**:

```bash
# 1. Pasang dependensi
pnpm install

# 2. Jalankan server pengembangan lokal
pnpm dev

# 3. Build bundel produksi
pnpm run build

# 4. Preview hasil build produksi
pnpm run preview
```

---

## Catatan & Integritas Data

Semua data statistik kependudukan, pembagian wilayah, aparatur desa, dan dokumentasi KKN dalam repositori ini bersumber dari dokumen resmi Pemerintah Desa Air Putih serta arsip pengabdian mahasiswa KKN Tematik 2026 UIN Suska Riau.
