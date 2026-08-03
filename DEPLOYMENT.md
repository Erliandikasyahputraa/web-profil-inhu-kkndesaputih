# Deployment Guide

Dokumen ini berisi panduan alur kerja untuk mengembangkan, melakukan commit, dan merilis versi terbaru ke server produksi (Netlify).

## Alur Kerja Pengembangan (Development Workflow)

1. Lakukan pengembangan dan uji coba fitur secara lokal:
   ```bash
   pnpm dev
   ```
2. Pastikan tidak ada pesan error di terminal.
3. Selalu periksa apakah ada `console.log` yang tertinggal atau file yang tidak digunakan.

## Alur Kerja Produksi (Production Workflow)

Langkah terpenting agar versi produksi selalu *up-to-date* adalah **Push ke GitHub**. Netlify hanya mendeteksi perubahan dari repositori GitHub jarak jauh, bukan dari komputer lokal Anda.

Alur lengkapnya:
1. `git status` (Untuk mengecek file apa saja yang diubah)
2. `git add .` (Memasukkan file ke area staging)
3. `git commit -m "jenis_perubahan: penjelasan singkat"` (Merekam perubahan)
4. `git push origin main` (Mengirim perubahan ke GitHub, yang memicu Netlify)

### Aturan Semantic Commits
**Mulai sekarang, hindari commit raksasa ("85 files changed").** Lakukan commit secara teratur, modular, dan jelas menggunakan format semantic commit:
- `feat(profile): redesign documentary composition`
- `feat(geography): immersive editorial layout`
- `feat(governance): archive-style presentation`
- `feat(gallery): museum grid experience`
- `style(navbar): compact documentary navigation`
- `style(footer): cinematic ending scene`
- `fix(mobile): reduce image height on profile`
- `docs: update deployment guide`

## Konfigurasi Netlify (Netlify Deployment)

- **Build command**: `pnpm build`
- **Publish directory**: `dist`
- **Node version**: Sesuai dengan lingkungan lokal (>= 18)
- **Package Manager**: pnpm

## Kesalahan Umum (Common Mistakes)

1. **Lupa git push**: Perubahan sudah di-commit secara lokal, tetapi lupa di-push ke GitHub. Ini membuat Netlify masih menggunakan versi lama.
2. **Lupa install dependensi baru**: Menambahkan library tetapi lupa menjalankan `pnpm install`, sehingga gagal saat build di Netlify.
3. **Commit terlalu besar**: Membuat sangat banyak fitur tanpa commit, yang menyulitkan pencarian akar masalah jika terjadi *error*.

## Cache Clearing

Jika Netlify berhasil membangun versi terbaru, tetapi browser Anda masih menampilkan versi lama:
1. Hard Refresh di browser Anda: `Ctrl + Shift + R` (Windows/Linux) atau `Cmd + Shift + R` (Mac).
2. Jika masalah menetap di CDN Netlify, Anda dapat memicu fitur *Clear Cache and Deploy* di dashboard Netlify.

## SPA Redirects (Single Page Application)

Karena aplikasi ini menggunakan React Router, kami telah menyertakan file `public/_redirects` untuk memberi tahu Netlify agar mem-fallback semua rute ke `index.html`:
```text
/*    /index.html   200
```
Tanpa file ini, melakukan *refresh* (F5) pada halaman seperti `/geografi` atau `/profil` akan menghasilkan error 404 (Not Found).
