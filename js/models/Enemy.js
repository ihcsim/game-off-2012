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

  var minX = 0;
  var maxX = 800 - this.dimension.width;
  var minY = 0;
  var maxY = 600 - this.dimension.height;
  this.currentPosition = generateRandomCoordinates(minX, maxX, minY, maxY);
  this.calculateCenterCoordinates = function(){
    return calculateCenterCoordinates(this.currentPosition, this.dimension);
  };
  
  this.sprite = new Image();
  this.sprite.src = spriteSrc;
  
  this.updatePosition = function () {
    this.calculateCenterCoordinates();
  };
};