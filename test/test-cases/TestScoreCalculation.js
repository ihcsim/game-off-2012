test("Score Calculator - Enemy on-dead event triggers score increments.", function() {
  initEnemyDiedEventHandler();
  var enemy = initEnemy();
  enemy.die();
  unbindEnemyDiedEventHandler();
  ok(viewTotalScore() == 200, "Score should have been incremented by 200.");
  resetTotalScore();
});

test("Score Calculator - 5 enemies on-dead events trigger score increments.", function() {
  initEnemyDiedEventHandler();
  var enemy = initEnemies(5);
  $.each(enemy, function(index, enemy){
    enemy.die();
  });
  unbindEnemyDiedEventHandler();
  ok(viewTotalScore() == 1000, "Score should have been incremented by 1000.");
  resetTotalScore();
});

function unbindEnemyDiedEventHandler(){
  $(document).unbind("enemyDiedEvent", incrementScore);
}
