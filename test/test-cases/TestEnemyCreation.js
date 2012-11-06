test("Enemy - Create enemy", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  ok(enemy != null, "Failed to create enemy");
});

test("Enemy - Sprite image exists", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  ok(enemy.sprite.src != null, "Unable to locate sprite image resource");
});

test("Enemy - Sprite image file path matches", function() {
  var expectedSpriteSrc = "file:///C:/dev/workspace/game-off-2012/images/sprite.png";
  var enemy = new Enemy(expectedSpriteSrc);
  ok(enemy.sprite.src == expectedSpriteSrc, "Sprite image file paths don't match");
});