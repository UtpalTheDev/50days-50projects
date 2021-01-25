circle=document.querySelectorAll('.eachprogress');
progressbar=document.querySelector('.progressbar');
next=document.querySelector('.next');
prev=document.querySelector('.prev');

var activevar=1;

next.addEventListener('click',nextstep);
prev.addEventListener('click',prevstep);

function nextstep(){
    activevar++;
    if(activevar>circle.length){
        activevar=circle.length;
    }
    update();
}
function update(){
    circle.forEach((item,index)=>{
        if(index<activevar){
        item.classList.add('active');}
        else{
            item.classList.remove('active');
        }
    })
    var activebar=document.querySelectorAll('.active');
    progressbar.style.width=(activebar.length-1)/(circle.length-1)*100+'%';

    if(activevar===1){
        prev.disabled=true;
    }
    else if(activevar===circle.length){
        next.disabled=true;
    }
    else{
        prev.disabled=false;
        next.disabled=false;
    }
}
function prevstep(){
    activevar--;
    if(activevar<1){
        activevar=1;
    }
    update();
}