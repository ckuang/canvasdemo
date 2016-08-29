(function () {
  if (typeof CanvasDemo === "undefined") {
    window.CanvasDemo = {};
  }
  var isRandomButton = false, 
      isMoveButton = false,
      isPopButton = false; 

  function generateBubbleInfo () {
      var colors = ["red", "orange", "yellow", "green", "blue", "purple"]
      var randomX = Math.floor(Math.random()*canvas.width);
      var randomY = Math.floor(Math.random()*canvas.height);
      var randomColor = colors[Math.floor(Math.random()*colors.length)]
      return {ranX: randomX, ranY: randomY, color: randomColor}
  }

  var Game = CanvasDemo.Game = function (xDim, yDim) {
    this.xDim = xDim;
    this.yDim = yDim;
    this.bubbles = []

    for (var i = 0; i < 20; i++) {
      var bubbleInfo = generateBubbleInfo();
      this.bubbles.push(new CanvasDemo.Bubble(bubbleInfo.ranX, bubbleInfo.ranY, bubbleInfo.color))
    }
  };


  Game.prototype.render = function (ctx) {
    ctx.clearRect(0, 0, this.xDim, this.yDim);
    ctx.fillStyle = "#423C40";
    ctx.fillRect(0, 0, 420, 600);
    for (var i = 0; i < this.bubbles.length; i++) {
      this.bubbles[i].render(ctx)
    }
  };

  Game.prototype.handleClick = function (e) {
    e.preventDefault()
    var keyCode = e.keyCode;
    console.log(keyCode)
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
    var that = this
    for (var i = 0; i < this.bubbles.length; i++) {
      window.setInterval(
        that.bubbles[i].popOff.bind(that.bubbles[i]), 1000);
    }
  }

  var bounce = Game.prototype.bounceButton = function (){
    //clear set interval for 
    clearInterval(1)
    var that = this
    for (var i = 0; i < this.bubbles.length; i++) {
      that.bubbles[i].bounce.bind(that.bubbles[i])();
    }
  }  

  Game.prototype.addButton = function (){
    var bubbleInfo = generateBubbleInfo();
    var newBubble = this.bubbles.push(new CanvasDemo.Bubble(bubbleInfo.ranX, bubbleInfo.ranY, bubbleInfo.color))
  }

  Game.prototype.randomButton = function (event){
    isRandomButton = true;
    var that = this
    for (var i = 0; i < this.bubbles.length; i++) {
      window.setInterval(
        that.bubbles[i].random.bind(that.bubbles[i]), 100);
    }

  }

  Game.prototype.start = function (canvasEl) {
    var ctx = canvasEl.getContext("2d");
    document.addEventListener("keydown", this.handleClick.bind(this), false)
    var button = document.querySelectorAll('button')
    button[0].addEventListener("click", this.popButton.bind(this), false)
    button[1].addEventListener("click", this.bounceButton.bind(this), false)
    button[2].addEventListener("click", this.randomButton.bind(this), false)
    button[3].addEventListener("click", this.addButton.bind(this), false)

    var that = this

    var animateCallback = function() {
      this.render(ctx);
      requestAnimationFrame(animateCallback);
    }.bind(this);

    animateCallback();
  };
})();
