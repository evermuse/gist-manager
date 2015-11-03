var PORT = process.env.PORT || 3000;

var express = require('express');
var app = express();
var livereload = require('connect-livereload');
var request = require('request');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended : true }));

app.use(express.static('./public'));
app.use('/auth', require('./routes/api'));

//necessary to communicate with livereload
app.use(livereload({ port : 35729 }));

//index route
app.get('/', function(req, res) {

  res.json({ status : 200 });

});

//server
app.listen(PORT, function() {

  console.log('App started listening on port', PORT);

});
