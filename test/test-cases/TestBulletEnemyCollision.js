var enemy = initEnemy();
enemy.currentPosition = new Coordinates(20, 20);

test("Bullet/Enemy Collision - Bullet hits enemy at top left corner", function() {
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  var bullet = initBullet();
  bullet.centerCoordinates = new Coordinates(enemyRectCoordinates.topLeft.posX, enemyRectCoordinates.topLeft.posY);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet hits enemy at top right corner", function() {
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  var bullet = initBullet();
  bullet.centerCoordinates = new Coordinates(enemyRectCoordinates.topRight.posX, enemyRectCoordinates.topRight.posY);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet hits enemy at bottom left corner", function() {
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  var bullet = initBullet();
  bullet.centerCoordinates = new Coordinates(enemyRectCoordinates.bottomLeft.posX, enemyRectCoordinates.bottomLeft.posY);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet hits enemy at bottom right corner", function() {
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  var bullet = initBullet();
  bullet.centerCoordinates = new Coordinates(enemyRectCoordinates.bottomRight.posX, enemyRectCoordinates.bottomRight.posY);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet hits enemy at left midpoint", function() {
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  var bullet = initBullet();
  var midPointCoordinates = calculateMidPointCoordinates(enemyRectCoordinates.topLeft, enemyRectCoordinates.bottomLeft);
  bullet.centerCoordinates = new Coordinates(midPointCoordinates.posX, midPointCoordinates.posY);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet hits enemy at right midpoint", function() {
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  var bullet = initBullet();
  var midPointCoordinates = calculateMidPointCoordinates(enemyRectCoordinates.topRight, enemyRectCoordinates.bottomRight);
  bullet.centerCoordinates = new Coordinates(midPointCoordinates.posX, midPointCoordinates.posY);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet hits enemy at center midpoint", function() {
  var enemyCenterCoordinates = calculateCenterCoordinates(enemy.currentPosition, enemy.dimension);
  var bullet = initBullet();  
  bullet.centerCoordinates = new Coordinates(enemyCenterCoordinates.posX, enemyCenterCoordinates.posY);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet misses enemy left boundary", function() {
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  var bullet = initBullet();  
  var midPointCoordinates = calculateMidPointCoordinates(enemyRectCoordinates.topLeft, enemyRectCoordinates.bottomLeft);
  bullet.centerCoordinates = new Coordinates(midPointCoordinates.posX - 10, midPointCoordinates.posY);
  ok(!bulletHitEnemy(bullet, enemy), "A collision should not occur");
});

test("Bullet/Enemy Collision - Bullet misses enemy right boundary", function() {
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  var bullet = initBullet();  
  var midPointCoordinates = calculateMidPointCoordinates(enemyRectCoordinates.topRight, enemyRectCoordinates.bottomRight);
  bullet.centerCoordinates = new Coordinates(midPointCoordinates.posX + 10, midPointCoordinates.posY);
  ok(!bulletHitEnemy(bullet, enemy), "A collision should not occur");
});

