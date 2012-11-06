var stage = $("#stage");
var stageCtx = stage[0].getContext("2d");

function calculateCenterCoordinate(position, dimension){
  return position + (dimension / 2);
}

function generateRandomCoordinate(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}