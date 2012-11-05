Stage = function(spriteSrc){
  var DEFAULT_SPRITE_POS_X = 0;
  var DEFAULT_SPRITE_POS_Y = 0;
  var DEFAULT_START_POS_X = 0;
  var DEFAULT_START_POS_Y = 0;
  
  this.srcX = DEFAULT_SPRITE_POS_X;
  this.srcY = DEFAULT_SPRITE_POS_Y;
  this.posX = DEFAULT_START_POS_X;
  this.posY = DEFAULT_START_POS_Y;
  
  this.sprite = new Image();
  this.sprite.src = spriteSrc;
  
  this.height = 600;
  this.width = 800;
  
  this.isReady = function(){
    return this.sprite != null;
  };
};
