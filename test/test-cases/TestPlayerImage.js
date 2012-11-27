var player = initPlayer();

test("Player - Sprite image exists", function() {
  ok(player.sprite.src != null, "Unable to locate sprite image resource");
});

test("Player - Sprite image file path matches", function() {
  var expectedSpriteSrc = "file:///C:/dev/workspace/game-off-2012/test/images/player-v2.png";
  ok(player.sprite.src == expectedSpriteSrc, "Sprite image file paths don't match");
});

test("Player - Sprite image file x-coordinate is 0", function() {
  var expectedSrcXCoordinate = 0;
  ok(player.image.src.posX == expectedSrcXCoordinate, "Sprite image file x-coordinate isn't 0");
});

test("Player - Sprite image file y-coordinate is 4", function() {
  var expectedSrcYCoordinate = 4;
  ok(player.image.src.posY == expectedSrcYCoordinate, "Sprite image file y-coordinate isn't 4");
});

test("Player - Sprite image width is 40", function() {
  var expectedWidth = 40;
  ok(player.dimension.width == expectedWidth, "Sprite image width isn't 40");
});

test("Player - Sprite image height is 58", function() {
  var expectedHeight = 58;
  ok(player.dimension.height == expectedHeight, "Sprite image height isn't 58");
});