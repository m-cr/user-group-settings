var router = require('express').Router();
var User = require('../db').models.User;

module.exports = router;

router.post('/', function(req, res, next){
	User.findOne({
		where: {
			name: req.body.name,
			password: req.body.password
		}
	})
	.then(function(user){
		if(user){
			req.session.userId = user.id;
			return res.send(user);
		}
		return res.sendStatus(401);
	})
	.catch(next);
});

router.delete('/', function(req, res, next){
	req.session.userId = '';
});

router.get('/', function(req, res, next){
	User.findOne({
		where: {
			id: req.session.userId
		}
	})
	.then(function(user){
		res.send(user);
	})
	.catch(next);
});

