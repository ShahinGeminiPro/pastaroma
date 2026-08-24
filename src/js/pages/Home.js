import { homeTemplate } from './home.js';

export class PageHome extends HTMLElement {
  connectedCallback() {
    this.innerHTML = homeTemplate;
    this.initEvents();
  }
  
  disconnectedCallback() {
    if (this.autoSlideTimer) {
      clearInterval(this.autoSlideTimer);
    }
  }

  initEvents() {
    // Infinite Featured Carousel
    const track = this.querySelector('#carousel-track');
    const prevBtn = this.querySelector('#prev-btn');
    const nextBtn = this.querySelector('#next-btn');
    if (track && prevBtn && nextBtn) {
      const originalCards = Array.from(track.children);
      const cardCount = originalCards.length;
      if (cardCount > 0) {
        // Clone the complete set on both sides so the visible carousel is
        // always filled, even when multiple cards are visible at once.
        const lastClones = originalCards.map(card => {
          const clone = card.cloneNode(true);
          clone.setAttribute('aria-hidden', 'true');
          return clone;
        });
        const firstClones = originalCards.map(card => {
          const clone = card.cloneNode(true);
          clone.setAttribute('aria-hidden', 'true');
          return clone;
        });
        track.prepend(...lastClones);
        track.append(...firstClones);
        let currentIndex = cardCount;
        let isAnimating = false;
        let autoSlideTimer;
        
        const getGap = () => parseFloat(getComputedStyle(track).gap) || 0;
        const getStep = () => {
          const card = track.children[0];
          return card.getBoundingClientRect().width + getGap();
        };
        const getCenterOffset = () => {
          const viewport = track.parentElement;
          const viewportWidth = viewport ? viewport.clientWidth : 0;
          const card = track.children[0];
          const cardWidth = card ? card.getBoundingClientRect().width : 0;
          const gap = getGap();
          if (!viewportWidth || !cardWidth) return 0;
          if (cardWidth >= viewportWidth - 4) return 0;
          const step = cardWidth + gap;
          const numVisible = Math.max(1, Math.floor((viewportWidth + gap) / step));
          const totalCardsWidth = numVisible * step - gap;
          return Math.max(0, (viewportWidth - totalCardsWidth) / 2);
        };
        
        const updatePosition = (animate = true) => {
          track.style.transition = animate
            ? 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)'
            : 'none';
          const offset = getCenterOffset();
          track.style.transform = `translate3d(${-currentIndex * getStep() + offset}px, 0, 0)`;
        };
        
        const goTo = (index) => {
          if (isAnimating) return;
          currentIndex = index;
          isAnimating = true;
          updatePosition(true);
        };
        
        const goNext = () => goTo(currentIndex + 1);
        const goPrevious = () => goTo(currentIndex - 1);
        
        track.addEventListener('transitionend', event => {
          if (event.propertyName !== 'transform') return;
          isAnimating = false;
          if (currentIndex >= cardCount * 2) {
            currentIndex = cardCount;
            updatePosition(false);
          } else if (currentIndex <= 0) {
            currentIndex = cardCount;
            updatePosition(false);
          }
        });
        
        const resetAutoSlide = () => {
          clearInterval(autoSlideTimer);
          autoSlideTimer = setInterval(goNext, 7000);
        };
        
        prevBtn.addEventListener('click', () => {
          if (!isAnimating) {
            goPrevious();
            resetAutoSlide();
          }
        });
        nextBtn.addEventListener('click', () => {
          if (!isAnimating) {
            goNext();
            resetAutoSlide();
          }
        });
        
        window.addEventListener('resize', () => updatePosition(false));
        requestAnimationFrame(() => updatePosition(false));
        resetAutoSlide();
        
        // Use a detached cleanup to prevent leaks if component unmounts
        this.autoSlideTimer = autoSlideTimer;
      }
    }
    // And handle routing links
    const links = this.querySelectorAll('a[href^="#"], a[href^="/"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#menu') {
          e.preventDefault();
          const menuSection = this.querySelector('#menu');
          if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
    
    // Add routing logic to the category cards to go to /menu?category=...
    const categoryLinks = [
      { name: 'پاستا', id: 'pasta' },
      { name: 'پیتزا', id: 'pizza' },
      { name: 'برگر', id: 'burger' },
      { name: 'ساندویچ', id: 'sandwich' },
      { name: 'نوشیدنی', id: 'drinks' },
      { name: 'سس', id: 'sauces' },
    ];
    
    // Find all titles in the menu section
    const menuSection = this.querySelector('#menu');
    if (menuSection) {
      const cards = menuSection.querySelectorAll('.group');
      cards.forEach(card => {
        const titleEl = card.querySelector('h3');
        if (titleEl) {
          const cat = categoryLinks.find(c => titleEl.textContent.trim() === c.name);
          if (cat) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
              e.preventDefault();
              window.history.pushState({}, '', `/menu?category=${cat.id}`);
              window.dispatchEvent(new Event('popstate'));
            });
          }
        }
      });
    }
  }
}
customElements.define('page-home', PageHome);
