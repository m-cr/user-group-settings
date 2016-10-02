var Sequelize = require('sequelize');

var db = new Sequelize(process.env.DATABASE_URL, {logging: false});

var Promise = require('bluebird');

var User = db.define('user', {
	name: Sequelize.STRING
});

var Group = db.define('group', {
	name: Sequelize.STRING
});

User.hasMany(Group);
Group.belongsTo(User);

var sync = function(){
	return db.sync({force: true});
};

var seed = function(){
	return Promise.all([
		User.create({name: 'Mike'}),
		User.create({name: 'Pat'}),
		Group.create({name: 'Developer'}),
		Group.create({name: 'Admin'}),
		Group.create({name: 'HR'})
	])
};

module.exports = {
	seed: seed,
	sync: sync,
	models: {
		User: User,
		Group: Group
	}
};