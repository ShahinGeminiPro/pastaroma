export class PageContact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="relative pt-32 pb-20 md:pt-44 md:pb-28 min-h-screen bg-dark-bg animate-fade-in-up">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-black text-light-text mb-4">ارتباط با ما</h1>
            <p class="text-xl text-secondary">پاسخگوی شما هستیم</p>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Phone -->
            <div class="footer-card p-8 flex flex-col items-center justify-center text-center rounded-2xl bg-dark-card border border-white/5 shadow-xl hover:shadow-primary/5 transition-all duration-300 min-h-[250px] group cursor-pointer hover:border-secondary/30">
              <div class="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-light-text mb-3">تماس تلفنی</h3>
              <p class="text-muted-text hover:text-primary transition-colors text-lg" dir="ltr">056 - 3244 5566</p>
            </div>
            
            <!-- Telegram -->
            <a href="#" class="footer-card p-8 flex flex-col items-center justify-center text-center rounded-2xl bg-dark-card border border-white/5 shadow-xl hover:shadow-primary/5 transition-all duration-300 min-h-[250px] group cursor-pointer hover:border-[#0088cc]/30">
              <div class="w-16 h-16 rounded-full bg-[#0088cc]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <img src="assets/icons/telegram.svg" alt="تلگرام" class="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
              </div>
              <h3 class="text-xl font-bold text-light-text mb-3">تلگرام</h3>
              <p class="text-muted-text group-hover:text-[#0088cc] transition-colors text-lg" dir="ltr">@Pastaroma</p>
            </a>
            
            <!-- Instagram -->
            <a href="#" class="footer-card p-8 flex flex-col items-center justify-center text-center rounded-2xl bg-dark-card border border-white/5 shadow-xl hover:shadow-primary/5 transition-all duration-300 min-h-[250px] group cursor-pointer hover:border-[#E1306C]/30">
              <div class="w-16 h-16 rounded-full bg-[#E1306C]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <img src="assets/icons/instagram.svg" alt="اینستاگرام" class="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
              </div>
              <h3 class="text-xl font-bold text-light-text mb-3">اینستاگرام</h3>
              <p class="text-muted-text group-hover:text-[#E1306C] transition-colors text-lg" dir="ltr">@Pastaroma.ir</p>
            </a>
            
            <!-- Bale -->
            <a href="#" class="footer-card p-8 flex flex-col items-center justify-center text-center rounded-2xl bg-dark-card border border-white/5 shadow-xl hover:shadow-primary/5 transition-all duration-300 min-h-[250px] group cursor-pointer hover:border-[#00BFA5]/30">
              <div class="w-16 h-16 rounded-full bg-[#00BFA5]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <img src="assets/icons/bale.svg" alt="بله" class="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
              </div>
              <h3 class="text-xl font-bold text-light-text mb-3">بله</h3>
              <p class="text-muted-text group-hover:text-[#00BFA5] transition-colors text-lg" dir="ltr">@Pastaroma_bale</p>
            </a>
            
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('page-contact', PageContact);
