test("Player - Create player", function() {
  var factory = new DOMFactory();
  var testStage = factory.createTestStageDOM();
  var spriteSrc = "../images/sprite.png";
  var player = new Player(testStage, spriteSrc);
  ok(player != null, "Failed to create player");
});

test("Player - Sprite image exists", function() {
  var factory = new DOMFactory();
  var testStage = factory.createTestStageDOM();
  var spriteSrc = "../images/sprite.png";
  var player = new Player(testStage, spriteSrc);
  ok(player.sprite.src != null, "Unable to locate sprite image resource");
});

test("Player - Sprite image file path matches", function() {
  var factory = new DOMFactory();
  var testStage = factory.createTestStageDOM();
  var expectedSpriteSrc = "file:///C:/dev/workspace/game-off-2012/images/sprite.png";
  var player = new Player(testStage, expectedSpriteSrc);
  ok(player.sprite.src == expectedSpriteSrc, "Sprite image file paths don't match");
});