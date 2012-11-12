var stage = $("#stage");
var stageCtx = stage[0].getContext("2d");

function calculateCenterCoordinate(position, dimension){
  return position + (dimension / 2);
}

function calculateCenterCoordinates(position, dimension){
  var centerCoordinates = new Coordinates();
  centerCoordinates.posX = position.posX + (dimension.width/2);
  centerCoordinates.posY = position.posY + (dimension.height/2);
  return centerCoordinates;
}

function generateRandomCoordinates(minX, maxX, minY, maxY) {
  var randomXCoord = Math.floor(Math.random() * (maxX + 1 - minX)) + minX;
  var randomYCoord = Math.floor(Math.random() * (maxY + 1 - minY)) + minY;
  return new Coordinates(randomXCoord, randomYCoord);
}


function generateRectCoordinates(posX, posY, width, height){
  coordinates = {
      leftX: posX,
      rightX: posX + width,
      topY: posY,
      bottomY: posY + height
  };
  return coordinates;
}