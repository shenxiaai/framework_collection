'use strict';

$(function(){
	$('#crawlerUrlForm').on('submit', function(){
		var url = $('#bookListUrl').val(),
			bookTipSelect = $('#bookTipSelect option:selected').val();

		$.ajax({
			url: '/autoEnteringBook',
			type: 'POST',
			dataType: 'json',
			data: {
				url: url,
				tip: bookTipSelect
			}
		})
		.done(function(data) {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		});
		return false;
	});




	$('#crawlerImgUrlForm').on('submit', function(){
		var url = $('#imgUrl').val();
		$.ajax({
				url: '/autoDownloadImg',
				type: 'post',
				dataType: 'json',
				async: false,
				data: {url: url}
			})
			.done(function(data) {
				if(data.obj == 'success'){
					console.log("success");
				}
			})
			.fail(function() {
				console.log("error");
			});
		return false;
	});


});