const fs = require('fs');
let html = fs.readFileSync('src/js/pages/home.js', 'utf8');
html = html.replace('href="/menu" data-link\n                  id="hero-btn-menu"', 'href="#menu"\n                  id="hero-btn-menu"');
fs.writeFileSync('src/js/pages/home.js', html);
