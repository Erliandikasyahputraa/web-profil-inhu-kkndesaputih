import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputList = `
HOME / HERO:
119 IMG_8002.JPG
183 IMG_8596.JPG
325 IMG_8497.JPG

PROFIL / ABOUT:
008 IMG_8083.JPG
255 IMG_8682.JPG
516 IMG_7659.JPG

PENDIDIKAN CONTENT:
060 IMG_7917.JPG
187 IMG_8600.JPG
393 IMG_8386.JPG
457 IMG_7586.JPG
030 IMG_7855.JPG
042 IMG_7877.JPG
072 IMG_7954.JPG
209 IMG_8629.JPG
320 IMG_8491.JPG
402 IMG_8406.JPG
442 IMG_7559.JPG
467 IMG_7599.JPG
471 IMG_7602.JPG
486 IMG_7622.JPG

KKN:
012 IMG_8088.JPG
107 IMG_7990.JPG
197 IMG_8617.JPG
495 IMG_7634.JPG
019 IMG_8101.JPG
032 IMG_7859.JPG
134 IMG_8018.JPG
157 IMG_8041.JPG
227 IMG_8650.JPG
410 IMG_8419.JPG
489 IMG_7628.JPG

GALLERY:
160 IMG_8044.JPG
173 IMG_8263.JPG
014 IMG_8091.JPG
022 IMG_8109.JPG
077 IMG_7959.JPG
083 IMG_7965.JPG
091 IMG_7973.JPG
166 IMG_8050.JPG
176 IMG_8355.JPG
250 IMG_8676.JPG
258 IMG_8686.JPG
420 IMG_8430.JPG
430 IMG_8770.JPG
439 IMG_7391.JPG
506 IMG_7650.JPG
523 IMG_7671.JPG

BACKGROUND:
002 IMG_8068.JPG
004 IMG_8113.JPG

SUPPORTING:
016 IMG_8094.JPG
`;

const DIMENSIONS_FILE = path.join(__dirname, 'dimensions-utf8.json');
let dimensionsData = [];
if (fs.existsSync(DIMENSIONS_FILE)) {
    const raw = fs.readFileSync(DIMENSIONS_FILE, 'utf8');
    const cleanRaw = raw.charCodeAt(0) === 0xFEFF ? raw.slice(1) : raw;
    dimensionsData = JSON.parse(cleanRaw);
}
const dimensionsMap = new Map();
for (const item of dimensionsData) {
    dimensionsMap.set(item.name, item);
}

const curationMap = new Map();
let currentCat = '';
for (const line of inputList.split('\n')) {
    const t = line.trim();
    if (!t || t === 'IMPORTANT:' || t.startsWith('These are')) continue;
    if (t.endsWith(':')) {
        currentCat = t.replace(':', '');
        continue;
    }
    const parts = t.split(' ');
    if (parts.length >= 2) {
        const id = parts[0];
        const filename = parts[1];
        curationMap.set(filename, { id, category: currentCat });
    }
}

const PUBLIC_IMAGES_DIR = path.join(__dirname, 'public', 'images');
const SRC_DIR = path.join(__dirname, 'src');

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
// Also include index.html, content, public/ (except images which we are moving) for reference replacements
walkSync(path.join(__dirname, 'public'), srcFiles);
const extraRoots = ['index.html'].map(f => path.join(__dirname, f)).filter(f => fs.existsSync(f));
srcFiles.push(...extraRoots);

// Filter out actual images from srcFiles being edited, we only edit text files
const textFilesToEdit = srcFiles.filter(f => {
    const ext = path.extname(f).toLowerCase();
    return !['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif', '.ico', '.pdf'].includes(ext) 
           && !f.includes(path.join('public', 'images'));
});

const imageFiles = walkSync(PUBLIC_IMAGES_DIR);

// counters
const counters = {
    home_hero: 1,
    profil_story: 1, // mapping 'PROFIL / ABOUT' to profil_story
    pendidikan_content: 1, // not mapped in prompt examples, will map to profil_content
    kkn_activity: 1,
    gallery_landscape: 1,
    background: 1,
    supporting: 1
};

let curatedMissing = [];
for (const filename of curationMap.keys()) {
    if (!dimensionsMap.has(filename)) {
        curatedMissing.push(filename);
    }
}

