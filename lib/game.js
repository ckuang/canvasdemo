(function () {
  if (typeof CanvasDemo === "undefined") {
    window.CanvasDemo = {};
  }

  var Game = CanvasDemo.Game = function (xDim, yDim) {
    this.xDim = xDim;
    this.yDim = yDim;
    this.bubble = new CanvasDemo.Bubble()
  };

  Game.prototype.render = function (ctx) {
    ctx.clearRect(0, 0, this.xDim, this.yDim);
    ctx.fillStyle = "#423C40";
    ctx.fillRect(0, 0, 420, 600);
    this.bubble.render(ctx);
  };

  Game.prototype.handleClick = function (e) {
    e.preventDefault()
    var keyCode = e.keyCode;
    switch (keyCode) {
      case 37:
        this.bubble.leftClick();
        break;
      case 39:
        this.bubble.rightClick();
        break;
      case 38:
        this.bubble.upClick();
        break; 
      case 40:
        this.bubble.downClick();
        break; 

      //add code here 
    }
  };

  Game.prototype.start = function (canvasEl) {
    var ctx = canvasEl.getContext("2d");
    document.addEventListener("keydown", this.handleClick.bind(this), false)
    var that = this

    var animateCallback = function() {
      this.render(ctx);
      requestAnimationFrame(animateCallback);
    }.bind(this);

    animateCallback();
  };
})();
