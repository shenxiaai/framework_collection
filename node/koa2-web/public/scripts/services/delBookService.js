'use strict';

/**
 * @ngdoc function
 * @name angularApp.service:DelBookService
 * @description
 * # DelBookService
 * service of the angularApp
 */

angular.module('angularApp').service('DelBookService', function ($http) {
		//删除书籍信息
		return {
			delBook : function(bookId, callback){
				$http({
					method 	: 'post',
					url 	: 'http://10.100.12.159:3000/removeBook',
					headers : {'Content-Type': 'application/x-www-form-urlencoded'},  // set the headers so angular passing info as form data (not request payload)
					data 	: {'bookid' : bookId}
				}).success(function(data) {
					if (data.obj == 'success') {
						if(callback && typeof callback == 'function'){
							callback();
						}
					}
				}).error(function(data) {
					console.log('Faild!');
				});
			}
		};
	});