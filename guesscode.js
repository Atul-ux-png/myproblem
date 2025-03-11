const guess=document.querySelector("input");
const playagain=document.querySelector(".restart");
const guessbt=document.querySelector("#subtn");
function random(number){
    number=Math.floor(Math.random()*100)+1;
    return number;

}

let num=random();
guessbt.addEventListener("click",()=>{
    let userguess=parseInt(guess.value)
    if(isNaN(userguess)){
        alert("please enter a number");
    }
    else{
        if(userguess===num){
            alert("you are the chmap");
        }else{
            alert(`${num}`)
        }
    }

})

playagain.addEventListener("click",()=>{
    num="";
    guess.value="";
    num=random();
    alert("game will restart")

})