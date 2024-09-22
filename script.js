const goBackBtn = document.getElementById('goBackBtn');
const nextStepBtn = document.getElementById('nextStepBtn');
const confirmButton = document.getElementById('confirmButton');
const allNumbers = document.querySelectorAll('.form-left-text-number');
const allForms = document.querySelectorAll('.step-form');
let counter = 0;

// FORM ONE VARIABLES

const errorMessage = document.querySelectorAll('.erorr-message');
const nameInput = document.getElementById('nameInput');
const emailAddressInput = document.getElementById('emailAddressInput');
const phoneNumberInput = document.getElementById('phoneNumberInput');
const stepOneInputs = document.querySelectorAll('.step-one-form input');
const formOneInputs = document.querySelectorAll('.form-one-input');

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

    let errorMessageArray = [];

    for (let i = 0; i < formOneInputs.length; i++) {
        if (formOneInputs[i].value.length === 0) {
            errorMessage[i].style.display = 'unset';
            formOneInputs[i].style.border = '1px solid red';
            errorMessageArray.push(i.length);
        } else {
            errorMessage[i].style.display = 'none';
            formOneInputs[i].style.border = '1px solid hsl(231, 11%, 63%)';
        }
    };

    if (errorMessageArray.length === 0) {
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
    };
});