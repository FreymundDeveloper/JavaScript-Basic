const express = require('express');
const app = express();

const callSomething = require('./mid');

app.use(callSomething('Midd Call'));

app.get('/send', (req, res, next) => {
    console.log('Next Call')
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