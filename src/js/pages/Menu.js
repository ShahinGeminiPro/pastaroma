import { menuData } from '../data/menuData.js';

export class PageMenu extends HTMLElement {
  connectedCallback() {
    // Determine active category from URL or default to first
    const params = new URLSearchParams(window.location.search);
    this.activeCategory = params.get('category') || 'pasta';
    
    this.categories = [
      { id: 'pasta', name: 'پاستا', image: 'assets/images/categories/category-1-pasta.jpg' },
      { id: 'pizza', name: 'پیتزا', image: 'assets/images/categories/category-2-pizza.jpg' },
      { id: 'burger', name: 'برگر', image: 'assets/images/categories/category-3-burger.jpg' },
      { id: 'sandwich', name: 'ساندویچ', image: 'assets/images/categories/category-4-sandwich.jpg' },
      { id: 'drinks', name: 'نوشیدنی', image: 'assets/images/categories/category-5-drinks.jpg' },
      { id: 'sauces', name: 'سس', image: 'assets/images/categories/category-6-sauce.jpg' }
    ];
    
    this.render();
  }

  render() {
    const activeIndex = this.categories.findIndex(c => c.id === this.activeCategory) || 0;
    
    // Slider logic
    const renderSlider = () => {
      let sliderHtml = '';
      this.categories.forEach((cat, idx) => {
        const isActive = idx === activeIndex;
        // Basic class for all
        let classes = "flex-shrink-0 transition-all duration-500 ease-out cursor-pointer rounded-2xl overflow-hidden shadow-lg border border-black/5 snap-center menu-category-card group ";
        
        // Active vs inactive styling
        if (isActive) {
          classes += "w-64 sm:w-72 md:w-80 h-40 sm:h-48 md:h-56 mx-4 z-20 ";
        } else {
          // Dimmed, smaller
          classes += "w-48 sm:w-56 md:w-64 h-32 sm:h-36 md:h-44 opacity-50 hover:opacity-80 scale-90 z-10 ";
        }
        
        sliderHtml += `
          <div class="${classes}" data-category="${cat.id}">
            <img src="${cat.image}" alt="${cat.name}" class="w-full h-full object-cover" loading="lazy" />
            <div class="menu-category-overlay"></div>
            <div class="menu-category-content">
              <span class="menu-decor-line menu-decor-line-left" aria-hidden="true"></span>
              <span class="menu-category-name">${cat.name}</span>
              <span class="menu-decor-line menu-decor-line-right" aria-hidden="true"></span>
            </div>
          </div>
        `;
      });
      return sliderHtml;
    };

    // Food items
    const items = menuData.filter(i => i.category === this.activeCategory);
    
    // In food items, we want them to look like the main menu cards but with price.
    // Or we use the customer favorite card structure but with the orange hover shadow.
    // The prompt says: "The card styling must match the existing visual language of the Main Menu cards. Reuse... Orange hover shadow, Image scale/zoom effect"
    // So let's build a grid of cards that have the menu-category-card classes.
    const renderItems = () => {
      let html = '';
      items.forEach(item => {
        html += `
          <div class="menu-category-card group relative block h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-black/5">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" loading="lazy" />
            <div class="menu-category-overlay" style="height: 60%"></div>
            <div class="absolute bottom-4 left-0 right-0 flex flex-col items-center justify-center z-20 transition-transform duration-400 group-hover:-translate-y-4">
              <div class="flex items-center w-full px-4 justify-center">
                <span class="menu-decor-line menu-decor-line-left" aria-hidden="true"></span>
                <span class="menu-category-name text-center whitespace-normal leading-tight">${item.name}</span>
                <span class="menu-decor-line menu-decor-line-right" aria-hidden="true"></span>
              </div>
              <span class="text-primary font-bold mt-2 text-sm md:text-base bg-dark-bg/80 px-3 py-1 rounded-full backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity duration-400">${item.price}</span>
            </div>
          </div>
        `;
      });
      return html;
    };

    this.innerHTML = `
      <section class="relative pt-32 pb-20 min-h-screen bg-dark-bg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h1 class="text-3xl md:text-4xl font-black text-light-text mb-2">منوی پاستاروما</h1>
          <p class="text-secondary text-lg">دسته‌بندی مورد نظر خود را انتخاب کنید</p>
        </div>
        
        <!-- Category Slider -->
        <div class="relative w-full overflow-hidden mb-16 max-w-5xl mx-auto">
          <!-- Previous Button -->
          <button id="prev-btn" class="absolute top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center z-30" aria-label="قبلی">
            <img src="assets/images/arrows/arrow-left.svg" alt="" aria-hidden="true" />
          </button>
          
          <!-- Slider Track -->
          <div id="category-track" class="flex items-center justify-center snap-x snap-mandatory overflow-x-auto scrollbar-hide py-8 px-4" style="scroll-behavior: smooth;">
            ${renderSlider()}
          </div>
          
          <!-- Next Button -->
          <button id="next-btn" class="absolute top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center z-30" aria-label="بعدی">
            <img src="assets/images/arrows/arrow-right.svg" alt="" aria-hidden="true" />
          </button>
        </div>
        
        <!-- Food Items Grid -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            ${renderItems()}
          </div>
        </div>
      </section>
    `;
    
    this.initEvents();
  }

  initEvents() {
    const track = this.querySelector('#category-track');
    
    // Hide scrollbar but keep functionality
    if (track) {
      track.style.msOverflowStyle = 'none';
      track.style.scrollbarWidth = 'none';
    }

    const cards = this.querySelectorAll('[data-category]');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.getAttribute('data-category');
        if (cat !== this.activeCategory) {
          window.history.pushState({}, '', `/menu?category=${cat}`);
          this.activeCategory = cat;
          this.render();
        }
      });
    });

    const prevBtn = this.querySelector('#prev-btn');
    const nextBtn = this.querySelector('#next-btn');
    
    const goPrev = () => {
      let idx = this.categories.findIndex(c => c.id === this.activeCategory);
      idx = (idx - 1 + this.categories.length) % this.categories.length;
      window.history.pushState({}, '', `/menu?category=${this.categories[idx].id}`);
      this.activeCategory = this.categories[idx].id;
      this.render();
    };
    
    const goNext = () => {
      let idx = this.categories.findIndex(c => c.id === this.activeCategory);
      idx = (idx + 1) % this.categories.length;
      window.history.pushState({}, '', `/menu?category=${this.categories[idx].id}`);
      this.activeCategory = this.categories[idx].id;
      this.render();
    };

    if (prevBtn) prevBtn.addEventListener('click', goPrev);
    if (nextBtn) nextBtn.addEventListener('click', goNext);
  }
}
customElements.define('page-menu', PageMenu);
