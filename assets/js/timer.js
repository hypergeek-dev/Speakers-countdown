var start = document.getElementById('start');
var pause = document.getElementById('pause'); // new pause button
var reset = document.getElementById('reset');
var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");
var startTimer = null;
var isTimerRunning = false;
var lastInputH = 0;
var lastInputM = 0;
var lastInputS = 0;

start.addEventListener('click', function() {
  lastInputH = h.value;
  lastInputM = m.value;
  lastInputS = s.value;

  if (!isTimerRunning) {
    startInterval();
    isTimerRunning = true;
  }
});

pause.addEventListener('click', function() { // new event listener for pause button
  if (isTimerRunning) {
    stopInterval();
    isTimerRunning = false;
  }
});

reset.addEventListener('click', function() {
  h.value = lastInputH;
  m.value = lastInputM;
  s.value = lastInputS;

  stopInterval();
  isTimerRunning = false;

  // Clear the message
  var message = document.getElementById('message');
  message.innerHTML = "";
});

function startInterval() {
  startTimer = setInterval(function() {
    timer();
  }, 1000);
}

function stopInterval() { // new function to stop the interval
  clearInterval(startTimer);
}

function timer() {
  if (h.value == 0 && m.value == 0 && s.value == 0) {
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopInterval();
    isTimerRunning = false;
  } else if (s.value != 0) {
    s.value--;
  } else if (m.value != 0 && s.value == 0) {
    s.value = 59;
    m.value--;
  } else if (h.value != 0 && m.value == 0) {
    m.value = 60;
    h.value--;
  }

  if (m.value == 1 && s.value == 0) {
    // Display the text when there is 1 minute left
    var message = document.getElementById('message');
    message.innerHTML = "<h2>There is 1 minute left </h2><br> <span>Time to wind down your speech</span>";

    // Play the audio file
    var audio = new Audio('./assets/audio/notification.mp3');
    audio.play();
  }
  return;
}
