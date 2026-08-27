# Panduan Penggantian Foto (Photo Replacement Guide)

Panduan ini ditujukan bagi pengelola website Desa Air Putih untuk mengganti foto-foto yang ada di website dengan foto baru, **tanpa merusak desain atau kode**.

## Prinsip Dasar

Desain website ini mengandalkan pendekatan visual "Minimal Editorial Documentary". Oleh karena itu, penggantian foto tidak boleh dilakukan sembarangan agar estetika website tetap terjaga.

**ATURAN EMAS:**
Jangan mengubah nama file di dalam kode. Ganti foto secara **fisik** (timpa file lama dengan file baru yang bernama persis sama).

## Langkah-Langkah Mengganti Foto

1.  **Siapkan Foto Baru**:
    *   Pastikan foto baru berkualitas tinggi (jelas, tidak buram, pencahayaan baik).
    *   Pastikan rasio dan orientasi foto baru sama dengan foto lama.
        *   Jika foto lama adalah *landscape* (mendatar), gunakan foto *landscape*.
        *   Jika foto lama adalah *portrait* (meninggi), gunakan foto *portrait*.
    *   Kompres ukuran file foto (disarankan di bawah 500KB per foto) menggunakan alat seperti [TinyPNG](https://tinypng.com/) atau WebP converter agar website tetap cepat dimuat.
    *   Format yang sangat disarankan adalah **.webp**. Jika menggunakan .jpg atau .png, Anda harus mengonversinya ke .webp atau Anda harus mengubah ekstensi di dalam file konfigurasi (tidak disarankan).

2.  **Temukan Foto Lama**:
    *   Buka folder `public/images/`. Di dalamnya terdapat folder-folder kategori seperti `beranda/`, `profil/`, `galeri/`, `kkn/`, dll.
    *   Cari file foto fisik yang ingin Anda ganti. Anda dapat merujuk ke [PHOTO_MANIFEST.md](./PHOTO_MANIFEST.md) untuk melihat daftar lengkap foto dan lokasinya.

3.  **Timpa Foto Lama (Replace)**:
    *   Ubah nama file foto baru Anda agar **persis sama** dengan nama file foto lama yang ingin diganti (termasuk ekstensinya, misalnya `beranda_hero_01.webp`).
    *   Pindahkan/salin foto baru tersebut ke dalam folder yang tepat di `public/images/`.
    *   Sistem komputer Anda akan bertanya apakah Anda ingin menimpa (replace) file yang sudah ada. Pilih **Ya (Yes / Replace)**.

4.  **Selesai**:
    *   Foto di website akan otomatis berubah menyesuaikan file baru tersebut.
    *   Anda tidak perlu mengubah kode apapun.

## Panduan Khusus Halaman Galeri

Halaman galeri dikonfigurasi untuk hanya menampilkan foto **landscape** pilihan (berjumlah belasan foto) agar terlihat elegan dan tidak membebani memori.

Jika Anda ingin mengganti foto yang tampil di galeri:
1.  Ganti file fisik di folder `public/images/galeri/` menggunakan metode timpa (langkah 3 di atas).
2.  Jika Anda ingin menambah atau mengurangi jumlah foto yang *tampil* (bukan jumlah file fisik), Anda harus mengedit file `src/content/gallery/assetManifest.ts`. Lihat [CONTENT_UPDATE_GUIDE.md](./CONTENT_UPDATE_GUIDE.md) untuk detailnya.
