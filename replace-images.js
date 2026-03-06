const fs = require('fs');
const path = require('path');

// 图片替换映射
const imageReplacements = {
  // Services/Cases/Blog
  'images.unsplash.com/photo-1600080972464-98643bb7d053': 'images.pexels.com/photos/8100495/pexels-photo-8100495.jpeg',
  'images.unsplash.com/photo-1541783203917-83f7f0a63f8c': 'images.pexels.com/photos/3569284/pexels-photo-3569284.jpeg',
  'images.unsplash.com/photo-1589182373726-e4f658ab50f0': 'images.pexels.com/photos/2537652/pexels-photo-2537652.jpeg',
  'images.unsplash.com/photo-1542744173-8e7e53415bb0': 'images.pexels.com/photos/1601076/pexels-photo-1601076.jpeg',
  'images.unsplash.com/photo-1596462502278-27bfdc403348': 'images.pexels.com/photos/5639377/pexels-photo-5639377.jpeg',
  'images.unsplash.com/photo-1616744619440-e030a88b89d8': 'images.pexels.com/photos/1287508/pexels-photo-1287508.jpeg',
  'images.unsplash.com/photo-1566450456744-2d3b13887c36': 'images.pexels.com/photos/1601076/pexels-photo-1601076.jpeg',
  'images.unsplash.com/photo-1586023492125-27b2c04528f2e39e082c': 'images.pexels.com/photos/8100495/pexels-photo-8100495.jpeg',
  
  // About
  'images.unsplash.com/photo-1507003211169-0a1dd7228f2d': 'images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  'images.unsplash.com/photo-1506794778202-cad84cf45f1d': 'images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
  'images.unsplash.com/photo-1494790108377-be9c29b29330': 'images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  'images.unsplash.com/photo-1519085360753-af0119f7cbe7': 'images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
  
  // Hero/FreeReading
  'images.unsplash.com/photo-1578662996442-48f60103fc96': 'images.pexels.com/photos/3569284/pexels-photo-3569284.jpeg',
  'images.unsplash.com/photo-1555421689-ca7b66d2c868': 'images.pexels.com/photos/3569284/pexels-photo-3569284.jpeg',
};

// 要处理的文件
const files = [
  'src/app/components/Services.tsx',
  'src/app/components/Cases.tsx',
  'src/app/components/Blog.tsx',
  'src/app/components/About.tsx',
  'src/app/components/FreeFortune.tsx',
  'src/app/components/FreeReading.tsx',
];

const baseDir = 'E:\\代理矩阵\\new-';

files.forEach(file => {
  const filePath = path.join(baseDir, file);
  console.log(`Processing: ${file}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let replaced = 0;
  
  Object.keys(imageReplacements).forEach(oldImg => {
    const newImg = imageReplacements[oldImg];
    const regex = new RegExp(oldImg.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&') + '[^"\']*?', 'g');
    const matches = content.match(regex);
    if (matches) {
      replaced += matches.length;
      content = content.replace(regex, newImg);
    }
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✓ Replaced ${replaced} images`);
});

console.log('\n✅ All images replaced successfully!');
