test("Player center coordinates - Calculate player center coordinates #1", function() {
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.currentPosition = new Coordinates(10, 10);
  player.dimension = new Dimension(10, 20);
  var playerCenterCoord = player.calculateCenterCoordinates();
  ok(playerCenterCoord.posX == 15, "Player center x coordinate is incorrect");
  ok(playerCenterCoord.posY == 20, "Player center y coordinate is incorrect");
});

test("Player center coordinates - Calculate player center coordinates #2", function() {
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.currentPosition = new Coordinates(10, 10);
  player.dimension = new Dimension(30, 50);
  var playerCenterCoord = player.calculateCenterCoordinates();
  ok(playerCenterCoord.posX == 25, "Player center x coordinate is incorrect");
  ok(playerCenterCoord.posY == 35, "Player center y coordinate is incorrect");
});