var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../browser')));

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, '../browser/index.html'));
});

module.exports = app;
