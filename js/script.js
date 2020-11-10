
$('.possibility__slider_1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    nextArrow: $('.possibility__next_1'),
    prevArrow: $('.possibility__prev_1'),
    responsive: [
        {
          breakpoint: 1130,
          settings: {
            variableWidth: true,
            slidesToShow: 1,
          }
        }
    ]
});

$('.possibility__slider_2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    nextArrow: $('.possibility__next_2'),
    prevArrow: $('.possibility__prev_2'),
    responsive: [
        {
          breakpoint: 1130,
          settings: {
            variableWidth: true,
            slidesToShow: 1,
          }
        }
    ]
});

