
$('.possibility__slider_1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    nextArrow: $('.possibility__next_1'),
    prevArrow: $('.possibility__prev_1'),
});

$('.possibility__slider_2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    nextArrow: $('.possibility__next_2'),
    prevArrow: $('.possibility__prev_2'),
});

$(document).ready(function(){

  $('.nav__burger').click(function(event){
      $('.nav__burger').toggleClass('active');
      
  })
})

