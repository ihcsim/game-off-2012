$(document).ready(function(){
  var stage = $("#stage"),
      stageCtx = stage[0].getContext("2d"),
      stageCanvas = $("#stage-canvas"),
      stageCanvasCtx = stageCanvas[0].getContext("2d"),
      stageWidth = stage[0].width,
      stageHeight = stage[0].height,
      gameStarted = false,
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
    stageCtx.drawImage(imgSprite, 0, 0, stageWidth, stageHeight, 0, 0, stageWidth, stageHeight);
    gameStarted = true;
    requestAnimFrame(loop);
  }
  
  function loop(){
    
  }
});