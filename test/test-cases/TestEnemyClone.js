var enemy = initEnemy();
test("Enemy - Perform clone", function() {
  var clone = enemy.clone(); 
  ok(clone != null, "Failed to clone enemy");
});

test("Enemy - Clone's image", function() {
  var clone = enemy.clone(); 
  ok(clone.sprite.src != null, "Clone enemy should have an image");
});

test("Enemy - Clone's image file", function() {
  var expectedSpriteSrc = "file:///C:/dev/workspace/game-off-2012/test/images/sprite.png";
  var clone = enemy.clone(); 
  ok(clone.sprite.src == expectedSpriteSrc, "Clone enemy image file is missing");
});

test("Enemy - Clone's current position x-coordinate", function() {
  var clone = enemy.clone(); 
  ok(clone.currentPosition.posX == enemy.currentPosition.posX + 5, "Clone enemy's current position x-coordinate is different from parent");
});

test("Enemy - Clone's current position y-coordinate", function() {
  var clone = enemy.clone(); 
  ok(clone.currentPosition.posY == enemy.currentPosition.posY + 5, "Clone enemy's current position y-coordinate is different from parent");
});