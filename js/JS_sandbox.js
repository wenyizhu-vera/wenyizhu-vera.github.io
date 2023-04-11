// ===========This is week 3 button function exercise!!===========
function greetUser() {
    var userName = prompt("Please enter your name:");

    if (userName) {
        var greeting = "Hello, " + userName + "!";
        document.getElementById("greetingMessage").innerHTML = greeting;
    }
}

function evalNumber(){
    var inputValue = prompt("Enter any five-digit number without commas");

    if (isNaN(inputValue)) {
        alert(inputValue + " is not a number.");
    } else if (inputValue.length !== 5) {
        alert(inputValue + " is not a five-digit number.");
    } else {
        var numberValue = Number(inputValue);
        if (numberValue % 2 == 0) {
            alert(inputValue + " is an even number.");
        } else {
            alert(inputValue + " is an odd number.");
        }
    }
}

function changeTitle(){
    let seletedElement = document.getElementById("sandbox");
    console.log(seletedElement);
    seletedElement.innerText = "It's Changed!";
}

function hideElement() {
    var element = document.getElementById("my-element");
    element.style.display = "none";
}

function displaytMinute() {
    var currentMinute = new Date().getMinutes();

    var divElement = document.getElementById("time");
    divElement.innerText = "The current minute is " + currentMinute;
}


// ===========This is week 4 map API exercise!!===========
function mapLoad() {
    //Define the lat lon coordinate
    var latLng = [41.789649, -87.599702];

    // set attribution and access key URl
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    
        // L(leaflet method) Define two tile layer variables
    var grayscale = L.tileLayer(mbUrl, {
        id: 'mapbox/light-v9',
        tileSize: 512,
        zoomOffset: -1,
        attribution: mbAttr
    }),
        streets = L.tileLayer(mbUrl, {
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            attribution: mbAttr
        });
       
        // Define map object
    var map = L.map('map', {
        center: latLng,
        zoom: 16, 
        // 16 is nice neighborhood level zoom
        layers: [streets]
    });
    // Add title layers to base layer object
    var baseLayers = {
        "Grayscale": grayscale,
        "Streets": streets
    };
    // Add to the map
    L.control.layers(baseLayers).addTo(map);
    // Add a marker with pop-up
    L.marker(latLng).addTo(map)
        .bindPopup("<b>UChicago<br>Campus</b>").openPopup();

    //Add a nifty click event
    var popup = L.popup();
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    map.on('click', onMapClick);

}

// click on button to activate page
function openMapWindow() {
    // Open a new window using the window.open() method
    var mapWindow = window.open("sb_mapapi.html");
}


// ===========This is week 4 appendHTML exercise!!===========
function addElements() {
    var valueArray = ['Pink Floyd', 'Joy Division', 'The Kinks'];
    var imgArray = ['images/pink-floyd.jpg', 'images/joy-division.jpeg', 'images/the-kinks.jpg'];

    for (let i in valueArray) {
        // new div for each band
        var bandDiv = document.createElement('div');

        // new image element and its attributes
        var newImg = document.createElement('img');
        newImg.setAttribute('src', imgArray[i]);
        newImg.setAttribute('id', 'img' + i);

        // new paragraph element for the caption
        var caption = document.createElement('p');
        caption.innerText = valueArray[i];

        // Append the image and caption to the band div
        bandDiv.appendChild(newImg);
        bandDiv.appendChild(caption);

        // Append the band div to the parent element
        document.getElementById('addElements').appendChild(bandDiv);
    }

}

// click on button to activate page
function openbandWindow() {
    // Open a new window using the window.open() method
    var bandWindow = window.open("sb_bandimg.html");
}