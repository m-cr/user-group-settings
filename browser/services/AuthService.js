angular.module('app')
	.factory('AuthService', function($http){
		return {
			login: function(credentials){
				return true
			}
		}
	})