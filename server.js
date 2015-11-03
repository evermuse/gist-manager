const PORT = process.env.PORT || 3000;

var express = require('express');
var app = express();
var livereload = require('connect-livereload');
var request = require('request');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended : true }));

app.use(express.static('./public'));

//necessary to communicate with livereload
app.use(livereload({ port : 35729 }));

//view engine
//app.set('view engine', 'dot');
//app.set('views', './views');


//auth callback

app.get('/auth/github/callback', (req, res) => {

  let code = req.query.code; //make sure code is here w/ console.log

  if (code === undefined) {

    return res.status(401).json({ error : 401, message : 'Invalid auth code' });

  }

  oauth2.getOAuthAccessToken(

    code,
    {
      redirect_uri : 'http://localhost:3000/auth/github/callback'
    },
    (err, access_token, refresh_token, results) => {

      if (err) {

        console.error(err);
        res.status(401).json(err);

      } else if ( results.error) {

        res.status(401).json(results.error);

      } else { //everything worked
        //get token
        //send token to client

        res.json({ access_token : access_token });

      }

    }

  );

});



//server
app.listen(PORT, function() {

  console.log('App started listening on port', PORT);

});



//separation of concerns for error checking the token

function getAuthBearerToken(req, res, next) {

  if (!req.headers.hasOwnProperty('authorization')) {

    return res.status(401).json({ error : 401, message : 'Bearer auth token not found in headers' });

  }

  var auth_header = req.headers.authorization;
  var auth_header_value = auth_header.split(' ');

  if (auth_header_value.length !== 2) {

    return res.status(401).json({ error : 401, message : 'Authorization header is malformed' });

  }

  req.access_token = auth_header_value[1];
  next();

}

app.get('/', (req, res) => {

  res.json({ status : 200 });

});

app.listen(PORT, () => {  // => fat arrows can be used instead of anonymous function

  console.log('API Listening on port:', PORT);

});