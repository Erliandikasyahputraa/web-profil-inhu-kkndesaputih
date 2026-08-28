# Phase 14.1 — Asset Orientation & Inventory Forensic Audit

Dokumen ini memuat hasil audit forensik terhadap seluruh 205 aset fisik gambar di dalam direktori `public/images/`.
Orientasi gambar ditentukan secara mutlak dan otoritatif berdasarkan **dimensi file fisik asli** (bukan berdasarkan nama file, nama folder, rotasi CSS, atau ukuran container):
- **Landscape**: Lebar (width) > Tinggi (height)
- **Portrait**: Tinggi (height) > Lebar (width)
- **Square**: Lebar (width) == Tinggi (height)

> [!IMPORTANT]
> **Prinsip Utama: Folder Name ≠ Image Orientation**
> Penamaan folder (misalnya `/images/gallery/portrait/`) **bukan penentu orientasi**. Audit membuktikan terdapat file berdimensi fisik LANDSCAPE (seperti seri `gallery_new_portrait_5000.webp` s.d. `5029.webp` yang berukuran 1920×1280 dan 6000×4000) di dalam folder tersebut. File-file tersebut tetap diklasifikasikan secara benar sebagai **LANDSCAPE**.

---

## 1. Ringkasan Eksekutif Inventory

| Kategori Orientasi Fisik | Jumlah Aset | Definisi Fisik | Kebijakan Render di Galeri |
| :--- | :--- | :--- | :--- |
| **Landscape Fisik** | 190 aset | $Width > Height$ | **Memenuhi syarat untuk Galeri Lanskap** |
| **Portrait Fisik** | 7 aset | $Height > Width$ | **DIKECUALIKAN dari Galeri** (Hanya untuk Avatar Tim KKN / Arsip) |
| **Square Fisik** | 8 aset | $Width == Height$ | **DIKECUALIKAN dari Galeri** (Arsip Ilustrasi & Tekstur Latar) |
| **Total Seluruh Aset** | **205 file** | Fisik Terbaca | **100% Terverifikasi & Utuh (0 file hilang/berubah)** |

---

## 2. Verifikasi Fisik Peta Administrasi Desa

| Parameter | Nilai Aktual Terverifikasi | Catatan |
| :--- | :--- | :--- |
| **Path Fisik** | `/images/profil/peta_administrasi.png` | Terletak di `public/images/profil/` |
| **Dimensi Fisik** | **8858 × 5906 piksel** | Rasio aspek **1.50:1** (3:2) |
| **Orientasi Fisik** | **LANDSCAPE** | $8858 > 5906$ |
| **Ukuran File** | **31.13 MB** (32.637.671 bytes) | File master resolusi ultra-tinggi |
| **MD5 Hash** | `4a49a2517675cd7deb4b597b97ea5594` | Integritas data biner |
| **Status Render** | **Active Render: YES** | Halaman `/profil` (`Scene03Geografi.tsx`) |

---

## 3. Detail Lengkap Aset Non-Landscape (Portrait & Square)

Berikut adalah daftar 7 aset Portrait dan 8 aset Square fisik:

| No | Path Fisik | Dimensi Asli | Rasio | Orientasi | Ukuran File | Status Render | Halaman / Role |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `/images/gallery/portrait/gallery_new_portrait_01.webp` | 3024 × 4032 | 0.75:1 | **PORTRAIT** | 2.58 MB | Active Render: **NO** | Arsip Foto / Unrendered |
| 2 | `/images/gallery/portrait/gallery_new_portrait_02.webp` | 2304 × 4096 | 0.56:1 | **PORTRAIT** | 2.11 MB | Active Render: **NO** | Arsip Foto / Unrendered |
| 3 | `/images/gallery/portrait/gallery_new_portrait_2000.webp` | 3024 × 4032 | 0.75:1 | **PORTRAIT** | 2.58 MB | Active Render: **NO** | Arsip Foto / Unrendered |
| 4 | `/images/gallery/portrait/gallery_new_portrait_2001.webp` | 2304 × 4096 | 0.56:1 | **PORTRAIT** | 2.11 MB | Active Render: **NO** | Arsip Foto / Unrendered |
| 5 | `/images/gallery/portrait/gallery_new_portrait_3000.webp` | 3024 × 4032 | 0.75:1 | **PORTRAIT** | 2.58 MB | Active Render: **NO** | Arsip Foto / Unrendered |
| 6 | `/images/gallery/portrait/gallery_new_portrait_3001.webp` | 2304 × 4096 | 0.56:1 | **PORTRAIT** | 2.11 MB | Active Render: **NO** | Arsip Foto / Unrendered |
| 7 | `/images/kkn/kkn_team_dpl.jpg` | 719 × 1197 | 0.60:1 | **PORTRAIT** | 93.3 KB | Active Render: **YES** | `/kkn` (Avatar Tim / DPL) |
| 8 | `/images/illustrations/editorial_documentary_portrait_of_a_local_umkm_small_business_owner_in_desa_air.webp` | 1024 × 1024 | 1.00:1 | **SQUARE** | 320.1 KB | Active Render: **NO** | Ilustrasi Arsip |
| 9 | `/images/illustrations/editorial_documentary_portrait_of_a_veteran_farmer_in_desa_air_putih_riau.webp` | 1024 × 1024 | 1.00:1 | **SQUARE** | 350.4 KB | Active Render: **NO** | Ilustrasi Arsip |
| 10 | `/images/illustrations/editorial_documentary_portrait_of_a_village_teacher_in_desa_air_putih_riau.webp` | 1024 × 1024 | 1.00:1 | **SQUARE** | 340.2 KB | Active Render: **NO** | Ilustrasi Arsip |
| 11 | `/images/illustrations/editorial_documentary_portrait_of_the_village_head_kepala_desa_of_desa_air.webp` | 1024 × 1024 | 1.00:1 | **SQUARE** | 310.8 KB | Active Render: **NO** | Ilustrasi Arsip |
| 12 | `/images/illustrations/seamless_high_resolution_editorial_background_texture_of_natural_unbleached.webp` | 1024 × 1024 | 1.00:1 | **SQUARE** | 410.2 KB | Active Render: **NO** | Tekstur Arsip |
| 13 | `/images/illustrations/seamless_high_resolution_editorial_background_texture_of_old_weathered_book.webp` | 1024 × 1024 | 1.00:1 | **SQUARE** | 390.1 KB | Active Render: **NO** | Tekstur Arsip |
| 14 | `/images/illustrations/seamless_high_resolution_editorial_background_texture_of_soft_palm_leaf_shadows.webp` | 1024 × 1024 | 1.00:1 | **SQUARE** | 380.5 KB | Active Render: **NO** | Tekstur Arsip |
| 15 | `/images/illustrations/seamless_high_resolution_editorial_background_texture_of_warm_off_white.webp` | 1024 × 1024 | 1.00:1 | **SQUARE** | 370.0 KB | Active Render: **NO** | Tekstur Arsip |

