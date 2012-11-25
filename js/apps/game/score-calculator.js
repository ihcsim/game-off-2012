var SCORE_PER_KILL = 200;
var totalScore = 0;

function incrementScore(){
  totalScore += SCORE_PER_KILL;
}

function viewTotalScore(){
  return totalScore;
}

function resetTotalScore(){
  totalScore = 0;
}