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
			req.session.user = user;
			return res.send(user);
		}
		return res.sendStatus(401);
	})
	.catch(next);
})