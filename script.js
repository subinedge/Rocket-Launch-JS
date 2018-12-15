var timer = null;
var countDownReducer = 10;

var changeState = function(state) {
  document.body.className = 'body-state' + state; // changing the class of body

  clearInterval(timer);
  countDownReducer = 10;
  document.getElementById('countDown').innerHTML = countDownReducer;

  if (state == 2) {
    // start timer on state 2
    timer = setInterval(function() {
      countDownReducer--;
      document.getElementById('countDown').textContent = countDownReducer;

      if (countDownReducer <= 0) {
        changeState(3);
      }
    }, 300);
  } else if (state == 3) {
    var success = setTimeout(function() {
      var randomNumber = Math.round(Math.random() * 10);
      console.log(randomNumber);
      if (randomNumber > 5) {
        changeState(4);
      } else {
        changeState(5);
      }
    }, 2000);
  }
};
