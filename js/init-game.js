$(document).ready(function(){
  var stage = $("#stage"),
      stageCtx = stage[0].getContext("2d"),
      stageCanvas = $("#stage-canvas"),
      stageCanvasCtx = stageCanvas[0].getContext("2d"),
      stageWidth = stage[0].width,
      stageHeight = stage[0].height,
      isPlaying = false,
      requestAnimFrame = window.requestAnimationFrame ||
                         window.webkitRequestAnimationFrame ||
                         window.mozRequestAnimationFrame ||
                         window.oRequestAnimationFrame ||
                         window.msRequestAnimationFrame ||
                         function(callback) {
                           window.setTimeout(callback, 1000 / 60);
                         },
     imgSprite = new Image();
     imgSprite.src = "images/sprite.png";
     imgSprite.addEventListener("load", initGame, false);

  function initGame(){
    begin();
  }
  
  function begin(){
    var imgStartX = 0;
    var imgStartY = 0;
    var imgWidth = stageWidth;
    var imgHeight = stageHeight;
    var stageStartX = 0;
    var stageStartY = 0;
    
    stageCtx.drawImage(imgSprite, imgStartX, imgStartY, imgWidth, imgHeight, stageStartX, stageStartY, stageWidth, stageHeight);
    isPlaying = true;
    requestAnimFrame(loop);
  }
  
  function loop(){
    if(isPlaying) {
      update();
      draw();
      requestAnimFrame(loop);
    }
  }
  
  function update(){
    clearCanvas(stageCanvasCtx);
  }
  
  function clearCanvas(ctx) {
    var startX = 0;
    var startY = 0;
    ctx.clearRect(startX, startY, canvaxWidth, canvasHeight);
  }
  
  function draw(){
    
  }
  
  function randomRange (min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
});