'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
.controller('MainCtrl', function ($scope) {
	$scope.funName = 'QQQQQ';
	$scope.awesomeThings = [
	 	'HTML5 Boilerplate',
	 	'AngularJS',
	 	'Karma'
 	];
});