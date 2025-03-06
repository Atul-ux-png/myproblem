//const weight= parseInt(document.querySelector("#weight").value) 
//this will give us empty value because our java script load and we nee the value when we click

const form=document.querySelector("form")
form.addEventListener("submit",function(e){
    e.preventDefault();
 const height= parseInt(document.querySelector("#name").value) 
 const weight= parseInt(document.querySelector("#nam").value)
 const result= document.querySelector("#result")
 if( height<=0 || isNaN(height)){
   result.innerHTML=`please give a valid height ${height}`}
 
 else if(weight<=0 || isNaN(weight)){ 
    result.innerHTML=`please give a valid  weight ${weight};`
   
}
else{
   const bmi= (weight/((height*height)/10000).toFixed(2));
   result.innerHTML=bmi;
if(bmi<18.5){
     result.innerHTML += "underweight";
      
   }
   else{
      result.innerHTML += "overweight";
   }

}
 
})