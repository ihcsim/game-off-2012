var player = initPlayer();
test("Player Direction- Face north", function() {
  player.turnNorth();
  ok(player.isFacingNorth(), "Player is not facing north on-up-arrow key");
});

test("Player Direction - Face south", function() {
  player.turnSouth();
  ok(player.isFacingSouth(), "Player is not facing south on-down-arrow key");
});

test("Player Direction - Face east", function() {
  player.turnEast();
  ok(player.isFacingEast(), "Player is not facing east on-down-arrow key");
});

test("Player Direction - Face west", function() {
  player.turnWest();
  ok(player.isFacingWest(), "Player is not facing west on-right-arrow key");
});

test("Player Direction- Facing north on-up-arrow key", function() {
  var event = jQuery.Event("keydown", {keyCode:38});
  player.executeAction(event);
  ok(player.isFacingNorth(), "Player is not facing north on-up-arrow key");
});

test("Player Direction - Facing south on-down-arrow key", function() {
  var event = jQuery.Event("keydown", {keyCode:40});
  player.executeAction(event);
  ok(player.isFacingSouth(), "Player is not facing south on-down-arrow key");
});

test("Player Direction - Facing east on-right-arrow key", function() {
  var event = jQuery.Event("keydown", {keyCode:39});
  player.executeAction(event);
  ok(player.isFacingEast(), "Player is not facing east on-down-arrow key");
});

test("Player Direction - Facing west on-left-arrow key", function() {
  var event = jQuery.Event("keydown", {keyCode:37});
  player.executeAction(event);
  ok(player.isFacingWest(), "Player is not facing west on-right-arrow key");
});