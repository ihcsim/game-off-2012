Obstacle = function(srcX, srcY, width, height){
  this.position = new Coordinates(srcX, srcY);
  this.dimension = new Dimension(width, height)
  this.coordinates = generateRectCoordinates(this.position, this.dimension);
};