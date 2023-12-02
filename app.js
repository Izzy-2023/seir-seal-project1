// *************************************
// GLOBAL VARIABLES
// *************************************

const nasaAPIKey = "sByYd8sUGG38uhb6ZjJf50d45fowIfERgprTWT0D"
const stockAPIKey = "9XB6ZitYyH4MKadwhBucswuHGLsBlxoPchqc2Doc"

// ***************************************
// FUNCTIONS
// ***************************************

// API Key: sByYd8sUGG38uhb6ZjJf50d45fowIfERgprTWT0D
$.ajax("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=sByYd8sUGG38uhb6ZjJf50d45fowIfERgprTWT0D")
.then((data) => {
    console.log(data)
    console.log(data.photos[0].img_src)
})

$.ajax("https://api.stockdata.org/v1/news/stats/intraday?group_by=symbol&sort=sentiment_avg&sort_order=desc&published_on=2023-12-01&")
.then((data) => {
    console.log(data)
    
})

var requestOptions = {
    method: 'GET'
};

var params = {
    api_token: '9XB6ZitYyH4MKadwhBucswuHGLsBlxoPchqc2Doc',
    symbols: 'msft,fb',
    limit: '50'
};

var esc = encodeURIComponent;
var query = Object.keys(params)
    .map(function(k) {return esc(k) + '=' + esc(params[k]);})
    .join('&');

fetch("https://api.stockdata.org/v1/news/all?" + query, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// **************************************
// MAIN CODE
// **************************************