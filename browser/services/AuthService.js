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
				angular.copy({}, _user);
				return $http.delete('/api/sessions')
					.then(function(success){
						return this.me
					});
			},

			me: function(){
				return $http.get('/api/sessions')
					.then(function(user){
						angular.copy(user.data, _user);
						return _user;
					});
			}
		};
	})
	.run(function(AuthService){
		AuthService.me();
	})