(function($) {

	'use strict';


	// settings
	var ww = window.innerWidth,
		wh = window.innerHeight;


	first();
	header();
	shortcodes();


	// ready
	// --------------------------------------------------

	$(window).on('load', function() {
		$('body').waitForImages({
			finished: function() {
				setTimeout(function() {
					$('#page-loader').addClass('hide');

					setTimeout(function() {
						reveals();

						$('.hero__intro__text span').each(function(i) {
							$(this).delay(i * 50).queue(function() {
								$(this).addClass('animated');
							});
						});
					}, 500);
				}, 1500);
			},
			waitForAll: true
		});
	});


	// first
	// --------------------------------------------------

	function first() {
		$('.hero__intro__text').each(function() {
			var words = $(this).text().split(' '),
				total = words.length;

			$(this).empty();

			for (var i = 0; i < total; i++) {
				$(this).append($("<span /> ").text(words[i]));
			}
		});
	}


	// header
	// --------------------------------------------------

	function header() {
		$('.header__burger').on('click', function() {
			$('body').addClass('noscroll');
			$('.page__nav').addClass('visible');
			$('.page__overlay').addClass('visible');
		});

		$('.page__nav .close, .page__overlay').on('click', function() {
			$('body').removeClass('noscroll');
			$('.page__nav').removeClass('visible');
			$('.page__overlay').removeClass('visible');
		});

		$('.menu li:has(ul)').children('ul').hide();
		$('.menu li:has(ul)').find('a').on('click', function() {
			var parent = $(this).parent(),
				submenu = $(this).next('ul');

			if (submenu.is(':visible')) {
				parent.find('ul').slideUp(250);
			}

			if (submenu.is(':hidden')) {
				parent.siblings().find('ul').slideUp(250);
				submenu.css('height', 'auto').slideDown(250);
			}

			if (parent.children('ul').length == 0) {
				return true;
			} else {
				return false;
			}
		});
	}


	// reveals
	// --------------------------------------------------

	function reveals() {
		$(window).on('scroll', function() {
			$('.reveal').each(function(i) {
				var el_top = $(this).offset().top,
					win_bottom = wh + $(window).scrollTop();

				if (el_top < win_bottom) {
					$(this).delay(i * 100).queue(function() {
						$(this).addClass('reveal-in');
					});
				}
			});
		}).scroll();
	}


	// shortcodes
	// --------------------------------------------------

	function shortcodes() {
		// magnific popup
		$('a.image-link').magnificPopup({
			type: 'image',
			mainClass: 'mfp-with-zoom',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300,
				easing: 'ease-in-out',
				opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});

		// sliders
		$('.slider').each(function() {
			var slider = $(this),
				dots = slider.data('dots') == true ? 1 : 0,
				arrows = slider.data('arrows') == true ? 1 : 0;

			slider.owlCarousel({
				autoplay: true,
				items: 1,
				loop: true,
				nav: arrows,
				dots: dots,
				navText: ['', '']
			});
		});

		// background image
		$('[data-bg]').each(function() {
			var bg = $(this).data('bg');

			$(this).css({
				'background-image': 'url(' + bg + ')',
				'background-size': 'cover',
				'background-position': 'center center'
			});
		});

		// background color
		$('[data-bg-color]').each(function() {
			var bg = $(this).data('bg-color');

			$(this).css('background-color', bg);
		});

		// scroll
		$(window).on('scroll', function() {
			var scroll = $(this).scrollTop();

			// to top
			if (scroll > wh / 2) {
				$('.back2top').addClass('visible');
			} else {
				$('.back2top').removeClass('visible');
			}

			// hero parallax
			$('.hero.parallax').each(function() {
				var parallax = $(this).find('.hero__image');

				parallax.css({
					'transform': 'translate3d(0, ' + scroll / 3 + 'px, 0)'
				});
			});
		});

		$('.back2top').on('click', function() {
			$('html, body').animate({
				scrollTop: 0
			}, 500, 'easeInOutCubic');
		});
	}

})(jQuery);
