// to use the express pack
var express = require("express");
var app = express();
var mysql = require("mysql");

var path = require("path");
var port = 3000;

var methodOverride = require("method-override");
app.use(methodOverride("_method"));

var bodyParser = require("body-parser");
// this line is to make sure the file is json
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "ffinder_db"
});

app.use(express.static("public"));
// app.use(express.static(__dirname + "/public/"));

app.listen(port, function(){
    console.log("The server is listening on Port:" + port);
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/app/public/index.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.post('/submit', function(req, res){
    console.log(req.body);
    res.json(req.body);
    connection.query(
        "INSERT INTO answers () VALUES (?,?,?,?,?,?,?,?,?,?,?)",
        [
        req.body.id, 
        req.body.q1, 
        req.body.q2, 
        req.body.q3, 
        req.body.q4, 
        req.body.q5,
        req.body.q6,
        req.body.q7,
        req.body.q8,
        req.body.q9,
        req.body.q10
        ],
        "INSERT INTO users () VALUES (?,?,?)",    
        [
        req.body.id, 
        req.body.name, 
        req.body.photo
        ],
        function(err, response) {
          console.log('Deu ruim');
        }
      );
  });

app.post('/submit', function(req, res){
    console.log(req.body);
    res.json(req.body);
    connection.query(
        "INSERT INTO answers () VALUES (?,?,?,?,?,?,?,?,?,?,?)",
        [
        req.body.id, 
        req.body.q1, 
        req.body.q2, 
        req.body.q3, 
        req.body.q4, 
        req.body.q5,
        req.body.q6,
        req.body.q7,
        req.body.q8,
        req.body.q9,
        req.body.q10
        ],
        "INSERT INTO users () VALUES (?,?,?)",    
        [
        req.body.id, 
        req.body.name, 
        req.body.photo
        ],
        function(err, response) {
          console.log('It worked');
        }
      );
  });



// app.get("/", function(req, res){
//     res.sendFile("<h1>Welcome to the home page</h1>");
// });

// var person = {
//     name: "Priscila",
//     lastName: "Nakazato",
//     student: true,
//     stack:"express + node",
//     school: "UC Berkeley"
// }