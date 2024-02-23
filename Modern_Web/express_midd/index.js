const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const callSomething = require('./mid');
app.use(callSomething('Midd Call'));

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Modulation Content
const userApi = require('./api/user');
require('./api/product')(app, 'With param');

app.post('/user', userApi.save);
app.get('/user', userApi.take);

// Parms Content
app.get('/clients/return', (req, res) => {
    res.send(`Query is ${req.query.test}`);
});

app.get('/clients/:id', (req, res) => {
    res.send(`Param is ${req.params.id}`);
});

// Body Content
app.post('/body', (req, res) => {
    let body = '';

    req.on('data', function(part) {
        body += part;
    });

    req.on('end', function() {
        res.send(body);
    });
});

app.post('/bodyparse', (req, res) => {
    res.send(JSON.stringify(req.body));
});

// Midd and Basic Content
app.get('/send', (req, res, next) => {
    console.log('Next Call');
    next();
});

app.use('/json', (req, res, next) => {
    res.json({
        data: [
            {id: 1, name: "TestOne"},
            {id: 2, name: "TestTwo"}
        ],
        limit: 10
    });
    next();
});

app.use('/send', (req, res) => {
    res.send("works!");
});

app.listen(3001, () => {
    console.log("Backend is running!");
});