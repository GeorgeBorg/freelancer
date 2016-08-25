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

$(document).on('ready page:load', function () {
      $(".hero__button").click(function() {
        $('html,body').animate({
            scrollTop: $("#services").offset().top},
            1000,'easeOutQuart')
        });
});

/* --------------------------------------------------
   Hero Button show P
-------------------------------------------------- */
$(document).on('ready page:load', function () {
      $(".hero__button").mouseover(function() {
        $('.hero__button-text').addClass('hero__button-text--showed');
        });

      $(".hero__button").mouseout(function() {
        $('.hero__button-text').removeClass('hero__button-text--showed');
        });

});
/* --------------------------------------------------
   Contact Form
// -------------------------------------------------- */

$("#contact-form").validate({
  submitHandler: function(form) {
    $.ajax({
      url: "//formspree.io/info@jackandgeorge.co", 
      method: "POST",
      data: {
        name: $(form).find("input[name='name']").val(),
        _replyto: $(form).find("input[name='_replyto']").val(),
        message: $(form).find("textarea[name='message']").val()
      },
      dataType: "json",
      success: function() {
        $("#submit-success").toggle();
        $("#contact-form").toggle();
      },
      error: function() {
        $("#submit-errors").toggle();        
      }
    });
  }
});

