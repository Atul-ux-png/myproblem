const input=document.querySelector("#inp");
const button=document.querySelector("button");
const list=document.querySelector(".list");



button.addEventListener("click",()=>{
    console.log(input.value);
    if(input.value === ""){
        alert("giyan hai app.kuche likho devta box me")
    }
    else {
        const newli=document.createElement("ul");
        
        newli.innerHTML=`${input.value} <button class="ist">remove</button> `;
        list.appendChild(newli);
        input.value="";
        newli.querySelector(".ist").addEventListener("click",()=>{
        newli.remove();
        
            function edit(){
                const button=document.createElement("button");
               button. classList.add("edit");
                button.innerText="edit";
            newli.append(button);
            
            const edit=document.querySelector(".edit");
            edit.addEventListener("click",()=>{
                const inpt=prompt("enter new value");
                if(inpt !==null){
                    newli.innerText=inpt;
                    
                }
                edit();
            })
        }

        })
    
    
    }  

})

const rbg=document.createElement("button");
const body=document.querySelector("body");
body.append(rbg);
rbg.innerText="click";

function change(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const ret=`rgb(${red},${green},${blue})`
    return ret;
}

rbg.addEventListener("click",()=>{
    
   body.style.backgroundColor=change();
    
   
})






