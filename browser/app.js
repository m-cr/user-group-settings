angular.module('app', ['ui.router']);

angular.module('app')
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home',{
				url: '/',
				templateUrl: '/templates/home.html',
				controller: function($scope, UserService){
					UserService.findAll()
						.then(function(users){
							$scope.users = users;
						})
						.catch(function(err){
							console.log(err);
						});
				}
			})
			.state('login', {
				url: '/login',
				templateUrl: '/templates/login.html',
				controller: function($scope, $state, AuthService){
					$scope.login = function(){
						AuthService.login($scope.credentials)
						.then(function(result){
							$state.go('home');
						})
						.catch();
					};
				}
			})
			.state('settings',{
				url: '/settings',
				templateUrl: '/templates/settings.html',
				controller: function($scope, AuthService, GroupService, UserService){
					GroupService.findAll()
						.then(function(groups){
							$scope.groups = groups;
						})
						.catch(function(err){
							console.log(err);
						});

					$scope.hasGroup = function(groupId){
						if ($scope.group == groupId) {
							return true;
						}
					};

					AuthService.me()
					.then(function(me){
						$scope.group = me.groupId;
					});	

					$scope.addGroup = function(groupId){
						UserService.addGroup($scope.user.id, groupId)
							.then(function(userGroup){
								$scope.group = groupId;
								console.log('controller success', userGroup);
							});
					};
				}
			});
	});
