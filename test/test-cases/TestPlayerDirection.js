test("Player Direction- Facing north on-up-arrow key", function() {
  var event = jQuery.Event("keydown", {keyCode:38});
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.executeAction(event);
  ok(player.isFacingNorth(), "Player is not facing north on-up-arrow key");
});

test("Player Direction - Facing south on-down-arrow key", function() {
  var event = jQuery.Event("keydown", {keyCode:40});
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.executeAction(event);
  ok(player.isFacingSouth(), "Player is not facing south on-down-arrow key");
});

test("Player Direction - Facing east on-right-arrow key", function() {
  var event = jQuery.Event("keydown", {keyCode:39});
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.executeAction(event);
  ok(player.isFacingEast(), "Player is not facing east on-down-arrow key");
});

test("Player Direction - Facing west on-left-arrow key", function() {
  var event = jQuery.Event("keydown", {keyCode:37});
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.executeAction(event);
  ok(player.isFacingWest(), "Player is not facing west on-right-arrow key");
});