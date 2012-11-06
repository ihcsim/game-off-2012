test("Player position - Calculate player center X", function() {
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.posX = 0;
  player.width = 200;
  var centerX =  player.calculateCenterX();
  ok(centerX == 100, "Player center X coordinate is incorrect");
});

test("Player position - Calculate player center Y", function() {
  var spriteSrc = "../images/sprite.png";
  var player = new Player(spriteSrc);
  player.posY = 100;
  player.height = 200;
  var centerX =  player.calculateCenterY();
  ok(centerX == 200, "Player center Y coordinate is incorrect");
});