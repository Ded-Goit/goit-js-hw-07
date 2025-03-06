"use strict";
//Function to generate a random color.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorButton = document.querySelector(`.change-color`); //Get the button.
const colorText = document.querySelector(`.color`); //Get the <span> once so as not to call querySelector in the function.
//Add a click event.
changeColorButton.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color; //Change the background.
  colorText.textContent = color; //Update the color value.
});
