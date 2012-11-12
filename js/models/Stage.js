Stage = function(spriteSrc){
  var DEFAULT_SPRITE_POS_X = 0;
  var DEFAULT_SPRITE_POS_Y = 0;
  var DEFAULT_START_POS_X = 0;
  var DEFAULT_START_POS_Y = 0;
  var DEFAULT_STAGE_WIDTH = 800;
  var DEFAULT_STAGE_HEIGHT = 600;
  
  this.srcX = DEFAULT_SPRITE_POS_X;
  this.srcY = DEFAULT_SPRITE_POS_Y;
  this.posX = DEFAULT_START_POS_X;
  this.posY = DEFAULT_START_POS_Y;
  
  this.sprite = new Image();
  this.sprite.src = spriteSrc;
  
  this.dimension = new Dimension(DEFAULT_STAGE_WIDTH, DEFAULT_STAGE_HEIGHT);
  
  this.isReady = function(){
    return this.sprite != null;
  };
};
