"use strict";
const loginForm = document.querySelector(`.login-form`); // Get the login form
// Add the "submit" event handler
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload
  const { email, password } = event.target.elements; //Get input fields through destructuring
  const emailValue = email.value.trim(); // Remove spaces
  const passwordValue = password.value.trim(); //Remove spaces
  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in"); //Check if all fields are filled in
    return; //Stop the function
  }
  console.log({ email: emailValue, password: passwordValue }); //Output the object with the data to the console
  loginForm.reset(); //Clear the form after submission
});
