/* --------------------------------------------------
   Slider Initialise
-------------------------------------------------- */

$(document).on('ready page:load', function () {
    $('.slider').sss();
});


/* --------------------------------------------------
   Topbar on scroll
-------------------------------------------------- */
$(window).scroll(function(){

	var scroll = $(window).scrollTop();

              if (scroll > $('.scrollPoint').offset().top ) {
                    $('.topbar').addClass('topbar--scrolled');
                    $('.top-bar-nav').addClass('other-nav-bar');
            }

          if (scroll <= $('.scrollPoint').offset().top ) {
            $('.topbar').removeClass('topbar--scrolled');
          }

});


/* --------------------------------------------------
   Show Top Bar Nav
-------------------------------------------------- */
$(document).on('ready page:load', function () {
    $(".topbar__menu").click(function(e) {
        $(".nav").toggle();

        if ($(".topbar").hasClass('topbar--scrolled')) {
                $('.topbar').removeClass('topbar--scrolled');
        } else {
                $('.topbar').addClass('topbar--scrolled');
        }

        e.stopPropagation();
    });

    $(document).click(function(e) {
        if (!$(e.target).is('.nav, .nav*')) {
            $(".nav").hide();
        }
    });
});

/* --------------------------------------------------
   Animations
-------------------------------------------------- */
$(document).on('ready page:load', function () {

	new WOW().init();

});

/* --------------------------------------------------
   Scoll buttons
-------------------------------------------------- */

$(document).on('ready page:load', function () {
      $(".home-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#home").offset().top},
            1000,'easeOutQuart')
        });
});


$(document).on('ready page:load', function () {
      $(".services-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#services").offset().top},
            1000,'easeOutBack')
        });
});


$(document).on('ready page:load', function () {
      $(".portfolio-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#portfolio").offset().top},
            1000,'easeOutBack')
        });
});

$(document).on('ready page:load', function () {
      $(".who-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#who").offset().top},
            1000,'easeOutBack')
        });
});

$(document).on('ready page:load', function () {
      $(".contact-link").click(function() {
        $('html,body').animate({
            scrollTop: $("#contact").offset().top},
            1000,'easeOutQuart')
        });
});

/* --------------------------------------------------
   Prompter
-------------------------------------------------- */
function highlight() {

    var $divs = $('.promp-top').removeClass('active');
    var $divsbot = $('.promp-bottom').removeClass('active');
    var random = Math.floor(Math.random() * $divs.length);
    var randombot = Math.floor(Math.random() * $divsbot.length);

    $divs.eq(random).addClass('active');
    $divsbot.eq(randombot).addClass('active');
}

$(document).on('ready page:load', function () {

    highlight();
    setInterval(highlight, 5000);

});

/* --------------------------------------------------
   Cover
-------------------------------------------------- */

//jQuery is required to run this code
$(document).on('ready page:load', function () {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
    $('.homepage-hero-module').css('z-index',-1);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width'),
        windowAspectRatio = windowHeight/windowWidth;

        if(windowAspectRatio > 0.57){
            $(this).height(windowHeight);
        }

        else {
            $(this).width(windowWidth);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

/* --------------------------------------------------
   Contact Form
-------------------------------------------------- */

    $(function() {
        $('.contact-thank').hide();

        $('.contact-submit').click(function() {
            $.post('mailhandler.php', { email: $('.contact-email').val(), name: $('.contact-name').val(), message: $('.contact-message').val() })
                .done(function(data) {
                    console.log(data);
                    $('.contact-name').val('');
                    $('.contact-email').val('');
                    $('.contact-message').val('');
                    $('.contact-submit').hide();
                    $('.contact-thank').show();                 
                });
        });
    });
