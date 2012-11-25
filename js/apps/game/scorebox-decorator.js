var scoreDOM = $("#score");
var bulletDOM = $("#bullet");
function updateScoreBox_ScoreValue(score){
  scoreDOM.text(totalScore);
}

function updateScoreBox_BulletCount(numBullets){
  bulletDOM.empty();
  for(var index = 0; index < numBullets; index++)
    bulletDOM.append("<span class='bullet-entry'>1</span>");
}