$(function() {

/*	$("a[rel='m_PageScroll2id']").mPageScroll2id();

	/!* MixItUp *!/

	if($('html').find('.portfolio__grid')) var mixer = mixitup('.portfolio__grid');
    $(".portfolio__category li").click(function() {
        $(".portfolio__category li").removeClass("active");
        $(this).addClass("active");
    });
    $(".services button").click(function() {
        $(".portfolio").slideToggle("slow");
    });*/

	// $(document).on("scroll",function() {
	//     if($(window).width() >= 768) {
	// 	    if($(document).scrollTop() > 100) {
	// 	        $(".menu-toggle").show("slow");
	// 	    }
	// 	    else {
	// 	    	$(".menu-toggle").hide("slow");
	// 	    }
	//     }
	// });

    $(document).on("scroll",function() {
        if($(window).width() >= 992) {
            if($(document).scrollTop() > 100) {
				$("header .logotype").addClass('logotype-hide');
				$("header .menu").addClass('menu-hide');
				$(".menu-toggle").addClass('menu-btn-show');
			}
			else {
                $("header .logotype").removeClass('logotype-hide');
                $("header .menu").removeClass('menu-hide');
                $(".menu-toggle").removeClass('menu-btn-show');
            }
		}
		else {
            $(".menu-toggle").addClass('menu-btn-show');
		}
    });

	$(".menu-toggle").on('click', function() {
		$(".menu-toggle").removeClass('menu-btn-show');
		$(".menu-overlay").slideToggle();
		$(".menu-close").slideToggle();

	});

	$(".menu-close").on('click', function() {
		$(".menu-toggle").addClass('menu-btn-show');
		$(".menu-overlay").slideToggle();
		$(".menu-close").slideToggle();
	});

	$('.contact-btn').hover(
		function() {
			if($(window).width() >= 768) {
				$('.contact-btn span').show(700);
			}
		},
		function() {
            if($(window).width() >= 768) {
                $('.contact-btn span').hide(400);
            }
		});

    $('.contact-btn').magnificPopup({
        type: 'inline',
        overflowY: 'auto',
        closeBtnInside: true,
    });

    var timeChangeWidth;
    $('.accordion__container').hover(
        function() {
        	var $this = $(this);
            if($(window).width() >= 768) {
                timeChangeWidth = setTimeout(function () {
                    $this.find('p').fadeIn(300);
                }, 900);
            }
        },
        function() {
            if($(window).width() >= 768) {
            	clearTimeout(timeChangeWidth);
                $(this).find('p').hide();
            }
        });

    (function() {
        /* Define a variável que dá swipe no lightbox */
        var magnificPopup = $.magnificPopup.instance;

        /* Carrega a função quando clica no lightbox (senão não pega a classe utilizada) */
        $("a.image-lightbox").click(function(e) {

            /* Espera carregar o lightbox */
            setTimeout(function() {
                /* Swipe para a esquerda - Próximo */
                $(".mfp-container").swipe( {
                    swipeLeft:function(event, direction, distance, duration, fingerCount) {
                        // console.log("swipe right");
                        magnificPopup.next();
                    },

                    /* Swipe para a direita - Anterior */
                    swipeRight:function(event, direction, distance, duration, fingerCount) {
                        // console.log("swipe left");
                        magnificPopup.prev();
                    },
                });
            }, 500);
        });

    }).call(this);

    if($( "html").find(".photo"))
	{
        var slider1 = tns({
		   container: '.slider1',
		   // slideBy: '',
		   nav: false,
		   gutter: 10,
		   loop: true,
		   mouseDrag: true,
		   autoplay: false,
		   controls: true,
		   lazyload: true,
		   controlsContainer: ".controls1",
		   autoWidth: true,
		   swipeAngle: false,
		   autoplayTimeout: 25000,
		   speed: 500,
		   autoplayButtonOutput: false,
		   items: 1,
		   autoHeight: true,
			nested: 'inner',
		   responsive: {
		      720: {
		      	autoplay: true,
				  speed: 5000
		      }
		    }
		 });

		var slider2 = tns({
		   container: '.slider2',
		   // slideBy: '',
		   nav: false,
		   gutter: 10,
		   loop: true,
		   mouseDrag: true,
		   autoplay: false,
		   controls: true,
		   lazyload: true,
		   controlsContainer: ".controls2",
		   autoWidth: true,
		   swipeAngle: false,
		   autoplayButtonOutput: false,
		   items: 1,
		   speed: 500,
		   autoplayTimeout: 17000,
		   autoHeight: true,
			nested: 'inner',
		   responsive: {
		      720: {
		      	autoplay: true,
				  speed: 5000
		      }
		    }
		 });	

		var slider3 = tns({
		   container: '.slider3',
		   // slideBy: '',
		   nav: false,
		   gutter: 10,
		   loop: true,
		   mouseDrag: true,
		   autoplay: false,
		   controls: true,
		   lazyload: true,
		   controlsContainer: ".controls3",
		   autoWidth: true,
		   swipeAngle: false,
		   autoplayTimeout: 18500,
		   autoplayButtonOutput: false,
		   items: 1,
		   speed: 500,
		   autoHeight: true,
			nested: 'inner',
		   responsive: {
		      720: {
		      	autoplay: true,
				  speed: 5000
		      }
		    }
		 });

		var slider4 = tns({
		   container: '.slider4',
		   // slideBy: '',
		   nav: false,
		   gutter: 10,
		   loop: true,
		   mouseDrag: true,
		   autoplay: false,
		   controls: true,
		   lazyload: true,
		   controlsContainer: ".controls4",
		   autoWidth: true,
		   swipeAngle: false,
		   autoplayTimeout: 30000,
		   autoplayButtonOutput: false,
		   items: 1,
		   speed: 500,
		   autoHeight: true,
			nested: 'inner',
		   responsive: {
		      720: {
		      	autoplay: true,
				  speed: 5000
		      }
		    }
		 });
	}
	var sliderFilms = tns({
		"container": ".sliderFilms",
		controls: true,
		controlsContainer: ".controlsFilms",
		"autoHeight": true,
		"items": 1,
		"mouseDrag": true,
		"swipeAngle": false,
		"speed": 400
	})

	$('.slider1').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>Фотограф</small>';
			}
		}
	});
	$('.slider2').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>Фотограф</small>';
			}
		}
	});
	$('.slider3').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>Фотограф</small>';
			}
		}
	});
	$('.slider4').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>Фотограф</small>';
			}
		}
	});
});