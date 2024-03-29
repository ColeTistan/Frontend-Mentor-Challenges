// Set color and regex variables
const greyColor = "rgb(146, 148, 160)";
const tomatoColor = "rgb(255, 98, 87)";
const backgroundError = "#ffe7e6";
const emailRegex =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// Retrive DOM objects from HTML
const cardForm = document.querySelector(".card-form");
const successCard = document.querySelector(".card-success");
const emailForm = document.querySelector("form");
const errorMessage = emailForm.querySelector(".label-group .error-message");
const emailInput = emailForm.querySelector("input");
const subscribeButton = emailForm.querySelector(".subscribe-button");
const dismissButton = successCard.querySelector(".dismiss-button");

// Dynamically update styling of email Input and display error message
const updateLabelGroup = (display, borderColor, textColor, backgroundColor) => {
  errorMessage.style.display = display;
  emailInput.style.border = `1px solid ${borderColor}`;
  emailInput.style.color = textColor;
  emailInput.style.background = backgroundColor;
};

// function to validate email format and print error message if invalidate
// otherwise, redirect to the success message.
const validateEmailFormat = () => {
  let emailInputValue = emailInput.value;
  if (!emailInputValue.match(emailRegex)) {
    updateLabelGroup("flex", tomatoColor, greyColor, backgroundError);
  } else {
    const emailSpan = document.querySelector("span");
    emailSpan.innerText = emailInputValue;
    cardForm.style.display = "none";
    successCard.style.display = "flex";
  }
};

// Click event to submit input and validate input
subscribeButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  validateEmailFormat();
});

// Click event to dismiss return message and return to newsletter form
dismissButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateLabelGroup(null, greyColor, "black", null);
  emailInput.value = null;
  successCard.style.display = "none";
  cardForm.style.display = "flex";
});
