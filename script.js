"use strict";

let canvas, ctx;

const WIDTH = innerWidth;
const HEIGHT = innerHeight;

const FPS = 90;

(function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
})();

const car = new Car("cars.png", 122, 85, 26, 48);

const _interval = setInterval(function() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
  
  check_inputs();
  car.update();

  car.render(ctx);
}, 1000 / FPS);
