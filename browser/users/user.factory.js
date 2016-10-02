angular.module('UGS')
	.factory('UserService', function($http){
		var _users = {};
		return {};

		function findAll(){
			return $http.get('/api/users')
				.then(function(users){
					angular.copy(users.data, _users);
					return _users;
				});
		}

	});