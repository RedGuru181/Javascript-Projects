let timerInterval;
let minutes = 0;
let seconds = 0;
let inputTime = 0;
let currentTime = 0;

const timerDisplay = document.querySelector('.timer');
const startBtn = document.getElementById('startbtn');
const stopBtn = document.getElementById('stopbtn');
const addThirty = document.getElementById('addthirty');
const inputField = document.getElementById('inputTime');
const resetBtn = document.getElementById('resetbtn');

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
addThirty.addEventListener('click', thirtyMinutes);

function startTimer() {
    if (!timerInterval && inputField.value.trim() !== '') {
        inputTime = parseInt(inputField.value.trim(), 10) * 60;
        currentTime = inputTime;
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}
function resetTimer() { 
    timerDisplay.textContent = "Input a new time to get started!";
} 
function thirtyMinutes() {
    currentTime += 30 * 60;
    //The timer display
    const displayMinutes = Math.floor(currentTime / 60);
        const displaySeconds = currentTime % 60;
        const formattedMinutes = displayMinutes < 10 ? '0' + displayMinutes : displayMinutes;
        const formattedSeconds = displaySeconds < 10 ? '0' + displaySeconds : displaySeconds;
    timerDisplay.textContent = formattedMinutes + ":" + formattedSeconds;
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 1000);
    }

}

function updateTimer() {
    if (currentTime > 0) {
        currentTime--;
        //the timer display
        const displayMinutes = Math.floor(currentTime / 60);
        const displaySeconds = currentTime % 60;
        const formattedMinutes = displayMinutes < 10 ? '0' + displayMinutes : displayMinutes;
        const formattedSeconds = displaySeconds < 10 ? '0' + displaySeconds : displaySeconds;
    timerDisplay.textContent = formattedMinutes + ":" + formattedSeconds;
} else {
    stopTimer();
    timerDisplay.textContent = "Laundry's done!";
}
}