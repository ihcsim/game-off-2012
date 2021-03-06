var RESPAWN_INTERVAL_MS = 5000;

var activeEnemies = new Array();
var maxNumActiveEnemies = 0;

function initEnemiesRespawnEngine(enemies){
  activeEnemies = enemies;
  maxNumActiveEnemies = activeEnemies.length;
  setUpRespawnTicker();
}

function setUpRespawnTicker(){
  setInterval(respawnEnemies, RESPAWN_INTERVAL_MS);
}

function respawnEnemies(){
  var respawnCounts = respawnCount();
  for(var i = 0; i < respawnCounts; i++)
    activeEnemies.push(initEnemy());
}

function respawnCount(){
  return maxNumActiveEnemies - activeEnemies.length;
}

function numActiveEnemies(){
  return activeEnemies.length;
}