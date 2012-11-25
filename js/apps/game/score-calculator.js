var SCORE_PER_KILL = 200;
var totalScore = 0;
function calculateScore(killCount){
  console.log("Total kills: " + killCount);
}

function incrementScore(){
  totalScore += SCORE_PER_KILL;
}

function viewTotalScore(){
  return totalScore;
}

function resetTotalScore(){
  totalScore = 0;
}