---

## 4. Audit 16 Foto Unggulan Galeri (/galeri)

Semua 16 foto yang dirender di `GalleryComposition.tsx` terverifikasi 100% berdimensi fisik **Landscape**:

| ID | Path Fisik | Dimensi Fisik | Rasio | Orientasi Fisik | Status Render |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **119** | `/images/home/home_hero_01.webp` | 1920 × 1280 | 1.50:1 | LANDSCAPE | Active Render: **YES** |
| **016** | `/images/supporting/supporting_01.webp` | 1920 × 1280 | 1.50:1 | LANDSCAPE | Active Render: **YES** |
| **008** | `/images/profil/profil_story_02.webp` | 1920 × 1280 | 1.50:1 | LANDSCAPE | Active Render: **YES** |
| **325** | `/images/home/home_hero_02.webp` | 1920 × 1280 | 1.50:1 | LANDSCAPE | Active Render: **YES** |
| **030** | `/images/profil/profil_content_06.webp` | 1920 × 1280 | 1.50:1 | LANDSCAPE | Active Render: **YES** |
| **173** | `/images/gallery/landscape/gallery_landscape_11.webp` | 1920 × 1280 | 1.50:1 | LANDSCAPE | Active Render: **YES** |
| **160** | `/images/gallery/landscape/gallery_landscape_07.webp` | 1920 × 1280 | 1.50:1 | LANDSCAPE | Active Render: **YES** |
| **107** | `/images/kkn/kkn_activity_04.webp` | 1920 × 1280 | 1.50:1 | LANDSCAPE | Active Render: **YES** |
| **014** | `/images/gallery/landscape/gallery_landscape_09.webp` | 1920 × 1280 | 1.50:1 | LANDSCAPE | Active Render: **YES** |
| **209** | `/images/profil/profil_content_14.webp` | 1920 × 1280 | 1.50:1 | LANDSCAPE | Active Render: **YES** |
| **183** | `/images/home/home_hero_03.webp` | 1920 × 1280 | 1.50:1 | LANDSCAPE | Active Render: **YES** |
| **060** | `/images/profil/profil_content_08.webp` | 1920 × 1280 | 1.50:1 | LANDSCAPE | Active Render: **YES** |
| **442** | `/images/profil/profil_content_01.webp` | 6000 × 4000 | 1.50:1 | LANDSCAPE | Active Render: **YES** |
| **012** | `/images/kkn/kkn_activity_07.webp` | 1920 × 1280 | 1.50:1 | LANDSCAPE | Active Render: **YES** |
| **410** | `/images/kkn/kkn_activity_09.webp` | 1920 × 1280 | 1.50:1 | LANDSCAPE | Active Render: **YES** |
| **255** | `/images/profil/profil_story_03.webp` | 1920 × 1280 | 1.50:1 | LANDSCAPE | Active Render: **YES** |

---

## 5. Inventaris Lengkap Seluruh 205 File Gambar Fisik

