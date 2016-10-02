angular.module('app')
	.factory('AuthService', function($http, $q){
		var _user = {};
		
		return {
			user: _user,
			login: function(credentials){
				return $http.post('/api/sessions', credentials)
					.then(function(user){
						angular.copy(user.data, _user);
						return _user;
					});
			},

			logout: function(){
				return $http.delete('/api/sessions');
			},

			me: function(){
				return $http.get('/api/sessions')
					.then(function(user){
						angular.copy(user.data, _user);
						return _user;
					});
			}
		};
	});