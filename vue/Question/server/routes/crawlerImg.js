var fs 		= require('fs'),
	path 	= require('path'),
	express = require('express'),
	router 	= express.Router(),
	https 	= require('https'),
	request = require('request'),
	cheerio = require('cheerio');

/* GET crawler Page. */
router.get('/', function(req, res, next) {
	res.render('crawlerImg', { title: '自动下载图片页' });
});

module.exports = router;

module.exports.crawlerImg = function(req, res) {
	var url = req.body.url;

	request(url, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			// console.log(body);	//返回请求页面的HTML
			acquireData(body);
		}
	})


	function parseUrlForFileName(address) {     //用path模块截取url中的图片文件名
		var imgName = path.basename(address);
		return imgName;
	}


	function acquireData(data) {

		var $ = cheerio.load(data);
		var img = $('.pic img').toArray();
		var len = img.length;
		for (var i = 0; i < len; i++) {
			var imgSrc = img[i].attribs.src;
			var imgName = parseUrlForFileName(imgSrc).split('?v=')[0];  	//生成文件名

			// console.log('imgName : ' + imgName);

			downloadImg(imgSrc, imgName, function() {
				console.log(imgName + ' download finished!');
				res.send({'obj' : 'success'});
				return;
			});
		}
	}


	function downloadImg(Url, imgName, callback){
		var urlHeader = Url.split('/')[0] + '//' + Url.split('/')[2];

		console.log('####################### urlHeader #######################');
		console.log(urlHeader);

		request.get({
			url: Url,
			headers: {
				'referer': urlHeader
			}
		}).pipe(fs.createWriteStream('public/images/' + imgName)).on('close', callback);	//调用request的管道来下载到 images文件夹下
	}

};
