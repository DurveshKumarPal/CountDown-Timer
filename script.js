const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondEl = document.getElementById("second");

const newYear = "1 jan 2021";
function countdown()
{
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalsecond = (newYearDate - currentDate)/1000;

    const days = math.floor(totalsecond/3600/24);
    const hours = math.floor(totalsecond/3600)%24;
    const mins= math.floor(totalsecond/60)%60;
    const second = math.floor(totalsecond)%60;

    daysEl.innerHTML = days;
    daysEl.innerHTML = formatTime(hours);
    daysEl.innerHTML = formatTime(mins);
    daysEl.innerHTML = formatTime(second);

}
function formatTime(time)
{
    return time<10 ? '0${time}':time;
}

countdown();

setInterval(countdown,1000);
