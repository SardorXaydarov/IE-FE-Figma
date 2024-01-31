const minusTwo = document.querySelector('.minusTwo'),
    numberTwo = document.querySelector('.numberTwo'),
    plusTwo = document.querySelector('.plusTwo');

let a = 1;
plusTwo.addEventListener("click", ()=>{
    a++;
    numberTwo.innerText= a;
})
minusTwo.addEventListener("click", ()=>{
    if(a>1){
        a--;
        numberTwo.innerText=a;
    }
})

const minusThree = document.querySelector('.minusThree'),
    numberThree = document.querySelector('.numberThree'),
    plusThree = document.querySelector('.plusThree');

let c = 1;
plusThree.addEventListener("click", ()=>{
    c++;
    numberThree.innerText= c;
})
minusThree.addEventListener("click", ()=>{
    if(c>1){
        c--;
        numberThree.innerText=c;
    }
})

const minusFour = document.querySelector('.minusFour'),
    numberFour = document.querySelector('.numberFour'),
    plusFour = document.querySelector('.plusFour');

let d = 1;
plusFour.addEventListener("click", ()=>{
    d++;
    numberFour.innerText= d;
})
minusFour.addEventListener("click", ()=>{
    if(d>1){
        d--;
        numberFour.innerText=d;
    }
})