angular.module('app', ['ui.router']);

angular.module('app')
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home',{
				url: '/',
				templateUrl: '/templates/home.html'
			})
			.state('login', {
				url: '/login',
				templateUrl: '/templates/login.html',
				controller: function($scope, $state, AuthService){
					$scope.login = function(){
						console.log('controller login function');
						AuthService.login($scope.credentials)
						.then(function(result){
							$state.go('home');
						})
						.catch()
					}
						.catch('/login');
					};
				}
			})
			.state('settings',{
				url: '/settings',
				templateUrl: '/templates/settings.html',
				controller: function($scope){

				}
			});
	});
