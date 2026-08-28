# Manifest Foto & Aset Visual (Photo Manifest)

Dokumen ini memuat rekapitulasi komprehensif aset foto dan visual pada website **Desa Air Putih — Digital Experience**, membedakan secara tegas antara **Physical Asset** (keberadaan file fisik di `public/images/`) dan **Active Render** (apakah aset tersebut secara aktif di-render oleh komponen UI).

> [!NOTE]
> **Prinsip Otoritas Dimensi Fisik**
> Orientasi fisik ditentukan mutlak oleh dimensi biner file asli ($Width$ vs $Height$), bukan nama folder maupun nama file. Folder `/images/gallery/portrait/` berisi file fisik portrait (seri 01, 02, 2000, 2001, 3000, 3001) dan file fisik landscape (seri 5000–5029). Klasifikasi selalu mengikuti ukuran fisik sebenarnya.

---

## 1. Ringkasan Klasifikasi Orientasi Fisik

| Kategori Orientasi Fisik | Jumlah Aset | Definisi Dimensi | Kebijakan Render |
| :--- | :--- | :--- | :--- |
| **Landscape Fisik** | 190 file | $Width > Height$ | Diizinkan di seluruh halaman & Galeri Utama |
| **Portrait Fisik** | 7 file | $Height > Width$ | **Dikecualikan dari Galeri Lanskap** (Diizinkan untuk Avatar Tim KKN & Arsip) |
| **Square Fisik** | 8 file | $Width == Height$ | **Dikecualikan dari Galeri Lanskap** (Arsip Tekstur / Ilustrasi) |
| **Total Seluruh File** | **205 file** | Fisik Terverifikasi | **100% Utuh di Disk (0 file terhapus / berpindah)** |

---

## 2. Pemetaan Aset Aktif per Halaman (Active Render)

### A. Halaman Beranda (`/`)
| Path Fisik | Dimensi Asli | Orientasi Fisik | Physical Asset | Active Render | Role / Section |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/images/home/home_hero_01.webp` | 1920 × 1280 | LANDSCAPE | PRESENT | **YES** | Hero Background Utama |
| `/images/home/home_hero_02.webp` | 1920 × 1280 | LANDSCAPE | PRESENT | **YES** | Narasi Potret Desa |
| `/images/home/home_hero_03.webp` | 1920 × 1280 | LANDSCAPE | PRESENT | **YES** | Suasana Lanskap Desa |
| `/images/home/bersamawarga10.webp` | 1920 × 1280 | LANDSCAPE | PRESENT | **YES** | Potret Kehidupan Warga |

### B. Halaman Profil Desa (`/profil`)
| Path Fisik | Dimensi Asli | Orientasi Fisik | Physical Asset | Active Render | Role / Section |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/images/profil/profil_story_02.webp` | 1920 × 1280 | LANDSCAPE | PRESENT | **YES** | Hero Profil (`Scene01Identity`) |
| `/images/background/background_02.webp` | 1920 × 1280 | LANDSCAPE | PRESENT | **YES** | Sejarah Transmigrasi (`Scene02Beginning`) |
| `/images/profil/peta_administrasi.png` | **8858 × 5906** | **LANDSCAPE** | PRESENT | **YES** | Peta Administrasi Desa (`Scene03Geografi`) |

*Catatan Peta Administrasi:* Ukuran fisik aktual terverifikasi adalah **8858 × 5906 piksel** (31.13 MB, MD5: `4a49a2517675cd7deb4b597b97ea5594`).

