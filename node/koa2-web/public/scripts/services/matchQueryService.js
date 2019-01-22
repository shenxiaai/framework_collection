'use strict';

/**
 * @ngdoc function
 * @name angularApp.service:matchQueryService
 * @description
 * # matchQueryService
 * service of the angularApp
 */

angular.module('angularApp').service('matchQueryService', function () {
	return {
		matchQuery : function (obj){
			var arr = [],
				arrEnd = [],
				len = 0,
				result = {},
				results = {};

			for(var key in obj){
				console.log(len);
				arr.push([key,obj[key]]);
			}
			switchFun(arr);

			for(var i = 0; i < arr.length; i ++){
				result += ',"' + arr[i][0] + '":"' + arr[i][1] + '"';
			}
			results = '{' + result + '}';

			function switchFun (arrs){
				for(var i = 0; i < arrs.length; i ++){
					switch(arrs[i][0]){
						case '_id':
							arrs[i][0] = 'bookid';
							break;
						case 'book_name':
							arrs[i][0] = 'bookname';
							break;
						case 'book_subtitle':
							arrs[i][0] = 'booksubtitle';
							break;
						case 'book_type': 
							arrs[i][0] = 'booktype';
							break;
						case 'book_author':
							arrs[i][0] = 'bookauthor';
							break;
						case 'book_prize':
							arrs[i][0] = 'bookprize';
							break;
						case 'book_summary':
							arrs[i][0] = 'booksummary';
							break;
						case 'book_cover':
							arrs[i][0] = 'bookcover';
							break;
						case 'rating_amount':
							arrs[i][0] = 'ratingamount';
							break;
						case 'book_score':
							arrs[i][0] = 'bookscore';
							break;
						case 'book_tip':
							arrs[i][0] = 'booktip';
							break;
					}
				}
				return arrs;
			}
		}
	}
});