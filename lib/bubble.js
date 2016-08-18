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

Bubble.prototype.pop = function (){
  var randomX = Math.floor(Math.random()*canvas.width);
  var randomY = Math.floor(Math.random()*canvas.height);
  this.centerX = randomX;
  this.centerY = randomY;
}

Bubble.prototype.random = function (){
  if(Math.random()*2 > 1){
    this.centerX += (Math.random()*15)
  } else {
    this.centerX -= (Math.random()*15)
  }

  if(Math.random()*2 > 1){
    this.centerY += (Math.random()*15)
  } else {
    this.centerY -= (Math.random()*15)
  }
}

Bubble.prototype.bounce = function (){
  var randomX;
  var randomY;
  var counterX = 0;
  var counterY = 0;
  var speedX = 5;
  var speedY = 5;
    
  var bubble = this;

  setInterval(frame, 5)
  function frame (){

    randomX = Math.floor(Math.random()*10) + 1;
    randomY = Math.floor(Math.random()*10) + 1;

    if(bubble.centerX > canvas.width && counterX % 2 === 0){
      speedX = randomX * -1;
      counterX++;
    } else if (bubble.centerX < 0 && counterX % 2 === 1){
      speedX = randomX;
      counterX++;
    }
    bubble.centerX += speedX

   if(bubble.centerY > canvas.height && counterY % 2 === 0){
      speedY = randomY * -1;
      counterY++;
    } else if (bubble.centerY < 0 && counterY % 2 === 1){
      speedY = randomX;
      counterY++;
    }
    bubble.centerY += speedY
  

  }
 
}


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
