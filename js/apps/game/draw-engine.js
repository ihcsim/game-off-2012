var stage = $("#stage");
var stageCtx = stage[0].getContext("2d");
function drawStage(stage){
  stageCtx.drawImage(stage.sprite, stage.srcX, stage.srcY, stage.width, stage.height, stage.posX, stage.posY, stage.width, stage.height);
}

var stageCanvas = $("#stage-canvas");
var stageCanvasCtx = stageCanvas[0].getContext("2d");
function clearStage(stage) {
  stageCanvasCtx.clearRect(stage.srcX, stage.srcY, stage.width, stage.height);
}

function outOfBounds(player) {
  var topEdge = 5;
  var bottomEdge = 570;
  var rightEdge = 750;
  var leftEdge = 65;
  
  var hitLowerBound = (player.newPosition.posY + player.dimension.height) >= bottomEdge;
  var hitUpperBound = player.newPosition.posY <= topEdge;
  var hitLeftBound = player.newPosition.posX <= leftEdge;
  var hitRightBound = (player.newPosition.posX + player.dimension.width) >= rightEdge;
  
  return hitLowerBound || hitUpperBound || hitLeftBound || hitRightBound;
}


function collideWithObstacles(player, obstacles){
  var obstacleCounter = 0;
  var newCenterCoords = player.calculateCenterCoordinates();
  
  $.each(obstacles, function(index, obstacle){
    if (obstacle.leftX < newCenterCoords.posX && newCenterCoords.posX < obstacle.rightX && obstacle.topY - 20 < newCenterCoords.posY && newCenterCoords.posY < obstacle.bottomY - 20) {
      obstacleCounter = 0;
    } else {
      obstacleCounter++;
    }
  });
  
  if (obstacleCounter === obstacles.length) {
      return false;
  } else {
      return true;
  }
}