let time = 86400;
let hour= 3600
const countDownEl = document.getElementById("sale-time");

setInterval(updateDown, 1000);

function updateDown(){
    const hours= Math.floor(time/3600)
    const minutes = Math.floor(hour/60);
    let seconds = time%60;
    seconds = seconds < 10 ? "0" + seconds :seconds;
    countDownEl.innerHTML= `${hours} : ${minutes} : ${seconds}`
    time--;
    hour--;
}