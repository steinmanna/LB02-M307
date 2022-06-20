function showError(id, message) {
    return `${id}: ${message}`;
}

function showSuccess(id) {
    return `${id} Erfolgreich validiert!`;
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

function checkRequired(id, input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (input.trim() === '') {
        result = {
            isNotValid: true,
            msg: showError(id, `${input.toString()} wird benötigt`)

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
            `${id} muss mindestens ${min} Zeichen haben`)
        }
    } else if (input.length > max) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} kann maximal ${max} Zeichen haben`)
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
