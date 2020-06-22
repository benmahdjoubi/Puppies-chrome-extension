// Create an array of file names being the images names
let filenames = [
    "anoir-chafik-2_3c4dIFYFU-unsplash.jpg",
    "camilo-fierro-z7rcwqCi77s-unsplash.jpg",
    "charles-deluvio-K4mSJ7kc0As-unsplash.jpg",
    "jay-wennington-CdK2eYhWfQ0-unsplash.jpg",
    "matt-nelson-aI3EBLvcyu4-unsplash.jpg"
];

// Get the images from a website
let imgs = document.getElementsByTagName("img");

// Iterate through the filenames array
for (let imgElet of imgs) {

    // Generate a random index
    let r = Math.floor(Math.random() * filenames.length);
    
    // Create a file from the images
    let file = "images/" + filenames[r];

    // Get the url
    let url = chrome.runtime.getURL(file);

    // Assign url to the src of image element 
    imgElet.src = url;

    console.log(url);
}