test("Enemy respawn engine - No death, 0 respawn", function() {
  var enemies = new Array();
  enemies.push(initEnemy());
  enemies.push(initEnemy());
  enemies.push(initEnemy());
  enemies.push(initEnemy());
  enemies.push(initEnemy());
  
  initEnemiesRespawnEngine(enemies);
  ok(respawnCount() == 0, "Incorrect number of respawns. Expected 0 respawn.");
});

test("Enemy respawn engine - 3 deaths, 3 respawns", function() {
  var enemies = new Array();
  enemies.push(initEnemy());
  enemies.push(initEnemy());
  enemies.push(initEnemy());
  enemies.push(initEnemy());
  enemies.push(initEnemy());
  
  var numDeads = 3;
  for(var index = 0; index < numDeads; index++)
    enemies[index].die();
  
  initEnemiesRespawnEngine(enemies);
  clearDeadTestEnemies();
  ok(respawnCount() == 3, "Incorrect number of respawns. Expected 3 respawns.");
});

test("Enemy respawn engine - 5 deaths, 5 respawns", function() {
  var enemies = new Array();
  enemies.push(initEnemy());
  enemies.push(initEnemy());
  enemies.push(initEnemy());
  enemies.push(initEnemy());
  enemies.push(initEnemy());
  
  var numDeads = 5;
  for(var index = 0; index < numDeads; index++)
    enemies[index].die();
  
  initEnemiesRespawnEngine(enemies);
  clearDeadTestEnemies(enemies);
  ok(respawnCount() == 5, "Incorrect number of respawns. Expected 5 respawns.");
});

function clearDeadTestEnemies(){
  for(var index = activeEnemies.length - 1; index >= 0; index--){
    if(activeEnemies[index].isDead())
      activeEnemies.splice(index, 1);
  }
}