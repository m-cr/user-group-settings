angular.module('app')
	.factory('GroupService', function($http){
		var _groups = [];
		return {
			findAll: function(){
				return $http.get('/api/groups')
					.then(function(groups){
						angular.copy(groups.data, _groups);
						return _groups;
					})
			}
		};
	});