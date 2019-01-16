'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:BookBriefCtrl
 * @description
 * # BookBriefCtrl
 * Controller of the angularApp
 */

angular.module('angularApp')
  .controller('BookBriefCtrl', function ($scope, $location, BookInfoService) {
  	var bookid = $location.url().split('/brief?bookid=')[1];
  	$scope.bookBrief = {};
  	BookInfoService.getBookData({'bookid': bookid}, briefCallback);			//调用BookInfoService获取书籍信息

  	//回调方法
	function briefCallback(data){
		$scope.bookBrief = data[0];
	}
});