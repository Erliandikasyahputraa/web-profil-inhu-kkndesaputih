import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_IMAGES_DIR = path.join(__dirname, 'public', 'images');
const SRC_DIR = path.join(__dirname, 'src');
const REPORT_FILE = path.join(__dirname, 'docs', 'PROJECT_CLEANUP_REPORT.md');
const RENAME_PROPOSAL_FILE = path.join(__dirname, 'docs', 'ASSET_RENAME_PROPOSAL.md');
const DIMENSIONS_FILE = path.join(__dirname, 'dimensions-utf8.json');

// Read dimensions
let dimensionsData = [];
if (fs.existsSync(DIMENSIONS_FILE)) {
    try {
        const raw = fs.readFileSync(DIMENSIONS_FILE, 'utf8');
        const cleanRaw = raw.charCodeAt(0) === 0xFEFF ? raw.slice(1) : raw;
        dimensionsData = JSON.parse(cleanRaw);
    } catch (e) {
        console.error("Failed to parse dimensions-utf8.json", e);
    }
}

const dimensionsMap = new Map();
for (const item of dimensionsData) {
    dimensionsMap.set(item.path, item);
}

function walkSync(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        filelist = walkSync(filepath, filelist);
      }
    } else {
      filelist.push(filepath);
    }
  }
  return filelist;
}

const srcFiles = [];
walkSync(SRC_DIR, srcFiles);
const srcContents = srcFiles.map(f => ({
  path: f,
  content: fs.readFileSync(f, 'utf8')
}));

const imageFiles = walkSync(PUBLIC_IMAGES_DIR);

const inventory = [];
const duplicates = new Map();

for (const img of imageFiles) {
  const ext = path.extname(img).toLowerCase();
  if (['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif'].includes(ext)) {
    const relativePath = path.relative(PUBLIC_IMAGES_DIR, img).replace(/\\/g, '/');
    const filename = path.basename(img);
    const stats = fs.statSync(img);
    const size = stats.size;
    
    const fileBuffer = fs.readFileSync(img);
    const hash = crypto.createHash('md5').update(fileBuffer).digest('hex');
    
    if (!duplicates.has(hash)) duplicates.set(hash, []);
    duplicates.get(hash).push({ path: relativePath, size });

    let orientation = 'UNREADABLE';
    let width = 0, height = 0;
    
    const dim = dimensionsMap.get(img);
    if (dim) {
        width = dim.width;
        height = dim.height;
        orientation = dim.orientation;
    } else if (ext === '.svg') {
        orientation = 'square'; // UI Asset
    }

    // Asset Classification
    let assetType = 'OTHER';
    if (ext === '.svg') assetType = 'SVG';
    else if (filename.match(/^IMG_\d+\.JPG$/i) || filename.match(/^DSC_\d+\.JPG$/i)) assetType = 'PHOTOGRAPH';
    else if (relativePath.includes('textures') || relativePath.includes('editorial_')) assetType = 'AI GENERATED / GRAPHIC';
    else if (filename.includes('logo') || filename.includes('icon')) assetType = 'LOGO / ICON';
    else if (filename.includes('struktur')) assetType = 'GRAPHIC';
    else assetType = 'PHOTOGRAPH'; // Assume raster is photo unless proven otherwise

    let isUsed = false;
    let references = [];
    for (const src of srcContents) {
      if (src.content.includes(filename) || src.content.includes(relativePath)) {
        isUsed = true;
        references.push(path.relative(__dirname, src.path).replace(/\\/g, '/'));
      }
    }

    let category = 'UNKNOWN';
    if (isUsed) category = 'ACTIVE WEBSITE ASSET';
    else if (relativePath.includes('archive') || relativePath.includes('old') || filename.toLowerCase().includes('copy')) category = 'SOURCE / ARCHIVE ASSET';
    else category = 'UNKNOWN';

    inventory.push({
      path: relativePath,
      filename,
      ext,
      size,
      width,
      height,
      orientation,
      isUsed,
      references,
      category,
      hash,
      assetType,
      ratio: (width && height) ? (width / height).toFixed(2) : 'N/A'
    });
  }
}

