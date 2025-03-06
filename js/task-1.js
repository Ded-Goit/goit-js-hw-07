"use strict";
const categoriesList = document.querySelector("#categories"); // Get the <ul>
const categoriesItems = categoriesList.querySelectorAll(".item"); //Find all <li class="item">
console.log(`Number of categories: ${categoriesItems.length}`); //Output the number of categories
categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent; //Get the <h2> header text
  const categoryElements = item.querySelectorAll("ul li").length; //Count nested <li>
  console.log(`Category: ${categoryTitle}`); //Output the name of the category
  console.log(`Elements: ${categoryElements}`); //Output the number of elements in the category
});
