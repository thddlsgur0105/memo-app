import { Btn } from "./btn";

class Clock {
    constructor() {
        this.jsClockContainer = document.querySelector("#jsClockContainer")
        this.jsClockTime = this.jsClockContainer ? this.jsClockContainer.querySelector("#jsClockTime") : null;
        if (this.jsClockContainer) {
            setInterval(this.clockPaint, 100);

            // Btn Styling
            new Btn(this.jsClockTime)
        }
    }
    clockPaint = () => {
        const date = new Date();
        const [ currentHours, currentMinutes, currentSeconds ] = [date.getHours(), date.getMinutes(), date.getSeconds()];
        this.jsClockTime.innerHTML = `${currentHours < 10 ? `0${currentHours}` : currentHours}:${currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}:${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;
    }
}

new Clock;