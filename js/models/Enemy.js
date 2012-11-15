Enemy = function(spriteSrc){
  var DEFAULT_SPRITE_POS_X = 140;
  var DEFAULT_SPRITE_POS_Y = 600;
  var DEFAULT_ENEMY_WIDTH = 45;
  var DEFAULT_ENEMY_HEIGHT = 54;
  var DEFAULT_SPEED = 1; // pixel
  var DEFAULT_MIN_TIME = 4000; // seconds
  var DEFAULT_MAX_TIME = 10000; // seconds
  var DEFAULT_MOVEMENT_RADIUS = 50; // pixels
  var DEFAULT_STAGE_WIDTH = 800;
  var DEFAULT_STAGE_HEIGHT = 600;
  
  this.srcX = DEFAULT_SPRITE_POS_X;
  this.srcY = DEFAULT_SPRITE_POS_Y;
  
  this.dimension = new Dimension(DEFAULT_ENEMY_WIDTH, DEFAULT_ENEMY_HEIGHT);
  
  this.speed = DEFAULT_SPEED;
  this.isDead = false;

  var minX = 0;
  var maxX = DEFAULT_STAGE_WIDTH - this.dimension.width;
  var minY = 0;
  var maxY = DEFAULT_STAGE_HEIGHT - this.dimension.height;

  var initCoords = generateRandomCoordinates(minX, maxX, minY, maxY);
  this.currentPosition = new Coordinates(initCoords.posX, initCoords.posY);
  
  this.calculateCenterCoordinates = function(){
    return calculateCenterCoordinates(this.currentPosition, this.dimension);
  };
  this.nextPosition = this.calculateCenterCoordinates();
  
  this.nextMoveTime = rand(DEFAULT_MIN_TIME, DEFAULT_MAX_TIME);
  var thisEnemy = this;
  this.moveInterval = setInterval(function(){ thisEnemy.setNextRandomPosition();}, thisEnemy.nextMoveTime);
  
  this.setNextRandomPosition = function(){
    var centerCoords = this.calculateCenterCoordinates();
    var minPosX = centerCoords.posX - DEFAULT_MOVEMENT_RADIUS;
    var maxPosX = centerCoords.posX + DEFAULT_MOVEMENT_RADIUS;
    var minPosY = centerCoords.posY - DEFAULT_MOVEMENT_RADIUS;
    var maxPosY = centerCoords.posY + DEFAULT_MOVEMENT_RADIUS;
    
    if(minPosX < 0)
      minPosX = 0;
    
    if(maxPosX > DEFAULT_STAGE_WIDTH)
      maxPosX = DEFAULT_STAGE_WIDTH;
    
    if(minPosY < 0)
      minPosY = 0;
    
    if(maxPosY > DEFAULT_STAGE_HEIGHT)
      maxPosY = DEFAULT_STAGE_HEIGHT;
    
    var nextPosX = rand(minPosX, maxPosX);
    var nextPosY = rand(minPosY, maxPosY);
    this.nextPosition = new Coordinates(nextPosX, nextPosY);
  };

  this.sprite = new Image();
  this.sprite.src = spriteSrc;
  
  this.updatePosition = function () {
    var centerCoords = this.calculateCenterCoordinates();
    var newPosX = this.currentPosition.posX;
    var newPosY = this.currentPosition.posY;

    if (centerCoords.posX < this.nextPosition.posX)
      newPosX = this.currentPosition.posX + this.speed;
    else if (centerCoords.posX > this.nextPosition.posX)
      newPosX = this.currentPosition.posX - this.speed;
    
    if (centerCoords.posY < this.nextPosition.posY)
      newPosY = this.currentPosition.posY + this.speed;
    else if (centerCoords.posY > this.nextPosition.posY)
      newPosY = this.currentPosition.posY  - this.speed;
    
    this.currentPosition = new Coordinates(newPosX, newPosY);
  };
  
  this.die = function () {
    var soundEffect = new Audio("audio/dying.wav");
    soundEffect.play();
    clearInterval(this.moveInterval);
    this.srcX = 185;
    this.isDead = true;
  };

  
  this.draw = function() {
    var stageCanvas = $("#stage-canvas");
    var stageCanvasCtx = stageCanvas[0].getContext("2d");
    stageCanvasCtx.drawImage(this.sprite, 
        this.srcX, this.srcY, 
        this.dimension.width, this.dimension.height, 
        this.currentPosition.posX, this.currentPosition.posY, 
        this.dimension.width, this.dimension.height);
  };
};