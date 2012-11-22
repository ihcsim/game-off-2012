var player = initPlayer();
test("Player/Bullet Direction- If player faces north, bullet shall travel north", function() {
  var bullet = initBullet(player);
  player.loadBullet(bullet);
  player.turnNorth();
  bullet.setCourse();
  ok(bullet.isNorthBound(), "Bullet is not travelling north");
});

test("Player/Bullet Direction- If player faces south, bullet shall travel south", function() {
  var bullet = initBullet(player);
  player.loadBullet(bullet);
  player.turnSouth();
  bullet.setCourse();
  ok(bullet.isSouthBound(), "Bullet is not travelling south");
});

test("Player/Bullet Direction- If player faces east, bullet shall travel east", function() {
  var bullet = initBullet(player);
  player.loadBullet(bullet);
  player.turnEast();
  bullet.setCourse();
  ok(bullet.isEastBound(), "Bullet is not travelling east");
});

test("Player/Bullet Direction- If player faces east, bullet shall travel west", function() {
  var bullet = initBullet(player);
  player.loadBullet(bullet);
  player.turnWest();
  bullet.setCourse();
  ok(bullet.isWestBound(), "Bullet is not travelling west");
});