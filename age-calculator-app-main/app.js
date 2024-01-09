// Get HTML tags being used for DOM manipulation
const resultSection = document.querySelector(".results-section");
const userInputs = document.querySelectorAll("input");
const submitButton = document.querySelector("button");

// Get user input tags
dayInput = userInputs[0];
monthInput = userInputs[1];
yearInput = userInputs[2];

// Get result tags
let years = resultSection.querySelector("#years span");
let months = resultSection.querySelector("#months span");
let days = resultSection.querySelector("#days span");

// create new Date instance
const dateObj = new Date();
let currDate = dateObj.getDate();
let currMonth = dateObj.getMonth();
let currYear = dateObj.getFullYear();

submitButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  years.innerText = yearInput.value;
  months.innerText = monthInput.value;
  days.innerText = dayInput.value;
});


