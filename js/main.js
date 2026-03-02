/* Bosch eBike Personalization Demo - Main JS */

(function() {
  'use strict';

  let currentTheme = 'default';
  let overlineTimer = null;
  let sliders = [];

  /* ── Theme Switcher ── */
  function switchTheme(theme) {
    if (theme === currentTheme) return;

    const body = document.body;
    const content = document.querySelector('.main-content');

    // Fade out
    content.classList.add('transitioning');

    setTimeout(() => {
      // Apply theme
      body.setAttribute('data-theme', theme);
      currentTheme = theme;

      // Update content
      updateContent(theme);

      // Update switcher buttons
      document.querySelectorAll('.switcher-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
      });

      // Preload images before fading in
      const images = content.querySelectorAll('img');
      const imagePromises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      Promise.race([
        Promise.all(imagePromises),
        new Promise(resolve => setTimeout(resolve, 800))
      ]).then(() => {
        content.classList.remove('transitioning');
      });
    }, 400);
  }

  /* ── Content Update ── */
  function updateContent(theme) {
    const data = VARIANTS[theme];
    if (!data) return;

    // Navigation
    updateNav(data.nav);

    // Hero
    updateHero(data.hero);

    // Image-Text Slider
    updateSlider(data.slider);

    // Tabs
    updateTabs(data.tabs);

    // System Teaser
    updateSystemTeaser(data.systemTeaser);

    // Brand
    updateBrand(data.brandTagline);

    // App Section
    updateApp(data.app);

    // Categories
    updateCategories(data.categories);

    // News
    updateNews(data.news);

    // Dealer
    updateDealer(data.dealer);
  }

  function updateNav(navItems) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, i) => {
      if (navItems[i]) {
        link.textContent = navItems[i];
        link.style.display = '';
      } else {
        link.style.display = 'none';
      }
    });
  }

  function updateHero(hero) {
    const headline = document.querySelector('.hero-headline');
    const subtext = document.querySelector('.hero-subtext');
    const heroImage = document.querySelector('.hero-image');

    if (headline) headline.textContent = hero.headline;
    if (subtext) subtext.textContent = hero.subtext;
    if (heroImage) heroImage.src = hero.image;

    // Update overlines
    startOverlineRotation(hero.overlines);
  }

  function updateSlider(slider) {
    const overline = document.querySelector('#image-text-slider .section-overline');
    const headline = document.querySelector('#image-text-slider .section-headline');

    if (overline) overline.textContent = slider.overline;
    if (headline) headline.textContent = slider.headline;

    const slides = document.querySelectorAll('#image-text-slider .slider-slide');
    slides.forEach((slide, i) => {
      if (slider.slides[i]) {
        const title = slide.querySelector('h3');
        const text = slide.querySelector('p');
        const img = slide.querySelector('img');
        if (title) title.textContent = slider.slides[i].title;
        if (text) text.textContent = slider.slides[i].text;
        if (img) img.src = slider.slides[i].image;
      }
    });
  }

  function updateTabs(tabs) {
    const overline = document.querySelector('#tab-section .section-overline');
    const headline = document.querySelector('#tab-section .section-headline');

    if (overline) overline.textContent = tabs.overline;
    if (headline) headline.textContent = tabs.headline;

    const tabBtns = document.querySelectorAll('.tab-block__tab');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach((btn, i) => {
      if (tabs.items[i]) {
        btn.textContent = tabs.items[i].label;
      }
    });

    tabPanels.forEach((panel, i) => {
      if (tabs.items[i]) {
        const title = panel.querySelector('.tab-title');
        const text = panel.querySelector('.tab-text');
        const cta = panel.querySelector('.tab-cta');
        const img = panel.querySelector('.tab-image');
        if (title) title.textContent = tabs.items[i].title;
        if (text) text.textContent = tabs.items[i].text;
        if (cta) cta.textContent = tabs.items[i].cta;
        if (img) img.src = tabs.items[i].image;
      }
    });
  }

  function updateSystemTeaser(teaser) {
    const headline = document.querySelector('#system-teaser .section-headline');
    if (headline) headline.textContent = teaser.headline;

    const items = document.querySelectorAll('.system-teaser__item');
    items.forEach((item, i) => {
      if (teaser.items[i]) {
        const label = item.querySelector('.system-teaser__label');
        if (label) label.textContent = teaser.items[i].label;
      }
    });
  }

  function updateBrand(tagline) {
    const el = document.querySelector('.brand-tagline');
    if (el) el.textContent = tagline;
  }

  function updateApp(app) {
    const overline = document.querySelector('#app-section .section-overline');
    const headline = document.querySelector('#app-section .section-headline');

    if (overline) overline.textContent = app.overline;
    if (headline) headline.textContent = app.headline;

    const texts = document.querySelectorAll('.app-slide-text');
    texts.forEach((el, i) => {
      if (app.slides[i]) {
        const title = el.querySelector('h3');
        const text = el.querySelector('p');
        if (title) title.textContent = app.slides[i].title;
        if (text) text.textContent = app.slides[i].text;
      }
    });
  }

  function updateCategories(categories) {
    const container = document.querySelector('.category-track');
    if (!container) return;

    // Clear and rebuild
    container.innerHTML = '';
    categories.forEach(cat => {
      const card = document.createElement('div');
      card.className = 'category-card';
      card.innerHTML = `
        <div class="category-image-wrapper">
          <img src="${cat.image}" alt="${cat.name}" class="category-image" loading="lazy">
        </div>
        <div class="category-info">
          <span class="category-name">${cat.name}</span>
          <span class="category-link">Entdecken <svg viewBox="0 0 192 192" fill="currentColor" width="16" height="16"><path d="M79.156 140.829 73.5 135.17 112.671 96 73.499 56.829l5.657-5.658L123.984 96l-44.828 44.829z"/></svg></span>
        </div>
      `;
      container.appendChild(card);
    });
  }

  function updateNews(news) {
    const headline = document.querySelector('#news-section .section-headline');
    if (headline) headline.textContent = news.headline;

    const cards = document.querySelectorAll('.news-card');
    cards.forEach((card, i) => {
      if (news.items[i]) {
        const title = card.querySelector('.news-title');
        const text = card.querySelector('.news-text');
        const img = card.querySelector('.news-image');
        if (title) title.textContent = news.items[i].title;
        if (text) text.textContent = news.items[i].text;
        if (img) img.src = news.items[i].image;
      }
    });
  }

  function updateDealer(dealer) {
    const headline = document.querySelector('#dealer-section .section-headline');
    const subtext = document.querySelector('#dealer-section .dealer-subtext');
    const cta = document.querySelector('#dealer-section .btn-primary');

    if (headline) headline.textContent = dealer.headline;
    if (subtext) subtext.textContent = dealer.subtext;
    if (cta) cta.textContent = dealer.ctaText;
  }

  /* ── Hero Overline Rotation ── */
  function startOverlineRotation(overlines) {
    if (overlineTimer) clearInterval(overlineTimer);

    const container = document.querySelector('.hero-overlines');
    if (!container) return;

    // Rebuild overlines
    container.innerHTML = '';
    overlines.forEach((text, i) => {
      const span = document.createElement('span');
      span.className = 'hero-overline' + (i === 0 ? ' active' : '');
      span.textContent = text;
      container.appendChild(span);
    });

    let currentOverline = 0;
    const overlineEls = container.querySelectorAll('.hero-overline');

    overlineTimer = setInterval(() => {
      overlineEls[currentOverline].classList.remove('active');
      currentOverline = (currentOverline + 1) % overlineEls.length;
      overlineEls[currentOverline].classList.add('active');
    }, 3000);
  }

  /* ── Sticky Header ── */
  function initStickyHeader() {
    const header = document.querySelector('.header-nav');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  /* ── Tab Block ── */
  function initTabs() {
    const tabs = document.querySelectorAll('.tab-block__tab');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        if (panels[i]) panels[i].classList.add('active');
      });
    });
  }

  /* ── Scroll Animations ── */
  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });
  }

  /* ── Initialize ── */
  function init() {
    // Set default theme
    document.body.setAttribute('data-theme', 'default');

    // Initialize components
    initStickyHeader();
    initTabs();
    initScrollAnimations();

    // Initialize sliders
    const imageTextSlider = document.querySelector('#image-text-slider .slider-container');
    if (imageTextSlider) {
      sliders.push(new Slider(imageTextSlider, { autoplay: true, interval: 6000 }));
    }

    const appSlider = document.querySelector('#app-section .app-slider-container');
    if (appSlider) {
      new AppSlider(appSlider);
    }

    const categoryContainer = document.querySelector('#category-section');
    if (categoryContainer) {
      new CategorySlider(categoryContainer);
    }

    // Start hero overline rotation
    const defaultOverlines = VARIANTS.default.hero.overlines;
    startOverlineRotation(defaultOverlines);

    // Switcher buttons
    document.querySelectorAll('.switcher-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        switchTheme(btn.dataset.theme);
      });
    });

    // Keyboard shortcut: 1-4 to switch themes
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;
      const themes = ['default', 'genz', 'sports', 'silver'];
      const num = parseInt(e.key);
      if (num >= 1 && num <= 4) {
        switchTheme(themes[num - 1]);
      }
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
