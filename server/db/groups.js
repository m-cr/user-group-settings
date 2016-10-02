var db = require('./_db');

var Group = db.define('group', {
	name: db.Sequelize.STRING
});

module.exports = Group;