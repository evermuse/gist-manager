var PORT = process.env.PORT || 3000;

var express = require('express');
var app = express();
var livereload = require('connect-livereload');
var request = require('request');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended : true }));

app.use(express.static('./public'));
app.use('/api', require('./routes/api'));
//necessary to communicate with livereload
app.use(livereload({ port : 35729 }));

//app.get('/', function(req, res) {
//
//  res.json({ status : 200 });
//
//});


//view engine
//app.set('view engine', 'dot');
//app.set('views', './views');


//server
app.listen(PORT, function() {

  console.log('App started listening on port', PORT);

});
