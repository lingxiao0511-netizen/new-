import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Color mapping
const replacements = [
  // Dark gradient background → Light healing gradient
  [/bg-gradient-to-br from-\[#1a1a2e\] via-\[#16213e\] to-\[#0f3460\]/g, 'bg-gradient-to-br from-[#faf6f0] via-[#f5f0e8] to-[#ece3d5]'],
  
  // glass-card → organics
  [/\bglass-card\b/g, 'organics'],
  
  // text-white → dark text (only standalone, not text-[#...] patterns)
  [/\btext-white\b/g, 'text-[#231a14]'],
  
  // text-gray-400 → muted brown
  [/\btext-gray-400\b/g, 'text-[#7a6d60]'],
  
  // text-gray-300 → secondary brown
  [/\btext-gray-300\b/g, 'text-[#504035]'],
  
  // text-gray-200 → secondary brown
  [/\btext-gray-200\b/g, 'text-[#504035]'],
  
  // text-gray-500 → muted
  [/\btext-gray-500\b/g, 'text-[#7a6d60]'],
  
  // text-gray-600 → secondary
  [/\btext-gray-600\b/g, 'text-[#504035]'],
  
  // bg-white/5 → warm semi-transparent card bg
  [/\bbg-white\/5\b/g, 'bg-[rgba(255,253,248,0.9)]'],
  
  // border-white/10 → warm border
  [/\bborder-white\/10\b/g, 'border-[rgba(160,148,136,0.3)]'],
  
  // Light blue accent #7dd3fc → Turquoise #5ba4a4
  [/#7dd3fc/g, '#5ba4a4'],
  
  // Dark bg patterns
  [/from-\[#1a1a2e\]/g, 'from-[#faf6f0]'],
  [/from-\[#0a0a0a\]/g, 'from-[#faf6f0]'],
  [/from-gray-900/g, 'from-[#faf6f0]'],
  [/via-\[#16213e\]/g, 'via-[#f5f0e8]'],
  [/to-\[#0f3460\]/g, 'to-[#ece3d5]'],
  [/bg-\[#111827\]/g, 'bg-[#f5f0e8]'],
  [/bg-gray-950/g, 'bg-[#f5f0e8]'],
  [/bg-\[#0a0a0a\]/g, 'bg-[#faf6f0]'],
];

// Find ALL page.tsx files in src/app/
function findPageFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (entry.name === 'page.tsx') {
      files.push(fullPath);
    }
  }
  return files;
}

const appDir = path.join(__dirname, 'src', 'app');
const pageFiles = findPageFiles(appDir);
let converted = 0;

for (const filePath of pageFiles) {
  const original = fs.readFileSync(filePath, 'utf8');
  let content = original;
  
  for (const [pattern, replacement] of replacements) {
    content = content.replace(pattern, replacement);
  }
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    const relPath = path.relative(process.cwd(), filePath);
    console.log(`✅ ${relPath}`);
    converted++;
  } else {
    const relPath = path.relative(process.cwd(), filePath);
    console.log(`⏭️  ${relPath} (no changes needed)`);
  }
}

console.log(`\n=================================`);
console.log(`Done: ${converted}/${pageFiles.length} pages converted`);
console.log(`=================================`);
