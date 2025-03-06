let randomNumber=parseInt(Math.random()*100+1)
const submit=document.querySelector("#subt");
const userInput=document.querySelector("#guessField");
const guessSlot=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const loworhi=document.querySelector(".loaorhi");
const startOver=document.querySelector('.resultParas');

let prevguess=[];//it can show the number what user can already guess
let numGuess=1;//number of guess you can done;


let playgame=true;// it can allow to play game when your chance is complete from start;
if(playgame){
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        const guess=(userInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess)//it can check whether user guess is number or not if number it is negative or positive;
{if(isNaN(guess)){
    alert("Giyan hai aap number bola tha gadhe")}
    else if(guess<1){
        alert("larger number likh bidu");
    }
    else if(guess>100){
        alert("andha hai kya bhai bola hai 1 to 100 ")
    }
    else{
        prevguess.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`Game over.Random number was${randomNumber}`)
            endgame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    
}
}


function checkGuess(guess)//it can print the message after the your number is validate
{if(guess===randomNumber){
    displayMessage(`Your guess is right`)
    endgame()
}else if(guess<randomNumber){
    displayMessage(`Number is tooo low`)
}else if(guess>randomNumber){
    displayMessage(`Number is to high`)
}

}

function displayGuess(message){
    userInput.value='';
    guessSlot.innerHTML +=`${guess}   `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
    //it can directly interact with dom

}

function displayMessage(message){
    loworhi.innerHTML=`<h2>${message}</h2>`;
}

function newgame(){
    const newgamebutton =document.querySelector('#newGame');

newgamebutton.addEventListener("click",function(e){
    randomNumber=parseInt(Math.random()*100+1);
    prevguess=[]// dut to this our game is reset
    numGuess=1;
    guessslot.innerHTML='';
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.remiveChild(p);
    playGame=true;


})}
function endgame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    playgame.classList.add("button");
    playgame.innerHTML=`<h3 id="newGame"></h3>`;
    startOver.appendChild(p);
    playgame=false;
    newgame();
    
}