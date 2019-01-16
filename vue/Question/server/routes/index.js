var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '元宝读书' });
});

module.exports = router;


module.exports.bookManage = function(db) {
	return function(req, res) {
		var booksData = db.get('books'); 			//获得数据库中的集合(类似关系数据库中的表)

		for(var key in req.body){
			switch(key){
				case 'bookid':
					req.body = {'_id' : req.body[key]};
					break;
			}
		}

		console.log('req.body = ');
		console.log(req.body);

		booksData.find(req.body, function(err, docs){ 		//取得所有的集合数据, 渲染到页面上,关键字是booksInfo
			// res.render('bookMange', {'data':docs});
			// res.send(docs);
			// res.send(jsonp + '(' + JSON.stringify(docs) + ')');
			// JSON.parse
			res.json(docs);
		});
	};
};


module.exports.addBook = function(db) {
	return function(req, res) {
		var booksData = db.get('books'); 			//获得数据库中的集合(类似关系数据库中的表)

		console.log('req.body =');
		console.log(req.body);

		if(req.body.bookid == undefined){
			booksData.insert(req.body, function(err, result){ 		//取得所有的集合数据, 渲染到页面上,关键字是booksInfo
				res.send({obj: 'success'});
				console.log('插入成功!');
			});
		}else{
			booksData.update({'_id' : req.body.bookid}, data, function(err, result){ 		//取得所有的集合数据, 渲染到页面上,关键字是booksInfo
				res.send({obj: 'success'});
				console.log('修改成功!');
			});
		}


	};
};


module.exports.removeBook = function(db) {
	return function(req, res) {
		var booksData = db.get('books'); 			//获得数据库中的集合(类似关系数据库中的表)

		console.log('req.body.bookid =');
		console.log(req.body.bookid);

		booksData.remove({'_id' : req.body.bookid}, function(err, result){ 		//取得所有的集合数据, 渲染到页面上,关键字是booksInfo
			res.send({obj: 'success'});
			console.log('删除成功!');
		});
	};
};