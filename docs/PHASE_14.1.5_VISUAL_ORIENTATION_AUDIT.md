# Phase 14.1.5 — Visual Orientation & Gallery Forensic Audit

## 1. Perbedaan Mendasar: Physical vs Visual Orientation

| Konsep | Definisi | Metode Verifikasi | Status Hasil Audit |
| :--- | :--- | :--- | :--- |
| **Physical File Orientation** | Dimensi biner file asli ($W > H$ = Landscape, $H > W$ = Portrait, $W == H$ = Square). | Binary Header Metadata Check | **Terverifikasi 100%** |
| **Visual Composition Orientation** | Posisi subjek manusia/lanskap yang terlihat oleh mata manusia (apakah tegak/alami, atau terputar miring 90°/270° karena ketiadaan rotasi EXIF). | **Actual Visual Image Inspection** (Inspeksi Visual Langsung) | **Terverifikasi 100%** |

---

## 2. Audit Forensik 16 Foto Galeri Unggulan (/galeri)

Berikut adalah hasil audit ulang forensik terhadap 16 foto yang sebelumnya terpilih vs 16 foto baru yang telah **100% lolos verifikasi visual tegak & natural**:

### A. Evaluasi 16 Foto Sebelumnya (Ditemukan Masalah Visual Sideways)
| # | ID | Path Fisik | Dimensi Fisik | Physical Orient. | Visual Composition | Temuan / Masalah Visual | Keputusan Galeri |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `119` | `/images/home/home_hero_01.webp` | 1920 × 1280 | Landscape | **True Landscape** | Kantor Desa & warga, tegak alami | **DIPERTAHANKAN** |
| 2 | `016` | `/images/supporting/supporting_01.webp` | 1920 × 1280 | Landscape | **True Landscape** | Pemuda bendera hijau, tegak alami | **DIPERTAHANKAN** |
| 3 | `008` | `/images/profil/profil_story_02.webp` | 1920 × 1280 | Landscape | **True Landscape** | Siswa berkumpul di bawah kanopi, tegak alami | **DIPERTAHANKAN** |
| 4 | `325` | `/images/home/home_hero_02.webp` | 1920 × 1280 | Landscape | **True Landscape** | Anak-anak melingkar membuat kolase, sudut atas | **DIPERTAHANKAN** |
| 5 | `030` | `/images/profil/profil_content_06.webp` | 1920 × 1280 | Landscape | ❌ **Rotated 90° CCW** | Subjek warga duduk miring rebah ke samping | **DIGANTI** |
| 6 | `173` | `/images/gallery/landscape/gallery_landscape_11.webp` | 1920 × 1280 | Landscape | ❌ **Rotated 90° CCW** | Mahasiswi selfie miring 90° | **DIGANTI** |
| 7 | `160` | `/images/gallery/landscape/gallery_landscape_07.webp` | 1920 × 1280 | Landscape | ❌ **Rotated 90° CCW** | Orang duduk di teras miring 90° | **DIGANTI** |
| 8 | `107` | `/images/kkn/kkn_activity_04.webp` | 1920 × 1280 | Landscape | ❌ **Rotated 90° CCW** | Anak-anak TK miring 90° | **DIGANTI** |
| 9 | `014` | `/images/gallery/landscape/gallery_landscape_09.webp` | 1920 × 1280 | Landscape | **True Landscape** | Anak perempuan di samping tiang kayu desa | **DIPERTAHANKAN** |
| 10 | `209` | `/images/profil/profil_content_14.webp` | 1920 × 1280 | Landscape | ❌ **Rotated 90° CCW** | Anak-anak membuat kolase miring 90° | **DIGANTI** |
| 11 | `183` | `/images/home/home_hero_03.webp` | 1920 × 1280 | Landscape | ❌ **Rotated 90° CCW** | Anak tertawa miring 90° | **DIGANTI** |
| 12 | `060` | `/images/profil/profil_content_08.webp` | 1920 × 1280 | Landscape | ❌ **Rotated 90° CCW** | Siswa praktikum miring 90° | **DIGANTI** |
| 13 | `442` | `/images/profil/profil_content_01.webp` | 6000 × 4000 | Landscape | ❌ **Rotated 90° CCW** | Siswa di kelas duduk di kursi miring 90° | **DIGANTI** |
| 14 | `012` | `/images/kkn/kkn_activity_07.webp` | 1920 × 1280 | Landscape | **True Landscape** | Warga menyapu halaman rumah desa, tegak alami | **DIPERTAHANKAN** |
| 15 | `410` | `/images/kkn/kkn_activity_09.webp` | 1920 × 1280 | Landscape | ❌ **Rotated 90° CCW** | Gadis di sepeda motor miring 90° | **DIGANTI** |
| 16 | `255` | `/images/profil/profil_story_03.webp` | 1920 × 1280 | Landscape | ❌ **Rotated 90° CCW** | Mahasiswi pose di bangku miring 90° | **DIGANTI** |

