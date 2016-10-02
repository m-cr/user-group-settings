var router = require('express').Router();
var User = require('../db').models.User;
var bodyParser = require('body-parser');

router.use(require('body-parser').json())

module.exports = router;

router.get('/', function(req, res, next){
	User.findAll()
	.then(function(users){
		res.send(users);
	})
	.catch(next);
});

router.put('/:id', function(req, res, next){
	console.log(req.body);
	console.log(req.body.name);
	User.update({
			name: req.body.name
		}, {
			where: {id: req.params.id}
		})
		.then(function(){
			res.send('here!');
			console.log('updated');
		})
		.catch(next);
});