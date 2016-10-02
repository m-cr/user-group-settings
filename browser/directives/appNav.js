angular.module('app')
	.directive('appNav', function(){
		return {
			templateUrl: '/templates/appNav.html',
			controller: function($scope, $state, AuthService, UserService){
				$scope.user = AuthService.user;
				$scope.logout = function(){
					AuthService.logout()
						.then(function(){
							$scope.user = AuthService.me();
							$state.go('home');
						});
				};
			}
		};
	});