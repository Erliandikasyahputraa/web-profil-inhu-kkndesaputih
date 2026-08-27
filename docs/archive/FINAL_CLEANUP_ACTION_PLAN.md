# FINAL CLEANUP ACTION PLAN

## SAFE TO DELETE

| File | Action | Evidence | Confidence |
|---|---|---|---|
| `src/features/profile/sections/Scene05IdentityToday.tsx` | Delete | Zero imports found via recursive grep in `src/`. No routing references. | HIGH |
| `src/features/profile/sections/Scene04Potensi.tsx` | Delete | Zero imports found via recursive grep in `src/`. Omitted from `ProfileComposition.tsx`. | HIGH |
| `src/features/profile/sections/Scene04Values.tsx` | Delete | Zero imports found via recursive grep in `src/`. Omitted from `ProfileComposition.tsx`. | HIGH |
| `src/layout/EditorialLayout.tsx` | Delete | Zero imports found via recursive grep in `src/`. Not used by any page or router. | HIGH |
| `src/app/providers.tsx` | Delete | Exported `Providers` is never imported. `main.tsx` implements providers directly. | HIGH |
| `embla-carousel-react` | Uninstall | Zero references found via grep inside `src/`. | HIGH |
| `react-intersection-observer` | Uninstall | Zero references found via grep inside `src/`. | HIGH |

## SAFE TO ARCHIVE

*These files represent one-time history, audits, and migrations. They should be moved to a `docs/archive/` or `tools/archive/` structure rather than outright deleted.*

| File | Action | Evidence | Confidence |
|---|---|---|---|
| `ai_curation.py`, `copy_final_images.py`, `detect_duplicates.py`, `generate_contact_sheets.py`, `generate_gallery_ts.py`, `generate_md_artifact.py`, `init_pass2.py`, `review_server.py`, `validate_pass1.py`, `validate_pass2.py`, `generate_curation_v2.py`, `simulate_curation.py` | Archive to `tools/archive/` | One-time curation logic from legacy migration. Not required for website runtime or standard development. | HIGH |
| `apply-minor-fixes.mjs`, `refactor-imports.js`, `refactor-imports.mjs`, `refactor-utils.mjs`, `audit-assets.mjs`, `audit-codebase.mjs`, `build-asset-map.mjs`, `execute-phase-2b.mjs` | Archive to `tools/archive/` | Historical automated scripts used for code & asset cleanup. | HIGH |
| `FINAL_PHOTO_SELECTION.csv`, `FINAL_PHOTO_SELECTION.md`, `FINAL_SEMANTIC_ASSET_MAP.md`, `PROJECT_CLEANUP_REPORT.md`, `ASSET_RENAME_PROPOSAL.md`, `ASSET_MIGRATION_REPORT.md`, `ASSET_REFERENCE_VERIFICATION.md` | Archive to `docs/archive/` | Extremely valuable historical context regarding the curation process and our cleanup verification. Must be kept but separated from runtime docs. | HIGH |

## KEEP

| File / Package | Action | Evidence | Confidence |
|---|---|---|---|
| `react-dom` | Keep | A foundational React library, explicitly used in `src/main.tsx` (`react-dom/client`). | HIGH |
| `oxlint` | Keep | Used actively by development tooling (`pnpm run lint`). Present in `devDependencies`. | HIGH |
| Current routing architecture in `src/App.tsx` | Keep | Active route map successfully verified: `/` (Home), `/profil` (Profil), `/pemerintahan` (Pemerintahan), `/galeri` (Galeri), `/kkn` (KKN). Redirects handle legacy paths. | HIGH |

## NEEDS REVIEW

*Files with ambiguous usage, wait for manual developer confirmation.*

| File | Action | Evidence | Confidence |
|---|---|---|---|
| None at this moment. | N/A | All flagged items have been manually resolved into Delete, Archive, or Keep via strict grep scanning. | N/A |

---

### Asset Safety Status
**CONFIRMED AS UNTOUCHED IN THIS PLAN:**
- 50 curated photographs
- 13 AI Generated assets
- 1 SVG structural asset
- 1 Unknown/legacy asset
*(No deletion or move planned for `public/images/`)*

### Documentation Strategy
A new proposed structure to maintain clarity:
\`\`\`
docs/
├── README.md
├── architecture/
├── content/
├── design/
├── deployment/
└── archive/
    ├── migration/ (for python/migration scripts context)
    ├── audits/ (for cleanup reports)
    └── legacy/ (for old curation CSVs)
\`\`\`
