import { footerTemplate } from './footer.js';

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = footerTemplate;
    this.initEvents();
  }
  
  initEvents() {
    const logos = this.querySelectorAll('a.text-primary.font-bold');
    logos.forEach(logo => {
      if(logo.textContent.trim() === 'پاستاروما') {
        logo.href = '/';
        logo.setAttribute('data-link', '');
      }
    });

    // Extract footer animations logic from main.js and put it here
    const container = this.querySelector('#footer-floating-container');
    if (!container) return;
    
    // Cleanup previous if connected multiple times
    container.innerHTML = '';
    
    const foodAssets = [
      'assets/images/floating/pasta-alfredo.jpg',
      'assets/images/floating/pizza-pepperoni.jpg',
      'assets/images/floating/burger-classic.jpg',
      'assets/images/floating/pasta-bolognese.jpg',
      'assets/images/floating/pizza-quattro-formaggi.jpg',
      'assets/images/floating/pasta-penne.jpg',
      'assets/images/floating/burger-smash.jpg',
      'assets/images/floating/pizza-margherita.jpg',
      'assets/images/floating/pasta-lasagna.jpg',
      'assets/images/floating/burger-gourmet.jpg',
      'assets/images/floating/pasta-pesto.jpg',
      'assets/images/floating/pizza-beef.jpg',
      'assets/images/floating/pasta-carbonara.jpg',
      'assets/images/floating/pizza-crispy.jpg'
    ];
    
    const isMobile = window.innerWidth < 640;
    const totalParticles = isMobile ? 14 : 22;
    
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
      
      const delay = (index * 1.3).toFixed(1);
      el.style.animation = `foodFloatRightToLeft ${duration}s linear ${delay}s 1`;
    };
    
    for (let i = 0; i < totalParticles; i++) {
      spawnParticle(i);
    }
  }
}
customElements.define('app-footer', AppFooter);
