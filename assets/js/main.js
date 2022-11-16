$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,

    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
    
    
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,

    vertical:true,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    verticalSwiping:true,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
        }
    }

]

  
});
// tab end 
var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

// top button end
// NAVE scroll
$(document).ready(function() {
    window.addEventListener("scroll", function() {
        var header = document.querySelector(".header");
        header.classList.toggle("sticky-bar", window.scrollY > 50);
    });

});
$(document).ready(function() {
    window.addEventListener("scroll", function() {
        var headers = document.querySelector(".headers");
        headers.classList.toggle("sticky-bar", window.scrollY > 50);
    });

});


$('.commercial_slider').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    fade: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='arrow_left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='arrow_right' aria-hidden='true'></i></button>",
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
    
        ]
  
  
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
