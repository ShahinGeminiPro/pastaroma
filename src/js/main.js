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

  // Floating food portal animation in the Footer
  const footerParticles = document.querySelector('.footer-food-particles');
  if (footerParticles && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const footerFoodImages = [
      'assets/images/footer/pasta/pasta-1.jpg',
      'assets/images/footer/pasta/pasta-2.jpg',
      'assets/images/footer/pasta/pasta-3.jpg',
      'assets/images/footer/pasta/pasta-4.jpg',
      'assets/images/footer/pasta/pasta-5.jpg',
      'assets/images/footer/pasta/pasta-6.jpg',
      'assets/images/footer/burger/burger-1.jpg',
      'assets/images/footer/burger/burger-2.jpg',
      'assets/images/footer/burger/burger-3.jpg',
      'assets/images/footer/burger/burger-4.jpg',
      'assets/images/footer/burger/burger-5.jpg',
      'assets/images/footer/burger/burger-6.jpg',
      'assets/images/footer/pizza/pizza-1.jpg',
      'assets/images/footer/pizza/pizza-2.jpg',
      'assets/images/footer/pizza/pizza-3.jpg',
      'assets/images/footer/pizza/pizza-4.jpg',
      'assets/images/footer/pizza/pizza-5.jpg',
      'assets/images/footer/pizza/pizza-6.jpg'
    ];

    const randomBetween = (min, max) => Math.random() * (max - min) + min;
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    footerFoodImages.forEach((src, index) => {
      const image = document.createElement('img');
      image.className = 'footer-food-particle';
      image.src = src;
      image.alt = '';
      image.setAttribute('aria-hidden', 'true');
      footerParticles.appendChild(image);

      const run = async () => {
        while (document.body.contains(image)) {
          const footerWidth = footerParticles.clientWidth;
          const footerHeight = footerParticles.clientHeight;
          const imageWidth = image.offsetWidth || 78;
          const imageHeight = image.offsetHeight || 58;
          const y = randomBetween(12, Math.max(12, footerHeight - imageHeight - 12));
          const duration = randomBetween(19000, 30000);
          const rotation = randomBetween(260, 520);
          const startX = footerWidth + randomBetween(20, 220);
          const endX = -imageWidth - randomBetween(20, 140);
          const delay = index * 260;

          image.style.top = `${y}px`;
          image.style.left = '0px';
          image.style.transform = `translate3d(${startX}px, 0, 0) rotate(0deg)`;

          if (delay) await wait(delay);
          if (!document.body.contains(image)) return;

          const animation = image.animate(
            [
              { transform: `translate3d(${startX}px, 0, 0) rotate(0deg)` },
              { transform: `translate3d(${endX}px, 0, 0) rotate(-${rotation}deg)` }
            ],
            {
              duration,
              easing: 'linear',
              fill: 'forwards'
            }
          );

          try {
            await animation.finished;
          } catch {
            return;
          }

          if (!document.body.contains(image)) return;
          await wait(1000);
        }
      };

      run();
    });
  }

});
