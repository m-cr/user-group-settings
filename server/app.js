var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
var path = require('path');

app.use(session({
	secret: 'mikenpat'
}));

app.use(express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../browser')));

app.use(bodyParser.json());

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, '../browser/index.html'));
});

app.use('/api', require('./api'));

module.exports = app;