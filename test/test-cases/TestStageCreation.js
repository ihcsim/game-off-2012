test("Stage - Build stage", function() {
  var factory = new DOMFactory();
  var testStageDOM = factory.createTestStageDOM();
  var spriteSrc = "../images/sprite.png";
  var stage = new Stage(spriteSrc, testStageDOM);
  ok(stage != null, "Failed to build stage");
});

test("Stage - Sprite image exists", function() {
  var factory = new DOMFactory();
  var testStageDOM = factory.createTestStageDOM();
  var spriteSrc = "../images/sprite.png";
  var stage = new Stage(spriteSrc, testStageDOM);
  ok(stage.sprite.src != null, "Unable to locate sprite image resource");
});

test("Stage - Sprite image file path matches", function() {
  var factory = new DOMFactory();
  var testStageDOM = factory.createTestStageDOM();
  var expectedSpriteSrc = "file:///C:/dev/workspace/game-off-2012/images/sprite.png";
  var stage = new Stage(expectedSpriteSrc, testStageDOM);
  ok(stage.sprite.src == expectedSpriteSrc, "Sprite image file paths don't match");
});

test("Stage - Height is set", function() {
  var factory = new DOMFactory();
  var testStageDOM = factory.createTestStageDOM();
  var spriteSrc = "../images/sprite.png";
  var stage = new Stage(spriteSrc, testStageDOM);
  ok(stage.height == testStageDOM.height, "Sprite image file paths don't match");
});

test("Stage - Width is set", function() {
  var factory = new DOMFactory();
  var testStageDOM = factory.createTestStageDOM();
  var spriteSrc = "../images/sprite.png";
  var stage = new Stage(spriteSrc, testStageDOM);
  ok(stage.width == testStageDOM.width, "Sprite image file paths don't match");
});