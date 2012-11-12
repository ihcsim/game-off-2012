test("Stage - Build stage", function() {
  var spriteSrc = "../images/sprite.png";
  var stage = new Stage(spriteSrc);
  ok(stage != null, "Failed to build stage");
});

test("Stage - Sprite image exists", function() {
  var spriteSrc = "../images/sprite.png";
  var stage = new Stage(spriteSrc);
  ok(stage.sprite.src != null, "Unable to locate sprite image resource");
});

test("Stage - Sprite image file path matches", function() {
  var expectedSpriteSrc = "file:///C:/dev/workspace/game-off-2012/images/sprite.png";
  var stage = new Stage(expectedSpriteSrc);
  ok(stage.sprite.src == expectedSpriteSrc, "Sprite image file paths don't match");
});

test("Stage - Height is set", function() {
  var spriteSrc = "../images/sprite.png";
  var stage = new Stage(spriteSrc);
  ok(stage.dimension.height == 600, "Sprite image file paths don't match");
});

test("Stage - Width is set", function() {
  var spriteSrc = "../images/sprite.png";
  var stage = new Stage(spriteSrc);
  ok(stage.dimension.width == 800, "Sprite image file paths don't match");
});