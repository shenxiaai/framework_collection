
var express = require('express'),
	router 	= express.Router(),
	https   = require('https'),
	cheerio = require('cheerio');       //cheerio模块处理html源码

// var url = 'https://read.douban.com/category/new/';


/* GET crawler Page. */
router.get('/', function(req, res, next) {
  res.render('crawler', { title: '自动录入书籍信息页' });
});

module.exports = router;



module.exports.crawler = function(db){
	return function(req, res) {
		var url = req.body.url,
			booktip = req.body.tip;
		var booksData = [];

		function cheerioHttp(callback){
			function filterBooks(html){
				var $ = cheerio.load(html, {decodeEntities: false});    //decodeEntities: false用于解决获取的html都是编码问题
				var books = $('li.item');

				books.each(function(item){
					var book = $(this);
					var bookname = book.find('.title').find('a').text();
					var subtitle = book.find('.title').find('p.subtitle').text();
					var bookauthor = book.find('.author-item').text();
					var bookprize = book.find('span.price-tag').text();
					var booktype = book.find('span.category').find('.labeled-text').text();
					var booksummary = book.find('.article-desc-brief').text();
					// var authorinfo = book.find('');

					var imgLen = book.find('.cover').find('img').attr('src').split('/').length;
					var bookcover = book.find('.cover').find('img').attr('src').split('/')[imgLen-1].split('?v=')[0];
					var ratingamount = book.find('span.rating-amount').find('span').text();
					var bookscore = book.find('span.rating-average').text();

					var bookData = {
						book_name		: bookname,
						book_subtitle	: subtitle,
						book_type 		: booktype,
						book_author		: bookauthor,
						book_tip 		: booktip,
						book_prize		: bookprize,
						book_summary	: booksummary,
						// authorinfo		: authorinfo,
						book_cover		: bookcover,
						rating_amount	: ratingamount,
						book_score		: bookscore
					};

					booksData.push(bookData);
				});

				return booksData;
			}


			https.get(url, function(res){
				var html = '';

				res.on('data', function(data){
					html += data;
				});

				res.on('end', function(){
					filterBooks(html);
					if(callback && typeof callback == 'function'){
						callback();
					}

				});
			}).on('error',function(){
				console.log('抓取数据出错！');
			});
		}



		var booksDatabase = db.get('books');            //获得数据库中的集合(类似关系数据库中的表)
		cheerioHttp(function(){
			booksDatabase.insert(booksData, function(err, docs){       //取得所有的集合数据, 渲染到页面上,关键字是booksInfo
				res.json(docs);
				console.log('Auto insert data success!');
			});
		});

		
	};

};
