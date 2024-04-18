// 1. Declare a variable name 'imageContainer' and store the html element with the id 'imageContainer'
//  - Using querySelector, store the selector #imageContainer
let imageContainer = document.querySelector(".imageContainer");

// 2. Add at least four image urls to the imageUrls array
let imageUrls = ["https://i.etsystatic.com/30972341/r/il/fda211/5461011700/il_fullxfull.5461011700_izha.jpg",
"https://i.etsystatic.com/30972341/r/il/fda211/5461011700/il_fullxfull.5461011700_izha.jpg",
"https://i.etsystatic.com/30972341/r/il/fda211/5461011700/il_fullxfull.5461011700_izha.jpg",
"https://i.etsystatic.com/30972341/r/il/fda211/5461011700/il_fullxfull.5461011700_izha.jpg"];

// 3. Selecting the imageUrls array, create a forEach loop.
imageUrls.forEach(function(imageUrls) {
let imageContainer = document.createElement("img");
img.src = imageUrls;
imageContainer.appendChild(img);
});

// In side the body of the loop:
//  - Create an image element and store it in a variable named 'image'
//  - Update the src of the image element to equal the function parameter (the array element)
//  - Append the image to the image container.
