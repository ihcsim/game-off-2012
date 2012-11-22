test("Timer - Can create time", function() {
  var countDownDurationInMs = 30000;
  var timer = initTimer(countDownDurationInMs);
  ok(timer != null, "Fail to create timer");
});

test("Timer - Decrement count down value by 1 sec", function() {
  var countDownDurationInMs = 30000;
  var timer = initTimer(countDownDurationInMs);
  timer.decrementCountDown();
  ok(timer.countDown() == 29000, "Count down value should be 29 secs left");
});

test("Timer - Decrement count down value by 2 secs", function() {
  var countDownDurationInMs = 30000;
  var timer = initTimer(countDownDurationInMs);
  timer.decrementCountDown();
  timer.decrementCountDown();
  ok(timer.countDown() == 28000, "Count down value should be 28 secs left");
});
