var db = require('./db');

var server = require('http').createServer(require('./pp'));

// if(process.env.SYNC === 'true'){
// 	console.log('seeding');
// 	db.sync()
// 	.then(function(){
// 		return db.seed();
// 	})
// 	.catch(function(err){
// 		console.log(err);
// 	})
// }

server.listen(process.env.PORT, function(){
	console.log('listening on port ', process.env.PORT);
});