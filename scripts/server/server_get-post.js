const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port);

//Get request
app.get('form/vorname', (req,res) => {
    res.send(`Die Anfrage für den Vornamen noch nicht implementiert!`);
});

//Post request
app.post('form/vorname', (req,res) => {
    res.send("Die Anfrage für den Vornamen noch nicht implementiert!");
});