const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function clockUpdates(){
    let hr = new Date().getHours();
    let mins = new Date().getMinutes();
    let secs = new Date().getSeconds();
    let ampm = "AM";

    if (hr > 12)
    {
        hr -= 12;
        ampm = "PM";
    }

    hr = (hr < 10) ? "0" + hr : hr;
    mins = (mins < 10) ? "0" + mins : mins;
    secs = (secs < 10) ? "0" + secs : secs;

    hourEl.innerText = hr;
    minuteEl.innerText = mins;
    secondsEl.innerText = secs;
    ampmEl, (innerText = ampm); setTimeout(()=>{
        clockUpdates()
    }, 1000)
}
clockUpdates();