var express = require('express');
var app = express();
var path = require('path')
var films = require('./client/src/models/films')();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var FilmApi = require('./api/filmapi');

app.listen(3000, function () {
  console.log('App running on port '+this.address().port);
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  new FilmApi(app);

  console.log('app listening at http://%s:%s', host, port);
});