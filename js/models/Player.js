function Player(spriteSrc){
  var DEFAULT_SPRITE_POS_X = 0;
  var DEFAULT_SPRITE_POS_Y = 600;
  var DEFAULT_PLAYER_WIDTH = 35;
  var DEFAULT_PLAYER_HEIGHT = 54;
  var DEFAULT_START_POS_X = 400;
  var DEFAULT_START_POS_Y = 300;
  var DEFAULT_SPEED = 2; // pixels
  
  this.srcX = DEFAULT_SPRITE_POS_X;
  this.srcY = DEFAULT_SPRITE_POS_Y;
  
  this.posX = DEFAULT_START_POS_X;
  this.posY = DEFAULT_START_POS_Y;
  
  this.dimension = new Dimension(DEFAULT_PLAYER_WIDTH, DEFAULT_PLAYER_HEIGHT);
  this.currentPosition = new Coordinates(DEFAULT_START_POS_X, DEFAULT_START_POS_Y);
  this.calculateCenterCoordinates = function(){
    return calculateCenterCoordinates(this.currentPosition, this.dimension);
  };
  
  this.speed = DEFAULT_SPEED;
  
  this.sprite = new Image();
  this.sprite.src = spriteSrc;
  
  this.direction = new Direction();
  this.currentDirection = this.direction.SOUTH;
  
  this.width = DEFAULT_PLAYER_WIDTH;
  this.height = DEFAULT_PLAYER_HEIGHT;
  
  this.isReady = function(){
    return this.sprite != null;
  };
  
  this.isFacingNorth = function(){
    return this.currentDirection == this.direction.NORTH;
  };

  this.isFacingSouth = function(){
    return this.currentDirection == this.direction.SOUTH;
  };

  this.isFacingEast = function(){
    return this.currentDirection == this.direction.EAST;
  };

  this.isFacingWest = function(){
    return this.currentDirection == this.direction.WEST;
  };

  this.executeAction = function(event){
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

  this.haltAction = function(event){
    this.currentDirection = null;
  };

  this.updatePosition = function () {
    this.checkDirection();
  };
  
  this.checkDirection = function () {
    var newPosX = this.posX;
    var newPosY = this.posY;
    if (this.isFacingNorth()) {
        newPosY -= this.speed;
        this.srcX = 35;
    } else if (this.isFacingSouth()) {
        newPosY += this.speed;
        this.srcX = 0;
    } else if (this.isFacingEast()) {
        newPosX += this.speed;
        this.srcX = 105;
    } else if (this.isFacingWest()) {
        newPosX -= this.speed;
        this.srcX = 70;
    }

    if (!outOfBounds(this, newPosX, newPosY)) {
        this.posX = newPosX;
        this.posY = newPosY;
    }
  };
  
  this.collideWithObstacles = function(obstacles){
    var obstacleCounter = 0;
    var newCenterX = this.posX + (this.width / 2);
    var newCenterY = this.posY + (this.height / 2);
    
    
    
    for (var i = 0; i < obstacles.length; i++) {
    if (obstacles[i].leftX < newCenterX && newCenterX < obstacles[i].rightX && obstacles[i].topY - 20 < newCenterY && newCenterY < obstacles[i].bottomY - 20) {
        obstacleCounter = 0;
    } else {
        obstacleCounter++;
    }
    }
    
    if (obstacleCounter === obstacles.length) {
        return false;
    } else {
        return true;
    }
  };
  
  this.draw = function(){
    var stageCanvas = $("#stage-canvas");
    var stageCanvasCtx = stageCanvas[0].getContext("2d");
    stageCanvasCtx.drawImage(
        this.sprite, 
        this.srcX, this.srcY, 
        this.width, this.height, 
        this.posX, this.posY, 
        this.width, this.height);
  };
}


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