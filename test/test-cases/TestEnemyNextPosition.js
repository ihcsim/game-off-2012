var enemy = initEnemy();
test("Enemy next random position test #1- X-coordinate is within radius", function() {
  enemy.currentPosition = new Coordinates(150, 150);
  enemy.dimension = new Dimension(0, 0);
  enemy.decideNextLocation();
  ok(enemy.nextPosition.posX >= 100 && enemy.nextPosition.posX <= 200, "Enemy next position X coordinate is outside of the expected radius");
});

test("Enemy next random position test #1- Y-coordinate is within radius", function() {
  enemy.currentPosition = new Coordinates(150, 150);
  enemy.dimension = new Dimension(0, 0);
  enemy.decideNextLocation();
  ok(enemy.nextPosition.posY >= 100 && enemy.nextPosition.posY <= 200, "Enemy next position Y coordinate is outside of the expected radius");
});

test("Enemy next random position test #2- X-coordinate is within radius", function() {
  enemy.currentPosition = new Coordinates(800, 600);
  enemy.dimension = new Dimension(0, 0);
  enemy.decideNextLocation();
  ok(enemy.nextPosition.posX >= 750 && enemy.nextPosition.posX <= 800, "Enemy next position X coordinate is outside of the expected radius");
});

test("Enemy next random position test #2- Y-coordinate is within radius", function() {
  enemy.currentPosition = new Coordinates(800, 600);
  enemy.dimension = new Dimension(0, 0);
  enemy.decideNextLocation();
  ok(enemy.nextPosition.posY >= 546 && enemy.nextPosition.posY <= 600, "Enemy next position Y coordinate is outside of the expected radius");
});

test("Enemy next random position test #3- X-coordinate is within radius", function() {
  enemy.decideNextLocation();
  ok(enemy.nextPosition.posX >= 0 && enemy.nextPosition.posX <= 800, "Enemy next position X coordinate is outside of the expected radius");
});

test("Enemy next random position test #3- Y-coordinate is within radius", function() {
  enemy.decideNextLocation();
  ok(enemy.nextPosition.posY >= 0 && enemy.nextPosition.posY <= 600, "Enemy next position Y coordinate is outside of the expected radius");
});


test("Enemy update position test #1- X-coordinate increased by 1", function() {
  enemy.currentPosition = new Coordinates(100, 200);
  enemy.nextPosition = new Coordinates(150, 250);
  enemy.updatePosition();
  ok(enemy.currentPosition.posX == 101, "Enemy updated position X coordinate is supposed to increase by 1");
});

test("Enemy update position test #1- Y-coordinate increased by 1", function() {
  enemy.currentPosition = new Coordinates(100, 200);
  enemy.nextPosition = new Coordinates(150, 250);
  enemy.updatePosition();
  ok(enemy.currentPosition.posY == 201, "Enemy updated position Y coordinate is supposed to increase by 1");
});

test("Enemy update position test #1- X-coordinate increased by 1", function() {
  enemy.currentPosition = new Coordinates(101, 201);
  enemy.nextPosition = new Coordinates(150, 250);
  enemy.updatePosition();
  ok(enemy.currentPosition.posX == 102, "Enemy updated position X coordinate is supposed to increase by 1");
});

test("Enemy update position test #1- Y-coordinate increased by 1", function() {
  enemy.currentPosition = new Coordinates(101, 201);
  enemy.nextPosition = new Coordinates(150, 250);
  enemy.updatePosition();
  ok(enemy.currentPosition.posY == 202, "Enemy updated position Y coordinate is supposed to increase by 1");
});