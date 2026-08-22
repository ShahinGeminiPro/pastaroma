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

    // Close menu when clicking a link inside drawer
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

  // Carousel Logic (Basic horizontal scroll on button click)
  const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (track && prevBtn && nextBtn) {
    // Determine card width dynamically based on first card
    const card = track.firstElementChild;

    prevBtn.addEventListener('click', () => {
      if (card) {
        const scrollAmount = card.offsetWidth + 24; // width + gap
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' }); // In RTL, scrolling right is positive
      }
    });

    nextBtn.addEventListener('click', () => {
      if (card) {
        const scrollAmount = card.offsetWidth + 24;
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    });
  }
});
