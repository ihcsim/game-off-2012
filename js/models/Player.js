function Player(stage, spriteSrc){
  var DEFAULT_SPRITE_POS_X = 0;
  var DEFAULT_SPRITE_POS_Y = 600;
  var DEFAULT_PLAYER_WIDTH = 35;
  var DEFAULT_PLAYER_HEIGHT = 54;
  var DEFAULT_START_POS_X = 400;
  var DEFAULT_START_POS_Y = 300;
  var DEFAULT_SPEED = 2; // pixels
  
  this.srcX = DEFAULT_SPRITE_POS_X;
  this.srcY = DEFAULT_SPRITE_POS_Y;
  this.width = DEFAULT_PLAYER_WIDTH;
  this.height = DEFAULT_PLAYER_HEIGHT;
  this.drawX = DEFAULT_START_POS_X;
  this.drawY = DEFAULT_START_POS_Y;
  this.speed = DEFAULT_SPEED;
  this.centerX = this.drawX + (this.width / 2);
  this.centerY = this.drawY + (this.height / 2);
  
  this.isUpKey = false;
  this.isRightKey = false;
  this.isDownKey = false;
  this.isLeftKey = false;
  this.isSpacebar = false;
  
  this.stage = stage;
  
  this.sprite = new Image();
  this.sprite.src = spriteSrc;
  
  this.direction = new Direction();
  this.currentDirection = this.direction.SOUTH;
}

Player.prototype.isFacingNorth = function(){
  return this.currentDirection == this.direction.NORTH;
};

Player.prototype.isFacingSouth = function(){
  return this.currentDirection == this.direction.SOUTH;
};

Player.prototype.isFacingEast = function(){
  return this.currentDirection == this.direction.EAST;
};

Player.prototype.isFacingWest = function(){
  return this.currentDirection == this.direction.WEST;
};

Player.prototype.executeAction = function(event){
  var keyID = event.keyCode || event.which;
  if(keyID == 38) {
    this.currentDirection = this.direction.NORTH;
    event.preventDefault();
  }
  else if(keyID == 40) {
    this.currentDirection = this.direction.SOUTH;
    event.preventDefault();
  }
  else if(keyID == 39) {
    this.currentDirection = this.direction.EAST;
    event.preventDefault();
  }
  else if(keyID == 37) {
    this.currentDirection = this.direction.WEST;
    event.preventDefault();
  }
};

Player.prototype.updatePos = function () {
  this.centerX = this.drawX + (this.width / 2);
  this.centerY = this.drawY + (this.height / 2);
  this.checkDirection();
};

Player.prototype.draw = function () {
  this.stage.drawImage(this.sprite, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
};

Player.prototype.checkDirection = function () {
  var newDrawX = this.drawX,
      newDrawY = this.drawY,
      obstacleCollision = false;
  if (this.isFacingNorth()) {
      newDrawY -= this.speed;
      this.srcX = 35;
  } else if (this.isFacingSouth()) {
      newDrawY += this.speed;
      this.srcX = 0;
  } else if (this.isFacingEast()) {
      newDrawX += this.speed;
      this.srcX = 105;
  } else if (this.isFacingWest()) {
      newDrawX -= this.speed;
      this.srcX = 70;
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