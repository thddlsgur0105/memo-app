const jsClockContainer = document.querySelector("#jsClockContainer")
const jsClockTime = jsClockContainer ? jsClockContainer.querySelector("#jsClockTime") : null;

function clockPaint() {
    const date = new Date();
    const [ currentHours, currentMinutes, currentSeconds ] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    jsClockTime.innerHTML = `${currentHours < 10 ? `0${currentHours}` : currentHours}:${currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}:${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;
}

if (jsClockContainer) {
    setInterval(clockPaint, 100);
}