function playerIsOutOfBounds(player) {
  var topEdge = 5;
  var bottomEdge = 570;
  var rightEdge = 750;
  var leftEdge = 65;
  
  var hitLowerBound = (player.newPosition.posY + player.dimension.height) >= bottomEdge;
  var hitUpperBound = player.newPosition.posY <= topEdge;
  var hitLeftBound = player.newPosition.posX <= leftEdge;
  var hitRightBound = (player.newPosition.posX + player.dimension.width) >= rightEdge;
  
  return hitLowerBound || hitUpperBound || hitLeftBound || hitRightBound;
}

function playerCollideWithObstacles(player, obstacles){
  var newCoords = player.calculateNewPositionCenterCoordinates();
  var collide = false;
  $.each(obstacles, function(index, obstacle){
    if(newCoords.posX >= obstacle.coordinates.topLeft.posX && newCoords.posX <= obstacle.coordinates.topRight.posX 
    && newCoords.posY >= obstacle.coordinates.topLeft.posY - 20 && newCoords.posY <= obstacle.coordinates.bottomLeft.posY)
      collide = true;
  });
  return collide;
}

function bulletHitEnemies(bullet, enemies) {
  $.each(enemies, function(index, enemy){
    if(bulletHitEnemy(bullet, enemy))
      return true;
  });
  return false;
}

function bulletHitEnemy(bullet, enemy) {
  if(collideWithTarget(bullet, enemy) && !enemy.isDead())
    return true;
  return false;
}


function bulletHitObstacles(bullet, obstacles) {
  $.each(obstacles, function(index, obstacle){
    if(collideWithTarget(bullet, obstacle))
      return true;
  });
  return false;
}

function bulletHitObstacle(bullet, obstacle) {
  if(collideWithObstacle(bullet, obstacle))
    return true;
  return false;
}

function bulletOutOfBounds(bullet) {
  if (outOfBounds(bullet, bullet.currentPosition.posX, bullet.currentPosition.posY))
    bullet.inActive();
}

function collideWithObstacle(source, obstacle) {
  return source.currentPosition.posX <= obstacle.position.posX + obstacle.dimension.width &&
      source.currentPosition.posX >= obstacle.position.posX &&
      source.currentPosition.posY <= obstacle.position.posY + obstacle.dimension.height &&
      source.currentPosition.posY >= obstacle.position.posY;
}

function collideWithEnemy(source, enemy) {
  return source.currentPosition.posX <= enemy.currentPosition.posX + enemy.dimension.width &&
      source.currentPosition.posX >= enemy.currentPosition.posX &&
      source.currentPosition.posY <= enemy.currentPosition.posY + enemy.dimension.height &&
      source.currentPosition.posY >= enemy.currentPosition.posY;
}
