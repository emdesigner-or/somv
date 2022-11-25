$( document).ready(function() {

$('.list').slick({
  dots: false,
  infinite: true,
  speed: 600,
  arrows: false,
  slidesToShow: 8,
  slidesToScroll: 1,
  centerMode: false,
  variableWidth: true,
  focusOnSelect: true,
  touchThreshold:300,
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
    $(this).closest('.slider-content-wr').find(".list").slick('slickNext');
});

});
