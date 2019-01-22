'use strict';

/**
 * @ngdoc function
 * @name angularApp.filter:booktypeFilter
 * @description
 * # booktypeFilter
 * Filter of the angularApp
*/

angular.module('angularApp')
 .filter('booktypeFilter', function () {
 	return function (input, capitalize_index, specified_char) {		//(需要过滤的对象,过滤器参数1,过滤器参数2,...)
 		for(var i = 0; i < input.length; i ++){
			var str =  input[i].book_type;
			var reg = /小说/;  			//有分组
			return reg.exec(str);		//运行返回 ["cat2", "at"]
	 	}
	};

});