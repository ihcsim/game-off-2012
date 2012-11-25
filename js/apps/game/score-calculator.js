var SCORE_PER_KILL = 200;
var totalScore = 0;
var scoreDOM = $("#score");

function incrementScore(){
  totalScore += SCORE_PER_KILL;
  updateScoreBox_ScoreValue(totalScore);
}

function viewTotalScore(){
  return totalScore;
}

function resetTotalScore(){
  totalScore = 0;
}