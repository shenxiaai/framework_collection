'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the angularApp
 */

angular.module('angularApp')
	.controller('HomeCtrl', function ($scope, $http, $filter, ngDialog, BookInfoService) {
		$scope.newCatogory = {};
		$scope.drawings = {};
		$scope.forFree = {};

		BookInfoService.getBookData({'booktip': '新上架'} , newCatogory);			//调用BookInfoService获取全部书籍信息
		function newCatogory(data){
			$scope.newCatogory = data;
		}

		BookInfoService.getBookData({'booktip': '画册'} , drawings);			//调用BookInfoService获取全部书籍信息
		function drawings(data){
			$scope.drawings = data;
		}

		BookInfoService.getBookData({'booktip': '免费'} , forFree);			//调用BookInfoService获取全部书籍信息
		function forFree(data){
			$scope.forFree = data;
		}
	});