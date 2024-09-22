const goBackBtn = document.getElementById('goBackBtn');
const nextStepBtn = document.getElementById('nextStepBtn');
const confirmButton = document.getElementById('confirmButton');
const allNumbers = document.querySelectorAll('.form-left-text-number');
const allForms = document.querySelectorAll('.step-form');
let counter = 0;


// GO BACK

goBackBtn.addEventListener('click', () => {
    allNumbers[counter].classList.remove('active-number');
    allForms[counter].classList.remove('active-form');
    counter = counter - 1;
    allNumbers[counter].classList.add('active-number');
    allForms[counter].classList.add('active-form');
    confirmButton.disabled = true;
    nextStepBtn.disabled = false;

    if (counter === 0) {
        goBackBtn.disabled = true;
    };
});

// NEXT BUTTON

nextStepBtn.addEventListener('click', () => {
    allNumbers[counter].classList.remove('active-number');
    allForms[counter].classList.remove('active-form');
    counter++;
    allNumbers[counter].classList.add('active-number');
    allForms[counter].classList.add('active-form');
    goBackBtn.disabled = false;

    if (counter === 3) {
        nextStepBtn.disabled = true;
        confirmButton.disabled = false;
    };
});