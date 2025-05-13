var express = require('express');
var routerHandler = require("./routerHandler");
var app = express();
app.use("/message", routerHandler);
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(8080);console.log("Running on port 8080");