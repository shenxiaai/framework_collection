var express 	= require('express'),
	path  		= require('path'),
	ejs   		= require('ejs'),
	favicon 	= require('serve-favicon'),
	logger  	= require('morgan'),
	app 		= express(),
	cookieParser = require('cookie-parser'),
	bodyParser   = require('body-parser');

var routes = require('./routes/index');
var crawlerRoute = require('./routes/crawler');
var crawlerImgRoute = require('./routes/crawlerImg');


// view engine setup
app.set('views', path.join(__dirname, 'views'));

//让ejs模板文件使用扩展名为html的文件
app.engine('.html', ejs.__express);
app.set('view engine', 'html');		// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/crawlerBook', crawlerRoute);
app.use('/crawlerImg', crawlerImgRoute);



//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


//连接mongodb
var mongo = require('mongodb'),
	monk  = require('monk'),
	db    = monk('localhost:27017/bookdb');   //bookdb为数据库名


//提供给angular访问的post接口
	//图书管理页面	
app.post('/bookManage', routes.bookManage(db));
app.post('/bookPost',routes.addBook(db));
app.post('/removeBook',routes.removeBook(db));


//nodejs自用post接口
app.post('/autoEnteringBook',crawlerRoute.crawler(db));
app.post('/autoDownloadImg',crawlerImgRoute.crawlerImg);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


module.exports = app;
