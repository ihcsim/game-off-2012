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
    
    if(player.isInMotion()) {
      player.lookAheadNewPosition();
      if(!playerIsOutOfBounds(player) && !playerWillCollideWithObstacles(player, obstacles))
        player.commitPosition();
    }
    
    if(player.isAttacking() && player.hasBullet()) {
      var activeBullet = player.fireBullet();
      activeBullet.draw();
//      if(bulletHitEnemies(activeBullet, enemies)) {
//        console.log("Hit an enemy!");
//        activeBullet.inactive();
//      }
//      else if(bulletHitObstacles(activeBullet, obstacles)) {
//        console.log("Block by an obstacle!");
//        activeBullet.inactive();
//      }
      player.haltAttack();
    }
    
    $.each(enemies, function(index, enemy){
      enemy.updatePosition();
    });
  }
});