test("Player - Create Player", function() {
  var spriteSrc = "../images/sprite.png";
  player = new Player(spriteSrc);
  ok(player != null, "Failed to create player");
});

test("Player - Sprite image exists", function() {
  var spriteSrc = "../images/sprite.png";
  player = new Player(spriteSrc);
  ok(player.sprite.src != null, "Unable to locate sprite image resource");
});

test("Player - Sprite image file path matches", function() {
  var expectedSpriteSrc = "file:///C:/dev/workspace/game-off-2012/images/sprite.png";
  player = new Player(expectedSpriteSrc);
  ok(player.sprite.src == expectedSpriteSrc, "Sprite image file paths don't match");
});