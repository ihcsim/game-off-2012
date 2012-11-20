var DEFAULT_OBSTACLE_POSX = 25;
var DEFAULT_OBSTACLE_POSY = 20;
var DEFAULT_OBSTACLE_WIDTH = 20;
var DEFAULT_OBSTACLE_HEIGHT = 20;

var player = initPlayer();
var obstacle = initObstacle(DEFAULT_OBSTACLE_POSX, DEFAULT_OBSTACLE_POSY, DEFAULT_OBSTACLE_WIDTH, DEFAULT_OBSTACLE_HEIGHT);
test("Player/Obstacle Collision - Player collides with obstacle top boundary", function() {
  player.newPosition = new Coordinates(25, 20);
  player.dimension = new Dimension(0, 0);
  ok(playerWillCollideWithObstacle(player, obstacle), "A collision should occur");
});

test("Player/Obstacle Collision - Player collides with obstacle left boundary", function() {
  player.newPosition = new Coordinates(25, 35);
  player.dimension = new Dimension(0, 0);
  ok(playerWillCollideWithObstacle(player, obstacle), "A collision should occur");
});

test("Player/Obstacle Collision - Player collides with obstacle right boundary", function() {
  player.newPosition = new Coordinates(30, 35);
  player.dimension = new Dimension(0, 0);
  ok(playerWillCollideWithObstacle(player, obstacle), "A collision should occur");
});

test("Player/Obstacle Collision - Player collides with obstacle bottom boundary", function() {
  player.newPosition = new Coordinates(25, 40);
  player.dimension = new Dimension(0, 0);
  ok(playerWillCollideWithObstacle(player, obstacle), "A collision should occur");
});

test("Player/Obstacle Collision - No collision with obstacle top boundary", function() {
  player.newPosition = new Coordinates(15, 0);
  player.dimension = new Dimension(0, 0);
  ok(!playerWillCollideWithObstacle(player, obstacle), "A collision shouldn't occur");
});

test("Player/Obstacle Collision - No collision with obstacle left boundary", function() {
  player.newPosition = new Coordinates(5, 35);
  player.dimension = new Dimension(0, 0);
  ok(!playerWillCollideWithObstacle(player, obstacle), "A collision shouldn't occur");
});

test("Player/Obstacle Collision - No collision with obstacle right boundary", function() {
  player.newPosition = new Coordinates(50, 35);
  player.dimension = new Dimension(0, 0);
  ok(!playerWillCollideWithObstacle(player, obstacle), "A collision shouldn't occur");
});

test("Player/Obstacle Collision - No collision with obstacle bottom boundary", function() {
  player.newPosition = new Coordinates(20, 45);
  player.dimension = new Dimension(0, 0);
  ok(!playerWillCollideWithObstacle(player, obstacle), "A collision shouldn't occur");
});