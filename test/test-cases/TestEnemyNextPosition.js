test("Enemy next random position test #1- X-coordinate is within radius", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(150, 150);
  enemy.dimension = new Dimension(0, 0);

  var nextPositionCoordinates = enemy.setNextRandomPosition();
  ok(nextPositionCoordinates.posX >= 100 && nextPositionCoordinates.posX <= 200, "Enemy next position X coordinate is outside of the expected radius");
});

test("Enemy next random position test #1- Y-coordinate is within radius", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(150, 150);
  enemy.dimension = new Dimension(0, 0);
  
  var nextPositionCoordinates = enemy.setNextRandomPosition();
  ok(nextPositionCoordinates.posY >= 100 && nextPositionCoordinates.posY <= 200, "Enemy next position X coordinate is outside of the expected radius");
});

test("Enemy next random position test #2- X-coordinate is within radius", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(800, 600);
  enemy.dimension = new Dimension(0, 0);

  var nextPositionCoordinates = enemy.setNextRandomPosition();
  ok(nextPositionCoordinates.posX >= 750 && nextPositionCoordinates.posX <= 800, "Enemy next position X coordinate is outside of the expected radius");
});

test("Enemy next random position test #2- Y-coordinate is within radius", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(800, 600);
  enemy.dimension = new Dimension(0, 0);
  
  var nextPositionCoordinates = enemy.setNextRandomPosition();
  ok(nextPositionCoordinates.posY >= 550 && nextPositionCoordinates.posY <= 600, "Enemy next position X coordinate is outside of the expected radius");
});

test("Enemy next random position test #3- X-coordinate is within radius", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);

  var nextPositionCoordinates = enemy.setNextRandomPosition();
  ok(nextPositionCoordinates.posX >= 0 && nextPositionCoordinates.posX <= 800, "Enemy next position X coordinate is outside of the expected radius");
});

test("Enemy next random position test #3- Y-coordinate is within radius", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);

  var nextPositionCoordinates = enemy.setNextRandomPosition();
  ok(nextPositionCoordinates.posY >= 0 && nextPositionCoordinates.posY <= 600, "Enemy next position X coordinate is outside of the expected radius");
});