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
  var MIN_X_COORDINATE = 0;
  var MAX_X_COORDINATE = DEFAULT_STAGE_WIDTH - DEFAULT_ENEMY_WIDTH;
  var MIN_Y_COORDINATE = 0;
  var MAX_Y_COORDINATE = DEFAULT_STAGE_HEIGHT - DEFAULT_ENEMY_HEIGHT;
  
  this.sprite = new Image();
  this.sprite.src = spriteSrc;
  
  this.srcX = DEFAULT_SPRITE_POS_X;
  this.srcY = DEFAULT_SPRITE_POS_Y;
  
  this.dimension = new Dimension(DEFAULT_ENEMY_WIDTH, DEFAULT_ENEMY_HEIGHT);
  
  var speed = DEFAULT_SPEED;
  var isDead = false;

  this.currentPosition = generateRandomCoordinates(MIN_X_COORDINATE, MAX_X_COORDINATE, MIN_Y_COORDINATE, MAX_Y_COORDINATE);
  
  this.calculateCenterCoordinates = function(){
    return calculateCenterCoordinates(this.currentPosition, this.dimension);
  };
  this.nextPosition = this.calculateCenterCoordinates();
  
  var thisEnemy = this;
  this.nextMoveTime = rand(DEFAULT_MIN_TIME, DEFAULT_MAX_TIME);
  this.moveInterval = setInterval(function(){ thisEnemy.decideNextLocation();}, thisEnemy.nextMoveTime);
  
  this.decideNextLocation = function(){
    var minPosX = calculateCenterPointXCoordMin();
    var maxPosX = calculateCenterPointXCoordMax();
    var minPosY = calculateCenterPointYCoordMin();
    var maxPosY = calculateCenterPointYCoordMax();
    this.nextPosition = generateRandomCoordinates(minPosX, maxPosX, minPosY, maxPosY);
  };
  
  function calculateCenterPointXCoordMin(){
    var centerCoords = thisEnemy.calculateCenterCoordinates();
    var minPosX = centerCoords.posX - DEFAULT_MOVEMENT_RADIUS;
    if(minPosX < MIN_X_COORDINATE)
      minPosX = MIN_X_COORDINATE;
    return minPosX;
  }
  
  function calculateCenterPointXCoordMax(){
    var centerCoords = thisEnemy.calculateCenterCoordinates();
    var maxPosX = centerCoords.posX + DEFAULT_MOVEMENT_RADIUS;
    if(maxPosX > MAX_X_COORDINATE)
      maxPosX = MAX_X_COORDINATE;
    return maxPosX;
  }
  
  function calculateCenterPointYCoordMin(){
    var centerCoords = thisEnemy.calculateCenterCoordinates();
    var minPosY = centerCoords.posY - DEFAULT_MOVEMENT_RADIUS;
    if(minPosY < MIN_Y_COORDINATE)
      minPosY = MIN_Y_COORDINATE;
    return minPosY;
  }
  
  function calculateCenterPointYCoordMax(){
    var centerCoords = thisEnemy.calculateCenterCoordinates();
    var maxPosY = centerCoords.posY + DEFAULT_MOVEMENT_RADIUS;
    if(maxPosY > MAX_Y_COORDINATE)
      maxPosY = MAX_Y_COORDINATE;
    return maxPosY;
  }

  this.updatePosition = function () {
    if (nextPositionIsToTheRight())
      incrementPositionXCoordinate();
    else if (nextPositionIsToTheLeft)
      decrementPositionXCoordinate();
    
    if (nextPositionIsBelowCurrentPosition())
      incrementPositionYCoordinate();
    else if (nextPositionIsAboveCurrentPosition())
      decrementPositionYCoordinate();
  };
  
  function nextPositionIsToTheRight(){
    var centerCoords = thisEnemy.calculateCenterCoordinates();
    return (centerCoords.posX < thisEnemy.nextPosition.posX);
  }
  
  function incrementPositionXCoordinate(){
    thisEnemy.currentPosition.posX += speed;
  }
  
  function nextPositionIsToTheLeft(){
    var centerCoords = thisEnemy.calculateCenterCoordinates();
    return (centerCoords.posX > thisEnemy.nextPosition.posX);
  }
  
  function decrementPositionXCoordinate(){
    thisEnemy.currentPosition.posX -= speed;
  }
  
  function nextPositionIsBelowCurrentPosition(){
    var centerCoords = thisEnemy.calculateCenterCoordinates();
    return (centerCoords.posY < thisEnemy.nextPosition.posY);
  }
  
  function incrementPositionYCoordinate(){
    thisEnemy.currentPosition.posY += speed;
  }
  
  function nextPositionIsAboveCurrentPosition(){
    var centerCoords = thisEnemy.calculateCenterCoordinates();
    return (centerCoords.posY > thisEnemy.nextPosition.posY);
  }
  
  function decrementPositionYCoordinate(){
    thisEnemy.currentPosition.posY -= speed;
  }
  
  this.die = function () {
    playSoundEffect();
    clearInterval(this.moveInterval);
    this.srcX = 185;
    isDead = true;
  };

  function playSoundEffect(){
    var soundEffect = new Audio("audio/state_decommission.wav");
    soundEffect.play();
  }
  
  this.isDead = function(){
    return isDead;
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
  
  this.clear = function(){
    var stageCanvas = $("#stage-canvas");
    var stageCanvasCtx = stageCanvas[0].getContext("2d");
    stageCanvasCtx.clearRect(
        this.currentPosition.posX, this.currentPosition.posY, 
        this.dimension.width, this.dimension.height);
  };
};