Enemy = function(spriteSrc){
  var DEFAULT_SPRITE_POS_X = 140;
  var DEFAULT_SPRITE_POS_Y = 600;
  var DEFAULT_ENEMY_WIDTH = 45;
  var DEFAULT_ENEMY_HEIGHT = 54;
  var DEFAULT_SPEED = 1; // pixel
  
  this.srcX = DEFAULT_SPRITE_POS_X;
  this.srcY = DEFAULT_SPRITE_POS_Y;
  
  this.dimension = new Dimension(DEFAULT_ENEMY_WIDTH, DEFAULT_ENEMY_HEIGHT);
  
  this.speed = DEFAULT_SPEED;
  this.isDead = false;
  
  this.sprite = new Image();
  this.sprite.src = spriteSrc;
  
  var minX = 0;
  var maxX = 800 - this.dimension.width;
  var minY = 0;
  var maxY = this.dimension.height;
  this.currentPosition = generateRandomCoordinates(minX, maxX, minY, maxY)
  
  this.calculateCenterX = function(){
    return calculateCenterCoordinate(this.currentPosition.posX, this.dimension.width);
  };
  this.centerX = this.calculateCenterX();

  this.calculateCenterY = function(){
    return calculateCenterCoordinate(this.currentPosition.posY , this.dimension.height);
  };
  this.centerY = this.calculateCenterY();
  
  this.updatePosition = function () {
    this.centerX = this.calculateCenterX();
    this.centerY = this.calculateCenterY();
  };
};