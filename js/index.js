let time = 86400;
let hour = 3600
const countDownEl = document.getElementById("sale-time");

setInterval(updateDown, 1000);

function updateDown() {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor(hour / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDownEl.innerHTML = `${hours} : ${minutes} : ${seconds}`
    time--;
    hour--;
}


const minus = document.querySelector('.minus'),
    number = document.querySelector('.number'),
    plus = document.querySelector('.plus');

let a = 1;
plus.addEventListener('click', ()=>{
    a++;
    number.innerText= a;
})
minus.addEventListener("click", ()=>{
    if(a>1){
        a--;
        number.innerText=a;
    }
})