const bodyParser = require('body-parser')
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const UserRepository = require('./UserRepository');
const port = process.env.PORT || 3000;
const Validation = require('./ValidationService');
const staticPath = './data/';
const registrationFile = staticPath+'registration.json';
const HTTP_STATUS_NO_ACCEPTABLE = 406;

//Get request
app.get('/form', (req,res) => {
    res.send(`Get wurde erfolgreich aufgerufen!`);
});

//Post request
app.post('/form', (req,res) => {
    console.log(req.body)
    let userObj = {
        "anrede": req.body.anrede,
        "vorname": req.body.vorname,
        "nachname": req.body.nachname,
        "email": req.body.email,
        "telefonnummer": req.body.telefonnummer,
        "kreuz": req.body.kreuz,
        "einverstaendnis": req.body.einverstaendnis,
        "sprachauswahl": req.body.sprachauswahl
    };
    let result = Validation.validateUser(userObj);
    if (result.isNotValid) {
        res.status(HTTP_STATUS_NO_ACCEPTABLE).send(result.msg);
    } else {
        let userRepo = new UserRepository(registrationFile);
        userRepo.read()
            .then((data) => {
                //log data for analysis
                console.log(userObj);
                data.push(userObj);
                return data;
            })
            .then(data => userRepo.save(data))
            .catch(error => {
                console.error(error);
            });
        res.status(201).send(`User ${userObj.nachname} inserted!`);
    }
});

app.listen(port)