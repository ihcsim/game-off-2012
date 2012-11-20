test("Player/Bullet Reload- Player has 1 shot on 1 re-load", function() {
  var numBullets = 1;
  var player = initPlayerWithBullets(numBullets);
  
  var shots = new Array();
  var shot1 = player.fireBullet();
  if(shot1)
    shots.push(shot1);
  var shot2 = player.fireBullet();
  if(shot2)
    shots.push(shot2);
  ok(shots.length == 1, "Player should have 1 shot");
});

test("Player/Bullet Reload- Player has 2 shots on 2 re-loads", function() {
  var numBullets = 2;
  var player = initPlayerWithBullets(numBullets);
 
  var shots = new Array();
  var shot1 = player.fireBullet();
  if(shot1)
    shots.push(shot1);
  var shot2 = player.fireBullet();
  if(shot2)
    shots.push(shot2);
  ok(shots.length == 2, "Player should have 2 shots");
});

test("Player/Bullet Reload- Player has 3 shots on 3 re-loads", function() {
  var numBullets = 3;
  var player = initPlayerWithBullets(numBullets);
 
  var shots = new Array();
  var shot1 = player.fireBullet();
  if(shot1)
    shots.push(shot1);
  var shot2 = player.fireBullet();
  if(shot2)
    shots.push(shot2);
  var shot3 = player.fireBullet();
  if(shot3)
    shots.push(shot3);
  ok(shots.length == 3, "Player should have 3 shots");
});