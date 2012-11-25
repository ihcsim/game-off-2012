test("Score Calculator - Increment score once", function() {
  incrementScore();
  ok(viewTotalScore() == 200, "Score should be 200.");
  resetTotalScore();
});

test("Score Calculator - Increment score twice", function() {
  incrementScore();
  incrementScore();
  ok(viewTotalScore() == 400, "Score should be 400.");
  resetTotalScore();
});

test("Score Calculator - Increment score six times", function() {
  for(var index = 0; index < 6; index++)
    incrementScore();
  ok(viewTotalScore() == 1200, "Score should be 1200.");
  resetTotalScore();
});

test("Score Calculator - Reset score after six increments", function() {
  for(var index = 0; index < 6; index++)
    incrementScore();
  resetTotalScore();
  ok(viewTotalScore() == 0, "Score should be 0.");
});

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
