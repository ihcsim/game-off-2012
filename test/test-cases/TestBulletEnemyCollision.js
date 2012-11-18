test("Bullet/Enemy Collision - Bullet hits enemy at top left corner", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(20, 20);
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  
  var bullet = new Bullet();
  bullet.currentPosition = new Coordinates(enemyRectCoordinates.topLeft.posX, enemyRectCoordinates.topLeft.posX);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet hits enemy at top right corner", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(20, 20);
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  
  var bullet = new Bullet();
  bullet.currentPosition = new Coordinates(enemyRectCoordinates.topRight.posX, enemyRectCoordinates.topRight.posX);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet hits enemy at bottom left corner", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(20, 20);
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  
  var bullet = new Bullet();
  bullet.currentPosition = new Coordinates(enemyRectCoordinates.bottomLeft.posX, enemyRectCoordinates.bottomLeft.posX);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet hits enemy at bottom right corner", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(20, 20);
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  
  var bullet = new Bullet();
  bullet.currentPosition = new Coordinates(enemyRectCoordinates.bottomRight.posX, enemyRectCoordinates.bottomRight.posX);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet hits enemy at left midpoint", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(20, 20);
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  
  var bullet = new Bullet();
  var midPointCoordinates = calculateMidPointCoordinates(enemyRectCoordinates.topLeft, enemyRectCoordinates.bottomLeft);
  bullet.currentPosition = new Coordinates(midPointCoordinates.posX, midPointCoordinates.posX);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet hits enemy at right midpoint", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(20, 20);
  var enemyRectCoordinates = calculateRectCoordinates(enemy.currentPosition, enemy.dimension);
  
  var bullet = new Bullet();
  var midPointCoordinates = calculateMidPointCoordinates(enemyRectCoordinates.topRight, enemyRectCoordinates.bottomRight);
  bullet.currentPosition = new Coordinates(midPointCoordinates.posX, midPointCoordinates.posX);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

test("Bullet/Enemy Collision - Bullet hits enemy at center midpoint", function() {
  var spriteSrc = "../images/sprite.png";
  var enemy = new Enemy(spriteSrc);
  enemy.currentPosition = new Coordinates(20, 20);
  var enemyCenterCoordinates = calculateCenterCoordinates(enemy.currentPosition, enemy.dimension);
  
  var bullet = new Bullet();
  bullet.currentPosition = new Coordinates(enemyCenterCoordinates.posX, enemyCenterCoordinates.posY);
  ok(bulletHitEnemy(bullet, enemy), "A collision should occur");
});

