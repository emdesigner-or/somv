var wrappers = document.querySelectorAll('.small-img-wr');
var image = document.querySelectorAll('.people-img');
var timer;
var delay = 100;

wrappers.forEach((value, i) => {
		let scale = gsap.to(value.querySelector(".people-img"),{scaleX:1.2, scaleY:1.2, duration:1, paused: true});
		$(value).hover(function() {
          timer = setTimeout(function() {
             scale.play();
          }, delay);
      }, function() {
          scale.reverse();
          clearTimeout(timer);
      });
});
