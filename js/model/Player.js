function Player(stage, imgSprite){
  this.srcX = 0; // pos x in sprite image
  this.srcY = 600; // pos y in sprite image
  this.width = 35;
  this.height = 54;
  this.drawX = 400; // start pos x
  this.drawY = 300; // start pos y
  this.centerX = this.drawX + (this.width / 2);
  this.centerY = this.drawY + (this.height / 2);
  this.speed = 2;
  this.stage = stage;
  this.imgSprite = imgSprite;
}

Player.prototype.updatePos = function () {
  this.centerX = this.drawX + (this.width / 2);
  this.centerY = this.drawY + (this.height / 2);
};

Player.prototype.draw = function () {
  this.stage.drawImage(imgSprite, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
};