var CLONE_INTERVAL_MS = 8000;

var activeEnemies = new Array();
function initEnemiesCloneEngine(enemies){
  activeEnemies = enemies;
}

function setUpCloneTicker(){
  setInterval(cloneEnemies, CLONE_INTERVAL_MS);
}

function cloneEnemies(){
  $.each(activeEnemies, function(index, enemy){
    var randNum = rand(0, 10);
    if(randNum >= 5) {
      var clone = cloneEnemy(enemy);
      activeEnemies.push(clone);
    }
  });
}

function cloneEnemy(enemy){
  return enemy.clone();
}