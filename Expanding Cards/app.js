var card=document.querySelectorAll('.eachflex');
console.log(card);
card.forEach(items=>{
    items.addEventListener('click',flexfunc);
})

function flexfunc(){
    removeactive();
    this.classList.add('active');
}
function removeactive(){
    card.forEach(items=>{
        items.classList.remove('active');
    })
}