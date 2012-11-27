var player = initPlayer();

test("Player - Sprite image exists", function() {
  ok(player.sprite.src != null, "Unable to locate sprite image resource");
});

test("Player - Sprite image file path matches", function() {
  var expectedSpriteSrc = "file:///C:/dev/workspace/game-off-2012/test/images/player-v2.png";
  ok(player.sprite.src == expectedSpriteSrc, "Sprite image file paths don't match");
});