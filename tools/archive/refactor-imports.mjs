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
let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  
  // Refactor relative paths to components
  content = content.replace(/from\s+['"](?:\.\.\/)+components(?:\/[a-zA-Z0-9_-]+)*['"]/g, "from '@/components'");
  
  // Also refactor any components internal deep imports? 
  // e.g. import { ... } from '../typography' inside components/ui
  // But wait, the instruction was mainly for features importing components.
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    changedCount++;
    console.log('Updated:', file);
  }
});

console.log(`Updated imports in ${changedCount} files.`);
