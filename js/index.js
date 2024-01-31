

const minus = document.querySelector('.minus'),
    number = document.querySelector('.number'),
    plus = document.querySelector('.plus');

let a = 1;
plus.addEventListener("click", ()=>{
    a++;
    number.innerText= a;
})
minus.addEventListener("click", ()=>{
    if(a>1){
        a--;
        number.innerText=a;
    }
})

