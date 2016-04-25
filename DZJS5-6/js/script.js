var score = 0;
var start = document.getElementById('start');
var clear = document.getElementById('clear');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var underseconds = document.getElementById('underseconds');
var scoreSeconds = 0;
var scoreMinutes = 0;
var scoreHours = 0;
var timerId;
start.innerHTML = 'Start';
clear.innerHTML = 'Clear';

function timer() {
    underseconds.innerHTML = score;
    if (scoreHours < 10) {
        hours.innerHTML = '0' + scoreHours;
    } else {
        hours.innerHTML = scoreHours;
    }
    if (scoreMinutes < 10) {
        minutes.innerHTML = '0' + scoreMinutes;
    } else {
        minutes.innerHTML = scoreMinutes;
    }
    if (scoreSeconds < 10) {
        seconds.innerHTML = '0' + scoreSeconds;
    } else {
        seconds.innerHTML = scoreSeconds;
    }
    if (score === 5) {
        score = 0;
        scoreSeconds++;
    }
    if (scoreSeconds === 6) {
        scoreSeconds = 0;
        scoreMinutes++;
    }
    if (scoreMinutes === 6) {
        scoreMinutes = 0;
        scoreHours++;
    }
    score++;
    if (scoreHours === 24) {
        clearInterval(timerId);// Сброс таймера
    }
}
start.onclick = function startTimer() {
    if (start.innerHTML === 'Pause') {
        clearInterval(timerId);// Сброс таймера
        start.innerHTML = 'Cont..';
        start.setAttribute('id', 'cont');
    } else {
        timerId = setInterval(timer, 1);//Запуск таймера
        start.innerHTML = 'Pause';
        start.setAttribute('id', 'pause');
    }
};
clear.onclick = function clearTimer() {
    clearInterval(timerId);// Сброс таймера
    hours.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    underseconds.innerHTML = '0';
    start.innerHTML = 'Start';
    start.setAttribute('id', 'start');
};
