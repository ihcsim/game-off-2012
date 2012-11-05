$(document).ready(function(){
  var isPlaying = false;
  var requestAnimationFrame = null;

  var player = initPlayer();
  var stage = initStage();
  if(stage.isReady() && player.isReady())
    initGame();
  
  function initGame(){
    isPlaying = true;
    initKeyboardEventHandler(player);
    requestAnimationFrame = initRequestAnimationFrame();
    requestAnimationFrame(loop);
  }

  function initRequestAnimationFrame() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
  }
  
  function loop(){
    if(isPlaying) {
      update();
      drawStage(stage);
      drawPlayer(player);
      requestAnimationFrame(loop);
    }
  }
  
  function update(){
    clearStage(stage);
    player.updatePosition();
  }
});