$(window).scroll(function() {    
    var blockscroll = $(window).scrollTop();
    if (blockscroll >= $(window).height()*0.05) {
        $(".image").addClass("scrolling");
    } else {
        $(".image").removeClass("scrolling");
    }
    if (blockscroll >= $(window).height()*0.05) {
        $(".nav-bar a").addClass("scrolling");
    } else {
        $(".nav-bar a").removeClass("scrolling");
    }
    if (blockscroll >= $(window).height()*0.05) {
        $(".nav-bar").addClass("scrolling");
    } else {
        $(".nav-bar").removeClass("scrolling");
    }
    if (blockscroll >= $(window).height()*0.05) {
        $(".nav-links").addClass("scrolling");
    } else {
        $(".nav-links").removeClass("scrolling");
    }
});

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });