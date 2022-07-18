$(function() {

    /* MENU */
    $('.nav-toggle, .nav-close').click(function(e) {                // open and close menu
        e.preventDefault();                                         // when you click the button, prevent not to redirect to another window
        $('.nav').toggleClass('active');                            // toggleClass checks whether 'active' is active or not
    });

    /* HEADER */
    $(window).scroll(function() {                                   // header fixed
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('fixed');

        } else {
            $('.header').removeClass('fixed');
        }
    });
});