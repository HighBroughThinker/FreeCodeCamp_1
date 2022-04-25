var express = require('express');
var app = express();
var absolutePath = __dirname + "/views/index.html";

// console.log("Hello World");

// app.get('/', (req, res) => {
//     res.send('Hello Express');
// });

// app.get('/', (req, res) => {
//     res.sendFile(absolutePath);
// });

// app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
    const mySecret = process.env['MESSAGE_STYLE']
    res.json(process.env.MESSAGE_STYLE=="uppercase" ? {"message": "HELLO JSON"}: {"message": "Hello json"})
    });
    




























 module.exports = app;
