# Mars Lookup App
### by Izzy Zinxhirija

Deployed Site: [https://seir-seal-project1.vercel.app/]

## Description on the Project

A paragraph discussing the idea of your project, the API you are using and desired user experience.

> This website will be used to search for MARS photos by entering the name of the rover (Curiosity, Spirit, Opportunity) in the search box and clicking on the search button. The page will display pictures based on the information entered in the search box. 

## Details about the API

Give me a brief description of the API you are using and how you plan on using it. Does it use some sort of authentication like an APIkey. List some of the urls are using below.

> The API does use an APIkey authentication. I have generated an api key from the website. 

- `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&`: This returns a json object with all the photos from the curiority rover.

Sample Fetch/Ajax called:
```js
const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&"
fetch(url)
.then((res) => res.json())
.then((data) => console.log(data))
```

The Data I get back:
```json

[
  "photos": 
        {
            "id": 102693,
            "sol": 1000,
            "camera": {
                "id": 20,
                "name": "FHAZ",
                "rover_id": 5,
                "full_name": "Front Hazard Avoidance Camera"
            },
            "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
            "earth_date": "2015-05-30",
            "rover": {
                "id": 5,
                "name": "Curiosity",
                "landing_date": "2012-08-06",
                "launch_date": "2011-11-26",
                "status": "active",
                "max_sol": 4024,
                "max_date": "2023-12-01",
                "total_photos": 686932,
                "cameras": [
                    {
                        "name": "FHAZ",
                        "full_name": "Front Hazard Avoidance Camera"
                    },
                    {
                        "name": "NAVCAM",
                        "full_name": "Navigation Camera"
                    },
                    {
                        "name": "MAST",
                        "full_name": "Mast Camera"
                    },
                    {
                        "name": "CHEMCAM",
                        "full_name": "Chemistry and Camera Complex"
                    },
                    {
                        "name": "MAHLI",
                        "full_name": "Mars Hand Lens Imager"
                    },
                    {
                        "name": "MARDI",
                        "full_name": "Mars Descent Imager"
                    },
                    {
                        "name": "RHAZ",
                        "full_name": "Rear Hazard Avoidance Camera"
                    }
                ]
            }
        },
]
```

## Mockup

Here put a mix of text explanation plus a picture giving us an idea of the layout of your website.

> The mock up images below will show how the website will look like on a laptop/desktop and mobile phone. This is a simple website with a title, description, input search box and search button. Once the user enters a name of the rover in the search box and clicks on the search button, they will be presented with an image and description below the search box and search button.


#### Desktop View

![My Desktop View](https://i.imgur.com/a90dNzk.png)

#### Mobile View

![My Mobile View](https://i.imgur.com/7QNbLkY.png)

## Schedule of Work

|Day | Goal | What I accomplished |
|----|------|-----------------------|
| Sat | Create Readme, Deploy, Get Approval | |
| Sun | Build fetch of data in JS file ||
| Mon | Render data from API on screen ||
| Tues| Build form for user to interact with ||
| Wed | wrap up functionality ||
|Thurs| mobile layout styling ||
| Fri | Desktop layout styling ||
| Sat | Present Project ||