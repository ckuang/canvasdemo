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
    }
  };

  Game.prototype.popButton = function (e) {
    var bubble = this
    window.setInterval(function () {bubble.bubble.pop()}, 1000);
  }

  Game.prototype.bounceButton = function (){
    this.bubble.bounce()
  }  

  Game.prototype.addButton = function (){
    this.bubble.add()
  }

  Game.prototype.randomButton = function (){
    var bubble = this
    var random = window.setInterval(function () {bubble.bubble.random()}, 10);
    console.log(random)
  }

  Game.prototype.start = function (canvasEl) {
    var ctx = canvasEl.getContext("2d");
    document.addEventListener("keydown", this.handleClick.bind(this), false)

    var button = document.querySelectorAll('button')
    button[0].addEventListener("click", this.popButton.bind(this), false)
    button[1].addEventListener("click", this.bounceButton.bind(this), false)
    button[2].addEventListener("click", this.randomButton.bind(this), false)

    var animateCallback = function() {
      this.render(ctx);
      requestAnimationFrame(animateCallback);
    }.bind(this);

    animateCallback();
  };
})();
