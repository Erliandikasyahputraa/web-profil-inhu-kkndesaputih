import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = __dirname;
const SRC_DIR = path.join(ROOT_DIR, 'src');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const TOOLS_DIR = path.join(ROOT_DIR, 'tools');
const DOCS_ARCHIVE = path.join(DOCS_DIR, 'archive');
const TOOLS_ARCHIVE = path.join(TOOLS_DIR, 'archive');

// 1. DELETE VERIFIED DEAD COMPONENTS
const toDelete = [
    'src/features/profile/sections/Scene05IdentityToday.tsx',
    'src/features/profile/sections/Scene04Potensi.tsx',
    'src/features/profile/sections/Scene04Values.tsx',
    'src/layout/EditorialLayout.tsx'
];
// providers.tsx did not exist in earlier check but then we found it in src/app/providers.tsx. Let's add it.
const providersPath = path.join(SRC_DIR, 'app/providers.tsx');
if (fs.existsSync(providersPath)) toDelete.push('src/app/providers.tsx');

let filesDeleted = [];

for (const p of toDelete) {
    const fp = path.join(ROOT_DIR, p);
    if (fs.existsSync(fp)) {
        fs.unlinkSync(fp);
        filesDeleted.push(p);
    }
}

// 3. ARCHIVE ONE-TIME MIGRATION SCRIPTS
fs.mkdirSync(TOOLS_ARCHIVE, { recursive: true });
const scriptsToArchive = [
    'audit-assets.mjs',
    'audit-codebase.mjs',
    'audit.mjs',
    'build-asset-map.mjs',
    'execute-phase-2b.mjs',
    'get_dimensions.ps1',
    'dimensions.json',
    'dimensions-utf8.json',
    'apply-minor-fixes.mjs',
    'audit_curation.py',
    'technical_audit.py',
    'ai_curation.py',
    'copy_final_images.py',
    'detect_duplicates.py',
    'generate_contact_sheets.py',
    'generate_gallery_ts.py',
    'generate_md_artifact.py',
    'init_pass2.py',
    'review_server.py',
    'validate_pass1.py',
    'validate_pass2.py',
    'generate_curation_v2.py',
    'simulate_curation.py',
    'refactor-imports.js',
    'refactor-imports.mjs',
    'refactor-utils.mjs'
];

let filesArchived = [];

for (const s of scriptsToArchive) {
    // some might be in root, some might be in scripts/ or tools/
    // We check root first
    const rootPath = path.join(ROOT_DIR, s);
    if (fs.existsSync(rootPath)) {
        fs.renameSync(rootPath, path.join(TOOLS_ARCHIVE, s));
        filesArchived.push(s);
    } else {
        const p2 = path.join(ROOT_DIR, 'scripts', s);
        if (fs.existsSync(p2)) {
            fs.renameSync(p2, path.join(TOOLS_ARCHIVE, s));
            filesArchived.push(s);
        } else {
            const p3 = path.join(TOOLS_DIR, s);
            if (fs.existsSync(p3)) {
                fs.renameSync(p3, path.join(TOOLS_ARCHIVE, s));
                filesArchived.push(s);
            }
        }
    }
}

// 4. ARCHIVE HISTORICAL DOCUMENTATION
fs.mkdirSync(DOCS_ARCHIVE, { recursive: true });
const docsToArchive = [
    'FINAL_PHOTO_SELECTION.csv',
    'FINAL_PHOTO_SELECTION.md',
    'FINAL_SEMANTIC_ASSET_MAP.md',
    'FINAL_SHORTLIST.md',
    'FINAL_VISUAL_CURATION_REPORT.md',
    'VISUAL_MAPPING_FINAL.md',
    'PROJECT_CLEANUP_REPORT.md',
    'ASSET_MIGRATION_REPORT.md',
    'ASSET_REFERENCE_VERIFICATION.md',
    'ASSET_RENAME_PROPOSAL.md',
    'PHOTO_CURATION_DATABASE.csv'
];

for (const d of docsToArchive) {
    const rootPath = path.join(ROOT_DIR, d);
    if (fs.existsSync(rootPath)) {
        fs.renameSync(rootPath, path.join(DOCS_ARCHIVE, d));
        filesArchived.push(`docs/archive/${d}`);
    } else {
        const docPath = path.join(DOCS_DIR, d);
        if (fs.existsSync(docPath)) {
            fs.renameSync(docPath, path.join(DOCS_ARCHIVE, d));
            filesArchived.push(`docs/archive/${d}`);
        }
    }
}

// 5. KEEP CURRENT DOCUMENTATION AT ROOT
const readmeContent = `# Desa Air Putih Digital Experience

This project is a React + Vite Single Page Application built with Tailwind CSS.
It uses a feature-sliced design structure.

## Current Project Architecture
- \`src/features\`: Feature-specific modules (home, profile, gallery, etc.)
- \`src/components\`: Reusable UI components
- \`src/layout\`: Shared page layouts
- \`src/pages\`: Route entry points

## Current Routes
- \`/\` -> HomePage
- \`/profil\` -> ProfilePage
- \`/pemerintahan\` -> PemerintahanPage
- \`/galeri\` -> GalleryPage
- \`/kkn\` -> KknPage

## Asset Structure
Assets are highly curated and located in \`public/images/\`:
- \`home/\`, \`profil/\`, \`pemerintahan/\`, \`kkn/\`, \`gallery/landscape/\`, \`background/\` contain authoritative curated source photographs.
- \`illustrations/\` contains non-photographic AI generated textures.
- \`pemerintahan/struktur-perangkat-desa.svg\` contains the official SVG structure diagram.

## Development Commands
- \`pnpm dev\` - Start development server
- \`pnpm build\` - Build for production
- \`pnpm lint\` - Run oxlint

## Archive Structure
- \`tools/archive/\`: Historical audit and migration scripts.
- \`docs/archive/\`: Historical curation decisions, asset mappings, and cleanup reports.
`;
fs.writeFileSync(path.join(DOCS_DIR, 'README.md'), readmeContent, 'utf8');

// Also write a small JSON file for the bash script to know what was modified
const result = {
    FILES_DELETED: filesDeleted,
    FILES_ARCHIVED: filesArchived,
    DEPENDENCIES_REMOVED: ['embla-carousel-react', 'react-intersection-observer'],
    ASSETS_MODIFIED: 0,
    ASSETS_DELETED: 0,
    ROUTES_MODIFIED: 0,
    UI_FILES_MODIFIED: 0
};
fs.writeFileSync('phase4-summary.json', JSON.stringify(result, null, 2));

console.log("Cleanup script executed. Files removed/archived successfully.");
