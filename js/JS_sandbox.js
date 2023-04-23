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
    //Define the coordinate
    var latLng = [41.789649, -87.599702];

    //set attribution and access key URL
    var mbAttr = 'Map data &copy; <a href=" ">OpenStreetMap</a > contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a >',
        mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmVsaXh3aW4iLCJhIjoiY2xnOTMwMDU4MTM1dzNncXJwNGtua29iNSJ9.273VFcJdLUfewc1gBWvhRQ';

    //Define two tile layer variables
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

    //Define map object
    var map = L.map('map', {
        center: latLng,
        zoom: 16,
        layers: [streets]
    });

    //Add tile layers to base layer project
    //Add to the map
    //Add a marker with pop-up

    var baseLayers = {
        "Grayscale": grayscale,
        "Streets": streets
    };

    L.control.layers(baseLayers).addTo(map);
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

// ===========This is week 4 wiki API exercise!!===========
function wikiAPI() {
// Define your varables
    // create an XHR object
    // Define base URL API and insert searchTerm variable

    var searchTerm = document.getElementById('searchTerm').value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;

// Open the API call
    // Use XHR.open to get a file from the API.
    connect.open('GET', url);

// Define actions that will happen when the response is returned, parse and display the data
    // Load and parse the response as a JSON data obejct
    // Console.log the data object to see what you got as a response
    // locate the branch of the project that is of interest
    // Loop thru the branch and output the wiki pages to the HTML page

    connect.onload = function() {
        var wikiObject = JSON.parse(this.response);
        // console.log(wikiObject);
        // console.log(wikiObject.query.pages);
        var pages = wikiObject.query.pages;
        for (var i in pages) {
        // basic function
            /* var newDiv = document.createElement("div");
            newDiv.setAttribute('class', 'row h4');
            document.getElementById("wiki").appendChild(newDiv);
            newDiv.innerText = pages[i].title; */

            // super challenge
            var pageURL = "https://en.wikipedia.org/?curid="
            var newAnchor = document.createElement("a");
            newAnchor.href = pageURL + pages[i].pageid; //setAttribute('href', pageURL+pages[i].pageid)
            newAnchor.className = 'd-block'; //setAttribute('class', 'd-block);
            newAnchor.innerText = pages[i].title;
            document.getElementById("wiki").appendChild(newAnchor);
        };
    }

// Send the API request to the server
    connect.send();

}

// click on button to activate page
function openWikiWindow() {
    // Open a new window using the window.open() method
    var WikiWindow = window.open("sb_wikiapi.html");
}


// ===========This is week 4 parseArray exercise!!===========  
function parseArray() {
    let inputStr = prompt("Enter comma-separated array:");
    let arr = inputStr.split(",").map(str => str.trim());
    arr.sort();
    return arr;

}

function sortedArray() {
    let sortedArray = parseArray();
    alert("Sorted array: " + sortedArray.join(", "));
}

// ===========This is week 5 XML exercise!!===========  
function openOchreWindow() {
    // Open a new window using the window.open() method
    var OchreWindow = window.open("sb_xml.html");
}