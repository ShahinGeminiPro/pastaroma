document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  const toggleMenu = () => {
    mobileDrawer.classList.toggle('translate-x-full');
    document.body.classList.toggle('overflow-hidden');
  };

  if (mobileMenuBtn && closeMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    const drawerLinks = mobileDrawer.querySelectorAll('a');
    drawerLinks.forEach(link => {
      link.addEventListener('click', toggleMenu);
    });
  }

  // Sticky Header Effect
  const header = document.getElementById('navbar');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('shadow-lg', 'bg-dark-bg/95');
        header.classList.remove('bg-dark-bg/90');
      } else {
        header.classList.remove('shadow-lg', 'bg-dark-bg/95');
        header.classList.add('bg-dark-bg/90');
      }
    });
  }

  // Infinite Featured Carousel
  const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

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

        // Mobile layout where card spans full width
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

      const goNext = () => {
        goTo(currentIndex + 1);
      };

      const goPrevious = () => {
        goTo(currentIndex - 1);
      };

      track.addEventListener('transitionend', event => {
        if (event.propertyName !== 'transform') return;

        isAnimating = false;

        if (currentIndex === cardCount * 2) {
          currentIndex = cardCount;
          updatePosition(false);
        } else if (currentIndex === 0) {
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

      window.addEventListener('resize', () => {
        updatePosition(false);
      });

      // Start on the first real card.
      requestAnimationFrame(() => updatePosition(false));
      resetAutoSlide();

      window.addEventListener('beforeunload', () => {
        clearInterval(autoSlideTimer);
      });
    }
  }

  // Footer Floating Food Background Animation
  function initFooterFloatingFood() {
    const container = document.getElementById('footer-floating-container');
    if (!container) return;

    const foodAssets = [
      'assets/images/floating/pasta-alfredo.jpg',
      'assets/images/floating/pizza-pepperoni.jpg',
      'assets/images/floating/burger-classic.jpg',
      'assets/images/floating/pasta-penne.jpg',
      'assets/images/floating/pizza-margherita.jpg',
      'assets/images/floating/burger-gourmet.jpg',
      'assets/images/floating/pasta-pesto.jpg',
      'assets/images/floating/pizza-beef.jpg',
      'assets/images/floating/pasta-carbonara.jpg',
      'assets/images/floating/pizza-crispy.jpg'
    ];

    const totalParticles = 12;

    const spawnParticle = (index) => {
      const el = document.createElement('div');
      el.className = 'footer-floating-food';

      const foodImgSrc = foodAssets[index % foodAssets.length];
      const img = document.createElement('img');
      img.src = foodImgSrc;
      img.alt = 'غذا پاستاروما';
      img.loading = 'lazy';
      el.appendChild(img);

      const size = Math.floor(Math.random() * 24) + 44; // 44px to 68px
      const initialTop = Math.floor(Math.random() * 75) + 8; // 8% to 83%
      const duration = (Math.random() * 14 + 20).toFixed(1); // 20s to 34s
      const spinDuration = (Math.random() * 10 + 12).toFixed(1); // 12s to 22s
      const opacity = (Math.random() * 0.15 + 0.22).toFixed(2); // 0.22 to 0.37

      el.style.setProperty('--food-size', `${size}px`);
      el.style.setProperty('--spin-duration', `${spinDuration}s`);
      el.style.setProperty('--target-opacity', opacity);
      el.style.top = `${initialTop}%`;

      const restartAnimation = () => {
        el.style.animation = 'none';
        el.style.opacity = '0';
        // Portal edge loop: wait 1 second after exiting left edge, then enter right with fresh randomized Y
        setTimeout(() => {
          const newTop = Math.floor(Math.random() * 75) + 8;
          const newDuration = (Math.random() * 14 + 20).toFixed(1);
          const newSpin = (Math.random() * 10 + 12).toFixed(1);
          el.style.top = `${newTop}%`;
          el.style.setProperty('--spin-duration', `${newSpin}s`);
          void el.offsetWidth; // force reflow
          el.style.animation = `foodFloatRightToLeft ${newDuration}s linear 1`;
        }, 1000);
      };

      el.addEventListener('animationend', (e) => {
        if (e.animationName === 'foodFloatRightToLeft') {
          restartAnimation();
        }
      });

      container.appendChild(el);

      // Stagger initial entry delays
      const delay = (index * 2.2).toFixed(1);
      el.style.animation = `foodFloatRightToLeft ${duration}s linear ${delay}s 1`;
    };

    for (let i = 0; i < totalParticles; i++) {
      spawnParticle(i);
    }
  }

  initFooterFloatingFood();
});
