var player = initPlayer();
test("Player - When facing south, image x-coordinate should be 0", function() {
  player.turnSouth();
  ok(player.srcX == 0, "Incorrect player image x-coordinate");
});

test("Player - When facing south, image y-coordinate should be 4", function() {
  player.turnSouth();
  ok(player.srcY == 4, "Incorrect player image y-coordinate");
});

test("Player - When facing south, image x-coordinate should be 0", function() {
  player.turnNorth();
  ok(player.srcX == 0, "Incorrect player image x-coordinate");
});

test("Player - When facing south, image x-coordinate should be 192", function() {
  player.turnNorth();
  ok(player.srcY == 192, "Incorrect player image y-coordinate");
});

test("Player - When facing west, image x-coordinate should be 0", function() {
  player.turnWest();
  ok(player.srcX == 0, "Incorrect player image x-coordinate");
});

test("Player - When facing west, image y-coordinate should be 67", function() {
  player.turnWest();
  ok(player.srcY == 67, "Incorrect player image y-coordinate");
});

test("Player - When facing east, image x-coordinate should be 0", function() {
  player.turnEast();
  ok(player.srcX == 0, "Incorrect player image x-coordinate");
});

test("Player - When facing east, image y-coordinate should be 132", function() {
  player.turnEast();
  ok(player.srcY == 132, "Incorrect player image y-coordinate");
});
