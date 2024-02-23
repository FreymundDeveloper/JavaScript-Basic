const express = require('express');
const app = express();

app.use('/json', (req, res) => {
    res.json({
        data: [
            {id: 1, name: "TestOne"},
            {id: 2, name: "TestTwo"}
        ],
        limit: 10
    })
})

app.use('/send', (req, res) => {
    res.send("works!")
})

app.listen(3001, () => {
    console.log("Backend is running!");
});