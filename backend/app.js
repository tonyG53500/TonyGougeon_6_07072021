const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('requête recue!');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({ message: 'requete bien reçue !!!'});
    next();
});

app.use((req, res) => {
    console.log('Réponse recue avec succès !');
});

module.exports = app;