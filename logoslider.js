$( document).ready(function() {

$('.list').slick({
  dots: false,
  infinite: true,
  speed: 600,
  arrows: false,
  slidesToShow: 10,
  slidesToScroll: 1,
  centerMode: false,
  focusOnSelect: true,
  variableWidth: true,
  touchThreshold:300,
  autoplay: true,
  autoplaySpeed: 10000,
  asNavFor: '.card-list'
});

$('.card-list').slick({
  dots: false,
  infinite: true,
  speed: 600,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
  focusOnSelect: true,
  touchThreshold:300,
  asNavFor: '.list'
});


$('.slider-next').click(function(){
    $(this).closest('.slider-content-wr.logo').find(".list").slick('slickNext');
});

});
