var express = require('express');
var app = express();
var things = require('./things.js');
/*
app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/hello',function(req,res){

res.send("Hello world - Anupam");
});

app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.all('/test', function(req, res){
   res.send("HTTP method doesn't have any effect on this route!");
});
*/

app.get('/:name/:id', function(req, res) {
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});

app.use('/things', things);


app.listen(3000);
