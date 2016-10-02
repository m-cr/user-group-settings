angular.module('UGS', ['ui.router']);

angular.module('UGS')
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home',{
				url: '/',
				templateUrl: '/home/home.html'
			})
			.state('users', {
				url: '/users',
				templateUrl: '/users/user.html',
				controller: 'UserCtrl'
			})
			.state('groups',{
				url: '/groups',
				templateUrl: '/groups/group.html',
				controller: 'GroupCtrl' 
			});
	});
