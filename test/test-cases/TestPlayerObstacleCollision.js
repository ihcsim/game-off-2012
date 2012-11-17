var DEFAULT_OBSTACLE_POSX = 25;
var DEFAULT_OBSTACLE_POSY = 20;
var DEFAULT_OBSTACLE_WIDTH = 20;
var DEFAULT_OBSTACLE_HEIGHT = 20;

test("Player/Obstacle Collision - Player collides with obstacle top boundary", function() {
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.newPosition = new Coordinates(25, 20);
  player.dimension = new Dimension(0, 0);
  
  obstacles = [new Obstacle(DEFAULT_OBSTACLE_POSX, DEFAULT_OBSTACLE_POSY, DEFAULT_OBSTACLE_WIDTH, DEFAULT_OBSTACLE_HEIGHT)];
  ok(playerCollideWithObstacles(player, obstacles), "A collision should occur");
});

test("Player/Obstacle Collision - Player collides with obstacle left boundary", function() {
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.newPosition = new Coordinates(25, 35);
  player.dimension = new Dimension(0, 0);

  obstacles = [new Obstacle(DEFAULT_OBSTACLE_POSX, DEFAULT_OBSTACLE_POSY, DEFAULT_OBSTACLE_WIDTH, DEFAULT_OBSTACLE_HEIGHT)];
  ok(playerCollideWithObstacles(player, obstacles), "A collision should occur");
});

test("Player/Obstacle Collision - Player collides with obstacle right boundary", function() {
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.newPosition = new Coordinates(30, 35);
  player.dimension = new Dimension(0, 0);

  obstacles = [new Obstacle(DEFAULT_OBSTACLE_POSX, DEFAULT_OBSTACLE_POSY, DEFAULT_OBSTACLE_WIDTH, DEFAULT_OBSTACLE_HEIGHT)];
  ok(playerCollideWithObstacles(player, obstacles), "A collision should occur");
});

test("Player/Obstacle Collision - Player collides with obstacle bottom boundary", function() {
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.newPosition = new Coordinates(25, 40);
  player.dimension = new Dimension(0, 0);

  obstacles = [new Obstacle(DEFAULT_OBSTACLE_POSX, DEFAULT_OBSTACLE_POSY, DEFAULT_OBSTACLE_WIDTH, DEFAULT_OBSTACLE_HEIGHT)];
  ok(playerCollideWithObstacles(player, obstacles), "A collision should occur");
});

test("Player/Obstacle Collision - No collision with obstacle top boundary", function() {
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.newPosition = new Coordinates(15, 0);
  player.dimension = new Dimension(0, 0);

  obstacles = [new Obstacle(DEFAULT_OBSTACLE_POSX, DEFAULT_OBSTACLE_POSY, DEFAULT_OBSTACLE_WIDTH, DEFAULT_OBSTACLE_HEIGHT)];
  ok(!playerCollideWithObstacles(player, obstacles), "A collision shouldn't occur");
});

test("Player/Obstacle Collision - No collision with obstacle left boundary", function() {
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.newPosition = new Coordinates(5, 35);
  player.dimension = new Dimension(0, 0);

  obstacles = [new Obstacle(DEFAULT_OBSTACLE_POSX, DEFAULT_OBSTACLE_POSY, DEFAULT_OBSTACLE_WIDTH, DEFAULT_OBSTACLE_HEIGHT)];
  ok(!playerCollideWithObstacles(player, obstacles), "A collision shouldn't occur");
});

test("Player/Obstacle Collision - No collision with obstacle right boundary", function() {
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.newPosition = new Coordinates(50, 35);
  player.dimension = new Dimension(0, 0);

  obstacles = [new Obstacle(DEFAULT_OBSTACLE_POSX, DEFAULT_OBSTACLE_POSY, DEFAULT_OBSTACLE_WIDTH, DEFAULT_OBSTACLE_HEIGHT)];
  ok(!playerCollideWithObstacles(player, obstacles), "A collision shouldn't occur");
});

test("Player/Obstacle Collision - No collision with obstacle bottom boundary", function() {
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.newPosition = new Coordinates(20, 45);
  player.dimension = new Dimension(0, 0);

  obstacles = [new Obstacle(DEFAULT_OBSTACLE_POSX, DEFAULT_OBSTACLE_POSY, DEFAULT_OBSTACLE_WIDTH, DEFAULT_OBSTACLE_HEIGHT)];
  ok(!playerCollideWithObstacles(player, obstacles), "A collision shouldn't occur");
});