$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 600) {
        $(".image").addClass("scrolling");
    } else {
        $(".image").removeClass("scrolling");
    }
    if (scroll >= 600) {
        $(".nav-text").addClass("scrolling");
    } else {
        $(".nav-text").removeClass("scrolling");
    }
    if (scroll >= 600) {
        $(".nav-bar").addClass("scrolling");
    } else {
        $(".nav-bar").removeClass("scrolling");
    }
    if (scroll >= 600) {
        $(".nav-links").addClass("scrolling");
    } else {
        $(".nav-links").removeClass("scrolling");
    }
});