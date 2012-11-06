var spriteSrc = "images/sprite.png";
function initStage(){
  return new Stage(spriteSrc);
}

function initPlayer(){
  return new Player(spriteSrc);
}

function initEnemies(numEnemies){
  var enemies = new Array();
  for (var index = 0; index < numEnemies; index++) 
    enemies[index] = new Enemy(spriteSrc);
  return enemies;
}