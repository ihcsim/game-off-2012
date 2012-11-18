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

function bulletIsOutOfBounds(bullet) {
  if (outOfBounds(bullet, bullet.currentPosition.posX, bullet.currentPosition.posY))
    bullet.inActive();
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

function bulletHitEnemies(bullet, enemies) {
  var hitTarget = false;
  $.each(enemies, function(index, enemy){
    if(bulletHitEnemy(bullet, enemy))
      hitTarget = true;
  });
  return hitTarget;
}

function bulletHitEnemy(bullet, enemy) {
  if(collideWithEnemy(bullet, enemy) && !enemy.isDead())
    return true;
  return false;
}


function bulletHitObstacles(bullet, obstacles) {
  var hitTarget = false;
  $.each(obstacles, function(index, obstacle){
    if(bulletHitObstacle(bullet, obstacle))
      hitTarget = true;
  });
  return hitTarget;
}

function bulletHitObstacle(bullet, obstacle) {
  if(collideWithObstacle(bullet, obstacle))
    return true;
  return false;
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