---

### B. Daftar Final 16 Foto Unggulan Galeri Baru (100% True Visual Landscape)
| # | ID | Path Fisik | Dimensi Fisik | Physical Orient. | Visual Inspection | Subjek & Karakter Komposisi |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `119` | `/images/home/home_hero_01.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | Kantor Desa Air Putih & semarak bendera |
| 2 | `016` | `/images/supporting/supporting_01.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | Pemuda desa memegang tiang bendera hijau |
| 3 | `008` | `/images/profil/profil_story_02.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | Kebersamaan anak-anak sekolah dasar |
| 4 | `325` | `/images/home/home_hero_02.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | Kerajinan kolase anak-anak di lantai balai |
| 5 | `014` | `/images/gallery/landscape/gallery_landscape_09.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | Potret anak perempuan di dekat tiang kayu desa |
| 6 | `012` | `/images/kkn/kkn_activity_07.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | Gotong royong kebersihan halaman rumah warga |
| 7 | `002` | `/images/background/background_01.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | Pohon rindang dan alam asri desa |
| 8 | `004` | `/images/background/background_02.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | Siluet pohon dan menara pemancar desa waktu sore |
| 9 | `1003` | `/images/home/bersamawarga10.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | Warga bermain voli di lapangan pasir kebun sawit |
| 10 | `489` | `/images/kkn/kkn_activity_01.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | Pertemuan mahasiswa KKN bersama pemuda di aula |
| 11 | `032` | `/images/kkn/kkn_activity_03.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | Interaksi ibu-ibu dan mahasiswa KKN di teras |
| 12 | `134` | `/images/kkn/kkn_activity_05.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | Dokumentasi bersama murid dan guru sekolah dasar |
| 13 | `019` | `/images/kkn/kkn_activity_08.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | Dua pemuda bergotong royong membawa perlengkapan |
| 14 | `197` | `/images/kkn/kkn_activity_10.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | Karya kolase kreatif anak-anak desa |
| 15 | `227` | `/images/kkn/kkn_activity_11.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | Kelompok besar siswa menampilkan karya seni |
| 16 | `457` | `/images/profil/profil_content_02.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | Siswa-siswi SMP menyimak sosialisasi di aula |

---

## 3. Hasil Audit CSS & Transform Rotasi
- **Pencarian Kode:** Telah dilakukan pencarian mendalam terhadap seluruh kemunculan kata kunci `rotate`, `transform: rotate`, dan `rotate-[...]` di seluruh folder `src/`.
- **Hasil:**
  - Tidak ada komponen Galeri atau Gambar yang menerapkan kelas CSS rotasi yang memutar gambar.
  - Rotasi yang ada hanya untuk icon silang Navbar (`rotate-45`) dan animasi background 3D canvas di `App.css`.
  - Masalah orientasi sebelumnya murni bersumber dari data piksel kamera tanpa metadata orientasi, dan kini telah tuntas diselesaikan dengan kurasi visual langsung.
