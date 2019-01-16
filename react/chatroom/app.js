const Koa = require('koa');
const route = require('koa-route');
const path = require('path');
const server = require('koa-static');
const io = require('socket.io')(server);
const app = new Koa();

let gSocket;

io.sockets.on('connection', socket => {
	gSocket = socket;
	socket.on('online', data => {
		
	});
});

//连接mongodb
const mongo = require('mongodb');
const monk = require('monk');
const database = monk('localhost:27017/database');   // database为数据库名

const main = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
};

const login = ctx => {
  console.log('ctx.request: ', ctx.request);
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
};

// 配置静态资源路径
// const static = server(path.join(__dirname, '/public'));
// app.use(static);
app.use(async (ctx, next) => {
	ctx.set('Access-Control-Allow-Origin', '*');
	ctx.set('Access-Control-Allow-Headers', 'X-Requested-With');
	await next();
});
app.use(route.get('/', main));
app.use(route.post('/login', login));

app.listen(3000);
