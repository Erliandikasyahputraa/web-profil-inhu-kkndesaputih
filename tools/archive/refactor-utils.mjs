import fs from 'fs';
import path from 'path';

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

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  
  content = content.replace(/from\s+['"](?:\.\.\/)+lib\/utils['"]/g, "from '@/lib/utils'");
  content = content.replace(/from\s+['"](?:\.\.\/)+constants\/routes['"]/g, "from '@/constants/routes'");
  content = content.replace(/from\s+['"](?:\.\.\/)+content\/layout\/footer['"]/g, "from '@/content/layout/footer'");
  
  // also for internal component cross-imports (like `../typography`) inside `src/components`
  // if it's importing a module from components
  content = content.replace(/from\s+['"](?:\.\.\/)+(ui|typography|motion|navigation|layout|common)['"]/g, "from '@/components/$1'");
  
  content = content.replace(/from\s+['"]\.\.\/ui\/Container['"]/g, "from '@/components/ui'");
  content = content.replace(/from\s+['"]\.\.\/typography['"]/g, "from '@/components/typography'");

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated:', file);
  }
});
