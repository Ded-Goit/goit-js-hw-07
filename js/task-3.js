"use strict";
const nameInput = document.querySelector(`#name-input`); // Get the input where the name will be displayed
const nameOutput = document.querySelector(`#name-output`); // Get the span where the name will be displayed
// Add a listener for the "input" event (when the user enters text)
nameInput.addEventListener("input", (event) => {
  const value = event.target.value.trim(); // Clean the value from extra spaces
  nameOutput.textContent = value || `Anonymous`; //If the field is empty, display "Anonymous", otherwise display the entered name
});
