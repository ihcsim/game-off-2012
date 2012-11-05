$(document).ready(function(){
  var stage = $("#stage");
  var stageCtx = stage[0].getContext("2d");
  var stageCanvas = $("#stage-canvas");
  var stageCanvasCtx = stageCanvas[0].getContext("2d");
  
  var isPlaying = false;
  var requestAnimationFrame = null;

  var spriteSrc = "images/sprite.png";
  var player = new Player(spriteSrc);
  var newStage = new Stage(spriteSrc, stage[0]);
  if(newStage.isReady())
    initGame();
  
  function initGame(){
    isPlaying = true;
    initKeyboardEventHandler();
    requestAnimationFrame = initRequestAnimationFrame();
    requestAnimationFrame(loop);
  }

  function initRequestAnimationFrame() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
  }
  
  function initKeyboardEventHandler(){
    $(document).keydown(function(event) {
      player.executeAction(event);
    });
    $(document).keyup(function(e) {
      player.haltAction(e);
    });
  }
  
  function loop(){
    if(isPlaying) {
      update();
      draw();
      requestAnimationFrame(loop);
    }
  }
  
  function update(){
    clearCanvas(stageCanvasCtx);
    player.updatePosition();
  }
  
  function clearCanvas(ctx) {
    var startX = 0;
    var startY = 0;
    ctx.clearRect(startX, startY, newStage.width, newStage.height);
  }
  
  function draw(){
    stageCtx.drawImage(newStage.sprite, newStage.srcX, newStage.srcY, newStage.width, newStage.height, newStage.drawX, newStage.drawY, newStage.width, newStage.height);
    stageCanvasCtx.drawImage(player.sprite, player.srcX, player.srcY, player.width, player.height, player.drawX, player.drawY, player.width, player.height);
  }

  function outOfBounds(a, x, y) {
    var newBottomY = y + a.height,
        newTopY = y,
        newRightX = x + a.width,
        newLeftX = x,
        treeLineTop = 5,
        treeLineBottom = 570,
        treeLineRight = 750,
        treeLineLeft = 65;
    return newBottomY > treeLineBottom ||
        newTopY < treeLineTop ||
        newRightX > treeLineRight ||
        newLeftX < treeLineLeft;
  }
  
  
  function randomRange (min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }
});