$(document).ready(function(){
  var isPlaying = false;
  var requestAnimationFrame = null;

  var player = initPlayer();
  var stage = initStage();
  if(stage.isReady() && player.isReady())
    initGame();
  
  function initGame(){
    isPlaying = true;
    initKeyboardEventHandler();
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
  
  function initKeyboardEventHandler(){
    $(document).keydown(function(event) {
      player.executeAction(event);
    });
    $(document).keyup(function(e) {
      player.haltAction(e);
    });
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