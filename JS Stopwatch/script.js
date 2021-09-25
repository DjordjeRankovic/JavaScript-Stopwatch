let minutes = 0;
let seconds = 0;
let tens = 0;
let appendMinutes = document.getElementById("minutes");
let appendSeconds = document.getElementById("seconds");
let appendTens = document.getElementById("tens");
let buttonStart = document.getElementById("btn-start");
let buttonStop = document.getElementById("btn-stop");
let buttonReset = document.getElementById("btn-reset");
let interval;

function StartTimer() {
    tens++;
    
    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }
}

buttonStart.onclick = function () {
    interval = setInterval(StartTimer, 10);
};

buttonStop.onclick = function () {
    clearInterval(interval);
}

buttonReset.onclick = function () {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
}