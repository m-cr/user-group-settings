var db = require('./_db');

var User = db.define('user', {
	name: db.Sequelize.STRING
});

module.exports = User;