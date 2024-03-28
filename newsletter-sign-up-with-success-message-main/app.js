// Set color and regex variables
const tomatoColor = "rgb(255, 98, 87)";
const backgroundError = "#ffe7e6";
const emailRegex =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// Retrive DOM objects from HTML
const emailForm = document.querySelector("form");
const errorMessage = emailForm.querySelector(".label-group .error-message");
const emailInput = emailForm.querySelector("input");
const submitButton = emailForm.querySelector("button");

// Dynamically update styling of email Input and display error message
const updateLabelGroup = () => {
  errorMessage.style.display = "block";
  emailInput.style.border = `1px solid ${tomatoColor}`;
  emailInput.style.color = tomatoColor;
  emailInput.style.background = backgroundError;
};

// function to validate email format and print error message if invalidate
// otherwise, redirect to the success message.
const validateEmailFormat = () => {
  let emailInputValue = emailInput.value;
  if (!emailInputValue.match(emailRegex)) {
    updateLabelGroup();
  } else {
    alert("valid email address entered...");
  }
};

// Click event to submit input and validate input
submitButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  validateEmailFormat();
});
