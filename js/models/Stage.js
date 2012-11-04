Stage = function(spriteSrc, dom){
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
    var imgStartX = 0;
    var imgStartY = 0;
    var stageStartX = 0;
    var stageStartY = 0;
    stageCtx.drawImage(this.sprite, imgStartX, imgStartY, this.width, this.height, stageStartX, stageStartY, this.width, this.height);
  };
};
