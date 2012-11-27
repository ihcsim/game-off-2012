Player = function(spriteSrc, initNumBullets){
  var DEFAULT_SPRITE_POS_X = 0;
  var DEFAULT_SPRITE_POS_Y = 4;
  var DEFAULT_PLAYER_WIDTH = 40;
  var DEFAULT_PLAYER_HEIGHT = 58;
  var DEFAULT_START_POS_X = 400;
  var DEFAULT_START_POS_Y = 300;
  var DEFAULT_SPEED = 2; // pixels
  
  this.srcX = DEFAULT_SPRITE_POS_X;
  this.srcY = DEFAULT_SPRITE_POS_Y;
  
  this.dimension = new Dimension(DEFAULT_PLAYER_WIDTH, DEFAULT_PLAYER_HEIGHT);
  this.currentPosition = new Coordinates(DEFAULT_START_POS_X, DEFAULT_START_POS_Y);
  this.calculateCenterCoordinates = function(){
    return calculateCenterCoordinates(this.currentPosition, this.dimension);
  };
  
  this.calculateNewPositionCenterCoordinates = function(){
    return calculateCenterCoordinates(this.newPosition, this.dimension);
  };
  this.newPosition = new Coordinates(DEFAULT_START_POS_X, DEFAULT_START_POS_Y);
  
  var speed = DEFAULT_SPEED;
  
  var inMotion = false;
  this.isInMotion = function(){
    return inMotion;
  };
  this.move = function(){
    inMotion = true;
  };
  this.stop = function(){
    inMotion = false;
  };
  
  var attack = false;
  this.isAttacking = function(){
    return attack;
  };
  
  this.attack = function(){
    attack = true;
  };
  
  this.haltAttack = function(){
    attack = false;
  };
  
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
    this.srcX = 0;
    this.srcY = 192;
  };

  this.isFacingSouth = function(){
    return currentDirection == direction.SOUTH;
  };
  
  this.turnSouth = function(){
    currentDirection = direction.SOUTH;
    this.srcX = 0;
    this.srcY = 4;
  };

  this.isFacingEast = function(){
    return currentDirection == direction.EAST;
  };
  
  this.turnEast = function(){
    currentDirection = direction.EAST;
    this.srcX = 0;
    this.srcY = 132;
  };

  this.isFacingWest = function(){
    return currentDirection == direction.WEST;
  };
  
  this.turnWest = function(){
    currentDirection = direction.WEST;
    this.srcX = 0;
    this.srcY = 67;
  };
  
  var maxNumBullets = initNumBullets;
  var bullets = new Array();
  this.reloadAllBullets = function(){
    var numBulletsToBeReloaded = maxNumBullets - bullets.length;
    for(var index = 0; index < numBulletsToBeReloaded; index++)
      bullets.push(initBullet(this));
    updateScoreBox_BulletCount(player.numBullets());
  };

  var currentBullet = -1;
  this.hasBullet = function(){
    return (bullets.length > 0);
  };
  
  this.numBullets = function(){
    return bullets.length;
  };

  this.fireBullet = function(){
    if(!this.hasBullet())
      return;
    
    playSoundEffect();
    currentBullet++;
    var activeBullet = bullets.shift();
    activeBullet.activate();
    updateScoreBox_BulletCount(player.numBullets());
    return activeBullet;
  };
  
  function playSoundEffect(){
    var soundEffect = new Audio("audio/action_attack.wav");
    soundEffect.play();
  }
  
  this.executeAction = function(event){
    var keyID = event.keyCode || event.which;
    if(keyID == 38) {// up
      this.turnNorth();
      this.move();
    }
    else if(keyID == 40) {// down
      this.turnSouth();
      this.move();
    }
    else if(keyID == 39) {// right
      this.turnEast();
      this.move();
    }
    else if(keyID == 37) {// left
      this.turnWest();
      this.move();
    }
    else if(keyID == 32)
      this.attack();
    else if(keyID == 82)
      this.reloadAllBullets();
  };

  this.haltAction = function(event){
    if(this.isInMotion())
      this.stop();
    if(this.isAttacking())
      this.haltAttack();
  };

  this.lookAheadNewPosition = function () {
    if(!inMotion)
      return;
    
    var newPosX = null;
    var newPosY = null;
    if (this.isFacingNorth()) {
        newPosY = this.currentPosition.posY - speed;
        newPosX = this.currentPosition.posX;
    } 
    else if (this.isFacingSouth()) {
        newPosY = this.currentPosition.posY + speed;
        newPosX = this.currentPosition.posX;
    } 
    else if (this.isFacingEast()) {
        newPosX = this.currentPosition.posX + speed;
        newPosY = this.currentPosition.posY;
    } 
    else if (this.isFacingWest()) {
        newPosX = this.currentPosition.posX - speed;
        newPosY = this.currentPosition.posY;
    }

    this.newPosition= new Coordinates(newPosX, newPosY);
  };
  
  this.commitPosition = function(){
    this.currentPosition = new Coordinates(this.newPosition.posX, this.newPosition.posY);
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
};