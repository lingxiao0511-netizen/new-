import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
