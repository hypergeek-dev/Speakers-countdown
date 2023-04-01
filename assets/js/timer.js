document.getElementById('start');
var pause = document.getElementById('pause');
var reset = document.getElementById('reset');
var mute = document.getElementById('mute');
var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");
var startTimer = null;
var isTimerRunning = false;
var lastInputH = 0;
var lastInputM = 0;
var lastInputS = 0;
var isSoundOn = true;

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

mute.addEventListener('click', function() {
  isSoundOn = !isSoundOn;
  
  var icon = mute.querySelector('i'); // get the icon element
  icon.classList.toggle('fa-volume-up'); // toggle the icon class
  icon.classList.toggle('fa-volume-mute');
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

    // Play notification sound
    if (isSoundOn) {
      var audio = new Audio('./assets/audio/timeisup.mp3');
      audio.play();
    }

    // Show message
    var message = document.getElementById('message');
    message.innerHTML = "<h2>Time is up!</h2>";
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
    
    if (isSoundOn) {
      var audio = new Audio('./assets/audio/1-min.mp3');
      audio.play();
    }
  }
}
