import fs from 'fs';
import path from 'path';

const COMPONENT_MAP = {
  // ui
  AppIcon: 'ui',
  Button: 'ui',
  Container: 'ui',
  EditorialImage: 'ui',
  EditorialStats: 'ui',
  PullQuote: 'ui',
  Section: 'ui',
  SectionHeader: 'ui',
  // typography
  Display: 'typography',
  Heading: 'typography',
  Lead: 'typography',
  Body: 'typography',
  Overline: 'typography',
  Caption: 'typography',
  // motion
  FadeIn: 'motion',
  Reveal: 'motion',
  Parallax: 'motion',
  // common
  ErrorBoundary: 'common',
  PageMetadata: 'common',
  // navigation
  Navbar: 'navigation',
  // layout
  Footer: 'layout',
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Convert any remaining deep relative imports (e.g. `../../../lib/utils`, `../constants/routes`)
  // First, convert relative to absolute for `lib`, `content`, `types`, `hooks`, `constants`, `layout`
  // Actually, we can use a regex to catch `import ... from '.*'`.
  content = content.replace(/from\s+['"]((?:\.\.\/)+)(lib|content|types|hooks|constants|layout|components)(.*?)['"]/g, "from '@/$2$3'");

  // 2. Split `import { X, Y } from '@/components'` into separate domain imports
  const componentImportRegex = /import\s+\{([^}]+)\}\s+from\s+['"]@\/components['"]/g;
  
  content = content.replace(componentImportRegex, (match, importsStr) => {
    const imports = importsStr.split(',').map(s => s.trim()).filter(Boolean);
    const grouped = {};
    
    imports.forEach(imp => {
      const name = imp.split(' as ')[0].trim();
      const domain = COMPONENT_MAP[name];
      if (domain) {
        if (!grouped[domain]) grouped[domain] = [];
        grouped[domain].push(imp);
      } else {
        // Fallback if not found
        if (!grouped['unknown']) grouped['unknown'] = [];
        grouped['unknown'].push(imp);
      }
    });

    let newImports = [];
    for (const [domain, items] of Object.entries(grouped)) {
      if (domain === 'unknown') {
        newImports.push(`import { ${items.join(', ')} } from '@/components'`);
      } else {
        newImports.push(`import { ${items.join(', ')} } from '@/components/${domain}'`);
      }
    }
    return newImports.join('\n');
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    changedCount++;
  }
});

console.log(`Updated imports in ${changedCount} files.`);
