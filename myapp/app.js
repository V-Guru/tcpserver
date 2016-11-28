var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.set('view engine', 'jade');
// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


var port = process.env.PORT || 3007;

var router = express.Router();

router.use(function (req, res, next) {
  // log each request to the console
  console.log(req.method, req.url);
  next();
});


app.use('/', index);
app.use('/users', users);

var router = express.Router();

router.use(function (req, res, next) {
  // log each request to the console
  console.log(req.method, req.url);
  next();
});


var port = process.env.PORT || 3007;

router.get('/hi',function(req,res){
  res.send('hello');
})

module.exports = app;

app.listen(port);
console.log('Server listening on port : ' + port);

