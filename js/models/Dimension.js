Dimension = function(width, height){
  this.width = width;
  this.height = height;
};

Dimension.prototype.CircularDimension = function(radius){
  this.radius = radius;
  this.width = this.radius * 2;
  this.height = this.radius * 2;
  return this;
};