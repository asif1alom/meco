$(".owl-carousel").owlCarousel({

  autoplay: true,
  loop: true,
  margin: 0,

  dots: true,
  stopOnHover: true,
  items: 1,
  pagination: true,
  slideSpeed: 300,
  paginationSpeed: 400,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',



});



$(".owl-prev").html('<i class="fa fa-long-arrow-left"></i>');
$(".owl-next").html('<i class="fa fa-long-arrow-right"></i>');









AOS.init({
  duration: 1000,
  once: true,
})









$('.testimonial2__carousel').owlCarousel({
  loop: true,
  autoplay: true,
  smartSpeed: 1500,
  autoplayHoverPause: true,
  margin: 30,
  autoplayTimeout: 10000,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 1
    },
    991: {
      items: 1
    },
    992: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
});


////////////////////////////////////////////////////
// Testimonial
$('.testimonial1__text--carousel').slick({
  autoplay: true,
  autoplaySpeed: 6000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.testimonial1__img--carousel'
});
$('.testimonial1__img--carousel').slick({
  autoplay: true,
  autoplaySpeed: 6000,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.testimonial1__text--carousel',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
  centerPadding: 0,
  responsive: [{
    breakpoint: 640,
    settings: {
      arrows: false,
    }
  }]
});


$('.team-cars').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  margin: 20,
  prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i> PREV </button>',
  nextArrow: '<button type="button" class="slick-next"> NEXT <i class="fa fa-angle-right"></i></button>',
  responsive: [

    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

  ],
})