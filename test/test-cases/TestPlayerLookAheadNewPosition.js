var player = initPlayer();
test("Player look-ahead new position - Calculate player position x-coordinate after turning north #1", function() {
  player.currentPosition = new Coordinates(10, 10);
  player.turnNorth();
  player.move();
  player.lookAheadNewPosition();
  ok(player.currentPosition.posX == 10, "Player position x coordinate is incorrect");
});

test("Player look-ahead new position - Calculate player position y-coordinate after turning north #1", function() {
  player.currentPosition = new Coordinates(10, 10);
  player.turnNorth();
  player.move();
  player.lookAheadNewPosition();
  ok(player.newPosition.posY == 8, "Player position y coordinate is incorrect");
});

test("Player look-ahead new position - Calculate player position x-coordinate after turning south", function() {
  player.currentPosition = new Coordinates(10, 10);
  player.turnSouth();
  player.move();
  player.lookAheadNewPosition();
  ok(player.newPosition.posX == 10, "Player position x coordinate is incorrect");
});

test("Player look-ahead new position - Calculate player position y-coordinate  after turning south", function() {
  player.currentPosition = new Coordinates(10, 10);
  player.turnSouth();
  player.move();
  player.lookAheadNewPosition();
  ok(player.newPosition.posY == 12, "Player position y coordinate is incorrect");
});


test("Player look-ahead new position - Calculate player position x-coordinate after turning east", function() {
  player.currentPosition = new Coordinates(10, 10);
  player.turnEast();
  player.move();
  player.lookAheadNewPosition();
  ok(player.newPosition.posX == 12, "Player position x coordinate is incorrect");
});

test("Player look-ahead new position - Calculate player position y-coordinate after turning east", function() {
  player.currentPosition = new Coordinates(10, 10);
  player.turnEast();
  player.move();
  player.lookAheadNewPosition();
  ok(player.newPosition.posY == 10, "Player position y coordinate is incorrect");
});

test("Player look-ahead new position - Calculate player position after turning west", function() {
  player.currentPosition = new Coordinates(10, 10);
  player.turnWest();
  player.move();
  player.lookAheadNewPosition();
  ok(player.newPosition.posX == 8, "Player position x coordinate is incorrect");
  ok(player.newPosition.posY == 10, "Player position y coordinate is incorrect");
});