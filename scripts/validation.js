let VALID;

const form = document.getElementById('form');
const gender = document.getElementById('anrede');
const name = document.getElementById('vorname');
const surname = document.getElementById('nachname');
const email = document.getElementById('email');
const phone = document.getElementById('telefonnummer');
const nachrichten = document.getElementById('kreuz');
const emails = document.getElementById('einverstaendnis');
const sprache = document.getElementById('sprachauswahl');


function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'E-Mail ist nicht korrekt');
        VALID = false;
    }
}


function checkPhone(input) {
    const re = /(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Telefonnummer ist nicht korrekt');
        VALID = false;
    }
}

function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
        if(input.type === 'checkbox') {
            if (!input.checked) {
                showError(input, `Ihr Einverständnis wird benötigt`);
                isRequired = true;
                VALID = false;
            } else {
                showSuccess(input);
            }
        } else {
            if (input.value.trim() === '') {
                showError(input, `${getFieldName(input)} wird benötigt`);
                isRequired = true;
                VALID = false;
            } else {
                showSuccess(input);
            }
        }

    });

    return isRequired;
}

function checkLength(input, min, max) {
    console.log(getFieldName(input) + ": " + input.value );
    if (input.value.length < min) {
        showError(input,
            `${getFieldName(input)} muss mindestens ${min} Buchstaben beinhalten`
        );
    } else if (input.value.length > max) {
        showError(input,
            `${getFieldName(input)} es dürfen maximal ${max} Buchstaben beinhalten`
        );
    } else {
        showSuccess(input);
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function validateForm(){
    if(!checkRequired([name])) {
        checkLength(name, 3, 50);
    }
    if(!checkRequired([surname])) {
        checkLength(surname, 3, 50);
    }
    if(!checkRequired([email])) {
        checkEmail(email);
    }
    if(!checkRequired([phone])) {
        checkPhone(phone);
    }
    checkRequired([gender, nachrichten, emails, sprache]);
}


form.addEventListener('submit', function(e) {
    VALID = true;
    e.preventDefault();

    validateForm();
    if (VALID){
        alert('Vielen Dank für Ihre Anmeldung!')
    }
});