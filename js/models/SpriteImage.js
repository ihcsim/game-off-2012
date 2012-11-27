SpriteImage = function(spriteCoords, imgDimension){
  this.src = new Coordinates(spriteCoords.posX, spriteCoords.posY);
  this.dimension = new Dimension(imgDimension.width, imgDimension.height);
};