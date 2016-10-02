var express = require('express');
<<<<<<< HEAD
=======
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

>>>>>>> fbb64ab94c0f787002eef6bf584622bbe2d0bf88
var app = express();
var path = require('path');

app.use(session({
	secret: 'mikenpat'
}));

app.use(express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../browser')));
<<<<<<< HEAD

//app.use(require('body-parser').json());;
=======
app.use(bodyParser.json());
>>>>>>> fbb64ab94c0f787002eef6bf584622bbe2d0bf88

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, '../browser/index.html'));
});

app.use('/api', require('./api'));

module.exports = app;