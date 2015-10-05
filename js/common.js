$(document).ready(function() {

	//equalheight - одинаковая высота колонок
    //Пример списка элементов:
    //var eqElement = ".cat_container > div, .home_news > div"
      var eqElement = ".селектор"
      $(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});

    //Stellar - Parallax Plugin
	//Документация: https://github.com/markdalgleish/stellar.js
	//HTML: <div class="parallax" data-stellar-background-ratio="0.5"></div>
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
    //<a href="image.jpg" class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
    $(".fancybox").fancybox();
    
    //Magnific PopUp
    //Документация: http://dimsemenov.com/plugins/magnific-popup/documentation.html
    //<a href="#target" class="_target">Открыть форму</a>
    // class="mfp-hide" для первоначального скрытия контента на странице
    $('._target').magnificPopup({
        type: 'inline'
    });

    

    //OWL Carousel
    //Документация: http://owlgraphic.com/owlcarousel/
    $(".my-slider").owlCarousel({
    // Most important owl features
    items : 4,
    itemsCustom : false,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : true, // SINGLE!!!
    itemsScaleUp : false,
    autoPlay: false,

    // Navigation
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    rewindNav : true,
    scrollPerPage : true,
 
})


    //Слайдер контента Slick
    //Документация: http://kenwheeler.github.io/slick
    $(".my-slider_").slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //Плавная прокрутка якорей
    $('a[href*=#a_]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
    return false;

     //Кнопка "Наверх"
    $("#top").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $(window).scroll(function(){
        if ( $(document).scrollTop() > 600 ) {
            $('#top').fadeIn('fast');
        } else {
            $('#top').fadeOut('fast');
        }
    });
    
    
    
    
    

});