var DEFAULT_PLAYER_WIDTH = 40;
var DEFAULT_PLAYER_HEIGHT = 58;
var DEFAULT_DIMENSION = new Dimension(DEFAULT_PLAYER_WIDTH, DEFAULT_PLAYER_HEIGHT);
  
function renderPlayerFaceSouth(player){
  player.image = createPlayerImageFaceSouth();
}

function createPlayerImageFaceSouth(){
  var spriteCoords = new Coordinates(0,4);
  return new SpriteImage(spriteCoords, DEFAULT_DIMENSION);
}

function renderPlayerFaceNorth(player){
  player.image = createPlayerImageFaceNorth();
}

function createPlayerImageFaceNorth(){
  var spriteCoords = new Coordinates(0,192);
  return new SpriteImage(spriteCoords, DEFAULT_DIMENSION);
}

function renderPlayerFaceEast(player){
  player.image = createPlayerImageFaceEast();
}

function createPlayerImageFaceEast(){
  var spriteCoords = new Coordinates(0,132);
  return new SpriteImage(spriteCoords, DEFAULT_DIMENSION);
}

function renderPlayerFaceWest(player){
  player.image = createPlayerImageFaceWest();
}

function createPlayerImageFaceWest(){
  var spriteCoords = new Coordinates(0,67);
  return new SpriteImage(spriteCoords, DEFAULT_DIMENSION);
}