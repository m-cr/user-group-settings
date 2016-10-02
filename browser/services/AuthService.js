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
				var dfd = $q.defer();
				angular.copy({}, _user);
				dfd.resolve();
				return dfd.promise;
				//TODO add logout after route is created
			}
		};
	});