// *************************************
// GLOBAL VARIABLES
// *************************************

const nasaAPIKey = "sByYd8sUGG38uhb6ZjJf50d45fowIfERgprTWT0D"
const stockAPIKey = "9XB6ZitYyH4MKadwhBucswuHGLsBlxoPchqc2Doc"

// ***************************************
// FUNCTIONS
// ***************************************


$.ajax("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=sByYd8sUGG38uhb6ZjJf50d45fowIfERgprTWT0D")
.then((data) => {
    console.log(data)
    
})




// function fetchRoverPhotos(rover, sol) {
//     // Construct the API URL with the specified rover and sol
//     var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?sol=" + sol + "&api_key=9XB6ZitYyH4MKadwhBucswuHGLsBlxoPchqc2Doc";

//     // Make an AJAX GET request using jQuery
//     $.ajax({
//         url: url,
//         method: "GET",

//         // Handle successful response
//         success: function(response) {
//             console.log("Successfully retrieved photos:", response);
//             displayPhotos(response.photos); // Pass the retrieved photos to the displayPhotos function
//         },

//         // Handle error response
//         error: function(error) {
//             console.error("Error fetching photos:", error);
//         }
//     });
// }


// function displayPhotos(photos) {
//     // Get the HTML element where the photos will be displayed
//     var photoContainer = document.getElementById("photo-container");

//     // Clear the photo container before adding new images
//     photoContainer.innerHTML = "";

//     // Iterate through the array of photos
//     photos.forEach(function(photo) {
//         // Create an image element for each photo
//         var imageElement = document.createElement("img");

//         // Set the image source and alt text
//         imageElement.src = photo.img_src;
//         imageElement.alt = photo.camera + " image from Sol " + photo.sol;

//         // Append the image element to the photo container
//         photoContainer.appendChild(imageElement);
//     });
// }


// **************************************
// MAIN CODE
// **************************************

// fetchRoverPhotos("curiosity", 1000); // Fetch photos for Curiosity on Sol 1000
