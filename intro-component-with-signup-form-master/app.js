// Get HTML elements from DOM
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email-address");
const passwordInput = document.getElementById("password");
const submitButton = document.querySelector("button");

// set color(s) for DOM manipulation
let errorColor = "rgb(255, 122, 122)";
let successColor = "rgb(56, 204, 140)";

// regex pattern for email input value
const emailRegex =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const createErrorIcon = (input) => {
  const errorIcon = document.createElement("img");
  errorIcon.classList.add("icon-error");
  errorIcon.src = "./images/icon-error.svg";
  errorIcon.alt = "error icon";
  input.insertAdjacentElement("beforebegin", errorIcon);
};

const createErrorMessage = (input, errorMessageText) => {
  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");
  errorMessage.innerText = errorMessageText;
  input.insertAdjacentElement("afterend", errorMessage);
};

// Validate user input and handle input errors if
// empty or email format is invalid
const validateInput = (input, errorMessageText) => {
  let inputValue = input.value;
  if (!inputValue) {
    createErrorIcon(input);
    createErrorMessage(input, errorMessageText);
    input.style.border = `2px solid ${errorColor}`;
  } else {
    input.style.border = `2px solid ${successColor}`;
  }
};

const validateEmailInput = (input) => {
  let inputValue = input.value;
  if (input.type === "email" && emailRegex.test(inputValue) === false) {
    createErrorIcon(input);
    createErrorMessage(input, "Looks like this is not an email");
    input.style.border = `2px solid ${errorColor}`;
  } else {
    input.style.border = `2px solid ${successColor}`;
  }
};

submitButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  const errorIcons = document.querySelectorAll(".icon-error");
  const errorMessages = document.querySelectorAll(".error-message");
  if (errorIcons && errorMessages) {
    errorIcons.forEach((element) => element.remove());
    errorMessages.forEach((element) => element.remove());
  }
  validateInput(firstNameInput, "First Name cannot be empty");
  validateInput(lastNameInput, "Last Name cannot be empty");
  validateEmailInput(emailInput);
  validateInput(passwordInput, "Password cannot be empty");
});
