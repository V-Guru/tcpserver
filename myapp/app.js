
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');


var app = express();


app.set('view engine', 'ejs');

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

router.get('/ping', function (req, res) {
    res.send('pong');
})

app.use('/api', router);

app.listen(port);
console.log('Server listening on port : ' + port);
