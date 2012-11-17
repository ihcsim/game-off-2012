test("Player/Bullet Reload- Player has no bullet without a re-load", function() {
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  ok(!player.hasBullet(), "Player should have no bullet");
});

test("Player/Bullet Reload- Player has bullet on re-load", function() {
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.loadBullet(new Bullet());
  ok(player.hasBullet(), "Player should have bullet on re-load");
});

test("Player/Bullet Reload- Player has 1 bullet on 1 re-load", function() {
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.loadBullet(new Bullet());
  ok(player.numBullets() == 1, "Player should have 1 bullet");
});

test("Player/Bullet Reload- Player has 2 bullets on 2 re-loads", function() {
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.loadBullet(new Bullet());
  player.loadBullet(new Bullet());
  ok(player.numBullets() == 2, "Player should have 2 bullets");
});