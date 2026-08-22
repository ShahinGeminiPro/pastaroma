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

      const updatePosition = (animate = true) => {
        track.style.transition = animate
          ? 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)'
          : 'none';
        track.style.transform = `translate3d(${-currentIndex * getStep()}px, 0, 0)`;
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
});
