function outOfBounds(player) {
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

function collideWithObstacles(player, obstacles){
  var newCoords = player.calculateNewPositionCenterCoordinates();
  var collide = false;
  $.each(obstacles, function(index, obstacle){
    if(newCoords.posX >= obstacle.coordinates.topLeft.posX && newCoords.posX <= obstacle.coordinates.topRight.posX 
    && newCoords.posY >= obstacle.coordinates.topLeft.posY - 20 && newCoords.posY <= obstacle.coordinates.bottomLeft.posY)
      collide = true;
  });
  return collide;
}

function collideWithTarget(source, target) {
  return source.currentPosition.posX <= target.currentPosition.posX + target.dimension.width &&
      source.currentPosition.posX >= target.currentPosition.posX &&
      source.currentPosition.posY <= target.currentPosition.posY + target.dimension.height &&
      source.currentPosition.posY >= target.currentPosition.posY;
}

function bulletHitEnemies(bullet, enemies) {
  $.each(enemies, function(index, enemy){
    if(collideWithTarget(bullet, enemy) && !enemy.isDead())
      bullet.inActive();
      enemy.die();
  });
};

function bulletHitObstacle(bullet, obstacles) {
  $.each(obstacles, function(index, obstacle){
    if(collideWithTarget(bullet, obstacle))
      bullet.inActive();
  });
}

function bulletOutOfBounds(bullet) {
  if (outOfBounds(bullet, bullet.currentPosition.posX, bullet.currentPosition.posY))
      bullet.inActive();
}
