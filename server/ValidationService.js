const validateLib = require('./ValidationLib');

function validateUser(userObj) {

    let result = validateLib.checkRequired("vorname", userObj.vorname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("anrede", userObj.anrede);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("nachname", userObj.nachname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("telefonnummer", userObj.telefonnummer);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("kreuz", userObj.kreuz);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("einverstaendnis", userObj.einverstaendnis);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("sprachauswahl", userObj.sprachauswahl);
    if (result.isNotValid) { return result; }


    result = validateLib.checkLength("vorname", userObj.vorname, 2, 20);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("nachname", userObj.nachname, 2, 50);
    if (result.isNotValid) { return result; }

    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkNumber("telefonnummer", userObj.telefonnummer);
    if (result.isNotValid) { return result; }

    return false;
}

module.exports = {
    validateUser
};
