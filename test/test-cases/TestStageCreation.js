var stage = initStage();
test("Stage - Build stage", function() {
  ok(stage != null, "Failed to build stage");
});

test("Stage - Sprite image exists", function() {
  ok(stage.sprite.src != null, "Unable to locate sprite image resource");
});

test("Stage - Sprite image file path matches", function() {
  var expectedSpriteSrc = "file:///C:/dev/workspace/game-off-2012/test/images/sprite.png";
  ok(stage.sprite.src == expectedSpriteSrc, "Sprite image file paths don't match");
});

test("Stage - Height is set", function() {
  ok(stage.dimension.height == 600, "Sprite image height don't match");
});

test("Stage - Width is set", function() {
  ok(stage.dimension.width == 800, "Sprite image width don't match");
});