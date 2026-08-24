const fs = require('fs');
const https = require('https');
const path = require('path');

const md = fs.readFileSync('Food Prices.md', 'utf8');
const lines = md.split('\n');

const categories = [
  { name: 'Pasta', match: 'نوع پاستا', id: 'pasta' },
  { name: 'Pizza', match: 'نوع پیتزا', id: 'pizza' },
  { name: 'Burger', match: 'نوع برگر', id: 'burger' },
  { name: 'Sandwich', match: 'نوع ساندویچ', id: 'sandwich' },
  { name: 'Drinks', match: 'نوع نوشیدنی', id: 'drinks' },
  { name: 'Sauces', match: 'نوع سس', id: 'sauces' }
];

let currentCategory = null;
const menu = [];

for (const line of lines) {
  if (line.includes('|') && line.includes('نوع')) {
    currentCategory = categories.find(c => line.includes(c.match));
  } else if (line.includes('|') && !line.includes('---') && currentCategory) {
    const parts = line.split('|').map(p => p.trim()).filter(Boolean);
    if (parts.length >= 3 && !isNaN(parseInt(parts[0]))) {
      const name = parts[1].replace(/\*\*/g, '');
      const price = parts[2].replace(/\*\*/g, '');
      
      const id = `${currentCategory.id}-${parts[0]}`;
      const imagePath = `assets/images/menu/${id}.jpg`;
      
      menu.push({
        id,
        category: currentCategory.id,
        categoryName: currentCategory.name,
        name,
        price,
        image: imagePath
      });
    }
  }
}

fs.mkdirSync('assets/images/menu', { recursive: true });
fs.mkdirSync('src/js/data', { recursive: true });

fs.writeFileSync('src/js/data/menuData.js', `export const menuData = ${JSON.stringify(menu, null, 2)};`);

console.log(`Parsed ${menu.length} items.`);

// Download script
async function downloadImages() {
  let count = 0;
  for (const item of menu) {
    const filePath = path.join(__dirname, '..', item.image);
    if (!fs.existsSync(filePath)) {
      // Just create a solid color image or download from a fast placeholder service?
      // Actually downloading 125 images from picsum sequentially takes some time. Let's do it in batches of 10.
    }
  }
}
