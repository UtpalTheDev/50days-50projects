const img_path='https://image.tmdb.org/t/p/w1280';
const api='';


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
const external_url=`https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${api}`;

console.log(search_url);
call(search_url);

function call(search_url){
    fetch(search_url)
    .then(response=>response.json())
    .then(json=>{
        console.log(json);
    })
    .catch(errorhandle)
       
}
externalid(external_url);

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
        
}
function errorhandle(){
    console.log('error');
}


