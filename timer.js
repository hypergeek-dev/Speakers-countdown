var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

var startTimer = null;
var isTimerRunning = false;
var lastInputH = 0;
var lastInputM = 0;
var lastInputS = 0;

start.addEventListener('click', function(){
    lastInputH = h.value;
    lastInputM = m.value;
    lastInputS = s.value;

    if (!isTimerRunning) {
        startInterval();
        isTimerRunning = true;
    }
})

reset.addEventListener('click', function(){
    h.value = lastInputH;
    m.value = lastInputM;
    s.value = lastInputS;

    stopInterval()
    isTimerRunning = false;

    // Clear the message
    var message = document.getElementById('message');
    message.innerHTML = "";
})

function startInterval(){
    startTimer = setInterval(function() {
        timer();
    }, 1000);
}

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
        stopInterval();
        isTimerRunning = false;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;


    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
  
             if (m.value == 1 && s.value == 0) {
            // Display the text when there is 1 minute left
            var message = document.getElementById('message');
            message.innerHTML = "1 minute left - Time to wind down your share";
        }
    return;
}

function stopInterval() {
    clearInterval(startTimer);
}
