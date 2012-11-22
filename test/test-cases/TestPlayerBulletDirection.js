var numBullet = 1;
test("Player/Bullet Direction- If player faces north, bullet shall travel north", function() {
  var player = initPlayerWithBullets(numBullet);
  player.turnNorth();
  var bullet = player.fireBullet();
  ok(bullet.isNorthBound(), "Bullet is not travelling north");
});

test("Player/Bullet Direction- If player faces south, bullet shall travel south", function() {
  var player = initPlayerWithBullets(numBullet);
  player.turnSouth();
  var bullet = player.fireBullet();
  ok(bullet.isSouthBound(), "Bullet is not travelling south");
});

test("Player/Bullet Direction- If player faces east, bullet shall travel east", function() {
  var player = initPlayerWithBullets(numBullet);
  player.turnEast();
  var bullet = player.fireBullet();
  ok(bullet.isEastBound(), "Bullet is not travelling east");
});

test("Player/Bullet Direction- If player faces east, bullet shall travel west", function() {
  var player = initPlayerWithBullets(numBullet);
  player.turnWest();
  var bullet = player.fireBullet();
  ok(bullet.isWestBound(), "Bullet is not travelling west");
});