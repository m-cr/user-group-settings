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
		User.create({name: 'Mike', groupId: 1}),
		User.create({name: 'Pat', groupId: 2})
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