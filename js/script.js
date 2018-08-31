(function($) {
  //loading icon
   $(".se-pre-con").fadeOut("slow");
  //fixed nav
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if ( scrollTop > 150 ) {
      $("#nav_global").addClass("fixed");
    }
    else {
      $("#nav_global").removeClass("fixed");
    }
  });
  // nav sp
  $(".nav_btn").on("click", function() {
    $(this).toggleClass('nav_btn_actived');
    $(this).next().toggleClass('nav_actived');
    return false;
  });
  $("#nav_global ul li a").click(function() {
    $(".main_nav").removeClass("nav_actived");
    $(".nav_btn").removeClass("nav_btn_actived");
  });
  //btn more
  $(".btn_more").click(function() {
    $(this).toggleClass("active");
    $(this).parent().prev().slideToggle();
  });
  //service
  $(".service_list_item").hover(function() {
    var service_txt = $(this).find(".service_list_item_content").html();
    $(this).find(".hover-img").fadeOut();
    $(".service_content_show .service_abs").html(service_txt);
  }, function() {
    $(this).find(".hover-img").fadeIn();
    $(".service_content_show .service_abs").html("");
  });
  //works
  $('.slick').slick({
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }, ]
  });
//site
  $('.site_slider').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }, ]
  });


  // anchor link
  $('a[href^="#"]').on('click', function(e) {
    //e.preventDefault();
    var target = this.hash;
    //alert(target);
    $target = $(target);
    $('html, body').stop().animate({
      //'scrollTop': $target.offset().top - headerHeight
      'scrollTop': $target.offset().top
    }, 1200, 'swing');
    return false;
  });
})(jQuery);
