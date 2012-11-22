test("Player/Bullet Reload- Player has no bullet without a re-load", function() {
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  ok(!player.hasBullet(), "Player should have no bullet");
});

test("Player/Bullet Reload- Player has bullet on re-load", function() {
  var numBullets = 1;
  var player = initPlayerWithBullets(numBullets);
  ok(player.hasBullet(), "Player should have bullet on re-load");
});

test("Player/Bullet Reload- Player has 1 bullet on 1 re-load", function() {
  var numBullets = 1;
  var player = initPlayerWithBullets(numBullets);
  ok(player.numBullets() == 1, "Player should have 1 bullet");
});

test("Player/Bullet Reload- Player has 2 bullets on 2 re-loads", function() {
  var numBullets = 2;
  var player = initPlayerWithBullets(numBullets);
  ok(player.numBullets() == 2, "Player should have 2 bullets");
});

test("Player/Bullet Reload- Player has 3 bullets on 3 re-loads", function() {
  var numBullets = 3;
  var player = initPlayerWithBullets(numBullets);
  ok(player.numBullets() == 3, "Player should have 3 bullets");
});

test("Player/Bullet Reload- Player has 3 bullets on full re-load", function() {
  var numBullets = 3;
  var player = initPlayerWithBullets(numBullets);
  for(var index = 0; index < numBullets; index++)
    player.fireBullet();
  player.reloadAllBullets();
  ok(player.numBullets() == 3, "Player should have 3 bullets on full re-load");
});

test("Player/Bullet Reload- Player has 5 bullets on full re-load", function() {
  var numBullets = 5;
  var player = initPlayerWithBullets(numBullets);
  for(var index = 0; index < numBullets; index++)
    player.fireBullet();
  player.reloadAllBullets();
  ok(player.numBullets() == 5, "Player should have 5 bullets on full re-load");
});