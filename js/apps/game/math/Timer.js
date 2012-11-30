Timer = function(countDownDurationInMs){
  var DECREMENT_INTERVAL =  1000;
  var countDownRemainder = countDownDurationInMs;
  
  var thisTimer = this;
  setInterval(function() {thisTimer.decrementCountDown();}, DECREMENT_INTERVAL);
  this.decrementCountDown = function(){
    countDownRemainder -= DECREMENT_INTERVAL;
  };
  
  this.countDown = function(){
    return countDownRemainder;
  };
};