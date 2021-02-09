const api_key='';
const Api_Url=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}`;
const img_path='https://image.tmdb.org/t/p/w1280';
const search_url=`https://api.themoviedb.org/3/search/movie?api_key=${api_key} &query=`;

var form=document.querySelector(".form");
var search=document.querySelector(".search");
var main=document.querySelector(".main");

form.addEventListener('submit',onsubmit);

call(Api_Url);


function onsubmit(event){
    event.preventDefault();
    var searchvalue=search.value;

    if(searchvalue!==''){
        call(search_url+searchvalue);
        search.value='';
    }
    //need to add reload as per traversy media

}
function call(url){
    fetch(url)
    .then(response=>response.json())
    .then(json=>{
        data(json.results);
    })
}
function data(Data){
    main.innerHTML='';
    Data.forEach(item=>{
       const{title,poster_path,vote_average,overview,id} =item;
       var moviediv=document.createElement('div');//change to const
       moviediv.classList.add('moviewrapper');
       moviediv.innerHTML=`
       <a href="detail.html?#########rtddrrdr#%%%%%%%=${id}" target="_blank" class="link"></a>
       <img src="${img_path+poster_path}" alt="${title}" class="movieimg">
       <div class="moviedesc">
           <h3>${title}</h3>
           <span class="rate">${vote_average}</span>
       </div>
       <div class="movieoverview">
           ${overview}
       </div>`;
       
       main.appendChild(moviediv);

    })
}

