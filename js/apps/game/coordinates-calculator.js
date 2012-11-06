var stage = $("#stage");
var stageCtx = stage[0].getContext("2d");

function calculateCenterCoordinate(position, dimension){
  return position + (dimension / 2);
}