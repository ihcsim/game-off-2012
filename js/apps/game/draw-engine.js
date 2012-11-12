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
  var newCenterCoords = player.calculateCenterCoordinates();
  $.each(obstacles, function(index, obstacle){
    if((newCenterCoords.posX >= obstacle.coordinates.topLeft.posX && newCenterCoords.posX <= obstacle.coordinates.topRight.posX) 
    && (newCenterCoords.posY >= obstacle.coordinates.topLeft.posY && newCenterCoords.posY <= obstacle.coordinates.bottomLeft.posY))
      return true;
  });
  return false;
}