const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('.'));
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());

app.post('/form', (request, response) => {
    response.send({
        ...request.body,
        id: 1
    });
});

app.listen(8080, () => console.log('Works...'));