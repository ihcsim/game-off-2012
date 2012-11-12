test("Enemy position - Calculate enemy center X", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.posX = 0;
  enemy.dimension.width = 200;
  var centerX =  enemy.calculateCenterX();
  ok(centerX == 100, "Enemy center X coordinate is incorrect");
});

test("Enemy position - Calculate enemy center Y", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.posY = 100;
  enemy.dimension.height = 200;
  var centerX =  enemy.calculateCenterY();
  ok(centerX == 200, "Enemy center Y coordinate is incorrect");
});