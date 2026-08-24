const fs = require('fs');
const path = require('path');

const dir = 'src/js/templates';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

fs.mkdirSync('src/js/components', { recursive: true });
fs.mkdirSync('src/js/pages', { recursive: true });

for (const file of files) {
  const name = path.basename(file, '.html');
  const html = fs.readFileSync(path.join(dir, file), 'utf8');
  
  const content = `export const ${name}Template = \`${html.replace(/`/g, '\\`')}\`;\n`;
  
  if (name === 'home') {
    fs.writeFileSync(`src/js/pages/${name}.js`, content);
  } else {
    fs.writeFileSync(`src/js/components/${name}.js`, content);
  }
}
