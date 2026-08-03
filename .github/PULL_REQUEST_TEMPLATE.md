## Deskripsi Perubahan
<!-- Jelaskan apa yang diubah pada Pull Request ini dan mengapa. -->

## Checklist Pra-Deployment
Pastikan Anda telah memeriksa setiap langkah di bawah ini sebelum me-merge PR atau melakukan deploy ke produksi.

- [ ] Menjalankan linter untuk menjaga konsistensi kode:
      `pnpm lint`
- [ ] Memastikan tidak ada error TypeScript:
      `pnpm tsc --noEmit`
- [ ] Memastikan build berjalan lancar dan aset berhasil dihasilkan:
      `pnpm build`
- [ ] Perubahan sudah di-commit dengan semantic commit yang jelas (bukan commit gabungan raksasa).
- [ ] Perubahan telah di-push secara penuh ke repositori remote (GitHub).
- [ ] Setelah di-merge, deployment ke produksi (Netlify) berhasil diverifikasi dan tidak menampilkan versi lama atau error.
