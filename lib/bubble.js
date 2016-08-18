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
  if(this.centerX < canvas.width){
    this.centerX += 10
  }
};

Bubble.prototype.leftClick = function () {
  if(this.centerX > 0){
    this.centerX -= 10
  }
};

Bubble.prototype.upClick = function () {
  if(this.centerY > 0){
    this.centerY -= 10
  }
};

Bubble.prototype.downClick = function () {
  if(this.centerY < canvas.height){
    this.centerY += 10
  }
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
