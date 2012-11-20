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

function initObstacles(){
  var treeWidth = 65;
  var treeHeight = 90;
  var rockDimensions = 30;
  var bushHeight = 28;

  var obstacle1 = initObstacle(78, 360, treeWidth, treeHeight);
  var obstacle2 = initObstacle(390, 395, treeWidth, treeHeight);
  var obstacle3 = initObstacle(415, 102, treeWidth, treeHeight);
  var obstacle4 = initObstacle(619, 184,treeWidth, treeHeight);
  var obstacle5 = initObstacle(97, 63, rockDimensions, rockDimensions);
  var obstacle6 = initObstacle(296, 379, rockDimensions, rockDimensions);
  var obstacle7 = initObstacle(295, 25, 150, bushHeight);
  var obstacle8 = initObstacle(570, 138, 150, bushHeight);
  var obstacle9 = initObstacle(605, 492, 90, bushHeight);
  var obstacles = [obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8, obstacle9];
  return obstacles;
}

function initObstacle(posX, posY, width, height){
  return new Obstacle(posX, posY, width, height);
}

