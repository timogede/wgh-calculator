jQuery(document).ready(function($) {

  //resize spacer for fixed menu
    console.log("resize spacer for fixed menu");
  var headersize = $("header").outerHeight(true);

  $(".header__spacer").css("height", headersize + "px");

  //push hero content down
  var viewportWidth = $(window).width();
  if(viewportWidth <= 767){
  var aspectRatio = 56.25;
  var pushDown = (aspectRatio / 100) * viewportWidth;
  console.log(pushDown);
  $(".hero__content").css("margin-top", pushDown + "px");
}
  //toggle mobile menu
  $(".header__navigation-toggle").click(function() {
    $("body").toggleClass("header__navigation__mobile-toggle--open");
  });

  $("#menu-mobile li").click(function(){
    $("body").toggleClass("header__navigation__mobile-toggle--open");
  });


  //applications left image positioning
  var containerInsideWidth = $(".application__inside").width();
  var leftEdgeWidth = (viewportWidth - containerInsideWidth) / 2;
if(viewportWidth >= 991){
  $(".application__image").css("width", viewportWidth / 2 + "px");
    $(".application__image").css("left", -1 * leftEdgeWidth + "px");
    console.log("viewportWidth " + viewportWidth);
    console.log("containerInsideWidth " + containerInsideWidth);
  console.log("leftEdgeWidth " + leftEdgeWidth);
}


//herosize minus headersize
if(viewportWidth >= 768){
    var viewportHeight = window.innerHeight;
  var newHerosize = viewportHeight - headersize;
    $(".hero.container").css("height", newHerosize + "px");

}
//slickyslick

  $('.functions__slider').slick({
    fade: true,
    cssEase: 'linear',
    dots: true,
    appendDots: $(".functions__more__buttons"),
    appendArrows: $(".functions__arrows"),
    prevArrow: '<button type="button" class="slick-prev"><</button>',
    nextArrow: '<button type="button" class="slick-next">></button>',


});


$('.advantages__slider').slick({
  cssEase: 'linear',
  dots: true,

  appendDots: $(".advantages__more__buttons"),
  appendArrows: $(".advantages__arrows"),
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<button type="button" class="slick-prev"><</button>',
  nextArrow: '<button type="button" class="slick-next">></button>',
  responsive: [
    {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  {
  breakpoint: 992,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
  }
},
]

});



$('.application__slider').slick({
  fade: true,
  cssEase: 'linear',
  dots: true,
  appendDots: $(".application__more__buttons"),
  appendArrows: $(".application__arrows"),
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><</button>',
  nextArrow: '<button type="button" class="slick-next">></button>',
  responsive: [
    {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  {
  breakpoint: 992,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
  }
},
]

});



$('.multislider__slider__references').slick({
  fade: true,
  cssEase: 'linear',
  dots: true,
  appendDots: $(".multislider__references__more__buttons"),
  appendArrows: $(".multislider__arrows"),
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><</button>',
  nextArrow: '<button type="button" class="slick-next">></button>',
  responsive: [
    {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  {
  breakpoint: 992,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
  }
},
]

});


$('.multislider__slider__case-study').slick({
  fade: true,
  cssEase: 'linear',
  dots: true,
  appendDots: $(".multislider__case-study__more__buttons"),
  appendArrows: $(".multislider__arrows"),
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><</button>',
  nextArrow: '<button type="button" class="slick-next">></button>',
  responsive: [
    {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  {
  breakpoint: 992,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
  }
},
]

});



$('.multislider__slider__voices').slick({
  fade: true,
  cssEase: 'linear',
  dots: true,
  appendDots: $(".multislider__voices__more__buttons"),
  appendArrows: $(".multislider__arrows"),
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><</button>',
  nextArrow: '<button type="button" class="slick-next">></button>',
  responsive: [
    {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  {
  breakpoint: 992,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
  }
},
]

});




$('.multislider__bigslider').slick({
  fade: true,
  cssEase: 'linear',
  dots: false,
  swipe: false,
  // appendDots: $(".multislider__more__buttons"),
  // appendArrows: $(".multislider__arrows"),
  slidesToShow: 1,
  slidesToScroll: 1,
arrows: false,
  responsive: [
    {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  {
  breakpoint: 992,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
  }
},
]

});

//bigslider custom slide buttons
$(".multislider__more__buttons ul li").click(function() {
  var slideIndex = $(this).index();
  $(".multislider__more__buttons ul li").removeClass("active");
  $(this).addClass("active");
  console.log(slideIndex);
  $(".multislider__bigslider").slick("slickGoTo",slideIndex,false);
});









});





$(window).resize(function() {
  //resize spacer for fixed menu
  var headersize = $("header").outerHeight(true);
  var viewportWidth = $(window).width();
  $(".header__spacer").css("height", headersize + "px");
      var viewportHeight = window.innerHeight;
        var newHerosize = viewportHeight - headersize;

  if(viewportWidth <= 767){
  var aspectRatio = 56.25;
  var pushDown = (aspectRatio / 100) * viewportWidth;
  console.log(pushDown);
  $(".hero__content").css("margin-top", pushDown + "px");
}

//applications left image positioning
var containerInsideWidth = $(".application__inside").width();
var leftEdgeWidth = (viewportWidth - containerInsideWidth) / 2;
if(viewportWidth >= 991){
$(".application__image").css("width", viewportWidth / 2 + "px");
  $(".application__image").css("left", -1 * leftEdgeWidth + "px");
  console.log("viewportWidth " + viewportWidth);
  console.log("containerInsideWidth " + containerInsideWidth);
console.log("leftEdgeWidth " + leftEdgeWidth);
}



//herosize minus headersize for resizing
if(viewportWidth <= 767){

    $(".hero.container").css("height", "initial");

}

if(viewportWidth >= 768){

    $(".hero.container").css("height", newHerosize + "px");

}





});
