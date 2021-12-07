const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/:stringToBePrinted', (req, res) => {
    var a = req.params.stringToBePrinted;
    res.send(a);
});

app.listen(port, () => { console.log('Our App Is Up And Running!'); });
module.exports = app