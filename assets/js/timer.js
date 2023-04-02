const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const muteButton = document.getElementById('mute');
const hourInput = document.getElementById("hour");
const minuteInput = document.getElementById("minute");
const secondInput = document.getElementById("sec");

let startTimer = null;
let isTimerRunning = false;
let lastInputHour = 0;
let lastInputMinute = 0;
let lastInputSecond = 0;
let isSoundOn = true;

startButton.addEventListener('click', function () {
  // Check if timer is already at 0:0:0
  if (hourInput.value === 0 && minuteInput.value === 0 &&
    secondInput.value === 0) {
    return;
  }

  lastInputHour = hourInput.value;
  lastInputMinute = minuteInput.value;
  lastInputSecond = secondInput.value;

  if (!isTimerRunning) {
    startInterval();
    isTimerRunning = true;
  }
});

pauseButton.addEventListener('click', function () {
  if (isTimerRunning) {
    stopInterval();
    isTimerRunning = false;
  }
});

resetButton.addEventListener('click', function () {
  hourInput.value = lastInputHour;
  minuteInput.value = lastInputMinute;
  secondInput.value = lastInputSecond;

  stopInterval();
  isTimerRunning = false;

  let message = document.getElementById('message');
  message.innerHTML = "";
});

muteButton.addEventListener('click', function () {
  isSoundOn = !isSoundOn;

  let icon = muteButton.querySelector('i'); // get the icon element
  icon.classList.toggle('fa-volume-up'); // toggle the icon class
  icon.classList.toggle('fa-volume-mute');
});

function startInterval() {
  startTimer = setInterval(function () {
    timer();
  }, 1000);
}

function stopInterval() {
  clearInterval(startTimer);
}

function timer() {
  if (hourInput.value === 0 && minuteInput.value === 0 && secondInput.value === 0) {
    hourInput.value = 0;
    minuteInput.value = 0;
    secondInput.value = 0;
    stopInterval();
    isTimerRunning = false;

    // Play notification sound
    if (isSoundOn) {
      let audio = new Audio('./assets/audio/timeisup.mp3');
      audio.play();
    }

    // Show message
    let message = document.getElementById('message');
    message.innerHTML = "<h2>Time is up!</h2>";
  } else if (secondInput.value !== 0) {
    secondInput.value--;
  } else if (minuteInput.value !== 0 && secondInput.value == 0) {
    secondInput.value = 59;
    minuteInput.value--;
  } else if (hourInput.value !== 0 && minuteInput.value == 0) {
    minuteInput.value = 60;
    hourInput.value--;
  }

  if (minuteInput.value == 1 && secondInput.value == 0) {
    let message = document.getElementById('message');
    message.innerHTML = "<h2>There is 1 minute left </h2><br> <span>Time to wind down your speech</span>";

    if (isSoundOn) {
      var audio = new Audio('./assets/audio/1-min.mp3');
      audio.play();
    }
  }
}
