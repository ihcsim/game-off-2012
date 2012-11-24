var CLONE_INTERVAL_MS = 8000;

var activeEnemies = new Array();
var maxNumEnemies = 0;
function initEnemiesCloneEngine(enemies, maxNumEnemiesPerRound){
  activeEnemies = enemies;
  setUpCloneTicker();
  maxNumEnemies = maxNumEnemiesPerRound;
}

function setUpCloneTicker(){
  setInterval(cloneEnemies, CLONE_INTERVAL_MS);
}

function cloneEnemies(){
  if(hasReachedMaxNumEnemiesAllowed)
    return;
    
  $.each(activeEnemies, function(index, enemy){
    if(!enemy.isDead() && isClonePeriod()) 
      activeEnemies.push(cloneEnemy(enemy));
  });
}

function hasReachedMaxNumEnemiesAllowed(){
  return (activeEnemies.length >= maxNumEnemies);
}

function cloneEnemy(enemy){
  return enemy.clone();
}

function isClonePeriod(){
  var randNum = rand(0, 10);
  if(randNum >= 5)
    return true;
  return false;
}