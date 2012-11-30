var GARBAGE_COLLECTION_INTERVAL_MS = 4000;

var activeEnemies = new Array();

function initGarbageCollector(enemies){
  activeEnemies = enemies;
  setUpGarbageCollectionTicker();
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