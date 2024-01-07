const inputSection = document.querySelector(".input-section");
const emailInput = inputSection.querySelector(".email-input");
const notificationBtn = document.getElementById("notification-btn");
const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

let validationMsg = document.querySelector(".validation-msg");

const removeValidationClasses = (validationBorder, validationStatus) => {
  if (emailInput.classList.contains(validationBorder)) {
    emailInput.classList.remove(validationBorder);
    validationMsg.classList.remove(validationStatus);
  }
};

notificationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let userInput = emailInput.value.toString();
  if (userInput.match(regex)) {
    removeValidationClasses("border-error", "error");
    emailInput.classList.add("border-success");
    validationMsg.innerText = "Valid email address entered!";
    validationMsg.classList.add("success");
  } else {
    removeValidationClasses("border-success", "success");
    emailInput.classList.add("border-error");
    validationMsg.innerText = "Please provide a valid email address";
    validationMsg.classList.add("error");
  }
});
