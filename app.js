$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 775) {
        $(".nav-text").addClass("scrolling");
    } else {
        $(".nav-text").removeClass("scrolling");
    }
    if (scroll >= 825) {
        $(".nav-bar").addClass("scrolling");
    } else {
        $(".nav-bar").removeClass("scrolling");
    }
    if (scroll >= 825) {
        $(".nav-links").addClass("scrolling");
    } else {
        $(".nav-links").removeClass("scrolling");
    }
});