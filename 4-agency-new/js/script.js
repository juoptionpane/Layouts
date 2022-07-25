$(document).ready(function() {
	
	/* DIALOG */
	$('.dialog-close').click(function() {					// close 'team description' window
		$('.dialog-body').fadeOut('200', function() {
			$('.dialog').fadeOut('200');
		});
	});

	$('.dialog-open').click(function(e) {					// open 'team description' window
		e.preventDefault();
		var target = $(this).attr('href');
		$('.dialog').fadeIn('200', function() {
			$(target).fadeIn('200');
		});
	});

	/* NAV TOGGLE */
	$('#nav-toggle').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.header-collapse').toggleClass('active');
	});

	/* VARIABLES */
	var nav = $('.header-nav'),								// fixed and animated menu
		navHeight = nav.outerHeight(),
		sections = $('.section');

	/* SCROLL */
	$(window).on('scroll', function() {
		var sTop = $(this).scrollTop();
		
		if (sTop > navHeight) {								// if the scroll has already reached where the header disappears
			$('.header').addClass('fixed');
		} else {
			$('.header').removeClass('fixed');
		}

		if (sTop == 0) {
			nav.find('a').removeClass('active');
			nav.find('a[href="#home"]').addClass('active');
		} else {
			sections.each(function() {
				var top = $(this).offset().top - navHeight;

				if (sTop >= top) {
					nav.find('a').removeClass('active');
					nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
				}
			});
		}
	});

	/* NAVIGATION */
	nav.find('a').on('click', function(e) {
		e.preventDefault();
		$('.header-collapse').removeClass('active');		// mobile menu click
		$('#nav-toggle').removeClass('active');

		var target = $(this).attr('href');
		if (target == "#home") {
			$('html, body').animate({scrollTop: 0}, 700);
		} else {
			$('html, body').stop().animate({
				scrollTop: $(target).offset().top
			}, 700);
		}
	});

	/* LOGO */
	$('.back-top').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, 700);
	});
		
	/* CAROUSEL PRINCIPAL */
	$('#carousel_principal').owlCarousel( {
		items: 1,
		lazyLoad: true,
		loop: true,
		margin: 0,
		nav: true,											// activates image change
		navSpeed: 1000,										// smooth transition in the navigation image
		navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],											   // activates the left and right arrow
		dots: true,											// active bars
		dotsSpeed: 1000, 									// smooth transition in the navigation bar
		autoplay: true,
		autoplaySpeed: 1000,
		responsiveRefreshRate: 10
	});
	
	/* CAROUSEL WITNESSES */
	$('#carousel_witnesses').owlCarousel( {
		items: 1,
		loop: true,
		margin: 40,											// spacing between the blocks
		nav: false,											// activates image change
		navSpeed: 1000,
		navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
		dots: true,
		dotsSpeed: 1000,
		autoplay: true,
		autoplaySpeed: 1000,
		responsiveRefreshRate: 10,
		responsive: {										// resolutions
			960: {
				items: 2
			},
			1280: {
				items: 2,
				nav: true
			}
		}
	});

	/* CAROUSEL PORTFOLIO */
	$('.carousel_portfolio').owlCarousel( {
		items: 1,
		lazyLoad: true,
		loop: true,
		margin: 0,
		nav: true,
		navSpeed: 1000,
		navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
		dots: false,
		dotsSpeed: 1000,
		autoplay: true,
		autoplaySpeed: 1000,
		responsiveRefreshRate: 10
	});

	/* PORTFOLIO */
	$('.portfolio-nav li a').click(function(e) {
		e.preventDefault();
		$('.portfolio-nav li a').removeClass('active');		// when you click prevent # from appearing in the navigation bar
		$(this).addClass('active'); 						// when click on it, remove all (what is active), and add this class to what was clicked with 'this'
		
		$('.portfolio').removeClass('visible');				// appear only clicked links
		if (this.id == "all") {								// <li><a href="#" id="all" class="active">All</a></li>
			$('.portfolio').addClass('visible');
		} else {
			$('.portfolio.' + this.id).addClass('visible');
		}
	});
});