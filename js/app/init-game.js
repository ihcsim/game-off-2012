$(document).ready(function(){
  var stage = $("#stage"),
      stageCtx = stage[0].getContext("2d"),
      stageCanvas = $("#stage-canvas"),
      stageCanvasCtx = stageCanvas[0].getContext("2d"),
      stageWidth = stage[0].width,
      stageHeight = stage[0].height,
      isPlaying = false,
      requestAnimFrame = window.requestAnimationFrame ||
                         window.webkitRequestAnimationFrame ||
                         window.mozRequestAnimationFrame ||
                         window.oRequestAnimationFrame ||
                         window.msRequestAnimationFrame ||
                         function(callback) {
                           window.setTimeout(callback, 1000 / 60);
                         };
     
     imgSprite = new Image();
     imgSprite.src = "images/sprite.png";
     imgSprite.addEventListener("load", initGame, false);
     
     player = new Player(stageCanvasCtx, imgSprite);

  function initGame(){
    
    document.addEventListener("keydown", function(e) {checkKey(e, true);}, false);
    document.addEventListener("keyup", function(e) {checkKey(e, false);}, false);
   
    
    
    begin();
  }
  
  function begin(){
    var imgStartX = 0;
    var imgStartY = 0;
    var imgWidth = stageWidth;
    var imgHeight = stageHeight;
    var stageStartX = 0;
    var stageStartY = 0;
    
    stageCtx.drawImage(imgSprite, imgStartX, imgStartY, imgWidth, imgHeight, stageStartX, stageStartY, stageWidth, stageHeight);
    isPlaying = true;
    requestAnimFrame(loop);
  }
  
  function loop(){
    if(isPlaying) {
      update();
      draw();
      requestAnimFrame(loop);
    }
  }
  
  function update(){
    clearCanvas(stageCanvasCtx);
    player.updatePos();
  }
  
  function clearCanvas(ctx) {
    var startX = 0;
    var startY = 0;
    ctx.clearRect(startX, startY, stageWidth, stageHeight);
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