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
	User.update({
			groupId: req.body.id
		}, {
			where: {id: req.params.id}
		})
		.then(function(row){
			res.sendStatus(200);
		})
		.catch(next);
});