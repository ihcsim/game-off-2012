$(document).ready(function(){
  var isPlaying = false;
  var requestAnimationFrame = null;
  
  var numBullets = 10;
  var player = initPlayerWithBullets(numBullets);
  var obstacles = initObstacles();
  
  var numEnemies = 5;
  var enemies = initEnemies(numEnemies);
  
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
      stage.draw();
      player.draw();
      $.each(enemies, function(index, enemy){
        enemy.draw();
      });
      requestAnimationFrame(loop);
    }
  }
  
  function update(){
    stage.clear();
    player.lookAheadNewPosition();
    if(!playerIsOutOfBounds(player) && !playerCollideWithObstacles(player, obstacles))
      player.commitPosition();
    $.each(enemies, function(index, enemy){
      enemy.updatePosition();
    });
  }
});