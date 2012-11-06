Enemy = function(spriteSrc){
  var DEFAULT_SPRITE_POS_X = 140;
  var DEFAULT_SPRITE_POS_Y = 600;
  var DEFAULT_ENEMY_WIDTH = 45;
  var DEFAULT_ENEMY_HEIGHT = 54;
  var DEFAULT_SPEED = 1; // pixel
  
  this.srcX = DEFAULT_SPRITE_POS_X;
  this.srcY = DEFAULT_SPRITE_POS_Y;
  this.width = DEFAULT_ENEMY_WIDTH;
  this.height = DEFAULT_ENEMY_HEIGHT;
  
  this.speed = DEFAULT_SPEED;
  this.isDead = false;
  
  this.sprite = new Image();
  this.sprite.src = spriteSrc;

  function calculateStartPos (min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }
  this.posX = calculateStartPos(0, 800 - this.width);
  this.posY = calculateStartPos(0, 600 - this.height);
  
  this.calculateCenterX = function(){
    return this.posX + (this.width / 2);
  };
  this.centerX = this.calculateCenterX();

  this.calculateCenterY = function(){
    return this.posY + (this.height / 2);
  };
  this.centerY = this.calculateCenterY();
  
  this.updatePosition = function () {
    this.centerX = this.calculateCenterX();
    this.centerY = this.calculateCenterY();
  };
};