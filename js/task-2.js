"use strict";
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];
const galleryList = document.querySelector(".gallery"); // Get the <ul class="gallery"> element from the page
// Use the map() method to create an array of <li> elements
const galleryItems = images.map((image) => {
  const listItem = document.createElement(`li`); // Create a new <li> for each image
  const imageElement = document.createElement(`img`); // Create a new <img> element
  imageElement.src = image.url; // Add a link to the image to the src attribute
  imageElement.alt = image.alt; // Add alternative text (image description) to the alt attribute
  imageElement.width = 360; // Add a value for the property width
  imageElement.height = 300; // Add a value for the property height
  listItem.appendChild(imageElement); // Add <img> inside the <li>
  return listItem; // Return the finished <li> with the <img> nested in the array
});
galleryList.append(...galleryItems); // Add all <li> in <ul class="gallery"> with one call append
