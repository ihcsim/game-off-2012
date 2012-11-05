var spriteSrc = "images/sprite.png";
function initStage(){
  return new Stage(spriteSrc);
}

function initPlayer(){
  return new Player(spriteSrc);
}

var stage = $("#stage");
var stageCtx = stage[0].getContext("2d");
function drawStage(stage){
  stageCtx.drawImage(stage.sprite, stage.srcX, stage.srcY, stage.width, stage.height, stage.posX, stage.posY, stage.width, stage.height);
}

var stageCanvas = $("#stage-canvas");
var stageCanvasCtx = stageCanvas[0].getContext("2d");
function drawPlayer(player){
  stageCanvasCtx.drawImage(player.sprite, player.srcX, player.srcY, player.width, player.height, player.posX, player.posY, player.width, player.height);
}

function clearStage(stage) {
  stageCanvasCtx.clearRect(stage.srcX, stage.srcY, stage.width, stage.height);
}