# PERFORMANCE BUDGET — Technical Thresholds & Targets

> **Scope:** Performance, Accessibility, and Bundle Constraints for Desa Air Putih Digital Experience

---

## 1. Core Web Vitals Targets

| Metric | Target Threshold | Description |
|---|---|---|
| **LCP (Largest Contentful Paint)** | `< 1.8s` | Fast initial hero image render |
| **CLS (Cumulative Layout Shift)** | `0.00` | Zero layout jumps due to explicit aspect ratios |
| **INP (Interaction to Next Paint)** | `< 100ms` | Instant response for navigation & mobile drawer |
| **FCP (First Contentful Paint)** | `< 1.0s` | Immediate paper background & text display |

---

## 2. Lighthouse Targets

- **Performance:** `98 – 100`
- **Accessibility:** `100`
- **Best Practices:** `100`
- **SEO:** `100`

---

## 3. Asset & Bundle Budgets

- **Total JavaScript Bundle (Gzipped):** `< 160 KB` (Current production build: `140.24 KB`)
- **Total CSS Bundle (Gzipped):** `< 15 KB` (Current production build: `7.55 KB`)
- **Hero Image File Size (WebP):** `< 250 KB`
- **Standard Image File Size (WebP):** `< 150 KB`
- **Thumbnail Image File Size (WebP):** `< 50 KB`
- **Simultaneous On-Screen Animations:** Maximum `3` active motion nodes per viewport

---

## 4. Resource Allocation & Preloading Rules

1. **Hero Priority:** Hero images MUST specify `priority` prop on `<EditorialImage>` (translates to `fetchPriority="high"` and `loading="eager"`).
2. **Lazy Loading Default:** All below-the-fold images MUST use `loading="lazy"`.
3. **Font Preloading:** Critical font files (`Libre Baskerville`, `Inter`) MUST use `<link rel="preload">` or clean Google Fonts display swap.
