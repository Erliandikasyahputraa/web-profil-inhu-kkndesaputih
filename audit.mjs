import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const stats = {
  text: 0,
  gap: 0,
  flex: 0,
  grid: 0,
  maxW: 0,
  leading: 0,
  tracking: 0,
  paddingMargin: 0,
  space: 0,
};

walkDir('src/features/home/sections', (filePath) => {
  if (!filePath.endsWith('.tsx')) return;
  const content = fs.readFileSync(filePath, 'utf-8');
  
  stats.text += (content.match(/\btext-[a-z0-9-]+\b/g) || []).length;
  stats.gap += (content.match(/\bgap-[a-z0-9-]+\b/g) || []).length;
  stats.flex += (content.match(/\bflex\b/g) || []).length;
  stats.flex += (content.match(/\bflex-[a-z0-9-]+\b/g) || []).length; // flex-col, flex-row
  stats.grid += (content.match(/\bgrid\b/g) || []).length;
  stats.grid += (content.match(/\bgrid-cols-[0-9]+\b/g) || []).length;
  stats.maxW += (content.match(/\bmax-w-[a-z0-9-]+\b/g) || []).length;
  stats.leading += (content.match(/\bleading-[a-z0-9-]+\b/g) || []).length;
  stats.tracking += (content.match(/\btracking-[a-z0-9-]+\b/g) || []).length;
  stats.paddingMargin += (content.match(/\b(pt|pb|py|mt|mb|my)-[a-z0-9-]+\b/g) || []).length;
  stats.space += (content.match(/\bspace-(x|y)-[a-z0-9-]+\b/g) || []).length;
});

console.log(JSON.stringify(stats, null, 2));
