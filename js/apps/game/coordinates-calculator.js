var stage = $("#stage");
var stageCtx = stage[0].getContext("2d");

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

function calculateRectCoordinates(position, dimension){
  coordinates = {
      topLeft: new Coordinates(position.posX, position.posY),
      topRight: new Coordinates(position.posX + dimension.width, position.posY),
      bottomLeft: new Coordinates(position.posX, position.posY + dimension.height),
      bottomRight: new Coordinates(position.posX + dimension.width, position.posY + dimension.height)
  };
  return coordinates;
}

function calculateMidpointCoordinates(coordinate1, coordinate2){
  var midpointPosX = (coordinate1.posX + coordinate2.posX)/2;
  var midpointPosY = (coordinate1.posY + coordinate2.posY)/2;
  return new Coordinates(midpointPosX, midpointPosY);
}