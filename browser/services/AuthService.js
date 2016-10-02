angular.module('app')
	.factory('AuthService', function($http){
		return {
			login: function(credentials){
				console.log('someone tried to login w/ ', credentials);
			}
		}
	})