export const footerTemplate = `<!-- Footer -->
    <footer
      id="main-footer"
      class="relative bg-[#0F0F10] text-muted-text pt-20 pb-12 md:pt-24 md:pb-16 border-t border-white/10 overflow-hidden z-10"
    >
      <!-- Floating Food Background Particles -->
      <div
        id="footer-floating-container"
        class="footer-floating-container"
        aria-hidden="true"
      ></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- 4-Card Grid Structure -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6"
        >
          <!-- Card 1: Pastaroma Introduction (Center Aligned) -->
          <div
            id="footer-card-intro"
            class="footer-card p-6 md:p-8 flex flex-col items-center justify-between text-center min-h-[300px]"
          >
            <div class="w-full flex flex-col items-center">
              <!-- Brand Identity -->
              <a
                href="#"
                class="inline-block text-primary font-bold text-3xl md:text-4xl tracking-tight mb-1 transition-transform hover:scale-105"
              >
                پاستاروما
              </a>
              <span
                class="text-[11px] font-semibold tracking-wider text-primary/80 mb-3"
              >
                رستوران ایتالیایی و فرنگی
              </span>
              <div class="w-12 h-0.5 bg-primary/40 rounded-full mb-4"></div>
              <p class="text-light-text text-sm leading-relaxed max-w-[240px]">
                طعم‌های خاص، انتخاب‌های بی‌نهایت. ارائه‌دهنده اصیل‌ترین پاستاهای
                دست‌ساز، پیتزاهای تنوری ترد و برگرهای دست‌ساز با بهترین مواد
                اولیه.
              </p>
            </div>
            <div
              class="pt-3.5 text-[11px] text-muted-text/70 border-t border-white/5 w-full mt-4"
            >
              تجربه طعم ناب غذای اصیل
            </div>
          </div>

          <!-- Card 2: Contact Numbers (Center Aligned) -->
          <div
            id="footer-card-contact"
            class="footer-card p-6 md:p-8 flex flex-col items-center justify-between text-center min-h-[300px]"
          >
            <div class="w-full flex flex-col items-center">
              <div
                class="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-3 shadow-inner"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h4 class="font-bold text-lg text-white mb-1">شماره‌های تماس</h4>
              <p class="text-xs text-muted-text mb-4">
                سفارش تلفنی و پشتیبانی مشتریان
              </p>

              <div class="space-y-2.5 w-full flex flex-col items-center">
                <a
                  href="tel:09363220765"
                  class="group flex items-center justify-center gap-2 text-base md:text-lg font-bold text-light-text hover:text-primary transition-colors py-2 px-4 rounded-xl bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/30 w-full max-w-[220px]"
                  dir="ltr"
                >
                  <span class="tracking-wider">0936 322 0765</span>
                  <span
                    class="text-xs text-primary group-hover:translate-x-0.5 transition-transform"
                    >📞</span
                  >
                </a>
                <a
                  href="tel:09157934990"
                  class="group flex items-center justify-center gap-2 text-base md:text-lg font-bold text-light-text hover:text-primary transition-colors py-2 px-4 rounded-xl bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/30 w-full max-w-[220px]"
                  dir="ltr"
                >
                  <span class="tracking-wider">0915 793 4990</span>
                  <span
                    class="text-xs text-primary group-hover:translate-x-0.5 transition-transform"
                    >📞</span
                  >
                </a>
              </div>
            </div>
            <div
              class="pt-3.5 text-[11px] text-muted-text/70 border-t border-white/5 w-full mt-4"
            >
              ساعت کاری: همه‌روزه ۱۲:۰۰ الی ۲۴:۰۰
            </div>
          </div>

          <!-- Card 3: Restaurant Address (Right Aligned - RTL) -->
          <div
            id="footer-card-address"
            class="footer-card p-6 md:p-8 flex flex-col items-center justify-between text-center min-h-[300px]"
          >
            <div class="w-full flex flex-col items-center">
              <div
                class="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-3 shadow-inner"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 class="font-bold text-lg text-white mb-1">آدرس مجموعه</h4>
              <p class="text-xs text-muted-text mb-4">
                موقعیت مکانی و شعب رستوران
              </p>

              <div class="w-full space-y-2 text-right">
                <div
                  class="py-2.5 px-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors"
                >
                  <p
                    class="font-bold text-white text-sm flex items-center gap-1.5"
                  >
                    <span class="text-primary text-xs shrink-0">📍</span>
                    <span>بیرجند - خیابان پاسداران</span>
                  </p>
                  <p class="text-muted-text text-xs mt-1 pr-4 leading-relaxed">
                    میدان جانبازان، مجموعه غذایی پاستاروما
                  </p>
                </div>
                <div
                  class="flex items-center justify-between text-xs text-primary/95 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-xl"
                >
                  <span class="flex items-center gap-1.5">
                    <span
                      class="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"
                    ></span>
                    <span>پذیرایی حضوری و بیرون‌بر</span>
                  </span>
                  <span class="text-[11px] text-muted-text">پیک سریع</span>
                </div>
              </div>
            </div>
            <div
              class="pt-3.5 text-[11px] text-muted-text/70 border-t border-white/5 w-full mt-4"
            >
              امکان رزرو میز و تحویل حضوری
            </div>
          </div>

          <!-- Card 4: Social Media (Center Aligned with Brand SVGs) -->
          <div
            id="footer-card-social"
            class="footer-card p-6 md:p-8 flex flex-col items-center justify-between text-center min-h-[300px]"
          >
            <div class="w-full flex flex-col items-center">
              <div
                class="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-3 shadow-inner"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h4 class="font-bold text-lg text-white mb-1">
                شبکه‌های اجتماعی
              </h4>
              <p
                class="text-xs text-muted-text mb-5 leading-relaxed max-w-[220px]"
              >
                ما را دنبال کنید و از آخرین تخفیف‌ها و آیتم‌های منو مطلع شوید
              </p>

              <!-- Social Media Buttons (Telegram, Instagram, Bale) -->
              <div class="flex items-center justify-center gap-3.5 w-full">
                <!-- Telegram -->
                <a
                  id="social-btn-telegram"
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="footer-social-btn footer-social-btn-telegram group relative"
                  aria-label="تلگرام پاستاروما"
                  title="تلگرام"
                >
                  <img
                    src="assets/icons/telegram.svg"
                    alt="تلگرام"
                    class="w-5 h-5 pointer-events-none"
                  />
                </a>

                <!-- Instagram -->
                <a
                  id="social-btn-instagram"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="footer-social-btn footer-social-btn-instagram group relative"
                  aria-label="اینستاگرام پاستاروما"
                  title="اینستاگرام"
                >
                  <img
                    src="assets/icons/instagram.svg"
                    alt="اینستاگرام"
                    class="w-5 h-5 pointer-events-none"
                  />
                </a>

                <!-- Bale -->
                <a
                  id="social-btn-bale"
                  href="https://ble.ir"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="footer-social-btn footer-social-btn-bale group relative"
                  aria-label="بله پاستاروما"
                  title="پیام‌رسان بله"
                >
                  <img
                    src="assets/icons/bale.svg"
                    alt="بله"
                    class="w-5 h-5 pointer-events-none"
                  />
                </a>
              </div>
            </div>
            <div
              class="pt-3.5 text-[11px] text-muted-text/70 border-t border-white/5 w-full mt-4"
            >
              پاسخگویی سریع در دایرکت و پیام‌رسان‌ها
            </div>
          </div>
        </div>

        <!-- Copyright / Bottom line -->
        <div
          class="mt-12 pt-8 border-t border-white/5 text-center text-xs text-muted-text/70"
        >
          <p>© تمامی حقوق مادی و معنوی برای رستوران پاستاروما محفوظ است.</p>
        </div>
      </div>
    </footer>

    <script type="module" src="/src/js/main.js"></script>
  `;
