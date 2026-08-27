# Panduan Pembaruan Konten (Content Update Guide)

Panduan ini ditujukan bagi pengembang (developer) atau staf administrasi desa yang memiliki sedikit pemahaman teknis untuk memperbarui teks, angka, dan data di dalam website.

## Arsitektur Data

Website ini memisahkan antara **Data (Konten)** dan **Tampilan (UI)**. 
Semua data teks (sejarah, demografi, nama perangkat desa, dll) disimpan di dalam folder:
`src/content/`

Anda **tidak perlu** mengedit file di dalam `src/features/` atau `src/pages/` jika hanya ingin mengubah teks.

## Struktur Folder `src/content/`

- `village/`: Berisi data profil desa (sejarah, demografi, visi misi).
- `kkn/`: Berisi data dokumentasi KKN.
- `gallery/`: Berisi daftar foto yang dirender di halaman Galeri.

## Cara Mengubah Data

1.  Buka file terkait di dalam folder `src/content/` menggunakan *code editor* (seperti VS Code).
2.  Cari bagian teks atau angka yang ingin diubah.
3.  Ubah nilai yang berada di dalam tanda kutip (`"..."` atau `'...'`).
    *   *Contoh:* Mengubah jumlah penduduk dari `"4.185 jiwa"` menjadi `"4.200 jiwa"`.
4.  Simpan file. Website akan otomatis diperbarui.

## Daftar File Konten Utama

### 1. Profil Desa (`src/content/village/`)

*   **`demographics.ts`**: Mengatur data batas wilayah, letak geografis, titik koordinat, luas wilayah, iklim, orbitasi (jarak), dan total populasi.
*   **`history.ts`**: Mengatur teks sejarah desa (awal mula, masa transisi, perkembangan) dan daftar urutan Kepala Desa dari masa ke masa.
*   **`socialEconomy.ts`**: Mengatur data statistik yang sangat detail meliputi:
    *   Pendidikan (jumlah siswa, lembaga pendidikan)
    *   Kesehatan (maternal, imunisasi, gizi balita)
    *   Keagamaan (tempat ibadah, jumlah pemeluk)
    *   Pertanian & Perikanan (luas lahan)
    *   Pekerjaan & Peternakan (jumlah populasi ternak, mata pencaharian utama)
    *   Air Bersih & Pembagian Wilayah Dusun
*   **`visionMission.ts`**: Mengatur pernyataan Visi dan daftar Misi desa.

### 2. Kegiatan KKN (`src/content/kkn/`)

*   **`documentation.ts`**: Mengatur teks *hero* (judul utama), paragraf "Tentang KKN", dan kutipan "Jejak Kegiatan". File ini juga mengatur path gambar yang digunakan di halaman KKN.

### 3. Galeri (`src/content/gallery/`)

*   **`assetManifest.ts`**: Mengatur daftar foto yang *muncul* di halaman Galeri.
    *   Untuk menambah foto ke Galeri: Tambahkan objek baru ke dalam *array* `photos` dengan properti `src`, `alt`, dan `orientation: "landscape"`.
    *   Untuk menghapus foto dari Galeri: Hapus objek dari *array* `photos`.
    *   *Catatan:* Halaman Galeri dikonfigurasi untuk hanya merender foto dengan orientasi `landscape`.

## Mengubah Data Pemerintahan

Saat ini, data jam operasional dan layanan utama pemerintahan berada langsung di dalam file `src/pages/PemerintahanPage.tsx` di bagian atas file sebagai konstanta (`operationalHours` dan `mainServices`). Anda dapat mengubahnya langsung di file tersebut.

## Aturan Penting

*   **Hati-hati dengan tanda baca**: Pastikan tanda koma `,` di akhir baris dan tanda kutip `"` tidak terhapus.
*   **Struktur Objek**: Jangan mengubah nama properti (kunci yang ada di sebelah kiri titik dua, contoh: `title:`, `value:`), ubahlah hanya nilainya (teks di sebelah kanan titik dua).
*   Gunakan perintah `pnpm run build` sebelum mengunggah (deploy) untuk memastikan tidak ada *error* sintaksis.
