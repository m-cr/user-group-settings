var db = require('./server/db');

var server = require('http').createServer(require('./server/app'));
var PORT = process.env.PORT || 3000;

if(process.env.SYNC === 'true'){
	console.log('seeding');
	db.sync()
	.then(function(){
		return db.seed();
	})
	.catch(function(err){
		console.log(err);
	});
}

server.listen(PORT, function(){
	console.log('listening on port ', PORT);
});
