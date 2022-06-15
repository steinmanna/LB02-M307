let VALID;

const form = document.getElementById('form');
const name = document.getElementById('vorname');
const surname = document.getElementById('nachname');
const email = document.getElementById('e-mail');
const phone = document.getElementById('telefonnummer');


// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'E-Mail ist nicht korrekt');
        VALID = false;
    }
}


// Check email is valid
function checkPhone(input) {
    const re = /(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Telefonnummer ist nicht korrekt');
        VALID = false;
    }
}

// Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} wird benötigt`);
            isRequired = true;
            VALID = false;
        } else {
            showSuccess(input);
        }
    });

    return isRequired;
}

// Check input length
function checkLength(input, min, max) {
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

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function validateForm(){
    if(!checkRequired([name, surname, email, phone])){
        //Aufgabe: Validierung der Länge für Vorname (2 bis 20) und Nachname (2 bis 50)
        checkLength(name, 3, 50);
        checkLength(surname, 3, 50);
        checkEmail(email);
        checkPhone(phone);
    }
}


// Event listeners
form.addEventListener('submit', function(e) {
    VALID = true;
    e.preventDefault();

    //First validate form
    validateForm();
    if (VALID){
        alert('Vielen Dank für Ihre Anmeldung!')
    }
});