var player = initPlayer();
test("Player/Out-of-Bound Test- Player hits stage upper edge #1", function() {
  player.newPosition.posY = 5;
  ok(playerIsOutOfBounds(player), "Player should have hit stage upper edge");
});

test("Player/Out-of-Bound Test- Player hits stage upper edge #2", function() {
  player.newPosition.posY = 4;
  ok(playerIsOutOfBounds(player), "Player should have hit stage upper edge");
});

test("Player/Out-of-Bound Test- Player hits stage lower edge #1", function() {
  player.newPosition.posY = 570;
  ok(playerIsOutOfBounds(player), "Player should have hit stage lower edge");
});

test("Player/Out-of-Bound Test- Player hits stage lower edge #2", function() {
  player.newPosition.posY = 590;
  ok(playerIsOutOfBounds(player), "Player should have hit stage lower edge");
});

test("Player/Out-of-Bound Test- Player hits stage left edge #1", function() {
  player.newPosition.posX = 65;
  ok(playerIsOutOfBounds(player), "Player should have hit stage left edge");
});

test("Player/Out-of-Bound Test- Player hits stage left edge #2", function() {
  player.newPosition.posX = 60;
  ok(playerIsOutOfBounds(player), "Player should have hit stage left edge");
});

test("Player/Out-of-Bound Test- Player hits stage right edge #1", function() {
  player.newPosition.posX = 750;
  ok(playerIsOutOfBounds(player), "Player should have hit stage right edge");
});

test("Player/Out-of-Bound Test- Player hits stage right edge #2", function() {
  player.newPosition.posX = 760;
  ok(playerIsOutOfBounds(player), "Player should have hit stage right edge");
});

test("Player/Out-of-Bound Test- Player is not out of bound #1", function() {
  player.newPosition.posX = 150;
  player.newPosition.posY = 450;
  ok(!playerIsOutOfBounds(player), "Player should not be out-of-bound");
});

test("Player/Out-of-Bound Test- Player is not out of bound #2", function() {
  player.newPosition.posX = 250;
  player.newPosition.posY = 250;
  ok(!playerIsOutOfBounds(player), "Player should not be out-of-bound");
});

test("Player/Out-of-Bound Test- Player is not out of bound #3", function() {
  player.newPosition.posX = 350;
  player.newPosition.posY = 100;
  ok(!playerIsOutOfBounds(player), "Player should not be out-of-bound");
});

test("Player/Out-of-Bound Test- Player is not out of bound #4", function() {
  player.newPosition.posX = 450;
  player.newPosition.posY = 355;
  ok(!playerIsOutOfBounds(player), "Player should not be out-of-bound");
});