$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= $(window).height()) {
        $(".image").addClass("scrolling");
    } else {
        $(".image").removeClass("scrolling");
    }
    if (scroll >= $(window).height()*0.94) {
        $(".nav-text").addClass("scrolling");
    } else {
        $(".nav-text").removeClass("scrolling");
    }
    if (scroll >= $(window).height()) {
        $(".nav-bar").addClass("scrolling");
    } else {
        $(".nav-bar").removeClass("scrolling");
    }
    if (scroll >= $(window).height()) {
        $(".nav-links").addClass("scrolling");
    } else {
        $(".nav-links").removeClass("scrolling");
    }
});