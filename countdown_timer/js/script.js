const opening = "1 Jan 2024";
const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hour");
const minutesE1 = document.getElementById("min");
const secondsE1 = document.getElementById("sec")

function countdown() {
    const openingDate = new Date(opening);
    const currentDate = new Date();

    const totalseconds = ((openingDate - currentDate) / 1000);

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor((totalseconds / 3600) % 24);
    const minutes = Math.floor((totalseconds / 60) % 60);
    const seconds = Math.floor((totalseconds) % 60);
    // console.log(days);
    // console.log(openingDate - currentDate);
    // console.log(seconds);

    daysE1.innerHTML = days
    hoursE1.innerHTML = formatTime(hours)
    minutesE1.innerHTML = formatTime(minutes)
    secondsE1.innerHTML = formatTime(seconds)
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000) 