// tab end
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// top button end
// NAVE scroll
$(document).ready(function () {
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".nav");
    nav.classList.toggle("sticky-bar", window.scrollY > 50);
  });
});
$(document).ready(function () {
  window.addEventListener("scroll", function () {
    var headers = document.querySelector(".headers");
    headers.classList.toggle("sticky-bar", window.scrollY > 50);
  });
});
// nave end
$(document).ready(function ($) {
  //Check if an element was in a screen
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return elemBottom <= docViewBottom;
  }
  //Count up code
  function countUp() {
    $(".counter").each(function () {
      var $this = $(this), // <- Don't touch this variable. It's pure magic.
        countTo = $this.attr("data-count");
      ended = $this.attr("ended");

      if (ended != "true" && isScrolledIntoView($this)) {
        $({ countNum: $this.text() }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 2500, //duration of counting
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
        $this.attr("ended", "true");
      }
    });
  }
  //Start animation on page-load
  if (isScrolledIntoView(".counter")) {
    countUp();
  }
  //Start animation on screen
  $(document).scroll(function () {
    if (isScrolledIntoView(".counter")) {
      countUp();
    }
  });
});
// counter end

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,

  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 5,
  slidesToScroll: 1,

  vertical: true,
  asNavFor: ".slider-for",
  dots: false,
  focusOnSelect: true,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
});
// tab end
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// top button end
// NAVE scroll
$(document).ready(function () {
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    header.classList.toggle("sticky-bar", window.scrollY > 50);
  });
});
$(document).ready(function () {
  window.addEventListener("scroll", function () {
    var headers = document.querySelector(".headers");
    headers.classList.toggle("sticky-bar", window.scrollY > 50);
  });
});

$(".commercial_slider").slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  fade: false,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='arrow_left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='arrow_right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
//   $('.slider-nav').slick({
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: false,
//     arrows: false,
//     centerMode: false,
//     focusOnSelect: true
//   });
// room slider end
