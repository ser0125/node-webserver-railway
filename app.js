require('dotenv').config();
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'));

app.set('view engine', 'hbs');

app.get('/', ((req, res) => {
    res.render('home', {
        nombre: 'Sergio Andres Llanos',
        titulo: 'Curso de node'
    })
}));

app.get('/generic', ((req, res) => {
    res.render('generic', {
        nombre: 'Sergio Andres Llanos',
        titulo: 'Curso de node'
    })
}));

app.get('/navbar', ((req, res) => {
    res.render('navbar', {
        nombre: 'Sergio Andres Llanos',
        titulo: 'Curso de node'
    })
}));

app.get('/elements', ((req, res) => {
    res.render('elements', {
        nombre: 'Sergio Andres Llanos',
        titulo: 'Curso de node'
    })
}));
app.listen(port);