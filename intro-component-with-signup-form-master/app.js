// Get HTML elements from DOM
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
const errorIcons = form.querySelectorAll(".icon-error");
const errorMessages = form.querySelectorAll(".error-message");
const successMessage = form.querySelector(".success-message");
const submitButton = form.querySelector("button");

// set color(s) for DOM manipulation
let errorColor = "rgb(255, 122, 122)";
let successColor = "rgb(56, 204, 140)";

// Validate user input and handle input errors if
// empty or email format is invalid
const validateInput = (index) => {
  let input = inputs[index];
  if (!input.value) {
    errorIcons[index].style.display = "block";
    errorMessages[index].style.display = "block";
    input.style.border = `2px solid ${errorColor}`;
  } else {
    input.style.border = `2px solid ${successColor}`;
  }
};
const validateForm = () => {
  validateInput(3);
  //   for (let i = 0; i <= inputGroups.length; i++) {
  //     console.log(inputGroups[i]);
  //   }
};

submitButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  validateForm();
});
