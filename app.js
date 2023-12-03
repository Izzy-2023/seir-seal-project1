// *************************************
// GLOBAL VARIABLES
// *************************************

const apikey = "sByYd8sUGG38uhb6ZjJf50d45fowIfERgprTWT0D"
const baseURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000"

// ***************************************
// FUNCTIONS
// ***************************************

function fetchRoverPhotos(rover, sol) {
    // Construct the API URL with the specified rover and sol
    const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?sol=" + sol + "&api_key=sByYd8sUGG38uhb6ZjJf50d45fowIfERgprTWT0D";

    // Make an AJAX GET request using jQuery
    $.ajax({
        url: url,
        method: "GET",

        // Handle successful response
        success: function(response) {
            console.log("Successfully retrieved photos:", response);
            renderPhotos(response.photos); // Render the retrieved photos
        },

        // Handle error response
        error: function(error) {
            console.error("Error fetching photos:", error);
            alert("Error fetching photos: " + error.message); // Display an error message to the user
        }
    });
}

function renderPhotos(photos) {
    // Clear the carousel inner container
    document.querySelector("#photo-container .carousel-inner").innerHTML = "";
  
    // Set a fixed height for the carousel image
    const imageHeight = 400; // Adjust this value as needed
  
    // Iterate through the photos
    photos.forEach(function(photo) {
      // Create a carousel item
      const carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item");
  
      // Create an image element and set its source and alt text
      const imageElement = document.createElement("img");
      imageElement.src = photo.img_src;
      imageElement.alt = photo.camera + " image from Sol " + photo.sol;
      imageElement.style.height = imageHeight + "px"; // Set the fixed image height
  
      // Add the image to the carousel item
      carouselItem.appendChild(imageElement);
  
      // Add the carousel item to the carousel inner container
      document.querySelector("#photo-container .carousel-inner").appendChild(carouselItem);
    });
  
    // Set the first carousel item as active
    document.querySelector("#photo-container .carousel-item").classList.add("active");

    $("#photo-container").carousel()

  }

$.ajax("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=sByYd8sUGG38uhb6ZjJf50d45fowIfERgprTWT0D")
.then((data) => {
    console.log(data)
    console.log(data.photos[0].img_src)
    console.log(data.photos[5].img_src)
    
})



// function to handle the form submission
function handleSubmit(event){
    // prevent the refreshing of the page from the form submission
    event.preventDefault()
    // grab the form from the event
    const form = event.target
    console.log(form)
    // create a formData to access the form data
    const formData = new FormData(form)
    // grab the movie title
    const marsRover = formData.get("photo")
    console.log(marsRover)
    // fetch the specified movie
    getMovie(marsRover)
}



function fetchRoverPhotos(rover, sol) {
    // Construct the API URL with the specified rover and sol
    var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?sol=" + sol + "&api_key=sByYd8sUGG38uhb6ZjJf50d45fowIfERgprTWT0D";

    // Make an AJAX GET request using jQuery
    $.ajax({
        url: url,
        method: "GET",

        // Handle successful response
        success: function(response) {
            console.log("Successfully retrieved photos:", response);
            displayPhotos(response.photos); // Pass the retrieved photos to the displayPhotos function
        },

        // Handle error response
        error: function(error) {
            console.error("Error fetching photos:", error);
        }
    });
}





// **************************************
// MAIN CODE
// **************************************
// add the function to the form submission
document.querySelector("form").addEventListener("submit", handleSubmit)
// initial call to populate the first movie
fetchRoverPhotos("curiosity", 1000); // Fetch photos for Curiosity on Sol 1000
