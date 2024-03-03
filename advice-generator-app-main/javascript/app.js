const card = document.querySelector(".card");
const cardTitle = card.querySelector(".card-title");
const cardQuote = card.querySelector(".card-quote");
const button = document.querySelector(".submit-btn");

const getAdviceData = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceSlip = data.slip;
      cardTitle.innerText = `Advice #${adviceSlip.id}`;
      cardQuote.innerText = adviceSlip.advice;
    })
    .catch((error) => console.error(error));
};

console.log(button);
button.addEventListener("click", function (event) {
  event.preventDefault();
  getAdviceData();
});
