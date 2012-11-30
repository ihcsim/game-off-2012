Bullet = function(currentPlayer){
  var radius = 2;
  var dimension = new Dimension();
  this.dimension = dimension.CircularDimension(radius);
  this.centerCoordinates = new Coordinates(0, 0);
  
  var direction = new Direction();
  var currentDirection = direction.NORTH;
  
  var isActive = false;
  this.xVel = 0;
  this.yVel = 0;
  this.speed = 6;
  
  this.player = currentPlayer;
  
  this.activate = function(){
    this.active();
    this.initCenterCoordinates();
    this.setCourse();
  };
  
  this.initCenterCoordinates = function(){
    var playerCenterCoord = this.player.calculateCenterCoordinates();
    this.centerCoordinates.posX = playerCenterCoord.posX;
    this.centerCoordinates.posY = playerCenterCoord.posY;
  };

  this.setCourse = function () {
    if (this.player.isFacingSouth())
      this.southBound();
    else if (this.player.isFacingNorth())
      this.northBound();
    else if (this.player.isFacingWest())
      this.westBound();
    else if (this.player.isFacingEast())
      this.eastBound();
  };
  
  this.updatePosition = function () {
    this.centerCoordinates.posX += this.xVel;
    this.centerCoordinates.posY += this.yVel;
  };

  this.draw = function () {
    var stageCanvas = $("#stage-canvas");
    var stageCanvasCtx = stageCanvas[0].getContext("2d");
    stageCanvasCtx.fillStyle = "white";
    stageCanvasCtx.beginPath();
    stageCanvasCtx.arc(this.centerCoordinates.posX, this.centerCoordinates.posY, this.dimension.radius, 0, Math.PI * 2, false);
    stageCanvasCtx.closePath();
    stageCanvasCtx.fill();
  };
  
  this.northBound = function(){
    currentDirection = direction.NORTH;
    this.xVel = 0;
    this.yVel = -this.speed;
  };
  
  this.southBound = function(){
    currentDirection = direction.SOUTH;
    this.xVel = 0;
    this.yVel = this.speed;
  };
  
  this.eastBound = function(){
    currentDirection = direction.EAST;
    this.xVel = this.speed;
    this.yVel = 0;
  };
  
  this.westBound = function(){
    currentDirection = direction.WEST;
    this.xVel = -this.speed;
    this.yVel = 0;
  };
  
  this.isNorthBound = function(){
    return (currentDirection == direction.NORTH);
  };
  
  this.isSouthBound = function(){
    return (currentDirection == direction.SOUTH);
  };
  
  this.isEastBound = function(){
    return (currentDirection == direction.EAST);
  };
  
  this.isWestBound = function(){
    return (currentDirection == direction.WEST);
  };
  
  this.active = function(){
    isActive = true;
  };

  this.inactive = function () {
    isActive = false;
  };
  
  this.isActive = function(){
    return isActive;
  };
};