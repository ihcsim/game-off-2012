$(document).ready(function(){
  var isPlaying = false;
  var requestAnimationFrame = null;
  
  var numBullets = 12;
  var shots = new Array();
  var player = initPlayerWithBullets(numBullets);
  var obstacles = initObstacles();
  
  var numEnemies = 5;
  var enemies = initEnemies(numEnemies);
  initEnemiesRespawnEngine(enemies);
  setUpGarbageCollectionTicker();
  setUpRespawnTicker();
 
  initEnemiesCloneEngine(enemies);
  setUpCloneTicker();
  
  var gameDuration = 10000;
  var timer = initTimer(gameDuration);
  
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
    if(timeIsUp())
      calculateScore(totalKillCount());
    
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