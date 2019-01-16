'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the angularApp
 */

angular.module('angularApp')
	.controller('BookCtrl', function ($scope, $http, ngDialog) {
		$scope.editTitle = '新建';
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
		$scope.bookInfo = {};
		$scope.bookData = {};


		$scope.getBookData = function(){
			var postData;
			if(arguments[0] == undefined){
				postData = '';
			}else{
				postData = {'_id': arguments[0]};
			}

			$http({
				method 	: 'post',
				url 	: 'http://10.100.12.159:3000/bookManage',
				headers : {'Content-Type': 'application/x-www-form-urlencoded'},  // set the headers so angular passing info as form data (not request payload)
				// async 	: false,
				data 	: postData
			}).success(function(data/*, status, headers, config*/) {
				$scope.bookData = data;
			}).error(function(data) {
				console.log('Faild!');
			});
		}
		$scope.getBookData();


		//编辑 && 修改书籍信息
		$scope.editBook = function(bookId, i) {
			// console.log(bookId);
			if (bookId == 'new') {
				$scope.editTitle = '新建';
				$scope.edit = true;
				$scope.delBtn = false;
				$scope.incomplete = true;
				$scope.fName = '';
				$scope.lName = '';
			} else {
				$scope.editTitle = '修改';
				$scope.edit = false;
				$scope.delBtn = true;

				$scope.bookInfo.bookid = $scope.bookData[i]._id;
				$scope.bookInfo.bookname = $scope.bookData[i].book_name;
				$scope.bookInfo.bookauthor = $scope.bookData[i].book_author;
				$scope.bookInfo.bookprize = $scope.bookData[i].book_prize;
				$scope.bookInfo.booksummary = $scope.bookData[i].book_summary;
				$scope.bookInfo.authorinfo = $scope.bookData[i].author_info;
				$scope.bookInfo.bookscore = $scope.bookData[i].book_score;

			}
		};


		//表单reset
		$scope.reset = function (form) {
            //置空表单
			$scope.bookInfo.bookid = '';
			$scope.bookInfo.bookname = '';
			$scope.bookInfo.bookauthor = '';
			$scope.bookInfo.bookprize = '';
			$scope.bookInfo.booksummary = '';
			$scope.bookInfo.authorinfo = '';
			$scope.bookInfo.bookscore = '';

            if(form) {
                document.getElementById('_bookname').blur();
				document.getElementById('_bookname').blur();
				document.getElementById('_bookauthor').blur();
				document.getElementById('_bookprize').blur();
				document.getElementById('_booksummary').blur();
				document.getElementById('_authorinfo').blur();
				document.getElementById('_bookscore').blur();

				// $scope.bookForm.$setUntouched();
				form.$setPristine();
				form.$setUntouched();
            }
        };


		//表单提交
		$scope.submitForm = function(){
			$http({
				method 	: 'post',
				url 	: 'http://10.100.12.159:3000/bookPost',
				headers : {'Content-Type': 'application/x-www-form-urlencoded'},  // set the headers so angular passing info as form data (not request payload)
				data 	: $scope.bookInfo
			}).success(function(data) {
				if (data.obj == 'success') {
					ngDialog.open({
						// template: '<p>hello world!</p>',
						// className: 'pad10',
						// plain: true
						template: 'bookSubDislog',
						scope: $scope,	// if you use a controller with separate $scope service, this object will be passed to the $scope.$parent param
						controller: function($scope){
							setTimeout(function(){
								$scope.closeThisDialog();
								$scope.getBookData();	//this is $scope.$parent function

								$scope.reset($scope.bookForm);
							}, 2000);
						}
					});
				}
			}).error(function(data) {
				console.log('Faild!');
			});
			return false;
		};



		//删除书籍 - 确认弹窗
		$scope.delBookConfirm = function(bookId){
			$scope.delConfirmDelDialog = ngDialog.open({
				template: 'bookDelConfirmDislog',
				scope: $scope,	// if you use a controller with separate $scope service, this object will be passed to the $scope.$parent param
				controller: function($scope){
					$scope.deleId = bookId;
				}
			});
		};


		//删除书籍信息
		$scope.delBook = function(bookId){
			$scope.delConfirmDelDialog.close();	//关闭上一个确认弹窗
			$http({
				method 	: 'post',
				url 	: 'http://10.100.12.159:3000/removeBook',
				headers : {'Content-Type': 'application/x-www-form-urlencoded'},  // set the headers so angular passing info as form data (not request payload)
				data 	: {'bookid' : bookId}
			}).success(function(data) {
				if (data.obj == 'success') {
					ngDialog.open({
						template: 'bookDelDislog',
						scope: $scope,	// if you use a controller with separate $scope service, this object will be passed to the $scope.$parent param
						controller: function($scope){
							setTimeout(function(){
								$scope.closeThisDialog();
								$scope.getBookData();	//this is $scope.$parent function
							}, 2000);
						}
					});
				}
			}).error(function(data) {
				console.log('Faild!');
			});
		};

// ------- end -------
});
