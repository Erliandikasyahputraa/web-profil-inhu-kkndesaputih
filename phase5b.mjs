import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // 1. Clamp Typography on mobile
    content = content.replace(/text-5xl sm:text-6xl md:text-7xl/g, 'text-4xl sm:text-5xl md:text-7xl');
    content = content.replace(/text-5xl md:text-6xl lg:text-7xl/g, 'text-4xl md:text-6xl lg:text-7xl');
    content = content.replace(/text-4xl md:text-5xl lg:text-\[4\.5rem\]/g, 'text-3xl md:text-5xl lg:text-[4.5rem]');
    content = content.replace(/text-4xl md:text-5xl lg:text-\[3\.5rem\]/g, 'text-3xl md:text-5xl lg:text-[3.5rem]');
    content = content.replace(/text-4xl md:text-5xl lg:text-\[4rem\]/g, 'text-3xl md:text-5xl lg:text-[4rem]');
    content = content.replace(/text-6xl sm:text-8xl md:text-9xl/g, 'text-5xl sm:text-7xl md:text-9xl');
    
    // 2. Vertical Rhythm / Remove excessive spacing
    // min-h-screen on mobile can be too tall, change to min-h-[70vh] where it makes sense, 
    // but honestly just removing it and relying on padding is better if it's not a hero.
    // Let's change min-h-screen to min-h-[70vh] md:min-h-screen for Heros.
    content = content.replace(/h-\[calc\(100svh-5rem\)\] md:h-\[calc\(100svh-6rem\)\]/g, 'h-[70svh] md:h-[calc(100svh-6rem)]');
    content = content.replace(/min-h-screen/g, 'min-h-[70vh] md:min-h-screen');
    
    // Reduce py-32 and py-24 on mobile
    content = content.replace(/py-32/g, 'py-16 md:py-32');
    content = content.replace(/py-24/g, 'py-16 md:py-24');
    content = content.replace(/py-40/g, 'py-20 md:py-40');
    // Deduplicate if already had md:
    content = content.replace(/md:py-16 md:py-32/g, 'md:py-32');
    content = content.replace(/md:py-16 md:py-24/g, 'md:py-24');

    // 6. Motion Standardization (Framer Motion)
    // Find y: 50 or y: 100 -> y: 12
    content = content.replace(/y:\s*50/g, 'y: 12');
    content = content.replace(/y:\s*100/g, 'y: 12');
    content = content.replace(/duration:\s*1(\.0)?/g, 'duration: 0.8');
    
    // 7. Editorial De-styling (Profil & Pemerintahan)
    // Remove heavy glassmorphism cards and use borders
    content = content.replace(/bg-white\/5 backdrop-blur-sm rounded-2xl p-8 border border-white\/10 hover:bg-white\/10 transition-colors/g, 'border-t border-white/20 pt-6');
    content = content.replace(/bg-white p-4 md:p-8 rounded-sm shadow-sm border border-stone-100/g, 'border-t border-stone-200 pt-8');
    
    // 4. Image Proportion control (Home & KKN)
    // Supporting images shouldn't be w-full h-full on mobile
    if (file.includes('Scene') || file.includes('Kkn')) {
        content = content.replace(/className="w-full h-full object-cover"/g, 'className="w-full h-[50vh] md:h-full object-cover"');
    }

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated: ${file}`);
    }
});

console.log("Phase 5B automated polish complete.");
