# AUTO_CURATION_AUDIT.md

> **⚠ Pernyataan Integritas Metodologi**
> Seluruh hasil kurasi berstatus **`TECHNICAL_FALLBACK`** + **`CONTEXT_FALLBACK`**.
> Tidak ada true visual audit. Tidak ada visual inspection oleh AI.
> `confidence = LOW` di seluruh pipeline. Tidak ada randomization.

---

## 1. Dataset

| Metrik | Nilai |
|---|---|
| Total Foto | 603 |
| File Valid (integritas OK) | 603 |
| Orientasi | 603 Landscape, 0 Portrait, 0 Square |
| Resolusi | 1920 × 1280 (3:2) |
| Folder Utama | AESTHETIC, GORO, KKN RA AL KAUTSAR, KKN X TK TUNAS HARAPAN, KOLASE KERTAS, KOLASE SAMPAH, NGAJAR SMPN, RANDOM, SMPN 02 |

---

## 2. Technical Ranking

**Metode**: Blur score (Laplacian variance) + Exposure status adjustment.
**Bukan klaim kualitas visual.** Tier adalah penanda teknis (`CANDIDATE` designation).

| Tier (Candidate Designation) | Jumlah | Kriteria Teknis |
|---|---|---|
| `S-CANDIDATE` | 104 | Technical score >= 90 (top ~15%: very sharp + normal exposure) |
| `A-CANDIDATE` | 87 | Technical score 75–89 |
| `B-CANDIDATE` | 123 | Technical score 55–74 |
| `C-CANDIDATE` | 153 | Technical score 30–54 |
| `REJECT-CANDIDATE` | 136 | Technical score < 30 (heavily blurred or extreme exposure) |

---

## 3. Duplicate Analysis (CORRECTED)

### Root Cause Sebelumnya (Pipeline Lama)

Pipeline lama menggunakan connected-components clustering transitif tanpa batasan diameter kluster.
Hasilnya: 602/603 foto masuk dalam 23 grup (grup terbesar: 82 foto), dengan Hamming distance mencapai 81.
Ini bukan cerminan kemiripan visual — melainkan efek chaining sequential burst photography.

### Pipeline Baru (CORRECTED)

- **Threshold**: pHash Hamming Distance **≤ 4** (direct pair only)
- **Metode**: Strict all-pairs similarity dalam setiap grup (NO transitive chaining)
- **Definisi**: A dan C hanya dikelompokkan jika A↔C ≤ 4, bukan karena B menghubungkan keduanya

### Hasil CORRECTED

| Metrik | Nilai Lama (Salah) | Nilai Baru (Corrected) |
|---|---|---|
| Total duplicate groups | 23 | **15** |
| Foto dalam duplicate groups | 602 | **33** |
| MASTER_CANDIDATE | 23 | **15** |
| SIMILAR_CANDIDATE | 579 | **18** |
| UNIQUE (tidak punya pasangan) | 1 | **570** |
| Grup terbesar | 82 foto | **4 foto** |
| Grup terkecil | 2 foto | **2 foto** |

### Distribusi Ukuran Grup (Corrected)

| Ukuran Grup | Jumlah Grup |
|---|---|
| 2 foto | 12 |
| 3 foto | 2 |
| 4 foto | 1 |
| **Total** | **15 grup, 33 foto** |

### Distribusi Hamming Distance Aktual (181.503 pasang)

| Jarak | Pasang | Interpretasi |
|---|---|---|
| 0 | 8 | Identik perceptually |
| 1–2 | 15 | Hampir identik |
| 3–4 | 12 | Burst shot angle mikro |
| 5–16 | 271 | Scene serupa |
| ≥ 17 | 181.197 | Berbeda visual (mayoritas) |

### Kesimpulan Threshold pHash < 5

- Threshold ≤ 4 **TIDAK terlalu agresif** jika dipakai tanpa transitive chaining.
- Dengan threshold ≤ 4 + strict all-pairs: hanya 33 foto yang benar-benar mirip secara perceptual.
- Root cause masalah sebelumnya: **transitive chaining**, bukan threshold-nya.

---

## 4. Context Mapping

| Folder | Primary Page | Secondary Page | Story Type |
|---|---|---|---|
| AESTHETIC/ | GALLERY | BACKGROUND | AESTHETIC_CONTEXT |
| GORO/SORE/ | KKN | GALLERY | KKN_ACTIVITY_CONTEXT |
| GORO/ | KKN | ABOUT | KKN_ACTIVITY_CONTEXT |
| KKN RA AL KAUTSAR/ | KKN | PENDIDIKAN | KKN_EDU_CONTEXT |
| KKN X TK TUNAS HARAPAN/ | KKN | PENDIDIKAN | KKN_EDU_CONTEXT |
| KOLASE KERTAS */ | PENDIDIKAN | GALLERY | CRAFT_EDU_CONTEXT |
| KOLASE SAMPAH */ | PENDIDIKAN | GALLERY | CRAFT_EDU_CONTEXT |
| NGAJAR SMPN/ | PENDIDIKAN | KKN | FORMAL_EDU_CONTEXT |
| RANDOM/ (rank < 80) | GALLERY | HERO | GENERAL_CONTEXT |
| RANDOM/ (rank >= 80) | HERO | GALLERY | GENERAL_CONTEXT |
| SMPN 02 */ | PENDIDIKAN | GALLERY | FORMAL_EDU_CONTEXT |

**review_method = CONTEXT_FALLBACK | confidence = LOW**
Mapping ini berdasarkan nama folder, bukan pemahaman visual semantik.

---


## 5. Shortlist Final Summary

| Section | Candidates |
|---|---|
| HERO | 7 |
| ABOUT | 0 |
| POTENSI | 0 |
| PENDIDIKAN | 165 |
| KKN | 68 |
| GALLERY | 32 |
| BACKGROUND | 4 |
| SUPPORTING | 0 |
| **Total unique** | **244** |

Criteria:
- MASTER_CANDIDATE: always included (if tier != REJECT)
- UNIQUE (rank >= 60, tier S/A/B): included
- SIMILAR_CANDIDATE: excluded (represented by MASTER)

Detail: lihat `FINAL_SHORTLIST.md`

## 6. Low Confidence Items & Potentially Problematic Decisions

1. **Bokeh vs blur**: Laplacian variance menghukum bokeh intentional. Foto portrait/macro bisa under-tiered.
2. **Golden hour vs underexposure**: Foto suasana sore/indoor bisa salah flagged sebagai underexposed.
3. **Context mapping folder-based**: Tidak ada pemahaman visual. Foto lintas konteks kemungkinan salah halaman.
4. **C-CANDIDATE excluded from shortlist** tapi TIDAK dihapus. Tersedia di PHOTO_CURATION_DATABASE.csv.
5. **Semua 603 file asli tidak diubah.** Hanya metadata klasifikasi yang berubah.
