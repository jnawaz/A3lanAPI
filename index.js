var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var constants = require('./constants/constants.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

var token = require('./routes/token/token.js');
app.use('/api/token', token);

var user = require('./routes/user/user.js');
app.use('/api/user', user);

var mosque = require('./routes/mosque/mosque.js');
app.use('/api/mosque', mosque);

// END ROUTES FOR API
// =============================================================================

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  // response.render('pages/index');
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
