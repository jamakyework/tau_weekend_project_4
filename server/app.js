var express = require('express');
var path = require('path');//no npm install required
var bodyParser = require('body-parser');
var pg = require('pg');
var app = express();

//middleware
app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(3000, function(){
  console.log("server is listening on port 3000");
});

//base route
app.get("/", function (req, res) {
  //send back our index.html file
  console.log('index path', path.join(__dirname,'/public/index.html'));
  res.sendFile(path.join(__dirname,'/public/index.html'));
});
