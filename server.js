const PORT = process.env.PORT || 3000;

var express = require('express');
var app = express();
var livereload = require('connect-livereload');

app.use(express.static('./public'));

//necessary to communicate with livereload
app.use(livereload({ port : 35729 }));

//view engine
app.set('view engine', 'dot');
app.set('views', './views');

//server
app.listen(PORT, function() {

  console.log('App started listening on port', PORT);

});