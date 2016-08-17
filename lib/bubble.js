(function () {
  if (typeof CanvasDemo === "undefined") {
    window.CanvasDemo = {};
  }

var Bubble = CanvasDemo.Bubble = function () {
  this.centerX = 210;
  this.centerY = 300;
  this.radius = 10;
}

//add code here

Bubble.prototype.rightClick = function () {
  this.centerX += 10
};

Bubble.prototype.leftClick = function () {
  this.centerX -= 10
};


Bubble.prototype.render = function (ctx) {
  ctx.fillStyle = "white";
  ctx.beginPath();

  ctx.arc(
    this.centerX,
    this.centerY,
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
}

})();
