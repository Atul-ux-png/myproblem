const number=document.querySelector("#number");

//when ask in interview it can run every moment ans= set interval
setInterval(()=>{
    let  date=new Date();
    number.innerHTML=date.toLocaleTimeString();
    

}
,1000)