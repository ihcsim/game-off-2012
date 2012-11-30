var DEFAULT_PLAYER_WIDTH = 40;
var DEFAULT_PLAYER_HEIGHT = 58;
var DEFAULT_PLAYER_ANIMATION_INTERVAL = 200;
var DEFAULT_DIMENSION = new Dimension(DEFAULT_PLAYER_WIDTH, DEFAULT_PLAYER_HEIGHT);

var currentPlayer = null;
function initPlayerAnimationEngine(player){
  currentPlayer = player;
  setInterval(animatePlayerMovement, DEFAULT_PLAYER_ANIMATION_INTERVAL);
}

function animatePlayerMovement(){
  if(!currentPlayer.isInMotion()) {
    currentPlayer.image = createPlayerStationaryImage();
    return;
  }
  
  currentPlayer.image = createPlayerMovementImage();
}

function createPlayerStationaryImage(){
  if(currentPlayer.isFacingNorth())
    return createPlayerFacingNorthImage();
  else if(currentPlayer.isFacingSouth())
    return createPlayerFacingSouthImage();
  else if(currentPlayer.isFacingEast())
    return createPlayerFacingEastImage();
  else if(currentPlayer.isFacingWest())
    return createPlayerFacingWestImage();
  else 
    console.log("Unexpected error: Player is facing at an unknown direction.");
}

function createPlayerFacingNorthImage(){
  return new SpriteImage(playerFacingNorth_StationaryImageCoordinates(), DEFAULT_DIMENSION);
}

function createPlayerFacingSouthImage(){
  return new SpriteImage(playerFacingSouth_StationaryImageCoordinates(), DEFAULT_DIMENSION);
}

function createPlayerFacingEastImage(){
  return new SpriteImage(playerFacingEast_StationaryImageCoordinates(), DEFAULT_DIMENSION);
}

function createPlayerFacingWestImage(){
  return new SpriteImage(playerFacingWest_StationaryImageCoordinates(), DEFAULT_DIMENSION);
}

function createPlayerMovementImage(){
  if(currentPlayer.isFacingNorth())
    return createPlayerMovingNorthImage();
  else if(currentPlayer.isFacingSouth())
    return createPlayerMovingSouthImage();
  else if(currentPlayer.isFacingEast())
    return createPlayerMovingEastImage();
  else if(currentPlayer.isFacingWest())
    return createPlayerMovingWestImage();
  else 
    console.log("Unexpected error: Player is facing at an unknown direction.");
}

var currentOrientation = 0;
function createPlayerMovingNorthImage(){
  if(currentOrientation == 0) {
    currentOrientation = 1;
    return new SpriteImage(playerMovingNorth_LeftAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
  else{
    currentOrientation =0;
    return new SpriteImage(playerMovingNorth_RightAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
}

function createPlayerMovingSouthImage(){
  if(currentOrientation == 0) {
    currentOrientation = 1;
    return new SpriteImage(playerMovingSouth_LeftAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
  else {
    currentOrientation = 0;
    return new SpriteImage(playerMovingSouth_RightAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
}

function createPlayerMovingEastImage(){
  if(currentOrientation == 0) {
    currentOrientation = 1;
    return new SpriteImage(playerMovingEast_LeftAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
  else{
    currentOrientation = 0;
    return new SpriteImage(playerMovingEast_RightAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
}

function createPlayerMovingWestImage(){
  if(currentOrientation == 0) {
    currentOrientation = 1;
    return new SpriteImage(playerMovingWest_LeftAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
  else{
    currentOrientation = 0;
    return new SpriteImage(playerMovingWest_RightAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
}