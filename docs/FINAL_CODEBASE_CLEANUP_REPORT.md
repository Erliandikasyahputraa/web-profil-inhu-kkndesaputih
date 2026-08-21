# FINAL CODEBASE CLEANUP REPORT

## Project Architecture
- React + Vite Single Page Application
- Tailwind CSS for styling
- Feature-sliced design (src/features, src/components, src/layout)

## Active Routes
- *

## Active Layouts
- MainLayout (Standard layout with Navbar and Footer)
- EditorialLayout (If still in use, though checked earlier as kept)

## Active Pages
- Home
- Profil
- Geografi
- Pemerintahan
- Potensi
- Informasi
- Galeri
- KKN

## Active Components
- Various modular UI components in src/components and src/features.

## SAFE TO DELETE
| File | Evidence | Confidence |
|---|---|---|
| src\features\profile\sections\Scene05IdentityToday.tsx | No imports found. Previously flagged as safe to delete. | HIGH |

## LEGACY / ARCHIVE
| File | Reason |
|---|---|
| audit_curation.py | One-time migration/audit script |
| technical_audit.py | One-time migration/audit script |
| audit-assets.mjs | One-time migration/audit script |
| audit-codebase.mjs | One-time migration/audit script |
| audit.mjs | One-time migration/audit script |
| build-asset-map.mjs | One-time migration/audit script |
| execute-phase-2b.mjs | One-time migration/audit script |
| get_dimensions.ps1 | One-time migration/audit script |
| docs/ATTENTION_MAP.md | Previous migration report / superseded map |
| docs/CROSS_BROWSER_REPORT.md | Previous migration report / superseded map |
| docs/FINAL_ACCESSIBILITY_REPORT.md | Previous migration report / superseded map |
| docs/FINAL_DEPLOYMENT_CHECKLIST.md | Previous migration report / superseded map |
| docs/FINAL_PERFORMANCE_REPORT.md | Previous migration report / superseded map |
| docs/FINAL_QA_REPORT.md | Previous migration report / superseded map |
| docs/HARDENING_REPORT.md | Previous migration report / superseded map |
| docs/IMPLEMENTATION_ROADMAP_RC4.md | Previous migration report / superseded map |
| docs/SMOKE_TEST_REPORT.md | Previous migration report / superseded map |
| docs/ASSET_MIGRATION_REPORT.md | Previous migration report / superseded map |
| docs/ASSET_RENAME_PROPOSAL.md | Previous migration report / superseded map |
| docs/FINAL_PHOTO_SELECTION.csv | Previous migration report / superseded map |
| docs/FINAL_PHOTO_SELECTION.md | Previous migration report / superseded map |
| docs/FINAL_SEMANTIC_ASSET_MAP.md | Previous migration report / superseded map |
| docs/FINAL_SHORTLIST.md | Previous migration report / superseded map |
| docs/FINAL_VISUAL_CURATION_REPORT.md | Previous migration report / superseded map |
| docs/PASS_1_REPORT.md | Previous migration report / superseded map |
| docs/PROJECT_CLEANUP_REPORT.md | Previous migration report / superseded map |
| docs/VISUAL_MAPPING_FINAL.md | Previous migration report / superseded map |
| docs/VISUAL_MAPPING_TEMPLATE.md | Previous migration report / superseded map |

## NEEDS REVIEW
| File | Reason |
|---|---|
| src\app\providers.tsx | No direct imports found via static scan. Might be dynamically imported or unused. |
| src\features\profile\sections\Scene04Potensi.tsx | No direct imports found via static scan. Might be dynamically imported or unused. |
| src\features\profile\sections\Scene04Values.tsx | No direct imports found via static scan. Might be dynamically imported or unused. |
| src\layout\EditorialLayout.tsx | No direct imports found via static scan. Might be dynamically imported or unused. |

## KEEP
- src/App.tsx, src/main.tsx
- Core configuration (vite.config.ts, tailwind.config.js, tsconfig.json)
- Curated Assets

## Potential Unused Dependencies
| Package | Evidence | Confidence |
|---|---|---|
| embla-carousel-react | No import found in src/ | MEDIUM |
| react-dom | No import found in src/ | MEDIUM |
| react-intersection-observer | No import found in src/ | MEDIUM |
| oxlint | No import found in src/ | MEDIUM |

## Temporary / One-Time Scripts
| File | Purpose | Status |
|---|---|---|
| ai_curation.py | Unknown/Dev | NEEDS_REVIEW |
| audit_curation.py | Audit/Migration | LEGACY_ARCHIVE |
| copy_final_images.py | Unknown/Dev | NEEDS_REVIEW |
| detect_duplicates.py | Unknown/Dev | NEEDS_REVIEW |
| generate_contact_sheets.py | Unknown/Dev | NEEDS_REVIEW |
| generate_gallery_ts.py | Unknown/Dev | NEEDS_REVIEW |
| generate_md_artifact.py | Unknown/Dev | NEEDS_REVIEW |
| init_pass2.py | Unknown/Dev | NEEDS_REVIEW |
| review_server.py | Unknown/Dev | NEEDS_REVIEW |
| technical_audit.py | Audit/Migration | LEGACY_ARCHIVE |
| validate_pass1.py | Unknown/Dev | NEEDS_REVIEW |
| validate_pass2.py | Unknown/Dev | NEEDS_REVIEW |
| generate_curation_v2.py | Unknown/Dev | NEEDS_REVIEW |
| simulate_curation.py | Unknown/Dev | NEEDS_REVIEW |
| apply-minor-fixes.mjs | Unknown/Dev | NEEDS_REVIEW |
| audit-assets.mjs | Audit/Migration | LEGACY_ARCHIVE |
| audit-codebase.mjs | Audit/Migration | LEGACY_ARCHIVE |
| audit.mjs | Audit/Migration | LEGACY_ARCHIVE |
| build-asset-map.mjs | Audit/Migration | LEGACY_ARCHIVE |
| execute-phase-2b.mjs | Audit/Migration | LEGACY_ARCHIVE |
| get_dimensions.ps1 | Audit/Migration | LEGACY_ARCHIVE |
| refactor-imports.js | Unknown/Dev | NEEDS_REVIEW |
| refactor-imports.mjs | Unknown/Dev | NEEDS_REVIEW |
| refactor-utils.mjs | Unknown/Dev | NEEDS_REVIEW |

## Documentation Cleanup
The `docs/` directory contains several legacy audit reports (`PROJECT_CLEANUP_REPORT.md`, `ASSET_RENAME_PROPOSAL.md`, `ASSET_MIGRATION_REPORT.md`, `ASSET_REFERENCE_VERIFICATION.md`, `FINAL_SEMANTIC_ASSET_MAP.md`). Since the migration is now finalized, these reports can be consolidated into a single `MIGRATION_ARCHIVE.md` or kept as-is in a legacy folder.

## Asset Status
Confirm:
- 50 curated photos (Verified in public/images)
- 13 AI assets (Verified in public/images/illustrations)
- 1 SVG (Verified in public/images/pemerintahan)
- 1 unknown/legacy asset (Verified in public/images)

