const img_path='https://image.tmdb.org/t/p/w1280';
const search_url='https://api.themoviedb.org/3/search/movie?api_key= =';

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

function


