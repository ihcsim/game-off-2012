function initKeyboardEventHandler(player){
  $(document).keydown(function(event) {
    player.executeAction(event);
  });
  $(document).keyup(function(e) {
    player.haltAction(e);
  });
}