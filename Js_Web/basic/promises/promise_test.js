const fs = require('fs');
const path = require('path');

function showContent(pathway) {
    return new Promise((resolve, reject) => {

        fs.readFile(pathway, function(error, content) {
            if (!error) resolve(content.toString());
            reject(error);
        })
    });
}

showContent(path.join(__dirname, 'content.txt'))
    .then((data) => console.log(data))
    .catch((error) => console.error("ERROR: ", error));