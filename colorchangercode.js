/*const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body")
const h3=document.querySelector("h3")
const colors=["grey","orange","white","green"]
const color=["white","blue","green","yellow"];
buttons.forEach((button,index)=>(button.addEventListener("click",()=>{
   body.style.backgroundColor=colors[index];
   h3.style.color=color[index];

    
})))

console.log("button")*/
                

                //bodycolor changer
const home=document.querySelectorAll(".home");

const button=document.querySelectorAll(".button");
const hom=["blue","green"];
const body=document.body;
const color=["grey","orange","white","green"]
const colors=["white","blue","green","yellow"]
const h3=document.querySelector("h3");
const h1=document.querySelector("h1");
const colrs=["black","green","blue","yellow"]
button.forEach((buttons,index)=>{
   buttons.addEventListener("click",()=>{
      body.style.backgroundColor=color[index];
      h3.style.color=colors[index];
      h1.style.color=colrs[index];
   })

})


home.forEach((buttons,index)=>{
   buttons.addEventListener("click",(e)=>{
      console.log("working the home button");
      e.target.style.backgroundColor=hom[index]
   })
})