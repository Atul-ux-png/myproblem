function random(){
    const number=parseInt(Math.floor(Math.random()*99)+1);
    console.log(number);
    return number;
}

const buttons=document.querySelector("button");
buttons.addEventListener("click",()=>{

   const user= parseInt(document.querySelector("#names").value);
   const str=parseInt(document.querySelector("#str").value);
      
      str.innerHTML=random();
    
    
    
    
    if(user===str){
        
        const result=parseInt(document.querySelector("#res").value);
       
        result.innerHTML=`your guess is correct `;
    
    }
    else {
    result.innerHTML=`you are incorrect guess `;
        
    } 
})   

       
      

    


