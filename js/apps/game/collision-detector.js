var STAGE_TOP_EDGE = 5;
var STAGE_BOTTOM_EDGE = 570;
var STAGE_RIGHT_EDGE = 750;
var STAGE_LEFT_EDGE = 65;

function playerIsOutOfBounds(player) {
  var hitLowerBound = (player.newPosition.posY + player.dimension.height) >= STAGE_BOTTOM_EDGE;
  var hitUpperBound = player.newPosition.posY <= STAGE_TOP_EDGE;
  var hitLeftBound = player.newPosition.posX <= STAGE_LEFT_EDGE;
  var hitRightBound = (player.newPosition.posX + player.dimension.width) >= STAGE_RIGHT_EDGE;
  
  return hitLowerBound || hitUpperBound || hitLeftBound || hitRightBound;
}

function decommissionBulletIfOutOfBounds(bullet) {
  if (bulletIsOutOfBound(bullet))
    bullet.inactive();
}

function bulletIsOutOfBound(bullet){
  var hitLowerBound = bullet.centerCoordinates.posY  >= STAGE_BOTTOM_EDGE;
  var hitUpperBound = bullet.centerCoordinates.posY <= STAGE_TOP_EDGE;
  var hitLeftBound = bullet.centerCoordinates.posX <= STAGE_LEFT_EDGE;
  var hitRightBound = bullet.centerCoordinates.posX >= STAGE_RIGHT_EDGE;
  return hitLowerBound || hitUpperBound || hitLeftBound || hitRightBound;
}

function playerWillCollideWithObstacles(player, obstacles){
  var collide = false;
  $.each(obstacles, function(index, obstacle){
    if(playerWillCollideWithObstacle(player, obstacle))
      collide = true;
  });
  return collide;
}

function playerWillCollideWithObstacle(player, obstacle){
  var newCoords = player.calculateNewPositionCenterCoordinates();
  return (newCoords.posX >= obstacle.coordinates.topLeft.posX && 
          newCoords.posX <= obstacle.coordinates.topRight.posX && 
          newCoords.posY >= obstacle.coordinates.topLeft.posY - 20 && 
          newCoords.posY <= obstacle.coordinates.bottomLeft.posY);
}

function decommissionBulletAndEnemyOnShot(bullet, enemies) {
  $.each(enemies, function(index, enemy){
    if(bulletHitEnemy(bullet, enemy)) {
      bullet.inactive();
      enemy.die();
    }
  });
}

function bulletHitEnemy(bullet, enemy) {
  if(bulletCollideWithEnemy(bullet, enemy) && !enemy.isDead())
    return true;
  return false;
}


function decommissionBulletIfHitObstacles(bullet, obstacles) {
  $.each(obstacles, function(index, obstacle){
    if(bulletHitObstacle(bullet, obstacle))
      bullet.inactive();
  });
}

function bulletHitObstacle(bullet, obstacle) {
  if(bulletCollideWithObstacle(bullet, obstacle))
    return true;
  return false;
}

function bulletCollideWithObstacle(bullet, obstacle) {
  return bullet.centerCoordinates.posX <= obstacle.position.posX + obstacle.dimension.width &&
      bullet.centerCoordinates.posX >= obstacle.position.posX &&
      bullet.centerCoordinates.posY <= obstacle.position.posY + obstacle.dimension.height &&
      bullet.centerCoordinates.posY >= obstacle.position.posY;
}

function bulletCollideWithEnemy(bullet, enemy) {
  return bullet.centerCoordinates.posX <= enemy.currentPosition.posX + enemy.dimension.width &&
      bullet.centerCoordinates.posX >= enemy.currentPosition.posX &&
      bullet.centerCoordinates.posY <= enemy.currentPosition.posY + enemy.dimension.height &&
      bullet.centerCoordinates.posY >= enemy.currentPosition.posY;
}
