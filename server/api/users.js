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
	User.update({
			groupId: req.body.id
		}, {
			where: {id: req.params.id}
		})
		.then(function(row){
			console.log(row[1]);
			res.sendStatus(200);
		})
		.catch(next);
});