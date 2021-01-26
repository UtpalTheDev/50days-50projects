var open=document.querySelector(".bar");
var close=document.querySelector(".close");
var cont=document.querySelector(".rotatingcont");
open.addEventListener('click',()=>{
   cont.classList.add("showrotate"); 
});
close.addEventListener('click',()=>{
    cont.classList.remove("showrotate");
})