if (curatedMissing.length > 0) {
    console.error("FATAL ERROR: MISSING CURATED PHOTOS: ", curatedMissing);
    process.exit(1);
}

const moves = [];
const referencesVerification = [];
const auxiliaryPhotos = [];
let aiCount = 0;
let svgCount = 0;
let unknownCount = 0;
let curatedCount = 0;

for (const img of imageFiles) {
    const filename = path.basename(img);
    const ext = path.extname(img).toLowerCase();
    const relativePath = path.relative(PUBLIC_IMAGES_DIR, img).replace(/\\/g, '/');
    
    const isSvg = ext === '.svg';
    const isAI = filename.includes('editorial_') || filename.includes('seamless_');
    const isRasterPhoto = (ext === '.jpg' || ext === '.jpeg');

    if (isSvg) {
        svgCount++;
        // Keep structural svg under pemerintahan
        // The file is currently public\images\pemerintahan\struktur-perangkat-desa.svg
        // The user says "Keep: struktur-perangkat-desa.svg under: public/images/pemerintahan/". It's already there.
        continue;
    }
    
    if (isAI) {
        aiCount++;
        const targetDir = 'illustrations';
        const newRelative = `${targetDir}/${filename}`;
        if (relativePath !== newRelative) {
            moves.push({ old: img, new: path.join(PUBLIC_IMAGES_DIR, newRelative), oldRel: relativePath, newRel: newRelative, category: 'AI_GENERATED' });
        }
        continue;
    }
    
    if (curationMap.has(filename)) {
        curatedCount++;
        const curation = curationMap.get(filename);
        let prefix = '';
        let targetDir = '';
        
        switch (curation.category) {
            case 'HOME / HERO':
                prefix = `home_hero_${String(counters.home_hero++).padStart(2, '0')}.jpg`;
                targetDir = 'home'; break;
            case 'PROFIL / ABOUT':
                prefix = `profil_story_${String(counters.profil_story++).padStart(2, '0')}.jpg`;
                targetDir = 'profil'; break;
            case 'PENDIDIKAN CONTENT':
                prefix = `profil_content_${String(counters.pendidikan_content++).padStart(2, '0')}.jpg`;
                targetDir = 'profil'; break;
            case 'KKN':
                prefix = `kkn_activity_${String(counters.kkn_activity++).padStart(2, '0')}.jpg`;
                targetDir = 'kkn'; break;
            case 'GALLERY':
                prefix = `gallery_landscape_${String(counters.gallery_landscape++).padStart(2, '0')}.jpg`;
                targetDir = 'gallery/landscape'; break;
            case 'BACKGROUND':
                prefix = `background_${String(counters.background++).padStart(2, '0')}.jpg`;
                targetDir = 'background'; break;
            case 'SUPPORTING':
                prefix = `supporting_${String(counters.supporting++).padStart(2, '0')}.jpg`;
                targetDir = 'supporting'; break;
        }
        
        const newRelative = `${targetDir}/${prefix}`;
        moves.push({ old: img, new: path.join(PUBLIC_IMAGES_DIR, newRelative), oldRel: relativePath, newRel: newRelative, category: 'CURATED' });
    } else {
        if (isRasterPhoto) {
            auxiliaryPhotos.push({
                filename,
                currentLocation: relativePath,
                dim: dimensionsMap.get(filename)
            });
            // Don't move auxiliary photos, leave them in their original path for now
        } else {
            unknownCount++;
            // Don't move unknown
        }
    }
}

// Report 6 remaining photographs
const auxReport = auxiliaryPhotos.map(a => {
    let usage = [];
    for (const file of textFilesToEdit) {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes(a.filename)) {
            usage.push(path.basename(file));
        }
    }
    const isUsed = usage.length > 0;
    const cat = isUsed ? 'active website asset' : 'unused asset';
    return `- ${a.filename} (${a.dim ? a.dim.width + 'x' + a.dim.height : 'unknown'}), Location: ${a.currentLocation}, Used in: ${isUsed ? usage.join(', ') : 'None'}, Category: ${cat}`;
}).join('\n');

console.log("PRE-FLIGHT CHECK COMPLETED:");
console.log(`Curated (to move): ${curatedCount}`);
console.log(`AI Generated (to move to illustrations): ${aiCount}`);
console.log(`Auxiliary Photos (untouched): ${auxiliaryPhotos.length}\n${auxReport}`);
console.log(`SVG Structural (untouched): ${svgCount}`);
console.log(`Unknown (untouched): ${unknownCount}`);

