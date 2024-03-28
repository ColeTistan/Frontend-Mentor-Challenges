const emailInput = document.querySelector(".email-input");
const submitButton = document.querySelector("button");
const errorIcon = document.querySelector(".error-icon");
const errorMessage = document.querySelector(".error-message");

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

submitButton.addEventListener("click", () => {
  let emailInputText = emailInput.value;
  if (!emailInputText.match(emailRegex)) {
    emailInput.style.border = "1px solid rgb(249, 98, 98)";
    errorIcon.style.display = "block";
    errorMessage.style.display = "flex";
  } else {
    emailInput.style.border = "1px solid rgb(93, 242, 51)";
    setTimeout(() => {
      alert("Successfully signed up!");
    }, 10);
  }
});
