$(document).ready(function(){
  var stage = $("#stage"),
      stageCtx = stage[0].getContext("2d"),
      stageCanvas = $("#stage-canvas"),
      stageCanvasCtx = stageCanvas[0].getContext("2d");

  var isPlaying = false;
  var requestAnimationFrame = null;
  
  var spriteSrc = "images/sprite.png";
  var player = new Player(stageCanvasCtx, spriteSrc);
  var newStage = new Stage(spriteSrc, stage);
  if(newStage.isReady())
    initGame();
  
  function initGame(){
    requestAnimationFrame = initRequestAnimationFrame();
    initKeyboardEventHandler();
    begin();
  }

  function initKeyboardEventHandler(){
    $(document).keydown(function(event) {
      player.executeAction(event);
    });
    $(document).keyup(function(e) {
      checkKey(e, false);
    });
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
  
  function begin(){
    var imgStartX = 0;
    var imgStartY = 0;
    var stageStartX = 0;
    var stageStartY = 0;
    var imgWidth = newStage.width;
    var imgHeight = newStage.height;
    
    stageCtx.drawImage(newStage.sprite, imgStartX, imgStartY, imgWidth, imgHeight, stageStartX, stageStartY, newStage.width, newStage.height);
    isPlaying = true;
    requestAnimationFrame(loop);
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
    player.updatePos();
  }
  
  function clearCanvas(ctx) {
    var startX = 0;
    var startY = 0;
    ctx.clearRect(startX, startY, newStage.width, newStage.height);
  }
  
  function draw(){
    player.draw();
  }
  
  function checkKey(e, value) {
    var keyID = e.keyCode || e.which;
    if (keyID === 38) { // Up arrow
        player.isUpKey = value;
        e.preventDefault();
    }
    if (keyID === 39) { // Right arrow
        player.isRightKey = value;
        e.preventDefault();
    }
    if (keyID === 40) { // Down arrow
        player.isDownKey = value;
        e.preventDefault();
    }
    if (keyID === 37) { // Left arrow
        player.isLeftKey = value;
        e.preventDefault();
    }
    if (keyID === 32) { // Spacebar
        player.isSpacebar = value;
        e.preventDefault();
    }
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