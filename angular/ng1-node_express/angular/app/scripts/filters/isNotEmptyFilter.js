'use strict';

/**
 * @ngdoc function
 * @name angularApp.filter:isNotEmptyFilter
 * @description
 * # isNotEmptyFilter
 * filter of the angularApp
*/

angular.module('angularApp')
 .filter('isNotEmpty', function () {
 	return function (input, capitalize_index, specified_char) {		//(需要过滤的对象,过滤器参数1,过滤器参数2,...)
 		
 		if (input == "object" && input == ''){
 			console.log('filter input is empty.');
 		}
	};

});