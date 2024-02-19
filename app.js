const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get ('/', (req,res) => {
    res.send ('Seeking truths beyond meaming of live, you will find 43')
})

app.listen(PORT,() => {
    console.log(`Serveriä ajetaan osoitteessa http://localhost:${PORT}`)
})