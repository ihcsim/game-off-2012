var GARBAGE_COLLECTION_INTERVAL_MS = 4000;

var activeEnemies = new Array();
var maxNumActiveEnemies = 0;

function initEnemiesRespawnEngine(enemies){
  activeEnemies = enemies;
  maxNumActiveEnemies = activeEnemies.length;
}

function respawnEnemies(){
  var respawnCount = respawnCount();
  for(var i = 0; i < respawnCount; i++)
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
      activeEnemies.splice(index, 1);
      activeEnemies[index].clear();
    }
  }
}

function numActiveEnemies(){
  return activeEnemies.length;
}