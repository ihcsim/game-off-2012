var player = initPlayer();
test("Player - When facing south, image x-coordinate should be 0", function() {
  player.turnSouth();
  ok(player.image.src.posX == 0, "Incorrect player image x-coordinate");
});

test("Player - When facing south, image y-coordinate should be 4", function() {
  player.turnSouth();
  ok(player.image.src.posY == 4, "Incorrect player image y-coordinate");
});

test("Player - When facing north, image x-coordinate should be 0", function() {
  player.turnNorth();
  ok(player.image.src.posX == 0, "Incorrect player image x-coordinate");
});

test("Player - When facing north, image y-coordinate should be 192", function() {
  player.turnNorth();
  ok(player.image.src.posY == 192, "Incorrect player image y-coordinate");
});

test("Player - When facing west, image x-coordinate should be 0", function() {
  player.turnWest();
  ok(player.image.src.posX == 0, "Incorrect player image x-coordinate");
});

test("Player - When facing west, image y-coordinate should be 67", function() {
  player.turnWest();
  ok(player.image.src.posY == 67, "Incorrect player image y-coordinate");
});

test("Player - When facing east, image x-coordinate should be 0", function() {
  player.turnEast();
  ok(player.image.src.posX == 0, "Incorrect player image x-coordinate");
});

test("Player - When facing east, image y-coordinate should be 132", function() {
  player.turnEast();
  ok(player.image.src.posY == 132, "Incorrect player image y-coordinate");
});
