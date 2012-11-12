test("Enemy position - Calculate enemy center X", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(0, 0);
  enemy.dimension = new Dimension(200, 200);
  var centerCoordinates = enemy.calculateCenterCoordinates();
  ok(centerCoordinates.posX == 100, "Enemy center X coordinate is incorrect");
});

test("Enemy position - Calculate enemy center Y", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(100, 100);
  enemy.dimension = new Dimension(200, 200);
  var centerCoordinates =  enemy.calculateCenterCoordinates();
  ok(centerCoordinates.posY == 200, "Enemy center Y coordinate is incorrect");
});