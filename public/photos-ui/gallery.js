(function () {
  const root = document.querySelector('[data-photos-gallery]');
  if (!root) return;

  const body = document.body;
  let isTransitioning = false;

  function isInSight(el) {
    const bound = el.getBoundingClientRect();
    return bound.top <= window.innerHeight + 100;
  }

  function loadImg(el) {
    if (!el || el.src && !el.src.includes('/photos-ui/assets/img/loading.gif')) return;
    const source = el.dataset.src;
    if (source) el.src = source;
  }

  let lazyIndex = 0;

  function checkImgs() {
    const imgs = root.querySelectorAll('img[data-src]');
    for (let i = lazyIndex; i < imgs.length; i += 1) {
      if (isInSight(imgs[i])) {
        loadImg(imgs[i]);
        lazyIndex = i;
      }
    }
  }

  function throttle(fn, mustRun) {
    let previous = null;
    return function throttled() {
      const now = new Date();
      if (!previous) previous = now;
      const remaining = now - previous;
      if (mustRun && remaining >= mustRun) {
        fn.apply(this, arguments);
        previous = now;
      }
    };
  }

  const popupObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (!mutation.addedNodes.length && !mutation.removedNodes.length) return;

      const popup = document.querySelector('.poptrox-popup');
      const popupVisible = popup && popup.style.display !== 'none' && popup.style.visibility !== 'hidden';
      body.style.overflow = popupVisible ? 'hidden' : '';
    });
  });

  popupObserver.observe(document.body, { childList: true, subtree: true });

  function getPopupImageSuffix(img) {
    if (!img?.src) return '';
    const match = img.src.match(/!.*$/);
    return match ? match[0] : '';
  }

  function getPopupContext() {
    const popup = document.querySelector('.poptrox-popup');
    if (!popup || getComputedStyle(popup).display === 'none') return null;

    const nav = popup.querySelector('.breadcrumb-nav');
    if (!nav?.dataset.images) return null;

    let images = [];
    try {
      images = JSON.parse(nav.dataset.images);
    } catch {
      return null;
    }

    if (!Array.isArray(images) || images.length < 2) return null;

    const dots = Array.from(nav.querySelectorAll('.nav-dot'));
    const currentIndex = Math.max(0, dots.findIndex((dot) => dot.classList.contains('active')));

    return { popup, nav, images, dots, currentIndex };
  }

  function syncActiveDot(dots, nextIndex) {
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === nextIndex);
    });
  }

  function transitionPopupImage(context, nextIndex) {
    const { popup, images, dots } = context;
    const track = popup.querySelector('.pic-swipe-track');

    if (track) {
      const slide = track.querySelector('.pic-swipe-slide');
      const slideWidth = slide ? slide.offsetWidth : track.offsetWidth;
      track.dataset.currentIndex = String(nextIndex);
      track.style.transition = 'transform 0.3s ease-out';
      track.style.transform = `translateX(-${nextIndex * slideWidth}px)`;
      syncActiveDot(dots, nextIndex);
      return;
    }

    const img = popup.querySelector('.pic img');
    if (!img) return;

    isTransitioning = true;
    const suffix = getPopupImageSuffix(img);
    img.style.transition = 'opacity 0.3s ease-in-out';
    img.style.opacity = '0';

    window.setTimeout(() => {
      img.src = `${images[nextIndex]}${suffix}`;
      img.onload = function onPopupImageLoad() {
        img.style.opacity = '1';
        isTransitioning = false;
        img.onload = null;
        img.onerror = null;
      };
      img.onerror = function onPopupImageError() {
        isTransitioning = false;
        img.onload = null;
        img.onerror = null;
      };
      syncActiveDot(dots, nextIndex);
    }, 300);
  }

  document.addEventListener('mouseover', (event) => {
    const dot = event.target.closest('.poptrox-popup .nav-dot');
    if (!dot || dot.classList.contains('active') || isTransitioning) return;

    const context = getPopupContext();
    if (!context || !context.dots.includes(dot)) return;

    const nextIndex = Number.parseInt(dot.dataset.index || '-1', 10);
    if (Number.isNaN(nextIndex) || nextIndex < 0) return;

    transitionPopupImage(context, nextIndex);
  });

  document.addEventListener('wheel', (event) => {
    const popup = event.target.closest('.poptrox-popup');
    if (!popup || isTransitioning) return;

    const context = getPopupContext();
    if (!context || context.popup !== popup) return;

    event.preventDefault();

    const { images, currentIndex } = context;
    const nextIndex = event.deltaY > 0
      ? (currentIndex + 1) % images.length
      : (currentIndex - 1 + images.length) % images.length;

    transitionPopupImage(context, nextIndex);
  }, { passive: false });

  document.addEventListener('click', (event) => {
    const navButton = event.target.closest('.poptrox-popup .nav-next, .poptrox-popup .nav-previous');
    if (!navButton || isTransitioning) return;

    const context = getPopupContext();
    if (!context || !context.popup.contains(navButton)) return;

    const { images, currentIndex } = context;
    const nextIndex = navButton.classList.contains('nav-next')
      ? currentIndex + 1
      : currentIndex - 1;

    if (nextIndex < 0 || nextIndex >= images.length) return;

    event.preventDefault();
    event.stopPropagation();
    transitionPopupImage(context, nextIndex);
  }, true);

  document.addEventListener('keydown', (event) => {
    const isNext = event.key === 'ArrowRight';
    const isPrevious = event.key === 'ArrowLeft' || event.key === ' ';
    if (!isNext && !isPrevious) return;
    if (isTransitioning) return;

    const context = getPopupContext();
    if (!context) return;

    const { images, currentIndex } = context;
    const nextIndex = isNext ? currentIndex + 1 : currentIndex - 1;

    if (nextIndex < 0 || nextIndex >= images.length) return;

    event.preventDefault();
    event.stopPropagation();
    transitionPopupImage(context, nextIndex);
  }, true);

  window.addEventListener('load', checkImgs, { once: true });
  window.addEventListener('scroll', throttle(checkImgs, 10), { passive: true });
  window.addEventListener('resize', throttle(checkImgs, 10), { passive: true });
  checkImgs();
})();