### C. Halaman Pemerintahan (`/pemerintahan`)
| Path Fisik | Dimensi Asli | Orientasi Fisik | Physical Asset | Active Render | Role / Section |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/images/pemerintahan/pemerintahan_hero_01.webp` | 1920 × 1280 | LANDSCAPE | PRESENT | **YES** | Hero Pemerintahan |
| `/images/pemerintahan/struktur-perangkat-desa.svg` | Vector | VECTOR | PRESENT | **YES** | Bagan Struktur Organisasi |
| `/images/pemerintahan/struktur-perangkat-desa.webp` | 1920 × 1080 | LANDSCAPE | PRESENT | **YES** | Fallback Bagan Struktur |

### D. Halaman Galeri Unggulan (`/galeri`)
Hanya **16 foto yang telah lolos verifikasi biner dan visual 100% tegak & natural** yang secara aktif dirender:
| ID | Path Fisik | Dimensi Asli | Orientasi Fisik | Visual Orientation | Physical Asset | Active Render |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `119` | `/images/home/home_hero_01.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | PRESENT | **YES** (Featured #1) |
| `016` | `/images/supporting/supporting_01.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | PRESENT | **YES** (Featured #2) |
| `008` | `/images/profil/profil_story_02.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | PRESENT | **YES** (Featured #3) |
| `325` | `/images/home/home_hero_02.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | PRESENT | **YES** (Featured #4) |
| `014` | `/images/gallery/landscape/gallery_landscape_09.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | PRESENT | **YES** (Featured #5) |
| `012` | `/images/kkn/kkn_activity_07.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | PRESENT | **YES** (Featured #6) |
| `002` | `/images/background/background_01.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | PRESENT | **YES** (Featured #7) |
| `004` | `/images/background/background_02.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | PRESENT | **YES** (Featured #8) |
| `1003` | `/images/home/bersamawarga10.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | PRESENT | **YES** (Featured #9) |
| `489` | `/images/kkn/kkn_activity_01.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | PRESENT | **YES** (Featured #10) |
| `032` | `/images/kkn/kkn_activity_03.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | PRESENT | **YES** (Featured #11) |
| `134` | `/images/kkn/kkn_activity_05.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | PRESENT | **YES** (Featured #12) |
| `019` | `/images/kkn/kkn_activity_08.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | PRESENT | **YES** (Featured #13) |
| `197` | `/images/kkn/kkn_activity_10.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | PRESENT | **YES** (Featured #14) |
| `227` | `/images/kkn/kkn_activity_11.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | PRESENT | **YES** (Featured #15) |
| `457` | `/images/profil/profil_content_02.webp` | 1920 × 1280 | LANDSCAPE | **TRUE LANDSCAPE** | PRESENT | **YES** (Featured #16) |

### E. Halaman KKN (`/kkn`)
| Path Fisik | Dimensi Asli | Orientasi Fisik | Visual Orientation | Physical Asset | Active Render | Role / Section |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/images/kkn/kkn_activity_07.webp` | 1920 × 1280 | LANDSCAPE | TRUE LANDSCAPE | PRESENT | **YES** | Hero KKN |
| `/images/kkn/kkn_activity_03.webp` | 1920 × 1280 | LANDSCAPE | TRUE LANDSCAPE | PRESENT | **YES** | About KKN |
| `/images/kkn/kkn_activity_10.webp` | 1920 × 1280 | LANDSCAPE | TRUE LANDSCAPE | PRESENT | **YES** | Jejak Kegiatan (Utama) |
| `/images/kkn/kkn_activity_01.webp` | 1920 × 1280 | LANDSCAPE | TRUE LANDSCAPE | PRESENT | **YES** | Jejak Kegiatan (Grid 1) |
| `/images/kkn/kkn_activity_08.webp` | 1920 × 1280 | LANDSCAPE | TRUE LANDSCAPE | PRESENT | **YES** | Jejak Kegiatan (Grid 2) |
| `/images/kkn/kkn_activity_05.webp` | 1920 × 1280 | LANDSCAPE | TRUE LANDSCAPE | PRESENT | **YES** | Jejak Kegiatan (Grid 3) |
| `/images/kkn/kkn_activity_11.webp` | 1920 × 1280 | LANDSCAPE | TRUE LANDSCAPE | PRESENT | **YES** | Jejak Kegiatan (Grid 4) |
| `/images/kkn/kkn_team_dpl.jpg` | **719 × 1197** | **PORTRAIT** | TRUE PORTRAIT | PRESENT | **YES** | Avatar Tim / DPL |
| `/images/kkn/kkn_team_rufai.jpg` | 6000 × 4000 | LANDSCAPE | AVATAR (CENTER) | PRESENT | **YES** | Avatar Tim / Kordes |
| `/images/kkn/kkn_team_putri.jpg` | 6000 × 4000 | LANDSCAPE | AVATAR (CENTER) | PRESENT | **YES** | Avatar Tim / Sekretaris 1 |
| `/images/kkn/kkn_team_toni.jpg` | 6000 × 4000 | LANDSCAPE | AVATAR (CENTER) | PRESENT | **YES** | Avatar Tim / Sekretaris 2 |
| `/images/kkn/kkn_team_inaayah.jpg` | 6000 × 4000 | LANDSCAPE | AVATAR (CENTER) | PRESENT | **YES** | Avatar Tim / Bendahara |
| `/images/kkn/kkn_team_deffarul.jpg` | 6000 × 4000 | LANDSCAPE | AVATAR (CENTER) | PRESENT | **YES** | Avatar Tim / Humas 1 |
| `/images/kkn/kkn_team_alya.jpg` | 6000 × 4000 | LANDSCAPE | AVATAR (CENTER) | PRESENT | **YES** | Avatar Tim / Humas 2 |
| `/images/kkn/kkn_team_aisyah.jpg` | 6000 × 4000 | LANDSCAPE | PRESENT | **YES** | Avatar Tim / Perlengkapan |
| `/images/kkn/kkn_team_marsya.jpg` | 6000 × 4000 | LANDSCAPE | PRESENT | **YES** | Avatar Tim / Medkom 1 |
| `/images/kkn/kkn_team_silvi.jpg` | 6000 × 4000 | LANDSCAPE | PRESENT | **YES** | Avatar Tim / Medkom 2 |
| `/images/kkn/kkn_team_elsa.jpg` | 6000 × 4000 | LANDSCAPE | PRESENT | **YES** | Avatar Tim / Medkom 3 |

---

## 3. Aset Non-Landscape yang Berstatus Unrendered (Arsip)
- **Portrait:** `/images/gallery/portrait/gallery_new_portrait_01.webp` s.d. `02.webp`, `2000.webp` s.d. `2001.webp`, `3000.webp` s.d. `3001.webp` (`Physical Asset: PRESENT`, `Active Render: NO`).
- **Square:** `/images/illustrations/*.webp` (`Physical Asset: PRESENT`, `Active Render: NO`).
- Seluruh aset non-render tetap tersimpan aman di disk tanpa dihapus atau diubah namanya.
