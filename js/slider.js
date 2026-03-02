/* Reusable Slider Component */
class Slider {
  constructor(container, options = {}) {
    this.container = container;
    this.slides = container.querySelectorAll('.slider-slide');
    this.currentIndex = options.startIndex || 0;
    this.autoplay = options.autoplay || false;
    this.autoplayInterval = options.interval || 5000;
    this.loop = options.loop !== false;
    this.onSlideChange = options.onSlideChange || null;
    this.timer = null;

    if (this.slides.length === 0) return;

    this.init();
  }

  init() {
    this.prevBtn = this.container.querySelector('.slider-prev');
    this.nextBtn = this.container.querySelector('.slider-next');
    this.counter = this.container.querySelector('.slider-counter');
    this.dots = this.container.querySelectorAll('.slider-pagination-dot');

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }

    this.dots.forEach((dot, i) => {
      dot.addEventListener('click', () => this.goTo(i));
    });

    this.showSlide(this.currentIndex);

    if (this.autoplay) {
      this.startAutoplay();
      this.container.addEventListener('mouseenter', () => this.stopAutoplay());
      this.container.addEventListener('mouseleave', () => this.startAutoplay());
    }

    // Touch support
    let startX = 0;
    let isDragging = false;

    this.container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    }, { passive: true });

    this.container.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) this.next();
        else this.prev();
      }
    }, { passive: true });
  }

  showSlide(index) {
    this.slides.forEach((slide, i) => {
      slide.classList.remove('active', 'prev', 'next');
      if (i === index) {
        slide.classList.add('active');
      } else if (i === index - 1 || (index === 0 && i === this.slides.length - 1)) {
        slide.classList.add('prev');
      } else if (i === index + 1 || (index === this.slides.length - 1 && i === 0)) {
        slide.classList.add('next');
      }
    });

    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    if (this.counter) {
      this.counter.textContent = `${index + 1} / ${this.slides.length}`;
    }

    if (this.onSlideChange) {
      this.onSlideChange(index);
    }
  }

  next() {
    let nextIndex = this.currentIndex + 1;
    if (nextIndex >= this.slides.length) {
      nextIndex = this.loop ? 0 : this.slides.length - 1;
    }
    this.currentIndex = nextIndex;
    this.showSlide(this.currentIndex);
  }

  prev() {
    let prevIndex = this.currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = this.loop ? this.slides.length - 1 : 0;
    }
    this.currentIndex = prevIndex;
    this.showSlide(this.currentIndex);
  }

  goTo(index) {
    this.currentIndex = index;
    this.showSlide(this.currentIndex);
  }

  startAutoplay() {
    this.stopAutoplay();
    this.timer = setInterval(() => this.next(), this.autoplayInterval);
  }

  stopAutoplay() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  destroy() {
    this.stopAutoplay();
  }
}

/* Category Slider - horizontal scroll with peek */
class CategorySlider {
  constructor(container) {
    this.container = container;
    this.track = container.querySelector('.category-track');
    this.items = container.querySelectorAll('.category-card');
    this.prevBtn = container.querySelector('.slider-prev');
    this.nextBtn = container.querySelector('.slider-next');
    this.scrollAmount = 0;

    if (!this.track || this.items.length === 0) return;

    this.init();
  }

  init() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.scrollLeft());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.scrollRight());
    }

    // Touch/drag support already provided by overflow-x: auto
  }

  scrollLeft() {
    const cardWidth = this.items[0].offsetWidth + 24;
    this.track.scrollBy({ left: -cardWidth * 2, behavior: 'smooth' });
  }

  scrollRight() {
    const cardWidth = this.items[0].offsetWidth + 24;
    this.track.scrollBy({ left: cardWidth * 2, behavior: 'smooth' });
  }
}

/* App Slider - phone screenshots with text sync */
class AppSlider {
  constructor(container) {
    this.container = container;
    this.images = container.querySelectorAll('.app-slide-image');
    this.texts = container.querySelectorAll('.app-slide-text');
    this.dots = container.querySelectorAll('.slider-pagination-dot');
    this.prevBtn = container.querySelector('.slider-prev');
    this.nextBtn = container.querySelector('.slider-next');
    this.currentIndex = 3; // Start at eBike Flow App (index 3)

    if (this.images.length === 0) return;

    this.init();
  }

  init() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }

    this.dots.forEach((dot, i) => {
      dot.addEventListener('click', () => this.goTo(i));
    });

    this.showSlide(this.currentIndex);
  }

  showSlide(index) {
    const total = this.images.length;
    const prevIndex = (index - 1 + total) % total;
    const nextIndex = (index + 1) % total;

    this.images.forEach((img, i) => {
      img.classList.remove('active', 'adjacent', 'adjacent-prev', 'adjacent-next');
      if (i === index) {
        img.classList.add('active');
      } else if (i === prevIndex) {
        img.classList.add('adjacent', 'adjacent-prev');
      } else if (i === nextIndex) {
        img.classList.add('adjacent', 'adjacent-next');
      }
    });
    this.texts.forEach((text, i) => {
      text.classList.toggle('active', i === index);
    });
    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.showSlide(this.currentIndex);
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.showSlide(this.currentIndex);
  }

  goTo(index) {
    this.currentIndex = index;
    this.showSlide(this.currentIndex);
  }
}
