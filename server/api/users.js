var router = require('express').Router();
var User = require('../db').models.User;

module.exports = router;

router.get('/', function(req, res, next){
	User.findAll()
	.then(function(users){
		res.send(users);
	})
	.catch(next);
});

router.put('/:id', function(req, res, next){
	console.log(req.body.name);
	User.update({
			name: req.body.name
		}, {
			where: {id: req.params.id}
		})
		.then(function(){
			console.log('updated');
		})
		.catch(next);
});