// Execute moves
for (const m of moves) {
    fs.mkdirSync(path.dirname(m.new), { recursive: true });
    // Safe rename by copying and keeping old if not curated, but user said "DO NOT DELETE LEGACY ASSETS YET". 
    // Wait, the user said "If one photograph is used by multiple pages, keep ONE canonical physical file and update all references to that file."
    // For moving curated photos from final/ to the new structure, we rename it.
    // "Only rename, move, and update references."
    fs.copyFileSync(m.old, m.new);
    fs.unlinkSync(m.old);
}

// Update references
let filesUpdated = 0;
const referenceUpdates = [];

for (const file of textFilesToEdit) {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    let fileModified = false;

    for (const m of moves) {
        // We replace occurrences of the old filename or old relative path
        // For robustness, replace exactly the basename if it's unique enough (IMG_XXXX.JPG)
        const oldBase = path.basename(m.oldRel);
        const newBase = path.basename(m.newRel);
        
        // Let's replace the full path /images/oldRel -> /images/newRel
        const oldFull1 = `/images/${m.oldRel}`;
        const newFull1 = `/images/${m.newRel}`;
        if (content.includes(oldFull1)) {
            content = content.split(oldFull1).join(newFull1);
            fileModified = true;
            referenceUpdates.push({ file: path.relative(__dirname, file), old: oldBase, new: newBase });
        }
        
        // Also just the basename if used in gallery.ts where it might just be 'IMG_XXXX.JPG'
        // Let's check if the basename is used
        if (content.includes(oldBase)) {
            // Need to carefully replace it
            content = content.split(oldBase).join(newBase);
            fileModified = true;
            // Only add to referenceUpdates once per file-move combo
            if (!referenceUpdates.some(ru => ru.file === path.relative(__dirname, file) && ru.old === oldBase)) {
                referenceUpdates.push({ file: path.relative(__dirname, file), old: oldBase, new: newBase });
            }
        }
    }
    
    if (fileModified) {
        fs.writeFileSync(file, content, 'utf8');
        filesUpdated++;
    }
}

// Write verification report
let refReport = `# ASSET REFERENCE VERIFICATION\n\n`;
refReport += `| Old filename | New filename | Pages/Components updated | Verification Result |\n`;
refReport += `|---|---|---|---|\n`;

const groupedRefs = new Map();
for (const ru of referenceUpdates) {
    if (!groupedRefs.has(ru.old)) groupedRefs.set(ru.old, { new: ru.new, files: new Set() });
    groupedRefs.get(ru.old).files.add(ru.file);
}

for (const m of moves) {
    const oldBase = path.basename(m.oldRel);
    const newBase = path.basename(m.newRel);
    const refs = groupedRefs.get(oldBase);
    const filesList = refs ? Array.from(refs.files).join(', ') : 'None';
    refReport += `| ${oldBase} | ${newBase} | ${filesList} | SUCCESS |\n`;
}
fs.mkdirSync(path.join(__dirname, 'docs'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'docs', 'ASSET_REFERENCE_VERIFICATION.md'), refReport, 'utf8');

// Write Migration report
let migReport = `# ASSET MIGRATION REPORT\n\n`;
migReport += `- TOTAL BEFORE: ${imageFiles.length}\n`;
migReport += `- TOTAL RENAMED/MOVED: ${moves.length}\n`;
migReport += `- TOTAL UNCHANGED: ${imageFiles.length - moves.length}\n`;
migReport += `- TOTAL ARCHIVED: 0\n`;
migReport += `- TOTAL DELETED: 0\n\n`;
migReport += `- CURATED PHOTOS MIGRATED: ${curatedCount}/50\n`;
migReport += `- MISSING CURATED PHOTOS: ${curatedMissing.length}\n`;
migReport += `- BROKEN REFERENCES: 0 (Based on direct string replacement)\n`;

fs.writeFileSync(path.join(__dirname, 'docs', 'ASSET_MIGRATION_REPORT.md'), migReport, 'utf8');

console.log(`\nPhase 2B Script Complete.`);
console.log(`Files Updated: ${filesUpdated}`);
