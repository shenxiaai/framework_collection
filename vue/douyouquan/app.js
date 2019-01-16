var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    multipart = require('connect-multiparty'),    // 上传middleware
    multipartMiddleware = multipart(),
    mysql = require('mysql');


app.use(morgan('dev'));
app.use(bodyParser.json({'limit': '10000kb'}));
// app.use(bodyParser.urlencoded({'limit': '10000kb'}));
app.use(express.static('dist'));

// 创建一个connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  port: '3306',
  database: 'doudouquan',
  charset:'UTF8_GENERAL_CI'
});
connection.connect(function(err) {
  if(err) {
    console.log('[query] - :' + err);
    return;
  }
  console.log('[Mysql connection connect] succeed!!');
});


app.listen(3000, function () {
  console.log('Douyouquan server is running...');
});


//配置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
  res.header("Content-Type", "application/json;charset=utf-8");
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});


// 新增用户
app.post('/addUser', function(req, res, next) {
  var  addUser = 'INSERT INTO users(userName) VALUES(?)';
  connection.query(addUser, req.body.nickname, function (err, rows) {
    if(err) {
      console.log('[query] - ' + err);
      return;
    }
    res.send({obj: 'success','id': rows.insertId});
  });
});


// 发帖
app.post('/addPost', function(req, res, next) {
  var  addPost = 'INSERT INTO posts(postContent, postImg, postTime, postType, postPosition, userId) VALUES(?,?,?,?,?,?)';
  var  addPostParams = [req.body.data.postContent, req.body.data.postImg, req.body.data.postTime, req.body.data.postType, req.body.data.postPosition, req.body.userId];
  connection.query(addPost, addPostParams, function (err, rows) {
    if(err) {
      console.log('[query] - ' + err);
      return;
    }
    res.send({obj: 'success','id': rows.insertId});
  });
});


// 新增用户
app.post('/test', function(req, res, next) {
  connection.query('select * from users', function (err, rows) {
    if(err) {
      console.log('[query] - ' + err);
      return;
    }
    console.log('rows = ');
    console.log(rows);
    
    res.send({obj: 'success','result': rows});
  });
});




// connection.end(function(err) {
//   if(err) {
//     return;
//   }
//   console.log('[connection end] succeed!!');
// });