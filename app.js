const time = document.querySelector('.time');
let minutes;
let seconds;
const audio = new Audio();
audio.src = 'the_field_of_dreams.mp3';
function reduceTime() {
    const splitTime = time.textContent.split(':');
    minutes = parseInt(splitTime[0]);
    seconds = parseInt(splitTime[1]);

    if (seconds === 0 && minutes > 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
        if (seconds < 0) {
            audio.play();
            clearInterval(timeReduction);
            return;
        }
    }

    time.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    splitTime[0] = minutes;
    splitTime[1] = seconds;
}

const start = document.querySelector('.start');

let timeReduction;
start.addEventListener('click', function () {
    timeReduction = setInterval(reduceTime, 1000);
});

const pause = document.querySelector('.pause');

pause.addEventListener('click', function () {
    time.textContent = `${minutes}:${seconds}`;
    clearInterval(timeReduction);
})

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    time.textContent = '25:00';
    clearInterval(timeReduction);
})

