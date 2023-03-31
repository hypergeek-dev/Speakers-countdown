var start = document.getElementById('start');
var pause = document.getElementById('pause');
var reset = document.getElementById('reset');
var mute = document.getElementById('mute'); // new mute button
var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");
var startTimer = null;
var isTimerRunning = false;
var lastInputH = 0;
var lastInputM = 0;
var lastInputS = 0;
var isSoundOn = true; // new variable for mute button

start.addEventListener('click', function() {
  lastInputH = h.value;
  lastInputM = m.value;
  lastInputS = s.value;

  if (!isTimerRunning) {
    startInterval();
    isTimerRunning = true;
  }
});

pause.addEventListener('click', function() {
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

  var message = document.getElementById('message');
  message.innerHTML = "";
});

mute.addEventListener('click', function() { // new event listener for mute button
  isSoundOn = !isSoundOn;
});

function startInterval() {
  startTimer = setInterval(function() {
    timer();
  }, 1000);
}

function stopInterval() {
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
    var message = document.getElementById('message');
    message.innerHTML = "<h2>There is 1 minute left </h2><br> <span>Time to wind down your speech</span>";
    
    if (isSoundOn) { // check if the sound is on
      var audio = new Audio('./assets/audio/notification.mp3');
      audio.play();
    }
  }
  return;
}
