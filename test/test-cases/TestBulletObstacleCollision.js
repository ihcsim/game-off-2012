test("Bullet/Obstacle Collision - Bullet collides with obstacle top left corner", function() {
  var bullet = new Bullet();
  bullet.currentPosition = new Coordinates(20, 20);
 
  var obstaclePosX = 20;
  var obstaclePosY = 20;
  var obstacleWidth = 20;
  var obstacleHeight = 20;
  var obstacle = new Obstacle(obstaclePosX, obstaclePosY, obstacleWidth, obstacleHeight);
  ok(bulletHitObstacle(bullet, obstacle), "A collision should occur");
});

test("Bullet/Obstacle Collision - Bullet collides with obstacle top right corner", function() {
  var bullet = new Bullet();
  bullet.currentPosition = new Coordinates(40, 20);
 
  var obstaclePosX = 20;
  var obstaclePosY = 20;
  var obstacleWidth = 20;
  var obstacleHeight = 20;
  var obstacle = new Obstacle(obstaclePosX, obstaclePosY, obstacleWidth, obstacleHeight);
  ok(bulletHitObstacle(bullet, obstacle), "A collision should occur");
});

test("Bullet/Obstacle Collision - Bullet collides with obstacle bottom left corner", function() {
  var bullet = new Bullet();
  bullet.currentPosition = new Coordinates(20, 40);
 
  var obstaclePosX = 20;
  var obstaclePosY = 20;
  var obstacleWidth = 20;
  var obstacleHeight = 20;
  var obstacle = new Obstacle(obstaclePosX, obstaclePosY, obstacleWidth, obstacleHeight);
  ok(bulletHitObstacle(bullet, obstacle), "A collision should occur");
});

test("Bullet/Obstacle Collision - Bullet collides with obstacle bottom right corner", function() {
  var bullet = new Bullet();
  bullet.currentPosition = new Coordinates(40, 40);
 
  var obstaclePosX = 20;
  var obstaclePosY = 20;
  var obstacleWidth = 20;
  var obstacleHeight = 20;
  var obstacle = new Obstacle(obstaclePosX, obstaclePosY, obstacleWidth, obstacleHeight);
  ok(bulletHitObstacle(bullet, obstacle), "A collision should occur");
});

test("Bullet/Obstacle Collision - Bullet collides with obstacle center", function() {
  var obstaclePosX = 20;
  var obstaclePosY = 20;
  var obstacleWidth = 20;
  var obstacleHeight = 20;
  var obstacle = new Obstacle(obstaclePosX, obstaclePosY, obstacleWidth, obstacleHeight);
  
  var obstacleCenterCoordinates = calculateCenterCoordinates(obstacle.position, obstacle.dimension);
  var bullet = new Bullet();
  bullet.currentPosition = new Coordinates(obstacleCenterCoordinates.posX, obstacleCenterCoordinates.posY);
  ok(bulletHitObstacle(bullet, obstacle), "A collision should occur");
});

test("Bullet/Obstacle Collision - Bullet misses", function() {
  var bullet = new Bullet();
  bullet.currentPosition = new Coordinates(10, 40);
 
  var obstaclePosX = 20;
  var obstaclePosY = 20;
  var obstacleWidth = 20;
  var obstacleHeight = 20;
  var obstacle = new Obstacle(obstaclePosX, obstaclePosY, obstacleWidth, obstacleHeight);
  ok(!bulletHitObstacle(bullet, obstacle), "No collisions should occur");
});