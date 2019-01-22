'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the angularApp
 */

angular.module('angularApp')
	.controller('BookCtrl', function ($scope, $http, ngDialog, BookInfoService, BookSubService, DelBookService) {
		$scope.editTitle = '新建';
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
		$scope.bookInfo = {};
		$scope.bookData = {};


		function backData(data){		//回调方法

			console.log('getBack all books data and callback function getted the data is: ');
			console.log(data);
			$scope.bookData = data;
		}

		//调用BookInfoService获取全部书籍信息
		BookInfoService.getBookData(backData);


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
				$scope.bookInfo.bookname = $scope.bookData[i].bookname;
				$scope.bookInfo.bookauthor = $scope.bookData[i].bookauthor;
				$scope.bookInfo.bookprize = $scope.bookData[i].bookprize;
				$scope.bookInfo.booksummary = $scope.bookData[i].booksummary;
				$scope.bookInfo.authorinfo = $scope.bookData[i].authorinfo;
				$scope.bookInfo.bookscore = $scope.bookData[i].bookscore;

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

		//表单提交后callback
		function formSubSuccCallback(){
			BookInfoService.getBookData(backData);
			ngDialog.open({
				// template: '<p>hello world!</p>',
				// className: 'pad10',
				// plain: true
				template: 'bookSubDislog',
				scope: $scope,	// if you use a controller with separate $scope service, this object will be passed to the $scope.$parent param
				controller: function($scope){
					setTimeout(function(){
						$scope.closeThisDialog();

						if(typeof callback == 'function'){
							callback();
						}

						$scope.reset($scope.bookForm);
					}, 2000);
				}
			});
		}


		//点击提交按钮执行
		$scope.submitForm = function(){
			BookSubService.formSubmit($scope, formSubSuccCallback);

		}


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

		//确认删除书籍信息
		$scope.delBookBtn = function(deleId){
			$scope.delConfirmDelDialog.close();	//关闭上一个确认弹窗
			DelBookService.delBook(deleId, function(){
				ngDialog.open({
					template: 'bookDelDislog',
					scope: $scope,	// if you use a controller with separate $scope service, this object will be passed to the $scope.$parent param
					controller: function($scope){
						setTimeout(function(){
							$scope.closeThisDialog();
						}, 2000);
					}
				});
			});
			
			BookInfoService.getBookData(backData);
		}



// ------- end -------
});
