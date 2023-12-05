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
            // Display an error message to the user
            alert("Error fetching photos: " + error.message); 
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
      // Set the fixed image height
      imageElement.style.height = imageHeight + "px"; 
  
      // Add the image to the carousel item
      carouselItem.appendChild(imageElement);
  
      // Add the carousel item to the carousel inner container
      document.querySelector("#photo-container .carousel-inner").appendChild(carouselItem);
    });
  
    // Set the first carousel item as active
    document.querySelector("#photo-container .carousel-item").classList.add("active");
    
    // Invoke the carousel function
    $("#photo-container").carousel()

  }

  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the selected rover and sol values from the form
   const rover = document.getElementById("rover").value;
    const sol = parseInt(document.getElementById("sol").value);

    // Make the AJAX request to fetch photos
    fetchRoverPhotos(rover, sol);
}


// **************************************
// MAIN CODE
// **************************************

// Attach the form submission handler to the form's submit event
document.getElementById("rover-form").addEventListener("submit", handleFormSubmit);
