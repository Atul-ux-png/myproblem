
const input=document.querySelector("input");
const buttons=document.querySelectorAll(".ad");
const change=document.querySelector("#change");
const body=document.querySelector("body");


let string="";

let arr=Array.from(buttons);
arr.forEach((button)=>{
    button.addEventListener("click",(e)=>{
       if(e.target.innerHTML==="="){
            string=eval(string);
            input.value=string

        }
        else if(e.target.innerHTML=='cl'){
            string="";
            input.value=string;

          }
          else{ 
        string+=e.target.innerHTML;
        input.value=string;}
    })

})
function randomcolor(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const automate=`rgb(${red},${green},${blue})`
    return automate;
}

change.addEventListener("click",()=>{
    const color=randomcolor();
    body.style.backgroundColor=color;
})


