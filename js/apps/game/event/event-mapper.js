function initKeyboardEventHandler(player){
  $(document).keydown(function(event) {
    player.executeAction(event);
  });
  $(document).keyup(function(e) {
    player.haltAction(e);
  });
}

function initEnemyDiedEventHandler(){
  $(document).bind("enemyDiedEvent", incrementScore);
}

function triggerScoreCalculationOnEnemyDiedEvent(){
  var event  = jQuery.Event("enemyDiedEvent");
  $(document).trigger(event);
}