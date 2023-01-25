document.addEventListener("DOMContentLoaded", function () {
var firstSlider = new Splide('#first-slider', {
      type: "loop",
      updateOnMove: true,
      pagination: false,
      autoWidth: true,
      drag   : 'free',
      snap   : true,
      arrows: 'slider',
      isNavigation: 'slider',
      focus:0
	});

var secondSlider = new Splide('#second-slider', {
      type: "loop",
      updateOnMove: true,
      pagination: false,
      autoWidth: true,
      drag: false,
      snap: true,
      arrows: false,
      isNavigation: false,
      focus:0
});
	firstSlider.mount(window.splide.Extensions);
  secondSlider.mount(window.splide.Extensions);
  firstSlider.sync(secondSlider);
});