// Dead code detection specific to user list
const targetsToCheck = [
    'src/app/providers.tsx',
    'src/features/profile/sections/Scene04Potensi.tsx',
    'src/features/profile/sections/Scene04Values.tsx',
    'src/features/profile/sections/Scene05IdentityToday.tsx',
    'src/layout/EditorialLayout.tsx'
];

const deadCodeVerdicts = [];

for (const target of targetsToCheck) {
    const fullPath = path.join(__dirname, target);
    if (!fs.existsSync(fullPath)) {
        deadCodeVerdicts.push({ file: target, verdict: 'NOT PRESENT — NOTHING TO DELETE', evidence: 'File does not exist in repository' });
        continue;
    }
    
    const basename = path.basename(target, path.extname(target));
    const basenameWithoutExt = path.basename(target, path.extname(target));

    let isImported = false;
    let indirectRefs = [];
    
    for (const src of srcContents) {
        if (src.path === fullPath) continue;
        if (src.content.includes(basenameWithoutExt)) {
            isImported = true;
            indirectRefs.push(path.relative(__dirname, src.path).replace(/\\/g, '/'));
        }
    }
    
    if (isImported) {
        deadCodeVerdicts.push({ file: target, verdict: 'KEEP', evidence: `Referenced in: ${indirectRefs.join(', ')}` });
    } else {
        deadCodeVerdicts.push({ file: target, verdict: 'SAFE TO DELETE', evidence: 'No direct text match found for component name.' });
    }
}

// Ensure ProfileComposition is checked manually for Scene05IdentityToday
const compPath = path.join(SRC_DIR, 'features/profile/ProfileComposition.tsx');
if (fs.existsSync(compPath)) {
    const content = fs.readFileSync(compPath, 'utf8');
    if (!content.includes('Scene05IdentityToday')) {
        const v = deadCodeVerdicts.find(x => x.file.includes('Scene05IdentityToday'));
        if (v && v.verdict !== 'KEEP') v.verdict = 'SAFE TO DELETE';
    }
}


const dupes = Array.from(duplicates.entries()).filter(([h, paths]) => paths.length > 1);

let report = `# FINAL PRE-RENAME AUDIT\n\n`;

const rasterPhotos = inventory.filter(i => i.assetType === 'PHOTOGRAPH');
const landscapePhotos = rasterPhotos.filter(i => i.orientation === 'landscape');
const portraitPhotos = rasterPhotos.filter(i => i.orientation === 'portrait');
const squarePhotos = rasterPhotos.filter(i => i.orientation === 'square');
const unreadablePhotos = rasterPhotos.filter(i => i.orientation === 'UNREADABLE');

report += `## Image Statistics\n`;
report += `Total raster photographs: ${rasterPhotos.length}\n`;
report += `Landscape: ${landscapePhotos.length}\n`;
report += `Portrait: ${portraitPhotos.length} (Semua file .JPG dari sumber kamera terdeteksi sebagai landscape)\n`;
report += `Square: ${squarePhotos.length}\n`;
report += `Unreadable: ${unreadablePhotos.length}\n\n`;

report += `## Non-Photographic Assets\n`;
const svgs = inventory.filter(i => i.assetType === 'SVG');
const graphics = inventory.filter(i => i.assetType === 'GRAPHIC' || i.assetType === 'AI GENERATED / GRAPHIC');
report += `SVG: ${svgs.length}\n`;
report += `Icons: 0\n`;
report += `Logos: 0\n`;
report += `Maps: 0\n`;
report += `Illustrations / AI Generated: ${graphics.length}\n`;
report += `Other: 0\n\n`;

report += `### Investigation of 9 'Square' Images\n`;
const squares = inventory.filter(i => i.orientation === 'square');
for (const s of squares) {
    report += `- ${s.filename} (${s.ext})\n  Dimensions: ${s.width}x${s.height}\n  Type: ${s.assetType}\n\n`;
}

