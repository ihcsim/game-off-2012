var GARBAGE_COLLECTION_INTERVAL_MS = 4000;
var ENEMIES = new Array();

function initEnemiesRespawnEngine(enemies){
  ENEMIES = enemies;
}

function setUpGarbageCollectionTicker(){
  setInterval(clearDeadEnemies, GARBAGE_COLLECTION_INTERVAL_MS);
}

function clearDeadEnemies(){
  $.each(ENEMIES, function(index, enemy){
    if(enemy.isDead()) {
      ENEMIES.splice(index, 1);
      enemy.clear();
    }
  });
}