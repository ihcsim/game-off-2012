test("Bullet/Obstacle Collision - Bullet collides with obstacle top left corner", function() {
  var obstaclePosX = 20;
  var obstaclePosY = 20;
  var obstacleWidth = 20;
  var obstacleHeight = 20;
  var obstacle = new Obstacle(obstaclePosX, obstaclePosY, obstacleWidth, obstacleHeight);
  
  var bullet = new Bullet();
  var obstacleRectCoordinates = calculateRectCoordinates(obstacle.position, obstacle.dimension);
  bullet.currentPosition = new Coordinates(obstacleRectCoordinates.topLeft.posX, obstacleRectCoordinates.topLeft.posY);
  ok(bulletHitObstacle(bullet, obstacle), "A collision should occur");
});

test("Bullet/Obstacle Collision - Bullet collides with obstacle top right corner", function() {
  var obstaclePosX = 20;
  var obstaclePosY = 20;
  var obstacleWidth = 20;
  var obstacleHeight = 20;
  var obstacle = new Obstacle(obstaclePosX, obstaclePosY, obstacleWidth, obstacleHeight);
  
  var bullet = new Bullet();
  var obstacleRectCoordinates = calculateRectCoordinates(obstacle.position, obstacle.dimension);
  bullet.currentPosition = new Coordinates(obstacleRectCoordinates.topRight.posX, obstacleRectCoordinates.topRight.posY);
  ok(bulletHitObstacle(bullet, obstacle), "A collision should occur");
});

test("Bullet/Obstacle Collision - Bullet collides with obstacle bottom left corner", function() {
  var obstaclePosX = 20;
  var obstaclePosY = 20;
  var obstacleWidth = 20;
  var obstacleHeight = 20;
  var obstacle = new Obstacle(obstaclePosX, obstaclePosY, obstacleWidth, obstacleHeight);
  
  var bullet = new Bullet();
  var obstacleRectCoordinates = calculateRectCoordinates(obstacle.position, obstacle.dimension);
  bullet.currentPosition = new Coordinates(obstacleRectCoordinates.bottomLeft.posX, obstacleRectCoordinates.bottomLeft.posY);
  ok(bulletHitObstacle(bullet, obstacle), "A collision should occur");
});

test("Bullet/Obstacle Collision - Bullet collides with obstacle bottom right corner", function() {
  var obstaclePosX = 20;
  var obstaclePosY = 20;
  var obstacleWidth = 20;
  var obstacleHeight = 20;
  var obstacle = new Obstacle(obstaclePosX, obstaclePosY, obstacleWidth, obstacleHeight);
  
  var bullet = new Bullet();
  var obstacleRectCoordinates = calculateRectCoordinates(obstacle.position, obstacle.dimension);
  bullet.currentPosition = new Coordinates(obstacleRectCoordinates.bottomRight.posX, obstacleRectCoordinates.bottomRight.posY);
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

test("Bullet/Obstacle Collision - Bullet collides with obstacle left boundary mid-point", function() {
  var obstaclePosX = 20;
  var obstaclePosY = 20;
  var obstacleWidth = 20;
  var obstacleHeight = 20;
  var obstacle = new Obstacle(obstaclePosX, obstaclePosY, obstacleWidth, obstacleHeight);
  
  var bullet = new Bullet();
  var obstacleRectCoordinates = calculateRectCoordinates(obstacle.position, obstacle.dimension);
  var midpointCoordinates = calculateMidPointCoordinates(obstacleRectCoordinates.topLeft, obstacleRectCoordinates.bottomLeft);
  bullet.currentPosition = new Coordinates(midpointCoordinates.posX, midpointCoordinates.posY);
  ok(bulletHitObstacle(bullet, obstacle), "A collision should occur");
});

test("Bullet/Obstacle Collision - Bullet collides with obstacle right boundary mid-point", function() {
  var obstaclePosX = 20;
  var obstaclePosY = 20;
  var obstacleWidth = 20;
  var obstacleHeight = 20;
  var obstacle = new Obstacle(obstaclePosX, obstaclePosY, obstacleWidth, obstacleHeight);
  
  var bullet = new Bullet();
  var obstacleRectCoordinates = calculateRectCoordinates(obstacle.position, obstacle.dimension);
  var midpointCoordinates = calculateMidPointCoordinates(obstacleRectCoordinates.topRight, obstacleRectCoordinates.bottomRight);
  bullet.currentPosition = new Coordinates(midpointCoordinates.posX, midpointCoordinates.posY);
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

test("Bullet/Obstacle Collision - Bullet misses", function() {
  var bullet = new Bullet();
  bullet.currentPosition = new Coordinates(40, 45);
 
  var obstaclePosX = 20;
  var obstaclePosY = 20;
  var obstacleWidth = 20;
  var obstacleHeight = 20;
  var obstacle = new Obstacle(obstaclePosX, obstaclePosY, obstacleWidth, obstacleHeight);
  ok(!bulletHitObstacle(bullet, obstacle), "No collisions should occur");
});