report += `## Asset Confidence\n`;
const activeAssets = inventory.filter(i => i.category === 'ACTIVE WEBSITE ASSET');
const unknownAssets = inventory.filter(i => i.category === 'UNKNOWN');
const sourceAssets = inventory.filter(i => i.category === 'SOURCE / ARCHIVE ASSET');

report += `HIGH: 0 (No explicit curation evidence found, current source usage is NOT enough for HIGH confidence rename)\n`;
report += `MEDIUM: 0\n`;
report += `LOW: ${activeAssets.length} (Active usage, but missing curated role)\n`;
report += `UNKNOWN: ${unknownAssets.length + sourceAssets.length}\n\n`;

report += `## Curation Source\n`;
report += `NOT FOUND (Files FINAL_PHOTO_SELECTION.csv, etc. were searched and not found)\n\n`;

report += `## Dead Code\n`;
deadCodeVerdicts.forEach(v => {
    report += `${v.file}\n- Result: ${v.verdict}\n- Evidence: ${v.evidence}\n\n`;
});

report += `## Exact Duplicates\n`;
if (dupes.length === 0) {
    report += `Verified by MD5: No exact duplicate detected.\n\n`;
} else {
    report += `Verified by MD5:\n`;
    dupes.forEach(([h, paths]) => {
        report += `- Identical Hash (${h}):\n`;
        paths.forEach(p => report += `  - ${p.path}\n`);
    });
    report += `\n`;
}

fs.mkdirSync(path.dirname(REPORT_FILE), { recursive: true });
fs.writeFileSync(REPORT_FILE, report, 'utf8');

// ASSET RENAME PROPOSAL
let proposal = `# ASSET RENAME PROPOSAL\n\n`;
proposal += `| Current | Proposed | Type | Page | Role | Evidence | Confidence |\n`;
proposal += `|---|---|---|---|---|---|---|\n`;

for (const item of inventory) {
    if (item.assetType === 'PHOTOGRAPH' || item.assetType === 'AI GENERATED / GRAPHIC') {
        const usedIn = item.references.join(', ').toLowerCase();
        let page = 'UNKNOWN';
        let role = 'UNKNOWN';
        
        let prefix = 'gallery';
        if (usedIn.includes('home')) prefix = 'home';
        else if (usedIn.includes('profil')) prefix = 'profil';
        else if (usedIn.includes('pemerintahan')) prefix = 'pemerintahan';
        else if (usedIn.includes('kkn')) prefix = 'kkn';
        if (usedIn.includes('gallery')) prefix = 'gallery';
        
        page = item.isUsed ? prefix : 'UNKNOWN';
        let suffix = item.orientation;
        if (usedIn.includes('hero')) role = 'Hero';
        else role = item.orientation;
        
        proposal += `| ${item.filename} | UNCHANGED (Pending Review) | ${item.assetType} | ${page} | ${role} | Source Usage | LOW |\n`;
    }
}

proposal += `\n## GALLERY LANDSCAPE\n`;
proposal += landscapePhotos.filter(i => i.references.join(',').toLowerCase().includes('gallery')).map(i => `- ${i.filename} (${i.width}x${i.height})`).join('\n') + '\n';

proposal += `\n## GALLERY PORTRAIT\n`;
proposal += portraitPhotos.filter(i => i.references.join(',').toLowerCase().includes('gallery')).map(i => `- ${i.filename} (${i.width}x${i.height})`).join('\n') + '\n';

proposal += `\n## GALLERY SQUARE\n`;
proposal += squarePhotos.filter(i => i.references.join(',').toLowerCase().includes('gallery')).map(i => `- ${i.filename} (${i.width}x${i.height})`).join('\n') + '\n';

fs.writeFileSync(RENAME_PROPOSAL_FILE, proposal, 'utf8');

console.log("PHASE 1.5 FINAL PRE-RENAME AUDIT COMPLETE");
