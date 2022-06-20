function showError(id, message) {
    return `${id}: ${message}`;
}

function showSuccess(id) {
    return `${id} successfully validate!`;
}

function checkEmail(id,input) {
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'E-Mail ist nicht gültig')
        }
    }
    return result;
}


function checkNumber(id,input) {
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/;
        if (re.test(input.trim())) {

            result = {
            isNotValid: true,
            msg: showError(id, 'Telefonnummer ist nicht gültig')
        }
    }
    return result;
}

function checkLastname(id,input) {
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^[a-zA-Z]+$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Nachname ist nicht gültig')
        }
    }
    return result;
}


function checkFirstname(id,input) {
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^0(2[1-246-7]|3[1-4]|4[13-4]|5[25-6]|6[1-2]|7[15-68-9]|8[17]|91)[0-9]{7}/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Vorname ist nicht gültig')
        }
    }
    return result;
}

function checkRequired(id, input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (input.trim() === '') {
        result = {
            isNotValid: true,
            msg: showError(id, `${input.toString()} is required`)

        }
    }
    return result;
}

function checkLength(id, input, min, max) {
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (input.length < min) {
        result = {
            isNotValid: true,
            msg: showError(id,
            `${id} must be at least ${min} characters`)
        }
    } else if (input.length > max) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} must be less than ${max} characters`)
        }
    }
    return result;
}


module.exports = {
    checkEmail,
    checkNumber,
    checkLength,
    checkRequired
};
