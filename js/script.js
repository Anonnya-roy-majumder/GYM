$(function () {

    'use strict';


    // banner  js start

    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,

    });


    // gallery js start


  

    // testimonial js start


    $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        
         responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows:false
      }
    }

  ]

    });




   




    // slider js start



    $('.client_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows:false,
        dots: false,
        nextArrow: '<i class="fas fa-angle-double-right nxt"></i>',
        prevArrow: '<i class="fas fa-angle-double-left prv"></i>',
        
        
        
         responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
            arrows:false
      
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
          arrows:false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
          arrows:false
      }
    }
   
  ]
    });
     // counter js start

    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
  $('.venobox').venobox();



});
