$(document).ready(function(){
  var STARTING_NUM_BULLETS = 11;
  var STARTING_NUM_ENEMIES = 10;
  var MAX_NUM_ENEMIES_PER_ROUND = 20;
  var ROUND_DURATION = 20000;
  
  var isPlaying = false;
  var requestAnimationFrame = null;
  
  var shots = new Array();
  var player = initPlayerWithBullets(STARTING_NUM_BULLETS);
  var obstacles = initObstacles();
  
  var enemies = initEnemies(STARTING_NUM_ENEMIES);
  initEnemiesRespawnEngine(enemies);
  initGarbageCollector(enemies);
  initEnemiesCloneEngine(enemies, MAX_NUM_ENEMIES_PER_ROUND);
  initPlayerAnimationEngine(player);
  
  var timer = initTimer(ROUND_DURATION);
  
  var stage = initStage();
  if(stage.isReady() && player.isReady())
    initGame();
  
  function initGame(){
    isPlaying = true;
    initKeyboardEventHandler(player);
    initEnemyDiedEventHandler();
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
    if(timeIsUp()) {
      viewTotalScore();
      resetTotalScore();
    }
    
    if(isPlaying) {
      updateWorld();
      drawFrame();
      requestAnimationFrame(loop);
    }
  }
  
  function timeIsUp(){
    return (timer.countDown() == 0);
  }
  
  function drawFrame(){
    stage.clear();
    stage.draw();
    player.draw();
    $.each(enemies, function(index, enemy){
      enemy.draw();
    });
    $.each(shots, function(index, bullet){
      if(bullet.isActive())
        bullet.draw();
    });
  }
  
  function updateWorld(){
    if(player.isInMotion()) {
      player.lookAheadNewPosition();
      if(!playerIsOutOfBounds(player) && !playerWillCollideWithObstacles(player, obstacles))
        player.commitPosition();
    }
    
    if(player.isAttacking()) {
      var shot = player.fireBullet();
      if(shot)
        shots.push(shot);
      player.haltAttack();
    }
    
    $.each(enemies, function(index, enemy){
      enemy.updatePosition();
    });
    
    $.each(shots, function(index, bullet){
      if(!bullet.isActive())
        return;
      bullet.updatePosition();
      decommissionBulletIfOutOfBounds(bullet);
      if(bullet.isActive())
        decommissionBulletAndEnemyOnShot(bullet, enemies);
      if(bullet.isActive())
        decommissionBulletIfHitObstacles(bullet, obstacles);
    });
  }
});