var SCORE_PER_KILL = 200;
var totalScore = 0;
var scoreDOM = $("#score");

function incrementScore(){
  totalScore += SCORE_PER_KILL;
  scoreDOM.text(totalScore);
}

function viewTotalScore(){
  return totalScore;
}

function resetTotalScore(){
  totalScore = 0;
}