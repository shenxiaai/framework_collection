'use strict';

/**
 * @ngdoc function
 * @name angularApp.service:BookInfoService
 * @description
 * # BookInfoService
 * service of the angularApp
 */
 
angular.module('angularApp').service('BookInfoService', function ($http) {
 	return{
		//获取书籍全部数据(可根据条件查询)
		getBookData: function(){
			var arg = arguments,len = arg.length,callback,postData;
			for(var i = 0; i < len; i++){
				if(len > 1){
					if(arguments[0] && arguments[0] != undefined && typeof arguments[0] == 'object'){
						postData = arguments[0];
					}else{
						postData = '';
					}
					callback = arguments[1];
				}else{
					callback = arguments[0];
				}
			}

			$http({
				method 	: 'post',
				url 	: 'http://10.100.12.159:3000/bookManage',
				headers : {'Content-Type': 'application/x-www-form-urlencoded'},  // set the headers so angular passing info as form data (not request payload)
				// async 	: false,
				data 	: (postData ? postData : '')
			}).success(function(data, status, headers, config) {
				if(callback && typeof callback == 'function') {
					callback(data);
				}
			}).error(function(data) {
				console.log('Faild!');
			});
		}
	};
});