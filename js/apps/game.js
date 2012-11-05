$(document).ready(function(){
  var stage = $("#stage");

  var isPlaying = false;
  var requestAnimationFrame = null;

  var spriteSrc = "images/sprite.png";
  var player = new Player(spriteSrc);
  var newStage = new Stage(spriteSrc, stage[0]);
  if(newStage.isReady())
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
      drawStage(newStage);
      drawPlayer(player);
      requestAnimationFrame(loop);
    }
  }
  
  function update(){
    clearStage(newStage);
    player.updatePosition();
  }
});