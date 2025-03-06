const inputBox=document.getElementById('inputBox');
const addbtn=document.getElementById("add");
const todolist=document.getElementById("todolist");


const addTodo=addEventListener("click",()=>{
    const inputText=inputBox;

    if(inputText.length==0){
        alert("box me kuch too likho");
        return false;
    }
    else{  

    const li=document.createElement("li");
    const p=document.createElement("p");
    p.innerHtml=inputText;
    li.appendChild(p);
    todolist.appendChild(li);
    inputBox="";}
    console.log("input")
})
console.log("ntpc")