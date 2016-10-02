var router = require('express').Router();
var Group = require('../db').models.Group;

module.exports = router;

router.get('/', function(req, res, next){
	if(!req.session.userId){
		return res.sendStatus(403);
	}
	Group.findAll()
	.then(function(groups){
		res.send(groups);
	})
	.catch(next);
});
