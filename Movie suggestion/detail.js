const img_path='https://image.tmdb.org/t/p/w';
const api='';

var poster=document.querySelector(".poster");
var title=document.querySelector(".title");
var genre=document.querySelector(".genre");
var releasedate=document.querySelector(".releasedate");

var cont2=document.querySelector(".container-2");
var castdiv=document.querySelector(".castdiv");
var overview=document.querySelector(".overview");
var similarmovie=document.querySelector(".similarmovie");
var reviewdiv=document.querySelector(".review");

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
       var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var id = getParameterByName('#########rtddrrdr#%%%%%%%');
const search_url=`https://api.themoviedb.org/3/movie/${id}?api_key=${api}`;

//const external_url=`https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${api}`;

console.log(search_url);
call(search_url);

function call(search_url){
    fetch(search_url)
    .then(response=>response.json())
    .then(json=>{
        settitle(json.title);
        setposter(img_path+'500'+json.poster_path);
        setgenre(json.genres);
        setdate(json.release_date);
        setvideo();
        setoverview(json.overview);
    })
    .catch(errorhandle)
       
}
similar();
function similar(){
    const similar_url=`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api}&language=en-US&page=1`;
    fetch(similar_url)
    .then(response=>response.json())
    .then(json=>{
        var data=json.results;
        for(var i=0;i<6;i++){
            const {id,poster_path,title}=data[i];
            var div=document.createElement('div');
            div.classList.add('similardiv');
            div.innerHTML=`<a href="detail.html?#########rtddrrdr#%%%%%%%=${id}" target="_blank" class="link"></a><img src='${img_path}200${poster_path}' class='similarimg'>`;
            similarmovie.appendChild(div);
        }
    })
}

function settitle(gettitle){
 title.innerHTML=gettitle;
}
function setposter(getposter){
    
    poster.innerHTML=`<img src='${getposter}' class="posterimg">`;
}
function setgenre(setgenre){
    setgenre.forEach(item=>{
       const {name}=item;
       var div=document.createElement('div');
       div.classList.add('genrediv');
       div.innerHTML=`${name}`;
       genre.appendChild(div);

    })
}
function setdate(date){
    releasedate.innerHTML=`${date}`;
}
function setvideo(){
    const video_url=`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api}&language=en-US`
    fetch(video_url)
    .then(response=>response.json())
    .then(json=>{
        console.log(json);
        (json.results).forEach(item=>{
            var {key}=item;
            var div=document.createElement('div');
            div.innerHTML=`<iframe class='iframe' height="200" width="400"
            src='https://www.youtube.com/embed/${key}'>`;
            cont2.appendChild(div);
        })
    })
  
}
function setoverview(over){
    overview.innerHTML=`${over}`;

}

//externalid(external_url);
/*
function externalid(external_url){
    fetch(external_url)
    .then(response=>response.json())
    .then(json=>{
        console.log(json);
        person(json.imdb_id);
    })
    .catch(errorhandle)
       
}

function person(imdbid){
    person_url=`https://api.themoviedb.org/3/find/${imdbid}?api_key=${api}&language=en-US&external_source=imdb_id`;
    fetch(person_url)
    .then(response=>response.json())
    .then(json=>{
        console.log(json);
        
    })
    .catch(errorhandle)
        
}*/
cast();
function cast(){
    const cast_url=`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api}`;
    fetch(cast_url)
    .then(response=>response.json())
    .then(json=>{
        (json.cast).forEach(item=>{
            var {name,profile_path,character}=item;
            if(profile_path!=null){
            var div=document.createElement('div');
            div.classList.add('cast');
            div.innerHTML=`<img src='${img_path}200${profile_path}'  class='casting'><div class='castdesc'><div class=''castname>${name}</div>`;
            castdiv.appendChild(div);
            }
        })
    })
}
review();
function review(){
    const review_url=`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${api}`;
    fetch(review_url)
    .then(response=>response.json())
    .then(json=>{
        (json.results).forEach(item=>{
            const {author,author_details,content,created_at}=item;
            var profile=author_details.avatar_path;
            var rating=author_details.rating;
            var div=document.createElement('div');
            div.classList.add('review');
            div.innerHTML=`<div class="reviewpack">
            <div class="image">
            <img src='${img_path}200${profile}'  class='avatar'>
            </div>
            <div class="revcontent">
            ${author}
            ${content}
            ${created_at}
            </div>
            </div>`;
            reviewdiv.appendChild(div);
        })
    })
}
function errorhandle(){
    console.log('error');
}


