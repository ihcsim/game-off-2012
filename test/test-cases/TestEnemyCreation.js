var enemy = initEnemy();
test("Enemy - Create enemy", function() {
  ok(enemy != null, "Failed to create enemy");
});

test("Enemy - Sprite image exists", function() {
  ok(enemy.sprite.src != null, "Unable to locate sprite image resource");
});

test("Enemy - Sprite image file path matches", function() {
  var expectedSpriteSrc = "file:///C:/dev/workspace/game-off-2012/test/images/sprite.png";
  ok(enemy.sprite.src == expectedSpriteSrc, "Sprite image file paths don't match");
});