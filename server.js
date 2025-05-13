var express = require('express');
var routerHandler = require("./routerHandler");
var app = express();

app.get('/message', routerHandler); // Use app.get to handle the /message route

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(8080, () => {
    console.log("Running on port 8080");
});

function routerHandler(req, res) {
  res.send("Cortana 2.2!");
}

module.exports = routerHandler;
