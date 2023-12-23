// select elements from DOM to manipulate
const ratingCard = document.querySelector('.rating');
const confirmationCard = document.querySelector('.confirmation');
const ratingCardContainer = ratingCard.querySelector('.card-container');
const confirmationResults = document.querySelector('.confirmation-results');

const ratingBtns = document.querySelectorAll('.rating-btn');
const submitBtn = document.querySelector('.submit-btn');

let rating = null;

// Get all button elements in rating card
// for user to select a rating for submission.
ratingBtns.forEach((ratingBtn) => {
    ratingBtn.addEventListener('click', (evt) => {
        let activeBtn = document.querySelector('.active');
        if(activeBtn) {
            activeBtn.classList.remove('active');
        }

        const btn = evt.target;
        btn.classList.add('active');
        rating = btn.value;
    });
})

submitBtn.addEventListener('click', (evt) => {
    evt.preventDefault();

    // Checks if rating is null. If so, a paragraph is
    // created and added to the DOM to inform user that a
    // rating must be selected.
    
    // otherwise, add confirmation result message, hide rating
    // card and show confirmation card.
    if(!rating) {
        const warningMsg = document.createElement('p');
        warningMsg.classList.add('message-box', 'rating-message-box');
        warningMsg.innerText = "Please select a rating from 1 to 5 above. Thank you!";
        ratingCardContainer.appendChild(warningMsg);
    } else {
        confirmationResults.innerText = `You selected ${rating} out of 5`;
        ratingCard.classList.add('hidden');
        confirmationCard.classList.remove('hidden');
    }
});

