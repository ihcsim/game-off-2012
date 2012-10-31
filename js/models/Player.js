Player = function (spriteSrc){
  var DEFAULT_SPRITE_POS_X = 0;
  var DEFAULT_SPRITE_POS_Y = 600;
  var DEFAULT_PLAYER_HEIGHT = 54;
  var DEFAULT_PLAYER_WIDTH = 35;
  var DEFAULT_START_POS_X = 400;
  var DEFAULT_START_POS_Y = 300;
  var DEFAULT_MOVEMENT_SPEED = 2; // pixels
  
  this.sprite = new Image();
  this.sprite.src = spriteSrc;
  
  this.srcX = DEFAULT_SPRITE_POS_X;
  this.srcY = DEFAULT_SPRITE_POS_Y;
  this.width = DEFAULT_PLAYER_WIDTH;
  this.height = DEFAULT_PLAYER_HEIGHT;
  this.posX = DEFAULT_START_POS_X;
  this.posY = DEFAULT_START_POS_Y;
  this.centerX = this.posX + (this.width / 2);
  this.centerY = this.posY + (this.height / 2);
  this.speed = DEFAULT_MOVEMENT_SPEED;
};

Player.prototype.Direction = {
  NORTH: "North",
  SOUTH: "South",
  EAST: "East",
  WEST: "West"
};

Player.prototype.updatePos = function () {
  this.centerX = this.posX + (this.width / 2);
  this.centerY = this.posY + (this.height / 2);
  this.checkDirection();
};

Player.prototype.draw = function () {
  this.stage.drawImage(imgSprite, this.srcX, this.srcY, this.width, this.height, this.posX, this.posY, this.width, this.height);
};

Player.prototype.checkDirection = function () {
  var newposX = this.posX,
      newposY = this.posY,
      obstacleCollision = false;
  if (this.isUpKey) {
      newposY -= this.speed;
      this.srcX = 35; // Facing north
  } else if (this.isDownKey) {
      newposY += this.speed;
      this.srcX = 0; // Facing south
  } else if (this.isRightKey) {
      newposX += this.speed;
      this.srcX = 105; // Facing east
  } else if (this.isLeftKey) {
      newposX -= this.speed;
      this.srcX = 70; // Facing west
  }

  //obstacleCollision = this.checkObstacleCollide(newposX, newposY);

  if (!obstacleCollision && !outOfBounds(this, newposX, newposY)) {
      this.posX = newposX;
      this.posY = newposY;
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