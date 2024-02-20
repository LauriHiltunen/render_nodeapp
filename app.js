const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

var logger = function(req, res, next) {
    res.send ('Seeking truths beyond meaning of life, you will find 43.')
    next();
}

app.use(logger);

app.listen(PORT,() => {
    console.log(`Serveriä ajetaan osoitteessa http://localhost:${PORT}`)
})