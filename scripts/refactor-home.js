const fs = require('fs');

const homeJsPath = 'src/js/pages/home.js';
let homeHtml = fs.readFileSync(homeJsPath, 'utf8');
homeHtml = homeHtml.replace('export const homeTemplate = `', '').replace(/`;\n$/, '');

// 1. Refactor Customer Favorites
const favData = [
  { id: 'alfredo', name: 'پاستا چیکن آلفردو', desc: 'مرغ، خامه، پنیر پارمزان', image: 'assets/images/featured/featured-1-alfredo.jpg' },
  { id: 'pesto', name: 'پاستا چیکن پستو', desc: 'مرغ، سس پستو، گوجه گیلاسی', image: 'assets/images/featured/featured-2-pesto.jpg' },
  { id: 'pepperoni', name: 'پیتزا پپرونی', desc: 'پپرونی، پنیر موزارلا، سس مخصوص', image: 'assets/images/featured/featured-3-pepperoni.jpg' },
  { id: 'pulled-beef', name: 'پیتزا رست‌بیف', desc: 'گوشت ریش‌ریش، قارچ، فلفل دلمه‌ای', image: 'assets/images/featured/featured-4-pulled-beef.jpg' },
  { id: 'cheeseburger', name: 'چیزبرگر کلاسیک', desc: 'گوشت ۱۰۰٪ خالص، پنیر گودا، کاهو', image: 'assets/images/featured/featured-5-cheeseburger.jpg' },
  { id: 'margherita', name: 'پیتزا مارگاریتا', desc: 'پنیر موزارلا تازه، ریحان، سس گوجه', image: 'assets/images/featured/featured-6-margherita.jpg' }
];

const renderFavCards = () => favData.map(fav => `
  <div class="pastaroma-carousel-card snap-center shrink-0 w-[260px] md:w-[280px] glass-card rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
    <div class="relative h-48 md:h-52 overflow-hidden">
      <img src="${fav.image}" alt="${fav.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
      ${fav.id === 'alfredo' || fav.id === 'cheeseburger' ? `<div class="absolute top-3 right-3 bg-emerald-700/90 backdrop-blur text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full z-10">پیشنهاد ویژه</div>` : ''}
      <div class="absolute inset-0 bg-[#27272A] opacity-20 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
      <div class="absolute bottom-0 left-0 right-0 p-4 food-gradient opacity-0 group-hover:opacity-100 transition-opacity">
        <p class="text-white text-xs font-bold">${fav.name}</p>
      </div>
    </div>
    <div class="p-5 md:p-6 text-center">
      <h3 class="text-primary text-lg md:text-xl font-bold mb-2">${fav.name}</h3>
      <p class="text-muted-text text-xs md:text-sm">${fav.desc}</p>
    </div>
  </div>
`).join('');

// Replace the carousel track content
const carouselRegex = /(<div id="carousel-track"[^>]*>)([\s\S]*?)(<\/div>\s*<!-- Navigation Arrows -->)/;
homeHtml = homeHtml.replace(carouselRegex, `$1\n${renderFavCards()}\n$3`);

// 2. Refactor Main Menu Categories
const menuData = [
  { id: 'pasta', name: 'پاستا', image: 'assets/images/categories/category-1-pasta.jpg' },
  { id: 'pizza', name: 'پیتزا', image: 'assets/images/categories/category-2-pizza.jpg' },
  { id: 'burger', name: 'برگر', image: 'assets/images/categories/category-3-burger.jpg' },
  { id: 'sandwich', name: 'ساندویچ', image: 'assets/images/categories/category-4-sandwich.jpg' },
  { id: 'drinks', name: 'نوشیدنی', image: 'assets/images/categories/category-5-drinks.jpg' },
  { id: 'sauces', name: 'سس', image: 'assets/images/categories/category-6-sauce.jpg' }
];

const renderMenuCards = () => menuData.map(cat => `
  <a href="/menu?category=${cat.id}" data-link class="menu-category-card group relative block h-60 sm:h-64 md:h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-black/5">
    <img src="${cat.image}" alt="${cat.name}" class="w-full h-full object-cover" loading="lazy" />
    <div class="menu-category-overlay"></div>
    <div class="menu-category-content">
      <span class="menu-decor-line menu-decor-line-left" aria-hidden="true"></span>
      <span class="menu-category-name">${cat.name}</span>
      <span class="menu-decor-line menu-decor-line-right" aria-hidden="true"></span>
    </div>
  </a>
`).join('\n');

const menuGridRegex = /(<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">)([\s\S]*?)(<\/div>\s*<\/section>)/;
homeHtml = homeHtml.replace(menuGridRegex, `$1\n${renderMenuCards()}\n$3`);

// Also change the View Menu button href
homeHtml = homeHtml.replace(/href="#menu"/g, 'href="/menu" data-link');
homeHtml = homeHtml.replace(/href="#categories"/g, 'href="/menu" data-link');

fs.writeFileSync(homeJsPath, 'export const homeTemplate = `' + homeHtml.replace(/`/g, '\\`') + '`;\n');

console.log('Home template refactored with component functions.');
