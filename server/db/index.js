var db = require('./_db');

var Promise = require('bluebird');

var User = require('./users');

var Group = require('./groups');

Group.hasMany(User);
User.belongsTo(Group);

var sync = function(){
	return db.sync({force: true});
};

var seed = function(){
	return Promise.all([
		Group.create({name: 'Developer'}),
		Group.create({name: 'Admin'}),
		Group.create({name: 'HR'}),
		User.create({name: 'Mike', password: '1234', groupId: 1}),
		User.create({name: 'Pat', password: '5678', groupId: 2})
	]);
};

module.exports = {
	seed: seed,
	sync: sync,
	models: {
		User: User,
		Group: Group
	}
};