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
  
  var speed = DEFAULT_SPEED;
  var inMotion = false;
  
  this.sprite = new Image();
  this.sprite.src = spriteSrc;
  
  this.isReady = function(){
    return this.sprite != null;
  };
  
  var direction = new Direction();
  var currentDirection = direction.SOUTH;
  this.isFacingNorth = function(){
    return currentDirection == direction.NORTH;
  };
  
  this.turnNorth = function(){
    currentDirection = direction.NORTH;
  };

  this.isFacingSouth = function(){
    return currentDirection == direction.SOUTH;
  };
  
  this.turnSouth = function(){
    currentDirection = direction.SOUTH;
  };

  this.isFacingEast = function(){
    return currentDirection == direction.EAST;
  };
  
  this.turnEast = function(){
    currentDirection = direction.EAST;
  };

  this.isFacingWest = function(){
    return currentDirection == direction.WEST;
  };
  
  this.turnWest = function(){
    currentDirection = direction.WEST;
  };

  this.executeAction = function(event){
    inMotion = true;
    var keyID = event.keyCode || event.which;
    if(keyID == 38) { // up
      this.turnNorth();
      event.preventDefault();
    }
    else if(keyID == 40) { // down
      this.turnSouth();
      event.preventDefault();
    }
    else if(keyID == 39) { // right
      this.turnEast();
      event.preventDefault();
    }
    else if(keyID == 37) { // left
      this.turnWest();
      event.preventDefault();
    }
  };

  this.haltAction = function(event){
    inMotion = false;
    currentDirection = null;
  };

  this.updatePosition = function () {
    if(!inMotion)
      return;
    
    var newPosX = null;
    var newPosY = null;
    if (this.isFacingNorth()) {
        newPosY = this.currentPosition.posY - speed;
        newPosX = this.currentPosition.posX;
        this.srcX = 35;
    } else if (this.isFacingSouth()) {
        newPosY = this.currentPosition.posY + speed;
        newPosX = this.currentPosition.posX;
        this.srcX = 0;
    } else if (this.isFacingEast()) {
        newPosX = this.currentPosition.posX + speed;
        newPosY = this.currentPosition.posY;
        this.srcX = 105;
    } else if (this.isFacingWest()) {
        newPosX = this.currentPosition.posX - speed;
        newPosY = this.currentPosition.posY;
        this.srcX = 70;
    }

    this.currentPosition.posX = newPosX;
    this.currentPosition.posY = newPosY;
  };
  
  this.collideWithObstacles = function(obstacles){
    var obstacleCounter = 0;
    var newCenterX = this.currentPosition.posX + (this.dimension.width / 2);
    var newCenterY = this.currentPosition.posY + (this.height / 2);
    
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
        this.dimension.width, this.dimension.height, 
        this.currentPosition.posX, this.currentPosition.posY, 
        this.dimension.width, this.dimension.height);
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