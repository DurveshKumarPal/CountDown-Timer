const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondEl = document.getElementById("second");

const newYear = "1 jan 2023";
function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalsecond = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalsecond / 3600 / 24);
    const hours = Math.floor(totalsecond / 3600) % 24;
    const mins = Math.floor(totalsecond / 60) % 60;
    const second = Math.floor(totalsecond) % 60;

    console.log(days);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondEl.innerHTML = formatTime(second);

}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
