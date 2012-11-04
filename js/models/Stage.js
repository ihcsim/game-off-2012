Stage = function(spriteSrc, dom){
  this.sprite = new Image();
  this.sprite.src = spriteSrc;
  
  this.height = dom.height;
  this.width = dom.width;
  
  this.isReady = function(){
    return this.sprite.src != null;
  };
};
