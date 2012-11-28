test("Player - When facing south, image x-coordinate should be 0", function() {
  var player = initPlayer();
  initPlayerAnimationEngine(player);
  player.turnSouth();
  player.stop();
  animatePlayerMovement();
  ok(player.image.src.posX == 0, "Incorrect player image x-coordinate");
});

test("Player - When facing south, image y-coordinate should be 6", function() {
  var player = initPlayer();
  initPlayerAnimationEngine(player);
  player.turnSouth();
  player.stop();
  animatePlayerMovement();
  ok(player.image.src.posY == 6, "Incorrect player image y-coordinate");
});

test("Player - When facing north, image x-coordinate should be 0", function() {
  var player = initPlayer();
  initPlayerAnimationEngine(player);
  player.turnNorth();
  player.stop();
  animatePlayerMovement();
  ok(player.image.src.posX == 0, "Incorrect player image x-coordinate");
});

test("Player - When facing north, image y-coordinate should be 192", function() {
  var player = initPlayer();
  initPlayerAnimationEngine(player);
  player.turnNorth();
  player.stop();
  animatePlayerMovement();
  ok(player.image.src.posY == 192, "Incorrect player image y-coordinate");
});

test("Player - When facing west, image x-coordinate should be 0", function() {
  var player = initPlayer();
  initPlayerAnimationEngine(player);
  player.turnWest();
  player.stop();
  animatePlayerMovement();
  ok(player.image.src.posX == 0, "Incorrect player image x-coordinate");
});

test("Player - When facing west, image y-coordinate should be 67", function() {
  var player = initPlayer();
  initPlayerAnimationEngine(player);
  player.turnWest();
  player.stop();
  animatePlayerMovement();
  ok(player.image.src.posY == 67, "Incorrect player image y-coordinate");
});

test("Player - When facing east, image x-coordinate should be 0", function() {
  var player = initPlayer();
  initPlayerAnimationEngine(player);
  player.turnEast();
  player.stop();
  animatePlayerMovement();
  ok(player.image.src.posX == 0, "Incorrect player image x-coordinate");
});

test("Player - When facing east, image y-coordinate should be 132", function() {
  var player = initPlayer();
  initPlayerAnimationEngine(player);
  player.turnEast();
  player.stop();
  animatePlayerMovement();
  ok(player.image.src.posY == 132, "Incorrect player image y-coordinate");
});
