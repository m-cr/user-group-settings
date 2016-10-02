var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../browser')));

//app.use(require('body-parser').json());;

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, '../browser/index.html'));
});

app.use('/api', require('./api'));

module.exports = app;
