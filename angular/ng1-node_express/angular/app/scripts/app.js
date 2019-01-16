'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular.module('angularApp', ['ngRoute', 'ngAnimate', 'ngResource', 'ngSanitize', 'ngTouch', 'ngDialog'])
	.config(function ($routeProvider, $httpProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'home'
			})
			.when('/brief', {
				templateUrl: 'views/bookBrief.html',
				controller: 'BookBriefCtrl',
				controllerAs: 'BookBrief'
			})
			.when('/reader', {
				templateUrl: 'views/reader.html'/*,
				controller: 'BookCtrl',
				controllerAs: 'book'*/
			})
			.when('/book', {
				templateUrl: 'views/book.html',
				controller: 'BookCtrl',
				controllerAs: 'book'
			})
			.when('/demo', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'main'
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl',
				controllerAs: 'about'
			})
			.otherwise({
				redirectTo: '/'
		});

		// $httpProvider.defaults.headers.common = {};
		// $httpProvider.defaults.headers.post = '';
		// $httpProvider.defaults.headers.put = {};
		// $httpProvider.defaults.headers.patch = {};


		//转换$http post请求数据格式request payload为form data
		$httpProvider.defaults.transformRequest = function(obj){
			var str = [];
			for(var p in obj){
				str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
			}
			return str.join('&');
		}

		$httpProvider.defaults.headers.post = {
			'Content-Type': 'application/x-www-form-urlencoded'
		};
	});