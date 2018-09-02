var express = require("express");

var bodyParser = require("body-parser");

var app = express();

var port = 3000;

// this line is to make sure the file is json
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.listen(port, function(){
    console.log("The server is listening on Port:" + port);
});

app.get("/", function(req, res){
    res.send("<h1>Welcome to the home page</h1>");
});