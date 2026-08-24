const fs = require('fs');

let html = fs.readFileSync('index.html.backup', 'utf8');

// 1. Extract Navbar
const navMatch = html.match(/(<!-- Header \/ Nav -->[\s\S]*?)<main>/);
const navbarHtml = navMatch ? navMatch[1] : '';

// 2. Extract Footer
const footMatch = html.match(/(<!-- Footer -->[\s\S]*?)<\/body>/);
const footerHtml = footMatch ? footMatch[1] : '';

// 3. Extract Main (Home Page)
const mainMatch = html.match(/<main>([\s\S]*?)<\/main>/);
let homeHtml = mainMatch ? mainMatch[1] : '';

// 4. Create index.html shell
const shell = html
  .replace(navMatch[1], '<app-navbar></app-navbar>\n    <main id="app-root"></main>\n    ')
  .replace(/<main>[\s\S]*?<\/main>/, '')
  .replace(footMatch[1], '<app-footer></app-footer>\n\n    ');

fs.writeFileSync('index.html', shell);
fs.writeFileSync('src/js/templates/navbar.html', navbarHtml);
fs.writeFileSync('src/js/templates/footer.html', footerHtml);
fs.writeFileSync('src/js/templates/home.html', homeHtml);

console.log('Restructured HTML.');