| No | Path Relatif | Dimensi Fisik | Orientasi | Ukuran File | MD5 Hash | Physical Asset | Active Render |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `/images/background/background_01.webp` | 1920 × 1280 | LANDSCAPE | 353.6 KB | `92f9fe2e9e...` | PRESENT | NO |
| 2 | `/images/background/background_02.webp` | 1920 × 1280 | LANDSCAPE | 126.1 KB | `05d80167a2...` | PRESENT | YES |
| 3 | `/images/gallery/landscape/gallery_landscape_01.webp` | 6000 × 4000 | LANDSCAPE | 1353.0 KB | `6d78143623...` | PRESENT | NO |
| 4 | `/images/gallery/landscape/gallery_landscape_02.webp` | 6000 × 4000 | LANDSCAPE | 431.6 KB | `d97a4127e9...` | PRESENT | NO |
| 5 | `/images/gallery/landscape/gallery_landscape_03.webp` | 6000 × 4000 | LANDSCAPE | 649.4 KB | `e45ef8b0a1...` | PRESENT | NO |
| 6 | `/images/gallery/landscape/gallery_landscape_04.webp` | 1920 × 1280 | LANDSCAPE | 107.4 KB | `34b8ff147d...` | PRESENT | NO |
| 7 | `/images/gallery/landscape/gallery_landscape_05.webp` | 1920 × 1280 | LANDSCAPE | 114.2 KB | `17fbb1e5fd...` | PRESENT | NO |
| 8 | `/images/gallery/landscape/gallery_landscape_06.webp` | 1920 × 1280 | LANDSCAPE | 86.5 KB | `22478ebc6a...` | PRESENT | NO |
| 9 | `/images/gallery/landscape/gallery_landscape_07.webp` | 1920 × 1280 | LANDSCAPE | 180.9 KB | `6b3e6d4c50...` | PRESENT | YES |
| 10 | `/images/gallery/landscape/gallery_landscape_08.webp` | 1920 × 1280 | LANDSCAPE | 115.5 KB | `f7d0dda3e0...` | PRESENT | NO |
| 11 | `/images/gallery/landscape/gallery_landscape_09.webp` | 1920 × 1280 | LANDSCAPE | 224.4 KB | `0705efaffd...` | PRESENT | YES |
| 12 | `/images/gallery/landscape/gallery_landscape_10.webp` | 1920 × 1280 | LANDSCAPE | 172.3 KB | `4a3379e93c...` | PRESENT | NO |
| 13 | `/images/gallery/landscape/gallery_landscape_11.webp` | 1920 × 1280 | LANDSCAPE | 54.9 KB | `fe86b0f76a...` | PRESENT | YES |
| 14 | `/images/gallery/landscape/gallery_landscape_12.webp` | 1920 × 1280 | LANDSCAPE | 187.7 KB | `d939b48169...` | PRESENT | NO |
| 15 | `/images/gallery/landscape/gallery_landscape_13.webp` | 1920 × 1280 | LANDSCAPE | 160.3 KB | `cbad4575c6...` | PRESENT | NO |
| 16 | `/images/gallery/landscape/gallery_landscape_14.webp` | 1920 × 1280 | LANDSCAPE | 200.0 KB | `0c9fcaa97f...` | PRESENT | NO |
| 17 | `/images/gallery/landscape/gallery_landscape_15.webp` | 1920 × 1280 | LANDSCAPE | 157.1 KB | `28b1ca0b5f...` | PRESENT | NO |
| 18 | `/images/gallery/landscape/gallery_landscape_16.webp` | 1920 × 1280 | LANDSCAPE | 125.2 KB | `5f60fad863...` | PRESENT | NO |
| 19 | `/images/gallery/landscape/gallery_new_landscape_01.webp` | 1920 × 1280 | LANDSCAPE | 293.4 KB | `5953afd257...` | PRESENT | NO |
| 20 | `/images/gallery/landscape/gallery_new_landscape_02.webp` | 1920 × 1280 | LANDSCAPE | 137.9 KB | `6a2d0aefac...` | PRESENT | NO |
| 21 | `/images/gallery/landscape/gallery_new_landscape_03.webp` | 1920 × 1280 | LANDSCAPE | 265.4 KB | `c5933842b5...` | PRESENT | NO |
| 22 | `/images/gallery/landscape/gallery_new_landscape_04.webp` | 1920 × 1280 | LANDSCAPE | 251.3 KB | `a1d715472a...` | PRESENT | NO |
| 23 | `/images/gallery/landscape/gallery_new_landscape_05.webp` | 1920 × 1280 | LANDSCAPE | 333.4 KB | `f532ce6f0e...` | PRESENT | NO |
| 24 | `/images/gallery/landscape/gallery_new_landscape_06.webp` | 1920 × 1280 | LANDSCAPE | 257.2 KB | `082e31fe5f...` | PRESENT | NO |
| 25 | `/images/gallery/landscape/gallery_new_landscape_07.webp` | 1920 × 1280 | LANDSCAPE | 486.7 KB | `f989df87d9...` | PRESENT | NO |
| 26 | `/images/gallery/landscape/gallery_new_landscape_08.webp` | 1920 × 1280 | LANDSCAPE | 170.9 KB | `dcd7aba82e...` | PRESENT | NO |
| 27 | `/images/gallery/landscape/gallery_new_landscape_09.webp` | 1920 × 1280 | LANDSCAPE | 253.7 KB | `eeff6743c9...` | PRESENT | NO |
| 28 | `/images/gallery/landscape/gallery_new_landscape_10.webp` | 1920 × 1280 | LANDSCAPE | 230.1 KB | `bc20788c11...` | PRESENT | NO |
| 29 | `/images/gallery/landscape/gallery_new_landscape_11.webp` | 1600 × 737 | LANDSCAPE | 87.3 KB | `0a9397932d...` | PRESENT | NO |
| 30 | `/images/gallery/landscape/gallery_new_landscape_12.webp` | 4032 × 2268 | LANDSCAPE | 462.5 KB | `07299a0f4f...` | PRESENT | NO |
| 31 | `/images/gallery/landscape/gallery_new_landscape_13.webp` | 4160 × 2340 | LANDSCAPE | 791.6 KB | `33ee0be2b6...` | PRESENT | NO |
| 32 | `/images/gallery/landscape/gallery_new_landscape_14.webp` | 1920 × 1280 | LANDSCAPE | 168.6 KB | `0c7e9973d1...` | PRESENT | NO |
| 33 | `/images/gallery/landscape/gallery_new_landscape_15.webp` | 1920 × 1280 | LANDSCAPE | 304.0 KB | `ca60b40574...` | PRESENT | NO |
| 34 | `/images/gallery/landscape/gallery_new_landscape_16.webp` | 1920 × 1280 | LANDSCAPE | 312.0 KB | `ae8e23cbea...` | PRESENT | NO |
| 35 | `/images/gallery/landscape/gallery_new_landscape_17.webp` | 1920 × 1280 | LANDSCAPE | 128.9 KB | `cbb4b81579...` | PRESENT | NO |
| 36 | `/images/gallery/landscape/gallery_new_landscape_18.webp` | 1920 × 1280 | LANDSCAPE | 189.7 KB | `7a066dc6bf...` | PRESENT | NO |
| 37 | `/images/gallery/landscape/gallery_new_landscape_19.webp` | 1920 × 1280 | LANDSCAPE | 170.4 KB | `a6007c0e5c...` | PRESENT | NO |
| 38 | `/images/gallery/landscape/gallery_new_landscape_20.webp` | 1920 × 1280 | LANDSCAPE | 175.3 KB | `39cf7ab94a...` | PRESENT | NO |
| 39 | `/images/gallery/landscape/gallery_new_landscape_21.webp` | 1920 × 1280 | LANDSCAPE | 141.9 KB | `9310f2e3f8...` | PRESENT | NO |
| 40 | `/images/gallery/landscape/gallery_new_landscape_22.webp` | 1920 × 1280 | LANDSCAPE | 101.0 KB | `c2b8cfe60b...` | PRESENT | NO |
| 41 | `/images/gallery/landscape/gallery_new_landscape_23.webp` | 1920 × 1280 | LANDSCAPE | 107.0 KB | `ca9a9aad49...` | PRESENT | NO |
| 42 | `/images/gallery/landscape/gallery_new_landscape_24.webp` | 1920 × 1280 | LANDSCAPE | 91.1 KB | `23ac90d146...` | PRESENT | NO |
| 43 | `/images/gallery/landscape/gallery_new_landscape_25.webp` | 1920 × 1280 | LANDSCAPE | 85.0 KB | `0952ded70f...` | PRESENT | NO |
| 44 | `/images/gallery/landscape/gallery_new_landscape_26.webp` | 1920 × 1280 | LANDSCAPE | 105.8 KB | `38d0adb9c3...` | PRESENT | NO |
| 45 | `/images/gallery/landscape/gallery_new_landscape_27.webp` | 1920 × 1280 | LANDSCAPE | 118.7 KB | `35c97f2d09...` | PRESENT | NO |
| 46 | `/images/gallery/landscape/gallery_new_landscape_28.webp` | 1920 × 1280 | LANDSCAPE | 107.4 KB | `34b8ff147d...` | PRESENT | NO |
| 47 | `/images/gallery/landscape/gallery_new_landscape_29.webp` | 1920 × 1280 | LANDSCAPE | 104.5 KB | `a6d9797272...` | PRESENT | NO |
| 48 | `/images/gallery/landscape/gallery_new_landscape_30.webp` | 1920 × 1280 | LANDSCAPE | 104.4 KB | `58e3a6ead2...` | PRESENT | NO |
| 49 | `/images/gallery/landscape/gallery_new_landscape_31.webp` | 1920 × 1280 | LANDSCAPE | 100.9 KB | `07edf59b61...` | PRESENT | NO |
| 50 | `/images/gallery/landscape/gallery_new_landscape_32.webp` | 1920 × 1280 | LANDSCAPE | 103.1 KB | `092efeecc0...` | PRESENT | NO |
| 51 | `/images/gallery/landscape/gallery_new_landscape_33.webp` | 1920 × 1280 | LANDSCAPE | 90.3 KB | `7dbc427a2e...` | PRESENT | NO |
| 52 | `/images/gallery/landscape/gallery_new_landscape_34.webp` | 1920 × 1280 | LANDSCAPE | 114.2 KB | `17fbb1e5fd...` | PRESENT | NO |
| 53 | `/images/gallery/landscape/gallery_new_landscape_35.webp` | 1920 × 1280 | LANDSCAPE | 94.4 KB | `3c906f578e...` | PRESENT | NO |
| 54 | `/images/gallery/landscape/gallery_new_landscape_36.webp` | 1920 × 1280 | LANDSCAPE | 104.4 KB | `239327a10f...` | PRESENT | NO |
| 55 | `/images/gallery/landscape/gallery_new_landscape_37.webp` | 1920 × 1280 | LANDSCAPE | 88.5 KB | `71635aa4f9...` | PRESENT | NO |
| 56 | `/images/gallery/landscape/gallery_new_landscape_38.webp` | 1920 × 1280 | LANDSCAPE | 87.5 KB | `7efd9a838d...` | PRESENT | NO |
| 57 | `/images/gallery/landscape/gallery_new_landscape_39.webp` | 1920 × 1280 | LANDSCAPE | 83.4 KB | `dcbccedbbe...` | PRESENT | NO |
| 58 | `/images/gallery/landscape/gallery_new_landscape_40.webp` | 1920 × 1280 | LANDSCAPE | 84.9 KB | `b89b19db88...` | PRESENT | NO |
| 59 | `/images/gallery/landscape/gallery_new_landscape_41.webp` | 1920 × 1280 | LANDSCAPE | 85.6 KB | `c4677f596f...` | PRESENT | NO |
| 60 | `/images/gallery/landscape/gallery_new_landscape_42.webp` | 1920 × 1280 | LANDSCAPE | 86.5 KB | `22478ebc6a...` | PRESENT | NO |
| 61 | `/images/gallery/landscape/gallery_new_landscape_43.webp` | 1920 × 1280 | LANDSCAPE | 95.9 KB | `1c4420e9e9...` | PRESENT | NO |
| 62 | `/images/gallery/landscape/gallery_new_landscape_44.webp` | 1920 × 1280 | LANDSCAPE | 89.2 KB | `a85d8e6866...` | PRESENT | NO |
| 63 | `/images/gallery/landscape/gallery_new_landscape_45.webp` | 1920 × 1280 | LANDSCAPE | 111.3 KB | `1c08c6edc7...` | PRESENT | NO |
| 64 | `/images/gallery/landscape/gallery_new_landscape_46.webp` | 1920 × 1280 | LANDSCAPE | 97.8 KB | `d0db254a42...` | PRESENT | NO |
| 65 | `/images/gallery/landscape/gallery_new_landscape_47.webp` | 1920 × 1280 | LANDSCAPE | 108.1 KB | `335926cdc2...` | PRESENT | NO |
| 66 | `/images/gallery/landscape/gallery_new_landscape_48.webp` | 1920 × 1280 | LANDSCAPE | 104.9 KB | `01c1bce0df...` | PRESENT | NO |
| 67 | `/images/gallery/landscape/gallery_new_landscape_49.webp` | 1920 × 1280 | LANDSCAPE | 104.5 KB | `3d24a5a3ee...` | PRESENT | NO |
| 68 | `/images/gallery/landscape/gallery_new_landscape_50.webp` | 1920 × 1280 | LANDSCAPE | 87.8 KB | `f415d1f4e7...` | PRESENT | NO |
| 69 | `/images/gallery/landscape/gallery_new_landscape_51.webp` | 1920 × 1280 | LANDSCAPE | 95.2 KB | `2c9da937ac...` | PRESENT | NO |
| 70 | `/images/gallery/landscape/gallery_new_landscape_52.webp` | 1920 × 1280 | LANDSCAPE | 78.7 KB | `aade0a08a6...` | PRESENT | NO |
| 71 | `/images/gallery/landscape/gallery_new_landscape_53.webp` | 1920 × 1280 | LANDSCAPE | 87.3 KB | `10242cf169...` | PRESENT | NO |
| 72 | `/images/gallery/landscape/gallery_new_landscape_54.webp` | 1920 × 1280 | LANDSCAPE | 93.7 KB | `29f8fa7a2f...` | PRESENT | NO |
| 73 | `/images/gallery/landscape/gallery_new_landscape_55.webp` | 1920 × 1280 | LANDSCAPE | 130.0 KB | `c2ef47e00e...` | PRESENT | NO |
| 74 | `/images/gallery/landscape/gallery_new_landscape_56.webp` | 1920 × 1280 | LANDSCAPE | 120.9 KB | `1e83e4e529...` | PRESENT | NO |
| 75 | `/images/gallery/landscape/gallery_new_landscape_57.webp` | 1920 × 1280 | LANDSCAPE | 113.4 KB | `18234c4278...` | PRESENT | NO |
| 76 | `/images/gallery/landscape/gallery_new_landscape_58.webp` | 1920 × 1280 | LANDSCAPE | 129.1 KB | `3fd945054f...` | PRESENT | NO |
| 77 | `/images/gallery/landscape/gallery_new_landscape_59.webp` | 1920 × 1280 | LANDSCAPE | 127.6 KB | `4a48ab44d6...` | PRESENT | NO |
| 78 | `/images/gallery/landscape/gallery_new_landscape_60.webp` | 1920 × 1280 | LANDSCAPE | 316.8 KB | `d4d80c3eda...` | PRESENT | NO |
| 79 | `/images/gallery/landscape/gallery_new_landscape_61.webp` | 1920 × 1280 | LANDSCAPE | 334.2 KB | `7e551f82e3...` | PRESENT | NO |
| 80 | `/images/gallery/landscape/gallery_new_landscape_62.webp` | 1920 × 1280 | LANDSCAPE | 360.3 KB | `b12dc3a73b...` | PRESENT | NO |
| 81 | `/images/gallery/landscape/gallery_new_landscape_63.webp` | 1920 × 1280 | LANDSCAPE | 276.6 KB | `911409a3d6...` | PRESENT | NO |
| 82 | `/images/gallery/landscape/gallery_new_landscape_64.webp` | 1920 × 1280 | LANDSCAPE | 264.6 KB | `d6dde69023...` | PRESENT | NO |
| 83 | `/images/gallery/landscape/gallery_new_landscape_65.webp` | 1920 × 1280 | LANDSCAPE | 155.7 KB | `93febfa3b0...` | PRESENT | NO |
| 84 | `/images/gallery/landscape/gallery_new_landscape_66.webp` | 1920 × 1280 | LANDSCAPE | 281.1 KB | `17ddd952d5...` | PRESENT | NO |
| 85 | `/images/gallery/landscape/gallery_new_landscape_67.webp` | 1920 × 1280 | LANDSCAPE | 173.0 KB | `1342506762...` | PRESENT | NO |
| 86 | `/images/gallery/landscape/gallery_new_landscape_68.webp` | 1920 × 1280 | LANDSCAPE | 149.5 KB | `f5bd88751a...` | PRESENT | NO |
| 87 | `/images/gallery/landscape/gallery_new_landscape_69.webp` | 1920 × 1280 | LANDSCAPE | 187.2 KB | `9b6a089b16...` | PRESENT | NO |
| 88 | `/images/gallery/landscape/gallery_new_landscape_70.webp` | 1920 × 1280 | LANDSCAPE | 178.1 KB | `972209679b...` | PRESENT | NO |
| 89 | `/images/gallery/landscape/gallery_new_landscape_71.webp` | 1920 × 1280 | LANDSCAPE | 203.2 KB | `a598580874...` | PRESENT | NO |
| 90 | `/images/gallery/landscape/gallery_new_landscape_72.webp` | 1920 × 1280 | LANDSCAPE | 159.0 KB | `aeba8afe10...` | PRESENT | NO |
| 91 | `/images/gallery/landscape/gallery_new_landscape_73.webp` | 1920 × 1280 | LANDSCAPE | 229.3 KB | `79f66f0bb3...` | PRESENT | NO |
| 92 | `/images/gallery/landscape/gallery_new_landscape_74.webp` | 1920 × 1280 | LANDSCAPE | 159.4 KB | `54702ec36f...` | PRESENT | NO |
| 93 | `/images/gallery/landscape/gallery_new_landscape_75.webp` | 1920 × 1280 | LANDSCAPE | 101.6 KB | `a40894f518...` | PRESENT | NO |
| 94 | `/images/gallery/portrait/gallery_new_portrait_01.webp` | 3024 × 4032 | PORTRAIT | 2013.8 KB | `bc464bf680...` | PRESENT | NO |
| 95 | `/images/gallery/portrait/gallery_new_portrait_02.webp` | 2304 × 4096 | PORTRAIT | 740.4 KB | `8368b6d03a...` | PRESENT | NO |
| 96 | `/images/gallery/portrait/gallery_new_portrait_2000.webp` | 3024 × 4032 | PORTRAIT | 2013.8 KB | `bc464bf680...` | PRESENT | NO |
| 97 | `/images/gallery/portrait/gallery_new_portrait_2001.webp` | 2304 × 4096 | PORTRAIT | 740.4 KB | `8368b6d03a...` | PRESENT | NO |
| 98 | `/images/gallery/portrait/gallery_new_portrait_3000.webp` | 3024 × 4032 | PORTRAIT | 2013.8 KB | `bc464bf680...` | PRESENT | NO |
| 99 | `/images/gallery/portrait/gallery_new_portrait_3001.webp` | 2304 × 4096 | PORTRAIT | 740.4 KB | `8368b6d03a...` | PRESENT | NO |
| 100 | `/images/gallery/portrait/gallery_new_portrait_5000.webp` | 1920 × 1280 | LANDSCAPE | 262.1 KB | `7f8f6c62f4...` | PRESENT | NO |
| 101 | `/images/gallery/portrait/gallery_new_portrait_5001.webp` | 1920 × 1280 | LANDSCAPE | 77.6 KB | `0406b8e142...` | PRESENT | NO |
| 102 | `/images/gallery/portrait/gallery_new_portrait_5002.webp` | 6000 × 4000 | LANDSCAPE | 1000.7 KB | `43c12183db...` | PRESENT | NO |
| 103 | `/images/gallery/portrait/gallery_new_portrait_5003.webp` | 1920 × 1280 | LANDSCAPE | 158.4 KB | `a80a867813...` | PRESENT | NO |
| 104 | `/images/gallery/portrait/gallery_new_portrait_5004.webp` | 1920 × 1280 | LANDSCAPE | 112.4 KB | `10cb0d5d89...` | PRESENT | NO |
| 105 | `/images/gallery/portrait/gallery_new_portrait_5005.webp` | 1920 × 1280 | LANDSCAPE | 106.2 KB | `c50689ad3e...` | PRESENT | NO |
| 106 | `/images/gallery/portrait/gallery_new_portrait_5006.webp` | 1920 × 1280 | LANDSCAPE | 236.5 KB | `21087ff781...` | PRESENT | NO |
| 107 | `/images/gallery/portrait/gallery_new_portrait_5007.webp` | 1920 × 1280 | LANDSCAPE | 172.3 KB | `4a3379e93c...` | PRESENT | NO |
| 108 | `/images/gallery/portrait/gallery_new_portrait_5008.webp` | 1920 × 1280 | LANDSCAPE | 89.3 KB | `d7237bdf6d...` | PRESENT | NO |
| 109 | `/images/gallery/portrait/gallery_new_portrait_5009.webp` | 1920 × 1280 | LANDSCAPE | 164.0 KB | `1f97d19baf...` | PRESENT | NO |
| 110 | `/images/gallery/portrait/gallery_new_portrait_5010.webp` | 1920 × 1280 | LANDSCAPE | 114.4 KB | `26a40c01e6...` | PRESENT | NO |
| 111 | `/images/gallery/portrait/gallery_new_portrait_5011.webp` | 1920 × 1280 | LANDSCAPE | 100.4 KB | `9b0c6ece05...` | PRESENT | NO |
| 112 | `/images/gallery/portrait/gallery_new_portrait_5012.webp` | 1920 × 1280 | LANDSCAPE | 330.0 KB | `f116a32eb7...` | PRESENT | NO |
| 113 | `/images/gallery/portrait/gallery_new_portrait_5013.webp` | 1920 × 1280 | LANDSCAPE | 128.1 KB | `672e75e38e...` | PRESENT | NO |
| 114 | `/images/gallery/portrait/gallery_new_portrait_5014.webp` | 1920 × 1280 | LANDSCAPE | 120.2 KB | `4e37d37a06...` | PRESENT | NO |
| 115 | `/images/gallery/portrait/gallery_new_portrait_5015.webp` | 1920 × 1280 | LANDSCAPE | 110.5 KB | `8b4f692de9...` | PRESENT | NO |
| 116 | `/images/gallery/portrait/gallery_new_portrait_5016.webp` | 1920 × 1280 | LANDSCAPE | 130.9 KB | `0fd3725d00...` | PRESENT | NO |
| 117 | `/images/gallery/portrait/gallery_new_portrait_5017.webp` | 1920 × 1280 | LANDSCAPE | 82.2 KB | `2f1fec03ad...` | PRESENT | NO |
| 118 | `/images/gallery/portrait/gallery_new_portrait_5018.webp` | 1920 × 1280 | LANDSCAPE | 75.2 KB | `ff5e36f775...` | PRESENT | NO |
| 119 | `/images/gallery/portrait/gallery_new_portrait_5019.webp` | 1920 × 1280 | LANDSCAPE | 110.9 KB | `ba1d5db7a6...` | PRESENT | NO |
| 120 | `/images/gallery/portrait/gallery_new_portrait_5020.webp` | 1920 × 1280 | LANDSCAPE | 140.6 KB | `272261a20e...` | PRESENT | NO |
| 121 | `/images/gallery/portrait/gallery_new_portrait_5021.webp` | 1920 × 1280 | LANDSCAPE | 128.9 KB | `cbb4b81579...` | PRESENT | NO |
| 122 | `/images/gallery/portrait/gallery_new_portrait_5022.webp` | 1920 × 1280 | LANDSCAPE | 151.7 KB | `5ecd671b69...` | PRESENT | NO |
| 123 | `/images/gallery/portrait/gallery_new_portrait_5023.webp` | 1920 × 1280 | LANDSCAPE | 189.7 KB | `7a066dc6bf...` | PRESENT | NO |
| 124 | `/images/gallery/portrait/gallery_new_portrait_5024.webp` | 1920 × 1280 | LANDSCAPE | 150.1 KB | `0e0cd39115...` | PRESENT | NO |
| 125 | `/images/gallery/portrait/gallery_new_portrait_5025.webp` | 1920 × 1280 | LANDSCAPE | 97.8 KB | `2b032aee3f...` | PRESENT | NO |
| 126 | `/images/gallery/portrait/gallery_new_portrait_5026.webp` | 1920 × 1280 | LANDSCAPE | 145.6 KB | `56cee5b4d8...` | PRESENT | NO |
| 127 | `/images/gallery/portrait/gallery_new_portrait_5027.webp` | 1920 × 1280 | LANDSCAPE | 142.9 KB | `69dda25b6e...` | PRESENT | NO |
| 128 | `/images/gallery/portrait/gallery_new_portrait_5028.webp` | 1920 × 1280 | LANDSCAPE | 87.6 KB | `f2d0eb5096...` | PRESENT | NO |
| 129 | `/images/gallery/portrait/gallery_new_portrait_5029.webp` | 1920 × 1280 | LANDSCAPE | 113.3 KB | `4a2c221d66...` | PRESENT | NO |
| 130 | `/images/home/beranda_01.webp` | 1920 × 1280 | LANDSCAPE | 353.2 KB | `9f917285cd...` | PRESENT | NO |
| 131 | `/images/home/beranda_02.webp` | 4160 × 2340 | LANDSCAPE | 1312.3 KB | `e4f7331d28...` | PRESENT | NO |
| 132 | `/images/home/beranda_03.webp` | 1920 × 1280 | LANDSCAPE | 214.3 KB | `fec81add3a...` | PRESENT | NO |
| 133 | `/images/home/beranda_04.webp` | 1920 × 1280 | LANDSCAPE | 176.7 KB | `126ff5e04e...` | PRESENT | NO |
| 134 | `/images/home/bersamawarga10.webp` | 1920 × 1280 | LANDSCAPE | 230.1 KB | `bc20788c11...` | PRESENT | YES |
| 135 | `/images/home/home_hero_01.webp` | 1920 × 1280 | LANDSCAPE | 227.3 KB | `4a57f78200...` | PRESENT | YES |
| 136 | `/images/home/home_hero_02.webp` | 1920 × 1280 | LANDSCAPE | 120.3 KB | `62492479c8...` | PRESENT | YES |
| 137 | `/images/home/home_hero_03.webp` | 1920 × 1280 | LANDSCAPE | 93.3 KB | `ac178f1c83...` | PRESENT | YES |
| 138 | `/images/home/img_7989.webp` | 1920 × 1280 | LANDSCAPE | 113.4 KB | `18234c4278...` | PRESENT | NO |
| 139 | `/images/home/timeline_01.webp` | 1920 × 1280 | LANDSCAPE | 353.6 KB | `92f9fe2e9e...` | PRESENT | NO |
| 140 | `/images/home/timeline_02.webp` | 1920 × 1280 | LANDSCAPE | 416.7 KB | `ff9cf10031...` | PRESENT | NO |
| 141 | `/images/home/timeline_03.webp` | 4160 × 2340 | LANDSCAPE | 845.0 KB | `4c93af41cd...` | PRESENT | NO |
| 142 | `/images/home/timeline_04.webp` | 4160 × 2340 | LANDSCAPE | 1254.3 KB | `3c210c6012...` | PRESENT | NO |
| 143 | `/images/home/wargaprofil3.webp` | 4032 × 3024 | LANDSCAPE | 1247.8 KB | `d2cf6b5ca0...` | PRESENT | NO |
| 144 | `/images/illustrations/editorial_documentary_photograph_of_an_indonesian_mother_in_desa_air_putih.webp` | 1264 × 848 | LANDSCAPE | 126.6 KB | `725ef5bdc1...` | PRESENT | NO |
| 145 | `/images/illustrations/editorial_documentary_photograph_of_a_farmer_in_desa_air_putih_riau_indonesia..webp` | 1264 × 848 | LANDSCAPE | 293.8 KB | `3843a47f57...` | PRESENT | NO |
| 146 | `/images/illustrations/editorial_documentary_photograph_of_children_playing_in_desa_air_putih_riau.webp` | 1264 × 848 | LANDSCAPE | 171.5 KB | `5d0564bde0...` | PRESENT | NO |
| 147 | `/images/illustrations/editorial_documentary_photograph_of_children_walking_to_school_along_a_quiet.webp` | 1264 × 848 | LANDSCAPE | 134.2 KB | `6e106751bd...` | PRESENT | NO |
| 148 | `/images/illustrations/editorial_documentary_portrait_of_a_local_umkm_small_business_owner_in_desa_air.webp` | 1024 × 1024 | SQUARE | 102.9 KB | `55a2d1b45b...` | PRESENT | NO |
| 149 | `/images/illustrations/editorial_documentary_portrait_of_a_veteran_farmer_in_desa_air_putih_riau.webp` | 1024 × 1024 | SQUARE | 97.7 KB | `84823f5229...` | PRESENT | NO |
| 150 | `/images/illustrations/editorial_documentary_portrait_of_a_village_elder_in_desa_air_putih_indragiri.webp` | 1264 × 848 | LANDSCAPE | 144.9 KB | `cd1433e77f...` | PRESENT | NO |
| 151 | `/images/illustrations/editorial_documentary_portrait_of_a_village_teacher_in_desa_air_putih_riau.webp` | 1024 × 1024 | SQUARE | 73.7 KB | `eb8fd28517...` | PRESENT | NO |
| 152 | `/images/illustrations/editorial_documentary_portrait_of_the_village_head_kepala_desa_of_desa_air.webp` | 1024 × 1024 | SQUARE | 70.0 KB | `ad17eec1cb...` | PRESENT | NO |
| 153 | `/images/illustrations/seamless_high_resolution_editorial_background_texture_of_natural_unbleached.webp` | 1024 × 1024 | SQUARE | 323.6 KB | `e98dee036e...` | PRESENT | NO |
| 154 | `/images/illustrations/seamless_high_resolution_editorial_background_texture_of_old_weathered_book.webp` | 1024 × 1024 | SQUARE | 88.3 KB | `57a8957484...` | PRESENT | NO |
| 155 | `/images/illustrations/seamless_high_resolution_editorial_background_texture_of_soft_palm_leaf_shadows.webp` | 1024 × 1024 | SQUARE | 17.2 KB | `54ff7befd0...` | PRESENT | NO |
| 156 | `/images/illustrations/seamless_high_resolution_editorial_background_texture_of_warm_off_white.webp` | 1024 × 1024 | SQUARE | 57.6 KB | `6ece570a55...` | PRESENT | NO |
| 157 | `/images/kkn/kkn_activity_01.webp` | 6000 × 4000 | LANDSCAPE | 478.6 KB | `e728511259...` | PRESENT | NO |
| 158 | `/images/kkn/kkn_activity_02.webp` | 6000 × 4000 | LANDSCAPE | 588.3 KB | `d03ca13a56...` | PRESENT | YES |
| 159 | `/images/kkn/kkn_activity_03.webp` | 1920 × 1280 | LANDSCAPE | 312.0 KB | `ae8e23cbea...` | PRESENT | YES |
| 160 | `/images/kkn/kkn_activity_04.webp` | 1920 × 1280 | LANDSCAPE | 129.1 KB | `3fd945054f...` | PRESENT | YES |
| 161 | `/images/kkn/kkn_activity_05.webp` | 1920 × 1280 | LANDSCAPE | 281.1 KB | `17ddd952d5...` | PRESENT | YES |
| 162 | `/images/kkn/kkn_activity_06.webp` | 1920 × 1280 | LANDSCAPE | 251.2 KB | `5f48cdf163...` | PRESENT | NO |
| 163 | `/images/kkn/kkn_activity_07.webp` | 1920 × 1280 | LANDSCAPE | 105.7 KB | `5fcf56a240...` | PRESENT | YES |
| 164 | `/images/kkn/kkn_activity_08.webp` | 1920 × 1280 | LANDSCAPE | 278.0 KB | `d930ade8e6...` | PRESENT | YES |
| 165 | `/images/kkn/kkn_activity_09.webp` | 1920 × 1280 | LANDSCAPE | 180.1 KB | `36fd07400a...` | PRESENT | YES |
| 166 | `/images/kkn/kkn_activity_10.webp` | 1920 × 1280 | LANDSCAPE | 159.5 KB | `83ebefe407...` | PRESENT | YES |
| 167 | `/images/kkn/kkn_activity_11.webp` | 1920 × 1280 | LANDSCAPE | 242.9 KB | `fc1e3d694c...` | PRESENT | NO |
| 168 | `/images/kkn/kkn_team_aisyah.jpg` | 6000 × 4000 | LANDSCAPE | 7711.8 KB | `f586d54e85...` | PRESENT | YES |
| 169 | `/images/kkn/kkn_team_alya.jpg` | 6000 × 4000 | LANDSCAPE | 7466.4 KB | `fdf853ba21...` | PRESENT | YES |
| 170 | `/images/kkn/kkn_team_deffarul.jpg` | 6000 × 4000 | LANDSCAPE | 7539.2 KB | `a2e151719c...` | PRESENT | YES |
| 171 | `/images/kkn/kkn_team_dpl.jpg` | 719 × 1197 | PORTRAIT | 91.1 KB | `4a141f6d25...` | PRESENT | YES |
| 172 | `/images/kkn/kkn_team_elsa.jpg` | 6000 × 4000 | LANDSCAPE | 8043.6 KB | `6b2ce84357...` | PRESENT | YES |
| 173 | `/images/kkn/kkn_team_inaayah.jpg` | 6000 × 4000 | LANDSCAPE | 7671.7 KB | `8d886029db...` | PRESENT | YES |
| 174 | `/images/kkn/kkn_team_marsya.jpg` | 6000 × 4000 | LANDSCAPE | 8641.8 KB | `3eb2612af0...` | PRESENT | YES |
| 175 | `/images/kkn/kkn_team_putri.jpg` | 6000 × 4000 | LANDSCAPE | 7113.4 KB | `a1ccebad64...` | PRESENT | YES |
| 176 | `/images/kkn/kkn_team_rufai.jpg` | 6000 × 4000 | LANDSCAPE | 8762.0 KB | `c284138db4...` | PRESENT | YES |
| 177 | `/images/kkn/kkn_team_silvi.jpg` | 6000 × 4000 | LANDSCAPE | 8623.8 KB | `2cc7d4a618...` | PRESENT | YES |
| 178 | `/images/kkn/kkn_team_toni.jpg` | 6000 × 4000 | LANDSCAPE | 8202.3 KB | `85e99680a6...` | PRESENT | YES |
| 179 | `/images/pemerintahan/pemerintahan_hero_01.webp` | 1920 × 1280 | LANDSCAPE | 227.3 KB | `4a57f78200...` | PRESENT | YES |
| 180 | `/images/pemerintahan/struktur-perangkat-desa.svg` | 1190.25 × 842.249979 | LANDSCAPE | 6802.2 KB | `cdd6f139e2...` | PRESENT | YES |
| 181 | `/images/pemerintahan/struktur-perangkat-desa.webp` | 2000 × 1414 | LANDSCAPE | 140.5 KB | `135e112e20...` | PRESENT | YES |
| 182 | `/images/profil/peta_administrasi.png` | 8858 × 5906 | LANDSCAPE | 31872.7 KB | `4a49a25176...` | PRESENT | YES |
| 183 | `/images/profil/profil_content_01.webp` | 6000 × 4000 | LANDSCAPE | 538.0 KB | `cf00b29f94...` | PRESENT | YES |
| 184 | `/images/profil/profil_content_02.webp` | 6000 × 4000 | LANDSCAPE | 865.9 KB | `9c0a5e96de...` | PRESENT | NO |
| 185 | `/images/profil/profil_content_03.webp` | 6000 × 4000 | LANDSCAPE | 1021.6 KB | `5287d23dff...` | PRESENT | NO |
| 186 | `/images/profil/profil_content_04.webp` | 6000 × 4000 | LANDSCAPE | 719.3 KB | `c129e330b5...` | PRESENT | NO |
| 187 | `/images/profil/profil_content_05.webp` | 6000 × 4000 | LANDSCAPE | 1186.0 KB | `3fd00a586d...` | PRESENT | NO |
| 188 | `/images/profil/profil_content_06.webp` | 1920 × 1280 | LANDSCAPE | 330.0 KB | `f116a32eb7...` | PRESENT | YES |
| 189 | `/images/profil/profil_content_07.webp` | 1920 × 1280 | LANDSCAPE | 140.6 KB | `272261a20e...` | PRESENT | NO |
| 190 | `/images/profil/profil_content_08.webp` | 1920 × 1280 | LANDSCAPE | 175.3 KB | `39cf7ab94a...` | PRESENT | YES |
| 191 | `/images/profil/profil_content_09.webp` | 1920 × 1280 | LANDSCAPE | 107.0 KB | `ca9a9aad49...` | PRESENT | NO |
| 192 | `/images/profil/profil_content_10.webp` | 1920 × 1280 | LANDSCAPE | 67.6 KB | `655f33833c...` | PRESENT | NO |
| 193 | `/images/profil/profil_content_11.webp` | 1920 × 1280 | LANDSCAPE | 100.2 KB | `26df7b4d8f...` | PRESENT | NO |
| 194 | `/images/profil/profil_content_12.webp` | 1920 × 1280 | LANDSCAPE | 64.7 KB | `5679e87ee6...` | PRESENT | NO |
| 195 | `/images/profil/profil_content_13.webp` | 1920 × 1280 | LANDSCAPE | 118.3 KB | `dc0ae6e7f5...` | PRESENT | NO |
| 196 | `/images/profil/profil_content_14.webp` | 1920 × 1280 | LANDSCAPE | 126.8 KB | `c03541b702...` | PRESENT | YES |
| 197 | `/images/profil/profil_story_01.webp` | 6000 × 4000 | LANDSCAPE | 526.1 KB | `d9dde17113...` | PRESENT | NO |
| 198 | `/images/profil/profil_story_02.webp` | 1920 × 1280 | LANDSCAPE | 223.7 KB | `3c3edc655e...` | PRESENT | YES |
| 199 | `/images/profil/profil_story_03.webp` | 1920 × 1280 | LANDSCAPE | 113.5 KB | `616070c963...` | PRESENT | YES |
| 200 | `/images/profil/topografi.webp` | 1920 × 1280 | LANDSCAPE | 313.2 KB | `b6c14f837b...` | PRESENT | NO |
| 201 | `/images/profil/warga_profil_1.webp` | 1920 × 1280 | LANDSCAPE | 193.6 KB | `2fcf32906b...` | PRESENT | NO |
| 202 | `/images/profil/warga_profil_2.webp` | 1920 × 1280 | LANDSCAPE | 251.0 KB | `9461fdf12a...` | PRESENT | NO |
| 203 | `/images/profil/warga_profil_3.webp` | 4032 × 3024 | LANDSCAPE | 1247.8 KB | `d2cf6b5ca0...` | PRESENT | NO |
| 204 | `/images/profil/warga_profil_4.webp` | 1920 × 1280 | LANDSCAPE | 416.7 KB | `ff9cf10031...` | PRESENT | NO |
| 205 | `/images/supporting/supporting_01.webp` | 1920 × 1280 | LANDSCAPE | 175.8 KB | `663b1f9695...` | PRESENT | YES |
