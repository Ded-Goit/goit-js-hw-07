"use strict";
//Function to generate a random color.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls"); //Control container
const input = controls.querySelector("input"); //Input field
const createBtn = controls.querySelector("button[data-create]"); //"Create" button
const destroyBtn = controls.querySelector("button[data-destroy]"); //"Destroy" button
const boxesContainer = document.querySelector("#boxes"); //Container for boxes

function createBoxes(amount) {
  const boxesFragment = document.createDocumentFragment(); //Fragment for optimal addition of elements
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.border = `1px solid #ffffff;`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.boxShadow =
      "8px 8px 18px 5px rgba(255, 255, 255, 0.2) , -8px -8px 18px 5px rgba(0, 0, 0, 0.5)";
    boxesFragment.appendChild(box);
  }
  boxesContainer.innerHTML = ""; //Remove previous elements before adding
  boxesContainer.appendChild(boxesFragment); //Add all elements to the container in one call
}

function destroyBoxes() {
  boxesContainer.innerHTML = ""; //Clear the container
}
//listeners buttons
createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ""; //Clear the input field
  }
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
