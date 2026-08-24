export class PageAbout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="relative pt-32 pb-20 md:pt-44 md:pb-28 min-h-screen flex items-center bg-dark-bg animate-fade-in-up">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-8 tracking-tight">طعم اصیل ایتالیایی در قلب بیرجند</h1>
          <p class="text-xl md:text-2xl text-light-text mb-8 leading-relaxed font-light">
            پاستاروما تنها یک رستوران نیست، بلکه تجربه‌ای از ترکیب طعم‌های اصیل، کیفیت بی‌نظیر و محیطی آرامش‌بخش است.
          </p>
          <p class="text-lg text-muted-text leading-relaxed">
            ما در پاستاروما با استفاده از تازه‌ترین مواد اولیه و دستورپخت‌های اصیل، تلاش می‌کنیم تا بهترین پاستاها، پیتزاهای ایتالیایی، برگرهای لذیذ و ساندویچ‌های خاص را برای شما آماده کنیم. هدف ما خلق لحظاتی خوشمزه و فراموش‌نشدنی در کنار خانواده و دوستان شماست.
          </p>
          <div class="mt-12 flex justify-center gap-6">
            <div class="w-24 h-1 bg-secondary rounded-full"></div>
            <div class="w-12 h-1 bg-primary rounded-full"></div>
            <div class="w-24 h-1 bg-secondary rounded-full"></div>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('page-about', PageAbout);
