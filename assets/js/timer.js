
const hourInput = document.getElementById("hour");
const minuteInput = document.getElementById("minute");
const muteButton = document.getElementById("mute");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const secondInput = document.getElementById("sec");
const startButton = document.getElementById("start");

let audio = new Audio("./assets/audio/1-min.mp3");
let icon = muteButton.querySelector("i"); // get the icon element

let isSoundOn = true;
let isTimerRunning = false;
let lastInputHour = 0;
let lastInputMinute = 0;
let lastInputSecond = 0;
let message = document.getElementById("message");
let startTimer = null;

startButton.addEventListener("click", function () {
  // Check if timer is already at 0:0:0
  if (hourInput.value === "0" && minuteInput.value === "0" &&
    secondInput.value === "0") {
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

pauseButton.addEventListener("click", function () {
  if (isTimerRunning) {
    stopInterval();
    isTimerRunning = false;
  }
});

resetButton.addEventListener("click", function () {
  hourInput.value = lastInputHour;
  minuteInput.value = lastInputMinute;
  secondInput.value = lastInputSecond;

  stopInterval();
  isTimerRunning = false;

  message.innerHTML = "";
});

muteButton.addEventListener("click", function () {
  isSoundOn = !isSoundOn;

  icon.classList.toggle("fa-volume-up"); // toggle the icon class
  icon.classList.toggle("fa-volume-mute");
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
  if (hourInput.value === "0" && minuteInput.value === "0" &&
    secondInput.value === "0") {
    hourInput.value = "0";
    minuteInput.value = "0";
    secondInput.value = "0";
    stopInterval();
    isTimerRunning = false;

    // Play notification sound
    if (isSoundOn) {
      audio.play();
    }

    // Show message

    message.innerHTML = "<h2>Time is up!</h2>";
  } else if (secondInput.value !== "0") {
    secondInput.value -= 1;
  } else if (minuteInput.value !== "0" && secondInput.value === "0") {
    secondInput.value = 59;
    minuteInput.value -= 1;
  } else if (hourInput.value !== "0" && minuteInput.value === "0") {
    minuteInput.value = 59;
    hourInput.value--;
  }

  if (minuteInput.value === "1" && secondInput.value === "0") {
    message.innerHTML = "<h2>There is 1 minute left </h2><br>" +
      "<span>Time to wind down your speech</span>";

    if (isSoundOn) {

      audio.play();
    }
  }
}
