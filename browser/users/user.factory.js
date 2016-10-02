angular.module('UGS')
	.factory('UserService', function($http){
		var _users = {};
		return {
			findAll: findAll,
			create: create
		};

		function findAll(){
			return $http.get('/api/users')
				.then(function(users){
					angular.copy(users.data, _users);
					return _users;
				});
		};

		function create(user){
			return $http.post('api/users', {})
				.then(function(user){
					return _users; 
				})
		};

	});