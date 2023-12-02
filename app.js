// *************************************
// 
// *************************************
// API Key: sByYd8sUGG38uhb6ZjJf50d45fowIfERgprTWT0D
$.ajax("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=sByYd8sUGG38uhb6ZjJf50d45fowIfERgprTWT0D")
.then((data) => {
    console.log(data)
    console.log(data.photos[0].id)
})