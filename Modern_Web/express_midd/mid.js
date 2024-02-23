function callSomething (param) {
    return function(req, res, next) {
        console.log(`Something where. Is a ${param}`);
        next()
    }
}

module.exports = callSomething