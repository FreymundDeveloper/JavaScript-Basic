module.exports = (app, text) => {
    function save(req, res) {
        res.send('Product > save > ' + text);
    }

    function take(req, res) {
        res.send('Product > take > ' + text);
    }

    app.post('/product', save);
    app.get('/product', take);

    return { save, take }
}