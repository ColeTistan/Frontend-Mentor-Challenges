const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    const plusIcon = btn.querySelector(".plus");
    const minusIcon = btn.querySelector(".minus");
    const answer = btn.parentElement.querySelector(".answer");

    plusIcon.classList.toggle("hidden");
    minusIcon.classList.toggle("hidden");
    answer.classList.toggle("hidden");
  });
});
