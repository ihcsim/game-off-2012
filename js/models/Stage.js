Stage = function(spriteSrc){
  var DEFAULT_SPRITE_POS_X = 0;
  var DEFAULT_SPRITE_POS_Y = 0;
  var DEFAULT_START_POS_X = 0;
  var DEFAULT_START_POS_Y = 0;
  var DEFAULT_STAGE_WIDTH = 800;
  var DEFAULT_STAGE_HEIGHT = 600;
  
  this.srcX = DEFAULT_SPRITE_POS_X;
  this.srcY = DEFAULT_SPRITE_POS_Y;
  
  this.position = new Coordinates(DEFAULT_START_POS_X, DEFAULT_START_POS_Y);
  this.dimension = new Dimension(DEFAULT_STAGE_WIDTH, DEFAULT_STAGE_HEIGHT);
  
  this.sprite = new Image();
  this.sprite.src = spriteSrc;
  
  this.isReady = function(){
    return this.sprite != null;
  };
  
  this.draw = function(){
    var stage = $("#stage");
    var stageCtx = stage[0].getContext("2d");
    stageCtx.drawImage(this.sprite, this.srcX, this.srcY, this.dimension.width, this.dimension.height, this.position.posX, this.position.posY, this.dimension.width, this.dimension.height);
  };

  this.clear = function() {
    var stageCanvas = $("#stage-canvas");
    var stageCanvasCtx = stageCanvas[0].getContext("2d");
    stageCanvasCtx.clearRect(this.srcX, this.srcY, this.dimension.width, this.dimension.height);
  };
};
