var spriteSrc = "images/sprite.png";
function initStage(){
  return new Stage(spriteSrc);
}

function initPlayer(){
  return new Player(spriteSrc);
}

function initPlayerWithBullets(numBullets){
  player = initPlayer(spriteSrc);
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
  return new Enemy(spriteSrc);
}

function initBullet(){
  return new Bullet();
}

function initObstacles(){
  var treeWidth = 65;
  var treeHeight = 90;
  var rockDimensions = 30;
  var bushHeight = 28;

  var obstacle1 = new Obstacle(78, 360, treeWidth, treeHeight);
  var obstacle2 = new Obstacle(390, 395, treeWidth, treeHeight);
  var obstacle3 = new Obstacle(415, 102, treeWidth, treeHeight);
  var obstacle4 = new Obstacle(619, 184,treeWidth, treeHeight);
  var obstacle5 = new Obstacle(97, 63, rockDimensions, rockDimensions);
  var obstacle6 = new Obstacle(296, 379, rockDimensions, rockDimensions);
  var obstacle7 = new Obstacle(295, 25, 150, bushHeight);
  var obstacle8 = new Obstacle(570, 138, 150, bushHeight);
  var obstacle9 = new Obstacle(605, 492, 90, bushHeight);
  var obstacles = [obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8, obstacle9];
  return obstacles;
}