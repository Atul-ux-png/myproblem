const button=document.querySelector("button");
const input=document.querySelector("#input")
const lis=document.querySelector(".list")


button.addEventListener("click",()=>{
   
    if(input.value===""){
        alert("nothing  writen in  input box");
    }   
    else{
        
        const li=document.createElement("li");
        const p=document.createElement("p");
        const delt=document.createElement("button");
        delt.innerText="X";
        const editbtn=document.createElement("button");
        editbtn.innerText="edit";
        delt.classList.add("delete")
        editbtn.classList.add("edit");

       
        
        li.append(p);
        li.append(delt);
        li.append(editbtn)
        p.textContent=input.value
        
        input.value="";
        lis.append(li);
    
    
        delt.addEventListener("click",()=>{
        li.remove()
        })
       
       editbtn.addEventListener("click",()=>{
        
        const newtext=prompt("enter new name");
        if(newtext !==null && newtext.trim() !==""){
            p.textContent=newtext;

        }
    
         

       })

    }

    

})
