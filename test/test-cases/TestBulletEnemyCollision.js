test("Bullet/Enemy Collision - Bullet hits enemy at top left corner", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(20, 20);
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  
  var bullet = new Bullet();
  bullet.centerCoordinates = new Coordinates(enemyRectCoordinates.topLeft.posX, enemyRectCoordinates.topLeft.posX);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet hits enemy at top right corner", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(20, 20);
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  
  var bullet = new Bullet();
  bullet.centerCoordinates = new Coordinates(enemyRectCoordinates.topRight.posX, enemyRectCoordinates.topRight.posX);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet hits enemy at bottom left corner", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(20, 20);
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  
  var bullet = new Bullet();
  bullet.centerCoordinates = new Coordinates(enemyRectCoordinates.bottomLeft.posX, enemyRectCoordinates.bottomLeft.posX);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet hits enemy at bottom right corner", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(20, 20);
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  
  var bullet = new Bullet();
  bullet.centerCoordinates = new Coordinates(enemyRectCoordinates.bottomRight.posX, enemyRectCoordinates.bottomRight.posX);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet hits enemy at left midpoint", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(20, 20);
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  
  var bullet = new Bullet();
  var midPointCoordinates = calculateMidPointCoordinates(enemyRectCoordinates.topLeft, enemyRectCoordinates.bottomLeft);
  bullet.centerCoordinates = new Coordinates(midPointCoordinates.posX, midPointCoordinates.posY);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet hits enemy at right midpoint", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(20, 20);
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  
  var bullet = new Bullet();
  var midPointCoordinates = calculateMidPointCoordinates(enemyRectCoordinates.topRight, enemyRectCoordinates.bottomRight);
  bullet.centerCoordinates = new Coordinates(midPointCoordinates.posX, midPointCoordinates.posY);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet hits enemy at center midpoint", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(20, 20);
  var enemyCenterCoordinates = calculateCenterCoordinates(enemy.currentPosition, enemy.dimension);
  
  var bullet = new Bullet();
  bullet.centerCoordinates = new Coordinates(enemyCenterCoordinates.posX, enemyCenterCoordinates.posY);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet misses enemy left boundary", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(20, 20);
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  
  var bullet = new Bullet();
  var midPointCoordinates = calculateMidPointCoordinates(enemyRectCoordinates.topLeft, enemyRectCoordinates.bottomLeft);
  bullet.centerCoordinates = new Coordinates(midPointCoordinates.posX - 10, midPointCoordinates.posY);
  ok(!bulletHitEnemy(bullet, enemy), "A collision should not occur");
});

test("Bullet/Enemy Collision - Bullet misses enemy right boundary", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(20, 20);
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  
  var bullet = new Bullet();
  var midPointCoordinates = calculateMidPointCoordinates(enemyRectCoordinates.topRight, enemyRectCoordinates.bottomRight);
  bullet.centerCoordinates = new Coordinates(midPointCoordinates.posX + 10, midPointCoordinates.posY);
  ok(!bulletHitEnemy(bullet, enemy), "A collision should not occur");
});

