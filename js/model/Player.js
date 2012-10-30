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
  this.isUpKey = false;
  this.isRightKey = false;
  this.isDownKey = false;
  this.isLeftKey = false;
  this.isSpacebar = false;
  this.stage = stage;
  this.imgSprite = imgSprite;
}

Player.prototype.updatePos = function () {
  this.centerX = this.drawX + (this.width / 2);
  this.centerY = this.drawY + (this.height / 2);
  this.checkDirection();
};

Player.prototype.draw = function () {
  this.stage.drawImage(imgSprite, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
};

Player.prototype.checkDirection = function () {
  var newDrawX = this.drawX,
      newDrawY = this.drawY,
      obstacleCollision = false;
  if (this.isUpKey) {
      newDrawY -= this.speed;
      this.srcX = 35; // Facing north
  } else if (this.isDownKey) {
      newDrawY += this.speed;
      this.srcX = 0; // Facing south
  } else if (this.isRightKey) {
      newDrawX += this.speed;
      this.srcX = 105; // Facing east
  } else if (this.isLeftKey) {
      newDrawX -= this.speed;
      this.srcX = 70; // Facing west
  }

  //obstacleCollision = this.checkObstacleCollide(newDrawX, newDrawY);

  if (!obstacleCollision && !outOfBounds(this, newDrawX, newDrawY)) {
      this.drawX = newDrawX;
      this.drawY = newDrawY;
  }
};


function outOfBounds(a, x, y) {
  var newBottomY = y + a.height,
      newTopY = y,
      newRightX = x + a.width,
      newLeftX = x,
      treeLineTop = 5,
      treeLineBottom = 570,
      treeLineRight = 750,
      treeLineLeft = 65;
  return newBottomY > treeLineBottom ||
      newTopY < treeLineTop ||
      newRightX > treeLineRight ||
      newLeftX < treeLineLeft;
}