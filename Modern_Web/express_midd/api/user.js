function save(req, res) {
    res.send('User > save');
}

function take(req, res) {
    res.send('User > take');
}

module.exports = { save, take }