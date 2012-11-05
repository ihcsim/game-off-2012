Stage = function(spriteSrc, dom){
  var DEFAULT_SPRITE_POS_X = 0;
  var DEFAULT_SPRITE_POS_Y = 0;
  var DEFAULT_START_POS_X = 0;
  var DEFAULT_START_POS_Y = 0;
  
  this.srcX = DEFAULT_SPRITE_POS_X;
  this.srcY = DEFAULT_SPRITE_POS_Y;
  this.drawX = DEFAULT_START_POS_X;
  this.drawY = DEFAULT_START_POS_Y;
  
  this.sprite = new Image();
  this.sprite.src = spriteSrc;
  
  this.dom = dom;
  this.height = dom.height;
  this.width = dom.width;
  
  this.isReady = function(){
    return this.sprite != null;
  };
  
  this.loadBackground = function(){
    var stageCtx = this.dom.getContext("2d");
    stageCtx.drawImage(this.sprite, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
  };
};
