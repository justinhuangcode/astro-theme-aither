/*
	Multiverse by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ]
		});

	// Hack: Enable IE workarounds.
		if (browser.name == 'ie')
			$body.addClass('ie');

	// Touch?
		if (browser.mobile)
			$body.addClass('touch');

	// Transitions supported?
		if (browser.canUse('transition')) {

			// Play initial animations on page load.
				$window.on('load', function() {
					window.setTimeout(function() {
						$body.removeClass('is-preload');
					}, 100);
				});

			// Prevent transitions/animations on resize.
				var resizeTimeout;

				function debounce(func, wait) {
					let timeout;
					return function() {
						const context = this;
						const args = arguments;
						clearTimeout(timeout);
						timeout = setTimeout(() => func.apply(context, args), wait);
					};
				}

				$window.on('resize', debounce(function() {
					$body.addClass('is-resizing');
					setTimeout(function() {
						$body.removeClass('is-resizing');
					}, 100);
				}, 250));

		}

	// Scroll back to top.
		$window.scrollTop(0);

	// Panels.
		var $panels = $('.panel');

		$panels.each(function() {

			var $this = $(this),
				$toggles = $('[href="#' + $this.attr('id') + '"]'),
				$closer = $('<div class="closer" />').appendTo($this);

			// Closer.
				$closer
					.on('click', function(event) {
						$this.trigger('---hide');
					});

			// Events.
				$this
					.on('click', function(event) {
						event.stopPropagation();
					})
					.on('---toggle', function() {

						if ($this.hasClass('active'))
							$this.triggerHandler('---hide');
						else
							$this.triggerHandler('---show');

					})
					.on('---show', function() {

						// Hide other content.
							if ($body.hasClass('content-active'))
								$panels.trigger('---hide');

						// Activate content, toggles.
							$this.addClass('active');
							$toggles.addClass('active');

						// Activate body.
							$body.addClass('content-active');

					})
					.on('---hide', function() {

						// Deactivate content, toggles.
							$this.removeClass('active');
							$toggles.removeClass('active');

						// Deactivate body.
							$body.removeClass('content-active');

					});

			// Toggles.
				$toggles
					.removeAttr('href')
					.css('cursor', 'pointer')
					.on('click', function(event) {

						event.preventDefault();
						event.stopPropagation();

						$this.trigger('---toggle');

					});

		});

		// Global events.
			$body
				.on('click', function(event) {

					if ($body.hasClass('content-active')) {

						event.preventDefault();
						event.stopPropagation();

						$panels.trigger('---hide');

					}

				});

			$window
				.on('keyup', function(event) {

					if (event.keyCode == 27
					&&	$body.hasClass('content-active')) {

						event.preventDefault();
						event.stopPropagation();

						$panels.trigger('---hide');

					}

				});

	// Header.
		var $header = $('#header');

		// Links.
			$header.find('a').each(function() {

				var $this = $(this),
					href = $this.attr('href');

				// Internal link? Skip.
					if (!href
					||	href.charAt(0) == '#')
						return;

				// Redirect on click.
					$this
						.removeAttr('href')
						.css('cursor', 'pointer')
						.on('click', function(event) {

							event.preventDefault();
							event.stopPropagation();

							window.location.href = href;

						});

			});

	// Footer.
		var $footer = $('#footer');

		// Copyright.
		// This basically just moves the copyright line to the end of the *last* sibling of its current parent
		// when the "medium" breakpoint activates, and moves it back when it deactivates.
			$footer.find('.copyright').each(function() {

				var $this = $(this),
					$parent = $this.parent(),
					$lastParent = $parent.parent().children().last();

				breakpoints.on('<=medium', function() {
					$this.appendTo($lastParent);
				});

				breakpoints.on('>medium', function() {
					$this.appendTo($parent);
				});

			});

	// Main.
		var $main = $('#main');

		// Thumbs.
			$main.children('.thumb').each(function() {

				var $this = $(this),
					$image = $this.find('.image'), 
					$image_img = $image.children('img');

				// 如果没有图片则返回
				if ($image.length === 0) return;

				// 使用 loading="lazy" 属性实现懒加载
				$image_img
					.attr('loading', 'lazy')
					.css('display', 'block') // 确保图片显示
					.on('load', function() {
						// 图片加载完成后的处理
						$(this).css('opacity', '1');
					});

				// 如果有背景位置数据，设置它
				var position = $image_img.data('position');
				if (position) {
					$image.css('background-position', position);
				}

			});

		// Poptrox.
			$main.poptrox({
				baseZIndex: 20000,
				caption: function($a) {
					var s = '';
					$a.nextAll().each(function() {
						s += this.outerHTML;
					});
					return s;
				},
				fadeSpeed: 300,
				onPopupClose: function() { 
					isPopupActive = false;
					$body.removeClass('modal-active');
					document.querySelectorAll('.pic-swipe-wrapper').forEach(function(w) { w.remove(); });
					$('html, body').css({
						'overflow': '',
						'position': '',
						'height': '',
						'width': ''
					});
					touchStartX = 0;
					touchEndX = 0;
					isTransitioning = false;
				},
				onPopupOpen: function() { 
					isPopupActive = true;
					$body.addClass('modal-active');
				},
				overlayOpacity: 0,
				popupCloserText: '',
				popupHeight: 150,
				popupLoaderText: '',
				popupSpeed: 300,
				popupWidth: 150,
				selector: '.thumb > a.image',
				usePopupCaption: true,
				usePopupCloser: true,
				usePopupDefaultStyling: false,
				usePopupForceClose: true,
				usePopupLoader: true,
				usePopupNav: true,
				windowMargin: 50
			});

			// Hack: Set margins to 0 when 'xsmall' activates.
				breakpoints.on('<=xsmall', function() {
					$main[0]._poptrox.windowMargin = 0;
				});

				breakpoints.on('>xsmall', function() {
					$main[0]._poptrox.windowMargin = 50;
				});

})(jQuery);

// 优化全屏切换功能
const fullscreenEnterIcon = '<svg class="toolbar-icon fullscreen-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>';
const fullscreenExitIcon = '<svg class="toolbar-icon fullscreen-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>';

function getFullscreenButton() {
	return document.getElementById('fullscreen');
}

function getFullscreenTarget() {
	const button = getFullscreenButton();
	if (!button) return document.documentElement;
	return button.closest('[data-photos-fullscreen-root]') || document.documentElement;
}

function enterFullscreen(target) {
	const request =
		target.requestFullscreen ||
		target.mozRequestFullScreen ||
		target.webkitRequestFullscreen ||
		target.msRequestFullscreen;

	if (request) {
		request.call(target);
	}
}

function exitFullscreen() {
	const exit =
		document.exitFullscreen ||
		document.mozCancelFullScreen ||
		document.webkitExitFullscreen ||
		document.webkitCancelFullScreen ||
		document.msExitFullscreen;

	if (exit) {
		exit.call(document);
	}
}

function isFullscreenActive() {
	return !!(
		document.fullscreenElement ||
		document.mozFullScreenElement ||
		document.webkitFullscreenElement ||
		document.msFullscreenElement
	);
}

function renderFullscreenButton(isFullscreen) {
	const button = getFullscreenButton();
	if (!button) return;

	const enterLabel = button.dataset.enterFullscreenLabel || 'Enter fullscreen';
	const exitLabel = button.dataset.exitFullscreenLabel || 'Exit fullscreen';
	const label = isFullscreen ? exitLabel : enterLabel;

	button.setAttribute('aria-label', label);
	button.setAttribute('title', label);
	button.innerHTML = isFullscreen ? fullscreenExitIcon : fullscreenEnterIcon;
}

function toggleFullscreen() {
	const isFullscreen = isFullscreenActive();
	
	if (!isFullscreen) {
		enterFullscreen(getFullscreenTarget());
	} else {
		exitFullscreen();
	}
}

// 简化全屏切换事件监听
$('#fullscreen').on('click', function(event) {
	event.preventDefault();
	toggleFullscreen();
});
document.addEventListener('fullscreenchange', function() {
	renderFullscreenButton(isFullscreenActive());
});
document.addEventListener('webkitfullscreenchange', function() {
	renderFullscreenButton(isFullscreenActive());
});
document.addEventListener('mozfullscreenchange', function() {
	renderFullscreenButton(isFullscreenActive());
});
document.addEventListener('MSFullscreenChange', function() {
	renderFullscreenButton(isFullscreenActive());
});
renderFullscreenButton(isFullscreenActive());

// 为分页按钮添加动画效果
$(document).ready(function() {
    $('.next-page-btn').hover(
        function() {
            $(this).addClass('btn-hover');
        },
        function() {
            $(this).removeClass('btn-hover');
        }
    );
});

// 添加触摸滑动支持（多图时支持拖动跟手，分页滚动）
document.addEventListener('DOMContentLoaded', function() {
    let touchStartX = 0;
    let touchEndX = 0;
    let touchCurrentX = 0;
    let isTransitioning = false;
    let isPopupActive = false;
    let isDragging = false;
    const minSwipeDistance = 50;
    const $main = $('#main');
    const $body = $('body');

    // 监听弹窗状态
    $main.poptrox({
        baseZIndex: 20000,
        caption: function($a) {
            var s = '';
            $a.nextAll().each(function() {
                s += this.outerHTML;
            });
            return s;
        },
        fadeSpeed: 300,
        onPopupClose: function() { 
            isPopupActive = false;
            $body.removeClass('modal-active');
            document.querySelectorAll('.pic-swipe-wrapper').forEach(function(w) { w.remove(); });
            $('html, body').css({
                'overflow': '',
                'position': '',
                'height': '',
                'width': ''
            });
            touchStartX = 0;
            touchEndX = 0;
            isTransitioning = false;
        },
        onPopupOpen: function() { 
            isPopupActive = true;
            $body.addClass('modal-active');
            if ($body.hasClass('touch')) {
                setTimeout(function() {
                    const popup = document.querySelector('.poptrox-popup');
                    if (popup && popup.querySelector('.breadcrumb-nav') && !popup.querySelector('.pic-swipe-track')) {
                        ensureSwipeStructure(popup);
                    }
                }, 350);
            }
        },
        overlayOpacity: 0,
        popupCloserText: '',
        popupHeight: 150,
        popupLoaderText: '',
        popupSpeed: 300,
        popupWidth: 150,
        selector: '.thumb > a.image',
        usePopupCaption: true,
        usePopupCloser: true,
        usePopupDefaultStyling: false,
        usePopupForceClose: true,
        usePopupLoader: true,
        usePopupNav: true,
        windowMargin: 50
    });

    // 触摸事件：多图时拖动跟手，松手分页切换
    document.body.addEventListener('touchstart', function(e) {
        const popup = e.target.closest('.poptrox-popup');
        if (!isPopupActive || !popup) return;
        touchStartX = e.touches[0].clientX;
        touchCurrentX = touchStartX;
        const nav = popup.querySelector('.breadcrumb-nav');
        if (nav) {
            isDragging = true;
            ensureSwipeStructure(popup);
        }
    }, { passive: true });

    document.body.addEventListener('touchmove', function(e) {
        const popup = e.target.closest('.poptrox-popup');
        if (!isPopupActive || !popup) return;
        if (isDragging && popup.querySelector('.pic-swipe-track')) {
            e.preventDefault();
            touchCurrentX = e.touches[0].clientX;
            updateSwipePosition(popup);
        } else if (popup) {
            e.preventDefault();
        }
    }, { passive: false, capture: true });

    document.body.addEventListener('touchend', function(e) {
        const popup = e.target.closest('.poptrox-popup');
        if (!isPopupActive || !popup) return;
        touchEndX = e.changedTouches[0].clientX;
        if (isDragging && popup.querySelector('.pic-swipe-track')) {
            e.preventDefault();
            endSwipeDrag(popup);
        } else {
            handleSwipe(popup);
        }
        isDragging = false;
    }, { passive: false });

    // 添加图片查看器状态变化监听
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.classList.contains('poptrox-popup')) {
                isPopupActive = mutation.target.style.display !== 'none';
            }
        });
    });

    // 开始观察 body 的变化
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
    });

    function getImageSuffix(popup) {
        const img = popup.querySelector('.pic img');
        if (!img || !img.src) return '';
        const m = img.src.match(/!.*$/);
        return m ? m[0] : '';
    }

    function ensureSwipeStructure(popup) {
        const nav = popup.querySelector('.breadcrumb-nav');
        const track = popup.querySelector('.pic-swipe-track');
        const pic = popup.querySelector('.pic');
        if (!nav || !pic) return;
        if (track) {
            pic.querySelectorAll(':scope > img').forEach(function(img) { img.remove(); });
            return;
        }
        const img = pic.querySelector('img');
        if (!img) return;

        const images = JSON.parse(nav.dataset.images);
        const suffix = getImageSuffix(popup);
        const dots = nav.querySelectorAll('.nav-dot');
        const currentIndex = Array.from(dots).findIndex(d => d.classList.contains('active'));

        const wrapper = document.createElement('div');
        wrapper.className = 'pic-swipe-wrapper';
        wrapper.style.cssText = 'overflow:hidden;width:100%;touch-action:none;';

        const trackEl = document.createElement('div');
        trackEl.className = 'pic-swipe-track';
        trackEl.style.cssText = 'display:flex;width:' + (images.length * 100) + '%;will-change:transform;';
        trackEl.dataset.currentIndex = currentIndex;

        function createSlide(url, idx) {
            const slide = document.createElement('div');
            slide.className = 'pic-swipe-slide';
            slide.style.cssText = 'flex:0 0 ' + (100 / images.length) + '%;width:' + (100 / images.length) + '%;display:flex;align-items:center;justify-content:center;';
            var slideImg;
            if (idx === currentIndex && img.src) {
                slideImg = img;
                slideImg.style.cssText = 'max-width:100%;width:100%;height:auto;object-fit:contain;vertical-align:bottom;';
            } else {
                slideImg = document.createElement('img');
                slideImg.src = url + suffix;
                slideImg.style.cssText = 'max-width:100%;width:100%;height:auto;object-fit:contain;vertical-align:bottom;';
                slideImg.alt = '';
            }
            slide.appendChild(slideImg);
            return slide;
        }

        images.forEach(function(url, idx) { trackEl.appendChild(createSlide(url, idx)); });
        wrapper.appendChild(trackEl);
        pic.appendChild(wrapper);

        requestAnimationFrame(function() {
            const slideWidth = trackEl.querySelector('.pic-swipe-slide')?.offsetWidth || trackEl.offsetWidth;
            trackEl.style.transform = 'translateX(-' + (currentIndex * slideWidth) + 'px)';
        });
    }

    function getSlideWidth(track) {
        const slide = track.querySelector('.pic-swipe-slide');
        const w = slide ? slide.offsetWidth : 0;
        if (w > 0) return w;
        const wrapper = track.closest('.pic-swipe-wrapper');
        return wrapper ? wrapper.offsetWidth : track.offsetWidth;
    }

    function updateSwipePosition(popup) {
        const track = popup.querySelector('.pic-swipe-track');
        const nav = popup.querySelector('.breadcrumb-nav');
        if (!track || !nav) return;

        const slides = track.querySelectorAll('.pic-swipe-slide');
        const slideWidth = getSlideWidth(track);
        const currentIndex = parseInt(track.dataset.currentIndex) || 0;
        let deltaX = touchCurrentX - touchStartX;

        if (currentIndex <= 0 && deltaX > 0) deltaX = deltaX * 0.3;
        if (currentIndex >= slides.length - 1 && deltaX < 0) deltaX = deltaX * 0.3;

        const offset = -currentIndex * slideWidth + deltaX;
        track.style.transition = 'none';
        track.style.transform = `translateX(${offset}px)`;
    }

    function endSwipeDrag(popup) {
        const track = popup.querySelector('.pic-swipe-track');
        const nav = popup.querySelector('.breadcrumb-nav');
        if (!track || !nav) return;

        const dots = nav.querySelectorAll('.nav-dot');
        const images = JSON.parse(nav.dataset.images);
        let currentIndex = parseInt(track.dataset.currentIndex) || 0;
        const deltaX = touchEndX - touchStartX;
        const slideWidth = getSlideWidth(track);
        const threshold = slideWidth * 0.2;

        if (deltaX < -threshold && currentIndex < images.length - 1) {
            currentIndex++;
        } else if (deltaX > threshold && currentIndex > 0) {
            currentIndex--;
        }

        track.dataset.currentIndex = currentIndex;
        track.style.transition = 'transform 0.3s ease-out';
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        dots.forEach(d => d.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function handleSwipe(popup) {
        if (isTransitioning) return;

        const track = popup.querySelector('.pic-swipe-track');
        if (track) return;

        const swipeDistance = touchEndX - touchStartX;
        if (Math.abs(swipeDistance) < minSwipeDistance) return;

        const nav = popup.querySelector('.breadcrumb-nav');
        if (!nav) return;

        const dots = nav.querySelectorAll('.nav-dot');
        const images = JSON.parse(nav.dataset.images);
        const currentIndex = Array.from(dots).findIndex(dot => dot.classList.contains('active'));
        
        let nextIndex;
        if (swipeDistance > 0) {
            nextIndex = (currentIndex - 1 + images.length) % images.length;
        } else {
            nextIndex = (currentIndex + 1) % images.length;
        }

        const imgWrapper = popup.querySelector('.pic');
        const img = imgWrapper.querySelector('img');
        if (img) {
            isTransitioning = true;
            const suffix = getImageSuffix(popup);
            img.style.transition = 'opacity 0.3s ease-in-out';
            img.style.opacity = '0';

            setTimeout(() => {
                img.src = images[nextIndex] + suffix;
                img.onload = function() {
                    img.style.opacity = '1';
                    isTransitioning = false;
                };
                img.onerror = function() { isTransitioning = false; };
            }, 300);

            dots.forEach(dot => dot.classList.remove('active'));
            dots[nextIndex].classList.add('active');
        }
    }
});
