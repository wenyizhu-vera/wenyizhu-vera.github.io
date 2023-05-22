// Conatact Me Page
// Get the image elements by their IDs
var image1 = document.getElementById('pic1');
var image2 = document.getElementById('pic2');
var image3 = document.getElementById('pic3');

// Create Howl instances based on the image source
var sound1 = createSound(image1.src);
var sound2 = createSound(image2.src);
var sound3 = createSound(image3.src);

// Add click event listener to each image
image1.addEventListener('click', function () {
    sound1.play();
});

image2.addEventListener('click', function () {
    sound2.play();
});

image3.addEventListener('click', function () {
    sound3.play();
});

// Helper function to create a Howl instance based on an image source
function createSound(imageSrc) {
    // Extract the file name from the image source and append it to the music directory
    var fileName = imageSrc.split('/').pop().split('.')[0];
    var soundSrc = 'music/' + fileName + '.mp3';

    return new Howl({
        src: [soundSrc]
    });
}

