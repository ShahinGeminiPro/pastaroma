import { navbarTemplate } from './navbar.js';

class AppNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = navbarTemplate;
    this.initEvents();
  }

  initEvents() {
    // Reattach mobile menu toggle logic
    const mobileMenuBtn = this.querySelector('#mobile-menu-btn');
    const closeMenuBtn = this.querySelector('#close-menu-btn');
    const mobileDrawer = this.querySelector('#mobile-drawer');
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

    // Logo to homepage
    const logos = this.querySelectorAll('a.text-primary.font-bold');
    logos.forEach(logo => {
      if(logo.textContent.trim() === 'پاستاروما') {
        logo.href = '/';
        logo.setAttribute('data-link', '');
      }
    });

    // Links routing
    const linkMap = {
      'خانه': '/',
      'درباره ما': '/about',
      'تماس با ما': '/contact',
      'منو': '/menu'
    };
    this.querySelectorAll('a').forEach(link => {
      const text = link.textContent.trim();
      if (linkMap[text]) {
        link.href = linkMap[text];
        link.setAttribute('data-link', '');
      }
    });

    // Sticky Header Effect
    const header = this.querySelector('#navbar');
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
  }
}
customElements.define('app-navbar', AppNavbar);
