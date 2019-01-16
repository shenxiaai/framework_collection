'use strict';

/**
 * @ngdoc function
 * @name angularApp.service:BookSubService
 * @description
 * # BookSubService
 * service of the angularApp
 */

angular.module('angularApp').service('BookSubService', function ($http) {
	return {
		//表单提交
		formSubmit : function(_scope, callback){
			$http({
				method 	: 'post',
				url 	: 'http://10.100.12.159:3000/bookPost',
				headers : {'Content-Type': 'application/x-www-form-urlencoded'},  // set the headers so angular passing info as form data (not request payload)
				data 	: _scope.bookInfo
			}).success(function(data) {
				if (data.obj == 'success') {
					if(callback && typeof callback == 'function'){
						callback();
					}
				}
			}).error(function(data) {
				console.log('Faild!');
			});
			return false;
		}
	};
});