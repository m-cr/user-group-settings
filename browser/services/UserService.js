angular.module('app')
	.factory('UserService', function($http){
		var _users = [];
		return {
			findAll: findAll,
			addGroup: addGroup
		};

		function findAll(){
			return $http.get('/api/users')
				.then(function(users){
					angular.copy(users.data, _users);
					console.log(_users);
					return _users;
				});
		};

		function addGroup(userId, groupId){
			return $http.put('/api/users/' + userId, { id: groupId })
				.then(function(status){
					return status.data
				});
		}

	});