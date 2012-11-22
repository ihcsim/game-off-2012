Timer = function(countDownDurationInMs){
  var DECREMENT_INTERVAL =  1000;
  var countDownRemainder = countDownDurationInMs;
  
  this.decrementCountDown = function(){
    countDownRemainder -= DECREMENT_INTERVAL;
  };
  
  this.countDown = function(){
    return countDownRemainder;
  };
};