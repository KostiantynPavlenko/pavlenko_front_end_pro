const timer = document.querySelector('.timer');

let timerSeconds = 120;

function secondsToMinutes(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  
  if(min < 10) {
    min = '0' + min;
  }

  if (sec < 10) {
    sec = '0' + sec;
  }

  return `${min}:${sec}`;
}

function renderTimer(seconds) {
  const time = secondsToMinutes(seconds);
  timer.textContent = time;
}

renderTimer(timerSeconds);

const timerIntervalId = setInterval(() => {
  if (timerSeconds === 0) {
    clearInterval(timerIntervalId);
    renderTimer(timerSeconds);
  } else {
    timerSeconds--;
    renderTimer(timerSeconds);
  }
  
}, 1000);