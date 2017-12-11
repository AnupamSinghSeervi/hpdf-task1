
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var path = require('path');
var fetch = require('node-fetch');
var app = express();


//Task 1 - To print a simple string on requesting root path 
app.get('/',function(req,res){
res.send("Hello World - Anupam");
});


/*
//Task 2 - 

app.get('/authors',function(req,res){

fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
    });
// Respond a list of authors and the count of their posts (a newline for each author.

});
*/
 
//Task 3 - To set cookies
app.use(cookieParser());
app.get('/setcookie', function(req, res){
   res.cookie('name', 'Anupam');//Sets name = Anupam
   res.cookie('age', '18').send('cookie set'); //Sets age = 18
});

//Task 4 - To get cookies

app.get('/getcookie', function(req, res)  {
  res.send(req.cookies);
});

//Task 5 - 
app.get('/robot.txt', function(req, res){
   res.status(403).send("You do not have rights to visit this page");
});

//Task 6 -
app.get('/image', function(req, res) {
    res.sendFile(path.join(__dirname + '/realwork.png'));

})

//Task 7 -


app.use(bodyParser.urlencoded({ extended: false }));

app.get('/input', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/one-word-for-yourself', function (req, res) {
    var name = 'You are '+req.body.oneword + ' ';
    
    res.send(name + '. Happy New Year 0000011111100010 in advance');
});


app.listen(8080);
