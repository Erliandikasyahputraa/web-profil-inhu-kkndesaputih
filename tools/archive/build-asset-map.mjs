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

// Generate counters for semantic naming
const counters = {
    home_hero: 1,
    profil_about: 1,
    pendidikan_content: 1,
    kkn: 1,
    gallery: 1,
    background: 1,
    supporting: 1
};

let output = `# FINAL SEMANTIC ASSET MAP\n\n`;
output += `| Current filename | New filename | Category | Page | Role | Original orientation | Curation decision | Confidence |\n`;
output += `|---|---|---|---|---|---|---|---|\n`;

let curatedCount = 0;
let auxiliaryCount = 0;
let aiCount = 0;
let svgCount = 0;
let unknownCount = 0;

for (const item of dimensionsData) {
    const filename = item.name;
    const isSvg = filename.endsWith('.svg');
    const isAI = filename.includes('editorial_') || filename.includes('seamless_');
    
    if (isSvg) {
        svgCount++;
        output += `| ${filename} | UNCHANGED | SVG | Pemerintahan | Structure | Square | Source Component | HIGH |\n`;
        continue;
    }
    
    if (isAI) {
        aiCount++;
        output += `| ${filename} | UNCHANGED | AI GENERATED / GRAPHIC | N/A | Texture/Illustration | ${item.orientation} | Archived / Unused | LOW |\n`;
        continue;
    }
    
    if (curationMap.has(filename)) {
        curatedCount++;
        const curation = curationMap.get(filename);
        let prefix = '';
        let page = '';
        let role = '';
        
        switch (curation.category) {
            case 'HOME / HERO':
                prefix = `home_hero_${String(counters.home_hero++).padStart(2, '0')}.jpg`;
                page = 'Home'; role = 'Hero'; break;
            case 'PROFIL / ABOUT':
                prefix = `profil_about_${String(counters.profil_about++).padStart(2, '0')}.jpg`;
                page = 'Profil'; role = 'About'; break;
            case 'PENDIDIKAN CONTENT':
                prefix = `pendidikan_content_${String(counters.pendidikan_content++).padStart(2, '0')}.jpg`;
                page = 'Pendidikan / Profil'; role = 'Content'; break;
            case 'KKN':
                prefix = `kkn_activity_${String(counters.kkn++).padStart(2, '0')}.jpg`;
                page = 'KKN'; role = 'Activity'; break;
            case 'GALLERY':
                prefix = `gallery_landscape_${String(counters.gallery++).padStart(2, '0')}.jpg`;
                page = 'Gallery'; role = 'Landscape'; break;
            case 'BACKGROUND':
                prefix = `background_${String(counters.background++).padStart(2, '0')}.jpg`;
                page = 'Global'; role = 'Background'; break;
            case 'SUPPORTING':
                prefix = `supporting_${String(counters.supporting++).padStart(2, '0')}.jpg`;
                page = 'Global'; role = 'Supporting'; break;
        }
        
        output += `| ${filename} | ${prefix} | ${curation.category} | ${page} | ${role} | ${item.orientation} | FINAL_PHOTO_SELECTION (${curation.id}) | HIGH |\n`;
    } else {
        // Photograph but not in curation list
        if (filename.match(/^IMG_\d+\.JPG$/i) || filename.match(/^DSC_\d+\.JPG$/i)) {
            auxiliaryCount++;
            output += `| ${filename} | UNCHANGED | UNKNOWN (Photographic) | UNKNOWN | UNKNOWN | ${item.orientation} | NOT FOUND | LOW |\n`;
        } else {
            unknownCount++;
            output += `| ${filename} | UNCHANGED | UNKNOWN | UNKNOWN | UNKNOWN | ${item.orientation} | NOT FOUND | LOW |\n`;
        }
    }
}

const REPORT_FILE = path.join(__dirname, 'docs', 'FINAL_SEMANTIC_ASSET_MAP.md');
fs.mkdirSync(path.dirname(REPORT_FILE), { recursive: true });
fs.writeFileSync(REPORT_FILE, output, 'utf8');

console.log("FINAL_SEMANTIC_ASSET_MAP generated.");
console.log(`- ${curatedCount} curated photos mapped`);
console.log(`- ${auxiliaryCount} additional/auxiliary photos identified`);
console.log(`- ${aiCount} AI-generated assets`);
console.log(`- ${svgCount} SVG structural asset`);
console.log(`- ${unknownCount} unknown assets remaining`);
