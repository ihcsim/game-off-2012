var DEFAULT_PLAYER_WIDTH = 40;
var DEFAULT_PLAYER_HEIGHT = 58;
var DEFAULT_DIMENSION = new Dimension(DEFAULT_PLAYER_WIDTH, DEFAULT_PLAYER_HEIGHT);
  
function renderPlayerMoveSouth(player){
  if(!player.isInMotion()) {
    player.image = createPlayerImageFacingSouth();
    return;
  }
  
  var newImage = createPlayerImageMoveSouth();
  if(newImage)
    player.image = newImage;
}

function createPlayerImageFacingSouth(){
  return new SpriteImage(playerFacingSouth_StationaryImageCoordinates(), DEFAULT_DIMENSION);
}

var moveSouthFrameIndex = 0;
function createPlayerImageMoveSouth(){
  if(moveSouthFrameIndex == 0) {
    moveSouthFrameIndex += 1;
    return new SpriteImage(playerMovingSouth_LeftAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
  else if(moveSouthFrameIndex == 5){
    moveSouthFrameIndex += 1;
    return new SpriteImage(playerMovingSouth_RightAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
  else if(moveSouthFrameIndex == 10) {
    moveSouthFrameIndex = 0;
    return new SpriteImage(playerMovingSouth_LeftAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
  moveSouthFrameIndex+= 1;
}

function renderPlayerMoveNorth(player){
  if(!player.isInMotion()) {
    player.image = createPlayerImageFacingNorth();
    return;
  }
  
  var newImage = createPlayerImageMoveNorth();
  if(newImage)
    player.image = newImage;
}

function createPlayerImageFacingNorth(){
  return new SpriteImage(playerFacingNorth_StationaryImageCoordinates(), DEFAULT_DIMENSION);
}

var moveNorthFrameIndex = 0;
function createPlayerImageMoveNorth(){
  if(moveNorthFrameIndex == 0) {
    moveNorthFrameIndex += 1;
    return new SpriteImage(playerMovingNorth_LeftAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
  else if(moveNorthFrameIndex == 5){
    moveNorthFrameIndex += 1;
    return new SpriteImage(playerMovingNorth_RightAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
  else if(moveNorthFrameIndex == 10) {
    moveNorthFrameIndex = 0;
    return new SpriteImage(playerMovingNorth_LeftAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
  moveNorthFrameIndex+= 1;
}

function renderPlayerMoveEast(player){
  if(!player.isInMotion()) {
    player.image = createPlayerImageFacingEast();
    return;
  }
  
  var newImage = createPlayerImageMoveEast();
  if(newImage)
    player.image = newImage;
}

function createPlayerImageFacingEast(){
  return new SpriteImage(playerFacingEast_StationaryImageCoordinates(), DEFAULT_DIMENSION);
}

var moveEastFrameIndex = 0;
function createPlayerImageMoveEast(){
  if(moveEastFrameIndex == 0) {
    moveEastFrameIndex += 1;
    return new SpriteImage(playerMovingEast_LeftAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
  else if(moveEastFrameIndex == 5){
    moveEastFrameIndex += 1;
    return new SpriteImage(playerMovingEast_RightAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
  else if(moveEastFrameIndex == 10) {
    moveEastFrameIndex = 0;
    return new SpriteImage(playerMovingEast_LeftAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
  moveEastFrameIndex+= 1;
}

function renderPlayerMoveWest(player){
  if(!player.isInMotion()) {
    player.image = createPlayerImageFacingWest();
    return;
  }
  
  var newImage = createPlayerImageMoveWest();
  if(newImage)
    player.image = newImage;
}

function createPlayerImageFacingWest(){
  return new SpriteImage(playerFacingWest_StationaryImageCoordinates(), DEFAULT_DIMENSION);
}

var moveWestFrameIndex = 0;
function createPlayerImageMoveWest(){
  if(moveWestFrameIndex == 0) {
    moveWestFrameIndex += 1;
    return new SpriteImage(playerMovingWest_LeftAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
  else if(moveWestFrameIndex == 5){
    moveWestFrameIndex += 1;
    return new SpriteImage(playerMovingWest_RightAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
  else if(moveWestFrameIndex == 10) {
    moveWestFrameIndex = 0;
    return new SpriteImage(playerMovingWest_LeftAdvanceImageCoordinates(), DEFAULT_DIMENSION);
  }
  moveWestFrameIndex+= 1;
}