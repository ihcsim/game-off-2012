var SPRITE_IMG_SRC = "images/sprite.png";
function initStage(){
  return new Stage(SPRITE_IMG_SRC);
}

function initPlayer(){
  return new Player(SPRITE_IMG_SRC);
}

function initPlayerWithBullets(numBullets){
  player = initPlayer(SPRITE_IMG_SRC);
  for(var i = 0; i < numBullets; i++)
    player.loadBullet(new Bullet());
  return player;
}

function initEnemies(numEnemies){
  var enemies = new Array();
  for (var index = 0; index < numEnemies; index++) 
    enemies[index] = initEnemy();
  return enemies;
}

function initEnemy(){
  return new Enemy(SPRITE_IMG_SRC);
}

function initBullet(){
  return new Bullet();
}

var OBSTACLE_TREE_WIDTH = 65;
var OBSTACLE_TREE_HEIGHT = 90;
var OBSTACLE_ROCK_DIMENSIONS = 30;
var OBSTACLE_BUSH_HEIGHT = 28;
function initObstacles(){
  var obstacle1 = initObstacle(78, 360, OBSTACLE_TREE_WIDTH, OBSTACLE_TREE_HEIGHT);
  var obstacle2 = initObstacle(390, 395, OBSTACLE_TREE_WIDTH, OBSTACLE_TREE_HEIGHT);
  var obstacle3 = initObstacle(415, 102, OBSTACLE_TREE_WIDTH, OBSTACLE_TREE_HEIGHT);
  var obstacle4 = initObstacle(619, 184,OBSTACLE_TREE_WIDTH, OBSTACLE_TREE_HEIGHT);
  var obstacle5 = initObstacle(97, 63, OBSTACLE_ROCK_DIMENSIONS, OBSTACLE_ROCK_DIMENSIONS);
  var obstacle6 = initObstacle(296, 379, OBSTACLE_ROCK_DIMENSIONS, OBSTACLE_ROCK_DIMENSIONS);
  var obstacle7 = initObstacle(295, 25, 150, OBSTACLE_BUSH_HEIGHT);
  var obstacle8 = initObstacle(570, 138, 150, OBSTACLE_BUSH_HEIGHT);
  var obstacle9 = initObstacle(605, 492, 90, OBSTACLE_BUSH_HEIGHT);
  var obstacles = [obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8, obstacle9];
  return obstacles;
}

function initObstacle(posX, posY, width, height){
  return new Obstacle(posX, posY, width, height);
}

function initTimer(countDownDurationInMs){
  return new Timer(countDownDurationInMs);
}

