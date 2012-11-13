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
  console.log(newCoords);
  var collide = false;
  $.each(obstacles, function(index, obstacle){
    if(newCoords.posX >= obstacle.coordinates.topLeft.posX && newCoords.posX <= obstacle.coordinates.topRight.posX 
    && newCoords.posY >= obstacle.coordinates.topLeft.posY && newCoords.posY <= obstacle.coordinates.bottomLeft.posY)
      collide = true;
  });
  return collide;
}