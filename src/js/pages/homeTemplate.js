export const homeTemplate = `
      <!-- Hero Section -->
      <section
        class="relative pt-32 pb-20 md:pt-44 md:pb-28 flex items-center min-h-[90vh] overflow-hidden"
      >
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
          <img
            src="assets/images/hero/hero-pasta.jpg"
            alt="Pasta Background"
            class="w-full h-full object-cover object-center md:object-right"
            loading="eager"
          />
          <!-- Dark gradient overlay: heavier on visual left where text is located -->
          <div
            class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-dark-bg via-dark-bg/85 to-dark-bg/30"
          ></div>
        </div>

        <div
          class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          <div
            class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24"
          >
            <!-- Hero Content (Text & Action Buttons on left) -->
            <div
              class="w-full lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-right order-1 lg:order-2 z-20"
            >
              <h1
                class="hero-title text-4xl md:text-5xl lg:text-6xl font-black text-light-text mb-6 animate-fade-in-up"
              >
                طعم‌های خاص،<br />
                انتخاب‌های بی‌نهایت
              </h1>
              <p
                class="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light animate-fade-in-up animation-delay-200 max-w-xl"
              >
                از پاستا و پیتزا تا برگر و ساندویچ،<br
                  class="hidden md:block"
                />
                طعم‌های محبوب شما با کیفیتی تازه و متفاوت
              </p>
              <div
                class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto animate-fade-in-up animation-delay-400"
              >
                <a
                  href="#menu"
                  id="hero-btn-menu"
                  class="hero-action-btn bg-primary hover:brightness-110 text-white shadow-xl shadow-primary/30"
                  >مشاهده منو</a
                >
                <a
                  href="#about"
                  id="hero-btn-about"
                  class="hero-action-btn border border-white/20 hover:bg-white/5 text-white hover:border-white/40"
                  >درباره ما</a
                >
              </div>
            </div>

            <!-- Hero Floating Food Cards (Angled composition on right) -->
            <div
              class="w-full lg:flex-1 flex items-center justify-center order-2 lg:order-1 relative z-10"
            >
              <div
                class="hero-cards-container"
                aria-label="غذاهای برگزیده پاستاروما"
              >
                <!-- Card 1: Alfredo Pasta -->
                <div
                  class="hero-premium-card hero-card-1 group"
                  id="hero-food-card-1"
                >
                  <div class="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src="assets/images/featured/featured-1-alfredo.jpg"
                      alt="پاستا چیکن آلفردو"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                    <div
                      class="absolute top-3 right-3 bg-emerald-700/90 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-full z-10"
                    >
                      پیشنهاد ویژه
                    </div>
                    <div
                      class="absolute inset-0 bg-[#27272A] opacity-20 pointer-events-none"
                    ></div>
                  </div>
                  <div class="p-5 text-center">
                    <h3
                      class="text-primary text-lg sm:text-xl font-bold mb-1.5"
                    >
                      پاستا چیکن آلفردو
                    </h3>
                    <p class="text-muted-text text-xs sm:text-sm">
                      مرغ، خامه، پنیر پارمزان
                    </p>
                  </div>
                </div>

                <!-- Card 2: Classic Cheeseburger -->
                <div
                  class="hero-premium-card hero-card-2 group"
                  id="hero-food-card-2"
                >
                  <div class="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src="assets/images/featured/featured-5-cheeseburger.jpg"
                      alt="چیزبرگر کلاسیک"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                    <div
                      class="absolute top-3 right-3 bg-primary/90 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-full z-10"
                    >
                      محبوب‌ترین
                    </div>
                    <div
                      class="absolute inset-0 bg-[#27272A] opacity-20 pointer-events-none"
                    ></div>
                  </div>
                  <div class="p-5 text-center">
                    <h3
                      class="text-primary text-lg sm:text-xl font-bold mb-1.5"
                    >
                      چیزبرگر کلاسیک
                    </h3>
                    <p class="text-muted-text text-xs sm:text-sm">
                      نان برگر، گوشت، پنیر چدار و سس مخصوص
                    </p>
                  </div>
                </div>

                <!-- Card 3: Pepperoni Pizza -->
                <div
                  class="hero-premium-card hero-card-3 group"
                  id="hero-food-card-3"
                >
                  <div class="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src="assets/images/featured/featured-3-pepperoni.jpg"
                      alt="پیتزا پپرونی"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                    <div
                      class="absolute top-3 right-3 bg-amber-600/90 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-full z-10"
                    >
                      طعم اصیل
                    </div>
                    <div
                      class="absolute inset-0 bg-[#27272A] opacity-20 pointer-events-none"
                    ></div>
                  </div>
                  <div class="p-5 text-center">
                    <h3
                      class="text-primary text-lg sm:text-xl font-bold mb-1.5"
                    >
                      پیتزا پپرونی
                    </h3>
                    <p class="text-muted-text text-xs sm:text-sm">
                      گوجه، موتزارلا، پپرونی تنوری
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Section -->
      <section
        class="py-20 md:py-28 bg-transparent text-light-text overflow-hidden relative z-10"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12 md:mb-16">
            <h2 class="text-2xl md:text-3xl font-bold mb-4 slider-title-glow">
              انتخاب محبوب مشتری‌های پاستاروما
            </h2>
          </div>

          <div class="relative group/carousel">
            <!-- Carousel Track -->
            <div id="carousel-viewport">
              <div id="carousel-track" class="flex gap-6 pb-8">

  <div class="pastaroma-carousel-card snap-center shrink-0 w-[260px] md:w-[280px] glass-card rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
    <div class="relative h-48 md:h-52 overflow-hidden">
      <img src="assets/images/featured/featured-1-alfredo.jpg" alt="پاستا چیکن آلفردو" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
      <div class="absolute top-3 right-3 bg-emerald-700/90 backdrop-blur text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full z-10">پیشنهاد ویژه</div>
      <div class="absolute inset-0 bg-[#27272A] opacity-20 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
      <div class="absolute bottom-0 left-0 right-0 p-4 food-gradient opacity-0 group-hover:opacity-100 transition-opacity">
        <p class="text-white text-xs font-bold">پاستا چیکن آلفردو</p>
      </div>
    </div>
    <div class="p-5 md:p-6 text-center">
      <h3 class="text-primary text-lg md:text-xl font-bold mb-2">پاستا چیکن آلفردو</h3>
      <p class="text-muted-text text-xs md:text-sm">مرغ، خامه، پنیر پارمزان</p>
    </div>
  </div>

  <div class="pastaroma-carousel-card snap-center shrink-0 w-[260px] md:w-[280px] glass-card rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
    <div class="relative h-48 md:h-52 overflow-hidden">
      <img src="assets/images/featured/featured-2-pesto.jpg" alt="پاستا چیکن پستو" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
      
      <div class="absolute inset-0 bg-[#27272A] opacity-20 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
      <div class="absolute bottom-0 left-0 right-0 p-4 food-gradient opacity-0 group-hover:opacity-100 transition-opacity">
        <p class="text-white text-xs font-bold">پاستا چیکن پستو</p>
      </div>
    </div>
    <div class="p-5 md:p-6 text-center">
      <h3 class="text-primary text-lg md:text-xl font-bold mb-2">پاستا چیکن پستو</h3>
      <p class="text-muted-text text-xs md:text-sm">مرغ، سس پستو، گوجه گیلاسی</p>
    </div>
  </div>

  <div class="pastaroma-carousel-card snap-center shrink-0 w-[260px] md:w-[280px] glass-card rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
    <div class="relative h-48 md:h-52 overflow-hidden">
      <img src="assets/images/featured/featured-3-pepperoni.jpg" alt="پیتزا پپرونی" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
      
      <div class="absolute inset-0 bg-[#27272A] opacity-20 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
      <div class="absolute bottom-0 left-0 right-0 p-4 food-gradient opacity-0 group-hover:opacity-100 transition-opacity">
        <p class="text-white text-xs font-bold">پیتزا پپرونی</p>
      </div>
    </div>
    <div class="p-5 md:p-6 text-center">
      <h3 class="text-primary text-lg md:text-xl font-bold mb-2">پیتزا پپرونی</h3>
      <p class="text-muted-text text-xs md:text-sm">پپرونی، پنیر موزارلا، سس مخصوص</p>
    </div>
  </div>

  <div class="pastaroma-carousel-card snap-center shrink-0 w-[260px] md:w-[280px] glass-card rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
    <div class="relative h-48 md:h-52 overflow-hidden">
      <img src="assets/images/featured/featured-4-pulled-beef.jpg" alt="پیتزا رست‌بیف" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
      
      <div class="absolute inset-0 bg-[#27272A] opacity-20 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
      <div class="absolute bottom-0 left-0 right-0 p-4 food-gradient opacity-0 group-hover:opacity-100 transition-opacity">
        <p class="text-white text-xs font-bold">پیتزا رست‌بیف</p>
      </div>
    </div>
    <div class="p-5 md:p-6 text-center">
      <h3 class="text-primary text-lg md:text-xl font-bold mb-2">پیتزا رست‌بیف</h3>
      <p class="text-muted-text text-xs md:text-sm">گوشت ریش‌ریش، قارچ، فلفل دلمه‌ای</p>
    </div>
  </div>

  <div class="pastaroma-carousel-card snap-center shrink-0 w-[260px] md:w-[280px] glass-card rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
    <div class="relative h-48 md:h-52 overflow-hidden">
      <img src="assets/images/featured/featured-5-cheeseburger.jpg" alt="چیزبرگر کلاسیک" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
      <div class="absolute top-3 right-3 bg-emerald-700/90 backdrop-blur text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full z-10">پیشنهاد ویژه</div>
      <div class="absolute inset-0 bg-[#27272A] opacity-20 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
      <div class="absolute bottom-0 left-0 right-0 p-4 food-gradient opacity-0 group-hover:opacity-100 transition-opacity">
        <p class="text-white text-xs font-bold">چیزبرگر کلاسیک</p>
      </div>
    </div>
    <div class="p-5 md:p-6 text-center">
      <h3 class="text-primary text-lg md:text-xl font-bold mb-2">چیزبرگر کلاسیک</h3>
      <p class="text-muted-text text-xs md:text-sm">گوشت ۱۰۰٪ خالص، پنیر گودا، کاهو</p>
    </div>
  </div>

  <div class="pastaroma-carousel-card snap-center shrink-0 w-[260px] md:w-[280px] glass-card rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
    <div class="relative h-48 md:h-52 overflow-hidden">
      <img src="assets/images/featured/featured-6-margherita.jpg" alt="پیتزا مارگاریتا" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
      
      <div class="absolute inset-0 bg-[#27272A] opacity-20 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
      <div class="absolute bottom-0 left-0 right-0 p-4 food-gradient opacity-0 group-hover:opacity-100 transition-opacity">
        <p class="text-white text-xs font-bold">پیتزا مارگاریتا</p>
      </div>
    </div>
    <div class="p-5 md:p-6 text-center">
      <h3 class="text-primary text-lg md:text-xl font-bold mb-2">پیتزا مارگاریتا</h3>
      <p class="text-muted-text text-xs md:text-sm">پنیر موزارلا تازه، ریحان، سس گوجه</p>
    </div>
  </div>

</div>

            <!-- Navigation Arrows -->
            <button
              id="prev-btn"
              class="absolute top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center z-10"
              aria-label="قبلی"
            >
              <img
                src="assets/images/arrows/arrow-left.svg"
                alt=""
                aria-hidden="true"
              />
            </button>
            <button
              id="next-btn"
              class="absolute top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center z-10"
              aria-label="بعدی"
            >
              <img
                src="assets/images/arrows/arrow-right.svg"
                alt=""
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </section>

      <!-- Categories Section -->
      <section
        class="py-20 md:py-28 bg-[#F5EFEB] text-[#1C1917] mx-4 sm:mx-8 mb-12 rounded-[2rem] shadow-2xl relative overflow-hidden z-10"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12 md:mb-16">
            <h2 class="text-2xl md:text-3xl font-bold mb-3">منوی اصلی</h2>
            <p class="text-base md:text-lg text-dark-text/70">
              دسته‌بندی موردنظر خود را انتخاب کنید.
            </p>
          </div>

          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
          >
            <!-- Pasta -->
            <a
              id="category-card-pasta"
              href="/menu" data-link
              class="menu-category-card group relative block h-60 sm:h-64 md:h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-black/5"
            >
              <img
                src="assets/images/categories/category-1-pasta.jpg"
                alt="پاستا"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <div class="menu-category-overlay"></div>
              <div class="menu-category-content">
                <span
                  class="menu-decor-line menu-decor-line-left"
                  aria-hidden="true"
                ></span>
                <span class="menu-category-name">پاستا</span>
                <span
                  class="menu-decor-line menu-decor-line-right"
                  aria-hidden="true"
                ></span>
              </div>
            </a>

            <!-- Pizza -->
            <a
              id="category-card-pizza"
              href="/menu" data-link
              class="menu-category-card group relative block h-60 sm:h-64 md:h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-black/5"
            >
              <img
                src="assets/images/categories/category-2-pizza.jpg"
                alt="پیتزا"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <div class="menu-category-overlay"></div>
              <div class="menu-category-content">
                <span
                  class="menu-decor-line menu-decor-line-left"
                  aria-hidden="true"
                ></span>
                <span class="menu-category-name">پیتزا</span>
                <span
                  class="menu-decor-line menu-decor-line-right"
                  aria-hidden="true"
                ></span>
              </div>
            </a>

            <!-- Burger -->
            <a
              id="category-card-burger"
              href="/menu" data-link
              class="menu-category-card group relative block h-60 sm:h-64 md:h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-black/5"
            >
              <img
                src="assets/images/categories/category-3-burger.jpg"
                alt="برگر"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <div class="menu-category-overlay"></div>
              <div class="menu-category-content">
                <span
                  class="menu-decor-line menu-decor-line-left"
                  aria-hidden="true"
                ></span>
                <span class="menu-category-name">برگر</span>
                <span
                  class="menu-decor-line menu-decor-line-right"
                  aria-hidden="true"
                ></span>
              </div>
            </a>

            <!-- Sandwich -->
            <a
              id="category-card-sandwich"
              href="/menu" data-link
              class="menu-category-card group relative block h-60 sm:h-64 md:h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-black/5"
            >
              <img
                src="assets/images/categories/category-4-sandwich.jpg"
                alt="ساندویچ"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <div class="menu-category-overlay"></div>
              <div class="menu-category-content">
                <span
                  class="menu-decor-line menu-decor-line-left"
                  aria-hidden="true"
                ></span>
                <span class="menu-category-name">ساندویچ</span>
                <span
                  class="menu-decor-line menu-decor-line-right"
                  aria-hidden="true"
                ></span>
              </div>
            </a>

            <!-- Drinks -->
            <a
              id="category-card-drinks"
              href="/menu" data-link
              class="menu-category-card group relative block h-60 sm:h-64 md:h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-black/5"
            >
              <img
                src="assets/images/categories/category-5-drinks.jpg"
                alt="نوشیدنی"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <div class="menu-category-overlay"></div>
              <div class="menu-category-content">
                <span
                  class="menu-decor-line menu-decor-line-left"
                  aria-hidden="true"
                ></span>
                <span class="menu-category-name">نوشیدنی</span>
                <span
                  class="menu-decor-line menu-decor-line-right"
                  aria-hidden="true"
                ></span>
              </div>
            </a>

            <!-- Sauces -->
            <a
              id="category-card-sauces"
              href="/menu" data-link
              class="menu-category-card group relative block h-60 sm:h-64 md:h-72 w-full rounded-2xl overflow-hidden shadow-lg border border-black/5"
            >
              <img
                src="assets/images/categories/category-6-sauce.jpg"
                alt="سس"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <div class="menu-category-overlay"></div>
              <div class="menu-category-content">
                <span
                  class="menu-decor-line menu-decor-line-left"
                  aria-hidden="true"
                ></span>
                <span class="menu-category-name">سس</span>
                <span
                  class="menu-decor-line menu-decor-line-right"
                  aria-hidden="true"
                ></span>
              </div>
            </a>
          </div>
        </div>
      </section>
    `;
