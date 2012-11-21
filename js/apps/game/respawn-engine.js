var GARBAGE_COLLECTION_INTERVAL_MS = 4000;
var RESPAWN_INTERVAL_MS = 5000;

var activeEnemies = new Array();
var maxNumActiveEnemies = 0;

function initEnemiesRespawnEngine(enemies){
  activeEnemies = enemies;
  maxNumActiveEnemies = activeEnemies.length;
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
  var respawnCount = maxNumActiveEnemies - activeEnemies.length;
  if(respawnCount < 0)
    return 0;
  return respawnCount;
}

function setUpGarbageCollectionTicker(){
  setInterval(clearDeadEnemies, GARBAGE_COLLECTION_INTERVAL_MS);
}

function clearDeadEnemies(){
  for(var index = activeEnemies.length - 1; index >= 0; index--){
    if(activeEnemies[index].isDead()) {
      activeEnemies[index].clear();
      activeEnemies.splice(index, 1);
    }
  }
}

function numActiveEnemies(){
  return activeEnemies.length;
}